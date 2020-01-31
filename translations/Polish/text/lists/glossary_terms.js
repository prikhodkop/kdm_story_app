const texts = {
	'Abilities': {
		'label': 'Umiejętności',
		'description': 'umiejętności i techniki wyuczone przez Ocalałych, zazwyczaj poprzez wydarzenia fabularne, zapisywane w arkuszu bohatera.'
	},
	'Absorb': {
		'label': 'Absorbcja',
		'description': 'instynkt Obserwatora. Opisany w wydarzeniu fabularnym Obserwatora.'
	},
	'Acceleration': {
		'label': 'Akceleracja',
		'description': 'dodaj +1k10 do akcji ruchu. Przed ruchem możesz rzucić kością śmierci i dodać wynik do ruchu, dla swojej jednej akcji ruchu w tej rundzie.'
	},
	'Accessory': {
		'label': 'Akcesorium',
		'description': 'specjalana zasada ekwipunku. Ekwipunek akcesoriów może być noszony jako dodatek do pancerza w miejscu trafienia. Każde akcesorium określa miejsce trafienia, które obejmuje.'
	},
	'Accuracy (Attribute)': {
		'label': 'Precyzja (Atrybut)',
		'description': 'reprezentuje trwałe modyfikatory w rzutach ataku. Dodatni atrybut dodaje do rzutu kośćmi, a atrybut ujemny odejmuje od rzutu kością.'
	},
	'Accuracy (Weapon/Attack Profile)': {
		'label': 'Precyzja (profil broni/ataku)',
		'description': 'liczba, jaką musi każdy wynik rzutu ataku osiągnąć lub przekroczyć, aby zostać uznanym za trafienie. Wymienione w profilach ataku potworów i ekwipunku broni.'
	},
	'Act': {
		'label': 'Akt',
		'description': 'część tury Ocalałych, w której jeden Ocalały zyskuje akcję ruchu i aktywacji. Każdy Ocalały, musi zakończyć swój akt, zanim inny rozpocznieswój akt. Wszystkie niewykorzystane ruchy i aktywacje są tracone, gdy Ocalały kończy swój akt.'
	},
	'Action': {
		'label': 'Akcja',
		'description': 'większość rzeczy, które może zrobić Ocalały lub potwór podczas fazy starcia, jak ruch i atak są akcjami. Karty potworów składają się z wielu akcji. Na przykład wybranie celu to akcja, karta pułapki potwora ma wypisane akcje. Z wyjątkiem działań związanych z wydawaniem przetrwania, które są wykonywane w określonych okolicznościach, Ocalały nie może wykonać akcji podczas gdy wykonywana jest inna akcja(Ocalałego, przetrwania lub akcja potwora).'
	},
	'Activation': {
		'label': 'Aktywacja',
		'description': 'aktywacja może zostać wykorzystana do ataku, aktywacji ekwipunku i interakcji z terenem. Ocalali otrzymują jedną aktywację podczas aktu Ocalałego.'
	},
	'Adjacent (Miniature)': {
		'label': 'Sąsiadująca (figurka)',
		'description': 'figurka sąsiaduje z inną, gdy zajmuje pole obok pola (nie po skosie) zajmowanego przez tą drugą figurkę.'
	},
	'Affinity (Completed)': {
		'label': 'Powiązania (skompletowane)',
		'description': 'niektóre karty ekwipunku mają czerwone, niebieskie lub zielone półkwadraty na krawędzi karty. Jeśli półkwadrat sąsiaduje z półkwadratem tego samego koloru, na innej karcie ekwipunku, tworząc pełen kwadrat, daje to jedno powiązanie.'
	},
	'Affinity Bonus': {
		'label': 'Powiązania (bonus)',
		'description': 'specjalna zasada rodzaju ekwipunku. Posiadanie wskazanej liczby kolorowych powiązań wyzwoli efekt. Każdy bonus powiązań ma zastosowanie tylko raz, niezależnie od tego, ile dodatkowych powiązań posiada Ocalały.'
	},
	'After Damage': {
		'label': 'Po obrażeniu',
		'description': 'na niektórych kartach SI potwora, w jego profilu ataku znajduje się „wyzwalacz” uruchamiający działania. Jeśli uzyskano jakieś trafienia w rzucie ataku, rozstrzygnij wszystkie obrażenia z wszystkich trafień w tym ataku (rzut kością miejsca trafienia, zadanie obrażeń w miejsce trafienia), następnie zastosuj efekty ataku tego wyzwalacza. Jeśli nie było obrażeń zadanych przez atak, nie stosuje się efektu wyzwalacza.'
	},
	'After Hit': {
		'label': 'Po trafieniu',
		'description': 'na niektórych kartach SI potwora, w jego profilu ataku znajduje się „wyzwalacz” uruchamiający działania po ataku. Jeśli są jakieś udane trafienia w rzucie ataku, przed rzuceniem kością miejsca trafienia, zastosuj efekty ataku tego wyzwalacza.'
	},
	'Aftermath': {
		'label': 'Rozstrzygnięcie',
		'description': 'koniec fazy starcia. Zawiera różne wyniki zależne od sukcesu lub porażki Ocalałych.'
	},
	'Agression Overload': {
		'label': 'Wybuch agresji',
		'description': 'Podczas ataku, po rzuceniu kości ataku, ale zanim dobierze sie kartę miejsca trafienia, można rzucić kością śmierci jako dodatkowy rzut ataku.'
	},
	'AI Card': {
		'label': 'Karta SI',
		'description': 'karty SI składają się z akcji, przejść i ostrzeżeń. Niektóre karty mają również trwałe urazy i/lub pola wyjaśnienia znaczeń. Istnieją cztery rodzaje kart SI - podstawowe (P), zaawansowane (Z), legendarne (L) i specjalne (S).'
	},
	'Alerts': {
		'label': 'Ostrzeżenia',
		'description': 'akcje następujące po ostrzeżeniu zawierają ważne informacje z warunkiem, który należy wziąć pod uwagę w celu ustalenia, czy akcja jest wykonywana. Kontynuuj wykonywanie dalszych akcji na karcie Sl, chyba że podano inaczej. Podczas ostrzeżenia nie może by wydawane przetrwanie.'
	},
	'All Survivors': {
		'label': 'Wszyscy Ocalali',
		'description': 'efekt podczas starcia, który odnosi się do wszystkich Ocalałych, dotyczy wszystkich Ocalałych będących w danej chwili na planszy starcia.'
	},
	'Ambush (Monster)': {
		'label': 'Zasadzka (potwór)',
		'description': 'jeśli potwór na planszy łowów wejdzie na pole z Ocalałymi, zastawia zasadzkę na Ocalałych. Zakończ wszelkie bieżące wydarzenia na łowach i natychmiast rozpocznij starcie. Ocalali opuszczają swoją pierwszą turę. W większości przypadków oznacza to, że potwór wykona dwie tury pod rząd.'
	},
	'Ambush (Survivors)': {
		'label': 'Zasadzka (Ocalali)',
		'description': 'niektóre wydarzenia na łowach pozwalają Ocalałym zastawić zasadzkę na potwora. Jeśli to zrobią, Ocalali mogą pierwsi rozpocząć starcie. Nie stosuj się do zasad rozstawienia w wydarzeniu fabularnym potwora. Zamiast tego umieść na planszy wypisane do tego starcia tereny, potwora i Ocalałych na planszy starcia według decyzji graczy (nadal należy przestrzegać zasad rozstawienia na kartach terenu).'
	},
	'Ammo - Bow': {
		'label': 'Pocisk - łuk',
		'description': 'specjalna zasada ekwipunku. Aby aktywować tę kartę, musisz mieć łuk w swojej siatce ekwipunku. Pocisk ma zasięg łuku w Twojej siatce ekwipunku.'
	},
	'Ammunition': {
		'label': 'Pocisk',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek jest pociskiem do innej broni.'
	},
	'Archive': {
		'label': 'Zarchiwizuj',
		'description': 'Usuń tą kartę z gry i umieść w pudełku. Jeśli karta nie jest zapisana w magazynie osady lub na karcie Ocalałego po zachiwizowaniu zostaje na stałe utracona.'
	},
	'Armor': {
		'label': 'Pancerz',
		'description': 'ekwipunek z tym słowem kluczowym jest pancerzem. Chroni Ocalałego przed ranami. Każdy element pancerza będzie miał symbol miejsca trafienia dla miejsca trafienia, na które można go założyć. Na każdym miejscu trafienia może nosić tylko jeden element pancerza.'
	},
	'Armor Points': {
		'label': 'Punkty pancerza',
		'description': 'zapisywane na arkuszu Ocalałego. Określane przez ekwipunek pancerza w siatce ekwipunku, a także inne efekty i wydarzenia. Każdy punkt neguje jeden punkt obrażeń w miejscu trafienia. Punkty pancerza zmniejszają się o 1 za każde obrażenie, które zanegują.'
	},
	'Armor Set': {
		'label': 'Zestaw pancerza',
		'description': 'każdy zestaw pancerza, składa się z wszystkich elementów pancerza z pojedynczej lokacji osady, ze słowem kluczowym \"zestaw\". Na przykład gdy Ocalały ma na sobie hełm Białego Lwa, rękawice Białego Lwa, kubrak Białego Lwa, Spódnicę Białego Lwa i buty Białego Lwa, to skompletował pancerz z Białego Lwa.'
	},
	'Armor Set Bonus': {
		'label': 'Bonus za komplet pancerza',
		'description': 'Ocalały, który ma na sobie kompletny zestaw pancerza, uzyskuje korzyści z bonusu za zestaw pancerza, wymieniony na odpowiedniej karcie zestawu pancerza.'
	},
	'Arms': {
		'label': 'Ręce',
		'description': ' miejsce trafienia Ocalałego. Obrażenia w ręce po przekroczeniu poziomu ciężkich ran, powodują rzut w tabeli ciężkich urazów rąk.'
	},
	'Arrival': {
		'label': 'Przybycie',
		'description': 'Początek starcia. Wszyscy Ocalali którzy mają efekty "po przybyciu", stosują je w kolejności według własnego wyboru.'
	},
	'Arrow': {
		'label': 'Strzała',
		'description': 'słowo kluczowe ekwipunku. Ta karta jest strzałą. Pomimo, że strzały wymagają, aby łuk znajdował się w siatce ekwipunku, aby móc je aktywować, strzały i łuki są różnymi rodzajami broni. Strzały nie dziedziczą właściwości łuków, z których są wystrzeliwane (nieporęczny, przeklęty, itp.). Ranienie strzałą nie uprawnia Ocalałego do zdobycia biegłości w posługiwaniu się łukiem.'
	},
	'Attack': {
		'label': 'Atak',
		'description': 'proces polegający na rzucie ataku i rozstrzygnięciu obrażeń, ran lub innych efektów.'
	},
	'Attack Effects': {
		'label': 'Atak - efekty',
		'description': 'efekty ataku są regułami zapisanymi w polu pod profilem ataku, na niektórych kartach Sl i stosowane, gdy pojawi się wyzwalacz. Efekty te są stosowane tylko raz, nawet jeśli cel został trafiony lub otrzymał wielokrotnie obrażenia podczas tego ataku.'
	},
	'Attack Profile': {
		'label': 'Atak - profil',
		'description': 'część z kart Sl potwora i jego podstawowych akcji. Wymienia szybkość, precyzję, obrażenia i wszelkie wyzwalacze dla ataku potwora.'
	},
	'Attack Roll': {
		'label': 'Atak - rzut',
		'description': 'rzut kostką, który reprezentuje próbę trafienia w cel. Latarnia (10) zawsze będzie skutkować trafieniem.'
	},
	'Attribute': {
		'label': 'Atrybut',
		'description': 'cecha Ocalałego lub potwora opisanego wartością liczbową.'
	},
	'Attribute Modifier Token': {
		'label': 'Atrybut - żetony modyfikatorów',
		'description': 'żetony modyfikatora atrybutu służą do wskazywania tymczasowych zmian atrybutów. Żetony modyfikatórów atrybutu są dwustronne, aby wskazywać zmiany na dodatnie i ujemne wartości dla danego atrybutu i łączą się sumą z trwałymi atrybutami, wskazując bieżący poziomu każdego atrybutu. Wszystkie żetony są usuwane na końcu każdego starcia.'
	},
	'Automatic Hit(s)': {
		'label': 'Automatyczne trafienie',
		'description': 'gdy Ocalały z automatycznymi trafieniami, wykonuje rzuty ataku, rezygnuje z rzutu wymaganą liczbą kości i skutecznie trafia potwora za każdą kość. Wszystkie pozostałe rzuty z tego rzutu ataku są wykonywane normalnie. Niezależnie ile automatycznych trafień Ocalały posiada, nie może trafić potwora więcej, niż całkowita liczba szybkości swojego ataku. Automatyczne trafienia nie są perfekcyjnymi trafieniami. Nie rzucasz kolejnych k10 by to sprawdzać - są to tylko zwyczajne trafienia.'
	},
	'Away (Movement)': {
		'label': 'Odsunięcie - ruch ',
		'description': 'ruch, który powoduje powstanie największej liczby pól pomiędzy dwoma punktami na planszy, takimi jak potwór, Ocalały, teren lub krawędź planszy.'
	},
	'Axe': {
		'label': 'Topór',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: topór. Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Back': {
		'label': 'Tył',
		'description': 'kierunek przeciwny do przodu figurki potwora.'
	},
	'Balm': {
		'label': 'Balsam',
		'description': 'słowo kluczowe ekwipunku. Balsam działa poprzez wcieranie go w skórę Ocalałego.'
	},
	'Bash': {
		'label': 'Walnięcie',
		'description': 'powoduje, że Ocalali zostają powaleni.'
	},
	'Basic Action': {
		'label': 'Akcja podstawowa',
		'description': 'podstawowa akcja potwora jest wyszczególniona na karcie akcji podstawowej. Akcja podstawowa składa się z akcji wybrania celu i akcji ataku, z profilu ataku. Potwory wykonują podstawową akcję naniektórych kartach Sl, w niektórych reakcjach lub jeśli talie Sl i zagranych kart SI są puste. Wykonanie podstawowej akcji nie liczy się jako dobranie karty Sl.'
	},
	'Basic Action / Reference Card': {
		'label': 'Akcja podstawowa / karta cech',
		'description': 'dwustronne karty akcji podstawowej/cech zawierają podstawowe akcje potwora po jednej stronie i przegląd cech potwora po drugiej stronie.'
	},
	'Basic Hunt Event': {
		'label': 'Wydarzenia na łowach - podstawowe',
		'description': '100 wydarzeń jakie mogą spotkać Ocalałych, w zewnętrznych ciemnościach. Znajdują się w rozdziale wydarzenia na łowach, w tym podręczniku.'
	},
	'Basic Resources': {
		'label': 'Podstawowe zasoby',
		'description': 'ogólne zasoby, które można zdobyć od większości potworów na które można polować oraz z wielu wydarzeń.'
	},
	'Before Damage': {
		'label': 'Przed obrażeniami',
		'description': 'wyzwalacz znajdujący się w niektórych profilach ataku potwora. Zastosuj efekt ataku wyzwalacza po trafieniu (rzucie kością miejsc trafienia) ale zanim obrażenia zostaną zadane miejscu trafienia.'
	},
	'Bleed X': {
		'label': 'Krwawienie X',
		'description': 'cel otrzymuje X żetonów krwawienia.'
	},
	'Bleeding Token': {
		'label': 'Krwawienie - żetony',
		'description': 'Ocalali mogą otrzymywać żetony krwawienia po ciężkich urazach, atakach potwora i niektórych wydarzeniach. Jeśli Ocalały ma 5 lub więcej żetonów krwawienia, umiera. Wszystkie żetony są usuwane pod koniec każdego starcia.'
	},
	'Blind Spot': {
		'label': 'Martwa strefa',
		'description': 'najczęściej pola bezpośrednio za potworem. Ocalali atakujący z martwej strefy zyskują +1 precyzji.'
	},
	'Block X': {
		'label': 'Blok X',
		'description': 'specjalna zasada ekwipunku. Wydaj aktywację, aby zignorować X trafień, gdy następnym razem zostaniesz zaatakowany. Trwa do twojego następnego aktu. Ocalały nie może używać bloku więcej niż raz na atak.'
	},
	'Body': {
		'label': 'Korpus',
		'description': 'miejsce trafienia Ocalałego. Uszkodzenia ciała poza poziomem ciężkich ran, powodują rzut w tabeli ciężkich urazów korpusu.'
	},
	'Body Blow': {
		'label': 'Cios w korpus',
		'description': 'Aatak, którego miejscem trafienia jest zawsze korpus Ocalałego. Nie rzuca się kością miejsca trafienia za ten atak.'
	},
	'Bone (Gear)': {
		'label': 'Kość (ekwipunek)',
		'description': 'słowo kluczowe ekwipunku. Kość jest jednym z podstawowych materiałów używanych do wytwarzania tego ekwipunku.'
	},
	'Bone (Resource)': {
		'label': 'Kość (zasób)',
		'description': 'powszechne słowo kluczowe zasobów.'
	},
	'Bow': {
		'label': 'Łuk',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: łukiem. Z tą bronią Ocalali mogą otrzymywać poziomy biegłości w posługiwaniu się łukiem.'
	},
	'Brain': {
		'label': 'Umysł',
		'description': 'jest częścią Ocalałego różniącą się od miejsc trafienia. Reprezentuje sprawność psychiczną Ocalałego. Ludzki umysł jest delikatny, istnieje tylko jeden poziom obrażeń umysłu (oznaczony przez niezapełniony kwadrat z cienkim konturem). Jakiekolwiek obrażenia wychodzące poza poziom lekkich urazów, powodują rzut w tabeli traum umysłu. Umysł otrzymuje obrażenia, tylko gdy jest wskazanie, że zadawane są obrażenia umysłu.'
	},
	'Brain Damage': {
		'label': 'Umysł - obrażenia',
		'description': 'obrażenia umysłu zadawane są tylko umysłowi.'
	},
	'Brain Trauma Table': {
		'label': 'Umysł - tabela traum umysłu',
		'description': 'zawiera możliwe skutki nadmiernych obrażeń zadanych umysłowi.'
	},
	'Build (Location)': {
		'label': 'Budowa (lokacja)',
		'description': 'kiedy nowa lokacja jest budowana, połóż lokację osady w obszarze gry i dopisz tę lokację do arkusza osady. Jest ona dodana na stałe do osady.'
	},
	'Calcification': {
		'label': '',
		'description': 'Once gear is calcified, flip it to the calcified side. After calcification the normal side of that gear cannot be used.'
	},
	'Canceled Attack': {
		'label': '',
		'description': 'A canceled attack Immediately ends. Discard all unresolved hit locations. Do not perform any actions, special rules, critical effects, or reactions on these cards.'
	},
	'Charge': {
		'label': 'Szarża',
		'description': 'zasada specjalna ekwipunku. Ocalały może wydać ruch i aktywację aby wykonać ruch w jednym kierunku, w linii prostej o maksymalną liczbę pól. Na końcu ruchu, jeśli jest w zasięgu, wykonuje atak z użyciem broni do walki wręcz, dodając liczbę pól o jakie się poruszył do jego siły w ataku. Szarża nie ma wpływu na wszelkie dalsze ataki w tej turze.'
	},
	'Closest Survivor': {
		'label': 'Najbliższy Ocalały',
		'description': 'Ocalały oddalony od potwora, o najmniejszą liczbę pól (liczonych przylegle, nie po skosie).'
	},
	'Closest Threat': {
		'label': 'Najbliższe zagrożenie',
		'description': 'zagrożenie oddalone od potwora o najmniejszą liczbę pól (liczonych przylegle, nie po skosie).'
	},
	'Club': {
		'label': 'Maczuga',
		'description': 'ekwipunek z tym słowem kluczowym to broń: maczuga. Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Conflict (Rule of Death)': {
		'label': 'Konflikty i reguła śmierci',
		'description': 'Jak w każdej grze z wieloma różnymi częściami i zasadami, konflikt może czasem pojawić się w związku z interpretacjami przepisów, grupową decyzją lub wyjątkami. <br\>&emsp;Przede wszystkim ta gra ma na celu zapewnić dobrze spędzony czas z przyjaciółmi. Użyj tego jako wiodącej zasady rozwiązywania wszelkich problemów, które się pojawiają. Ponadto, oto kilka technicznych wskazówek dotyczących rozwiązywania konfliktów. <br\>&emsp;Kiedy pojawia się konflikt sprzeczności w regułach, zastosuj konkretne zasady znalezione na kartach (SI, ekwipunku itp.) oraz wydarzeń fabularnych, przed wszelkimi regułami znalezionymi w rodziałach instrukcji zasad gry.<br\>&emsp;Jeśli pojawią się konflikty spowalniające lub zatrzymujące sesje gry całkowicie, użyj reguły śmierci: zawsze wybieraj wersję przeciwko Ocalałym. Królestwo Śmierci jest niebezpiecznym miejscem, a przyszłość Ocalałych jest marna. Upewnij się, że wszelkie niejasności rozwiążą się jak najgorzej dla Ocalałych. <br\>&emsp;W gruncie rzeczy, gra Monster to doświadczenie kooperacyjne. Szanuj innych podczas działań, w grze wspólnych decyzji.'
	},
	'Collides': {
		'label': 'Zderzenie',
		'description': 'Jeśli potwór porusza się przez pole zajęte przez Ocalałego, następuje zderzenie i Ocalały doznaje skutków zderzenia. Jeśli potwór kończy swój ruch na polu z Ocalałym, następuje zderzenie z Ocalałym i doznaje on odrzucenia o 5, w lini prostej od potwora. Jeśli Ocalały zostanie odrzucony na nieprzekraczalny teren, zderza się z nim. Jeśli Ocalały zostanie odrzucony w innego Ocalałego, wykonuje normalnie pełny ruch odrzucenia. Obaj Ocalali zostają powaleni na końcu odrzucenia. Gdyby Ocalali mieli zajmować to samo pole, zamiast tego umieść Ocalałego na najbliższym niezajętym polu.'
	},
	'Collision': {
		'label': 'Zderzenie - skutki',
		'description': 'jeśli Ocalały był ofiarą zderzenia zostaje powalony.'
	},
	'Concentrate': {
		'label': 'Koncentracja',
		'description': 'musisz skupić swój umysł by dokonać niezwykłego wyczynu. Na początku swojego aktu deklarujesz intencję koncentracji. Natychmiast kończysz swój akt i usiłujesz koncentrować się do początku swojego następnego aktu. By z powodzeniem się skoncentrować nie możesz: wykonać żadnego rodzaju akcji, poruszyć się z żadnego powodu, zostać powalonym, otrzymać żadnego rodzaju obrażenia, otrzymać żetonu krwawienia lub żetony negatywnego atrybutu.'
	},
	'Consumable': {
		'label': 'Jadalny',
		'description': 'słowo kluczowe. Ten przedmiot może być zjedzony przez Ocalałych.'
	},
	'Consume': {
		'label': 'Spożycie',
		'description': 'specjalna zasada. Ten jadalny ekwipunek lub zasób może być spożyty by uzyskać wyszczególniony rezultat. Niektóre są archiwizowane po użyciu.'
	},
	'Courage': {
		'label': 'Odwaga',
		'description': ' atrybut Ocalałego wymieniony w arkuszu Ocalałego. Odwaga jest potencjalną śmiałością Ocalałego. Osiągając poziom 3 uruchamiany jest wydarzenie fabularne Śmiałość. Po osiągnięciu poziomu 9 wywoływane jest wydarzenie Ujrzenie prawdy.'
	},
	'Critical Wound': {
		'label': 'Rana krytyczna',
		'description': 'krytyczne rany są szczęśliwymi trafieniami, które zawsze ranią potwora. Nawet jeśli próba zranienia nie przekracza wytrzymałości potwora. Rana krytyczna występuje, gdy rzut zranienia wyniesie 10 (latarnia), na karcie z miejscem trafienia posiadającym efekt rany krytycznej. Atrybut szczęścia modyfikuje wynik niezbędny do zadania rany krytycznej.'
	},
	'Critical Wound Effect': {
		'label': 'Rana krytyczna - efekt',
		'description': 'efekt rany krytycznej na kartach SI potworów jest reprezentowany przez symbol rany krytycznej, oraz zasady określające, co się dzieje, gdy potwór jest raniony krytycznie w to miejsce trafienia. Efekty rany krytycznej nie podlegają reakcji. Po krytycznym zranieniu, anulowane są wszystkie reakcje z tej karty miejsca trafienia.'
	},
	'Cumbersome': {
		'label': 'Nieporęczny',
		'description': 'szczególna zasada ekwipunku. Ocalali muszą wydać jednocześnie ruch i aktywację, aby aktywować ekwipunek nieporęczny. Ignorujesz to jeśli broń została aktywowana pośrednio (skok, szarża itp.). Możliwe jest dwukrotne użycie nieporęcznego ekwipunku poprzez użycie przyśpieszenia w połączeniu z jego regularnym ruchem, a następnie użycie sprintu z normalną aktywacją. Ocalały nie może wydać 2 pkt przetrwania aby użyć nieporęcznego ekwipunku poza swoim aktem.'
	},
	'Cursed': {
		'label': 'Klątwa/Przeklęty',
		'description': 'szczególna zasada ekwipunku. Ten ekwipunek nie może zostać usunięty z siatki ekwipunku w żaden sposób. Jeśli Ocalały umiera, zarchiwizuj ten ekwipunek.'
	},
	'(X)d10': {
		'label': '(X)k10',
		'description': 'liczba (X) dziesięciościennych kości. Dołączone do gry kości posiadają logo latarni na ściance z \"10\".'
	},
	'd5': {
		'label': '1k5',
		'description': 'rzut 1k10, podzielony rezultat na dwa i zaokrąglony w górę.'
	},
	'd100': {
		'label': 'k100',
		'description': 'stuścienna kość. Otrzymuje się to poprzez rzut 2k10, z których jedna kość odpowiada za dziesiątki, a druga reprezentuje jedności. Na przykład rzut wskazujący 2 latarnie (rezultat 10 na każdej) oznacza wynik 100.'
	},
	'Dagger': {
		'label': 'Sztylet',
		'description': 'ekwipunek z tym słowem kluczowym to broń: sztylet. Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Damage (Attack Profile)': {
		'label': 'Obrażenia (profil ataku)',
		'description': 'liczba zadawanych obrażeń przez każde trafienie w ataku potwora. Rzuca się pojedynczo dla każdego miejsca trafienia, za każde trafienie.'
	},
	'Damage (Attribute)': {
		'label': 'Obrażenia (atrybut)',
		'description': 'obrażenia są dodawane do obrażeń wymienionych w profilu ataku do wyliczenia całkowitych obrażeń ataku.'
	},
	'Damage (Condition)': {
		'label': 'Obrażenia (warunek)',
		'description': 'trafienia zadają obrażenia Ocalałemu, jeśli usuną punkty pancerza lub spowodują rany. Trafienia które zostaną pominięte unikiem, zablokowane lub zignorowane nie powodują obrażeń.'
	},
	'Dash': {
		'label': 'Sprint',
		'description': 'Akcja przetrwania. Gdy stworzy się ku temu okazja, Ocalały może wydać 1 ptrzetrwania by wykonać sprint. Otrzymuje +1c, który musi wydać natychmiast. Każdy Ocalały może wykonać sprint tylko raz na rundę i tylko po tym, gdy osada wprowadziła innowację farba.'
	},
	'Deadly': {
		'label': 'Zabójcza',
		'description': 'specjalna zasada ekwipunku. Otrzymujesz +1 szczęścia, gdy atakujesz tą bronią. Zwiększa to szansę zadawania krytycznych ran.'
	},
	'Deaf': {
		'label': 'Głuchota',
		'description': 'Ocalały nie może słyszeć, otrzymać natchnienia ani nie wpływają na niego inne efekty dźwiękowe.'
	},
	'Deathblow': {
		'label': '',
		'description': 'If you kill the monster while dealing damage to that location you get the bonus listed on the card.'
	},
	'Death (Monster)': {
		'label': 'Śmierć (potwór)',
		'description': 'A potwór zostaje pokonany, gdy zostaje raniony i nie ma kart w talii SI lub na stosie kart odrzuconych SI by przenieść je na stos ran.'
	},
	'Death (Survivor)': {
		'label': 'Śmierć (Ocalały)',
		'description': ' Ocalały może umrzeć na różne sposoby. Usuwana jest wtedy jego figurka z planszy. Nie może już uczestniczyć w łowach lub starciu. Jego ekwipunek wraca do magazynu osady, a swoje zasoby oddaje innemu Ocalałemu. Jeśli wszyscy Ocalali giną podczas starcia, cały ich ekwipunek wraca do osady, a wszystkie zasoby nie znajdujące się w magazynie osady są tracone.'
	},
	'Death Count': {
		'label': 'Lista poległych',
		'description': 'część arkusza osady. Podczas fazy osady, jeśli ktokolwiek z Ocalałych zginął podczas poprzednich łowów lub fazy starcia, zaktualizuj listę poległych. Jeśli giną Ocalali podczas fazy osady natychmiast aktualizuj listę poległych. Gdy po raz pierwszy wykonywany jest wpis na liście poległych osady, wykonywane jest wydarzenie fabularne doktryna: śmierć.'
	},
	'Death Die': {
		'label': 'Kość śmierci',
		'description': 'dziesięciościenna pomarańczowa kość. Kość śmierci zastępuje kafelek kontrolera potwora. Gracz Ocalałego z kością śmierci, kontroluje potwora. Rozpoczynając starcie gracz z ostateczną latarnią, zaczyna z kością śmierci na karcie okropności. Na początku każdej kolejnej rundy, połóż kość śmierci na kartę okropności graczowi po lewej. Ostateczna emanacja Obserwatora nadal przeskakuje między latarniami Ocalałych, którzy nie mogą już wykonywać swojego aktu (zarówno martwym lub nieobecnym). Zamiast korzyści płynących z kafelka kontrolera potwora, możesz dokonywać badań impulsów w oparciu o poziom badawczy latarni. Raz na rundę, Ocalały z kością śmierci, może użyć jednego z odblokowanych odkryć impulsów osady. Po rzuceniu kością śmierci, odłóż ją na aktualną kartę okropności. Jeśli ostateczna latarnia zgubi się lub zostanie zarchiwizowana, znika na zawsze, a Ocalali nie mogą używać kości śmierci. Znów korzysta się z kafelka kontrolera potworów.'
	},
	'Defeat': {
		'label': 'Przegrana',
		'description': 'gdy Ocalali zostaną pokonani przez potwora, odczytaj zasady przegranej w części rozstrzygnięcia, wydarzenia fabularnego potwora.'
	},
	'Deflect X': {
		'label': 'Odparcie X',
		'description': 'specjalna zasada ekwipunku. Gdy wykonujesz odparcie X, otrzymujesz (lub tracisz) żetony odparcia dopóki nie będziesz miał ich X. Gdy zostajesz trafiony, posiadając żetony odparcia, ignorujesz to trafienie i tracisz żeton odparcia. Wykonując odparcie X, nie możesz wykonać bloku.'
	},
	'Depart (As in, \"When you depart\")': {
		'label': 'Wyruszenie (sformułowanie„kiedy wyruszasz”)',
		'description': 'te zasady dotyczą wyruszających na łowy Ocalałych na końcu fazy osady. którzy przeżyli na zakończenie fazy osiedlenia.'
	},
	'Departing Survivors': {
		'label': 'Wyruszający Ocalali',
		'description': 'Ocalali wybrani do wzięcia udziału w następnych łowach oraz starciu.'
	},
	'Destroy Armor': {
		'label': 'Zniszczenie pancerza',
		'description': 'Aefekt ataku, który zmniejsza punkty pancerza w miejscu trafienia Ocalałego do 0, zanim zadane zostaną obrażenia.'
	},
	'Destructible': {
		'label': 'Zniszczalny',
		'description': 'specjalna zasada terenu. kiedy Ocalały zderza się się z terenem zniszczalnym, zatrzymaj jego ruch i zarchiwizuj kafelek terenu. Ocalały otrzymuje 1 obrażenie, w losowe miejsce trafienia w wyniku tego zderzenia. Kiedy potwór zderza się ze zniszczalnym terenem, zarchiwizuj teren.'
	},
	'Devastating X': {
		'label': 'Druzgocący X',
		'description': 'szczególna zasada dla ekwipunku. Kiedy druzgocąca broń rani potwora, zadaje ona X dodatkowych ran.'
	},
	'Discard': {
		'label': 'Zagrane karty',
		'description': 'umieść kartę na odpowiednim stosie kart zagranych. Nie jest ona już dalej w grze.'
	},
	'Disdain': {
		'label': 'Pogarda',
		'description': ' instynkt Feniksa. Opisany jest wydarzeniu fabularnym Starcie: Feniks.'
	},
	'Disorder': {
		'label': 'Zaburzenie',
		'description': 'upośledzenie umysłowe. Zaburzenia są opisane w kartach zaburzeń. Kiedy otrzymywane jest zaburzenie, zapisz jego zasady na arkuszu Ocalałego i odłóż kartę do pudełka. Ocalali mogą mieć do 3 zaburzeń. Kolejne nabywane zaburzenie, musi zastąpić poprzednie według wyboru. Gdyby Ocalały miał otrzymać zaburzenie które już posiada, nic się nie dzieje.'
	},
	'Dodge': {
		'label': 'Unik',
		'description': 'akcja przetrwania. Kiedy Ocalały został trafiony, po rzucie kością miejsca trafienia, ale zanim otrzyma obrażenia, może wydać 1 przetrwania by wykonać unik, unikając jednego trafienia. Uniknięte trafienia stają się nieudanymi rzutami ataku i nie powodują żadnych obrażeń. Jakiekolwiek dodatkowe obrażenia, nie anulowane unikiem, otrzymywane są normalnie. Unik to jedyna akcja przetrwania, jaką może wykonać powalony Ocalały. Każdy Ocalały może wykonać unik raz na rundę.'
	},
	'Doomed': {
		'label': 'Potępiony',
		'description': 'gdy Ocalały zostaje potępiony, nie może wykonywać żadnych akcji lub wydawać przetrwania. Jeśli Ocalały zostaje potępiony przez SI potwora lub kartę miejsca trafienia, jest potępiony dopóki wszystkie akcje na karcie nie zostaną wykonane i karta nie zostanie rozegrana.'
	},
	'Draw AI': {
		'label': 'Dobranie SI',
		'description': 'kontroler potwora dobiera wierzchnią kartę SI, z talii SI potwora i rozgrywa ją. Jeśli talia SI jest pusta, należy potasować talię zagranych kart SI i dobrać wierzchnią kartę. Jeśli talia dobieranych i zagranych kart SI jest pusta, potwór wykonuje akcję podstawową.'
	},
	'Duplicate Gear': {
		'label': '',
		'description': 'Except for weapons, a survivor may not have multiple copies of the same gear in their gear grid. A survivor gains the benefits of a weapons special rules only once, no matter how many copies they have. Additional copies of weapons still contribute affinities.'
	},
	'Duration': {
		'label': 'Okresowe karty SI',
		'description': 'karty okresowe są dobierane dwukrotnie. Gdy pierwszy raz karta okresowa jest dobierana, wykonywana jest akcja opisana „kiedy zostanie dobrane zakryte”. Następnie, zamiast odrzucić, umieść kartę okresową odkrytą, na wierzchu talii SI. Następnym razem, gdy potwór powinien dobrać kartę SI, po raz drugi dobiera kartę okresową. Wykonuje akcje opisane jako „gdy jest dobierane odkryte”. Następnie odrzuca kartę. Niektóre karty okresowe będą miały trwałe efekty, gdy leżą odkryte na wierzchu talii SI.'
	},
	'Early Iron': {
		'label': 'Wczesne żelazo',
		'description': 'specjalna zasada ekwipunku. Gdy wynik rzutu ataku wynosi 1, anuluj wszystkie trafienia i zakończ atak.'
	},
	'Encourage': {
		'label': 'Natchnienie',
		'description': 'akcja przetrwania. Stojący Ocalały może wydać 1 przetrwania w dowolnym momencie, aby natchnąć do boju powalonego Ocalałego, który natychmiast wstaje. Niesłyszących Ocalałych nie można natchnąć. Każdy Ocalały może dać natchnienie tylko raz na rundę, i tylko gdy osada zna innowację mowa.'
	},
	'Endeavors': {
		'label': 'Działania',
		'description': 'każdy powracający Ocalały generuje +1 energii działań dla osady. Ocalali mogą wydawać działania do innowacji, budowy nowych lokacji w osadzie lub wykonywania unikalnych akcji. By wykonać działanie, wybierz Ocalałego i zredukuj łączną liczbę działań o 1 i postępuj zgodnie z akcją na którą działania zostały wydane. Jeśli nie bylo określone inaczej, efekty akcji oddziałowują na wybranego Ocalałego.'
	},
	'Endure': {
		'label': 'Wytrwałość',
		'description': 'możesz wydać 7 przetrwania minus swoje szczęście, aby zignorować ciężki uraz zanim wykonasz rzut na wynik. Twoje szczęście jest określone przez sumę własnego atrybutu szczęścia i żetonów modyfikatorów szczęścia oraz wszelkiego ekwipunku i zdolności wpływających na szczęście w momencie wykonywania testu wytrwałości.'
	},
	'Evasion (Attribute)': {
		'label': 'Zwody (atrybut)',
		'description': 'kiedy potwór lub Ocalały ze zwodami jest celem ataku, zmienia się precyzja z profilu ataku o wielkość zwodów jaką posiada cel. Zwody mogą być liczbą ujemną, w takim przypadku jest odejmowana od precyzji ataku z profilu. Niezależnie od uniku, wynik latarni (10) w rzucie ataku jest zawsze perfekcyjnym trafieniem, a 1 w rzucie ataku zawsze jest niepowodzeniem.'
	},
	'Event Damage': {
		'label': '',
		'description': 'Some damage is incurred from events. Typically, this damage cannot be dodged or blocked. Event damage is non-lethal, and will reduce armor points and cause light and heavy injuries, but will not cause severe injuries or brain trauma.'
	},
	'Event Revealer': {
		'label': 'Wykonawca wydarzenia',
		'description': 'wykonawca wydarzenia odsłania kartę wydarzenia fabularnego na łowach, czyta ją głośno i postępuje zgodnie z zasadami opisanymi na karcie, podejmuje także wszelkie decyzje dla tego wydarzenia fabularnego na łowach.'
	},
	'Facing': {
		'label': 'Przód',
		'description': 'wszystkie pola przed figurką potwora, są polami z przodu.'
	},
	'Failure (Reaction)': {
		'label': 'Niepowodzenie (reakcja)',
		'description': 'reakcja potwora. Wykonywana w odpowiedzi na zakończoną niepowodzeniem próbę zadania rany, w niektóre miejsca trafienia potwora.'
	},
	'Feather (Gear)': {
		'label': 'Pióra (ekwipunek)',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek jest produkowany z piór.'
	},
	'Field of View': {
		'label': 'Pole widzenia',
		'description': 'Ocalały jest w polu widzenia potwora, o ile nie znajduje się martwym polu potwora lub pola widzenia nie blokuje teren nieprzekraczalny.'
	},
	'Fighting Arts': {
		'label': 'Sztuki walki',
		'description': 'potężne techniki bojowe, które można znaleźć na kartach sztuk walki. Gdy sztuka walki jest pozyskiwana, zapisuje się jej zasady na arkuszu Ocalałego i odkłada kartę do pudełka. Ocalali mogą mieć maksymalnie 3 sztuki walki. Dochodzące sztuki walki mogą wymieniać posiadane według uznania. Gdy Ocalały poznaje sztukę walki którą już posiada nic się nie dzieje.'
	},
	'Finesse': {
		'label': 'Finezyjna',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek wymaga finezji podczas używania. To słowo kluczowe nie wchodzi w żadne interakcje z grą podstawową, jest słowem do rozszerzeń gry.'
	},
	'First Strike': {
		'label': 'Pierwsze trafienie',
		'description': 'rodzaj miejsca trafienia potwora. To miejsce trafienia musi być rozegrane najpierw, przed jakimikolwiek innymi, za wyjątkiem pułapki. Jeśli zostanie dobranych kilka pierwszych trafień, gracz decyduje o kolejności rozstrzygania ich. Pułapki wciąż działają i przerywają wszelkie inne trafienia.'
	},
	'Fist & Tooth': {
		'label': 'Pięści i zęby',
		'description': 'to broń zawsze dostępna dla Ocalałego. Atrybuty ataku przy użyciu pięści i zębów są opisane na siatce ekwipunku. Ocalały może doskonalić poziomy biegłości w posługiwaniu się bronią: pięści i zęby.<br/>&emsp;Na potrzeby elementów gry tj <i>krwawa farba</i> broń pięści i zęby jest uważana za oddzielną kartę ekwipunku umieszczoną na lewo od lewego dolnego rogu siatki ekwipunku. '
	},
	'Flammable': {
		'label': 'Łatwopalny',
		'description': ' słowo kluczowe ekwipunku. Ogień może zniszczyć ten ekwipunek.'
	},
	'Flow': {
		'label': 'Przejście',
		'description': 'Fprzejścia są przerwami, pomiędzy akcjami potwora. Daje to Ocalałym szansę na użycie akcji przetrwania. Jest to przedstawione przez pasek ze strzałką.'
	},
	'Forward': {
		'label': 'Naprzód',
		'description': ' kierunek znajdujący się z przodu figurki.'
	},
	'Fragile': {
		'label': 'Krucha',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek jest łatwo strzaskać.'
	},
	'Frail': {
		'label': 'Łamliwa',
		'description': 'słowo kluczowe ekwipunku. Łamliwa broń ulega zniszczeniu jeśli Ocalały próbuje nią ranić super twarde miejsce trafienia. Zarchiwizuj broń na końcu takiego ataku.'
	},
	'Frenzy': {
		'label': 'Furia',
		'description': 'rezultat traumy umysłu. Otrzymana furia trwa do końca fazy starcia. Otrzymuje się żeton szybkości +1, żeton siły +1 i 1k5 obłędu. Ignoruje zasadę „powolność” broni do walki wręcz. Furiat nie może wydawać przetrwania ani używać sztuk walki. Nie może także używać specjalizacji w broni ani mistrzostwa w broni. Furię można otrzymać wiele razy.'
	},
	'Full Move': {
		'label': 'Pełny ruch',
		'description': 'termin w grze określający ruch potwora lub Ocalałego na jego maksymalną dostępną odległość. Łącznie z wszelkimi modyfikującymi ruch żetonami.'
	},
	'Fur (Gear)': {
		'label': 'Futro (ekwipunek)',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek został wyprodukowany z gęstego futra.'
	},
	'Gear': {
		'label': 'Ekwipunek',
		'description': 'przedmioty które Ocalali mogą nosić i używać. Reprezentowane przez karty ekwipunku. Ocalali mogą używać ekwipunku tylko na swojej indywidualnej siatce ekwipunku. Z wyjątkiem ekwipunku ze słowem kluczowym broń, żaden z Ocalałych nie może mieć więcej niż jednej kopii karty ekwipunku w swojej siatce.'
	},
	'Gear Grid': {
		'label': 'Siatka ekwipunku',
		'description': 'planszetka z miejscem na 9 kart ekwipunku. Mogą być one rozmieszczane w dowolnej konfiguracji, ale muszą pozostać w czytelnej orientacji. Nie można ich obracać. Ekwipunek w siatce ekwipunku może być zmieniany tylko podczas fazy osady.'
	},
	'Gear Keyword': {
		'label': 'Ekwipunek - słowa kluczowe',
		'description': 'znajdują się bezpośrednio pod nazwą karty ekwipunku. Podają informacje o ekwipunku, takie jak typ broni, materiały, sposób użycia lub czynniki ograniczające. Do słów kluczowych odnoszą się inne karty i wydarzenia.'
	},
	'Gear Special Rule': {
		'label': 'Ekwipunek - specjalne zasady ekwipunku',
		'description': 'znajdują się w dolnej części karty ekwipunku. Wypisane są umiejętności, premie i wymagania.'
	},
	'Grand': {
		'label': 'Wielka Broń',
		'description': 'ekwipunek z tym słowem kluczowym jest wielką bronią. Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Graze': {
		'label': 'Wypasanie',
		'description': 'instynktowne zachowanie Wrzeszczącej Antylopy. Opisany w wydarzeniu fabularnym Wrzeszczącej Antylopy.'
	},
	'Guard': {
		'label': 'Garda',
		'description': 'instynktowne zachowanie Wysłannika. Opisane w wydarzeniu fabularnym Wysłannika.'
	},
	'Guard (Gear)': {
		'label': '',
		'description': 'A gear special rule. At the end of your attack, if you are standing and have a shield in your gear grid, spend 1 survival to move 3 spaces directly away from the monster and <b>Block 1</b> for free.'
	},
	'Head': {
		'label': 'Głowa',
		'description': 'miejsce trafienia Ocalałego. Obrażenia w głowę po przekroczeniu poziomu ciężkich ran, powodują rzut w tabeli ciężkich urazów głowy.'
	},
	'Head Hunter': {
		'label': 'Łowca głów',
		'description': 'atak, którego miejscem trafienia jest zawsze głowa Ocalałego. Nie rzuca się kością miejsca trafienia za ten atak.'
	},
	'Heal X': {
		'label': 'Leczenie X',
		'description': 'kiedy potwór wykonuje leczenie X, przywróć X kart SI ze stosu ran, na spód talii SI, nie oglądając ich.'
	},
	'Healing (Survivor)': {
		'label': 'Leczenie Ocalały',
		'description': 'kiedy Ocalały sie leczy, wymaż wszystkie wypełnione poziomy ran, i przywróć wszystkie utracone punkty pancerza.'
	},
	'Heavy (Gear)': {
		'label': 'Ciężki (ekwipunek)',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek jest ciężki.'
	},
	'Heavy Injury Level': {
		'label': 'Ciężkie rany',
		'description': 'poziom ran, oznaczony kwadratem z grubym obrysem. Kiedy wypełnia się poziom ciężkich ran Ocalałego, zostaje on powalony. Jeśli zostanie raz wypełniony, ten poziom ran nie może być otrzymany ponownie w tym starciu, dopóki nie zostanie uleczony.'
	},
	'Herb': {
		'label': 'Zioła',
		'description': 'słowo kluczowe ekwipunku. Przedmiot wykonany głównie z ziół.'
	},
	'Hide (Resource)': {
		'label': 'Skóra (zasób)',
		'description': 'słowo kluczowe pospolitych zasobów.'
	},
	'Hit (Monster)': {
		'label': 'Trafienie (potwór)',
		'description': ' trafienie jest wynikiem rzutu ataku, który wyrównuje lub przekracza precyzję ataku używanego w profilu ataku. Trafienia dla których wykonany był unik, zostały zablokowane lub zignorowane są chybione. Obrażenia pochodzące spoza profilu ataku nie są trafieniami.'
	},
	'Hit (Survivors)': {
		'label': 'Trafienie (Ocalały)',
		'description': 'trafienie jest rezultatem rzutu ataku który wyrównał lub przekroczył precyzję ataku przy użyciu broni.'
	},
	'Hit Location (Monster)': {
		'label': 'Miejsce trafienia (potwór)',
		'description': 'każdy potwór ma unikalną talię miejsc trafień, złożoną kart miejsc trafień. Istnieje 5 typów kart miejsca trafienia: pierwsze trafienie, odporność, super twarda, pułapka i normalna. Każde miejsce trafienia które nie ma wymienionego typu, jest normalne.'
	},
	'Hit Location (Survivors)': {
		'label': 'Miejsce trafienia (Ocalali)',
		'description': 'miejsca trafienia to części ciała Ocalałego na których może nosić pancerz i doznawać obrażeń. Miejsca trafienia to: głowa, ręce, korpus, talia i nogi. Miejsca trafienia mogą być chronione punktami pancerza dzięki noszonemu pancerzowi. Bez pancerza miejsca trafienia mają 0 punktów pancerza.'
	},
	'Hit Location Dice': {
		'label': 'Kość miejsca trafienia',
		'description': 'służy do określenia miejsca trafienia Ocalałego podczas ataku.'
	},
	'Hunt Board': {
		'label': 'Plansza łowów',
		'description': 'plansza łowów jest używana podczas fazy łowów do tropienia potworów, mających być zdobyczą.'
	},
	'Hunt Board Diagram': {
		'label': 'Plansza łowów - diagram',
		'description': 'część wydarzenia fabularnego starcia potwora. Wskazuje w jaki sposób rozstawić planszę łowów dla danego potwora.'
	},
	'Hunt Event': {
		'label': '',
		'description': 'A hunt event describes an encounter the survivors face on their journey. They can be disastrous, bizarre. or even beneficial. These appear on basic hunt event cards and monster hunt event cards.'
	},
	'Hunt Event Cards (Basic)': {
		'label': 'Wydarzenia na łowach - karty (podstawowe)',
		'description': 'wszystkie podstawowe karty wydarzeń na łowach są identyczne. Nakazują wykonawcy wydarzenia, aby wykonał rzut w tabeli wydarzeń na łowach.'
	},
	'Hunt Event Cards (Monster)': {
		'label': 'Wydarzenia na łowach - karty (potwory)',
		'description': 'karty wydarzeń fabularnych potworów, opisują zdarzenia związane z łowami na konkretnego potwora. Opisują niebiezpieczeństwa i niezwykłości charakterystyczne dla konkretnego potwora. Każdy potwór na którego można polować posiada unikalny zestaw kart wydarzeń fabularnych na łowach.'
	},
	'Hunt Experience (XP)': {
		'label': 'Doświadczenie łowieckie',
		'description': 'Ocalali otrzymują doświadczenie łowieckie podczas zwycięskiego rozstrzygnięcia starcia. Kiedy Ocalali otrzymują punkty doświadczenia łowieckiego, wypełnij kolejne niewypełnione pole doświadczenia łowieckiego na jego arkuszu Ocalałego. Niektóre poziomy doświadczenia zwierają kamienie milowe (zaznaczone grubszym obrysem) wyzwala to wydarzenie fabularne „wiek”. Liczba przy zapełnionym kamieniu milowym określa które zasady wieku należy zastosować. Kiedy wypełniane jest ostatnie pole, Ocalały jest zbyt stary by uczestniczyć w łowach, musi przejść w stan spoczynku.'
	},
	'Hunt Phase': {
		'label': 'Faza łowów',
		'description': 'część każdej sesji gry poświęcona wytropieniu potwora. W tej fazie Ocalali określają jakiego rodzaju i poziomu jest potwór na którego polują.'
	},
	'Ignore a Hit': {
		'label': 'Zignoruj trafienie',
		'description': 'Zmniejsz liczbę trafień o 1. Dzieje się to zanim miejsce trafienia zostanie określone.'
	},
	'Impairments': {
		'label': 'Upośledzenia',
		'description': 'trwałe zmiany lub urazy odniesione przez Ocalałego i zapisane na jego arkuszu. Często powstają w wyniku ciężkich urazów, odczytanych z tabeli ciężkich urazów.'
	},
	'Impassable': {
		'label': 'Nieprzekraczalny',
		'description': 'specjalna zasada terenu. Ocalały nie może dobrowolnie poruszyć sie na lub poprzez pole zajmowane przez nieprzekraczalny teren. Teren nieprzekraczalny zatrzymuje wszelkie ruchy, włączając odrzucenie. Jeśli Ocalały jest odrzucany na pole zajmowane przez teren nieprzekraczalny, zderza się z nim i jego ruch się kończy przed terenem.'
	},
	'Impervious': {
		'label': 'Odporność',
		'description': 'rodzaj miejsca trafienia potwora. Odporne miejsce trafnienia nie może zostać zranione, nawet rzutem zranienia z latarnią (10). Próba zadania rany nigdy nie może usunąć karty SI. Aczkolwiek, krytyczne efekty wciąż mogą zadziałać.'
	},
	'In Play': {
		'label': 'W grze',
		'description': 'wszystkie karty są uznawane jako pozostające w grze, po tym jak zostaną dobrane i dopóki nie zostaną rozpatrzone. Większość kart jest odrzucana po rozpatrzeniu. Niektóre takie jak nastroje pozostają w grze na czas nieokreślony lub dopóki nie zostanie spełniony jakiś warunek.'
	},
	'In Range (Monster)': {
		'label': 'W zasięgu (potwór)',
		'description': 'Ocalały jest w zasięgu potwora, jeśli liczba pól między nimi jest mniejsza lub równa jego bieżącej wartości ruchu (wliczając wszelkie modyfikatory). Jeśli \"w zasięgu\" występuje liczba, jak np. zasięg (8), liczba ta zastępuje wartość ruchu potwora, podczas obliczania czy Ocalały jest w zasięgu.'
	},
	'Indestructible': {
		'label': '',
		'description': 'A terrain special rule. A terrain that is undestructible cannot be destroyed or removed from the showdown board for any reason until the end of the showdown.'
	},
	'Injury Level': {
		'label': 'Rany - poziom',
		'description': 'wskazują obrażenia w miejscu trafienia. Zapisywane na arkuszu Ocalałego. Większość miejsc trafienia składa się z dwóch poziomów: lekkiego i ciężkiego, za wyjątkiem głowy (która ma tylko ciężki poziom ran).'
	},
	'Innovation': {
		'label': 'Innowacje',
		'description': 'rodzaj poziomu zaawansowania osady. Pozyskiwane są w Latarnianym Kopcu. Innowacje zwięszkają możliwości rozwoju osady i Ocalałych. Nowe innowacje zapisywane są w arkuszu osady.'
	},
	'Innovation Deck': {
		'label': '',
		'description': 'A settlements innovation deck is a persistent deck that grows as the settlement innovates.'
	},
	'Insane': {
		'label': 'Obłąkanie',
		'description': 'Ocalały z obłędem 3+.'
	},
	'Insanity': {
		'label': 'Obłęd',
		'description': 'chroni Ocalałego przed obrażeniami umysłu.'
	},
	'Instinct': {
		'label': 'Instynkt',
		'description': 'akcja którą potwór wykonuje, jeśli nie może znaleźć celu do ataku. Każdy potwór ma swój unikalny instynkt opisany w swoim wydarzeniu fabularnym starcia.'
	},
	'Instrument': {
		'label': 'Instrument',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek może być używany do grania muzyki.'
	},
	'Intimidate Actions': {
		'label': 'Zastraszanie (akcja)',
		'description': 'akcja zastraszania powoduje obrażenia umysłu. Akcja zastraszania nie jest atakiem lub trafieniem (Ocalały nie może wydać przetrwania by uniknąć akcji zastraszania. Potwory nie muszą być na polu sąsiadującym z celami, aby je zastraszać.'
	},
	'Irreplaceable': {
		'label': 'Przywiązany',
		'description': 'specjalna zasada ekwipunku. Jeśli Ocalały umiera, zarchiwizuj wszystkie przywiązane ekwipunki z jego siatki umiejętności.'
	},
	'Item': {
		'label': 'Przedmiot',
		'description': 'słowo kluczowe ekwipunku. Ekwipunek, który nie jest ani bronią ani pancerzem.'
	},
	'Jewelry': {
		'label': 'Biżuteria',
		'description': 'słowo kluczowe ekwipunku. Dekoracyjna i funkcjonalna!'
	},
	'Katana': {
		'label': 'Katana',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: katana. Ocalali nie mogą zdobywać poziomów biegłości w posługiwaniu się kataną.'
	},
	'Katar': {
		'label': 'Katar',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: katar. Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Knights Charge': {
		'label': '',
		'description': 'A Green Armor set bonus. Spend Activation and Movement, full move in a straight line. At the end of the movement, activate <b>Griswaldo</b> and attack. If you moved more than 5 spaces, this attack gains <b>devastating 2</b>.'
	},
	'Knockback X': {
		'label': 'Odrzucenie X',
		'description': 'przesuń cel odrzucenia o X pól, prosto, w kierunku przeciwnym do tego z którego zadziałało źródło odrzucenia. Jeśli ocalały przejdzie przez lub skończy na polu z innym Ocalałym, obaj zostają powaleni. Ocalali nie mogą współdzielić pola na którym się znajdują, przesuń powalonego Ocalałego na sąsiadujące pole.  Jeżeli Ocalały napotka krawędź planszy, zatrzymuje się i kończy odrzucenie.  Jeżeli Ocalały zostanie odrzucony na krawędzi planszy - przemieszcza się wzdłuż krawędzi.'
	},
	'Knocked Down (Monster)': {
		'label': 'Powalenie (potwór)',
		'description': 'gdy potwór zostaje powalony, rzuty ataku trafiają go na 3+ (zamiast normalnej precyzji). Anuluj wszystkie reakcje, łącznie z tymi reakcjami, które mogłyby być korzystne dla Ocalałych. Nie powoduje to anulowania efektów krytycznego zranienia (ponieważ nie są one reakcjami). Jeśli potwór zostanie powalony podczas przejścia na karcie, przerwij wykonywanie wszystkich pozostałych akcji na tej karcie. Powalony potwór wstaje kiedy dobiera kartę SI, zagrywana jest pułapka lub na początku kolejnej tury (potwora lub Ocalałych).'
	},
	'Knocked Down (Survivor)': {
		'label': 'Powalenie (Ocalały)',
		'description': 'Kiedy Ocalały zostaje powalony, połóż jego figurkę na boku. Powaleni Ocalali zawsze wstają na końcu następnej tury potwora. Jeśli Ocalały zostaje powalony w połowie swojego ataku, pozostałe ataki zostają przerwane. Powalony Ocalały może tylko wydawać przetrwanie na akcję uniku (pozostając powalonym) i nie może wydawać aktywacji ani ruchu.'
	},
	'Lantern': {
		'label': 'Latarnia',
		'description': 'słowo kluczowe ekwipunku. Latarnie rozświetlają ciemności.'
	},
	'Lantern 10': {
		'label': 'Latarnia (10)',
		'description': 'wynik rzutu kością, z latarnią skierowaną do góry. Odpowiada dziesiątce na 10-ściennej kości do gry. Zawsze oznacza sukces trafienia lub zranienia.'
	},
	'Lantern Year': {
		'label': 'Latarniany rok',
		'description': 'podstawowa jednostka czasu Ocalałych. Osada przeważnie rozwija się podczas jednego latarnianego roku, w każdej fazie osady.'
	},
	'Last to Wound': {
		'label': 'Ostatni raniący',
		'description': 'Ocalały który jako ostatni ranił potwora.'
	},
	'Leap': {
		'label': '',
		'description': 'A Dragon Armor set bonus.Spend Activation and Movement. You leap into the air! Place your survivor on an unoccupied space exactly 5 space away in a straight line, then activate a melee weapon and attack with +2 accuracy and +5 strength.'
	},
	'Leather': {
		'label': 'Blank',
		'description': 'słowo kluczowe ekwipunku. Blankowa skóra jest podstawowym składnikiem przy produkcji tego ekwipunku.'
	},
	'Legs': {
		'label': 'Nogi',
		'description': 'Miejsce trafienia Ocalałego. Obrażenia w nogi po przekroczeniu poziomu ciężkich ran, powodują rzut na tabelę ciężkich urazów nóg.'
	},
	'Legs Locked': {
		'label': 'Stabilna postawa',
		'description': 'kiedy otrzymujesz kość śmierci, wstajesz. Posiadając kość śmierci, nie możesz zostać powalony w żaden sposób.'
	},
	'Light Speed': {
		'label': '',
		'description': 'A type of monster hit location. This hit location must be resolved before any others. except Traps and Light Speed hit locations. If multiple First Strike locations are drawn, the player decides the order in which to resolve them. Traps still precede and cancel all other hits.'
	},
	'Life Trait': {
		'label': 'Życie - cecha',
		'description': 'wariant w podstawowej rozgrywce. Zmiast zranienia poprzez odrzucanie kart SI na stos ran, potwór odnosi ranę, redukująć liczbę cechy życia. Kiedy liczba zostanie zredukowana do 0, potwór ginie.'
	},
	'Limit once per lifetime': {
		'label': 'Limit, raz w życiu',
		'description': 'może się wydarzyć raz dla Ocalałego. Jeśli pojawia się ponownie, nic się nie dzieje. W niezwykle rzadkich przypadkach, jest możliwe, że Ocalały będzie częścią nowej kampanii. Ocalały nadal ma limit raz w życiu i nic co się takiego wydarzyło (z limitem raz w życiu) nie może przydarzyć się ponownie. Jeśli Ocalały w jakikolwiek sposób umrze i narodzi się ponownie, może otrzymać taki benefit ponownie. Zapisz efekt raz w życiu na arkuszu Ocalałego.'
	},
	'Luck (Player Attribute)': {
		'label': 'Szczęście (atrybut gracza)',
		'description': 'szczęście modyfikuje szansę Ocalałego na zadanie krytycznej rany w rzucie zranienia. +1 szczęścia powoduje krytyczną ranę przy wynikach rzutu 9 lub 10, +2 szczęścia przy 8, 9 lub 10 i tak dalej. Modyfikator szczęścia może być ujemny, uniemożliwiając zadanie rany krytycznej.'
	},
	'Luck (Monster Attribute)': {
		'label': 'Szczęście (atrybut potwora)',
		'description': 'każdy pozytywny żeton szczęścia potwora zmniejsza zakres wyniku w rzucie zranienia, powodującym krytyczną ranę. Normalnie rany krytyczne występują tylko na wyniku latarni (10). O ile Ocalali nie nie mają żetonów pozytywnych szczęścia, niemożliwe jest zadanie rany krytycznej potworowi z 1 lub więcej żetonów szczęścia. Każdy ujemny żeton szczęścia potwora podnosi zakres krytycznych trafień atakujących o 1. Zasada Latarni (10) zawsze ma zastosowanie, więc nawet jeśli szczęście potwora powoduje niemożliwość zadania rany krytycznej, rzut zranienia z wynikiem latarni (10) wciąż powoduje zwyczajną ranę.'
	},
	'Materialize': {
		'label': 'Materializacja',
		'description': 'zdejmij potwora z planszy starcia i umieść go przylegle do celu. Musi być on umieszczony tak, by jego podstawka zakrywała jak największą liczbę Ocalałych. Zderzają się oni z potworem według normalnych zasad.'
	},
	'Melee': {
		'label': 'Walka wręcz',
		'description': 'Słowo kluczowe ekwipunku. By zaatakować bronią do walki wręcz, Ocalały musi być na polu przyległym do potwora. Broń do walki wręcz z właściwością zasięgowa może atakować z większej odległości.'
	},
	'Menace': {
		'label': 'Groza',
		'description': 'instynkt Rzeźnika. Opisany w wydarzeniu fabularnym Rzeźnika.'
	},
	'Metal': {
		'label': 'Metal',
		'description': 'słowo kluczowe ekwipunku. Ten ekwipunek jest produkowany z metalu.'
	},
	'Metabolic Surrender': {
		'label': 'Kapitulacja metabolizmu',
		'description': 'w dowolnym momencie podczas starcia, możesz rzucić kością śmierci. Otrzymujesz punkty przetrwania w liczbie podwojonego rezultatu tego rzutu. W tej rundzie ignorujesz negatywne efekty trwałych urazów, upośledzeń, zaburzeń i negatywnych atrybutów (włączając żetony). Pod koniec rundy umierasz.'
	},
	'Miniature': {
		'label': 'Figurka',
		'description': 'fizyczne przestawienie potwora lub Ocalałego, używane podczas łowów oraz w fazie starcia.'
	},
        'Milestone': {
		'label': 'Kamień milowy',
		'description': 'Kamienie milowe to specjalne wydarzenia fabularne, które są aktywowane podczas etapu "Sprawdzenie kamieni milowych" w fazie osady, tylko wtedy, gdy spełnione są pewne określone warunki.'
	},
	'Monster AI Deck': {
		'label': 'Talia SI potwora',
		'description': 'każdy potwór posiada unikalną talię SI. Wydarzenia fabularne starcia opisuje jak stworzyć talię SI potwora właściwego poziomu.'
	},
	'Monster Controller': {
		'label': 'Kontroler potwora',
		'description': 'gracz który dociąga kartę SI potwora. Podejmuje on wszelkie decyzje i rzuca kośćmi by rozstrzygnąć akcje potwora w tej rundzie. Oznaczony jest kafelkiem kontrolera potwora. Kontroler potwora zmienia się na początku każdej rundy.'
	},
	'Monster Controller Bonus': {
		'label': 'Kontroler potwora - bonus',
		'description': 'kiedy Ocalały kontrolera potwora zostaje wybrany celem ataku, ta ryzykowna akcja przynosi temu Ocalałemu +1 obłędu.'
	},
	'Monster Controller Tile': {
		'label': 'Kontroler potwora - kafelek',
		'description': 'oznacza kontrolera potwora. Przechodzi na kolejnego gracza zgodnie z kierunkiem ruchu zegara lub Ocalałego na początku każdej rundy.'
	},
	'Monster-Impassable': {
		'label': '',
		'description': 'A terrain special rule. Nor survivors, nor monsters can move through spaces occupied by monster-impassable terrain.'
	},
	'Monster Hit Location Card': {
		'label': 'Potwór - karta miejsca trafienia',
		'description': 'reprezentuje miejsce na ciele potwora. Może być ono trafione przez Ocalałych, sukcesem w rzucie ataku. Wiele kart miejsca trafienia zawiera specjalne efekty lub akcje.'
	},
	'Monster Hit Location Deck': {
		'label': 'Potwór - talia miejsc trafienia',
		'description': 'karty które razem tworzą miejsca, w które Ocalały może trafić danego potwora. Unikalne dla każdego potwora.'
	},
	'Monster Level': {
		'label': 'Potwór - poziom',
		'description': 'określa trudność starcia i umieszczenia potwora na planszy łowów. Na potwory wyższego poziomu odbywają się dłuższe łowy i trudniejsze starcia.'
	},
	'Monster Reference Card/ Basic Action': {
		'label': 'Potwór - karta cech / akcji podstawowej',
		'description': 'zawiera skrócony przegląd charakterystyki każdego potwora. Służy jako kompaktowe przypomnienie najczęściej używanych informacji o potworze.'
	},
	'Monster Resources': {
		'label': 'Potwór - zasoby',
		'description': 'karty zasobów potwora są pozyskiwane tylko podczas walki z tym potworem. Każdy potwór na którego można urządzać łowy, posiada unikalną talię. Zasoby potworów mogą być używane i wydawane jako typ ich zasobów lub jako konkretny zasób, o określonej nazwie. Niektóre zasoby potworów mają własne, dodatkowe zasady.'
	},
	'Monster Showdown Story Event': {
		'label': 'Potwór - wydarzenie fabularne starcia',
		'description': 'zawiera istotne informacje o starciu i polowaniu na tego potwora, w tym instrukcję budowy talii SI potwora, łowów i rozstawienia planszy starcia, instynkcie potwora i podstawowej akcji oraz informacji o rozstrzygnięciu starcia.'
	},
	'Most/Least X': {
		'label': 'Najwięcej / najmniej X',
		'description': 'Ocalały z najwięcej / najmniej z wymienionego stanu lub warunku. Zero liczy się jako najwięcej / najmniej o ile nie podano inaczej.'
	},
	'Move and Attack Target Action': {
		'label': 'Porusz się i zaatakuj - akcja wyboru celu',
		'description': 'część składowa większości kart SI. Akcja „Porusz się i zaatakuj cel” następuje po wybraniu celu akcji. Wykonaj pełny ruch potwora w kierunku celu i przeprowadź atak opisany w profilu ataku.'
	},
	'Movement (Attribute)': {
		'label': 'Ruch (atrybut)',
		'description': 'maksymalna liczba pól o jakie może przejść Ocalały lub potwór podczas jednej akcji ruchu. Potwór lub Ocalały z wartością ruchu mniejszą niż 1, wciąż może poruszać się o 1 pole podczas każdej akcji ruchu.'
	},
	'Move Through Target': {
		'label': '',
		'description': 'When a monster instructed to move through a target, it moves towards the target but instead of stopping when adjacent, its movement continues. This will normally cause collision with the target.'
	},
	'Mood': {
		'label': 'Nastrój',
		'description': 'rodzaj karty SI potwora. Gdy karta nastroju jest dobierana, pozostaje w obszarze gry zamiast odrzucać ją na końcu tury potwora. Nastroje można usunąć przez niektóre ekwipunki lub warunki wymienione na karcie. Jeśli potwór otrzymuje ranę kiedy ma pustą talię SI i stos kart odrzuconych, ale jeden lub więcej aktywnych nastrojów - jest pokonany.'
	},
	'Natural 1': {
		'label': '',
		'description': 'Rolling 1 on hit and wound rolls always results in failure.'
	},
	'Nemesis Monster': {
		'label': 'Potwór Nemezis',
		'description': 'potwory Nemezis pojawiają się na obrzeżach osady. Nie można na nie polować i pojawią się w trakcie wydarzeń fabularnych.'
	},
	'Next Monster Turn': {
		'label': 'Następna tura potwora',
		'description': 'niektóre efekty utrzymują się do następnej tury potwora. Jeśli efekt zaczął się w turze Ocalałych, zakończy się po nadchodzącej turze potwora. Jeśli efekt zaczął się w turze potwora, zakończy się po kolejnej turze potwora.'
	},
	'Next Round': {
		'label': 'Następna runda',
		'description': 'niektóre efekty trwają do następnej kompletnej rundy. Ten efekt się skończy po tym jak potwór, a następnie Ocalali wykonają kolejną turę.'
	},
	'No Target': {
		'label': 'Brak celu',
		'description': 'ostatnia opcja na liście wyboru celu potwora. Wskazuje ona co zrobić gdy nie znaleziono celu. Najczęściej jest to instynktowna akcja potwora. Gdy potwór nie może znaleźć celu, wykonywane są kolejne akcje z karty.'
	},
	'Noisy': {
		'label': 'Hałaśliwy',
		'description': 'słowo kluczowe ekwipunku. Z tym ekwipunkiem trudno zachowywać się cicho.'
	},
	'Non-Deaf Survivor': {
		'label': '',
		'description': 'Survivors not suffering from the deaf severe head injury.'
	},
	'Obstacle': {
		'label': 'Przeszkoda',
		'description': 'zasada terenu. Ten teren blokuje Ocalałym i potworowi pole widzenia, przerywając ataki broni dystansowych i wybór celu potworowi. Aby sprawdzić, czy pole widzenia jest zablokowane, wytycz wyimaginowaną linię od środka podstawki figurki, do środka podstawki wybranego celu. Jeśli linia przejdzie przez pole zajmowane przez przeszkodę, pole widzenia jest zablokowane, a cel nie znajduje się w polu widzenia.'
	},
	'Organ (Resource)': {
		'label': 'Organ (zasób)',
		'description': 'słowo kluczowe pospolitych zasobów.'
	},
	'Other': {
		'label': 'Inne',
		'description': 'słowo kluczowe ekwipunku. Efekty tego ekwipunku są nieziemskie.'
	},
	'Outfit': {
		'label': 'Ubiór',
		'description': 'uzupełnia on zestaw pancerza. Gdy nosisz pancerz, któremu do pełnego zestawu brakuje części ekwipunku, można braki uzupełnić ekwipunkiem ubioru, posiadającego w składzie wspólne słowo kluczowe użytego materiału. Na przykład: jeśli nosisz Oksydowany hełm latarniany a na wszystkich innych miejscach trafienia pancerz Feniksa, otrzymujesz bonus za zestaw pancerza, ponieważ hełm Feniksa posiada słowo kluczowe metalowy, tak jak Oksydowany hełm.'
	},
	'Overwhelming Darkness': {
		'label': 'Przytłaczająca ciemność',
		'description': 'Pole na planszy łowów. Gdy po raz pierwszy podczas każdych łowów Ocalali wejdą na pole przytłaczającej ciemności, wyzwala to wydarzenie fabularne przytłaczająca ciemność. Ocalali nie mogą pominąć przytłaczającej ciemności. Jeśli wchodzą na to pole z jakiegokolwiek powodu, zatrzymują swój ruch na planszy łowów i rozstrzygają przytłaczającą ciemność przed innymi wydarzeniami lub efektami. Następnie mogą rozstrzygnąć wszelkie inne wydarzenia na tym polu. Jeśli z jakiegokolwiek powodu, Ocalali wejdą na, lub przejdą poprzez przytłaczającą ciemność więcej niż raz podczas tej samej fazy łowów, traktuj to pole jakby było puste. Jeśli potwór jest na polu przytłaczającej ciemności gdy Ocalali wchodzą na nie, pomiń to wydarzenie i natychmiast rozpocznij starcie.'
	},
	'Parry': {
		'label': '',
		'description': 'When attempting to wound a Parry hit locations all attempts fall unless the wound roll result is critical. This Failure triggers any Failure reactions as normal.'
	},
	'Paired': {
		'label': 'Sparowane',
		'description': 'specjalna zasada ekwipunku. Sparowane bronie, to dwie identyczne bronie które można użyć jednocześnie. Dodaj szybkość drugiej broni podczas ataku z pierwszą. Ta broń musi mieć te samą nazwę i obie muszą znajdować się w twojej siatce ekwipunku.'
	},
	'Perishable': {
		'label': '',
		'description': 'A resource keyword. This resource cannot be added to settlement storage. At the end of the settlement phase, it is lost. Archive it. In order for perishable resources to last more than one lantern year, they must be carried out of the settlement in a Satchel!'
	},
	'Perfect Hit': {
		'label': 'Perfekcyjne trafienie',
		'description': 'wynik rzutu kostką podczas ataku: 10 (latarnia). Ten rezultat oznacza zawsze trafienie. Kiedy w jednym ataku wyrzucono więcej perfekcyjnych trafień, wyzwalanych jest dokładnie tyle dowolnie wybranych reguł, odnoszących się do perfekcyjnych trafień.'
	},
	'Permanent Injury': {
		'label': 'Trwały ciężki uraz',
		'description': 'rana której nie leczy czas. Jej skutki zawsze odnoszą się do Ocalałego, chyba że zostaną anulowane przez inny efekt.'
	},
	'Persistent Injury': {
		'label': 'Trwały uraz',
		'description': 'specjalny uraz którego opis znajduje się na niektórych kartach miejsca trafienia potwora. Gdy potwór otrzymuje trafienie krytyczne w miejsce trafienia z trwałym urazem, pozostaw tę kartę w grze, zamiast ją odrzucać. Niektóre trwałe urazy modyfikują zachowanie potwora, podczas gdy inne wpływają na konkretne karty SI.'
	},
	'Persistent Injury Actions': {
		'label': 'Trwały uraz - akcja',
		'description': 'znajduje się na niektórych kartach SI. Akcja trwałego urazu jest akcją z warunkiem który zmienia zwyczajne zasady z karty SI. Jest ona wykonywana tylko wtedy, gdy potwór dobiera kartę SI z akcją trwałego urazu odpowiadającą trwałemu urazowi pozostającemu w grze. Jeśli akcja trwałego urazu jest wykonywana, zignoruj inne akcje na tej karcie.'
	},
	'Pickaxe': {
		'label': 'Kilof',
		'description': 'słowo kluczowe ekwipunku. Najczęściej może być on używany do zbierania minerałów.'
	},
	'Pick Target': {
		'label': 'Wybierz cel',
		'description': 'składnik większości kart SI. Lista wyboru celu składa się z serii warunków. Kontroler potwora sprawdza począwszy od pierwszego, który z nich zostaje spełniony.Niekiedy cele są określane przez obszar lub strefę (np. przylegli Ocalali lub wszyscy Ocalali w danej strefie). Niektóre karty SI wskazują więcej niż jeden cel.'
	},
	'Place': {
		'label': 'Postaw',
		'description': 'Zmień umiejscowienie figurki z jednego miejsca na planszy starcia na inne. Nie liczy się to jako ruch.'
	},
	'Pounce': {
		'label': 'Skok',
		'description': 'specjalna zasada ekwipunku. Wydaj Aktywację i Ruch, aby wykonać ruch o 3 pola naprzód w linii prostej i aktywuj broń do walki wręcz. Ten atak otrzymuje +1 siły.'
	},
	'Principle': {
		'label': 'Doktryna',
		'description': 'doktryny są filozofiami zachowań twojej osady. Kiedy wyzwalane jest wydarzenie fabularne doktryny, osada musi podjąć decyzję. Wybrana doktryna zapisywana jest w arkuszu osady i dodawana jej karta do obszaru gry osady.'
	},
	'Priority Target': {
		'label': 'Cel priorytetowy',
		'description': 'gdy Ocalały otrzymuje żeton celu priorytetowego skupia na sobie uwagę potwora. Tylko 1 Ocalały na raz, może mieć żeton celu priorytetowego. Gdy potwór wykonuje akcję wyboru celu, Ocalały z żetonem celu priorytetowego zawsze będzie wybierany. Żeton celu priorytetowego jest usuwany tylko wtedy, gdy inny Ocalały otrzymuje żeton celu priorytetowego, a efekty powodowane przez ten żeton są anulowane.'
	},
	'Prismatic': {
		'label': '',
		'description': 'Your complete affinities and incomplete affinity halves count as all colors.'
	},
	'Provoke': {
		'label': 'Sprowokowanie',
		'description': 'specjalna zasada ekwipunku. Kiedy zadasz ranę tą bronią, otrzymujesz żeton celu priorytetowego.,'
	},
	'Proxy cards': {
		'label': 'Karty zastępcze',
		'description': 'jest 8 kart zastępczych. Można je użyć do zastąpienia kart zgubionych lub stworzenia wariantów gry.'
	},
	'Pulse Discoveries': {
		'label': 'Badanie impulsów',
		'description': 'seria umiejętności które mogą zostać odkryte poprzez badania latarni. Badanie impulsów może zostać wykonane przez Ocalałego z kością śmierci.'
	},
	'Puzzle Affinity': {
		'label': 'Powiązania puzzlowe',
		'description': 'specjalna zasada ekwipunku. Bonusy za powiązania puzzlowe mogą być otrzymywane tylko jeśli powiązania są utworzone na tej konkretnej karcie (wskazane jest to za pomocą ikony puzzla zamiast kwadratu).'
	},
	'Quarry': {
		'label': 'Zdobycz',
		'description': 'potwór którego wybrali Ocalali, by wyruszyć na niego, na łowy.'
	},
	'Random Hit Location (Survivor)': {
		'label': 'Losowe miejsce trafienia (Ocalały)',
		'description': 'wyznaczane przez użycie dołączonej kostki miejsca trafienia.'
	},
	'Random Hunt Event': {
		'label': 'Losowe wydarzenie na łowach',
		'description': 'rzuć 1k10 i wybierz odpowiednie wydarzenie, odpowiadające wyrzuconemu wynikowi w tabeli wydarzeń na łowach.'
	},
	'Random Survivor': {
		'label': 'Losowy Ocalały',
		'description': 'kontroler potwora lub wykonawca wydarzenia zazwyczaj wybiera Ocalałego, używając równego prawdopodobieństwa dla każdego.'
	},
	'Range (Gear)': {
		'label': '',
		'description': 'A gear special rule. Survivors this many or fewer spaces away from a monster may attack with this weapon. Ranged weapons cannot be used if field of view to the monster is blocked (by terrain with the Obstacle rule).'
	},
	'Ranged': {
		'label': 'Zasięgowa',
		'description': 'specjalna zasada ekwipunku. Broń zasięgowa jest wystarczająco długa, aby zaatakować potwora, gdy Ocalały nie sąsiaduje z jego polem. Zasięg określa maksymalną odległość, z którego może Ocalały zaatakować tą bronią.'
	},
	'Ranged Attack Target': {
		'label': '',
		'description': 'When monster is instructed to Ranged Attack Target it attacks with unlimited range. It does not need to be adjacent in order to hit.'
	},
	'Rawhide': {
		'label': 'Surowa skóra',
		'description': 'Słowo kluczowe ekwipunku. Ten ekwipunek jest wykonany z nieutwardzonych skór.'
	},
	'Reach': {
		'label': 'Zasięgowa',
		'description': 'specjalna zasada ekwipunku. Broń zasięgowa jest wystarczająco długa, aby zaatakować potwora, gdy Ocalały nie sąsiaduje z jego polem. Zasięg określa maksymalną odległość, z którego może Ocalały zaatakować tą bronią.'
	},
	'Reaction': {
		'label': 'Reakcja',
		'description': 'zasada miejsca trafienia. Są 3 typy reakcji: na zranienie, niepowodzenie i refleks. Każdy posiada określone warunki wystąpienia reakcji. Reakcje następują po rzucie zranienia miejsca lokacji, na karcie na której się znajdują i zanim zacznie się rozpatrywanie następnego miejsca trafienia.'
	},
	'Record And Archive': {
		'label': 'Zapisz i zarchiwizuj',
		'description': ' Instrukcja dotycząca pewnych kart, takich jak zaburzenia i sztuki walki. Zapisz wymienione efekty i odłoż kartę do pudełka z grą.'
	},
	'Red Life Exchange': {
		'label': '',
		'description': 'An ability. In the Aftermath, gain 3 additional Hunt XP. You may not place gear with the \"other\" keyword in your grid. Gain +l permanent strength with each Age milestone. When you retire, you cease to exist.'
	},
	'Reflex (Reaction)': {
		'label': 'Odruch (reakcja)',
		'description': 'typ reakcji potwora. Ta reakcja następuje niezależnie od tego, czy próba zranienia się powiodła czy też nie.'
	},
	'Remove From The Showdown Board (Survivor)': {
		'label': 'Usuń z planszy starcia (Ocalałego)',
		'description': 'Usuń figurkę Ocalałego z planszy starcia. Umieść go na karcie statusu Ocalałego, jeśli ją posiada. Ocalały usunięty z planszy starcia ma swój akt, ale nie może wykonywać akcji ruchu, aktywacji lub akcji przetrwania. O ile nie określono inaczej, ani on nie wpływa, ani nic na niego nie wpływa z planszy starcia Gdy starcie dobiega końca, wszyscy Ocalali którzy którzy byli usunięci z planszy (ale nie umarli) normalnie biorą udział w rozstrzygnięciu.'
	},
	'Resolved': {
		'label': 'Rozegranie',
		'description': 'karta zostaje rozegrana, gdy nie ma już na niej żadnej instrukcji do wykonania. Może to nastąpić po wykonaniu każdej wypisanej akcji lub w wyniku określonych instrukcji na karcie.'
	},
	'Resources': {
		'label': 'Zasoby',
		'description': 'karty zasobów są zdobywane przez pokonanie potworów i poprzez wydarzenia. Są przeznaczone na rozwój osady i produkcję ekwipunku. Wystepują 4 rodzaje: podstawowe, potworów, dziwne i robactwo.'
	},
	'Resource Types': {
		'label': 'Zasoby (typy)',
		'description': 'Oprócz wymienionej nazwy, wszystkie karty zasobów posiadają jeden lub więcej typów określających użycie. Najczęstsze rodzaje to kość na przykład kość, skóra, organ i złom.'
	},
	'Retch': {
		'label': '',
		'description': 'Some of the Gorms AI and Hit Location cards direct it to perform Retch. This action causes damage to all survivors in the indicated zone. Terrain, survivors, or other effects on the board will not modify this zone.'
	},
	'Reveal': {
		'label': 'Odkrycie',
		'description': 'odwrócenie karty na widoczną stronę i sprawdzenie jej (ale nie zagranie). Nie tasujesz talii by odkryć więcej kart niż jest w talii.'
	},
	'Retired': {
		'label': 'Stan spoczynku',
		'description': 'kiedy zapełniane jest końcowe pole doświadczenia łowieckiego, Ocalały jest zbyt stary aby chodzić na łowy i musi przejść w stan spoczynku. Niektóre zaburzenia i ciężkie urazy również zmuszają do przejścia w stan spoczynku. Ocalali którzy przeszli w stan spoczynku nie mogą wyruszać na łowy, ale nadal wliczają się do łącznej populacji osady i mogą uczestniczyć w wydarzeniach osady oraz działaniach.'
	},
	'Returning Survivors': {
		'label': 'Powracający Ocalali',
		'description': 'wszyscy Ocalali którzy przetrwali ostatnie starcie są powracającymi Ocalałymi.'
	},
	'Rewards': {
		'label': 'Nagrody',
		'description': 'nagrody są otrzymywane za pokonywanie potworów. Są one wypisane w wydarzeniu fabularnym starcia z potworem. Otrzymuje je grupa, raz za zwycięskie starcie (chyba że zaznaczono inaczej).'
	},
	'Ripple Pattern': {
		'label': '',
		'description': 'A gear special rule. When you are attacked, roll 1d10. On a 10+, ignore 1 hit.'
	},
	'Round (Showdown)': {
		'label': 'Runda (starcie)',
		'description': 'starcie składa się z naprzemiennych rund, po kolei potwora, a następnie Ocalałych. Rundy są kontynuowane, dopóki potwór nie będzie martwy lub wszyscy Ocalali nie zginą.'
	},
	'Run Away': {
		'label': 'Ucieczka',
		'description': 'gdy osada odkrywa innowację piktogramy, Ocalali mogą zrezygnować z fazy łowów lub starcia w dowolnym momencie. Postępuj zgodnie z instrukcjami w wydarzeniu fabularnym ucieczka.'
	},
	'Savage': {
		'label': 'Brutalność',
		'description': 'specjalna zasada ekwipunku. Po pierwszej krytycznej ranie podczas ataku, broń z brutalnością zadaje 1 dodatkową ranę. Ten efekt nie działa na odporne miejsca trafienia.'
	},
	'Scythe': {
		'label': '',
		'description': 'Gear with this keyword is a scythe weapon. Survivors may gain levels of scythe weapon proficiency with this weapon.'
	},
	'Secret Fighting Arts': {
		'label': 'Sekretna sztuka walki',
		'description': 'sekretne sztuki walki są sztukami walki które nie mogą byc poznane normalnie. Każda sekretna sztuka walki ma odpowiednią kartę która opisuje zasady jej użycia. Doliczają się one także, do maksymalnej możliwej liczby znanych 3 sztuk walki.'
	},
	'Selfish': {
		'label': 'Samolubny',
		'description': 'specjalna zasada ekwipunku. Ekwipunek z tą zasadą nie może być w tej samej siatce ekwipunku z żadnym ekwipunkiem ze słowem kluczowym „inne”.'
	},
	'Sentient': {
		'label': 'Czująca',
		'description': 'specjalna zasada ekwipunku. Ocalały musi być obłąkany by aktywować ten ekwipunek.'
	},
	'Session': {
		'label': 'Sesja',
		'description': 'typowa sesja składa się z trzech faz: fazy łowów, fazy starcia i fazy osady. Niektóre wydarzenia moga spowodować, że Ocalali pominą jedną lub więcej z tych faz. Na przykład, spotkanie z Nemezis powoduje, że nie będzie etapu łowów.'
	},
	'Set': {
		'label': 'Zestaw',
		'description': 'słowo kluczowe ekwipunku wymienione na niektórych kartach pancerza. Oznacza to, że ten pancerz jest częścią zestawu.'
	},
	'Settlement': {
		'label': 'Osada',
		'description': 'unikalny zestaw lokacji, innowacji, doktryn, ekwipunku i zasobów oraz Ocalałych który reprezentuje dom Ocalałych. Ocalali znajdują się w osadzie podczas fazy osady.'
	},
	'Settlement Board': {
		'label': 'Osada - plansza',
		'description': 'plansza osady znajduje się na odwrotnej stronie planszy łowów. Pola na planszy odpowiadają krokom poszczególnych etapów w fazie osady, prowadząc przez nią graczy.'
	},
	'Settlement Event': {
		'label': 'Osada - wydarzenia',
		'description': 'wydarzenia dziejące się podczas fazy osady.'
	},
	'Settlement Phase': {
		'label': 'Osada - faza',
		'description': 'podczas fazy osady, Ocalali rozwijają osadę, przeżywają wydarzenia fabularne, podejmują działania, tworzą ekwipunek i wybierają którzy Ocalali wyruszą na następne łowy. To jedyna faza w której Ocalali mogą zmieniać i reorganizować swoją siatkę ekwipunku.'
	},
	'Settlement Record Sheet': {
		'label': 'Osada - arkusz',
		'description': 'pomaga graczom śledzić rozwój osady.'
	},
	'Severe Injury': {
		'label': 'Cięzki uraz (miejsce trafienia)',
		'description': 'Gdy punkty pancerza Ocalałego i poziomy ran zostaną wyczerpane, kumulują się w przejściowe lub trwałe ciężkie urazy z tabeli ciężkich urazów. Kiedy Ocalały odnosi trwały ciężki uraz, zanotuj nazwę i zasady na jego arkuszu Ocalałego i dostosuj jego atrybuty, jeśli to konieczne. Niektóre obrażenia powoduja zapełnienie pola „pomiń następne łowy” na arkuszu Ocalałego. Inaczej ciężkie urazy trwają do końca starcia i są oznaczane przez żetony atrybutów.'
	},
	'Severe Injury Tables': {
		'label': 'Ciężkie urazy - tabela',
		'description': 'zawiera sekcję o możliwych ciężkich urazach w miejscach trafień. Każde trafienie powodujące ciężkie urazy, powoduje jednocześnie rzut w tabeli ciężkich urazów, dla tego miejsca trafienia.'
	},
	'Sharp': {
		'label': 'Ostry',
		'description': 'specjalna zasada ekwipunku. Dodaj 1k10 siły do każdej próby zranienia przy użyciu tego ekwipunku. Ten rzut 1k10 nie jest rzutem na zranienie i nie może powodować rany krytycznej.'
	},
	'Shield': {
		'label': 'Tarcza',
		'description': 'Ekwipunek z tym słowem kluczowym jest bronią: tarcza. Ocalali używając tarczy, mogą otrzymywać biegłość w posługiwaniu się tą bronią.'
	},
	'Showdown Board': {
		'label': 'Starcie - plansza',
		'description': ' reprezentuje obszar, gdzie Ocalali ścierają się w bitwie z potworem. Szczegółowe zasady rozstawienia planszy starcia, znajdują się w wydarzeniu fabularnym każdego potwora.'
	},
	'Showdown Board Edge': {
		'label': 'Starcie - krawędź planszy',
		'description': 'generalnie potwory lub Ocalali nie mogą poruszyć się poza krawędź planszy starcia. Jakiekolwiek odrzucenia lub efekty pełnego ruchu które przeniosłyby figurkę poza planszę, zamiast tego kończą się na jej krawędzi.'
	},
	'Showdown Phase': {
		'label': 'Starcie - faza',
		'description': 'część sesji gry w której Ocalali stają na przeciwko potwora. W instrukcji na stronach starcia z potworem, opisane jest jak rozpoczyna i kończy się faza starcia.'
	},
	'Showdown Setup': {
		'label': 'Starcie - rozstawienie',
		'description': 'część wydarzenia fabularnego starcia każdego potwora. Zawiera instrukcję rozłożenia kafli terenów i potwora oraz figurek Ocalałych na planszy starcia przed bitwą.'
	},
	'Sickle': {
		'label': 'Sierp',
		'description': 'słowo kluczowe ekwipunku. W najczęstszych sytucjach jest przydatny do zbierania ziół.'
	},
	'Skewer': {
		'label': 'Sztych',
		'description': 'Po wykonaniu natarcia, wydaj a by poruszyć się o 1 pole i aktywować broń ręczną z siłą +2. Jeśli ranisz włócznią, zastosuj ten rezultat rzutu zranienia do kolejnego wybranego miejsca trafienia.'
	},
	'Skip Next Hunt': {
		'label': 'Pomiń następne łowy',
		'description': 'wypełnij pole „pomiń następne łowy” na arkuszu Ocalałego. Ten Ocalały nie może zostać wybrany jako wyruszający na łowy. Po wyruszeniu wybranych Ocalałych, wymaż wszystkie wypełnione pola „pomiń następne łowy” na wszystkich arkuszach Ocalałych.'
	},
	'Slam': {
		'label': 'Natarcie',
		'description': 'specjalna zasada ekwipunku. Wydaj akcję Ruchu i wykonaj pełny ruch naprzód w linii prostej. Jeśli poruszysz się o 4+ pola i zatrzymasz przylegle do potwora, zostanie on odrzucony o 1 i otrzymuje -1 wytrzymałości do końca rundy.'
	},
	'Slow': {
		'label': 'Powolna',
		'description': 'specjalna zasada ekwipunku. Powolna broń zawsze ma szybkość ataku 1. Nie dodawaj modyfikatorów szybkości.'
	},
	'Sniff': {
		'label': 'Węszenie',
		'description': 'instynkt Białego Lwa. Opisany w wydarzeniu fabularnym Białego Lwa.'
	},
	'Shadow Walk': {
		'label': '',
		'description': 'When you spend movement, you may move through spaces survivors occupy without causing <b>collision</b>.'
	},
	'Soluble': {
		'label': 'Rozpuszczalny',
		'description': 'specjalana zasada ekwipunku. Może się rozpuszczać w cieczy.'
	},
	'Solar Track': {
		'label': '',
		'description': 'The Solar Track is used during the showdown with the Sunstalker. It interacts with the monster trait cards, tracks the current solar energy, and determines the direction shadows are cast.<br/><br/>Set up the Solar Track alongside the showdown board. The showdown will begin with the light at the survivors backs.'
	},
	'Spear': {
		'label': 'Włócznia',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: włócznia. Używając tej broni, Ocalali mogą zdobywać poziomy biegłości w posługiwaniu się włócznią.'
	},
	'Special Showdown': {
		'label': 'Specjalne starcie',
		'description': 'specjalne starcie przerywa fazę osady. Po rozegraniu jego (niezależnie zwycięskiego czy przegranego), kontynuowana jest faza osady, tam gdzie została przerwana. Nie są generowane punkty działań ani nie wyzwala się nowe wydarzenia fabularne. Szczegółowe informacje o każdym specjalnym starciu, są opisane w wydarzeniu fabularnym lub innowacji która je wywołała.'
	},
	'Speed (Attack Profile/Weapon)': {
		'label': 'Szybkość (profil ataku / broń)',
		'description': ' liczba rzutów ataku (liczba rzucanych kości). Zwykle określana przez profil ataku na karcie SI potwora lub szybkość broni Ocalałego.'
	},
	'Speed (Attribute)': {
		'label': 'Szybkość (atrybut / modyfikator / bonus)',
		'description': 'szybkość jest dodawana do szybkości broni Ocalałego lub szybkości ataku potwora z jego profilu w celu ustalenia liczby rzucanych ataków. Jeśli szybkość jest ujemna, należy odjąć ją od liczby kości rzucanych w ataku. Potwór lub Ocalały atakujący z szybkością mniejszą niż jeden, wciąż ma jeden rzut ataku. Broń ze słowem kluczowym powolna nie może korzystać z dodatnich bonusów szybkości.'
	},
	'Starvation Space': {
		'label': 'Pole głód',
		'description': 'jeśli Ocalali wchodzą na to pole (włączając rozpoczęcie starcia) Zastosuj zasady dla pola głód na planszy łowów.'
	},
	'Stinky': {
		'label': 'Cuchnący',
		'description': 'słowo kluczowe ekwipunku. Ten przedmiot wydziela silny odór.'
	},
	'Story Event': {
		'label': 'Wydarzenie fabularne',
		'description': 'wydarzenie, które ma wpływ na osadę / Ocalałych. Najczęściej uruchamiane jest poprzez: zmiany na osi czasu, kamienie milowe Ocalałych podczas zdobywania odwagi / doświadczenia łowieckiego / wiedzy, karty potworów wydarzenia osady. Kiedy pojawia się odpowiedni symbol '
	},
	'Strange Resources': {
		'label': 'Dziwne zasoby',
		'description': 'karty zasobów pozyskiwane tylko w określonych sytuacjach. Dziwne zasoby potworów nie są wtasowywane w talię zasobów potwora.'
	},
	'Strength (Attribute)': {
		'label': 'Siła (atrybut / modyfikator / bonus)',
		'description': 'siła jest dodawana do rezultatu rzutu na próbę zranienia. Jeśli siła ma wartości ujemne, odejmuje się ją od rezultatu próby zranienia.'
	},
	'Strength (Weapon)': {
		'label': 'Siła (broń)',
		'description': 'liczba jaką broń dodaje do rzutu na próbę zranienia.'
	},
	'Super-Dense': {
		'label': 'Super twarde',
		'description': 'rodzaj miejsca trafienia. Ta miejsce trafienia jest niezwykle twarde. Jeśli Ocalały próbuje zranić jedno z tych miejsc za pomocą łamliwej broni, zostaje ona zniszczona i zarchiwizowana na koniec ataku.'
	},
	'Surge': {
		'label': 'Przyspieszenie',
		'description': 'rodzaj akcji Ocalałego. Kiedy okoliczności pozwolą, Ocalały może wydać 1 przetrwania, by wykonać przyspieszenie. Przyspieszający Ocalały otrzymuje +1 Aktywację, które musi użyć natychmiast. Pozwala to wykonać aktywować broń, wejść w interakcję z terenem, użyć ekwipunku i wszelkie inne akcje wymagające wydania aktywacji. Rozstrzygnij rezultat przyspieszenia (włączając jakiekolwiek reakcje potwora) przed wznowieniem tury. Każdy Ocalały może wykonać przyspieszenie tylko raz na rundę i tylko jeśli osada posiada innowację wewnętrzna latarnia.'
	},
	'Survival': {
		'label': 'Przetrwanie',
		'description': 'Przetrwanie jest kurczowym trzymaniem się życia. Punkty przetrwania są otrzymywane i tracone poprzez całą kampanię. Mozna je wydawać by dokonywać niezwykłych wyczynów i zmieniać swój los. Aktualizuj pole przetrwania na arkuszu Ocalałego, gdy jest ono pozyskiwane i tracone.'
	},
	'Survival Action': {
		'label': 'Przetrwanie - akcje',
		'description': 'akcje przetrwania są najczęstszym sposobem używania punktów przetrwania. Jest pięć akcji przetrwania: unik, natchnienie, sprint, przyspieszenie, wytrwałość.'
	},
	'Survival Limit': {
		'label': 'Przetrwanie - limit',
		'description': ' limit przetrwania jest maksymalną liczbą przetrwania jaką Ocalały może posiadać. Limit przetrwania jest zapisany na arkuszu osady. Innowacje i wydarzenia podnoszą limit przetrwania osady. Na początku kampanii, limit przetrwania to 1. Pozyskiwane przetrwanie powyżej limitu przetrwania jest tracone.'
	},
	'Survival Opportunity': {
		'label': 'Przetrwanie - możliwości',
		'description': 'jedyny czas, w którym Ocalali mogą wykonać sprint lub przyspieszenie. Możliwości wykorzystania przetrwania występują w następujących momentach: podczas przejścia na kartach SI potworów, pomiędzy akcjami w turze Ocalałych, przed wykonaniem reakcji, po efektach rany krytycznej lub gdy potwór jest powalony.'
	},
	'Survivor Record Sheet': {
		'label': 'Arkusz Ocalałego',
		'description': 'reprezentuje bieżący stan Ocalałego. Niektóre części zawierają: atrybuty, doswiadczenie łowieckie, biegłość w broni i trwałe zmiany.'
	},
	'Survivor Status Card': {
		'label': 'Status - karta Ocalałego',
		'description': 'specjalne (S) karty SI wskazujące pewne sytuacje dla Ocalałego, a nie potwora. Gdy Ocalały otrzymuje kartę statusu Ocalałego, umieszcza ją obok swojej siatki ekwipunku. Efekty karty odnoszą się tylko do niego. Niektóre karty statusu są zmienne i muszą być śledzone. Niektóre ofiarowują Ocalałym unikalne akcje. Jeśli wydarzenie fabularne potwora zawiera kartę statusu Ocalałego w rozstawieniu, wszyscy Ocalali otrzymają kartę na początku starcia.'
	},
	'Sword': {
		'label': 'Miecz',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: mieczem. Ocalali z tą bronią, mogą zdobywać poziomy biegłości w posługiwaniu się mieczem.'
	},
	'Tactics Cards': {
		'label': '',
		'description': 'Tactics provide survivors with new ways to fight, using what theyve learned from fighting knights. Tactics Cards are drawn at the start of showdown and places in survivors play area. At the end of showdown, archive all drawn Tactics Cards.'
	},
	'Target': {
		'label': 'Cel',
		'description': 'jest obiektem ataku lub efektu. Niektóre ataki lub efekty mogą wpływać na Ocalałych inaczej niż na cel.'
	},
	'Terrain Cards': {
		'label': 'Karty terenu',
		'description': 'reprezentują teren, który można napotkać podczas fazy starcia i zawierają zasady dotyczące potworów i Ocalałych wchodzących w interakcje z nimi. Karty Terenu umieszczają jeden lub więcej kafli terenu na planszy starcia.'
	},
	'Terrain Tile': {
		'label': 'Kafle terenu',
		'description': 'kafle terenu umieszczane na planszy starcia, reprezentują fizyczne elementy terenu. Rodzaj i liczba dodanych terenów do planszy starcia jest określona przez karty terenu, wyszczególnione w części rozstawienie wydarzenia fabularnego starcia.'
	},
	'Threat': {
		'label': 'Zagrożenie',
		'description': 'zagrożeniem jest każdy Ocalały który nie jest powalony lub nie używa specjalnego ekwipunku, terenu lub umiejętności chroniącej go przed byciem zagrożenienim.'
	},
	'Thrown': {
		'label': 'Rzucana',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią rzucaną. Ocalali nie mogą zdobywać poziomów biegłości w posługiwaniu się bronią rzucaną.'
	},
	'Timeline': {
		'label': 'Oś czasu',
		'description': 'wskazuje upływającą liczbę latarnianych lat od momentu założenia osady. Znajduje się na arkuszu osady. Wyzwala historie i wydarzenia fabularne osady w miarę postępów na osi czasu.'
	},
	'Tool': {
		'label': 'Narzędzie',
		'description': 'słowo kluczowe ekwipunku. Niektóre narzędzia uruchamiają zdarzenia fabularne lub przyznają premie.'
	},
	'Toughness': {
		'label': 'Wytrzymałość',
		'description': 'Wytrzymałość to liczba, którą podczas próby zranienia należy przekroczyć lub wyrównać by zadać ranę potworowi.'
	},
	'Toward (Movement)': {
		'label': 'W stronę (ruch)',
		'description': 'kierunek używany w odniesieniu do innych punktów na planszy, takich jak: potwór, Ocalały, kafel terenu lub krawędź planszy.'
	},
	'Trait': {
		'label': 'Cecha',
		'description': 'rodzaj karty SI potwora. Opisuje trwałe zmiany w charakterystyce lub zachowaniu potwora. Karty cech nie są odrzucane na końcu tury potwora.'
	},
	'Trap': {
		'label': 'Pułapka',
		'description': 'rodzaj karty miejsca trafienia potwora. Pułapka anuluje wszystkie trafienia atakujących, kończy ten atak i powoduje, że potwór wstaje, dodatkowo wykonuje akcje wymienione na karcie. Gdy akcje karty pułapki zostaną rozegrane, potasuj całą talię miejsc trafień.'
	},
	'Trigger': {
		'label': 'Wyzwalanie',
		'description': 'część profilu ataku potwora. Przedstawia, że taki efekt jest częścią tego ataku.'
	},
	'Turn (Monster)': {
		'label': 'Tura (potwora)',
		'description': 'pierwsza część rundy, gdy potwór wykonuje swój akt. Kontroler potwora powinien wykonać wszelkie efekty „na początku tury”, dociągnąć kartę SI, następnie wykonać wszelkie efekty „na końcu tury”.'
	},
	'Turn (Survivors)': {
		'label': 'Tura (Ocalałych)',
		'description': 'druga część rundy jest jest turą Ocalałych. Podczas tury Ocalałych, Ocalali wykonują wykonują pojedyńczo swoje akty. Każdy kończy swój akt, zanim kolejny Ocalały moze rozpocząć swój. Ocalali mogą wybierać kolejność rozgrywania aktów dowolnie.'
	},
	'Twelve Fingers (Gambler)': {
		'label': '',
		'description': 'You cannot carry two-handed gear. On a Perfect Hit, your right arm pulses. Gain +5 insanity and +1 luck for the attack. However, for each natural 1 rolled when attempting to hit, your your left hand shakes. Suffer 5 brain damage and -1 luck for the attack.'
	},
	'Two-handed': {
		'label': 'Dwuręczna',
		'description': 'słowo kluczowe ekwipunku. Ta broń wymaga do użycia dwóch rąk. Niektóry ekwipunek i zasady nie współdziałają z dwuręczną bronią.'
	},
	'Twilight Sword': {
		'label': '',
		'description': 'A weapon of great strength. Survivor holding can select it as a weapon profiency.'
	},
	'Undeathable': {
		'label': 'Niezabijalny',
		'description': 'Aspecjalna zasada ekwipunku. Jeśli Ocalały umiera, rzuć 1k10. Przy 6+ Ocalały żyje. Jeśli ten rzut następuje dla Ocalałego posiadającego śmiertelną ilość żetonów krwawienia, Ocalały nie umrze dopóki nie otrzyma kolejnego żetonu krwawienia.'
	},
	'Understanding': {
		'label': 'Wiedza',
		'description': 'atrybut Ocalałego wymieniony w arkuszu Ocalałego. Reprezentuje wiedzę Ocalałego o świecie. Osiągnięcie wiedzy poziomu 3 wyzwala wydarzenie fabularne wizja, natomiast osiągnięcie poziomu 9 wyzwala wydarzenie fabularne Biały sekret.'
	},
	'Uninhibited Rage': {
		'label': 'Niepohamowany szał',
		'description': 'dodaj +1k10 siły do próby zadania rany. Po rzucie na zadanie rany, możesz rzucić kością śmierci i dodać wynik do siły swojej próby zadania rany.'
	},
	'Unique': {
		'label': 'Unikalny',
		'description': 'specjalna zasada ekwipunku. Osada może posiadać jednocześnie tylko jedną kopię tej karty ekwipunku.'
	},
	'Unshakable': {
		'label': '',
		'description': 'A gear special rule. When this survivor draws a trap card, roll 1d10. On a result of 6+, ignore the trap. Discard it and shuffle the hit location deck.'
	},
	'Unstoppable': {
		'label': 'Niepowstrzymany',
		'description': 'specjalna zasada ekwipunku. Zamień wszystkie rzuty zranienia na rzut 1k10. Na 1-5: nieudany, na 6+ zranienie. Nie możesz spowodować rany krytycznej używając tej zasady.'
	},
	'Unwieldy': {
		'label': 'Nieporęczny',
		'description': 'Specjalna zasada ekwipunku. Jeśli jakikolwiek rzutu ataku wyniósł 1, broń zadaje  Ocalałemu 1 obrażenie w losową lokację za każdą wyrzuconą 1. Kontynuuj atak normalnie.'
	},
	'Vermin Resources': {
		'label': 'Robactwo - zasoby',
		'description': 'zasoby robactwa mogą zostać znalezione w kłębowisku much podczas starcia lub w rezultacie działania wydarzeń. Karty robactwa posiadają opis jak można użyć każdej. Robactwo może być także używane w wydarzeniu fabularnym gotowanie.'
	},
	'Victory': {
		'label': 'Zwycięstwo',
		'description': 'część wydarzenia fabularnego starcia, opisująca rezultaty po pokonaniu potwora. Dodaj tego potwora do części pokonane potwory w arkuszu osady. Jeśli potwór Nemezis został pokonany, zaktualizuj także sekcję potworów Nemezis.'
	},
	'Vital': {
		'label': 'Niezbędny',
		'description': 'specjalna zasada ekwipunku. Jeśli osada posiada jakikolwiek ekwipunek z tą zasadą, Ocalali nie mogą wyruszyć na łowy bez tego ekwipunku. Jeśli Ocalały trzymający niezbędny ekwipunek ginie przed starciem, inny Ocalały musi wziąć niezbędny ekwipunek (w razie konieczności odkłada wybrany ekwipunek, by zrobić miejsce w swojej siatce ekwipunku).'
	},
	'Waist': {
		'label': 'Talia',
		'description': 'miejsce trafienia Ocalałego. Obrażenia w talię po przekroczeniu poziomu ciężkich ran, powodują rzut w tabeli ciężkich urazów talii.'
	},
	'Weapon': {
		'label': 'Broń',
		'description': 'rodzaj karty ekwipunku. Broń w grze podstawowej obejmuje: topór, łuk, maczugę, sztylet, pięści i zęby, wielką broń, katar, tarczę, włócznię, miecz i bicz.'
	},
	'Weapon Mastery': {
		'label': 'Broń - mistrzostwo w posługiwaniu się',
		'description': 'osiągane, gdy Ocalały zdobył osiem lub więcej poziomów biegłości w posługiwaniu się bronią. Kiedy jakikolwiek Ocalały osiąga mistrzostwo, dodaj to mistrzostwo do osady jako innowację. Wszyscy Ocalali automatycznie otrzymują premię specjalizacji za ten typ broni, poza wszelkimi posiadanymi już biegłościami.'
	},
	'Weapon Proficiency': {
		'label': 'Broń - biegłość w posługiwaniu się',
		'description': 'atrybut Ocalałego wyszczególniony na arkuszu Ocalałego. Biegłość w posługiwaniu się bronią reprezentuje umiejętność posługiwania się Ocalałego danym typem broni. Może być uzyskiwana dla następujących typów broni: topór, łuk, maczuga, sztylet, pięści i zęby, wielka broń, katar, tarcza, włócznia, miecz, miecz zmierzchu oraz bicz. Po osiągnięciu pierwszego milowego kroku w łowiectwie Ocalali mogą zadeklarować typ broni w której będą zdobywać biegłość. Ocalały musi najpierw wybrać rodzaj broni, przed wyruszeniem na łowy (zapisz to we właściwym miejscu na arkuszu Ocalałego), a następnie zadać ranę potworowi co najmniej raz podczas starcia, z użyciem tego typu broni aby uzyskać poziom biegłości w posługiwaniu się tą bronią.'
	},
	'Weapon Specialization': {
		'label': 'Broń - specjalizacja',
		'description': 'osiągana kiedy Ocalały posiada trzy lub więcej poziomów biegłości w posługiwaniu się bronią. Ocalali mogą rozwinąć nowe umiejętności wzmacniające tę broń.'
	},
	'Whip': {
		'label': 'Bicz',
		'description': 'ekwipunek z tym słowem kluczowym jest bronią: bicz. Ocalali mogą zyskiwać poziomy biegłości w posługiwaniu się tą bronią.'
	},
	'Wound': {
		'label': 'Rana',
		'description': 'jeśli Ocalały zada ranę potworowi, usuń wierzchnią kartę z talii SI potwora i umieść ją na stosie ran. Jeśli talia SI jest pusta, potasuj odrzucone karty SI, aby najpierw utworzyć nową talię.'
	},
	'Wound (Reaction)': {
		'label': 'Rana (reakcja)',
		'description': 'Wymieniona na niektórych kartach miejsc trafienia potwora. W odpowiedzi na otrzymaną ranę, w określone miejsce trafienia, ten potwór wykonuje opisaną akcję.'
	},
	'Wound Attempt': {
		'label': 'Rana (próba zranienia)',
		'description': 'Tcałkowita siła trafienia Ocalałego. Dodaj rezultat rzutu zranienia (1k10) do siły broni którą był wykonywany atak, łącznie z każdym innym modyfikatorem siły. Jeśli całkowity rezultat próby zranienia wyrówna lub przekroczy wytrzymałość potwora, miejsce trafienia zostało zranione.'
	},
	'Wound Roll': {
		'label': 'Rana (rzut zranienia)',
		'description': 'reprezentuje zmienną zaciekłość trafień Ocalałego. Rzut 1k10 dodaje się do rezultatu próby zranienia. Wynik tego rzutu 1k10 (dodając modyfikatory szczęścia) określa, czy zadano ranę krytyczną w miejscu trafienia, posiadającym efekty rany krytycznej.'
	},
	'Zone of (X) / (X) Zone': {
		'label': 'Strefa () / ()',
		'description': 'wskazany obszar dla akcji i reakcji, na niektórych kartach SI potwora i miejsc trafienia.'
	},
}

module.exports = {
 texts,
}
