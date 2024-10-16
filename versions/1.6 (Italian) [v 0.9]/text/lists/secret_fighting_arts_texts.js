const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Acanthus Doctor': {
  'expansion': 'flower knight',
  'label': 'Acanthus Doctor',
  "description": "Puoi trasportare fino a 3 <b>satchel</b> gear. Quando <b>depart</b>, se non stai indossando nessuna armatura, per ogni affinità verde che possiedi, guadagni +1 strength token e aggiungi 1 armor a tutte le hit location. Spendi {image@images/icons/activation} e un Fiore o un <b>Fresh Acanthus</b> per far guarire una permanent injury subita in questo showdown a te o ad un sopravvissuto a te adiacente.",
 },
 'Ageless Apprentice': {
  'expansion': 'lion knight',
  'label': 'Ageless Apprentice',
  "description": "Quando guadagni Hunt XP, puoi decidere di non guadagnarne. Quando <b>depart</b>, puoi ruotare fino a 3 carte gear nella tua griglia equipaggiamento. Questo cambia la locazione dello loro affinità in  base alla direzione indicata. Diversamente, la gear funziona normalmente.",
 },
 'Altered Destiny': {
  'expansion': 'dragon king',
  'label': 'Altered Destiny',
  "description": "Qando dovresti guadagnare un token attributo negativo, guadagna invece un token attributo positivo dello stesso tipo.",
 },
 'Beast of Caratosis': {
   'label': 'Beast of Caratosis',
  "description": "Puoi effettuare <b>concentrate</b>. Se lo fai, attiva <b>Beast of Caratosis</b> all'inizio del tuo prossimo turno: Piazza il tuo sopravvissuto adiacente al mostro. Attiva un arma nella tua griglia equipaggiamento e attacca il mostro. Per questo attacco, la tua speed è pari al numero di affinità rosse, colpisci automaticamente, e guadagni strenght pari al doppio delle affinità rosse. Poi, guadagni +6 Hunt XP.",
 },
 'Beetle Strength': {
  'expansion': 'dung beetle knight',
  'label': 'Beetle Strength',
  "description": "Una volta per showdown, puoi spendere {image@images/icons/activation} per spingere un obstacle terrain adiacente. Se lo fai, muovi il terrain direttamente lontano da te in linea retta, finch non incontra il bordo o un altro obstacle terrain. Qualsiasi mostro che il terrain attraversa subisce una ferita, e ogni sopravvissuto con cui <b>collides</b> subirà <b>knockback 7</b>.<br/><br/> Questa dimostrazione di forza è estenuante e ti sfianca. Se knocked down e guadagni +1 Hunt XP.",
 },
 'Black Guard Style': {
  'whitebox': 'percival',
  'label': 'Black Guard Style',
  "description": "Le spade nella tua griglia equipaggiamento guadagnano <b>Block 1</b>. Quando blocchi un colpo con la spada, il tuo prossimo attacco in quel round con una spada guadagna +2 accuracy, +2 strength, +2 speed. Limite, una volta per round.<br/><br/>Durante la fase del settlement , puoi spendere {image@images/icons/endeavors} per addestrare un sopravvissuto. Questo guadagna la <b>Black Guard Style</b> secret fighting art. Tu la perdi e subisci la severe injury <b>broken arm</b>.",
 },
 'Bone Whisperer': {
   'label': 'Bone Whisperer',
  "description": "Quando un altro sopravvissuto muore nella showdown borad, piazza un token dove è morto. Se ci passi sopra, rimuovi il token e mangia il suo teschio.<br/><br/> <b>Cura</b> il tuo sopravvissuto e <b>lancia 1d10 + la tua hunt XP</b> sulla tabella:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">Ti senti alla grande! Guadagni +1 permanent movement, speed ed evasion.</div><br/><b style=\"color:#cc0;\">4-8</b>: <div style=\"font-size:0.9em;display: inline;\">Guadagni +1 permanent strength.</div><br/><b style=\"color:#cc0;\">9-18</b>: <div style=\"font-size:0.9em;display: inline;\">Guadagni una fighting art e +5 survival.</div><br/><b style=\"color:#cc0;\">19+</b>: <div style=\"font-size:0.9em;display: inline;\">Corri via in esilio. Al termine dello showdown, sarai andato via per sempre.</div>",
 },
 'Clarity of Darkness': {
  'expansion': 'slenderman',
  'label': 'Clarity of Darkness',
  "description": "All'inizio dello showdown, guadagni la carta status sopravvissuto <b>Path of Gloom</b>. C'è una letale, soverchiante presenza su di te. Gli altri sopravvissuti non possono terminare volontariamente il loro movimento vicino a te.",
 },
 'Courtly Screenwriter': {
  'expansion': 'lion knight',
  'label': 'Courtly Screenwriter',
  "description": "All'inizio dello showdown, scrivi segretamente su di un foglio di carta quale sopravvissuto vivrà e chi darà il colpo di grazia. Durante la fase di aftermath, se la tua predizione è corretta, alza il Survival Limit del settlement di 1.",
 },
 'Death Touch': {
  'expansion': 'spidicules',
  'label': 'Death Touch',
  "description": "Guadagni +1 accuracy quando attacchi con Fist & Tooth. Quando ferisci un mostro, questo guadagna -1 toughness fino alla fine del tuo attacco. Non puoi usarlo se sei un uomo.",
 },
 'Eternal Will': {
  'expansion': 'manhunter',
  'label': 'Eternal Will',
  "description": "Guadagni +1 accuracy e +1 strength per ogni permanent injury che possiedi. Puoi sempre <b>depart</b>, anche quando ti sei ritirato.",
 },
 'Fencing': {
  'expansion': 'flower knight',
  'label': 'Fencing',
  "description": "Ignora <b>Parry</b> quando provi a ferire la hit location. (Prova a colpire questa hit location normalmente). Quando un mostro ti attacca, lancia 1d10. con un risultato di 6+, ignora 1 hit. Limite, una volta per round.",
 },
 'Frozen Star': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Frozen Star',
  "description": "Una volta per round, puoi spendere 1 survival per congelare il cervello del mostro. Questo guadagna -2 accuracy fino alla fine del round.<br/><br/>Una volta per round, puoi spendere 1 survival per gelare il cervello di un sopravvissuto, uccidendolo all'istante. Muore.",
 },
 'Grace of Dormenatus': {
   'label': 'Grace of Dormenatus',
  "description": "Puoi effettuare <b>concentrate</b>. Se lo fai , esegui <b>Grace of Dormenatus</b> all'inizio della tuo prossimo turno: Tutti I sopravvissuti guadagnano armatura a tutte le hit locations pari alle tue affinità verdi. Possono rimuovere fino allo stesso numero di token. Poi, guadagnano +6 Hunt Xp. Se esisti ancora, guadagni il segnalino priority target.",
 },
 'Hellfire': {
  'expansion': 'sunstalker',
  'label': 'Hellfire',
  "description": "Non puoi perdere o rimuovere questa fighting art. Guadagni +1 strength per ogni affinità rossa che possiedi. Non puoi essere nominato per "+event_img+"<b>Intimacy</b>. Puoi ignorare <b>Extreme Heat</b>. All'inizio del tuo turno, perdi 1 survival. Alla fine del tuo turno, se i tuoi survival sono pari a 0 o hai dei segnalini +1 strength, i tuoi organi si cuociono e sei morto.",
 },
 'Immovable Object': {
  'expansion': 'gorm',
  'label': 'Immovable Object',
  "description": "Se sei in uno spazio non occupato, puoi rialzarti e fronteggiare ogni cosa. Non puoi essere knocked down e puoi ignorare <b>knockback</b>. (Se occupi lo stesso spazio del mostro, tessere impassable terrain, o un altro sopravvissuto, sei knocked down e subisci knockback).",
 },
 'King of a Thousand Battles': {
   'label': 'King of a Thousand Battles',
  "description": "Guadagni +2 accuracy, +2 strength, +2 evasion. Puoi usare <b>dodge</b> un qualsiasi numero di volte in un round. Solo 1 sopravvissuto può avere questa Secret Fighting Art.",
 },
 'Kings Step': {
   'label': 'King\'s Step',
  "description": "Ogni volta che attacchi, puoi scartare un qualunque numero di <b>Battle Pressure</b> hit locations pescate e pescare lo stesso numero di nuove hit locations. Ogni volta che attacchi, dopo che hai pescato le hit locations, ma prima di tirare per ferire, puoi scegliere una hit location pescata e scartarla per pescare una nuova hit location. Le <b>Traps</b> annullano questo effetto.",
 },
 'Legendary Lungs': {
   'label': 'Legendary Lungs',
  "description": "Una volta per attacco, per ogni colpo di successo, effettua un attacco addizionale.",
 },
 'Lucernaes Lantern': {
   'label': 'Lucernae\'s Lantern',
  "description": "Puoi effettuare <b>concentrate</b>. Se lo fai, effettua <b>Lucernae's Lantern</b> all'inizio della tua azione: Rivela tante hit location pari alla metà delle tue affinità blu (arrotondate per difetto) una alla volta. Il mostro subisce una ferita critica ad ogni locazione con effetti di ferita critici (ignora l'effetto della trappola). Poi rimescola il mazzo hit location. Guadagni +6 Hunt Xp.",
 },
 'Necromancer': {
  'expansion': 'lion god',
  'label': 'Necromancer',
  "description": "Quanto tu <b>depart</b>, guadagni +1 armor a tutte le hit location per ogni carta equipaggiamento nella tua griglia con la parola chiave symbol.<br/><br/>Se devi tirare sulla tabella <b>Severe Injury</b>, invece lancia sulla tabella <b>Worm Trauma</b> <i>(specifiche severe injury rimangono invariate)</i>:<br/><br/><b style=\"color:#cc0;\">1-3</b>: <div style=\"font-size:0.9em;display: inline;\">Uno spruzzo di sangue e argento. <b>Morto</b>.</div><br/><b style=\"color:#cc0;\">4-5</b>: <div style=\"font-size:0.9em;display: inline;\">Il verme si stringe bruscamente. Guadagni 2 token sanguinamento ed un token -1 evasion.</div><br/><b style=\"color:#cc0;\">6-7</b>: <div style=\"font-size:0.9em;display: inline;\">Un colpo da capogiro. Guadagni 1 token sanguinamento e 1d5 insanity.</div><br/><b style=\"color:#cc0;\">8</b>: <div style=\"font-size:0.9em;display: inline;\">Una voce inumana urla nelle tue ossa. Guadagni 1 token sanguinamento e 1d5 insanity.</div><br/><b style=\"color:#cc0;\">9</b>: <div style=\"font-size:0.9em;display: inline;\">Il dolore infuria! Guadagni 1 token sanguinamento e +1 strength token.</div><br/><b style=\"color:#cc0;\">10</b>: <div style=\"font-size:0.9em;display: inline;\">Del metallo fuso esce dalla tua bocca. Sei knocked down e guadagni 1 <b>Iron</b> strange resource.</div>",
 },
 'Red Fist': {
   'label': 'Red Fist',
  "description": "All'inizio di ogni showdown, ogni sopravvissuto guadagna un token +1 strength. I sopravvissuti possono spendere i token +1 strength al posto dei survival.",
 },
 'Scholar of Death': {
   'label': 'Scholar of Death',
  "description": "All' <b>Arrival</b>, guadagni un token reroll pari al numero di volumi registrati riguardo la preda. Scarta un token reroll per rilanciare uno dei tuoi risultati durante lo showdown. Questo include i risultati dei lanci del mostro quando sei tu il monster controller.",
 },
 'Silk Surgeon': {
  'expansion': 'spidicules',
  'label': 'Silk Surgeon',
  "description": "<b style=\"color:#cc0;\">Rank 1</b>: Puoi spendere {image@images/icons/activation} mentre sei adiacente ad un altro sopravvissuto per aggiungere 2 armatura ad una delle sue hit location.<br/><b style=\"color:#cc0;\">Rank 2</b>: Quando tutta l'armatura della tua griglia equipaggiamento è di silk e tutta la gioielleria è d'ambra, guadagni +2 evasion.<br/><b style=\"color:#cc0;\">Rank 3</b>: Durante l'aftermath, lancia 1d10 per ogni altro sopravvissuto morto durante lo showdown. Se ottieni un 7+, riportali in vita.",
 },
 'Sun Eater': {
  'expansion': 'sunstalker',
  'label': 'Sun Eater',
  "description": "Il tuo corpo misteriosamente assorbe la luce. All'inizio dello showdown, guadagni survival fino al limite del Settlement. Se hai un qualsiasi numero di segnalini +1 strength, puoi spenderli per effettuare la Survival Action <b>Surge</b> (seguendo tutte le sue normali regole e restrizioni).",
 },
 'Suppressed Shadow': {
  'expansion': 'sunstalker',
  'label': 'Suppressed Shadow',
  "description": "Non proietti più alcuna ombra e non esiterai mai. Ignora i First Strike. Per ogni <b>Perfect hit</b>, il tuo primo tentativo di ferire dell'attacco ha successo automaticamente ed infligge una ferita critica. Se muori durante lo showdown, piazza un minion Shade nello spazio che occupavi.",
 },
 'Swordsmans Promise': {
   'label': 'Swordsman\'s Promise',
  "description": "All'inizio di ogni showdown, guadagni survival fino al limite del settlement se hai una spada nella tua griglia equipaggiamento.",
 },
 'Synchronised Strike': {
   'label': 'Synchronised Strike',
  "description": "Con una perfetta sincronia, colpirete come uno.<br/><br/>Quando sei <b>adjacent</b> al mostro, attacchi con un'arma da mischia ed hai un <b>Attack Assist</b>, i tuoi attacchi guadagnano +1 Accuracy e +1 Strength. Limite, una volta per round.<br/><br/><b>Attack Assist</b>: Un altro sopravvissuto possiede <b>Synchronised Strike</b> e si trova nel posto corretto. Questi sono in piedi adiacenti al mostro, nei suoi lati opposti, e paralleli a te.",
 },
 'True Blade': {
  'expansion': 'flower knight',
  'label': 'True Blade',
  "description": "Tutte le spade nella tua griglia equipaggiamento guadagnano <b>deadly</b>. Guadagni +3 luck quando attacchi con una spada se hai i disorder <b>Ghostly Beauty</b> e <b>Narcissistic</b>.",
 },
 'Zero Prescence': {
   'label': 'Zero Prescence',
  "description": "Guadagni +1 strength quando attacchi un mostro dal suo blind spot. Quando attacchi il mostro, sei sempre considerato nel suo blind spot.",
 },

 'Cloud Walk': {
  'expansion': 'storm knight',
  "description": "Una volta per showdown, guadagni +1{image@images/icons/movement} e puoi spenderlo quando vuoi per muoverti al massimo in una qualsiasi direzione. Questo movimento può essere usato quando sei <b>Doomed</b>. Il sopravvissuto può muoversi attraverso impassable terrain e spazi occupati senza subire collide.",
 },
 'High Frequency Agility': {
  'expansion': 'storm knight',
  "description": "Quando esaurisci i tuoi survival, tira 1d10. Con un 7+, guadagni +1{image@images/icons/activation} ed un token +1 speed all'inizio del tuo prossimo turno.",
 },
 'Mutual Induction': {
  'expansion': 'storm knight',
  "description": "All'inzio del tuo turno, se possiedi 0 survival, lancia 1d10. Con 6+, guadagni un token <b>Charge</b> che può essere piazzato su questa carta o su qualunque equipaggiamento che usa token <b>Charge</b>. Quando sei <b>knocked down</b>, rimuovi tutti i token <b>Charge</b> da questa carta. <br/><br/>Quando questa carta ha 3+ token <b>Charge</b>, puoi rimuoverli tutti per guadagnare +1 survival ed un token +1 movement.",
 },

 'Survivorship': {
  'expansion': 'allison ccg',
  "description": "All'Arrival, scegli a caso una delle tue survival action. Per questa azione , il suo costo viene ridotto di 1 fino alla fine dello showdown.",
 },
 'Drifting Dance': {
  'expansion': 'drifter knight',
  "description": "Quando pesci la carta Trap mentre attacchi con un arma di cui possiedi la specializzazione o la maestria, puoi subire 1d10+3 brain damage per annullare la trappola. Se lo fai rimescolala nel mazzo hit location e prova a ferire la hit location precedente normalmente.<br/><br/>Limite, una volta per showdown.",
 },
}

module.exports = {
 texts,
}
