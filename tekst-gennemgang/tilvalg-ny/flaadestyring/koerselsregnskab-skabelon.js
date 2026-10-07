// Kørselsregnskab: skabelon. Ny udgave til tilvalg-ny.json (07-10-2026).
var DOK = "https://skat.dk/erhverv/ansatte-og-loen/koerselsgodtgoerelse/dokumentation-og-kontrol-af-koerselsgodtgoerelse";
var SKEMA = "https://skat.dk/media/r0ne4sgm/skema_koerselsgodtgoerelses2026.pdf";
var EKS = "https://skat.dk/media/qsydhtjj/koerselsgodtgoerelse-2018-udfyldt-skema.pdf";
var JV = "https://info.skat.dk/data.aspx?oid=1947973";
var JVB = "https://info.skat.dk/data.aspx?oid=2061750";

function a(url, navn) { return '<a href="' + url + '" rel="noopener">' + navn + '</a>'; }

module.exports = {
  id: "flaadestyring/koerselsregnskab-skabelon",
  side: {
    slug: "koerselsregnskab-skabelon",
    navn: "Kørselsregnskab: skabelon",
    titel: "Kørselsregnskab skabelon: Skattestyrelsens krav",
    kort: "Se felterne i Skattestyrelsens skema til kørselsafregning, kravene til mål og formål, 20.000 km-grænsen og de tre underskrifter.",
    beskrivelse: "Brug Skattestyrelsens skema som skabelon til kørselsregnskab. Se felterne, et udfyldt eksempel, 20.000 km-grænsen og kravene til kørebog i firmabil.",
    manchet: "Skattestyrelsen kræver ingen bestemt blanket til kørselsregnskab, men har et skema til kørselsafregning og et udfyldt eksempel med bemærkninger. Her kan du se felterne, eksemplet og kravene, som Skattestyrelsen selv beskriver dem. Satserne står hos Skattestyrelsen.",
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Bestemt blanket", "Ikke krav", "Skattestyrelsen har et skema og et eksempel"],
        ["Satsen nedsættes", "over 20.000 km", "i kalenderåret"],
        ["Underskrifter", "3", "udarbejdet, godkendt og efterregnet"],
        ["Erhvervsmæssig kørsel", "de første 60 dage", "mellem bopæl og samme arbejdssted"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Ingen bestemt blanket",
        tekst: [
          "Der er ikke krav om en bestemt blanket, men Skattestyrelsen skriver, at det kan være en fordel at bruge samme systematik fra gang til gang. " + a(SKEMA, "Skattestyrelsen") + " har lagt skemaet til 2026 ud som pdf.",
          "Skemaet er dokumentationen for, at kørselsgodtgørelsen er skattefri. Det bruges, når en medarbejder kører erhvervsmæssigt i sin egen bil, og firmaet betaler godtgørelse pr. km. Kører medarbejderen i firmaets bil, kan der ikke udbetales skattefri godtgørelse for kørslen, fordi den ikke sker i egen bil. Kørebogen til en firmabil har andre krav, som står længere nede på siden.",
          "Skemaet fylder én side. Øverst står firmaet og medarbejderen, i midten en linje for hver tur, og nederst beregningen og de tre underskrifter. Et regneark eller et lønsystem kan bruge de samme felter."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Skattestyrelsens skema til kørselsafregning: virksomhed, medarbejder, en linje pr. tur, egen bil, årets kørsel og tre underskrifter."><rect x="10" y="8" width="380" height="226" class="tg-profil"/><text x="20" y="28" class="tg-fremhaev">Kørselsafregning</text><text x="20" y="46">CVR, navn, adresse</text><text x="210" y="46">CPR, navn, adresse</text><rect x="20" y="58" width="360" height="22" class="tg-kasse"/><text x="24" y="73">Dato</text><text x="74" y="73">Mål og delmål</text><text x="204" y="73">Formål</text><text x="304" y="73">Km</text><text x="344" y="73">Sats</text><line x1="70" y1="58" x2="70" y2="140" class="tg-skinne-tynd"/><line x1="200" y1="58" x2="200" y2="140" class="tg-skinne-tynd"/><line x1="300" y1="58" x2="300" y2="140" class="tg-skinne-tynd"/><line x1="340" y1="58" x2="340" y2="140" class="tg-skinne-tynd"/><line x1="20" y1="100" x2="380" y2="100" class="tg-skinne-tynd"/><line x1="20" y1="120" x2="380" y2="120" class="tg-skinne-tynd"/><line x1="20" y1="140" x2="380" y2="140" class="tg-skinne-tynd"/><text x="20" y="160">Reg.nr. på egen bil</text><text x="210" y="160">Årets km før og efter</text><line x1="20" y1="200" x2="130" y2="200" class="tg-gulvlinje"/><line x1="145" y1="200" x2="255" y2="200" class="tg-gulvlinje"/><line x1="270" y1="200" x2="380" y2="200" class="tg-gulvlinje"/><text x="20" y="216" class="tg-lille">Udarbejdet</text><text x="145" y="216" class="tg-lille">Godkendt</text><text x="270" y="216" class="tg-lille">Efterregnet</text></svg>`,
          tekst: "Skematisk. Opbygningen af Skattestyrelsens skema til kørselsafregning. Kilde: " + a(SKEMA, "Skattestyrelsen") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Felterne i skemaet",
        tekst: [
          "Skemaet har ti felter. De fleste udfyldes for hver tur, mens firmaets og medarbejderens oplysninger kun står én gang. Felterne for årets kørsel hidtil og herefter følger medarbejderen fra den ene afregning til den næste.",
          "CPR-nummeret står på skemaet, fordi godtgørelsen hører til den enkelte medarbejder. Registreringsnummeret på bilen viser, hvilken bil medarbejderen har brugt."
        ],
        tabel: {
          kolonner: ["Felt", "Indhold"],
          raekker: [
            ["Virksomhed", "CVR-nummer, navn og adresse"],
            ["Medarbejder", "CPR-nummer, navn og adresse"],
            ["Dato", "Datoen for den enkelte kørsel"],
            ["Kørselsmål og delmål", "Geografiske stedsangivelser"],
            ["Erhvervsmæssigt formål", "Arbejdsrelevant og mere præcist end \"arbejde\""],
            ["Antal km", "Pr. tur og for perioden"],
            ["Sats og beregning", "Årets sats, delt ved 20.000 km"],
            ["Egen bil", "Erklæring og registreringsnummer"],
            ["Årets kørsel", "Km hidtil og herefter, overført mellem afregninger"],
            ["Underskrifter", "Udarbejdet, godkendt og efterregnet"]
          ],
          note: "Kilder: " + a(SKEMA, "Skattestyrelsen: Skema til kørselsafregning 2026") + " og " + a(EKS, "eksempel med bemærkninger") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Det skal arbejdsgiveren kontrollere",
        tekst: [
          "Arbejdsgiveren skal kontrollere, at alle betingelserne for skattefri kørselsgodtgørelse er opfyldt. Seks oplysninger skal både stå på arbejdsgiverens bilag til bogføringen og være synligt kontrolleret, fx med en underskrift, et stempel eller en rettelse af en fejl.",
          "Kontrollen er en betingelse for skattefriheden. Medarbejderen skal give arbejdsgiveren alle de oplysninger, kontrollen kræver, og arbejdsgiveren skal også faktisk gennemføre kontrollen."
        ],
        punkter: [
          "Kørslens formål.",
          "Kørslens mål med eventuelle delmål.",
          "Datoen for kørslen.",
          "Antal kørte kilometer.",
          "Beregningen efter satserne.",
          "At kørslen er sket i medarbejderens eget køretøj."
        ],
        punkt_ikon: "ja",
        efter: [
          "Kilder: " + a(DOK, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse") + " og " + a(EKS, "eksemplets bemærkning 9") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Kørselsmål og delmål",
        tekst: [
          "Kørselsmålet er det sted, medarbejderen kører hen. Delmål er stederne undervejs, og de forklarer en længere rute, så der ikke er tvivl om antallet af kørte kilometer. Både mål og delmål skal være erhvervsmæssige.",
          "Skattestyrelsen kræver geografiske stedsangivelser med en entydig detaljeringsgrad. I praksis betyder det en adresse eller et sted, som en anden kan finde på et kort."
        ],
        punkter: [
          "<strong>Entydigt.</strong> Mål og delmål skal være geografiske stedsangivelser med entydig detaljeringsgrad.",
          "<strong>Ikke firmanavne.</strong> Et firmanavn eller en intern betegnelse er ikke entydigt.",
          "<strong>Bopæl.</strong> \"Bopæl\" og en vejnavn-angivelse er nok, når adressen på bopæl og fast arbejdssted fremgår af skemaet.",
          "<strong>Delmål.</strong> Delmålene forklarer en længere rute, så antallet af kørte kilometer ikke er i tvivl."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Kørselsmål", "Entydigt nok"],
          raekker: [
            ["Geografisk stedsangivelse", "ja"],
            ["Firmanavn", "nej"],
            ["Intern betegnelse", "nej"],
            ["\"Bopæl\" og vejnavn, når adresserne står i skemaet", "ja"]
          ],
          note: "Kilde: " + a(EKS, "Skattestyrelsens eksempel på kørselsafregning, bemærkning 3") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Skattestyrelsens udfyldte eksempel",
        tekst: [
          "Skattestyrelsens eksempel er fra september 2018 og handler om en medarbejder i et tagfirma. Firmaet, personerne og adresserne er opdigtet af Skattestyrelsen. Eksemplet viser seks ture, som tilsammen giver 542 km i perioden.",
          "Den længste linje er fra den 11. september 2018. Medarbejderen kører fra firmaet efter en trailer, læsser tegl, reparerer en bygning, afleverer traileren og henter beslag hos en smed. Turen er 122 km, og delmålene viser, hvorfor den er så lang.",
          "Formålet er skrevet med almindelige ord på hver linje, fx \"Afhentning af trailer af Trailerudlejningen\". Satserne i eksemplet er fra 2018, og Skattestyrelsen skriver, at man altid skal bruge satsen for det konkrete år."
        ],
        tabel: {
          kolonner: ["Dato", "Kørselsmål og delmål", "Formål", "Km"],
          raekker: [
            ["1/9 2018", "Svendsvej 1 – Tagvej 1 og retur", "Dag nr. 60 til samme arbejdssted", "87"],
            ["2/9 2018", "Tagvej 1 – Trailervej 1 og retur", "Afhentning af trailer af Trailerudlejningen", "24"],
            ["3/9 2018", "Tagvej 1 – Byggevej 2 – Trailervej 1 – Tagvej 1", "Transport af tegl til X-byggeri og aflevering af trailer", "89"],
            ["4/9 2018", "Svendsvej 1 – Byggevej 2 – Svendsvej 1", "Pålægning af tegl på X-byggeri", "138"],
            ["10/9 2018", "Tagvej 1 – Repavej 3 – Tagvej 1", "Opmåling og tilbud på reparation af Y-bygning", "82"],
            ["11/9 2018", "Tagvej 1 – Trailervej 1 – Tagvej 1 – Repavej 3 – Trailervej 1 – Smedevej 4 – Tagvej 1", "Hentet trailer, læsset tegl, repareret Y-bygning, afleveret trailer og hentet beslag hos smed", "122"]
          ],
          note: "Postnumre og byer er udeladt her. Kilde: " + a(EKS, "Skattestyrelsen: Eksempel på kørselsafregning") + ", set den 7. oktober 2026.",
          visning: "kort"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Turen den 11. september 2018 i Skattestyrelsens eksempel med syv stop: Tagvej 1, Trailervej 1, Tagvej 1, Repavej 3, Trailervej 1, Smedevej 4 og Tagvej 1, i alt 122 km."><line class="tg-skinne" x1="20" y1="80" x2="380" y2="80"/><g class="tg-nr"><circle cx="20" cy="80" r="9"/><text x="20" y="84" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="80" cy="80" r="9"/><text x="80" y="84" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="140" cy="80" r="9"/><text x="140" y="84" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="200" cy="80" r="9"/><text x="200" y="84" text-anchor="middle">4</text></g><g class="tg-nr"><circle cx="260" cy="80" r="9"/><text x="260" y="84" text-anchor="middle">5</text></g><g class="tg-nr"><circle cx="320" cy="80" r="9"/><text x="320" y="84" text-anchor="middle">6</text></g><g class="tg-nr"><circle cx="380" cy="80" r="9"/><text x="380" y="84" text-anchor="middle">7</text></g><text class="tg-fremhaev" x="8" y="58">Tagvej 1</text><text class="tg-lille" x="8" y="40">START</text><text class="tg-fremhaev" x="140" y="58" text-anchor="middle">Tagvej 1</text><text class="tg-lille" x="140" y="40" text-anchor="middle">LÆSSER TEGL</text><text class="tg-fremhaev" x="260" y="58" text-anchor="middle">Trailervej 1</text><text class="tg-lille" x="260" y="40" text-anchor="middle">AFLEVERER TRAILER</text><text class="tg-fremhaev" x="392" y="58" text-anchor="end">Tagvej 1</text><text class="tg-lille" x="392" y="40" text-anchor="end">SLUT</text><text class="tg-fremhaev" x="80" y="110" text-anchor="middle">Trailervej 1</text><text class="tg-lille" x="80" y="126" text-anchor="middle">HENTER TRAILER</text><text class="tg-fremhaev" x="200" y="110" text-anchor="middle">Repavej 3</text><text class="tg-lille" x="200" y="126" text-anchor="middle">REPARATION</text><text class="tg-fremhaev" x="320" y="110" text-anchor="middle">Smedevej 4</text><text class="tg-lille" x="320" y="126" text-anchor="middle">HENTER BESLAG</text><line class="tg-gulvlinje" x1="8" y1="148" x2="392" y2="148"/><text x="8" y="170">11. september 2018: 122 km på én linje</text><text class="tg-lille" x="8" y="190">DELMÅLENE FORKLARER, HVORFOR TUREN ER SÅ LANG</text></svg>`,
          tekst: "Skematisk. Stoppene på den længste tur i Skattestyrelsens eksempel. Kilde: " + a(EKS, "Skattestyrelsen: Eksempel på kørselsafregning") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Det erhvervsmæssige formål",
        tekst: [
          "Formålet skal være arbejdsrelevant og angives mere præcist end blot \"arbejde\". Skattestyrelsens eksempel bruger fx \"Afhentning af trailer\" og \"Opmåling og tilbud på reparation\".",
          "Et godt formål siger, hvad medarbejderen lavede, og hvor opgaven hørte til. I eksemplet står der \"Pålægning af tegl på X-byggeri\" og \"Transport af tegl til X-byggeri og aflevering af trailer\". Ved en tur med flere delmål kan formålet nævne opgaverne i den rækkefølge, de blev lavet.",
          "Formålet og målet hænger sammen. Står der \"Byggevej 2\" som mål og \"Pålægning af tegl på X-byggeri\" som formål, kan arbejdsgiveren se både hvor og hvorfor."
        ]
      },
      {
        overskrift: "20.000 km-grænsen",
        tekst: [
          "Kilometersatsen nedsættes for kørsel over 20.000 km i kalenderåret. Skemaet har derfor felter for årets kørsel hidtil og herefter, som overføres fra afregning til afregning. Satserne reguleres årligt og står på Skattestyrelsens side om satser.",
          "Skattestyrelsen skriver, at det ofte er nødvendigt at opgøre årets samlede kørsel løbende. Ellers kan firmaet komme til at udbetale for høje satser, og så mister godtgørelsen sin skattefrihed.",
          "Grænsen gælder for kørslen for den enkelte arbejdsgiver. Kører medarbejderen også for en anden arbejdsgiver, tæller den kørsel ikke med i opgørelsen."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Årets kørsel overføres fra afregning til afregning, og satsen nedsættes over 20.000 km."><rect class="tg-profil" x="10" y="10" width="110" height="64"/><text class="tg-fremhaev" x="20" y="30">Afregning 1</text><text x="20" y="48">km hidtil</text><text x="20" y="64">km herefter</text><rect class="tg-profil" x="145" y="10" width="110" height="64"/><text class="tg-fremhaev" x="155" y="30">Afregning 2</text><text x="155" y="48">km hidtil</text><text x="155" y="64">km herefter</text><rect class="tg-profil" x="280" y="10" width="110" height="64"/><text class="tg-fremhaev" x="290" y="30">Afregning 3</text><text x="290" y="48">km hidtil</text><text x="290" y="64">km herefter</text><path class="tg-pil" d="M110,60 L150,44 M143,41 L150,44 L145,50"/><path class="tg-pil" d="M245,60 L285,44 M278,41 L285,44 L280,50"/><rect class="tg-kasse" x="10" y="110" width="250" height="28"/><text x="20" y="128">sats op til 20.000 km</text><rect class="tg-modul" x="260" y="110" width="130" height="28"/><text class="tg-modul__tekst" x="270" y="128">NEDSAT SATS</text><line class="tg-skinne-tynd" x1="260" y1="98" x2="260" y2="148"/><text class="tg-fremhaev" x="260" y="94" text-anchor="middle">20.000 km</text><text class="tg-lille" x="10" y="168">KØRSEL I KALENDERÅRET</text></svg>`,
          tekst: "Skematisk. Årets kørsel føres videre fra afregning til afregning, og satsen nedsættes over 20.000 km. Kilder: " + a(SKEMA, "Skattestyrelsen: Skema til kørselsafregning 2026") + " og " + a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Sådan deles kilometerne ved grænsen",
        tekst: [
          "Skattestyrelsens eksempel viser, hvordan en afregning deles, når grænsen passeres midt i en periode. Medarbejderen har kørt 19.538 km tidligere i året, og perioden giver 542 km.",
          "Af de 542 km ligger 462 km under grænsen og afregnes med den høje sats. De sidste 80 km ligger over 20.000 km og afregnes med den nedsatte sats. Årets kørsel er herefter 20.080 km, og det tal overføres til næste afregning.",
          "Tallene er fra et eksempel, og satserne for det aktuelle år står hos Skattestyrelsen."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kørt tidligere i året", "19.538", "km"],
            ["Periodens kørsel", "542", "km"],
            ["Heraf over 20.000 km", "80", "km"],
            ["Årets kørsel herefter", "20.080", "km"]
          ],
          note: "Tallene er fra Skattestyrelsens eksempel fra september 2018. Kilde: " + a(EKS, "Skattestyrelsen: Eksempel på kørselsafregning") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Tre underskrifter",
        tekst: [
          "Oplysningerne skal fremgå af arbejdsgiverens bilag og være synligt kontrolleret, fx med underskrift, stempel eller fejlrettelse. Opfylder kørslen ikke betingelserne, er godtgørelsen A-indkomst.",
          "Skemaet har plads til tre underskrifter, og hver har en dato. I Skattestyrelsens eksempel er afregningen udarbejdet den 30. september, godkendt den 1. oktober og efterregnet den 2. oktober. Ved godkendelsen skriver skemaet \"kørselsleder eller arbejdsgiver\", og ved efterregningen skriver det \"bogholder eller arbejdsgiver\"."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Udarbejdet", "Medarbejderen udfylder og underskriver."],
            ["Godkendt", "Kørselsleder eller arbejdsgiver kontrollerer og underskriver."],
            ["Efterregnet", "Bogholderen regner efter og underskriver."]
          ]
        },
        efter: [
          "Kilder: " + a(DOK, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse") + ", " + a(SKEMA, "skemaet") + " og " + a(EKS, "eksemplet") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Egen bil",
        tekst: [
          "Egen bil omfatter også ægtefællens eller, ved fælles økonomi, samleverens bil. Råder husstanden også over fri bil, skal registreringsnummeret altid oplyses, så arbejdsgiveren kan kontrollere, at egen bil er brugt.",
          "Arbejdsgiveren kan normalt kun kontrollere det, hvis medarbejderen på afregningen erklærer, at egen bil er brugt. Registreringsnummeret er en ekstra dokumentation.",
          "En bil, som medarbejderen selv leaser, eller en delebil, hvor medarbejderen betaler de reelle udgifter, kan sidestilles med egen bil. Det samme gælder, når medarbejderen faktisk er medejer af bilen. De samme betingelser gælder for kørsel på egen motorcykel, knallert eller cykel, som har deres egne satser."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Bil", "Tæller som egen bil"],
          raekker: [
            ["Medarbejderens bil", "ja"],
            ["Ægtefællens bil", "ja"],
            ["Samleverens bil", "ved fælles økonomi"],
            ["Bil, medarbejderen selv leaser", "ja"],
            ["Delebil", "når medarbejderen betaler de reelle udgifter"]
          ],
          note: "Råder husstanden også over fri bil, skal registreringsnummeret altid oplyses. Kilder: " + a(EKS, "Skattestyrelsens eksempel, bemærkning 6 og 8") + " og " + a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Kun for de faktiske kilometer",
        tekst: [
          "Skattefri godtgørelse udbetales for det faktiske antal kilometer, medarbejderen har kørt. Et fast beløb hver måned, der udbetales uanset kilometertallet, kan ikke være skattefrit.",
          "I en sag ved Landsskatteretten havde en medarbejder fået lige store beløb a conto hver måned, og beløbet skulle medregnes i den skattepligtige indkomst. Kørsel, hvor medarbejderen ikke selv er med i bilen, kan heller ikke godtgøres.",
          "Kører medarbejderen med offentlig transport, kan firmaet ikke udbetale kørselsgodtgørelse, men kan dække udgiften efter regning. Udgifter til parkering ved den erhvervsmæssige kørsel kan også dækkes efter regning, når firmaet udbetaler godtgørelse."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Betaling", "Skattefri godtgørelse"],
          raekker: [
            ["Godtgørelse for de faktisk kørte km", "ja"],
            ["Fast beløb hver måned uanset km", "nej"],
            ["Kørsel, hvor medarbejderen ikke selv er med", "nej"],
            ["Offentlig transport", "nej, men dækkes efter regning"],
            ["Parkering ved erhvervskørsel", "dækkes efter regning"]
          ],
          note: "Kilde: " + a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2 Godtgørelse for erhvervsmæssig befordring") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "60-dages-reglen",
        tekst: [
          "De første 60 dage med kørsel mellem bopæl og samme arbejdssted er erhvervsmæssige. Arbejdsgiveren skal kontrollere, at reglen overholdes, men opgørelsen skal ikke fremgå af kørselsafregningen.",
          "Reglen betyder også, at kørsel mellem bopælen og et midlertidigt arbejdssted ikke kan godtgøres skattefrit efter de 60 dage. I Skattestyrelsens eksempel står der \"Dag nr. 60 til samme arbejdssted\" i formålsfeltet på den første tur, så dagen bagefter er det slut med godtgørelse for den strækning.",
          "Medarbejdere, der ikke kan få godtgørelse efter 60-dages-reglen, er henvist til fradraget for kørsel mellem bopæl og arbejdssted."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Dag 1 til 60", "Kørsel mellem bopæl og samme arbejdssted er erhvervsmæssig og kan godtgøres skattefrit."],
            ["Dag 60 i eksemplet", "Turen står i skemaet med formålet \"Dag nr. 60 til samme arbejdssted\"."],
            ["Fra dag 61", "Kørslen mellem bopæl og arbejdsstedet kan ikke længere godtgøres skattefrit. Medarbejderen kan bruge befordringsfradraget."]
          ],
          note: "Kilder: " + a(EKS, "Skattestyrelsens eksempel, bemærkning 5") + " og " + a(JVB, "Den juridiske vejledning C.A.4.3.3.3.2") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Når betingelserne ikke er opfyldt",
        tekst: [
          "Opfylder kørslen ikke betingelserne, er godtgørelsen skattepligtig A-indkomst for medarbejderen. Medarbejderen kan i stedet få kørselsfradrag.",
          "Den juridiske vejledning nævner en dom fra Østre Landsret, hvor arbejdsgiveren ikke havde kunnet føre den nødvendige kontrol. Kørebogen var mangelfuld, og kilometerstanden ved køb og salg af bilen passede ikke med det antal kilometer, der var udbetalt godtgørelse for."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Beslutningstræ. Står formål, mål, dato, km, beregning og egen bil på bilaget, og har arbejdsgiveren kontrolleret det synligt, er godtgørelsen skattefri. Ellers er den A-indkomst, og medarbejderen kan få kørselsfradrag."><defs><marker id="pil-koerselsregnskab-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="72"/><text x="200" y="28" text-anchor="middle">Står formål, mål, dato, km, beregning</text><text x="200" y="46" text-anchor="middle">og egen bil på bilaget, og har</text><text class="tg-fremhaev" x="200" y="64" text-anchor="middle">arbejdsgiveren kontrolleret det synligt?</text><line class="tg-pil" x1="130" y1="78" x2="96" y2="116" marker-end="url(#pil-koerselsregnskab-1)"/><line class="tg-pil" x1="270" y1="78" x2="304" y2="116" marker-end="url(#pil-koerselsregnskab-1)"/><text x="96" y="100" text-anchor="end">Ja</text><text x="304" y="100">Nej</text><rect class="tg-modul" x="20" y="120" width="152" height="40"/><text class="tg-modul__tekst" x="96" y="144" text-anchor="middle">SKATTEFRI</text><rect class="tg-kasse" x="228" y="120" width="152" height="40"/><text x="304" y="144" text-anchor="middle">A-indkomst</text><line class="tg-skinne-tynd" x1="304" y1="160" x2="304" y2="178"/><rect class="tg-kasse" x="204" y="178" width="192" height="50"/><text x="300" y="199" text-anchor="middle">Medarbejderen kan</text><text x="300" y="217" text-anchor="middle">få kørselsfradrag</text></svg>`,
          tekst: "Skematisk. Betingelserne for skattefri kørselsgodtgørelse. Kilde: " + a(DOK, "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Kørebog til firmabil",
        tekst: [
          "Skal kørebogen vise, at en firmabil ved bopælen ikke bruges privat, skal den indeholde noget andet. Den skal føres dagligt med kilometertællerens stand ved dagens start og slut, dato, fordeling mellem privat og erhverv og bestemmelsessteder (" + a(JV, "Den juridiske vejledning C.A.5.14.1.11") + "). Du kan læse om elektroniske løsninger under <a href=\"/til-varebilen/flaadestyring/elektronisk-koerebog/\">elektronisk kørebog</a>.",
          "Holder firmabilen ved hjemmet uden for arbejdstiden, er der en formodning for, at den bliver brugt privat, også selvom der er en aftale om det modsatte. Viser daglige registreringer kun erhvervsmæssig kørsel, har den ansatte normalt løftet bevisbyrden for, at bilen ikke bruges privat.",
          "Som minimum skal der være en skriftlig aftale om, at firmabilen ikke må bruges privat. Arbejdsgiveren skal sikre, at aftalen bliver overholdt, og kontrollere, at fx udgifterne til benzin, el og service svarer til den erhvervsmæssige kørsel. Regler for varebiler på gule plader står i <a href=\"/haandbogen/tage-varebilen-med-hjem/\">tage varebilen med hjem</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Kørselsafregning og kørebog side om side. Kørselsafregningen bruges til egen bil og har dato, mål, formål, km, beregning og tre underskrifter. Kørebogen bruges til firmabil og føres dagligt med kilometertællerens stand, dato, privat og erhverv og bestemmelsessteder."><rect class="tg-kasse" x="4" y="8" width="190" height="200"/><text class="tg-fremhaev" x="16" y="30">Kørselsafregning</text><text class="tg-lille" x="16" y="48">EGEN BIL</text><text x="16" y="74">pr. tur</text><text x="16" y="94">dato, mål og delmål</text><text x="16" y="114">formål og km</text><text x="16" y="134">sats og beregning</text><text x="16" y="154">egen bil og reg.nr.</text><text x="16" y="174">tre underskrifter</text><rect class="tg-modul" x="206" y="8" width="190" height="200"/><text class="tg-modul__tekst" x="218" y="30">Kørebog</text><text class="tg-modul__tekst" x="218" y="48">FIRMABIL</text><text class="tg-modul__tekst" x="218" y="74">hver dag</text><text class="tg-modul__tekst" x="218" y="94">km ved start og slut</text><text class="tg-modul__tekst" x="218" y="114">dato</text><text class="tg-modul__tekst" x="218" y="134">privat og erhverv</text><text class="tg-modul__tekst" x="218" y="154">bestemmelsessteder</text><text class="tg-lille" x="99" y="234" text-anchor="middle">SKATTEFRI GODTGØRELSE</text><text class="tg-lille" x="301" y="234" text-anchor="middle">INGEN PRIVAT KØRSEL</text></svg>`,
          tekst: "Skematisk. Forskellen på en kørselsafregning til egen bil og en kørebog til firmabil. Kilder: " + a(SKEMA, "Skattestyrelsen: Skema til kørselsafregning 2026") + " og " + a(JV, "Den juridiske vejledning C.A.5.14.1.11") + ", set den 7. oktober 2026."
        },
        efter: [
          "Den juridiske vejledning nævner også en dom, hvor kørselsoversigter, der var lavet bagefter, ikke kunne løfte bevisbyrden for, at bilen ikke havde været til rådighed privat."
        ]
      }
    ],
    spoergsmaal_titel: "Det skal lønsystemet kunne",
    spoergsmaal_manchet: "Så kan kørselsafregningen bogføres med de rigtige oplysninger.",
    spoergsmaal: [
      "Registrere dato, mål, delmål, formål og km pr. tur.",
      "Opgøre årets samlede kørsel pr. medarbejder løbende.",
      "Skifte sats ved 20.000 km i kalenderåret.",
      "Bruge årets satser fra Skattestyrelsen og skifte dem ved årsskiftet.",
      "Gemme registreringsnummer og erklæring om egen bil.",
      "Vise arbejdsgiverens kontrol, fx godkendelse med navn og dato.",
      "Holde styr på dagene til samme arbejdssted, så 60-dages-reglen kan kontrolleres."
    ],
    faq: [
      ["Findes der en officiel skabelon til kørselsregnskab?", "Skattestyrelsen har et skema til kørselsafregning og et udfyldt eksempel med bemærkninger. Der er ikke krav om at bruge en bestemt blanket."],
      ["Hvad skal stå i et kørselsregnskab?", "Der skal stå dato, kørselsmål og delmål, erhvervsmæssigt formål, antal km, sats og beregning, oplysning om egen bil og virksomhedens og medarbejderens navn, adresse og CVR- eller CPR-nummer."],
      ["Må man skrive firmanavnet som kørselsmål?", "Nej. Skattestyrelsen skriver, at et firmanavn eller en intern betegnelse ikke er entydigt. Målet skal være en geografisk stedsangivelse."],
      ["Skal kørselsregnskabet underskrives?", "Arbejdsgiveren skal synligt kontrollere oplysningerne, fx med underskrift, stempel eller fejlrettelse. Skattestyrelsens skema har felter til udarbejdet, godkendt og efterregnet."],
      ["Hvad sker der ved kørsel over 20.000 km?", "Kilometersatsen nedsættes for kørslen over 20.000 km i kalenderåret. Satserne står hos Skattestyrelsen."],
      ["Kan man udbetale et fast beløb i kørselsgodtgørelse hver måned?", "Ikke skattefrit. Godtgørelsen skal udbetales for det faktiske antal kørte kilometer, og faste månedlige beløb uanset kilometertallet er skattepligtige."],
      ["Tæller en leaset bil som egen bil?", "Ja, når medarbejderen selv leaser bilen. En delebil kan også tælle, når medarbejderen betaler de reelle udgifter."],
      ["Hvad er forskellen på en kørselsafregning og en kørebog?", "Kørselsafregningen dokumenterer skattefri godtgørelse for kørsel i egen bil. Kørebogen til en firmabil føres dagligt og skal vise, at bilen ikke bruges privat."]
    ],
    kilder: [
      { navn: "Skattestyrelsen: Dokumentation og kontrol af kørselsgodtgørelse", url: DOK, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Skema til kørselsafregning 2026 (pdf)", url: SKEMA, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Eksempel på kørselsafregning med bemærkninger (pdf)", url: EKS, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.5.14.1.11 Vurderingen af, hvornår en bil er til rådighed for privat kørsel", url: JV, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: C.A.4.3.3.3.2 Godtgørelse for erhvervsmæssig befordring", url: JVB, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Skattestyrelsen: arbejdsgiveren skal kontrollere og have på bilaget, synligt kontrolleret, kørslens formål, kørslens mål med eventuelle delmål, dato, antal kørte kilometer, beregning efter satser og at kørslen er i medarbejderens eget køretøj; opfylder kørslen ikke betingelserne, er godtgørelsen A-indkomst, og medarbejderen kan i stedet få kørselsfradrag.", DOK],
    ["Skattestyrelsens eksempel, bemærkning 9: det er en betingelse for skattefri godtgørelse, at arbejdsgiveren kontrollerer udbetalingerne; lønmodtageren skal give arbejdsgiveren alle nødvendige oplysninger, og arbejdsgiveren skal gennemføre kontrollen.", EKS],
    ["Skattestyrelsens eksempel, bemærkning 3: både kørselsmål og delmål skal være erhvervsmæssige.", EKS],
    ["Skattestyrelsens eksempel er fra september 2018 (tagfirma, seks ture, 542 km i perioden); turen den 11/9 2018 er 122 km med delmålene Tagvej 1, Trailervej 1, Tagvej 1, Repavej 3, Trailervej 1, Smedevej 4, Tagvej 1 og formålet 'Hentet trailer, læsset tegl, repareret Y-bygning, afleveret trailer og hentet beslag hos smed'; de øvrige ture er 87, 24, 89, 138 og 82 km.", EKS],
    ["Skattestyrelsens eksempel, bemærkning 1: de maksimale satser for 2018 er brugt, og man skal altid bruge satsen for det konkrete år.", EKS],
    ["Skattestyrelsens eksempel, bemærkning 7: det vil ofte være nødvendigt med en løbende opgørelse af årets samlede kørsel for at undgå udbetaling med for høje satser og dermed tab af skattefriheden.", EKS],
    ["Den juridiske vejledning C.A.4.3.3.3.2: ved opgørelsen af den samlede årlige kørsel skal der ikke tages hensyn til lønmodtagerens kørsel for en anden arbejdsgiver; grænsen på 20.000 km gælder kun for den enkelte arbejdsgiver.", JVB],
    ["Skattestyrelsens eksempel: kalenderårets kørsel hidtil 19.538 km, periodens kørsel 542 km, heraf 462 km under og 80 km over 20.000 km, kalenderårets kørsel herefter 20.080 km.", EKS],
    ["Skattestyrelsens eksempel: udarbejdet den 30/9 2018, godkendt den 1/10 2018 og efterregnet den 2/10 2018; skemaet har underskriftsfelterne medarbejder, kørselsleder/arbejdsgiver og bogholder/arbejdsgiver.", EKS],
    ["Skattestyrelsens eksempel, bemærkning 6: arbejdsgiverens kontrol af egen bil vil normalt kun være mulig, hvis lønmodtageren på kørselsafregningen erklærer, at egen bil er anvendt, og eventuelt oplyser registreringsnummeret.", EKS],
    ["Den juridiske vejledning C.A.4.3.3.3.2: afholder lønmodtageren de reelle, faktiske udgifter ved en delebilordning eller selv leaser en bil, kan kørslen sidestilles med kørsel i egen bil; det samme gælder faktisk medejerskab.", JVB],
    ["Skattestyrelsens eksempel, bemærkning 8: erhvervsmæssig kørsel på egen motorcykel, knallert, EU-knallert eller cykel godtgøres efter egne satser med nøjagtig de samme betingelser som ved egen bil.", EKS],
    ["Den juridiske vejledning C.A.4.3.3.3.2: godtgørelsen skal udbetales for det faktiske antal kilometer; faste månedlige beløb uafhængigt af kilometertallet kan ikke udbetales skattefrit (TfS 1999, 928 LSR: lige store månedlige a conto-beløb skulle medregnes til den skattepligtige indkomst); kørsel, hvor den skattepligtige ikke selv er med i bilen, kan ikke godtgøres.", JVB],
    ["Den juridiske vejledning C.A.4.3.3.3.2: ved offentlig transport kan der ikke udbetales befordringsgodtgørelse, men udgifterne kan dækkes efter regning; parkering ved erhvervsmæssig kørsel kan dækkes som udlæg efter regning, når der udbetales hel eller delvis skattefri godtgørelse.", JVB],
    ["Skattestyrelsens eksempel, bemærkning 5: kørsel mellem bopæl og det midlertidige arbejdssted kan efter 60 dage ikke kompenseres med skattefri kørselsgodtgørelse; eksemplets tur den 1/9 2018 har formålet 'Dag nr. 60 til samme arbejdssted'.", EKS],
    ["Den juridiske vejledning C.A.4.3.3.3.2: lønmodtagere, der ikke får skattefri godtgørelse på grund af 60-dages-reglen, er henvist til fradraget for befordring mellem bopæl og arbejdssted (LL § 9 C).", JVB],
    ["Den juridiske vejledning C.A.4.3.3.3.2 (SKM2014.183.ØLR): det var ikke godtgjort, at arbejdsgiveren havde kunnet føre den fornødne kontrol, da kørebogen var mangelfuld, og kilometerstanden ved bilens køb og salg ikke passede med de kilometer, der var udbetalt godtgørelse for.", JVB],
    ["Den juridiske vejledning C.A.5.14.1.11: holder firmabilen ved hjemmet uden for arbejdstiden, er der en formodning for privat brug uanset en aftale om det modsatte; daglige registreringer, der udelukkende viser erhvervsmæssig kørsel, løfter normalt bevisbyrden.", JV],
    ["Den juridiske vejledning C.A.5.14.1.11: som minimum kræves en skriftlig aftale om, at firmabilen ikke må bruges privat; arbejdsgiveren skal sikre, at aftalen overholdes, og kontrollere, at fx udgifter til benzin og/eller el og service svarer til den erhvervsmæssige kørsel.", JV],
    ["Den juridiske vejledning C.A.5.14.1.11: i en landsretssag kunne bevisbyrden ikke løftes ved kørselsoversigter, der var udarbejdet efterfølgende.", JV]
  ]
};
