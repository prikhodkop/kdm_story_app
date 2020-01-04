const { app } = require('electron').remote

const { readFile, saveFile, exists } = require('./files')
const { cdnUrl } = require('./template-renderer')
const { addTimer } = require('./timer')

let settingsSavedCallback

module.exports = {
  getSettings,
  addSettings,
  onSettingsSaved,
  setSettings,
  saveSettings,
  silentSaveSettings
}

function getSettings () {
  let dirname = app.getPath('userData')
  console.log('Dirname: ' + dirname)

  if (exists(dirname + '/settings.json')) {
    return JSON.parse(readFile(dirname + '/settings.json'))
  } else {
    return JSON.parse(readFile(app.getAppPath() + '/settings.json'))
  }
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

  localStorage.empty();

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

var settings_schema = {
  'language': {
    'type': 'option',
    'title': 'Language',
    'description': 'Sets the app language.',
    'default': 'en',
    'enum': [
      'en',
    ],
  },
  'campaign': {
    'type': 'option',
    'title': 'Campaign',
    'description': 'Choose which campaign you currently play.',
    'default': 'Lantern',
    'enum': [
      'Lantern',
      'Stars',
      'Sun',
    ],
  },
  'music': {
    'type': 'option',
    'title': 'Music',
    'description': 'Switch on/off music playing (would also switch on/off voice in the videos).',
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
    'description': 'If "On" then video would be played with subtitles.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'onscreenKeypads': {
    'type': 'option',
    'title': 'Onscreen Keypads',
    'description': 'Show onscreen keypads for use with mouse.',
    'default': 'On',
    'enum': [
      'On',
      'Off',
    ],
  },
  'innovation_row_length': {
    'type': 'option',
    'title': 'Innovations per row',
    'description': 'How many columns in innovations grid in Development window of Settlement screen to show.',
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
    'description': 'How many basic hunt events are in the deck (affects chance of expansions hunt events to be drawn).',
    'default': '12',
    'enum': [
      // '0',
      '12',
      '24',
      '36',
    ],
  },
  'card design': {
    'type': 'group',
    'title': 'Cards design',
    'description': 'Chose which artists card design to use in the app.',
    'properties': {
      'fighting arts': {
        'type': 'option',
        'title': 'Fighting Arts',
        'default': 'Poots',
        'description': 'What card design no show.',
        'enum': [
          'Poots',
          'Fen Small',
        ],
      },
      'disorders': {
        'type': 'option',
        'title': 'Disorders',
        'default': 'Poots',
        'description': 'What card design no show.',
        'enum': [
          'Poots',
          'Fen Small',
          'Fen Wide',
        ],
      },
    },
  },
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
        'enum': expansion_options,
      },
      'dung beetle knight': {
        'type': 'option',
        'title': 'Dung Beetle Knight',
        'default': 'Cards only',
        'enum': expansion_options,
      },
      'flower knight': {
        'type': 'option',
        'title': 'Flower Knight',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'gorm': {
        'type': 'option',
        'title': 'Gorm',
        'default': 'Cards only',
        'enum': expansion_options,
      },
      'manhunter': {
        'type': 'option',
        'title': 'Manhunter',
        'default': 'Disabled',
        'enum': expansion_options,
      },
      'lion god': {
        'type': 'option',
        'title': 'Lion God',
        'default': 'Disabled',
        'enum': expansion_options,
      },
      'lion knight': {
        'type': 'option',
        'title': 'Lion Knight',
        'default': 'Disabled',
        'enum': expansion_options,
      },
      'lonely tree': {
        'type': 'option',
        'title': 'Lonely Tree',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'slenderman': {
        'type': 'option',
        'title': 'Slenderman',
        'default': 'Disabled',
        'enum': expansion_options,
      },
      'spidicules': {
        'type': 'option',
        'title': 'Spidicules',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Cards only',
        ],
      },
      'sunstalker': {
        'type': 'option',
        'title': 'Sunstalker',
        'default': 'Disabled',
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
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'fade': {
        'type': 'option',
        'title': 'Fade',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'percival': {
        'type': 'option',
        'title': 'Percival',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'white speaker': {
        'type': 'option',
        'title': 'White Speaker',
        'default': 'Disabled',
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
      'beyond the wall': {
        'type': 'option',
        'title': 'Beyond the Wall',
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
        'enum': [
          'Disabled',
          'Enabled',
        ],
      },
    },
  },
}
