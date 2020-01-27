// file describes how to load game assets considering /overwrite/ folder and localization data.

// The common load order is the following:
// # Loading Rule #
// 1. (if non en lang selected) Check if localization file exists in /overwrite/ -> if yes, load it and return
// 2. (if non en lang selected) Check if localization file exists in root -> if yes, load it and return
// 3. Check if en file exists in /overwrite/ -> if yes, load it and return
// 4. Take en file from the root (it is assumed that it always exists) -> load it and return

const { readFile, checkFile } = require('./files')
const { getSettings } = require('./settings')
const { cdnUrl } = require('./template-cdnurl')

module.exports = {
  loadJSON,
  pathToAsset,
  pathToAssetL,
  pathToScript,
}

// Finds and loads JSON file with respect to #Loading Rule#
function loadJSON(path, localization=true) {
  let found = false
  let result

  if (localization) {
    let lang = getSettings()['language']
    if (!(lang == 'en')) {
      if (!found) {
        // console.log('Try '+lang+' root...')
        try {
          result = readFile(path, 'root', lang)
          result.toString();
          found = true
        } catch (e) {
        }
      }
    }
    if (!found) {
      // console.log('Try en root...')
      result = readFile(path, 'root', 'en')
    }
    return JSON.parse(result)
  } else {

    result = readFile(path, 'root')
    found = true

    return JSON.parse(result)
  }
}

function pathToAssetL(path, cdn_change=true) {
  return pathToAsset(path, 'localize', cdn_change)
}

// Returns string path for image to load with respect to #Loading Rule#
function pathToAsset(path, localization='', cdn_change=true) {
  let found = false
  let file, result

  if (localization == 'localize') {
    let lang = getSettings()['language']
    if (!(lang == 'en')) {
      // console.log('Try '+lang+' root...')
      file = checkFile(path, 'root', lang)
      if ((!file == '')) {
        found = true;
        result = file
        // console.log('Bingo !')
      }
    }

    if (!found) {
      // console.log('Try en root...')
      result = checkFile(path, 'root', 'en', false)
      // console.log('Bingo !')
    }

    if (cdn_change) {
      result = cdnUrl(result.replace('./', '/'))
    }
    return result

  } else {
    result = checkFile(path, 'root', '', false)
    found = true
    // console.log('Bingo !')

    if (cdn_change) {
      result = cdnUrl(result.replace('./', '/'))
    }
    return result
  }
}

// Returns string path for image to load with respect to #Loading Rule#
function pathToScript(path, localization=true) {

}
