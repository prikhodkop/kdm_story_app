const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Acanthus Doctor': {
  'expansion': 'flower knight',
  'label': 'Acanthus Doctor',
  "description": "You may wear up to 3 <b>satchel</b> gear cards. When you <b>depart</b>, if you are not wearing any armor, for each green affinity you have, gain +1 strength token and add 1 armor to all hit locations. Spend {image@images/icons/activation} and a Flower or <b>Fresh Acanthus</b> resource to heal a permanent injury you or an adjacent survivor suffered this showdown.",
 },
 'Ageless Apprentice': {
  'expansion': 'lion knight',
  'label': 'Ageless Apprentice',
  "description": "When you gain Hunt XP, you may decide not to gain it. When you <b>depart</b>, you may rotate up to 3 gear cards in your gear grid. This changes the location of their affinities and arrows. Otherwise, the gear functions normally.",
 },
 'Altered Destiny': {
  'expansion': 'dragon king',
  'label': 'Altered Destiny',
  "description": "If you would gain a negative attribute token, gain a positive attribute token of that type instead.",
 },
 'Beast of Caratosis': {
   'label': 'Beast of Caratosis',
  "description": "You may <b>concentrate</b>. If you do, perform <b>Beast of Caratosis</b> at the start of your next act: Place your survivor adjacent to the monster. Activate a weapon in your grid and attack the monster. For this attack, your attack speed is equal to your red affinities, you hit automatically, and you gain strength equal to double your red affinities. Then, gain +6 Hunt XP.",
 },
 'Beetle Strength': {
  'expansion': 'dung beetle knight',
  'label': 'Beetle Strength',
  "description": "Once per showdown, you may spend {image@images/icons/activation} to shove an adjacent obstacle terrain. If you do, move the terrain directly away from you in a straight line until it encounters a board edge or another obstacle terrain. Any monsters the terrain passes over suffer a wound, and any survivors it <b>collides</b> with suffer <b>knockback 7</b>.<br/><br/>The display of strength is so exhausting it ages you. You are knocked down and gain +1 Hunt XP.",
 },
 'Black Guard Style': {
  'whitebox': 'percival',
  'label': 'Black Guard Style',
  "description": "Swords in your gear grid gain <b>Block 1</b>. When you block a hit with a sword, your next attack that round with a sword gains +2 accuracy, +2 strength, +2 speed. Limit, once per round.<br/><br/>During the settlement phase, you may spend {image@images/icons/endeavors} to train a survivor. They gain the <b>Black Guard Style</b> secret fighting art. You lose it and suffer the <b>broken arm</b> severe injury.",
 },
 'Bone Whisperer': {
   'label': 'Bone Whisperer',
  "description": "When another survivor dies on the showdown board, place a token where they died. If you pass over it, remove the token and eat their skull.<br/><br/> <b>Heal</b> your survivor and <b>roll 1d10 + your hunt XP</b> on the table:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">You feel amazing! Gain +1 permanent movement, speed and evasion.</div><br/><b style=\"color:#cc0;\">4-8</b>: <div style=\"font-size:0.9em;display: inline;\">Gain +1 permanent strength.</div><br/><b style=\"color:#cc0;\">9-18</b>: <div style=\"font-size:0.9em;display: inline;\">Gain a fighting art and + survival.</div><br/><b style=\"color:#cc0;\">19+</b>: <div style=\"font-size:0.9em;display: inline;\">You run away into exile. At the end of the showdown, you are gone forever.</div>",
 },
 'Clarity of Darkness': {
  'expansion': 'slenderman',
  'label': 'Clarity of Darkness',
  "description": "At the start of the showdown, gain the <b>Path of Gloom</b> survivor status card. There is a deadly, otherworldly presence about you. Other survivors cannot voluntarily end their movement adjacent to you.",
 },
 'Courtly Screenwriter': {
  'expansion': 'lion knight',
  'label': 'Courtly Screenwriter',
  "description": "At the start of the showdown, secretly write down on a scrap of paper which survivors will live and who will deal the killing blow. During the aftermath, if your predictions were correct, raise the settlement's Survival Limit by 1.",
 },
 'Death Touch': {
  'expansion': 'spidicules',
  'label': 'Death Touch',
  "description": "Gain +1 accuracy when attacking with Fist & Tooth. When you wound a monster, it gains -1 toughness until the end of your attack. You cannot use this if you are male.",
 },
 'Eternal Will': {
  'expansion': 'manhunter',
  'label': 'Eternal Will',
  "description": "Gain +1 accuracy and +1 strength for each permanent injury you have. You may always <b>depart</b>, even when retired.",
 },
 'Fencing': {
  'expansion': 'flower knight',
  'label': 'Fencing',
  "description": "Ignore <b>Parry</b> when attempting to wound hit locations. (Attempt to wound these locations normally). When a monster attacks you, roll 1d10. On a 6+, ignore 1 hit. Limit, once per round.",
 },
 'Frozen Star': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Frozen Star',
  "description": "Once per round, you may spend 1 survival to freeze a monster's brain. They gain -2 accuracy until the end of the round.<br/><br/>Once per round, you may spend 1 survival to freeze a survivor's brain, killing them instantly. They die.",
 },
 'Grace of Dormenatus': {
   'label': 'Grace of Dormenatus',
  "description": "You may <b>concentrate</b>. If you do, perform <b>Grace of Dormenatus</b> at the start of your next act: All survivors gain armor at all hit locations equal to your green affinities. They may remove up to the same number of tokens. Then, gain +6 Hunt XP. If you still exist, gain the priority target token.",
 },
 'Hellfire': {
  'expansion': 'sunstalker',
  'label': 'Hellfire',
  "description": "You cannot lose or remove this fighting art. Gain +1 strength for each red affinity you have. You cannot be nominated for "+event_img+"<b>Intimacy</b>. You ignore <b>Extreme Heat</b>. At the start of your act, lose 1 survival. At the end of your act, if your survival is 0 or you have any +1 strength tokens, your organs cook themselves and you die.",
 },
 'Immovable Object': {
  'expansion': 'gorm',
  'label': 'Immovable Object',
  "description": "If you are on an unoccupied space, you stand firm in the face of any force. You cannot be knocked down and may ignore <b>knockback</b>. (If you occupy the same space as a monster, impassable terrain tile, or another survivor, you are knocked down and suffer knockback).",
 },
 'King of a Thousand Battles': {
   'label': 'King of a Thousand Battles',
  "description": "Gain +2 accuracy, +2 strength, +2 evasion. You may <b>dodge</b> any number of times in a round. Only 1 survivor may have this Secret Fighting Art.",
 },
 'Kings Step': {
   'label': 'King\'s Step',
  "description": "Whenever you attack, you may discard any number of <b>Battle Pressure</b> hit locations drawn and draw an equal number of new hit locations. Whenever you attack, after drawing hit locations, but before rolling to wound, you may choose one hit location drawn and discard it to draw a new hit location. <b>Traps</b> will cancel these effects.",
 },
 'Legendary Lungs': {
   'label': 'Legendary Lungs',
  "description": "Once per attack, for each successful hit, make an additional attack roll.",
 },
 'Lucernaes Lantern': {
   'label': 'Lucernae\'s Lantern',
  "description": "You may <b>concentrate</b>. If you do, perform <b>Lucernae's Lantern</b> at the start of your next act: Reveal hit locations equal to half your blue affinities (rounded down) one at a time. The monster suffers a critical wound at any locations with critical wounds effects (ignore the effects of trap). Then reshuffle the hit location deck. Gain +6 Hunt XP.",
 },
 'Necromancer': {
  'expansion': 'lion god',
  'label': 'Necromancer',
  "description": "When you <b>depart</b>, gain +1 armor to all hit locations for each gear card in your grid with the symbol keyword.<br/><br/>If you would roll on the <b>Severe Injury</b> table, roll on the <b>Worm Trauma</b> table instead <i>(specified severe injuries remain unchanged)</i>:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">A spray of blood and silver. <b>Dead</b>.</div><br/><b style=\"color:#cc0;\">4-5</b>: <div style=\"font-size:0.9em;display: inline;\">The worm's coil tightens sharply. Gain 2 bleeding tokens and -1 evasion token.</div><br/><b style=\"color:#cc0;\">6-7</b>: <div style=\"font-size:0.9em;display: inline;\">A dizzying blow. Gain 1 bleeding token and 1d5 insanity.</div><br/><b style=\"color:#cc0;\">8</b>: <div style=\"font-size:0.9em;display: inline;\">An inhuman voice screams in your bones. Gain 1 bleeding token and 1d5 insanity.</div><br/><b style=\"color:#cc0;\">9</b>: <div style=\"font-size:0.9em;display: inline;\">The pain is infuriating! Gain 1 bleeding token and +1 strength token.</div><br/><b style=\"color:#cc0;\">10</b>: <div style=\"font-size:0.9em;display: inline;\">Molten metal issues from your mouth. You are knocked down and gain 1 <b>Iron</b> strange resource.</div>",
 },
 'Red Fist': {
   'label': 'Red Fist',
  "description": "At the start of each showdown, each survivor gains +1 strength token. Survivors may spend +1 strength tokens in place of survival.",
 },
 'Scholar of Death': {
   'label': 'Scholar of Death',
  "description": "On <b>Arrival</b>, gain reroll tokens equal to the number of volumes recorded about your quarry. Discard a reroll token to reroll one of your roll results during the showdown. This includes monster roll results when you are the monster controller.",
 },
 'Silk Surgeon': {
  'expansion': 'spidicules',
  'label': 'Silk Surgeon',
  "description": "<b style=\"color:#cc0;\">Rank 1</b>: You may spend {image@images/icons/activation} while adjacent to another survivor to add 2 armor to one of their hit locations.<br/><b style=\"color:#cc0;\">Rank 2</b>: While all armor in your gear grid is silk and all jewelry is amber, gain +2 evasion.<br/><b style=\"color:#cc0;\">Rank 3</b>: During the aftermath, roll 1d10 for each other survivor that died during the showdown. On a 7+, revive them.",
 },
 'Sun Eater': {
  'expansion': 'sunstalker',
  'label': 'Sun Eater',
  "description": "Your body myseriously absorbs light. At the start of the showdown, gain survival up to the settlement's Survival Limit. If you have any +1 strength tokens, you may spend them all to perform the <b>Surge</b> survival action (following all of its normal rules and restrictions).",
 },
 'Suppressed Shadow': {
  'expansion': 'sunstalker',
  'label': 'Suppressed Shadow',
  "description": "You no longer cast a shadow and you never hesitate. Ignore First Strike. On a <b>Perfect hit</b>, your first wound attempt of the attack automatically succeeds and inflicts a critical wound. If you die during the showdown, place a Shade minion in the space you occupied.",
 },
 'Swordsmans Promise': {
   'label': 'Swordsman\'s Promise',
  "description": "At the start of each showdown, gain survival up to the settlement's survival limit if you have a sword in your gear grid.",
 },
 'Synchronised Strike': {
   'label': 'Synchronised Strike',
  "description": "With a flawless coordination, you strike as one.<br/><br/>When you're <b>adjacent</b> to a monster, attack with a melee weapon, and have an <b>Attack Assist</b>, your attack gains +1 Accuracy, +1 Strength. Limit, once per round.<br/><br/><b>Attack Assist</b>: A survivor who also has <b>Synchronised Strike</b> and is in the right spot. They are standing adjacent to the monster, on its opposite side, and parallel to you.",
 },
 'True Blade': {
  'expansion': 'flower knight',
  'label': 'True Blade',
  "description": "All swords in your gear grid gain <b>deadly</b>. Gain +3 luck when attacking with a sword if you have the <b>Ghostly Beauty</b> and <b>Narcissistic</b> disorders.",
 },
 'Zero Prescence': {
   'label': 'Zero Prescence',
  "description": "Gain +1 strength when attacking a monster from its blind spot. Whenever you attack a monster, you are always considered to be in its blind spot.",
 },

 'Cloud Walk': {
  'expansion': 'storm knight',
  "description": "Once per showdown, gain +1{image@images/icons/movement} and immediately spend it to full move in any direction at any time. This movement can be used while <b>Doomed</b>. The survivor may move through impassible terrain and occupied spaces without causing collision.",
 },
 'High Frequency Agility': {
  'expansion': 'storm knight',
  "description": "When you run out of survival, roll 1d10. On 7+, gain +1{image@images/icons/activation} and a +1 speed token at the start of your next act.",
 },
 'Mutual Induction': {
  'expansion': 'storm knight',
  "description": "At the start of your act, if you have 0 survival, roll 1d10. On a 6+, gain a <b>Charge</b> token that may be placed on this card or any gear that uses <b>Charge</b> tokens. When you are <b>knocked down</b>, remove all <b>Charge</b> tokens from this card.<br/><br/>When this card had 3+ <b>Charge</b> tokens, you may remove them all to gain +1 survival and +1 movement token.",
 },

 'Survivorship': {
  'expansion': 'allison ccg',
  "description": "On Arrival, randomly select 1 of your survival actions. For that action, it costs you 1 less survival to perform for the remainder of the showdown.",
 },
 'Drifting Dance': {
  'expansion': 'drifter knight',
  "description": "When you draw a trap card while attacking with a weapon that you have achieved either specialization or mastery with, you may suffer 1d10+3 brain damage to cancel the trap. If you do, shuffle it back into the hit location deck and attempt to wound previously drawn hit locations normally.<br/><br/>Limit, once per showdown.",
 },
}

module.exports = {
 texts,
}
