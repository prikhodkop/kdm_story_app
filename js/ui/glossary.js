const { cdnUrl } = require('./template-renderer')
const { getSettings } = require('./../ui/settings')

const glossary_terms = {
  'Abilities': 'Skills and techniques learned by survivors, usually through story events, and recorded on the Survivor Record Sheet.',
  'Absorb': 'The Watcher\'s Instinct. Described on the Watcher\'s showdown story event.',
  'Acceleration': 'Add +1d10 movement to a move action. Before moving, you may roll the Death Die and the result to your movement for one move action this round.',
  'Accessory': 'A gear special rule. Accessory gear may be worn in addition to armor on a hit location. Each accessory specifies the hit location it covers.',
  'Accuracy (Attribute)': 'Represents permanent changes to attack rolls. Positive attribute adds to the dice roll, while negative attribute subtracts from the dice roll.',
  'Accuracy (Weapon/Attack Profile)': 'The number that each attack roll result must meet or exceed in order to be considered a hit. Listed on monster attack profiles and weapon gear.',
  // 'Acid Palms':'An ability. Add 1d10 strength to wound attempts when attacking with Fist & Tooth.',
  'Act': 'The part of the survivors’ turn in which an individual survivor gains movement and activation. Each survivor must complete their act before another may start theirs, and all unused movement and activations are lost when a survivor ends their act.',
  'Action': 'Most things a survivor or monster can do during the Showdown Phase, like moving and attacking, are actions.',
  'Activation': 'Activation can be spent to attack, activate some gear, and interact with terrain. Survivors gain one activation during that survivor\'s act.',
  'Adjacent (Miniature)': 'A miniature is adjacent to another when it occupies a space one space in a cardinal (non-diagonal) direction from a square occupied by the other miniature.',
  'Affinity (Completed)': 'Some gear cards have red, blue, or green half-squares on the card edge. If a half-square is adjacent to a half-square of the same color on another gear card, the complete square they form is one affinity.',
  'Affinity Bonus': 'A type of gear special rule. Having the indicated number of colored affinities will trigger the effect. Each affinity bonus only applies once, regardless of how many extra affinities a survivor has.',
  'After Damage': 'An attack trigger found on some monster Al attack profiles. If there are any successful hits in the attack, resolve all damage from all hits in this attack (roll hit location dice, apply damage to hit location), then apply this trigger\'s attack effects. If there is no damage dealt from the attack, do not apply this effect.',
  'After Hit': 'An attack trigger found on some monster Al attack profiles. If there are any successful hits in the attack before rolling hit location dice, apply this trigger\'s attack effects.',
  'Aftermath': 'The end of a showdown Phase. Contains different outcomes based on the survivors\' success or failure.',
  // 'Ageless':'An ability. You may hunt if you are retired. When you gain Hunt XP, you may decide not to gain it.',
  'Agression Overload': 'Add an attack roll to an attack. During your attack, after making your attack rolls but before drawing hit locations, you may roll the Death Die as an additional attack roll.',
  'AI Card': 'Al cards are made up of actions, flows and alerts, some cards also have persistent injury and/or definition boxes. There are four kinds of Al cards: Basic (B), Advanced (A), Legendary (L) and Special (S).',
  'Alerts': 'Actions following an alert contain important conditional information that must be considered to determine if the action is performed. Continue to perform any further actions on the Al card unless stated otherwise. Survival may not be spent during an alert.',
  'All Survivors': 'An effect during the showdown that refers to all survivors applies to all survivors currently on the showdown board. Unless explicitly stated otherwise survivors removed from the showdown board are unaffected.',
  'Ambush (Monster)': 'If the monster moves into the survivors\' hunt board space, it ambushes the survivors. End any current hunt events and start the showdown immediately. Survivors skip their first turn. In most cases, this means that the monster will take two turns in a row.',
  'Ambush (Survivors)': 'Some hunt events allow the survivors to ambush the monster. If they do, survivors may go first in the showdown. Do not follow the setup rules on the monster\'s story event. Instead, place the listed showdown terrain, the monster, and survivors on the showdown board as the players decide (setup rules on terrain cards must still be followed).',
  'Ammo - Bow': 'A gear special rule. You must have a bow in your gear grid to activate this card. Ammo has the range of a bow in your gear grid. Ammo do not inherit the qualities of bows they are fired from (cumbersome, cursed, etc). Wounding with an ammo does not make a survivor eligible to earn bow proficiency.',
  'Ammunition': 'A gear keyword. This gear is ammunition for another weapon gear.',
  // 'Analyze':'An ability. At the start of the survivors\' turn. if you are adjacent to the monster. reveal the top Al card. then place it back on top of the deck.',
  'Archive': 'Remove this card from play and return it to the game box.  Unless it is recorded into settlement storage or the survivor\'s record sheet, any archived card is permanently lost.',
  'Armor': 'Gear with this keyword is armor. Protects the survivor from injury. Each piece of armor will have the hit location symbol for the hit location it can be worn on. Each hit location may only wear one piece of armor.',
  'Armor Points': 'Recorded on the survivor record sheet. Determined by armor gear in the survivor\'s gear grid, as well as other effects and events. Each point negates one point of damage to the hit location. Armor points decrease by 1 for each damage they negate.',
  'Armor Set': 'Each armor set is comprised of all armor from a single settlement location with the keyword <b style="color:#990 !important;">\"set\"</b>. For example. while a survivor is wearing the White Lion Helm, White Lion Gauntlets, White Lion Coat. White Lion Skirt, and White Lion Boots, they have completed the White Lion armor set.',
  'Armor Set Bonus': 'A survivor wearing a completed armor set gains the benefits of the armor set bonus listed on its corresponding armor set card.',
  'Arms': 'A survivor hit location. \nDamage to the arms beyond the heavy injury level results in a roll on the Arms section of the Severe Injury table.',
  'Arrival': 'The start of the showdown. Any survivors who have "On Arrival" effect apply them in the order of their choice.',
  'Arrow': 'A gear keyword. This gear card is an arrow. Although arrows require a bow to be in your gear grid to be activated, arrows and bows are distinct weapons. Arrows do not inherit the qualities of bows they are fired from (cumbersome, cursed, etc). Wounding with an arrow does not make a survivor eligible to earn bow proficiency.',
  'Attack': 'The process of making an attack roll and resolving damage, wounds, or other effects.',
  'Attack Effects': 'Attack effects are rules contained in a box below the attack profile on some Al cards, and applied when the trigger occurs. These effects are applied only once, even if the target is hit or damaged multiple times by this attack.',
  'Attack Profile': 'Part of monster Al cards and basic actions. Lists the speed, accuracy, damage, and any triggers for a monster attack.',
  'Attack Roll': 'The dice roll that represents an attempt to hit a target. A Lantern 10 will always result in a hit.',
  'Attribute': 'An aspect of a survivor or monster described by a numerical value.',
  'Attribute Modifier Token': 'Attribute modifier tokens are used to Indicate temporary changes to attributes. Attribute modifier tokens are double-sided to represent gains and losses for that attribute, and are combined with permanent attribute totals to determine the current level of each attribute. All tokens are removed at the end of each showdown.',
  'Automatic Hit(s)': 'When a survivor with any automatic hits makes an attack roll, forgo rolling that many dice and successfully hit the monster that many times. Any remaining rolls from that attack are performed normally. Despite how many automatic hits a survivor might have, they cannot hit a monster more than the total speed of their attack. Automatic hits are not Perfect Hits. Do not roll another d10 to check, they are just hits.',
  'Away (Movement)': 'A movement that puts the most possible spaces between two points on the showdown board, such as a monster, survivor, terrain, or board edge.',
  'Axe': 'Gear with this keyword is an axe weapon. Survivors may gain levels of axe weapon proficiency with this weapon.',
  'Back': 'The direction opposite of the monster\'s facing.',
  'Balm': 'A gear keyword. Balm items work by rubbing them on a survivor\'s skin.',
  'Bash': 'Causes survivors to be knocked down.',
  'Basic Action': 'A Monster\'s basic. action is detailed on its Bask Action card. A basic action consists of a target action and an attack action with an attack profile. Monsters will perform a basic action on some AI cards in some reactions, or if the Al deck and discard are both empty. Performing a basic action does not count as an Al card being drawn.',
  'Basic Action/Reference Card': 'Double-sided Basic Action/Reference cards contain a monster\'s basic action on one side, and an overview of the monster\'s characteristics on the other side.',
  'Basic Hunt Event': '100 events survivors may encounter out in the darkness. Found in the Basic Hunt Event section of the rulebook.',
  'Basic Resources': 'Generic resources that can be gained from most huntable monsters and many events.',
  'Before Damage': 'A trigger found on some monster attack profiles. Apply this trigger\'s attack effect after hits and hit location dice are rolled, but before damage is dealt to hit locations.',
  // 'Bitter Frenzy':'An ability. You may spend survival and use fighting arts, weapon specialization, and weapon mastery while Frenzied.',
  'Bleed X': 'The target gains X bleeding tokens.',
  'Bleeding Token': 'Survivors can gain bleeding tokens from severe injuries, monster attacks, and some events. If a survivor has 5 or more bleeding tokens, they are dead. All tokens are removed at the end of each showdown.',
  'Blind Spot': 'Usually the spaces directly behind the monster. Survivors attacking from the blind spot gain +l accuracy.',
  'Block X': 'A gear special rule. Spend activation to ignore X hits the next time you are attacked. Lasts until your next act. A survivor may not use block more than once per attack. Effects gaining block are not cumulative, only largest apply.',
  'Blue Life Exchange': 'An ability. In the Aftermath, gain 3 additional Hunt XP. You may not place gear with the \"other\" keyword in your grid. Gain +1 permanent luck with each Age milestone. When you retire, you cease to exist.',
  'Body': 'A survivor hit location. This is the only hit location that appears twice on the hit location dice. \nDamage to the body beyond the heavy injury level results in a roll on the Body section of the Severe Injury table.',
  'Body Blow': 'An attack that always hits a survivor\'s body location. Do not roll hit location dice for this attack.',
  'Bone (Gear)': 'A gear keyword. Bone is one of the primary materials used to craft this gear.',
  'Bone (Resource)': 'A common resource keyword.',
  'Bow': 'Gear with this keyword is a bow weapon. Survivors may gain levels of bow weapon proficiency with this weapon.',
  'Brain': 'The Brain is a survivor location different from hit locations, and represents a survivor\'s mental fitness. Since the human mind is fragile, there is only one injury level for the Brain (indicated by the light-lined unfilled box). The Brain is only damaged by brain damage. \nAny damage beyond the light injury level results in a roll on the Brain Trauma table.',
  'Brain Damage': 'Brain damage only affects the Brain location.',
  'Brain Trauma Table': 'Contains possible outcomes of excess damage to the Brain location.',
  'Build (Location)': 'when a new location is built, place that settlement location in the play area and add the new location to your settlement record sheet. This is a permanent addition to your settlement.',
  // 'Burnt Nerves':'An ability. You are immune to bash.',
  'Calcification': 'Once gear is calcified, flip it to the calcified side. After calcification the normal side of that gear cannot be used.',
  'Canceled Attack': 'A canceled attack Immediately ends. Discard all unresolved hit locations. Do not perform any actions, special rules, critical effects, or reactions on these cards.',
  // 'Caratosis':'An ability. For each red affinity you have, 1 of your attack rolls hits automatically each attack.',
  'Charge': 'A gear special rule. Survivors spend movement and activation to move the maximum available spaces in a straight line in one direction. At the end of movement, if in range, perform an attack using a melee weapon, adding the number of spaces moved in this way to your strength for the attack. Charge does not impact any further attacks this turn.',
  'Closest Survivor': 'The survivor the least number of cardinal spaces away from the monster.',
  'Closest Threat': 'The threat the least number of cardinal spaces away from the monster.',
  'Club': 'Gear with this keyword is a club weapon. Survivors may gain levels of club weapon proficiency with this weapon.',
  'Conflict (Rule of Death)': 'As in any game with many moving parts and rules, conflict may occasionally arise regarding rules interpretations, group decisions, or exceptions.<br\>&emsp;First and foremost, this game is designed to provide time well spent with friends. Use this as the guiding principle for solving any problems that arise. In addition, here are some technical guidelines, for resolving conflict.<br/>&emsp;When conflict arises over contradictions in rules, apply specific rules found on cards (AI, gear etc) and story events, before any rules found in the rulebook core rules sections.<br/>&emsp;If conflicts arise that slow or halt a play session completely, use the <b style="color:#990 !important;">Rule of Death: always rule against the survivors</b>. Kingdom Death is a dangerous place, and the survivors\' future is bleak. Make sure that any ambiguities resolve against the survivors\' favor.<br/>&emsp;At its core, <i>Monster</i> is a cooperative experience. Be respectful of others as you navigate the game\'s decisions together.',
  'Collides': 'If a monster moves through a space occupied by a survivor, they collide and the survivor suffers collision. If a monster ends its movement on a survivor, they collide.  The survivor suffers collision and knockback 5. If a survivor is knocked back into impassable terrain, they collide with it and the survivor suffers collision. If a survivor suffers knockback into another survivor, complete the knockback movement normally. Both survivors suffer collision at the end of knockback. If the survivors would occupy the same space, instead place the knocked back survivor in the closest unoccupied space.',
  'Collision': 'When a survivor suffers collision. they are knocked down.',
  'Concentrate': 'You need to focus your mind to perform extraordinary feats. At the start of your act declare your intent to Concentrate. Immediately end your act and attempt to concentrate until the start of your next act. To successfully concentrate you cannot: perform any kind of actions, move for any reason, suffer knocked down, suffer any kind of damage, gain any bleeding or negative attribute tokens.',
  'Consumable': 'A keyword. This may be consumed by survivors.',
  'Consume': 'A special rule. This consumable gear or resources may be ingested by survivors for a listed result.  Some are archived after use.',
  'Courage': 'A survivor attribute listed on the survivor record sheet. Courage is a survivor\'s potentially ill-advised bravery. Reaching a courage level of 3 will trigger the Bold Story Event, while reaching a level of 9 will trigger the See the Truth Story Event.',
  'Critical Wound': 'Critical wounds are lucky blows that always wound a monster, even if the wound attempt does not exceed the monster\'s toughness. A critical wound occurs when a wound roll result is a Lantern 10 on a hit location with a critical wound effect. The Luck attribute modifies the roll needed for a critical wound.',
  'Critical Wound Effect': 'Critical wound effects on monster Al cards are represented by the critical wound symbol, followed by rules that specify what happens when a monster is critically wounded at that location. Critical wounds effects are not reactions. On a critical wound, cancel all reactions on that hit location card.',
  // 'Crystal Skin':'An ability. You cannot place armor in your gear grid. When you depart, gain 2 armor points to all hit locations. Suffer -1 to the result of all severe injury rolls.',
  'Cumbersome': 'A gear special rule. Survivors must spend both movement and activation to activate Cumbersome gear. During a survivor\'s act, it is possible for them to fire use cumbersome gear twice by using a surge in conjunction with their regular movement, then use a dash with their regular activation. A survivor cannot spend 2 survival to use cumbersome gear outside of their act.',
  'Cursed': 'A gear special rule. This gear cannot be removed from the gear grid for any reason. If the survivor dies, archive this gear.',
  '(X)d10': 'A number (X) of ten-sided dice. The included dice feature a Lantern on the \"10\" face.',
  '1d5': 'Roll 1d10, divide the result by two and round up to the nearest whole number.',
  'd100': 'A hundred-sided die. This is accomplished by using 2d10, with one die nominated to represent the \"tens\" digit and the other to represent the \"ones\" digit. Note that a result showing 2 lanterns (result of 10 on each) indicates a result of 100.',
  'Dagger': 'Gear with this keyword is a dagger weapon. Survivors may gain levels of dagger weapon proficiency with this weapon.',
  'Damage (Attack Profile)': 'The amount of damage dealt for each hit ln a monster\'s attack. Roll separate hit locations for each hit.',
  'Damage (Attribute)': 'Damage is added to the damage listed on an attack profile to calculate the total damage of an attack.',
  'Damage (Condition)': 'A hit damages a survivor if it removes armor points or causes an injury. Hits which are dodged, blocked, or ignored do not cause damage.',
  'Dash': 'A survival action. When opportunity permits, a survivor may spend 1 survival to dash. They gain +1 Movement Action, which must be spent immediately. Each survivor may only Dash once per round. and only after the settlement has innovated the Paint innovation.',
  'Deadly': 'A gear special rule. Gain +1 Luck while attacking with this weapon. This increases the odds of inflicting critical wounds.',
  'Deaf': 'The survivor cannot hear or be impacted by encourage and other audible effects.',
  'Deathblow': 'If you kill the monster while dealing damage to that location you get the bonus listed on the card.',
  'Death (Monster)': 'A monster is defeated when it is wounded and there are no Al cards in the Al deck or Al discard pile to move to the wound stack.',
  'Death (Survivor)': 'A survivor can die in a variety of ways. Remove their miniature from the board. They can no longer participate in the hunt or showdown. Return their gear to the settlement storage and move their resources to another survivor. If all the survivors die during the showdown, all of their gear returns to the settlement, and all resources not in the settlement storage are lost.',
  'Death Count': 'Part of the settlement record sheet. During the Settlement Phase, if any survivors perished during the previous Hunt or Showdown Phase, update the death count. If survivors perish during the Settlement Phase, update the death count immediately. The first time a settlement\'s death count is updated. trigger the Principle: Death story event.',
  'Death Die': 'A special orange ten sided die. The Death Die replaces the Monster Controller tile. The player of the survivor with the Death Die controls the monster. At the start of the showdown, the player with the Final Lantern starts with the Death Die on Horripilation. At the start of each subsequent round, pass the Death Die to the Horripilation card to the left. The Watcher\'s final emanations continue to jump between lanterns of survivors that cannot act, including dead or abscent survivors. Instead of the benefits on the Monster Controller tile, you may use Pulse Discoveries baed on your settlements Lantern Research Level. Once per round, the survivor with the Death Die may use one of the settlement\'s unlocked Pulse Discoveries. After rolling the Death Die, return it to its current Horripilation card. If the Final Lantern is lost or archived, it is gone forever. Survivors cannot use the Death Die. Return to using the Monster Controller tile.',
  'Defeat': 'When the survivors are defeated by a monster. follow the defeat rules ln the Aftermath section of the monster\'s story event.',
  'Deflect X': 'Spend activation, you now have exactly X deflect tokens. The next X time you are hit, ignore a hit and lose 1 deflect token.',
  'Depart (As in, \"When you depart\")': 'These rules apply to departing survivors at the end of the Settlement Phase.',
  'Departing Survivors': 'The survivors nominated to take part in the next hunt and showdown.',
  'Destroy Armor': 'An attack effect that reduces armor points of a survivor hit location too before applying damage.',
  'Destructible': 'A terrain special rule. When a survivor collides with destructible terrain, stop their movement and archive the terrain. The survivor suffers 1 damage to a random hit location. When a monster collides with destructible terrain, archive the terrain.',
  'Devastating X': 'A gear special rule. When a devastating weapon wounds a monster, it will inflict X additional wounds.',
  'Discard': 'Put the card into the appropriate discard pile. It is no longer in play.',
  'Disdain': 'The Phoenix\'s instinct. Described on the Showdown: Phoenix story event.',
  'Disorder': 'A mental impairment. Disorders are found on disorder cards. When a disorder is gained, record its rules on the survivor record sheet and return the card to the box. Survivors can have up to 3 disorders. Additional disorders gained must replace a disorder of your choice. If a survivor would gain a disorder that they already have. nothing happens.',
  'Dodge': 'A survival action. When a survivor is hit, after rolling hit location dice but before damage, they may spend 1 survival to dodge, canceling one hit. The dodged hit becomes a failed attack roll and does not cause damage. Any additional un-dodged hits resolve normally. Dodge is the only survival action that knocked down survivors can perform. Each survivor may only Dodge once per round.',
  'Doomed': 'The indicated survivor(s) may not spend survival until this card is resolved.',
  // 'Dormenatus':'An ability. When you depart, gain 1 armor point to every hit location for each green affinity you have.',
  'Draw AI': 'The monster controller draws the top Al card of the monster\'s Al deck and plays it. If the Al deck is empty, shuffle the discard pile into it and draw the top card. If the Al deck and discard pile are empty, the monster performs its Basic Action.',
  'Duplicate Gear': 'Except for weapons, a survivor may not have multiple copies of the same gear in their gear grid. A survivor gains the benefits of a weapon\'s special rules only once, no matter how many copies they have. Additional copies of weapons still contribute affinities.',
  'Duration': 'Duration cards are drawn twice.<br/>&emsp;The first time a duration card is drawn, perform any \"when drawn face down\" actions. Then, instead of discarding it, place the duration card face up on top of the Al deck.<br/>&emsp;The next time a monster draws an Al card, it draws the duration card for a second time. Perform any \"when drawn face up\" actions, then discard the card after resolving.<br/>&emsp;Some duration cards have persistent effects while they are face up on top of the Al deck.',
  'Early Iron': 'A gear special rule. When any of your attack roll results are a 1, cancel your attack.',
  'Encourage': 'A survival action. A standing survivor may spend 1 survival at any time to encourage a knocked down survivor, letting them stand. Deaf survivors may not be encouraged. Each survivor may only Encourage once per round, and only if the settlement has the Language innovation.',
  'Endeavors': 'Each returning survivor contributes +1 endeavor to the settlement. Survivors can spend endeavors to innovate, build new settlement locations, or perform unique actions. To spend an endeavor, nominate a survivor. Reduce the settlement\'s total endeavors by 1, and follow the rules for the action the endeavor was spent on. Unless stated otherwise, the action\'s effects apply only to the nominated survivor.',
  'Endure': 'You may spend 7 survival minus your Luck to ignore severe injury before you roll a result. Your Luck is determined by the sum of your permanent luck attribute, and luck modifier tokens, and any other gear or abilities affecting your luck at the time you endire.',
  'Evasion (Attribute)': 'When a monster or survivor with evasion is the target of an attack, increase the accuracy on the attack profile by the amount of evasion the target possesses. Evasion can be a negative number, in which case it is subtracted from the attack profile\'s accuracy. Regardless of evasion, a Lantern 10 on the attack roll is always a Perfect Hit, and an attack roll result of 1 will always be unsuccessful.',
  'Event Damage': 'Some damage is incurred from events. Typically, this damage cannot be dodged or blocked. Event damage is non-lethal, and will reduce armor points and cause light and heavy injuries, but will not cause severe injuries or brain trauma.',
  'Event Revealer': 'The event revealer reveals a hunt event, reads it aloud. and follows the rules on the card, making all decisions along for that hunt event.',
  // 'Explore':'An ability. When you roll on an investigate table, add +2 to your roll result.',
  'Facing': 'A monster is facing all spaces on the board that are in front of the miniature.',
  'Failure (Reaction)': 'A monster reaction. Performed in response to unsuccessful wound attempts at certain monster hit locations.',
  // 'Fated Battle':'An ability. At the start of a showdown with the picked monster, gain +l speed token.',
  'Feather (Gear)': 'A gear keyword. This gear is substantively crafted of feathers.',
  'Field of View': 'A survivor is in a monster\'s field of view unless they are in the monster\'s blind spot or the monster\'s line of sight is blocked by terrain with the Obstacle rule.',
  'Fighting Arts': 'Powerful battle techniques found on fighting art cards. When a fighting art is gained, record its rules on the survivor record sheet and return the card to the box. Survivors can have up to 3 fighting arts. Additional fighting arts gained replace a fighting art of your choice. If a survivor would gain a fighting art they already have, nothing happens.',
  'Finesse': 'A gear keyword. This gear requires finesse to use. This keyword does not interact with the core game in any way and is one of those annoying keywords for expansions.',
  'First Strike': 'A type of monster hit location. This hit location must be resolved before any others. except Traps and Light Speed hit locations. If multiple First Strike locations are drawn, the player decides the order in which to resolve them. Traps still precede and cancel all other hits.',
  'Fist & Tooth': 'Fist & Tooth is a weapon always available to a survivor. The attack attributes for First & Tooth are listed on the gear grid. Survivors may gain levels of Fist & Tooth weapon proficiency with this weapon.<br/>&emsp;For gameplay purposes <i>(like Blood Paint)</i> Fist & Tooth weapon is considered a separate gear card placed to the left of lower left corner of gear grid.',
  'Flammable': 'A gear keyword. Fire can destroy this gear.',
  'Flow': 'Flows are hesitations between monster actions. They give the survivors an opportunity to use survival actions. They are represented by a bar with an arrow.',
  'Forward': 'The direction the miniature is facing.',
  'Fragile': 'A gear keyword. This gear is easily broken.',
  'Frail': 'A gear special rule. Frail weapons are destroyed if a survivor attempts to wound a Super-dense location with them. Archive the weapon at the end of the attack.',
  'Frenzy': 'A brain trauma result. A survivor who suffers this is Frenzied until the end of the Showdown Phase. Gain +1 strength token, +1 speed token, and 1d5 insanity. Ignore the \"slow” special rule on melee weapons. A frenzied survivor may not spend survival or use fighting arts, weapon specialization, or weapon mastery. A survivor may be Frenzied multiple times.',
  'Full Move': 'A game term that describes a monster\'s or survivor\'s maximum available movement, taking into account all movement modifier tokens.',
  'Fur (Gear)': 'A gear keyword. This gear is substantively crafted of thick fur.',
  'Gear': 'Objects that survivors may carry and wear, represented by gear cards. Survivors may only use the gear in their individual gear grids. Except for gear with the weapon keyword, no survivor may have more than one copy of a gear card in their grid.',
  'Gear Grid': 'A mat with space for 9 gear cards. Gear cards can be arranged in any configuration, but must remain right-side up. They cannot be rotated. Gear in gear grids can only be rearranged during the Settlement Phase.',
  'Gear Keyword': 'Located directly under the name of a gear card. They describe information about gear, such as weapon type, materials, use, or limiting factors. Keywords are referenced by other cards and events.',
  'Gear Special Rule': 'Located on the bottom portion of a gear card. These list gear abilities. bonuses and requirements.',
  'Grand Weapon': 'Gear with this keyword is a grand weapon. Survivors may gain levels of grand weapon proficiency with this weapon.',
  'Graze': 'The Screaming Antelope\'s instinct. Described on the Screaming Antelope\'s showdown story event.',
  'Green Life Exchange': 'An ability. In the Aftermath, gain 3 additional Hunt XP. You may not place gear with the \"other\" keyword in your grid. Gain +I permanent evasion with each Age milestone. When you retire. you cease to exist.',
  'Guard': 'The King\'s Man\'s instinct. Described on the King\'s Man\'s showdown story event.',
  'Guard (Gear)': 'A gear special rule. At the end of your attack, if you are standing and have a shield in your gear grid, spend 1 survival to move 3 spaces directly away from the monster and <b>Block 1</b> for free.',
  'Head': 'A survivor hit location. \nDamage to the head beyond the heavy injury box will prompt a roll on the Head section of the Severe Injury table.',
  'Head Hunter': 'An attack that always hits a survivor\'s head hit location. Do not roll hit location dice for this attack.',
  'Heal X': 'When a monster performs heal X, return X Al cards from the Wound Stack to the bottom of the Al deck without looking at them.',
  'Healing (Survivor)': 'When survivors heal, erase all filled injury levels and restore all lost armor points.',
  'Heart of the Sword (Storm)': 'An ability. If you gain weapon proficiency during the Aftermath, gain +3 additional ranks. You cough up a hunk of your own solidified blood and gain +1 Iron strange resource.',
  'Heavy (Gear)': 'A gear keyword. This gear has substantial weight.',
  'Heavy Injury Level': 'A heavy lined injury level box. When a survivor\'s heavy injury level is filled, they are knocked down. Once it is filled, this injury level cannot be suffered again this showdown unless it is healed.',
  'Herb': 'A gear keyword. An item primarily made of herbs.',
  'Hide (Resource)': 'A common resource keyword.',
  'Hit (Monster)': 'A hit is the result of an attack roll that meets or exceeds the accuracy for an attack using an attack profile. Hits which are dodged, blocked, or ignored are misses. Damage outside of an attack profile is not considered to be from a hit.',
  'Hit (Survivors)': 'A hit is the result of an attack roll that meets or exceeds the accuracy for an attack using a weapon.',
  'Hit Location (Monster)': 'Each monster has a unique hit location deck composed of hit location cards. There are types of hit location card: First Strike, Impervious, Super-dense. Trap, and Normal. Any hit location that has no listed type is Normal.',
  'Hit Location (Survivors)': 'Hit locations are areas of the survivors\' body that can wear armor and suffer damage. The hit locations are: Head. Arms. Body, Waist, and Legs. Hit locations may gain armor points from armor. Without armor, hit locations have 0 armor points.',
  'Hit Location Dice': 'Used to determine the survivor hit location hit by an attack.',
  // 'Homing Instinct':'An ability. Add +5 to your rolls on the Run Away story event.',
  'Hunt Board': 'The Hunt Board is used during the Hunt Phase to track a quarry monster.',
  'Hunt Board Diagram': 'Part of a monster\'s showdown story event. It indicates how to set up the hunt board for that monster.',
  'Hunt Event': 'A hunt event describes an encounter the survivors face on their journey. They can be disastrous, bizarre. or even beneficial. These appear on basic hunt event cards and monster hunt event cards.',
  'Hunt Event Cards (Basic)': 'All basic hunt event cards are identical. They direct the event revealer to roll on the hunt event table.',
  'Hunt Event Cards (Monster)': 'Monster hunt event cards are only encountered when hunting a particular monster. They describe pitfalls and wonders specific to this monster. Each huntable monster has a unique set of hunt event cards.',
  'Hunt Experience (XP)': 'Survivors gain Hunt Experience during the Aftermath of a victorious showdown. When a survivor gains Hunt XP, fill in the next unfilled Hunt XP box on their survivor record sheet. Some hunt experience levels are milestones (indicated by a heavy-lined box) that trigger the Age story event The number of milestones filled indicates which Age rules apply. When the final hunt experience box is filled, the survivor is too old to hunt. and must retire.',
  'Hunt Phase': 'The part of each session spent locating a quarry monster. When survivors determine what type and level of monster to hunt.',
  'Ignore a Hit': 'Reduce the number of hits by 1. This happens before hit locations are determined.',
  'Impairments': 'Permanent changes or injuries suffered by a survivor and recorded on the survivor record sheet. These often result from the severe injury table.',
  'Impassable': 'A terrain special rule. A survivor cannot voluntarily move into or through any spaces this terrain occupies. Impassable terrain stops all movement, including knockback. If a survivor ls knocked back into a space occupied by impassable terrain. they collide with the terrain and their movement ends just before the terrain.',
  'Impervious': 'A type of monster hit location. Impervious hit locations cannot be wounded. even with a Lantern 10 wound roll. Wound attempts will never remove Al cards. However. critical effects may still occur.',
  'In Play': 'All cards are considered in play after they have been drawn and until they resolve. Most cards are discarded after resolving. Others, such as Moods, remain in play indefinitely or until a condition is satisfied.',
  'In Range (Monster)': 'A survivor is in a monster\'s range if the number of spaces between them is less than or equal to its current movement (including modifiers). If \"in range\" is followed by a number, such as “Range (6)”, that number replaces the monster\'s movement when calculating to see if a survivor is in range.',
  'Indestructible': 'A terrain special rule. A terrain that is undestructible cannot be destroyed or removed from the showdown board for any reason until the end of the showdown.',
  'Injury Level': 'Indicates damage to a hit location. Recorded on the survivor record sheet. Most hit locations feature two levels, light and heavy, except for the Head (which only has a heavy injury level).',
  'Innovation': 'A type of advancement for a settlement, gained at the Lantern Hoard. Innovations alter the settlement and the survivors\' capabilities. Record new innovations on your settlement record sheet.',
  'Innovation Deck': 'A settlement\'s innovation deck is a persistent deck that grows as the settlement innovates.',
  'Insane': 'A survivor with 3+ insanity.',
  'Insanity': 'Protects a survivor from brain damage.',
  'Instinct': 'The action the monster undertakes if it cannot find a target to attack. Each monster has a unique instinct described on its showdown story event.',
  'Instrument': 'A gear keyword. This gear can be used to play music.',
  'Intimidate Actions': 'Intimidate actions cause brain damage. Intimidate actions are not attacks or hits (survivors cannot spend survival to dodge Intimidate actions). Monsters don\'t need to be adjacent to their targets to intimidate.',
  // 'Iron Will':'An ability. You cannot be knocked down. Reduce all knockback you suffer to knockback 1.',
  'Iridescent Hide': 'A Dragon Trait. Gain +1 armor to all hit locations for each different-colored affinity in your gear grid.',
  'Irreplaceable': 'A gear special rule. If a survivor dies, archive all irreplaceable gear in their gear grids.',
  'Item': 'A gear keyword. Gear that is neither a weapon nor armor.',
  'Jewelry': 'A gear keyword. Decorative and functional!',
  'Katana': 'Gear with this keyword is a katana weapon. survivors may not gain levels of katana weapon proficiency.',
  'Katar': 'Gear with this keyword is a katar weapon. Survivors may gain levels of katar weapon proficiency with this weapon.',
  'Knights Charge': 'A Green Armor set bonus. Spend Activation and Movement, full move in a straight line. At the end of the movement, activate <b>Griswaldo</b> and attack. If you moved more than 5 spaces, this attack gains <b>devastating 2</b>.',
  'Knockback X': 'Move the target of knockback X spaces directly away from the cause of this effect. If the survivor passes over or ends up in a space with another survivor, they are both knocked down. Survivors may not share spaces, move the knocked back survivor to an adjacent free space. If the survivor encounters a board edge, stop and end knockback. If the survivor suffers knockback on the board edge - they move along the edge.',
  'Knocked Down (Monster)': 'While a monster is knocked down, attack rolls hit on 3+ (in place of normal accuracy). Cancel all reactions, including reactions that might be beneficial to survivors. This does not cancel critical wounds effects (since they are not reactions). If the monster is knocked down during a flow, cancel any remaining actions on its card. A knocked down monster stands when it draws an Al card, a trap is played, or at the start of the next turn (monster or survivors\').',
  'Knocked Down (Survivor)': 'When a survivor is knocked down, turn the miniature on its side. Knocked down survivors always stand at the end of the next monster turn. If a survivor is knocked down in the middle of their attack, the remainder of that attack is canceled. Knocked down survivors may only spend survival to dodge (remaining knocked down), and cannot spend activation or movement.',
  'Lantern': 'A gear keyword. A lantern illuminates the darkness.',
  'Lantern 10': 'A die roll result with the lantern face up. Equivalent to a 10 for other 10-sided dice. Means guaranteed success for hit and wound rolls.',
  'Lantern Year': 'Survivors\' basic unit of time. The settlement typically advances by one lantern year as part of each Settlement Phase.',
  'Last to Wound': 'The survivor who last wounded the monster.',
  'Leap': 'A Dragon Armor set bonus.Spend Activation and Movement. You leap into the air! Place your survivor on an unoccupied space exactly 5 space away in a straight line, then activate a melee weapon and attack with +2 accuracy and +5 strength.',
  'Last to Wound': 'The survivor who last wounded the monster.',
  'Leather': 'A gear keyword. Cured hides are a crucial component of this gear.',
  // 'Legendcaller':'An ability. Once a lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use \"53\" as your result.',
  'Legs': 'A survivor hit location. \nDamage to the legs beyond the heavy injury box will prompt a roll on the Legs section of the Severe Injury table.',
  // 'Leyline Walker':'An ability. While there is no armor or accessory gear in your gear grid, gain +3 evasion.',
  'Life Exchange': 'In the Aftermath, gain 1 additional Hunt XP. You may not wear other gear. If you trigger the White Secret story event, you cease to exist. When you retire, you cease to exist.',
  'Legs Locked': 'When you gain the Death Die, you stand. While you have the Death Die, you cannot be knocked down for any reason.',
  'Light Speed': 'A type of monster hit location. This hit location must be resolved before any others. except Traps and Light Speed hit locations. If multiple First Strike locations are drawn, the player decides the order in which to resolve them. Traps still precede and cancel all other hits.',
  'Life Trait': 'A core game variant.  Instead of wounding by removing Al cards to the wound stack, wound the monster by reducing the number on its Life trait. When the number is reduced to 0, the monster is dead.',
  'Limit once per lifetime': 'This can only happen once to a survivor. If it occurs again, nothing happens, in rare cases, it is possible for a survivor to be a part of a new campaign: the survivor still has only one lifetime and anything that already happened to them (with limit, once per lifetime) cannot happen again. If a survivor somehow dies and is reborn, they gain these benefits again. Record once per lifetime effect on the survivor record sheet.',
  // 'Lucernae':'An ability. For every blue affinity you have. your ranged weapons gain this amount of range and your me lee weapons gain this amount of reach.',
  'Limb-maker (Sculptor)': 'Once per settlement phase, spend 2 endeavors to carve a prosthetic limb. Remove a survivor\'s dismembered injury and add 1 bone to the settlement\'s storage.',
  'Luck (Player Attribute)': 'Luck modifies a survivor\'s chance to cause a critical wound from a wound roll. +1 luck causes a critical wound on a wound roll result of 9 or 10, +2 luck on 8, 9, or 10, and so on. A luck modifier can be negative, making it impossible to critically wound.',
  'Luck (Monster Attribute)': 'Every positive monster luck token reduces the range of wound roll results considered critical. Normally, critical wounds occur only on Lantern 10s. Unless survivors have positive luck modifiers, a critical wound against a monster with 1 or more luck tokens is impossible. Each negative monster luck token increases the attackers\' critical wound range by 1. The rule of Lantern 10 always applies, so even if a monster\'s luck makes critically wounding impossible, a wound roll of a Lantern 10 will still cause a normal wound.',
  // 'Mad Oracle':'An ability. Once per showdown. as a monster draws an Al, name a card. If the Al card drawn is the named card. gain + 1 evasion token.',
  // 'Marrow Hunger':'An impairment. If the Murder or Skull Eater settlement events are drawn, nominate this survivor.',
  // 'Matchmaker':'An ability. When you are a returning survivor, once per lantern year you may spend an Endeavor to perform Intimacy.',
  'Materialize': 'Remove the monster from the showdown board and place it adjacent to the target. It must be placed so its base covers as many other survivors as possible. colliding with the survivors.',
  'Melee': 'A weapon gear keyword. To attack with a melee weapon, survivors must be in a space adjacent to the monster. Melee weapons with Reach can attack from further away.',
  'Menace': 'The Butcher\'s instinct. Described on the Butcher\'s showdown story event.',
  'Metal': 'A gear keyword. This gear is substantively crafted of metal.',
  'Metabolic Surrender': 'Any time during the showdown, you may roll the Death Die. Gain twice that much survival. This round, ignore the negative effect of permanent injuries, impairments, disorders, and negative attributes (including tokens). At the end of the round, you die.',
  // 'Metal Maw':'An ability. Your Fist & Tooth attacks gain Sharp (add 1d10 strength to each wound attempt).',
  'Miniature': 'The physical representation of a monster or survivor, used in the Hunt and Showdown phases.',
  // 'Monster AI Deck': 'Each monster has a unique Al deck. Its showdown story event describes how to construct a Monster Al Deck at the appropriate level.',
  'Monster AI Deck': 'Made up of Al cards used for a specific showdown. See the monster\'s story event for details of its Al deck. The Al Deck is reduced as the monster is wounded.',
  'Monster Controller': 'The player who draws the monster\'s Al card. They make any decisions and rolls to resolve a monster\'s actions for that round. Designated by the Monster controller tile. Monster controller changes at the start of each round.',
  'Monster Controller Bonus': 'When a monster controller\'s survivor is the target of an attack, this foolhardy action earns that player\'s survivor +1 insanity.',
  'Monster Controller Tile': 'Designates the monster controller. Moves clockwise to the next player or survivor at the start of each round.',
  'Monster-Impassable': 'A terrain special rule. Nor survivors, nor monsters can move through spaces occupied by monster-impassable terrain.',
  'Monster Hit Location Card': 'Represents a location on the monster\'s body. These are hit by a survivor\'s successful attack roll. Many hit location cards feature special effects or actions.',
  'Monster Hit Location Deck': 'The cards that collectively make up the locations a survivor may hit a given monster. Unique to each monster.',
  'Monster Level': 'Monster level determines the difficulty of the showdown and the monster\'s placement on the hunt board. Higher-level monsters have longer hunts and more difficult showdowns. ',
  'Monster Reference Card/ Basic Action': 'Contains a small overview of each monster\'s characteristics. They serve as a compact reminder of frequently-used monster information.',
  'Monster Resources': 'Monster resource cards are gained only from fighting that monster. Each huntable monster has a unique deck. Monster resources can be used and spent as their resource type or as their specific resource name. Some monster resources have additional rules.',
  'Monster Showdown Story Event': 'Contains relevant information for a particular monster\'s showdown and hunt, including instructions on constructing a monster Al deck, hunt and showdown board setup, the monster\'s instinct and basic attack, and information on the aftermath of the showdown.',
  'Most/Least X': 'The survivor with the most/least of the listed condition. Zero can count as most or least unless otherwise stated.',
  'Move and Attack Target Action': 'A component of most Al cards. A Move and Attack Target Action follows a Pick Target Action. Full move the monster towards the target and perform the following attack profile.',
  'Movement (Attribute)': 'The maximum amount of spaces a monster or survivor may move with in single move action. A monster or survivor with less than 1 movement may still move 1 space each move action.',
  'Move Through Target': 'When a monster instructed to move through a target, it moves towards the target but instead of stopping when adjacent, its movement continues. This will normally cause collision with the target.',
  'Mood': 'A type of monster Al card. Once mood cards are drawn, leave them in the play area instead of discarding them at the end of the monster turn. Moods can be removed by some items or through conditions listed on the card. If a monster suffers a wound when it has an empty Al deck and discard pile, but one or more active moods, it is defeated.',
  'Natural 1': 'Rolling 1 on hit and wound rolls always results in failure.',
  'Nemesis Monster': 'Nemesis monsters show up at the outskirts of the settlement. They cannot be hunted and will arrive during story events.',
  'Next Monster Turn': 'Some effects persist until the next monster turn. If it is the survivors’ turn, the effect will end on the monster turn immediately following this turn. If it is the monster\'s turn when this effect begins. it will end on the following monster turn.',
  'Next Round': 'Some effects persist until the end of the next complete round. These effects will end after the monster, then the survivors, take another turn.',
  'No Target': 'The last option on a monster\'s Pick Target list. It indicates what to do it no target is found. This is most often a monster\'s Instinct action. When a monster cannot find a target, subsequent actions on the card are not performed.',
  'Noisy': 'A gear keyword. This gear is hard to keep quiet.',
  'Non-Deaf Survivor': 'Survivors not suffering from the deaf severe head injury.',
  'Obstacle': 'A terrain rule. This terrain blocks survivor and monster field of view, interrupting ranged weapon attacks and monster targeting. To check if field of view is blocked, draw an imaginary line from the center of the miniature\'s base to the center of the intended target\'s base. If the line comes in contact with a space occupied by an obstacle, the field of view is blocked, and the target is not in field of view.',
  'Oracles eye': 'At the start of the showdown, look through the AI deck then shuffle.',
  'Organ (Resource)': 'A common resource keyword.',
  'Other': 'A gear keyword. The effects of this gear are otherworldly.',
  'Outfit': 'A gear keyword. You can wear that to complete an armor set that shares material keywords.',
  'Overwhelming Darkness': 'A space on the Hunt Board. The first time each hunt the survivors move into the Overwhelming Darkness space, they trigger the overwhelming Darkness story event. The survivors cannot skip Overwhelming Darkness. If they move through the space, instead stop all movement and resolve Overwhelming Darkness before any other events or effects. Then, resolve other events or effects on this space. If, for some reason, the survivors move into or through Overwhelming Darkness more than once in a single Hunt Phase, treat it as a blank space. If the monster is on the Overwhelming Darkness Space when the survivors move into it, skip its event and start the showdown immediately.',
  'Parry': 'When attempting to wound a Parry hit locations all attempts fall unless the wound roll result is critical. This Failure triggers any Failure reactions as normal.',
  'Paired': 'A gear special rule. Paired weapons are two identical weapons that can be used as one. You may add the speed of the second weapon when attacking with the first. These weapons must have the same name, and both must be in your gear grid.',
  // 'Peerless':'An ability. When you gain insanity, you may gain an equal amount of survival.',
  'Perishable':'A resource keyword. This resource cannot be added to settlement storage. At the end of the settlement phase, it is lost. Archive it. In order for perishable resources to last more than one lantern year, they must be carried out of the settlement in a Satchel!',
  'Perfect Hit': 'An attack dice roll result of a Lantern 10. This always results in a hit. When there are multiple Perfect Hits in a single attack, trigger any rules applying to Perfect Hits that many times.',
  'Permanent Injury': 'An injury to a survivor that does not heal with time. Its effects always apply to that survivor unless canceled by another effect.',
  'Persistent Injury': 'A special injury found on some hit location cards. When a monster suffers a critical wound on a hit location with a persistent injury, leave the card in play instead of discarding it. Some persistent injuries modify a monster\'s behavior, while others affect specific Al cards.',
  'Persistent Injury Actions': 'Found on some Al cards. Persistent injury actions are conditional actions that replace the normal rules of an Al card. They are only performed when the monster draws an Al card with a persistent injury action that matches a persistent injury in play. If a persistent injury action is performed, ignore other actions on the card.',
  'Pickaxe': 'A gear keyword. In certain situation, this can be used to mine minerals.',
  'Pick Target': 'A component of most Al cards. A Pick Target list has a series of conditions. The monster controller checks to see if each targeting condition is met, starting from the first and stopping when one is met. Sometimes targets are determined by an area or zone (such as adjacent survivors or all survivors in a zone). Some Al cards pick more than one target.',
  'Place': 'Change the location of a miniature from one space on the showdown board to another. This does not count as movement.',
  // 'Possessed':'An ability. The survivor cannot use weapon specialization, weapon mastery, or fighting arts.',
  'Pounce': 'A gear special rule. Spend Activation and Movement to move 3 spaces forward in a straight line and activate a melee weapon. This attack gains +1 strength.',
  // 'Prepared':'An ability. When rolling to determine a straggler, add your hunt experience to your roll result.',
  'Presage (Witch)': 'Each time you attack, before drawing hit locations, loudly say a name. You lightly bite the eye in your cheek to see what it sees, if you draw any hit locations with that name, gain +3 insanity and +10 strength when attempting to would them.',
  'Principle': 'Principles are your settlement\'s guiding philosophies. When a principle\'s story event triggers, your settlement must make a choice. Record the chosen principle on the settlement record sheet and add that principle\'s card to the settlement play area.',
  'Priority Target': 'When a survivor gains the priority target token, it signifies that the survivor has captured the monster\'s attention. Only 1 survivor may have the priority target token at a time. Whenever a monster picks a target, the survivor with the priority target token will always be the target of an Al card. The priority target token is removed only when: another survivor gains the priority target token, an effect causes the priority target token to be removed, or at the end of the next monster turn.',
  'Prismatic': 'Your complete affinities and incomplete affinity halves count as all colors.',
  'Pristine': 'When you suffer <b>dismembered</b> severe injury, ignore it and gain 1 bleeding token instead.',
  'Provoke': 'A gear special rule. When you wound with this weapon, gain the priority target token.',
  'Proxy cards': 'There are 8 proxy cards. These can be used to replace lost cards or create game variants.',
  'Pulse Discoveries': 'A series of abilities that can be unlocked via Lantern Research. A Pulse Discovery can be performed by a surivor with the Death Die.',
  'Psychovore (Reaper)': 'Once per showdown, you may eat an adjacent survivor\'s disorder. If you do, remove the disorder. They gain 1 bleeding token and you gain +1 permanent strength. At the end of the showdown, if you haven\'t eatern a disorder, you die.',
  'Puzzle Affinity': 'A gear special rule. Puzzle affinity bonuses can only be gained if the affinities are completed using the affinities on that specific card (indicated by puzzle pieces instead of boxes).',
  'Quarry': 'The monster that the survivors have elected to hunt',
  'Random Hit Location (Survivor)': 'Determine using the included hit location dice.',
  'Random Hunt Event': 'Roll 1d100 and apply the hunt event corresponding to this number on the Hunt Event table.',
  'Random Survivor': 'The monster controller or event revealer typically determines a survivor by chance, using an equal probability of all possible outcomes.',
  'Range (Gear)': 'A gear special rule. Survivors this many or fewer spaces away from a monster may attack with this weapon. Ranged weapons cannot be used if field of view to the monster is blocked (by terrain with the Obstacle rule).',
  'Ranged': 'A gear keyword. A ranged weapon, like a bow or dart, allows survivors to attack from a distance.',
  'Ranged Attack Target': 'When monster is instructed to Ranged Attack Target it attacks with unlimited range. It does not need to be adjacent in order to hit.',
  'Rawhide': 'A gear keyword. This gear is crafted of uncured hides.',
  'Reach': 'A gear special rule. Reach weapons are long enough to attack monsters when the survivor is not adjacent. Reach specifies the maximum number of spaces away that a survivor can attack with this weapon.',
  'Reaction': 'A hit location rule. The 3 types of reactions are Wound, Failure, and Reflex: each specifies the conditions for a reaction to occur. Reactions occur after rolling to wound the hit location they are found on and before resolving the next hit location.',
  'Record And Archive': 'An instruction on certain cards. such as disorders and fighting arts. Make a note of the listed effects and return the card to the game box.',
  'Red Life Exchange': 'An ability. In the Aftermath, gain 3 additional Hunt XP. You may not place gear with the \"other\" keyword in your grid. Gain +l permanent strength with each Age milestone. When you retire, you cease to exist.',
  'Reflex (Reaction)': 'A type of monster reaction. This reaction occurs regardless of whether a wound attempt succeeds or fails.',
  'Remove From The Showdown Board (Survivor)': 'Remove the survivor miniature from the showdown board. Place it on its survivor status card, if it has one. A survivor removed from the showdown board has an Act, but may not spend movement, activation or perform survival actions. Unless stated otherwise, they do not affect and are not affected by anything on the showdown board. When the showdown ends, any survivors who are removed from the board (but not dead) continue to the Aftermath as normal.',
  'Resolved': 'A card is resolved when there are no more instructions to follow on it. This may be due to performing everyed action, or as a result of specific instructions on the card.',
  'Resources': 'Resources cards are gained from defeating monsters and events. They are spent to develop the settlement and craft gear. There are 4 kinds: Basic, Monster, Strange, and Vermin.',
  'Resource Types': 'In addition to the specific name listed, all resource cards have one or more types that the card may be used as. Common examples include Bone, Hide, Organ, and Scrap.',
  'Retch': 'Some of the Gorm\'s AI and Hit Location cards direct it to perform Retch. This action causes damage to all survivors in the indicated zone. Terrain, survivors, or other effects on the board will not modify this zone.',
  'Reveal': 'Turn a card face up and examine it (Do not play it).',
  'Retired': 'When the final Hunt XP box is filled, the survivor retires. Some disorders and severe injuries also force retirement. Retired survivors cannot depart, but still contribute to the total population of the settlement, and may participate in settlement events and endeavors.',
  'Returning Survivors': 'All survivors that endured the previous showdown are returning survivors.',
  'Rewards': 'Rewards are gained by defeating monsters. They are listed on the monster\'s showdown story event. Gain rewards as a group, once per victorious showdown (unless stated otherwise).',
  'Ripple Pattern': 'A gear special rule. When you are attacked, roll 1d10. On a 10+, ignore 1 hit.',
  'Rooted to All (Absolute)': 'If you are standing at the start of your act, reveal the top 2 cards of the AI deck and put them back in any order.',
  'Round (Showdown)': 'The showdown proceeds in rounds, consisting of the monster\'s turn followed by the survivors\' turn. Rounds will continue until the monster is dead or all the survivors are dead.',
  'Run Away': 'Once a settlement has innovated Pictographs, survivors may abandon a Hunt or Showdown Phase at any time. Follow the instructions on the Run Away story event.',
  'Savage': 'A gear special rule. After the first critical wound in an attack, savage weapons cause 1 additional wound. This rule does not trigger on Impervious hit locations.',
  'Scythe': 'Gear with this keyword is a scythe weapon. Survivors may gain levels of scythe weapon proficiency with this weapon.',
  'Secret Fighting Arts': 'Secret fighting arts are fighting arts that cannot be gained normally. Each secret fighting art has a corresponding card that describes the rules for using it. These count toward your fighting art maximum of 3.',
  'Selfish': 'A gear special rule. A gear with this rule may not be in a same gear grid with any gear with the \"other\" keyword.',
  'Sentient': 'A gear special rule. A survivor must be insane to activate this gear.',
  'Session': 'A typical session is comprised of three phases: Hunt Phase, Showdown Phase, and Settlement Phase. Some events may make survivors skip one or more of these phases. For example, Nemesis Encounters have no Hunt Phase.',
  'Set': 'A gear keyword listed on some armor cards. This means this armor is part of an armor set.',
  'Settlement': 'The unique collection of locations, innovations, principles, gear, resources, and survivors that represent the survivors\' home. Survivors are at the settlement during the Settlement Phase.',
  'Settlement Board': 'The settlement board is located on the reverse side of the Hunt Board. The spaces on the board correspond to steps in the Settlement Phase to guide players along.',
  'Settlement Event': 'An event occurring during the Settlement Phase.',
  'Settlement Phase': 'During the Settlement Phase. survivors experience settlement and story events, spend endeavors, craft gear, and determine which survivors depart on the next hunt. This is the only phase where survivors may change or rearrange their gear grids.',
  'Settlement Record Sheet': 'Helps the players keep track of the development of their settlement.',
  'Severe Injury': 'When survivors\' armor points and injury levels are exhausted, they may accumulate temporary or permanent severe injuries from the severe injury table.<br\>&emsp;When a survivor suffers permanent injuries, note the name and rules on your record sheet and adjust their attributes as necessary. Some injuries fill the Skip Next Hunt on survivor record sheet.<br\>&emsp;Otherwise, severe injuries last until the end of the showdown and are marked by attribute tokens.<br\>&emsp;Some permanent injuries have limits to how many times they can be recorded. If a survivor suffers a severe injury they have already recorded the maximum number of times, they instead gain 1 bleeding token.',
  'Severe Injury Tables': 'Contains sections of possible severe Injuries to hit locations. Each hit that causes a severe injury prompts a roll on that location\'s severe injury table.',
  'Sharp': 'A gear special rule. Add 1d10 strength to each wound attempt using this gear. This 1d10 is not a wound roll and cannot cause critical wounds.',
  'Shield': 'Gear with this keyword is a shield weapon. Survivors may gain levels of shield weapon proficiency with this weapon.',
  'Showdown Board': 'Used to represent the area where the survivors face the monster in battle. Specific rules for setting up the showdown board are found on each monster\'s showdown story event.',
  'Showdown Board Edge': 'Generally, monsters or survivors cannot move off the edge of the showdown board. Any knockback or full move effects that would bring a miniature past a board edge stops at the edge instead.',
  'Showdown Phase': 'The part of a session where survivors face off against a monster. See individual monster showdown pages for instructions on how to start and end the Showdown Phase.',
  'Showdown Setup': 'A component of each monster\'s showdown story event. Contains instructions for setting up terrain tiles and monster and survivor miniatures on the showdown board before a battle.',
  'Sickle': 'A gear keyword. In certain situations, this can be used to harvest herbs.',
  'Skewer': 'A Screaming Armor set bonus. After you <b>slam</b> spend activation to move 1 space and activate a melee weapon with +2 strength, if you wound with a spear, apply that wound roll result to the next selected hit location this attack.',
  'Skip Next Hunt': 'Fill in the Skip Next Hunt box on the survivor\'s record sheet. The survivor may not be selected as a departing survivor. After departing survivors are chosen, erase all filled Skip Next Hunt boxes on all survivor record sheets.',
  'Slam': 'A gear special rule. Spend Movement and full move forward in a straight line. If you move 4+ spaces and stop adjacent to a monster, it suffers knockback 1 and -1 Toughness until the end of the round.',
  'Slow': 'A gear special rule. Slow weapons always have an attack speed of l. Do not add speed modifiers.',
  'Sniff': 'The White Lion\'s instinct Described on the White Lion\'s showdown story event.',
  'Shadow Walk': 'When you spend movement, you may move through spaces survivors occupy without causing <b>collision</b>.',
  'Soluble': 'A gear keyword. Able to be dissolved in liquid.',
  // 'Sour Death':'An ability. When you are knocked down. you may encourage yourself. If you do. gain + 1 strength token.',
  'Solar Track': 'The Solar Track is used during the showdown with the Sunstalker. It interacts with the monster\'s trait cards, tracks the current solar energy, and determines the direction shadows are cast.<br/><br/>Set up the Solar Track alongside the showdown board. The showdown will begin with the light at the survivors backs.',
  'Spear': 'Gear with this keyword is a spear weapon. Survivors may gain levels of spear weapon proficiency with this weapon.',
  'Special Showdown': 'Special Showdowns interrupt the Settlement Phase. After they conclude (regardless of victory or defeat), the Settlement Phase continues where it left off. Do not generate endeavors or trigger new story events. Each Special Showdown\'s details are listed on the story event or innovation that triggered it. After showdown heal all light and heavy injuries from the remaining survivors and remove all tokens.',
  'Speed (Attack Profile/Weapon)': 'The number of attack rolls (number of dice rolled). Usually determined by a monster Al card\'s attack profile or speed on a survivor\'s weapon.',
  'Speed (Attribute)': 'Speed is added to a survivor\'s weapon speed or a monster\'s attack profile speed to determine the number of attack rolls. If speed is negative, subtract it from the number of dice rolled for an attack. A monster or survivor attack with less than one speed still has one attack roll. weapons with the Slow keyword cannot benefit from positive speed bonuses.',
  // 'Stalwart':'An ability. Ignore knocked down effects of brain trauma, disorders. and intimidation actions.',
  'Starvation Space': 'The last space of the hunt board. If survivors move into this space (including starting a showdown) apply the rules listed on the hunt board.',
  'Stinky': 'A gear keyword. This item has a strong odor.',
  // 'Story Of The Forsaker':'An ability. You cannot be knocked down during a showdown with a nemesis monster.',
  // 'Story Of The Goblin':'An ability. Once per showdown, you may roll 1d10. On a 3+, gain the priority target token and the monster gains +1 damage token.',
  // 'Story Of The Young Hero':'An ability. At the start of each of your acts, you may choose to gain 1 survival and 2 bleeding tokens.',
  'Story Event': 'An event which impacts the settlement/survivors. Common triggers include: the settlement timeline, survivor milestones in Hunt XP/courage/understanding, monster cards, settlement events. When a Story Event appears, trigger the story event by turning to the appropriate page in the rulebook and following its instructions.',
  'Strange Resources': 'Resource cards only gained in specific circumstances. Strange monster resources are not shuffled into monster resource decks.',
  'Strength (Attribute)': 'Strength is added to the result of a wound attempt. If strength is a negative number, subtract it from the wound attempt result',
  'Strength (Weapon)': 'The number a weapon adds to wound attempt.',
  'Super-Dense': 'A type of hit location. This hit location is unusually hard. If a survivor attempts to wound one of these locations with a frail weapon, it is destroyed and archived at the end of the attack.',
  'Surge': 'A type of survival action. When opportunity permits, a survivor may spend 1 survival to surge. Gain +1 Activation, which must be spent immediately. This allows them to activate a weapon, interact with terrain, use gear, and anything else spending an activation allows them to do. Resolve the results of the surge (including any monster reactions) before resuming the tum. Each survivor may only surge once per round, and only if the settlement has the Inner Lantern Innovation.',
  'Survival': 'Survival is the desperate desire to cling to life. Survival points are gained and lost throughout the campaign. They are spent to perform extraordinary feats and change your fate. Update the survival box on your character record sheet as it is gained and lost.',
  'Survival Action': 'Survival actions are the most common uses for survival points. There are 4: dodge, encourage, dash, and surge.',
  'Survival Limit': 'Survival limit is the maximum amount of survival a survivor may have. Survival limit is recorded on the settlement record sheet. Innovations and events raise the settlement\'s survival limit. At the start of the campaign. the survival limit is 1. Survival gained over the survival limit is lost.',
  'Survival Opportunity': 'The only times that survivors may dash or surge. Survival opportunities exist at the following times: during flows on monster Al cards, between actions on the survivors\' turn, before performing reactions, after critical wound effects, or when a monster is knocked down.',
  'Survivor Record Sheet': 'Represents the permanent status of a survivor. Some sections include: attributes, Hunt XP, weapon proficiency, and permanent changes.',
  'Survivor Status Card': 'Special (S) Al cards that track conditions for an individual survivor rather than the monster. When a survivor gains a survivor status card, place it next to their gear grid. The card\'s effects apply only to them. Some status cards change and need to be tracked. Some grant survivors unique actions. If a monster\'s story event has a Survivor Status card in its setup, all survivors gain the card at the start of the showdown.',
  // 'Sweet Battle':'An ability. You may surge without spending survival. If you do, the Activation must be used to activate a weapon.',
  'Sword': 'Gear with this keyword is a sword weapon. Survivors may gain levels of sword weapon proficiency with this weapon.',
  'Tactics Cards': 'Tactics provide survivors with new ways to fight, using what they\'ve learned from fightning knights. Tactics Cards are drawn at the start of showdown and places in survivors play area. At the end of showdown, archive all drawn Tactics Cards.',
  'Target': 'The recipient of an attack or effect. Some attacks or effects may impact survivors other than the target.',
  'Terrain Cards': 'Represent terrain that can be encountered during the Showdown Phase and contain rules for how monsters and survivors interact with them. Terrain cards place one or more terrain tiles on the showdown board.',
  'Terrain Tile': 'Terrain tiles are placed on the Showdown Board to represent physical features. The type and amount of terrain added to the Showdown Board is determined by the terrain cards specified in the setup section of each monster\'s showdown story event.',
  'Threat': 'A threat is any survivor that is not knocked down or using special gear, terrain, or abilities to prevent being considered a threat.',
  'Thrown': 'Gear with this keyword is a thrown weapon. Survivors may not gain levels of thrown weapon proficiency.',
  // 'Thundercaller':'An ability. Once per lifetime, on a hunt board space after Overwhelming Darkness, in place of rolling a random hunt event, use \"100\" as your result.',
  'Timeline': 'Tracks the number of lantern years since the establishment of your settlement on the Settlement Record Sheet. Trigger story and settlement events as the timeline advances.',
  // 'Tinker':'An ability. When you are a returning survivor, gain + 1 Endeavor.',
  'Tool': 'A gear keyword. Some tools trigger story events or grant bonuses.',
  'Toughness': 'Toughness is the number a wound attempt total must meet or exceed to successfully wound a monster.',
  'Toward (Movement)': 'A direction used in reference to another point on the showdown board, such as a monster, survivor, terrain tile, or board edge.',
  'Trait': 'A type of monster Al card. Describes permanent changes to the characteristics or behaviors of the monster. Trait cards are not discarded at the end of the monster turn.',
  'Trap': 'A type of monster hit location. A trap cancels all the attacker\'s hits, ends their attack, and causes the monster to stand, in addition to the actions listed on the card. After the Trap\'s actions are resolved, shuffle the entire hit location deck.',
  'Trigger': 'Part of a monster\'s attack profile. Indicates that an Attack Effect is part of this attack.',
  'Turn (Monster)': 'The first part of a round, when the monster acts. The monster controller should apply any \"at start of turn\" effects, draw and play Al cards, then apply any \"at end of turn\" effects.',
  'Turn (Survivors)': 'The second part of a round is the survivors turn. During the survivors\' turn, survivors act one at a time, each completing their entire act before another survivor may take their act. Survivors may choose to act in any order.',
  'Twelve Fingers (Gambler)': 'You cannot carry two-handed gear. On a Perfect Hit, your right arm pulses. Gain +5 insanity and +1 luck for the attack. However, for each natural 1 rolled when attempting to hit, your your left hand shakes. Suffer 5 brain damage and -1 luck for the attack.',
  'Two-handed': 'A gear keyword. This weapon requires two hands to use. Some gear and rules do not work with two-handed weapons. Survivor can use two-handed and gain the benefits of a shield at the same time.',
  'Twilight Sword': 'A weapon of great strength. Survivor holding can select it as a weapon profiency.',
  'Undeathable': 'A gear special rule. If the survivor dies, roll 1d10.  On a result of 6+, the survivor lives. If this roll occurs from the survivor having a lethal amount of bleeding tokens, the survivor will not die until they gain another bleeding token.',
  'Understanding': 'A survivor attribute listed on the survivor record sheet. Represents a survivor\'s insight about the world. Reaching an understanding level of 3 will trigger the Insight Story Event, while reaching a level of 9 will trigger the White Secret Story Event.',
  'Uninhibited Rage': 'Add +1d10 strength to a wound attempt. After a wound attempt is rolled you may roll the Death Die and add the result to the strength of your wound attempt.',
  'Unique': 'A gearlement may only have one copy of this gear card at a time.',
  'Unshakable': 'A gear special rule. When this survivor draws a trap card, roll 1d10. On a result of 6+, ignore the trap. Discard it and shuffle the hit location deck.',
  'Unstoppable': 'A gear special rule. Replace all wound rolls with a 1d10 roll. On 1-5, fail to wound, on 6+ wound. You cannot cause a critical wound while using this rule.',
  'Unwieldy': 'A gear special rule. If any attack dice roll results are 1, the weapon causes 1 random damage to the survivor for each 1 rolled. Continue the attack as normal.',
  'Vermin Resources': 'Vermin resources can be found in Bug Patches during showdowns, or as a result of events. Vermin cards describe how each vermin can be used. Vermin can also be used in the cooking Story Event.',
  'Victory': 'Part of a monster\'s Aftermath. Use this result if the monster is defeated. Add that monster to the Defeated Monsters section of the settlement record sheet. If a Nemesis monster was defeated, update the Nemesis monster section as well.',
  'Vital': 'If the settlement has any gear with this rule, the survivors cannot depart without this gear. If the survivor holding Vital gear perishes before the showdown, another survivor must pick up the Vital gear (discarding gear to make room in their grid if needed).',
  'Waist': 'A survivor hit location. \nDamage to the waist beyond the heavy injury level results in a roll on the Waist section of the severe Injury table.',
  'Way of the Rust (Rust)': 'Your bleeding tokens are also +1 evasion tokens.',
  'Weapon': 'A type of gear card. weapon types in the core game include axe, bow, club, dagger, fist & tooth, grand, katar, shield, spear, sword, and whip.',
  'Weapon Mastery': 'Achieved when a survivor has eight or more levels of weapon proficiency. When any survivor attains a weapon mastery, add that mastery to the settlement as an innovation. All survivors automatically gain the Specialist bonus for that weapon type in addition to any weapon proficiencies they already have.',
  'Weapon Proficiency': 'A survivor attribute listed on the survivor record sheet. Weapon proficiency represents a survivor\'s skill with a weapon type. May be earned for the following weapon types: axe, bow, club, dagger, fist & tooth, grand, katar, scythe, shield, spear, sword, twilight sword and whip.<br\>&emsp;After reaching the first Hunt XP milestone, survivors can declare a weapon type to gain weapon proficiency in. A survivor must first declare a weapon type before departing on a hunt (write it in the space on the record sheet) and then wound a monster at least once during a showdown with that weapon type in order to gain levels of weapon proficiency.<br\>&emsp;If survivor changes weapon type - all accrued levels of weapon proficiency, including weapon specialisation, are lost.',
  'Weapon Specialization': 'Achieved when a survivor has three or more levels of weapon proficiency. Survivors develop new skills which often empower that weapon.',
  'Whip': 'Gear with this keyword is a whip weapon. Survivors may gain levels of whip weapon proficiency with this weapon.',
  'Wound': 'When a survivor successfully wounds a monster, remove the top card from its Al Deck and place it in the Wound Stack. If the Al deck is empty, shuffle the Al discard to create a new deck first.',
  'Wound (Reaction)': 'Listed on some monster hit location cards. An action that a monster performs in response to a successful wound attempt at certain hit locations.',
  'Wound Attempt': 'The total power of a survivor\'s hit. Add the wound roll result (1d10) to the attacking weapon\'s strength, along with any other strength modifiers. If a wound attempt total meets or exceeds the monster\'s toughness, then the hit location is wounded.',
  'Wound Roll': 'Represents the variable ferocity of a survivor\'s hit. Roll 1d10 and add the result to the wound attempt. The result of this d10 (adding luck modifiers) determines whether or not a critical wound is caused on locations with critical wound effects.',
  'Zone of (X) / (X) Zone': 'The indicated area for actions and reactions onon cards.',
}

