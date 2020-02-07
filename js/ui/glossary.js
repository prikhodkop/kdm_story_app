const { getSettings, defaultLang } = require('./../ui/settings')
const { pathToAsset, pathToAssetL } = require('./../ui/assets_loader')


var lang = getSettings()['language']

if ((window.globals.glossary === undefined)||(window.globals.glossary[lang] === undefined)||(window.globals.glossary[lang].fighting_arts === undefined)) {
  console.log('!!!+ I load resources')
  var { abilities } = require('./../lists/abilities')
  var { armor_sets } = require('./../lists/armor_sets')
  var { disorders } = require('./../lists/disorders')
  var { fighting_arts, secret_fighting_arts } = require('./../lists/fighting_arts')
  var { gear_list } = require('./../lists/gear_list')
  var { innovations } = require('./../lists/innovations')
  var { resources } = require('./../lists/resources')
  var { settlement_events } = require('./../lists/settlement_events')
  var { settlement_locations } = require('./../lists/settlement_locations')
  var { survivor_statuses } = require('./../lists/survivor_statuses')
  var { terrain } = require('./../lists/terrain')
  var glossary_terms

} else {
  console.log('!!!- I skip load resources')
  abilities = window.globals.glossary[lang].abilities
  armor_sets = window.globals.glossary[lang].armor_sets
  disorders = window.globals.glossary[lang].disorders
  fighting_arts = window.globals.glossary[lang].fighting_arts
  secret_fighting_arts = window.globals.glossary[lang].secret_fighting_arts
  gear_list = window.globals.glossary[lang].gear_list
  innovations = window.globals.glossary[lang].innovations
  resources = window.globals.glossary[lang].resources
  settlement_events = window.globals.glossary[lang].settlement_events
  settlement_locations = window.globals.glossary[lang].settlement_locations
  survivor_statuses = window.globals.glossary[lang].survivor_statuses
  terrain = window.globals.glossary[lang].terrain
  glossary_terms = window.globals.glossary[lang].glossary_terms
}

var data_en
var data_local

