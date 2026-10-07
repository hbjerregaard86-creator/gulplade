# Sproglige forslag: guider, sammenligninger, udbydere og udstyr

Værste først, vægtet efter antal sider. Regelnumre henviser til "Skrivestil" i CLAUDE.md.
Pladsholdere er vist med eksemplets værdier. I koden skal de stå som før.

### 1. [274 sider] generate-pages.js:371-372 (også generate-tilvalg.js:291-292)
- **Før:** Forhandleren betaler os for henvendelsen — det samme beløb fra alle, og uanset om du siger ja eller nej.
- **Efter:** Forhandleren betaler os for henvendelsen. Alle betaler det samme beløb, og de betaler, uanset om du siger ja eller nej.
- **Hvorfor:** Regel 8. Tankestregen klistrer to pointer sammen, og "og uanset" mangler et verbum at hænge på.

### 2. [268 sider] generate-pages.js:368-369
- **Før:** Du siger, hvad bilen skal kunne — vi ringer rundt til forhandlerne, beder om det samme hos alle, og læser tilbuddene igennem, før du ser dem.
- **Efter:** Du fortæller, hvad bilen skal kunne. Så ringer vi rundt til forhandlerne, beder om det samme hos alle og læser tilbuddene igennem, før du ser dem.
- **Hvorfor:** Regel 8. Tankestregen binder to sætninger sammen. Kommaet før "og læser" skal også væk.

### 3. [268 sider] generate-pages.js:380-381
- **Før:** Her er der ingen forhandler inde over — du betaler, og ingen andre.
- **Efter:** Her er der ingen forhandler inde over. Det er dig, der betaler, og ingen andre.
- **Hvorfor:** Regel 8. To pointer bundet sammen med en tankestreg.

### 4. [269 sider] generate-pages.js:382
- **Før:** 695 kr. ekskl. moms pr. tilbud.
- **Efter:** Det koster 695 kr. ekskl. moms pr. tilbud.
- **Hvorfor:** Regel 1. Afsnittet har intet verbum. Det står i et kort med løbende tekst og er ikke en tabelcelle.

### 5. [149 sider] generate-pages.js:1070
- **Før:** Prisen er det billigste annoncerede tilbud på hver model, ekskl. moms; hvilken udbyder og variant står på modelsiden.
- **Efter:** Prisen er det billigste annoncerede tilbud på hver model, ekskl. moms. På modelsiden kan du se, hvilken bil tilbuddet gælder, og hvilken forhandler eller hvilket leasingselskab det kommer fra.
- **Hvorfor:** Regel 2 ("variant" og "udbyder" i løbende tekst), regel 5 (omvendt ordstilling "hvilken … står på modelsiden", samme mønster som i før/efter-tabellen) og regel 8 (semikolon).

### 6. [149 sider] generate-pages.js:1070
- **Før:** Mål og vægt gælder den variant, der står på modelsiden.
- **Efter:** Mål og vægt gælder den bil, der står på modelsiden.
- **Hvorfor:** Regel 2. "Variant" er datamodellens ord.

### 7. [149 sider] generate-pages.js:1011 (samme sætning på 87 + 62 sider)
- **Før:** Citroën Berlingo er billigst at lease: 1.171 kr. mindre om måneden, når udbetalingen er fordelt over løbetiden.
- **Efter:** Citroën Berlingo er billigst at lease. Den koster 1.171 kr. mindre om måneden, når udbetalingen er fordelt over løbetiden.
- **Hvorfor:** Regel 1 og 8. Efter kolonet kommer et brudstykke uden verbum. Manchetten samler flere sætninger, så kolonet tager afsnittets eneste kolon.

### 8. [149 sider] generate-pages.js:1070
- **Før:** Den grønne markering viser det bedste tal i rækken, hvor det kan afgøres.
- **Efter:** Den grønne markering viser det bedste tal i hver række, når det ene tal er tydeligt bedst.
- **Hvorfor:** Regel 4. "Hvor det kan afgøres" er en upersonlig passivkonstruktion, og læseren må gætte, hvad "det" er.

