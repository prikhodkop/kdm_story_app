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
  resetSettings,
  getLanguage
}

const settings_string_default = require('./../../settings.json')

function defaultLang(){
  return settings_schema['language']['default']
}

function initSettings() {
  set_language_options()
  let settings = getSettings();
  localStorage.setItem('settings', JSON.stringify(settings))
  // console.log('Setting initialized!')
}

function getSettings () {
  // let dirname = app.getPath('userData');
  // console.log('Dirname: ' + dirname)
  let settings_string = {}
  // let settings_string_default = {}

  // try {
    // settings_string_default = JSON.parse(readFile(app.getAppPath() + '/settings.json'))
  // } catch (e) {
  // }

  // try {
  //   settings_string = JSON.parse(readFile(dirname + '/settings.json'))
  //   // settings_string = require(dirname + '/settings.json')
  // } catch (e) {
  // }

  // console.log('Local storage: '+localStorage.getItem("settings"))

  if (!(localStorage.getItem("settings") === null)) {
    settings_string = JSON.parse(localStorage.getItem("settings"))
  }

   let result = {...settings_string_default, ...settings_string }

   // If no languages are specified - reads and sets the default one
   if (!(window.globals.translations['languages'].includes(result['language']))) {
     result['language'] = settings_schema['language']['default']
   }

  // if no user options are saved or new option appears - value from settings.json in root is used
  return result
}

function getLanguage() {
  return getSettings()['language']
}



