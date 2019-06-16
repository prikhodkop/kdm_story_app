const doT = require('dot')

const { readFile } = require('./files')

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
