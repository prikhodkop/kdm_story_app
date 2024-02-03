const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
'Abilities': {
   'label':'Habilidades',
   'description':'Habilidades y técnicas aprendidas por los sobrevivientes, generalmente a través de eventos de la historia, y registradas en la Hoja de Registro del Sobreviviente.',
},

'Absorb': {
   'label':'Absorber',
   'description':'El Instinto del Vigía. Descrito en el evento de la historia del enfrentamiento del Vigía.',
},

'Accessory': {
   'label':'Accesorio',
   'description':'Una regla especial de equipo. El equipo accesorio se puede llevar además de la armadura en una ubicación de impacto. Cada accesorio especifica la ubicación de impacto que cubre.',
},

'Accuracy (Attribute)': {
   'label':'Precisión (Atributo)',
   'description':'Representa cambios permanentes en los lanzamientos de ataque. El atributo positivo se suma al resultado del dado, mientras que el atributo negativo se resta del resultado del dado.',
},

'Accuracy (Weapon/Attack Profile)': {
   'label':'Precisión (Perfil de Arma/Ataque)',
   'description':'El número que cada resultado de lanzamiento de ataque debe igualar o superar para considerarse un golpe. Se encuentra en los perfiles de ataque del monstruo y el equipo de armas.',
},

'Act': {
   'label':'Acto',
   'description':'Parte del turno de los sobrevivientes en la cual un sobreviviente individual obtiene +1{image@images/icons/movement} y +1{image@images/icons/activation}. Cada sobreviviente debe completar su acto antes de que otro pueda comenzar el suyo, y todos los {image@images/icons/movement} y {image@images/icons/activation} no utilizados se pierden cuando un sobreviviente finaliza su acto.',
},

'Action': {
   'label':'Acción',
   'description':'La mayoría de las cosas que un sobreviviente o monstruo puede hacer durante la Fase de Enfrentamiento, como moverse y atacar, son acciones. Las cartas de monstruos están compuestas por múltiples acciones. Por ejemplo, "Seleccionar objetivo" es una acción y una carta de trampa de monstruo tiene acciones enumeradas en ella. Con excepción de las acciones de supervivencia que se realizan en momentos específicos, un sobreviviente no puede realizar una acción mientras se está realizando otra acción (de superviviente, de supervivencia o de monstruo).',
},

'Activation': {
   'label':'Activación',
   'description':'La activación ({image@images/icons/activation}) se puede gastar para atacar, activar ciertos equipos y interactuar con el terreno. Los sobrevivientes ganan un {image@images/icons/activation} durante el acto de ese sobreviviente.',
},

'Adjacent (Miniature)': {
   'label':'Adyacente (Miniatura)',
   'description':'Una miniatura está adyacente a otra cuando ocupa un espacio a una casilla en una dirección cardinal (no diagonal) desde una casilla ocupada por la otra miniatura.',
},

'Affinity (Completed)': {
   'label':'Afinidad (Completada)',
   'description':'Algunas cartas de equipo tienen medios cuadros rojos, azules o verdes en el borde de la carta. Si un medio cuadro está adyacente a un medio cuadro del mismo color en otra carta de equipo, el cuadro completo que forman es una afinidad.',
},

'Affinity Bonus': {
   'label':'Bono de Afinidad',
   'description':'Un tipo de regla especial de equipo. Tener el número indicado de afinidades de colores activará el efecto. Cada bonificación de afinidad se aplica solo una vez, independientemente de cuántas afinidades adicionales tenga un sobreviviente.',
},

'After Damage': {
   'label':'Después de Daño',
   'description':'Un desencadenante de ataque que se encuentra en algunos perfiles de ataque de monstruos AI. Si hay golpes exitosos en el ataque, resuelve todo el daño de todos los golpes en este ataque (lanza dados de ubicación de impacto, aplica daño a la ubicación de impacto), luego aplica los efectos de ataque de este desencadenante. Si no hay daño infligido en el ataque, no apliques este efecto.',
},

'After Hit': {
   'label':'Después de Golpear',
   'description':'Un desencadenante de ataque que se encuentra en algunos perfiles de ataque de monstruos AI. Si hay golpes exitosos en el ataque antes de lanzar los dados de ubicación de impacto, aplica los efectos de ataque de este desencadenante.',
},

'Aftermath': {
   'label':'Secuelas',
   'description':'El final de una Fase de Enfrentamiento. Contiene resultados diferentes basados en el éxito o fracaso de los sobrevivientes.',
},

'AI Card': {
   'label':'Carta de IA',
   'description':'Las cartas AI están compuestas por acciones, flujos y alertas, algunas cartas también tienen casillas de heridas persistentes y/o definiciones. Hay cuatro tipos de cartas AI: Básicas (B), Avanzadas (A), Legendarias (L) y Especiales (S).',
},

'Alerts': {
   'label':'Alertas',
   'description':'Las acciones que siguen a una alerta contienen información condicional importante que debe tenerse en cuenta para determinar si se realiza la acción. Continúa realizando cualquier otra acción en la carta AI a menos que se indique lo contrario. No se puede gastar supervivencia durante una alerta.',
},
 'All Survivors': {
   'label':'Todos los Sobrevivientes',
   'description':'Un efecto durante el enfrentamiento que se refiere a todos los sobrevivientes se aplica a todos los sobrevivientes que se encuentran actualmente en el tablero del enfrentamiento. A menos que se indique explícitamente lo contrario, los sobrevivientes que se retiren del tablero del enfrentamiento no se ven afectados.',
},

'Ambush (Monster)': {
   'label':'Emboscada (Monstruo)',
   'description':'Si el monstruo se mueve al espacio del tablero de caza de los sobrevivientes, embosca a los sobrevivientes. Finaliza cualquier evento de caza actual y comienza el enfrentamiento de inmediato. Los sobrevivientes omiten su primer turno. En la mayoría de los casos, esto significa que el monstruo tomará dos turnos seguidos.',
},

'Ambush (Survivors)': {
   'label':'Emboscada (Sobrevivientes)',
   'description':'Algunos eventos de caza permiten a los sobrevivientes emboscar al monstruo. Si lo hacen, los sobrevivientes pueden ir primero en el enfrentamiento. No sigas las reglas de configuración en el evento de historia del monstruo. En su lugar, coloca el terreno de enfrentamiento indicado, el monstruo y los sobrevivientes en el tablero de enfrentamiento según lo decidan los jugadores (todavía se deben seguir las reglas de configuración en las cartas de terreno).',
},

'Ammo - Bow': {
   'label':'Munición - Arco',
   'description':'Una regla especial de equipo. Debes tener un arco en tu cuadrícula de equipo para activar esta carta. Las municiones tienen el alcance de un arco en tu cuadrícula de equipo. Las municiones no heredan las cualidades de los arcos desde los que se disparan (engorrosos, malditos, etc.). Herir con una munición no hace que un sobreviviente sea elegible para obtener competencia en arco.',
},

'Ammunition': {
   'label':'Munición',
   'description':'Una palabra clave de equipo. Este equipo es munición para otro equipo de arma.',
},

'Archive': {
   'label':'Archivo',
   'description':'Retira esta carta del juego y devuélvela a la caja del juego. A menos que se registre en el depósito del asentamiento o en la hoja de registro del sobreviviente, cualquier carta archivada se pierde permanentemente.',
},

'Armor': {
   'label':'Armadura',
   'description':'El equipo con esta palabra clave es armadura. Protege al sobreviviente de las heridas. Cada pieza de armadura tendrá el símbolo de la ubicación de impacto para la ubicación de impacto en la que se puede usar. Cada ubicación de impacto solo puede llevar una pieza de armadura.',
},

'Armor Points': {
   'label':'Puntos de Armadura',
   'description':'Registrado en la hoja de registro del sobreviviente. Determinado por el equipo de armadura en la cuadrícula de equipo del sobreviviente, así como por otros efectos y eventos. Cada punto anula un punto de daño a la ubicación de impacto. Los puntos de armadura disminuyen en 1 por cada daño que anulan.',
},

'Armor Set': {
   'label':'Conjunto de Armadura',
   'description':'Cada conjunto de armadura está compuesto por toda la armadura de una sola ubicación del asentamiento con la palabra clave <b style="color:#990 !important;">"set"</b>. Por ejemplo, mientras un sobreviviente lleva el Casco del León Blanco, Guanteletes del León Blanco, Abrigo del León Blanco, Falda del León Blanco y Botas del León Blanco, ha completado el conjunto de armadura del León Blanco.',
},

'Armor Set Bonus': {
   'label':'Bono de Conjunto de Armadura',
   'description':'Un sobreviviente que lleva un conjunto de armadura completo obtiene los beneficios del bono de conjunto de armadura que se indica en la carta correspondiente del conjunto de armadura.',
},

'Arms': {
   'label':'Brazos',
   'description':'Ubicación de impacto de un sobreviviente. \nEl daño a los brazos más allá del nivel de herida grave resulta en un lanzamiento en la sección de Brazos de la tabla de Lesiones Graves.',
},

'Arrival': {
   'label':'Llegada',
   'description':'El comienzo del enfrentamiento. Cualquier sobreviviente que tenga efectos de "Al llegar" los aplica en el orden que elijan.',
},

'Arrow': {
   'label':'Flecha',
   'description':'Una palabra clave de equipo. Esta carta de equipo es una flecha. Aunque las flechas requieren un arco en tu cuadrícula de equipo para ser activadas, las flechas y los arcos son armas distintas. Las flechas no heredan las cualidades de los arcos desde los que se disparan (engorrosos, malditos, etc.), excepto el alcance. Herir con una flecha no hace que un sobreviviente sea elegible para obtener competencia en arco.',
},

'Attack': {
   'label':'Ataque',
   'description':'El proceso de hacer un lanzamiento de ataque y resolver el daño, las heridas u otros efectos.',
},

'Attack Effects': {
   'label':'Efectos de Ataque',
   'description':'Los efectos de ataque son reglas contenidas en un cuadro debajo del perfil de ataque en algunas cartas AI, y se aplican cuando se produce el desencadenante. Estos efectos se aplican solo una vez, incluso si el objetivo es golpeado o dañado varias veces por este ataque.',
},

'Attack Profile': {
   'label':'Perfil de Ataque',
   'description':'Parte de las cartas AI de monstruos y las acciones básicas. Enumera la velocidad, precisión, daño y cualquier desencadenante de un ataque de monstruo.',
},

'Attack Roll': {
   'label':'Lanzamiento de Ataque',
   'description':'El lanzamiento de dados que representa un intento de golpear a un objetivo. Un "Farol 10" siempre resultará en un golpe.',
},

'Attribute': {
   'label':'Atributo',
   'description':'Un aspecto de un sobreviviente o monstruo descrito por un valor numérico.',
},

'Attribute Modifier Token': {
   'label':'Ficha de Modificador de Atributo',
   'description':'Los tokens de modificador de atributo se utilizan para indicar cambios temporales en los atributos. Los tokens de modificador de atributo son de doble cara para representar ganancias y pérdidas para ese atributo, y se combinan con los totales permanentes de atributos para determinar el nivel actual de cada atributo. Todos los tokens se eliminan al final de cada enfrentamiento.',
},

'Automatic Hit(s)': {
   'label':'Golpe(s) Automático(s)',
   'description':'Cuando un sobreviviente con algún golpe automático realiza un lanzamiento de ataque, omite lanzar esa cantidad de dados y golpea exitosamente al monstruo esa cantidad de veces. Cualquier lanzamiento restante de ese ataque se realiza normalmente. A pesar de la cantidad de golpes automáticos que un sobreviviente pueda tener, no pueden golpear a un monstruo más veces que la velocidad total de su ataque. Los golpes automáticos no son Golpes Perfectos. No es necesario lanzar otro d10 para comprobarlo, simplemente son golpes.',
},

'Away (Movement)': {
   'label':'Alejarse (Movimiento)',
   'description':'Un movimiento que coloca la mayor cantidad posible de espacios entre dos puntos en el tablero del enfrentamiento, como un monstruo, sobreviviente, terreno o borde del tablero.',
},

'Axe': {
   'label':'Hacha',
   'description':'El equipo con esta palabra clave es un arma de hacha. Los sobrevivientes pueden ganar niveles de competencia en el uso del hacha con esta arma.',
},

'Back': {
   'label':'Espalda',
   'description':'La dirección opuesta a la orientación del monstruo.',
},

'Balm': {
   'label':'Bálsamo',
   'description':'Una palabra clave de equipo. Los objetos de bálsamo funcionan al frotarlos en la piel de un sobreviviente.',
},

'Bash': {
   'label':'Golpear',
   'description':'Hace que los sobrevivientes caigan al suelo.',
},

'Basic Action': {
   'label':'Acción Básica',
   'description':'La acción básica de un monstruo se detalla en su carta de Acción Básica. Una acción básica consiste en una acción de objetivo y una acción de ataque con un perfil de ataque. Los monstruos realizarán una acción básica en algunas cartas AI en algunas reacciones, o si la baraja de AI y el descarte están vacíos. Realizar una acción básica no cuenta como la extracción de una carta AI.',
},

'Basic Action / Reference Card': {
   'label':'Carta de Acción Básica / Referencia',
   'description':'Las cartas de Acción Básica/Referencia de doble cara contienen la acción básica de un monstruo en un lado y una descripción general de las características del monstruo en el otro lado.',
},

'Basic Hunt Event': {
   'label':'Evento de Caza Básico',
   'description':'100 eventos que los sobrevivientes pueden encontrar en la oscuridad. Se encuentran en la sección de Eventos de Caza Básicos del reglamento.',
},

'Basic Resources': {
   'label':'Recursos Básicos',
   'description':'Recursos genéricos que se pueden obtener de la mayoría de los monstruos cazables y muchos eventos.',
},

'Before Damage': {
   'label':'Antes del Daño',
   'description':'Un desencadenante que se encuentra en algunos perfiles de ataque de monstruos. Aplica el efecto de ataque de este desencadenante después de que se lancen los golpes y los dados de ubicación de impacto, pero antes de que se aplique el daño a las ubicaciones de impacto.',
},

'Bleed X': {
   'label':'Sangrar X',
   'description':'El objetivo obtiene X fichas de sangrado.',
},

'Bleeding Token': {
   'label':'Ficha de Sangrado',
   'description':'Los sobrevivientes pueden obtener fichas de sangrado de lesiones graves, ataques de monstruos y algunos eventos. Si un sobreviviente tiene 5 o más fichas de sangrado, muere. Todas las fichas se eliminan al final de cada enfrentamiento.',
},

'Blind Spot': {
   'label':'Punto Ciego',
   'description':'Por lo general, los espacios directamente detrás del monstruo. Los sobrevivientes que atacan desde el punto ciego obtienen +1 de precisión.',
},

