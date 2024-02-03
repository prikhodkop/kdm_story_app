const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')
const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')
const texts = {
  // GENERAL

  'app_name': {
    'text': 'KDM STORY APP'
  },
  'license': {
    'text': 'Solo se te permite utilizar la aplicación si has comprado legalmente una copia del juego en la mesa. <br/> Solo puedes habilitar contenido dentro de la aplicación que poseas físicamente.'
  },

  'settings': {
    'text': '<b style="color:#cc0;">Haz clic</b> para mostrar la ventana de <b>Configuración</b>.',
  },
  // Mantendré los textos de configuración y sus sugerencias en inglés por ahora.

  'about': {
    'text': '<b style="color:#cc0;">Haz clic</b> para mostrar la ventana <b>Acerca de</b>.'
  },

  'event_transition': {
    'text': '<b style="color:#cc0;">Haz clic</b> para iniciar <b>$L$</b>',
  },

  'to event_text': {
    'text': 'A $E$'
  },
  'to event': {
    'text': '<b style="color:#cc0;">Haz clic</b> para iniciar '+event_img+'<b>$E$</b>.'
  },

  'back event_text': {
    'text': 'Volver a $E$'
  },
  'back event': {
    'text': '<b style="color:#cc0;">Haz clic</b> para volver a '+event_img+'<b>$E$</b>.'
  },

  'set_word': {
    'text': '<b style="color:#d87dc1;font-size:0.8em;">Conjunto: $G$</b>'
  },
  'roll_word': {
    'text': '<b>Tirada: $G$d10</b>'
  },
  'source_word': {
    'text': '<b>Fuente: $G$</b>'
  },
  'required_word': {
    'text': '<b style="color:#cc0;font-size:1em;">Requerido: $G$</b>'
  },

  'start showdown': {
    'text': '¡Comienza el <b>Enfrentamiento</b>!'
  },

  'story_events': {
    'text': '<b style="color:#cc0;">Haz clic</b> para mostrar la tabla de <b>Eventos de la Historia</b>.'
  },
  'reference_close': {
    'text': '<b style="color:#cc0;">Haz clic</b> para cerrar la ventana de <b>Referencia</b>.',
  },
  'reference_open': {
    'text': '<b style="color:#cc0;">Haz clic</b> para mostrar la ventana de <b>Referencia</b>.',
  },
  'random_key': {
    'text': 'aleatorio',
  },
  'space_key': {
    'text': 'espacio',
  },

  'innovations_list': {
    'text': '<b style="color:#cc0;">Haz clic</b> para agregar/eliminar <b>Innovaciones</b> del asentamiento.',
  },
  'locations_list': {
    'text': '<b style="color:#cc0;">Haz clic</b> para agregar/eliminar <b>Ubicaciones del Asentamiento</b>.',
  },
  'bookmarks_list': {
    'text': '<b style="color:#cc0;">Haz clic</b> para agregar/eliminar <b>Marcadores</b>.<br/><br/>Los marcadores pueden afectar varios aspectos de tu campaña y eventos.<br/>Normalmente se te indicará que agregues o elimines marcadores durante el juego.',
  },
  'severe_table': {
    'text': '<b style="color:#cc0;">Haz clic</b> para ocultar.'
  },

  'locations_word': {
    'text': 'Ubicaciones'
  },
  'innovations_word': {
    'text': 'Innovaciones'
  },
  'actions_word': {
    'text': 'Acciones'
  },
  'survival_actions_word': {
    'text': 'Acciones de Supervivencia'
  },
  'search_word': {
    'text': "Buscar..."
  },
  'type_term': {
    'text': 'Escribe un término'
  },
  'bonusses_summary': {
    'text': 'Resumen de Bonificaciones'
  },
  'settlement_word': {
    'text': 'Asentamiento'
  },
  'hunt_word': {
    'text': 'Caza'
  },
  'showdown_word': {
    'text': 'Enfrentamiento'
},
'newborns_word': {
    'text': 'Recién nacidos'
},
'departing_word': {
    'text': 'Partida'
},

'milestones_word': {
    'text': 'Hitos'
},
'first_child_is_born': {
    'text': 'Nace el primer hijo'
},
'first_time_death_count_is_updated': {
    'text': 'Primera actualización del conteo de muertes'
},
'population_reaches_15': {
    'text': 'Población alcanza 15'
},
'lantern_year_12': {
    'text': 'Año de la Linterna 12'
},
'settlement_has_5_innovations': {
    'text': 'El asentamiento tiene 5 innovaciones'
},
'settlement_has_8_innovations': {
    'text': 'El asentamiento tiene 8 innovaciones'
},

// CAZA

'hunt_start': {
    'text': 'Elige qué monstruo quieres cazar este año'
},

'gorms_laughter': {
    'text': 'Cuando los supervivientes se mueven a un nuevo espacio de la tabla de caza, todos los supervivientes <b>no sordos</b> sufren 1 punto de daño de evento cerebral.<sup class="event_sup">[Risa del Gorm]</sup>'
},
'found_relic': {
    'text': 'Al comienzo de la próxima fase de asentamiento, roba 3 innovaciones del deck de innovaciones y agrega una a tu asentamiento sin costo alguno.<sup class="event_sup">[Reliquia Encontrada]</sup>'
},
'tomb_of_excelence': {
    'text': 'Al comienzo del enfrentamiento, coloca la trampa del monstruo en la parte inferior del deck de lugares de impacto.<sup class="event_sup">[Tumba de la Excelencia]</sup>'
},
'gorm_lv3': {
    'text': 'Cuando el Cebo de Gorm Antiguo sería el revelador del evento de caza, en su lugar es<b style="color:#cc0;" id="gorm_digested">Digerido</b>.<sup class="event_sup">[Gorm Nv.3 - Marcha Final]</sup>'
},
'lantern_oven': {
    'text': 'Horno de la Linterna'
},
'innovation_added': {
    'text': 'Se añade la innovación.'
},
'starvation': {
    'text': '<b>Hambre</b><br/>El equipo de caza se tarda demasiado en traer comida a casa.<br/>Quita 1d5 recursos del depósito del asentamiento.',
},

'starvation_window': {
    'text': 'Hambre<br/><b id="starvation_text">Quita 1d5 recursos del depósito del asentamiento.</b>'
},
'starvation_showdown': {
    'text': 'Comenzar Enfrentamiento'
},

'lv': {
    'text': 'Nv.'
},

'#random_event_icon': {
    'text': 'Tira un <b>Evento de Caza</b> al azar',
},
'#random_event_close': {
    'text': '<b style="color:#cc0">Haz clic</b> para cerrar el <b>Evento de Caza</b>',
},
'#random_event_icon_big': {
    'text': '<b style="color:#cc0">Haz clic</b> para tirar un <b>Evento de Caza</b> al azar',
},
'#random_event_input': {
    'text': '<b style="color:#cc0">Escribe</b> aquí el número del <b>Evento de Caza</b>',
},

'herb_gathering_top': {
    'text': '<b>Recolección de Hierbas</b><br />Los supervivientes comen bayas en el camino<br />Todos los supervivientes obtienen <b>+1 supervivencia</b>',
},
'herb_gathering_bottom': {
    'text': '<i style="color:#aa0;">¡Se requiere una hoz!</i>',
},
 'mineral_gathering_top': {
   'text': '<b>Recolección de Minerales</b>',
},
'mineral_gathering_bottom': {
   'text': '<i style="color:#aa0;">¡Se requiere pico!</i>',
},
'sky_fishing_top': {
   'text': '<b>Pesca en el Cielo</b>',
},
'sky_fishing_bottom': {
   'text': '<i style="color:#aa0;">¡Se requiere Señuelo Solar y Anzuelo!</i>',
},
'random_hunt_event': {
   'text': 'Evento de Caza Aleatorio',
},
'monster_hunt_event': {
   'text': 'Evento de Caza de Monstruo',
},
'hunt_monster': {
   'text': '<b style="color:#cc0;">Arrastra</b> para mover el monstruo en la tabla de caza.</br><b style="color:#cc0;">Haz clic</b> para comenzar el <b>Enfrentamiento</b>!</br><i>Se considerará que la pelea tiene lugar donde están parados los supervivientes para todos los efectos de juego.</i>',
},
'hunt_survivors': {
   'text': '<b style="color:#cc0;">Arrastra</b> supervivientes para avanzar en la <b>Caza</b>.</br><i><b style="color:#cc0;">Haz clic</b> en eventos para deshabilitar/habilitarlos.</i>',
},
'forest_wants_what_it_wants': {
   'text': '<b>El Bosque Quiere lo que Quiere</b>',
},
'overwhelming_darkness': {
   'text': '<b>Oscuridad Abrumadora</b>',
},

// ASENTAMIENTO

'return_button_settlement_text': {
   'text': 'Volver al <b>Asentamiento</b>',
},

'return_button_settlement_new': {
   'text': '<b style="color:#cc0;">Haz clic</b> para volver al <b>Asentamiento</b><br/><br/>Esto iniciará un nuevo <b>Año de la Linterna</b>.',
},

'return_button_settlement_back': {
   'text': '<b style="color:#cc0;">Haz clic</b> para volver al <b>Asentamiento</b>',
},

'settlement_event_button': {
   'text': '<b style="color:#cc0;">Haz clic</b> para robar y mostrar/ocultar la carta de <b>Evento de Asentamiento</b>.'
},

'settlement_event_button_drawn': {
   'text': 'Evento robado: <b>$E$</b><br/><br/><b style="color:#cc0;">Haz clic</b> para mostrar/ocultar la carta de <b>Evento de Asentamiento</b>.',
},

'survivors_return_button': {
   'text': 'Todos los supervivientes que resistieron el enfrentamiento anterior son <b>supervivientes que regresan</b>.<br/><br/>Sus heridas se curan y se eliminan todos los marcadores.<br/><br/>Aplica cualquier efecto para los <b>supervivientes que regresan</b>.',
},

'gain_endeavors_button': {
   'text': 'Obtén +1'+endeavor_img+' por cada <b>superviviente que regresa</b>.<br/><br/>Pueden obtenerse '+endeavor_img+' adicionales de principios, innovaciones y habilidades.',
},

'update_deathcount_button': {
   'text': 'Si algún superviviente falleció durante la caza, el enfrentamiento o durante los pasos previos de la fase de asentamiento, actualiza el recuento de muertes.<br/><br/>Si un superviviente muere más tarde durante la Fase de Asentamiento, actualiza el recuento de muertes de inmediato.',
},

'milestones_button': {
   'text': 'Por cada hito alcanzado, activa el evento de historia correspondiente.<br/><br/><b style="color:#cc0;">Haz clic</b> para mostrar <b>Hitos</b>.',
},

'development_button': {
   'text': '<b style="color:#cc0;">Haz clic</b> para mostrar la ventana de <b>Desarrollo</b>.',
},

'departing_button': {
   'text': 'Elige <b>4</b> supervivientes que parten.<br/><br/>Quita el equipo de los supervivientes que regresan y añade equipo a las cuadrículas de equipo de los supervivientes que parten.<br/><br/>Registra los puntos de armadura, los modificadores del equipo y los bonos de innovaciones, esfuerzos y eventos que afecten a los supervivientes que parten.',
},

'special_showdown_button': {
   'text': 'Los supervivientes que parten comienzan inmediatamente el enfrentamiento.<br/><br/>Después del enfrentamiento, cura todas las heridas y elimina todos los marcadores.',
},

'record_button': {
   'text': 'Registra los recursos no gastados en el depósito del asentamiento y archiva todas las cartas de recursos.',
},

'end_phase_button': {
   'text': 'Pierde los '+endeavor_img+' no gastados.<br/>Continúa con la <b>Caza</b> o el <b>Encuentro con el Némesis</b>.<br/><br/><b style="color:#cc0;">Haz clic</b> para iniciar una nueva <b>Caza</b>.',
},

'innovations_filter': {
   'text': '<b style="color:#cc0;">Escribe</b> el nombre que estás buscando.</br></br><b>Separar</b> los nombres por comas para buscar varios: <i>por ejemplo, amoníaco, sangría</i></br><b>Empieza</b> con <b>#</b> para buscar etiquetas en su lugar: <i>por ejemplo, #principios, #muerte, #gormchymy</i>.',
},

'action_card': {
   'text': '<b style="color:#cc0;">Escribe</b> el nombre que estás buscando.</br></br><b>Separar</b> los nombres por comas para buscar varios: <i>por ejemplo, amoníaco, sangría</i></br><b>Empieza</b> con <b>#</b> para buscar etiquetas en su lugar: <i>por ejemplo, #principios, #muerte, #gormchymy</i>.',
},

'location_entry': {
   'text': '<b style="color:#cc0;">Haz clic</b> para <b>mostrar ubicación</b>.<br/><br/><b style="color:#cc0;">Haz doble clic</b> para <b>cambiar el estado construido</b>.',
},

 'innovation_entry': {
   'text': '<b style="color:#cc0;">Haz clic</b> para <b>añadir innovación</b>.<br/>'
 },
 'innovation_card': {
   'text': '<b style="color:#cc0;">Haz clic</b> para activar.<br/><b style="color:#cc0;">Haz doble clic</b> para eliminar.</b>.<br/><b style="color:#cc0;">Arrastra</b> para reorganizar.</b>.'
 },
 'action_card': {
   'text': '<b style="color:#cc0;">Haz clic</b> para activar.'
 },
 'armor_set_hover': {
   'text': '<b style="color:#cc0;">Haz clic</b> para <b>alternar información sobre el conjunto de armadura</b>.<br/>'
 },

 'new_year': {
   'text': 'Comienza el nuevo año'
 },

 // EVENTOS

 'first_story_event': {
   'text': 'Abre el libro de reglas en la página 22 y sigue las instrucciones.'
 },

 'foundlings_transition': {
   'text': '<b style="color:#cc0;">Haz clic</b> para aprender la innovación <b>Lenguaje del Dragón</b>, crear la ubicación <b>Trono</b> y proceder al <b>Asentamiento</b>.',
 },

 'returning survivors_transition': {
   'text': '<b style="color:#cc0;">Haz clic</b> para aprender la innovación <b>Lenguaje</b>, crear la ubicación <b>Acumulación de la Linterna</b> y proceder al <b>Asentamiento</b>.'
 },

 'the pool and the sun_transition': {
   'text': '<b style="color:#cc0;">Haz clic</b> para aprender la innovación <b>Lenguaje del Sol</b>, crear la ubicación <b>Piscina Sagrada</b> y proceder al <b>Asentamiento</b>.'
 },

 'first story_text': {
   'text': 'Después de la victoria...'
 },
 'first story_lantern': {
   'text': 'Después de derrotar al León Blanco, los supervivientes vagan por la oscuridad, atraídos por un suave resplandor que brota en el horizonte.<br/><br/><b style="color:#cc0;">Haz clic</b> para continuar.'
 },
 'first story_sun': {
   'text': 'Después de derrotar al León Blanco, los supervivientes vagan por la oscuridad, atraídos por un suave resplandor que brota en el horizonte.<br/><br/><b style="color:#cc0;">Haz clic</b> para continuar.'
 },
 'first story_stars': {
   'text': 'Después de derrotar al León Blanco, los supervivientes vagan por la oscuridad, atraídos por un suave resplandor que brota en el horizonte.<br/><br/><b style="color:#cc0;">Haz clic</b> para continuar.'
 },

 'blind_exit_text': {
   'text': 'Salida a ciegas'
 },
 'blind_exit': {
   'text': 'Aplicar <b>solo</b> después de derrotar a <b>Gorm Lv.2</b>'
 },

 'campaign': {
   'text': '<b style="color:#bb0;font-size:0.7em;">Campaña</b><br/>$C$'
 },
 'campaign_bottom': {
   'text': '<b style="color:#cc0;">Haz clic</b> para iniciar el <b>$E$</b>.'
 },

 'to_settlement_text': {
   'text': 'Ir al <b>Asentamiento</b>',
 },

 'subtitles_click': {
   'text': '<b style="color:#cc0;">Haz clic</b> para ocultar/mostrar los subtítulos.',
 },

 'label_click': {
   'text': '<b style="color:#cc0;">Haz clic</b> para ocultar/mostrar el nombre del evento.',
 },
 'event_dblclick': {
   'text': '<b style="color:#cc0;">Haz doble clic</b> para ocultar el evento.'
 },

 'hunt_random_event_popup_text': {
   'text': 'Haz clic en el ícono o escribe el número del evento de caza',
 },

 'padSubmit': {
   'text': 'enviar',
 },

 'random draws': {
   'text': 'Selecciones al Azar',
 },

 'abilities': {
   'text': 'Habilidades/Perjuicios',
 },

 'fighting arts': {
   'text': 'Artes de Lucha',
 },

 'disorders': {
   'text': 'Trastornos',
 },

 'tactics': {
   'text': 'Tácticas',
 },

 'secret fighting arts': {
   'text': 'Artes de Lucha Secretas',
 },

 'survivor statuses': {
   'text': 'Estados del Superviviente',
 },

 'settlement events': {
   'text': 'Eventos del Asentamiento',
 },

 'settlement locations': {
   'text': 'Ubicaciones del Asentamiento',
 },

 'glossary': {
   'text': 'Términos del Glosario',
 },

 'armor sets': {
   'text': 'Conjuntos de Armaduras',
 },

 'innovations': {
   'text': 'Innovaciones',
 },

 'resources': {
   'text': 'Recursos',
 },

 'terrain': {
   'text': 'Terreno',
 },

 'bookmarks': {
   'text': 'Marcadores',
 },

 'unfinished_business_text': {
   'text': 'Asuntos Pendientes'
 },

 'unfinished_business_tooltip': {
   'text': 'Añade '+event_img+'<b>Caballero Encapuchado</b> a la línea de tiempo dentro de cuatro años.<br/><br/><b style="color:#cc0;">Haz clic</b> para volver al <b>Asentamiento</b><br/><br/>Esto iniciará un nuevo <b>Año de la Linterna</b>.'
 }
 // tooltips['action_card'].text
}

module.exports = {
 texts,
}
