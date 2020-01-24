// file describes how to load game assets considering /overwrite/ folder and localization data.

// The common load order is the following:
// # Loading Rule #
// 1. (if non en lang selected) Check if localization file exists in /overwrite/ -> if yes, load it and return
// 2. (if non en lang selected) Check if localization file exists in root -> if yes, load it and return
// 3. Check if en file exists in /overwrite/ -> if yes, load it and return
// 4. Take en file from the root (it is assumed that it always exists) -> load it and return

const { readFile, checkFile } = require('./files')
const { getSettings } = require('./settings')
const { cdnUrl } = require('./template-renderer')

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
    }
    return JSON.parse(result)
  } else {
    if (!found) {
      try {
        result = readFile(path, 'override')
        result.toString();
        found = true
      } catch (e) {
      }
    }
    if (!found) {
      result = readFile(path, 'root')
      found = true
    }
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
      console.log('Try '+lang+' override...')
      file = checkFile(path, 'override', lang)
      if ((!file == '')) {
        found = true;
        result = file
        console.log('Bingo !')
      }
      // try {
      //   // console.log('Try '+lang+' override...')
      //   file = readFile(path, 'override', lang)
      //   file.toString();
      //   found = true
      //   result = readFile(path, 'override', lang, 'path')
      // } catch (e) {
      // }

      if (!found) {
        console.log('Try '+lang+' root...')
        file = checkFile(path, 'root', lang)
        if ((!file == '')) {
          found = true;
          result = file
          console.log('Bingo !')
        }
        // try {
        //   file = readFile(path, 'root', lang)
        //   file.toString();
        //   found = true
        //   result = readFile(path, 'root', lang, 'path')
        // } catch (e) {
        // }
      }
    }

    if (!found) {
      console.log('Try en override...')
      file = checkFile(path, 'override', 'en')
      if ((!file == '')) {
        found = true;
        result = file
        console.log('Bingo !')
      }
      // try {
      //   file = readFile(path, 'override', 'en')
      //   file.toString();
      //   found = true
      //   result = readFile(path, 'override', 'en', 'path')
      // } catch (e) {
      // }
    }
    if (!found) {
      console.log('Try en root...')
      // result = readFile(path, 'root', 'en')
      result = checkFile(path, 'root', 'en')
      console.log('Bingo !')
    }
    if (cdn_change) {
      result = cdnUrl(result)
    }
    return result

  } else {
    if (!found) {
      file = checkFile(path, 'override')
      if ((!file == '')) {
        found = true;
        result = file
        console.log('Bingo !')
      }
      // try {
      //   file = readFile(path, 'override')
      //   file.toString();
      //   found = true
      //   result = readFile(path, 'override', '', 'path')
      // } catch (e) {
      // }
    }
    if (!found) {
      result = checkFile(path, 'root')
      found = true
      console.log('Bingo !')
    }
    if (cdn_change) {
      result = cdnUrl(result)
    }
    return result
  }
}

// Returns string path for image to load with respect to #Loading Rule#
function pathToScript(path, localization=true) {

}