const fightning_arts_text = {
  'Abyssal Sadist': {
    'expansion': 'manhunter',
  },
  'Acrobatics': {
    'expansion': 'dragon king',
  },
  'Ambidextrous': {},
  'Backstabber': {
    'expansion': 'echoes of death',
    'type': 'strain',
  },
  'Berserker': {},
  'Blotted Out': {
    'expansion': 'slenderman',
  },
  'Burning Ambition': {
    'expansion': 'sunstalker',
  },
  'Burning Focus': {
    'expansion': 'lion god',
  },
  'Carapace of Will': {
    'expansion': 'dung beetle knight',
  },
  'Champions Rite': {
    'expansion': 'dragon king',
    'type': 'dragon trait',
  },
  'Clutch Fighter': {},
  'Combo Master': {},
  'Crazed': {},
  'Crossarm Block': {},
  'Defender': {
    'expansion': 'sunstalker',
  },
  'Double Dash': {},
  'Ethereal Pact': {
    'expansion': 'echoes of death',
    'type': 'strain',
  },
  'Extra Sense': {},
  'Fated Blow': {
    'expansion': 'dragon king',
    'type': 'dragon trait',
  },
  'Giants Blood': {
    'expansion': 'echoes of death',
    'type': 'strain',
  },
  'Harvestman': {
    'expansion': 'spidicules'
  },
  'Headliner': {
    'expansion': 'lion knight',
  },
  'Heroic': {
    'expansion': 'lion god',
  },
  'Infinite Lives': {
    'expansion': 'echoes of death',
    'type': 'strain',
  },
  'Last Man Standing': {},
  'Leader': {},
  'Lure Epilepsy': {
    'expansion': 'gorm',
  },
  'Mammoth Hunting': {
    'expansion': 'gorm',
  },
  'Mighty Strike': {},
  'Monster Claw Style': {},
  'Orator of Death': {},
  'Otherworldly Luck': {
    'expansion': 'flower knight'
  },
  'Phantom Friend': {
    'expansion': 'slenderman',
  },
  'Propulsion Drive': {
    'expansion': 'dung beetle knight',
  },
  'Purpose': {
    'expansion': 'sunstalker',
  },
  'Rhythm Chaser': {},
  'Ruthless': {
    'expansion': 'lion god',
  },
  'Seasoned Hunter': {
    'expansion': 'manhunter',
  },
  'Sneak Attack': {
    'expansion': 'sunstalker',
  },
  'Strategist': {},
  'Tenacious': {
    'expansion': 'lion knight',
  },
  'Thrill Seeker': {},
  'Timeless Eye': {},
  'Tough': {},
  'Trailblazer': {
    'expansion': 'manhunter',
  },
  'Transcended Masochist': {
    'expansion': 'manhunter',
  },
  'Trick Attack': {
    'expansion': 'sunstalker',
  },
  'Tumble': {},
  'Unbreakable': {
    'expansion': 'dragon king',
    'type': 'dragon trait',
  },
  'Unconscious Fighter': {},
  'Unrelenting': {
    'expansion': 'lion god',
  },
  'Vengeance': {
    'expansion': 'spidicules'
  },
  'Wardrobe Expert': {
    'expansion': 'lion knight',
  },
}