function init_glossary() {
  var lang = getSettings()['language']
  console.log('Cards new language: '+lang)

  let data_local, data_en

  if (window.globals.glossary === undefined) {
    window.globals.glossary = {}
  }

  if (window.globals.glossary[lang] === undefined) {
    window.globals.glossary[lang] = {}
  }

  ///
  if (window.globals.glossary[lang].fighting_arts === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/fighting_arts_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/fighting_arts_texts')
    fighting_arts = localized_require(fighting_arts, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].fighting_arts = fighting_arts
  } else {
    fighting_arts = window.globals.glossary[lang].fighting_arts
  }

  if (window.globals.glossary[lang].gear_list === undefined) {
    window.globals.glossary[lang].gear_list = gear_list
  } else {
    fighting_arts = window.globals.glossary[lang].fighting_arts
  }

  ///
  if (window.globals.glossary[lang].secret_fighting_arts === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/secret_fighting_arts_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/secret_fighting_arts_texts')
    secret_fighting_arts = localized_require(secret_fighting_arts, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].secret_fighting_arts = secret_fighting_arts
  } else {
    secret_fighting_arts = window.globals.glossary[lang].secret_fighting_arts
  }

  ///
  if (window.globals.glossary[lang].disorders === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/disorders_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/disorders_texts')
    disorders = localized_require(disorders, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].disorders = disorders
  } else {
    disorders = window.globals.glossary[lang].disorders
  }

  ///
  if (window.globals.glossary[lang].innovations === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/innovations_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/innovations_texts')
    innovations = localized_require(innovations, data_local, data_en, ['label', 'passive'])
    window.globals.glossary[lang].innovations = innovations
  } else {
    innovations = window.globals.glossary[lang].innovations
  }

  ///
  if (window.globals.glossary[lang].abilities === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/abilities_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/abilities_texts')
    abilities = localized_require(abilities, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].abilities = abilities
  } else {
    abilities = window.globals.glossary[lang].abilities
  }

  ///
  if (window.globals.glossary[lang].armor_sets === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/armor_sets_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/armor_sets_texts')
    armor_sets = localized_require(armor_sets, data_local, data_en, ['label'])
    window.globals.glossary[lang].armor_sets = armor_sets
  } else {
    armor_sets = window.globals.glossary[lang].armor_sets
  }

  ///
  if (window.globals.glossary[lang].settlement_locations === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/settlement_locations_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/settlement_locations_texts')
    settlement_locations = localized_require(settlement_locations, data_local, data_en, ['label'])
    window.globals.glossary[lang].settlement_locations = settlement_locations
  } else {
    settlement_locations = window.globals.glossary[lang].settlement_locations
  }

  //## Settlement Events
  if (window.globals.glossary[lang].settlement_events === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/settlement_events_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/settlement_events_texts')
    settlement_events = localized_require(settlement_events, data_local, data_en, ['label'])
    window.globals.glossary[lang].settlement_events = settlement_events
  } else {
    settlement_events = window.globals.glossary[lang].settlement_events
  }

  //## Survivor Statuses
  if (window.globals.glossary[lang].survivor_statuses === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/survivor_statuses_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/survivor_statuses_texts')
    survivor_statuses = localized_require(survivor_statuses, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].survivor_statuses = survivor_statuses
  } else {
    survivor_statuses = window.globals.glossary[lang].survivor_statuses
  }

  if (window.globals.glossary[lang].terrain === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/terrain_texts')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/'+'text/lists/terrain_texts')
    terrain = localized_require(terrain, data_local, data_en, ['label', 'description'])
    window.globals.glossary[lang].terrain = terrain
  } else {
    terrain = window.globals.glossary[lang].terrain
  }

  //## Glossary Terms (list changed fully!)
  if (window.globals.glossary[lang].glossary_terms === undefined) {
    data_local = ''
    if (!(lang == defaultLang())) {
      try {
        data_local = require('../../translations/'+lang+'/'+'text/lists/glossary_terms')
      } catch(e) {
      }
    }
    data_en = require('../../translations/'+defaultLang()+'/text/lists/glossary_terms')


    // if (data_local == '') {
    //   glossary_terms = data_en.glossary_terms
    // } else {
    //   glossary_terms = data_local.glossary_terms
    // }

    let keys = Object.keys(data_en.texts)
    glossary_terms = data_en.texts
    let entry

    for (let j=0; j<keys.length; j++) {
      // if (args[i] in data_en.texts[keys[j]]) {
      //   if ((found)&&(keys[j] in data_local.texts)&&(args[i] in data_local.texts[keys[j]])) {
      //      result[keys[j]][args[i]] = data_local.texts[keys[j]][args[i]]
      //   } else {
      //      result[keys[j]][args[i]] = data_en.texts[keys[j]][args[i]]
      //   }
      // }
      entry = {}
      if (data_local == '') {
        entry.label = keys[j]
        entry.description = data_en.texts[keys[j]]
      } else {
          if ((keys[j] in data_local.texts)&&('label' in data_local.texts[keys[j]])) {
            entry.label = data_local.texts[keys[j]].label+'  ['+keys[j]+']'
          } else {
            entry.label = keys[j]
          }
          if ((keys[j] in data_local.texts)&&('description' in data_local.texts[keys[j]])) {
            entry.description = data_local.texts[keys[j]].description
          } else {
            entry.description = data_en.texts[keys[j]]
          }
      }
      glossary_terms[keys[j]] = entry

    }

    window.globals.glossary[lang].glossary_terms = glossary_terms
  } else {
    glossary_terms = window.globals.glossary[lang].glossary_terms
  }
  // data_en = require('../../translations/en/'+'text/lists/secret_fighting_arts_texts')
}

function localized_require(data, data_local, data_en, args) {
  let result = data
  let found

  if (data_local == '') {
    found = false
  } else {
    found = true
  }
  // data_en = {}
  let keys = Object.keys(data)

  // let i = 0
  for (let i=0; i<args.length; i++) {
    for (let j=0; j<keys.length; j++) {
      if (args[i] in data_en.texts[keys[j]]) {
        if ((found)&&(keys[j] in data_local.texts)&&(args[i] in data_local.texts[keys[j]])) {
           result[keys[j]][args[i]] = data_local.texts[keys[j]][args[i]]
        } else {
           result[keys[j]][args[i]] = data_en.texts[keys[j]][args[i]]
        }
      }
    }
  }

  return result
}


const random_draws = {
 '1 random Fighting Art': {},
 '2 random Fighting Arts': {},
 '3 random Fighting Arts': {},
 '5 random Fighting Arts': {},
 '1 random Disorder': {},
 '2 random Disorders': {},
 '3 random Disorders': {},
 '1 random Settlement Event': {},
}

