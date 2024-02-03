const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

const texts = {
    'A Strange Spot': {
        'label':'',
        'whitebox': 'Un lugar extraño',
    },
    'Acid Storm': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> La tormenta impide los Esfuerzos de <b class="music-text">Música</b>.',
                '<b class="event-text">[Event]</b> La tormenta inspira. +2 a los resultados de todos los Esfuerzos de <b class="art-text">Arte</b>.',
            ],
        },
        'disables': ['música'],
        'action': true,
        'num_actions': 2,
        'action_enabler': {
            0: {'innovación': ['Entrenamiento de Pesadilla']},
            1: {'innovación': ['Cocina']},
        },
    },
    'Clinging Mist': {
        'label':'',
    },
    'Cracks in the Ground': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> La tormenta impide los Esfuerzos de <b class="home-text">Hogar</b>.',
                '<b class="event-text">[Event]</b> ¡El vapor mejora la respiración! +1 al resultado de los Esfuerzos de <b>Entrenamiento de Pesadilla</b>.',
            ]
        },
        'disables': ['hogar'],
        'action': true,
        'num_actions': 2,
        'action_enabler': {
            0: {'innovación': ['Santuario']},
            1: {'innovación': ['Escarificación']},
        },
    },
    'Dark Dentist': {
        'label':'',
        'action': true,
    },
    'Dark Seamstress': {
        'label':'',
        'action': true,
        'whitebox': 'Sastre Oscuro',
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
                '<b class="event-text">[Event]</b> Glossolalia impide los Esfuerzos de <b class="science-text">Ciencia</b> y <b class="education-text">Educación</b>.',
                // '<b class="event-text">[Event]</b> La tormenta impide los Esfuerzos de <b class="education-text">Educación</b>.',
            ]
        },
        'disables': ['ciencia', 'educación'],
        'action': true,
        'num_actions': 2,
        'action_enabler': {
            1: {'innovación': ['Pictogramas']},
        },
    },
    'Gorm Climate': {
        'label':'',
        'expansión': 'gorm',
    },
    'Haunted': {
        'label':'',
    },
    'Heat Wave': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> La tormenta impide los Esfuerzos de <b class="science-text">Ciencia</b> y <b class="education-text">Educación</b>.',
                '<b class="event-text">[Event]</b> Si te <b>marchas</b> con equipo pesado en tu cuadrícula, establece tu supervivencia en cero después de aplicar todos los bonos.',
            ]
        },
        'disables': ['ciencia', 'educación'],
        'action': true,
        'num_actions': 2,
        'action_enabler': {
            1: {'innovación': ['Cocina']},
        },
    },
    'Hunt Reenactment': {
        'label':'',
    },
    'Lights in the Sky': {
        'label':'',
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> La imaginación colectiva del asentamiento se enciende. Después de tirar por cualquier esfuerzo, puedes sumar +1 o +2 al resultado.',
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
        'label':'Tormenta de Seda',
        'expansion': 'spidicules',
        'action': true,
        'num_actions': 3,
        'action_enabler': {
            0: {'innovation': ['Legless Ball']},
            2: {'innovation': ['Silk Refining']},
        },
        'passive':{
            'settlement': [
                '<b class="event-text">[Event]</b> Obtén +2'+endeavor_img+' en esta fase de asentamiento que solo se pueden gastar en innovaciones de Spidicules.',
                '<b class="event-text">[Event]</b> Los sobrevivientes no pueden <b>partir</b> este año a menos que tengan al menos 1 espacio vacío en sus grillas de equipo.',
            ]
        },

    },
  'Skull Eater': {
    'label': '',
},
'Slender Blight': {
    'label': '',
    'expansion': 'slenderman',
},
'Story in the Snow': {
    'label': '',
    'whitebox': 'historia en la nieve',
},
'Stranger in the Dark': {
    'label': '',
},
'Sword Hunter': {
    'label': '',
    'whitebox': 'cazador de espadas - evento de asentamiento',
},
'Triathlon of Death': {
    'label': '',
},
'Weird Dream': {
    'label': '',
},

'Wandering Master': {
    'label': '',
    'expansion': 'caballero tormenta',
    'action': true,
},
'Beats of the Hammer': {
    'label': '',
    'expansion': 'caballero tormenta',
    // 'action': true,
},
'Structural Collapse': {
    'label': '',
    'expansion': 'caballero tormenta',
    // 'action': true,
},

'Coming of Age': {
    'label': 'Llegada a la Adultez',
    'expansion': 'allison ccg',
},
'Training Day': {
    'label': 'Día de Entrenamiento',
    'expansion': 'allison ccg',
    'action': true,
    'num_actions': 1,
    'action_enabler': {
        0: { 'innovation': ['Simposio'] },
    },
    'passive': {
        'settlement': [
            '<b class="event-text">[Event]</b> La cacofonía del entrenamiento abruma todos los sonidos de ritmo y evita los esfuerzos de <b class="music-text">Música</b>.',
            '<b class="event-text">[Event]</b> La exhibición de entrenamiento inspira a todos. +1 al resultado de los esfuerzos de <b>Entrenamiento de Pesadillas</b>.',
        ]
    },
},

'Ghostly Carrion': {
    'expansion': 'caballero errante',
}
}

module.exports = {
    texts,
}
