const { generate_events_table } = require('./events')
const router = require('./router')
const {initSettings} = require('./settings')

const {init_glossary} = require('./glossary')

module.exports = {
  setTransition,
  getBackTarget,
  getBackBackTarget,
}

var events_table = generate_events_table()

function setTransition (name, transition, back_target = null, state = null, transit = true) {
  console.log('Doing the transition...')
  console.log(transition)
  $('#container').empty()
  initSettings()
  init_glossary()

  // delete require.cache[require.resolve('./glossary')]
  // delete require.cache[require.resolve('./development')]

  sessionStorage.setItem('transition', transition)
  sessionStorage.setItem('target', name)

  if (!(back_target == null)) {
    sessionStorage.setItem('back_target', back_target)
  } else {
    sessionStorage.setItem('back_target', null)
  }

  if (!(state == null)) {
    sessionStorage.setItem(document.title, state)
  } else {
    sessionStorage.removeItem(document.title)
  }

  console.log('Done!')

  if (transit) {
    router.route(events_table[name].type)
  }

  return true
}

function getBackTarget () {
  return sessionStorage.getItem('back_target')
}

function getBackBackTarget () {
  let back_target = sessionStorage.getItem('back_target')
  console.log(back_target)
  let state = JSON.parse(sessionStorage.getItem(back_target))
  return state.back_target
}
