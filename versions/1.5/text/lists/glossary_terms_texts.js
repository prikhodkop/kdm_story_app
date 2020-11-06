const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Abilities': {
   'label':'',
   'description':'Skills and techniques learned by survivors, usually through story events, and recorded on the Survivor Record Sheet.',},
 'Absorb': {
   'label':'',
   'description':'The Watcher\'s Instinct. Described on the Watcher\'s showdown story event.',},
 'Accessory': {
   'label':'',
   'description':'A gear special rule. Accessory gear may be worn in addition to armor on a hit location. Each accessory specifies the hit location it covers.',},
 'Accuracy (Attribute)': {
   'label':'',
   'description':'Represents permanent changes to attack rolls. Positive attribute adds to the dice roll, while negative attribute subtracts from the dice roll.',},
 'Accuracy (Weapon/Attack Profile)': {
   'label':'',
   'description':'The number that each attack roll result must meet or exceed in order to be considered a hit. Listed on monster attack profiles and weapon gear.',},
 'Act': {
   'label':'',
   'description':'The part of the survivors’ turn in which an individual survivor gains +1{image@images/icons/movement} and +1{image@images/icons/activation}. Each survivor must complete their act before another may start theirs, and all unused {image@images/icons/movement} and {image@images/icons/activation} are lost when a survivor ends their act.',},
 'Action': {
   'label':'',
   'description':'Most things a survivor or monster can do during the Showdown Phase, like moving and attacking, are actions. Monster cards are made up of multiple actions. For example, Pick Target is an action and a monster trap card has actions listed on it. With exception to survival actions being performed at specific opportunities, a survivor cannot perform an action while another action (survivor, survival or monster action) is being performed.',},
 'Activation': {
   'label':'',
   'description':'Activation ({image@images/icons/activation}) can be spent to attack, activate some gear, and interact with terrain. Survivors gain one {image@images/icons/activation} during that survivor\'s act.',},
 'Adjacent (Miniature)': {
   'label':'',
   'description':'A miniature is adjacent to another when it occupies a space one space in a cardinal (non-diagonal) direction from a square occupied by the other miniature.',},
 'Affinity (Completed)': {
   'label':'',
   'description':'Some gear cards have red, blue, or green half-squares on the card edge. If a half-square is adjacent to a half-square of the same color on another gear card, the complete square they form is one affinity.',},
 'Affinity Bonus': {
   'label':'',
   'description':'A type of gear special rule. Having the indicated number of colored affinities will trigger the effect. Each affinity bonus only applies once, regardless of how many extra affinities a survivor has.',},
 'After Damage': {
   'label':'',
   'description':'An attack trigger found on some monster Al attack profiles. If there are any successful hits in the attack, resolve all damage from all hits in this attack (roll hit location dice, apply damage to hit location), then apply this trigger\'s attack effects. If there is no damage dealt from the attack, do not apply this effect.',},
 'After Hit': {
   'label':'',
   'description':'An attack trigger found on some monster Al attack profiles. If there are any successful hits in the attack before rolling hit location dice, apply this trigger\'s attack effects.',},
 'Aftermath': {
   'label':'',
   'description':'The end of a showdown Phase. Contains different outcomes based on the survivors\' success or failure.',},
 'AI Card': {
   'label':'',
   'description':'Al cards are made up of actions, flows and alerts, some cards also have persistent injury and/or definition boxes. There are four kinds of Al cards: Basic (B), Advanced (A), Legendary (L) and Special (S).',},
 'Alerts': {
   'label':'',
   'description':'Actions following an alert contain important conditional information that must be considered to determine if the action is performed. Continue to perform any further actions on the Al card unless stated otherwise. Survival may not be spent during an alert.',},
 'All Survivors': {
   'label':'',
   'description':'An effect during the showdown that refers to all survivors applies to all survivors currently on the showdown board. Unless explicitly stated otherwise survivors removed from the showdown board are unaffected.',},
 'Ambush (Monster)': {
   'label':'',
   'description':'If the monster moves into the survivors\' hunt board space, it ambushes the survivors. End any current hunt events and start the showdown immediately. Survivors skip their first turn. In most cases, this means that the monster will take two turns in a row.',},
 'Ambush (Survivors)': {
   'label':'',
   'description':'Some hunt events allow the survivors to ambush the monster. If they do, survivors may go first in the showdown. Do not follow the setup rules on the monster\'s story event. Instead, place the listed showdown terrain, the monster, and survivors on the showdown board as the players decide (setup rules on terrain cards must still be followed).',},
 'Ammo - Bow': {
   'label':'',
   'description':'A gear special rule. You must have a bow in your gear grid to activate this card. Ammo has the range of a bow in your gear grid. Ammo do not inherit the qualities of bows they are fired from (cumbersome, cursed, etc). Wounding with an ammo does not make a survivor eligible to earn bow proficiency.',},
 'Ammunition': {
   'label':'',
   'description':'A gear keyword. This gear is ammunition for another weapon gear.',},
 'Archive': {
   'label':'',
   'description':'Remove this card from play and return it to the game box. Unless it is recorded into settlement storage or the survivor\'s record sheet, any archived card is permanently lost.',},
 'Armor': {
   'label':'',
   'description':'Gear with this keyword is armor. Protects the survivor from injury. Each piece of armor will have the hit location symbol for the hit location it can be worn on. Each hit location may only wear one piece of armor.',},
 'Armor Points': {
   'label':'',
   'description':'Recorded on the survivor record sheet. Determined by armor gear in the survivor\'s gear grid, as well as other effects and events. Each point negates one point of damage to the hit location. Armor points decrease by 1 for each damage they negate.',},
 'Armor Set': {
   'label':'',
   'description':'Each armor set is comprised of all armor from a single settlement location with the keyword <b style="color:#990 !important;">\"set\"</b>. For example. while a survivor is wearing the White Lion Helm, White Lion Gauntlets, White Lion Coat. White Lion Skirt, and White Lion Boots, they have completed the White Lion armor set.',},
 'Armor Set Bonus': {
   'label':'',
   'description':'A survivor wearing a completed armor set gains the benefits of the armor set bonus listed on its corresponding armor set card.',},
 'Arms': {
   'label':'',
   'description':'A survivor hit location. \nDamage to the arms beyond the heavy injury level results in a roll on the Arms section of the Severe Injury table.',},
 'Arrival': {
   'label':'',
   'description':'The start of the showdown. Any survivors who have "On Arrival" effect apply them in the order of their choice.',},
 'Arrow': {
   'label':'',
   'description':'A gear keyword. This gear card is an arrow. Although arrows require a bow to be in your gear grid to be activated, arrows and bows are distinct weapons. Arrows do not inherit the qualities of bows they are fired from (cumbersome, cursed, etc), except range. Wounding with an arrow does not make a survivor eligible to earn bow proficiency.',},
 'Attack': {
   'label':'',
   'description':'The process of making an attack roll and resolving damage, wounds, or other effects.',},
 'Attack Effects': {
   'label':'',
   'description':'Attack effects are rules contained in a box below the attack profile on some Al cards, and applied when the trigger occurs. These effects are applied only once, even if the target is hit or damaged multiple times by this attack.',},
 'Attack Profile': {
   'label':'',
   'description':'Part of monster Al cards and basic actions. Lists the speed, accuracy, damage, and any triggers for a monster attack.',},
 'Attack Roll': {
   'label':'',
   'description':'The dice roll that represents an attempt to hit a target. A Lantern 10 will always result in a hit.',},
 'Attribute': {
   'label':'',
   'description':'An aspect of a survivor or monster described by a numerical value.',},
 'Attribute Modifier Token': {
   'label':'',
   'description':'Attribute modifier tokens are used to Indicate temporary changes to attributes. Attribute modifier tokens are double-sided to represent gains and losses for that attribute, and are combined with permanent attribute totals to determine the current level of each attribute. All tokens are removed at the end of each showdown.',},
 'Automatic Hit(s)': {
   'label':'',
   'description':'When a survivor with any automatic hits makes an attack roll, forgo rolling that many dice and successfully hit the monster that many times. Any remaining rolls from that attack are performed normally. Despite how many automatic hits a survivor might have, they cannot hit a monster more than the total speed of their attack. Automatic hits are not Perfect Hits. Do not roll another d10 to check, they are just hits.',},
 'Away (Movement)': {
   'label':'',
   'description':'A movement that puts the most possible spaces between two points on the showdown board, such as a monster, survivor, terrain, or board edge.',},
 'Axe': {
   'label':'',
   'description':'Gear with this keyword is an axe weapon. Survivors may gain levels of axe weapon proficiency with this weapon.',},
 'Back': {
   'label':'',
   'description':'The direction opposite of the monster\'s facing.',},
 'Balm': {
   'label':'',
   'description':'A gear keyword. Balm items work by rubbing them on a survivor\'s skin.',},
 'Bash': {
   'label':'',
   'description':'Causes survivors to be knocked down.',},
 'Basic Action': {
   'label':'',
   'description':'A Monster\'s basic. action is detailed on its Bask Action card. A basic action consists of a target action and an attack action with an attack profile. Monsters will perform a basic action on some AI cards in some reactions, or if the Al deck and discard are both empty. Performing a basic action does not count as an Al card being drawn.',},
 'Basic Action / Reference Card': {
   'label':'',
   'description':'Double-sided Basic Action/Reference cards contain a monster\'s basic action on one side, and an overview of the monster\'s characteristics on the other side.',},
 'Basic Hunt Event': {
   'label':'',
   'description':'100 events survivors may encounter out in the darkness. Found in the Basic Hunt Event section of the rulebook.',},
 'Basic Resources': {
   'label':'',
   'description':'Generic resources that can be gained from most huntable monsters and many events.',},
 'Before Damage': {
   'label':'',
   'description':'A trigger found on some monster attack profiles. Apply this trigger\'s attack effect after hits and hit location dice are rolled, but before damage is dealt to hit locations.',},

 'Bleed X': {
   'label':'',
   'description':'The target gains X bleeding tokens.',},
 'Bleeding Token': {
   'label':'',
   'description':'Survivors can gain bleeding tokens from severe injuries, monster attacks, and some events. If a survivor has 5 or more bleeding tokens, they are dead. All tokens are removed at the end of each showdown.',},
 'Blind Spot': {
   'label':'',
   'description':'Usually the spaces directly behind the monster. Survivors attacking from the blind spot gain +l accuracy.',},
 'Block X': {
   'label':'',
   'description':'A gear special rule. Spend {image@images/icons/activation} to ignore X hits the next time you are attacked. Lasts until your next act. A survivor may not use block more than once per attack. Effects gaining block are not cumulative, only largest apply.',},

 'Body': {
   'label':'',
   'description':'A survivor hit location. This is the only hit location that appears twice on the hit location dice. \nDamage to the body beyond the heavy injury level results in a roll on the Body section of the Severe Injury table.',},
 'Body Blow': {
   'label':'',
   'description':'An attack that always hits a survivor\'s body location. Do not roll hit location dice for this attack.',},
 'Bone (Gear)': {
   'label':'',
   'description':'A gear keyword. Bone is one of the primary materials used to craft this gear.',},
 'Bone (Resource)': {
   'label':'',
   'description':'A common resource keyword.',},
 'Bow': {
   'label':'',
   'description':'Gear with this keyword is a bow weapon. Survivors may gain levels of bow weapon proficiency with this weapon.',},
 'Brain': {
   'label':'',
   'description':'The Brain is a survivor location different from hit locations, and represents a survivor\'s mental fitness. Since the human mind is fragile, there is only one injury level for the Brain (indicated by the light-lined unfilled box). The Brain is only damaged by brain damage. \nAny damage beyond the light injury level results in a roll on the Brain Trauma table.',},
 'Brain Damage': {
   'label':'',
   'description':'Brain damage only affects the Brain location.',},
 'Brain Trauma Table': {
   'label':'',
   'description':'Contains possible outcomes of excess damage to the Brain location.',},
 'Build (Location)': {
   'label':'',
   'description':'when a new location is built, place that settlement location in the play area and add the new location to your settlement record sheet. This is a permanent addition to your settlement.',},

 'Calcification': {
   'label':'',
   'description':'Once gear is calcified, flip it to the calcified side. After calcification the normal side of that gear cannot be used.',},
 'Canceled Attack': {
   'label':'',
   'description':'A canceled attack Immediately ends. Discard all unresolved hit locations. Do not perform any actions, special rules, critical effects, or reactions on these cards.',},

 'Charge': {
   'label':'',
   'description':'A gear special rule. Survivors spend {image@images/icons/movement} and {image@images/icons/activation} to move the maximum available spaces in a straight line in one direction. At the end of movement, if in range, perform an attack using a melee weapon, adding the number of spaces moved in this way to your strength for the attack. Charge does not impact any further attacks this turn.',},
 'Closest Survivor': {
   'label':'',
   'description':'The survivor the least number of cardinal spaces away from the monster.',},
 'Closest Threat': {
   'label':'',
   'description':'The threat the least number of cardinal spaces away from the monster.',},
 'Club': {
   'label':'',
   'description':'Gear with this keyword is a club weapon. Survivors may gain levels of club weapon proficiency with this weapon.',},
 'Conflict (Rule of Death)': {
   'label':'',
   'description':'As in any game with many moving parts and rules, conflict may occasionally arise regarding rules interpretations, group decisions, or exceptions.<br\>&emsp;First and foremost, this game is designed to provide time well spent with friends. Use this as the guiding principle for solving any problems that arise. In addition, here are some technical guidelines, for resolving conflict.<br/>&emsp;When conflict arises over contradictions in rules, apply specific rules found on cards (AI, gear etc) and story events, before any rules found in the rulebook core rules sections.<br/>&emsp;If conflicts arise that slow or halt a play session completely, use the <b style="color:#990 !important;">Rule of Death: always rule against the survivors</b>. Kingdom Death is a dangerous place, and the survivors\' future is bleak. Make sure that any ambiguities resolve against the survivors\' favor.<br/>&emsp;At its core, <i>Monster</i> is a cooperative experience. Be respectful of others as you navigate the game\'s decisions together.',},
 'Collides': {
   'label':'',
   'description':'If a monster moves through a space occupied by a survivor, they collide and the survivor suffers collision. If a monster ends its movement on a survivor, they collide. The survivor suffers collision and knockback 5. If a survivor is knocked back into impassable terrain, they collide with it and the survivor suffers collision. If a survivor suffers knockback into another survivor, complete the knockback movement normally. Both survivors suffer collision at the end of knockback. If the survivors would occupy the same space, instead place the knocked back survivor in the closest unoccupied space.',},
 'Collision': {
   'label':'',
   'description':'When a survivor suffers collision. they are knocked down.',},
 'Concentrate': {
   'label':'',
   'description':'You need to focus your mind to perform extraordinary feats. At the start of your act declare your intent to Concentrate. Immediately end your act and attempt to concentrate until the start of your next act. To successfully concentrate you cannot: perform any kind of actions, move for any reason, suffer knocked down, suffer any kind of damage, gain any bleeding or negative attribute tokens.',},
 'Consumable': {
   'label':'',
   'description':'A keyword. This may be consumed by survivors.',},
 'Consume': {
   'label':'',
   'description':'A special rule. This consumable gear or resources may be ingested by survivors for a listed result. Some are archived after use.',},
 'Courage': {
   'label':'',
   'description':'A survivor attribute listed on the survivor record sheet. Courage is a survivor\'s potentially ill-advised bravery. Reaching a courage level of 3 will trigger the '+event_img+'<b>Bold</b> Story Event, while reaching a level of 9 will trigger the '+event_img+'<b>See the Truth</b> Story Event.',},
 'Critical Wound': {
   'label':'',
   'description':'Critical wounds are lucky blows that always wound a monster, even if the wound attempt does not exceed the monster\'s toughness. A critical wound occurs when a wound roll result is a Lantern 10 on a hit location with a critical wound effect. The Luck attribute modifies the roll needed for a critical wound.',},
 'Critical Wound Effect': {
   'label':'',
   'description':'Critical wound effects on monster Al cards are represented by the critical wound symbol, followed by rules that specify what happens when a monster is critically wounded at that location. Critical wounds effects are not reactions. On a critical wound, cancel all reactions on that hit location card.',},

 'Cumbersome': {
   'label':'',
   'description':'A gear special rule. Survivors must spend both {image@images/icons/movement} and {image@images/icons/activation} to activate Cumbersome gear. During a survivor\'s act, it is possible for them to fire use cumbersome gear twice by using a surge in conjunction with their regular movement, then use a dash with their regular {image@images/icons/activation}. A survivor cannot spend 2 survival to use cumbersome gear outside of their act.',},
 'Cursed': {
   'label':'',
   'description':'A gear special rule. This gear cannot be removed from the gear grid for any reason. If the survivor dies, archive this gear.',},
 '(X)d10': {
   'label':'',
   'description':'A number (X) of ten-sided dice. The included dice feature a Lantern on the \"10\" face.',},
 'd5': {
   'label':'',
   'description':'Roll 1d10, divide the result by two and round up to the nearest whole number.',},
 'd100': {
   'label':'',
   'description':'A hundred-sided die. This is accomplished by using 2d10, with one die nominated to represent the \"tens\" digit and the other to represent the \"ones\" digit. Note that a result showing 2 lanterns (result of 10 on each) indicates a result of 100.',},
 'Dagger': {
   'label':'',
   'description':'Gear with this keyword is a dagger weapon. Survivors may gain levels of dagger weapon proficiency with this weapon.',},
 'Damage (Attack Profile)': {
   'label':'',
   'description':'The amount of damage dealt for each hit ln a monster\'s attack. Roll separate hit locations for each hit.',},
 'Damage (Attribute)': {
   'label':'',
   'description':'Damage is added to the damage listed on an attack profile to calculate the total damage of an attack.',},
 'Damage (Condition)': {
   'label':'',
   'description':'A hit damages a survivor if it removes armor points or causes an injury. Hits which are dodged, blocked, or ignored do not cause damage.',},
 'Dash': {
   'label':'',
   'description':'A survival action. When opportunity permits, a survivor may spend 1 survival to dash. They gain +1{image@images/icons/movement}, which must be spent immediately. Each survivor may only Dash once per round. and only after the settlement has innovated the Paint innovation.',},
 'Deadly': {
   'label':'',
   'description':'A gear special rule. Gain +1 Luck while attacking with this weapon. This increases the odds of inflicting critical wounds.',},
 'Deaf': {
   'label':'',
   'description':'The survivor cannot hear or be impacted by encourage and other audible effects.',},
 'Deathblow': {
   'label':'',
   'description':'If you kill the monster while dealing damage to that location you get the bonus listed on the card.',},
 'Death (Monster)': {
   'label':'',
   'description':'A monster is defeated when it is wounded and there are no Al cards in the Al deck or Al discard pile to move to the wound stack.',},
 'Death (Survivor)': {
   'label':'',
   'description':'A survivor can die in a variety of ways. Remove their miniature from the board. They can no longer participate in the hunt or showdown. Return their gear to the settlement storage and move their resources to another survivor. If all the survivors die during the showdown, all of their gear returns to the settlement, and all resources not in the settlement storage are lost.',},
 'Death Count': {
   'label':'',
   'description':'Part of the settlement record sheet. During the Settlement Phase, if any survivors perished during the previous Hunt or Showdown Phase, update the death count. If survivors perish during the Settlement Phase, update the death count immediately. The first time a settlement\'s death count is updated. trigger the '+event_img+'<b>Principle: Death</b>.',},
 'Death Die': {
   'label':'',
   'description':'A special orange ten sided die. The Death Die replaces the Monster Controller tile. The player of the survivor with the Death Die controls the monster. At the start of the showdown, the player with the Final Lantern starts with the Death Die on Horripilation. At the start of each subsequent round, pass the Death Die to the Horripilation card to the left. The Watcher\'s final emanations continue to jump between lanterns of survivors that cannot act, including dead or abscent survivors. Instead of the benefits on the Monster Controller tile, you may use Pulse Discoveries baed on your settlements Lantern Research Level. Once per round, the survivor with the Death Die may use one of the settlement\'s unlocked Pulse Discoveries. After rolling the Death Die, return it to its current Horripilation card. If the Final Lantern is lost or archived, it is gone forever. Survivors cannot use the Death Die. Return to using the Monster Controller tile.',},
 'Defeat': {
   'label':'',
   'description':'When the survivors are defeated by a monster. follow the defeat rules ln the Aftermath section of the monster\'s story event.',},
 'Deflect X': {
   'label':'',
   'description':'A gear special rule. When you Deflect X, gain (or lose) deflect tokens until you have X of them. When you are hit, if you have any deflect tokens, you ignore that hit and lose a deflect token. When you Deflect X, you lose the benefits of <b>Block</b>.',},
 'Depart (As in, \"When you depart\")': {
   'label':'',
   'description':'These rules apply to departing survivors at the end of the Settlement Phase.',},
 'Departing Survivors': {
   'label':'',
   'description':'The survivors nominated to take part in the next hunt and showdown.',},
 'Destroy Armor': {
   'label':'',
   'description':'An attack effect that reduces armor points of a survivor hit location too before applying damage.',},
 'Destructible': {
   'label':'',
   'description':'A terrain special rule. When a survivor collides with destructible terrain, stop their movement and archive the terrain. The survivor suffers 1 damage to a random hit location. When a monster collides with destructible terrain, archive the terrain.',},
 'Devastating X': {
   'label':'',
   'description':'A gear special rule. When a devastating weapon wounds a monster, it will inflict X additional wounds.',},
 'Discard': {
   'label':'',
   'description':'Put the card into the appropriate discard pile. It is no longer in play.',},
 'Disdain': {
   'label':'',
   'description':'The Phoenix\'s instinct. Described on the '+event_img+'<b>Showdown: Phoenix</b>.',},
 'Disorder': {
   'label':'',
   'description':'A mental impairment. Disorders are found on disorder cards. When a disorder is gained, record its rules on the survivor record sheet and return the card to the box. Survivors can have up to 3 disorders. Additional disorders gained must replace a disorder of your choice. If a survivor would gain a disorder that they already have. nothing happens.',},
 'Dodge': {
   'label':'',
   'description':'A survival action. When a survivor is hit, after rolling hit location dice but before damage, they may spend 1 survival to dodge, canceling one hit. The dodged hit becomes a failed attack roll and does not cause damage. Any additional un-dodged hits resolve normally. Dodge is the only survival action that knocked down survivors can perform. Each survivor may only Dodge once per round.',},
 'Doomed': {
   'label':'',
   'description':'While a survivor is doomed, they cannot perform any actions or spend surival. If a survivor is doomed by a monster\'s AI or Hit Location card, they are doomed until all actions on the card are performed and the card is resolved.',},

 'Draw AI': {
   'label':'',
   'description':'The monster controller draws the top Al card of the monster\'s Al deck and plays it. If the Al deck is empty, shuffle the discard pile into it and draw the top card. If the Al deck and discard pile are empty, the monster performs its Basic Action.',},
 'Duplicate Gear': {
   'label':'',
   'description':'Except for weapons, a survivor may not have multiple copies of the same gear in their gear grid. A survivor gains the benefits of a weapon\'s special rules only once, no matter how many copies they have. Additional copies of weapons still contribute affinities.',},
 'Duration': {
   'label':'',
   'description':'Duration cards are drawn twice.<br/>&emsp;The first time a duration card is drawn, perform any \"when drawn face down\" actions. Then, instead of discarding it, place the duration card face up on top of the Al deck.<br/>&emsp;The next time a monster draws an Al card, it draws the duration card for a second time. Perform any \"when drawn face up\" actions, then discard the card after resolving.<br/>&emsp;Some duration cards have persistent effects while they are face up on top of the Al deck.',},
 'Early Iron': {
   'label':'',
   'description':'A gear special rule. When any of your attack roll results are a 1, cancel your attack.',},
 'Encourage': {
   'label':'',
   'description':'A survival action. A standing survivor may spend 1 survival at any time to encourage a knocked down survivor, letting them stand. Deaf survivors may not be encouraged. Each survivor may only Encourage once per round, and only if the settlement has the Language innovation.',},
 'Endeavors': {
   'label':'',
   'description':'Each returning survivor contributes +1{image@images/icons/endeavors}<i>(endeavor)</i> to the settlement. Survivors can spend {image@images/icons/endeavors} to innovate, build new settlement locations, or perform unique actions. To spend an {image@images/icons/endeavors}, nominate a survivor. Reduce the settlement\'s total {image@images/icons/endeavors} by 1, and follow the rules for the action the {image@images/icons/endeavors} was spent on. Unless stated otherwise, the action\'s effects apply only to the nominated survivor.',},
 'Endure': {
   'label':'',
   'description':'You may spend 7 survival minus your Luck to ignore severe injury before you roll a result. Your Luck is determined by the sum of your permanent luck attribute, and luck modifier tokens, and any other gear or abilities affecting your luck at the time you endire.',},
 'Evasion (Attribute)': {
   'label':'',
   'description':'When a monster or survivor with evasion is the target of an attack, increase the accuracy on the attack profile by the amount of evasion the target possesses. Evasion can be a negative number, in which case it is subtracted from the attack profile\'s accuracy. Regardless of evasion, a Lantern 10 on the attack roll is always a Perfect Hit, and an attack roll result of 1 will always be unsuccessful.',},
 'Event Damage': {
   'label':'',
   'description':'Some damage is incurred from events. Typically, this damage cannot be dodged or blocked. Event damage is non-lethal, and will reduce armor points and cause light and heavy injuries, but will not cause severe injuries or brain trauma.',},
 'Event Revealer': {
   'label':'',
   'description':'The event revealer reveals a hunt event, reads it aloud. and follows the rules on the card, making all decisions along for that hunt event.',},

 'Facing': {
   'label':'',
   'description':'A monster is facing all spaces on the board that are in front of the miniature.',},
 'Failure (Reaction)': {
   'label':'',
   'description':'A monster reaction. Performed in response to unsuccessful wound attempts at certain monster hit locations.',},

 'Feather (Gear)': {
   'label':'',
   'description':'A gear keyword. This gear is substantively crafted of feathers.',},
 'Field of View': {
   'label':'',
   'description':'A survivor is in a monster\'s field of view unless they are in the monster\'s blind spot or the monster\'s line of sight is blocked by terrain with the Obstacle rule.',},
 'Fighting Arts': {
   'label':'',
   'description':'Powerful battle techniques found on fighting art cards. When a fighting art is gained, record its rules on the survivor record sheet and return the card to the box. Survivors can have up to 3 fighting arts. Additional fighting arts gained replace a fighting art of your choice. If a survivor would gain a fighting art they already have, nothing happens.',},
 'Finesse': {
   'label':'',
   'description':'A gear keyword. This gear requires finesse to use. This keyword does not interact with the core game in any way and is one of those annoying keywords for expansions.',},
 'First Strike': {
   'label':'',
   'description':'A type of monster hit location. This hit location must be resolved before any others. except Traps and Light Speed hit locations. If multiple First Strike locations are drawn, the player decides the order in which to resolve them. Traps still precede and cancel all other hits.',},
 'Fist & Tooth': {
   'label':'',
   'description':'Fist & Tooth is a weapon always available to a survivor. The attack attributes for First & Tooth are listed on the gear grid. Survivors may gain levels of Fist & Tooth weapon proficiency with this weapon.<br/>&emsp;For gameplay purposes <i>(like Blood Paint)</i> Fist & Tooth weapon is considered a separate gear card placed to the left of lower left corner of gear grid.',},
 'Flammable': {
   'label':'',
   'description':'A gear keyword. Fire can destroy this gear.',},
 'Flow': {
   'label':'',
   'description':'Flows are hesitations between monster actions. They give the survivors an opportunity to use survival actions. They are represented by a bar with an arrow.',},
 'Forward': {
   'label':'',
   'description':'The direction the miniature is facing.',},
 'Fragile': {
   'label':'',
   'description':'A gear keyword. This gear is easily broken.',},
 'Frail': {
   'label':'',
   'description':'A gear special rule. Frail weapons are destroyed if a survivor attempts to wound a Super-dense location with them. Archive the weapon at the end of the attack.',},
 'Frenzy': {
   'label':'',
   'description':'A brain trauma result. A survivor who suffers this is Frenzied until the end of the Showdown Phase. Gain +1 strength token, +1 speed token, and 1d5 insanity. Ignore the \"slow” special rule on melee weapons. A frenzied survivor may not spend survival or use fighting arts, weapon specialization, or weapon mastery. A survivor may be Frenzied multiple times.',},
 'Full Move': {
   'label':'',
   'description':'A game term that describes a monster\'s or survivor\'s maximum available movement, taking into account all movement modifier tokens.',},
 'Fur (Gear)': {
   'label':'',
   'description':'A gear keyword. This gear is substantively crafted of thick fur.',},
 'Gear': {
   'label':'',
   'description':'Objects that survivors may carry and wear, represented by gear cards. Survivors may only use the gear in their individual gear grids. Except for gear with the weapon keyword, no survivor may have more than one copy of a gear card in their grid.',},
 'Gear Grid': {
   'label':'',
   'description':'A mat with space for 9 gear cards. Gear cards can be arranged in any configuration, but must remain right-side up. They cannot be rotated. Gear in gear grids can only be rearranged during the Settlement Phase.',},
 'Gear Keyword': {
   'label':'',
   'description':'Located directly under the name of a gear card. They describe information about gear, such as weapon type, materials, use, or limiting factors. Keywords are referenced by other cards and events.',},
 'Gear Special Rule': {
   'label':'',
   'description':'Located on the bottom portion of a gear card. These list gear abilities. bonuses and requirements.',},
 'Grand': {
   'label':'',
   'description':'Gear with this keyword is a grand weapon. Survivors may gain levels of grand weapon proficiency with this weapon.',},
 'Graze': {
   'label':'',
   'description':'The Screaming Antelope\'s instinct. Described on the Screaming Antelope\'s showdown story event.',},
 // 'Green Life Exchange': {
 //   'label':'',
 //   'description':'An ability. In the Aftermath, gain 3 additional Hunt XP. You may not place gear with the \"other\" keyword in your grid. Gain +I permanent evasion with each Age milestone. When you retire. you cease to exist.',},
 'Guard': {
   'label':'',
   'description':'The King\'s Man\'s instinct. Described on the King\'s Man\'s showdown story event.',},
 'Guard (Gear)': {
   'label':'',
   'description':'A gear special rule. At the end of your attack, if you are standing and have a shield in your gear grid, spend 1 survival to move 3 spaces directly away from the monster and <b>Block 1</b> for free.',},
 'Head': {
   'label':'',
   'description':'A survivor hit location. \nDamage to the head beyond the heavy injury box will prompt a roll on the Head section of the Severe Injury table.',},
 'Head Hunter': {
   'label':'',
   'description':'An attack that always hits a survivor\'s head hit location. Do not roll hit location dice for this attack.',},
 'Heal X': {
   'label':'',
   'description':'When a monster performs heal X, return X Al cards from the Wound Stack to the bottom of the Al deck without looking at them.',},
 'Healing (Survivor)': {
   'label':'',
   'description':'When survivors heal, erase all filled injury levels and restore all lost armor points.',},

 'Heavy (Gear)': {
   'label':'',
   'description':'A gear keyword. This gear has substantial weight.',},
 'Heavy Injury Level': {
   'label':'',
   'description':'A heavy lined injury level box. When a survivor\'s heavy injury level is filled, they are knocked down. Once it is filled, this injury level cannot be suffered again this showdown unless it is healed.',},
 'Herb': {
   'label':'',
   'description':'A gear keyword. An item primarily made of herbs.',},
 'Hide (Resource)': {
   'label':'',
   'description':'A common resource keyword.',},
 'Hit (Monster)': {
   'label':'',
   'description':'A hit is the result of an attack roll that meets or exceeds the accuracy for an attack using an attack profile. Hits which are dodged, blocked, or ignored are misses. Damage outside of an attack profile is not considered to be from a hit.',},
 'Hit (Survivors)': {
   'label':'',
   'description':'A hit is the result of an attack roll that meets or exceeds the accuracy for an attack using a weapon.',},
 'Hit Location (Monster)': {
   'label':'',
   'description':'Each monster has a unique hit location deck composed of hit location cards. There are types of hit location card: First Strike, Impervious, Super-dense. Trap, and Normal. Any hit location that has no listed type is Normal.',},
 'Hit Location (Survivors)': {
   'label':'',
   'description':'Hit locations are areas of the survivors\' body that can wear armor and suffer damage. The hit locations are: Head. Arms. Body, Waist, and Legs. Hit locations may gain armor points from armor. Without armor, hit locations have 0 armor points.',},
 'Hit Location Dice': {
   'label':'',
   'description':'Used to determine the survivor hit location hit by an attack.',},

 'Hunt Board': {
   'label':'',
   'description':'The Hunt Board is used during the Hunt Phase to track a quarry monster.',},
 'Hunt Board Diagram': {
   'label':'',
   'description':'Part of a monster\'s showdown story event. It indicates how to set up the hunt board for that monster.',},
 'Hunt Event': {
   'label':'',
   'description':'A hunt event describes an encounter the survivors face on their journey. They can be disastrous, bizarre. or even beneficial. These appear on basic hunt event cards and monster hunt event cards.',},
 'Hunt Event Cards (Basic)': {
   'label':'',
   'description':'All basic hunt event cards are identical. They direct the event revealer to roll on the hunt event table.',},
 'Hunt Event Cards (Monster)': {
   'label':'',
   'description':'Monster hunt event cards are only encountered when hunting a particular monster. They describe pitfalls and wonders specific to this monster. Each huntable monster has a unique set of hunt event cards.',},
 'Hunt Experience (XP)': {
   'label':'',
   'description':'Survivors gain Hunt Experience during the Aftermath of a victorious showdown. When a survivor gains Hunt XP, fill in the next unfilled Hunt XP box on their survivor record sheet. Some hunt experience levels are milestones (indicated by a heavy-lined box) that trigger the Age story event The number of milestones filled indicates which Age rules apply. When the final hunt experience box is filled, the survivor is too old to hunt, and must retire.',},
 'Hunt Phase': {
   'label':'',
   'description':'The part of each session spent locating a quarry monster. When survivors determine what type and level of monster to hunt.',},
 'Ignore a Hit': {
   'label':'',
   'description':'Reduce the number of hits by 1. This happens before hit locations are determined.',},
 'Impairments': {
   'label':'',
   'description':'Permanent changes or injuries suffered by a survivor and recorded on the survivor record sheet. These often result from the severe injury table.',},
 'Impassable': {
   'label':'',
   'description':'A terrain special rule. A survivor cannot voluntarily move into or through any spaces this terrain occupies. Impassable terrain stops all movement, including knockback. If a survivor ls knocked back into a space occupied by impassable terrain. they collide with the terrain and their movement ends just before the terrain.',},
 'Impervious': {
   'label':'',
   'description':'A type of monster hit location. Impervious hit locations cannot be wounded. even with a Lantern 10 wound roll. Wound attempts will never remove Al cards. However. critical effects may still occur.',},
 'In Play': {
   'label':'',
   'description':'All cards are considered in play after they have been drawn and until they resolve. Most cards are discarded after resolving. Others, such as Moods, remain in play indefinitely or until a condition is satisfied.',},
 'In Range (Monster)': {
   'label':'',
   'description':'A survivor is in a monster\'s range if the number of spaces between them is less than or equal to its current movement (including modifiers). If \"in range\" is followed by a number, such as “Range (6)”, that number replaces the monster\'s movement when calculating to see if a survivor is in range.',},
 'Indestructible': {
   'label':'',
   'description':'A terrain special rule. A terrain that is undestructible cannot be destroyed or removed from the showdown board for any reason until the end of the showdown.',},
 'Injury Level': {
   'label':'',
   'description':'Indicates damage to a hit location. Recorded on the survivor record sheet. Most hit locations feature two levels, light and heavy, except for the Head (which only has a heavy injury level).',},
 'Innovation': {
   'label':'',
   'description':'A type of advancement for a settlement, gained at the Lantern Hoard. Innovations alter the settlement and the survivors\' capabilities. Record new innovations on your settlement record sheet.',},
 'Innovation Deck': {
   'label':'',
   'description':'A settlement\'s innovation deck is a persistent deck that grows as the settlement innovates.',},
 'Insane': {
   'label':'',
   'description':'A survivor with 3+ insanity.',},
 'Insanity': {
   'label':'',
   'description':'Protects a survivor from brain damage.',},
 'Instinct': {
   'label':'',
   'description':'The action the monster undertakes if it cannot find a target to attack. Each monster has a unique instinct described on its showdown story event.',},
 'Instrument': {
   'label':'',
   'description':'A gear keyword. This gear can be used to play music.',},
 'Intimidate Actions': {
   'label':'',
   'description':'Intimidate actions cause brain damage. Intimidate actions are not attacks or hits (survivors cannot spend survival to dodge Intimidate actions). Monsters don\'t need to be adjacent to their targets to intimidate.',},


 'Irreplaceable': {
   'label':'',
   'description':'A gear special rule. If a survivor dies, archive all irreplaceable gear in their gear grids.',},
 'Item': {
   'label':'',
   'description':'A gear keyword. Gear that is neither a weapon nor armor.',},
 'Jewelry': {
   'label':'',
   'description':'A gear keyword. Decorative and functional!',},
 'Katana': {
   'label':'',
   'description':'Gear with this keyword is a katana weapon. survivors may not gain levels of katana weapon proficiency.',},
 'Katar': {
   'label':'',
   'description':'Gear with this keyword is a katar weapon. Survivors may gain levels of katar weapon proficiency with this weapon.',},
 'Knights Charge': {
   'label':'',
   'description':'A Green Armor set bonus. Spend {image@images/icons/activation} and {image@images/icons/movement}, full move in a straight line. At the end of the movement, activate <b>Griswaldo</b> and attack. If you moved more than 5 spaces, this attack gains <b>devastating 2</b>.',},
 'Knockback X': {
   'label':'',
   'description':'Move the target of knockback X spaces directly away from the cause of this effect. If the survivor passes over or ends up in a space with another survivor, they are both knocked down. Survivors may not share spaces, move the knocked back survivor to an adjacent free space. If the survivor encounters a board edge, stop and end knockback. If the survivor suffers knockback on the board edge - they move along the edge.',},
 'Knocked Down (Monster)': {
   'label':'',
   'description':'While a monster is knocked down, attack rolls hit on 3+ (in place of normal accuracy). Cancel all reactions, including reactions that might be beneficial to survivors. This does not cancel critical wounds effects (since they are not reactions). If the monster is knocked down during a flow, cancel any remaining actions on its card. A knocked down monster stands when it draws an Al card, a trap is played, or at the start of the next turn (monster or survivors\').',},
 'Knocked Down (Survivor)': {
   'label':'',
   'description':'When a survivor is knocked down, turn the miniature on its side. Knocked down survivors always stand at the end of the next monster turn. If a survivor is knocked down in the middle of their attack, the remainder of that attack is canceled. Knocked down survivors may only spend survival to dodge (remaining knocked down), and cannot spend {image@images/icons/activation} or {image@images/icons/movement}.',},
 'Lantern': {
   'label':'',
   'description':'A gear keyword. A lantern illuminates the darkness.',},
 'Lantern 10': {
   'label':'',
   'description':'A die roll result with the lantern face up. Equivalent to a 10 for other 10-sided dice. Means guaranteed success for hit and wound rolls.',},
 'Lantern Year': {
   'label':'',
   'description':'Survivors\' basic unit of time. The settlement typically advances by one lantern year as part of each Settlement Phase.',},
 'Last to Wound': {
   'label':'',
   'description':'The survivor who last wounded the monster.',},
 'Leap': {
   'label':'',
   'description':'A Dragon Armor set bonus. Spend {image@images/icons/activation} and {image@images/icons/movement}. You leap into the air! Place your survivor on an unoccupied space exactly 5 space away in a straight line, then activate a melee weapon and attack with +2 accuracy and +5 strength.',},
 'Leather (keyword)': {
   'label':'',
   'description':'A gear keyword. Cured hides are a crucial component of this gear.',},

 'Legs': {
   'label':'',
   'description':'A survivor hit location. \nDamage to the legs beyond the heavy injury box will prompt a roll on the Legs section of the Severe Injury table.',},

 'Light Speed': {
   'label':'',
   'description':'A type of monster hit location. This hit location must be resolved before any others. except Traps and Light Speed hit locations. If multiple First Strike locations are drawn, the player decides the order in which to resolve them. Traps still precede and cancel all other hits.',},
 'Life Trait': {
   'label':'',
   'description':'A core game variant. Instead of wounding by removing Al cards to the wound stack, wound the monster by reducing the number on its Life trait. When the number is reduced to 0, the monster is dead.',},
 'Limit once per lifetime': {
   'label':'',
   'description':'This can only happen once to a survivor. If it occurs again, nothing happens, in rare cases, it is possible for a survivor to be a part of a new campaign: the survivor still has only one lifetime and anything that already happened to them (with limit, once per lifetime) cannot happen again. If a survivor somehow dies and is reborn, they gain these benefits again. Record once per lifetime effect on the survivor record sheet.',},


 'Luck (Player Attribute)': {
   'label':'',
   'description':'Luck modifies a survivor\'s chance to cause a critical wound from a wound roll. +1 luck causes a critical wound on a wound roll result of 9 or 10, +2 luck on 8, 9, or 10, and so on. A luck modifier can be negative, making it impossible to critically wound.',},
 'Luck (Monster Attribute)': {
   'label':'',
   'description':'Every positive monster luck token reduces the range of wound roll results considered critical. Normally, critical wounds occur only on Lantern 10s. Unless survivors have positive luck modifiers, a critical wound against a monster with 1 or more luck tokens is impossible. Each negative monster luck token increases the attackers\' critical wound range by 1. The rule of Lantern 10 always applies, so even if a monster\'s luck makes critically wounding impossible, a wound roll of a Lantern 10 will still cause a normal wound.',},



 'Materialize': {
   'label':'',
   'description':'Remove the monster from the showdown board and place it adjacent to the target. It must be placed so its base covers as many other survivors as possible. colliding with the survivors.',},
 'Melee': {
   'label':'',
   'description':'A weapon gear keyword. To attack with a melee weapon, survivors must be in a space adjacent to the monster. Melee weapons with Reach can attack from further away.',},
 'Menace': {
   'label':'',
   'description':'The Butcher\'s instinct. Described on the Butcher\'s showdown story event.',},
 'Metal': {
   'label':'',
   'description':'A gear keyword. This gear is substantively crafted of metal.',},
 'Milestone': {
   'label':'',
   'description':'Milestones are special story events that are performed during the <b>Check Milestones</b> step of the settlement phase only when certain in-game conditions are accomplished.',},
 'Miniature': {
   'label':'',
   'description':'The physical representation of a monster or survivor, used in the Hunt and Showdown phases.',},

 'Monster AI Deck': {
   'label':'',
   'description':'Made up of Al cards used for a specific showdown. See the monster\'s story event for details of its Al deck. The Al Deck is reduced as the monster is wounded.',},
 'Monster Controller': {
   'label':'',
   'description':'The player who draws the monster\'s Al card. They make any decisions and rolls to resolve a monster\'s actions for that round. Designated by the Monster controller tile. Monster controller changes at the start of each round.',},
 'Monster Controller Bonus': {
   'label':'',
   'description':'When a monster controller\'s survivor is the target of an attack, this foolhardy action earns that player\'s survivor +1 insanity.',},
 'Monster Controller Tile': {
   'label':'',
   'description':'Designates the monster controller. Moves clockwise to the next player or survivor at the start of each round.',},
 'Monster-Impassable': {
   'label':'',
   'description':'A terrain special rule. Nor survivors, nor monsters can move through spaces occupied by monster-impassable terrain.',},
 'Monster Hit Location Card': {
   'label':'',
   'description':'Represents a location on the monster\'s body. These are hit by a survivor\'s successful attack roll. Many hit location cards feature special effects or actions.',},
 'Monster Hit Location Deck': {
   'label':'',
   'description':'The cards that collectively make up the locations a survivor may hit a given monster. Unique to each monster.',},
 'Monster Level': {
   'label':'',
   'description':'Monster level (★) determines the difficulty of the showdown and the monster\'s placement on the hunt board. Higher-level monsters have longer hunts and more difficult showdowns. ',},
 'Monster Reference Card/ Basic Action': {
   'label':'',
   'description':'Contains a small overview of each monster\'s characteristics. They serve as a compact reminder of frequently-used monster information.',},
 'Monster Resources': {
   'label':'',
   'description':'Monster resource cards are gained only from fighting that monster. Each huntable monster has a unique deck. Monster resources can be used and spent as their resource type or as their specific resource name. Some monster resources have additional rules.',},
 'Monster Showdown Story Event': {
   'label':'',
   'description':'Contains relevant information for a particular monster\'s showdown and hunt, including instructions on constructing a monster Al deck, hunt and showdown board setup, the monster\'s instinct and basic attack, and information on the aftermath of the showdown.',},
 'Most/Least X': {
   'label':'',
   'description':'The survivor with the most/least of the listed condition. Zero can count as most or least unless otherwise stated.',},
 'Move and Attack Target Action': {
   'label':'',
   'description':'A component of most Al cards. A Move and Attack Target Action follows a Pick Target Action. Full move the monster towards the target and perform the following attack profile.',},
 'Movement (Attribute)': {
   'label':'',
   'description':'The maximum amount of spaces a monster or survivor may move with in single move action. A monster or survivor with less than 1 movement may still move 1 space each move action.',},
 'Move into Range and Attack': {
   'description': 'Let the monster has range: X.<br /><br />When the monster is instructed to <b>Move into Range and Attack</b>, end the monster\'s movement at X spaces away from the targer. If the monster is less than X spaces away, move it until it exactly X spaces away.'
 },
 'Move Through Target': {
   'label':'',
   'description':'When a monster instructed to move through a target, it moves towards the target but instead of stopping when adjacent, its movement continues. This will normally cause collision with the target.',},
 'Mood': {
   'label':'',
   'description':'A type of monster Al card. Once mood cards are drawn, leave them in the play area instead of discarding them at the end of the monster turn. Moods can be removed by some items or through conditions listed on the card. If a monster suffers a wound when it has an empty Al deck and discard pile, but one or more active moods, it is defeated.',},
 'Natural 1': {
   'label':'',
   'description':'Rolling 1 on hit and wound rolls always results in failure.',},
 'Nemesis Monster': {
   'label':'',
   'description':'Nemesis monsters show up at the outskirts of the settlement. They cannot be hunted and will arrive during story events.',},
 'Next Monster Turn': {
   'label':'',
   'description':'Some effects persist until the next monster turn. If it is the survivors’ turn, the effect will end on the monster turn immediately following this turn. If it is the monster\'s turn when this effect begins. it will end on the following monster turn.',},
 'Next Round': {
   'label':'',
   'description':'Some effects persist until the end of the next complete round. These effects will end after the monster, then the survivors, take another turn.',},
 'No Target': {
   'label':'',
   'description':'The last option on a monster\'s Pick Target list. It indicates what to do it no target is found. This is most often a monster\'s Instinct action. When a monster cannot find a target, subsequent actions on the card are not performed.',},
 'Noisy': {
   'label':'',
   'description':'A gear keyword. This gear is hard to keep quiet.',},
 'Non-Deaf Survivor': {
   'label':'',
   'description':'Survivors not suffering from the deaf severe head injury.',},
 'Obstacle': {
   'label':'',
   'description':'A terrain rule. This terrain blocks survivor and monster field of view, interrupting ranged weapon attacks and monster targeting. To check if field of view is blocked, draw an imaginary line from the center of the miniature\'s base to the center of the intended target\'s base. If the line comes in contact with a space occupied by an obstacle, the field of view is blocked, and the target is not in field of view.',},

 'Organ (Resource)': {
   'label':'',
   'description':'A common resource keyword.',},
 'Other': {
   'label':'',
   'description':'A gear keyword. The effects of this gear are otherworldly.',},
 'Outfit': {
   'label':'',
   'description':'A gear keyword. This completes an armor set if you\'re wearing the rest of the set and it shares a material keyword with the missing armor gear. For example, if you\'re wearing an Oxidized Lantern Helm and Phoenix Armor on every other hit location, you would gain the Phoenix Armor Set bonus because the Phoenix Helm also has the metal keyword.',},
 'Overwhelming Darkness': {
   'label':'',
   'description':'A space on the Hunt Board. The first time each hunt the survivors move into the Overwhelming Darkness space, they trigger the '+event_img+'<b>Overwhelming Darkness</b> story event. The survivors cannot skip Overwhelming Darkness. If they move through the space, instead stop all movement and resolve Overwhelming Darkness before any other events or effects. Then, resolve other events or effects on this space. If, for some reason, the survivors move into or through Overwhelming Darkness more than once in a single Hunt Phase, treat it as a blank space. If the monster is on the Overwhelming Darkness Space when the survivors move into it, skip its event and start the showdown immediately.',},
 'Parry': {
   'label':'',
   'description':'When attempting to wound a Parry hit locations all attempts fall unless the wound roll result is critical. This Failure triggers any Failure reactions as normal.',},
 'Paired': {
   'label':'',
   'description':'A gear special rule. Paired weapons are two identical weapons that can be used as one. You may add the speed of the second weapon when attacking with the first. These weapons must have the same name, and both must be in your gear grid.',},

 'Perishable': {
   'label':'',
   'description':'A resource keyword. This resource cannot be added to settlement storage. At the end of the settlement phase, it is lost. Archive it. In order for perishable resources to last more than one lantern year, they must be carried out of the settlement in a Satchel!',},
 'Perfect Hit': {
   'label':'',
   'description':'An attack dice roll result of a Lantern 10. This always results in a hit. When there are multiple Perfect Hits in a single attack, trigger any rules applying to Perfect Hits that many times.',},
 'Permanent Injury': {
   'label':'',
   'description':'An injury to a survivor that does not heal with time. Its effects always apply to that survivor unless canceled by another effect.',},
 'Persistent Injury': {
   'label':'',
   'description':'A special injury found on some hit location cards. When a monster suffers a critical wound on a hit location with a persistent injury, leave the card in play instead of discarding it. Some persistent injuries modify a monster\'s behavior, while others affect specific Al cards.',},
 'Persistent Injury Actions': {
   'label':'',
   'description':'Found on some Al cards. Persistent injury actions are conditional actions that replace the normal rules of an Al card. They are only performed when the monster draws an Al card with a persistent injury action that matches a persistent injury in play. If a persistent injury action is performed, ignore other actions on the card.',},
 'Pickaxe': {
   'label':'',
   'description':'A gear keyword. In certain situation, this can be used to mine minerals.',},
 'Pick Target': {
   'label':'',
   'description':'A component of most Al cards. A Pick Target list has a series of conditions. The monster controller checks to see if each targeting condition is met, starting from the first and stopping when one is met. Sometimes targets are determined by an area or zone (such as adjacent survivors or all survivors in a zone). Some Al cards pick more than one target.',},
 'Place': {
   'label':'',
   'description':'Change the location of a miniature from one space on the showdown board to another. This does not count as movement.',},

 'Pounce': {
   'label':'',
   'description':'A gear special rule. Spend {image@images/icons/activation} and {image@images/icons/movement} to move 3 spaces forward in a straight line and activate a melee weapon. This attack gains +1 strength.',},


 'Principle': {
   'label':'',
   'description':'Principles are your settlement\'s guiding philosophies. When a principle\'s story event triggers, your settlement must make a choice. Record the chosen principle on the settlement record sheet and add that principle\'s card to the settlement play area.',},
 'Priority Target': {
   'label':'',
   'description':'When a survivor gains the priority target token they have captured monster\'s attention. Only 1 survivor may have the priority target token at a time. Whenever a monster performs a pick target action, the survivor with the priority target token will always be picked. The priority target token is removed when: the survivor with the token is picked, another survivor gains the priority target token, an effect causes the priority target token to be removed.',},
 'Prismatic': {
   'label':'',
   'description':'Your complete affinities and incomplete affinity halves count as all colors.',},

 'Provoke': {
   'label':'',
   'description':'A gear special rule. When you wound with this weapon, gain the priority target token.',},
 'Proxy cards': {
   'label':'',
   'description':'There are 8 proxy cards. These can be used to replace lost cards or create game variants.',},
 'Pulse Discoveries': {
   'label':'',
   'description':'A series of abilities that can be unlocked via Lantern Research. A Pulse Discovery can be performed by a surivor with the Death Die.',},

 'Puzzle Affinity': {
   'label':'',
   'description':'A gear special rule. Puzzle affinity bonuses can only be gained if the affinities are completed using the affinities on that specific card (indicated by puzzle pieces instead of boxes).',},
 'Quarry': {
   'label':'',
   'description':'The monster that the survivors have elected to hunt',},
 'Random Hit Location (Survivor)': {
   'label':'',
   'description':'Determine using the included hit location dice.',},
 'Random Hunt Event': {
   'label':'',
   'description':'Roll 1d100 and apply the hunt event corresponding to this number on the Hunt Event table.',},
 'Random Survivor': {
   'label':'',
   'description':'The monster controller or event revealer typically determines a survivor by chance, using an equal probability of all possible outcomes.',},
 'Range (Gear)': {
   'label':'',
   'description':'A gear special rule. Survivors this many or fewer spaces away from a monster may attack with this weapon. Ranged weapons cannot be used if field of view to the monster is blocked (by terrain with the Obstacle rule).',},
 'Ranged': {
   'label':'',
   'description':'A gear keyword. A ranged weapon, like a bow or dart, allows survivors to attack from a distance.',},
 'Ranged Attack Target': {
   'label':'',
   'description':'When monster is instructed to Ranged Attack Target it attacks with unlimited range. It does not need to be adjacent in order to hit.',},
 'Rawhide': {
   'label':'',
   'description':'A gear keyword. This gear is crafted of uncured hides.',},
 'Reach': {
   'label':'',
   'description':'A gear special rule. Reach weapons are long enough to attack monsters when the survivor is not adjacent. Reach specifies the maximum number of spaces away that a survivor can attack with this weapon.',},
 'Reaction': {
   'label':'',
   'description':'A hit location rule. The 3 types of reactions are Wound, Failure, and Reflex: each specifies the conditions for a reaction to occur. Reactions occur after rolling to wound the hit location they are found on and before resolving the next hit location.',},
 'Record And Archive': {
   'label':'',
   'description':'An instruction on certain cards. such as disorders and fighting arts. Make a note of the listed effects and return the card to the game box.',},

 'Reflex (Reaction)': {
   'label':'',
   'description':'A type of monster reaction. This reaction occurs regardless of whether a wound attempt succeeds or fails.',},
 'Remove From The Showdown Board (Survivor)': {
   'label':'',
   'description':'Remove the survivor miniature from the showdown board. Place it on its survivor status card, if it has one. A survivor removed from the showdown board has an Act, but may not spend {image@images/icons/movement}, {image@images/icons/activation} or perform survival actions. Unless stated otherwise, they do not affect and are not affected by anything on the showdown board. When the showdown ends, any survivors who are removed from the board (but not dead) continue to the Aftermath as normal.',},
 'Resolved': {
   'label':'',
   'description':'A card is resolved when there are no more instructions to follow on it. This may be due to performing everyed action, or as a result of specific instructions on the card.',},
 'Resources': {
   'label':'',
   'description':'Resources cards are gained from defeating monsters and events. They are spent to develop the settlement and craft gear. There are 4 kinds: Basic, Monster, Strange, and Vermin.',},
 'Resource Types': {
   'label':'',
   'description':'In addition to the specific name listed, all resource cards have one or more types that the card may be used as. Common examples include Bone, Hide, Organ, and Scrap.',},
 'Retch': {
   'label':'',
   'description':'Some of the Gorm\'s AI and Hit Location cards direct it to perform Retch. This action causes damage to all survivors in the indicated zone. Terrain, survivors, or other effects on the board will not modify this zone.',},
 'Reveal': {
   'label':'',
   'description':'Turn a card face up and examine it (Do not play it). Do not reshuffle a deck to reveal more cards than are in the deck.',},
 'Retired': {
   'label':'',
   'description':'When the final Hunt XP box is filled, the survivor retires. Some disorders and severe injuries also force retirement. Retired survivors cannot depart, but still contribute to the total population of the settlement, and may participate in settlement events and endeavors.',},
 'Returning Survivors': {
   'label':'',
   'description':'All survivors that endured the previous showdown are returning survivors.',},
 'Rewards': {
   'label':'',
   'description':'Rewards are gained by defeating monsters. They are listed on the monster\'s showdown story event. Gain rewards as a group, once per victorious showdown (unless stated otherwise).',},
 'Ripple Pattern': {
   'label':'',
   'description':'A gear special rule. When you are attacked, roll 1d10. On a 10+, ignore 1 hit.',},

 'Round (Showdown)': {
   'label':'',
   'description':'The showdown proceeds in rounds, consisting of the monster\'s turn followed by the survivors\' turn. Rounds will continue until the monster is dead or all the survivors are dead.',},
 'Run Away': {
   'label':'',
   'description':'Once a settlement has innovated Pictographs, survivors may abandon a Hunt or Showdown Phase at any time. Follow the instructions on the Run Away story event.',},
 'Savage': {
   'label':'',
   'description':'A gear special rule. After the first critical wound in an attack, savage weapons cause 1 additional wound. This rule does not trigger on Impervious hit locations.',},
 'Scythe': {
   'label':'',
   'description':'Gear with this keyword is a scythe weapon. Survivors may gain levels of scythe weapon proficiency with this weapon.',},
 'Secret Fighting Arts': {
   'label':'',
   'description':'Secret fighting arts are fighting arts that cannot be gained normally. Each secret fighting art has a corresponding card that describes the rules for using it. These count toward your fighting art maximum of 3.',},
 'Selfish': {
   'label':'',
   'description':'A gear special rule. A gear with this rule may not be in a same gear grid with any gear with the \"other\" keyword.',},
 'Sentient': {
   'label':'',
   'description':'A gear special rule. A survivor must be insane to activate this gear.',},
 'Session': {
   'label':'',
   'description':'A typical session is comprised of three phases: Hunt Phase, Showdown Phase, and Settlement Phase. Some events may make survivors skip one or more of these phases. For example, Nemesis Encounters have no Hunt Phase.',},
 'Set': {
   'label':'',
   'description':'A gear keyword listed on some armor cards. This means this armor is part of an armor set.',},
 'Settlement': {
   'label':'',
   'description':'The unique collection of locations, innovations, principles, gear, resources, and survivors that represent the survivors\' home. Survivors are at the settlement during the Settlement Phase.',},
 'Settlement Board': {
   'label':'',
   'description':'The settlement board is located on the reverse side of the Hunt Board. The spaces on the board correspond to steps in the Settlement Phase to guide players along.',},
 'Settlement Event': {
   'label':'',
   'description':'An event occurring during the Settlement Phase.',},
 'Settlement Phase': {
   'label':'',
   'description':'During the Settlement Phase. survivors experience settlement and story events, spend {image@images/icons/endeavors}, craft gear, and determine which survivors depart on the next hunt. This is the only phase where survivors may change or rearrange their gear grids.',},
 'Settlement Record Sheet': {
   'label':'',
   'description':'Helps the players keep track of the development of their settlement.',},
 'Severe Injury': {
   'label':'',
   'description':'When survivors\' armor points and injury levels are exhausted, they may accumulate temporary or permanent severe injuries from the severe injury table.<br\>&emsp;When a survivor suffers permanent injuries, note the name and rules on your record sheet and adjust their attributes as necessary. Some injuries fill the Skip Next Hunt on survivor record sheet.<br\>&emsp;Otherwise, severe injuries last until the end of the showdown and are marked by attribute tokens.<br\>&emsp;Some permanent injuries have limits to how many times they can be recorded. If a survivor suffers a severe injury they have already recorded the maximum number of times, they instead gain 1 bleeding token.',},
 'Severe Injury Tables': {
   'label':'',
   'description':'Contains sections of possible severe Injuries to hit locations. Each hit that causes a severe injury prompts a roll on that location\'s severe injury table.',},
 'Sharp': {
   'label':'',
   'description':'A gear special rule. Add 1d10 strength to each wound attempt using this gear. This 1d10 is not a wound roll and cannot cause critical wounds.',},
 'Shield': {
   'label':'',
   'description':'Gear with this keyword is a shield weapon. Survivors may gain levels of shield weapon proficiency with this weapon.',},
 'Showdown Board': {
   'label':'',
   'description':'Used to represent the area where the survivors face the monster in battle. Specific rules for setting up the showdown board are found on each monster\'s showdown story event.',},
 'Showdown Board Edge': {
   'label':'',
   'description':'Generally, monsters or survivors cannot move off the edge of the showdown board. Any knockback or full move effects that would bring a miniature past a board edge stops at the edge instead.',},
 'Showdown Phase': {
   'label':'',
   'description':'The part of a session where survivors face off against a monster. See individual monster showdown pages for instructions on how to start and end the Showdown Phase.',},
 'Showdown Setup': {
   'label':'',
   'description':'A component of each monster\'s showdown story event. Contains instructions for setting up terrain tiles and monster and survivor miniatures on the showdown board before a battle.',},
 'Sickle': {
   'label':'',
   'description':'A gear keyword. In certain situations, this can be used to harvest herbs.',},
 'Skewer': {
   'label':'',
   'description':'A Screaming Armor set bonus. After you <b>slam</b> spend {image@images/icons/activation} to move 1 space and activate a melee weapon with +2 strength, if you wound with a spear, apply that wound roll result to the next selected hit location this attack.',},
 'Skip Next Hunt': {
   'label':'',
   'description':'Fill in the Skip Next Hunt box on the survivor\'s record sheet. The survivor may not be selected as a departing survivor. After departing survivors are chosen, erase all filled Skip Next Hunt boxes on all survivor record sheets.',},
 'Slam': {
   'label':'',
   'description':'A gear special rule. Spend {image@images/icons/movement} and full move forward in a straight line. If you move 4+ spaces and stop adjacent to a monster, it suffers knockback 1 and -1 Toughness until the end of the round.',},
 'Slow': {
   'label':'',
   'description':'A gear special rule. Slow weapons always have an attack speed of l. Do not add speed modifiers.',},
 'Sniff': {
   'label':'',
   'description':'The White Lion\'s instinct Described on the White Lion\'s showdown story event.',},
 'Shadow Walk': {
   'label':'',
   'description':'When you spend {image@images/icons/movement}, you may move through spaces survivors occupy without causing <b>collision</b>.',},
 'Soluble': {
   'label':'',
   'description':'A gear keyword. Able to be dissolved in liquid.',},

 'Solar Track': {
   'label':'',
   'description':'The Solar Track is used during the showdown with the Sunstalker. It interacts with the monster\'s trait cards, tracks the current solar energy, and determines the direction shadows are cast.<br/><br/>Set up the Solar Track alongside the showdown board. The showdown will begin with the light at the survivors backs.',},
 'Spear': {
   'label':'',
   'description':'Gear with this keyword is a spear weapon. Survivors may gain levels of spear weapon proficiency with this weapon.',},
 'Special Showdown': {
   'label':'',
   'description':'Special Showdowns interrupt the Settlement Phase. After they conclude (regardless of victory or defeat), the Settlement Phase continues where it left off. Do not generate {image@images/icons/endeavors} or trigger new story events. Each Special Showdown\'s details are listed on the story event or innovation that triggered it. After showdown heal all light and heavy injuries from the remaining survivors and remove all tokens.',},
 'Speed (Attack Profile/Weapon)': {
   'label':'',
   'description':'The number of attack rolls (number of dice rolled). Usually determined by a monster Al card\'s attack profile or speed on a survivor\'s weapon.',},
 'Speed (Attribute)': {
   'label':'',
   'description':'Speed is added to a survivor\'s weapon speed or a monster\'s attack profile speed to determine the number of attack rolls. If speed is negative, subtract it from the number of dice rolled for an attack. A monster or survivor attack with less than one speed still has one attack roll. weapons with the Slow keyword cannot benefit from positive speed bonuses.',},

 'Starvation Space': {
   'label':'',
   'description':'The last space of the hunt board. If survivors move into this space (including starting a showdown) apply the rules listed on the hunt board.',},
 'Stinky': {
   'label':'',
   'description':'A gear keyword. This item has a strong odor.',},



 'Story Event': {
   'label':'',
   'description':'An event which impacts the settlement/survivors. Common triggers include: the settlement timeline, survivor milestones in Hunt XP/courage/understanding, monster cards, settlement events. When a Story Event appears, trigger the story event by turning to the appropriate page in the rulebook and following its instructions.',},
 'Strain Milestone': {
   'label':'',
   'description':'Strain milestones are a way for player exploits to permanently alter the future of their games. During the settlement phase, any unreached strain milestone cards are placed on the settlement board over the <b>Check Milestones</b> step.<br/><br/>During this step, check the strain milestone cards first. If any of the card\'s milestone conditions have been reached, resolve it\'s permanent effect and remove the achieved strain milestone from the game. They can never be used again in any campaign.',},
 'Strange Resources': {
   'label':'',
   'description':'Resource cards only gained in specific circumstances. Strange monster resources are not shuffled into monster resource decks.',},
 'Strength (Attribute)': {
   'label':'',
   'description':'Strength is added to the result of a wound attempt. If strength is a negative number, subtract it from the wound attempt result',},
 'Strength (Weapon)': {
   'label':'',
   'description':'The number a weapon adds to wound attempt.',},
 'Super-Dense': {
   'label':'',
   'description':'A type of hit location. This hit location is unusually hard. If a survivor attempts to wound one of these locations with a frail weapon, it is destroyed and archived at the end of the attack.',},
 'Surge': {
   'label':'',
   'description':'A type of survival action. When opportunity permits, a survivor may spend 1 survival to surge. Gain +1{image@images/icons/activation}, which must be spent immediately. This allows them to activate a weapon, interact with terrain, use gear, and anything else spending an {image@images/icons/activation} allows them to do. Resolve the results of the surge (including any monster reactions) before resuming the tum. Each survivor may only surge once per round, and only if the settlement has the Inner Lantern Innovation.',},
 'Survival': {
   'label':'',
   'description':'Survival is the desperate desire to cling to life. Survival points are gained and lost throughout the campaign. They are spent to perform extraordinary feats and change your fate. Update the survival box on your character record sheet as it is gained and lost.',},
 'Survival Action': {
   'label':'',
   'description':'Survival actions are the most common uses for survival points. There are 4: dodge, encourage, dash, and surge.',},
 'Survival Limit': {
   'label':'',
   'description':'Survival limit is the maximum amount of survival a survivor may have. Survival limit is recorded on the settlement record sheet. Innovations and events raise the settlement\'s survival limit. At the start of the campaign. the survival limit is 1. Survival gained over the survival limit is lost.',},
 'Survival Opportunity': {
   'label':'',
   'description':'The only times that survivors may dash or surge. Survival opportunities exist at the following times: during flows on monster Al cards, between actions on the survivors\' turn, before performing reactions, after critical wound effects, or when a monster is knocked down.',},
 'Survivor Record Sheet': {
   'label':'',
   'description':'Represents the permanent status of a survivor. Some sections include: attributes, Hunt XP, weapon proficiency, and permanent changes.',},
 'Survivor Status Card': {
   'label':'',
   'description':'Special (S) Al cards that track conditions for an individual survivor rather than the monster. When a survivor gains a survivor status card, place it next to their gear grid. The card\'s effects apply only to them. Some status cards change and need to be tracked. Some grant survivors unique actions. If a monster\'s story event has a Survivor Status card in its setup, all survivors gain the card at the start of the showdown.',},

 'Sword': {
   'label':'',
   'description':'Gear with this keyword is a sword weapon. Survivors may gain levels of sword weapon proficiency with this weapon.',},
 'Tactics Cards': {
   'label':'',
   'description':'Tactics provide survivors with new ways to fight, using what they\'ve learned from fighting knights. Tactics Cards are drawn at the start of showdown and places in survivors play area. At the end of showdown, archive all drawn Tactics Cards.',},
 'Target': {
   'label':'',
   'description':'The recipient of an attack or effect. Some attacks or effects may impact survivors other than the target.',},
 'Terrain Cards': {
   'label':'',
   'description':'Represent terrain that can be encountered during the Showdown Phase and contain rules for how monsters and survivors interact with them. Terrain cards place one or more terrain tiles on the showdown board.',},
 'Terrain Tile': {
   'label':'',
   'description':'Terrain tiles are placed on the Showdown Board to represent physical features. The type and amount of terrain added to the Showdown Board is determined by the terrain cards specified in the setup section of each monster\'s showdown story event.',},
 'Threat': {
   'label':'',
   'description':'A threat is any survivor that is not knocked down or using special gear, terrain, or abilities to prevent being considered a threat.',},
 'Thrown': {
   'label':'',
   'description':'Gear with this keyword is a thrown weapon. Survivors may not gain levels of thrown weapon proficiency.',},

 'Timeline': {
   'label':'',
   'description':'Tracks the number of lantern years since the establishment of your settlement on the Settlement Record Sheet. Trigger story and settlement events as the timeline advances.',},

 'Tool': {
   'label':'',
   'description':'A gear keyword. Some tools trigger story events or grant bonuses.',},
 'Toughness': {
   'label':'',
   'description':'Toughness is the number a wound attempt total must meet or exceed to successfully wound a monster.',},
 'Toward (Movement)': {
   'label':'',
   'description':'A direction used in reference to another point on the showdown board, such as a monster, survivor, terrain tile, or board edge.',},
 'Trait': {
   'label':'',
   'description':'A type of monster Al card. Describes permanent changes to the characteristics or behaviors of the monster. Trait cards are not discarded at the end of the monster turn.',},
 'Trap': {
   'label':'',
   'description':'A type of monster hit location. A trap cancels all the attacker\'s hits, ends their attack, and causes the monster to stand, in addition to the actions listed on the card. After the Trap\'s actions are resolved, shuffle the entire hit location deck.',},
 'Trigger': {
   'label':'',
   'description':'Part of a monster\'s attack profile. Indicates that an Attack Effect is part of this attack.',},
 'Turn (Monster)': {
   'label':'',
   'description':'The first part of a round, when the monster acts. The monster controller should apply any \"at start of turn\" effects, draw and play Al cards, then apply any \"at end of turn\" effects.',},
 'Turn (Survivors)': {
   'label':'',
   'description':'The second part of a round is the survivors turn. During the survivors\' turn, survivors act one at a time, each completing their entire act before another survivor may take their act. Survivors may choose to act in any order.',},
 'Two-handed': {
   'label':'',
   'description':'A gear keyword. This weapon requires two hands to use. Some gear and rules do not work with two-handed weapons. Survivor can use two-handed and gain the benefits of a shield at the same time.',},
 'Twilight Sword': {
   'label':'',
   'description':'A weapon of great strength. Survivor holding can select it as a weapon profiency.',},
 'Undeathable': {
   'label':'',
   'description':'A gear special rule. If the survivor dies, roll 1d10. On a result of 6+, the survivor lives. If this roll occurs from the survivor having a lethal amount of bleeding tokens, the survivor will not die until they gain another bleeding token.',},
 'Understanding': {
   'label':'',
   'description':'A survivor attribute listed on the survivor record sheet. Represents a survivor\'s insight about the world. Reaching an understanding level of 3 will trigger the Insight Story Event, while reaching a level of 9 will trigger the White Secret Story Event.',},
 'Unique': {
   'label':'',
   'description':'A gearlement may only have one copy of this gear card at a time.',},
 'Unshakable': {
   'label':'',
   'description':'A gear special rule. When this survivor draws a trap card, roll 1d10. On a result of 6+, ignore the trap. Discard it and shuffle the hit location deck.',},
 'Unstoppable': {
   'label':'',
   'description':'A gear special rule. Replace all wound rolls with a 1d10 roll. On 1-5, fail to wound, on 6+ wound. You cannot cause a critical wound while using this rule.',},
 'Unwieldy': {
   'label':'',
   'description':'A gear special rule. If any attack dice roll results are 1, the weapon causes 1 random damage to the survivor for each 1 rolled. Continue the attack as normal.',},
 'Vermin Resources': {
   'label':'',
   'description':'Vermin resources can be found in Bug Patches during showdowns, or as a result of events. Vermin cards describe how each vermin can be used. Vermin can also be used in the cooking Story Event.',},
 'Victory': {
   'label':'',
   'description':'Part of a monster\'s Aftermath. Use this result if the monster is defeated. Add that monster to the Defeated Monsters section of the settlement record sheet. If a Nemesis monster was defeated, update the Nemesis monster section as well.',},
 'Vital': {
   'label':'',
   'description':'If the settlement has any gear with this rule, the survivors cannot depart without this gear. If the survivor holding Vital gear perishes before the showdown, another survivor must pick up the Vital gear (discarding gear to make room in their grid if needed).',},
 'Waist': {
   'label':'',
   'description':'A survivor hit location. \nDamage to the waist beyond the heavy injury level results in a roll on the Waist section of the severe Injury table.',},

 'Weapon': {
   'label':'',
   'description':'A type of gear card. weapon types in the core game include axe, bow, club, dagger, fist & tooth, grand, katar, shield, spear, sword, and whip.',},
 'Weapon Mastery': {
   'label':'',
   'description':'Achieved when a survivor has eight or more levels of weapon proficiency. When any survivor attains a weapon mastery, add that mastery to the settlement as an innovation. All survivors automatically gain the Specialist bonus for that weapon type in addition to any weapon proficiencies they already have.',},
 'Weapon Proficiency': {
   'label':'',
   'description':'A survivor attribute listed on the survivor record sheet. Weapon proficiency represents a survivor\'s skill with a weapon type. May be earned for the following weapon types: axe, bow, club, dagger, fist & tooth, grand, katar, scythe, shield, spear, sword, twilight sword and whip.<br\>&emsp;After reaching the first Hunt XP milestone, survivors can declare a weapon type to gain weapon proficiency in. A survivor must first declare a weapon type before departing on a hunt (write it in the space on the record sheet) and then wound a monster at least once during a showdown with that weapon type in order to gain levels of weapon proficiency.<br\>&emsp;If survivor changes weapon type - all accrued levels of weapon proficiency, including weapon specialisation, are lost.',},
 'Weapon Specialization': {
   'label':'',
   'description':'Achieved when a survivor has three or more levels of weapon proficiency. Survivors develop new skills which often empower that weapon.',},
 'Whip': {
   'label':'',
   'description':'Gear with this keyword is a whip weapon. Survivors may gain levels of whip weapon proficiency with this weapon.',},
 'Wound': {
   'label':'',
   'description':'When a survivor successfully wounds a monster, remove the top card from its Al Deck and place it in the Wound Stack. If the Al deck is empty, shuffle the Al discard to create a new deck first.',},
 'Wound (Reaction)': {
   'label':'',
   'description':'Listed on some monster hit location cards. An action that a monster performs in response to a successful wound attempt at certain hit locations.',},
 'Wound Attempt': {
   'label':'',
   'description':'The total power of a survivor\'s hit. Add the wound roll result (1d10) to the attacking weapon\'s strength, along with any other strength modifiers. If a wound attempt total meets or exceeds the monster\'s toughness, then the hit location is wounded.',},
 'Wound Roll': {
   'label':'',
   'description':'Represents the variable ferocity of a survivor\'s hit. Roll 1d10 and add the result to the wound attempt. The result of this d10 (adding luck modifiers) determines whether or not a critical wound is caused on locations with critical wound effects.',},
 'Zone of (X) / (X) Zone': {
   'label':'',
   'description':'The indicated area for actions and reactions onon cards.',},

   'Zone of (X) / (X) Zone': {
     'label':'',
     'description':'The indicated area for actions and reactions onon cards.',
   },
   'Bard (Hall of Light)' : {
     'expansion': 'trial of champions',
     'description': 'Rippling just beneath the surface, in every idle whistle and unfocused melody, the Devil’s Symphony desires to manifest. A piece of music so powerful it kills any sentient being that hears it. The Bard, the god of performance incarnate, arrives to battle the symphony.<br/><br/>Her ears are outfitted to hear into the fundamental frequencies of the world. She listens unharmed, to the insidious echoes of the symphony, following it wherever it sounds. Her weapons play harmonies and dissonances that warp the harmonics of reality to combat the symphony’s destructive power. Over centuries, generations of fans have followed her on the road to confront the symphony within the Obsidian Catacombs.<br/><br/>Secret Fighting Art roll: <b>8+</b>',
   },
   'Cleric (Hall of Light)' : {
     'expansion': 'trial of champions',
     'description': 'Curse afflicted survivors, clasping their lingering hopes close, are often the quickest to succumb to subterfuge disguised as benevolence. Entities, driven by inscrutable purposes, see to it that zealots under their command, quest and bring light to other wretched souls across the land. Noble and pious, clerics act as intermediaries between the corporeal world and the various entities governing it. They’re versatile healers and militant warriors capable of great feats. A clerics resolute faith and orison allows them to perform miraculous acts while assisting their allies in combat. These chosen individuals seek to encourage and support growing settlements. Their fervent beliefs drive them forward through all challenges. A cleric is always drawn to whatever purpose their god has designed for them.<br/><br/>Secret Fighting Art roll: <b>8+</b>',
   },
   'Paladin (Hall of Light)' : {
     'expansion': 'trial of champions',
     'description': 'Truth Bearers defend honesty and justice above all else. Every day a knight speaks the truth, their shields grow. A boon but also a burden, the impervious shields deflect any claw, but also become impossibly heavy. The most pious paladins must radically increase their bone density so they can wield the massive symbols of their faith. Grueling strength training takes place underwater, insaline pools filled with the tears of lying initiates.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },
   'Monk (Hall of Light)' : {
     'expansion': 'trial of champions',
     'description': 'The Monks’ tradition is rooted in the restoration of artifacts and shrines. Often these restorations involve long, perilous spiritual journeys to gather rare materials. Each monk is trained as a warrior and an artist. The monks are so deeply connected to their works that as they improve and beautify them, they too are lifted, in turn becoming more beautiful and refined themselves.<br/><br/>They struggle with their swelling pride. Vanity rotting away their spiritual selves. To atone, they embark on ascetic quests into the wilderness to build something new in a secret, unknown place. They pour their grace into a new edifice and return haggard, faces lined with age, leaving their beauty behind in new shrines and artifacts scattered in the hidden corners of the world.<br/><br/>Secret Fighting Art roll: <b>8+</b>',
   },
   'Druid (Hall of the Horizon)' : {
     'expansion': 'trial of champions',
     'description': 'The Abyssal Woods exists on the precipice of obliteration, its heavy limbs pulled inexorably towards a black hole at its center, no larger than a grain of sand. The hole breathes, as though it were a living being. Every inhale threatens to devour the forest, an intense vacuum rips roots from the ground and sucks waves of tumbling debris through the air.<br/><br/>Those that live in the Abyssal Woods evolves to survive the tantrums of a tiny, unpredictable orifice at its center. Insects with opposable thumbs cling tenaciously to trees, whose roots have become powerful, gnarled hands firmly gripping the ground. Seasoned visitors carry chains and hooks to secure themselves at a moment’s notice to the largest things in sight when the winds pick up.<br/><br/>Secret Fighting Art roll: <b>6+</b>',
   },
   'Mage (Hall of the Horizon)' : {
     'expansion': 'trial of champions',
     'description': 'The Mage comes from settlement of Aromachologists. Their magic, distilled oils from a variety of eccentric entities. Maybe, the settlement met a terrible fate, the raw oil from the Vermillion Raven reducing the population to mere doll like husks. And it may be the Mage escaped with a fistful of her kin and the twisted will to burn them for power to ensure her continued prosperity.<br/><br/>Secret Fighting Art roll: <b>8+</b>',
   },
   'Gladiator (Hall of the Horizon)' : {
     'expansion': 'trial of champions',
     'description': 'Tricked into taking human form by a sly-talking adventurer, the queen of demons must defeat ten thousand worthy opponents to regain her true form. In her quest, she found an ardent purpose. Drunk on the adoration of her admirers and mounting riches, the Gladiator rose to undefeated infamy in the gleaming arena. It is with a strange sadness that she faces down the last hundred opponents. Her appearances grow rarer as she scours the crowds of contenders for a unique challenge to close her mortal life.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },
   'Samurai (Hall of the Horizon)' : {
     'expansion': 'trial of champions',
     'description': 'By offering an eye, the apprentice becomes a Samurai. The second eye is sacrificed to become a master. A clan will take turns using their master’s eyes to see into the world of spirits. Without their master’s eyes their eye sockets are appealing places for spirits to invade. Samurai may perform favors for these spirits in exchange for insight and guidance. Each samurai carries a cursed blade that is destined to defeat foes that share a distinctive brand that is also etched into the blade. To the great sadness of some samurai, these brands may appear on their dearest allies.<br/><br/><b>Note:</b> The Samurai class can take the Katana Specialization with no prerequisite. If Master level is reached in Katana Weapon Proficiency, the Samurai does not leave the settlement.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },
   'Assassin (Hall of Shadow)' : {
     'expansion': 'trial of champions',
     'description': 'Long ago the assassins joined their bodies with Phantasms and developed a second heart. An assassin can survive losing a heart, but they must choose to give up their corporeal form or their mastery of magic. Breaking tradition, the assassin left her people to join in the adventures of other warriors and see the world.<br/><br/>Periodically she must return to her spectral homelands to drink from the Font of Phantasms to replenish the magical might of her phantasmal heart.<br/><br/><b>Note:</b> The rules to Shades from the Suppressed Shadow Secret Fighting Art can be found in the Kingdom Death: Sunstalker Expansion.<br/><br/>Secret Fighting Art roll: <b>8+</b>',
   },
   'Necromancer (Hall of Shadow)' : {
     'expansion': 'trial of champions',
     'description': 'The dreaded Necromancer hailed from the citadel of black magic. One grief stricken night, the Necromancer cast a mighty spell to give rebirth to a lost lover, imparting her with an entirely new lifetime. The cost was dear and the necromancer’s form was reduced to a single gnarled hand.<br/><br/>Since then, the Necromancer has used his feeble power to remain at the young girl’s side, guiding her to seek power in the dark arts so that one day she may discover a way to restore him.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },
   'Ranger (Hall of Shadow)' : {
     'expansion': 'trial of champions',
     'description': 'The Ranger’s beloved was stolen by a devious, silent hunter. Alone and vowing vengeance, she pursued the creature but it always heard her coming. She perfected her marksmanship and hunted it from afar but still, the creature heard her approach.<br/><br/>She set off into the rustling forests to become a perfect stalker. She hung bells of different timber over her body to study how each step, bow string, and arrow notch made her presence known. She would learn to kill with such skill that announcing her presence with the tinkling of bells would not prevent her from taking her revenge.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },
   'Thief (Hall of Shadow)' : {
     'expansion': 'trial of champions',
     'description': 'Maybe she is a frantic Savior’s painting come to life. Or perhaps she comes from a small village at the center of a rainbowhued swamp that absorbs the life of its inhabitants for generations before it awakes and paints a tapestry across the horizon. She could also be a renegade from a far developed Sun Stalker settlement. One day we’ll set the record straight.<br/><br/>Secret Fighting Art roll: <b>7+</b>',
   },

   'Set Aside Survivors' : {
     'description': 'During the campaign, some survivors may be prompted to leave the settlement, with instructions that the survivor sheets must be set aside. Survivors that are set aside are removed from the settlement population and are treated as dead, with the exceptions that these survivors do not count towards the death count and an cursed gear must stay in their grid, unless otherwise prompted. Settlements also do not gain the benefits of its death principle when survivors are set aside. If a set aside survivor is directly stated to have died, archive their survivor sheet and grid as normal. When a set aside survivor is added back into the settlement, regain 1 population and return their survivor sheet and grid.',
   },
   'Patterns': {
     'description': 'Patterns represent moments of ingenuity and unique circumstances coming together to inspire something new. In their own way, Patterns are the stories of crafting and are discovered in numerous ways through gameplay. They offer unique gear for a settlement to craft and often have challenging requirements. Pattern cards are not limited to just having resources as a cost; they may require a specialist, a disorder, or another item to use in their creation.'
   },
}

module.exports = {
 texts,
}
