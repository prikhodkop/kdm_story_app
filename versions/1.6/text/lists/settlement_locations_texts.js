const texts = {
 'Barber Surgeon': {
  'label':'',
  'gear': {
   '1': ['First Aid Kit', 'Almanac', 'Musk Bomb', 'Red Charm'],
   '2': ['Scavenger Kit', 'Bug Trap', 'Blue Charm', 'Green Charm'],
   '3': []},
  'action': true,
 },
 'Blacksmith': {
   'label':'',
  'gear': {
   '1': ['Lantern Helm', 'Lantern Gauntlets', 'Lantern Cuirass', 'Lantern Mail', 'Lantern Greaves'],
   '2': ['Lantern Sword', 'Lantern Dagger', 'Lantern Glaive', 'Dragon Slayer','Perfect Slayer'],
   '3': ['Scrap Shield', 'Beacon Shield', 'Ring Whip', 'Polishing Lantern']},
  'armor_set': 'Lantern Armor',
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
   1: {'location': ['Barber Surgeon']},
  }
 },
 'Plumery': {
   'label':'',
  'gear': {
   '1': ['Phoenix Helm', 'Phoenix Gauntlets', 'Phoenix Plackart', 'Phoenix Faulds', 'Phoenix Greaves'],
   '2': ['Feather Shield', 'Bloom Sphere', 'Sonic Tomahawk', 'Hollow Sword', 'Arc Bow', 'Finger of God', 'Rainbow Katana'],
   '3': ['Feather Mantle', 'Bird Bread', 'Hours Ring', 'Crest Crown', 'Hollowpoint Arrow', 'Blood Sheath']},
  'armor_set': 'Phoenix Armor',
 },
 'Stone Circle': {
   'label':'',
  'gear': {
   '1': ['Screaming Horns', 'Screaming Bracers', 'Screaming Coat', 'Screaming Skirt', 'Screaming Leg Warmers'],
   '2': ['Boss Mehndi', 'Beast Knuckle', 'Brain Mint', 'Blood Paint'],
   '3': ['Bone Earrings', 'Speed Powder', 'Elder Earrings', 'Lance of Longinus']},
  'action': true,
  'armor_set': 'Screaming Armor',
  'action_enabler': {'innovation': ['Forbidden Dance']},
 },
 'Weapon Crafter': {
   'label':'',
  'gear': {
   '1': ['Counterweighted Axe', 'Whistling Mace', 'Scrap Lantern', 'Scrap Rebar', 'Zanbato'],
   '2': ['Skullcap Hammer', 'Scrap Sword', 'Scrap Dagger', 'Scrap Bone Spear'],
   '3': []},
  'action': true,
  'num_actions': 2,
  'action_disabler': {
    1: {'innovation': ['Scrap Smelting']},
  }
 },
}

const params = {
 'interaction': 'inner_join'
}

module.exports = {
 texts, params
}
