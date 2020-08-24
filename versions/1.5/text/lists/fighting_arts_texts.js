const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Abyssal Sadist': {
  'expansion': 'manhunter',
  'label': 'Abyssal Sadist',
  "description": "The first time you wound the monster each attack, gain +1 survival and +1 insanity. Ignore the effects of the <b>Fear of the Dark</b> and <b>Prey</b> disorders."
 },
 'Acrobatics': {
  'expansion': 'dragon king',
  'label': 'Acrobatics',
  "description": "When you are adjacent to the monster, you may spend {image@images/icons/movement} to place your survivor on any other space adjacent to the monster.",
 },
 'Ambidextrous': {
   'label': 'Ambidextrous',
  "description": "All melee weapons in your gear grid gain <b>paired</b>. Ambidextrous cannot be used if there are any shields, two-handed, or heavy gear in your gear grid."
 },
 'Backstabber': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Backstabber',
  "description": "On a <b>Perfect hit</b> with a dagger, your first wound attempt in that attack gains <b>Devastating 1</b>.<br/><br/>When you attack a monster with a dagger from its blind spot, if you have <b>Hoarder</b> or <b>Secretive</b> disorder, increase the range of your <b>Perfect hits</b> by 1."
 },
 'Berserker': {
   'label': 'Berserker',
  "description": "Once per showdown, you may spend {image@images/icons/activation} to suffer <b>bash</b> and the <b>frenzy</b> brain trauma."
 },
 'Blotted Out': {
  'expansion': 'slenderman',
  'label': 'Blotted Out',
  "description": "When you suffer a brain trauma, gain a bleeding token.",
 },
 'Burning Ambition': {
  'expansion': 'sunstalker',
  'label': 'Burning Ambition',
  "description": "When you are instructed to <b>Skip the Next Hunt</b> ignore it. The \"Skip Next Hunt\" box on your survivor sheet cannot be filled in.",
 },
 'Burning Focus': {
  'expansion': 'lion god',
  'label': 'Burning Focus',
  "description": "If you have 0 survival at the start of your act, gain 1 survival.",
 },
 'Carapace of Will': {
  'expansion': 'dung beetle knight',
  'label': 'Carapace of Will',
  "description": "At the start of the showdown gain the <b>Steadfast</b> survivor status card. When you are attacked, if you have 2+ steadfast tokens, ignore a hit and remove all your steadfast tokens.",
 },
 'Champions Rite': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Champion\'s Rite',
  "description": "Before making an attack, you may add your understanding to your accuracy attribute for that attack. Limit, once per showdown."
 },
 'Clutch Fighter': {
   'label': 'Clutch Fighter',
  "description": "While you have 3 or more bleeding tokens, gain +1 strength and +1 accuracy.",
 },
 'Combo Master': {
   'label': 'Combo Master',
  "description": "On a <b>Perfect hit</b>, make 1 additional attack roll."
 },
 'Crazed': {
   'label': 'Crazed',
  "description": "On a <b>Perfect hit</b>, gain +1 insanity."
 },
 'Crossarm Block': {
   'label': 'Crossarm Block',
  "description": "Whenever you are hit, after hit locations are rolled, you may change 1 result to the <b>arms</b> hit location."
 },
 'Defender': {
  'expansion': 'sunstalker',
  'label': 'Defender',
  "description": "When a survivor adjacent to you is knocked down, you may spend 1 survival. If you do, they stand and gain +1 survival from your words of encouragement. You cannot use this if you have a <b>broken jaw</b>.",
 },
 'Double Dash': {
   'label': 'Double Dash',
  "description": "During your act, once per round, you may spend {image@images/icons/activation} to gain +1{image@images/icons/movement}."
 },
 'Ethereal Pact': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Ethereal Pact',
  "description": "Add +3 to your brain trauma rolls.<br/><br/>When you suffer the <b>Impossible!</b> brain trauma, the fungus in your head connects to the dreaming. Read "+event_img+"<b>Birth of a Savior</b> and choose a dream. (if you\'ve already reached Age 2, you cannot gain your dream\'s secret fighting art)<br/><br/>If you are a Savior, this Fighting Art has no effect."
 },
 'Extra Sense': {
   'label': 'Extra Sense',
  "description": "You may <b>dodge</b> 1 additional time per round."
 },
 'Fated Blow': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Fated Blow',
  "description": "Once per showdown, you may give your next wound attempt +2 strength and <b>Devastating 1</b>.",
 },
 'Giants Blood': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Giant\'s Blood',
  "description": "You overproduce growth hormones! When you gain this fighting art, gain +1 strength, -1 evasion permanently.<br/><br/>You may <b>consume</b> skulls. If you do, gain the <b>Marrow Hunger</b> impairment.",
 },
 'Harvestman': {
  'expansion': 'spidicules',
  'label': 'Harvestman',
  "description": "Gain +3 movement. Whenever you are knocked down, gain -1 movement token. If you have the <b>iny Arachnophobia</b> disorder, you are too scared of spiders to imitate them and you cannot use this fighting art."
 },
 'Headliner': {
  'expansion': 'lion knight',
  'label': 'Headliner',
  "description": "When you become <b>doomed</b> or gain the <b>priority target</b> token, you may choose to gain +1 survival or +1 strength token.",
 },
 'Heroic': {
  'expansion': 'lion god',
  'label': 'Heroic',
  "description": "Once per showdown, if you are standing adjacent to the monster and have 3+ survival, you may spend all of your survival for one automatic hit that inflicts a critical wound.",
 },
 'Infinite Lives': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Infinite Lives',
  "description": "You can't create new memories.<br/><br/>You cannot gain new fighting arts or disorders. When you would gain one, instead gain a new lifetime! Give yourself a new name and a once per lifetime reroll. (Gain +1 survival for naming. Gain the reroll regardless of principle. Only 1 once per lifetime reroll at a time.)",
 },
 'Last Man Standing': {
   'label': 'Last Man Standing',
  "description": "While you are the only survivor on the showdown board, you may not gain bleeding tokens or be knocked down."
 },
 'Leader': {
   'label': 'Leader',
  "description": "Whenever you <b>encourage</b> a survivor, they gain +1 speed token until the end of the round. Once per hunt phase, you may inspire another survivor. They use your understanding and courage to resolve a hunt or story event. (Example: if you have 3+ courage you can inspire another survivor to walk the path of the brave during <b>Overwhelming Darkness</b>.)"
 },
 'Lure Epilepsy': {
  'expansion': 'gorm',
  'label': 'Lure Epilepsy',
  "description": "Once per showdown, you may spend {image@images/icons/activation} to give yourself a seizure. You suffer a random brain trauma and are knocked down.",
 },
 'Mammoth Hunting': {
  'expansion': 'gorm',
  'label': 'Mammoth Hunting',
  "description": "Gain +1 strength when attacking from adjacent spaces outside the monster's facing and blind spot.",
 },
 'Mighty Strike': {
   'label': 'Mighty Strike',
  "description": "On a <b>Perfect hit</b>, gain +2 strength until the end of the attack."
 },
 'Monster Claw Style': {
   'label': 'Monster Claw Style',
  "description": "Your <b>Fist & Tooth</b> attacks gain +1 accuracy, +1 strength, and <b>savage</b>."
 },
 'Orator of Death': {
   'label': 'Orator of Death',
  "description": "Once per showdown, you may spend {image@images/icons/activation} to have all non-deaf survivors gain +2 insanity. When you die, you <b>encourage</b> all survivors with your last words.",
 },
 'Otherworldly Luck': {
  'expansion': 'flower knight',
  'label': 'Otherworldly Luck',
  "description": "During the Hunt and Settlement phase, whenever you roll on a table, you may add +1 to the roll result. This may not exceed the highest possible result of that table. (This includes Hunt Events, Story Events, Endeavors, Settlement Events, etc.)",
 },
 'Phantom Friend': {
  'expansion': 'slenderman',
  'label': 'Phantom Friend',
  "description": "The first time you gain a resource during a showdown, you may feed it to your phantom friend. If you do, archive the resource and gain +1 evasion token.",
 },
 'Propulsion Drive': {
  'expansion': 'dung beetle knight',
  'label': 'Propulsion Drive',
  "description": "At the start of the showdown gain the <b>Momentum</b> survivor status card. When you attack, if you have 5+ momentum tokens, remove them all and roll 1d10. Gain that amount of luck and strength when attempting to wound the first selected hit location for this attack.",
 },
 'Purpose': {
  'expansion': 'sunstalker',
  'label': 'Purpose',
  "description": "Your comrades make you strong enough to exceed the limits of death itself. During the showdown, if you would gain a lethal number of bleeding tokens while there are any other standing survivors, roll 1d10. On a 6+, you live but are knocked down. You will not bleed to death until you gain another bleeding token.",
 },
 'Rhythm Chaser': {
   'label': 'Rhythm Chaser',
  "description": "On <b>Arrival</b>, gain +1 evasion token. When you are knocked down, if you don't have an instrument in your gear grid, remove all your +1 evasion tokens. Rhythm chaser cannot be used if there is any heavy gear in your grid."
 },
 'Ruthless': {
  'expansion': 'lion god',
  'label': 'Ruthless',
  "description": "Whenever a survivor dies during the showdown, roll 1d10. On a 7+, gain a <b>Skull</b> basic resource.",
 },
 'Seasoned Hunter': {
  'expansion': 'manhunter',
  'label': 'Seasoned Hunter',
  "description": "Whenever a random hunt event result is: 11, 22, 33, 44, 55, 66, 77, 88, 99, or 100, the hunt revealer gains +1 understanding and +1 courage.",
 },
 'Sneak Attack': {
  'expansion': 'sunstalker',
  'label': 'Sneak Attack',
  "description": "When you attack a monster from its blind spot, gain +4 strength for that attack.",
 },
 'Strategist': {
   'label': 'Strategist',
  "description": "During the showdown setup, after placing terrain, you may add a <b>Giant Stone Face</b> or a <b>Toppled Pillar</b> terrain card to the showdown board."
 },
 'Tenacious': {
  'expansion': 'lion knight',
  'label': 'Tenacious',
  "description": "When your wound attempt on a hit location is a failure, you may put that hit location back on top of the hit location deck instead of in the discard pile. Limit, once per round.",
 },
 'Thrill Seeker': {
   'label': 'Thrill Seeker',
  "description": "Whenever you gain survival during the showdown phase, gain 1 additional survival."
 },
 'Timeless Eye': {
   'label': 'Timeless Eye',
  "description": "Your attack roll is a <b>perfect hit</b> on a result of 9 or 10. You cannot use Timeless Eye if you have the <b>blind</b> severe head injury.",
 },
 'Tough': {
   'label': 'Tough',
  "description": "When rolling on a severe injury table, unless you roll a 1, add +1 to the result. (This does not include brain trauma. The result total cannot exceed 10.)"
 },
 'Trailblazer': {
  'expansion': 'manhunter',
  'label': 'Trailblazer',
  "description": "The hunting party may start the hunt 1 space closer to the monster. At the start of the showdown, all survivors gain +1 survival and up to +1 insanity.",
 },
 'Transcended Masochist': {
  'expansion': 'manhunter',
  'label': 'Transcended Masochist',
  "description": "When you gain a bleeding token, gain +1 survival and +1 insanity. Ignore the effects of the <b>Aichmophobia</b> and <b>Apathetic</b> disorders.",
 },
 'Trick Attack': {
  'expansion': 'sunstalker',
  'label': 'Trick Attack',
  "description": "Once per showdown, when you wound a monster from its blind spot, a survivor adjacent to you may gain the <b>priority target</b> token.",
 },
 'Tumble': {
   'label': 'Tumble',
  "description": "When something would <b>collide</b> with you, roll 1d10. On a result of 6+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside of the collision path."
 },
 'Unbreakable': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Unbreakable',
  "description": "Once per lantern year, you may ignore one of your severe injury roll results. If you do, gain a random disorder.",
 },
 'Unconscious Fighter': {
   'label': 'Unconscious Fighter',
  "description": "It takes 7 bleeding tokens to kill you."
 },
 'Unrelenting': {
  'expansion': 'lion god',
  'label': 'Unrelenting',
  "description": "If all of your attack rolls in an attack miss, you may spend 1 survival to re-roll all attack rolls.",
 },
 'Vengeance': {
  'expansion': 'spidicules',
  'label': 'Vengeance',
  "description": "When a survivor dies during the showdown, gain +4 survival and +1 strength token.",
 },
 'Wardrobe Expert': {
  'expansion': 'lion knight',
  'label': 'Wardrobe Expert',
  "description": "When you suffer a severe injury at a hit location, you may archive a gear worn at that location to ignore it and gain +1 survival.",
 },

 'Quick Strike': {
  'expansion': 'allison ccg',
  "description": "During your act, you may spend {image@images/icons/movement}and{image@images/icons/activation} to full move forward in a straight line. If you do, and you moved 5+ spaces with the last 2 spaces of movement adjacent to the monster roll 1d10. On a result 5+, place the survivor in the monster\'s blind spot and the monster suffers 1 wound. Otherwise, gain 2 bleeding tokens.",
 },

 'Graceful Retreat': {
  'expansion': 'drifter knight',
  "description": "Whenever you <b>dash</b>, you gain +1 evasion token until the start of your next act.",
 },
 'Lethal Blood': {
  'expansion': 'drifter knight',
  "description": "It takes one less bleeding token to kill you.<br/><br/>While you are adjacent to the monster, it has <b>-X</b> toughness where <b>X</b> is equal to the number of bleeding tokens you have. ",
 },
 'Man of War': {
   'label': 'Man o\' War',
  'expansion': 'drifter knight',
  "description": "When you attack from the blind spot, on a <b>perfect hit</b>, you may turn the monster to face you.<br/><br/>While you are in the monster's facing, your attacks gain +1 strength.",
 },
 'Veiled Strike': {
  'expansion': 'drifter knight',
  "description": "When you attack with a spear wile you are in a space adjacent to the blind spot, you are considered to be in the blind spot.",
 },
}

module.exports = {
 texts,
}
