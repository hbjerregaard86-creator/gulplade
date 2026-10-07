---
name: brdr-jensen-carads
description: "Sådan hentes Brdr. Jensens varebilslager; restværdien (den lave) vises fra 01-10-2026, totalprisen stadig ikke"
metadata:
  node_type: memory
  type: project
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-09-23T12:17:10.973Z
---

Gulplade.dk udstiller Brdr. Jensens brugte varebiler under en salgsaftale indgået
inden 23-09-2026. Det er den eneste del af siden med en kommerciel interesse, og
løftet i bunden af hver side er skrevet om, så det kun dækker leasingsammenligningen.
Se [[gulplade-datakilder]].

**Lageret hentes sådan** — deres side rendres af CarAds i browseren, så HTML'en er tom:
1. `https://www.jensenas.dk/carads-sitemap-167.xml` → alle varebils-URL'er, produkt-id sidst i slug'en
2. `https://nextgen.carads.io/products/167/x<id>` → hele bilen som JSON
3. `https://nextgen.carads.io/assets/translations/da` → oversætter udstyrsnøgler (`hndfritelefon` → „Håndfri telefon“)
4. Billeder: `https://nextgen.carads.io/media/<id>/400x300/cover` — ukomprimeret PNG, så `800x0` vejer 600 kB mod 150 for det beskårne format

**To tal fra deres leasingforslag må ikke gengives:**
- **Restværdien** — deres bilside viser præcis 1,25 × lagersystemets tal og kalder
  begge dele „ekskl. moms“. Faktoren er momsen, så én af etiketterne er forkert.
- **„Totalpris i løbetiden“** — 15.000 kr. på en bil til 2.695 kr./md. i 60 mdr.
  Det kan ikke være en totalpris.

De ligger i `brugte.json` under `leasing._omstridt`. Månedsydelse, løbetid og
udbetaling står ens begge steder og vises.

**Fra 01-10-2026 VISES restværdien:** ejeren har talt med forhandleren, og den lave værdi (`restvaerdi_api`, lagersystemets tal) er den rigtige. generate-brugte.js `restvaerdi(b)` læser den fra `_omstridt`. Forbeholdsteksterne er fjernet. "Totalpris i løbetiden" vises stadig ikke. Bekræftelsen var mundtlig, ikke skriftlig. Brugeren tjekkede samme dag forhandlerens bilside (Mercedes B200 d): restværdien er 10.000 kr. både hos dem og hos os. 1,25-forskellen findes altså ikke længere på deres side.

**CarAds oplyser ingen lasteevne eller totalvægt** på nogen af de 325 biler —
kun trækvægt. Den regnes ikke ud: på en brugt bil afhænger den af opbygningen.

**Fra 30-09-2026 er forhandleren anonym på siden** (ejerens beslutning). Intet navn, adresse, telefon, mail, CVR,
link til jensenas.dk eller "Horsens" på brugtbilsiderne; `omForhandler()` returnerer tomt, JSON-LD har ingen seller,
forhandlerens fritekst køres gennem `renBeskrivelse()`, og `/brugte-varebiler/brugte-varebiler-horsens/` er 301 til
oversigten. Samarbejdet oplyses stadig ("Bilerne sælges af en forhandler, vi samarbejder med … vi kan få betaling")
— markedsføringsloven kræver, at den kommercielle interesse fremgår, bare ikke hvem. Skriv aldrig navnet ind igen.

**02-10-2026, brugt-sektionen:**
- Nye genveje: brugt-ladbil-med-3500-kg-traek, brugt-iveco-daily-ladvogn, brugt-mercedes-sprinter-ladvogn, brugt-varebil-med-alukasse og brugt-vaerkstedsbil.
- Nye titler: "Mandskabsvogn til salg …" og "Ladbil til salg …".
- Genvejene har fået årgangstabel og FAQ via indsigt(), undtagen pris-/udsnitsgenveje.
- Bilsiderne har fået H1 "Brugt X (årgang)", ny bilDesc (gear, træk, leasing, 24 timer), lignendeHTML (samme model + genveje) og batteriHTML (elbiler, garanti.json).
- Titlerne bruger "Mercedes" i stedet for "Mercedes-Benz" (titelNavn), og mærkesiderne hedder "Brugt X varebil til salg".
- GSC-søgninger 28 dage: brugt-sektionen 101 visninger, 3 klik, pos. 27. "mandskabsvogn til salg" ligger på pos. 6.
- 02-10 senere: ny guide /haandbogen/koeb-af-brugt-varebil/ (tjekliste: moms/brugtmoms, totalvægt, miljøzone, syn før ejerskifte, Bilbogen, omregistrering inden for 4 hverdage; kilde borger.dk). Den linkes fra brugt-oversigtens FAQ og fra hver bilside ("Tjekliste før køb"). Oversigten har fået de 12 største modeller i "Gå direkte til". Billige-facetten har fået titlen "Brugt varebil under 100.000 kr. — N billige til salg".
- 02-10 senere 2: modelsiderne for brugte viser "Genveje for X" (modellens egne genveje), og modelgenveje linker tilbage til "Alle brugte X". Nye genveje: brugt-renault-master-ladvogn (13) og brugt-ford-transit-ladvogn (9). Kassevogn pr. model er fravalgt (næsten lig hele modellen). Oversigten fylder 717 KB, men komprimeres, og filtrene skal have alle biler i siden.

**Hentning 05-10-2026 (329 → 328 biler, 44 solgt, 43 nye):** Kortlægningen fra CarAds til brugte.json: `aargang` = details.year (ikke regyear), `beskrivelse` trimEnd'es, og null hvis tom. CO₂ 0 → null. `karrosseri`: body Ladvogn→ladvogn, Pick-Up→pickup, SUV/Hatch/MPV→personbil-van, ellers kassevogn. `opbygning` kommer fra categories i rækkefølgen boxcar Kassevogn, freightcar Ladvogn, pickuptruck Pickup, suv SUV, carwithalubox Alukasse, coolingcar Kølebil, repaircar Værkstedsbil, crewcar Mandskabsvogn. Leasing kommer fra pricing.leasing.autoit.business.financial. **Biler uden pricing.cashwovat.price tages ikke med** (18 stk: kun leasing, momsbiler, personbiler). Behold gamle slugs og udstyrsrækkefølge. generate-brugte.js laver selv 301 for solgte biler.
