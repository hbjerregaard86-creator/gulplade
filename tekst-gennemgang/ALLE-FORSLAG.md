# Sproglige forslag til skabelonerne (04-10-2026)

137 forslag fra fem redaktør-agenter, sorteret efter hvor mange sider sætningen står på inden for hver gruppe. Skriv numrene på dem, du IKKE vil have, så indfører jeg resten på en preview.

---

## Modelsider


Værste først, vægtet efter antal sider. Pladsholdere: ‹bil› = modelnavn, ‹mærke› = mærkenavn,
‹udbyder› = forhandler eller leasingselskab, # = tal. Linjenumrene er fra generate-pages.js den
4. oktober 2026. Filen blev ændret, mens jeg læste den, så tjek linjerne igen med Grep.

### m1. [58 sider: 24 + 13 + 12 + 9] generate-pages.js:1560-1561
- **Før:** Af de 1 tilbud er 1 operationelt og 0 finansielle.
- **Efter:** Med 1 tilbud: "Tilbuddet er operationelt." eller "Tilbuddet er finansielt." Når alle har samme type: "Alle # tilbud er finansielle." eller "Alle # tilbud er operationelle." Ellers som nu: "Af de # tilbud er # operationelle og # finansielle."
- **Hvorfor:** Skabelonen skal være korrekt dansk for alle værdier. "Af de 1 tilbud" og "0 finansielle" er forkert eller tomt. Det kræver tre grene i koden og ingen nye fakta.

### m2. [62 sider] generate-pages.js:1843
- **Før:** Målene gælder den variant der står øverst i tabellen og er hentet fra producentens eller forhandlerens egen specifikation , læst 2026-09-22.
- **Efter:** Målene gælder den udgave af bilen, der står øverst i tabellen. Vi har hentet dem fra producentens eller forhandlerens egen specifikation den 22. september 2026.
- **Hvorfor:** Regel 2 ("variant" er datamodellens ord), regel 6 ("læst" er kancellisprog), regel 4 (passiv) og regel 8 (to pointer). Datoen står i ISO-format, så brug `datoLang(mk.dato)`, ligesom FAQ'en gør. Der mangler også et komma før "der".

### m3. [62 sider] generate-pages.js:2051
- **Før:** Vi indregner ikke skønnede omkostninger for service, dæk, forsikring, ejerafgift eller vejhjælp, heller ikke hvor udbyderen undlader at oplyse om dem; de beløb afhænger af din virksomhed, og vi vil ikke lade et gæt afgøre, hvilket tilbud der ser billigst ud.
- **Efter:** Vi regner ikke med et skøn for service, dæk, forsikring, ejerafgift eller vejhjælp, heller ikke når forhandleren eller leasingselskabet ikke oplyser beløbene. De afhænger af din virksomhed, og vi vil ikke lade et gæt afgøre, hvilket tilbud der ser billigst ud.
- **Hvorfor:** Regel 8 (én lang sætning med semikolon og tre pointer), regel 6 ("indregner skønnede omkostninger" og "undlader at oplyse om" er kancellisprog) og regel 2 ("udbyderen" i løbende tekst).

### m4. [62 sider] generate-pages.js:2051
- **Før:** Månedsprisen inkl. udbetaling er vores egen sammenstilling af to tal udbyderen har oplyst — månedsydelsen og førstegangsydelsen fordelt over løbetiden.
- **Efter:** Månedsprisen inkl. udbetaling har vi selv regnet ud. Vi har lagt månedsydelsen sammen med førstegangsydelsen fordelt over løbetiden, og begge tal kommer fra forhandleren eller leasingselskabet.
- **Hvorfor:** Regel 4 ("sammenstilling" er et substantiv i stedet for et verbum), regel 8 (tankestreg-forklaring) og regel 2 ("udbyderen").

### m5. [62 sider] generate-pages.js:2053
- **Før:** Løbetid, kilometertal og leasingtype står derfor ved hvert tilbud, og de skal læses med: en lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, uden at aftalen er billigere.
- **Efter:** Derfor kan du ved hvert tilbud se løbetid, kilometertal og leasingtype, og dem skal du tage med, når du sammenligner. En lang løbetid fordeler udbetalingen over flere måneder og giver et lavere månedstal, men aftalen bliver ikke billigere af det.
- **Hvorfor:** Regel 5 (omvendt ordstilling, samme mønster som "Hvad hvert tilbud indeholder, står på modelsiden" i før/efter-tabellen), regel 8 (kolon og to pointer) og regel 4 ("skal læses med" er passiv og uklar).

### m6. [59 sider] generate-pages.js:939-940
- **Før:** Pris er det billigste aktuelle tilbud med udbetalingen fordelt — Berlingo koster fra 2.495 kr./md.
- **Efter:** Prisen er det billigste tilbud med udbetalingen fordelt over løbetiden. ‹bil› koster fra # kr. om måneden.
- **Hvorfor:** Regel 2 ("aktuelle tilbud" er nævnt direkte i reglen), regel 8 (tankestreg) og regel 1 ("Pris er" uden artikel lyder som telegramstil). Uden `mig` slutter sætningen bare efter "løbetiden.".

### m7. [62 sider] generate-pages.js:522
- **Før:** Modellen kvalificerer til 20 af vores guider.
- **Efter:** Modellen er med i 20 af vores guider.
- **Hvorfor:** Regel 2 ("kvalificerer til" er datamodellens ord og en anglicisme). Læseren tænker "står på listen".

### m8. [76 sider] generate-pages.js:2050 (samme ordlyd i 7215)
- **Før:** Priserne er indsamlet fra udbydernes egne prislister og annoncer på de datoer der står i tabellen.
- **Efter:** Vi har hentet priserne fra forhandlernes og leasingselskabernes egne prislister og annoncer på de datoer, der står i tabellen.
- **Hvorfor:** Regel 2 ("udbydernes" i løbende tekst) og regel 4 (passiv "er indsamlet"). Der mangler også et komma før "der".

### m9. [63 sider] generate-pages.js:2053 (samme sætning i 4858)
- **Før:** Et tilbud på 60 måneder omregnet til 36 er ikke et tilbud, nogen udbyder giver — det ville være et tal, vi havde opfundet.
- **Efter:** Regner vi et tilbud på 60 måneder om til 36, får du en pris, vi selv har fundet på. Ingen forhandler eller leasingselskab tilbyder den.
- **Hvorfor:** Regel 8 (tankestreg og to pointer i én sætning), regel 1 (participiet "omregnet til" erstatter en ledsætning) og regel 2 ("udbyder").

### m10. [62 sider] generate-pages.js:1553
- **Før:** Løbetid, kilometer og hvad der er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se løbetid, kilometer og hvad der følger med.
- **Hvorfor:** Regel 5. Det er præcis mønstret fra før/efter-tabellen ("På modelsiden kan du se, hvad der følger med").

### m11. [62 sider] generate-pages.js:2053
- **Før:** Vi viser kun tilbud, der er aktuelle hos udbyderen, og vi omregner derfor ikke løbetid og kilometertal til fælles vilkår.
- **Efter:** Vi viser kun tilbud, som forhandleren eller leasingselskabet giver lige nu. Derfor regner vi ikke løbetid og kilometertal om, så tilbuddene får samme vilkår.
- **Hvorfor:** Regel 2 ("aktuelle", "udbyderen") og regel 3 ("fælles vilkår" er et samlebegreb). To pointer bliver til to sætninger (regel 8).

### m12. [63 sider] generate-pages.js:2054
- **Før:** Moms-, afgifts- og skatteforhold afhænger af din virksomheds konkrete forhold.
- **Efter:** Hvordan moms, afgift og skat falder ud, afhænger af din virksomhed.
- **Hvorfor:** Regel 3 ("-forhold" er et samlebegreb) og regel 6 ("konkrete forhold" er kancellisprog). Ordet "forhold" står to gange i samme sætning.

### m13. [62 sider] generate-pages.js:1562
- **Før:** Ved operationel leasing afleveres bilen; ved finansiel leasing skal restværdien indfries.
- **Efter:** Ved operationel leasing afleverer du bilen. Ved finansiel leasing skal du indfri restværdien.
- **Hvorfor:** Regel 4 (to passiver, intet "du"), og semikolonet skal være punktum (regel 8).

