const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
'Acceleration': {
  'label':'',
  'type': 'pulse discovery',
  'description':'Add +1d10 movement to a move action. Before moving, you may roll the <b>Death Die</b> and the result to your movement for one move action this round.',
},
 'Acid Palms': {
   'label':'Acid Palms',
   'description': 'Add 1d10 strength to wound attempts when attacking with Fist & Tooth.',
 },
 'Ageless': {
   'label':'Ageless',
   'description': 'You may hunt if you are retired. When you gain Hunt XP, you may decide not to gain it.',
 },
 'Aggression Overload': {
   'label':'',
   'type': 'pulse discovery',
   'description':'Add an attack roll to an attack. During your attack, after making your attack rolls but before drawing hit locations, you may roll the Death Die as an additional attack roll.',},
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
 'Child of the Sun': {
   'label':'Child of the Sun',
   'description': 'Add +3d10 when you <b>Synchronize</b> during <b>Umbilical Symbiosis</b>.',
 },
 'Crystal Skin': {
   'label':'Crystal Skin',
   'description': 'You cannot place armor in your gear grid. When you depart, gain 3 armor points to all hit locations. Suffer -2 to the result of all severe injury rolls.',
 },
 'Dead Inside': {
   'label':'Dead Inside',
   'type': 'impairment',
   'description': 'You can not gain <b>survival</b>.',
 },
 'Devoted Union': {
   'label':'Devoted Union',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>During the survivor\'s turn, while you and your partner are within range of the monster, you may perform a <b<combined attack</b>. Limit, once per round.<br/><br/><b style="color:#cc0;">Combined attack</b>: Partners each spend {image@images/icons/activation} and activate a weapon. They simultaneously make attack rolls, determining hits based on their individual accuracy. Draw hit locations for all hits together. Reolve hit locations one at a time. Partners choose which survivor attempts to wound each hit location <i>(including the trap)</i>. Each partner may not make more wound attempts than the number of their attack rolls.',
 },
 'Dormenatus': {
   'label':'Dormenatus',
   'description': 'When you depart, gain 1 armor point to every hit location for each green affinity you have.',
 },
 'Endless Babble': {
   'label':'Endless Babble',
   'type': 'impairment',
   'description': 'When you <b>depart</b>, <b>departing survivors</b> gain +1 insanity.<br/><br/>You may not <b>encourage</b>.',
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
 'Foretold Battle': {
   'label':'Foretold Battle',
   'description': 'When you gain this ability, chose a nemesis monster.<br /><br />On <b>Arrival</b> against the chosen monster, gain +1 strength token and +1 reroll token that must be used this showdown.',
 },
 'Frenzied': {
   'label':'Frenzied',
   'type': 'impairment',
   'description': 'You may not spend survival.<br />You may not use fighting arts.<br />You may not use Weapon Specialization or Weapon Mastery.<br />Discard this at the end of the showdown.',
 },
 'Gigaslayer': {
   // 'label':'Frenzied',
   // 'type': 'impairment',
   'description': 'Gain +2 strength and +1 luck when attacking a 3x3 or larger monster.<br /><br />When you participate in <b>Intimacy</b>, newborns with your surname gain <b>Gigaslayer</b> in addition to any other benefits.',
 },
 'Heart of the Storm': {
   // 'label': 'Heart of the Sword (Storm)',
   'type': 'constellation ability',
   'group_name': 'Storm',
   'description':'If you gain weapon proficiency during the Aftermath, gain +3 additional ranks. You cough up a hunk of your own solidified blood and gain +1 Iron strange resource.',
 },
 'Homing Instinct': {
   'label':'Homing Instinct',
   'description': 'Add +5 to your rolls on the '+event_img+'<b>Run Away</b>.',
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
 'Legs Locked': {
   'label':'',
   'type': 'pulse discovery',
   'description':'When you gain the Death Die, you stand. While you have the Death Die, you cannot be knocked down for any reason.',},
 'Leprosy': {
   'label':'Leprosy',
   'type': 'impairment',
   'description': 'Reduce all damage suffered by 1 to a minimum of 1.<br /><br />Suffer -2 to severe injury rolls.',
 },
 'Leyline Walker': {
   'label':'Leyline Walker',
   'description': 'While there is no armor or accessory gear in your gear grid, gain +3 evasion.',
 },
 'Life Exchange': {
   'label':'Life Exchange',
   'description': 'In the Aftermath, gain 1 additional Hunt XP. You may not wear other gear. If you trigger the '+event_img+'<b>White Secret</b>, you cease to exist. When you retire, you cease to exist.',
 },
 'Limb-maker': {
   // 'label': 'Limb-maker (Sculptor)',
   'type': 'constellation ability',
   'group_name': 'Sculptor',
   'description': 'Once per settlement phase, spend {image@images/icons/endeavors}{image@images/icons/endeavors} to carve a prosthetic limb. Remove a survivor\'s dismembered injury and add 1 bone to the settlement\'s storage.',
 },
 'Lucerna': {
   'label':'Lucernae',
   'description': 'For every blue affinity you have. your ranged weapons gain this amount of range and your me lee weapons gain this amount of reach.',
 },
 'Mad Grade': {
   // 'label':'Mad Oracle',
   'description': 'Once per showdown, before rolling dice, you may select a number. If the result of the roll is the named number, gain +1 evasion token.',
 },
 'Mad Oracle': {
   'label':'Mad Oracle',
   'description': 'Once per showdown. as a monster draws an Al, name a card. If the Al card drawn is the named card. gain +1 evasion token.',
 },
 'Marrow Hunger': {
   'label':'Marrow Hunger',
   'type': 'impairment',
   'description': 'If the <b>Murder</b> or <b>Skull Eater</b> settlement events are drawn, nominate this survivor.',
 },
 'Matchmaker': {
   'label':'Matchmaker',
   'description': 'When you are a returning survivor, once per lantern year you may spend an {image@images/icons/endeavors} to perform '+event_img+'<b>Intimacy</b>.',
 },
 'Metabolic Surrender': {
   // 'label':'Metal Maw',
   'type': 'pulse discovery',
   'description': 'Any time during the showdown, you may roll the <b>Death Die</b>. Gain twice that much survival.<br /><br />This round, ignore the negative effects of permanent injuries, impairments, disordes and negative attributes (including tokens). At the end of the round, you die.',
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
   'description': 'You may spend {image@images/icons/activation} + {image@images/icons/movement} to exchange any 1 of your tokens for a +1 strength token.',
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
 'People of the Skull': {
   // 'label':'Tinker',
   'description': 'When you are named, if you have the word <b>skull</b> or <b>bone</b> in your name, gain a permanent +1 speed, accuracy, strength, evasion or luck.',
 },
 'Possessed': {
   'label':'Possessed',
   'type': 'impairment',
   'description': 'The survivor cannot use weapon specialization, weapon mastery, or fighting arts.',
 },
 'Prepared': {
   'label':'Prepared',
   'description': 'When rolling to determine a straggler, add your hunt experience to your roll result.',
 },
 'Presage': {
   // 'label': 'Presage (Witch)',
   'type': 'constellation ability',
   'group_name': 'Witch',
   'description': 'Each time you attack, before drawing hit locations, loudly say a name.<br /><br /><i>You lightly bite the eye in your cheek to see what it sees.</i> If you draw any hit locations with that name, gain +3 insanity and +10 strength when attempting to would them.',
  },
 'Pristine': {
   'label': 'Pristine',
   'type': 'dragon trait',
   'description': 'When you suffer <b>dismembered</b> severe injury, ignore it and gain 1 bleeding token instead.',
 },
 'Psychovore': {
   // 'label': 'Psychovore (Reaper)',
   'type': 'constellation ability',
   'group_name': 'Reaper',
   'description': 'Once per showdown, you may eat an adjacent survivor\'s disorder. If you do, remove the disorder. They gain 1 bleeding token and you gain +1 permanent strength.<br /><br />At the end of the showdown, if you haven\'t eatern a disorder, you die.',
 },
 'Purified': {
   // 'label':'Rival\'s Scar',
   'description': 'Add +1d10 when you <b>Synchronize</b> during Umbilical Symbiosis.',
 },
 'Reflection': {
   // 'label':'Rival\'s Scar',
   'description': 'Your complete affinities and incomplete affinity halves count as all colors.<br /><br />You may <b>dodge</b> at any time and as many times as you like each round.<br /><br />When you attack from a blind spot, add +1d10 to all wound attempts for that attack.',
 },
 'Refraction': {
   // 'label':'Rival\'s Scar',
   'description': 'Your complete affinities and incomplete affinity halves count as all colors.<br /><br />During the showdown, after you perform a survival action, gain +1 survival.',
 },
 'Rivals Scar': {
   'label':'Rival\'s Scar',
   'description': 'You gain permanent +1 strength and permanent -1 evasion.',
 },
 'Rooted to All': {
   // 'label': 'Rooted to All (Absolute)',
   'type': 'constellation ability',
   'group_name': 'Absolute',
   'description': 'If you are standing at the start of your act, reveal the top 2 cards of the AI deck and put them back in any order.',
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
   'description': 'You may spend {image@images/icons/activation} to freely exchange any tokens with adjacent surivors who have <b>Super Hair</b>.',
 },
 'Sweet Battle': {
   'label':'Sweet Battle',
   'description': 'You may surge without spending survival. If you do, the {image@images/icons/activation} must be used to activate a weapon.',
 },
 'Thundercaller': {
   'label':'Thundercaller',
   'description': 'Once per lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use <b>100</b> as your result.',
 },
 'Tinker': {
   'label':'Tinker',
   'description': 'When you are a returning survivor, gain +1{image@images/icons/endeavors}.',
 },
 'Twelve Fingers': {
   // 'label':'Tinker',
   'group_name': 'Gambler',
   'type': 'constellation ability',
   'description': 'You cannot carry two-handed gear.<br /><br /><div style="display:inline;color:#0c0;">On a <b>Perfect hit, your right hand pulses. Gain +5 insanity and +1 luck for that attack.</div><br /><br /><div style="display:inline;color:#c00;">However, for each natural 1 rolled when attempting to hit, your left hand shakes. Suffer 5 brain damage and -1 luck for that attack.</div>',
 },
 'Twilight Succession': {
   'description': 'If you die during the showdown and you have a Twilight Sword, nominate another survivor on the showdown board to gain the Twilight Sword and this ability.'
 },
 'Uninhibited Rage': {
   // 'label':'',
   'type': 'pulse discovery',
   'description':'Add +1d10 strength to a wound attempt. After a wound attempt is rolled you may roll the <b>Death Die</b> and add the result to the strength of your wound attempt.',},
 'Way of the Rust': {
   // 'label': 'Way of the Rust',
   'type': 'constellation ability',
   'group_name': 'Rust',
   'description': 'Your bleeding tokens are also +1 evasion tokens.',
 },

 'Archivist': {
   // 'label': 'Way of the Rust',
   'expansion': 'allison ccg',
   'description': 'If the bearer of the <b>Twilight Sword</b> dies, retires, or reaches Twilight Sword Mastery, nominate another survivor. They gain the <b>Twilight Sword</b> rare gear, the Twilight Sword proficiency, and half the Weapon XP of the previous bearer of the <b>Twilight Sword</b>, rounded up.',
 },

 'Loyal to the Order': {
   // 'label': 'Way of the Rust',
   'expansion': 'allison ccg',
   'description': 'You can only encourage other <b>Apprentices</b>.<br/>During the showdown, if another <b>Apprentice</b> in on the showdown board, you may spend their survival instead of your own.<br/><br/>When you defear a level 3+ monster, you ignore <b>cursed</b> on the <b>Relic Hood</b> rare gear.',
 },
 'Twilight Deserter': {
   'type': 'impairment',
   'expansion': 'allison ccg',
   'description': 'When you gain this impairment, if you do not ignore <b>cursed</b> on the <b>Relic Hood</b>, flip it to the <b>Tattered Relic Hood</b> side.<br/><br/>When the settlement gains the <b>Mumbling Blade</b> innovation</b>, you steal it and flee. Archive <b>Mumbling Blade</b>.<br/>You are exiled and never return.',
 },
}

module.exports = {
 texts,
}
