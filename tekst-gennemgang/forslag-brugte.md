# Forslag: brugte varebiler (batch-brugte.txt)

Sorteret efter, hvor meget sætningen bryder skrivestilen, vægtet efter antal sider. Knapper, overskrifter,
tabeletiketter, modelbetegnelser og forhandlerens egne tekster (beskrivelserne) er ikke med.

### 1. [329 sider] generate-brugte.js:2319
- **Før:** Vi er ikke forhandler: bilen købes hos den forhandler, vi samarbejder med, og handlen er forhandlerens ansvar.
- **Efter:** Vi er ikke selv forhandler. Du køber bilen hos den forhandler, vi samarbejder med, og handlen er forhandlerens ansvar.
- **Hvorfor:** Regel 4 og 8. Passiv "købes" bliver til "du køber", og kolonnet erstattes af to sætninger. Det juridiske indhold er det samme: vi er ikke forhandler, køb sker hos forhandleren, og handlen er forhandlerens ansvar.

### 2. [329 sider] generate-brugte.js:2300
- **Før:** Lasteevne og totalvægt oplyser forhandleren ikke, og vi regner dem ikke ud — de afhænger af den enkelte bils opbygning.
- **Efter:** Forhandleren oplyser ikke lasteevne og totalvægt. Vi regner dem heller ikke ud, fordi de afhænger af, hvordan den enkelte bil er bygget op.
- **Hvorfor:** Regel 5 (objektet står først, så man skal læse sætningen to gange), regel 8 (tre pointer og en tankestreg) og regel 4 ("opbygning" bliver til et verbum).

### 3. [329 sider] generate-brugte.js:2300 (datoen fra datoDa, generate-brugte.js:137)
- **Før:** Tallene er forhandlerens egne, hentet den 25. sep. 2026.
- **Efter:** Tallene er forhandlerens egne, og vi hentede dem den 25. september 2026.
- **Hvorfor:** Regel 1 og 6. "hentet den" er telegramstil uden subjekt, og "sep." er en forkortelse fra en datamodel. datoDa forkorter månederne til "jan.", "sep." osv. og bruges i alle løbende sætninger på brugtsiderne. Hvis den skriver månederne fuldt ud, bliver punkt 4, 15 og 16 også bedre. Datoen er den samme.

### 4. [329 sider] generate-brugte.js:2320
- **Før:** Bilen kan være solgt, siden listen blev hentet den 25. sep. 2026.
- **Efter:** Bilen kan være solgt, efter at vi hentede listen den 25. september 2026.
- **Hvorfor:** Regel 4 og 6. Passiv "blev hentet" bliver til et verbum med subjekt. "siden" kan læses som "fordi", men "efter at" kan kun betyde tid. Månedsnavnet skrives fuldt ud (se punkt 3).

### 5. [328 sider] generate-brugte.js:2288
- **Før:** Teksten er forhandlerens egen; kontaktoplysninger er taget ud.
- **Efter:** Teksten er forhandlerens egen. Vi har taget kontaktoplysningerne ud.
- **Hvorfor:** Regel 4 og 8. Semikolon og passiv bliver til to korte sætninger med "vi".

### 6. [328 sider] generate-brugte.js:2312
- **Før:** Udstyrslisten er forhandlerens registrering.
- **Efter:** Forhandleren har selv lavet udstyrslisten.
- **Hvorfor:** Regel 4 og 2. "registrering" er et substantiv fra datamodellen. Den næste sætning ("Tjek den på bilen.") passer stadig.

### 7. [ca. 285 sider: 77+59+37+31+18+17+17+9+9+6+5] generate-brugte.js:432
- **Før:** Brugt Mercedes-Benz Citan kassevogn fra 2024 med 95 hk dieselmotor og automatgear.
- **Efter:** Det er en brugt Mercedes-Benz Citan kassevogn fra 2024 med 95 hk dieselmotor og automatgear.
- **Hvorfor:** Regel 1. Sætningen har intet verbum og står som manchet over specifikationerne. Den virker for alle karrosserier, drivmidler og gearkasser. Bemærk (bør tjekkes, ikke rettes sprogligt): eksemplerne kalder også en Ford Ranger (punkt 48 i batchen) og en Audi SQ5 for "kassevogn". Det kommer fra KARROSSERI_NAVN og forhandlerens karrosserifelt.

### 8. [ca. 282 sider: 134+132+16] generate-brugte.js:2127
- **Før:** Andre brugte Ford Ranger i samme prisklasse.
- **Efter:** Her er andre brugte Ford Ranger i samme prisklasse.
- **Hvorfor:** Regel 1. Manchetten er en sætning med punktum, men den har intet verbum.