### m14. [14 sider, 9 + 5 på mærkesider] generate-pages.js:7190-7191
- **Før:** Farizon-tilbuddene på siden oplyser tilsammen 80 % af de fem driftsposter. Det er et mål for, hvor færdige tilbuddene er — ikke for om priserne er gode.
- **Efter:** ‹mærke›-tilbuddene på siden oplyser tilsammen # % af det, vi tjekker for: service, dæk, forsikring, ejerafgift og vejhjælp. Tallet viser, hvor færdige tilbuddene er, og ikke om priserne er gode.
- **Hvorfor:** Regel 3 ("driftsposter" er forbudt med navns nævnelse) og regel 8 (tankestreg). De fem poster er de samme, som linje 6776 nævner.

### m15. [14 sider, 9 + 5] generate-pages.js:6773-6774
- **Før:** Tilbuddene på Farizon oplyser 80 % af de fem driftsposter mod 56 % for alle tilbud på siden.
- **Efter:** Tilbuddene på ‹mærke› oplyser # % af de fem udgifter, vi tjekker for (service, dæk, forsikring, ejerafgift og vejhjælp). For alle tilbud på siden er tallet # %.
- **Hvorfor:** Regel 3 ("driftsposter") og regel 8 (sammenligningen med "mod" pakker to tal i én sætning).

### m16. [59 sider] generate-pages.js:1850-1851
- **Før:** Danske parkeringskældre ligger typisk mellem 1,90 og 2,10 m, så tallet afgør om bilen kan køre ind.
- **Efter:** Frihøjden i danske parkeringskældre er typisk mellem 1,90 og 2,10 m, så højden afgør, om bilen kan komme ind.
- **Hvorfor:** Regel 9 (tallet mangler, hvad det måler: kældrene "ligger" ikke på 1,90 m). "Frihøjde" er ordet, der allerede bruges i guiden (linje ~4949). Der mangler også et komma før "om".

### m17. [59 sider] generate-pages.js:1851
- **Før:** Tagbøjler, antenne og lastholdere lægger oveni.
- **Efter:** Tagbøjler, antenne og lastholdere gør bilen højere.
- **Hvorfor:** Regel 1 og 3. "Lægger oveni" mangler et objekt, og læseren skal selv regne ud, at det er højden.

### m18. [76 sider] generate-pages.js:2050
- **Før:** De er vejledende og gælder de vilkår der er oplyst ved hvert tilbud.
- **Efter:** Priserne er vejledende og gælder med de vilkår, der står ved hvert tilbud.
- **Hvorfor:** Regel 6 og 4. "Gælder de vilkår" er ugrammatisk ("gælder med" eller "gælder for"), og "er oplyst" er passiv. Der mangler også et komma før "der".

### m19. [42 sider: 26 + 16] generate-pages.js:1568
- **Før:** Ja: Citroën Jumper, fra 3.178 kr./md. med udbetalingen fordelt, hos Citroën.
- **Efter:** Ja, den hedder ‹bil›. Den koster fra # kr. om måneden med udbetalingen fordelt over løbetiden hos ‹udbyder›.
- **Hvorfor:** Regel 1 (telegramstil med kolon og kommaer uden verbum). Det er et FAQ-svar, der skal kunne stå alene. Uden `rm` slutter svaret efter første sætning.

### m20. [62 sider] generate-pages.js:1550
- **Før:** Det billigste tilbud, vi har samlet (opdateret 28. september 2026), er 2.908 kr. om måneden ekskl. moms.
- **Efter:** Det billigste tilbud, vi har fundet, koster # kr. om måneden ekskl. moms. Prisen er fra den #. ‹måned› #.
- **Hvorfor:** Regel 8 (parentesen afbryder sætningen) og regel 9 (datoen skal stå med "den"). "Ekskl. moms" bliver stående, fordi FAQ-svaret skal kunne citeres alene. Uden `prisDato` falder sætning nr. 2 væk.

### m21. [61 sider] generate-pages.js:939
- **Før:** Konkurrenterne i samme klasse, billigste først.
- **Efter:** Her er konkurrenterne i samme klasse med den billigste først.
- **Hvorfor:** Regel 1. Manchetten er løbende tekst og ikke en tabeloverskrift, så den skal have et verbum.

### m22. [42 sider] generate-pages.js:1535
- **Før:** Regn diesel mod el ud for jeres kørsel — de to modeller er valgt på forhånd.
- **Efter:** Regn diesel mod el ud for din egen kørsel i elberegneren, hvor de to modeller allerede er valgt.
- **Hvorfor:** Regel 8 (tankestreg). Sitet skriver "du", så "jeres" falder uden for. Linket kan blive på "Regn diesel mod el ud for din egen kørsel".

### m23. [42 sider] generate-pages.js:1569
- **Før:** De to står side om side på siden, og elberegneren regner forskellen ud med strøm, brændstof og ejerafgift.
- **Efter:** På modelsiden kan du se de to biler side om side, og elberegneren regner forskellen ud med strøm, brændstof og ejerafgift.
- **Hvorfor:** Regel 5 og regel 1. "Side om side på siden" er en klodset gentagelse, og "De to" uden navneord er uklart i et FAQ-svar, der står alene.

### m24. [42 sider] generate-pages.js:1531
- **Før:** Her står de side om side med det billigste aktuelle tilbud og producentens tal.
- **Efter:** Her kan du se dem side om side med det billigste tilbud og producentens tal.
- **Hvorfor:** Regel 2 ("aktuelle tilbud" er nævnt direkte i reglen).

### m25. [40 sider] generate-pages.js:1764
- **Før:** Ingen restværdi at hæfte for.
- **Efter:** Du hæfter ikke for nogen restværdi.
- **Hvorfor:** Regel 1. Kortet til finansiel leasing ved siden af har en hel sætning ("Der er aftalt en restværdi, som du hæfter for …"), så de to kort bør have samme form.

### m26. [29 sider] varebiler.json:79 (tilbudsnote, gentaget ved alle Leasing.dk-tilbud)
- **Før:** Udbyderen oplyser, at service og reparation er inkluderet, og at dæk, forsikring og grøn ejerafgift ikke er.
- **Efter:** Ifølge Leasing.dk er service og reparation inkluderet, men dæk, forsikring og grøn ejerafgift er ikke.
- **Hvorfor:** Regel 2 ("Udbyderen" i løbende tekst). Navnet står allerede i noten, så det er mere præcist at bruge det.

### m27. [21 sider] varebiler.json:98 (tilbudsnote, gentaget ved alle Kassebil.dk-tilbud)
- **Før:** De er derfor ikke inkluderet, men udbyderen forholder sig til dem.
- **Efter:** De er derfor ikke med i prisen, men Kassebil.dk nævner dem, så de tæller med i kolonnen Oplyst.
- **Hvorfor:** Regel 2 ("udbyderen") og regel 6 ("forholder sig til" er kancellisprog). Samme vending står i generate-pages.js ved 2021, 3443, 5095, 5146, 6572, 6661 og 7288.

### m28. [19 sider] varebiler.json:79 (tilbudsnote, Leasing.dk)
- **Før:** Her står den billigste målt på samlet pris pr. md.
- **Efter:** Vi viser den billigste af dem, målt på samlet pris pr. måned.
- **Hvorfor:** Regel 1 og 4. "Her står" har intet subjekt for "den", og forkortelsen "pr. md." hører til i tabeller. Sætningen før ("Leasing.dk viser 5 varianter på modellen") bryder også regel 2 ("varianter" → "udgaver").

### m29. [31 sider: 19 + 12] generate-pages.js:2881 og 6851
- **Før:** En brugt bil har ingen førstegangsydelse og ingen bindingsperiode — til gengæld står du selv med værditabet.
- **Efter:** En brugt bil har ingen førstegangsydelse og ingen bindingsperiode, men du står selv med værditabet.
- **Hvorfor:** Regel 8 (tankestreg). I 6851 står telegramudgaven "Ingen førstegangsydelse og ingen binding — til gengæld …", som også mangler et verbum (regel 1). Brug samme sætning begge steder.

### m30. [14 sider] generate-pages.js:7180
- **Før:** Sorteret efter samlet pris pr. måned — månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Efter:** Vi har sorteret tilbuddene efter den samlede pris pr. måned, som er månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 1 (intet verbum) og regel 8 (tankestreg).

### m31. [14 sider] generate-pages.js:7180
- **Før:** Løbetiderne er ikke omregnet, så de skal læses med.
- **Efter:** Vi har ikke regnet løbetiderne om, så se på løbetiden, når du sammenligner.
- **Hvorfor:** Regel 4 (to passiver), og "skal læses med" er uklart for læseren.

