// Forsikring af leasingbil, ny udgave til tilvalg-ny.json (07-10-2026).
var GF = "https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf";
var TRYG = "https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf";
var TRYG_SIDE = "https://tryg.dk/erhverv/varebilforsikring";
var FP = "https://www.fogp.dk/media/wiylnvqv/bemaerkninger-til-vilkaar-for-f-deklaration-vedroerende-finansiering-og-leasing-version-2022.pdf";
var FL = "https://www.retsinformation.dk/eli/lta/2026/118";
var IF = "https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring";
var GJ = "https://www.gjensidige.dk/erhverv/autoforsikring";
var AY_GAP = "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/gap-daekning/";
var AY = "https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/";

function a(url, navn) { return '<a href="' + url + '" rel="noopener">' + navn + '</a>'; }

var BIL = '<path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/>';

var SVG_PARTER = `<svg viewBox="0 0 400 250" role="img" aria-label="Leasingselskabet ejer varebilen, og virksomheden bruger den. Virksomheden forsikrer bilen og betaler præmien, og leasingselskabet bliver noteret på forsikringen med en F-deklaration."><defs><marker id="pil-forsikring-af-leasingbil-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="14" width="124" height="52"/><text class="tg-fremhaev" x="62" y="36" text-anchor="middle">Leasingselskabet</text><text x="62" y="54" text-anchor="middle">ejer bilen</text><rect class="tg-kasse" x="276" y="14" width="124" height="52"/><text class="tg-fremhaev" x="338" y="36" text-anchor="middle">Virksomheden</text><text x="338" y="54" text-anchor="middle">bruger bilen</text><g transform="translate(140,104) scale(0.5)">` + BIL + `</g><line class="tg-gulvlinje" x1="128" y1="113" x2="272" y2="113"/><line class="tg-pil" x1="124" y1="40" x2="146" y2="58" marker-end="url(#pil-forsikring-af-leasingbil-1)"/><line class="tg-pil" x1="276" y1="40" x2="258" y2="68" marker-end="url(#pil-forsikring-af-leasingbil-1)"/><line class="tg-pil" x1="62" y1="66" x2="150" y2="174" marker-end="url(#pil-forsikring-af-leasingbil-1)"/><line class="tg-pil" x1="338" y1="66" x2="250" y2="174" marker-end="url(#pil-forsikring-af-leasingbil-1)"/><text class="tg-lille" x="8" y="150">F-DEKLARATION</text><text class="tg-lille" x="392" y="150" text-anchor="end">POLICE OG PRÆMIE</text><rect class="tg-modul" x="110" y="176" width="180" height="46"/><text class="tg-modul__tekst" x="200" y="196" text-anchor="middle">FORSIKRINGSSELSKABET</text><text x="200" y="213" text-anchor="middle">kasko og F-deklaration</text><text class="tg-lille" x="200" y="244" text-anchor="middle">VIRKSOMHEDEN ER FORSIKRINGSTAGER</text></svg>`;

var SVG_DEKL = "<svg viewBox=\"0 0 400 216\" role=\"img\" aria-label=\"Leasinggiver og leasingtager sender en fælles meddelelse til forsikringsselskabet, som noterer leasinggivers rettigheder over bilen.\"><rect class=\"tg-kasse\" x=\"0\" y=\"10\" width=\"150\" height=\"44\"/><text x=\"75\" y=\"37\" text-anchor=\"middle\">Leasinggiver</text><rect class=\"tg-kasse\" x=\"250\" y=\"10\" width=\"150\" height=\"44\"/><text x=\"325\" y=\"37\" text-anchor=\"middle\">Leasingtager</text><line class=\"tg-pil\" x1=\"75\" y1=\"54\" x2=\"170\" y2=\"120\"/><line class=\"tg-pil\" x1=\"325\" y1=\"54\" x2=\"230\" y2=\"120\"/><text class=\"tg-lille\" x=\"200\" y=\"84\" text-anchor=\"middle\">FÆLLES MEDDELELSE</text><rect class=\"tg-modul\" x=\"110\" y=\"120\" width=\"180\" height=\"44\"/><text class=\"tg-modul__tekst\" x=\"200\" y=\"147\" text-anchor=\"middle\">FORSIKRINGSSELSKAB</text><text x=\"200\" y=\"188\" text-anchor=\"middle\">noterer leasinggivers rettigheder</text><text x=\"200\" y=\"206\" text-anchor=\"middle\">og giver besked, hvis forsikringen ophører</text></svg>";

var SVG_TOTAL = `<svg viewBox="0 0 400 230" role="img" aria-label="Ved totalskade anmelder virksomheden skaden. Forsikringsselskabet betaler erstatningen til leasinggiver, og vraget går til forsikringsselskabet."><defs><marker id="pil-forsikring-af-leasingbil-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="20" width="120" height="46"/><text class="tg-fremhaev" x="60" y="40" text-anchor="middle">Virksomheden</text><text x="60" y="57" text-anchor="middle">anmelder skaden</text><rect class="tg-kasse" x="280" y="20" width="120" height="46"/><text class="tg-fremhaev" x="340" y="40" text-anchor="middle">Leasinggiver</text><text x="340" y="57" text-anchor="middle">får erstatningen</text><rect class="tg-modul" x="130" y="92" width="140" height="50"/><text class="tg-modul__tekst" x="200" y="113" text-anchor="middle">FORSIKRINGS-</text><text class="tg-modul__tekst" x="200" y="129" text-anchor="middle">SELSKABET</text><rect class="tg-kasse" x="140" y="176" width="120" height="46"/><text class="tg-fremhaev" x="200" y="196" text-anchor="middle">Vraget</text><text x="200" y="213" text-anchor="middle">går til selskabet</text><line class="tg-pil" x1="120" y1="43" x2="158" y2="90" marker-end="url(#pil-forsikring-af-leasingbil-2)"/><line class="tg-pil" x1="242" y1="90" x2="278" y2="46" marker-end="url(#pil-forsikring-af-leasingbil-2)"/><line class="tg-pil" x1="200" y1="176" x2="200" y2="145" marker-end="url(#pil-forsikring-af-leasingbil-2)"/><text class="tg-lille" x="140" y="86" text-anchor="end">ANMELDELSE</text><text class="tg-lille" x="268" y="84">ERSTATNING</text><text class="tg-lille" x="210" y="164">NÅR DER ER BETALT</text></svg>`;

