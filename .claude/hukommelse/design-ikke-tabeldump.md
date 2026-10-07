---
name: design-ikke-tabeldump
description: "Nye sider skal bygges i forsidens visuelle sprog (bilkort med foto, chips, rubrik med tal); en side, der er en stor tabel med \"Ikke oplyst\"-celler, \"ligner noget, der er løgn\""
metadata:
  node_type: memory
  type: feedback
  originSessionId: f3836557-4bc0-4d0c-bd58-4fbb5e0465a3
  modified: 2026-10-05T20:30:08.151Z
---

Første udgave af /koeb-ny-varebil/ (05-10-2026) var en H1, fire nøgletalsbokse (to med samme tal), en tabel med 63 rækker i monoskrift fuld af "Ikke oplyst" og en tabel mere. Brugeren skrev: "Den skal simpelthen redesignes fra bunden. Infoen er god, men den ligner noget, der er løgn."

**Why:** Professionelle læsere stoler på en side, der ligner resten af sitet og viser bilerne. En regnearksdump med tomme felter og gentagne tal ser opdigtet ud, selv når hvert tal har en kilde.

**How to apply:** Byg nye sider med forsidens komponenter: `hero-ny` med mærkat og dato, en rubrik med konkrete tal, `chips` med antal, `bilkort-grid` med foto og stor pris, `stempel` med kilde og dato. Udelad felter uden oplysning i stedet for at skrive "Ikke oplyst" i hver celle. Brug én lille figur (fx søjler i `--text-soft`) frem for nøgletalsbokse. Tabeller hører til på modelsiden eller bag et skift mellem kort og liste. Se [[koeb-ny-varebil]], [[forside-ny-preview]] og [[maalgruppe-professionelle]].