module.exports = {
 get_all_options,
 get_representation,
 is_random_draw,
 get_random_draws,
 get_locations_list,
 get_innovations_list,
 getSettlementEventPath,
 clone,
 settlement_locations,
 gear_list,
 innovations,
 get_events_options,
 init_glossary
}

function get_options (data, type, filter=false) {
 let result = []
 let settings = getSettings();
 let name
 for (let key in data) {
   if ((typeof data[key] === 'object')&&('label' in data[key])) {
     name = data[key]['label']
   } else {
     name = key
   }
  if (!filter) {
   result.push({
    class: type,
    name: name,
    value: key,
   })
  } else {
   if (!('expansion' in data[key]) || (settings['expansions'][data[key]['expansion']] == 'All content')){
    if (!('campaign' in data[key]) || (data[key]['campaign'].indexOf(settings['campaign']) > -1)){
     result.push({
      class: type,
      name: name,
      value: key,
     })
    }

   }
  }

  // console.log(key)

 }

 // console.log(result)
 return result
}

function get_all_options () {
 var options = get_options(random_draws, 'random draws')
 options = options.concat(get_options(glossary_terms, 'glossary'))
 options = options.concat(get_options(fighting_arts, 'fighting arts'))
 options = options.concat(get_options(secret_fighting_arts, 'secret fighting arts'))
 options = options.concat(get_options(disorders, 'disorders'))
 options = options.concat(get_options(abilities, 'abilities'))
 options = options.concat(get_options(settlement_events, 'settlement events'))
 options = options.concat(get_options(settlement_locations, 'settlement locations'))
 options = options.concat(get_options(armor_sets, 'armor sets'))
 options = options.concat(get_options(survivor_statuses, 'survivor statuses'))
 options = options.concat(get_options(innovations, 'innovations'))
 options = options.concat(get_options(terrain, 'terrain'))
 options = options.concat(get_options(resources, 'resources'))
 return options.concat(get_options(settlement_events, 'settlement events'))
}

function get_innovations_list() {
 // let settings = JSON.parse(sessionStorage.getItem('settings'))
 let options = get_options(innovations, 'innovations', true)

 return options

}

function get_events_options() {
 let options = [{class: 'settlement events', name: '<Random>', value: 'Random Settlement Event',}]
 return options.concat(get_options(settlement_events, 'settlement events', filter=true))
}

function get_locations_list() {
 let settings = JSON.parse(sessionStorage.getItem('settings'))
 let options = get_options(settlement_locations, 'settlement locations', true)

 return options
}

