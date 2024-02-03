const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
'Acceleration': {
  'label':'Aceleración',
  'type': 'descubrimiento de pulso',
  'description':'Agrega +1d10 de movimiento a una acción de movimiento. Antes de moverte, puedes tirar el <b>Dado de la Muerte</b> y sumar el resultado a tu movimiento en una acción de movimiento de esta ronda.',
},
'Acid Palms': {
   'label':'Palmas Ácidas',
   'description': 'Agrega 1d10 de fuerza a los intentos de herir al atacar con Puño & Diente.',
},
'Ageless': {
   'label':'Inmortal',
   'description': 'Puedes cazar incluso si estás retirado. Cuando obtienes Puntos de Experiencia de Caza, puedes optar por no ganarlos.',
},
'Aggression Overload': {
   'label':'Sobrecarga de Agresión',
   'type': 'descubrimiento de pulso',
   'description':'Agrega un lanzamiento de ataque a un ataque. Durante tu ataque, después de hacer tus lanzamientos de ataque pero antes de sacar ubicaciones de impacto, puedes tirar el Dado de la Muerte como un lanzamiento de ataque adicional.',
},
'Analyse': {
   'label':'Analizar',
   'description': 'Al comienzo del turno de los sobrevivientes, si estás adyacente al monstruo, revela la primera carta de AI. Luego, colócala de nuevo en la parte superior del mazo.',
},
'Bitter Frenzy': {
   'label':'Frenesí Amargo',
   'description': 'Puedes gastar supervivencia y usar Artes de Lucha, especialización de armas y maestría de armas mientras estés Enfurecido.',
},
'Burnt Nerves': {
   'label':'Nervios Chamuscados',
   'description': 'Eres inmune al aturdimiento.',
},
'Caratosis': {
   'label':'Caratosis',
   'description': 'Por cada afinidad roja que tengas, 1 de tus lanzamientos de ataque impacta automáticamente en cada ataque.',
},
'Child of the Sun': {
   'label':'Hijo del Sol',
   'description': 'Agrega +3d10 cuando <b>Sincronices</b> durante <b>Simbiosis Umbilical</b>.',
},
'Crystal Skin': {
   'label':'Piel de Cristal',
   'description': 'No puedes colocar armaduras en tu cuadrícula de equipo. Cuando te embarques, obtén 3 puntos de armadura en todos las ubicaciones de impacto. Sufre -2 en el resultado de todas las tiradas de lesiones graves.',
},
'Dead Inside': {
   'label':'Muerto por Dentro',
   'type': 'impedimento',
   'description': 'No puedes ganar <b>supervivencia</b>.',
},
'Devoted Union': {
   'label':'Unión Devota',
   'description': 'Solo puedes nominar a tu <b>pareja</b> y a ti mismo para la <b>Intimidad</b>. Cuando tu pareja muera, obtén un trastorno aleatorio y pierde esta habilidad.<br/><br/>Durante el turno del superviviente, mientras tú y tu pareja estén dentro del alcance del monstruo, pueden realizar un <b>ataque combinado</b>. Límite, una vez por ronda.<br/><br/><b style="color:#cc0;">Ataque combinado</b>: Los socios gastan {image@images/icons/activation} y activan un arma. Realizan simultáneamente lanzamientos de ataque, determinando los impactos según su precisión individual. Sacar ubicaciones de impacto para todos los impactos juntos. Resuelve las ubicaciones de impacto uno a la vez. Los socios eligen qué superviviente intenta herir cada ubicación de impacto <i>(incluida la trampa)</i>. Cada compañero no puede hacer más intentos de herir que la cantidad de lanzamientos de ataque que tienen.',
},
'Dormenatus': {
   'label':'Dormenatus',
   'description': 'Cuando te embarcas, obtén 1 punto de armadura en cada ubicación de impacto por cada afinidad verde que tengas.',
},
'Endless Babble': {
   'label':'Charla Interminable',
   'type': 'impedimento',
   'description': 'Cuando te embarcas, los <b>supervivientes que parten</b> obtienen +1 cordura.<br/><br/>No puedes <b>alentar</b>.',
},
'Enduring Legacy': {
   'label':'Legado Duradero',
   'description': 'Solo puedes nominar a tu <b>pareja</b> y a ti mismo para la <b>Intimidad</b>. Cuando tu pareja muera, obtén un trastorno aleatorio y pierde esta habilidad.<br/><br/>Tus hijos nacidos o adoptados pueden <b>heredar</b> un atributo positivo y un Arte de Lucha de entre sus padres.<br/><br/>Durante la fase de asentamiento, puedes adoptar a un superviviente sin nombre que nunca haya partido del asentamiento. Los supervivientes solo pueden <b>heredar</b> de los padres una vez en su vida.<br/><br/>Cuando tengas <b>3+</b> hijos, tu familia estará completa, te <b>retirarás</b> con tu pareja y dejarás de tener hijos para siempre.',
},
'Explore': {
   'label':'Explorar',
   'description': 'Cuando tiras en una tabla de investigar, suma +2 a tu resultado de tirada.',
},
'Fated Battle': {
   'label':'Batalla Destinada',
   'description': 'Al comienzo de un enfrentamiento con el monstruo elegido, obtén un token de velocidad +1.',
},
'Foretold Battle': {
   'label':'Batalla Profetizada',
   'description': 'Cuando obtienes esta habilidad, elige un monstruo nemesio.<br /><br />En <b>Llegada</b> contra el monstruo elegido, obtén un token de fuerza +1 y un token de repetición +1 que debes usar en este enfrentamiento.',
},
'Frenzied': {
   'label':'Enfurecido',
   'type': 'impedimento',
   'description': 'No puedes gastar supervivencia.<br />No puedes usar Artes de Lucha.<br />No puedes usar Especialización de Armas ni Maestría de Armas.<br />Descártalo al final del enfrentamiento.',
},
'Gigaslayer': {
   'description': 'Obtén +2 de fuerza y +1 de suerte al atacar a un monstruo de 3x3 o más grande.<br /><br />Cuando participes en la <b>Intimidad</b>, los recién nacidos con tu apellido obtienen <b>Gigaslayer</b> además de cualquier otro beneficio.',
},
'Heart of the Storm': {
   'label':'Corazón de la Tormenta',
   'type': 'habilidad de constelación',
   'group_name': 'Tormenta',
   'description':'Si obtienes competencia con armas durante el Desenlace, obtén +3 rangos adicionales. Vomitas un trozo de tu propia sangre solidificada y obtienes +1 recurso de hierro extraño.',
},
'Homing Instinct': {
   'label':'Instinto de Regreso',
   'description': 'Agrega +5 a tus tiradas en el '+event_img+'<b>Huir</b>.',
},
'Iridescent Hide': {
   'label':'Piel Iridescente',
   'description': 'Obtén +1 de armadura en todos las ubicaciones de impacto por cada afinidad de color diferente en tu cuadrícula de equipo.',
   'type': 'rasgo de dragón',
},
 'Iron Will': {
   'label':'Voluntad de Hierro',
   'description': 'No puedes ser derribado. Reduce todo el retroceso que sufras a retroceso 1.',
},
'Legendcaller': {
   'label':'Llamador de Leyendas',
   'description': 'Una vez en la vida, en un espacio del tablero de caza después de la Oscuridad Abrumadora, en lugar de tirar un evento de caza aleatorio, utiliza <b>"53"</b> como tu resultado.',
},
'Legs Locked': {
   'label':'Piernas Inmovilizadas',
   'type': 'descubrimiento de pulso',
   'description':'Cuando obtengas el Dado de la Muerte, te pones de pie. Mientras tengas el Dado de la Muerte, no puedes ser derribado por ninguna razón.',
},
'Leprosy': {
   'label':'Lepra',
   'type': 'impedimento',
   'description': 'Reduce todo el daño sufrido en 1 como mínimo de 1.<br /><br />Sufre -2 en las tiradas de lesiones graves.',
},
'Leyline Walker': {
   'label':'Caminante de la Línea Ley',
   'description': 'Mientras no haya armadura ni accesorios en tu cuadrícula de equipo, obtén +3 de evasión.',
},
'Life Exchange': {
   'label':'Intercambio de Vida',
   'description': 'En el Desenlace, obtén 1 PX de Caza adicional. No puedes llevar otro equipo. Si activas el '+event_img+'<b>Secreto Blanco</b>, dejas de existir. Cuando te retires, dejas de existir.',
},
'Limb-maker': {
   'label':'Fabricante de Extremidades',
	'type': 'habilidad de constelación',
   'group_name': 'Escultor',
   'description': 'Una vez por fase de asentamiento, gasta {image@images/icons/endeavors}{image@images/icons/endeavors} para tallar una extremidad protésica. Elimina una lesión por desmembramiento de un superviviente y agrega 1 hueso al depósito del asentamiento.',
},
'Lucerna': {
   'label':'Lucerna',
   'description': 'Por cada afinidad azul que tengas, tus armas a distancia obtienen esa cantidad de alcance y tus armas cuerpo a cuerpo obtienen esa cantidad de alcance.',
},
'Mad Grade': {
	'label':'Grado Loco',
   'description': 'Una vez por enfrentamiento, antes de lanzar los dados, puedes seleccionar un número. Si el resultado del lanzamiento es el número nombrado, obtén +1 ficha de evasión.',
},
'Mad Oracle': {
   'label':'Oráculo Loco',
   'description': 'Una vez por enfrentamiento. cuando un monstruo saque una AI, nombra una carta. Si la carta de AI sacada es la carta nombrada, obtén +1 ficha de evasión.',
},
'Marrow Hunger': {
   'label':'Hambre de Médula',
   'type': 'impedimento',
   'description': 'Si se sacan los eventos de asentamiento <b>Ase sin Cabeza</b> o <b>Devorador de Cráneos</b>, nomina a este superviviente.',
},
'Matchmaker': {
   'label':'Casamentero',
   'description': 'Cuando eres un superviviente que regresa, una vez por año de linterna puedes gastar un {image@images/icons/endeavors} para realizar '+event_img+'<b>Intimidad</b>.',
},
'Metabolic Surrender': {
	'label':'Rendición Metabólica',
   'type': 'descubrimiento de pulso',
   'description': 'En cualquier momento durante el enfrentamiento, puedes tirar el <b>Dado de la Muerte</b>. Obtén el doble de esa cantidad de supervivencia.<br /><br />Esta ronda, ignora los efectos negativos de lesiones permanentes, impedimentos, trastornos y atributos negativos (incluidos los tokens). Al final de la ronda, mueres.',
},
'Metal Maw': {
   'label':'Boca de Metal',
   'description': 'Tus ataques de Puño & Diente obtienen Filo <i>(agrega 1d10 de fuerza a cada intento de herida)</i>.',
},
'Nightmare Blood': {
   'label':'Sangre de Pesadilla',
   'description': 'Cada vez que obtengas un token de sangrado, agrega 1 de armadura a todos las ubicaciones de impacto.',
},
'Nightmare Membrane': {
   'label':'Membrana de Pesadilla',
   'description': 'Puedes gastar {image@images/icons/activation} + {image@images/icons/movement} para intercambiar cualquier ficha tuya por una ficha de +1 de fuerza.',
},
'Nightmare Spurs': {
   'label':'Espuelas de Pesadilla',
   'description': 'Una vez por enfrentamiento, puedes gastar toda tu supervivencia <i>(al menos 1)</i> para perder todos tus tokens de +1 de fuerza y obtener la misma cantidad de tokens de +1 de suerte.',
},
'Oracles Eye': {
   'label':'Ojo del Oráculo',
   'description': 'Al comienzo del enfrentamiento, mira a través del deck de IA y luego baraja.',
   'type': 'rasgo de dragón',
},
'Partner': {
   'label':'Compañero',
   'description': 'Solo puedes nominar a tu <b>compañero</b> y a ti mismo para la <b>Intimidad</b>. Cuando tu compañero muere, obtén un trastorno aleatorio y pierde esta habilidad.<br/><br/>Cuando partes con tu <b>compañero</b>, obtén +2 de supervivencia.<br/><br/>Mientras estés junto a tu <b>compañero</b>, obtén +1 de fuerza.',
},
'Peerless': {
   'label':'Sin Par',
   'description': 'Cuando obtengas cordura, puedes obtener una cantidad igual de supervivencia.',
},
'People of the Skull': {
   'description': 'Cuando eres nombrado, si tienes la palabra <b>cráneo</b> o <b>hueso</b> en tu nombre, obtén un +1 permanente a velocidad, precisión, fuerza, evasión o suerte.',
},
'Possessed': {
   'label':'Poseído',
   'type': 'impedimento',
   'description': 'El superviviente no puede usar especialización de armas, maestría de armas ni Artes de Lucha.',
},
'Prepared': {
   'label':'Preparado',
   'description': 'Cuando tiras para determinar un rezagado, agrega tu experiencia en caza a tu resultado de tirada.',
},
 'Presage': {
	 'label':'Presagio',
   'type': 'habilidad de constelación',
   'group_name': 'Bruja',
   'description': 'Cada vez que atacas, antes de sacar ubicaciones de impacto, di en voz alta un nombre.<br /><br /><i>Muerdes ligeramente el ojo en tu mejilla para ver lo que ve.</i> Si sacas ubicaciones de impacto con ese nombre, obtén +3 de cordura y +10 de fuerza al intentar herirlas.',
},
'Pristine': {
   'label': 'Inmaculado',
   'type': 'rasgo de dragón',
   'description': 'Cuando sufres una lesión grave de <b>desmembramiento</b>, ignórala y obtén en su lugar 1 ficha de sangrado.',
},
'Psychovore': {
	'label':'Psicóvoro',
   'type': 'habilidad de constelación',
   'group_name': 'Segador',
   'description': 'Una vez por enfrentamiento, puedes comer el trastorno de un superviviente adyacente. Si lo haces, elimina el trastorno. Obtienen 1 ficha de sangrado y tú obtienes +1 de fuerza permanente.<br /><br />Al final del enfrentamiento, si no has comido un trastorno, mueres.',
},
'Purified': {
	'label':'Purificado',
   'description': 'Agrega +1d10 cuando <b>Sincronices</b> durante la Symbiosis Umbilical.',
},
'Reflection': {
	'label':'Reflexión',
   'description': 'Tus afinidades completas y la mitad de las afinidades incompletas cuentan como todos los colores.<br /><br />Puedes <b>esquivar</b> en cualquier momento y tantas veces como desees en cada ronda.<br /><br />Cuando atacas desde un punto ciego, agrega +1d10 a todos los intentos de herida para ese ataque.',
},
'Refraction': {
	'label':'Refracción',
   'description': 'Tus afinidades completas y la mitad de las afinidades incompletas cuentan como todos los colores.<br /><br />Durante el enfrentamiento, después de realizar una acción de supervivencia, obtén +1 de supervivencia.',
},
'Rivals Scar': {
   'label':'Cicatriz de Rival',
   'description': 'Obtienes +1 de fuerza permanente y -1 de evasión permanente.',
},
'Rooted to All': {
	'label':'Arraigado a Todo',
   'type': 'habilidad de constelación',
   'group_name': 'Absoluto',
   'description': 'Si estás de pie al comienzo de tu turno, revela las 2 cartas superiores del deck de IA y ponlas de nuevo en cualquier orden.',
},
'Sour Death': {
   'label':'Muerte Agria',
   'description': 'Cuando te derriban, puedes animarte a ti mismo. Si lo haces, obtén 1 ficha de fuerza.',
},
'Stalwart': {
   'label':'Imperturbable',
   'description': 'Ignora los efectos de ser derribado de las lesiones cerebrales, trastornos y acciones de intimidación.',
},
'Story of the Forsaker': {
   'label':'Historia del Abandonado',
   'description': 'No puedes ser derribado durante un enfrentamiento con un monstruo némesis.',
},
'Story of the Goblin': {
   'label':'Historia del Duende',
   'description': 'Una vez por enfrentamiento, puedes tirar 1d10. En un 3+, obtén el token de objetivo prioritario y el monstruo obtiene +1 ficha de daño.',
},
'Story of the Young Hero': {
   'label':'Historia del Joven Héroe',
   'description': 'Al comienzo de cada uno de tus actos, puedes optar por obtener 1 supervivencia y 2 fichas de sangrado.',
},
'Super Hair': {
   'label':'Super Cabello',
   'description': 'Puedes gastar {image@images/icons/activation} para intercambiar libremente cualquier ficha con supervivientes adyacentes que tengan <b>Super Cabello</b>.',
},
'Sweet Battle': {
   'label':'Dulce Batalla',
   'description': 'Puedes efectuar una embestida sin gastar supervivencia. Si lo haces, el {image@images/icons/activation} debe usarse para activar un arma.',
},
'Thundercaller': {
   'label':'Llamador del Trueno',
   'description': 'Una vez en la vida, en un espacio del tablero de caza después de la Oscuridad Abrumadora, en lugar de tirar un evento de caza aleatorio, utiliza <b>100</b> como tu resultado.',
},
'Tinker': {
   'label':'Chapucero',
   'description': 'Cuando eres un superviviente que regresa, obtén +1{image@images/icons/endeavors}.',
},
'Twelve Fingers': {
	'label':'Doce Dedos',
   'group_name': 'Apostador',
   'type': 'habilidad de constelación',
   'description': 'No puedes llevar equipo de dos manos.<br /><br /><div style="display:inline;color:#0c0;">En un golpe <b>Perfecto</b>, tu mano derecha late. Obtén +5 de cordura y +1 de suerte para ese ataque.</div><br /><br /><div style="display:inline;color:#c00;">Sin embargo, por cada 1 natural que saques al intentar golpear, tu mano izquierda tiembla. Sufres 5 puntos de daño cerebral y -1 de suerte para ese ataque.</div>',
},
'Twilight Succession': {
	'label':'Sucesión Crepuscular',
   'description': 'Si mueres durante el enfrentamiento y tienes una Espada del Crepúsculo, nomina a otro superviviente en el tablero del enfrentamiento para que obtenga la Espada del Crepúsculo y esta habilidad.',
},
'Uninhibited Rage': {
	'label':'Rabia Desinhibida',
   'type': 'descubrimiento de pulso',
   'description':'Agrega +1d10 de fuerza a un intento de herida. Después de que se tire un intento de herida, puedes tirar el <b>Dado de la Muerte</b> y sumar el resultado a la fuerza de tu intento de herida.',},