'Block X': {
   'label':'Bloquear X',
   'description':'Una regla especial de equipo. Gasta {image@images/icons/activation} para ignorar X golpes la próxima vez que te ataquen. Dura hasta tu próximo acto. Un sobreviviente no puede usar el bloqueo más de una vez por ataque. Los efectos que otorgan bloqueo no son acumulativos, solo se aplica el más grande.',
},

 'Body': {
   'label':'Cuerpo',
   'description':'Ubicación de impacto de un sobreviviente. Esta es la única ubicación de impacto que aparece dos veces en los dados de ubicación de impacto. \nEl daño al cuerpo más allá del nivel de herida grave resulta en un lanzamiento en la sección de Cuerpo de la tabla de Lesiones Graves.',
},

'Body Blow': {
   'label':'Golpe al Cuerpo',
   'description':'Un ataque que siempre golpea la ubicación del cuerpo de un sobreviviente. No se lanzan dados de ubicación de impacto para este ataque.',
},

'Bone (Gear)': {
   'label':'Hueso (Equipo)',
   'description':'Una palabra clave de equipo. El hueso es uno de los materiales principales utilizados para fabricar este equipo.',
},

'Bone (Resource)': {
   'label':'Hueso (Recurso)',
   'description':'Una palabra clave de recurso común.',
},

'Bow': {
   'label':'Arco',
   'description':'El equipo con esta palabra clave es un arma de arco. Los sobrevivientes pueden ganar niveles de competencia en el uso del arco con esta arma.',
},

'Brain': {
   'label':'Cerebro',
   'description':'El Cerebro es una ubicación de sobreviviente diferente de las ubicaciones de impacto y representa la salud mental de un sobreviviente. Dado que la mente humana es frágil, solo hay un nivel de herida para el Cerebro (indicado por el cuadro sin rellenar con líneas ligeras). El Cerebro solo se daña por daño cerebral. \nCualquier daño más allá del nivel de herida leve resulta en un lanzamiento en la tabla de Trauma Cerebral.',
},

'Brain Damage': {
   'label':'Daño Cerebral',
   'description':'El daño cerebral solo afecta a la ubicación del Cerebro.',
},

'Brain Trauma Table': {
   'label':'Tabla de Trauma Cerebral',
   'description':'Contiene posibles resultados del daño excesivo a la ubicación del Cerebro.',
},

'Build (Location)': {
   'label':'Construir (Ubicación)',
   'description':'Cuando se construye una nueva ubicación, coloca esa ubicación del asentamiento en el área de juego y añádela a la hoja de registro del asentamiento. Esta es una adición permanente a tu asentamiento.',
},

'Calcification': {
   'label':'Calcificación',
   'description':'Una vez que el equipo se calcifica, gíralo hacia el lado calcificado. Después de la calcificación, no se puede utilizar el lado normal de ese equipo.',
},

'Canceled Attack': {
   'label':'Ataque Cancelado',
   'description':'Un ataque cancelado termina de inmediato. Descarta todos las ubicaciones de impacto no resueltas. No realices ninguna acción, regla especial, efectos críticos o reacciones en estas cartas.',
},

'Charge': {
   'label':'Carga',
   'description':'Una regla especial de equipo. Los sobrevivientes gastan {image@images/icons/movement} y {image@images/icons/activation} para mover el máximo de espacios disponibles en línea recta en una dirección. Al final del movimiento, si están dentro del alcance, realizan un ataque usando un arma cuerpo a cuerpo, sumando el número de espacios movidos de esta manera a su fuerza para el ataque. La Carga no afecta a otros ataques en este turno.',
},

'Closest Survivor': {
   'label':'Sobreviviente más Cercano',
   'description':'El sobreviviente más cercano en número de espacios cardinales al monstruo.',
},

'Closest Threat': {
   'label':'Amenaza más Cercana',
   'description':'La amenaza más cercana en número de espacios cardinales al monstruo.',
},

'Club': {
   'label':'Garrote',
   'description':'El equipo con esta palabra clave es un arma de garrote. Los sobrevivientes pueden ganar niveles de competencia en el uso de armas de garrote con esta arma.',
},

'Conflict (Rule of Death)': {
   'label':'Conflicto (Regla de la Muerte)',
   'description':'Como en cualquier juego con muchas piezas en movimiento y reglas, puede surgir ocasionalmente conflicto con respecto a la interpretación de reglas, decisiones de grupo o excepciones.<br\>&emsp;En primer lugar, este juego está diseñado para proporcionar un tiempo divertido con amigos. Utiliza esto como el principio rector para resolver cualquier problema que surja. Además, aquí tienes algunas pautas técnicas para resolver conflictos.<br/>&emsp;Cuando surja conflicto debido a contradicciones en las reglas, aplica reglas específicas que se encuentren en cartas (IA, equipo, etc.) y eventos de la historia, antes de aplicar reglas que se encuentren en las secciones de reglas básicas del reglamento.<br/>&emsp;Si surgen conflictos que ralentizan o detienen completamente una sesión de juego, utiliza la <b style="color:#990 !important;">Regla de la Muerte: siempre decide en contra de los sobrevivientes</b>. Kingdom Death es un lugar peligroso y el futuro de los sobrevivientes es sombrío. Asegúrate de que cualquier ambigüedad se resuelva en contra de los sobrevivientes.<br/>&emsp;En su núcleo, <i>Monster</i> es una experiencia cooperativa. Sé respetuoso con los demás mientras navegas juntos por las decisiones del juego.',
},

'Collides': {
   'label':'Colisiona',
   'description':'Si un monstruo se mueve a través de un espacio ocupado por un sobreviviente, chocan y el sobreviviente sufre una colisión. Si un monstruo termina su movimiento en un sobreviviente, chocan. El sobreviviente sufre una colisión y retroceso de 5. Si un sobreviviente es empujado hacia terreno intransitable, chocan con él y el sobreviviente sufre una colisión. Si un sobreviviente sufre un retroceso contra otro sobreviviente, completa el movimiento de retroceso normalmente. Ambos sobrevivientes sufren una colisión al final del retroceso. Si los sobrevivientes ocuparían el mismo espacio, en su lugar coloca al sobreviviente empujado en el espacio desocupado más cercano.',
},

'Collision': {
   'label':'Colisión',
   'description':'Cuando un sobreviviente sufre una colisión. queda derribado.',
},

'Concentrate': {
   'label':'Concentrarse',
   'description':'Necesitas concentrar tu mente para realizar hazañas extraordinarias. Al comienzo de tu acto, declara tu intención de Concentrarte. Finaliza inmediatamente tu acto e intenta concentrarte hasta el inicio de tu próximo acto. Para concentrarte con éxito, no puedes: realizar ningún tipo de acción, moverte por ningún motivo, sufrir caídas, sufrir ningún tipo de daño, obtener fichas de sangrado o fichas de atributo negativas.',
},

 'Consumable': {
   'label':'Consumible',
   'description':'Una palabra clave. Esto puede ser consumido por los sobrevivientes.',
},

'Consume': {
   'label':'Consumir',
   'description':'Una regla especial. Este equipo o recursos consumibles pueden ser ingeridos por los sobrevivientes para obtener un resultado especificado. Algunos se archivan después de su uso.',
},

'Courage': {
   'label':'Coraje',
   'description':'Atributo de un sobreviviente que se encuentra en la hoja de registro del sobreviviente. La valentía es la valentía potencialmente imprudente de un sobreviviente. Alcanzar un nivel de valentía de 3 desencadenará el '+event_img+'<b>Evento de la Historia Audaz</b>, mientras que alcanzar un nivel de 9 desencadenará el '+event_img+'<b>Evento de la Historia Ver la Verdad</b>.',
},

'Critical Wound': {
   'label':'Herida Crítica',
   'description':'Las heridas críticas son golpes afortunados que siempre hieren a un monstruo, incluso si el intento de herida no supera la resistencia del monstruo. Una herida crítica ocurre cuando el resultado de la tirada de herida es un 10 en una ubicación de impacto con un efecto de herida crítica. El atributo Suerte modifica la tirada necesaria para una herida crítica.',
},

'Critical Wound Effect': {
   'label':'Efecto de Herida Crítica',
   'description':'Los efectos de herida crítica en las cartas de IA de monstruos están representados por el símbolo de herida crítica, seguido de reglas que especifican lo que sucede cuando un monstruo es herido críticamente en esa ubicación. Los efectos de herida crítica no son reacciones. En una herida crítica, cancela todas las reacciones en esa carta de ubicación de impacto.',
},

'Cumbersome': {
   'label':'Engorroso',
   'description':'Una regla especial de equipo. Los sobrevivientes deben gastar tanto {image@images/icons/movement} como {image@images/icons/activation} para activar equipo que sea Cumbersome. Durante el acto de un sobreviviente, es posible que puedan usar el equipo Cumbersome dos veces al usar un impulso en conjunto con su movimiento regular, luego usar un sprint con su {image@images/icons/activation} regular. Un sobreviviente no puede gastar 2 de supervivencia para usar equipo Cumbersome fuera de su acto.',
},

'Cursed': {
   'label':'Maldito',
   'description':'Una regla especial de equipo. Este equipo no se puede quitar del tablero de equipo por ningún motivo. Si el sobreviviente muere, archiva este equipo.',
},

'(X)d10': {
   'label':'(X)d10',
   'description':'Un número (X) de dados de diez caras. Los dados incluidos presentan una linterna en la cara "10".',
},

'd5': {
   'label':'d5',
   'description':'Tira 1d10, divide el resultado por dos y redondea hacia arriba al número entero más cercano.',
},

'd100': {
   'label':'d100',
   'description':'Un dado de cien caras. Esto se logra usando 2d10, con un dado designado para representar el dígito de las "decenas" y el otro para representar el dígito de las "unidades". Ten en cuenta que un resultado que muestre 2 linternas (resultado de 10 en cada uno) indica un resultado de 100.',
},

'Dagger': {
   'label':'Daga',
   'description':'El equipo con esta palabra clave es un arma de daga. Los sobrevivientes pueden ganar niveles de competencia en el uso de armas de daga con esta arma.',
},

'Damage (Attack Profile)': {
   'label':'Daño (Perfil de Ataque)',
   'description':'La cantidad de daño infligido por cada impacto en un ataque de un monstruo. Tira ubicaciones de impacto separadas para cada impacto.',
},

'Damage (Attribute)': {
   'label':'Daño (Atributo)',
   'description':'El daño se suma al daño especificado en un perfil de ataque para calcular el daño total de un ataque.',
},

'Damage (Condition)': {
   'label':'Daño (Condición)',
   'description':'Un impacto daña a un sobreviviente si elimina puntos de armadura o causa una lesión. Los impactos que son esquivados, bloqueados o ignorados no causan daño.',
},

'Dash': {
   'label':'Correr',
   'description':'Una acción de supervivencia. Cuando la oportunidad lo permita, un sobreviviente puede gastar 1 de supervivencia para correr. Obtienen +1{image@images/icons/movement}, que debe gastarse de inmediato. Cada sobreviviente solo puede correr una vez por ronda, y solo después de que el asentamiento haya innovado la innovación Pintura.',
},

'Deadly': {
   'label':'Letal',
   'description':'Una regla especial de equipo. Obtén +1 Suerte al atacar con esta arma. Esto aumenta las probabilidades de infligir heridas críticas.',
},

'Deaf': {
   'label':'Sordo',
   'description':'El sobreviviente no puede escuchar ni verse afectado por efectos audibles como alentar y otros.',
},

'Deathblow': {
   'label':'Golpe Mortal',
   'description':'Si matas al monstruo mientras infliges daño en esa ubicación, obtienes el bono que se indica en la carta.',
},

'Death (Monster)': {
   'label':'Muerte (Monstruo)',
   'description':'Un monstruo es derrotado cuando es herido y no hay cartas de IA en la pila de IA o en la pila de descarte de IA para mover a la pila de heridas.',
},

'Death (Survivor)': {
   'label':'Muerte (Sobreviviente)',
   'description':'Un sobreviviente puede morir de diversas maneras. Retira su miniatura del tablero. Ya no pueden participar en la caza ni en el enfrentamiento. Devuelve su equipo al depósito del asentamiento y mueve sus recursos a otro sobreviviente. Si todos los sobrevivientes mueren durante el enfrentamiento, todo su equipo regresa al asentamiento y todos los recursos que no estén en el depósito del asentamiento se pierden.',
},

'Death Count': {
   'label':'Recuento de Muertes',
   'description':'Parte de la hoja de registro del asentamiento. Durante la fase de asentamiento, si algún sobreviviente pereció durante la fase de Caza o Enfrentamiento anterior, actualiza el recuento de muertes. Si los sobrevivientes fallecen durante la fase de Asentamiento, actualiza el recuento de muertes de inmediato. La primera vez que se actualiza el recuento de muertes de un asentamiento, activa el '+event_img+'<b>Principio: Muerte</b>.',
},

'Death Die': {
   'label':'Dado de la Muerte',
   'description':'Un dado especial de diez caras de color naranja. El Dado de la Muerte reemplaza la ficha de Controlador del Monstruo. El jugador del sobreviviente con el Dado de la Muerte controla al monstruo. Al comienzo del enfrentamiento, el jugador con la Linterna Final comienza con el Dado de la Muerte en Horripilación. Al comienzo de cada ronda posterior, pasa el Dado de la Muerte a la carta Horripilación de la izquierda. Las emanaciones finales del Vigía continúan saltando entre las linternas de los sobrevivientes que no pueden actuar, incluyendo a los sobrevivientes muertos o ausentes. En lugar de los beneficios en la ficha de Controlador del Monstruo, puedes usar Descubrimientos de Pulso basados en el Nivel de Investigación de la Linterna de tu asentamiento. Una vez por ronda, el sobreviviente con el Dado de la Muerte puede usar uno de los Descubrimientos de Pulso desbloqueados del asentamiento. Después de tirar el Dado de la Muerte, devuélvelo a su carta de Horripilación actual. Si la Linterna Final se pierde o se archiva, se pierde para siempre. Los sobrevivientes no pueden usar el Dado de la Muerte. Vuelve a usar la ficha de Controlador del Monstruo.',
},

'Defeat': {
   'label':'Derrota',
   'description':'Cuando los sobrevivientes son derrotados por un monstruo, sigue las reglas de derrota en la sección Consecuencias del evento de la historia del monstruo.',
},

'Deflect X': {
   'label':'Desviar X',
   'description':'Una regla especial de equipo. Cuando te Deflectes X, obtén (o pierde) fichas de deflexión hasta que tengas X de ellas. Cuando te golpeen y tengas fichas de deflexión, ignoras ese impacto y pierdes una ficha de deflexión. Cuando te Deflectes X, pierdes los beneficios de <b>Bloqueo</b>.',
},

'Depart (As in, "When you depart")': {
   'label':'Partida (Cuando partes)',
   'description':'Estas reglas se aplican a los sobrevivientes que parten al final de la Fase de Asentamiento.',
},

'Departing Survivors': {
   'label':'Sobrevivientes que Parten',
   'description':'Los sobrevivientes nominados para participar en la próxima caza y enfrentamiento.',
},

