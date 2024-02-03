// It is assumed that first innovation tag is its type
const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const movement_img = imageHTML('images/icons/movement', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const activation_img = imageHTML('images/icons/activation', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Albedo': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Nigredo',
  'tags': ['science', 'gormchymy', 'nigredo'],
  'action': true,
 },
 'Ammonia': {
  'label': '',
  'parent': 'Language',
  'tags': ['science', 'language'],
  'passive': {
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.'
    ],
  }
 },
 'Aquarobotics': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hands of the Sun',
  'tags': ['faith', 'hands of the sun'],
  'campaign': ['Sun'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
 },
 'Arena': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Nightmare Training',
  'campaign': 'Stars',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Bed': {
  'label': '',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
 },
 'Bloodletting': {
  'label': '',
  'parent': 'Ammonia',
  'tags': ['science', 'ammonia'],
  'action': true,
 },
 'Bloodline': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Hovel',
  'campaign': ['Stars'],
  'tags': ['home', 'hovel'],
  'passive': {
    'newborn': [
      'Newborn survivors inherit the following form their parents:<br/> -The <b style="color:#863a2a;">Oracle\'s Eye</b>, <b style="color:#863a2a;">Iridescent Hide</b>, or <b style="color:#863a2a;">Pristine</b> ability (choose 1)<br/> - <b>Surname</b><br/>Half of one parent\'s weapon proficiency levels <i>(rounded up)</i>'
    ],
  }
 },
 'Citrinitas': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Albedo',
  'tags': ['science', 'gormchymy', 'albedo'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
 },
 'Choreia': {
  'label': '',
  'expansion': 'spidicules',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
 },
 'Legless Ball': {
  'label': '',
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'All <b>departing</b> survivors gain +$2$ insanity.'
    ],
  }
 },
 'Silk-refining': {
  'label': '',
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
 },
 'Clan of Death': {
  'label': '',
  'parent': 'Family',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'family'],
  'passive': {
    'newborn': [
      'All <b>newborn</b> survivors gain +$1$ accuracy.',
      'All <b>newborn</b> survivors gain +$1$ strength.',
      'All <b>newborn</b> survivors gain +$1$ evasion.'
    ],
  }
 },
 'Cooking': {
  'label': '',
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
      'At the start of the settlement phase, gain +1'+endeavor_img
    ],
  }
 },
 'Crimson Candy': {
  'label': '',
  'expansion': 'manhunter',
  'tags': ['science'],
  'action': true,
  'passive': {
    'showdown': [
      'At the start of the showdown each survivor gain ★ survival.'
    ],
  }
 },
 'Dark Water Research': {
  'label': '',
  'expansion': 'slenderman',
  'tags': ['science'],
  'action': true,
  'passive': {
    'departing': [
      'All <b>departing</b> survivors gain +$2$ insanity.'
    ],
  }
 },
 'Destiny': {
  'label': '',
  'tags': ['faith'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'actions': [
      '<b class="action">Endure</b>: You may spend 7 survival minus your Luck to ignore a severe injury before you roll a result.',
    ],
  }
 },
 'Dragon Speech': {
  'label': '',
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'actions': [
      '<b class="action">Encourage</b>: Once per round, if standing, spend 1 survival to call out to a non-deaf survivor. They stand if knocked down.',
    ],
  }
 },
 'Drums': {
  'label': '',
  'parent': 'Language',
  'tags': ['music', 'language'],
  'action': true,
 },
 'Empire': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Bloodline',
  'campaign': ['Stars'],
  'tags': ['home', 'bloodline'],
  'passive': {
    'newborn': [
      'All <b>newborn</b> survivors gain +$1$ strength.',
      'Newborn survivors are born with the <b style="color:#863a2a;">Pristine</b> ability.'
    ],
  }
 },
 'Face Painting': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Family': {
  'label': '',
  'parent': 'Hovel',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'hovel'],
  'passive': {
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.'
    ],
    'settlement': [
      'Survivors nominated for '+event_img+'<b class="event">Intimacy</b> may give themselves a surname if they  do not have one.'
    ],
    'newborn': [
      'A newborn survivor inherits the surname of one parent, their weapon type, and half (rounded down) of their weapon proficiency levels.'
    ],
  }
 },
 'Filleting Table': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['science'],
  'action': true,
  'passive': {
    'settlement': [
      'Once per settlement phase, if the <b>returning survivors</b> are victorious, gain 1 random basic resource.'
    ],
  }
 },
 'Final Fightning Art': {
  'label': '',
  'tags': ['education'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'showdown': [
      'Once per showdown, you may select a card from the discard pile or wound stack and place it on top of the AI deck.',
    ],
  }
 },
 'Forbidden Dance': {
  'label': '',
  'parent': 'Drums',
  'tags': ['music', 'drums'],
  'action': true,
  'passive': {
    'showdown': [
      'When a survivor uses <b>Synchronized Strike</b> secret fighting art reroll missed attack rolls once.',
    ],
  }
 },
 'Guidepost': {
  'label': '',
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.'
    ],
  }
 },
 'Hands of the Sun': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['faith'],
  'campaign': ['Sun'],
  'passive': {
    'actions': [
      '<b class="action">Overcharge</b>: if you have any +1 strength tokens, you may spend 1 survival and remove them all to give your next attack this round <b>devastating 1</b>. Limit once per round.',
    ],
  }
 },
 'Heart Flute': {
  'label': '',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
  'passive': {
    'showdown': [
      'When a survivor uses <b>Synchronized Strike</b> secret fighting art, their attack assist may spend 1 survival to change any monster <b>Reflex</b> to <b>Failure</b> before any wound attempts are made. Limit, once per attack.',
    ],
  }
 },
 'Hovel': {
  'label': '',
  'parent': 'Language',
  'tags': ['home', 'language'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.'
    ],
  }
 },
 'Inner Lantern': {
  'label': '',
  'parent': 'Language',
  'tags': ['faith', 'language'],
  'passive': {
    'actions': [
      '<b class="action">Surge</b>: Once per round spend 1 survival to gain +1'+activation_img+' and use it immediately.',
    ],
  }
 },
 'Language': {
  'label': '',
  'campaign': ['Lantern'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'actions': [
      '<b class="action">Encourage</b>: Once per round, if standing, spend 1 survival to call out to a non-deaf survivor. They stand if knocked down.',
    ],
  }
 },
 'Lantern Oven': {
  'label': '',
  'tags': ['science', 'ammonia'],
  'passive': {
    'settlement': [
      'Gain <b>Heat</b>.',
    ],
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.'
    ],
  }
 },
 'Momento Mori': {
  'label': '',
  'parent': 'Pictograph',
  'tags': ['art', 'pictograph'],
  'action': true,
 },
 'Nightmare Training': {
  'label': '',
  'parent': 'Nightmare Training',
  'tags': ['education', 'symposium'],
  'action': true,
 },
 'Nigredo': {
  'label': '',
  'expansion': 'gorm',
  'tags': ['science', 'gormchymy'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
  }
 },
 'Paint': {
  'label': '',
  'parent': 'Language',
  'tags': ['art', 'language'],
  'passive': {
    'actions': [
      '<b class="action">Dash</b>: Once per round, spend 1 survival to gain +1'+movement_img+' and use it immediately.',
    ],
  }
 },
 'Partnership': {
  'label': '',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Petal Spiral': {
  'label': '',
  'expansion': 'flower knight',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
  'passive': {
    'departing': [
      'Regardless of their Hunt XP, survivors may select Sword for their Weapon Proficiency.'
    ],
  }
 },
 'Pictograph': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'passive': {
    'showdown': [
      'At the start of a survivors\'s act they may decide to skip their act and - '+event_img+'<b class="event-trigger" target="run away">Run Away</b>.',
    ],
    'hunt': [
      'After a hunt event is resolved, a survivor may decide it\'s time to go home and - '+event_img+'<b class="event-trigger" target="run away">Run Away</b>.',
    ],
  }
 },
 'Pottery': {
  'label': '',
  'parent': 'Sculpture',
  'tags': ['art', 'sculpture'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
  }
 },
 'Radiating Orb': {
  'label': '',
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['science'],
  'passive': {
    'settlement': [
      'Gain <b>Heat</b>.',
    ],
    'newborn': [
      'All <b>newborn</b> survivors gain +$1$ survival.'
    ],
    'departing': [
      'All <b>departing</b> survivors gain +$1$ survival.',
      '<b>Departing survivors</b> with a constellation gain +1 survival.'
    ],
  }
 },
 'Records': {
  'label': '',
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
 },
 'Round Stone Training': {
  'label': '',
  'expansion': 'dung beetle knight',
  'parent': 'Nightmare Training',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Rubedo': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Citrinitas',
  'tags': ['science', 'gormchymy', 'citrinitas'],
  'action': true,
 },
 'Sacrifice': {
  'label': '',
  'parent': 'Shrine',
  'tags': ['faith', 'shrine'],
  'action': true,
 },
 'Saga': {
  'label': '',
  'parent': 'Song of the Brave',
  'tags': ['music', 'song of the brave'],
  'passive': {
    'newborn': [
      'All <b>newborn</b> survivors gain +$2$ courage.',
      'All <b>newborn</b> survivors gain +$2$ understanding.',
      'All <b>newborn</b> survivors gain +$2$ hunt XP.'
    ]
  }
 },
 'Sauna Shrine': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hands of the Sun',
  'tags': ['faith', 'hands of the sun'],
  'campaign': ['Sun'],
  'action': true,
  'passive': {
    'departing': [
      'When survivors <b>depart</b> for a Nemesis Encounter or Special Showdown, they gain +10 survival.'
    ],
  }
 },
 'Scarification': {
  'label': '',
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Scrap Smelting': {
  'label': '',
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Blacksmith']},
  },
 },
 'Sculpture': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Settlement Watch': {
  'label': '',
  'expansion': 'manhunter',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
  'passive': {
    'departing': [
      'When survivors <b>depart</b> for a Nemesis Encounter or Special Showdown, they gain +2 survival.'
    ],
  }
 },
 'Shadow Dancing': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Shrine': {
  'label': '',
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Song of the Brave': {
  'label': '',
  'parent': 'Drums',
  'tags': ['music', 'drums'],
  'passive': {
    'showdown': [
      'On <b>arrival</b>, each non-deaf survivor may remove 1 negative attribute token.',
    ],
    'hunt': [
      'During the '+event_img+'<b class="event">Overwhelming Darkness</b>, each non-deaf survivor may select the Path of the Brave.',
    ],
  }
 },
 'Stoic Statue': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Black Mask': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'White Mask': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Storytelling': {
  'label': '',
  'parent': 'Symposium',
  'tags': ['education', 'symposium'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
  }
 },
 'Subterranean Agriculture': {
  'label': '',
  'expansion': 'dung beetle knight',
  'tags': ['science'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Wet Resin Crafter']},
  },
 },
 'Sun Language': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['starting'],
  'campaign': ['Sun'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'actions': [
      '<b class="action">Embolden</b>: Once per round, if you have no +1 strength tokens, spend 1 survival to gain a +1 strength token. When you are knocked down, lose all +1 strength tokens.',
    ],
  }
 },
 'Symposium': {
  'label': '',
  'parent': 'Language',
  'tags': ['education', 'language'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
      'When a survivor innovates, draw an additional 2 innovation Cards to choose from.',
    ],
  }
 },
 'The Knowedge Worm': {
  'label': '',
  'expansion': 'lion god',
  'tags': ['other'],
  'passive': {
    'settlement': [
      'At the start of settlement phase add 1 scrap to settlement storage',
    ],
    'departing': [
      'All <b>departing</b> survivors gain +$3$ survival.',
      'All <b>departing</b> survivors gain +$3$ insanity.',
      'If any of <b>departing survivors</b> have 10+ insanity, '+event_img+'<b class="event">Gracious Host</b>',
    ],
  }
 },
 'Ultimate Weapon': {
  'label': '',
  'tags': ['science'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'showdown': [
      'When you defeat a monster, gain 1 monster resource of your choice from its resource deck.',
    ],
  }
 },
 'Umbilical Bank': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['science'],
  'campaign': ['Sun'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'innovation': ['Pottery']},
  },
  'passive': {
    'newborn': [
      'When a new survivor is born, you may add 1 <b>Life String</b> strange resource to storage.',
    ],
  }
 },
 'War Room': {
  'label': '',
  'expansion': 'manhunter',
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'hunt': [
      'If the survivors would move backwards on the hunt board, rolld 1d10. On 4+, they don\'t.',
    ],
  }
 },
 'Accept Darkness': {
  'label': '',
  'tags': ['principle', 'society'],
  'passive': {
    'all': [
      'Add +2 to all <b>Brain Trauma</b> rolls.',
    ],
  }
 },
 'Barbaric': {
  'label': '',
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'newborn': [
      'All <b>newborn</b> survivors gain +$1$ strength.',
    ],
  }
 },
 'Cannibalize': {
  'label': '',
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'all': [
      'Whenever a survivor dies, draw 1 basic resource and add it to the settlement storage. Do not gain a resource if a survivor is lost, ceases to exist, or is exiled.',
    ],
  }
 },
 'Collective Toil': {
  'label': '',
  'tags': ['principle', 'society'],
  'passive': {
    'settlement': [
      'At the start of the settlement phase, gain +1'+endeavor_img+' for every 10 population.',
    ],
  }
 },
 'Graves': {
  'label': '',
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      'When a survivor dies during the settlement phase, gain +1'+endeavor_img+'.',
    ],
    'all': [
      'All new survivors gain +$1$ understanding.',
    ],
    'showdown': [
      'When a survivor dies during the showdown phase, gain +2'+endeavor_img+'.',
    ],
    'hunt': [
      'When a survivor dies during the hunt phase, gain +2'+endeavor_img+'.',
    ],
  }
 },
 'Protect the Young': {
  'label': '',
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      'When rolling on the '+event_img+'<b class="event">Intimacy</b>, roll twice and pick 1 result.',
    ],
  }
 },
 'Romantic': {
  'label': '',
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
    ],
    'all': [
      'When you gain a random fighting art, draw 3 fighting art cards and select 1 to keep.',
    ],
  }
 },
 'Survival of the Fittest': {
  'label': '',
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      '<b>Survival Limit:</b> $1$',
      'When rolling on the '+event_img+'<b class="event">Intimacy</b>, roll twice and pick lowest result.',
    ],
    'newborn': [
      'All <b>newborn</b> survivors gain +$1$ strength.',
      'All <b>newborn</b> survivors gain +$1$ evasion.'
    ],
    'all': [
      'Once per lifetime, a survivor may reroll a single roll result. They must keep this new result.',
    ],
  }
},