### 9. [327 sider] generate-brugte.js:437
- **Før:** Den har kørt 266.000 km og koster 112.500 kr. ekskl. moms.
- **Efter:** Den har kørt 266.000 km og koster 112.500 kr.
- **Hvorfor:** Regel 9. Momsen står allerede lige nedenunder i tabellen ("Kontant ekskl. moms") og ved leasingtallene. Prisen er den samme. Hvis I vil være helt sikre på, at momsen nævnes på hver side, kan I i stedet lade den stå her og fjerne den et andet sted.

### 10. [329 sider] generate-brugte.js:402
- **Før:** Fremvisning, prøvetur eller et leasingforslag
- **Efter:** Vi aftaler fremvisning, prøvetur eller et leasingforslag
- **Hvorfor:** Regel 1. Punkterne før og efter i samme liste har verbum ("Vi tjekker …", "… kan komme med"), men det her har ikke. Med et verbum hænger listen sammen.

### 11. [329 sider] generate-brugte.js:403
- **Før:** Byttebil kan komme med i handlen
- **Efter:** Du kan få en byttebil med i handlen
- **Hvorfor:** Regel 4 og 5. Læseren bliver subjekt i stedet for "Byttebil" uden artikel, og sætningen bliver almindelig dansk.

### 12. [57 sider] generate-brugte.js:418
- **Før:** Vi leder på lageret og hos forhandlerne — og siger det, hvis en ny bil på leasing er billigere.
- **Efter:** Vi leder på lageret og hos forhandlerne, og vi siger det, hvis en ny bil på leasing er billigere.
- **Hvorfor:** Regel 8. Tankestregen er unødvendig, og "vi" gentages, så sætningen bliver klar.

### 13. [52 sider] generate-brugte.js:1218
- **Før:** På lageret lige nu fra 112.500 kr. til 399.800 kr. ekskl. moms.
- **Efter:** Bilerne på lageret koster lige nu fra 112.500 kr. til 399.800 kr. ekskl. moms.
- **Hvorfor:** Regel 1. FAQ-svaret mangler både subjekt og verbum.

### 14. [44 sider] generate-brugte.js:1193
- **Før:** Årgangen flytter mest: her er typisk pris og kilometer for hver årgang med mindst to biler.
- **Efter:** Årgangen betyder mest for prisen. Tabellen viser typisk pris og kilometer for hver årgang med mindst to biler.
- **Hvorfor:** Regel 8 (kolon plus to pointer) og regel 3 ("flytter mest" er vagt, så nu står det, hvad der flyttes).

### 15. [44 sider] generate-brugte.js:1208 (også 2054)
- **Før:** Regnet ud af lageret den 25. sep. 2026.
- **Efter:** Vi har regnet tallene ud fra lageret den 25. september 2026.
- **Hvorfor:** Regel 1 og 6. Telegramstil uden subjekt og forkortet måned. "ud af lageret" bliver til "ud fra lageret".

### 16. [56 sider] generate-brugte.js:1311
- **Før:** Årgangene spænder fra 2007 til 2023, med 189.000 km på den typiske bil.
- **Efter:** Bilerne er fra 2007 til 2023, og den typiske bil har kørt 189.000 km.
- **Hvorfor:** Regel 1 og 4. Det vedhængte ", med … km" har intet verbum, og "spænder" er et omstændeligt ord.

### 17. [56 sider] generate-brugte.js:226
- **Før:** Du køber bilen hos forhandleren — vi formidler kontakten og kan få betaling for det.
- **Efter:** Du køber bilen hos forhandleren. Vi formidler kontakten og kan få betaling for det.
- **Hvorfor:** Regel 8. Tankestregen bliver til punktum. Den juridiske ordlyd ("formidler kontakten og kan få betaling for det") er uændret.

### 18. [56 sider] generate-brugte.js:226
- **Før:** Formidling Bilerne sælges af en forhandler, vi samarbejder med.
- **Efter:** Formidling En forhandler, vi samarbejder med, sælger bilerne.
- **Hvorfor:** Regel 4. Passiv "sælges af" bliver aktiv. Mærket "Formidling" står uændret, og indholdet er det samme.

