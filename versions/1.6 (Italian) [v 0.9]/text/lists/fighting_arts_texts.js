const event_img = imageHTML('images/icons/book', '0.9em;display:inline;vertical-allign:bottom')

const texts = {
 'Abyssal Sadist': {
  'expansion': 'manhunter',
  'label': 'Abyssal Sadist',
  "description": "La prima volta che ferisci il mostro a ogni attacco, guadagni +1 survival e +1 insanity. Ignora l'effetto dei disorder <b>Fear of the Dark</b> e <b>Prey</b>."
 },
 'Acrobatics': {
  'expansion': 'dragon king',
  'label': 'Acrobatics',
  "description": "Quando sei adiacente al mostro, puoi spendere {image@images/icons/movement} per posizionare il tuo sopravvissuto in qualunque altro spazio adiacente al mostro.",
 },
 'Ambidextrous': {
   'label': 'Ambidextrous',
  "description": "Tutte le armi da mischia nella tua griglia equipaggiamento guadagnano <b>paired</b>. Ambidextrous non può essere usata se ci sono scudi, armi a due mani, o equipaggiamento pesante nella tua griglia equipaggiamento."
 },
 'Backstabber': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Backstabber',
  "description": "Per un <b>Perfect hit</b> con un pugnale, il tuo primo tentativo di ferire per quell'attacco guadagna <b>Devastating 1</b>.<br/><br/>Quando attacchi il mostro con un pugnale dal suo blind spot, se hai il disorder <b>Hoarder</b> o <b>Secretive</b>, incrementa l'intervallo del tuo <b>Perfect hits</b> di 1."
 },
 'Berserker': {
   'label': 'Berserker',
  "description": "Una volta per showdown, puoi spendere {image@images/icons/activation} per subire <b>bash</b> e il <b>frenzy</b> brain trauma."
 },
 'Blotted Out': {
  'expansion': 'slenderman',
  'label': 'Blotted Out',
  "description": "Quando subisci un brain trauma, guadagni un bleeding token.",
 },
 'Burning Ambition': {
  'expansion': 'sunstalker',
  'label': 'Burning Ambition',
  "description": "Puoi ignorare lo <b>Skip the Next Hunt</b>. La casella \"Skip Next Hunt\" sul tuo sopravvissuto non può essere riempita.",
 },
 'Burning Focus': {
  'expansion': 'lion god',
  'label': 'Burning Focus',
  "description": "Se hai 0 survival all'inizio della tua azione, guadagni 1 survival.",
 },
 'Carapace of Will': {
  'expansion': 'dung beetle knight',
  'label': 'Carapace of Will',
  "description": "All'inizio dello showdown guadagni la survivor status card <b>Steadfast</b>. Quando vieni attaccato, se hai 2+ steadfast token, ignora un colpo subito e rimuovi tutti gli steadfast token.",
 },
 'Champions Rite': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Champion\'s Rite',
  "description": "Prima di effettuare un attacco, tu puoi aggiungere il tuo valore di understanding al tuo attributo accuracy per quell'attacco. Limite, una volta per showdown."
 },
 'Clutch Fighter': {
   'label': 'Clutch Fighter',
  "description": "Quando hai 3 o più bleeding token, guadagni +1 strength e +1 accuracy.",
 },
 'Combo Master': {
   'label': 'Combo Master',
  "description": "Per ogni <b>Perfect hit</b>, effettua 1 tiro di attacco addizionale."
 },
 'Crazed': {
   'label': 'Crazed',
  "description": "Per ogni <b>Perfect hit</b>, guadagni +1 insanity."
 },
 'Crossarm Block': {
   'label': 'Crossarm Block',
  "description": "Ogni volta che vieni colpito, dopo aver tirato per la hit location, puoi cambiare 1 risultato sulla hit location <b>arms</b>."
 },
 'Defender': {
  'expansion': 'sunstalker',
  'label': 'Defender',
  "description": "Quando un sopravvissuto adiacente a te è knocked down, puoi spendere 1 survival. Se lo fai, lui si rialza e guadagna +1 survival dalle tue parole di incoraggiamento. Non puoi usare questa abilità se hai <b>broken jaw</b>.",
 },
 'Double Dash': {
   'label': 'Double Dash',
  "description": "Durante la tua azione, una volta per round, puoi spendere {image@images/icons/activation} per guadagnare +1{image@images/icons/movement}."
 },
 'Ethereal Pact': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Ethereal Pact',
  "description": "Aggiungi +3 ai tuoi tiri di brain trauma.<br/><br/>Quando subisci il brain trauma <b>Impossible!</b>, il fungo nella tua testa si connette al sogno. Leggi "+event_img+"<b>Birth of a Savior</b> e scegli un sogno. (Se hai già raggiunto Age 2, non puoi guadagnare la secret fighting art del sogno)<br/><br/>Se sei un Savior, questa Fighting Art non ha effetto."
 },
 'Extra Sense': {
   'label': 'Extra Sense',
  "description": "Puoi usare <b>dodge</b> 1 volta addizionale per round."
 },
 'Fated Blow': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Fated Blow',
  "description": "Una volta per showdown, puoi concedere al tuo prossimo tentativo di ferire +2 strength e <b>Devastating 1</b>.",
 },
 'Giants Blood': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Giant\'s Blood',
  "description": "Produci in eccesso ormoni della crescita! Quando guadagni questa fighting arts, guadagna +1 strength e -1 evasion permanentemente.<br/><br/>Puoi <b>consume</b> teschi. Se lo fai, guadagni la menomazione <b>Marrow Hunger</b>.",
 },
 'Harvestman': {
  'expansion': 'spidicules',
  'label': 'Harvestman',
  "description": "Guadagni +3 al movimento. Quando sei knocked down, guadagna -1 movement token. Se possiedi il disorder <b>Tiny Arachnophobia</b>, sei troppo impaurito dai ragni per imitarli e non puoi usare questa fighting art."
 },
 'Headliner': {
  'expansion': 'lion knight',
  'label': 'Headliner',
  "description": "Quando diventi <b>doomed</b> o guadagni il token <b>priority target</b>, puoi scegliere se guadagnare 1 survival o +1 strenght token.",
 },
 'Heroic': {
  'expansion': 'lion god',
  'label': 'Heroic',
  "description": "Una volta per showdown, se ti trovi adiacente al mostro e hai 3+ survival, puoi spendere tutti i tuoi survival per un colpo automatico che infligge una ferita critica.",
 },
 'Infinite Lives': {
  'expansion': 'echoes of death',
  'type': 'strain',
  'label': 'Infinite Lives',
  "description": "Non puoi creare nuovi ricordi.<br/><br/>Non puoi acquisire nuove fighting arts o disorders. Quando ne guadagneresti uno, invece guadagni una nuova vita! Datti un nuovo nome e un lifetime reroll. (Guadagni +1 survival per il rinominarti. Guadagni il reroll a prescindere dal principle. Solo 1 volta per la vita.)",
 },
 'Last Man Standing': {
   'label': 'Last Man Standing',
  "description": "Quando sei l'unico sopravvissuto sulla showdown board, puoi non guadagnare bleeding token o essere knocked down."
 },
 'Leader': {
   'label': 'Leader',
  "description": "Ogni volta che esegui <b>encourage</b> su un survival, questo guadagna +1 speed token fino alla fine del round. Una volta per hunt phase, puoi ispirare un altro sopravvissuto. Questi useranno il tuo understanding ed il tuo coraggio per risolvere uno story event o hunt event a.. (Esempio: se hai 3+ di coraggio puoi ispirare un altro sopravvissuto a camminare sul sentiero del coraggio durante <b>Overwhelming Darkness</b>.)"
 },
 'Lure Epilepsy': {
  'expansion': 'gorm',
  'label': 'Lure Epilepsy',
  "description": "Una volta per showdown, puoi spendere {image@images/icons/activation} per concedere a te stesso un attacco. Subisci un brain trauma casuale e sei knocked down.",
 },
 'Mammoth Hunting': {
  'expansion': 'gorm',
  'label': 'Mammoth Hunting',
  "description": "Guadagna +1 strength quando attacchi da uno spazio adiacente esterno al monster's facing e al blind spot.",
 },
 'Mighty Strike': {
   'label': 'Mighty Strike',
  "description": "Per ogni <b>Perfect hit</b>, guadagna +2 strength fino alla fine dell'attaco."
 },
 'Monster Claw Style': {
   'label': 'Monster Claw Style',
  "description": "I tuoi attacchi <b>Fist & Tooth</b> guadagnano +1 accuracy, +1 strength, e <b>savage</b>."
 },
 'Orator of Death': {
   'label': 'Orator of Death',
  "description": "Una volta per showdown, puoi spendere {image@images/icons/activation} per far guadagnare a tutti i sopravvissuti non sordi +2 insanity. Quando muori, puoi usare <b>encourage</b> su tutti i sopravvissuti con le tue ultime parole.",
 },
 'Otherworldly Luck': {
  'expansion': 'flower knight',
  'label': 'Otherworldly Luck',
  "description": "Durante la Hunt Phase e Settlement Phase, ogni volta che tiri su una tabella puoi aggiungere +1 al risultato. Questo non può eccedere il risultato possibile di quella tabella. (Questo include Hunt Events, Story Events, Endeavors, Settlement Events, etc.)",
 },
 'Phantom Friend': {
  'expansion': 'slenderman',
  'label': 'Phantom Friend',
  "description": "La prima volta che guadagni una risorsa durante lo showdown, puoi nutrire il tuo amico spettrale. Se lo fai, archivia quella risorsa e guadagni +1 evasion token.",
 },
 'Propulsion Drive': {
  'expansion': 'dung beetle knight',
  'label': 'Propulsion Drive',
  "description": "All'inizio dello showdown guadagni la survivor status card <b>Momentum</b>. Quando attacchi, se possiedi 5+ token momentum, rimuovili tutti e lancia 1d10. Guadagni quell'ammontare di luck e strength quando provi a ferire la prima hit location scelta per questo attacco.",
 },
 'Purpose': {
  'expansion': 'sunstalker',
  'label': 'Purpose',
  "description": "I tuoi compagni ti rendono forte abbastanza da superare i limiti della morte stessa. Durante lo showdown, se dovessi guadagnare un numero letale di bleeding token mentre è presente un altro sopravvissuto, lancia 1d10. Con un 6+, sopravvivi ma sei knocked down. Non morirai di sanguinamento finché non guadagnerai un altro bleeding token.",
 },
 'Rhythm Chaser': {
   'label': 'Rhythm Chaser',
  "description": "All' <b>Arrival</b>, guadagna +1 evasion token. Quando sei knocked down, se non hai strumenti musicali nella tua griglia equipaggiamento, rimuovi tutti i +1 evasion token. Rhythm chaser non può essere usata se è presente un qualsiasi equipaggiamento pesante nella tua griglia equipaggiamento."
 },
 'Ruthless': {
  'expansion': 'lion god',
  'label': 'Ruthless',
  "description": "Ogni volta che un sopravvissuto muore durante lo showdown, tira 1d10. Con un 7+, guadagni una basic resource <b>Skull</b>.",
 },
 'Seasoned Hunter': {
  'expansion': 'manhunter',
  'label': 'Seasoned Hunter',
  "description": "Ogni volta che il risultato di un  hunt event è: 11, 22, 33, 44, 55, 66, 77, 88, 99, or 100, l'hunt revealer guadagna +1 understanding e +1 courage.",
 },
 'Sneak Attack': {
  'expansion': 'sunstalker',
  'label': 'Sneak Attack',
  "description": "Quando attacchi il mostro dal suo blind spot, guadagni +4 strength per quell'attacco.",
 },
 'Strategist': {
   'label': 'Strategist',
  "description": "Durante il setup dello showdown, dopo aver posizionato i terrain, puoi aggiungere una carta terrain <b>Giant Stone Face</b> o una <b>Toppled Pillar</b> sulla plancia dello showdown."
 },
 'Tenacious': {
  'expansion': 'lion knight',
  'label': 'Tenacious',
  "description": "Quando il tentativo di ferire una hit location fallisce, puoi rimettere quella hit location sulla cima del mazzo hit location piuttosto che nella pila degli scarti. Limite, una volta per round.",
 },
 'Thrill Seeker': {
   'label': 'Thrill Seeker',
  "description": "Ogni volta che guadagni un survival durante la showdown phase, guadagni 1 survival addizionale."
 },
 'Timeless Eye': {
   'label': 'Timeless Eye',
  "description": "I tuoi tiri per attaccare contano come un <b>perfect hit</b> con un risultato di 9 o 10. Non puoi usare Timeless Eye se hai la severe head injury <b>blind</b>.",
 },
 'Tough': {
   'label': 'Tough',
  "description": "Quando tiri sulla tabella severe injury, a meno che tu non ottieni un 1, aggiungi +1 al risultato. (Questo non include i brain trauma. Il risultato non può superare il 10.)"
 },
 'Trailblazer': {
  'expansion': 'manhunter',
  'label': 'Trailblazer',
  "description": "Il gruppo di caccia può iniziare la caccia 1 spazio più vicino al mostro. All'inizio dello showdown, tutti i sopravvissuti guadagnano +1 survival e fino a +1 insanity.",
 },
 'Transcended Masochist': {
  'expansion': 'manhunter',
  'label': 'Transcended Masochist',
  "description": "Quando guadagni un bleeding token, guadagni +1 survival e +1 insanity. Ignora l'effetto del disorder <b>Aichmophobia</b> e <b>Apathetic</b>.",
 },
 'Trick Attack': {
  'expansion': 'sunstalker',
  'label': 'Trick Attack',
  "description": "Una volta per showdown, quando ferisci un mostro dal suo blind spot, un sopravvissuto adiacente a te può guadagnare il token <b>priority target</b>.",
 },
 'Tumble': {
   'label': 'Tumble',
  "description": "Quando qualcosa dovrebbe <b>collidere</b> con te, lancia un 1d10. Con un risultato di 6+, rotoli via con successo dal danno. Invece, piazza il tuo sopravvissuto in piedi nello spazio libero più vicino fuori dal sentiero di collisione."
 },
 'Unbreakable': {
  'expansion': 'dragon king',
  'type': 'dragon trait',
  'label': 'Unbreakable',
  "description": "Una volta per lantern year, puoi ignorare uno dei tuoi risultati severe injury. Se lo fai, guadagni un disorder casuale.",
 },
 'Unconscious Fighter': {
   'label': 'Unconscious Fighter',
  "description": "Occorrono 7 bleeding token per ucciderti."
 },
 'Unrelenting': {
  'expansion': 'lion god',
  'label': 'Unrelenting',
  "description": "Se tutti i tuoi tiri di attacco falliscono, puoi spendere 1 survival per rilanciare tutti i dadi.",
 },
 'Vengeance': {
  'expansion': 'spidicules',
  'label': 'Vengeance',
  "description": "Quando un sopravvissuto muore durante lo showdown, guadagna +4 survival e +1 strength token.",
 },
 'Wardrobe Expert': {
  'expansion': 'lion knight',
  'label': 'Wardrobe Expert',
  "description": "Quando subisci una severe injury ad una hit location, puoi archiviare la gear che appartiene a quella locazione per ignorarla e guadagnare +1 survival.",
 },

 'Quick Strike': {
  'expansion': 'allison ccg',
  "description": "Durante la tua azione, puoi spendere {image@images/icons/movement}e{image@images/icons/activation} per muoverti in linea retta pari al tuo movement. Se lo fai, e ti muovi di 5+ caselle con le ultime 2 caselle di movimento adiacenti al mostro tira 1d10. Se il risultato è 5+, piazza il sopravvissuto nel blind spot del mostro e il mostro subisce 1 ferita. Diversamente, guadagni 2 bleeding token.",
 },

 'Graceful Retreat': {
  'expansion': 'drifter knight',
  "description": "Ogni volta che usi <b>dash</b>, guadagni +1 evasion token fino all'inizio della tua prossima azione.",
 },
 'Lethal Blood': {
  'expansion': 'drifter knight',
  "description": "Occorre un bleeding token in meno per ucciderti.<br/><br/>Quando sei adiacente al mostro, questo ha <b>-X</b> alla costituzione dove <b>X</b> è uguale al numero di bleeding token che possiedi. ",
 },
 'Man of War': {
   'label': 'Man o\' War',
  'expansion': 'drifter knight',
  "description": "Quando attacchi dal blind spot, con un <b>perfect hit</b>, puoi voltare il mostro verso di te.<br/><br/>Quando sei di fronte al mostro, i tuoi attacchi guadagnano +1 strength.",
 },
 'Veiled Strike': {
  'expansion': 'drifter knight',
  "description": "Quando attacchi con una lancia e sei adiacente al blind spot del mostro, sei considerato nel blind spot.",
 },
}

module.exports = {
 texts,
}
