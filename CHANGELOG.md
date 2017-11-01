# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.0.1"></a>
## [3.0.1](https://github.com/ungoldman/electron-ipc-log/compare/v3.0.0...v3.0.1) (2017-11-01)


### Bug Fixes

* **emit:** use apply & return ([b39a52b](https://github.com/ungoldman/electron-ipc-log/commit/b39a52b))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/ungoldman/electron-ipc-log/compare/v2.0.2...v3.0.0) (2017-10-31)


### Features

* **ipcRenderer:** track send & sendSync events ([f82fe33](https://github.com/ungoldman/electron-ipc-log/commit/f82fe33))


### BREAKING CHANGES

* **ipcRenderer:** log function parameters changed from
`channel:string, event:object, ...data:array` to `event:object`.
See readme for new usage.



<a name="2.0.2"></a>
## [2.0.2](https://github.com/ungoldman/electron-ipc-log/compare/v2.0.1...v2.0.2) (2017-10-30)


### Bug Fixes

* add CHROME to internal blacklist ([26d52f8](https://github.com/ungoldman/electron-ipc-log/commit/26d52f8))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/ungoldman/electron-ipc-log/compare/v2.0.0...v2.0.1) (2017-10-17)


### Bug Fixes

* **docs:** update API description ([3d1030a](https://github.com/ungoldman/electron-ipc-log/commit/3d1030a))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/ungoldman/electron-ipc-log/compare/v1.0.2...v2.0.0) (2017-10-17)


### Features

* pass emit args directly to log function ([8f920dc](https://github.com/ungoldman/electron-ipc-log/commit/8f920dc))


### BREAKING CHANGES

* changed function signature of primary export



<a name="1.0.2"></a>
## [1.0.2](https://github.com/ungoldman/electron-ipc-log/compare/v1.0.1...v1.0.2) (2017-10-17)


### Bug Fixes

* **pkg:** remove standard from deps ([3e4d232](https://github.com/ungoldman/electron-ipc-log/commit/3e4d232))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ungoldman/electron-ipc-log/compare/v1.0.0...v1.0.1) (2017-10-17)


### Bug Fixes

* **pkg:** remove electron from deps ([b43b3ed](https://github.com/ungoldman/electron-ipc-log/commit/b43b3ed))



<a name="1.0.0"></a>
# 1.0.0 (2017-10-17)


### Bug Fixes

* detect if in renderer ([dd9e049](https://github.com/ungoldman/electron-ipc-log/commit/dd9e049))
* ignore internal electron messages ([a407473](https://github.com/ungoldman/electron-ipc-log/commit/a407473))


### Features

* initial commit ([11fb45f](https://github.com/ungoldman/electron-ipc-log/commit/11fb45f))
