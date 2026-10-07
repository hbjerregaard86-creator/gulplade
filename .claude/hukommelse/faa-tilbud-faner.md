---
name: faa-tilbud-faner
description: Få tilbud og Tilbudstjek er to faner under én menuknap; konkurrence-spørgsmålet står som frivilligt kryds i Tally-formularen kdqGd6
metadata:
  type: project
---

Fra 01-10-2026 står kun "Få tilbud" i topmenuen. /faa-tilbud/ ("Find tilbud til mig", forhandleren betaler) og /tilbudstjek/ ("Tjek et tilbud", ingen forhandler betaler) har den samme fanebjælke (.forloeb). Adresserne er uændrede, så der er ingen redirect. Fanebjælken står i faaTilbudHTML i generate-pages.js og i den håndskrevne tilbudstjek/index.html.

/tilbudstjek/tak/ (noindex, tjekTakHTML) ER sat som Tallys "redirect on completion" på formularen kdqGd6 ("Tilbudstjek - Erhverv"). Sat op 01-10-2026 i browserpanelet, efter at brugeren havde logget ind. Fra 01-10-2026 (sent) stilles spørgsmålet IKKE på takkesiden, men i selve Tally-formularen: et frivilligt kryds "Ja, find konkurrerende tilbud på samme bil" (isRequired false) med en tekst om, at udbyderen så betaler et fast honorar. Det står på sidste side før Submit. Takkesiden takker bare og siger, at vi også går i gang med de konkurrerende tilbud, hvis man har bedt om dem. Tally-formularens tekst er rettet til "695 kr. ekskl. moms pr. tilbud" og udgivet 02-10-2026 (tjekket på tally.so/r/kdqGd6).

**Why:** Tjekket lover uvildighed. Spørgsmålet må derfor kun komme efter indsendelsen og skal være tydeligt frivilligt med betalingen oplyst.

Se [[leadservice-provision]] og [[maalgruppe-professionelle]].

Tally kdqGd6: "Self email notifications" blev slået til 01-10-2026 og sender til ejerens Gmail. Det var slået fra, så tidligere indsendelser gav ingen mail. De ligger stadig under Submissions.
