---
name: koeb-ny-varebil
description: "Købssiden /koeb-ny-varebil/ og priser.json (63 modeller, 624 udgaver, 1.846 tilvalg) på preview; brugerens beslutninger og åbne punkter 05-10-2026"
metadata:
  node_type: memory
  type: project
  originSessionId: f3836557-4bc0-4d0c-bd58-4fbb5e0465a3
  modified: 2026-10-06T13:19:34.704Z
---

Brugeren besluttede 05-10-2026:
- "Salgspriser" = **producenternes prislister** (vejledende udsalgspriser for alle udgaver), ikke forhandlernes kampagne- eller lagerpriser.
- Ny side **/koeb-ny-varebil/**. Den gamle /bedste-tilbud/hvad-koster-en-varebil/ skal have en 301 til den, når siden går live.
- **Forhandlerne betaler også for købshenvendelser** (samme honorar), se [[leadservice-provision]]. Ordlyden de fem steder er allerede generel ("henvendelsen", "hente tilbud hjem").
- Brugeren vil have **en større liste over ekstraudstyr med priser**, ikke mindst anhængertræk.

**Redesignet 05-10-2026 sent** efter brugerens dom ([[design-ikke-tabeldump]]): hero med figur "Startpriser efter størrelse", bilkort med foto og "Ny fra", søjleliste over udstyrspriser, eksempel på Transit Custom med levering og træk, faktakort om levering, afgifter og moms.

**06-10-2026:** Bilsider pr. model under /koeb-ny-varebil/<mærke>/<model>/ (salgsside med leasingpris, brugerens ønske), prisberegner (udgave + fabrikstilvalg + tilbehør, data i /koeb-ny-varebil/data/<id>.js), henvisning på leasingsiden i stedet for hele prislisten. Datarunde 2: importørernes tilbehørslister (prisdata/tilbehoer-spec.md) for Opel, Peugeot, Citroën, Toyota og Kia = 1.034 dele på 27 modeller. Ford/VW-holdet var ikke færdigt ved første visning. Mercedes, Farizon, Renault, Nissan og Fiat har ingen dansk tilbehørsliste med pris. Kias hjulsæt er udeladt (kilden modsiger sig selv).

**06-10-2026 indretning:** System Edström, Work System og SmartVan (datarunde 3, priser.json → indretning) vises i beregneren som type 4. De står i grupperne "Reoler og skuffer" og "Gulv og beklædning", foldet pr. leverandør i alfabetisk orden og med "Fra producenten" først. Filteret går på længde og hjultræk, og navnene forkortes i beregnerData. Leverandørerne betaler ikke. Sortimo er den eneste partner. prisdata/kilder-maerker.json er registeret over producenternes officielle prislistesider (13 mærker, Iveco mangler). Renaults side linker ikke til Kangoo og Trafic, og det står i feltet ikke_paa_siden.

**06-10-2026 udstyrsniveauer:** Brugeren ville se forskellen i udstyr mellem niveauerne, med Proace City som eksempel. Datarunde 4 (prisdata/niveauer-spec.md, priser-kladde/niveauer-*.json → priser.json niveau_udstyr) dækker alle 45 modeller med mindst to niveauer. Kortene står over prislisten på bilsiden og viser "Ud over X", merprisen på samme bil og kilden. Mercedes er fra konfiguratoren, Ford fra løsblad og prisliste. prisdata/kontrol-niveauer.py fandt 1.118 af 1.121 punkter, og de sidste 3 er forkortelser. Primastar-PDF'en har intet tekstlag og er tjekket i hånden.

**I PRODUKTION FRA 06-10-2026** (brugeren: "deploy og sæt igang med seo"):
- `KOEB_NY` er standard, og `GULPLADE_KOEB_NY=0` slår den fra.
- 301 fra /bedste-tilbud/hvad-koster-en-varebil/ står i _redirects.
- "Nye" står i menuen på de tre håndskrevne sider.
- byg-dist.js springer kun lastmod over, når `GULPLADE_PREVIEW=1` er sat. Brug det ved preview-deploys fremover.
- **SEO:** Titlerne hedder "<Model> pris 2026: N udgaver fra P kr.", og beskrivelsen starter med "Kontantprisen på …". Der er en FAQ om kontantprisen. Forsiden har én linje med links: "Vil du hellere købe? Se kontantpriser på N nye varebiler eller N brugte varebiler fra P kr."
- **Afprøvet og droppet:** Tre kort på forsiden ("ser dumt ud"), kort pr. udstyrsniveau ("regner forkert", "det fungerer ikke") og gruppen "Mindre udstyr".

**Brugerens beslutninger 06-10-2026:**
- **Sortimo:** Partneraftalen afventer. Købsdelen viser kun Sortimos priser som almindelig leverandør (LEVERANDOERER i koeb.js læser partnere.json) uden partnermærke.
- **Renaults udløbne lister:** De vises med en note øverst på bilsiden og "gjaldt til" på kortet.
- **Forhandler- og annoncekilder:** De erstattes med producentens egne. Forhandlernes egne leasingtilbud (Hessel) bliver stående, for der er de selv kilden.
- **SmartVans næsten ens produkter:** De er slået sammen, når navn, længde og pris er ens.
- **Citroëns trækpriser:** De kom i produktion 06-10.
- **Udstyrsniveauer:** Brugeren afviste kortene ("regner forkert", "det fungerer ikke"). De er erstattet af en sammenligningstabel med kun de forskelle, der ikke gælder alle niveauer. Konfiguratordata er godkendt som kilde.
- **Caddy og Transporter:** Der skal findes en bedre kilde end tabellen over ekstraudstyr. Løst samme dag med Volkswagens modelsider ("Udstyrsvarianter") og prislisten.
- **Grupper i sammenligningstabellen:** Kun "Udstyr" og "Design og udseende" (udstyr-vaegt.js). Brugeren droppede gruppen "Mindre udstyr" med ordene "for de 3 ting er væsentligt" (sidespejle, LED-baglygter og trådløs opladning).

**Status 05-10-2026 aften:** Alt ligger på preview https://koeb.gulplade.pages.dev (bygget med GULPLADE_KOEB_NY=1) og afventer brugerens godkendelse ([[maalskitse-godkendelse]]).
- Data: priser.json bygges af prisdata/flet-priser.py ud fra prisdata/priser-kladde/*.json. prisdata/kontrol-priser.py tjekker, at hvert tal står i den gemte PDF (prisdata/prislister/). Mappen kommer ikke i dist.
- udstyr.json har 10 nye poster ("ny": true, kun synlige med flaget). Elposterne har kun_el og bruges kun af købssiden.
- Ved go-live skal flaget gøres til standard (`!== "0"`), og der skal en linje i _redirects: `/bedste-tilbud/hvad-koster-en-varebil/ /koeb-ny-varebil/ 301`.
- byg-dist.js gemmer ikke lastmod.json, når /koeb-ny-varebil/ findes på disken (preview).

**Åbne punkter til brugeren:** Kangoo, Kangoo E-Tech og Trafic har kun lister, der udløb 30-09 (Trafic E-Tech 31-03). Interstar-listen siger ikke, om afgiften er med. ID. Buzz Cargo's specs i varebiler.json er 170 hk, men listen har nu 190 hk. peugeot-boxer motor_kw 105 bør nok være 103. Mercedes-tilvalgene er fra konfiguratoren, der spærrede efter mange opslag, så de kan være ufuldstændige.

Den vejledende udsalgspris er den pris, importøren anbefaler forhandleren at sælge for, og ikke forhandlerens indkøbspris (fejlen stod på hvad-koster-siden indtil 05-10, brugeren kaldte den "sludder"). Ingen Product-, Offer- eller Car-schema ([[ai-synlighed]]). Iveco har ingen offentlig prisliste.
