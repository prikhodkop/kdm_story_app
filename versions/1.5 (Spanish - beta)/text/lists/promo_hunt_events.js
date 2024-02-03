const promo_hunt_events = {
'baby and the sword': `* | Bebé y la Espada
Los sobrevivientes encuentran el cadáver de una mujer lleno de flechas. El cuerpo descansa en el centro de un patrón dibujado en sangre, un bebé gritando en una mano y una espada en la otra. ¡A medida que los sobrevivientes se acercan, un gusano masivo brota del suelo bloqueando su camino!

Los sobrevivientes pueden <b>agarrar y correr</b>!

[TO] Elección
[td] ¿Qué haces?
[c] Agarrar y correr
[d<]
[TO] 1d10
[td] Agarrar y Correr
[c] 1-2
[d<]
Desencadena el evento de caza del Cosechador (#10):

<button class="hunt_event_action_button hoverable" id="harvester" onClick="showRandomEvent(10)">Desencadenar evento #10</button>
[>d]
[c] 3-6
[d] ¡Entendido! El revelador del evento obtiene: 1 trastorno al azar y la <b>Espada del Silencio</b>, o +1 coraje y el equipo raro <b>Recién Nacido</b>.
[c] 7+
[d<]
Los sobrevivientes corren frenéticamente más allá del gusano. Cada sobreviviente obtiene 1 trastorno al azar. El grupo obtiene 1 <b>Recién Nacido</b> y 1 equipo raro <b>Espada del Silencio</b>. Luego, desencadena el evento de caza del Cosechador (#10).

<i>Elimina esta carta permanentemente del mazo de eventos de caza:</i>
<button class="hunt_event_action_button hoverable" id="fade" onClick="removePromoCard('fade')">Eliminar carta</button>
<div class="button_outcome" id="fade"> Carta eliminada del mazo.<br/><i>Puedes habilitarla nuevamente en el menú de <b>Configuración</b></i><br/><br/><button class="hunt_event_action_button hoverable" id="harvester" onClick="showRandomEvent(10)">Desencadenar evento #10</button></div>
[>d]
[T]
[>d]
[c] Irse
[dt] Tira un evento de caza al azar.`,

'dead warrior': `* | Guerrero Muerto
Los sobrevivientes se detienen a la distancia de un brazo de un esqueleto de una mano vestido con una antigua y oxidada armadura. Junto a él yace una extraña tablilla cubierta de inscripciones.

Si el asentamiento tiene <b>Pictogramas</b>, un sobreviviente con 3+ comprensión puede investigar.

[TO] Elección
[td] ¿Qué haces?
[c] Investigar
[d<]
[TO] 1d10
[td] Sobreviviente con 3+ comprensión
[c] 1
[d] Sientes un peligro extremo, advirtiendo a los demás, todos huyen a un lugar seguro. Si tienes una <b>mandíbula rota</b>, tu advertencia ininteligible cae en oídos sordos y todos los sobrevivientes son atacados por una fuerza invisible.
[c] 2+
[d<]
Aprendes de la tablilla. ¡Obtén el arte secreto de lucha <b>Estilo de la Guardia Negra</b>! Si algún sobreviviente tiene el trastorno honorable, el grupo pasa respetuosamente junto al esqueleto. De lo contrario, obtén 1 recurso básico <b>hueso</b>.

<i>Elimina la carta del mazo de eventos de caza permanentemente:</i>
<button class="hunt_event_action_button hoverable" id="percival" onClick="removePromoCard('percival')">Eliminar carta</button>
<div class="button_outcome" id="percival"> Carta eliminada del mazo.<br/><i>Puedes habilitarla nuevamente en el menú de <b>Configuración</b></i></div>

[>d]
[T]
[>d]
[c] Irse
[dt] Tira un evento de caza al azar.`,

'object of desire': `* | Objeto de Deseo
Los sobrevivientes ven un árbol a lo lejos, alzándose desde el horizonte como una mano desesperada y retorcida.

Los jugadores pueden nominar a un sobreviviente con 3+ coraje para <b>investigar</b>.

[TO] Elección
[td] ¿Qué haces?
[c] Investigar
[d<]

Agrega la carta de terreno <b>Árbol Solitario</b> a la configuración del enfrentamiento y tira 1d10.

[TO] 1d10
[td] Sobreviviente nominado
[c] 1-3
[d] Te retiran del resto de la Fase de Caza. Comienza el enfrentamiento derribado junto al Árbol Solitario y con un token de <b>objetivo prioritario</b>.
[c] 4+
[dt] Hay algo inquietante en ese árbol. Sufre 2 puntos de daño cerebral y comienza el enfrentamiento junto al Árbol Solitario.
[>d]
[c] Irse
[dt] Tira un evento de caza al azar.`,

'sword in the stone': `* | Espada en la Piedra
Cubierta con capas descascaradas de sangre seca, un obelisco sobresale del suelo. Desde su centro sobresale una empuñadura prístina. Nombra a un sobreviviente para que la alcance. Tira 1d10 y suma su destreza con la espada al resultado de la tirada.

[TO] 1d10 + destreza con la espada del sobreviviente nominado
[td] Sobreviviente nominado
[c] 1
[d] Mientras tu mano agarra la empuñadura, las arterias de tus brazos se retuercen y estallan. Muerto.
[c] 2-4
[d] Arrastras la espada, pero vuelve a golpear la piedra con una fuerza aplastante. Sufre 2 puntos de daño de evento en la ubicación de los brazos.
[c] 5-9
[c] 

10+
[d<]

La espada se desliza, latiendo la sangre en tus oídos. Obtén el equipo raro <b>Excalibur</b>. Agrega la carta de evento de asentamiento <b>Cazador de Espadas</b> al mazo de eventos de asentamiento y elimina esta carta de la caja del juego.

<i>Elimina la carta del mazo de eventos de caza permanentemente:</i>
<button class="hunt_event_action_button hoverable" id="sword hunter" onClick="removePromoCard('sword hunter - hunt event')">Eliminar carta</button>
<div class="button_outcome" id="sword hunter - hunt event"> Carta eliminada del mazo.<br/><i>Puedes habilitarla nuevamente en el menú de <b>Configuración</b></i></div>
[>d]
[dt]`,

}

module.exports = {
  promo_hunt_events,
}