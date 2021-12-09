const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')
const texts = {
  // GENERAL

  'app_name': {
    'text': 'KDM STORY APP'
  },
  'license': {
    'text': 'You are allowed to use the app only if you have legally bought copy of the game on the table.<br/>You may only enable in-app content that you physically own.'
  },

  'settings': {
    'text': '<b style="color:#cc0;">Click</b> to show <b>Settings</b> window.',
  },
  //will keep settings and their tooltips texts english for now

  'about': {
    'text': '<b style="color:#cc0;">Click</b> to show <b>About</b> window.'
  },

  'event_transition': {
    'text': '<b style="color:#cc0;">Click</b> to start <b>$L$</b>',
  },

  'to event_text': {
    'text': 'To $E$'
  },
  'to event': {
    'text': '<b style="color:#cc0;">Click</b> to start '+event_img+'<b>$E$</b>.'
  },

  'back event_text': {
    'text': 'Back to $E$'
  },
  'back event': {
    'text': '<b style="color:#cc0;">Click</b> to return to '+event_img+'<b>$E$</b>.'
  },

  'set_word': {
    'text': '<b style="color:#d87dc1;font-size:0.8em;">Set: $G$</b>'
  },
  'roll_word': {
    'text': '<b>Roll: $G$d10</b>'
  },
  'source_word': {
    'text': '<b>Source: $G$</b>'
  },
  'required_word': {
    'text': '<b style="color:#cc0;font-size:1em;">Required: $G$</b>'
  },

  'start showdown': {
    'text': 'Start the <b>Showdown</b>!'
  },

  'story_events': {
    'text': '<b style="color:#cc0;">Click</b> to show <b>Story Events</b> table.'
  },
  'reference_close': {
    'text': '<b style="color:#cc0;">Click</b> to close <b>Reference</b> window.',
  },
  'reference_open': {
    'text': '<b style="color:#cc0;">Click</b> to show <b>Reference</b> window.',
  },
  'random_key': {
    'text': 'random',
  },
  'space_key': {
    'text': 'space',
  },

  'innovations_list': {
    'text': '<b style="color:#cc0;">Click</b> to add/remove settlement <b>Innovations</b>.',
  },
  'locations_list': {
    'text': '<b style="color:#cc0;">Click</b> to add/remove <b>Settlement Locations</b>.',
  },
  'bookmarks_list': {
    'text': '<b style="color:#cc0;">Click</b> to add/remove <b>Bookmarks</b>.<br/><br/>Bookmarks may affect various aspects of your campaign and events.<br/>Typically you are instructed to add or remove bookmark during play.',
  },
  'severe_table': {
    'text': '<b style="color:#cc0;">Click</b> to hide.'
  },

  'locations_word': {
    'text': 'Locations'
  },
  'innovations_word': {
    'text': 'Innovations'
  },
  'actions_word': {
    'text': 'Actions'
  },
  'survival_actions_word': {
    'text': 'Survival Actions'
  },
  'search_word': {
    'text': "Search..."
  },
  'type_term': {
    'text': 'Type term'
  },
  'bonusses_summary': {
    'text': 'Bonuses Summary'
  },
  'settlement_word': {
    'text': 'Settlement'
  },
  'hunt_word': {
    'text': 'Hunt'
  },
  'showdown_word': {
    'text': 'Showdown'
  },
  'newborns_word': {
    'text': 'Newborns'
  },
  'departing_word': {
    'text': 'Departing'
  },

  'milestones_word': {
    'text': 'Milestones'
  },
  'first_child_is_born': {
    'text': 'First child is born'
  },
  'first_time_death_count_is_updated': {
    'text': 'First time death count is updated'
  },
  'population_reaches_15': {
    'text': 'Population reaches 15'
  },
  'lantern_year_12': {
    'text': 'Lantern Year 12'
  },
  'settlement_has_5_innovations': {
    'text': 'Settlement has 5 innovations'
  },
  'settlement_has_8_innovations': {
    'text': 'Settlement has 8 innovations'
  },

 // HUNT

 'hunt_start': {
   'text': 'Choose which monster you want to hunt this year'
 },

 'gorms_laughter': {
   'text': 'When the survivors move into new hunt table space, all <b>non-deaf</b> survivors suffer 1 brain event damage.<sup class="event_sup">[Gorm\'s Laughter]</sup>'
 },
 'found_relic': {
   'text': 'At the start of the next settlement phase, draw 3 innovations from the innovation deck and add one to your settlement at no cost.<sup class="event_sup">[Found Relic]</sup>'
 },
 'tomb_of_excelence': {
   'text': 'At the start of the showdown, place the monster\'s trap at the bottom of the hit location deck.<sup class="event_sup">[Tomb of Excelence]</sup>'
 },
 'gorm_lv3': {
   'text': 'When the Ancient\'s Gorm Bait would be the hunt event revealer, they are <b style="color:#cc0;" id="gorm_digested">Digested instead</b>.<sup class="event_sup">[Gorm Lv.3 - Final March]</sup>'
 },
 'lantern_oven': {
   'text': 'Lantern Oven'
 },
 'innovation_added': {
   'text': 'Innovation is added.'
 },
 'starvation': {
   'text': '<b>Starvation</b><br/>The hunting team takes too long to bring food back home.<br/>Remove d5 resources from settlement storage.',
 },

 'starvation_window': {
   'text': 'Starvation<br/><b id="starvation_text">Remove d5 resources from settlement storage.</b>'
 },
 'starvation_showdown': {
   'text': 'Start Showdown'
 },

 'lv': {
   'text': 'Lv.'
 },

 '#random_event_icon': {
   'text': 'Roll random <b>Hunt Event</b>',
 },
 '#random_event_close': {
   'text': '<b style="color:#cc0">Click</b> to close <b>Hunt Event</b>',
 },
 '#random_event_icon_big': {
   'text': '<b style="color:#cc0">Click</b> to roll random <b>Hunt Event</b>',
 },
 '#random_event_input': {
   'text': '<b style="color:#cc0">Type</b> <b>Hunt Event</b> number here',
 },

 'herb_gathering_top': {
   'text': '<b>Herb Gathering</b><br />Survivors eat berries on the way<br />All survivors get <b>+1 survival</b>',
 },
 'herb_gathering_bottom': {
   'text': '<i style="color:#aa0;">Sickle required!</i>',
 },
 'mineral_gathering_top': {
   'text': '<b>Mineral Gathering</b>',
 },
 'mineral_gathering_bottom': {
   'text': '<i style="color:#aa0;">Pickaxe required!</i>',
 },
 'sky_fishing_top': {
   'text': '<b>Sky Fishing</b>',
 },
 'sky_fishing_bottom': {
   'text': '<i style="color:#aa0;">Sun Lure and Hook required!</i>',
 },
 'random_hunt_event': {
   'text': 'Random Hunt Event',
 },
 'monster_hunt_event': {
   'text': 'Monster Hunt Event',
 },
 'hunt_monster': {
   'text': '<b style="color:#cc0;">Drag</b> to move monster on the hunt board.</br><b style="color:#cc0;">Click</b> to start the <b>Showdown</b>!</br><i>It will be considered that the fight takes place where the survivors are standing for all gameplay effects.</i>',
 },
 'hunt_survivors': {
   'text': '<b style="color:#cc0;">Drag</b> survivors to proceed on the <b>Hunt</b>.</br><i><b style="color:#cc0;">Click</b> on events to disable/enable them.</i>',
 },
 'forest_wants_what_it_wants': {
   'text': '<b>The Forest Wants What it Wants</b>',
 },
 'overwhelming_darkness': {
   'text': '<b>Overwhelming Darkness</b>',
 },

 // SETTLEMENT

 'return_button_settlement_text': {
   'text': 'Return to the <b>Settlement</b>',
 },

 'return_button_settlement_new': {
   'text': '<b style="color:#cc0;">Click</b> to return to <b>Settlement</b><br/><br/>This will start new <b>Lantern Year</b>.',
 },

 'return_button_settlement_back': {
   'text': '<b style="color:#cc0;">Click</b> to return to <b>Settlement</b>',
 },

 'settlement_event_button': {
   'text': '<b style="color:#cc0;">Click</b> to draw and show/hide <b>Settlement Event</b> card.'
 },

 'settlement_event_button_drawn': {
   'text': 'Event drawn: <b>$E$</b><br/><br/><b style="color:#cc0;">Click</b> to show/hide <b>Settlement Event</b> card.'
 },

 'survivors_return_button': {
   'text': 'All survivors that endured the previous showdown are <b>returning survivors</b>.<br/><br/>Their injuries are healed and all tokens are removed.<br/><br/>Apply any effects for the <b>returning survivors</b>.'
 },

 'gain_endeavors_button': {
   'text': 'Gain +1'+endeavor_img+' for each <b>returning survivor</b>.<br/><br/>Additional '+endeavor_img+' may be gained from principles, innovations and abilities.'
 },

 'update_deathcount_button': {
   'text': 'If any survivors perished during the hunt, showdown or during the preceeding steps of the settlement phase, update the death count.<br/><br/>If a survivor dies later during the Settlement Phase, upadte the death count immediately.'
 },

 'milestones_button': {
   'text': 'For each reached milestone trigger the corresponding story event.<br/><br/><b style="color:#cc0;">Click</b> to show <b>Milestones</b>.'
 },

 'development_button': {
   'text': '<b style="color:#cc0;">Click</b> to show <b>Development</b> window.'
 },

 'departing_button': {
   'text': 'Chose <b>4</b> departing survivors.<br/><br/>Remove the returning survivors gear and add gear to the departing survivors gear grids.<br/><br/>Record armor points, modifiers from gear and bonuses from innovations, endeavors and events that affect departing survivors.'
 },

 'special_showdown_button': {
   'text': 'Departing survivors immediately begin showdown.<br/><br/>After showdown heal all wounds and remove all tokens.'
 },

 'record_button': {
   'text': 'Record unspent resources in the settlement storage and archive all resource cards.'
 },

 'end_phase_button': {
   'text': 'Lose unspent '+endeavor_img+'.<br/>Continue to <b>Hunt</b> or <b>Nemesis Encounter</b>.<br/><br/><b style="color:#cc0;">Click</b> to start a new <b>Hunt</b>!'
 },

 'innovations_filter': {
   'text': '<b style="color:#cc0;">Type</b>  the name you\'re looking for.</br></br><b>Separate</b> names by comma, to search for several: <i>i.e. ammona, bloodletting</i></br><b>Start</b> with <b>#</b> to search for tags instead: <i>i.e. #principles, #death, #gormchymy</i>.'
 },

 'action_card': {
   'text': '<b style="color:#cc0;">Type</b>  the name you\'re looking for.</br></br><b>Separate</b> names by comma, to search for several: <i>i.e. ammona, bloodletting</i></br><b>Start</b> with <b>#</b> to search for tags instead: <i>i.e. #principles, #death, #gormchymy</i>.'
 },

 'location_entry': {
   'text': '<b style="color:#cc0;">Click</b> to <b>show location</b>.<br/><br/><b style="color:#cc0;">Double click</b> to <b>toggle built status</b>.'
 },
 'innovation_entry': {
   'text': '<b style="color:#cc0;">Click</b> to <b>add innovation</b>.<br/>'
 },
 'innovation_card': {
   'text': '<b style="color:#cc0;">Click</b> to activate.<br/><b style="color:#cc0;">Double click</b> to remove.</b>.<br/><b style="color:#cc0;">Drag</b> to rearrange.</b>.'
 },
 'action_card': {
   'text': '<b style="color:#cc0;">Click</b> to activate.'
 },
 'armor_set_hover': {
   'text': '<b style="color:#cc0;">Click</b> to <b>toggle armor</b> set tooltip.<br/>'
 },

 'new_year': {
   'text': 'New year starts'
 },

 // EVENTS

 'first_story_event': {
   'text': 'Open rule book on page 22 and follow the instructions.'
 },

 'foundlings_transition': {
   'text': '<b style="color:#cc0;">Click</b> to learn <b>Dragon Speach</b> innovation, create <b>Throne</b> location and proceed to the <b>Settlement</b>.',
 },

 'returning survivors_transition': {
   'text': '<b style="color:#cc0;">Click</b> to learn <b>Language</b> innovation, create <b>Lantern Hoard</b> location and proceed to the <b>Settlement</b>.'
 },

 'the pool and the sun_transition': {
   'text': '<b style="color:#cc0;">Click</b> to learn <b>Sun Language</b> innovation, create <b>Sacreed Pool</b> location and proceed to the <b>Settlement</b>.'
 },

 'first story_text': {
   'text': 'After victory...'
 },
 'first story_lantern': {
   'text': 'After they defeat the White Lion, the survivors wander the darkness, drawn to a soft glow blooming on the horizon.<br/><br/><b style="color:#cc0;">Click</b> to proceed.'
 },
 'first story_sun': {
   'text': 'After they defeat the White Lion, the survivors wander the darkness, drawn to a soft glow blooming on the horizon.<br/><br/><b style="color:#cc0;">Click</b> to proceed.'
 },
 'first story_stars': {
   'text': 'After they defeat the White Lion, the survivors wander the darkness, drawn to a soft glow blooming on the horizon.<br/><br/><b style="color:#cc0;">Click</b> to proceed.'
 },

 'blind_exit_text': {
   'text': 'Blind Exit'
 },
 'blind_exit': {
   'text': 'Apply <b>only</b> after defeating <b>Gorm Lv.2</b>'
 },

 'campaign': {
   'text': '<b style="color:#bb0;font-size:0.7em;">Campaign</b><br/>$C$'
 },
 'campaign_bottom': {
   'text': '<b style="color:#cc0;">Click</b> to start the <b>$E$</b>.'
 },

 'to_settlement_text': {
   'text': 'Go to the <b>Settlement</b>',
 },

 'subtitles_click': {
   'text': '<b style="color:#cc0;">Click</b> to hide/show subtitles.',
 },

 'label_click': {
   'text': '<b style="color:#cc0;">Click</b> to hide/show event name.',
 },
 'event_dblclick': {
   'text': '<b style="color:#cc0;">Double click</b> to hide event.'
 },

 'hunt_random_event_popup_text': {
   'text': 'Click icon or type hunt event number',
 },

 'padSubmit': {
   'text': 'submit',
 },

 'random draws': {
   'text': 'Random Draws',
 },

 'abilities': {
   'text': 'Abilities/Impairments',
 },

 'fighting arts': {
   'text': 'Fighting Arts',
 },

 'disorders': {
   'text': 'Disorders',
 },

 'tactics': {
   'text': 'Tactics',
 },

 'secret fighting arts': {
   'text': 'Secret Fighting Arts',
 },

 'survivor statuses': {
   'text': 'Survivor Statuses',
 },

 'settlement events': {
   'text': 'Settlement Events',
 },

 'settlement locations': {
   'text': 'Settlement Locations',
 },

 'glossary': {
   'text': 'Glossary Terms',
 },

 'armor sets': {
   'text': 'Armor Sets',
 },

 'innovations': {
   'text': 'Innovations',
 },

 'resources': {
   'text': 'Resources',
 },

 'terrain': {
   'text': 'Terrain',
 },

 'bookmarks': {
   'text': 'Bookmarks',
 },

 'unfinished_business_text': {
   'text': 'Unfinished Business'
 },

 'unfinished_business_tooltip': {
   'text': 'Add '+event_img+'<b>Hooded Knight</b> to the timeline four years from now.<br/><br/><b style="color:#cc0;">Click</b> to return to <b>Settlement</b><br/><br/>This will start new <b>Lantern Year</b>.'
 }
 // tooltips['action_card'].text
}

module.exports = {
 texts,
}
