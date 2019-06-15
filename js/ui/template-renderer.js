const doT = require('dot')

const { readFile } = require('./files')

module.exports = {
  render,
}

function render (filename, data = {}) {
  const htmlTemplate = readFile(filename)
  const renderer = doT.template(htmlTemplate)

  data = Object.assign({}, window.globals.template, data)

  return renderer(data)
}
