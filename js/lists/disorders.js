const disorders = {
 'Absent Seizures': {
  'expansion': 'gorm',
  "description": "The first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art (erase it).",
 },
 'Aichmophobia': {
  'expansion': 'dragon king',
  "description": "You cannot activate or <b>depart</b> with axes, swords, spears, daggers, scythes, or katars in your gear grid.",
 },
 'Anxiety': {
  "description": "At the start of each showdown, gain the <b>priority target</b> token unless you have <b>stinky</b> gear in your gear grid.",
 },
 'Apathetic': {
  "description": "You cannot use or gain survival. You cannot gain courage. Cure this disorder if you have 8+ understanding.",
 },
 'Arithmophilia': {
  'expansion': 'dragon king',
  "description": "When you gain this disorder, roll 1d5. Your movement is that number.",
 },
 'Binge Eating': {
  "description": "You cannot <b>depart</b> unless you have <b>consumable</b> gear in your gear grid. You must consume if a choice to consume arises."
 },
 'Controlophobia': {
  'expansion': 'spidicules',
  "description": "While you are the monster controller, double any damage you suffer.",
 },
 'Coprolalia': {
  "description": "All your gear is <b>noisy</b>. You are always a threat unless you are knocked down, even if an effect says otherwise."
 },
 'Delicious': {
  'expansion': 'lion god',
  "description": "You are still considered a threat when you are knocked down (unless you use an effect that says otherwise).",
 },
 'Destined': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  "description": "If you do not <b>depart</b>, lose all survival and insanity.",
 },
 'Emotionless': {
  'expansion': 'sunstalker',
  "description": "You cannot gain +1 strength tokens.",
 },
 'Enfeebled': {
  'expansion': 'lion god',
  "description": "It takes one less bleeding token to kill you.",
 },
 'Fear of the Dark': {
  "description": "You retire. If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again."
 },
 'Flower Addiction': {
  'expansion': 'flower knight',
  "description": "You may only <b>depart</b> to hunt the Flower Knight. After you <b>depart</b>, cure this disorder.",
 },
 'Ghostly Beauty': {
  'expansion': 'flower knight',
  "description": "Double all insanity you gain. Double all survival you spend.",
 },
 'Hemophobia': {
  "description": "During the showdown, whenever a survivor <i>(including you)</i> gains a bleeding token, you are knocked down."
 },
 'Hoarder': {
  "description": "Whenever you are a <b>returning survivor</b>, archive 1 resource gained from the showdown and gain +1 courage.",
 },
 'Honorable': {
  "description": "You cannot attack a monster from its blind spot or if it is knocked down.",
 },
 'Hyperactive': {
  "description": "During the showdown, you must move at least 1 space every round.",
 },
 'Immortal': {
  "description": "While you are insane, convert all damage dealt to your hit locations to brain damage. You are so busy reveling in your own glory that you cannot spend survival while insane."
 },
 'Indecision': {
  "description": "If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result.",
 },
 'Megalophobia': {
  'expansion': 'gorm',
  "description": "You may not <b>depart</b> for hunts or showdowns with monsters that occupy more than 4 spaces on the showdown board.",
 },
 'Monster Panic': {
  "description": "Whenever you suffer brain damage from an <b>Intimidate</b> action, suffer 1 additional brain damage."
 },
 'Motion Sickness': {
  'expansion': 'dung beetle knight',
  "description": "Whenever you suffer <b>knockback</b>, gain 1 bleeding token.",
 },
 'Narcissistic': {
  'expansion': 'flower knight',
  "description": "You may not wear armor at the head location. If you are wearing armor at the head location when you gain this disorder, archive it.",
 },
 'Overprotective': {
  'expansion': 'sunstalker',
  "description": "When an adjacent survivor is knocked down, you are also knocked down as you rush to their aid.",
 },
 'Performance Anxiety': {
  'expansion': 'lion knight',
  "description": "You cannot be nominated for <b>Intimacy</b>. Cure this disorder if you have 8+ courage.",
 },
 'Post-Traumatic Stress': {
  "description": "Next settlement phase, you do not contribute or participate in any endeavors. Skip the next hunt to recover.",
 },
 'Prey': {
  "description": "You may not spend survival unless you are insane."
 },
 'Prima Donna': {
  'expansion': 'lion knight',
  "description": "Each survivor turn, you must take your act first <i>(roll off each turn if multiple survivors have this disorder)</i>.",
 },
 'Quixotic': {
  "description": "If you are insane when you <b>depart</b>, gain +1 survival and +1 strength token."
 },
 'Rageholic': {
  "description": "Whenever you suffer a severe injury, also suffer the <b>frenzy</b> brain trauma."
 },
 'Revenge': {
  'expansion': 'spidicules',
  "description": "When a survivor dies during the showdown, suffer the <b>Frenzy</b> brain trauma.",
 },
 'Secretive': {
  "description": "When you are a <b>returning survivor</b>, you quickly become preoccupied with your own affairs. You must skip the next hunt to deal with them."
 },
 'Seizures': {
  "description": "The first time you would suffer a brain trauma each showdown, you are instead knocked down and forget a fighting art <i>(erase it)</i>.",
 },
 'Shallow Lungs': {
  'expansion': 'lion knight',
  "description": "When you <b>encourage</b> you are knocked down.",
 },
 'Spiral Ganglia': {
  'expansion': 'slenderman',
  "description": "At the start of the showdown, gain the <b>Darkness Awareness</b> survivor status card.",
 },
 'Squeamish': {"description": "You cannot <b>depart</b> with any <b>stinky</b> gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival."},
 'Stage Fright': {
  'expansion': 'lion knight',
  "description": "Whenever you become <b>doomed</b> or gain the <b>priority target</b> token, lose 1 survival.",
 },
 'Stark Raving': {
  'expansion': 'lion god',
  "description": "You are always <b>insane</b>, regardless of your insanity.",
 },
 'Sun-Drunk': {
  'expansion': 'sunstalker',
  "description": "When you have any +1 strength tokens you cannot <b>dash</b>, <b>dodge</b>, or <b>Run Away</b>.",
 },
 'Superstitious': {
  'expansion': 'dragon king',
  "description": "You cannot activate or <b>depart</b> with <b>other</b> gear in your gear grid.",
 },
 // 'Sworn Enemy': {},
 'Tiny Arachnophobia': {
  'expansion': 'spidicules',
  "description": "You cannot carry any gear with the amber keyword. You cannot gain any resources with the silk keyword.",
 },
 'Traumatized': {
   "description": "Whenever you end your act adjacent to a monster, you are knocked down.",
 },
 'Tunnel Vision': {
  'expansion': 'lion god',
  "description": "When you spend <b>Activation</b>, you may only activate weapons.",
 },
 'Unlucky': {
  'expansion': 'lion knight',
  "description": "You cannot critically wound.",
 },
 'Vermin Obsession': {
  'expansion': 'dung beetle knight',
  "description": "While there is a <b>Bug Patch</b> terrain tile on the showdown board, you are so overwhelmed that you are <b>doomed</b>.",
 },
 'Vestiphobia': {
   "description": "You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorders, archive it as you tear it off your person!"
 },
 'Weak Spot': {
   "description": "When you gain this disorder, roll a random hit location and record it. You cannot <b>depart</b> unless you have armor at this hit location."
 },
}

module.exports = {
 disorders,
}