'Destroy Armor': {
   'label':'Destruir Armadura',
   'description':'Un efecto de ataque que reduce los puntos de armadura de una ubicación de impacto de un sobreviviente antes de aplicar el daño.',
},

'Destructible': {
   'label':'Destructible',
   'description':'Una regla especial de terreno. Cuando un sobreviviente colisiona con un terreno destructible, detén su movimiento y archiva el terreno. El sobreviviente sufre 1 punto de daño en una ubicación de impacto al azar. Cuando un monstruo colisiona con un terreno destructible, archiva el terreno.',
},

'Devastating X': {
   'label':'Devastador X',
   'description':'Una regla especial de equipo. Cuando un arma devastadora hiere a un monstruo, inflige X heridas adicionales.',
},

'Discard': {
   'label':'Descartar',
   'description':'Coloca la carta en la pila de descarte correspondiente. Ya no está en juego.',
},

'Disdain': {
   'label':'Desprecio',
   'description':'El instinto del Fénix. Descrito en el '+event_img+'<b>Encuentro: Fénix</b>.',
},

'Disorder': {
   'label':'Trastorno',
   'description':'Una alteración mental. Los trastornos se encuentran en cartas de trastornos. Cuando se adquiere un trastorno, registra sus reglas en la hoja de registro del superviviente y devuelve la carta a la caja. Los supervivientes pueden tener hasta 3 trastornos. Los trastornos adicionales adquiridos deben reemplazar un trastorno de tu elección. Si un superviviente adquiere un trastorno que ya tiene, no sucede nada.',
},

'Dodge': {
   'label':'Esquivar',
   'description':'Una acción de supervivencia. Cuando un superviviente es golpeado, después de lanzar los dados de ubicación de impacto pero antes del daño, puede gastar 1 punto de supervivencia para esquivar, cancelando un impacto. El impacto esquivado se convierte en un fallo en el ataque y no causa daño. Cualquier impacto adicional no esquivado se resuelve normalmente. La esquiva es la única acción de supervivencia que los supervivientes derribados pueden realizar. Cada superviviente solo puede esquivar una vez por ronda.',
},

