# electron-ipc-log

Log all user-defined IPC traffic in an electron app.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/electron-ipc-log.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/electron-ipc-log
[travis-image]: https://img.shields.io/travis/ungoldman/electron-ipc-log.svg?style=flat-square
[travis-url]: https://travis-ci.org/ungoldman/electron-ipc-log
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install electron-ipc-log
```

## Usage

```js
var electronIpcLog = require('electron-ipc-log')

electronIpcLog(console.log)
```

### API

#### `electronIpcLog(log)`

Accepts a logging function (`log`). Defaults to `console.log` if none is provided.

Needs to be called once in main process and once in renderer process.

**Note:** this is module monkey patches the `emit` method of `ipcMain` (or `ipcRenderer` depending on the context). It's not ideal but I don't know of another way of hooking into electron IPC events at the time of this writing.

I'm ignoring all internal electron IPC messages (all prefixed with `ELECTRON`, e.g. `ELECTRON_BROWSER_REQUIRE`) as they are very noisy and not useful for most use cases. I'm open to adding a config option for verbose logging if someone needs it.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
