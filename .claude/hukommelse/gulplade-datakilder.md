---
name: gulplade-datakilder
description: Hvor de danske varebilsproducenter gemmer deres måltabeller — og hvilke der afviser nøgne klienter
metadata:
  node_type: memory
  type: reference
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-09-28T09:28:23.906Z
---

Tekniske tal til gulplade.dk ligger sjældent, hvor man først kigger:

- **Peugeot, Citroën og Opel** har rigtige måltabeller i deres prislister, men på
  **side 2–5**, ikke side 1. Side 1 har kun pris og nøgletal. Læs hele dokumentet.
  Peugeot Partner er undtagelsen: ingen måltabel for dieselen.
- **Volkswagen** har fulde vægt- og måltabeller i detailprislisterne på
  `ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/<Model>.pdf` — men kun for
  Caddy Cargo og ID. Buzz Cargo. Transporter og Crafter findes ikke der.
- **Toyota** har specifikationskataloger på `modelinformation.toyota.dk`, hvor
  **side 3** har vægte og **side 4** har mål. Ikke for Proace Max.
- **Renault** har måltabellen som tekst i Master-prislisten, men som målsat
  tegning for Trafic og Kangoo.
- **Mercedes-Benz'** egen server udleverer hverken PDF'er eller billeder. Brug
  Ejner Hessels enkeltbilssider i stedet — de oplyser leasingtype, løbetid,
  km/år, nyttelast, CO₂, trækvægt, ejerafgift og nypris.
- **iPaper-kataloger** (Peugeot, Citroën, Opel, Ford, Toyota) lægger et tekstlag i
  DOM'en, som `get_page_text` i browserpanelet læser direkte. Teksten kommer
  **kolonneordnet**, ikke rækkeordnet — stil rækkerne op igen og krydstjek mod
  kendte tal, før noget skrives ind.

- **Mercedes-Benz har alligevel en måltabel** — i HTML, ikke PDF: på
  `mercedes-benz.dk/vans/models/<model>/panel-van/overview.html#tech-data`, to
  `<table>`-elementer med lastrumsmål, vægte, volumen og akselafstand pr.
  motorvariant. **Men siden viser kun én karrosserilængde og har ingen vælger.**
  Sprinter-siden viser A2 (5.932 mm), Vito-siden viser den kompakte (4.895 mm).
  Tjek altid billængden mod den variant, tallene skal bruges til.
- **VW gemmer måltabellen i et „lag“ bag modelsiden**, som intet synligt link
  peger på:
  `volkswagen.dk/da/erhvervsbiler/<model>.html/__layer/carfeatures/features/models/<Model>/teknisk-data/master.layer`
  Den har én `<table>` pr. karrosserilængde — for Transporter både Kassevogn
  Kort og Kassevogn Lang — med varerumsmål, volumen, udvendige mål og
  akselafstand. Linket findes ved at søge `a[href*=teknisk-data]` på modelsiden.
  **Virkede ikke for Crafter** (ingen tabeller på samme URL-mønster); brug
  erhvervsleasing-siden til den.
- **Nyttelast oplyser VW ingen steder** — hverken i laget, på modelsiden eller i
  detailprislisten.
- **VW's Crafter-side** (`volkswagen.dk/da/erhvervsbiler/erhvervsleasing/crafter.html`)
  har fulde varerumsmål. Højde og volumen står i to sæt: `*` = baghjulstræk og
  4MOTION, `**` = forhjulstræk. VW's **detailprislister** (PDF) har hverken
  nyttelast eller mål for Transporter og Crafter — kun pris, afgift, CO₂,
  forbrug, anhængervægt og totalvægt.
- **Toyotas specifikationsside for Proace Max viser dieselen**, ikke elbilen.
  Overskriften afslører det ikke; motorstørrelsen gør (2.184 ccm).
- **Totalvægten står ofte i modelbetegnelsen**: MAN „3.5T“, Toyota „(3,5t)“,
  Iveco „35S“. Det er producentens egen oplysning og kan citeres.