const abilities = {
  'Acid Palms': {},
  'Ageless': {},
  'Analyse': {},
  'Bitter Frenzy': {},
  'Burnt Nerves': {},
  'Caratosis': {},
  'Crystal Skin': {},
  'Dead Inside': {},
  'Devoted Union': {},
  'Dormenatus': {},
  'Endless Babble': {},
  'Enduring Legacy': {},
  'Explore': {},
  'Fated Battle': {},
  'Homing Instinct': {},
  'Iron Will': {},
  'Legendcaller': {},
  'Leyline Walker': {},
  'Life Exchange': {},
  'Lucerna': {},
  'Mad Oracle': {},
  'Marrow Hunger': {},
  'Matchmaker': {},
  'Metal Maw': {},
  'Nightmare Blood': {},
  'Nightmare Membrane': {},
  'Nightmare Spurs': {},
  'Partner': {},
  'Peerless': {},
  'Possessed': {},
  'Prepared': {},
  'Rivals Scar': {},
  'Sour Death': {},
  'Stalwart': {},
  'Story of the Forsaker': {},
  'Story of the Goblin': {},
  'Story of the Young Hero': {},
  'Super Hair': {},
  'Sweet Battle': {},
  'Thundercaller': {},
  'Tinker': {},
}

const disorders_text = {
  'Absent Seizures': {
    'expansion': 'gorm',
  },
  'Aichmophobia': {
    'expansion': 'dragon king',
  },
  'Anxiety': {},
  'Apathetic': {},
  'Arithmophilia': {
    'expansion': 'dragon king',
  },
  'Binge Eating': {},
  'Controlophobia': {
    'expansion': 'spidicules'
  },
  'Coprolalia': {},
  'Delicious': {
    'expansion': 'lion god',
  },
  'Destined': {
    'expansion': 'dragon king',
    'type': 'dragon trait',
  },
  'Emotionless': {
    'expansion': 'sunstalker',
  },
  'Enfeebled': {
    'expansion': 'lion god',
  },
  'Fear of the Dark': {},
  'Flower Addiction': {
    'expansion': 'flower knight',
  },
  'Ghostly Beauty': {
    'expansion': 'flower knight',
  },
  'Hemophobia': {},
  'Hoarder': {},
  'Honorable': {},
  'Hyperactive': {},
  'Immortal': {},
  'Indecision': {},
  'Megalophobia': {
    'expansion': 'gorm',
  },
  'Monster Panic': {},
  'Motion Sickness': {
    'expansion': 'dung beetle knight',
  },
  'Narcissistic': {
    'expansion': 'flower knight'
  },
  'Overprotective': {
    'expansion': 'sunstalker',
  },
  'Performance Anxiety': {
    'expansion': 'lion knight',
  },
  'Post-Traumatic Stress': {},
  'Prey': {},
  'Prima Donna': {
    'expansion': 'lion knight',
  },
  'Quixotic': {},
  'Rageholic': {},
  'Revenge': {
    'expansion': 'spidicules'
  },
  'Secretive': {},
  'Seizures': {},
  'Shallow Lungs': {
    'expansion': 'lion knight',
  },
  'Spiral Ganglia': {
    'expansion': 'slenderman',
  },
  'Squeamish': {},
  'Stage Fright': {
    'expansion': 'lion knight',
  },
  'Stark Raving': {
    'expansion': 'lion god',
  },
  'Sun-Drunk': {
    'expansion': 'sunstalker',
  },
  'Superstitious': {
    'expansion': 'dragon king',
  },
  // 'Sworn Enemy': {},
  'Tiny Arachnophobia': {
    'expansion': 'spidicules'
  },
  'Traumatized': {},
  'Tunnel Vision': {
    'expansion': 'lion god',
  },
  'Unlucky': {
    'expansion': 'lion knight',
  },
  'Vermin Obsession': {
    'expansion': 'dung beetle knight',
  },
  'Vestiphobia': {},
  'Weak Spot': {},
}

