const { app } = require('electron').remote

const doT = require('dot')

const { readFile } = require('./files')

const { cdnUrl } = require('./template-cdnurl')

// const { getSettings } = require('./settings')

module.exports = {
  render,
}

function render (filename, data = {}) {
  const htmlTemplate = require('./../../partials/'+filename+'.html')//readFile(filename)
  // console.log('Template: '+JSON.stringify(htmlTemplate))
  // const htmlTemplate = readFile(app.getAppPath()+'/partials/'+filename+'.html')//readFile(filename)
  const renderer = doT.template(htmlTemplate)

  data = Object.assign({}, window.globals.template, data)

  return renderer.call({cdnUrl}, data)
}
