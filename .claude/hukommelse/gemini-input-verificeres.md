---
name: gemini-input-verificeres
description: Brugerens korrektur- og faktainput fra Gemini skal tjekkes mod kilder før det bruges
metadata:
  type: feedback
---
Brugeren sender korrektur og faktarettelser fra Gemini og spørger, om de kan bruges. Den 02-10-2026 var Gemini blandet:
- Kommaer: mest rigtigt, men fx "forudsat, at" og komma før "eller" ved samme grundled var forkert.
- Fakta: fri bil på gule plader var rigtigt (vores tekst havde momsen omvendt; Skat C.A.5.14.1.12: momsen ER fratrukket).
- Tempo 100 var halvt rigtigt (100 km/t på motorvej, men ikke 90 km/t på landevej).
- Papegøjeplader 100 % for leasede biler var forkert (Motorstyrelsen: 50 %).
- "Bagatelgrænse på et par hundrede meter" står ikke i kilden.

**Why:** Facts need authority sources, and Gemini states plausible but unverified details as facts.

**How to apply:** Check every factual claim against the authority (skat.dk, motorst.dk, retsinformation, trm.dk) before applying it. Fix the source data (viden.json or the generators). Report to the user which suggestions were accepted, which were adjusted and which were rejected, with sources. [[samlet-haandbog-feedbackfil]]