function get_representation (word) {
 let settings = JSON.parse(sessionStorage.getItem('settings'))

 if (word in glossary_terms) {
  let result = '<b style="font-size:1.3em;">' + glossary_terms[word].label + '</b> <i style="font-size:0.9em;color:#777;">(term)</i> <hr/>' + glossary_terms[word].description

  let terms_with_pics = ['Attack', 'Collision', 'Hunt Phase', 'Settlement Phase', 'Survival', 'Knocked Down (Monster)', 'Knocked Down (Survivor)']

  if (terms_with_pics.includes(word)) {
   result = result + '<br/><br/><img id=reference-image src="'+pathToAssetL('images/reference/terms/' + word + '.jpg')+'"/>'
  }

  // post text 1 width 98%

  if (['Settlement Board', 'Gear Grid', 'Hit Location (Monster)', 'Terrain Cards'].includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:99%;" src="'+pathToAssetL('images/reference/terms/'+word+'.png')+'"/>'
  }

  // post text 2 width 98%

  if (['Movement (Attribute)', 'Endeavors'].includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:99%;" src="'+pathToAssetL('images/reference/terms/'+word+'.png')+'"/>'
   result = result + '<br\>Monster must move as close to straight line to target as possible:'
   result = result + '<br/><img id=reference-image style="width:99%;" src="'+pathToAssetL('images/reference/terms/'+word+' 2.png')+'"/>'
  }

  // post text 1 width 50%

  if (['Hunt Event', 'Persistent Injury', 'Mood', 'Survivor Status Card'].includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:50%;" src="'+pathToAssetL('images/reference/terms/'+word+'.png')+'"/>'
  }

  // post text 1 width 75%

  if (['Wound', 'Vermin Resources', 'Monster Resources', 'Basic Resources', 'Strange Resources', 'Persistent Injury Actions', 'Flow', 'Settlement Event', 'In Range (Monster)', 'Facing', 'Alerts', 'AI Card', 'Hit Location (Survivors)', 'Weapon', 'Armor', 'Item', 'Damage (Condition)', 'Armor Set', 'Puzzle Affinity', 'Affinity (Completed)', 'Injury Level', 'Attribute Modifier Token'].includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:75%;" src="'+pathToAssetL('images/reference/terms/'+word+'.png')+'"/>'
  }

  // post text 2 width 75%

  if (['Knockback X', 'Collision', 'Affinity Bonus', 'Field of View'].includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:75%;" src="'+pathToAssetL('images/reference/terms/'+word+'.png')+'"/>'
   result = result + '<br/><img id=reference-image style="width:75%;" src="'+pathToAssetL('images/reference/terms/'+word+' 2.png')+'"/>'
  }

  // pre-text 15%

  if (['Bleeding Token'].includes(word)) {
   result = '<img id=reference-image style="width:15%;" src="'+pathToAssetL('images/reference/terms/'+word+' 0.png')+'"/>' + result
  }

  // pre-text 25%

  if (['Natural 1', 'Conflict (Rule of Death)', 'Hit Location Dice', 'Lantern 10', 'Overwhelming Darkness', 'Reaction', 'Intimidate Actions','Accuracy (Attribute)', 'Evasion (Attribute)', 'Speed (Attribute)', 'Strength (Attribute)', 'Movement (Attribute)', 'Luck (Player Attribute)'].includes(word)) {
   result = '<img id=reference-image style="width:25%;" src="'+pathToAssetL('images/reference/terms/'+word+' 0.png')+'"/>' + result
  }

  // pre-text 50% no br

  if (['Story Event', 'Settlement Phase', 'Showdown Phase', 'Hunt Phase', 'Collision', 'Duplicate Gear', 'Survival', 'Injury Level'].includes(word)) {
   result = '<img id=reference-image style="width:50%;" src="'+pathToAssetL('images/reference/terms/'+word+' 0.png')+'"/>' + result
  }

  // pre-text 50% with br

  if (['Severe Injury', 'Knockback X', 'Innovation Deck', 'Fist & Tooth', 'Critical Wound'].includes(word)) {
   result = '<img id=reference-image style="width:50%;" src="'+pathToAssetL('images/reference/terms/'+word+' 0.png')+'"/><br/>' + result
  }

  // pre-text 75% with br

  if (['Knocked Down (Survivor)', 'Duration', 'Trap'].includes(word)) {
   result = '<img id=reference-image style="width:75%;" src="'+pathToAssetL('images/reference/terms/'+word+' 0.png')+'"/><br/>' + result
  }

  let weapons = ['Axe', 'Bow', 'Club', 'Dagger', 'Fist & Tooth', 'Grand', 'Katana', 'Katar', 'Scythe', 'Shield', 'Spear', 'Sword', 'Twilight Sword', 'Whip', 'Thrown']

  if (weapons.includes(word)) {
   result = result + '<br/><br/><img id=reference-image style="width:100%;" src="' + pathToAssetL('images/reference/Weapon Masteries/' + word + '.png') + '"/>'
  }

  return result
 } else if (word in resources) {
   let color = ''
   if (word.toLowerCase().includes('strange)')) {
     color = '#9ca814'
   }
   if (word.toLowerCase().includes('(basic)')) {
     color = '#becd70'
   }
   if (['(white lion)', '(sunstalker)', '(screaming antelope)', '(phoenix)', '(flower knight)', '(spidicules)', '(dung beetle knight)', '(gorm)', '(dragon king)'].some(substring=>word.toLowerCase().includes(substring))) {
     color = '#d3a52d'
   }
  let result = '<b style="font-size:1.3em;">' + word + '</b><br/><i style="font-size:0.9em;color:'+color+';">('+resources[word]['type']+')</i> <hr/>' + resources[word]['text']

  return result

 } else if (word in fighting_arts) {
  let header_style = ''
  if (fighting_arts[word]['description'] == '#') {
    return '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Fighting Arts/'+word+'.jpg')+'"/>'
  } else {
    let result = '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Fighting Arts/'+word+'.jpg')+'"/>'
    if (('type' in fighting_arts[word]) && (fighting_arts[word]['type'] == 'dragon trait')) {
     header_style='color:#863a2a;'
    }
    return result+'<b style="font-size:1.3em;'+header_style+'">'+fighting_arts[word]['label']+'</b> <i style="font-size:0.9em;color:#cd4c39;">(fighting art)</i> <hr/><div class="bottom-reference">'+fighting_arts[word]['description']+'</div>'
  }

 } else if (word in secret_fighting_arts) {
  let header_style = ''
  if (secret_fighting_arts[word]['description'] == '#') {
    return '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Fighting Arts/'+word+'.jpg')+'"/>'
  } else {
    let result = '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Fighting Arts/'+word+'.jpg')+'"/>'
    if (('type' in secret_fighting_arts[word]) && (secret_fighting_arts[word]['type'] == 'dragon trait')) {
     header_style='color:#863a2a;'
    }
    return result+'<b style="font-size:1.3em;'+header_style+'">'+secret_fighting_arts[word]['label']+'</b> <i style="font-size:0.9em;color:#ed553d;">(secret fighting art)</i> <hr/><div class="bottom-reference">'+secret_fighting_arts[word]['description']+'</div>'
  }
 } else if (word in disorders) {
   let header_style = ''
   if (disorders[word]['description'] == '#') {
     return '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Disorders/'+word+'.jpg')+'"/>'
   } else {
     let result = '<div style="display:flex;"><div style="width: 15%; height: auto;display:inline;padding-right:2%;"><img id=reference-image src="'+pathToAsset('images/reference/disorder_head.png')+'"/></div>'
     if (('type' in disorders[word]) && (disorders[word]['type'] == 'dragon trait')) {
      header_style='color:#863a2a;'
     }
     return result+'<div style="width:83%;display:fix;vertical-align:middle;"><b style="font-size:1.3em;'+header_style+'">'+disorders[word]['label']+'</b> <i style="font-size:0.9em;color:#625a8d;">(disorder)</i> <hr/><div  class="bottom-reference">'+disorders[word]['description']+'</div></div></div>'
   }
 } else if (word in abilities) {
   let header_style = ''
   if (abilities[word]['description'] == '#') {
     return '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Abilities/'+word+'.jpg')+'"/>'
   } else {
     let result = ''
     if (('type' in abilities[word]) && (abilities[word]['type'] == 'dragon trait')) {
      header_style='color:#863a2a;'
     }
     return result+'<b style="font-size:1.3em;'+header_style+'">'+abilities[word]['label']+'</b> <i style="font-size:0.9em;color:#b7aa37;">(ability)</i> <hr/><div class="bottom-reference">'+abilities[word]['description']+'</div>'
   }
 } else if (word in settlement_events) {
  // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fighting art)</i> <hr/>'+fighting_arts[word]
  return '<img id=reference-image style="width:100%;" src="' + pathToAssetL('images/reference/Settlement Events/' + word + '.jpg') + '"/>'
 } else if (word in settlement_locations) {
  // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fighting art)</i> <hr/>'+fighting_arts[word]
  return '<img id=reference-image style="width:90%;" src="' + pathToAssetL('images/reference/Settlement Locations/' + word + '.jpg') + '"/>'
 } else if (word in armor_sets) {
  let result = '<img id=reference-image style="width:50%;float:left;padding-right:5px;padding-bottom:10px;" src="' + pathToAssetL('images/reference/Armor Sets/' + word + '.jpg') + '"/>'
  return result
 } else if (word in survivor_statuses) {
   if (survivor_statuses[word]['description'] == '#') {
     return '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Survivor Statuses/'+word+'.jpg')+'"/>'
   } else {
     let result = '<img id=reference-image style="width:50%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Survivor Statuses/'+word+'.jpg')+'"/>'
     return result+'<b style="font-size:1.3em;'+header_style+'">'+survivor_statuses[word]['label']+'</b> <i style="font-size:0.9em;color:#ed553d;">(survivor status)</i> <hr/><div class="bottom-reference">'+survivor_statuses[word]['description']+'</div>'
   }
  // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fighting art)</i> <hr/>'+fighting_arts[word]
  return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + pathToAssetL('images/reference/Survivor Statuses/' + word + '.jpg') + '"/>'
 } else if (word in innovations) {
  // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fighting art)</i> <hr/>'+fighting_arts[word]
  return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + pathToAssetL('images/reference/Innovations/' + word + '.jpg') + '"/>'
 } else if (word in terrain) {
  // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fighting art)</i> <hr/>'+fighting_arts[word]
  // return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + pathToAssetL('images/reference/Terrain/' + word + '.jpg') + '"/>'
    let header_style = ''
    if (terrain[word]['description'] == '#') {
      return '<img id=reference-image style="width:60%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Terrain/'+word+'.jpg')+'"/>'
    } else {
      let result = '<img id=reference-image style="width:60%;padding-bottom:0.5em;" src="'+pathToAssetL('images/reference/Terrain/'+word+'.jpg')+'"/>'
      return result+'<div style="width:83%;display:fix;vertical-align:middle;"><b style="font-size:1.3em;'+header_style+'">'+terrain[word]['label']+'</b> <i style="font-size:0.9em;color:#ccc;">(terrain)</i> <hr/><div  class="bottom-reference">'+terrain[word]['description']+'</div></div></div>'
    }
 }
}

