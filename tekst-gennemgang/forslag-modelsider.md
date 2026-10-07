# Forslag til skabelonsætninger på model- og mærkesider

Værste først, vægtet efter antal sider. Pladsholdere: ‹bil› = modelnavn, ‹mærke› = mærkenavn,
‹udbyder› = forhandler eller leasingselskab, # = tal. Linjenumrene er fra generate-pages.js den
4. oktober 2026. Filen blev ændret, mens jeg læste den, så tjek linjerne igen med Grep.

### 1. [58 sider: 24 + 13 + 12 + 9] generate-pages.js:1560-1561
- **Før:** Af de 1 tilbud er 1 operationelt og 0 finansielle.
- **Efter:** Med 1 tilbud: "Tilbuddet er operationelt." eller "Tilbuddet er finansielt." Når alle har samme type: "Alle # tilbud er finansielle." eller "Alle # tilbud er operationelle." Ellers som nu: "Af de # tilbud er # operationelle og # finansielle."
- **Hvorfor:** Skabelonen skal være korrekt dansk for alle værdier. "Af de 1 tilbud" og "0 finansielle" er forkert eller tomt. Det kræver tre grene i koden og ingen nye fakta.

### 2. [62 sider] generate-pages.js:1843
- **Før:** Målene gælder den variant der står øverst i tabellen og er hentet fra producentens eller forhandlerens egen specifikation , læst 2026-09-22.
- **Efter:** Målene gælder den udgave af bilen, der står øverst i tabellen. Vi har hentet dem fra producentens eller forhandlerens egen specifikation den 22. september 2026.
- **Hvorfor:** Regel 2 ("variant" er datamodellens ord), regel 6 ("læst" er kancellisprog), regel 4 (passiv) og regel 8 (to pointer). Datoen står i ISO-format, så brug `datoLang(mk.dato)`, ligesom FAQ'en gør. Der mangler også et komma før "der".

### 3. [62 sider] generate-pages.js:2051
- **Før:** Vi indregner ikke skønnede omkostninger for service, dæk, forsikring, ejerafgift eller vejhjælp, heller ikke hvor udbyderen undlader at oplyse om dem; de beløb afhænger af din virksomhed, og vi vil ikke lade et gæt afgøre, hvilket tilbud der ser billigst ud.
- **Efter:** Vi regner ikke med et skøn for service, dæk, forsikring, ejerafgift eller vejhjælp, heller ikke når forhandleren eller leasingselskabet ikke oplyser beløbene. De afhænger af din virksomhed, og vi vil ikke lade et gæt afgøre, hvilket tilbud der ser billigst ud.
- **Hvorfor:** Regel 8 (én lang sætning med semikolon og tre pointer), regel 6 ("indregner skønnede omkostninger" og "undlader at oplyse om" er kancellisprog) og regel 2 ("udbyderen" i løbende tekst).

### 4. [62 sider] generate-pages.js:2051
- **Før:** Månedsprisen inkl. udbetaling er vores egen sammenstilling af to tal udbyderen har oplyst — månedsydelsen og førstegangsydelsen fordelt over løbetiden.
- **Efter:** Månedsprisen inkl. udbetaling har vi selv regnet ud. Vi har lagt månedsydelsen sammen med førstegangsydelsen fordelt over løbetiden, og begge tal kommer fra forhandleren eller leasingselskabet.
- **Hvorfor:** Regel 4 ("sammenstilling" er et substantiv i stedet for et verbum), regel 8 (tankestreg-forklaring) og regel 2 ("udbyderen").

### 5. [62 sider] generate-pages.js:2053
- **Før:** Løbetid, kilometertal og leasingtype står derfor ved hvert tilbud, og de skal læses med: en lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, uden at aftalen er billigere.
- **Efter:** Derfor kan du ved hvert tilbud se løbetid, kilometertal og leasingtype, og dem skal du tage med, når du sammenligner. En lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, men aftalen bliver ikke billigere af det.
- **Hvorfor:** Regel 5 (omvendt ordstilling, samme mønster som "Hvad hvert tilbud indeholder, står på modelsiden" i før/efter-tabellen), regel 8 (kolon og to pointer) og regel 4 ("skal læses med" er passiv og uklar).

