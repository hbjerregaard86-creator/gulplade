---
name: til-varebilen-laengere-grafik
description: "Til varebilens 11 emnesider og 74 undersider omskrives længere og med flere figurer (07-10-2026); tilvalg-ny.json bag GULPLADE_TILVALG_NY=1, opskrift og tjek i tekst-gennemgang/tilvalg-ny/"
metadata:
  node_type: memory
  type: project
  originSessionId: a87512f2-1966-4a19-845e-fa16ba086ee3
  modified: 2026-10-07T08:36:15.098Z
---

07-10-2026 bad brugeren om det samme for Til varebilen som for Håndbogen samme morgen: "Jeg vil gerne have at tekstredaktøren gør alle gamle tekster igennem i til varebilen og optimere dem. De skal være længere og der skal være mere grafik og illustrationer. De må gerne fylde en del da det er opslagstekster."

- **Mekanik:** generate-tilvalg.js læser tilvalg-ny.json (`{ emner: { slug: felter }, undersider: { "emne/slug": side } }`), når GULPLADE_TILVALG_NY=1. En underside erstattes helt; et emnes felter erstattes (undersider og data bliver). Emnesiderne kan nu også have `visuel` (hero, kort_fortalt, toc, stribe). Oversigtens afsnit "Poster uden for ydelsen" (brugte "driftsposter") har ny tekst bag samme flag.
- **Værktøjer i tekst-gennemgang/tilvalg-ny/** (kommer ikke i dist): OPSKRIFT.md (regler for skribenterne), vis-side.js, tjek.js (ord ×1,6–2, +3 figurer, +2 svg, forbudte ord fra CLAUDE.md, svg-klasser og farver, interne links mod sitemap, tabte tal fra den gamle side, nye_fakta), flet.js (samler <emne>/<slug>.js og _emne.js til tilvalg-ny.json) og preview.sh (bygger i en KOPI i %TEMP%, så arbejdsmappen aldrig får preview-sider, og deployer til grenen til-varebilen-v3).
- **Arbejdsgang:** 17 skribent-agenter (4–7 sider hver) → tekstredaktoer + faktatjek af nye_fakta pr. bunke → skribenten retter → preview → brugeren godkender.
- Indretningens kodegenererede sider (bil, fag, regler, skuffer, brugt i indretning-sider.js) er IKKE med i denne runde.
- **Go-live:** flyt tilvalg-ny.json ind i tilvalg.json (uden nye_fakta), slå oversigtsteksten til uden flag, kør alle fire generatorer, byg-dist og deploy.

Se [[haandbog-laengere-grafik]], [[grafik-forsoeg-til-varebilen]], [[til-varebilen-udvidelse]] og [[css-hash-alle-generatorer]].
