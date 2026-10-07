# Forslag: skabelonsætninger i artikler, Håndbogen, Nyheder og Til varebilen

Kilde: tekst-gennemgang/batch-artikler.txt. Værste først, vægtet efter antal sider.
Mellemrum før komma og punktum i eksemplerne ("modelsiden ,", "Berlingo .") kommer fra udtrækket omkring links. I HTML'en står der ikke noget mellemrum, så det er ikke rettet her.

### 1. [43 sider] generate-viden.js:470-471
- **Før:** Siden er ikke skatte-, revisions- eller juridisk rådgivning — er der penge i det, så spørg din revisor.
- **Efter:** Siden er ikke skatte-, revisions- eller juridisk rådgivning. Din revisor kan regne på din virksomheds egne forhold.
- **Hvorfor:** 8 og 10. Tankestregen kæder to pointer sammen, og "er der penge i det, så spørg din revisor" er et råd til læseren. Den neutrale udgave i generate-pages.js:2054 og 4041 kan bruges som forlæg.

### 2. [45 sider] generate-viden.js:542
- **Før:** Uvildigt — leasingselskabet betaler os ikke en krone for at sige god for tilbuddet.
- **Efter:** Tjekket er uvildigt, for leasingselskabet betaler os ikke for at sige god for tilbuddet.
- **Hvorfor:** 1 og 8. "Uvildigt —" er telegramstil uden verbum, og tankestregen bærer sætningen. "Ikke en krone" er et talemåde-greb, og meningen er den samme uden det.

### 3. [43 sider] generate-viden.js:469-470
- **Før:** Datoerne står der, så du kan se, hvor gammelt grundlaget er.
- **Efter:** Ved hver kilde står datoen, så du kan se, hvor gamle oplysningerne er.
- **Hvorfor:** 2 og 4. "Grundlaget" er et samlebegreb fra datamodellen, og "står der" peger uklart på listen ovenover.

### 4. [37 sider] indretning-sider.js:205
- **Før:** Mål for den variant, vi viser på modelsiden , hvor kilde og dato står.
- **Efter:** Målene gælder den udgave af bilen, vi viser på modelsiden. Der kan du også se kilde og dato.
- **Hvorfor:** 1 og 2. Sætningen har intet hovedverbum, og "variant" er datamodellens ord. Bisætningen "hvor kilde og dato står" hænger løst efter modelsiden.

### 5. [37 sider i alt: 12 + 8 + 7 + 5 + 5] generate-viden.js:466 (samme mønster i generate-tilvalg.js:336)
- **Før:** Motorstyrelsen: Regler for gule plader læst 28. sep. 2026
- **Efter:** Motorstyrelsen: Regler for gule plader, hentet 28. sep. 2026
- **Hvorfor:** 6. "Læst" i kildeangivelsen er samme kancellistil som "læst fra", som tabellen retter væk. Gælder også "Den juridiske vejledning: … læst 23. sep. 2026", "Gulplade.dk: alle indsamlede leasingtilbud læst …" og de to andre Motorstyrelsen-kilder. Det er én linje i koden.

### 6. [37 sider] indretning-sider.js:218-219 (også i FAQ'en på indretning-sider.js:293)
- **Før:** Færdige moduler til mellemstore varebiler koster 6.900–26.800 kr. ekskl. moms pr. modul, og en opstilling med et modul i hver side 28.700–51.400 kr. ekskl. moms plus gulv og montering.
- **Efter:** Færdige moduler til mellemstore varebiler koster 6.900–26.800 kr. pr. modul. En opstilling med et modul i hver side koster 28.700–51.400 kr., og gulv og montering kommer oveni. Alle priser er uden moms.
- **Hvorfor:** 9, 8 og 1. Moms nævnes ved hvert tal, og anden halvdel mangler sit verbum. Samtidig rummer sætningen tre pointer.

### 7. [39 sider] indretning-sider.js:366 (og kilde-teksten i tilvalg.json:473)
- **Før:** Vejledende priser ekskl. moms.
- **Efter:** Priserne er vejledende og uden moms.
- **Hvorfor:** 1. Sætningen har intet verbum.

### 8. [37 sider] indretning-sider.js:155-156
- **Før:** Moduler på 436 mm i dybden; tagets form og hjulkassernes højde er skematiske.
- **Efter:** Modulerne er 436 mm dybe. Tagets form og hjulkassernes højde er tegnet skematisk.
- **Hvorfor:** 1 og 8. Første halvdel har intet verbum, og semikolonnet samler to pointer.

### 9. [37 sider] indretning-sider.js:211
- **Før:** Tre typiske opstillinger med et modul i hver side og den nyttelast, der er tilbage.
- **Efter:** Tabellen viser tre typiske opstillinger med et modul i hver side, og hvor meget nyttelast der er tilbage.
- **Hvorfor:** 1. Sætningen har intet hovedverbum og er en overskrift forklædt som sætning.