const secret_fightning_arts_text = {
  'Acanthus Doctor': {
    'expansion': 'flower knight'
  },
  'Ageless Apprentice': {
    'expansion': 'lion knight',
  },
  'Altered Destiny': {
    'expansion': 'dragon king',
  },
  'Beast of Caratosis': {},
  'Beetle Strength': {
    'expansion': 'dung beetle knight',
  },
  'Black Guard Style': {
    'whitebox': 'percival',
  },
  'Bone Whisperer': {},
  'Clarity of Darkness': {
    'expansion': 'slenderman',
  },
  'Courtly Screenwriter': {
    'expansion': 'lion knight',
  },
  'Death Touch': {
    'expansion': 'spidicules',
  },
  'Eternal Will': {
    'expansion': 'manhunter',
  },
  'Fencing': {
    'expansion': 'flower knight'
  },
  'Frozen Star': {
    'expansion': 'dragon king',
    'type': 'dragon trait',
  },
  'Grace of Dormentaus': {},
  'Hellfire': {
    'expansion': 'sunstalker',
  },
  'Immovable Object': {
    'expansion': 'gorm',
  },
  'King of a Thousand Battles': {},
  'Kings Step': {},
  'Legendary Lungs': {},
  'Lucernaes Lantern': {},
  'Necromancer': {
    'expansion': 'lion god',
  },
  'Red Fist': {},
  'Scholar of Death': {},
  'Silk Surgeon': {
    'expansion': 'spidicules'
  },
  'Sun Eater': {
    'expansion': 'sunstalker',
  },
  'Suppressed Shadow': {
    'expansion': 'sunstalker',
  },
  'Swordsmans Promise': {},
  'Synchronised Strike': {},
  'True Blade': {
    'expansion': 'flower knight'
  },
  'Zero Prescence': {},
}

