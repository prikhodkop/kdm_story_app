/*
 * Html templates execute their view render functions at the end of the body
 * element. This makes it difficult to run via a browser as require will not
 * be defined.
 *
 * If this file is loaded by a browser it will not do anything, it's expected
 * that html-webpack-plugin is used to create a bundle targeting interop/main
 * which will be injected after this script.
 *
 * If this file is loaded via electron, we can call interop/main
 * immediately.
 */

 window.globals.process = 'web'

if (typeof process !== 'undefined' && process.versions.hasOwnProperty('electron')) {
  window.globals.process = 'local'
  require('./js/interop/main')
}
