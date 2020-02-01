const innovations = {
 'Albedo': {
  'expansion': 'gorm',
  'parent': 'Nigredo',
  'tags': ['science', 'gormchymy', 'nigredo'],
  'action': true,
 },
 'Ammonia': {
  'parent': 'Language',
  'tags': ['science', 'language'],
  'passive': {
    'departing': [
      'Gain +$1$ survidval.'
    ],
  }
 },
 'Aquarobotics': {
  'expansion': 'sunstalker',
  'parent': 'Hands of the Sun',
  'tags': ['faith', 'hands of the sun'],
  'campaign': ['Sun'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Arena': {
  'expansion': 'dragon king',
  'parent': 'Nightmare Training',
  'campaign': 'Stars',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Bed': {
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Bloodletting': {
  'parent': 'Ammonia',
  'tags': ['science', 'ammonia'],
  'action': true,
 },
 'Bloodline': {
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
  'expansion': 'gorm',
  'parent': 'Albedo',
  'tags': ['science', 'gormchymy', 'albedo'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Choreia': {
  'expansion': 'spidicules',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
 },
 'Legless Ball': {
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'Gain +$2$ insanity.'
    ],
  }
 },
 'Silk-refining': {
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Clan of Death': {
  'parent': 'Family',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'family'],
  'passive': {
    'newborn': [
      'Gain +$1$ accuracy.',
      'Gain +$1$ strength.',
      'Gain +$1$ evasion.'
    ],
  }
 },
 'Cooking': {
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
      'At the start of the Settlement Phase, gain +1 endeavor'
    ],
  }
 },
 'Crimson Candy': {
  'expansion': 'manhunter',
  'tags': ['science'],
  'action': true,
  'passive': {
    'showdown': [
      ['survival', '<b>Monster Level</b>']
    ],
  }
 },
 'Dark Water Research': {
  'expansion': 'slenderman',
  'tags': ['science'],
  'action': true,
  'passive': {
    'departing': [
      'Gain +$2$ insanity.'
    ],
  }
 },
 'Destiny': {
  'tags': ['faith'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'actions': [
      '<b class="action">Endure</b>: You may spend 7 survival minus your Luck to ignore a severe injury before you roll a result.',
    ],
  }
 },
 'Dragon Speech': {
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'actions': [
      '<b class="action">Encourage</b>: Once per round, if standing, spend 1 survival to call out to a non-deaf survivor. They stand if knocked down.',
    ],
  }
 },
 'Drums': {
  'parent': 'Language',
  'tags': ['music', 'language'],
  'action': true,
 },
 'Empire': {
  'expansion': 'dragon king',
  'parent': 'Bloodline',
  'campaign': ['Stars'],
  'tags': ['home', 'bloodline'],
  'passive': {
    'newborn': [
      'Gain +$1$ strength.',
      'Newborn survivors are born with the <b style="color:#863a2a;">Pristine</b> ability.'
    ],
  }
 },
 'Face Painting': {
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Family': {
  'parent': 'Hovel',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'hovel'],
  'passive': {
    'departing': [
      'Gain +$1$ survival.'
    ],
    'settlement': [
      'Survivors nominated for <b class="event">Intimacy</b> may give themselves a surname if they  do not have one.'
    ],
    'newborn': [
      'A newborn survivor inherits the surname of one parent, their weapon type, and half (rounded down) of their weapon proficiency levels.'
    ],
  }
 },
 'Filleting Table': {
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
  'tags': ['education'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'showdown': [
      'Once per showdown, you may select a card from the discard pile or wound stack and place it on top of the AI deck.',
    ],
  }
 },
 'Forbidden Dance': {
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
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'Gain +$1$ survival.'
    ],
  }
 },
 'Hands of the Sun': {
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
  'parent': 'Language',
  'tags': ['home', 'language'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'departing': [
      'Gain +$1$ survival.'
    ],
  }
 },
 'Inner Lantern': {
  'parent': 'Language',
  'tags': ['faith', 'language'],
  'passive': {
    'actions': [
      '<b class="action">Surge</b>: Once per round spend 1 survival to gain +1 <b>Action</b> and use it immediately.',
    ],
  }
 },
 'Language': {
  'campaign': ['Lantern'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'actions': [
      '<b class="action">Encourage</b>: Once per round, if standing, spend 1 survival to call out to a non-deaf survivor. They stand if knocked down.',
    ],
  }
 },
 'Lantern Oven': {
  // 'parent': 'Lantern Oven',
  // 'campaign': ['Lantern'],
  'tags': ['science', 'ammonia'],
  'passive': {
    'settlement': [
      'Gain <b>Heat</b>.',
    ],
    'departing': [
      'Gain +$1$ survival.'
    ],
  }
 },
 'Momento Mori': {
  'parent': 'Pictograph',
  'tags': ['art', 'pictograph'],
  'action': true,
 },
 'Nightmare Training': {
  'parent': 'Nightmare Training',
  'tags': ['education', 'symposium'],
  'action': true,
 },
 'Nigredo': {
  'expansion': 'gorm',
  'tags': ['science', 'gormchymy'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Paint': {
  'parent': 'Language',
  'tags': ['art', 'language'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'actions': [
      '<b class="action">Dash</b>: Once per round, spend 1 survival to gain +1 <b>Movemement</b> and use it immediately.',
    ],
  }
 },
 'Partnership': {
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Petal Spiral': {
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
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'passive': {
    'showdown': [
      'At the start of a survivors\'s act they may decide to skip their act and - <b class="event-trigger" target="run away">Run Away</b>.',
    ],
    'hunt': [
      'After a hunt event is resolved, a survivor may decide it\'s time to go home and - <b class="event-trigger" target="run away">Run Away</b>.',
    ],
  }
 },
 'Pottery': {
  'parent': 'Sculpture',
  'tags': ['art', 'sculpture'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Radiating Orb': {
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['science'],
  'passive': {
    'settlement': [
      'Gain <b>Heat</b>.',
    ],
    'newborn': [
      'Gain +$1$ survival.'
    ],
    'departing': [
      'Gain +$1$ survival.',
      '<b>Departing survivors</b> with a constellation gain +1 survival.'
    ],
  }
 },
 'Records': {
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
 },
 'Round Stone Training': {
  'expansion': 'dung beetle knight',
  'parent': 'Nightmare Training',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Rubedo': {
  'expansion': 'gorm',
  'parent': 'Citrinitas',
  'tags': ['science', 'gormchymy', 'citrinas'],
  'action': true,
 },
 'Sacrifice': {
  'parent': 'Shrine',
  'tags': ['faith', 'shrine'],
  'action': true,
 },
 'Saga': {
  'parent': 'Song of the Brave',
  'tags': ['music', 'song of the brave'],
  'passive': {
    'newborn': [
      'Gain +$2$ courage.',
      'Gain +$2$ understanding.',
      'Gain +$2$ hunt XP.'
    ]
  }
 },
 'Sauna Shrine': {
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
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Scrap Smelting': {
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Blacksmith']},
  },
 },
 'Scupture': {
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Settlement Watch': {
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
  'expansion': 'sunstalker',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Shrine': {
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Song of the Brave': {
  'parent': 'Drums',
  'tags': ['music', 'drums'],
  'passive': {
    'showdown': [
      'On <b>arrival</b>, each non-deaf survivor may remove 1 negative attribute token.',
    ],
    'hunt': [
      'During the <b class="event">Overwhelming Darkness</b> story event, each non-deaf survivor may select the Path of the Brave.',
    ],
  }
 },
 'Stoic Statue': {
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Black Mask': {
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'White Mask': {
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Storytelling': {
  'parent': 'Symposium',
  'tags': ['education', 'symposium'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Subterranean Agriculture': {
  'expansion': 'dung beetle knight',
  'tags': ['science'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Wet Resin Crafter']},
  },
 },
 'Sun Language': {
  'expansion': 'sunstalker',
  'tags': ['starting'],
  'campaign': ['Sun'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'actions': [
      '<b class="action">Embolden</b>: Once per round, if you have no +1 strength tokens, spend 1 survival to gain a +1 strength token. When you are knocked down, lose all +1 strength tokens.',
    ],
  }
 },
 'Symposium': {
  'parent': 'Language',
  'tags': ['education', 'language'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
      'When a survivor innovates, draw an additional 2 innovation Cards to choose from.',
    ],
  }
 },
 'The Knowedge Worm': {
  'expansion': 'lion god',
  'tags': ['other'],
  'passive': {
    'settlement': [
      'At the start of settlement phase add 1 scrap to settlement storage',
    ],
    'departing': [
      'Gain +$3$ survival.',
      'Gain +$3$ insanity.',
      'If any of <b>departing survivors</b> have 10+ insanity, <b class="event">Gracious Host</b>',
    ],
  }
 },
 'Ultimate Weapon': {
  'tags': ['science'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'showdown': [
      'When you defeat a monster, gain 1 monster resource of your choice from its resource deck.',
    ],
  }
 },
 'Umbilical Bank': {
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
  'expansion': 'manhunter',
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'hunt': [
      'If the survivors would move backwards on the hunt board, rolld 1d10. On 4+, they don\'t.',
    ],
  }
 },
 'Accept Darkness': {
  'tags': ['principle', 'society'],
  'passive': {
    'all': [
      'Add +2 to all <b>Brain Trauma</b> rolls.',
    ],
  }
 },
 'Barbaric': {
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'newborn': [
      'Gain +$1$ strength.',
    ],
  }
 },
 'Cannibalize': {
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'all': [
      'Whenever a survivor dies, draw 1 basic resource and add it to the settlement storage. Do not gain a resource if a survivor is lost, ceases to exist, or is exiled.',
    ],
  }
 },
 'Collective Toil': {
  'tags': ['principle', 'society'],
  'passive': {
    'settlement': [
      'At the start of the settlement phase, gain +1 <b>Endeavor</b> for every 10 population.',
    ],
  }
 },
 'Graves': {
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      'When a survivor dies during the settlement phase, gain +1 <b>Endeavor</b>.',
    ],
    'newborn': [
      'Gain +$1$ understanding.',
    ],
    'showdown': [
      'When a survivor dies during the showdown phase, gain +2 <b>Endeavors</b>.',
    ],
    'hunt': [
      'When a survivor dies during the hunt phase, gain +2 <b>Endeavors</b>.',
    ],
  }
 },
 'Protect the Young': {
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      'When rolling on the <b class="event">Intimacy</b> story event, roll twice and pick 1 result.',
    ],
  }
 },
 'Romantic': {
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'all': [
      'When you gain a random fighting art, draw 3 fighting art cards and select 1 to keep.',
    ],
  }
 },
 'Survival of the Fittest': {
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
    'settlement': [
      'When rolling on the <b class="event">Intimacy</b> story event, roll twice and pick lowest result.',
    ],
    'newborn': [
      'Gain +$1$ strength.',
      'Gain +$1$ evasion.'
    ],
    'all': [
      'Once per lifetime, a survivor may reroll a single roll result. They must keep this new result.',
    ],
  }
 }
}

module.exports = {
 innovations,
}
