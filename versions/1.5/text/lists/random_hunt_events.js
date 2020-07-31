const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

const random_hunt_events = {
  1: `1 | Broken Lanterns
The survivors feel something crunching beneath their feet. The event revealer may choose to lower their lantern and <b>investigate</b> or ignore the sensation and continue their journey.

[TO] Choice
[td] Event revealer - What do you do?
[c] Investigate
[d<]

The event revealer gains +1 courage and rolls 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-5
[d] You fumble and cut your foot on a jagged shard. Suffer ★ event damage to your legs.
[c] 6-8
[d] You salvage something useful. Gain 1 <b>broken lantern</b> basic resource.
[c] 9+
[d] The survivors uncover a long abandoned lantern hoard. The forlorn sight fills them with dread, each survivor sets their insanity to 0. After composing themselves, each survivor scavenges 1 <b>broken lantern</b> basic resource; add them to settlement storage.
[T]

[>d]
[c] Ignore
[dt] Roll again on the hunt event table before moving on the hunt event board.
`,

  2: `2 | Corpse

[img] 2 # no-shadow

The survivors are overcome by a sudden chill, their breath seizing in their lungs. The survivors' teeth chatter mercilessly. All survivors lose ★ survival. At the center of the sudden frost is a perfectly preserved corpse.

[TA] Check
[td] What innovations does the settlement have?
[c] Cannibalize
[d] The event revealer gains 1 random basic resource.
[c] Graves
[d] The event revealer examines the corpse and gains +1 courage and +1 understanding.
[c] Memento Mori
[dt] The event revealer understands a little about what happened to the corpse. They gain 1 random fighting art.
`,

  3: `3 | Cancer Pigeons
The survivors are surrounded by the echoing coo of infant babble. Strange babyfaced birds circle overhead. Gripped with instinctual horror, the survivors break into a run! Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[i] If any survivor has <b>noisy</b> gear, -2 to their roll.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[d<]

Each straggler rolls 1d10.

[i] If any survivor has a whip, they crack it, scattering many of the birds. Each straggler adds +4 to their roll.

[TA] 1d10
[td] Straggler
[c] 1-3
[d] Running and flailing wildly, you suddenly find yourself panicked and alone. The waiting cancer pigeons descend and mercilessly peck your back, their happy cooing filling your head with horror. An hour later, the other survivors find you balled up and weeping on the ground. You are <b>Dead Inside</b>: You cannot gain survival. Record this impairment.
[c] 4-6
[d] A cancer pigeon latches onto your back! Shake it free by spending 1 survival. Otherwise, you are <b>Dead Inside</b>: You cannot gain survival. Record this impairment.
[c] 7-8
[d] You escape the terrible creatures.
[c] 9+
[dt] You manage to strike one of the foul creatures down. Gain 1 random basic resource.
[>d]
[T]`,

  4: `4 | Famine
The path ahead is arid and dead. You may press on or try to find a way around.

[TO] Choice
[td] What do you do?
[c] Press on, survivors gain +1 courage #Press on
[d<]

Your stomachs grumble in the dark as you stumble forward. The survivors pool their supplies. The event revealer rolls 1d10 and adds +2 to their roll for each consumable gear or resource the group has.

[TO] 1d10
[td] Event revealer
[c] 1-8
[d] The hunt takes its toll. Powerful hunger pangs set in. All survivors gain -1 speed token.
[c] 9-14
[d] You manage to stave off the terrible hunger.
[c] 15+
[dt] Everyone is invigorated by their snack. Each survivor gains +1 survival.

[>d]
[c] Go around
[dt] Roll again on the hunt event table before moving on the hunt board.
`,

  5: `5 | Flesh Fields
Ahead, the stone faces on the ground give way to a field of man-sized, fleshy boils sprouting thick black hair. The sinuous terrain radiates moist heat. As they travel, every survivor suffers heat exhaustion, losing 1 survival. The event revealer rolls 1d10.

[i] If any survivor has a sickle, they help clear a path by cutting back the thick, black hair. Add +4 to your roll.

[TO] 1d10
[td] Event revealer
[c] 1
[d<]

The event revealer contracts a flesh-eating disease brushing past the giant boils! A random limb is affected and must be amputated immediately!

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Suffer the <b>Dismembered arm</b> severe injury.
[c] 6-10
[dt] Suffer the <b>Dismembered leg</b> severe injury.

[>d]
[c] 2-3
[d] If any survivor is <b>insane</b>, they imagine the flesh fields are attacking! They become hysterical, flailing and tangling themselves in the thick hair. Each <b>insane</b> survivor suffers ★ event damage to a random location.
[c] 4-7
[d] It's hot and gross, but the survivors pass through the flesh fields with no complications.
[c] 8-9
[d] The event revealer makes the best of a bad situation and cuts a portion of the flesh free. Gain 1 <b>hide</b> basic resource.
[c] 10+
[d] Each survivor harvests 1 <b>hide</b> basic resource from the flesh fields.
[T]
`,

  6: `6 | Faceless Statue
The survivors come upon a faceless statue holding a shining lantern. Basking in the warm light, the survivors are renewed.

Each survivor gains 1 survival.

[TO] Check
[td] Does the settlement have Sculpture?
[c] Yes #Sculpture
[d<]

The survivors deeply appreciate the artist's subtle craftsmanship. Each survivor rolls 1d10. Gain that many survival and +1 understanding.

[TO] Check
[td] Are all survivors insane?
[c] Yes #All insane
[d] Survivors continue their hunt.
[c] No
[d<]

The survivors may rest here longer.

[TO] Choice
[td] Do you want to rest?
[c] Yes #Rest
[d] Each survivor heals all injury levels and lost armor points on 1 hit location. However, they lose track of their quarry. Move it 1 space away from the survivors on the hunt board. If a survivor heals more than 5 lost armor points this way, they stare into the shining light for too long and gain 1 random disorder.
[c] No
[dt] Survivors continue their hunt.

[>d]
[T]

[>d]
[c] No #
[d<]

[TO] Check
[td] Are all survivors insane?
[c] Yes #All insane
[d] Survivors continue their hunt.
[c] No #
[d<]

The survivors may rest here longer.

[TO] Choice
[td] Do you want to rest?
[c] Yes #Rest
[d] Each survivor heals all injury levels and lost armor points on 1 hit location. However, they lose track of their quarry. Move it 1 space away from the survivors on the hunt board. If a survivor heals more than 5 lost armor points this way, they stare into the shining light for too long and gain 1 random disorder.
[c] No #
[dt] Survivors continue their hunt.

[>d]
[T]

[>d]
[T]
`,

  7: `7 | Hungry Ground
The ground suddenly splits and a gaping stone mouth attempts to devour the event revealer whole! The event revealer rolls 1d10.

[i] If another survivor has a whip, they throw a line to the event revealer. Add +4 to your roll.

[TO] 1d10
[td] Event revealer
[c] 1
[d] With a muffled scream, you disappear into the ground. You manage to grab hold of a precarious ledge above the gaping maw. Lose all survival as you desperately climb up to safety. If you had none, you fall. Bones crunch between stone teeth. You are devoured whole. Dead.
[c] 2-5
[d] You scramble, but your leg is caught in the terrible maw. Suffer 2 event damage to the legs.
[c] 6-9
[d] You manage to leap away in time!
[c] 10+
[d] Burp! Gurgle! The floor vomits a shiny piece of scrap. Gain 1 <b>broken lantern</b> basic resource.
[T]
`,

  8: `8 | Wailing Smoke

[img] 8
A constant moan follows the survivors. Eventually, they enter an area shrouded in thick fog and the wailing reaches a fevered pitch.

Every <b>non-deaf</b> survivor rolls 1d10.

[TO] 1d10
[td] Determine straggler
[c] All survivors are <b>deaf</b>
[d] Survivors continue along, heedless to the cacophony: end this event.
[c] Straggler chosen
[d<]

The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

Each straggler rolls 1d10.

[i] If any survivor has <b>noisy</b> gear, the straggler adds +2 to their roll.

[TO] Check
[td] Does any survivor have <b>noisy</b> gear and does the settlement have <b>Drums</b>?
[c] Yes #Drums
[d] Survivors counter the wails with a tune from home. Each survivor gains +2 insanity and +2 survival.
[c] No #
[d<]

[TA] 1d10
[td] Straggler
[c] 1-3
[d] The fog around you turns black and fills with shapes of tormented faces. You are driven to madness. Gain 1 random disorder.
[c] 4-6
[d] The fog grows soupy and begins to wail. You plug your ears with your fingers, but it's hopeless. Suffer ★ brain event damage.
[c] 7-9
[d] You stick your thumbs into your ears and break into a run, leaving the wailing smoke.
[c] 10+
[dt] Mimicking the disturbing smoke, you calmly start to wail with it. Gain +2 insanity.

[>d]
[T]

[>d]
[T]
`,

  9: `9 | Golden Light
A golden light blinds the survivors, stopping them in their tracks. The light shines from a single source. The event revealer is compelled to <b>investigate</b>.
They gain +1 courage and roll 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] Event revealer is <b>blind</b>
[d] They walk in the wrong direction and gain +3 insanity. Roll again on the hunt event table and do not investigate the light.
[c] 1-3
[d] The light is overpowering. Your fragile mind cannot understand its soundless words. Gain 1 random disorder.
[c] 4-8
[d] You wander through the light, bathed in a warm, awful feeling. You don't find anything other than exposure. Suffer ★ event damage to a random hit location.
[c] 9+
[d] Something about the light stirs you, and your resolve intensifies. Gain +1 survival.
[T]
`,

  10: `10 | Harvester

[img] 10 # no-shadow # width:45%
<b>This event cannot be rerolled or avoided in any way.</b>
The ground quakes and cracks beneath the survivors. A colossal worm bursts from below, its skin a mosaic of screaming faces. The mere sight of it is maddening.
All survivors gain 1 random disorder and must spend 1 survival or be devoured whole.

[TO] Check
[td] Does any survivor have noisy gear?
[c] Yes #Survivor with noisy gear
[d<]

The Harvester is drawn to the sound and they are instantly devoured. Nothing can save them.

The creature is so horrifying that the survivors' brains erase the experience from their memories. Do not gain the benefits of your death principle.
[>d]
[c] No #
[d<]

The creature is so horrifying that the survivors' brains erase the experience from their memories. Do not gain the benefits of your death principle.

[>d]
[~T]
`,

  11: `11 | Monster Droppings
The survivors find some monster droppings, like those of their quarry. The event revealer chooses to either <b>investigate</b> or <b>consume</b> the droppings (choose only one).

[TO] Choice
[td] Event revealer - What do you do?
[c] Investigate #Investigate
[d<]

Gain +1 understanding and roll 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-3
[d] You discover just how sickening playing with feces is. Lose 1 survival and roll again on the hunt event table before moving on the hunt board.
[c] 4-6
[d] The droppings tell a story. You are on the right track. Gain +1 survival.
[c] 7+
[d] You know these droppings well. You may skip the next hunt space. If this move begins the showdown, the survivors <b>ambush</b> their quarry.
[T]

[>d]
[c] Consume #Consume
[d<]

Gain +1 courage and roll 1d10.

[TO] 1d10
[td] Event revealer - Consume
[c] 1-3
[d<]

It seems you weren't the only one with this idea! You attempt to cough out the refuse, but your mouth is full of wriggling parasites! They borrow upwards through your nasal cavity into your brain. From now on, you always feel slightly dizzy. Suffer -1 permanent evasion.
[i] In addition, if you have the <b>Quixotic</b> disorder, the parasites savor the unique neural activity of your brain, feeding relentlessly and excreting waste which further fuels your madness. Gain +10 insanity and the <b>Immortal</b> disorder. Your <b>Quixotic</b> disorder can never be removed for any reason.

[>d]
[c] 4-6
[d] It's repulsive. Your title becomes "Scat Man." Everyone in the settlement must call you by that name from now on.
[c] 7+
[d] There was something quite special about the feces. Gain + 1 speed and + 1 strength token.
[T]

[>d]
[T]
`,

  12: `12 | Destiny-Bound

[img] 12 # no-shadow

The survivors collectively feel a heightened level of anticipation. Their goal is close at hand.

The event revealer gains +1 courage! The survivors may skip the next hunt space. If this movement starts the showdown, the survivors <b>ambush</b> their quarry.
`,

  13: `13 | Overload
The event revealer falls to their knees, sobbing uncontrollably. They've simply had too much. They lose d10 survival and gain 1 random disorder.

[TO] Choice
[td] Which Society Principle does the settlement have?
[c] Accept Darkness
[d<]

The event revealer embraces their despair. Roll 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The depths of your misery are deeper than you could have ever imagined. Gain disorders until you have 3 of them. Lose all survival.
[c] 6+
[dt] You sink to the bottom of your misery then scrape its very foundations, hungry for more! You uncover a primal rage surrounding a core of serene calm. Gain +1 understanding and the <b>Rageholic</b> disorder.
[>d]
[c] Collective Toil
[d<]

They slowly pull themselves to their feet, promising to never give up hope. Roll 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] You rise, silent tears streaming down your face. with the settlement at your back, you are ready to face the darkness. Gain +1 courage and +1d10 survival.
[c] 6+
[dt] You briefly touch the bottom of your misery and return to full awareness with new experiences to share. If any survivors return to the settlement this year, gain +2`+endeavor_img+`.

[>d]
[c] No Society Principle
[dt] The survivors continue their hunt.
`,

  14: `14 | Chance Encounter

[img] 14

The survivors encounter a bewitching, barefoot waif with soot-covered feet.

[TO] Check
[td] Did you already roll this event or are all survivors insane?
[c] Yes #
[d] She turns her back and disappears into the darkness. Roll again on the hunt event table before moving on the hunt board.
[c] No #
[d<]

Exclaiming wildly at the survivors, the woman's presence fills everyone with the alien feeling of hope. All survivors gain +1 courage, +1 understanding.

[TO] Check
[td] Does the settlement have Hovel?
[c] Yes #Hovel
[d] She snaps her fingers and ages before their eyes! A chill passes over the survivors. Their bodies and armor spontaneously knit themselves back together. Heal all injury levels and lost armor points. Then, she pulls a random survivor aside and whispers secrets of the upcoming hunt. They gain +1 accuracy token.
[c] No #
[dt] She turns her back and disappears into the darkness.
[>d]
[T]
`,

  15: `15 | Man-trap

[img] 15 # no-shadow

The event revealer springs a terrible trap! Roll 1d10.
[TO] 1d10
[td] Event revealer
[c] 1-2
[d] With a terrible crash, the steel jaws of the man-trap cleanly sever your foot. Suffer the <b>dismembered leg</b> severe injury.
[c] 3-6
[d] Mangled leg. Destroy all armor at the legs location, then suffer 1 event damage to the legs.
[c] 7-9
[d] The trap is quite old and weak. Suffer 1 event damage to the legs.
[c] 10+
[d] The event revealer's foot knocks into the trap, giving everyone a scare! However, it was already sprung, leaving an unfortunate prize in its jaws. Gain 1 random basic resource.
[T]
`,

  16: `16 | Night Terrors
Your miserable sleep is plagued with mind-bending nightmares. Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor - Is result greater than insanity?
[c] Yes
[d] Learn something from the waking horror and gain +1 understanding.
[c] No
[d] Gain 1 random disorder.
[c] Survivor is a savior or has the <b>Extra Sense</b> fighting art
[dt] They disappear into the dream, emerging from the darkness hours later. They gain +4 Hunt XP and a random basic resource.
`,

  17: `17 | Face-to-Face
Amidst the sea of stone faces, one catches the event revealer's eye. They feel compelled to <b>investigate</b>. Gain +1 courage and roll 1d10.
[TO] 1d10
[td] Event revealer
[c] 1
[d] The face is identical to your own. Spend 1d5 survival or reduce your understanding to 0.
[c] 2-7
[d] The face reminds you of someone dear. Your heart aches with loneliness. If your survival is greater than your insanity, suffer ★ brain event damage.
[c] 8+
[dt] The face is your own but older and wiser. Gain +1 survival and +1 understanding.
`,

  18: `18 | Dead Weed

[img] 18 # no-shadow # width:35%

You find a strange plant growing from the eyes of a stone face. The event revealer tries to harvest it. Roll 1d0.

[i] If any survivor has a sickle, add +4 to their roll.

[TO] 1d10
[td] Event revealer
[c] 1-7
[d] Try as you might, you cannot pull out the deeply rooted weed.
[c] 8+
[dt] You pull the weed free! It has enormous regenerative power. Each survivor rubs it on their skin and removes 1 permanent severe injury. Then it crumbles into dust in your hands.
`,

  19: `19 | Exhalation of Darkness

[img] 19 # width:25%

The survivors are enveloped in a steamy darkness that dims their lantern lights. They become separated from each other and hopelessly lost.

[TO] Check
[td] Does any survivor have the <b>Leader</b> fighting art?
[c] Yes #Leader
[d] They boldly stride into the clammy darkness and gather everyone. End this event.
[c] No #
[d<]

Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler. Each straggler rolls 1d10.

[TA] 1d10
[td] Straggler
[c] 1-2
[d] You trip and fall into the bones of an ancient monster, smashing a piece of gear on the way down. Archive 1 gear of your choice from your gear grid.
[c] 3-5
[d] Something unseen attacks you, suffer 1 brain event damage and 1 event damage to a random location.
[c] 6-8
[d] You bang into a giant stone face's nose! Suffer 1 head event damage.
[c] 9+
[dt] You're not sure how, but you leave the darkness with your hands full. Gain 1 random basic resource.

[>d]
[T]
`,

  20: `20 | Dry Lands
As the survivors press forward, the air turns dry and the ground cracks. The survivors suffer heat exhaustion. Each survivor loses 1 survival. If they are wearing fur or heavy gear, they instead lose 1d5 survival.

[TO] Check
[td] Does any survivor have a pickaxe?
[c] Yes #Pickaxe
[d] The survivors break open an interesting-looking vein in the cracked ground. Gain 1 <b>Iron</b> strange resource.
[c] No #No pickaxe
[dt] The survivors continue their hunt.
`,

  21: `21 | Drawings
Cowering in a cave, the survivors find strange drawings decorating the walls. They appear to contain a message.

[TO] Check
[td] Does any survivor have +3 understanding or does the settlement have Pictographs?
[c] Yes #Decipher

[d<]

[i] If the settlement has <b>Pictographs</b>, every survivor may roll (regardless of their understanding) and add +4 to their rolls.

[TA] 1d10
[td] Any survivor with 3+ understanding
[c] 1-3
[d] Your nose begins to bleed. Suffer ★ brain event damage.
[c] 4-7
[d] The true meaning escapes you. Gain +1 insanity.
[c] 8+
[dt] The drawings teach you a new way to fight monsters! Gain +2 survival and a random fighting art.
[>d]

[c] No
[d] The survivors continue their hunt.
[T]
`,

  22: `22 | Acid Rain
The darkness above is suddenly alight with a storm of acid rain. It smells terrible, burns flesh, and forms hissing pools in the upturned mouths of the stone faces. All survivors suffer ★ event damage to every hit location as they scramble to find shelter.

[TO] Check
[td] Does the settlement have Sculpture?
[c] Yes #Sculpture
[d<]

The survivors silently watch the storm erode the stone faces, erasing their features. They wonder exactly who or what repairs the broken faces, if there is such a thing. The survivors share a dark laugh, each gaining ★ survival.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The storm passes by.
[c] 6+
[dt] The storm moves homeward. Add the <b>Acid Storm</b> settlement event to the timeline next year.

[>d]
[c] No #No Sculpture
[d<]

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The storm passes by.
[c] 6+
[dt] the storm moves homeward. Add the <b>Acid Storm</b> settlement event to the timeline next year.

[>d]
[T]
`,

  23: `23 | Clean Water
The survivors pass a forlorn fountain in the shape of a lion's face. A stream of crystal-clear water flows from its mouth. Each survivor <b>consumes</b> the water, gaining +1 survival and +1 courage. Any number of survivors may douse their head in the water and roll 1d10.

[TA] 1d10
[td] Any survivor
[c] 1-2
[d] The instant it becomes wet, your hair turns stark white. Gain 1 random disorder.
[c] 3-5
[d] Your hair is wet. Congratulations.
[c] 6-8
[d] The water is bracing. Gain +1 understanding or remove a disorder of your choice.
[c] 9+
[d] The water is shockingly cold! It rushes over you like a tidal wave and leaves you awestruck. Set your insanity to 0 and remove all disorders.
[T]
`,

  24: `24 | Food from the Mouths of Others

[img] 24 # no-shadow

The survivors pass a stone face that appears to be holding something in its mouth. The event revealer <b>investigates</b>. Gain +1 courage and roll 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d] You yell out in pain and pull your hand back, revealing a bloody gash. Did the stone face just bite? Suffer ★ brain event damage and ★ event arm damage.
[c] 3-5
[d] There's nothing. It was just a trick of the lantern light.
[c] 6-8
[d] More rocks, what did you expect? Gain 1 </b>Founding Stone<b> starting gear.
[c] 9+
[d] You pull out a masticated mass. Gain 1 random basic resource and 2 insanity.
[T]
`,

  25: `25 | Titans in the Dark

[img] 25 # no-shadow # width:50%

An earsplitting bellow marks the passing of a truly titanic beast. All <b>non-deaf</b> survivors suffer ★ brain event damage. The survivors cower on the ground, lying as flat as possible and hoping they are simply too small to be worth eating.

Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[i] If any survivor has <b>noisy</b> gear, -2 to their roll.

[TO] 1d10
[td] Determine the straggler
[c] Straggler chosen
[d<]

Each straggler rolls 1d10.

[TA] 1d10
[td] Straggler
[c] 1
[d<]

You're plucked from the ground and eaten whole.

[TO] Check
[td] Does the settlement have Survival of the Fittest?
[c] Yes #Survival of the Fittest
[d] You twist out of its mouth and land with a thud. Suffer the <b>broken arm</b> and <b>broken leg</b> severe injuries but do not die.
[c] No #
[dt] Dead.

[>d]
[c] 2-4
[d] Something snatches you in its great maw and chews you for 1 event damage to 1d5 random hit locations.
[c] 5-6
[d] The clamping jaws barely nip you! Suffer ★ event damage to a random hit location.
[c] 7-9
[d] You make yourself extra flat against the ground and avoid anything terrible.
[c] 10+
[dt] You will never stop running from what you saw. Gain +1 permanent movement.
[>d]
[T]
`,

  26: `26 | Pit
The ground beneath the event revealer's feet gives way and they plummet into a pit below. The event revealer rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] Another survivor has a whip #Whip
[d] They throw you a line in time; do not roll on the table.
[c] Event revealer has the <b>Tumble</b> fightning art #Tumble
[d] They nimbly catch a ledge and haul themselves up; gain +1 speed token and do not roll on the table.
[c] 1
[d] You land with a sickening crunch, mangling your legs. Suffer the <b>broken leg</b> severe injury twice.
[c] 2-3
[d] Your leg breaks your fall. Suffer the <b>broken leg</b> severe injury.
[c] 4-6
[d] You land at the bottom with a loud thud. Suffer 2 event damage to a random hit location and archive all <b>fragile</b> gear in your gear grid.
[c] 7-9
[d] You land at the bottom with a soft thud. Suffer 1 event damage to a random hit location.
[c] 10+
[dt] You manage to grab the edge of the pit and escape unharmed.
`,

  27: `27 | Man-Stealers

[img] 27 # no-shadow

Exhausted, the survivors rest. During their fitful sleep, a small insect approaches undetected.

Choose 1 random male survivor and roll on the table.

[TO] Choice
[td] Select random male survivor
[c] Survivor chosen
[d<]

Roll 1d10.

[TO] 1d10
[td] Male survivor
[c] Has the <b>Unconscious Fighter</b> fighting art #Unconscious Fighter
[d] They crush the bug while still snoring. They wake, confused, with a random vermin resource in their hands.
[c] 1-5
[d] When you wake, your genitals have been stolen. In their place is nothing but smooth skin. Suffer the <b>destroyed genitals</b> severe injury.
[c] 6+
[dt] You wake with a start, terrified to find menacing pincers approaching. Your defenses are quick. Without thinking, you wallop the insect crawling on your pants, suffering 1 event damage to the waist.

[>d]
[c] No male survivors
[d] Nothing happens.
[T]
`,

  28: `28 | Trollbird

A rumpled, unsightly bird stands in the survivors' path. Its beady, wet eyes blink expectantly and it calls out with an eerie human chuckle. The survivors may archive 1 <b>consumable</b> item or gear, offering it to the trollbird.

[i] If any survivor is insane, they must feed the trollbird, if able.

[TO] Choice
[td] What do you do?
[c] Feed the bird #Feed
[d] You feed the trollbird and it hops off with a terrible cackle.
[c] Ignore the bird #Ignore
[d<]

The trollbird follows the survivors on their hunt, constantly mocking them with its chuckle. Roll 1d10.

[i] If any survivor has the <b>Coprolalia</b> disorder, they curse at the bird and make vigorous and vulgar gestures. The bird is impressed. Add +3 to your roll.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The trollbird makes a terrible racket, alerting the monster. All survivors gain +1 understanding. At the start of the showdown, the monster <b>ambushes</b> the survivors.
[c] 6+
[dt] The trollbird mocks and distracts the monster as the survivors sneak up. All survivors gain +1 insanity. At the start of the showdown, the survivors <b>ambush</b> the monster.
[>d]
[T]
`,

  29: `29 | Dark Blacksmith

[img] 29 # no-shadow

The survivors cross paths with a tall, unnaturally thin man in a hooded robe. Where his feet strike the ground, sparks illuminate his path. Each survivor with 3+ courage may give him one piece of gear from their gear grid and roll on the table.

[i] If they have the Honorable disorder. add +3 to their roll.

[TA] 1d10
[td] Any survivor with 3+ courage
[c] 1-2
[d] The creature raises the object to its mouth and eats it. It's gone. Archive the gear card.
[c] 3-6
[d] The creature refuses the gear and stares at you with a single, large eye. Suffer 1d10 brain event damage.
[c] 7-8
[d] The creature unhinges its jaw and eats the piece of gear. In return, it hands you a shining shield. Gain the <b>Steel Shield</b> rare gear.
[c] 9+
[dt] The creature unhinges its jaw and eats the piece of gear. In return, it hands you a shining sword. Gain the <b>Steel Sword</b> rare gear.
`,

  30: `30 | Rotten Faces
The stone faces start to give under the survivors' feet. They are bloated and smell terrible. Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor
[c] 1
[d] Your foot gets stuck and you quickly begin to sink into the ground. After a struggle you manage to break free. If you had leg armor, it is lost in the muck. Spend 3 survival or archive the gear.
[c] 2-5
[d] Mired, you struggle to break free! Roll again on this table or spend 1 survival to escape.
[c] 6-9
[d] You escape without incident.
[c] 10+
[dt] You find something gross drudging through the rot! Gain 1 random basic resource.
`,

  31: `31 | Strange Path
The survivors stop at the head of a path. Small lanterns twinkle, marking its edges.

The event revealer decides whether or not the survivors follow the path.
[i] If the event revealer is <b>insane</b>, they must.

[TO] Choice
[td] Event revealer - Follow the path?
[c] Yes #Follow
[d<]

The event revealer gains +1 understanding then rolls 1d10 and adds their understanding.

[TO] 1d10
[td] Event revealer
[c] 1
[d] A colossal finger descends from above, crushing a random survivor. They suffer 2 event damage to every hit location.
[c] 2-4
[d] A random survivor tears off hysterically along a branch in the path. They return hours later, ghostly pale and with no recollection of what happened. They lose 1d10 survival.
[c] 5-7
[d] The path twists and turns dizzyingly into the dark. All survivors suffer 1 brain event damage and the event revealer rolls again on this table, adding +2 to their roll.
[c] 8-9
[d] The path leads the survivors to a large stone face with lanterns for eyes. Inside its open mouth is a bounty. Each survivor gains 1 random basic resource.
[c] 10+
[d<]

The path leads to the beast you are hunting! The survivors <b>ambush</b> the monster.
[i] If any survivor has the <b>Honorable</b> disorder, they realize the folly of their ways and may remove the disorder. If any survivors remain <b>Honorable</b>, they announce their presence to the monster; the monster <b>ambushes</b> the survivors instead.

[>d]
[T]

[>d]
[c] No #Do not follow
[dt] Roll again on the hunt event table before moving on the hunt board.
`,

  32: `32 | Sudden Madness
The event revealer is devastated by a piercing cacophony in their head. Roll 1d10.

[TO] 1d10
[td] Event revealer
[c] Result less than or equal to their current insanity #
[d<]

They go mad, lashing out at their compatriots! Each other survivor suffers 1 event damage to a random hit location before the event revealer regains control of themselves.

[TO] Check
[td] Does the event revealer have the <b>Crazed</b> fightning art?
[c] Yes #Crazed
[d] They gain insight from their ordeal. Gain +10 insanity and +2 understanding.
[c] No #
[d] They learn nothing from the experience.
[T]

[>d]
[c] Result greater than their current insanity #
[d<]

They regain control of themselves.

[TO] Check
[td] Does the event revealer have the <b>Crazed</b> fightning art?
[c] Yes #Crazed
[d] They gain insight from their ordeal. Gain +10 insanity and +2 understanding.
[c] No #
[d] They learn nothing from the experience.
[T]

[>d]
[T]
`,

  33: `33 | It Whispers Your Name

[img] 33

The event revealer trips over a protruding nose in the ground. The lips of a stone face begin to move!

[TO] Check
[td] Does the event revealer have a name?
[c] Yes #
[d<]

The lips seductively whisper the survivor's name.

[TO] Check
[td] Is event revealer insane?
[c] Yes #Insane
[d<]

They are drawn in, savagely kissing the face. Repulsed and outraged, the other survivors suffer 1 brain event damage before pulling the crazed survivor from the ground and moving on.

[TO] Check
[td] Does any survivor have the <b>Marrow Hunger</b> impairment?
[c] Yes #Marrow Hunger
[d] The face secretly whispers their life's purpose. They gain +1 permanent strength. Add the <b>Murder</b> settlement event to the timeline next year.
[c] No #
[d] The survivors continue their hunt.
[T]

[>d]
[c] No #Not insane
[d<]

They gain +1 understanding, feeling on the cusp of learning something.

[TO] Check
[td] Does any survivor have the <b>Marrow Hunger</b> impairment?
[c] Yes #Marrow Hunger
[d] The face secretly whispers their life's purpose. They gain +1 permanent strength. Add the <b>Murder</b> settlement event to the timeline next year.
[c] No #
[d] The survivors continue their hunt.
[T]

[>d]
[T]

[>d]
[c] No #
[dt] The lips stop moving and nothing else happens.
`,

  34: `34 | Crippling Misery
Each survivor rolls 1d10. The lowest-scoring survivor (or survivors, in case of ties) becomes a straggler.

[i] If any survivor (or survivors) has the <b>Anxiety</b> disorder, they are the straggler. Do not roll.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[d<]

The straggler is lost in a moment of profound self doubt. They slip, not having the will to catch themselves, and tumble off a steep hill of stone faces. They land awkwardly with a crunch, suffering the <b>broken leg</b> severe injury. Sobbing to themselves, they come to grips with just how terrible their life is and gain +1 understanding.

[TA] Check
[td] Does the straggler have the <b>Binge Eating</b> disorder?
[c] Yes #Binge Eating
[d] They wipe away their tears and reach out to a nearby critter, instinctually cramming it into their mouth for comfort. Draw 1 random vermin resource and <b>consume</b> it.
[c] No #No Binge Eating
[d] Nothing happens.
[T]

[>d]
[T]
`,

  35: `35 | Broken Lantern Oven
The survivors come across the shattered ruins of a small settlement. Ashen corpses dot the ruins, disintegrating at the slightest touch. An extinguished lantern oven stands intact at the center of the settlement.

The event revealer rolls 1d10 and adds their understanding.

[TO] 1d10
[td] Event revealer
[c] 1-4
[d<]

[TO] Check
[td] Does the settlement have <b>Song of the Brave</b>?
[c] Yes #Song of the Brave
[d<]

The group may nominate a brave survivor to <b>investigate</b> the ruins of the settlement's lantern hoard. They gain +1 courage and roll 1d10.

[TO] 1d10
[td] Nominated Survivor
[c] 1-5
[d] You try to enter the ruined lantern hoard, but you are overcome with fear, keeling over and vomiting everywhere. When you rise, you find yourself physically incapable of pushing forward anymore. Gain the <b>Apathetic</b> disorder.
[c] 6+
[dt] You are repelled by the ruined lantern hoard, but linger just long enough to grab a pair of insects scurrying within it. That's as close as you're comfortable going. Gain 2 vermin resources of your choice.

[>d]
[c] No #
[d<]

The survivors continue their hunt.

[>d]
[T]

[>d]
[c] 5+
[d<]

Gain the <b>Lantern Oven</b> innovation:

<button class="hunt_event_action_button hoverable" id="lantern_oven" onClick="placeReminder('lantern_oven')">Gain Innovation</button>

[i] If the settlement already has this innovation, the event revealer harvests a <b>broken lantern</b> basic resource from the remains.

[TO] Check
[td] Does the settlement have <b>Song of the Brave</b>?
[c] Yes #Song of the Brave
[d<]

The group may nominate a brave survivor to <b>investigate</b> the ruins of the settlement's lantern hoard. They gain +1 courage and roll 1d10.

[TO] 1d10
[td] Nominated Survivor
[c] 1-5
[d] You try to enter the ruined lantern hoard, but you are overcome with fear, keeling over and vomiting everywhere. When you rise, you find yourself physically incapable of pushing forward anymore. Gain the <b>Apathetic</b> disorder.
[c] 6+
[dt] You are repelled by the ruined lantern hoard, but linger just long enough to grab a pair of insects scurrying within it. That's as close as you're comfortable going. Gain 2 vermin resources of your choice.

[>d]
[c] No #
[d<]

The survivors continue their hunt.

[>d]
[T]

[>d]
[T]
`,

  36: `36 | On the Trail
The survivors rush forward, feeling their quarry close at hand. Skip the next hunt space. If this movement begins the showdown, the survivors <b>ambush</b> their quarry.
[i] If any survivor has <b>noisy</b> gear, the survivors do not ambush. Start the showdown normally.
`,

  37: `37 | Lost
The survivors are hopelessly lost in the unbroken darkness. Move the survivors 2 spaces back on the hunt board.
`,

  38: `38 | Gregalope

A massive Gregalope stands astride the horizon, its ancient body bloated with tumors and scar tissue. Its milky eyes catch sight of the survivors and it bounds away. Driven by a sudden desire, the survivors give chase. The event revealer rolls 1d10 and adds their movement to their roll.

[TO] 1d10
[td] Event revealer
[c] Any survivor has <b>Strategist</b> fighting art #Strategist
[d<]
Survivors may corner the Gregalope at a giant stone face instead of giving chase.

If they do end the hunt immediately.

Start a showdown with a level 2 Screaming Antelope, using its setup rules.
In addition, place a <b>Giant Stone Face</b> adjacent to the monster and give the monster the Butcher's <b>Berserker</b> trait card.

If the survivors prevail, gain the normal showdown rewards and 3 additional Screaming Antelope resources.

<button class="hunt_event_action_button hoverable" id="gregalope" onClick="placeReminder('gregalope')">Start showdown!</button>

[>d]
[c] 1-6
[d] The survivors quickly fall behind the majestic beast. Move 1 space away from the quarry on the hunt board.
[c] 7-14
[d] The Gregalope is far too fast. It's gone before you know it.
[c] 15-16
[d] The survivors lose sight of the Gregalope but discover a hidden path. You may re-roll the next result on the hunt event table.
[c] 17+
[dt] Just before it leaps out of view, the Gregalope bows its mighty horns. The experience changes the exhausted event revealer. They gain +1 permanent movement.
`,

  39: `39 | Heavy Mist
A heavy mist envelops the survivors, obscuring their lantern light. Roll 1d10.

[TO] 1d10
[td] Event revealer
[c] Even result #Even
[d] The survivors stumble in the right direction. If the showdown begins in the next space on the hunt board, the monster <b>ambushes</b> the survivors.
[c] Odd result #Odd
[dt] They get turned around; roll again on the hunt event table before moving on the hunt event board.
`,

  40: `40 | Dream
The event revealer dreams of the upcoming hunt. They stand before the great beast, weapons ready, but it strikes them down.

[TO] Check
[td] Does the event revealer have 3+ courage or is any survivor a savior?
[c] Yes #
[d<]

The event revealer is emboldened by the dream and gains +1 evasion token.

[TO] Check
[td] Does any survivor have the <b>Twilight Sword</b>?
[c] Yes #Twilight Sword
[d] They dream of indiscriminate slaughter. Add the <b>Murder</b> settlement event to the timeline 1d5 years from now.
[c] No #No Twilight Sword
[d] Nothing happens.
[T]

[>d]
[c] No #
[d<]

The dream is merely rattling. Suffer 1 brain event damage.

[TO] Check
[td] Does any survivor have the <b>Twilight Sword</b>?
[c] Yes #Twilight Sword
[d] They dream of indiscriminate slaughter. Add the <b>Murder</b> settlement event to the timeline 1d5 years from now.
[c] No #No Twilight Sword
[d] Nothing happens.
[T]
[>d]
[T]
`,

  41: `41 | Nightmare
The event revealer dreams of the upcoming hunt. The great beast vanishes during their battle and secretly follows them back to the settlement. They helplessly watch as it devours all they know and love.

The event revealer gains +1d10 insanity and -1 evasion token.

[TO] Check
[td] Does the settlement have a savior?
[c] Yes #
[d<]

The savior appears in the dream and defends their home. The event revealer gains +1d5 survival.
[TO] Check
[td] Does any survivor in the settlement or hunting party have the <b>Twilight Sword</b>?
[c] Yes #Twilight Sword
[d] They awake from the dream and continue their hunt.
[c] No #No Twilight Sword
[dt] The event revealer envisions a maniacal version of themselves wielding the blade and gleefully slaughtering the beast. They awake to find a <b>Twilight Sword</b> at their side, humming gently against their body. Instinctively the survivor recognizes the weight of the weapon's curse and the promise of its power. The event revealer gains the <b>Twilight Sword</b> rare gear. They may also select <b>Twilight Sword</b> as their weapon proficiency type and gain +1 weapon proficiency with this weapon.

[>d]
[c] No #
[d<]

[TO] Check
[td] Does any survivor in the settlement or hunting party have the <b>Twilight Sword</b>?
[c] Yes #Twilight Sword
[d] They awake from the dream and continue their hunt.
[c] No #No Twilight Sword
[dt] The event revealer envisions a maniacal version of themselves wielding the blade and gleefully slaughtering the beast. They awake to find a <b>Twilight Sword</b> at their side, humming gently against their body. Instinctively the survivor recognizes the weight of the weapon's curse and the promise of its power. The event revealer gains the <b>Twilight Sword</b> rare gear. They may also select <b>Twilight Sword</b> as their weapon proficiency type and gain +1 weapon proficiency with this weapon.

[>d]
[T]
`,

  42: `42 | Surgeon
A creaky carriage approaches the survivors. Richly appointed in red and gold, the carriage is carved on every side with lurid faces. A massive, twitching eye adorns the front, while the door of the carriage is a waiting, open mouth. Out of a small window, a gnarled hand beckons.
One survivor with 3+ courage may choose to enter the wagon.

[TO] Choice
[td] Survivor with 3+ courage
[c] Enter
[d] They remove one impairment or severe injury and gain 1 random disorder.
[c] Do not enter
[d] The survivors continue their hunt.
[T]
`,

  43: `43 | Fresh Kill
A carpet of skittering bugs points the survivors to a freshly killed monster. The scavenging insects try to defend their dinner, but the survivors fight them off to claim the prize.
Each survivor rolls 2d10 and adds their Hunt XP. The highest-scoring survivor (roll off in case of ties) slays the most vermin and wins the putrid prize for themselves. They gain 1 random basic resource and 1 random vermin resource.
`,

  44: `44 | Opportunists
While investigating their quarry's tracks, the survivors realize they are hunting not one, but two monsters. The two sets of tracks soon separate. leaving the event revealer to pick which tracks to follow.

[TO] Choice
[td] Event revealers
[c] Larger tracks
[d] Continue hunting as normal.
[c] Smaller tracks
[dt] Start the showdown immediately. At the start of the showdown, the monster suffers 5 wounds. If the survivors are victorious, they gain half the basic resources and half the monster resources (rounded up) from rewards in the aftermath.
`,

  45: `45 | Jagged Valley
A valley of sharp, white stones opens before the survivors, looking just like a toothy maw. As the survivors push and climb through the jagged spires, they find that even the shallowest nick bleeds profusely. Each survivor suffers 1 event damage to the body.
Unless a survivor has bandages to patch up their wounds, all survivors also gain 2 bleeding tokens!

[i] If any survivor has a pickaxe, they may try to convince the other survivors to let them <b>investigate</b> a bit more. If they are convinced, roll 1d10.

[TA] 1d10
[td] Survivor carrying a pickaxe - Investigate
[c] 1
[d] The white stones are teeth and the survivors are in a giant mouth! Everyone must spend 1 survival to scamper out of the mouth. Anyone remaining inside is chewed to a pulp. Dead. Do not gain the benefits of <b>Cannibalize</b>.
[c] 2-5
[d] The white stone is extremely hard. When the survivors finally break through, a horde of bugs scuttles forth from the holes. Gain 1 <b>Hissing Cockroach</b> vermin resource. The excavation was time consuming: roll again on the hunt event table before moving on the hunt board.
[c] 6+
[dt] The survivors find a crack and expand it. Within is a hidden cache! Gain 1 <b>Iron</b> strange resource and 1 <b>Hissing Cockroach</b> vermin resource. The excavation was time consuming; roll again on the hunt event table before moving on the hunt board.
`,

  46: `46 | River
The survivors come to the edge of a river of blood. <b>Non-insane</b> survivors suffer 1 brain event damage at the sight of it. The survivors must <b>investigate</b> in order to pick up their quarry's trail. Each survivor rolls 1d10.
If no survivor successfully finds the monster's trail, roll again on the hunt event table before moving on the hunt board.

[TA] 1d10
[td] Each survivor - Investigate
[c] 1-2
[d] You lose your balance and fall into the river of blood! Instantly, a massive parasite crams its way down your throat, savaging your insides on the way in. Suffer the <b>broken rib</b> severe body injury. You hope that that's all the parasite does to you.
[c] 3-5
[d] Your quarry has defecated in the blood. Suffer 1 event damage to a random hit location from sifting through the fecal blood water too long.
[c] 6-8
[d<]

You realize that the blood river is filled with the bloated corpses of unrecognizable monsters. You feel compelled to fish some out! Gain 1 random basic resource.
[i] If you are wearing <b>heavy</b> gear, you fall in and swallow blood and soft, bloated monster bits. Reduce your survival to 1.

[>d]
[c] 9+
[dt] You successfully find the monster's trail.
`,

  47: `47 | Banquet Trees
A small copse of trees rises over an otherwise lifeless plain. Enticing red fruit hangs from the branches. Each survivor must spend 1 survival to resist the temptation to <b>consume</b> the fruit.

<b>Insane</b> survivors and survivors with the <b>Binge Eating</b> disorder must consume.

[i] If any survivor has a sickle, they carve a line across the tree, drawing blood! The fruit instantly sours. End this event.

[TA] 1d10
[td] Any survivor - Consume
[c] 1-5
[d] The addictive fruit savages your insides. Lose 1 survival and roll again on this table. If you had no survival, suffer 2 event damage to a random hit location.
[c] 6+
[dt] You belch loudly in satisfaction and walk away.
`,

  48: `48 | Death Wager

[img] 48 # width:25%

The survivors are awoken by a traveler hidden in a deep cloak. The traveler pulls back its hood and reveals a deformed face with two chins curving away from each other, each with its own grinning mouth.

In a dreamlike state, the survivors all understand this entity is known as The Gambler and if they speak they will die. Until this event is completed, only the event revealer may speak. If any other player speaks, their survivor turns cold. Dead. The survivors must play The Gambler's game or be trapped with him forever. Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor
[c] 1
[d] The Gambler reaches out and scoops up your dice. As they vanish within a fold of his cloak, you feel all traces of air leave your lungs and are unable to draw another breath. Dead.
[c] 2-9
[d] You do not lose, nor do you win. Play again if you wish. If you do, roll again on this table.
[c] 10+
[dt] You win. Gain +1 permanent luck.
`,

  49: `49 | Pus Fields
The landscape is dotted with large, swelling mounds oozing pus. The smallest jostle threatens to explode them. The survivors may <b>carefully tread</b> through the mounds or <b>rush through</b>.

[TO] Choice
[td] What do you do?
[c] Carefully tread
[d] You make it through without incident, but your progress is slowed. Roll again on the hunt event table before moving on the hunt board.
[c] Rush through
[dt] Each survivor rolls 1d10 and adds their evasion to the result. On a 7 or less, they detonate one of the pus mounds! They suffer 2 event damage to a random hit location and become <b>stinky</b> for the rest of this lantern year.
`,

  50: `50 | Gibbet
A crude iron cage swings from the branches of a massive tree. As the survivors approach, a man calls out to them from the cage, pleading to be freed.

[TO] Choice
[td] What do you do?
[c] Pass him by
[d] The survivors pass him by and suffer 1 brain event damage as the prisoner weeps and pleads.
[c] Free him
[d<]

The event revealer rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] 1
[d] The survivors open the cage but all they find inside is a skeleton. All survivors suffer 2 brain event damage.
[c] 2-7
[d] The prisoner is thankful and follows the survivors until they rest. When they wake, each survivor loses 1 random resource (if they had any).
[c] 8+
[dt] The prisoner is grateful and follows the survivors home after the showdown. The settlement gains +1 population.
[>d]
[T]
`,

  51: `51 | Refugees
The survivors encounter a group of fleeing settlers.

[TO] Check
[td] Does the settlement have <b>Symposium</b> and <b>Language</b>?
[c] Yes #Symposium and Language
[d<]

The survivors manage to crudely communicate. The survivors may offer a resource or gear to help the distressed refugees.

[TO] Choice
[td] Share resource or gear?
[c] Yes #Share
[d<]

Archive the offering. The refugees frantically share their mournful tale. While much is lost in translation, they relate the savage invasion of a monster that destroyed their home. The tale prepares the survivors for what lies ahead. At the start of the showdown, reveal the top 5 Al cards of the Al deck and put them back in any order.
[i] If any survivor has the <b>Leader</b> fighting art, one of the settlers is drawn to their charisma. Gain +1 population.

[>d]
[c] No #Do not share
[dt] Survivors continue their hunt.
[>d]
[c] No #
[d] Survivors continue their hunt.
[T]
`,

  52: `52 | Madflies
Tiny, persistent insects swarm the survivors, flying into their ears and nostrils. The bugs buzz maddeningly in their heads, growing louder as they nest.
Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor
[c] 1-2
[d] You dive into a nearby marsh to flush out the disgusting insects. It works, but now you're constantly distracted by the tiny bug corpses you occasionally hack up. Gain -1 evasion token.
[c] 3-7
[d] The buzzing immediately stops and the flies depart. Their rejection makes you feel strangely despondent. Gain +1 insanity.
[c] 8+
[d<]

Their eggs gestate incredibly quickly and madflies explode forth from your mouth! The experience is gruesome, but makes you feel so alive! Suffer the <b>frenzy</b> brain trauma.
[i] If you have the <b>Rageholic</b> disorder or <b>Berserker</b> fighting art, giving birth to disgusting new life kindles your rage. Suffer the <b>frenzy</b> brain trauma again.

[>d]
[T]
`,

  53: `53 | Mask Salesman
The survivors meet a traveling Mask Salesman on the road. He insists that he has special wares to offer.
Shuffle one copy of each mask gear from the Mask Maker settlement location and draw one at random. The salesman is offering this mask. The event revealer rolls 1d10 to determine the price, then gains the mask.

[TO] 1d10
[td] Event revealer
[c] 1-3
[d] The salesman silently points at you. You instinctively hand him his asking price in exchange for the mask. Archive 1 gear of your choice from your gear grid and lose all survival.
[c] 4-7
[d] The salesman slowly gestures for an offering. Archive 1 gear of your choice from your gear grid.
[c] 8+
[dt] As he imparts the mask to you, the salesman's lips form the sounds of your name. It is gone. Give your survivor a new name (it must be different) and +1 survival for naming your survivor.
`,

  54: `54 | Bone Storm
Mighty winds tear across the landscape, collecting chips of stones and skeletal remains. The survivors huddle together on the outskirts of the storm.
They may either <b>brave the storm</b> or <b>wait it out</b>.

[TO] Choice
[td] What do you do?
[c] Brave the storm
[d] All survivors gain +1 courage and suffer 1 event damage to 3 random hit locations. Archive all <b>fragile</b> gear.
[c] Wait it out
[dt] Roll twice on the hunt event table before moving on the hunt board.
`,

  55: `55 | Mudslide
A flash mudslide sweeps the survivors away. Each survivor rolls 1d10.
[i] If any survivor has a whip, they catch it around a pillar-shaped bone and swing to safety; they do not roll.

[TA] 1d10
[td] Each survivor
[c] 1-2
[d] You're violently swept along, drowning in mud. Suffer 2 event damage to a random hit location and archive all <b>fragile</b> and <b>soluble</b> gear in your gear grid. Roll again on the table.
[c] 3-7
[d] You manage to scramble free, but not before taking a serious beating. Suffer 2 event damage to your body and archive all <b>fragile</b> and <b>soluble</b> gear in your gear grid.
[c] 8-9
[d] You reach higher ground. You're caked in mud but otherwise unscathed.
[c] 10+
[dt] You remember being pulled under, the sensation of mud forcing itself down your throat, then nothing else. After the mudslide passes, the other survivors find you unharmed. Gain +1 insanity.
`,

  56: `56 | Dead Monster
The survivors find a decomposed monster corpse. It's too rotten to yield any resources.

[TO] Check
[td] Does any survivor have 3+ understanding?
[c] Yes #3+ understanding
[d<]

The survivors cover themselves in the dead monster's spilled blood. The stench will help them sneak up on their quarry. When the showdown starts, the survivors <b>ambush</b> the monster.
[i] If any survivor has the <b>Squeamish</b> disorder, they refuse to soil themselves. Do not <b>ambush</b> the monster.

[>d]
[c] No #
[dt] The starving survivors feast on the rotting corpse, immediately losing control of their twisting guts. Each survivor loses 1 survival and cannot <b>consume</b> for the rest of this lantern year.
`,

  57: `57 | Gorm's Laughter
The rhythmic wail of a Gorm's laughter reaches the survivors, filling them with fear. The cackling follows the survivors, tormenting them until they reach their quarry.

Place a token on every hunt board space between the survivors and their quarry. When the survivors move into a space with a token, remove it and all <b>non-deaf</b> survivors suffer 1 brain event damage.

<button class="hunt_event_action_button hoverable" id="gorms_laughter" onClick="placeReminder('gorms_laughter')">Place a reminder</button>
`,

  58: `58 | Scent on the Wind
A strong wind blows, bringing with it the scents of distant places and things.
The event revealer rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The monster catches your scent. It moves one space closer. If this movement starts the showdown, the monster <b>ambushes</b> the survivors.
[c] 6+
[dt] The survivors smell their quarry's foul odor and surge forward. The survivors may skip the next hunt space. If this movement starts the showdown, the survivors <b>ambush</b> the monster.
`,

  59: `59 | Signs of Battle
The survivors come upon the remains of a terrible battle between their quarry and some unknown foe. The event revealer may choose to <b>investigate</b>.

[TO] Choice
[td] Event revealer - What do you do?
[c] Investigate
[d<]

The event revealer gains +1 courage and rolls 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d<]
The monster springs out of the dark, taking advantage of the distracted survivors.

The monster <b>ambushes</b> the survivors.

During showdown setup, place the event revealer directly in front of the monster.

<button class="hunt_event_action_button hoverable" id="signs_of_battle" onClick="placeReminder('signs_of_battle')">Start showdown!</button>

[>d]
[c] 3-7
[d<]

The remains are human. The distraught and enraged survivors each suffer 1 brain event damage.
[i] If the settlement has <b>Graves</b>, they bury the dead and each survivor gains +1 survival.
[i] If the settlement has <b>Cannibalize</b>, gain 1 random basic resource.

[>d]
[c] 8+
[d] The quarry has left the remains of another monster in its wake. Gain 1 random basic resource.
[T]

[>d]
[c] Ignore
[dt] Roll again on the hunt event table before moving on the hunt event board.
`,

  60: `60 | Wildfire
A massive wall of flame obstructs the survivors, incinerating the ground. It has destroyed whatever awaited the survivors and left chaos in its wake. Archive all hunt event cards in the next 2 hunt spaces. Place two basic hunt event cards in those spaces.
`,

  61: `61 | Frozen Lightning
A storm sweeps over the survivors. Deep purple lightning flashes overhead. The bolts freeze in midstrike and rain down on the survivors as jagged, glowing spikes.
Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[dt] A bolt crashes beside the straggler, catching them in an explosion of razorsharp crystals. They suffer 1d5 event damage to 2 random hit locations. Archive all <b>fragile</b> gear in their gear grid.
`,

  62: `62 | Space Between the Rocks
The survivors are distracted by a dark crack in the endless sea of stone faces.

[TO] Check
[td] Does any survivor have a pickaxe?
[c] Yes #Pickaxe
[d] They strike the ground, causing the crack to expand into a gaping hole. Bravely reaching inside the survivor produces a blackened, twisted hunk. Gain 1 <b>iron</b> strange resource.
[c] No #
[d<]

Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[dt] The straggler stoops to gaze into the depths and refuses to stop staring. When the other survivors drag them away, they babble incoherently. Whatever they saw changed them forever; they gain 1 random disorder. If all the survivors end up as stragglers, no one ever pulls them away and they are all lost. Dead.

[>d]
[T]
`,

  63: `63 | Feet

[img] 63 # width:35%

The stone faces ahead are replaced by an expanse of stone feet sprouting from the ground. The survivors walk sole-to-sole with the feet.

[TO] Check
[td] Are all survivors insane?
[c] Yes #All insane
[d<]

[TO] Check
[td] Does the settlement have Survival of the Fittest?
[c] Yes #Survival of the Fittest
[d] They fall off the underside of the world. The survivors bite down hard on the feet. Their teeth grind against stone as they refuse to let go. At once, the feet shatter, revealing ordinary stone faces beneath. Set all survivors' insanity to 0. Each survivor suffers the <b>shattered jaw</b> severe head injury. Do not roll any additional hunt events caused by <b>Feet</b>.
[c] No #
[dt] They fall off the underside of the world. The survivors are dead.

[>d]
[c] No #Someone sane
[dt] If any survivor is <b>insane</b>, they are convinced they have reached the underside of the world. They clutch the ground for dear life, terrified of falling off. Their raucous terror slows the survivors and attracts unwanted attention. Roll once on the hunt event table for each <b>insane</b> survivor before moving on the hunt board. If any of these rolls result in <b>Feet</b>, ignore it and re-roll.
`,

  64: `64 | Stone Fountain
Two cupped stone hands rise out of the ground. The hands hold clear, cold water that trickles through the stone fingers in a seemingly endless supply. Any survivor may <b>consume</b> from the fountain. If they do, gain +1 courage and roll 1d10.

If no one consumes, roll again on the hunt event table before moving on the hunt board.

[TA] 1d10
[td] Any survivor - Consume
[c] 1-4
[d<]

The water is clear until it enters your lips, where it suddenly turns to blood. You spit out the foul liquid and suffer ★ brain event damage.
[i] If you have the <b>Hemophobia</b> disorder, you also suffer ★ event damage to the body as you vomit violently in disgust.

[>d]
[c] 5-8
[d] It's water. Refreshing.
[c] 9+
[dt] The water is clean and pure, like none the survivor has ever tasted. Gain +1 survival.
`,

  65: `65 | Statue

[img] 65

Cresting a hill, the survivors find a statue of a man sitting on a throne.

[i] If any survivor has 5+ understanding, the survivors may ignore the statue and end this event.

Otherwise, each survivor rolls 1d10. The lowest scoring survivor (roll off in case of ties) becomes a straggler.
[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[d<]

The straggler is drawn to the statue, touching it gently. In an instant, they are gone, replaced by the man from the throne, now flesh and blood. The straggler sits in his place on the throne, stone mouth open in a silent yell. They are gone forever. Consider them dead, but do not apply <b>Cannibalize</b> death principle; there is no body.
[TO] Check
[td] Does the settlement have <b>Momento Mori</b>?
[c] Yes #Momento Mori
[d] The satue resembles a deceased survivor. Replace the straggler with the record sheet of a fallen survivor. Remove all of their severe injuries. Set their Hunt XP to 2 (they Age again, as this is a new lifetime). They gain +1d10 survival, +1d10 insanity. You may give them 3 ranks of proficiency in a random weapon type.
[c] No #
[dt] The man offers his thanks and joins the hunting party without any explanation. He is a new survivor with the straggler's gear, 2 random disorders, and 2 Hunt XP. Shuffle all weapon specialization cards (including expansions, if any) and draw one. The survivor has 3 ranks of proficiency in that weapon type. They gain +1d10 survival, +1d10 insanity. Give him a name and +1 survival for being named.

[>d]
[T]
`,

  66: `66 | Forbidden Word
There is a great rush of air. A booming, inhuman voice declares a single word in an unknown language. For one instant, the survivors understand.
All <b>non-deaf</b> survivors gain +1 understanding and suffer 1 brain event damage.
[i] If they are <b>insane</b> they also gain 1 random disorder.
`,

  67: `67 | Saliva Pools
The ground ahead is pockmarked with pools filled with a gooey liquid. They bubble merrily and stink of digesting meat. As the survivors move between them, they are overcome by waves of nausea.

[TO] Check
[td] Does any survivor have a sickle?
[c] Yes #Sickle
[d<]

They slice a few leaves from a nearby plant and everyone uses them to plug their noses and mask the smell. All survivors gain +1 understanding.

[TO] Check
[td] Does any survivor have 3+ understanding?
[c] Yes #3+ understanding
[d] They devise a way to use the pools. Each survivor may place one piece of gear in a pool. Archive the gear and gain the resources used to craft it (if any).
[c] No #
[dt] The survivors continue their hunt.

[>d]
[c] No #
[d<]

Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor - Is result less than survival?
[c] Yes #Less than survival
[d] They continue on.
[c] No #Greater than survival
[dt] They vomit into a nearby pool, suffering 1 event damage to the body. Before their eyes, the pool greedily dissolves their vomit, they gain +1 understanding.
[br]
[TO] After all rolls
[td] Does any survivor have 3+ understanding?
[c] Yes #3+ understanding
[d] They devise a way to use the pools. Each survivor may place one piece of gear in a pool. Archive the gear and gain the resources used to craft it (if any).
[c] No #
[d] The survivors continue their hunt.
[T]

[>d]
[T]
`,

  68: `68 | A Familiar Face
[i] If no survivors have died yet this campaign, ignore this event and roll again on the hunt event table before moving on the hunt board.

Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[dt] While examining the stone faces underfoot, the straggler recognizes the face of a fallen friend. Bittersweet memories reduce them to tears. Reduce their insanity to 0 and they gain +1 understanding.
`,

  69: `69 | Time Lapse
The glow of the survivors' lanterns blurs, forming trails of light behind them.
[i] If the settlement has fought a Phoenix, the group recognizes the phenomenon. All survivors gain +1 understanding.
The event revealer rolls 1d10 on the table below. If any survivor has an <b>Hours Ring</b>, they may instead select a die result.
[TA] 1d10
[td] Event revealer
[c] 1-3
[d] The survivors' bodies suddenly age. All survivors with less than 10 Hunt XP gain +3 Hunt XP. Do not gain the benefits of Age. Your bodies have physically aged, no practical experience has been learned.
[c] 3-9
[d<]

The survivors' minds fill with alien memories. They are no longer just themselves. They walk differently and speak with strange accents. Give each survivor a new name and +1 survival for being named. Each survivor gains +1 Hunt XP and 1 random disorder.
[i] If your settlement has <b>Survival of Fittest</b>, and you've already used your once-per-lifetime reroll, you may use it again.

[>d]
[c] 10+
[dt] The survivors are suddenly standing by their quarry! Start the showdown immediately.
`,

  70: `70 | Tomb of Excellence
The survivors find a serene, luxurious tomb, immaculate in its construction and condition. Elegant murals decorate the walls, depicting glorious victories over the very monster the survivors are hunting. The survivors are baffled by its presence.
The event revealer <b>investigates</b> and rolls 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1
[d] The survivors bemoan how weak they are compared to the warriors in the murals. All survivors loses 1 survival.
[c] 2-5
[d] It's nice to see something pretty for once, eh?
[c] 6-9
[d] The survivors can't remember ever feeling so cheerful and inspired. Each survivor gains +1 courage.
[c] 10+
[d<]

The doorway to the tomb is framed with a wood that has small hands for grain. Inside, murals depict a hero at the center of a labyrinth that is holding a giant, human-filled fruit above his head. Each survivor gains +1 understanding.
[i] If the settlement has <b>Pictographs</b>, the survivors find information about their quarry. At the start of the showdown, they may place the monster's trap at the bottom of the hit location deck.

<button class="hunt_event_action_button hoverable" id="tomb_of_excelence" onClick="placeReminder('tomb_of_excelence')">[Pictographs] Place reminder</button>

[>d]
[T]
`,

  71: `71 | Found Relic
Amidst the endless stone faces, the event revealer notices an unusual object on the ground.
The event revealer <b>investigates</b> and rolls 1d10.
[i] If the settlement has <b>Records</b>, add +6 to the result.
[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d] You find a weathered, purple stone with a swirling texture. It is shockingly heavy. Mesmerized by the stone, you hide it from the other survivors. Gain the <b>Secretive</b> disorder and -1 movement token from lugging the stone around.
[c] 3-4
[d] Useless junk litters the ground.
[c] 5-9
[d] You find a stone heart that pulses with warmth as you hold it in your hands. Gain +1 insanity.
[c] 10+
[d<]

You find a mask with living lips. If you return to the settlement with the mask, it quickly learns your language and shares its secrets before crumbling to dust. At the start of the next settlement phase, draw 3 innovations from the innovation deck and add one to your settlement at no cost.
[i] If any survivor has a <b>Final Lantern</b>, it begins to flash and vibrate wildly. The mask disintegrates and all survivors suffer 1 brain event damage.

<button class="hunt_event_action_button hoverable" id="found_relic" onClick="placeReminder('found_relic')">Place a reminder</button>

[>d]
[T]
`,

  72: `72 | Something to Pass the Time
[i] If the settlement does not have <b>Symposium</b>, ignore this event and roll again on the hunt event table before moving on the hunt board.
Otherwise, the event revealer suggests a word game to lighten the mood as the survivors trudge forward. The event revealer rolls 1d10.
[i] If the settlement has <b>Song of the Brave</b>, add +4 to your roll.

[TO] 1d10
[td] Event revealer
[c] 1-2
[d] The survivors' boisterous voices attract their quarry. The monster <b>ambushes</b> them.
[c] 3-7
[d] No one else is in the mood for a game. The event revealer loses 1 courage.
[c] 8-9
[d] The survivors play the simple but entertaining game. Each survivor gains +1 courage.
[c] 10+
[dt] The game is astonishingly fun and the survivors' spirits soar with their booming laughter. Each survivor rolls 1d10. On a 6+, they gain 1 survival or cure 1 disorder.
`,

  73: `73 | Golden Ember
The way forward is blocked by dense, gold-flecked smoke. The survivors may push ahead and brave the smoke.
[i] If the survivors have a <b>Final Lantern</b>, it guides them through the smoke without any trouble; end this event.

[TO] Choice
[td] What do you do?
[c] Brave the smoke
[d<]

Each survivor gains +1 courage and the event revealer rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] The smoke overwhelms the survivors. As they run through the glittering smog, each survivor suffers 1 event damage to the head and chest locations. When they finally breach the haze's end, they silently walk on. No one is comfortable sharing the terrible things they glimpsed. Each survivor gains 1 random disorder.
[c] 6+
[d<]

The survivors grasp each other's hands, form a line, and traverse the smoke. They breathe through rags and take turns peeking out for orientation. Somewhere, deep within the smoke, they stumble across a crater. They may ignore it and escape the smoke (ending this event) or explore the crater.

[TO] Choice
[td] What do you do?
[c] Explore the crater
[d<]

The survivors carefully descend into the crater, finding the ruins of a settlement surrounded by a ring of skulls. The settlement is absolutely demolished and almost everything has been ground to powder from some tremendous force. The skulls face away from the ruins and in each gaping mouth, a golden ember spews smoke.
The sight is haunting; each survivor suffers 1d10 brain event damage and gains 1 random disorder. The survivors gingerly sift through the ruins.
Nominate a survivor to <b>investigate</b> and roll 1d10.

[TO] 1d10
[td] Nominated survivor - Investigate
[c] 1
[d<]

Against all reason, you feel compelled to reach into a skull and take an ember. Your flesh sizzles, blinding you with pain yet you cannot stop yourself from reaching for your own mouth.

[TO] Check
[td] Do you have a broken jaw?
[c] Yes #Broken jaw
[d] You're thwarted. You drop the golden ember from your burning hand. Suffer the <b>dismembered arm</b> severe injury. Shaken, the survivors flee the smoke.
[c] No #No broken jaw
[d<]

Your jaw clamps shut around the ember, the flesh of your mouth melts shut, muffling your cries of pain. Smoke pours from your eyes, nose, and ears.

[TO] Check
[td] Does the settlement have <b>Survival of the Fittest</b>?
[c] Yes #Survival of the Fittest
[d] The urge to live wins out and you savagely break open your own jaw, Suffer the <b>broken jaw</b> severe head injury. The ember tumbles to the ground, its sputtering hiss ringing in your ears as all survivors flee in horror.
[c] No #
[dt] Your smoking, melting body marches robotically into the ring of skulls, laying itself in the place of the disturbed skull. The putrid smell of your burning brain suffuses the smoke in the air. The sight is so disturbing that all other survivors flee, never to speak of what happened.
[>d]
[>d]
[T]
[c] 2-4
[d] You sense the extreme danger from the golden embers and linger just long enough to grab a small trinket. Gain 1 <b>Broken Lantern</b> basic resource.
[c] 5-8
[d] You notice that the settlement is strewn with lanterns, all extinguished and smashed nearly beyond recognition. The survivors resolve that this will never happen to them. If any survivor returns to the settlement this year, gain +2`+endeavor_img+`.
[c] 9+
[dt] Amidst the ruins, you find only one unbroken object. A Twilight Sword. It rests, respectfully laid across a mostly undamaged survivor's skeleton. If the settlement does not have a <b>Twilight Sword</b>, and no survivor in the group has the <b>Honorable</b> disorder, you may nominate a survivor to gain the <b>Twilight Sword</b> rare gear. If you do and the <b>Hooded Knight</b> story event is not on the timeline, add it to the timeline 2 years from now.

[>d]
[c] Escape the smoke
[dt] Survivors escape the smoke and continue their hunt.

[>d]
[T]
[>d]
[c] Go around
[dt] They take the long way around; roll again on the hunt event table before moving on the hunt board.
`,

  74: `74 | Antler-Gouged
A great battle for dominance between two enormous antelopes has left the stone-faced ground gouged with criss-crossing scars.
Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor
[c] 1-2
[d] You trip over the jagged ground and shred your flesh! Suffer the <b>torn muscle</b> severe leg injury.
[c] 3-8
[d] You carefully tread over the destroyed faces.
[c] 9+
[dt] You find a loosened stone. Gain a <b>Founding Stone</b> starting gear.
`,

  75: `75 | Oops!
Stumbling through the darkness, the event revealer crashes into the ground, crushing their lantern beneath them. The living light inside the lantern becomes agitated by the survivor's clumsiness and burns a piece of gear. The event revealer archives 1 gear of their choice from their gear grid.
`,

  76: `76 | Dream the Way
The survivors have vivid, fevered visions of what lies ahead. All at once, they are startled awake and frantically compare the horrors they saw.
Each survivor rolls 1d10.
[i] If any survivor is a savior, their powerful dream envelopes the group; each survivor may select whatever die roll result they want.
If any survivors' rolls are the same, those survivors discover they had the exact same dream. They gain +1 insanity. If any duplicate rolls are 10s, the event revealer may re-roll any one roll result this hunt phase (any one die roll, not just their roll).
`,

  77: `77 | Sinkhole
A gaping sinkhole suddenly opens under the survivors, revealing a swirling black pool of ichor beneath them. Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.
Each straggler rolls 1d10.
[i] If any other survivor has a whip, they throw a line to the straggler. Each straggler adds +4 to their roll.

[TA] 1d10
[td] Straggler
[c] 1
[d] You are swallowed by the sinkhole. Moments later it regurgitates you completely naked. Your gear is hopelessly lost in the miasma. Archive all gear in your gear grid.
[c] 2-4
[d] The other survivors haul you up, but not before something is sucked below the surface. Archive 1 gear of your choice from your gear grid.
[c] 5-9
[d] You are dragged to safety, terrified but unharmed.
[c] 10+
[dt] After a monumental effort, the other survivors pull you free. Someone is clinging tightly to your feet (+1 population)! As they reatreat to your settlement, each survivor suffers 1 brain event damage.
`,

  78: `78 | Dead Great Game Hunter

The survivors find a corpse dressed in brightly-colored clothing, clutching something to its chest. The event revealer may <b>investigate</b>.

[TO] Choice
[td] Event revealer
[c] Investigate
[d<]

They gain +1 courage and roll 1d10.
[i] If any survivor has a whip, they lash the corpse from afar; add +4 to your roll.

[TO] 1d10
[td] Event revealer -Investigate
[c] 1
[d] He was holding an explosive! Moving it causes it to detonate, blowing off your hand. Suffer the <b>dismembered arm</b> severe arm injury.
[c] 2-4
[d] He was holding an explosive! It explodes, but you pull away before disaster strikes. Gain -1 accuracy token.
[c] 5-9
[d<]

His hands are empty.
[i] If the settlement has <b>Cannibalize</b>, gain 1 random basic resource.
[i] If the settlement has <b>Graves</b>, gain +1 understanding.

[>d]
[c] 10+
[dt] His hands contain a jeweled bottle filled with a chartreuse liquid. Gain 1 <b>Frenzy Drink</b> gear.
[>d]
[c] Move on
[dt] Roll again on the hunt event table before moving on the hunt board.
`,

  79: `79 | Dying Small Prospector
[i] If your settlement already has a <b>Portcullis Key</b>, the prospector is gone. Roll again on the hunt event table before moving on the hunt board.
The survivors discover a body slumped against a large stone face. Moving closer, they find a small, dying prospector riddled with arrows. As they approach, he growls a warning, threatening them with a huge stone shard. When he sees that they are not evil monsters, he calms down and gives them a key. With his dying breath he says: This is the key to the portcullis. Without it, you will never get through.
Record the <b>Portcullis Key</b> in the settlement record sheet notes.

[TO] Check
[td] Does the settlement have Graves?
[c] Yes #Graves
[d] The event revealer builds a small monument of broken stone noses and gains +1 understanding.
[c] No #
[d] The survivors continue their hunt.
[T]
`,

  80: `80 | Lovelorn Rock
The survivors pass a ring of stones with an unassuming boulder at the center. Each survivor rolls 1d10. The lowest scoring survivor (randomize in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[dt] The straggler hefts the boulder (it's heavy!) and promises to carry it everywhere, forever in love. They must always leave one space in their gear grid empty, as it contains their beloved rock. Record this on your survivor sheet. The rock can be lost or archived like other gear; if it is lost, the survivor mourns their beloved and reclaims the space in their gear grid.
`,

  81: `81 | Field of Arms

[img] 78

The survivors carefully tread along the back of a massive, sleeping monster. Instead of fur, it has elongated arms, several of them twitching to whatever dream the great beast is in the midst of. The survivors don't disturb the monster's deep sleep and cross without issue.

[TO] Check
[td] Does any survivor have a sickle?
[c] Yes #Sickle
[d] They gingerly remove some tough skin from one of the arms and gain 1 <b>Hide</b> basic resource.
[c] No #No sickle
[dt] The survivors continue their hunt.
[T]
`,

  82: `82 | Consuming Grass
Vibrant green grass grows in patches ahead of the survivors. Closer inspection of the delicate leaves reveals they are as sharp as any blade. Each survivor rolls 1d10. The lowest scoring survivor (or survivors, in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[d<]

As the survivors carefully pick their way past the verdant hazards, the straggler stumbles into the brush. They roll 1d10.
[i] If any survivor has a whip, a hasty tether is made. Add +4 to your roll.

[TA] 1d10
[td] Straggler
[c] 1
[d] You land in the grass patch. As you climb to your feet, you realize it's too late. The parts of your body that touched the ground have sprouted with sharp blades of grass. Any attempt to remove them only spreads them further over your body. During the showdown, you are never a threat (ignore any effect that would make you a threat, even the White Lion's <b>Sniff</b>). At the end of the showdown, your body blossoms into a whorl of immaculate green grass. Dead.
[c] 2-9
[d] You fall but manage to interpose something between the grass and your bare skin. Either archive 1 gear of your choice from your gear grid to protect yourself, or treat this result as if you rolled a 1.
[c] 10+
[d] You stop your fall before it's too late.
[>d]
[T]
`,

  83: `83 | Flesh Monolith

[img] 83

The survivors approach a 5-sided monolith made of flesh that stretches into the darkness overhead. Limbs and faces both human and bizarre protrude from all sides. The event revealer gains +1 courage and <b>investigates</b>.

[TO] 1d10
[td] Event revealer - investigate
[c] 1
[d<]

The monolith's limbs spring to life, grabbing hold before you can react.
[TO] Check
[td] Does the settlement have Survival of the Fittest?
[c] Yes #Survival of the Fittest
[d] You fight the monolith! The horrible edifice tears your arm off, but you bite one of its appendages in return, severing it! The monolith retreats into the ground as you roar in triumph. Suffer the <b>dismembered arm</b> severe injury and gain +1 permanent strength. All other survivors stand in awe and gain +3 insanity and +1 courage.
[c] No #
[dt] They join your body parts to its own with maddening efficiency as you are ripped apart in a shower of gore. Dead. The horrible sight causes all other survivors to suffer 3 brain event damage and they all gain <b>Post Traumatic Stress</b> disorder.

[>d]
[c] 2-4
[d] Hands and tentacles grasp at you. Spend 1 survival to wriggle away or treat this result as if you rolled a 1.
[c] 5-9
[d] All survivors are driven back with horror. They all suffer quarry's ★ brain event damage.
[c] 10+
[d<]

As the survivors draw near, they discover that this flesh monolith is actually an enormous pile of survivors' corpses, many with badly broken limbs. The pile is covered in chunks of strange, sweet-smelling viscera.
[TO] Check
[td] Does the settlement have Graves?
[c] Yes #Graves
[d] You ascend the heap and find 3 barely living survivors, their bodies devoid of nourishment and their eyes too sensitive for lantern light. If you return to the settlement, +3 population. These new survivors cannot depart for 2 lantern years as they need time to recover (note this on the timeline).
[c] No #
[dt] All you manage to harvest from the pile of emaciated corpses is 2 <b>Organ</b> basic resources. Their skin is too soft and bones too brittle to be of any use.
[>d]
[T]
`,

  84: `84 | Scribe's Book

[img] 84

A huge, ornately bound book lays open before the survivors.

[TO] Check
[td] Does the settlement have Pictographs?
[c] Yes #Pictographs
[d<]

Any survivor with 3+ courage may write their name in the book. <b>Insane</b> survivors with 3+ courage must write.

Each survivor who writes their name in the book rolls 1d10 and adds their understanding. If no one writes, roll again on the event table before moving on the hunt board.

[TA] 1d10
[td] Any survivor with 3+ courage
[c] 1-4
[d] As you finish writing your name, you know that you did something terribly wrong. You vanish from history. Dead. Archive your gear.
[c] 5-8
[d] Nothing happens.
[c] 9-10
[d] As you write your name, you feel restored. Heal all injury levels and lost armor points. Gain +2 survival.
[c] 11-14
[d] You feel assured that as long as your name is in the book, nothing bad can happen to you. Gain two of the following: +2 courage, +2 understanding or +2 survival.
[c] 15+
[dt] The book proves the undeniable mark you leave on the world. Gain +1 survival, +1 understanding, +1 courage, +1 permanent speed and +1 permanent strength.

[>d]
[c] No #
[dt] Survivors continue their hunt. Roll again on the event table before moving on the hunt board.
`,

  85: `85 | Test of Courage
Lava flows from the eyes of a huge, grimacing stone face. Its gritted teeth hold a worn sword. If there are any survivors with 6+ courage, choose one to brave the lava.

[TO] Check
[td] Does any survivor have 6+ courage?
[c] Yes #6+ courage
[d<]

They gain the <b>Adventure Sword</b> rare gear.

[TO] Check
[td] Does the settlement already have Adventure Sword and Storytelling?
[c] Yes #
[d<]

The survivors share stories of bravery; each survivor gains +1 survival.
[i] If the settlement also has <b>Saga</b>, the stories are exceptionally moving; each survivor also gains +1 courage.

[>d]
[c] No #
[dt] The group moves on.

[>d]
[c] No #
[d] The group moves on with a feeling of inadequacy.
[T]
`,

  86: `86 | Putrid Tunnels
The survivors smell it long before they see it, a series of cave mouths that emit noxious odors.
Each survivor rolls 1d10.

[TA] 1d10
[td] Each survivor
[c] 1-8
[d] They overcome the desire to investigate.
[c] 9+
[dt] They enter one of the tunnels and discover a wretched group of diseased survivors living in filth. All survivors who enter the cave catch their foul rotting disease. They have <b>Leprosy</b>: reduce all damage suffered by 1 to a minimum of 1. Suffer -2 to severe injury rolls. Record this impairment.
`,

  87: `87 | Weeping Faces
Water flows from the eyes of the surrounding stone faces, gathering in a small pool. Any survivor may <b>consume</b> from the pool and roll 1d10.
[i] If they have 3+ understanding, add +2 to their roll.

<b>Insane</b> survivors are inconsolable, they lay on the ground sobbing heavily. If any survivor is <b>insane</b>, roll again on the hunt event table before moving on the hunt board.

[TA] 1d10
[td] Any survivor - Consume
[c] 1-3
[d] The water is salty and sour. You can't help thinking about what you might be drinking. Suffer 1 brain event damage.
[c] 4-6
[d] Refreshing!
[c] 7-8
[d] The water is cleaner than most. You may heal up to 2 injury levels at any one hit location.
[c] 9+
[dt] The water is invigorating. Gain +1 speed token.
`,

  88: `88 | The Sword and the Statue
A one-eyed statue, twice as tall as any man, sits before a great anvil with a hammer in each of its six hands. Transfixed, the survivors watch the statue beat a red-hot sword that lies across the anvil. Each survivor, starting with the event revealer and proceeding clockwise, may make one attempt to grab the sword from the anvil. If they do, they gain +1 courage, roll 1d10 and add their Hunt XP to their roll.

[TA] 1d10
[td] Any survivor
[c] 1-2
[d] As you get near the anvil, the statue grabs the sword and plunges it into your body. There is a sharp hiss as the hot metal cools in your blood. Dead.
[c] 3-8
[d] You make a quick grab for the sword, but not quick enough. Suffer the <b>dismembered arm</b> severe arm injury.
[c] 9-13
[d] You may not be quick enough to grab the sword, but at least you're not foolish enough to die trying.
[c] 14+
[dt] Your speed is legendary. Gain the <b>Muramasa</b> rare gear. End this event.
`,

  89: `89 | Cleaner Birds
Tiny, ragged birds with needle-thin beaks fly overhead. Each survivor rolls 1d10. The lowest-scoring survivor (roll off in case of ties) becomes a straggler.

[TO] 1d10
[td] Determine straggler
[c] Straggler chosen
[d<]

The birds swarm the straggler. One forces its way into the straggler's mouth and down their throat. The survivor vomits up the well-fed bird, their insides scrambled and scarred. Gain +1 permanent luck, -1 permanent speed.
[i] If any survivor has a whip, they crack it and fell the offensive creature. Gain 1 random basic resource.

[>d]
[T]
`,

  90: `90 | Light on the Horizon
The survivors hear a screeching howl, followed by a crash. They see an explosion of multicolored light on the horizon. The unnatural light illuminates the survivors' way.

[TO] Check
[td] Is any survivor sane?
[c] Yes #Sane survivor
[d<]

Survivors follow the light. You may reroll the next result on the hunt event table.
The light reaches the settlement. Add the <b>Lights in the Sky</b> settlement event to the timeline next year.
[>d]
[c] No #All insane
[d<]

Survivors turn away from the light, walking into the darkness. Move the survivors 2 spaces back on the hunt board.
The light reaches the settlement. Add the <b>Lights in the Sky</b> settlement event to the timeline next year.

[>d]
[T]
`,

  91: `91 | The Beginning
The survivors stumble upon the scene of their settlement's first hunt. Whether they've seen it themselves or heard of it through stories, they immediately recognize it. Seeing the spot of their settlement's first triumph is electrifying.

Each survivor gains +1 survival.

[TA] Check
[td] What innovations does the settlement have?
[c] Saga
[d] Each survivor gains +1 courage.
[c] Storytelling
[dt] Each survivor gains +1 understanding.
`,

  92: `92 | Failed Start
The survivors find the tattered remains of four humans. Clad in loincloths and clutching stone shards, they bear the distinct marks of White Lion claws.
Each survivor suffers 1 brain event damage and gains 1 <b>Founding Stone</b> starting gear. Survivors with 3+ understanding also gain +1d10 insanity.
`,

  93: `93 | Lost Survivor

[img] 93 # width:25%

In a hollow between two identical rocks, you find a corpse with fabulous hair clutching a book to its chest.

[TO] Check
[td] Does the settlement have Pictographs?
[c] Yes #Pictographs
[d<]

The event revealer may read from the book and roll 1d10.

[TO] Choice
[td] Event revealer
[c] Read
[d<]

The book tells the tragic tale of two survivors who found a love they could never have.

[TO] 1d10
[td] Event revealer
[c] 1-3
[d] Page 3 - Dual Nature. The lovers' settlement was destroyed, and they were stolen away. The event revealer feels conflicted. After the showdown, they leave the settlement forever in search of something.
[c] 4-6
[d] Page 6 - The man spent years enduring horrible torture for the sake of his beloved. Each wound only strengthened the man's resolve. Gain +1 permanent speed and the <b>Anxiety</b> and <b>Traumatized</b> disorders.
[c] 7+
[dt] Page 9 - The man escaped, yet never returned. He knew that if he did, it would doom his beloved. He decided it was best for him to fade into memory to protect the few smiles his existence had inspired. Gain +1 courage and the <b>Tough</b> and <b>Last Man Standing</b> fighting arts.

[>d]
[c] Don't read
[dt] The survivors move on, deeply confused.

[>d]
[c] No #
[dt] The survivors move on, deeply confused.
`,

  94: `94 | Sickening Mess
The survivors come upon a patch of badly damaged ground. The stone faces are cracked and debris is strewn everywhere. Piles of toxic-smelling dung and half-digested viscera litter the area. The survivors approach, but survivors with <b>Squeamish</b> disorder refuse to go any closer.

<b>Insane</b> survivors <b>consume</b> what they find and make themselves sick; they gain -1 strength token. Sane survivors stop to <b>investigate</b> the mess. Each gains +1 courage, rolls 1d10, and adds their understanding.

[TA] 1d10
[td] Each sane survivor - Investigate
[c] 1-2
[d] You become lightheaded sifting through the piles of dung; uncontrollable gagging ensues. Gain -1 strength token.
[c] 3-8
[d] Heaving, eyes filled with tears, your sickening hunt pays off. Gain 1 random basic resource and suffer 1 event damage to a random hit location.
[c] 9+
[dt] Your intuition pays off! Gain 1 random basic resource.
`,

  95: `95 | Grim and Frostbitten
There is a dead stillness in the air. The atmosphere becomes thick with worry and the survivors carry on nervously. A bitter, evil cold sets in and there is no shelter.
The survivors huddle together for warmth, shivering loudly. Unless a survivor has armor gear at each hit location, they lose ★ survival.
`,

  96: `96 | Cloaked Stranger
A cloaked form steps out from a patch of darkness ahead of the survivors. Its illfitting garment shifts atop its form and its trudging leaves dark, black puddles in the mouths of the rain-slick stone on the ground.
The event revealer approaches the stranger and rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-2
[d] The stranger's approach fills your ears with painful static. There is a flash of light and a loud crack. You fall to the ground, holding your bloody chest in pain. Suffer the <b>ruptured spleen</b> severe body injury. All <b>non-deaf</b> survivors suffer 2 brain event damage.
[c] 3-4
[d] The stranger ripples in and out of focus as you approach. When you reach them, they are gone, their form impossible to remember. Gain 1 bleeding token and forget 1 fighting art of your choice.
[c] 5-6
[d] As you near the stranger, you realize that they're floating in the air! You barely make out a dry rasping coming from the form that seems to resemble... laughter? After the stranger departs, you return to the group, face bone-white, refusing to speak of what you saw. Suffer 3 brain event damage.
[c] 7-8
[d] The stranger raises its arms and moves to meet your approach. From beneath the folds of its cloak, you can just make out a hint of violet, scaly hide. A claw extends from a sleeve and gently strokes your cheek, leaving a layer of viscous liquid behind. Wiping off the sludge, you find the bizarre experience strangely touching. You gain +1 survival, +1 understanding.
[c] 9+
[d<]

The stranger orders you to organize a test of strength among the survivors. Each survivor must roll 1d10 (roll off in case of ties). The highest scoring survivor wins the melee.
[TO] 1d10
[td] Determine winner
[c] Winner chosen
[dt] The stranger marks their face with its glistening claw, granting them the <b>Iron Will</b> ability: You cannot be knocked down. Reduce all knockback you suffer to knockback 1. Record this ability. All survivors lose 4 survival from the exhausting fight.

[>d]
[T]
`,

  97: `97 | Living Stone
The ground suddenly shifts and rises sharply into the air! The survivors find themselves clutching the back of a giant creature that lay sleeping beneath their feet. The survivors hold on for dear life, absolutely terrified.
Nominate a survivor to climb toward the top of the giant and see what lies ahead. They roll 1d10.

[TO] 1d10
[td] Nominated survivor
[c] 1
[d] Your motion irritates the giant, sending the survivors flying off! All survivors suffer 1d5 event damage to a random hit location. Archive all <b>fragile</b> gear.
[c] 2-7
[d] You reach the top and have a perfect vantage point to see the world, if only there were enough light to see it. Set your insanity to O. The giant carries you exactly where you're going! Start the showdown immediately.
[c] 8+
[dt] You discover a bizarre creature with an inverted face diligently carving upon the giant's back. It discards damaged stone faces as it works. Each survivor catches a fragment, gaining 1 <b>Founding Stone</b> starting gear. Eventually, the giant settles down into the ground again. You dismount and discover your quarry! <b>Ambush</b> the monster!
`,

  98: `98 | Bloody Eyes

[img] 98 # width:35%

The survivors find a trail of blood. It pools in the eye sockets of the stonefaced ground. The blood is still warm.
The event revealer may <b>investigate</b> and roll 1d10, or ignore the trail and end this event.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-3
[d] One of your own is slumped at the end of the trail, bleeding terribly. Choose a random survivor, they gain 3 bleeding tokens. All survivors suffer 3 brain event damage.
[c] 4-6
[d] The trail leads to a huge box. Trapped inside is a young, red-haired survivor. Gain +1 population. The carvings adorning the box are haunting. All survivors suffer 3 brain event damage.
[c] 7+
[dt] The trail leads to your quarry! The monster is wounded from a previous battle. Start the showdown immediately. At the start of the showdown, the monster suffers 1 wound.
`,

  99: `99 | Portcullis

[img] 99

The survivors approach a massive portcullis standing in the darkness. It is not attached to anything and does not bar their way. They may choose to walk around it.

[TO] Check
[td] Does the settlement have the Portcullis Key?
[c] Yes #Portcullis Key
[d<]

They may erase it from the settlement record sheet and use it.
[TO] Choice
[td] Use the Portcullis Key?
[c] Yes #Open the portcullis
[d<]

Each survivor gains +1 courage. The portcullis creaks open and the survivors step through. A dank gloom awaits the survivors inside.
[TO] 1d10
[td] Event revealer
[c] 1
[d] The portcullis suddenly slams shut behind them and the lights of their lanterns begin to dim. The last thing the survivors see is the grimace of fear on each other's faces as the dark closes in. The survivors are dead.
[c] 2+
[dt] At their feet lies an ornate crucible with a void in the shape of a mighty weapon. Gain the <b>Perfect Crucible</b> strange resource. If they have a Blacksmith in their settlement, they may now craft a <b>Perfect Slayer</b>.

[>d]
[c] No #Walk around
[dt] Roll again on the hunt event table before moving on the hunt board.

[>d]
[c] No #Walk around
[d] Roll again on the hunt event table before moving on the hunt board.
[T]
`,

  100: `100 | The Finale

An enormous, metallic sound rings out from a distance. All survivors are electrified with dread; they suffer 2 brain event damage.

[TO] Choice
[td] Follow the sound?
[c] Yes #Follow the sound
[d<]

Each survivor gains +1 courage and gingerly approaches the sound's origin. As they travel, they pass the shattered corpses of strange beasts.

[TO] Check
[td] Does any survivor have 3+ understanding?
[c] Yes #3+ understanding
[d<]

Survivors follow the trail of corpses.

[img] 100 # width:35%

Arriving at a massive anvil, the survivors see a giant, one-eyed knight, its charcoal-colored armor reflecting their lantern light.
The event revealer rolls 1d10.

[TO] 1d10
[td] Event revealer
[c] 1
[d] The knight stares at the survivors. All survivors with less than 3 courage are struck dead. All other survivors flee in horror.
[c] 2-8
[d] The knight approaches the survivors. In an instant, it chops off a random survivor's ear; they gain 1 bleeding token. Then, it strikes the anvil, blinding the survivors with a churning wall of sound. When they open their eyes, the knight is gone and the <b>Steel Sword</b> and <b>Steel Shield</b> rare gear rest in its place. The group divides the gear between them.
[c] 9+
[dt] The knight smashes the object in its hands upon the anvil. When the molten orange object cools, it sets into a massive lion-faced hammer. The knight places it in the hands of the survivor with the highest courage (roll off in case of ties). They gain the <b>Thunder Maul</b> rare gear. A current of electricity runs through their body, joining weapon and survivor forever.
[>d]
[c] No #Less than 3 understanding
[dt] Harvest 3 random basic resources from the corpses and end this event.

[>d]
[c] No #Retreat
[dt] Survivors panic and retreat in the opposite direction; end this event and move the survivors 2 spaces back on the hunt board.`,
}

module.exports = {
  random_hunt_events,
}
