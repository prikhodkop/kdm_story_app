const texts = {
 'Absent Seizures': {
  'expansion': 'gorm',
  'label': 'Absent Seizures',
  "description": "La prima volta che subisci un brain trauma ogni showdown, sei invece knocked down e dimentichi una fighting art (cancellala).",
 },
 'Aichmophobia': {
  'expansion': 'dragon king',
  'label': 'Aichmophobia',
  "description": "Non puoi attivare o <b>depart</b> con asce, spade, lance, pugnali, falci, o katar nella griglia equipaggiamento.",
 },
 'Anxiety': {
   'label': 'Anxiety',
  "description": "All'inizio di ogni showdown, guadagni il token <b>priority target</b> a meno che tu non abbia equipaggiamenti <b>stinky</b> nella tua griglia equipaggiamento.",
 },
 'Apathetic': {
   'label': 'Apathetic',
  "description": "Non puoi guadagnare o usare survival. Non puoi guadagnare coraggio. Cura questo disorder se hai 8+ understanding.",
 },
 'Arithmophilia': {
  'expansion': 'dragon king',
  'label': 'Arithmophilia',
  "description": "Quando guadagni questo disorder, lancia un 1d5. Il tuo movimento è pari al risultato.",
 },
 'Binge Eating': {
   'label': 'Binge Eating',
  "description": "Non puoi <b>depart</b> a meno che non hai equipaggiamenti <b>consumable</b> nella tua griglia equipaggiamento. Devi consumare se una scelta si presenta."
 },
 'Controlophobia': {
  'expansion': 'spidicules',
  'label': 'Controlophobia',
  "description": "Quando sei il monster controller, raddoppia il danno che subisci.",
 },
 'Coprolalia': {
   'label': 'Coprolalia',
  "description": "Tutto il tuo equipaggiamento è <b>noisy</b>. Vieni sempre visto come threat salvo tu sia knocked down, anche se un effetto indica diversamente."
 },
 'Delicious': {
  'expansion': 'lion god',
  'label': 'Delicious',
  "description": "Sei considerato una threat quando sei knocked down (salvo tu usi un effetto che indica diversamente).",
 },
 'Destined': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Destined',
  "description": "Se non <b>depart</b>, perdi tutti i survival e l'insanity.",
 },
 'Emotionless': {
  'expansion': 'sunstalker',
  'label': 'Emotionless',
  "description": "Non puoi guadagnare token +1 strength.",
 },
 'Enfeebled': {
  'expansion': 'lion god',
  'label': 'Enfeebled',
  "description": "Ti occorre un bleeding token in meno per ucciderti.",
 },
 'Fear of the Dark': {
   'label': 'Fear of the Dark',
  "description": "Ti ritiri. Se guadagni questo disorder durante la caccia o lo showdown, ti fingi coraggioso fino al tuo ritorno al settlement, giurando di non lasciare mai più il Lantern Hoard."
 },
 'Flower Addiction': {
  'expansion': 'flower knight',
  'label': 'Flower Addiction',
  "description": "Puoi <b>depart</b> per cacciare solo il Flower Knight. Dopo che <b>depart</b>, cura questo disorder.",
 },
 'Ghostly Beauty': {
  'expansion': 'flower knight',
  'label': 'Ghostly Beauty',
  "description": "Raddoppia tutta l'insanity che guadagni. Raddoppia tutti i survival che spendi.",
 },
 'Hemophobia': {
   'label': 'Hemophobia',
  "description": "Durante lo showdown, ogni volta che un sopravvissuto <i>(incluso te stesso)</i> guadagna un bleeding token, sei knocked down."
 },
 'Hoarder': {
   'label': 'Hoarder',
  "description": "Ogni volta che sei un <b>returning survivor</b>, archivia 1 risorsa guadagnata dello showdown e guadagna +1 courage.",
 },
 'Honorable': {
   'label': 'Honorable',
  "description": "Non puoi attaccare un mostro dal suo blind spot o se è knocked down.",
 },
 'Hyperactive': {
   'label': 'Hyperactive',
  "description": "Durante lo showdown, devi muoverti di almeno 1 spazio ogni round.",
 },
 'Immortal': {
   'label': 'Immortal',
  "description": "Mentre sei insane, converti tutto il danno alle tue hit location in brain damage. Sei troppo impegnato a rivelare la tua gloria personale che non puoi spendere survival mentre sei insane."
 },
 'Indecision': {
   'label': 'Indecision',
  "description": "Se sei l'event revealer di un hunt event che richiede un tuo tiro, tira due volte e scegli il risultato peggiore.",
 },
 'Megalophobia': {
  'expansion': 'gorm',
  'label': 'Megalophobia',
  "description": "Non puoi <b>depart</b> per hunt o showdown con mostri che occupano più di 4 spazi sulla showdown board.",
 },
 'Monster Panic': {
   'label': 'Monster Panic',
  "description": "Ogni volta che subisci un brain damage da un azione <b>Intimidate</b> , subisci 1 brain damage aggiuntivo."
 },
 'Motion Sickness': {
  'expansion': 'dung beetle knight',
  'label': 'Motion Sickness',
  "description": "Ogni volta che subisci <b>knockback</b>, guadagni 1 bleeding token.",
 },
 'Narcissistic': {
  'expansion': 'flower knight',
  'label': 'Narcissistic',
  "description": "Non puoi indossare armature alla testa. Se stai indossando dell'armatura alla testa quando guadagni questo disorder, archiviala.",
 },
 'Overprotective': {
  'expansion': 'sunstalker',
  'label': 'Overprotective',
  "description": "Quando un sopravvissuto adiacente è knocked down, sei anche tu knocked down per correre in suo aiuto.",
 },
 'Performance Anxiety': {
  'expansion': 'lion knight',
  'label': 'Performance Anxiety',
  "description": "Non puoi essere nominato per <b>Intimacy</b>. Cura questo disorder se hai 8+ courage.",
 },
 'Post-Traumatic Stress': {
   'label': 'Post-Traumatic Stress',
  "description": "Nella prossima fase settlement, non puoi contribuire o partecipare in nessun endevour. Salta la prossima caccia per riprenderti.",
 },
 'Prey': {
   'label': 'Prey',
  "description": "Non puoi spendere survival a meno che tu non sia insane."
 },
 'Prima Donna': {
  'expansion': 'lion knight',
  'label': 'Prima Donna',
  "description": "Ogni turno dei sopravvissuti, devi agire per primo <i>(tira ogni turno in caso più sopravvissuti abbiano questo disorder)</i>.",
 },
 'Quixotic': {
   'label': 'Quixotic',
  "description": "Se sei insane quando <b>depart</b>, guadagni +1 survival ed +1 token strength."
 },
 'Rageholic': {
   'label': 'Rageholic',
  "description": "Quando subisci una severe injury, subisci anche il brain trauma <b>frenzy</b> ."
 },
 'Revenge': {
  'expansion': 'spidicules',
  'label': 'Revenge',
  "description": "Quando un sopravvissuto muore durante lo showdown, subisci il brain trauma <b>Frenzy</b> .",
 },
 'Secretive': {
   'label': 'Secretive',
  "description": "Quando sei un <b>returning survivor</b>, diventi rapidamente preoccupato riguardo i tuoi interessi. Devi saltare la prossima caccia per risorverli.",
 },
 'Seizures': {
   'label': 'Seizures',
  "description": "During the showdown, whenever you suffer damage to your head location, you are knocked down.",
 },
 'Shallow Lungs': {
  'expansion': 'lion knight',
  'label': 'Shallow Lungs',
  "description": "Quando effettui <b>encourage</b> sei knocked down.",
 },
 'Spiral Ganglia': {
  'expansion': 'slenderman',
  'label': 'Spiral Ganglia',
  "description": "All'inizio dello showdown, guadagni la carta status <b>Darkness Awareness</b> .",
 },
 'Squeamish': {
   'label': 'Squeamish',
   "description": "Non puoi <b>depart</b> con alcun equipaggiamento <b>stinky</b> nella tua griglia equipaggiamento. Se uno status o un effetto ti fa diventare stinky, perdi tutti i tuoi survival."
 },
 'Stage Fright': {
  'expansion': 'lion knight',
  'label': 'Stage Fright',
  "description": "Ogni volta che diventi <b>doomed</b> o guadagni il token <b>priority target</b> , perdi 1 survival.",
 },
 'Stark Raving': {
  'expansion': 'lion god',
  'label': 'Stark Raving',
  "description": "Sei sempre <b>insane</b>, a prescindere dalla tua insanity.",
 },
 'Sun-Drunk': {
  'expansion': 'sunstalker',
  'label': 'Sun-Drunk',
  "description": "Quando hai un token +1 strength non puoi <b>dash</b>, <b>dodge</b>, o <b>Run Away</b>.",
 },
 'Superstitious': {
  'expansion': 'dragon king',
  'label': 'Superstitious',
  "description": "Non puoi attivare o <b>depart</b> con equipaggiamento con la dicitura <b>other</b> nella tua griglia equipaggiamento.",
 },
 'Tiny Arachnophobia': {
  'expansion': 'spidicules',
  'label': 'Tiny Arachnophobia',
  "description": "Non puoi trasportare nessun equipaggiamento con la parola chiave amber. Non puoi guadagnare nessuna risorsa con la parola chiave silk.",
 },
 'Traumatized': {
   'label': 'Traumatized',
   "description": "Ogni volta che termini la tua azione adiacente al mostro, sei knocked down.",
 },
 'Tunnel Vision': {
  'expansion': 'lion god',
  'label': 'Tunnel Vision',
  "description": "Quando spendi {image@images/icons/activation}, puoi solo attivare le armi.",
 },
 'Unlucky': {
  'expansion': 'lion knight',
  'label': 'Unlucky',
  "description": "Non puoi causare ferite critiche.",
 },
 'Vermin Obsession': {
  'expansion': 'dung beetle knight',
  'label': 'Vermin Obsession',
  "description": "Quando è presente un terrain <b>Bug Patch</b> sulla showdown board, sei talmente sopraffatto che diventi <b>doomed</b>.",
 },
 'Vestiphobia': {
   'label': 'Vestiphobia',
   "description": "Non puoi indossare armature alla locazione body. Se indossi un armatura alla locazione body quando guadagni questo disorder, archiviala in quanto te la strappi di dosso!"
 },
 'Weak Spot': {
   'label': 'Weak Spot',
   "description": "Quando guadagni questo disorder, tira una location casuale e registrala. Non puoi <b>depart</b> a meno che tu non possegga armatura in quella location."
 },

 'Contact Electrification': {
  'expansion': 'storm knight',
  'label': 'Contact Electrification',
  "description": "Quando un <b>knockback</b> provoca una collisione con un altro sopravvissuto, interrompi il movimento di <b>knockback</b> . Entrambi I sopravvissuti vengono piazzati uno spazio a sinistra o destra del punto di collisione. Subiscono 1 danno ad una location casuale e sono <b>knocked down</b> a causa della scarica elettrostatica.",
 },
 'Static Conductor': {
  'expansion': 'storm knight',
  'label': 'Static Conductor',
  "description": "Quando subisci danno alla location <b>Legs</b>, sei <b>knocked down</b> e subisci <b>knockback 3</b>.",
 },

 'Impetous': {
  'expansion': 'allison ccg',
  "description": "<i style='color:#aaa;'>La tua sicurezza è la tua debolezza.</i><br/><br/>Devi sempre <b>depart</b>, a meno che non sei costretto a saltare la prossima caccia.<br/>Se giungi a <b>retire</b>, invece affronterai l'esilio. Sei morto.",
 },

 'Enervated System': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Il tuo sistema centrale nervoso è stato lacerato.</i><br/><br/>Quando <b>Arrival</b>, aggiungi +1 ad ogni hit location.<br/>Non puoi guadagnare token attributo positivi. Se dovresti, invece subisci 1 danno ad una locazione random.",
 },
 'Misaligned Chakras': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Il tuo equilibrio naturale è stato espluso.</i><br/><br/>Quando hai questo disorder, hai -1 evasion e -1 accuracy.<br/>Quando lanci su di una event table, lancia due volte e tieni il risultato minore.",
 },
 'Morbid Curiosity': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>La tua sete di conoscenza è inestinguibile.</i><br/><br/>Devi investigare se si presenta l'opportunità.<br/>Quando deve essere nominato un sopravvissuto random , vieni invece nominato tu.",
 },
 'Respectful': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'>Provi un grande rispetto per le bestie a cui dai la caccia e non le disonoreresti mai.</i><br/><br/>Puoi attaccare solo dalla parte frontale del mostro. Se lo fai, guadagni +1 strength per quell'attacco.",
 },
 'Toxiphobia': {
  'expansion': 'drifter knight',
  "description": "<i style='color:#aaa;'> Si può mangiare? Sei sicuro?</i><br/><br/>Ogni volta che <b>consume</b>, lancia 1d10.<br/>Se ottieni 1-5, subisci brain damage pari al risultato del lancio. Se ottieni 6+, guadagni insanity pari al lancio ottenuto.",
 },
}


module.exports = {
 texts,
}
