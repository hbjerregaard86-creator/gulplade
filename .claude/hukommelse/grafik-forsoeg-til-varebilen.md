---
name: grafik-forsoeg-til-varebilen
description: "SVG-topbilleder, kort fortalt, \"På siden\", tilbudsstribe og ~4 figurer ekstra på alle 74 undersider under Til varebilen; i produktion fra 05-10-2026"
metadata:
  node_type: memory
  type: project
  originSessionId: f1f2c79b-8956-4d91-9393-21e947c3f2d0
  modified: 2026-10-05T11:04:36.577Z
---

05-10-2026: Brugeren syntes, at undersiderne under /til-varebilen/ var "for kedelige". Brugeren valgte selv SVG-tegninger frem for AI-billeder, ville have tilbudsstriben med og godkendte tre forsøgssider. Samme dag kom alle 74 undersider i produktion, med 266 nye figurer ud over forsøgssiderne.

- Feltet `visuel` på hver underside styrer `hero` (et topbillede pr. emne, emnets slug), `hero_el` (lyn på bilen), `kort_fortalt` (4 felter), `toc` og `stribe` (ids, drivmiddel eller pr_stoerrelse). Koden ligger i tilvalg-visuel.js, og HERO har et topbillede til alle 11 emner.
- Sektionsfelterne er `punkt_ikon` (ja, nej eller trin) og `tabel.visning` ("kort", eller "skjul", når en figur viser alle tabellens tal og har kilderne i noten). Figurtypen `tidslinje` er ny, og `soejler` kan få `max`.
- Agenterne skrev patcher ud fra en fælles opskrift. Fem tekstredaktører gennemgik derefter teksterne og lavede 108 rettelser. Fletningen tjekkede overskrifter, SVG-regler og stribe-ids.
- Fejltyper, der skulle rettes: agenter, der udleder eller parrer tal, siden ikke selv parrer (fx 9 mm til 6,1 kg), farveord i billedtekster ("gul", "grå"), "nej" i matricer, hvor siden intet siger, og en sortfyldt path med tg-gulvlinje (nu fill: none).
- Indretningens 48 bil-, fag-, regel-, skuffe- og brugtsider (indretning-sider.js) fik samme behandling i produktion 05-10-2026, regnet i koden. Bilsiderne har modellens foto som topbillede (godkendt på preview), plantegning set ovenfra (kun hvor det lange modul på 2.006 mm kan være i lastrummet), lastrummet sammenlignet med de 4 nærmeste i længde, søjler for nyttelast og en stribe med `ids_valgfri` + `fyld` (samme størrelse).

**Why:** Brugeren vil have levende sider med konkrete tal, ikke stockbilleder (se [[maalgruppe-professionelle]]).
**How to apply:** Nye undersider skal have `visuel` og 3–5 figurer fra start. Brug byggeklodserne ovenfor, og lad nye tekster gå forbi tekstredaktoer. Se [[til-varebilen-udvidelse]] og [[moerk-tilstand-og-mobil]].
