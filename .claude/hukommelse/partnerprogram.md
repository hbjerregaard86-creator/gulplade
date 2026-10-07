---
name: partnerprogram
description: "Partnere omkring varebilen (indretning, forsikring osv.) — salgssiden /annoncer-paa-gulplade/ er på preview, ikke godkendt; reglerne for hvad partnere kan købe"
metadata:
  node_type: memory
  type: project
  originSessionId: a4d7636f-8cdc-4c99-9761-7d501b417729
  modified: 2026-10-03T11:43:27.428Z
---

02-10-2026: Brugeren vil tjene penge på betalte partnere omkring varebilen (forsikring, indretning, sikring, dæk, folie, opkøb osv.).

- Salgssiden til kommende partnere: `annoncer-paa-gulplade/index.html` (håndskrevet, `noindex`, ikke i menu eller sitemap). Den står på listen i `stemplCssVersion()` i generate-pages.js. Preview: partner.gulplade.pages.dev/annoncer-paa-gulplade/. Ikke godkendt til produktion endnu.
- Partnerne skal vises under den eksisterende /til-varebilen/ (generate-tilvalg.js), på modelsiderne og via frivillige kryds i Få tilbud. **Aldrig i Håndbogen, Nyheder eller leasingsammenligningen**: Håndbogen er udtrykkeligt ikke-kommerciel.
- Partnere mærkes altid "Partner", højst 1–2 pr. emne, ingen "bedst/billigst".
- Priserne er ikke fastsat. Siden siger "fast pris pr. måned/kvartal/henvendelse". 695 kr. er prisen på tilbudstjekket, ikke leadhonoraret.
- Når den første partner går live, skal `/saadan-tjener-vi-penge/` og de andre steder med indtægtsløfter opdateres (se [[leadservice-provision]]).
- Partnerne bor i `partnere.json`, og `partnere.js` står for visningen: emneBlok (generate-tilvalg.js), modelBlok efter "Mål og vægt" (generate-pages.js) og profilSide på /partner/<slug>/ (bygges forfra hver gang). Partnere med `eksempel: true` (den opdigtede "Eksempel Indretning ApS") kommer kun med, når der bygges med `GULPLADE_PARTNER_EKSEMPEL=1`. Den 02-10 er de lagt på preview-grenen `partner`, og arbejdsmappen er bygget igen uden dem. /partner/ står ikke i sitemappet endnu.
- `udkast: true` = salgsskitse uden tilladelse. Den bygges kun lokalt med `GULPLADE_PARTNER_UDKAST=1`, og byg-dist.js stopper ved "ingen aftale" i dist.
- **Sortimo (02-10-2026):** Brugeren oplyser, at vi godt må vise Sortimo med deres farver på en preview. Sortimo har `forhaand: true` (mærket "Forhåndsvisning") og vises kun med `GULPLADE_PARTNER_EKSEMPEL=1`. Brug `GULPLADE_PARTNER_KUN=sortimo`, så eksempelpartneren ikke kommer med. Farverne er hentet fra mysortimo.dk's CSS: #0068b3, flade #dee7f0 og skrift #546373. Logoet (assets/img/partnere/sortimo.png) er beskåret fra mySortimo-logoet. Preview: sortimo.gulplade.pages.dev/partner/sortimo/. Produkttekster fra mysortimo.dk; ingen vægte.
- **03-10-2026 (natten), Sortimo bygget om:** Brugeren ville have noget langt mere professionelt, specifikt til bilen og med billeder. Resultat:
  - Syv Xpress-moduler (11–17), som Sortimo opgiver passer til "Transit Custom 2023". Billeder, mål, vægt og vejl. pris ekskl. moms fra mysortimo.dk er gemt i partnere.json; billederne ligger i assets/img/partnere/sortimo/.
  - Tre "pakker", som vi selv har sat sammen (12+13, 16+17, 14+15).
  - Modelsiden har `#indretning` og regner nyttelasten ud pr. bil.
  - **De gamle TopSystem Custom-sæt passer KUN til den gamle Custom** (akselafstand 2933/3300). Sitets Custom har 3100, så de er udeladt.
  - Sortimo kræver Sortimo-gulv, som ikke er med i prisen.