- **MAN's billeder** ligger på `media.man.eu/is/image/MAN/…` og er **ulåste** —
  `wid`/`hei` kan sættes frit, modsat VW's `assets.volkswagen.com`.

**Peugeot, Citroën, Opel og Kia svarer 403 på nøgne klienter.** De kræver et fuldt
browser-headersæt med `sec-ch-ua`, `sec-fetch-*` og en `Referer` fra deres eget
domæne.

**Udstyrslister (fundet 28-09-2026, til udstyr.json):**
- **iPaper-kataloger giver PDF'en**, hvis man sætter `GetPDF.ashx` efter katalog-URL'en
  (Peugeot, Opel `pdf.opel.dk`, Ford `katalog.ford.dk/prislister/varebiler/<model>/`).
- **Priserne står forskudt en linje** fra udstyrsteksten i Renault-, Ford- og
  Opel-PDF'erne. Læs med pdfplumber `extract_words()` grupperet på `top`.
- **VW Crafter-prislisten** ligger på `volkswagen.dk/app/da/media/.../erhvervsbiler-prisliste-crafter-kassevogn.pdf`;
  **Transporter** har ingen PDF, kun HTML: `/app/da/erhvervsbiler/prisliste/transporter-kassevogn-kort/` (ekskl. moms).
- **Toyota** sælger stort set ingen fabrikstilvalg; standardudstyr pr. niveau står i
  konfiguratordata på `cocadap.toyota-europe.com/toyota/dk/da/comparegradespecsv2`.
- **Renault Master Chassis** har sin egen `prisliste-master-chassis.pdf` (samme Hedin-mappe).
- **Stellantis-prislister** (Citroën/Peugeot/Opel) fremhæver kun udvalgt udstyr — resten
  skal findes i konfigurator eller brochure.

**Tekniske data og garanti (fundet 28-09-2026):**
- **Iveco** har faktablade pr. variant på iveco.dk/shopping-varktojer/faktablade (vægt,
  lastrum) — men ingen prisliste. Kampagnesidernes store tal og fodnote er ofte uenige;
  fodnoten (aftalevilkårene) er den, der føres.
- **Kia**: `api.kiaonline.dk/dokumenter/<model>-specifikationer.pdf` og `-priser.pdf`.
- **Mercedes** udleverer PDF'er og konfigurator (voc.mercedes-benz.com) med fuldt
  browser-headersæt — brug det frem for Ejner Hessel, der selv er udbyder.
