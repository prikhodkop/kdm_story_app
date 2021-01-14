// file describes how to load game assets considering /overwrite/ folder and localization data.

// The common load order is the following:
// # Loading Rule #
// 1. (if non en lang selected) Check if localization file exists in /overwrite/ -> if yes, load it and return
// 2. (if non en lang selected) Check if localization file exists in root -> if yes, load it and return
// 3. Check if en file exists in /overwrite/ -> if yes, load it and return
// 4. Take en file from the root (it is assumed that it always exists) -> load it and return

const { readFile, checkFile } = require('./files')
const { getSettings, defaultLang } = require('./settings')
const { cdnUrl } = require('./template-cdnurl')

module.exports = {
  pathToAsset,
  pathToAssetL,
  initAssets,
  preloadImgs
}

// const ContentTree = require('./../../_content.json')

function initAssets() {

  if (!(window.globals.translations === undefined)) {
    return
  }

  // if (!(ContentTree === undefined)) {
  let ContentTree = require('./../../_content.json')
  // }

  let contents = {}

  contents['languages'] = []

  for (let i=0; i<ContentTree.children.length; i++) {
    contents['languages'].push(ContentTree.children[i]['name'])
  }

  contents['paths'] = {}

  for (let i=0; i<contents['languages'].length; i++) {
    contents['paths'][contents['languages'][i]] = packAssets(ContentTree['children'][i])
  }

  // console.log('Tree2222: '+JSON.stringify(contents['paths']['Russian']))

  // sessionStorage.setItem('translations', JSON.stringify(contents))
  window.globals.translations = contents

  // console.log('Init Localization State.')
}

function packAssets(object) {
  let paths = []
  // console.log('Object: '+JSON.stringify(object))
  // console.log('Current: '+object["name"])

  if ('children' in object) {
    // console.log('Found children: '+object['children'].length)
    for (let i=0; i<object['children'].length; i++) {
      paths = paths.concat(packAssets(object['children'][i]))
    }
  } else {
    // console.log('Found leaf')
    paths.push(object["path"].replace(/\\/g, '/'))
  }

  return paths
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
    let default_lang = defaultLang()
    file = checkFile(path, '', lang, false)
    file_default = checkFile(path, '', default_lang, false)

    // console.log(window.globals.translations['paths'][lang])
    // console.log('The path: '+path)
    // console.log('The file: '+file)
    // console.log('The default file: '+file_default)

    // if ((lang == defaultLang())||(window.globals.translations['paths'][lang].includes(file))) {
    if (window.globals.translations['paths'][lang].includes(file)) {
      result = checkFile(path, '', lang, false)
    } else if (window.globals.translations['paths'][default_lang].includes(file_default)) {
      result = checkFile(path, '', defaultLang(), false)
    } else {
      result = '#'
    }
    // else {
    //   result = ''
    // }

  } else {
    result = checkFile(path, '', '', false)
    found = true
    // console.log('Bingo !')
  }

  if (cdn_change) {
    result = cdnUrl(result.replace('./', '/'))
  }

  return result

}

function imageHTML(path, width='25%', class_name='', padding=false) {
  let full_path = pathToAsset(path+'.svg', 'localize', true)
  let is_svg = true
  if (full_path.includes('#')) {
    is_svg = false
    full_path = pathToAsset(path+'.png', 'localize', true)
  }
  if (full_path.includes('#')) {
    full_path = pathToAsset(path+'.jpg', 'localize', true)
  }
  let class_part
  if (class_name == '') {
    class_part = ''
  } else {
    class_part = ' ' +class_name
  }

  let padding_style
  if (padding) {
    padding_style = 'padding-bottom:0.5em;'
  } else {
    padding_style = 'padding:0em;padding-left:0.2em;padding-right:0.2em;'
  }

  console.log('Printing image...')

  if (full_path.includes('#')) {
    return '!!!'
  } else {
    return '<img class="reference-image'+class_part+'" style="width:'+width+';'+padding_style+'" src="'+full_path+'"/>'
  }
}

function markButtonv2(match, p1, p2, offset, string) {
  match = match.replace('{', '').replace('}', '').split('@')
  console.log('This guy:' +match[0])
  console.log('This guy:' +match[1])
  let terms

  let label = match[1]
  let text = match[1]

  if (match[0] == 'image') {
    let img_width = '0.9em'
    if (label != text) {
      img_width = label
    }
    return imageHTML(text, img_width+';display:inline;opacity:0.8;vertical-allign:bottom')
  } else {
    return ''
  }
}

function preloadImgs(urls, additional_class='') {

  if (!('preloads' in window.globals)) {
    window.globals.preloads = []
  }

  if (getSettings()['preload'] == 'Off') {
    return
  }
  let to_append = []
  for (let i=0; i<urls.length; i++) {
    let path = pathToAssetL(urls[i])
    if (window.globals.preloads.includes(path)) {
      continue
    }
    to_append.push($('<img>',
    {
      class:additional_class,
      src:path
    }))
    window.globals.preloads.push(path)
  }


  $('#preload').append(to_append)
}

window.imageHTML = imageHTML
window.markButtonv2 = markButtonv2
