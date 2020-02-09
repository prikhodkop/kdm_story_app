const { app } = require('electron').remote

const doT = require('dot')

const { readFile } = require('./files')

const { cdnUrl } = require('./template-cdnurl')

// const { getSettings } = require('./settings')

module.exports = {
  render,
}

function render (filename, data = {}) {

  var htmlTemplate

  if (window.globals.process == 'local') {
    htmlTemplate = readFile(app.getAppPath()+'/partials/'+filename+'.html')
  } else {
    htmlTemplate = require('./../../partials/'+filename+'.html')
  }

  const renderer = doT.template(htmlTemplate)

  data = Object.assign({}, window.globals.template, data)

  return renderer.call({cdnUrl}, data)
}