- **MAN TGE**: kun internationalt engelsk datablad; tallene er identiske med Crafter L3H3.
- **Garanti**: renault.dk/ejer/garanti (PDF'er), VW's garantibestemmelser for erhvervsbiler
  (Semler 5 år), toyota.dk/erhvervsbiler/professional/toyota-relax, garantisider for
  varebiler på peugeot.dk/citroen.dk/opel.dk, ford.dk/min-bil/garanti/varebiler.

Se også [[heredoc-backslash]].

**Fundet 28-09-2026 aften (datarunde 2: motor, gear, vægt, vendediameter):**
- **Toyota konfigurator-API:** `texus.toyota-europe.com/.../GetTechnicalSpecifications/.../car/<carId>`; bil-id'er via
  `getGrades`/`getMotorizations`. Eneste kilde til kW og vægt for Proace Max EV 3,5 t. Katalog og konfigurator kan være
  uenige (Proace City EV vægt) — så føres ingen af dem.
- **Ford UK** (ford.co.uk) kræver fulde browser-headers og Referer fra ford.co.uk. Brugbar, når Ford DK mangler tallet og
  UK sælger præcis samme udførelse (Transit-løsbladet i DK er "under opdatering"). Fords danske løsblade har forskudte
  tabelrækker (Connect) — brug prislisten til gear.
- **VW's importør-lagerliste** (`volkswagen.dk/app/da/erhvervsbiler/lagermodeller/`) har `technicalData.kilowatts` —
  eneste danske kilde til kW for Transporter og e-Transporter.
- **Iveco**: danske Daily-brochurer på publitas (van-dk-my24/cab-dk-my24); faktablade hos importøren **Hedin Nordic Truck**
  (edge.sitecorecloud.io/.../hedinnordictruck/...) — importør, ikke forhandler.
- **Renault og Nissan** er ens motorer men egne tal; Renault UK tech spec (cdn.group.renault.com) bruges kun hvor DK mangler.
- **Stellantis**: 140 hk-dieselen er 103 kW hos Citroën/Opel og 105 kW hos Peugeot/Fiat i deres egne lister — hvert
  mærke fører sit eget tal. Citroën Berlingos vægttabel er kopieret fra Opel ("Enjoy") — ikke brugt.
- **"Egenvægt" er næsten altid køreklar vægt inkl. fører** — derfor hedder rækken "Vægt uden last" på siden, og
  definitionen står i feltkilder-noten.

**Fundet 05-10-2026 (datarunde 3: 75 felter udfyldt):**
- **Stellantis Østrig og Tyskland** har fulde tekniske tabeller: citroen.at/infocenter/prospekte.html,
  peugeot.at/tools/preislisten-ubersicht.html, opel.at/info/kataloge.html, opel.de/tools/kataloge.html,
  peugeot.de/tools/broschueren-preislisten.html. AT-vægte er "Masse minimal" inkl. 75 kg fører = sammenlignelige med DK.
  AT skriver akselafstand 3.277 mm, UK/DE 3.275 mm for Jumpy/Expert/Vivaro; vi fører 3.275.
- **Stellantis UK**: pricelist.varioweb.co.uk/<mærke-model>/download.pdf (citroen-berlingo, citroen-dispatch, peugeot-partner …).
- **Ford Tyskland**: ford.de/nutzfahrzeuge-modelle/<model>/pricelist – kW, bredde uden spejle, læssehøjde, Wendekreis mellem kantsten.
  Ford Europes tekniske presseark ligger på fromtheroad.ford.com (…/library/2026/tech-specs/).
- **Toyota Europe newsroom**: newsroom.toyota.eu/download/<id>/proace(-city|max)-specificationsheet.pdf (2024).
  Toyotas konfigurator-API virker i alle lande; token i `modelMap` på landets forside. SE giver bredde mellem hjulkasser,
  NL "Draaicirkel tussen stoepranden".
- **Toyota Danmarks og Renaults "venderadius" er vendediametre** (12,4 m Proace, 12,8 m Master). Flyttet til vendediameter_m 05-10.
  Kun Farizon (6,1 m) er en ægte venderadius.
- **Mercedes UK-prislister** (tools.mercedes-benz.co.uk/current/vans/pricelists/<model>-panel-van.pdf) har vendediameter.
  Mercedes oplyser ingen læssehøjde eller europaller nogen steder.
- **Body builder-portaler** (Iveco newibb.iveco.com, Mercedes bb-portal.mercedes-benz-vans.com) kræver login. Brugerens beslutning,
  om der skal oprettes konto – her ligger sandsynligvis de manglende Iveco-mål og læssehøjder.
- **Tjekket 05-10 (de tre mistænkte fejl):**
  - e-Boxer/ë-Jumper/Movano-e/e-Ducato: FALSK ALARM. 435/35M L3H2 = 3.500/2.865/635 kg i alle fire DK-lister (01-10-2026); 4.250 kg er 440/42M-rækkerne.
  - 150 hk-dieselen (Jumpy, Expert, Vivaro): DK-listerne skriver 105 kW (og 135 kW for 180 hk) – forkert. Brugeren valgte 110 kW fra
    AT/DE-listerne med note om DK-tallet. Samme fejl kan dukke op i andre Stellantis-DK-lister.
  - Courier-bredde: DK-løsbladet kalder 1.791/1.800 mm "foldet ind"; Ford DE har 1.800 uden spejle og 1.876 foldet ind.
    Brugeren valgte at lade DK-tallet stå. Ret det ikke uden at spørge igen.
- **Proace City nyttelast (05-10):** Toyotas DK-katalog har ingen nyttelast, kun køreklar vægt. DK-konfiguratoren (texus, cars_dk) giver
  "Lasteevne" direkte: diesel 650 kg, el 800 kg – ført, med note. Det udregnede 605–649 kg for elbilen er fjernet.
  "(diesel)" i modelnavnet fjernes kun på kort (kortNavn i generate-pages.js); modelnavnet styrer URL'en.
- **Brugerens kilderegler for nyttelast og trækvægt (05-10-2026):** Når producenten ikke oplyser tallet for præcis udførelsen, må vi
  (1) regne nyttelast = totalvægt − køreklar vægt, når begge står i SAMME kilde (Proace Max EV 473–635 kg),
  (2) vise producentens "op til"-tal for modellen i felterne `nyttelast_op_til_kg` og `anhaengervaegt_op_til_kg` (kun visning, ikke ranglister/filtre),
  (3) vise "ingen fra fabrikken" med `traekkrog_fabrik: false` (el-Boxer/Jumper/Movano/Ducato; UK/DE oplyser 2.400 kg, nævnt i noten).
  Visning via `nyttelastTekst` og `traekTekst` i generate-pages.js. Ford DE Transit-prisliste: …/price-list/commercial-vehicles/transit-kastenwagen/PL_Kasten.pdf
  (har "max. Nutzlast in t" pr. motor og gear).
- **Trækkrog på 110 kWh-elvarebilerne (05-10):** ikke fra fabrikken (Stellantis FR/AT/UK "nicht für BEV"/"not available"); FR-prislisterne
  henviser til værkstedet ("se rapprocher du Service Après-Vente"). DK-tilbehørslisterne (Boxer/Jumper/Movano, del 9859498080) siger ikke,
  om trækket passer til elbilen. Vises som "ingen fra fabrikken"; udstyr.json = "ukendt". Wrangler-deploy kan crashe (RtlUserThreadStart) –
  tjek altid live og kør igen.

**Fundet 05-10-2026 (prislisterunden til priser.json):**
- **Toyotas modelsider (toyota.dk/nye-biler/...) viser prisen MED metallak** (5.990 kr. på Proace City, 7.990 kr. på Proace). Brug altid prislisten på modelinformation.toyota.dk. To nypriser var forkerte af den grund (rettet 05-10).
- **VW Caddy har en ny dynamisk prisliste** på prislister-erhverv.volkswagen.dk/caddy%20cargo (og /caddy%20maxi%20cargo) med niveauerne Comfort og Edition; VW's prisoversigt linker til den. T01-listen på ngw6 er forældet. Samme sted findes PDF-udgaver af Transporter- og e-Transporter-listerne med en kolonne uden moms. /crafter dér er en anden, ældre liste, der ikke er brugt.
- **Renault:** Master-listerne for 1/10–31/12 2026 ligger på de samme Hedin-adresser. Kangoo, Kangoo E-Tech og Trafic havde ingen liste efter 30/9 den 5/10; Trafic E-Tech kun 1/1–31/3 (ny 81 kWh-model, priser kommer senere). Tjek erhverv.renault.dk/kob/prislister-og-brochurer.
- **Ford Courier og E-Courier** opgiver listeprisen INKL. levering (3.980 kr.); vi trækker den fra, så alle nypriser er uden levering.
- **Opel/Peugeot/Citroën/Fiat** har næsten ingen fabrikstræk i prislisterne; trækket er forhandlermonteret tilbehør fra separate tilbehørslister (står som "tilbehør" i udstyr.json).
- **Nissan Primastar-listen** har intet tekstlag (læses visuelt). Interstar-listen siger ikke, om registreringsafgiften er med (momsen er præcis 25 %).
- Kladderne, PDF'erne og kontrolscriptet (kontrol-priser.py: står hvert tal i kilden?) lå i sessionens scratchpad og er ikke gemt i projektet.

