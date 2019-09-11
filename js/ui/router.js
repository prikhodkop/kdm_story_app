const { clearLoops, clearTimers } = require('./timer')
const { onSettingsSaved } = require('./settings')

const isElectron = typeof process !== 'undefined' && process.versions.hasOwnProperty('electron')

module.exports = {
  route,
}

window.onpopstate = function (event) {
  if (!event || !event.state || isElectron) {
    return
  }

  sessionStorage.clear()

  for (let k in event.state.state) {
    sessionStorage[k] = event.state.state[k]
  }

  reset()
  load(event.state.name)
}

function route (name, reload = true) {
  if (reload || !window.history.state) {
    let state = {}

    for (let k in sessionStorage) {
      if (!sessionStorage.hasOwnProperty(k)) {
        continue
      }

      state[k] = sessionStorage[k]
    }

    let url = `#!/${name}`

    if (isElectron) {
      url = './index.html' + url
    } else {
      url = window.location.pathname + url
    }

    window.history.pushState({ name: name, state: state }, name, url)
  }

  if (reload) {
    reset()
  }

  // otherwise load the scene if initial page load or history triggered
  load(name)
}

function reset () {
  // clear timers
  clearLoops()
  clearTimers()

  // unload audio streams
  Howler.unload()

  // unload subtitles
  clearSubtitles(0)

  // unbind events
  $('body').unbind()
  $('#container').unbind()

  // clear the console
  console.clear();

  // clear settings saved callback
  onSettingsSaved(null)
}

function load (name) {
  let scene

  switch (name.toLowerCase()) {
    case 'hunt': scene = require('../scenes/hunt'); break
    case 'image': scene = require('../scenes/image'); break
    case 'index': scene = require('../scenes/index'); break
    case 'settlement': scene = require('../scenes/settlement'); break
    case 'slideshow': scene = require('../scenes/slideshow'); break
    case 'video': scene = require('../scenes/video'); break
  }

  if (!scene) {
    throw `invalid scene ${scene}`
  }

  (new scene()).render()
}