'Doomed': {
   'label':'Condenado',
   'description':'Mientras un superviviente está condenado, no puede realizar ninguna acción ni gastar supervivencia. Si un superviviente es condenado por la IA de un monstruo o la carta de Ubicación de Impacto, permanecerá condenado hasta que se realicen todas las acciones de la carta y se resuelva la carta.',
},

 'Draw AI': {
   'label':'Robar IA',
   'description':'El controlador del monstruo roba la carta superior del mazo de IA del monstruo y la juega. Si el mazo de IA está vacío, baraja la pila de descarte en él y roba la carta superior. Si el mazo de IA y la pila de descarte están vacíos, el monstruo realiza su Acción Básica.',
},
 'Duplicate Gear': {
   'label':'Equipo Duplicado',
   'description':'Excepto en armas, un superviviente no puede tener múltiples copias del mismo equipo en su cuadrícula de equipo. Un superviviente obtiene los beneficios de las reglas especiales de un arma solo una vez, sin importar cuántas copias tengan. Las copias adicionales de armas aún contribuyen a las afinidades.',
},
 'Duration': {
   'label':'Duración',
   'description':'Las cartas de duración se sacan dos veces.<br/>&emsp;La primera vez que se saca una carta de duración, realiza cualquier acción "cuando se saca boca abajo". Luego, en lugar de descartarla, coloca la carta de duración boca arriba en la parte superior del mazo de IA.<br/>&emsp;La próxima vez que un monstruo saque una carta de IA, saca la carta de duración por segunda vez. Realiza cualquier acción "cuando se saca boca arriba", luego descarta la carta después de resolverla.<br/>&emsp;Algunas cartas de duración tienen efectos persistentes mientras están boca arriba en la parte superior del mazo de IA.',
},
 'Early Iron': {
   'label':'Hierro Temprano',
   'description':'Una regla especial de equipo. Cuando alguno de tus resultados en tiradas de ataque es un 1, cancela tu ataque.',
},
 'Encourage': {
   'label':'Animar',
   'description':'Una acción de supervivencia. Un superviviente en pie puede gastar 1 punto de supervivencia en cualquier momento para animar a un superviviente derribado, permitiéndole ponerse en pie. Los supervivientes sordos no pueden ser animados. Cada superviviente solo puede animar una vez por ronda, y solo si el asentamiento tiene la innovación del Lenguaje.',
},
 'Endeavors': {
   'label':'Esfuerzos',
   'description':'Cada superviviente que regrese contribuye +1{imagen@images/icons/endeavors}<i>(esfuerzo)</i> al asentamiento. Los supervivientes pueden gastar {imagen@images/icons/endeavors} para innovar, construir nuevas ubicaciones en el asentamiento o realizar acciones únicas. Para gastar un {imagen@images/icons/endeavors}, nomina a un superviviente. Reduce el total de {imagen@images/icons/endeavors} del asentamiento en 1 y sigue las reglas de la acción en la que se gastó el {imagen@images/icons/endeavors}. A menos que se indique lo contrario, los efectos de la acción se aplican solo al superviviente nominado.',
},
 'Endure': {
   'label':'Aguantar',
   'description':'Puedes gastar 7 puntos de supervivencia menos tu Suerte para ignorar una lesión grave antes de tirar un resultado. Tu Suerte se determina por la suma de tu atributo de suerte permanente, fichas de modificador de suerte y cualquier otro equipo o habilidades que afecten tu suerte en el momento en que endureces.',
},
 'Evasion (Attribute)': {
   'label':'Evasión (Atributo)',
   'description':'Cuando un monstruo o superviviente con evasión es el objetivo de un ataque, aumenta la precisión en el perfil de ataque en la cantidad de evasión que posee el objetivo. La evasión puede ser un número negativo, en cuyo caso se resta de la precisión del perfil de ataque. Independientemente de la evasión, un 10 en la tirada de ataque siempre es un Impacto Perfecto y un resultado de 1 en la tirada de ataque siempre es fallido.',
},
 'Event Damage': {
   'label':'Daño por Evento',
   'description':'Algunos daños se producen debido a eventos. Por lo general, este daño no se puede esquivar ni bloquear. El daño por evento no es letal y reducirá los puntos de armadura y causará lesiones leves y graves, pero no causará lesiones graves ni trauma cerebral.',
},
 'Event Revealer': {
   'label':'Revelador de Evento',
   'description':'El revelador de eventos revela un evento de caza, lo lee en voz alta y sigue las reglas de la carta, tomando todas las decisiones en ese evento de caza.',
},
 'Facing': {
   'label':'Orientación',
   'description':'Un monstruo está frente a todos los espacios del tablero que están frente a la miniatura.',
},
 'Failure (Reaction)': {
   'label':'Fracaso (Reacción)',
   'description':'Una reacción del monstruo. Realizada en respuesta a intentos fallidos de herir en ciertas ubicaciones de impacto de monstruos.',
},
 'Feather (Gear)': {
   'label':'Pluma (Equipo)',
   'description':'Una palabra clave de equipo. Este equipo está substancialmente hecho de plumas.',
},
 'Field of View': {
   'label':'Campo de Visión',
   'description':'Un superviviente está en el campo de visión de un monstruo a menos que estén en el punto ciego del monstruo o la línea de visión del monstruo esté bloqueada por terreno con la regla de Obstáculo.',
},
 'Fighting Arts': {
   'label':'Artes Marciales',
   'description':'Técnicas de batalla poderosas que se encuentran en cartas de técnicas de lucha. Cuando se obtiene una técnica de lucha, registra sus reglas en la hoja de registro del superviviente y devuelve la carta a la caja. Los supervivientes pueden tener hasta 3 técnicas de lucha. Las técnicas de lucha adicionales obtenidas reemplazan una técnica de lucha de tu elección. Si un superviviente obtiene una técnica de lucha que ya tiene, no sucede nada.',
},
 'Finesse': {
   'label':'Destreza',
   'description':'Una palabra clave de equipo. Este equipo requiere destreza para usarlo. Esta palabra clave no interactúa de ninguna manera con el juego base y es una de esas palabras clave molestas para expansiones.',
},
 'First Strike': {
   'label':'Primer Ataque',
   'description':'Un tipo de ubicación de impacto de monstruo. Esta ubicación de impacto debe resolverse antes que cualquier otra, excepto las ubicaciones de Trampas y Velocidad de la Luz. Si se sacan múltiples ubicaciones de Primer Ataque, el jugador decide el orden en que se resuelven. Las trampas todavía preceden y cancelan todos los otros impactos.',
},
 'Fist & Tooth': {
   'label':'Puño & Diente',
   'description':'El Puño y el Diente son un arma siempre disponible para un superviviente. Los atributos de ataque para el Puño & Diente se enumeran en la cuadrícula de equipo. Los supervivientes pueden ganar niveles de maestría en el arma Puño & Diente con esta arma.<br/>&emsp;A efectos de juego <i>(como Pintura de Sangre)</i>, el arma Puño & Diente se considera una carta de equipo separada colocada a la izquierda del extremo inferior izquierdo de la cuadrícula de equipo.',
},
 'Flammable': {
   'label':'Inflamable',
   'description':'Una palabra clave de equipo. El fuego puede destruir este equipo.',
},
 'Flow': {
   'label':'Flujo',
   'description':'Los flujos son dudas entre las acciones de monstruos. Le dan a los supervivientes la oportunidad de usar acciones de supervivencia. Se representan con una barra con una flecha.',
},
 'Forward': {
   'label':'Hacia Adelante',
   'description':'La dirección en la que está mirando la miniatura.',
},
 'Fragile': {
   'label':'Frágil',
   'description':'Una palabra clave de equipo. Este equipo es fácilmente rompible.',
},
 'Frail': {
   'label':'Frágil',
   'description':'Una regla especial de equipo. Las armas frágiles se destruyen si un superviviente intenta herir una ubicación Superdensa con ellas. Archiva el arma al final del ataque.',
},
 'Frenzy': {
   'label':'Frenesí',
   'description':'Un resultado de trauma cerebral. Un superviviente que sufre esto está frenético hasta el final de la Fase de Enfrentamiento. Gana un token de fuerza adicional, un token de velocidad adicional y 1d5 de cordura. Ignora la regla especial "lento" de las armas cuerpo a cuerpo. Un superviviente frenético no puede gastar supervivencia ni usar técnicas de lucha, especialización en armas ni maestría en armas. Un superviviente puede estar frenético varias veces.',
},
 'Full Move': {
   'label':'Movimiento Completo',
   'description':'Un término de juego que describe el movimiento máximo disponible de un monstruo o superviviente, teniendo en cuenta todos los ficheros de modificación de movimiento.',
},
 'Fur (Gear)': {
   'label':'Piel (Equipo)',
   'description':'Una palabra clave de equipo. Este equipo está substancialmente hecho de piel gruesa.',
},
 'Gear': {
   'label':'Equipo',
   'description':'Objetos que los supervivientes pueden llevar y usar, representados por cartas de equipo. Los supervivientes solo pueden usar el equipo en sus cuadrículas de equipo individuales. Excepto el equipo con la palabra clave de arma, ningún superviviente puede tener más de una copia de una carta de equipo en su cuadrícula.',
},
 'Gear Grid': {
   'label':'Cuadrícula de Equipo',
   'description':'Una alfombrilla con espacio para 9 cartas de equipo. Las cartas de equipo se pueden colocar en cualquier configuración, pero deben permanecer boca arriba. No se pueden rotar. El equipo en las cuadrículas de equipo solo se puede reorganizar durante la Fase de Asentamiento.',
},
 'Gear Keyword': {
   'label':'Palabra Clave de Equipo',
   'description':'Se encuentra directamente debajo del nombre de una carta de equipo. Describen información sobre el equipo, como el tipo de arma, los materiales, el uso o los factores limitantes. Las palabras clave son referenciadas por otras cartas y eventos.',
},
 'Gear Special Rule': {
   'label':'Regla Especial de Equipo',
   'description':'Se encuentra en la parte inferior de una carta de equipo. Estos listan habilidades, bonificaciones y requisitos del equipo.',
},
 'Grand': {
   'label':'Grandioso',
   'description':'El equipo con esta palabra clave es un arma grandiosa. Los supervivientes pueden ganar niveles de maestría en armas grandiosas con esta arma.',
},
 'Graze': {
   'label':'Rasguño',
   'description':'El instinto del Antílope Gritón. Descrito en el evento de historia del enfrentamiento del Antílope Gritón.',
},
 // 'Green Life Exchange': {
 //   'label':'',
 //   'description':'Una habilidad. En el Después, obtén 3 PX de Caza adicionales. No puedes colocar equipo con la palabra clave "otro" en tu cuadrícula. Gana +I evasión permanente con cada hito de edad. Cuando te retires, dejas de existir.',},
 'Guard': {
   'label':'Guardia',
   'description':'El instinto del Hombre del Rey. Descrito en el evento de historia del enfrentamiento del Hombre del Rey.',
},
 'Guard (Gear)': {
   'label':'Guardia (Equipo)',
   'description':'Una regla especial de equipo. Al final de tu ataque, si estás de pie y tienes un escudo en tu cuadrícula de equipo, gasta 1 punto de supervivencia para moverte 3 espacios directamente alejado del monstruo y <b>Bloquear 1</b> de forma gratuita.',
},
 'Head': {
   'label':'Cabeza',
   'description':'Una ubicación de impacto de superviviente. \nEl daño en la cabeza más allá del recuadro de lesiones graves provocará un resultado en la sección de Cabeza de la tabla de Lesiones Graves.',
},
 'Head Hunter': {
   'label':'Cazador de Cabezas',
   'description':'Un ataque que siempre impacta en la ubicación de impacto de la cabeza de un superviviente. No se tiran dados de ubicación de impacto para este ataque.',
},
 'Heal X': {
   'label':'Curación X',
   'description':'Cuando un monstruo realiza una curación X, devuelve X cartas de AI de la Pila de Heridas al fondo del mazo de AI sin mirarlas.',
},
 'Healing (Survivor)': {
   'label':'Curación (Superviviente)',
   'description':'Cuando los supervivientes se curan, borran todos los niveles de lesiones llenos y restauran todos los puntos de armadura perdidos.',
},
 'Heavy (Gear)': {
   'label':'Pesado (Equipo)',
   'description':'Una palabra clave de equipo. Este equipo tiene un peso sustancial.',
},
 'Heavy Injury Level': {
   'label':'Nivel de Lesión Pesada',
   'description':'Un recuadro de nivel de lesión pesada con líneas gruesas. Cuando se llena el nivel de lesión pesada de un superviviente, se derriba. Una vez que se llena, este nivel de lesión no se puede sufrir nuevamente en este enfrentamiento a menos que se cure.',
},
 'Herb': {
   'label':'Hierba',
   'description':'Una palabra clave de equipo. Un objeto hecho principalmente de hierbas.',
},
 'Hide (Resource)': {
   'label':'Cuero (Recurso)',
   'description':'Una palabra clave de recurso común.',
},
 'Hit (Monster)': {
   'label':'Impacto (Monstruo)',
   'description':'Un impacto es el resultado de una tirada de ataque que cumple o supera la precisión para un perfil de ataque. Los impactos que se esquivan, bloquean o ignoran son fallos. El daño fuera de un perfil de ataque no se considera un impacto.',
},
 'Hit (Survivors)': {
   'label':'Impacto (Supervivientes)',
   'description':'Un impacto es el resultado de una tirada de ataque que cumple o supera la precisión para un ataque con un arma.',
},
 'Hit Location (Monster)': {
   'label':'Ubicación de Impacto (Monstruo)',
   'description':'Cada monstruo tiene un mazo de ubicación de impacto único compuesto por cartas de ubicación de impacto. Hay tipos de cartas de ubicación de impacto: Primer Ataque, Impenetrable, Superdenso. Trampa y Normal. Cualquier ubicación de impacto que no tenga un tipo listado es Normal.',
},
 'Hit Location (Survivors)': {
   'label':'Ubicación de Impacto (Supervivientes)',
   'description':'las ubicaciones de impacto son áreas del cuerpo de los supervivientes que pueden llevar armadura y sufrir daño. las ubicaciones de impacto son: Cabeza, Brazos, Cuerpo, Cintura y Piernas. las ubicaciones de impacto pueden ganar puntos de armadura de la armadura. Sin armadura, las ubicaciones de impacto tienen 0 puntos de armadura.',
},
 'Hit Location Dice': {
   'label':'Dados de Ubicación de Impacto',
   'description':'Se utilizan para determinar la ubicación de impacto del superviviente alcanzado por un ataque.',
},
 'Hunt Board': {
   'label':'Tablero de Caza',
   'description':'El Tablero de Caza se utiliza durante la Fase de Caza para rastrear a un monstruo objetivo.',
},
 'Hunt Board Diagram': {
   'label':'Diagrama del Tablero de Caza',
   'description':'Parte de un evento de historia del enfrentamiento de un monstruo. Indica cómo configurar el tablero de caza para ese monstruo.',
},
 'Hunt Event': {
   'label':'Evento de Caza',
   'description':'Un evento de caza describe un encuentro que los supervivientes enfrentan en su viaje. Pueden ser desastrosos, extraños o incluso beneficiosos. Estos aparecen en cartas de eventos de caza básicos y cartas de eventos de caza de monstruos.',
},
 'Hunt Event Cards (Basic)': {
   'label':'Cartas de Eventos de Caza (Básicas)',
   'description':'Todas las cartas de eventos de caza básicos son idénticas. Dirigen al revelador de eventos a tirar en la tabla de eventos de caza.',
},
 'Hunt Event Cards (Monster)': {
   'label':'Cartas de Eventos de Caza (Monstruo)',
   'description':'Las cartas de eventos de caza de monstruos solo se encuentran al cazar a un monstruo en particular. Describen peligros y maravillas específicas de este monstruo. Cada monstruo cazable tiene un conjunto único de cartas de eventos de caza.',
},
 'Hunt Experience (XP)': {
   'label':'Experiencia de Caza (XP)',
   'description':'Los supervivientes obtienen Experiencia de Caza durante la Consecuencia de un enfrentamiento victorioso. Cuando un superviviente obtiene PX de Caza, llena el siguiente recuadro de PX de Caza sin llenar en su hoja de registro de superviviente. Algunos niveles de experiencia de caza son hitos (indicados por un recuadro con líneas gruesas) que activan el evento de historia de la Edad. El número de hitos llenos indica qué reglas de Edad se aplican. Cuando se llena el último recuadro de experiencia de caza, el superviviente es demasiado viejo para cazar y debe retirarse.',
},
 'In Range (Monster)': {
   'label':'Dentro del Alcance (Monstruo)',
   'description':'Un superviviente está dentro del alcance de un monstruo si el número de espacios entre ellos es menor o igual a su movimiento actual (incluyendo modificadores). Si "dentro del alcance" va seguido de un número, como "Alcance (6)", ese número reemplaza el movimiento del monstruo al calcular si un superviviente está dentro del alcance.',
},
 'Indestructible': {
   'label':'Indestructible',
   'description':'Una regla especial de terreno. Un terreno que es indestructible no puede ser destruido ni eliminado del tablero del enfrentamiento por ningún motivo hasta el final del enfrentamiento.',
},
 'Injury Level': {
   'label':'Nivel de Lesión',
   'description':'Indica el daño en una ubicación de impacto. Se registra en la hoja de registro del superviviente. La mayoría de las ubicaciones de impacto tienen dos niveles, ligero y pesado, excepto la Cabeza (que solo tiene un nivel de lesión pesado).',
},
 'Innovation': {
   'label':'Innovación',
   'description':'Un tipo de avance para un asentamiento, obtenido en la Reserva de Linternas. Las innovaciones alteran el asentamiento y las capacidades de los supervivientes. Registra las nuevas innovaciones en tu hoja de registro del asentamiento.',
},
 'Innovation Deck': {
   'label':'Mazo de Innovaciones',
   'description':'El mazo de innovaciones de un asentamiento es un mazo persistente que crece a medida que el asentamiento innova.',
},
 'Insane': {
   'label':'Demente',
   'description':'Un superviviente con 3 o más puntos de cordura.',
},
 'Insanity': {
   'label':'Locura',
   'description':'Protege a un superviviente del daño cerebral.',
},
 'Instinct': {
   'label':'Instinto',
   'description':'La acción que realiza el monstruo si no puede encontrar un objetivo al que atacar. Cada monstruo tiene un instinto único descrito en su evento de historia del enfrentamiento.',
},
 'Instrument': {
   'label':'Instrumento',
   'description':'Una palabra clave de equipo. Este equipo se puede usar para tocar música.',
},
 'Intimidate Actions': {
   'label':'Acciones de Intimidación',
   'description':'Las acciones de intimidación causan daño cerebral. Las acciones de intimidación no son ataques ni impactos (los supervivientes no pueden gastar supervivencia para esquivar acciones de intimidación). Los monstruos no necesitan estar adyacentes a sus objetivos para intimidar.',
},
 'Irreplaceable': {
   'label':'Irremplazable',
   'description':'Una regla especial de equipo. Si un superviviente muere, archiva todo el equipo irremplazable en sus cuadrículas de equipo.',
},
 'Item': {
   'label':'Objeto',
   'description':'Una palabra clave de equipo. Equipo que no es ni un arma ni una armadura.',
},
 'Jewelry': {
   'label':'Joyería',
   'description':'Una palabra clave de equipo. ¡Decorativo y funcional!',
},

 'Katana': {
   'label':'Katana',
   'description':'El equipo con esta palabra clave es un arma katana. Los supervivientes no pueden ganar niveles de maestría en armas katana.',
},
 'Katar': {
   'label':'Katar',
   'description':'El equipo con esta palabra clave es un arma katar. Los supervivientes pueden ganar niveles de maestría en armas katar con esta arma.',
},
 'Knights Charge': {
   'label':'Carga de Caballero',
   'description':'Una bonificación de conjunto de armadura Verde. Gasta {image@images/icons/activation} y {image@images/icons/movement}, muévete completamente en línea recta. Al final del movimiento, activa a <b>Griswaldo</b> y ataca. Si te moviste más de 5 espacios, este ataque obtiene <b>devastador 2</b>.',
},
 'Knockback X': {
   'label':'Empujón X',
   'description':'Mueve al objetivo del retroceso X espacios directamente alejado de la causa de este efecto. Si el superviviente pasa por encima o termina en un espacio con otro superviviente, ambos son derribados. Los supervivientes no pueden compartir espacios, mueve al superviviente retrocedido a un espacio adyacente libre. Si el superviviente se encuentra con un borde del tablero, detén y termina el retroceso. Si el superviviente sufre retroceso en el borde del tablero, se mueve a lo largo del borde.',
},
 'Knocked Down (Monster)': {
   'label':'Derribado (Monstruo)',
   'description':'Mientras un monstruo está derribado, los resultados de los dados de ataque impactan en 3+ (en lugar de la precisión normal). Cancela todas las reacciones, incluidas las reacciones que podrían ser beneficiosas para los supervivientes. Esto no cancela los efectos de heridas críticas (ya que no son reacciones). Si el monstruo está derribado durante un flujo, cancela todas las acciones restantes en su carta. Un monstruo derribado se levanta cuando roba una carta de IA, se juega una trampa o al comienzo del siguiente turno (ya sea de monstruos o supervivientes).',
},
 'Knocked Down (Survivor)': {
   'label':'Derribado (Superviviente)',
   'description':'Cuando un superviviente es derribado, gira la miniatura de lado. Los supervivientes derribados siempre se levantan al final del próximo turno del monstruo. Si un superviviente es derribado en medio de su ataque, se cancela el resto de ese ataque. Los supervivientes derribados solo pueden gastar supervivencia para esquivar (permaneciendo derribados) y no pueden gastar {image@images/icons/activation} o {image@images/icons/movement}.',
},
 'Lantern': {
   'label':'Linterna',
   'description':'Una palabra clave de equipo. Una linterna ilumina la oscuridad.',
},
 'Lantern 10': {
   'label':'Linterna 10',
   'description':'Un resultado de lanzamiento de dado con la cara de la linterna hacia arriba. Equivalente a un 10 para otros dados de 10 caras. Significa un éxito garantizado en las tiradas de impacto y herida.',
},
 'Lantern Year': {
   'label':'Año de la Linterna',
   'description':'La unidad básica de tiempo de los supervivientes. El asentamiento avanza normalmente un año de linterna como parte de cada Fase de Asentamiento.',
},
 'Last to Wound': {
   'label':'Último en Herir',
   'description':'El superviviente que causó por último una herida al monstruo.',
},
 'Leap': {
   'label':'Salto',
   'description':'Una bonificación de conjunto de armadura de Dragón. Gasta {image@images/icons/activation} y {image@images/icons/movement}. ¡Salta al aire! Coloca a tu superviviente en un espacio desocupado exactamente a 5 espacios de distancia en línea recta, luego activa un arma cuerpo a cuerpo y ataca con +2 de precisión y +5 de fuerza.',
},
 'Leather (keyword)': {
   'label':'Cuero (palabra clave)',
   'description':'Una palabra clave de equipo. Las pieles curadas son un componente crucial de este equipo.',
},
 'Legs': {
   'label':'Piernas',
   'description':'Una ubicación de impacto de superviviente. \nEl daño a las piernas más allá del recuadro de lesión pesada provocará una tirada en la tabla de Lesiones Graves de las Piernas.',
},
 'Light Speed': {
   'label':'Velocidad de la Luz',
   'description':'Un tipo de ubicación de impacto de monstruo. Esta ubicación de impacto debe resolverse antes que cualquier otra, excepto las ubicaciones de impacto de Primero en Golpear y Light Speed. Si se sacan varias ubicaciones de impacto de Primero en Golpear, el jugador decide el orden en que se resuelven. Las trampas aún preceden y cancelan todos los demás impactos.',
},
 'Life Trait': {
   'label':'Rasgo de Vida',
   'description':'Una variante del juego base. En lugar de herir eliminando cartas de IA en la pila de heridas, se hiere al monstruo reduciendo el número de su rasgo de Vida. Cuando el número se reduce a 0, el monstruo está muerto.',
},
 'Limit once per lifetime': {
   'label':'Límite una vez en la vida',
   'description':'Esto solo puede ocurrir una vez para un superviviente. Si ocurre de nuevo, no sucede nada; en casos raros, es posible que un superviviente forme parte de una nueva campaña: el superviviente todavía tiene solo una vida y cualquier cosa que ya le haya sucedido (con el límite, una vez en la vida) no puede volver a ocurrir. Si un superviviente de alguna manera muere y renace, obtiene estos beneficios nuevamente. Registra el efecto de una vez en la vida en la hoja de registro del superviviente.',
},
 'Luck (Player Attribute)': {
   'label':'Suerte (Atributo del Jugador)',
   'description':'La suerte modifica la probabilidad de un superviviente de causar una herida crítica en una tirada de herida. +1 de suerte causa una herida crítica en un resultado de tirada de herida de 9 o 10, +2 de suerte en 8, 9 o 10, y así sucesivamente. Un modificador de suerte puede ser negativo, lo que hace imposible causar heridas críticas.',
},
 'Luck (Monster Attribute)': {
   'label':'Suerte (Atributo del Monstruo)',
   'description':'Cada ficha de suerte positiva del monstruo reduce el rango de resultados de tirada de herida considerados como heridas críticas. Normalmente, las heridas críticas ocurren solo en lanzamientos de Linterna 10. A menos que los supervivientes tengan modificadores de suerte positivos, una herida crítica contra un monstruo con 1 o más fichas de suerte es imposible. Cada ficha de suerte negativa del monstruo aumenta el rango de herida crítica de los atacantes en 1. La regla de Linterna 10 siempre se aplica, por lo que incluso si la suerte de un monstruo hace que sea imposible causar heridas críticas, una tirada de herida de Linterna 10 seguirá causando una herida normal.',
},
 'Materialize': {
   'label':'Materializar',
   'description':'Retira al monstruo del tablero de enfrentamiento y colócalo adyacente al objetivo. Debe colocarse de manera que su base cubra a la mayor cantidad posible de otros supervivientes, colisionando con ellos.',
},
 'Melee': {
   'label':'Cuerpo a Cuerpo',
   'description':'Una palabra clave de equipo para armas cuerpo a cuerpo. Para atacar con un arma cuerpo a cuerpo, los supervivientes deben estar en un espacio adyacente al monstruo. Las armas cuerpo a cuerpo con Alcance pueden atacar desde más lejos.',
},
 'Menace': {
   'label':'Amenaza',
   'description':'El instinto del Carnicero. Descrito en el evento de historia del enfrentamiento del Carnicero.',
},
 'Metal': {
   'label':'Metal',
   'description':'Una palabra clave de equipo. Este equipo está principalmente hecho de metal.',
},
 'Milestone': {
   'label':'Hito',
   'description':'Los hitos son eventos especiales de la historia que se realizan solo durante el paso <b>Ver Hitos</b> de la fase de asentamiento cuando se cumplen ciertas condiciones del juego.',
},
 'Miniature': {
   'label':'Miniatura',
   'description':'La representación física de un monstruo o superviviente, utilizada en las fases de Caza y Enfrentamiento.',
},
 'Monster AI Deck': {
   'label':'Mazo de IA del Monstruo',
   'description':'Conjunto de cartas de IA utilizadas para un enfrentamiento específico. Consulta el evento de historia del monstruo para obtener detalles de su mazo de IA. El mazo de IA se reduce a medida que el monstruo resulta herido.',
},
 'Monster Controller': {
   'label':'Controlador del Monstruo',
   'description':'El jugador que saca la carta de IA del monstruo. Toma todas las decisiones y realiza los lanzamientos para resolver las acciones del monstruo durante esa ronda. Se designa mediante la ficha de Controlador del Monstruo. El controlador del monstruo cambia al comienzo de cada ronda.',
},
 'Monster Controller Bonus': {
   'label':'Bono de Controlador del Monstruo',
   'description':'Cuando un superviviente controlado por el controlador del monstruo es el objetivo de un ataque, esta acción temeraria otorga +1 de cordura al superviviente del jugador controlador del monstruo.',
},
 'Monster Controller Tile': {
   'label':'Ficha de Controlador del Monstruo',
   'description':'Designa al controlador del monstruo. Se mueve en sentido horario al siguiente jugador o superviviente al comienzo de cada ronda.',
},
 'Monster-Impassable': {
   'label':'Terreno Impasable para Monstruos',
   'description':'Una regla especial de terreno. Ni los supervivientes ni los monstruos pueden moverse a través de espacios ocupados por terreno intransitable para monstruos.',
},
 'Monster Hit Location Card': {
   'label':'Carta de Ubicación de Impacto del Monstruo',
   'description':'Representa una ubicación en el cuerpo del monstruo. Estas ubicaciones se impactan con un lanzamiento de ataque exitoso de un superviviente. Muchas cartas de ubicación de impacto tienen efectos o acciones especiales.',
},
 'Monster Hit Location Deck': {
   'label':'Mazo de Ubicaciones de Impacto del Monstruo',
   'description':'Las cartas que componen colectivamente las ubicaciones en las que un superviviente puede impactar a un monstruo dado. Único para cada monstruo.',
},
 'Monster Level': {
   'label':'Nivel del Monstruo',
   'description':'El nivel del monstruo (★) determina la dificultad del enfrentamiento y la ubicación del monstruo en el tablero de caza. Los monstruos de nivel más alto tienen cacerías más largas y enfrentamientos más difíciles.',
},
 'Monster Reference Card/ Basic Action': {
   'label':'Tarjeta de Referencia del Monstruo / Acción Básica',
   'description':'Contiene una breve descripción de las características de cada monstruo. Sirven como un recordatorio compacto de la información del monstruo que se usa con frecuencia.',
},
 'Monster Resources': {
   'label':'Recursos del Monstruo',
   'description':'Las cartas de recursos de monstruos se obtienen solo al enfrentarse a ese monstruo en particular. Cada monstruo cazable tiene una baraja única. Los recursos de monstruos se pueden usar y gastar como su tipo de recurso o como su nombre de recurso específico. Algunos recursos de monstruos tienen reglas adicionales.',
},

 'Monster Showdown Story Event': {
   'label':'Evento de la Confrontación con el Monstruo',
   'description':'Contiene información relevante para el enfrentamiento y la caza de un monstruo en particular, incluidas las instrucciones sobre cómo construir el mazo de IA del monstruo, la configuración del tablero de caza y enfrentamiento, el instinto y el ataque básico del monstruo, y la información sobre las secuelas del enfrentamiento.',
},
'Most/Least X': {
   'label':'Más/Menos X',
   'description':'El superviviente con la mayoría/menor cantidad de la condición mencionada. El cero puede contar como la mayoría o la minoría, a menos que se indique lo contrario.',
},
'Move and Attack Target Action': {
   'label':'Acción de Moverse y Atacar al Objetivo',
   'description':'Un componente de la mayoría de las cartas de IA. Una Acción de Moverse y Atacar al Objetivo sigue a una Acción de Elegir Objetivo. Mueve al monstruo hacia el objetivo y realiza el perfil de ataque siguiente.',
},
'Movement (Attribute)': {
   'label':'Movimiento (Atributo)',
   'description':'La cantidad máxima de espacios que un monstruo o superviviente puede moverse en una sola acción de movimiento. Un monstruo o superviviente con menos de 1 de movimiento aún puede moverse 1 espacio en cada acción de movimiento.',
},
'Move into Range and Attack': {
   'description': 'Permite que el monstruo tenga alcance: X.<br /><br />Cuando se instruye al monstruo a <b>Moverse hacia el Alcance y Atacar</b>, termina el movimiento del monstruo a X espacios de distancia del objetivo. Si el monstruo está a menos de X espacios de distancia, muévelo hasta que esté exactamente a X espacios de distancia.',
},
'Move Through Target': {
   'label':'Mover a Través del Objetivo',
   'description':'Cuando se le indica a un monstruo que se mueva a través de un objetivo, se mueve hacia el objetivo, pero en lugar de detenerse cuando está adyacente, su movimiento continúa. Esto normalmente provocará una colisión con el objetivo.',
},
'Mood': {
   'label':'Estado de Ánimo',
   'description':'Una carta de IA de monstruo. Una vez que se dibujan cartas de estado de ánimo, déjalas en el área de juego en lugar de descartarlas al final del turno del monstruo. Los estados de ánimo se pueden eliminar mediante algunos objetos o mediante condiciones enumeradas en la carta. Si un monstruo sufre una herida cuando tiene un mazo de IA y una pila de descarte vacíos, pero uno o más estados de ánimo activos, queda derrotado.',
},
'Natural 1': {
   'label':'1 Natural',
   'description':'Tirar 1 en lanzamientos de ataque y de herida siempre resulta en un fallo.',
},
'Nemesis Monster': {
   'label':'Monstruo Némesis',
   'description':'Los monstruos Némesis aparecen en las afueras del asentamiento. No se pueden cazar y llegarán durante los eventos de historia.',
},
'Next Monster Turn': {
   'label':'Próximo Turno del Monstruo',
   'description':'Algunos efectos persisten hasta el próximo turno del monstruo. Si es el turno de los supervivientes, el efecto terminará en el turno del monstruo inmediatamente siguiente a este turno. Si es el turno del monstruo cuando comienza este efecto, terminará en el siguiente turno del monstruo.',
},
'Next Round': {
   'label':'Próxima Ronda',
   'description':'Algunos efectos persisten hasta el final de la próxima ronda completa. Estos efectos terminarán después de que el monstruo y luego los supervivientes tomen otro turno.',
},
'No Target': {
   'label':'Sin Objetivo',
   'description':'La última opción en la lista de Elegir Objetivo de un monstruo. Indica qué hacer si no se encuentra ningún objetivo. Esto suele ser la acción Instinto de un monstruo. Cuando un monstruo no puede encontrar un objetivo, las acciones subsiguientes en la carta no se realizan.',
},
'Noisy': {
   'label':'Ruidoso',
   'description':'Una palabra clave de equipo. Este equipo es difícil de mantener en silencio.',
},
'Non-Deaf Survivor': {
   'label':'Superviviente No Sordo',
   'description':'Supervivientes que no están sufriendo una lesión grave en la cabeza de sordera.',
},
'Obstacle': {
   'label':'Obstáculo',
   'description':'Una regla de terreno. Este terreno bloquea el campo de visión de supervivientes y monstruos, interrumpiendo los ataques de armas a distancia y la selección de objetivos de monstruos. Para comprobar si el campo de visión está bloqueado, traza una línea imaginaria desde el centro de la base de la miniatura hasta el centro de la base del objetivo deseado. Si la línea entra en contacto con un espacio ocupado por un obstáculo, el campo de visión está bloqueado y el objetivo no está a la vista.',
},
'Organ (Resource)': {
   'label':'Órgano (Recurso)',
   'description':'Una palabra clave de recurso común.',
},
'Other': {
   'label':'Otro',
   'description':'Una palabra clave de equipo. Los efectos de este equipo son de otro mundo.',
},
'Outfit': {
   'label':'Equipo de Vestimenta',
   'description':'Una palabra clave de equipo. Esto completa un conjunto de armadura si estás usando el resto del conjunto y comparte una palabra clave de material con la armadura faltante. Por ejemplo, si estás usando un Casco de Linterna Oxidado y la Armadura Fénix en todas las demás ubicaciones de impacto, obtendrías el bono del Conjunto de Armadura Fénix porque el Casco Fénix también tiene la palabra clave metal.',
},
'Overwhelming Darkness': {
   'label':'Oscuridad Abrumadora',
   'description':'Un espacio en el Tablero de Caza. La primera vez que los supervivientes se mueven al espacio de Oscuridad Abrumadora, activan el '+event_img+'<b>Evento de Historia de la Oscuridad Abrumadora</b> durante cada caza. Los supervivientes no pueden evitar la Oscuridad Abrumadora. Si se mueven a través del espacio, detén todo movimiento y resuelve la Oscuridad Abrumadora antes que cualquier otro evento o efecto. Luego, resuelve otros eventos o efectos en este espacio. Si, por alguna razón, los supervivientes se mueven a la Oscuridad Abrumadora más de una vez en una sola Fase de Caza, trátala como un espacio en blanco. Si el monstruo está en el espacio de Oscuridad Abrumadora cuando los supervivientes se mueven hacia él, omite su evento y comienza el enfrentamiento de inmediato.',
},
'Parry': {
   'label':'Parar',
   'description':'Cuando se intenta herir ubicaciones de impacto Parry, todos los intentos fallan a menos que el resultado del lanzamiento de herida sea crítico. Este fallo desencadena cualquier reacción de Fallo como de costumbre.',
},
'Paired': {
   'label':'Emparejado',
   'description':'Una regla especial de equipo. Las armas emparejadas son dos armas idénticas que se pueden usar como una sola. Puedes agregar la velocidad de la segunda arma al atacar con la primera. Estas armas deben tener el mismo nombre y ambas deben estar en tu cuadrícula de equipo.',
},
'Perishable': {
   'label':'Perecedero',
   'description':'Una palabra clave de recurso. Este recurso no se puede agregar al depósito del asentamiento. Al final de la fase de asentamiento, se pierde. Archívalo. Para que los recursos perecederos duren más de un año de linterna, deben llevarse fuera del asentamiento en un Morral.',
},
'Perfect Hit': {
   'label':'Golpe Perfecto',
   'description':'Un resultado de lanzamiento de dados de ataque de Linterna 10. Esto siempre resulta en un acierto. Cuando haya múltiples Aciertos Perfectos en un solo ataque, activa cualquier regla que aplique a los Aciertos Perfectos esa cantidad de veces.',
},
'Permanent Injury': {
   'label':'Lesión Permanente',
   'description':'Una lesión para un superviviente que no se cura con el tiempo. Sus efectos siempre se aplican a ese superviviente a menos que sean cancelados por otro efecto.',
},
'Persistent Injury': {
   'label':'Lesión Persistente',
   'description':'Una lesión especial que se encuentra en algunas cartas de ubicación de impacto. Cuando un monstruo sufre una herida crítica en una ubicación de impacto con una lesión persistente, deja la carta en juego en lugar de descartarla. Algunas lesiones persistentes modifican el comportamiento de un monstruo, mientras que otras afectan a cartas de IA específicas.',
},
'Persistent Injury Actions': {
   'label':'Acciones de Lesión Persistente',
   'description':'Se encuentran en algunas cartas de IA. Las acciones de lesiones persistentes son acciones condicionales que reemplazan las reglas normales de una carta de IA. Solo se realizan cuando el monstruo saca una carta de IA con una acción de lesión persistente que coincida con una lesión persistente en juego. Si se realiza una acción de lesión persistente, ignora otras acciones en la carta.',
},
'Pickaxe': {
   'label':'Pico',
   'description':'Una palabra clave de equipo. En ciertas situaciones, esto se puede usar para extraer minerales.',
},
'Pick Target': {
   'label':'Elegir Objetivo',
   'description':'Un componente de la mayoría de las cartas de IA. Una lista de Elegir Objetivo tiene una serie de condiciones. El controlador del monstruo verifica si se cumple cada condición de selección de objetivos, comenzando desde la primera y deteniéndose cuando se cumple una de ellas. A veces, los objetivos se determinan por un área o zona (como supervivientes adyacentes o todos los supervivientes en una zona). Algunas cartas de IA eligen más de un objetivo.',
},
'Place': {
   'label':'Colocar',
   'description':'Cambia la ubicación de una miniatura de un espacio en el tablero de enfrentamiento a otro. Esto no cuenta como movimiento.',
},
'Pounce': {
   'label':'Saltar',
   'description':'Una regla especial de equipo. Gasta {image@images/icons/activation} y {image@images/icons/movement} para moverte 3 espacios hacia adelante en línea recta y activar un arma cuerpo a cuerpo. Este ataque gana +1 de fuerza.',
},
'Principle': {
   'label':'Principio',
   'description':'Los principios son las filosofías orientadoras de tu asentamiento. Cuando se desencadena el evento de historia de un principio, tu asentamiento debe tomar una decisión. Registra el principio elegido en la hoja de registro del asentamiento y agrega la carta de ese principio al área de juego del asentamiento.',
},
'Priority Target': {
   'label':'Objetivo Prioritario',
   'description':'Cuando un superviviente obtiene el token de objetivo prioritario, ha captado la atención del monstruo. Solo 1 superviviente puede tener el token de objetivo prioritario a la vez. Cada vez que un monstruo realiza una acción de selección de objetivos, el superviviente con el token de objetivo prioritario siempre será seleccionado. El token de objetivo prioritario se retira cuando: el superviviente con el token es seleccionado, otro superviviente obtiene el token de objetivo prioritario, un efecto hace que se retire el token de objetivo prioritario.',
},
'Prismatic': {
   'label':'Prismático',
   'description':'Tus afinidades completas y las mitades de afinidad incompletas cuentan como todos los colores.',
},
'Provoke': {
   'label':'Provocar',
   'description':'Una regla especial de equipo. Cuando hieres con esta arma, obtienes el token de objetivo prioritario.',
},

 'Proxy cards': {
   'label': 'Cartas de Reemplazo',
   'description': 'Hay 8 cartas de reemplazo. Estas se pueden usar para reemplazar cartas perdidas o crear variantes de juego.',
},
'Pulse Discoveries': {
   'label': 'Descubrimientos de Pulso',
   'description': 'Una serie de habilidades que se pueden desbloquear mediante la Investigación de Linternas. Un Descubrimiento de Pulso puede ser realizado por un superviviente con el Dado de la Muerte.',
},
'Puzzle Affinity': {
   'label': 'Afinidad de Rompecabezas',
   'description': 'Una regla especial de equipo. Los bonos de afinidad de rompecabezas solo se pueden obtener si las afinidades se completan utilizando las afinidades en esa carta específica (indicado por piezas de rompecabezas en lugar de casillas).',
},
'Quarry': {
   'label': 'Presas',
   'description': 'El monstruo al que los supervivientes han elegido cazar.',
},
'Random Hit Location (Survivor)': {
   'label': 'Ubicación de Impacto Aleatoria (Superviviente)',
   'description': 'Se determina usando el dado de ubicación de impacto incluido.',
},
'Random Hunt Event': {
   'label': 'Evento de Caza Aleatorio',
   'description': 'Tira 1d100 y aplica el evento de caza correspondiente a este número en la tabla de Eventos de Caza.',
},
'Random Survivor': {
   'label': 'Superviviente Aleatorio',
   'description': 'El controlador del monstruo o el revelador de eventos generalmente determina al azar un superviviente, utilizando una probabilidad igual de todas las posibles opciones.',
},
'Range (Gear)': {
   'label': 'Alcance (Equipo)',
   'description': 'Una regla especial de equipo. Los supervivientes que estén a esta cantidad de espacios o menos de distancia de un monstruo pueden atacar con esta arma. Las armas de largo alcance no se pueden usar si el campo de visión hacia el monstruo está bloqueado (por terreno con la regla de Obstáculo).',
},
'Ranged': {
   'label': 'A Distancia',
   'description': 'Una palabra clave de equipo. Un arma a distancia, como un arco o una dardo, permite a los supervivientes atacar desde una distancia.',
},
'Ranged Attack Target': {
   'label': 'Objetivo de Ataque a Distancia',
   'description': 'Cuando se instruye al monstruo a Atacar a Distancia al Objetivo, ataca con alcance ilimitado. No es necesario que esté adyacente para golpear.',
},
'Rawhide': {
   'label': 'Cuero Crudo',
   'description': 'Una palabra clave de equipo. Este equipo está hecho de pieles sin curtir.',
},
'Reach': {
   'label': 'Alcance',
   'description': 'Una regla especial de equipo. Las armas de alcance son lo suficientemente largas como para atacar a monstruos cuando el superviviente no está adyacente. El alcance especifica el número máximo de espacios de distancia a los que un superviviente puede atacar con esta arma.',
},
'Reaction': {
   'label': 'Reacción',
   'description': 'Una regla de ubicación de impacto. Los 3 tipos de reacciones son Herida, Fallo y Reflejo: cada uno especifica las condiciones para que ocurra una reacción. Las reacciones ocurren después de rodar para herir la ubicación de impacto en la que se encuentran y antes de resolver la siguiente ubicación de impacto.',
},
'Record And Archive': {
   'label': 'Registrar y Archivar',
   'description': 'Una instrucción en ciertas cartas, como trastornos y artes de lucha. Haz una nota de los efectos listados y devuelve la carta a la caja de juego.',
},
'Reflex (Reaction)': {
   'label': 'Reflejo (Reacción)',
   'description': 'Un tipo de reacción de monstruo. Esta reacción ocurre independientemente de si un intento de herida tiene éxito o falla.',
},
'Remove From The Showdown Board (Survivor)': {
   'label': 'Eliminar del Tablero del Enfrentamiento (Superviviente)',
   'description': 'Retira la miniatura del superviviente del tablero de enfrentamiento. Colócala en su carta de estado de superviviente, si la tiene. Un superviviente eliminado del tablero de enfrentamiento tiene un Acto, pero no puede gastar {image@images/icons/movement}, {image@images/icons/activation} o realizar acciones de supervivencia. A menos que se indique lo contrario, no afectan ni son afectados por nada en el tablero de enfrentamiento. Cuando termine el enfrentamiento, cualquier superviviente que haya sido eliminado del tablero (pero no esté muerto) continuará con el Desenlace como de costumbre.',
},
'Resolved': {
   'label': 'Resuelto',
   'description': 'Una carta se resuelve cuando no hay más instrucciones que seguir en ella. Esto puede deberse a la realización de todas las acciones enumeradas o como resultado de instrucciones específicas en la carta.',
},
'Resources': {
   'label': 'Recursos',
   'description': 'Las cartas de recursos se obtienen al derrotar monstruos y eventos. Se gastan para desarrollar el asentamiento y fabricar equipo. Hay 4 tipos: Básico, Monstruo, Extraño y Roedor.',
},
'Resource Types': {
   'label': 'Tipos de Recursos',
   'description': 'Además del nombre específico listado, todas las cartas de recursos tienen uno o más tipos que se pueden usar como. Ejemplos comunes incluyen Hueso, Piel, Órgano y Chatarra.',
},
'Retch': {
   'label': 'Vómito',
   'description': 'Algunas de las cartas de IA y ubicación de impacto del Gorm lo dirigen a realizar Retch. Esta acción causa daño a todos los supervivientes en la zona indicada. El terreno, los supervivientes u otros efectos en el tablero no modificarán esta zona.',
},
'Reveal': {
   'label': 'Revelar',
   'description': 'Voltea una carta boca arriba y examínala (no la juegues). No vuelvas a barajar un mazo para revelar más cartas de las que hay en el mazo.',
},
'Retired': {
   'label': 'Retirado',
   'description': 'Cuando se llena el último recuadro de PX de Caza, el superviviente se retira. Algunos trastornos y lesiones graves también obligan a retirarse. Los supervivientes retirados no pueden partir, pero siguen contribuyendo a la población total del asentamiento y pueden participar en eventos y esfuerzos del asentamiento.',
},
'Returning Survivors': {
   'label': 'Supervivientes que Regresan',
   'description': 'Todos los supervivientes que sobrevivieron al enfrentamiento anterior son supervivientes que regresan.',
},
'Rewards': {
   'label': 'Recompensas',
   'description': 'Las recompensas se obtienen al derrotar monstruos. Están enumeradas en el evento de historia del enfrentamiento del monstruo. Obtén recompensas como grupo, una vez por enfrentamiento victorioso (a menos que se indique lo contrario).',
},
'Ripple Pattern': {
   'label': 'Patrón de Onda',
   'description': 'Una regla especial de equipo. Cuando eres atacado, tira 1d10. En un 10+, ignora 1 impacto.',
},
'Round (Showdown)': {
   'label': 'Ronda (Enfrentamiento)',
   'description': 'El enfrentamiento procede en rondas, que consisten en el turno del monstruo seguido del turno de los supervivientes. Las rondas continuarán hasta que el monstruo esté muerto o todos los supervivientes estén muertos.',
},
'Run Away': {
   'label': 'Huir',
   'description': 'Una vez que un asentamiento haya innovado Pictografías, los supervivientes pueden abandonar una Fase de Caza o Enfrentamiento en cualquier momento. Sigue las instrucciones en el evento de historia de Huir.',
},
'Savage': {
   'label': 'Salvaje',
   'description': 'Una regla especial de equipo. Después de la primera herida crítica en un ataque, las armas salvajes causan 1 herida adicional. Esta regla no se activa en ubicaciones de impacto Impenetrables.',
},
'Scythe': {
   'label': 'Guadaña',
   'description': 'El equipo con esta palabra clave es un arma de guadaña. Los supervivientes pueden ganar niveles de destreza con armas de guadaña con esta arma.',
},
'Secret Fighting Arts': {
   'label': 'Artes de Lucha Secretas',
   'description': 'Las Artes de Lucha Secretas son Artes de Lucha que no se pueden obtener de forma normal. Cada Arte de Lucha secreto tiene una tarjeta correspondiente que describe las reglas para usarla. Estas cuentan para tu límite máximo de Artes de Lucha de 3.',
},
'Selfish': {
   'label': 'Egoísta',
   'description': 'Una regla especial de equipo. Un equipo con esta regla no puede estar en el mismo cuadrante de equipo que ningún equipo con la palabra clave "other".',
},
'Sentient': {
   'label': 'Sensible',
   'description': 'Una regla especial de equipo. Un superviviente debe estar cuerdo para activar este equipo.',
},
'Session': {
   'label': 'Sesión',
   'description': 'Una sesión típica consta de tres fases: Fase de Caza, Fase de Enfrentamiento y Fase de Asentamiento. Algunos eventos pueden hacer que los supervivientes omitan una o más de estas fases. Por ejemplo, los Encuentros con Némesis no tienen Fase de Caza.',
},

