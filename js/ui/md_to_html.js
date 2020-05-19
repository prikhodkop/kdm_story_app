const { pathToAssetL } = require('./../ui/assets_loader')
const { getTerms } = require('./../ui/glossary')

module.exports = {
  md_to_html,
  setup_md_events
}

function setup_md_events() {
  if (!('event_text' in window.globals)) {
    window.globals.event_text = {}
  }

    // $('body').on('dblclick', '.event_wrapper', function () {
    //   $(this).hide('slow', function() {
    //     let event_idx = $(this).attr('class2')
    //     delete window.globals.event_text[event_idx]
    //     $(this).remove()
    //   })
    // })

    $('body').on('click', '.re_key', function () {
      let classList = $(this).attr('class').split(/\s+/)

      let class_idx = classList[1]
      let table_idx = classList[2]

      console.log('I click here! '+class_idx + 'X' + table_idx)

      // let template = document.getElementById('random_popup')

      console.log('Event texts:'+JSON.stringify(window.globals.event_text))

      let event_idx = $(this).attr('class2')
      event_text = window.globals.event_text[event_idx]

      console.log('Event id:')
      console.log(event_idx)

      let event_html = $(md_to_html(event_text, false, table_idx, class_idx, $(
        this).attr(
        'condition')))

      // template.innerHTML = event_html;
      event_html.hide()
      $('.event_wrapper[class2 = "'+event_idx+'"]').append(event_html)
      event_html.fadeIn(300)
      $('#random_popup').scrollTo(event_html, duration=300)

      // $('#random_popup').delay(500).animate({
      //   scrollTop: $('#random_popup').prop('scrollHeight'),
      // }, 500)

      console.log('Table idx:')
      console.log(table_idx)

      // let table_type = $('table.' + table_idx).attr('class').split(/\s+/)[0]
      let table_type = $(this).parent().parent().parent().attr('class').split(/\s+/)[0]

      if (table_type == 'once') {
        // $('table.' + table_idx).fadeOut(500, function () {
        $(this).parent().parent().parent().fadeOut(300, function () {
          $(this).css({
            'visibility': 'hidden',
            display: 'block',
          }).slideUp()
        })
      }
    })

}

function md_to_html (event_text, init = true, current_table = 0, current_class = -1, condition = '') {
  let html = ''
  let html_end = ''
  let in_table = 0
  let parsing_child = 0

  let rows = event_text.split('\n')

  if (init) {
    event_id = hashCode(event_text)
    window.globals.event_text[event_id] = event_text
  }

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
        html += "<div class='" + event_id +"' id='hunt_event_title'><div style='color:#9EB6D0;display:inline;'>" + parts[0] + ' | </div>' + parts[1] + '</div>'
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

        let addition = "<img style='position:static;width:" + width + ";float:center;' " + text2 + " src='" + pathToAssetL(`images/hunt/random_events/event_${text}.png`) + "'>"

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

        html += "<td class='re_key " + class_idx + ' ' + table_idx + "'  class2='"+event_id+"' id='hunt_event_cell' style='height:2em;' condition='" + text2 + "'>" + text + '</td>'
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

  let result = html+html_end
  if (init) {
      result = '<div class="event_wrapper" class2="'+event_id+'" style="padding-bottom:3vmin;overflow:hidden;">'+result+'</div>'
  }

  return result
}

function add_text (text, class_id = '') {
  return "<div class='" + class_id + "' id='hunt_event_text'>" + text + '</div>'
}

function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
