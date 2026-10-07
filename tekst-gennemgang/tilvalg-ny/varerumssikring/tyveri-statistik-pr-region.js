// Underside /til-varebilen/varerumssikring/tyveri-statistik-pr-region/ (07-10-2026)
var DST = `https://www.statbank.dk/STRAF11`;
var FOLK = `https://www.statbank.dk/FOLK1A`;
var DSTDOK = `https://www.dst.dk/statistikdokumentation/c1ac7749-1e15-4d3a-8ed0-fb2d26a9fe93`;
var INST26 = `https://www.installator.dk/nye-tal-tyverier-fra-varebiler-falder-markant`;
var FP24 = `https://via.ritzau.dk/pressemeddelelse/13782161/voldsom-stigning-i-tyveri-fra-handvaerkerbiler-i-kobenhavnsomradet?publisherId=4901971&lang=da`;
var FPXLSX = `https://via.ritzau.dk/files/4901971/13782161/69692/da`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;

module.exports = {
  id: "varerumssikring/tyveri-statistik-pr-region",
  side: {
    slug: "tyveri-statistik-pr-region",
    navn: "Tyveri fra biler pr. region",
    titel: "Tyveri fra bil: statistik pr. region og kommune",
    kort: `Se Danmarks Statistiks tal for anmeldte tyverier fra biler i hver region og kommune, udviklingen siden 2019 og første halvår 2026.`,
    beskrivelse: `Se tyverier fra bil i hver region og kommune 2019-2026, også pr. 10.000 indbyggere og kvartal for kvartal, og Rigspolitiets tal for varebiler.`,
    manchet: `Danmarks Statistik opgør hvert kvartal de anmeldte tyverier fra bil, båd mv. pr. region og kommune. I 2025 blev der anmeldt 13.168, omkring 36 om dagen, og over halvdelen af dem var i Region Hovedstaden. Her finder du tallene for regioner, kommuner og politikredse, og hvad de dækker.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["Anmeldt i 2025", "13.168 tyverier", "fra bil, båd mv. i hele landet"],
        ["Region Hovedstaden", "34,8 pr. 10.000", "indbyggere i 2025, flest af regionerne"],
        ["København", "3.845 anmeldelser", "flest af alle kommuner i 2025"],
        ["Fra varebiler", "3.618 tyverier", "i 2025 ifølge Rigspolitiet"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tallene kort",
        tekst: [
          `I 2025 blev der anmeldt 13.168 tyverier fra bil, båd mv. i hele landet. Det svarer til omkring 36 om dagen. Region Hovedstaden stod for 6.733 af dem, eller 51 procent.`,
          `Første halvår 2026 lå 8 procent under første halvår 2025, men faldet fordeler sig skævt. Det kom i Region Hovedstaden og Region Midtjylland, mens de tre andre regioner fik flere anmeldelser.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Anmeldt i 2025", "13.168", "tyverier"],
            ["Pr. dag", "36", "tyverier"],
            ["Region Hovedstaden", "51", "%"],
            ["1. halvår 2026", "−8", "% mod 2025"]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. Første halvår 2026 (6.242) sammenlignet med første halvår 2025 (6.784).`
        }
      },
      {
        overskrift: "Hvad kategorien dækker",
        tekst: [
          `Kategorien er tyveri fra bil, båd mv. Den dækker alle biler og ikke kun varebiler, og den tæller tyverier af ting, der ligger i bilen. Tyveri af selve bilen står i en anden kategori, tyveri og brugstyveri af køretøj. Statistikken tæller anmeldelser og siger ikke noget om, hvad der blev stjålet, eller hvad det var værd.`,
          `Rigspolitiet har opgjort tyverier fra varebiler for sig. Tallene kommer ikke fra Danmarks Statistiks tabel, og de to opgørelser kan derfor ikke lægges sammen eller trækkes fra hinanden.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Opgørelse", "Ting stjålet fra bilen", "Selve bilen stjålet", "Kun varebiler"],
          raekker: [
            ["Danmarks Statistik: tyveri fra bil, båd mv.", "ja", "nej", "nej"],
            ["Danmarks Statistik: tyveri og brugstyveri af køretøj", "nej", "ja", "nej"],
            ["Rigspolitiet: tyverier fra varebiler", "ja", "ikke nævnt", "ja"]
          ],
          note: `Kilder: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, set den 7. oktober 2026, og Rigspolitiets tal, gengivet af <a href="${INST26}" rel="noopener">Installatør</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Udviklingen 2019-2025",
        tekst: [
          `Tallet faldt fra 19.160 i 2019 til 13.018 i 2021, steg til 16.296 i 2024 og faldt igen til 13.168 i 2025. Niveauet i 2025 er tæt på 2021 og 2023, og 2024 skiller sig ud som et år med mange anmeldelser. I 2025 blev der anmeldt omkring 6.000 færre tyverier fra bil end i 2019.`
        ],
        figur: {
          type: "soejler",
          enhed: "anmeldelser",
          data: [
            ["2019", 19160],
            ["2020", 16187],
            ["2021", 13018],
            ["2022", 14057],
            ["2023", 13373],
            ["2024", 16296],
            ["2025", 13168]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. Hele landet, summen af fire kvartaler.`
        }
      },
      {
        overskrift: "Kvartal for kvartal",
        tekst: [
          `Kvartalstallene viser, hvornår toppen i 2024 kom. Fjerde kvartal 2024 havde 4.512 anmeldelser, det højeste i perioden fra 2024 til i dag. Siden har hvert kvartal ligget mellem 3.000 og 3.600.`,
          `Første kvartal 2026 havde 3.032 anmeldelser og andet kvartal 3.210. Tallene for tredje kvartal 2026 er ikke offentliggjort endnu.`
        ],
        figur: {
          type: "soejler",
          enhed: "anmeldelser",
          data: [
            ["1. kvt. 2024", 4111],
            ["2. kvt. 2024", 4005],
            ["3. kvt. 2024", 3668],
            ["4. kvt. 2024", 4512],
            ["1. kvt. 2025", 3229],
            ["2. kvt. 2025", 3555],
            ["3. kvt. 2025", 3041],
            ["4. kvt. 2025", 3343],
            ["1. kvt. 2026", 3032],
            ["2. kvt. 2026", 3210]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., hele landet, set den 7. oktober 2026. Tabellen er senest opdateret den 16. juli 2026.`
        }
      },
      {
        overskrift: "Regionerne i 2025",
        tekst: [
          `Region Hovedstaden har flest anmeldelser, både i antal og pr. indbygger. Vi har regnet antallet om til anmeldelser pr. 10.000 indbyggere, så regioner af forskellig størrelse kan sammenlignes. Region Sjælland har færre anmeldelser end Region Syddanmark, men flere pr. indbygger.`
        ],
        tabel: {
          kolonner: ["Region", "Anmeldelser", "Pr. 10.000 indbyggere"],
          raekker: [
            ["Region Hovedstaden", "6.733", "34,8"],
            ["Region Midtjylland", "2.493", "18,1"],
            ["Region Syddanmark", "1.925", "15,5"],
            ["Region Sjælland", "1.377", "16,1"],
            ["Region Nordjylland", "510", "8,6"],
            ["Hele landet", "13.168", "21,9"]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. Indbyggertal: <a href="${FOLK}" rel="noopener">FOLK1A</a>, 3. kvartal 2025. Beregningen pr. 10.000 indbyggere er Gulplade.dk's. Regionerne summer ikke helt til landstallet.`
        },
        efter: [
          `Region Hovedstaden har fire gange så mange anmeldelser pr. indbygger som Region Nordjylland.`
        ],
        figur: {
          type: "soejler",
          enhed: "pr. 10.000 indbyggere",
          data: [
            ["Region Hovedstaden", 34.8],
            ["Region Midtjylland", 18.1],
            ["Region Sjælland", 16.1],
            ["Region Syddanmark", 15.5],
            ["Region Nordjylland", 8.6],
            ["Hele landet", 21.9]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. Gulplade.dk har selv regnet om til tyverier pr. 10.000 indbyggere med indbyggertallet fra <a href="${FOLK}" rel="noopener">FOLK1A</a>, 3. kvartal 2025.`
        }
      },
      {
        overskrift: "Regionerne på kortet",
        tekst: [
          `Kortet viser det samme tal pr. 10.000 indbyggere for hver region. Forskellen går fra 8,6 i Nordjylland til 34,8 i Hovedstaden, og de tre mellemste regioner ligger tæt på hinanden mellem 15,5 og 18,1.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Skematisk kort over de fem regioner med anmeldte tyverier fra bil pr. 10.000 indbyggere i 2025. Nordjylland 8,6, Midtjylland 18,1, Syddanmark 15,5, Sjælland 16,1 og Hovedstaden 34,8, der er fremhævet."><rect class="tg-kasse" x="60" y="14" width="112" height="70"/><text x="116" y="44" text-anchor="middle">Nordjylland</text><text class="tg-fremhaev" x="116" y="62" text-anchor="middle">8,6</text><rect class="tg-kasse" x="50" y="88" width="122" height="78"/><text x="111" y="122" text-anchor="middle">Midtjylland</text><text class="tg-fremhaev" x="111" y="140" text-anchor="middle">18,1</text><rect class="tg-kasse" x="50" y="170" width="112" height="62"/><text x="106" y="198" text-anchor="middle">Syddanmark</text><text class="tg-fremhaev" x="106" y="216" text-anchor="middle">15,5</text><rect class="tg-kasse" x="176" y="184" width="54" height="40"/><line class="tg-skinne-tynd" x1="162" y1="204" x2="176" y2="204"/><text class="tg-lille" x="203" y="208" text-anchor="middle">FYN</text><rect class="tg-kasse" x="244" y="150" width="86" height="82"/><text x="287" y="184" text-anchor="middle">Sjælland</text><text class="tg-fremhaev" x="287" y="202" text-anchor="middle">16,1</text><rect class="tg-modul" x="290" y="66" width="92" height="80"/><text class="tg-modul__tekst" x="336" y="100" text-anchor="middle">HOVEDSTADEN</text><text class="tg-fremhaev" x="336" y="120" text-anchor="middle">34,8</text><rect class="tg-modul" x="366" y="190" width="18" height="14"/><line class="tg-skinne-tynd" x1="375" y1="146" x2="375" y2="190"/><text class="tg-lille" x="200" y="256" text-anchor="middle">TYVERIER FRA BIL PR. 10.000 INDBYGGERE, 2025</text></svg>`,
          tekst: `Skematisk og ikke målfast. Fyn hører til Region Syddanmark og Bornholm til Region Hovedstaden. Tal fra <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a> og <a href="${FOLK}" rel="noopener">FOLK1A</a>, omregnet af Gulplade.dk, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Regionerne siden 2019",
        tekst: [
          `Alle fem regioner har færre anmeldelser i 2025 end i 2019. Region Hovedstaden faldt til 5.819 i 2021, steg til 8.730 i 2024 og landede på 6.733 i 2025. Region Midtjylland havde 2.493 anmeldelser i 2025, det laveste tal for regionen i perioden.`,
          `Region Sjælland toppede i 2022 med 2.179 og er faldet hvert år siden. Region Syddanmark har ligget på omkring 1.900 de to seneste år, mens Region Nordjylland faldt fra 687 til 510.`
        ],
        tabel: {
          kolonner: ["Region", "2019", "2021", "2023", "2024", "2025"],
          raekker: [
            ["Region Hovedstaden", "8.960", "5.819", "6.248", "8.730", "6.733"],
            ["Region Midtjylland", "4.480", "2.823", "2.901", "3.295", "2.493"],
            ["Region Syddanmark", "2.572", "2.099", "1.726", "1.939", "1.925"],
            ["Region Sjælland", "2.213", "1.692", "1.771", "1.517", "1.377"],
            ["Region Nordjylland", "849", "556", "638", "687", "510"]
          ],
          note: `Tyveri fra bil, båd mv., summen af fire kvartaler. Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, set den 7. oktober 2026. Region Sjælland havde 2.179 i 2022.`
        }
      },
      {
        overskrift: "Kommunerne med flest anmeldelser",
        tekst: [
          `København stod alene for 29 procent af landets anmeldelser i 2025. Uden for hovedstadsområdet er Aarhus, Odense, Vejle, Kolding og Aalborg med blandt de ti kommuner med flest anmeldelser.`,
          `Aalborg har 200 anmeldelser, men kun 8,9 pr. 10.000 indbyggere, fordi kommunen har mange indbyggere. Frederiksberg har færre anmeldelser end Aarhus, men flere pr. indbygger. Antallet og tallet pr. indbygger giver derfor to forskellige lister.`
        ],
        tabel: {
          kolonner: ["Kommune", "Anmeldelser 2025", "Pr. 10.000 indbyggere"],
          raekker: [
            ["København", "3.845", "57,6"],
            ["Aarhus", "1.251", "33,5"],
            ["Frederiksberg", "459", "43,5"],
            ["Odense", "371", "17,6"],
            ["Vejle", "245", "20,0"],
            ["Roskilde", "220", "23,9"],
            ["Gentofte", "214", "28,5"],
            ["Kolding", "201", "20,9"],
            ["Aalborg", "200", "8,9"],
            ["Gladsaxe", "165", "23,3"]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. Indbyggertal: FOLK1A, 3. kvartal 2025.`
        }
      },
      {
        overskrift: "Flest pr. indbygger",
        tekst: [
          `Regnet pr. indbygger ligger København og Frederiksberg øverst, og flere af Københavns omegnskommuner følger efter. Billund er den eneste kommune uden for de tre største byer og hovedstadsområdet blandt de ti med flest anmeldelser pr. indbygger.`,
          `I den anden ende ligger Mariagerfjord og Rebild med 5,5 anmeldelser pr. 10.000 indbyggere. Thisted har 6,6, Odsherred 6,8 og Skive 7,0. Vi har kun taget kommuner med mindst 20.000 indbyggere med, fordi få anmeldelser giver store udsving i små kommuner.`
        ],
        figur: {
          type: "soejler",
          enhed: "pr. 10.000 indbyggere",
          data: [
            ["København", 57.6, "3.845 anmeldelser"],
            ["Frederiksberg", 43.5, "459 anmeldelser"],
            ["Aarhus", 33.5, "1.251 anmeldelser"],
            ["Herlev", 32.7, "103 anmeldelser"],
            ["Billund", 31.9, "87 anmeldelser"],
            ["Tårnby", 31.5, "139 anmeldelser"],
            ["Ballerup", 30.6, "164 anmeldelser"],
            ["Brøndby", 28.8, "117 anmeldelser"],
            ["Gentofte", 28.5, "214 anmeldelser"],
            ["Hvidovre", 27.4, "148 anmeldelser"]
          ],
          note: `Kommuner med mindst 20.000 indbyggere, 2025. Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a> og <a href="${FOLK}" rel="noopener">FOLK1A</a>, 3. kvartal 2025, set den 7. oktober 2026. Gulplade.dk har selv regnet om til anmeldelser pr. 10.000 indbyggere.`
        }
      },
      {
        overskrift: "Første halvår 2026",
        tekst: [
          `Faldet i første halvår 2026 kommer fra de to regioner med flest anmeldelser. Nordjylland har den største stigning i procent, men fra et lavt niveau, så stigningen er 50 anmeldelser.`,
          `Blandt kommunerne faldt København fra 2.223 til 1.797 og Aarhus fra 623 til 472. Odense steg fra 152 til 410 og Aalborg fra 83 til 149.`
        ],
        tabel: {
          kolonner: ["Region", "1. halvår 2025", "1. halvår 2026", "Ændring"],
          raekker: [
            ["Region Hovedstaden", "3.724", "3.077", "−17,4 %"],
            ["Region Midtjylland", "1.160", "1.019", "−12,2 %"],
            ["Region Syddanmark", "948", "1.045", "+10,2 %"],
            ["Region Sjælland", "680", "794", "+16,8 %"],
            ["Region Nordjylland", "214", "264", "+23,4 %"],
            ["Hele landet", "6.784", "6.242", "−8,0 %"]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., set den 7. oktober 2026. 1. og 2. kvartal. De seneste kvartaler kan blive justeret, når senere anmeldelser kommer med.`
        },
        efter: [
          `Det er Region Hovedstaden og Region Midtjylland, der trækker landstallet ned. I de tre andre regioner steg tallet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Ændringen i anmeldte tyverier fra bil fra første halvår 2025 til første halvår 2026: fald i Hovedstaden og Midtjylland, stigning i Syddanmark, Sjælland og Nordjylland"><text class="tg-lille" x="246" y="16" text-anchor="end">FALD</text><text class="tg-lille" x="254" y="16">STIGNING</text><text x="0" y="42">Hovedstaden</text><rect class="tg-kasse" x="180.4" y="28" width="69.6" height="20"/><text x="176.4" y="42" text-anchor="end">−17,4 %</text><text x="0" y="72">Midtjylland</text><rect class="tg-kasse" x="201.2" y="58" width="48.8" height="20"/><text x="197.2" y="72" text-anchor="end">−12,2 %</text><text x="0" y="102">Syddanmark</text><rect class="tg-modul" x="250" y="88" width="40.8" height="20"/><text x="294.8" y="102">+10,2 %</text><text x="0" y="132">Sjælland</text><rect class="tg-modul" x="250" y="118" width="67.2" height="20"/><text x="321.2" y="132">+16,8 %</text><text x="0" y="162">Nordjylland</text><rect class="tg-modul" x="250" y="148" width="93.6" height="20"/><text x="347.6" y="162">+23,4 %</text><line class="tg-gulvlinje" x1="250" y1="22" x2="250" y2="176"/><text class="tg-fremhaev" x="0" y="200">Hele landet: −8,0 %</text></svg>`,
          tekst: `Tegningen viser ændringen i anmeldte tyverier fra bil, båd mv. fra første halvår 2025 til første halvår 2026. Tallene er fra Danmarks Statistik, STRAF11, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Varebiler for sig",
        tekst: [
          `Rigspolitiet har opgjort tyverier fra varebiler for sig. Ifølge fagbladet Installatør var der 3.618 i 2025. Det er 903 færre end året før og et fald på ca. 20 procent. Rigspolitiets tal og Danmarks Statistiks kategori er to forskellige opgørelser.`,
          `Erhvervsorganisationen TEKNIQ skrev samtidig, at hver fjerde af deres medlemsvirksomheder havde oplevet tyveri fra varebiler inden for det seneste år. TEKNIQ peger også på, at tyverierne især rammer virksomheder i hovedstadsområdet, mens Nordjylland er mindre udsat.`,
          `Topdanmark fik selv 554 anmeldelser om indbrud i varebiler i 2024. Ifølge F&amp;P løber tyvene med ca. 70.000 kr. pr. indbrud, skriver Topdanmark.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Tyverier fra varebiler i 2025", "3.618", "tyverier"],
            ["Færre end i 2024", 903, "tyverier"],
            ["Fald", "ca. 20", "%"],
            ["TEKNIQ-virksomheder med tyveri", "1 ud af 4", "det seneste år"]
          ],
          note: `Kilde: Rigspolitiets tal og TEKNIQs medlemsundersøgelse, gengivet af <a href="${INST26}" rel="noopener">fagbladet Installatør</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde om Topdanmark og F&amp;P: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Politikredsene 2021-2023",
        tekst: [
          `F&amp;P offentliggjorde i februar 2024 politiets tal for tyveri fra varebiler i hver politikreds. På landsplan steg tallet fra 3.549 i 2021 til 3.758 i 2022 og 3.873 i 2023. Stigningen fra 2022 til 2023 var størst på Københavns Vestegn med 53 procent og i København med 43 procent.`,
          `F&amp;P skrev, at tallet steg i halvdelen af politikredsene, og at Midt- og Vestjylland og Nordsjælland havde stigninger på over 20 procent. I flere kredse faldt tallet til gengæld kraftigt, fx Sydsjælland og Lolland-Falster, Sydøstjylland og Fyn.`
        ],
        figur: {
          type: "soejler",
          enhed: "anmeldelser",
          data: [
            ["Københavns Vestegn", 734, "+53 % fra 2022"],
            ["København", 591, "+43 % fra 2022"],
            ["Midt- og Vestsjælland", 547, "−7 % fra 2022"],
            ["Nordsjælland", 474, "+22 % fra 2022"],
            ["Sydsjælland og Lolland-Falster", 292, "−39 % fra 2022"],
            ["Sydøstjylland", 261, "−36 % fra 2022"],
            ["Østjylland", 256, "−7 % fra 2022"],
            ["Midt- og Vestjylland", 256, "+24 % fra 2022"],
            ["Syd- og Sønderjylland", 183, "+12 % fra 2022"],
            ["Fyn", 144, "−36 % fra 2022"],
            ["Nordjylland", 135, "+7 % fra 2022"],
            ["Bornholm", 0, "3 i 2022"]
          ],
          note: `Tyveri fra varebil mv. i 2023. Kilde: <a href="${FPXLSX}" rel="noopener">F&amp;P: Tyveri fra varebiler 2021 til 2023</a> med tal fra politiets statistik, bilag til <a href="${FP24}" rel="noopener">pressemeddelelsen den 13. februar 2024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tyveri af selve bilen",
        tekst: [
          `Tyveri og brugstyveri af køretøjer er en anden kategori. Her blev der anmeldt 5.476 i 2025 mod 5.865 i 2024. Tallet er faldet næsten hvert år siden 2019, hvor det var 7.138.`,
          `Fordelingen er mere jævn end for tyverier fra bilen. Region Hovedstaden havde 1.739 anmeldelser i 2025 og Region Midtjylland 1.518. Region Syddanmark havde 1.013, Region Sjælland 794 og Region Nordjylland 392.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 268" role="img" aria-label="Linjediagram 2019 til 2025. Tyverier fra bil, båd mv. faldt fra 19.160 til 13.018 i 2021, steg til 16.296 i 2024 og faldt til 13.168 i 2025. Tyveri og brugstyveri af køretøj faldt fra 7.138 i 2019 til 5.476 i 2025."><line class="tg-skinne-tynd" x1="50" y1="30" x2="384" y2="30"/><line class="tg-skinne-tynd" x1="50" y1="120" x2="384" y2="120"/><text class="tg-lille" x="46" y="33" text-anchor="end">20.000</text><text class="tg-lille" x="46" y="123" text-anchor="end">10.000</text><line class="tg-gulvlinje" x1="50" y1="210" x2="384" y2="210"/><polyline class="tg-gulvlinje" points="60,37.6 112,64.3 164,92.8 216,83.5 268,89.6 320,63.3 372,91.5"/><polyline class="tg-skinne" fill="none" points="60,145.8 112,152 164,160.4 216,156 268,156.1 320,157.2 372,160.7"/><text x="66" y="22">19.160</text><text x="384" y="110" text-anchor="end">13.168</text><text x="60" y="137" text-anchor="middle">7.138</text><text x="364" y="178" text-anchor="middle">5.476</text><text class="tg-lille" x="60" y="226" text-anchor="middle">2019</text><text class="tg-lille" x="112" y="226" text-anchor="middle">2020</text><text class="tg-lille" x="164" y="226" text-anchor="middle">2021</text><text class="tg-lille" x="216" y="226" text-anchor="middle">2022</text><text class="tg-lille" x="268" y="226" text-anchor="middle">2023</text><text class="tg-lille" x="320" y="226" text-anchor="middle">2024</text><text class="tg-lille" x="372" y="226" text-anchor="middle">2025</text><line class="tg-gulvlinje" x1="50" y1="244" x2="74" y2="244"/><text x="80" y="248">Tyveri fra bil, båd mv.</text><line class="tg-skinne" x1="50" y1="260" x2="74" y2="260"/><text x="80" y="264">Tyveri og brugstyveri af køretøj</text></svg>`,
          tekst: `Skematisk linjediagram over hele landet. Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, summen af fire kvartaler, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad tallene dækker",
        tekst: [
          `Tallene er anmeldelser, ikke tyverier. Et tyveri, der aldrig bliver anmeldt, tæller ikke med, og en anmeldelse kan handle om et tyveri, der skete i et tidligere kvartal. Derfor kan de seneste kvartaler blive justeret, når senere anmeldelser kommer med.`
        ],
        punkter: [
          `<strong>Kilde.</strong> Tallene kommer fra Rigspolitiets centrale anmeldelsesregister og indberettes hvert kvartal.`,
          `<strong>Anmeldte.</strong> Kun forbrydelser, der er anmeldt til politiet eller konstateret af politiet, er med. Skjult kriminalitet tæller ikke med.`,
          `<strong>Kvartalstal.</strong> Danmarks Statistik oplyser, at kvartalsstatistikken viser ca. 8 procent færre end årsstatistikken.`,
          `<strong>Forskydning.</strong> En del af anmeldelserne i et kvartal kan handle om tyverier i et tidligere kvartal.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Tyveriet", "Ting bliver stjålet fra en bil, eller bilen bliver stjålet."],
            ["Anmeldelsen", "Tyveriet anmeldes til politiet eller konstateres af politiet."],
            ["Registret", "Anmeldelsen kommer i Rigspolitiets centrale anmeldelsesregister."],
            ["Statistikken", "Danmarks Statistik offentliggør tallene hvert kvartal i STRAF11."]
          ]
        },
        efter: [
          `Kilde: <a href="${DSTDOK}" rel="noopener">Danmarks Statistik: Statistikdokumentation, anmeldte forbrydelser (kvt.)</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Sikring efter risiko",
        tekst: [
          `Hvor og hvordan bilen holder, påvirker risikoen. Topdanmark foreslår at parkere et oplyst sted, op ad en husmur eller et hegn, så det er svært at komme til varerummet, og at bruge en garage, når det er muligt. F&amp;P råder til at undgå øde, mørke steder uden trafik og til at sørge for, at man ikke kan kigge ind i varerummet.`,
          `Du kan læse om låse, alarm og opbevaring i <a href="/til-varebilen/varerumssikring/ekstra-laas-til-varebil/">ekstra lås til varebil</a>, <a href="/til-varebilen/varerumssikring/alarm-og-gps-tracker/">alarm og GPS-tracker</a> og <a href="/til-varebilen/varerumssikring/sikker-opbevaring/">sikker opbevaring</a>. Forsikringens krav står i <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`,
          `Kilder: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a> og <a href="${FP24}" rel="noopener">F&amp;P, 13. februar 2024</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så kan sikringen passe til, hvor og hvordan bilen bruges.",
    spoergsmaal: [
      "Hvor bilen holder om natten, på firmaadressen eller hjemme.",
      "Om pladsen er oplyst, og om bilen kan holde op ad en mur eller i en garage.",
      "Hvor mange timer bilen holder ved kunder og byggepladser i løbet af dagen.",
      "Værdien af værktøj og maskiner, der ligger i bilen.",
      "Forsikringsselskabets krav til aflåsning og alarm."
    ],
    faq: [
      ["Hvor mange tyverier fra biler blev der anmeldt i 2025?", "Der blev anmeldt 13.168 tyverier fra bil, båd mv., ifølge Danmarks Statistik. Det er omkring 36 om dagen."],
      ["Hvilken region har flest tyverier fra biler?", "Region Hovedstaden med 6.733 anmeldelser i 2025, eller 34,8 pr. 10.000 indbyggere. Region Nordjylland havde færrest med 510."],
      ["Hvilken kommune har flest tyverier fra biler?", "København med 3.845 anmeldelser i 2025, efterfulgt af Aarhus med 1.251 og Frederiksberg med 459."],
      ["Falder tyverierne fra biler?", "På landsplan faldt de med 8 procent i første halvår 2026 sammenlignet med samme periode i 2025. Region Hovedstaden faldt 17 procent, mens Sjælland, Syddanmark og Nordjylland steg."],
      ["Hvor mange tyverier sker der fra varebiler?", "Ifølge Rigspolitiets tal, som Installatør har gengivet, var der 3.618 i 2025. Det er ca. 20 procent færre end i 2024."],
      ["Hvilken politikreds havde flest tyverier fra varebiler?", "Københavns Vestegn med 734 i 2023, efterfulgt af København med 591. Tallene er politiets, offentliggjort af F&amp;P i februar 2024."],
      ["Hvor mange biler bliver stjålet?", "Der blev anmeldt 5.476 tyverier og brugstyverier af køretøjer i 2025 mod 5.865 i 2024, ifølge Danmarks Statistik."],
      ["Hvornår kommer de næste tal?", "Danmarks Statistik offentliggør anmeldte forbrydelser hvert kvartal. Tabellen er senest opdateret den 16. juli 2026 med tal til og med andet kvartal 2026."]
    ],
    kilder: [
      { navn: "Danmarks Statistik: STRAF11, anmeldte forbrydelser efter område og type af forbrydelse (kvartal)", url: DST, dato: "2026-10-07" },
      { navn: "Danmarks Statistik: FOLK1A, befolkningen den 1. i kvartalet", url: FOLK, dato: "2026-10-07" },
      { navn: "Danmarks Statistik: Statistikdokumentation, anmeldte forbrydelser (kvt.)", url: DSTDOK, dato: "2026-10-04" },
      { navn: "Installatør: Nye tal, tyverier fra varebiler falder markant (Rigspolitiets tal)", url: INST26, dato: "2026-10-07" },
      { navn: "F&P: Voldsom stigning i tyveri fra håndværkerbiler i københavnsområdet (13.02.2024)", url: FP24, dato: "2026-10-07" },
      { navn: "F&P: Tyveri fra varebiler 2021 til 2023 (regneark med politiets tal)", url: FPXLSX, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Danmarks Statistik, STRAF11, tyveri fra bil, båd mv., hele landet: 1. kvt. 2024 4.111, 2. kvt. 2024 4.005, 3. kvt. 2024 3.668, 4. kvt. 2024 4.512, 1. kvt. 2025 3.229, 2. kvt. 2025 3.555, 3. kvt. 2025 3.041, 4. kvt. 2025 3.343, 1. kvt. 2026 3.032, 2. kvt. 2026 3.210; tabellen er opdateret den 16. juli 2026.", DST],
    ["Danmarks Statistik, STRAF11, tyveri fra bil, båd mv., summen af fire kvartaler pr. region: Hovedstaden 8.960 (2019), 5.819 (2021), 6.248 (2023), 8.730 (2024); Midtjylland 4.480, 2.823, 2.901, 3.295; Syddanmark 2.572, 2.099, 1.726, 1.939; Sjælland 2.213, 1.692, 1.771, 1.517 og 2.179 i 2022; Nordjylland 849, 556, 638, 687. Midtjyllands 2.493 i 2025 er regionens laveste i 2019-2025.", DST],
    ["Danmarks Statistik og FOLK1A 3. kvt. 2025, Gulplade.dk's omregning, kommuner med mindst 20.000 indbyggere, 2025: Herlev 103 anmeldelser (32,7 pr. 10.000), Billund 87 (31,9), Tårnby 139 (31,5), Ballerup 164 (30,6), Brøndby 117 (28,8), Hvidovre 148 (27,4); laveste Mariagerfjord 23 (5,5), Rebild 17 (5,5), Thisted 28 (6,6), Odsherred 22 (6,8), Skive 31 (7,0).", DST],
    ["Danmarks Statistik, STRAF11, 1. halvår 2025 mod 1. halvår 2026: København 2.223 til 1.797, Aarhus 623 til 472, Odense 152 til 410, Aalborg 83 til 149.", DST],
    ["Danmarks Statistik, STRAF11, tyveri og brugstyveri af køretøj: 7.138 i 2019, 6.441 i 2020, 5.509 i 2021, 5.999 i 2022, 5.987 i 2023; i 2025 Region Hovedstaden 1.739, Midtjylland 1.518, Syddanmark 1.013, Sjælland 794 og Nordjylland 392.", DST],
    ["TEKNIQ (Installatør 2026): hver fjerde virksomhed i en medlemsundersøgelse har oplevet tyveri fra varebiler inden for det seneste år; tyverierne rammer især virksomheder i hovedstadsområdet, mens Nordjylland er mindre udsat.", INST26],
    ["Topdanmark modtog 554 anmeldelser om indbrud i varebiler i 2024 og skriver, at tyvene ifølge F&P løber med ca. 70.000 kr. pr. indbrud.", TDFOREBYG],
    ["F&P-regneark med politiets tal for tyveri fra varebil mv.: Danmark i alt 3.549 (2021), 3.758 (2022), 3.873 (2023); 2023 pr. politikreds: Københavns Vestegn 734 (+53 %), København 591 (+43 %), Midt- og Vestsjælland 547 (−7 %), Nordsjælland 474 (+22 %), Sydsjælland og Lolland-Falster 292 (−39 %), Sydøstjylland 261 (−36 %), Østjylland 256 (−7 %), Midt- og Vestjylland 256 (+24 %), Syd- og Sønderjylland 183 (+12 %), Fyn 144 (−36 %), Nordjylland 135 (+7 %), Bornholm 0 (3 i 2022).", FPXLSX],
    ["F&P 13.02.2024: antallet af tyverier fra varebiler steg i halvdelen af alle politikredse, og Midt- og Vestjylland samt Nordsjælland havde stigninger på over 20 procent.", FP24],
    ["Topdanmark foreslår at parkere et oplyst sted, op ad en husmur eller et hegn, så adgangen til varerummet vanskeliggøres, og at bruge garage, når det er muligt.", TDFOREBYG],
    ["F&P råder til at undgå at parkere varevognen på øde, mørke steder uden trafik og sørge for, at man ikke kan kigge ind i varerummet udefra.", FP24]
  ]
};
