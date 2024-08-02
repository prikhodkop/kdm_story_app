const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')
const texts = {
  // GENERAL

  'app_name': {
    'text': 'KDM STORY APP'
  },
  'license': {
    'text': 'Puoi utilizzare l\'app solo se hai acquistato legalmente una copia del gioco da tavolo.<br/>Puoi abilitare solo i contenuti in-app che possiedi fisicamente.'
  },

  'settings': {
    'text': '<b style="color:#cc0;">Clicca</b> per mostrare la finestra <b>Impostazioni</b>.',
  },
  //will keep settings and their tooltips texts english for now

  'about': {
    'text': '<b style="color:#cc0;">Clicca</b> per mostrare la finestra <b>Info</b>'
  },

  'event_transition': {
    'text': '<b style="color:#cc0;">Clicca</b> per iniziare <b>$L$</b>',
  },

  'to event_text': {
    'text': 'To $E$'
  },
  'to event': {
    'text': '<b style="color:#cc0;">Clicca</b> per iniziare '+event_img+'<b>$E$</b>.'
  },

  'back event_text': {
    'text': 'Back to $E$'
  },
  'back event': {
    'text': '<b style="color:#cc0;">Clicca</b> per ritornare a '+event_img+'<b>$E$</b>.'
  },

  'set_word': {
    'text': '<b style="color:#d87dc1;font-size:0.8em;">Imposta: $G$</b>'
  },
  'roll_word': {
    'text': '<b>Tiro: $G$d10</b>'
  },
  'source_word': {
    'text': '<b>Origine: $G$</b>'
  },
  'required_word': {
    'text': '<b style="color:#cc0;font-size:1em;">Richiesto: $G$</b>'
  },

  'start showdown': {
    'text': 'Start the <b>Showdown</b>!'
  },

  'story_events': {
    'text': '<b style="color:#cc0;">Clicca</b> per mostrare la tabella <b>Story Events</b>.'
  },
  'reference_close': {
    'text': '<b style="color:#cc0;">Clicca</b> per chiudere la finestra <b>Riferimento</b>.',
  },
  'reference_open': {
    'text': '<b style="color:#cc0;">Clicca</b> per mostrare la finestra <b>Riferimento</b>',
  },
  'random_key': {
    'text': 'random',
  },
  'space_key': {
    'text': 'space',
  },

  'innovations_list': {
    'text': '<b style="color:#cc0;">Clicca</b> per aggiungere/rimuovere le <b>Innovations</b> dell\'insediamento.',
  },
  'locations_list': {
    'text': '<b style="color:#cc0;">Clicca</b> per aggiungere/rimuovere le <b>Settlement Locations</b>.',
  },
  'bookmarks_list': {
    'text': '<b style="color:#cc0;">Clicca</b> per aggiungere/rimuovere i <b>Bookmarks</b>.<br/><br/>Bookmarks possono influire su vari aspetti della campagna e degli eventi.<br/>In genere viene richiesto di aggiungere o rimuovere il segnalibro durante il gioco.',
  },
  'severe_table': {
    'text': '<b style="color:#cc0;">Clicca</b> per nascondere.'
  },

  'locations_word': {
    'text': 'Locations'
  },
  'innovations_word': {
    'text': 'Innovations'
  },
  'actions_word': {
    'text': 'Azioni'
  },
  'survival_actions_word': {
    'text': 'Survival Actions'
  },
  'search_word': {
    'text': "Cerca..."
  },
  'type_term': {
    'text': 'Scrivi termine'
  },
  'bonusses_summary': {
    'text': 'Dettaglio Bonus'
  },
  'settlement_word': {
    'text': 'Insediamento'
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
   'text': 'Scegli quale mostro vuoi cacciare quest\'anno'
 },

 'gorms_laughter': {
   'text': 'Quando i sopravvissuti si muovono in un nuovo spazio, tutti i sopravvissuti <b>non-deaf</b> subiscono 1 brain event damage.<sup class="event_sup">[Risata del Gorm]</sup>'
 },
 'found_relic': {
   'text': 'At the start of the next settlement phase, draw 3 innovations from the innovation deck and add one to your settlement at no cost.<sup class="event_sup">[Found Relic]</sup>'
 },
 'tomb_of_excelence': {
   'text': 'All\'inizio dello showdown, piazza la Trappola in fondo al mazzo delle hit location<sup class="event_sup">[Tomb of Excelence]</sup>'
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
   'text': '<b>Starvation</b><br/>Il gruppo della caccia impiega troppo tempo per portare del cibo a casa.<br/>Rimuovi 1d5 risorse dalla riserva dell\'insediamento.',
 },

 'starvation_window': {
   'text': 'Starvation<br/><b id="starvation_text">Rimuovi 1d5 risorse dalla riserva dell\'insediamento.</b>'
 },
 'starvation_showdown': {
   'text': 'Inizia lo Showdown'
 },

 'lv': {
   'text': 'Lv.'
 },

 '#random_event_icon': {
   'text': 'Tira per un <b>Hunt Event</b> casuale',
 },
 '#random_event_close': {
   'text': '<b style="color:#cc0">Click</b> to close <b>Hunt Event</b>',
 },
 '#random_event_icon_big': {
   'text': '<b style="color:#cc0">Click</b> to roll random <b>Hunt Event</b>',
 },
 '#random_event_input': {
   'text': '<b style="color:#cc0">Scrivi</b> il numero del <b>Hunt Event</b> qui',
 },

 'herb_gathering_top': {
   'text': '<b>Herb Gathering</b><br />I sopravvissuti si nutrono di bacche lungo la via<br />Tutti i sopravvissuti guadagnano <b>+1 survival</b>',
 },
 'herb_gathering_bottom': {
   'text': '<i style="color:#aa0;">Sickle richiesto!</i>',
 },
 'mineral_gathering_top': {
   'text': '<b>Mineral Gathering</b>',
 },
 'mineral_gathering_bottom': {
   'text': '<i style="color:#aa0;">Pickaxe richiesta!</i>',
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
   'text': '<b style="color:#cc0;">Trascina</b> per muovere il mostro lungo la plancia della caccia.</br><b style="color:#cc0;">Clicca</b> per iniziare lo <b>Showdown</b>!</br><i>It will be considered that the fight takes place where the survivors are standing for all gameplay effects.</i>',
 },
 'hunt_survivors': {
   'text': '<b style="color:#cc0;">Trascina</b> i sopravvissuti per procedere con la <b>Caccia</b>.</br><i><b style="color:#cc0;">Clicca</b> sugli eventi per ablitarli/disabilitarli.</i>',
 },
 'forest_wants_what_it_wants': {
   'text': '<b>The Forest Wants What it Wants</b>',
 },
 'overwhelming_darkness': {
   'text': '<b>Overwhelming Darkness</b>',
 },

 // SETTLEMENT

 'return_button_settlement_text': {
   'text': 'Ritorna al <b>Settlement</b>',
 },

 'return_button_settlement_new': {
   'text': '<b style="color:#cc0;">Clicca</b> per tornare al <b>Settlement</b><br/><br/>Questo inizierà un nuovo <b>Lantern Year</b>.',
 },

 'return_button_settlement_back': {
   'text': '<b style="color:#cc0;">Clicca</b> per ritornare <b>Settlement</b>',
 },

 'settlement_event_button': {
   'text': '<b style="color:#cc0;">Clicca</b> per pescare e mostrare/nascondere le carte <b>Settlement Event</b>.'
 },

 'settlement_event_button_drawn': {
   'text': 'Evento pescato: <b>$E$</b><br/><br/><b style="color:#cc0;">Clicca</b> per mostrare/nascondere la carta <b>Settlement Event</b>.'
 },

 'survivors_return_button': {
   'text': 'Tutti i sopravvissuti che hanno partecipato al precedente showdown sono i <b>returning survivors</b>.<br/><br/>Le loro ferite vengono curate e tutti i token vengono rimossi.<br/><br/>Applicate gli effetti per i <b>returning survivors</b>.'
 },

 'gain_endeavors_button': {
   'text': 'Guadagna +1'+endeavor_img+' per ogni <b>returning survivor</b>.<br/><br/>'+endeavor_img+' aggiuntivi possono essere guadagnati da principi, innovazioni e abilità.'
 },

 'update_deathcount_button': {
   'text': 'Se un sopravvissuto muore durante la caccia, showdown o durante i vari passaggi della Settlment Phase, aggiorna il contatore delle morti.<br/><br/>Se un sopravvissuto muore successivamente durante la Settlment Phase, aggiorna il contatore immediatamente.'
 },

 'milestones_button': {
   'text': 'Per ogni pietra miliare raggiunta risolvi il corrispondente story event.<br/><br/><b style="color:#cc0;">Clicca</b> per mostrare le <b>Pietre Miliari</b>.'
 },

 'development_button': {
   'text': '<b style="color:#cc0;">Clicca</b> per mostrare la finestra di <b>Sviluppo</b>.'
 },

 'departing_button': {
   'text': 'Scegli <b>4</b> departing survivors.<br/><br/>Rimuovi l\'equipaggiamento dai returning survivors e aggiungilo ai departing survivors.<br/><br/>Segna i punti armatura, modificatori dall\'equipaggiamento e bonus derivati da innovazioni, endeavors e eventi relativi ai departing survivors.'
 },

 'special_showdown_button': {
   'text': 'I departing survivors iniziano immediatamente lo showdown.<br/><br/>Dopo lo showdown cura tutte le ferite e rimuovi tutti i token.'
 },

 'record_button': {
   'text': 'Registra le risorse non spese nel magazzino dell\'insediamento e archivia tutte le carte risorse.'
 },

 'end_phase_button': {
   'text': 'Perdi gli '+endeavor_img+' non spesi.<br/>Continua per la <b>Caccia</b> o un <b>Nemesis Encounter</b>.<br/><br/><b style="color:#cc0;">Clicca</b> per iniziare una nuova <b>Caccia</b>!'
 },

 'innovations_filter': {
   'text': '<b style="color:#cc0;">Type</b>  the name you\'re looking for.</br></br><b>Separate</b> names by comma, to search for several: <i>i.e. ammonia, bloodletting</i></br><b>Start</b> with <b>#</b> to search for tags instead: <i>i.e. #principles, #death, #gormchymy</i>.'
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
   'text': 'Apri il regolamento a pagina 22 e segui le istruzioni.'
 },

 'foundlings_transition': {
   'text': '<b style="color:#cc0;">Click</b> to learn <b>Dragon Speach</b> innovation, create <b>Throne</b> location and proceed to the <b>Settlement</b>.',
 },

 'returning survivors_transition': {
   'text': '<b style="color:#cc0;">Clicca</b> per imparare l\'innovation <b>Language</b>, crea il <b>Lantern Hoard</b> location e procedi al <b>Settlement</b>.'
 },

 'the pool and the sun_transition': {
   'text': '<b style="color:#cc0;">Click</b> to learn <b>Sun Language</b> innovation, create <b>Sacreed Pool</b> location and proceed to the <b>Settlement</b>.'
 },

 'first story_text': {
   'text': 'Dopo la vittoria...'
 },
 'first story_lantern': {
   'text': 'Dopo aver sconfitto il White Lion, i sopravvissuti vagano nell\'oscurità, attratti da un tenue bagliore che sboccia all\'orizzonte.<br/><br/><b style="color:#cc0;">Clicca</b> per procedere.'
 },
 'first story_sun': {
   'text': 'Dopo aver sconfitto il White Lion, i sopravvissuti vagano nell\'oscurità, attratti da un tenue bagliore che sboccia all\'orizzonte.<br/><br/><b style="color:#cc0;">Clicca</b> per procedere.'
 },
 'first story_stars': {
   'text': 'Dopo aver sconfitto il White Lion, i sopravvissuti vagano nell\'oscurità, attratti da un tenue bagliore che sboccia all\'orizzonte.<br/><br/><b style="color:#cc0;">Clicca</b> per procedere.'
 },

 'blind_exit_text': {
   'text': 'Blind Exit'
 },
 'blind_exit': {
   'text': 'Apply <b>only</b> after defeating <b>Gorm Lv.2</b>'
 },

 'campaign': {
   'text': '<b style="color:#bb0;font-size:0.7em;">Campagna</b><br/>$C$'
 },
 'campaign_bottom': {
   'text': '<b style="color:#cc0;">Clicca</b> per iniziare il <b>$E$</b>.'
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
   'text': 'Clicca sull\'icona o scrivi il numero dell\'evento',
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
   'text': 'Aggiungi '+event_img+'<b>Hooded Knight</b> alla timeline 4 anni a partire da adesso.<br/><br/><b style="color:#cc0;">Clicca</b> per tornare al <b>Settlement</b><br/><br/>Ciò farà iniziare un nuovo <b>Lantern Year</b>.'
 }
 // tooltips['action_card'].text
}

module.exports = {
 texts,
}
