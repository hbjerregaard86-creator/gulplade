# Gulplade.dk

Statisk site om erhvervsleasing af varebiler. Bygning og deploy: se [DEPLOY.md](DEPLOY.md).
Læserne er håndværkere, firmaer og flådeansvarlige: professionelle, men ikke bilnørder eller jurister.

Noter fra tidligere sessioner ligger i [.claude/hukommelse/](.claude/hukommelse/MEMORY.md), med MEMORY.md som oversigt.
Læs dem i en cloud-session. Kopien er fra den 7. oktober 2026, og noterne på ejerens computer kan være nyere.

## Skrivestil

Gælder al tekst, der ender på sitet eller i en mail: artikler (viden.json), sætninger i
generatorerne (generate-*.js), FAQ, titler, beskrivelser og pressemeddelelser.
Ny eller ændret tekst gennemgås af agenten `tekstredaktoer` før deploy.

### Reglerne

1. **Skriv hele sætninger med et verbum.** Ikke telegramstil eller lister forklædt som sætninger.
2. **Brug læserens ord, ikke datamodellens.** Skriv "bil", "model" og "elbil" i stedet for
   "version", "variant" og "modelpar". Skriv "tilbud", ikke "aktuelle tilbud". Skriv
   "forhandleren eller leasingselskabet" i løbende tekst, og brug "udbyder" kun i tabeller og navigation.
3. **Konkrete ord frem for samlebegreber:** diesel, strøm, brændstof, ejerafgift. Aldrig
   "energi", "drivlinje", "driftsposter" eller "omkostningselementer".
4. **Verber frem for substantiver.** Skriv "Vi har brugt det billigste tilbud", ikke
   "Grundlaget er det billigste tilbud". Skriv "vi sammenligner", ikke "sammenligningen viser".
5. **Almindelig ordstilling.** Skriv "På modelsiden kan du se, hvad der følger med", ikke
   "Hvad hvert tilbud indeholder, står på modelsiden".
6. **Intet kancellisprog:** ikke "pr. 4. oktober" (skriv "den 4. oktober"), "læst fra",
   "i forhold til", "foretage", "såfremt", "det er værd at bemærke", "fire af fire" (skriv "alle fire").
7. **Ingen skråstreger i løbende tekst.** "brændstof/el" må stå i en tabel, men i en sætning
   skriver man "diesel og strøm".
8. **Én pointe pr. sætning.** Højst ét kolon pr. afsnit, og ingen kæder af tankestreger.
9. **Tal med enhed, og en dato, når tallet kan ændre sig.** Moms nævnes én gang pr. side
   ("Alle priser er uden moms"), ikke ved hvert tal.
10. **Neutral tone til professionelle.** Ingen advarsler, moraler eller "pas på". Vis fakta,
    og lad læseren vurdere.
11. **Fakta ændres aldrig for sprogets skyld.** Bliver en sætning bedre af at være mindre
    præcis, så find en anden formulering.
12. **Titler, beskrivelser og indledninger på landingssider må gerne sælge**, fordi de skal få folk
    til at klikke fra Google. Sælg med det konkrete: pris, antal tilbud, årstal, hvad man kan se og
    gøre på siden (sammenligne, få tilbud gratis). Ingen tomme superlativer ("markedets bedste"),
    ingen "jungle" og ingen påstande, tallene ikke kan bære.

### Før og efter

Brugeren har udpeget før-teksterne som dårligt dansk. Efter-teksterne er omskrivninger efter reglerne.

