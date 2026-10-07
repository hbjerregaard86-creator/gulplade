---
name: leadservice-provision
description: "Vilkårene for /faa-tilbud/ og tilbudstjek: forhandlere og leasingselskaber betaler samme honorar, tjek 695 kr. fra 02-10-2026 (ingen gratis-50), store aftaler pr. sag"
metadata:
  node_type: memory
  type: project
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-09-24T05:54:23.609Z
---

Fra 24-09-2026 tjener gulplade.dk også på at hente leasingtilbud hjem til
kunden. Ejeren har bekræftet vilkårene:

- **Forhandleren betaler pr. henvendelse**, ikke pr. underskrift. Aftalerne er
  på plads.
- **Samme beløb fra hver forhandler i netværket.** Det er den sætning, der
  bærer hele siden: den fjerner motivet til at pege kunden mod én bestemt
  forhandler. Uden den kan `/faa-tilbud/` ikke skrive, at vi er på kundens side.
- **Henvendelser går til ejerens private Gmail-adresse** (OBS: fra 01-10-2026 kontakt@gulplade.dk overalt, se nederst; ikke `hej@gulplade.dk`,
  som de 54 øvrige mailto-links på siden bruger).
- Forhandlernes navne er ikke oplyst — siden skriver „forhandlere, vi har en
  aftale med“.

Det er en kommerciel interesse, og hver gang der skrives om indtægterne, skal
alle tre kilder nævnes: tilbudstjekket (kunden betaler), leadhonoraret
(forhandleren betaler) og annoncepladsen på de brugte varebiler
([[brdr-jensen-carads]]). Sammenligningen selv er stadig ubetalt, og ingen
udbyder kan købe en placering.

**Fælde:** løfter om uafhængighed lå spredt fem steder i tre generatorer og to
håndskrevne sider. Ændres modellen igen, skal `/saadan-tjener-vi-penge/`,
`/tilbudstjek/`, forsidens FAQ, bunden og `ctaBlok()` alle med — ellers står
der stadig „vi sælger ikke leads“ et sted.

**Popup-formularen (fra 30-09-2026):** alle knapper med `data-lead="brugt"|"ny"` åbner en `<dialog>` fra
`assets/samtykke.js`, som sender via **Web3Forms** med **leasio.dk's access_key** (ejeren valgte samme indbakke som
Leasio). Emnet er "Gulplade.dk – brugt/ny varebil: <bil>", så de kan skelnes. Fallback uden JS: mailto/Tally.
GA-hændelse `generate_lead` ved sendt formular (kun med samtykke). /faa-tilbud/ bruger stadig Tally.

**Fra 01-10-2026 (bekræftet af ejeren):**
- Vi henter tilbud fra forhandlere og leasingselskaber, alt efter hvad der giver mening. Begge betaler det samme faste honorar pr. henvendelse.
- Ordlyden på hele sitet er nu "den forhandler eller det leasingselskab, vi sender henvendelsen til". Det gælder footeren i alle generatorer og de to håndskrevne sider, forsidens FAQ, udbydersiderne, Sådan tjener vi penge, privatlivssiden og samtykketeksten i samtykke.js.
- Tilbudstjek koster 695 kr. ekskl. moms pr. tilbud (hævet fra 349 kr. 02-10-2026). Ingen udbyder betaler for gennemgangen. Ordningen "gratis for de første 50" er fjernet overalt.
- Større samarbejds-, flåde- og rammeaftaler kan også tjekkes. Prisen aftales pr. sag efter kompleksitet og timeforbrug.

**Tilbudshjælpen (01-10-2026, ejerens svar):**
- Vi henter fra alle relevante udbydere, ikke kun samarbejdspartnere.
- Normalt tre tilbud, og der er næsten altid mere end én, der kan levere.
- Kunden får sammenligningen skriftligt.
- Vi svarer altid inden for 24 timer.

**Mail:** Kun kontakt@gulplade.dk er sat op i Cloudflare Email Routing (videresendes til ejerens Gmail; catch-all er Drop). hej@gulplade.dk blev droppet. Fra 01-10-2026 bruger hele sitet, også formular-fallbacks, kontakt@gulplade.dk. Gmail-adressen må aldrig stå offentligt.

**Fra 05-10-2026 (brugerens svar):** Forhandlerne betaler også for **købshenvendelser** om nye varebiler (samme honorar). Det kom med den nye købsside, se [[koeb-ny-varebil]]. Ordlyden skal rettes de samme fem steder.
