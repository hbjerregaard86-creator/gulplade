---
name: linkedin-side
description: "Gulplade.dk's LinkedIn-side (oprettet 30-09-2026) — ejeren vil ikke kunne forbindes med den offentligt; opslag, grafik og regler"
metadata:
  node_type: memory
  type: project
  originSessionId: bea2767f-024b-4755-8dd5-3efcca3ae94c
  modified: 2026-10-05T14:46:22.387Z
---

LinkedIn-siden linkedin.com/company/gulplade (admin-id 146660711) blev oprettet 30-09-2026 fra ejerens personlige konto i browserpanelet.

**Ejeren vil ikke offentligt kunne forbindes med siden** (e-mailen på gulplade.dk er ok for ham).
**How to apply:**
- Opslag laves altid fra sidens administration (Create → Start a post), aldrig fra /feed/. Tjek, at afsenderen i editoren er "Gulplade.dk".
- Inviter aldrig forbindelser.
- Følg ikke siden, og tilføj den ikke som erfaring på profilen.
- Sig nej til Premium og boost.

Udgivelse kræver brugerens ja hver gang.

Filuploads (logo, cover, billeder) kan ikke laves i browserpanelet, så brugeren vælger selv filen. Grafikken tegnes med PIL i scratchpad/linkedin/ (tegn.py, faktakort.py) i sidens farver. Brug ikke producenternes pressefotos, for dem har vi ikke licens til.

Første opslag udgivet 30-09-2026: ny Renault Trafic E-Tech, kun tekst, med link til /haandbogen/ny-renault-trafic-e-tech/. Faktakortet trafic-e-tech-faktakort.png er ikke brugt endnu; brugeren valgte at gemme det til et senere opslag.

Coverbillede uploadet 30-09 (gulplade-cover-centreret-1128x191.png). Upload i 4200x700 fejlede ("Cover image update failed"), men 1128x191 med centreret tekst virkede. LinkedIn beskærer siderne, så teksten skal holdes i midten. Billederne ligger også i C:\biltilbud\linkedin. Specialer mangler.

Linkedin-opslagets indlæsning af link-forhåndsvisning kan flytte markøren til toppen, så skriv hele opslaget i ét type-kald og tjek teksten med innerText før Post.

**Status 30-09-2026 aften:**
- Om-tekst og stiftelsesår er gemt.
- Knappen "Visit website" peger på gulplade.dk/?utm_source=linkedin&utm_medium=social&utm_campaign=side.
- gulplade.dk linker til siden i footeren på alle sider, og forsidens Organization-schema har sameAs.
- Opslag 2–4 ligger klar med kort og tekst i scratchpad/linkedin/tekster.md: Trafic og trailer, papegøjeplader, reel pris. Linkene har UTM-kampagner.
- Plan: ca. to opslag om ugen, hvert med brugerens ja. Brugeren vedhæfter billedet selv.
- Fejlen "Another admin is trying to make changes" ved Save løses ved at genindlæse edit-siden og udfylde igen.

**01-10-2026:** Opslag om Mercedes VAN.EA / ny Vito UDGIVET (tekst i C:/biltilbud/linkedin/vanea-opslag.md; kun tekst, UTM-kampagne vanea). Det linker til /haandbogen/ny-mercedes-vito-van-ea/. Brugeren vil have teksterne "mindre AI-agtige": korte sætninger, ingen salgsfloskler, ingen spørgsmål til kommentarfeltet.
"Start a post" i Create-dialogen prøver at åbne en ny fane (blokeret). Luk dialogen med X, så åbner editoren alligevel (?share=true).
Til produktion deployes UDEN --branch; --branch=main giver kun en preview.

**02-10-2026:** Artiklen /haandbogen/faa-medarbejdere-til-at-skifte-til-elvarebil/ (emne Grøn omstilling) er live. LinkedIn-opslaget er UDGIVET 02-10 fra Gulplade.dk (kun tekst + link-forhåndsvisning, UTM medarbejder-el, tekst i C:/biltilbud/linkedin/medarbejder-el-opslag.md). Klik i editoren fokuserede dialogen, ikke tekstfeltet, så skriv først efter ed.focus() på [role=dialog] .ql-editor.

**05-10-2026:** Siden "gjort færdig": 8 specialer tilføjet (Details-fanen, Enter efter hvert), og siden følger som side Motorstyrelsen, Færdselsstyrelsen, Skattestyrelsen, Mobility Denmark, Dansk Erhverv og TEKNIQ (admin/feed/following?manageFollowing=true; at vælge et søgeresultat = følg). Lokation er ikke udfyldt, fordi en adresse kan pege på ejeren. LinkedIn-manual med plan for 16 opslag (tir/tor kl. 8.30, 6/10–26/11) ligger som Claude Doc: https://claude.ai/code/artifact/bea7f9cd-ae22-4896-a339-6ae304f46f97. Hovedformat er PDF-karrusel, og linket står nederst eller i 1. kommentar, fordi links koster rækkevidde. "Invite to follow" bruges ikke, fordi den kun går til ejerens forbindelser.

**05-10-2026:** Boksen "Følg Gulplade.dk på LinkedIn" under alle artikler (linkedinBoks i generate-viden.js, før tilbudstjek-boksen) er i produktion fra 05-10-2026 (godkendt af brugeren). GULPLADE_LINKEDIN_NY=0 slår den fra. Mailsignaturen med LinkedIn-link er givet til brugeren; Gmail-indstillingen laver brugeren selv.

**02-10-2026:** Opslaget om ladetidsberegneren er UDGIVET fra Gulplade.dk (UTM ladetid, tekst i C:/biltilbud/linkedin/ladetid-opslag.md). Et Reddit-udkast til brugerens personlige post ligger i ladetid-reddit.md. Brugeren er gjort opmærksom på, at det offentligt knytter brugeren til sitet.
