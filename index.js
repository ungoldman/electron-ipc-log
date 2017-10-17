var isRenderer = require('is-electron-renderer')
var electron = require('electron')

function electronIpcLog (log) {
  var ipc = isRenderer ? electron.ipcRenderer : electron.ipcMain
  var oldEmit = ipc.emit

  if (log == null) log = console.log

  ipc.emit = function (channel, event, ...data) {
    // only log user defined ipc messages
    if (channel.indexOf('ELECTRON') === -1) log(channel, event, ...data)
    oldEmit.call(ipc, channel, event, ...data)
  }
}

module.exports = electronIpcLog
