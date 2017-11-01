var electron = require('electron')

const internal = ['CHROME', 'ELECTRON']

function electronIpcLog (log) {
  if (log == null) log = console.log
  if (electron.ipcRenderer) return handleRenderer(log)
  if (electron.ipcMain) return handleMain(log)
}

function handleRenderer (log) {
  var { ipcRenderer } = electron
  var oldEmit = ipcRenderer.emit
  var oldSend = ipcRenderer.send
  var oldSendSync = ipcRenderer.sendSync

  ipcRenderer.emit = function (channel, event, ...data) {
    trackEvent(log, channel, data)
    return oldEmit.apply(ipcRenderer, arguments)
  }

  ipcRenderer.send = function (channel, ...data) {
    trackEvent(log, channel, data, true)
    return oldSend.apply(ipcRenderer, arguments)
  }

  ipcRenderer.sendSync = function (channel, ...data) {
    trackEvent(log, channel, data, true, true)
    const returnValue = oldSendSync.apply(ipcRenderer, arguments)
    trackEvent(log, channel, [returnValue], false, true)
    return returnValue
  }
}

function handleMain (log) {
  var { ipcMain } = electron
  var oldEmit = ipcMain.emit

  ipcMain.emit = function (channel, event, ...data) {
    trackEvent(log, channel, data)
    return oldEmit.apply(ipcMain, arguments)
  }
}

function trackEvent (log, channel, data, sent, sync) {
  // only log user defined ipc messages
  const isInteral = internal.some(str => channel.indexOf(str) !== -1)
  if (isInteral) return

  var event = { channel, data }

  // only include sent & sync when defined
  if (sent) event.sent = sent
  if (sync) event.sync = sync

  log(event)
}

module.exports = electronIpcLog
