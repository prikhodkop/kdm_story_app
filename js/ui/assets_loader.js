// file describes how to load game assets considering /overwrite/ folder and localization data.

// The common load order is the following:
// # Loading Rule #
// 1. (if non en lang selected) Check if localization file exists in /overwrite/ -> if yes, load it and return
// 2. (if non en lang selected) Check if localization file exists in root -> if yes, load it and return
// 3. Check if en file exists in /overwrite/ -> if yes, load it and return
// 4. Take en file from the root (it is assumed that it always exists) -> load it and return

const { readFile } = require('./files')
const { getSettings } = require('./settings')
const { cdnUrl } = require('./template-renderer')

module.exports = {
  loadJSON,
  pathToImage,
  pathToScript,
}

// Finds and loads JSON file with respect to #Loading Rule#
function loadJSON(path, localization=true) {

  let lang = getSettings()['language']
  let found = false
  let result

  if (localization) {
    console.log('Working with localized content!:')
    // result = readFile(path, 'override', lang)
    if (!(lang == 'en')) {
      try {
        console.log('Try '+lang+' override...')
        result = readFile(path, 'override', lang)
        result.toString();
        found = true
      } catch (e) {
      }

      if (!found) {
        console.log('Try '+lang+' root...')
        try {
          result = readFile(path, 'root', lang)
          result.toString();
          found = true
        } catch (e) {
        }
      }
    }

    if (!found) {
      console.log('Try en override...')
      try {
        result = readFile(path, 'override', 'en')
        result.toString();
        found = true
      } catch (e) {
      }
    }
    if (!found) {
      console.log('Try en root...')
      result = readFile(path, 'root', 'en')
      // result.toString();
      // try {
      //   result = readFile(cdnUrl(path), 'root', 'en')
      //   found = true
      // } catch (e) {
      // }
    }
    return JSON.parse(result)
  } else {
    if (!found) {
      try {
        result = readFile(path, 'override')
        found = true
      } catch (e) {
      }
    }
    if (!found) {
      try {
        result = readFile(path, 'root')
        found = true
      } catch (e) {
      }
    }
    return JSON.parse(result)
  }

}

// Returns string path for image to load with respect to #Loading Rule#
function pathToImage(path, localization=true) {

}

// Returns string path for image to load with respect to #Loading Rule#
function pathToScript(path, localization=true) {

}
