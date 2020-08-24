const texts = {
 'Absent Seizures': {
  'expansion': 'gorm',
  'label': 'Absent Seizures',
  "description": "The first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art (erase it).",
 },
 'Aichmophobia': {
  'expansion': 'dragon king',
  'label': 'Aichmophobia',
  "description": "You cannot activate or <b>depart</b> with axes, swords, spears, daggers, scythes, or katars in your gear grid.",
 },
 'Anxiety': {
   'label': 'Anxiety',
  "description": "At the start of each showdown, gain the <b>priority target</b> token unless you have <b>stinky</b> gear in your gear grid.",
 },
 'Apathetic': {
   'label': 'Apathetic',
  "description": "You cannot use or gain survival. You cannot gain courage. Cure this disorder if you have 8+ understanding.",
 },
 'Arithmophilia': {
  'expansion': 'dragon king',
  'label': 'Arithmophilia',
  "description": "When you gain this disorder, roll 1d5. Your movement is that number.",
 },
 'Binge Eating': {
   'label': 'Binge Eating',
  "description": "You cannot <b>depart</b> unless you have <b>consumable</b> gear in your gear grid. You must consume if a choice to consume arises."
 },
 'Controlophobia': {
  'expansion': 'spidicules',
  'label': 'Controlophobia',
  "description": "While you are the monster controller, double any damage you suffer.",
 },
 'Coprolalia': {
   'label': 'Coprolalia',
  "description": "All your gear is <b>noisy</b>. You are always a threat unless you are knocked down, even if an effect says otherwise."
 },
 'Delicious': {
  'expansion': 'lion god',
  'label': 'Delicious',
  "description": "You are still considered a threat when you are knocked down (unless you use an effect that says otherwise).",
 },
 'Destined': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Destined',
  "description": "If you do not <b>depart</b>, lose all survival and insanity.",
 },
 'Emotionless': {
  'expansion': 'sunstalker',
  'label': 'Emotionless',
  "description": "You cannot gain +1 strength tokens.",
 },
 'Enfeebled': {
  'expansion': 'lion god',
  'label': 'Enfeebled',
  "description": "It takes one less bleeding token to kill you.",
 },
 'Fear of the Dark': {
   'label': 'Fear of the Dark',
  "description": "You retire. If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again."
 },
 'Flower Addiction': {
  'expansion': 'flower knight',
  'label': 'Flower Addiction',
  "description": "You may only <b>depart</b> to hunt the Flower Knight. After you <b>depart</b>, cure this disorder.",
 },
 'Ghostly Beauty': {
  'expansion': 'flower knight',
  'label': 'Ghostly Beauty',
  "description": "Double all insanity you gain. Double all survival you spend.",
 },
 'Hemophobia': {
   'label': 'Hemophobia',
  "description": "During the showdown, whenever a survivor <i>(including you)</i> gains a bleeding token, you are knocked down."
 },
 'Hoarder': {
   'label': 'Hoarder',
  "description": "Whenever you are a <b>returning survivor</b>, archive 1 resource gained from the showdown and gain +1 courage.",
 },
 'Honorable': {
   'label': 'Honorable',
  "description": "You cannot attack a monster from its blind spot or if it is knocked down.",
 },
 'Hyperactive': {
   'label': 'Hyperactive',
  "description": "During the showdown, you must move at least 1 space every round.",
 },
 'Immortal': {
   'label': 'Immortal',
  "description": "While you are insane, convert all damage dealt to your hit locations to brain damage. You are so busy reveling in your own glory that you cannot spend survival while insane."
 },
 'Indecision': {
   'label': 'Indecision',
  "description": "If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result.",
 },
 'Megalophobia': {
  // 'expansion': 'gorm',
  'label': 'Megalophobia',
  "description": "You may not <b>depart</b> for hunts or showdowns with monsters that occupy more than 4 spaces on the showdown board.",
 },
 'Monster Panic': {
   'label': 'Monster Panic',
  "description": "Whenever you suffer brain damage from an <b>Intimidate</b> action, suffer 1 additional brain damage."
 },
 'Motion Sickness': {
  'expansion': 'dung beetle knight',
  'label': 'Motion Sickness',
  "description": "Whenever you suffer <b>knockback</b>, gain 1 bleeding token.",
 },
 'Narcissistic': {
  'expansion': 'flower knight',
  'label': 'Narcissistic',
  "description": "You may not wear armor at the head location. If you are wearing armor at the head location when you gain this disorder, archive it.",
 },
 'Overprotective': {
  'expansion': 'sunstalker',
  'label': 'Overprotective',
  "description": "When an adjacent survivor is knocked down, you are also knocked down as you rush to their aid.",
 },
 'Performance Anxiety': {
  'expansion': 'lion knight',
  'label': 'Performance Anxiety',
  "description": "You cannot be nominated for <b>Intimacy</b>. Cure this disorder if you have 8+ courage.",
 },
 'Post-Traumatic Stress': {
   'label': 'Post-Traumatic Stress',
  "description": "Next settlement phase, you do not contribute or participate in any endeavors. Skip the next hunt to recover.",
 },
 'Prey': {
   'label': 'Prey',
  "description": "You may not spend survival unless you are insane."
 },
 'Prima Donna': {
  'expansion': 'lion knight',
  'label': 'Prima Donna',
  "description": "Each survivor turn, you must take your act first <i>(roll off each turn if multiple survivors have this disorder)</i>.",
 },
 'Quixotic': {
   'label': 'Quixotic',
  "description": "If you are insane when you <b>depart</b>, gain +1 survival and +1 strength token."
 },
 'Rageholic': {
   'label': 'Rageholic',
  "description": "Whenever you suffer a severe injury, also suffer the <b>frenzy</b> brain trauma."
 },
 'Revenge': {
  'expansion': 'spidicules',
  'label': 'Revenge',
  "description": "When a survivor dies during the showdown, suffer the <b>Frenzy</b> brain trauma.",
 },
 'Secretive': {
   'label': 'Secretive',
  "description": "When you are a <b>returning survivor</b>, you quickly become preoccupied with your own affairs. You must skip the next hunt to deal with them."
 },
 'Seizures': {
   'label': 'Seizures',
  "description": "The first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art <i>(erase it)</i>.",
 },
 'Shallow Lungs': {
  'expansion': 'lion knight',
  'label': 'Shallow Lungs',
  "description": "When you <b>encourage</b> you are knocked down.",
 },
 'Spiral Ganglia': {
  'expansion': 'slenderman',
  'label': 'Spiral Ganglia',
  "description": "At the start of the showdown, gain the <b>Darkness Awareness</b> survivor status card.",
 },
 'Squeamish': {
   'label': 'Squeamish',
   "description": "You cannot <b>depart</b> with any <b>stinky</b> gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival."
 },
 'Stage Fright': {
  'expansion': 'lion knight',
  'label': 'Stage Fright',
  "description": "Whenever you become <b>doomed</b> or gain the <b>priority target</b> token, lose 1 survival.",
 },
 'Stark Raving': {
  'expansion': 'lion god',
  'label': 'Stark Raving',
  "description": "You are always <b>insane</b>, regardless of your insanity.",
 },
 'Sun-Drunk': {
  'expansion': 'sunstalker',
  'label': 'Sun-Drunk',
  "description": "When you have any +1 strength tokens you cannot <b>dash</b>, <b>dodge</b>, or <b>Run Away</b>.",
 },
 'Superstitious': {
  'expansion': 'dragon king',
  'label': 'Superstitious',
  "description": "You cannot activate or <b>depart</b> with <b>other</b> gear in your gear grid.",
 },
 'Tiny Arachnophobia': {
  'expansion': 'spidicules',
  'label': 'Tiny Arachnophobia',
  "description": "You cannot carry any gear with the amber keyword. You cannot gain any resources with the silk keyword.",
 },
 'Traumatized': {
   'label': 'Traumatized',
   "description": "Whenever you end your act adjacent to a monster, you are knocked down.",
 },
 'Tunnel Vision': {
  'expansion': 'lion god',
  'label': 'Tunnel Vision',
  "description": "When you spend {image@images/icons/activation}, you may only activate weapons.",
 },
 'Unlucky': {
  'expansion': 'lion knight',
  'label': 'Unlucky',
  "description": "You cannot critically wound.",
 },
 'Vermin Obsession': {
  'expansion': 'dung beetle knight',
  'label': 'Vermin Obsession',
  "description": "While there is a <b>Bug Patch</b> terrain tile on the showdown board, you are so overwhelmed that you are <b>doomed</b>.",
 },
 'Vestiphobia': {
   'label': 'Vestiphobia',
   "description": "You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorders, archive it as you tear it off your person!"
 },
 'Weak Spot': {
   'label': 'Weak Spot',
   "description": "When you gain this disorder, roll a random hit location and record it. You cannot <b>depart</b> unless you have armor at this hit location."
 },

 'Contact Electrification': {
  'expansion': 'storm knight',
  'label': 'Contact Electrification',
  "description": "Whenever <b>knockback</b> would cause you to collide with another survivor, halt the <b>knockback</b> movement. Both survivors are placed one space to the left or right of the point of collision. They suffer 1 damage to a random location and are <b>knocked down</b> by the electrostatic discharge.",
 },
 'Static Conductor': {
  'expansion': 'storm knight',
  'label': 'Static Conductor',
  "description": "Whenever you suffer damage to the <b>Legs</b> location, you are <b>knocked down</b> and suffer <b>knockback 3</b>.",
 },

 'Impetous': {
  'expansion': 'allison ccg',
  "description": "<i style='color:#aaa;'>Your overconfidence is your weakness.</i><br/><br/>You must always <b>depart</b>, unless you are forced to skip next hunt.<br/>If you <b>retire</b>, you would rather face exile. You are dead.",
 },

 'Enervated System': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Your central nervous system has been torn asunder.</i><br/><br/>On <b>Arrival</b>, add +1 to each hit location.<br/>You cannot gain positive attribute tokens. If you would, suffer 1 damage to a random hit location instead.",
 },
 'Misaligned Chakras': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Your natural balance has been sent off kilter.</i><br/><br/>While you have this disorder, you have -1 evasion and -1 accuracy.<br/>When you roll on an event table, roll twice and keep the lowest result.",
 },
 'Morbid Curiosity': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Your thrist for knowledge is unquenchable.</i><br/><br/>You must investigate if the opportunity to do so arises.<br/>Whenever a random survivor is nominated to roll on a table, you are nominated instead.",
 },
 'Respectful': {
  'expansion': 'drifter knight',
  "description": `<i style='color:#aaa;'>
  You feel a great deal of respect for the beasts you hunt, and would never disgrace them.
  </i><br/><br/>
  You may only attack while in the monster's facing. If you do, gain +1 strength for that attack.`,
 },
 'Toxiphobia': {
  'expansion': 'drifter knight',
  "description": `<i style='color:#aaa;'>
  Is that safe to eat? Are you sure?
  </i><br/><br/>
  Whenever you <b>consume</b>, roll 1d10.<br/>
  On a 1-5, suffer brain damage equal to the roll result. On a 6+, gain insanity equal to the roll result.`,
 },
}

module.exports = {
 texts,
}
