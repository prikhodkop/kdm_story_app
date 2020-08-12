const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

var texts = {
 'Tabard': {'resources':['1 x cloth', '1 x organ'], 'innovation': 'Paint', 'set':['Vagabond']},
 'Hard Breastplate': {'resources':['1 x leather', '1 x bone'], 'innovation': 'Heat', 'set':['Leather', 'Vagabond']},
 'Cloth Leggings': {'resources':['1 x cloth', '1 x hide'], 'innovation': 'Ammonia', 'set':['Vagabond']},
 'Lion Beast Katar': {'resources':['1 x lion claw', '1 x hide']},
 'Claw Head Arrow': {'resources':['1 x lion claw']},
 'King Spear': {'resources':['1 x lion claw', '1 x great cat bone']},
 'Cat Gut Bow': {'resources':['1 x sinew', '1 x bone']},
 'Cat Fang Knife': {'resources':['1 x elder cat teeth', '4 x organ']},
 'White Lion Helm': {'resources':['1 x white fur', '1 x great cat bone'], 'set':['White Lion']},
 'White Lion Gauntlet': {'resources':['1 x white fur', '1 x bone'], 'set':['White Lion', 'Brawler']},
 'White Lion Coat': {'resources':['1 x white fur', '1 x hide'], 'set':['White Lion']},
 'White Lion Skirt': {'resources':['1 x white fur', '1 x hide'], 'set':['White Lion']},
 'White Lion Boots': {'resources':['1 x white fur', '1 x hide'], 'set':['White Lion']},
 'Cat Eye Circlet': {'resources':['1 x eye of cat']},
 'Whisker Harp': {'resources':['1 x golden whiskers', '1 x bone']},
 'Lion Headdress': {'resources':['1 x shimmering mane']},
 'Lion Skin Cloak': {'resources':['2 x white fur'], 'set':['Brawler']},
 'Frenzy Drink': {'resources':['1 x lion testes']},
 'Stone Noses': {'resources':[endeavor_img]},
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
 'Lantern Helm': {'resources':['1 x iron', '7 x bone'], 'set':['Lantern']},
 'Lantern Gauntlets': {'resources':['2 x iron', '6 x leather'], 'set':['Lantern']},
 'Lantern Cuirass': {'resources':['2 x iron', '5 x leather'], 'set':['Lantern']},
 'Lantern Mail': {'resources':['1 x iron', '5 x organ'], 'set':['Lantern', 'Warlord']},
 'Lantern Greaves': {'resources':['1 x iron', '5 x leather'], 'set':['Lantern', 'Warlord']},
 'Scrap Shield': {'resources':['3 x bone', '2 x scrap', '3 x leather']},
 'Beacon Shield': {'resources':['2 x iron', '3 x leather', '4 x bone']},
 'Ring Whip': {'resources':['1 x iron', '3 x organ', '3 x bone']},
 'Bone Dagger': {'resources':['1 x bone']},
 'Bone Blade': {'resources':['1 x bone']},
 'Bone Axe': {'resources':['1 x bone', '1 x organ']},
 'Bone Darts': {'resources':['1 x bone']},
 'Bone Club': {'resources':['3 x bone']},
 'Skull Helm': {'resources':['2 x bone', '-or-', '1 x skull'], 'set':['Brawler']},
 'Bone Pickaxe': {'resources':['1 x bone', '1 x leather'], 'innovation': 'Ammonia'},
 'Bone Sickle': {'resources':['1 x bone', '1 x leather'], 'innovation': 'Ammonia'},
 'Dragon Chakram': {'resources':['1 x horn fragment', '2 x organ', '1 x leather']},
 'Dragon Bite Bolt': {'resources':['2 x radioactive dung']},
 'Talon Knife': {'resources':['2 x king\'s claw', '2 x organ']},
 'Nuclear Knife': {'resources':['1 x radiant heart', '2 x horn fragment', '2 x scrap']},
 'Red Power Core': {'resources':['1 x pituitary gland', '1 x iron']},
 'Dragonskull Helm': {'resources':['1 x horn fragment', '2 x bone', '1 x husk'], 'set':['Dragon']},
 'Dragon Gloves': {'resources':['1 x cabled vein', '1 x husk', '1 x leather', '1 x iron'], 'set':['Dragon']},
 'Dragon Mantle': {'resources':['1 x horn fragment', '1 x iron', '1 x hardened ribs', '1 x leather'], 'set':['Dragon']},
 'Dragon Belt': {'resources':['2 x veined wing', '1 x organ', '1 x iron'], 'set':['Dragon']},
 'Dragon Boots': {'resources':['1 x king\'s claws', '1 x husk', '1 x organ', '1 x iron'], 'set':['Dragon']},
 'Blast Shield': {'resources':['1 x king\'s tongue', '1 x iron ']},
 'Shielded Quiver': {'resources':['1 x cabled vein', '2 x veined wing', '2 x leather']},
 'Blast Sword': {'resources':['1 x horn fragment', '3 x organ']},
 'Nuclear Scythe': {'resources':['1 x radiant heart', '2 x king\'s claw', '2 x scrap']},
 'Blue Power Core': {'resources':['1 x shining liver', '1 x iron']},
 'Survivors Lantern': {'resources':[endeavor_img], 'innovation': 'Final Lantern'},
 'Rib Blade': {'resources':['1 x meaty rib', '1 x hide']},
 'Knuckle Shield': {'resources':['1 x mammoth hand', '2 x bone']},
 'Gaxe': {'resources':['1 x dense bone', '1 x stout hide']},
 'Greater Gaxe': {'resources':['1 x dense bone', '1 x jiggling lard']},
 'Riot Mace': {'resources':['1 x pure bulb', '1 x stout kidney', '1 x jiggling lard', '1 x dense bone']},
 'Gorment Mask': {'resources':['1 x stout hide', '1 x handed skull'], 'set':['Gorment']},
 'Gorment Sleeves': {'resources':['1 x stout hide', '1 x bone'], 'set':['Gorment']},
 'Gorment Suit': {'resources':['3 x stout hide', '1 x stout kidney'], 'set':['Gorment']},
 'Gorment Boots': {'resources':['1 x stout hide', '1 x bone'], 'set':['Gorment']},
 'Regeneration Suit': {'resources':['1 x stomach lining', '1 x jiggling lard'], 'set':['Gorment']},
 'Pulse Lantern': {'resources':['1 x milky eye', '1 x active thyroid']},
 'Gorn': {'resources':['1 x stout heart', '3 x bone']},
 'Armor Spikes': {'resources':['1 x stout vertebrae', '1 x scrap']},
 'Acid Tooth Dagger': {'resources':['1 x acid gland', '2 x bone']},
 'Black Sword': {'resources':['1 x gormite', '1 x handed skull']},
 'Round Leather Shield': {'resources':['1 x leather', '1 x bone', '1 x hide']},
 'Hunter Whip': {'resources':['2 x leather', '1 x bone']},
 'Leather Mask': {'resources':['1 x leather', '1 x scrap'], 'set':['Leather']},
 'Leather Bracers': {'resources':['1 x leather', '1 x hide'], 'set':['Leather', 'Vagabond', 'Warlord']},
 'Leather Cuirass': {'resources':['1 x leather', '1 x bone'], 'set':['Leather', 'Vagabond']},
 'Leather Skirt': {'resources':['1 x leather'], 'set':['Leather', 'Dancer', 'Vagabond']},
 'Leather Boots': {'resources':['1 x leather', '1 x hide'], 'set':['Leather', 'Dancer', 'Vagabond']},
 'White Lion Mask': {'resources':[endeavor_img, '1 x shimmering mane', '6 x bone', '4 x organ']},
 'Antelope Mask': {'resources':[endeavor_img, '1 x pelt', '6 x bone', '4 x organ']},
 'Phoenix Mask': {'resources':[endeavor_img, '1 x small feather', '6 x bone', '4 x organ']},
 'Death Mask': {'resources':[endeavor_img, '-1 population', '6 x bone', '4 x organ']},
 'Man Mask': {'resources':[endeavor_img, '1 x skull', '6 x bone', '4 x organ']},
 'God Mask': {'resources':[endeavor_img, '1 x founding stone', '6 x bone', '4 x organ']},
 'Feather Shield': {'resources':['2 x small feathers', '1 x muculent droppings']},
 'Bloom Sphere': {'resources':['1 x small hand parasites', '3 x bone']},
 'Sonic Tomahawk': {'resources':['1 x small feathers', '1 x scrap', '1 x hollow wing bone']},
 'Hollow Sword': {'resources':['1 x hollow wing bone', '2 x bone', '2 x hide']},
 'Arc Bow': {'resources':['1 x phoenix whisker', '1 x wishbone', '1 x scrap']},
 'Phoenix Helm': {'resources':['1 x hollow wing bone', '1 x small feather', '1 x bone'], 'set':['Phoenix', 'Dancer']},
 'Phoenix Gauntlet': {'resources':['1 x iron', '1 x leather', '1 x small feathers', '1 x bone'], 'set':['Phoenix']},
 'Phoenix Plackart': {'resources':['1 x iron', '1 x leather', '1 x tail feathers', '1 x hide'], 'set':['Phoenix', 'Warlord']},
 'Phoenix Faulds': {'resources':['1 x iron', '1 x leather', '1 x tail feathers', '1 x organ'], 'set':['Phoenix', 'Brawler']},
 'Phoenix Greaves': {'resources':['1 x iron', '1 x leather', '1 x small feathers', '1 x organ'], 'set':['Phoenix', 'Brawler']},
 'Feather Mantle': {'resources':['2 x tail feathers', '1 x scrap']},
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
 'Silk Turban': {'resources':['1 x silken nervous system', '3 x silk', '1 x hide'], 'set':['Silk']},
 'Silk Wraps': {'resources':['1 x thick web silk', '1 x silk'], 'set':['Silk']},
 'Silk Robes': {'resources':['2 x silk', '1 x hide', '1 x exoskeleton'], 'set':['Silk']},
 'Silk Sash': {'resources':['2 x silk', '1 x bone', '1 x hide'], 'set':['Silk']},
 'Silk Boots': {'resources':['1 x large appendage', '1 x silk'], 'set':['Silk']},
 'Body Suit': {'resources':['5 x silk', '2 x hide', '1 x spinnerets']},
 'Silk Bomb': {'resources':['2 x resources', '2 x silk']},
 'Red Ring': {'resources':['3 x venom sac', '2 x arachnid heart'], 'innovation': 'Legless Ball'},
 'Blue Ring': {'resources':['3 x eyeballs', '2 x stomach'], 'innovation': 'Legless Ball'},
 'Green Ring': {'resources':['3 x unlaid legs', '2 x spinnerets'], 'innovation': 'Legless Ball'},
 'Bandages': {'resources':['1 x hide']},
 'Rawhide Drum': {'resources':['1 x bone', '1 x hide'], 'innovation': 'Drums'},
 'Rawhide Whip': {'resources':['1 x bone', '1 x hide'], 'innovation': 'Ammonia'},
 'Rawhide Headband': {'resources':['1 x hide'], 'set':['Rawhide']},
 'Rawhide Gloves': {'resources':['1 x hide'], 'set':['Rawhide']},
 'Rawhide Vest': {'resources':['1 x hide'], 'set':['Rawhide', 'Dancer']},
 'Rawhide Pants': {'resources':['1 x hide'], 'set':['Rawhide']},
 'Rawhide Boots': {'resources':['1 x hide'], 'set':['Rawhide']},
 'Sunspot Dart': {'resources':['1 x sunstones', '3 x bone']},
 'Sunshark Bow': {'resources':['2 x huge sunteeth', '1 x organ', '1 x sunshark bone', '1 x salt']},
 'Sunshark Arrows': {'resources':['3 x small sunteeth', '1 x bone', '1 x sunshark fin', '1 x salt']},
 'Denticle Axe': {'resources':['1 x 1.000 year sunspot', '1 x salt', '1 x black lens', '1 x iron', '1 x bone']},
 'Skleaver': {'resources':['2 x 1.000 year sunspot', '1 x salt', '1 x black lens', '1 x sunshark bone']},
 'Ink Sword': {'resources':['1 x 3.000 year sunspot', '4 x hide', '1 x shadow ink gland', '1 x iron']},
 'Cycloid Scale Hood': {'resources':['1 x cycloid scales', '1 x hide', '1 x prismatic gills'], 'set':['Cycloid Scale']},
 'Cycloid Scale Sleeves': {'resources':['1 x cycloid scales', '1 x bone', '1 x small sunteeth', '1 x salt'], 'set':['Cycloid Scale']},
 'Cycloid Scale Jacket': {'resources':['1 x cycloid scales', '1 x scrap', '1 x huge sunteeth', '1 x salt'], 'set':['Cycloid Scale']},
 'Cycloid Scale Skirt': {'resources':['1 x cycloid scales', '1 x hide', '1 x huge sunteeth'], 'set':['Cycloid Scale']},
 'Cycloid Scale Shoes': {'resources':['1 x cycloid scales', '1 x bone', '1 x shadow tentacles'], 'set':['Cycloid Scale']},
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
 'Screaming Horns': {'resources':['1 x spiral horn', '1 x scrap'], 'set':['Screaming', 'Warlord']},
 'Screaming Bracers': {'resources':['1 x pelt', '1 x hide'], 'set':['Screaming', 'Dancer']},
 'Screaming Coat': {'resources':['1 x pelt', '1 x bone'], 'set':['Screaming']},
 'Screaming Skirt': {'resources':['1 x pelt'], 'set':['Screaming']},
 'Screaming Leg Warmers': {'resources':['1 x pelt', '1 x hide'], 'set':['Screaming']},
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
 'Rainbow Wing Belt': {'resources':['1 x scarab wing', '1 x organ', '1 x hide'], 'set':['Rolling']},
 'Digging Claw': {'resources':['1 x century fingernails', '2 x scrap', '2 x resources']},
 'Seasoned Monster Meat': {'resources':['1 x underplate fungus', '2 x organ']},
 'Century Shoulder Pads': {'resources':['1 x scarab shell', '3 x leather', '1 x iron'], 'set':['Rolling']},
 'Scarab Circlet': {'resources':['1 x compound eye', '1 x hide', '1 x bone'], 'innovation': 'Nightmare Corn', 'set':['Rolling']},
 'Century Greaves': {'resources':['1 x scarab shell', '1 x beetle horn', '2 x iron'], 'innovation': 'Nightmare Corn', 'set':['Rolling']},
 'Rubber Bone Harness': {'resources':['1 x underplate fungus', '1 x century fingernails', '2 x leather'], 'innovation': 'Vampiric Artichoke', 'set':['Rolling']},
 'The Beetle Bomb': {'resources':['2 x scarab shell', '2 x preserved caustic dung', '5 x resources'], 'innovation': 'Vampiric Artichoke'},

 'Gloom Bracelets': {'resources':['1 x bone', '1 x lion tail', '1 x scrap', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
 'Gloom-Coated Arrows': {'resources':['2 x bone', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
 'Gloom Mehndi': {'resources':['3 x organ', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
 'Dark Water Vial': {'resources':['1 x organ', '1 x dark water'], 'innovation': 'Dark Water Research 1'},
 'Raptor-Worm Collar': {'resources':['1 x organ', '1 x scrap', '1 x dark water'], 'innovation': 'Dark Water Research 2'},
 'Gloom Cream': {'resources':['1 x love juice', '1 x hide', '2 x dark water'], 'innovation': 'Dark Water Research 2'},
 'Gloom Hammer': {'resources':['3 x skull', '1 x iron', '1 x organ', '3 x dark water'], 'innovation': 'Dark Water Research 2'},
 'Slender Ovule': {'resources':['1 x phoenix eye', '4 x dark water'], 'innovation': 'Dark Water Research 3'},
 'Gloom Katana': {'resources':['1 x iron', '1 x crystal mold', '2 x dark water'], 'innovation': 'Dark Water Research 3'},
 'Gloom Sheath': {'resources':['1 x shank bone', '2 x organ', '2 x dark water'], 'innovation': 'Dark Water Research 3'},
 'Healing Potion': {'resources':['2 x organ'], 'roll': '7-12', 'gormchymy':{}},
 'Wisdom Potion': {'resources':['2 x organ'], 'roll': '13-18', 'gormchymy':{}},
 'Steadfast Potion': {'resources':['2 x organ'], 'roll': '19-24', 'gormchymy':{}},
 'Power Potion': {'resources':['2 x organ'], 'roll': '25-30', 'gormchymy':{}},
 'Life Elixir': {'resources':['2 x organ'], 'roll': '31-36', 'gormchymy':{}},

 'Vespertine Satchel': {'resources':['1 x lantern bloom', '1 x leather']},
 'Vespertine Foil': {'resources':['1 x osseous bloom', '1 x bone', '1 x scrap']},
 'Vespertine Cello': {'resources':['1 x lantern bud', '2 x flowers']},
 'Vespertine Arrow': {'resources':['1 x flower']},
 'Vespertine Bow': {'resources':['1 x osseous bloom', '1 x sighing bloom', '1 x organ', '1 x hide']},

 'Ancestral Katana': {'resources':[endeavor_img, '2 x sunshark bone'], 'innovation': 'Ancestral Katana' },
 'Annointment Oil': {'resources':['2 x hide', '1 x bone']},
 'Aramis Cape': {'resources':['1 x silk', '1 x hide']},
 'Arena Aegis': {'resources':['1 x leather', '1 x bone'], 'set':['Gladiator']},
 'Arena Belt': {'resources':['1 x leather', '1 x scrap'], 'set':['Gladiator']},
 'Arena Bracers': {'resources':['1 x leather', '2 x hide'], 'set':['Gladiator']},
 'Arena Greaves': {'resources':['1 x leather', '1 x hide'], 'set':['Gladiator']},
 'Arena Helm': {'resources':['1 x iron', '4 x bone', '1 x leather'], 'innovation': 'Blacksmith', 'set':['Gladiator']},
 'Arena Pauldron': {'resources':['1 x leather', '1 x hide']},
 'Azure Kashaya': {'resources':['2 x silk', '1 x hide'], 'set':['Monk Blue']},
 'Azure Leg Wraps': {'resources':['1 x leather', '1 x bone'], 'set':['Monk Blue']},
 'Azure Shroud': {'resources':['1 x silk', '1 x hide'], 'set':['Monk Blue']},
 'Bass Drum': {'resources':['2 x hide', '1 x bone'], 'innovation': 'Drums'},
 'Blood Bolt': {'resources':['1 x nightmare tick', '1 x shank bone']},
 'Bone Katana': {'resources':['3 x bone']},
 'Boundless Quiver': {'resources':['1 x leather', '1 x scrap']},
 'Caltrops': {'resources':['2 x broken lantern']},
 'Coliseum Mask': {'resources':[endeavor_img, '1 x handed skull', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Concealed Katar': {'resources':['1 x scrap', '1 x hide'], 'innovation': 'Weapon Crafter'},
 'Convalesce Mask': {'resources':[endeavor_img, '1 x iron', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Cruel Headsman': {'resources':['2 x bone', '1 x scrap'], 'innovation': 'Weapon Crafter'},
 'Curse Box': {'resources':['Sacrifice a survivor with the King\'s Curse', '-1 population']},
 'Dissection Kit': {'resources':['1 x leather', '1 x scrap']},
 'Feral Boots': {'resources':['1 x white fur', '1 x large flat tooth'], 'set':['Druid']},
 'Feral Coat': {'resources':['1 x shimmering mane', '1 x pelt'], 'set':['Druid']},
 'Feral Faulds': {'resources':['1 x pelt'], 'set':['Druid']},
 'Feral Gauntlets': {'resources':['1 x curious hand', '1 x lion claw'], 'set':['Druid']},
 'Feral Helm': {'resources':['1 x spiral horn', '1 x scrap'], 'set':['Druid']},
 'Flaying Dagger': {'resources':['2 x bone', '1 x scrap'], 'innovation': 'Weapon Crafter'},
 'Ghastly Aegis': {'resources':['1 x leather', '1 x husk', '1 x hide'], 'set':['Necromancer']},
 'Ghastly Bracers': {'resources':['1 x cabled vein', '1 x hide'], 'set':['Necromancer']},
 'Ghastly Exoskeleton': {'resources':['1 x stout vertebrae', '2 x bone']},
 'Ghastly Greaves': {'resources':['1 x cabled vein', '1 x hide'], 'set':['Necromancer']},
 'Ghastly Shroud': {'resources':['1 x dragon iron', '1 x hide'], 'set':['Necromancer']},
 'Ghastly Skirt': {'resources':['1 x veined wing', '1 x hide'], 'set':['Necromancer']},
 'Gladius': {'resources':['2 x bone', '1 x scrap'], 'innovation': 'Weapon Crafter'},
 'Gloom Potion': {'resources':['1 x dark water', '1 x shadow tentacles']},
 'Grapple Arrow': {'resources':['2 x scrap', '1 x shank bone']},
 'Haversack': {'resources':['2 x leather', '1 x bone']},
 'Huntsman Mask': {'resources':[endeavor_img, '1 x golden whiskers', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Infiltrator Boots': {'resources':['1 x hide', '1 x bone', '1 x dark water'], 'set':['Assassin']},
 'Infiltrator Bracers': {'resources':['1 x hide', '1 x dark water'], 'set':['Assassin']},
 'Infiltrator Cloak': {'resources':['1 x screaming brain', '1 x dark water', '1 x hide'], 'set':['Assassin']},
 'Infiltrator Mantle': {'resources':['1 x hide', '1 x scrap', '1 x dark water'], 'set':['Assassin']},
 'Infiltrator Pants': {'resources':['1 x hide', '1 x dark water'], 'set':['Assassin']},
 'Iron Fists': {'resources':['1 x scrap', '2 x bone']},
 'Madness Mask': {'resources':[endeavor_img, '1 x screaming brain', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Magus Digitabulum': {'resources':['1 x phoenix eye', '1 x hide'], 'set':['Mage']},
 'Magus Excerebro': {'resources':['1 x screaming brain', '1 x hide'], 'set':['Mage']},
 'Magus Inferious': {'resources':['1 x organ', '1 x hide'], 'set':['Mage']},
 'Magus Spectris': {'resources':['1 x prismatic gills', '1 x hide'], 'set':['Mage']},
 'Magus Tabernus': {'resources':['2 x hide'], 'set':['Mage']},
 'Masquerade Mask': {'resources':[endeavor_img, '1 x scarab shell', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Mengu Mask': {'resources':[endeavor_img, '1 x hardened ribs', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Mighty Crossbow': {'resources':['1 x great cat bone', '1 x sinew', '1 x bone'], 'innovation': 'Weapon Crafter'},
 'Minstrel Boots': {'resources':['1 x silk', '1 x hide', '1 x organ'], 'set':['Bard']},
 'Minstrel Bracers': {'resources':['1 x silk', '1 x hide'], 'set':['Bard']},
 'Minstrel Hat': {'resources':['1 x silk', '1 x hide', '1 x tail feathers'], 'set':['Bard']},
 'Minstrel Kilt': {'resources':['1 x silk', '1 x hide', '1 x organ'], 'set':['Bard']},
 'Minstrel Tunic': {'resources':['1 x silk', '2 x bone'], 'set':['Bard']},
 'Nocturnus Potion': {'resources':['1 x milky eye', '1 x compound eye']},
 'Omen Mask': {'resources':[endeavor_img, '-1 population', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Ordained Breastplate': {'resources':['2 x hide'], 'set':['Cleric']},
 'Ordained Mules': {'resources':['2 x hide'], 'set':['Cleric']},
 'Ordained Shawl': {'resources':['2 x hide'], 'set':['Cleric']},
 'Ordained Vest': {'resources':['2 x hide'], 'set':['Cleric']},
 'Ordained Wrappings': {'resources':['2 x hide'], 'set':['Cleric']},
 'Phoenix Flute': {'resources':['1 x hollow wing bones', '1 x hide']},
 'Poison Arrow': {'resources':['1 x pustules', '1 x shank bone']},
 'Prayer Beads': {'resources':['1 x ???', '1 x wishbone'], 'innovation': 'Heat'},
 'Prowler Mask': {'resources':[endeavor_img, '2 x fresh acantus', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Radiance Mask': {'resources':[endeavor_img, '2 x cycloid scales', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Righteous Breastplate': {'resources':['2 x iron', '2 x leather'], 'set':['Paladin'], 'innovation': 'Blacksmith'},
 'Righteous Gauntlets': {'resources':['2 x iron', '6 x leather'], 'set':['Paladin'], 'innovation': 'Blacksmith'},
 'Righteous Greaves': {'resources':['1 x iron', '5 x leather'], 'set':['Paladin'], 'innovation': 'Blacksmith'},
 'Righteous Helm': {'resources':['1 x iron', '7 x bone'], 'set':['Paladin'], 'innovation': 'Blacksmith'},
 'Righteous Mail': {'resources':['2 x iron', '1 x leather', '1 x organ'], 'set':['Paladin'], 'innovation': 'Blacksmith'},
 'Righteous Shield': {'resources':['1 x scrap', '1 x hide'], 'innovation': 'Blacksmith'},
 'Rod of Lunacy': {'resources':['1 x brain root', '1 x bone'], 'innovation': 'Weapon Crafter'},
 'Rogue Boots': {'resources':['1 x hide', '1 x muscly gums'], 'set':['Ranger']},
 'Rogue Gauntlets': {'resources':['1 x hide', '1 x muscly gums'], 'set':['Ranger']},
 'Rogue Shawl': {'resources':['1 x hide', '1 x eye of cat'], 'set':['Ranger']},
 'Rogue Skirt': {'resources':['1 x hide', '1 x scrap'], 'set':['Ranger']},
 'Rogue Vest': {'resources':['1 x hide', '1 x bone'], 'set':['Ranger']},
 'Ronin Dou': {'resources':['1 x leather', '1 x bone'], 'set':['Samurai']},
 'Ronin Kabuto': {'resources':['1 x leather', '2 x scrap'], 'set':['Samurai']},
 'Ronin Kote': {'resources':['1 x leather', '1 x hide'], 'set':['Samurai']},
 'Ronin Kusazari': {'resources':['1 x leather', '1 x hide'], 'set':['Samurai']},
 'Ronin Suneate': {'resources':['1 x leather', '1 x hide'], 'set':['Samurai']},
 'Sanguine Kashaya': {'resources':['2 x silk', '1 x hide'], 'set':['Monk Red']},
 'Sanguine Leg Wraps': {'resources':['1 x leather', '1 x bone'], 'set':['Monk Red']},
 'Sanguine Shroud': {'resources':['1 x silk', '1 x hide'], 'set':['Monk Red']},
 'Seer Mask': {'resources':[endeavor_img, '1 x iron', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Shadow Boots': {'resources':['1 x hide', '1 x bone', '1 x dark water'], 'set':['Thief']},
 'Shadow Cloak': {'resources':['1 x hide', '1 x organ', '1 x dark water'], 'set':['Thief']},
 'Shadow Gloves': {'resources':['1 x hide', '1 x dark water'], 'set':['Thief']},
 'Shadow Shawl': {'resources':['1 x hide', '1 x dark water'], 'set':['Thief']},
 'Shadow Skirt': {'resources':['1 x hide', '1 x phoenix eye', '1 x dark water'], 'set':['Thief']},
 'Smoke Bomb': {'resources':['1 x scrap', '1 x musculent droppings']},
 'Spirit Scepter': {'resources':['1 x curious hand', '1 x eye of cat'], 'innovation': 'Weapon Crafter'},
 'Stone Mask': {'resources':[endeavor_img, '1 x founding stone', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'The Assailant': {'resources':['1 x stout vertebrae', '1 x scrap'], 'innovation': 'Weapon Crafter'},
 'The Executioner': {'resources':['1 x king\'s claws', '1 x great cat bone'], 'innovation': 'Weapon Crafter'},
 'The Judge': {'resources':['2 x bone', '2 x scrap'], 'innovation': 'Weapon Crafter'},
 'The Jury': {'resources':['1 x lion tail', '1 x lion claw']},
 'The Perpetrator': {'resources':['1 x scrap', '2 x bone'], 'innovation': 'The Perpetrator'},
 'The Witness': {'resources':['2 x bone', '1 x hide', '1 x scrap'], 'innovation': 'Weapon Crafter'},
 'Thorn Whip': {'resources':['1 x fresh acantus', '1 x bone']},
 'Twirling Blades': {'resources':['1 x scrap', '2 x bone'], 'innovation': 'Weapon Crafter'},
 'Venomous Dagger': {'resources':['1 x acid gland', '1 x venom sac'], 'innovation': 'Weapon Crafter'},
 'Verdant Kashaya': {'resources':['2 x silk', '1 x hide'], 'set':['Monk Green']},
 'Verdant Leg Wraps': {'resources':['1 x leather', '1 x bone'], 'set':['Monk Green']},
 'Verdant Shroud': {'resources':['1 x silk', '1 x hide'], 'set':['Monk Green']},
 'Vigilance Mask': {'resources':[endeavor_img, '1 x iron', '6 x bone', '4 x organ'], 'innovation': 'Mask Maker'},
 'Voodoo Doll': {'resources':['1 x crab spider', '1 x organ', '1 x ???']},

 'Green Helm': {'resources':['1 x scell', '1 x iron', '1 x beetle horn', '1 x DBK Errant Badge'], 'innovation': 'Green Helm', 'set':['Green']},
 'Green Gloves': {'resources':['1 x Hunter\'s Heart', '1 x iron', '1 x jiggling lard'], 'innovation': 'Green Gloves', 'set':['Green']},
 'Green Plate': {'resources':['1 x Lion Knight\'s Left Claw', '2 x iron', '3 x leather', '1 x scarab shell'], 'innovation': 'Citrinitas', 'set':['Green']},
 'Green Faulds': {'resources':['1 x elytra', '1 x gormite', '1 x scell', '1 x lantern bloom'], 'innovation': 'Choreia', 'set':['Green']},
 'Green Boots': {'resources':['1 x iron', '1 x Flower Knight Badge', '1 x Calcified Greaves', '3 x bone'], 'innovation': 'Forbidden Dance', 'set':['Green']},
 'Griswaldo': {'resources':['1 x gormite', '1 x iron', '1 x stomach lining', '1 x Calcified Juggernaut Blade'], 'innovation': 'Griswaldo', 'set':['Green']},
 'Fetorsaurus': {'resources':['1 x Beacon Shield', '1 x underplate fungus', '1 x sleeping virus flower', '1 x Elixir of Life'], 'innovation': 'Blacksmith', 'set':['Green']},

 'Hooked Claw Knife': {'resources':['1 x hooked claw', '1 x elder cat teeth', '2 x organ']},
'Lion Slayer Cape': {'resources':['1 x hooked claw', '2 x white fur', '1 x shimmering mane']},
'Dense Bone Arrows':{'resources':['1 x hooked claw', '3 x great cat bone', '2 x leather', '2 x iron'], 'innovation': 'Blacksmith'},
 'Oxidized Beast Katar':{'resources':['1 x lion beast katar', '2 x hooked claw', '1 x iron', '2 x bone'], 'innovation': 'Oxidation'},
}

module.exports = {
 texts,
}
