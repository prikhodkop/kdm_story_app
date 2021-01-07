const {setSettings, getSettings, silentSaveSettings, defaultLang} = require('./../ui/settings')

const { quary_events } = require('../../versions/'+defaultLang()+'/text/lists/quary_events.js')
const { md_to_html, setup_md_events } = require('./../ui/md_to_html.js')


const { pathToAssetL } = require('./../ui/assets_loader')

// var { random_hunt_events } = require('./../lists/random_hunt_events')
// var { promo_hunt_events } = require('./../lists/promo_hunt_events')

var random_hunt_events = {}
var promo_hunt_events = {}

module.exports = {
  md_to_html_2,
  is_promo_event,
  get_sequence,
  init_hunt_events,
  init_promos
}

const path_to_quary_events = 'images/hunt/quary_events/'

function init_hunt_events() {

  var lang = getSettings()['language']
  console.log('Cards new language: '+lang)

  let found

  //## Random Hunt Events Localization ##
  found = false
  let random_hunt_events_local
  if (!(lang == defaultLang())) {
    console.log('Random Hunt Events Trying: '+lang)
    try {
      random_hunt_events_local = require('../../versions/'+lang+'/text/lists/random_hunt_events')
      // random_hunt_events_local = random_hunt_events
      found = true
    } catch(e) {
    }
  }

  setup_md_events()

  let random_hunt_events_en = require('../../versions/'+defaultLang()+'/text/lists/random_hunt_events')

  // if (found) {
    for (let key in random_hunt_events_en.random_hunt_events) {
       if ((found)&&(key in random_hunt_events_local.random_hunt_events)) {
         random_hunt_events[key] = random_hunt_events_local.random_hunt_events[key]
       } else {
         random_hunt_events[key] = random_hunt_events_en.random_hunt_events[key]
       }
    }
  // }

  //## Promo Hunt Events Localization ##
  found = false
  let promo_hunt_events_local
  if (!(lang == defaultLang())) {
    console.log('Promo Hunt Events Trying: '+lang)
    try {
      promo_hunt_events_local = require('../../versions/'+lang+'/text/lists/promo_hunt_events')
      // promo_hunt_events_local = promo_hunt_events
      found = true
    } catch(e) {
    }
  }

  var promo_hunt_events_en = require('../../versions/'+defaultLang()+'/text/lists/promo_hunt_events')

  for (let key in promo_hunt_events_en.promo_hunt_events) {
     if ((found)&&(key in promo_hunt_events_local.promo_hunt_events)) {
       promo_hunt_events[key] = promo_hunt_events_local.promo_hunt_events[key]
     } else {
       promo_hunt_events[key] = promo_hunt_events_en.promo_hunt_events[key]
     }
  }

  init_promos()

}

// var no_reload = false

function get_sequence (name) {
  let sequence = []

  for (let i = 0; i < quary_events.length; i++) {
    if (quary_events[i].includes(name.replace('showdown ', ''))) {
      sequence.push(path_to_quary_events + quary_events[i])
    }
  }

  return shuffle(sequence)
}

function next_event (sequence, idx) {
  if (idx >= sequence.length) {
    idx = 0
    sequence = shuffle(sequence)
  }

  let next = sequence[idx]
  idx += 1

  return next, sequence, idx
}

function idx_event (sequence, idx) {
  return sequence[idx]
}

function shuffle (a) {
  let j, x, i

  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }

  return a
}

function removePromoCard(card) {
  let settings = getSettings()
  settings['whiteboxes'][card] = 'Disabled'
  setSettings(settings);
  silentSaveSettings(settings)
  // no_reload = true

  $('.hunt_event_action_button#'+card).fadeOut(300)
  $('.button_outcome#'+card).delay(400).fadeIn(300)
}
window.removePromoCard = removePromoCard

function init_promos () {
  let settings = getSettings();

  let promos = []

  let size_of_base = settings['size_of_basic_hunt_deck']

  if (settings['whiteboxes']['percival'] == 'Enabled') {
    promos.push('dead warrior')
  }

  if (settings['whiteboxes']['fade'] == 'Enabled') {
    promos.push('baby and the sword')
  }

  if (settings['expansions']['lonely tree'] != 'Disabled') {
    promos.push('object of desire')
  }

  sessionStorage.setItem('kdm_app_promos', JSON.stringify(shuffle(promos)))
}

function is_promo_event () {
  let settings = getSettings();
  let size_of_base = settings['size_of_basic_hunt_deck']
  let promos = JSON.parse(sessionStorage.getItem('kdm_app_promos'))

  if (promos.length == 0) {
    return 'false'
  }

  let let_guess = Math.random()

  let promos_length = promos.length
  // size_of_base = 1
  let promo_probability = 1/(1+size_of_base/promos_length)

  console.log('Num of promos: '+promos.length+' Size of base: '+size_of_base)
  console.log('Promo probability: '+ promo_probability+' Guess: '+let_guess)

  if (let_guess > promo_probability) {
    return 'false'
  } else {
    let the_promo = promos.pop()
    sessionStorage.setItem('kdm_app_promos', JSON.stringify(promos))
    return the_promo;
  }

}

function get_random_event () {
  let keys = Object.keys(random_hunt_events)
  let key = keys[Math.floor(Math.random() * keys.length)]

  return random_hunt_events[key]
}

function md_to_html_2 (event_id, init = true, current_table = 0, current_class = -1, condition = '') {

  let event_text = ''
  if (!isNaN(event_id)) {
    console.log('It is a number:'+event_id)
    event_text = random_hunt_events[event_id]
  } else {
    console.log('Its a promo!!'+event_id)
    event_text = promo_hunt_events[event_id]
  }

  return md_to_html(event_text, init, current_table, current_class, condition)
}