### 6. [59 sider] generate-pages.js:939-940
- **Før:** Pris er det billigste aktuelle tilbud med udbetalingen fordelt — Berlingo koster fra 2.495 kr./md.
- **Efter:** Prisen er det billigste tilbud med udbetalingen fordelt over løbetiden. ‹bil› koster fra # kr. om måneden.
- **Hvorfor:** Regel 2 ("aktuelle tilbud" er nævnt direkte i reglen), regel 8 (tankestreg) og regel 1 ("Pris er" uden artikel lyder som telegramstil). Uden `mig` slutter sætningen bare efter "løbetiden.".

### 7. [62 sider] generate-pages.js:522
- **Før:** Modellen kvalificerer til 20 af vores guider.
- **Efter:** Modellen er med i 20 af vores guider.
- **Hvorfor:** Regel 2 ("kvalificerer til" er datamodellens ord og en anglicisme). Læseren tænker "står på listen".

### 8. [76 sider] generate-pages.js:2050 (samme ordlyd i 7215)
- **Før:** Priserne er indsamlet fra udbydernes egne prislister og annoncer på de datoer der står i tabellen.
- **Efter:** Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer på de datoer, der står i tabellen.
- **Hvorfor:** Regel 2 ("udbydernes" i løbende tekst) og regel 4 (passiv "er indsamlet"). Der mangler også et komma før "der".

### 9. [63 sider] generate-pages.js:2053 (samme sætning i 4858)
- **Før:** Et tilbud på 60 måneder omregnet til 36 er ikke et tilbud, nogen udbyder giver — det ville være et tal, vi havde opfundet.
- **Efter:** Regner vi et tilbud på 60 måneder om til 36, får du en pris, vi selv har fundet på. Ingen forhandler eller leasingselskab tilbyder den.
- **Hvorfor:** Regel 8 (tankestreg og to pointer i én sætning), regel 1 (participiet "omregnet til" erstatter en ledsætning) og regel 2 ("udbyder").

### 10. [62 sider] generate-pages.js:1553
- **Før:** Løbetid, kilometer og hvad der er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se løbetid, kilometer og hvad der følger med.
- **Hvorfor:** Regel 5. Det er præcis mønstret fra før/efter-tabellen ("På modelsiden kan du se, hvad der følger med").

### 11. [62 sider] generate-pages.js:2053
- **Før:** Vi viser kun tilbud, der er aktuelle hos udbyderen, og vi omregner derfor ikke løbetid og kilometertal til fælles vilkår.
- **Efter:** Vi viser kun tilbud, som forhandleren eller leasingselskabet giver lige nu. Derfor regner vi ikke løbetid og kilometertal om, så tilbuddene får samme vilkår.
- **Hvorfor:** Regel 2 ("aktuelle", "udbyderen") og regel 3 ("fælles vilkår" er et samlebegreb). To pointer bliver til to sætninger (regel 8).

### 12. [63 sider] generate-pages.js:2054
- **Før:** Moms-, afgifts- og skatteforhold afhænger af din virksomheds konkrete forhold.
- **Efter:** Hvordan moms, afgift og skat falder ud, afhænger af din virksomhed.
- **Hvorfor:** Regel 3 ("-forhold" er et samlebegreb) og regel 6 ("konkrete forhold" er kancellisprog). Ordet "forhold" står to gange i samme sætning.

### 13. [62 sider] generate-pages.js:1562
- **Før:** Ved operationel leasing afleveres bilen; ved finansiel leasing skal restværdien indfries.
- **Efter:** Ved operationel leasing afleverer du bilen. Ved finansiel leasing skal du indfri restværdien.
- **Hvorfor:** Regel 4 (to passiver, intet "du"), og semikolonet skal være punktum (regel 8).

### 14. [14 sider, 9 + 5 på mærkesider] generate-pages.js:7190-7191
- **Før:** Farizon-tilbuddene på siden oplyser tilsammen 80 % af de fem driftsposter. Det er et mål for, hvor færdige tilbuddene er — ikke for om priserne er gode.
- **Efter:** ‹mærke›-tilbuddene på siden oplyser tilsammen # % af det, vi tjekker for: service, dæk, forsikring, ejerafgift og vejhjælp. Tallet viser, hvor færdige tilbuddene er, og ikke om priserne er gode.
- **Hvorfor:** Regel 3 ("driftsposter" er forbudt med navns nævnelse) og regel 8 (tankestreg). De fem poster er de samme, som linje 6776 nævner.