const survivor_statuses = {
  'Battle Tempo': {},
  'Black Pond': {},
  'Darkness Awareness': {},
  'Dreaded Decade': {},
  'Dung Milk': {},
  'Flower Funnel': {},
  'Gobbled Up': {},
  'Horripilation': {},
  'Impaled': {},
  'Infectious Lunacy': {},
  'Madness Inversion': {},
  'Momentum': {},
  'Pod Imprisonment': {},
  'Polarized Aura': {},
  'Retinue': {},
  'Secondary Forge': {},
  'Smell World': {},
  'Starward': {},
  'Steadfast': {},
  'Stolen Dreams': {},
}

const settlement_events = {
  'Acid Storm': {},
  'Clinging Mist': {},
  'Cracks in the Ground': {},
  'Dark Dentist': {},
  'Dark Trader': {},
  'Elder Council': {},
  'First Day': {},
  'Glossolalia': {},
  'Gorm Climate': {
    'expansion': 'gorm',
  },
  'Haunted': {},
  'Heat Wave': {},
  'Hunt Reenactment': {},
  'Lights in the Sky': {},
  'Murder': {},
  'Nickname': {},
  'Open Maw': {},
  'Phantom': {
    'expansion': 'slenderman',
  },
  'Plague': {},
  'Rivalry': {},
  'Season of the Spiderling': {
    'expansion': 'spidicules',
  },
  'Silk Storm': {
    'expansion': 'spidicules',
  },
  'Skull Eater': {},
  'Slender Blight': {
    'expansion': 'slenderman',
  },
  'Stranger in the Dark': {},
  'Triathlon of Death': {},
  'Weird Dream': {},
}