### m32. [14 sider] generate-pages.js:7153
- **Før:** Alle priser ekskl. moms, med kilde og indsamlingsdato på hvert tal.
- **Efter:** Alle priser er uden moms, og ved hvert tal står kilden og den dato, vi hentede det.
- **Hvorfor:** Regel 1 (intet verbum) og regel 9, hvor formuleringen "Alle priser er uden moms" er reglens eget eksempel. "Indsamlingsdato" er datamodellens ord (regel 2).

### m33. [11 + 14 sider] generate-pages.js:6954
- **Før:** 2 udbydere har aktuelle tilbud på Fiat, billigste først. (efterfulgt af: Pris er med udbetalingen fordelt over løbetiden.)
- **Efter:** Der er tilbud på ‹mærke› fra # forhandlere og leasingselskaber, og den billigste står først. Prisen er med udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 2 ("udbydere" og "aktuelle" i løbende tekst) og regel 1 ("billigste først" og "Pris er" er telegramstil). Ental kræver sin egen gren: "fra 1 forhandler eller leasingselskab".

### m34. [9 sider] generate-pages.js:6781
- **Før:** Det er over gennemsnittet, altså tilbud hvor en større del af den endelige pris kan regnes ud på det foreliggende grundlag.
- **Efter:** Det er over gennemsnittet, så tilbuddene siger mere om, hvad bilen ender med at koste.
- **Hvorfor:** Regel 6 ("på det foreliggende grundlag" er kancellisprog) og regel 4 (passiv). Grenen ved 6778 ("… dårlige — men at der mangler mere, før den endelige pris kan opgøres") har samme problem med tankestreg og "opgøres".

### m35. [11 sider] generate-pages.js:6989
- **Før:** Hvad skiftet koster i kroner, regner elberegneren ud, og hvad det koster i tid, viser ladetidsberegneren .
- **Efter:** Elberegneren regner ud, hvad skiftet koster i kroner, og ladetidsberegneren viser, hvad det koster i tid.
- **Hvorfor:** Regel 5 (omvendt ordstilling to gange i samme sætning).

### m36. [13 sider] generate-pages.js:6761-6763
- **Før:** På rumfang er tallet 318 kr. pr. m³ mod 668 kr. i median. De to mål rangerer ikke ens: en varebil kan have plads uden at måtte bære, og omvendt.
- **Efter:** Målt pr. m³ lastrum er tallet # kr. om måneden mod # kr. i median. De to mål giver ikke samme rækkefølge, for en varebil kan have god plads uden at måtte laste meget, og omvendt.
- **Hvorfor:** Regel 2 ("rangerer" er en anglicisme), regel 9 ("pr. m³" mangler "om måneden", som sætningen før har) og regel 8 (kolon). Samme vending står i guiden ved ~6602.

### m37. [14 sider: 9 + 5] generate-pages.js:7215
- **Før:** Tekniske mål er fra Farizon-prislister og gælder den variant der står på modelsiden.
- **Efter:** De tekniske mål kommer fra ‹mærke›-prislister og gælder den udgave af bilen, der står på modelsiden.
- **Hvorfor:** Regel 2 ("variant"). Der mangler også et komma før "der".

### m38. [11 sider] generate-pages.js:5185 (samme ved 6934, 5169 og 5273)
- **Før:** Tallet gælder den variant, målene på modelsiden er oplyst for.
- **Efter:** Tallet gælder den udgave af bilen, som målene på modelsiden er for.
- **Hvorfor:** Regel 2 ("variant") og regel 4 ("er oplyst for" er passiv).

### m39. [9 sider] varebiler.json:3106 (tilbudsnote, også 4230, 4986, 5140 m.fl.)
- **Før:** Forlænget 01-10-2026: importøren viser samme tal med „gælder til 31.12.2026“.
- **Efter:** Tilbuddet blev forlænget den 1. oktober 2026, hvor importøren viste samme tal med „gælder til 31.12.2026“.
- **Hvorfor:** Regel 1 (telegramstil med kolon) og regel 6/9 (datoen skal stå som "den 1. oktober 2026"). Citatet står uændret. Bemærk også "via Opel Finans.10.2026" i noten ved varebiler.json:5140, som ligner en fejlindsættelse.

### m40. [8 sider] garanti.json:793 (og 11 andre steder i samme fil)
- **Før:** Ikke taxa, køreskole, ombyggede biler, udrykning. aar/km er maksimum: samlet op til 8 år eller 200.000 km (hvad der kommer først).
- **Efter:** Garantien gælder ikke for taxaer, køreskolebiler, ombyggede biler og udrykningskøretøjer. Den kan højst vare 8 år eller 200.000 km i alt, alt efter hvad der kommer først.
- **Hvorfor:** Regel 2. "aar/km" er et feltnavn fra datamodellen, som er sluppet ud på siden. Regel 1 (første sætning har intet verbum) og regel 7 (skråstreg).

---

## Guider-og-oversigter


Værste først, vægtet efter antal sider. Regelnumre henviser til "Skrivestil" i CLAUDE.md.
Pladsholdere er vist med eksemplets værdier. I koden skal de stå som før.

### g1. [274 sider] generate-pages.js:371-372 (også generate-tilvalg.js:291-292)
- **Før:** Forhandleren betaler os for henvendelsen — det samme beløb fra alle, og uanset om du siger ja eller nej.
- **Efter:** Forhandleren betaler os for henvendelsen. Alle betaler det samme beløb, og de betaler, uanset om du siger ja eller nej.
- **Hvorfor:** Regel 8. Tankestregen klistrer to pointer sammen, og "og uanset" mangler et verbum at hænge på.

### g2. [268 sider] generate-pages.js:368-369
- **Før:** Du siger, hvad bilen skal kunne — vi ringer rundt til forhandlerne, beder om det samme hos alle, og læser tilbuddene igennem, før du ser dem.
- **Efter:** Du fortæller, hvad bilen skal kunne. Så ringer vi rundt til forhandlerne, beder om det samme hos alle og læser tilbuddene igennem, før du ser dem.
- **Hvorfor:** Regel 8. Tankestregen binder to sætninger sammen. Kommaet før "og læser" skal også væk.

### g3. [268 sider] generate-pages.js:380-381
- **Før:** Her er der ingen forhandler inde over — du betaler, og ingen andre.
- **Efter:** Her er der ingen forhandler inde over. Det er dig, der betaler, og ingen andre.
- **Hvorfor:** Regel 8. To pointer bundet sammen med en tankestreg.

### g4. [269 sider] generate-pages.js:382
- **Før:** 695 kr. ekskl. moms pr. tilbud.
- **Efter:** Det koster 695 kr. ekskl. moms pr. tilbud.
- **Hvorfor:** Regel 1. Afsnittet har intet verbum. Det står i et kort med løbende tekst og er ikke en tabelcelle.

### g5. [149 sider] generate-pages.js:1070
- **Før:** Prisen er det billigste annoncerede tilbud på hver model, ekskl. moms; hvilken udbyder og variant står på modelsiden.
- **Efter:** Prisen er det billigste annoncerede tilbud på hver model, ekskl. moms. På modelsiden kan du se, hvilken bil tilbuddet gælder, og hvilken forhandler eller hvilket leasingselskab det kommer fra.
- **Hvorfor:** Regel 2 ("variant" og "udbyder" i løbende tekst), regel 5 (omvendt ordstilling "hvilken … står på modelsiden", samme mønster som i før/efter-tabellen) og regel 8 (semikolon).

### g6. [149 sider] generate-pages.js:1070
- **Før:** Mål og vægt gælder den variant, der står på modelsiden.
- **Efter:** Mål og vægt gælder den bil, der står på modelsiden.
- **Hvorfor:** Regel 2. "Variant" er datamodellens ord.

### g7. [149 sider] generate-pages.js:1011 (samme sætning på 87 + 62 sider)
- **Før:** Citroën Berlingo er billigst at lease: 1.171 kr. mindre om måneden, når udbetalingen er fordelt over løbetiden.
- **Efter:** Citroën Berlingo er billigst at lease. Den koster 1.171 kr. mindre om måneden, når udbetalingen er fordelt over løbetiden.
- **Hvorfor:** Regel 1 og 8. Efter kolonet kommer et brudstykke uden verbum. Manchetten samler flere sætninger, så kolonet tager afsnittets eneste kolon.

### g8. [149 sider] generate-pages.js:1070
- **Før:** Den grønne markering viser det bedste tal i rækken, hvor det kan afgøres.
- **Efter:** Den grønne markering viser det bedste tal i hver række, når det ene tal er tydeligt bedst.
- **Hvorfor:** Regel 4. "Hvor det kan afgøres" er en upersonlig passivkonstruktion, og læseren må gætte, hvad "det" er.

