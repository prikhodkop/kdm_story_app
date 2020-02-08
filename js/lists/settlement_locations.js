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
  'action_disabler': {'location': ['Weapon Crafter']},
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
  'action_disabler': {'innovation': ['Albedo', 'Nigredo', 'Rubedo', 'Citrinitas']},
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
  'action_disabler': {
    1: {'location': ['Bone Smith']},
    2: {'location': ['Skinnery']},
    3: {'location': ['Organ Grinder']},
  },
 },
 'Leather Worker': {
  'gear': {
   '1': ['Leather Mask', 'Leather Bracers', 'Leather Cuirass', 'Leather Skirt', 'Leather Boots'],
   '2': ['Round Leather Shield', 'Hunter Whip'],
   '3': []},
  'action': true,
  'armor_set': 'Leather Armor',
  'action_enabler': {'innovation': ['Ammonia']},
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
  'action_disabler': {
    1: {'location': ['Stone Circle']},
  }
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
  'action_disabler': {'location': ['Leather Worker']},
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
  'action_enabler': {'innovation': ['Forbidden Dance']},
 },
 'The Sun': {
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
  'expansion': 'dung beetle knight',
  'gear': {
   '1': ['Century Shoulder Pads', 'Century Greaves', 'Rubber Bone Harness', 'Scarab Circlet', 'Rainbow Wing Belt'],
   '2': ['DBK Errant Badge', 'Digging Claw', 'Seasoned Monster Meat', 'The Beetle Bomb'],
   '3': []},
  'armor_set': 'Rolling Armor',
 },
}

module.exports = {
 settlement_locations,
}
