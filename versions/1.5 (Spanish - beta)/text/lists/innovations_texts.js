// It is assumed that first innovation tag is its type
const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const movement_img = imageHTML('images/icons/movement', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const activation_img = imageHTML('images/icons/activation', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Albedo': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Nigredo',
  'tags': ['science', 'gormchymy', 'nigredo'],
  'action': true,
 },
 'Ammonia': {
  'label': '',
  'parent': 'Language',
  'tags': ['science', 'language'],
  'passive': {
    'departing': [
      'Todos los sobrevivientes <b>que parten</b> ganan +$1$ supervivencia.'
    ],
  }
 },
 'Aquarobotics': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hands of the Sun',
  'tags': ['faith', 'hands of the sun'],
  'campaign': ['Sun'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
 },
 'Arena': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Nightmare Training',
  'campaign': 'Stars',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Bed': {
  'label': '',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
 },
 'Bloodletting': {
  'label': '',
  'parent': 'Ammonia',
  'tags': ['science', 'ammonia'],
  'action': true,
 },
 'Bloodline': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Hovel',
  'campaign': ['Stars'],
  'tags': ['home', 'hovel'],
  'passive': {
    'newborn': [
      'Los sobrevivientes recién nacidos heredan lo siguiente de sus padres:<br/> - La habilidad <b style="color:#863a2a;">Ojo del Oráculo</b>, <b style="color:#863a2a;">Piel Iridiscente</b> o <b style="color:#863a2a;">Pristina</b> (elige 1)<br/> - <b>Apellido</b><br/> La mitad de los niveles de destreza con armas de uno de los padres <i>(redondeado hacia arriba)</i>'
    ],
  }
 },
 'Citrinitas': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Albedo',
  'tags': ['science', 'gormchymy', 'albedo'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
 },
 'Choreia': {
  'label': '',
  'expansion': 'spidicules',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
 },
 'Legless Ball': {
  'label': '',
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$2$ cordura.'
    ],
  }
 },
 'Silk-refining': {
  'label': '',
  'expansion': 'spidicules',
  'tags': ['other'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
 },
 'Clan of Death': {
  'label': '',
  'parent': 'Family',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'family'],
  'passive': {
    'newborn': [      
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ precisión.',
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ fuerza.',
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ evasión.'
    ],
  }
 },
 'Cooking': {
  'label': '',
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
      'Al comienzo de la fase de asentamiento, obtén +1' + endeavor_img
    ],
  }
 },
 'Crimson Candy': {
  'label': '',
  'expansion': 'manhunter',
  'tags': ['science'],
  'action': true,
  'passive': {
    'showdown': [      
'Al comienzo del enfrentamiento, cada sobreviviente obtiene ★ supervivencia.'
    ],
  }
 },
 'Dark Water Research': {
  'label': '',
  'expansion': 'slenderman',
  'tags': ['science'],
  'action': true,
  'passive': {
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> ganan +$2$ cordura.'
    ],
  }
 },
 'Destiny': {
  'label': '',
  'tags': ['faith'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'actions': [
      '<b class="action">Resistir</b>: Puedes gastar 7 supervivencias menos tu Suerte para ignorar una lesión grave antes de tirar un resultado.'
    ],
  }
 },
 'Dragon Speech': {
  'label': '',
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'actions': [
      '<b class="action">Animar</b>: Una vez por ronda, si estás de pie, gasta 1 supervivencia para llamar a un sobreviviente que no esté sordo. Se levantan si están derribados.'
    ],
  }
 },
 'Drums': {
  'label': '',
  'parent': 'Language',
  'tags': ['music', 'language'],
  'action': true,
 },
 'Empire': {
  'label': '',
  'expansion': 'dragon king',
  'parent': 'Bloodline',
  'campaign': ['Stars'],
  'tags': ['home', 'bloodline'],
  'passive': {
    'newborn': [
     'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ fuerza.',
'Los sobrevivientes recién nacidos nacen con la habilidad <b style="color:#863a2a;">Pristina</b>.'
    ],
  }
 },
 'Face Painting': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Family': {
  'label': '',
  'parent': 'Hovel',
  'campaign': ['Lantern', 'Sun'],
  'tags': ['home', 'hovel'],
  'passive': {
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$1$ supervivencia.'
    ],
    'settlement': [      
'Los sobrevivientes nominados para '+event_img+'<b class="event">Intimidad</b> pueden darse un apellido si no tienen uno.'
    ],
    'newborn': [
      'Un sobreviviente recién nacido hereda el apellido de uno de sus padres, su tipo de arma y la mitad (redondeada hacia abajo) de sus niveles de destreza con el arma.'
    ],
  }
 },
 'Filleting Table': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['science'],
  'action': true,
  'passive': {
    'settlement': [
      'Una vez por fase de asentamiento, si los <b>sobrevivientes que regresan</b> son victoriosos, obtén 1 recurso básico al azar.'
    ],
  }
 },
 'Final Fightning Art': {
  'label': '',
  'tags': ['education'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'showdown': [
      'Una vez por enfrentamiento, puedes seleccionar una carta de la pila de descartes o de la pila de heridas y colocarla en la parte superior de la baraja de la IA.'
    ],
  }
 },
 'Forbidden Dance': {
  'label': '',
  'parent': 'Drums',
  'tags': ['music', 'drums'],
  'action': true,
  'passive': {
    'showdown': [      
'Cuando un sobreviviente utiliza el arte secreto de lucha <b>Golpe Sincronizado</b>, vuelve a tirar los lanzamientos de ataque fallados una vez.'
    ],
  }
 },
 'Guidepost': {
  'label': '',
  'tags': ['other'],
  'action': true,
  'passive': {
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$1$ supervivencia.'
    ],
  }
 },
 'Hands of the Sun': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['faith'],
  'campaign': ['Sun'],
  'passive': {
    'actions': [      
'<b class="action">Sobrecarga</b>: si tienes fichas de +1 de fuerza, puedes gastar 1 supervivencia y quitarlas todas para darle a tu próximo ataque en esta ronda <b>devastador 1</b>. Límite una vez por ronda.',
    ],
  }
 },
 'Heart Flute': {
  'label': '',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
  'passive': {
    'showdown': [
     'Cuando un sobreviviente utiliza el arte secreto de lucha <b>Golpe Sincronizado</b>, su ayudante de ataque puede gastar 1 supervivencia para cambiar cualquier <b>Reflejo</b> del monstruo a <b>Fracaso</b> antes de realizar cualquier intento de herida. Límite, una vez por ataque.',
    ],
  }
 },
 'Hovel': {
  'label': '',
  'parent': 'Language',
  'tags': ['home', 'language'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$1$ supervivencia.'
    ],
  }
 },
 'Inner Lantern': {
  'label': '',
  'parent': 'Language',
  'tags': ['faith', 'language'],
  'passive': {
    'actions': [
      '<b class="action">Acometida</b>: Una vez por ronda, gasta 1 supervivencia para obtener +1'+activation_img+' y úsalo inmediatamente.',
    ],
  }
 },
 'Language': {
  'label': '',
  'campaign': ['Lantern'],
  'tags': ['starting'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'actions': [
      '<b class="action">Animo</b>: Una vez por ronda, si estás de pie, gasta 1 supervivencia para llamar a un sobreviviente que no esté sordo. Se levantan si están derribados.',
    ],
  }
 },
 'Lantern Oven': {
  'label': '',
  'tags': ['science', 'ammonia'],
  'passive': {
    'settlement': [
      'Obtener <b>Calor</b>.',
    ],
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$1$ supervivencia.'
    ],
  }
 },
 'Momento Mori': {
  'label': '',
  'parent': 'Pictograph',
  'tags': ['art', 'pictograph'],
  'action': true,
 },
 'Nightmare Training': {
  'label': '',
  'parent': 'Nightmare Training',
  'tags': ['education', 'symposium'],
  'action': true,
 },
 'Nigredo': {
  'label': '',
  'expansion': 'gorm',
  'tags': ['science', 'gormchymy'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
  }
 },
 'Paint': {
  'label': '',
  'parent': 'Language',
  'tags': ['art', 'language'],
  'passive': {
    'actions': [
      '<b class="action">Correr</b>: Una vez por ronda, gasta 1 supervivencia para obtener +1'+movement_img+' y úsalo inmediatamente.',
    ],
  }
 },
 'Partnership': {
  'label': '',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Petal Spiral': {
  'label': '',
  'expansion': 'flower knight',
  'parent': 'Forbidden Dance',
  'tags': ['music', 'forbidden dance'],
  'action': true,
  'passive': {
    'departing': [
      'Independientemente de su PX de Caza, los sobrevivientes pueden seleccionar la Espada como su Destreza con Armas.'
    ],
  }
 },
 'Pictograph': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'passive': {
    'showdown': [
      'Al comienzo del turno de un sobreviviente, pueden decidir saltarse su turno y - '+event_img+'<b class="event-trigger" target="run away">Huir</b>.',
    ],
    'hunt': [
      'Después de que se resuelva un evento de caza, un sobreviviente puede decidir que es hora de regresar a casa y - '+event_img+'<b class="event-trigger" target="run away">Huir</b>.',
    ],
  }
 },
 'Pottery': {
  'label': '',
  'parent': 'Sculpture',
  'tags': ['art', 'sculpture'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
  }
 },
 'Radiating Orb': {
  'label': '',
  'expansion': 'dragon king',
  'campaign': ['Stars'],
  'tags': ['science'],
  'passive': {
    'settlement': [
      'Obtener <b>Calor</b>.',
    ],
    'newborn': [
      'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ supervivencia.'
    ],
    'departing': [
      'Todos los sobrevivientes que <b>parten</b> obtienen +$1$ supervivencia.',
      'Los <b>sobrevivientes que parten</b> con una constelación obtienen +1 supervivencia.'
    ],
  }
 },
 'Records': {
  'label': '',
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
 },
 'Round Stone Training': {
  'label': '',
  'expansion': 'dung beetle knight',
  'parent': 'Nightmare Training',
  'tags': ['education', 'nightmare training'],
  'action': true,
 },
 'Rubedo': {
  'label': '',
  'expansion': 'gorm',
  'parent': 'Citrinitas',
  'tags': ['science', 'gormchymy', 'citrinitas'],
  'action': true,
 },
 'Sacrifice': {
  'label': '',
  'parent': 'Shrine',
  'tags': ['faith', 'shrine'],
  'action': true,
 },
 'Saga': {
  'label': '',
  'parent': 'Song of the Brave',
  'tags': ['music', 'song of the brave'],
  'passive': {
    'newborn': [
     'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$2$ coraje.',
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$2$ comprensión.',
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$2$ PX de caza.'
    ]
  }
 },
 'Sauna Shrine': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hands of the Sun',
  'tags': ['faith', 'hands of the sun'],
  'campaign': ['Sun'],
  'action': true,
  'passive': {
    'departing': [
      'Cuando los sobrevivientes <b>parten</b> para un Encuentro con Némesis o un Enfrentamiento Especial, obtienen +10 de supervivencia.'
    ],
  }
 },
 'Scarification': {
  'label': '',
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Scrap Smelting': {
  'label': '',
  'parent': 'Lantern Oven',
  'tags': ['science', 'lantern oven'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Blacksmith']},
  },
 },
 'Sculpture': {
  'label': '',
  'parent': 'Paint',
  'tags': ['art', 'paint'],
  'action': true,
 },
 'Settlement Watch': {
  'label': '',
  'expansion': 'manhunter',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
  'passive': {
    'departing': [
      'Cuando los sobrevivientes <b>parten</b> para un Encuentro con Némesis o un Enfrentamiento Especial, obtienen +2 de supervivencia.'
    ],
  }
 },
 'Shadow Dancing': {
  'label': '',
  'expansion': 'sunstalker',
  'parent': 'Hovel',
  'tags': ['home', 'hovel'],
  'action': true,
 },
 'Shrine': {
  'label': '',
  'parent': 'Inner Lantern',
  'tags': ['faith', 'inner lantern'],
  'action': true,
 },
 'Song of the Brave': {
  'label': '',
  'parent': 'Drums',
  'tags': ['music', 'drums'],
  'passive': {
    'showdown': [
      'Al <b>llegar</b>, cada sobreviviente que no esté sordo puede eliminar 1 ficha de atributo negativo.',
    ],
    'hunt': [
      'Durante el '+event_img+'<b class="event">Oscuridad Abrumadora</b>, cada sobreviviente que no esté sordo puede seleccionar el Camino del Valiente.',
    ],
  }
 },
 'Stoic Statue': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Black Mask': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'White Mask': {
  'label': '',
  'expansion': 'lion knight',
  'tags': ['other'],
  'action': true,
 },
 'Storytelling': {
  'label': '',
  'parent': 'Symposium',
  'tags': ['education', 'symposium'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
  }
 },
 'Subterranean Agriculture': {
  'label': '',
  'expansion': 'dung beetle knight',
  'tags': ['science'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Wet Resin Crafter']},
  },
 },
 'Sun Language': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['starting'],
  'campaign': ['Sun'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'actions': [
      '<b class="action">Fortalecer</b>: Una vez por ronda, si no tienes fichas de +1 de fuerza, gasta 1 supervivencia para obtener una ficha de +1 de fuerza. Cuando estás derribado, pierdes todas las fichas de +1 de fuerza.',
    ],
  }
 },
 'Symposium': {
  'label': '',
  'parent': 'Language',
  'tags': ['education', 'language'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
      'Cuando un sobreviviente innova, saca 2 cartas adicionales de innovación para elegir.',
    ],
  }
 },
 'The Knowedge Worm': {
  'label': '',
  'expansion': 'lion god',
  'tags': ['other'],
  'passive': {
    'settlement': [
      'Al comienzo de la fase de asentamiento, agrega 1 chatarra al almacenamiento del asentamiento.',
    ],
    'departing': [
      'Todos los sobrevivientes que se <b>marchen</b> obtienen +$3$ supervivencia.',
'Todos los sobrevivientes que se <b>marchen</b> obtienen +$3$ cordura.',
'Si alguno de los <b>sobrevivientes que se marchen</b> tiene 10+ de cordura, '+event_img+'<b class="event">Anfitrión Gracioso</b>',
    ],
  }
 },
 'Ultimate Weapon': {
  'label': '',
  'tags': ['science'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'showdown': [
     'Cuando derrotes a un monstruo, obtén 1 recurso de monstruo de tu elección de su mazo de recursos.',
    ],
  }
 },
 'Umbilical Bank': {
  'label': '',
  'expansion': 'sunstalker',
  'tags': ['science'],
  'campaign': ['Sun'],
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'innovation': ['Pottery']},
  },
  'passive': {
    'newborn': [
    'Cuando nace un nuevo sobreviviente, puedes agregar 1 recurso extraño <b>Cordón de Vida</b> al almacenamiento.',
    ],
  }
 },
 'War Room': {
  'label': '',
  'expansion': 'manhunter',
  'parent': 'Storytelling',
  'tags': ['education', 'storytelling'],
  'action': true,
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'hunt': [
     'Si los sobrevivientes deben moverse hacia atrás en el tablero de caza, tira 1d10. En un resultado de 4 o más, no lo hacen.',
    ],
  }
 },
 'Accept Darkness': {
  'label': '',
  'tags': ['principle', 'society'],
  'passive': {
    'all': [
      'Añadir +2 a todas las tiradas de <b>Trauma Cerebral</b>.',
    ],
  }
 },
 'Barbaric': {
  'label': '',
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'newborn': [
      'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ de fuerza.',
    ],
  }
 },
 'Cannibalize': {
  'label': '',
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'all': [
      'Siempre que un sobreviviente muera, saca 1 recurso básico y agrégalo al almacenamiento del asentamiento. No obtengas un recurso si un sobreviviente se pierde, deja de existir o es exiliado.',
    ],
  }
 },
 'Collective Toil': {
  'label': '',
  'tags': ['principle', 'society'],
  'passive': {
    'settlement': [
      'Al comienzo de la fase de asentamiento, obtén +1'+endeavor_img+' por cada 10 de población.',
    ],
  }
 },
 'Graves': {
  'label': '',
  'tags': ['principle', 'death'],
  'passive': {
    'settlement': [
      'Cuando un sobreviviente muere durante la fase de asentamiento, obtén +1'+endeavor_img+'.',
    ],
    'all': [
      'Todos los sobrevivientes nuevos obtienen +$1$ de comprensión.',
    ],
    'showdown': [
     'Cuando un sobreviviente muere durante la fase de enfrentamiento, obtén +2'+endeavor_img+'.',
    ],
    'hunt': [
      'Cuando un sobreviviente muere durante la fase de caza, obtén +2'+endeavor_img+'.',
    ],
  }
 },
 'Protect the Young': {
  'label': '',
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
     'Cuando tiras en el '+event_img+'<b class="event">Intimidad</b>, tira dos veces y elige un resultado.',
    ],
  }
 },
 'Romantic': {
  'label': '',
  'tags': ['principle', 'conviction'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
    ],
    'all': [
      'Cuando obtienes un arte de lucha al azar, saca 3 cartas de arte de lucha y selecciona 1 para quedarte con ella.',
    ],
  }
 },
 'Survival of the Fittest': {
  'label': '',
  'tags': ['principle', 'birth', 'new life'],
  'passive': {
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$',
      'Cuando tiras en el '+event_img+'<b class="event">Intimidad</b>, tira dos veces y elige el resultado más bajo.',
    ],
    'newborn': [
      'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ de fuerza.',
'Todos los sobrevivientes <b>recién nacidos</b> obtienen +$1$ de evasión.'
    ],
    'all': [
     'Una vez en la vida, un sobreviviente puede volver a tirar un solo resultado de tirada. Deben quedarse con este nuevo resultado.',
    ],
  }
},