### g9. [120 sider] generate-pages.js:1032
- **Før:** På det billigste udstyrsniveau hos begge. Kun poster, hvor producenten oplyser begge dele.
- **Efter:** Vi sammenligner det billigste udstyrsniveau på begge biler og tager kun udstyr med, som producenten oplyser for dem begge.
- **Hvorfor:** Regel 1 (to brudstykker uden verbum) og regel 2 ("poster" er datamodellens ord).

### g10. [97 sider] generate-pages.js:1019 (50 + 47 sider)
- **Før:** Renault Kangoo har længst garanti (5 år / 150.000 km).
- **Efter:** Renault Kangoo har længst garanti (5 år eller 150.000 km).
- **Hvorfor:** Regel 7. Skråstreg i løbende tekst. Værdien kommer fra tabelcellen (gg[1]/gg[2]), så skråstregen skal erstattes, når sætningen bygges. I tabellen må den blive stående.

### g11. [53 sider] generate-pages.js:6487
- **Før:** Kilde og indsamlingsdato står ved hvert tilbud, og modelnavnet fører til modelsiden med de fulde specifikationer.
- **Efter:** Ved hvert tilbud kan du se, hvor og hvornår vi har fundet det. Klik på modelnavnet for at se alle specifikationer på modelsiden.
- **Hvorfor:** Regel 5 (substantiverne står først, som i "Hvad hvert tilbud indeholder, står på modelsiden") og regel 8 (to pointer i én sætning).

### g12. [53 sider] generate-pages.js:6501 (kort udgave på :6121)
- **Før:** Send det ind, og få det gennemgået på de samme punkter, vi sammenligner på her: hvad ydelsen dækker, hvad der ligger uden for, og hvad aftalen koster i alt.
- **Efter:** Send det ind, så gennemgår vi det på de samme punkter, som vi sammenligner på her: hvad ydelsen dækker, hvad der ligger uden for, og hvad aftalen koster i alt.
- **Hvorfor:** Regel 4. "Få det gennemgået" skjuler, hvem der gør det. Med "så gennemgår vi" er det tydeligt.

### g13. [42 sider] viden.json:1642 ("kort")
- **Før:** Vi har gennemgået 122 annoncerede tilbud og talt efter. 14 af dem forholder sig ikke til én eneste driftspost.
- **Efter:** Vi har gennemgået 122 annoncerede tilbud og talt efter. I 14 af dem står der intet om service, dæk, forsikring, grøn ejerafgift eller vejhjælp.
- **Hvorfor:** Regel 3 ("driftspost" er et samlebegreb) og regel 6 ("forholder sig ikke til" er kancellisprog). Listen er de fem poster, som generate-pages.js:3445 definerer.

### g14. [37 sider] viden.json:2204 ("kort")
- **Før:** På vores 58 modeller går den fra 920 til 13.980 kr. om året — og ingen ydelse dækker den.
- **Efter:** På vores 58 modeller går den fra 920 til 13.980 kr. om året, og den er ikke med i nogen leasingydelse.
- **Hvorfor:** Regel 8 (tankestreg). "Ydelse" står alene og er uklart, så "leasingydelse" er tydeligere.

### g15. [37 sider] generate-pages.js:6432
- **Før:** De fem bedste efter inkl. udbetaling
- **Efter:** De fem bedste, når udbetalingen er regnet med
- **Hvorfor:** Regel 1 og 2. Overskriften bygges af kolonnenavnet ("inkl. udbetaling"), så den bliver datamodellens ord. For andre kolonner (fx "lastrum") virker skabelonen fint. Guiden skal derfor have sin egen overskrift i stedet for g.kolonne.

### g16. [23 sider] generate-pages.js:1329
- **Før:** Ikke oplyst betyder, at prislisten ikke nævner udstyret — ikke at bilen mangler det.
- **Efter:** Ikke oplyst betyder, at prislisten ikke nævner udstyret. Det betyder ikke, at bilen mangler det.
- **Hvorfor:** Regel 8. Tankestreg og en halv sætning uden verbum.

### g17. [23 sider] generate-pages.js:1329
- **Før:** Hentet fra hver producents danske prisliste; kilde og dato står på modelsiden.
- **Efter:** Oplysningerne kommer fra producenternes danske prislister. På modelsiden kan du se kilde og dato.
- **Hvorfor:** Regel 1 (ingen grundled), regel 5 (omvendt ordstilling) og regel 8 (semikolon).

### g18. [23 sider] generate-pages.js:1320
- **Før:** Tabellen viser begge ender af modelprogrammet.
- **Efter:** Tabellen viser både det billigste og det dyreste udstyrsniveau på hver model.
- **Hvorfor:** Regel 3. "Begge ender af modelprogrammet" er et billede, og læseren skal oversætte det. Kolonneoverskrifterne siger "Billigste niveau" og "Dyreste niveau".

### g19. [17 sider] generate-pages.js:7443
- **Før:** Kolonnen Inkluderet viser hvad ydelsen dækker, og Ikke inkluderet viser hvad udbyderen eksplicit har skrevet fra — begge er oplysninger, og begge tæller med i oplysningsgraden.
- **Efter:** Kolonnen Inkluderet viser, hvad ydelsen dækker. Kolonnen Ikke inkluderet viser, hvad forhandleren eller leasingselskabet udtrykkeligt har skrevet, at ydelsen ikke dækker. Begge dele tæller med i oplysningsgraden.
- **Hvorfor:** Regel 8 (tre pointer og en tankestreg), regel 2 ("udbyderen" i løbende tekst) og regel 6 ("eksplicit", "skrevet fra"). Der mangler også komma før "hvad". "Begge er oplysninger" siger det samme som "tæller med i oplysningsgraden".

### g20. [17 sider] generate-pages.js:7382
- **Før:** Målt på samlet pris pr. md. — månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Efter:** Vi sammenligner den samlede pris pr. måned, altså månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 1 (intet verbum), regel 4 ("målt på") og regel 8 (tankestreg). Brug ikke forkortelsen "md." i løbende tekst.

### g21. [17 sider] generate-pages.js:7404
- **Før:** Det billigste tilbud, vi har fra Andersen Biler, er 1.969 kr. om måneden ekskl. moms — 2.802 kr. om måneden, når udbetalingen fordeles over løbetiden.
- **Efter:** Det billigste tilbud, vi har fra Andersen Biler, koster 1.969 kr. om måneden ekskl. moms. Når udbetalingen fordeles over løbetiden, bliver det 2.802 kr. om måneden.
- **Hvorfor:** Regel 8. Tankestregen binder to tal sammen uden verbum.

### g22. [17 sider] generate-pages.js:7461-7463
- **Før:** Oplysningsgraden på 34 % handler om de 7 tilbud, vi har indsamlet fra Andersen Biler — ikke om selskabet som helhed.
- **Efter:** Oplysningsgraden på 34 % gælder kun de 7 tilbud, vi har indsamlet fra Andersen Biler. Den siger ikke noget om selskabet som helhed.
- **Hvorfor:** Regel 8 (tankestreg). Bemærk også, at skabelonen giver "de 1 tilbud", når der kun er ét tilbud (begge grene af `u.rader.length === 1` skriver ' tilbud'). Med ét tilbud skal der stå "det ene tilbud".

### g23. [17 sider] generate-pages.js:7463
- **Før:** Et tilbud du selv får tilsendt kan være langt mere detaljeret end det, der står på en offentlig prisside, og det er netop derfor vi tilbyder at læse dit igennem.
- **Efter:** Et tilbud, du selv får tilsendt, kan være langt mere detaljeret end det, der står på en offentlig prisside. Derfor tilbyder vi at læse dit igennem.
- **Hvorfor:** Regel 8 (to pointer). Der mangler komma om "du selv får tilsendt" og før "vi tilbyder". "Det er netop derfor" er fyld.

### g24. [17 sider] generate-pages.js:7473
- **Før:** Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar — det samme beløb fra alle.
- **Efter:** Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar. Alle betaler det samme beløb.
- **Hvorfor:** Regel 8. Tankestregen hænger et brudstykke uden verbum på.

### g25. [17 sider] generate-pages.js:7473
- **Før:** Gulplade.dk er ikke tilknyttet Andersen Biler, og ingen udbyder kan betale for en placering i sammenligningen.
- **Efter:** Gulplade.dk er ikke tilknyttet Andersen Biler, og ingen forhandler eller leasingselskab kan betale for en placering i sammenligningen.
- **Hvorfor:** Regel 2. Skriv ikke "udbyder" i løbende tekst.

