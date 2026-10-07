---
name: tilbud-gyldighed
description: Tilbud med gyldig_til sorteres kun fra ved bygning; næste byg 01-01-2027. Stellantis-sider hentes med curl og fulde browser-headers
metadata:
  type: project
---

Fra 28-09-2026 har tilbud i varebiler.json feltet `gyldig_til`; generate-pages.js sorterer udløbne fra **ved bygning**.
Siden er statisk (Cloudflare Pages, direct upload), så intet sker af sig selv: bygges der ikke, bliver et udløbet tilbud
liggende online.

**Den 01-10-2026 skal siden bygges og deployes** — ni kampagner udløber 30-09-2026 (Opel Movano Electric, Vivaro og
Combo; Peugeot e-Expert, e-Boxer og Boxer; Citroën ë-Jumper, Berlingo og Jumpy). ë-Jumper har derefter ingen tilbud og
får en modelside uden pris. Tjek samtidig, om importørerne har forlænget eller skiftet kampagnerne (nye tal = nyt tilbud).

**Why:** markedsføringsloven §13 — et udløbet tilbud er et tal, der ikke kan dokumenteres.
**How to apply:** Spørg brugeren om en planlagt daglig bygning (deploy-gulplade.bat), eller byg manuelt dagen efter
hver `gyldig_til`. `GULPLADE_IDAG=YYYY-MM-DD node generate-pages.js` viser, hvad der sker på en given dato.

Se også [[cloudflare-pages-faelder]].

**Bygget 01-10-2026:** de 9 tilbud med gyldig_til 2026-09-30 er væk (122 → 113). ë-Jumper har nu ingen tilbud, /udbydere/peugeot/ og ë-Jumpers 5 sammenligninger giver 404 (bevidst ingen redirect, så de kan komme igen). **Tjekket 01-10-2026:** 8 Stellantis-kampagner er forlænget med samme tal til 31.12.2026 (Opel Combo, Vivaro, Movano og Movano Electric; Peugeot Boxer og e-Boxer; Citroën Berlingo, Jumpy og ë-Jumper). Peugeot E-Expert står stadig med 30.09 og er ude. Peugeot Partner (2.499) og Expert diesel (1.999) har nye kampagner, men fodnoterne er kopieret fra hinanden og stemmer ikke med ydelsen. De er IKKE lagt ind; tjek igen. Næste udløb: 11 tilbud 2026-12-31, så byg 01-01-2027.

**Datoen på forsiden** ("Opdateret …") kommer fra `sidst_opdateret` i varebiler.json og sættes i hånden. Ret den, hver gang tilbud ændres eller forlænges (glemt 01-10-2026).

**Tjekket 05-10-2026 (alle 122 tilbud, kilde_dato sat til 2026-10-05):** Leasing.dk sænkede 11 ydelser med 3-5 kr. Peugeot e-Expert er forlænget med samme tal til 31.12.2026 (gyldig_til sat). Iveco har fået gyldig_til 2026-12-31 på alle tre. Toyotas feb25-side gælder "så længe lager haves" (datoerne på siden hører til et andet kort). Proace Electric og Proace City Electric er skiftet til Toyotas billigere kampagne (1.840 og 1.695 kr.). **Peugeot Partner og Expert diesel er stadig IKKE lagt ind**, fordi fodnoterne stadig er ens og stemmer ikke med ydelsen. **Ayvens Sprinter** viser stadig to restværdier, så der vises ingen. Ayvens' E-Transit-side (3.615 kr.) og deres nye modelside (2.806 kr.) er uenige, så tallet er ikke ændret. Ikke lagt ind: Toyota bZ4X VAN m.fl. (ingen model på sitet) og Iveco Daily 12 m³ (dyrere end 9 m³).

**Senere 05-10-2026:** Ejeren besluttede, at Peugeot Partner (2.499) og Expert diesel (1.999) skal vises. De står med forbehold først i noten (fodnoten er ens og passer ikke). Expert viser restværdien 75.031 kr., fordi fodnotens forbrug og CO₂ passer til dens 2,2-diesel. Partner viser ingen restværdi; ejeren ville først have den på begge, men accepterede, at Partner og Expert er forskellige biler, gyldig_til 2026-12-31. Ejeren tror, Peugeot har glemt at opdatere teksten. Tjek ved næste runde, om fodnoten er rettet, og tilføj i så fald restværdien og fjern forbeholdet. Nye modeller samme dag: toyota-bz4x-van, toyota-bz4x-touring-van, toyota-c-hr-van og toyota-urban-cruiser-van (van-udgaver af personbiler; Toyota oplyser ingen vægte eller varerumsmål; kilder: modelinformation.toyota.dk/Toyota/specs/Varebiler/<model>/ og erhvervsleasingprislisten fra 31. august 2026). Markedstjek 05-10: ingen andre manglende modeller har leasingtilbud med månedspris, undtagen Farizon V7E (Stubbe, løbetid og km mangler) og Mercedes EQV hos Hessel (tal ser forkerte ud).