### 19. [44 sider] generate-brugte.js:1220
- **Før:** En fra 2023 koster typisk 329.800 kr., en fra 2018 typisk 165.000 kr.
- **Efter:** En bil fra 2023 koster typisk 329.800 kr., og en fra 2018 koster typisk 165.000 kr.
- **Hvorfor:** Regel 1. Anden halvdel mangler verbum, og "En fra 2023" mangler et navneord.

### 20. [35 sider: 18+17] generate-brugte.js:1196
- **Før:** Som kassevogn koster den typisk 245.000 kr. (9 biler).
- **Efter:** De 9 kassevogne koster typisk 245.000 kr.
- **Hvorfor:** Regel 5 og 8. "Som kassevogn koster den" er en tung ordstilling, og antallet hænger i en parentes. Tal og pris er de samme. Skabelonen skal bruge flertal af karrosseriet (kassevogne, ladvogne), og ved 1 bil skal den skrive "Den ene kassevogn koster …". Det sker sjældent, fordi typer kræver flere biler.

### 21. [50 sider] generate-brugte.js:1236
- **Før:** Ydelse og restværdi står på bilens side.
- **Efter:** På bilens side kan du se ydelse og restværdi.
- **Hvorfor:** Regel 5. Det er samme mønster som tabellens eksempel "På modelsiden kan du se, hvad der følger med".

### 22. [11 sider] generate-brugte.js:1244
- **Før:** Udbetaling, løbetid og hvad der er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se udbetaling, løbetid og hvad der følger med.
- **Hvorfor:** Regel 5. Det er præcis den ordstilling, brugeren har rettet i tabellen ("Hvad hvert tilbud indeholder, står på modelsiden").

### 23. [154 sider] generate-brugte.js:443
- **Før:** Bilen må trække 2.500 kg med bremset anhænger, kører 15,2 km/l og kan leases fra 2.275 kr. om måneden.
- **Efter:** Bilen må trække 2.500 kg med bremset anhænger og kører 15,2 km/l. Den kan leases fra 2.275 kr. om måneden.
- **Hvorfor:** Regel 8. Der er tre pointer i én sætning. Leasingprisen er en anden slags oplysning og får sin egen sætning (s3 deles, så leasing bliver til en ny sætning).

### 24. [8 sider] generate-brugte.js:1242 (også 2049)
- **Før:** Vi sammenligner 2 erhvervsleasingtilbud på en ny Ford Transit, med ydelser fra 2.859 kr. om måneden ekskl. moms før udbetaling.
- **Efter:** Vi sammenligner 2 erhvervsleasingtilbud på en ny Ford Transit. Ydelsen starter ved 2.859 kr. om måneden ekskl. moms før udbetaling.
- **Hvorfor:** Regel 1 og 8. Den vedhængte ", med ydelser fra …" har intet verbum, og sætningen bærer to pointer.

### 25. [7 sider, plus mærke- og modelsider] generate-brugte.js:1305
- **Før:** 23 brugte Ford Transit på lager.
- **Efter:** Der er 23 brugte Ford Transit på lager.
- **Hvorfor:** Regel 1. Sætningen mangler verbum, og en sætning skal helst ikke begynde med et tal. Den virker også ved 1 ("Der er 1 brugt …").

### 26. [56 sider] generate-brugte.js:227
- **Før:** Priser og tal er forhandlerens.
- **Efter:** Priserne og tallene kommer fra forhandleren.
- **Hvorfor:** Regel 4 og 5. Den korte genitivkonstruktion er stiv, og et verbum siger det direkte.

### 27. [6 sider] generate-brugte.js:707 (også 808, 819, 830, 841, 852)
- **Før:** Gearkassen står, som forhandleren har registreret den.
- **Efter:** Forhandleren har selv registreret gearkassen.
- **Hvorfor:** Regel 4 og 5. Den egentlige handling står i bisætningen. Med forhandleren som subjekt bliver sætningen kortere og siger det samme.

### 28. [5 sider] generate-brugte.js:2099
- **Før:** Producenten giver 8 år eller 160.000 km garanti på drivbatteriet på en ny Renault Master, med mindst 70 % af den oprindelige kapacitet.
- **Efter:** Producenten giver 8 år eller 160.000 km garanti på drivbatteriet på en ny Renault Master. Garantien sikrer mindst 70 % af den oprindelige kapacitet.
- **Hvorfor:** Regel 1 og 8. Den vedhængte ", med mindst 70 % …" har intet verbum og er en selvstændig pointe. Tjek mod producentens garantivilkår, at "sikrer" gengiver betingelsen rigtigt (garantien dækker, hvis kapaciteten falder under 70 %). Passer det ikke, skal den oprindelige formulering blive stående.