### 15. [14 sider, 9 + 5] generate-pages.js:6773-6774
- **Før:** Tilbuddene på Farizon oplyser 80 % af de fem driftsposter mod 56 % for alle tilbud på siden.
- **Efter:** Tilbuddene på ‹mærke› oplyser # % af de fem udgifter, vi tjekker for (service, dæk, forsikring, ejerafgift og vejhjælp). For alle tilbud på siden er tallet # %.
- **Hvorfor:** Regel 3 ("driftsposter") og regel 8 (sammenligningen med "mod" pakker to tal i én sætning).

### 16. [59 sider] generate-pages.js:1850-1851
- **Før:** Danske parkeringskældre ligger typisk mellem 1,90 og 2,10 m, så tallet afgør om bilen kan køre ind.
- **Efter:** Frihøjden i danske parkeringskældre er typisk mellem 1,90 og 2,10 m, så højden afgør, om bilen kan komme ind.
- **Hvorfor:** Regel 9 (tallet mangler, hvad det måler: kældrene "ligger" ikke på 1,90 m). "Frihøjde" er ordet, der allerede bruges i guiden (linje ~4949). Der mangler også et komma før "om".

### 17. [59 sider] generate-pages.js:1851
- **Før:** Tagbøjler, antenne og lastholdere lægger oveni.
- **Efter:** Tagbøjler, antenne og lastholdere gør bilen højere.
- **Hvorfor:** Regel 1 og 3. "Lægger oveni" mangler et objekt, og læseren skal selv regne ud, at det er højden.

### 18. [76 sider] generate-pages.js:2050
- **Før:** De er vejledende og gælder de vilkår der er oplyst ved hvert tilbud.
- **Efter:** Priserne er vejledende og gælder med de vilkår, der står ved hvert tilbud.
- **Hvorfor:** Regel 6 og 4. "Gælder de vilkår" er ugrammatisk ("gælder med" eller "gælder for"), og "er oplyst" er passiv. Der mangler også et komma før "der".

### 19. [42 sider: 26 + 16] generate-pages.js:1568
- **Før:** Ja: Citroën Jumper, fra 3.178 kr./md. med udbetalingen fordelt, hos Citroën.
- **Efter:** Ja, den hedder ‹bil›. Den koster fra # kr. om måneden med udbetalingen fordelt over løbetiden hos ‹udbyder›.
- **Hvorfor:** Regel 1 (telegramstil med kolon og kommaer uden verbum). Det er et FAQ-svar, der skal kunne stå alene. Uden `rm` slutter svaret efter første sætning.

### 20. [62 sider] generate-pages.js:1550
- **Før:** Det billigste tilbud, vi har samlet (opdateret 28. september 2026), er 2.908 kr. om måneden ekskl. moms.
- **Efter:** Det billigste tilbud, vi har fundet, koster # kr. om måneden ekskl. moms. Prisen er fra den #. ‹måned› #.
- **Hvorfor:** Regel 8 (parentesen afbryder sætningen) og regel 9 (datoen skal stå med "den"). "Ekskl. moms" bliver stående, fordi FAQ-svaret skal kunne citeres alene. Uden `prisDato` falder sætning nr. 2 væk.

### 21. [61 sider] generate-pages.js:939
- **Før:** Konkurrenterne i samme klasse, billigste først.
- **Efter:** Her er konkurrenterne i samme klasse med den billigste først.
- **Hvorfor:** Regel 1. Manchetten er løbende tekst og ikke en tabeloverskrift, så den skal have et verbum.

### 22. [42 sider] generate-pages.js:1535
- **Før:** Regn diesel mod el ud for jeres kørsel — de to modeller er valgt på forhånd.
- **Efter:** Regn diesel mod el ud for din egen kørsel i elberegneren, hvor de to modeller allerede er valgt.
- **Hvorfor:** Regel 8 (tankestreg). Sitet skriver "du", så "jeres" falder uden for. Linket kan blive på "Regn diesel mod el ud for din egen kørsel".

### 23. [42 sider] generate-pages.js:1569
- **Før:** De to står side om side på siden, og elberegneren regner forskellen ud med strøm, brændstof og ejerafgift.
- **Efter:** På modelsiden kan du se de to biler side om side, og elberegneren regner forskellen ud med strøm, brændstof og ejerafgift.
- **Hvorfor:** Regel 5 og regel 1. "Side om side på siden" er en klodset gentagelse, og "De to" uden navneord er uklart i et FAQ-svar, der står alene.