// Dirty hack to add always present bonuses to the campaigns (Innovation Name is the same as Campaign name)
'Lantern#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Esquivar</b>: Una vez por ronda, cuando un sobreviviente recibe un golpe, después de lanzar los dados de ubicación de impacto pero antes del daño, pueden gastar 1 supervivencia para esquivar, cancelando un golpe. El golpe esquivado se convierte en un lanzamiento de ataque fallido y no causa daño. Cualquier golpe adicional no esquivado se resuelve normalmente. La esquiva es la única acción de supervivencia que los sobrevivientes derribados pueden realizar.',
    ],
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
},
'Stars#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Esquivar</b>: Una vez por ronda, cuando un sobreviviente recibe un golpe, después de lanzar los dados de ubicación de impacto pero antes del daño, pueden gastar 1 supervivencia para esquivar, cancelando un golpe. El golpe esquivado se convierte en un lanzamiento de ataque fallido y no causa daño. Cualquier golpe adicional no esquivado se resuelve normalmente. La esquiva es la única acción de supervivencia que los sobrevivientes derribados pueden realizar.',
    ],
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
},
'Sun#Hidden': {
  'campaign': 'hidden',
  'passive': {
    'actions': [
      '<b class="action">Esquivar</b>: Una vez por ronda, cuando un sobreviviente recibe un golpe, después de lanzar los dados de ubicación de impacto pero antes del daño, pueden gastar 1 supervivencia para esquivar, cancelando un golpe. El golpe esquivado se convierte en un lanzamiento de ataque fallido y no causa daño. Cualquier golpe adicional no esquivado se resuelve normalmente. La esquiva es la única acción de supervivencia que los sobrevivientes derribados pueden realizar.',
    ],
    'settlement': [
      '<b>Límite de Supervivencia:</b> $1$'
    ],
  }
},
'Heat': {
  'campaign': 'hidden',
  'label': 'Calor'

},
'Oxidation': {
  'campaign': 'hidden',
  'label': 'Oxidación<br/><i style="color:#aa0;">El costo total se muestra (incluyendo recubrimiento y equipo de protección)</i>'

},
'Perfect Crucible': {
  'campaign': 'hidden',
  'label': 'Crisol Perfecto'
},
'Dark Water Research 1': {
  'campaign': 'hidden',
  'label': 'Investigación en Aguas Oscuras 1'
},
'Dark Water Research 2': {
  'campaign': 'hidden',
  'label': 'Investigación en Aguas Oscuras 2'
},
'Dark Water Research 3': {
  'campaign': 'hidden',
  'label': 'Investigación en Aguas Oscuras 3'
},
'Nightmare Corn': {
  'campaign': 'hidden',
  'label': 'Maíz Pesadilla'
},
'Vampiric Artichoke': {
  'campaign': 'hidden',
  'label': 'Alcachofa Vampírica'
},
'Final Lantern': {
  'campaign': 'hidden',
  'label': 'Linterna Final'
},
'Ancestral Katana': {
  'campaign': 'hidden',
  'label': 'Especialización en Katana, Armero'
},