function is_random_draw (word) {
 if (word.includes(' random ')) {
  return true
 } else {
  return false
 }
}

function get_random_draws (word, randomize=true, ) {
 let settings = JSON.parse(sessionStorage.getItem('settings'))
 let number = word.substring(0, 1)
 let list = []

 if (word.includes('Fighting')) {
  list = clone(fighting_arts)
 } else if (word.includes('Disorder')) {
  list = clone(disorders)
} else if (word.includes('Event')) {
  list = clone(settlement_events)
  delete list['First Day']
 } else if (word.includes('Location')) {
  list = clone(settlement_locations)
 } else if (word.includes('Innovation')) {
  list = clone(innovations)
 } else {
  return []
 }

 let keys = Object.keys(list)

 keys.forEach(function (key) {
  // console.log(key)
  let remove = false

  if (('expansion' in list[key]) && (settings['expansions'][list[key]['expansion']] == 'Disabled')) {
   remove = true
  } else if ((list[key]['type'] == 'strain') && (settings['strains'][key.toLowerCase()] == 'Locked')) {
   remove = true
  } else if (word.includes('Settlement Event')) {
   // Settlement events are shown only if "All Content" is set for expansion
   if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
    remove = true
   }
  } else if (word.includes('Location')) {
   // Locations are shown only if "All Content" is set for expansion
   if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
    remove = true
   }
   if (('campaign' in list[key]) && !(settings['campaign'] == list[key]['campaign'])) {
    remove = true
   }
  } else if (word.includes('Innovation')) {

   if (('campaign' in list[key]) && !(list[key]['campaign'].includes(settings['campaign']))) {
    remove = true
   }

  }

  if (remove) {
   // console.log('Remove!')
   delete list[key]
  }
 })

 if (randomize == true) {
  return getRandom(Object.keys(list), number)
 } else {
  return Object.keys(list)
 }
}

