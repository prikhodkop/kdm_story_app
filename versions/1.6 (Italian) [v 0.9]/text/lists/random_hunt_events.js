const endeavor_img = imageHTML('images/icons/endeavors', '0.9em;display:inline;opacity:0.8;vertical-allign:bottom')

const random_hunt_events = {
  1: `1 | Lanterne Rotte
I sopravvissuti sentono qualcosa che scricchiola sotto i loro piedi. L'Event revealer può scegliere di abbassare la lanterna e <b>investigate</b> oppure ignorare la sensazione e continuare il proprio viaggio.

[TO] Scelta
[td] Event revealer - Cosa fai?
[c] Investigate
[d<]

L'Event revealer guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-5
[d] Armeggi e ti tagli il piede su un frammento frastagliato. Soffri ★ danni alle gambe.
[c] 6-8
[d] Recuperi qualcosa di utile. Ottieni 1 basic resource <b>broken lantern</b>.
[c] 9+
[d] I sopravvissuti scoprono un tesoro di lanterne abbandonato da tempo. La vista di questo abbandono li riempie di timore, ogni sopravvissuto imposta la propria insanity a 0. Dopo essersi ricomposti, ogni sopravvissuto raccoglie 1 <b>broken lantern</b> basic resource; aggiungile al settlement storage.
[T]

[>d]
[c] Ignora
[dt] Tira di nuovo sulla tabella degli hunt event prima di spostarti sul tabellone della caccia.
`,

  2: `2 | Cadavere

[img] 2 # no-shadow

I sopravvissuti sono sopraffatti da un brivido improvviso, il respiro si blocca nei loro polmoni. I denti dei sopravvissuti battono senza pietà. Tutti i sopravvissuti perdono ★ survival. Al centro del gelo improvviso vi è un cadavere perfettamente conservato.

[TA] Controllo
[td] Quali innovazioni ha l'insediamento?
[c] Cannibalize
[d] L'Event revealer guadagna 1 basic resource casuale.
[c] Graves
[d] L'Event revealer esamina il cadavere e guadagna +1 courage and +1 understanding.
[c] Memento Mori
[dt] L'Event revealer capisce qualcosa riguardo a ciò che è successo al cadavere. Guadagna 1 fighting art casuale.
`,

  3: `3 | Piccioni Cancro
I sopravvissuti sono circondati dall'eco dei balbettii di un bambino. Strani uccelli dal volto di bambino volteggiano sopra le loro teste. Colti da orrore istintivo, i sopravvissuti si mettono a correre! Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[i] Se un sopravvissuto possiede equipaggiamento <b>noisy</b>, subisce -2 al tiro.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[d<]

Ogni straggler tira 1d10.

[i] Se un sopravvissuto ha una frusta, la fa schioccare, sparpagliando molti degli uccelli. Ogni straggler aggiunge +4 al tiro.

[TA] 1d10
[td] Straggler
[c] 1-3
[d] Correndo e agitandoti in maniera incontrollata, ti ritrovi improvvisamente in preda al panico e solo. I piccioni cancro in attesa scendono e ti beccano senza pietà la schiena, e il loro versi di giora ti riempiono la testa di orrore. Un'ora dopo, gli altri sopravvissuti ti trovano rannicchiato e piangente per terra. Sei <b>Dead Inside</b>: Non puoi guadagnare survival. Registra questo impairment.
[c] 4-6
[d] Un piccione cancro si attacca alla tua schiena! Liberati di esso spendendo 1 survival. Altrimenti, sei <b>Dead Inside</b>: Non puoi guadagnare survival. Registra questo impairment.
[c] 7-8
[d] Fuggi dalle terribili creature.
[c] 9+
[dt] Riesci ad abbattere una delle creature ripugnanti. Guadagna 1 basic resource casuale.
[>d]
[T]`,

  4: `4 | Carestia
Il sentiero davanti a te è arido e morto. Puoi proseguire o provare a trovare un modo per aggirarlo.

[TO] Scelta
[td] Cosa fai?
[c] Continua, i sopravvissuti guadagnano +1 courage #Continua
[d<]

I vostri stomaci brontolano nell'oscurità mentre proseguite con difficoltà. I sopravvissuti mettono insieme le loro provviste. L'Event revealer tira 1d10 e aggiunge +2 al risultato per ogni equipaggiamento consumable o resource che il gruppo possiede.

[TO] 1d10
[td] Event revealer
[c] 1-8
[d] La caccia ha il suo prezzo. Dolorosi crampi allo stomaco insorgono . Tutti i sopravvissuti guadagnano -1 speed token.
[c] 9-14
[d] Riesci a scongiurare la terribile fame.
[c] 15+
[dt] Tutti sono rinvigoriti dal loro spuntino. Ogni sopravvissuto guadagna +1 survival.

[>d]
[c] Aggira
[dt] Tira di nuovo sulla tabella degli hunt event prima di spostarti sul tabellone della caccia.
`,

  5: `5 | Campi di Carne
Lungo la via, le facce di pietra sul suolo lasciano il posto a un campo di bolle fatte di carne, grandi quanto un uomo, da cui spuntano folti capelli neri. Il terreno sinuoso irradia calore umido. Mentre viaggiano, ogni sopravvissuto subisce un colpo di calore, perdendo 1 survival. L'Event revealer tira 1d10.

[i] Se un sopravvissuto possiede un falcetto, può aiutare a pulire il percorso dai folti capelli neri. Aggiungi +4 al tiro.

[TO] 1d10
[td] Event revealer
[c] 1
[d<]

L'event revealer contrae una malattia che divora la carne appena tocca le bolle giganti! Un arto casuale è affetto e deve esser amputato immediatamente!

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Subisci <b>Dismembered arm</b> severe injury.
[c] 6-10
[dt] Subisci <b>Dismembered leg</b> severe injury.

[>d]
[c] 2-3
[d] Se un sopravvissuto è <b>insane</b>, immagina che i campi di carne lo stiano attaccando! Diventa isterico, agitandosi e aggrovigliandosi tra i folti capelli. Ogni sopravvissuto <b>insane</b> subisce ★ danni a una hit location casuale.
[c] 4-7
[d] È caldo e disgustoso, ma i sopravvissuti attraversano i campi di carne senza complicazioni.
[c] 8-9
[d] L'event revealer sfrutta al meglio una brutta situazione e taglia un pezzo di carne. Guadagna 1 <b>hide</b> basic resource.
[c] 10+
[d] Ogni sopravvissuto raccoglie 1 <b>hide</b> basic resource dai campi di carne.
[T]
`,

  6: `6 | Statua Senzavolto
I sopravvissuti si imbattono in una statua senza volto che regge una lanterna splendente. Riscaldandosi sotto la calda luce, i sopravvissuti si rinnovano.

Ogni sopravvissuto guadagna 1 survival.

[TO] Controlla
[td] L'insediamento possiede Sculpture?
[c] Si #Sculpture
[d<]

I sopravvissuti apprezzano profondamente la sottile maestria dell'artista. Ogni sopravvissuto tira 1d10. Guadagna survival pari al risultato e +1 understanding.

[TO] Controlla
[td] Tutti i sopravvissuti sono insane?
[c] Si #Tutti insane
[d] I sopravvissuti continuano la loro caccia.
[c] No
[d<]

I sopravvissuti potrebbero restare qui ancora un po'.

[TO] Scelta
[td] Volete riposare?
[c] Yes #Riposa
[d] Ogni sopravvissuto cura tutte le ferite e i punti armatura persi in 1 hit location. Tuttavia, perdono le tracce della loro preda. Spostala di 1 spazio lontano dai sopravvissuti sul tabellone della caccia. Se un sopravvissuto cura più di 5 punti armatura persi in questo modo, osserva la luce splendente per troppo tempo e ottiene 1 disorder casuale.
[c] No
[dt] I sopravvissuti continuano la loro caccia.

[>d]
[T]

[>d]
[c] No #
[d<]

[TO] Controlla
[td] Tutti i sopravvissuti sono insane?
[c] Yes #Tutti insane
[d] I sopravvissuti continuano la loro caccia.
[c] No #
[d<]

I sopravvissuti potrebbero restare qui ancora un po'.

[TO] Scelta
[td] Volete riposare?
[c] Yes #Riposa
[d] Ogni sopravvissuto cura tutte le ferite ferita e i punti armatura persi in 1 hit location. Tuttavia, perdono le tracce della loro preda. Spostala di 1 spazio lontano dai sopravvissuti sul tabellone della caccia. Se un sopravvissuto cura più di 5 punti armatura persi in questo modo, osserva la luce splendente per troppo tempo e ottiene 1 disorder casuale.
[c] No
[dt] I sopravvissuti continuano la loro caccia.

[>d]
[T]

[>d]
[T]
`,

  7: `7 | Terreno Affamato
Il terreno si spacca improvvisamente e una bocca di pietra spalancata tenta di divorare l'event revealer per intero! L'event revealer tira 1d10.

[i] Se un altro sopravvissuto ha una frusta, la lancia verso l'event revealer. Aggiungi +4 al tiro.

[TO] 1d10
[td] Event revealer
[c] 1
[d] Con un grido soffocato, sparisci nel terreno. Riesci ad afferrare una sporgenza instabile sopra le fauci spalancate. Perdi tutti i survival mentre ti arrampichi disperatamente verso la salvezza. Se non ne hai, cadi giù. Le ossa scricchiolano tra i denti di pietra. Sei divorato intero. Morto.
[c] 2-5
[d] Ti arrampichi, ma la tua gamba è catturata dalle terribili fauci. Subisci 2 danni alle gambe.
[c] 6-9
[d] Riesci a saltare via in tempo!
[c] 10+
[d] Un rutto! un gorgoglio! Il terreno vomita uno scarto scintillante. Guadagna 1 <b>broken lantern</b> basic resource.
[T]
`,

  8: `8 | Nebbia Lamentosa

[img] 8
Un gemito costante segue i sopravvissuti. Alla fine, entrano in un'area avvolta da una fitta nebbia e il lamento dventa un suono raccapricciante.

Ogni sopravvissuto <b>non-deaf</b> tira 1d10.

[TO] 1d10
[td] Determina straggler
[c] Tutti i sopravvissuti sono <b>deaf</b>
[d] I sopravvissuti continuano, incuranti della cacofonia: termina l'evento.
[c] Straggler scelto
[d<]

Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

Ogni straggler tira 1d10.

[i] Se un sopravvissuto possiede un equipaggiamento <b>noisy</b>, lo straggler aggiunge +2 al tiro.

[TO] Controlla
[td] Un sopravvissuto possiede un equipaggiamento <b>noisy</b> e l'insediamento possiede <b>Drums</b>?
[c] Si #Drums
[d] I sopravvissuti contrastano i lamenti con una melodia familiare. Ogni sopravvissuto guadagna +2 insanity e +2 survival.
[c] No #
[d<]

[TA] 1d10
[td] Straggler
[c] 1-3
[d] La nebbia intorno a te diventa nera e si riempie di sagome di volti tormentati. Sei portato alla follia. Ottieni 1 disorder casuale.
[c] 4-6
[d] La nebbia si fa minacciosa e comincia a gemere. Ti tappi le orecchie con le dita, ma non serve a nulla. Soffri ★ brain damage.
[c] 7-9
[d] Ti infili i pollici nelle orecchie e corri, lasciando la nebbia lamentosa.
[c] 10+
[dt] Imitando il fumo inquietante, inizi con calma a gemere con esso. Guadagna +2 insanity.

[>d]
[T]

[>d]
[T]
`,

  9: `9 | Luce Dorata
Una luce dorata acceca i sopravvissuti, interrompendo il loro cammino. La luce risplende da un'unica fonte. L'event revealer è obbligato a <b>investigate</b>.
Guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] L'event revealer è blind
[d] Cammina nella direzione sbagliata e guadagna +3 insanity. Tira di nuovo sulla tabella degli hunt event e non indagare sulla luce.
[c] 1-3
[d] La luce è travolgente. La tua mente fragile non può capire le sue parole mute. Guadagna 1 disorder casuale.
[c] 4-8
[d] Vaghi attraverso la luce, immerso in una sensazione calda e terribile. Non trovi nient'altro per esserti esposto. Subisci ★ danni a una hit location casuale.
[c] 9+
[d] Qualcosa nella luce ti eccita e la tua determinazione si intensifica. Guadagna +1 survival.
[T]
`,

  10: `10 | Il Mietitore

[img] 10 # no-shadow # width:45%
<b>Questo evento non può essere ritirato o evitato in alcun modo.</b>
Il terreno trema e si incrina sotto i sopravvissuti. Un verme colossale irrompe dal basso, la sua pelle è un mosaico di facce urlanti. La sola vista ti porta alla follia.
Tutti i sopravvissuti guadagnano 1 disorder casuale e devono spendere 1 survival o essere divorati per intero.

[TO] Controlla
[td] Un sopravvissuto possiede un equipaggiamento noisy?
[c] Yes #Sopravvissuto con equipaggiamento noisy
[d<]

Il Mietitore è attratto dal suono e viene immediatamente divorato. Niente può salvarlo.

La creatura è così orribile che il cervello dei sopravvissuti cancella l'esperienza dai loro ricordi. Non ottieni i benefici del tuo death principle.
[>d]
[c] No #
[d<]

La creatura è così orribile che il cervello dei sopravvissuti cancella l'esperienza dai loro ricordi. Non ottieni i benefici del tuo death principle.

[>d]
[~T]
`,

  11: `11 | Escrementi di Mostro
I sopravvissuti trovano degli escrementi di mostro, che sembrano appartenere alla loro preda. L'event revealer può scegliere tra <b>investigate</b> o <b>consume</b> gli escrementi (sceglierne solo uno).

[TO] Scelta
[td] Event revealer - Cosa fai?
[c] Investigate #Investigate
[d<]

Guadagna +1 understanding e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-3
[d] Scopri quanto sia disgustoso giocare con le feci. Perdi 1 survival e tira nuovamente sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
[c] 4-6
[d] Gli escrementi raccontano una storia. Sei sulla pista giusta. Guadagna +1 survival.
[c] 7+
[d] Conosci bene questi escrementi. Puoi saltare il prossimo hunt space. Se questo movimento fa iniziare lo showdown, i sopravvissuti <b>ambush</b> la preda.
[T]

[>d]
[c] Consume #Consume
[d<]

Guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Event revealer - Consume
[c] 1-3
[d<]

Sembra che tu non sia stato l'unico con questa idea! Tenti di sputare via il tutto, ma la tua bocca è piena di parassiti che si dimenano! Si accingono a risalire attraverso le tue cavità nasali fino al cervello. Da adesso in poi, avrai un leggero mal di testa. Subisci -1 evasion permanente.
[i] In più, se possiedi il disorder <b>Quixotic</b>, i parassiti assaporano l'unica attività neurale del tuo cervello, nutrendosi incessantemente ed espellendo rifiuti che alimentano ulteriormente la tua follia. Guadagna +10 insanity e il disorder <b>Immortal</b>. Il tuo disorder <b>Quixotic</b> non può essere rimosso per alcun motivo.

[>d]
[c] 4-6
[d] È ripugnante. Il tuo soprannome adesso è "Scat Man." Da ora in poi tutti i sopravvissuti del settlement ti chiameranno con questo nome.
[c] 7+
[d] C'era qualcosa di molto speciale nelle feci. Guadagna + 1 speed e + 1 strength token.
[T]

[>d]
[T]
`,

  12: `12 | Legati al Destino

[img] 12 # no-shadow

I sopravvissuti sentono collettivamente un forte senso di previsione. Il loro obbiettivo è vicino.

L'event revealer guadagna +1 courage! I sopravvissuti possono saltare il prossimo hunt space. Se questo movimento fa iniziare lo showdown, i sopravvissuti <b>ambush</b> la preda.
`,

  13: `13 | Sovraccarico
L'event revealer cade in ginocchio, singhiozzando incontrollabilmente. Ne ha abbastanza. Perde 1d10 survival e guadagna 1 disorder casuale.

[TO] Choice
[td] Quale Society Principle possiede il settlement?
[c] Accept Darkness
[d<]

L'event revealer abbraccia la disperazione. Tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] La tua sofferenza ha raggiunto un livello che non avresti mai immaginato. Guadagna disorders finchè non ne possiedi 3. Perdi tutti i survival.
[c] 6+
[dt] Sei gettato nello sconforto più totale ma ti rialzi, ancora più affamato! Scopri una rabbia primordiale che circonda un cuore calmo e sereno. Guadagna +1 understanding e il disorder <b>Rageholic</b>.
[>d]
[c] Collective Toil
[d<]

Ti alzi lentamente in piedi, promettendo di non perdere mai la speranza. Tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Ti rialzi, lacrime silenziose rigano il tuo viso. Con il settlement alle tue spalle, sei pronto ad affrontare l'oscurità. Guadagna +1 courage e +1d10 survival.
[c] 6+
[dt] Ti disperi e torni alla piena consapevolezza con nuove esperienze da condividere. Se un sopravvissuto ritorna al settlement quest'anno, guadagna +2`+endeavor_img+`.

[>d]
[c] No Society Principle
[dt] I sopravvissuti continuano la loro caccia.
`,

  14: `14 | Incontro Casuale

[img] 14

I sopravvissuti incontrano un'affascinante fanciulla scalza con i piedi ricoperti di fuliggine.

[TO] Check
[td] Hai già tirato questo evento o tutti i sopravvissuti sono insane?
[c] Si #
[d] Lei volta le spalle e scompare nell'oscurità. Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
[c] No #
[d<]

Urlando selvaggiamente ai sopravvissuti, la presenza della donna riempie tutti di uno strano sentimento di speranza. Tutti i sopravvissuti guadagnano +1 courage e +1 understanding.

[TO] Controlla
[td] L'insediamento possiede Hovel?
[c] Si #Hovel
[d] Schiocca le dita e invecchia davanti ai loro occhi! Un brivido scorre sui sopravvissuti. I loro corpi e le loro armature si ricongiungono spontaneamente. Cura tutte le ferite e i punti armatura persi. Quindi, prende da parte un sopravvissuto a caso e sussurra i segreti della caccia imminente. Questo guadagna un token +1 accuracy.
[c] No #
[dt] Lei volta le spalle e scompare nell'oscurità.
[>d]
[T]
`,

  15: `15 | Trappola per Umani

[img] 15 # no-shadow

L'event revealer fa scattare una terribile trappola! Tira 1d10.
[TO] 1d10
[td] Event revealer
[c] 1-2
[d] Con un terribile schianto, le ganasce d'acciaio della trappola per umani ti tagliano di netto il piede. Subisci la severe injury <b>dismembered leg</b>.
[c] 3-6
[d] Gamba maciullata. Distruggi tutta l'armatura nella legs location, poi subisci 1 event damage alle gambe.
[c] 7-9
[d] La trappola è piuttosto vecchia e debole. Subisci 1 event damage alle gambe.
[c] 10+
[d] Il piede dell'event revealer cade nella trappola, spaventando tutti! Tuttavia, era già scattato, lasciando tra le ganasce uno sfortunato premio. Guadagna 1 basic resource casuale.
[T]
`,

  16: `16 | Notte di Terrori
Il vostro sonno miserabile è afflitto da incubi sconvolgenti. Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto - Il risultato è maggiore dell'insanity?
[c] Si
[d] Impari qualcosa da quell'orrore che ti sveglia e guadagni +1 understanding.
[c] No
[d] Guadagna 1 disorder casuale.
[c] Il sopravvissuto è un savior o possiede la fighting art <b>Extra Sense</b>
[dt] Scompare in un sogno, emergendo ore dopo dall'oscurità. Guadagna +4 Hunt XP e una basic resource casuale.
`,

  17: `17 | Faccia a Faccia
In mezzo al mare di facce di pietra, una di queste cattura l'attenzione dell'event revealer. Si  sente obbligato a <b>investigate</b>. Guadagna +1 courage e tira 1d10.
[TO] 1d10
[td] Event revealer
[c] 1
[d] Il volto è identico al tuo. Spendi 1d5 survival o riduci il tuo understanding a 0.
[c] 2-7
[d] Il volto ricorda un tuo caro. Il tuo cuore soffre la solitudine. Se i tuoi survival sono maggiori dela tua insanity, subisci ★ brain event damage.
[c] 8+
[dt] Il volto è il tuo, ma più vecchio e saggio. Guadagna +1 survival e +1 understanding.
`,

  18: `18 | Erba Morta

[img] 18 # no-shadow # width:35%

Trovi una strana pianta che cresce dagli occhi di un volto di pietra. L'event revealer prova a raccoglierla. Tira 1d0.

[i] Se un sopravvissuto possiede un falcetto, aggiungi +4 al tiro.

[TO] 1d10
[td] Event revealer
[c] 1-7
[d] Per quanto tu possa provare, non riesci a estrarre l'erba dalle radici profonde.
[c] 8+
[dt] Tiri via l'erba! Ha un enorme potere rigenerativo. Ogni sopravvissuto se la strofina sulla pelle e rimuove 1 severe injury permanente. Poi diventa polvere tra le tue mani.
`,

  19: `19 | Esalazione di Oscurità

[img] 19 # width:25%

I sopravvissuti sono avvolti in un'oscurità piena di vapore che attenua le luci delle loro lanterne. Si separano l'uno dall'altro e si perdono irrimediabilmente.

[TO] Controlla
[td] Almeno uno dei sopravvissuti possiede la fighting art <b>Leader</b>?
[c] Si #Leader
[d] Avanza coraggiosamente nell'oscurità umida e raduna tutti. Termina questo evento.
[c] No #
[d<]

Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler. Ogni straggler tira 1d10.

[TA] 1d10
[td] Straggler
[c] 1-2
[d] Inciampi e cadi nelle ossa di un antico mostro, rompendo un pezzo di equipaggiamento durante la discesa. Archivia 1 gear a tua scelta dalla griglia equipaggiamento.
[c] 3-5
[d] Qualcosa di invisibile ti attacca, subisci 1 brain event damage e 1 event damage a una location casuale.
[c] 6-8
[d] Sbatti nel naso di una gigantesca faccia di pietra! Subisci 1 event damage alla testa.
[c] 9+
[dt] Non sei sicuro di come sia possibile, ma lasci l'oscurità con le mani occupate. Guadagna 1 basic resource casuale.

[>d]
[T]
`,

  20: `20 | Terre Aride
Mentre i sopravvissuti avanzano, l'aria diventa secca e il terreno si incrina. I sopravvissuti sono indeboliti dall'eccessivo calore. Ogni sopravvissuto perde 1 survival. Se stanno indossando dell'equipaggiamento fur o heavy, perdono invece 1d5 survival.

[TO] Check
[td] Almeno un sopravvissuto possiede un piccone?
[c] Si #Piccone
[d] I sopravvissuti aprono una vena dall'aspetto interessante nel terreno screpolato. Guadagna 1 <b>Iron</b> strange resource.
[c] No #Niente piccone
[dt] I sopravvissuti continuano la loro caccia.
`,

  21: `21 | Disegni
Rannicchiati in una grotta, i sopravvissuti trovano strani disegni che decorano le pareti. Sembrano contenere un messaggio.

[TO] Controlla
[td] Almeno uno dei sopravvissuti possiede +3 understanding o l'insediamento possiede Pictographs?
[c] Si #Decifra

[d<]

[i] Se l'insediamento possiede <b>Pictographs</b>, ogni sopravvissuto può tirare (a prescindere dal suo understanding) e aggiungere +4 al tiro.

[TA] 1d10
[td] Un sopravvissuto con 3+ understanding
[c] 1-3
[d] Il tuo naso comincia a sanguinare. Subisci ★ brain event damage.
[c] 4-7
[d] Il reale significato ti sfugge. Guadagni +1 insanity.
[c] 8+
[dt] I disegni ti insegnano un nuovo modo di combattere i mostri! Guadagna +2 survival e una fighting art casuale.
[>d]

[c] No
[d] I sopravvissuti continuano la loro caccia.
[T]
`,

  22: `22 | Pioggia Acida
L'oscurità avvolgente è improvvisamente illuminata da una tempesta di pioggia acida. Ha un odore terribile, brucia la carne e forma pozze sibilanti nelle bocche delle facce di pietra. Tutti i sopravvissuti subiscono ★ event damage a ogni hit location mentre si affrettano a trovare un riparo.

[TO] Controlla
[td] L'insediamento possiede Sculpture?
[c] Si #Sculpture
[d<]

I sopravvissuti osservano in silenzio la tempesta erodere le facce di pietra, cancellandone i lineamenti. Si chiedono esattamente chi o cosa potrebbe riparare i volti rotti, se esiste qualcosa del genere. I sopravvissuti condividono un'oscura risata, e ognuno guadagna ★ survival.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] La tempesta termina.
[c] 6+
[dt] La tempesta si sposta verso casa. Aggiungi <b>Acid Storm</b> settlement event nella timeline il prossimo anno.

[>d]
[c] No #No Sculpture
[d<]

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] La tempesta termina.
[c] 6+
[dt] La tempesta si sposta verso casa. Aggiungi <b>Acid Storm</b> settlement event nella timeline il prossimo anno.

[>d]
[T]
`,

  23: `23 | Acqua Limpida
I sopravvissuti passano davanti a una fontana abbandonata con la forma di un volto di leone. Dalla sua bocca sgorga un ruscello di acqua cristallina. Ogni sopravvissuto <b>consumes</b> l'acqua, guadagnando +1 survival e +1 courage. Un numero qualsiasi di sopravvissuti può immergere la testa nell'acqua e tirare 1d10.

[TA] 1d10
[td] Any survivor
[c] 1-2
[d] Nell'istante in cui si bagna, i tuoi capelli diventano completamente bianchi. Guadagna 1 disorder casuale.
[c] 3-5
[d] I tuoi capelli sono bagnati. Congratulazioni.
[c] 6-8
[d] L'acqua è tonificante. Guadagna +1 understanding o rimovi un disorder a tua scelta.
[c] 9+
[d] L'acqua è incredibilmente fredda! Ti travolge come un maremoto e ti lascia sbalordito. Imposta la tua insanity a 0 e rimuovi tutti i disorder.
[T]
`,

  24: `24 | Cibo dalle Bocche degli Altri

[img] 24 # no-shadow

I sopravvissuti passano davanti a un volto di pietra che sembra tenere qualcosa in bocca. L'event revealer <b>investigate</b>. Guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d] Urli di dolore e tiri indietro la mano, rivelando uno squarcio sanguinante. La faccia di pietra ti ha appena morso? Subisci ★ brain event damage e ★ arm event damage.
[c] 3-5
[d] Non c'è nulla. Era solo un inganno della luce della lanterna.
[c] 6-8
[d] Altra roccia, che ti aspettavi? Guadagna 1 </b>Founding Stone<b> equipaggiamento iniziale.
[c] 9+
[d] Tiri fuori una massa masticata. Guadagna 1 basic resource casuale e 2 insanity.
[T]
`,

  25: `25 | Titani nell'Oscurità

[img] 25 # no-shadow # width:50%

Un muggito assordante segna il passaggio di una bestia davvero titanica. Tutti i sopravvissuti <b>non-deaf</b> subiscono ★ brain event damage. I sopravvissuti si rannicchiano a terra, sdraiati il più possibile, sperando che siano semplicemente troppo piccoli per valere la pena essere mangiati.
Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[i] Se un sopravvissuto indossa dell'equipaggiamento <b>noisy</b>, -2 al proprio tiro.

[TO] 1d10
[td] Determina lo straggler
[c] Straggler scelto
[d<]

Ogni straggler tira 1d10.

[TA] 1d10
[td] Straggler
[c] 1
[d<]

Sei raccolto da terra e divorato per intero.

[TO] Controlla
[td] L'insediamento possiede Survival of the Fittest?
[c] Si #Survival of the Fittest
[d] Esci dalla sua bocca e atterri con un tonfo. Subisci le severe injury <b>broken arm</b> e <b>broken leg</b> ma non muori.
[c] No #
[dt] Morto.

[>d]
[c] 2-4
[d] Qualcosa ti afferra nelle sue grandi fauci e ti mastica subendo 1 event damage a 1d5 hit location casuali.
[c] 5-6
[d] Le enormi fauci ti mordono a malapena! Subisci ★ event damage a una hit location casuale.
[c] 7-9
[d] Ti appiattisci contro il suolo ed eviti qualcosa di terribile.
[c] 10+
[dt] Non smetterai mai di correre da ciò che hai visto. Guadagna +1 movement permanente.
[>d]
[T]
`,

  26: `26 | Fossa
Il terreno sotto i piedi dell'event revealer cede e precipita in una fossa sottostante. L'event revealer tira 1d10.

[TO] 1d10
[td] Event revealer
[c] Un sopravvissuto possiede una frusta #Frusta
[d] Te la lancia in tempo; non tirare sulla tabella.
[c] L'event revealer possiede la fighting art <b>Tumble</b> #Tumble
[d] Afferri agilmente una sporgenza e ti sollevi; guadagna +1 speed token e non tirare sulla tabella.
[c] 1
[d] Atterri con uno scricchiolio disturbante, maciullandoti le gambe. Subisci la severe injury <b>broken leg</b> due volte.
[c] 2-3
[d] La tua gamba interrompe la caduta. Subisci la severe injury <b>broken leg</b>.
[c] 4-6
[d] Atterri sul fondo con un forte tonfo. Subisci 2 event damage a una hit location casuale e archivia tutto l'equipaggiamento <b>fragile</b> nella tua griglia equipaggiamento.
[c] 7-9
[d] Atterri sul fondo con un leggero tonfo. Subisci 1 event damage a una hit location casuale.
[c] 10+
[dt] Riesci ad afferrare il bordo della fossa e fuggire illeso.
`,

  27: `27 | Ruba-Uomini

[img] 27 # no-shadow

Esausti, i sopravvissuti riposano. Durante il loro sonno agitato, un piccolo insetto si avvicina inosservato.

Scegli 1 sopravvissuto maschio casuale e tira sula tabella.

[TO] Scelta
[td] Seleziona un sopravvissuto maschio casuale
[c] Sopravvissuto scelto
[d<]

Tira 1d10.

[TO] 1d10
[td] Sopravvissuto maschio
[c] Possiede la fighting art <b>Unconscious Fighter</b> #Unconscious Fighter
[d] Schiaccia l'insetto mentre continua a russare. Si sveglia, confuso, con una vermin resource casuale nelle sue mani.
[c] 1-5
[d] Quando ti svegli, i tuoi genitali sono stati rubati. Al loro posto non c'è altro che pelle liscia. Subisci la severe injury <b>destroyed genitals</b>.
[c] 6+
[dt] Ti svegli di soprassalto, terrorizzato nel vedere delle minacciose tenaglie avvicinarsi. Le tue difese sono rapide. Senza pensare, colpisci l'insetto che striscia sui tuoi pantaloni, subendo 1 event damage alla waist.

[>d]
[c] Nessun sopravvissuto maschio
[d] Non succede nulla.
[T]
`,

  28: `28 | Trollbird

Un uccello arruffato e orribile si trova sul percorso dei sopravvissuti. I suoi occhi luccicanti e bagnati si chiudono per l'eccitazione e richiama l'attenzione con una inquietante risatina umana. I sopravvissuti possono archiviare 1 oggetto o equipaggiamento <b>consumable</b>, offrendolo al trollbird.

[i] Se un sopravvissuto è insane, deve nutrire il trollbird, se può.

[TO] Scelta
[td] Cosa fate?
[c] Nutrire l'uccello #Nutri
[d] Dai da mangiare al trollbird e lui vola via con una risatina terribile.
[c] Ignora l'uccello #Ignora
[d<]

Il trollbird segue i sopravvissuti nella loro caccia, deridendoli costantemente con le sue risatine. Tira 1d10.

[i] Se un sopravvissuto possiede il disorder <b>Coprolalia</b>, impreca contro l'uccello e compie gesti vigorosi e volgari. L'uccello è impressionato. Aggiungi +3 al tiro.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Il trollbird fa un terribile fracasso, allertando il mostro. Tutti i sopravvissuti guadagnano +1 understanding. All'inizio dello showdown, il mostro <b>ambushes</b> i sopravvissuti.
[c] 6+
[dt] Il trollbird prende in giro e distrae il mostro mentre i sopravvissuti si avvicinano di soppiatto. Tutti i sopravvissuti guadagnano +1 insanity. All'inizio dello showdown, i sopravvissuti <b>ambush</b> il mostro.
[>d]
[T]
`,

  29: `29 | Fabbro Oscuro

[img] 29 # no-shadow

I sopravvissuti incrociano il passo con un uomo alto e innaturalmente magro con una tunica con cappuccio. Dove i suoi piedi toccano il suolo, delle scintille illuminano il suo cammino. Ogni sopravvissuto con 3+ courage può donargli un pezzo di equipaggiamento dalla sua griglia equipaggiamento e tirare sulla tabella.

[i] Se possiedi il disorder Honorable, aggiungi +3 al tiro.

[TA] 1d10
[td] Qualsiasi sopravvissuto con 3+ courage
[c] 1-2
[d] La creatura porta l'oggetto alla bocca e lo mangia. È perduto. Archivia la carta equipaggiamento.
[c] 3-6
[d] La creatura rifiuta l'equipaggiamento e ti fissa con un unico, grande occhio. Subisci 1d10 brain event damage.
[c] 7-8
[d] La creatura spalanca la mascella e mangia l'equipaggiamento. In cambio, ti consegna uno scudo splendente. Guadagna lo <b>Steel Shield</b> rare gear.
[c] 9+
[dt] La creatura spalanca la mascella e mangia l'equipaggiamento. In cambio, ti consegna una spada splendente. Guadagna la <b>Steel Sword</b> rare gear.
`,

  30: `30 | Volti Marci
I volti di pietra iniziano a cedere sotto i piedi dei sopravvissuti. Sono rigonfi e hanno un odore terribile. Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1
[d] Il tuo piede si blocca e inizi rapidamente ad affondare nel terreno. Con qualche sforzo riesci a liberarti. Se possiedi una leg armor, è persa nel fango. Spendi 3 survival o archivia l'equipaggiamento.
[c] 2-5
[d] Sei impantanato, ti sforzi per liberarti! Tira di nuovo su questa tabella o spendi 1 survival per fuggire.
[c] 6-9
[d] Riesci a fuggire senza difficoltà.
[c] 10+
[dt] Trovi qualcosa di strano che sbuca dal marciume! Guadagna 1 basic resource casuale.
`,

  31: `31 | Strano Sentiero
I sopravvissuti si fermano all'inizio di un sentiero. Le piccole lanterne brillano, segnandone i contorni.

L'event revealer deciderà se i sopravvissuti dovranno percorrere o meno il sentiero.
[i] Se l'event revealer è <b>insane</b>, dovrà seguirlo.

[TO] Scelta
[td] Event revealer - Percorri il sentiero?
[c] Si #Percorri
[d<]

L'event revealer guadagna +1 understanding, dopodichè tira 1d10 e aggiunge il suo understanding.

[TO] 1d10
[td] Event revealer
[c] 1
[d] Un dito colossale scende dall'alto, schiacciando un sopravvissuto casuale. Subisce 2 event damage a tutte le hit location.
[c] 2-4
[d] Un sopravvissuto casuale fugge in preda al panico percorrendo un sentiero secondario. Ritornerà ore dopo, visibilmente pallido e senza alcun ricordo di quanto accaduto. Perde 1d10 survival.
[c] 5-7
[d] Il sentiero si snoda vertiginosamente nelle tenebre. Tutti i sopravvissuti subiscono 1 brain event damage e l'event revealer tira nuovamente sulla tabella, aggiungendo +2 al tiro.
[c] 8-9
[d] Il sentiero conduce i sopravvissuti a un grande volto di pietra con lanterne al posto degli occhi. All'interno della bocca vi è un premio. Ogni sopravvissuto guadagna 1 basic resource casuale.
[c] 10+
[d<]

Il sentiero conduce alla bestia a cui stai dando la caccia! I sopravvissuti <b>ambush</b> il mostro.
[i] Se un sopravvissuto possiede il disorder <b>Honorable</b>, si rende conto del suo modo incosciente di agire e può rimuovere il disorder. Se un sopravvissuto mantiene il disorder <b>Honorable</b>, annuncia la sua presenza al mostro; il mostro invece <b>ambushes</b> i sopravvissuti.

[>d]
[T]

[>d]
[c] No #Non percorrere
[dt] Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  32: `32 | Follia Improvvisa
L'event revealer è devastato da una cacofonia che risuona nella sua testa. Tira 1d10.

[TO] 1d10
[td] Event revealer
[c] Il risultato è minore o uguale alla insanity attuale #
[d<]

Impazzisce, scagliandosi contro i suoi compagni! Ogni sopravvissuto subisce 1 event damage a una hit location casuale prima che l'event revealer riprenda il controllo di sè.

[TO] Controlla
[td] L'event revealer possiede la fighting art <b>Crazed</b>?
[c] Si #Crazed
[d] Accresce il suo intuito per questa dura prova. Guadagna +10 insanity e +2 understanding.
[c] No #
[d] Non apprende nulla da questa esperienza.
[T]

[>d]
[c] Il risultato è maggiore della insanity attuale #
[d<]

Riprende il controllo di sè.

[TO] Controlla
[td] L'event revealer possiede la fighting art <b>Crazed</b>?
[c] Si #Crazed
[d] Accresce il suo intuito per questa dura prova. Guadagna +10 insanity e +2 understanding.
[c] No #
[d] Non apprende nulla da questa esperienza.
[T]

[>d]
[T]
`,

  33: `33 | Egli Sussurra il Tuo Nome

[img] 33

L'event revealer inciampa su un naso sporgente nel terreno. Le labbra del viso di pietra cominciano a muoversi!

[TO] Controlla
[td] L'event revealer possiede un nome?
[c] Si #
[d<]

Le labbra sussurrano in maniera seducente il nome del sopravvissuto.

[TO] Controlla
[td] L'event revealer è insane?
[c] Si #Insane
[d<]

Viene attirato, baciando selvaggiamente il viso. Disgustati e indignati, gli altri sopravvissuti subiscono 1 brain event damage prima di rialzare da terra il folle sopravvissuto e proseguire.

[TO] Controlla
[td] Un sopravvissuto possiede l'impairment <b>Marrow Hunger</b>?
[c] Si #Marrow Hunger
[d] La faccia sussurra segretamente lo scopo della sua vita. Guadagna +1 strength permanente. Aggiungi il settlement event <b>Murder</b> alla timeline il prossimo anno.
[c] No #
[d] I sopravvissuti continuano la loro caccia.
[T]

[>d]
[c] No #Not insane
[d<]

Guadagna +1 understanding, percependo di aver imparato qualcosa.
[TO] Controlla
[td] Un sopravvissuto possiede l'impairment <b>Marrow Hunger</b>?
[c] Si #Marrow Hunger
[d] La faccia sussurra segretamente lo scopo della sua vita. Guadagna +1 strength permanente. Aggiungi il settlement event <b>Murder</b> alla timeline il prossimo anno.
[c] No #
[d] I sopravvissuti continuano la loro caccia.
[T]

[>d]
[T]

[>d]
[c] No #
[dt] Le labbra smettono di muoversi e non succede nient'altro.
`,

  34: `34 | Miseria Paralizzante
Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[i] Se un sopravvissuto (o più sopravvissuti) possiede il disorder <b>Anxiety</b>, diventa straggler. Non tirare.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[d<]

Lo straggler si perde in un momento di profondo dubbio riguardo se stesso. Scivola, non avendo la volontà di aggrapparsi a qualcosa, e cade da una ripida collina di pareti di pietra. Atterra goffamente emettendo uno scricchiolio, e subisce la severe injury <b>broken leg</b>. Singhiozzando tra sé e sé, fa i conti con quanto sia terribile la sua vita e guadagna +1 understanding.

[TA] Controlla
[td] Lo straggler possiede il disorder <b>Binge Eating</b>?
[c] Si #Binge Eating
[d] Si asciuga le lacrime e alunga la mano verso una creatura vicina, infilandola istintivamente in bocca per cercare conforto. Pesca 1 vermin resource casuale e <b>consume</b>.
[c] No #No Binge Eating
[d] Nulla accade.
[T]

[>d]
[T]
`,

  35: `35 | Forno a Lanterna Rotto
I sopravvissuti si imbattono nelle rovine distrutte di un piccolo insediamento. Cadaveri color cenere punteggiano le rovine, disintegrandosi al minimo tocco. Al centro dell'insediamento si trova intatto un forno a lanterna spento.

L'event revealer tira 1d10 e aggiunge il suo understanding.

[TO] 1d10
[td] Event revealer
[c] 1-4
[d<]

[TO] Controlla
[td] L'insediamento possiede <b>Song of the Brave</b>?
[c] Si #Song of the Brave
[d<]

Il gruppo può nominare un coraggioso sopravvissuto per <b>investigate</b> sulle rovine della pila di lanterne dell'insediamento. Guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Sopravvissuto nominato
[c] 1-5
[d] Cerchi di entrare nella pila di lanterne in rovina, ma sei sopraffatto dalla paura, cadi e vomiti ovunque. Quando ti alzi, ti ritrovi fisicamente incapace di andare avanti. Guadagna il disorder <b>Apathetic</b>.
[c] 6+
[dt] Sei respinto dalla pila di lanterne in rovina, ma indugi abbastanza a lungo da afferrare un paio di insetti che stavano per rifugiarsi al suo interno. Guadagna 2 vermin resources a tua scelta.

[>d]
[c] No #
[d<]

I sopravvissuti continuano la loro caccia.

[>d]
[T]

[>d]
[c] 5+
[d<]

Guadagna l'innovation <b>Lantern Oven</b>:

<button class="hunt_event_action_button hoverable" id="lantern_oven" onClick="placeReminder('lantern_oven')">Gain Innovation</button>

[i] Se l'insediamento possiede già questa innovazione, l'event revealer raccoglie una <b>broken lantern</b> basic resource dai resti.

[TO] Controlla
[td] L'insediamento possiede <b>Song of the Brave</b>?
[c] Si #Song of the Brave
[d<]

Il gruppo può nominare un coraggioso sopravvissuto per <b>indagare</b> sulle rovine della pila di lanterne dell'insediamento. Guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Sopravvissuto nominato
[c] 1-5
[d] Cerchi di entrare nella pila di lanterne in rovina, ma sei sopraffatto dalla paura, cadi e vomiti ovunque. Quando ti alzi, ti ritrovi fisicamente incapace di andare avanti. Guadagna il disorder <b>Apathetic</b>.
[c] 6+
[dt] Sei respinto dalla pila di lanterne in rovina, ma indugi abbastanza a lungo da afferrare un paio di insetti che stavano per rifugiarsi al suo interno. Guadagna 2 vermin resources a tua scelta.

[>d]
[c] No #
[d<]

I sopravvissuti continuano la loro caccia.

[>d]
[T]

[>d]
[T]
`,

  36: `36 | Sulle Tracce
I sopravvissuti affrettano il passo, percependo la loro preda a portata di mano. Salta il prossimo hunt space. Se questo movimento fa partire lo showdown, i sopravvissuti <b>ambush</b> la loro preda.
[i] Se un sopravvissuto possiede equipaggiamento <b>noisy</b>, i sopravvissuti non effettuano l'imboscata. Inizia normalmente lo showdown.
`,

  37: `37 | Perduti
I sopravvissuti si perdono disperatamente in un'oscurità sconfinata. Muovi i sopravvissuti 2 spazi indietro sulla hunt board.
`,

  38: `38 | Gregalope

Un imponente Gregalope si erge all'orizzonte, il suo antico corpo è gonfio di tumori e tessuto cicatriziale. I suoi occhi bianchi scorgono i sopravvissuti e si allontana. Guidati da un profondo desiderio, i sopravvissuti provano a dargli la caccia. L'event revealer tira 1d10 e aggiunge il suo movimento al risultato.

[TO] 1d10
[td] Event revealer
[c] Un sopravvissuto possiede la fighting art <b>Strategist</b> #Strategist
[d<]
I sopravvissuti possono incrociare il Gregalope vicino un grande volto di pietra invece di seguirlo.

Se lo fanno, termina immediatamente la caccia.

Inizia lo showdown contro una Screaming Antelope livello 2, usando queste regole per il setup.
In aggiunta, piazza una <b>Giant Stone Face</b> adiacente al mostro e dai al mostro la trait card del Butcher <b>Berserker</b>.

Se i sopravvissuti uccidono la preda, guadagna le normali ricompense per lo showdown e aggiungi 3 risorse Screaming Antelope.

<button class="hunt_event_action_button hoverable" id="gregalope" onClick="placeReminder('gregalope')">Start showdown!</button>

[>d]
[c] 1-6
[d] I sopravvissuti cadono rovinosamente inseguendo la maestosa bestia. Muovi i sopravvissuti 1 spazio indietro dalla preda sul tabellone della caccia.
[c] 7-14
[d] Il Gregalope è troppo veloce. Scompare prima che possa accorgertene.
[c] 15-16
[d] I sopravvissuti perdono di vista il Gregalope ma scoprono un sentiero nasconto. Puoi ritirare il prossimo risultato sulla tabella degli hunt event.
[c] 17+
[dt] Prima che sfugga alla vista, il Gregalope piega le sue possenti corna. L'esperienza cambia l'esausto event revealer. Guadagna +1 movement permanente.
`,

  39: `39 | Fitta Nebbia
Una fitta nebbia avvolge i sopravvissuti, oscurando le loro luci delle lanterne. Tira 1d10.

[TO] 1d10
[td] Event revealer
[c] Risultato Pari #Pari
[d] I sopravvissuti inciampano nella giusta direzione. Se lo showdown inizia nello spazio successivo del tabellone della caccia, il mostro <b>ambushes</b> i sopravvissuti.
[c] Odd result #Odd
[dt] I sopravvissuti vagano nel nulla; tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  40: `40 | Sogno
L'event revealer sogna la caccia imminente. Si erge di fronte la grande bestia, con le armi sguainate, ma questa lo sconfigge.

[TO] Controlla
[td] L'event revealer possiede 3+ courage o uno dei sopravvissuti è un savior?
[c] Si #
[d<]

L'event revealer è incoraggiato dal sogno e guadagna un token +1 evasion.

[TO] Controlla
[td] Un sopravvissuto possiede la <b>Twilight Sword</b>?
[c] Si #Twilight Sword
[d] Sogna un terribile massacro. Aggiungi il settlement event <b>Murder</b> sulla timeline a 1d5 anni da adesso.
[c] No #No Twilight Sword
[d] Nulla accade.
[T]

[>d]
[c] No #
[d<]

È soltanto un brutto sogno. Subisci 1 brain event damage.

[TO] Controlla
[td] Un sopravvissuto possiede la <b>Twilight Sword</b>?
[c] Si #Twilight Sword
[d] Sogna un terribile massacro. Aggiungi il settlement event <b>Murder</b> sulla timeline a 1d5 anni da adesso.
[c] No #No Twilight Sword
[d] Nulla accade.
[T]
[>d]
[T]
`,

  41: `41 | Incubo
L'event revealer sogna la caccia imminente. La grande bestia svanisce durante la battaglia e lo segue segretamente fino all'insediamento. Guarda impotente mentre divora tutti coloro che conosce e che ama.

L'event revealer guadagna +1d10 insanity e un token -1 evasion.

[TO] Check
[td] Nell'insediamento vi è un savior?
[c] Si #
[d<]

Il savior appare in sogno per difendere la propria casa. L'event revealer guadagna +1d5 survival.
[TO] Controlla
[td] Un sopravvissuto nell'insediamento o nel gruppo di caccia possiede la <b>Twilight Sword</b>?
[c] Si #Twilight Sword
[d] Si sveglia dal sogno e continua la sua caccia.
[c] No #No Twilight Sword
[dt] L'event revealer immagina una versione violenta di se stesso che brandisce la lama e massacra allegramente la bestia. Si sveglia, e trova accanto a se una <b>Twilight Sword</b>, emettendo un leggero ronzio contro il suo corpo. Istintivamente il sopravvissuto riconosce il peso della maledizione dell'arma e la promessa del suo potere. L'event revealer guadagna l'equipaggiamento raro <b>Twilight Sword</b>. Può inoltre scegliere <b>Twilight Sword</b> come sua proficiency nelle armi e guadagna +1 proficiency con quest'arma.

[>d]
[c] No #
[d<]

[TO] Controlla
[td] Un sopravvissuto nell'insediamento o nel gruppo di caccia possiede la <b>Twilight Sword</b>?
[c] Si #Twilight Sword
[d] Si sveglia dal sogno e continua la sua caccia.
[c] No #No Twilight Sword
[dt] L'event revealer immagina una versione violenta di se stesso che brandisce la lama e massacra allegramente la bestia. Si sveglia, e trova accanto a se una <b>Twilight Sword</b>, emettendo un leggero ronzio contro il suo corpo. Istintivamente il sopravvissuto riconosce il peso della maledizione dell'arma e la promessa del suo potere. L'event revealer guadagna l'equipaggiamento raro <b>Twilight Sword</b>. Può inoltre scegliere <b>Twilight Sword</b> come sua proficiency nelle armi e guadagna +1 proficiency con quest'arma.

[>d]
[T]
`,

  42: `42 | Chirurgo
Una carrozza cigolante si avvicina ai sopravvissuti. Vistosamente decorata di rosso e dorato, sui lati della carrozza sono scolpiti dei volti inquietanti. Un grande occhio tremante adorna la parte anteriore, mentre la porta della carrozza ricorda una bocca aperta. Da una piccola finestra, una mano grinzosa fa un cenno.
Un sopravvissuto con 3+ courage può scegliere di entrare nella carrozza.

[TO] Scelta
[td] Sopravvissuto con 3+ courage
[c] Entra
[d] Rimuovi un impairment o una severe injury e guadagna 1 disorder casuale.
[c] Non entrare
[d] I sopravvissuti continuano la loro caccia.
[T]
`,

  43: `43 | Carne Fresca
Uno sciame di insetti saltellanti indica ai sopravvissuti un mostro appena ucciso. Gli insetti predatori cercano di difendere il loro pasto, ma i sopravvissuti li respingono per rivendicare la preda.
Ogni sopravvissuto tira 2d10 e aggiunge la propria Hunt XP. Il sopravvissuto che ha effettuato il punteggio più alto (o i sopravvissuti, in caso di parità) schiaccia più insetti e vince il putrido premio. Guadagna 1 basic resource casuale e 1 vermin resource casuale.
`,

  44: `44 | Opportunità
Mentre indagano sulle tracce della loro preda, i sopravvissuti si rendono conto che stanno dando la caccia non a uno, ma a due mostri. Le due serie di tracce presto si separano, lasciando decidere all'event revealer quali tracce seguire.

[TO] Scelta
[td] Event revealer
[c] Tracce più grandi
[d] Continua la caccia normalmente.
[c] Tracce più piccole
[dt] Inizia lo showdown immediatamente. All'inizio dello showdown, il mostro subisce 5 ferite. Se i sopravvissuti risultano vittoriosi, guadagnano la metà delle basic resources e la metà delle monster resources (arrotondate per eccesso) come ricompensa nell'aftermath.
`,

  45: `45 | Valle Frastagliata
Una valle di pietre bianche e aguzze si apre davanti ai sopravvissuti, somigliante a delle fauci dentate. Mentre i sopravvissuti si spingono e si arrampicano attraverso le guglie frastagliate, scoprono che anche il taglio più superficiale fa sanguinare copiosamente. Ogni sopravvissuto subisce 1 event damage al body.
Se un sopravvissuto non possiede delle bende per arginare le ferite, tutti i sopravvissuti guadagnano 2 bleeding token!

[i] Se un sopravissuto possiede un piccone, può provare a convincere gli altri sopravvissuti a lasciarlo <b>investigate</b> ancora un po'. Se sono convinti, tira 1d10.

[TA] 1d10
[td] Sopravvissuto con il piccone - Investigate
[c] 1
[d] Le pietre bianche sono denti e i sopravvissuti si trovano in una bocca gigante! Ognuno deve spendere 1 survival per fuggire dalla bocca. Chiunque rimane all'interno è ridotto in poltiglia. Morto. Non guadagni i benefici di <b>Cannibalize</b>.
[c] 2-5
[d] La pietra bianca è estremamente dura. Quando i sopravvissuti finalmente la rompono, uno sciame di insetti si precipita fuori dai buchi. Guadagna 1 <b>Hissing Cockroach</b> vermin resource. Lo scavo ha richiesto molto tempo: tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
[c] 6+
[dt] I sopravvissuti trovano una crepa e la allargano. All'interno vi è qualcosa nascosto! Guadagna 1 <b>Iron</b> strange resource e 1 <b>Hissing Cockroach</b> vermin resource. Lo scavo ha richiesto molto tempo: tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  46: `46 | Fiume
I sopravvissuti giungono sulla riva di un fiume di sangue. I sopravvissuti <b>non-insane</b> subiscono 1 brain event damage alla vista di esso. I sopravvissuti devono <b>investigate</b> per seguire le tracce della preda. Ogni sopravvissuto tira 1d10.
Se nessun sopravvissuto riesce a trovare le tracce del mostro, tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

[TA] 1d10
[td] Ogni sopravvissuto - Investigate
[c] 1-2
[d] Perdi l'equilibrio e cadi nel fiume di sangue! Immediatamente, un enorme parassita si fa strada nella tua gola, sbranando le tue interiora mentre si fa strada. Subisci la body severe injury <b>broken rib</b>. Speri che sia tutto ciò che il parassita potrebbe fare.
[c] 3-5
[d] La vostra preda ha defecato nel sangue. Subisci 1 event damage hit location casuale per essere stato immerso a lungo nel sangue fecale troppo a lungo.
[c] 6-8
[d<]

Ti rendi conto che il fiume di sangue è pieno di cadaveri gonfi di mostri irriconoscibili. Ti senti in dovere di pescarne qualcuno! Guadagna 1 basic resource casuale.
[i] Se stai indossando dell'equipaggiamento <b>heavy</b>, cadi dentro e ingoi sangue e pezzi molli e gonfi di mostri. Riduci i tuoi survival a 1.

[>d]
[c] 9+
[dt] Trovi le tracce del mostro con successo.
`,

  47: `47 | Alberi da Banchetto
Un piccolo boschetto di alberi si erge su una pianura altrimenti priva di vita. Allettanti frutti rossi pendono dai rami. Ogni sopravvissuto deve spendere 1 survival per resistere alla tentazione di <b>consume</b> il frutto.

I sopravvissuti <b>insane</b> e quelli con il disorder <b>Binge Eating</b> devono <b>consume</b>.

[i] Se un sopravvissuto possiede un falcetto, traccia un taglio lungo l'albero, facendo fuoriuscire del sangue! Il frutto marcisce all'istante. Termina questo evento.

[TA] 1d10
[td] Un sopravvissuto - Consume
[c] 1-5
[d] Il frutto assuefante ti devasta dall'interno. Perdi 1 survival e tira di nuovo su questa tabella. Se non possiedi survival, subisci 2 event damage a una hit location casuale.
[c] 6+
[dt] Rutti rumorosamente molto soddisfatto e prosegui.
`,

  48: `48 | Scommessa Mortale

[img] 48 # width:25%

I sopravvissuti vengono svegliati da un viaggiatore nascosto in una lunga mantella. Il viaggiatore tira indietro il cappuccio e rivela un viso deforme con due menti incurvati in allontanamento l'uno dall'altro, ciascuno con la propria bocca ghignante.

In uno stato onirico, tutti i sopravvissuti capiscono che questa entità è conosciuta come Il Giocatore e se parleranno moriranno. Fino al completamento dell'evento, solo l'event revealer può parlare. Se un altro giocatore parla, il suo sopravvissuto diventa freddo. Morto. I sopravvissuti devono giocare al gioco del Giocatore o rimanere intrappolati con lui per sempre. Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1
[d] Il Giocatore allunga la mano e raccoglie i tuoi dadi. Mentre svaniscono in una piega del suo mantello, senti che tutta l'aria sta lasciando i tuoi polmoni e non riesci a tirare un altro respiro. Morto.
[c] 2-9
[d] Non perdi, né vinci. Gioca di nuovo se lo desideri. Se lo fai, tira di nuovo su questa tabella.
[c] 10+
[dt] Hai vinto. Guadagna +1 luck permanente.
`,

  49: `49 | Campi di Pus
Il paesaggio è costellato di grandi bubboni gonfi che trasudano pus. Il più piccolo urto minaccia di farli esplodere. I sopravvissuti possono <b>camminare con cautela</b> attraverso i bubboni o <b>attraversarli di corsa</b>.

[TO] Scelta
[td] Cosa fate?
[c] Camminare con Cautela
[d] Ce la fai senza incidenti, ma i tuoi progressi vengono rallentati. Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
[c] Attraversarli di corsa
[dt] Ogni sopravvissuto tira 1d10 e aggiunge la sua evasion al risultato. Con un risultato di 7 o meno, fa esplodere uno dei bubboni! Subisce 2 event damage hit location casuale e diventa <b>stinky</b> per il resto di questo anno della lanterna.
`,

  50: `50 | Gogna
Una gabbia di ferro grezzo oscilla dai rami di un albero massiccio. Mentre i sopravvissuti si avvicinano, un uomo li chiama dalla gabbia, implorando di essere liberato.

[TO] Scelta
[td] Cosa fate?
[c] Passate oltre
[d] I sopravvissuti ignorano l'uomo e subiscono 1 brain event damage mentre il prigioniero piange e supplica.
[c] Lo liberate
[d<]

L'event revealer tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1
[d] I sopravvissuti aprono la gabbia ma tutto ciò che trovano all'interno è uno scheletro. Tutti i sopravvissuti subiscono 2 brain event damage.
[c] 2-7
[d] Il prigioniero è grato e segue i sopravvissuti fino al loro riposo. Quando si svegliano, ogni sopravvissuto perde 1 resource casuale (se ne ha una).
[c] 8+
[dt] Il prigioniero è grato e segue i sopravvissuti a casa dopo lo showdown. L'insediamento guadagna +1 popolazione.
[>d]
[T]
`,

  51: `51 | Profughi
I sopravvissuti incontrano un gruppo di persone in fuga.

[TO] Controlla
[td] L'insediamento possiede <b>Symposium</b> e <b>Language</b>?
[c] Si #Symposium e Language
[d<]

I sopravvissuti riescono a comunicare con molta fatica. I sopravvissuti possono offrire una risorsa o equipaggiamento per aiutare i profughi in difficoltà.

[TO] Scelta
[td] Condividi risorsa o equipaggiamento?
[c] Si #Condividi
[d<]

Archivia l'offerta. I profughi provano a condividere la loro triste storia. Sebbene molto si perda nella traduzione, raccontano la terribile invasione di un mostro che ha distrutto la loro casa. Il racconto prepara i sopravvissuti a ciò che li attende. All'inizio dello showdown, rivela le prime 5 Al cards dell'Al deck e rimettile in cima in qualsiasi ordine.
[i] Se un sopravvissuto possiede la fighting art <b>Leader</b>, uno dei profughi viene guidato dal suo carisma. Guadagna +1 popolazione.

[>d]
[c] No #Non Condividere
[dt] I sopravvissuti continuano la loro caccia.
[>d]
[c] No #
[d] I sopravvissuti continuano la loro caccia.
[T]
`,

  52: `52 | Insetti della Follia
Minuscoli e persistenti insetti ronzano attorno ai sopravvissuti, infilandosi nelle loro orecchie e nelle loro narici. Gli insetti ronzano in modo esasperante nelle loro teste, diventando più rumorosi mentre nidificano.
Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1-2
[d] Ti immergi in una palude vicina per scacciare gli insetti disgustosi. Funziona, ma ora sei completamente occupato a sputare via i minuscoli cadaveri di insetti. Guadagna un token -1 evasion.
[c] 3-7
[d] Il ronzio cessa immediatamente e le mosche fuggono. Il loro rifiuto ti fa sentire stranamente scoraggiato. Guadagna +1 insanity.
[c] 8+
[d<]

Le loro uova maturano molto rapidamente e gli insetti fuoriescono dalla tua bocca! L'esperienza è raccapricciante, ma ti fa sentire pieno di energie! Subisci il brain trauma <b>frenzy</b>.
[i] Se possiedi il disorder <b>Rageholic</b> o la fighting art <b>Berserker</b>, dare vita a delle creature raccapriccianti alimenta la tua ira. Subisci nuovamente il brain trauma <b>frenzy</b>.

[>d]
[T]
`,

  53: `53 | Venditore di Maschere
I sopravvissuti incontrano un Venditore di Maschere lungo la strada. Insiste sul fatto che ha delle merci speciali da offrire.
Mescola una copia di ciascun equipaggiamento maschera dal settlement location Mask Maker e pescane una casuale. Il venditore offre questa maschera. L'event revealer tira 1d10 per determinare il prezzo, poi guadagna la maschera.

[TO] 1d10
[td] Event revealer
[c] 1-3
[d] Il venditore ti indica in silenzio. Istintivamente gli porgi il prezzo richiesto in cambio della maschera. Archivia 1 equipaggiamento a tua scelta dalla tua griglia equipaggiamento e perdi tutti i survival.
[c] 4-7
[d] Il venditore fa un piccolo accenno a un'offerta. Archivia 1 equipaggiamento a tua scelta dalla tua griglia equipaggiamento.
[c] 8+
[dt] Mentre ti dona la maschera, le labbra del venditore sussurrano il tuo nome. Svanisce. Dai al sopravvissuto un nuovo nome (deve essere diverso) e guadagna +1 survival per aver dato un nome al sopravvissuto.
`,

  54: `54 | Tempesta di Ossa
Forti venti squarciano il paesaggio, raccogliendo frammenti di pietre e resti ossei. I sopravvissuti si stringono insieme all'avvicinarsi della tempesta.
Possono <b>affrontare la tempesta</b> o <b>aspettare che finisca</b>.

[TO] Scelta
[td] Cosa fate?
[c] Affrontare la tempesta
[d] Tutti i sopravvissuti guadagnano +1 courage e subiscono 1 event damage a 3 hit location casuali. Archivia tutto l'equipaggiamento <b>fragile</b>.
[c] Aspettare che finisca
[dt] Tira due volte sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  55: `55 | Colata di Fango
Un'improvvisa colata di fango spazza via i sopravvissuti. Ogni sopravvissuto tira 1d10.
[i] Un sopravvissuto che possiede una frusta, si aggrappa attorno a un osso a forma di pilastro e si mette in salvo; non tira sulla tabella.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1-2
[d] Sei trascinato violentemente, affogando nel fango. Subisci 2 event damage a una hit location casuale e archivia tutto l'equipaggiamento <b>fragile</b> e <b>soluble</b> nella tua griglia equipaggiamento. Tira di nuovo sulla tabella.
[c] 3-7
[d] Riesci a liberarti, ma non prima di aver subito un brutto colpo. Subisci 2 event damage al body e archivia tutto l'equipaggiamento <b>fragile</b> e <b>soluble</b> nella tua griglia equipaggiamento.
[c] 8-9
[d] Raggiungi un terreno più alto. Sei ricoperto di fango ma ne esci illeso.
[c] 10+
[dt] Ricordi di essere stato trascinato in profondità, la sensazione del fango che ti entrava in gola, poi nient'altro. Dopo che la colata termina, gli altri sopravvissuti ti trovano illeso. Guadagna +1 insanity.
`,

  56: `56 | Mostro Morto
I sopravvissuti trovano il cadavere di un mostro decomposto. È troppo marcio per ricavarne risorse.

[TO] Controlla
[td] Un sopravvissuto possiede 3+ understanding?
[c] Si #3+ understanding
[d<]

I sopravvissuti si coprono del sangue versato dal mostro morto. Il fetore li aiuterà a cogliere di sorpresa la loro preda. Quando inizia lo showdown, i sopravvissuti <b>ambush</b> il mostro.
[i] Se un sopravvissuto possiede il disorder <b>Squeamish</b>, rifiuta di sporcarsi. Non <b>ambush</b> il mostro.

[>d]
[c] No #
[dt] I sopravvissuti affamati banchettano con il cadavere in decomposizione, perdendo immediatamente il controllo delle loro viscere contorte. Ogni sopravvissuto perde 1 survival e non può <b>consume</b> per il resto di questo anno della lanterna.
`,

  57: `57 | Risata del Gorm
Il lamento ritmico della risata di un Gorm raggiunge i sopravvissuti, riempiendoli di paura. La risata segue i sopravvissuti, tormentandoli fino a quando non raggiungono la loro preda.

Piazza un segnalino in ogni spazio del tabellone della caccia tra i sopravvissuti e la loro preda. Quando i sopravvissuti si muovono in uno spazio con un segnalino, rimuovilo e tutti i sopravvissuti <b>non-deaf</b> subiscono 1 brain event damage.

<button class="hunt_event_action_button hoverable" id="gorms_laughter" onClick="placeReminder('gorms_laughter')">Piazza i segnalini</button>
`,

  58: `58 | Profumo nel Vento
Un vento forte soffia, portando con sé i profumi di luoghi e cose lontane.
L'event revealer tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Il mostro percepisce il tuo odore. Si avvicina di uno spazio. Se questo movimento fa iniziare lo showdown, il mostro <b>ambush</b> i sopravvissuti.
[c] 6+
[dt] I sopravvissuti sentono l'odore sgradevole della loro preda e si mettono sulle sue tracce. I sopravvissuti possono saltare il prossimo spazio. Se questo movimento fa iniziare lo showdown, i sopravvissuti <b>ambush</b> il mostro.
`,

  59: `59 | Segni di Battaglia
I sopravvissuti si imbattono nei resti di una terribile battaglia tra la loro preda e un nemico sconosciuto. L'event revealer può scegliere di <b>investigate</b>.

[TO] Scelta
[td] Event revealer - Cosa fai?
[c] Investigate
[d<]

L'event revealer guadagna +1 courage e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d<]
Il mostro fuoriesce dall'oscurità, approfittando dei sopravvissuti distratti.

Il mostro <b>ambush</b> i sopravvissuti.

Durante il setup dello showdown, piazza l'event revealer direttamente di fronte al mostro.

<button class="hunt_event_action_button hoverable" id="signs_of_battle" onClick="placeReminder('signs_of_battle')">Inizia lo showdown!</button>

[>d]
[c] 3-7
[d<]

I resti sono umani. I sopravvissuti sono sconvolti e infuriati, subiscono 1 brain event damage.
[i] Se l'insediamento possiede <b>Graves</b>, seppelliscono il cadavere e ogni sopravvissuto guadagna +1 survival.
[i] Se l'insediamento possiede <b>Cannibalize</b>, guadagna 1 basic resource casuale.

[>d]
[c] 8+
[d] La preda ha lasciato dietro di sé i resti di un altro mostro. Guadagna 1 basic resource casuale.
[T]

[>d]
[c] Ignora
[dt] Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  60: `60 | Grande Incendio
Un massiccio muro di fiamme ostacola i sopravvissuti, incenerendo il terreno. Ha distrutto tutto ciò che attendeva i sopravvissuti e ha lasciato il caos dietro di sé. Archivia tutte le carte hunt event nei prossimi due spazi. Piazza 2 carte basic hunt event in quegli spazi.
`,

  61: `61 | Fulmini di Ghiaccio
Una tempesta travolge i sopravvissuti. Un fulmine viola intenso lampeggia nel cielo. Le saette si congelano a metà del loro percorso e colpiscono i sopravvissuti in forma di punte frastagliate e luminose.
Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[dt] Un fulmine si schianta accanto lo straggler, intrappolandolo in un esplosione di cristalli affilati come rasoi. Subisce 1d5 event damage a 2 hit locations casuali. Archivia tutto l'equipaggiamento <b>fragile</b> dalla griglia equipaggiamento.
`,

  62: `62 | Fessura tra le Rocce
I sopravvissuti vengono distratti da una crepa oscura nel mare infinito dei volti di pietra.

[TO] Controlla
[td] Un sopravvissuto possiede un piccone?
[c] Si #Piccone
[d] Colpisce il terreno, allargando la crepa in un buco. Allungando coraggiosamente la mano, viene trovato un fusto annerito e contorto. Guadagna 1 <b>iron</b> strange resource.
[c] No #
[d<]

Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[dt] Lo straggler si china a guardare nel profondo e si rifiuta di smettere di fissarlo. Quando gli altri sopravvissuti lo trascinano via, comincia a balbettare qualcosa di incomprensibile. Qualunque cosa abbia visto lo ha cambiato per sempre; guadagna 1 disorder casuale. Se tutti i sopravvissuti diventano straggler, nessuno li aiuterà e saranno persi per sempre. Morti.

[>d]
[T]
`,

  63: `63 | Piedi

[img] 63 # width:35%

I volti di pietra più avanti vengono sostituiti da una distesa di piedi di pietra che spuntano dal terreno. I sopravvissuti camminano sulla pianta di questi piedi.

[TO] Controlla
[td] Tutti i sopravvissuti sono insane?
[c] Si #Tutti insane
[d<]

[TO] Controlla
[td] L'insediamento possiede Survival of the Fittest?
[c] Si #Survival of the Fittest
[d] Cadono nel terreno sottostante. I sopravvissuti mordono forte i piedi. I loro denti si frantumano contro la pietra, mentre si rifiutano di andare via. Improvvisamente, i piedi si frantumano, rivelando sotto di essi dei normali volti di pietra. Imposta tutta l'insanity dei sopravvissuti a 0. Ogni sopravvissuto subisce la head severe injury <b>shattered jaw</b>. Non tirare alcun evento addizionale causato da <b>Feet</b>.
[c] No #
[dt] Cadono dall'altro lato del mondo. I sopravvissuti periscono.

[>d]
[c] No #Qualcuno sane
[dt] Se un sopravvissuto è <b>insane</b>, sono convinti di aver raggiunto l'altra parte del mondo. Si aggrappano al terreno per avere salva la vita, terrorizzati di cadere. Il loro rauco terrore rallenta i sopravvissuti e attira attenzioni indesiderate. Tira una volta sulla hunt event table per ogni sopravvissuto <b>insane</b>prima di muoverti sul tabellone della caccia. Se uno di questi tiri ha come risultato <b>Piedi</b>, ignoralo e ritira.
`,

  64: `64 | Fontana di Pietra
Due mani di pietra a coppa emergono dal terreno. Le mani contengono acqua limpida e fredda che scorre attraverso le dita di pietra in un flusso apparentemente infinito. Ogni sopravvissuto può <b>consume</b> dalla fontana. Se lo fa guadagna +1 courage e tira 1d10.

Se nessuno consume, tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

[TA] 1d10
[td] Qualsiasi sopravvissuto - Consume
[c] 1-4
[d<]

L'acqua è limpida fino a quando non entra nelle labbra, dove improvvisamente si trasforma in sangue. Sputi il liquido ripugnante e subisci ★ brain event damage.
[i] Se possiedi il disorder <b>Hemophobia</b>, subisci anche ★ event damage al body mentre vomiti violentemente per il disgusto.

[>d]
[c] 5-8
[d] È acqua. Rinfrescante.
[c] 9+
[dt] L'acqua è pulita e pura, come nessun'altra mai assaggiata dal sopravvissuto. Guadagna +1 survival.
`,

  65: `65 | Statua

[img] 65

Salendo su una collina, i sopravvissuti trovano la statua di un uomo seduto su un trono.

[i] Se almeno un sopravvissuto possiede 5+ understanding, i sopravvissuti possono ignorare la statua e porre fine all'evento.

Altrimenti, ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (spareggio, in caso di parità) diventa straggler.
[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[d<]

Il sopravvissuto si avvicina alla statua, toccandola delicatamente. In un istante, scompare, sostituito dall'uomo del trono, ora in carne e ossa. Lo straggler si siede al suo posto sul trono, con la bocca di pietra aperta in un urlo silenzioso. È andato via per sempre. Consideralo morto, ma non applicare il death principle <b>Cannibalize</b>; non c'è nessun corpo.
[TO] Controlla
[td] L'insediamento possiede <b>Momento Mori</b>?
[c] Si #Momento Mori
[d] La statua assomiglia a un sopravvissuto deceduto. Rimpiazza lo straggler con il record sheet di un sopravvissuto caduto. Rimuovi tutte le severe injuries. Imposta l'Hunt XP a 2 (ripete l'evento Age, in quanto si tratta di una nuova vita). Guadagna +1d10 survival, +1d10 insanity. Può avere 3 gradi di proficiency in un tipo di arma casuale.
[c] No #
[dt] L'uomo ringrazia e si unisce al gruppo di caccia senza dare spiegazioni. È un nuovo sopravvissuto con l'equipaggiamento dello straggler, 2 disorders casuali, e 2 Hunt XP. Mescola tutte le carte weapon specialization (incluse quelle delle espansioni, se possibile) e pescane una. Il sopravvissuto possiede 3 gradi di proficiency inquel tipo di arma. Guadagna +1d10 survival, +1d10 insanity. Dagli un nome e +1 survival per avergli dato un nome.

[>d]
[T]
`,

  66: `66 | Parola Proibita
Si sente un gran rumore d'aria. Una voce roboante e inumana pronuncia una sola parola in una lingua sconosciuta. Per un istante i sopravvissuti capiscono.
Tutti i sopravvissuti <b>non-deaf</b> guadagnano +1 understanding e subiscono 1 brain event damage.
[i] Se sono <b>insane</b> guadagnano anche 1 disorder casuale.
`,

  67: `67 | Pozze di Saliva
Il terreno davanti è costellato di pozze piene di un liquido appiccicoso. Gorgogliano allegramente e puzzano di carne in digestione. Mentre i sopravvissuti si muovono tra di esse, vengono sopraffatti da ondate di nausea.

[TO] Controlla
[td] Un sopravvissuto possiede un falcetto?
[c] Si #Falcetto
[d<]

Tagliano alcune foglie da una pianta vicina e tutti le usano per tapparsi il naso e mascherare l'odore. Tutti i sopravvissuti guadagnano +1 understanding.

[TO] Controlla
[td] Un sopravvissuto possiede 3+ understanding?
[c] Si #3+ understanding
[d] Escogitano un modo per utilizzare le pozze. Ogni sopravvissuto può mettere un pezzo di equipaggiamento in una pozza. Archivia l'equipaggiamento e guadagna le risorse usate per crearlo (se possibile).
[c] No #
[dt] I sopravvissuti continuano la loro caccia.

[>d]
[c] No #
[d<]

Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto - Il risultato è minore dei survival?
[c] Si #Minore
[d] Continua.
[c] No #Maggiore
[dt] Vomiti in una pozza vicina, subisci 1 event damage al body. Davanti ai tuoi occhi, la piscina dissolve avidamente il tuo vomito, guadagna +1 understanding.
[br]
[TO] Dopo tutti i tiri
[td] Un sopravvissuto possiede 3+ understanding?
[c] Si #3+ understanding
[d] Escogitano un modo per utilizzare le pozze. Ogni sopravvissuto può mettere un pezzo di equipaggiamento in una pozza. Archivia l'equipaggiamento e guadagna le risorse usate per crearlo (se possibile).
[c] No #
[d] I sopravvissuti continuano la loro caccia.
[T]

[>d]
[T]
`,

  68: `68 | Un Volto Familiare
[i] Se nessun sopravvissuto è morto in questa campagna, ignora questo evento e tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[dt] Mentre esamina le facce di pietra sotto i piedi, lo straggler riconosce il volto di un amico caduto. I ricordi agrodolci si tramutano in lacrime. Riduci la tua insanity a 0 e guadagna +1 understanding.
`,

  69: `69 | Salto Temporale
Il bagliore delle lanterne dei sopravvissuti si confonde, formando scie di luce dietro di loro.
[i] Se l'insediamento ha combattuto una Fenice, il gruppo riconosce il fenomeno. Tutti i sopravvissuti guadagnano +1 understanding.
L'event revealer tira 1d10 sulla tabella. Se un sopravvissuto possiede un <b>Hours Ring</b>, può invece scegliere il risultato del dado.
[TA] 1d10
[td] Event revealer
[c] 1-3
[d] I corpi dei sopravvissuti invecchiano improvvisamente. Tutti i sopravvissuti con meno di 10 Hunt XP guadagnano +3 Hunt XP. Non guadagnare i benefici dell'Age. I vostri corpi sono fisicamente invecchiati, non è stata appresa alcuna esperienza.
[c] 3-9
[d<]

Le menti dei sopravvissuti si riempiono di ricordi alieni. Non sono più solo loro stessi. Camminano in modo diverso e parlano con accenti strani. Dà a ciascun sopravvissuto un nuovo nome e +1 survival per essere nominato. Ogni sopravvissuto guadagna +1 Hunt XP e 1 disorder casuale.
[i] Se l'insediamento possiede <b>Survival of Fittest</b>, e hai già usato il tuo once-per-lifetime reroll, puoi usarlo di nuovo.

[>d]
[c] 10+
[dt] I sopravvissuti si trovano improvvisamente accanto alla loro preda! Inizia lo showdown immediatamente.
`,

  70: `70 | Tomba dell'Eccellenza
I sopravvissuti trovano una tomba serena e lussuosa, immacolata nella sua costruzione e nelle sue condizioni. Eleganti murales decorano le pareti, raffigurando gloriose vittorie sul mostro a cui i sopravvissuti stanno dando la caccia. I sopravvissuti sono sconcertati dalla sua presenza.
L'event revealer <b>investigate</b> e tira 1d10.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1
[d] I sopravvissuti si lamentano della loro debolezza rispetto ai guerrieri dei murales. Tutti i sopravvissuti perdono 1 survival.
[c] 2-5
[d] È bello vedere qualcosa di bello per una volta, eh?
[c] 6-9
[d] I sopravvissuti non ricordano di essersi mai sentiti così allegri e ispirati. Ogni sopravvissuto guadagna +1 courage.
[c] 10+
[d<]

La porta della tomba è incorniciata da un legno con piccole mani per il grano. All'interno, le pitture murali raffigurano un eroe al centro di un labirinto che tiene sopra la testa un gigantesco frutto pieno di esseri umani. Ogni sopravvissuto guadagna +1 understanding.
[i] Se l'insediamento possiede <b>Pictographs</b>, i sopravvissuti trovano informazioni riguardo la loro preda. All'inizio dello showdown, possono piazzare la Trappola del mostro in fondo al mazzo delle hit location.

<button class="hunt_event_action_button hoverable" id="tomb_of_excelence" onClick="placeReminder('tomb_of_excelence')">[Pictographs] Promemoria</button>

[>d]
[T]
`,

  71: `71 | Reliquia Trovata
Tra le infinite facce di pietra, l'event revealer nota un oggetto insolito a terra.
L'event revealer <b>investigate</b> e tira 1d10.
[i] Se l'insediamento possiede <b>Records</b>, aggiungi +6 al risultato.
[TO] 1d10
[td] Event revealer - Investigate
[c] 1-2
[d] Trovi una pietra viola, consumata dagli agenti atmosferici, con una consistenza vorticosa. È incredibilmente pesante. Incantato dalla pietra, la nascondi agli altri sopravvissuti. Guadagna il disorder <b>Secretive</b> e -1 movement token per portarti in giro la pietra.
[c] 3-4
[d] Inutile ciarpame che sporca il terreno.
[c] 5-9
[d] Trovi un cuore di pietra che pulsa di calore quando lo tieni tra le mani. Guadagna +1 insanity.
[c] 10+
[d<]

Trovi una maschera con labbra vive. Se torni all'insediamento con la maschera, questa impara rapidamente la vostra lingua e condivide i suoi segreti prima di ridursi in polvere. All'inizio della prossima settlement phase, pesca 3 innovations dall'innovation deck e aggiungine una all'insediamento gratuitamente.
[i] Se un sopravvissuto possiede la <b>Final Lantern</b>, questa inizia a lampeggiare e a vibrare all'impazzata. La maschera si disintegra e tutti i sopravvissuti subiscono 1 brain event damage.

<button class="hunt_event_action_button hoverable" id="found_relic" onClick="placeReminder('found_relic')">Promemoria</button>

[>d]
[T]
`,

  72: `72 | Qualcosa per Passare il Tempo
[i] Se l'insediamento non possiede <b>Symposium</b>, ignora questo evento e tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
Altrimenti, l'event revealer propone un gioco di parole per alleggerire l'atmosfera mentre i sopravvissuti avanzano. L'event revealer tira 1d10.
[i] Se l'insediamento possiede <b>Song of the Brave</b>, aggiungi +4 al tiro.

[TO] 1d10
[td] Event revealer
[c] 1-2
[d] Le voci roboanti dei sopravvissuti attirano la loro preda. Il mostro li <b>ambush</b>.
[c] 3-7
[d] Nessun altro ha voglia di giocare. L'event revealer perde 1 courage.
[c] 8-9
[d] I sopravvissuti giocano a un gioco semplice ma divertente. Ogni sopravvissuto guadagna +1 courage.
[c] 10+
[dt] Il gioco è sorprendentemente divertente e gli spiriti dei sopravvissuti salgono con le loro risate fragorose. Ogni sopravvissuto tira 1d10. Con un 6+, guadagna 1 survival o rimuovi 1 disorder.
`,

  73: `73 | Tizzone Dorato
La strada è bloccata da un fumo denso e dorato. I sopravvissuti possono andare avanti e sfidare il fumo.
[i] Se i sopravvissuti possiedono la <b>Final Lantern</b>, li guida senza problemi attraverso il fumo; termina questo evento.

[TO] Scelta
[td] Cosa fate?
[c] Sfida il fumo
[d<]

Ogni sopravvissuto guadagna +1 courage e l'event revealer tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-5
[d] Il fumo travolge i sopravvissuti. Mentre corrono attraverso lo smog scintillante, ogni sopravvissuto subisce 1 event damage alla testa e al torso. Quando finalmente raggiungono la fine della foschia, si incamminano in silenzio. Nessuno si sente a proprio agio nel condividere le cose terribili che ha intravisto. Ogni sopravvissuto guadagna 1 disorder casuale.
[c] 6+
[d<]

I sopravvissuti si prendono per mano, formano una fila e attraversano il fumo. Respirano attraverso stracci e a turno sbirciano per orientarsi. Da qualche parte, nel profondo del fumo, si imbattono in un cratere. Possono ignorarlo e fuggire dal fumo (concludendo l'evento) o esplorare il cratere.

[TO] Scelta
[td] Cosa fate?
[c] Esplora il cratere
[d<]

I sopravvissuti scendono con cautela nel cratere e trovano le rovine di un insediamento circondato da un anello di teschi. L'insediamento è completamente demolito e quasi tutto è stato ridotto in polvere da una forza tremenda. I teschi sono rivolti verso le rovine e in ogni bocca spalancata un tizzone d'oro emette fumo.
La vista è ossessionante; ogni sopravvissuto subisce 1d10 brain event damage e guadagna 1 disorder casuale. I sopravvissuti setacciano con cautela le rovine.
Nomina un sopravvissuto per <b>investigate</b> e tira 1d10.

[TO] 1d10
[td] Sopravvissuto nominato - Investigate
[c] 1
[d<]

Contro ogni ragione, ti senti costretto ad allungare la mano verso il cranio e a prendere un tizzone. La tua carne sfrigola, accecata dal dolore, eppure non può impedirti di raggiungere la tua stessa bocca.

[TO] Controlla
[td] Possiedi broken jaw?
[c] Si #Broken jaw
[d] Sei ostacolato. Lasci cadere il tizzone d'oro dalla tua mano in fiamme. Subisci la <b>dismembered arm</b> severe injury. Scossi, i sopravvissuti fuggono dal fumo.
[c] No #No broken jaw
[d<]

La mascella si serra intorno al tizzone, la carne della bocca si scioglie, soffocando le grida di dolore. Il fumo fuoriesce dagli occhi, dal naso e dalle orecchie.

[TO] Controlla
[td] L'insediamento possiede <b>Survival of the Fittest</b>?
[c] Si #Survival of the Fittest
[d] La voglia di vivere ha la meglio e ti spacchi selvaggiamente la mascella, Subisci <b>broken jaw</b> severe head injury. Il tizzone cade a terra, il suo sibilo stridulo risuona nelle orecchie mentre tutti i sopravvissuti fuggono inorriditi.
[c] No #
[dt] Il tuo corpo fumante e fuso marcia roboticamente nell'anello dei teschi, posandosi al posto del cranio disturbato. L'odore putrido del tuo cervello in fiamme soffoca il fumo nell'aria. La vista è così inquietante che tutti gli altri sopravvissuti fuggono, senza mai parlare dell'accaduto.
[>d]
[>d]
[T]
[c] 2-4
[d] Avverti l'estremo pericolo dei tizzoni dorati e ti soffermi giusto il tempo di afferrare un piccolo gingillo. Guadagna 1 <b>Broken Lantern</b> basic resource.
[c] 5-8
[d] Noti che l'insediamento è disseminato di lanterne, tutte spente e distrutte quasi irriconoscibili. I sopravvissuti decidono che questo non accadrà mai a loro. Se un sopravvissuto ritorna al settlement quest'anno, guadagna +2`+endeavor_img+`.
[c] 9+
[dt] Tra le rovine, si trova solo un oggetto intatto. Una Twilight Sword. È appoggiata, rispettosamente, sullo scheletro di un sopravvissuto, per lo più non danneggiato. Se l'insediamento non possiede una <b>Twilight Sword</b>, e nessun sopravvissuto del gruppo possiede il disorder <b>Honorable</b>, puoi nominare un sopravvissuto e guadagnare la <b>Twilight Sword</b> rare gear. Se lo fai e l'<b>Hooded Knight</b> story event non è sulla timeline, aggiungilo a 2 anni a partire da adesso.

[>d]
[c] Fuggi dal fumo
[dt] I sopravvissuti scappano dal fumo e continuano la loro caccia.

[>d]
[T]
[>d]
[c] Aggiralo
[dt] I sopravvissuti percorrono la strada più lunga; tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  74: `74 | Segni di Corna
Una grande battaglia per il dominio tra due enormi antilopi ha lasciato il terreno di pietra con cicatrici incrociate.
Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1-2
[d] Inciampi nel terreno frastagliato e ti tagli la carne! Subisci <b>torn muscle</b> severe leg injury.
[c] 3-8
[d] Calpesti con cura i volti distrutti.
[c] 9+
[dt] Trovi una pietra allentata. Guadagna <b>Founding Stone</b> starting gear.
`,

  75: `75 | Oops!
Inciampando nell'oscurità, l'event revealer si schianta al suolo, schiacciando la lanterna sotto di sé. La luce viva all'interno della lanterna si agita per la goffaggine del sopravvissuto e brucia un pezzo di equipaggiamento. L'event revealer archivia 1 equipaggiamento a scelta dalla griglia equipaggiamento.
`,

  76: `76 | Dream the Way
I sopravvissuti hanno visioni vivide e febbrili di ciò che li attende. In una sola volta, si svegliano di soprassalto e confrontano freneticamente gli orrori che hanno visto.
Ogni sopravvissuto tira 1d10.
[i] Se un sopravvissuto è un savior, il suo potente sogno avvolge il gruppo; ogni sopravvissuto può scegliere qualsiasi tiro di dado che preferisce.
Se i sopravvissuti effettuano tiri identici, scoprono che hanno fatto lo stesso identico sogno. Guadagnano +1 insanity. Se i tiri duplicati sono dei 10, l'event revealer può ripetere un tiro qualsiasi in questa hunt phase (un tiro di chiunque, non solo il proprio).
`,

  77: `77 | Voragine
Una voragine spalancata si apre all'improvviso sotto i sopravvissuti, rivelando una pozza nera e vorticosa di icore sotto di loro. Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.
Ogni straggler tira 1d10.
[i] Se un sopravvissuto possiede una frusta, la tira verso lo straggler. Ogni straggler aggiunge +4 al tiro.

[TA] 1d10
[td] Straggler
[c] 1
[d] Sei inghiottito dalla voragine. Pochi istanti dopo ti rigurgita completamente nudo. Il tuo equipaggiamento è irrimediabilmente perso nel miasma. Archivia tutto l'equipaggiamento della tua griglia equipaggiamento.
[c] 2-4
[d] Gli altri sopravvissuti ti tirano su, ma non prima che qualcosa venga risucchiato sotto la superficie. Archivia 1 equipaggiamento a scelta dalla tua griglia equipaggiamento.
[c] 5-9
[d] Vieni portato al sicuro, terrorizzato ma illeso.
[c] 10+
[dt] Dopo uno sforzo monumentale, gli altri sopravvissuti ti tirano fuori. Qualcuno si aggrappa saldamente ai tuoi piedi (+1 population)! Mentre si dirige verso l'insediamento, ogni sopravvissuto subisce 1 brain event damage.
`,

  78: `78 | Cacciatore Morto

I sopravvissuti trovano un cadavere vestito con abiti dai colori vivaci, che stringe qualcosa al petto. L'event revealer può <b>investigate</b>.

[TO] Scelta
[td] Event revealer
[c] Investigate
[d<]

Guadagna +1 courage e tira 1d10.
[i] Se un sopravvissuto ha una frusta, sferza il cadavere da lontano; aggiungi +4 al tiro.

[TO] 1d10
[td] Event revealer -Investigate
[c] 1
[d] Aveva in mano un esplosivo! Muovendolo, l'esplosivo esplode, facendo saltare via la tua mano. Subisci <b>dismembered arm</b> severe arm injury.
[c] 2-4
[d] Aveva in mano un esplosivo! Esplode, ma voi ti allontani prima che si verifichi il disastro. Guadagna -1 accuracy token.
[c] 5-9
[d<]

Le sue mani sono vuote.
[i] Se l'insediamento possiede <b>Cannibalize</b>, guadagna 1 random basic resource.
[i] Se l'insediamento possiede <b>Graves</b>, guadagna +1 understanding.

[>d]
[c] 10+
[dt] Le sue mani tengono una bottiglia luccicante contenente un liquido liquoroso. Guadagna 1 <b>Frenzy Drink</b> gear.
[>d]
[c] Passa oltre
[dt] Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  79: `79 | Piccolo Cercatore Morente
[i] Se l'insediamento possiede la <b>Portcullis Key</b>, il cercatore è andato via. Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
I sopravvissuti scoprono un corpo accasciato contro una grande parete di pietra. Avvicinandosi, trovano un piccolo cercatore morente, crivellato di frecce. Quando si avvicinano, egli ringhia un avvertimento e li minaccia con un enorme frammento di pietra. Quando vede che non sono mostri malvagi, si calma e dà loro una chiave. Con il suo ultimo respiro dice: Questa è la chiave della saracinesca. Senza di essa, non riuscirete mai a passare.
Registra la <b>Portcullis Key</b> nelle note della scheda del settlement.

[TO] Controlla
[td] L'insediamento possiede Graves?
[c] Si #Graves
[d] L'event revealer costruisce un piccolo monumento di nasi di pietra rotti e guadagna +1 understanding.
[c] No #
[d] I sopravvissuti continuano la loro caccia.
[T]
`,

  80: `80 | Pietra dell'Amore non Corrisposto
I sopravvissuti superano un anello di pietre con un masso senza pretese al centro. Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (scegli casualmente, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler sceto
[dt] Lo straggler solleva il masso (è pesante!) e promette di portarlo ovunque, per sempre innamorato. Deve lasciare sempre libero uno spazio nella sua griglia equipaggiamento, per fare posto alla sua amata roccia. Registralo nella scheda del sopravvissuto. La roccia può essere persa o archiviata come qualsiasi altro equipaggiamento; se viene persa, il sopravvissuto piange l'amata e recupera lo spazio nella sua griglia equipaggiamento.
`,

  81: `81 | Campo d'Armi

[img] 78

I sopravvissuti camminano con cautela sul dorso di un enorme mostro addormentato. Al posto della pelliccia, il mostro ha braccia allungate, molte delle quali si contorcono in base al sogno che la grande bestia sta facendo. I sopravvissuti non disturbano il sonno profondo del mostro e lo attraversano senza problemi.

[TO] Controlla
[td] Un sopravvissuto possiede un falcetto?
[c] Si #Falcetto
[d] Rimuovono con delicatezza un po' di pelle dura da una delle braccia e guadagna 1 <b>Hide</b> basic resource.
[c] No #Nessun Falcetto
[dt] I sopravvissuti continuano la loro caccia.
[T]
`,

  82: `82 | Erba Consumante
L'erba verde vibrante cresce a chiazze davanti ai sopravvissuti. Un'ispezione più ravvicinata delle delicate foglie rivela che sono affilate come una lama. Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (o i sopravvissuti, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler sceto
[d<]

Mentre i sopravvissuti si fanno strada con cautela tra i pericoli verdeggianti, lo straggler inciampa nella boscaglia. Tira 1d10.
[i] Se un sopravvissuto possiede una frusta, si procede a una frettolosa legatura. Aggiungi +4 al tiro.

[TA] 1d10
[td] Straggler
[c] 1
[d] Atterrate nel prato. Mentre vi rimettete in piedi, vi rendete conto che è troppo tardi. Sulle parti del corpo che hanno toccato il suolo sono spuntati dei fili d'erba affilati. Ogni tentativo di rimuoverli non fa altro che diffonderli ulteriormente sul corpo. Durante lo showdown, non sei mai una threat (ignora qualsiasi effetto che ti renderebbe una threat, anche il White Lion's <b>Sniff</b>). Alla fine dello showdown, il tuo corpo sboccia in un vortice di erba verde immacolata. Morto.
[c] 2-9
[d] Cade, ma riesci a interporre qualcosa tra l'erba e la tua pelle nuda. Archivia 1 equipaggiamento a scelta dalla griglia equipaggiamento per proteggerti, o tratta questo risultato come se avessi tirato 1.
[c] 10+
[d] Fermi la caduta prima che sia troppo tardi.
[>d]
[T]
`,

  83: `83 | Monolite di Carne

[img] 83

I sopravvissuti si avvicinano a un monolite di carne a cinque facce che si estende nell'oscurità sopra la testa. Arti e volti umani e bizzarri sporgono da tutti i lati. L'event revealer guadagna +1 courage e <b>investigate</b>.

[TO] 1d10
[td] Event revealer - investigate
[c] 1
[d<]

Gli arti del monolite prendono vita, afferrandoti prima che tu possa reagire.
[TO] Check
[td] L'insediamento possiede Survival of the Fittest?
[c] Si #Survival of the Fittest
[d] Combatti contro il monolite! L'orribile edificio ti strappa il braccio, ma tu ricambi con un morso a una delle sue appendici, recidendola! Il monolite si ritira nel terreno mentre tu ruggisci in segno di trionfo. Subisci <b>dismembered arm</b> severe injury e guadagna +1 permanent strength. Tutti gli altri sopravvissuti sono stupiti e guadagnano +3 insanity e +1 courage.
[c] No #
[dt] Unisce le parti del tuo corpo alle sue con un'efficienza pazzesca, mentre vieni fatto a pezzi in una pioggia di sangue. Morto. La vista orribile fa si che gli altri  sopravvissuti subiscano 3 brain event damage e guadagnano il disorder <b>Post Traumatic Stress</b>.

[>d]
[c] 2-4
[d] Mani e tentacoli ti afferrano. Spendi 1 survival per sfuggire alla presa o tratta questo risultato come se avessi tirato 1.
[c] 5-9
[d] Tutti i sopravvissuti vengono respinti con orrore. Tutti subiscono ★ brain event damage.
[c] 10+
[d<]

Quando i sopravvissuti si avvicinano, scoprono che questo monolite di carne è in realtà un enorme mucchio di cadaveri di sopravvissuti, molti dei quali con arti gravemente spezzati. Il mucchio è ricoperto da pezzi di visceri strani e profumati.
[TO] Controlla
[td] L'insediamento possiede Graves?
[c] Si #Graves
[d] Salite sul cumulo e trovate 3 sopravvissuti a malapena vivi, con i corpi privi di nutrimento e gli occhi troppo sensibili alla luce della lanterna. Se tornate all'insediamento, +3 population. Questi nuovi sopravvissuti non possono depart per 2 anni della lanterna perchè hanno bisogno di tempo per rimettersi in sesto. (annotalo sulla timeline).
[c] No #
[dt] Tutto ciò che riuscite a raccogliere dal mucchio di cadaveri emaciati sono 2 <b>Organ</b> basic resources. La loro pelle è troppo morbida e le ossa troppo fragili per avere una qualche utilità.
[>d]
[T]
`,

  84: `84 | Libro dello Scriba

[img] 84

Un enorme libro rilegato in modo ornato è aperto davanti ai sopravvissuti.

[TO] Controlla
[td] L'insediamento possiede Pictographs?
[c] Si #Pictographs
[d<]

Un sopravvissuto con 3+ courage può scrivere il proprio nome nel libro. I sopravvissuti <b>Insane</b> con 3+ courage devono scrivere.

Ogni sopravvissuto che scrive il proprio nome nel libro tira 1d10 e aggiunge il proprio understanding. Se nessuno scrive, tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

[TA] 1d10
[td] Un sopravvissuto con 3+ courage
[c] 1-4
[d] Quando finisci di scrivere il tuo nome, sai di aver fatto qualcosa di terribilmente sbagliato. Scompari dalla storia. Morto. Archivia il tuo equipaggiamento.
[c] 5-8
[d] Nulla accade.
[c] 9-10
[d] Mentre scrivi il tuo nome, ti senti rinsavire. Cura injury levels e i punti armatura persi. Guadagna +2 survival.
[c] 11-14
[d] Vi sentite sicuri che, finché il vostro nome è nel libro, non vi potrà accadere nulla di male. Ottenete due delle seguenti: +2 courage, +2 understanding o +2 survival.
[c] 15+
[dt] Il libro dimostra l'innegabile impronta che lasciate nel mondo. Guadagna +1 survival, +1 understanding, +1 courage, +1 permanent speed e +1 permanent strength.

[>d]
[c] No #
[dt] I sopravvissuti continuano la loro caccia. Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
`,

  85: `85 | Prova di Coraggio
La lava sgorga dagli occhi di un enorme volto di pietra dalle smorfie. I suoi denti digrignati impugnano una spada consumata. Se c'è un sopravvissuto con 6+ courage, scegline uno per affrontare la lava.

[TO] Controlla
[td] Un sopravvissuto possiede 6+ courage?
[c] Si #6+ courage
[d<]

Guadagna <b>Adventure Sword</b> rare gear.

[TO] Controlla
[td] L'insediamento possiede già l'Adventure Sword e Storytelling?
[c] Si #
[d<]

I sopravvissuti condividono storie di coraggio; ogni sopravvissuto guadagna +1 survival.
[i] Se l'insediamento possiede anche <b>Saga</b>, le storie sono incredibilmente motivanti; ogni sopravvissuto guadagna anche +1 courage.

[>d]
[c] No #
[dt] Il gruppo si allontana.

[>d]
[c] No #
[d] Il gruppo si allontana con un senso di inadeguatezza.
[T]
`,

  86: `86 | Putride Gallerie
I sopravvissuti sentono l'odore prima di vederle, una serie di bocche che emettono odori nocivi.
Ogni sopravvissuto tira 1d10.

[TA] 1d10
[td] Ogni sopravvissuto
[c] 1-8
[d] Superano il desiderio di indagare.
[c] 9+
[dt] Entri in uno dei tunnel e scopri un misero gruppo di sopravvissuti malati che vivono nella sporcizia. Tutti i sopravvissuti che entrano nella caverna contraggono la loro malattia putrescente. Guadagna <b>Leprosy</b>: riduci tutti i danni subiti di 1 per un minimo di 1. Subisci -2 ai tiri per le severe injury. Annota questo impairment.
`,

  87: `87 | Volti Piangenti
L'acqua sgorga dagli occhi delle facce di pietra circostanti e si raccoglie in una piccola vasca. Ogni sopravvissuto può <b>consume</b> dalla vasca e tirare 1d10.
[i] Se possiede 3+ understanding, aggiunge +2 al tiro.

I sopravvissuti <b>Insane</b> sono inconsolabili, giacciono a terra singhiozzando pesantemente. Se un sopravvissuto è <b>insane</b>, tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

[TA] 1d10
[td] Un sopravvissuto - Consume
[c] 1-3
[d] L'acqua è salata e aspra. Non si può fare a meno di pensare a cosa tu stia bevendo. Subisci 1 brain event damage.
[c] 4-6
[d] Rinfrescante!
[c] 7-8
[d] L'acqua è più pulita di molte altre. Puoi curare fino a 2 injury levels in una hit location.
[c] 9+
[dt] L'acqua è rinvigorente. Guadagna +1 speed token.
`,

  88: `88 | La Spada e la Statua
Una statua con un occhio solo, alta il doppio di un uomo, siede davanti a una grande incudine con un martello in ciascuna delle sue sei mani. I sopravvissuti guardano la statua battere una spada rovente che giace sull'incudine. Ogni sopravvissuto, partendo dall'event revealer e procedendo in senso orario, può tentare di prendere la spada dall'incudine. Se lo fa, guadagna +1 courage, tira 1d10 e aggiunge la sua Hunt XP al tiro.

[TA] 1d10
[td] Un sopravvissuto
[c] 1-2
[d] Quando ti avvicini all'incudine, la statua afferra la spada e la conficca nel tuo corpo. Si sente un sibilo acuto quando il metallo caldo si raffredda nel tuo sangue. Morto.
[c] 3-8
[d] Afferri rapidamente la spada, ma non abbastanza. Subisci <b>dismembered arm</b> severe arm injury.
[c] 9-13
[d] Forse non sei abbastanza veloce da afferrare la spada, ma almeno non sei così sciocco da morire provandoci.
[c] 14+
[dt] La tua velocità è leggendaria. Guadagna <b>Muramasa</b> rare gear. Termina questo evento.
`,

  89: `89 | Uccelli Pulitori
Minuscoli uccelli laceri con becchi sottili come aghi volano sopra le vostre teste. Ogni sopravvissuto tira 1d10. Il sopravvissuto che ha effettuato il punteggio più basso (spareggio, in caso di parità) diventa straggler.

[TO] 1d10
[td] Determina straggler
[c] Straggler scelto
[d<]

Gli uccelli sciamano verso lo straggler. Uno si fa strada a forza nella bocca dello straggler e gli scende in gola. Il sopravvissuto vomita l'uccello ben nutrito, con le interiora strapazzate e sfregiate. Gain +1 permanent luck, -1 permanent speed.
[i] Se un sopravvissuto ha una frusta, la schiocca e abbatte la creatura offensiva. Guadagna 1 basic resource casuale.

[>d]
[T]
`,

  90: `90 | Luce all'Orizzonte
I sopravvissuti sentono un ululato stridente, seguito da uno schianto. Vedono un'esplosione di luce multicolore all'orizzonte. La luce innaturale illumina il cammino dei sopravvissuti.

[TO] Controlla
[td] Un sopravvissuto è sane?
[c] Si #Sopravvissuto sane
[d<]

I sopravvissuti seguono la luce. Puoi ritirare il prossimo risultato sulla tabella degli hunt event.
La luce raggiunge l'insediamento. Aggiungi il settlement event <b>Lights in the Sky</b> alla timeline il prossimo anno.
[>d]
[c] No #Tutti insane
[d<]

I sopravvissuti si allontanano dalla luce e camminano nell'oscurità. Muovi i sopravvissuti 2 spazi indietro sul tabellone della caccia.
La luce raggiunge l'insediamento. Aggiungi il settlement event <b>Lights in the Sky</b> alla timeline il prossimo anno.
[>d]
[T]
`,

  91: `91 | L'Inizio
I sopravvissuti si imbattono nella scena della prima caccia del loro insediamento. Che l'abbiano visto di persona o ne abbiano sentito parlare attraverso i racconti, lo riconoscono immediatamente. Vedere il luogo del primo trionfo del loro insediamento è elettrizzante.

Ogni sopravvissuto guadagna +1 survival.

[TA] Controlla
[td] Quali innovazioni possiede l'insediamento?
[c] Saga
[d] Ogni sopravvissuto guadagna +1 courage.
[c] Storytelling
[dt] Ogni sopravvissuto guadagna +1 understanding.
`,

  92: `92 | Brutto Inizio
I sopravvissuti trovano i resti a brandelli di quattro umani. Vestiti di perizoma e con in mano frammenti di pietra, portano i segni evidenti degli artigli del White Lion.
Ogni sopravvissuto subisce 1 brain event damage e guadagna 1 <b>Founding Stone</b> starting gear. I sopravvissuti con 3+ understanding guadagnano anche +1d10 insanity.
`,

  93: `93 | Sopravvissuto Perduto

[img] 93 # width:25%

In una cavità tra due rocce identiche, si trova un cadavere dai capelli favolosi che stringe al petto un libro.

[TO] Controlla
[td] L'insediamento possiede Pictographs?
[c] Si #Pictographs
[d<]

L'event revealerpuò leggere il libro e tirare 1d10.

[TO] Scelta
[td] Event revealer
[c] Leggi
[d<]

Il libro racconta la tragica storia di due sopravvissuti che hanno trovato un amore che non avrebbero mai potuto avere.

[TO] 1d10
[td] Event revealer
[c] 1-3
[d] Pagina 3 - Doppia natura. L'insediamento degli amanti è stato distrutto e loro sono stati portati via. L'event revealer si sente in conflitto. Dopo lo showdown, lascia l'insediamento per sempre alla ricerca di qualcosa.
[c] 4-6
[d] Pagina 6 - L'uomo ha passato anni a sopportare orribili torture per amore della sua amata. Ogni ferita non faceva che rafforzare la sua determinazione. Guadagna +1 permanent speed e i disorder <b>Anxiety</b> e <b>Traumatized</b>.
[c] 7+
[dt] Pagina 9 - L'uomo fuggì, ma non tornò mai più. Sapeva che se lo avesse fatto, avrebbe condannato la sua amata. Decise che era meglio essere dimenticato per proteggere i pochi sorrisi che la sua esistenza aveva ispirato. Guadagna +1 courage e le fighting art <b>Tough</b> e <b>Last Man Standing</b>.

[>d]
[c] Non leggere
[dt] I sopravvissuti proseguono oltre, profondamente confusi.

[>d]
[c] No #
[dt] I sopravvissuti proseguono oltre, profondamente confusi.
`,

  94: `94 | Mucchio Nauseante
I sopravvissuti si imbattono in un terreno gravemente danneggiato. Le pareti di pietra sono spaccate e i detriti sono sparsi ovunque. Mucchi di sterco dall'odore tossico e visceri semidigeriti disseminano l'area. I sopravvissuti si avvicinano, ma i sopravvissuti con il disorder <b>Squeamish</b> rifiutano di avvicinarsi.

I sopravvissuti <b>Insane</b> <b>consume</b> quello che trovano e si ammalano; guadagnano -1 strength token. I sopravvissuti Sane si fermano per <b>investigate</b> il mucchio. Ognuno guadagna +1 courage, tira 1d10, e aggiunge l'understanding al tiro.

[TA] 1d10
[td] Ogni sopravvissuto sane - Investigate
[c] 1-2
[d] Ti stordisci setacciando i cumuli di sterco; seguono conati di vomito incontrollabili. Guadagna -1 strength token.
[c] 3-8
[d] Ansimando, con gli occhi pieni di lacrime, la tua caccia malata viene ripagata. Guadagna 1 basic resource casuale e subisci 1 event damage a una hit location casuale.
[c] 9+
[dt] Il vostro intuito viene ripagato! Guadagna 1 basic resource casuale.
`,

  95: `95 | Triste e Gelido
Nell'aria c'è una quiete mortale. L'atmosfera si fa densa di preoccupazione e i sopravvissuti vanno avanti nervosamente. Un freddo pungente e malvagio si fa sentire e non c'è riparo.
I sopravvissuti si stringono per riscaldarsi, tremando forte. A meno che un sopravvissuto non possegga armor gear in ciascuna hit location, perde ★ survival.
`,

  96: `96 | Straniero Ammantato
Una forma ammantata esce da una zona di oscurità davanti ai sopravvissuti. L'indumento mal indossato si sposta sulla sua forma e il suo avanzare lascia pozzanghere nere e scure nelle bocche delle pietre bagnate dalla pioggia sul terreno.
L'event revealer si avvicina allo straniero e tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1-2
[d] L'approccio dello sconosciuto riempie le orecchie di una dolorosa elettricità statica. C'è un lampo di luce e un forte schiocco. Cadete a terra, tenendovi il petto insanguinato dal dolore. Subisci la severe body injury <b>ruptured spleen</b>. Tutti i sopravvissuti <b>non-deaf</b> subiscono 2 brain event damage.
[c] 3-4
[d] La figura dello straniero si sfoca man mano che ci si avvicina. Quando lo raggiungete, sparisce, la sua forma è impossibile da ricordare. Guadagna 1 bleeding token e dimentica 1 fighting art a tua scelta.
[c] 5-6
[d] Quando vi avvicinate allo sconosciuto, vi rendete conto che sta fluttuando nell'aria! Si percepisce a malapena un brusio roco proveniente dalla forma che sembra assomigliare a... una risata? Dopo che lo sconosciuto se n'è andato, tornate al gruppo, con il volto bianco come l'osso, rifiutandovi di parlare di ciò che avete visto. Subisci 3 brain event damage.
[c] 7-8
[d] Lo straniero alza le braccia e si muove per venire incontro a voi. Da sotto le pieghe del mantello si intravede un accenno di pelle squamosa di colore viola. Un artiglio esce da una manica e ti accarezza delicatamente la guancia, lasciandosi dietro uno strato di liquido viscoso. Asciugando la melma, trovate l'esperienza bizzarra e stranamente toccante. Guadagni +1 survival, +1 understanding.
[c] 9+
[d<]

Lo straniero vi ordina di organizzare una prova di forza tra i sopravvissuti. Ogni sopravvissuto deve tirare 1d10 (spareggio, in caso di parità). Il sopravvissuto che effettua il punteggio più alto vince la prova.
[TO] 1d10
[td] Determina vincitore
[c] Vincitore scelto
[dt] L'estraneo segna il tuo volto con il suo artiglio scintillante, concedendoti l'abilità <b>Iron Will</b>: You cannot be knocked down. Reduce all knockback you suffer to knockback 1. Annota questa abilità. Tutti i sopravvissuti perdono 4 survival per la lotta estenuante.

[>d]
[T]
`,

  97: `97 | Pietra Vivente
Il terreno si sposta improvvisamente e si alza bruscamente in aria! I sopravvissuti si ritrovano aggrappati alla schiena di una creatura gigantesca che giaceva addormentata sotto i loro piedi. I sopravvissuti si tengono stretti per la vita, assolutamente terrorizzati.
Nominate un sopravvissuto che si arrampichi verso la cima del gigante per vedere cosa li aspetta. Tira 1d10.

[TO] 1d10
[td] Sopravvissuto nominato
[c] 1
[d] Il vostro movimento irrita il gigante, facendo volare via i sopravvissuti! Tutti i sopravvissuti subiscono 1d5 event damage a una hit location Casuale. Archivia tutto l'equipaggiamento <b>fragile</b>.
[c] 2-7
[d] Arrivi in cima e hai un punto di osservazione perfetto per vedere il mondo, se solo ci fosse abbastanza luce per vederlo. Imposta la tua insanity a O. Il gigante vi porta esattamente dove state andando! Inizia lo showdown immediatamente.
[c] 8+
[dt] Scoprite una bizzarra creatura con un volto rovesciato che scolpisce diligentemente sulla schiena del gigante. Mentre lavora, scarta le facce di pietra danneggiate. Ogni sopravvissuto raccoglie un frammento, e guadagna 1 <b>Founding Stone</b> equipaggiamento iniziale. Alla fine il gigante si adagia di nuovo sul terreno. Scendete e scoprite la vostra preda! <b>Ambush</b> il mostro!
`,

  98: `98 | Occhi Sanguinanti

[img] 98 # width:35%

I sopravvissuti trovano una scia di sangue. Si raccoglie nelle orbite degli occhi della terra dalla faccia di pietra. Il sangue è ancora caldo.
L'event revealer può <b>investigate</b> e tirare 1d10, o ignorare la scia e terminare l'evento.

[TO] 1d10
[td] Event revealer - Investigate
[c] 1-3
[d] Uno dei vostri è accasciato alla fine del sentiero, sanguinando terribilmente. Scegli un sopravvissuto casuale, guadagna 3 bleeding tokens. Tutti i sopravvissuti subiscono 3 brain event damage.
[c] 4-6
[d] Il sentiero conduce a un'enorme scatola. All'interno è intrappolata una giovane sopravvissuta dai capelli rossi. Guadagna +1 population. Le incisioni che ornano la scatola sono ammalianti. Tutti i sopravvissuti subiscono 3 brain event damage.
[c] 7+
[dt] Le tracce portano alla vostra preda! Il mostro è ferito da una battaglia precedente. Inizia lo showdown immediatamente. All'inizio dello showdown, il mostro subisce 1 ferita.
`,

  99: `99 | Saracinesca

[img] 99

I sopravvissuti si avvicinano a una massiccia saracinesca che si erge nell'oscurità. Non è attaccata a nulla e non sbarra loro la strada. Possono scegliere di aggirarla.

[TO] Controlla
[td] L'insediamento possiede la Portcullis Key?
[c] Si #Portcullis Key
[d<]

Possono cancellarla dal registro dell'insediamento e usarla.
[TO] Scegli
[td] Usate la Portcullis Key?
[c] Si #Apri la saracinesca
[d<]

Ogni sopravvissuto guadagna +1 courage. La saracinesca si apre cigolando e i sopravvissuti la attraversano. Un'oscurità cupa attende i sopravvissuti all'interno.
[TO] 1d10
[td] Event revealer
[c] 1
[d] La saracinesca si chiude improvvisamente dietro di loro e le luci delle loro lanterne iniziano a spegnersi. L'ultima cosa che i sopravvissuti vedono è la smorfia di paura sui loro volti mentre il buio si avvicina. I sopravvissuti sono morti.
[c] 2+
[dt] Ai tuoi piedi si trova un crogiolo ornato con un vuoto a forma di potente arma. Guadagna la strange resource <b>Perfect Crucible</b>. Se posseggono il Blacksmith nell'insediamento, possono ora creare la <b>Perfect Slayer</b>.

[>d]
[c] No #Aggira
[dt] Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.

[>d]
[c] No #Aggira
[d] Tira di nuovo sulla tabella degli hunt event prima di muoverti sul tabellone della caccia.
[T]
`,

  100: `100 | Il Finale

Un enorme suono metallico risuona da lontano. Tutti i sopravvissuti sono elettrizzati dal terrore; subiscono 2 brain event damage.

[TO] Scelta
[td] Seguite il suono?
[c] Si #Seguite il suono
[d<]

Ogni sopravvissuto guadagna +1 courage e si avvicina con cautela all'origine del suono. Mentre viaggiate, passate accanto ai cadaveri in frantumi di strane bestie.

[TO] Controlla
[td] Un sopravvissuto possiede 3+ understanding?
[c] Si #3+ understanding
[d<]

I sopravvissuti seguono le tracce dei cadaveri.

[img] 100 # width:35%

Arrivati a un'enorme incudine, i sopravvissuti vedono un gigantesco cavaliere con un occhio solo, la cui armatura color carbone riflette la luce della loro lanterna.
L'event revealer tira 1d10.

[TO] 1d10
[td] Event revealer
[c] 1
[d] Il cavaliere fissa i sopravvissuti. Tutti i sopravvissuti con meno di 3 courage vengono colpiti a morte. Tutti gli altri sopravvissuti fuggono inorriditi.
[c] 2-8
[d] Il cavaliere si avvicina ai sopravvissuti. In un attimo, taglia l'orecchio di un sopravvissuto a caso; guadagna 1 bleeding token. Poi, colpisce l'incudine, accecando i sopravvissuti con fragoroso rumore. Quando aprono gli occhi, il cavaliere non c'è più. e i rare gear <b>Steel Sword</b> e <b>Steel Shield</b> giacciono al suo posto. Il gruppo si divide l'equipaggiamento.
[c] 9+
[dt] Il cavaliere schiaccia l'oggetto che ha in mano sull'incudine. Quando l'oggetto arancione fuso si raffredda, si trasforma in un enorme martello con la faccia da leone. Il cavaliere lo mette nelle mani del sopravvissuto con il courage più alto (spareggio in caso di parità). Guadagna il <b>Thunder Maul</b> rare gear. Una corrente elettrica attraversa il tuo corpo, unendo per sempre arma e sopravvissuto.
[>d]
[c] No #Meno di 3 understanding
[dt] Raccogli 3 basic resources casuali dai cadaveri e termina l'evento.

[>d]
[c] No #Ritirata
[dt] I sopravvissuti sono presi dal panico e fuggono nella direzione opposta; termina questo evento e muovi i sopravvissuti 2 spazi indietro sul tabellone della caccia.`,
}

module.exports = {
  random_hunt_events,
}