// Dirty hack to add always present bonuses to the campaigns (Innovation Name is the same as Campaign name)
'Lantern#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Dodge</b>: Once per round, when a survivor is hit, after rolling hit location dice but before damage, they may spend 1 survival to dodge, canceling one hit. The dodged hit becomes a failed attack roll and does not cause damage. Any additional un-dodged hits resolve normally. Dodge is the only survival action that knocked down survivors can perform.',
    ],
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
},
'Stars#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Dodge</b>: Once per round, when a survivor is hit, after rolling hit location dice but before damage, they may spend 1 survival to dodge, canceling one hit. The dodged hit becomes a failed attack roll and does not cause damage. Any additional un-dodged hits resolve normally. Dodge is the only survival action that knocked down survivors can perform.',
    ],
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
},
'Sun#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Dodge</b>: Once per round, when a survivor is hit, after rolling hit location dice but before damage, they may spend 1 survival to dodge, canceling one hit. The dodged hit becomes a failed attack roll and does not cause damage. Any additional un-dodged hits resolve normally. Dodge is the only survival action that knocked down survivors can perform.',
    ],
    'settlement': [
      '<b>Survival Limit:</b> $1$'
    ],
  }
},
'Heat': {
  'campaign': 'hidden',
  'label': 'Heat'

},
'Oxidation': {
  'campaign': 'hidden',
  'label': 'Oxidation<br/><i style="color:#aa0;">Total cost is shown (including coating and protective gear)</i>'

},
'Perfect Crucible': {
  'campaign': 'hidden',
  'label': 'Perfect Crucible'
},
'Dark Water Research 1': {
  'campaign': 'hidden',
  'label': 'Dark Water Research 1'
},
'Dark Water Research 2': {
  'campaign': 'hidden',
  'label': 'Dark Water Research 2'
},
'Dark Water Research 3': {
  'campaign': 'hidden',
  'label': 'Dark Water Research 3'
},
'Nightmare Corn': {
  'campaign': 'hidden',
  'label': 'Nightmare Corn'
},
'Vampiric Artichoke': {
  'campaign': 'hidden',
  'label': 'Vampiric Artichoke'
},
'Final Lantern': {
  'campaign': 'hidden',
  'label': 'Final Lantern'
},
'Ancestral Katana': {
  'campaign': 'hidden',
  'label': 'Katana Specialization, Weapon Crafter'
},

