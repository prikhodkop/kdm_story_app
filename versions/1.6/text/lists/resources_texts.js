const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {

'qqq': {'label': '???', 'group_name':'Basic', 'image': 'true', 'type': 'organ/bone/hide/consumable', 'text': '<i>You have no idea what monster bit this is.</i><br /><br />Can be used as a bone, organ, or hide!<br /><br />Drop chance: 2/24.'},
'Broken Lantern': {'image': 'true', 'group_name':'Basic', 'type': 'scrap', 'text': '<i>Remains of an extinguished lantern.</i><br /><br />Drop chance: 2/24.'},
'Love Juice': {'image': 'true', 'group_name':'Basic', 'type': 'organ/consumable', 'text': 'During the settlement phase, you may archive this to trigger '+event_img+'<b>Intimacy</b>. Nominated survivors must be able to consume.<br /><br />Drop chance: 2/24.'},
'Lump of Atnas': {'image': 'true', 'group_name':'Basic', 'type': 'hide/bone/organ', 'text': 'Nostrils flair with delight. A pungent, pine scent emanates from the quivering cube. At the start of the settlement phase, if there are 5 or more <b>Cubes of Atnas</b> in settlement storage, their scent draws a survivor, sniffing through the darkness. Gain +1 population, this survivors has a random disorder.<br /><br />Drop chance: 0/24.'},
'Monster Bone': {'image': 'true', 'group_name':'Basic', 'type': 'bone', 'text': '<i>A bone suitable for crafting.</i><br /><br />Drop chance: 4/24.'},
'Monster Hide': {'image': 'true', 'group_name':'Basic', 'type': 'hide', 'text': '<i>The skin of a beast.</i><br /><br />Drop chance: 7/24.'},
'Monster Organ': {'image': 'true', 'group_name':'Basic', 'type': 'organ/consumable', 'text': 'If you <b>consume</b> this, archive this card. Roll 1d10:<br /><b style=\"color:#cc0;\">6+</b><div style="font-size:0.9em;display: inline;"> - you contract a parasite. Archive all consumable gear in your grid now.</div><br /><br />Drop chance: 3/24.'},
'Perfect Bone': {'image': 'true', 'group_name':'Basic', 'type': 'perfect/bone', 'text': '<i>A mind numbingly perfect bone.</i><br /><br />Drop chance: 1/24.'},
'Perfect Hide': {'image': 'true', 'group_name':'Basic', 'type': 'perfect/hide', 'text': '<i>Supreme texture.</i><br /><br />Drop chance: 1/24.'},
'Perfect Organ': {'image': 'true', 'group_name':'Basic', 'type': 'perfect/organ/consumable', 'text': 'If you <b>consume</b> this, archive this card. Roll 1d10:<br /><b style=\"color:#cc0;\">6+</b><div style="font-size:0.9em;display: inline;"> - you contract a millenium parasite and gain +10 Hunt XP.</div><br /><br />Drop chance: 1/24.'},
'Skull': {'image': 'true', 'group_name':'Basic', 'type': 'bone', 'text': 'When you gain this, a survivor of your choice gains +1 insanity.<br /><br />Drop chance: 1/24.'},
'Life String': {'type': 'organ', 'group_name':'Sunstalker, Strange', 'text': '<i>A thread of history.</i>'},
}

const params = {
    'interaction': 'outer_join'
}

module.exports = {
    texts, params
}
