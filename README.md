# electron-ipc-log

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

`electronIpcLog` accepts a logging function, and defaults to `console.log` if none is provided.

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
