// var events
const { loadJSON, pathToAssetL } = require('./assets_loader')
const { cdnUrl } = require('./template-cdnurl')

const { getSettings, defaultLang } = require('./settings')

const { app } = require('electron').remote

const color_menu = {
  '': '#CCCCCC',
  'gorm': '#3B2621', //+
  'manhunter': '#8F3830', //+
  'lion knight': '#BA8D3E', //+
  'dragon king': '#472F5A', //+
  'dung beetle knight': '#727264', //+
  'slenderman': '#765E6F', //+
  'lion god': '#562522', //+
  'lonely tree': '#AA946A',
  'flower knight': '#446334',
  'spidicules': '#85852D',
  'sunstalker': '#E6E39E',
}

// GLOBAL TABLE OF ALL EVENTS TO BE DISPLAYED AT MENU
// ##################
var events_table = generate_events_table()
// ##################

module.exports = {
  createToc,
  titleCase,
  // events_table: events_table,
  generate_events_table,
  filterEvents
}

function generate_events_table () {

  let lang = getSettings()['language']
  let found = false

  events = localized_require('story_events', lang, ['label', 'music', 'music_delay'])

  // console.log('Events: '+JSON.stringify(events))

  // console.log('events1!!!: '+JSON.stringify(events))

  events_table = {}
  let event_ids = Object.keys(events)

  for (let i = 0; i < event_ids.length; i++) {
    events_table[event_ids[i]] = new Event(event_ids[i])

    let event = events[event_ids[i]]
    for (let property in event) {
      if (event.hasOwnProperty(property)) {
        // if (property == 'music') {
        //   events_table[event_ids[i]][property] = './' + event[property]
        // } else {
        events_table[event_ids[i]][property] = event[property]
        // }
      }
    }
  }

  return events_table
  // return create_events_table(events)
}

function localized_require(text, lang, args) {

  data_en = require('../../versions/'+defaultLang()+'/text/lists/'+text+'.js').texts

  // console.log('!!!Data: '+JSON.stringify(data_en))

  let data_local = ''
  if (!(lang == defaultLang())&&window.globals.translations['paths'][lang].includes('versions/'+lang+'/text/lists/'+text+'.js')) {
    data_local_init = require('../../versions/'+lang+'/'+'text/lists/'+text+'.js')
    data_local = data_local_init.texts
  }

  if (!(data_local == '')) {
    let keys = Object.keys(data_en)

    for (let j=0; j<keys.length; j++) {
      if (!('label' in data_en[keys[j]])||(data_en[keys[j]]['label'] == '')) {
        data_en[keys[j]]['label'] = titleCase(keys[j])
      }
      for (let i=0; i<args.length; i++) {
        if ((keys[j] in data_local)&&(args[i] in data_local[keys[j]])) {
           data_en[keys[j]][args[i]] = data_local[keys[j]][args[i]]
        }
      }
    }

    if ('params' in data_local_init) {
      // console.log('!!!Params found!!')
      if (data_local_init.params.interaction != 'inner_join') {
        let keys_local = Object.keys(data_local)

        let new_keys = $.grep(keys_local, function(el){return $.inArray(el, keys) == -1});

        console.log('new_keys!!! '+JSON.stringify(new_keys))
        for (let j=0; j<new_keys.length; j++) {
          // data_en[new_keys[j]] = {}

          if (!('label' in data_local[new_keys[j]])||(data_local[new_keys[j]]['label'] == '')) {
            data_local[new_keys[j]]['label'] = new_keys[j]
          }

          // for (let i=0; i<args.length; i++) {
          data_en[new_keys[j]] = data_local[new_keys[j]]
          // }
          console.log(data_en[new_keys[j]])
        }

      }
    }

  }

  return data_en
}