### 24. [42 sider] generate-pages.js:1531
- **Før:** Her står de side om side med det billigste aktuelle tilbud og producentens tal.
- **Efter:** Her kan du se dem side om side med det billigste tilbud og producentens tal.
- **Hvorfor:** Regel 2 ("aktuelle tilbud" er nævnt direkte i reglen).

### 25. [40 sider] generate-pages.js:1764
- **Før:** Ingen restværdi at hæfte for.
- **Efter:** Du hæfter ikke for nogen restværdi.
- **Hvorfor:** Regel 1. Kortet til finansiel leasing ved siden af har en hel sætning ("Der er aftalt en restværdi, som du hæfter for …"), så de to kort bør have samme form.

### 26. [29 sider] varebiler.json:79 (tilbudsnote, gentaget ved alle Leasing.dk-tilbud)
- **Før:** Udbyderen oplyser, at service og reparation er inkluderet, og at dæk, forsikring og grøn ejerafgift ikke er.
- **Efter:** Ifølge Leasing.dk er service og reparation inkluderet, men dæk, forsikring og grøn ejerafgift er ikke.
- **Hvorfor:** Regel 2 ("Udbyderen" i løbende tekst). Navnet står allerede i noten, så det er mere præcist at bruge det.

### 27. [21 sider] varebiler.json:98 (tilbudsnote, gentaget ved alle Kassebil.dk-tilbud)
- **Før:** De er derfor ikke inkluderet, men udbyderen forholder sig til dem.
- **Efter:** De er derfor ikke med i prisen, men Kassebil.dk nævner dem, så de tæller med i kolonnen Oplyst.
- **Hvorfor:** Regel 2 ("udbyderen") og regel 6 ("forholder sig til" er kancellisprog). Samme vending står i generate-pages.js ved 2021, 3443, 5095, 5146, 6572, 6661 og 7288.

### 28. [19 sider] varebiler.json:79 (tilbudsnote, Leasing.dk)
- **Før:** Her står den billigste målt på samlet pris pr. md.
- **Efter:** Vi viser den billigste af dem, målt på samlet pris pr. måned.
- **Hvorfor:** Regel 1 og 4. "Her står" har intet subjekt for "den", og forkortelsen "pr. md." hører til i tabeller. Sætningen før ("Leasing.dk viser 5 varianter på modellen") bryder også regel 2 ("varianter" → "udgaver").

### 29. [31 sider: 19 + 12] generate-pages.js:2881 og 6851
- **Før:** En brugt bil har ingen førstegangsydelse og ingen bindingsperiode — til gengæld står du selv med værditabet.
- **Efter:** En brugt bil har ingen førstegangsydelse og ingen bindingsperiode, men du står selv med værditabet.
- **Hvorfor:** Regel 8 (tankestreg). I 6851 står telegramudgaven "Ingen førstegangsydelse og ingen binding — til gengæld …", som også mangler et verbum (regel 1). Brug samme sætning begge steder.

### 30. [14 sider] generate-pages.js:7180
- **Før:** Sorteret efter samlet pris pr. måned — månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Efter:** Vi har sorteret tilbuddene efter den samlede pris pr. måned, som er månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 1 (intet verbum) og regel 8 (tankestreg).

### 31. [14 sider] generate-pages.js:7180
- **Før:** Løbetiderne er ikke omregnet, så de skal læses med.
- **Efter:** Vi har ikke regnet løbetiderne om, så se på løbetiden, når du sammenligner.
- **Hvorfor:** Regel 4 (to passiver), og "skal læses med" er uklart for læseren.

### 32. [14 sider] generate-pages.js:7153
- **Før:** Alle priser ekskl. moms, med kilde og indsamlingsdato på hvert tal.
- **Efter:** Alle priser er uden moms, og ved hvert tal står kilden og den dato, vi hentede det.
- **Hvorfor:** Regel 1 (intet verbum) og regel 9, hvor formuleringen "Alle priser er uden moms" er reglens eget eksempel. "Indsamlingsdato" er datamodellens ord (regel 2).