### 9. [120 sider] generate-pages.js:1032
- **Før:** På det billigste udstyrsniveau hos begge. Kun poster, hvor producenten oplyser begge dele.
- **Efter:** Vi sammenligner det billigste udstyrsniveau på begge biler og tager kun udstyr med, som producenten oplyser for dem begge.
- **Hvorfor:** Regel 1 (to brudstykker uden verbum) og regel 2 ("poster" er datamodellens ord).

### 10. [97 sider] generate-pages.js:1019 (50 + 47 sider)
- **Før:** Renault Kangoo har længst garanti (5 år / 150.000 km).
- **Efter:** Renault Kangoo har længst garanti (5 år eller 150.000 km).
- **Hvorfor:** Regel 7. Skråstreg i løbende tekst. Værdien kommer fra tabelcellen (gg[1]/gg[2]), så skråstregen skal erstattes, når sætningen bygges. I tabellen må den blive stående.

### 11. [53 sider] generate-pages.js:6487
- **Før:** Kilde og indsamlingsdato står ved hvert tilbud, og modelnavnet fører til modelsiden med de fulde specifikationer.
- **Efter:** Ved hvert tilbud kan du se, hvor og hvornår vi har fundet det. Klik på modelnavnet for at se alle specifikationer på modelsiden.
- **Hvorfor:** Regel 5 (substantiverne står først, som i "Hvad hvert tilbud indeholder, står på modelsiden") og regel 8 (to pointer i én sætning).

### 12. [53 sider] generate-pages.js:6501 (kort udgave på :6121)
- **Før:** Send det ind, og få det gennemgået på de samme punkter, vi sammenligner på her: hvad ydelsen dækker, hvad der ligger uden for, og hvad aftalen koster i alt.
- **Efter:** Send det ind, så gennemgår vi det på de samme punkter, som vi sammenligner på her: hvad ydelsen dækker, hvad der ligger uden for, og hvad aftalen koster i alt.
- **Hvorfor:** Regel 4. "Få det gennemgået" skjuler, hvem der gør det. Med "så gennemgår vi" er det tydeligt.

### 13. [42 sider] viden.json:1642 ("kort")
- **Før:** Vi har gennemgået 122 annoncerede tilbud og talt efter. 14 af dem forholder sig ikke til én eneste driftspost.
- **Efter:** Vi har gennemgået 122 annoncerede tilbud og talt efter. I 14 af dem står der intet om service, dæk, forsikring, grøn ejerafgift eller vejhjælp.
- **Hvorfor:** Regel 3 ("driftspost" er et samlebegreb) og regel 6 ("forholder sig ikke til" er kancellisprog). Listen er de fem poster, som generate-pages.js:3445 definerer.

### 14. [37 sider] viden.json:2204 ("kort")
- **Før:** På vores 58 modeller går den fra 920 til 13.980 kr. om året — og ingen ydelse dækker den.
- **Efter:** På vores 58 modeller går den fra 920 til 13.980 kr. om året, og den er ikke med i nogen leasingydelse.
- **Hvorfor:** Regel 8 (tankestreg). "Ydelse" står alene og er uklart, så "leasingydelse" er tydeligere.

### 15. [37 sider] generate-pages.js:6432
- **Før:** De fem bedste efter inkl. udbetaling
- **Efter:** De fem bedste, når udbetalingen er regnet med
- **Hvorfor:** Regel 1 og 2. Overskriften bygges af kolonnenavnet ("inkl. udbetaling"), så den bliver datamodellens ord. For andre kolonner (fx "lastrum") virker skabelonen fint. Guiden skal derfor have sin egen overskrift i stedet for g.kolonne.