### 10. [37 sider] indretning-sider.js:177-179
- **Før:** Lastrummet er 1.817 mm langt, 1.733 mm bredt, 1.229 mm mellem hjulkasserne og 1.270 mm højt (3,3 m³) for den variant, vi viser mål for.
- **Efter:** I den udgave af bilen, vi viser mål for, er lastrummet 1.817 mm langt, 1.733 mm bredt, 1.229 mm mellem hjulkasserne og 1.270 mm højt (3,3 m³).
- **Hvorfor:** 2 og 5. "Variant" er datamodellens ord, og forbeholdet kommer først til sidst efter alle tallene.

### 11. [37 sider] indretning-sider.js:192
- **Før:** Her er målene, en indretning planlægges efter, og hvad den gør ved nyttelasten.
- **Efter:** Her kan du se de mål, du planlægger indretningen efter, og hvor meget nyttelast den tager.
- **Hvorfor:** 4 og 5. Passivet "planlægges efter" er tungt, og "hvad den gør ved nyttelasten" er uklart.

### 12. [21 sider] viden.json:137
- **Før:** Erhvervskørsel er hovedreglen. Men frokostturen er tilladt, du må køre hjem 25 gange om året, og kolleger må gerne med.
- **Efter:** Bilen må som hovedregel kun bruges til erhvervskørsel. Du må dog køre hjem 25 gange om året. Frokostturen er også tilladt, og kolleger må gerne køre med.
- **Hvorfor:** 8 og 4. Tre undtagelser står i én sætning, og "Erhvervskørsel er hovedreglen" er substantivstil.

### 13. [20 sider] viden.json:232
- **Før:** Ja, i fire situationer: op til 25 gange om året, når bilen er specialindrettet, når virksomheden har skiftende arbejdssteder, og når du har vagt.
- **Efter:** Ja, i fire situationer: når det højst sker 25 gange om året, når bilen er specialindrettet, når virksomheden har skiftende arbejdssteder, og når du har vagt.
- **Hvorfor:** 1. Første led mangler verbum og bryder rækken af "når"-sætninger.

### 14. [36 sider: 18 + 18] indretning-sider.js:220
- **Før:** Indretningen kan ofte lægges ind i leasingaftalen på Citroën Berlingo .
- **Efter:** Du kan ofte få indretningen med i leasingaftalen på Citroën Berlingo.
- **Hvorfor:** 4 og 5. Passivet gør sætningen tung. Med "du" som subjekt bliver den direkte.

### 15. [13 sider] viden.json:1732 (samme sætning i desc på viden.json:1731)
- **Før:** Momsen falder forskelligt, likviditeten bindes forskelligt, og risikoen for bilens værdi ligger to forskellige steder.
- **Efter:** Leasing og køb har hver sine momsregler og binder pengene på hver sin måde. Risikoen for bilens værdi ligger også hos hver sin part.
- **Hvorfor:** 3 og 4. "Momsen falder" og "likviditeten bindes" er abstrakte substantiver, og sætningen nævner ikke, at det handler om leasing og køb. Den kan ikke blive mere konkret uden nye fakta.

### 16. [9 sider] viden.json:2736
- **Før:** Afgiften falder dramatisk, rækkevidden står i brochuren — og nyttelasten er den, ingen kigger på.
- **Efter:** Afgiften er markant lavere, og rækkevidden står i brochuren. Nyttelasten er det tal, de færreste tjekker.
- **Hvorfor:** 8 og 10. Tankestregen og "dramatisk" giver sætningen et reklame-tonefald, og "ingen kigger på" er en overdrivelse.

### 17. [9 sider] viden.json:1429
- **Før:** Tre tal, der ofte forveksles. Det ene afgør, hvad du må laste. Det andet, om du må køre bilen. Det tredje står sjældent i annoncen.
- **Efter:** Tre tal bliver ofte forvekslet. Det ene afgør, hvad du må laste, og det andet, om du må køre bilen. Det tredje står sjældent i annoncen.
- **Hvorfor:** 1. "Tre tal, der ofte forveksles" og "Det andet, om du må køre bilen" er brudstykker uden hovedverbum.

### 18. [8 sider] viden.json:3458
- **Før:** Det er værd at tjekke, før du køber brugt.
- **Efter:** (slet sætningen)
- **Hvorfor:** 6 og 10. "Det er værd at" står på listen over kancellisprog, og sætningen er et råd. Den foregående sætning viser allerede reglen.

### 19. [7 sider] viden.json:1258
- **Før:** Under 3 tons, 3-4 tons eller en personbil på gule plader — momsloven behandler dem forskelligt. Her er hvad du faktisk kan trække fra.
- **Efter:** Momsloven behandler biler under 3 tons, biler på 3-4 tons og personbiler på gule plader forskelligt. Her kan du se, hvad du kan trække fra.
- **Hvorfor:** 1, 5 og 8. Sætningen indledes med en liste uden verbum og en tankestreg. "Her er hvad" mangler komma, og "faktisk" er fyldord.

