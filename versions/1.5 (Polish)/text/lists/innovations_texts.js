const texts = {
 'Albedo': {
  'label': 'Albedo',
 },
 'Ammonia': {
  'label': 'Amoniak',
  'passive': {
    'departing': [
      'Gain +$1$ survival.'
    ],
  }
 },
 'Aquarobotics': {
  'label': 'Aquarobotics',
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Arena': {
  'label': 'Arena',
 },
 'Bed': {
  'label': 'Łoże',
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Bloodletting': {
  'label': 'Puszczanie krwi',
 },
 'Bloodline': {
  'label': 'Bloodline',
  'passive': {
    'newborn': [
      'Newborn survivors inherit the following form their parents:<br/> -The <b style="color:#863a2a;">Oracle\'s Eye</b>, <b style="color:#863a2a;">Iridescent Hide</b>, or <b style="color:#863a2a;">Pristine</b> ability (choose 1)<br/> - <b>Surname</b><br/>Half of one parent\'s weapon proficiency levels <i>(rounded up)</i>'
    ],
  }
 },
 'Citrinitas': {
  'label': 'Citrinitas',
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Choreia': {
  'label': 'Choreia',
 },
 'Legless Ball': {
  'label': 'Legless Ball',
  'passive': {
    'departing': [
      'Gain +$2$ insanity.'
    ],
  }
 },
 'Silk-refining': {
  'label': 'Silk-refining',
  'passive': {
    'settlement': [
      'Survival Limit +$1$'
    ],
  }
 },
 'Clan of Death': {
  'label': 'Klan śmierci',
  'passive': {
    'newborn': [
      'Gain +$1$ accuracy.',
      'Gain +$1$ strength.',
      'Gain +$1$ evasion.'
    ],
  }
 },
 'Cooking': {
  'label': 'Gotowanie',
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
      'At the start of the Settlement Phase, gain +1 endeavor'
    ],
  }
 },
 'Crimson Candy': {
  'label': 'Crimson Candy',
  'passive': {
    'showdown': [
      ['survival', '<b>Monster Level</b>']
    ],
  }
 },
 'Dark Water Research': {
  'label': 'Dark Water Research',
  'passive': {
    'departing': [
      'Gain +$2$ insanity.'
    ],
  }
 },
 'Destiny': {
  'label': 'Przeznaczenie',
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
  'label': 'Dragon Speech',
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
  'label': 'Bębny',
 },
 'Empire': {
  'label': 'Empire',
  'passive': {
    'newborn': [
      'Gain +$1$ strength.',
      'Newborn survivors are born with the <b style="color:#863a2a;">Pristine</b> ability.'
    ],
  }
 },
 'Face Painting': {
  'label': 'Malowanie twarzy',
 },
 'Family': {
  'label': 'Rodzina',
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
  'label': 'Filleting Table',
  'passive': {
    'settlement': [
      'Once per settlement phase, if the <b>returning survivors</b> are victorious, gain 1 random basic resource.'
    ],
  }
 },
 'Final Fightning Art': {
  'label': 'Ostateczna sztuka walki',
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
  'label': 'Zakazany taniec',
  'passive': {
    'showdown': [
      'When a survivor uses <b>Synchronized Strike</b> secret fighting art reroll missed attack rolls once.',
    ],
  }
 },
 'Guidepost': {
  'label': 'Drogowskaz',
  'passive': {
    'departing': [
      'Gain +$1$ survival.'
    ],
  }
 },
 'Hands of the Sun': {
  'label': 'Hands of the Sun',
  'passive': {
    'actions': [
      '<b class="action">Overcharge</b>: if you have any +1 strength tokens, you may spend 1 survival and remove them all to give your next attack this round <b>devastating 1</b>. Limit once per round.',
    ],
  }
 },
 'Heart Flute': {
  'label': 'Flet z serca',
  'passive': {
    'showdown': [
      'When a survivor uses <b>Synchronized Strike</b> secret fighting art, their attack assist may spend 1 survival to change any monster <b>Reflex</b> to <b>Failure</b> before any wound attempts are made. Limit, once per attack.',
    ],
  }
 },
 'Hovel': {
  'label': 'Chałupa',
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
  'label': 'Wewnętrzna latarnia',
  'passive': {
    'actions': [
      '<b class="action">Surge</b>: Once per round spend 1 survival to gain +1 <b>Action</b> and use it immediately.',
    ],
  }
 },
 'Language': {
  'label': 'Mova',
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
  'label': 'Latarniany piec',
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
  'label': 'Momento Mori',
 },
 'Nightmare Training': {
  'label': 'Koszmarny trening',
 },
 'Nigredo': {
  'label': 'Nigredo',
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Paint': {
  'label': 'Farba',
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
  'label': 'Partnerstwo',
 },
 'Petal Spiral': {
  'label': 'Petal Spiral',
  'passive': {
    'departing': [
      'Regardless of their Hunt XP, survivors may select Sword for their Weapon Proficiency.'
    ],
  }
 },
 'Pictograph': {
  'label': 'Piktogram',
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
  'label': 'Garncarstwo',
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Radiating Orb': {
  'label': 'Radiating Orb',
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
  'label': 'Archiwum',
 },
 'Round Stone Training': {
  'label': 'Round Stone Training',
 },
 'Rubedo': {
  'label': 'Rubedo',
 },
 'Sacrifice': {
  'label': 'Ofiara',
 },
 'Saga': {
  'label': 'Saga',
  'passive': {
    'newborn': [
      'Gain +$2$ courage.',
      'Gain +$2$ understanding.',
      'Gain +$2$ hunt XP.'
    ]
  }
 },
 'Sauna Shrine': {
  'label': 'Sauna Shrine',
  'passive': {
    'departing': [
      'When survivors <b>depart</b> for a Nemesis Encounter or Special Showdown, they gain +10 survival.'
    ],
  }
 },
 'Scarification': {
  'label': 'Skaryfikacja',
 },
 'Scrap Smelting': {
  'label': 'Przetapianie złomu',
 },
 'Sculpture': {
  'label': 'Rzeźba',
 },

 'Settlement Watch': {
  'label': 'Settlement Watch',
  'passive': {
    'departing': [
      'When survivors <b>depart</b> for a Nemesis Encounter or Special Showdown, they gain +2 survival.'
    ],
  }
 },
 'Shadow Dancing': {
  'label': 'Shadow Dancing',
 },
 'Shrine': {
  'label': 'Kapliczka łowów',
 },


 'Song of the Brave': {
  'label': 'Pieśni o bohaterach',
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
  'label': 'Stoic Statue',
 },
 'Black Mask': {
  'label': 'Black Mask',
 },
 'White Mask': {
  'label': 'White Mask',
 },
 'Storytelling': {
  'label': 'Opowieści',
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
    ],
  }
 },
 'Subterranean Agriculture': {
  'label': 'Subterranean Agriculture',
 },
 'Sun Language': {
  'label': 'Sun Language',
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
  'label': 'Sympozjum',
  'passive': {
    'settlement': [
      'Survival Limit +$1$',
      'When a survivor innovates, draw an additional 2 innovation Cards to choose from.',
    ],
  }
 },
 'The Knowedge Worm': {
  'label': 'The Knowedge Worm',
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
  'label': 'Najlepsza broń',
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
  'label': 'Umbilical Bank',
  'passive': {
    'newborn': [
      'When a new survivor is born, you may add 1 <b>Life String</b> strange resource to storage.',
    ],
  }
 },
 'War Room': {
  'label': 'War Room',
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
  'label': 'Akceptacja ciemności',
  'passive': {
    'all': [
      'Add +2 to all <b>Brain Trauma</b> rolls.',
    ],
  }
 },
 'Barbaric': {
  'label': 'Barbarzyństwo',
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
  'label': 'Kanibalizm',
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
  'label': 'Praca zbiorowa',
  'passive': {
    'settlement': [
      'At the start of the settlement phase, gain +1 <b>Endeavor</b> for every 10 population.',
    ],
  }
 },
 'Graves': {
  'label': 'Groby',
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
  'label': 'Troska o dzieci',
  'passive': {
    'settlement': [
      'When rolling on the <b class="event">Intimacy</b> story event, roll twice and pick 1 result.',
    ],
  }
 },
 'Romantic': {
  'label': 'Romantyzm',
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
  'label': 'Przetrwanie najsilniejszych',
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
 texts,
}