const settlement_locations = {
  'Barber Surgeon': {
    'gear': {
      '1': ['First Aid Kit', 'Brain Mint', 'Elder Earrings', 'Musk Bomb'],
      '2': ['Scavenger Kit', 'Bug Trap', 'Speed Powder', 'Almanac'],
      '3': []},
    'action': true,
  },
  'Blacksmith': {
    'gear': {
      '1': ['Lantern Helm', 'Lantern Gauntlets', 'Lantern Cuirass', 'Lantern Mail', 'Lantern Greaves'],
      '2': ['Lantern Sword', 'Lantern Dagger', 'Lantern Glaive', 'Scrap Shield'],
      '3': ['Beacon Shield', 'Ring Whip', 'Dragon Slayer', 'Perfect Slayer']},
    'armor_set': 'Lantern Armor',
  },
  'Bone Smith': {
    'gear': {
      '1': ['Bone Dagger', 'Bone Blade', 'Bone Axe', 'Bone Darts'],
      '2': ['Bone Club', 'Skull Helm', 'Bone Pickaxe', 'Bone Sickle'],
      '3': []},
    'action': true,
  },
  'Catarium': {
    'gear': {
      '1': ['White Lion Helm', 'White Lion Gauntlet', 'White Lion Coat', 'White Lion Skirt', 'White Lion Boots'],
      '2': ['Lion Beast Katar', 'Claw Head Arrow', 'King Spear', 'Cat Gut Bow', 'Cat Fang Knife'],
      '3': ['Cat Eye Circlet', 'Whisker Harp', 'Lion Headdress', 'Lion Skin Cloak', 'Frenzy Drink']},
    'armor_set': 'White Lion Armor',
  },
  'Dragon Armory': {
    'expansion': 'dragon king',
    'gear': {
      '1': ['Dragonskull Helm', 'Dragon Gloves', 'Dragon Mantle', 'Dragon Belt', 'Dragon Boots'],
      '2': ['Dragon Chakram', 'Dragon Bite Bolt', 'Talon Knife', 'Nuclear Knife', 'Red Power Core'],
      '3': ['Blast Shield', 'Shielded Quiver', 'Blast Sword', 'Nuclear Scythe', 'Blue Power Core']},
    'armor_set': 'Dragon Armor',
  },
  'Exhausted Lantern Hoard': {
    'campaign': 'Lantern',
    'gear': {
      '1': [],
      '2': ['Survivors Lantern'],
      '3': []},
    'action': true,
    'num_actions': 3,
  },
  'Gormchymist': {
    'expansion': 'gorm',
    'gear': {
      '1': ['Healing Potion', 'Wisdom Potion', 'Steadfast Potion'],
      '2': ['Power Potion', 'Life Elixir'],
      '3': []},
    'action': true,
  },
  'Gormery': {
    'expansion': 'gorm',
    'gear': {
      '1': ['Gorment Mask', 'Gorment Sleeves', 'Gorment Suit', 'Gorment Boots', 'Regeneration Suit'],
      '2': ['Rib Blade', 'Knuckle Shield', 'Gaxe', 'Greater Gaxe', 'Riot Mace'],
      '3': ['Pulse Lantern', 'Gorn', 'Armor Spikes', 'Acid Tooth Dagger', 'Black Sword']},
    'armor_set': 'Gorment Armor',
  },
  'Inspired Crafting': {
    'expansion': 'flower knight',
    'gear': {
      '1': ['Vespertine Satchel', 'Vespertine Foil', 'Vespertine Cello'],
      '2': ['Vespertine Arrow', 'Vespertine Bow'],
      '3': []},
  },
  'Lantern Hoard': {
    'campaign': 'Lantern',
    'gear': {
      '1': [],
      '2': [],
      '3': []},
    'action': true,
    'num_actions': 5,
  },
  'Leather Worker': {
    'gear': {
      '1': ['Leather Mask', 'Leather Bracers', 'Leather Cuirass', 'Leather Skirt', 'Leather Boots'],
      '2': ['Round Leather Shield', 'Hunter Whip'],
      '3': []},
    'action': true,
    'armor_set': 'Leather Armor',
  },
  'Light Forging': {
    'expansion': 'slenderman',
    'gear': {
      '1': ['Gloom Bracelets', 'Gloom-Coated Arrows', 'Gloom Mehndi', 'Dark Water Vial'],
      '2': ['Raptor-Worm Collar', 'Gloom Cream', 'Gloom Hammer'],
      '3': ['Slender Ovule', 'Gloom Katana', 'Gloom Sheath']},
    'action': true,
  },
  'Mask Maker': {
    'gear': {
      '1': ['White Lion Mask', 'Antelope Mask', 'Phoenix Mask'],
      '2': ['Death Mask', 'Man Mask', 'God Mask'],
      '3': []},
    'action': true,
  },
  'Organ Grinder': {
    'gear': {
      '1': ['Stone Noses', 'Fecal Salve', 'Monster Grease'],
      '2': ['Dried Acantus', 'Lucky Charm', 'Monster Tooth Necklace'],
      '3': []},
    'action': true,
    'num_actions': 2,
  },
  'Plumery': {
    'gear': {
      '1': ['Phoenix Helm', 'Phoenix Gauntlet', 'Phoenix Plackart', 'Phoenix Faulds', 'Phoenix Greaves'],
      '2': ['Feather Shield', 'Bloom Sphere', 'Sonic Tomahawk', 'Hollow Sword', 'Arc Bow'],
      '3': ['Feather Mantle', 'Bird Bread', 'Hours Ring', 'Crest Crown', 'Hollowpoint Arrow']},
    'armor_set': 'Phoenix Armor',
  },
  'Sacreed Pool': {
    'campaign': 'Sun',
    'gear': {
      '1': [],
      '2': ['Sun Vestments', 'Sunring Bow'],
      '3': ['Apostle Crown', 'Prism Mace']},
    'action': true,
    'num_actions': 3,
  },
  'Silk Mill': {
    'expansion': 'spidicules',
    'gear': {
      '1': ['Silk Turban', 'Silk Wraps', 'Silk Robes', 'Silk Sash', 'Silk Boots'],
      '2': ['Amber Poleaxe', 'Throwing Knife', 'Silk Whip', 'Hooded Scrap Katar', 'Amber Edge'],
      '3': ['Body Suit', 'Silk Bomb', 'Red Ring', 'Blue Ring', 'Green Ring']},
      'armor_set': 'Silk Armor',
  },
  'Skinnery': {
    'gear': {
      '1': ['Rawhide Headband', 'Rawhide Gloves', 'Rawhide Vest', 'Rawhide Pants', 'Rawhide Boots'],
      '2': ['Bandages', 'Rawhide Drum', 'Rawhide Whip'],
      '3': []},
    'action': true,
    'armor_set': 'Rawhide Armor',
  },
  'Skyreef Sanctuary': {
    'expansion': 'sunstalker',
    'gear': {
      '1': ['Cycloid Scale Hood', 'Cycloid Scale Sleeves', 'Cycloid Scale Jacket', 'Cycloid Scale Skirt', 'Cycloid Scale Shoes'],
      '2': ['Sunspot Dart', 'Sunshark Bow', 'Sunshark Arrows', 'Denticle Axe', 'Skleaver', 'Ink Sword'],
      '3': ['Sunspot Lantern', 'Quiver and Sunstring', 'Shadow Salvia Shawl', 'Sun Lure and Hook', 'Sky Harpoon', 'Ink Blood Bow']},
    'armor_set': 'Cycloid Scale Armor',
  },
  'Stone Circle': {
    'gear': {
      '1': ['Screaming Horns', 'Screaming Bracers', 'Screaming Coat', 'Screaming Skirt', 'Screaming Leg Warmers'],
      '2': ['Boss Mehndi', 'Beast Knuckle', 'Red Charm', 'Blood Paint'],
      '3': ['Bone Earrings', 'Green Charm', 'Blue Charm', 'Lance of Longinus']},
    'action': true,
    'armor_set': 'Screaming Armor',
  },
  'The Sun': {
    'campaign': 'Sun',
    'gear': {
      '1': [],
      '2': [],
      '3': []},
    'action': true,
    'num_actions': 3,
  },
  'Throne': {
    'campaign': 'Stars',
    'gear': {
      '1': [],
      '2': [],
      '3': []},
    'action': true,
    'num_actions': 3,
  },
  'Weapon Crafter': {
    'gear': {
      '1': ['Counterweighted Axe', 'Whistling Mace', 'Zanbato', 'Blood Sheath', 'Rainbow Katana'],
      '2': ['Skullcap Hammer', 'Scrap Sword', 'Scrap Dagger', 'Finger of God'],
      '3': []},
    'action': true,
    'num_actions': 2,
  },
  'Wet Resin Crafter': {
    'expansion': 'dung beetle knight',
    'gear': {
      '1': ['Century Shoulder Pads', 'Century Greaves', 'Rubber Bone Harness', 'Scarab Circlet', 'Rainbow Wing Belt'],
      '2': ['DBK Errant Badge', 'Digging Claw', 'Seasoned Monster Meat', 'The Beetle Bomb'],
      '3': []},
    'armor_set': 'Rolling Armor',
  },
}