### 33. [11 + 14 sider] generate-pages.js:6954
- **Før:** 2 udbydere har aktuelle tilbud på Fiat, billigste først. (efterfulgt af: Pris er med udbetalingen fordelt over løbetiden.)
- **Efter:** Der er tilbud på ‹mærke› fra # forhandlere og leasingselskaber, og den billigste står først. Prisen er med udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 2 ("udbydere" og "aktuelle" i løbende tekst) og regel 1 ("billigste først" og "Pris er" er telegramstil). Ental kræver sin egen gren: "fra 1 forhandler eller leasingselskab".

### 34. [9 sider] generate-pages.js:6781
- **Før:** Det er over gennemsnittet, altså tilbud hvor en større del af den endelige pris kan regnes ud på det foreliggende grundlag.
- **Efter:** Det er over gennemsnittet, så tilbuddene siger mere om, hvad bilen ender med at koste.
- **Hvorfor:** Regel 6 ("på det foreliggende grundlag" er kancellisprog) og regel 4 (passiv). Grenen ved 6778 ("… dårlige — men at der mangler mere, før den endelige pris kan opgøres") har samme problem med tankestreg og "opgøres".

### 35. [11 sider] generate-pages.js:6989
- **Før:** Hvad skiftet koster i kroner, regner elberegneren ud, og hvad det koster i tid, viser ladetidsberegneren .
- **Efter:** Elberegneren regner ud, hvad skiftet koster i kroner, og ladetidsberegneren viser, hvad det koster i tid.
- **Hvorfor:** Regel 5 (omvendt ordstilling to gange i samme sætning).

### 36. [13 sider] generate-pages.js:6761-6763
- **Før:** På rumfang er tallet 318 kr. pr. m³ mod 668 kr. i median. De to mål rangerer ikke ens: en varebil kan have plads uden at måtte bære, og omvendt.
- **Efter:** Målt pr. m³ lastrum er tallet # kr. om måneden mod # kr. i median. De to mål giver ikke samme rækkefølge, for en varebil kan have god plads uden at måtte laste meget, og omvendt.
- **Hvorfor:** Regel 2 ("rangerer" er en anglicisme), regel 9 ("pr. m³" mangler "om måneden", som sætningen før har) og regel 8 (kolon). Samme vending står i guiden ved ~6602.

### 37. [14 sider: 9 + 5] generate-pages.js:7215
- **Før:** Tekniske mål er fra Farizon-prislister og gælder den variant der står på modelsiden.
- **Efter:** De tekniske mål kommer fra ‹mærke›-prislister og gælder den udgave af bilen, der står på modelsiden.
- **Hvorfor:** Regel 2 ("variant"). Der mangler også et komma før "der".

### 38. [11 sider] generate-pages.js:5185 (samme ved 6934, 5169 og 5273)
- **Før:** Tallet gælder den variant, målene på modelsiden er oplyst for.
- **Efter:** Tallet gælder den udgave af bilen, som målene på modelsiden er for.
- **Hvorfor:** Regel 2 ("variant") og regel 4 ("er oplyst for" er passiv).

### 39. [9 sider] varebiler.json:3106 (tilbudsnote, også 4230, 4986, 5140 m.fl.)
- **Før:** Forlænget 01-10-2026: importøren viser samme tal med „gælder til 31.12.2026“.
- **Efter:** Tilbuddet blev forlænget den 1. oktober 2026, hvor importøren viste samme tal med „gælder til 31.12.2026“.
- **Hvorfor:** Regel 1 (telegramstil med kolon) og regel 6/9 (datoen skal stå som "den 1. oktober 2026"). Citatet står uændret. Bemærk også "via Opel Finans.10.2026" i noten ved varebiler.json:5140, som ligner en fejlindsættelse.

### 40. [8 sider] garanti.json:793 (og 11 andre steder i samme fil)
- **Før:** Ikke taxa, køreskole, ombyggede biler, udrykning. aar/km er maksimum: samlet op til 8 år eller 200.000 km (hvad der kommer først).
- **Efter:** Garantien gælder ikke for taxaer, køreskolebiler, ombyggede biler og udrykningskøretøjer. Den kan højst vare 8 år eller 200.000 km i alt, alt efter hvad der kommer først.
- **Hvorfor:** Regel 2. "aar/km" er et feltnavn fra datamodellen, som er sluppet ud på siden. Regel 1 (første sætning har intet verbum) og regel 7 (skråstreg).
