// Emnesiden /til-varebilen/forsikring/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;

module.exports = {
  id: "forsikring",
  side: {
    slug: "forsikring",
    navn: "Forsikring",
    titel: "Forsikring af varebil på gule plader",
    kort: `Ansvar, kasko og dækning af værktøjet i bilen. Ingen af de {{tilbud}} tilbud på siden inkluderer forsikring.`,
    beskrivelse: `Forsikring af varebil på gule plader: ansvar, kasko, værktøj i bilen og prisen. Ingen af de {{tilbud}} leasingtilbud på siden inkluderer forsikring.`,
    manchet: `En erhvervsforsikring på en varebil består typisk af tre dele: den lovpligtige ansvarsforsikring, kasko på bilen og dækning af værktøj og materialer i varerummet. Den er ikke med i nogen af de {{tilbud}} leasingtilbud på siden, fordi den prissættes på virksomheden og ikke på bilen.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Ansvarsforsikring", "Lovpligtig", "efter færdselslovens § 105"],
        ["Personskade, 2026", "152 mio. kr.", "pr. begivenhed"],
        ["Med i leasingydelsen", "Nej", "i ingen af de {{tilbud}} tilbud på siden"],
        ["Dagsgebyr uden ansvar", "250 kr.", "pr. påbegyndt døgn"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Tre dele",
        tekst: [
          `Når en virksomhed forsikrer en varebil, køber den som regel tre forsikringer, der dækker hver sin del af risikoen. Kun den første er et krav i loven. De to andre vælger virksomheden selv, men på en leaset bil kræver leasingselskabet kaskoen.`,
          `Skellet mellem de tre dele betyder noget, fordi en skade kun bliver dækket af den forsikring, den hører under. En bule i bilen, en påkørt cyklist og en stjålen boremaskine er tre forskellige sager, selvom de sker med den samme bil.`
        ],
        punkter: [
          `<strong>Ansvarsforsikring.</strong> Den er lovpligtig og dækker skade på andres person og ting. Bilen skal have den for at være indregistreret.`,
          `<strong>Kasko.</strong> Den dækker skade på bilen selv. Den er ikke lovpligtig, men leasingselskaberne kræver den i aftalen, fordi bilen er deres. Nogle stiller også krav til selvrisiko eller forsikringsselskab.`,
          `<strong>Værktøj og materialer.</strong> Kaskoen dækker bilen, ikke indholdet. Værktøj i bilen dækkes typisk af en transportforsikring som tilvalg til løsøreforsikringen, med krav til aflåsning og parkering.`
        ]
      },
      {
        overskrift: "Hvad de tre forsikringer dækker på bilen",
        tekst: [
          `Ansvar dækker det, varebilen gør ved andre. Kasko dækker selve bilen med den faste indretning. Værktøj og varer i varerummet ligger uden for begge og kræver en transportforsikring.`,
          `Grænsen mellem kasko og transportforsikring går ved fastmonteringen. GF kalder udstyr fastmonteret, når det er fastgjort med bolt, skrue, svejsning eller lignende og ikke kan fjernes uden værktøj. En reol, der er boltet fast i varerummet, hører derfor til bilen. En løs værktøjskasse på gulvet hører til indholdet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Varebil set fra siden. Ansvar dækker modpartens bil, kasko dækker varebilen og den faste indretning, transportforsikring dækker værktøj i varerummet."><g transform="translate(20,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kasse" x="150" y="112" width="30" height="86"/><line class="tg-skinne-tynd" x1="150" y1="140" x2="180" y2="140"/><line class="tg-skinne-tynd" x1="150" y1="168" x2="180" y2="168"/><rect class="tg-kuffert" x="100" y="172" width="46" height="26"/><path class="tg-profil" d="M288,203 L288,178 L304,176 L318,158 L362,158 L378,176 L392,180 L392,203 Z"/><circle class="tg-profil" cx="310" cy="206" r="11"/><circle class="tg-profil" cx="370" cy="206" r="11"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="340" y1="160" x2="340" y2="62"/><circle cx="340" cy="160" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Ansvar</text><text class="tg-call__under" x="395" y="54" text-anchor="end">andres bil, person og ting</text></g><g class="tg-call"><line x1="60" y1="110" x2="60" y2="62"/><circle cx="60" cy="110" r="3"/><text class="tg-call__navn" x="40" y="40">Kasko</text><text class="tg-call__under" x="40" y="54">bilen og fast indretning</text></g><g class="tg-call"><line x1="123" y1="185" x2="123" y2="228"/><circle cx="123" cy="185" r="3"/><text class="tg-call__navn" x="130" y="240">Transportforsikring</text><text class="tg-call__under" x="130" y="254">værktøj og varer i bilen</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${GF}" rel="noopener">GF, erhvervsbilbetingelser nr. 130-1</a> og <a href="https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring" rel="noopener">If: Varebilforsikring</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dækningsoversigt",
        tekst: [
          `Her kan du se, hvad der typisk er med i ansvar og kasko, og hvad du køber som tilvalg. Den præcise dækning står i policen.`,
          `Oversigten viser, at ansvaret kun dækker skader på andre. Alt, der rammer virksomhedens egen bil, ligger i kaskoen eller i et tilvalg. Føreren er et særligt tilfælde, for ansvaret dækker hverken førerens egne skader eller førerens ting. Det kræver en førerpladsdækning, som du kan læse om i <a href="/til-varebilen/forsikring/foererulykke-og-foererplads/">førerplads og førerulykke</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Skade", "Ansvar", "Kasko", "Tilvalg"],
          raekker: [
            ["Skade på andre personer og deres ting", "ja", "nej", "–"],
            ["Skade på egen bil ved uheld", "nej", "ja", "–"],
            ["Tyveri, brand og hærværk", "nej", "ja", "–"],
            ["Fastmonteret indretning", "nej", "ja", "Højere sum"],
            ["Glas uden selvrisiko", "nej", "Reparation", "Glas"],
            ["Værktøj og varer i bilen", "nej", "nej", "Transport"],
            ["Personskade på føreren", "nej", "nej", "Førerplads"],
            ["Vejhjælp i Danmark", "nej", "GF: ja", "Vejhjælp"],
            ["Redning i udlandet, op til 3,5 t", "nej", "ja", "–"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a>, <a href="https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/" rel="noopener">GF: Erhvervsbilforsikring</a>, <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303</a>, <a href="https://www.gjensidige.dk/erhverv/autoforsikring" rel="noopener">Gjensidige</a> og <a href="https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/" rel="noopener">Codan</a>, set den 4. oktober 2026. Glasreparation uden selvrisiko gælder bl.a. forruden hos GF og stenslag hos Gjensidige. Redning i udlandet følger kaskoen hos GF og Gjensidige og hedder Tryg Vejhjælp Europa hos Tryg.`
        }
      },
      {
        overskrift: "Lovens dækningssummer i 2026",
        tekst: [
          `Færdselslovens grundbeløb på 50 mio. kr. for personskade og 10 mio. kr. for tingskade reguleres hvert år. Færdselsstyrelsen har fastsat beløbene for skader, der sker i 2026. Læs mere i <a href="/til-varebilen/forsikring/ansvarsforsikring-varebil/">ansvarsforsikring til varebil</a>.`,
          `Summerne er det mindste, ansvarsforsikringen skal dække for den skade, der sker ved én begivenhed. Loven siger, at beløbene reguleres hver 1. januar og afrundes til nærmeste million. For 2026 står de i bekendtgørelse nr. 1287 af 11. november 2025, og beløbene for 2027 kommer i en ny bekendtgørelse.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Personskade pr. begivenhed", "152", "mio. kr."],
            ["Tingskade pr. begivenhed", "30", "mio. kr."],
            ["Dagsgebyr uden ansvar", "250", "kr. pr. dag"]
          ],
          note: `Kilder: <a href="https://www.retsinformation.dk/eli/lta/2025/1287" rel="noopener">BEK nr. 1287 af 11/11/2025</a> og <a href="https://www.retsinformation.dk/eli/lta/2023/1627" rel="noopener">BEK nr. 1627 af 12/12/2023, § 13</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Uforsikrede biler og dagsgebyret",
        tekst: [
          `Står en indregistreret bil uden ansvarsforsikring, pålægger DFIM et dagsgebyr på 250 kr. for hvert påbegyndt døgn. DFIM er Dansk Forening for International Motorkøretøjsforsikring, som alle selskaber med motoransvar er medlem af. Gebyret følger den person eller virksomhed, der er registreret som primær bruger, og ikke bilen. Det stopper først, når bilen er forsikret, eller nummerpladerne er afleveret til Motorstyrelsen.`,
          `Ordningen begyndte den 1. januar 2019. Da var der ifølge DFIM omkring 50.000 uforsikrede køretøjer i Danmark. Den 1. juni 2026 var tallet 10.354, og 894 af dem var varebiler. Reglerne for skift af selskab og salg af en bil har faste frister, som står på siden om <a href="/til-varebilen/forsikring/ansvarsforsikring-varebil/">ansvarsforsikring til varebil</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "stk.",
          data: [
            ["Personbil", 4090],
            ["Lille knallert", 3181],
            ["Stor knallert", 1043],
            ["Varebil", 894],
            ["Traktor", 555],
            ["Motorcykel", 523]
          ],
          note: `Køretøjer uden lovpligtig ansvarsforsikring den 1. juni 2026, de seks største grupper. I alt var der 10.354. Kilde: <a href="https://dfim.dk/om-dfim/statistik/" rel="noopener">DFIM: Statistik</a> med tal fra Motorstyrelsen, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kasko og leasingselskabets krav",
        tekst: [
          `Leasingselskabet ejer bilen, og derfor kræver det kasko i aftalen. Selskabet får typisk noteret en deklaration hos forsikringsselskabet, så det får besked, hvis forsikringen ophører. Hos Tryg kan en panthaverdeklaration kun noteres på en fuld kaskoforsikring og ikke på en delkasko eller en stilstandsforsikring.`,
          `Bliver en leaset bil totalskadet eller stjålet, går erstatningen til leasingselskabet. GF og Tryg fastsætter kontanterstatningen til det, en tilsvarende bil af samme alder og stand koster. Det er ikke altid det samme beløb, som virksomheden skylder på aftalen.`,
          `Flere selskaber sælger derfor tilvalg, der dækker førstegangsydelsen eller forskellen op til restgælden. Ayvens har en GAP-dækning i kaskoen på sine egne biler, der sikrer, at erstatningen ved totalskade mindst svarer til restgælden i leasingaftalen. Tilvalgene og afleveringen står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`
        ]
      },
      {
        overskrift: "Det afgør prisen",
        tekst: [
          `Selskaberne prissætter en erhvervsbilforsikring individuelt. If nævner bilens mærke, model, alder og værdi, antallet af kilometer om året, brugen i virksomheden, adressen og selvrisikoen. Gjensidige bruger skadestatistikken for det område, virksomheden hører til, fordi trafikuheld, indbrud og tyverier fordeler sig forskelligt over landet.`,
          `Tryg spørger desuden, om bilen er ombygget, fx til foodtruck eller kølebil. GF beregner pristrinnet ud fra, hvor mange år den sikrede har haft bil med forsikring i eget navn, og ud fra tidligere skader.`
        ],
        punkter: [
          `<strong>Bilens værdi og alder.</strong> Kaskopræmien følger det, selskabet skal erstatte.`,
          `<strong>Kilometer om året.</strong> Det er det samme tal som i leasingaftalen.`,
          `<strong>Førerne.</strong> Selskabet ser på alder og skadehistorik for dem, der kører bilen.`,
          `<strong>Branche.</strong> Prisen afhænger af, hvad bilen bruges til, og hvad der ligger i den.`,
          `<strong>Selvrisiko.</strong> Den er den største enkeltfaktor på præmien.`,
          `<strong>Parkering.</strong> Det tæller, om bilen holder i en aflåst gård, på en indhegnet plads eller på gaden.`
        ]
      },
      {
        overskrift: "Selvrisiko og pristrin",
        tekst: [
          `Selvrisikoen er den del af skaden, virksomheden selv betaler. Hos GF betales kun én selvrisiko, når samme begivenhed giver både en ansvars- og en kaskoskade. Er skaden mindre end selvrisikoen, opkræver GF kun skadeudgiften. Gjensidige skriver, at en højere selvrisiko giver en lavere pris, fordi virksomheden selv bærer en større del af risikoen.`,
          `Prisen flytter sig også med skadeforløbet. Hos GF rykker forsikringen et pristrin frem for hvert skadefrit år, indtil trin 9 (Superelite) er nået. Efter en skade bliver forsikringen stående et år ekstra på samme trin. Købstædernes Forsikring sænker prisen efter ét skadefrit år og kalder kunden elitebilist efter fem skadefri år.`,
          `Beløbene står i <a href="/til-varebilen/forsikring/selvrisiko/">selvrisiko</a>, og pristrin for flere biler står i <a href="/til-varebilen/forsikring/flaadeforsikring/">flådeforsikring</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Trappe med ni pristrin. For hvert skadefrit år rykker forsikringen et trin frem, indtil trin 9 er nået. Efter en skade bliver den stående et år ekstra på samme trin."><rect class="tg-kasse" x="20" y="170" width="40" height="20"/><rect class="tg-kasse" x="60" y="155" width="40" height="35"/><rect class="tg-kasse" x="100" y="140" width="40" height="50"/><rect class="tg-kuffert" x="140" y="125" width="40" height="65"/><rect class="tg-kasse" x="180" y="110" width="40" height="80"/><rect class="tg-kasse" x="220" y="95" width="40" height="95"/><rect class="tg-kasse" x="260" y="80" width="40" height="110"/><rect class="tg-kasse" x="300" y="65" width="40" height="125"/><rect class="tg-modul" x="340" y="50" width="40" height="140"/><text class="tg-modul__tekst" x="360" y="70" text-anchor="middle">9</text><line class="tg-gulvlinje" x1="5" y1="190" x2="395" y2="190"/><text class="tg-fremhaev" x="385" y="36" text-anchor="end">Trin 9 (Superelite)</text><g class="tg-call"><line x1="160" y1="125" x2="110" y2="62"/><circle cx="160" cy="125" r="3"/><text class="tg-call__navn" x="20" y="36">Skade</text><text class="tg-call__under" x="20" y="50">et år ekstra på samme trin</text></g><text class="tg-lille" x="5" y="212">ET SKADEFRIT ÅR GIVER ET TRIN FREM</text></svg>`,
          tekst: `Skematisk. Pristrinnene i GF's erhvervsbilforsikring. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikring og leasingtilbuddene",
        tekst: [
          `{{forsikring_ikke}} af de {{tilbud}} tilbud på siden skriver, at forsikring ikke er med. De øvrige {{forsikring_tavs}} nævner den ikke. Præmien beregnes på virksomhedens CVR-nummer og skadehistorik og indhentes derfor direkte hos forsikringsselskabet.`,
          `Når du sammenligner tilbuddene, kommer forsikringen oven i leasingydelsen som en selvstændig udgift. Leasingselskabets krav til forsikringen står i leasingaftalen og ikke i tilbuddet. Andre udgifter, som tilbuddene heller ikke viser, står i <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a>.`,
          `Sikring af varerummet kan give rabat hos flere selskaber. Det står i <a href="/til-varebilen/varerumssikring/">varerumssikring</a>.`
        ]
      },
      {
        overskrift: "Moms ved skader",
        tekst: [
          `For momsregistrerede virksomheder opgør GF Forsikring kaskoskader ekskl. moms. Virksomheden betaler selv momsen til værkstedet og trækker den fra. Ved kontanterstatning trækkes momsen fra erstatningen.`,
          `Ved ansvarsskader lægger GF momsen ud over for værkstedet. Bagefter opkræver GF momsen hos ejeren efter den procent, ejeren har momsfradrag for.`,
          `Tryg erstatter skadeudgiften med moms og lægger momsen ud over for værkstedet. Bagefter sender Tryg regningen for momsen til virksomheden, i det omfang den kan trække momsen fra. Er bilen leaset, trækker leasingselskabet momsen fra i sit eget momsregnskab. Reglerne for moms på varebiler står i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To bjælker. Ved en kaskoskade betaler GF reparationen, mens virksomheden betaler momsen og trækker den fra. Ved kontanterstatning trækkes momsen fra erstatningen."><text class="tg-fremhaev" x="0" y="16">Værkstedets regning for en kaskoskade</text><rect class="tg-kasse" x="0" y="24" width="280" height="30"/><text x="10" y="43">GF betaler reparationen</text><rect class="tg-modul" x="280" y="24" width="100" height="30"/><text class="tg-modul__tekst" x="292" y="43">MOMS</text><text x="380" y="72" text-anchor="end">virksomheden betaler og trækker fra</text><text class="tg-fremhaev" x="0" y="108">Kontanterstatning</text><rect class="tg-kasse" x="0" y="116" width="280" height="30"/><text x="10" y="135">erstatningen udbetales</text><rect class="tg-skinne-tynd" fill="none" x="280" y="116" width="100" height="30"/><text x="292" y="135">moms</text><text x="380" y="164" text-anchor="end">trækkes fra erstatningen</text><text class="tg-lille" x="0" y="192">GF, MOMSREGISTREREDE VIRKSOMHEDER</text></svg>`,
          tekst: `Skematisk. GF's regler for biler, der tilhører momsregistrerede virksomheder. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.9</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fra uheld til erstatning",
        tekst: [
          `Trinene følger færdselsloven og forsikringsaftaleloven. I <a href="/til-varebilen/forsikring/skadeanmeldelse/">skadeanmeldelse på varebil</a> kan du se frister, bilag og hvordan hvert selskab modtager skader.`,
          `Færdselslovens § 9 gælder alle, der bliver indblandet i et færdselsuheld, også uden egen skyld. Føreren skal standse, hjælpe tilskadekomne og opgive navn og bopæl, hvis den anden part beder om det. Har føreren skadet en ting, og er der ingen til stede, skal ejeren eller politiet have besked hurtigst muligt.`,
          `En sen anmeldelse kan koste erstatning. Efter forsikringsaftalelovens § 21 hæfter selskabet så kun for det, det ville have betalt, hvis anmeldelsen var kommet til tiden. Når selskabet har de oplysninger, det skal bruge, kan erstatningen kræves betalt efter 14 dage, og derefter løber der rente efter § 24.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Standse og hjælpe", "Pligt efter færdselslovens § 9, også uden egen skyld."],
            ["Notere modparten", "Reg.nr., navn, adresse, forsikringsselskab og vidner. Fotos af begge biler."],
            ["Anmelde uden ophold", "Til selskabet efter forsikringsaftalelovens § 21. Tyveri og hærværk også til politiet."],
            ["Taksering", "Ingen reparation før aftale med selskabet eller taksator."],
            ["Udbetaling", "Kan kræves 14 dage efter, at selskabet har de nødvendige oplysninger, § 24."]
          ]
        }
      },
      {
        overskrift: "Flere biler på én aftale",
        tekst: [
          `Har virksomheden mange biler, kan de samles på én forsikring. Tryg skriver på sin side om varebilforsikring, at virksomheder med 20 varebiler eller flere i de fleste tilfælde kan få én fælles forsikring til alle varebilerne. Trygs flådeforsikring kan samle personbiler, varebiler, lastbiler og anhængere og kan betales månedligt.`,
          `Leasingselskaberne sælger også forsikring til de biler, de leaser ud. Ayvens oplyser, at forsikring typisk udgør 10-15 procent af de samlede omkostninger til en flåde. Forskellene mellem løsningerne står i <a href="/til-varebilen/forsikring/flaadeforsikring/">flådeforsikring</a>.`
        ]
      },
      {
        overskrift: "Kørsel i udlandet",
        tekst: [
          `En dansk ansvarsforsikring skal dække i hele EU og EØS for én præmie. Ifølge bekendtgørelse nr. 1627 dækker den efter reglerne i det land, hvor bilen kører, eller efter de danske regler, hvis de giver mere. Ansvaret hos GF og Tryg gælder også i de lande, der er med i grønt kort-ordningen.`,
          `Kaskoen har sit eget område. Hos GF dækker kaskoen i de lande, hvor SOS-redningsforsikringen gælder, og den omfatter redningsforsikring, når bilen vejer højst 3,5 tons. Har bilen en totalvægt over 3,5 tons, dækker GF kun kørsel i udlandet efter aftale. Mere i <a href="/til-varebilen/forsikring/forsikring-i-udlandet/">forsikring i udlandet</a>.`
        ]
      },
      {
        overskrift: "Selskaberne og deres produkter",
        tekst: [
          `Flere danske selskaber sælger erhvervsbilforsikring til varebiler under forskellige navne. Du finder oversigten i <a href="/til-varebilen/forsikring/erhvervsbilforsikring-selskaber/">selskaber med erhvervsbilforsikring</a>.`,
          `Pakkernes navne siger ikke meget om indholdet. Tryg kalder sine pakker Basis, Udvidet og Super, og If har Ansvar, Kasko og Super. Det er betingelserne, der viser forskellen.`
        ],
        kort: [
          ["Alm. Brand", "Ansvar, Kasko og Superkasko til varevogne og personbiler."],
          ["Codan", "Firmabilforsikring med ansvar og tilvalg som Kasko og Førerplads."],
          ["GF Forsikring", "Erhvervsbilforsikring til medlemmer af en forsikringsklub."],
          ["Gjensidige", "Bilforsikring til virksomhedens biler: Ansvar, Kasko og tilvalg."],
          ["If", "Varebilforsikring: Ansvar, Kasko og Super."],
          ["Købstædernes Forsikring", "Motorforsikring med ansvar, kasko og tilvalg."],
          ["Tryg", "Varebilforsikring: Basis, Udvidet og Super."]
        ]
      },
      {
        overskrift: "Klage over en erhvervsforsikring",
        tekst: [
          `Ankenævnet for Forsikring behandler klager over private forsikringer. Klager over virksomheders forsikringer ligger uden for nævnets område.`,
          `GF skriver i sine erhvervsbilbetingelser, at nævnet kun tager erhvervssager, hvis sagen ikke adskiller sig væsentligt fra private forsikringsforhold. Du klager først til selskabets klageansvarlige, som hos GF er kvalitetsafdelingen. Er I uenige om bilens værdi, kan den afgøres ved syn og skøn, hvis begge parter vil det.`,
          `Tryg har samme regel i sine varebilbetingelser og kalder sin klageansvarlige afdeling Kvalitet. Ankenævnet tager et klagegebyr på 300 kr., som du får tilbage, hvis du får medhold. Nævnet oplyser en typisk sagsbehandlingstid på 6-8 måneder.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Først", "Du klager til den afdeling, der har behandlet sagen."],
            ["Hvis I stadig er uenige", "Du klager til selskabets klageansvarlige, hos GF kvalitetsafdelingen og hos Tryg afdelingen Kvalitet."],
            ["Derefter", "Ankenævnet for Forsikring tager kun en erhvervssag, hvis den ikke adskiller sig væsentligt fra en privat sag."],
            ["Uenighed om bilens værdi", "Værdien kan afgøres ved syn og skøn, hvis både virksomheden og selskabet vil det."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.16</a>, <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 13</a> og <a href="https://www.ankeforsikring.dk/om-ankeforsikring/Sider/Om-at-klage.aspx" rel="noopener">Ankenævnet for Forsikring: Om at klage</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="https://www.ankeforsikring.dk/om-ankeforsikring/Sider/Om-at-klage.aspx" rel="noopener">Ankenævnet for Forsikring: Om at klage</a> og <a href="${GF}" rel="noopener">GF, punkt 13.16</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan tilbuddene sammenlignes på samme grundlag.",
    spoergsmaal: [
      "Bilens model, værdi og årlige kilometertal.",
      "Leasingselskabets krav til kasko og selvrisiko.",
      "Hvem der kører bilen.",
      "Branche og værdien af værktøj og materialer i bilen.",
      "Hvor bilen holder om natten.",
      "Om bilen skal være dækket hos opbyggeren under indretning.",
      "Om bilen er ombygget eller specialopbygget, fx med kran eller køl.",
      "Om bilen kører i udlandet, og om den vejer over 3,5 tons."
    ],
    faq: [
      ["Er forsikring med i leasingydelsen?", "Ikke i nogen af de {{tilbud}} tilbud på siden. {{forsikring_ikke}} skriver, at den ikke er med, og {{forsikring_tavs}} nævner den ikke."],
      ["Skal en leaset varebil have kasko?", "Loven kræver det ikke, men leasingselskaberne kræver det i aftalen, fordi bilen er deres."],
      ["Er værktøj dækket af bilforsikringen?", "Normalt ikke. Kaskoen dækker bilen. Værktøj dækkes typisk af en transportforsikring som tilvalg til løsøreforsikringen."],
      ["Hvor høj er dækningssummen på ansvarsforsikringen i 2026?", "For skader i 2026 er summen 152 mio. kr. for personskade og 30 mio. kr. for tingskade pr. begivenhed. Det står i Færdselsstyrelsens bekendtgørelse nr. 1287 af 11. november 2025."],
      ["Kan en virksomhed klage til Ankenævnet for Forsikring?", "Som udgangspunkt ikke. Nævnet behandler private forsikringer og tager kun en erhvervssag, hvis den ikke adskiller sig væsentligt fra en privat sag."],
      ["Hvor hurtigt skal en skade på varebilen anmeldes?", "Skaden skal anmeldes uden ophold efter forsikringsaftalelovens § 21. I selskabernes betingelser står der straks. Tyveri, røveri og hærværk skal også anmeldes til politiet."],
      ["Hvad koster det at have en varebil uden ansvarsforsikring?", "DFIM pålægger et dagsgebyr på 250 kr. for hvert påbegyndt døgn, indtil bilen er forsikret, eller nummerpladerne er afleveret. Gebyret følger den registrerede bruger og ikke bilen. Skyldige gebyrer skal være betalt, før der kan tegnes en ny ansvarsforsikring."],
      ["Hvordan bliver momsen håndteret ved en kaskoskade?", "Hos GF opgøres kaskoskaden uden momsen, når bilen tilhører en momsregistreret virksomhed, og virksomheden betaler selv momsen til værkstedet og trækker den fra. Tryg lægger momsen ud og opkræver den bagefter hos virksomheden."]
    ],
    kilder: [
      { navn: "Topdanmark: Er værktøj dækket af min køretøjsforsikring?", url: "https://www.topdanmark.dk/faq/erhverv/er-vaerktoj-daekket-af-min-koretojsforsikring/", dato: "2026-09-27" },
      { navn: "Retsinformation: Bekendtgørelse om regulering af forsikringsdækningsbeløb, BEK nr. 1287 af 11/11/2025", url: "https://www.retsinformation.dk/eli/lta/2025/1287", dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: "https://www.retsinformation.dk/eli/lta/2023/1627", dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: "https://www.retsinformation.dk/eli/lta/2026/118", dato: "2026-10-07" },
      { navn: "Retsinformation: Forsikringsaftaleloven, LBK nr. 1237 af 09/11/2015", url: "https://www.retsinformation.dk/eli/lta/2015/1237", dato: "2026-10-07" },
      { navn: "Ankenævnet for Forsikring: Om at klage", url: "https://www.ankeforsikring.dk/om-ankeforsikring/Sider/Om-at-klage.aspx", dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring til firmabiler", url: "https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/", dato: "2026-10-04" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: "https://tryg.dk/erhverv/varebilforsikring", dato: "2026-10-07" },
      { navn: "Tryg: Flådeforsikring", url: "https://tryg.dk/erhverv/fladeforsikring", dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: "https://www.gjensidige.dk/erhverv/autoforsikring", dato: "2026-10-04" },
      { navn: "Gjensidige: Billigere forsikringer til virksomheden", url: "https://www.gjensidige.dk/erhverv/pris-forsikring", dato: "2026-10-07" },
      { navn: "Codan: Firmabilforsikring", url: "https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/", dato: "2026-10-04" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: "https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/", dato: "2026-10-04" },
      { navn: "If: Varebilforsikring", url: "https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring", dato: "2026-10-04" },
      { navn: "If: Hvad er bilforsikring til erhverv?", url: "https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/alt-du-skal-vide-om-bilforsikring", dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Motorforsikring (erhverv)", url: "https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/", dato: "2026-10-07" },
      { navn: "DFIM: Om dagsgebyr", url: "https://www.dfim.dk/dagsgebyr/om-dagsgebyr/", dato: "2026-10-07" },
      { navn: "DFIM: Motorkøretøjer i Danmark uden lovpligtig ansvarsforsikring", url: "https://dfim.dk/om-dfim/statistik/", dato: "2026-10-07" },
      { navn: "Ayvens: Forsikring hos Ayvens", url: "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/", dato: "2026-10-07" },
      { navn: "Ayvens: 360 graders forsikring", url: "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/360-graders-daekning/", dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["GF definerer fastmonteret udstyr som udstyr, der er fastgjort med bolt, skrue, svejsning eller tilsvarende og ikke kan fjernes uden brug af værktøj (ordforklaringen).", GF],
    ["Ansvarsforsikringen hos GF dækker ikke skade forvoldt på føreren og dennes ting (punkt 3.2).", GF],
    ["Færdselslovens summer gælder for den skade, der forårsages ved en enkelt begivenhed, reguleres hvert år pr. 1. januar og afrundes til nærmeste million (§ 105, stk. 3-4).", "https://www.retsinformation.dk/eli/lta/2026/118"],
    ["Transportministeren bekendtgør hvert år de nye beløb; for 2026 står de i BEK nr. 1287 af 11. november 2025 (152 og 30 mio. kr.).", "https://www.retsinformation.dk/eli/lta/2025/1287"],
    ["DFIM pålægger et dagsgebyr på 250 kr. for hvert påbegyndt døgn, et indregistreret køretøj er uden ansvarsforsikring; gebyret følger den registrerede primære bruger og ikke køretøjet; det stopper, når der er købt forsikring, eller nummerpladerne er afleveret til Motorstyrelsen.", "https://www.dfim.dk/dagsgebyr/om-dagsgebyr/"],
    ["Alle forsikringsselskaber, der tegner ansvarsforsikring for motordrevne køretøjer i Danmark, skal være medlem af DFIM (§ 105, stk. 1).", "https://www.retsinformation.dk/eli/lta/2026/118"],
    ["Dagsgebyrordningen trådte i kraft 1. januar 2019; ved lovens vedtagelse var der omkring 50.000 uforsikrede køretøjer i Danmark.", "https://www.dfim.dk/dagsgebyr/om-dagsgebyr/"],
    ["Pr. 1. juni 2026 var der 10.354 uforsikrede motorkøretøjer, heraf 4.090 personbiler, 3.181 små knallerter, 1.043 store knallerter, 894 varebiler, 555 traktorer og 523 motorcykler (kilde Motorstyrelsen).", "https://dfim.dk/om-dfim/statistik/"],
    ["Hos Tryg kan panthaverdeklaration kun tilknyttes en fuld kaskoforsikring, ikke en delkasko- eller stilstandsforsikring (afsnit 4.5).", TRYG],
    ["GF ansætter kontanterstatningen ud fra genanskaffelsesprisen på en bil og udstyr af samme mærke, alder og stand (punkt 4.3.2); Tryg fastsætter den til det beløb, en tilsvarende varebil af samme alder og stand kan anskaffes for (afsnit 11.5).", TRYG],
    ["Ayvens' kaskoforsikring indeholder en GAP-dækning, der sikrer, at erstatningen ved totalskade som minimum svarer til restgælden i leasingaftalen.", "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/"],
    ["If nævner bilens mærke, model, alder og værdi, kilometer om året, brugen i virksomheden, virksomhedens placering og selvrisikoen som faktorer for prisen.", "https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/alt-du-skal-vide-om-bilforsikring"],
    ["Gjensidige skriver, at prisen afhænger af, hvor i landet virksomheden hører til, fordi der er forskel på skadestatistik for trafikulykker, indbrud, tyveri og brande, og at en højere selvrisiko giver en billigere forsikring.", "https://www.gjensidige.dk/erhverv/pris-forsikring"],
    ["Tryg spørger bl.a., om varebilen er ombygget, fx til foodtruck eller kølebil, når prisen skal beregnes.", "https://tryg.dk/erhverv/varebilforsikring"],
    ["GF beregner startpristrinnet ud fra antal år med bil med forsikring i eget navn og tidligere belastende skader; et skadefrit år giver et nyt og billigere trin indtil trin 9 (Superelite); efter en belastende skade bliver man stående ét år ekstra (punkt 13.5).", GF],
    ["Hos GF beregnes kun én selvrisiko, når samme begivenhed giver både ansvars- og kaskoskade, og er selvrisikoen større end skadeudgiften, opkræves kun skadeudgiften (punkt 13.7).", GF],
    ["Købstædernes Forsikring sænker prisen efter 1 skadefrit år, indtil kunden er på billigste pristrin, og efter 5 skadefri år bliver kunden elitebilist med lavere pris og selvrisiko.", "https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/"],
    ["Tryg erstatter skadeudgiften inkl. moms, lægger momsen ud over for reparatøren og opkræver den hos en registreret virksomhed, i det omfang momsen kan trækkes fra; er varebilen leaset, kan leasingejer trække momsen fra (afsnit 11.7).", TRYG],
    ["GF lægger ved ansvarsskader momsen ud og kræver den godtgjort efter den procent, ejeren har momsfradrag for (punkt 13.9).", GF],
    ["Færdselslovens § 9: en trafikant, der med eller uden egen skyld bliver indblandet i et færdselsuheld, skal standse, yde hjælp, opgive navn og bopæl på anmodning og underrette skadelidte eller politiet ved skade på ting, når ingen er til stede.", "https://www.retsinformation.dk/eli/lta/2026/118"],
    ["Forsikringsaftalelovens § 21, stk. 2: forsømmer den sikrede at anmelde uden ophold, hæfter selskabet ikke i videre omfang, end hvis anmeldelsen var givet; § 24, stk. 2: beløbet forrentes fra det tidspunkt, det kan kræves betalt.", "https://www.retsinformation.dk/eli/lta/2015/1237"],
    ["Tryg skriver, at virksomheder med 20 varebiler eller mere i de fleste tilfælde kan få én fælles forsikring til alle varebilerne.", "https://tryg.dk/erhverv/varebilforsikring"],
    ["Trygs flådeforsikring omfatter bl.a. firmapersonbiler, varebiler, lastbiler og anhængere og kan betales månedligt.", "https://tryg.dk/erhverv/fladeforsikring"],
    ["Ayvens skriver, at forsikring af en flåde typisk udgør 10-15 % af de samlede omkostninger.", "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/360-graders-daekning/"],
    ["Ansvarsforsikringen skal for én præmie dække hele EU og EØS efter lovgivningen i den pågældende medlemsstat eller efter dansk lovgivning, når den giver større dækning (BEK 1627, § 2, stk. 2).", "https://www.retsinformation.dk/eli/lta/2023/1627"],
    ["GF's ansvarsforsikring dækker i de lande, der er tilsluttet grønt kort-ordningen; Trygs forsikring gælder i Europa og i lande uden for Europa, der er tilsluttet ordningen.", TRYG],
    ["GF's kasko dækker i de lande, hvor SOS-redningsforsikringen dækker Det Røde Kort, omfatter redningsforsikring, når totalvægten er højst 3,5 tons, og for biler over 3,5 tons dækkes kørsel i udlandet kun efter aftale (punkt 2.3 og 4.4).", GF],
    ["Tryg henviser klager til afdelingen Kvalitet og til Ankenævnet for Forsikring, hvis en erhvervsklage ikke adskiller sig væsentligt fra private forsikringsforhold (afsnit 13).", TRYG],
    ["Ankenævnet for Forsikring opkræver et klagegebyr på 300 kr., der betales tilbage ved medhold, og oplyser en typisk sagsbehandlingstid på 6-8 måneder.", "https://www.ankeforsikring.dk/om-ankeforsikring/Sider/Om-at-klage.aspx"]
  ]
};
