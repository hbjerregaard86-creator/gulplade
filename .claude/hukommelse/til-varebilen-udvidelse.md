---
name: til-varebilen-udvidelse
description: 04-10-2026 — 11 emner og 116 sider under /til-varebilen/ er i produktion; preview-flaget GULPLADE_TILVALG_NY findes stadig til næste runde nye sider
metadata:
  node_type: memory
  type: project
  originSessionId: fe85f8fe-6e10-4d97-9154-c30646dc5118
  modified: 2026-10-05T06:48:20.093Z
---

04-10-2026: Brugeren bad om "meget fyldige" sider med undergrene til alt under Til varebilen, og godkendte dem samme dag til produktion.
- 6 nye emner (service, ombygning, folie, traek-og-tagudstyr, flaadestyring, salg-af-varebil), 56 generiske undersider (`undersider` i tilvalg.json) og 4 nye indretningsfag (`fag_ekstra`: maler, anlaegsgartner, kloakmester, laasesmed). 116 sider under /til-varebilen/, alle i sitemappet. IndexNow kørt.
- Oversigten er grupperet (feltet `gruppe`: bilen, lastrummet, udenpaa, drift, udskiftning) med "Alle guider" nederst. Emnesiderne har "Guider om X" som kompakte maerkelinks øverst. Brugeren foretrækker korte sektioner, og 17 kort skubbede indholdet ned på mobil.
- `cta_saetning` på et emne erstatter "X kommer med i tilbuddet" i CTA-blokken.
- **Nye sider fremover:** sæt `"ny": true` på emne, underside, afsnit eller fag, så bygges de kun med `GULPLADE_TILVALG_NY=1`. Preview: `wrangler pages deploy dist --branch=til-varebilen`. Kør hele kæden igen uden flaget bagefter.
- Indholdet blev researchet af agenter og faktatjekket af andre agenter (~1.100 påstande).
- **Faktafejl rettet:** BEK 1655/2025 (0,8/0,5 × vægten) gælder kun vejsidesyn af køretøjer over 3,5 t. For varebiler er reglen færdselslovens § 82, stk. 3, og 0,8/0,5 er dimensioneringen efter EN 12195-1. Detailforskrifterne er BEK 1484/2025 (907/2025 er historisk). AT-vejledning 2.3.2 om løfteredskaber bortfaldt 15-12-2025.

**Runde 2 i PRODUKTION fra 05-10-2026** (godkendt af brugeren og gennemgået af 5 tekstredaktører, ~600 sproglige rettelser). Samtidig kom "Til varebilen" i hovedmenuen efter "Brugte", i alle generatorer og håndskrevne sider. Mellem 721 og 1080 px har menuen mindre tekst og luft, og under 860 px skjules ordet i logoet. Oversigten er nu ét kompakt gitter (indexKompakt) med brugerens topbillede (assets/img/til-varebilen/oversigt-*.webp) til højre for en intro på to afsnit. Ingen nøgletalsbånd. Ikke afgjort: kildeformlen "læst 4. oktober 2026" (CLAUDE.md regel 6 nævner "læst fra").
**Runde 2 (04–05-10-2026), først på preview:** Brugeren bad om meget mere indhold og "billeder" på alle sider undtagen indretning, og om en dybere forsikringskategori. Resultat: 449 nye/udvidede sektioner, 74 SVG-tegninger og 18 nye undersider (7 under forsikring). I alt 134 sider på til-varebilen.gulplade.pages.dev.
- Figurer: feltet `figur` i en sektion, renderet af tilvalg-figurer.js (noegletal, soejler, daekning, trin, svg). Tegningerne bruger kun tg-klasser, så de virker i mørk tilstand. CSS-reglerne står nederst i style.css.
- Gating: nye sektioner, figurer og undersider har `"ny": true`. Nye FAQ og kilder til eksisterende sider ligger i `faq_ny`/`kilder_ny`. Alt kommer kun med, når GULPLADE_TILVALG_NY=1.
- **Godkendelse:** fjern `ny` på alle niveauer (også figur-objekter), flyt faq_ny/kilder_ny over i faq/kilder, kør hele kæden, deploy.
- Partnerforslag (43 virksomheder i 11 kategorier) ligger i partnerforslag.md i projektroden.

Se [[partnerprogram]], [[maalgruppe-professionelle]], [[gulplade-haandbogen]].
