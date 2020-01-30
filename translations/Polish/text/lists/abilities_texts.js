const texts = {
 'Acid Palms': {
   'label':'Kwasowe dłonie',
   'description': 'Dodaj 1k10 siły do zranienia gdy atakujesz pięściami i zębami.',
 },
 'Ageless': {
   'label':'Bezwiekowy',
   'description': 'Możesz wyruszać na łowy,będąc w stanie spoczynku. Gdy otrzymujesz doświadczenie łowieckie, możesz zdecydować, że go nie otrzymasz.',
 },
 'Analyse': {
   'label':'Analiza',
   'description': 'Na początku tury Ocalałych, jeśli przylegasz do potwora, odkryj górną kartę Sl, a następnie umieść ją z powrotem na wierzchu talii.',
 },
 'Bitter Frenzy': {
   'label':'Gorzka furia',
   'description': 'Podczas starcia gdy pierwszy raz otrzymasz traumę umysłu furia, zyskujesz 1k10 przetrwania. Możesz wydawać przetrwanie będąc w furii.', 
 },
 'Burnt Nerves': {
   'label':'Spalone nerwy',
   'description': 'Jesteś odporny na walnięcie.',
 },
 'Caratosis': {
   'label':'Karatoza',
   'description': 'Przed rzutem ataku, możesz zadeklarować „Karatoza X” głośnym, wyraźnym głosem. Jeśli to zrobisz, ten atak otrzymuje X automatycznych trafień. X nie może być większe ilość twoich czerwonych powiązań. Po zakończonym ataku, otrzymujesz +X doświadczenia łowieckiego. Kiedy uaktywniasz wiek 2, odkrywasz sekretną sztukę walki Bestia z Karatozy.',
 },
 'Crystal Skin': {
   'label':'Kryształowa skóra',
   'description': 'Ignorujesz ignorujesz klątwę i nie możesz nosić pancerza. Kiedy wyruszasz na łowy otrzymujesz 3 pkt pancerza do wszystkich miejsc trafienia. Otrzymujesz -2 do rezultatu rzutów na ciężki uraz. Gdy uczestniczysz we współżyciu, noworodek otrzymuje kryształową skórę dodatkowo, niezależnie od wszelkich innych rezultatów rzutów.',
 },
 'Dead Inside': {
   'label':'Wewnętrznie martwy',
   'description': 'Nie możesz zdobywać <b>Przetrwania</b>.',
 },
 'Devoted Union': {
   'label':'Devoted Union',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>During the survivor\'s turn, while you and your partner are within range of the monster, you may perform a <b<combined attack</b>. Limit, once per round.<br/><br/><b style="color:#cc0;">Combined attack</b>: Partners each spend <b>Activation</b> and activate a weapon. They simultaneously make attack rolls, determining hits based on their individual accuracy. Draw hit locations for all hits together. Reolve hit locations one at a time. Partners choose which survivor attempts to wound each hit location <i>(including the trap)</i>. Each partner may not make more wound attempts than the number of their attack rolls.',
 },
 'Dormenatus': {
   'label':'Dormenatus',
   'description': 'Kiedy otrzymujesz obrażenia, możesz zadeklarować „Dormenatus X” głośnym, wyraźnym głosem. Jeśli to zrobisz, otrzymujesz X pkt pancerza do każdego miejsca trafienia. X nie może być większe niż ilość twoich zielonych powiązań. Po rozstrzygnięciu obrażeń, otrzymujesz +X doświadczenia łowieckiego. Kiedy uaktywniasz wiek 2, odkrywasz sekretną sztukę walki Łaska Dormenatus.',
 },
 'Endless Babble': {
   'label':'Ciągły bełkot',
   'description': 'Kiedy wyruszasz, pozostali wyruszający Ocalali otrzymują +1 obłędu. Nie możesz wykonywać akcji <b>Natchnienia</b>.',
 },
 'Enduring Legacy': {
   'label':'Enduring Legacy',
   'description': 'You may nominate only your <b>partner</b> and yourself for <b>Intimacy</b>. When your partner dies, gain random disorder and lose this ability.<br/><br/>Your born or adopted children may <b>inherit</b> one positive attribute and one fighting art from among their parents.<br/><br/>During the settlement phase, you may adopt an unnamed survivor that has never departed the settlement. Survivors may only <b>inherit</b> from parents once per lifetime.<br/><br/>When you have <b>3+</b> children, your family is complete, you <b>retire</b> with your partner and stop having children forever.',
 },
 'Explore': {
   'label':'Eksploracja',
   'description': 'Kiedy rzucasz w tabelce badania, dodaj +2 do wyniku rzutu kością.',
 },
 'Fated Battle': {
   'label':'Bitewny los',
   'description': 'Na początku starcia z wybranym potworem, otrzymujesz żeton szybkości +1.',
 },
 'Homing Instinct': {
   'label':'Wyczucie kierunku',
   'description': 'Dodaj 5 do rzutu podczas wydarzenia Ucieczka.',
 },
 'Iridescent Hide': {
   'label':'Iridescent Hide',
   'description': 'Gain +1 armor to all hit locations for each different-colored affinity in your gear grid.',
   'type': 'dragon trait',
 },
 'Iron Will': {
   'label':'Żelazna wola',
   'description': 'Nie możesz zostać powalony. Będąc odrzucany odległość odrzutu zmniejsza się do 1. Odrzucenie = 1.',
 },
 'Legendcaller': {
   'label':'Zew legendy',
   'description': 'Raz w życiu, na planszy łowów po polu Przytłaczająca ciemność, zamiast rzucić na losowe wydarzenie, użyj <b>\"53\"</b> jako wyniku.',
 },
 'Leyline Walker': {
   'label':'Leyline wędrowiec',
   'description': 'Dopóki nie masz pancerza lub akcesoriów w swojej siatce ekipunku, otrzymujesz +3 do zwodów.',
 },
 'Life Exchange': {
   'label':'Wymiana życia',
   'description': 'Podczas rozstrzygania starcia otrzymujesz 1 dodatkowy punkt doświadczenia łowieckiego. Nie możesz nosić ekwipunku: inne. Jeśli wyzwolisz wydarzenie fabularne Biały sekret, przestajesz istnieć. Kiedy przechodzisz w stan spoczynku, przestajesz istnieć.',
 },
 'Lucerna': {
   'label':'Świetlistość',
   'description': 'Przed rzutem na zranienie, możesz zadeklarować „świetlistość X” głośnym, wyraźnym głosem. Jeśli to zrobisz, rzut na zadanie rany otrzymuje X szczęścia. X nie może być większe niż ilość twoich niebieskich powiązań. Kiedy atak się zakończy, otrzymujesz +X doświadczenia łowieckiego. Kiedy uaktywniasz wiek 2, odkrywasz sekretną sztukę walki Świetlista latarnia.',
 },
 'Mad Oracle': {
   'label':'Szalona wyrocznia',
   'description': 'Raz podczas starcia, gdy potwór dobiera kartę SI, wymów głośno nazwę karty. Jeśli wyciągnięta karta jest tą której nazwę wypowiedziałeś otrzymujesz żeton +1 do zwodów.',
 },
 'Marrow Hunger': {
   'label':'Głód szpiku',
   'description': 'Kiedy wydarzenie osady: <b>Morderstwo</b> lub <b>Zjadacz czaszek</b> zostanie wylosowane, zostajesz automatycznie wybrany.',
 },
 'Matchmaker': {
   'label':'Swat',
   'description': 'Jeśli jesteś powracającym Ocalałym, raz na rok możesz wydać Działanie by wykonać <b>Współżycie</b>.',
 },
 'Metal Maw': {
   'label':'Metalowa szczęka',
   'description': 'Twoje pięści i zęby zyskują ostrość <i>(dodajesz 1k10 siły, do każdego rzutu zranienia)</i>.',
 },
 'Nightmare Blood': {
   'label':'Krew koszmarów',
   'description': 'Kiedy otrzymujesz żeton krwawienia dodaj 1 pkt pancerza do wszystkich miejsc trafienia.',
 },
 'Nightmare Membrane': {
   'label':'Membrana koszmarów',
   'description': 'Możesz wydać <b>Aktywację</b> + <b>ruch</b> aby wymienić swój jeden dowolny żeton, na żeton siły +1.',
 },
 'Nightmare Spurs': {
   'label':'Koszmarne ostrogi',
   'description': 'Raz na starcie, możesz wydać całe swoje przetrwanie <i>(co najmniej 1)</i>, aby wymienić wszystkie swoje żetony +1 siły na tyle samo żetonów +1 szczęścia.',
 },
 'Oracles eye': {
   'label':'Oracles eye',
   'description': 'At the start of the showdown, look through the AI deck then shuffle.',
   'type': 'dragon trait',
 },
 'Partner': {
   'label':'Partner',
   'description': 'Kiedy oboje przybywacie, otrzymujecie przetrwanie w wysokości limitu osady. Będąc na polu przyległym do partnera, otrzymujecie +1 siły. Partnerzy mogą wbierać tylko siebie nawzajem do <b>Współżycia</b>. Kiedy partner umiera, żyjący otrzymuje losowe zaburzenie i traci tę zdolność.',
 },
 'Peerless': {
   'label':'Niezrównany',
   'description': 'Kiedy otrzymujesz obłęd, możesz otrzymać taką samą liczbę przetrwania.',
 },
 'Possessed': {
   'label':'Opętany',
   'description': 'Nie możesz używać:  specjalizacji w broni, mistrzostwa w broni, sztuk walki.',
 },
 'Prepared': {
   'label':'Przygotowany',
   'description': 'Podczas rzutu mającego wybrać Spóźnionego, dodaj swoje doświadczenie łowieckie do wyniku rzutu.',
 },
 'Rivals Scar': {
   'label':'Rivals Scar',
   'description': 'You gain permanent +1 strength and permanent -1 evasion.',
 },
 'Sour Death': {
   'label':'Kwaśna śmierć',
   'description': 'Kiedy jesteś powalony, możesz natchnąć samego siebie (nawet będąc głuchym). Jeśli to zrobisz, otrzymujesz żeton siły +1.',
 },
 'Stalwart': {
   'label':'Krzepki',
   'description': 'Ignorujesz powalenie przez traumy umysłu i akcje zastraszania.',
 },
 'Story of the Forsaker': {
   'label':'Historia o Porzuconym',
   'description': 'Nie możesz zostać powalonym podczas starcia z nemezis.',
 },
 'Story of the Goblin': {
   'label':'Historia o Goblinie',
   'description': 'Raz na starcie, możesz rzucić 1k10. Przy 3+ otrzymujesz żeton celu priorytetowego, a potwór otrzymuje żeton obrażeń +1.',
 },
 'Story of the Young Hero': {
   'label':'Historia o młodym bohaterze',
   'description': 'Na początku swojego aktu, możesz otrzymać 2 żetony krwawienia i +1 przetrwania.',
 },
 'Super Hair': {
   'label':'Super włosy',
   'description': 'Możesz wydać <b>Aktywację</b> aby wymienić dowolny żeton z sąsiadującym Ocalałym posiadającym zdolność <b>Super włosy</b>.',
 },
 'Sweet Battle': {
   'label':'Bitewna słodycz',
   'description': 'Raz na rundę, możesz wykonać przyspieszenie bez wydawania przetrwania. Jeśli to zrobisz, Aktywacja musi być użyta by aktywować broń.',
 },
 'Thundercaller': {
   'label':'Zew grzmotu',
   'description': 'Raz w życiu, na planszy łowów po polu Przytłaczająca ciemność, zamiast rzucić na losowe wydarzenie, użyj <b>\"100\"<b> jako wyniku.',
 },
 'Tinker': {
   'label':'Złota rączka',
   'description': 'Gdy jesteś powracającym z łowów Ocalałym, otrzymujesz +1 pkt Działań  do użycia w tej fazie osady.',
 },
}

module.exports = {
 texts,
}
