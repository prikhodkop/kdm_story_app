const texts = {
 'Ringtail Vixen': {
  'label':'',
  'condition_text': 'Add at the start of campaign if you want to meet the foxy lady.',
  'button_text': '<b style="color:#fff;">Ringtail Vixen:</b> Hover if you rolled <b style="color:#eee;">1</b>',
  'hover_tooltip': '',
  'whitebox': 'ringtail vixen',
  'width': '10%',
  'targets': ['intimacy', 'intimacy_stars', 'intimacy_sun']
 },
 'Left Overs': {
  'label':'',
  'condition_text': 'Add if you lost 5 settlement.',
  'button_text': '<b style="color:#fff;">Left Overs:</b> At the start of the showdown with the First Story White Lion, set up 1 Survivor Corpse terrain card',
  'width': '20%',
   'targets': ['first story']
 },
 'Those before us': {
  'label':'',
  'condition_text': 'Add if you lost 10 settlements.',
  'button_text': '<b style="color:#fff;">Those before us:</b> When survivors reach the settlement, they find small traces of human life before them. Gain 1 skull basic resource and increase the survival limit by 1',
   'passive': {
     'settlement': [
       '<b>Survival Limit:</b> $1$',
     ],
   },
   'width': '18%',
   'targets': ['returning survivors', 'foundlings', 'the pool and the sun'],
 },
 'Ocular Parasites': {
  'label':'',
  'condition_text': 'Add if you lost 15 settlements.',
  'button_text': '<b style="color:#fff;">Ocular Parasites:</b> This new generation of survivor\' eyes have better adapted to the darkness. All survivors gain +1 permanent accuracy.<br/>However, the First Story White Lion has grown fat from all the survivors it\'s eaten. At the start of the showdown, it gains +1 damage token and -1 movement token.',
  'passive': {
    'all': [
      'All survivors gain +1 accuracy.',
    ],
   },
   'width': '20%',
   'targets': ['first story']
 },
 'Rainy Season': {
  'label':'',
  'condition_text': 'Add if you lost 20 settlements.',
  'button_text': '<b style="color:#fff;">Rainy Season:</b> The weather is extremely temperamental. Add the <b>Acid Storm</b> settlement event to the timeline years <b>3</b>, <b>7</b>, <b>13</b>, <b>19</b>.',
   'passive': {
     'settlement': [
       'Add the <b>Acid Storm</b> settlement event to the timeline years <b>3</b>, <b>7</b>, <b>13</b>, <b>19</b>.',
     ],
   },
   'width': '15%',
   'targets': ['returning survivors', 'foundlings', 'the pool and the sun'],
 },
 'Allison_s Offer': {
  'label':'Allison\'s Offer',
  'condition_text': 'Add when instructed.',
  'button_text': '<b style="color:#fff;">Allison\'s offer:</b> Hover on showdown setup.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['showdown allison the twilight knight']
 },
 'Mysterious Agenda': {
  'label':'',
  'condition_text': 'Add when instructed.',
  'button_text': '<b style="color:#fff;">Mysterious Agenda - News of the Master:</b> Hover when <b>Mysterious Agenda</b>.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['hooded knight']
 },
 'Twilight_s Bane': {
  'label':'Twilight\'s Bane',
  'condition_text': 'Add when instructed.',
  'button_text': '<b style="color:#fff;">Twilight\'s Bane:</b> Hover on showdown setup.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['showdown watcher']
 },
}

module.exports = {
 texts,
}
