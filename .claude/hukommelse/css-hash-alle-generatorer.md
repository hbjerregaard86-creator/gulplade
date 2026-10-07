---
name: css-hash-alle-generatorer
description: "Når style.css ændres, skal ALLE fire generatorer køres før deploy; byg-dist.js stopper ellers og lægger de seneste ti CSS-navne med (css-historik.json) for Cloudflares cache"
metadata:
  node_type: memory
  type: feedback
  originSessionId: e5a1483d-84bd-40a7-8e3a-8fbec0b3fb00
  modified: 2026-10-07T07:26:04.626Z
---

06-10-2026 om aftenen stod /haandbogen/, /til-varebilen/, /brugte-varebiler/ og /nyheder/ uden CSS i produktion i omkring en time. generate-pages.js laver style.<hash>.css og sletter de gamle filer. generate-viden.js, generate-tilvalg.js og generate-brugte.js skriver kun den nye hash ind, når de selv bliver kørt. Ved hubdeployet blev kun generate-pages.js kørt.

**Why:** Hver ændring i style.css giver en ny hash. Sider fra de tre andre generatorer peger så på en fil, der ikke længere findes. Desuden serverer Cloudflare i nogle minutter efter et deploy HTML fra cachen med det forrige CSS-navn.

**How to apply:**
- Er style.css ændret, så kør alle fire generatorer i rækkefølgen fra DEPLOY.md, før byg-dist.js.
- byg-dist.js har to sikkerhedsnet fra 07-10-2026:
  1. Det stopper med "STOP: sider peger paa filer, der ikke findes i dist/assets/", hvis en side peger på et stylesheet eller samtykke-script, der ikke er der.
  2. Bagefter lægger det de seneste ti stylesheet-navne fra css-historik.json (i roden, kommer ikke i dist) med som kopier af det nuværende stylesheet, så cachet HTML stadig får CSS.
- Brug ikke `| tail` efter byg-dist i en kæde med `&&`. Pipen skjuler fejlkoden, så deployet kører alligevel.
- Tjek efter et deploy med en crawl af sitemappet, ikke kun én side.