const gear_list = {
  'Tabard': {'resources':['1 x cloth', '1 x organ'], 'innovation': 'Paint'},
  'Hard Breastplate': {'resources':['1 x leather', '1 x bone'], 'innovation': 'Heat'},
  'Cloth Leggings': {'resources':['1 x cloth', '1 x hide'], 'innovation': 'Ammonia'},
  'Lion Beast Katar': {'resources':['1 x lion claw', '1 x hide']},
  'Claw Head Arrow': {'resources':['1 x lion claw']},
  'King Spear': {'resources':['1 x lion claw', '1 x great cat bone']},
  'Cat Gut Bow': {'resources':['1 x sinew', '1 x bone']},
  'Cat Fang Knife': {'resources':['1 x elder cat teeth', '4 x organ']},
  'White Lion Helm': {'resources':['1 x white fur', '1 x great cat bone']},
  'White Lion Gauntlet': {'resources':['1 x white fur', '1 x bone']},
  'White Lion Coat': {'resources':['1 x white fur', '1 x hide']},
  'White Lion Skirt': {'resources':['1 x white fur', '1 x hide']},
  'White Lion Boots': {'resources':['1 x white fur', '1 x hide']},
  'Cat Eye Circlet': {'resources':['1 x eye of cat']},
  'Whisker Harp': {'resources':['1 x golden whiskers', '1 x bone']},
  'Lion Headdress': {'resources':['1 x shimmering mane']},
  'Lion Skin Cloak': {'resources':['2 x white fur']},
  'Frenzy Drink': {'resources':['1 x lion testes']},
  'Stone Noses': {'resources':['1 x Endeavor']},
  'Fecal Salve': {'resources':['1 x organ']},
  'Monster Grease': {'resources':['1 x organ']},
  'Dried Acantus': {'resources':['1 x fresh acantus']},
  'Lucky Charm': {'resources':['1 x organ']},
  'Monster Tooth Necklace': {'resources':['1 x scrap', '1 x bone'], 'innovation': 'Heat'},
  'First Aid Kit': {'resources':['1 x leather', '2 x bone']},
  'Brain Mint': {'resources':['1 x screaming brain']},
  'Elder Earrings': {'resources':['1 x scrap', '1 x shank bone']},
  'Musk Bomb': {'resources':['7 x resources'], 'innovation': 'Pottery'},
  'Scavenger Kit': {'resources':['1 x scrap', '1 x pelt']},
  'Bug Trap': {'resources':['1 x muscly gums', '2 x bone']},
  'Speed Powder': {'resources':['1 x second heart', '2 x organ']},
  'Almanac': {'resources':['2 x leather'], 'innovation': 'Pictograph'},
  'Lantern Sword': {'resources':['1 x iron', '5 x bone', '3 x hide']},
  'Lantern Dagger': {'resources':['1 x iron', '4 x leather', '2 x bone']},
  'Lantern Glaive': {'resources':['2 x iron', '2 x leather', '4 x bone']},
  'Dragon Slayer': {'resources':['5 x iron', '3 x organ'], 'innovation': 'Paint'},
  'Perfect Slayer': {'resources':['9 x iron', '3 x organ'], 'innovation': 'Perfect Crucible'},
  'Lantern Helm': {'resources':['1 x iron', '7 x bone']},
  'Lantern Gauntlets': {'resources':['2 x iron', '6 x leather']},
  'Lantern Cuirass': {'resources':['2 x iron', '5 x leather']},
  'Lantern Mail': {'resources':['1 x iron', '5 x organ']},
  'Lantern Greaves': {'resources':['1 x iron', '5 x leather']},
  'Scrap Shield': {'resources':['3 x bone', '2 x scrap', '3 x leather']},
  'Beacon Shield': {'resources':['2 x iron', '3 x leather', '4 x bone']},
  'Ring Whip': {'resources':['1 x iron', '3 x organ', '3 x bone']},
  'Bone Dagger': {'resources':['1 x bone']},
  'Bone Blade': {'resources':['1 x bone']},
  'Bone Axe': {'resources':['1 x bone', '1 x organ']},
  'Bone Darts': {'resources':['1 x bone']},
  'Bone Club': {'resources':['3 x bone']},
  'Skull Helm': {'resources':['2 x bone', '-or-', '1 x skull']},
  'Bone Pickaxe': {'resources':['1 x bone', '1 x leather'], 'innovation': 'Ammonia'},
  'Bone Sickle': {'resources':['1 x bone', '1 x leather'], 'innovation': 'Ammonia'},
  'Dragon Chakram': {'resources':['1 x horn fragment', '2 x organ', '1 x leather']},
  'Dragon Bite Bolt': {'resources':['2 x radioactive dung']},
  'Talon Knife': {'resources':['2 x king\'s claw', '2 x organ']},
  'Nuclear Knife': {'resources':['1 x radiant heart', '2 x horn fragment', '2 x scrap']},
  'Red Power Core': {'resources':['1 x pituitary gland', '1 x iron']},
  'Dragonskull Helm': {'resources':['1 x horn fragment', '2 x bone', '1 x husk']},
  'Dragon Gloves': {'resources':['1 x cabled vein', '1 x husk', '1 x leather', '1 x iron']},
  'Dragon Mantle': {'resources':['1 x horn fragment', '1 x iron', '1 x hardened ribs', '1 x leather']},
  'Dragon Belt': {'resources':['2 x veined wing', '1 x organ', '1 x iron']},
  'Dragon Boots': {'resources':['1 x king\'s claws', '1 x husk', '1 x organ', '1 x iron']},
  'Blast Shield': {'resources':['1 x king\'s tongue', '1 x iron ']},
  'Shielded Quiver': {'resources':['1 x cabled vein', '2 x veined wing', '2 x leather']},
  'Blast Sword': {'resources':['1 x horn fragment', '3 x organ']},
  'Nuclear Scythe': {'resources':['1 x radiant heart', '2 x king\'s claw', '2 x scrap']},
  'Blue Power Core': {'resources':['1 x shining liver', '1 x iron']},
  'Survivors Lantern': {'resources':['1 x Endeavor'], 'innovation': 'Final Lantern'},
  'Rib Blade': {'resources':['1 x meaty rib', '1 x hide']},
  'Knuckle Shield': {'resources':['1 x mammoth hand', '2 x bone']},
  'Gaxe': {'resources':['1 x dense bone', '1 x stout hide']},
  'Greater Gaxe': {'resources':['1 x dense bone', '1 x jiggling lard']},
  'Riot Mace': {'resources':['1 x pure bulb', '1 x stout kidney', '1 x jiggling lard', '1 x dense bone']},
  'Gorment Mask': {'resources':['1 x stout hide', '1 x handed skull']},
  'Gorment Sleeves': {'resources':['1 x stout hide', '1 x bone']},
  'Gorment Suit': {'resources':['3 x stout hide', '1 x stout kidney']},
  'Gorment Boots': {'resources':['1 x stout hide', '1 x bone']},
  'Regeneration Suit': {'resources':['1 x stomach lining', '1 x jiggling lard']},
  'Pulse Lantern': {'resources':['1 x milky eye', '1 x active thyroid']},
  'Gorn': {'resources':['1 x stout heart', '3 x bone']},
  'Armor Spikes': {'resources':['1 x stout vertebrae', '1 x scrap']},
  'Acid Tooth Dagger': {'resources':['1 x acid gland', '2 x bone']},
  'Black Sword': {'resources':['1 x sgormite', '1 x handed skull']},
  'Round Leather Shield': {'resources':['1 x leather', '1 x bone', '1 x hide']},
  'Hunter Whip': {'resources':['2 x leather', '1 x bone']},
  'Leather Mask': {'resources':['1 x leather', '1 x scrap']},
  'Leather Bracers': {'resources':['1 x leather', '1 x hide']},
  'Leather Cuirass': {'resources':['1 x leather', '1 x bone']},
  'Leather Skirt': {'resources':['1 x leather']},
  'Leather Boots': {'resources':['1 x leather', '1 x hide']},
  'White Lion Mask': {'resources':['1 x Endeavor', '1 x shimmering mane', '6 x bone', '4 x organ']},
  'Antelope Mask': {'resources':['1 x Endeavor', '1 x pelt', '6 x bone', '4 x organ']},
  'Phoenix Mask': {'resources':['1 x Endeavor', '1 x small feather', '6 x bone', '4 x organ']},
  'Death Mask': {'resources':['1 x Endeavor', '-1 population', '6 x bone', '4 x organ']},
  'Man Mask': {'resources':['1 x Endeavor', '1 x skull', '6 x bone', '4 x organ']},
  'God Mask': {'resources':['1 x Endeavor', '1 x founding stone', '6 x bone', '4 x organ']},
  'Feather Shield': {'resources':['2 x small feathers', '1 x musculent droppings']},
  'Bloom Sphere': {'resources':['1 x small hand parasites', '3 x bone']},
  'Sonic Tomahawk': {'resources':['1 x small feathers', '1 x scrap', '1 x hollow wing bone']},
  'Hollow Sword': {'resources':['1 x hollow wing bone', '2 x bone', '2 x hide']},
  'Arc Bow': {'resources':['1 x phoenix whisker', '1 x wishbone', '1 x scrap']},
  'Phoenix Helm': {'resources':['1 x hollow wing bone', '1 x small feather', '1 x bone']},
  'Phoenix Gauntlet': {'resources':['1 x iron', '1 x leather', '1 x small feather', '1 x bone']},
  'Phoenix Plackart': {'resources':['1 x iron', '1 x leather', '1 x tail feather', '1 x hide']},
  'Phoenix Faulds': {'resources':['1 x iron', '1 x leather', '1 x tail feather', '1 x organ']},
  'Phoenix Greaves': {'resources':['1 x iron', '1 x leather', '1 x small feather', '1 x organ']},
  'Feather Mantle': {'resources':['2 x tail feather', '1 x scrap']},
  'Bird Bread': {'resources':['1 x pustules', '3 x hide']},
  'Hours Ring': {'resources':['1 x shimmering halo', '5 x organ']},
  'Crest Crown': {'resources':['1 x phoenix crest', '6 x organ']},
  'Hollowpoint Arrow': {'resources':['1 x hollow wing bone', '1 x scrap']},
  'Sun Vestments': {'resources':['6 x hide', '1 x golden whiskers', '2 x pustules']},
  'Sunring Bow': {'resources':['6 x bone', '1 x phoenix whisker', '1 x bladder']},
  'Apostle Crown': {'resources':['1 x legendary horns', '1 x phoenix crest']},
  'Prism Mace': {'resources':['4 x iron', '1 x shimmering halo', '2 x elder cat teeth']},
  'Amber Poleaxe': {'resources':['2 x bone', '1 x organ', '1 x venom sac']},
  'Throwing Knife': {'resources':['1 x silk', '1 x serrated fangs']},
  'Silk Whip': {'resources':['1 x large appendage', '1 x bone']},
  'Hooded Scrap Katar': {'resources':['2 x small appendage', '1 x scrap']},
  'Amber Edge': {'resources':['1 x bone', '1 x organ', '1 x chitin']},
  'Silk Turban': {'resources':['1 x silken nervous system', '3 x silk', '1 x hide']},
  'Silk Wraps': {'resources':['1 x thick web silk', '1 x silk']},
  'Silk Robes': {'resources':['2 x silk', '1 x hide', '1 x exoskeleton']},
  'Silk Sash': {'resources':['2 x silk', '1 x bone', '1 x hide']},
  'Silk Boots': {'resources':['1 x large appendage', '1 x silk']},
  'Body Suit': {'resources':['5 x silk', '2 x hide', '1 x spinnerets']},
  'Silk Bomb': {'resources':['2 x resources', '2 x silk']},
  'Red Ring': {'resources':['3 x venom sac', '2 x arachnid heart'], 'innovation': 'Legless Ball'},
  'Blue Ring': {'resources':['3 x eyeballs', '2 x stomach'], 'innovation': 'Legless Ball'},
  'Green Ring': {'resources':['3 x unlaid legs', '2 x spinnerets'], 'innovation': 'Legless Ball'},
  'Bandages': {'resources':['1 x hide']},
  'Rawhide Drum': {'resources':['1 x bone', '1 x hide'], 'innovation': 'Drums'},
  'Rawhide Whip': {'resources':['1 x bone', '1 x hide'], 'innovation': 'Ammonia'},
  'Rawhide Headband': {'resources':['1 x hide']},
  'Rawhide Gloves': {'resources':['1 x hide']},
  'Rawhide Vest': {'resources':['1 x hide']},
  'Rawhide Pants': {'resources':['1 x hide']},
  'Rawhide Boots': {'resources':['1 x hide']},
  'Sunspot Dart': {'resources':['1 x sunstones', '3 x bone']},
  'Sunshark Bow': {'resources':['2 x huge sunteeth', '1 x organ', '1 x sunshark bone', '1 x salt']},
  'Sunshark Arrows': {'resources':['3 x small sunteeth', '1 x bone', '1 x sunshark fin', '1 x salt']},
  'Denticle Axe': {'resources':['1 x 1.000 year sunspot', '1 x salt', '1 x black lens', '1 x iron', '1 x bone']},
  'Skleaver': {'resources':['2 x 1.000 year sunspot', '1 x salt', '1 x black lens', '1 x sunshark bone']},
  'Ink Sword': {'resources':['1 x 1.000 year sunspot', '4 x hide', '1 x shallow ink gland', '1 x iron']},
  'Cycloid Scale Hood': {'resources':['1 x cycloid scales', '1 x hide', '1 x prismatic gills']},
  'Cycloid Scale Sleeves': {'resources':['1 x cycloid scales', '1 x bone', '1 x small sunteeth', '1 x salt']},
  'Cycloid Scale Jacket': {'resources':['1 x cycloid scales', '1 x scrap', '1 x huge sunteeth', '1 x salt']},
  'Cycloid Scale Skirt': {'resources':['1 x cycloid scales', '1 x hide', '1 x huge sunteeth']},
  'Cycloid Scale Shoes': {'resources':['1 x cycloid scales', '1 x bone', '1 x shadow tentacles']},
  'Sunspot Lantern': {'resources':['2 x sunstones', '1 x scrap', '1 x salt']},
  'Quiver and Sunstring': {'resources':['1 x inner shadow skin', '4 x hide', '1 x brain root', '1 x salt']},
  'Shadow Salvia Shawl': {'resources':['1 x shadow ink gland', '1 x salt', '1 x stink lung', '1 x shark tongue']},
  'Sun Lure and Hook': {'resources':['1 x sunshark blubber', '1 x scrap']},
  'Sky Harpoon': {'resources':['1 x sunshark bone', '1 x scrap', '1 x salt']},
  'Ink Blood Bow': {'resources':['1 x 3.000 year sunspot', '5 x organ', '3 x shadow tentacles', '1 x iron']},
  'Boss Mehndi': {'resources':['1 x golden whiskers', '1 x bone']},
  'Beast Knuckle': {'resources':['1 x large flat tooth', '1 x pelt']},
  'Red Charm': {'resources':['3 x organ']},
  'Blood Paint': {'resources':['1 x bladder', '1 x organ'], 'innovation': 'Paint'},
  'Screaming Horns': {'resources':['1 x spiral horn', '1 x scrap']},
  'Screaming Bracers': {'resources':['1 x pelt', '1 x hide']},
  'Screaming Coat': {'resources':['1 x pelt', '1 x bone']},
  'Screaming Skirt': {'resources':['1 x pelt']},
  'Screaming Leg Warmers': {'resources':['1 x pelt', '1 x hide']},
  'Bone Earrings': {'resources':['1 x shank bone', '1 x bone']},
  'Green Charm': {'resources':['3 x organ']},
  'Blue Charm': {'resources':['3 x organ']},
  'Lance of Longinus': {'resources':['1 x legendary horns', '6 x organ']},
  'Counterweighted Axe': {'resources':['2 x bone', '1 x hide', '1 x organ']},
  'Whistling Mace': {'resources':['2 x bone', '1 x organ']},
  'Zanbato': {'resources':['1 x great cat bone', '2 x hide']},
  'Blood Sheath': {'resources':['5 x organ', '1 x hollow wing bone', '1 x muculent droppings']},
  'Rainbow Katana': {'resources':['1 x bird beak', '1 x rainbow droppings', '1 x iron', '6 x bone'], 'innovation': 'Heat'},
  'Skullcap Hammer': {'resources':['2 x bone', '1 x scrap']},
  'Scrap Sword': {'resources':['2 x bone', '1 x scrap'], 'innovation': 'Heat'},
  'Scrap Dagger': {'resources':['1 x bone', '1 x scrap'], 'innovation': 'Heat'},
  'Finger of God': {'resources':['1 x phoenix finger', '4 x bone']},
  'DBK Errant Badge': {'resources':['1 x organ', '1 x bone']},
  'Rainbow Wing Belt': {'resources':['1 x scarab wing', '1 x organ', '1 x hide']},
  'Digging Claw': {'resources':['1 x century fingernails', '2 x scrap', '2 x resources']},
  'Seasoned Monster Meat': {'resources':['1 x underplate fungus', '2 x organ']},
  'Century Shoulder Pads': {'resources':['1 x scarab shell', '3 x leather', '1 x iron']},
  'Scarab Circlet': {'resources':['1 x compound eye', '1 x hide', '1 x bone'], 'innovation': 'Nightmare Corn'},
  'Century Greaves': {'resources':['1 x scarab shell', '1 x beetle horn', '2 x iron'], 'innovation': 'Nightmare Corn'},
  'Rubber Bone Harness': {'resources':['1 x underplate fungus', '1 x century fingernails', '2 x leather'], 'innovation': 'Vampiric Artichoke'},
  'The Beetle Bomb': {'resources':['2 x scarab shell', '2 x preserved caustic dung', '5 x resources'], 'innovation': 'Vampiric Artichoke'},

  'Gloom Bracelets': {'resources':['1 x bone', '1 x lion tail', '1 x scrap', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
  'Gloom-Coated Arrows': {'resources':['2 x bone', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
  'Gloom Mehndi': {'resources':['3 x organ', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
  'Dark Water Vial': {'resources':['1 x organ', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
  'Raptor-Worm Collar': {'resources':['1 x organ', '1 x scrap', '1 x dark water'], 'innovation': 'Dark Water Research 2'},
  'Gloom Cream': {'resources':['1 x love juice', '1 x hide', '2 x dark water'], 'innovation': 'Dark Water Research 2'},
  'Gloom Hammer': {'resources':['3 x skull', '1 x iron', '1 x organ', '3 x dark water'], 'innovation': 'Dark Water Research 2'},
  'Slender Ovule': {'resources':['1 x phoenix eye',  '4 x dark water'], 'innovation': 'Dark Water Research 3'},
  'Gloom Katana': {'resources':['1 x iron', '1 x crystal mold', '2 x dark water'], 'innovation': 'Dark Water Research 3'},
  'Gloom Sheath': {'resources':['1 x shank bone', '2 x organ', '2 x dark water'], 'innovation': 'Dark Water Research 3'},
}

const innovations = {
 'Albedo': {
   'expansion': 'gorm',
   'parent': 'Nigredo',
   'tags': ['science', 'gormchymy', 'nigredo'],
   'action': true,
 },
 'Ammonia': {
   'parent': 'Language',
   'tags': ['science', 'language']
 },
 'Aquarobotics': {
   'expansion': 'sunstalker',
   'parent': 'Hands of the Sun',
   'tags': ['faith', 'hands of the sun'],
   'campaign': ['Sun'],
   'action': true,
 },
 'Arena': {
   'expansion': 'dragon king',
   'parent': 'Nightmare Training',
   'campaign': 'Stars',
   'tags': ['education', 'nightmare training'],
   'action': true,
 },
 'Bed': {
   'parent': 'Hovel',
   'tags': ['home', 'hovel'],
   'action': true,
 },
 'Bloodletting': {
   'parent': 'Ammonia',
   'tags': ['science', 'ammonia'],
   'action': true,
 },
 'Bloodline': {
   'expansion': 'dragon king',
   'parent': 'Hovel',
   'campaign': ['Stars'],
   'tags': ['home', 'hovel']
 },
 'Citrinitas': {
   'expansion': 'gorm',
   'parent': 'Albedo',
   'tags': ['science', 'gormchymy', 'albedo'],
   'action': true,
 },
 'Choreia': {
   'expansion': 'spidicules',
   'parent': 'Forbidden Dance',
   'tags': ['music', 'forbidden dance'],
   'action': true,
 },
 'Legless Ball': {
   'expansion': 'spidicules',
   'tags': ['other'],
   'action': true,
 },
 'Silk-refining': {
   'expansion': 'spidicules',
   'tags': ['other'],
   'action': true,
 },
 'Clan of Death': {
   'parent': 'Family',
   'campaign': ['Lantern', 'Sun'],
   'tags': ['home', 'family']
 },
 'Cooking': {
   'parent': 'Lantern Oven',
   'tags': ['science', 'lantern oven'],
   'action': true,
 },
 'Crimson Candy': {
   'expansion': 'manhunter',
   'tags': ['science'],
   'action': true,
 },
 'Dark Water Research': {
   'expansion': 'slenderman',
   'tags': ['science'],
   'action': true,
 },
 'Destiny': {
   'tags': ['faith']
 },
 'Dragon Speech': {
   'expansion': 'dragon king',
   'campaign': ['Stars'],
   'tags': ['starting']
 },
 'Drums': {
   'parent': 'Language',
   'tags': ['music', 'language'],
   'action': true,
 },
 'Empire': {
   'expansion': 'dragon king',
   'parent': 'Bloodline',
   'campaign': ['Stars'],
   'tags': ['home', 'bloodline']
 },
 'Face Painting': {
   'parent': 'Paint',
   'tags': ['art', 'paint'],
   'action': true,
 },
 'Family': {
   'parent': 'Hovel',
   'campaign': ['Lantern', 'Sun'],
   'tags': ['home', 'hovel']
 },
 'Filleting Table': {
   'expansion': 'sunstalker',
   'tags': ['science'],
   'action': true,
 },
 'Final Fightning Art': {
   'tags': ['education']
 },
 'Forbidden Dance': {
   'parent': 'Drums',
   'tags': ['music', 'drums'],
   'action': true,
 },
 'Guidepost': {
   'tags': ['other'],
   'action': true,
 },
 'Hands of the Sun': {
   'expansion': 'sunstalker',
   'tags': ['faith'],
   'campaign': ['Sun'],
 },
 'Heart Flute': {
   'parent': 'Forbidden Dance',
   'tags': ['music', 'forbidden dance'],
   'action': true,
 },
 'Hovel': {
   'parent': 'Language',
   'tags': ['home', 'language']
 },
 'Inner Lantern': {
   'parent': 'Language',
   'tags': ['faith', 'language']
 },
 'Language': {
   'campaign': ['Lantern'],
   'tags': ['starting']
 },
 'Lantern Oven': {
   'parent': 'Lantern Oven',
   'campaign': ['Lantern'],
   'tags': ['science', 'ammonia']
 },
 'Momento Mori': {
   'parent': 'Pictograph',
   'tags': ['art', 'pictograph'],
   'action': true,
 },
 'Nightmare Training': {
   'parent': 'Nightmare Training',
   'tags': ['education', 'symposium'],
   'action': true,
 },
 'Nigredo': {
   'expansion': 'gorm',
   'tags': ['science', 'gormchymy'],
   'action': true,
 },
 'Paint': {
   'parent': 'Language',
   'tags': ['art', 'language']
 },
 'Partnership': {
   'parent': 'Hovel',
   'tags': ['home', 'hovel'],
   'action': true,
 },
 'Petal Spiral': {
   'expansion': 'flower knight',
   'parent': 'Forbidden Dance',
   'tags': ['music', 'forbidden dance'],
   'action': true,
 },
 'Pictograph': {
   'parent': 'Paint',
   'tags': ['art', 'paint']
 },
 'Pottery': {
   'parent': 'Sculpture',
   'tags': ['art', 'sculpture'],
   'action': true,
 },
 'Radiating Orb': {
   'expansion': 'dragon king',
   'campaign': ['Stars'],
   'tags': ['science']
 },
 'Records': {
   'parent': 'Storytelling',
   'tags': ['education', 'storytelling'],
   'action': true,
 },
 'Round Stone Training': {
   'expansion': 'dung beetle knight',
   'parent': 'Nightmare Training',
   'tags': ['education', 'nightmare training'],
   'action': true,
 },
 'Rubedo': {
   'expansion': 'gorm',
   'parent': 'Citrinitas',
   'tags': ['science', 'gormchymy', 'citrinas'],
   'action': true,
 },
 'Sacrifice': {
   'parent': 'Shrine',
   'tags': ['faith', 'shrine'],
   'action': true,
 },
 'Saga': {
   'parent': 'Song of the Brave',
   'tags': ['music', 'song of the brave']
 },
 'Sauna Shrine': {
   'expansion': 'sunstalker',
   'parent': 'Hands of the Sun',
   'tags': ['faith', 'hands of the sun'],
   'campaign': ['Sun'],
   'action': true,
 },
 'Scarification': {
   'parent': 'Inner Lantern',
   'tags': ['faith', 'inner lantern'],
   'action': true,
 },
 'Scrap Smelting': {
   'parent': 'Lantern Oven',
   'tags': ['science', 'lantern oven'],
   'action': true,
   'num_actions': 2,
 },
 'Scupture': {
   'parent': 'Paint',
   'tags': ['art', 'paint'],
   'action': true,
 },
 'Settlement Watch': {
   'expansion': 'manhunter',
   'parent': 'Hovel',
   'tags': ['home', 'hovel'],
   'action': true,
 },
 'Shadow Dancing': {
   'expansion': 'sunstalker',
   'parent': 'Hovel',
   'tags': ['home', 'hovel'],
   'action': true,
 },
 'Shrine': {
   'parent': 'Inner Lantern',
   'tags': ['faith', 'inner lantern'],
   'action': true,
 },
 'Song of the Brave': {
   'parent': 'Drums',
   'tags': ['music', 'drums']
 },
 'Stoic Statue': {
   'expansion': 'lion knight',
   'tags': ['other'],
   'action': true,
 },
 'Black Mask': {
   'expansion': 'lion knight',
   'tags': ['other'],
   'action': true,
 },
 'White Mask': {
   'expansion': 'lion knight',
   'tags': ['other'],
   'action': true,
 },
 'Storytelling': {
   'parent': 'Symposium',
   'tags': ['education', 'symposium'],
   'action': true,
 },
 'Subterranean Agriculture': {
   'expansion': 'dung beetle knight',
   'tags': ['science'],
   'action': true,
   'num_actions': 2,
 },
 'Sun Language': {
   'expansion': 'sunstalker',
   'tags': ['starting'],
   'campaign': ['Sun'],
 },
 'Symposium': {
   'parent': 'Language',
   'tags': ['education', 'language'],
 },
 'The Knowedge Worm': {
   'expansion': 'lion god',
   'tags': ['other']
 },
 'Ultimate Weapon': {
   'tags': ['science']
 },
 'Umbilical Bank': {
   'expansion': 'sunstalker',
   'tags': ['science'],
   'campaign': ['Sun'],
   'action': true,
   'num_actions': 2,
 },
 'War Room': {
   'expansion': 'manhunter',
   'parent': 'Storytelling',
   'tags': ['education', 'storytelling'],
   'action': true,
 },
 'Accept Darkness': {
   'tags': ['principle', 'society']
 },
 'Barbaric': {
   'tags': ['principle', 'conviction']
 },
 'Cannibalize': {
   'tags': ['principle', 'death']
 },
 'Collective Toil': {
   'tags': ['principle', 'society']
 },
 'Graves': {
   'tags': ['principle', 'death']
 },
 'Protect the Young': {
   'tags': ['principle', 'birth', 'new life']
 },
 'Romantic': {
   'tags': ['principle', 'conviction']
 },
 'Survival of the Fittest': {
   'tags': ['principle', 'birth', 'new life']
 }
}

const terrain = {
  '2 Acantus Plants': {
    'num_cards': 4
  },
  '2 Salt Sculptures': {
    'expansion': 'sunstalker'
  },
  '2 Tall Grass': {
    'num_cards': 2
  },
  '3 Stone Columns': {
    'num_cards': 2
  },
  'Bug Patch': {},
  'Dead Monster': {},
  'Debris': {},
  'Giant Stone Face': {
    'num_cards': 2
  },
  'Lava Pool': {
    'expansion': 'dragon king'
  },
  'Lion Statue': {
    'expansion': 'lion god'
  },
  'Nightmare Tree': {},
  'Obsidian Tower': {
    'expansion': 'dragon king'
  },
  'Ore Vein': {
    'num_cards': 2
  },
  'Resin Dung Ball': {
    'expansion': 'dung beetle knight'
  },
  'Sinkhole': {
    'expansion': 'lion god'
  },
  'Survivor Corpse': {
    'num_cards': 2
  },
  'The Lonely Tree': {
    'expansion': 'lonely tree'
  },
  'Toppled Pillar': {
    'num_cards': 2
  },
}

const principles = {
  'Principle Accept Darkness': {},
  'Principle Barbaric': {},
  'Principle Cannibalize': {},
  'Principle Collective Toil': {},
  'Principle Graves': {},
  'Principle Protect the Young': {},
  'Principle Romantic': {},
  'Principle Survival of the Fittest': {}
}

const armor_sets = {
  'Brawler Armor': {},
  'Cycloid Scale Armor': {},
  'Dancer Armor': {},
  'Dragon Armor': {},
  'Gorment Armor': {},
  'Green Armor': {},
  'Lantern Armor': {},
  'Leather Armor': {},
  'Phoenix Armor': {},
  'Rawhide Armor': {},
  'Rolling Armor': {},
  'Screaming Armor': {},
  'Silk Armor': {},
  'Vagabond Armor': {},
  'Warlord Armor': {},
  'White Lion Armor': {},
}

const random_draws = {
  '1 random Fightning Art': {},
  '2 random Fightning Arts': {},
  '3 random Fightning Arts': {},
  '5 random Fightning Arts': {},
  '1 random Disorder': {},
  '2 random Disorders': {},
  '3 random Disorders': {},
  '1 random Settlement Event': {},
}

module.exports = {
  get_all_options,
  get_representation,
  is_random_draw,
  get_random_draws,
  get_locations_list,
  getSettlementEventPath,
  clone,
  settlement_locations,
  gear_list,
  innovations,
  get_events_options,
}

function get_options (data, type, filter=false) {
  let result = []
  let settings = getSettings();
  for (let key in data) {
    if (!filter) {
      result.push({
        class: type,
        name: key,
        value: key,
      })
    } else {
      if (!('expansion' in data[key]) || (settings['expansions'][data[key]['expansion']] == 'All content')){
        result.push({
          class: type,
          name: key,
          value: key,
        })
      }
    }

    // console.log(key)

  }

  // console.log(result)
  return result
}

function get_all_options () {
  var options = get_options(random_draws, 'random draws')
  options = options.concat(get_options(glossary_terms, 'glossary'))
  options = options.concat(get_options(fightning_arts_text, 'fightning arts'))
  options = options.concat(get_options(secret_fightning_arts_text, 'secret fightning arts'))
  options = options.concat(get_options(disorders_text, 'disorders'))
  options = options.concat(get_options(abilities, 'abilities'))
  options = options.concat(get_options(settlement_events, 'settlement events'))
  options = options.concat(get_options(settlement_locations, 'settlement locations'))
  options = options.concat(get_options(armor_sets, 'armor sets'))
  options = options.concat(get_options(survivor_statuses, 'survivor statuses'))
  options = options.concat(get_options(innovations, 'innovations'))
  options = options.concat(get_options(terrain, 'terrain'))
  // options = options.concat(get_options(principles, 'principles'))
  // $.get( "files.php", function( data ) {
  //   console.log('Here...')
  //   console.log(data)
  //   console.log('...!!!')
  //   options.concat(data);
  // });
  // options = options.concat(get_options(fightning_arts_text, 'disorders'));
  // options = options.concat(get_options(fightning_arts_text, 'abilities'));
  // options = options.concat(get_options(secret_fightning_arts_text, 'secret figtning arts'));
  return options.concat(get_options(settlement_events, 'settlement events'))
}

function get_events_options() {
  let options = [{class: 'settlement events', name: '<Random>', value: 'Random Settlement Event',}]
  return options.concat(get_options(settlement_events, 'settlement events', filter=true))
}

function get_locations_list() {
  let settings = JSON.parse(sessionStorage.getItem('settings'))

  let list = []
}

function get_representation (word) {
  let settings = JSON.parse(sessionStorage.getItem('settings'))

  if (word in glossary_terms) {
    let result = '<b style="font-size:1.3em;">' + word + '</b> <i style="font-size:0.9em;color:#777;">(term)</i> <hr/>' + glossary_terms[word]

    let terms_with_pics = ['Attack', 'Collision', 'Hunt Phase', 'Settlement Phase', 'Survival', 'Knocked Down (Monster)', 'Knocked Down (Survivor)']

    if (terms_with_pics.includes(word)) {
      result = result + '<br/><br/><img id=reference-image src="images/reference/terms/' + word + '.jpg"/>'
    }

    // post text 1 width 98%

    if (['Settlement Board', 'Gear Grid', 'Hit Location (Monster)', 'Terrain Cards'].includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:99%;" src="images/reference/terms/'+word+'.png"/>'
    }

    // post text 2 width 98%

    if (['Movement (Attribute)', 'Endeavors'].includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:99%;" src="images/reference/terms/'+word+'.png"/>'
      result = result + '<br\>Monster must move as close to straight line to target as possible:'
      result = result + '<br/><img id=reference-image style="width:99%;" src="images/reference/terms/'+word+' 2.png"/>'
    }

    // post text 1 width 50%

    if (['Hunt Event', 'Persistent Injury', 'Mood', 'Survivor Status Card'].includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:50%;" src="images/reference/terms/'+word+'.png"/>'
    }

    // post text 1 width 75%

    if (['Wound', 'Vermin Resources', 'Monster Resources', 'Basic Resources', 'Strange Resources', 'Persistent Injury Actions', 'Flow', 'Settlement Event', 'In Range (Monster)', 'Facing', 'Alerts', 'AI Card', 'Hit Location (Survivors)', 'Weapon', 'Armor', 'Item', 'Damage (Condition)', 'Armor Set', 'Puzzle Affinity', 'Affinity (Completed)', 'Injury Level', 'Attribute Modifier Token'].includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:75%;" src="images/reference/terms/'+word+'.png"/>'
    }

    // post text 2 width 75%

    if (['Knockback X', 'Collision', 'Affinity Bonus', 'Field of View'].includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:75%;" src="images/reference/terms/'+word+'.png"/>'
      result = result + '<br/><img id=reference-image style="width:75%;" src="images/reference/terms/'+word+' 2.png"/>'
    }

    // pre-text 15%

    if (['Bleeding Token'].includes(word)) {
      result =  '<img id=reference-image style="width:15%;" src="images/reference/terms/'+word+' 0.png"/>' + result
    }

    // pre-text 25%

    if (['Natural 1', 'Conflict (Rule of Death)', 'Hit Location Dice', 'Lantern 10', 'Overwhelming Darkness', 'Reaction', 'Intimidate Actions','Accuracy (Attribute)', 'Evasion (Attribute)', 'Speed (Attribute)', 'Strength (Attribute)', 'Movement (Attribute)', 'Luck (Player Attribute)'].includes(word)) {
      result =  '<img id=reference-image style="width:25%;" src="images/reference/terms/'+word+' 0.png"/>' + result
    }

    // pre-text 50% no br

    if (['Story Event', 'Settlement Phase', 'Showdown Phase', 'Hunt Phase', 'Collision', 'Duplicate Gear', 'Survival', 'Injury Level'].includes(word)) {
      result =  '<img id=reference-image style="width:50%;" src="images/reference/terms/'+word+' 0.png"/>' + result
    }

    // pre-text 50% with br

    if (['Severe Injury', 'Knockback X', 'Innovation Deck', 'Fist & Tooth', 'Critical Wound'].includes(word)) {
      result =  '<img id=reference-image style="width:50%;" src="images/reference/terms/'+word+' 0.png"/><br/>' + result
    }

    // pre-text 75% with br

    if (['Knocked Down (Survivor)', 'Duration', 'Trap'].includes(word)) {
      result =  '<img id=reference-image style="width:75%;" src="images/reference/terms/'+word+' 0.png"/><br/>' + result
    }

    let weapons = ['Axe', 'Bow', 'Club', 'Dagger', 'Fist & Tooth', 'Grand Weapon', 'Katana', 'Katar', 'Scythe', 'Shield', 'Spear', 'Sword', 'Twilight Sword', 'Whip', 'Thrown']

    if (weapons.includes(word)) {
      result = result + '<br/><br/><img id=reference-image style="width:100%;" src="' + cdnUrl('images/reference/Weapon Masteries/' + word + '.png') + '"/>'
      // result = result + '<br/><img id=reference-image style="width:75%;" src="' + cdnUrl('images/reference/Weapon Masteries/'+ word +' (M).png') + '"/>'
    }

    return result
  } else if (word in fightning_arts_text) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    if (settings['card design']['fighting arts'] == 'Poots') {
      return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Fighting Arts/' + word + '.jpg') + '"/>'
    } else if (settings['card design']['fighting arts'] == 'Fen Small') {
      return '<img id=reference-image style="width:50%;border: 1px solid #333;box-shadow: 0 0 10px #000;" src="' + cdnUrl('images/reference/Fighting Arts_fen/' + word + '.png') + '"/>'
    } else if (settings['card design']['fighting arts'] == 'Lvova Wide') {
      return '<img id=reference-image style="width:98%;border: 1px solid #333;box-shadow: 0 0 10px #000;" src="' + cdnUrl('images/reference/Fighting Arts_lvova_wide/' + word + '.png') + '"/>'
    }
  } else if (word in secret_fightning_arts_text) {
    if (settings['card design']['fighting arts'] == 'Poots') {
      let result = '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Fighting Arts/' + word + '.jpg') + '"/>'
      if (word == 'Necromancer') {
        result = '<img id=reference-image style="width:49%;float:left;padding-right:5px;padding-bottom:10px;" src="' + cdnUrl('images/reference/Fighting Arts/' + word + '.jpg') + '"/>'
        result = result + '<img id=reference-image style="width:49%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Fighting Arts/' + word + '_back.jpg') + '"/>'
      }
      return result
    } else if (settings['card design']['fighting arts'] == 'Fen Small') {
      return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Fighting Arts_fen/' + word + '.png') + '"/>'
    }
  } else if (word in disorders_text) {
    if (settings['card design']['disorders'] == 'Poots') {
      return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Disorders/' + word + '.jpg') + '"/>'
    } else if (settings['card design']['disorders'] == 'Fen Small') {
      return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Disorders_fen/' + word + '.png') + '"/>'
    } else if (settings['card design']['disorders'] == 'Fen Wide') {
      return '<img id=reference-image style="width:99%;border: 1px solid #333;box-shadow: 0 0 10px #000;" src="' + cdnUrl('images/reference/Disorders_fen_wide/' + word + '.png') + '"/>'
    }
  } else if (word in abilities) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Abilities/' + word + '.png') + '"/>'
  } else if (word in settlement_events) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:100%;" src="' + cdnUrl('images/reference/Settlement Events/' + word + '.jpg') + '"/>'
  } else if (word in settlement_locations) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:90%;" src="' + cdnUrl('images/reference/Settlement Locations/' + word + '.jpg') + '"/>'
  } else if (word in armor_sets) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    // let result = ''
    // if (['Gorment Armor', 'Brawler Armor', 'Rawhide Armor'].includes(word)) {
    //   result = '<img id=reference-image style="width:100%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Armor Sets/' + word + '.png') + '"/>'
    // } else {
    let result = '<img id=reference-image style="width:49%;float:left;padding-right:5px;padding-bottom:10px;" src="' + cdnUrl('images/reference/Armor Sets/' + word + '.jpg') + '"/>'
    result = result + '<img id=reference-image style="width:49%;float:left;padding-bottom:10px;" src="' + cdnUrl('images/reference/Armor Sets/' + word + ' 2.jpg') + '"/><br/>'
    // }
    return result
  } else if (word in survivor_statuses) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Survivor Statuses/' + word + '.jpg') + '"/>'
  } else if (word in innovations) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Innovations/' + word + '.jpg') + '"/>'
  }  else if (word in principles) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Innovations/' + word + '.jpg') + '"/>'
  } else if (word in terrain) {
    // return '<b style="font-size:1.3em;">'+word+'</b> <i style="font-size:0.9em;color:#777;">(fightning art)</i> <hr/>'+fightning_arts_text[word]
    return '<img id=reference-image style="width:60%;float:left;padding-bottom:10px;filter: drop-shadow(0 0 5px #333);" src="' + cdnUrl('images/reference/Terrain/' + word + '.jpg') + '"/>'
  }
}

