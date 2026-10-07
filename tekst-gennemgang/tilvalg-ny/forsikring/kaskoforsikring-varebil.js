// Underside /til-varebilen/forsikring/kaskoforsikring-varebil/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var FP = `https://www.forsikringogpension.dk/media/rt2lagsz/retningslinjer-for-forsikringsselskaber-og-autovaerksteder-ved-forsikringsskader-paa-biler-2025.pdf`;
var KF = `https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/`;

module.exports = {
  id: "forsikring/kaskoforsikring-varebil",
  side: {
    slug: "kaskoforsikring-varebil",
    navn: "Kaskoforsikring til varebil",
    titel: "Kaskoforsikring til varebil: dækning og selvrisiko",
    kort: `Hvad kaskoen dækker på varebilen, hvad den ikke dækker, og hvordan selvrisikoen er skruet sammen hos Tryg, If, Gjensidige og GF.`,
    beskrivelse: `Kaskoforsikring til varebil: dækning, undtagelser, indretning, opbygning, selvrisiko og totalskade. Med eksempler fra Tryg, If, Gjensidige og GF.`,
    manchet: `Kaskoen dækker skader på varebilen selv: uheld, tyveri, brand, hærværk og glas. Den er ikke lovpligtig, men leasingselskaberne kræver den. Her er dækningen, undtagelserne og selvrisikoen, som selskaberne selv beskriver dem.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Lovpligtig", "Nej", "men leasingselskaberne kræver den"],
        ["Stjålet bil", "4 uger", "før GF og Gjensidige udbetaler kontanterstatning"],
        ["Repareret frontrude", "0 kr.", "i selvrisiko hos GF"],
        ["Eftermonteret udstyr, GF", "18.948 kr.", "dækket op til, fx folie og ekstralygter (basisår 2023)"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det dækker kaskoen",
        tekst: [
          `Gjensidige beskriver kasko som en dækning af alle typer udefra kommende skader på køretøjet med få undtagelser. GF skriver, at kaskoen dækker enhver skade på og tyveri af bilen med de undtagelser, betingelserne nævner.`,
          `Tryg bruger samme opbygning. Udgangspunktet er, at skader på bilen er dækket, og det er listen over undtagelser, der viser, hvad virksomheden selv står med. Derfor fylder undtagelserne mere i betingelserne end selve dækningen.`
        ],
        punkter: [
          `<strong>Færdselsuheld og parkeringsskader.</strong> Kaskoen dækker også, når du selv er skyld i skaden.`,
          `<strong>Tyveri og tyveriforsøg.</strong> Det gælder både hele bilen og dele og udstyr.`,
          `<strong>Brand, lynnedslag og eksplosion.</strong> Skaderne er dækket, også når de rammer motoren og elektronikken.`,
          `<strong>Hærværk og røveri.</strong> Begge er dækket og skal også anmeldes til politiet.`,
          `<strong>Glas.</strong> Ruder er dækket, ofte uden selvrisiko, hvis skaden kan repareres.`,
          `<strong>Nedstyrtende genstande og påkørsel af dyr.</strong> GF regner fx tagsten, der blæser ned fra et hus, som en nedstyrtende genstand, men ikke en cykel, der vælter.`
        ],
        punkt_ikon: "ja",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Varebil set fra siden med karrosseri, ruder, fast reol og en værktøjskasse markeret."><g transform="translate(80,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kasse" x="200" y="100" width="36" height="90"/><line class="tg-skinne-tynd" x1="200" y1="130" x2="236" y2="130"/><line class="tg-skinne-tynd" x1="200" y1="160" x2="236" y2="160"/><rect class="tg-kuffert" x="118" y="166" width="44" height="24"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="110" y1="120" x2="60" y2="46"/><circle cx="110" cy="120" r="3"/><text class="tg-call__navn" x="5" y="24">Karrosseri</text><text class="tg-call__under" x="5" y="38">uheld, hærværk, brand</text></g><g class="tg-call"><line x1="285" y1="100" x2="330" y2="46"/><circle cx="285" cy="100" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Ruder</text><text class="tg-call__under" x="395" y="38" text-anchor="end">reparation ofte 0 kr.</text></g><g class="tg-call"><line x1="218" y1="100" x2="218" y2="76"/><circle cx="218" cy="100" r="3"/><text class="tg-call__navn" x="150" y="56">Fast indretning</text><text class="tg-call__under" x="150" y="70">reoler og skuffer</text></g><g class="tg-call"><line x1="140" y1="178" x2="140" y2="216"/><circle cx="140" cy="178" r="3"/><text class="tg-call__navn" x="146" y="232">Værktøj i kassen</text><text class="tg-call__under" x="146" y="246">ikke kasko, kræver transportforsikring</text></g></svg>`,
          tekst: `Skematisk. Kaskoen dækker bilen og fastmonteret udstyr, ikke løst værktøj. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kasko, delkasko og stilstand",
        tekst: [
          `Delkasko og stilstandsforsikring er mindre dækninger end fuld kasko. De bruges til biler med lav værdi eller biler, der står stille.`,
          `En stilstandsforsikring passer til en bil, der skal stå ubrugt i en periode. Hos GF skal stilstandsperioden være mindst en måned, og der optjenes ikke anciennitet i perioden. If skriver, at nummerpladerne tages af, når bilen står stille med en stilstandsforsikring.`,
          `Hos Tryg skal bilen være forsvarligt opbevaret uden for færdselslovens område. Er der noteret pant i bilen, skal pantet aflyses, før Tryg vil sælge en stilstandsforsikring, også ved skift fra kasko.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "Kasko", "Delkasko", "Stilstand"],
          raekker: [
            ["Færdselsuheld og parkering", "ja", "Tryg: kun totalskade", "nej"],
            ["Tyveri af hele bilen", "ja", "ja", "ja"],
            ["Brand", "ja", "ja", "ja"],
            ["Hærværk", "ja", "Alm. Brand: ja", "GF: ja"],
            ["Panthaverdeklaration hos Tryg", "ja", "nej", "nej"]
          ],
          note: `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.3, 4.5 og 6</a>, <a href="https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/" rel="noopener">Alm. Brand</a> og <a href="${GF}" rel="noopener">GF, punkt 13.3</a>, set den 4. oktober 2026. Trygs delkasko dækker totalskade samt tyveri og røveri af hele bilen. Trygs stilstandsforsikring dækker brand, eksplosion, lynnedslag, tyveri og vandskade. Hos GF dækker stilstandsforsikringen som kasko uden kørselsskader, når bilen står stille i mindst en måned. Alm. Brands delkasko dækker fx hærværk, brand og tyveri, men ikke færdselsuheld.`
        }
      },
      {
        overskrift: "Pakkerne hos fire selskaber",
        tekst: [
          `Selskaberne sælger kasko i faste pakker eller som en grunddækning med tilvalg. Oversigten viser, hvad der følger med uden tillæg, og hvilket tilvalg der dækker de særlige udgifter ved leasing.`,
          `Hos Tryg har alle tre pakker ansvar, kasko, førerdækning og krisehjælp, og Udvidet lægger Tryg Vejhjælp i Danmark oveni. Ifs varebilforsikring gælder ud over almindelige varebiler også ambulancer, rustvogne, køreskolebiler og biler til kurer- og pakketransport.`
        ],
        tabel: {
          kolonner: ["Selskab", "Niveauer", "Det følger med kaskoen", "Til leasing"],
          raekker: [
            ["Tryg", "Basis, Udvidet, Super", "Ansvar, kasko, førerdækning, krisehjælp, el- og hybriddækning og lånebil i alle tre", "Leasingdækning fra Udvidet"],
            ["If", "Ansvar, Kasko, Super", "Brand, indbrud, tyveri, glas, hærværk og anden pludselig skade", "Tilvalget Leasingaftalens førstegangsydelse til Kasko og Super, højst 25.000 kr. første år"],
            ["Gjensidige", "Ansvar, Kasko + tilvalg", "Fri lånebil på samarbejdsværksteder og stenslag uden selvrisiko ved reparation", "Tilvalget Leasing Basis"],
            ["GF Forsikring", "Ansvar, Kasko + tilvalg", "Redningsforsikring i udlandet til biler på højst 3,5 t og retshjælp", "Tilvalget Afleveringsforsikring ved leasing"]
          ],
          note: `Kilder: <a href="https://tryg.dk/erhverv/varebilforsikring" rel="noopener">Tryg</a>, <a href="${IF}" rel="noopener">If</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        efter: [
          `Trygs varebilforsikring gælder varebiler, varevogne og kassebiler med en totalvægt på op til 3.500 kg.`
        ]
      },
      {
        overskrift: "Det dækker kaskoen ikke",
        tekst: [
          `Kaskoen dækker pludselige skader udefra. Slid og rust er ikke dækket, og en fejl i selve bilen hører under reklamationsret og garanti.`,
          `Undtagelserne i GF's erhvervsbilbetingelser er typiske for markedet:`
        ],
        punkter: [
          `<strong>Fabrikations- og konstruktionsfejl</strong> er undtaget, og det samme er skader, der er omfattet af reklamationsret, kulance og garanti.`,
          `<strong>Slid og ælde</strong> er undtaget. Det gælder rust, vejrlig, lakskader fra stenslag og ridser i ruder.`,
          `<strong>Skader alene i mekaniske, elektriske og elektroniske dele</strong> er undtaget, medmindre de skyldes brand, lynnedslag, eksplosion, tyveri, røveri eller hærværk.`,
          `<strong>Forkert brændstof</strong>, kørsel med for lidt vand eller olie og frostsprængning er undtaget.`,
          `<strong>Udlejning.</strong> Skader, mens bilen er udlejet, er ikke dækket.`,
          `<strong>Glemte eller tabte ting</strong>, fx bilnøgler, er ikke dækket.`,
          `<strong>Forsæt og grov uagtsomhed</strong> er undtaget, og det samme er spirituskørsel og kørsel uden kørekort.`,
          `<strong>Ulovlig stand.</strong> Skader, der skyldes, at bilen er ulovlig at bruge, fx på grund af nedslidte dæk, er ikke dækket.`
        ],
        punkt_ikon: "nej",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. En skade, der kun sidder i motor, el eller elektronik, er dækket, hvis den skyldes brand, lynnedslag, eksplosion, tyveri, røveri eller hærværk. Ellers er den ikke dækket, men følgeskader på andre dele er dækket."><defs><marker id="pil-kasko-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="72"/><text x="200" y="28" text-anchor="middle">Skaden sidder kun i motor, el eller elektronik.</text><text class="tg-fremhaev" x="200" y="46" text-anchor="middle">Skyldes den brand, lynnedslag, eksplosion,</text><text class="tg-fremhaev" x="200" y="64" text-anchor="middle">tyveri, røveri eller hærværk?</text><line class="tg-pil" x1="130" y1="78" x2="96" y2="116" marker-end="url(#pil-kasko-1)"/><line class="tg-pil" x1="270" y1="78" x2="304" y2="116" marker-end="url(#pil-kasko-1)"/><text x="96" y="100" text-anchor="end">Ja</text><text x="304" y="100">Nej</text><rect class="tg-modul" x="20" y="120" width="152" height="40"/><text class="tg-modul__tekst" x="96" y="144" text-anchor="middle">DÆKKET</text><rect class="tg-kasse" x="228" y="120" width="152" height="40"/><text x="304" y="144" text-anchor="middle">Ikke dækket</text><line class="tg-skinne-tynd" x1="304" y1="160" x2="304" y2="178"/><rect class="tg-kasse" x="200" y="178" width="196" height="50"/><text x="298" y="199" text-anchor="middle">Følgeskader på andre</text><text x="298" y="217" text-anchor="middle">dele er dækket</text></svg>`,
          tekst: `Skematisk. GF's regel for skader i mekaniske, elektriske og elektroniske dele. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Tryg har de samme hovedregler og undtager desuden punktering, mobiltelefoner og mobile navigationsanlæg, overlæs og kørsel uden lovpligtige vinterdæk. Tryg dækker heller ikke en trailer, der trækkes på varebilens krog, men sælger en særskilt hængerforsikring med ansvar og kasko.`,
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.2</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a> og <a href="https://tryg.dk/erhverv/varebilforsikring" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Specialopbyggede varebiler",
        tekst: [
          `En varebil med kran, køl eller en anden særlig opbygning er mere værd end bilen fra fabrikken. Tryg har særlige regler for varebiler, der er specialopbygget eller ombygget, så de adskiller sig væsentligt fra en almindelig varebil. Tryg nævner mobil madlavning, spulevogn og varebil med monteret kran som eksempler.`,
          `Hos Tryg er værdien af opbygningen kun dækket, hvis den står i policen, og kun op til den valgte sum. Summen skal svare til købsprisen med moms for opbygningen, inklusive montering. Ved kontanterstatning erstatter Tryg opbygningen med højst den sum, der står i aftalen.`,
          `Ombygninger skal også meldes til selskabet. Tryg nævner ændringer af styretøj, bremser, motorens ydeevne og bærende dele. GF nævner ændret vægt og ændringer, der påvirker motorens effekt. Får selskabet ikke besked, kan erstatningen blive nedsat eller falde helt bort.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Varebil med en kran monteret bagpå. Kranen er dækket op til den sum, der står i policen, og selve bilen er dækket af kaskoen."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="88" y="56" width="14" height="28"/><path class="tg-modul" d="M92,58 L214,30 L217,38 L98,68 Z"/><line class="tg-gulvlinje" x1="212" y1="36" x2="212" y2="62"/><rect class="tg-kuffert" x="204" y="62" width="16" height="10"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="160" y1="44" x2="250" y2="44"/><circle cx="160" cy="44" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Opbygning, fx kran</text><text class="tg-call__under" x="395" y="54" text-anchor="end">dækket op til summen i policen</text></g><g class="tg-call"><line x1="200" y1="140" x2="200" y2="228"/><circle cx="200" cy="140" r="3"/><text class="tg-call__navn" x="206" y="240">Bilen</text><text class="tg-call__under" x="206" y="254">dækket af kaskoen</text></g></svg>`,
          tekst: `Skematisk. Trygs regler for specialopbyggede varebiler. Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.5 og 11.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indretning og ekstraudstyr",
        tekst: [
          `Fabriksmonteret udstyr og udstyr, forhandleren monterer før levering, er dækket hos GF. En række ting er dækket, selvom de er monteret senere: tyverialarm og GPS-overvågning, reoler, skuffer og anden indretning, anhængertræk, motorvarmer og klimaanlæg.`,
          `Andet eftermonteret udstyr, fx folie, dekorationer, ekstralygter og specialfælge, er dækket med op til 18.948 kr. inkl. montering og moms (basisår 2023). Summen kan forhøjes med tilvalget Ekstra udstyr.`,
          `Udstyret skal være fastmonteret, så det ikke kan fjernes uden værktøj. Gjensidige dækker eftermonteret audio- og teleudstyr med højst 50.000 kr. pr. skade. Mere om opbygning i <a href="/til-varebilen/indretning/">indretning</a> og <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.`,
          `Erstatter ekstraudstyret noget, bilen havde fra fabrikken, dækker GF ikke værdien af det oprindelige udstyr. Sætter du fx aluminiumsfælge på i stedet for de almindelige fælge, er det kun de nye fælge, der er dækket. Købstædernes Forsikring dækker ekstramonteret udstyr op til 28.713 kr. og sælger dækningen for særligt udstyr til det, der ligger over.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ikke fabriksmonteret udstyr, GF", "18.948", "kr. (basisår 2023)"],
            ["Ekstramonteret udstyr, Købstædernes", "28.713", "kr."],
            ["Eftermonteret audio og tele, Gjensidige", "50.000", "kr. pr. skade"]
          ],
          note: `De tre grænser gælder for forskellige slags udstyr, som teksten beskriver. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026, og <a href="${KF}" rel="noopener">Købstædernes Forsikring: Motorforsikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Selvrisiko",
        tekst: [
          `Selvrisikoen er den første del af hver skade, som virksomheden selv betaler. Er skaden mindre end selvrisikoen, opkræver GF kun skadeudgiften. GF tager ingen selvrisiko, når en kendt skadevolder har anerkendt at skulle betale eller er dømt til det. Tryg tager heller ingen selvrisiko ved tyveri eller hærværk, når skadevolderen er kendt og ansvarlig.`,
          `Tryg har en særlig selvrisiko, når en varebil, der er højere end 2,30 meter, kører ind i fx en bro, et parkeringshus eller taget på en tankstation. Beløbet står i policen. Mere om beløbene i <a href="/til-varebilen/forsikring/selvrisiko/">selvrisiko</a>.`,
          `Hos GF står den aftalte selvrisiko i policen og indeksreguleres. Ved samme begivenhed betales kun én selvrisiko, selvom der både er ansvars- og kaskoskade. Oveni kommer særlige selvrisici:`
        ],
        tabel: {
          kolonner: ["Situation", "Selskab", "Selvrisiko"],
          raekker: [
            ["Frontrude repareret", "GF", "0 kr."],
            ["Glas udskiftet med tilvalget Udvidet glas", "GF", "1.606 kr. (basisår 2023)"],
            ["Forrude udskiftet med tilvalget Glasskade", "Gjensidige", "1.000 kr."],
            ["Stenslag repareret", "Gjensidige", "0 kr."],
            ["Kun skade på ladekablet", "GF", "0 kr."],
            ["Udlån til fører under 26 år", "GF", "6.587 kr. ekstra (basisår 2023)"],
            ["Spiritus, stoffer eller fører uden kørekort", "GF", "19.762 kr. ekstra (basisår 2023)"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, januar 2023</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026. GF's beløb indeksreguleres hvert år den 1. januar fra basisåret, så de aktuelle beløb afviger fra tallene her. Betingelserne fra januar 2023 er dem, GF linker til fra sin side om erhvervsbilforsikring i oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Frontrude repareret", 0, "GF"],
            ["Stenslag repareret", 0, "Gjensidige"],
            ["Kun skade på ladekablet", 0, "GF"],
            ["Forrude udskiftet, tilvalget Glasskade", 1000, "Gjensidige"],
            ["Glas udskiftet, tilvalget Udvidet glas", 1606, "GF"],
            ["Udlån til fører under 26 år", 6587, "GF, ekstra"],
            ["Spiritus, stoffer eller intet kørekort", 19762, "GF, ekstra"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, januar 2023</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026. GF's beløb indeksreguleres hvert år den 1. januar fra basisåret, så de aktuelle beløb afviger fra tallene her. Betingelserne fra januar 2023 er dem, GF linker til fra sin side om erhvervsbilforsikring i oktober 2026.`
        },
        efter: [
          `Udlånstillægget hos GF gælder ikke ansatte under 26 år, der kører bilen som led i ansættelsen. Gjensidiges tilvalg Friskade fjerner selvrisikoen ved brand, eksplosion, lynnedslag, tyveri, røveri, seriehærværk, nedstyrtende genstande og påkørsel af dyr.`
        ]
      },
      {
        overskrift: "Friskade, glas og parkering",
        tekst: [
          `Flere selskaber sælger tilvalg, der fjerner selvrisikoen ved skader, som føreren ikke selv er skyld i. Hos GF og Gjensidige hedder tilvalget Friskade, og hos Tryg hedder det Nulselvrisiko. Hos GF og Gjensidige påvirker skaderne heller ikke pristrinnet.`,
          `Glas har sine egne tilvalg. GF's Udvidet glas fjerner selvrisikoen ved reparation af andet glas end frontruden og giver en selvrisiko på 1.606 kr. (basisår 2023), når glasset skal skiftes. Gjensidiges Glasskade fjerner selvrisikoen ved reparation af ruder, spejlglas og lygteglas, og ved udskiftning af forruden er selvrisikoen 1.000 kr.`,
          `Gjensidige sælger også et tilvalg, der fjerner selvrisikoen, når bilen får en bule, en ridse eller hærværk, mens den holder lovligt parkeret. Skaden påvirker heller ikke præmietrinnet.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "GF Friskade", "Tryg Nulselvrisiko", "Gjensidige Friskade"],
          raekker: [
            ["Brand, eksplosion og lynnedslag", "ja", "ja", "ja"],
            ["Tyveri", "Af aflåst bil", "Ukendt skadevolder", "ja"],
            ["Røveri", "ja", "Ukendt skadevolder", "ja"],
            ["Hærværk", "Seriehærværk", "ja", "Seriehærværk"],
            ["Nedstyrtende genstande", "ja", "ja", "ja"],
            ["Påkørsel af dyr", "ja", "ja", "ja"],
            ["Mår, mus og rotter", "ikke nævnt", "ja", "ikke nævnt"]
          ],
          note: `Hos GF er seriehærværk hærværk mod tre eller flere biler i samme hændelsesforløb, som er anmeldt til og bekræftet af politiet. Kilder: <a href="${GF}" rel="noopener">GF, punkt 5</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.4</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tyveri og totalskade",
        tekst: [
          `Ved tyveri udbetaler GF og Gjensidige først kontanterstatning, når bilen ikke er fundet inden fire uger efter anmeldelsen. Tyveri, røveri og hærværk skal også anmeldes til politiet.`,
          `Hos Tryg er fristen 28 dage efter anmeldelsen til politiet og til Tryg. Findes bilen inden fristen, dækker Gjensidige de skader, den har fået under tyveriet.`,
          `Ved kontanterstatning sætter GF værdien til genanskaffelsesprisen for en bil og udstyr af samme mærke, alder og stand. For en leaset bil går erstatningen til leasingselskabet. Det står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`,
          `Tryg kræver, at føreren tager nøglen med og låser døre og vinduer, når bilen forlades, også et kort øjeblik. Bliver bilen stjålet med nøglen i, kan erstatningen blive nedsat eller falde bort. Bliver nøglerne stjålet, kan GF dække omkodning af låse eller startspærre uden selvrisiko, når GF vurderer, at det skal til for at undgå tyveri af bilen.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Når bilen er stjålet", "Tyveriet anmeldes til forsikringsselskabet og til politiet."],
            ["Fire uger efter anmeldelsen", "Er bilen ikke fundet, udbetaler GF og Gjensidige kontanterstatning. Hos Tryg er fristen 28 dage."],
            ["Erstatningen", "GF sætter værdien til genanskaffelsesprisen for en bil og udstyr af samme mærke, alder og stand."],
            ["Leaset bil", "Erstatningen går til leasingselskabet, som ejer bilen."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.3</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026, og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "GPS-krav i policen",
        tekst: [
          `Nogle biler kan kun forsikres, hvis de har en GPS-tracker. If skriver, at selskabet på nogle køretøjer stiller krav om satellit-tracking. Hos Tryg står kravet i policen, når det gælder bilen.`,
          `Trygs krav betyder, at GPS-enheden skal være fastmonteret senest 8 dage efter, at policen er udstedt. En autoriseret montør skal montere den og udstede en installationserklæring, som virksomheden skal gemme. Enheden skal have backup-strøm til mindst 12 timer og være tilsluttet en døgnbemandet kontrolcentral, når tyveriet sker.`,
          `Ved tyveri skal virksomheden straks handle for at finde bilen. Er kravet ikke overholdt, kan Tryg nedsætte erstatningen eller kræve den betalt tilbage. Priser og typer står i <a href="/til-varebilen/varerumssikring/alarm-og-gps-tracker/">alarm og GPS-tracker</a>.`
        ]
      },
      {
        overskrift: "Hvornår bilen er totalskadet",
        tekst: [
          `En bil er totalskadet, når selskabet udbetaler kontanterstatning i stedet for at reparere den. Grænsen afhænger af, om der er betalt registreringsafgift for bilen.`
        ],
        punkter: [
          `<strong>Uden registreringsafgift.</strong> Tryg anser en varebil uden betalt afgift for totalskadet, når reparation og resternes værdi tilsammen overstiger handelsværdien uden afgift.`,
          `<strong>Med registreringsafgift.</strong> Grænsen følger myndighedernes regler. For gulpladebiler gælder andre procentsatser end for personbiler.`,
          `<strong>Totalskadeblokering.</strong> Bilen er først endeligt totalskadet, når taksator har blokeret den i Motorregistret.`,
          `<strong>Ejerskab.</strong> Når Tryg har udbetalt kontanterstatning, tilhører bilen med ekstraudstyr og specialopbygning selskabet.`,
          `<strong>Delvis skade.</strong> Tryg kan betale en kontanterstatning efter skøn, hvis reservedelene ikke kan skaffes inden for tre måneder, eller hvis skaden er lille og ikke er en risiko for sikkerheden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 156" role="img" aria-label="To bjælker: reparation plus resternes værdi er længere end handelsværdien uden afgift, og så er bilen totalskadet."><text class="tg-fremhaev" x="0" y="16">Reparation + resternes værdi</text><rect class="tg-modul" x="0" y="24" width="236" height="28"/><text class="tg-modul__tekst" x="10" y="42">REPARATION</text><rect class="tg-kasse" x="236" y="24" width="104" height="28"/><text x="246" y="42">rester</text><text class="tg-fremhaev" x="0" y="84">Handelsværdi uden afgift</text><rect class="tg-profil" x="0" y="92" width="290" height="28"/><line class="tg-skinne-tynd" x1="290" y1="16" x2="290" y2="128"/><text class="tg-lille" x="0" y="148">ER DEN ØVERSTE LÆNGST, ER BILEN TOTALSKADET</text></svg>`,
          tekst: `Tegningen er skematisk og viser Trygs regel for en varebil, hvor der ikke er betalt registreringsafgift.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.3 og 11.5</a> og <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, september 2025</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Reparation",
        tekst: [
          `Når skaden er anmeldt, vurderer selskabets taksator skaden og godkender reparationen. Ifølge de fælles retningslinjer fra F&amp;P og autobranchen bruger værksteder og selskaber systemet Autotaks til takseringen.`,
          `Et selskab kan tage forbehold, før det betaler for en reparation, fx ved mistanke om spirituskørsel eller ved ubetalt præmie. Kræver ejeren alligevel bilen repareret, skal værkstedet lave en skriftlig aftale med ejeren om, at ejeren selv betaler, hvis selskabet afviser skaden.`
        ],
        punkter: [
          `<strong>Værkstedet.</strong> GF lader forsikringstager vælge værksted, men kan selv bestemme værksted og leverandør af reservedele.`,
          `<strong>Aftale først.</strong> Reparationen må ikke begynde uden aftale med selskabet eller taksator.`,
          `<strong>Forbedringer.</strong> Bliver bilen bedre end før skaden, fx fordi rustne dele skiftes, betaler forsikringstager forskellen.`,
          `<strong>Værdiforringelse.</strong> En lavere salgsværdi efter reparation erstattes ikke uden tilvalget Værdiforringelse.`,
          `<strong>Uden for arbejdstid.</strong> GF betaler ikke de ekstra udgifter, når reparationen laves uden for normal arbejdstid.`,
          `<strong>Farve og fælge.</strong> GF erstatter ikke farveforskelle efter lakering eller forskelle i fælgene efter en reparation.`,
          `<strong>Ulovlig at køre i.</strong> Tryg tillader mindre reparationer uden aftale, hvis det ellers vil være ulovligt at køre videre i bilen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Anmeld skaden", "Du anmelder straks til selskabet, og tyveri og hærværk også til politiet."],
            ["Taksering", "Taksator vurderer skaden og godkender reparationen."],
            ["Reparation", "Værkstedet sætter bilen i samme stand som før skaden."],
            ["Afregning", "Selskabet betaler værkstedet, og virksomheden betaler selvrisikoen."]
          ]
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.3 og 13.6</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.1 og 11.3</a> og <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, emne 1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fordelsværksteder og reparation",
        tekst: [
          `Flere selskaber har aftaler med værksteder, hvor en reparation giver ekstra fordele. Tryg forbeholder sig ret til at anvise et Tryg Reparationsværksted. Vælger forsikringstager selv værkstedet hos GF, hæfter GF ikke for værkstedets fejl og mangler.`
        ],
        tabel: {
          kolonner: ["Selskab", "Værksted", "Det følger med"],
          raekker: [
            ["Alm. Brand", "Fordelsværksted for biler op til 3.500 kg", "Mindre skader via Smart Repair, oftest 2-6 timer"],
            ["Codan", "Fordelsværksteder, inkluderet i Kasko", "1 års ekstra garanti på reparationen, lånebil"],
            ["Gjensidige", "Samarbejdsværksteder", "Reklamationsret forlænget fra 2 til 3 år, lånebil hvis ledig"],
            ["Tryg", "Tryg Reparationsværksted efter anvisning", "Lånebil i reparationstiden, op til 100 km pr. døgn"]
          ],
          note: `Kilder: <a href="https://www.almbrand.dk/erhverv/kundeservice/hjaelp/anmeld-skade/anmeld-skade_koretoj/" rel="noopener">Alm. Brand: Anmeld skade</a>, <a href="https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/" rel="noopener">Codan</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 11.3</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Hos Codan følger lånebilen ikke med ved glasskader, totalskader og tyveri. Hos Tryg betaler du selv brændstof eller strøm, og Tryg kan ikke garantere, at lånebilen er en varebil.`
        ]
      },
      {
        overskrift: "Brugte og alternative reservedele",
        tekst: [
          `Forsikringsselskabet afgør, om en reparation laves helt eller delvist med brugte eller alternative dele. Bilen skal som udgangspunkt i samme stand som før skaden.`,
          `Påvirker delene fabriksgarantien, holder selskabet ejeren skadesløs. Ejeren kan bede om en kopi af den godkendte taksatorrapport.`,
          `Retningslinjerne slår også fast, at originale karrosseridele af aluminium aldrig må erstattes af dele af stål, og at det samme gælder omvendt.`
        ],
        punkter: [
          `<strong>Originale alternative dele.</strong> De er identiske med fabriksdelene, men har et andet producentnavn.`,
          `<strong>Matchende dele.</strong> Det er andre dele med samme egenskaber og kvalitet som originalen.`,
          `<strong>Økonomidele.</strong> De har typisk lavere kvalitet, svarende til den udskiftede dels stand.`
        ],
        efter: [
          `Kilde: <a href="${FP}" rel="noopener">F&amp;P og autobranchens retningslinjer ved forsikringsskader på biler, september 2025</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Lånebil og afsavn",
        tekst: [
          `Når bilen står på værksted eller er stjålet, dækker selskaberne savnet på to måder. Enten stiller de en lånebil til rådighed, eller også betaler de et fast beløb for hver dag, bilen mangler.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Adgang til lånebil i alle tre pakker. Tilvalget Leasing giver en lånebil inden for 24 timer, når bilen er totalskadet eller stjålet, med højst 3.000 km i alt.`,
          `<strong>Gjensidige.</strong> Fri lånebil på samarbejdsværksteder. Tilvalget Lånebil Plus giver lånebil i op til 30 dage, også når bilen er stjålet eller totalskadet.`,
          `<strong>If.</strong> Super dækker afsavn af køretøjet. Tilvalget Driftstab betaler et dagsbeløb i den afbrudstid, der står i policen.`,
          `<strong>GF.</strong> Tilvalget Bilafsavn betaler 659 kr. inkl. moms pr. dag i højst 28 dage ved tyveri og 6.587 kr. ved totalskade (basisår 2023).`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Lånebil Plus, Gjensidige, højst", 30, "dage"],
            ["Bilafsavn, GF", 659, "kr. pr. dag"],
            ["Bilafsavn ved totalskade, GF", 6587, "kr."]
          ],
          note: `GF betaler bilafsavn i højst 28 dage ved tyveri. GF's beløb er med moms og fra basisåret 2023. Kilder: <a href="${GF}" rel="noopener">GF, punkt 11</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Leasingselskabets krav",
        tekst: [
          `Leasingselskabet ejer bilen og kræver kasko i aftalen. Selskabet får typisk noteret en deklaration hos forsikringsselskabet, så det får besked, hvis forsikringen ophører. Tilvalg til afleveringsskader og førstegangsydelse findes hos flere selskaber. Det hele står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`,
          `En afleveringsforsikring dækker skader, der først bliver opdaget, når bilen afleveres. GF sælger den til biler, der højst er fire år gamle og har kørt højst 120.000 km, og leasingselskabet skal være medlem af Finans og Leasing. Tilvalget kan købes indtil en måned efter, at leasingaftalen er trådt i kraft. Erstatningen er højst 32.942 kr. inkl. moms med en selvrisiko på 6.587 kr. (basisår 2023).`,
          `Gjensidiges Leasing Basis dækker op til 5 skader ved afleveringen, når hver reparation højst koster 5.000 kr. Tryg sælger tilvalget Leasing til varebiler under fire år med en leasingperiode på mellem 6 og 48 måneder.`,
          `Bliver bilen totalskadet tidligt i aftalen, kan et tilvalg give virksomheden førstegangsydelsen helt eller delvist tilbage. If refunderer højst 25.000 kr. det første år og et lavere beløb de næste tre år. Tryg refunderer 100 procent af den valgte sum det første år, 75 procent det andet, 50 procent det tredje og 25 procent det fjerde.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["1. år", 25000],
            ["2. år", 15000],
            ["3. år", 10000],
            ["4. år", 7000]
          ],
          note: `Højeste refusion af førstegangsydelsen ved totalskade eller tyveri med Ifs dækning Leasingaftalens førstegangsydelse. Kilde: <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Syn og skøn og uvildig test",
        tekst: [
          `Er virksomheden og selskabet uenige om bilens værdi ved en totalskade, kan værdien afgøres ved syn og skøn, hvis begge parter vil det. Hos GF og Tryg betaler selskabet alle udgifterne, hvis skønsmanden når frem til en højere værdi end selskabets tilbud. Hos GF betaler virksomheden halvdelen, hvis skønsmanden lander på samme eller en lavere værdi.`,
          `Hos Tryg betaler den part, der beder om syn og skøn, udgifterne, og bilforhandlernes brancheforening udpeger skønspersonen. Tryg har også en uvildig test. Er du uenig i, at reparationen svarer til skaden, kan både du og Tryg kræve bilen testet på et uvildigt testcenter. Den, der beder om testen, betaler den, men Tryg betaler, hvis testen viser, at reparationen ikke var god nok.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.16</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 13</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan tilbuddene på kasko sammenlignes.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og nypris inkl. indretning.",
      "Eftermonteret udstyr og dets værdi: reoler, skuffer, folie, lygter og alarm.",
      "Om bilen er specialopbygget, fx med kran eller køl, og hvad opbygningen har kostet.",
      "Ønsket selvrisiko og om Friskade eller glasdækning skal med.",
      "Hvem der kører bilen, og om der er førere under 26 år.",
      "Om bilen er leaset, og hvilket leasingselskab der skal noteres.",
      "Om der er brug for lånebil eller afsavnsdækning.",
      "Om bilen har en GPS-tracker monteret."
    ],
    faq: [
      ["Hvad dækker kaskoforsikring på en varebil?", "Skader på bilen selv ved uheld, tyveri, brand, hærværk, glasskader og nedstyrtende genstande. Undtaget er bl.a. slid, fabrikationsfejl og skader alene i mekaniske og elektriske dele."],
      ["Er værktøj i bilen dækket af kaskoen?", "Nej. Kaskoen dækker bilen og fastmonteret udstyr. Værktøj dækkes af en transportforsikring. Se <a href=\"/til-varebilen/forsikring/vaerktoejsforsikring/\">værktøjsforsikring</a>."],
      ["Er reoler og skuffer i varerummet dækket?", "Hos GF ja, også når de er monteret efter levering. Andet eftermonteret udstyr er dækket op til 18.948 kr. (basisår 2023), medmindre summen forhøjes."],
      ["Hvad er selvrisikoen på en kaskoforsikring?", "Den aftalte selvrisiko står i policen. Oveni kommer særlige selvrisici, fx 6.587 kr. ekstra hos GF ved udlån til førere under 26 år (basisår 2023)."],
      ["Hvornår får jeg erstatning for en stjålet varebil?", "Hos GF og Gjensidige, når bilen ikke er fundet fire uger efter anmeldelsen til selskabet og politiet. Hos Tryg er fristen 28 dage."],
      ["Stiger prisen efter en skade?", "Hos fx GF påvirker en skade pristrinnet. Det står i <a href=\"/til-varebilen/forsikring/flaadeforsikring/\">flådeforsikring</a>."],
      ["Hvad er forskellen på kasko og delkasko?", "Kasko dækker også færdselsuheld og parkeringsskader. Delkasko dækker færre skader, fx brand og tyveri, og hos Tryg kan der ikke noteres panthaverdeklaration på en delkasko."],
      ["Må forsikringsselskabet bruge brugte reservedele?", "Ja. Selskabet afgør det, men bilen skal i samme stand som før skaden, og selskabet holder ejeren skadesløs, hvis fabriksgarantien påvirkes."],
      ["Er en kran eller anden opbygning dækket af kaskoen?", "Hos Tryg kun, hvis opbygningen står i policen, og kun op til den valgte sum. Summen skal svare til købsprisen for opbygningen inklusive montering."],
      ["Hvad er Friskade?", "Et tilvalg, der fjerner selvrisikoen ved bestemte skader, fx brand, tyveri, røveri, nedstyrtende genstande og påkørsel af dyr. Hos GF og Gjensidige påvirker skaderne heller ikke pristrinnet."]
    ],
    kilder: [
      { navn: "Tryg: Varebilforsikring", url: "https://tryg.dk/erhverv/varebilforsikring", dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: "https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/", dato: "2026-10-04" },
      { navn: "Alm. Brand: Anmeld skade på erhvervskøretøj", url: "https://www.almbrand.dk/erhverv/kundeservice/hjaelp/anmeld-skade/anmeld-skade_koretoj/", dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: "https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/", dato: "2026-10-04" },
      { navn: "F&P m.fl.: Retningslinjer for forsikringsselskaber og autoværksteder ved forsikringsskader på biler, september 2025", url: FP, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Motorforsikring (erhverv)", url: KF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: GF's selvrisiko på 1.606 kr. (basisår 2023) gælder udskiftning af glas med tilvalget Udvidet glas (punkt 6.3), ikke enhver udskiftning af frontruden. Den gamle side skrev 'Frontrude udskiftet, GF, 1.606 kr.'.", GF],
    ["Tryg: kaskoforsikringen dækker enhver skade på den forsikrede varebil samt ved tyveri og røveri, bortset fra undtagelserne i afsnit 4.5.", TRYG],
    ["GF: skade alene i mekaniske, elektriske eller elektroniske dele er dækket, hvis den skyldes brand, lynnedslag, eksplosion, tyveri, røveri eller hærværk, og en følgeskade på dele, der ikke er mekaniske, elektriske eller elektroniske, dækkes (punkt 4.2).", GF],
    ["GF: nedstyrtende genstande kan fx være tagsten, der blæser ned fra et hus; væltning af fx cykler og brændestabler regnes ikke som nedstyrtende genstande (punkt 5.2).", GF],
    ["GF: røveri, tyveri eller hærværk skal straks anmeldes til politiet (punkt 13.6).", GF],
    ["GF: stilstandsperioden er minimum en måned, og der optjenes ikke anciennitet i stilstandsperioden (punkt 13.3).", GF],
    ["If: bruges varebilen ikke i en længere periode, kan nummerpladerne fjernes og en stilstandsforsikring købes.", IF],
    ["Tryg: stilstandsforsikring kræver, at varebilen er forsvarligt opbevaret uden for færdselslovens område, og er der noteret pant, skal kreditor aflyse pantet, før stilstandsforsikring kan købes, også ved skift fra kasko (afsnit 6).", TRYG],
    ["Tryg: alle tre pakker (Basis, Udvidet, Super) indeholder ansvarsforsikring, kaskoforsikring, førerdækning og krisehjælp; Udvidet indeholder desuden Tryg Vejhjælp i Danmark.", "https://tryg.dk/erhverv/varebilforsikring"],
    ["If: varebilforsikringen gælder også ambulance, rustvogn, køretøj anvendt til køreskole samt kurer og pakketransport.", IF],
    ["Tryg undtager bl.a. punktering, mobiltelefoner og mobile navigationsanlæg, overlæs, manglende overholdelse af lovkrav om vinterdæk og skade på tilkoblet enhed som trailer (afsnit 4.5).", TRYG],
    ["Tryg sælger en hængerforsikring, der omfatter både ansvars- og kaskoforsikring.", "https://tryg.dk/erhverv/varebilforsikring"],
    ["Tryg: er varebilen specialopbygget eller ombygget (fx mobil madlavning, spulevogn eller monteret kran), er værdien kun dækket, hvis det fremgår af policen og op til den valgte sum, som skal svare til købsprisen inkl. moms inklusive montering; ved kontanterstatning erstattes opbygningen højst med summen i aftalen (afsnit 4.5 og 11.5).", TRYG],
    ["Tryg: ændringer af styretøj, bremser, motorens ydeevne eller bærende elementer skal meldes; GF: ændret vægt og ændringer, der påvirker motorens effekt, skal meldes; uden besked kan erstatningen nedsættes eller bortfalde.", GF],
    ["GF: er ekstraudstyr monteret i stedet for tilsvarende fabriksmonteret udstyr, fx aluminiumsfælge i stedet for almindelige fælge, er værdien af det oprindelige udstyr ikke dækket (punkt 4.1).", GF],
    ["Købstædernes Forsikring: dækningen for særligt udstyr erstatter ekstramonteret udstyr ud over en værdi på 28.713 kr.; under grænsen er man allerede dækket.", KF],
    ["GF: er selvrisikoen større end skadeudgiften, opkræves kun skadeudgiften; der opkræves ikke selvrisiko, når skadevolderen er kendt og har anerkendt erstatningspligten eller er idømt den (punkt 13.7).", GF],
    ["Tryg: selvrisiko betales ikke ved tyveri eller hærværk begået af en kendt ansvarlig skadevolder (afsnit 9).", TRYG],
    ["Tryg: særlig selvrisiko ved skade på grund af manglende frihøjde, når varebilens højde er over 2,30 m, fx påkørsel af bro, parkeringshus eller taget på en tankstation; beløbet står i policen (afsnit 9).", TRYG],
    ["GF Friskade: ingen selvrisiko og ingen trin- og prismæssige konsekvenser ved brand, eksplosion, lynnedslag, røveri, tyveri af aflåst bil, tyveri af fastmonteret udstyr i aflåst bil, seriehærværk mod tre eller flere biler anmeldt til og bekræftet af politiet, nedstyrtende genstande og påkørsel af dyr (punkt 5).", GF],
    ["Tryg Nulselvrisiko: ingen selvrisiko ved brand, lynnedslag og eksplosion, tyveri og røveri med ukendt skadevolder, nedstyrtende genstande, hærværk, påkørsel af dyr og skade efter mår, mus og rotter (afsnit 5.4).", TRYG],
    ["Gjensidige Friskade: ingen selvrisiko og ingen påvirkning af bonustrin ved brand, eksplosion, lynnedslag, tyveri, røveri, seriehærværk, nedstyrtende genstande og påkørsel af dyr.", GJ],
    ["GF Udvidet glas: ingen selvrisiko ved reparation af glasskader på andet end frontruden og selvrisiko på 1.606 kr. (basisår 2023) ved udskiftning; glasskader påvirker ikke trin (punkt 6).", GF],
    ["Gjensidige Glasskade: ingen selvrisiko ved reparation af ruder, spejlglas og lygteglas; ved udskiftning af forruden er selvrisikoen 1.000 kr.", GJ],
    ["Gjensidige sælger et tilvalg, der fjerner selvrisikoen, når bilen får en bule, ridse eller hærværk, mens den er lovligt parkeret, og skaden påvirker ikke præmietrinnet.", GJ],
    ["Tryg udbetaler kontanterstatning, hvis varebilen efter tyveri ikke er fundet inden 28 dage efter anmeldelse til politiet og Tryg (afsnit 11.5).", TRYG],
    ["Gjensidige: bliver bilen fundet inden fire uger, dækker forsikringen udbedring af skader påført i forbindelse med tyveriet.", GJ],
    ["Tryg: brugeren skal altid tage bilnøglen med og låse døre, vinduer og soltag; stjæles bilen med nøglen i låsen eller i bilen, kan retten til erstatning nedsættes eller bortfalde (afsnit 1).", TRYG],
    ["GF: ved tyveri af bilnøgler opkræves ikke selvrisiko for nødvendige udgifter som omkodning af låse eller startspærre, når GF vurderer, at det skal til for at undgå tyveri af bilen (punkt 4.1).", GF],
    ["If stiller på nogle køretøjer krav om satellit-tracking.", IF],
    ["Tryg GPS-krav: enheden skal være fastmonteret senest 8 dage efter policens udstedelse af autoriseret montør med installationserklæring, have backup-strøm til mindst 12 timer og være aktiveret og tilsluttet døgnbemandet kontrolcentral ved tyveri; brugeren skal straks handle aktivt for at finde bilen; ellers kan erstatningen nedsættes eller bortfalde, og Tryg kan gøre regres (afsnit 10 og 11.8).", TRYG],
    ["Tryg kan betale skønsmæssig kontanterstatning ved delvis skade, hvis reservedele ikke kan fremskaffes eller ikke inden for tre måneder, eller skaden er begrænset og ikke en sikkerhedsrisiko (afsnit 11.5).", TRYG],
    ["F&P's retningslinjer: et selskab kan tage forbehold, fx ved mistanke om spirituskørsel eller præmierestance; kræver ejeren bilen repareret trods forbeholdet, må værkstedet indgå en skriftlig aftale med ejeren om, at ejeren betaler, hvis selskabet afviser skaden; takseringen sker i Autotaks.", FP],
    ["F&P's retningslinjer: originale karrosseridele i aluminium må aldrig erstattes af ståldele, og det gælder også omvendt (emne 5).", FP],
    ["GF betaler ikke ekstraudgifter ved reparation uden for normal arbejdstid og erstatter ikke farvenuancer efter lakering eller forskelle i fælge efter reparation (punkt 4.3.1).", GF],
    ["Tryg: mindre reparationer kan sættes i gang uden aftale, hvis det grundet skaden vil være ulovligt at køre videre (afsnit 11.3).", TRYG],
    ["GF: vælger forsikringstager selv reparatør, hæfter GF ikke for fejl eller mangler fra værkstedets side (punkt 4.3.1); Tryg forbeholder sig ret til at anvise et Tryg Reparationsværksted.", GF],
    ["Tryg Leasing: lånebil ved totalskade og tyveri er til rådighed inden for 24 timer fra accept af skaden og maksimalt 3.000 km i alt (afsnit 5.3).", TRYG],
    ["If: dækningen Driftstab kompenserer afsavn med det dagsbeløb og i den afbrudstid, der står i policen.", IF],
    ["GF Afleveringsforsikring ved leasing: bilen må højst være fire år og have kørt højst 120.000 km, leasingselskabet skal være medlem af Finans og Leasing, købet kan ske indtil 1 måned efter leasingaftalens ikrafttræden, erstatningen er højst 32.942 kr. inkl. moms, selvrisikoen 6.587 kr. (basisår 2023) (punkt 12).", GF],
    ["Gjensidige Leasing Basis dækker op til 5 skader konstateret ved aflevering, når hver skades reparation ikke overstiger 5.000 kr.", GJ],
    ["Tryg Leasing kan købes til varebiler under fire år med en leasingperiode på mellem 6 og 48 måneder; Førsteydelsesdækning refunderer højst 100 %, 75 %, 50 % og 25 % af den valgte sum i år 1-4 (afsnit 5.3).", TRYG],
    ["If refunderer førstegangsydelsen ved totalskade eller tyveri med højst 25.000 kr. det første år, 15.000 kr. det andet, 10.000 kr. det tredje og 7.000 kr. det fjerde år.", IF],
    ["Syn og skøn: hos GF betaler GF alle omkostninger ved en højere værdi end GF's tilbud og forsikringstager halvdelen ved samme eller lavere værdi; hos Tryg betaler den part, der ønsker syn og skøn, Tryg betaler alt ved højere værdi, og bilforhandlernes brancheforening udpeger skønspersonen.", TRYG],
    ["Tryg: ved uenighed om, at reparationen svarer til skaden, kan begge parter kræve bilen testet på et uvildigt testcenter; den, der ønsker testen, betaler, men Tryg betaler, hvis reparationen ikke var tilstrækkelig (afsnit 13).", TRYG]
  ]
};
