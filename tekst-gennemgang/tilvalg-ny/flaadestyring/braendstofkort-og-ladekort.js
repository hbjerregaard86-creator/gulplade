// Brændstofkort og ladekort: ny udgave til tilvalg-ny.json (07-10-2026).
var CK = "https://www.circlek.dk/vilkar-og-betingelser-europe-card-da";
var CKS = "https://www.circlek.dk/erhverv/fordele/erhvervskortogservices";
var OK = "https://www.ok.dk/erhverv/produkter/tankkort/erhvervskort";
var OKB = "https://www.ok.dk/erhverv/hjaelp/kort/erhvervskort/hvordan-betaler-jeg-forbruget-paa-mit-ok-erhvervskort";
var UNOX = "https://unoxmobility.dk/erhverv/produkter/firmabiler";
var KEY = "https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-key/";
var VAN = "https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-one-business-van/";
var CLEVER = "https://clever.dk/erhverv/";
var IONITY = "https://www.ionity.eu/subscriptions";
var FC = "https://fleetcomplete.dk/flaadestyring/";

function a(url, navn) { return '<a href="' + url + '" rel="noopener">' + navn + '</a>'; }

module.exports = {
  id: "flaadestyring/braendstofkort-og-ladekort",
  side: {
    slug: "braendstofkort-og-ladekort",
    navn: "Brændstofkort og ladekort",
    titel: "Tankkort og ladekort til erhverv: gebyrer",
    kort: "Tankkort og ladekort til firmaets biler: korttyper, gebyrer, rabatter, beløbsgrænser og ladeabonnementer til elvarebiler.",
    beskrivelse: "Tankkort og ladekort til varebiler: gebyrer, rabat, kredit, korttyper og beløbsgrænser hos OK, Circle K og Uno-X, og ladeabonnementer fra Clever.",
    manchet: "Et erhvervskort samler diesel, opladning, vask og bro på én faktura om måneden. Gebyrer, kredit, rabat og beløbsgrænser er forskellige fra kæde til kæde. Her kan du se kortene og vilkårene hos OK, Circle K, Uno-X og Clever.",
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Faktura på e-mail, Circle K", "0 kr.", "19 kr. med brev"],
        ["Kredit, Uno-X", "op til 40 dage", "rentefri"],
        ["Rabat, OK", "1,45 kr. pr. liter", "på OK's truckstationer"],
        ["Ladeabonnement til varebil", "999 kr. om måneden", "Clever One Business Van"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre slags kort",
        tekst: [
          "Et erhvervskort er et betalingskort, der virker hos én kæde eller i ét netværk. Firmaet får én faktura om måneden i stedet for en bunke kvitteringer, og kæden registrerer hvert køb på det kort, der er brugt.",
          "Der findes tre slags kort til varebiler. Hvilket kort der passer, afhænger af, om bilerne kører på diesel eller strøm, og om de kører uden for Danmark. Mange firmaer med både diesel- og elbiler har et tankkort og et ladekort side om side."
        ],
        kort: [
          ["Kædens erhvervskort", "Kortet bruges til tankning, vask og ofte opladning hos én kæde. Eksempler er OK Erhvervskort, Circle K EUROPE Card og Uno-X Firmakort."],
          ["Europæisk kort", "Kortet bruges til tankning i flere lande. Circle K oplyser, at EUROPE Card virker på over 21.000 stationer i 34 europæiske lande."],
          ["Ladekort og ladebrik", "Kortet eller brikken bruges til opladning af elbiler, fx Clever Key, som er en ladebrik, der hører til bilen."]
        ]
      },
      {
        overskrift: "Kortets vej til fakturaen",
        tekst: [
          "Når chaufføren tanker med Circle K's kort, kan han eller hun taste kilometertal, chauffør-ID og bil-ID ved pumpen. Oplysningerne følger købet ind i Circle K's portal og videre til fakturaen, så firmaet kan se, hvilken bil der har tanket hvad.",
          "Ved opladning er det anderledes. Circle K's kort kræver ingen pinkode ved opladning, og chaufføren kan ikke taste kilometer, chauffør-ID eller bil-ID. Opladningen står derfor på fakturaen under kortet, men uden kilometertal.",
          "Circle K udsteder ingen kvittering ved ladestanderen, og fakturaen kan ikke bruges til at søge refusion af elafgift. Reglerne for refusion står i <a href=\"/til-varebilen/el-abonnement/refusion-af-elafgift/\">refusion af elafgift</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tankkortets vej fra kort eller app over pumpe eller lader og kædens portal til en samlet faktura hver måned. Ved opladning med Circle K's kort tastes ingen pinkode og ingen kilometer."><defs><marker id="pil-braendstofkort-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="8" y="22">Fra tankning til faktura</text><rect class="tg-kuffert" x="8" y="40" width="84" height="48"/><text x="50" y="60" text-anchor="middle">Kort</text><text x="50" y="76" text-anchor="middle">eller app</text><rect class="tg-kasse" x="108" y="40" width="84" height="48"/><text x="150" y="60" text-anchor="middle">Pumpe</text><text x="150" y="76" text-anchor="middle">eller lader</text><rect class="tg-kasse" x="208" y="40" width="84" height="48"/><text x="250" y="60" text-anchor="middle">Kædens</text><text x="250" y="76" text-anchor="middle">portal</text><rect class="tg-modul" x="308" y="40" width="84" height="48"/><text class="tg-modul__tekst" x="350" y="68" text-anchor="middle">FAKTURA</text><line class="tg-pil" x1="92" y1="64" x2="106" y2="64" marker-end="url(#pil-braendstofkort-1)"/><line class="tg-pil" x1="192" y1="64" x2="206" y2="64" marker-end="url(#pil-braendstofkort-1)"/><line class="tg-pil" x1="292" y1="64" x2="306" y2="64" marker-end="url(#pil-braendstofkort-1)"/><text x="50" y="110" text-anchor="middle">pinkode</text><text x="150" y="110" text-anchor="middle">km, fører-ID</text><text x="150" y="126" text-anchor="middle">og bil-ID</text><text x="250" y="110" text-anchor="middle">hvert køb</text><text x="250" y="126" text-anchor="middle">pr. kort</text><text x="350" y="110" text-anchor="middle">én gang</text><text x="350" y="126" text-anchor="middle">om måneden</text><line class="tg-skinne-tynd" x1="8" y1="146" x2="392" y2="146"/><text class="tg-lille" x="8" y="168">VED OPLADNING MED CIRCLE K: INGEN PINKODE</text><text class="tg-lille" x="8" y="186">OG INGEN KM, FØRER-ID ELLER BIL-ID</text></svg>`,
          tekst: "Skematisk. Fra kortet ved pumpen til månedsfakturaen. Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 3.1 og 3.5") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Gebyrer og kredit",
        tekst: [
          "Selve kortet koster sjældent noget. Circle K's prisblad skriver, at oprettelse, årsafgift og erstatningskort er gratis. Uno-X Firmakort er gratis at bestille, og OK's erhvervskort koster ikke noget i måneder uden forbrug.",
          "Gebyrerne kommer, når fakturaen sendes med posten, eller når den betales for sent. Circle K tager 19 kr. for en faktura med brev og 0 kr. for en faktura på e-mail eller via Leverandørservice. En rykker koster 100 kr., og efter sidste rettidige betalingsdag beregner Circle K en morarente på 1,25 % om måneden.",
          "Kreditten er også forskellig. Uno-X giver op til 40 dages rentefri kredit. Hos OK opgøres forbruget ved midnat den 15. i hver måned, og den sidste rettidige betalingsdag er den 1. i måneden efter.",
          "Beløbene på siden står, som kæderne selv skriver dem. Clevers priser er uden moms, mens OK's rabat, IONITY's priser og Circle K's beløbsgrænser er med moms."
        ],
        tabel: {
          kolonner: ["Kort", "Pris for kortet", "Faktura", "Betaling"],
          raekker: [
            ["Circle K EUROPE Card", "Gratis oprettelse og årsafgift", "19 kr. pr. brev, 0 kr. pr. e-mail", "Faktura senest 5. arbejdsdag i måneden"],
            ["Uno-X Firmakort", "Gratis at bestille", "Én samlet faktura", "Op til 40 dages rentefri kredit"],
            ["OK Erhvervskort", "Koster ikke noget i måneder uden forbrug", "Leverandørservice eller girokort", "Opgøres d. 15., betales senest d. 1. i næste måned"],
            ["Clever Key (ladebrik)", "Gratis at komme i gang", "Én faktura om måneden med det samlede ladeforbrug", "Efter forbrug"]
          ],
          note: "Kilder: " + a(CK, "Circle K: Vilkår for EUROPE Card") + " (gældende fra 1. september 2025), " + a(UNOX, "Uno-X Firmakort") + ", " + a(OKB, "OK") + " og " + a(KEY, "Clever") + ", set den 7. oktober 2026.",
          visning: "kort"
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["I løbet af måneden", "Hvert køb med kortet registreres på kontoen og danner grundlag for fakturaen."],
            ["Senest 5. arbejdsdag", "Circle K danner fakturaen til kontohaveren. Forfaldsdatoen står på fakturaen."],
            ["Efter forfaldsdatoen", "Circle K beregner en morarente på 1,25 % om måneden og tager 100 kr. for en rykker."],
            ["Inden 3 måneder", "Reklamationer over fakturaen skal være sendt til Circle K."]
          ],
          note: "Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 4 og 5") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Rabat på diesel og strøm",
        tekst: [
          "Rabatten aftales for hver virksomhed og står sjældent i en offentlig prisliste. OK skriver, at rabatsatsen fastsættes individuelt, og Circle K kan ændre rabatten når som helst.",
          "Hos Circle K betaler virksomheden listeprisen minus den aftalte rabat. Er prisen ved pumpen lavere end listeprisen med rabat, betaler virksomheden pumpeprisen. Prisen på udleveringsnotaen er pumpeprisen og kan derfor være en anden end prisen på fakturaen.",
          "OK anbefaler selv at regne på prisen pr. kørt kilometer og ikke kun på rabatten, fordi en omvej til en bestemt kæde også koster brændstof og arbejdstid."
        ],
        punkter: [
          "<strong>OK.</strong> Rabatten er 1,45 kr. pr. liter på OK's truckstationer, og satsen fastsættes individuelt. OK skriver også, at erhvervskunder kan spare op til 21 % på bilvask alle ugens dage.",
          "<strong>Uno-X.</strong> Firmakortet giver automatisk rabat ved tankning, vask og opladning hos Uno-X. Uno-X skriver ikke, hvor stor rabatten er.",
          "<strong>Clever Key.</strong> Firmaet får en nedsat kWh-pris på Clevers offentlige netværk og betaler 1,41 kr. pr. kWh på virksomhedens egne Clever-ladebokse."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Rabat hos OK, truckstationer", "1,45", "kr. pr. liter"],
            ["Clever Key på egne Clever-ladebokse", "1,41", "kr. pr. kWh"],
            ["Bilvask hos OK, op til", "21", "% rabat"]
          ],
          note: "OK fastsætter rabatten individuelt, og Uno-X oplyser ikke, hvor stor rabatten er. Kilder: " + a(OK, "OK: Erhvervskort") + " og " + a(KEY, "Clever: Clever Key") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Kort til bilen eller til føreren",
        tekst: [
          "Et erhvervskort kan udstedes til en person eller til en bil. Hos Circle K kan et kort på kortholderens navn kun bruges af den person, der står på kortet. Et kort på et bilnummer kan kun bruges til køb til netop den bil.",
          "Kort på bilnummer passer til biler, som flere chauffører deler, fordi kortet følger bilen og ikke personen. Kort på navn passer, når en medarbejder skifter mellem flere biler. Kontohaveren hæfter for alle køb i begge tilfælde.",
          "Circle K's vilkår kræver, at kortet opbevares forsvarligt, aldrig i en efterladt bil og aldrig sammen med pinkoden. Kortholderen skal også jævnligt se efter, om kortet stadig er på sin plads."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="To kort side om side. Et kort på navn kan kun bruges af den person, der står på kortet. Et kort på bilnummer kan kun bruges til køb til den bil. Kontohaveren hæfter for alle køb i begge tilfælde."><line class="tg-skillevaeg" x1="200" y1="14" x2="200" y2="186"/><rect class="tg-kuffert" x="35" y="26" width="130" height="80" rx="8"/><rect class="tg-profil" x="47" y="40" width="24" height="18" rx="3"/><text class="tg-lille" x="47" y="92">FØRERENS NAVN</text><rect class="tg-kuffert" x="235" y="26" width="130" height="80" rx="8"/><rect class="tg-profil" x="247" y="40" width="24" height="18" rx="3"/><text class="tg-lille" x="247" y="92">BILNUMMER</text><text class="tg-fremhaev" x="100" y="134" text-anchor="middle">Kort på navn</text><text x="100" y="154" text-anchor="middle">kun den person,</text><text x="100" y="170" text-anchor="middle">der står på kortet</text><text class="tg-fremhaev" x="300" y="134" text-anchor="middle">Kort på bilnummer</text><text x="300" y="154" text-anchor="middle">kun køb til den bil,</text><text x="300" y="170" text-anchor="middle">der står på kortet</text><line class="tg-gulvlinje" x1="10" y1="196" x2="390" y2="196"/><text class="tg-lille" x="200" y="218" text-anchor="middle">KONTOHAVEREN HÆFTER FOR ALLE KØB I BEGGE TILFÆLDE</text></svg>`,
          tekst: "Skematisk. Circle K's regler for kort på navn og kort på bilnummer. Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 3.1") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Varegrupper og korttyper",
        tekst: [
          "Firmaet bestemmer, hvad kortet må bruges til. Circle K har seks standardkorttyper med numrene 60 til 65. Den smalleste, type 60, dækker kun diesel, AdBlue og opladning. Den bredeste, type 65, dækker også benzin, vask, autotilbehør og resten af butikken.",
          "Begrænsningerne vælges i Circle K's selvbetjening, Card E-Services, hvor kortet også kan begrænses geografisk, fx til kun at gælde i Danmark. Opladning kræver, at kortet er udstedt med et ladesymbol. Tips, lotto, gavekort og paysafecard kan ikke købes med kortet.",
          "Hos Uno-X kan administratoren sætte forbrugsgrænser på de ansattes kort i Mit Firmakort. OK's hjælpesider forklarer, hvordan man laver begrænsninger på hvert enkelt erhvervskort."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Vare", "Type 65", "Type 64", "Type 63", "Type 62", "Type 61", "Type 60"],
          raekker: [
            ["Diesel og HVO100", "ja", "ja", "ja", "ja", "ja", "ja"],
            ["AdBlue", "ja", "ja", "ja", "ja", "ja", "ja"],
            ["Opladning", "ja", "ja", "ja", "ja", "ja", "ja"],
            ["Benzin", "ja", "ja", "ja", "ja", "ja", "nej"],
            ["Kør-videre-varer og smøreolie", "ja", "ja", "ja", "ja", "nej", "nej"],
            ["Bilvask", "ja", "ja", "ja", "nej", "nej", "nej"],
            ["Autotilbehør, trailerleje og værksted", "ja", "ja", "nej", "nej", "nej", "nej"],
            ["Øvrig butik", "ja", "nej", "nej", "nej", "nej", "nej"]
          ],
          note: "Opladning kræver et kort med ladesymbol. Kør-videre-varer er kølervæske, sprinklervæske, autopærer, isfjerner og isskraber. Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 2.2") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Købsprofiler og beløbsgrænser",
        tekst: [
          "Ud over varegrupperne har hvert Circle K-kort en købsprofil. Den sætter et loft over, hvor meget kortet må bruges for pr. køb, pr. døgn, pr. uge og pr. måned, og hvor mange køb der må være på et døgn.",
          "Bestiller firmaet ikke andet, udstedes kortet med købsprofil 4. Den giver 4.800 kr. pr. transaktion og 5 transaktioner pr. døgn. Profil 2 er den laveste med 800 kr. pr. transaktion, og profil 7 er den højeste med 12.000 kr.",
          "Når grænsen er nået, stopper pumpen, og kortet bliver afvist. Beløbet beregnes ud fra prisen før rabat, og opladning tæller ikke med i beløbsgrænserne. Ugen og måneden regnes som løbende perioder, og kortet kan åbnes igen med det samme i Card E-Services."
        ],
        tabel: {
          kolonner: ["Højst", "Profil 2", "Profil 3", "Profil 4 (standard)"],
          raekker: [
            ["Pr. transaktion", "800 kr.", "2.000 kr.", "4.800 kr."],
            ["Pr. døgn", "1.000 kr.", "2.500 kr.", "6.000 kr."],
            ["Pr. uge", "5.000 kr.", "12.500 kr.", "30.000 kr."],
            ["Pr. måned", "20.000 kr.", "50.000 kr.", "120.000 kr."],
            ["Transaktioner pr. døgn", "3", "3", "5"]
          ],
          note: "Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 3.2") + ", standardprofiler, set den 7. oktober 2026."
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Profil 2", 800],
            ["Profil 3", 2000],
            ["Profil 4", 4800, "standard"],
            ["Profil 5", 6400],
            ["Profil 6", 9600],
            ["Profil 7", 12000]
          ],
          note: "Højeste beløb pr. transaktion i Circle K's standardprofiler. Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 3.2") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Ladekort og abonnement til elvarebiler",
        tekst: [
          "Til elvarebiler findes to slags aftaler. Med et forbrugsafregnet ladekort betaler firmaet for hver kWh, bilen lader. Med et abonnement betaler firmaet et fast beløb om måneden og lader frit i et netværk.",
          "Clever One Business Van er et abonnement til firmabiler på gule plader og papegøjeplader. Clever skelner efter nummerpladen, så en ombygget personbil på gule plader skal også have Van-abonnementet. Bindingsperioden er 2 måneder, og mindsteprisen i perioden er 1.998 kr. for Van og 2.198 kr. for Premium.",
          "Begge abonnementer giver fri opladning på hele Clevers netværk, også på lynladerne. Forskellen ligger i hjemmeladningen, som næste afsnit forklarer. Flere priser på offentlig ladning står i <a href=\"/til-varebilen/el-abonnement/ladekort-og-offentlig-ladning/\">ladekort og offentlig ladning</a>."
        ],
        tabel: {
          kolonner: ["Produkt", "Indhold", "Pris"],
          raekker: [
            ["Clever Key", "Forbrugsafregnet opladning med ladebrik", "1,41 kr. pr. kWh på egne Clever-bokse"],
            ["Clever One Business Van", "Fri opladning i Clevers netværk inkl. lyn, og hjemme med ladeboks", "999 kr. om måneden"],
            ["Clever One Business Van Premium", "Som ovenfor, men hjemmeladning betales tilbage efter prisen hele døgnet", "1.099 kr. om måneden"],
            ["IONITY Motion", "Lavere kWh-pris på IONITY", "45 kr. om måneden og 2,86 kr. pr. kWh"]
          ],
          note: "Kilder: " + a(KEY, "Clever Key") + " og " + a(VAN, "Clever One Business Van") + ", set den 7. oktober 2026, og " + a(IONITY, "IONITY") + ", set den 4. oktober 2026. Clever One Business Van kan have et tillæg, som Clever kalder energitillæg."
        }
      },
      {
        overskrift: "Opladning hjemme hos medarbejderen",
        tekst: [
          "Mange elvarebiler holder om natten hjemme hos chaufføren. Med Clever One Business Van kan medarbejderen få en ladeboks i indkørslen, og opladningen der er med i abonnementet. Standardinstallationen af ladeboksen koster 5.999 kr., og Clever giver 2.000 kr. i rabat, hvis Clevers installationspartner godkender den eksisterende kabelføring.",
          "Strømmen til ladeboksen går gennem husets elmåler, så medarbejderen lægger først selv ud. Clever betaler udgiften tilbage hver måned efter en sats. Satsen for Van bygger på elprisen kl. 24-06 hele året og kl. 11-17 fra april til september. Premium bygger satsen på elprisen over hele døgnet, så tilbagebetalingen bliver højere.",
          "Medarbejderen slipper for udlægget, hvis husstanden skifter elselskab til Clever Power. Så kan Clever skille opladningen fra husets forbrug og modregne den 1:1. Uno-X sælger også ladebokse til hjemmet, og her får medarbejderne automatisk godtgørelse. Mere om løsningerne står i <a href=\"/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/\">ladestander hjemme hos medarbejderen</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Hjemmeladning med Clever One Business Van i tre trin. Medarbejderen betaler strømmen over husets måler, Clever betaler tilbage hver måned efter en sats, og firmaet betaler en fast pris om måneden. Med Clever Power modregnes opladningen i stedet."><defs><marker id="pil-braendstofkort-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="4" y="14" width="118" height="70"/><text class="tg-fremhaev" x="12" y="34">1</text><text x="12" y="52">Medarbejderen</text><text x="12" y="66">betaler strøm</text><text x="12" y="80">via husets måler</text><rect class="tg-kasse" x="141" y="14" width="118" height="70"/><text class="tg-fremhaev" x="149" y="34">2</text><text x="149" y="52">Clever betaler</text><text x="149" y="66">tilbage hver</text><text x="149" y="80">måned efter sats</text><rect class="tg-modul" x="278" y="14" width="118" height="70"/><text class="tg-modul__tekst" x="286" y="34">3</text><text class="tg-modul__tekst" x="286" y="52">Firmaet betaler</text><text class="tg-modul__tekst" x="286" y="66">fast pris om</text><text class="tg-modul__tekst" x="286" y="80">måneden</text><line class="tg-pil" x1="122" y1="49" x2="139" y2="49" marker-end="url(#pil-braendstofkort-2)"/><line class="tg-pil" x1="259" y1="49" x2="276" y2="49" marker-end="url(#pil-braendstofkort-2)"/><text class="tg-lille" x="4" y="116">VAN: SATS EFTER ELPRISEN KL. 24-06 HELE ÅRET</text><text class="tg-lille" x="4" y="134">OG KL. 11-17 FRA APRIL TIL SEPTEMBER</text><text class="tg-lille" x="4" y="158">PREMIUM: SATS EFTER ELPRISEN HELE DØGNET</text><rect class="tg-kasse" x="4" y="180" width="392" height="44" stroke-dasharray="5 4"/><text x="200" y="200" text-anchor="middle">Med Clever Power som elselskab modregnes</text><text x="200" y="216" text-anchor="middle">opladningen 1:1, og der er intet udlæg</text></svg>`,
          tekst: "Skematisk. Sådan betales strømmen tilbage ved hjemmeladning med Clever One Business Van og Premium. Kilde: " + a(VAN, "Clever: Clever One Business Van") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Ladebrik, der følger bilen",
        tekst: [
          "Clever Key er en ladebrik til virksomhedens pulje- og flådebiler. Opladningen afregnes efter forbrug, så firmaet kun betaler for det, bilerne lader. Firmaet får én faktura om måneden med det samlede ladeforbrug, og det koster ikke noget at komme i gang.",
          "Brikken kan ikke bruges til flere biler, fordi den skal følge bilen. Clever foreslår derfor, at brikken bliver i bilen, så flere chauffører kan lade med den samme brik. Opladningen afregnes altså pr. bil og ikke pr. medarbejder.",
          "På virksomhedens egne Clever-ladebokse koster normal- og hurtigopladning op til 99 kW 1,41 kr. pr. kWh. På Clevers offentlige netværk varierer prisen over døgnet og mellem stederne, men Clever skriver, at den altid er lavere end Clevers standardpris. Clever Key kan ikke købes af privatpersoner, og til medarbejdernes private elbiler har Clever produktet Clever Link."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Varebil ved en ladestander med en ladebrik i forruden. Brikken bliver i bilen, opladningen afregnes pr. bil, og flere førere kan lade med samme brik."><g transform="translate(40,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="222" y="90" width="14" height="10"/><rect class="tg-kasse" x="330" y="100" width="30" height="97"/><rect class="tg-profil" x="336" y="110" width="18" height="14"/><path class="tg-doer" fill="none" d="M345,140 Q346,178 312,172 Q292,168 282,150"/><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><g class="tg-call"><line x1="229" y1="90" x2="120" y2="46"/><circle cx="229" cy="90" r="3"/><text class="tg-call__navn" x="40" y="24">Ladebrik</text><text class="tg-call__under" x="40" y="38">bliver i bilen</text></g><g class="tg-call"><line x1="345" y1="100" x2="345" y2="46"/><circle cx="345" cy="100" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Ladestander</text><text class="tg-call__under" x="395" y="38" text-anchor="end">afregner pr. bil</text></g><text class="tg-lille" x="200" y="222" text-anchor="middle">FLERE FØRERE KAN LADE MED SAMME BRIK</text></svg>`,
          tekst: "Skematisk. Clever Key er en ladebrik, der følger bilen, så opladningen afregnes pr. bil. Kilde: " + a(KEY, "Clever: Clever Key") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Bro, vask og parkering på samme kort",
        tekst: [
          "Et erhvervskort kan betale mere end brændstof. OK's erhvervskort dækker vask i OK's vaskehaller og broafgift på Storebæltsbroen og Øresundsbroen. Med OK Erhverv-appen kan chaufføren starte og stoppe parkering og betale 0 kr. i parkeringsgebyr i hele Danmark.",
          "Circle K's kort dækker vej-, motorvej-, bro- og tunnelafgift, færgebilletter og nødtjenester som reparation, uanset korttype. Billetter til færger i dansk farvand kan ikke købes med kortet. Circle K regner køb hos partnere som Storebæltsbroen og Øresundsbroen som køb i udlandet, og her kan der komme et gebyr på op til 1 % af købssummen.",
          "Uno-X Firmakort dækker tankning, vask og opladning hos Uno-X. På 46 stationer med både Uno-X og 7-Eleven kan chaufføren også købe kør-videre-varer til bilen."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Køb", "OK Erhvervskort", "Circle K EUROPE Card", "Uno-X Firmakort"],
          raekker: [
            ["Brændstof", "ja", "ja", "ja"],
            ["Opladning", "ja, med appen", "kort med ladesymbol", "ja"],
            ["Vask", "ja", "efter korttype", "ja"],
            ["Bro", "Storebælt og Øresund", "ja, også vej og tunnel", "ikke nævnt"],
            ["Parkering", "0 kr. i gebyr med appen", "hos parkeringsselskaber", "ikke nævnt"],
            ["Færgebilletter", "ikke nævnt", "ja, ikke i dansk farvand", "ikke nævnt"],
            ["Kør-videre-varer", "ikke nævnt", "efter korttype", "på 46 stationer med 7-Eleven"]
          ],
          note: "Kilder: " + a(OK, "OK: Erhvervskort") + ", " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 1, 2.2 og 5") + " og " + a(UNOX, "Uno-X Firmakort") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Netværk i Danmark og Europa",
        tekst: [
          "Et kort er kun nyttigt, hvis der er en station på ruten. OK skriver, at kæden har mere end 770 tankstationer. Uno-X har 280 stationer, heraf 46 med 7-Eleven, og Uno-X Firmakort kan også bruges på alle Uno-X' lynladere og på mere end 5.000 ladepunkter i Danmark.",
          "Circle K's EUROPE Card kan bruges på mere end 21.000 stationer i 34 europæiske lande gennem samarbejdet ROUTEX. Køb uden for Danmark får en særskilt momsfaktura fra Circle K International Card Center i Stockholm, og den kan bruges til at søge den udenlandske moms tilbage.",
          "Clever har 66.697 ladepunkter, heraf 1.743 hurtig- og lynladere. Circle K's kort kan kun bruges til opladning i Danmark, på Circle K's egne ladere og hos Circle K's samarbejdspartnere."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["OK, tankstationer", "over 770", ""],
            ["Uno-X, stationer", "280", ""],
            ["Circle K EUROPE Card, stationer i 34 lande", "over 21.000", ""],
            ["Clever, ladepunkter", "66.697", ""]
          ],
          note: "Kilder: " + a(OK, "OK") + ", " + a(UNOX, "Uno-X") + ", " + a(CK, "Circle K") + " og " + a(CLEVER, "Clever") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Data til flådestyringen",
        tekst: [
          "Transaktionerne ligger i kædernes egne portaler, fx Circle K's Card E-Services, Uno-X' Mit Firmakort og Min OK. I portalen kan firmaet se køb, fakturaer og en oversigt over kortene, og Circle K skriver, at Card E-Services er gratis.",
          "Har firmaet flere OK-kort på samme konto, viser fakturaen, hvilke tankninger der er lavet på hvert kort. I OK Erhverv-appen gemmes fakturaerne automatisk, og chaufføren kan føre kilometerregnskab. OK laver også et gratis CO2-regnskab til kunder med erhvervskort.",
          "Flere flådestyringssystemer har et modul til udgifter. Det gælder Fleet Complete i Professional-pakken og Qanto Fleet med en fakturaindlæser. Se <a href=\"/til-varebilen/flaadestyring/flaadestyringssystem/\">flådestyringssystem</a>."
        ]
      },
      {
        overskrift: "Pinkode, spærring og hæftelse",
        tekst: [
          "Alle Circle K-kort udstedes med en pinkode, som Circle K ikke selv kender. En selvvalgt pinkode må ikke være fortløbende som 1234 eller 4321 og må ikke bestå af fire ens cifre. Tastes pinkoden forkert mere end 3 gange, spærres kortet for flere køb.",
          "Et mistet kort spærres i kædens portal eller på telefon. Kontohaveren hæfter for køb med kortet, indtil det er spærret. Circle K hæfter for køb, efter at kortet er meldt stjålet eller bortkommet, medmindre kortholderen har handlet svigagtigt. Tyveri og misbrug skal også anmeldes til politiet.",
          "Circle K kan også spærre et kort midlertidigt. Så er alle køb spærret undtagen vejskat og vejafgift i Danmark og udlandet, og dem hæfter kontohaveren for. Hos OK spærrer du kortet i Min OK, og et nyt kort kommer på 6–8 hverdage med samme pinkode."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Kortet er væk", "Kontohaveren hæfter for køb med kortet, indtil det er spærret."],
            ["Spær kortet", "Hos Circle K spærrer du det i Card E-Services eller på telefon døgnet rundt. Hos OK spærrer du det i Min OK."],
            ["Efter spærringen", "Circle K hæfter for købene, medmindre kortholderen har handlet svigagtigt."],
            ["Nyt kort", "Hos OK kommer det nye kort på 6–8 hverdage med samme pinkode."]
          ]
        },
        efter: [
          "Kilder: " + a(CK, "Circle K, afsnit 3.1 og 3.3") + " og " + a(OK, "OK") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Kort i appen",
        tekst: [
          "Circle K's erhvervskort kan ligge som virtuelt kort i Circle K Pro-appen og bruges ved pumpe, vaskehal og butik. Kortet må kun ligge på en telefon med automatisk skærmlås, og telefonen skal kræve, at brugeren bekræfter sig, før den åbner.",
          "I OK Erhverv-appen kan chaufføren tanke, oplade, vaske og parkere. OK skriver, at fordelen ved appen er, at chaufføren ikke kan tabe kortet eller kvitteringerne, og appen kan låses med fx Touch ID."
        ]
      },
      {
        overskrift: "Kreditvurdering, udløb og opsigelse",
        tekst: [
          "Et erhvervskort er en kredit, og kæden vurderer firmaets økonomi, før den udsteder kort. Circle K kan indhente oplysninger fra et kreditoplysningsbureau, og firmaet skal oplyse det forventede forbrug i ansøgningen. Bliver forbruget væsentligt højere end oplyst, kan Circle K afvise flere køb.",
          "Circle K's kort gælder i 5 år og fornyes automatisk cirka en måned før udløb, hvis kortet er brugt inden for de seneste seks måneder. Et kort, der ikke har været brugt i mindst 12 måneder, kan Circle K annullere uden varsel.",
          "Firmaet kan opsige aftalen når som helst, mens Circle K skal give 2 måneders varsel. Skifter firmaet CVR-nummer, fx ved en ny selskabsform, skal det søge om en ny konto og have nye kort."
        ],
        efter: [
          "Kilde: " + a(CK, "Circle K: Vilkår for EUROPE Card, afsnit 6, 8, 9, 10 og 11") + ", set den 7. oktober 2026."
        ]
      }
    ],
    spoergsmaal_titel: "Det skal kortudstederen vide",
    spoergsmaal_manchet: "Så passer kortene til bilerne og ruterne.",
    spoergsmaal: [
      "Antal biler, og hvor mange der kører på diesel og el.",
      "Om kortet skal følge bilen eller føreren.",
      "Hvilke varer kortet må bruges til.",
      "Hvilke beløbsgrænser kortene skal have pr. køb, pr. døgn og pr. måned.",
      "Om bilerne kører i udlandet eller over Storebælt og Øresund.",
      "Om elbilerne skal lade hjemme hos medarbejderne, og hvordan strømmen skal betales tilbage.",
      "Det forventede forbrug om måneden, som kreditvurderingen bygger på.",
      "Hvordan fakturaen skal sendes, og om den skal deles pr. bil."
    ],
    faq: [
      ["Koster et tankkort til erhverv noget?", "Uno-X Firmakort er gratis at bestille, og OK's erhvervskort koster ikke noget i måneder uden forbrug. Circle K's prisblad skriver, at oprettelse og årsafgift er gratis. Circle K tager 19 kr. for en faktura med brev og 0 kr. for en faktura på e-mail (vilkår gældende fra 1. september 2025)."],
      ["Kan man lade elbil på et tankkort?", "Ja. OK's og Circle K's erhvervskort dækker opladning, og Clever Key er en ladebrik til firmaets elbiler. Circle K's kort skal være udstedt med et ladesymbol, og det virker kun til opladning i Danmark."],
      ["Hvad er et ladeabonnement til varebil?", "Clever One Business Van giver fri opladning i Clevers netværk og hjemme med ladeboks for 999 kr. om måneden (set den 7. oktober 2026). Abonnementet gælder firmabiler på gule plader og papegøjeplader."],
      ["Kan tankkortet bruges i udlandet?", "Circle K EUROPE Card kan ifølge Circle K's vilkår bruges på mere end 21.000 stationer i 34 europæiske lande. Circle K tager et valutatillæg på op til 1 %."],
      ["Kan kortet begrænses til diesel?", "Ja. Circle K har seks korttyper med forskellige varegrupper, og den smalleste dækker kun diesel, AdBlue og opladning. Kortet kan også begrænses til kun at gælde i Danmark."],
      ["Hvad sker der, hvis et tankkort bliver stjålet?", "Kortet spærres i kædens portal eller på telefon. Hos Circle K hæfter kontohaveren for køb indtil spærringen, og Circle K for køb derefter, medmindre der er handlet svigagtigt."],
      ["Kan et tankkort udstedes til bilen i stedet for føreren?", "Ja, hos Circle K. Et kort på et bilnummer kan kun bruges til køb til den bil, og kontohaveren hæfter for alle køb."],
      ["Hvad er en købsprofil?", "Det er Circle K's beløbsgrænser for et kort pr. køb, døgn, uge og måned. Standardprofilen giver 4.800 kr. pr. transaktion og 5 transaktioner pr. døgn, og opladning tæller ikke med."],
      ["Hvordan betales strømmen, når varebilen lader hjemme hos medarbejderen?", "Med Clever One Business Van lægger medarbejderen ud for strømmen, og Clever betaler tilbage hver måned efter en sats. Har husstanden Clever Power som elselskab, modregnes opladningen 1:1."]
    ],
    kilder: [
      { navn: "OK: Erhvervskort", url: OK, dato: "2026-10-07" },
      { navn: "OK: Hvordan betaler jeg forbruget på mit OK Erhvervskort", url: OKB, dato: "2026-10-07" },
      { navn: "Circle K: Erhvervskort og services", url: CKS, dato: "2026-10-07" },
      { navn: "Circle K: Vilkår og betingelser for EUROPE Card (gældende fra 1. september 2025)", url: CK, dato: "2026-10-07" },
      { navn: "Uno-X: Uno-X Firmakort", url: UNOX, dato: "2026-10-07" },
      { navn: "Clever: Clever Key", url: KEY, dato: "2026-10-07" },
      { navn: "Clever: Clever One Business Van", url: VAN, dato: "2026-10-07" },
      { navn: "Clever: Erhverv", url: CLEVER, dato: "2026-10-07" },
      { navn: "IONITY: Subscriptions", url: IONITY, dato: "2026-10-04" },
      { navn: "Fleet Complete: Flådestyring", url: FC, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["RETTET: Circle K's prisblad i vilkårene for EUROPE Card (gældende fra 1. september 2025) skriver, at kortoprettelse, årsafgift pr. kort og erstatningskort er gratis. Den gamle side skrev 'Ikke oplyst i gældende vilkår' om prisen for kortet.", CK],
    ["Circle K: opkrævningsafgiften er 0 kr. ved faktura på e-mail og ved betaling via Leverandørservice; rykkergebyr 100 kr.; morarente 1,25 % pr. måned efter sidste rettidige betalingsdag (afsnit 4 og 5).", CK],
    ["Circle K: reklamationer over fakturaen skal ske inden 3 måneder; forfaldsdatoen står på fakturaen (afsnit 4).", CK],
    ["Circle K: kvittering eller følgeseddel udstedes ikke på ladestanderen, og fakturaen kan ikke bruges til at søge refusion af elafgifter (afsnit 3.5).", CK],
    ["OK: forbruget opgøres ved midnat d. 15. i hver måned, og sidste rettidige betalingsdag er d. 1. i måneden efter; har man flere kort på samme konto, viser fakturaen tankningerne pr. kort.", OKB],
    ["Circle K: prisen er listeprisen med fradrag af den aftalte rabat; er pumpeprisen lavere, betales pumpeprisen; udleveringsnotaen viser pumpeprisen og kan afvige fra den pris, der skal betales; Circle K kan ændre rabatten på ethvert tidspunkt (afsnit 3.4).", CK],
    ["OK: man bør regne på den samlede pris pr. kørt kilometer og ikke kun på tankkortets rabat; erhvervskunder kan spare op til 21 % på bilvask alle ugens dage.", OK],
    ["Circle K: kortet skal opbevares forsvarligt, aldrig i en efterladt bil og aldrig sammen med pinkoden, og kortholderen skal jævnligt undersøge, om kortet er på sin plads (afsnit 3.3).", CK],
    ["Circle K har seks standardkorttyper (60-65): type 60 dækker diesel (inkl. HVO100), AdBlue og opladning; type 61 tilføjer benzin; 62 kør-videre-produkter og smøreolie; 63 bilvask; 64 autotilbehør, flaskegas, trailerleje og værksted; 65 øvrig butik (afsnit 2.2).", CK],
    ["Circle K: kortet kan afgrænses geografisk i Card E-Services, fx til kun Danmark; opladning kræver kort med lade-symbol; tips, lotto, gavekort og paysafecard kan ikke købes (afsnit 2.2).", CK],
    ["Uno-X: i Mit Firmakort kan man sætte forbrugsgrænser på de ansattes kort, følge transaktioner og finde bilag.", UNOX],
    ["Circle K standardkøbsprofiler pr. transaktion: profil 2 800 kr., 3 2.000 kr., 4 4.800 kr., 5 6.400 kr., 6 9.600 kr., 7 12.000 kr.; profil 4 (standard) har 6.000 kr. pr. døgn, 30.000 kr. pr. uge, 120.000 kr. pr. måned og 5 transaktioner pr. døgn (afsnit 3.2).", CK],
    ["Circle K: maksimum pr. uge og måned beregnes pr. løbende uge og måned, og kortet kan genåbnes øjeblikkeligt i Card E-Services eller via kundeservice (afsnit 3.2).", CK],
    ["Clever One Business Van er til firmabiler på gule plader og papegøjeplader; Clever skelner på nummerpladen, så en ombygget personbil på gule plader skal have Van-produktet.", VAN],
    ["Clever One Business Van: bindingsperiode 2 måneder, mindstepris 1.998 kr. (Van) og 2.198 kr. (Premium); fri opladning på hele netværket inkl. lyn; fri hjemmeopladning ved tilvalg af ladeboks.", VAN],
    ["Clever: standardinstallation af ladeboks koster 5.999 kr. ekskl. moms, med mulighed for 2.000 kr. rabat ved eksisterende kabelføring, der godkendes af Clevers installationspartner.", VAN],
    ["Clever: medarbejderen betaler først selv strømmen ved hjemmeladning, og Clever tilbagebetaler hver måned efter en sats; Van-satsen bygger på strømpriserne kl. 24-06 hele året og kl. 11-17 i april-september, Premium på priserne over hele døgnet; med Clever Power modregnes opladningen 1:1.", VAN],
    ["Uno-X tilbyder ladebokse til hjemmet, og medarbejderne får automatisk godtgørelse; Firmakortet kan bruges på alle Uno-X lynladere og på mere end 5.000 ladepunkter i Danmark.", UNOX],
    ["Clever Key: ladebrikken skal følge bilen og kan ikke bruges til flere biler; den kan blive i bilen, så flere brugere kan lade med samme brik; månedlig faktura med samlet ladeforbrug; prisen 1,41 kr./kWh ekskl. moms gælder normal- og hurtigopladning op til 99 kW på egne erhvervsladebokse; på det offentlige netværk varierer prisen, men er altid lavere end standardprisen.", KEY],
    ["Clever Key kan ikke bestilles af privatpersoner; Clever Link er Clevers produkt til medarbejdernes private elbil.", KEY],
    ["OK Erhvervskort dækker broafgift på Storebæltsbroen og Øresundsbroen og vask i OK's vaskehaller; parkering startes og stoppes med OK Erhverv-appen.", OK],
    ["Circle K: vej-, motorvej-, bro- og tunnelafgift, færgebilletter (ikke færger i dansk farvand) og nødtjenesteservice indgår i alle korttyper; kortet kan bruges hos parkeringsoperatører; køb hos partnere som Storebæltsbroen og Øresundsbroen regnes som køb i udlandet med valutaomvekslingsgebyr på op til 1 % (afsnit 1, 2.2 og 5).", CK],
    ["Uno-X: på 46 Uno-X/7-Eleven-stationer kan man med Firmakortet købe kør-videre-produkter.", UNOX],
    ["Circle K: internationale køb får en separat momsfaktura fra Circle K International Card Center AB, Stockholm, som kan bruges til hjemtagelse af moms; el kan kun købes med kortet på Circle K stationer og roamingpartneres ladestandere i Danmark (afsnit 3.5 og 4).", CK],
    ["Circle K: Card E-Services er en omkostningsfri selvbetjening med transaktioner, fakturaer og kortoversigt.", CKS],
    ["OK: i OK Erhverv-appen gemmes fakturaer automatisk, man kan føre kilometerregnskab, appen kan bruge Touch ID, og OK laver et gratis CO2-regnskab for kunder med erhvervskort.", OK],
    ["Circle K: pinkoden må ikke være sekventiel (fx 1234 eller 4321) eller fire ens cifre; Circle K kender ikke pinkoden; tyveri og misbrug skal anmeldes til politiet; ved midlertidig spærring er alle køb spærret undtagen vejskat og vejafgift, som kontohaveren hæfter for (afsnit 3.1 og 3.3).", CK],
    ["Circle K: et virtuelt kort må kun bruges på enheder med automatisk skærmlås og krav om verificering af brugeren (afsnit 3.3).", CK],
    ["Circle K: kreditvurdering via kreditoplysningsbureau; forventet forbrug oplyses i ansøgningen, og ved væsentlig overskridelse kan køb afvises; kortene gælder 5 år og fornyes ca. en måned før udløb, hvis de er brugt de seneste seks måneder; inaktive kort i mindst 12 måneder kan annulleres uden varsel; kontohaveren kan opsige når som helst, Circle K med 2 måneders varsel; nyt CVR-nummer kræver ny konto og nye kort (afsnit 6, 8, 9, 10 og 11).", CK]
  ]
};
