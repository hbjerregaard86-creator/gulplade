// Underside /til-varebilen/vinterhjul/helaarsdaek-til-varebil/ (07-10-2026)
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var FS_MIS = `https://www.fstyr.dk/nyheder/2025/okt/misforstaaelser-om-vinterdaek-det-siger-reglerne`;
var FS_VEJ = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var TH1 = `https://www.thansen.dk/bil/daek-og-faelge/helaarsdaek/16-daek/continental-215-65-16c-109-107t-vancontact-4-season-8pr/n-241666596/pn-234101745/`;
var TH2 = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-106-104r-vancontact-winter/n-1930828057/pn-245767309/`;
var TH3 = `https://www.thansen.dk/bil/daek-og-faelge/vinterdaek/16-daek/continental-215-65-16c-109-107r-vancontact-winter-8p/n-1930828057/pn-245851087`;
var CONT_PR = `https://continental.com/en/press/press-releases/20211214-vancontacs-a-s-ultra`;
var CONT_VH = `https://www.continental-tires.com/dk/da/tire-knowledge/winter-vs-all-season-tires/`;
var CONT_VS = `https://www.continental-tires.com/dk/da/tire-knowledge/winter-tires-in-summer/`;
var CONT_SKIFT = `https://www.continental-tires.com/dk/da/tire-knowledge/changing-tires/`;
var MICH = `https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles`;
var HESSEL = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;
var AYVENS = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var NORDANIA = `https://www.nordania.dk/erhverv/nyheder/fleet/nye-regler-for-vinterdaek-i-danmark`;
var STVZO = `https://www.gesetze-im-internet.de/stvzo_2012/__36.html`;
var TS = `https://www.transportstyrelsen.se/sv/vagtrafik/fordon/fordonsregler/dack/vinterdack/`;
var VV = `https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/`;
var E_4S = `https://eprel.ec.europa.eu/informationsheet/Fiche_483054_DA.pdf`;
var E_CC = `https://eprel.ec.europa.eu/informationsheet/Fiche_408266_DA.pdf`;
var E_VWR = `https://eprel.ec.europa.eu/informationsheet/Fiche_483202_DA.pdf`;
var E_VWS = `https://eprel.ec.europa.eu/informationsheet/Fiche_1332965_DA.pdf`;