- Brugeren kaldte den gamle indretningstekst (advarsler om nyttelast og huller i pladen) "sludder, der ikke sælger". tilvalg.json-indretning er skrevet om, så den forklarer og sælger, og den står kun på preview. Se [[maalgruppe-professionelle]]. De andre emner (forsikring osv.) har samme belærende tone.
- **03-10-2026:** Indretningssiden er teknisk og grafisk. Generatoren `indretning-grafik.js` tegner anatomi, plan og snit af Transit Custom L1 (905 mm fri gang), vægt pr. meter, andel af nyttelasten, pris pr. meter, lastsikringskræfter (0,8/0,5 × vægt, BEK 1655/2025 bilag 3) og proces. Tallene kommer fra `data` i tilvalg.json. Alle fem emner og oversigten er skrevet om uden belærende tone, og spørgelisterne er blevet til "Det skal leverandøren vide" (felterne spoergsmaal_titel/manchet). Det er IKKE partnerafhængigt og ligger i arbejdsmappen, så næste produktions-deploy tager det med. Brugeren har ikke godkendt det til produktion (kun set på sortimo-preview).
- **03-10-2026, SEO og Sortimo-gennemgang:**
  - Indretningssiden har titlen "Indretning af varebil: mål, vægt og pris" og nye afsnit om lastrumsmål (tabel med 18 modeller), fag, materialer, brugt indretning og regler. Søgeordene kommer fra Googles søgeforslag: bilindretning, tømrer, brugt, træ, regler.
  - Tallene i teksten er `{{ind_*}}` og regnes i `indretningTal()` i generate-tilvalg.js.
  - Delebilledet til sociale medier er `assets/img/til-varebilen/indretning.png`.
  - Alle kassevogne linker til siden med `indretningLinkHTML()` i generate-pages.js.
  - Sortimo har 11 Xpress-moduler (6, 8.1, 9–17), som er koblet til 17 modeller via Sortimos kompatibilitetslister. Der vises højst tre opstillinger pr. model.
  - Knapperne åbner sitets formular med `data-lead="indretning"`, og emnelinjen bliver "INDRETNING (Sortimo)". Klik måles som GA-hændelsen `partner_klik`.
  - `samtykke.74fbe990` er tilføjet til GAMLE_SAMTYKKE.
  - **Før Sortimo går live:** privatlivssiden skal nævne partnere som modtagere af henvendelser.
- **03-10-2026, sidst på dagen:**
  - Den redaktionelle del af indretningssiden (tekst, grafik, lastrumsmål og links fra modelsiderne) er i PRODUKTION.
  - Brugeren ville ikke have nøgletalsbåndet øverst (fjernet). Tabellen med lastrumsmål var "alt for lang": nu 6 rækker plus sammenfoldet "Se 12 mere" og kun længde, bredde mellem hjulkasser og højde. **Brugeren vil have korte, kompakte sektioner.**
  - Sortimos profilside er bygget om med top med foto, nøgletal, fem fordele med kilde, "Find din bil" (17 bilkort, swipe på mobil, panel pr. bil), produktlinjer med Sortimos egne fotos, forløb, FAQ med FAQPage-schema og kilder. Teksterne står i partnere.json (fordele, linjer, proces, faq, kilder).
  - Kør altid HELE generatorkæden (viden, tilvalg, brugte, pages, viden). Ellers ender siderne med to CSS-hashes.
- **03-10-2026, undersider under indretning (i PRODUKTION):**
  - `indretning-sider.js` skriver 44 undersider fra generate-tilvalg.js: 37 bilsider (modeller med samme mærke og lastrum deler side), 4 fag (toemrer, elektriker, vvs, service), regler, skuffer og brugt.
  - Sitemappet tager dem med `stier()`, og modelsidernes indretningslink går til `stiForBil()`.
  - Bilsiderne viser Sortimo-blokken, når partnerflaget er sat.
  - Illustrationerne er gjort mindre (svg højst 300–360 px).
  - IndexNow er kørt (813 URL'er). Google Search Console mangler.
- `annoncer-paa-gulplade` springes over af byg-dist uden partnerflaget, så den ikke kommer i produktion før godkendelse.
- Prisafsnittet "Priser: hvad koster en X at lease?" (modelPriserHTML) blev fjernet efter ønske og deployet til produktion 02-10 om aftenen.
- Salgssiden ligger på gulplade.dk og ikke som en claude.ai-artefakt, fordi ejeren ikke må kunne forbindes med sitet ([[linkedin-side]]).