'Set': {
   'label': 'Conjunto',
   'description': 'Una palabra clave de equipo que se encuentra en algunas cartas de armaduras. Esto significa que esta armadura es parte de un conjunto de armaduras.',
},
'Settlement': {
   'label': 'Asentamiento',
   'description': 'La colección única de ubicaciones, innovaciones, principios, equipo, recursos y supervivientes que representan el hogar de los supervivientes. Los supervivientes están en el asentamiento durante la Fase de Asentamiento.',
},
'Settlement Board': {
   'label': 'Tablero de Asentamiento',
   'description': 'El tablero de asentamiento se encuentra en el lado opuesto del Tablero de Caza. Los espacios en el tablero corresponden a pasos en la Fase de Asentamiento para guiar a los jugadores.',
},
'Settlement Event': {
   'label': 'Evento de Asentamiento',
   'description': 'Un evento que ocurre durante la Fase de Asentamiento.',
},
'Settlement Phase': {
   'label': 'Fase de Asentamiento',
   'description': 'Durante la Fase de Asentamiento, los supervivientes experimentan eventos de asentamiento y de historia, gastan {image@images/icons/endeavors}, fabrican equipo y determinan qué supervivientes parten en la próxima caza. Esta es la única fase en la que los supervivientes pueden cambiar o reorganizar sus cuadrantes de equipo.',
},
'Settlement Record Sheet': {
   'label': 'Hoja de Registro de Asentamiento',
   'description': 'Ayuda a los jugadores a llevar un registro del desarrollo de su asentamiento.',
},
'Severe Injury': {
   'label': 'Herida Grave',
   'description': 'Cuando los puntos de armadura y los niveles de heridas de los supervivientes se agotan, pueden acumular heridas graves temporales o permanentes en la tabla de heridas graves.<br\>&emsp;Cuando un superviviente sufre heridas permanentes, anota el nombre y las reglas en tu hoja de registro y ajusta sus atributos según sea necesario. Algunas heridas llenan el recuadro de Omitir la Próxima Caza en la hoja de registro del superviviente.<br\>&emsp;De lo contrario, las heridas graves duran hasta el final del enfrentamiento y se marcan con fichas de atributo.<br\>&emsp;Algunas heridas permanentes tienen límites en cuántas veces se pueden registrar. Si un superviviente sufre una herida grave que ya ha registrado el número máximo de veces, en su lugar obtiene 1 ficha de sangrado.',
},
'Severe Injury Tables': {
   'label': 'Tablas de Heridas Graves',
   'description': 'Contienen secciones de posibles heridas graves en ubicaciones de impacto. Cada impacto que cause una herida grave provoca un lanzamiento en la tabla de heridas graves de esa ubicación.',
},
'Sharp': {
   'label': 'Afilado',
   'description': 'Una regla especial de equipo. Agrega 1d10 de fuerza a cada intento de herida usando este equipo. Este 1d10 no es una tirada de herida y no puede causar heridas críticas.',
},
'Shield': {
   'label': 'Escudo',
   'description': 'El equipo con esta palabra clave es un arma escudo. Los supervivientes pueden ganar niveles de destreza con armas escudo con esta arma.',
},
'Showdown Board': {
   'label': 'Tablero de Enfrentamiento',
   'description': 'Se utiliza para representar el área donde los supervivientes enfrentan al monstruo en la batalla. Las reglas específicas para configurar el tablero de enfrentamiento se encuentran en el evento de historia del enfrentamiento de cada monstruo.',
},
'Showdown Board Edge': {
   'label': 'Borde del Tablero de Enfrentamiento',
   'description': 'Por lo general, los monstruos o supervivientes no pueden moverse fuera del borde del tablero de enfrentamiento. Cualquier efecto de retroceso o movimiento completo que llevaría una miniatura más allá de un borde del tablero se detiene en el borde en su lugar.',
},
'Showdown Phase': {
   'label': 'Fase de Enfrentamiento',
   'description': 'La parte de una sesión en la que los supervivientes se enfrentan a un monstruo. Consulta las páginas individuales de enfrentamiento de cada monstruo para obtener instrucciones sobre cómo comenzar y terminar la Fase de Enfrentamiento.',
},
'Showdown Setup': {
   'label': 'Configuración de Enfrentamiento',
   'description': 'Un componente del evento de historia del enfrentamiento de cada monstruo. Contiene instrucciones para configurar las fichas de terreno y las miniaturas del monstruo y los supervivientes en el tablero de enfrentamiento antes de una batalla.',
},
'Sickle': {
   'label': 'Hoz',
   'description': 'Una palabra clave de equipo. En ciertas situaciones, esto se puede usar para cosechar hierbas.',
},
'Skewer': {
   'label': 'Espetar',
   'description': 'Un bono de conjunto de la Armadura Aullante. Después de <b>aplastar</b>, gasta {image@images/icons/activation} para moverte 1 espacio y activar un arma de cuerpo a cuerpo con +2 de fuerza, si hieres con una lanza, aplica ese resultado de tirada de herida a la siguiente ubicación de impacto seleccionada en este ataque.',
},
'Skip Next Hunt': {
   'label': 'Omitir la Próxima Caza',
   'description': 'Llena el recuadro de Omitir la Próxima Caza en la hoja de registro del superviviente. El superviviente no puede ser seleccionado como un superviviente que parte. Después de que se elijan los supervivientes que parten, borra todos los recuadros llenos de Omitir la Próxima Caza en todas las hojas de registro de los supervivientes.',
},
'Slam': {
   'label': 'Aplastar',
   'description': 'Una regla especial de equipo. Gasta {image@images/icons/movement} y mueve completamente hacia adelante en línea recta. Si te mueves 4 o más espacios y te detienes junto a un monstruo, este sufre retroceso 1 y -1 de Resistencia hasta el final de la ronda.',
},
'Slow': {
   'label': 'Lento',
   'description': 'Una regla especial de equipo. Las armas lentas siempre tienen una velocidad de ataque de 1. No añadas modificadores de velocidad.',
},
'Sniff': {
   'label': 'Oler',
   'description': 'El instinto del León Blanco descrito en el evento de historia de León Blanco.',
},
'Shadow Walk': {
   'label': 'Caminar entre Sombras',
   'description': 'Cuando gastes {image@images/icons/movement}, puedes moverte a través de espacios ocupados por supervivientes sin causar <b>colisión</b>.',
},
'Soluble': {
   'label': 'Soluble',
   'description': 'Una palabra clave de equipo. Puede disolverse en líquido.',
},
'Solar Track': {
   'label': 'Rastro Solar',
   'description': 'El Solar Track se utiliza durante el enfrentamiento con el Sunstalker. Interactúa con las cartas de rasgos del monstruo, realiza un seguimiento de la energía solar actual y determina la dirección en que se proyectan las sombras.<br/><br/>Configura el Solar Track junto al tablero de enfrentamiento. El enfrentamiento comenzará con la luz en la espalda de los supervivientes.',
},
'Spear': {
   'label': 'Lanza',
   'description': 'El equipo con esta palabra clave es un arma de lanza. Los supervivientes pueden ganar niveles de destreza con armas de lanza con esta arma.',
},
'Special Showdown': {
   'label': 'Enfrentamiento Especial',
   'description': 'Los Enfrentamientos Especiales interrumpen la Fase de Asentamiento. Después de que concluyan (independientemente de si es victoria o derrota), la Fase de Asentamiento continúa desde donde se detuvo. No generes {image@images/icons/endeavors} ni desencadenes nuevos eventos de historia. Los detalles de cada Enfrentamiento Especial se enumeran en el evento de historia o innovación que lo desencadenó. Después del enfrentamiento, cura todas las heridas leves y graves de los supervivientes restantes y elimina todas las fichas.',
},
'Speed (Attack Profile/Weapon)': {
   'label': 'Velocidad (Perfil de Ataque/Arma)',
   'description': 'El número de tiradas de ataque (número de dados lanzados). Por lo general, se determina por el perfil de ataque de una carta de monstruo o la velocidad en el arma de un superviviente.',
},
'Speed (Attribute)': {
   'label': 'Velocidad (Atributo)',
   'description': 'La velocidad se suma a la velocidad del arma de un superviviente o a la velocidad del perfil de ataque de un monstruo para determinar el número de tiradas de ataque. Si la velocidad es negativa, réstala del número de dados lanzados para un ataque. Un ataque de un monstruo o superviviente con menos de una velocidad todavía tiene una tirada de ataque. Las armas con la palabra clave "Slow" no pueden beneficiarse de bonificaciones positivas de velocidad.',
},
'Starvation Space': {
   'label': 'Espacio de Inanición',
   'description': 'El último espacio del tablero de caza. Si los supervivientes se mueven a este espacio (incluido el inicio de un enfrentamiento), aplica las reglas que se enumeran en el tablero de caza.',
},
'Stinky': {
   'label': 'Apestoso',
   'description': 'Una palabra clave de equipo. Este objeto tiene un olor fuerte.',
},
'Story Event': {
   'label': 'Evento de Historia',
   'description': 'Un evento que afecta al asentamiento/supervivientes. Los desencadenantes comunes incluyen: la línea de tiempo del asentamiento, los hitos de los supervivientes en PX de Caza/valor/capacidad de comprensión, las cartas de monstruos, los eventos de asentamiento. Cuando aparece un Evento de Historia, desencadena el evento de historia consultando la página correspondiente en el manual de reglas y siguiendo sus instrucciones.',
},
'Strain Milestone': {
   'label': 'Hito de Tensión',
   'description': 'Los hitos de tensión son una forma en que las jugadas de los jugadores pueden alterar permanentemente el futuro de sus partidas. Durante la fase de asentamiento, todas las cartas de hitos de tensión no alcanzados se colocan en el tablero de asentamiento sobre el paso de <b>Verificar Hitos</b>.<br/><br/>Durante este paso, verifica primero las cartas de hitos de tensión. Si se han alcanzado cualquiera de las condiciones del hito de la carta, resuelve su efecto permanente y elimina el hito de tensión logrado del juego. Nunca se pueden usar de nuevo en ninguna campaña.',
},
'Strange Resources': {
   'label': 'Recursos Extraños',
   'description': 'Cartas de recurso que solo se obtienen en circunstancias específicas. Los recursos extraños de monstruos no se mezclan en las barajas de recursos de monstruos.',
},
'Strength (Attribute)': {
   'label': 'Fuerza (Atributo)',
   'description': 'La fuerza se suma al resultado de un intento de herida. Si la fuerza es un número negativo, réstala del resultado del intento de herida',
},

 'Strength (Weapon)': {
   'label':'Fuerza (Arma)',
   'description':'El número que un arma agrega al intento de herida.',},