function Event (
  id,
  type = 'image',
  campaign = '',
  expansion = '',
  music = 'theme.mp3', // files are assumed to be in audio folder
  music_delay = 'speech-2000',
  speech = '',
  label = '###',
  ltop = '75%',
  lleft = '50%',
  table = 2, // 1 -displayed with larger font on top row or 2 - smaller font big table
  hide_label = false
) {
  this.type = type
  this.campaign = campaign
  this.expansion = expansion
  this.music = music
  this.music_delay = music_delay

  if (speech == '') {
    this.speech = 'speech/' + id + '.mp3'
  } else {
    this.speech = speech
  }

  if (label == '###') {
    let formatted_label = id.replace('showdown', 'showdown:').replace('principle', 'principle:')
    formatted_label = titleCase(formatted_label)
    this.label = formatted_label
  } else {
    this.label = label
  }



  this.ltop = ltop
  this.lleft = lleft
  this.table = table
  this.hide_label = hide_label
}

// function create_events_table (events) {
//   let events_table = {}
//   let event_ids = Object.keys(events)
//
//   for (let i = 0; i < event_ids.length; i++) {
//     events_table[event_ids[i]] = new Event(event_ids[i])
//
//     let event = events[event_ids[i]]
//     for (let property in event) {
//       if (event.hasOwnProperty(property)) {
//         if (property == 'music') {
//           events_table[event_ids[i]][property] = './audio/' + event[property]
//         } else {
//           events_table[event_ids[i]][property] = event[property]
//         }
//
//         // events_table[event_ids[i]].label = story_events_labels[event_ids[i]]
//
//         // console.log('Set property for '+event_ids[i]+':');
//         // console.log(property+' : '+ event[property]);
//       }
//     }
//   }
//
//   return events_table
// }

function titleCase (str) {
  let splitStr = str.toLowerCase().split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }

  return splitStr.join(' ')
}

