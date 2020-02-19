const texts = {
  // OGÓLNE

  // 'app_name': {
  //   'text': 'OPOWIEŚCI KDM'
  // },
  'license': {
    'text': 'Możesz korzystać z aplikacji tylko wtedy, gdy masz legalnie zakupioną kopię gry.<br/>Możesz włączyć w aplikacji tylko zawartość, która jest twoją fizyczną własnością.'
  },

  'settings': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby wyświetlić okno <b>ustawień</b>.',
  },
  //will keep settings and their tooltips texts english for now

  'about': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby wyświetlić okno <b>O...</b>.'
  },

  'event_transition': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby rozpocząć <b>$L$</b>',
  },

  'to event_text': {
    'text': 'Idź do $E$'
  },
  'to event': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby rozpocząć <b>$E$</b>.'
  },

  'back event_text': {
    'text': 'Back to $E$'
  },
  'back event': {
    'text': '<b style="color:#cc0;">Kliknij</b> wrócić do <b>$E$</b>.'
  },

  'set_word': {
    'text': '<b style="color:#d87dc1;font-size:0.8em;">Set: $G$</b>'
  },
  'roll_word': {
    'text': '<b>Rzut: $G$d10</b>'
  },
  'source_word': {
    'text': '<b>Źródło: $G$</b>'
  },
  'required_word': {
    'text': '<b style="color:#cc0;font-size:1em;">Wymaga: $G$d10</b>'
  },

  'start showdown': {
    'text': 'Rozpocznij <b>starcie</b>!'
  },

  'story_events': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby wyświetlić listę <b>wydarzeń fabularnych</b>.'
  },
  'reference_close': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby zamknąć okno <b>słowniczka</b>.',
  },
  'reference_open': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby wyświetlić okno <b>słowniczka</b>.',
  },

  'innovations_list': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby dodać/usunąć <b>innowacje</b> osady.',
  },
  'locations_list': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby dodać/usunąć <b>lokacje osady</b>.',
  },
  'severe_table': {
    'text': '<b style="color:#cc0;">Kliknij</b> aby ukryć.'
  },

 // ŁOWY

 'hunt_start': {
   'text': 'Wybierz na jakiego potwora <br/>będziecie polowac w tym roku.'
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
   'text': 'Latarniany piec'
 },
 'innovation_added': {
   'text': 'Dodano innowację.'
 },
 'starvation': {
   'text': '<b>Głód</b><br/>Zbyt duzo czasu zajęło grupie dostarczenie jedzenia do osady.<br/>Usuń k5 zasobów z magazynu osady.',
 },

 'starvation_window': {
   'text': 'Głód<br/><b id="starvation_text">Usuń k5 zasobów z magazynu osady.</b>'
 },
 'starvation_showdown': {
   'text': 'Rozpocznij starcie'
 },

 'lv': {
   'text': 'Poz.'
 },

 '#random_event_icon': {
   'text': 'Rzuć na losowe <b>wydarzenie na łowach</b>',
 },
 '#random_event_close': {
   'text': '<b style="color:#cc0">Kliknij</b> aby zamknąć <b>wydarzenie na łowach</b>',
 },
 '#random_event_icon_big': {
   'text': '<b style="color:#cc0">Kliknij</b> aby wylosować <b>wydarzenie na łowach</b>',
 },
 '#random_event_input': {
   'text': '<b style="color:#cc0">Wpisz</b> tutaj numer <b>wydarzenia na łowach</b>',
 },

 'herb_gathering_top': {
   'text': '<b>Zbieranie ziół</b><br />Ocalali zjadają jagody znalezione po drodze.<br />Wszyscy Ocalali zdobywają <b>+1 przetrwania</b>',
 },
 'herb_gathering_bottom': {
   'text': '<i style="color:#aa0;">Wymagany sierp!</i>',
 },
 'mineral_gathering_top': {
   'text': '<b>Zbieranie minerałów</b>',
 },
 'mineral_gathering_bottom': {
   'text': '<i style="color:#aa0;">Wymagany kilof!</i>',
 },
 'sky_fishing_top': {
   'text': '<b>Sky Fishing</b>',
 },
 'sky_fishing_bottom': {
   'text': '<i style="color:#aa0;">Sun Lure and Hook required!</i>',
 },
 'random_hunt_event': {
   'text': 'Losowe wydarzenie na łowach',
 },
 'monster_hunt_event': {
   'text': 'Wydarzenie na łowach potwora',
 },
 'hunt_monster': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby rozpocząć <b>starcie</b>!</br></br><i>Uważa się, że walka toczy się tam, gdzie ocaleni stoją na rzecz wszystkich efektów rozgrywki.</i>',
 },
 'hunt_survivors': {
   'text': '<b style="color:#cc0;">Przenieś</b> Ocalałych aby kontynuować <b>łowy</b>.</br></br><i><b style="color:#cc0;">Kliknij</b> na wydarzenie aby je wyłączyć/włączyć.</i>',
 },
 'forest_wants_what_it_wants': {
   'text': '<b>The Forest Wants What it Wants</b>',
 },
 'overwhelming_darkness': {
   'text': '<b>Przytłaczająca ciemność</b>',
 },

 // OSADA

 'return_button_settlement_text': {
   'text': 'Powrót do <b>osady</b>',
 },

 'return_button_settlement_new': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby powrócić do <b>osady</b>.<br/><br/>Spowoduje to rozpoczęcie nowego <b>latarnianego roku</b>.',
 },

 'return_button_settlement_back': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby powrócić do <b>osady</b>',
 },

 'settlement_event_button': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby wylosować i pokazać/ukryć kartę <b>wydarzenia osady</b>.'
 },

 'settlement_event_button_drawn': {
   'text': 'Wylosowane wydarzenie: <b>$E$</b><br/><br/><b style="color:#cc0;">Kliknij</b> aby pokazać/ukryć kartę <b>wydarzenia osady</b>.'
 },

 'survivors_return_button': {
   'text': 'Wszyscy ocalali, którzy brali udział w poprzednim starciu, są <b>powracającymi ocalałymi</b>. Ich obrażenia zostają wyleczone, a wszystkie żetony usunięte.<br/><br/>Zastosuj wszelkie efekty dla <b>powracających ocalałych</b>.'
 },

 'gain_endeavors_button': {
   'text': 'Wyskujesz 1 żeton działań za każdego <b>powracającego Ocalałego</b>.<br/><br/>Dodatkowe punkty działań można zyskać dzięki doktrynom, innowacjom i umiejętnościom.'
 },

 'update_deathcount_button': {
   'text': 'Jeśli któryś z ocalałych zginął podczas łowów, starcia lub podczas kroków poprzedzających fazę osady, zaktualizuj listę poległych.<br/><br/>Jeśli ocalały umiera podczas fazy osady, natychmiast zaktualizuj listę poległych.'
 },

 'milestones_button': {
   'text': 'Dla każdego osiągniętego kamienia milowego odczytaj odpowiadające mu wydarzenie fabularne.<br/><br/><b style="color:#cc0;">Kliknij</b> aby wyświetlić <b>kamienie milowe</b>.'
 },

 'development_button': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby wyświetlić okno <b>rozbudowy</b>.'
 },

 'departing_button': {
   'text': 'Wybierz <b>4</b> wyruszających Ocalałych.<br/><br/>Usuń ekwipunek powracającym ocalałym i dodaj go do siatki ekwipunku wyruszających ocalałych.<br/><br/>Zapisz punkty pancerza, modyfikatory ekwipunku, premie za innowacje, punkty działań i wydarzenia, które mają wpływ na wyruszających Ocalałych.'
 },

 'special_showdown_button': {
   'text': 'Wyruszający Ocalali natychmiast rozpoczynają starcie.<br/><br/>Po starciu wylecz wszystkie obrażenia i usuń wszystkie żetony.'
 },

 'record_button': {
   'text': 'Zapisz niewykorzystane zasoby w magazynie osady i zarchiwizuj wszystkie karty zasobów.'
 },

 'end_phase_button': {
   'text': 'Odrzuć niewykorzystane żetony działań.<br/><br/><b style="color:#cc0;">Kliknij</b> aby rozpocząć nowe <b>łowy</b>!'
 },

 'innovations_filter': {
   'text': '<b style="color:#cc0;">Wprowadź</b> hasło które szukasz.</br></br><b>Rozdzielaj</b> hasła przecinkami aby wyszukać kilka na raz, <i>np: amoniak, puszczanie krwi</i>.</br><b>Poprzedź</b> hasło <b>haszem (#)</b> aby szukać tagów, <i>np: #doktryny, #śmierć, #gormchemik</i>.'
 },

 'action_card': {
   'text': '<b style="color:#cc0;">Type</b>  the name you\'re looking for.</br></br><b>Separate</b> names by comma, to search for several: <i>i.e. ammona, bloodletting</i></br><b>Start</b> with <b>#</b> to search for tags instead: <i>i.e. #principles, #death, #gormchymy</i>.'
 },

 'location_entry': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby <b>wyświetlić lokację</b>.<br/><br/><b style="color:#cc0;">Kliknij podwójnie</b> aby zmienić <b>status wybudowania</b>.'
 },
 'innovation_entry': {
   'text': '<b style="color:#cc0;">Kliknij podwójnie</b> aby <b>dodać innowację</b>.<br/>'
 },
 'innovation_card': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby aktywować.<br/><br/><b style="color:#cc0;">Kliknij podwójnie</b> aby usunąć.</b>.<br/><br/><b style="color:#cc0;">Przeciągnij</b> aby zmienić kolejność.</b>.'
 },
 'action_card': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby aktywować.'
 },
 'armor_set_hover': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby <b>przełączyć</b> podpowiedzi dla pancerzy.<br/>'
 },

 'new_year': {
   'text': 'Rozpoczyna się nowy rok.'
 },

 // WYDARZENIA

 'first_story_event': {
   'text': 'Otwórz instrukcję na stronie 22 i podążaj za instrukcjami.'
 },

 'foundlings_transition': {
   'text': '<b style="color:#cc0;">Kliknij</b> to learn <b>Dragon Speach</b> innovation, create <b>Throne</b> location and proceed to the <b>Settlement</b>.',
 },

 'returning survivors_transition': {
   'text': '<b style="color:#cc0;">Kliknij</b> to learn <b>Language</b> innovation, create <b>Throne</b> location and proceed to the <b>Settlement</b>.'
 },

 'the pool and the sun_transition': {
   'text': '<b style="color:#cc0;">Kliknij</b> to learn <b>Sun Language</b> innovation, create <b>Throne</b> location and proceed to the <b>Settlement</b>.'
 },

 'first story_text': {
   'text': 'Po zwycięskim starciu...'
 },
 'first story_lantern': {
   'text': 'Po pokonaniu Białego Lwa, ocalali wędrują w ciemności, przyciągani do miękkiej poświaty rosnącej na horyzoncie.<br/><br/><b style="color:#cc0;">Kliknij</b> aby kontynuować.'
 },
 'first story_sun': {
   'text': 'Po pokonaniu Białego Lwa, ocalali wędrują w ciemności, przyciągani do miękkiej poświaty rosnącej na horyzoncie.<br/><br/><b style="color:#cc0;">Kliknij</b> aby kontynuować.'
 },
 'first story_stars': {
   'text': 'Po pokonaniu Białego Lwa, ocalali wędrują w ciemności, przyciągani do miękkiej poświaty rosnącej na horyzoncie.<br/><br/><b style="color:#cc0;">Kliknij</b> aby kontynuować.'
 },

 'blind_exit_text': {
   'text': 'Blind Exit'
 },
 'blind_exit': {
   'text': 'Apply <b>only</b> after defeating <b>Gorm Lv.2</b>'
 },

 'campaign': {
   'text': '<b style="color:#bb0;font-size:0.7em;">Kampania</b><br/>$C$'
 },
 'campaign_bottom': {
   'text': '<b style="color:#cc0;">Kliknij</b> aby rozpocząć <b>$E$</b>.'
 },

 'to_settlement_text': {
   'text': 'Idź do <b>osady</b>',
 },


 // tooltips['action_card'].text
}

module.exports = {
 texts,
}