### 16. [23 sider] generate-pages.js:1329
- **Før:** Ikke oplyst betyder, at prislisten ikke nævner udstyret — ikke at bilen mangler det.
- **Efter:** Ikke oplyst betyder, at prislisten ikke nævner udstyret. Det betyder ikke, at bilen mangler det.
- **Hvorfor:** Regel 8. Tankestreg og en halv sætning uden verbum.

### 17. [23 sider] generate-pages.js:1329
- **Før:** Hentet fra hver producents danske prisliste; kilde og dato står på modelsiden.
- **Efter:** Oplysningerne kommer fra producenternes danske prislister. På modelsiden kan du se kilde og dato.
- **Hvorfor:** Regel 1 (ingen grundled), regel 5 (omvendt ordstilling) og regel 8 (semikolon).

### 18. [23 sider] generate-pages.js:1320
- **Før:** Tabellen viser begge ender af modelprogrammet.
- **Efter:** Tabellen viser både det billigste og det dyreste udstyrsniveau på hver model.
- **Hvorfor:** Regel 3. "Begge ender af modelprogrammet" er et billede, og læseren skal oversætte det. Kolonneoverskrifterne siger "Billigste niveau" og "Dyreste niveau".

### 19. [17 sider] generate-pages.js:7443
- **Før:** Kolonnen Inkluderet viser hvad ydelsen dækker, og Ikke inkluderet viser hvad udbyderen eksplicit har skrevet fra — begge er oplysninger, og begge tæller med i oplysningsgraden.
- **Efter:** Kolonnen Inkluderet viser, hvad ydelsen dækker. Kolonnen Ikke inkluderet viser, hvad forhandleren eller leasingselskabet udtrykkeligt har skrevet, at ydelsen ikke dækker. Begge dele tæller med i oplysningsgraden.
- **Hvorfor:** Regel 8 (tre pointer og en tankestreg), regel 2 ("udbyderen" i løbende tekst) og regel 6 ("eksplicit", "skrevet fra"). Der mangler også komma før "hvad". "Begge er oplysninger" siger det samme som "tæller med i oplysningsgraden".

### 20. [17 sider] generate-pages.js:7382
- **Før:** Målt på samlet pris pr. md. — månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Efter:** Vi sammenligner den samlede pris pr. måned, altså månedsydelsen plus udbetalingen fordelt over løbetiden.
- **Hvorfor:** Regel 1 (intet verbum), regel 4 ("målt på") og regel 8 (tankestreg). Brug ikke forkortelsen "md." i løbende tekst.

### 21. [17 sider] generate-pages.js:7404
- **Før:** Det billigste tilbud, vi har fra Andersen Biler, er 1.969 kr. om måneden ekskl. moms — 2.802 kr. om måneden, når udbetalingen fordeles over løbetiden.
- **Efter:** Det billigste tilbud, vi har fra Andersen Biler, koster 1.969 kr. om måneden ekskl. moms. Når udbetalingen fordeles over løbetiden, bliver det 2.802 kr. om måneden.
- **Hvorfor:** Regel 8. Tankestregen binder to tal sammen uden verbum.

### 22. [17 sider] generate-pages.js:7461-7463
- **Før:** Oplysningsgraden på 34 % handler om de 7 tilbud, vi har indsamlet fra Andersen Biler — ikke om selskabet som helhed.
- **Efter:** Oplysningsgraden på 34 % gælder kun de 7 tilbud, vi har indsamlet fra Andersen Biler. Den siger ikke noget om selskabet som helhed.
- **Hvorfor:** Regel 8 (tankestreg). Bemærk også, at skabelonen giver "de 1 tilbud", når der kun er ét tilbud (begge grene af `u.rader.length === 1` skriver ' tilbud'). Med ét tilbud skal der stå "det ene tilbud".

