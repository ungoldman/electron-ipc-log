**DEPRECATED ⚠️  - This package is no longer maintained.**

---

# electron-ipc-log

Log all user-defined IPC traffic in an electron app.

[![npm][1]][2]
[![travis][3]][4]
[![standard][5]][6]
[![downloads][7]][2]

[1]: https://img.shields.io/npm/v/electron-ipc-log.svg?style=flat-square
[2]: https://www.npmjs.com/package/electron-ipc-log
[3]: https://img.shields.io/travis/ungoldman/electron-ipc-log/master.svg?style=flat-square
[4]: https://travis-ci.org/ungoldman/electron-ipc-log
[5]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[6]: http://standardjs.com/
[7]: https://img.shields.io/npm/dm/electron-ipc-log.svg?style=flat-square


## Install

```
npm install electron-ipc-log
```

## Usage

```js
var electronIpcLog = require('electron-ipc-log')

electronIpcLog(event => {
  var { channel, data, sent, sync } = event
  var args = [sent ? '⬆️' : '⬇️', channel, ...data]
  if (sync) args.unshift('ipc:sync')
  else args.unshift('ipc')
  console.log(...args)
})
```

### API

#### `electronIpcLog(log: function)`

Accepts a logging function with parameters `(event: object)`, where event is an object `{ channel:string, data:object, sent:bool, sync:bool }`.

- `channel` - name of the channel the message was sent through.
- `data` - any number of arguments passed by the user via IPC.
- `sent` - true if sent via `ipcRenderer.send` or `ipcRenderer.sendSync` (`ipcRenderer` only)
- `sync` - true if synchronous (`ipcRenderer` only)

Needs to be called once per process, so for example if you have one main process and two renderer windows, and you want to log IPC traffic in each process, you need to call `electronIpcLog` in each process.

All internal electron IPC messages (prefixed with `ELECTRON` or `CHROME`, e.g. `ELECTRON_BROWSER_REQUIRE`) are ignored, as they are very noisy and not useful for most use cases. I'm open to adding a config option for verbose logging if someone really needs it.

**Note:** this module monkey patches the `emit`, `send`, and `sendSync` methods of `ipcRender` (or just `ipcMain.emit` depending on the context). It's not ideal but I don't know of another way of hooking into electron IPC events at this time. This is the method [`devtron`](https://github.com/electron/devtron/) uses.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