function createToc (col_len = 5) {

  let settings = getSettings();

  events_table = generate_events_table()

  window.filterEvents = filterEvents

  // console.log('events!!!: '+JSON.stringify(events_table))

  $('#container').on('mouseenter', '#menu_item', function() {
    $(this).addClass('menu_hoverd')
    $('.menu_hoverd > *#showdown_icon').attr('src', pathToAssetL('images/icons/swords_inv_c_hover.png'));
    // $('.menu_hoverd > *#expansion_icon').attr('src', 'images/icons/expansions/'+$('.menu_hoverd > *#expansion_icon').attr('value')+'_c_hover.png?timestamp=' + new Date().getTime());
  });

  $('#container').on('mouseleave', '#menu_item', function() {
    $('.menu_hoverd > *#showdown_icon').attr('src', pathToAssetL('images/icons/swords_inv_c.png'));
    // $('.menu_hoverd > *#expansion_icon').attr('src', 'images/icons/expansions/'+$('.menu_hoverd > *#expansion_icon').attr('value')+'_c.png?timestamp=' + new Date().getTime());
    $(this).removeClass('menu_hoverd')
  });

  // PREPARE LIST OF OBJECTS FOR TABLE 1 AND TABLE 2
  // ####################
  let events_table_ids = Object.keys(events_table)

  let table_1_ids = []
  let table_2_ids = []

  for (let i = 0; i < events_table_ids.length; i++) {
    if (events_table[events_table_ids[i]].table == 1) {
      table_1_ids.push(events_table_ids[i])
    } else if (events_table[events_table_ids[i]].table == 2) {
      if ((events_table[events_table_ids[i]]['expansion'] == '') || (settings['expansions'][events_table[events_table_ids[i]]['expansion']] == 'All content')) {
        if ((events_table[events_table_ids[i]]['campaign'] == '') || (events_table[events_table_ids[i]]['campaign'].includes(settings['campaign']))) {
          table_2_ids.push(events_table_ids[i])
        }
      }
    } else {
      throw 'Wrong table type (' + events_table[events_table_ids[i]].table + ') for event ' + events_table_ids[i] + '!!!'
    }
  }

  table_2_ids.sort(function(a, b) {
    if (events_table[a].label < events_table[b].label) {
      return -1
    } else if (events_table[a].label > events_table[b].label) {
      return 1
    } else {
      return 0
    }
  })
  // #####################

  let container = document.getElementById('menu-back')
  let width1 = Math.floor(100 / table_1_ids.length)
  let width2 = Math.floor(100 / col_len)

  // CREATE TABLE 1
  let tbl1 = document.createElement('table')

  // tbl1.style.width  = '80%';
  // tbl1.style.top  = '3%';
  tbl1.setAttribute('id', 'menu_table1')
  tbl1.className = 'top'
  tbl1.style.cssText += 'width:80%;top:3%;left:10%;'

  let tbdy1 = document.createElement('tbody')

  // JUST ONE ROW FOR TABLE 1
  // let tr = tbl1.insertRow();
  let tr = document.createElement('tr')

  // tr.className = "spaceUnder";
  tr.style.cssText += 'width: 100%; position:static;'

  for (let j = 0; j < table_1_ids.length; j++) {
    // let td = tr.insertCell();
    let td = document.createElement('td')
    td.style.cssText += 'width:' + width1 + '%;'

    // let a1 = td;
    let a1 = document.createElement('div')
    a1.setAttribute('id', 'menu_item')
    a1.className = 'hunt_menu'

    a1.setAttribute('target', table_1_ids[j])
    a1.style.cssText += 'font-size: 2.5em;width:100%;position:static; margin:auto;'
    a1.innerHTML += events_table[table_1_ids[j]].label

    td.appendChild(a1)
    tr.appendChild(td)
  }

  tbdy1.appendChild(tr)
  tbl1.appendChild(tbdy1)
  container.appendChild(tbl1)

  // CREATE TABLE 2

  let tbl2 = document.createElement('table')
  tbl2.setAttribute('id', 'menu_table2')
  tbl2.style.cssText += 'width:90%;top:20%;left:5%;'

  container.appendChild(tbl2)

  // let row_len = Math.ceil(table_2_ids.length / col_len)
  // let rows = []
  //
  // for (let i = 0; i < row_len; i++) {
  //   rows.push([])
  // }
  //
  // let ctr = 0
  // let ro_idx = 0
  //
  //
  // for (let i = 0; i < table_2_ids.length; i++) {
  //   if (ctr >= col_len) {
  //     ctr = 0
  //     // cl_idx = cl_idx + 1
  //     ro_idx = ro_idx+1
  //   }
  //
  //   rows[ro_idx].push(table_2_ids[i])
  //   // ro_idx = ro_idx + 1
  //   ctr = ctr + 1
  // }
  //
  // for (let i = 0; i < rows.length; i++) {
  //   let tr = tbl2.insertRow()
  //   // tr.className = "spaceUnder";
  //
  //   for (let j = 0; j < rows[i].length; j++) {
  //     let td = tr.insertCell()
  //     td.style.cssText = 'width:' + width2 + '%;height:5em;position:static;'
  //
  //     let a2 = document.createElement('div')
  //     a2.setAttribute('id', 'menu_item')
  //
  //     a2.setAttribute('target', rows[i][j])
  //     a2.style.cssText += 'width:100%;position:static; margin:0 auto;'
  //     let text = ''
  //     if (rows[i][j].includes('showdown')) {
  //       // text = events_table[rows[i][j]].label.replace('Showdown:', '&#9876;:')
  //       text = events_table[rows[i][j]].label.substring(events_table[rows[i][j]].label.indexOf(":")+1);
  //       text = '<img style="width:9%;" id="showdown_icon" src="'+pathToAssetL('images/icons/swords_inv_c.png')+'"/>' + text
  //     } else {
  //       text = events_table[rows[i][j]].label
  //     }
  //     if (events_table[rows[i][j]].expansion == '') {
  //       a2.innerHTML += text
  //     } else {
  //       // let dot = '<b style="color:'+color_menu[events_table[rows[i][j]].expansion]+';">&#10033;</b>'
  //       let dot = '<img style="width:10%;" id="expansion_icon" value="'+events_table[rows[i][j]].expansion+'" src="'+pathToAssetL('images/icons/expansions/'+events_table[rows[i][j]].expansion+'_c.png')+'"/>'
  //       a2.innerHTML += dot+' '+text
  //     }
  //     a2.setAttribute('label', events_table[rows[i][j]].label)
  //
  //     td.appendChild(a2)
  //   }
  // }

  formTable2()
}

