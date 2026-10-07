// Underside /til-varebilen/forsikring/forsikring-af-indretning-og-udstyr/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var KF = `https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/`;
var FAL = `https://www.retsinformation.dk/eli/lta/2015/1237`;
var BEK = `https://www.retsinformation.dk/eli/lta/2023/1627`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;

module.exports = {
  id: "forsikring/forsikring-af-indretning-og-udstyr",
  side: {
    slug: "forsikring-af-indretning-og-udstyr",
    navn: "Forsikring af indretning og udstyr",
    titel: "Forsikring af indretning i varebilen",
    kort: `Reoler, skuffer, opbygning, folie og løst udstyr i kaskoen: hvad der er dækket, beløbsgrænser, specialopbygning og hvornår indretningen skal oplyses.`,
    beskrivelse: `Forsikring af indretning i varebil: reoler og skuffer i kaskoen, grænser fra 18.948 kr., specialopbygning, folie, løst udstyr og pligten til at oplyse.`,
    manchet: `Fast indretning følger normalt kaskoen, men beløbsgrænser og krav om fastmontering afgør, hvor meget der erstattes. Specialopbygning er kun dækket med den sum, der står i policen. Her finder du reglerne fra selskabernes erhvervsbetingelser, og hvad virksomheden skal melde, når bilen bliver indrettet.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Eftermonteret udstyr, GF", "18.948 kr.", "inkl. montering og moms (basisår 2023)"],
        ["Ekstramonteret udstyr, KF", "28.713 kr.", "grænse uden tilvalg"],
        ["Audio og tele, Gjensidige", "50.000 kr.", "pr. skade for eftermonteret udstyr"],
        ["Specialopbygning, Tryg", "Summen i policen", "købsprisen med moms og montering"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Indretningen følger kaskoen",
        tekst: [
          `Kaskoen dækker bilen og det udstyr, der hører til den. GF dækker fabriksmonteret udstyr og udstyr, som forhandleren har monteret før levering. Noget udstyr er også dækket, selvom det er monteret senere:`,
          `For en håndværker betyder det, at reoler og skuffesystemer i varerummet er dækket hos GF, også når et indretningsfirma har sat dem i efter levering. De tæller ikke med i den beløbsgrænse, der gælder for andet eftermonteret udstyr.`
        ],
        punkter: [
          `Reoler, skuffer og lignende indretning.`,
          `Tyverialarm og GPS-overvågning.`,
          `Anhængertræk.`,
          `Motorvarmer, klimaanlæg, fartpilot og partikelfilter.`
        ],
        punkt_ikon: "ja",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 290" role="img" aria-label="Varerum set fra siden med reol, skuffemodul, alarmsensor og en værktøjskuffert på gulvet."><rect class="tg-rum" x="20" y="60" width="300" height="170"/><rect class="tg-gulv" x="20" y="220" width="300" height="10"/><rect class="tg-kasse" x="40" y="80" width="90" height="140"/><line class="tg-skinne-tynd" x1="40" y1="115" x2="130" y2="115"/><line class="tg-skinne-tynd" x1="40" y1="150" x2="130" y2="150"/><line class="tg-skinne-tynd" x1="40" y1="185" x2="130" y2="185"/><rect class="tg-kasse" x="150" y="160" width="80" height="60"/><line class="tg-skinne-tynd" x1="150" y1="180" x2="230" y2="180"/><line class="tg-skinne-tynd" x1="150" y1="200" x2="230" y2="200"/><rect class="tg-kuffert" x="245" y="192" width="55" height="28"/><rect class="tg-kasse" x="270" y="64" width="18" height="6"/><g class="tg-call"><line x1="85" y1="80" x2="85" y2="44"/><circle cx="85" cy="80" r="3"/><text class="tg-call__navn" x="5" y="20">Reoler og skuffer</text><text class="tg-call__under" x="5" y="34">GF: dækket, også eftermonteret</text></g><g class="tg-call"><line x1="279" y1="70" x2="330" y2="44"/><circle cx="279" cy="70" r="3"/><text class="tg-call__navn" x="395" y="20" text-anchor="end">Alarm og GPS</text><text class="tg-call__under" x="395" y="34" text-anchor="end">GF: dækket uanset montering</text></g><g class="tg-call"><line x1="272" y1="206" x2="300" y2="248"/><circle cx="272" cy="206" r="3"/><text class="tg-call__navn" x="395" y="262" text-anchor="end">Værktøj i kufferten</text><text class="tg-call__under" x="395" y="276" text-anchor="end">ikke kasko: transportforsikring</text></g></svg>`,
          tekst: `Skematisk varerum. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a> og <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, set den 4. oktober 2026. Indretningens opbygning står i <a href="/til-varebilen/indretning/">indretning</a>.`
        },
        efter: [
          `Tryg dækker fastmonteret sikkerheds- og ekstraudstyr. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Beløbsgrænser for eftermonteret udstyr",
        tekst: [
          `Det, der ikke er fabriksmonteret, har en grænse for, hvor meget selskabet erstatter. Grænsen gælder hos GF for alt ikke-fabriksmonteret udstyr samlet, og beløbet dækker både udstyret, monteringen og arbejdslønnen.`,
          `Grænserne er forskellige fra selskab til selskab og gælder forskellige slags udstyr. Købstædernes Forsikring dækker ekstramonteret udstyr op til 28.713 kr. og sælger dækningen for særligt udstyr til den del, der ligger over. Gjensidige dækker eftermonteret audio- og teleudstyr med op til 50.000 kr. pr. skade, og summen kan forhøjes med dækningen for ekstra udstyr.`
        ],
        tabel: {
          kolonner: ["Selskab", "Grænse uden tilvalg", "Udvidelse"],
          raekker: [
            ["GF", "18.948 kr. inkl. montering og moms (basisår 2023)", "Tilvalget Ekstra udstyr"],
            ["Gjensidige", "50.000 kr. pr. skade for eftermonteret audio- og teleudstyr", "Dækningen for ekstra udstyr"],
            ["KF", "28.713 kr. for ekstramonteret udstyr", "Dækning for særligt udstyr"],
            ["Tryg", "Specialopbygning kun med sum i policen", "Summen vælges i policen"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1 og 9</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${KF}" rel="noopener">KF</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026. Grænserne gælder forskellige typer udstyr og kan ikke sammenlignes direkte.`,
          visning: "kort"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Ikke fabriksmonteret udstyr, GF", "18.948", "kr. (basisår 2023)"],
            ["Ekstramonteret udstyr, KF", "28.713", "kr."],
            ["Eftermonteret audio og tele, Gjensidige", "50.000", "kr. pr. skade"]
          ],
          note: `De tre grænser gælder for forskellige slags udstyr, som teksten beskriver. GF's beløb indeksreguleres fra basisåret. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${KF}" rel="noopener">Købstædernes Forsikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det tæller med i grænsen hos GF",
        tekst: [
          `GF giver en liste over, hvad der er ikke-fabriksmonteret udstyr. Det er bl.a. radio og cd-anlæg, specialfælge og dæk, ekstralygter, spoilere og skørter, solvisir, dekorationer, folie og speciallakering. Navigationsudstyr, bil-tv, walkie-talkies og sender- og modtagerudstyr hører også med.`,
          `Har en tømrer fået monteret ekstralygter, folie med firmalogo og specialfælge efter levering, lægges det hele sammen. Kommer summen over grænsen på 18.948 kr. (basisår 2023), er det, der ligger over, kun dækket, hvis virksomheden har købt tilvalget Ekstra udstyr.`,
          `Er udstyret monteret i stedet for noget, bilen havde fra fabrikken, dækker GF ikke værdien af det oprindelige. Sætter du fx aluminiumsfælge på i stedet for de almindelige fælge, er det kun de nye fælge, der er dækket.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 170" role="img" aria-label="Bjælke med eftermonteret udstyr lagt sammen: folie, ekstralygter, fælge og radio. Den stiplede linje markerer GF's grænse på 18.948 kroner. Det, der ligger over grænsen, kræver tilvalget Ekstra udstyr."><text class="tg-fremhaev" x="0" y="16">Ikke fabriksmonteret udstyr hos GF</text><rect class="tg-kasse" x="0" y="30" width="100" height="32"/><text x="10" y="51">folie</text><rect class="tg-kasse" x="100" y="30" width="80" height="32"/><text x="110" y="51">lygter</text><rect class="tg-kasse" x="180" y="30" width="100" height="32"/><text x="190" y="51">fælge</text><rect class="tg-modul" x="280" y="30" width="90" height="32"/><text class="tg-modul__tekst" x="290" y="51">RADIO</text><line class="tg-skinne" x1="280" y1="22" x2="280" y2="76"/><text x="280" y="94" text-anchor="middle">18.948 kr. (basisår 2023)</text><text x="0" y="126">Op til grænsen: med i kaskoen</text><text x="0" y="146">Over grænsen: kræver tilvalget Ekstra udstyr</text></svg>`,
          tekst: `Skematisk, ikke målfast. Udstyret lægges sammen, og den del, der ligger over grænsen, er kun dækket med tilvalget Ekstra udstyr. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1.3 og 9</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "GF-kaskoen med og uden Ekstra udstyr",
        tekst: [
          `Tilvalget Ekstra udstyr forhøjer GF's grænse for ikke-fabriksmonteret udstyr. Policen viser, hvor meget grænsen er sat op, og erstatningen opgøres efter de almindelige regler i kaskoen.`,
          `Ekstra udstyr kan kun købes sammen med kasko. Reoler, skuffer, alarm og anhængertræk er dækket uden tilvalget, så det er folie, lygter, fælge og andet udstyr fra listen, der kan gøre tilvalget relevant.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Udstyr", "Standard", "Med Ekstra udstyr"],
          raekker: [
            ["Reoler og skuffer", "ja", "ja"],
            ["Anhængertræk", "ja", "ja"],
            ["Alarm og GPS", "ja", "ja"],
            ["Folie, dekoration, speciallak", "Op til 18.948 kr.", "Forhøjet sum"],
            ["Ekstralygter og specialfælge", "Op til 18.948 kr.", "Forhøjet sum"],
            ["Løst værktøj", "nej", "nej"]
          ],
          note: `Beløbet har basisår 2023 og gælder alt ikke-fabriksmonteret udstyr samlet. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1 og 9</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Fastmonteret eller løst",
        tekst: [
          `De fleste selskaber dækker kun udstyr, der sidder fast. Grænsen går ved værktøjet. Kan en ting kun tages af med værktøj, er den fastmonteret. Kan den løftes af med hænderne, er den løs.`,
          `Tryg dækker også afmonteret udstyr og løst tilbehør som dæk, fælge og reservedele, når de kun kan bruges til den forsikrede varebil. Det højeste beløb pr. skade står i forsikringsaftalen, og dækningen gælder ikke for delkasko.`
        ],
        punkter: [
          `<strong>Fastmonteret.</strong> Ifølge GF er udstyr fastmonteret, når det ikke kan fjernes uden værktøj og kun er konstrueret til brug i bilen. Gjensidige bruger samme kriterium om værktøj.`,
          `<strong>Afmonteret udstyr.</strong> Ved tyveri kræver GF og Tryg, at udstyret lå i et forsvarligt aflåst rum, og at der er voldeligt opbrud.`,
          `<strong>Udstyr i stedet for standard.</strong> Er fx alufælge monteret i stedet for standardfælge, er de oprindelige fælges værdi ikke dækket hos GF.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Varerum med en reol, der er skruet fast, og en løs værktøjskuffert på gulvet."><rect class="tg-kasse" x="30" y="50" width="110" height="120"/><line class="tg-skinne-tynd" x1="30" y1="90" x2="140" y2="90"/><line class="tg-skinne-tynd" x1="30" y1="130" x2="140" y2="130"/><circle class="tg-modul" cx="38" cy="60" r="4"/><circle class="tg-modul" cx="132" cy="60" r="4"/><circle class="tg-modul" cx="38" cy="160" r="4"/><circle class="tg-modul" cx="132" cy="160" r="4"/><rect class="tg-kuffert" x="250" y="135" width="80" height="35"/><path class="tg-pil" d="M275,135 L275,127 L305,127 L305,135"/><line class="tg-gulvlinje" x1="10" y1="170" x2="390" y2="170"/><g class="tg-call"><line x1="132" y1="60" x2="190" y2="40"/><circle cx="132" cy="60" r="3"/><text class="tg-call__navn" x="196" y="36">Skruet fast</text><text class="tg-call__under" x="196" y="50">GF og Gjensidige</text></g><text class="tg-fremhaev" x="10" y="192">Fastmonteret</text><text x="10" y="208">fjernes kun med værktøj</text><text class="tg-fremhaev" x="390" y="192" text-anchor="end">Afmonteret udstyr</text><text x="390" y="208" text-anchor="end">ved tyveri: aflåst rum, opbrud</text></svg>`,
          tekst: `Skematisk. Forskellen på fastmonteret udstyr og udstyr, der er taget af bilen.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026. Trygs regel om løst tilbehør er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Løst udstyr, der alligevel er dækket",
        tekst: [
          `GF har en liste over ting, der er dækket, selvom de ikke sidder fast. Det er bilens originale tilbehør som reservehjul, lappesæt og donkraft, én cykelholder, én tagbagagebærer eller tagboks og ét sæt vinter- eller sommerdæk med fælge. Op til 5 cd'er eller dvd'er er også med.`,
          `Opladningsudstyr til en elvarebil er også dækket hos GF, selvom det ikke er fastmonteret. Bliver det stjålet, mens det bruges til at oplade bilen, er tyveriet dækket, selvom kablet ikke lå i et aflåst rum.`,
          `Hos Tryg hører elkabler, adaptere og ladestandere til opladning af varebilen under El- og hybridbil dækningen, hvis den er valgt. Ladestanderen på firmaadressen står i <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">ladestander på firmaadressen</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Varebil med tagboks på taget, cykelholder bagpå, et ekstra sæt dæk ved siden af og et ladekabel i varerummet. Alle fire er dækket hos GF, selvom de ikke er fastmonteret."><g transform="translate(80,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kuffert" x="110" y="58" width="110" height="16"/><rect class="tg-kasse" x="58" y="118" width="22" height="44"/><circle class="tg-profil" cx="362" cy="190" r="17"/><circle class="tg-profil" cx="362" cy="154" r="17"/><circle class="tg-modul" cx="220" cy="160" r="11"/><circle class="tg-profil" cx="220" cy="160" r="5"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="165" y1="58" x2="120" y2="40"/><circle cx="165" cy="58" r="3"/><text class="tg-call__navn" x="5" y="20">1 tagboks</text><text class="tg-call__under" x="5" y="34">eller tagbagagebærer</text></g><g class="tg-call"><line x1="362" y1="137" x2="362" y2="44"/><circle cx="362" cy="137" r="3"/><text class="tg-call__navn" x="395" y="20" text-anchor="end">1 sæt dæk</text><text class="tg-call__under" x="395" y="34" text-anchor="end">med fælge</text></g><g class="tg-call"><line x1="69" y1="150" x2="40" y2="212"/><circle cx="69" cy="150" r="3"/><text class="tg-call__navn" x="5" y="224">1 cykelholder</text><text class="tg-call__under" x="5" y="238">bag på bilen</text></g><g class="tg-call"><line x1="220" y1="160" x2="300" y2="212"/><circle cx="220" cy="160" r="3"/><text class="tg-call__navn" x="395" y="224" text-anchor="end">Opladningsudstyr</text><text class="tg-call__under" x="395" y="238" text-anchor="end">også tyveri under opladning</text></g></svg>`,
          tekst: `Skematisk. Løst udstyr, som GF dækker, selvom det ikke er fastmonteret. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1.4 og 4.1.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Værktøj og varer i bilen",
        tekst: [
          `Værktøjet i reolerne og varerne på gulvet er ikke en del af bilen. Kaskoen dækker bilen og det udstyr, der hører til den, men ikke håndværkerens maskiner, el-værktøj og materialer. De skal dækkes af en transport- eller værktøjsforsikring, som står i <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`,
          `Tryg undtager desuden mobiltelefoner, mobile navigationsanlæg og andet mobilt elektronisk udstyr fra kaskoen. En tablet, der sidder i en holder ved instrumentbrættet, er altså ikke dækket, fordi den kan tages med.`,
          `Hvordan værktøjet kan sikres i bilen, står i <a href="/til-varebilen/varerumssikring/sikker-opbevaring/">sikker opbevaring</a>.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.5</a> og <a href="${GF}" rel="noopener">GF, punkt 4.1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Specialopbygning",
        tekst: [
          `Tryg har særlige regler for varebiler, der er specialopbygget eller ombygget, så de adskiller sig væsentligt fra en almindelig varebil. Eksempler er mobil madlavning, spulevogn og varebil med kran.`,
          `Opbygningen er kun dækket, hvis den står i policen, og kun op til den valgte sum. Summen svarer til købsprisen inkl. moms og montering.`,
          `Står summen for lavt, får virksomheden højst summen udbetalt ved en totalskade, også selvom opbygningen kostede mere. Når bilen er totalskadet og erstatningen udbetalt, tilhører bilen med specialopbygningen Tryg. Opbygninger som kran, lad og køl står i <a href="/til-varebilen/ombygning/">ombygning</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Meld opbygningen", "Opbygningen er kun dækket, hvis den står i policen."],
            ["Vælg summen", "Summen svarer til købsprisen med moms og montering."],
            ["Ved skade", "Tryg erstatter højst med summen i policen."]
          ]
        },
        efter: [
          `Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.5</a>, set den 4. oktober 2026, og afsnit 11.5, set den 7. oktober 2026. Læs mere om opbygninger i <a href="/til-varebilen/ombygning/">ombygning</a>.`
        ]
      },
      {
        overskrift: "Pligten til at oplyse indretningen",
        tekst: [
          `Selskabet sætter prisen ud fra det, det ved om bilen. Bliver bilen mere værd eller tungere, ændrer det risikoen, og så skal selskabet have besked.`,
          `GF skal straks have besked, hvis bilens vægt ændres, eller hvis værdien af bilen med udstyr stiger. Tryg nævner ombygning, konstruktive ændringer og ændringer i model, indretning og vægt. En meldt ændring kan betyde, at prisen reguleres fra tidspunktet for ændringen, eller at forsikringen bliver opsagt.`,
          `Får selskabet ikke besked, kan erstatningen blive sat ned eller falde helt bort. GF skriver, at erstatningen kan blive opgjort forholdsmæssigt, altså nedsat i samme forhold som den pris, der blev betalt, og den pris, der skulle have været betalt.`
        ],
        punkter: [
          `<strong>Ved tegning.</strong> Har selskabet fået en forkert oplysning, kan det efter forsikringsaftalelovens § 6 være frit eller hæfte på de vilkår, det ville have tilbudt.`,
          `<strong>Ændringer.</strong> Øges risikoen ved en ændring, som policen nævner, kan selskabet efter § 45 blive frit eller hæfte forholdsmæssigt.`,
          `<strong>Tryg.</strong> Ombygning, indretning, vægt og specialopbygning skal meldes. Policen viser opbygningen og den fastsatte værdi.`,
          `<strong>GF.</strong> Ændret vægt og forøget værdi af bil og udstyr skal meldes.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før levering", "Udstyr, som forhandleren monterer, før den nye bil leveres, er dækket som fabriksmonteret udstyr hos GF."],
            ["Når indretningen er monteret", "Du giver selskabet besked, hvis bilens vægt eller værdien af bil og udstyr er steget."],
            ["Efter beskeden", "Prisen kan blive reguleret fra ændringen, eller forsikringen kan blive opsagt."],
            ["Ved en skade uden besked", "Erstatningen kan blive sat ned, opgjort forholdsmæssigt eller falde bort."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1.2 og 13.2</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 12</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FAL}" rel="noopener">Forsikringsaftaleloven, §§ 6 og 45</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 12</a> og <a href="${GF}" rel="noopener">GF, punkt 13.2</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Vægt og overlæs",
        tekst: [
          `Indretning vejer. Reoler, skuffer og gulvplader tager af nyttelasten, og en tung opbygning kan ændre bilens vægt så meget, at selskabet skal have besked. Hvordan nyttelast og totalvægt hænger sammen, står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `Tryg dækker ikke skader, der skyldes, at varebilen er uforsvarlig eller ulovlig at bruge, fx på grund af overlæs eller manglende syn og godkendelse. GF har en tilsvarende undtagelse for skader, der skyldes, at bilen er ulovlig at bruge på grund af ændringer, fejl eller mangler.`,
          `Kræver en ombygning, at bilen skal synes og godkendes igen, er det en ændring, selskabet skal kende. Reglerne for godkendelse står i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 1 og 4.5</a> og <a href="${GF}" rel="noopener">GF, punkt 4.2 og 13.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Erstatning ved totalskade",
        tekst: [
          `Ved en totalskade erstatter selskabet bilen med det beløb, en tilsvarende bil koster. Tryg regner med en varebil af samme alder og stand med ekstraudstyr, som kan købes kontant.`,
          `Fastmonteret ekstraudstyr giver ikke krone for krone det tilbage, det kostede. Tryg erstatter det med den værdi, varebilen er steget med på grund af udstyret. Tryg kan også vælge at erstatte udstyret med tilsvarende nyt eller brugt udstyr i stedet for penge.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Fastmonteret ekstraudstyr erstattes med den værdi, bilen er forøget med. Specialopbygning erstattes højst med summen i policen.`,
          `<strong>GF.</strong> Værdien sættes til genanskaffelsesprisen for bil og udstyr af samme mærke, alder og stand.`,
          `<strong>Genlevering.</strong> Begge selskaber kan erstatte udstyr med tilsvarende nyt eller brugt.`,
          `<strong>Efter udbetaling.</strong> Hos Tryg tilhører bilen med alt udstyr selskabet.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ved totalskade", "Tryg", "GF"],
          raekker: [
            ["Fastmonteret ekstraudstyr", "Den værdi, bilen er forøget med", "Genanskaffelsesprisen for bil og udstyr af samme mærke, alder og stand"],
            ["Specialopbygning", "Højst summen i policen", "–"],
            ["Tilsvarende nyt eller brugt udstyr i stedet for penge", "ja", "ja"],
            ["Bilen efter udbetaling", "Tilhører selskabet", "–"]
          ],
          note: `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.4-11.5</a> og <a href="${GF}" rel="noopener">GF, punkt 4.3</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.4-11.5</a> og <a href="${GF}" rel="noopener">GF, punkt 4.3</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Folie og reklame",
        tekst: [
          `Hos GF er dekorationer, folie og speciallakering ikke-fabriksmonteret udstyr og indgår i grænsen på 18.948 kr. (basisår 2023) sammen med det øvrige eftermonterede udstyr. Priser på folie står i <a href="/til-varebilen/folie/">bilreklame og folie</a>.`,
          `En helfoliering kan alene fylde en stor del af grænsen, og så er der mindre plads til lygter og fælge. Skal en leaset bil have folie, står leasingselskabets regler i <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`
        ],
        efter: [
          `Kilde: <a href="${GF}" rel="noopener">GF, punkt 4.1</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Trækkrog og tagudstyr",
        tekst: [
          `Anhængertrækket er et af de stykker udstyr, GF dækker, selvom det er monteret efter levering. Det tæller derfor ikke med i grænsen for andet eftermonteret udstyr.`,
          `Traileren bag krogen er en anden sag. Tryg dækker ikke skade på en trailer, der trækkes af varebilen, men sælger en særskilt hængerforsikring. Mere om træk og tagudstyr står i <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`
        ],
        punkter: [
          `<strong>Anhængertræk.</strong> GF-kaskoen dækker anhængertrækket, også når det er eftermonteret.`,
          `<strong>Tagbagagebærer og tagboks.</strong> Én er dækket hos GF, selvom den ikke er fastmonteret.`,
          `<strong>Ansvaret.</strong> Er bilen registreret med tilkobling, dækker ansvaret kørsel med trailer.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 3.1 og 4.1</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.1</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, § 5, stk. 2</a>, set den 4. oktober 2026. Trygs undtagelse for trailere står i afsnit 4.5, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mens bilen er hos indretningsfirmaet",
        tekst: [
          `Mens indretningsfirmaet arbejder på bilen, er den som udgangspunkt ikke dækket af virksomhedens kasko for skader, der sker under arbejdet. Både GF og Tryg undtager skader under behandling eller bearbejdning.`,
          `Undtagelsen har grænser. Brand er dækket hos begge, og det samme er skader under kørsel i forsikringstagerens interesse, fx en prøvetur. Skader, som indretningsfirmaet laver under arbejdet, er et spørgsmål mellem virksomheden og firmaet.`
        ],
        punkter: [
          `<strong>GF.</strong> Kaskoen undtager skader under reparation, behandling og bearbejdning. Brand, skader i selvbetjent vaskehal og kørsel i virksomhedens interesse er dog dækket.`,
          `<strong>Tryg.</strong> Kaskoen undtager skader under behandling eller bearbejdning, men brand og kørsel i virksomhedens interesse er dækket. Virksomheder, der har bilen til reparation og service, er omfattet ved kørsel i virksomhedens interesse.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "GF", "Tryg"],
          raekker: [
            ["Under behandling eller bearbejdning", "nej", "nej"],
            ["Brand", "ja", "ja"],
            ["Kørsel i virksomhedens interesse", "ja", "ja"],
            ["Selvbetjent vaskehal", "ja", "ja"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1-4.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 2 og 4.5</a>, set den 4. oktober 2026. Trygs regel om selvbetjent vaskehal, når vaskeinstruktionen er overholdt, er set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.1-4.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 2 og 4.5</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så er indretningen dækket med den rigtige sum.",
    spoergsmaal: [
      "Indretningens fabrikat, indhold og pris inkl. montering og moms.",
      "Om indretningen er monteret af forhandleren før levering eller senere.",
      "Folie, ekstralygter, alarm og andet eftermonteret udstyr med værdi.",
      "Specialopbygning som kran, kølebox eller værksted.",
      "Ændret vægt eller totalvægt efter opbygningen.",
      "Hvornår bilen er hos indretningsfirmaet.",
      "Om bilen har ladeudstyr, tagboks eller ekstra dæk med fælge."
    ],
    faq: [
      ["Er indretningen i varebilen dækket af kaskoen?", "Fastmonterede reoler og skuffer er dækket hos GF, også når de er monteret efter levering. Andet eftermonteret udstyr har beløbsgrænser."],
      ["Skal indretning oplyses til forsikringsselskabet?", "Ja, når den ændrer bilens værdi, vægt eller anvendelse. Tryg og GF kræver besked, og forsikringsaftaleloven giver selskabet ret til at nedsætte erstatningen ved forkerte oplysninger eller ændringer, der ikke er meldt."],
      ["Er folie dækket af bilforsikringen?", "Hos GF indgår folie og dekoration i grænsen på 18.948 kr. (basisår 2023) for ikke-fabriksmonteret udstyr. Summen kan forhøjes med tilvalget Ekstra udstyr."],
      ["Hvad sker der med indretningen ved totalskade?", "Hos Tryg erstattes fastmonteret ekstraudstyr med den værdi, bilen er forøget med, og bilen med udstyr tilhører derefter selskabet."],
      ["Er en specialopbygning dækket?", "Hos Tryg kun, hvis den står i policen, og højst med den valgte sum."],
      ["Er værktøjet i reolerne dækket af kaskoen?", "Nej. Kaskoen dækker bilen og udstyr, der hører til den. Værktøj og materialer dækkes af en transport- eller værktøjsforsikring."],
      ["Er en tagboks eller et ekstra sæt dæk dækket?", "Hos GF ja. Én tagbagagebærer eller tagboks, én cykelholder og ét sæt vinter- eller sommerdæk med fælge er dækket, selvom de ikke er fastmonteret."],
      ["Er ladekablet til elvarebilen dækket?", "Hos GF er opladningsudstyr dækket, også mod tyveri, mens det bruges til at oplade bilen. Hos Tryg hører kabler og ladestandere under El- og hybridbil dækningen."]
    ],
    kilder: [
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Motorforsikring (erhverv)", url: KF, dato: "2026-10-07" },
      { navn: "Retsinformation: Forsikringsaftaleloven, LBK nr. 1237 af 09/11/2015", url: FAL, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: BEK, dato: "2026-10-04" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["GF (punkt 4.1.3): ikke fabriksmonteret udstyr er dækket med indtil 18.948 kr. (basisår 2023) inkl. montering, arbejdsløn og moms; kategorien omfatter bl.a. radio, kassette og cd-anlæg, specialfælge og dæk, ekstralygter, spoiler og skørter, solvisir, dekorationer, folie og speciallakering, satellitnavigation, bil-tv, integreret dvd med skærme, walkie-talkie og sender- og modtagerudstyr.", GF],
    ["GF (punkt 9): tilvalget Ekstra udstyr kan kun vælges sammen med Kasko; policen viser, hvor meget maksimumsummen er udvidet; erstatningen opgøres efter kaskoreglerne i punkt 4.3.", GF],
    ["Gjensidige: eftermonteret audio- og teleudstyr er dækket med max. 50.000 kr. pr. skade, skal være fastmonteret, og summen kan forhøjes med dækningen for ekstra udstyr.", GJ],
    ["Købstædernes Forsikring: dækningen for særligt udstyr erstatter ekstramonteret udstyr (fx navigation og autostereo) ud over 28.713 kr.; under grænsen er man allerede dækket.", KF],
    ["Tryg (afsnit 4.5): afmonteret udstyr og ikke-fastmonteret tilbehør, herunder dæk og fælge, reservedele og værktøj, er dækket, når det kun kan anvendes med den forsikrede varebil; ved tyveri kræves forsvarligt aflåst rum og voldeligt opbrud; maksimalt erstatningsbeløb pr. skade står i forsikringsaftalen; gælder ikke delkasko.", TRYG],
    ["GF (punkt 4.1.4-4.1.5): dækket selvom ikke fastmonteret: bilens originale tilbehør som reservehjul, lappesæt og donkraft eller værktøjssæt, maksimalt 5 cd eller 5 dvd, 1 cykelholder, 1 tagbagagebærer eller tagboks, 1 sæt vinter- eller sommerdæk inkl. 1 sæt fælge og opladningsudstyr; tyveri af opladningsudstyr er dækket, når det anvendes til opladning af bilen, selvom det ikke opbevares i aflåst rum.", GF],
    ["Tryg (afsnit 4.5): elkabler, adaptere og ladestandere til opladning af varebilen er dækket under El- og hybridbil dækning, hvis den er valgt.", TRYG],
    ["Tryg (afsnit 4.5): kaskoen dækker ikke mobiltelefoner, mobile navigationsanlæg og andet mobilt elektronisk udstyr.", TRYG],
    ["Tryg (afsnit 11.5): kontanterstatning fastsættes til prisen for en tilsvarende varebil af samme alder og stand inkl. ekstraudstyr ved kontant køb; Tryg kan også vælge at erstatte fastmonteret ekstraudstyr efter reglerne om genlevering.", TRYG],
    ["GF (punkt 13.2): GF skal straks have besked, hvis bilens vægt ændres, eller hvis værdien af bilen inkl. udstyr forøges; en ændring i risikoen kan betyde, at prisen reguleres fra ændringen, eller at forsikringen opsiges; uden besked kan retten til erstatning bortfalde eller erstatningen opgøres forholdsmæssigt.", GF],
    ["Tryg (afsnit 12): Tryg skal have besked om ændringer på varebilen, fx ombygning, konstruktive ændringer, ændringer i model, indretning eller vægt og specialopbygning; uden besked kan erstatningen nedsættes eller bortfalde.", TRYG],
    ["Tryg (afsnit 4.5): kaskoen dækker ikke skade, der skyldes, at varebilen er uforsvarlig eller ulovlig at benytte på grund af ændringer eller fejl og mangler, fx overlæs eller manglende syn og godkendelse; Tryg dækker ikke skade på tilkoblet enhed som trailer.", TRYG],
    ["GF (punkt 4.2): kaskoen dækker ikke skade, der skyldes, at bilen er ulovlig at benytte efter færdselsloven på grund af ændringer, fejl eller mangler.", GF],
    ["Tryg (afsnit 4.5): skader i selvbetjent vaskehal er dækket, når vaskeinstruktionen er overholdt.", TRYG]
  ]
};
