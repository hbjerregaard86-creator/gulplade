// Takograf-udstyr: ny udgave til tilvalg-ny.json (07-10-2026).
var FSTYR = "https://www.fstyr.dk/erhverv/gods-bus-og-varebil/takograf";
var FSTYR_KORT = "https://www.fstyr.dk/erhverv/gods-bus-og-varebil/takograf/ansoeg-om-takografkort-mv";
var FSTYR_AUT = "https://www.fstyr.dk/erhverv/gods-bus-og-varebil/takograf/vaerkstedsautorisation";
var FSTYR_SW = "https://www.fstyr.dk/nyheder/2026/aug/obligatoriske-sikkerhedsopdateringer-af-takografer";
var FSTYR_JUL = "https://www.fstyr.dk/nyheder/2026/jul/nye-regler-for-varebiler";
var FSTYR_MAR = "https://www.fstyr.dk/nyheder/2026/mar/varebiler-bliver-en-del-af-koere-og-hviletidskontrollen";
var EU165 = "https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32014R0165";
var EU581 = "https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32010R0581";
var EU561 = "https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:02006R0561-20240522";
var ABAX = "https://www.abax.com/da/blog/nye-eu-krav-til-fartskrivere-i-varebiler-fra-1-juli-2026";
var TACHO = "https://tachografservice.dk/";
var FC = "https://fleetcomplete.dk/flaadestyring/";

function a(url, navn) { return '<a href="' + url + '" rel="noopener">' + navn + '</a>'; }

