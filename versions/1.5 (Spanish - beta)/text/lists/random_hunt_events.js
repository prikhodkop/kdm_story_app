const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

const random_hunt_events = {
1: `1 | Linternas Rotas
Los sobrevivientes sienten algo crujir bajo sus pies. El revelador de eventos puede optar por bajar su linterna e <b>investigar</b> o ignorar la sensación y continuar su viaje.

[TO] Elección
[td] Revelador de eventos - ¿Qué haces?
[c] Investigar
[d<]

El revelador de eventos gana +1 de coraje y tira 1d10.

[TO] 1d10
[td] Revelador de eventos - Investigar
[c] 1-5
[d] Te tambaleas y te cortas el pie con un fragmento afilado. Sufres ★ daño de evento en tus piernas.
[c] 6-8
[d] Rescatas algo útil. Ganas 1 recurso básico <b>linterna rota</b>.
[c] 9+
[d] Los sobrevivientes descubren un tesoro de linternas abandonadas desde hace mucho tiempo. La vista desolada los llena de temor, cada sobreviviente establece su cordura en 0. Después de componerse, cada sobreviviente recoge 1 recurso básico <b>linterna rota</b>; agréguelos al depósito del asentamiento.
[T]

[>d]
[c] Ignorar
[dt] Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
`,	
  
2: `2 | Cadáver

[img] 2 # sin-sombra

Los sobrevivientes son sobrecogidos por un escalofrío repentino, su aliento se congela en sus pulmones. Los dientes de los sobrevivientes castañetean despiadadamente. Todos los sobrevivientes pierden ★ supervivencia. En el centro de la repentina helada yace un cadáver perfectamente conservado.

[TA] Verificar
[td] ¿Qué innovaciones tiene el asentamiento?
[c] Canibalizar
[d] El revelador de eventos obtiene 1 recurso básico aleatorio.
[c] Tumbas
[d] El revelador de eventos examina el cadáver y gana +1 coraje y +1 comprensión.
[c] Memento Mori
[dt] El revelador de eventos entiende un poco sobre lo que le sucedió al cadáver. Obtienen 1 arte de lucha aleatorio.
`,

  3: `3 | Palomas del Cáncer
Los sobrevivientes están rodeados por el eco del balbuceo infantil. Extraños pájaros de rostro de bebé vuelan en círculos sobre sus cabezas. Atrapados por un horror instintivo, ¡los sobrevivientes corren! Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o sobrevivientes, en caso de empate) se convierte en un rezagado.

[i] Si algún sobreviviente tiene equipo <b>ruidoso</b>, resta 2 a su tirada.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[d<]

Cada rezagado tira 1d10.

[i] Si algún sobreviviente tiene un látigo, lo azota, dispersando a muchas de las aves. Cada rezagado suma +4 a su tirada.

[TA] 1d10
[td] Rezagado
[c] 1-3
[d] Corriendo y agitándote salvajemente, de repente te encuentras en pánico y solo. Las palomas del cáncer esperan y te picotean despiadadamente en la espalda, su alegre arrullo llena tu cabeza de horror. Una hora después, los otros sobrevivientes te encuentran enroscado y llorando en el suelo. Estás <b>Muerto por dentro</b>: no puedes ganar supervivencia. Registra esta lesión.
[c] 4-6
[d] ¡Una paloma del cáncer se agarra de tu espalda! Libérala gastando 1 supervivencia. De lo contrario, estás <b>Muerto por dentro</b>: no puedes ganar supervivencia. Registra esta lesión.
[c] 7-8
[d] Escapas de las terribles criaturas.
[c] 9+
[dt] Logras golpear a una de las criaturas asquerosas. Ganas 1 recurso básico aleatorio.
[>d]
[T]`,

  4: `4 | Hambruna
El camino por delante está árido y muerto. Puedes seguir adelante o intentar encontrar una manera de rodearlo.

[TO] Elección
[td] ¿Qué haces?
[c] Seguir adelante, los sobrevivientes ganan +1 coraje #Seguir adelante
[d<]

Tus estómagos gruñen en la oscuridad mientras avanzas tambaleándote. Los sobrevivientes reúnen sus suministros. El revelador de eventos tira 1d10 y suma +2 a su tirada por cada equipo o recurso consumible del grupo.

[TO] 1d10
[td] Revelador de eventos
[c] 1-8
[d] La caza cobra su precio. Fuertes dolores de hambre se apoderan de todos los sobrevivientes, ganan un token de velocidad -1.
[c] 9-14
[d] Logras resistir el terrible hambre.
[c] 15+
[dt] Todos se revitalizan con su bocadillo. Cada sobreviviente gana +1 supervivencia.

[>d]
[c] Rodear
[dt] Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
`,

  5: `5 | Campos de Carne
A medida que avanzan, los rostros de piedra en el suelo dan paso a un campo de protuberancias del tamaño de un hombre con gruesos pelos negros. El terreno sinuoso irradia calor húmedo. Mientras viajan, cada sobreviviente sufre agotamiento por calor, perdiendo 1 supervivencia. El revelador de eventos tira 1d10.

[i] Si algún sobreviviente tiene una hoz, ayudan a abrirse paso cortando el grueso pelo negro. Suma +4 a tu tirada.

[TO] 1d10
[td] Revelador de eventos
[c] 1
[d<]

¡El revelador de eventos contrae una enfermedad devoradora de carne al rozar las protuberancias gigantes! Una extremidad aleatoria se ve afectada y debe ser amputada de inmediato.

[TO] 1d10
[td] Revelador de eventos
[c] 1-5
[d] Sufre una lesión grave <b>Brazo amputado</b>.
[c] 6-10
[dt] Sufre una lesión grave <b>Pierna amputada</b>.

[>d]
[c] 2-3
[d] Si algún sobreviviente está <b>loco</b>, ¡imagina que los campos de carne los atacan! Se vuelven histéricos, agitándose y enredándose en el pelo grueso. Cada sobreviviente <b>loco</b> sufre ★ daño de evento en una ubicación aleatoria.
[c] 4-7
[d] Hace calor y es desagradable, pero los sobrevivientes pasan por los campos de carne sin complicaciones.
[c] 8-9
[d] El revelador de eventos aprovecha la situación y corta una porción de carne libre. Gana 1 recurso básico <b>piel</b>.
[c] 10+
[d] Cada sobreviviente cosecha 1 recurso básico <b>piel</b> de los campos de carne.
[T]
`,
		
6: `6 | Estatua sin Rostro
Los sobrevivientes se encuentran con una estatua sin rostro sosteniendo una linterna brillante. Bañados en la cálida luz, los sobrevivientes se renuevan.

Cada sobreviviente gana 1 supervivencia.

[TO] Verificar
[td] ¿El asentamiento tiene Escultura?
[c] Sí #Escultura
[d<]

Los sobrevivientes aprecian profundamente la artesanía sutil del artista. Cada sobreviviente tira 1d10. Gana esa cantidad de supervivencia y +1 comprensión.

[TO] Verificar
[td] ¿Todos los sobrevivientes están locos?
[c] Sí #Todos locos
[d] Los sobrevivientes continúan su caza.
[c] No
[d<]

Los sobrevivientes pueden descansar aquí por más tiempo.

[TO] Elección
[td] ¿Quieres descansar?
[c] Sí #Descansar
[d] Cada sobreviviente cura todos los niveles de heridas y puntos de armadura perdidos en 1 ubicación de impacto. Sin embargo, pierden la pista de su presa. Muévela 1 espacio lejos de los sobrevivientes en el tablero de caza. Si un sobreviviente cura más de 5 puntos de armadura perdidos de esta manera, miran la luz brillante durante demasiado tiempo y obtienen 1 trastorno aleatorio.
[c] No
[dt] Los sobrevivientes continúan su caza.

[>d]
[c] No #
[d<]

[TO] Verificar
[td] ¿Todos los sobrevivientes están locos?
[c] Sí #Todos locos
[d] Los sobrevivientes continúan su caza.
[c] No #
[d<]

Los sobrevivientes pueden descansar aquí por más tiempo.

[TO] Elección
[td] ¿Quieres descansar?
[c] Sí #Descansar
[d] Cada sobreviviente cura todos los niveles de heridas y puntos de armadura perdidos en 1 ubicación de impacto. Sin embargo, pierden la pista de su presa. Muévela 1 espacio lejos de los sobrevivientes en el tablero de caza. Si un sobreviviente cura más de 5 puntos de armadura perdidos de esta manera, miran la luz brillante durante demasiado tiempo y obtienen 1 trastorno aleatorio.
[c] No #
[dt] Los sobrevivientes continúan su caza.

[>d]
[T]

[>d]
[c] No #
[d<]

[TO] Verificar
[td] ¿Todos los sobrevivientes están locos?
[c] Sí #Todos locos
[d] Los sobrevivientes continúan su caza.
[c] No #
[d<]

Los sobrevivientes pueden descansar aquí por más tiempo.

[TO] Elección
[td] ¿Quieres descansar?
[c] Sí #Descansar
[d] Cada sobreviviente cura todos los niveles de heridas y puntos de armadura perdidos en 1 ubicación de impacto. Sin embargo, pierden la pista de su presa. Muévela 1 espacio lejos de los sobrevivientes en el tablero de caza. Si un sobreviviente cura más de 5 puntos de armadura perdidos de esta manera, miran la luz brillante durante demasiado tiempo y obtienen 1 trastorno aleatorio.
[c] No #
[dt] Los sobrevivientes continúan su caza.

[>d]
[T]

[>d]
[T]
`,

  7: `7 | Suelo Hambriento
¡El suelo se parte de repente y una boca de piedra abierta intenta devorar por completo al revelador de eventos! El revelador de eventos tira 1d10.

[i] Si otro sobreviviente tiene un látigo, lanzan una cuerda al revelador de eventos. Suma +4 a tu tirada.

[TO] 1d10
[td] Revelador de eventos
[c] 1
[d] Con un grito amortiguado, desapareces en el suelo. Logras agarrarte a una repisa precaria sobre la boca abierta. Pierdes toda la supervivencia mientras trepas desesperadamente hacia la seguridad. Si no tenías ninguna, caes. Los huesos crujen entre los dientes de piedra. Eres devorado por completo. Muerto.
[c] 2-5
[d] Te revuelcas, pero tu pierna queda atrapada en la terrible boca. Sufres 2 puntos de daño de evento en las piernas.
[c] 6-9
[d] ¡Logras saltar a tiempo!
[c] 10+
[d] ¡Eructo! ¡Gorgoteo! El suelo vomita un brillante trozo de chatarra. Ganas 1 recurso básico <b>linterna rota</b>.
[T]
`,

  8: `8 | Humo Lamentoso

[img] 8
Un gemido constante sigue a los sobrevivientes. Finalmente, entran en una zona envuelta en espesa niebla y el gemido alcanza un tono frenético.

Cada sobreviviente <b>no sordo</b> tira 1d10.

[TO] 1d10
[td] Determinar rezagado
[c] Todos los sobrevivientes son <b>sordos</b>
[d] Los sobrevivientes continúan su camino, ignorando la cacofonía: termina este evento.
[c] Rezagado elegido
[d<]

El sobreviviente con la puntuación más baja (o sobrevivientes, en caso de empate) se convierte en un rezagado.

Cada rezagado tira 1d10.

[i] Si algún sobreviviente tiene equipo <b>ruidoso</b>, el rezagado suma +2 a su tirada.

[TO] Verificar
[td] ¿Algún sobreviviente tiene equipo <b>ruidoso</b> y el asentamiento tiene <b>Tambores</b>?
[c] Sí #Tambores
[d] Los sobrevivientes contrarrestan los lamentos con una melodía de su tierra natal. Cada sobreviviente gana +2 cordura y +2 supervivencia.
[c] No #
[d<]

[TA] 1d10
[td] Rezagado
[c] 1-3
[d] La niebla a tu alrededor se vuelve negra y se llena de formas de rostros atormentados. Te vuelves loco. Ganas 1 trastorno aleatorio.
[c] 4-6
[d] La niebla se vuelve espesa y comienza a lamentarse. Tapas tus oídos con los dedos, pero es inútil. Sufres daño de evento cerebral ★.
[c] 7-9
[d] Te metes los pulgares en los oídos y corres, dejando atrás el humo lamentoso.
[c] 10+
[dt] Imitando el humo perturbador, empiezas a lamentarte tranquilamente con él. Ganas +2 cordura.

[>d]
[T]

[>d]
[T]
`,

  9: `9 | Luz Dorada
Una luz dorada ciega a los sobrevivientes, deteniéndolos en seco. La luz brilla desde una única fuente. El revelador de eventos siente la compulsión de <b>investigar</b>.
Gana +1 coraje y tira 1d10.

[TO] 1d10
[td] Event revealer - Investigar
[c] Event revealer está <b>ciego</b>
[d] Caminan en la dirección incorrecta y ganan +3 cordura. Tira nuevamente en la tabla de eventos de caza y no investigues la luz.
[c] 1-3
[d] La luz es abrumadora. Tu mente frágil no puede comprender sus palabras silenciosas. Ganas 1 trastorno aleatorio.
[c] 4-8
[d] Vagas a través de la luz, bañado en una sensación cálida y horrible. No encuentras nada más que exposición. Sufres daño de evento ★ en una ubicación de impacto aleatoria.
[c] 9+
[d] Algo en la luz te conmueve y tu determinación se intensifica. Ganas +1 supervivencia.
[T]
`,

  10: `10 | Recolector

[img] 10 # sin-sombra # width:45%
<b>Este evento no puede ser vuelto a tirar ni evitado de ninguna manera.</b>
El suelo tiembla y se agrieta debajo de los sobrevivientes. Un gusano colosal emerge desde abajo, su piel es un mosaico de rostros gritando. La mera vista de ello enloquece.
Todos los sobrevivientes ganan 1 trastorno aleatorio y deben gastar 1 supervivencia o ser devorados enteros.

[TO] Verificar
[td] ¿Algún sobreviviente tiene equipo ruidoso?
[c] Sí #Sobreviviente con equipo ruidoso
[d<]

El Recolector es atraído por el sonido y es devorado instantáneamente. Nada puede salvarlo.

La criatura es tan aterradora que los cerebros de los sobrevivientes borran la experiencia de sus memorias. No obtienen los beneficios de su principio de muerte.
[>d]
[c] No #
[d<]

La criatura es tan aterradora que los cerebros de los sobrevivientes borran la experiencia de sus memorias. No obtienen los beneficios de su principio de muerte.
[>d]
[~T]
`,

  11: `11 | Excremento de Monstruo
Los sobrevivientes encuentran algunas heces de monstruo, similares a las de su presa. El revelador de eventos elige <b>investigar</b> o <b>consumir</b> las heces (elige solo una).

[TO] Elección
[td] Event revealer - ¿Qué haces?
[c] Investigar #Investigar
[d<]

Gana +1 comprensión y tira 1d10.

[TO] 1d10
[td] Event revealer - Investigar
[c] 1-3
[d] Descubres lo asqueroso que es jugar con heces. Pierdes 1 supervivencia y tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
[c] 4-6
[d] Las heces cuentan una historia. Estás en el camino correcto. Ganas +1 supervivencia.
[c] 7+
[d] Conoces bien estas heces. Puedes saltar el siguiente espacio de caza. Si este movimiento comienza el enfrentamiento, los sobrevivientes <b>acechan</b> a su presa.
[T]

[>d]
[c] Consumir #Consumir
[d<]

Gana +1 coraje y tira 1d10.

[TO] 1d10
[td] Event revealer - Consumir
[c] 1-3
[d<]

¡Parece que no fuiste el único con esta idea! Intentas toser los desechos, ¡pero tu boca está llena de parásitos retorciéndose! Se abren camino hacia arriba a través de tu cavidad nasal hasta tu cerebro. A partir de ahora, siempre te sientes un poco mareado. Sufres -1 evasión permanente.
[i] Además, si tienes el trastorno <b>Quijotesco</b>, los parásitos saborean la actividad neural única de tu cerebro, se alimentan implacablemente y excretan desechos que alimentan aún más tu locura. Ganas +10 cordura y el trastorno <b>Inmortal</b>. Tu trastorno <b>Quijotesco</b> nunca se puede quitar por ningún motivo.

[>d]
[c] 4-6
[d] Es repulsivo. Tu título se convierte en "Hombre de Excremento". Todos en el asentamiento deben llamarte así desde ahora.
[c] 7+
[d] Había algo bastante especial en las heces. Ganas +1 ficha de velocidad y +1 ficha de fuerza.
[T]

[>d]
[T]
`,

12: `12 | Destino Sellado

[img] 12 # no-sombra

Los sobrevivientes sienten colectivamente un nivel elevado de anticipación. Su objetivo está cerca.

El revelador de eventos gana +1 coraje. Los sobrevivientes pueden saltar el próximo espacio de caza. Si este movimiento inicia el enfrentamiento, los sobrevivientes <b>acechan</b> a su presa.
`,

13: `13 | Sobrecarga
El revelador de eventos cae de rodillas, sollozando incontrolablemente. Simplemente han tenido demasiado. Pierden d10 de supervivencia y ganan 1 trastorno aleatorio.

[TO] Elección
[td] ¿Qué Principio de la Sociedad tiene el asentamiento?
[c] Aceptar la Oscuridad
[d<]

El revelador de eventos abraza su desesperación. Tira 1d10.

[TO] 1d10
[td] Evento revelador
[c] 1-5
[d] Las profundidades de tu miseria son más profundas de lo que podrías haber imaginado. Ganas trastornos hasta que tengas 3 de ellos. Pierdes toda la supervivencia.
[c] 6+
[dt] Te hundes en el fondo de tu miseria y rasguñas sus mismos cimientos, hambriento de más. Descubres una rabia primordial rodeando un núcleo de serena calma. Ganas +1 comprensión y el trastorno <b>Rageholic</b>.
[>d]
[c] Labor Colectiva
[d<]

Se levantan lentamente, prometiendo nunca rendirse ante la esperanza. Tira 1d10.

[TO] 1d10
[td] Evento revelador
[c] 1-5
[d] Te levantas, lágrimas silenciosas corren por tu rostro. Con el asentamiento a tus espaldas, estás listo para enfrentar la oscuridad. Ganas +1 coraje y +1d10 de supervivencia.
[c] 6+
[dt] Toques brevemente el fondo de tu miseria y regresas a plena conciencia con nuevas experiencias para compartir. Si algún sobreviviente regresa al asentamiento este año, gana +2`+endeavor_img+`.

[>d]
[c] Ningún Principio de la Sociedad
[dt] Los sobrevivientes continúan su caza.
`,

14: `14 | Encuentro Fortuito

[img] 14

Los sobrevivientes encuentran a una encantadora joven descalza con los pies cubiertos de hollín.

[TO] Verificación
[td] ¿Ya has tirado este evento o todos los sobrevivientes están locos?
[c] Sí #
[d] Ella da la espalda y desaparece en la oscuridad. Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
[c] No #
[d<]

Exclamando salvajemente ante los sobrevivientes, la presencia de la mujer llena a todos con una sensación alienígena de esperanza. Todos los sobrevivientes ganan +1 coraje, +1 comprensión.

[TO] Verificación
[td] ¿El asentamiento tiene Cobertizo?
[c] Sí #Cobertizo
[d] Chasquea los dedos y envejece ante sus ojos. Un escalofrío recorre a los sobrevivientes. Sus cuerpos y armaduras se reconstruyen espontáneamente. Cura todos los niveles de lesiones y puntos de armadura perdidos. Luego, se lleva a un sobreviviente al azar y le susurra secretos sobre la próxima caza. Gana un token de precisión +1.
[c] No #
[dt] Ella da la espalda y desaparece en la oscuridad.
[>d]
[T]
`,

15: `15 | Trampa para Hombres
El revelador de eventos activa una terrible trampa. Tira 1d10.
[TO] 1d10
[td] Revelador de eventos
[c] 1-2
[d] Con un terrible estruendo, las mandíbulas de acero de la trampa para hombres te cortan limpiamente el pie. Sufres la lesión severa <b>pierna amputada</b>.
[c] 3-6
[d] Pierna destrozada. Destruye toda la armadura en la ubicación de las piernas, luego sufre 1 daño de evento a las piernas.
[c] 7-9
[d] La trampa es bastante vieja y débil. Sufre 1 daño de evento a las piernas.
[c] 10+
[d] ¡El pie del revelador de eventos golpea la trampa, asustando a todos! Sin embargo, ya estaba activada, dejando un desafortunado premio en sus mandíbulas. Gana 1 recurso básico aleatorio.
[T]
`,

16: `16 | Pesadillas Nocturnas
Tu miserable sueño está plagado de pesadillas que retuercen la mente. Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente - ¿El resultado es mayor que la cordura?
[c] Sí
[d] Aprende algo del horror que despierta y gana +1 comprensión.
[c] No
[d] Gana 1 trastorno aleatorio.
[c] El sobreviviente es un salvador o tiene el arte de lucha <b>Sentido Extra</b>
[dt] Desaparecen en el sueño, emergiendo de la oscuridad horas después. Ganan +4 XP de Caza y un recurso básico aleatorio.
`,

17: `17 | Cara a Cara
En medio del mar de caras de piedra, una llama la atención del revelador de eventos. Se sienten obligados a <b>investigar</b>. Gana +1 coraje y tira 1d10.
[TO] 1d10
[td] Evento revelador
[c] 1
[d] La cara es idéntica a la tuya. Gasta 1d5 de supervivencia o reduce tu comprensión a 0.
[c] 2-7
[d] La cara te recuerda a alguien querido. Tu corazón duele de soledad. Si tu supervivencia es mayor que tu cordura, sufre ★ daño de evento cerebral.
[c] 8+
[dt] La cara es la tuya pero más vieja y sabia. Gana +1 supervivencia y +1 comprensión.
`,

18: `18 | Hierba Marchita

[img] 18 # no-sombra # ancho:35%

Encuentras una extraña planta creciendo desde los ojos de una cara de piedra. El revelador de eventos intenta cosecharla. Tira 1d0.

[i] Si algún sobreviviente tiene una hoz, suma +4 a su tirada.

[TO] 1d10
[td] Evento revelador
[c] 1-7
[d] Por más que lo intentes, no puedes arrancar la hierba profundamente enraizada.
[c] 8+
[dt] ¡Arrancas la hierba! Tiene un enorme poder regenerativo. Cada sobreviviente se frota la piel con ella y elimina 1 lesión severa permanente. Luego, se desmorona en polvo en tus manos.
`,

 19: `19 | Exhalación de Oscuridad

[img] 19 # ancho:25%

Los sobrevivientes están envueltos en una oscuridad húmeda que oscurece sus linternas. Se separan entre sí y se pierden sin esperanza.

[TO] Verificar
[td] ¿Algún sobreviviente tiene el arte de lucha <b>Líder</b>?
[c] Sí #Líder
[d] Avanzan audazmente hacia la oscuridad húmeda y reúnen a todos. Termina este evento.
[c] No #
[d<]

Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado. Cada rezagado tira 1d10.

[TA] 1d10
[td] Rezagado
[c] 1-2
[d] Tropezas y caes sobre los huesos de un monstruo antiguo, destrozando una pieza de equipo en el camino. Archiva 1 equipo de tu elección de tu cuadrícula de equipo.
[c] 3-5
[d] Algo invisible te ataca, sufre ★ daño de evento cerebral y ★ daño de evento a una ubicación aleatoria.
[c] 6-8
[d] ¡Chocas contra la nariz de una gigantesca cara de piedra! Sufre 1 daño de evento en la cabeza.
[c] 9+
[dt] No estás seguro de cómo, pero sales de la oscuridad con las manos llenas. Gana 1 recurso básico aleatorio.

[>d]
[T]
`,

20: `20 | Tierras Secas
A medida que los sobrevivientes avanzan, el aire se vuelve seco y el suelo se agrieta. Los sobrevivientes sufren agotamiento por el calor. Cada sobreviviente pierde 1 supervivencia. Si llevan piel o equipo pesado, en su lugar pierden 1d5 de supervivencia.

[TO] Verificar
[td] ¿Algún sobreviviente tiene una piqueta?
[c] Sí #Piqueta
[d] Los sobrevivientes rompen una vena de aspecto interesante en el suelo agrietado. Gana 1 recurso extraño de <b>Hierro</b>.
[c] No #Sin piqueta
[dt] Los sobrevivientes continúan su caza.
`,

21: `21 | Dibujos
Aterrados en una cueva, los sobrevivientes encuentran extraños dibujos decorando las paredes. Parecen contener un mensaje.

[TO] Verificar
[td] ¿Algún sobreviviente tiene +3 de comprensión o el asentamiento tiene <b>Pictogramas</b>?
[c] Sí #Descifrar

[d<]

[i] Si el asentamiento tiene <b>Pictogramas</b>, cada sobreviviente puede tirar (independientemente de su comprensión) y sumar +4 a sus tiradas.

[TA] 1d10
[td] Cualquier sobreviviente con 3+ de comprensión
[c] 1-3
[d] Tu nariz empieza a sangrar. Sufre ★ daño de evento cerebral.
[c] 4-7
[d] El verdadero significado te escapa. Gana +1 cordura.
[c] 8+
[dt] ¡Los dibujos te enseñan una nueva forma de luchar contra los monstruos! Gana +2 supervivencia y un arte de lucha aleatorio.
[>d]

[c] No
[d] Los sobrevivientes continúan su caza.
[T]
`,

22: `22 | Lluvia Ácida
La oscuridad de arriba se ilumina de repente con una tormenta de lluvia ácida. Huele terrible, quema la carne y forma charcos silbantes en las bocas vueltas de las caras de piedra. Todos los sobrevivientes sufren ★ daño de evento en todas las ubicaciones de golpe mientras se apresuran a buscar refugio.

[TO] Verificar
[td] ¿El asentamiento tiene Escultura?
[c] Sí #Escultura
[d<]

Los sobrevivientes observan en silencio cómo la tormenta erosiona las caras de piedra, borrando sus rasgos. Se preguntan quién o qué repara las caras rotas, si es que existe tal cosa. Los sobrevivientes comparten una risa oscura, cada uno ganando ★ supervivencia.

[TO] 1d10
[td] Evento revelador
[c] 1-5
[d] La tormenta pasa.
[c] 6+
[dt] La tormenta se mueve de regreso a casa. Agrega el evento de asentamiento <b>Tormenta Ácida</b> al cronograma del próximo año.

[>d]
[c] No #Sin Escultura
[d<]

[TO] 1d10
[td] Evento revelador
[c] 1-5
[d] La tormenta pasa.
[c] 6+
[dt] La tormenta se mueve de regreso a casa. Agrega el evento de asentamiento <b>Tormenta Ácida</b> al cronograma del próximo año.

[>d]
[T]
`,
23: `23 | Agua Limpia
Los sobrevivientes pasan por una fuente desolada con forma de rostro de león. Un chorro de agua cristalina fluye de su boca. Cada sobreviviente <b>consume</b> el agua, ganando +1 supervivencia y +1 coraje. Cualquier número de sobrevivientes puede mojarse la cabeza en el agua y tirar 1d10.

[TA] 1d10
[td] Cualquier sobreviviente
[c] 1-2
[d] En el momento en que se moja, tu cabello se vuelve completamente blanco. Gana 1 trastorno aleatorio.
[c] 3-5
[d] Tu cabello está mojado. ¡Felicidades!
[c] 6-8
[d] El agua es estimulante. Gana +1 comprensión o quita un trastorno de tu elección.
[c] 9+
[d] ¡El agua está sorprendentemente fría! Te envuelve como una ola y te deja asombrado. Establece tu cordura en 0 y quita todos los trastornos.
[T]
`,

24: `24 | Comida de las Bocas de Otros

[img] 24 # no-shadow

Los sobrevivientes pasan por una cara de piedra que parece estar sosteniendo algo en su boca. El revelador de eventos <b>investiga</b>. Gana +1 coraje y tira 1d10.

[TO] 1d10
[td] Evento revelador - Investigar
[c] 1-2
[d] Gritas de dolor y retiras la mano, revelando una herida sangrienta. ¿La cara de piedra acaba de morder? Sufre ★ daño de evento cerebral y ★ daño de evento en el brazo.
[c] 3-5
[d] No hay nada. Fue solo un truco de la luz de la linterna.
[c] 6-8
[d] Más piedras, ¿qué esperabas? Gana 1 equipo inicial de <b>Piedra Fundacional</b>.
[c] 9+
[d] Sacas una masa mascada. Gana 1 recurso básico aleatorio y 2 cordura.
[T]
`,

25: `25 | Titanes en la Oscuridad

[img] 25 # no-shadow # ancho:50%

Un estruendoso bramido marca el paso de una bestia verdaderamente titánica. Todos los sobrevivientes <b>no sordos</b> sufren ★ daño de evento cerebral. Los sobrevivientes se acobardan en el suelo, tumbados lo más planos posible y esperando que sean simplemente demasiado pequeños para valer la pena comer.

Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado.

[i] Si algún sobreviviente tiene equipo <b>ruidoso</b>, -2 a su tirada.

[TO] 1d10
[td] Determinar el rezagado
[c] Rezagado elegido
[d<]

Cada rezagado tira 1d10.

[TA] 1d10
[td] Rezagado
[c] 1
[d<]

Eres arrancado del suelo y devorado entero.

[TO] Verificar
[td] ¿El asentamiento tiene Supervivencia del más apto?
[c] Sí #Supervivencia del más apto
[d] Te retuerces fuera de su boca y caes con un golpe sordo. Sufre las lesiones graves de <b>hueso roto</b> y <b>pierna rota</b>, pero no mueres.
[c] No #
[dt] Muerto.

[>d]
[c] 2-4
[d] Algo te atrapa en su gran mandíbula y te mastica causándote 1 daño de evento a 1d5 ubicaciones de golpe aleatorias.
[c] 5-6
[d] ¡Las mandíbulas apretadas apenas te muerden! Sufre ★ daño de evento a una ubicación de golpe aleatoria.
[c] 7-9
[d] Te haces aún más plano contra el suelo y evitas algo terrible.
[c] 10+
[dt] Nunca dejarás de correr por lo que viste. Gana +1 movimiento permanente.
[>d]
[T]
`,

26: `26 | Fosa
El suelo bajo los pies del revelador de eventos cede y cae en una fosa debajo. El revelador de eventos tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] Otro sobreviviente tiene un látigo #Látigo
[d] Te lanzan una cuerda a tiempo; no tires en la tabla.
[c] El revelador de eventos tiene el arte de lucha <b>Caída</b> #Caída
[d] Ágilmente atrapas un saliente y te subes; gana un token de velocidad y no tires en la tabla.
[c] 1
[d] Aterrizas con un crujido enfermizo, destrozando tus piernas. Sufre la lesión grave de <b>pierna rota</b> dos veces.
[c] 2-3
[d] Tu pierna rompe tu caída. Sufre la lesión grave de <b>pierna rota</b>.
[c] 4-6
[d] Aterrizas en el fondo con un fuerte golpe. Sufre 2 daños de evento en una ubicación de golpe aleatoria y archiva todo el equipo <b>frágil</b> en tu cuadrícula de equipo.
[c] 7-9
[d] Aterrizas en el fondo con un golpe suave. Sufre 1 daño de evento en una ubicación de golpe aleatoria.
[c] 10+
[dt] Logras agarrar el borde de la fosa y escapas ileso.
`,

27: `27 | Cazadores de Hombres

[img] 27 # no-shadow

Exhaustos, los sobrevivientes descansan. Durante su sueño inquieto, un pequeño insecto se acerca sin ser detectado.

Elige 1 sobreviviente masculino al azar y tira en la tabla.

[TO] Elección
[td] Seleccionar sobreviviente masculino al azar
[c] Sobreviviente elegido
[d<]

Tira 1d10.

[TO] 1d10
[td] Sobreviviente masculino
[c] Tiene el arte de lucha <b>Luchador Inconsciente</b> #Luchador Inconsciente
[d] Aplastan al insecto mientras aún roncan. Se despiertan confundidos, con un recurso de insecto aleatorio en sus manos.
[c] 1-5
[d] Cuando te despiertas, tus genitales han sido robados. En su lugar, solo hay piel lisa. Sufre la lesión grave de <b>genitales destruidos</b>.
[c] 6+
[dt] Despiertas de golpe, aterrorizado al ver pinzas amenazadoras acercándose. Tus defensas son rápidas. Sin pensar, golpeas al insecto que trepa por tus pantalones, sufriendo 1 daño de evento en la cintura.

[>d]
[c] No hay sobrevivientes masculinos
[d] No sucede nada.
[T]
`,

28: `28 | Pájaro Trol

Un pájaro desaliñado y poco atractivo se encuentra en el camino de los sobrevivientes. Sus ojos pequeños y húmedos parpadean expectantes y emite una risa humana espeluznante. Los sobrevivientes pueden archivar 1 objeto <b>consumible</b> o equipo, ofreciéndolo al pájaro trol.

[i] Si algún sobreviviente está loco, deben alimentar al pájaro trol, si pueden.

[TO] Elección
[td] ¿Qué haces?
[c] Alimenta al pájaro #Alimenta
[d] Alimentas al pájaro trol y se va con una risa espantosa.
[c] Ignora al pájaro #Ignorar
[d<]

El pájaro trol sigue a los sobrevivientes en su caza, burlándose constantemente con su risa. Tira 1d10.

[i] Si algún sobreviviente tiene el trastorno <b>Coprolalia</b>, maldicen al pájaro y hacen gestos vigorosos y vulgares. El pájaro queda impresionado. Agrega +3 a tu tirada.

[TO] 1d10
[td] Revelador de eventos
[c] 1-5
[d] El pájaro trol hace un ruido terrible, alertando al monstruo. Todos los sobrevivientes ganan +1 comprensión. Al comienzo del enfrentamiento, el monstruo <b>embosca</b> a los sobrevivientes.
[c] 6+
[dt] El pájaro trol se burla y distrae al monstruo mientras los sobrevivientes se acercan sigilosamente. Todos los sobrevivientes ganan +1 cordura. Al comienzo del enfrentamiento, los sobrevivientes <b>emboscan</b> al monstruo.
[>d]
[T]
`,

29: `29 | Herrero Oscuro

[img] 29 # no-shadow

Los sobrevivientes se cruzan con un hombre alto y antinaturalmente delgado con una capa con capucha. Donde sus pies golpean el suelo, las chispas iluminan su camino. Cada sobreviviente con 3+ coraje puede darle una pieza de equipo de su cuadrícula de equipo y tirar en la tabla.

[i] Si tienen el trastorno Honorable, suma +3 a su tirada.

[TA] 1d10
[td] Cualquier sobreviviente con 3+ coraje
[c] 1-2
[d] La criatura levanta el objeto a su boca y se lo come. Ha desaparecido. Archiva la carta de equipo.
[c] 3-6
[d] La criatura rechaza el equipo y te mira con un solo ojo grande. Sufre 1d10 de daño de evento cerebral.
[c] 7-8
[d] La criatura desencaja su mandíbula y se come la pieza de equipo. A cambio, te entrega un escudo brillante. Gana el equipo raro <b>Escudo de Acero</b>.
[c] 9+
[dt] La criatura desencaja su mandíbula y se come la pieza de equipo. A cambio, te entrega una espada brillante. Gana el equipo raro <b>Espada de Acero</b>.
`,

30: `30 | Rostros Podridos
Las caras de piedra comienzan a ceder bajo los pies de los sobrevivientes. Están hinchados y huelen terriblemente. Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente
[c] 1
[d] Tu pie queda atrapado y rápidamente comienzas a hundirte en el suelo. Después de una lucha, logras liberarte. Si tenías armadura para las piernas, se pierde en el lodo. Gasta 3 de supervivencia o archiva el equipo.
[c] 2-5
[d] ¡Atascado, luchas por liberarte! Tira nuevamente en esta tabla o gasta 1 de supervivencia para escapar.
[c] 6-9
[d] Escapas sin incidentes.
[c] 10+
[dt] ¡Encuentras algo desagradable removiendo la podredumbre! Gana 1 recurso básico aleatorio.
`,

31: `31 | Camino Extraño
Los sobrevivientes se detienen al comienzo de un camino. Pequeñas linternas titilan, marcando sus bordes.

El revelador de eventos decide si los sobrevivientes siguen el camino o no.
[i] Si el revelador de eventos está <b>loco</b>, debe hacerlo.

[TO] Elección
[td] Revelador de eventos - ¿Seguir el camino?
[c] Sí #Seguir
[d<]

El revelador de eventos gana +1 comprensión y luego tira 1d10 y suma su comprensión.

[TO] 1d10
[td] Revelador de eventos
[c] 1
[d] Un dedo colosal desciende desde arriba, aplastando a un sobreviviente al azar. Sufre 2 daños de evento en todas las ubicaciones de golpe.
[c] 2-4
[d] Un sobreviviente al azar se desgarra histéricamente por una rama en el camino. Regresan horas después, pálidos como fantasmas y sin recuerdos de lo que sucedió. Pierden 1d10 de supervivencia.
[c] 5-7
[d] El camino se retuerce y gira vertiginosamente en la oscuridad. Todos los sobrevivientes sufren 1 daño de evento cerebral y el revelador de eventos tira nuevamente en esta tabla, sumando +2 a su tirada.
[c] 8-9
[d] El camino lleva a los sobrevivientes a una gran cara de piedra con linternas en lugar de ojos. Dentro de su boca abierta hay un botín. Cada sobreviviente gana 1 recurso básico aleatorio.
[c] 10+
[d<]

¡El camino conduce a la bestia que están cazando! Los sobrevivientes <b>emboscan</b> al monstruo.
[i] Si algún sobreviviente tiene el trastorno <b>Honorable</b>, se dan cuenta de la locura de sus acciones y pueden eliminar el trastorno. Si algún sobreviviente sigue siendo <b>Honorable</b>, anuncian su presencia al monstruo; el monstruo <b>embosca</b> a los sobrevivientes en su lugar.

[>d]
[T]

[>d]
[c] No #No seguir
[dt] Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
`,

32: `32 | Locura Repentina
El revelador de eventos es devastado por una cacofonía penetrante en su cabeza. Tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] Resultado menor o igual a su cordura actual #
[d<]

¡Se vuelven locos, atacando a sus compañeros! Cada otro sobreviviente sufre 1 daño de evento en una ubicación de golpe aleatoria antes de que el revelador de eventos recupere el control de sí mismo.

[TO] Verificar
[td] ¿El revelador de eventos tiene el arte de lucha <b>Enloquecido</b>?
[c] Sí #Enloquecido
[d] Obtienen perspicacia de su experiencia. Gana +10 de cordura y +2 de comprensión.
[c] No #
[d] No aprenden nada de la experiencia.
[T]

[>d]
[c] Resultado mayor que su cordura actual #
[d<]

Recuperan el control de sí mismos.

[TO] Verificar
[td] ¿El revelador de eventos tiene el arte de lucha <b>Enloquecido</b>?
[c] Sí #Enloquecido
[d] Obtienen perspicacia de su experiencia. Gana +10 de cordura y +2 de comprensión.
[c] No #
[d] No aprenden nada de la experiencia.
[T]

[>d]
[T]
`,

33: `33 | Susurra Tu Nombre

[img] 33

El revelador de eventos tropieza con una nariz sobresaliente en el suelo. ¡Los labios de una cara de piedra comienzan a moverse!

[TO] Verificar
[td] ¿El revelador de eventos tiene un nombre?
[c] Sí #
[d<]

Los labios susurran seductoramente el nombre del sobreviviente.

[TO] Verificar
[td] ¿El revelador de eventos está loco?
[c] Sí #Loco
[d<]

Son atraídos, besando salvajemente la cara. Repugnados y enfurecidos, los otros sobrevivientes sufren 1 daño de evento cerebral antes de sacar al sobreviviente enloquecido del suelo y seguir adelante.

[TO] Verificar
[td] ¿Alguno de los sobrevivientes tiene la discapacidad <b>Hambre de Médula</b>?
[c] Sí #Hambre de Médula
[d] La cara susurra secretamente el propósito de su vida. Gana +1 fuerza permanente. Agrega el evento de asentamiento <b>Asesinato</b> a la línea de tiempo el próximo año.
[c] No #
[d] Los sobrevivientes continúan su caza.
[T]

[>d]
[c] No #No loco
[d<]

Gana +1 comprensión, sintiendo que está a punto de aprender algo.

[TO] Verificar
[td] ¿Alguno de los sobrevivientes tiene la discapacidad <b>Hambre de Médula</b>?
[c] Sí #Hambre de Médula
[d] La cara susurra secretamente el propósito de su vida. Gana +1 fuerza permanente. Agrega el evento de asentamiento <b>Asesinato</b> a la línea de tiempo el próximo año.
[c] No #
[d] Los sobrevivientes continúan su caza.
[T]

[>d]
[T]

[>d]
[c] No #
[dt] Los labios dejan de moverse y no sucede nada más.
`,

34: `34 | Miseria Paralizante
Cada sobreviviente tira 1d10. El sobreviviente (o sobrevivientes) con la puntuación más baja se convierte en un rezagado en caso de empate.

[i] Si algún sobreviviente (o sobrevivientes) tiene el trastorno <b>Ansiedad</b>, ellos son los rezagados. No tira.

[TO] 1d10
[td] Determinar el rezagado
[c] Rezagado elegido
[d<]

El rezagado se pierde en un momento de profunda duda sobre sí mismo. Se resbala, sin tener la voluntad de atraparse, y cae por una colina empinada de caras de piedra. Aterriza incómodamente con un crujido, sufriendo la lesión grave <b>pierna rota</b>. Sollozando para sí mismo, se da cuenta de lo terrible que es su vida y gana +1 comprensión.

[TA] Verificar
[td] ¿El rezagado tiene el trastorno <b>Comer en Exceso</b>?
[c] Sí #Comer en Exceso
[d] Se limpian las lágrimas y alcanzan a una criatura cercana, metiéndola instintivamente en la boca para consolarse. Saca 1 recurso aleatorio de alimaña y <b>consume</b> uno.
[c] No #No Comer en Exceso
[d] No sucede nada.
[T]

[>d]
[T]
`,

35: `35 | Horno de Linterna Roto
Los sobrevivientes se encuentran con las ruinas destrozadas de un pequeño asentamiento. Cadáveres cenicientos salpican las ruinas, desintegrándose al menor toque. Un horno de linterna apagado permanece intacto en el centro del asentamiento.

El revelador de eventos tira 1d10 y suma su comprensión.

[TO] 1d10
[td] Revelador de eventos
[c] 1-4
[d<]

[TO] Verificar
[td] ¿El asentamiento tiene <b>Canto de los Valientes</b>?
[c] Sí #Canto de los Valientes
[d<]

El grupo puede nominar a un valiente sobreviviente para <b>investigar</b> las ruinas del tesoro de linternas del asentamiento. Ganan +1 coraje y tiran 1d10.

[TO] 1d10
[td] Sobreviviente Nominado
[c] 1-5
[d] Intentas entrar en el tesoro de linternas en ruinas, pero te vences por el miedo, te arrodillas y vomitas por todas partes. Cuando te levantas, te das cuenta de que eres físicamente incapaz de seguir adelante. Gana el trastorno <b>Apatía</b>.
[c] 6+
[dt] Te sientes repelido por el tesoro de linternas en ruinas, pero te quedas el tiempo suficiente para agarrar un par de insectos que se mueven dentro de él. Eso es lo más cerca que te sientes de ir. Gana 2 recursos de alimaña de tu elección.

[>d]
[c] No #
[d<]

Los sobrevivientes continúan su caza.

[>d]
[T]

[>d]
[c] 5+
[d<]

Gana la innovación <b>Horno de Linterna</b>:

<button class="hunt_event_action_button hoverable" id="lantern_oven" onClick="placeReminder('lantern_oven')">Obtener Innovación</button>

[i] Si el asentamiento ya tiene esta innovación, el revelador de eventos recoge un recurso básico <b>linterna rota</b> de los restos.

[TO] Verificar
[td] ¿El asentamiento tiene <b>Canto de los Valientes</b>?
[c] Sí #Canto de los Valientes
[d<]

El grupo puede nominar a un valiente sobreviviente para <b>investigar</b> las ruinas del tesoro de linternas del asentamiento. Ganan +1 coraje y tiran 1d10.

[TO] 1d10
[td] Sobreviviente Nominado
[c] 1-5
[d] Intentas entrar en el tesoro de linternas en ruinas, pero te vences por el miedo, te arrodillas y vomitas por todas partes. Cuando te levantas, te das cuenta de que eres físicamente incapaz de seguir adelante. Gana el trastorno <b>Apatía</b>.
[c] 6+
[dt] Te sientes repelido por el tesoro de linternas en ruinas, pero te quedas el tiempo suficiente para agarrar un par de insectos que se mueven dentro de él. Eso es lo más cerca que te sientes de ir. Gana 2 recursos de alimaña de tu elección.

[>d]
[c] No #
[d<]

Los sobrevivientes continúan su caza.

[>d]
[T]

[>d]
[T]
`,

36: `36 | En el Rastro
Los sobrevivientes avanzan rápidamente, sintiendo a su presa cerca. Salta el siguiente espacio de caza. Si este movimiento comienza el enfrentamiento, los sobrevivientes <b>emboscan</b> a su presa.
[i] Si algún sobreviviente tiene equipo <b>ruidoso</b>, los sobrevivientes no emboscan. Comienza el enfrentamiento normalmente.
`,

37: `37 | Perdidos
Los sobrevivientes están irremediablemente perdidos en la oscuridad inquebrantable. Mueva a los sobrevivientes 2 espacios hacia atrás en el tablero de caza.
`,

38: `38 | Gregalope

Un masivo Gregalope se alza en el horizonte, su antiguo cuerpo hinchado de tumores y tejido cicatrizado. Sus ojos lechosos detectan a los sobrevivientes y se aleja dando saltos. Impulsados por un deseo repentino, los sobrevivientes lo persiguen. El revelador de eventos tira 1d10 y suma su movimiento a su tirada.

[TO] 1d10
[td] Revelador de eventos
[c] Cualquier sobreviviente tiene el arte de lucha <b>Estratega</b> #Estratega
[d<]
Los sobrevivientes pueden acorralar al Gregalope en una gran cara de piedra en lugar de perseguirlo.

Si lo hacen, termina la caza inmediatamente.

Comienza un enfrentamiento con un Antílope Gritón de nivel 2, usando las reglas de preparación.
Además, coloca una <b>Cara de Piedra Gigante</b> adyacente al monstruo y dale al monstruo la carta de rasgo <b>Berserker</b> del Carnicero.

Si los sobrevivientes prevalecen, obtienen las recompensas normales del enfrentamiento y 3 recursos adicionales de Antílope Gritón.

<button class="hunt_event_action_button hoverable" id="gregalope" onClick="placeReminder('gregalope')">¡Comenzar enfrentamiento!</button>

[>d]
[c] 1-6
[d] Los sobrevivientes rápidamente se quedan atrás del majestuoso animal. Mueve 1 espacio lejos de la presa en el tablero de caza.
[c] 7-14
[d] El Gregalope es demasiado rápido. Se ha ido antes de que te des cuenta.
[c] 15-16
[d] Los sobrevivientes pierden de vista al Gregalope pero descubren un camino oculto. Puedes volver a tirar el próximo resultado en la tabla de eventos de caza.
[c] 17+
[dt] Justo antes de que salte de vista, el Gregalope inclina sus poderosos cuernos. La experiencia cambia al exhausto revelador de eventos. Gana +1 movimiento permanente.
`,

39: `39 | Niebla Espesa
Una espesa niebla envuelve a los sobrevivientes, ocultando su luz de linterna. Tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] Resultado par #Par
[d] Los sobrevivientes tropiezan en la dirección correcta. Si el enfrentamiento comienza en el próximo espacio del tablero de caza, el monstruo <b>embosca</b> a los sobrevivientes.
[c] Resultado impar #Impar
[dt] Se dan la vuelta; tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
`,

40: `40 | Sueño
El revelador de eventos sueña con la próxima caza. Se encuentra ante la gran bestia, con las armas listas, pero esta lo derriba.

[TO] Verificar
[td] ¿El revelador de eventos tiene 3+ coraje o algún sobreviviente es un salvador?
[c] Sí #
[d<]

El revelador de eventos se siente fortalecido por el sueño y gana un token de evasión +1.

[TO] Verificar
[td] ¿Algún sobreviviente tiene la <b>Espada del Crepúsculo</b>?
[c] Sí #Espada del Crepúsculo
[d] Sueña con una matanza indiscriminada. Agrega el evento de asentamiento <b>Asesinato</b> a la línea de tiempo dentro de 1d5 años.
[c] No #Sin Espada del Crepúsculo
[d] No sucede nada.
[T]

[>d]
[c] No #
[d<]

El sueño es solo perturbador. Sufre 1 daño de evento cerebral.

[TO] Verificar
[td] ¿Algún sobreviviente tiene la <b>Espada del Crepúsculo</b>?
[c] Sí #Espada del Crepúsculo
[d] Sueña con una matanza indiscriminada. Agrega el evento de asentamiento <b>Asesinato</b> a la línea de tiempo dentro de 1d5 años.
[c] No #Sin Espada del Crepúsculo
[d] No sucede nada.
[T]
[>d]
[T]
`,

41: `41 | Pesadilla
El revelador de eventos sueña con la próxima caza. La gran bestia desaparece durante su batalla y la sigue secretamente de vuelta al asentamiento. Miran impotentes mientras devora todo lo que conocen y aman.

El revelador de eventos gana +1d10 de cordura y un token de evasión -1.

[TO] Verificar
[td] ¿El asentamiento tiene un salvador?
[c] Sí #
[d<]

El salvador aparece en el sueño y defiende su hogar. El revelador de eventos gana +1d5 de supervivencia.
[TO] Verificar
[td] ¿Algún sobreviviente en el asentamiento o grupo de caza tiene la <b>Espada del Crepúsculo</b>?
[c] Sí #Espada del Crepúsculo
[d] Despiertan del sueño y continúan su caza.
[c] No #Sin Espada del Crepúsculo
[dt] El revelador de eventos imagina una versión maníaca de sí mismo empuñando la espada y masacrando alegremente a la bestia. Despiertan para encontrar una <b>Espada del Crepúsculo</b> a su lado, zumbando suavemente contra su cuerpo. Instintivamente, el sobreviviente reconoce el peso de la maldición del arma y la promesa de su poder. El revelador de eventos obtiene el equipo raro <b>Espada del Crepúsculo</b>. También pueden seleccionar <b>Espada del Crepúsculo</b> como su tipo de habilidad con armas y ganan +1 de habilidad con armas con esta arma.

[>d]
[c] No #
[d<]

[TO] Verificar
[td] ¿Algún sobreviviente en el asentamiento o grupo de caza tiene la <b>Espada del Crepúsculo</b>?
[c] Sí #Espada del Crepúsculo
[d] Despiertan del sueño y continúan su caza.
[c] No #Sin Espada del Crepúsculo
[dt] El revelador de eventos imagina una versión maníaca de sí mismo empuñando la espada y masacrando alegremente a la bestia. Despiertan para encontrar una <b>Espada del Crepúsculo</b> a su lado, zumbando suavemente contra su cuerpo. Instintivamente, el sobreviviente reconoce el peso de la maldición del arma y la promesa de su poder. El revelador de eventos obtiene el equipo raro <b>Espada del Crepúsculo</b>. También pueden seleccionar <b>Espada del Crepúsculo</b> como su tipo de habilidad con armas y ganan +1 de habilidad con armas con esta arma.

[>d]
[T]
`,

42: `42 | Cirujano
Un carruaje chirriante se acerca a los sobrevivientes. Lujosamente decorado en rojo y dorado, el carruaje está tallado en cada lado con rostros lúgubres. Un ojo masivo y espasmódico adorna el frente, mientras que la puerta del carruaje es una boca abierta y esperando. Desde una pequeña ventana, una mano retorcida hace señas.
Un sobreviviente con 3+ coraje puede optar por entrar en la carreta.

[TO] Elección
[td] Sobreviviente con 3+ coraje
[c] Entrar
[d] Quitan una discapacidad o lesión grave y obtienen 1 trastorno aleatorio.
[c] No entrar
[d] Los sobrevivientes continúan su caza.
[T]
`,

43: `43 | Presa Fresca
Una alfombra de insectos que se deslizan señala a los sobrevivientes hacia un monstruo recién muerto. Los insectos carroñeros intentan defender su cena, pero los sobrevivientes los alejan para reclamar el premio pútrido.
Cada sobreviviente tira 2d10 y suma su XP de Caza. El sobreviviente con la puntuación más alta (tira en caso de empate) mata a la mayor cantidad de alimañas y se lleva el premio apestoso para sí mismo. Obtienen 1 recurso básico aleatorio y 1 recurso de alimaña aleatorio.
`,

44: `44 | Oportunistas
Mientras investigan las huellas de su presa, los sobrevivientes se dan cuenta de que están cazando no a uno, sino a dos monstruos. Las dos series de huellas pronto se separan, dejando al revelador de eventos elegir qué huellas seguir.

[TO] Elección
[td] Revelador de eventos
[c] Huellas más grandes
[d] Continuar la caza normalmente.
[c] Huellas más pequeñas
[dt] Comienza el enfrentamiento inmediatamente. Al comienzo del enfrentamiento, el monstruo sufre 5 heridas. Si los sobrevivientes salen victoriosos, obtienen la mitad de los recursos básicos y la mitad de los recursos del monstruo (redondeados hacia arriba) de las recompensas en el resultado.
`,

45: `45 | Valle Dentado
Un valle de afiladas piedras blancas se abre ante los sobrevivientes, pareciendo una boca llena de dientes afilados. A medida que los sobrevivientes empujan y escalan entre las agujas dentadas, descubren que incluso la más superficial de las muescas sangra profusamente. Cada sobreviviente sufre 1 daño de evento al cuerpo.
A menos que un sobreviviente tenga vendajes para parchear sus heridas, ¡todos los sobrevivientes también obtienen 2 fichas de sangrado!

[i] Si algún sobreviviente tiene un pico, pueden intentar convencer a los otros sobrevivientes de dejarlos <b>investigar</b> un poco más. Si están convencidos, tira 1d10.

[TA] 1d10
[td] Sobreviviente que lleva un pico - Investigar
[c] 1
[d] ¡Las piedras blancas son dientes y los sobrevivientes están en una boca gigante! Todos deben gastar 1 supervivencia para salir corriendo de la boca. Cualquiera que quede dentro es masticado hasta convertirse en pulpa. Muerto. No obtienen los beneficios de <b>Canibalizar</b>.
[c] 2-5
[d] La piedra blanca es extremadamente dura. Cuando los sobrevivientes finalmente rompen, una horda de insectos se escabulle de los agujeros. Obtienen 1 recurso de alimaña <b>Cucaracha Hiss</b>. La excavación fue lenta: tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
[c] 6+
[dt] Los sobrevivientes encuentran una grieta y la agrandan. ¡Dentro hay un escondite secreto! Obtienen 1 recurso extraño <b>Hierro</b> y 1 recurso de alimaña <b>Cucaracha Hiss</b>. La excavación fue lenta; tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
`,

46: `46 | Río
Los sobrevivientes llegan al borde de un río de sangre. Los sobrevivientes <b>no insanos</b> sufren 1 daño de evento cerebral al verlo. Los sobrevivientes deben <b>investigar</b> para recoger la pista de su presa. Cada sobreviviente tira 1d10.
Si ningún sobreviviente encuentra con éxito la pista del monstruo, tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.

[TA] 1d10
[td] Cada sobreviviente - Investigar
[c] 1-2
[d] Pierdes el equilibrio y caes al río de sangre. Instantáneamente, un parásito masivo se abre camino por tu garganta, destrozando tus entrañas en el proceso. Sufres la lesión grave <b>Costilla Rota</b>. Esperas que eso sea todo lo que el parásito te hace.
[c] 3-5
[d] Tu presa ha defecado en la sangre. Sufres 1 daño de evento a una ubicación de impacto aleatoria por revolver demasiado tiempo en el agua fecal de sangre.
[c] 6-8
[d<]

¡Te das cuenta de que el río de sangre está lleno de los cadáveres hinchados de monstruos irreconocibles! ¡Te sientes compelido a pescar algunos! Obtén 1 recurso básico aleatorio.
[i] Si llevas equipo <b>pesado</b>, caes y tragas sangre y partes blandas de monstruos hinchados. Reduce tu supervivencia a 1.

[>d]
[c] 9+
[dt] Encuentras con éxito la pista del monstruo.
`,

47: `47 | Árboles Festín
Un pequeño bosquecillo de árboles se eleva sobre una llanura sin vida. Tentadoras frutas rojas cuelgan de las ramas. Cada sobreviviente debe gastar 1 supervivencia para resistir la tentación de <b>consumir</b> la fruta.

Los sobrevivientes <b>insanos</b> y los sobrevivientes con el trastorno <b>Comer en Exceso</b> deben consumir.

[i] Si algún sobreviviente tiene una hoz, ¡pueden tallar una línea en el árbol, haciendo que la fruta se agrie instantáneamente. Termina este evento.

[TA] 1d10
[td] Cualquier sobreviviente - Consumir
[c] 1-5
[d] La fruta adictiva destroza tus entrañas. Pierdes 1 supervivencia y tiras nuevamente en esta tabla. Si no tenías supervivencia, sufres 2 daños de evento a una ubicación de impacto aleatoria.
[c] 6+
[dt] Eructas ruidosamente en satisfacción y te alejas.
`,

48: `48 | Apuesta Mortal

[img] 48 # ancho: 25%

Los sobrevivientes son despertados por un viajero oculto en una capa profunda. El viajero se quita la capucha y revela un rostro deforme con dos barbillas que se curvan una hacia la otra, cada una con su propia boca sonriente.

En un estado de ensueño, todos los sobrevivientes comprenden que esta entidad se llama El Jugador y que si hablan, morirán. Hasta que se complete este evento, solo el revelador de eventos puede hablar. Si cualquier otro jugador habla, su sobreviviente se enfría. Muerto. Los sobrevivientes deben jugar el juego de El Jugador o quedar atrapados con él para siempre. Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente
[c] 1
[d] El Jugador extiende la mano y recoge tu dado. Mientras desaparecen dentro de un pliegue de su capa, sientes que todo rastro de aire abandona tus pulmones y no puedes respirar más. Muerto.
[c] 2-9
[d] No pierdes, ni ganas. Juega de nuevo si lo deseas. Si lo haces, tira nuevamente en esta tabla.
[c] 10+
[dt] Ganas. Obtén +1 suerte permanente.
`,

49: `49 | Campos de Pus
El paisaje está salpicado de grandes montículos hinchados que rezuman pus. El más mínimo roce amenaza con hacerlos explotar. Los sobrevivientes pueden <b>caminar cuidadosamente</b> a través de los montículos o <b>atravesarlos rápidamente</b>.

[TO] Elección
[td] ¿Qué hacen?
[c] Caminar cuidadosamente
[d] Pasas sin incidentes, pero tu progreso se ralentiza. Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
[c] Atravesar rápidamente
[dt] Cada sobreviviente tira 1d10 y suma su evasión al resultado. En un 7 o menos, ¡hacen estallar uno de los montículos de pus! Sufren 2 daños de evento en una ubicación de impacto aleatoria y se vuelven <b>apestosos</b> por el resto de este año de la linterna.
`,

50: `50 | Horca
Una jaula de hierro crudo cuelga de las ramas de un árbol masivo. A medida que los sobrevivientes se acercan, un hombre les grita desde la jaula, suplicando que lo liberen.

[TO] Elección
[td] ¿Qué hacen?
[c] Pasar de largo
[d] Los sobrevivientes lo ignoran y sufren 1 daño de evento cerebral mientras el prisionero llora y suplica.
[c] Liberarlo
[d<]

El revelador de eventos tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] 1
[d] Los sobrevivientes abren la jaula, pero todo lo que encuentran dentro es un esqueleto. Todos los sobrevivientes sufren 2 daños de evento cerebral.
[c] 2-7
[d] El prisionero está agradecido y sigue a los sobrevivientes hasta que descansan. Cuando se despiertan, cada sobreviviente pierde 1 recurso aleatorio (si tenían alguno).
[c] 8+
[dt] El prisionero está agradecido y sigue a los sobrevivientes de regreso al asentamiento después del enfrentamiento. El asentamiento gana +1 población.
[>d]
[T]
`,

51: `51 | Refugiados
Los sobrevivientes se encuentran con un grupo de colonos que huyen.

[TO] Comprobar
[td] ¿Tiene el asentamiento <b>Symposium</b> y <b>Language</b>?
[c] Sí #Symposium y Language
[d<]

Los sobrevivientes logran comunicarse de manera rudimentaria. Los sobrevivientes pueden ofrecer un recurso o equipo para ayudar a los refugiados angustiados.

[TO] Elección
[td] ¿Compartir recurso o equipo?
[c] Sí #Compartir
[d<]

Archiva la oferta. Los refugiados comparten frenéticamente su triste historia. Si bien mucho se pierde en la traducción, relacionan la invasión salvaje de un monstruo que destruyó su hogar. El relato prepara a los sobrevivientes para lo que les espera. Al comienzo del enfrentamiento, revela las 5 cartas superiores de Al del mazo de Al y devuélvelas en cualquier orden.
[i] Si algún sobreviviente tiene el arte de lucha <b>Líder</b>, uno de los colonos se siente atraído por su carisma. Obtén +1 población.

[>d]
[c] No #No compartir
[dt] Los sobrevivientes continúan su caza.
[>d]
[c] No #
[d] Los sobrevivientes continúan su caza.
[T]
`,

52: `52 | Moscas Locas
Insectos diminutos y persistentes invaden a los sobrevivientes, volando en sus oídos y fosas nasales. Los insectos zumban enloquecedoramente en sus cabezas, volviéndose más fuertes a medida que anidan.
Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente
[c] 1-2
[d] Te sumerges en un pantano cercano para expulsar a los insectos repugnantes. Funciona, pero ahora estás constantemente distraído por los diminutos cadáveres de insectos que ocasionalmente escupes. Obtén un token de evasión -1.
[c] 3-7
[d] El zumbido se detiene de inmediato y las moscas se van. Su rechazo te hace sentir extrañamente abatido. Obtén +1 cordura.
[c] 8+
[d<]

¡Sus huevos gestan increíblemente rápido y las moscas locas explotan por tu boca! ¡La experiencia es espeluznante, pero te hace sentir tan vivo! Sufre el trauma cerebral <b>frenesí</b>.
[i] Si tienes el trastorno <b>Adicto a la Ira</b> o el arte de lucha <b>Berserker</b>, dar a luz a una nueva y repugnante vida enciende tu rabia. Sufre el trauma cerebral <b>frenesí</b> nuevamente.

[>d]
[T]
`,

53: `53 | Vendedor de Máscaras
Los sobrevivientes se encuentran con un Viajero Vendedor de Máscaras en el camino. Insiste en que tiene ofertas especiales que ofrecer.
Baraja una copia de cada equipo de máscara del lugar de asentamiento Hacedor de Máscaras y saca una al azar. El vendedor está ofreciendo esta máscara. El revelador de eventos tira 1d10 para determinar el precio, luego obtiene la máscara.

[TO] 1d10
[td] Revelador de eventos
[c] 1-3
[d] El vendedor te señala en silencio. Instintivamente le entregas su precio de venta a cambio de la máscara. Archiva 1 equipo de tu elección de tu cuadrícula de equipo y pierde toda la supervivencia.
[c] 4-7
[d] El vendedor hace un gesto lentamente para recibir una ofrenda. Archiva 1 equipo de tu elección de tu cuadrícula de equipo.
[c] 8+
[dt] Mientras te entrega la máscara, los labios del vendedor forman los sonidos de tu nombre. Ha desaparecido. Dale a tu sobreviviente un nuevo nombre (debe ser diferente) y +1 supervivencia por nombrar a tu sobreviviente.
`,

54: `54 | Tormenta de Huesos
Vientos poderosos atraviesan el paisaje, recogiendo fragmentos de piedras y restos esqueléticos. Los sobrevivientes se agrupan en las afueras de la tormenta.
Pueden <b>enfrentar la tormenta</b> o <b>esperarla</b>.

[TO] Elección
[td] ¿Qué hacen?
[c] Enfrentar la tormenta
[d] Todos los sobrevivientes obtienen +1 coraje y sufren 1 daño de evento en 3 lugares de impacto aleatorias. Archiva todo el equipo <b>frágil</b>.
[c] Esperarla
[dt] Tira dos veces en la tabla de eventos de caza antes de avanzar en el tablero de caza.
`,

55: `55 | Deslizamiento de Lodo
Un deslizamiento de lodo repentino arrastra a los sobrevivientes. Cada sobreviviente tira 1d10.
[i] Si algún sobreviviente tiene un látigo, lo atrapan alrededor de un hueso en forma de pilar y se balancean hacia la seguridad; no tiran.

[TA] 1d10
[td] Cada sobreviviente
[c] 1-2
[d] Eres arrastrado violentamente, ahogándote en el lodo. Sufres 2 daños de evento en una ubicación de impacto aleatoria y archivas todo el equipo <b>frágil</b> y <b>soluble</b> en tu cuadrícula de equipo. Tira nuevamente en la tabla.
[c] 3-7
[d] Logras liberarte, pero no antes de recibir una paliza seria. Sufres 2 daños de evento en tu cuerpo y archivas todo el equipo <b>frágil</b> y <b>soluble</b> en tu cuadrícula de equipo.
[c] 8-9
[d] Alcanzas un terreno más alto. Estás cubierto de lodo pero, por lo demás, ileso.
[c] 10+
[dt] Recuerdas haber sido arrastrado hacia abajo, la sensación de que el lodo se fuerza por tu garganta, luego nada más. Después de que pasa el deslizamiento de lodo, los otros sobrevivientes te encuentran ileso. Obtén +1 cordura.
`,

56: `56 | Monstruo Muerto
Los sobrevivientes encuentran el cadáver descompuesto de un monstruo. Está demasiado podrido para proporcionar recursos.

[TO] Comprobar
[td] ¿Algún sobreviviente tiene 3+ comprensión?
[c] Sí #3+ comprensión
[d<]

Los sobrevivientes se cubren con la sangre derramada del monstruo muerto. El hedor les ayudará a acercarse sigilosamente a su presa. Cuando comience el enfrentamiento, los sobrevivientes <b>emboscan</b> al monstruo.
[i] Si algún sobreviviente tiene el trastorno <b>Escrupuloso</b>, se niegan a ensuciarse. No <b>emboscan</b> al monstruo.

[>d]
[c] No #
[dt] Los sobrevivientes hambrientos se dan un festín con el cadáver en descomposición, perdiendo de inmediato el control de sus intestinos retorcidos. Cada sobreviviente pierde 1 supervivencia y no puede <b>consumir</b> durante el resto de este año de la linterna.
`,

57: `57 | Risa del Gorm
El lamento rítmico de la risa de un Gorm llega a los sobrevivientes, llenándolos de miedo. La risa burlona sigue a los sobrevivientes, atormentándolos hasta que alcancen a su presa.

Coloca un marcador en cada espacio del tablero de caza entre los sobrevivientes y su presa. Cuando los sobrevivientes se mueven a un espacio con un marcador, retíralo y todos los sobrevivientes <b>no sordos</b> sufren 1 daño de evento cerebral.

<button class="hunt_event_action_button hoverable" id="gorms_laughter" onClick="placeReminder('gorms_laughter')">Colocar recordatorio</button>
`,

58: `58 | Olor en el Viento
Un fuerte viento sopla, trayendo consigo los olores de lugares y cosas distantes.
El revelador de eventos tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] 1-5
[d] El monstruo huele tu rastro. Se mueve un espacio más cerca. Si este movimiento inicia el enfrentamiento, el monstruo <b>embosca</b> a los sobrevivientes.
[c] 6+
[dt] Los sobrevivientes huelen el mal olor de su presa y avanzan rápidamente. Los sobrevivientes pueden omitir el siguiente espacio de caza. Si este movimiento inicia el enfrentamiento, los sobrevivientes <b>emboscan</b> al monstruo.
`,

59: `59 | Señales de Batalla
Los sobrevivientes se encuentran con los restos de una terrible batalla entre su presa y un enemigo desconocido. El revelador de eventos puede optar por <b>investigar</b>.

[TO] Elección
[td] Revelador de eventos - ¿Qué haces?
[c] Investigar
[d<]

El revelador de eventos obtiene +1 coraje y tira 1d10.

[TO] 1d10
[td] Revelador de eventos - Investigar
[c] 1-2
[d<]
El monstruo salta de la oscuridad, aprovechando a los sobrevivientes distraídos.

El monstruo <b>embosca</b> a los sobrevivientes.

Durante la preparación del enfrentamiento, coloca al revelador de eventos directamente frente al monstruo.

<button class="hunt_event_action_button hoverable" id="signs_of_battle" onClick="placeReminder('signs_of_battle')">¡Comenzar el enfrentamiento!</button>

[>d]
[c] 3-7
[d<]

Los restos son humanos. Los sobrevivientes angustiados y enfurecidos sufren cada uno 1 daño de evento cerebral.
[i] Si el asentamiento tiene <b>Tumbas</b>, entierran a los muertos y cada sobreviviente obtiene +1 supervivencia.
[i] Si el asentamiento tiene <b>Canibalizar</b>, obtén 1 recurso básico aleatorio.

[>d]
[c] 8+
[d] La presa ha dejado los restos de otro monstruo a su paso. Obtén 1 recurso básico aleatorio.
[T]

[>d]
[c] Ignorar
[dt] Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
`,

60: `60 | Incendio Forestal
Una masa masiva de llamas obstruye a los sobrevivientes, incinerando el suelo. Ha destruido lo que esperaba a los sobrevivientes y ha dejado el caos a su paso. Archiva todas las cartas de eventos de caza en los próximos 2 espacios de caza. Coloca dos cartas básicas de eventos de caza en esos espacios.
`,

61: `61 | Rayo Congelado
Una tormenta se cierne sobre los sobrevivientes. Relámpagos de color morado profundo brillan en el cielo. Los rayos se congelan en pleno impacto y caen sobre los sobrevivientes como picos dentados y brillantes.
Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[dt] Un rayo cae junto al rezagado, atrapándolo en una explosión de cristales afilados como navajas. Sufre 1d5 de daño de evento en 2 lugares de impacto aleatorias. Archiva todo el equipo <b>frágil</b> en su cuadrícula de equipo.
`,

62: `62 | Espacio Entre las Rocas
Los sobrevivientes están distraídos por una grieta oscura en el mar interminable de caras de piedra.

[TO] Comprobar
[td] ¿Algún sobreviviente tiene un pico?
[c] Sí #Pico
[d] Golpean el suelo, haciendo que la grieta se expanda en un agujero enorme. Valientemente, al meter la mano dentro, el sobreviviente produce un pedazo retorcido y ennegrecido. Obtén 1 recurso extraño <b>hierro</b>.
[c] No #
[d<]

Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[dt] El rezagado se inclina para mirar hacia las profundidades y se niega a dejar de mirar. Cuando los otros sobrevivientes lo arrastran, balbucea incoherentemente. Lo que sea que haya visto lo cambió para siempre; obtiene 1 trastorno aleatorio. Si todos los sobrevivientes terminan como rezagados, nadie los saca nunca y todos se pierden. Muertos.

[>d]
[T]
`,

63: `63 | Pies

[img] 63 # width:35%

Las caras de piedra que se avecinan son reemplazadas por un extenso conjunto de pies de piedra que brotan del suelo. Los sobrevivientes caminan pie contra pie con los pies.

[TO] Comprobar
[td] ¿Todos los sobrevivientes están locos?
[c] Sí #Todos locos
[d<]

[TO] Comprobar
[td] ¿El asentamiento tiene Supervivencia del Más Fuerte?
[c] Sí #Supervivencia del Más Fuerte
[d] Se caen del lado inferior del mundo. Los sobrevivientes muerden con fuerza los pies. Sus dientes chocan contra la piedra mientras se niegan a soltarse. Al instante, los pies se rompen, revelando caras de piedra normales debajo. Establece la cordura de todos los sobrevivientes en 0. Cada sobreviviente sufre la lesión grave <b>mandíbula destrozada</b>. No tires eventos de caza adicionales causados por <b>Pies</b>.
[c] No #
[dt] Se caen del lado inferior del mundo. Los sobrevivientes están muertos.

[>d]
[c] No #Alguien cuerdo
[dt] Si algún sobreviviente está <b>loco</b>, está convencido de que ha llegado al lado inferior del mundo. Se aferran al suelo por su vida, aterrados de caerse. Su terror estruendoso ralentiza a los sobrevivientes y atrae una atención no deseada. Tira una vez en la tabla de eventos de caza por cada sobreviviente <b>loco</b> antes de avanzar en el tablero de caza. Si alguna de estas tiradas resulta en <b>Pies</b>, ignórala y vuelve a tirar.
`,

64: `64 | Fuente de Piedra
Dos manos de piedra cupuladas emergen del suelo. Las manos sostienen agua clara y fría que gotea a través de los dedos de piedra en un suministro aparentemente interminable. Cualquier sobreviviente puede <b>consumir</b> de la fuente. Si lo hace, obtiene +1 coraje y tira 1d10.

Si nadie consume, tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.

[TA] 1d10
[td] Cualquier sobreviviente - Consumir
[c] 1-4
[d<]

El agua está clara hasta que entra en tus labios, donde de repente se convierte en sangre. Escupes el líquido fétido y sufres ★ daño de evento en la cabeza.
[i] Si tienes el trastorno <b>Hemofobia</b>, también sufres ★ daño de evento en el cuerpo mientras vomitas violentamente de asco.

[>d]
[c] 5-8
[d] Es agua. Refrescante.
[c] 9+
[dt] El agua está limpia y pura, como ninguna que el sobreviviente haya probado antes. Obtén +1 supervivencia.
`,

65: `65 | Estatua

[img] 65

Coronando una colina, los sobrevivientes encuentran una estatua de un hombre sentado en un trono.

[i] Si algún sobreviviente tiene 5+ entendimiento, los sobrevivientes pueden ignorar la estatua y finalizar este evento.

De lo contrario, cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (tirar en caso de empate) se convierte en un rezagado.
[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[d<]

El rezagado se siente atraído por la estatua y la toca suavemente. En un instante, desaparece, reemplazado por el hombre del trono, ahora de carne y hueso. El rezagado se sienta en su lugar en el trono, con la boca de piedra abierta en un grito silencioso. Ha desaparecido para siempre. Considera que está muerto, pero no apliques el principio de muerte por <b>Canibalizar</b>; no hay cuerpo.
[TO] Comprobar
[td] ¿El asentamiento tiene <b>Memento Mori</b>?
[c] Sí #Momento Mori
[d] La estatua se parece a un sobreviviente fallecido. Reemplaza al rezagado con la hoja de registro de un sobreviviente fallecido. Elimina todas sus lesiones graves. Establece su XP de Caza en 2 (envejecen de nuevo, ya que es una nueva vida). Obtienen +1d10 de supervivencia, +1d10 de cordura. Puedes darles 3 rangos de especialización en un tipo de arma aleatorio.
[c] No #
[dt] El hombre ofrece sus agradecimientos y se une al grupo de cazadores sin ninguna explicación. Es un nuevo sobreviviente con el equipo del rezagado, 2 trastornos aleatorios y 2 XP de Caza. Baraja todas las cartas de especialización de armas (incluyendo expansiones, si las hay) y roba una. El sobreviviente tiene 3 rangos de especialización en ese tipo de arma. Obtienen +1d10 de supervivencia, +1d10 de cordura. Dales un nombre y +1 de supervivencia por ser nombrados.
[>d]
[T]
`,

66: `66 | Palabra Prohibida
Hay una gran ráfaga de aire. Una voz atronadora e inhumana declara una sola palabra en un idioma desconocido. Por un instante, los sobrevivientes comprenden.
Todos los sobrevivientes <b>no sordos</b> obtienen +1 de entendimiento y sufren 1 de daño cerebral.
[i] Si están <b>locos</b>, también obtienen 1 trastorno aleatorio.
`,

67: `67 | Charcos de Saliva
El suelo por delante está marcado por charcos llenos de un líquido pegajoso. Burbujean alegremente y huelen a carne en digestión. A medida que los sobrevivientes avanzan entre ellos, son abrumados por oleadas de náuseas.

[TO] Comprobar
[td] ¿Algún sobreviviente tiene una hoz?
[c] Sí #Hoz
[d<]

Cortan unas cuantas hojas de una planta cercana y todos las usan para taparse las narices y enmascarar el olor. Todos los sobrevivientes obtienen +1 de entendimiento.

[TO] Comprobar
[td] ¿Algún sobreviviente tiene 3+ de entendimiento?
[c] Sí #3+ de entendimiento
[d] Idean una forma de usar los charcos. Cada sobreviviente puede colocar una pieza de equipo en un charco. Archivan el equipo y obtienen los recursos utilizados para fabricarlo (si los hay).
[c] No #
[dt] Los sobrevivientes continúan su caza.

[>d]
[c] No #
[d<]

Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente - ¿Es el resultado menor que la supervivencia?
[c] Sí #Menor que la supervivencia
[d] Continúan.
[c] No #Mayor que la supervivencia
[dt] Vomitan en un charco cercano, sufren 1 de daño de evento al cuerpo. Ante sus ojos, el charco disuelve ávidamente su vómito, obtienen +1 de entendimiento.
[br]
[TO] Después de todas las tiradas
[td] ¿Algún sobreviviente tiene 3+ de entendimiento?
[c] Sí #3+ de entendimiento
[d] Idean una forma de usar los charcos. Cada sobreviviente puede colocar una pieza de equipo en un charco. Archivan el equipo y obtienen los recursos utilizados para fabricarlo (si los hay).
[c] No #
[d] Los sobrevivientes continúan su caza.
[T]

[>d]
[T]
`,

68: `68 | Un Rostro Familiar
[i] Si ningún sobreviviente ha muerto aún en esta campaña, ignora este evento y tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.

Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[dt] Mientras examinan las caras de piedra bajo sus pies, el rezagado reconoce el rostro de un amigo caído. Recuerdos agridulces lo reducen a lágrimas. Reduce su cordura a 0 y obtiene +1 de entendimiento.
`,

69: `69 | Lapso de Tiempo
El resplandor de las linternas de los sobrevivientes se difumina, formando senderos de luz detrás de ellos.
[i] Si el asentamiento ha luchado contra un Fénix, el grupo reconoce el fenómeno. Todos los sobrevivientes obtienen +1 de entendimiento.
El revelador de eventos tira 1d10 en la siguiente tabla. Si algún sobreviviente tiene un <b>Anillo de Horas</b>, pueden seleccionar en su lugar un resultado del dado.
[TA] 1d10
[td] Revelador de eventos
[c] 1-3
[d] Los cuerpos de los sobrevivientes envejecen de repente. Todos los sobrevivientes con menos de 10 XP de Caza obtienen +3 XP de Caza. No obtienen los beneficios de la Edad. Sus cuerpos han envejecido físicamente, no han aprendido ninguna experiencia práctica.
[c] 3-9
[d<]

Las mentes de los sobrevivientes se llenan de recuerdos alienígenas. Ya no son solo ellos mismos. Caminan de manera diferente y hablan con extraños acentos. Dale a cada sobreviviente un nuevo nombre y +1 de supervivencia por ser nombrados. Cada sobreviviente obtiene +1 de XP de Caza y 1 trastorno aleatorio.
[i] Si tu asentamiento tiene <b>Supervivencia del Más Fuerte</b>, y ya has usado tu re-roll una vez por vida, puedes usarlo de nuevo.

[>d]
[c] 10+
[dt] ¡Los sobrevivientes están de repente junto a su presa! ¡Comienza el enfrentamiento de inmediato!
`,

70: `70 | Tumba de la Excelencia
Los sobrevivientes encuentran una tumba serena y lujosa, inmaculada en su construcción y estado. Murales elegantes decoran las paredes, representando gloriosas victorias sobre el mismo monstruo que los sobrevivientes están cazando. Los sobrevivientes están desconcertados por su presencia.
El revelador de eventos <b>investiga</b> y tira 1d10.

[TO] 1d10
[td] Revelador de eventos - Investigar
[c] 1
[d] Los sobrevivientes se lamentan de lo débiles que son en comparación con los guerreros de los murales. Todos los sobrevivientes pierden 1 supervivencia.
[c] 2-5
[d] Es agradable ver algo bonito por una vez, ¿eh?
[c] 6-9
[d] Los sobrevivientes no pueden recordar haberse sentido tan alegres e inspirados. Cada sobreviviente obtiene +1 de valor.
[c] 10+
[d<]

La puerta de la tumba está enmarcada con una madera que tiene pequeñas manos como grano. Dentro, los murales representan a un héroe en el centro de un laberinto que sostiene una fruta gigante llena de humanos sobre su cabeza. Cada sobreviviente obtiene +1 de entendimiento.
[i] Si el asentamiento tiene <b>Pictogramas</b>, los sobrevivientes encuentran información sobre su presa. Al comienzo del enfrentamiento, pueden colocar la trampa del monstruo en la parte inferior del deck de lugares de impacto.

<button class="hunt_event_action_button hoverable" id="tomb_of_excelence" onClick="placeReminder('tomb_of_excelence')">[Pictogramas] Colocar recordatorio</button>

[>d]
[T]
`,

68: `68 | Rostro Conocido
[i] Si ningún sobreviviente ha muerto aún en esta campaña, ignora este evento y tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.

Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o los sobrevivientes, en caso de empate) se convierte en un rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[dt] Mientras examinan las caras de piedra bajo sus pies, el rezagado reconoce el rostro de un amigo caído. Recuerdos agridulces lo reducen a lágrimas. Reduce su cordura a 0 y obtiene +1 de entendimiento.
`,

69: `69 | Lapso de Tiempo
El resplandor de las linternas de los sobrevivientes se difumina, formando senderos de luz detrás de ellos.
[i] Si el asentamiento ha luchado contra un Fénix, el grupo reconoce el fenómeno. Todos los sobrevivientes obtienen +1 de entendimiento.
El revelador de eventos tira 1d10 en la siguiente tabla. Si algún sobreviviente tiene un <b>Anillo de Horas</b>, pueden seleccionar en su lugar un resultado del dado.
[TA] 1d10
[td] Revelador de eventos
[c] 1-3
[d] Los cuerpos de los sobrevivientes envejecen de repente. Todos los sobrevivientes con menos de 10 XP de Caza obtienen +3 XP de Caza. No obtienen los beneficios de la Edad. Sus cuerpos han envejecido físicamente, no han aprendido ninguna experiencia práctica.
[c] 3-9
[d<]

Las mentes de los sobrevivientes se llenan de recuerdos alienígenas. Ya no son solo ellos mismos. Caminan de manera diferente y hablan con extraños acentos. Dale a cada sobreviviente un nuevo nombre y +1 de supervivencia por ser nombrados. Cada sobreviviente obtiene +1 de XP de Caza y 1 trastorno aleatorio.
[i] Si tu asentamiento tiene <b>Supervivencia del Más Fuerte</b>, y ya has usado tu re-roll una vez por vida, puedes usarlo de nuevo.

[>d]
[c] 10+
[dt] ¡Los sobrevivientes están de repente junto a su presa! ¡Comienza el enfrentamiento de inmediato.
`,

70: `70 | Tumba de la Excelencia
Los sobrevivientes encuentran una tumba serena y lujosa, inmaculada en su construcción y estado. Murales elegantes decoran las paredes, representando gloriosas victorias sobre el mismo monstruo que los sobrevivientes están cazando. Los sobrevivientes están desconcertados por su presencia.
El revelador de eventos <b>investiga</b> y tira 1d10.

[TO] 1d10
[td] Revelador de eventos - Investigar
[c] 1
[d] Los sobrevivientes se lamentan de lo débiles que son en comparación con los guerreros de los murales. Todos los sobrevivientes pierden 1 supervivencia.
[c] 2-5
[d] Es agradable ver algo bonito por una vez, ¿eh?
[c] 6-9
[d] Los sobrevivientes no pueden recordar haberse sentido tan alegres e inspirados. Cada sobreviviente obtiene +1 de valor.
[c] 10+
[d<]

La puerta de la tumba está enmarcada con una madera que tiene pequeñas manos como grano. Dentro, los murales representan a un héroe en el centro de un laberinto que sostiene una fruta gigante llena de humanos sobre su cabeza. Cada sobreviviente obtiene +1 de entendimiento.
[i] Si el asentamiento tiene <b>Pictogramas</b>, los sobrevivientes encuentran información sobre su presa. Al comienzo del enfrentamiento, pueden colocar la trampa del monstruo en la parte inferior del deck de lugares de impacto.

<button class="hunt_event_action_button hoverable" id="tomb_of_excelence" onClick="placeReminder('tomb_of_excelence')">[Pictogramas] Colocar recordatorio</button>

[>d]
[T]
`,

71: `71 | Reliquia Encontrada
En medio de las interminables caras de piedra, el revelador de eventos nota un objeto inusual en el suelo.
El revelador de eventos <b>investiga</b> y tira 1d10.
[i] Si el asentamiento tiene <b>Registros</b>, suma +6 al resultado.
[TO] 1d10
[td] Revelador de eventos - Investigar
[c] 1-2
[d] Encuentras una piedra morada desgastada con una textura en espiral. Es sorprendentemente pesada. Hipnotizado por la piedra, la escondes de los otros sobrevivientes. Obtén el trastorno <b>Secretivo</b> y un token de -1 de movimiento por cargar la piedra.
[c] 3-4
[d] Basura inútil se esparce por el suelo.
[c] 5-9
[d] Encuentras un corazón de piedra que late con calidez mientras lo sostienes en tus manos. Obtén +1 de cordura.
[c] 10+
[d<]

Encuentras una máscara con labios vivos. Si regresas al asentamiento con la máscara, aprende rápidamente tu idioma y comparte sus secretos antes de desmoronarse en polvo. Al comienzo de la próxima fase de asentamiento, saca 3 innovaciones del deck de innovaciones y agrega una a tu asentamiento sin costo alguno.
[i] Si algún sobreviviente tiene una <b>Linterna Final</b>, comienza a parpadear y vibrar con fuerza. La máscara se desintegra y todos los sobrevivientes sufren 1 daño cerebral de evento.

<button class="hunt_event_action_button hoverable" id="found_relic" onClick="placeReminder('found_relic')">Colocar un recordatorio</button>

[>d]
[T]
`,

72: `72 | Algo para Pasar el Tiempo
[i] Si el asentamiento no tiene <b>Simposio</b>, ignora este evento y tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de eventos de caza.
De lo contrario, el revelador de eventos sugiere un juego de palabras para alegrar el ambiente mientras los sobrevivientes avanzan con pesadez. El revelador de eventos tira 1d10.
[i] Si el asentamiento tiene <b>Canto de los Valientes</b>, suma +4 a tu tirada.

[TO] 1d10
[td] Revelador de eventos
[c] 1-2
[d] Las voces bulliciosas de los sobrevivientes atraen a su presa. El monstruo los <b>embosca</b>.
[c] 3-7
[d] Nadie más está de humor para un juego. El revelador de eventos pierde 1 valor.
[c] 8-9
[d] Los sobrevivientes juegan el juego simple pero entretenido. Cada sobreviviente obtiene +1 de valor.
[c] 10+
[dt] El juego es asombrosamente divertido y los ánimos de los sobrevivientes se elevan con su estruendosa risa. Cada sobreviviente tira 1d10. En un 6+, obtienen 1 supervivencia o curan 1 trastorno.
`,

  73: `73 | Brasa Dorada
El camino hacia adelante está bloqueado por un denso humo salpicado de oro. Los sobrevivientes pueden avanzar y enfrentar el humo.
[i] Si los sobrevivientes tienen una <b>Linterna Final</b>, los guía a través del humo sin problemas; termina este evento.

[TO] Elección
[td] ¿Qué hacen?
[c] Enfrentar el humo
[d<]

Cada sobreviviente gana +1 de coraje y el revelador de eventos tira 1d10.

[TO] 1d10
[td] Revelador de eventos
[c] 1-5
[d] El humo abruma a los sobrevivientes. Mientras corren a través de la niebla brillante, cada sobreviviente sufre 1 punto de daño de evento en la cabeza y el pecho. Cuando finalmente salen de la neblina, caminan en silencio. Nadie se siente cómodo compartiendo las terribles cosas que vieron. Cada sobreviviente gana 1 trastorno aleatorio.
[c] 6+
[d<]

Los sobrevivientes se agarran de las manos, forman una línea y atraviesan el humo. Respiran a través de trapos y se turnan para mirar para orientarse. En algún lugar, en lo profundo del humo, tropiezan con un cráter. Pueden ignorarlo y escapar del humo (terminando este evento) o explorar el cráter.

[TO] Elección
[td] ¿Qué hacen?
[c] Explorar el cráter
[d<]

Los sobrevivientes descienden cuidadosamente al cráter, encontrando las ruinas de un asentamiento rodeado por un anillo de calaveras. El asentamiento está absolutamente demolido y casi todo ha sido reducido a polvo por alguna fuerza tremenda. Las calaveras miran hacia fuera de las ruinas y de cada boca abierta, una brasa dorada expulsa humo.
La vista es espeluznante; cada sobreviviente sufre 1d10 de daño cerebral por evento y gana 1 trastorno aleatorio. Los sobrevivientes tamizan cuidadosamente las ruinas.
Nombra a un sobreviviente para <b>investigar</b> y tira 1d10.

[TO] 1d10
[td] Sobreviviente nominado - Investigar
[c] 1
[d<]

Contra toda razón, sientes la necesidad de alcanzar una brasa dorada en una calavera. Tu carne chisporrotea, cegándote de dolor, pero no puedes dejar de alcanzar tu propia boca.

[TO] Comprobación
[td] ¿Tienes la mandíbula rota?
[c] Sí #Mandíbula rota
[d] Eres frustrado. Dejas caer la brasa dorada de tu mano ardiente. Sufres la lesión severa de <b>brazo desmembrado</b>. Sacudidos, los sobrevivientes huyen del humo.
[c] No #No hay mandíbula rota
[d<]

Tu mandíbula se cierra alrededor de la brasa, la carne de tu boca se derrite y amortigua tus gritos de dolor. El humo sale de tus ojos, nariz y oídos.

[TO] Comprobación
[td] ¿El asentamiento tiene <b>Sobrevivencia del más apto</b>?
[c] Sí #Sobrevivencia del más apto
[d] El deseo de vivir triunfa y rompes salvajemente tu propia mandíbula, sufres la lesión severa de <b>mandíbula rota</b>. La brasa cae al suelo, su siseo resonando en tus oídos mientras todos los sobrevivientes huyen aterrorizados.
[c] No #
[dt] Tu cuerpo humeante y fundido marcha robóticamente hacia el anillo de calaveras, colocándose en el lugar de la calavera perturbada. El olor pútrido de tu cerebro en llamas impregna el humo en el aire. La vista es tan perturbadora que todos los demás sobrevivientes huyen, sin hablar jamás de lo que sucedió.
[>d]
[>d]
[T]
[c] 2-4
[d] Sientes el peligro extremo de las brasas doradas y te detienes el tiempo suficiente para agarrar un pequeño recuerdo. Gana 1 recurso básico <b>Linterna Rota</b>.
[c] 5-8
[d] Te das cuenta de que el asentamiento está lleno de linternas, todas apagadas y casi irreconocibles. Los sobrevivientes resuelven que esto nunca les sucederá a ellos. Si algún sobreviviente regresa al asentamiento este año, gana +2`+endeavor_img+`.
[c] 9+
[dt] En medio de las ruinas, encuentras solo un objeto intacto. Una Espada del Crepúsculo. Descansa, respetuosamente colocada sobre un esqueleto de sobreviviente en su mayoría sin daños. Si el asentamiento no tiene una <b>Espada del Crepúsculo</b>, y ningún sobreviviente en el grupo tiene el trastorno <b>Honorable</b>, puedes nominar a un sobreviviente para que obtenga el equipo raro <b>Espada del Crepúsculo</b>. Si lo haces y el evento de historia <b>Caballero Encapuchado</b> no está en la línea de tiempo, agrégalo a la línea de tiempo dentro de 2 años.

[>d]
[c] Escapar del humo
[dt] Los sobrevivientes escapan del humo y continúan su caza.

[>d]
[T]
[>d]
[c] Dar la vuelta
[dt] Dan un largo rodeo; tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.`,
  74: `74 | Antler-Gouged
Una gran batalla por la dominación entre dos enormes antílopes ha dejado la tierra con cicatrices cruzadas por surcos.
Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente
[c] 1-2
[d] ¡Tropiezas con el suelo irregular y desgarras tu carne! Sufres la lesión severa de <b>músculo desgarrado</b> en la pierna.
[c] 3-8
[d] Caminas cuidadosamente sobre las caras destruidas.
[c] 9+
[dt] Encuentras una piedra suelta. Ganas un equipo inicial <b>Piedra Fundacional</b>.
`,
  75: `75 | ¡Ups!
Tropezando en la oscuridad, el revelador del evento se estrella contra el suelo, aplastando su linterna bajo ellos. La luz viva dentro de la linterna se agita por la torpeza del sobreviviente y quema una pieza de equipo. El revelador del evento archiva 1 equipo de su elección de su grilla de equipo.
`,
  76: `76 | Sueña el Camino
Los sobrevivientes tienen vívidas y febriles visiones de lo que les espera. De repente, todos se despiertan sobresaltados y comparan frenéticamente los horrores que vieron.
Cada sobreviviente tira 1d10.
[i] Si algún sobreviviente es un salvador, su poderoso sueño envuelve al grupo; cada sobreviviente puede seleccionar el resultado de tirada de dado que desee.
Si las tiradas de dados de algunos sobrevivientes son iguales, esos sobrevivientes descubren que tuvieron el mismo sueño exacto. Ganan +1 cordura. Si algunas de las tiradas duplicadas son 10, el revelador del evento puede volver a tirar cualquier resultado de tirada de dado en esta fase de caza (cualquier tirada de dado, no solo la suya).
`,
  77: `77 | Hundimiento
Un agujero gigante se abre de repente bajo los sobrevivientes, revelando un remolino negro y revuelto de ícor debajo de ellos. Cada sobreviviente tira 1d10. El o los sobrevivientes con la puntuación más baja (o empate) se convierten en rezagados.
Cada rezagado tira 1d10.
[i] Si algún otro sobreviviente tiene un látigo, arrojan una línea al rezagado. Cada rezagado suma +4 a su tirada.

[TA] 1d10
[td] Rezagado
[c] 1
[d] Eres tragado por el agujero. Momentos después, te regurgita completamente desnudo. Tu equipo está irremediablemente perdido en el miasma. Archiva todo el equipo en tu grilla de equipo.
[c] 2-4
[d] Los otros sobrevivientes te levantan, pero no antes de que algo sea succionado por debajo de la superficie. Archiva 1 equipo de tu elección de tu grilla de equipo.
[c] 5-9
[d] Te arrastran a la seguridad, aterrado pero ileso.
[c] 10+
[dt] Después de un esfuerzo monumental, los otros sobrevivientes te liberan. ¡Alguien se aferra fuertemente a tus pies (+1 población)! Mientras regresan a tu asentamiento, cada sobreviviente sufre 1 punto de daño cerebral por evento.
`,

  78: `78 | Cazador del Gran Juego Muerto

Los sobrevivientes encuentran un cadáver vestido con ropa de colores brillantes, sosteniendo algo en su pecho. El revelador del evento puede <b>investigar</b>.

[TO] Elección
[td] Revelador del evento
[c] Investigar
[d<]

Gana +1 de coraje y tira 1d10.
[i] Si algún sobreviviente tiene un látigo, azotan al cadáver desde lejos; suma +4 a tu tirada.

[TO] 1d10
[td] Revelador del evento -Investigar
[c] 1
[d] ¡Estaba sosteniendo un explosivo! Moverlo hace que explote, volándote la mano. Sufres la lesión severa de <b>brazo desmembrado</b>.
[c] 2-4
[d] ¡Estaba sosteniendo un explosivo! Explota, pero te alejas antes de que ocurra el desastre. Gana un token de precisión -1.
[c] 5-9
[d<]

Sus manos están vacías.
[i] Si el asentamiento tiene <b>Canibalizar</b>, gana 1 recurso básico aleatorio.
[i] Si el asentamiento tiene <b>Tumbas</b>, gana +1 comprensión.

[>d]
[c] 10+
[dt] Sus manos contienen una botella engarzada llena de un líquido verde claro. Gana 1 equipo <b>Bebida Frenética</b>.
[>d]
[c] Continuar
[dt] Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
`,
  79: `79 | Pequeño Prospector Moribundo
[i] Si tu asentamiento ya tiene una <b>Llave de la Rejilla</b>, el prospector ha desaparecido. Tira nuevamente en la tabla de eventos de caza antes de avanzar en el tablero de caza.
Los sobrevivientes descubren un cuerpo apoyado contra una gran pared de piedra. A medida que se acercan, encuentran a un pequeño prospector moribundo lleno de flechas. A medida que se acercan, gruñe una advertencia, amenazándolos con un gran fragmento de piedra. Cuando ve que no son monstruos malvados, se calma y les da una llave. Con su último aliento dice: Esta es la llave de la rejilla. Sin ella, nunca pasaréis.
Registra la <b>Llave de la Rejilla</b> en las notas de la hoja de registro del asentamiento.

[TO] Comprobación
[td] ¿El asentamiento tiene Tumbas?
[c] Sí #Tumbas
[d] El revelador del evento construye un pequeño monumento de narices de piedra rotas y gana +1 de comprensión.
[c] No #
[d] Los sobrevivientes continúan su caza.
[T]
`,
  80: `80 | Roca Enamorada
Los sobrevivientes pasan por un anillo de piedras con una roca poco llamativa en el centro. Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (al azar en caso de empates) se convierte en un rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[dt] El rezagado levanta la roca (¡es pesada!) y promete llevarla siempre consigo, eternamente enamorado. Siempre deben dejar un espacio en su grilla de equipo vacío, ya que contiene su amada roca. Registra esto en tu hoja de sobreviviente. La roca se puede perder o archivar como cualquier otro equipo; si se pierde, el sobreviviente llora a su amada y recupera el espacio en su grilla de equipo.
`,
  81: `81 | Campo de Brazos

[img] 78

Los sobrevivientes caminan cuidadosamente por la espalda de un monstruo masivo y dormido. En lugar de pelo, tiene brazos alargados, varios de ellos temblando ante cualquier sueño en el que el gran monstruo esté inmerso. Los sobrevivientes no perturban el sueño profundo del monstruo y cruzan sin problemas.

[TO] Comprobación
[td] ¿Algún sobreviviente tiene una hoz?
[c] Sí #Hoz
[d] Quitan con cuidado algo de piel resistente de uno de los brazos y ganan 1 recurso básico <b>Piel</b>.
[c] No #No hay hoz
[dt] Los sobrevivientes continúan su caza.
[T]
`,
  82: `82 | Hierba Devoradora
Crece hierba verde vibrante en parches delante de los sobrevivientes. Una inspección más cercana de las hojas delicadas revela que son tan afiladas como cualquier cuchilla. Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (o sobrevivientes, en caso de empates) se convierten en rezagados.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[d<]

Mientras los sobrevivientes eligen cuidadosamente su camino más allá de los peligros verdes, el rezagado tropieza en la maleza. Tira 1d10.
[i] Si algún sobreviviente tiene un látigo, se hace un lazo apresurado. Agrega +4 a tu tirada.

[TA] 1d10
[td] Rezagado
[c] 1
[d] Aterrizas en el parche de hierba. Mientras te pones de pie, te das cuenta de que es demasiado tarde. Las partes de tu cuerpo que tocaron el suelo han brotado con afiladas cuchillas de hierba. Cualquier intento de quitarlas solo las esparce más por tu cuerpo. Durante el enfrentamiento, nunca eres una amenaza (ignora cualquier efecto que te convierta en una amenaza, incluso el <b>Sniff</b> del León Blanco). Al final del enfrentamiento, tu cuerpo florece en un remolino de hierba verde inmaculada. Muerto.
[c] 2-9
[d] Caes pero logras interponer algo entre la hierba y tu piel desnuda. Archiva 1 equipo de tu elección de tu grilla de equipo para protegerte, o trata este resultado como si hubieras sacado un 1.
[c] 10+
[d] Detienes tu caída antes de que sea demasiado tarde.
[>d]
[T]
`,

  83: `83 | Monolito de Carne

[img] 83

Los sobrevivientes se acercan a un monolito de cinco lados hecho de carne que se extiende hacia la oscuridad por encima de ellos. Extremidades y caras tanto humanas como extrañas sobresalen de todos los lados. El revelador del evento gana +1 de coraje e <b>investiga</b>.

[TO] 1d10
[td] Revelador del evento - investigar
[c] 1
[d<]

Las extremidades del monolito cobran vida, agarrándote antes de que puedas reaccionar.
[TO] Comprobación
[td] ¿El asentamiento tiene Supervivencia del más apto?
[c] Sí #Supervivencia del más apto
[d] ¡Combates contra el monolito! El horrible edificio te arranca el brazo, ¡pero le muerdes uno de sus apéndices a cambio, cortándolo! El monolito retrocede al suelo mientras ruges de triunfo. Sufre la lesión severa de <b>brazo desmembrado</b> y gana +1 de fuerza permanente. Todos los demás sobrevivientes se quedan asombrados y ganan +3 de cordura y +1 de coraje.
[c] No #
[dt] Se unen tus partes del cuerpo a las suyas con una eficiencia enloquecedora mientras eres desgarrado en una lluvia de sangre. Muerto. La horrible vista hace que todos los demás sobrevivientes sufran 3 puntos de daño cerebral por evento y todos ganen el trastorno <b>Estrés Postraumático</b>.

[>d]
[c] 2-4
[d] Manos y tentáculos te agarran. Gasta 1 supervivencia para escapar o trata este resultado como si hubieras sacado un 1.
[c] 5-9
[d] Todos los sobrevivientes son repelidos por el horror. Todos sufren 1 punto de daño cerebral ★ por evento de presa.
[c] 10+
[d<]

Cuando los sobrevivientes se acercan, descubren que este monolito de carne es en realidad una enorme pila de cadáveres de sobrevivientes, muchos con miembros gravemente rotos. La pila está cubierta de trozos de visceras extrañas que huelen dulces.
[TO] Comprobación
[td] ¿El asentamiento tiene Tumbas?
[c] Sí #Tumbas
[d] Subes a la pila y encuentras a 3 sobrevivientes apenas vivos, sus cuerpos carentes de nutrición y sus ojos demasiado sensibles a la luz de la linterna. Si regresas al asentamiento, +3 de población. Estos nuevos sobrevivientes no pueden partir durante 2 años de la linterna ya que necesitan tiempo para recuperarse (nota esto en la línea de tiempo).
[c] No #
[dt] Todo lo que logras cosechar de la pila de cadáveres enflaquecidos son 2 recursos básicos <b>Órgano</b>. Su piel es demasiado suave y sus huesos demasiado frágiles para ser de utilidad.
[>d]
[T]
`,

  84: `84 | Libro del Escriba

[img] 84

Un libro enorme y bellamente encuadernado yace abierto ante los sobrevivientes.

[TO] Comprobación
[td] ¿El asentamiento tiene Pictogramas?
[c] Sí #Pictogramas
[d<]

Cualquier sobreviviente con 3+ de coraje puede escribir su nombre en el libro. Los sobrevivientes <b>Insanos</b> con 3+ de coraje deben escribir.

Cada sobreviviente que escriba su nombre en el libro tira 1d10 y suma su comprensión. Si nadie escribe, tira nuevamente en la tabla de eventos antes de avanzar en el tablero de caza.

[TA] 1d10
[td] Cualquier sobreviviente con 3+ de coraje
[c] 1-4
[d] Cuando terminas de escribir tu nombre, sabes que hiciste algo terriblemente mal. Desapareces de la historia. Muerto. Archiva tu equipo.
[c] 5-8
[d] No sucede nada.
[c] 9-10
[d] Mientras escribes tu nombre, te sientes restaurado. Cura todos los niveles de lesiones y puntos de armadura perdidos. Gana +2 de supervivencia.
[c] 11-14
[d] Te sientes seguro de que mientras tu nombre esté en el libro, nada malo puede pasarte. Gana dos de lo siguiente: +2 de coraje, +2 de comprensión o +2 de supervivencia.
[c] 15+
[dt] El libro demuestra la marca innegable que dejas en el mundo. Gana +1 de supervivencia, +1 de comprensión, +1 de coraje, +1 de velocidad permanente y +1 de fuerza permanente.

[>d]
[c] No #
[dt] Los sobrevivientes continúan su caza. Tira nuevamente en la tabla de eventos antes de avanzar en el tablero de caza.
`,

85: `85 | Prueba de Coraje
Lava fluye desde los ojos de una enorme y retorcida cara de piedra. Sus dientes apretados sostienen una espada desgastada. Si hay sobrevivientes con 6+ coraje, elige uno para desafiar la lava.

[TO] Verificación
[td] ¿Hay algún sobreviviente con 6+ coraje?
[c] Sí #6+ coraje
[d<]

Obtienen el equipo raro <b>Espada de Aventura</b>.

[TO] Verificación
[td] ¿La colonia ya tiene Espada de Aventura y Contar Historias?
[c] Sí #
[d<]

Los sobrevivientes comparten historias de valentía; cada sobreviviente gana +1 supervivencia.
[i] Si la colonia también tiene <b>Saga</b>, las historias son excepcionalmente conmovedoras; cada sobreviviente también gana +1 coraje.

[>d]
[c] No #
[dt] El grupo continúa.

[>d]
[c] No #
[d] El grupo avanza con una sensación de insuficiencia.
[T]
`,

86: `86 | Túneles Pútridos
Los sobrevivientes lo huelen mucho antes de verlo, una serie de bocas de cueva que emiten olores nauseabundos.
Cada sobreviviente tira 1d10.

[TA] 1d10
[td] Cada sobreviviente
[c] 1-8
[d] Superan el deseo de investigar.
[c] 9+
[dt] Entran en uno de los túneles y descubren a un grupo miserable de sobrevivientes enfermos viviendo en la suciedad. Todos los sobrevivientes que ingresan a la cueva contraen su enfermedad fétida en descomposición. Tienen <b>Lepra</b>: reduce todo el daño sufrido en 1, con un mínimo de 1. Sufren -2 en los resultados de lesiones graves. Registra este impedimento.
`,

87: `87 | Rostros Llorosos
El agua fluye desde los ojos de las caras de piedra circundantes, reuniéndose en una pequeña piscina. Cualquier sobreviviente puede <b>consumir</b> del estanque y tirar 1d10.
[i] Si tienen 3+ de comprensión, agrega +2 a su tirada.

Los sobrevivientes <b>insanos</b> están inconsolables, se acuestan en el suelo sollozando intensamente. Si algún sobreviviente está <b>insano</b>, tira de nuevo en la tabla de eventos de caza antes de avanzar en el tablero de caza.

[TA] 1d10
[td] Cualquier sobreviviente - Consumir
[c] 1-3
[d] El agua es salada y agria. No puedes evitar pensar en lo que podrías estar bebiendo. Sufre 1 punto de daño de evento cerebral.
[c] 4-6
[d] ¡Refrescante!
[c] 7-8
[d] El agua está más limpia que la mayoría. Puedes curar hasta 2 niveles de lesiones en una ubicación de golpe.
[c] 9+
[dt] El agua es vigorizante. Gana un token de +1 de velocidad.
`,

88: `88 | La Espada y la Estatua
Una estatua con un solo ojo, el doble de alta que cualquier hombre, se encuentra frente a un gran yunque con un martillo en cada una de sus seis manos. Los sobrevivientes, comenzando con el revelador de eventos y procediendo en sentido horario, pueden intentar agarrar la espada del yunque una vez. Si lo hacen, ganan +1 de coraje, tiran 1d10 y suman su XP de Caza a su tirada.

[TA] 1d10
[td] Cualquier sobreviviente
[c] 1-2
[d] A medida que te acercas al yunque, la estatua agarra la espada y la hunde en tu cuerpo. Hay un siseo agudo mientras el metal caliente se enfría en tu sangre. Muerto.
[c] 3-8
[d] Agarras rápidamente la espada, pero no lo suficientemente rápido. Sufre la lesión severa de <b>brazo desmembrado</b>.
[c] 9-13
[d] Puede que no seas lo suficientemente rápido para agarrar la espada, pero al menos no eres lo suficientemente tonto como para morir en el intento.
[c] 14+
[dt] Tu velocidad es legendaria. Gana el equipo raro <b>Muramasa</b>. Finaliza este evento.
`,

89: `89 | Pájaros Limpiares
Pequeños pájaros raídos con picos delgados como agujas vuelan por encima. Cada sobreviviente tira 1d10. El sobreviviente con la puntuación más baja (tira de nuevo en caso de empate) se convierte en rezagado.

[TO] 1d10
[td] Determinar rezagado
[c] Rezagado elegido
[d<]

Los pájaros rodean al rezagado. Uno se abre camino en la boca del rezagado y baja por su garganta. El sobreviviente vomita el pájaro bien alimentado, sus entrañas revueltas y marcadas. Gana +1 suerte permanente, -1 velocidad permanente.
[i] Si algún sobreviviente tiene un látigo, lo golpean y derriban a la criatura ofensiva. Gana 1 recurso básico al azar.

[>d]
[T]
`,

90: `90 | Luz en el Horizonte
Los sobrevivientes escuchan un aullido estridente, seguido de un estruendo. Ven una explosión de luz multicolor en el horizonte. La luz antinatural ilumina el camino de los sobrev

ivientes.

[TO] Verificación
[td] ¿Hay algún sobreviviente cuerdo?
[c] Sí # Sobreviviente cuerdo
[d<]

Los sobrevivientes siguen la luz. Puedes volver a tirar el próximo resultado en la tabla de eventos de caza.
La luz llega a la colonia. Agrega el evento de colonia <b>Luces en el Cielo</b> al cronograma el próximo año.
[>d]
[c] No # Todos están insanos
[d<]

Los sobrevivientes se alejan de la luz, caminando hacia la oscuridad. Mueve a los sobrevivientes 2 espacios hacia atrás en el tablero de caza.
La luz llega a la colonia. Agrega el evento de colonia <b>Luces en el Cielo</b> al cronograma el próximo año.

[>d]
[T]
`,

91: `91 | El Comienzo
Los sobrevivientes tropiezan con la escena de la primera caza de su asentamiento. Ya sea que lo hayan visto ellos mismos o lo hayan escuchado a través de historias, lo reconocen de inmediato. Ver el lugar del primer triunfo de su asentamiento es electrizante.

Cada sobreviviente obtiene +1 de supervivencia.

[TA] Verificación
[td] ¿Qué innovaciones tiene el asentamiento?
[c] Saga
[d] Cada sobreviviente obtiene +1 de coraje.
[c] Narración de Historias
[dt] Cada sobreviviente obtiene +1 de comprensión.
`,

92: `92 | Comienzo Fallido
Los sobrevivientes encuentran los restos desgarrados de cuatro humanos. Vestidos con taparrabos y agarrando fragmentos de piedra, llevan las marcas distintivas de las garras del León Blanco.
Cada sobreviviente sufre 1 punto de daño de evento cerebral y obtiene 1 equipo inicial <b>Piedra Fundadora</b>. Los sobrevivientes con 3+ de comprensión también obtienen +1d10 de locura.
`,

93: `93 | Sobreviviente Perdido

[img] 93 # width:25%

En un hueco entre dos rocas idénticas, encuentras el cadáver de un hombre con un cabello fabuloso aferrando un libro a su pecho.

[TO] Verificación
[td] ¿El asentamiento tiene Pictogramas?
[c] Sí #Pictogramas
[d<]

El revelador del evento puede leer del libro y tirar 1d10.

[TO] Elección
[td] Revelador del evento
[c] Leer
[d<]

El libro cuenta la trágica historia de dos sobrevivientes que encontraron un amor que nunca pudieron tener.

[TO] 1d10
[td] Revelador del evento
[c] 1-3
[d] Página 3 - Doble Naturaleza. El asentamiento de los amantes fue destruido y fueron secuestrados. El revelador del evento se siente en conflicto. Después del enfrentamiento, se alejan del asentamiento para siempre en busca de algo.
[c] 4-6
[d] Página 6 - El hombre pasó años soportando torturas horribles por el bien de su amada. Cada herida solo fortaleció la determinación del hombre. Gana +1 de velocidad permanente y los trastornos <b>Ansiedad</b> y <b>Traumatizado</b>.
[c] 7+
[dt] Página 9 - El hombre escapó, pero nunca regresó. Sabía que si lo hacía, condenaría a su amada. Decidió que era mejor desvanecerse en la memoria para proteger las pocas sonrisas que su existencia había inspirado. Gana +1 de coraje y las Artes de Lucha <b>Duro</b> y <b>Último Hombre en Pie</b>.

[>d]
[c] No leer
[dt] Los sobrevivientes continúan, profundamente confundidos.

[>d]
[c] No #
[dt] Los sobrevivientes continúan, profundamente confundidos.
`,

94: `94 | Desorden Nauseabundo
Los sobrevivientes llegan a un parche de tierra gravemente dañada. Las caras de piedra están agrietadas y los escombros están esparcidos por todas partes. Montones de heces con un olor tóxico y vísceras medio digeridas llenan la zona. Los sobrevivientes se acercan, pero los sobrevivientes con el trastorno <b>Escrupulosos</b> se niegan a acercarse más.

Los sobrevivientes <b>insanos</b> <b>consumen</b> lo que encuentran y se enferman; obtienen un token de -1 de fuerza. Los sobrevivientes cuerdos se detienen para <b>investigar</b> el desorden. Cada uno obtiene +1 de coraje, tira 1d10 y suma su comprensión.

[TA] 1d10
[td] Cada sobreviviente cuerdo - Investigar
[c] 1-2
[d] Te mareaste al tamizar los montones de heces; sigue un ataque de vómitos incontrolables. Obtén un token de -1 de fuerza.
[c] 3-8
[d] Jadeante, con los ojos llenos de lágrimas, tu repugnante caza da sus frutos. Obtén 1 recurso básico aleatorio y sufre 1 punto de daño de evento en una ubicación de golpe al azar.
[c] 9+
[dt] ¡Tu intuición da sus frutos! Obtén 1 recurso básico aleatorio.
`,

95: `95 | Sombrío y Helado
Hay una quietud total en el aire. El ambiente se llena de preocupación y los sobrevivientes continúan nerviosamente. Un frío amargo y maligno se instala y no hay refugio.
Los sobrevivientes se agrupan para darse calor, temblando fuertemente. A menos que un sobreviviente tenga equipo de armadura en cada ubicación de golpe, pierde ★ de supervivencia.
`,

96: `96 | Extraño Encapuchado
Una forma encapuchada se adelanta desde una mancha de oscuridad delante de los sobrevivientes. Su vestimenta mal ajustada se mueve sobre su forma y sus pisadas dejan charcos oscuros y negros en las bocas de las piedras resbaladizas por la lluvia en el suelo.
El revelador del evento se acerca al desconocido y tira 1d10.

[TO] 1d10
[td] Revelador del evento
[c] 1-2
[d] La aproximación del desconocido llena tus oídos con estática dolorosa. Hay un destello de luz y un fuerte estallido. Caes al suelo, sosteniendo tu pecho ensangrentado de dolor. Sufres la lesión grave de cuerpo <b>ruptura de bazo</b>. Todos los sobrevivientes <b>no sordos</b> sufren 2 puntos de daño de evento cerebral.
[c] 3-4
[d] El desconocido se difumina dentro y fuera de foco mientras te acercas. Cuando llegas a ellos, desaparecen, su forma imposible de recordar. Ganas 1 ficha de hemorragia y olvidas 1 arte de lucha de tu elección.
[c] 5-6
[d] Cuando te acercas al desconocido, ¡te das cuenta de que están flotando en el aire! Apenas logras distinguir un reseco ronquido que parece ser... ¿risa? Después de que el desconocido se va, regresas al grupo, con el rostro blanco como la nieve, negándote a hablar de lo que viste. Sufres 3 puntos de daño de evento cerebral.
[c] 7-8
[d] El desconocido levanta los brazos y avanza para encontrarse contigo. Desde debajo de los pliegues de su capa, apenas puedes distinguir un rastro de piel escamosa y violeta. Una garra se extiende desde una manga y acaricia suavemente tu mejilla, dejando una capa de líquido viscoso. Limpiando el lodo, encuentras la experiencia extraña de alguna manera conmovedora. Ganas +1 de supervivencia, +1 de comprensión.
[c] 9+
[d<]

El desconocido te ordena organizar una prueba de fuerza entre los sobrevivientes. Cada sobreviviente debe tirar 1d10 (en caso de empate, se hace una tirada).
[TO] 1d10
[td] Determinar al ganador
[c] Ganador elegido
[dt] El desconocido marca su rostro con su garra brillante, otorgándole la habilidad <b>Voluntad de Hierro</b>: No puedes ser derribado. Reduce todo el retroceso que sufras a retroceso 1. Registra esta habilidad. Todos los sobrevivientes pierden 4 de supervivencia por la agotadora pelea.

[>d]
[T]
`,

97: `97 | Criatura Viviente
¡El suelo de repente se mueve y se eleva bruscamente en el aire! Los sobrevivientes se encuentran aferrándose a la espalda de una gigantesca criatura que yace durmiendo bajo sus pies. Los sobrevivientes se aferran a la vida, absolutamente aterrorizados.
Nombra a un sobreviviente para que trepe hacia la parte superior del gigante y vea lo que hay más adelante. Tiran 1d10.

[TO] 1d10
[td] Sobreviviente nominado
[c] 1
[d] ¡Tu movimiento irrita al gigante, enviando a los sobrevivientes volando! Todos los sobrevivientes sufren 1d5 puntos de daño de evento en una ubicación de golpe al azar. Archiva todo el equipo <b>frágil</b>.
[c] 2-7
[d] Alcanzas la cima y tienes un punto de vista perfecto para ver el mundo, si tan solo hubiera suficiente luz para verlo. Establece tu locura en O. ¡El gigante te lleva exactamente a donde vas! ¡Comienza el enfrentamiento de inmediato!
[c] 8+
[dt] Descubres una extraña criatura con una cara invertida que talla diligentemente en la espalda del gigante. Desecha las caras de piedra dañadas mientras trabaja. Cada sobreviviente atrapa un fragmento, ganando 1 equipo inicial <b>Piedra Fundadora</b>. Eventualmente, el gigante se asienta en el suelo nuevamente. Te bajas y descubres tu presa. ¡<b>Embosca</b> al monstruo!
`,

98: `98 | Ojos Ensangrentados

[img] 98 # width:35%

Los sobrevivientes encuentran un rastro de sangre. Se acumula en las cuencas de los ojos de la tierra con caras de piedra. La sangre todavía está caliente.
El revelador del evento puede <b>investigar</b> y tirar 1d10, o ignorar el rastro y poner fin a este evento.

[TO] 1d10
[td] Revelador del evento - Investigar
[c] 1-3
[d] Uno de los tuyos está postrado al final del rastro, sangrando terriblemente. Elige un sobreviviente al azar, este obtiene 3 fichas de hemorragia. Todos los sobrevivientes sufren 3 puntos de daño de evento cerebral.
[c] 4-6
[d] El rastro conduce a una gran caja. Atrapado en su interior hay un joven sobreviviente pelirrojo. Gana +1 población. Los grabados que adornan la caja son inquietantes. Todos los sobrevivientes sufren 3 puntos de daño de evento cerebral.
[c] 7+
[dt] ¡El rastro conduce a tu presa! El monstruo está herido de una batalla anterior. Comienza el enfrentamiento de inmediato. Al comienzo del enfrentamiento, el monstruo sufre 1 herida.
`,

99: `99 | Reja

[img] 99

Los sobrevivientes se acercan a una masiva reja de pie en la oscuridad. No está conectada a nada y no bloquea su camino. Pueden optar por rodearla.

[TO] Verificación


[td] ¿El asentamiento tiene la Llave de la Reja?
[c] Sí #Llave de la Reja
[d<]

Pueden borrarla de la hoja de registro del asentamiento y usarla.
[TO] Elección
[td] ¿Usar la Llave de la Reja?
[c] Sí #Abrir la reja
[d<]

Cada sobreviviente obtiene +1 de coraje. La reja cruje y los sobrevivientes pasan a través de ella. Dentro los espera una penumbra húmeda.
[TO] 1d10
[td] Revelador del evento
[c] 1
[d] ¡La reja de repente se cierra detrás de ellos y las luces de sus linternas comienzan a disminuir! Lo último que ven los sobrevivientes es la mueca de miedo en los rostros de los demás mientras la oscuridad se cierra. Los sobrevivientes están muertos.
[c] 2+
[dt] A sus pies hay un crisol ornamentado con un vacío en forma de una poderosa arma. Gana el recurso extraño <b>Crisol Perfecto</b>. Si tienen un Herrero en su asentamiento, ahora pueden fabricar un <b>Cazador Perfecto</b>.

[>d]
[c] No #Rodear
[dt] Tira de nuevo en la tabla de eventos de caza antes de moverte en el tablero de caza.

[>d]
[c] No #Rodear
[d] Tira de nuevo en la tabla de eventos de caza antes de moverte en el tablero de caza.
[T]
`,

100: `100 | El Final

Un sonido metálico enorme resuena a lo lejos. Todos los sobrevivientes están electrizados por el temor; sufren 2 puntos de daño de evento cerebral.

[TO] Elección
[td] ¿Seguir el sonido?
[c] Sí #Seguir el sonido
[d<]

Cada sobreviviente obtiene +1 de coraje y se acerca con cautela al origen del sonido. Mientras viajan, pasan junto a los cadáveres destrozados de extrañas bestias.

[TO] Verificación
[td] ¿Alguno de los sobrevivientes tiene 3+ de comprensión?
[c] Sí #3+ comprensión
[d<]

Los sobrevivientes siguen el rastro de los cadáveres.

[img] 100 # width:35%

Al llegar a un enorme yunque, los sobrevivientes ven a un gigante, un caballero de un solo ojo, con su armadura de color carbón reflejando la luz de sus linternas.
El revelador del evento tira 1d10.

[TO] 1d10
[td] Revelador del evento
[c] 1
[d] El caballero mira a los sobrevivientes. Todos los sobrevivientes con menos de 3 de coraje mueren instantáneamente. Todos los demás sobrevivientes huyen horrorizados.
[c] 2-8
[d] El caballero se acerca a los sobrevivientes. En un instante, corta la oreja de un sobreviviente al azar; este obtiene 1 ficha de hemorragia. Luego, golpea el yunque, cegando a los sobrevivientes con una muralla de sonido en ebullición. Cuando abren los ojos, el caballero ha desaparecido y en su lugar descansan los equipos raros <b>Espada de Acero</b> y <b>Escudo de Acero</b>. El grupo divide el equipo entre ellos.
[c] 9+
[dt] El caballero aplasta el objeto en sus manos sobre el yunque. Cuando el objeto naranja fundido se enfría, se convierte en un martillo gigante con la cara de un león. El caballero lo coloca en las manos del sobreviviente con el coraje más alto (en caso de empate, se hace una tirada). Este obtiene el equipo raro <b>Martillo de Trueno</b>. Una corriente eléctrica recorre su cuerpo, uniendo el arma y el sobreviviente para siempre.
[>d]
[c] No #Menos de 3 de comprensión
[dt] Recoge 3 recursos básicos aleatorios de los cadáveres y finaliza este evento.

[>d]
[c] No #Retirada
[dt] Los sobrevivientes entran en pánico y se retiran en dirección opuesta; termina este evento y mueve a los sobrevivientes 2 espacios atrás en el tablero de caza.`,
}

module.exports = {
  random_hunt_events,
}
