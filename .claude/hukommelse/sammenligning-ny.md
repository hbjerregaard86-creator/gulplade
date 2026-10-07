---
name: sammenligning-ny
description: Sammenligningsmodalen på forsiden har foldbare grupper og "Vis kun forskelle"; i produktion 05-10-2026, mobil stabler rækkerne
metadata:
  type: project
---

05-10-2026: Brugeren godkendte den nye sammenligning, og den kom i produktion samme dag. Den er standard nu. `GULPLADE_SMB_NY=0` giver den gamle tabel (SMB_GRUPPER, `gruppe` på SMB_RAEKKER og bygNy() i generate-pages.js, `.smb-tabel--ny` i style.css).

På mobil (under 640 px) står rækkenavnet på sin egen linje, og bilerne står side om side under det (CSS grid, `--smb-n`). Ved 3 eller 4 biler er der klassen `.smb-tabel--mange`, som gør teksten mindre. Brugeren bad specifikt om, at den skulle passe på mobilen uden sidelæns scroll.

Tekstredaktøren rettede "ladning" til "opladning" og "rækker, 2 ens" til "punkter, 2 er ens" eller "alle er ens".

**Why:** Brugeren ville have den "mere lækker" med sektioner, man kan skjule.
**How to apply:** Ved nye rækker i sammenligningen skal de have en `gruppe`. Test altid med 4 biler ved 375 px. Se også [[moerk-tilstand-og-mobil]].
