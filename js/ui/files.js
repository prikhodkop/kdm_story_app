const fs = require('fs')
const { app } = require('electron').remote

module.exports = {
  readFile,
  saveFile,
  exists,
}

function readFile (path, app_path='', lang='') {
  let final_path = ''

  if (app_path == 'root') {
    final_path = app.getAppPath() + '/'
  }
  if (app_path == 'override') {
    final_path = app.getPath('userData') + '/override/'
  }

  if (!(lang == '')) {
    final_path = final_path +'translations/'+lang+'/'
  }

  final_path = final_path + path

  console.log('File path: '+final_path)

  return fs.readFileSync(final_path)
}

function saveFile (data, path) {
  try {
    fs.writeFileSync(path, data)
  } catch (e) {
    alert('Failed to save the file !')
  }
}

function exists (path, app_path=false) {
  if (app_path) {
    path = app.getAppPath() + '/'+path
  }
  return fs.existsSync(path)
}