function addSettings (settings) {
  $('#container').append($('<div>', {
    id: 'settings-window-background',
  }))

  $('#settings-window-background').hide()

  // $('#container').append($('<img id="about_text">About</div>'));
  // $('#container').append($('<button id="settings">Settings</button>'))
  $('#container').append($('<img>', {
    id:"settings",
    src:cdnUrl('images/settings.png')
  }))
  // $('#settings').hide();
  // $('#settings').delay(1000).fadeIn(2000);

  $('#settings').tooltipster({animationDuration: 50,
      contentAsHTML: 'true',
      animation: 'fade',
      content: window.globals.glossary[getLanguage()].tooltips['settings'].text, //'<b style="color:#cc0;">Click</b> to show <b>Settings</b> window.',
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

  // $('#settings-window-back0').append($('<img>', {
  //   id: 'settings-window-back-img',
  //   src: cdnUrl('images/menu_back.png'),
  // }))

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

  silentSaveSettings(settings)
}

function silentSaveSettings(settings) {
  // saveFile(JSON.stringify(settings), app.getPath('userData') + '/settings.json')
  localStorage.setItem('settings', JSON.stringify(settings))
}

function saveSettings () {
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

  localStorage.setItem('settings', JSON.stringify(settings))

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

  settings = settings_string_default

  // saveFile(JSON.stringify(settings), __dirname + '/settings.json')
  // saveFile(JSON.stringify(settings), app.getPath('userData') + '/settings.json')
  localStorage.setItem('settings', JSON.stringify(settings))

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
            animationDuration: 0,
            contentAsHTML: 'true',
            animation: 'fade',
            content: schema[key].description,
            position: 'right',
            delay: [25,25],
            maxWidth: 400,
            interactive: true,
            onlyOne:true,

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
  'language': {
    'type': 'option',
    'title': 'Version',
    'description': 'Sets the game version.<br/><br/><b style="color:#eaa;">To play Community Edition you need to print gear cards from here:</b><br/><a style="color:#e55;" href="https://drive.google.com/open?id=1WppaDkubNEqVJnA0S6VlrYObHuZsVyD6">https://drive.google.com/open?id=1WppaDkubNEqVJnA0S6VlrYObHuZsVyD6</a>',
    'default': '1.5',
    'enum': []
  },
  'fullscreen': {
    'type': 'option',
    'title': 'FullScreen',
    'description': '<b style="color:#eaa;">(desktop version only)</b><br/>Sets fullscreen or windowed mode for the app.',
    'default': 'On',
    'enum': [
      'On',
      'Off'
    ],
  },
  'preload': {
    'type': 'option',
    'title': 'Preload',
    'description': '<b style="color:#eaa;">(web version only)</b><br/>Preloads images on app start. Takes longer to start, but ensures smoother user experience in the web version.',
    'default': 'Off',
    'enum': [
      'On',
      'Off'
    ],
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
    'description': '<b style="color:#cc0;">"On"</b> - all story events are played with subtitles.<br /><b style="color:#cc0;">"Video Only"</b> - subtitles are only shown in videos.',
    'default': 'On',
    'enum': [
      'On',
      'Video Only',
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
      '17px',
      '18px',
      '19px',
      '20px',
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
        'enum': expansion_options,
      },
      'gorm': {
        'type': 'option',
        'title': 'Gorm',
        'default': 'Disabled',
        'description': 'The Gorm travel enormous distances in their life cycles, shaping the landscapes with their enormous appetites and extreme bodily functions. Young Gorm roam the darkness devouring anything that moves (and many things that don\'t). During their mating season, older Gorm produces storms of incredible destruction. Ancient Gorm that have lived hundreds of lantern years will make a final solitary march to the fabled gormyards to die. The Gorm is a volatile quarry, but the complexities of its anatomy can unlock powerful tools for the settlement.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'green knight armor': {
        'type': 'option',
        'title': 'Green Knight Armor',
        'default': 'Disabled',
        'description': 'The Green Knight Armor is a powerful seven-piece armor set. Crafting the entire set requires resources and innovations from the Gorm, Spidicules, Flower Knight and Dung Beetle Knight along with rare gear acquired by beating the Manhunter and Lion Knight.',
        'enum': [
          'Disabled',
          'All content',
        ],
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
        'enum': expansion_options,
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
        'enum': expansion_options,
      },
      'sunstalker': {
        'type': 'option',
        'title': 'Sunstalker',
        'default': 'Disabled',
        'description': 'A showdown with the Sunstalker will test players ability to position their survivors and make coordinated attacks. Making use of their own shadows to turn the tides of the battle. Its rewards grant new long range options and an evasive burst damage armor set, that is low on actual armor levels.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.',
        'enum': expansion_options,
      },
      'gigalion': {
        'type': 'option',
        'title': 'White Gigalion',
        'default': 'Disabled',
        'description': 'At the depths of despair, the survivors of Deadrock rush into the unknown wastes to discover a lurking in the dark.',
        'enum': [
          'Disabled',
          'All content',
        ],
      },
      'allison ccg': {
        'type': 'option',
        'group': 'fan',
        'title': 'Allison the Twilight Knight (CCG)',
        'default': 'Disabled',
        'description': `<b style="color:#eaa;">To play you need to print gear, pattern, terrain, resource, tactics and HL/AI/CD cards from here:</b><br/><a style="color:#e55;" href="https://www.patreon.com/posts/allison-twilight-35517511">https://www.patreon.com/posts/allison-twilight-35517511</a><br/><br/>
                        Clad in dark bronze armor and robed in deep hooded cloaks, the
                        Twilight Knights stand on the edge of the known world, their lives
                        devoted to battling foul creatures and horrifying abominations to
                        shield the weak from such peril.<br/><br/>
                        Allison was once like you, a survivor outmatched by the terrors of
                        a dark world. Now, those terrors flee from her lantern light. She
                        has walked the road of plenty and need, pleasure and pain, gain
                        and loss. Nothing ever came to Allison without a fight, a lesson
                        the players will soon learn.<br/><br/>
                        Allison matches the players’ survival abilities with her own. She
                        is deadly and unpredictable, preparing players to confront a
                        more challenging Watcher, should players mishandle the Twilight
                        Sword. For those survivors who prove their worth, a new life in
                        the Twilight Order awaits them.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.`,
        'enum': expansion_options,
      },
      'butcher intro': {
        'type': 'option',
        'group': 'fan',
        'title': 'Butcher Intro (CCG)',
        'default': 'Disabled',
        'description': '<b style="color:#eaa;">To play you need to print a gear card from here:</b><br/><a style="color:#e55;" href="https://www.patreon.com/posts/butcher-intro-37279049">https://www.patreon.com/posts/butcher-intro-37279049</a><br/><br/>Adds Butcher introduction event <b>Fresh Meat</b> to be played at <b>Lantern Year 3</b> of People of the Lantern campaign.',
        'enum': [
          'Disabled',
          'All content',
        ],
      },
      'drifter knight': {
        'type': 'option',
        'group': 'fan',
        'title': 'Drifter Knight (CCG)',
        'default': 'Disabled',
        'description': `<b style="color:#eaa;">To play you need to print gear, terrain, tactics, resource and HL/AI cards from here:</b><br/><a style="color:#e55;" href="https://www.patreon.com/posts/drifter-knight-33914652">https://www.patreon.com/posts/drifter-knight-33914652</a><br/><br/>
                        Deep within the maddening darkness, a pale light shimmers.
                        Amongst alien flora, buried beneath noxious fog, rests a
                        lonesome creature. A knight without a charge. A protector with
                        nothing to protect. A drifting monster who stalks the deep fog.
                        Where the spartina grass grows thick, and the mist condenses in
                        pools, that is the lair of the Drifter Knight.
                        <br/><br/>
                        This race of noble beings live for one purpose: to find those
                        worthy of a dance. They will often cross blades with Manhunters,
                        other Knights, and of course heroes of the dark. The foolish seek
                        Drifters out. Not for honor, but through the seductive scent of
                        death that lingers around these Knights. Beware the curtain of
                        fog. Keep your lantern close.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.`,
        'enum': expansion_options,
      },
      'storm knight': {
        'type': 'option',
        'group': 'fan',
        'title': 'Storm Knight (CCG)',
        'default': 'Disabled',
        'description': `
        <b style="color:#eaa;">To play you need to print gear, terrain, resource and HL/AI cards from here:</b><br/><a style="color:#e55;" href="https://www.patreon.com/posts/storm-knight-33555687">https://www.patreon.com/posts/storm-knight-33555687</a><br/><br/>
        There was once a man, fascinated by clouds, that ardently followed storms into the darkness. He sought dominion over the heavens and built himself a floaring castle to chase the clouds until they accepted him and the man became a storm itself.<br/><br/><b style="color:#cc0;">Cards Only</b> - adds only Fighting Arts, Disorders and Terrain cards.<br/><b style="color:#cc0;">All content</b> - adds all expansion content.`,
        'enum': expansion_options,
      },
      'trial of champions': {
        'type': 'option',
        'group': 'fan',
        'title': 'Trial of Champions (CCG)',
        'default': 'Disabled',
        'description': `<b style="color:#eaa;">To play you need to print gear cards from here:</b><br/><a style="color:#e55;" href="https://www.patreon.com/posts/trial-of-33556064">https://www.patreon.com/posts/trial-of-33556064</a><br/><br/>
        Champions are special survivors with the potential to evolve into glorious, immortal warriors. They represent the classic character classes found throughout fantasy genres. Each champion comes with a wide array of potential new abilities to learn and use in combination with other Champions to form superior hunting parties. Death is a mere setback for Champions and they continue to fight, earn experience points and level up toward reaching their full potential.`,
        'enum': [
          'Disabled',
          'All content',
        ],
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
      'ringtail vixen': {
        'type': 'option',
        'title': 'Ringtail Vixen',
        'default': 'Disabled',
        'description': 'The survivors found a baby floating in the Swamp in a basket of woven fur. Strong and preternaturally fast, the child grew into a wild, beautiful woman bearing strange features like needle sharp teeth and strong fingernails that grew at an alarming rate. Finding an affinity with the fierce fox monsters that stalk their lands, she crafted her armor with clawed feet, a hood with vulpine ears, and fox tails. She protects her people with her keen sense of smell that allows her to detect the shifting levels of sulfur that occur when the Fox God awakens. She has led her people to the safety of the swamp burrows whenever the Ringtail Fox God and its aspects begin their hunt.<br/><br/><b style="color:#cc0;">Enabling</b> this expansion adds bookmark that could be used to alter <b>Intimacy</b> story event.',
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
