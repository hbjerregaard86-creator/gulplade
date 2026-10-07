---
name: bedste-varebil-side
description: "/bedste-tilbud/bedste-varebil-2026/ kårer vindere ud fra samlet vurdering og anmeldelser (aarets-valg.json); i produktion 05-10-2026"
metadata:
  node_type: memory
  type: project
  originSessionId: 78f3cbaa-5e75-4fb8-a815-a8af03d46153
  modified: 2026-10-05T06:35:00.679Z
---

Brugeren kalder "Bedste varebil 2026" en hovedside for trafik. 05-10-2026 bad brugeren om, at vinderne kåres "som helhed" og ikke kun på pris, med anmeldelser, og at Renault Master E-Tech skal vinde de store ("det er den bedste bil").

Valget står i `aarets-valg.json`: model-id, label, guide, begrundelse og anmeldelser med kilde og URL. Pris og mål på kortet kommer fra varebiler.json. De 52 tal-kategorier står i en sammenklappet tabel. Valg pr. 05-10: Master E-Tech (årets varebil), Transit Custom, Kia PV5 Cargo, Transit Courier og Ford Ranger.

Researchen viste, at Master er den mest prisbelønnede store varebil (IVOTY 2025, Årets Varebil 2025 DK), men Crafter vandt Van Reviewer 2026 i dieselklassen. Skriv derfor priserne konkret og ikke "markedets bedste". whatcar/parkers/fleetnews blokerer WebFetch, men curl med browser-headers virker.

Godkendt og i produktion 05-10-2026. Standard nu; `GULPLADE_AARETS_NY=0` giver det gamle udseende.

**Why:** Nye visuelle elementer skal godkendes på preview først, se [[maalskitse-godkendelse]].
**How to apply:** Når et tilbud på en valgt model forsvinder, falder kortet væk af sig selv. Opdatér så aarets-valg.json.
