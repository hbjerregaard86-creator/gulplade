---
name: brugtvogn-kilder
description: "Hvilke forhandlere af brugte varebiler der kan hentes som Brdr. Jensen (CarAds), og hvordan Hessel, Semler, REA og Bilboel leverer data; undersøgt 06-10-2026"
metadata:
  node_type: memory
  type: reference
  originSessionId: e3221f7d-b084-404b-b2a4-343ef35c639c
  modified: 2026-10-06T10:54:30.418Z
---

Undersøgt 06-10-2026, da brugeren spurgte, hvor mange brugte varebiler der kan hentes som hos Brdr. Jensen. Se [[brdr-jensen-carads]].

**Optælling 06-10-2026 (uden Brdr. Jensens 334):** CarAds 1.075 rigtige varebiler hos 99 forhandlere (710 med leasingpris, 239 via portaler); 20 forhandlere med mindst 10 har 828. Størst: Lindholm Biler Viborg 184, Leasevarebil.dk Ballerup 99, Kraft Biler Fredericia 75 + Horsens 32, DinVarebil.dk 54, CB Auto Ribe 50, Winther Biler 48. Uden for CarAds: Semler Mobility 105, Hessel 76 detail + 32 engros, REA 30 brugte (+65 fabriksnye), Bilboel 34, Sylvest 4. Brugeren har ikke besluttet noget endnu; aftale med hver forhandler kræves, før deres biler vises.

**CarAds (samme system som Brdr. Jensen):**
- Fælles sitemap pr. forhandler: `https://nextgen.carads.io/sitemaps/<cid>/sitemap.xml` (id 1–700 gav 117 forhandlere, ca. 17.700 biler).
- Feed med optælling: `nextgen.carads.io/feeds/<cid>/<fid>/created/desc/<side>` (15 pr. side, `total`, `aggregates`). `fid` står i forhandlerens side som `"cid":167,"fid":"340"` i `carads_search_settings`.
- `products/<cid>/x<id>` virker for alle forhandlere; id er tallet sidst i URL'en. JSON'en har `dealer` med den rigtige forhandler.
- **100autotjek.dk og aksel.nu er portaler** med biler fra mange forhandlere. **djleasing.dk er Brdr. Jensens egen leasingside** (185 af 187 biler er de samme).
- "Van" i variantnavnet fanger også SUV'er på gule plader (Volvo XC90, Mercedes GLE). Sortér på model.
- Sylvest Varebiler (Odense, cid 170) har kun 4 biler.

**Andre systemer:**
- **Hessel:** egen Next.js-side, `__NEXT_DATA__` på hver bil (`carFamily[0].purchaseTypes`). Sitemap har `/erhverv/brugte-vans/`. v-u = detailsalg, v-e = engros. Kun få har leasingpris; ingen nyttelast (står 0).
- **Semler Mobility:** `/find-bil/brugte-varebiler/` i sitemap; JSON i `data-vehicle` med nyttelast, totalvægt, pris, `MomsFree`, `HasLeasing`.
- **REA Erhvervsbiler (rea.as):** AutoIt/Biltorvet-pluginet (`autoit-dealer-tools`), bag Simply.com-browsertjek. Listen blander fabriksnye, brugte og solgte. Leasing står i fritekst.
- **Bilboel (Ørbæk):** egen HTML med JSON-LD; data og billeder fra Bilinfo.
- AutoIt/Biltorvet bruges også af Bil Center Syd, Andersen Biler og Bilernes Hus. Bilinfo bruges af Bilboel og Nellemann. Begge kræver forhandlerens nøgle eller eksport.
- Tryk Biler (Vejle) viser kun bilerne på Bilbasen.
