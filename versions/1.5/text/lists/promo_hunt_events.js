const promo_hunt_events = {
'baby and the sword': `* | Baby and the Sword
The survivors find a woman\'s corpse riddled with arrows. The body rests in the center of a pattern drawn in blood, a screaming infant in one hand and sword in the other. As the survivors approach, a massive worm bursts from the ground blocking their way!

The survivors may <b>grab and dash</b>!

[TO] Choice
[td] What do you do?
[c] Grab and dash
[d<]
[TO] 1d10
[td] Grab and Dash
[c] 1-2
[d<]
Trigger the Harvester hunt event (#10):

<button class="hunt_event_action_button hoverable" id="harvester" onClick="showRandomEvent(10)">Trigger event #10</button>
[>d]
[c] 3-6
[d] Got it! The event revealer gains: 1 random disorder and the <b>Sword of Silence</b>, or +1 courage and the <b>Newborn</b> rare gear.
[c] 7+
[d<]
The survivors madly dash past the worm. Each survivor gains 1 random disorder. The group gains 1 <b>Newborn</b> and 1 <b>Sword of Silence</b> rare gear. Then. trigger the Harvester hunt event (#10).

<i>Remove this card from the hunt event deck permanently:</i>
<button class="hunt_event_action_button hoverable" id="fade" onClick="removePromoCard('fade')">Remove card</button>
<div class="button_outcome" id="fade"> Card removed from the deck.<br/><i>You may enable it again in the <b>Setttings</b> menu</i><br/><br/><button class="hunt_event_action_button hoverable" id="harvester" onClick="showRandomEvent(10)">Trigger event #10</button></div>
[>d]
[T]
[>d]
[c] Go away
[dt] Roll a random hunt event.`,

'dead warrior': `* | Dead Warrior
The survivors stop a man\'s length away from a one-handed skeleton clad in ancient, rusted armor. A strange tablet covered in inscriptions lies next to it.

If the settlement has <b>Pictographs</b>, a survivor with 3+ understanding may investigate.

[TO] Choice
[td] What do you do?
[c] Investigate
[d<]
[TO] 1d10
[td] Survivor with 3+ understanding
[c] 1
[d] You sense extreme danger, warning the others, everyone flees to safety. If you have a <b>broken jaw</b>. your garbled warning falls on deaf ears and all survivors are hacked by an unseen force.
[c] 2+
[d<]
You learn from the tablet. Gain the <b>Black Guard Style</b> secret fighting art! If any survivor has the honorable disorder, the group respectfully moves past the skeleton. Otherwise, gain 1 <b>bone</b> basic resource.

<i>Remove the card from the hunt event deck permanently:</i>
<button class="hunt_event_action_button hoverable" id="percival" onClick="removePromoCard('percival')">Remove card</button>
<div class="button_outcome" id="percival"> Card removed from the deck.<br/><i>You may enable it again in the <b>Setttings</b> menu</i></div>

[>d]
[T]
[>d]
[c] Go away
[dt] Roll a random hunt event.`,

'object of desire': `* | Object of Desire
The survivors see a tree in the distance, reaching up from the horizon like a desperate, gnarled hand.

Players may nominate a survivor with 3+ courage to <b>investigate</b>.

[TO] Choice
[td] What do you do?
[c] Investigate
[d<]

Add <b>Lonely Tree</b> terrain card to the showdown setup and roll 1d10.

[TO] 1d10
[td] Nominated survivor
[c] 1-3
[d] You are removed from the rest of the Hunt Phase. Start the showdown knocked down adjacent to the Lonely Tree and with <b>priority target</b> token.
[c] 4+
[dt] There is something unsetting about that tree. Suffer 2 brain damage and start the showdown adjacent to the Lonely Tree.-0
[>d]
[c] Go away
[dt] Roll a random hunt event.`,

}

module.exports = {
  promo_hunt_events,
}
