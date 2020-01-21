const doT = require('dot')

const { readFile, exists } = require('./files')

// const { getSettings } = require('./settings')

module.exports = {
  render,
  cdnUrl
}

function render (filename, data = {}) {
  const htmlTemplate = readFile(filename)
  const renderer = doT.template(htmlTemplate)

  data = Object.assign({}, window.globals.template, data)

  return renderer.call({cdnUrl}, data)
}

function cdnUrl (file) {
  // return file without modification if it looks like it contains a scheme

  if (file.match(/:\/\//)) {
    return file
  }

  let cdnHost = (window.globals.template.cdnHost || '').replace(/^[.\/]+/, '')

  if (cdnHost.length) {
    cdnHost = `${cdnHost}/`
  }

  return cdnHost + file.replace(/^[.\/]+/, '')
}

// const { app } = require('electron').remote
// function getSettings () {
//   let dirname = app.getPath('userData')
//   console.log('Dirname: ' + dirname)
//
//   if (exists(dirname + '/settings.json')) {
//     return JSON.parse(readFile(dirname + '/settings.json'))
//   } else {
//     return JSON.parse(readFile(app.getAppPath() + '/settings.json'))
//   }
// }
