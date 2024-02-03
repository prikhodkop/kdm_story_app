const texts = {
  'age': {
    'text': 'Tu tiempo en la oscuridad te cambia.'
  },
  'armored strangers': {
      'text': 'Te visitan figuras enigmáticas, completamente envueltas en armaduras. Marchan en silencio por el asentamiento. El único sonido es un choque metálico, mientras se detienen ante cada superviviente y golpean sus alabardas de linterna contra el suelo. Los supervivientes no tienen más opción que esperar impotentes sus deliberaciones mudas.'
  },
  'birth of a savior': {
      'text': 'El recién nacido desaparece de los brazos amorosos del asentamiento durante una fracción de segundo. En ese segundo, pasa toda una vida en el dominio del Soñador Etéreo y regresa con un sueño.'
  },
  'blackout': {
      'text': 'De repente y sin previo aviso, todas las linternas del asentamiento se apagan. El asentamiento queda sumido en la oscuridad.'
  },
  'bold': {
      'text': 'En un solo momento, tu perspectiva cambia profundamente.'
  },
  'bone witch':{
      'text': 'Un día, el desterrado emerge de la oscuridad. El asentamiento se inquieta al escuchar sus cánticos plañideros. Todos temen el misterio que lo mantuvo con vida en la oscuridad todos estos años. Algunos no pueden resistirse a preguntar.'
  },
  'cooking': {
      'text': 'Los supervivientes experimentan con restos de alimentos. El descubrimiento sabroso es comestible.'
  },
  'crush and devour': {
      'text': 'El superviviente desaparece, gritando, en la gigantesca mandíbula inferior del Antílope Gritón.'
  },
  'endless screams': {
      'text': 'Un grito atraviesa el silencio alrededor del asentamiento. A medida que el ruido se desvanece, un coro de horror se eleva en respuesta. El asentamiento estalla en caos tratando de comprender la fuente del terrible lamento.'
  },
  'game over': {
      'text': 'Tu campaña ha terminado en muerte y desesperanza magnífica. El asentamiento está perdido.'
  },
  'hammer and nail': {
      'text': 'Viertes toda tu fuerza en resistir el golpe imparable, tus uñas se pelan hacia atrás y el cabello crece hacia adentro en tu cuero cabelludo.'
  },
  'hands of heat': {
      'text': 'El misterio del resplandor de la linterna.'
  },
  'hooded knight': {
      'text': 'Un desconocido emerge de la oscuridad.'
  },
  'insight': {
      'text': 'En un solo momento, el telón del mundo se descorre.'
  },
  'intimacy': {
      'text': 'El misterio de la intimidad ocurre en el asentamiento.'
  },
  'kings curse': {
      'text': 'El superviviente que infligió el golpe mortal siente que su corazón se hunde.'
  },
  'kings step': {
      'text': 'Resiste la presión no dicha del embate del monstruo.'
  },
  'lantern research': {
      'text': 'Sin esperanza, la tenacidad impulsa al asentamiento hacia adelante.'
  },
  'legendary lungs': {
      'text': 'La sensación del ataque del Carnicero es similar a ahogarse. Desesperadamente, buscas aire, solo para encontrarte con una boca llena de acero.'
  },
  'oxidation': {
      'text': 'Te acercas al Vigía derrotado. Su cuerpo chisporrotea con electricidad.'
  },
  'phoenix feather': {
      'text': 'Los cielos burbujean y murmuran mientras una presencia oscura atraviesa la atmósfera como un rayo negativo, succionando el aire y la energía de todos los que lo miran. Comienza una ligera lluvia. Los supervivientes levantan la vista para ver una enorme pluma iridiscente flotando lentamente hacia el suelo. Las luces de sus linternas reflejan extraños arcoíris en la torcida pluma. Un miedo primordial se arraiga en el asentamiento.'
  },
  'principle conviction': {
      'text': 'El superviviente debe encontrar una razón para existir. Apreciar la oscuridad en todo su misterio, o buscar dominarla y fortalecerse.'
  },
  'principle death': {
      'text': 'El grupo debe decidir qué hacer con el primer cadáver de un superviviente.'
  },
  'principle new life': {
      'text': 'El grupo debe decidir cómo criar a los jóvenes.'
  },
  'principle society': {
      'text': 'Había una vez una mujer loca que pasaba sus días hablando con la oscuridad. Un día, la oscuridad le respondió.'
  },
  'regal visit': {
      'text': 'La mano avanza hacia el asentamiento. Los pensamientos de los supervivientes desaparecen mientras caen de rodillas, paralizados por su gloriosa e incomprensible presencia.'
  },
  'see the truth': {
      'text': 'La mayor valentía se alcanza cuando se abandonan el pasado y el futuro. El vacío que queda es un pozo oscuro e interminable de fuerza. El miedo y el dolor son tu alimento, y te alimentarás.'
  },
  'showdown butcher': {
      'text': 'Había una vez un hombre que no pudo ocultar su miedo. Llevaba una máscara que transformaba su cobardía en rabia. A su vez, el hombre se convirtió en un monstruo. Todo lo que quedó fue una furia devoradora que merodeaba por la noche, recolectando los rostros temerosos de los demás.'
  },
  'showdown gold smoke knight': {
      'text': 'Un manto de ceniza cae sobre el asentamiento. Mientras los supervivientes se reúnen, una ráfaga abrasadora de cenizas atraviesa la multitud. El olor de cabello y piel que quedó les arde en las fosas nasales. Un destello de luz divide la oscuridad, iluminando la forma que se acerca de un enorme caballero que sostiene un enorme mazo ornamentado. Grandes columnas de humo tinta emanan de cada hueco de la armadura dorada del caballero. El Caballero del Humo Dorado habla en un idioma desconocido, una voz metálica hueca que resuena en su armadura. Se mantiene a la espera, esperando a sus desafiantes.'
  },
  'showdown kings man': {
      'text': 'Había una vez un monstruo que iba a liderar la procesión real de su amo. Primero, el monstruo llegó como heraldo, luego sus hambrientos amos. Tan fieros eran los amos del monstruo que nunca pensó en proteger su propia espalda, sabiendo qué horrores se escondían detrás de él.'
  },
  'showdown phoenix': {
      'text': 'El Fénix llena el horizonte de tu mente. Complejo y perturbador, tu esencia misma parece parpadear como una linterna moribunda. Una mezcla perfecta de emoción y terror sacude tus entrañas. Antes de darte cuenta, te encuentras avanzando para luchar.'
  },
  'showdown screaming antelope': {
      'text': 'Había una vez un monstruo temible que fue entrenado por la Mano para ser una montura para el Goblin. Sin embargo, al oler a su nuevo amo, la mente del monstruo se quebró y corrió hacia lo desconocido, espumando en la boca y mordiendo las narices del suelo de piedra.'
  },
  'showdown the hand': {
      'text': 'Había una vez una entidad que lo sabía todo, pero nunca habló. Por cada secreto que escapaba, se volvía más débil y sus enemigos más fuertes.'
  },
  'showdown watcher': {
      'text': 'Hace mucho tiempo, las bestias voraces buscaban en la oscuridad usando sus sentidos agudos para encontrar a su presa. En la distancia, vieron una columna de luz en pleno auge rodeada de apetitosos bocados que arruinaban su pequeña industria. Se relamían los labios, se acercaban. Pero las bestias se detuvieron en medio de un paso. El viento llevaba un molde, una presencia amenazante. Seguramente, las criaturas ocupadas no eran peligrosas. Sin embargo, la amenaza persistió, sentida en sus propios huesos. Instintivamente, las bestias se apartaron, buscando su comida en otro lugar.'
  },
  'showdown white lion': {
      'text': 'Había una vez una bestia que quería sentir qué tan suave era su piel. Como no podía alcanzar su propia espalda, mató a muchas otras criaturas y pasó tiempo frotando sus patas sobre ellas. Dicen que cuando el monstruo finalmente mató a un humano, se enamoró de su cabello suave y sus patas se convirtieron en un par de finas manos humanas.'
  },
  'watched': {
      'text': 'Manchas oscuras en el tesoro de las linternas. Un silencio nervioso cae sobre el asentamiento. Lentamente, los supervivientes más atrevidos miran más allá de las linternas oscurecidas, aventurándose debajo de ellas en una vasta cámara, desconocida e inimaginable. Durmiendo en el centro de la cámara, los supervivientes pueden sentir la presencia de un peligro inmenso. Su depredador definitivo pronto se despertaría, apagando la luz de la linterna que mantiene alejada la oscuridad interminable.'
  },
  'white secret': {
      'text': 'Un sueño, enterrado en lo más profundo de la memoria, emerge de repente. Sientes su cálido aliento bañando tu oído, susurrando susurros. Ella vino a ti trayendo los secretos del mundo y simplemente los habías olvidado, hasta ahora.'
  },
  'zero presence': {
      'text': '"¿Qué es más aterrador?" Te preguntas. "¿El monstruo o la repentina ausencia de él?"'
  },
  'fetid grotto': {
      'text': 'Acercándose a su presa, los supervivientes son sobrecogidos por una miasma repugnante.'
  },
  'final march': {
      'text': 'Los supervivientes preparan una trampa para descubrir el esquivo lugar de descanso final del antiguo Gorm.'
  },
  'melting horror': {
      'text': 'Impactado por estar de pie, el superviviente mordido se aferra a sus heridas incrédulo.'
  },
  'showdown gorm': {
      'text': 'Un día, una gran desgracia cayó sobre el asentamiento. Tormentas implacables se desataron sobre sus cabezas. De entre el vendaval, surgió una bestia gigantesca que se tragó a los más fuertes y hermosos, luego deambuló de regreso a la oscuridad con un lamento solitario, en busca de una pareja.'
  },
  'the approaching storm': {
      'text': 'El clima del asentamiento toma un giro para peor.'
  },

  'showdown dung beetle knight': {
      'text': 'Había una vez un humilde escarabajo que estaba irremediablemente atraído por las heces del Fénix. Sus extrañas cualidades hicieron evolucionar rápidamente al escarabajo. Un día, el Fénix migró a un bosque sagrado y la comida del escarabajo cayó bajo la feroz protección de un Caballero de las Flores. El escarabajo emuló al caballero para poder llegar a su comida sin provocar la ira del guardián.'
  },
  'spelunking of death': {
      'text': 'El grupo investiga la red de túneles del monstruo y se inspira en la rica vegetación.'
  },
  'underground sow': {
      'text': 'El asentamiento trabaja laboriosamente la tierra.'
  },
  'sun dipping': {
      'text': 'Rayos de luz perforan la tierra, alejando el peligro.'
  },
  'the great sky gift': {
      'text': 'La boca del sol se abre, creando un zumbido ensordecedor, y comienza a vomitar agua directamente en la piscina sagrada. Los supervivientes reconocen el regalo y aplauden mientras el líquido enriquecido con minerales y bacterias brota, su superficie refleja coloridos destellos de las linternas alrededor del asentamiento.'
  },
  'birth of color': {
      'text': 'La atmósfera se vuelve fría y negra mientras se llena el asentamiento de niebla del Pozo Sagrado. La luz desde arriba parpadea y rebota rápidamente en la niebla de manera espectacular. El asentamiento parece estar encerrado en una joya negra resplandeciente. Los huevos hinchados comienzan a resquebrajarse, derramando una variedad de líquidos translúcidos. Pequeños tentáculos se extienden hacia la luz de arriba, despertando los instintos maternales de los supervivientes. Se apresuran a ayudar a las pequeñas criaturas, ayudando a las que están listas para entrar en el mundo. Es un momento extraño y hermoso que deja a gran parte del asentamiento en un estado emocional.'
  },
  'final gift': {
      'text': 'Algo era diferente. La tradición decía que después del ritual solar, el agua sagrada sería vomitada por el sol. Pero no había agua, y los tonos amarillos suaves que emanaban del sol se volvieron un rojo intenso.'
  },
  'edged tonometry': {
      'text': 'En un silencio tenue, los supervivientes se reúnen alrededor de un misterioso maestro de la espada. Como se les indicó, cada uno tiene un ojo cubierto por un parche y se les prohíbe parpadear con el otro. Sus ojos expuestos, secos y temblorosos, miran fijamente en la oscuridad.'
  },
  'warriors of the sun': {
      'text': 'La composición celular del recién nacido cambia.'
  },
  'the great devourer': {
      'text': 'El Sol desciende, dispersando a sus pequeños y devorando a aquellos demasiado lentos para escapar. El mundo de los supervivientes se desmorona, ya que la misma cosa que han estado adorando durante generaciones los ataca.'
  },
  'an uninvited guest': {
      'text': 'Despertaron para encontrar a alguien nuevo parado en el centro de su asentamiento. Quieto como una estatua, una criatura parecida a un león con garras afiladas veía todo y no decía nada. Se preguntaban si incluso estaba vivo, pero los valientes curiosos informaron de una mirada electrificante en sus ojos inmóviles. ¿Qué es esta criatura? ¿Por qué está aquí?'
  },
  'places, everyone!': {
      'text': 'De repente, tres figuras más aparecen, provocando un revuelo. A pesar del torbellino de actividad a su alrededor, el Caballero del León permanece inmóvil.'
  },
  'showdown lion knight': {
      'text': 'Había una vez un monstruo que fue rechazado por su creador y dejado vagar en la oscuridad. Perdido en el mundo de los humanos, enloqueció en su intento de comprenderlos. Ahora, la única realidad que acepta existe en lo más profundo de su mente hueca y quebrada.'
  },
  'intermission': {
      'text': 'El enfrentamiento termina. El Caballero del León vuelve a su reposo.'
  },
  'strange caravan': {
      'text': 'Acampados fuera de la vista del Caballero del León, el séquito desempaca una caravana de basura y tesoros. El truco está en descubrir cuál es cuál.'
  },
  'showdown manhunter': {
      'text': 'Vino de una ciudad dorada y distante. Vino a cazar para servir a un propósito aterrador. Vino sin remordimientos, sin piedad y sin explicación. Vino por ti.'
  },
  'lottery': {
      'text': 'El Cazador de Hombres está contento con lo fácil que es diezmar tu asentamiento. Regresa para llevarse a un superviviente con un propósito desconocido.'
  },
  'showdown slenderman': {
      'text': 'Un día, un hombre solitario llegó a casa y descubrió que sus largas y solitarias horas ya no lo atormentaban. De hecho, ni siquiera podía recordarlas. Cada día, salía de casa con un dolor escalofriante en los huesos y sin memoria del día anterior. Un día, llegó a casa y descubrió que no estaba solo después de todo. Luego desapareció.'
  },
  'dark place': {
      'text': 'El superviviente observa horrorizado cómo el agua negra se acumula inexplicablemente a su alrededor.'
  },
  'light-forging': {
      'text': 'Por un corto tiempo, las extrañas propiedades físicas y químicas del Lugar Oscuro se recrean en una cámara crustal presurizada.'
  },
  'forgotten fear': {
      'text': 'En un instante, recuerdas los horrores del pasado y ves una figura familiar y delicada parada e ignorada entre los supervivientes. Tus gritos son ahogados por chorros de agua negra que salen de tu boca.'
  },
  'glowing crater': {
      'text': 'Un secreto vislumbrado se convierte en una obsesión.'
  },
  'showdown dragon king': {
      'text': 'Había una vez un monstruo que estaba solo en el mundo. Abandonado en su aflicción, el monstruo se arrastró en lo más profundo de su corazón dolorido hasta que se rompió y se incendió. Ahora, el poder de su pena y furia fluye como veneno invisible desde el rostro lloroso que esconde dentro de su cuerpo abultado.'
  },
  'meltdown': {
      'text': 'Una explosión invisible atraviesa la oscuridad.'
  },
  'midnight\'s children': {
      'text': 'La debilidad es anatema para la fortaleza.'
  },
  'awake': {
      'text': 'Un crecimiento de emociones que hace rechinar los dientes se detiene de repente, dejándote en un momento de serena claridad.'
  },
  'unveil the sky': {
      'text': 'La realidad se desgarra, revelando las profundidades repletas de la noche infinita.'
  },
  'faces in the sky': {
      'text': 'De repente, un segundo latido pulsa en tu tímpano, un segundo espíritu ruge en tu pecho. Miras hacia arriba, entrecerrando los ojos con una enorme cara cubierta visible solo para tus ojos. Es la cara de las estrellas y tú eres uno de los Pueblos de las Estrellas.'
  },
  'the tomb': {
      'text': 'Para convertirse en dioses, debes matar a Dios.'
  },
  'showdown the tyrant': {
      'text': 'Había un monstruo cuyo único temor era ser olvidado. Impulsado por ese terror que ardía en su corazón, el monstruo inscribió su rostro en el cielo con un aliento brillante. Todos los que lo vieron se enfermaron y murieron, dejando nada vivo que pudiera recordar el rostro del monstruo.'
  },
  'showdown white gigalion': {
      'text': 'Había una vez un cachorro de León Blanco cuyo vientre se abría con hambre. Se abría paso entre la manada reunida y siempre comía más de su parte. Resentida, la manada le mordisqueaba las caderas hasta que sangraban, pero el hambre del cachorro nunca cedía. El monstruo creció tanto que las mordeduras de sus semejantes ya no penetraban en su piel. Su resentimiento se convirtió en miedo, así que lo desterraron. El monstruo lloró por el amor de su manada, pero ellos apartaron sus melenas brillantes en unísono. Tal vez fue una vida de privación e insultos. Tal vez la intuición de su familia tenía razón. Los devoró antes de vagar en la oscuridad, condenado a nunca encontrar otro igual que él.'
  },
  'looming storm': {
      'text': 'Un clamor distante rompe el pacífico tamborileo de la lluvia sobre el metal, atrayendo la atención del ser ultraterrenal, el Caballero de la Tormenta, al mundo muy por debajo de su elevado dominio. El ser abstruso, oculto por un velo de vapor y vapor de agua que emana de las grietas de su ornamentada armadura, se había encariñado con el asentamiento remoto que se desarrollaba debajo. El potencial en crecimiento de los supervivientes como desafiantes finalmente logró despertar al caballero de su ensueño empapado por la lluvia. Con un pensamiento, la atmósfera alrededor del Caballero de la Tormenta se retuerce a su tumultuosa voluntad. Nubes de tormenta se extienden hasta el horizonte mientras fuertes vientos azotan las llanuras de rostro pétreo. Un gran espectáculo de relámpagos ilumina el castillo flotante del caballero, proyectando sombras en forma de espadas contra el telón de fondo de un mesociclón revuelto. Rayos caen sobre el asentamiento mientras se emite el decreto del caballero, dejando cicatrices en la tierra en su centro. Aquellos capaces de desafiar el inclemente clima se encuentran con un mensaje:<br />"Exijo metal, ya sea como ofrenda o como espada."'
  },
  'showdown storm knight lv.1-2': {
      'text': 'Una elegante figura blindada aparece fuera del asentamiento en un destello de relámpago. Su llegada está acompañada de una súbita lluvia. Los supervivientes se preparan contra la tormenta y luchan por contemplar la fuerza misteriosa. El caballero levanta lentamente su casco de muchas caras, tomando un momento para dirigir una mirada profunda y sincronizada, mientras el sonido de la lluvia golpeando el metal se eleva sobre el trueno distante.'
  },
  'ill-fated circumstance': {
      'text': 'Gritos desesperados a pleno pulmón despiertan al asentamiento durmiente de sueños bañados por la lluvia. Las camas son arrojadas y abandonadas cuando un sordo golpe, amortiguado por el bajo murmullo del trueno y la lluvia constante, silencia los chillidos estridentes de otro desafiante derrotado. Mirando hacia afuera, los supervivientes curiosos divisan un cadáver anormalmente extendido en las afueras lejanas del asentamiento. Las siluetas de los adoradores de la tormenta emergen de la oscuridad más allá de la luz de las linternas del asentamiento.'
  },
  'rise to the challenge': {
      'text': 'El tesoro de linternas tiembla bajo la implacable tormenta. Vientos aulladores y brillantes destellos de relámpagos silencian al asentamiento castigado por el clima mientras las formas de los supervivientes nominados desaparecen en la oscuridad sobre ellos. El desafortunado colectivo que queda atrás se acurruca junto en sus vulnerables aglomeraciones de piedra, madera y piel. Los supervivientes intrépidos miran hacia arriba y se preguntan qué curiosidades desconocidas y destinos incomprensibles esperan a sus compañeros. Sobre las llanuras empapadas por la lluvia, la violenta tormenta azota al grupo de caza remoto.'
  },
  'showdown storm knight lv.3': {
      'text': 'Una agotadora y turbulenta ascensión recompensa a los supervivientes maltrechos con una ruina flotante. La ciudadela desgastada, envuelta en nubes de tormenta que ondean, desconcierta al grupo empapado por la lluvia. Mientras los vientos cortantes fuerzan a los supervivientes hacia adelante, los rayos silenciosos de relámpagos se abren paso a través de la atmósfera revuelta que los rodea. El final del largo viaje de los supervivientes se acerca. Dicen que si alcanzas la cima de este castillo escondido dentro de la tormenta, encontrarás una vista sublime, oscurecida por la lluvia constante y los deslumbrantes destellos de luz. Atesorado por un culto ferviente de adoradores, el enigmático caballero se despierta solo para los desafiantes más fuertes. Su voluntad persistente por el combate lo sustenta.'
  },
  'showdown allison the twilight knight': {
      'text': 'La niña solo podía correr, perseguida por los sonidos voraces del hambre y el terror en la oscuridad. Se acercaba. Se hacía más fuerte. Justo cuando se encontraba en su boca, ella gritó. También gritó, pero de dolor. Después de un largo rato, la niña abrió los ojos y vio que la criatura se ahogaba en su propia sangre. El tenue tono de una linterna azul que se desvanecía en la oscuridad iluminaba a una figura esbelta con capucha que sostenía una hoja susurrante.'
  },
  'the order': {
      'text': 'Siguiendo los sonidos de una batalla cercana, los supervivientes se topan con un desconocido con capucha, desgarrando a una criatura errante con una hoja familiar. En poco tiempo, los sonidos de la muerte y las vibraciones guturales sumergen la oscuridad. Impresionados, el asentamiento se convence de enviar iniciados para aprender de este desconocido poderoso.'
  },
  'return of the order': {
      'text': 'Los supervivientes se sorprenden al ver que los Iniciados que se fueron anteriormente con el desconocido con capucha han regresado como Aprendices.'
  },
  'who watches the watcher': {
      'text': 'A medida que se adaptan a un mundo de oscuridad constante, los supervivientes reflexionan sobre sus encuentros pasados: el caballero, los aprendices, la Orden. ¿Qué más los habría preparado para enfrentar a una criatura tan aterradora? O tal vez nunca los habría amenazado si no hubieran ocurrido estos encuentros. La discordia divide al asentamiento.'
  },
  'showdown flower knight': {
      'text': 'En el corazón del bosque vive un delicado jardinero que aprecia la soledad por encima de todas las cosas. Lamentablemente, la peligrosa flora y fauna que cultiva son deseables para muchos. Para preservar el mundo oculto que creó para sí mismo, cambia sus herramientas por una hoja mortal sin dudarlo.'
  },
  'the forest wants what it wants': {
      'text': 'El silencio y la oscuridad son rotos por un zumbido brillante que susurra en sus huesos...'
  },
  'breakthrough': {
      'text': 'Por un breve instante, se encuentra una debilidad en las defensas aparentemente impenetrables del Caballero de la Flor.'
  },
  'sense memory': {
      'text': 'Corriendo hacia el asentamiento, los supervivientes que regresan intentan desesperadamente transmitir a los demás los poderosos recuerdos que residían en el aire mismo del claro. Incluso al cruzar el umbral del asentamiento, los recuerdos se desvanecen y las delicadas flores que sostienen en sus manos se marchitan.'
  },
  'necrotoxic mistletoe': {
      'text': 'Pequeñas plantas con bayas florecen por todo el asentamiento, y cúmulos de polen ligero danzan en la luz de las linternas mientras caen desde la atmósfera arriba.'
  },
  'spidisyphus': {
      'text': 'Los supervivientes hacen rodar una bola sin patas hacia el asentamiento.'
  },
  'puppets embalming': {
      'text': 'Cuando finalmente te liberan del tallo, toda tu sangre ha sido reemplazada.'
  },
  'silk surgery': {
      'text': 'Se ofrecen extrañas posibilidades a aquellos lo suficientemente valientes como para arriesgarse con su propia carne.'
  },
  'taken': {
      'text': 'El monstruo se venga del asentamiento...'
  },
  'showdown spidicules': {
      'text': 'Todos los niños buenos saben esconderse cuando escuchan los signos del fantasma que golpea. Un golpeteo afuera de tu cabaña, una risa como hojas secas que vuelan por el suelo, la sombra de un rostro familiar desapareciendo al doblar una esquina. Todos los niños malos que se atreven a salir cuando aparece serán atrapados, nunca más se les volverá a ver.'
  },
  'a gracious host': {
    'text': 'Los susurros del gusano te abruman, obligándote a consumirlo.' },
  'death reading': {
    'text': 'Una decodificación ritual de artefactos antiguos.'
  },
  'necropolis': {
    'text': 'Un salto frenético hacia lo desconocido.'
  },
  'showdown lion god': {
    'text': 'Había una vez un gobernante que sobrevivió a su reino. A medida que su cuerpo comenzaba a petrificarse, lo visitó un gusano que le ofreció poder a cambio de sus recuerdos. Ahora, una bestia sin mente, la plata mana de sus uñas y deforma sus huesos mientras se enfurece en las ruinas de su ciudad, siempre en agonía.'
  },
  'conquer your shadow': {
    'text': 'Empujado hasta tus límites y apenas consciente, tu sombra te enfrenta. Sonriendo desesperadamente, no puedes decir si esto es una ilusión o una rara oportunidad.'
  },
  'intimacy_stars': {
      'text': 'El misterio de la intimidad tiene lugar en el asentamiento.'
  },

 'intimacy_sun': {
    'text': 'El misterio de la intimidad tiene lugar en el asentamiento.'
  },
  'showdown lonely tree': {
    'text': 'Había una vez una mujer que amaba a un hombre triste con un agujero en su corazón. Cuanto más intentaba llenarlo, más drenada se sentía. Cuando ya no quedaba nada de ella, se quitó la vida bajo un viejo árbol y dejó que sus raíces bebieran su sangre. Poco después, el hombre triste desapareció del asentamiento. El árbol dio frutos en forma de lágrima.'
  },
  'showdown sunstalker': {
    'text': 'Hay un gran castillo en el cielo en forma de espada. En la cima se encuentra la Tormenta. Cansada de sus desafiantes ineficaces, la Tormenta buscó darles ventaja. La Tormenta arrastró al sol más antiguo hasta el cielo y lo encadenó en la cima de su castillo para darles luz a sus desafiantes. Ahora, cuando un desafiante es derrotado y la lluvia golpea el suelo de rostro pétreo, el Sol clama ayuda, encendiendo el cielo con destellos desesperados de luz.'
  },
  'sky fishing': {
    'text': 'Inflas el señuelo y lo lanzas suavemente al aire. Flota en la oscuridad, y el grupo espera nerviosamente. Después de un tiempo, sientes una picada.'
  },
  'white speaker': {
    'text': 'Una mujer grande vestida de manera extraña ofrece compartir una historia.'
  },
  'showdown gigalion': {
    'text': 'Había una vez un cachorro de León Blanco cuyo vientre se abría con hambre. Se abría paso entre la manada reunida y siempre comía más de su parte. Resentida, la manada le mordisqueaba las caderas hasta que sangraban, pero el hambre del cachorro nunca cedía. El monstruo creció tanto que las mordeduras de sus semejantes ya no penetraban en su piel. Su resentimiento se convirtió en miedo, así que lo desterraron. El monstruo lloró por el amor de su manada, pero ellos apartaron sus melenas brillantes en unísono. Tal vez fue una vida de privación e insultos. Tal vez la intuición de su familia tenía razón. Los devoró antes de vagar en la oscuridad, condenado a nunca encontrar otro igual que él.'
  },
  'fresh meat': {
    'text': 'Animados por la emoción de su última caza, el grupo de cazadores sigue el rastro del origen de ese horrible ruido.'
  },
  'show me your motivation': {
    'text': 'El caballero posa su mirada oculta en su atacante, curiosa de cómo pudieron pasar su defensa. Ofrece un silencioso desafío al superviviente. "¡Impresióname!"'
  },
  'showdown drifter knight': {
    'text': 'Había una vez una mujer nacida sin una linterna detrás de sus ojos. No podía cazar ni trabajar, pero sus compañeros supervivientes la veían como si ya estuviera muerta. Así que entrenó bajo el sol abrasador en cada momento despierto. Cuando ese sol se despertó y devoró a su gente, la mujer quedó ilesa. Ya estaba muerta para el mundo.'
  },
}

module.exports = {
 texts,
}