'Super-Dense': {
   'label':'Superdenso',
   'description':'Un tipo de ubicación de impacto. Esta ubicación de impacto es inusualmente resistente. Si un superviviente intenta herir una de estas ubicaciones con un arma frágil, se destruye y se archiva al final del ataque.',},

'Surge': {
   'label':'Embestida',
   'description':'Una acción de supervivencia. Cuando las circunstancias lo permiten, un superviviente puede gastar 1 punto de supervivencia para realizar una embestida. Gana +1{image@images/icons/activation}, que debe gastarse de inmediato. Esto les permite activar un arma, interactuar con terreno, usar equipo y cualquier otra cosa que les permita gastar una {image@images/icons/activation}. Resuelve los resultados del impulso (incluyendo cualquier reacción de monstruo) antes de reanudar el turno. Cada superviviente solo puede impulsarse una vez por ronda, y solo si el asentamiento tiene la Innovación de la Linterna Interior.',},

'Survival': {
   'label':'Supervivencia',
   'description':'La supervivencia es el deseo desesperado de aferrarse a la vida. Los puntos de supervivencia se ganan y pierden a lo largo de la campaña. Se gastan para realizar hazañas extraordinarias y cambiar tu destino. Actualiza el recuadro de supervivencia en tu hoja de registro de personaje a medida que se gana y se pierde.',},