### 23. [17 sider] generate-pages.js:7463
- **Før:** Et tilbud du selv får tilsendt kan være langt mere detaljeret end det, der står på en offentlig prisside, og det er netop derfor vi tilbyder at læse dit igennem.
- **Efter:** Et tilbud, du selv får tilsendt, kan være langt mere detaljeret end det, der står på en offentlig prisside. Derfor tilbyder vi at læse dit igennem.
- **Hvorfor:** Regel 8 (to pointer). Der mangler komma om "du selv får tilsendt" og før "vi tilbyder". "Det er netop derfor" er fyld.

### 24. [17 sider] generate-pages.js:7473
- **Før:** Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar — det samme beløb fra alle.
- **Efter:** Når vi henter tilbud hjem for dig, betaler den forhandler eller det leasingselskab, vi sender henvendelsen til, et honorar. Alle betaler det samme beløb.
- **Hvorfor:** Regel 8. Tankestregen hænger et brudstykke uden verbum på.

### 25. [17 sider] generate-pages.js:7473
- **Før:** Gulplade.dk er ikke tilknyttet Andersen Biler, og ingen udbyder kan betale for en placering i sammenligningen.
- **Efter:** Gulplade.dk er ikke tilknyttet Andersen Biler, og ingen forhandler eller leasingselskab kan betale for en placering i sammenligningen.
- **Hvorfor:** Regel 2. Skriv ikke "udbyder" i løbende tekst.

### 26. [12 sider] generate-pages.js:7472
- **Før:** Priserne er indsamlet fra Andersen Bilers egne offentligt tilgængelige sider på de datoer der står i tabellen, og er vejledende.
- **Efter:** Vi har hentet priserne fra Andersen Bilers egne offentlige sider. Datoerne står i tabellen, og priserne er vejledende.
- **Hvorfor:** Regel 4 (passiv "er indsamlet"), regel 6 ("offentligt tilgængelige") og regel 8 (tre oplysninger i én sætning). Der mangler komma før "der står".

### 27. [9 sider] generate-pages.js:7406
- **Før:** Hvad der i øvrigt er inkluderet, står ved hvert tilbud.
- **Efter:** Ved hvert tilbud kan du se, hvad der ellers er inkluderet.
- **Hvorfor:** Regel 5. Det er præcis mønstret fra før/efter-tabellen ("Hvad hvert tilbud indeholder, står på modelsiden"). Regel 6: "i øvrigt" er kancellisprog.

### 28. [9 sider] generate-pages.js:7900 (samme sætning i FAQ'en på :7917)
- **Før:** Ved finansiel leasing er der aftalt en restværdi, som skal indfries ved udløb — af dig selv eller en køber, du anviser.
- **Efter:** Ved finansiel leasing er der aftalt en restværdi, som skal indfries, når aftalen udløber. Det gør du selv, eller også gør en køber, du anviser, det.
- **Hvorfor:** Regel 8 (tankestreg med brudstykke) og regel 4 ("ved udløb" er et substantiv, hvor et verbum er bedre).

### 29. [9 sider] generate-pages.js:7876
- **Før:** Reglerne for indretning og kørsel hjem: specialindretning af varebil og tage varebilen med hjem .
- **Efter:** Læs reglerne i Håndbogen om specialindretning af varebil og om at tage varebilen med hjem.
- **Hvorfor:** Regel 1. Linklisten er forklædt som en sætning uden verbum. Linkteksterne kan blive stående.

### 30. [8 sider] generate-pages.js:7350
- **Før:** I de tilbud vi har indsamlet inkluderer Andersen Biler service (2 af 7).
- **Efter:** I de 7 tilbud, vi har indsamlet, har Andersen Biler service med i 2.
- **Hvorfor:** Regel 1 og 9. Tallet i parentes er en tabelrest. Der mangler komma om "vi har indsamlet". Ved flere poster bliver det fx "service med i 2 og dæk med i 1".

