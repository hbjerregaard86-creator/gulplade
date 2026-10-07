---
name: haandbog-laengere-grafik
description: "Håndbogens 42 artikler omskrives længere og med figurer (07-10-2026); viden-ny.json bag GULPLADE_VIDEN_NY=1, figurer og topbilleder fra Til varebilen; preview før produktion"
metadata:
  node_type: memory
  type: project
  originSessionId: e5a1483d-84bd-40a7-8e3a-8fbec0b3fb00
  modified: 2026-10-07T08:46:46.448Z
---

07-10-2026 bad brugeren: "Jeg vil gerne have at tekstredaktøren gør alle gamle tekster igennem i håndbogen og optimere dem. De skal være længere og der skal være mere grafik og illustrationer. De må gerne fylde en del da det er opslagstekster."

- **Mekanik:** generate-viden.js læser viden-ny.json (`{ artikler: { slug: artikel } }`) og erstatter artiklen med samme slug, når `GULPLADE_VIDEN_NY=1`. En artikel kan have `visuel` (hero, hero_el, kort_fortalt, toc), og afsnit kan have `figur` (noegletal, soejler, daekning, trin, tidslinje og svg fra tilvalg-figurer.js).
- **Topbilleder:** fem nye i tilvalg-visuel.js: haandbog-regler (§), haandbog-moms (%), haandbog-leasing (kontrakt), haandbog-bilvalg (målestok og m³) og haandbog-groen (CO₂, med lyn ved hero_el). Tegnet er altid mørkt på det gule mærke (.tv-h-tegn).
- **Arbejdsgang:** syv agenter skrev artiklerne efter en fælles opskrift: mindst dobbelt så lange, 3–6 figurer, kun myndighedskilder, aldrig satser, h1 og title bevaret. De blev tjekket med tjek.js (skema, figurer, pladsholdere og forbudte ord fra CLAUDE.md). Derefter gennemgik tekstredaktoer dem. Opskriften og scriptet lå i sessionens scratchpad og er væk. Genskab dem fra denne beskrivelse.
- **Status 07-10-2026:** Alle 42 artikler er gennemgået af tekstredaktoer, og rettelserne er inde. De ligger på preview: haandbog.gulplade.pages.dev (noindex). Afventer brugerens godkendelse. Motorstyrelsens eksempelbeløb på differenceafgiften er taget ud efter reglen om satser. Blødt bindestreg (U+00AD) bruges i lange ord i kort_fortalt.
- **Go-live:** flet viden-ny.json ind i viden.json (eller gør flaget til standard), kør alle fire generatorer, byg-dist og deploy. Genanmod de vigtigste artikler i GSC: Håndbogen gav 32 af 61 klik i 28 dage.

Se [[gulplade-haandbogen]], [[grafik-forsoeg-til-varebilen]] og [[css-hash-alle-generatorer]].
