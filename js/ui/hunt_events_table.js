const {setSettings, getSettings, silentSaveSettings, defaultLang} = require('./../ui/settings')
const { quary_events } = require('./../lists/quary_events')

const { pathToAsset } = require('./../ui/assets_loader')

// var { random_hunt_events } = require('./../lists/random_hunt_events')
// var { promo_hunt_events } = require('./../lists/promo_hunt_events')

var random_hunt_events = {}
var promo_hunt_events = {}

module.exports = {
  md_to_html_2,
  is_promo_event,
  get_sequence,
  init_hunt_events
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
      random_hunt_events_local = require('../../translations/'+lang+'/text/lists/random_hunt_events')
      // random_hunt_events_local = random_hunt_events
      found = true
    } catch(e) {
    }
  }

  let random_hunt_events_en = require('../../translations/'+defaultLang()+'/text/lists/random_hunt_events')

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
      promo_hunt_events_local = require('../../translations/'+lang+'/text/lists/promo_hunt_events')
      // promo_hunt_events_local = promo_hunt_events
      found = true
    } catch(e) {
    }
  }

  var promo_hunt_events_en = require('../../translations/'+defaultLang()+'/text/lists/promo_hunt_events')

  for (let key in promo_hunt_events_en.promo_hunt_events) {
     if ((found)&&(key in promo_hunt_events_local.promo_hunt_events)) {
       promo_hunt_events[key] = promo_hunt_events_local.promo_hunt_events[key]
     } else {
       promo_hunt_events[key] = promo_hunt_events_en.promo_hunt_events[key]
     }
  }

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
  // saveSettings();
  localStorage.setItem('settings', JSON.stringify(settings))
  sessionStorage.setItem('settings', JSON.stringify(settings))
  silentSaveSettings(settings)
  // no_reload = true

  $('.hunt_event_action_button#'+card).fadeOut(300)
  $('.button_outcome#'+card).delay(400).fadeIn(300)
}
window.removePromoCard = removePromoCard



function is_promo_event () {
  let settings = getSettings();

  let promos = []

  let size_of_base = settings['size_of_basic_hunt_deck']

  if (settings['whiteboxes']['percival'] == 'Enabled') {
    promos.push('dead warrior')
  }

  if (settings['whiteboxes']['fade'] == 'Enabled') {
    promos.push('baby and the sword')
  }

  if (promos.length == 0) {
    return 'false'
  }

  let_guess = Math.random()

  let promos_length = promos.length
  let promo_probability = 1/(1+size_of_base/promos_length)

  console.log('Num of promos: '+promos.length+' Size of base: '+size_of_base)
  console.log('Promo probability: '+ promo_probability+' Guess: '+let_guess)

  if (let_guess > promo_probability) {
    return 'false'
  } else {
    return promos[Math.floor(Math.random() * promos.length)];
  }

}

function get_random_event () {
  let keys = Object.keys(random_hunt_events)
  let key = keys[Math.floor(Math.random() * keys.length)]

  return random_hunt_events[key]
}