### 31. [8 sider] generate-pages.js:7352
- **Før:** Ayvens inkluderer ingen af de fem driftsposter i nogen af de tilbud, vi har indsamlet.
- **Efter:** I de tilbud, vi har indsamlet fra Ayvens, dækker ydelsen kun bilen.
- **Hvorfor:** Regel 3. "Driftsposter" er et samlebegreb, og næste sætning ("Ydelsen dækker bilen, og service, dæk, forsikring, ejerafgift og vejhjælp skal lægges oveni") nævner allerede de fem poster. Fakta er de samme.

### 32. [8 sider] generate-pages.js:7801
- **Før:** Har bilen fast indretning til arbejdet, kan den være specialindrettet og må så køre mellem hjem og arbejde hver dag — se Håndbogen om specialindretning.
- **Efter:** Har bilen fast indretning til arbejdet, kan den være specialindrettet. Så må den køre mellem hjem og arbejde hver dag. Læs mere i Håndbogen om specialindretning.
- **Hvorfor:** Regel 8. Tre pointer og en tankestreg i én sætning.

### 33. [8 sider] generate-pages.js:7938
- **Før:** De to typer side om side: finansiel eller operationel leasing .
- **Efter:** Vi sammenligner de to typer i finansiel eller operationel leasing.
- **Hvorfor:** Regel 1. Der er intet verbum. Linket i samme afsnit ("Alle finansielle tilbud: …") har samme form og kan blive til "Se alle finansielle tilbud i finansiel leasing af varebil".

### 34. [8 sider] generate-pages.js:7858
- **Før:** Den typiske af de 18 tilbud koster 3.908 kr. om måneden.
- **Efter:** Et typisk tilbud blandt de 18 koster 3.908 kr. om måneden.
- **Hvorfor:** Regel 2. "Den typiske af de 18 tilbud" er en kunstig konstruktion (tallet er medianen). Fakta er uændrede.

### 35. [14 sider] generate-pages.js:7857 (7 sider) og :7830 (7 sider)
- **Før:** Den billigste er Opel Combo til 2.358 kr. om måneden med udbetalingen fordelt, hos Opel.
- **Efter:** Den billigste er Opel Combo hos Opel. Den koster 2.358 kr. om måneden, når udbetalingen er fordelt over løbetiden.
- **Hvorfor:** Regel 5 og 8. "Hos Opel" er hængt bag på efter et komma. Det samme gælder :7830 ("Den billigste på listen er …").

### 36. [5 sider] viden.json:3381 ("kort")
- **Før:** Første gang over halvdelen — og det ændrer, hvad der er en normal firmabil.
- **Efter:** Det er første gang, at over halvdelen er elektriske, og det ændrer, hvad der er en normal firmabil.
- **Hvorfor:** Regel 1 (brudstykke uden verbum) og regel 8 (tankestreg).

### 37. [5 sider] viden.json:2601 ("kort")
- **Før:** Fire år til første syn, derefter hvert andet. Med én undtagelse, der rammer de største biler hvert eneste år.
- **Efter:** En ny varebil skal synes første gang efter fire år og derefter hvert andet år. Der er én undtagelse, og den rammer de største biler hvert eneste år.
- **Hvorfor:** Regel 1. Begge sætninger er telegramstil uden hovedverbum.

### 38. [5 sider] viden.json:3661 ("kort")
- **Før:** National kørsel er undtaget — og det samme er de fleste håndværkere.
- **Efter:** National kørsel er undtaget, og det er de fleste håndværkere også.
- **Hvorfor:** Regel 8. Tankestreg.

### 39. [5 sider] viden.json:2664 ("kort")
- **Før:** 107 af 122 tilbud oplyser et kilometertal — og 106 af dem siger 15.000 km.
- **Efter:** 107 af 122 tilbud oplyser et kilometertal, og 106 af dem siger 15.000 km.
- **Hvorfor:** Regel 8. Tankestreg, hvor et komma er nok.