module.exports = {
  id: "vinterhjul/helaarsdaek-til-varebil",
  side: {
    slug: "helaarsdaek-til-varebil",
    navn: "Helårsdæk til varebil",
    titel: "Helårsdæk til varebil: 3PMSF og priser",
    kort: `Helårsdæk mod sommer- og vinterdæk, 3PMSF-mærket, EU-dækmærket og priser på C-dæk fra danske forhandlere.`,
    beskrivelse: `Helårsdæk til varebil: reglen om vinterføre, M+S og 3PMSF, priser på C-dæk i 215/65 R16C og hvad du sparer på skift og dækhotel.`,
    manchet: `Et helårsdæk sidder på bilen hele året, så der er ingen skift og ingen opbevaring. Der er ikke krav om vinterdæk i Danmark, men dæk må ikke være åbenbart uegnede til føret. Her kan du se mærkningerne, EU-dækmærket på tre varebildæk og priserne hos danske forhandlere.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Krav om vinterdæk i Danmark", "Nej", "men dækkene må ikke være åbenbart uegnede"],
        ["Fire helårsdæk fra Thansen", "fra 4.396 kr.", "i 215/65 R16C før montage"],
        ["Mønsterdybde", "mindst 1,6 mm", "for alle dæk hele året"],
        ["Dækhotel med hjulskift, Hessel", "995 kr.", "pr. sæson"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre slags dæk efter reglerne",
        tekst: [
          `Færdselsstyrelsens synsvejledning deler dæk op efter anvendelse. Ordet helårsdæk findes ikke i reglerne. Færdselsstyrelsen kalder det en betegnelse fra markedsføringen og skriver, at mærkningen og egenskaberne varierer fra fabrikat til fabrikat.`,
          `M+S, MS og M&S betyder alle, at dækket er et typegodkendt vinterdæk. 3PMSF er alpesymbolet med tre bjergtinder og et snefnug, som også kaldes snegrebsmærket. Færdselsstyrelsen beskriver det som mærket for dæk, der er særligt egnede til de hårde vinterdage med sne og is på vejene.`
        ],
        tabel: {
          kolonner: ["Type", "Mærkning", "Beregnet til"],
          raekker: [
            ["Almindeligt dæk", "Uden M+S", "Ingen vintermærkning"],
            ["Terræn- og vinterdæk", "M+S", "Terræn og vinter"],
            ["Vinterdæk til krævende sneforhold", "M+S og alpesymbolet 3PMSF", "Krævende sneforhold"]
          ],
          note: `Kilde: <a href="${SYN}" rel="noopener">Færdselsstyrelsen, Vejledning om syn af køretøjer, afsnit 8.02</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Tre sidevægge: uden vintermærkning, med M+S og med M+S og alpesymbolet 3PMSF"><text class="tg-fremhaev" x="0" y="37">Almindeligt</text><text class="tg-lille" x="0" y="52">INTET VINTERMÆRKE</text><rect class="tg-profil" x="130" y="20" width="266" height="40" rx="6"/><text x="144" y="45">215/65 R16C</text><text class="tg-fremhaev" x="0" y="97">M+S-dæk</text><text class="tg-lille" x="0" y="112">TERRÆN OG VINTER</text><rect class="tg-profil" x="130" y="80" width="266" height="40" rx="6"/><text x="144" y="105">215/65 R16C</text><text class="tg-fremhaev" x="260" y="105">M+S</text><text class="tg-fremhaev" x="0" y="157">3PMSF-dæk</text><text class="tg-lille" x="0" y="172">KRÆVENDE SNE</text><rect class="tg-profil" x="130" y="140" width="266" height="40" rx="6"/><text x="144" y="165">215/65 R16C</text><text class="tg-fremhaev" x="260" y="165">M+S</text><path class="tg-modul" d="M318,174 L330,148 L338,160 L345,146 L360,174 Z"/></svg>`,
          tekst: `Tegningen er skematisk og viser mærkningen på sidevæggen for de tre slags dæk i Færdselsstyrelsens synsvejledning.`
        },
        efter: [
          `Et helårsdæk kan have M+S, 3PMSF eller begge. Det er mærkningen, der afgør kategorien, ikke ordet helårs. Kilde: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Reglen om vinterføre",
        tekst: [
          `Der er hverken krav om vinterdæk eller nye regler om dem, oplyser Færdselsstyrelsen. Færdselsloven blev præciseret 1. juli 2025, så føreren har ansvaret for, at dækkene ikke er åbenbart uegnede til det aktuelle og forventede føre. Færdselsstyrelsen skriver, at M+S-dæk er godkendte vinterdæk, og anbefaler 3PMSF-dæk til hårdt vinterføre.`,
          `Reglen står i færdselslovens § 67, stk. 3. Føreren skal til enhver tid sikre, at køretøjet ikke er forsynet med åbenbart uegnede dæk. Efter stk. 2 er ejeren eller den bruger, der har varig rådighed over bilen, ansvarlig for, at den er i lovlig stand.`,
          `Bliver bilen fanget af vinterføre under kørslen, og passer dækkene ikke til det, må føreren ikke køre videre, skriver Færdselsstyrelsen. Kører føreren alligevel videre, kan politiet give en bøde. Vinterføre er is, sjap og sne på vejene.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Før turen", "Føreren vurderer, om dækkene passer til føret nu og det føre, der er ventet."],
            ["Under turen", "Kommer der vinterføre, som dækkene ikke passer til, må bilen ikke køre videre."],
            ["Kontrol", "Politiet vurderer det i den enkelte situation og kan give en bøde."]
          ]
        },
        efter: [
          `Kilder: <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen: Misforståelser om vinterdæk</a> og <a href="${FL}" rel="noopener">færdselsloven, LBK nr. 118 af 12/01/2026, § 67</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det kan et helårsdæk",
        tekst: [
          `Et helårsdæk er et kompromis mellem et sommerdæk og et vinterdæk. Continental skriver, at helårsdæk kombinerer elementer fra begge og giver pålideligt vejgreb i regn og i milde vintre.`,
          `Continental skriver også, at vinterdæk er tilpasset kolde vintre med sne og is, og at helårsdæk ikke er udviklet til det. Fordelen ved helårsdækket er, at du sparer penge, tid og besvær med skiftene.`,
          `Et sommerdæk egner sig til kørsel hele året undtagen i vinterføre, skriver Færdselsstyrelsen. Et helårsdæk med 3PMSF er derimod godkendt som vinterdæk til krævende sneforhold, selv om det kører hele sommeren.`
        ]
      },
      {
        overskrift: "Helårsdæk eller to sæt hjul",
        tekst: [
          `Med helårsdæk har bilen fire dæk på ét sæt fælge. Med sommer- og vinterhjul har virksomheden otte dæk og ofte to sæt fælge, som skal skiftes to gange om året og opbevares imellem.`,
          `Har bilen direkte TPMS, altså en tryksensor i hvert hjul, skal vinterhjulene også have sensorer. Med helårsdæk er der kun ét sæt sensorer.`
        ],
        tabel: {
          kolonner: ["", "Helårsdæk", "Sommer- og vinterhjul"],
          raekker: [
            ["Antal dæk", "4", "8"],
            ["Fælge", "Ét sæt", "To sæt, hvis vinterdækkene sidder på egne fælge"],
            ["Skift om året", "Ingen", "To"],
            ["Opbevaring", "Ingen", "I firmaet eller på dækhotel"],
            ["TPMS-sensorer", "Ét sæt", "Ét sæt pr. hjulsæt ved direkte TPMS"]
          ]
        },
        figur: {
          type: "noegletal",
          data: [
            ["Hjulskift med dækhotel", 500, "kr."],
            ["Hjulskift uden dækhotel", 800, "kr."],
            ["Dækhotel med hjulskift", 995, "kr. pr. sæson"]
          ],
          note: `Priserne er fra <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 4. oktober 2026. Med helårsdæk skal hjulene hverken skiftes eller opbevares.`
        },
        efter: [
          `Hos Hessel koster et hjulskift 500 kr. med dækhotel og 800 kr. uden. Dækhotel med hjulskift koster 995 kr. pr. sæson. Kilde: <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 4. oktober 2026. Mere om opbevaring i <a href="/til-varebilen/vinterhjul/daekhotel/">dækhotel</a>.`
        ]
      },
      {
        overskrift: "Hvornår helårsdækket passer",
        tekst: [
          `Continental nævner tre ting, der afgør valget: det lokale klima, hvor meget bilen kører, og hvor den kører. Bliver det ofte koldt om vinteren, er vinterdæk det sikreste valg, skriver Continental.`,
          `Bruges bilen kun en gang imellem til korte ture i byen, er to skift om året måske ikke det værd, og helårsdæk kan være et alternativ. Kører bilen ofte og langt, også ud i afsides eller kolde områder, er skift til vinterdæk typisk det sikre valg.`,
          `To biler i samme firma kan altså have brug for forskellige dæk, hvis den ene kører korte ture i byen, og den anden kører langt ud på landet hver dag.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 238" role="img" aria-label="Beslutningstræ efter Continentals kriterier. Kører bilen ofte og langt, også i kulde og sne, er vinterdæk typisk valget. Kører den korte ture i byen, kan helårsdæk være nok. Til hårdt vinterføre anbefaler Færdselsstyrelsen dæk med alpesymbol."><defs><marker id="pil-helaarsdaek-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="54"/><text x="200" y="28" text-anchor="middle">Kører bilen ofte og langt,</text><text class="tg-fremhaev" x="200" y="46" text-anchor="middle">også i kulde og sne?</text><line class="tg-pil" x1="130" y1="60" x2="100" y2="96" marker-end="url(#pil-helaarsdaek-1)"/><line class="tg-pil" x1="270" y1="60" x2="300" y2="96" marker-end="url(#pil-helaarsdaek-1)"/><text x="104" y="82" text-anchor="end">Ja</text><text x="296" y="82">Nej</text><rect class="tg-kasse" x="20" y="100" width="170" height="52"/><text x="105" y="122" text-anchor="middle">Vinterdæk om</text><text x="105" y="138" text-anchor="middle">vinteren</text><rect class="tg-modul" x="210" y="100" width="170" height="52"/><text class="tg-modul__tekst" x="295" y="122" text-anchor="middle">HELÅRSDÆK KAN</text><text class="tg-modul__tekst" x="295" y="138" text-anchor="middle">VÆRE NOK</text><line class="tg-skinne-tynd" x1="105" y1="152" x2="105" y2="180"/><line class="tg-skinne-tynd" x1="295" y1="152" x2="295" y2="180"/><rect class="tg-kasse" x="20" y="180" width="360" height="50"/><text x="200" y="201" text-anchor="middle">Til hårdt vinterføre anbefaler</text><text x="200" y="219" text-anchor="middle">Færdselsstyrelsen dæk med 3PMSF</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${CONT_VH}" rel="noopener">Continental: Vinterdæk eller helårsdæk</a> og <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen: Misforståelser om vinterdæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser på helårs- og vinterdæk",
        tekst: [
          `Vejledende priser pr. dæk hos Thansen i dimensionen 215/65 R16C. Det er webshoppens forbrugerpriser med moms og uden montering.`,
          `Helårsdækket koster omtrent det samme som de to vinterdæk i samme størrelse. Forskellen mellem det billigste og det dyreste af de tre er 30 kr. pr. dæk. Det billigste helårsdæk i dimensionen kostede 1.099 kr. hos Thansen, så fire helårsdæk koster fra 4.396 kr. før montage.`
        ],
        tabel: {
          kolonner: ["Dæk", "Type", "3PMSF", "Pr. dæk"],
          raekker: [
            ["Continental VanContact 4Season 109/107T", "Helårs", "Ja", "1.479 kr."],
            ["Continental VanContact Winter 106/104R", "Vinter", "Ja", "1.449 kr."],
            ["Continental VanContact Winter 8P 109/107R", "Vinter", "Ja", "1.469 kr."]
          ],
          note: `Kilde: Thansens produktsider (<a href="${TH1}" rel="noopener">VanContact 4Season</a>, <a href="${TH2}" rel="noopener">VanContact Winter</a>, <a href="${TH3}" rel="noopener">VanContact Winter 8P</a>), set den 4. oktober 2026. Montage koster 149 kr. (dæk på fælg) eller 249,95 kr. (dæk på fælg og bil).`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Continental VanContact Winter 106/104R", 1449, "vinter, 3PMSF"],
            ["Continental VanContact Winter 8P 109/107R", 1469, "vinter, 3PMSF"],
            ["Continental VanContact 4Season 109/107T", 1479, "helårs, 3PMSF"]
          ],
          note: `Søjlerne viser prisen pr. dæk i 215/65 R16C. Kilde: Thansens produktsider (<a href="${TH1}" rel="noopener">VanContact 4Season</a>, <a href="${TH2}" rel="noopener">VanContact Winter</a>, <a href="${TH3}" rel="noopener">VanContact Winter 8P</a>), set den 4. oktober 2026. Montage koster 149 kr. for dæk på fælg og 249,95 kr. for dæk på fælg og bil.`
        },
        efter: [
          `Priserne er fra den 4. oktober 2026. Hvad det koster at skifte og opbevare et ekstra sæt hjul, står i afsnittet om to sæt hjul ovenfor.`
        ]
      },
      {
        overskrift: "EU-dækmærket på fire varebildæk",
        tekst: [
          `Nye dæk sælges med et EU-dækmærke, og databladet ligger i EU's produktdatabase EPREL. Her kan du sammenligne to helårsdæk og to vinterdæk i samme størrelse og med samme belastningsindeks.`,
          `Alle fire er godkendt til krævende sneforhold og har altså alpesymbolet. De to helårsdæk har vådgrebsklasse A, mens de to vinterdæk har B. Støjen ligger på 72 til 73 dB for alle fire.`,
          `På databladet for et varebildæk er linjen om krævende sneforhold den eneste, der handler om vinter. Et personbildæks datablad har også en linje om isgreb, men den findes ikke for varebildæk.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["215/65 R16C 109/107", "Brændstof", "Vådgreb", "Støj", "Krævende sne"],
          raekker: [
            ["Continental VanContact 4Season, helårs", "B", "A", "73 dB", "ja"],
            ["Michelin Agilis CrossClimate, helårs", "C", "A", "73 dB", "ja"],
            ["Continental VanContact Winter R, vinter", "C", "B", "73 dB", "ja"],
            ["Continental VanContact Winter S, vinter", "C", "B", "72 dB", "ja"]
          ],
          note: `Kilder: EPREL, produktdatablade <a href="${E_4S}" rel="noopener">483054</a>, <a href="${E_CC}" rel="noopener">408266</a>, <a href="${E_VWR}" rel="noopener">483202</a> og <a href="${E_VWS}" rel="noopener">1332965</a>, set den 7. oktober 2026. R og S er hastighedsklasserne 170 og 180 km/t.`
        }
      },
      {
        overskrift: "Hvad producenterne lægger vægt på",
        tekst: [
          `Helårsdæk til varebiler er C-dæk ligesom andre varebildæk, og producenterne fremhæver bæreevnen og en sidevæg, der kan tåle kantsten. Oveni kommer de detaljer i mønsteret, der skal give greb på sne.`
        ],
        punkter: [
          `<strong>Continental VanContact A/S Ultra.</strong> Et helårsdæk til varebiler i pakke- og håndværkerkørsel, fx Sprinter, Crafter og Ducato. Continental fremhæver kilometertal, rullemodstand, holdbarhed og en synlig indikator for 3–5 mm mønsterdybde.`,
          `<strong>Michelin Agilis CrossClimate.</strong> Fås i samme dimension med flere belastningsniveauer, fx 235/65R16 med 115/113 eller 121/119. Michelin beskriver dækket som et helårsdæk med C-mærkning, vådgreb A og 3PMSF.`,
          `<strong>Thansen om helårsdæk.</strong> Forhandleren beskriver helårsdæk som et by-dæk til kørsel uden lange ture.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Slidbane og sidevæg på et helårsdæk til varebil set ovenfra med fire detaljer: snefælder i rillerne, lameller i blokkene, en slidindikator med tallene 5, 4 og 3 og en beskyttelsesribbe på sidevæggen."><rect class="tg-profil" x="18" y="22" width="184" height="182" rx="6"/><rect class="tg-kasse" x="24" y="28" width="48" height="38"/><rect class="tg-kasse" x="86" y="28" width="48" height="38"/><rect class="tg-kasse" x="148" y="28" width="48" height="38"/><rect class="tg-kasse" x="24" y="72" width="48" height="38"/><rect class="tg-kasse" x="86" y="72" width="48" height="38"/><rect class="tg-kasse" x="148" y="72" width="48" height="38"/><rect class="tg-kasse" x="24" y="116" width="48" height="38"/><rect class="tg-kasse" x="86" y="116" width="48" height="38"/><rect class="tg-kasse" x="148" y="116" width="48" height="38"/><rect class="tg-kasse" x="24" y="160" width="48" height="38"/><rect class="tg-kasse" x="86" y="160" width="48" height="38"/><rect class="tg-kasse" x="148" y="160" width="48" height="38"/><rect class="tg-modul" x="72" y="64" width="14" height="5"/><rect class="tg-modul" x="72" y="108" width="14" height="5"/><rect class="tg-modul" x="72" y="152" width="14" height="5"/><rect class="tg-modul" x="134" y="64" width="14" height="5"/><rect class="tg-modul" x="134" y="108" width="14" height="5"/><rect class="tg-modul" x="134" y="152" width="14" height="5"/><polyline class="tg-skillevaeg" fill="none" points="90,86 98,80 106,86 114,80 122,86 130,80"/><polyline class="tg-skillevaeg" fill="none" points="90,96 98,90 106,96 114,90 122,96 130,90"/><polyline class="tg-skillevaeg" fill="none" points="152,42 160,36 168,42 176,36 184,42 192,36"/><polyline class="tg-skillevaeg" fill="none" points="90,174 98,168 106,174 114,168 122,174 130,168"/><polyline class="tg-skillevaeg" fill="none" points="152,130 160,124 168,130 176,124 184,130 192,124"/><text class="tg-fremhaev" x="31" y="140">5 4 3</text><rect class="tg-profil" x="212" y="22" width="26" height="182" rx="4"/><line class="tg-skillevaeg" x1="212" y1="40" x2="238" y2="40"/><line class="tg-skillevaeg" x1="212" y1="58" x2="238" y2="58"/><line class="tg-skillevaeg" x1="212" y1="76" x2="238" y2="76"/><line class="tg-skillevaeg" x1="212" y1="94" x2="238" y2="94"/><line class="tg-skillevaeg" x1="212" y1="112" x2="238" y2="112"/><line class="tg-skillevaeg" x1="212" y1="130" x2="238" y2="130"/><line class="tg-skillevaeg" x1="212" y1="148" x2="238" y2="148"/><line class="tg-skillevaeg" x1="212" y1="166" x2="238" y2="166"/><line class="tg-skillevaeg" x1="212" y1="184" x2="238" y2="184"/><line class="tg-skillevaeg" x1="225" y1="22" x2="225" y2="40"/><line class="tg-skillevaeg" x1="225" y1="58" x2="225" y2="76"/><line class="tg-skillevaeg" x1="225" y1="94" x2="225" y2="112"/><line class="tg-skillevaeg" x1="225" y1="130" x2="225" y2="148"/><line class="tg-skillevaeg" x1="225" y1="166" x2="225" y2="184"/><g class="tg-call"><line x1="141" y1="66" x2="258" y2="40"/><circle cx="141" cy="66" r="3"/><text class="tg-call__navn" x="262" y="36">Snefælder</text><text class="tg-call__under" x="262" y="50">barer i rillerne</text></g><g class="tg-call"><line x1="114" y1="90" x2="258" y2="96"/><circle cx="114" cy="90" r="3"/><text class="tg-call__navn" x="262" y="92">3D-lameller</text><text class="tg-call__under" x="262" y="106">greb på sne og våd vej</text></g><g class="tg-call"><line x1="60" y1="144" x2="258" y2="152"/><circle cx="60" cy="144" r="3"/><text class="tg-call__navn" x="262" y="148">Slidindikator</text><text class="tg-call__under" x="262" y="162">viser 5, 4 og 3 mm</text></g><g class="tg-call"><line x1="230" y1="194" x2="258" y2="208"/><circle cx="230" cy="194" r="3"/><text class="tg-call__navn" x="262" y="204">Sidevæg</text><text class="tg-call__under" x="262" y="218">ribbe mod kantsten</text></g></svg>`,
          tekst: `Skematisk. Detaljerne på Continental VanContact A/S Ultra, som Continental beskriver dem. Kilde: <a href="${CONT_PR}" rel="noopener">Continental, pressemeddelelse 14. december 2021</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Continental skriver, at snefælderne holder sneen fast i rillerne, så dækket får godt greb i sneen på vejen. Lamellerne er udformet, så de stabiliserer mønsterblokkene, og beskyttelsesribben på sidevæggen har et mønster som mursten. Dækket blev lanceret i fire størrelser med 16 tommer fælg.`
        ]
      },
      {
        overskrift: "Mønsterdybden gælder året rundt",
        tekst: [
          `Kravet er 1,6 mm for både sommer-, vinter- og helårsdæk. Slidindikatorerne i hovedmønsteret viser, når 1,6 mm er nået. Mere i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`,
          `Nye dæk har typisk en mønsterdybde på 7 til 8 mm, skriver Færdselsstyrelsen. Dybden måles i hovedmønsteret, som er de brede riller i den midterste del af slidbanen og dækker cirka tre fjerdedele af bredden.`,
          `Et helårsdæk kører alle årets kilometer, mens et sæt sommer- og vinterdæk deler dem mellem sig. Færdselsstyrelsen skriver, at et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Sommerdæk, mindst", "1,6", "mm"],
            ["Vinterdæk, mindst", "1,6", "mm"],
            ["Helårsdæk, mindst", "1,6", "mm"]
          ],
          note: `Kravet er det samme hele året. Slidindikatorerne i hovedmønsteret viser, når 1,6 mm er nået. Kilder: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.002</a> og <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Mønster i den sidste del af levetiden",
        tekst: [
          `Lovkravet i Danmark er 1,6 mm. Sverige og Norge kræver 3 mm om vinteren. Et helårsdæk med 2 mm er derfor lovligt herhjemme, men ikke på vinterføre i den svenske vinterperiode og ikke i den norske vintertid.`,
          `Hessel anbefaler at skifte sommerdæk ved 3 mm, vinterdæk ved 4 mm og dæk, der er mere end 6 år gamle.`
        ],
        figur: {
          type: "soejler",
          enhed: "mm",
          data: [
            ["Lovkrav i Danmark", 1.6],
            ["Sverige og Norge om vinteren", 3],
            ["Hessels anbefaling, sommerdæk", 3],
            ["Hessels anbefaling, vinterdæk", 4]
          ],
          note: `Søjlerne viser den mindste mønsterdybde. Kilderne står under afsnittet.`
        },
        efter: [
          `Kilder: <a href="${TS}" rel="noopener">Transportstyrelsen</a>, <a href="${VV}" rel="noopener">Statens vegvesen</a> og <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Lameller i mønsteret",
        tekst: [
          `Et vinterdæk har lameller: tynde snit i mønsterblokkene. Sommerdæk egner sig til kørsel hele året undtagen i vinterføre, skriver Færdselsstyrelsen. Vinterføre er is, sjap og sne.`,
          `Gummiet betyder lige så meget som mønsteret. Continental skriver, at gummiblandingen i et vinterdæk er lavet til at forblive blød og fleksibel under 7 °C. Et helårsdæk har lameller og riller som et vinterdæk, så det kan klare mildt vintervejr.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Mønsterblok uden lameller og mønsterblok med lameller set ovenfra"><rect x="40" y="40" width="130" height="120" rx="8" class="tg-profil"/><rect x="230" y="40" width="130" height="120" rx="8" class="tg-profil"/><polyline points="242,62 262,56 282,62 302,56 322,62 348,56" fill="none" class="tg-gulvlinje"/><polyline points="242,86 262,80 282,86 302,80 322,86 348,80" fill="none" class="tg-gulvlinje"/><polyline points="242,110 262,104 282,110 302,104 322,110 348,104" fill="none" class="tg-gulvlinje"/><polyline points="242,134 262,128 282,134 302,128 322,134 348,128" fill="none" class="tg-gulvlinje"/><text x="40" y="182" class="tg-fremhaev">Uden lameller</text><text x="40" y="198" class="tg-lille">SOMMERDÆK</text><text x="230" y="182" class="tg-fremhaev">Med lameller</text><text x="230" y="198" class="tg-lille">VINTERDÆK</text><text x="40" y="28" class="tg-lille">MØNSTERBLOK SET OVENFRA</text></svg>`,
          tekst: `Mønsterblok uden og med lameller. Skematisk. Kilde: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen, Vejledning om dæk</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${CONT_VS}" rel="noopener">Continental: Vinterdæk om sommeren</a> og <a href="https://www.continental-tires.com/dk/da/tire-knowledge/summer-tires-in-winter/" rel="noopener">Continental: Sommerdæk om vinteren</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vinterdæk hele året",
        tekst: [
          `Lader du vinterdækkene sidde om sommeren, sparer du et skift. Continental skriver, at det kan forkorte dækkenes levetid med op til 60 %, fordi det bløde gummi slides hurtigere på varm asfalt.`,
          `Vinterdækket har også en højere rullemodstand på varme veje, så bilen bruger mere diesel eller strøm. Færdselsstyrelsen skriver, at vinterdæk om sommeren giver en dårligere bremseevne og et højere forbrug.`,
          `Det er her, helårsdækket adskiller sig. Det er lavet til at kunne køre hele året, mens et vinterdæk er lavet til kulde.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Kortere levetid med vinterdæk hele året", "op til 60", "%"],
            ["Vinterdækkets gummi er lavet til under", "7", "°C"]
          ],
          note: `Kilde: <a href="${CONT_VS}" rel="noopener">Continental: Vinterdæk om sommeren</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skiftetidspunktet med to sæt hjul",
        tekst: [
          `Der er ingen fast dato for skiftet i Danmark. Det er føret, der afgør, hvornår dækkene skal skiftes, og værkstederne bruger temperaturen som tommelfingerregel.`,
          `Continental anbefaler sommerdæk fra påske til oktober og vinterdæk, når temperaturen kommer under 7 °C. Med helårsdæk falder begge skift væk, og bilen skal ikke på værkstedet for at skifte hjul i den travle periode, når den første frost kommer.`
        ],
        punkter: [
          `<strong>Efterår.</strong> Hessels tommelfingerregel er at skifte, når temperaturen ligger stabilt omkring 7 °C eller derunder.`,
          `<strong>Forår.</strong> Færdselsstyrelsen anbefaler sommerdæk, når frostrisikoen er ovre.`,
          `<strong>Booking.</strong> Står hjulene på dækhotellet, vil Hessel gerne have, at du booker mindst en uge i forvejen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 184" role="img" aria-label="Året fra januar til december. Med to sæt hjul kører bilen på vinterdæk til påske, på sommerdæk til oktober og skifter igen, når temperaturen kommer under 7 grader. Med helårsdæk kører bilen på det samme sæt hele året uden skift."><text class="tg-fremhaev" x="0" y="58">To sæt</text><text class="tg-fremhaev" x="0" y="118">Helårs</text><text class="tg-lille" x="158" y="24" text-anchor="middle">PÅSKE</text><text class="tg-lille" x="326" y="24" text-anchor="middle">UNDER 7 °C</text><rect class="tg-modul" x="60" y="40" width="98" height="26"/><text class="tg-modul__tekst" x="70" y="57">VINTER</text><rect class="tg-kasse" x="158" y="40" width="168" height="26"/><text x="168" y="57">sommerdæk</text><rect class="tg-modul" x="326" y="40" width="70" height="26"/><text class="tg-modul__tekst" x="334" y="57">VINTER</text><line class="tg-doer" x1="158" y1="32" x2="158" y2="74"/><line class="tg-doer" x1="326" y1="32" x2="326" y2="74"/><rect class="tg-kasse" x="60" y="100" width="336" height="26"/><text x="70" y="117">samme dæk hele året</text><text class="tg-lille" x="60" y="146">INGEN SKIFT OG INGEN OPBEVARING</text><text class="tg-lille" x="74" y="176" text-anchor="middle">J</text><text class="tg-lille" x="102" y="176" text-anchor="middle">F</text><text class="tg-lille" x="130" y="176" text-anchor="middle">M</text><text class="tg-lille" x="158" y="176" text-anchor="middle">A</text><text class="tg-lille" x="186" y="176" text-anchor="middle">M</text><text class="tg-lille" x="214" y="176" text-anchor="middle">J</text><text class="tg-lille" x="242" y="176" text-anchor="middle">J</text><text class="tg-lille" x="270" y="176" text-anchor="middle">A</text><text class="tg-lille" x="298" y="176" text-anchor="middle">S</text><text class="tg-lille" x="326" y="176" text-anchor="middle">O</text><text class="tg-lille" x="354" y="176" text-anchor="middle">N</text><text class="tg-lille" x="382" y="176" text-anchor="middle">D</text></svg>`,
          tekst: `Skematisk. Påsken og den første frost flytter sig fra år til år. Kilder: <a href="${CONT_SKIFT}" rel="noopener">Continental: Dækskifte</a> og <a href="${HESSEL}" rel="noopener">Hessel</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${HESSEL}" rel="noopener">Hessel</a> og <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Helårsdækket i nabolandene",
        tekst: [
          `Et helårsdæk, der kun har M+S, er et godkendt vinterdæk i Danmark. I Tyskland og Sverige kræver reglerne alpesymbolet.`,
          `I Sverige skal en varebil have vinterdæk fra 1. december til 31. marts, når der er vinterføre. Transportstyrelsen regner det som vinterføre, når der er sne, is, sjap eller rimfrost på en del af vejen, og det er politiet, der afgør det på stedet. Vinterdæk uden pigge skal have alpesymbolet.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Helårsdæk med", "Danmark", "Tyskland", "Sverige"],
          raekker: [
            ["Kun M+S", "ja", "nej", "nej"],
            ["3PMSF", "ja", "ja", "ja"]
          ],
          note: `Godkendt som vinterdæk på en varebil op til 3.500 kg. Sverige: M+S er kun tilladt på andre aksler end driv- og foraksler på biler over 3.500 kg. Kilder: <a href="${FS_MIS}" rel="noopener">Færdselsstyrelsen</a>, <a href="${STVZO}" rel="noopener">StVZO § 36, stk. 4</a> og <a href="${TS}" rel="noopener">Transportstyrelsen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Reglerne for perioder, pigdæk og anhængere står i <a href="/til-varebilen/vinterhjul/vinterdaek-i-udlandet/">vinterdæk i udlandet</a>. Kilde for Sverige: <a href="${TS}" rel="noopener">Transportstyrelsen: Vinterdäck</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dæk i leasingaftalen",
        tekst: [
          `Hos Ayvens kan sæsondæk være en del af aftalen. Er de det, og leveres bilen mellem 15. oktober og 31. marts, kommer den med vinterdæk på stålfælge uden hjulkapsler. Skiftet sker hos Dækpartner eller Superdæk.`,
          `Nordania skriver, at biler med en dækaftale hos dem får monteret vinterdæk med 3PMSF, og at føreren bestiller tid til skiftet i Nordania Bilapp eller på nordania.dk.`,
          `Står der ikke noget om dæk i aftalen, er det virksomhedens eget valg, om bilen skal have helårsdæk eller to sæt. Ingen af de {{tilbud}} tilbud på siden har dæk med i ydelsen. Hvad der ellers ligger uden for ydelsen, står i <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a>.`
        ],
        efter: [
          `Kilder: <a href="${AYVENS}" rel="noopener">Ayvens: Dæk til din leasingbil</a> og <a href="${NORDANIA}" rel="noopener">Nordania: Nye regler for vinterdæk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hårdt vintervejr",
        tekst: [
          `Fraråder politiet al udkørsel på grund af ekstremt vintervejr, anbefaler Færdselsstyrelsen at følge det. Skal bilen alligevel ud, anbefaler styrelsen kun at køre med 3PMSF-mærkede dæk og med et vinterberedskab i bilen.`,
          `Et helårsdæk med kun M+S er altså lovligt i Danmark, men det er ikke det dæk, Færdselsstyrelsen anbefaler på de dage. Styrelsen foreslår, at beredskabet består af disse ting:`
        ],
        punkter: [
          `Refleksvest og førstehjælpskasse.`,
          `Varmt tøj, lygte og værktøj.`,
          `Spade, mad og drikkevarer.`,
          `Radio.`
        ],
        efter: [
          `Kilde: <a href="${FS_VEJ}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal dækleverandøren vide",
    spoergsmaal_manchet: "Så kan tilbuddet sammenlignes med et sæt sæsonhjul.",
    spoergsmaal: [
      "Dimension og belastningsindeks.",
      "Om bilen kører i sne, på landeveje eller mest i byen.",
      "Kilometer om året.",
      "Om helårsdækket skal have 3PMSF.",
      "Om bilen kører til Sverige, Norge eller Tyskland om vinteren.",
      "Om der i dag er vinterhjul på egne fælge med TPMS-sensorer.",
      "Om dækkene er en del af leasingaftalen."
    ],
    faq: [
      ["Er helårsdæk lovlige om vinteren?", "Ja. Der er ikke krav om vinterdæk i Danmark. Dækkene må dog ikke være åbenbart uegnede til føret, og Færdselsstyrelsen anbefaler 3PMSF-dæk til hårdt vinterføre."],
      ["Hvad er forskellen på M+S og 3PMSF?", "M+S betyder mudder og sne. 3PMSF, alpesymbolet med tre tinder og et snefnug, betegner et vinterdæk til krævende sneforhold."],
      ["Er helårsdæk en officiel dæktype?", "Nej. Færdselsstyrelsen kalder helårsdæk en betegnelse fra markedsføringen. Det er mærkningen med M+S eller 3PMSF, der afgør, om dækket er et vinterdæk."],
      ["Hvad koster helårsdæk til en varebil?", "Hos Thansen fra 1.099 kr. pr. dæk i 215/65 R16C, inkl. moms og uden montering (oktober 2026). Continental VanContact 4Season koster 1.479 kr."],
      ["Skal helårsdæk have 1,6 mm mønster?", "Ja. Kravet er det samme for alle dæk hele året."],
      ["Kan dæk være med i leasingaftalen?", "Ja. Ayvens skriver, at sæsondæk kan være en del af aftalen, og at skiftet sker hos Dækpartner eller Superdæk. Nordania monterer vinterdæk med 3PMSF på biler med dækaftale."],
      ["Må man køre på helårsdæk i Tyskland om vinteren?", "Ja, hvis dækket har alpesymbolet (3PMSF). Ved glat føre kræver tysk lov dæk med alpesymbol på alle hjul. Kun M+S er ikke nok."],
      ["Hvornår skifter man til vinterdæk?", "Der er ingen dato i Danmark. Hessels tommelfingerregel er at skifte, når temperaturen er omkring 7 °C eller derunder, og Færdselsstyrelsen anbefaler at skifte i god tid før sne, is og sjap."],
      ["Hvad hvis vinterføret kommer, mens bilen er ude at køre?", "Passer dækkene ikke til føret, må føreren ikke køre videre, skriver Færdselsstyrelsen. Kører føreren videre, kan politiet give en bøde."],
      ["Holder vinterdæk længere, hvis de sidder på hele året?", "Nej. Continental skriver, at vinterdæk på bilen hele året kan få op til 60 % kortere levetid, fordi det bløde gummi slides hurtigere på varm asfalt."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026 (afsnit 8.02 Hjul og dæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Misforståelser om vinterdæk — det siger reglerne", url: FS_MIS, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FS_VEJ, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: FL, dato: "2026-10-07" },
      { navn: "Thansen: Continental 215/65-16C 109/107T VanContact 4Season", url: TH1, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 106/104R VanContact Winter", url: TH2, dato: "2026-10-04" },
      { navn: "Thansen: Continental 215/65-16C 109/107R VanContact Winter 8P", url: TH3, dato: "2026-10-04" },
      { navn: "Continental: VanContact A/S Ultra, helårsdæk til varebiler (pressemeddelelse 14.12.2021)", url: CONT_PR, dato: "2026-10-07" },
      { navn: "Continental: Vinterdæk eller helårsdæk", url: CONT_VH, dato: "2026-10-07" },
      { navn: "Continental: Vinterdæk om sommeren", url: CONT_VS, dato: "2026-10-07" },
      { navn: "Continental: Sommerdæk om vinteren", url: "https://www.continental-tires.com/dk/da/tire-knowledge/summer-tires-in-winter/", dato: "2026-10-07" },
      { navn: "Continental: Dækskifte", url: CONT_SKIFT, dato: "2026-10-07" },
      { navn: "Michelin: Reinforced tyres for utility vehicles (C, XL og REINF)", url: MICH, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 483054, Continental VanContact 4Season 215/65 R 16 C 109/107T", url: E_4S, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 408266, Michelin Agilis CrossClimate 215/65R16C 109/107T", url: E_CC, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 483202, Continental VanContact Winter 215/65 R 16 C 109/107R", url: E_VWR, dato: "2026-10-07" },
      { navn: "EPREL: Produktdatablad 1332965, Continental VanContact Winter 215/65 R 16 C 109/107S", url: E_VWS, dato: "2026-10-07" },
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HESSEL, dato: "2026-10-07" },
      { navn: "Ayvens: Dæk til din leasingbil", url: AYVENS, dato: "2026-10-07" },
      { navn: "Nordania: Nye regler for vinterdæk i Danmark (dækaftale og booking)", url: NORDANIA, dato: "2026-10-07" },
      { navn: "Tyskland, StVZO § 36 (dæk, alpesymbol og mønsterdybde)", url: STVZO, dato: "2026-10-04" },
      { navn: "Transportstyrelsen (Sverige): Vinterdäck", url: TS, dato: "2026-10-07" },
      { navn: "Statens vegvesen (Norge): Krav til dekk", url: VV, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Færdselsstyrelsen: helårsdæk er en markedsføringsbetegnelse, og dækkenes mærkning og egenskaber varierer mellem fabrikaterne.", FS_VEJ],
    ["Færdselsstyrelsen: mærkningerne M+S, MS og M&S betyder, at dækket er et typegodkendt vinterdæk; 3PMSF er også kendt som snegrebsmærket og betyder, at dækket er særligt egnet til de hårde vinterdage med sne og is.", FS_VEJ],
    ["Færdselslovens § 67, stk. 3: føreren skal til enhver tid være opmærksom på, at køretøjet ikke er forsynet med åbenbart uegnede dæk; stk. 2: ejeren eller brugeren med varig rådighed er ansvarlig for, at køretøjet er i lovlig stand.", FL],
    ["Færdselsstyrelsen: bliver man under kørsel fanget i vejr med vinterglatte veje, som dækkene ikke er egnet til, må man ifølge færdselsloven ikke køre videre; kører man videre på åbenbart uegnede dæk, risikerer man en bøde.", FS_MIS],
    ["Continental: helårsdæk kombinerer elementer fra sommer- og vinterdæk og giver pålideligt vejgreb i regnfulde, våde og milde vinterforhold; vinterdæk er tilpasset kolde vintre med sne og is, hvilket helårsdæk ikke er udviklet til; fordelen ved helårsdæk er besparelser på penge, tid og besvær ved skiftene.", CONT_VH],
    ["Continental: bruges bilen kun en gang imellem til korte ture i byområder, er to dækskift om året måske ikke det værd, og helårsdæk kan være et alternativ; bruges bilen ofte, til længere ture og i afsides eller kolde områder, er vinterdæk typisk det sikre valg; bliver det ofte koldt om vinteren, er det sikrere at skifte til vinterdæk.", CONT_VH],
    ["EPREL-datablade i 215/65 R16C 109/107: Continental VanContact 4Season (T) brændstof B, vådgreb A, 73 dB; Michelin Agilis CrossClimate (T) brændstof C, vådgreb A, 73 dB; Continental VanContact Winter (R) brændstof C, vådgreb B, 73 dB; Continental VanContact Winter (S) brændstof C, vådgreb B, 72 dB; alle fire er angivet som dæk til krævende sneforhold.", E_4S],
    ["Michelin beskriver Agilis CrossClimate som et helårsdæk til varebiler med C-mærkning, vådgrebsklasse A og 3PMSF.", MICH],
    ["Continental VanContact A/S Ultra: snow traps (små barer i rillerne) holder sneen i rillerne, 3D-lameller giver greb på sne og våd vej og stabiliserer mønsterblokkene, en scuff rib med murstensmønster beskytter sidevæggen mod kantsten, og en slidindikator viser 5, 4 og 3 mm; dækket blev lanceret i fire størrelser med 16 tommer diameter (fx Sprinter, Crafter, Ducato, V-Klasse og VW T6) i december 2021.", CONT_PR],
    ["Færdselsstyrelsen: nye dæk har typisk en mønsterdybde på ca. 7-8 mm; mønsterdybden måles i hovedmønsteret, de brede riller i slidbanens midterste del, der dækker ca. 3/4 af bredden; et nedslidt vinterdæk kan være farligere i vinterføre end et nyt sommerdæk i vinterføre.", FS_VEJ],
    ["Continental: vinterdækkets gummiblanding er lavet til at forblive blød og fleksibel under 7 °C; vinterdæk hele året kan reducere levetiden med op til 60 %; vinterdæk har højere rullemodstand på varme veje og giver højere brændstofforbrug.", CONT_VS],
    ["Continental: helårsdæk har tråd og riller som et vinterdæk, så de kan klare mildt vintervejr.", "https://www.continental-tires.com/dk/da/tire-knowledge/summer-tires-in-winter/"],
    ["Continental anbefaler sommerdæk fra påske til oktober og vinterdæk, når temperaturen kommer under 7 °C.", CONT_SKIFT],
    ["Transportstyrelsen: lette lastbiler skal have vinterdæk 1. december-31. marts ved vinterføre; vinterføre er sne, is, sjap eller rimfrost på en del af vejen, og politiet afgør det; vinterdæk uden pigge skal være mærket med alpesymbolet.", TS],
    ["Nordania: på firmabiler med dækaftale hos Nordania monteres vinterdæk med 3PMSF-mærkning, og tid til dækskifte bestilles via Nordania Bilapp eller nordania.dk.", NORDANIA],
    ["Færdselsstyrelsen: fraråder politiet al udkørsel ved ekstremt vintervejr, bør man følge det; er man nødt til at køre, bør det kun ske med 3PMSF-dæk og vinterberedskab (refleksvest, førstehjælpskasse, varmt tøj, lygte, værktøj, spade, mad og drikkevarer, radio).", FS_VEJ]
  ]
};
