const fs = require('fs')
const path = require('path')
const util = require('util')
const JSZip = require('jszip')

const readFile = util.promisify(fs.readFile)

module.exports = function loadFile(filePath) {
  const name = path.basename(filePath).replace('.sketch', '')
  return readFile(filePath)
    .then(data => JSZip.loadAsync(data))
    .then(zip =>
      zip
        .file('document.json')
        .async('string')
        .then(data => ({
          document: JSON.parse(data),
          zip,
        }))
    )
    .then(({ zip, document }) => {
      const pages = {}
      const images = {}
      return Promise.all(
        Object.keys(zip.files).reduce((promises, k) => {
          if (k.indexOf('pages/') === 0 && k !== 'pages/') {
            promises.push(
              zip
                .file(k)
                .async('string')
                .then(data => {
                  pages[k.replace(/\.json$/, '')] = JSON.parse(data)
                })
            )
          } else if (k.indexOf('images/') === 0 && k !== 'images/') {
            promises.push(
              Promise.resolve().then(() => {
                images[k] = zip.file(k)
              })
            )
          }
          return promises
        }, [])
      ).then(() => ({
        document,
        filePath,
        name,
        pages,
        images,
        id: document.do_objectID,
      }))
    })
}