var SVG_GAP = "<svg viewBox=\"0 0 400 158\" role=\"img\" aria-label=\"Kaskoen erstatter markedsværdien. GAP-dækningen dækker forskellen op til den bogførte restværdi.\"><text class=\"tg-fremhaev\" x=\"0\" y=\"16\">Bogført restværdi</text><rect class=\"tg-profil\" x=\"0\" y=\"24\" width=\"320\" height=\"28\"/><text class=\"tg-fremhaev\" x=\"0\" y=\"84\">Markedsværdi</text><rect class=\"tg-kasse\" x=\"0\" y=\"92\" width=\"230\" height=\"28\"/><text x=\"10\" y=\"110\">kaskoens erstatning</text><rect class=\"tg-modul\" x=\"230\" y=\"92\" width=\"90\" height=\"28\"/><text class=\"tg-modul__tekst\" x=\"275\" y=\"110\" text-anchor=\"middle\">GAP</text><line class=\"tg-skinne-tynd\" x1=\"320\" y1=\"16\" x2=\"320\" y2=\"128\"/><text class=\"tg-lille\" x=\"0\" y=\"150\">GAP-DÆKNINGEN BETALER FORSKELLEN</text></svg>";

var SVG_TRYG = "<svg viewBox=\"0 0 400 230\" role=\"img\" aria-label=\"Tidslinje over en leasingaftale med Trygs refusion af førstegangsydelsen år for år og kaskoens ophør ved aflevering.\"><rect class=\"tg-modul\" x=\"40\" y=\"40\" width=\"66\" height=\"80\"/><rect class=\"tg-modul\" x=\"110\" y=\"60\" width=\"66\" height=\"60\"/><rect class=\"tg-modul\" x=\"180\" y=\"80\" width=\"66\" height=\"40\"/><rect class=\"tg-modul\" x=\"250\" y=\"100\" width=\"66\" height=\"20\"/><text class=\"tg-modul__tekst\" x=\"73\" y=\"34\" text-anchor=\"middle\">100 %</text><text class=\"tg-modul__tekst\" x=\"143\" y=\"54\" text-anchor=\"middle\">75 %</text><text class=\"tg-modul__tekst\" x=\"213\" y=\"74\" text-anchor=\"middle\">50 %</text><text class=\"tg-modul__tekst\" x=\"283\" y=\"94\" text-anchor=\"middle\">25 %</text><line class=\"tg-gulvlinje\" x1=\"20\" y1=\"120\" x2=\"380\" y2=\"120\"/><line class=\"tg-gulvlinje\" x1=\"40\" y1=\"114\" x2=\"40\" y2=\"126\"/><line class=\"tg-gulvlinje\" x1=\"380\" y1=\"110\" x2=\"380\" y2=\"130\"/><text x=\"73\" y=\"140\" text-anchor=\"middle\">År 1</text><text x=\"143\" y=\"140\" text-anchor=\"middle\">År 2</text><text x=\"213\" y=\"140\" text-anchor=\"middle\">År 3</text><text x=\"283\" y=\"140\" text-anchor=\"middle\">År 4</text><g class=\"tg-call\"><line x1=\"48\" y1=\"120\" x2=\"48\" y2=\"172\"/><circle cx=\"48\" cy=\"120\" r=\"3\"/><text class=\"tg-call__navn\" x=\"54\" y=\"186\">Senest 1 måned</text><text class=\"tg-call__under\" x=\"54\" y=\"200\">GF: køb af afleveringsforsikring</text></g><g class=\"tg-call\"><line x1=\"380\" y1=\"120\" x2=\"380\" y2=\"172\"/><circle cx=\"380\" cy=\"120\" r=\"3\"/><text class=\"tg-call__navn\" x=\"395\" y=\"210\" text-anchor=\"end\">Aflevering</text><text class=\"tg-call__under\" x=\"395\" y=\"224\" text-anchor=\"end\">kaskoen ophører</text></g></svg>";

var SVG_AFLEVERING = `<svg viewBox="0 0 400 270" role="img" aria-label="Varebil set fra siden med tre nummererede skader. En bule fra en påkørsel kan være dækket ved afleveringen. Stenslag i lakken og rust er slid og ælde og er ikke dækket."><text class="tg-fremhaev" x="0" y="20">Gennemgang ved afleveringen</text><g transform="translate(70,170)">` + BIL + `</g><line class="tg-gulvlinje" x1="30" y1="187" x2="370" y2="187"/><g class="tg-nr"><circle cx="150" cy="110" r="10"/><text x="150" y="114" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="300" cy="150" r="10"/><text x="300" y="154" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="88" cy="150" r="10"/><text x="88" y="154" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="12" cy="208" r="9"/><text x="12" y="212" text-anchor="middle">1</text></g><text x="28" y="212">Bule fra en påkørsel: kan være dækket</text><g class="tg-nr"><circle cx="12" cy="232" r="9"/><text x="12" y="236" text-anchor="middle">2</text></g><text x="28" y="236">Stenslag i lakken: slid, ikke dækket</text><g class="tg-nr"><circle cx="12" cy="256" r="9"/><text x="12" y="260" text-anchor="middle">3</text></g><text x="28" y="260">Rust: ælde, ikke dækket</text></svg>`;

