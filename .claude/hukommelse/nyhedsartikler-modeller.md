---
name: nyhedsartikler-modeller
description: "Modelnyheder i /nyheder/ (Trafic, Vito, E-Transit Custom, Master E-Tech) — opskriften der virker, og nyhedsboksen på modelsiden"
metadata:
  node_type: memory
  type: project
  originSessionId: 23928e02-c989-4321-a494-9a5bca976862
  modified: 2026-10-05T12:49:02.133Z
---

Brugeren skrev den 05-10-2026, at /nyheder/ny-renault-trafic-e-tech/ klarer sig godt, og bad om flere artikler af samme slags i høj kvalitet. Samme dag udkom ny-ford-e-transit-custom og renault-master-e-tech-2026.

**Opskriften:** et "Det korte svar" med fede tal, en vinkel på hvad der er nyt, en sammenligning med den udgave, man kan lease i dag, en tabel, et afsnit om gule plader og kørekort, en FAQ og kilder fra producenten (pressemeddelelse og dansk prisliste). Tallene tjekkes selv i prislisten og pressemeddelelsen, og bagefter læser tekstredaktoer teksten.

**Intern linkning:** feltet `nyhed` på modellen i varebiler.json ({over, tekst, sti, link}) giver en nyhedsboks på modelsiden. Trafic E-Tech havde den fra starten, og Vito og eVito fik den først den 05-10. Det kan være grunden til, at Mercedes-artiklen klarede sig dårligere. Nye modelnyheder skal altid have boksen.

**Fakta at huske:** 4-tons Master E-Tech er efter reglerne en lastbil (N2), selv om den kan køres på B-kørekort efter Færdselsstyrelsens danske særregel. Ejner Hessels "122 hk" findes ikke i nogen Renault-kilde. Master H2-Tech (brint) blev aldrig sat i salg, fordi Hyvia gik konkurs i februar 2025.

Se også [[gsc-indekseringsanmodninger]] og [[hverdagsord]].

**05-10-2026, Kia:** kia-pv7 er skrevet om på samme niveau. URL'en er den samme. Artiklen dækker den danske lancering i efteråret 2027, sammenligner med PV5 i en tabel, viser PV5-priserne og nævner PV9 i 2029. Mærkesiderne kan nu vise nyhedsbokse via `nyheder: [{over, tekst, sti, link}]` i maerker.json. Det findes for Ford, Renault (2), Mercedes-Benz og Kia. Vores PV5-nyttelast på 690 kg gælder Long Range, og Kias "op til 790 kg" gælder Standard Range.
