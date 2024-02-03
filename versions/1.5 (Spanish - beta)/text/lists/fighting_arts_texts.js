const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Abyssal Sadist': {
  'expansion': 'manhunter',
  'label': 'Sadista Abismal',
  "description": "La primera vez que hieras al monstruo en cada ataque, gana +1 supervivencia y +1 cordura. Ignora los efectos de los trastornos <b>Miedo a la Oscuridad</b> y <b>Presas</b>."
 },
 'Acrobatics': {
  'expansion': 'dragon king',
  'label': 'Acrobacias',
  "description": "Cuando estés adyacente al monstruo, puedes gastar {imagen@images/icons/movement} para colocar a tu superviviente en cualquier otro espacio adyacente al monstruo."
 },
 'Ambidextrous': {
   'label': 'Ambidiestro',
  "description": "Todas las armas cuerpo a cuerpo en tu cuadro de equipo obtienen la propiedad <b>pareada</b>. Ambidestro no se puede usar si hay escudos, armas de dos manos o equipo pesado en tu cuadro de equipo."
 },
 'Backstabber': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Traidor',
  "description": "En un golpe <b>Perfecto</b> con una daga, tu primer intento de herida en ese ataque gana <b>Devastador 1</b>.<br/><br/>Cuando atacas a un monstruo con una daga desde su punto ciego, si tienes el trastorno <b>Acuñador</b> o <b>Secreto</b>, aumenta el alcance de tus golpes <b>Perfectos</b> en 1."
 },
 'Berserker': {
   'label': 'Berserker',
  "description": "Una vez por enfrentamiento, puedes gastar {imagen@images/icons/activation} para sufrir <b>golpe</b> y el traumatismo cerebral de <b>frenesí</b>."
 },
 'Blotted Out': {
  'expansion': 'slenderman',
  'label': 'Borrado',
  "description": "Cuando sufras un traumatismo cerebral, gana un token de hemorragia."
 },
 'Burning Ambition': {
  'expansion': 'sunstalker',
  'label': 'Ambición Ardiente',
  "description": "Cuando se te instruye que <b>Saltes la Próxima Caza</b>, ignóralo. El recuadro de \"Saltar la Próxima Caza\" en tu hoja de superviviente no puede ser marcado."
 },
 'Burning Focus': {
  'expansion': 'lion god',
  'label': 'Foco Ardiente',
  "description": "Si tienes 0 supervivencia al comienzo de tu turno, gana 1 supervivencia."
 },
 'Carapace of Will': {
  'expansion': 'dung beetle knight',
  'label': 'Coraza de Voluntad',
  "description": "Al comienzo del enfrentamiento, obtén la tarjeta de estado de superviviente <b>Constante</b>. Cuando te atacan, si tienes 2 o más fichas de constante, ignora un impacto y retira todas tus fichas de constante."
 },
 'Champions Rite': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Rito del Campeón',
  "description": "Antes de realizar un ataque, puedes sumar tu comprensión a tu atributo de precisión para ese ataque. Límite, una vez por enfrentamiento."
 },
 'Clutch Fighter': {
   'label': 'Luchador de Agarre',
  "description": "Mientras tengas 3 o más fichas de hemorragia, gana +1 fuerza y +1 precisión."
 },
 'Combo Master': {
   'label': 'Maestro del Combo',
  "description": "En un golpe <b>Perfecto</b>, realiza 1 tirada de ataque adicional."
 },
 'Crazed': {
   'label': 'Enloquecido',
  "description": "En un golpe <b>Perfecto</b>, gana +1 cordura."
 },
 'Crossarm Block': {
   'label': 'Bloqueo de Brazos Cruzados',
  "description": "Cuando te golpean, después de que se tiren las ubicaciones de impacto, puedes cambiar 1 resultado a la ubicación de impacto <b>brazos</b>."
 },
 'Defender': {
  'expansion': 'sunstalker',
  'label': 'Defensor',
  "description": "Cuando un superviviente adyacente a ti es derribado, puedes gastar 1 supervivencia. Si lo haces, se levantan y ganan +1 supervivencia por tus palabras de aliento. No puedes usar esto si tienes la <b>mandíbula rota</b>."
 },
 'Double Dash': {
   'label': 'Doble Carrera',
  "description": "Durante tu turno, una vez por ronda, puedes gastar {imagen@images/icons/activation} para ganar +1{imagen@images/icons/movement}."
 },
 'Ethereal Pact': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Pacto Etéreo',
  "description": "Agrega +3 a tus tiradas de traumatismo cerebral.<br/><br/>Cuando sufras el traumatismo cerebral <b>¡Imposible!</b>, el hongo en tu cabeza se conecta al sueño. Lee "+event_img+"<b>Nacimiento de un Salvador</b> y elige un sueño. (si ya has alcanzado la Edad 2, no puedes ganar el arte secreto de lucha de tu sueño)<br/><br/>Si eres un Salvador, esta Habilidad de Lucha no tiene efecto."
 },
 'Extra Sense': {
   'label': 'Sentido Extra',
  "description": "Puedes <b>esquivar</b> 1 vez adicional por ronda."
 },
 'Fated Blow': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Golpe Fatídico',
  "description": "Una vez por enfrentamiento, puedes darle a tu próximo intento de herida +2 fuerza y <b>Devastador 1</b>."
 },
 'Giants Blood': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Sangre de Gigante',
  "description": "¡Produces en exceso hormonas del crecimiento! Cuando obtengas esta habilidad de lucha, gana +1 fuerza, -1 evasión permanentemente.<br/><br/>Puedes <b>consumir</b> cráneos. Si lo haces, obtén el deterioro <b>Hambre de Médula</b>."
 },
 'Harvestman': {
  'expansion': 'spidicules',
  'label': 'Cosechador',
  "description": "Gana +3 de movimiento. Siempre que seas derribado, obtén un token de -1 de movimiento. Si tienes el trastorno <b>Aracnofobia</b>, tienes tanto miedo a las arañas que no puedes imitarlas y no puedes usar esta habilidad de lucha."
 },
 'Headliner': {
  'expansion': 'lion knight',
  'label': 'Estrella Principal',
  "description": "Cuando te conviertas en <b>condenado</b> o ganes el token de <b>objetivo prioritario</b>, puedes elegir ganar +1 de supervivencia o +1 de ficha de fuerza."
 },
 'Heroic': {
  'expansion': 'lion god',
  'label': 'Heroico',
  "description": "Una vez por enfrentamiento, si estás de pie adyacente al monstruo y tienes 3+ de supervivencia, puedes gastar toda tu supervivencia para un impacto automático que inflige una herida crítica."
 },
 'Infinite Lives': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Vidas Infinitas',
  "description": "No puedes crear nuevos recuerdos.<br/><br/>No puedes obtener nuevas habilidades de lucha ni trastornos. Cuando deberías obtener uno, ¡en su lugar, obtén una nueva vida! Date un nuevo nombre y una repetición una vez en la vida. (Gana +1 de supervivencia por nombrar. Gana la repetición independientemente del principio. Solo 1 repetición una vez en la vida a la vez.)",
 },
 'Last Man Standing': {
   'label': 'Último Hombre en Pie',
  "description": "Mientras seas el único superviviente en el tablero del enfrentamiento, no puedes ganar fichas de hemorragia ni ser derribado."
 },
 'Leader': {
   'label': 'Líder',
  "description": "Siempre que <b>animes</b> a un superviviente, ganarán una ficha de velocidad adicional hasta el final de la ronda. Una vez por fase de caza, puedes inspirar a otro superviviente. Usan tu comprensión y coraje para resolver un evento de caza o historia. (Ejemplo: si tienes 3+ de coraje, puedes inspirar a otro superviviente a seguir el camino del valiente durante <b>Oscuridad Abrumadora</b>.)"
 },
 'Lure Epilepsy': {
  'expansion': 'gorm',
  'label': 'Epilepsia de Señuelo',
  "description": "Una vez por enfrentamiento, puedes gastar {imagen@images/icons/activation} para provocarte una convulsión. Sufres un traumatismo cerebral aleatorio y quedas derribado.",
 },
 'Mammoth Hunting': {
  'expansion': 'gorm',
  'label': 'Caza de Mamuts',
  "description": "Gana +1 de fuerza al atacar desde espacios adyacentes fuera del frente y punto ciego del monstruo."
 },
 'Mighty Strike': {
   'label': 'Golpe Poderoso',
  "description": "En un golpe <b>Perfecto</b>, gana +2 de fuerza hasta el final del ataque."
 },
 'Monster Claw Style': {
   'label': 'Estilo de Garra de Monstruo',
  "description": "Tus ataques de <b>Puño y Diente</b> ganan +1 de precisión, +1 de fuerza y <b>salvaje</b>."
 },
 'Orator of Death': {
   'label': 'Orador de la Muerte',
  "description": "Una vez por enfrentamiento, puedes gastar {imagen@images/icons/activation} para que todos los supervivientes no sordos ganen +2 de cordura. Cuando mueras, <b>anima</b> a todos los supervivientes con tus últimas palabras."
 },
 'Otherworldly Luck': {
  'expansion': 'flower knight',
  'label': 'Suerte de Otro Mundo',
  "description": "Durante la fase de Caza y Asentamiento, siempre que tires en una tabla, puedes sumar +1 al resultado de la tirada. Esto no puede superar el resultado máximo posible de esa tabla. (Esto incluye Eventos de Caza, Eventos de Historia, Esfuerzos, Eventos de Asentamiento, etc.)",
 },
 'Phantom Friend': {
  'expansion': 'slenderman',
  'label': 'Amigo Fantasma',
  "description": "La primera vez que obtengas un recurso durante un enfrentamiento, puedes alimentarlo a tu amigo fantasma. Si lo haces, archiva el recurso y obtén una ficha de evasión adicional +1."
 },
 'Propulsion Drive': {
  'expansion': 'dung beetle knight',
  'label': 'Impulso de Propulsión',
  "description": "Al comienzo del enfrentamiento, obtén la tarjeta de estado de superviviente <b>Momento</b>. Cuando atacas, si tienes 5+ fichas de momento, retíralas todas y tira 1d10. Gana esa cantidad de suerte y fuerza al intentar herir la primera ubicación de impacto seleccionada para este ataque."
 },
 'Purpose': {
  'expansion': 'sunstalker',
  'label': 'Propósito',
  "description": "Tus compañeros te hacen lo suficientemente fuerte como para superar los límites de la muerte misma. Durante el enfrentamiento, si ganarías un número letal de fichas de hemorragia mientras haya otros supervivientes de pie, tira 1d10. Con un 6 o más, sigues con vida pero quedas derribado. No sangrarás hasta la muerte hasta que obtengas otra ficha de hemorragia."
 },
 'Rhythm Chaser': {
   'label': 'Perseguidor del Ritmo',
  "description": "En la <b>Llegada</b>, gana +1 ficha de evasión. Cuando quedas derribado, si no tienes un instrumento en tu cuadro de equipo, retira todas tus fichas de evasión +1. Rhythm Chaser no se puede usar si hay equipo pesado en tu cuadro de equipo."
 },
 'Ruthless': {
  'expansion': 'lion god',
  'label': 'Despiadado',
  "description": "Siempre que un superviviente muera durante el enfrentamiento, tira 1d10. Con un 7 o más, obtén un recurso básico <b>Cráneo</b>."
 },
 'Seasoned Hunter': {
  'expansion': 'manhunter',
  'label': 'Cazador Experimentado',
  "description": "Siempre que el resultado de un evento de caza aleatorio sea: 11, 22, 33, 44, 55, 66, 77, 88, 99 o 100, el revelador de la caza gana +1 de comprensión y +1 de coraje."
 },
 'Sneak Attack': {
  'expansion': 'sunstalker',
  'label': 'Ataque Sigiloso',
  "description": "Cuando atacas a un monstruo desde su punto ciego, gana +4 de fuerza para ese ataque."
 },
 'Strategist': {
   'label': 'Estratega',
  "description": "Durante la preparación del enfrentamiento, después de colocar terrenos, puedes agregar una carta de terreno <b>Cara de Piedra Gigante</b> o <b>Pilar Volcado</b> al tablero del enfrentamiento."
 },
 'Tenacious': {
  'expansion': 'lion knight',
  'label': 'Tenaz',
  "description": "Cuando tu intento de herida en una ubicación de impacto sea un fracaso, puedes poner esa ubicación de impacto de vuelta en la parte superior del mazo de ubicación de impacto en lugar de en el montón de descarte. Límite, una vez por ronda.",
 },
