// Underside /til-varebilen/service/frit-vaerkstedsvalg/ (07-10-2026)
// EUR-Lex var spærret i dag. Forordningerne og retningslinjerne er læst som PDF fra
// Publikationskontoret (op.europa.eu, samme dokumenter), og der linkes til EUR-Lex.
var R461 = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32010R0461`;
var R822 = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:32023R0822`;
var RETN = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:52010XC0528(01)`;
var RETN23 = `https://eur-lex.europa.eu/legal-content/DA/TXT/?uri=CELEX:52023XC0417(02)`;
var KFST = `https://www.kfst.dk/media/14402/indskaerpelse-til-brancheorganisationer-for-motorkoeretoejer.pdf`;
var FORD_G = `https://www.ford.dk/min-bil/garanti/varebiler`;
var FORD_G2 = `https://www.ford.dk/min-bil/garanti`;
var FORD_PRO = `https://www.ford.dk/erhverv/ford-pro-service`;
var VW_G = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var VW_PM = `https://www.volkswagen.dk/da/vaerksted/service/prismatch.html`;
var VW_5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;
var TOYOTA = `https://www.toyota.dk/erhvervsbiler/professional/toyota-relax`;
var MB_VM = `https://www.mercedes-benz.dk/vans/services/vehicle-maintenance.html`;
var NORD = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var AYV_S = `https://www.ayvens.com/da-dk/for-foerere/service-og-vedligeholdelse/`;
var SDS = `https://www.superdaek.dk/`;
var H_REN = `https://www.hessel.dk/vaerksted-service/ydelser/service/renault`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "service/frit-vaerkstedsvalg",
  side: {
    slug: "frit-vaerkstedsvalg",
    navn: "Frit værkstedsvalg",
    kort: `EU’s gruppefritagelse for motorkøretøjer, garanti ved service på et uafhængigt værksted, originale og tilsvarende dele, og hvad leasingaftalen kan kræve.`,
    titel: "Frit værkstedsvalg og garanti på varebil",
    beskrivelse: `Frit værkstedsvalg på varebil: EU-reglerne til 2028, garantien ved service uden for mærkeværkstedet, dele, data og leasingaftalens krav.`,
    manchet: `EU’s regler skal sikre, at uafhængige værksteder kan konkurrere med mærkeværkstederne. EU-Kommissionens retningslinjer betegner det som misbrug af garantien at gøre den betinget af, at alt arbejde uden for garantien udføres på et autoriseret værksted. En leasingaftale kan dog bestemme, hvor leasingselskabets bil skal serviceres.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["EU-forordning 461/2010", "til 31. maj 2028", "forlænget af forordning 2023/822"],
        ["Mærkeværksted ved leasing", "Kan kræves", "fx hos Nordania"],
        ["Prismatch hos VW", "højst 40 km", "fra det autoriserede værksted"],
        ["Toyota Relax", "op til 10 år", "eller 185.000 km"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad frit værkstedsvalg betyder",
        tekst: [
          `Frit værkstedsvalg betyder, at en købt varebil kan serviceres på et uafhængigt værksted, uden at fabriksgarantien går tabt. Servicen skal følge producentens forskrifter og kunne dokumenteres, mens selve garantiarbejdet laves på et autoriseret værksted. Ford skriver det direkte i sine svar om garanti på varebiler.`,
          `Reglerne kommer fra EU’s konkurrenceregler. Konkurrence- og Forbrugerstyrelsen har skrevet, at en effektiv konkurrence på reparation og vedligeholdelse af biler afhænger af konkurrencen mellem autoriserede og uafhængige værksteder.`,
          `En leasingaftale er en anden sag. Leasingselskabet ejer bilen og kan i aftalen bestemme, hvor den skal serviceres.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Beslutningstræ. Er bilen leaset, bestemmer leasingaftalen værkstedet. Er det garantiarbejde, skal det laves på et autoriseret værksted. Ellers kan service og reparation laves på et frit valgt værksted efter producentens forskrifter og med dokumentation."><defs><marker id="pil-frit-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="8" width="230" height="32"/><text x="125" y="28" text-anchor="middle">Er bilen leaset?</text><rect class="tg-kasse" x="280" y="4" width="112" height="40"/><text x="336" y="20" text-anchor="middle">Leasingaftalen</text><text x="336" y="36" text-anchor="middle">bestemmer</text><rect class="tg-kasse" x="10" y="76" width="230" height="32"/><text x="125" y="96" text-anchor="middle">Er det garantiarbejde?</text><rect class="tg-kasse" x="280" y="72" width="112" height="40"/><text x="336" y="88" text-anchor="middle">Autoriseret</text><text x="336" y="104" text-anchor="middle">værksted</text><rect class="tg-modul" x="10" y="144" width="230" height="62"/><text class="tg-modul__tekst" x="125" y="164" text-anchor="middle">FRIT VALG AF VÆRKSTED</text><text x="125" y="182" text-anchor="middle">efter producentens forskrifter</text><text x="125" y="198" text-anchor="middle">og med dokumentation</text><g class="tg-maal"><line x1="240" y1="24" x2="278" y2="24" marker-end="url(#pil-frit-1)"/><line x1="240" y1="92" x2="278" y2="92" marker-end="url(#pil-frit-1)"/><line x1="125" y1="40" x2="125" y2="74" marker-end="url(#pil-frit-1)"/><line x1="125" y1="108" x2="125" y2="142" marker-end="url(#pil-frit-1)"/></g><text class="tg-lille" x="259" y="18" text-anchor="middle">JA</text><text class="tg-lille" x="259" y="86" text-anchor="middle">JA</text><text class="tg-lille" x="133" y="61">NEJ</text><text class="tg-lille" x="133" y="129">NEJ</text><text class="tg-lille" x="10" y="226">DELE UDEN FOR GARANTIEN BEHØVER</text><text class="tg-lille" x="10" y="240">IKKE BÆRE FABRIKANTENS MÆRKE</text></svg>`,
          tekst: `Skematisk. Kilder: ${a(RETN, "Supplerende retningslinjer 2010/C 138/05, punkt 69")}, ${a(FORD_G, "Ford: Garanti på varebiler")} og ${a(NORD, "Nordania")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "EU-forordningen",
        tekst: [
          `Kommissionens forordning (EU) nr. 461/2010 fritager visse aftaler i bilbranchen fra forbuddet mod konkurrencebegrænsning. På eftermarkedet gælder fritagelsen kun, hvis aftalerne opfylder betingelserne i den generelle gruppefritagelse for vertikale aftaler og ikke indeholder de særligt alvorlige begrænsninger i artikel 5. Forordning (EU) 2023/822 forlængede alene anvendelsesperioden fra 31. maj 2023 til 31. maj 2028.`,
          `Eftermarkedet er alt det, der sker efter salget af bilen, altså reservedele, service og reparation. Forordningen handler om aftalerne mellem producenten og dens autoriserede forhandlere og værksteder. Den beskriver de begrænsninger, der får sådan en aftale til at miste fritagelsen.`,
          `Konkurrence- og Forbrugerstyrelsen skriver, at de samme regler gælder i Danmark efter bekendtgørelse nr. 760 af 23. juni 2010. Da Kommissionen ændrede de supplerende retningslinjer i 2023, kom henvisningen til den generelle gruppefritagelse til at gælde forordning (EU) 2022/720 i stedet for forordning nr. 330/2010.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. juni 2010", "Forordning (EU) nr. 461/2010 træder i kraft og fritager visse aftaler i bilbranchen fra forbuddet mod konkurrencebegrænsning."],
            ["17. april 2023", "Kommissionen vedtager forordning (EU) 2023/822, der forlænger perioden uden at ændre reglerne. Samme dag ændres de supplerende retningslinjer."],
            ["31. maj 2023", "Her skulle forordningen oprindeligt være udløbet."],
            ["31. maj 2028", "Forordningen gælder til denne dato, og Kommissionen skal evaluere den inden da."]
          ],
          note: `Kilder: ${a(R461, "Forordning (EU) nr. 461/2010")}, ${a(R822, "Forordning (EU) 2023/822")} og ${a(RETN23, "Ændring af de supplerende retningslinjer, 2023/C 133 I/01")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "De tre forbudte begrænsninger",
        tekst: [
          `Artikel 5 i forordningen nævner tre begrænsninger, der får en aftale til at miste fritagelsen. Alle tre handler om, at reservedele, værktøj og diagnoseudstyr skal kunne nå frem til de uafhængige værksteder.`,
          `Konkurrence- og Forbrugerstyrelsen forklarer, at de uafhængige værksteders mulighed for at konkurrere bl.a. afhænger af, at de har uhindret adgang til reservedele og teknisk information.`
        ],
        punkter: [
          `<strong>Reservedele til uafhængige.</strong> Deltagere i et selektivt distributionssystem må ikke begrænses i at sælge reservedele til uafhængige reparatører.`,
          `<strong>Leverandørens salg.</strong> En leverandør af reservedele, værktøj eller diagnoseudstyr må ikke begrænses i at sælge til autoriserede og uafhængige forhandlere, reparatører og slutbrugere.`,
          `<strong>Varemærket på delen.</strong> En underleverandør må ikke begrænses i at sætte sit eget logo synligt på de dele, den leverer.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilder: ${a(R461, "Forordning (EU) nr. 461/2010, artikel 5")} og ${a(KFST, "Konkurrence- og Forbrugerstyrelsen: Indskærpelse af 24. september 2013")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Garantien og det frie værkstedsvalg",
        tekst: [
          `Kommissionens supplerende retningslinjer (punkt 69) nævner to former for misbrug af garantien. Den ene er at gøre garantien betinget af, at alt reparations- og vedligeholdelsesarbejde uden for garantien udføres på et autoriseret værksted. Den anden er at kræve fabrikantens reservedelsmærke ved udskiftninger, der ikke er omfattet af garantien.`,
          `Producenten kan afvise et garantikrav, hvis skaden skyldes, at et værksted ikke har udført arbejdet korrekt, eller at der er brugt reservedele af ringe kvalitet. Konkurrence- og Forbrugerstyrelsen kalder vilkår om mærkeværksted for servicerestriktioner og citerer Kommissionen for, at de sandsynligvis strider mod EU’s konkurrenceregler.`,
          `Retningslinjerne lægger også vægt på, at alle værksteder, der opfylder producentens kvalitetskrav, kan blive autoriseret. Stiller producenten kvantitative krav, fx et fast antal værksteder, falder aftalen sandsynligvis ind under forbuddet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 212" role="img" aria-label="Tre rækker: garantiarbejde går til et autoriseret værksted, service uden for garantien kan laves på et frit valgt værksted, og reservedele uden for garantien behøver ikke fabrikantens mærke."><text class="tg-lille" x="0" y="16">ARBEJDET</text><text class="tg-lille" x="228" y="16">VÆRKSTED OG DELE</text><rect class="tg-modul" x="0" y="28" width="190" height="44"/><text class="tg-modul__tekst" x="10" y="54">GARANTIARBEJDE</text><line class="tg-pil" x1="194" y1="50" x2="222" y2="50"/><path class="tg-pil" d="M216,44 L222,50 L216,56"/><rect class="tg-kasse" x="228" y="28" width="172" height="44"/><text x="236" y="54">Autoriseret værksted</text><rect class="tg-kasse" x="0" y="86" width="190" height="44"/><text x="10" y="104">Service og reparation</text><text x="10" y="120">uden for garantien</text><line class="tg-pil" x1="194" y1="108" x2="222" y2="108"/><path class="tg-pil" d="M216,102 L222,108 L216,114"/><rect class="tg-profil" x="228" y="86" width="172" height="44"/><text x="236" y="104">Frit værksted, efter</text><text x="236" y="120">producentens forskrifter</text><rect class="tg-kasse" x="0" y="144" width="190" height="44"/><text x="10" y="162">Reservedele uden</text><text x="10" y="178">for garantien</text><line class="tg-pil" x1="194" y1="166" x2="222" y2="166"/><path class="tg-pil" d="M216,160 L222,166 L216,172"/><rect class="tg-profil" x="228" y="144" width="172" height="44"/><text x="236" y="162">Ingen krav om</text><text x="236" y="178">fabrikantens mærke</text><text class="tg-lille" x="0" y="206">EU-RETNINGSLINJERNE, PUNKT 69</text></svg>`,
          tekst: `Skematisk. EU-Kommissionens retningslinjer kalder det misbrug af garantien at kræve mærkeværksted eller fabrikantens reservedele til arbejde uden for garantien. Kilder: ${a(RETN, "Supplerende retningslinjer 2010/C 138/05, punkt 69 og 70")} og ${a(KFST, "Konkurrence- og Forbrugerstyrelsen")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kontroleftersyn til rustgarantien",
        tekst: [
          `Rustgarantien kræver ofte, at bilen bliver vist frem på et autoriseret værksted. Konkurrence- og Forbrugerstyrelsen skrev i 2013, at importørerne typisk giver en garanti mod rustgennemtæring på 10–12 år, og at bilen normalt skal til kontroleftersyn hos et autoriseret mærkeværksted på bestemte tidspunkter.`,
          `Styrelsen havde fået klager over, at nogle importører krævede, at kun kunden selv måtte bestille, hente og bringe bilen til kontroleftersynet. Tidligere kunne uafhængige værksteder gøre det på kundens vegne. Styrelsen indskærpede, at et krav om personligt fremmøde efter dens vurdering vil være en overtrædelse af konkurrenceloven, hvis det bygger på en aftale eller samordnet praksis.`,
          `Ford udfører karrosseriinspektionerne til sin rustgaranti uden beregning, og intervallet står i garanti- og servicehæftet. Mere om rustgarantier og behandling i <a href="/til-varebilen/service/undervognsbehandling/">undervognsbehandling</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Rustgaranti hos importørerne, typisk", "10–12", "år"],
            ["Ford og Volkswagen, mod gennemtæring", 12, "år"]
          ],
          note: `Tallet for importørerne er fra styrelsens indskærpelse i 2013. Kilder: ${a(KFST, "Konkurrence- og Forbrugerstyrelsen: Indskærpelse af 24. september 2013")}, ${a(FORD_G, "Ford")} og ${a(VW_G, "Volkswagen")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Data, værktøj og teknisk information",
        tekst: [
          `Da Kommissionen ændrede de supplerende retningslinjer i april 2023, kom køretøjsgenererede data med på listen over input, der kan være afgørende for reparation og vedligeholdelse. Listen nævner også teknisk information, værktøj og uddannelse. Værktøj omfatter adgang til elektroniske diagnosesystemer og software med opdateringer.`,
          `Stiller producenten et input til rådighed for sine autoriserede værksteder, bør det ifølge retningslinjerne også stilles til rådighed for uafhængige aktører uden forskelsbehandling. Som eksempler på teknisk information nævner retningslinjerne software, fejlkoder, opdateringer til styreenheder, førerstøttesystemer og batteristyring i elbiler, reservedelskataloger og tilbagekaldelser.`,
          `Vil producenten holde et input tilbage af hensyn til sikkerheden, bør den undersøge, om mindre begrænsende løsninger er nok. De uafhængige aktører omfatter også vejservicevirksomheder, automobilklubber og virksomheder, der laver inspektion og afprøvning. Om bilens egne data i flådestyring, se <a href="/til-varebilen/flaadestyring/telematik-data-fra-producenten/">telematikdata fra producenten</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Skematisk. Ifølge EU-Kommissionens retningslinjer bør input, der er afgørende for reparation, også gives til uafhængige værksteder uden forskelsbehandling, når de autoriserede værksteder får dem. Det gælder teknisk information, værktøj, uddannelse og køretøjsgenererede data."><defs><marker id="pil-frit-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(14,124) scale(0.62)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><text class="tg-lille" x="20" y="80">BILENS DATA</text><rect class="tg-kasse" x="230" y="20" width="162" height="44"/><text x="311" y="46" text-anchor="middle">Autoriseret værksted</text><rect class="tg-kasse" x="230" y="100" width="162" height="44"/><text x="311" y="126" text-anchor="middle">Uafhængigt værksted</text><text class="tg-lille" x="311" y="86" text-anchor="middle">PÅ LIGE VILKÅR</text><g class="tg-maal"><line x1="168" y1="70" x2="226" y2="44" marker-end="url(#pil-frit-2)"/><line x1="168" y1="96" x2="226" y2="122" marker-end="url(#pil-frit-2)"/></g><text class="tg-lille" x="8" y="162">INPUT, DER ER AFGØRENDE FOR REPARATION</text><rect class="tg-modul" x="8" y="170" width="92" height="32"/><text x="54" y="190" text-anchor="middle">Teknisk info</text><rect class="tg-modul" x="104" y="170" width="92" height="32"/><text x="150" y="190" text-anchor="middle">Værktøj</text><rect class="tg-modul" x="200" y="170" width="92" height="32"/><text x="246" y="190" text-anchor="middle">Uddannelse</text><rect class="tg-modul" x="296" y="170" width="96" height="32"/><text x="344" y="190" text-anchor="middle">Køretøjsdata</text><text class="tg-lille" x="8" y="222">EU-RETNINGSLINJERNE, ÆNDRET I 2023</text></svg>`,
          tekst: `Skematisk. Kilde: ${a(RETN23, "Ændring af de supplerende retningslinjer, 2023/C 133 I/01, punkt 62, 62a, 66, 67a og 68")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Originale og tilsvarende dele",
        tekst: [
          `Garantien må ikke kræve fabrikantens reservedelsmærke ved udskiftninger, der ikke er omfattet af garantien. Retningslinjerne skelner mellem tre slags dele. Forskellen betyder noget, fordi producenten med rette kan afvise et garantikrav, hvis skaden skyldes reservedele af ringe kvalitet.`,
          `Kommissionen skriver, at der ofte er store prisforskelle mellem dele med bilproducentens mærke og alternative dele. Siden 2023 henviser definitionen af originale reservedele til EU’s forordning (EU) 2018/858 om godkendelse af motorkøretøjer.`
        ],
        tabel: {
          kolonner: ["Begreb", "Betyder"],
          raekker: [
            ["Originale reservedele", "Fremstillet efter bilproducentens specifikationer og produktionsstandarder for dele til den pågældende bil"],
            ["Dele af matchende kvalitet", "Af tilstrækkelig god kvalitet til ikke at skade det autoriserede nets omdømme. Producenten kan dokumentere, at en del ikke lever op til det"],
            ["Alternative dele", "Originaldele fra underleverandøren eller dele fra andre producenter, hvis kvalitet svarer til originaldelenes"]
          ],
          note: `Kilder: ${a(RETN, "Supplerende retningslinjer 2010/C 138/05, punkt 18–20")} og ${a(RETN23, "ændringen fra 2023, punkt 19")}, set den 7. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Hvad producenterne skriver",
        tekst: [
          `Ford og Volkswagen beskriver kravene til service forskelligt. Ford skriver, at du ikke er forpligtet til at bruge et autoriseret Ford-værksted, men at service og vedligeholdelse skal følge Fords forskrifter og kunne dokumenteres. Normalt kan et autoriseret Ford-værksted se bilens garanti ud fra stelnummeret, men du kan blive bedt om at dokumentere, at eftersynene er lavet korrekt og til tiden.`,
          `Volkswagens garanti forudsætter, at alle eftersyn efter servicemappen eller serviceindikatoren er udført efter Volkswagen AG’s og garantigiverens forskrifter. Toyotas fabriksgaranti forudsætter, at bilen overholder sine serviceintervaller. Den gælder i 3 år eller 100.000 km, og det første år er der ingen kilometergrænse.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Producent", "Krav til service for garantien", "Garantiarbejde"],
          raekker: [
            ["Ford", "Service efter Fords forskrifter, og det skal kunne dokumenteres. Ingen pligt til at bruge autoriseret Ford-værksted", "Autoriseret Ford-værksted"],
            ["Volkswagen Erhvervsbiler", "Alle serviceeftersyn udført efter Volkswagen AG’s forskrifter", "Autoriseret Volkswagen-servicepartner i EØS eller Schweiz"]
          ],
          note: `Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagens garantibestemmelser for erhvervsbiler")} og ${a(TOYOTA, "Toyota")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan dokumenteres servicen",
        tekst: [
          `Når bilen bliver serviceret uden for mærkeværkstedet, er det fakturaen og servicebogen, der viser, at den er serviceret efter forskrifterne. Hos Volkswagen er garantigiveren fri for sine forpligtelser, hvis eftersynene ikke er udført efter forskrifterne.`,
          `Trinene herunder samler de krav, producenterne og retningslinjerne stiller. Intervallet står i instruktionsbogen eller servicehæftet, og på mange biler viser serviceindikatoren, hvornår næste eftersyn skal laves.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Intervallet", "Det står i instruktionsbogen eller servicehæftet eller på serviceindikatoren."],
            ["Eftersynet", "Værkstedet følger producentens forskrifter for modellen."],
            ["Dele", "Delene er originale eller af matchende kvalitet, og arbejdet er udført korrekt."],
            ["Software", "Producentens softwareopdateringer er installeret."],
            ["Dokumentation", "Faktura og servicebog viser, at eftersynet er lavet korrekt og til tiden."]
          ]
        },
        efter: [
          `Kilder: ${a(FORD_G, "Ford")}, ${a(VW_G, "Volkswagen")}, ${a(TOYOTA, "Toyota")} og ${a(RETN, "retningslinjerne, punkt 69")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Det kan udelukke et garantikrav",
        tekst: [
          `Volkswagens garantibestemmelser for erhvervsbiler nævner en række situationer, hvor garantien ikke gælder. Garantien gælder ud over de reklamationsrettigheder, loven giver, og begrænser dem ikke.`
        ],
        punkter: [
          "Bilen er repareret, vedligeholdt eller plejet ukorrekt af ejeren eller tredjepart.",
          "Instruktionsbogens bestemmelser om drift og vedligeholdelse er ikke fulgt.",
          "Der er monteret dele, som Volkswagen ikke har godkendt, eller bilen er ændret, fx ved tuning.",
          "Bilen er overbelastet, fx ved for stort læs.",
          "Bilen er beskadiget udefra, fx ved ulykke, hagl eller oversvømmelse.",
          "Ejeren har ikke gjort opmærksom på en mangel uden ugrundet ophold.",
          "En softwareopdatering fra producenten er ikke installeret."
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilde: ${a(VW_G, "Volkswagen, garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ordninger knyttet til mærkeværkstedet",
        tekst: [
          `Ud over fabriksgarantien har flere producenter frivillige ordninger, der kun gælder ved service på et autoriseret værksted. Vælger du et uafhængigt værksted, gælder ordningerne ikke, men fabriksgarantien består, når servicen følger forskrifterne.`,
          `Toyota Relax træder i kraft, når fabriksgarantien er udløbet. Hver gang bilen bliver serviceret på et autoriseret Toyota-værksted, får den en garanti, der dækker frem til næste eftersyn. Relax følger bilens serviceinterval, så en Proace med service hvert 2. år eller hver 30.000 km har samme interval for garantien.`
        ],
        punkter: [
          "<strong>Toyota Relax.</strong> Garantien gælder fra service til service, indtil bilen er 10 år eller har kørt 185.000 km.",
          "<strong>Mercedes-Benz MobiloVan.</strong> Mobilitetsgarantien gælder i op til 30 år, når intervallerne overholdes.",
          "<strong>Ford Assistance.</strong> Ford giver op til 24 måneders vejhjælp ved hvert service hos Ford."
        ],
        punkt_ikon: "ja",
        efter: [
          `Kilder: ${a(TOYOTA, "Toyota")} og ${a(FORD_PRO, "Ford Pro Service")}, set den 7. oktober 2026, og ${a(MB_VM, "Mercedes-Benz")} og ${a(FORD_G2, "Ford Assistance")}, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvad leasingaftalen kan kræve",
        tekst: [
          `Leasingselskabet ejer bilen og fastsætter i aftalen, hvor den skal serviceres. Nordania skriver, at kun autoriserede mærkeværksteder må udføre reparationer og service på deres biler. Ayvens booker service hos sine samarbejdsværksteder, og føreren kan finde de anbefalede værksteder i Ayvens’ online booking.`,
          `Ved køb vælger virksomheden selv værkstedet inden for garantibetingelserne. Se <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a> og <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Bilen", "Hvem bestemmer værkstedet", "Eksempel"],
          raekker: [
            ["Leaset hos Nordania", "Leasingselskabet, i aftalen", "Kun autoriserede mærkeværksteder"],
            ["Leaset hos Ayvens", "Leasingselskabet, i aftalen", "Service hos Ayvens’ samarbejdsværksteder"],
            ["Købt", "Virksomheden selv", "Inden for garantibetingelserne"]
          ],
          note: `Kilder: ${a(NORD, "Nordania")} og ${a(AYV_S, "Ayvens")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Uafhængige kæders servicetyper",
        tekst: [
          `Super Dæk Service har mere end 60 værksteder og tjekker bilen på mindst 34 punkter ved et serviceeftersyn. Kæden tilbyder tre slags service, og kun den ene giver stempel i servicebogen. Det er den, der følger bilfabrikantens anvisninger.`,
          `På forsiden hedder de tre typer Service, Service+ og Service efter bilfabrikantens anvisninger, og til elbiler findes de som E-CARE. I tilbudsformularen hedder de Super Service, Service Premium og Service Premium+.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Service i tilbudsformularen", "Stempel i servicebogen"],
          raekker: [
            ["Super Service", "nej"],
            ["Service Premium", "nej"],
            ["Service Premium+ efter bilfabrikantens anvisninger", "ja"]
          ],
          note: `Kilde: ${a(SDS, "Super Dæk Service, forside og tilbudsformular")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Prismatch hos Volkswagen",
        tekst: [
          `Volkswagen matcher prisen på et serviceeftersyn fra et andet værksted, hvis tilbuddet opfylder fem krav. Volkswagen skriver, at ikke alle forhandlere deltager, og anbefaler at spørge den lokale forhandler, før serviceaftalen planlægges.`,
          `Autoriserede Volkswagen-værksteder tilbyder også Express Service til mindre arbejde på omkring halvanden time uden tidsbestilling og en gratis dialogmodtagelse på cirka 20 minutter før service.`
        ],
        punkter: [
          "Tilbuddet er skriftligt, højst 14 dage gammelt og indhentet i Danmark.",
          "Det er indhentet højst 40 km fra det autoriserede værksted.",
          "Det har samme arbejde, reservedele og servicepunkter efter bilens serviceskema.",
          "Det bygger på originale Volkswagen-dele og anbefalede væsker og olier.",
          "Det gælder serviceeftersyn, ikke tandrem eller andre separate komponenter."
        ],
        efter: [
          `Kilde: ${a(VW_PM, "Volkswagen, Prismatch")}, set den 7. oktober 2026.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="En cirkel med en radius på 40 km om det autoriserede Volkswagen-værksted. Et andet værksted inden for cirklen kan give det tilbud, Volkswagen matcher."><circle class="tg-pil" cx="130" cy="110" r="90"/><rect class="tg-modul" x="122" y="102" width="16" height="16"/><text x="94" y="138">VW-værksted</text><line class="tg-skinne-tynd" x1="138" y1="110" x2="220" y2="110"/><text class="tg-fremhaev" x="160" y="104">40 km</text><rect class="tg-kasse" x="90" y="58" width="14" height="14"/><text x="72" y="90">Andet værksted</text><text class="tg-fremhaev" x="240" y="40">Tilbuddet skal være</text><text x="240" y="62">skriftligt</text><text x="240" y="82">højst 14 dage gammelt</text><text x="240" y="102">indhentet i Danmark</text><text x="240" y="122">samme arbejde og dele</text><text x="240" y="142">på originale VW-dele</text></svg>`,
          tekst: `Skematisk. Tilbuddet skal være indhentet højst 40 km fra det autoriserede Volkswagen-værksted. Kilde: ${a(VW_PM, "Volkswagen, Prismatch")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ældre biler hos mærkeværkstedet",
        tekst: [
          `Mærkeværkstederne har egne tilbud til biler, der er ude af garantien. Volkswagens Service 5+ er et eftersyn efter fabrikkens forskrifter, hvor du kan følge med via ServiceCam. Værkstedet ser bl.a. efter stenslag i forruden, utætheder i gearkassen, rust på karrosseriet og slid på bærekugler og bremser.`,
          `Hessel tilbyder et +4 service til en Renault på fire år eller mere med et autoriseret stempel i servicebogen. Det koster 1.795 kr. med benzin eller diesel og 1.395 kr. på en elbil (oktober 2026). Flere priser står i <a href="/til-varebilen/service/pris-paa-service/">pris på service</a>.`
        ],
        punkter: [
          "<strong>Ford Økonomi Service.</strong> Servicen er til Ford-biler over 5 år.",
          "<strong>Volkswagen Service 5+.</strong> Servicen er til biler på 5 år eller mere og giver vejhjælp til næste eftersyn og stempel i den digitale servicebog.",
          "<strong>Volkswagen Vejhjælp.</strong> Vejhjælpen er gratis, så længe det seneste store serviceeftersyn er lavet hos Volkswagen."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Prismatch: tilbud inden for", "40", "km"],
            ["VW Service 5+ fra", "5", "år"],
            ["Ford Økonomi Service fra", "5", "år"],
            ["Toyota Relax op til", "10", "år"]
          ],
          note: `Kilder: ${a(VW_PM, "Volkswagen")}, ${a(VW_5, "Volkswagen Service 5+")}, ${a(FORD_PRO, "Ford")}, ${a(TOYOTA, "Toyota")} og ${a(H_REN, "Hessel, Renault")}, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet kunne dokumentere",
    spoergsmaal_manchet: "Så kan et senere garantikrav behandles.",
    spoergsmaal: [
      "At eftersynet følger producentens serviceprogram for modellen.",
      "Hvilke dele og væsker der er brugt, med specifikation.",
      "Kilometerstand og dato.",
      "Om softwareopdateringer er installeret.",
      "Hvilken servicetype der er lavet, og om den giver stempel i servicebogen.",
      "Om bilen har fået de karrosseriinspektioner, rustgarantien kræver.",
      "Ved leasing: leasingselskabets godkendelse."
    ],
    faq: [
      ["Mister jeg garantien, hvis varebilen serviceres på et uafhængigt værksted?", "Ikke hvis service udføres efter producentens forskrifter og kan dokumenteres. Ford skriver det direkte. Garantiarbejde udføres på et autoriseret værksted."],
      ["Må producenten kræve originale reservedele?", "Ikke ved udskiftninger uden for garantien. EU-Kommissionens retningslinjer nævner det som misbrug af garantien."],
      ["Hvilken EU-regel handler om frit værkstedsvalg?", "Kommissionens forordning (EU) nr. 461/2010 med supplerende retningslinjer. Forordningen gælder til 31. maj 2028."],
      ["Kan leasingselskabet kræve mærkeværksted?", "Ja, i leasingaftalen. Nordania kræver autoriserede mærkeværksteder til service og reparation."],
      ["Hvad er dele af matchende kvalitet?", "Dele af tilstrækkelig god kvalitet til ikke at skade det autoriserede nets omdømme, ifølge EU-Kommissionens retningslinjer."],
      ["Giver en service hos et uafhængigt værksted stempel i servicebogen?", "Det afhænger af servicetypen. Hos Super Dæk Service giver kun Service Premium+, der følger bilfabrikantens anvisninger, stempel i servicebogen."],
      ["Matcher Volkswagen prisen fra et andet værksted?", "Ja, med Prismatch, hvis tilbuddet er indhentet inden for 40 km, har samme indhold og bygger på originale dele. Ikke alle forhandlere deltager."],
      ["Skal et uafhængigt værksted have adgang til bilens data og fejlkoder?", "EU-Kommissionens retningslinjer fra 2023 nævner køretøjsgenererede data, fejlkoder og software som input, der kan være afgørende for reparation. Får de autoriserede værksteder dem, bør de uafhængige også få dem uden forskelsbehandling."],
      ["Kan importøren kræve, at jeg selv møder op til et rusteftersyn?", "Konkurrence- og Forbrugerstyrelsen indskærpede i 2013, at et krav om personligt fremmøde ved garantiens kontroleftersyn efter styrelsens vurdering vil være en overtrædelse af konkurrenceloven, hvis det bygger på en aftale eller samordnet praksis."]
    ],
    kilder: [
      { navn: "EU: Kommissionens forordning (EU) nr. 461/2010 (gruppefritagelse, motorkøretøjer)", url: R461, dato: "2026-10-07" },
      { navn: "EU: Kommissionens forordning (EU) 2023/822 (forlængelse til 31. maj 2028)", url: R822, dato: "2026-10-07" },
      { navn: "EU: Supplerende retningslinjer for vertikale begrænsninger i aftaler om salg og reparation af motorkøretøjer (2010/C 138/05)", url: RETN, dato: "2026-10-07" },
      { navn: "EU: Ændring af de supplerende retningslinjer for motorkøretøjer (2023/C 133 I/01)", url: RETN23, dato: "2026-10-07" },
      { navn: "Konkurrence- og Forbrugerstyrelsen: Indskærpelse om garantier og årlige kontroleftersyn, 24. september 2013", url: KFST, dato: "2026-10-07" },
      { navn: "Ford: Garanti på nye Ford varebiler (Ford Protect og fabriksgaranti)", url: FORD_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VW_G, dato: "2026-10-07" },
      { navn: "Toyota: Tryghed med Toyota (fabriksgaranti og Toyota Relax, erhvervsbiler)", url: TOYOTA, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Bilservice og eftersyn (MobiloVan)", url: MB_VM, dato: "2026-10-04" },
      { navn: "Ford: Ford garanti og Ford Assistance", url: FORD_G2, dato: "2026-10-04" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NORD, dato: "2026-10-07" },
      { navn: "Ayvens: Service og vedligeholdelse", url: AYV_S, dato: "2026-10-07" },
      { navn: "Super Dæk Service: Ydelser og tilbud", url: SDS, dato: "2026-10-07" },
      { navn: "Volkswagen: Prismatch og servicefordele", url: VW_PM, dato: "2026-10-07" },
      { navn: "Volkswagen: Service 5+", url: VW_5, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro Service", url: FORD_PRO, dato: "2026-10-07" },
      { navn: "Hessel: Renault +4 service og serviceaftale", url: H_REN, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Punkt 19 i de supplerende retningslinjer (definitionen af originale reservedele) blev affattet på ny i 2023 og henviser nu til artikel 55, stk. 5, i forordning (EU) 2018/858. Sætningen om dele fra samme produktionslinjer, som den gamle side gengav, står ikke længere i punkt 19.", RETN23],
    ["Forordning (EU) nr. 461/2010 trådte i kraft den 1. juni 2010 (artikel 8).", R461],
    ["Forordning (EU) 2023/822 blev udfærdiget den 17. april 2023 og ændrer artikel 8, så forordning 461/2010 anvendes indtil den 31. maj 2028, og artikel 7, så Kommissionen evaluerer forordningen inden den 31. maj 2028.", R822],
    ["Ændringen af de supplerende retningslinjer (2023/C 133 I/01) er offentliggjort den 17. april 2023 og erstatter i punkt 2 henvisningen til forordning nr. 330/2010 med forordning (EU) 2022/720.", RETN23],
    ["Retningslinjerne fra 2023, punkt 62: input som teknisk information, værktøj, uddannelse og køretøjsgenererede data kan være afgørende for reparation og vedligeholdelse; uafhængige aktører omfatter bl.a. uafhængige reparatører, automobilklubber, vejservicevirksomheder og virksomheder, der tilbyder inspektion og afprøvning.", RETN23],
    ["Retningslinjerne fra 2023, punkt 62a, litra b: stilles et input til rådighed for det autoriserede reparationsnet under en hvilken som helst form, bør det ligeledes stilles til rådighed for uafhængige aktører uden forskelsbehandling.", RETN23],
    ["Retningslinjerne fra 2023, punkt 62b: ved tilbageholdelse af sikkerhedsmæssige årsager bør parterne navnlig undersøge, om mindre begrænsende foranstaltninger er tilstrækkelige.", RETN23],
    ["Retningslinjerne fra 2023, punkt 66: eksempler på teknisk information er software, fejlkoder og andre parametre samt opdateringer til elektroniske kontrolenheder, avancerede førerstøttesystemer og batteristyringssystemer til elektriske køretøjer, reservedelskataloger og tilbagekaldelsesmeddelelser.", RETN23],
    ["Retningslinjerne fra 2023, punkt 68: værktøj omfatter adgang til elektroniske diagnosticeringssystemer og andet reparationsudstyr samt relevant software, herunder regelmæssig opdatering.", RETN23],
    ["Retningslinjerne 2010, punkt 70: Kommissionen finder det vigtigt, at der generelt er adgang til de autoriserede reparationsnet for alle virksomheder, som opfylder definerede kvalitetskriterier; stilles kvantitative krav som betingelse for adgang, er det sandsynligt, at aftalen falder ind under artikel 101, stk. 1.", RETN],
    ["Retningslinjerne 2010, punkt 18: der er ofte store prisforskelle mellem reservedele, der sælges af en motorkøretøjsproducent, og alternative reservedele.", RETN],
    ["KFST (indskærpelse 24. september 2013): effektiv konkurrence på markederne for reparation og vedligeholdelse af biler afhænger af graden af konkurrence mellem autoriserede og uafhængige reparatører; de uafhængiges muligheder afhænger bl.a. af uhindret adgang til nødvendige inputs som reservedele og teknisk information.", KFST],
    ["KFST (2013): importørernes rustgennemtæringsgarantier har ofte en varighed på 10-12 år, og importøren kræver normalt, at bilen stilles til kontroleftersyn hos et autoriseret mærkeværksted på bestemte tidspunkter; tidligere kunne uafhængige reparatører bestille kontroleftersyn og bringe og hente biler på kundernes vegne.", KFST],
    ["KFST (2013) indskærpede, at krav om bilkunders personlige fremmøde ved de garantikrævede kontroleftersyn efter styrelsens vurdering vil udgøre en overtrædelse af konkurrencelovens § 6, hvis der foreligger en aftale eller samordnet praksis.", KFST],
    ["KFST (2013): gruppefritagelsens regler gælder også i Danmark, jf. bekendtgørelse nr. 760 af 23. juni 2010; KFST betegner krav om autoriseret værksted til arbejde uden for garantien som servicerestriktioner og citerer Kommissionens spørgsmål og svar fra 27. august 2012 om, at de sandsynligvis strider mod EU’s konkurrenceregler.", KFST],
    ["Ford: normalt kan et autoriseret Ford-værksted se bilens garantidækning ud fra stelnummeret, men man kan blive bedt om at dokumentere, at serviceeftersyn er udført korrekt og rettidigt.", FORD_G],
    ["Volkswagen: garantien gælder ud over de lovmæssige reklamationsrettigheder og begrænser dem ikke (A.1.1); garantien er udelukket, hvis bilen er beskadiget udefra (ulykke, hagl, oversvømmelse), eller garantitager ikke uden ugrundet ophold har gjort opmærksom på en mangel (A.5.1); garantikrav kan kun gøres gældende hos autoriserede Volkswagen-servicepartnere i EØS og Schweiz (A.7).", VW_G],
    ["Toyota: fabriksgarantien gælder 3 år/100.000 km uden kilometerbegrænsning det første år; Relax-garantien gives automatisk ved hver service på et autoriseret Toyota-værksted og dækker til næste serviceeftersyn med samme interval som bilens service, fx 2 år eller 30.000 km på en Proace.", TOYOTA],
    ["Super Dæk Service har mere end 60 autoværksteder og tjekker bilen på mindst 34 punkter; forsiden nævner Service, Service+ og Service efter bilfabrikantens anvisninger samt E-CARE-versioner til elbiler.", SDS],
    ["Volkswagen: Express Service på cirka halvanden time uden tidsbestilling; Dialogmodtagelse er en gratis gennemgang på cirka 20 minutter; ikke alle forhandlere deltager i Prismatch, og Volkswagen anbefaler at kontakte den lokale forhandler først.", VW_PM],
    ["Volkswagen Service 5+: eftersyn efter fabrikkens forskrifter, mulighed for at følge med via ServiceCam, kontrol af bl.a. forrude for stenslag, gearkasse for utætheder, karrosseri for rust, bærekugler og bremser.", VW_5],
    ["Hessel: +4 service til Renault på fire år eller mere giver et autoriseret stempel i servicebogen og koster 1.795 kr. for benzin- og dieselbiler og 1.395 kr. for elbiler.", H_REN]
  ]
};