function formTable2(col_len=5) {
  let settings = getSettings();
  let events_table = generate_events_table()

  let width2 = Math.floor(100 / col_len)

  let events_table_ids = Object.keys(events_table)

  let table_2_ids = []

  let filter_value = document.getElementById("events_filter").value.toUpperCase();

  for (let i = 0; i < events_table_ids.length; i++) {
    if (events_table[events_table_ids[i]].table == 2) {
      if ((events_table[events_table_ids[i]]['expansion'] == '') || (settings['expansions'][events_table[events_table_ids[i]]['expansion']] == 'All content')) {
        if ((events_table[events_table_ids[i]]['campaign'] == '') || (events_table[events_table_ids[i]]['campaign'].includes(settings['campaign']))) {
          if (events_table[events_table_ids[i]].label.toUpperCase().includes(filter_value)) {
              table_2_ids.push(events_table_ids[i])
          }
        }
      }
    }
  }

  table_2_ids.sort(function(a, b) {
    if (events_table[a].label < events_table[b].label) {
      return -1
    } else if (events_table[a].label > events_table[b].label) {
      return 1
    } else {
      return 0
    }
  })

  let row_len = Math.ceil(table_2_ids.length / col_len)
  let rows = []

  for (let i = 0; i < row_len; i++) {
    rows.push([])
  }

  let ctr = 0
  let ro_idx = 0


  for (let i = 0; i < table_2_ids.length; i++) {
    if (ctr >= row_len) {
      ctr = 0
      // cl_idx = cl_idx + 1
      // ro_idx = ro_idx+1
      ro_idx = 0
    }

    rows[ro_idx].push(table_2_ids[i])
    ro_idx = ro_idx + 1
    ctr = ctr + 1
  }

  let tbl2 = document.getElementById('menu_table2')

  // tbl2.empty()
  $("#menu_table2 tr").remove();

  for (let i = 0; i < rows.length; i++) {
    let tr = tbl2.insertRow()
    // tr.className = "spaceUnder";

    for (let j = 0; j < rows[i].length; j++) {
      let td = tr.insertCell()
      td.style.cssText = 'width:' + width2 + '%;height:5em;position:static;'

      let a2 = document.createElement('div')
      a2.setAttribute('id', 'menu_item')

      a2.setAttribute('target', rows[i][j])
      a2.style.cssText += 'width:100%;position:static; margin:0 auto;'
      let text = ''
      if (rows[i][j].includes('showdown')) {
        // text = events_table[rows[i][j]].label.replace('Showdown:', '&#9876;:')
        text = events_table[rows[i][j]].label.substring(events_table[rows[i][j]].label.indexOf(":")+1);
        text = '<img style="width:3vmin;" id="showdown_icon" src="'+pathToAssetL('images/icons/swords_inv_c.png')+'"/>' + text
      } else {
        text = events_table[rows[i][j]].label
      }
      if (events_table[rows[i][j]].expansion == '') {
        a2.innerHTML += text
      } else {
        // let dot = '<b style="color:'+color_menu[events_table[rows[i][j]].expansion]+';">&#10033;</b>'
        let dot = '<img style="height:3vmin;" id="expansion_icon" value="'+events_table[rows[i][j]].expansion+'" src="'+pathToAssetL('images/icons/expansions/'+events_table[rows[i][j]].expansion+'_c.png')+'"/>'
        a2.innerHTML += dot+' '+text
      }
      a2.setAttribute('label', events_table[rows[i][j]].label)

      td.appendChild(a2)
    }
  }


}

function filterEvents(clear=false) {

  let input, filter;
  input = document.getElementById("events_filter");
  filter = input.value.toUpperCase();
  let show = false

  if (clear) {
    input.value = ''
  } else {

    if ($('#innovations_filter').hasClass('tags')) {
      $('#innovations_filter').removeClass('tags')
    }
    input.value = input.value.replace(/ +(?= )/g,'');
    // input.value = input.value.replace(/[^A-Za-z ,\-]/gi, '')

  }

  filter = filter.replace(/\s*,\s*/g, ",");
  filter = filter.split(",");

   console.log('Filter: '+filter)

  let show_innovation = false

  formTable2()
}
