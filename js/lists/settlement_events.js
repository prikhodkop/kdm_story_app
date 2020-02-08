const settlement_events = {
 'Acid Storm': {
   'passive':{
     'settlement': [
       '<b class="event-text">[Event]</b> The storm prevents <b class="music-text">Music</b> Endeavors.',
       '<b class="event-text">[Event]</b> The storm inspires. +2 to the results of all <b class="art-text">Art</b> Endeavors.'
     ],
   },
   'disables': ['music'],
   'action': true,
   'num_actions': 2,
   'action_enabler': {
     0: {'innovation': ['Nightmare Training']},
     1: {'innovation': ['Cooking']},
   },
 },
 'Clinging Mist': {},
 'Cracks in the Ground': {
   'passive':{
     'settlement': [
       '<b class="event-text">[Event]</b> The storm prevents <b class="home-text">Home</b> Endeavors.',
       '<b class="event-text">[Event]</b> The vapor improves breathing! +1 to the result of <b>Nightmare Training</b> endeavors.'
     ]
   },
   'disables': ['home'],
   'action': true,
   'num_actions': 2,
   'action_enabler': {
     0: {'innovation': ['Shrine']},
     1: {'innovation': ['Scarification']},
   },
 },
 'Dark Dentist': {
   'action': true,
 },
 'Dark Trader': {
   'action': true,
 },
 'Elder Council': {},
 'First Day': {},
 'Glossolalia': {
   'passive':{
     'settlement': [
       '<b class="event-text">[Event]</b> The storm prevents <b class="science-text">Science</b> and <b class="education-text">Education</b> Endeavors.',
       // '<b class="event-text">[Event]</b> The storm prevents <b class="education-text">Education</b> Endeavors.',
     ]
   },
   'disables': ['science', 'education'],
   'action': true,
   'num_actions': 2,
   'action_enabler': {
     1: {'innovation': ['Pictographs']},
   },
 },
 'Gorm Climate': {
  'expansion': 'gorm',
 },
 'Haunted': {},
 'Heat Wave': {
   'passive':{
     'settlement': [
       '<b class="event-text">[Event]</b> The storm prevents <b class="science-text">Science</b> and <b class="education-text">Education</b> Endeavors.',
       '<b class="event-text">[Event]</b> If you <b>depart</b> with heavy gear in your grid, set your survival to zero after applying all bonuses.',
     ]
   },
   'disables': ['science', 'education'],
   'action': true,
   'num_actions': 2,
   'action_enabler': {
     1: {'innovation': ['Cooking']},
   },
 },
 'Hunt Reenactment': {},
 'Lights in the Sky': {
   'passive':{
     'settlement': [
       '<b class="event-text">[Event]</b> The settlement\'s collective imagination is set aflame. After rolling for any endeavor, you may add +1 or +2 to the result.',
     ]
   },
   'action': true,
   'num_actions': 3,
   'action_enabler': {
     0: {'innovation': ['Graves']},
     1: {'innovation': ['Face Painting']},
     2: {'innovation': ['Inner Lantern']},
   },
 },
 'Murder': {},
 'Nickname': {
   'action': true,
   'action_enabler': {'location': ['Bone Smith']},
 },
 'Open Maw': {},
 'Phantom': {
  'expansion': 'slenderman',
 },
 'Plague': {
   'action': true,
   'action_enabler': {'innovation': ['Ammonia']},
 },
 'Rivalry': {
   'action': true,
 },
 'Season of the Spiderling': {
  'expansion': 'spidicules',
 },
 'Silk Storm': {
  'expansion': 'spidicules',
 },
 'Skull Eater': {},
 'Slender Blight': {
  'expansion': 'slenderman',
 },
 'Stranger in the Dark': {},
 'Triathlon of Death': {},
 'Weird Dream': {},
}

module.exports = {
 settlement_events,
}
