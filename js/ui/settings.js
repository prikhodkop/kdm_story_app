const { app } = require('electron').remote

const { readFile, saveFile, exists } = require('./files')
const { cdnUrl } = require('./template-cdnurl')
const { addTimer } = require('./timer')

let settingsSavedCallback

module.exports = {
  getSettings,
  addSettings,
  onSettingsSaved,
  setSettings,
  saveSettings,
  silentSaveSettings,
  initSettings,
  defaultLang,
  resetSettings
}

function defaultLang(){
  return settings_schema['language']['default']
}

function initSettings() {
  set_language_options()
  let settings = getSettings();
  sessionStorage.setItem('settings', JSON.stringify(settings))
  // console.log('Setting initialized!')
}

function getSettings () {
  let dirname = app.getPath('userData');
  // console.log('Dirname: ' + dirname)
  let settings_string = {}
  let settings_string_default = {}

  try {
    settings_string_default = JSON.parse(readFile(app.getAppPath() + '/settings.json'))
  } catch (e) {
  }

  try {
    settings_string = JSON.parse(readFile(dirname + '/settings.json'))
  } catch (e) {
  }

   let result = {...settings_string_default, ...settings_string }

   if (!(window.globals.translations['languages'].includes(result['language']))) {
     result['language'] = settings_schema['language']['default']
   }

  // if no user options are saved or new option appears - value from settings.json is used
  return result
}

function addSettings (settings) {
  $('#container').append($('<div>', {
    id: 'settings-window-background',
  }))

  $('#settings-window-background').hide()

  // $('#container').append($('<img id="about_text">About</div>'));
  $('#container').append($('<button id="settings">Settings</button>'))
  // $('#settings').hide();
  // $('#settings').delay(1000).fadeIn(2000);

  $('#settings').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: '<b style="color:#cc0;">Click</b> to show <b>Settings</b> window.',
      position: 'left',
      delay: 0,
      trigger: 'custom',
      triggerOpen: {
        mouseenter: true,
        // click: true
      },
      triggerClose: {
        click: true,
        mouseleave: true
      }
    });

  $('#container').append($('<div>', {
    id: 'settings-window-back0',
  }))

  $('#settings-window-back0').append($('<img>', {
    id: 'settings-window-back-img',
    src: cdnUrl('images/reference/reference_back.png'),
  }))

  $('#settings-window-back0').append($('<div>', {
    id: 'settings-window-back',
  }))

  $('#settings-window-back0').append('<h id="settings-title">Settings</h>')
  $('#settings-window-back0').append('<button id="settings-save">Save</button>')
  $('#settings-window-back0').hide()

  var table = createTable(settings_schema, settings)

  $('#settings-window-back').append(table)

  $('#settings').click(function () {
    if (!$(this).hasClass('active')) {
      $('#settings-window-back0').fadeIn(500)
      $('#settings-window-background').fadeIn(500)
    } else {
      $('#settings-window-back0').fadeOut(500)
      $('#settings-window-background').fadeOut(500)
    }

    $(this).toggleClass('active')
  })

  $('#settings-save').click(function () {
    $('#settings-window-back0').fadeOut(500)
    $('#settings-window-background').fadeOut(500)
    $('#settings').removeClass('active')
    saveSettings()
  })

  $('#settings-reset').click(function () {
    $('#settings-window-back0').fadeOut(500)
    $('#settings-window-background').fadeOut(500)
    $('#settings').removeClass('active')
    resetSettings()
  })

  $('#settings-window-background').on('click', function () {

    $('#settings-window-back0').fadeOut(500)
    $('#settings-window-background').fadeOut(500)
    $('#settings').removeClass('active')
    addTimer(function () {
      setSettings(settings)
    }, 600)
  })

  $('.settings[value = "campaign"]').prop('disabled', 'disabled');

  // $('#container').on('change', '.setting[value = "dragon king"]:selected', function(){
  //     console.log('Plan to change the campaign!!!')
  //     let expansion = $('.setting[value = "dragon king"]')
  //     let campaign = $('.setting[value = "campaign"]')
  //
  //     if ((campaign.val() == 'Stars') && !(expansion.val() == 'All content')) {
  //       console.log('Done that!')
  //       // campaign.val('Lantern')
  //       campaign.find('option:eq(0)').prop('selected', true);
  //     }
  // });
  // $('.setting[value = "sunstalker"]').on('change', function(){
  //     let expansion = $('.setting[value = "sunstalker"]')
  //     let campaign = $('.setting[value = "campaign"]')
  //
  //     if ((campaign.val() == 'Sun') && !(expansion.val() == 'All content')) {
  //       // campaign.val('Lantern')
  //       campaign.find('option:eq(0)').prop('selected', true);
  //     }
  // });
  // $('.settings[value = "campaign"]').attr('value', 'Campaign!!');
}

