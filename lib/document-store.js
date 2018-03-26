const fs = require('fs')
const util = require('util')
const path = require('path')
const isSketchFile = require('./is-sketch-file')
const loadSketchFile = require('./load-sketch-file')

const lstat = util.promisify(fs.lstat)
const readdir = util.promisify(fs.readdir)

function walk(dir) {
  const sketchFiles = []

  function _walk(pathItem) {
    return lstat(pathItem).then(stats => {
      if (!stats.isDirectory()) {
        if (isSketchFile(pathItem)) {
          sketchFiles.push(pathItem)
        }
        return undefined
      }

      return readdir(pathItem).then(pathItems =>
        Promise.all(
          pathItems.reduce((prev, part) => {
            if (
              part !== '.git' &&
              part !== 'node_modules' &&
              part !== '.awcache'
            ) {
              prev.push(_walk(path.join(pathItem, part)))
            }
            return prev
          }, [])
        )
      )
    })
  }

  return _walk(path.resolve(dir)).then(() => sketchFiles)
}

module.exports = paths => {
  let sketchFiles = paths.filter(isSketchFile).map(path.resolve)

  const folders = paths.filter(p => fs.statSync(p).isDirectory())

  return Promise.all(
    folders.map(folder =>
      walk(folder).then(files => {
        sketchFiles = sketchFiles.concat(files)
      })
    )
  )
    .then(() => Promise.all(sketchFiles.map(loadSketchFile)))
    .then(parsedFiles => {
      sketchFiles = parsedFiles
    })
    .then(() => ({
      getDocument: () => sketchFiles,
      // eslint-disable-next-line consistent-return
      onEvent: event => {
        switch (event.action) {
          case 'created':
            return loadSketchFile(event.path).then(sketchFile => {
              sketchFiles.push(sketchFile)
            })
          case 'deleted': {
            sketchFiles = sketchFiles.filter(f => f.filePath !== event.path)
            break
          }
          case 'modified':
          case 'renamed':
            return loadSketchFile(event.path).then(sketchFile => {
              sketchFiles = sketchFiles.map(f => {
                if (f.filePath === (event.oldPath || event.path)) {
                  return sketchFile
                }
                return f
              })
            })
          default:
            break
        }
      },
    }))
}