'Survival Action': {
   'label':'Acción de Supervivencia',
   'description':'Las acciones de supervivencia son los usos más comunes de los puntos de supervivencia. Hay 4: esquivar, animar, correr y impulsar.',},

'Survival Limit': {
   'label':'Límite de Supervivencia',
   'description':'El límite de supervivencia es la cantidad máxima de supervivencia que un superviviente puede tener. El límite de supervivencia se registra en la hoja de registro del asentamiento. Las innovaciones y eventos aumentan el límite de supervivencia del asentamiento. Al comienzo de la campaña, el límite de supervivencia es 1. La supervivencia ganada por encima del límite de supervivencia se pierde.',},

'Survival Opportunity': {
   'label':'Oportunidad de Supervivencia',
   'description':'Los únicos momentos en que los supervivientes pueden correr o impulsarse. Las oportunidades de supervivencia existen en los siguientes momentos: durante los flujos en las cartas de IA de monstruos, entre acciones en el turno de los supervivientes, antes de realizar reacciones, después de efectos de herida crítica o cuando un monstruo está derribado.',},

'Survivor Record Sheet': {
   'label':'Hoja de Registro del Sobreviviente',
   'description':'Representa el estado permanente de un superviviente. Algunas secciones incluyen: atributos, PX de Caza, destreza con armas y cambios permanentes.',},

'Survivor Status Card': {
   'label':'Carta de Estado del Sobreviviente',
   'description':'Cartas de estado especial (S) de IA que llevan el seguimiento de las condiciones de un superviviente individual en lugar del monstruo. Cuando un superviviente obtiene una carta de estado de superviviente, colócala junto a su cuadrícula de equipo. Los efectos de la carta se aplican solo a ese superviviente. Algunas cartas de estado cambian y deben llevarse un seguimiento. Algunas otorgan a los supervivientes acciones únicas. Si un evento de historia de un monstruo tiene una carta de Estado de Superviviente en su configuración, todos los supervivientes obtienen la carta al comienzo del enfrentamiento.',},

'Sword': {
   'label':'Espada',
   'description':'El equipo con esta palabra clave es un arma de espada. Los supervivientes pueden ganar niveles de destreza con armas de espada con esta arma.',},

'Tactics Cards': {
   'label':'Cartas de Tácticas',
   'description':'Las tácticas proporcionan a los supervivientes nuevas formas de luchar, utilizando lo que han aprendido de luchar contra caballeros. Las Cartas de Tácticas se sacan al comienzo del enfrentamiento y se colocan en el área de juego de los supervivientes. Al final del enfrentamiento, archiva todas las Cartas de Tácticas sacadas.',},

'Target': {
   'label':'Objetivo',
   'description':'El destinatario de un ataque o efecto. Algunos ataques o efectos pueden afectar a supervivientes además del objetivo.',},

'Terrain Cards': {
   'label':'Cartas de Terreno',
   'description':'Representan terrenos que se pueden encontrar durante la Fase de Enfrentamiento y contienen reglas sobre cómo los monstruos y los supervivientes interactúan con ellos. Las cartas de terreno colocan una o más fichas de terreno en el tablero de enfrentamiento.',},

'Terrain Tile': {
   'label':'Ficha de Terreno',
   'description':'Las fichas de terreno se colocan en el Tablero de Enfrentamiento para representar características físicas. El tipo y la cantidad de terreno agregado al Tablero de Enfrentamiento se determinan mediante las cartas de terreno especificadas en la sección de configuración del evento de historia del enfrentamiento de cada monstruo.',},

'Threat': {
   'label':'Amenaza',
   'description':'Una amenaza es cualquier superviviente que no esté derribado o utilizando equipo especial, terreno o habilidades para evitar ser considerado una amenaza.',},

'Thrown': {
   'label':'Arrojadizo',
   'description':'El equipo con esta palabra clave es un arma arrojadiza. Los supervivientes no pueden ganar niveles de destreza con armas arrojadizas.',},

'Timeline': {
   'label':'Línea de Tiempo',
   'description':'Realiza un seguimiento del número de años de linterna desde el establecimiento de tu asentamiento en la Hoja de Registro de Asentamiento. Desencadena eventos de historia y de asentamiento a medida que avanza la línea de tiempo.',},

'Tool': {
   'label':'Herramienta',
   'description':'Una palabra clave de equipo. Algunas herramientas desencadenan eventos de historia o otorgan bonificaciones.',},

'Toughness': {
   'label':'Dureza',
   'description':'La Dureza es el número que un total de intento de herida debe igualar o superar para herir con éxito a un monstruo.',},

'Toward (Movement)': {
   'label':'Hacia (Movimiento)',
   'description':'Una dirección utilizada en referencia a otro punto en el tablero de enfrentamiento, como un monstruo, superviviente, ficha de terreno o borde del tablero.',},

'Trait': {
   'label':'Rasgo',
   'description':'Un tipo de carta de IA de monstruo. Describe cambios permanentes en las características o comportamientos del monstruo. Las cartas de rasgos no se descartan al final del turno del monstruo.',},

'Trap': {
   'label':'Trampa',
   'description':'Un tipo de ubicación de impacto de monstruo. Una trampa cancela todos los impactos del atacante, termina su ataque y hace que el monstruo se levante, además de las acciones enumeradas en la carta. Después de que se resuelvan las acciones de la Trampa, baraja todo el mazo de ubicaciones de impacto.',},

'Trigger': {
   'label':'Disparador',
   'description':'Parte del perfil de ataque de un monstruo. Indica que un Efecto de Ataque es parte de este ataque.',},

'Turn (Monster)': {
   'label':'Turno (Monstruo)',
   'description':'La primera parte de una ronda, cuando el monstruo actúa. El controlador del monstruo debe aplicar cualquier efecto "al comienzo del turno", robar y jugar cartas de IA, luego aplicar cualquier efecto "al final del turno".',},

'Turn (Survivors)': {
   'label':'Turno (Supervivientes)',
   'description':'La segunda parte de una ronda es el turno de los supervivientes. Durante el turno de los supervivientes, los supervivientes actúan uno a la vez, completando cada uno su acción antes de que otro superviviente pueda realizar su acción. Los supervivientes pueden elegir actuar en cualquier orden.',},

'Two-handed': {
   'label':'Dos manos',
   'description':'Una palabra clave de equipo. Esta arma requiere dos manos para ser utilizada. Alguno equipo y reglas no funcionan con armas de dos manos. Un superviviente puede usar una de dos manos y obtener los beneficios de un escudo al mismo tiempo.',},

'Twilight Sword': {
   'label':'Espada del Crepúsculo',
   'description':'Un arma de gran poder. Un superviviente que lo sostenga puede seleccionarlo como destreza de arma.',},

'Undeathable': {
   'label':'Inmortal',
   'description':'Una regla especial de equipo. Si el superviviente muere, tira 1d10. Con un resultado de 6 o más, el superviviente sobrevive. Si este resultado ocurre debido a que el superviviente tiene una cantidad letal de fichas de sangrado, el superviviente no morirá hasta que obtenga otra ficha de sangrado.',},

'Understanding': {
   'label':'Comprensión',
   'description':'Atributo de un superviviente que se encuentra en la hoja de registro del superviviente. Representa la comprensión de un superviviente sobre el mundo. Alcanzar un nivel de comprensión de 3 activará el Evento de Historia de la Percepción, mientras que alcanzar un nivel de 9 activará el Evento de Historia del Secreto Blanco.',},

'Unique': {
   'label':'Único',
   'description':'Un elemento de equipo solo puede tener una copia de esta carta de equipo a la vez.',},

'Unshakable': {
   'label':'Inquebrantable',
   'description':'Una regla especial de equipo. Cuando este superviviente saque una carta de trampa, tira 1d10. Con un resultado de 6 o más, ignora la trampa. Descártala y baraja el mazo de ubicaciones de impacto.',},

'Unstoppable': {
   'label':'Imparable',
   'description':'Una regla especial de equipo. Reemplaza todos los intentos de herida con un lanzamiento de 1d10. En 1-5, no se inflige herida; en 6+ se inflige herida. No puedes causar una herida crítica mientras uses esta regla.',},

'Unwieldy': {
   'label':'Difícil de Manejar',
   'description':'Una regla especial de equipo. Si alguno de los resultados de los dados de ataque es 1, el arma causa 1 daño al azar al superviviente por cada 1 obtenido. Continúa el ataque normalmente.',},

'Vermin Resources': {
   'label':'Recursos de Insectos',
   'description':'Los recursos de insectos se pueden encontrar en los Parches de Insectos durante los enfrentamientos, o como resultado de eventos. Las cartas de insectos describen cómo se pueden usar los insectos. Los insectos también se pueden usar en el Evento de Historia de Cocina.',},

 'Victory': {
'label':'Victoria',
'description':'Parte de las consecuencias de un monstruo. Usa este resultado si el monstruo es derrotado. Agrega ese monstruo a la sección de Monstruos Derrotados de la hoja de registro del asentamiento. Si se derrota a un monstruo Némesis, actualiza también la sección de Monstruos Némesis.',},

'Vital': {
'label':'Vital',
'description':'Si el asentamiento tiene algún equipo con esta regla, los supervivientes no pueden partir sin este equipo. Si el superviviente que tiene el equipo Vital muere antes del enfrentamiento, otro superviviente debe recoger el equipo Vital (descartando equipo para hacer espacio en su cuadrícula si es necesario).',},

'Waist': {
'label':'Cintura',
'description':'Ubicación de impacto de un superviviente. \nEl daño en la cintura más allá del nivel de lesión grave resulta en una tirada en la sección de Cintura de la tabla de Lesiones graves.',},

'Weapon': {
'label':'Arma',
'description':'Un tipo de carta de equipo. Los tipos de armas en el juego básico incluyen hacha, arco, maza, daga, puño y diente, grandioso, katar, escudo, lanza, espada y látigo.',},

'Weapon Mastery': {
'label':'Maestría en Armas',
'description':'Se logra cuando un superviviente tiene ocho o más niveles de maestría en armas. Cuando cualquier superviviente alcanza la maestría en un arma, agrega esa maestría al asentamiento como una innovación. Todos los supervivientes ganan automáticamente el bono de Especialista para ese tipo de arma, además de cualquier maestría en armas que ya tengan.',},

