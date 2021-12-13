const endeavor_img = '1 x'+imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

var texts = {
 'Monster Grease': {'resources':['2 x organ']},
 'First Aid Kit': {'resources':['1 x leather', '1 x perfect bone']},
 'Elder Earrings': {'resources':['1 x shank bone', '1 x scrap']},
 'Scavenger Kit': {'resources':['1 x scrap', '1 x perfect hide']},
 'Bug Trap': {'resources':['1 x perfect organ', '2 x bone']},
 'Lantern Sword': {'resources':['1 x iron', '4 x bone', '3 x hide']},
 'Lantern Dagger': {'resources':['1 x iron', '3 x leather', '2 x bone']},
 'Dragon Slayer': {'resources':['5 x iron', '3 x organ']},
 'Scrap Rebar': {'resources':['2 x scrap', '1 x organ']},
 'Scrap Lantern': {'resources':['1 x scrap', '1 x perfect organ']},
 'Ring Whip': {'resources':['1 x iron', '2 x organ', '3 x bone']},
 'Sonic Tomahawk': {'resources':['1 x small feathers', '1 x iron', '1 x hollow wing bone']},
 'Phoenix Gauntlet': {'resources':['1 x iron', '1 x leather', '1 x small feathers', '1 x bone'], 'set':['Phoenix']},
 'Boss Mehndi': {'resources':['1 x beast steak', '1 x bone']},
 'Red Charm': {'resources':['1 x perfect bone'], 'innovation': 'Pottery'},
 'Screaming Skirt': {'resources':['1 x pelt', '1 x hide'], 'set':['Screaming']},
 'Green Charm': {'resources':['1 x perfect hide'], 'innovation': 'Pottery'},
 'Blue Charm': {'resources':['1 x perfect organ'], 'innovation': 'Pottery'},
 'Polishing Lantern': {'resources':['1 x iron', '1 x organ', '1 x scrap']},
 'Zanbato': {'resources':['1 x perfect bone', '3 x scrap', '1 x hide'], 'innovation': 'Heat'},
 'Skullcap Hammer': {'resources':['1 x skull', '1 x scrap']},
 'Scrap Bone Spear': {'resources':['4 x bone', '1 x scrap'], 'innovation': 'Heat'},
}

const params = {
 'interaction': 'outer_join'
}

module.exports = {
 texts, params
}