function is_random_draw (word) {
  if (word.includes(' random ')) {
    return true
  } else {
    return false
  }
}

function get_random_draws (word, randomize=true, ) {
  let settings = JSON.parse(sessionStorage.getItem('settings'))
  let number = word.substring(0, 1)
  let list = []

  if (word.includes('Fightning')) {
    list = clone(fightning_arts_text)
  } else if (word.includes('Disorder')) {
    list = clone(disorders_text)
  } else if (word.includes(get_events_options)) {
    list = clone(settlement_events)
    delete list['First Day']
  } else if (word.includes('Location')) {
    list = clone(settlement_locations)
  } else if (word.includes('Innovation')) {
    list = clone(innovations)
  } else {
    return []
  }

  let keys = Object.keys(list)

  keys.forEach(function (key) {
    // console.log(key)
    let remove = false

    if (('expansion' in list[key]) && (settings['expansions'][list[key]['expansion']] == 'Disabled')) {
      remove = true
    } else if ((list[key]['type'] == 'strain') && (settings['strains'][key.toLowerCase()] == 'Locked')) {
      remove = true
    } else if (word.includes('Settlement Event')) {
      // Settlement events are shown only if "All Content" is set for expansion
      if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
        remove = true
      }
    } else if (word.includes('Location')) {
      // Locations are shown only if "All Content" is set for expansion
      if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
        remove = true
      }
      if (('campaign' in list[key]) && !(settings['campaign'] == list[key]['campaign'])) {
        remove = true
      }
    } else if (word.includes('Innovation')) {

      if (('campaign' in list[key]) && !(list[key]['campaign'].includes(settings['campaign']))) {
        remove = true
      }

    }

    if (remove) {
      // console.log('Remove!')
      delete list[key]
    }
  })

  if (randomize == true) {
    return getRandom(Object.keys(list), number)
  } else {
    return Object.keys(list)
  }
}

function getRandom (arr, n) {
  var result = new Array(n)
  var len = arr.length
  var taken = new Array(len)

  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available')
  }

  while (n--) {
    var x = Math.floor(Math.random() * len)
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }

  return result
}

function removeA (arr) {
  var what; var a = arguments
  var L = a.length
  var ax

  while (L > 1 && arr.length) {
    what = a[--L]

    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1)
    }
  }

  return arr
}

function getSettlementEventPath () {
  let list = clone(settlement_events)
  delete list['First Day']

  let settings = JSON.parse(sessionStorage.getItem('settings'))

  let keys = Object.keys(list)

  keys.forEach(function (key) {
    // console.log(key)
    let remove = false

    if (('expansion' in list[key]) && !(settings['expansions'][list[key]['expansion']] == 'All content')) {
      remove = true
    }

    if (remove) {
      // console.log('Remove!')
      delete list[key]
    }
  })

  return getRandom(Object.keys(list), 1)
}

function clone (obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj
  }

  var copy = obj.constructor()

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr]
  }

  return copy
}
