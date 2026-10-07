---
name: groen-omstilling
description: /groen-omstilling/ (regler + elberegner) bygget 02-10-2026; kilder til energipriser og hvad der var uafklaret
metadata:
  node_type: memory
  type: project
  originSessionId: 6f0ff98c-f399-4030-aa1f-643df100a828
  modified: 2026-10-02T05:46:57.571Z
---

The /groen-omstilling/ page is built by groen.js and groen-tekst.js (rules, prices, FAQ) and is called from generate-pages.js. It has three parts: six rule cards, a diesel→el calculator, and a diesel/el pair table (the PAR map in groen.js). The handbook got a new article, nulemissionszoner, and miljoezoner-og-varebiler was updated with the 7-day rule. Approved and deployed to production 02-10-2026. [[maalskitse-godkendelse]]

The calculator's default prices:
- Diesel: EU Weekly Oil Bulletin with taxes, DK 2.541,74 EUR/1000 l (28-09-2026), × 7,46038 ÷ 1,25 = 15,17 kr./l ekskl. moms.
- El: Danmarks Statistik ENERGI2, business under 20 MWh, level 2 (incl. actual taxes, excl. moms), 2nd half 2025 = 1,42 kr./kWh. The next DST release was 05-10-2026.

**Why:** Facts need an authority source, and tax rates must never be written in. The price defaults go stale and must be updated with their source date.

**How to apply:**
- Update the prices in groen-tekst.js with a new date.
- Recheck Copenhagen's zero-emission zone (Indre Vesterbro). As of 02-10 the committee had approved a smaller zone, but Miljøstyrelsen's and Borgerrepræsentationen's approval was missing. The plan from Jan 2026 was business vehicles from mid-2029.
- The EU proposal to ease the CO2 targets to −40/−90 was not adopted as of Jan 2026.
- A model without ejerafgift in the data (Transit Custom, Transit, Primastar) makes the calculator ask for the amount. It does not treat it as 0.

**02-10-2026, elberegneren:**
- Strøm regnes nu enten pr. kWh eller som Clever-fastpris.
- Pr. kWh: hjemmepris 1,42 kr. (DST), andel ladet ude 30 % og pris ude 3 kr./kWh. Ude-tallene er leasingselskabernes erfaring, oplyst af brugeren. Vi antager, at de 3 kr. er ekskl. moms.
- Clever One Business Van: 999 kr./md. + evt. energitillæg, Premium 1.099 kr. og installation 5.999 kr. Kilde er clever.dk, hentet 02-10-2026. Tjek priserne igen, når standardværdierne opdateres.

**02-10-2026:** Ladetidsberegneren /groen-omstilling/ladetid/ (ladetid.js) er live. Antagelserne kan rettes: last +3 %/100 kg, trailer +50 %/1.000 kg (brugeren syntes 1 %/30 % var for lavt), omvej 10 min., timepris 450 kr. og diesel 500 km pr. tank uden last (last- og trailerfaktoren trækkes også fra diesel), 10 min. pr. tankning. Lynladning regnes fra 10 til 80 % med effekt ud fra producentens dc_tid_min. Tilføj til GSC-køen.
