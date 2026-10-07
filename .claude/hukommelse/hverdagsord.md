---
name: hverdagsord
description: "Skriv konkrete hverdagsord, ikke fagbegreber — fx \"brændstof/el\", aldrig \"energi\""
metadata:
  node_type: memory
  type: feedback
  originSessionId: 3ddff587-45ef-469c-a8ca-16912251af80
  modified: 2026-10-04T12:16:34.313Z
---

04-10-2026, nyheden om el mod diesel: brugeren fik rettet rækken "Energi" til "Brændstof / el". Begrundelse: "der er ingen der forstår energi."

**Why:** Læserne er håndværkere og firmaer. De tænker i diesel og strøm, ikke i samlebegreber, også selv om de er professionelle (se [[maalgruppe-professionelle]]).

**How to apply:** Brug det konkrete ord i tabeller, overskrifter og tekst: brændstof, diesel, strøm, el, ejerafgift. Undgå samlebegreber som "energi", "drivmiddelomkostninger" og "driftsposter", hvor et konkret ord kan stå i stedet.

**Fra 04-10-2026:** Skrivestilen står samlet i CLAUDE.md i projektroden (11 regler og en før/efter-tabel med brugerens rettelser). Agenten `.claude/agents/tekstredaktoer.md` gennemgår ny tekst efter den. Nye rettelser fra brugeren skal i CLAUDE.md's tabel, ikke kun her. Skabelonsætninger trækkes ud med `node tekst-gennemgang/udtraek-skabeloner.js`, og mappen holdes ude af dist.

**04-10-2026, gennemgangen er indført:** Af de 137 forslag i tekst-gennemgang/ALLE-FORSLAG.md er 131 indført og i produktion. b28 (batterigaranti) mangler, fordi den skal tjekkes mod producentens vilkår. Forklaringen over tilbudstabellen på modelsiderne blev slettet efter brugerens ønske, og der står ingen tekst dér. Efter større tekstændringer køres en scanning af dist for "undefined", "NaN", ".." og ubrugte pladsholdere. Pas på regex-erstatninger af ord med endelser: "variant" blev til "udgaveer" og "udgaveen".
