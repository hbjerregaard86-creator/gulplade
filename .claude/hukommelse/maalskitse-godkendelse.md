---
name: maalskitse-godkendelse
description: "Målskitserne på modelsiderne er slået fra, indtil brugeren har godkendt en ny version — vis nye visuelle elementer på preview først"
metadata:
  node_type: memory
  type: feedback
  originSessionId: bea2767f-024b-4755-8dd5-3efcca3ae94c
  modified: 2026-10-01T08:30:47.549Z
---

Brugeren fik 30-09-2026 målskitser (maalskitse.js, SVG set fra siden og bagfra) lagt live på alle modelsider. Svaret var "det ser ikke professionelt ud. tag det af indtil det bliver godt og jeg har godkendt det".

Skitsen er slået fra bag `GULPLADE_SKITSE=1` i generate-pages.js.

**Why:** Den skematiske silhuet (samme kasseform på alle modeller) virkede amatøragtig. Brugeren vil godkende nye visuelle elementer, før de går live.

**Status 01-10-2026 (sat på pause af brugeren, "kræver for mange tokens"):**
- maalskitse.js tegner nu ud fra `profil` pr. model i varebiler.json: mm-punkter aflæst af producentens måltegning, med kilde.
- 5 profiler: Trafic, Transit Custom, Transporter (strakt til lang), Sprinter og Berlingo. Trafic, Sprinter og Berlingo har både side og forfra; Transit Custom og Transporter mangler forfra.
- Brugeren syntes, Trafic var "super fin". De fem er IKKE godkendt til live.
- Værktøjerne (gitter.py, test.sh, saet-profil.js) og kildebillederne ligger i scratchpad/profiler. Den mappe forsvinder med sessionen, men profilerne er i varebiler.json.
- Fortsæt kun, hvis brugeren beder om det.

**How to apply:**
- Nye visuelle elementer vises først på en preview (`npx wrangler pages deploy dist --project-name=gulplade --branch=<navn>`, byg med flaget), og brugeren godkender, før produktionen får dem.
- Kør aldrig produktions-deploy med GULPLADE_SKITSE=1 uden godkendelse.