### g26. [12 sider] generate-pages.js:7472
- **Før:** Priserne er indsamlet fra Andersen Bilers egne offentligt tilgængelige sider på de datoer der står i tabellen, og er vejledende.
- **Efter:** Vi har hentet priserne fra Andersen Bilers egne offentlige sider. Datoerne står i tabellen, og priserne er vejledende.
- **Hvorfor:** Regel 4 (passiv "er indsamlet"), regel 6 ("offentligt tilgængelige") og regel 8 (tre oplysninger i én sætning). Der mangler komma før "der står".

### g27. [9 sider] generate-pages.js:7406
- **Før:** Hvad der i øvrigt er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se, hvad der ellers er inkluderet.
- **Hvorfor:** Regel 5. Det er præcis mønstret fra før/efter-tabellen ("Hvad hvert tilbud indeholder, står på modelsiden"). Regel 6: "i øvrigt" er kancellisprog.

### g28. [9 sider] generate-pages.js:7900 (samme sætning i FAQ'en på :7917)
- **Før:** Ved finansiel leasing er der aftalt en restværdi, som skal indfries ved udløb — af dig selv eller en køber, du anviser.
- **Efter:** Ved finansiel leasing er der aftalt en restværdi, som skal indfries, når aftalen udløber. Det gør du selv, eller også gør en køber, du anviser, det.
- **Hvorfor:** Regel 8 (tankestreg med brudstykke) og regel 4 ("ved udløb" er et substantiv, hvor et verbum er bedre).

### g29. [9 sider] generate-pages.js:7876
- **Før:** Reglerne for indretning og kørsel hjem: specialindretning af varebil og tage varebilen med hjem .
- **Efter:** Læs reglerne i Håndbogen om specialindretning af varebil og om at tage varebilen med hjem.
- **Hvorfor:** Regel 1. Linklisten er forklædt som en sætning uden verbum. Linkteksterne kan blive stående.

### g30. [8 sider] generate-pages.js:7350
- **Før:** I de tilbud vi har indsamlet inkluderer Andersen Biler service (2 af 7).
- **Efter:** I de 7 tilbud, vi har indsamlet, har Andersen Biler service med i 2.
- **Hvorfor:** Regel 1 og 9. Tallet i parentes er en tabelrest. Der mangler komma om "vi har indsamlet". Ved flere poster bliver det fx "service med i 2 og dæk med i 1".

### g31. [8 sider] generate-pages.js:7352
- **Før:** Ayvens inkluderer ingen af de fem driftsposter i nogen af de tilbud, vi har indsamlet.
- **Efter:** I de tilbud, vi har indsamlet fra Ayvens, dækker ydelsen kun bilen.
- **Hvorfor:** Regel 3. "Driftsposter" er et samlebegreb, og næste sætning ("Ydelsen dækker bilen, og service, dæk, forsikring, ejerafgift og vejhjælp skal lægges oveni") nævner allerede de fem poster. Fakta er de samme.

### g32. [8 sider] generate-pages.js:7801
- **Før:** Har bilen fast indretning til arbejdet, kan den være specialindrettet og må så køre mellem hjem og arbejde hver dag — se Håndbogen om specialindretning.
- **Efter:** Har bilen fast indretning til arbejdet, kan den være specialindrettet. Så må den køre mellem hjem og arbejde hver dag. Læs mere i Håndbogen om specialindretning.
- **Hvorfor:** Regel 8. Tre pointer og en tankestreg i én sætning.

### g33. [8 sider] generate-pages.js:7938
- **Før:** De to typer side om side: finansiel eller operationel leasing .
- **Efter:** Vi sammenligner de to typer i finansiel eller operationel leasing.
- **Hvorfor:** Regel 1. Der er intet verbum. Linket i samme afsnit ("Alle finansielle tilbud: …") har samme form og kan blive til "Se alle finansielle tilbud i finansiel leasing af varebil".

### g34. [8 sider] generate-pages.js:7858
- **Før:** Den typiske af de 18 tilbud koster 3.908 kr. om måneden.
- **Efter:** Et typisk tilbud blandt de 18 koster 3.908 kr. om måneden.
- **Hvorfor:** Regel 2. "Den typiske af de 18 tilbud" er en kunstig konstruktion (tallet er medianen). Fakta er uændrede.

### g35. [14 sider] generate-pages.js:7857 (7 sider) og :7830 (7 sider)
- **Før:** Den billigste er Opel Combo til 2.358 kr. om måneden med udbetalingen fordelt, hos Opel.
- **Efter:** Den billigste er Opel Combo hos Opel. Den koster 2.358 kr. om måneden, når udbetalingen er fordelt over løbetiden.
- **Hvorfor:** Regel 5 og 8. "Hos Opel" er hængt bag på efter et komma. Det samme gælder :7830 ("Den billigste på listen er …").

### g36. [5 sider] viden.json:3381 ("kort")
- **Før:** Første gang over halvdelen — og det ændrer, hvad der er en normal firmabil.
- **Efter:** Det er første gang, at over halvdelen er elektriske, og det ændrer, hvad der er en normal firmabil.
- **Hvorfor:** Regel 1 (brudstykke uden verbum) og regel 8 (tankestreg).

### g37. [5 sider] viden.json:2601 ("kort")
- **Før:** Fire år til første syn, derefter hvert andet. Med én undtagelse, der rammer de største biler hvert eneste år.
- **Efter:** En ny varebil skal synes første gang efter fire år og derefter hvert andet år. Der er én undtagelse, og den rammer de største biler hvert eneste år.
- **Hvorfor:** Regel 1. Begge sætninger er telegramstil uden hovedverbum.

### g38. [5 sider] viden.json:3661 ("kort")
- **Før:** National kørsel er undtaget — og det samme er de fleste håndværkere.
- **Efter:** National kørsel er undtaget, og det er de fleste håndværkere også.
- **Hvorfor:** Regel 8. Tankestreg.

### g39. [5 sider] viden.json:2664 ("kort")
- **Før:** 107 af 122 tilbud oplyser et kilometertal — og 106 af dem siger 15.000 km.
- **Efter:** 107 af 122 tilbud oplyser et kilometertal, og 106 af dem siger 15.000 km.
- **Hvorfor:** Regel 8. Tankestreg, hvor et komma er nok.

---

## Brugte


Sorteret efter, hvor meget sætningen bryder skrivestilen, vægtet efter antal sider. Knapper, overskrifter,
tabeletiketter, modelbetegnelser og forhandlerens egne tekster (beskrivelserne) er ikke med.

### b1. [329 sider] generate-brugte.js:2319
- **Før:** Vi er ikke forhandler: bilen købes hos den forhandler, vi samarbejder med, og handlen er forhandlerens ansvar.
- **Efter:** Vi er ikke selv forhandler. Du køber bilen hos den forhandler, vi samarbejder med, og handlen er forhandlerens ansvar.
- **Hvorfor:** Regel 4 og 8. Passiv "købes" bliver til "du køber", og kolonnet erstattes af to sætninger. Det juridiske indhold er det samme: vi er ikke forhandler, køb sker hos forhandleren, og handlen er forhandlerens ansvar.

### b2. [329 sider] generate-brugte.js:2300
- **Før:** Lasteevne og totalvægt oplyser forhandleren ikke, og vi regner dem ikke ud — de afhænger af den enkelte bils opbygning.
- **Efter:** Forhandleren oplyser ikke lasteevne og totalvægt. Vi regner dem heller ikke ud, fordi de afhænger af, hvordan den enkelte bil er bygget op.
- **Hvorfor:** Regel 5 (objektet står først, så man skal læse sætningen to gange), regel 8 (tre pointer og en tankestreg) og regel 4 ("opbygning" bliver til et verbum).

### b3. [329 sider] generate-brugte.js:2300 (datoen fra datoDa, generate-brugte.js:137)
- **Før:** Tallene er forhandlerens egne, hentet den 25. sep. 2026.
- **Efter:** Tallene er forhandlerens egne, og vi hentede dem den 25. september 2026.
- **Hvorfor:** Regel 1 og 6. "hentet den" er telegramstil uden subjekt, og "sep." er en forkortelse fra en datamodel. datoDa forkorter månederne til "jan.", "sep." osv. og bruges i alle løbende sætninger på brugtsiderne. Hvis den skriver månederne fuldt ud, bliver punkt 4, 15 og 16 også bedre. Datoen er den samme.

