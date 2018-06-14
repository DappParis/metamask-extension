# Metablock: your Browser Extension Companion !
[![Build Status](https://circleci.com/gh/MetaMask/metamask-extension.svg?style=shield&circle-token=a1ddcf3cd38e29267f254c9c59d556d513e3a1fd)](https://circleci.com/gh/MetaMask/metamask-extension) [![Coverage Status](https://coveralls.io/repos/github/MetaMask/metamask-extension/badge.svg?branch=master)](https://coveralls.io/github/MetaMask/metamask-extension?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/MetaMask/metamask-extension.svg)](https://greenkeeper.io/) [![Stories in Ready](https://badge.waffle.io/MetaMask/metamask-extension.png?label=in%20progress&title=waffle.io)](https://waffle.io/MetaMask/metamask-extension)

## Support

If you're a user seeking support, [here is our support site](https://metamask.helpscoutdocs.com/).

## Building locally

 - Install [Node.js](https://nodejs.org/en/) version 6.3.1 or later.
 - Install local dependencies with `npm install`.
 - Install gulp globally with `npm install -g gulp-cli`.
 - Build the project to the `./dist/` folder with `gulp build`.
 - Optionally, to rebuild on file changes, run `gulp dev`.
 - To package .zip files for distribution, run `gulp zip`, or run the full build & zip with `gulp dist`.

 Uncompressed builds can be found in `/dist`, compressed builds can be found in `/builds` once they're built.

### Running Tests

Requires `mocha` installed. Run `npm install -g mocha`.

Then just run `npm test`.

You can also test with a continuously watching process, via `npm run watch`.

You can run the linter by itself with `gulp lint`.


## Development

```bash
npm install
npm start
```

## Build for Publishing

```bash
npm run dist
```

#### Writing Browser Tests

To write tests that will be run in the browser using QUnit, add your test files to `test/integration/lib`.

