const { cdnUrl } = require('./template-renderer')

const lang = 'en'

const events = {
  'index': {
    'table': 1,
    'type': 'index',
    'label': 'Intro',
    'ltop': '50%',
    'lleft': '50%',
  },
  'hunt': {
    'table': 1,
    'type': 'hunt',
    'label': 'The Hunt',
    'ltop': '70%',
    'lleft': '50%',
    'music': 'music/white secret.mp3',
    'speech': 'audio/speech/en/hunt.mp3',
  },
  'settlement': {
    'table': 1,
    'type': 'settlement',
    'label': 'Settlement',
    'music': 'music/settlement.mp3',
    'music_delay': '2000',
    'speech': 'audio/speech/en/settlement.mp3',
  },
  'age': {
    'ltop': '27%',
    'lleft': '49%',
  },
  'armored strangers': {
    'music': 'music/armored strangers.mp3',
    'music_delay': '4000',
    'campaign': ['Lantern'],
  },
  'birth of a savior': {
    'music': 'music/birth of a savior.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'blackout': {
    'music': 'music/overwhelming darkness.mp3',
    'music_delay': '3000',
    'ltop': '37%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'bold': {
    'ltop': '50%',
    'lleft': '75%',
    'campaign': ['Lantern', 'Sun'],
  },
  'bone witch': {
    'music': 'music/see the truth.mp3',
    'ltop': '50%',
    'lleft': '65%',
  },
  'cooking': {
    'music': 'music/cooking.mp3',
    'music_delay': '500',
    'ltop': '73%',
    'lleft': '50%',
  },
  'crush and devour': {
    'music': 'music/crush and devour.mp3',
  },
  'endless screams': {
    'music': 'music/crush and devour.mp3',
    'ltop': '19%',
    'lleft': '48%',
  },
  'game over': {
    'music': 'music/game over.mp3',
    'ltop': '32%',
    'lleft': '47%',
  },
  'hammer and nail': {
    'music': 'music/hammer and nail.mp3',
    'campaign': ['Lantern'],
  },
  'hands of heat': {
    'music': 'music/hands of heat.mp3',
    'ltop': '75%',
    'lleft': '37%',
    // 'campaign': ['Lantern'],
  },
  'herb gathering': {
    'music': 'music/herb gathering.mp3',
    'hide_label': true,
  },
  'hooded knight': {
    'music': 'music/hooded knight.mp3',
    'music_delay': 'speech-1000',
    'campaign': ['Lantern'],
  },
  'insight': {
    'campaign': ['Lantern', 'Sun'],
  },
  'intimacy': {
    'music': 'music/intimacy.mp3',
    'music_delay': 'speech-1000',
    'ltop': '22%',
    'lleft': '75%',
    // 'campaign': 'Lantern',
  },
  'kings curse': {
    'music': 'music/kings curse.mp3',
    'ltop': '88%',
    'lleft': '50%',
  },
  'kings step': {
    'music': 'music/kings step.mp3',
    'music_delay': 'speech+500',
    'ltop': '67%',
    'lleft': '53%',
  },
  'lantern research': {
    'campaign': ['Lantern'],
  },
  'legendary lungs': {
    'music': 'music/legendary lungs.mp3',
    'music_delay': '500',
  },
  'legendary monsters': {
    'music': 'music/legendary monsters.mp3',
    'hide_label': true,
  },
  'mineral gathering': {
    'music': 'music/mineral gathering.mp3',
    'hide_label': true,
  },
  'overwhelming darkness': {
    'music': 'music/overwhelming darkness.mp3',
    'music_delay': '3000',
  },
  'oxidation': {
    'ltop': '75%',
    'lleft': '35%',
    'campaign': ['Lantern'],
  },
  'phoenix feather': {
    'music': 'music/legendary monsters.mp3',
    'ltop': '85%',
    'lleft': '75%',
  },
  'principle conviction': {
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
  },
  'principle death': {
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
  },
  'principle new life': {
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
    'ltop': '85%',
    'lleft': '50%',
  },
  'principle society': {
    'music': 'music/principle.mp3',
    'music_delay': 'speech-1000',
    'ltop': '20%',
    'lleft': '65%',
  },
  'first story': {
    // 'music_delay': 'speech-1000',
    'music': 'music/first story.mp3',
    'music_delay': 'speech+1000',
  },
  'regal visit': {
    'music': 'music/regal visit.mp3',
    'music_delay': 'speech-1000',
    'ltop': '65%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'returning survivors': {},
  'run away': {
    'music': 'music/run away.mp3',
    // 'campaign': 'Lantern',
  },
  'see the truth': {
    'music': 'music/see the truth.mp3',
  },
  'showdown butcher': {
    'music': 'music/showdown butcher.mp3',
  },
  'showdown gold smoke knight': {
    'music': 'music/showdown gold smoke knight.mp3',
    'ltop': '87%',
    'lleft': '80%',
    'campaign': ['Lantern'],
  },
  'showdown kings man': {
    'music': 'music/showdown kings man.mp3',
    'ltop': '68%',
    'lleft': '63%',
  },
  'showdown phoenix': {
    'music': 'music/showdown phoenix.mp3',
  },
  'showdown screaming antelope': {
    'music': 'music/showdown query.mp3',
    'ltop': '15%',
    'lleft': '57%',
  },
  'showdown the hand': {
    'music': 'music/showdown the hand.mp3',
  },
  'showdown watcher': {
    'music': 'music/showdown watcher.mp3',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'showdown white lion': {
    'music': 'music/showdown query.mp3',
    'ltop': '63%',
    'lleft': '68%',
  },
  'watched': {
    'music': 'music/watched.mp3',
    'ltop': '15%',
    'lleft': '50%',
    'campaign': ['Lantern'],
  },
  'white secret': {
    'music': 'music/white secret.mp3',
  },
  'white speaker': {
    'music': 'music/white speaker.mp3',
    'music_delay': 'speech-1000',
    'ltop': '8%',
    'lleft': '66%',
  },
  'zero presence': {
    'music': 'music/overwhelming darkness.mp3',
  },
  'fetid grotto': {
    'expansion': 'gorm',
    'music': 'music/overwhelming darkness.mp3',
    'ltop': '20%',
    'lleft': '30%',
  },
  'final march': {
    'expansion': 'gorm',
    'music': 'music/final march.mp3',
    'music_delay': '500',
    'ltop': '20%',
    'lleft': '50%',
  },
  'the approaching storm': {
    'expansion': 'gorm',
    'music': 'music/the approaching storm.mp3',
    'music_delay': '500',
    'ltop': '20%',
    'lleft': '70%',
  },
  'melting horror': {
    'expansion': 'gorm',
    'music': 'music/crush and devour.mp3',
  },
  'showdown gorm': {
    'expansion': 'gorm',
    'music': 'music/showdown gorm.mp3',
  },
  'black harvest': {
    'expansion': 'dung beetle knight',
    'music': 'music/rumbling in the dark.mp3',
  },
  'rumbling in the dark': {
    'expansion': 'dung beetle knight',
    'type': 'video',
    'music': 'music/rumbling in the dark.mp3',
  },
  'secret meeting': {
    'expansion': 'dung beetle knight',
    'music': 'music/secret meeting.mp3',
    'music_delay': '500',
    'ltop': '35%',
    'lleft': '40%',
  },
  'spelunking of death': {
    'expansion': 'dung beetle knight',
    'music': 'music/spelunking of death.mp3',
    'ltop': '18%',
    'lleft': '63%',
  },
  'underground sow': {
    'expansion': 'dung beetle knight',
    'music': 'music/rumbling in the dark.mp3',
    'ltop': '20%',
    'lleft': '40%',
  },
  'showdown dung beetle knight': {
    'expansion': 'dung beetle knight',
    'music': 'music/showdown butcher.mp3',
    'ltop': '5%',
    'lleft': '55%',
  },
  'an uninvited guest': {
    'expansion': 'lion knight',
    'music': 'music/lion knight enter.mp3',
    'music_delay': 'speech-2000',
    'ltop': '10%',
    'lleft': '66%',
  },
  'finale': {
    // 'type': 'slideshow',
    'expansion': 'lion knight',
    // 'music': 'music/finale.mp3',
    // 'number_of_slides': 6,
    // 'hide_label': true,
    // 'speech': 'audio/speech/'+lang+'/finale',
    // 'ltop': '5%',
    // 'lleft': '55%',
    'type': 'video',
    'music': 'music/finale.mp3',
  },
  'intermission': {
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'ltop': '88%',
    // 'lleft': '55%',
  },
  'places, everyone!': {
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'ltop': '33%',
    'lleft': '37%',
  },
  'showdown lion knight': {
    'expansion': 'lion knight',
    'music': 'music/lion knight showdown.mp3',
    'ltop': '10%',
    'lleft': '66%',
  },
  'strange caravan': {
    'expansion': 'lion knight',
    'music': 'music/lion knight main.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '40%',
  },
  'awake': {
    'expansion': 'dragon king',
    // 'music': 'music/lion knight main.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '50%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'death of the dragon king': {
    'expansion': 'dragon king',
    'music': 'music/death of the dragon king.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '80%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'faces in the sky': {
    'expansion': 'dragon king',
    'music': 'music/faces in the sky.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '25%',
    'campaign': ['Stars'],
  },
  'foundlings': {
    'expansion': 'dragon king',
    'music': 'music/foundlings.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '10%',
    'lleft': '75%',
    'campaign': ['Stars'],
  },
  'glowing crater': {
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '50%',
    'lleft': '25%',
  },
  // 'intimacy Stars': {
  //   'expansion': 'dragon king',
  //   'music': 'music/intimacy.mp3',
  //   'speech': 'audio/speech/'+lang+'/imtimacy.mp3',
  //   'ltop': '7%',
  //   'lleft': '28%',
  //   'campaign': 'Stars',
  // },
  'meltdown': {
    'expansion': 'dragon king',
    'music': 'music/crush and devour.mp3',
    // 'music_delay': 'speech-1000',
    'lleft': '30%',
  },
  "midnight's children": {
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '5%',
    // 'lleft': '45%',
    'campaign': ['Stars'],
  },
  'showdown dragon king': {
    'expansion': 'dragon king',
    'music': 'music/showdown dragon king.mp3',
    'music_delay': 'speech+500',
    'ltop': '80%',
    'lleft': '35%',
  },
  'showdown the tyrant': {
    'expansion': 'dragon king',
    'music': 'music/glowing crater.mp3',
    // 'music_delay': 'speech-1000',
    // 'ltop': '15%',
    // 'lleft': '40%',
    'campaign': ['Stars'],
  },
  'the tomb': {
    'expansion': 'dragon king',
    'music': 'music/the tomb.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '85%',
    'campaign': ['Stars'],
  },
  'unveil the sky': {
    'expansion': 'dragon king',
    'music': 'music/unveil the sky.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '55%',
    'lleft': '65%',
    'campaign': ['Stars'],
  },
  'bleeding heart': {
    'expansion': 'manhunter',
    'music': 'music/the hanged man.mp3',
    // 'music': 'music/unveil the sky.mp3',
    'music_delay': 'speech+1000',
    'ltop': '80%',
    // 'lleft': '67%',
    // 'campaign': 'Stars',
  },
  'death pit': {
    'expansion': 'manhunter',
    'music': 'music/crush and devour.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '25%',
    'lleft': '25%',
    // 'campaign': 'Stars',
  },
  'lottery': {
    'expansion': 'manhunter',

    'music': 'music/lottery.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '80%',
    'lleft': '40%',
    // 'campaign': 'Stars',
  },
  'showdown manhunter': {
    'expansion': 'manhunter',
    'music': 'music/showdown manhunter.mp3',
    'music_delay': 'speech+1000',
    'ltop': '15%',
    'lleft': '70%',
    // 'campaign': 'Stars',
  },
  'sonorous rest': {
    'expansion': 'manhunter',
    'music': 'music/sonorous rest.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '30%',
    // 'campaign': 'Stars',
  },
  'the hanged man': {
    'expansion': 'manhunter',
    'type': 'video',
    'music': 'music/the hanged man.mp3',
    // 'music_delay': 'speech-1000',
    // 'ltop': '55%',
    // 'lleft': '67%',
    // 'campaign': 'Stars',
  },
  'tools of war': {
    'expansion': 'manhunter',
    'music': 'music/lottery.mp3',
    // 'music_delay': 'speech-1000',
    'ltop': '7%',
    'lleft': '55%',
    // 'campaign': 'Stars',
  },
  'dark place': {
    'expansion': 'slenderman',
    'music': 'music/dark place.mp3',
    'music_delay': 'speech+500',
    'ltop': '85%',
    // 'lleft': '55%',
    // // 'campaign': 'Stars',
  },
  'forgotten fear': {
    'expansion': 'slenderman',
    'music': 'music/forgotten fear.mp3',
    'music_delay': '500',
    'ltop': '7%',
    // 'lleft': '85%',
    // // 'campaign': 'Stars',
  },
  'light-forging': {
    'expansion': 'slenderman',
    'music': 'music/light-forging.mp3',
    'music_delay': '500',
    'ltop': '25%',
    'lleft': '75%',
    // // 'campaign': 'Stars',
  },
  'showdown slenderman': {
    'expansion': 'slenderman',
    'music': 'music/showdown slenderman.mp3',
    'music_delay': 'speech+500',
    // 'ltop': '7%',
    // 'lleft': '55%',
    // // 'campaign': 'Stars',
  },
  'it\'s already here': {
    'expansion': 'slenderman',
    'music': 'music/it\'s already here.mp3',
    // 'music_delay': 'speech+500',
    'type': 'video',
    // 'ltop': '7%',
    // 'lleft': '55%',
    // // 'campaign': 'Stars',
  },
  'a gracious host': {
    'expansion': 'lion god',
    'music': 'music/a gracious host.mp3',
    'music_delay': '500',
    'ltop': '10%',
    'lleft': '75%',
    // // 'campaign': 'Stars',
  },
  'death reading': {
    'expansion': 'lion god',
    'music': 'music/death reading.mp3',
    'music_delay': '500',
    // 'ltop': '25%',
    // 'lleft': '75%',
    // // 'campaign': 'Stars',
  },
  'necropolis': {
    'expansion': 'lion god',
    'music': 'music/the knowledge worm.mp3',
    'music_delay': 'speech-1000',
    'ltop': '15%',
    'lleft': '85%',
    // // 'campaign': 'Stars',
  },
  'showdown lion god': {
    'expansion': 'lion god',
    'music': 'music/showdown lion god.mp3',
    'music_delay': 'speech + 1000',
    'ltop': '18%',
    'lleft': '28%',
    // // 'campaign': 'Stars',
  },
  'the knowledge worm': {
    'expansion': 'lion god',
    'music': 'music/necropolis.mp3',
    'music_delay': '300',
    'ltop': '15%',
    // 'lleft': '75%',
    // // 'campaign': 'Stars',
  },
  'the silver city': {
    'expansion': 'lion god',
    'music': 'music/necropolis.mp3',
    // 'music_delay': 'speech+500',
    'type': 'video',
    // 'ltop': '7%',
    // 'lleft': '55%',
    // // 'campaign': 'Stars',
  },
  'birth of color': {
    'expansion': 'sunstalker',
    'music': 'music/birth of color.mp3',
    'music_delay': 'speech-2000',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'conquer your shadow': {
    'expansion': 'sunstalker',
    'music': 'music/conquer your shadow.mp3',
    // 'music_delay': '300',
    // 'ltop': '15%',
    // 'lleft': '75%',
    // 'campaign': ['Sun'],
  },
  'edged tonometry': {
    'expansion': 'sunstalker',
    'music': 'music/edged tonometry.mp3',
    // 'music_delay': '300',
    'ltop': '12%',
    'lleft': '35%',
    'campaign': ['Sun'],
  },
  'final gift': {
    'expansion': 'sunstalker',
    'music': 'music/final gift.mp3',
    'music_delay': 'speech - 5000',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'showdown sunstalker': {
    'expansion': 'sunstalker',
    'music': 'music/showdown sunstalker.mp3',
    'music_delay': 'speech + 500',
    // 'ltop': '10%',
    // 'lleft': '60%',
    // 'campaign': ['Sun'],
  },
  'sky fishing': {
    'expansion': 'sunstalker',
    'music': 'music/sky fishing.mp3',
    // 'music_delay': '300',
    'ltop': '15%',
    'lleft': '38%',
    // 'campaign': ['Sun'],
  },
  'sun dipping': {
    'expansion': 'sunstalker',
    'music': 'music/sun dipping.mp3',
    // 'music_delay': '300',
    'ltop': '12%',
    'lleft': '40%',
    'campaign': ['Sun'],
  },
  'the great devourer': {
    'expansion': 'sunstalker',
    'music': 'music/promise under the sun.mp3',
    'music_delay': 'speech + 1000',
    // 'ltop': '85%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'the great sky gift': {
    'expansion': 'sunstalker',
    'music': 'music/the great sky gift.mp3',
    'music_delay': '1000',
    'ltop': '18%',
    'lleft': '25%',
    'campaign': ['Sun'],
  },
  'the pool and the sun': {
    'expansion': 'sunstalker',
    'music': 'music/the pool and the sun.mp3',
    // 'music_delay': '300',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'umbilical symbiosis': {
    'expansion': 'sunstalker',
    'music': 'music/umbilical symbiosis.mp3',
    // 'music_delay': '300',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'warriors of the sun': {
    'expansion': 'sunstalker',
    'music': 'music/warriors of the sun.mp3',
    // 'music_delay': '300',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'campaign': ['Sun'],
  },
  'promise under the sun': {
    'expansion': 'sunstalker',
    'music': 'music/promise under the sun.mp3',
    // 'music_delay': '300',
    // 'ltop': '15%',
    // 'lleft': '75%',
    'type': 'video',
    // 'campaign': ['Sun'],
  },

}

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
const events_table = create_events_table(events)
// ##################

module.exports = {
  createToc,
  titleCase,
  events_table: events_table,
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
  this.music = 'audio/' + music
  this.music_delay = music_delay

  if (speech == '') {
    this.speech = 'audio/speech/' + lang + '/' + id + '.mp3'
  } else {
    this.speech = 'audio/' + speech
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

function create_events_table (events) {
  let events_table = {}
  let event_ids = Object.keys(events)

  for (let i = 0; i < event_ids.length; i++) {
    events_table[event_ids[i]] = new Event(event_ids[i])

    let event = events[event_ids[i]]
    for (let property in event) {
      if (event.hasOwnProperty(property)) {
        if (property == 'music') {
          events_table[event_ids[i]][property] = './audio/' + event[property]
        } else {
          events_table[event_ids[i]][property] = event[property]
        }

        // console.log('Set property for '+event_ids[i]+':');
        // console.log(property+' : '+ event[property]);
      }
    }
  }

  return events_table
}

function titleCase (str) {
  let splitStr = str.toLowerCase().split(' ')

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }

  return splitStr.join(' ')
}

function createToc (col_len = 5) {
  let settings = JSON.parse(sessionStorage.getItem('settings'))

  $('#container').on('mouseenter', '#menu_item', function() {
    $(this).addClass('menu_hoverd')
    $('.menu_hoverd > *#showdown_icon').attr('src', cdnUrl('images/icons/swords_inv_c_hover.png'));
    // $('.menu_hoverd > *#expansion_icon').attr('src', 'images/icons/expansions/'+$('.menu_hoverd > *#expansion_icon').attr('value')+'_c_hover.png?timestamp=' + new Date().getTime());
  });

  $('#container').on('mouseleave', '#menu_item', function() {
    $('.menu_hoverd > *#showdown_icon').attr('src', cdnUrl('images/icons/swords_inv_c.png'));
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

  table_2_ids.sort()
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
    // a.setAttribute("href", events_table[rows[i][j]].type+'.html');

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
  // tbl2.style.width  = '90%';
  // tbl2.style.top  = '12%';
  tbl2.setAttribute('id', 'menu_table2')
  tbl2.style.cssText += 'width:90%;top:12%;left:5%;'

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
      ro_idx = 0
    }

    rows[ro_idx].push(table_2_ids[i])
    ro_idx = ro_idx + 1
    ctr = ctr + 1
  }

  // console.log(rows);

  for (let i = 0; i < rows.length; i++) {
    let tr = tbl2.insertRow()
    // tr.className = "spaceUnder";

    for (let j = 0; j < rows[i].length; j++) {
      let td = tr.insertCell()
      td.style.cssText = 'width:' + width2 + '%;height:5em;position:static;'

      let a2 = document.createElement('div')
      a2.setAttribute('id', 'menu_item')
      // a.setAttribute("href", events_table[rows[i][j]].type+'.html');
      // a.setAttribute("onclick", "setTransition('"+rows[i][j]+"')");
      a2.setAttribute('target', rows[i][j])
      a2.style.cssText += 'width:100%;position:static; margin:0 auto;'
      let text = ''
      if (events_table[rows[i][j]].label.includes('Showdown')) {
        // text = events_table[rows[i][j]].label.replace('Showdown:', '&#9876;:')
        text = events_table[rows[i][j]].label.replace('Showdown:', '')
        text = '<img style="width:9%;" id="showdown_icon" src="'+cdnUrl('images/icons/swords_inv_c.png')+'"/>' + text
      } else {
        text = events_table[rows[i][j]].label
      }
      if (events_table[rows[i][j]].expansion == '') {
        a2.innerHTML += text
      } else {
        // let dot = '<b style="color:'+color_menu[events_table[rows[i][j]].expansion]+';">&#10033;</b>'
        let dot = '<img style="width:10%;" id="expansion_icon" value="'+events_table[rows[i][j]].expansion+'" src="'+cdnUrl('images/icons/expansions/'+events_table[rows[i][j]].expansion+'_c.png')+'"/>'
        a2.innerHTML += dot+' '+text
      }
      // a2.innerHTML += events_table[rows[i][j]].label
      // if (events_table[rows[i][j]].expansion in color_menu) {
      //   a2.style.cssText += 'color:'+color_menu[events_table[rows[i][j]].expansion]+';'
      // }

      td.appendChild(a2)
    }
  }

  container.appendChild(tbl2)
}