'Weapon Proficiency': {
'label':'Proficiencia en Armas',
'description':'Atributo de un superviviente que se encuentra en la hoja de registro del superviviente. La maestría en armas representa la habilidad de un superviviente con un tipo de arma. Puede obtenerse para los siguientes tipos de armas: hacha, arco, maza, daga, puño y diente, grandioso, katar, guadaña, escudo, lanza, espada, espada crepuscular y látigo.<br> Después de alcanzar el primer hito de PE de Caza, los supervivientes pueden declarar un tipo de arma para obtener maestría en armas. Un superviviente debe declarar primero un tipo de arma antes de partir en una caza (escríbelo en el espacio de la hoja de registro) y luego herir a un monstruo al menos una vez durante un enfrentamiento con ese tipo de arma para ganar niveles de maestría en armas.<br> Si un superviviente cambia de tipo de arma, perderá todos los niveles acumulados de maestría en armas, incluida la especialización en armas.',},

'Weapon Specialization': {
'label':'Especialización en Armas',
'description':'Se logra cuando un superviviente tiene tres o más niveles de maestría en armas. Los supervivientes desarrollan nuevas habilidades que a menudo fortalecen ese arma.',},

'Whip': {
'label':'Látigo',
'description':'El equipo con esta palabra clave es un arma de látigo. Los supervivientes pueden obtener niveles de maestría en armas de látigo con esta arma.',},

'Wound': {
'label':'Herida',
'description':'Cuando un superviviente hiere con éxito a un monstruo, quita la carta superior de su Mazo de AI y colócala en la Pila de Heridas. Si el mazo de AI está vacío, baraja el descarte de AI para crear un nuevo mazo primero.',},

'Wound (Reaction)': {
'label':'Herida (Reacción)',
'description':'Listado en algunas cartas de ubicación de impacto de monstruos. Una acción que un monstruo realiza en respuesta a un intento de herida exitoso en ciertas ubicaciones de impacto.',},

'Wound Attempt': {
'label':'Intento de Herida',
'description':'El poder total de un golpe de un superviviente. Suma el resultado del lanzamiento de herida (1d10) a la fuerza del arma atacante, junto con cualquier otro modificador de fuerza. Si el total del intento de herida alcanza o supera la dureza del monstruo, entonces la ubicación de impacto resulta herida.',},

'Wound Roll': {
'label':'Tirada de Herida',
'description':'Representa la ferocidad variable de un golpe de un superviviente. Tira 1d10 y suma el resultado al intento de herida. El resultado de este d10 (agregando modificadores de suerte) determina si se causa o no una herida crítica en ubicaciones con efectos de herida crítica.',},

'Zone of (X) / (X) Zone': {
'label':'Zona de (X) / Zona (X)',
'description':'El área indicada para acciones y reacciones en las cartas.',},
	
   'Bard (Hall of Light)' : {
	   'label':'Bardo (Salón de la Luz)',
     'expansion': 'trial of champions',
     'description': 'Ondulando justo debajo de la superficie, en cada silbido ocioso y melodía desenfocada, la Sinfonía del Diablo desea manifestarse. Una pieza de música tan poderosa que mata a cualquier ser consciente que la escucha. El Bardo, el dios de la interpretación encarnado, llega para luchar contra la sinfonía.<br/><br/>Sus oídos están equipados para escuchar en las frecuencias fundamentales del mundo. Ella escucha ilesa, los insidiosos ecos de la sinfonía, siguiéndola dondequiera que suene. Sus armas tocan armonías y disonancias que distorsionan las armonías de la realidad para combatir el poder destructivo de la sinfonía. A lo largo de los siglos, generaciones de fanáticos la han seguido en el camino para enfrentar la sinfonía dentro de las Catacumbas Obsidianas.<br/><br/>Tirada de Arte de Combate Secreto: <b>8+</b>',
   },
   'Cleric (Hall of Light)' : {
	   'label':'Clérigo (Salón de la Luz)',
     'expansion': 'trial of champions',
     'description': 'Los supervivientes afectados por la maldición, aferrando sus esperanzas persistentes, a menudo son los más rápidos en sucumbir al subterfugio disfrazado de benevolencia. Entidades, impulsadas por propósitos inescrutables, se aseguran de que los fanáticos bajo su mando busquen y lleven la luz a otras almas desdichadas en todo el país. Nobles y piadosos, los clérigos actúan como intermediarios entre el mundo corpóreo y las diversas entidades que lo gobiernan. Son sanadores versátiles y guerreros militantes capaces de grandes hazañas. La fe y la oración resueltas de un clérigo le permiten realizar actos milagrosos mientras ayuda a sus aliados en combate. Estos individuos elegidos buscan fomentar y apoyar los asentamientos en crecimiento. Sus creencias fervientes los impulsan hacia adelante a través de todos los desafíos. Un clérigo siempre se siente atraído por el propósito que su dios ha diseñado para él.<br/><br/>Tirada de Arte de Combate Secreto: <b>8+</b>',
   },
   'Paladin (Hall of Light)' : {
	   'label':'Paladín (Salón de la Luz)',
     'expansion': 'trial of champions',
     'description': 'Los Portadores de la Verdad defienden la honestidad y la justicia por encima de todo. Cada día que un caballero habla la verdad, sus escudos crecen. Una bendición pero también una carga, los escudos impenetrables desvían cualquier garra, pero también se vuelven increíblemente pesados. Los paladines más piadosos deben aumentar radicalmente su densidad ósea para poder empuñar los símbolos masivos de su fe. El entrenamiento de fuerza agotador se lleva a cabo bajo el agua, en piscinas salinas llenas de las lágrimas de los iniciados mentirosos.<br/><br/>Tirada de Arte de Combate Secreto: <b>7+</b>',
   },
   'Monk (Hall of Light)' : {
	   'label':'Monje (Salón de la Luz)',
     'expansion': 'trial of champions',
     'description': 'La tradición de los Monjes está arraigada en la restauración de artefactos y santuarios. A menudo, estas restauraciones involucran largos y peligrosos viajes espirituales para recolectar materiales raros. Cada monje está entrenado como guerrero y artista. Los monjes están tan profundamente conectados con sus obras que, a medida que las mejoran y embellecen, ellos mismos también se elevan, convirtiéndose a su vez en seres más hermosos y refinados.<br/><br/>Luchan contra su orgullo creciente. La vanidad pudriendo su yo espiritual. Para expiar, se embarcan en búsquedas ascéticas en la naturaleza salvaje para construir algo nuevo en un lugar secreto y desconocido. Derraman su gracia en un nuevo edificio y regresan agotados, con el rostro marcado por la edad, dejando su belleza atrás en nuevos santuarios y artefactos esparcidos en los rincones ocultos del mundo.<br/><br/>Tirada de Arte de Combate Secreto: <b>8+</b>',},
   'Druid (Hall of the Horizon)' : {
	   'label':'Druida (Salón del Horizonte)',
     'expansion': 'trial of champions',
     'description': 'El Bosque Abisal existe en el precipicio de la aniquilación, sus pesados miembros son arrastrados inexorablemente hacia un agujero negro en su centro, no más grande que un grano de arena. El agujero respira, como si fuera un ser vivo. Cada inhalación amenaza con devorar el bosque, un intenso vacío arranca las raíces del suelo y succiona olas de escombros que caen por el aire.<br/><br/>Aquellos que viven en el Bosque Abisal evolucionan para sobrevivir a los berrinches de una abertura diminuta e impredecible en su centro. Insectos con pulgares oponibles se aferran tenazmente a los árboles, cuyas raíces se han convertido en poderosas y nudosas manos que se aferran firmemente al suelo. Los visitantes experimentados llevan cadenas y ganchos para asegurarse a sí mismos en un momento de aviso a las cosas más grandes a la vista cuando los vientos se intensifican.<br/><br/>Tirada de Arte de Combate Secreto: <b>6+</b>',
   },
   'Mage (Hall of the Horizon)' : {
	   'label':'Mago (Salón del Horizonte)',
     'expansion': 'trial of champions',
     'description': 'El Mago proviene del asentamiento de los Aromacólogos. Su magia, aceites destilados de una variedad de entidades excéntricas. Tal vez, el asentamiento sufrió un terrible destino, el aceite crudo del Cuervo Bermellón redujo la población a meras carcasas de muñecas. Y puede ser que el Mago escapara con un puñado de sus congéneres y la voluntad retorcida de quemarlos por poder para asegurar su prosperidad continua.<br/><br/>Tirada de Arte de Combate Secreto: <b>8+</b>',
   },
   'Gladiator (Hall of the Horizon)' : {
	   'label':'Gladiador (Salón del Horizonte)',
     'expansion': 'trial of champions',
     'description': 'Engañada para tomar forma humana por un aventurero de lengua astuta, la reina de los demonios debe derrotar a diez mil oponentes dignos para recuperar su verdadera forma. En su búsqueda, encontró un propósito ardiente. Ebria por la adoración de sus admiradores y las crecientes riquezas, la Gladiadora se alzó a la infamia invicta en la brillante arena. Es con una extraña tristeza que se enfrenta a los últimos cien oponentes. Sus apariciones se vuelven más raras a medida que escudriña a la multitud de contendientes en busca de un desafío único para cerrar su vida mortal.<br/><br/>Tirada de Arte de Combate Secreto: <b>7+</b>',
   },
'Samurai (Hall of the Horizon)' : {
	'label':'Samurái (Salón del Horizonte)',
     'expansion': 'trial of champions',
     'description': 'Ofreciendo un ojo, el aprendiz se convierte en un Samurai. El segundo ojo se sacrifica para convertirse en un maestro. Un clan se turnará usando los ojos de su maestro para ver en el mundo de los espíritus. Sin los ojos de su maestro, sus cuencas oculares son lugares atractivos para que los espíritus invadan. Los Samurai pueden realizar favores a estos espíritus a cambio de conocimiento y orientación. Cada samurai porta una espada maldita destinada a derrotar a los enemigos que comparten una marca distintiva que también está grabada en la hoja. Para la gran tristeza de algunos samurais, estas marcas pueden aparecer en sus aliados más queridos.<br/><br/><b>Nota:</b> La clase de Samurai puede tomar la Especialización de Katana sin requisito. Si se alcanza el nivel Maestro en Proficiencia de Armas con Katana, el Samurai no abandona el asentamiento.<br/><br/>Tirada del Arte de Combate Secreto: <b>7+</b>',},
   'Assassin (Hall of Shadow)' : {
	   'label':'Asesino (Salón de las Sombras)',
     'expansion': 'trial of champions',
     'description': 'Hace mucho tiempo, los asesinos unieron sus cuerpos con Fantasmas y desarrollaron un segundo corazón. Un asesino puede sobrevivir perdiendo un corazón, pero deben elegir entre renunciar a su forma corpórea o a su maestría en la magia. Rompiendo la tradición, la asesina dejó a su pueblo para unirse a las aventuras de otros guerreros y ver el mundo.<br/><br/>Periódicamente debe regresar a sus tierras espectrales para beber de la Fuente de Fantasmas y reponer el poder mágico de su corazón fantasmal.<br/><br/><b>Nota:</b> Las reglas para Sombras del Arte de Combate Secreto Suprimido se pueden encontrar en la Expansión Kingdom Death: Sunstalker.<br/><br/>Tirada del Arte de Combate Secreto: <b>8+</b>',},
   'Necromancer (Hall of Shadow)' : {
	   'label':'Nigromante (Salón de las Sombras)',
     'expansion': 'trial of champions',
     'description': 'El temido Nigromante provenía de la citadela de la magia negra. En una noche llena de pesar, el Nigromante lanzó un poderoso hechizo para darle renacimiento a un amante perdido, impartiendo una vida completamente nueva. El costo fue alto y la forma del nigromante se redujo a una única mano retorcida.<br/><br/>Desde entonces, el Nigromante ha utilizado su débil poder para permanecer al lado de la joven, guiándola para buscar poder en las artes oscuras para que algún día pueda descubrir una manera de restaurarlo.<br/><br/>Tirada del Arte de Combate Secreto: <b>7+</b>',},
   'Ranger (Hall of Shadow)' : {
	   'label':'Guardabosques (Salón de las Sombras)',
     'expansion': 'trial of champions',
     'description': 'El ser querido del Guardabosques fue robado por un cazador astuto y silencioso. Sola y jurando venganza, ella persiguió a la criatura pero siempre la escuchaba venir. Perfeccionó su puntería y la cazó desde lejos, pero aún así, la criatura oía su acercamiento.<br/><br/>Se adentró en los bosques susurrantes para convertirse en una acechadora perfecta. Colgó campanas de diferentes maderas sobre su cuerpo para estudiar cómo cada paso, cuerda del arco y muesca de la flecha revelaban su presencia. Aprendería a matar con tanta destreza que anunciar su presencia con el tintineo de campanas no le impediría tomar su venganza.<br/><br/>Tirada del Arte de Combate Secreto: <b>7+</b>',},
   'Thief (Hall of Shadow)' : {
	   'label':'Ladrón (Salón de las Sombras)',
     'expansion': 'trial of champions',
     'description': 'Tal vez ella sea una pintura frenética del Salvador que cobra vida. O tal vez provenga de un pequeño pueblo en el centro de un pantano de colores arcoíris que absorbe la vida de sus habitantes durante generaciones antes de despertar y pintar un tapiz en el horizonte. También podría ser una renegada de un asentamiento del Desollador de Sol muy avanzado. Algún día aclararemos la situación.<br/><br/>Tirada del Arte de Combate Secreto: <b>7+</b>',},

   'Set Aside Survivors' : {
	   'label':'Dejar de lado a los supervivientes',
     'description': 'Durante la campaña, algunos sobrevivientes pueden ser instados a dejar el asentamiento, con instrucciones de que las hojas de los sobrevivientes deben ser puestas en reserva. Los sobrevivientes que se ponen en reserva son eliminados de la población del asentamiento y se tratan como muertos, con la excepción de que estos sobrevivientes no cuentan para el recuento de muertes y un equipo maldito debe permanecer en su cuadrícula, a menos que se indique lo contrario. Los asentamientos tampoco obtienen los beneficios de su principio de muerte cuando los sobrevivientes se ponen en reserva. Si se declara que un sobreviviente en reserva ha muerto, archiva su hoja de sobreviviente y su cuadrícula como normal. Cuando un sobreviviente en reserva se reincorpora al asentamiento, recupera 1 población y se devuelve su hoja de sobreviviente y su cuadrícula.',},
   'Patterns': {
	   'label':'Patrones',
     'description': 'Los Patrones representan momentos de ingenio y circunstancias únicas que se unen para inspirar algo nuevo. A su manera, los Patrones son las historias de la artesanía y se descubren de diversas formas a través del juego. Ofrecen equipo único para que un asentamiento lo craftee y a menudo tienen requisitos desafiantes. Las cartas de Patrones no se limitan solo a tener recursos como costo; pueden requerir un especialista, un trastorno u otro elemento para su creación.'},
}

module.exports = {
 texts,
}
