function addLoggingToElectronIPC (log) {
  var { ipcRenderer, ipcMain } = require('electron')
  if (log == null) log = console.log

  var mainEmit = ipcMain.emit
  var rendererEmit = ipcRenderer.emit

  ipcMain.emit = function (name, e, ...args) {
    log(`[ipc:main] ${name} ${args.join(', ')}`)
    mainEmit.call(ipcMain, name, e, ...args)
  }

  ipcRenderer.emit = function (name, e, ...args) {
    log(`[ipc:renderer] ${name} ${args.join(', ')}`)
    rendererEmit.call(ipcRenderer, name, e, ...args)
  }
}

module.exports = addLoggingToElectronIPC