function setSettings (settings) {
  $('select.settings').each(function (index) {
    console.log($(this).attr('group') + '_1_' + $(this).attr('value') + '_2_' + $(this).val())
    if ($(this).attr('group') == '') {
      $(this).val(settings[$(this).attr('value')])
    } else {
      $(this).val(settings[$(this).attr('group')][$(this).attr('value')])
    }

  })
}

function silentSaveSettings(settings) {
  saveFile(JSON.stringify(settings), app.getPath('userData') + '/settings.json')
}

function saveSettings () {
  let settings = Object()
  $('select.settings').each(function (index) {
    console.log($(this).attr('group') + '_1_' + $(this).attr('value') + '_2_' + $(this).val())
    if ($(this).attr('group') == '') {
      // if ($(this).attr('value') == 'campaign') {
      //   if ((settings['campaign'] == 'Stars') && !(settings['expansions']['dragon king'] == 'All content')) {
      //     $(this).attr('value', 'Lantern')
      //     settings[$(this).attr('value')] = 'Lantern'
      //   }
      //   if ((settings['campaign'] == 'Sun') && !(settings['expansions']['sunstalker'] == 'All content')) {
      //     $(this).attr('value', 'Lantern')
      //     settings[$(this).attr('value')] = 'Lantern'
      //   }
      // } else {
      //   settings[$(this).attr('value')] = $(this).val()
      // }
      settings[$(this).attr('value')] = $(this).val()
    } else {
      if (!($(this).attr('group') in settings)) {
        settings[$(this).attr('group')] = Object()
      }
      settings[$(this).attr('group')][$(this).attr('value')] = $(this).val()
    }
  })

  console.log('New settings:')
  console.log(settings)

  // saveFile(JSON.stringify(settings), __dirname + '/settings.json')
  saveFile(JSON.stringify(settings), app.getPath('userData') + '/settings.json')

  if (settingsSavedCallback) {
    settingsSavedCallback()
  }

  return settings
}


function resetSettings () {
  let settings = Object()
  $('select.settings').each(function (index) {
    console.log($(this).attr('group') + '_1_' + $(this).attr('value') + '_2_' + $(this).val())
    if ($(this).attr('group') == '') {
      settings[$(this).attr('value')] = $(this).val()
    } else {
      if (!($(this).attr('group') in settings)) {
        settings[$(this).attr('group')] = Object()
      }
      settings[$(this).attr('group')][$(this).attr('value')] = $(this).val()
    }
  })

  console.log('New settings:')
  console.log(settings)

  sessionStorage.clear();

  // saveFile(JSON.stringify(settings), __dirname + '/settings.json')
  saveFile(JSON.stringify(settings), app.getPath('userData') + '/settings.json')

  if (settingsSavedCallback) {
    settingsSavedCallback()
  }

  return settings
}

function onSettingsSaved(callback = null) {
  settingsSavedCallback = callback
}

function createTable (schema, defaults = undefined, level = 0, group = '') {
  console.log('Defaults:')
  console.log(defaults)

  let table = $('<table>', {
    class: 'settings',
    level: level,
  })

  let tbody = $('<tbody>', {
    class: 'settings',
    level: level,
  })

  table.append(tbody)

  for (var key in schema) {
    console.log('Key:')
    console.log(key)

    let tr = $('<tr>', {
      class: 'settings',
      level: level,
    })

    tbody.append(tr)

    if (schema[key].type == 'option') {
      let td1 = $('<td>', {
        class: 'settings',
        id: 'title',
        level: level,
      })

      td1.text(schema[key].title)
      tr.append(td1)

      let td2 = $('<td>', {
        class: 'settings',
        id: 'select',
        level: level,
      })

      let sel = $('<select>', {
        class: 'settings',
        level: level,
        value: key,
        group: group,
      }).appendTo(td2)

      sel.tooltipster({
            animationDuration: 50,
            contentAsHTML: 'true',
            animation: 'fade',
            content: schema[key].description,
            position: 'right',
            delay: 0,
            maxWidth: 300,
      })

      $(schema[key]['enum']).each(function () {
        sel.append($('<option>', {
          class: 'settings',
          id: level,
          parent: key,
          group: group,
        }).attr('value', this).text(this))
      })

      // $('option.settings#'+level+'[value="'+schema[key]['default']+'"][parent="'+key+'"]').attr('selected','selected');
      if ((!(defaults == null)) && (key in defaults)) {
        sel.val(defaults[key])
      } else {
        sel.val(schema[key]['default'])
      }

      if (schema[key]['enum'].length == 1) {
        sel.prop('disabled', 'disabled').attr('id', 'disabled')
      }

      tr.append(td2)
    }

    if (schema[key].type == 'group') {
      let td1 = $('<td>', {
        class: 'settings',
        id: 'group',
        level: level,
      })

      td1.text(schema[key].title)
      tr.append(td1)

      let tr2 = $('<tr>', {
        class: 'settings',
        level: level,
      })

      tbody.append(tr2)

      let td2 = $('<td>', {
        class: 'settings',
        id: 'table',
        level: level,
        colspan: 2,
        group: schema[key],
      })

      td2.append(createTable(schema[key].properties, defaults[key], level + 1, key))
      tr2.append(td2)
    }
  }
  return table
}