function getRandom (arr, n) {
 var result = new Array(n)
 var len = arr.length
 var taken = new Array(len)

 if (n > len) {
  throw new RangeError('getRandom: more elements taken than available')
 }

 while (n--) {
  var x = Math.floor(Math.random() * len)
  result[n] = arr[x in taken ? taken[x] : x]
  taken[x] = --len in taken ? taken[len] : len
 }

 return result
}

function removeA (arr) {
 var what; var a = arguments
 var L = a.length
 var ax

 while (L > 1 && arr.length) {
  what = a[--L]

  while ((ax = arr.indexOf(what)) !== -1) {
   arr.splice(ax, 1)
  }
 }

 return arr
}

function getSettlementEventPath () {
 let list = clone(settlement_events)
 delete list['First Day']

 let settings = JSON.parse(sessionStorage.getItem('settings'))

 let keys = Object.keys(list)

 keys.forEach(function (key) {
  // console.log(key)
  let remove = false

  if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
   remove = true
  }

  if (remove) {
   // console.log('Remove!')
   delete list[key]
  }
 })

 return getRandom(Object.keys(list), 1)
}

function clone (obj) {
 if (obj == null || typeof obj !== 'object') {
  return obj
 }

 var copy = obj.constructor()

 for (var attr in obj) {
  if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr]
 }

 return copy
}
