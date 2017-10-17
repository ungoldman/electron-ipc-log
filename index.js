var isRenderer = require('is-electron-renderer')
var electron = require('electron')

function electronIpcLog (log) {
  var ipc = isRenderer ? electron.ipcRenderer : electron.ipcMain
  var scope = isRenderer ? 'RENDERER' : 'MAIN'
  var oldEmit = ipc.emit

  if (log == null) log = console.log

  ipc.emit = function (name, e, ...args) {
    // ignore internal electron ipc messages
    if (name.indexOf('ELECTRON') === -1) {
      log(`[IPC:${scope}] ${name} ${args.join(', ')}`)
    }
    oldEmit.call(ipc, name, e, ...args)
  }
}

module.exports = electronIpcLog