### b4. [329 sider] generate-brugte.js:2320
- **Før:** Bilen kan være solgt, siden listen blev hentet den 25. sep. 2026.
- **Efter:** Bilen kan være solgt, efter at vi hentede listen den 25. september 2026.
- **Hvorfor:** Regel 4 og 6. Passiv "blev hentet" bliver til et verbum med subjekt. "siden" kan læses som "fordi", men "efter at" kan kun betyde tid. Månedsnavnet skrives fuldt ud (se punkt 3).

### b5. [328 sider] generate-brugte.js:2288
- **Før:** Teksten er forhandlerens egen; kontaktoplysninger er taget ud.
- **Efter:** Teksten er forhandlerens egen. Vi har taget kontaktoplysningerne ud.
- **Hvorfor:** Regel 4 og 8. Semikolon og passiv bliver til to korte sætninger med "vi".

### b6. [328 sider] generate-brugte.js:2312
- **Før:** Udstyrslisten er forhandlerens registrering.
- **Efter:** Forhandleren har selv lavet udstyrslisten.
- **Hvorfor:** Regel 4 og 2. "registrering" er et substantiv fra datamodellen. Den næste sætning ("Tjek den på bilen.") passer stadig.

### b7. [ca. 285 sider: 77+59+37+31+18+17+17+9+9+6+5] generate-brugte.js:432
- **Før:** Brugt Mercedes-Benz Citan kassevogn fra 2024 med 95 hk dieselmotor og automatgear.
- **Efter:** Det er en brugt Mercedes-Benz Citan kassevogn fra 2024 med 95 hk dieselmotor og automatgear.
- **Hvorfor:** Regel 1. Sætningen har intet verbum og står som manchet over specifikationerne. Den virker for alle karrosserier, drivmidler og gearkasser. Bemærk (bør tjekkes, ikke rettes sprogligt): eksemplerne kalder også en Ford Ranger (punkt 48 i batchen) og en Audi SQ5 for "kassevogn". Det kommer fra KARROSSERI_NAVN og forhandlerens karrosserifelt.

### b8. [ca. 282 sider: 134+132+16] generate-brugte.js:2127
- **Før:** Andre brugte Ford Ranger i samme prisklasse.
- **Efter:** Her er andre brugte Ford Ranger i samme prisklasse.
- **Hvorfor:** Regel 1. Manchetten er en sætning med punktum, men den har intet verbum.

### b9. [327 sider] generate-brugte.js:437
- **Før:** Den har kørt 266.000 km og koster 112.500 kr. ekskl. moms.
- **Efter:** Den har kørt 266.000 km og koster 112.500 kr.
- **Hvorfor:** Regel 9. Momsen står allerede lige nedenunder i tabellen ("Kontant ekskl. moms") og ved leasingtallene. Prisen er den samme. Hvis I vil være helt sikre på, at momsen nævnes på hver side, kan I i stedet lade den stå her og fjerne den et andet sted.

### b10. [329 sider] generate-brugte.js:402
- **Før:** Fremvisning, prøvetur eller et leasingforslag
- **Efter:** Vi aftaler fremvisning, prøvetur eller et leasingforslag
- **Hvorfor:** Regel 1. Punkterne før og efter i samme liste har verbum ("Vi tjekker …", "… kan komme med"), men det her har ikke. Med et verbum hænger listen sammen.

### b11. [329 sider] generate-brugte.js:403
- **Før:** Byttebil kan komme med i handlen
- **Efter:** Du kan få en byttebil med i handlen
- **Hvorfor:** Regel 4 og 5. Læseren bliver subjekt i stedet for "Byttebil" uden artikel, og sætningen bliver almindelig dansk.

### b12. [57 sider] generate-brugte.js:418
- **Før:** Vi leder på lageret og hos forhandlerne — og siger det, hvis en ny bil på leasing er billigere.
- **Efter:** Vi leder på lageret og hos forhandlerne, og vi siger det, hvis en ny bil på leasing er billigere.
- **Hvorfor:** Regel 8. Tankestregen er unødvendig, og "vi" gentages, så sætningen bliver klar.

### b13. [52 sider] generate-brugte.js:1218
- **Før:** På lageret lige nu fra 112.500 kr. til 399.800 kr. ekskl. moms.
- **Efter:** Bilerne på lageret koster lige nu fra 112.500 kr. til 399.800 kr. ekskl. moms.
- **Hvorfor:** Regel 1. FAQ-svaret mangler både subjekt og verbum.

### b14. [44 sider] generate-brugte.js:1193
- **Før:** Årgangen flytter mest: her er typisk pris og kilometer for hver årgang med mindst to biler.
- **Efter:** Årgangen betyder mest for prisen. Tabellen viser typisk pris og kilometer for hver årgang med mindst to biler.
- **Hvorfor:** Regel 8 (kolon plus to pointer) og regel 3 ("flytter mest" er vagt, så nu står det, hvad der flyttes).

### b15. [44 sider] generate-brugte.js:1208 (også 2054)
- **Før:** Regnet ud af lageret den 25. sep. 2026.
- **Efter:** Vi har regnet tallene ud fra lageret den 25. september 2026.
- **Hvorfor:** Regel 1 og 6. Telegramstil uden subjekt og forkortet måned. "ud af lageret" bliver til "ud fra lageret".

### b16. [56 sider] generate-brugte.js:1311
- **Før:** Årgangene spænder fra 2007 til 2023, med 189.000 km på den typiske bil.
- **Efter:** Bilerne er fra 2007 til 2023, og den typiske bil har kørt 189.000 km.
- **Hvorfor:** Regel 1 og 4. Det vedhængte ", med … km" har intet verbum, og "spænder" er et omstændeligt ord.

### b17. [56 sider] generate-brugte.js:226
- **Før:** Du køber bilen hos forhandleren — vi formidler kontakten og kan få betaling for det.
- **Efter:** Du køber bilen hos forhandleren. Vi formidler kontakten og kan få betaling for det.
- **Hvorfor:** Regel 8. Tankestregen bliver til punktum. Den juridiske ordlyd ("formidler kontakten og kan få betaling for det") er uændret.

### b18. [56 sider] generate-brugte.js:226
- **Før:** Formidling Bilerne sælges af en forhandler, vi samarbejder med.
- **Efter:** Formidling En forhandler, vi samarbejder med, sælger bilerne.
- **Hvorfor:** Regel 4. Passiv "sælges af" bliver aktiv. Mærket "Formidling" står uændret, og indholdet er det samme.

### b19. [44 sider] generate-brugte.js:1220
- **Før:** En fra 2023 koster typisk 329.800 kr., en fra 2018 typisk 165.000 kr.
- **Efter:** En bil fra 2023 koster typisk 329.800 kr., og en fra 2018 koster typisk 165.000 kr.
- **Hvorfor:** Regel 1. Anden halvdel mangler verbum, og "En fra 2023" mangler et navneord.

### b20. [35 sider: 18+17] generate-brugte.js:1196
- **Før:** Som kassevogn koster den typisk 245.000 kr. (9 biler).
- **Efter:** De 9 kassevogne koster typisk 245.000 kr.
- **Hvorfor:** Regel 5 og 8. "Som kassevogn koster den" er en tung ordstilling, og antallet hænger i en parentes. Tal og pris er de samme. Skabelonen skal bruge flertal af karrosseriet (kassevogne, ladvogne), og ved 1 bil skal den skrive "Den ene kassevogn koster …". Det sker sjældent, fordi typer kræver flere biler.

### b21. [50 sider] generate-brugte.js:1236
- **Før:** Ydelse og restværdi står på bilens side.
- **Efter:** På bilens side kan du se ydelse og restværdi.
- **Hvorfor:** Regel 5. Det er samme mønster som tabellens eksempel "På modelsiden kan du se, hvad der følger med".

### b22. [11 sider] generate-brugte.js:1244
- **Før:** Udbetaling, løbetid og hvad der er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se udbetaling, løbetid og hvad der følger med.
- **Hvorfor:** Regel 5. Det er præcis den ordstilling, brugeren har rettet i tabellen ("Hvad hvert tilbud indeholder, står på modelsiden").

### b23. [154 sider] generate-brugte.js:443
- **Før:** Bilen må trække 2.500 kg med bremset anhænger, kører 15,2 km/l og kan leases fra 2.275 kr. om måneden.
- **Efter:** Bilen må trække 2.500 kg med bremset anhænger og kører 15,2 km/l. Den kan leases fra 2.275 kr. om måneden.
- **Hvorfor:** Regel 8. Der er tre pointer i én sætning. Leasingprisen er en anden slags oplysning og får sin egen sætning (s3 deles, så leasing bliver til en ny sætning).