var expansion_options = [
  'Disabled',
  'Cards only',
  'All content',
]

function set_language_options() {
  settings_schema['language']['enum'] = window.globals.translations['languages']
}

var settings_schema = {
  'campaign': {
    'type': 'option',
    'title': 'Campaign',
    'description': 'Campaign you currently play.',
    'default': 'Lantern',
    'enum': [
      'Lantern',
      'Stars',
      'Sun',
    ],
  },
  'fullscreen': {
    'type': 'option',
    'title': 'FullScreen',
    'description': 'Sets fullscreen or windowed mode for the app.',
    'default': 'On',
    'enum': [
      'On',
      'Off'
    ],
  },
  'language': {
    'type': 'option',
    'title': 'Language',
    'description': 'Sets the app language.',
    'default': 'English',
    'enum': []
    //   'en',
    //   'ru',
    //   'pl'
    // ],
  },
  'music': {
    'type': 'option',
    'title': 'Music',
    'description': 'Switch on/off music playing.<br/><br/><b>Would also switch on/off voice in the videos in the current version</b>.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'narration': {
    'type': 'option',
    'title': 'Narration',
    'description':  'Switch on/off narration in story events.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'subtitles': {
    'type': 'option',
    'title': 'Subtitles',
    'description': 'If "On" then videos are played with subtitles.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'onscreenKeypads': {
    'type': 'option',
    'title': 'Onscreen Keypads',
    'description': 'If "On" onscreen keypad is shown in <b>Reference</b> menu.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'fontSize': {
    'type': 'option',
    'title': 'Font Size',
    'description': 'Base font size to be used for all texts.',
    'default': '16px',
    'enum': [
      '10px',
      '11px',
      '12px',
      '13px',
      '14px',
      '15px',
      '16px',
    ],
  },
  'innovation_row_length': {
    'type': 'option',
    'title': 'Innovations Row Length',
    'description': 'How many columns to show on <b>Innovations</b> window in the <b>Settlement</b>.',
    'default': '5',
    'enum': [
      '4',
      '5',
      '6',
    ],
  },
  'size_of_basic_hunt_deck': {
    'type': 'option',
    'title': 'Basic Hunt Deck Size',
    'description': 'How many basic <b>Random Hunt Events</b> are in the deck (affects chance of expansions hunt events to be drawn).<br/><br/>Base game value: 12.',
    'default': '12',
    'enum': [
      // '0',
      '12',
      '24',
      '36',
    ],
  },
  // 'card design': {
  //   'type': 'group',
  //   'title': 'Cards design',
  //   'description': 'Chose which artist\'s card design to use in the app.',
  //   'properties': {
  //     'fighting arts': {
  //       'type': 'option',
  //       'title': 'Fighting Arts',
  //       'default': 'Poots',
  //       'description': 'Chose which artist\'s card design to use in the app for <b>Fighting Arts in </b>Reference menu.<br/><br/><b style="color:#cc0;">Poots</b> - default game design.<br/><b style="color:#cc0;">Fen Small</b> - more compact images by Fen.',
  //       'enum': [
  //         'Poots',
  //         'Fen Small',
  //       ],
  //     },
  //     'disorders': {
  //       'type': 'option',
  //       'title': 'Disorders',
  //       'default': 'Poots',
  //       'description': 'Chose which artist\'s card design to use in the app for <b>Disorders</b> in <b>Reference</b> menu.<br/><br/><b style="color:#cc0;">Poots</b> - default game design.<br/><b style="color:#cc0;">Fen Small</b> - more compact images by Fen.',
  //       'enum': [
  //         'Poots',
  //         'Fen Small',
  //         // 'Fen Wide',
  //       ],
  //     },
  //   },
  // },
  'expansions': {
    'type': 'group',
    'title': 'Expansions',
    'description':
    `Allows to set which expansion content to show in the app.
"All content" - show events and allow random card draw.
"Cards only" - allow random card draw, but hide events.
"None" - no events or draw, however expansion cards are still searchable in reference screen.`,
    'properties': {
      'dragon king': {
        'type': 'option',
        'title': 'Dragon King',
        'default': 'Disabled',
        'description': 'The Dragon King\'s species is long dead. It remains alone, clinging to the memories of its once mighty race. Its destructive moods swing wildly from impotent rage to obsessive nostalgia. It stalks the darkness, lashing out at anything it meets. Survivors that run across the moody monster usually fall prey to the unseen waves of ruinous pain that emanate from the monster\'s glowing heart. Those survivors lucky enough to drive off the monster will be amply rewarded with a trove of new armaments crafted from the abandoned husk of the monster\'s body.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'dung beetle knight': {
        'type': 'option',
        'title': 'Dung Beetle Knight',
        'default': 'Cards only',
        'description': 'Resourceful and hungry, this cunning species has evolved a knight\'s shape to fool booth predators and prey. It rolls a massive resin ball formed from spit used to collect rare feces for its meals.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'flower knight': {
        'type': 'option',
        'title': 'Flower Knight',
        'default': 'Disabled',
        'description': 'This enigmatic knight is the source of many tales and the muse of many pieces of art. Its ethereal beauty is hard to capture and its swordplay is unmatchable. The Flower Knight expansion provides a new challenge for daring survivors. The monster rewards luck and punishes survivors who try to gang up on it. Its rewards explore the themes of addiction and short-term gain coupled with long-term losses.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'gorm': {
        'type': 'option',
        'title': 'Gorm',
        'default': 'Cards only',
        'description': 'The Gorm travel enormous distances in their life cycles, shaping the landscapes with their enormous appetites and extreme bodily functions. Young Gorm roam the darkness devouring anything that moves (and many things that don\'t). During their mating season, older Gorm produces storms of incredible destruction. Ancient Gorm that have lived hundreds of lantern years will make a final solitary march to the fabled gormyards to die. The Gorm is a volatile quarry, but the complexities of its anatomy can unlock powerful tools for the settlement.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'manhunter': {
        'type': 'option',
        'title': 'Manhunter',
        'default': 'Disabled',
        'description': 'Hailing from a far away city, the Manhunter is a sadistic killer. It brutally executes survivors, cowing settlements into willingly submitting people to it. No one knows why it abducts survivors, or what they\'re used for, only that once taken, they are never seen again. Settlements will have to choose: take up arms against their fellow man, or accept the blood tax.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'lion god': {
        'type': 'option',
        'title': 'Lion God',
        'default': 'Disabled',
        'description': 'Warped for millennia by the tormenting whispers of an evil parasite, the last great ruler of the Silver City would be unrecognizable to their subjects if any were alive to see them today. Lacking the faintest glimmer of its former glory, the Lion God stalks the dead streets of its once-bustling kingdom in a mindless rage. Anything that comes within reach of its filthy, petrified claws is eaten or destroyed.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'lion knight': {
        'type': 'option',
        'title': 'Lion Knight',
        'default': 'Disabled',
        'description': 'Incapable of emotion, the Lion Knight seeks to understand the world around it through its bizarre, self-serving stage productions. Between performances, it is a distant husk, unaffected by the normal world. When the time comes, "actors" are gathered by the Lion Knight\'s masked retinue to join it onstage. There, it hopes to capture and vicariously experience their excitement, fears, and ultimately, their deaths. However, it remains up to the survivors to decide whether or not they stick to their scripts.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'lonely tree': {
        'type': 'option',
        'title': 'Lonely Tree',
        'default': 'Disabled',
        'description': 'If you can see the Lonely Tree for what it really is, it\'s probably too late. This carnivorous organism hypnotizes anything that comes near, luring prey with hallucinations of their innermost desires. Once they draw near, the hallucinations turn to ceaseless dreams, while the roots consume the victim in their sleep.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'slenderman': {
        'type': 'option',
        'title': 'Slenderman',
        'default': 'Disabled',
        'description': 'The Slenderman is a dark, cold hole in the memories of the few that have seen it and lived. Within this chilling gap of recollection, terror thrives, growing into panic and jumbled tales of warning. Facing the Slenderman tests the teamwork and sanity of the survivors that face it. The monster\'s movements are unpredictable, and it will often vanish from the board, leaving the team to carefully coordinate their actions to bring down their foe.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'spidicules': {
        'type': 'option',
        'title': 'Spidicules',
        'default': 'Disabled',
        'description': 'Vibrating to make itself invisible to the human eye, the Spidicules leaves its forest dwelling and lurks in settlements unnoticed. It kidnaps survivors for its own delight as well as to nourish its ever-growing brood.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'sunstalker': {
        'type': 'option',
        'title': 'Sunstalker',
        'default': 'Disabled',
        'description': 'A showdown with the Sunstalker will test players ability to position their survivors and make coordinated attacks. Making use of their own shadows to turn the tides of the battle. Its rewards grant new long range options and an evasive burst damage armor set, that is low on actual armor levels.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },

    },
  },
  'strains': {
    'type': 'group',
    'title': 'Strains',
    'description':
    `Strain fightning arts.`,
    'properties': {
      'backstabber': {
        'type': 'option',
        'title': 'Backstabber',
        'default': 'Disabled',
        'enum': [
          'Locked',
          'Unlocked',
          'Disabled',
        ],
      },
      'ethereal pact': {
        'type': 'option',
        'title': 'Ethereal Pact',
        'default': 'Disabled',
        'enum': [
          'Locked',
          'Unlocked',
          'Disabled',
        ],
      },
      'giants blood': {
        'type': 'option',
        'title': 'Giants Blood',
        'default': 'Disabled',
        'enum': [
          'Locked',
          'Unlocked',
          'Disabled',
        ],
      },
      'infinite lives': {
        'type': 'option',
        'title': 'Infinite Lives',
        'default': 'Disabled',
        'enum': [
          'Locked',
          'Unlocked',
          'Disabled',
        ],
      },
    },
  },
  'whiteboxes': {
    'type': 'group',
    'title': 'Whiteboxes',
    'description':
    `Content added with whitebox expansions.`,
    'properties': {
      'allison the twilight knight': {
        'type': 'option',
        'title': 'Allison the Twilight Knight',
        'description': 'Clad in dark bronze armor and robed in a deep hooded cloak. The Twilight Knights stand on the edge of the known world, a life devoted to battling foul creatures and horrifying abominations to shield the weaker from such peril.<br/><br/><b style="color:#cc0;">Enabling</b> this expansion updates <b>Hooded Knigth</b> story event',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'before the wall': {
        'type': 'option',
        'title': 'Before the Wall',
        'default': 'Disabled',
        'description': '<b style="color:#cc0;">Enabling</b> this expansion adds craftable gear to staring settlement location and <b>Vagabond Armor</b> set.',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'beyond the wall': {
        'type': 'option',
        'title': 'Beyond the Wall',
        'default': 'Disabled',
        'description': '<b style="color:#cc0;">Enabling</b> this expansion adds craftable gear to staring settlement location.',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'fade': {
        'type': 'option',
        'title': 'Fade',
        'default': 'Disabled',
        'description': 'Fade violated the White Speakers\' oath against childbearing. Expecting no mercy, she fled the cult with her child and the Sword of Silence stolen from the Sword Hunters\' armory.<br/><br/><b style="color:#cc0;">Enabling</b> this expansion adds <b>Random</b> Hunt event.',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'percival': {
        'type': 'option',
        'title': 'Percival',
        'default': 'Disabled',
        'description': 'Percival is a member of a small order called the Black Knights. The Black Knights were founded by a militaristic settlement that hoped to conqueror the darkness and provide a safe haven for humanity. A great crusade called the Black Knights into action and Percival left her home, never to be seen again. Before leaving, though, she commanded her loyal companion, a young puppy, to wait for her safe return. He still waits to this day.<br/><br/><b style="color:#cc0;">Enabling</b> this expansion adds <b>Random</b> Hunt event.',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'white speaker': {
        'type': 'option',
        'title': 'White Speaker',
        'default': 'Disabled',
        'description': 'Long ago, the White Speaker cult\'s savagery threatened the few enclaves of human civilization. The Order of Twilight Knights rose up nearly destroying the cult. Now, small covens of White Speakers can be found meeting in abandoned places, sharing the secrets of their blood magic, passed on from one White Speaker to another through intricate tales, whispered and screamed in frenzied, transcendental rituals.<br/><br/><b style="color:#cc0;">Enabling</b> this expansion updates <b>White Speaker</b> story event.',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
    },
  },
}
