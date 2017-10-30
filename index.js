var isRenderer = require('is-electron-renderer')
var electron = require('electron')

const internal = ['CHROME', 'ELECTRON']

function electronIpcLog (log) {
  var ipc = isRenderer ? electron.ipcRenderer : electron.ipcMain
  var oldEmit = ipc.emit

  if (log == null) log = console.log

  ipc.emit = function (channel, event, ...data) {
    // only log user defined ipc messages
    const isInteral = internal.some(str => channel.indexOf(str) !== -1)
    if (!isInteral) log(channel, event, ...data)
    oldEmit.call(ipc, channel, event, ...data)
  }
}

module.exports = electronIpcLog