'Thrill Seeker': {
  'label': 'Buscador de Emociones',
  "description": "Siempre que ganes supervivencia durante la fase del enfrentamiento, gana 1 supervivencia adicional."
 },
 'Timeless Eye': {
  'label': 'Ojo Intemporal',
  "description": "Tu tirada de ataque es un <b>golpe perfecto</b> con un resultado de 9 o 10. No puedes usar Timeless Eye si tienes la lesión grave <b>ciego</b>."
 },
 'Tough': {
  'label': 'Resistente',
  "description": "Al tirar en una tabla de lesiones graves, a menos que saques un 1, suma +1 al resultado. (Esto no incluye traumatismos cerebrales. El resultado total no puede superar 10.)"
 },
 'Trailblazer': {
  'expansion': 'manhunter',
  'label': 'Pionero',
  "description": "El grupo de caza puede comenzar la caza a 1 espacio más cerca del monstruo. Al comienzo del enfrentamiento, todos los supervivientes ganan +1 de supervivencia y hasta +1 de cordura."
 },
 'Transcended Masochist': {
  'expansion': 'manhunter',
  'label': 'Masoquista Trascendental',
  "description": "Cuando ganes una ficha de hemorragia, gana +1 de supervivencia y +1 de cordura. Ignora los efectos de los trastornos <b>Aicmofobia</b> y <b>Apático</b>."
 },
 'Trick Attack': {
  'expansion': 'sunstalker',
  'label': 'Ataque Truco',
  "description": "Una vez por enfrentamiento, cuando hieras a un monstruo desde su punto ciego, un superviviente adyacente a ti puede ganar el token de <b>objetivo prioritario</b>."
 },
 'Tumble': {
  'label': 'Voltereta',
  "description": "Cuando algo colisionaría contigo, tira 1d10. Con un resultado de 6 o más, te apartas con éxito del peligro. En su lugar, coloca a tu superviviente de pie en el espacio libre más cercano fuera de la trayectoria de la colisión."
 },
 'Unbreakable': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Irrompible',
  "description": "Una vez por año de la linterna, puedes ignorar uno de tus resultados de tirada de lesión grave. Si lo haces, obtén un trastorno aleatorio."
 },
 'Unconscious Fighter': {
  'label': 'Luchador Inconsciente',
  "description": "Se necesitan 7 fichas de hemorragia para matarte."
 },
 'Unrelenting': {
  'expansion': 'lion god',
  'label': 'Incansable',
  "description": "Si todos tus tiros de ataque en un ataque fallan, puedes gastar 1 supervivencia para volver a tirar todos los tiros de ataque."
 },
 'Vengeance': {
  'expansion': 'spidicules',
  'label': 'Venganza',
  "description": "Cuando un superviviente muere durante el enfrentamiento, gana +4 de supervivencia y +1 ficha de fuerza."
 },
 'Wardrobe Expert': {
  'expansion': 'lion knight',
  'label': 'Experto en Armario',
  "description": "Cuando sufres una lesión grave en una ubicación de impacto, puedes archivar un equipo llevado en esa ubicación para ignorarla y ganar +1 de supervivencia."
 },

 'Quick Strike': {
	 'label': 'Ataque Rápido',
  'expansion': 'allison ccg',
  "description": "Durante tu acto, puedes gastar {imagen@images/icons/movement} y {imagen@images/icons/activation} para moverte completamente hacia adelante en línea recta. Si lo haces y te moviste 5+ espacios con los últimos 2 espacios de movimiento adyacentes al monstruo, tira 1d10. Con un resultado de 5 o más, coloca al superviviente en el punto ciego del monstruo y el monstruo sufre 1 herida. De lo contrario, gana 2 fichas de hemorragia."
 },

 'Graceful Retreat': {
	  'label': 'Retiro Elegante',
  'expansion': 'drifter knight',
  "description": "Siempre que <b>te lances</b>, ganas +1 ficha de evasión hasta el comienzo de tu próximo acto."
 },
 'Lethal Blood': {
	 'label': 'Sangre Letal',
  'expansion': 'drifter knight',
  "description": "Se necesita una ficha de hemorragia menos para matarte.<br/><br/>Mientras estés adyacente al monstruo, tiene una <b>toughness</b> de <b>-X</b> donde <b>X</b> es igual al número de fichas de hemorragia que tengas. ",
 },
 'Man of War': {
  'label': 'Hombre de Guerra',
  'expansion': 'drifter knight',
  "description": "Cuando ataques desde el punto ciego, en un <b>golpe perfecto</b>, puedes hacer que el monstruo se vuelva hacia ti.<br/><br/>Mientras estés en el frente del monstruo, tus ataques ganan +1 de fuerza."
 },
 'Veiled Strike': {
	 'label': 'Golpe Velado',
  'expansion': 'drifter knight',
  "description": "Cuando atacas con una lanza mientras estás en un espacio adyacente al punto ciego, se considera que estás en el punto ciego."
 },
}

module.exports = {
 texts,
}