'Way of the Rust': {
   'type': 'habilidad de constelación',
   'group_name': 'Óxido',
   'description': 'Tus fichas de sangrado también son fichas de evasión +1.',
},
'Archivist': {
	'label':'Archivista',
   'expansion': 'allison ccg',
   'description': 'Si el portador de la <b>Espada del Crepúsculo</b> muere, se retira o alcanza la Maestría de la Espada del Crepúsculo, nombra a otro superviviente. Obtienen el equipo raro <b>Espada del Crepúsculo</b>, la proficiencia en la Espada del Crepúsculo y la mitad de la experiencia de arma del portador anterior de la <b>Espada del Crepúsculo</b>, redondeada hacia arriba.',
},
'Loyal to the Order': {
	'label':'Leal a la Orden',
   'expansion': 'allison ccg',
   'description': 'Solo puedes alentar a otros <b>Aprendices</b>.<br/>Durante el enfrentamiento, si otro <b>Aprendiz</b> está en el tablero del enfrentamiento, puedes gastar su supervivencia en lugar de la tuya.<br/><br/>Cuando derrotes a un monstruo de nivel 3 o superior, ignoras la <b>maldición</b> en el equipo raro <b>Capucha del Relicario</b>.',
},
'Twilight Deserter': {
	'label':'Desertor Crepuscular',
   'type': 'impedimento',
   'expansion': 'allison ccg',
   'description': 'Cuando obtengas este impedimento, si no ignoras <b>maldito</b> en la <b>Capucha del Relicario</b>, dale la vuelta al lado de <b>Capucha del Relicario Harapienta</b>.<br/><br/>Cuando el asentamiento obtenga la innovación <b>Cuchilla Murmurante</b>, la robas y huyes. Archiva la <b>Cuchilla Murmurante</b>.<br/>Eres exiliado y nunca regresas.',
 },
}

module.exports = {
 texts,
}
