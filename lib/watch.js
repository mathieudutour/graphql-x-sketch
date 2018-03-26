const fs = require('fs')
const watcher = require('@atom/watcher')
const isSketchFile = require('./is-sketch-file')

module.exports = (paths, handleEvent, onError) => {
  const folders = paths.filter(p => fs.statSync(p).isDirectory())

  Promise.all(
    folders.map(p =>
      watcher.watchPath(p, {}, events => {
        events.forEach(event => {
          if (
            isSketchFile(event.path) ||
            (event.oldPath && isSketchFile(event.oldPath))
          ) {
            console.log(`Found an update in ${event.path}.`)
            handleEvent(event)
          }
        })
      })
    )
  ).then(watchers => {
    // Report errors that occur after the watch root has been started.
    watchers.forEach(w =>
      w.onDidError(err => {
        console.error(`Something went wrong: ${err}`)
        // Immediately stop receiving filesystem events. If this is the last watcher on this path, asynchronously release
        // any OS resources required to subscribe to these events.
        watchers.forEach(_w => _w.dispose())
        onError(err)
      })
    )
  })
}
