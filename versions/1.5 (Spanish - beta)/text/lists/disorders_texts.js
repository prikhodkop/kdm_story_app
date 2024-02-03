const texts = {
 'Absent Seizures': {
  'expansion': 'gorm',
  'label': 'Convulsiones Ausentes',
  "description": "La primera vez que sufrirías un traumatismo cerebral en cada enfrentamiento, en su lugar, quedas derribado y olvidas un arte de lucha (borralo).",
 },
 'Aichmophobia': {
  'expansion': 'dragon king',
  'label': 'Aicmofobia',
  "description": "No puedes activar o <b>partir</b> con hachas, espadas, lanzas, dagas, guadañas o katars en tu cuadro de equipo.",
 },
 'Anxiety': {
   'label': 'Ansiedad',
  "description": "Al comienzo de cada enfrentamiento, obtén el token de <b>objetivo prioritario</b> a menos que tengas equipo <b>apestoso</b> en tu cuadro de equipo.",
 },
 'Apathetic': {
   'label': 'Apatía',
  "description": "No puedes usar ni ganar supervivencia. No puedes ganar coraje. Cura este trastorno si tienes 8+ comprensión.",
 },
 'Arithmophilia': {
  'expansion': 'dragon king',
  'label': 'Arithmofilia',
  "description": "Cuando obtienes este trastorno, tira 1d5. Tu movimiento es ese número.",
 },
 'Binge Eating': {
   'label': 'Atracón',
  "description": "No puedes <b>partir</b> a menos que tengas equipo <b>consumible</b> en tu cuadro de equipo. Debes consumir si surge una elección de consumir.",
 },
 'Controlophobia': {
  'expansion': 'spidicules',
  'label': 'Controlofobia',
  "description": "Mientras eres el controlador del monstruo, duplica cualquier daño que sufras.",
 },
 'Coprolalia': {
   'label': 'Coprolalia',
  "description": "Todo tu equipo es <b>ruidoso</b>. Siempre eres una amenaza a menos que estés derribado, incluso si un efecto dice lo contrario.",
 },
 'Delicious': {
  'expansion': 'lion god',
  'label': 'Delicioso',
  "description": "Sigues siendo considerado una amenaza cuando estás derribado (a menos que uses un efecto que diga lo contrario).",
 },
 'Destined': {
  'expansion': 'dragon king',
  'type': 'rasgo de dragón',
  'label': 'Destinado',
  "description": "Si no <b>partes</b>, pierdes toda la supervivencia y la cordura.",
 },
 'Emotionless': {
  'expansion': 'sunstalker',
  'label': 'Sin Emoción',
  "description": "No puedes ganar fichas de +1 fuerza.",
 },
 'Enfeebled': {
  'expansion': 'lion god',
  'label': 'Debilitado',
  "description": "Se necesita una ficha de sangrado menos para matarte.",
 },
 'Fear of the Dark': {
   'label': 'Miedo a la Oscuridad',
  "description": "Te retiras. Si obtienes este trastorno durante una caza o enfrentamiento, pones un rostro valiente hasta que regreses al asentamiento, jurando nunca dejar el Tesoro de la Linterna de nuevo.",
 },
 'Flower Addiction': {
  'expansion': 'flower knight',
  'label': 'Adicción a las Flores',
  "description": "Solo puedes <b>partir</b> para cazar al Caballero de las Flores. Después de <b>partir</b>, cura este trastorno.",
 },
 'Ghostly Beauty': {
  'expansion': 'flower knight',
  'label': 'Belleza Fantasmal',
  "description": "Duplica toda la cordura que ganas. Duplica toda la supervivencia que gastas.",
 },
 'Hemophobia': {
   'label': 'Hemofobia',
  "description": "Durante el enfrentamiento, cada vez que un superviviente <i>(incluyéndote a ti)</i> gane un ficha de sangrado, quedas derribado.",
 },
 'Hoarder': {
   'label': 'Acaparador',
  "description": "Siempre que seas un <b>superviviente que regresa</b>, archiva 1 recurso obtenido del enfrentamiento y gana +1 coraje.",
 },
 'Honorable': {
   'label': 'Honorable',
  "description": "No puedes atacar a un monstruo desde su punto ciego ni si está derribado.",
 },
 'Hyperactive': {
   'label': 'Hiperactivo',
  "description": "Durante el enfrentamiento, debes moverte al menos 1 espacio cada ronda.",
 },
 'Immortal': {
   'label': 'Inmortal',
  "description": "Mientras estés cuerdo, convierte todo el daño infligido a tus lugares de impacto en daño cerebral. Estás tan ocupado celebrando tu propia gloria que no puedes gastar supervivencia mientras estés cuerdo.",
 },
 'Indecision': {
   'label': 'Indecisión',
  "description": "Si eres el revelador de eventos de caza que te llaman a hacer una tirada, tira dos veces y usa el resultado más bajo.",
 },
 'Megalophobia': {
  // 'expansion': 'gorm',
  'label': 'Megalofobia',
  "description": "No puedes <b>partir</b> para cazar o enfrentar a monstruos que ocupen más de 4 espacios en el tablero de enfrentamiento.",
 },
 'Monster Panic': {
   'label': 'Pánico a los monstruos',
  "description": "Siempre que sufras daño cerebral de una acción de <b>Intimidación</b>, sufre 1 daño cerebral adicional.",
 },
 'Motion Sickness': {
  'expansion': 'dung beetle knight',
  'label': 'Mareo por Movimiento',
  "description": "Cada vez que sufras un <b>empujón</b>, gana 1 ficha de sangrado.",
 },
 'Narcissistic': {
  'expansion': 'flower knight',
  'label': 'Narcisista',
  "description": "No puedes llevar armadura en la ubicación de la cabeza. Si estás llevando armadura en la ubicación de la cabeza cuando obtienes este trastorno, archívala.",
 },
 'Overprotective': {
  'expansion': 'sunstalker',
  'label': 'Sobreprotector',
  "description": "Cuando un superviviente adyacente es derribado, tú también quedas derribado mientras corres en su ayuda.",
 },
 'Performance Anxiety': {
  'expansion': 'lion knight',
  'label': 'Ansiedad de Actuación',
  "description": "No puedes ser nominado para <b>Intimidad</b>. Cura este trastorno si tienes 8+ coraje.",
 },
 'Post-Traumatic Stress': {
   'label': 'Estrés Postraumático',
  "description": "En la próxima fase del asentamiento, no contribuyes ni participas en ningún esfuerzo. Salta la próxima caza para recuperarte.",
 },
 'Prey': {
   'label': 'Presas',
  "description": "No puedes gastar supervivencia a menos que estés cuerdo.",
 },
 'Prima Donna': {
  'expansion': 'lion knight',
  'label': 'Prima Donna',
  "description": "En cada turno de superviviente, debes realizar tu acto primero <i>(tirada en cada turno si varios supervivientes tienen este trastorno)</i>.",
 },
 'Quixotic': {
   'label': 'Quijotesco',
  "description": "Si estás cuerdo cuando <b>partes</b>, gana +1 supervivencia y +1 ficha de fuerza.",
 },
 'Rageholic': {
   'label': 'Rabioso',
  "description": "Siempre que sufras una herida grave, también sufre el traumatismo cerebral de <b>frenesí</b>.",
 },
 'Revenge': {
  'expansion': 'spidicules',
  'label': 'Venganza',
  "description": "Cuando un superviviente muere durante el enfrentamiento, sufre el traumatismo cerebral de <b>Frenesí</b>.",
 },
 'Secretive': {
   'label': 'Secreto',
  "description": "Cuando eres un <b>superviviente que regresa</b>, te ocupas rápidamente de tus propios asuntos. Debes saltarte la próxima caza para ocuparte de ellos.",
 },
 'Seizures': {
   'label': 'Convulsiones',
  "description": "La primera vez que sufrirías un traumatismo cerebral en cada enfrentamiento, en su lugar, quedas derribado y olvidas un arte de lucha <i>(borralo)</i>.",
 },
 'Shallow Lungs': {
  'expansion': 'lion knight',
  'label': 'Pulmones Superficiales',
  "description": "Cuando <b>animes</b>, quedas derribado.",
 },
 'Spiral Ganglia': {
  'expansion': 'slenderman',
  'label': 'Ganglios Espirales',
  "description": "Al comienzo del enfrentamiento, obtén la tarjeta de estado de superviviente <b>Conciencia de la Oscuridad</b>.",
 },
 'Squeamish': {
   'label': 'Sensible',
   "description": "No puedes <b>partir</b> con ningún equipo <b>apestoso</b> en tu cuadro de equipo. Si un estado o efecto te hace oler mal, pierdes toda tu supervivencia.",
 },
 'Stage Fright': {
  'expansion': 'lion knight',
  'label': 'Miedo Escénico',
  "description": "Siempre que te vuelvas <b>condenado</b> o ganes el token de <b>objetivo prioritario</b>, pierdes 1 supervivencia.",
 },
 'Stark Raving': {
  'expansion': 'lion god',
  'label': 'Completamente Loco',
  "description": "Siempre estás <b>loco</b>, independientemente de tu cordura.",
 },
 'Sun-Drunk': {
  'expansion': 'sunstalker',
  'label': 'Ebrio de Sol',
  "description": "Cuando tengas fichas de +1 fuerza, no puedes <b>correr</b>, <b>esquivar</b> o <b>Huir</b>.",
 },
 'Superstitious': {
  'expansion': 'dragon king',
  'label': 'Supersticioso',
  "description": "No puedes activar o <b>partir</b> con equipo <b>otro</b> en tu cuadro de equipo.",
 },
 'Tiny Arachnophobia': {
  'expansion': 'spidicules',
  'label': 'Aracnofobia Minúscula',
  "description": "No puedes llevar ningún equipo con la palabra clave ámbar. No puedes ganar ningún recurso con la palabra clave seda.",
 },
 'Traumatized': {
   'label': 'Traumatizado',
   "description": "Siempre que termines tu turno adyacente a un monstruo, quedas derribado.",
 },
 'Tunnel Vision': {
  'expansion': 'lion god',
  'label': 'Visión de Túnel',
  "description": "Cuando gastes {imagen@images/icons/activation}, solo puedes activar armas.",
 },
 'Unlucky': {
  'expansion': 'lion knight',
  'label': 'Desafortunado',
  "description": "No puedes herir críticamente.",
 },
 'Vermin Obsession': {
  'expansion': 'dung beetle knight',
  'label': 'Obsesión por los Roedores',
  "description": "Mientras haya una casilla de terreno de <b>Parche de Insectos</b> en el tablero de enfrentamiento, estás tan abrumado que estás <b>condenado</b>.",
 },
 'Vestiphobia': {
   'label': 'Vestifobia',
   "description": "No puedes llevar armadura en la ubicación del cuerpo. Si llevas armadura en la ubicación del cuerpo cuando obtienes este trastorno, archívala mientras la arrancas de tu persona.",
 },
 'Weak Spot': {
   'label': 'Punto Débil',
   "description": "Cuando obtienes este trastorno, tira una ubicación de impacto al azar y regístrala. No puedes <b>partir</b> a menos que tengas armadura en esta ubicación de impacto.",
 },

 'Contact Electrification': {
  'expansion': 'storm knight',
  'label': 'Electrización por Contacto',
  "description": "Siempre que el <b>empujón</b> te haría chocar con otro superviviente, detén el movimiento del <b>empujón</b>. Ambos supervivientes se colocan a un espacio a la izquierda o derecha del punto de colisión. Sufren 1 daño en una ubicación al azar y quedan <b>derribados</b> por la descarga electrostática.",
 },
 'Static Conductor': {
  'expansion': 'storm knight',
  'label': 'Conductor Estático',
  "description": "Siempre que sufras daño en la ubicación de las <b>Piernas</b>, quedas <b>derribado</b> y sufres <b>empujón 3</b>.",
 },

 'Impetuous': {
'label':'Impetuoso',
  'expansion': 'allison ccg',
  "description": "<i style='color:#aaa;'>Tu exceso de confianza es tu debilidad.</i><br/><br/>Siempre debes <b>partir</b>, a menos que te veas obligado a saltar la próxima caza.<br/>Si <b>te retiras</b>, preferirías enfrentar el exilio. Estás muerto.",
 },

 'Enervated System': {
  'label':'Sistema Enervado',
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Tu sistema nervioso central ha sido destrozado.</i><br/><br/>En <b>Llegada</b>, agrega +1 a cada ubicación de impacto.<br/>No puedes ganar fichas de atributos positivos. Si lo hicieras, sufre 1 daño en una ubicación de impacto al azar en su lugar.",
 },
 'Misaligned Chakras': {
	 'label':'Chakras Desalineados',
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Tu equilibrio natural ha sido desequilibrado.</i><br/><br/>Mientras tengas este trastorno, tienes -1 evasión y -1 precisión.<br/>Cuando tires en una tabla de eventos, tira dos veces y quédate con el resultado más bajo.",
 },
 'Morbid Curiosity': {
	  'label':'Curiosidad Mórbida',
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Tu sed de conocimiento es insaciable.</i><br/><br/>Debes investigar si surge la oportunidad de hacerlo.<br/>Siempre que se nomine a un superviviente al azar para tirar en una tabla, en su lugar, se te nomina a ti.",
 },
 'Respectful': {
	 'label':'Respetuoso',
  'expansion': 'drifter knight',
  "description": `<i style='color:#aaa;'>Sientes un gran respeto por las bestias que cazas, y nunca las deshonrarías.</i><br/><br/>Solo puedes atacar estando en la línea de visión del monstruo. Si lo haces, ganas +1 fuerza para ese ataque.`,
 },
 'Toxiphobia': {
	 'label':'Toxifobia',
  'expansion': 'drifter knight',
  "description": `<i style='color:#aaa;'>¿Es seguro comer eso? ¿Estás seguro?</i><br/><br/>Siempre que <b>consumas</b>, tira 1d10.<br/>En un resultado de 1-5, sufre daño cerebral igual al resultado de la tirada. En un resultado de 6 o más, gana cordura igual al resultado de la tirada.`,
 },
}

module.exports = {
 texts,
}
