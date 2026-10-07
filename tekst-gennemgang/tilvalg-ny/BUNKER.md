# Bunker til skribenterne (07-10-2026)

Cloud-sessionen delte de 80 manglende sider op i 19 bunker. Alle 19 bunker er skrevet i skyen, så alle
85 sider ligger her og består tjek.js. Næste trin er tekstredaktør, faktatjek (se TVIVL.md) og preview
(preview.sh).

Hver skribent fik sin liste over sider og blev bedt om at følge "Fælles instruks" nedenfor.

## Bunkerne

| Bunke | Emne | Sider (`_emne` er emnesiden) | Status |
|---|---|---|---|
| B01 | forsikring | ansvarsforsikring-varebil, vaerktoejsforsikring, flaadeforsikring, forsikring-af-elvarebil, selvrisiko | skrevet i skyen |
| B02 | forsikring | skadeanmeldelse, foererulykke-og-foererplads, vejhjaelp-til-varebil, forsikring-af-indretning-og-udstyr, forsikring-i-udlandet, erhvervsbilforsikring-selskaber | skrevet i skyen |
| B03 | vinterhjul | _emne, c-daek, helaarsdaek-til-varebil, daekhotel | skrevet i skyen |
| B04 | vinterhjul | daek-til-elvarebil, daektryk-og-moensterdybde, vinterhjul-pris, vinterdaek-i-udlandet | skrevet i skyen |
| B05 | service | _emne, serviceaftale-ved-leasing, frit-vaerkstedsvalg, undervognsbehandling | skrevet i skyen |
| B06 | service | erstatningsbil, service-paa-elvarebil, pris-paa-service | skrevet i skyen |
| B07 | indretning | _emne, gulv-og-vaegbeklaedning, lastsikring-i-varebil, indretning-af-elvarebil, skillevaeg, selvbygget-indretning | skrevet i skyen |
| B08 | varerumssikring | _emne, ekstra-laas-til-varebil, alarm-og-gps-tracker, maerkning-af-vaerktoej, sikker-opbevaring, tyveri-statistik-pr-region | skrevet i skyen |
| B09 | ombygning | _emne, bagsmaeklift, lad-og-tipper, koelebil | skrevet i skyen |
| B10 | ombygning | mandskabsvogn-ombygning, godkendelse-af-ombygning, ladbil-med-kran | skrevet i skyen |
| B11 | folie | _emne, bilreklame-paa-varebil, helfoliering-af-varebil, folie-paa-leasingbil | skrevet i skyen |
| B12 | folie | solfilm-paa-ruder, refleks-og-konturmarkering, magnetskilte, bilreklame-design-og-filer | skrevet i skyen |
| B13 | traek-og-tagudstyr | _emne, anhaengertraek-til-varebil, tagboejler-og-tagreling, stigeholder, arbejdslys-og-advarselslys, trinbraet-og-bagtrin | skrevet i skyen |
| B14 | el-abonnement | _emne, ladestander-paa-firmaadressen, ladestander-hjemme-hos-medarbejderen, refusion-af-elafgift | skrevet i skyen |
| B15 | el-abonnement | ladekort-og-offentlig-ladning, opladning-af-elvarebil-i-praksis, lastbalancering | skrevet i skyen |
| B16 | flaadestyring | _emne, elektronisk-koerebog, gps-sporing-af-medarbejdere, flaadestyringssystem | skrevet i skyen |
| B17 | flaadestyring | braendstofkort-og-ladekort, telematik-data-fra-producenten, koerselsregnskab-skabelon | skrevet i skyen |
| B18 | salg-af-varebil | _emne, saelg-firmabil-moms, indfri-leasingaftale, aflevering-af-leasingbil | skrevet i skyen |
| B19 | salg-af-varebil | afmelding-og-nummerplader, salg-af-varebil-paa-auktion, eksport-af-varebil | skrevet i skyen |

## Fælles instruks

**Læs først, hele vejen igennem:**
1. `CLAUDE.md`, afsnittet "Skrivestil" med de 12 regler og før/efter-tabellen.
2. `tekst-gennemgang/tilvalg-ny/OPSKRIFT.md`. Den er din opgavebeskrivelse: mål for længde og figurer, regler for fakta og kilder, felterne og tegningernes klasser. Følg den nøje.
3. Én færdig side, der har bestået tjekket og ligger i den stil, dine sider skal have: `tekst-gennemgang/tilvalg-ny/forsikring/kaskoforsikring-varebil.js` (og `tekst-gennemgang/tilvalg-ny/forsikring/_emne.js`, hvis du skriver en emneside). Ret ikke i dem.
4. Dine sider, som de står i dag: `node tekst-gennemgang/tilvalg-ny/vis-side.js <emne> [<slug>]`.

**Kilder:** Netværket er åbent. Åbn kilderne selv med WebFetch, og læs tal i tabeller og PDF'er med curl (fx `curl -sL <url> -o /tmp/<din-mappe>/x.pdf && pdftotext /tmp/<din-mappe>/x.pdf - | grep -n -i -C3 <ord>`). Gem downloadede filer i din egen mappe under /tmp, ikke i projektet. Nye fakta kun fra kilder, du selv har åbnet i dag, og hver ny påstand i `nye_fakta`. Afgiftssatser skrives aldrig ind.

**Arbejd sparsomt.** Hver runde koster, fordi hele din samtale læses igen. Læs ikke de samme store filer flere gange, hent kun de dele af PDF'er og sider, du skal bruge (grep, sed -n, offset), og skriv hver side i ét hug med Write i stedet for mange små rettelser.

**Tjek:** Kør `node tekst-gennemgang/tilvalg-ny/tjek.js <emne>/<slug>.js` (emnesiden: `<emne>/_emne.js`) på hver af dine filer. Ret alle FEJL, og ret de ADVARSLER, der er rigtige. En side er først færdig, når den består tjekket uden fejl.

**Regler for arbejdet:**
- Andre skribenter arbejder i samme projekt samtidig. Skriv kun dine egne filer i `tekst-gennemgang/tilvalg-ny/<emne>/`. Ret ikke i tilvalg.json, style.css, tjek.js, generatorerne eller andre filer.
- Kør ikke generate-*.js, byg-dist.js, wrangler eller git. Jeg samler, committer og pusher.
- Skriv filerne med Write-værktøjet, ikke med heredocs. Brug backticks til svg-strengene, men skriv aldrig `${` i dem.
- Skriv én side færdig og tjekket ad gangen, så intet går tabt, hvis du bliver afbrudt.
- Hvis en fil til en af dine sider allerede findes i mappen, så læs den og gør den færdig i stedet for at starte forfra.

**Slut med en kort rapport:** hver side med ord og figurer før og efter (fra tjek.js), antal nye fakta, og de steder, hvor du var i tvivl om fakta eller formuleringer.