function md_to_html_2 (event_id, init = true, current_table = 0, current_class = -1, condition = '') {
  let html = ''
  let html_end = ''
  let in_table = 0
  let parsing_child = 0
  let event = ''
  if (!isNaN(event_id)) {
    console.log('It is a number:'+event_id)
    event = random_hunt_events[event_id]
  } else {
    console.log('Its a promo!!'+event_id)
    event = promo_hunt_events[event_id]
  }

  let rows = event.split('\n')

  console.log('Number of rows:')
  console.log(rows.length)

  let table_idx = 0
  let class_idx = 0
  let table_type = ''
  let text = ''
  let text2 = ''
  let width = ''
  let my_table = ''
  let global_table_ctr = -1
  let prev_table = []
  let prev_class = []
  let first_text = true
  let skip_table = false

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i].replace(/1d10/g, '<b>1d10</b>').replace('Dead.', '<b>Dead</b>.')

    console.log('Row: ' + row)
    console.log('class_idx: ' + class_idx + ' table_idx: ' + table_idx + ' my_table: ' + my_table + ' in_tab: ' + in_table + ' parse: ' + parsing_child + ' global: ' + global_table_ctr + ' prev: ' + prev_table)

    if (i == 0) {
      if (init) {
        let parts = row.split(' | ')
        html += "<div class='" + event_id + "' id='hunt_event_title'><div style='color:#9EB6D0;display:inline;'>" + parts[0] + ' | </div>' + parts[1] + '</div>'
        // 9EB6D0
      }
    } else if (row.includes('[img]')) {
      // if (init) {
      if ((init || parsing_child > 0) && in_table == 0) {
        if (row.includes('#')) {
          text = row.replace('[img] ', '').split(' # ')[0]

          if (row.includes('no-shadow')) {
            text2 = ''
          } else {
            text2 = "id='event_img_shadow'"
          }

          if (row.includes('width:')) {
            if (row.split(' # ')[1].includes('width:')) {
              width = row.split(' # ')[1].replace('width:', '')
            } else {
              width = row.split(' # ')[2].replace('width:', '')
            }
          } else {
            width = '50%'
          }

          if (row.includes('fading')) {

          }
        } else {
          text = row.replace('[img] ', '')
          text2 = "id='event_img_shadow'"
          width = '50%'
        }

        let addition = "<img style='position:static;width:" + width + ";float:center;' " + text2 + " src='" + pathToAsset(`images/hunt/random_events/event_${text}.png`) + "'>"

        if (init) {
          html = addition + html
        } else {
          html += addition
        }
      }
    } else if (row.includes('[TO] ')) {
      if (in_table > 0) {
        in_table += 1
      }

      global_table_ctr += 1
      prev_table.push(table_idx)
      table_idx = global_table_ctr
      prev_class.push(class_idx)
      class_idx = 0

      if ((init || parsing_child > 0) && in_table == 0) {
        html += "<table class='once " + table_idx + "' id='hunt_event_table'>"
        html += "<tr id='hunt_event_header_row'>"
        html += "<th id='hunt_event_1st_cell' style='width:20%;'>" + row.replace('[TO] ', '') + ': </th>'

        table_type = 'once'
        in_table += 1
        // my_table = table_idx
      }
    } else if (row.includes('[TA] ')) {
      if (in_table > 0) {
        in_table += 1
      }

      global_table_ctr += 1
      prev_table.push(table_idx)
      table_idx = global_table_ctr
      prev_class.push(class_idx)
      class_idx = 0

      if ((init || parsing_child > 0) && in_table == 0) {
        html += "<table class='all " + table_idx + "' id='hunt_event_table'>"
        html += "<tr id='hunt_event_header_row'>"
        html += "<th id='hunt_event_1st_cell' style='width:20%;'>" + row.replace('[TA] ', '') + ': </th>'

        table_type = 'all'
        in_table += 1
      }
    } else if (row.includes('[c] ')) {
      if (in_table == 1) {
        html += "<tr id='hunt_event_row'>"
        html += "<td id='hunt_event_1st_cell' style='height:2em;'></td>"

        if (row.includes('#')) {
          text = row.replace('[c] ', '').split(' #')[0]
          text2 = row.replace('[c] ', '').split(' #')[1]
        } else {
          text = row.replace('[c] ', '')
          text2 = row.replace('[c] ', '')
        }

        html += "<td class='re_key " + class_idx + ' ' + table_idx + "' id='hunt_event_cell' style='height:2em;' condition='" + text2 + "'>" + text + '</td>'
        html += '</tr>'
      }
    } else if (row.includes('[d] ')) {
      // if ((current_table == table_idx)&& (current_class == -1) || ((current_table > table_idx) || (table_type == 'all'))) {
      //   html += "</tr>"
      // }

      if ((current_table == table_idx) && (current_class == class_idx)) {
        // html += "<td class='re_value "+class_idx+" "+table_idx+"' id='hunt_event_cell' style='padding-bottom: 0.5em;'>"+row.replace('[d] ', '')+"</td>"

        if (!condition == '') {
          text = '[<b>' + condition + '</b>] ' + row.replace('[d] ', '')
        } else {
          text = row.replace('[d] ', '')
        }

        html_end += add_text(text, current_class + ' ' + current_table)
      }

      // if ((in_table == 1) || ((current_table == table_idx) && (in_table == 0))) {
      class_idx += 1
      // }
      // if (in_table == 1) {
      //   class_idx += 1;
      // }
    } else if (row.includes('[d<]')) {
      if ((current_table == table_idx) && (current_class == class_idx)) {
        // html += "<td class='re_value "+class_idx+" "+table_idx+"'>"
        // html += ''
        parsing_child += 1
      }

      // if ((in_table == 1) || ((current_table == table_idx) && (in_table == 0))) {
      class_idx += 1
      // }
      // if (in_table == 1) {
      //   class_idx += 1;
      // }
    } else if (row.includes('[>d]')) {
      // html += "</td>"
      // html += ''
      if (parsing_child > 0) {
        parsing_child -= 1
      }
    } else if (row.includes('[dt] ')) {
      if ((current_table == table_idx) && (current_class == class_idx)) {
        // html += "<td class='re_value "+class_idx+" "+table_idx+"' id='hunt_event_cell' style='padding-bottom: 0.5em;'>"+row.replace('[dt] ', '')+"</td>"
        if (!condition == '') {
          text = '[<b>' + condition + '</b>] ' + row.replace('[dt] ', '')
        } else {
          text = row.replace('[dt] ', '')
        }

        html_end += add_text(text, current_class + ' ' + current_table)
      }

      if (in_table > 0) {
        if (in_table == 1) {
          html += '</table>'
        }
        in_table -= 1
      }

      table_idx = prev_table.pop()
      class_idx = prev_class.pop()
    } else if (row.includes('[td] ')) {
      if (in_table == 1) {
        html += "<th id='hunt_event_cell' style='background:#47749e;width:80%;height:2em;'>" + row.replace('[td] ', '') + '</th>'
        // #729AC0
        html += '</tr>'
      }
    } else if (row.includes('[T]')) {
      if (in_table > 0) {
        if (in_table == 1) {
          html += '</table>'
        }
        in_table -= 1
      }

      table_idx = prev_table.pop()
      class_idx = prev_class.pop()
    } else if (row.includes('[global_tip]')) {
      console.log('Something global is happening here!')
    } else if (row.includes('[i] ')) {
      if ((init || parsing_child > 0) && in_table == 0) {
        if (!init && !condition == '' && first_text) {
          html += add_text('<i>' + '[<b>' + condition + '</b>] ' + row.replace('[i] ', '') + '</i>')
          first_text = false
        } else {
          html += add_text('<i>' + row.replace('[i] ', '') + '</i>')
        }
      }
    } else if (row.includes('[br]')) {
      if ((init || parsing_child > 0) && in_table == 0) {
        if (!init && !condition == '' && first_text) {
          html += add_text('<br/>' + '[<b>' + condition + '</b>] ' + row.replace('[br]', ''))
          first_text = false
        } else {
          html += add_text('<br/>' + row.replace('[br]', ''))
        }
      }
    } else {
      if ((init || parsing_child > 0) && in_table == 0) {
        // html += add_text(row)
        if (row.length < 4) {
          continue
        }

        if (!init && !condition == '' && first_text && row.length > 4) {
          html += add_text('[<b>' + condition + '</b>] ' + row)
          first_text = false
        } else {
          html += add_text(row)
        }
      }
    }

    console.log('class_idx: ' + class_idx + ' table_idx: ' + table_idx + ' my_table: ' + my_table + ' in_tab: ' + in_table + ' parse: ' + parsing_child + ' global: ' + global_table_ctr + ' prev: ' + prev_table)
  }

  return html + html_end
}

function add_text (text, class_id = '') {
  return "<div class='" + class_id + "' id='hunt_event_text'>" + text + '</div>'
}