### b24. [8 sider] generate-brugte.js:1242 (også 2049)
- **Før:** Vi sammenligner 2 erhvervsleasingtilbud på en ny Ford Transit, med ydelser fra 2.859 kr. om måneden ekskl. moms før udbetaling.
- **Efter:** Vi sammenligner 2 erhvervsleasingtilbud på en ny Ford Transit. Ydelsen starter ved 2.859 kr. om måneden ekskl. moms før udbetaling.
- **Hvorfor:** Regel 1 og 8. Den vedhængte ", med ydelser fra …" har intet verbum, og sætningen bærer to pointer.

### b25. [7 sider, plus mærke- og modelsider] generate-brugte.js:1305
- **Før:** 23 brugte Ford Transit på lager.
- **Efter:** Der er 23 brugte Ford Transit på lager.
- **Hvorfor:** Regel 1. Sætningen mangler verbum, og en sætning skal helst ikke begynde med et tal. Den virker også ved 1 ("Der er 1 brugt …").

### b26. [56 sider] generate-brugte.js:227
- **Før:** Priser og tal er forhandlerens.
- **Efter:** Priserne og tallene kommer fra forhandleren.
- **Hvorfor:** Regel 4 og 5. Den korte genitivkonstruktion er stiv, og et verbum siger det direkte.

### b27. [6 sider] generate-brugte.js:707 (også 808, 819, 830, 841, 852)
- **Før:** Gearkassen står, som forhandleren har registreret den.
- **Efter:** Forhandleren har selv registreret gearkassen.
- **Hvorfor:** Regel 4 og 5. Den egentlige handling står i bisætningen. Med forhandleren som subjekt bliver sætningen kortere og siger det samme.

### b28. [5 sider] generate-brugte.js:2099
- **Før:** Producenten giver 8 år eller 160.000 km garanti på drivbatteriet på en ny Renault Master, med mindst 70 % af den oprindelige kapacitet.
- **Efter:** Producenten giver 8 år eller 160.000 km garanti på drivbatteriet på en ny Renault Master. Garantien sikrer mindst 70 % af den oprindelige kapacitet.
- **Hvorfor:** Regel 1 og 8. Den vedhængte ", med mindst 70 % …" har intet verbum og er en selvstændig pointe. Tjek mod producentens garantivilkår, at "sikrer" gengiver betingelsen rigtigt (garantien dækker, hvis kapaciteten falder under 70 %). Passer det ikke, skal den oprindelige formulering blive stående.

---

## Artikler


Kilde: tekst-gennemgang/batch-artikler.txt. Værste først, vægtet efter antal sider.
Mellemrum før komma og punktum i eksemplerne ("modelsiden ,", "Berlingo .") kommer fra udtrækket omkring links. I HTML'en står der ikke noget mellemrum, så det er ikke rettet her.

### a1. [43 sider] generate-viden.js:470-471
- **Før:** Siden er ikke skatte-, revisions- eller juridisk rådgivning — er der penge i det, så spørg din revisor.
- **Efter:** Siden er ikke skatte-, revisions- eller juridisk rådgivning. Din revisor kan regne på din virksomheds egne forhold.
- **Hvorfor:** 8 og 10. Tankestregen kæder to pointer sammen, og "er der penge i det, så spørg din revisor" er et råd til læseren. Den neutrale udgave i generate-pages.js:2054 og 4041 kan bruges som forlæg.

### a2. [45 sider] generate-viden.js:542
- **Før:** Uvildigt — leasingselskabet betaler os ikke en krone for at sige god for tilbuddet.
- **Efter:** Tjekket er uvildigt, for leasingselskabet betaler os ikke for at sige god for tilbuddet.
- **Hvorfor:** 1 og 8. "Uvildigt —" er telegramstil uden verbum, og tankestregen bærer sætningen. "Ikke en krone" er et talemåde-greb, og meningen er den samme uden det.

### a3. [43 sider] generate-viden.js:469-470
- **Før:** Datoerne står der, så du kan se, hvor gammelt grundlaget er.
- **Efter:** Ved hver kilde står datoen, så du kan se, hvor gamle oplysningerne er.
- **Hvorfor:** 2 og 4. "Grundlaget" er et samlebegreb fra datamodellen, og "står der" peger uklart på listen ovenover.

### a4. [37 sider] indretning-sider.js:205
- **Før:** Mål for den variant, vi viser på modelsiden , hvor kilde og dato står.
- **Efter:** Målene gælder den udgave af bilen, vi viser på modelsiden. Der kan du også se kilde og dato.
- **Hvorfor:** 1 og 2. Sætningen har intet hovedverbum, og "variant" er datamodellens ord. Bisætningen "hvor kilde og dato står" hænger løst efter modelsiden.

### a5. [37 sider i alt: 12 + 8 + 7 + 5 + 5] generate-viden.js:466 (samme mønster i generate-tilvalg.js:336)
- **Før:** Motorstyrelsen: Regler for gule plader læst 28. sep. 2026
- **Efter:** Motorstyrelsen: Regler for gule plader, hentet 28. sep. 2026
- **Hvorfor:** 6. "Læst" i kildeangivelsen er samme kancellistil som "læst fra", som tabellen retter væk. Gælder også "Den juridiske vejledning: … læst 23. sep. 2026", "Gulplade.dk: alle indsamlede leasingtilbud læst …" og de to andre Motorstyrelsen-kilder. Det er én linje i koden.

### a6. [37 sider] indretning-sider.js:218-219 (også i FAQ'en på indretning-sider.js:293)
- **Før:** Færdige moduler til mellemstore varebiler koster 6.900–26.800 kr. ekskl. moms pr. modul, og en opstilling med et modul i hver side 28.700–51.400 kr. ekskl. moms plus gulv og montering.
- **Efter:** Færdige moduler til mellemstore varebiler koster 6.900–26.800 kr. pr. modul. En opstilling med et modul i hver side koster 28.700–51.400 kr., og gulv og montering kommer oveni. Alle priser er uden moms.
- **Hvorfor:** 9, 8 og 1. Moms nævnes ved hvert tal, og anden halvdel mangler sit verbum. Samtidig rummer sætningen tre pointer.

### a7. [39 sider] indretning-sider.js:366 (og kilde-teksten i tilvalg.json:473)
- **Før:** Vejledende priser ekskl. moms.
- **Efter:** Priserne er vejledende og uden moms.
- **Hvorfor:** 1. Sætningen har intet verbum.

### a8. [37 sider] indretning-sider.js:155-156
- **Før:** Moduler på 436 mm i dybden; tagets form og hjulkassernes højde er skematiske.
- **Efter:** Modulerne er 436 mm dybe. Tagets form og hjulkassernes højde er tegnet skematisk.
- **Hvorfor:** 1 og 8. Første halvdel har intet verbum, og semikolonnet samler to pointer.

### a9. [37 sider] indretning-sider.js:211
- **Før:** Tre typiske opstillinger med et modul i hver side og den nyttelast, der er tilbage.
- **Efter:** Tabellen viser tre typiske opstillinger med et modul i hver side, og hvor meget nyttelast der er tilbage.
- **Hvorfor:** 1. Sætningen har intet hovedverbum og er en overskrift forklædt som sætning.

### a10. [37 sider] indretning-sider.js:177-179
- **Før:** Lastrummet er 1.817 mm langt, 1.733 mm bredt, 1.229 mm mellem hjulkasserne og 1.270 mm højt (3,3 m³) for den variant, vi viser mål for.
- **Efter:** I den udgave af bilen, vi viser mål for, er lastrummet 1.817 mm langt, 1.733 mm bredt, 1.229 mm mellem hjulkasserne og 1.270 mm højt (3,3 m³).
- **Hvorfor:** 2 og 5. "Variant" er datamodellens ord, og forbeholdet kommer først til sidst efter alle tallene.

### a11. [37 sider] indretning-sider.js:192
- **Før:** Her er målene, en indretning planlægges efter, og hvad den gør ved nyttelasten.
- **Efter:** Her kan du se de mål, du planlægger indretningen efter, og hvor meget nyttelast den tager.
- **Hvorfor:** 4 og 5. Passivet "planlægges efter" er tungt, og "hvad den gør ved nyttelasten" er uklart.

### a12. [21 sider] viden.json:137
- **Før:** Erhvervskørsel er hovedreglen. Men frokostturen er tilladt, du må køre hjem 25 gange om året, og kolleger må gerne med.
- **Efter:** Bilen må som hovedregel kun bruges til erhvervskørsel. Du må dog køre hjem 25 gange om året. Frokostturen er også tilladt, og kolleger må gerne køre med.
- **Hvorfor:** 8 og 4. Tre undtagelser står i én sætning, og "Erhvervskørsel er hovedreglen" er substantivstil.

