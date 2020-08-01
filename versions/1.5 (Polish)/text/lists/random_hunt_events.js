const random_hunt_events = {
  1: `1 |  Zniszczone latarnie
1 | Zniszczone latarnie
Ocalali słyszą chrupnięcia pod stopami. Wykonawca wydarzenia może obniżyć lampę by poświecić i przeprowadzić <b>badanie</b> lub zignorować te dźwięki i kontynuować  łowy.

[TO] Wybierz
[td] Wykonawca wydarzenia - Co robisz?
[c] Badaj
[d<]

Wykonawca wydarzenia, otrzymuje +1 odwagi i rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - badanie
[c] 1-5
[d] Potykasz się i poszarpana krawędź kaleczy Ci stopę. Wydarzenie to zadaje obrażenie twoim nogom, równe poziomowi potwora w wydarzeniu.
[c] 6-8
[d] Odnajdujesz pożyteczną rzecz. Otrzymujesz 1 podstawowy zasób <b>zniszczona latarnia</b>.
[c] 9+
[d] Ocalali odkrywają opuszczony już dawno temu latarniany kopiec. Widok spustoszeń napełnia lękiem. Wszyscy Ocalali ustawiają swój obłęd na 0. Po uspokojeniu, każdy z Ocalałych myszkując odnajduje 1 podstawowy zasób zniszczona latarnia. Dodaj go do magazynu osady.
[T]

[>d]
[c] Zignoruj
[dt] Rzuć jeszcze raz w liście wydarzeń na łowach nim przesuniecie
się na planszy wydarzeń na łowach.`,

  2: `2 | Ciało

[img] 2 # no-shadow

Ocalałych ogarnia nagły chłód, oddechy zamarzają w płucach. Szczękają zęby. Wszyscy Ocalali tracą przetrwanie równe poziomowi potwora. Pośrodku mroźnego obszaru znajduje się doskonale zachowane ciało.

[TA] Sprawdź
[td] Jaką innowację posiada osada?
[c] Kanibalizm
[d] Wykonawca wydarzenia otrzymuje 1 losowy podstawowy zasób.
[c] Groby
[d] Wykonawca  wydarzens prawdza ciało i otrzymuje +1 odwagi oraz +1 wiedzy.
[c] Memento Mori
[dt]  Wykonawca  wydarzenia nieco pojmuje, co stało się z ciałem. Otrzymuje 1 losową sztukę walki.
`,

  3: `3 |  Zrakowiałe gołębie
Ocalałych otacza skrzekliwe echo dziecięcego bełkotu. Dziwaczne ptaki o twarzach dzieci zaczynają krążyć im nad głowami. Porwani instynktownym przerażeniem Ocalali rzucają się do ucieczki! Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem  (lub Ocalali  w przypadku  remisów) zostaje Spóźnionym.

[i] Jeśli którykolwiek  Ocalały  posiada ekwipunek <i>hałaśliwy</i>, rzut modyfikuje się o -2.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybiera
[d<]

Każdy Spóźniony rzuca 1k10.

[i] Jeśli którykolwiek Ocalały ma bicz, trzaska nim, rozpędzając wiele ptaków. Każdy Spóźniony dodaje +4 do swojego rzutu.

[TA] 1k10
[td] Spóźniony
[c] 1-3
[d] Biegając i dziko wymachując, w panice odkrywasz, że jesteś sam. Czekające na to, zrakowiałe gołębie nurkują i bezlitośnie dziobią cię od tyłu, a ich szczęśliwe gruchanie napełnia ci głowę przerażeniem. Godzinę później reszta Ocalałych odnajduje cię szlochającego i zwiniętego w kłębek na ziemi. Jesteś cię <b>wewnętrznie martwy</b>: nie możesz otrzymywać przetrwania. Zapisz to upośledzenie.
[c] 4-6
[d] Zrakowiały gołąb zatrzasnął dziób na twoich plecach! Strząśnij go wydając 1 przetrwania. W możesz przeciwnym razie stajesz się <b>wewnętrznie martwy</b>: nie możesz otrzymywać przetrwania. Zapisz to upośledzenie.
[c] 7-8
[d] Uciekasz przed tymi straszliwymi stworami.
[c] 9+
[dt] Udało ci się uderzyć i strącić jedno z tych paskudnych stworzeń. Zdobywasz 1 losowy podstawowy zasób.
[>d]
[T]`,

  4: `4 | Głód
Ścieżka przed wami jest sucha i martwa. Możesz kontynuować lub poszukać drogi dookoła.

[TO] Wybór
[td] Co robisz?
[c] Kontynuuj, Ocalali zdobywają +1 odwagi #Kontynuuj
[d<]

Wasze żołądki burczą w ciemnościach, gdy brniecie do przodu. Ocalali gromadzą zapasy. Wykonawca wydarzenia rzuca 1k10 i dodaje +2 do rzutu za każdy jadalny ekwipunek lub zasób który posiada grupa.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-8
[d] Łowy zbierają swe żniwo. Potężne głodowe bóle nasilają się. Wszyscy Ocalali otrzymują żeton -1 zzybkości.
[c] 9-14
[d]  Udało wam się przetrwać straszliwy głód.
[c] 15+
[dt]  Przekąska ożywiła wszystkich. Każdy Ocalały otrzymuje +1 przetrwania.

[>d]
[c] Idź dookoła
[dt] Rzuć ponownie w liście wydarzeń na łowach zanim przesuniesz się na planszy.
`,

  5: `5 | Mięsiste pola
Idąc po podłożu z kamiennych twarzy, dochodzicie do pola mięsistych czyraków wielkości człowieka, porośniętych gęsto czarnymi włosami. Wijące się między nimi kręte ścieżki promienieją wilgotnym ciepłem. Każdy Ocalały przechodząc przez nie, staje sie ofiarą buhającego gorąca i traci 1 przetrwania. Wykonawca wydarzenia rzuca 1k10.

[i] Jeśli którykolwiek Ocalały ma sierp, pomaga w oczyszczaniu ścieżki, wycinając przejścia w gęstych, czarnych włosach. Dodaj +4 to twojego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d<]

Wykonawca wydarzenia ocierając się o gigantyczne wrzody zaraża się pożerającą ciało chorobą! Losowa kończyna która jest zarażona musi być natychmiast amputowana! 

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Otrzymujesz trwały ciężki uraz <b>odcięte ramię</b>.
[c] 6-10
[dt] Otrzymujesz trwały ciężki uraz <b>odcięta noga</b>.

[>d]
[c] 2-3
[d] Jeśli którykolwiek z Ocalałych jest <b>obłąkany</b>, wyobraża sobie, że mięsiste pole go atakuje! Wpada w histerię, młócąc na oślep wplątuje się w gęstwę włosów. Wydarzenie to zadaje obrażenia każdemu <b>obłąkanemu</b> Ocalałemu, równe poziomowi potwora, w losową część ciała.
[c] 4-7
[d] Jest gorąco i obrzydliwie, ale Ocalali przechodzą poprzez mięsiste pola bez żadnych komplikacji.
[c] 8-9
[d] Wykonawca wydarzenia najlepiej radzi sobie w trudnych chwilach wycinając część mięsistego ciała. Otrzymujesz 1 podstawowy zasób <b>skóra</b>.
[c] 10+
[d] Każdy z Ocalałych zbiera 1 podstawowy zasób <b>skóra</b> z mięsistych pól.
[T]
`,

  6: `6 | Bezimienny Posąg
Ocalali natknęli się na bezimienny posąg trzymający lśniącą latarnię. Ogrzewając się w jej ciepłym świetle, Ocalali odzyskują  siły. 

Każdy Ocalały zyskuje 1  przetrwania.

[TO] Sprawdź
[td] Czy osada posiada Rzeźbę?
[c] Tak #Rzeźba
[d<]

Ocalali  są  poruszeni  i doceniają subtelne rzemiosło artysty. Każdy rzuca 1k10. Zyskuje tyle przetrwania oraz +1 do wiedzy.

[TO] Sprawdź
[td] Czy wszyscy Ocalali są obłąkani?
[c] Tak #Wszyscy obłąkani
[d] Ocalali kontynuują łowy.
[c] Nie
[d<]

Ocalali mogą tutaj dłużej odpocząć.

[TO] Wybór
[td] Czy chcecie odpocząć?
[c] Tak #Odpoczynek
[d] Każdy Ocalały leczy wszystkie poziomy obrażeń i utracone punkty pancerza w jednym miejscu trafienia. W efekcie tracą jednak trop zdobyczy na łowach. Oddal potwora o 1 pole od Ocalałych na planszy łowów. Jeśli Ocalały uleczy tu więcej niż 5 utraconych punktów pancerza, wpatruje się w błyszczące światło zbyt długo i otrzymuje 1 losowe zaburzenie.
[c] Nie
[dt] Ocalali kontynuują łowy.

[>d]
[T]

[>d]
[c] Nie #
[d<]

[TO] Sprawdź
[td] Czy wszyscy Ocalali są obłąkani?
[c] Tak #Wszyscy obłąkani
[d] Ocalali kontynuują łowy.
[c] Nie #
[d<]

Ocalali mogą tutaj dłużej odpocząć.

[TO] Wybór
[td] Czy chcecie odpocząć?
[c] Tak #Odpoczynek
[d] Każdy Ocalały leczy wszystkie poziomy obrażeń i utracone punkty pancerza w jednym miejscu trafienia. W efekcie tracą jednak trop zdobyczy na łowach. Oddal potwora o 1 pole od Ocalałych na planszy łowów. Jeśli Ocalały uleczy tu więcej niż 5 utraconych punktów pancerza, wpatruje się w błyszczące światło zbyt długo i otrzymuje 1 losowe zaburzenie.
[c] Nie #
[dt] Ocalali kontynuują łowy.

[>d]
[T]

[>d]
[T]
`,

  7: `7 | Głodna ziemia
Ziemia nagle pęka, a rozwarte kamienne usta usiłują pożreć wykonawcę wydarzenia! Wykonawca wydarzenia rzuca 1k10.

[i] Jeśli inny Ocalały ma bicz, rzuca go jak linę do wykonawcy wydarzenia. Dodaje on +4 do swojego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Z przytłumionym krzykiem zapadasz się w ziemi. Udaje ci się chwycić niestabilnego gzymsu nad rozwartą paszczą. Tracisz całe przetrwanie, rozpaczliwie wspinając się na bezpieczną wysokość. Jeśli go nie masz, spadasz. Kości chrupią między kamiennymi zębami. Zostałeś w całości pożarty. Nie żyjesz.
[c] 2-5
[d] Wspiąłeś się, ale twoja noga wpada w potworną paszczę. To wydarzenia zadaje 2 obrażenia twoim nogom.
[c] 6-9
[d] Udaje ci się wyskoczyć w samą porę!
[c] 10+
[d] Blurp! Zabulgotało! Ziemia wymiotuje lśniącymi kawałkami złomu. Zdobywasz 1 podstawowy zasób <b>zniszona latarnia</b>.
[T]
`,

  8: `8 | Zawodzący dym

[img] 8
Nieprzerwany jęk ściga Ocalałych. W końcu wchodzą w obszar spowity gęstą mgłą, a zawodzenie osiąga coraz wyższe tonacje.

Każdy <b>nie-głuchy</b> Ocalały rzuca 1k10.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Wszyscy Ocalali są <b>głusi</b>
[d] Ocalali idą dalej, nie zważając na kakofonię: zakończ to wydarzenie.
[c] Spóźniony wybiera
[d<]

Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje spóźnionym. 

Każdy Spóźniony rzuca 1k10.

[i] Jeśli któryś z Ocalałych ma <b>hałasliwy</b> ekwipunek, Spóźniony dodaje +2 do swojego rzutu.

[TO] Sprawdź
[td] Czy któryś z Ocalałych ma <b>hałasliwy</b> ekwipunek i osada zna <b>bębny</b>?
[c] Tak #Bębny
[d] Ocalały przeciwdziała zawodzeniu melodią znaną ze swojego domu. Nie rzucacie kośćmi, a każdy Ocalały otrzymuje +2 do obłędu oraz +2 do przetrwania.
[c] Nie #
[d<]

[TA] 1k10
[td] Spóźniony
[c] 1-3
[d] Mgła wokół ciebie staje się czarna i wypełniona kształtami udręczonych twarzy. Doprowadza cię to do szaleństwa. Weź 1 losowe zaburzenie.
[c] 4-6
[d] Mgła się rozrasta i zaczyna wyć. Zatykasz palcami uszy, ale bez efektu. To wydarzenie zadaje Twojemu umysłowi obrażenia równe poziomowi potwora.
[c] 7-9
[d] Wciskasz kciuki do uszu i rzucasz się do ucieczki, pozostawiając za sobą zawodzący dym.
[c] 10+
[dt] Naśladując zatrważający dym, spokojnie zaczynasz wyć razem z nim. Otrzymujesz +2 obłędu.

[>d]
[T]

[>d]
[T]
`,

  9: `9 | Złote światło
Złote światło oślepia Ocalałych, zatrzymując ich w drodze. Świeci ono z jednego punktu. Wykonawca wydarzenia jest zmuszony to <b>zbadać</b>.
Zyskuje +1 odwagi i rzuca 1k10. 

[TO] 1k10
[td] Wykonawca wydarzenia - badanie
[c] Wykonawca wydarzenia jest <b>ślepy</b>
[d] Idzie w złym kierunku i otrzymuje +3 obłędu. Rzuć ponownie na liście wydarzeń na łowach i nie badaj światła.
[c] 1-3
[d] Światło jest przytłaczające. Twój kruchy umysł nie może zrozumieć jego niemego przekazu. Otrzymujesz 1 losowe zaburzenie.
[c] 4-8
[d] Zanurzasz się w światło, skąpany w ciepłym, okropnym uczuciu. Nie znajdujesz niczego eksponując się na działanie promieni. Wydarzenie to zadaje obrażenia równe poziomowi potwora, trafiając w losowe miejsce.
[c] 9+
[d]  Coś w w tym świetle ciebie porusza, a twoja determinacja zwiększa się. Otrzymujesz +1 do przetrwania.
[T]
`,

  10: `10 | Żniwiarz

[img] 10 # no-shadow # width:45%
<b>Tego wydarzenia nie można w żaden sposób ominąć lub powtórzyć rzutu.</b>
Ziemia trzęsie się i pęka pod Ocalałymi. Kolosalny robak wyskakuje z pęknięcia, jego skóra jest mozaiką wrzeszczących twarzy. Widok tego jest zatrważający.
Wszyscy Ocalali, otrzymują 1 losowe zaburzenie i muszą wydać  1 przetrwania lub zostaną  pożarci.

[TO] Sprawdź
[td] Czy jakiś z Ocalałych ma <b>hałasliwy</b> ekwipunek?
[c] Tak #Ocalały z hałasliwym ekwipunkiem
[d<]

Hałas przyciąga Żniwiarza, który natychmiast pożera Ocalałego. Nic nie może go uratować.

Stworzenie jest tak przerażające, że umysły Ocalałych usiłują wymazać to doświadczenie z pamięci. Nie osiągają żadnych korzyści z zasady śmierci.
[>d]
[c] Nie #
[d<]

Stworzenie jest tak przerażające, że umysły Ocalałych usiłują wymazać to doświadczenie z pamięci. Nie osiągają żadnych korzyści z zasady śmierci.

[>d]
[~T]
`,

  11: `11 |  Odchody potwora
Ocalali znajdują nieco odchodów potworów. Wyglądają na pozostawione przez tropioną zdobycz. Wykonawca wydarzenia wybiera <b>badanie</b> lub <b>spożycie</b> odchodów (wybierz tylko jedno z nich).

[TO] Wybór
[td] Wykonawca wydarzenia - Co robisz?
[c] Badanie #Badanie
[d<]

Zdobywasz +1 wiedzy i rzucasz 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - Badanie
[c] 1-3
[d]  Odkrywasz, jak obrzydliwe jest bawienie się kałem. Tracisz 1 przetrwania i rzucasz ponownie w liście wydarzeń na łowach, przed poruszeniem na planszy łowów..
[c] 4-6
[d] Odchody mówią, że podążasz właściwym tropem. Otrzymujesz +1 do przetrwania.
[c] 7+
[d] Znasz doskonale takie odchody. Możesz pominąć następne pole na łowach. Jeśli ten ruch rozpoczyna Starcie, Ocalali zastawiają <b>zasadzkę</b> na zwierzynę.
[T]

[>d]
[c] Spożycie #Spożycie
[d<]

Zdobywasz +1 odwagi i rzucasz 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - Spożycie
[c] 1-3
[d<]

Wygląda, że nie byłeś jedynym, który miał taki pomysł! Próbujesz wypluwać je kaszląc, ale twoje usta są pełne wijących się pasożytów! Przebijają się w górę przez jamę nosową do mózgu. Od teraz zawsze czujesz lekkie zawroty Otrzymujesz na stałe -1 do uniku.
Ponaddto jesli masz zaburzenie <b>donkiszoteria</b>, pasożyty delektują się unikalną aktywnością neuronową twojego mózgu. Karmią się łapczywie, wydalając odchody napędzające dodatkowo twoje szaleństwo. Otrzymujesz +10 obłędu i zaburzenie <b>nieśmiertelność</b>. Twoje zaburzenie <b>donkiszoteria</b> nie może być uleczone w żaden sposób.

[>d]
[c] 4-6
[d] To odrażające. Otrzymujesz przydomek „gówniarz”. Wszyscy w osadzie muszą od tej chwili zwracać się do ciebie w ten sposób.
[c] 7+
[d] W kale było coś naprawdę specjalnego. Otrzymujesz żetony: +1 do szybkości oraz +1 do siły.
[T]

[>d]
[T]
`,

  12: `12 | Przyspieszenie przeznaczenia

[img] 12 # no-shadow

Ocalałych ogarnęło wzmożone przeczucie oczekiwania na coś ważnego. Ich cel jest na wyciągnięcie ręki. 

Wykonawca wydarzenia otrzymuje +1 odwagi! Ocalali mogą pominąć następne pole łowów. Jeśli ten ruch uruchomi Starcie, Ocalali zastawiają <b>zasadzkę</b>.
`,

  13: `13 | Przeciążenie
Wykonawca wydarzenia pada na kolana, łkając traci panowanie nad sobą. Tego jest po prostu zbyt wiele. Traci 1k10 przetrwania  i otrzymuje  1 losowe zaburzenie.

[TO] Wybór
[td] Jaką doktrynę społeczną posiada osada?
[c] Akceptacja ciemności
[d<]

Wykonawcę wydarzenia ogarnia rozpacz. Rzuć 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Mizerność twojego istnienia jest większa niż kiedykolwiek mogłeś sobie wyobrazić. Dobierasz zaburzenia tak długo aż będziesz posiadał 3. Tracisz całe przetrwanie.
[c] 6+
[dt] Sięgasz dna, by z pozostałości zbudować nowe fundamenty. Chcesz więcej! Odkrywasz pierwotny gniew, otaczający centrum i niezmąconego spokoju. Otrzymujesz +1 do wiedzy i zaburzenie <b>furia</b>.
[>d]
[c] Praca zbiorowa
[d<]

Powoli podnosisz się na nogi, obiecując, że nigdy nie porzucisz nadziei. Rzuć 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d]  Powstajesz, a łzy w ciszy spływają po twej twarzy. Świadomość istnienia osady pozwala ci mierzyć się z ciemnością. Otrzymujesz +1 do odwagi i +1k10 do przetrwania.
[c] 6+
[dt] Na krótko pozwoliłeś świadomości osiągnąć dno nędzy istnienia. Dzięki temu doświadczeniu powracasz do pełni sił. Dzielisz się doświadczeniami. Jeśli którykolwiek z Ocalałych powróci do osady w tym roku, dodaj jednorazowo +2 do liczby dostępnych działań w osadzie.

[>d]
[c] Brak doktryny społecznej
[dt] Ocalali kontynuują łowy.
`,

  14: `14 | Przypadkowe spotkanie

[img] 14

Ocalali napotykają urzekającą, bosą bezdomną z pokrytymi sadzą stopami.

[TO] Sprawdź
[td] Czy już wcześniej wylosowałeś to wydarzenie lub wszyscy Ocalali są <b>obłąkani</b>?
[c] Tak #
[d] Odwraca się i znika w ciemności.Rzuć ponownie na liście wydarzeń na łowach, zanim poruszysz się na planszy łowów.
[c] Nie #
[d<]

Pokrzykując donośnie na Ocalałych, obecność kobiety napełnia wszystkich nadzieją. Wszyscy Ocalali otrzymują +1 do odwagi oraz +1 do wiedzy.

[TO] Sprawdź
[td] Czy osada zna Chałupy?
[c] Tak #Chałupa
[d] Bezdomna strzela palcami i starzeje się na waszych oczach! Chłód przechodzi przez Ocalałych. Wasze ciała i pancerze natychmiastowo zrastają się z powrotem. Uzdrów wszystkie poziomy ran i stracone punkty pancerza. Następnie chwyta ona losowo wybranego Ocalałego i szepce mu tajemnice zbliżających się łowów. Otrzymuje on żeton +1 do precyzji.
[c] Nie #
[dt] Kobieta odwraca się i znika w ciemnościach.
[>d]
[T]
`,

  15: `15 | Pułapka

[img] 15 # no-shadow

Wykonawca wydarzenia wdeptuje w straszliwą pułapkę! Rzuć 1k10.
[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-2
[d] Ze straszliwym trzaskiem stalowe ciężki szczęki przecinają Twoją stopę. Otrzymujesz ciężki uraz <b>odcięta noga</b>.
[c] 3-6
[d] Okalecznie nóg. Usuń cały pancerz w miejscu trafienia: nogi. Następnie to wydarzenie zadaje 1 obrażenie nogom.
[c] 7-9
[d] Pułapka okazuje się stara i słaba. To wydarzenie zadaje 1 obrażenie nogom.
[c] 10+
[d] Wykonawca wydarzenia kopie w pułapkę, strasząc wszystkich! Uszkadza ją, a w zaciśniętych szczękach pułapki odnajduje coś. Otrzymujesz 1 losowo wybrany podstawowy zasób.
[T]
`,

  16: `16 | Nocna groza
Wasz sen jest nękany przez koszmary. Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały - Czy wynik jest wyższy niż obłęd?
[c] Tak
[d] Uczysz się czegoś o budzącej się grozie i otrzymujesz +1 do wiedzy.
[c] Nie
[d] Otrzymujesz 1 losowe zaburzenie.
[c] Jeśli którykolwiek z Ocalałych jest zbawcą lub zna sztukę walki  <b>szósty zmysł</b>,  znikają w tym  śnie.  Wynurzają  się z ciemności kilka godzin później. Każdy z nich otrzymuje +4
doświadczenia łowieckiego i losowy podstawowy zasób.
`,

  17: `17 | Twarzą w twarz
Pośród morza kamiennych twarzy, jedna przyciąga spojrzenie wykonawcy wydarzenia.Coś zmusza go do podjęcia <b>badania</b>. Otrzymuje +1 do odwagi i rzuca 1k10.
[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Twarz wygląda identycznie jak Twoja. Wydaj 1k5 przetrwania lub zredukuj swoją wiedzę do 0.
[c] 2-7
[d] Twarz przypomina ci kogoś bliskiego. Twoje serce wypełnia ból samotności. Jeśli twoje przetrwanie jest większe niż twój obłęd, to wydarzenie zadaje twojemu umysłowi obrażenia równe poziomowi potwora.
[c] 8+
[dt] To twoja twarz,jednakże starsza i bardziej doświadczona. Otrzymujesz +1 do przetrwania i +1 do wiedzy.
`,

  18: `18 | Martwy chwast

[img] 18 # no-shadow # width:35%

Znajdujesz dziwną roślinę wyrastającą z oczu kamiennejtwarzy. Wykonawca wydarzenia próbuje ją wyrwać. Rzuć 1k10.

[i] Jeśli jakikolwiek Ocalały ma sierp, dodaj +4 do swojego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-7
[d]  Próbujesz ze wszystkich sił, ale nie możesz wyciągnąć głęboko ukorzenionego chwastu.
[c] 8+
[dt] Łatwo wyciągasz chwast! Ma ogromną moc regeneracyjną. Każdy z ocalałych wciera go w skórę i trwale usuwa 1 ciężki uraz. Następnie chwast rozpada się w pył w twoich rękach.
`,

  19: `19 | Opary Ciemności

[img] 19 # width:25%

Ocalałych spowijają opary ciemności zaciemniającej światła  ich latarni.  Oddzielają  się od siebie i gubią  w mroku.

[TO] Sprawdź
[td] Czy jakiś Ocalały posiada sztukę walki <b>przywódca</b>?
[c] Tak #Przywódca
[d] Rzucasz się odważnie w gęstą ciemność i zbierasz wszystkich. Zakończ to wydarzenie.
[c] Nie #
[d<]

Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym i rzuca 1k10.

[TA] 1k10
[td] Spóźniony
[c] 1-2
[d] Biegnąc potykasz się i wpadajsz na kości starożytnego potwora. Niszczysz przy tym część swojego ekwipunku. Wybierz i zarchiwizuj 1 ekwipunek ze swojego siatki ekwipunku.
[c] 3-5
[d] Atakuje cię coś niewidzialnego. To wydarzenie zadaje 1 obrażenie umysłowi i 1 obrażenie w losowe miejsce trafienia.
[c] 6-8
[d] Uderzasz w nos gigantycznej kamiennej twarzy! To wydarzenie zadaje ci 1 obrażenie w głowę.
[c] 9+
[dt] Nie wiesz jak to się stało, ale wypadasz z ciemności, z pełnymi rękoma. Otrzymujesz 1 losowy podstawowy zasób.

[>d]
[T]
`,

  20: `20 | Sucha ziemia
Maszerujących Ocalałych spowija gorące powietrze, a ziemia pod ich stopami pęka. Nieznośne gorąco wysysa z Ocalałych siły. Każdy traci 1 przetrwania. Jeśli ma na sobie futro lub ciężki ekwipunek, zamiast tego traci 1k5 przetrwania.

[TO] Sprawdź
[td] Czy jakis Ocalały posiada kilof?
[c] Tak #Kilof
[d] Ocalali natrafiają w popekanej ziemi na ineresującą żyłę żelaza. Otrzymujesz 1 dziwny zasób <b>żelazo</b>.
[c] Nie #Brak kilofa
[dt] Ocalali kontynuują łowy.
`,

  21: `21 |  Rysunki
Kryjąc się w jaskini, Ocalali odnajduja dziwne rysunki dekorujące ściany. Odkrywają, że zawierają one wiadomość.

[TO] Sprawdź
[td] Czy jakiś Ocalały ma 3+ wiedzy albo osada odkryła piktogramy?
[c] Tak #Odszyfruj

[d<]

[i] Jeśli zna <b>piktogramy</b>, każdy Ocalały może rzucić 1k10 (nawet bez wymaganej wiedzy) i dodać +4 do wyrzuconego przez siebie wyniku.

[TA] 1k10
[td] Każdy ocalały z wiedzą na 3+
[c] 1-3
[d] Twój nos zaczyna krwawić. To wydarzenie zadaje 1 obrażenie umysłowi, równe poziomowi potwora.
[c] 4-7
[d] Prawdziwe znaczenie umyka Ci. Otrzymujesz +1 do obłędu.
[c] 8+
[dt] Rysunki uczą cię nowego sposobu walki z potworami! Otrzymujesz +2 przetrwania i losową sztukę walki.
[>d]

[c] Nie
[d] Ocalali kontunuują łowy.
[T]
`,

  22: `22 | Kwasowy deszcz
Ciemność nad wami nagle rozbłyska burzą kwasowego deszu. Cuchnie okropnie, pali ciało i tworzy syczące kałuże w rozwartych ustach kamiennych twarzy. To wydarzenie zadaje wszystkim Ocalałym obrażenia, równe poziomowi potwora w każde miejsce trafienia, gdy miotają się by znaleźć schronienie.

[TO] Sprawdź
[td] Czy osada zna Rzeźbę?
[c] Tak #Rzeźba
[d<]

Ocalali w milczeniu oglądają deszcz erodujący kamienne twarze, usuwający z nich rysy. Zastanawiają się, kto lub co naprawia zniszczone twarze po takim zdarzeniu. Ocalali wymieniają markotne uśmiechy. Każdy otrzymuje przetrwanie równe poziomowi potwora.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Burza powoli mija.
[c] 6+
[dt] Kwasowa burza przemieszcza się ku domowi. Dodaj wydarzenie <b>Kwasowa burza</b> na osi czasu w przyszłym roku.

[>d]
[c] Nie #Brak Rzeźby
[d<]

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Burza powoli mija.
[c] 6+
[dt] Kwasowa burza przemieszcza się ku domowi. Dodaj wydarzenie <b>Kwasowa burza</b> na osi czasu w przyszłym roku.

[>d]
[T]
`,

  23: `23 | Czysta woda
Ocalali podchodzą do samotnej fontanny w kształcie lwiego łba. Strumień krystalicznie czystej wody wypływa z jego paszczy. Każdy ocalały spożywa wodę, zyskując +1 do przetrwania i +1 odwagi. Dowolna liczba ocalałych może zanurzyć głowę w wodzie i rzucić 1k10.

[TA] 1k10
[td] Każdy ocalały
[c] 1-2
[d] Głowa błyskawicznie staje się mokra, twoje włosy zmieniają się w białe. Zyskujesz 1 losowe zaburzenie.
[c] 3-5
[d]  Twoje włosy są mokre. Gratulacje.
[c] 6-8
[d] Woda jest orzeźwiająca. Zyskujesz +1 wiedzy lub usuń dowolne wybrane przez siebie zaburzenie.
[c] 9+
[d] Woda jest szokująco zimna! Przepływa nad tobą jak fala przyboju i pozostawia uczucie orzeźwienia. Ustaw swój obłęd na 0 i usuń wszystkie zaburzenia.
[T]
`,

  24: `24 | Pokarm w ustach innych

[img] 24 # no-shadow

Ocalali mijają kamienną twarz, wydającą się mieć coś w ustach. Wykonawca  wydarzenia  przeprowadza  <b>badanie</b>. Otrzymuje +1 odwagi i rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - Badaj
[c] 1-2
[d] Wrzeszczysz z bólu i cofasz rękę pokazując krwawe rany. Czyżby kamienna twarz po prostu ugryzła? To wydarzenie zadaje obrażenie umysłowi, równe poziomowi potwora oraz obrażenie rąk, równe poziomowi potwora.
[c] 3-5
[d] Nic tu nie ma. To było tylko złudzenie.
[c] 6-8
[d] To tylko skały, ekwipunek czego się odłamek spodziewałeś? Otrzymujesz 1 początkowy ekwipunek <b>odłamek podłoża</b>.
[c] 9+
[d] Wyciągasz przeżutą masę. Otrzymujesz 1 losowy podstawowy zasób oraz +2 do obłędu.
[T]
`,

  25: `25 |  Tytani w ciemności

[img] 25 # no-shadow # width:50%

Przeszywający uszy ryk obwieścił nadejście prawdziwie tytanicznej bestii. To wydarzenie, zadaje obrażenie umysłom wszystkim  <b>niegłuchych</b>  Ocalałych,  równe  poziomowi potwora. Ocalali kryją się na ziemi, leżąc tak bardzo płasko, jak to tylko możliwe, mając nadzieję, że są zbyt mali, by zostać zjedzonymi.

Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub którykolwiek Ocalali w Ocalały przypadku ma remisów) zostaje Spóźnionym.

[i] Jeśli którykolwiek Ocalały ma ekwipunek <b>hałaśliwy</b>,  otrzymuje -2 do tego rzutu.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[d<]

Każdy Spóźniony rzuca 1k10.

[TA] 1k10
[td] Spóźniony
[c] 1
[d<]

Zostałeś porwany z ziemi i pożarty w całości.

[TO] Sprawdź
[td] Czy osada zna Przetrwanie najsilniejszych?
[c] Tak #Przetrwanie najsilniejszych
[d] skręcasz się i wyrywasz z ust lądując na ziemi z głuchym łomotem. Otrzymujesz ciężki uraz złamana ręka i złamana noga, ale nie umierasz.
[c] Nie #
[dt] Nie żyjesz.

[>d]
[c] 2-4
[d] Coś chwyta cię w wielką paszczę i chwilę przeżuwa cię. To wydarzenie zadaje po 1 obrażeniu, w wylosowane 1k5 miejsc trafień.
[c] 5-6
[d] Zaciskające się szczęki tylko cię uszczypnęły! To wydarzenie zadaje obrażenie równe poziomowi potwora, w losowe miejsce trafienia.
[c] 7-9
[d] Rozpłaszczasz się na ziemi najbardziej jak potrafisz, co pozwala uniknąć straszliwych tarapatów.
[c] 10+
[dt] Nigdy nie przestaniesz uciekać od tego, co zobaczyłeś. Zdobywasz na stałe +1 do ruchu.
[>d]
[T]
`,

  26: `26 | Dół
Ziemia pod stopami wykonawcy wydarzenia zapada się i spada on do dołu. Wykonawca wydarzenia rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] Jeśli inny Ocalały ma bicz #Bicz
[d] Zdąży ci go rzucić na czas, nie rzucaj  kością.
[c] Wykonawca  wydarzenia zna sztukę walki <b>sprężysty</b> #Sprężysty 
[d] Zwinnie chwyta się kamiennej półki i podciąga w górę; Otrzymuje żeton +1 do szybkości i nie rzuca kością.
[c] 1
[d] Lądujesz z obrzydliwym chrupnięciem, okaleczając nogi. Otrzymujesz dwukrotnie ciężki uraz <b>złamanej nogi</b>.
[c] 2-3
[d] Łamiesz nogę przy upadku. Otrzymujesz ciężki uraz <b>złamana noga</b>.
[c] 4-6
[d] Lądujesz w dole z głośnym łomotem. To wydarzenie zadaje 2 obrażenia, w losowe miejsce trafienia. Zarchiwizuj każdy <b>kruchy>/b> ekwipunek ze swojej siatki ekwipunku.
[c] 7-9
[d] Lądujesz na dnie z cichym łomotem. To wydarzenie zadaje 1 obrażenie, w losowe miejsce trafienia.
[c] 10+
[dt] Udaje ci się chwycić krawędzi dołu i uciec bez szwanku.
`,

  27: `27 | Złodziej męskości

[img] 27 # no-shadow

Wyczerpani Ocalali odpoczywają. Podczas niespokojnego snu, wślizgują się niepostrzeżenie małe insekty.

Wybierz losowo 1 Ocalałego mężczyznę i rzuć 1k10.

[TO] Wybór
[td] Wybierz losowo 1 Ocalałego mężczyznę
[c] Ocalały wybrany
[d<]

Rzuć 1k10.

[TO] 1k10
[td] Ocalały mężczyzna
[c] Wybrany Ocalały zna sztukę walki <b>Walczący w szoku</b> #Walczący w szoku
[d] Chrapiąc bezwiednie rozgniata robaka; nie rzuca kością. Budzi się zdezorientowany z losowym zasobem <b>robactwa</b> w dłoniach.
[c] 1-5
[d] Po przebudzeniu stwierdzasz, że Twoje genitalia zostały skradzione. W ich miejscu masz tylko gładką skórę. Otrzymujesz ciężki uraz zniszczone genitalia.
[c] 6+
[dt] Budzisz się przerażony, widząc zbliżające się groźnie szczypce. Twoja obrona jest szybka. Bez zastanowienia, walczysz z owadem czołgającym się po spodniach. To wydarzenie zadaje tobie 1 obrażenie w talię.

[>d]
[c] Brak męskich Ocalałych
[d] nic się nie dzieje.
[T]
`,

  28: `28 | Troloptak

Na drodze Ocalałych stanął nastroszony, brzydki ptak. Jego paciorkowate, mokre oczy mrugają wyczekująco. Wybucha on niesamowitym, ludzkim chichotem. Ocalali mogą zarchiwizować 1 <b>jadalny</b> przedmiot lub ekwipunek, oferując go ptakowi.

[i] Jeśli którykolwiek z Ocalałych jest obłąkany, musi nakarmić śpiewoptaka, jeśli ma czym.

[TO] Wybór
[td] Co robisz?
[c] Nakarm ptaka #Karmi
[d] Karmisz ptaka który podskakuje straszliwie gdacząc.
[c] Zignoruj ptaka #Zignoruj
[d<]

Troloptak podąża za Ocalałymi podczas łowów, nieustannie kpiąc z nich swoim chichotem. Rzuć 1k10.

[i] Jeśli którykolwiek z ocalałych ma zaburzenie <b>koprolalia</b>, klnie na ptaka energicznie czyniąc wulgarne gesty. Wyraźnie robi na ptaku wrażenie. Dodaj +3 do swojego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Troloptak robi straszną awanturę, ostrzegając potwora. Wszyscy Ocalali otrzymują +1 do wiedzy. Na początku starcia, potwór zastawia <b>zasadzkę</b> na Ocalałych..
[c] 6+
[dt] Ptak kpi i odwraca uwagę potwora od skradających się Ocalałych. Wszyscy Ocalali zyskują +1 obłędu. Na początku starcia, Ocalali zastawiają <b>zasadzkę</b> na potwora.
[>d]
[T]
`,

  29: `29 | Mroczny kowal

[img] 29 # no-shadow

Ścieżki Ocalałych krzyżują się z wysokim, nienaturalnie chudym mężczyzną w zakapturzonym płaszczu. Tam, gdzie jego stopy uderzają o ziemię, iskry oświetlają jego przejście. Każdy z Ocalałych o odwadze 3+ może dać mu jeden element ze swojej siatki ekwipunku i rzucić kością.

[i] Jeśli ma zaburzenie honorowy, dodaje  3 do swojego rzutu.

[TA] 1k10
[td] Dowolny Ocalały z odwagą 3+
[c] 1-2
[d] Istota podnosi przedmiot do swoich ust i zjada go. Poczym odchodzi. Zarchiwizuj kartę ekwipunku.
[c] 3-6
[d] Istota odrzuca ekwipunek i wgapia się w ciebie swoim pojedynczym, wielkim okiem. To wydarzenie zadaje Twojemu umysłowi 1k10 obrażeń.
[c] 7-8
[d] Istota kłapnęła szczękami i rozgryza fragmenty ekwipunku.W zamian dostajesz lśniącą tarczę. Otrzymujesz rzadki ekwipunek <b>stalowa tarcza</b>.
[c] 9+
[dt] Istota kłapnęła szczękami i rozgryza fragmenty ekwipunku. W zamian dostajesz lśniący miecz. Otrzymujesz rzadki ekwipunek <b>stalowy  miecz</b>.
`,

  30: `30 | Zgniłe twarze
Kamienne twarze zapadają się lekko pod nogami Ocalałych. Są wzdęte i śmierdzą okropnie. Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały
[c] 1
[d] Twoja stopa utknęła i szybko zaczyna zanurzać się w ziemi. Po szarpaninie udaje ci się ją uwolnić. Jeśli miałeś pancerz na nogach, zaginął w błocie. Wydaj 3 przetrwania albo zarchiwizuj ten ekipunek.
[c] 2-5
[d] Ugrzązłeś! Walczysz by się wyrwać! Rzuć ponownie w tej tabeli lub wydaj 1 przetrwania byc uciec.
[c] 6-9
[d] Uciekasz bez żadnego przykrego incydentu
[c] 10+
[dt] Znalazłeś coś ciężkiego. Wyciągasz mozolnie obiekt ze zgnilizny! Otrzymujesz losowo 1 podstawowy zasób.
`,

  31: `31 | Dziwna ścieżka
Ocalali stają na początku ścieżki. Małe latarnie migoczą, znacząc jej krawędzie.

Wykonawca wydarzenia decyduje, czy Ocalali podążą ścieżką, czy też nie.
[i] Jeśli wykonawca wydarzenia jest dotknięty <b>obłędem</b>, muszą przez nią przejść. 

[TO] Wybór
[td] Wykonawca wydarzenia - podążacie ścieżką?
[c] Tak #Podążacie
[d<]

Wykonawca wydarzenia otrzymuje +1 wiedzy, następnie rzuca 1k10 dodając swoją wiedzę do wyniku.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Gigantyczny palec spada z góry, zgniatając losowego Ocalałego. To wydarzenie zadaje mu 2 obrażenia w każde miejsce trafienia.
[c] 2-4
[d] Losowy Ocalały z histerycznym płaczem odbiega, porzucając marsz ścieżką. Wraca wiele godzin później, upiornie blady i bez pamięci co się stało. Traci 1k10 przetrwania.
[c] 5-7
[d] Ścieżka skręca i ginie w mroku. To wydarzenie zadaje wszystkim Ocalałym 1 uszkodzenia umysłu, a wykonawca wydarzenia rzuca ponownie na tej liście wydarzeń, dodając +2 do tego rzutu.
[c] 8-9
[d] Ścieżka prowadzi Ocalałych do olbrzymiej kamiennej twarzy z latarniami w oczach. Wewnątrz jej otwartych ust jest dar. Każdy Ocalały otrzymuje 1 losowy podstawowy zasób.
[c] 10+
[d<]

Ścieżka prowadzi do bestii, na którą polujecie! Ocalali zastawiają <b>zasadzkę</b> na potwora.
[i] Jeśli którykolwiek z Ocalałych posiada zaburzenie <b>Honorowy</b>, zdaje sobie sprawę z szaleństwa w jakie popadł i może usunąć to zaburzenie. Jeśli którykolwiek Ocalały pozostanie <b>honorowy</b>, ogłasza swoją obecność potworowi i to potwór urządza <b>zasadzkę</b> na Ocalałych.

[>d]
[T]

[>d]
[c] Nie #Nie podążacie
[dt] Rzuć jeszcze raz na liście wydarzeń na łowach, przed ruchem na planszy łowów.
`,

  32: `32 | Nagłe szaleństwo
Głowę wykonawcy wydarzenia przeszywa dewastująca zmysły kakofonia. Rzuć 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] Wynik jest niższy lub równy aktualnemu poziomowi obłędu Wykonawcy #
[d<]

Wykonaca wydarzenia wariuje rzucając się na swoich towarzyszy. To wydarzenie zadaje każdemu innemu Ocalałemu 1 trafienie w losowe miejsce trafienia, zanim wykonawca wydarzenia wydarzenia odzyskuje kontrolę nad sobą.

[TO] Sprawdź
[td] Czy Wykonaca wydarzenia posiada sztukę walki <b>Oszalały</b>?
[c] Tak #Oszalały
[d] Pozostają mu spostrzeżenia po tych mękach. Zyskuje +10 do obłędu i +2 do wiedzy.
[c] Nie #
[d] Nie wyciągnął żadnej nauki z tego doświadczenia.
[T]

[>d]
[c] Wynik jest wyższy niż aktualny poziomo obłędu Wykonawcy wydarzenia #
[d<]

Odzyskuje kontrolę nad sobą.

[TO] Sprawdź
[td] Czy Wykonaca wydarzenia posiada sztukę walki <b>Oszalały</b>?
[c] Tak #Oszalały
[d] Pozostają mu spostrzeżenia po tych mękach. Zyskuje +10 do obłędu i +2 do wiedzy.
[c] Nie #
[d] Nie wyciągnął żadnej nauki z tego doświadczenia.
[T]

[>d]
[T]
`,

  33: `33 |  To szepcze Twoje imię

[img] 33

Gdy wykonawca wydarzenia przechodzi ponad wystającym nosem z ziemi, kamienne usta zaczynają się poruszać! 

[TO] Sprawdź
[td] Czy Wykonawca wydarzenia ma imię?
[c] Tak #
[d<]

Usta zaczynają uwodzicielsko szeptać imię Ocalałego.

[TO] Sprawdź
[td] Czy Wykonawca jest obłąkany?
[c] Tak #Obłąkany
[d<]

Dziko i brutalnie zaczyna całować twarz. Reszta Ocalałych jest zniesmaczona i oburzona. To wydarzenie zadaje umysłom reszty Ocalałych, po 1 obrażeniu, zanim odciągną szaleńca od twarzy i ruszą  dalej.

[TO] Sprawdź
[td] Czy któryś z Ocalałych ma zaburzenie <b>Głód szpiku</b>?
[c] Tak #Głód szpiku
[d] Twarz szepce sekretne przesłanie o celu jego życia. Dodaj wydarzenie <b>morderstwo</b> do osi czasu w przyszłym roku.
[c] Nie #
[d] Ocalali kontunuują łowy.
[T]

[>d]
[c] Nie #Nie jest obłąkany
[d<]

Wykonawca zyskuje +1 do wiedzy, czując, że czegoś się nauczył.

[TO] Sprawdź
[td] Czy któryś z Ocalałych ma zaburzenie <b>Głód szpiku</b>?
[c] Tak #Głód szpiku
[d] Twarz szepce sekretne przesłanie o celu jego życia. Dodaj wydarzenie <b>morderstwo</b> do osi czasu w przyszłym roku.
[c] Nie #
[d] Ocalali kontunuują łowy.
[T]

[>d]
[T]

[>d]
[c] Nie #
[dt] Usta przestają się poruszać i nic więcej sie nie dzieje.
`,

  34: `34 |  Nieszczęśliwe okaleczenie
Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisu) zostaje Spóźnionym. 

[i] Jeśli którykolwiek  Ocalony (lub  Ocalali)  ma zaburzenie  <b>niepokój</b>, automatycznie staje się Spóźnionym. Nie rzuca wtedy kością.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[d<]

Spóźnionego zaczyna gnębić silne zwątpienie. Nim się ocknął - zagubił się. Nie mając dość energii i woli by się w porę złapać, ześlizgnął się po stromym wzgórzu kamiennych twarzy. Niezgrabnie lądując z nieprzyjemnym chrzęstem, otrzymuje ciężki uraz:  <b>złamana noga</b>. W trosce o siebie, zdaje sobie sprawę jak okropne jest jego życie. Zyskuje +1 wiedzy.

[TA] Check
[td] Czy Spóźniony ma zaburzenie <b>Napady obżarstwa</b>?
[c] Tak #Napady obżarstwa
[d] Zmywa łzy i wyciąga rękę po pobliskie stworzonko, instynktownie wpychając je sobie do ust jako pocieszenie. Dobierz 1 losowy zasób robactwa i go <b>spożyj</b>.
[c] Nie #Brak napadów obżarstwa
[d] Nic się nie dzieje.
[T]

[>d]
[T]
`,

  35: `35 |  Zepsuty latarniany piec
Ocalali, natknęli się na roztrzaskane ruiny małej osady. Popielate zwłoki pokrywają ruiny, rozsypując się przy najlżejszym dotyku. Wygasły latarniany piec stoi nietkniętyw centrum osady. 

Wykonawca  wydarzenia  rzuca 1k10  i dodaje  swoją wiedzę.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-4
[d<]

[TO] Sprawdź
[td] Czy osada zna <b>Pieść o bohaterach</b>?
[c] Tak #Pieść o bohaterach
[d<]

Grupa wybiera Ocalałego bohatera, aby zbadał ruiny latarnianego kopca. Otrzymuje +1 do odwagi i rzuca kością 1k10.

[TO] 1k10
[td] Wybrany Ocalały
[c] 1-5
[d] Próbujesz wejść do zrujnowanego latarnianego kopca ale pokonuje Cię strach, padasz na kolana i wymiotujesz wszędzie. Kiedy wstaniesz, czujesz, że jesteś fizycznie niezdolny by brnąć dalej. Otrzymujesz zaburzenie <b>Apatia</b>.
[c] 6+
[dt] Jesteś odpychany przez zrujnowany latarniany kopiec, ale dotarłeś wystarczająco blisko, aby złapać parę owadów biegających w środku. Będąc tak blisko czujesz przyjemne odprężenie. Wybierz 2 zasoby robactwa według własnego uznania.

[>d]
[c] Nie #
[d<]

Ocalali kontunuują łowy.

[>d]
[T]

[>d]
[c] 5+
[d<]

Zdobywacie innowację <b>Latarniany piec</b>:

<button class="hunt_event_action_button hoverable" id="lantern_oven" onClick="placeReminder('lantern_oven')">Dodaj innowację</button>

[i] Jeśli osada posiada już tę innowację, wykonawca wydarzenia zabiera z pozostałości podstawowy zasób <b>zniszczona latarnia</b>.

[TO] Sprawdź
[td] Czy osada zna <b>Pieść o bohaterach</b>?
[c] Tak #Pieść o bohaterach
[d<]

Grupa wybiera Ocalałego bohatera, aby zbadał ruiny latarnianego kopca. Otrzymuje +1 do odwagi i rzuca kością 1k10.

[TO] 1k10
[td] Wybrany Ocalały
[c] 1-5
[d] Próbujesz wejść do zrujnowanego latarnianego kopca ale pokonuje Cię strach, padasz na kolana i wymiotujesz wszędzie. Kiedy wstaniesz, czujesz, że jesteś fizycznie niezdolny by brnąć dalej. Otrzymujesz zaburzenie <b>Apatia</b>.
[c] 6+
[dt] Jesteś odpychany przez zrujnowany latarniany kopiec, ale dotarłeś wystarczająco blisko, aby złapać parę owadów biegających w środku. Będąc tak blisko czujesz przyjemne odprężenie. Wybierz 2 zasoby robactwa według własnego uznania.

[>d]
[c] Nie #
[d<]

Ocalali kontunuują łowy.

[>d]
[T]

[>d]
[T]
`,

  36: `36 | Na szlaku
Ocalali ruszają naprzód czując, że tropiona zdobycz jest już blisko. Pomiń następne pole łowów.Jeśli ten ruch rozpoczyna  starcie, Ocalali organizują <b>zasadzkę</b> na zdobycz. Jeśli którykolwiek z Ocalałych ma <b>hałaśliwy</b> ekwipunek, Oca-
lali nie organizują zasadzki. Rozpocznij Starcie normalnie.
`,

  37: `37 | Zagubieni
Ocalali zagubili się beznadziejnie w nieprzeniknionej ciemności. Cofnij Ocalałych o 2 pola na planszy łowów.
`,

  38: `38 |  Gigantylopa

Ogromna Antylopa stanęła okrakiem na granicy horyzontu, jej stare ciało pokryte jest guzami i bliznami. Gdy jej mleczne oczy dostrzegają Ocalałych – odskakuje. Nagłe pragnienie pcha Ocalałych w pościg. Wykonawca wydarzenia rzuca 1k10  i dodaje  swój ruch  do wyniku  rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] [Kliknij] jeśli jakiś Ocalały posiada sztuke walki <b>Strateg</b> #Strateg
[d<]
Ocalali zamiast ścigać Gigantylopę mogą ją zagnać w miejsce bez mozliwości ucieczki obok gigantycznej kamiennej twarzy.

Jeśli to robią, natychmiast zakończ łowy.

Rozpocznij Starcie z Wrzeszczącą Antylopą 2 poziomu, używając jej zasad rozstawienia.
Dodatkowo umieść <b>Gigantyczną kamienną twarz</b> przylegającą do potwora i daj potworowi kartę cechy Rzeźnika: <b>Berserk</b>. 

Jeśli Ocalali przeżyją, zdobywają normalne nagrody za starcie oraz dodatkowe 3 zasoby Wrzeszczącej Antylopy.

<button class="hunt_event_action_button hoverable" id="gregalope" onClick="placeReminder('gregalope')">Rozpocznij starcie!</button>

[>d]
[c] 1-6
[d] Ocalali szybko pozostają w tyle za majestatyczną bestią. Odsuń ich o jedno pole od zdobyczy na planszy łowów.
[c] 7-14
[d] Gigantylopa jest zdecydowanie za szybka. Zniknęła nim zdążyłeś się zorientować co sie dzieje.
[c] 15-16
[d] Ocalali tracą z oczu Gigantylopę, ale odkrywają ukrytą ścieżkę. Będziesz mógł ponowić najbliższy rzut na liście wydarzeń.
[c] 17+
[dt] Zanim Gigantylopa uskoczyła poza pole widzenia, skłoniła swe potężne rogi. To zdarzenie wpływa nawykonawcę wydarzenia. Otrzymuje na stałe +1 do ruchu.
`,

  39: `39 | Gęsta mgła
Gęsta mgła oplata Ocalałych, zasłaniając światła ich latarń. Rzuć 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] Wynik parzysty #Przysty
[d] Ocalali brną we właściwym kierunku. Jeśli Starcie zacznie się się na następnym polu na planszy łowów, potwór zaczaja się w <b>zasadzce</b> na Ocalałych.
[c] Wynik nieparzysty #Nieparzysty
[dt] Jeśli wynik jest nieparzysty, Ocalali kręcą się w kółko. Rzuć ponownie w tabeli wydarzeń na łowach zanim poruszysz się dalej na planszy łowów.
`,

  40: `40 | Sen
Wykonawca wydarzenia śni o nadchodzących łowach. Stają przed wielką bestią, ale ta ich powala.

[TO] Sprawdź
[td] Czy Wykonawca wydarzenia ma odwagę 3+ albo którykolwiek z Ocalałych jest zbawcą?
[c] Tak #
[d<]

Wykonawca zdarzenia jest ośmielony przez sen i otrzymuje żeton +1 do uników.

[TO] Sprawdź
[td] Czt którykolwiek z Ocalałych ma <b>Miecz zmierzchu</b>?
[c] Tak #Miecz zmierzchu
[d] Śni o masowej rzezi. Dodaj zdarzenie <b>morderstwo</b> na osi czasu za 1k5 lat od teraz.
[c] Nie #Brak Miecza zmierzchu
[d] Nic się nie dzieje.
[T]

[>d]
[c] Nie #
[d<]

Sen jest tylko zmorą. To wydarzenie zadaje 1 obrażenie umysłowi Wykonawcy.

[TO] Sprawdź
[td] Czt którykolwiek z Ocalałych ma <b>Miecz zmierzchu</b>?
[c] Tak #Miecz zmierzchu
[d] Śni o masowej rzezi. Dodaj zdarzenie <b>morderstwo</b> na osi czasu za 1k5 lat od teraz.
[c] Nie #Brak Miecza zmierzchu
[d] Nic się nie dzieje.
[T]
[>d]
[T]
`,

  41: `41 | Koszmar
Wykonawca wydarzenia śni o nadchodzących łowach. Wielka bestia znika podczas walki i potajemnie śledzi ich powrót do osady. Bezradnie patrzą, jak pożera wszystko, co znają i kochają.

Wykonawca wydarzenia otrzymuje +1k10 obłędu i żeton -1 do zwodów.

[TO] Sprawdź
[td] Czy osada posiada zbawiciela?
[c] Tak #
[d<]

Zbawiciel, objawia się we śnie i broni ich domu. Wykonawca wydarzenia otrzymuje +1k5 przetrwania.
[TO] Sprawdź
[td] Czy jakiś z Ocalałych w osadzie lub grupie łowieckiej posiada <b>Miecz zmierzchu</b>?
[c] Tak #Miecz zmierzchu
[d] Ocalali budzą się i kontynuuja łowy.
[c] Nie #Brak Miecza zmierzchu
[dt] Wykonawca wydarzenia widzi w śnie szaloną wersję siebie władającego poteżnym ostrzem i radośnie mordującego bestię. Budzi się, odnajdując przy sobie <b>Miecz zmierzchu</b> leżący tuż przy ciele. Ocalały instynktownie rozpoznaje moc klątwy nałożonej na broń i obietnicę mocy. Wykonawca wydarzenia zyskuje rzadki ekwipunek <b>Miecz zmierzchu</b> Może również wybrać <b>Miecz zmierzchu</b> jako rodzaj biegłości w broni i zdobyć +1 do umiejętności biegłości w posługiwaniu się tą bronią.

[>d]
[c] Nie #
[d<]

[TO] Sprawdź
[td] Czy jakiś z Ocalałych w osadzie lub grupie łowieckiej posiada <b>Miecz zmierzchu</b>?
[c] Tak #Miecz zmierzchu
[d] Ocalali budzą się i kontynuuja łowy.
[c] Nie #Brak Miecza zmierzchu
[dt] Wykonawca wydarzenia widzi w śnie szaloną wersję siebie władającego poteżnym ostrzem i radośnie mordującego bestię. Budzi się, odnajdując przy sobie <b>Miecz zmierzchu</b> leżący tuż przy ciele. Ocalały instynktownie rozpoznaje moc klątwy nałożonej na broń i obietnicę mocy. Wykonawca wydarzenia zyskuje rzadki ekwipunek <b>Miecz zmierzchu</b> Może również wybrać <b>Miecz zmierzchu</b> jako rodzaj biegłości w broni i zdobyć +1 do umiejętności biegłości w posługiwaniu się tą bronią.

[>d]
[T]
`,

  42: `42 | Chirurg
Skrzypiący powóz zbliża się do Ocalałych. Bogato zdobiony, w kolorze czerwieni i złota, pokryty z każdej strony reliefami przedstawiającymi ponure twarze. Ogromne, drżące oko zdobi przód, a otwierające się wielkie usta okazują się być drzwiami. Z małego okna skinęła sękata dłoń.
Jeden z Ocalałych z odwagą 3+ może wejść do powozu.

[TO] Wybór
[td] Ocalałych z odwagą 3+
[c] Wejdź
[d] Usuwasz jedno uposledzenie lub ciężki uraz i otrzymujesz 1 losowe zaburzenie.
[c] Nie wchodź
[d] Ocalali kontynuują łowy.
[T]
`,

  43: `43 |  Świeża ofiara
Dywan pełzających owadów wskazuje Ocalałym, niedawno zabitego potwora. Owady oczyszczające truchło próbują bronić swojego obiadu, ale Ocalali walczą z nimi, by odebrać nagrodę.
Każdy Ocalały rzuca 2k10 i dodaje swoje doświadczenie łowieckie. Ocalały z największą liczbą punktów (remisujący ponawiają rzut) zabija najwięcej robactwa i wygrywa od nich zgniłą nagrodę. Zyskuje 1 losowy podstawowy zasób oraz 1 losowy zasób robactwa.
`,

  44: `44 | Oportuniści
Podczas badania tropów zdobyczy, Ocalali zdają sobie sprawę, że polują nie na jednego, ale dwa potwory. Dwa zestawy tropów rozdzielają się, pozostawiając Wykonawcy wydarzenia dylemat którymi śladami podążyć.

[TO] Wybór
[td] Wykonawca wydarzenia wybiera
[c] Większe ślady
[d] Kontunuujcie łowy normalnie.
[c] Mniejsze ślady
[dt] Natychmiast rozpocznij starcie. Na początku starcia potwór otrzymuje 5 obrażeń. Jeśli Ocalali zwyciężą, otrzymają połowę podstawowych zasobów i połowę zasobów potwora (zaokrąglając w górę) w ramach zwyczajowej nagrody po walce.
`,

  45: `45 | Dolina Strzępów
Przes Ocalałymi rozpostarła się dolina pełna ostrych, białych kamieni, wyglądająca jak zębata paszcza. Kiedy Ocalalali rozpoczeli wspinaczkę przez poszarpane iglice, odkrywają, że nawet najłagodniejsze draśnięcie krwawi obficie. To wydarzenie zadaje każdemu Ocalałemu 1 uszkodzenie korpusu. 
Jeśli żaden Ocalały nie ma opatrunków do opatrzenia obrażeń, wszyscy otrzymują również 2 żetony krwawienia!

[i] Jeśli którykolwiek z Ocalałych by kilof, może spróbować namówić pozostałych Ocalałych by pozwolili mu <b>badać</b>. Jeśli zostaną przekonani, rzuć 1k10.

[TA] 1k10
[td] Ocalały z kilofem - Badanie
[c] 1
[d] Białe kamienie to zęby, a Ocalali są w gigantycznych ustach! Każdy musi wydać 1 przetrwania by wydostać się z ust. Ktokolwiek pozostanie w środku, zostaje przeżuty na miezgę i ginie. Osada nie otrzymuje zysków wynikających z <b>Kanibalizmu</b>.
[c] 2-5
[d] Biały kamień jest niezwykle twardy. Kiedy Ocalali w końcu przez niego się przebijają, hordy robaków wybiegają z dziur. Otrzymujesz 1 zasób robactwa <b>syczący karaluch</b>. Kopanie było czasochłonne. Rzuć ponownie na liście wydarzeń na łowach, zanim przesuniecie się na planszy łowów.
[c] 6+
[dt] Ocalali znajdują pęknięcie i je zasób poszerzają. Wewnątrz jest skrytka! Znajdujesz 1 dziwny zasób <b>Żelazo</b> i 1 zasób  robactwa <b>Syczący karaluch</b>. Kopanie było czasochłonne. Rzuć ponownie na liście wydarzeń na łowach, zanim przesuniecie się na planszy łowów.
`,

  46: `46 | Rzeka
Ocalali dotarli do brzegu rzeki krwi. To wydarzenie swoim widokiem, zadaje umysłom <b>nieobłąkanych</b> Ocalałych 1 obrażenie. Ocalali muszą kolejno przeprowadzić <b>badanie</b>, aby podjąć trop zdobyczy. Każdy rzuca 1k10.
Jeśli żaden z Ocalałych nie znajdzie ponownie tropu potwora, rzuć ponownie na liście wydarzeń na łowach zanim poruszycie się na planszy łowów.

[TA] 1k10
[td] Każdy Ocalały - Badanie
[c] 1-2
[d] Tracisz równowagę i wpadasz do rzeki krwi! Natychmiast wielki pasożyt wpycha się w usta, w głąb gardła, rozrywając wnętrzności po drodze.  Otrzymujesz ciężki uraz złamane żebro. Masz nadzieję, że to wszystko co pasożyt ci zrobił.
[c] 3-5
[d] Twoja zdobycz wypróżniała się do krwi. To wydarzenie zadaje Ci 1 obrażenie, w losowe miejsce trafienia, z powodu wchłonięcia zbyt dużej ilości skażonej fekaliami krwi.
[c] 6-8
[d<]

Orientujesz się, że rzeka krwi jest wypełniona rozdętymi zwłokami nierozpoznawalnych potworów. Coś Cię popycha by jakieś wyłowić! Otrzymujesz 1 losowy podstawowy zasób. 
[i]Jeśli nosisz <b>ciężkie</b> wyposażenie, zanurzając się połykasz krew i miękką, rozdętą część potwora. Zmniejsz swoje przetrwanie do 1.

[>d]
[c] 9+
[dt] Z powodzeniem odnajdujesz trop potwora.
`,

  47: `47 | Biesiadne drzewa
Niewielki zagajnik drzew wyrasta na martwej równinie. Kuszące czerwone owoce zwisają z gałęzi. Każdy z Ocalałych musi wydać 1 przetrwania, aby oprzeć się pokusie <b>spożycia</b> owocu.

<b>Obłąkani</b> Ocalali i Ocalali z zaburzeniami <b>Napady obżarstwa</b>, muszą <b>spożyć</b>.

[i] Jeśli którykolwiek Ocalały ma sierp, wyrąbuje przejście poprzez drzewa, siekając je! Owoce natychmiast gniją. Zakończ to wydarzenie.

[TA] 1k10
[td] Każdy spożywający Ocalały
[c] 1-5
[d] Uzależniające owoce atakują twoje wnętrzności. Tracisz 1 przetrwania, a następnie rzuć ponownie kością. Jeśli nie masz przetrwania, to wydarzenie zadaje 2 obrażenia, w losowe miejsce trafienia.
[c] 6+
[dt] Usatysfakcjonowany bekasz głośno i odchodzisz.
`,

  48: `48 | Zakład śmierci

[img] 48 # width:25%

Ocalałych budzi podróżny, owinięty szczelnie płaszczem.Podróżnik zsuwa kaptur i odsłania zdeformowaną twarzz dwoma podbródkami zakrzywiającymi się od siebie,z których każdy ma własne wyszczerzone usta.

Niczym we śnie, wszyscy Ocalali rozumieją, że ta postać jest znana jako Hazardzista i jeśli tylko zaczną mówić to umrą. Do zakończenia tego wydarzenia tylko wykonawca tego wydarzenia może mówić. Jeśli którykolwiek inny gracz przemówi, Ocalałych ogarnia chłód. Umierają. Ocalali muszą zagrać w grę Hazardzisty lub zostaną uwięzieni w pułapce na zawsze. Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały
[c] 1
[d] Hazardzista wyciąga rękę i zgarnia kości do gry. Gdy znikają w fałdzie jego płaszcza, czujesz, jak powietrze opuszcza twoje płuca, a nie jesteś w stanie zaczerpnąć kolejnego oddechu. Nie żyjesz.
[c] 2-9
[d] Nie przegrywasz, ani nie wygrywasz. Możesz zagrać kolejny raz jeśli zechcesz. Ponów swój rzut i sprawdź rezultat.
[c] 10+
[dt] Wygrałeś. Otrzymujesz na stałe +1 do szczęścia.
`,

  49: `49 | Ropne pola
Krajobraz jest usiany dużymi, obrzękniętymi ropiejącymi kopcami. Najmniejsze muśnięcie grozi ich eksplozją. Ocalali mogą <b>ostrożnie przechodzić</b> przez wzgórza lub </b>przebiec przez nie.

[TO] Wybór
[td] Co robisz?
[c] Ostrożnie przechodzisz
[d] Ostrożne przejście: Przemkneliście się bez incydentów, ale wasz ruch jest spowolniony. Rzuć ponownie na liście wydarzeń na łowach nim przesuniecie się na planszy łowów.
[c] Przebiegasz
[dt] Przebiegnięcie: Każdy z ocalałych rzuca 1k10 i dodaje wartość swojego uniku do wyniku. Przy 7 lub mniej, detonuje jeden z ropnych kopców! To wydarzenie zadaje mu 2 obrażenia w losowe miejsca trafienia i sprawia, że <b>cuchnie</b> do końca tego roku.
`,

  50: `50 | Szubienica
Prymitywna żelazna klatka kołysze się na gałęzi potężnego drzewa. Gdy Ocalali zbliżają się, uwięziony mężczyzna krzyczy do nich z klatki, błagając o uwolnienie.

[TO] Wybór
[td] Co robisz?
[c] Ignorujesz go
[d] Ocalali mijają uwięzionego, a to wydarzenie zadaje 1 obrażenie ich umysłom, gdy słyszą płacz i błagania więźnia. 
[c] Uwolnij go
[d<]

Wykonawca wydarzenia rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Ocalali otwierają klatkę, ale wszystko, co znajdują w środku to szkielet. To wydarzenie zadaje umysłom Ocalałych 2 obrażenia.
[c] 2-7
[d] Więzień jest wdzięczny i podąża z Ocalałymi do postoju i odpoczynku. Kiedy się obudzą, każdy z Ocalałych traci 1 losowy zasób (jeśli go posiadał).
[c] 8+
[dt] Więzień jest wdzięczny i podąża do domu Ocalałych po starciu. Osada zyskuje +1 populacji.
[>d]
[T]
`,

  51: `51 | Uchodźcy
Ocalali spotykają grupę uciekających osadników.

[TO] Sprawdź
[td] Czy osada zna <b>Sympozjum</b> i  <b>Język</b>?
[c] Tak #Sympozjum i Język
[d<]

Ocalali podejmują próbę prymitywnej komunikacji. Mogą zaoferować zasób lub ekwipunek by pomóc nieszczęśliwym uchodźcom.

[TO] Wybór
[td] Podzielicie się zasobami lub ekwipunkiem?
[c] Tak #Podziel się
[d<]

Zarchiwizujecie ofertę. Uchodźcy gorączkowo dzielą się swoją żałosną opowieścią. Wiele niezrozumiałych kwestii umyka podczas tłumaczenia. Relacjonują agresywną inwazję potwora który zniszczył ich dom. Opowieść przygotowuje Ocalałych na przyszłe zdarzenia. Na początku starcia, odkryjesz 5 wierzchnich kart z talii SI i odłożysz z powrotem w wybranej kolejności.
[i] Jeśli jakiś Ocalały zna sztukę walki <b>Przywódca</b> jeden z osadników jest tak zaintrygowany jego charyzmą, że dołącza się do waszej osady. Otrzymujecie +1 populacji.

[>d]
[c] Nie #Nie dziel się
[dt] Ocalali kontunuują łowy.
[>d]
[c] Nie #
[d] Ocalali kontunuują łowy.
[T]
`,

  52: `52 | Rozszalałe muchy
Maleńkie, uporczywe owady kłębią się wokół Ocalałych. Wlatują w uszy i nozdrza. Brzęczenie owadów dźwięczy szaleńczo w głowie, narastając coraz głośniej. 
Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały
[c] 1-2
[d] Nurkujesz w pobliskie bagno by zmyć obrzydliwe owady. To działa, ale teraz jesteś ciągle rozpraszany przez malutkie truchła, które od czasu do czasu strząsasz. Otrzymujesz żeton -1 do zwodów.
[c] 3-7
[d] Brzęczenie znika w jednej chwili, a muchy odlatują. Ich zniknięcie sprawia, że czujesz się dziwnie przygnębiony. Otrzymujesz +1 do obłędu.
[c] 8+
[d<]

Ich jajeczka przechodzą błyskawiczny rozwój, a rozszalałe muchy niemalże eksplodują z twoich ust!
Doświadczenie jest makabryczne, ale sprawia, że nabierasz energii i ożywasz! Otrzymujesz traumę  umysłu <b>furia</b>. Jeśli masz zaburzenie <b>furiat</b> lub znasz sztukę walki <b>berserk</b>, zrodzenie obrzydliwego nowego życia, rozpala twój gniew. Ponownie otrzymujesz traumę umysłu <b>furia</b>.

[>d]
[T]
`,

  53: `53 | Zamaskowany sprzedawca
Ocalali spotykają podróżującego zamaskowanego sprzedawcę. Nachalnie przekonuje, że ma niezwykłe towary w swojej ofercie.
Potasuj jedną kopię karty ekwipunku „maska” z lokacji osady „wytwórca masek”, i wylosuj jedną. Sprzedawca oferuje wam tę maskę. Wykonawca wydarzenia rzuca 1k10 by określić cenę za jaką uzyska maskę.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-3
[d] Sprzedawca w milczeniu wskazuje ciebie. Instynktownie wręczasz mu opłatę w zamian za maskę. Zarchiwizuj 1 wybrany ekwipunek ze swojej siatki ekwipunku i wydaj wszystkie punkty przetrwania.
[c] 4-7
[d] Sprzedawca powoli gestykuluje w celu złożenia oferty. Zarchiwizuj 1 wybrany przez ciebie ekwipunek ze swojej siatki ekwipunku.
[c] 8+
[dt] Przekazując tobie maskę usta sprzedawcy wypowiadają Twoje imię. Następnie znika. Nadaj swojemu Ocalałemu nowe imię (musi być inne) i daj +1 przetrwania za nadanie imienia Ocalałemu.
`,

  54: `54 | Burza kości
Potężne wiatry pędzą przez krainę, zbierając w stosy kamienie i szczątki szkieletów. Ocalali stają wspólnie przy krańcu burzy. Mogą odważyć się na <b>wkroczenie w burzę</b> albo na <b>przeczekanie</b>.

[TO] Wybór
[td] Co robisz?
[c] Wkroczenie w burzę
[d] Wszyscy Ocaleni otrzymują +1 odwagi jednakże to wydarzenie zadaje 1 obrażenie w losowo wybrane miejsca trafienia. Zarchiwizuj każdy <b>kruchy</b> ekwipunek.
[c] Przeczekanie
[dt] Rzuć dwukrotnie na liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.
`,

  55: `55 | Błotna lawina
Błyskawiczna, błotnista lawina porywa Ocalałych. Każdy Ocalały rzuca 1k10.
[i] Jeśli którykolwiek Ocalałyma bicz, używa go na filarze w kształcie kości i podciąga się w bezpieczne miejsce. Nie rzuca kością.

[TA] 1k10
[td] Każdy Ocalały
[c] 1-2
[d] Zostałeś gwałtownie porwany i toniesz w błocie. To wydarzenie zadaje tobie 2 obrażenia w losowe miejsce trafienia. Zarchiwizuj cały <b>kruchy</b> oraz <b>rozpuszczalny</b> ekwipunek  w swojej siatce ekwipunku. Rzuć ponownie w tej tabeli.
[c] 3-7
[d] Udaje Ci się wydostać, lecz zostałeś poważnie poturbowany. To wydarzenie zadaje 2 obrażenia twojemu korpusowi. Zarchiwizuj cały <b>kruchy</b> oraz <b>rozpuszczalny</b> ekwipunek, w swojej siatce ekwipunku.
[c] 8-9
[d] Wspiąłeś się na wyżej połozone tereny. Jesteś pokryty skorupą błota, ale wyszedłeś z tego bez większego szwanku.
[c] 10+
[dt] Pamiętasz to uczucie wciągania cię w głębię, zalewające usta błoto, siłą wpychające się do gardła i nic więcej. Po przejściu błotnej lawiny pozostali Ocalali znajdują ciebie bez urazów. Otrzymujesz +1 do obłędu.
`,

  56: `56 |  Martwy potwór
Ocalali znajdują rozkładające się zwłoki potwora. Jest zbyt zgniły by otrzymać jakiekolwiek zasoby.

[TO] Sprawdź
[td] Czy jakiś Ocalały ma 3+ wiedzy?
[c] Tak #3+ wiedzy
[d<]

Ocalali wymazują się się rozlaną krwią martwego potwora. Smród pomoże im podkraść się bliżej do zdobyczy. Kiedy rozpoczyna się starcie, Ocalali przygotowują <b>zasadzkę</b> na potwora.
[i] Jeśli którykolwiek z Ocalałych ma zaburzenie <b>wrażliwość</b>, odmawia pomazania się. Nie przygotowujecie <b>zasadzki</b> na potwora.

[>d]
[c] Nie #
[dt] Ocalali przygotowują ucztę z gnijącego trupa. Natychmiast tracą kontrolę nad swoimi wnętrznościami. Wraz z zawartośćią żoładka każdy traci 1 przetrwania i nie <b>spożywać</b> do końca tego roku.
`,

  57: `57 | Śmiech Gorma
Rytmiczne zawodzenie śmiechu Gorma dociera do Ocalałych, napełniając ich serca strachem. Gaworzenie podąża za Ocalałymi, dręcząc ich aż do zdobyczy.

Umieść żeton na każdym polu planszy łowów między Ocalałymi, a ich zdobyczą. Kiedy Ocalali przemieszczają się na pole z żetonem, usuń go, następnie to wydarzenie zadaje 1 obrażenie umysłu każdemu <b>nie-głuchemu</b> Ocalałemu.

<button class="hunt_event_action_button hoverable" id="gorms_laughter" onClick="placeReminder('gorms_laughter')">Umieść przypomnienie</button>
`,

  58: `58 |  Zapach na wietrze
Silny wiatr przynosi zapachy odległych miejsc i przedmiotów.
Wykonawca wydarzenia rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Potwór wyczuwa twój zapach. Przesuwa się o jedno pole bliżej. Jeśli ten ruch rozpoczyna starcie, potwór atakuje Ocalałych z <b>zasadzki</b>.
[c] 6+
[dt] Ocalali wyczuli nieprzyjemną woń tropionej zdobyczy. Ocalali mogą pominąć kolejne pole na planszy łowów. Jeśli ten ruch rozpocznie starcie, Ocalali organizują <b>zasadzkę</b> na potwora.
`,

  59: `59 | Pozostałości bitwy
Ocalali natykają się na pozostałości po straszliwej bitwie pomiędzy tropioną zdobyczą, a nieznanym wrogiem. Wykonawca wydarzenia może spróbować <b>badania</b>.

[TO] Wybór
[td] Wykonawca wydarzenia - Co robisz?
[c] Badanie
[d<]

Wykonawca wydarzenia zyskuje +1 odwagi i rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - Badanie
[c] 1-2
[d<]
Potwór wynurza się z ciemności, wykorzystując rozproszenie Ocalałych. 

Potwór zaczaja się w <b>zasadzce</b> na Ocalałych.

Podczas rozstawienia starcia, umieść wykonawcę wydarzenia dokładnie na wprost przed potworem.

<button class="hunt_event_action_button hoverable" id="signs_of_battle" onClick="placeReminder('signs_of_battle')">Rozpocznij starcie!</button>

[>d]
[c] 3-7
[d<]

Szczątki są ludzkie. Ocalali są zrozpaczeni i rozwścieczeni. To wydarzenie zadaje każdemu 1 obrażenie umysłu.
[i] Jeśli osada zna <b>Groby</b>, grzebią zmarłych, a każdy Ocalały otrzymuje +1 do przetrwania. 
[i]Jeśli osada zna <b>kanibalizm</b>, otrzymujesz 1 losowy podstawowy zasób.

[>d]
[c] 8+
[d] Odnalezione szczątki ofiary są potworem pokonanym przez tropioną przez was zdobycz. Otrzymujesz 1 losowy podstawowy zasób.
[T]

[>d]
[c] Zignoruj
[dt] Rzuć ponownie na liście wydarzeń na łowach zanim poruszycie się na planszy łowów.
`,

  60: `60 |  Pożar
Ogromna ściana ognia zatrzymuje Ocalałych spopielając ziemię. Zniszczyła to, co czekało na Ocalałych pozostawiając chaos. Zarchiwizuj wszystkie karty wydarzeń na łowach z kolejnych 2 pól planszy łowów. Umieść na tych polach dwie podstawowe karty wydarzeń na łowach.
`,

  61: `61 | Mroźna błyskawica
Nadciąga burza. Błyskawice w kolorze głębokiej purpury błyskają nad głowami. Na wpół zmarznięte lodowe sople uderzają w Ocalałych niczym postrzępione, błyszczące kolce. 
Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[dt] Sopel grzmotnął obok Spóźnionego, eksplodując chmarą ostrych jak brzytwa kryształów. To wydarzenie zadaje 1k5 obrażeń w 2 losowe miejsca trafienia. Zarchiwizuj każdy <b>kruchy</b> ekwipunek ze swojej siatki ekwipunku.
`,

  62: `62 |  Miejsce między głazami
Uwagę Ocalałych zwraca ciemne pęknięcie w niekończącym się morzu kamiennych twarzy.

[TO] Sprawdź
[td] Czy jakiś Ocalały posoada kilof?
[c] Tak #Kilof
[d] Ocalały uderza kilofem w ziemię, powiększając pęknięcie do coraz większej dziury. Odważnie sięgając do jej wnętrza, wyciąga poczerniałą, poskręcaną bryłę. Otrzymujesz 1 dziwny zasób <b>żelaza</b>.
[c] Nie #
[d<]

Każdy ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[dt] Spóźniony, schylony nad pęknięciem nie może przestać się w nie wpatrywać. Kiedy inni Ocalali odciągają go, bełkocze niespójnie. Cokolwiek widział, zmienia go to na zawsze. Otrzymuje 1 losowe zaburzenie. Jeśli wszyscy Ocalali są Spóźnieni, nikt ich nigdy nie oderwie od tego miejsca i wszyscy są zgubieni. Giną.

[>d]
[T]
`,

  63: `63 |  Stopy

[img] 63 # width:35%

Ocalali widzą przed sobą, jak kamienne twarze zastępowane są przez wyrastające z ziemi kamienne stopy. Ocalali chodzą stykając się podeszwa w podeszwę ze stopami.

[TO] Sprawdź
[td] Czy wszyscy Ocalali są <b>obłąkani</b>?
[c] Tak #Wszyscy obłakani
[d<]

[TO] Sprawdź
[td] Czy osada zna <b>Przetrwanie najsilniejszych</b>?
[c] Tak #Przetrwanie najsilniejszych
[d] Spadają ze spodu świata. Ocalali gryzą mocno stopy. Ich zęby zgrzytają o kamień, odmawiając puszczenia. Stopy natychmiast rozpadają się odsłaniając zwykłe kamienne twarze  pod  spodem. Ustaw obłęd wszystkim Ocalałym na 0. Każdy  z Ocalałych  otrzymuje  ciężki  uraz głowy  <b>zdruzgotana szczęka</b>. Nie rzucaj na żadne dodatkowe wydarzenia na łowach spowodowane przez wydarzenie <b>Stopy</b>.
[c] Nie #
[dt] Spadają ze spodu świata. Ocalali są martwi.

[>d]
[c] Nie #Ktoś nie jest obłąkany
[dt] Jeśli jakiś Ocalały jest <b>obłąkany</b>, jest przekonany, że dotarł do spodu świata. Czepia się ziemi przerażony upadkiem. To zdarzenie spowalania Ocalałych odwracając ich uwagę. Rzuć w tabeli wydarzeń na łowach, raz za każdego <b>obłąkanego</b> Ocalałego zanim poruszycie się na planszy łowów. Jeśli w którymkolwiek z tych rzutów wypadą <b>Stopy</b>, zignoruj go i powtórz rzut.
`,

  64: `64 | Kamienna fontanna
Dwie złożone kamienne ręce wynurzają się z ziemi. Dłonie trzymają czystą, zimną wodę, która spływa przez kamienne z pozornie nieskończonego zbiornika. Każdy Ocalały może <b>spożyć</b> wodę z fontanny. Jeśli to zrobi, zyskuje +1 odwagi i rzuca 1k10.

Jeśli nikt nie spożywa, rzuć ponownie na liście wydarzeń na łowach zanim poruszysz sie na planszy łowów.

[TA] 1k10
[td] Każdy Ocalały - spożycie
[c] 1-4
[d<]

Woda zdaje się być czysta, póki nie weźmiesz jej do ust, gdzie nagle zamienia się w krew. Wypluwasz obrzydliwą ciecz, to wydarzenie zadaje twojemu umysłowi obrażenia równe poziomowi potwora. 
[i] Jeśli masz zaburzenie <b>Hemofobia</b>, to wydarzenie dodatkowo  zadaje twojemu korpusowi obrażenia równe poziomowi potwora, gdy wymiotujesz gwałtownie z obrzydzenia.

[>d]
[c] 5-8
[d] To zupełnie świeża woda.
[c] 9+
[dt] Woda jest krystalicznie czysta i ma smak jakiego nigdy nie próbował żaden Ocalały. Otrzymujesz +1 do przetrwania.
`,

  65: `65 | Posąg

[img] 65

Na grzbiecie wzgórza, Ocalali znajdują posąg człowieka siedzącego na tronie. 

[i] Jeśli którykolwiek Ocalały ma 5+ wiedzy, Ocalali mogą zignorować posąg i zakończyć to wydarzenie.

W przeciwnym razie każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym.
[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[d<]

Posąg przyciąga do siebie spóźnionego. Dotyka on go delikatnie. W jednej chwili zamienia się miejscem z człowiekiem na tronie który stoi teraż żywy rozglądając się w zdumieniu. Spóźniony siedzi na tronie, a jego kamienne usta, otwierają się w niemym wrzasku. Uważaj go martwego. Nie możesz  zastosować doktryny śmierci <b>Kanibalizm</b>.  Nie pozostało po nim żadne ciało.
[TO] Sprawdź
[td] Czy osada zna <b>Momento Mori</b>?
[c] Tak #Momento Mori
[d] Posąg przypomina zmarłego Ocalałego. Wymień Spóźnionego na zmarłego Ocalałego zapisanego w arkuszu. Usuń jego wszystkie ciężkie urazy. Ustaw doświadczenie łowieckie na 2 (rozpatrz wiek  ponownie, tak jakby był nowonarodzonym). Otrzymuje +1k10 przetrwania, +1k10 obłędu. Możesz mu przydzielić 3 stopnie biegłości w losowo wybranym typie broni.
[c] Nie #
[dt] Mężczyzna składa podziękowanie i dołącza do grupy łowców bez żadnych wyjaśnień. Jest nowym Ocalałym z ekwipunkiem Spóźnionego, 2 losowymi zaburzeniami i 2 punktami doświadczenia łowieckiego. Potasuj wszystkie karty specjalizacji w broni (łącznie z tymi z dodatków, jeśli takie masz) i wylosuj jedną. Ocalały ma 3 stopień biegłości w tej broni. Zyskuje +1k10 przetrwania, 1k10 obłędu. Nadaj mu imię i dodaj +1 przetrwania za posiadanie imienia.

[>d]
[T]
`,

  66: `66 | Zakazane słowo
Uderza was silny podmuch powietrza. Przerażający, nieludzki głos wypowiada jedno słowo w nieznanym języku, które  natychmiast Ocalali rozumieją.
Każdy <b>nie głuchy</b> Ocalały otrzymuje +1 do wiedzy, a następnie to wydarzenie zadaje mu 1 obrażenie umysłu.
[i] Każdy <b>obłąkany</b> Ocalały otrzymuje 1 losowe zaburzenie.
`,

  67: `67 | Stawy szlamu
Teren na wprost jest podziurawiony sadzawkami zapełnionymi lepką cieczą, bulgoczącą beztrosko smrodem trawionego mięsa. Gdy Ocalali przechodzą między nimi, opanowują ich fale mdłości.

[TO] Sprawdź
[td] Czy jakiś Ocalały ma sierp?
[c] Tak #Sierp
[d<]

Wycinasz kilka liści z pobliskiej rośliny. Wszyscy używają ich do zatkania nosa i zamaskowania zapachu. Każdy Ocalały zyskuje +1 do wiedzy.

[TO] Sprawdź
[td] Czy jakiś ocalały ma 3+ wiedzy?
[c] Tak #3+ wiedzy
[d] Wymyślacie sposób korzystania z sadzawek. Każdy z Ocalałych może umieścić w niej jedną sztukę ekwipunku. Zarchiwizuj ekwipunek, w zamian otrzymujesz zasoby użyte do jego wytworzenia (jeśli jakieś były użyte).
[c] Nie #
[dt] Ocalali kontunuują łowy.

[>d]
[c] Nie #
[d<]

Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały - Czy wynik jest niższy niż przetrwanie?
[c] Tak #Mniej niż przetrwanie
[d] Możesz iść dalej
[c] Nie #Więcej niż przetrwanie
[dt] Wymiotujesz do pobliskiej sadzawki, a to wydarzenie zadaje 1 obrażenie w korpus. Na twoich oczach, sadzawka łapczywie rozpuszcza wymiociny. Zyskujesz +1 wiedzy.
[br]
[TO] Po wszystkich rzutach
[td] Czy jakiś ocalały ma 3+ wiedzy?
[c] Tak #3+ wiedzy
[d] Wymyślacie sposób korzystania z sadzawek. Każdy z Ocalałych może umieścić w niej jedną sztukę ekwipunku. Zarchiwizuj ekwipunek, w zamian otrzymujesz zasoby użyte do jego wytworzenia (jeśli jakieś były użyte).
[c] Nie #
[d] Ocalali kontunuują łowy.
[T]

[>d]
[T]
`,

  68: `68 |  Znajoma twarz
[i] Jeśli żaden z Ocalałych nie zginął jeszcze w tej kampanii, zignoruj to wydarzenie i ponownie rzuć w liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.

Każdy ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym. 

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[dt] Oglądając kamienne twarze pod stopami, spóźniony rozpoznaje twarz zmarłego przyjaciela. Słodko-gorzkie wspomnienia powodują napływ łez. Zredukuj jego obłęd do 0 i otrzymuje on +1 do wiedzy.
`,

  69: `69 | Upływ czasu
Rozmyty blask lamp Ocalałych rzucając smugi światła pozostawia ścieżkę za nimi.
[i] Jeśli osada walczyła z Feniksem, grupa rozpoznaje to zjawisko. Wszyscy Ocalali otrzymują +1 do wiedzy.
Wykonawca wydarzenia rzuca 1k10 w tabeli poniżej. Jeśli którykolwiek z Ocalałych ma <b>Pierścień godzin</b>, zamiast rzutu może wybrać od razu rezultat.
[TA] 1k10
[td] Wykonawca wydarzenia
[c] 1-3
[d] Ciała Ocalałych błyskawicznie się starzeją. Ocalali mający mniej niż 10 doświadczenia łowieckiego otrzymują +3 doświadczenia łowieckiego. Nie otrzymujecie benefitów jakie daje wiek. Wasze ciała fizycznie się postarzały, ale nie dało to żadnego praktycznego doświadczenia.
[c] 3-9
[d<]

Umysły Ocalałych napełniają się obcymi wspomnieniami. Nie są już sobą. Mają inny chód i mówią z dziwnym akcentem. Nadaj każdemu Ocalałemu nowe imię i uzyskaj +1 przetrwania za jego nazwanie. Każdy z Ocalałych otrzymuje +1 doświadczenia  łowieckiego i 1 losowe zaburzenie.
[i] Jeśli twoja osada zna <b>Przetrwanie najsilniejszych</b> i użyłeś już jednorazowego przerzutu, możesz użyć go ponownie.

[>d]
[c] 10+
[dt]  Ocalali nagle stoją przed tropioną zdobyczą! Natychmiast rozpoczynacie starcie.
`,

  70: `70 | Doskonały grobowiec
Ocalali znaleźli luksusowy grobowiec, nieskazitelny w swej budowie i formie. Eleganckie malowidła zdobią ściany przedstawiając chwalebne zwycięstwa nad potworem, na którego polują Ocalali. Ocalali są zaskoczeni jego obecnością.
Wykonawca wydarzenia przeprowadza <b>badanie</b>, wykonując rzut 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia - badanie
[c] 1
[d] Ocalali opłakują słabość wojowników na malowidłach naściennych. Wszyscy Ocalali tracą 1 przetrwania.
[c] 2-5
[d] Czyż nie jest miło zobaczyć coś tak pięknego? Ech...
[c] 6-9
[d] Ocalali nie pamiętają by kiedykolwiek czuli się tacy radośni i zainspirowani. Każdy Ocalały otrzymuje +1 do odwagi.
[c] 10+
[d<]

Drzwi do grobowca mają drewniane obramowanie o słojach w kształcie małych dłoni. Freski wewnątrz przedstawiają bohatera w centrum labiryntu, trzymającego nad głową gigantyczny wypełniony ludźmi owoc. Każdy Ocalały otrzymuje +1 do wiedzy.
[i] Jeśli osada zna <b>Piktogramy</b>, Ocalali znajdują informacje o tropionej zdobyczy. Na początku starcia, mogą umieścić pułapkę potwora na spodzie talii miejsc trafień.

<button class="hunt_event_action_button hoverable" id="tomb_of_excelence" onClick="placeReminder('tomb_of_excelence')">[Piktogramy] Umieść przypomnienie</button>

[>d]
[T]
`,

  71: `71 | Znaleziony relikt
Wśród niekończących się kamiennych twarzy na ziemi, wykonawca wydarzenia zauważa niezwykły obiekt. 
Wykonawca wydarzenia przeprowadza <b>badanie</b>, i rzuca 1k10.
[i] Jeśli osada posiada <b>Archiwum</b>, dodaj +6 do wyniku.
[TO] 1k10
[td] Wykonawca wydarzenia - Badanie
[c] 1-2
[d] Znajdujesz zwietrzały, purpurowy kamień o wirującej teksturze. Jesteś zszokowany jego ciężkością. Zahipnotyzowany przez kamień, ukrywasz go przed pozostałymi Ocalałymi. Otrzymujesz zaburzenie <b>Skryty</b> i żeton ruchu -1 z powodu wleczenia kamienia ze sobą.
[c] 3-4
[d] Bezużyteczne śmieci zaścielają ziemię.
[c] 5-9
[d] Znajdujesz kamienne serce, pulsujące ciepłem, gdy tylko weźmiesz je w dłonie. Otrzymujesz +1 do obłędu.
[c] 10+
[d<]

Znajdujesz maskę z żyjącymi wargami. Jeśli wrócisz z maską do osady, szybko uczy się twojego języka i dzieli się sekretami nim rozpadnie się w pył. Na początku najbliższej fazy osady, wylosuj 3 innowacje z talii innowacji i dodaj je do swojej osady bez żadnych kosztów. Jeśli któryś z Ocalałych posiada <b>ostateczną latarnię</b>, zaczyna ona gwałtownie pulsować i wibrować. Maska
rozpada się, a to wydarzenie zadaje umysłom Ocalałych 1 obrażenie.

<button class="hunt_event_action_button hoverable" id="found_relic" onClick="placeReminder('found_relic')">Umieść przypomnienie</button>

[>d]
[T]
`,

  72: `72 | Coś do zabicia czasu
[i] Jeśli osada nie posiada <b>Sympozjum</b>, zignoruj ​​to wydarzenie i ponownie rzuć na liście wydarzeń na łowach, zanim przesuniesz się na planszy łowów.
W przeciwnym razie wykonawca wydarzenia sugeruje grę słowną, która rozładuje napięcie, zanim Ocalali ruszą naprzód. Wykonawca wydarzenia rzuca 1k10.
[i] Jeśli osada zna <b>Pieśń o bohaterach</b>, dodaj +4 do tego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-2
[d] Hałaśliwe głosy Ocalałych przyciągają tropioną zdobycz.  Potwór zaczaja się na nich w <b>zasadzce</b>.
[c] 3-7
[d] Nikt nie jest w nastroju do gry. Wykonawca wydarzenia traci 1 odwagi.
[c] 8-9
[d] Ocalali grają w prostą, ale zabawną grę. Każdy Ocalały otrzymuje +1 do odwagi.
[c] 10+
[dt] Gra jest zaskakująco zabawna, a duch Ocalałych rośnie wraz z ich buńczucznym śmiechem. Każdy Ocalały rzuca 1k10. Przy wyniku 6+ zyskuje 1 przetrwania lub leczy 1 zaburzenie.
`,

  73: `73 |  Złoty żar
Droga naprzód jest zablokowana przez złocisty gęsty dym. Ocalali mogą pójść naprzód i odważnie wkroczyć w dym.
[i] Jeśli Ocalali mają <b>ostateczną  latarnię</b>, przeprowadza  ich przez dym bez żadnych problemów. Zakończ to wydarzenie.

[TO] Wybór
[td] Co robisz?
[c] Wkrocz w dym
[d<]

Każdy z Ocalałych otrzymuje +1 odwagi, następnie wykonawca wydarzenia rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-5
[d] Dym przytłacza Ocalałych. Kiedy biegną przez migotliwy dym, to wydarzenie zadaje każdemu z Ocalałych 1 obrażenie w głowę oraz 1 w korpus. Gdy w końcu osiągają koniec mgły, idą w ciszy dalej. Nikt nie jest chętny dzielić się straszliwymi rzeczami, jakie dostrzegł. Każdy Ocalały otrzymuje 1 losowe zaburzenie.
[c] 6+
[d<]

Ocalali chwytają się za ręce tworząc linię i przemierzają tak dym. Oddychają przez szmaty i na zmianę wychodzą w poszukiwaniu kierunku. Gdzieś, głęboko w dymie, natykają się na krater. Mogą go zignorować i uciec z dymu (kończąc to wydarzenie) lub zbadać krater.

[TO] Wybór
[td] Co robisz?
[c] Zbadaj krater
[d<]

Ocalali ostrożnie schodzą do krateru, znajdując ruiny osady otoczonej pierścieniem czaszek. Osada została całkowicie zniszczona, i prawie wszystko zostało w niej zmielone na proszek jakąś potężną siłą. Czaszki są odwrócone od ruin,a w otworze ust mieni się złocisty żar, z którego ulatuje dym. 
Widok jest niepokojący. To wydarzenie zadaje umysłowi każdego z Ocalałych, 1k10 obrażeń oraz otrzymuje 1 losowe zaburzenie. Ocalali ostrożnie przeszukują ruiny.
Wybierz Ocalałego by przeprowadził <b>badanie</b> i rzucił 1k10.

[TO] 1k10
[td] Wybrany Ocalały - Badanie
[c] 1
[d<]

Wbrew wszelkiemu rozsądkowi czujesz się zmuszony sięgnąć do czaszki i złapać żar w rękę. Twoje ciało skwierczy, oślepiając cię bólem, nie możesz powstrzymać się od sięgnięcia do własnych  ust.

[TO] Sprawdź
[td] Czy masz <b>zdruzgotaną szczękę</b>?
[c] Tak #Zdruzgotana szczęka
[d] Nie możesz tego zrobić. Upuszczasz złoty płomień ze swojej płonącej ręki. Otrzymujesz ciężki uraz <b>odcięte ramię</b>.  Uciekasz z dymu wraz z resztą zszokowanych Ocalałych.
[c] Nie #Brak zdruzgotanej szczęki
[d<]

Zaciskasz szczękę na żarze, a twoje usta topią się tłumiąc okrzyki bólu. Dym unosię z twoich oczu, nosa i uszu.

[TO] Sprawdź
[td] Czy osada zna <b>Przetrwanie najsilniejszych</b>?
[c] Tak #Przetrwanie najsilniejszych, 
[d] Chęć do życia wygrywa. Brutalnie łamiesz własną szczękę. Otrzymujesz ciężki uraz głowy <b>zdruzgotana szczęka</b>. Żar spada na ziemię, a jego syk dzwoni Ci w uszach. Wszyscy Ocalali uciekają z tego miejsca w przerażeniu.
[c] Nie #
[dt] Twoje dymiące, topiące się ciało zaczyna maszerować mechanicznie do pierścienia czaszek, układając się w miejscu poruszonej czaszki. Cuchnący zapach płonącego mózgu unosi się w powietrzu wraz z dymem. Widok jest tak przerażający, że reszta Ocalałych ucieka, nigdy nie rozmawiając o tym, co się stało.
[>d]
[>d]
[T]
[c] 2-4
[d] Czujesz ekstremalne niebezpieczeństwo bijące od złocistego żaru, ale pozostajesz tu wystarczająco długo, by chwycić zniszczona mały bibelot. Zdobywasz 1 podstawowy zasób  <b>zniszczona  latarnia</b>.
[c] 5-8
[d] Zauważasz, że osada jest usiana latarniami, wszystko jest zniszczone, porozbijane i niemalże niemożliwe do rozponania. Ocalali postanawiają, że to się nigdy nie stanie z ich osadą. Jeśli którykolwiek z Ocalałych powróci do osady w tym roku, otrzymuje +2 do działań.
[c] 9+
[dt] Wśród ruin znajdujesz jeden niezniszczony przedmiot. <b>Miecz zmierzchu</b>. Spoczywa, z szacunkiem ułożony w poprzek nieuszkodzonego szkieletu Ocalałego. Jeśli osada nie ma <b>miecza zmierzchu</b>, a żaden z członków grupy nie ma zaburzenia <b>honorowy</b>, możesz wyznaczyć Ocalałego by wziął rzadki ekwipunek <b>miecz zmierzchu</b>. Jeśli to zrobisz, a wydarzenie fabularne <b>zakapturzony rycerz</b> nie znajduje się na osi czasu, dodaj je do osi czasu za 2 lata od tej chwili.

[>d]
[c] Ucieknij z dymu
[dt] Ocalali uciekają z dymu i kontynuują łowy.

[>d]
[T]
[>d]
[c] Obejdź dookoła
[dt] Wybieracie dalekie obejście. Rzuć ponownie na liście wydarzeń na łowach nim przesuniecie się na planszy łowów.
`,

  74: `74 |  Żłobienia porożem
Wielka bitwa o dominację pomiędzy dwoma olbrzymimi antylopami pozostawiła kamienną ścianę wyszczerbioną krzyżującymi się bliznami. 
Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały
[c] 1-2
[d] Potykasz się o poszarpaną ziemię i kaleczysz się!  Orzymujesz ciężki uraz nogi <b>rozdarty mięsień</b>.
[c] 3-8
[d] Ostrożnie stąpasz po zniszczonych twarzach.
[c] 9+
[dt] Znajdujesz poluzowany kamień. Otrzymujesz startowy zasób <b>odłamek podłoża</b>.
`,

  75: `75 | Ups!
Potykając się w ciemności, wykonawca zdarzenia wuwraca się na ziemię, miażdżąc pod sobą latarnię. Gorejące światło z wnętrza latarni, przypala jego ekwipunek. Wykonawca wydarzenia archiwizuje 1 wybrany przez siebie ekwipunek, ze swojej siatki ekwipunku.
`,

  76: `76 | Wyśniona droga
Ocalali mają żywe, gorączkowe wizje tego co ich czeka. Wszyscy jednocześnie się budzą i w rozgorączkowaniu porównują okropności który widzieli.
Każdy Ocalały rzuca 1k10. 
[i] Jeśli którykolwiek Ocalały jest zbawcą, jego potężny sen otacza grupę; każdy z Ocalałych może wybrać dowolny wynik rzutu kości. 
Jeśli jakiekolwiek rzuty Ocalałych są takie same, ci Ocalali odkrywają, że mają dokładnie ten sam sen. Otrzymują +1 do obłędu. Jeśli którekolwiek zduplikowane rzuty wynoszą 10, wykonawca zdarzenia może ponownie przerzucić dowolny wynik rzutu w tej fazie łowów (dowolny rzut kości, a nie tylko jego rzut).
`,

  77: `77 | Dziura
Przed Ocalałymi nagle otwiera się dziura, odsłaniając wirującą czarną kałużę posoki pod nimi. Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym.
Każdy Spóźniony rzuca 1k10.
[i] Jeśli którykolwiek inny Ocalały ma bicz, rzuca nim spóźnionym jak liną — dodają wtedy +4 do rzutu.

[TA] 1k10
[td] Spóźniony
[c] 1
[d] Zostajesz połknięty przez dziurę. Chwilę później dziura wypluwa Cię kompletnie nago. Twój ekwipunek jest zagubiony pośród wyziewów i posoki. Zarchiwizuj cały ekwipunek ze swojej siatki ekwipunku.
[c] 2-4
[d] Pozostali Ocalali wyciągają cię, choć wcześniej zostałeś zassany pod powierzchnię. Archiwizuj 1 ekwipunek ze swojej siatki ekwipunku.
[c] 5-9
[d] Jesteś wleczony w bezpieczne miejsce, przerażony, ale bez szwanku.
[c] 10+
[dt] Po wielkim wysiłku, inni Ocalali wyciągają Ciebie na powierzchnię. Ktoś mocno trzyma się  twoich stóp (+1 do populacji)! Gdy powracacie do twojej osady, to wydarzenie zadaje 1 obrażenie umysłowi każdego z Ocalałych.
`,

  78: `78 | Wspaniała, śmiertelna gra łowcy

Ocalali znajdują zwłoki ubrane w jaskrawe ubrania, przyciskające coś do piersi. Wykonawca wydarzenia może przeprowadzić <b>badanie</b>.

[TO] Wybór
[td] Wykonawca wydarzenia
[c] Badanie
[d<]

Zyskuje +1 odwagi i rzuca 1k10.
[i] Jeśli którykolwiek Ocalały ma bicz, smaga nim zwłoki z daleka, dodaj +4 do swojego rzutu.

[TO] 1k10
[td] Wykonawca wydarzenia - Badanie
[c] 1
[d] Trzymał materiał wybuchowy! Poruszenie nim powoduje detonację odrywając ci rękę. Otrzymujesz ciężki uraz ręki - <b>odcięte ramię</b>.
[c] 2-4
[d] Trzymał materiał wybuchowy! Eksplozja odrzuca cię nie powodującwiększych obrażeń. Otrzymujesz żeton precyzji -1.
[c] 5-9
[d<]

Jego ręce są puste. 
[i] Jeśli osada zna <b>kanibalizm</b>, otrzymujesz 1 losowy podstawowy zasób. 
[i] Jeśli osada zna <b>groby</b>, otrzymujesz +1 do wiedzy.

[>d]
[c] 10+
[dt] Jego dłonie trzymają wysadzaną klejnotami butelkę wypełnioną żółto-zielonym likierem. Otrzymujesz 1 ekwipunek <b>napój furii</b>.
[>d]
[c] Idź dalej
[dt] Rzuć ponownie na liście wydarzeń na łowach nim poruszycie się na planszy łowów.
`,

  79: `79 | Śmierć małego poszukiwacza
[i] Jeśli twoja osada posiada już <b>klucz do kraty</b>, poszukiwacz znika. Rzuć ponownie na liście wydarzeń na łowach zanim poruszysz się na planszy łowów.
Ocalali odkrywają ciało leżące na wielkiej kamiennej twarzy. Podchodząc bliżej dostrzegają małego, umierającego poszukiwacza przebitego strzałą. Kiedy się zbliżają, warczy ostrzegawczo, grożąc im ogromnym kamiennym
odłamkiem. Kiedy dostrzega, że nie jesteście potworami, uspokaja się i daje wam klucz. Ostatnim tchnieniem mówi:  To jest Klucz do kraty. Bez  tego, nigdy  nie przejdziesz.
Zanotuj <b>Klucz do kraty</b> w arkusza osady.

[TO] Sprawdź
[td] Czy osada zna Groby?
[c] Tak #Groby
[d] Wykonawca wydarzenia buduje mały pomnik z rozbitych kamieni i zyskuje +1 do wiedzy.
[c] Nie #
[d] Ocalali kontynuują łowy.
[T]
`,

  80: `80 |  Samotny, opuszczony głaz
Ocalali przechodzą koło kręgu kamieni z niepozornym głazem pośrodku. Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (wylosuj w przypadku remisu) zostaje Spóźnionym. 

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[dt] Spóźniony podnosi głaz (jest ciężki!) i przepełniony miłością obiecuje nosić go wszędzie, na zawsze. Odtąd musi zawsze pozostawić jedno miejsce puste w swojej siatce ekwipunku, na swoją ukochaną skałę. Zanotuj to w arkuszu Ocalałego. Głaz może być utracony lub zarchiwizowany jak każdy inny ekwipunek. Jeśli zostanie utracony, Ocalały opłakuje swoją ukochaną skałę, ale odzyskuje miejsce w swojej siatce ekwipunku.
`,

  81: `81 | Field of Arms

[img] 78

Ocalali ostrożnie depczą po grzbiecie ogromnego, śpiącego potwora. Zamiast futra ma podłużne ramiona. Kilka z nich drży podczas snu w którym pogrążona jest wielka bestia. Ocalali nie zakłócają głębokiego snu potwora i przechodzą bez komplikacji.

[TO] Sprawdź
[td] Czy jakiś Ocalały posiada sierp?
[c] Tak #Sierp
[d] Ostrożnie odcinasz nieco twardej skóry na jednym z ramion i zyskujesz 1 podstawowy zasób <b>skóra</b>.
[c] Nie #Brak sierpa
[dt] ocalali kontynuują łowy.
[T]
`,

  82: `82 | Żarłoczna trawa
Soczyście zielona trawa wyrasta na polanach przed Ocalałymi. Bliższe sprawdzenie delikatnych liści ujawnia, że są ​​one ostre jak ostrza. Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (lub Ocalali w przypadku remisów) zostaje Spóźnionym.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[d<]

Podczas gdy Ocalali ostrożnie przechodzą przez zielone niebezpieczeństwo, Spóźniony utyka w zaroślach. Rzuca 1k10.
[i] Jeśli którykolwiek z Ocalałych ma bicz, rozwija go pospiesznie. Dodaj +4 do rzutu.

[TA] 1k10
[td] Spóźniony
[c] 1
[d] Lądujesz na trawiastej polanie. Kiedy stajesz na nogi, zdajesz sobie sprawę, że jest już za późno. W części ciała które dotknęły ziemi, trawa wbiła się ostrymi źdźbłami. Każda próba ich usunięcia wciska je głebiej w ciało. Podczas starcia nigdy nie jesteś zagrożeniem (zignoruj​​ jakikolwiek efekt, który może sprawić, że staniesz się zagrożeniem, nawet <b>węszenie</b> Białego lwa). Pod koniec starcia twoje ciało rozkwita w kępę soczyście zielonej trawy. Nie żyjesz.
[c] 2-9
[d] Upadasz, ale udało ci się wepchnąć coś pomiędzy trawę, a swoje ciało. Zarchiwizuj wybrany ekwipunek z własnej siatki ewipunku, którego użyłeś by się zabezpieczyć lub potraktuj ten wynik tak, jakbyś wyrzucił 1.
[c] 10+
[d] Zatrzymujesz upadek, nim jest za późno.
[>d]
[T]
`,

  83: `83 | Monolit ciał

[img] 83

Ocalali zbliżają się do 5-stronnego monolitu wykonanego z ciał, wznoszącego się w ciemność nad głowami. Kończyny i ludzkie twarze dziwaczne wystają ze wszystkich stron. Wykonawca wydarzenia zyskuje +1 odwagi i wykonuje <b>badanie</b>.

[TO] 1k10
[td] Wykonawca wydarzenia - badanie
[c] 1
[d<]

Kończyny monolitu ożywają, chwytając cię nim zdążysz zareagować.
[TO] Sprawdź
[td] Czy osada zna <b>Przetrwanie najsilniejszych</b>?
[c] Tak #Przetrwanie najsilniejszych
[d] Walczysz z monolitem! Okropny monolit odrywa ci rękę, ale w odwecie gryziesz jedną z jego kończyn! Gdy wycofuje się w głąb ziemi, ryczysz triumfalnie. Otrzymujesz ciężki uraz <b>odcięte ramię</b> i otrzymujesz na stałe +1 do siły. Reszta Ocalałych stoi oniemiała w zachwycie. Otrzymują +3 do obłędu i +1 do odwagi.
[c] Nie #
[dt] Z oszałamiającą szybkością rozrywają Twoje ciało na strzępy przytwierdzając je do monolitu. Nie żyjesz. Widok tego straszliwego wydarzenia zadaje pozostałym Ocalałym 3 obrażenia umysłu i wszyscy otrzymują zaburzenie <b>stres pourazowy</b>.

[>d]
[c] 2-4
[d] Dłonie i macki chwytają cię. Wydaj 1 przetrwania by się oderwać i odskoczyć lub zachowaj się tak jakbyś wyrzucił 1.
[c] 5-9
[d] Wszyscy Ocalałali uciekają z grozą w oczach. To wydarzenie zadaje obrażenia umysłom wszystkich Ocalałych, równe poziomowi potwora.
[c] 10+
[d<]

Gdy Ocalali zbliżają się, odkrywają, że monolit ciał jest w rzeczywistości ogromną stertą ciał Ocalałych, wielu z okropnie połamanymi kończynami. Sterta jest pokryta kawałkami dziwnych, słodko pachnących wnętrzności.
[TO] Sprawdź
[td] Czy osada zna Groby?
[c] Tak #Groby
[d] Wchodzisz na stertę i znajdujesz 3 ledwo żyjące ofiary. Są wygłodniali, a ich oczy są wrażliwe na światło. Jeśli uda Ci się wrócić do osady zyskacie +3 populacji. Nowi Ocalali nie mogą wyruszać na łowy przez kolejne 2 lata, ponieważ potrzebują czasu by odzyskać siły (zanotuj to na osi czasu).
[c] Nie #
[dt] Wszystko, co zdołałeś zebrać ze stosu wychudzonych trupów, to 2 podstawowe zasoby <b>organów</b>. Skóra reszty jest zbyt miękka, a kości zbyt kruche by mogły być przydatne.
[>d]
[T]
`,

  84: `84 | Księga skryby

[img] 84

Przed Ocalałymi leży ogromna, otwarta, zdobnie oprawiona ornamentami księga. 

[TO] Sprawdź
[td] Czy osada zna Piktogramy?
[c] Tak #Piktogramy
[d<]

Każdy z Ocalałych z odwagą na 3+ może zapisać swoje imię w księdze. <b>Obłąkani</b> Ocalali z odwagą 3+ muszą pisać.

Każdy Ocalały, który zapisuje swoje imię w księdze rzuca 1k10 i dodaje swoją wiedzę. Jeśli nikt nie pisze rzuć ponownie na liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.

[TA] 1k10
[td] Dowolny Ocalały z odwagą 3+
[c] 1-4
[d] Gdy kończysz pisać swoje imię, orientujesz się, że zrobiłeś coś bardzo głupiego. Znikasz z historii. Giniesz. Zarchiwizuj swoje wyposażenie.
[c] 5-8
[d] Nic się nie dzieje.
[c] 9-10
[d] Gdy wpisujesz swoje imię, czujesz się odnowiony. Ulecz wszystkie rany i stracone punkty pancerza. Otrzymujesz +2 przetrwania.
[c] 11-14
[d] Masz przekonanie, że póki twoje imię jest w księdze nic złego się nie może stać. Zdobywasz dwie z następujących rzeczy: +2 do odwagi, +2 do wiedzy lub +2 przetrwania.
[c] 15+
[dt] Księga niezaprzeczalnie dowodzi, że zostaje po tobie ślad w historii tego świata. Zdobywasz +1 do przetrwania, +1 do wiedzy, +1 do odwagi, na stałe +1 szybkości i na stałe +1 siły.

[>d]
[c] Nie #
[dt] Ocalali kontunuują łowy. Rzuć ponownie na liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.
`,

  85: `85 |  Test odwagi
Z oka wykrzywionej w grymasie, ogromnej kamiennej twarzy wypływa lawa. Zaciśnięte zęby ściskają powycierany miecz. Jeśli jakiś Ocalały ma odwagę 6+, wybierz jednego do zmagań z lawą.

[TO] Sprawdź
[td] Czy jakiś Ocalały ma odwagę 6+ ?
[c] Tak #odwaga 6+
[d<]

Otrzymujesz rzadki ekwipunek <b>Miecz awanturnika</b>.

[TO] Sprawdź
[td] Czy osada posiada już <b>Miecz awanturnika</b> i zna opowieści?
[c] Tak #
[d<]

Ocalali dzielą się historiami o odwadze. Każdy Ocalały otrzymuje +1 do przetrwania.
[i] Jeśli osada zna również <b>Sagi</b> historie są wyjątkowo poruszające, a każdy Ocalały otrzymuje +1 do odwagi.

[>d]
[c] Nie #
[dt] Grupa rusza w dalszą drogę.

[>d]
[c] Nie #
[d] Grupa rusza dalej czując, że nie ma dostatecznych umiejętności.
[T]
`,

  86: `86 | Cuchnące tunele
Ocalali wyczuwają zapach na długo wcześniej niż zobaczą, grupę jam w ziemi, wydzielających trujące wyziewy.
Każdy Ocalały rzuca 1k10.

[TA] 1k10
[td] Każdy Ocalały
[c] 1-8
[d] Powstajesz się od badania.
[c] 9+
[dt] Wchodzisz do jednego z tuneli i odkrywasz grupę chorych nieszczęśliwców, żyjących w smrodzie i brudzie. Wszyscy Ocalali wchodzący do jaskini, nabywają <b>Gnilną chorobę</b>. Stają się trędowaci. Zmniejsz im wszystkie otrzymywane obrażenia o 1, minimalnie do 1. Otrzymują -2 do rzutów na ciężkie urazy. Zanotuj to upośledzenie.
`,

  87: `87 | Szlochające twarze
Woda płynie z oczu okolicznych kamiennych twarzy, gromadząc się w małej sadzawce. Każdy Ocalały może spróbować ją <b>spożyć</b> z sadzawki, rzucając 1k10. 
[i] Jeśli ma wiedzę na 3+, dodaje +2 do tego rzutu.

<b>Obłąkani</b> Ocalali są niepocieszeni, leżą na ziemi szlochając ciężko. Jeśli którykolwiek z Ocalałych jest <b>obłąkany</b>, rzuć ponownie na liśćie wydarzeń na łowach, zanim poruszycie się na planszy łowów.

[TA] 1k10
[td] Dowolny Ocalały - Spożyj
[c] 1-3
[d] Woda jest słona i kwaśna. Nie pomaga w myśleniu świadomość co pijesz. To wydarzenie zadaje 1 obrażenie twojemu umysłowi.
[c] 4-6
[d] Odświeżająca!
[c] 7-8
[d] Woda jest czystsza niż wyglądała. Możesz uleczyć do 2 poziomów ran w dowolnym miejscu trafienia.
[c] 9+
[dt] Woda jest orzeźwiająca. Otrzymujesz żeton +1 szybkości.
`,

  88: `88 | Miecz i posąg
Jednooki posąg, dwa razy wyższy niż jakikolwiek człowiek, siedzi przed kowadłem z młotem w każdej z sześciu rąk. Sparaliżowani Ocalali patrzą, jak posąg wali w rozpalony do czerwoności miecz, leżący w poprzek kowadła. Każdy Ocalały, począwszy od wykonawcy wydarzenia, (a kolejni zgodnie z kierunkiem ruchu wskazówek zegara) może podjąć jedną próbę ściągnięcia miecza z kowadła. 
Jeśli to robi otrzymuje +1 odwagi, rzuca 1k10 i dodaje swoje doświadczenie w łowiectwie do tego rzutu.

[TA] 1k10
[td] Dowolny Ocalały
[c] 1-2
[d] Kiedy zbliżasz się do kowadła, posąg chwyta miecz i wbija go w twoje ciało. Słuchać głośny syk, gdy gorący metal chłodzi się w twojej krwi. Nie żyjesz.
[c] 3-8
[d] Szybko łapiesz za miecz, ale nie wystarczająco szybko. Otrzymujesz ciężki uraz <b>odcięte ramię</b>.
[c] 9-13
[d] Możesz nie być wystarczająco szybki by złapać miecz, ale przynajmniej nie jesteś na tyle głupi, by umrzeć próbując.
[c] 14+
[dt] Twoja prędkość jest legendarna. Zdobywasz rzadki ekwipunek Muramasa. Zakończ to wydarzenie.
`,

  89: `89 | Ptaki czyściciele
Maleńkie, nastroszone ptaki z cienkimi jak igły dziobami, krążą wam nad głowami. Każdy Ocalały rzuca 1k10. Ocalały z najniższym wynikiem (remisujący rozstrzygają to rzutami między sobą) zostaje Spóźnionym.

[TO] 1k10
[td] Wybierz Spóźnionego
[c] Spóźniony wybrany
[d<]

Ptaki rzucają się rojem na Spóźnionego. Jeden na siłę wciska się w usta spóźnionego i przepycha w głąb gardła. Ocalały wymiotuje tłustym ptakiem. Wypluwa pokiereszowane wnętrzności. Otrzymujesz na stałe +1 do szczęścia i na stałe -1 do szybkości.
[i] Jeśli któryś z ocalałych ma bicz, trzaska nim w powietrze, rozpędzając agresywne stworzenia. Otrzymujesz 1 losowy podstawowy zasób.

[>d]
[T]
`,

  90: `90 | Światło na horyzoncie
Ocalali usłyszeli skrzeczące wycie, po którym nastąpił huk. Widzą eksplozję wielobarwnego światła na horyzoncie. Nienaturalne światło oświetla drogę Ocalałych. 

[TO] Sprawdź
[td] Czy jakiś Ocalały nie jest obłąkany?
[c] Tak #Nie wszyscy są obłąkani
[d<]

Ocalali podążają za światłem. Możesz przerzucić następny wynik w tabeli zdarzeń na łowach. 
Światło dociera do osady. Dodaj wydarzenie osady <b>Swiatła na niebie</b> na osi czasu w przyszłym roku.
[>d]
[c] Nie #Wszyscy są obłąkani
[d<]

Ocalali odwracają się od światła, idąc w ciemność. Przesuń Ocalałych o 2 pola w tył na planszy łowów.
Światło dociera do osady. Dodaj wydarzenie osady <b>Światła na niebie</b> na osi czasu w przyszłym roku.
[>d]
[T]
`,

  91: `91 | Początek
Ocalali natknęli się na miejsce pierwszych łowów ich osady. Niezależnie czy widzieli to sami, czy słyszeli o tym historie, natychmiast je rozpoznają. Ujrzenie pierwszego zwycięstwa ich osady jest elektryzujące.

Każdy Ocalały otrzymuje +1 do przetrwania.

[TA] Sprawdź
[td] Jakie innowacja zna osada?
[c] Sagi
[d] Każdy z Ocalałych otrzymuje +1 odwagi.
[c] Opowieści
[dt] Każdy z Ocalałych otrzymuje +1 wiedzy.
`,

  92: `92 | Nieudany start
Ocalali znajdują rozdarte szczątki czterech ludzi. Ubrani w przepaski na biodrach i ściskający kamienne odłamki, noszą wyraźne ślady pazurów Białego Lwa. 
To wydarzenie zadaje umysłowi każdego z Ocalałych 1 obrażenie. Każdy otrzymuje 1 początkowy ekwipunek <b>Odłamek podłoża</b>. Ocalali z wiedzą 3+ otrzymują także +1k10 obłędu.
`,

  93: `93 | Zaginiony Ocalały

[img] 93 # width:25%

W zagłębieniu między dwiema identycznymi skałami znajdują się zwłoki o bajecznych włosach, przyciskające do piersi księgę.

[TO] Sprawdź
[td] Czy osada zna Piktogramy?
[c] Tak #Piktogramy
[d<]

Wykonawca wydarzenia może przeczytać księgę i rzucić 1k10.

[TO] Wybór
[td] Wykonawca wydarzenia
[c] Przeczytaj
[d<]

Księga opowiada tragiczną historię dwojga Ocalałych, którzy odnaleźli miłość jakiej nigdy wcześniej nie mieli.
[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-3
[d] Strona 3: podwójna natura. Osada kochanków została zniszczona, a oni porwani. Wykonawcę wydarzenia porusza ten konflikt. Po starciu opuszcza osadę na zawsze w poszukiwaniu czegoś innego.
[c] 4-6
[d] Strona 6: mężczyzna spędził lata tragicznych tortur dla dobra ukochanej. Każda rana tylko wzmocniła determinację mężczyzny. Otrzymujesz na stałe +1 do szybkości i zaburzenia: <b>Niepokój</b> oraz <b>Straumatyzowany</b>.
[c] 7+
[dt] Strona 9: mężczyzna uciekł, i nigdy nie wrócił. Wiedział, że gdyby to zrobił skazałby swoją ukochaną. Postanowił, że najlepiej będzie gdy zniknie z pamięci, by chronić nieliczne uśmiechy, które zainspirowały jego istnienie. Otrzymujesz +1 odwagi i sztukę walki <b>Ostatni Ocalały</b>.

[>d]
[c] Nie czytaj
[dt] Ocalali ruszają dalej mocno skonfudowani. 

[>d]
[c] Nie #
[dt] Ocalali ruszają dalej mocno skonfudowani. 
`,

  94: `94 | Obrzydliwe odpady
Ocalali natrafiają na skrawek paskudnie zniszczonej ziemi. Kamienne twarze są popękane, a szczątki porozrzucane wokół. W okolicy rozlewają się stosy toksycznie pachnącego łajna i na wpół strawionych wnętrzności. Ocalali zbliżają się, oprócz Ocalałych z zaburzeniem <b>Wrażliwy</b>, którzy nie podejdą ani kroku bliżej.

<b>Obłąkani</b> Ocalali <b>spożywają</b> to, co znaleźli i chorują; Otrzymują żeton siły -1. Nieobłąkani Ocalali powstrzymują się i badają odpady. Każdy z nich otrzymuje +1 do odwagi, rzuca 1k10 i dodaje swoją wiedzę.

[TA] 1k10
[td] Każdy nie obłąkany Ocalały - Badaj
[c] 1-2
[d] Bezmyślnie przesiewasz stosy łajna. Krztusisz się w niekontrolowanych odruchach. Otrzymujesz żeton -1 siły.
[c] 3-8
[d] Masz oczy wypełnione łzami, ale twoje obrzydliwe poszukiwania się opłacają. Znajdujesz 1 losowy podstawowy zasób, ale to wydarzenie zadaje tobie 1 obrażenie w losowe miejsce trafienia.
[c] 9+
[dt] Twoja intuicja się opłaca! Znajdujesz 1 losowy podstawowy zasób.
`,

  95: `95 | Ponury i odmrożony
Martwa cisza unosi się w powietrzu. Atmosfera staje się gęsta od zmartwień, a Ocalali zachowują się nerwowo. Pojawia się przenikliwy nieprzyjemny chłód, przed którym nie ma schronienia.
Ocalali przytulają się, by poczuć ciepło, drżą oddychając głośno. Jeśli któryś z Ocalałych nie ma pancerza na każdym miejscu trafienia, traci przetrwanie równe poziomowi potwora na łowach.
`,

  96: `96 | Tajemniczy nieznajomy
Z ciemności przed ocalałymi wyłania się postać spowita peleryną. Jej źle dopasowane ubranie powiewa wokół, a jej mozolny chód pozostawia ciemne, czarno-oleiste kałuże w kamiennych ustach na ziemi.
Wykonawca wydarzenia podchodzi do nieznajomego i rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1-2
[d] Podejście obcego wypełnia uszy bolesnymi zakłóceniami. Nagle błyska światło i słychać huk. Padasz na ziemię, ściśnięty ostrym bólem klatki piersiowej. Otrzymujesz ciężki uraz korpusu <b>Pęknięta śledziona</b>. To wydarzenie zadaje 2 obrażenia umysłom wszystkim <b>niegłuchym</b> Ocalałym.
[c] 3-4
[d] Nieznajomy zafalował, zapadając się w sobie, znikając i pojawiając gdy podchodzisz. Kiedy stajesz przed nim - znika, i nie możesz sobie przypomnieć jego wyglądu. Otrzymujesz 1 żeton krwawienia i zapominasz 1 sztukę walki według swojego wyboru.
[c] 5-6
[d] Gdy jesteś blisko nieznajomego, zdajesz sobie sprawę, że on unosi się w powietrzu! Ledwo słyszalne suche zgrzytanie dochodzące od postaci, wydaje się przypominać... śmiech? Po odejściu nieznajomego wracasz do grupy, blady jak wosk, odmawiając mówienia o tym, co widziałeś. To wydarzenie zadaje 3 obrażenia twojemu umysłowi.
[c] 7-8
[d] Nieznajomy podnosi ramiona i porusza się na spotkanie gdy podchodzisz do niego. Spod fałd peleryny wyziera fragment fioletowej, łuszczącej się skóry. Pazur rozciąga się od rękawa i delikatnie gładzi twój policzek pozostawiając warstwę lepkiego płynu. Wycierając osad, doznajesz dziwnego uczucia w dotyku. Otrzymujesz +1 przetrwania oraz +1 wiedzy.
[c] 9+
[d<]

Nieznajomy każe ci zorganizować test siły pośród Ocalałych. Każdy z ocalałych musi rzucić 1k10 (remisujący rozstrzygają rzutami między sobą). Zdobywca najwyższego wyniku wygrywa walkę. 
[TO] 1k10
[td] Wybierz zwycięzcę
[c] Zwycięzca wybrany
[dt] Nieznajomy zaznacza jego twarz lśniącym szponem, nadając mu zdolność <b>Żelazna wola</b>: Nie może zostać powalonym. Będąc odrzucanym odległość odrzutu zmniejsza się do 1. Odrzucenie = 1. Zanotuj tę umiejętność. Wszyscy Ocalali tracą po 4 punkty przetrwania, po wyczerpującej walce.

[>d]
[T]
`,

  97: `97 | Żywy kamień
Ziemia nagle porusza się i wybrzusza gwałtownie w górę! Ocalali łapią się pleców gigantycznego stworzenia, które leży pod ich nogami. Ocalali trwożliwie przywierają do niego w absolutnym przerażeniu. 
Wybierz Ocalałego by wspiął się na szczyt olbrzyma i zobaczył co na was czeka. Rzuć 1k10.

[TO] 1k10
[td] Wybrano Ocalały
[c] 1
[d] Twój ruch irytuje olbrzyma który strząsa Ocalałych! To wydarzenie zadaje wszystkim Ocalałym k5 obrażeń w losowe miejsce trafienia. Zarchiwizuj cały <b>kruchy</b> ekwipunek. 
[c] 2-7
[d] Docierasz na szczyt gdzie masz doskonały punkt widokowy, by zobaczyć świat. Gdyby tylko było wystarczająco dużo światła by go ujrzeć. Ustaw swój obłęd na 0. Gigant idzie dokładnie tam, gdzie zmierzasz! Natychmiast rozpoczynacie Starcie.
[c] 8+
[dt] Odkrywasz dziwaczne stworzenie o odwróconej twarzy starannie wyrzeźbione w grzbiecie olbrzyma. Zrzucasz kawałki potłuczonych kamiennych twarzy którymi pracowano. Każdy Ocalały łapie fragment, otrzymując 1 początkowy ekwipunek <b>odłamek podłoża</b>. W końcu olbrzym znów przysiada na ziemi. Zsuwacie się z niego i odkrywacie swoją zdobycz! Potwór wpada w waszą <b>pułapkę</b>!
`,

  98: `98 | Krwawe oczy

[img] 98 # width:35%

Ocalali znajdują ślady krwi. Zebrała sie w oczodołach kamiennych twarzy na ziemi. Krew jest jeszcze wciąż ciepła.
Wykonawca wydarzenia może przeprowadzić <b>badanie</b> i rzucić 1k10 lub zignorować ślady i zakończyć to wydarzenie.

[TO] 1k10
[td] Wykonawca wydarzenia - Badanie
[c] 1-3
[d] Jeden z was osuwa się pod koniec śladów, krwawiąc straszliwie. Wybierz losowego Ocalałego, Otrzymuje 3 żetony krwawienia. To wydarzenie zadaje umysłom wszystkich Ocalałych 3 obrażenia.
[c] 4-6
[d] Ślady prowadzą do ogromnego pudła. W środku uwięziony jest młody, rudowłosy Ocalały. Zyskujesz +1 populacji. Rzeźby zdobiące pudło są nawiedzone. To wydarzenie zadaje umysłom wszystkich Ocalałych 3 obrażenia.
[c] 7+
[dt] Ślady prowadzą wprost do twojej zdobyczy! Potwór jest ranny po wcześniejszej walce. Natychmiast rozpoczynacie starcie. Na początku starcia potwór otrzymuje 1 ranę.
`,

  99: `99 | Krata

[img] 99

Ocalali zbliżają się do ogromnej kraty w ciemności. Nie jest do niczego przymocowana i nie blokuje drogi. Możecie ją obejść.

[TO] Sprawdź
[td] Czy osada ma <b>klucz do kraty</b>?
[c] Tak #Klucz do kraty
[d<]

Ocalali mogą wymazać klucz z rubryki arkusza osady i użyć go.
[TO] Wybór
[td] Używasz klucza?
[c] Tak #Otwórz kratę
[d<]

Każdy Ocalały otrzymuje +1 do odwagi. Krata otwiera się skrzypiąc, a Ocalali przechodzą przez nią. Głęboki mrok czeka w środku na Ocalałych.
[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Krata z nagłym trzaskiem zamyka się za Ocalałymi, a światła ich latarni zaczynają słabnąć. Ostatnią rzeczą, jaką widzą, jest grymas strachu na twarzach innych, kiedy ciemność zamyka się nad nimi. Ocalali umierają.
[c] 2+
[dt] U ich stóp leży zdobny w ornamenty pusty tygiel w kształcie potężnej broni. Otrzymujesz dziwny zasób <b>Perfekcyjny tygiel</b>. Jeśli macie kowala w swojej osadzie, możecie teraz wyprodukować <b>Perfekcyjnego zabójcę</b>.

[>d]
[c] Nie #Obejdź do okoła
[dt] Rzuć ponownie na liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.

[>d]
[c] Nie #Obejdź do okoła
[d] Rzuć ponownie na liście wydarzeń na łowach, zanim poruszycie się na planszy łowów.
[T]
`,

  100: `100 | Finał

Olbrzymi, metaliczny dźwięk rozbrzmiewa z oddali. Wszystkich Ocalałych przeszywa przerażenie. To wydarzenie zadaje 2 obrażenia ich umysłom.

[TO] Wybór
[td] Podążasz za dźwiękiem?
[c] Tak #Podążasz za dźwiękiem
[d<]

Każdy Ocalały otrzymuje +1 odwagi i ostrożnie zbliża się do źródła dźwięku. Podczas marszu, mijają roztrzaskane ciała dziwnych bestii.

[TO] Sprawdź
[td] Czy jakiś Ocalały ma wiedzę na 3+?
[c] Tak #wiedza 3+
[d<]

Ocalali podążają tropem trupów.

[img] 100

Po dotarciu do ogromnego kowadła, Ocalali widzą gigantycznego, jednookiego rycerza, którego pancerz w kolorze węgla odbija światło ich latarń. 
Wykonawca wydarzenia rzuca 1k10.

[TO] 1k10
[td] Wykonawca wydarzenia
[c] 1
[d] Rycerz wpatruje się w Ocalałych. Wszyscy Ocalali posiadający mniej niż 3 odwagi padają martwi. Reszta Ocalałych ucieka w przerażeniu.
[c] 2-8
[d] Rycerz zbliża się do Ocalałych. W jednej chwili odrywa losowemu Ocalałemu ucho - otrzymuje on 1 żeton krwawienia. Następnie, uderza w kowadło, nagły huk i błysk oślepia Ocalałych. Kiedy otwierają oczy, rycerz znika, a ekwipunek <b>Stalowy miecz</b> i <b>Stalowa tarcza leżą na jego miejscu. Grupa dzieli ekwipunek między sobie.
[c] 9+
[dt] Rycerz rozbija na kowadle przedmiot trzymany w dłoniach. Kiedy stopiony, pomarańczowy obiekt się chłodzi zmienia się w potężny młot z lwiej paszczy. Rycerz wkłada go w ręce Ocalałego z największą odwagą (remisujący rozstrzygają to rzutami między sobą). Otrzymuje rzadki ekwipunek <b>Młot gromu</b>. Elektryczne napięcie przebiega poprzez jego ciało, łącząc broń i Ocalałego na zawsze.
[>d]
[c] Nie #Mniej niż 3 wiedzy
[dt] Zbierasz 3 losowe podstawowe zasoby ze zwłok i kończysz to wydarzenie.

[>d]
[c] Nie #Wycofaj się
[dt] Ocalali panikują i uciekają w przeciwnym kierunku. Zakończ to wydarzenie i przesuń Ocalałych 2 pola w tył na planszy łowów.
`,
}

module.exports = {
  random_hunt_events,
}
