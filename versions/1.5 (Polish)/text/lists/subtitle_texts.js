const texts = {
  'age': {
    'text': 'Your time in the darkness changes you.'
  },
  'armored strangers': {
      'text': 'You are visited by enigmatic figures, fully-enclosed in armour. They march silently through the settlement. The only noise is a metallic clang, as they pause before each survivor and tap their lantern halberds against the ground. The survivors have no choice but to helplessly await their mute deliberations.'
  },
  'birth of a savior': {
      'text': 'The newborn vanishes from the loving arms of the settlement for a fraction of a second. In that second, it spends a lifetime in the domain of the Ethereal Dreamer and returns with a dream.'
  },
  'blackout': {
      'text': 'All at once and without warning, the collected sum of the settlement’s lanterns go black. The settlement is plunged into darkness.'
  },
  'bold': {
      'text': 'In a single moment, your perspective changes profoundly.'
  },
  'bone witch':{
      'text': 'One day, the exile emerged from the darkness. The settlement worried at the sound of her wailing chants. Everyone feared what mystery kept her alive in the darkness all these years. Some could not resist asking.'
  },
  'cooking': {
      'text': 'The survivors experiment with scraps of foodstuffs. The savoury discovery is palatable.'
  },
  'crush and devour': {
      'text': 'The survivor disappears, shrieking, into the Screaming Antelope’s giant under-maw.'
  },
  'endless screams': {
      'text': 'A scream pierces the silence around the settlement. As the noise fades, a chorus of horror rises up in answer. The settlement erupts into chaos trying to comprehend the source of the terrible wail.'
  },
  'game over': {
      'text': 'Your campaign has ended in death and magnificent hopelessness. The settlement is lost.'
  },
  'hammer and nail': {
      'text': 'You pour all of your might into resisting the unstoppable strike, your fingernails peel backwards and hair grows downwards into your scalp.'
  },
  'hands of heat': {
      'text': 'The mystery of lantern’s glow.'
  },
  'hooded knight': {
      'text': 'A stranger emerges from the darkness.'
  },
  // 'hunt': {
  //     'text': 'The Hunt begins!'
  // },
  'insight': {
      'text': 'In a single moment, the curtain of the world pulls back.'
  },
  'intimacy': {
      'text': 'The mystery of intimacy takes place in the settlement.'
  },
  'kings curse': {
      'text': 'The survivor that dealt the killing blow feels their heart sink.'
  },
  'kings step': {
      'text': 'Resist the unspoken pressure of the monster’s onslaught.'
  },
  'lantern research': {
      'text': 'Without hope, tenacity drives the settlement forward.'
  },
  'legendary lungs': {
      'text': 'The sensation of Butcher’s attack is similar to drowning. Desperately, you grasp for air, only to be met with a mouthful of steel.'
  },
  'oxidation': {
      'text': 'You approach the defeated Watcher. Its body crackles with electricity.'
  },
  'phoenix feather': {
      'text': 'The skies bubble and murmur as a dark presence tears through the atmosphere like a negative lightning bolt, sucking the air and energy from all who gaze upon it. A light rain begins. The survivors turn their eyes up to see a huge, iridescent feather slowly floating toward the ground. Their lantern lights reflect strange rainbows off the twisting feather. A primal fear takes root in the settlement.'
  },
  'principle conviction': {
      'text': 'The survivor must find a reason to be. Treasure the darkness in all its mystery, or seek to master it and grow strong.'
  },
  'principle death': {
      'text': 'The group must decide what to do with their first survivor corpse.'
  },
  'principle new life': {
      'text': 'The group must decide how to raise the young.'
  },
  'principle society': {
      'text': 'There was once a mad woman who spent her days talking to the darkness. One day, it spoke back.'
  },
  'regal visit': {
      'text': 'The hand strides into the settlement. The survivors’ thoughts vanish as they fall to their knees, stuck dumb by its glorious, incomprehensible presence.'
  },
  'see the truth': {
      'text': 'The greatest courage is achieved when the past and future are abandoned. The void that remains is a dark, endless well of strength. Fear and pain are your nourishment, and you will feast.'
  },
  // 'settlement': {
  //     'text': 'Another day in the settlement.'
  // },
  'showdown butcher': {
      'text': 'Był kiedyś człowiek, który nie potrafił ukryć swojego strachu. Nosił maskę, która zmieniała jego tchórzostwo w furię. Zmieniło to mężczyznę w potwora. Aż pozostała tylko niszcząca furia, nocny prześladowca kolekcjonujący przerażone twarze.'
  },
  'showdown gold smoke knight': {
      'text': 'Na osadę opada całun popiołu. Gdy Ocalali się gromadzą, podmuchy płonącego żużlu buchają w tłum. Zapach przypalanych włosów i skóry uderza w nozdrza. Błysk światła rozświetla ciemność, ukazując ogromny kształt zbliżającego się kondotiera, ściskającego masywny, ozdobny młot. Wielkie pióropusze atramentowego dymu, wylewają się z każdej szczeliny złocistego pancerza. Złoty Kondotier przemawia w nieznanym języku. Donośny, metaliczny głos, dudni echem w jego pancerzu. Jest spokojny, czeka na swoich przeciwników.'
  },
  'showdown kings man': {
      'text': 'Był kiedyś potwór, który miał poprowadzić królewską procesję swojego pana. Najpierw przybył potwór jako herold, następnie jego głodni panowie. Pan potwora był tak potężny, że nigdy nie myślał o obronie swoich pleców, wiedząc, jaki pełen grozy stwór stoi za nim.'
  },
  'showdown phoenix': {
      'text': 'Feniks wypełnił ci umysł aż po horyzonty. Twoje jestestwo przepełnione niepokojem, zdaje się migotać niczym umierająca latarnia. Miesza się w tobie idealna mieszanka ekscytacji i strachu. Zanim zdasz sobie z tego sprawę, zaczynasz walczyć.'
  },
  'showdown screaming antelope': {
      'text': 'Był kiedyś przerażający potwór, wyszkolony przez Namiestnika, by być rumakiem dla Goblina. Potwór wyczuł jednak nowego pana. Jego umysł rozpadł się, a on pomknął w nieznane, tocząc pianę z pyska i gryząc nosy kamiennych twarzy na ziemi.'
  },
  'showdown the hand': {
      'text': 'Była kiedyś istota, która wiedziała wszystko, ale nigdy się nie odzywała. Z każdą tajemnicą, która uciekła, stawała się słabsza, a jej wrogowie silniejsi.'
  },
  'showdown watcher': {
      'text': 'Dawno temu, drapieżne bestie przeszukiwały ciemność. Używały swoich bystrych zmysłów, by wytropić zdobycz. W oddali ujrzały rozkwitający słup światła, otoczony smacznymi kąskami, stworzeniami pochłoniętymi swoją pracą. Oblizując się, nadchodziły cicho. Wtem bestie zatrzymały się w pół kroku. Wiatr niósł woń odrażającej, groźnej obecności. Ruchliwe stworzenia z całą pewnością były nieszkodliwe. Jednak groźne ostrzeżenie przewiercało aż do szpiku kości. Instynktownie bestie odwróciły się i odbiegły szukając posiłku gdzie indziej.'
  },
  'showdown white lion': {
      'text': 'Była kiedyś bestia, która chciała poczuć, jak miękkie ma futro. Ponieważ sama nie mogła dosięgnąć własnych pleców, zabiła wiele inych stworzeń, by móc spędzać czas na drapaniu się ich łapami. Powiadają, że gdy potwór ostatecznie zabił człowieka, mógł rozkochać się w swych miękkich włosach. Ponieważ jego łapy wyrosły w parę pięknych ludzkich dłoni.'
  },
  'watched': {
      'text': 'Dark spots across the lantern hoard. A nervous hush falls over the settlement. Slowly, the most daring survivors peer past the darkened lanterns, venturing beneath them into a vast chamber, unknown and undreamed of. Slumbering in the center of the chamber, the survivors can feel a presence of immense danger. Their ultimate predator would soon wake, extinguishing the lantern light that holds the endless darkness at bay.'
  },
  'white secret': {
      'text': 'A dream, buried deep in memory, suddenly surfaces. You feel her hot breath bathing your ear, hissing whispers. She had come to you bearing the secrets of the world and you had merely forgotten, until now.'
  },
  'zero presence': {
      'text': '“Which is more terrifying.” You ponder. “the monster or the sudden absence of it?”'
  },
  'fetid grotto': {
      'text': 'Approaching their quarry the survivors are overcome by a sickening miasma.'
  },
  'final march': {
      'text': 'The survivors lay a trap to discover the elusive final resting place of the ancient Gorm.'
  },
  'melting horror': {
      'text': 'Shocked to be standing, the bitten survivor clutches their wounds in disbelief.'
  },
  'showdown gorm': {
      'text': 'One day, great woe fell upon the settlement. Unrelenting storms raged overhead. Out of the squall, a giant beast came to gobble up the strongest and most beautiful, then wandered back into the darkness with a lonesome cry, searching for a mate.'
  },
  'the approaching storm': {
      'text': 'The settlement’s weather takes a turn for the worse.'
  },
  'showdown dung beetle knight': {
      'text': 'There was once a lowly beetle that was hopelessly attracted to Phoenix droppings. Their strange qualities evolved the beetle rapidly. One day, the Phoenix migrated to a sacred grove and the beetle’s food came under the fierce protection of a Flower Knight. The beetle emulated the knight in order to reach its meals without incurring the guardian’s wrath.'
  },
  'spelunking of death': {
      'text': 'The group investigates the monster’s network of tunnels and are inspired by the rich vegetation.'
  },
  'underground sow': {
      'text': 'The settlement laboriously works the ground.'
  },
  'sun dipping': {
      'text': 'Beams of light spear the ground, driving danger away.'
  },
  'the great sky gift': {
      'text': 'The sun\'s mouth opens, creating a deafening drone, and begins to power vomit water directly into the sacred pool. The survivors recognize the gift and cheer as the mineral- and bacteria-infused liquid gushes out, its surface casting colorful reflections off of lanterns around the settlement.'
  },
  'birth of color': {
      'text': 'The atmosphere becomes cold, and black for creeps from the Sacred Pool filling the settlement. Light from above rapidly flickers and bounces off of the fog in a spectacular fashion. The settlement looks as if it is encased in a shimmering black jewel. The swollen eggs begin to crack, spilling a variety of translucent liquids. Small tentacles reach out towards the light above, awakening the survivors\' maternal instincts. They rush to the aid of the tiny entities, helping the on that are ready into the world. It is a bizzare and beautiful moment that leaves much of the settlement in an emotional state.'
  },
  'final gift': {
      'text': 'Something was different. Tradition said that after the solar ritual, sacred water would be vomited from the sun. But there was no water, and soft yellow hues emanating from the sun had turned a harsh red.'
  },
  'edged tonometry': {
      'text': 'In a dim silence, the survivors gathered around a mysterious sword master. As instructed, each had one eye covered by a patch and was forbidden to blink with the other. Their exposed eyes dry and twitching they peered into the darkness.'
  },
  'warriors of the sun': {
      'text': 'The newborn\'s cellular makeup changes.'
  },
  'the great devourer': {
      'text': 'The Sun descended, scattering its little ones and devouring those too slow to escape. The survivors\' world is shattered, as the very thing they\'ve been worshiping for generations attacks them.'
  },
  'an uninvited guest': {
      'text': 'They awoke to find someone new standing at the center of their settlement. Still as a statue, a lion-like creature with razor claws stood seeing everything and saying nothing. They wondered if it was even alive, but the boldly curious reported an electrifying gaze in its still eyes. What is this creature? Why is it here?'
  },
  'places, everyone!': {
      'text': 'Suddenly, three more figures appear, stirring up a commotion. Despite the whirlwind of activity around it, the Lion Knight remains still.'
  },
  'showdown lion knight': {
      'text': 'There was once a monster who was shunned by its creator and left to wander the darkness. Lost in the world of humans, it was driven insane in its attempts to comprehend them. Now, the only reality it accepts exists deep inside its hollow, broken mind.'
  },
  'intermission': {
      'text': 'The showdown ends. The Lion Knight resumes its repose.'
  },
  'strange caravan': {
      'text': 'Camped outside of the Lion Knight\'s view, the retinue unpack a caravan of trash and treasures. The trick is figuring out which is which.'
  },
  'showdown manhunter': {
      'text': 'It came from a distant, golden city. It came hunting to serve some horrifying purpose. It came without remorse, without mercy, and without explanation. It came for you.'
  },
  'lottery': {
      'text': 'The Manhunter is pleased with how easy it is to cull your settlement. It returns to claim a survivor for an unknown purpose.'
  },
  'showdown slenderman': {
      'text': 'Pewnego dnia, samotny mężczyzna wrócił do domu i stwierdził, że jego długie, samotne godziny już go nie martwią. W rzeczywistości nie mógł ich w ogóle zapamiętać. Każdego dnia wychodził z domu pełen lodowatego bólu w kościach i bez wspomnień z poprzedniego dnia. Pewnego dnia wrócił do domu i stwierdził, że nie był przecież sam. Potem już go nie było.'
  },
  'dark place': {
      'text': 'Ocalały patrzy w przerażeniujak czarna woda w niewytłumaczalny sposób rozlewa się wokółjego stóp.'
  },
  'light-forging': {
      'text': 'Przez krótki czas dziwaczne właściwości fizyczne i chemiczne ciemnego miejsca zostają odtworzone w kryształowej komorze ciśnieniowej.'
  },
  'forgotten fear': {
      'text': 'W jednej chwili przypominasz sobie koszmary z przeszłości kiedy widzisz znajomą, wiotką postać stojącą beztrosko pośród Ocalałych. Twoje krzyki dławią strużki mrocznej wody wylewające się z twoich ust.'
  },
  'glowing crater': {
      'text': 'A secret glimpsed becomes an obsession.'
  },
  'showdown dragon king': {
      'text': 'There was once a monster that was alone in the world. Abandoned in its grief, the monster crawled deep inside its aching heart until it broke and was set aflame. Now, the power of its grief and fury pours like invisible poison from the weeping face it hides inside its hulking body.'
  },
  'meltdown': {
      'text': 'An unseen blast tears through the darkness'
  },
  'midnight\'s children': {
      'text': 'Weakness is anathema to strength'
  },
  'awake': {
      'text': 'A tooth-grinding crescendo of emotion suddenly stops, leaving you in a moment of serene clarity.'
  },
  'unveil the sky': {
      'text': 'Reality is shattered, revealing the teeming depths of the limitless night.'
  },
  'faces in the sky': {
      'text': 'Suddenly, a second heartbeat pulses in your eardrum, a second spirit roars in your breast. You look up, locking eyes with an enormous shrouded face visible to your eyes only. It is the face of the stars and you are one of the People of the Stars.'
  },
  'the tomb': {
      'text': 'To become gods, you must kill God.'
  },
  'showdown the tyrant': {
      'text': 'There was a monster whose only fear was to be forgotten. Driven by that terror smoldering in its heart the monster inscribed its face in the sky with a glowing breath. All who saw it grew sick and died leaving nothing alive that could remember the monster\'s face.'
  },
  'showdown white gigalion': {
      'text': 'There was once a White Lion cub whose belly yawned with hunger. It pushed in the gathered pack and always ate more than its share. Resentful, the pack nipped its hauches until they bled, but the cub\'s hunger never relented. The monster grew so large that the bites of its kin no longer penetrated its hide. Their resentment turned to dread, so they banished it. The monster cried for the love of its pack but they turned their shimmering manes away in unison. Perhaps it was a lifetime of deprivation and insults. Perhaps its family\'s intuition was right. It devoured them before wandering into the darkness, doomed to never find another like itself.'
  },
  'looming storm': {
      'text': 'A distant clamor breaks the peaceful drumming of rain on metal, drawing the attention of the otherworldly Storm Knight to the world far beneath it\'s lofty domain. The abstruse being, obscured by a shroud of steam and water vapor issuing forth from the crevices of its ornate armor, had grown fond of the remote settlement developing below. The survivors\' growing potential as challengers had finally come to rouse the knight from its rainladen reverie. With a thought the atmosphere around the Storm Knight contorts to its tumultuous will. Billowing thunderclouds spread to the horizon as strong winds lash the stone-faced plains. A grand display of lightning illuminates the knight\'s floating castle, casting sword-shaped shadows against the backdrop of a churning mesocyclone. Bolts of lightning fall upon the settlement as the knight\'s decree issues forth, scarring the earth at it\'s center. Those capable of braving the inclement weather come upon a message:<br />"I demand metal, by offering or by sword."'
  },
  'showdown storm knight lv.1-2': {
      'text': 'An elegant armored figure appears outside of the settlement in a flash of lightning. Its arrival is accompanied by a sudden downpour. The survivors brace themselves against the storm and struggle to behold the mystifying force. The knight slowly raises its many-faced helmet, taking a moment to cast a deep and synchronous glare, as the sound of rain striking metal rises above distant thunder.'
  },
  'ill-fated circumstance': {
      'text': 'Desperate, full-lunged screams wake the sleeping settlement from rainswept dreams. Bedding is cast aside and abandoned as a chilling thud—muffled by the low rumble of thunder and constant rainfall—silences the jarring screeches of another defeated challenger. Peering out, the curious survivors spy an unnaturally splayed corpse on the far outskirts of the settlement. The silhouettes of storm worshipers emerge from the darkness beyond the light cast by the settlement\'s lanterns.'
  },
  'rise to the challenge': {
      'text': 'The lantern hoard shudders beneath the unrelenting storm. Howling gales and brilliant flashes of lightning hush the weather-beaten settlement as the forms of the nominated survivors disappear into the darkness overhead. The hapless collective left behind huddle together in their vulnerable agglomerations of stone, wood, and hide. Undaunted survivors peer up and wonder what unknown curiosities and unfathomable destination await their companions. Above the rain-soaked plains, the violent tempest batters the remote hunting party.'
  },
  'showdown storm knight lv.3': {
      'text': 'A wearying, turbulent ascent rewards the battered survivors with a floating ruin. The weathered citadel, wreathed in billowing thunderclouds, mystifies the rain-soaked party. As biting winds force the survivors forward, silent bolts of lightning cleave through the swirling atmosphere around them. Boundless electricity dissipates along the elaborate protrusions mounted across the castle\'s crenelated parapets and archways. The end of the survivor\' long journey approaches. They say if you reach the peak of this castle hidden within the storm you will find a sublime sight, obscured by constant rainfall and blinding flashes of light. Treasured by a zealous cult of worshipers, the enigmatic knight awakens for only the strongest challengers. It\'s lingering will for combat sustains it.'
  },
  'showdown allison the twilight knight': {
      'text': 'The girl could only run, pursued by the ravenous sounds of hunger and terror in the dark. It grew closer. Louder. Just when she found herself in its maw, she screamed. It too screamed, but in pain. After a long while, the girl opened her eyes to find the creature drowning in its own blood. The faint hue of a blue lantern fading in the darkness illuminated a slender, hooded figure clutching a whispering blade.'
  },
  'the order': {
      'text': 'Following the sounds of a nearby battle, survivors come across a hooded stranger, tearing apart a wandering creature with a familiar blade. Before long, the sounds of death and guttural vibrations immerse the darkness. Impressed, the settlement is convinced to Send Initiates to learn from this powerful stranger.'
  },
  'return of the order': {
      'text': 'Survivors are startled to find the Initiates that left previously with the hooded stranger have returned as Apprentices'
  },
  'who watches the watcher': {
      'text': 'As they adjust to a world of ever-present darkness, the survivors ponder their past encounters: the knight, the apprentices, the Order. What else would have prepared them to face such a nightmarish creature? Or perhaps it never would have threatened them had these encounters not occurred. Disagreement divides the settlement.'
  },
  'showdown flower knight': {
      'text': 'In the heart of the forest dwells a delicate gardener who appreciates solitude over all things. Sadly, the dangerous flora and fauna it cultivates are desired by many. To preserve the hidden world it created for itself, it trades its tools for a deadly blade without hesitation.'
  },
  'the forest wants what it wants': {
      'text': 'The silence and darkenss is broken by a glowing hum that whispers into their bones...'
  },
  'breakthrough': {
      'text': 'For a brief instant, a weakness is found in the Flower Knight\'s seemingly impenetrable defenses.'
  },
  'sense memory': {
      'text': 'Rushing into the settlement, the returning survivors desperately attempt to convey to the others the powerful memories that dwelt in the very air of the glade. Even as they pass the settlement\'s threshold, the memories fade and the delicate blooms clutched in their hands wilt.'
  },
  'necrotoxic mistletoe': {
      'text': 'Small berried plants bloom all over the settlement, and airy pollen clusters dance in the lanter light as they fall from the atmosphere above.'
  },
  'spidisyphus': {
      'text': 'Survivors roll a legless ball to the settlement.'
  },
  'puppets embalming': {
      'text': 'By the time your body is freed from the stalk, all of your blood has been replaced.'
  },
  'silk surgery': {
      'text': 'Strange possibilities are proffered to those bold enough to gamble with their own flesh.'
  },
  'taken': {
      'text': 'The monster has its revenge on the settlement...'
  },
  'showdown spidicules': {
      'text': 'All good children know to hide when they hear the signs of the knocking ghost. A rapping outside your hovel, a laugh like dried leaves blowing over ground, the shadow of a familiar face disappearing around a corner. All bad children that dare go outside when it comes around will be snapped up, never to be seen again.'
  },
  'a gracious host': {
    'text': 'The worm\'s whispers overwhelm you, compelling you to consume it.' },
  'death reading': {
    'text': 'A ritual deciphering of ancient artifacts.'
  },
  'necropolis': {
    'text': 'A frantic dive into the unknown.'
  },
  'showdown lion god': {
    'text': 'There was once a ruler that outlived their kingdom. As their body began to pertrify, they were visited by a worm that offered them power in exchange for their memories. Now a mindless beast, silver oozes from its nails and warps its bones as it rages in the ruins of its city, always in pain.'
  },
  'conquer your shadow': {
    'text': 'Pushed to your limits and barely conscious, your shadow confronts you. Grinning desperately, you are unable to tell if this is a delusion or a rare opportunity.'
  },
  'intimacy_stars': {
      'text': 'The mystery of intimacy takes place in the settlement.'
  },
  'intimacy_sun': {
      'text': 'The mystery of intimacy takes place in the settlement.'
  },
  'showdown lonely tree': {
    'text': 'There was once a woman who loved a sad man with a hole in his heart. The harder she tried to fill it, the more drained she felt. When there was nothing left of her, she killed herself under an old tree and let its roots drink her blood. Soon after, the sad man disappeared from the settlement. The tree bore a tear-shaped fruit.'
  },
  'showdown sunstalker': {
    'text': 'There is a great castle in the sky shaped like a sword. At the top stands the Storm. Tired of its ineffective challengers, the Storm sought to give them an advantage. The Storm dragged the oldest Sun into the Sky and chained it to the top of its castle to give its challengers light. Now, when a challenger is defeated and rain strikes the stone-faced floor, the Sun cries out for help, igniting the sky with desperate flashes of light.'
  },
  'sky fishing': {
    'text': 'You inflate the lure and gently launch it into the air. It floats into the darkness, and the group nervously waits. After a time, you Feel a Bite'
  },
  'white speaker': {
    'text': 'A large bizarrely dressed woman offers to share a story.'
  },

  'showdown gigalion': {
    'text': 'There was once a White Lion cub whose belly yawned with hunger. It pushed into the gathered pack and always ate more than its share. Resentful, the pack nipped its haunches until they bled, but the cub\'s hunger never relented. The monster grew so large that the bites of its kin no longer penetrated its hide. Their resentment turned to dread, so they banished it. The monster cried for the love of its pack but they turned their shimmering manes away in unison. Perhaps it was a lifetime of deprivation and insults. Perphaps its family\'s intuition was right. It devoured them before wandering into the darkness, doomed to never find another like itself.'
  },
}

module.exports = {
 texts,
}
