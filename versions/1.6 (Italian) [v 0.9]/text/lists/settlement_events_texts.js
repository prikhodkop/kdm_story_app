const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

const texts = {
    'A Strange Spot': {
        'label':'',
        'whitebox': 'a strange spot',
    },
    'Acid Storm': {
        'label':'',
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
    'Clinging Mist': {
        'label':'',
    },
    'Cracks in the Ground': {
        'label':'',
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
        'label':'',
        'action': true,
    },
    'Dark Seamstress': {
        'label':'',
        'action': true,
        'whitebox': 'dark seamstress'
    },
    'Dark Trader': {
        'label':'',
        'action': true,
    },
    'Elder Council': {
        'label':'',
    },
    'First Day': {
        'label':'',
    },
    'Glossolalia': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> Glossolalia prevents <b class="science-text">Science</b> and <b class="education-text">Education</b> Endeavors.',
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
        'label':'',
        'expansion': 'gorm',
    },
    'Haunted': {
        'label':'',
    },
    'Heat Wave': {
        'label':'',
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
    'Hunt Reenactment': {
        'label':'',
    },
    'Lights in the Sky': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> The settlement\'s collective imagination is set aflame. After rolling for any endeavor, you may add +1 or +2 to the result.',
            ]
        },

    },
    'Murder': {
        'label':'',
    },
    'Nickname': {
        'label':'',
        'action': true,
        'action_enabler': {'location': ['Bone Smith']},
    },
    'Open Maw': {
        'label':'',
    },
    'Phantom': {
        'label':'',
        'expansion': 'slenderman',
    },
    'Plague': {
        'label':'',
        'action': true,
        'action_enabler': {'innovation': ['Ammonia']},
    },
    'Rivalry': {
        'label':'',
        'action': true,
    },
    'Season of the Spiderling': {
        'label':'',
        'expansion': 'spidicules',
    },
    'Silk Storm': {
        'label':'Silk Storm',
        'expansion': 'spidicules',
        'action': true,
        'num_actions': 3,
        'action_enabler': {
            0: {'innovation': ['Legless Ball']},
            2: {'innovation': ['Silk Refining']},
        },
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> Gain +2'+endeavor_img+' this settlement phase that could only be spent on Spidicules innovations.',
                '<b class="event-text">[Event]</b> Survivors cannot <b>depart</b> this year unless they have at least 1 empty space in their gear grids.',
            ]
        },

    },
    'Skull Eater': {
        'label':'',
    },
    'Slender Blight': {
        'label':'',
        'expansion': 'slenderman',
    },
    'Story in the Snow': {
        'label':'',
        'whitebox': 'story in the snow',
    },
    'Stranger in the Dark': {
        'label':'',
    },
    'Sword Hunter': {
        'label':'',
        'whitebox': 'sword hunter - settlement event',
    },
    'Triathlon of Death': {
        'label':'',
    },
    'Weird Dream': {
        'label':'',
    },

    'Wandering Master': {
        'label':'',
        'expansion': 'storm knight',
        'action': true,
    },
    'Beats of the Hammer': {
        'label':'',
        'expansion': 'storm knight',
        // 'action': true,
    },
    'Structural Collapse': {
        'label':'',
        'expansion': 'storm knight',
        // 'action': true,
    },

    'Coming of Age': {
        'label':'Coming of Age',
        'expansion': 'allison ccg',
    },
    'Training Day': {
        'label':'Training Day',
        'expansion': 'allison ccg',
        'action': true,
        'num_actions': 1,
        'action_enabler': {
            0: {'innovation': ['Symposium']},
        },
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> The cacophony of training overwhelms all sounds of rhythm and prevents <b class="music-text">Music</b> endeavors.',
                '<b class="event-text">[Event]</b> The training display inspires all. +1 to the result of <b>Nightmare Training</b> endeavors.',
            ]
        },
    },

    'Ghostly Carrion': {
        'expansion': 'drifter knight',
    }
}

module.exports = {
    texts,
}