'Blacksmith': {
  'campaign': 'hidden',
  'label': 'Herrero'
},
'Mask Maker': {
  'campaign': 'hidden',
  'label': 'Fabricante de Máscaras'
},
'Weapon Crafter': {
  'campaign': 'hidden',
  'label': 'Armero'
},
'The Perpetrator': {
  'campaign': 'hidden',
  'label': 'Calor, Armero'
},

'Green Helm': {
  'campaign': 'hidden',
  'label': 'Viejo Maestro en la Lista de Presas del Asentamiento'
},
'Green Gloves': {
  'campaign': 'hidden',
  'label': 'Fusión de Chatarra, Albedo'
},
'Griswaldo': {
  'campaign': 'hidden',
  'label': 'Rubedo, sobreviviente con Verdadera Espada'
},

'Initiation': {
  'expansion': 'allison ccg',
 'label': '',
 'tags': ['other'],
 'action': true,

 'passive': {
   'settlement': [
    'Una vez por año de linterna, durante el paso de <b>Desarrollo</b>, puedes quitar 1 recurso consumible del almacenamiento del asentamiento y colocarlo en las hojas de sobrevivientes de los Iniciados como <b>Provisiones</b>.',
'Al final de cada fase de asentamiento, tira 1d10. Con un resultado de 1-3, archiva 1 recurso de las <b>Provisiones</b>, de lo contrario, 1 Iniciado muere de hambre. Si todos los Iniciados están muertos, elimina '+event_img+'<b>Retirada de la Orden</b> de la línea de tiempo.',
   ],
 }
},

'Muttering Blade': {
  'expansion': 'allison ccg',
 'label': '',
 'tags': ['other'],
 'action': true,

 'passive': {
   'all': [
     'Si algún sobreviviente se convierte en el portador de la Espada del Crepúsculo, archiva la innovación <b>Cuchilla Murmurante</b>.',
   ],
 }
},

'The Order is Watching': {
 'label': '',
 'expansion': 'allison ccg',
 'action': true,

 'tags': ['other'],
},

'Stone Garden': {
  'expansion': 'drifter knight',
 'label': '',
 'tags': ['faith', 'shrine'],
 'action': true,
 'parent': 'Shrine',
},

'Venom Wine': {
  'expansion': 'drifter knight',
 'label': '',
 'tags': ['art'],
 'action': true,
 'passive': {
   'settlement': [
     '<b>Límite de Supervivencia:</b> $1$'
   ],
   'departing': [
     'Todos los sobrevivientes que se <b>marchen</b> obtienen +$3$ de cordura.'
   ],
 }
},

}

module.exports = {
 texts,
}
