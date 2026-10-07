// Underside /til-varebilen/flaadestyring/elektronisk-koerebog/ (07-10-2026)
var SKAT = `https://skat.dk/erhverv/ansatte-og-loen/koerselsgodtgoerelse/dokumentation-og-kontrol-af-koerselsgodtgoerelse`;
var SKEMA = `https://skat.dk/media/qsydhtjj/koerselsgodtgoerelse-2018-udfyldt-skema.pdf`;
var JV11 = `https://info.skat.dk/data.aspx?oid=1947973`;
var JV12 = `https://info.skat.dk/data.aspx?oid=1947974`;
var JVB = `https://info.skat.dk/data.aspx?oid=2061750`;
var H3 = `https://info.skat.dk/data.aspx?oid=79441`;
var MST = `https://motorst.dk/borger/gule-plader-og-papegoejeplader/regler-for-gule-plader`;
var DN = `https://www.driversnote.dk/priser`;
var MT = `https://metatrak.dk/koerebog/`;
var GSM = `https://gsmteknik.dk/shop/98-gps-flaadestyring-koerebog/1635-elektronisk-korebog/`;
var GPST = `https://gps-tracker.dk/priser/`;
var ZB = `https://zebon.dk/digital-koerebog/`;
var DT = `https://cdn.datatilsynet.dk/datatilsynet/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf`;
var DALO = `https://www.3f.dk/-/media/files/artikler/dit-arbejdsliv/aftaleomkontrolforanstaltninger.pdf`;
var MAPON = `https://help.mapon.com/da/articles/174310-hvorfor-er-der-forskel-pa-afstandsdata-mellem-kilometertaeller-og-gps`;
var FC = `https://fleetcomplete.dk/flaadestyring/`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "flaadestyring/elektronisk-koerebog",
  side: {
    slug: "elektronisk-koerebog",
    navn: "Elektronisk kørebog",
    titel: "Elektronisk kørebog: krav, typer og priser",
    kort: `Hvad Skattestyrelsen kræver af kørselsregnskabet, hvordan en GPS-kørebog eller en app virker, og hvad den koster hos danske forhandlere.`,
    beskrivelse: `Elektronisk kørebog til firmabil og varebil: Skattestyrelsens krav, app eller GPS-boks, priser fra 0 kr. om måneden og hvad dommene siger om kørebøger.`,
    manchet: `En elektronisk kørebog registrerer turene med GPS, og du skriver selv formålet på. Skattestyrelsen stiller krav til indholdet og til arbejdsgiverens kontrol, men godkender ikke bestemte systemer. Her kan du se kravene, de fem typer kørebøger, priserne og det, dommene lægger vægt på.`,
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Kørebogen", "Føres dagligt", "Skat lægger ikke vægt på rekonstruerede regnskaber"],
        ["Godkendt af Skat", "Ikke systemerne", "Skat stiller krav til indholdet"],
        ["OBD-tracker", "fra 699 kr.", "med moms hos Meta Trak"],
        ["Lavere sats", "over 20.000 km", "i kalenderåret pr. arbejdsgiver"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det registrerer kørebogen",
        tekst: [
          `En elektronisk kørebog bruger GPS til at registrere, hvor bilen kører. Når turen er slut, ligger dato, start- og slutadresse og antal kilometer klar i systemet. GSM Teknik skriver, at netop de oplysninger bliver registreret i deres kørebog.`,
          `Det, GPS'en ikke kan vide, skriver du selv. Det gælder formålet med turen, og om turen var privat eller erhverv. I Meta Traks app skifter du mellem privat og erhverv med ét tryk og kan tilføje en kommentar. Uden formålet er kørebogen ikke et kørselsregnskab, som Skattestyrelsen kan bruge.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To kasser. GPS'en registrerer selv dato, adresser, kilometer og rute. Du skriver selv formålet, om turen er privat eller erhverv, og en eventuel kommentar."><text class="tg-fremhaev" x="8" y="20">GPS registrerer selv</text><rect class="tg-kasse" x="0" y="30" width="190" height="140"/><text x="14" y="56">dato og tidspunkt</text><text x="14" y="82">start- og slutadresse</text><text x="14" y="108">kilometer pr. tur</text><text x="14" y="134">rute og stop</text><text class="tg-fremhaev" x="218" y="20">Du skriver selv</text><rect class="tg-modul" x="210" y="30" width="190" height="140"/><text x="224" y="56">formålet med turen</text><text x="224" y="82">privat eller erhverv</text><text x="224" y="108">kommentar</text><text class="tg-lille" x="0" y="192">BEGGE DELE SKAL MED I KØRSELSREGNSKABET</text></svg>`,
          tekst: `Skematisk. Kilder: ${a(GSM, "GSM Teknik")}, set den 4. oktober 2026, og ${a(MT, "Meta Trak")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår der skal føres kørselsregnskab",
        tekst: [
          `Der er ikke et generelt krav om kørebog i alle firmabiler. Kravet opstår, når virksomheden eller medarbejderen skal bevise noget over for Skattestyrelsen eller Motorstyrelsen. De fire situationer herunder er de almindelige.`
        ],
        punkter: [
          `<strong>Skattefri kørselsgodtgørelse.</strong> Medarbejderen kører i egen bil og får godtgørelse. Arbejdsgiveren skal kontrollere kørslen, og det sker typisk med et kørselsregnskab.`,
          `<strong>Firmabil, der holder ved hjemmet.</strong> Der er en formodning for privat brug. Den kan ifølge praksis kun afkræftes med et kørselsregnskab.`,
          `<strong>Pålæg fra Skatteforvaltningen.</strong> Er der tvivl om, at kørsel mellem hjem og arbejde er erhvervsmæssig efter 60-dages-reglen, kan Skatteforvaltningen give pålæg om kørselsregnskab i op til 12 måneder.`,
          `<strong>Mandskabsvogn og vagtordning.</strong> Konstateres det, at en mandskabsvogn umiddelbart bruges i strid med reglerne, skal virksomheden dokumentere, at kørslen ligger inden for rammerne. Motorstyrelsen nævner GPS-oplysninger om den kørte rute som eksempel. Ved vagtordning skal virksomheden kunne dokumentere, at bilen er brugt til de enkelte vagter.`
        ]
      },
      {
        overskrift: "Det skal kørselsregnskabet indeholde",
        tekst: [
          `Kravene afhænger af, hvad regnskabet skal bevise. Ved kørselsgodtgørelse skal regnskabet vise, at hver tur var erhvervsmæssig, og hvordan godtgørelsen er regnet ud. Ved en firmabil skal kørebogen vise, at bilen ikke er brugt privat.`,
          `Derfor kræver Den juridiske vejledning kilometertællerens stand ved dagens start og slut i en firmabil, mens Skattestyrelsen ved godtgørelse kræver antal kørte kilometer og formålet med hver tur. En GPS-kørebog kan levere begge dele, hvis den er sat op til det.`
        ],
        tabel: {
          kolonner: ["Oplysning", "Kørselsgodtgørelse i egen bil", "Bevis for, at firmabil ikke bruges privat"],
          raekker: [
            ["Dato", "Ja", "Ja, ført dagligt"],
            ["Formål med kørslen", "Ja", "Nej"],
            ["Mål og delmål", "Ja", "Bestemmelsessteder for erhvervskørsel"],
            ["Kilometer", "Antal kørte km", "Km-stand ved dagens start og slut"],
            ["Fordeling privat og erhverv", "Nej", "Ja"],
            ["Beregning efter satser", "Ja", "Nej"],
            ["Oplysning om egen bil", "Ja", "Nej"]
          ],
          note: `Kilder: ${a(SKAT, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse")} og ${a(JV11, "Den juridiske vejledning C.A.5.14.1.11")}, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "daekning",
          kolonner: ["Oplysning", "Kørselsgodtgørelse i egen bil", "Bevis for, at firmabil ikke bruges privat"],
          raekker: [
            ["Dato", "ja", "ja, ført dagligt"],
            ["Formål med kørslen", "ja", "nej"],
            ["Mål og delmål", "ja", "bestemmelsessteder for erhvervskørsel"],
            ["Kilometer", "antal kørte km", "km-stand ved dagens start og slut"],
            ["Fordeling privat og erhverv", "nej", "ja"],
            ["Beregning efter satser", "ja", "nej"],
            ["Oplysning om egen bil", "ja", "nej"]
          ],
          note: `Kilder: ${a(SKAT, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse")} og ${a(JV11, "Den juridiske vejledning C.A.5.14.1.11")}, set den 4. oktober 2026.`
        },
        efter: [
          `Bilagene skal desuden indeholde modtagerens navn, adresse og CPR-nummer, ifølge Skattestyrelsens afsnit om regnskabsgrundlag. Satserne står hos ${a("https://skat.dk/erhverv/ansatte-og-loen/koerselsgodtgoerelse", "Skattestyrelsen")}.`
        ]
      },
      {
        overskrift: "Mål, delmål og formål",
        tekst: [
          `Skattestyrelsen har lavet et udfyldt eksempel på en kørselsafregning med bemærkninger. Det viser, hvor præcist mål og formål skal skrives, og det er de felter, en GPS-kørebog ikke kan udfylde alene.`,
          `I eksemplet står formålet fx som "Opmåling og tilbud på reparation af Y-bygning". Ord som "bopæl" er nok, når adressen på bopælen og det faste arbejdssted står andre steder i skemaet.`
        ],
        punkter: [
          `<strong>Entydige steder.</strong> Kørselsmål og delmål skal være geografiske stedsangivelser. Et firmanavn eller en intern betegnelse er ikke entydigt, skriver Skattestyrelsen.`,
          `<strong>Formålet.</strong> Det erhvervsmæssige formål skal angives mere præcist end blot "arbejde".`,
          `<strong>Delmål.</strong> Delmålene forklarer en længere rute, så antallet af kilometer ikke er i tvivl.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Skematisk rute fra start over et delmål til målet, med krav til mål og formål."><path class="tg-gulvlinje" d="M40,140 L200,50 L340,140"/><circle class="tg-modul" cx="40" cy="140" r="6"/><circle class="tg-modul" cx="200" cy="50" r="6"/><circle class="tg-modul" cx="340" cy="140" r="6"/><text class="tg-fremhaev" x="200" y="16" text-anchor="middle">Delmål</text><text x="200" y="32" text-anchor="middle">forklarer den længere rute</text><text class="tg-fremhaev" x="40" y="162" text-anchor="middle">Start</text><text class="tg-fremhaev" x="340" y="162" text-anchor="middle">Mål</text><text x="390" y="178" text-anchor="end">geografisk sted,</text><text x="390" y="194" text-anchor="end">ikke firmanavn</text><text class="tg-fremhaev" x="200" y="110" text-anchor="middle">Formål</text><text x="200" y="126" text-anchor="middle">mere præcist end "arbejde"</text></svg>`,
          tekst: `Skematisk. Skattestyrelsens krav til mål, delmål og formål i kørselsregnskabet. Kilde: ${a(SKEMA, "Skattestyrelsens eksempel på kørselsafregning")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(SKEMA, "Skattestyrelsens eksempel på kørselsafregning")}, set den 4. og 7. oktober 2026. Du kan se hele skemaet under <a href="/til-varebilen/flaadestyring/koerselsregnskab-skabelon/">kørselsregnskab: skabelon</a>.`
        ]
      },
      {
        overskrift: "Egen bil og registreringsnummer",
        tekst: [
          `Skattefri godtgørelse forudsætter, at medarbejderen har kørt i sin egen bil. Egen bil omfatter også ægtefællens bil og ved fælles økonomi også samleverens, skriver Skattestyrelsen i eksemplet.`,
          `Arbejdsgiveren skal kontrollere, at egen bil er brugt. Det er normalt kun muligt, når medarbejderen erklærer det på afregningen og eventuelt skriver registreringsnummeret. Har husstanden også en fri bil, skal registreringsnummeret altid stå der.`,
          `En kørebog, der er bundet til én bil, gør den kontrol lettere. Med Driversnotes iBeacon registrerer appen kun de ture, der køres i præcis den bil, hvor iBeaconen ligger.`
        ],
        efter: [
          `Kilder: ${a(SKEMA, "Skattestyrelsens eksempel på kørselsafregning, bemærkning 6")} og ${a(DN, "Driversnote")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Arbejdsgiverens kontrol",
        tekst: [
          `Arbejdsgiveren skal kontrollere oplysningerne synligt, fx med underskrift, stempel eller rettelse af fejl. Opfylder kørslen ikke betingelserne, er godtgørelsen A-indkomst for medarbejderen. Reglerne om kontrollen står i bekendtgørelse nr. 1333 af 20. november 2025, §§ 5 og 6.`,
          `I Skattestyrelsens eksempel har afregningen tre datoer og tre navne. Medarbejderen har udarbejdet den, en leder har godkendt den, og en bogholder har efterregnet den.`,
          `Domstolene ser på, om kontrollen faktisk kunne gennemføres. I én sag godtog retten ikke ugesedler, der manglede formål og mål. I en anden sag var forkortelser for mål og delmål nok, fordi arbejdsgiveren forklarede, at der var ført kontrol.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Medarbejderen udarbejder", "Ture, mål, formål og kilometer for perioden. En kørebog kan levere det meste."],
            ["Lederen godkender", "Kontrollerer, at kørslen var erhvervsmæssig, og skriver under med dato."],
            ["Bogholderen efterregner", "Tjekker satser, årets samlede kilometer og beregningen."],
            ["Udbetaling", "Godtgørelsen udbetales skattefrit, og bilaget gemmes i bogføringen."]
          ]
        },
        efter: [
          `Kilder: ${a(SKAT, "Skattestyrelsen")}, set den 4. oktober 2026, og ${a(SKEMA, "Skattestyrelsens eksempel på kørselsafregning")} og ${a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kørebogen skal føres dagligt",
        tekst: [
          `Kørebogen skal være ført dagligt. I de domme, Den juridiske vejledning gengiver, er kørselsregnskaber, der er rekonstrueret bagefter, ikke tillagt vægt, og kørebøger med fejl og betydelige huller er ikke godtaget.`,
          `Højesteret har slået fast, at et kørselsregnskab, der er lavet bagefter, ikke har betydning som bevis. I en anden højesteretsdom havde direktøren ført kørebog løbende. Han tabte alligevel, fordi afstandene i kørebogen næsten altid afveg fra Kraks Ruteplan.`,
          `En GPS-kørebog registrerer turen, mens den køres, og måler afstanden. Formålet skal stadig skrives ind løbende, for det kan GPS'en ikke registrere.`
        ],
        efter: [
          `Kilde: ${a(JV11, "Den juridiske vejledning C.A.5.14.1.11")} med SKM2005.138.HR og SKM2008.534.HR, set den 4. og 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Varebil på gule plader",
        tekst: [
          `For en varebil på gule plader gælder kravet om kørebog som udgangspunkt ikke. Når arbejdsgiveren har trukket momsen fra og ikke betaler privatbenyttelsesafgift, skal skattemyndighederne lægge til grund, at bilen kun bruges erhvervsmæssigt.`,
          `Derfor gælder de bevis- og dokumentationskrav, herunder kørebøger, der er udviklet for fri bil, ikke for sådanne biler. Det står i Den juridiske vejledning. Hvornår varebilen må køre hjem, står i <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>.`,
          `Mandskabsvogne og vagtordninger er en undtagelse. Ved vagtordning kræver Motorstyrelsen en vagtplan, rapportpligt over udkald og dokumentation for, at bilen er brugt til de enkelte vagter. Reglerne for mandskabsvogne står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn: regler</a>.`
        ],
        efter: [
          `Kilder: ${a(JV12, "Den juridiske vejledning C.A.5.14.1.12")} og ${a(MST, "Motorstyrelsen: Regler for gule plader")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kørebog og privat kørsel",
        tekst: [
          `En kørebog med en knap til privat kørsel gør ikke privat kørsel lovlig i en varebil på gule plader. Privat kørsel kræver <a href="/haandbogen/dagsbevis-varebil/">dagsbevis</a> eller <a href="/haandbogen/papegoejeplader/">papegøjeplader</a>. Kørebogen dokumenterer kun, hvordan bilen er brugt.`,
          `Privat-knappen er nyttig i egne biler og i firmabiler på hvide plader, hvor medarbejderen må køre privat. Her viser knappen, hvilke ture der er erhverv, og hvilke der er privat.`
        ]
      },
      {
        overskrift: "Ingen godkendte systemer",
        tekst: [
          `Mange forhandlere markedsfører kørebøger som "godkendt af SKAT". Skattestyrelsens sider om kørselsgodtgørelse nævner ikke bestemte systemer, og leverandøren ZeBon skriver selv, at Skat ikke godkender specifikke systemer. Kravene gælder indholdet.`,
          `Skattestyrelsen skriver også, at der ikke er krav om en bestemt blanket, men at det kan være en fordel at bruge samme systematik hver gang. En kørebog, der laver rapporten på samme måde hver måned, gør netop det.`
        ],
        efter: [
          `Kilder: ${a(SKAT, "Skattestyrelsen")} og ${a(ZB, "ZeBon")}, set den 4. og 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fem typer elektronisk kørebog",
        tekst: [
          `Kørebøgerne adskiller sig ved, hvor GPS'en sidder. Det afgør, om enheden kan flyttes til næste bil, om der skal en montør til, og om kørebogen virker, når telefonen ligger hjemme.`,
          `En app er billigst, men den registrerer kun, når telefonen er med. Driversnote skriver, at appens automatiske registrering kan starte, når du bevæger dig hurtigt, fx også i en bus. En iBeacon i bilen løser det, fordi appen så kun registrerer ture i den bil.`
        ],
        kort: [
          ["App på telefonen", "Telefonens GPS registrerer turen. Driversnote kan starte automatisk med en iBeacon i bilen."],
          ["OBD-tracker", "Sættes i diagnosestikket. Kræver ingen montering og kan flyttes mellem biler."],
          ["Cigarstik-tracker", "Sættes i 12 V-udtaget og kan flyttes mellem biler."],
          ["Fastmonteret tracker", "Tilsluttes bilens strøm. Knappen til privat og erhverv sidder på instrumentbrættet."],
          ["Del af flådestyring", "Kørebogen er et modul i et større system, fx ABAX Triplog eller Fleet Completes Professional-pakke."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 256" role="img" aria-label="Varebil set fra siden med tre placeringer af kørebogen: telefon med app i førerhuset, fast GPS-boks bag instrumentbrættet med en privat-knap, og en tracker i OBD-stikket under rattet."><g transform="translate(70,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-profil" x="226" y="134" width="9" height="15"/><circle class="tg-kuffert" cx="258" cy="131" r="4"/><rect class="tg-modul" x="268" y="140" width="16" height="10"/><rect class="tg-kasse" x="248" y="165" width="12" height="8"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="230" y1="141" x2="60" y2="46"/><circle cx="230" cy="141" r="3"/><text class="tg-call__navn" x="5" y="24">Telefon med app</text><text class="tg-call__under" x="5" y="38">og iBeacon i bilen</text></g><g class="tg-call"><line x1="258" y1="131" x2="190" y2="78"/><circle cx="258" cy="131" r="3"/><text class="tg-call__navn" x="130" y="58">Privat-knap</text><text class="tg-call__under" x="130" y="72">på instrumentbrættet</text></g><g class="tg-call"><line x1="276" y1="145" x2="345" y2="46"/><circle cx="276" cy="145" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Fast GPS-boks</text><text class="tg-call__under" x="395" y="38" text-anchor="end">tilsluttet 12 V og stel</text></g><g class="tg-call"><line x1="254" y1="169" x2="220" y2="224"/><circle cx="254" cy="169" r="3"/><text class="tg-call__navn" x="150" y="236">OBD-stik</text><text class="tg-call__under" x="150" y="250">kan flyttes til næste bil</text></g></svg>`,
          tekst: `Skematisk. Kilder: ${a(GSM, "GSM Teknik")}, set den 4. oktober 2026, og ${a(MT, "Meta Trak")} og ${a(DN, "Driversnote")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser fra danske forhandlere",
        tekst: [
          `Priserne består af to dele: en enhed, der købes én gang, og et abonnement pr. måned eller år. Montering er ikke med i nogen af priserne. Driversnote, GSM Teknik og GPS-Tracker.dk oplyser abonnementet uden moms, og Meta Trak oplyser sine priser med moms.`,
          `En app uden enhed er billigst at komme i gang med. Driversnote er gratis til rapporter med op til 15 ture om måneden, og Teams til 2–10 brugere koster det samme pr. licens som Pro. Til mere end 11 brugere har Driversnote Teams+ med pris efter aftale.`
        ],
        tabel: {
          kolonner: ["Forhandler", "Type", "Hardware", "Abonnement"],
          raekker: [
            ["Driversnote Gratis", "App", "–", "0 kr., rapporter med op til 15 ture om måneden"],
            ["Driversnote Pro", "App og iBeacon", "iBeacon med ved årsabonnement (værdi 275 kr.)", "85 kr. pr. md. + moms"],
            ["Driversnote Teams", "App, 2–10 brugere", "Som Pro", "85 kr. pr. licens pr. md. + moms"],
            ["Meta Trak", "OBD (VL512)", "699 kr. med moms", "129 kr. pr. md. med moms"],
            ["Meta Trak", "Fastmonteret (T.342)", "2.699 kr. med moms", "1.170 kr. pr. år med moms"],
            ["GSM Teknik", "Fastmonteret (Teltonika FMC130)", "1.595 kr. med moms, 12 mdr. abonnement følger med", "40 kr. pr. md. + moms"],
            ["GPS-Tracker.dk", "LogPRO kørebog", "Købes særskilt", "70 kr. pr. md. + moms"]
          ],
          note: `Kilder: ${a(DN, "Driversnote")}, ${a(MT, "Meta Trak")}, ${a(GSM, "GSM Teknik")} og ${a(GPST, "GPS-Tracker.dk")}, set den 4. oktober 2026 og igen den 7. oktober 2026. Montering er ikke med i priserne.`
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. md.",
          data: [
            ["Driversnote Gratis", 0, "app, rapporter med op til 15 ture om måneden"],
            ["GSM Teknik", 40, "fastmonteret, + moms"],
            ["GPS-Tracker.dk LogPRO", 70, "+ moms"],
            ["Driversnote Pro", 85, "app og iBeacon, + moms"],
            ["Meta Trak", 129, "OBD, med moms"]
          ],
          note: `Søjlerne viser abonnementet pr. måned uden hardware og montering. Meta Traks fastmonterede kørebog koster 1.170 kr. om året med moms og er ikke med. Kilder: ${a(DN, "Driversnote")}, ${a(GSM, "GSM Teknik")}, ${a(GPST, "GPS-Tracker.dk")} og ${a(MT, "Meta Trak")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Binding og betaling",
        tekst: [
          `Abonnementerne binder forskelligt. Hos GPS-Tracker.dk har alle fire pakker 12 måneders binding, og LogPRO Kørebog koster 840 kr. for de 12 måneder. SIM-kort, data og opsætning er med, mens trackeren, monteringen og ekstraudstyr købes særskilt.`,
          `Meta Trak lader dig vælge abonnement helt ned til én måned. Du sparer 8 procent ved at betale for et halvt år ad gangen og 24 procent ved at betale for et helt år. Hos Driversnote kan du opsige abonnementet når som helst, før det fornyes, og iBeaconen følger kun gratis med et årsabonnement.`,
          `GSM Tekniks kørebog leveres med 12 måneders forudbetalt abonnement, og der er 30 dages returret.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["LogPRO Kørebog, 12 mdr.", "840", "kr. + moms"],
            ["Meta Trak, et halvt år", "710", "kr. med moms"],
            ["Meta Trak, et år", "1.170", "kr. med moms"]
          ],
          note: `Prisen for hele perioden uden tracker og montering. Kilder: ${a(GPST, "GPS-Tracker.dk")} og ${a(MT, "Meta Trak")}, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(GPST, "GPS-Tracker.dk")}, ${a(MT, "Meta Trak")}, ${a(DN, "Driversnote")} og ${a(GSM, "GSM Teknik")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Montering af en fast kørebog",
        tekst: [
          `En fastmonteret GPS-kørebog fra GSM Teknik tilsluttes med to ledninger, stel og 12 V. Knappen til privat og erhverv sættes på instrumentbrættet med dobbeltklæbende tape. Monteringsvejledningen ligger på produktsiden.`,
          `Standard-abonnementet har SIM-kort med data, opdatering cirka hvert 10. sekund og 12 måneders historik. Fordi enheden sidder fast i bilen, registrerer den alle ture, også når føreren glemmer telefonen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ledninger", "2", "stel og 12 V"],
            ["Opdatering", "10", "sek."],
            ["Historik", "12", "mdr."]
          ],
          note: `Kilde: ${a(GSM, "GSM Teknik: Kørebog med knap, Teltonika FMC130")}, Standard-abonnement, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Fra bil til regnskab",
        tekst: [
          `Data sendes over 4G, og kørebogen hentes som PDF eller Excel. GSM Teknik skriver, at det tager højst 5 minutter at lave kørebogen som PDF til revisoren eller lønbogholderiet, og at data gemmes i op til 12 måneder.`,
          `Hos Meta Trak kan du få en påmindelse hver aften om at gøre dagens ture færdige i appen. Det hjælper på kravet om, at kørebogen føres dagligt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Dataflow i en elektronisk kørebog: bil, GPS-boks med knap til privat og erhverv, platform og regnskab."><defs><marker id="pil-koerebog-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="125" y="28" width="40" height="16" rx="3" class="tg-modul"/><text x="145" y="18" text-anchor="middle">Knap til privat og erhverv</text><line x1="145" y1="44" x2="145" y2="70" class="tg-skinne-tynd"/><rect x="10" y="70" width="70" height="40" rx="6" class="tg-rum"/><text x="45" y="95" text-anchor="middle">Bil</text><rect x="110" y="70" width="70" height="40" class="tg-kasse"/><text x="145" y="95" text-anchor="middle">Boks</text><rect x="210" y="70" width="80" height="40" class="tg-kasse"/><text x="250" y="95" text-anchor="middle">Platform</text><rect x="315" y="70" width="75" height="40" class="tg-modul"/><text x="352" y="95" text-anchor="middle">Regnskab</text><g class="tg-maal"><line x1="80" y1="90" x2="108" y2="90" marker-end="url(#pil-koerebog-1)"/><line x1="180" y1="90" x2="208" y2="90" marker-end="url(#pil-koerebog-1)"/><line x1="290" y1="90" x2="313" y2="90" marker-end="url(#pil-koerebog-1)"/></g><text x="45" y="132" text-anchor="middle">12 V + stel</text><text x="145" y="132" text-anchor="middle">GPS + 4G</text><text x="250" y="132" text-anchor="middle">ture, km</text><text x="352" y="132" text-anchor="middle">PDF, Excel</text><text x="250" y="150" text-anchor="middle" class="tg-lille">+ formål</text><text x="352" y="150" text-anchor="middle" class="tg-lille">kontrol</text><text x="10" y="186" class="tg-lille">Km-tidsstemplingen kan ikke rettes</text></svg>`,
          tekst: `Skematisk. Dataflowet i en elektronisk kørebog. Kilde: ${a(GSM, "GSM Teknik")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Privat og erhverv i samme bil",
        tekst: [
          `Systemerne deler turene i privat og erhverv med en knap i bilen eller bagefter i appen. Meta Trak lader brugeren dele og samle ture. Rummer samme tur både erhverv og privat, kan den deles i flere dele med hver sin kategori.`,
          `GPS-Tracker.dk's LogPRO har fører-id og en knap til privat og erhverv. Knappen kræver udstyret LogPRO Switch og montering, som købes ekstra. Fører-id virker med en personlig DriverTag i lommen, så kørslen knyttes til den rigtige fører, også når flere deler bilen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="En tur med tre punkter: start, kunde og indkøb. Strækningen fra start til kunden er erhverv, og strækningen fra kunden til indkøb er privat. Turen deles ved kunden i to dele."><text class="tg-fremhaev" x="0" y="18">Én tur i appen</text><line class="tg-skinne" x1="40" y1="90" x2="200" y2="90"/><line class="tg-skinne-tynd" x1="200" y1="90" x2="360" y2="90"/><circle class="tg-modul" cx="40" cy="90" r="7"/><circle class="tg-modul" cx="200" cy="90" r="7"/><circle class="tg-modul" cx="360" cy="90" r="7"/><text x="40" y="70" text-anchor="middle">Start</text><text x="200" y="62" text-anchor="middle">Kunde</text><text x="360" y="70" text-anchor="middle">Indkøb</text><line class="tg-skillevaeg" x1="200" y1="100" x2="200" y2="134"/><text x="206" y="130">delt her</text><text class="tg-lille" x="120" y="116" text-anchor="middle">ERHVERV</text><text class="tg-lille" x="300" y="116" text-anchor="middle">PRIVAT</text><text class="tg-lille" x="0" y="168">TO DELE MED HVER SIN KATEGORI</text></svg>`,
          tekst: `Skematisk. Meta Traks funktion til at dele en tur, der rummer både erhverv og privat. Den gælder egne biler og firmabiler, der må køre privat. Kilde: ${a(MT, "Meta Trak")}, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Data ud af systemet",
        tekst: [
          `Kørebogen skal ende som et bilag i bogføringen og ofte også i lønsystemet. Derfor betyder det noget, hvilke formater systemet kan levere, og om det kan sende data direkte videre.`,
          `Flere systemer gemmer også en log over rettelser. Driversnote har en redigeringslog i alle betalte pakker, og LogPRO har en ændringslog på godkendte ture. LogPRO kan desuden sætte formål automatisk ved faste steder og bruge ugeplaner efter arbejdstiderne.`
        ],
        tabel: {
          kolonner: ["Forhandler", "Rapporter", "Videre til andre systemer"],
          raekker: [
            ["Meta Trak", "PDF, Excel og CSV", "Rapport sendt på mail"],
            ["GSM Teknik", "PDF og Excel", "Åbent API og webhooks"],
            ["GPS-Tracker.dk LogPRO", "PDF, CSV og XML", "API"],
            ["Driversnote", "Eksport af rapporter og turdata", "Offentligt API"]
          ],
          note: `Kilder: ${a(MT, "Meta Trak")}, ${a(GSM, "GSM Teknik")}, ${a(GPST, "GPS-Tracker.dk")} og ${a(DN, "Driversnote")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kilometertal og rettelser",
        tekst: [
          `I GSM Tekniks kørebog kan bilens km-tidsstempling ikke rettes, men den kan tilpasses bilens aktuelle kilometertæller. Kommentarer og rettelser skrives i det udtrukne Excel-ark.`,
          `GPS'ens kilometertal og bilens kilometertæller bliver aldrig helt ens, fordi de måles på hver sin måde. Mapon skriver, at GPS'ens kilometertal starter ved 0, når enheden monteres, og anbefaler at justere det mindst en gang om året eller efter et dækskift.`,
          `Kilometertallet bliver også kontrolleret. Den juridiske vejledning gengiver en dom, hvor arbejdsgiveren ikke kunne føre den fornødne kontrol, fordi kilometerstanden ved bilens køb og salg ikke passede med de kilometer, der var udbetalt godtgørelse for.`
        ],
        efter: [
          `Kilder: ${a(GSM, "GSM Teknik")}, set den 4. oktober 2026, og ${a(MAPON, "Mapon: Forskel på kilometertæller og GPS")} og ${a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Årets kilometer",
        tekst: [
          `Kilometersatsen for kørselsgodtgørelse nedsættes ved kørsel over 20.000 km i kalenderåret. Skattestyrelsen skriver, at man ofte skal opgøre årets samlede kørsel løbende for ikke at udbetale med for høje satser. Satserne står hos Skattestyrelsen.`,
          `Grænsen gælder for den enkelte arbejdsgiver. Kører medarbejderen også for en anden arbejdsgiver, tæller den kørsel ikke med. I Skattestyrelsens eksempel bliver årets kørsel ført videre fra den ene afregning til den næste, så det er tydeligt, hvornår grænsen passeres.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Bjælke for årets kørsel: kilometersatsen nedsættes ved kørsel over 20.000 km."><text class="tg-fremhaev" x="0" y="16">Kørsel i kalenderåret</text><rect class="tg-kasse" x="0" y="40" width="260" height="30"/><text x="10" y="59">sats til 20.000 km</text><rect class="tg-modul" x="260" y="40" width="140" height="30"/><text class="tg-modul__tekst" x="270" y="59">NEDSAT SATS</text><line class="tg-skinne-tynd" x1="260" y1="28" x2="260" y2="82"/><text class="tg-fremhaev" x="260" y="98" text-anchor="middle">20.000 km</text><text class="tg-lille" x="0" y="132">ÅRETS KØRSEL OPGØRES LØBENDE</text></svg>`,
          tekst: `Skematisk. Kilometersatsen nedsættes ved kørsel over 20.000 km i kalenderåret. Satserne står hos ${a("https://skat.dk/erhverv/ansatte-og-loen/koerselsgodtgoerelse", "Skattestyrelsen")}.`
        },
        efter: [
          `Kilder: ${a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2")} og ${a(SKEMA, "Skattestyrelsens eksempel på kørselsafregning")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "GPS-kørebog i firmabil",
        tekst: [
          `En GPS-kørebog i en firmabil er også GPS-overvågning af den medarbejder, der kører bilen. Datatilsynet kræver, at de ansatte senest ved start får information om formålet, omfanget og brugen af oplysningerne.`,
          `Må bilen bruges privat, skal medarbejderen kunne slukke GPS-overvågningen under privat kørsel. Gælder DA og LO's aftale om kontrolforanstaltninger, skal medarbejderne have besked senest 6 uger før. Resten af reglerne står på <a href="/til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/">GPS-sporing af medarbejdere</a>.`
        ],
        efter: [
          `Kilder: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")} og ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger")}, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så passer kørebogen til kørslen og til regnskabet.",
    spoergsmaal: [
      "Om kørebogen skal dokumentere kørselsgodtgørelse, firmabil eller begge dele.",
      "Antal biler og førere, og om flere deler samme bil.",
      "Om enheden skal flyttes mellem biler eller monteres fast.",
      "Hvilket løn- eller bogføringssystem rapporterne skal over i.",
      "Om bilen må bruges privat, så turene skal kunne deles.",
      "Hvor længe I vil være bundet, og om I betaler pr. måned eller pr. år.",
      "Om rettelser skal kunne ses i en log."
    ],
    faq: [
      ["Hvad skal en kørebog indeholde?", "Ved kørselsgodtgørelse skal den have formål, mål og delmål, dato, antal kilometer, beregning efter satser og oplysning om, at det er medarbejderens egen bil. Som bevis mod privat brug af firmabil skal den have daglig km-stand ved start og slut, dato, fordeling mellem privat og erhverv og bestemmelsessteder."],
      ["Er en elektronisk kørebog godkendt af SKAT?", "Skattestyrelsen godkender ikke bestemte systemer. Kørebogen skal indeholde de oplysninger, reglerne kræver, og være ført løbende."],
      ["Hvad koster en GPS-kørebog?", "Fra 699 kr. for en OBD-tracker og 129 kr. om måneden med moms (Meta Trak) eller 1.595 kr. med moms og 12 måneders abonnement for en fastmonteret enhed (GSM Teknik). En app koster 85 kr. om måneden uden moms (Driversnote Pro). Priserne er set den 4. oktober 2026."],
      ["Kan en kørebog laves bagefter?", "Kørebogen skal ifølge Den juridiske vejledning være ført dagligt. I de domme, vejledningen gengiver, er kørselsregnskaber, der er udarbejdet efterfølgende, ikke tillagt vægt."],
      ["Kan kørebogs-appen bruges i en varebil?", "Ja. Appen bruger telefonens GPS og virker i alle biler. En iBeacon i bilen kan starte registreringen automatisk."],
      ["Skal man bruge Skattestyrelsens skema til kørselsregnskab?", "Nej. Der er ikke krav om en bestemt blanket, men Skattestyrelsen har et skema til kørselsafregning, og oplysningerne skal fremgå af bilaget."],
      ["Kan man rette i en GPS-kørebog?", "Du kan tilføje kommentarer og formål. I GSM Tekniks kørebog kan km-tidsstemplingen ikke rettes, men den kan tilpasses bilens kilometertæller."],
      ["Skal en varebil på gule plader have kørebog?", "Som udgangspunkt nej. Når momsen er trukket fra, og der ikke betales privatbenyttelsesafgift, gælder kravene om kørebog for fri bil ikke. Mandskabsvogne og vagtordninger skal dog kunne dokumentere kørslen over for Motorstyrelsen."],
      ["Gælder grænsen på 20.000 km for al kørsel?", "Nej. Grænsen gælder kørsel for den enkelte arbejdsgiver. Kørsel for en anden arbejdsgiver tæller ikke med."]
    ],
    kilder: [
      { navn: "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse", url: SKAT, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: H.3 Regnskabsgrundlag", url: H3, dato: "2026-10-04" },
      { navn: "Den juridiske vejledning 2026-2: C.A.5.14.1.11 Vurderingen af, hvornår en bil er til rådighed for privat kørsel", url: JV11, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.5.14.1.12 Varebil på gule plader", url: JV12, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.4.3.3.3.2 Godtgørelse for erhvervsmæssig befordring", url: JVB, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Eksempel på kørselsafregning med bemærkninger (pdf)", url: SKEMA, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Regler for gule plader", url: MST, dato: "2026-10-07" },
      { navn: "Driversnote: Priser", url: DN, dato: "2026-10-07" },
      { navn: "Meta Trak: Elektronisk kørebog", url: MT, dato: "2026-10-07" },
      { navn: "GSM Teknik: Kørebog med knap, Teltonika FMC130", url: GSM, dato: "2026-10-07" },
      { navn: "GPS-Tracker.dk: Priser på abonnementer", url: GPST, dato: "2026-10-07" },
      { navn: "ZeBon: Digital kørebog", url: ZB, dato: "2026-10-07" },
      { navn: "Mapon: Hvorfor er der forskel på afstandsdata mellem kilometertæller og GPS", url: MAPON, dato: "2026-10-07" },
      { navn: "Datatilsynet: Kontrol af medarbejdere (november 2023)", url: DT, dato: "2026-10-07" },
      { navn: "DA og LO: Aftale om kontrolforanstaltninger af 27. oktober 2006 (pdf hos 3F)", url: DALO, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["GSM Teknik: kørebogen registrerer dato for kørslen, antal km pr. tur og kørslens adresse ved start og slut; brugeren kan rette og skrive kommentarer i Excel-arket.", GSM],
    ["Meta Trak: brugeren skifter mellem privat og erhvervskørsel med et enkelt tryk og kan tilføje en kommentar; en rejse kan opdeles i flere dele, når samme tur indeholder både privat og erhverv.", MT],
    ["Skattestyrelsens eksempel på kørselsafregning angiver formålet 'Opmåling og tilbud på reparation af Y-bygning'; udtryk som 'bopæl' er tilstrækkelige, når adressen for sædvanlig bopæl og det faste arbejdssted i øvrigt fremgår af skemaet (bemærkning 3).", SKEMA],
    ["Skattestyrelsens eksempel, bemærkning 6: egen bil omfatter også ægtefælles eller ved fælles økonomi samlevers køretøj; arbejdsgiveren skal kontrollere, at egen bil er anvendt, hvilket normalt kun er muligt, hvis lønmodtageren erklærer det på afregningen og eventuelt oplyser registreringsnummeret; råder husstanden over fri bil, skal registreringsnummeret altid oplyses.", SKEMA],
    ["Driversnote: med en iBeacon tracker appen kun de ture, der køres i præcis det køretøj; automatisk tracking uden iBeacon aktiveres, når man bevæger sig hurtigt, fx også i bus.", DN],
    ["Arbejdsgiverens kontrolpligt ved skattefri befordringsgodtgørelse følger af bekendtgørelse nr. 1333 af 20. november 2025, §§ 5 og 6.", JVB],
    ["Skattestyrelsens eksempel har felterne 'Udarbejdet den', 'Godkendt den' og 'Efterregnet den' med hver sit navn (medarbejder, leder, bogholder).", SKEMA],
    ["Den juridiske vejledning gengiver en dom, hvor ugesedler uden kørslens formål og mål ikke opfyldte kravene, og SKM2021.411.BR, hvor forkortelser for mål og delmål var tilstrækkelige, fordi arbejdsgiveren havde ført kontrol.", JVB],
    ["SKM2005.138.HR: Højesteret tillagde ikke et efterfølgende udarbejdet kørselsregnskab bevismæssig betydning. SKM2008.534.HR: trods løbende ført kørebog var bevisbyrden ikke løftet, bl.a. fordi de anførte afstande næsten konsekvent afveg væsentligt fra Kraks Ruteplan.", JV11],
    ["Den juridiske vejledning C.A.5.14.1.12: når arbejdsgiveren har fradraget moms og ikke betaler tillægsafgift for privat brug, skal skattemyndighederne som udgangspunkt lægge til grund, at bilen kun bruges erhvervsmæssigt, og bevisbyrde- og dokumentationskravene, herunder kørebøger, gælder ikke.", JV12],
    ["Motorstyrelsen: kørsel i varebil ved vagtordning er bl.a. betinget af vagtplan og rapportpligt over udkald, og at det kan dokumenteres, at bilen er brugt til de enkelte vagter.", MST],
    ["Skattestyrelsen: der er ikke krav om en bestemt blanket, men det kan være en fordel at bruge den samme systematik fra gang til gang.", SKAT],
    ["Driversnote Teams+ er til organisationer med over 11 brugere med pris efter aftale; redigeringslog og offentligt API indgår i de betalte pakker.", DN],
    ["GPS-Tracker.dk: alle fire pakker har 12 måneders binding; LogPRO Kørebog koster 840 kr. ekskl. moms for 12 måneder; SIM, data, opsætning og platform er inkluderet, mens GPS-tracker, montering og ekstraudstyr købes separat.", GPST],
    ["Meta Trak: abonnement kan vælges ned til én måned (129 kr./md. inkl. moms); halvårligt 710 kr. (spar 8 %), årligt 1.170 kr. (spar 24 %).", MT],
    ["Driversnote: abonnementet kan annulleres når som helst, før det fornyes; iBeacon er gratis med årligt abonnement og kan ellers tilkøbes.", DN],
    ["GSM Teknik: kørebogen leveres med 12 måneders forudbetalt abonnement og 30 dages returret; kørebogen som PDF tager højst 5 minutter, og data gemmes i op til 12 måneder.", GSM],
    ["Meta Trak sender daglige påmindelser om at ajourføre rejserne hver aften i appen.", MT],
    ["GPS-Tracker.dk LogPRO: privat-/erhvervsknap kræver LogPRO Switch med knap og montering, der tilkøbes; LogPRO DriverID genkender chaufføren via en personlig DriverTag i lommen.", GPST],
    ["Eksportformater: Meta Trak PDF, Excel og CSV (rapport sendt på mail); GSM Teknik PDF og Excel samt åbent API og webhooks (Standard); GPS-Tracker.dk LogPRO PDF, CSV og XML og API; Driversnote eksport af rapporter og turdata og offentligt API.", GPST],
    ["GPS-Tracker.dk LogPRO har ændringslog på godkendte ture, automatiske formål og kørselstyper ved faste steder og ugeplaner efter arbejdstider; Driversnote har redigeringslog.", GPST],
    ["Mapon: GPS-kilometertal starter fra 0, når enheden installeres; Mapon anbefaler at opdatere kilometertallet en gang om året eller efter et dækskift.", MAPON],
    ["Den juridiske vejledning C.A.4.3.3.3.2 gengiver en dom, hvor arbejdsgiveren ikke havde kunnet føre den fornødne kontrol, bl.a. fordi kørebogen var mangelfuld, og der var uoverensstemmelser mellem kilometerstanden ved bilens køb og salg og det antal kilometer, der var udbetalt godtgørelse for.", JVB],
    ["Grænsen på 20.000 km gælder kun for den enkelte arbejdsgiver; kørsel for en anden arbejdsgiver tæller ikke med.", JVB],
    ["Datatilsynet: ansatte skal senest ved etablering af GPS-overvågning informeres om formål, omfang og anvendelse; er privat brug tilladt, skal den ansatte kunne slukke GPS-overvågningen.", DT],
    ["DA/LO-aftalen om kontrolforanstaltninger: arbejdsgiveren skal underrette lønmodtagerne om nye kontrolforanstaltninger senest 6 uger før iværksættelse (punkt 2).", DALO]
  ]
};
