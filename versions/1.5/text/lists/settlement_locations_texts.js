const texts = {
 'Barber Surgeon': {
  'label':'',
  'gear': {
   '1': ['First Aid Kit', 'Brain Mint', 'Elder Earrings', 'Musk Bomb'],
   '2': ['Scavenger Kit', 'Bug Trap', 'Speed Powder', 'Almanac'],
   '3': []},
  'action': true,
 },
 'Blacksmith': {
   'label':'',
  'gear': {
   '1': ['Lantern Helm', 'Lantern Gauntlets', 'Lantern Cuirass', 'Lantern Mail', 'Lantern Greaves'],
   '2': ['Lantern Sword', 'Lantern Dagger', 'Lantern Glaive', 'Scrap Shield'],
   '3': ['Beacon Shield', 'Ring Whip', 'Dragon Slayer', 'Perfect Slayer']},
  'armor_set': 'Lantern Armor',
 },
 'Bone Smith': {
   'label':'',
  'gear': {
   '1': ['Bone Dagger', 'Bone Blade', 'Bone Axe', 'Bone Darts'],
   '2': ['Bone Club', 'Skull Helm', 'Bone Pickaxe', 'Bone Sickle'],
   '3': []},
  'action': true,
  'action_disabler': {'location': ['Weapon Crafter']},
 },
 'Catarium': {
   'label':'',
  'gear': {
   '1': ['White Lion Helm', 'White Lion Gauntlet', 'White Lion Coat', 'White Lion Skirt', 'White Lion Boots'],
   '2': ['Lion Beast Katar', 'Claw Head Arrow', 'King Spear', 'Cat Gut Bow', 'Cat Fang Knife'],
   '3': ['Cat Eye Circlet', 'Whisker Harp', 'Lion Headdress', 'Lion Skin Cloak', 'Frenzy Drink']},
  'armor_set': 'White Lion Armor',
 },
 'Dragon Armory': {
   'label':'',
  'expansion': 'dragon king',
  'gear': {
   '1': ['Dragonskull Helm', 'Dragon Gloves', 'Dragon Mantle', 'Dragon Belt', 'Dragon Boots'],
   '2': ['Dragon Chakram', 'Dragon Bite Bolt', 'Talon Knife', 'Nuclear Knife', 'Red Power Core'],
   '3': ['Blast Shield', 'Shielded Quiver', 'Blast Sword', 'Nuclear Scythe', 'Blue Power Core']},
  'armor_set': 'Dragon Armor',
 },
 'Exhausted Lantern Hoard': {
   'label':'',
  'campaign': 'Lantern',
  'gear': {
   '1': ['Survivors Lantern'],
   '2': ['Oxidized Lantern Sword','Oxidized Beacon Shield','Oxidized Lantern Dagger'],
   '3': ['Oxidized Lantern Glaive','Oxidized Ring Whip','Oxidized Lantern Helm']},
  'action': true,
  'num_actions': 3,
 },

 'Gormchymist': {
   'label':'',
  'expansion': 'gorm',
  'gear': {
   '1': ['Healing Potion', 'Wisdom Potion', 'Steadfast Potion'],
   '2': ['Power Potion', 'Life Elixir'],
   '3': []},
  'action': true,
  'action_disabler': {'innovation': ['Albedo', 'Nigredo', 'Rubedo', 'Citrinitas']},
 },
 'Gormery': {
   'label':'',
  'expansion': 'gorm',
  'gear': {
   '1': ['Gorment Mask', 'Gorment Sleeves', 'Gorment Suit', 'Gorment Boots', 'Regeneration Suit'],
   '2': ['Rib Blade', 'Knuckle Shield', 'Gaxe', 'Greater Gaxe', 'Riot Mace'],
   '3': ['Pulse Lantern', 'Gorn', 'Armor Spikes', 'Acid Tooth Dagger', 'Black Sword']},
  'armor_set': 'Gorment Armor',
 },
 'Inspired Crafting': {
   'label':'',
  'expansion': 'flower knight',
  'gear': {
   '1': ['Vespertine Satchel', 'Vespertine Foil', 'Vespertine Cello'],
   '2': ['Vespertine Arrow', 'Vespertine Bow'],
   '3': []},
 },
 'Lantern Hoard': {
   'label':'',
  'campaign': 'Lantern',
  'gear': {
   '1': [],
   '2': [],
   '3': []},
  'action': true,
  'num_actions': 5,
  'action_disabler': {
    1: {'location': ['Bone Smith']},
    2: {'location': ['Skinnery']},
    3: {'location': ['Organ Grinder']},
  },
 },
 'Leather Worker': {
   'label':'',
  'gear': {
   '1': ['Leather Mask', 'Leather Bracers', 'Leather Cuirass', 'Leather Skirt', 'Leather Boots'],
   '2': ['Round Leather Shield', 'Hunter Whip'],
   '3': []},
  'action': true,
  'armor_set': 'Leather Armor',
  'action_enabler': {'innovation': ['Ammonia']},
 },
 'Light Forging': {
   'label':'',
  'expansion': 'slenderman',
  'gear': {
   '1': ['Gloom Bracelets', 'Gloom-Coated Arrows', 'Gloom Mehndi', 'Dark Water Vial'],
   '2': ['Raptor-Worm Collar', 'Gloom Cream', 'Gloom Hammer'],
   '3': ['Slender Ovule', 'Gloom Katana', 'Gloom Sheath']},
  'action': true,
 },
 'Mask Maker': {
   'label':'',
  'gear': {
   '1': ['White Lion Mask', 'Antelope Mask', 'Phoenix Mask'],
   '2': ['Death Mask', 'Man Mask', 'God Mask'],
   '3': []},
  'action': true,
 },
 'Organ Grinder': {
   'label':'',
  'gear': {
   '1': ['Stone Noses', 'Fecal Salve', 'Monster Grease'],
   '2': ['Dried Acantus', 'Lucky Charm', 'Monster Tooth Necklace'],
   '3': []},
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'location': ['Stone Circle']},
  }
 },
 'Plumery': {
   'label':'',
  'gear': {
   '1': ['Phoenix Helm', 'Phoenix Gauntlet', 'Phoenix Plackart', 'Phoenix Faulds', 'Phoenix Greaves'],
   '2': ['Feather Shield', 'Bloom Sphere', 'Sonic Tomahawk', 'Hollow Sword', 'Arc Bow'],
   '3': ['Feather Mantle', 'Bird Bread', 'Hours Ring', 'Crest Crown', 'Hollowpoint Arrow']},
  'armor_set': 'Phoenix Armor',
 },
 'Sacred Pool': {
   'label':'',
  'campaign': 'Sun',
  'gear': {
   '1': [],
   '2': ['Sun Vestments', 'Sunring Bow'],
   '3': ['Apostle Crown', 'Prism Mace']},
  'action': true,
  'num_actions': 3,
 },
 'Silk Mill': {
   'label':'',
  'expansion': 'spidicules',
  'gear': {
   '1': ['Silk Turban', 'Silk Wraps', 'Silk Robes', 'Silk Sash', 'Silk Boots'],
   '2': ['Amber Poleaxe', 'Throwing Knife', 'Silk Whip', 'Hooded Scrap Katar', 'Amber Edge'],
   '3': ['Body Suit', 'Silk Bomb', 'Red Ring', 'Blue Ring', 'Green Ring']},
   'armor_set': 'Silk Armor',
 },
 'Skinnery': {
   'label':'',
  'gear': {
   '1': ['Rawhide Headband', 'Rawhide Gloves', 'Rawhide Vest', 'Rawhide Pants', 'Rawhide Boots'],
   '2': ['Bandages', 'Rawhide Drum', 'Rawhide Whip'],
   '3': []},
  'action': true,
  'armor_set': 'Rawhide Armor',
  'action_disabler': {'location': ['Leather Worker']},
 },
 'Skyreef Sanctuary': {
   'label':'',
  'expansion': 'sunstalker',
  'gear': {
   '1': ['Cycloid Scale Hood', 'Cycloid Scale Sleeves', 'Cycloid Scale Jacket', 'Cycloid Scale Skirt', 'Cycloid Scale Shoes'],
   '2': ['Sunspot Dart', 'Sunshark Bow', 'Sunshark Arrows', 'Denticle Axe', 'Skleaver', 'Ink Sword'],
   '3': ['Sunspot Lantern', 'Quiver and Sunstring', 'Shadow Salvia Shawl', 'Sun Lure and Hook', 'Sky Harpoon', 'Ink Blood Bow']},
  'armor_set': 'Cycloid Scale Armor',
 },
 'Stone Circle': {
   'label':'',
  'gear': {
   '1': ['Screaming Horns', 'Screaming Bracers', 'Screaming Coat', 'Screaming Skirt', 'Screaming Leg Warmers'],
   '2': ['Boss Mehndi', 'Beast Knuckle', 'Red Charm', 'Blood Paint'],
   '3': ['Bone Earrings', 'Green Charm', 'Blue Charm', 'Lance of Longinus']},
  'action': true,
  'armor_set': 'Screaming Armor',
  'action_enabler': {'innovation': ['Forbidden Dance']},
 },
 'The Sun': {
   'label':'',
  'campaign': 'Sun',
  'gear': {
   '1': [],
   '2': [],
   '3': []},
  'action': true,
  'num_actions': 5,
  'action_disabler': {
    1: {'location': ['Bone Smith']},
    2: {'location': ['Skinnery']},
    3: {'location': ['Organ Grinder']},
  },
 },
 'Throne': {
   'label':'',
  'campaign': 'Stars',
  'gear': {
   '1': [],
   '2': [],
   '3': []},
  'action': true,
  'num_actions': 5,
  'action_disabler': {
    1: {'location': ['Bone Smith']},
    2: {'location': ['Skinnery']},
    3: {'location': ['Organ Grinder']},
  },
 },
 'Weapon Crafter': {
   'label':'',
  'gear': {
   '1': ['Counterweighted Axe', 'Whistling Mace', 'Zanbato', 'Blood Sheath', 'Rainbow Katana'],
   '2': ['Skullcap Hammer', 'Scrap Sword', 'Scrap Dagger', 'Finger of God'],
   '3': []},
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'innovation': ['Scrap Smelting']},
  }
 },
 'Wet Resin Crafter': {
   'label':'',
  'expansion': 'dung beetle knight',
  'gear': {
   '1': ['Century Shoulder Pads', 'Century Greaves', 'Rubber Bone Harness', 'Scarab Circlet', 'Rainbow Wing Belt'],
   '2': ['DBK Errant Badge', 'Digging Claw', 'Seasoned Monster Meat', 'The Beetle Bomb'],
   '3': []},
  'armor_set': 'Rolling Armor',
 },

 'Hoh Druid': {
   'label':'HoH - Druid',
  'expansion': 'trial of champions',
  'group': 'HoH',
  'gear': {
   '1': ['Feral Helm', 'Feral Gauntlets', 'Feral Coat', 'Feral Faulds', 'Feral Boots'],
   '2': ['Huntsman Mask', 'Cruel Headsman', 'Thorn Whip', 'Haversack'],
   '3': []},
  'armor_set': 'Druid Armor',
 },
 'Hoh Gladiator': {
   'label':'HoH - Gladiator',
  'expansion': 'trial of champions',
  'group': 'HoH',
  'gear': {
   '1': ['Arena Helm', 'Arena Bracers', 'Arena Aegis', 'Arena Belt', 'Arena Greaves'],
   '2': ['Arena Pauldron', 'Coliseum Mask', 'The Assailant', 'Gladius'],
   '3': []},
  'armor_set': 'Gladiator Armor',
 },
 'Hoh Mage': {
   'label':'HoH - Mage',
  'expansion': 'trial of champions',
  'group': 'HoH',
  'gear': {
   '1': ['Magus Excerebro', 'Magus Digitabulum', 'Magus Spectris', 'Magus Inferious', 'Magus Tabernus'],
   '2': ['Radiance Mask', 'Rod of Lunacy', 'Nocturnus Potion', 'Gloom Potion'],
   '3': []},
  'armor_set': 'Mage Armor',
 },
 'Hoh Samurai': {
   'label':'HoH - Samurai',
  'expansion': 'trial of champions',
  'group': 'HoH',
  'gear': {
   '1': ['Ronin Kabuto', 'Ronin Kote', 'Ronin Dou', 'Ronin Kusazari', 'Ronin Suneate'],
   '2': ['Mengu Mask', 'Ancestral Katana', 'Bone Katana'],
   '3': []},
  'armor_set': 'Samurai Armor',
 },
 'Hol Bard': {
   'label':'HoL - Bard',
  'expansion': 'trial of champions',
  'group': 'HoL',
  'gear': {
   '1': ['Minstrel Hat', 'Minstrel Bracers', 'Minstrel Tunic', 'Minstrel Kilt', 'Minstrel Boots'],
   '2': ['Aramis Cape', 'Masquerade Mask', 'The Perpetrator'],
   '3': ['Phoenix Flute', 'Bass Drum']},
  'armor_set': 'Bard Armor',
 },
 'Hol Cleric': {
   'label':'HoL - Cleric',
  'expansion': 'trial of champions',
  'group': 'HoL',
  'gear': {
   '1': ['Ordained Shawl', 'Ordained Wrappings', 'Ordained Breastplate', 'Ordained Vest', 'Ordained Mules'],
   '2': ['Convalesce Mask', 'The Witness', 'Annointment Oil'],
   '3': []},
  'armor_set': 'Cleric Armor',
 },
 'Hol Monk': {
   'label':'HoL - Monk',
  'expansion': 'trial of champions',
  'group': 'HoL',
  'gear': {
   '1': ['Azure Shroud', 'Azure Kashaya', 'Azure Leg Wraps', 'Iron Fists'],
   '2': ['Verdant Shroud', 'Verdant Kashaya', 'Verdant Leg Wraps', 'Seer Mask', 'Twirling Blades'],
   '3': ['Sanguine Shroud', 'Sanguine Kashaya', 'Sanguine Leg Wraps', 'Prayer Beads']},
 },
 'Hol Paladin': {
   'label':'HoL - Paladin',
  'expansion': 'trial of champions',
  'group': 'HoL',
  'gear': {
   '1': ['Righteous Helm', 'Righteous Gauntlets', 'Righteous Breastplate', 'Righteous Mail', 'Righteous Greaves'],
   '2': ['Vigilance Mask', 'The Judge', 'Righteous Shield'],
   '3': []},
  'armor_set': 'Paladin Armor',
 },
 'Hos Assassin': {
   'label':'HoS - Assassin',
  'expansion': 'trial of champions',
  'group': 'HoS',
  'gear': {
   '1': ['Infiltrator Mantle', 'Infiltrator Bracers', 'Infiltrator Cloak', 'Infiltrator Pants', 'Infiltrator Boots'],
   '2': ['Omen Mask', 'Venomous Dagger', 'Concealed Katar'],
   '3': []},
  'armor_set': 'Assassin Armor',
 },
 'Hos Necromancer': {
   'label':'HoS - Necromancer',
  'expansion': 'trial of champions',
  'group': 'HoS',
  'gear': {
   '1': ['Ghastly Shroud', 'Ghastly Bracers', 'Ghastly Aegis', 'Ghastly Skirt', 'Ghastly Greaves'],
   '2': ['Ghastly Exoskeleton', 'Madness Mask', 'The Executioner', 'Voodoo Doll'],
   '3': ['Spirit Scepter', 'Curse Box', 'Dissection Kit']},
  'armor_set': 'Necromancer Armor',
 },
 'Hos Ranger': {
   'label':'HoS - Ranger',
  'expansion': 'trial of champions',
  'group': 'HoS',
  'gear': {
   '1': ['Rogue Shawl', 'Rogue Gauntlets', 'Rogue Vest', 'Rogue Skirt', 'Rogue Boots'],
   '2': ['Prowler Mask', 'Mighty Crossbow', 'Boundless Quiver'],
   '3': ['Poison Arrow', 'Blood Bolt', 'Grapple Arrow']},
  'armor_set': 'Ranger Armor',
 },
 'Hos Thief': {
   'label':'HoS - Thief',
  'expansion': 'trial of champions',
  'group': 'HoS',
  'gear': {
   '1': ['Shadow Shawl', 'Shadow Gloves', 'Shadow Cloak', 'Shadow Skirt', 'Shadow Boots'],
   '2': ['Stone Mask', 'Flaying Dagger', 'Caltrops'],
   '3': ['The Jury', 'Smoke Bomb']},
  'armor_set': 'Thief Armor',
 },

 'The Song Of Green Knight': {
   'label':'The Song of the Green Knight',
  'expansion': 'green knight armor',
  'gear': {
   '1': ['Green Helm', 'Green Gloves', 'Green Plate', 'Green Faulds', 'Green Boots'],
   '2': ['Fetorsaurus', 'Griswaldo'],
   '3': []},
  'armor_set': 'Green Armor',
 },

 'Gigacatarium': {
   'label':'Giga-Catarium',
   'expansion': 'gigalion',
  'gear': {
   '1': ['Hooked Claw Knife', 'Lion Slayer Cape', 'Dense Bone Arrows'],
   '2': ['Oxidized Beast Katar'],
   '3': []},
 },

 'Bronzesmith': {
   'label':'Bronzesmith',
   'expansion': 'allison ccg',
   'action': true,
'armor_set': 'Bronze Armor',
  'gear': {
   '1': ['Bronze Gauntlets', 'Bronze Cuirass', 'Bronze Greaves'],
   '2': ['Bronze Sword', 'Twilight Knight Amulet'],
   '3': []},
 },

 'Jellyfish Apothecary': {
   'expansion': 'drifter knight',
   'action': true,
  'gear': {
   '1': ['Vile Concoction', 'Morbid Concoction', 'Bloated Drinking Bladder'],
   '2': ['Drifters Pendant', 'Numbing Concoction'],
   '3': ['Psychedelic Concoction', 'Naginata', 'Iron Parasol']},
   'action_disabler': {'innovation': ['Venom Wine']},
  },
}


module.exports = {
 texts,
}