| Før | Efter |
|---|---|
| Elvarebil eller diesel: el er billigst pr. måned i fire af fire modelpar | Elvarebil eller diesel? El er billigst i alle fire modeller, vi har regnet på |
| Fire modeller, samme udbyder og løbetid på begge versioner. Med brændstof/el og ejerafgift er elversionen billigst i alle fire, selv hvor leasingydelsen er højest. | Vi har regnet på fire varebiler, der fås med både diesel og el. Når diesel, strøm og ejerafgift lægges oven i leasingen, er elbilen billigst hver gang, også når den koster mest at lease. |
| Udstyr og motor. Varianterne er de billigste aktuelle tilbud og er ikke ens udstyret: dieselversionen af Kangoo har manuelt gear, elversionen automatgear. Hvad hvert tilbud indeholder, står på modelsiden. | Bilerne er ikke helt ens udstyret. Vi har brugt det billigste tilbud på hver bil, og derfor har diesel-Kangooen manuelt gear, mens el-Kangooen har automatgear. På modelsiden kan du se, hvad der følger med i hvert tilbud. |
| det billigste aktuelle tilbud på hver version hos samme udbyder, læst fra udbydernes egne prislister pr. 4. oktober 2026 | Vi har brugt det billigste tilbud på hver bil. Diesel- og elbilen er fra samme forhandler eller leasingselskab, og priserne er fra deres egne prislister den 4. oktober 2026. |
| Energi | Brændstof / el (i tabel) eller diesel og strøm (i tekst) |
| Sorteret efter pris pr. md. med udbetalingen fordelt over løbetiden. **I alt** er udbetalingen plus alle ydelser i aftaleperioden — uden restværdi og driftsomkostninger. **Oplyst** viser, hvor mange af de fem driftsposter udbyderen forholder sig til. | *(Slettet. Brugeren syntes heller ikke, omskrivningen virkede. Hellere ingen forklaring over en tabel end en lang forklaring af kolonnerne.)* |
| Der er aftalt en restværdi, som du hæfter for, når aftalen udløber. | Aftalen har en restværdi, som du hæfter for, når den udløber. |
| Den rigtige varevogn afhænger af, hvad den skal bære, hvor den skal parkere og hvad du vil bruge om måneden. Herunder er den billigste i hver klasse lige nu — og under den en guide for hvert behov, med kriteriet skrevet ovenover. | Den rigtige varevogn afhænger af dit behov: hvad den skal bære, hvor langt den skal køre, og hvad den må koste om måneden. Her finder du de billigste elvarebiler i hver klasse lige nu, blandt de 121 tilbud, vi har samlet. Brug guiderne nedenfor, hvis du vil dykke ned i nyttelast, træk og udstyr. *(Brugerens eget eksempel på levende tekst: tal direkte til læseren med "dit", "du" og "her finder du", og lad verberne bære. Brugeren skrev "markedets absolut billigste", men det kan tallene ikke bære, så det blev "blandt de 121 tilbud, vi har samlet".)* |

| Kilde: Topdanmark, læst 4. oktober 2026 | Kilde: Topdanmark, set den 4. oktober 2026 *(Brugerens valg 05-10-2026 for alle kildenoter på sitet. "hentet" i kildelisten under "Kilder" står uændret.)* |
| Her står den vejledende nypris på hver model uden moms, med leasingydelsen ved siden af. Nyprisen er producentens egen pris til forhandleren, så du kan læse de to tal sammen. | Her finder du den vejledende nypris på hver model og det billigste leasingtilbud ved siden af. *(Brugeren kaldte før-teksten "sludder". Den var også forkert: den vejledende pris er den pris, importøren anbefaler forhandleren at sælge bilen for. "uden moms" blev fjernet, fordi linjen over tabellen allerede nævner momsen.)* |
| 10.000 kr. mere end Trend på samme bil | Den koster 10.000 kr. mere end en Trend med samme motor, gear og længde. *(Brugeren 06-10-2026: "hvad betyder det". "Samme bil" sagde ikke, hvad der var ens, og fra-priserne over teksten viste en anden forskel.)* |
| Linjen går fra den laveste til den højeste startpris. Klik for at se bilerne. *(under figuren med startpriser, sammen med aksen "150.000 kr. … 450.000 kr.")* | *(Slettet. Brugeren 06-10-2026: "slet det". Det er samme ønske som ved tabellen: en figur eller tabel skal ikke have en forklaring med.)* |

Nye rettelser fra brugeren føjes til tabellen.

## Faste regler for indholdet

- Afgiftssatser skrives aldrig ind. Henvis til myndigheden.
- Regler om gule plader, moms og afgift har en myndighed som kilde (Motorstyrelsen, Skattestyrelsen, Færdselsstyrelsen).
- Nye visuelle elementer vises på en preview-branch, før de går i produktion.
- Brug aldrig Product-, Car- eller Vehicle-schema på modelsiderne.