### 20. [7 sider] viden.json:2133
- **Før:** Samme kørekort, samme momsregler, to helt forskellige biler. Forskellen er ikke pris — den er, hvordan lasten kommer ind og ud.
- **Efter:** Lad og lukket varerum kræver samme kørekort og har samme momsregler, men det er to helt forskellige biler. Forskellen ligger ikke i prisen, men i, hvordan lasten kommer ind og ud.
- **Hvorfor:** 1 og 8. Første sætning har intet verbum og ikke noget subjekt. Tankestregen skiller anden sætning.

### 21. [7 sider] viden.json:3218
- **Før:** Kia oplyser op til 8,0 m³ lastrum, op til 1.200 kg nyttelast, 800 volt med 10–80 % på cirka 25 minutter og op til omkring 460 km rækkevidde.
- **Efter:** Kia oplyser op til 8,0 m³ lastrum og op til 1.200 kg nyttelast. Med 800 volt lader den fra 10 til 80 % på cirka 25 minutter, og rækkevidden er op til omkring 460 km.
- **Hvorfor:** 1 og 8. Sætningen er en liste forklædt som sætning, og "800 volt med 10–80 % på cirka 25 minutter" mangler verbum. Formuleringen svarer til FAQ'en på viden.json:3271.

### 22. [6 sider] viden.json:2812
- **Før:** Det, der virker, er at fjerne bøvlet og gøre arbejdsdagen bedre: en ladeboks hjemme, strømmen betalt, et bedre arbejdsmiljø — og gerne et løntillæg for at skifte.
- **Efter:** Det virker at fjerne bøvlet og gøre arbejdsdagen bedre. Det kan være en ladeboks hjemme, betalt strøm, et bedre arbejdsmiljø og gerne et løntillæg for at skifte.
- **Hvorfor:** 4 og 8. "Det, der virker, er at" er substantivstil, og sætningen har både kolon og tankestreg.

### 23. [7 sider] viden.json:2956
- **Før:** Her er alt, hvad Renault selv har oplyst, og forskellen til den Trafic E-Tech, du kan lease i dag.
- **Efter:** Her er alt, hvad Renault selv har oplyst, og hvordan bilen adskiller sig fra den Trafic E-Tech, du kan lease i dag.
- **Hvorfor:** 4. "Forskellen til" er substantivstil. Samme felt har også "en helt ny elvarebil — ikke en opdatering", hvor et komma kan erstatte tankestregen (regel 8).

### 24. [5 sider] viden.json:1156
- **Før:** Det lyder for godt til at være sandt, men elbilernes lave afgift gør det muligt.
- **Efter:** Det kan lade sig gøre, fordi afgiften på elbiler er lav.
- **Hvorfor:** 10. "For godt til at være sandt" er en reklamefrase. Den foregående sætning i samme felt ("hvide plader — så er den …") kan også deles ved tankestregen (regel 8).

### 25. [5 sider] viden.json:333
- **Før:** Fælden er ikke turen til skolen, men at bilen holder ved din bopæl om natten.
- **Efter:** Det afgørende er ikke turen til skolen, men om bilen holder ved din bopæl om natten.
- **Hvorfor:** 10. "Fælden" lyder som en advarsel. Sætningen kan vise fakta neutralt.

### 26. [5 sider] viden.json:1937
- **Før:** Forskellen er hæftelsen: ejeren hæfter personligt og ubegrænset for virksomhedens gæld — også for leasingaftalen.
- **Efter:** Forskellen er, at ejeren hæfter personligt og ubegrænset for virksomhedens gæld, også for leasingaftalen.
- **Hvorfor:** 4 og 8. Substantivet "hæftelsen" gentages som verbum, og sætningen har både kolon og tankestreg.

### 27. [19 sider] viden.json:10
- **Før:** Det giver momsfradrag og lavere registreringsafgift — men bilen må som udgangspunkt kun bruges til arbejde.
- **Efter:** Det giver momsfradrag og lavere registreringsafgift, men bilen må som udgangspunkt kun bruges til arbejde.
- **Hvorfor:** 8. Tankestregen før "men" er overflødig, og et komma er nok.

### 28. [5 sider] tilvalg.json:157 (ikke i de fire søgte filer)
- **Før:** Lastrummets mål på de mest solgte varebiler og bilindretning efter fag.
- **Efter:** Her finder du lastrummets mål på de mest solgte varebiler og indretning til hvert fag.
- **Hvorfor:** 1. Sætningen har intet verbum.

### 29. [6 sider] viden.json:1513
- **Før:** Her er tjeklisten — med kilde ved hvert punkt.
- **Efter:** Her er tjeklisten med en kilde ved hvert punkt.
- **Hvorfor:** 8. Tankestregen er overflødig.

### 30. [6 sider] viden.json:3548
- **Før:** Siden 1. januar 2025 har kommunerne haft lov til at oprette én nulemissionszone hver — men ingen zone gælder endnu.
- **Efter:** Siden 1. januar 2025 har kommunerne haft lov til at oprette én nulemissionszone hver, men ingen zone gælder endnu.
- **Hvorfor:** 8. Tankestregen før "men" er overflødig, og et komma er nok.