### a13. [20 sider] viden.json:232
- **Før:** Ja, i fire situationer: op til 25 gange om året, når bilen er specialindrettet, når virksomheden har skiftende arbejdssteder, og når du har vagt.
- **Efter:** Ja, i fire situationer: når det højst sker 25 gange om året, når bilen er specialindrettet, når virksomheden har skiftende arbejdssteder, og når du har vagt.
- **Hvorfor:** 1. Første led mangler verbum og bryder rækken af "når"-sætninger.

### a14. [36 sider: 18 + 18] indretning-sider.js:220
- **Før:** Indretningen kan ofte lægges ind i leasingaftalen på Citroën Berlingo .
- **Efter:** Du kan ofte få indretningen med i leasingaftalen på Citroën Berlingo.
- **Hvorfor:** 4 og 5. Passivet gør sætningen tung. Med "du" som subjekt bliver den direkte.

### a15. [13 sider] viden.json:1732 (samme sætning i desc på viden.json:1731)
- **Før:** Momsen falder forskelligt, likviditeten bindes forskelligt, og risikoen for bilens værdi ligger to forskellige steder.
- **Efter:** Leasing og køb har hver sine momsregler og binder pengene på hver sin måde. Risikoen for bilens værdi ligger også hos hver sin part.
- **Hvorfor:** 3 og 4. "Momsen falder" og "likviditeten bindes" er abstrakte substantiver, og sætningen nævner ikke, at det handler om leasing og køb. Den kan ikke blive mere konkret uden nye fakta.

### a16. [9 sider] viden.json:2736
- **Før:** Afgiften falder dramatisk, rækkevidden står i brochuren — og nyttelasten er den, ingen kigger på.
- **Efter:** Afgiften er markant lavere, og rækkevidden står i brochuren. Nyttelasten er det tal, de færreste tjekker.
- **Hvorfor:** 8 og 10. Tankestregen og "dramatisk" giver sætningen et reklame-tonefald, og "ingen kigger på" er en overdrivelse.

### a17. [9 sider] viden.json:1429
- **Før:** Tre tal, der ofte forveksles. Det ene afgør, hvad du må laste. Det andet, om du må køre bilen. Det tredje står sjældent i annoncen.
- **Efter:** Tre tal bliver ofte forvekslet. Det ene afgør, hvad du må laste, og det andet, om du må køre bilen. Det tredje står sjældent i annoncen.
- **Hvorfor:** 1. "Tre tal, der ofte forveksles" og "Det andet, om du må køre bilen" er brudstykker uden hovedverbum.

### a18. [8 sider] viden.json:3458
- **Før:** Det er værd at tjekke, før du køber brugt.
- **Efter:** (slet sætningen)
- **Hvorfor:** 6 og 10. "Det er værd at" står på listen over kancellisprog, og sætningen er et råd. Den foregående sætning viser allerede reglen.

### a19. [7 sider] viden.json:1258
- **Før:** Under 3 tons, 3-4 tons eller en personbil på gule plader — momsloven behandler dem forskelligt. Her er hvad du faktisk kan trække fra.
- **Efter:** Momsloven behandler biler under 3 tons, biler på 3-4 tons og personbiler på gule plader forskelligt. Her kan du se, hvad du kan trække fra.
- **Hvorfor:** 1, 5 og 8. Sætningen indledes med en liste uden verbum og en tankestreg. "Her er hvad" mangler komma, og "faktisk" er fyldord.

### a20. [7 sider] viden.json:2133
- **Før:** Samme kørekort, samme momsregler, to helt forskellige biler. Forskellen er ikke pris — den er, hvordan lasten kommer ind og ud.
- **Efter:** Lad og lukket varerum kræver samme kørekort og har samme momsregler, men det er to helt forskellige biler. Forskellen ligger ikke i prisen, men i, hvordan lasten kommer ind og ud.
- **Hvorfor:** 1 og 8. Første sætning har intet verbum og ikke noget subjekt. Tankestregen skiller anden sætning.

### a21. [7 sider] viden.json:3218
- **Før:** Kia oplyser op til 8,0 m³ lastrum, op til 1.200 kg nyttelast, 800 volt med 10–80 % på cirka 25 minutter og op til omkring 460 km rækkevidde.
- **Efter:** Kia oplyser op til 8,0 m³ lastrum og op til 1.200 kg nyttelast. Med 800 volt lader den fra 10 til 80 % på cirka 25 minutter, og rækkevidden er op til omkring 460 km.
- **Hvorfor:** 1 og 8. Sætningen er en liste forklædt som sætning, og "800 volt med 10–80 % på cirka 25 minutter" mangler verbum. Formuleringen svarer til FAQ'en på viden.json:3271.

### a22. [6 sider] viden.json:2812
- **Før:** Det, der virker, er at fjerne bøvlet og gøre arbejdsdagen bedre: en ladeboks hjemme, strømmen betalt, et bedre arbejdsmiljø — og gerne et løntillæg for at skifte.
- **Efter:** Det virker at fjerne bøvlet og gøre arbejdsdagen bedre. Det kan være en ladeboks hjemme, betalt strøm, et bedre arbejdsmiljø og gerne et løntillæg for at skifte.
- **Hvorfor:** 4 og 8. "Det, der virker, er at" er substantivstil, og sætningen har både kolon og tankestreg.

### a23. [7 sider] viden.json:2956
- **Før:** Her er alt, hvad Renault selv har oplyst, og forskellen til den Trafic E-Tech, du kan lease i dag.
- **Efter:** Her er alt, hvad Renault selv har oplyst, og hvordan bilen adskiller sig fra den Trafic E-Tech, du kan lease i dag.
- **Hvorfor:** 4. "Forskellen til" er substantivstil. Samme felt har også "en helt ny elvarebil — ikke en opdatering", hvor et komma kan erstatte tankestregen (regel 8).

### a24. [5 sider] viden.json:1156
- **Før:** Det lyder for godt til at være sandt, men elbilernes lave afgift gør det muligt.
- **Efter:** Det kan lade sig gøre, fordi afgiften på elbiler er lav.
- **Hvorfor:** 10. "For godt til at være sandt" er en reklamefrase. Den foregående sætning i samme felt ("hvide plader — så er den …") kan også deles ved tankestregen (regel 8).

### a25. [5 sider] viden.json:333
- **Før:** Fælden er ikke turen til skolen, men at bilen holder ved din bopæl om natten.
- **Efter:** Det afgørende er ikke turen til skolen, men om bilen holder ved din bopæl om natten.
- **Hvorfor:** 10. "Fælden" lyder som en advarsel. Sætningen kan vise fakta neutralt.

### a26. [5 sider] viden.json:1937
- **Før:** Forskellen er hæftelsen: ejeren hæfter personligt og ubegrænset for virksomhedens gæld — også for leasingaftalen.
- **Efter:** Forskellen er, at ejeren hæfter personligt og ubegrænset for virksomhedens gæld, også for leasingaftalen.
- **Hvorfor:** 4 og 8. Substantivet "hæftelsen" gentages som verbum, og sætningen har både kolon og tankestreg.

### a27. [19 sider] viden.json:10
- **Før:** Det giver momsfradrag og lavere registreringsafgift — men bilen må som udgangspunkt kun bruges til arbejde.
- **Efter:** Det giver momsfradrag og lavere registreringsafgift, men bilen må som udgangspunkt kun bruges til arbejde.
- **Hvorfor:** 8. Tankestregen før "men" er overflødig, og et komma er nok.

### a28. [5 sider] tilvalg.json:157 (ikke i de fire søgte filer)
- **Før:** Lastrummets mål på de mest solgte varebiler og bilindretning efter fag.
- **Efter:** Her finder du lastrummets mål på de mest solgte varebiler og indretning til hvert fag.
- **Hvorfor:** 1. Sætningen har intet verbum.

### a29. [6 sider] viden.json:1513
- **Før:** Her er tjeklisten — med kilde ved hvert punkt.
- **Efter:** Her er tjeklisten med en kilde ved hvert punkt.
- **Hvorfor:** 8. Tankestregen er overflødig.

### a30. [6 sider] viden.json:3548
- **Før:** Siden 1. januar 2025 har kommunerne haft lov til at oprette én nulemissionszone hver — men ingen zone gælder endnu.
- **Efter:** Siden 1. januar 2025 har kommunerne haft lov til at oprette én nulemissionszone hver, men ingen zone gælder endnu.
- **Hvorfor:** 8. Tankestregen før "men" er overflødig, og et komma er nok.