module.exports = {
  id: "flaadestyring/takograf-udstyr",
  side: {
    slug: "takograf-udstyr",
    navn: "Takograf-udstyr",
    titel: "Takograf i varebil: montering og pris",
    kort: "Montering af takograf i varebilen: hvem der må montere den, hvad den koster, og hvilke kort, eftersyn og downloads der følger med.",
    beskrivelse: "Takograf i varebilen: hvem der må montere den, hvad en G2V2 koster med montering, kort til 350 kr., eftersyn hvert andet år og fristerne for download.",
    manchet: "Skal varebilen have takograf, monteres den af et værksted med autorisation fra Færdselsstyrelsen. Her kan du se hele forløbet fra montering til download af data, med udstyret, prisen, kortene, eftersynet og fristerne. Hvem der er omfattet, står i <a href=\"/haandbogen/takograf-paa-varebil/\">skal din varebil have takograf</a>.",
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Pris med montering", "15.000–25.000 kr.", "typisk ifølge ABAX, moms ikke angivet"],
        ["Takografkort", "350 kr.", "pr. kort hos Færdselsstyrelsen"],
        ["Eftersyn", "Hvert 2. år", "på et autoriseret værksted"],
        ["G2V2-krav", "1. juli 2026", "varebiler i international godskørsel"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvem skal have takograf",
        tekst: [
          "Fra 1. juli 2026 skal varebiler over 2,5 ton, der kører international godstransport, have takograf og følge reglerne om køre- og hviletid. Kravet gælder, når bilen kører gods for fremmed regning, eller når kørslen er førerens hovedaktivitet. Færdselsstyrelsen vurderer, at en medarbejder må bruge op til 30 % af sin månedlige arbejdstid på at køre, før kørslen er hovedaktiviteten.",
          "Biler mellem 2,5 og 3,5 ton er undtaget, når de kører virksomhedens eller førerens egne varer uden betaling, og kørslen ikke er førerens hovedaktivitet. Kører bilen kun i Danmark, er der ingen nye regler. Transit er heller ikke omfattet, fx når bilen kører gennem Sverige til færgen til Bornholm uden at læsse af eller på.",
          "Kører en omfattet bil både i Danmark og i udlandet, registrerer føreren den danske kørsel som \"andet arbejde\" i takografen. Hele gennemgangen af reglerne står i <a href=\"/haandbogen/takograf-paa-varebil/\">skal din varebil have takograf</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 284" role="img" aria-label="Beslutningstræ med fire spørgsmål om international godskørsel, totalvægt, fremmed regning og kørsel som hovedaktivitet, der viser, hvornår en varebil skal have takograf."><defs><marker id="pil-takograf-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="8" width="230" height="32"/><text x="125" y="28" text-anchor="middle">International godskørsel?</text><rect class="tg-kasse" x="285" y="8" width="110" height="32"/><text x="340" y="28" text-anchor="middle">Intet krav</text><rect class="tg-kasse" x="10" y="64" width="230" height="32"/><text x="125" y="84" text-anchor="middle">Over 2,5 t tilladt totalvægt?</text><rect class="tg-kasse" x="285" y="64" width="110" height="32"/><text x="340" y="84" text-anchor="middle">Intet krav</text><rect class="tg-kasse" x="10" y="120" width="230" height="32"/><text x="125" y="140" text-anchor="middle">Gods for fremmed regning?</text><rect class="tg-modul" x="285" y="120" width="110" height="32"/><text class="tg-modul__tekst" x="340" y="140" text-anchor="middle">TAKOGRAF</text><rect class="tg-kasse" x="10" y="176" width="230" height="44"/><text x="125" y="194" text-anchor="middle">Kørsel over 30 % af</text><text x="125" y="210" text-anchor="middle">arbejdstiden pr. måned?</text><rect class="tg-modul" x="285" y="182" width="110" height="32"/><text class="tg-modul__tekst" x="340" y="202" text-anchor="middle">TAKOGRAF</text><rect class="tg-kasse" x="10" y="244" width="230" height="32"/><text x="125" y="264" text-anchor="middle">Undtaget op til 3,5 t</text><g class="tg-maal"><line x1="240" y1="24" x2="283" y2="24" marker-end="url(#pil-takograf-1)"/><line x1="240" y1="80" x2="283" y2="80" marker-end="url(#pil-takograf-1)"/><line x1="240" y1="136" x2="283" y2="136" marker-end="url(#pil-takograf-1)"/><line x1="240" y1="198" x2="283" y2="198" marker-end="url(#pil-takograf-1)"/><line x1="125" y1="40" x2="125" y2="62" marker-end="url(#pil-takograf-1)"/><line x1="125" y1="96" x2="125" y2="118" marker-end="url(#pil-takograf-1)"/><line x1="125" y1="152" x2="125" y2="174" marker-end="url(#pil-takograf-1)"/><line x1="125" y1="220" x2="125" y2="242" marker-end="url(#pil-takograf-1)"/></g><text class="tg-lille" x="262" y="18" text-anchor="middle">NEJ</text><text class="tg-lille" x="262" y="74" text-anchor="middle">NEJ</text><text class="tg-lille" x="262" y="130" text-anchor="middle">JA</text><text class="tg-lille" x="262" y="192" text-anchor="middle">JA</text><text class="tg-lille" x="133" y="55">JA</text><text class="tg-lille" x="133" y="111">JA</text><text class="tg-lille" x="133" y="167">NEJ</text><text class="tg-lille" x="133" y="235">NEJ</text></svg>`,
          tekst: "Skematisk. Totalvægten regnes med påhængsvogn, og undtagelsen nederst gælder kørsel for virksomhedens eller førerens egen regning. Kilde: " + a(FSTYR_JUL, "Færdselsstyrelsen: Nye regler for varebiler") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Hvem der må montere",
        tekst: [
          "Installatører, værksteder og bilfabrikanter, der installerer, efterser, kontrollerer og reparerer takografer, skal have autorisation fra Færdselsstyrelsen og være etableret i Danmark. Listen over de autoriserede værksteder står på Færdselsstyrelsens side om takograf.",
          "Værkstedet skal have uddannet personale og det udstyr, der skal bruges til afprøvningerne. Færdselsstyrelsen besøger værkstedet og skriver en rapport, som dokumenterer kravene og værkstedets kvalitetsledelsessystem. Mindst hvert andet år gennemgår en godkendt tilsynsvirksomhed værkstedets procedurer, og Færdselsstyrelsen laver desuden uanmeldte kontrolbesøg hvert år."
        ],
        punkter: [
          "<strong>A-autorisation.</strong> Analoge takografer.",
          "<strong>I-autorisation.</strong> Digitale og intelligente takografer. Siden 1. juli 2023 gælder den alle fabrikater.",
          "<strong>Værkstedskort.</strong> Udstedes til værkstedet og personificeres til den uddannede mekaniker, der udfører arbejdet."
        ],
        efter: [
          "Kilde: " + a(FSTYR_AUT, "Færdselsstyrelsen: Værkstedsautorisation") + ", set den 7. oktober 2026. Værkstedet skal gemme kontrolrapporter i 2 år."
        ]
      },
      {
        overskrift: "Den intelligente takografs dele",
        tekst: [
          "Den intelligente takograf er anden generation af den digitale takograf. Den virker som den digitale, men har forbindelse til satellitnavigation, udstyr til fjernaflæsning og mulighed for at blive koblet til intelligente transportsystemer. Data gemmes både i takografen og på førerkortet.",
          "For virksomheden betyder delene, at takografen selv kan dokumentere, hvor bilen startede og sluttede dagen, og at en kontrol kan begynde, før bilen holder ind."
        ],
        punkter: [
          "<strong>GNSS.</strong> GNSS-modtageren gemmer bilens position ved start og slut og med faste intervaller under kørslen. Signalet bruges også til at afgøre, om bilen kører, og til at holde uret korrekt.",
          "<strong>DSRC.</strong> DSRC er udstyr til tidlig fjernaflæsning, så myndighederne kan se data uden at standse bilen.",
          "<strong>Førerkort.</strong> Førerkortet registrerer alle førerens aktiviteter.",
          "<strong>Virksomhedskort.</strong> Virksomhedskortet bruges, når virksomheden overfører, gemmer og sikrer data."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Intelligent takograf med GNSS-antenne, DSRC til fjernaflæsning, førerkort og download med virksomhedskort"><defs><marker id="pil-flaadestyring-5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="140" y="30" width="40" height="16" class="tg-kasse"/><rect x="230" y="30" width="40" height="16" class="tg-kasse"/><line x1="160" y1="46" x2="160" y2="80" class="tg-skinne-tynd"/><line x1="250" y1="46" x2="250" y2="80" class="tg-skinne-tynd"/><rect x="120" y="80" width="160" height="70" rx="6" class="tg-rum"/><text x="200" y="102" text-anchor="middle" class="tg-fremhaev">Takograf</text><rect x="140" y="118" width="60" height="8" class="tg-modul"/><rect x="300" y="160" width="85" height="30" class="tg-kasse"/><text x="342" y="180" text-anchor="middle">Arkiv</text><g class="tg-maal"><line x1="280" y1="135" x2="315" y2="158" marker-end="url(#pil-flaadestyring-5)"/></g><text x="288" y="208" class="tg-lille">virksomhedskort</text><g class="tg-call"><line x1="140" y1="38" x2="90" y2="38"/><circle cx="140" cy="38" r="3"/><text x="10" y="34" class="tg-call__navn">GNSS</text><text x="10" y="48" class="tg-call__under">position og ur</text></g><g class="tg-call"><line x1="270" y1="38" x2="296" y2="38"/><circle cx="270" cy="38" r="3"/><text x="300" y="34" class="tg-call__navn">DSRC</text><text x="300" y="48" class="tg-call__under">fjernaflæsning</text></g><g class="tg-call"><line x1="170" y1="122" x2="100" y2="170"/><circle cx="170" cy="122" r="3"/><text x="10" y="176" class="tg-call__navn">Førerkort</text><text x="10" y="190" class="tg-call__under">førerens aktiviteter</text></g></svg>`,
          tekst: "Intelligent takograf. Skematisk. Kilde: " + a(FSTYR, "Færdselsstyrelsen") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "Hvilken takograf bilen har",
        tekst: [
          "Versionen følger datoen for bilens første registrering. Den digitale takograf kom i tre versioner mellem 2006 og 2019, og den intelligente er kommet i to. Varebiler i international godskørsel skal have G2V2 fra 1. juli 2026.",
          "En analog takograf kan skiftes til en digital på et værksted med D-autorisation, og en digital kan skiftes til en intelligent på et værksted med I-autorisation. Skal en brugt varebil med en ældre takograf køre internationalt, er udskiftningen derfor et værkstedsjob som en ny montering."
        ],
        tabel: {
          kolonner: ["Takograf", "Bil registreret første gang"],
          raekker: [
            ["Analog", "Før 1. maj 2006"],
            ["Digital, version 1–3", "1. maj 2006 til 14. juni 2019"],
            ["Intelligent, version 1 (G2V1)", "15. juni 2019 til 20. august 2023"],
            ["Intelligent, version 2 (G2V2)", "Fra 21. august 2023"]
          ],
          note: "Kilde: " + a(FSTYR, "Færdselsstyrelsen: Takograf") + ", set den 4. oktober 2026.",
          visning: "skjul"
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før 1. maj 2006", "Bilen har en analog takograf."],
            ["1. maj 2006 til 30. september 2011", "Bilen har en digital takograf, version 1."],
            ["1. oktober 2011 til 30. september 2012", "Bilen har en digital takograf, version 2."],
            ["1. oktober 2012 til 14. juni 2019", "Bilen har en digital takograf, version 3."],
            ["15. juni 2019 til 20. august 2023", "Bilen har en intelligent takograf, version 1 (G2V1)."],
            ["Fra 21. august 2023", "Bilen har en intelligent takograf, version 2 (G2V2)."]
          ],
          note: "Datoerne gælder bilens første registrering. Kilde: " + a(FSTYR, "Færdselsstyrelsen: Takograf") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Fra bestilling til første tur",
        tekst: [
          "Selve monteringen er et værkstedsarbejde, men virksomheden skal selv have kortene klar. Har virksomheden ikke biler med takograf i forvejen, skal den bestille et virksomhedskort, fordi kortet bruges til at registrere takografen og bilen. Hver chauffør skal have sit eget førerkort.",
          "Værkstedet kontrollerer, at takografen fungerer, og plomberer den, så ingen kan forvanske de registrerede data. Til sidst sætter værkstedet en installationsplade i bilen, som viser, at installationen følger reglerne. Pladen skal sidde synligt og være let at komme til."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Kortene", "Virksomheden søger virksomhedskort på virk.dk, og chaufførerne søger førerkort på borger.dk."],
            ["Værkstedet", "Bilen bookes hos et værksted med I-autorisation fra Færdselsstyrelsen."],
            ["Monteringen", "Værkstedet monterer, kontrollerer og plomberer takografen og sætter installationspladen i."],
            ["Virksomhedskortet", "Kortet registrerer takografen og bilen, så data hører til virksomheden."],
            ["Downloads", "Virksomheden henter data fra takografen og førerkortene med faste mellemrum."]
          ]
        },
        efter: [
          "Kilder: " + a(FSTYR_MAR, "Færdselsstyrelsen: Varebiler bliver en del af køre- og hviletidskontrollen") + " og " + a(EU165, "takografforordningen (EU) 165/2014, artikel 22") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Plomber og installationsplade",
        tekst: [
          "Takografens dele og de forbindelser, der kan angribes, er plomberet, også forbindelsen mellem bevægelsessensoren og gearkassen. Ifølge takografforordningen må en plombe kun brydes af et autoriseret værksted, af en kontrolmedarbejder eller ved en reparation af bilen, der berører plomberingen.",
          "Brydes en plombe ved en reparation, skal der ligge en skriftlig erklæring i bilen med dato, tidspunkt og grund. Et autoriseret værksted skal sætte nye plomber uden unødig forsinkelse og senest syv dage efter, og først skal værkstedet kontrollere og kalibrere takografen. Bryder en reparation af fx gearkassen plomben, skal bilen altså også forbi et autoriseret værksted inden for syv dage."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Varebil set fra siden med takografen i instrumentbrættet, bevægelsessensoren ved gearkassen og installationspladen i dørrammen. Ledningen mellem sensor og takograf er plomberet."><g transform="translate(60,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><line class="tg-skinne-tynd" x1="232" y1="202" x2="256" y2="135"/><rect class="tg-modul" x="246" y="126" width="24" height="9"/><rect class="tg-modul" x="218" y="200" width="16" height="7"/><rect class="tg-kuffert" x="214" y="146" width="12" height="16"/><g class="tg-call"><line x1="258" y1="126" x2="330" y2="58"/><circle cx="258" cy="126" r="3"/><text class="tg-call__navn" x="318" y="36">Takograf</text><text class="tg-call__under" x="318" y="50">plomberet</text></g><g class="tg-call"><line x1="220" y1="154" x2="170" y2="58"/><circle cx="220" cy="154" r="3"/><text class="tg-call__navn" x="40" y="36">Installationsplade</text><text class="tg-call__under" x="40" y="50">synlig og let tilgængelig</text></g><g class="tg-call"><line x1="226" y1="204" x2="180" y2="234"/><circle cx="226" cy="204" r="3"/><text class="tg-call__navn" x="40" y="240">Bevægelsessensor</text><text class="tg-call__under" x="40" y="254">ved gearkassen, plomberet</text></g></svg>`,
          tekst: "Skematisk. Placeringerne er eksempler og varierer fra bil til bil. Kilde: " + a(EU165, "takografforordningen (EU) 165/2014, artikel 22") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Hvad det koster",
        tekst: [
          "ABAX oplyser, at montering af en G2V2-takograf i en varebil med den lovpligtige første kalibrering typisk koster 15.000–25.000 kr. afhængigt af bilmodellen (moms ikke angivet). Dertil kommer det periodiske eftersyn hvert andet år på et autoriseret værksted.",
          "Færdselsstyrelsen tager 350 kr. for et takografkort, og prisen er den samme for førerkort, virksomhedskort og værkstedskort. Et eksempel med tre chauffører giver fire kort, og de koster 4 × 350 kr. = 1.400 kr.",
          "Værkstederne giver pris på tilbud ud fra bilens model. Prisen afhænger også af, om bilen er forberedt til takograf fra fabrikken, så det er en oplysning, værkstedet skal have med i forespørgslen."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["G2V2 med montering og første kalibrering", "15.000–25.000", "kr."],
            ["Takografkort", "350", "kr. pr. kort"],
            ["Periodisk eftersyn", "hvert 2.", "år"]
          ],
          note: "ABAX oplyser monteringsprisen som typisk, afhængigt af bilmodellen, og angiver ikke moms. Kortprisen er fra " + a(FSTYR_KORT, "Færdselsstyrelsen") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Tre kort",
        tekst: [
          "Takografen kender tre slags kort. Førerkortet er personligt, og en fører må kun have ét gyldigt førerkort og må ikke bruge et kort, der er beskadiget eller udløbet. Ifølge takografforordningen må et førerkort højst være gyldigt i fem år og et værkstedskort højst ét år.",
          "Virksomhedskortet sikrer, at data i takografen registreres som virksomhedens, og det bruges, når virksomheden overfører, gemmer og sikrer data. Har virksomheden et værkstedskort, kræver et virksomhedskort dispensation fra Færdselsstyrelsen."
        ],
        kort: [
          ["Førerkort", "Til chaufføren personligt. Søges på borger.dk med MitID, foto af kørekortet og et portrætfoto."],
          ["Virksomhedskort", "Til virksomheden, så data i takografen registreres som virksomhedens. Søges på virk.dk."],
          ["Værkstedskort", "Til det autoriserede værksted, der servicerer takografen. Søges på virk.dk."]
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Førerkort gyldigt", "højst 5", "år"],
            ["Værkstedskort gyldigt", "højst 1", "år"],
            ["Førerkort udstedes", "senest 1", "måned efter ansøgning"]
          ],
          note: "Kilde: " + a(EU165, "takografforordningen (EU) 165/2014, artikel 25–27") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Ansøgning og levering af kort",
        tekst: [
          "Færdselsstyrelsens fysiske takografekspeditioner lukkede 1. oktober 2025, og kortene søges digitalt. Kortene sendes med posten, og Færdselsstyrelsen skriver, at leveringen af fysisk post med DAO er uregelmæssig.",
          "Til en digital ansøgning om førerkort skal chaufføren bruge MitID, et foto af begge sider af kørekortet og et portrætfoto. Portrætfotoet skal være taget lige forfra mod en lys baggrund uden skygger, og ansigtet skal være jævnt belyst. Bruger chaufføren kørekort-appen, skal skærmbilledet vise hele kørekortet med kategorierne.",
          "Det er stadig muligt at aflevere en papiransøgning i Færdselsstyrelsens takograf-postkasser i Kastrup, Kolding og Aalborg på hverdage fra kl. 8 til 15. Sagsbehandlingen tager længere tid den vej, og en papiransøgning om førerkort skal have et fysisk pasfoto og en kopi af kørekortet med."
        ],
        efter: [
          "Kilde: " + a(FSTYR_KORT, "Færdselsstyrelsen: Ansøg om takografkort") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Fornyelse af kort",
        tekst: [
          "En fører må ikke bruge et udløbet førerkort, og derfor bestemmer udløbsdatoen, hvornår fornyelsen skal søges. Færdselsstyrelsen har tre frister, og det nye kort gælder fra dagen efter, at det gamle udløber."
        ],
        punkter: [
          "Du kan tidligst søge om fornyelse to måneder før kortets udløbsdato.",
          "Søger du senest 15 dage før udløb, kommer det nye kort normalt, inden det gamle udløber.",
          "Det udløbne kort skal ikke afleveres.",
          "Har virksomheden et værkstedskort, kræver et virksomhedskort dispensation fra Færdselsstyrelsen."
        ],
        efter: [
          "Kilde: " + a(FSTYR_KORT, "Færdselsstyrelsen: Ansøg om takografkort") + ", set den 4. oktober 2026."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["2 måneder før udløb", "Du kan tidligst søge om fornyelse."],
            ["15 dage før udløb", "Søger du senest 15 dage før udløb, kommer det nye kort normalt, inden det gamle udløber."],
            ["Udløbsdatoen", "Det gamle kort udløber."],
            ["Dagen efter", "Det nye kort gælder."]
          ],
          note: "Kilde: " + a(FSTYR_KORT, "Færdselsstyrelsen: Ansøg om takografkort") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Når et førerkort bliver væk",
        tekst: [
          "Bliver et førerkort væk, stjålet eller beskadiget, skal føreren inden for syv kalenderdage søge om et nyt kort. Myndigheden udsteder et erstatningskort senest otte arbejdsdage efter at have modtaget en begrundet ansøgning. Et tyveri skal anmeldes til myndighederne i det land, hvor tyveriet skete.",
          "I ventetiden må føreren køre uden kort i højst 15 kalenderdage, eller længere hvis det er nødvendigt for at få bilen hjem til virksomheden. Det kræver, at føreren kan vise, at kortet ikke kunne bruges i perioden.",
          "Går selve takografen i stykker, skal virksomheden få den repareret på et autoriseret værksted, så snart det kan lade sig gøre. Kan bilen først komme hjem mere end en uge efter fejlen, skal den repareres undervejs, og føreren noterer sine tider på et særskilt ark i mellemtiden."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Dag 0", "Kortet bliver væk, stjålet eller beskadiget."],
            ["Senest dag 7", "Føreren søger om et nyt kort."],
            ["8 arbejdsdage efter ansøgningen", "Myndigheden har senest udstedt et erstatningskort."],
            ["Højst 15 kalenderdage", "Så længe må føreren køre uden kort, hvis føreren kan vise, at kortet ikke kunne bruges."]
          ],
          note: "Kilde: " + a(EU165, "takografforordningen (EU) 165/2014, artikel 29 og 37") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Download og opbevaring af data",
        tekst: [
          "Virksomhedskortet bruges til at låse data op, downloade dem og arkivere dem. EU-reglerne bestemmer, hvor længe data må ligge, før de skal hentes. Data fra takografen skal overføres mindst hver 90. dag og data fra førerkortet mindst hver 28. dag, og overførslen skal ske, så ingen data går tabt.",
          "Virksomheden skal opbevare udskrifter fra takografen i mindst et år. Beder en chauffør om det, skal virksomheden give chaufføren en kopi af de data, der er overført fra førerkortet."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Lås op", "Virksomhedskortet låser data i takografen op."],
            ["Download", "Virksomheden downloader data fra takografen."],
            ["Arkivér", "Virksomheden arkiverer data."]
          ]
        },
        efter: [
          "Kilder: " + a(EU581, "Kommissionens forordning (EU) nr. 581/2010") + " og " + a(EU165, "takografforordningen (EU) 165/2014, artikel 33") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Kontrol på vejen og i virksomheden",
        tekst: [
          "Politiet kan håndhæve reglerne ved almindelige vejsidekontroller fra 1. juli 2026. Frem til 26. august 2026 skulle føreren kunne vise data tilbage til 1. juli 2026, og derefter skal føreren kunne vise de seneste 56 dage og den aktuelle dag.",
          "Færdselsstyrelsen forventer at indkalde virksomheder til kontrol i starten af 2027. En virksomhed, der bliver udtaget, får et brev med et link til Færdselsstyrelsens virksomhedsportal og besked om, hvad den skal uploade. Virksomheden logger på portalen med MitID Erhverv."
        ],
        figur: {
          type: "soejler",
          enhed: "dage",
          data: [
            ["Takografen", 90, "download senest efter"],
            ["Førerkortet", 28, "download senest efter"],
            ["Vejsidekontrol", 56, "data føreren viser, plus dagen i dag"]
          ],
          note: "Kilder: " + a(EU581, "Kommissionens forordning (EU) nr. 581/2010") + " og " + a(FSTYR_JUL, "Færdselsstyrelsen: Nye regler for varebiler") + ", set den 7. oktober 2026."
        },
        efter: [
          "Kilde til kontrollen i virksomhederne: " + a(FSTYR_MAR, "Færdselsstyrelsen: Varebiler bliver en del af køre- og hviletidskontrollen") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Det kan fjernaflæses",
        tekst: [
          "Udstyret til fjernaflæsning lader myndighederne se oplysninger om bilen og kørslen uden at standse den. Data, der kan fjernaflæses, er begrænset til det, der skal bruges til målrettede vejkontroller af biler, hvor takografen kan være manipuleret eller misbrugt, og data overføres altid krypteret. Færdselsstyrelsen nævner blandt andet disse oplysninger."
        ],
        punkter: [
          "Kørsel uden gyldigt førerkort.",
          "Isætning af førerkort under kørslen.",
          "Sensorfejl.",
          "Bilens registreringsnummer.",
          "Hastighed registreret af takografen."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Varebil med takograf sender udvalgte data krypteret til en DSRC-læser ved vejen."><line class="tg-gulvlinje" x1="0" y1="150" x2="400" y2="150"/><rect class="tg-profil" x="30" y="95" width="120" height="45"/><rect class="tg-profil" x="150" y="108" width="40" height="32"/><circle class="tg-kasse" cx="60" cy="140" r="10"/><circle class="tg-kasse" cx="165" cy="140" r="10"/><rect class="tg-modul" x="155" y="114" width="16" height="8"/><line class="tg-pil" x1="310" y1="52" x2="310" y2="150"/><rect class="tg-kasse" x="285" y="30" width="50" height="22"/><text x="310" y="45" text-anchor="middle">DSRC</text><text class="tg-fremhaev" x="310" y="20" text-anchor="middle">Vejkontrol</text><line class="tg-skinne-tynd" x1="171" y1="116" x2="285" y2="46"/><text x="215" y="112">krypteret</text><g class="tg-call"><line x1="160" y1="114" x2="100" y2="50"/><circle cx="160" cy="114" r="3"/><text class="tg-call__navn" x="10" y="40">Takograf</text><text class="tg-call__under" x="10" y="54">udvalgte data</text></g><text x="0" y="174">Fx kørsel uden førerkort, sensorfejl,</text><text x="0" y="192">reg.nr. og hastighed</text></svg>`,
          tekst: "Tegningen er skematisk og viser fjernaflæsning ved en vejkontrol, hvor myndighederne kan se data uden at standse bilen. Kilde: " + a(FSTYR, "Færdselsstyrelsen") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "Køre- og hviletid i takografen",
        tekst: [
          "Takografen registrerer køretid, pauser og hvil, og det er de registreringer, kontrollen holder op mod EU's regler om køre- og hviletid. Efter fire og en halv times kørsel skal føreren holde en pause på mindst 45 minutter, som kan deles i først mindst 15 og derefter mindst 30 minutter. Den daglige køretid må højst være ni timer, men to gange om ugen må den være ti timer.",
          "Den ugentlige køretid må ikke overstige 56 timer, og to uger i træk må tilsammen højst give 90 timers kørsel. Inden for hver periode på 24 timer skal føreren have et døgnhvil, og et hvil på mindst 9 men under 11 timer tæller som reduceret. Føreren må højst have tre reducerede døgnhvil mellem to ugentlige hvil."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kørsel før pause", "4,5", "timer"],
            ["Pause", "45", "min."],
            ["Daglig køretid", "9", "timer"],
            ["Ugentlig køretid", "56", "timer"]
          ],
          note: "Kilde: " + a(EU561, "forordning (EF) nr. 561/2006, artikel 6–8, konsolideret udgave af 22. maj 2024") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Softwareopdateringer",
        tekst: [
          "G2V2-takografen kan softwareopdateres. Lovpligtige sikkerhedsopdateringer laves ved næste periodiske toårseftersyn eller ved første installation. EU-Kommissionen har en side, der viser, hvilken softwareversion hvert fabrikat skal have og hvornår (Færdselsstyrelsen, 10. august 2026).",
          "Opdateringerne skal rette sårbarheder og kan også bruges til at indføre nye regler om køre- og hviletid, hvis reglerne ændres. Færdselsstyrelsen skriver, at politiet ikke skal give bøder for manglende opdateringer før den dato, der står på Kommissionens side. Opdatering af DSRC-modulet er ikke omfattet af reglerne.",
          "Transportvirksomheder og førere skal sørge for, at takografen fungerer og bruges korrekt. Færdselsstyrelsen vurderer, at en takograf uden den rigtige sikkerhedsopdatering umiddelbart ikke er en korrekt fungerende takograf."
        ],
        efter: [
          "Kilde: " + a(FSTYR_SW, "Færdselsstyrelsen: Obligatoriske sikkerhedsopdateringer af takografer") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Datoerne for G2V2",
        tekst: [
          "Biler, der kører i et andet EU-land end det, hvor de er registreret, skal have den nyeste takograf, også selv om de er registreret før 2023. EU har derfor fastsat frister for, hvornår ældre takografer skal skiftes ud (retrofit). Fra 1. januar til 28. februar 2025 sanktionerede Danmark og de øvrige EU-lande ikke vognmænd, der endnu ikke havde skiftet de analoge og digitale takografer."
        ],
        figur: {
          type: "trin",
          trin: [
            ["21. aug. 2023", "G2V2 i nyregistrerede køretøjer til international kørsel."],
            ["31. dec. 2024", "Retrofit af analoge og digitale takografer i international kørsel."],
            ["18. aug. 2025", "Retrofit af G2V1 i international kørsel."],
            ["1. juli 2026", "Krav om G2V2 i køretøjer over 2.500 kg i international godstransport og cabotage."]
          ]
        },
        efter: [
          "Kilde: " + a(FSTYR, "Færdselsstyrelsen: Takograf") + ", set den 4. oktober 2026. Retrofit-kravene står i takografforordningen (EU) 165/2014, artikel 3."
        ]
      },
      {
        overskrift: "Takograf og flådestyring",
        tekst: [
          "Data kan hentes automatisk i stedet for med en kortlæser ved bilen. ABAX Tachograph henter data fra takografen og førerkortet automatisk, og Fleet Complete har et modul til automatisk download af takografdata. Tachografservice tilbyder automatisk og manuel aflæsning og analyserapporter.",
          "ABAX samler takografdata og flådestyring i samme platform. Hvad et flådestyringssystem ellers kan, står i <a href=\"/til-varebilen/flaadestyring/flaadestyringssystem/\">flådestyringssystem</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Data fra takografen og førerkortet hentes automatisk til flådesystemet, hvor de arkiveres og analyseres. Virksomhedskortet låser data op."><defs><marker id="pil-takograf-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="30" width="110" height="40"/><text x="65" y="48" text-anchor="middle">Takograf</text><text class="tg-lille" x="65" y="62" text-anchor="middle">I BILEN</text><rect class="tg-kasse" x="10" y="100" width="110" height="40"/><text x="65" y="118" text-anchor="middle">Førerkort</text><text class="tg-lille" x="65" y="132" text-anchor="middle">CHAUFFØREN</text><rect class="tg-modul" x="160" y="60" width="110" height="50"/><text class="tg-modul__tekst" x="215" y="82" text-anchor="middle">FLÅDESYSTEM</text><text x="215" y="98" text-anchor="middle">automatisk</text><rect class="tg-kasse" x="300" y="30" width="90" height="40"/><text x="345" y="54" text-anchor="middle">Arkiv</text><rect class="tg-kasse" x="300" y="100" width="90" height="40"/><text x="345" y="124" text-anchor="middle">Analyse</text><g class="tg-maal"><line x1="120" y1="50" x2="158" y2="76" marker-end="url(#pil-takograf-2)"/><line x1="120" y1="120" x2="158" y2="94" marker-end="url(#pil-takograf-2)"/><line x1="270" y1="76" x2="298" y2="52" marker-end="url(#pil-takograf-2)"/><line x1="270" y1="94" x2="298" y2="118" marker-end="url(#pil-takograf-2)"/></g><rect class="tg-kuffert" x="160" y="160" width="110" height="30"/><text x="215" y="179" text-anchor="middle">Virksomhedskort</text><line class="tg-skinne-tynd" x1="215" y1="160" x2="215" y2="110"/><text class="tg-lille" x="280" y="179">LÅSER DATA OP</text></svg>`,
          tekst: "Skematisk. Tegningen viser automatisk aflæsning, sådan som ABAX, Fleet Complete og Tachografservice beskriver den. Kilder: " + a(ABAX, "ABAX") + ", " + a(FC, "Fleet Complete") + " og " + a(TACHO, "Tachografservice") + ", set den 7. oktober 2026."
        }
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan værkstedet give en fast pris.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og første registreringsdato.",
      "Om bilen er forberedt til takograf fra fabrikken.",
      "Antal biler, der skal have takograf.",
      "Om virksomheden har virksomhedskort, og om chaufførerne har førerkort.",
      "Om data skal fjernaflæses.",
      "Om bilen har en ældre takograf, der skal skiftes til G2V2."
    ],
    faq: [
      ["Hvem må montere takograf i en varebil?", "Kun værksteder, installatører og bilfabrikanter med I-autorisation fra Færdselsstyrelsen til digitale og intelligente takografer."],
      ["Hvad koster en takograf til varebil?", "ABAX oplyser typisk 15.000–25.000 kr. for en G2V2-takograf med montering og første kalibrering, afhængigt af bilmodellen. Moms er ikke angivet."],
      ["Hvad koster et førerkort?", "Færdselsstyrelsen tager 350 kr. for et førerkort. Virksomhedskort og værkstedskort koster det samme."],
      ["Hvor ofte skal takografen efterses?", "Hvert andet år på et autoriseret værksted. Lovpligtige softwareopdateringer laves ved samme eftersyn."],
      ["Hvilke kort skal man have?", "Chaufføren skal have førerkort, virksomheden et virksomhedskort. Begge søges digitalt hos Færdselsstyrelsen via borger.dk og virk.dk."],
      ["Hvor ofte skal data fra takografen downloades?", "Data fra takografen skal overføres mindst hver 90. dag og data fra førerkortet mindst hver 28. dag. Det følger af Kommissionens forordning 581/2010."],
      ["Hvad kan politiet fjernaflæse fra takografen?", "Blandt andet kørsel uden gyldigt førerkort, isætning af kort under kørslen, sensorfejl, registreringsnummer og hastighed. Data overføres krypteret."],
      ["Hvad sker der, hvis en plombe brydes ved en reparation?", "Der skal ligge en skriftlig erklæring i bilen med dato, tidspunkt og grund. Et autoriseret værksted skal kontrollere og kalibrere takografen og sætte nye plomber senest syv dage efter."],
      ["Hvornår skal førerkortet fornyes?", "Du kan søge tidligst to måneder før udløbsdatoen og skal søge senest 15 dage før, hvis det nye kort skal nå frem i tide, skriver Færdselsstyrelsen."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Takograf", url: FSTYR, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Værkstedsautorisation", url: FSTYR_AUT, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Ansøg om takografkort", url: FSTYR_KORT, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Obligatoriske sikkerhedsopdateringer af takografer (10.08.2026)", url: FSTYR_SW, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Nye regler træder i kraft for varebiler (01.07.2026)", url: FSTYR_JUL, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Varebiler bliver en del af køre- og hviletidskontrollen (27.03.2026)", url: FSTYR_MAR, dato: "2026-10-07" },
      { navn: "Forordning (EU) nr. 165/2014 om takografer inden for vejtransport", url: EU165, dato: "2026-10-07" },
      { navn: "Kommissionens forordning (EU) nr. 581/2010 om maksimale tidsfrister for overførsel af data", url: EU581, dato: "2026-10-07" },
      { navn: "Forordning (EF) nr. 561/2006 om køre- og hviletid, konsolideret udgave 22.05.2024", url: EU561, dato: "2026-10-07" },
      { navn: "ABAX: Nye EU-krav til fartskrivere i varebiler fra 1. juli 2026", url: ABAX, dato: "2026-10-07" },
      { navn: "Tachografservice A/S", url: TACHO, dato: "2026-10-04" },
      { navn: "Fleet Complete: Flådestyring", url: FC, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Fra 1. juli 2026 skal varebiler over 2,5 ton i international varebilskørsel have takograf, når de kører gods for fremmed regning, eller når transporten er førerens hovedaktivitet.", FSTYR_JUL],
    ["Køretøjer over 2,5 og højst 3,5 ton (inkl. påhængsvogn) er undtaget, når transporten ikke sker mod vederlag, men for virksomhedens eller førerens egen regning, og kørsel ikke er førerens hovedaktivitet (artikel 3, litra ha).", FSTYR_JUL],
    ["Færdselsstyrelsen vurderer, at en medarbejder må bruge op til 30 % af sin månedlige arbejdstid på kørsel, før det er hovedaktiviteten.", FSTYR_JUL],
    ["Ren national varebilskørsel og transit (fx gennem Sverige til færgen til Bornholm uden på- eller aflæsning) er ikke omfattet.", FSTYR_JUL],
    ["Kører føreren både nationalt og internationalt, registreres den nationale kørsel som \"andet arbejde\".", FSTYR_JUL],
    ["Ved vejsidekontrol efter 1. juli 2026 skulle føreren frem til 26. august 2026 vise data tilbage til 1. juli 2026, og derefter de seneste 56 dage plus den pågældende dag.", FSTYR_JUL],
    ["Virksomhedskortet skal bruges til at registrere takografen og køretøjet; en virksomhed uden takografer i forvejen skal bestille et.", FSTYR_MAR],
    ["Færdselsstyrelsen forventer at indkalde virksomheder til kontrol i starten af 2027; materialet uploades via Virksomhedsportalen med MitID Erhverv, og virksomheden får et brev med link og besked om materialet.", FSTYR_MAR],
    ["Politiet kan håndhæve reglerne ved vejsidekontrol fra 1. juli 2026.", FSTYR_MAR],
    ["Ved ansøgning om autorisation kontakter Færdselsstyrelsen værkstedet, besøger det og udarbejder en rapport om kravene i bilag 1 og værkstedets kvalitetsledelsessystem.", FSTYR_AUT],
    ["Autoriserede installatører og værksteder skal mindst hvert andet år lade en godkendt tilsynsvirksomhed påse deres procedurer, og Færdselsstyrelsen foretager hvert år et antal uanmeldte kontrolbesøg.", FSTYR_AUT],
    ["Værkstedet skal opbevare kontrolrapporter i 2 år.", FSTYR_AUT],
    ["Færdselsstyrelsens side om takograf har en liste over autoriserede værksteder.", FSTYR],
    ["Den intelligente takograf fungerer som den digitale, men har forbindelse til satellitnavigation, udstyr til tidlig fjernaflæsning og mulighed for integration med intelligente transportsystemer.", FSTYR],
    ["Den digitale takograf lagrer data i et datalager i takografen og på førerkortet.", FSTYR],
    ["Digital takograf version 1: 1. maj 2006 til 30. september 2011; version 2: 1. oktober 2011 til 30. september 2012; version 3: 1. oktober 2012 til 14. juni 2019.", FSTYR],
    ["En analog takograf kan udskiftes med en digital af et værksted med D-autorisation, og en digital med en intelligent af et værksted med I-autorisation.", FSTYR],
    ["Fra 1. januar til 28. februar 2025 sanktionerede Danmark og de øvrige EU-lande ikke vognmænd, der endnu ikke havde retrofittet analoge og digitale takografer i køretøjer til international kørsel.", FSTYR],
    ["Takografen plomberes af det autoriserede værksted efter kontrol af, at den fungerer korrekt, og der påsættes en installationsplade, så den er klart synlig og let tilgængelig.", EU165],
    ["Forbindelsen mellem bevægelsessensoren og gearkassen skal være plomberet. En plombering må kun brydes af autoriserede værksteder, kontrolmedarbejdere eller ved reparation af køretøjet, der påvirker plomberingen; så skal en skriftlig erklæring med dato, tidspunkt og begrundelse opbevares i køretøjet.", EU165],
    ["Plomberinger skal erstattes af et autoriseret værksted uden unødig forsinkelse og senest syv dage efter, og værkstedet kontrollerer og kalibrerer takografen først.", EU165],
    ["Færdselsstyrelsen tager 350 kr. for et førerkort, et virksomhedskort og et værkstedskort.", FSTYR_KORT],
    ["Regneeksempel: fire kort (tre førerkort og et virksomhedskort) koster 4 × 350 kr. = 1.400 kr.", FSTYR_KORT],
    ["Et førerkort må højst være gyldigt i fem år (artikel 26, stk. 6), og et værkstedskort højst ét år (artikel 25, stk. 1).", EU165],
    ["Førerkort udstedes senest en måned efter, at myndigheden har modtaget ansøgningen og al dokumentation (artikel 26, stk. 1).", EU165],
    ["En fører må kun have ét gyldigt førerkort og må ikke bruge et beskadiget eller udløbet kort (artikel 27).", EU165],
    ["Til digital ansøgning om førerkort skal bruges MitID, foto af kørekortet for og bag (eller skærmprint af hele kørekortet i appen med kategorier) og et portrætfoto taget lige forfra, jævnt belyst, mod en lys baggrund uden skygger.", FSTYR_KORT],
    ["Fysiske ansøgninger kan afleveres i takograf-postkasser i København (Kastrup), Kolding og Aalborg mandag til fredag kl. 8–15; sagsbehandlingen er længere, og ansøgning om førerkort skal have fysisk pasfoto og kopi af kørekortet.", FSTYR_KORT],
    ["Det nye takografkort gælder dagen efter, at det gamle udløber, og det udløbne kort skal ikke afleveres.", FSTYR_KORT],
    ["Ved bortkomst, tyveri eller beskadigelse skal føreren inden for syv kalenderdage søge om et nyt kort; erstatningskort udstedes senest otte arbejdsdage efter en begrundet anmodning; tyveri anmeldes i det land, hvor det skete (artikel 29).", EU165],
    ["Føreren kan køre uden førerkort i højst 15 kalenderdage, eller længere hvis det er nødvendigt for at føre køretøjet tilbage til basen, hvis føreren kan godtgøre, at kortet ikke kunne bruges (artikel 29, stk. 5).", EU165],
    ["Ved fejl på takografen skal transportvirksomheden lade den reparere af et autoriseret værksted, så snart omstændighederne tillader det; kan køretøjet først vende hjem mere end en uge efter, repareres den undervejs, og føreren noterer tiderne på diagramark eller et midlertidigt ark (artikel 37).", EU165],
    ["Data fra køretøjsenheden skal overføres mindst hver 90. dag og data fra førerkortet mindst hver 28. dag, så ingen data går tabt.", EU581],
    ["Transportvirksomheder opbevarer udskrifter i mindst et år og giver førerne kopi af data overført fra deres førerkort, hvis de beder om det (artikel 33, stk. 2).", EU165],
    ["Efter 4,5 timers kørsel skal føreren holde en pause på mindst 45 minutter, som kan deles i mindst 15 og derefter mindst 30 minutter (artikel 7).", EU561],
    ["Daglig køretid højst 9 timer, to gange om ugen 10 timer; ugentlig køretid højst 56 timer; højst 90 timer på to uger i træk (artikel 6).", EU561],
    ["Inden for hver 24-timersperiode skal føreren have en daglig hviletid; mindst 9 men under 11 timer er reduceret, og der må højst være tre reducerede daglige hviletider mellem to ugentlige (artikel 8).", EU561],
    ["Softwareopdateringer af G2V2 skal rette sårbarheder og kan implementere ny lovgivning om køre- og hviletid; politiet skal ikke give bøder for manglende opdateringer før datoen på Kommissionens (DG JRC) side; DSRC-modulets opdatering er ikke omfattet.", FSTYR_SW],
    ["Færdselsstyrelsen anser det umiddelbart for i strid med kravet om en korrekt fungerende takograf at køre uden den korrekte sikkerhedsopdatering (artikel 32 i 165/2014).", FSTYR_SW],
    ["Fleet Complete har et modul til automatisk download af takografdata.", FC]
  ]
};
