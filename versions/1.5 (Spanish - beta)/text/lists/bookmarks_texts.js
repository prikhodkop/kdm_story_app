const texts = {
 'Ringtail Vixen': {
  'label':'',
  'condition_text': 'Añadir al comienzo de la campaña si deseas conocer a la dama astuta.',
  'button_text': '<b style="color:#fff;">Ringtail Vixen:</b> Pasar el cursor si sacaste un <b style="color:#eee;">1</b>',
  'hover_tooltip': '',
  'whitebox': 'ringtail vixen',
  'width': '10%',
  'targets': ['intimacy', 'intimacy_stars', 'intimacy_sun']
 },
 'Left Overs': {
  'label':'',
  'condition_text': 'Añadir si perdiste 5 asentamientos.',
  'button_text': '<b style="color:#fff;">Left Overs:</b> Al comienzo del enfrentamiento con el Primer León Blanco de la Historia, coloca 1 carta de terreno de Cadáver de Superviviente.',
  'width': '20%',
   'targets': ['first story']
 },
 'Those before us': {
  'label':'',
  'condition_text': 'Añadir si perdiste 10 asentamientos.',
  'button_text': '<b style="color:#fff;">Those before us:</b> Cuando los supervivientes llegan al asentamiento, encuentran pequeñas huellas de vida humana antes que ellos. Obtén 1 recurso básico de cráneo y aumenta el límite de supervivencia en 1',
   'passive': {
     'settlement': [
       '<b>Límite de Supervivencia:</b> $1$',
     ],
   },
   'width': '18%',
   'targets': ['returning survivors', 'foundlings', 'the pool and the sun'],
 },
 'Ocular Parasites': {
  'label':'',
  'condition_text': 'Añadir si perdiste 15 asentamientos.',
  'button_text': '<b style="color:#fff;">Ocular Parasites:</b> Esta nueva generación de ojos de supervivientes se ha adaptado mejor a la oscuridad. Todos los supervivientes ganan +1 precisión permanente.<br/>Sin embargo, el Primer León Blanco de la Historia ha engordado con todos los supervivientes que ha comido. Al comienzo del enfrentamiento, gana 1 ficha de daño y pierde 1 ficha de movimiento.',
  'passive': {
    'all': [
      'Todos los supervivientes ganan +1 precisión.',
    ],
   },
   'width': '20%',
   'targets': ['first story']
 },
 'Rainy Season': {
  'label':'',
  'condition_text': 'Añadir si perdiste 20 asentamientos.',
  'button_text': '<b style="color:#fff;">Rainy Season:</b> El clima es extremadamente temperamental. Agrega el evento de asentamiento <b>Acid Storm</b> a los años del cronograma <b>3</b>, <b>7</b>, <b>13</b>, <b>19</b>.',
   'passive': {
     'settlement': [
       'Agrega el evento de asentamiento <b>Acid Storm</b> a los años del cronograma <b>3</b>, <b>7</b>, <b>13</b>, <b>19</b>.',
     ],
   },
   'width': '15%',
   'targets': ['returning survivors', 'foundlings', 'the pool and the sun'],
 },
 'Allison_s Offer': {
  'label':'Oferta de Allison',
  'condition_text': 'Añadir cuando se indique.',
  'button_text': '<b style="color:#fff;">Oferta de Allison:</b> Pasar el cursor en la preparación del enfrentamiento.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['showdown allison the twilight knight']
 },
 'Mysterious Agenda': {
  'label':'',
  'condition_text': 'Añadir cuando se indique.',
  'button_text': '<b style="color:#fff;">Mysterious Agenda - Noticias del Maestro:</b> Pasar el cursor en <b>Mysterious Agenda</b>.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['hooded knight']
 },
 'Twilight_s Bane': {
  'label':'Perdición del Crepúsculo',
  'condition_text': 'Añadir cuando se indique.',
  'button_text': '<b style="color:#fff;">Perdición del Crepúsculo:</b> Pasar el cursor en la preparación del enfrentamiento.',
  'hover_tooltip': '',
  'expansion': 'allison ccg',
  'width': '10%',
  'targets': ['showdown watcher']
 },
}

module.exports = {
 texts,
}
