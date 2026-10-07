---
name: gmail-udkast
description: Udkast oprettet via Gmail-værktøjet får udløbne google.com/url-links, når de åbnes i Gmail; lav i stedet en lokal HTML-side at kopiere fra. Underskriv Henrik Bjerregaard
metadata:
  node_type: memory
  type: feedback
  originSessionId: 646c0710-d341-4791-87e8-f08c72606c35
  modified: 2026-10-05T06:43:49.542Z
---

Gmail laver links i udkast, der er oprettet via API, om til google.com/url?q=...&ust=...-omdirigeringer, når udkastet åbnes i Gmail. Det gælder både links i ren tekst og <a href>, og omdirigeringen udløber, så modtageren lander på en død side (set i sendt mail 05-10-2026). Også adresser i ren tekst uden <a> blev lavet om (testet 05-10-2026). Løsning: lav en lokal HTML-side med rigtige <a href>-links og kopiknapper (fx presse-udkast/pressemails-2026-10-05.html), som brugeren kopierer fra ind i en ny Gmail-mail med Gulplade.dk som afsender. send_message med draftId omgår skrivevinduet, men kan ikke vælge afsenderalias. Pressemails underskrives "Henrik Bjerregaard / Gulplade.dk / kontakt@gulplade.dk".

**Why:** Journalister skal se rene gulplade.dk-links, og en personlig afsender virker bedre end "Gulplade.dk".
**How to apply:** Lav ikke pressemails som Gmail-udkast. Lav en kopiside som ovenfor. Afsenderadressen vælger brugeren selv i Fra-feltet, se [[mail-dmarc]].
