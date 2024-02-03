const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Acanthus Doctor': {
  'expansion': 'flower knight',
  'label': 'Doctor Acanthus',
  "description": "Puedes llevar hasta 3 cartas de equipo <b>satchel</b>. Cuando <b>partes</b>, si no llevas ninguna armadura, por cada afinidad verde que tengas, obtienes un token de fuerza adicional y añades 1 armadura a todas las ubicaciones de golpe. Gasta {image@images/icons/activation} y un recurso de Flor o <b>Acanthus Fresco</b> para curar una herida permanente que tú o un superviviente adyacente hayan sufrido en este enfrentamiento.",
 },
 'Ageless Apprentice': {
  'expansion': 'lion knight',
  'label': 'Aprendiz Eterno',
  "description": "Cuando ganas PX de Caza, puedes optar por no ganarlos. Cuando <b>partes</b>, puedes rotar hasta 3 cartas de equipo en tu cuadrícula de equipo. Esto cambia la ubicación de sus afinidades y flechas. De lo contrario, el equipo funciona normalmente.",
 },
 'Altered Destiny': {
  'expansion': 'dragon king',
  'label': 'Destino Alterado',
  "description": "Si obtuvieras un token de atributo negativo, en su lugar obtienes un token de atributo positivo de ese tipo.",
 },
 'Beast of Caratosis': {
   'label': 'Bestia de Caratosis',
  "description": "Puedes <b>concentrarte</b>. Si lo haces, realiza <b>Bestia de Caratosis</b> al comienzo de tu próximo acto: Coloca a tu superviviente adyacente al monstruo. Activa un arma en tu cuadrícula y ataca al monstruo. Para este ataque, tu velocidad de ataque es igual a tus afinidades rojas, impactas automáticamente y obtienes fuerza igual al doble de tus afinidades rojas. Luego, obtén +6 PX de Caza.",
 },
 'Beetle Strength': {
  'expansion': 'dung beetle knight',
  'label': 'Fuerza del Escarabajo',
  "description": "Una vez por enfrentamiento, puedes gastar {image@images/icons/activation} para empujar un terreno de obstáculo adyacente. Si lo haces, mueve el terreno en línea recta lejos de ti hasta que encuentre un borde del tablero u otro terreno de obstáculo. Cualquier monstruo que pase por encima del terreno sufre una herida, y cualquier superviviente con el que <b>colisione</b> sufre un <b>empujón 7</b>.<br/><br/>La exhibición de fuerza es tan agotadora que te envejece. Quedas derribado y obtienes +1 PX de Caza.",
 },
 'Black Guard Style': {
  'whitebox': 'percival',
  'label': 'Estilo de la Guardia Negra',
  "description": "Las espadas en tu cuadrícula de equipo obtienen <b>Bloqueo 1</b>. Cuando bloqueas un golpe con una espada, tu próximo ataque en esa ronda con una espada obtiene +2 precisión, +2 fuerza, +2 velocidad. Límite, una vez por ronda.<br/><br/>Durante la fase de asentamiento, puedes gastar {image@images/icons/endeavors} para entrenar a un superviviente. Obtienen el arte secreto de lucha <b>Estilo de la Guardia Negra</b>. Tú lo pierdes y sufres la lesión grave de <b>húmero roto</b>.",
 },
 'Bone Whisperer': {
   'label': 'Susurrador de Huesos',
  "description": "Cuando otro superviviente muere en el tablero del enfrentamiento, coloca un token donde murió. Si pasas por encima, quita el token y come su cráneo.<br/><br/> <b>Curas</b> a tu superviviente y <b>tira 1d10 + tus PX de Caza</b> en la tabla:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">¡Te sientes increíble! Obtén +1 movimiento permanente, velocidad y evasión.</div><br/><b style=\"color:#cc0;\">4-8</b>: <div style=\"font-size:0.9em;display: inline;\">Obtén +1 fuerza permanente.</div><br/><b style=\"color:#cc0;\">9-18</b>: <div style=\"font-size:0.9em;display: inline;\">Obtén un arte de lucha y + supervivencia.</div><br/><b style=\"color:#cc0;\">19+</b>: <div style=\"font-size:0.9em;display: inline;\">Huyes al exilio. Al final del enfrentamiento, desapareces para siempre.</div>",
 },
 'Clarity of Darkness': {
  'expansion': 'slenderman',
  'label': 'Claridad de la Oscuridad',
  "description": "Al comienzo del enfrentamiento, obtén la carta de estado de superviviente <b>Camino de la Penumbra</b>. Hay una presencia mortal y ultraterrenal en ti. Otros supervivientes no pueden terminar voluntariamente su movimiento adyacente a ti.",
 },
 'Courtly Screenwriter': {
  'expansion': 'lion knight',
  'label': 'Guionista Cortesano',
  "description": "Al comienzo del enfrentamiento, escribe en secreto en un trozo de papel qué supervivientes vivirán y quién dará el golpe mortal. Durante las consecuencias, si tus predicciones fueron correctas, aumenta el Límite de Supervivencia del asentamiento en 1.",
 },
 'Death Touch': {
  'expansion': 'spidicules',
  'label': 'Toque de la Muerte',
  "description": "Obtén +1 precisión al atacar con Puño y Diente. Cuando hieres a un monstruo, obtiene -1 resistencia hasta el final de tu ataque. No puedes usar esto si eres un hombre.",
 },
 'Eternal Will': {
  'expansion': 'manhunter',
  'label': 'Voluntad Eterna',
  "description": "Obtén +1 precisión y +1 fuerza por cada lesión permanente que tengas. Siempre puedes <b>partir</b>, incluso cuando te retires.",
 },
 'Fencing': {
  'expansion': 'flower knight',
  'label': 'Esgrima',
  "description": "Ignora la <b>Parada</b> al intentar herir ubicaciones de golpe. (Intenta herir estas ubicaciones normalmente). Cuando un monstruo te ataca, tira 1d10. Con un 6+, ignora 1 golpe. Límite, una vez por ronda.",
 },
 'Frozen Star': {
  'expansion': 'dragon king',
  'type': 'rasgo de dragón',
  'label': 'Estrella Congelada',
  "description": "Una vez por ronda, puedes gastar 1 supervivencia para congelar el cerebro de un monstruo. Obtienen -2 precisión hasta el final de la ronda.<br/><br/>Una vez por ronda, puedes gastar 1 supervivencia para congelar el cerebro de un superviviente, matándolos instantáneamente. Mueren.",
 },
 'Grace of Dormenatus': {
   'label': 'Gracia de Dormenatus',
  "description": "Puedes <b>concentrarte</b>. Si lo haces, realiza <b>Gracia de Dormenatus</b> al comienzo de tu próximo acto: Todos los supervivientes obtienen armadura en todas las ubicaciones de golpe igual a tus afinidades verdes. Pueden quitar hasta la misma cantidad de tokens. Luego, obtén +6 PX de Caza. Si aún existes, obtén el token de objetivo prioritario.",
 },
 'Hellfire': {
  'expansion': 'sunstalker',
  'label': 'Fuego Infernal',
  "description": "No puedes perder ni quitar este arte de lucha. Obtén +1 fuerza por cada afinidad roja que tengas. No puedes ser nominado para el evento de <b>Intimidad</b> "+event_img+". Ignoras el <b>Calor Extremo</b>. Al comienzo de tu acto, pierdes 1 supervivencia. Al final de tu acto, si tu supervivencia es 0 o tienes cualquier token de +1 fuerza, tus órganos se cocinan y mueres.",
 },
 'Immovable Object': {
  'expansion': 'gorm',
  'label': 'Objeto Inamovible',
  "description": "Si estás en un espacio desocupado, te mantienes firme ante cualquier fuerza. No puedes ser derribado y puedes ignorar <b>empujón</b>. (Si ocupas el mismo espacio que un monstruo, una ficha de terreno intransitable o otro superviviente, eres derribado y sufres un empujón).",
 },
 'King of a Thousand Battles': {
   'label': 'Rey de Mil Batallas',
  "description": "Obtén +2 precisión, +2 fuerza, +2 evasión. Puedes <b>esquivar</b> cualquier número de veces en una ronda. Solo 1 superviviente puede tener este Arte de Lucha Secreto.",
 },
 'Kings Step': {
   'label': 'Paso del Rey',
  "description": "Cuando atacas, puedes descartar cualquier cantidad de ubicaciones de golpe de <b>Presión de Batalla</b> dibujadas y dibujar una cantidad igual de nuevas ubicaciones de golpe. Cuando atacas, después de dibujar ubicaciones de golpe, pero antes de tirar para herir, puedes elegir una ubicación de golpe dibujada y descartarla para dibujar una nueva ubicación de golpe. Las <b>Trampas</b> cancelarán estos efectos.",
 },
 'Legendary Lungs': {
   'label': 'Pulmones Legendarios',
  "description": "Una vez por ataque, por cada golpe exitoso, realiza un ataque adicional.",
 },
 'Lucernaes Lantern': {
   'label': 'Linterna de Lucernae',
  "description": "Puedes <b>concentrarte</b>. Si lo haces, realiza <b>Linterna de Lucernae</b> al comienzo de tu próximo acto: Revela ubicaciones de golpe igual a la mitad de tus afinidades azules (redondeado hacia abajo) una a la vez. El monstruo sufre una herida crítica en cualquier ubicación con efectos de herida crítica (ignora los efectos de trampa). Luego, vuelve a barajar la baraja de ubicaciones de golpe. Obtén +6 PX de Caza.",
 },
 'Necromancer': {
  'expansion': 'lion god',
  'label': 'Nigromante',
  "description": "Cuando <b>partes</b>, obtén +1 armadura en todas las ubicaciones de golpe por cada carta de equipo en tu cuadrícula con la palabra clave de símbolo.<br/><br/>Si deberías tirar en la tabla de <b>Lesiones Graves</b>, tira en la tabla de <b>Trauma de Gusano</b> en su lugar <i>(las lesiones graves especificadas permanecen sin cambios)</i>:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">Un chorro de sangre y plata. <b>Muerto</b>.</div><br/><b style=\"color:#cc0;\">4-5</b>: <div style=\"font-size:0.9em;display: inline;\">La bobina del gusano se tensa bruscamente. Obtén 2 tokens de sangrado y un token de evasión -1.</div><br/><b style=\"color:#cc0;\">6-7</b>: <div style=\"font-size:0.9em;display: inline;\">Un golpe mareante. Obtén 1 token de sangrado y 1d5 de cordura.</div><br/><b style=\"color:#cc0;\">8</b>: <div style=\"font-size:0.9em;display: inline;\">Una voz inhumana grita en tus huesos. Obtén 1 token de sangrado y 1d5 de cordura.</div><br/><b style=\"color:#cc0;\">9</b>: <div style=\"font-size:0.9em;display: inline;\">¡El dolor es enloquecedor! Obtén 1 token de sangrado y un token de fuerza +1.</div><br/><b style=\"color:#cc0;\">10</b>: <div style=\"font-size:0.9em;display: inline;\">El metal fundido sale de tu boca. Quedas derribado y obtienes 1 recurso extraño <b>Hierro</b>.</div>",
 },
 'Red Fist': {
   'label': 'Puño Rojo',
  "description": "Al comienzo de cada enfrentamiento, cada superviviente obtiene +1 token de fuerza. Los supervivientes pueden gastar tokens de fuerza +1 en lugar de supervivencia.",
 },
 'Scholar of Death': {
   'label': 'Erudito de la Muerte',
  "description": "En <b>Llegada</b>, selecciona al azar 1 de tus acciones de supervivencia. Para esa acción, te cuesta 1 supervivencia menos realizarla durante el resto del enfrentamiento.",
 },
 'Silk Surgeon': {
  'expansion': 'spidicules',
  'label': 'Cirujano de Seda',
  "description": "<b style=\"color:#cc0;\">Rango 1</b>: Puedes gastar {image@images/icons/activation} estando adyacente a otro superviviente para agregar 2 armaduras a una de sus ubicaciones de golpe.<br/><b style=\"color:#cc0;\">Rango 2</b>: Cuando todo el equipo en tu cuadrícula es de seda y toda la joyería es de ámbar, obtén +2 evasión.<br/><b style=\"color:#cc0;\">Rango 3</b>: Durante las consecuencias, tira 1d10 por cada otro superviviente que murió durante el enfrentamiento. Con un 7+, revívelos.",
 },
 'Sun Eater': {
  'expansion': 'sunstalker',
  'label': 'Devorador de Sol',
  "description": "Tu cuerpo absorbe misteriosamente la luz. Al comienzo del enfrentamiento, obtén supervivencia hasta el Límite de Supervivencia del asentamiento. Si tienes tokens de +1 fuerza, puedes gastarlos todos para realizar la acción de supervivencia <b>Resurgir</b> (siguiendo todas sus reglas y restricciones normales).",
 },
 'Suppressed Shadow': {
  'expansion': 'sunstalker',
  'label': 'Sombra Suprimida',
  "description": "Ya no proyectas una sombra y nunca dudas. Ignora el <b>Primer Ataque</b>. En un golpe <b>Perfecto</b>, tu primer intento de herida del ataque tiene éxito automáticamente e inflige una herida crítica. Si mueres durante el enfrentamiento, coloca un secuaz de Sombra en el espacio que ocupabas.",
 },
 'Swordsmans Promise': {
   'label': 'Promesa del Espadachín',
  "description": "Al comienzo de cada enfrentamiento, obtén supervivencia hasta el Límite de Supervivencia del asentamiento si tienes una espada en tu cuadrícula de equipo.",
 },
 'Synchronised Strike': {
   'label': 'Golpe Sincronizado',
  "description": "Con una coordinación impecable, golpeas como uno solo.<br/><br/>Cuando estás <b>adyacente</b> a un monstruo, atacas con un arma cuerpo a cuerpo y tienes una <b>Asistencia de Ataque</b>, tu ataque obtiene +1 Precisión, +1 Fuerza. Límite, una vez por ronda.<br/><br/><b>Asistencia de Ataque</b>: Un superviviente que también tiene <b>Golpe Sincronizado</b> y está en el lugar correcto. Está de pie adyacente al monstruo, en su lado opuesto y paralelo a ti.",
 },
 'True Blade': {
  'expansion': 'flower knight',
  'label': 'Hoja Verdadera',
  "description": "Todas las espadas en tu cuadrícula de equipo obtienen <b>letal</b>. Obtén +3 suerte al atacar con una espada si tienes los trastornos <b>Belleza Fantasmal</b> y <b>Narcisista</b>.",
 },
 'Zero Presence': {
   'label': 'Presencia Cero',
  "description": "Obtén +1 fuerza al atacar a un monstruo desde su punto ciego. Siempre se te considera en el punto ciego del monstruo cuando lo atacas.",
 },

 'Cloud Walk': {
  'expansion': 'storm knight',
  "description": "Una vez por enfrentamiento, obtén +1{image@images/icons/movement} y gástalo inmediatamente para moverte completamente en cualquier dirección en cualquier momento. Este movimiento puede usarse mientras estés <b>Condenado</b>. El superviviente puede moverse a través de terrenos intransitables y espacios ocupados sin causar colisiones.",
 },
 'High Frequency Agility': {
  'expansion': 'storm knight',
  "description": "Cuando te quedes sin supervivencia, tira 1d10. Con un 7+, obtén +1{image@images/icons/activation} y un token de velocidad +1 al comienzo de tu próximo acto.",
 },
 'Mutual Induction': {
  'expansion': 'storm knight',
  "description": "Al comienzo de tu acto, si tienes 0 supervivencia, tira 1d10. Con un 6+, obtén un token de <b>Carga</b> que se puede colocar en esta carta o en cualquier equipo que use tokens de <b>Carga</b>. Cuando estés <b>derribado</b>, quita todos los tokens de <b>Carga</b> de esta carta.<br/><br/>Cuando esta carta tenga 3+ tokens de <b>Carga</b>, puedes quitarlos todos para obtener +1 supervivencia y un token de movimiento +1.",
 },

 'Survivorship': {
  'expansion': 'allison ccg',
  "description": "En la <b>Llegada</b>, selecciona al azar 1 de tus acciones de supervivencia. Para esa acción, te cuesta 1 supervivencia menos realizarla durante el resto del enfrentamiento.",
 },
 'Drifting Dance': {
  'expansion': 'caballero errante',
  "description": "Cuando saques una carta de trampa mientras atacas con un arma que has alcanzado ya sea especialización o maestría, puedes sufrir 1d10+3 de daño cerebral para cancelar la trampa. Si lo haces, mézclala de nuevo en la baraja de ubicaciones de golpe y trata de herir las ubicaciones de golpe previamente sacadas normalmente.<br/><br/>Límite, una vez por enfrentamiento.",
 },
}

module.exports = {
 texts,
}
