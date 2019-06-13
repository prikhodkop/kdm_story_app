const fs = require('fs')

module.exports = {
  readFile,
  saveFile,
  exists,
}

function readFile (path) {
  return fs.readFileSync(path)
}

function saveFile (data, path) {
  try {
    fs.writeFileSync(path, data)
  } catch (e) {
    alert('Failed to save the file !')
  }
}

function exists (path) {
  return fs.existsSync(path)
}
