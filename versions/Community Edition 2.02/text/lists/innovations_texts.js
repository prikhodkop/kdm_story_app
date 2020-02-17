// It is assumed that first innovation tag is its type

const texts = {

 'Cannibalize': {
  // 'label': '',
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      '<b>Survival Limit</b> +$1$',
    ],
    'hunt': [
      'If a survivor dies during the hunt phase, gain +1 Endeavor'
    ],
    'showdown': [
      'If a survivor dies during the showdown phase, gain +1 Endeavor'
    ],
    'all': [
      'Whenever a survivor dies, draw 1 basic resource and add it to the settlement storage. Do not gain a resource if a survivor is lost, ceases to exist, or is exiled.',
    ],
  }
 },
 'Collective Toil': {
  // 'label': '',
  'tags': ['principle', 'society'],
  'passive': {
    'settlement': [
      'The settlement is no longer required to spend Endeavor to <b>Innovate</b>. <i>(all other resources are still required)</i>',
      'Activation costs that require Endeavor are reduced by 1m to a minimum of 1.'
    ],
  }
 },

 'Protect the Young': {
  // 'label': '',
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      'When rolling on the <b class="event">Intimacy</b> story event, roll twice and pick 1 result.',
      '<b>Departing survivors</b> with two or less hunt experience gain +1 reroll token. A survivor may spend this token to reroll single roll result during the hunt or showdown phase. They must keep the new result.'
    ],
  }
 },
}


module.exports = {
 texts,
}
