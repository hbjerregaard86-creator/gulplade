---
name: modelsider-om-modellen
description: Modelsiderne har "Om [model]" (generation, fabrik, søstermodeller, udgaver, DK-registreringer, historie) fra modeller.json; i produktion 05-10-2026 på alle 66 sider
metadata:
  node_type: memory
  type: project
  originSessionId: a75e346c-aa15-48f8-89c8-82325f2afe52
  modified: 2026-10-05T18:46:07.918Z
---

Brugeren bad 05-10-2026 om at få modelsiderne til at performe, efter at mærkesiderne var færdige ([[maerkesider-om-maerket]]).

**Search Console, 3 måneder til 05-10-2026:** Søgningerne er "[model] leasing (erhverv/priser)", "[model] pris/prisliste" og "kampanje". De store modelsider ligger på plads 16–19 med 0 klik: Transit Custom (93 visninger), Transporter (53) og Sprinter (41). Master E-Tech (7,8), Ducato (7,4) og ë-Jumpy (6,1) ligger på side 1 uden klik.

- `modeller.json` samler modelfamilier (diesel, plugin og el), med registreringstal fra Mobility Denmark (2025 og 2026 til 30-09), rang og redaktionel tekst med kilder. Fabrikken hentes fra maerker.json.
- I generate-pages.js står modelOmHTML og modelOmFaq. Der er tre nye FAQ: "Hvor bliver X bygget?", "Hvor mange X bliver solgt i Danmark?" og "Hvad koster en ny X?" (nypris).
- Preview: https://modelsider.gulplade.pages.dev (branch `modelsider`, bygget i en scratch-kopi).
- Tekstredaktøren har gennemgået teksten, og den er rettet.

**Why:** Siderne bliver vist i Google, men ingen klikker. De mangler indhold om selve bilen.

**How to apply:** Godkendt og i produktion 05-10-2026. GULPLADE_MODEL_NY=0 slår det fra. Registreringstallene har dato og bør opdateres, når 2026-tallene er klar.
