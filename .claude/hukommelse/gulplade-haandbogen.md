---
name: gulplade-haandbogen
description: "Vidensmodulet på gulplade.dk — hvor reglerne er hentet fra, og hvorfor satser aldrig skrives ind"
metadata:
  node_type: memory
  type: project
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-10-06T18:15:38.316Z
---

`/haandbogen/` (Gulplade Håndbogen) er gulplade.dk's indholdsmodul, bygget 23-09-2026 for at trække trafik fra
folk, der søger på reglerne før de søger på priser. `viden.json` → `generate-viden.js`.

**Kilderne der duer** (myndigheder, ikke leasingportaler):
- `motorst.dk/erhverv/gule-plader-og-papegoejeplader/regler-for-gule-plader` — hvad
  der tæller som erhvervskørsel, de 25 ture hjem, 20 dagsbeviser, sanktionerne
- `info.skat.dk/data.aspx?oid=2303451` — Den juridiske vejledning: momsfradrag efter
  totalvægt (under 3 t, 3–4 t), specialindretning, passagerregler
- `info.skat.dk/data.aspx?oid=2085713` — fradrag for køretøjer, §42, 25 %-reglen
- `fstyr.dk/privat/koerekort/koerekortkategorier` — kategori B op til 3.500 kg, C1 til 7.500 kg
- `fstyr.dk/da/Syn-af-koeretoej/Periodisk-syn` — varebil ≤3.500 kg: første syn efter 4 år,
  derefter hvert 2.; over 3.500 kg: efter 1 år, derefter hvert år
- `info.skat.dk/data.aspx?oid=1947974` — fri bil på gule plader: LL §16 stk. 4 gælder **ikke**,
  når der ikke skal betales privatbenyttelsesafgift, og arbejdsgiveren HAR trukket momsen fra
  (DJV's titel "der ikke er betalt moms" betyder, at momsen er fradraget; rettet 06-10-2026).
  Papegøjeplader = fri bil-reglerne gælder (oid=1947964).
- **06-10-2026, nye artikler fra Search Console-huller:** smaa-varebiler, billig-varebil (begge med
  `autotabel` fra beregnTal/TABELLER), gulpladebiler (krav til varerum: JV I.A.1.4.3 oid=1947292),
  privatbenyttelsesafgift, firmabil-paa-papegoejeplader. Skift af plader står som afsnit i
  gule-hvide-eller-papegoejeplader (Google sender "til papegøje/til hvide"-søgninger dertil), og
  "momsfri" er lagt ind i momsdoed-varebil. Lav ikke flere separate papegøje-sider, for der er
  allerede fem, og de konkurrerer med hinanden.
- **Motorstyrelsens momsskema (bilen bruges også privat, ≤3 t):** køb intet fradrag, leasing 1/3,
  drift HELE momsen, ingen moms ved salg. WebFetch-resuméet gengav det forkert (drift 1/3) — læs
  tabellen selv med curl, når det gælder tal.
- **Nyregistreringer:** Mobility Denmark er kilden, men de udgiver **ikke** en top-10 pr.
  varebilsmodel offentligt — kun mærkeniveau for personbiler. Modeldata må hentes fra
  branchemedier. Bemærk at mobility.dk og branchemedierne opgiver **forskellige** årstal
  for samme periode (16.668 mod 16.958 for jan–aug 2026); månedstallene er derimod ens.

**Satser skrives aldrig ind.** Privatbenyttelsesafgiftens 2026-tal kunne ikke
verificeres fra en myndighedskilde — kun 2021/2022-tal og en generel regulering på
+17,2 % fra 2026. Artiklen beskriver derfor strukturen (to vægtklasser, halv sats ved
delvis privat brug, opkræves med den grønne ejerafgift) og henviser til Motorstyrelsen
for beløbet. Samme regel gælder fremover: et forældet afgiftstal koster læseren rigtige penge.

**Tal fra vores egen tabel står som `{{pladsholdere}}`** og regnes ud af
`varebiler.json` ved hver bygning. Mangler en nøgle, brækker bygningen. Sætningerne
skal kunne tåle et nul: „{{daek_inkl}} af {{tilbud}} tilbud inkluderer dæk“, ikke
„0 tilbud inkluderer dæk“.

**Nyheder (fra 01-10-2026):** artikler med "sektion": "nyheder" og "udgivet" i viden.json bygges til /nyheder/<slug>/ (NewsArticle-schema) i stedet for /haandbogen/. generate-viden.js sletter gamle mapper, der ikke længere passer til sektionen. Flytter en artikel sektion, skal der en 301-linje i _redirects. Menuen er hårdkodet i alle fire generatorer og i de statiske sider tilbudstjek/ og saadan-tjener-vi-penge/.

**Finansiel leasing (ejeren, 01-10-2026):** Det er altid leasingtager, der skal indfri restværdien. Skriv aldrig "hvem bærer restværdirisikoen" som et åbent spørgsmål ved finansiel leasing. Det åbne spørgsmål er, hvordan restværdien indfries, fx om man selv kan anvise en køber.

**Pladsholderfejl rettet 01-10-2026:** generate-pages viste {{pladsholdere}} råt i "Læs også"-kortene på 17 guidesider, fordi den læste viden.json direkte. Nu skriver generate-viden.js viden-udfyldt.json (ikke i dist), og generate-pages læser den først. Byggerækkefølgen viden → pages → viden holder den opdateret. L/H-tal (l1_lav … h3_hoej) beregnes i beregnTal ud fra variant_for_maal.
