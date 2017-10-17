var isRenderer = require('is-electron-renderer')
var electron = require('electron')

function electronIpcLog (log) {
  var ipc

  if (isRenderer) ipc = electron.ipcRenderer
  else ipc = electron.ipcMain
  if (log == null) log = console.log

  var oldEmit = ipc.emit
  var scope = isRenderer ? 'renderer' : 'main'

  ipc.emit = function (name, e, ...args) {
    log(`[ipc:${scope}] ${name} ${args.join(', ')}`)
    oldEmit.call(ipc, name, e, ...args)
  }
}

module.exports = electronIpcLog