'Blacksmith': {
  'campaign': 'hidden',
  'label': 'Blacksmith'
},
'Mask Maker': {
  'campaign': 'hidden',
  'label': 'Mask Maker'
},
'Weapon Crafter': {
  'campaign': 'hidden',
  'label': 'Weapon Crafter'
},
'The Perpetrator': {
  'campaign': 'hidden',
  'label': 'Heat, Weapon Crafter'
},

'Green Helm': {
  'campaign': 'hidden',
  'label': 'Old Master on the Settlement\'s Quarry List'
},
'Green Gloves': {
  'campaign': 'hidden',
  'label': 'Scrap Smelting, Albedo'
},
'Griswaldo': {
  'campaign': 'hidden',
  'label': 'Rubedo, survivor with True Blade'
},

'Initiation': {
  'expansion': 'allison ccg',
 'label': '',
 'tags': ['other'],
 'action': true,

 'passive': {
   'settlement': [
     'Once per lanter year, during the <b>Develop</b> step, you may remove 1 consumable resource from settlement storage and place it on the Initiates\' survivor sheets as <b>Supplies</b>',
     'At the end for each settlement phase, roll 1d10. On a result of 1-3 archive 1 resource from the <b>Supplies</b>, otherwise 1 Initiate dies of starvation. If all initiates are dead, remove '+event_img+'<b>Remove of the Order</b> from the timeline.',
   ],
 }
},

'Muttering Blade': {
  'expansion': 'allison ccg',
 'label': '',
 'tags': ['other'],
 'action': true,

 'passive': {
   'all': [
     'In any survivor becomes the bearer of the Twilight Sword, archive <b>Muttering Blade</b> innovation.',
   ],
 }
},

'The Order is Watching': {
 'label': '',
 'expansion': 'allison ccg',
 'action': true,

 'tags': ['other'],
},

'Stone Garden': {
  'expansion': 'drifter knight',
 'label': '',
 'tags': ['faith', 'shrine'],
 'action': true,
 'parent': 'Shrine',
},

'Venom Wine': {
  'expansion': 'drifter knight',
 'label': '',
 'tags': ['art'],
 'action': true,
 'passive': {
   'settlement': [
     '<b>Survival Limit:</b> $1$'
   ],
   'departing': [
     'All <b>departing</b> survivors gain +$3$ insanity.'
   ],
 }
},

}

module.exports = {
 texts,
}
