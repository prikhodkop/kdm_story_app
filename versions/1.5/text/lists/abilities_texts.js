const texts = {
 'Acid Palms': {
   'label':'Acid Palms',
   'description': 'Add 1d10 strength to wound attempts when attacking with Fist & Tooth.',
 },
 'Ageless': {
   'label':'Ageless',
   'description': 'You may hunt if you are retired. When you gain Hunt XP, you may decide not to gain it.',
 },
 'Analyse': {
   'label':'Analyse',
   'description': 'At the start of the survivors\' turn. if you are adjacent to the monster. reveal the top Al card. then place it back on top of the deck.',
 },
 'Bitter Frenzy': {
   'label':'Bitter Frenzy',
   'description': 'You may spend survival and use fighting arts, weapon specialization, and weapon mastery while Frenzied.',
 },
 'Burnt Nerves': {
   'label':'Burnt Nerves',
   'description': 'You are immune to bash.',
 },
 'Caratosis': {
   'label':'Caratosis',
   'description': 'For each red affinity you have, 1 of your attack rolls hits automatically each attack.',
 },
 'Crystal Skin': {
   'label':'Crystal Skin',
   'description': 'You cannot place armor in your gear grid. When you depart, gain 3 armor points to all hit locations. Suffer -2 to the result of all severe injury rolls.',
 },
 'Dead Inside': {
   'label':'Dead Inside',
   'description': 'You can not gain <b>survival</b>.',
 },
 'Devoted Union': {
   'label':'Devoted Union',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>During the survivor\'s turn, while you and your partner are within range of the monster, you may perform a <b<combined attack</b>. Limit, once per round.<br/><br/><b style="color:#cc0;">Combined attack</b>: Partners each spend <b>Activation</b> and activate a weapon. They simultaneously make attack rolls, determining hits based on their individual accuracy. Draw hit locations for all hits together. Reolve hit locations one at a time. Partners choose which survivor attempts to wound each hit location <i>(including the trap)</i>. Each partner may not make more wound attempts than the number of their attack rolls.',
 },
 'Dormenatus': {
   'label':'Dormenatus',
   'description': 'When you depart, gain 1 armor point to every hit location for each green affinity you have.',
 },
 'Endless Babble': {
   'label':'Endless Babble',
   'description': 'When you <b>depart</b>, <b>departing survivors</b> gain +1 insanity.<br/><br/>You may not <b>encourage</b>.',
 },
'Heart of the Sword (Storm)': {
  'label': 'Heart of the Sword (Storm)',
  'description':'If you gain weapon proficiency during the Aftermath, gain +3 additional ranks. You cough up a hunk of your own solidified blood and gain +1 Iron strange resource.',
},
 'Enduring Legacy': {
   'label':'Enduring Legacy',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>Your born or adopted children may <b>inherit</b> one positive attribute and one fighting art from among their parents.<br/><br/>During the settlement phase, you may adopt an unnamed survivor that has never departed the settlement. Survivors may only <b>inherit</b> from parents once per lifetime.<br/><br/>When you have <b>3+</b> children, your family is complete, you <b>retire</b> with your partner and stop having children forever.',
 },
 'Explore': {
   'label':'Explore',
   'description': 'When you roll on an investigate table, add +2 to your roll result.',
 },
 'Fated Battle': {
   'label':'Fated Battle',
   'description': 'At the start of a showdown with the picked monster, gain +l speed token.',
 },
 'Homing Instinct': {
   'label':'Homing Instinct',
   'description': 'Add +5 to your rolls on the Run Away story event.',
 },
 'Iridescent Hide': {
   'label':'Iridescent Hide',
   'description': 'Gain +1 armor to all hit locations for each different-colored affinity in your gear grid.',
   'type': 'dragon trait',
 },
 'Iron Will': {
   'label':'Iron Will',
   'description': 'You cannot be knocked down. Reduce all knockback you suffer to knockback 1.',
 },
 'Legendcaller': {
   'label':'Legendcaller',
   'description': 'Once a lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use <b>\"53\"</b> as your result.',
 },
 'Leyline Walker': {
   'label':'Leyline Walker',
   'description': 'While there is no armor or accessory gear in your gear grid, gain +3 evasion.',
 },
 'Legs Locked': {
   'label':'',
   'description':'When you gain the Death Die, you stand. While you have the Death Die, you cannot be knocked down for any reason.',},
 'Life Exchange': {
   'label':'Life Exchange',
   'description': 'In the Aftermath, gain 1 additional Hunt XP. You may not wear other gear. If you trigger the White Secret story event, you cease to exist. When you retire, you cease to exist.',
 },
 'Limb-maker (Sculptor)': {
   'label': 'Limb-maker (Sculptor)',
   'description': 'Once per settlement phase, spend 2 endeavors to carve a prosthetic limb. Remove a survivor\'s dismembered injury and add 1 bone to the settlement\'s storage.',
 },
 'Presage (Witch)': {
   'label': 'Presage (Witch)',
   'description': 'Each time you attack, before drawing hit locations, loudly say a name. You lightly bite the eye in your cheek to see what it sees, if you draw any hit locations with that name, gain +3 insanity and +10 strength when attempting to would them.',
  },
 'Pristine': {
   'label': 'Pristine',
   'description': 'When you suffer <b>dismembered</b> severe injury, ignore it and gain 1 bleeding token instead.',
 },
 'Psychovore (Reaper)': {
   'label': 'Psychovore (Reaper)',
   'description': 'Once per showdown, you may eat an adjacent survivor\'s disorder. If you do, remove the disorder. They gain 1 bleeding token and you gain +1 permanent strength. At the end of the showdown, if you haven\'t eatern a disorder, you die.',
 },
 'Rooted to All (Absolute)': {
   'label': 'Rooted to All (Absolute)',
   'description': 'If you are standing at the start of your act, reveal the top 2 cards of the AI deck and put them back in any order.',
 },
 'Way of the Rust (Rust)': {
   'label': 'Way of the Rust (Rust)',
   'description': 'Your bleeding tokens are also +1 evasion tokens.',
 },
 'Lucerna': {
   'label':'Lucernae',
   'description': 'For every blue affinity you have. your ranged weapons gain this amount of range and your me lee weapons gain this amount of reach.',
 },
 'Mad Oracle': {
   'label':'Mad Oracle',
   'description': 'Once per showdown. as a monster draws an Al, name a card. If the Al card drawn is the named card. gain +1 evasion token.',
 },
 'Marrow Hunger': {
   'label':'Marrow Hunger',
   'description': 'If the <b>Murder</b> or <b>Skull Eater</b> settlement events are drawn, nominate this survivor.',
 },
 'Matchmaker': {
   'label':'Matchmaker',
   'description': 'When you are a returning survivor, once per lantern year you may spend an Endeavor to perform <b>Intimacy</b>.',
 },
 'Metal Maw': {
   'label':'Metal Maw',
   'description': 'Your Fist & Tooth attacks gain Sharp <i>(add 1d10 strength to each wound attempt)</i>.',
 },
 'Nightmare Blood': {
   'label':'Nightmare Blood',
   'description': 'Whenever you gain a bleeding token, add 1 armor to all hit locations.',
 },
 'Nightmare Membrane': {
   'label':'Nightmare Membrane',
   'description': 'You may spend <b>Activation</b> + <b>Movement</b> to exchange any 1 of your tokens for a +1 strength token.',
 },
 'Nightmare Spurs': {
   'label':'Nightmare Spurs',
   'description': 'Once per showdown, you may spend all your survival <i>(at least 1)</i> to lose all your +1 strength tokens and gain that many +1 luck tokens.',
 },
 'Oracles Eye': {
   'label':'Oracle\'s eye',
   'description': 'At the start of the showdown, look through the AI deck then shuffle.',
   'type': 'dragon trait',
 },
 'Partner': {
   'label':'Partner',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>When you depart with your <b>partner</b>, gain +2 survival.<br/><br/>While adjacent to your <b>parter</b>, gain +1 strength.',
 },
 'Peerless': {
   'label':'Peerless',
   'description': 'When you gain insanity, you may gain an equal amount of survival.',
 },
 'Possessed': {
   'label':'Possessed',
   'description': 'The survivor cannot use weapon specialization, weapon mastery, or fighting arts.',
 },
 'Prepared': {
   'label':'Prepared',
   'description': 'When rolling to determine a straggler, add your hunt experience to your roll result.',
 },
 'Rivals Scar': {
   'label':'Rival\'s Scar',
   'description': 'You gain permanent +1 strength and permanent -1 evasion.',
 },
 'Sour Death': {
   'label':'Sour Death',
   'description': 'When you are knocked down. you may encourage yourself. If you do, gain +1 strength token.',
 },
 'Stalwart': {
   'label':'Stalwart',
   'description': 'Ignore knocked down effects of brain trauma, disorders and intimidation actions.',
 },
 'Story of the Forsaker': {
   'label':'Story of the Forsaker',
   'description': 'You cannot be knocked down during a showdown with a nemesis monster.',
 },
 'Story of the Goblin': {
   'label':'Story of the Goblin',
   'description': 'Once per showdown, you may roll 1d10. On a 3+, gain the priority target token and the monster gains +1 damage token.',
 },
 'Story of the Young Hero': {
   'label':'Story of the Young Hero',
   'description': 'At the start of each of your acts, you may choose to gain 1 survival and 2 bleeding tokens.',
 },
 'Super Hair': {
   'label':'Super Hair',
   'description': 'You may spend <b>Activation</b> to freely exchange any tokens with adjacent surivors who have <b>Super Hair</b>.',
 },
 'Sweet Battle': {
   'label':'Sweet Battle',
   'description': 'You may surge without spending survival. If you do, the Activation must be used to activate a weapon.',
 },
 'Thundercaller': {
   'label':'Thundercaller',
   'description': 'Once per lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use <b>100</b> as your result.',
 },
 'Tinker': {
   'label':'Tinker',
   'description': 'When you are a returning survivor, gain + 1 Endeavor.',
 },
 'People of the Skull': {
   // 'label':'Tinker',
   'description': 'When you are named, if you have the word <b>skull</b> or <b>bone</b> in your name, gain a permanent +1 speed, accuracy, strength, evasion or luck.',
 },
 'Twilight Succession': {
   'description': 'If you die during the showdown and you have a Twilight Sword, nominate another survivor on the showdown board to gain the Twilight Sword and this ability.'
 }
}

module.exports = {
 texts,
}