module.exports = {
  id: "forsikring/forsikring-af-leasingbil",
  side: {
    slug: "forsikring-af-leasingbil",
    navn: "Forsikring af leasingbil",
    titel: "Forsikring af leaset varebil: krav og totalskade",
    kort: "Hvad leasingselskabet kræver, hvad F-deklarationen giver det, GAP-dækning, afleveringsforsikring og hvad der sker ved totalskade.",
    beskrivelse: "Forsikring af leaset varebil: F-deklarationen, totalskade, GAP, afleveringsforsikring og førstegangsydelse. Vilkår fra GF, If, Gjensidige og Tryg.",
    manchet: "På en leaset varebil er leasingselskabet ejer, og din virksomhed forsikrer bilen. Leasingselskabet sikrer sig med en F-deklaration hos forsikringsselskabet. Her kan du se, hvad den giver, og hvad der sker ved skade, totalskade og aflevering.",
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Lovpligtig kasko", "Nej", "men leasingselskaberne kræver den"],
        ["Afleveringsforsikring, GF", "højst 32.942 kr.", "i erstatning (basisår 2023)"],
        ["Førstegangsydelse, If", "højst 25.000 kr.", "tilbage det første år"],
        ["Gammel deklaration", "26 uger", "dækker leasinggiver, når det nye selskab ikke noterer den"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvem forsikrer bilen",
        tekst: [
          "Forsikringspligten for ansvar ligger hos ejeren eller den bruger, der har varig rådighed over bilen, jf. færdselslovens § 106. På en leaset varebil er leasingselskabet ejer, og din virksomhed er bruger. Det er virksomheden, der køber forsikringen og betaler præmien.",
          "Loven kræver kun ansvarsforsikringen. Leasingselskaberne kræver desuden kasko i leasingaftalen, fordi bilen er deres. Virksomheden skal stå som bruger i Motorregistret, og det skal være den samme virksomhed, der står som leasingtager på F-deklarationen.",
          "Nogle leasingselskaber forsikrer selv bilerne. Ayvens tilbyder ansvar og kasko med GAP-dækning på biler, selskabet ejer. Hos Ayvens er førerulykke med i ansvarsforsikringen, og præmien har ingen kilometergrænse.",
          "Ingen af de {{tilbud}} tilbud på siden har forsikring med i ydelsen. {{forsikring_ikke}} skriver, at den ikke er med, og {{forsikring_tavs}} nævner den ikke. Resten af det, der ikke står i tilbuddene, står i <a href=\"/haandbogen/det-staar-ikke-i-leasingtilbuddet/\">det står ikke i leasingtilbuddet</a>."
        ],
        figur: {
          type: "svg",
          svg: SVG_PARTER,
          tekst: "Skematisk. Kilder: " + a(FL, "Færdselsloven, § 106") + ", set den 4. oktober 2026, og " + a(FP, "F&amp;P: Bemærkninger til F-deklarationen") + " og " + a(AY, "Ayvens: Forsikring hos Ayvens") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "F-deklarationen",
        tekst: [
          "Deklarationen er en meddelelse fra leasinggiver og leasingtager til forsikringsselskabet om at notere, at leasinggiver har rettigheder over bilen. F&amp;P's bemærkninger til vilkårene er udarbejdet af Finans og Leasing, Finansrådet og forsikringsselskaberne i samarbejde med Forsikring &amp; Pension.",
          "Den giver leasinggiver sikkerhed for, at forsikringen ikke bortfalder uden besked, og omfatter alle indregistrerede køretøjer med kasko. F&amp;P skriver, at deklarationen i visse situationer giver leasinggiver bedre rettigheder end forsikringsaftaleloven og kaskobetingelserne.",
          "Uden deklarationen følger leasinggiver forsikringstagerens ret. GF skriver i betingelserne, at en panthaver eller leasinggiver heller ikke kan få erstatning, når forsikringstageren mister retten på grund af en undtagelse. Hos Tryg er en rettighedshaver kun dækket ved fx forsæt, grov uagtsomhed og beruselse, hvis deklarationen var noteret, før skaden skete."
        ],
        figur: {
          type: "svg",
          svg: SVG_DEKL,
          tekst: "Tegningen er skematisk og viser, hvordan F-deklarationen bliver noteret hos forsikringsselskabet."
        },
        efter: [
          "Kilder: " + a(FP, "F&amp;P: Bemærkninger til vilkår for F-deklaration") + ", set den 4. oktober 2026, og " + a(GF, "GF, punkt 2.1") + " og " + a(TRYG, "Tryg, afsnit 2") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Sådan bliver deklarationen noteret",
        tekst: [
          "Deklarationen skal hænge på en kaskoforsikring. F&amp;P nævner tre muligheder, nemlig fuld kasko, kasko uden brand og brandkasko. Hver deklaration gælder kun ét køretøj, og leasingselskabet skal oplyse mindst to af tre numre: policenummer, registreringsnummer og stelnummer.",
          "Forsikringsselskabet har ikke pligt til at tegne kaskoen. Vil det ikke notere deklarationen, skal det sige det inden 4 uger, og leasingselskabet er så dækket i 6 dage efter afvisningen. Accepterer selskabet, løber deklarationen i 10 år, medmindre leasingforholdet eller forsikringen ophører før.",
          "Skifter virksomheden kun navn, kræver det ingen ny deklaration. Overtager en anden virksomhed leasingaftalen, er der skiftet leasingtager, og så skal der en ny F-deklaration til."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Afvisning, senest", 4, "uger efter modtagelsen"],
            ["Dækning efter afvisning", 6, "dage"],
            ["Ophører automatisk efter", 10, "år"],
            ["Gammel deklaration", 26, "uger efter ophøret"]
          ],
          note: "Kilde: " + a(FP, "F&amp;P: Bemærkninger til vilkår for F-deklaration, version 2022") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Det dækker deklarationen",
        tekst: [
          "Leasinggiver er dækket, selvom leasingtager har mistet retten til erstatning. Det gælder både skader, der kan repareres, og totalskader. F&amp;P nævner bl.a. tilfældene i oversigten herunder.",
          "I de almindelige tilfælde kan selvrisikoen fra virksomhedens police ikke trækkes fra over for leasinggiver. Erstatningen bliver også udbetalt uden fradrag for præmie, som virksomheden skylder. Ved beslaglæggelse og bortkomst har leasinggiver sin egen selvrisiko.",
          "Mekaniske skader, slid, rust og vejrlig er hverken dækket for leasinggiver eller leasingtager, fordi kaskoen ikke dækker dem. F&amp;P kalder det den rene vedligeholdelsesrisiko."
        ],
        figur: {
          type: "daekning",
          kolonner: ["Situation", "Leasinggiver dækket", "Selvrisiko for leasinggiver"],
          raekker: [
            ["Spirituskørsel eller kørsel uden kørekort", "ja", "Ingen"],
            ["Manglende præmiebetaling", "ja", "Ingen"],
            ["Grov uagtsomhed eller forsæt", "ja", "Ingen"],
            ["Tyverisikring ikke slået til", "ja", "Ingen"],
            ["Beslaglæggelse over 6 måneder eller konfiskation", "ja", "50 %, mindst 50.000 kr."],
            ["Bilen bortkommet i udlandet eller ikke fundet 6 måneder efter politianmeldelse", "ja", "20 %, mindst 20.000 kr."],
            ["Mekaniske skader, slid og vejrlig", "nej", "–"]
          ],
          note: "Kilde: " + a(FP, "F&amp;P: Bemærkninger til vilkår for F-deklaration vedrørende finansiering og leasing, version 2022") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "Selskabet kræver pengene tilbage",
        tekst: [
          "Betaler forsikringsselskabet leasinggiver for en skade, som kaskoen ikke dækker, har selskabet regres mod forsikringstageren. Det står i GF's betingelser. Leasingtageren hæfter altså stadig for skader efter spirituskørsel eller grov uagtsomhed.",
          "Regres betyder, at selskabet kræver det udbetalte beløb tilbage. GF bruger selv en totalskade efter spirituskørsel som eksempel. Selskabet betaler panthaveren og retter derefter kravet mod bilejeren.",
          "Tryg kan også kræve en udbetalt erstatning tilbage, hvis bilen har kørt længere end den aftalte årlige kørelængde, eller hvis virksomheden har givet forkerte oplysninger. Kan leasingtager indfri aftalen til et lavere beløb end bilens dagsværdi, giver leasinggiver forsikringsselskabet besked, før selskabet rejser kravet."
        ],
        figur: {
          type: "trin",
          trin: [
            ["Skaden", "Bilen bliver skadet, fx ved spirituskørsel, og kaskoen dækker ikke skaden."],
            ["Leasinggiver", "Forsikringsselskabet betaler leasinggiver via deklarationen."],
            ["Kravet", "Forsikringsselskabet kræver beløbet tilbage fra forsikringstageren."]
          ]
        },
        efter: [
          "Kilder: " + a(GF, "GF, punkt 13.8 og ordforklaringen") + ", " + a(TRYG, "Tryg, afsnit 11.8") + " og " + a(FP, "F&amp;P") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Totalskade",
        tekst: [
          "En totalskade er en skade, der er så stor, at selskabet betaler en kontanterstatning i stedet for at reparere bilen. Tryg regner en varebil uden registreringsafgift som totalskadet, når reparationen og resternes værdi tilsammen overstiger bilens handelsværdi uden registreringsafgift. For varebiler med registreringsafgift følger Tryg de regler, myndighederne har fastsat.",
          "På en leaset bil går pengene ikke til virksomheden. Reglerne er sådan:"
        ],
        punkter: [
          "<strong>Erstatningen går til leasinggiver.</strong> Ved totalskade udbetales erstatningen til den noterede leasinggiver.",
          "<strong>Gensalgspris.</strong> F&amp;P skriver, at totalskader, der dækkes via deklarationen, erstattes til leasinggivers gensalgspris.",
          "<strong>Nyværdi.</strong> Giver kaskoen nyværdierstatning, udbetales nyværdi til leasinggiver, også hvis kaskoen undtager leasede biler.",
          "<strong>Resterne.</strong> Når erstatningen er betalt, tilhører vraget forsikringsselskabet.",
          "<strong>Tyveri.</strong> Hos GF og Gjensidige udbetales erstatning, når bilen ikke er fundet efter fire uger. Hos Tryg er fristen 28 dage efter anmeldelsen til politiet og Tryg."
        ],
        figur: {
          type: "svg",
          svg: SVG_TOTAL,
          tekst: "Skematisk. Kilder: " + a(FP, "F&amp;P") + ", set den 4. oktober 2026, og " + a(TRYG, "Tryg, afsnit 4.3 og 11.5") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "GAP-dækning",
        tekst: [
          "Ved totalskade erstatter kaskoen bilens værdi. Leasingaftalens restværdi kan være højere. Ayvens' GAP-dækning dækker forskellen mellem markedsværdien og den bogførte restværdi og sikrer, at erstatningen mindst svarer til restgælden i leasingaftalen.",
          "GAP står for Guaranteed Asset Protection. Ayvens kalder dækningen en totalskadeforsikring, fordi den skal forhindre, at leasingtageren står tilbage med et tab efter en totalskade.",
          "GAP-dækningen er en del af kaskoen på biler ejet af Ayvens. Restværdi og slutopgørelse står i <a href=\"/haandbogen/finansiel-og-operationel-leasing/\">finansiel og operationel leasing</a>."
        ],
        figur: {
          type: "svg",
          svg: SVG_GAP,
          tekst: "Tegningen er skematisk og viser Ayvens' GAP-dækning ved totalskade, når restværdien er højere end markedsværdien."
        },
        efter: [
          "Kilde: " + a(AY_GAP, "Ayvens: GAP-dækning") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Leasingdækninger hos forsikringsselskaberne",
        tekst: [
          "Flere forsikringsselskaber har en særlig dækning til leasede biler. Dækningerne i tabellen handler om to ting: små skader, der først bliver fundet ved afleveringen, og førstegangsydelsen, hvis bilen bliver totalskadet eller stjålet.",
          "Hos Tryg er Leasing med i pakkerne Udvidet og Super. Pakkerne gælder varebiler med en totalvægt op til 3.500 kg. Hos If og GF er leasingdækningerne tilvalg til kaskoen."
        ],
        tabel: {
          kolonner: ["Selskab", "Dækning", "Indhold"],
          raekker: [
            ["Tryg", "Leasing, med i Udvidet og Super", "Mindre kaskoskader ved aflevering og delvis refusion af førstegangsydelsen ved kontanterstatning. Bilen skal være under fire år"],
            ["If", "Tilvalg til Kasko og Super", "Førstegangsydelsen ved totalskade eller tyveri, højst 25.000 kr. første år, faldende til 7.000 kr. fjerde år"],
            ["Gjensidige", "Leasing Basis", "Op til 5 skader ved aflevering, højst 5.000 kr. pr. reparation, og førstegangsydelsen ved totaltab"],
            ["GF", "Afleveringsforsikring ved leasing", "Pludselige skader konstateret ved aflevering, højst 32.942 kr., selvrisiko 6.587 kr. (basisår 2023)"]
          ],
          note: "Kilder: " + a(TRYG, "Tryg, betingelser nr. 2303") + ", " + a(IF, "If") + ", " + a(GJ, "Gjensidige") + " og " + a(GF, "GF") + ", set den 4. oktober 2026, og " + a(TRYG_SIDE, "Tryg: Varebilforsikring") + ", set den 7. oktober 2026.",
          visning: "kort"
        }
      },
      {
        overskrift: "Førstegangsydelsen ved totalskade",
        tekst: [
          "Ved totalskade eller tyveri kan en del af førstegangsydelsen refunderes. Beløbet bliver mindre, jo ældre aftalen er.",
          "Førstegangsydelsen er det beløb, virksomheden betaler, før leasingbilen bliver leveret. Tryg regner ikke merydelse ved leasing af en ny bil, leveringsomkostninger, provision, depositum eller gebyrer med."
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [["År 1", 25000, "If"], ["År 2", 15000, "If"], ["År 3", 10000, "If"], ["År 4", 7000, "If"]],
          note: "Figuren viser den højeste refusion med Ifs tilvalg Leasingaftalens førstegangsydelse. Kilde: " + a(IF, "If: Varebilforsikring") + ", set den 4. oktober 2026."
        },
        efter: [
          "Tryg refunderer 100, 75, 50 og 25 % af den valgte sum i år 1-4. Tryg betaler kun ved dokumenteret tab og højst den ydelse, der er betalt. Kilde: " + a(TRYG, "Tryg, afsnit 5.3") + ", set den 4. oktober 2026."
        ]
      },
      {
        overskrift: "Trygs krav til leasingdækningen",
        tekst: [
          "Tryg sælger kun Leasing sammen med kasko, og kun til varebiler under fire år. Vil virksomheden have Førsteydelsesdækningen med, skal den være tegnet samtidig med kaskoen. Kravene står her:"
        ],
        punkter: [
          "<strong>Bilens alder.</strong> Bilen skal være under fire år fra første indregistrering.",
          "<strong>Leasingperioden.</strong> Perioden skal være mellem 6 og 48 måneder, og bilen skal have kasko i hele perioden.",
          "<strong>Karens.</strong> Afleveringsdækningen skal have været i kraft hos Tryg i mindst tre måneder, medmindre den var købt i det tidligere selskab.",
          "<strong>Genleasing.</strong> En genleaset bil kræver en uvildig tilstandsrapport fra aftalens start.",
          "<strong>Selvrisiko.</strong> Selvrisikoen trækkes kun én gang, uanset hvor mange skader bilen har ved afleveringen."
        ],
        efter: [
          "Kilde: " + a(TRYG, "Tryg, betingelser nr. 2303, afsnit 5.3 og 11.6") + ", set den 4. oktober 2026."
        ],
        figur: {
          type: "svg",
          svg: SVG_TRYG,
          tekst: "Skematisk. Figuren viser Trygs Førsteydelsesdækning i procent af den valgte sum. GF's afleveringsforsikring skal købes senest en måned efter aftalens start. Kilder: " + a(TRYG, "Tryg, afsnit 5.3") + " og " + a(GF, "GF, punkt 2.4 og 12.1") + ", set den 4. oktober 2026."
        }
      },
      {
        overskrift: "GF's afleveringsforsikring",
        tekst: [
          "GF's afleveringsforsikring kan kun vælges sammen med kasko og Friskade. Den dækker pludselige skader, der skyldes uforudsete omstændigheder og først bliver opdaget ved afleveringen. Erstatningen kan højst være 32.942 kr. inkl. moms, og selvrisikoen er 6.587 kr. Begge beløb har basisår 2023.",
          "En pludselig skade sker på ét tidspunkt og ikke over et tidsrum. Dækningen omfatter også pludselige mekaniske skader, hvis bilens service- og vedligeholdelsesaftale er overholdt. Opsiger virksomheden kaskoen eller Friskade, bortfalder afleveringsforsikringen samme dag.",
          "Betingelserne er disse:"
        ],
        punkter: [
          "<strong>Bilens alder.</strong> Højst fire år og 120.000 km fra første registrering.",
          "<strong>Leasingselskabet.</strong> Skal være medlem af Finans og Leasing.",
          "<strong>Frist.</strong> Skal købes senest en måned efter, at leasingaftalen er trådt i kraft.",
          "<strong>Varighed.</strong> Til aflevering, dog højst tre år efter aftalens indgåelse.",
          "<strong>Ikke dækket.</strong> Slid, rust, fugt, skader fra dyr, rengøring og klargøring til salg.",
          "<strong>Taksator.</strong> GF skal se bilen, før skader udbedres. Anerkender leasingtageren leasingselskabets krav uden GF's accept, kan dækningen falde helt eller delvist bort."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bilens alder, højst", 4, "år fra første registrering"],
            ["Kilometer, højst", "120.000", "km"],
            ["Køb senest", 1, "måned efter aftalens start"],
            ["Varighed, højst", 3, "år efter aftalens indgåelse"]
          ],
          note: "Tallene er fra GF's betingelser for afleveringsforsikring. Kilde: " + a(GF, "GF, betingelser nr. 130-1") + ", set den 4. oktober 2026. Mekaniske skader og bortfald: " + a(GF, "GF, punkt 12.2 og 12.6") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Skader ved afleveringen",
        tekst: [
          "Ved afleveringen kan leasingselskabet kræve betaling for skader på bilen. Tryg kræver, at skaderne bliver anmeldt til Tryg, og at der er lavet en afleveringsrapport, som Tryg kan godkende.",
          "Hos Tryg er en mindre skade en skade, som efter taksators opgørelse kan repareres for højst det beløb, der står i policen, uden moms. Større reparationer kan anmeldes som en almindelig kaskoskade. Repareres bilen ikke, svarer erstatningen til det, virksomheden skal betale efter leasingkontrakten, dog højst leasingejerens dokumenterede tab.",
          "GF skal have besked med det samme, når leasingselskabet rejser kravet. GF skriver, at virksomheden bør vente med at tage stilling til leasingselskabets opgørelse, til taksator har set bilen. Selve afleveringen står i <a href=\"/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/\">aflevering af leasingbil</a>."
        ],
        figur: {
          type: "svg",
          svg: SVG_AFLEVERING,
          tekst: "Skematisk. Kilder: " + a(GF, "GF, punkt 4.2 og 12.2-12.4") + " og " + a(TRYG, "Tryg, afsnit 4.5, 5.3 og 11.6") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Lånebil ved totalskade og tyveri",
        tekst: [
          "Trygs Leasing giver en lånebil, hvis varebilen bliver totalskadet eller stjålet. På øer uden bro bliver lånebilen leveret ved det nærmeste færgeleje på fastlandet. Kan Tryg ikke skaffe en lånebil, kan selskabet betale et kontant beløb for perioden i stedet. Vilkårene er disse:"
        ],
        punkter: [
          "<strong>Levering.</strong> Lånebilen leveres inden for 24 timer efter, at Tryg har accepteret skaden. Anmeldes skaden torsdag eller fredag, er bilen klar efter fire dage.",
          "<strong>Kilometer.</strong> Lånebilen må køre højst 3.000 km i låneperioden.",
          "<strong>Aflevering.</strong> Lånebilen skal afleveres senest 14 dage efter, at kontanterstatningen er udbetalt.",
          "<strong>Bilen.</strong> Lånebilen er ikke nødvendigvis en varebil."
        ],
        efter: [
          "Kilde: " + a(TRYG, "Tryg, afsnit 5.3") + ", set den 4. oktober 2026. " + a(GJ, "Gjensidiges") + " tilvalg Lånebil Plus giver op til 30 dage, også ved totalskade og tyveri."
        ]
      },
      {
        overskrift: "Moms og pant på en leaset bil",
        tekst: [
          "Ved skader, som kun deklarationen dækker, erstatter forsikringsselskabet reparationen uden momsen, når leasinggiver kan trække momsen fra. I praksis betaler selskabet værkstedet med moms og beder bagefter leasinggiver om at trække momsen fra. Leasinggiver tager ikke gebyr for det."
        ],
        punkter: [
          "<strong>Moms.</strong> Er varebilen leaset, kan leasingejeren trække momsen fra. Tryg betaler leasingselskabets rimelige omkostninger til at håndtere momsen.",
          "<strong>Kontanterstatning.</strong> Momsen trækkes fra erstatningen hos både Tryg og GF.",
          "<strong>Panthaverdeklaration.</strong> Hos Tryg kræver en panthaverdeklaration fuld kasko, og den kan ikke knyttes til delkasko eller stilstandsforsikring."
        ],
        efter: [
          "Kilder: " + a(TRYG, "Tryg, afsnit 4.5 og 11.7") + " og " + a(GF, "GF, punkt 13.9") + ", set den 4. oktober 2026, og " + a(FP, "F&amp;P") + ", set den 7. oktober 2026."
        ]
      },
      {
        overskrift: "Når bilen afleveres",
        tekst: [
          "Hos Tryg ophører kaskoen på datoen og tidspunktet for afleveringen. Hos GF ophører den ved afleveringen, når bilen opfyldte betingelserne for GF's afleveringsforsikring, da forsikringen blev købt.",
          "Deklarationen ophører, når leasingforholdet slutter. Skifter leasingtageren selskab, og vil det nye selskab ikke notere deklarationen, er leasinggiver dækket af den gamle i 26 uger. Skal aftalen stoppe før tid, står reglerne i <a href=\"/til-varebilen/salg-af-varebil/indfri-leasingaftale/\">indfri leasingaftale</a>."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Aftalen starter", "Leasingselskabet sender F-deklarationen. Forsikringsselskabet har 4 uger til at afvise den."],
            ["Senest 1 måned efter", "Sidste frist for at købe GF's afleveringsforsikring."],
            ["Efter 3 måneder", "Trygs afleveringsdækning har været i kraft længe nok til at kunne bruges."],
            ["Ved afleveringen", "Kaskoen ophører. Skaderne anmeldes, og Tryg kræver en afleveringsrapport."],
            ["Når leasingforholdet slutter", "Deklarationen ophører."]
          ],
          note: "Kilder: " + a(FP, "F&amp;P") + ", " + a(GF, "GF, punkt 2.4 og 12.1") + " og " + a(TRYG, "Tryg, afsnit 2, 5.3 og 11.6") + ", set den 7. oktober 2026."
        }
      },
      {
        overskrift: "Skift af forsikringsselskab",
        tekst: [
          "Flytter virksomheden forsikringen til et nyt selskab, følger deklarationen med, hvis det nye selskab noterer den. Vil det nye selskab kun tegne ansvarsforsikring, er leasinggiver dækket af den gamle deklaration i 26 uger fra meddelelsen om, at kaskoen er ophørt.",
          "Betaler virksomheden ikke præmien, kan leasingselskabet selv betale den og holde forsikringen i kraft. Det skal ske inden for den frist, forsikringstageren har efter forsikringsaftaleloven. Hos GF bliver kaskoen slettet, hvis en opkrævning stadig ikke er betalt efter rykkerbrevet. GF giver så panthaveren besked og beder politiet inddrage nummerpladerne."
        ],
        efter: [
          "Kilder: " + a(FP, "F&amp;P") + " og " + a(GF, "GF, punkt 13.12") + ", set den 7. oktober 2026."
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så bliver deklarationen noteret, og dækningen passer til aftalen.",
    spoergsmaal: [
      "Leasingselskabets navn og om det er medlem af Finans og Leasing.",
      "Leasingaftalens start, løbetid og kilometer.",
      "Leasingselskabets krav til kasko og selvrisiko.",
      "Om der ønskes afleveringsdækning eller dækning af førstegangsydelsen.",
      "Bilens første registreringsdato og kilometerstand.",
      "Hvilken virksomhed der står som bruger i Motorregistret.",
      "Om bilen har en service- og vedligeholdelsesaftale."
    ],
    faq: [
      ["Skal en leaset varebil have kasko?", "Loven kræver det ikke, men leasingselskaberne kræver det i aftalen, fordi bilen er deres."],
      ["Hvad er en F-deklaration?", "En notering hos forsikringsselskabet af, at leasinggiver har rettigheder over bilen. Den sikrer, at leasinggiver får besked, hvis forsikringen ophører, og at leasinggiver får erstatning i en række situationer, hvor leasingtageren ikke gør."],
      ["Hvem får erstatningen ved totalskade på en leaset bil?", "Leasinggiver. Dækkes totalskaden via deklarationen, erstattes den ifølge F&amp;P til leasinggivers gensalgspris."],
      ["Findes der GAP-forsikring i Danmark?", "Ja, fx hos Ayvens, hvor GAP-dækningen er en del af kaskoen på selskabets egne biler. Den dækker forskellen mellem markedsværdi og bogført restværdi."],
      ["Hvad dækker en afleveringsforsikring?", "Pludselige skader, der konstateres ved aflevering. Hos GF dækker den højst 32.942 kr. med 6.587 kr. i selvrisiko (basisår 2023). Gjensidige dækker op til fem skader med højst 5.000 kr. pr. reparation."],
      ["Hvad sker der, hvis jeg kører spirituskørsel i en leaset bil?", "Leasinggiver får erstatning via deklarationen. Forsikringsselskabet kræver derefter beløbet tilbage fra forsikringstageren."],
      ["Hvor meget af førstegangsydelsen får man tilbage ved totalskade?", "Med Ifs tilvalg får man højst 25.000 kr. tilbage det første år og 7.000 kr. det fjerde år. Med Trygs dækning får man 100 % af den valgte sum det første år og 25 % det fjerde år."],
      ["Kan en leaset varebil have delkasko?", "Hos Tryg kan der ikke noteres panthaverdeklaration på en delkasko. Trygs leasingdækning forudsætter kasko i hele leasingperioden."],
      ["Skal der laves en ny F-deklaration, når virksomheden skifter navn?", "Nej, ikke hvis der kun skiftes navn. Overtager en anden virksomhed leasingaftalen, skal der en ny deklaration til, fordi leasingtageren er en anden."],
      ["Kan leasingselskabet betale præmien, hvis virksomheden ikke gør?", "Ja. F&amp;P skriver, at leasingselskabet kan holde forsikringen i kraft ved at betale præmien inden for den frist, forsikringstageren har efter forsikringsaftaleloven."]
    ],
    kilder: [
      { navn: "F&P: Bemærkninger til vilkår for F-deklaration vedrørende finansiering og leasing, version 2022", url: FP, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Ayvens: GAP-dækning", url: AY_GAP, dato: "2026-10-07" },
      { navn: "Ayvens: Forsikring hos Ayvens", url: AY, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYG_SIDE, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: FL, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Ved leasing skal leasingtageren på F-deklarationen være den samme som den bruger, der er noteret i Motorregistret (DMR).", FP],
    ["Hos Ayvens er førerulykkesforsikring inkluderet i ansvarsforsikringen, og der er ingen kilometerbegrænsning i forbindelse med præmien.", AY],
    ["Ingen af tilbuddene på siden har forsikring med i ydelsen (pladsholderne {{forsikring_ikke}} og {{forsikring_tavs}}; bygningen advarer, hvis {{forsikring_inkl}} ikke er 0).", "https://gulplade.dk/haandbogen/det-staar-ikke-i-leasingtilbuddet/"],
    ["F&P: Efter vilkårene giver deklarationen i visse situationer kreditor bedre rettigheder end efter forsikringsaftaleloven og kaskoforsikringsvilkårene.", FP],
    ["GF: Hvis forsikringstageren ikke kan få erstatning som følge af en dækningsundtagelse, kan en anden rettighedshaver (fx panthaver eller leasinggiver) heller ikke få erstatning (FAL § 54 fraveget).", GF],
    ["Tryg: Rettighedshavere som panthavere er kun dækket ved skade forvoldt ved forsæt, grov uagtsomhed, beruselse m.v., hvis der er noteret en panthaverdeklaration, inden varebilen bliver skadet.", TRYG],
    ["F&P: Deklarationen forudsætter en bagvedliggende motorkaskoforsikring: fuld kasko (kasko med brand), kasko uden brand eller brand (brandkasko).", FP],
    ["F&P: Hver deklaration omfatter kun ét objekt, og kreditor skal oplyse mindst 2 af numrene policenummer, registreringsnummer og stelnummer.", FP],
    ["F&P: Forsikringsselskabet har ikke tegningspligt og har 4 uger til at meddele, at det ikke vil tegne forsikringen; selskabet er i dækning i 6 dage fra afvisningen.", FP],
    ["F&P: Deklarationen løber automatisk i 10 år fra acceptdato, medmindre den forinden er ophørt eller forsikringen opsiges.", FP],
    ["F&P: Navneskifte på leasingtager kræver ikke ny deklaration; reelt skift af leasingtager kræver en ny F-deklaration.", FP],
    ["F&P: I tilfældene 1.a-d kan selvrisiko efter den tegnede forsikring ikke gøres gældende over for kreditor, og erstatningen udbetales uden fradrag for debitors selvrisiko og præmierestance.", FP],
    ["F&P: Mekaniske skader, vejrligsskader og slitage er ikke dækket for kreditor og debitor; det er den rene vedligeholdelsesrisiko.", FP],
    ["GF's ordforklaring om regres bruger som eksempel en totalskade i spirituspåvirket tilstand, hvor selskabet betaler panthaver og retter regreskrav mod bilejeren.", GF],
    ["Tryg kan kræve udbetalt erstatning tilbage, hvis den årlige kørelængde er overskredet, eller der er afgivet urigtige oplysninger.", TRYG],
    ["F&P: Kan leasingtager indfri leasingkontrakten til et lavere beløb end dagsværdien, orienterer leasinggiver forsikringsselskabet, før selskabet fremsætter regreskrav over for kunden.", FP],
    ["Tryg: For varebiler uden (eller fritaget for) registreringsafgift er det totalskade, når reparationsudgiften og resternes værdi samlet overstiger handelsværdien uden registreringsafgift; for varebiler med registreringsafgift efter myndighedernes regler.", TRYG],
    ["Tryg: Kontanterstatning udbetales, hvis varebilen efter tyveri ikke er fundet inden 28 dage efter anmeldelse til politiet og Tryg.", TRYG],
    ["Tryg: Hele varebilen tilhører Tryg, når der er udbetalt kontanterstatning.", TRYG],
    ["Ayvens: GAP står for Guaranteed Asset Protection; GAP-dækningen er en totalskadeforsikring, og med den undgår man at stå tilbage med et tab efter en totalskade.", AY_GAP],
    ["Trygs pakke Leasing er med i Udvidet og Super, og pakkerne dækker varebiler med totalvægt op til 3.500 kg.", TRYG_SIDE],
    ["Tryg: Førstegangsydelse er det beløb, der betales forud for levering af leasingbilen; merydelse ved leasing af ny bil, leveringsomkostninger, provision, depositum og gebyrer regnes ikke med.", TRYG],
    ["Tryg: Leasing kan kun købes sammen med kaskoforsikring, og en evt. Førsteydelsesdækning skal være tegnet samtidig med kaskoforsikringen.", TRYG],
    ["GF afleveringsforsikring: pludselig skade er en skade, der sker på et tidspunkt og ikke over et tidsrum; pludselige mekaniske skader dækkes, hvis en evt. service- og vedligeholdelsesaftale er overholdt.", GF],
    ["GF: Opsiger forsikringstager selv kasko og/eller Friskade, bortfalder afleveringsforsikringen pr. samme dato.", GF],
    ["Tryg: Det er en betingelse, at skader ved aflevering anmeldes til Tryg, og at der er udfærdiget en afleveringsrapport, som Tryg kan godkende.", TRYG],
    ["Tryg: Mindre skader er skader, som efter taksators opgørelse kan repareres inden for det maksimale beløb i forsikringsaftalen, uden moms; større reparationer kan anmeldes som almindelig kaskoskade.", TRYG],
    ["Tryg: Repareres varebilen ikke, svarer erstatningen til det beløb, man pålægges efter leasingkontrakten, dog højst leasingejers dokumenterede tab.", TRYG],
    ["GF skal straks have besked, når leasingselskabet rejser krav ved aflevering, og GF skriver, at forsikringstager bør undlade at tage stilling til leasingselskabets opgørelse, før taksator har besigtiget bilen.", GF],
    ["Stenslag i lakken er slid (GF punkt 4.2: lakskader på grund af stenslag; Tryg 4.5 c), og rust er ikke dækket (GF 12.3, Tryg 4.5 d).", GF],
    ["Tryg: Lånebilen leveres på ikke brofaste øer ved nærmeste færgeleje på fastlandet, og Tryg kan yde kontant erstatning for perioden, hvis der ikke kan skaffes en lånebil.", TRYG],
    ["F&P: Reparerede deklarationsskader erstattes ekskl. moms, når leasinggiver kan afløfte momsen; i praksis betaler selskabet værkstedet inkl. moms og beder leasinggiver afløfte momsen, og leasinggiver beregner ikke gebyr for det.", FP],
    ["Tryg: Kaskoforsikringen ophører på datoen og tidspunktet for aflevering til leasingejer.", TRYG],
    ["RETTET (præciseret): GF punkt 2.4 siger, at kaskoen ophører fra afleveringstidspunktet, såfremt forsikringstager kunne have valgt Afleveringsforsikring ved leasing (punkt 12.1) ved forsikringens køb. Den gamle side skrev blot, at kaskoen ophører ved aflevering.", GF],
    ["F&P: Vil det nye selskab ikke notere deklarationen (fx kun ansvarsforsikring), er kreditor dækket hos det afgivende selskab i 26 uger fra meddelelsen om kaskoforsikringens ophør.", FP],
    ["F&P: Ved manglende præmiebetaling kan kreditor opretholde forsikringen ved at indbetale præmien inden for den frist, forsikringstageren har efter FAL.", FP],
    ["GF: Betales en opkrævning stadig ikke efter rykkerbrev, slettes kaskoforsikringen, panthaver underrettes, og politiet underrettes med henblik på inddragelse af nummerpladerne.", GF]
  ]
};
