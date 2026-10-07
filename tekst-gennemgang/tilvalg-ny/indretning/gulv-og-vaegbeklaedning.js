// Underside /til-varebilen/indretning/gulv-og-vaegbeklaedning/ (07-10-2026)
var SVG = `https://smartvan.dk/kategori/varerumsgulv/`;
var SVP = `https://smartvan.dk/kategori/panelsider-til-varevogn/`;
var VKG = `https://www.vankompagniet.dk/product-category/indvendigt/vognbund-indvendigt/`;
var VKS = `https://www.vankompagniet.dk/product-category/indvendigt/sidebeklaedning/`;
var KORE = `https://koskisen.fi/en/downloads/kore-floors`;
var CROWN = `https://koskisen.fi/en/downloads/koskicrown`;
var MS = `https://www.modul-system.dk/da/content/flooring-lining-modul-system`;
var DVI = `https://varebilindretning.dk/vi-tilbyder/bund-og-beklaedning/`;
var FORD = `https://katalog.ford.dk/specifikationer/transit-custom/`;
var FORDP = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/`;
var VOSAK = `https://cdn.fstyr.dk/faerdselsstyrelsen/Media/639102143281512027/VOSAK11.pdf`;

module.exports = {
  id: "indretning/gulv-og-vaegbeklaedning",
  side: {
    slug: "gulv-og-vaegbeklaedning",
    navn: "Gulv og vægbeklædning",
    titel: "Gulv i varebil: krydsfiner, plast og pris",
    kort: `Her kan du se vognbund i krydsfiner, plast eller aluminium og beklædning af siderne med vægt pr. m², priser og surringsskinner i gulvet.`,
    beskrivelse: `Gulv og vægbeklædning til varebil: krydsfiner, plast og aluminium, vægt pr. m², priser fra 1.260 kr., dobbeltbund og surringsskinner i gulvet.`,
    manchet: `Gulvet og beklædningen er det første, der kommer i varerummet. De beskytter bilens metal mod slag fra lasten, og gulvet er det underlag, reolerne bliver monteret på. Her er materialerne, hvad de vejer, og hvad de koster.`,
    visuel: {
      hero: "indretning",
      kort_fortalt: [
        ["Krydsfiner", "6,1–8,2 kg", "pr. m²"],
        ["Plastgulv", "4,4 kg", "pr. m²"],
        ["Gulv til VW Caddy L1", "1.260 kr.", "9 mm krydsfiner hos SmartVan"],
        ["Skuffe i dobbeltbund", "80 kg", "eller 100 kg med gummibelagt indsats"]
      ],
      toc: true,
      stribe: { ids: ["vw-caddy", "ford-transit-custom", "citroen-jumper"], titel: "Varebiler fra gulvtabellen med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Derfor får varerummet gulv og beklædning",
        tekst: [
          `Bunden i en varebil er to metalplader med længdegående ribber. Et gulv lagt oven på beskytter metalbunden mod slag og slid fra værktøj og materialer, og panelerne på siderne tager de slag, der ellers giver buler indefra.`,
          `Gulvet er også underlaget for resten af indretningen. VanKompagniet skriver, at et tilpasset varerumsgulv kan danne grundlag for montering af reoler. Dansk Varebilindretning foretrækker en 12 mm bund, fordi den giver en stabil overflade, når reolerne skal monteres senere.`,
          `På en leaset bil beskytter gulvet metalbunden i hele aftaleperioden, og bilen skal afleveres med varerummet i den stand, aftalen beskriver. Hvad huller og skader betyder ved afleveringen, står i <a href="/til-varebilen/indretning/selvbygget-indretning/">selvbygget indretning</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Varerummet set bagfra: metalbunden med ribber, gulvpladen ovenpå og beklædning på siderne."><path class="tg-rum" d="M176,204 L176,44 Q176,16 204,16 L356,16 Q384,16 384,44 L384,204"/><path class="tg-pil" d="M176,196 L184,204 L192,196 L200,204 L208,196 L216,204 L224,196 L232,204 L240,196 L248,204 L256,196 L264,204 L272,196 L280,204 L288,196 L296,204 L304,196 L312,204 L320,196 L328,204 L336,196 L344,204 L352,196 L360,204 L368,196 L376,204 L384,196"/><rect class="tg-modul" x="180" y="182" width="200" height="12"/><rect class="tg-kuffert" x="180" y="60" width="7" height="118"/><rect class="tg-kuffert" x="373" y="60" width="7" height="118"/><g class="tg-call"><line x1="184" y1="100" x2="150" y2="60"/><circle cx="184" cy="100" r="3"/><text class="tg-call__navn" x="0" y="52">Vægbeklædning</text><text class="tg-call__under" x="0" y="66">plast, finer, masonite</text></g><g class="tg-call"><line x1="220" y1="188" x2="150" y2="130"/><circle cx="220" cy="188" r="3"/><text class="tg-call__navn" x="0" y="122">Gulv</text><text class="tg-call__under" x="0" y="136">9–12 mm finer, 10 mm plast</text></g><g class="tg-call"><line x1="240" y1="200" x2="150" y2="196"/><circle cx="240" cy="200" r="3"/><text class="tg-call__navn" x="0" y="188">Metalbund</text><text class="tg-call__under" x="0" y="202">plader med ribber</text></g></svg>`,
          tekst: `Skematisk. Varerummet set bagfra med gulv og beklædning.`
        }
      },
      {
        overskrift: "Tre typer gulv",
        tekst: [
          `Gulve til varebiler laves i tre materialer. Forskellen ligger i vægten, i overfladen og i, om gulvet har skinner bygget ind til reoler og lastsikring.`,
          `Krydsfiner er det klassiske gulv. Koskisen laver sine gulve af finsk træ i tykkelserne 9 og 12 mm. Plast og aluminium er de lette alternativer, og her er fordelen mest nyttelast tilbage til lasten.`
        ],
        kort: [
          ["Krydsfiner", "Det er 9 eller 12 mm birkekrydsfiner med en hård filmbelægning, der er skridsikker og tåler vand, olie og benzin."],
          ["Plast", "Letvægtsgulvet er 10 mm plast (TPO eller polypropylen) med et skridsikkert slidlag. SmartVan oplyser, at det vejer op til 50 % mindre end finer."],
          ["Aluminium", "Modul-Systems gulve har en skridsikker trinplade i aluminium i en sandwichkonstruktion og indbyggede skinner til reoler og lastsikring."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Snit gennem tre gulve: krydsfiner på 9 til 12 mm med filmbelægning, plast på 10 mm med skridsikkert slidlag og et aluminiumsgulv i sandwichkonstruktion med trinplade og indbygget skinne."><text class="tg-fremhaev" x="0" y="36">Krydsfiner</text><text class="tg-lille" x="0" y="50">9–12 MM</text><rect class="tg-modul" x="160" y="24" width="230" height="4"/><rect class="tg-kasse" x="160" y="28" width="230" height="24"/><line class="tg-skinne-tynd" x1="160" y1="36" x2="390" y2="36"/><line class="tg-skinne-tynd" x1="160" y1="44" x2="390" y2="44"/><text class="tg-fremhaev" x="0" y="90">Plast</text><text class="tg-lille" x="0" y="104">10 MM TPO ELLER PP</text><rect class="tg-modul" x="160" y="78" width="230" height="4"/><rect class="tg-kasse" x="160" y="82" width="230" height="20"/><text class="tg-fremhaev" x="0" y="144">Aluminium</text><text class="tg-lille" x="0" y="158">SANDWICH</text><rect class="tg-hylde" x="160" y="130" width="230" height="4"/><rect class="tg-profil" x="160" y="134" width="230" height="16"/><rect class="tg-hylde" x="160" y="150" width="230" height="3"/><rect class="tg-kuffert" x="266" y="130" width="16" height="12"/><g class="tg-call"><line x1="274" y1="130" x2="300" y2="116"/><circle cx="274" cy="130" r="3"/><text class="tg-call__under" x="304" y="118">indbygget skinne</text></g><text class="tg-lille" x="0" y="186">SNIT, IKKE I SKALA. ØVERSTE LAG ER SLIDLAGET</text></svg>`,
          tekst: `Skematisk og ikke i skala. Kilder: <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors</a>, <a href="${SVG}" rel="noopener">SmartVan: Varerumsgulv</a> og <a href="${MS}" rel="noopener">Modul-System: Gulv og vægbeklædning</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad vejer et gulv",
        tekst: [
          `Gulvet tæller med i bilens egen vægt, så hvert kilo går fra nyttelasten. Vægten opgives pr. m², og du kan regne den om til din bil ved at gange med varerummets areal.`,
          `Modul-System skriver, at lette gulve og beklædninger øger nyttelasten eller sænker brændstofforbruget. Forskellen mellem krydsfiner og plast er størst i de lange biler, hvor gulvet er stort.`
        ],
        tabel: {
          kolonner: ["Gulv", "Tykkelse", "Vægt pr. m²"],
          raekker: [
            ["Krydsfiner (birk)", "9–12 mm", "6,1–8,2 kg"],
            ["Polypropylen", "10 mm", "4,4 kg"]
          ],
          note: `Kilde: <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors (produktark)</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Krydsfiner (birk), 9–12 mm", "6,1–8,2", "kg pr. m²"],
            ["Polypropylen, 10 mm", "4,4", "kg pr. m²"]
          ],
          note: `Kilde: <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors (produktark)</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Varerummet i en Ford Transit Custom L1 er 2.602 mm langt og 1.777 mm bredt, ca. 4,6 m². Et krydsfinergulv i den størrelse vejer groft regnet 28–38 kg og et plastgulv ca. 20 kg, før der er skåret ud til hjulkasser og døre.`
        ]
      },
      {
        overskrift: "Hvad koster et gulv til en lille varebil",
        tekst: [
          `Gulvet sælges som et kit til den enkelte model og længde. Priserne fra SmartVan, VanKompagniet og Ford på siden er uden moms. SmartVan sælger kun til erhverv.`,
          `Til de små varebiler koster et gulv i 9 mm krydsfiner fra 1.260 kr. Navnet på kittet samler ofte flere modeller, der er bygget på den samme bil, fx VW Caddy og Ford Connect eller Mercedes Citan og Renault Kangoo.`
        ],
        tabel: {
          kolonner: ["Bil", "Gulv", "Forhandler", "Pris"],
          raekker: [
            ["VW Caddy 21- / Ford Connect 25- L1", "9 mm krydsfiner", "SmartVan", "1.260 kr."],
            ["VW Caddy 21- / Ford Connect L1", "9 mm krydsfiner", "VanKompagniet", "2.199 kr."],
            ["VW Caddy 21- / Ford Connect 25- L1", "10 mm plast (TPO)", "SmartVan", "1.575 kr."],
            ["VW Caddy 21- / Ford Connect 25- L2", "9 mm krydsfiner", "SmartVan", "2.040 kr."],
            ["VW Caddy 21- / Ford Connect L2", "9 mm krydsfiner", "VanKompagniet", "2.799 kr."],
            ["VW Caddy 21- / Ford Connect 25- L2", "10 mm plast (TPO)", "SmartVan", "2.310 kr."],
            ["Mercedes Citan / Renault Kangoo 21- L1", "9 mm krydsfiner", "VanKompagniet", "2.299 kr."],
            ["Mercedes Citan / Renault Kangoo 21- L2", "9 mm krydsfiner", "VanKompagniet", "3.099 kr."]
          ],
          note: `Vejledende webshoppriser for gulvet som kit til den enkelte model. Kilder: <a href="${SVG}" rel="noopener">SmartVan: Varerumsgulv</a> og <a href="${VKG}" rel="noopener">VanKompagniet: Vognbund og varerumsgulv</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Gulvet kan også komme fra fabrikken. Ford sælger plastbund i varerummet som tilvalg til E-Transit Custom for 1.330 kr. (vejledende prisliste 07-07-2026).`
        ]
      },
      {
        overskrift: "Gulv til store varebiler",
        tekst: [
          `Jo længere bilen er, jo mere koster gulvet. VanKompagniets gulv i 9 mm krydsfiner til Boxer, Jumper, Ducato og Movano koster 3.399 kr. i L1 og 4.799 kr. i L4.`,
          `SmartVans plastgulve til de store biler koster 2.970 kr. i L2, både til Transit, Transit Custom og Master. Prisforskellen mellem de to forhandlere hænger også sammen med materialet, så sammenlign gulve af samme slags.`
        ],
        tabel: {
          kolonner: ["Bil", "Gulv", "Forhandler", "Pris"],
          raekker: [
            ["Ford Transit Custom 2013–23 L2", "10 mm plast", "SmartVan", "2.970 kr."],
            ["Ford Transit / E-Transit L2", "10 mm plast", "SmartVan", "2.970 kr."],
            ["Renault Master / Nissan Interstar 25- L2", "10 mm plast (TPO)", "SmartVan", "2.970 kr."],
            ["Boxer / Jumper / Ducato / Movano L1", "9 mm krydsfiner", "VanKompagniet", "3.399 kr."],
            ["Boxer / Jumper / Ducato / Movano L2", "9 mm krydsfiner", "VanKompagniet", "3.699 kr."],
            ["Boxer / Jumper / Ducato / Movano L3", "9 mm krydsfiner", "VanKompagniet", "4.399 kr."],
            ["Boxer / Jumper / Ducato / Movano L4", "9 mm krydsfiner", "VanKompagniet", "4.799 kr."]
          ],
          note: `Vejledende webshoppriser for gulvet som kit til den enkelte model. Kilder: <a href="${SVG}" rel="noopener">SmartVan: Varerumsgulv</a> og <a href="${VKG}" rel="noopener">VanKompagniet: Vognbund og varerumsgulv</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["L1", 3399],
            ["L2", 3699],
            ["L3", 4399],
            ["L4", 4799]
          ],
          note: `VanKompagniets pris på et gulv i 9 mm krydsfiner til Boxer, Jumper, Ducato og Movano i de fire længder, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det følger med gulvet",
        tekst: [
          `Et færdigt gulv er mere end en plade. Koskisen leverer som standard lister i aluminium ved dørene og surringskopper i metal, som gulvet fastgøres til bilen med.`
        ],
        punkter: [
          `<strong>Udskæring til bilen.</strong> Gulvet leveres som et kit til den konkrete model, længde og antal skydedøre, med udskæring ved skydedøren.`,
          `<strong>Kanter ved døråbningerne.</strong> Skridsikre lister i aluminium eller rustfrit stål sidder, hvor der trædes ind og læsses.`,
          `<strong>Surringspunkter.</strong> Nedfræsede kopper gør det muligt at flytte bilens originale surringsøjer op i det nye gulv.`,
          `<strong>Én eller to skydedøre.</strong> Gulvet skal passe til bilens døre. Nogle modeller kræver også, at der tages højde for skillevæggen og for, hvilke hjul der trækker bilen.`
        ],
        punkt_ikon: "ja"
      },
      {
        overskrift: "Gulvet ved sidedøren",
        tekst: [
          `Mange varebiler har et trin i sidedøren, der ligger lavere end resten af gulvet. Dansk Varebilindretning laver selv sine gulve og skærer som udgangspunkt ikke ud for trinet, men det kan bestilles.`,
          `Ifølge Dansk Varebilindretning er det oftest en fordel, at bunden går helt ud til sidedøren, når bilen af- og pålæsses meget. Så skal du ikke løfte emnerne ind over trinet først.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="To snit ved sidedøren. Til venstre stopper gulvet før trinet, så lasten skal løftes over kanten. Til højre går gulvet helt ud til døren hen over trinet."><text class="tg-lille" x="10" y="20">SET FORFRA, SIDEDØREN TIL HØJRE</text><path class="tg-gulvlinje" fill="none" d="M10,130 H140 V150 H180"/><rect class="tg-gulv" x="10" y="122" width="130" height="8"/><rect class="tg-kuffert" x="60" y="92" width="40" height="30"/><line class="tg-skinne-tynd" x1="180" y1="40" x2="180" y2="150"/><path class="tg-skinne" fill="none" d="M176,146 Q164,104 104,104"/><path class="tg-gulvlinje" fill="none" d="M210,130 H340 V150 H380"/><rect class="tg-modul" x="210" y="122" width="170" height="8"/><rect class="tg-kuffert" x="260" y="92" width="40" height="30"/><line class="tg-skinne-tynd" x1="380" y1="40" x2="380" y2="150"/><text class="tg-fremhaev" x="10" y="172">Udskåret ved trinet</text><text x="10" y="188">emnerne løftes over kanten</text><text class="tg-fremhaev" x="210" y="172">Bund ud til døren</text><text x="210" y="188">ingen løft over trinet</text></svg>`,
          tekst: `Skematisk. Det fremhævede gulv til højre går hen over trinet i sidedøren. Kilde: <a href="${DVI}" rel="noopener">Dansk Varebilindretning: Bund og beklædning</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Montering med eller uden boring",
        tekst: [
          `SmartVans letvægtsgulve i plast monteres med bilens eksisterende surringsringe: ringene skrues af, gulvet lægges i, og ringene skrues i igen gennem gulvet. Modul-Systems gulve og beklædninger limes på med en stærkt klæbende lim, så der ikke bores i karrosseriet.`,
          `Modul-System skriver, at limen holder bedre end bolte og møtrikker, at den fjerner risikoen for rust ved borehuller, og at den beskytter bilens restværdi. Modul-Systems gulv samles af mindre moduler med not og fer ligesom et klikgulv i en bolig.`,
          `Huller i varerummets gulv har betydning, når en leasingbil afleveres. Se <a href="/til-varebilen/indretning/selvbygget-indretning/">selvbygget indretning</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Ringene af", "Bilens surringsringe skrues af."],
            ["Gulvet i", "SmartVans plastgulv lægges ind i varerummet."],
            ["Ringene i igen", "Ringene skrues i igen gennem gulvet."]
          ]
        }
      },
      {
        overskrift: "Skridsikker overflade",
        tekst: [
          `Krydsfinergulve har en filmbelægning med et præget mønster. Koskisens KoskiCrown har et kronemønster, der presses ind ved belægningen, og som bevarer den skridsikre overflade ved slid. Plastgulve har et skridsikkert slidlag, og aluminiumsgulve en trinplade.`,
          `Koskisen sælger flere belægninger til sine gulve. KoskiFutura DUO tåler de fleste almindelige kemikalier og er let at gøre ren. KoskiCrown har en præget TPO-belægning, der også dæmper støjen, og KoskiDeck har en skridsikker overflade.`,
          `Gummimåtter er et alternativ eller et supplement på gulvet. VanKompagniet sælger 3 mm gummimåtte i flere mønstre for 895–995 kr. pr. meter.`,
          `Overfladen har også betydning for, hvor meget gulvets friktion holder lasten. Tallene står i <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>.`
        ]
      },
      {
        overskrift: "Vægbeklædning: plast, finer eller masonite",
        tekst: [
          `Et kit omfatter typisk paneler til begge sider, bagdøre eller bagklap og skydedør, skåret ud og forboret til modellen.`,
          `Beklædningen beskytter siderne mod buler indefra og giver et sted at skrue lette ting fast. Dansk Varebilindretning skriver, at de lyse masonitplader kaster lyset tilbage og dæmper støjen i varerummet.`
        ],
        kort: [
          ["Plast", "Panelerne er 4 mm polypropylen med en indvendig honeycomb-struktur. De er lette, tåler fugt og monteres med clips og selvskærende skruer."],
          ["Finer", "Det er 4 mm krydsfiner, fx grå finer til Trafic og Vivaro hos SmartVan."],
          ["Masonite", "Det er de hvide træfiberplader, som Dansk Varebilindretning bruger. De er fleksible, ligger tæt ind til karrosseriet og kaster lyset tilbage i varerummet."]
        ]
      },
      {
        overskrift: "Hvad koster sidebeklædning",
        tekst: [
          `Prisen på sidebeklædning følger bilens størrelse og højde. Et sæt plastpaneler til en Caddy eller Connect L1H1 koster 1.650 kr., mens finer til en Iveco Daily L4H3 koster 9.299 kr.`,
          `Højden står i modelbetegnelsen som H1, H2 eller H3, og en højere bil har flere kvadratmeter væg. Betegnelserne er forklaret i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`
        ],
        tabel: {
          kolonner: ["Bil", "Beklædning", "Forhandler", "Pris"],
          raekker: [
            ["Nissan NV200 L1H1", "Sidebeklædning", "VanKompagniet", "2.499 kr."],
            ["VW Caddy 21- / Ford Connect 25- L1H1", "4 mm plast", "SmartVan", "1.650 kr."],
            ["Ford Connect Hybrid 25- L2H1", "4 mm plast", "SmartVan", "2.025 kr."],
            ["Maxus e-Deliver 3 L1", "Sidebeklædning", "VanKompagniet", "2.999 kr."],
            ["Renault Trafic 14- / Opel Vivaro 14-19 L1H1 og L2H1", "4 mm grå finer", "SmartVan", "3.000 kr."],
            ["Ford Transit L2H3", "Finer", "VanKompagniet", "5.999 kr."],
            ["VW Crafter / MAN TGE L5H3", "Sidebeklædning", "VanKompagniet", "6.999 kr."],
            ["Iveco Daily L3H3", "Finer", "VanKompagniet", "8.699 kr."],
            ["Iveco Daily L4H3", "Finer", "VanKompagniet", "9.299 kr."]
          ],
          note: `Vejledende webshoppriser for kit til den enkelte model. Kilder: <a href="${SVP}" rel="noopener">SmartVan: Panelsider</a> og <a href="${VKS}" rel="noopener">VanKompagniet: Sidebeklædning</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["VW Caddy / Ford Connect L1H1", 1650, "4 mm plast, SmartVan"],
            ["Nissan NV200 L1H1", 2499, "VanKompagniet"],
            ["Renault Trafic / Opel Vivaro", 3000, "4 mm finer, SmartVan"],
            ["Ford Transit L2H3", 5999, "finer, VanKompagniet"],
            ["Iveco Daily L4H3", 9299, "finer, VanKompagniet"]
          ],
          note: `Fem af modellerne fra tabellen. Kilder: <a href="${SVP}" rel="noopener">SmartVan: Panelsider</a> og <a href="${VKS}" rel="noopener">VanKompagniet: Sidebeklædning</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Isolering, loft og lys",
        tekst: [
          `Beklædningen kan kombineres med isolering af siderne. Dansk Varebilindretning skriver, at isoleringen også dæmper den støj, der går fra varerummet om i kabinen.`,
          `Ikke alle vælger isolering og beklædning af loftet. Ifølge Dansk Varebilindretning gør de, der vælger det, det for at beskytte følsomt udstyr, få mere komfort i varerummet eller dæmpe støjen. Modul-Systems væg- og loftbeklædninger limes fast ligesom gulvet og leveres forskåret.`,
          `Lys hører med, når siderne og loftet alligevel beklædes. Dansk Varebilindretning sætter ofte 2–3 LED-skinner på 0,5 meter ned i midten af bilen.`
        ]
      },
      {
        overskrift: "Surringsskinner i gulvet",
        tekst: [
          `Flere gulve har skinner bygget ind. Modul-System har gulve med indbyggede skinner, gulve med tværgående skinner og dobbeltbunde med integrerede lastskinner. Skinnerne bruges både til at fastgøre reoler og til lastsikring. SmartVan sælger desuden en 1,9 m Airline-skinne i aluminium til montering i vognbund eller loft.`,
          `Modul-System skriver, at indretningen let kan tages af og sættes på igen, når den er fastgjort i skinnerne. Skinner i gulv, sider og loft tåler store kræfter på langs, men næsten ingen på tværs af den flade, de sidder på, ifølge EU's retningslinjer for lastsikring. Mere i <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>.`
        ]
      },
      {
        overskrift: "Dobbeltbund",
        tekst: [
          `En dobbeltbund er et hævet gulv med skuffer eller rum under. Færdselsstyrelsens synsvejledning kræver, at vognbunden er en ubrudt flade, men lemme til stuverum under gulvet er tilladt, og det samme er hylder, reoler og skabe, der fastholder godset.`,
          `Modul-Systems skuffer under dobbeltbunden bærer 80 kg, eller 100 kg med en gummibelagt indsats, og kan trækkes ca. 80 % ud. Dansk Varebilindretning har dobbeltbund med 2 skuffer fra 10.502 kr. inkl. montering (prisberegneren angiver ikke moms). Sammenlign skuffernes vægt og pris med hylder i <a href="/til-varebilen/indretning/skuffer/">skuffer til varebil</a>.`,
          `Modul-System skriver, at dobbeltbunde bliver mere udbredte i de mindre varebiler, fordi de udnytter lastrummet bedre. Tung last ligger i skufferne og kan nås udefra, og der kan stå reoler oven på bunden.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Skuffe, Modul-System", 80, "kg"],
            ["Med gummibelagt indsats", 100, "kg"],
            ["Udtræk", "ca. 80", "%"],
            ["Dobbeltbund med 2 skuffer, Dansk Varebilindretning", "fra 10.502", "kr."]
          ],
          note: `Dansk Varebilindretnings pris er inkl. montering. Prisberegneren angiver ikke moms. Kilder: <a href="${MS}" rel="noopener">Modul-System</a> og <a href="${DVI}" rel="noopener">Dansk Varebilindretning</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dobbeltbund og påkørsel bagfra",
        tekst: [
          `Tunge skuffer i gulvhøjde kan blive skubbet frem, hvis bilen bliver påkørt bagfra. Modul-System monterer skufferne med lidt afstand imellem, så mellemrummet fungerer som en indbygget deformationszone, der skal forhindre, at de bliver skubbet ind i væggen bag sæderne.`,
          `Som tilvalg sælger Modul-System en kollisionssikkerhedsvæg, der monteres tæt ved og forstærker væggen bag sæderne. Ved en påkørsel bagfra tager den imod belastningen fra dobbeltbunden og beskytter fører og passager. Skillevægge er beskrevet i <a href="/til-varebilen/indretning/skillevaeg/">skillevæg</a>.`,
          `Dobbeltbunden er lavet af et sandwichmateriale med aluminium på oversiden og undersiden, og der følger kantlister i aluminium med.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Varebil set fra siden med en dobbeltbund og to lange skuffer under. Der er mellemrum mellem skufferne, og en forstærket væg bag sæderne tager imod, hvis bilen bliver påkørt bagfra."><defs><marker id="pil-gulv-og-vaegbeklaedning-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(70,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-hylde" x="74" y="134" width="158" height="6"/><rect class="tg-kasse" x="76" y="140" width="72" height="22"/><rect class="tg-kasse" x="158" y="140" width="72" height="22"/><rect class="tg-modul" x="235" y="70" width="6" height="100"/><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><text class="tg-lille" x="5" y="136">PÅKØRSEL BAGFRA</text><line class="tg-pil" x1="8" y1="151" x2="62" y2="151" marker-end="url(#pil-gulv-og-vaegbeklaedning-1)"/><g class="tg-call"><line x1="120" y1="137" x2="60" y2="44"/><circle cx="120" cy="137" r="3"/><text class="tg-call__navn" x="5" y="24">Dobbeltbund</text><text class="tg-call__under" x="5" y="38">aluminium og sandwich</text></g><g class="tg-call"><line x1="238" y1="100" x2="300" y2="44"/><circle cx="238" cy="100" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Kollisionssikkerhedsvæg</text><text class="tg-call__under" x="395" y="38" text-anchor="end">forstærker væggen bag sæderne</text></g><g class="tg-call"><line x1="153" y1="151" x2="153" y2="206"/><circle cx="153" cy="151" r="3"/><text class="tg-call__navn" x="160" y="214">Mellemrum mellem skufferne</text><text class="tg-call__under" x="160" y="228">giver en deformationszone</text></g></svg>`,
          tekst: `Skematisk. Modul-Systems dobbeltbund med mellemrum mellem skufferne og den forstærkede væg, der fås som tilvalg. Kilde: <a href="${MS}" rel="noopener">Modul-System: Gulv og vægbeklædning</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så passer gulvet og panelerne til bilen første gang.",
    spoergsmaal: [
      "Model, årgang og længde, fx Caddy 2023, L2.",
      "Højde, hvis der skal sidebeklædning i, fx L2H2.",
      "Antal skydedøre, og om bilen har fløjdøre eller bagklap.",
      "Om gulvet skal skæres ud ved trinet i sidedøren eller gå helt ud til døren.",
      "Om bilens originale surringsøjer skal genbruges i gulvet.",
      "Om der skal monteres reoler på gulvet, og om gulvet skal have skinner.",
      "Om bilen er leaset, og om der må bores i karrosseriet."
    ],
    faq: [
      ["Hvad koster et gulv til en varebil?", "Webshoppriserne går fra 1.260 kr. for et 9 mm krydsfinergulv til en Caddy eller Connect L1 til 4.799 kr. for en Boxer, Jumper, Ducato eller Movano L4 (SmartVan og VanKompagniet, 4. oktober 2026)."],
      ["Hvad vejer et krydsfinergulv?", "6,1–8,2 kg pr. m² i 9–12 mm. Et gulv i polypropylen vejer 4,4 kg pr. m² (Koskisen)."],
      ["Hvad er forskellen på vognbund og varerumsgulv?", "Ingen. Begge ord bruges om et gulv, der er tilpasset modellen og beskytter bilens originale metalbund."],
      ["Skal der bores i bilen for at montere et gulv?", "Ikke nødvendigvis. Nogle plastgulve monteres med bilens egne surringsringe, og andre limes fast."],
      ["Hvad koster sidebeklædning til en varebil?", "Fra 1.650 kr. for plastpaneler til en Caddy eller Connect L1H1 til 9.299 kr. for finer i en Iveco Daily L4H3."],
      ["Kan jeg montere reoler på gulvet?", "Ja, hvis gulvet er beregnet til det. VanKompagniet skriver, at vognbunden kan danne grundlag for montering af reoler, og gulve med indbyggede skinner bruges til at fastgøre indretning."],
      ["Hvor tykt skal gulvet være?", "Krydsfinergulve fås typisk i 9 og 12 mm. Dansk Varebilindretning foretrækker 12 mm, fordi det giver en stabil overflade til reoler."],
      ["Er en dobbeltbund lovlig?", "Ja. Færdselsstyrelsens synsvejledning kræver en ubrudt vognbund, men lemme til stuverum under gulvet er tilladt."]
    ],
    kilder: [
      { navn: "SmartVan: Varerumsgulv (priser og produktbeskrivelser)", url: SVG, dato: "2026-10-04" },
      { navn: "SmartVan: Panelsider", url: SVP, dato: "2026-10-04" },
      { navn: "VanKompagniet: Vognbund og varerumsgulv", url: VKG, dato: "2026-10-04" },
      { navn: "VanKompagniet: Sidebeklædning", url: VKS, dato: "2026-10-04" },
      { navn: "Koskisen: Kore van plywood floors (produktark)", url: KORE, dato: "2026-10-07" },
      { navn: "Koskisen: KoskiCrown (produktark)", url: CROWN, dato: "2026-10-04" },
      { navn: "Modul-System: Gulv og vægbeklædning", url: MS, dato: "2026-10-07" },
      { navn: "Dansk Varebilindretning: Bund og beklædning", url: DVI, dato: "2026-10-07" },
      { navn: "Ford: specifikationer Transit Custom", url: FORD, dato: "2026-10-04" },
      { navn: "Ford: vejledende prisliste E-Transit Custom van, 07-07-2026", url: FORDP, dato: "2026-10-04" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026", url: VOSAK, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Dansk Varebilindretning: 12 mm kørefast bund er at foretrække, fordi den giver en stabil overflade for senere montering af reoler.", DVI],
    ["Dansk Varebilindretning fremstiller selv sine bunde og skærer som udgangspunkt ikke ud for trin i sidedøren, men det kan bestilles; det er oftest en fordel, at bunden går helt ud til sidedøren ved af- og pålæsning, så emnerne ikke skal løftes over trinet.", DVI],
    ["Dansk Varebilindretning: masonite-sidebeklædning kaster lyset tilbage og dæmper støjen; isolering af siderne dæmper støj fra varerum til kabine; loftisolering og -beklædning vælges for at beskytte følsomt grej, øge komforten eller støjdæmpe; de sætter ofte 2–3 LED-skinner på 0,5 m ned i midten af bilen.", DVI],
    ["Koskisen: Kore-gulvene er af 100 % finsk træ i 9 eller 12 mm; aluminiumslister ved dørene og surringskopper i metal til at fastgøre gulvet følger med som standard.", KORE],
    ["Koskisen: belægningen KoskiFutura DUO er modstandsdygtig over for de fleste almindelige kemikalier og let at rengøre; KoskiCrown er en præget TPO-belægning med støjdæmpning; KoskiDeck har skridsikker overflade.", KORE],
    ["Modul-System: limen holder bedre end bolte og møtrikker, fjerner risikoen for korrosion og beskytter restværdien; gulvet samles af moduler med not og fer som klik-lås-gulve; letvægtsprodukter øger nyttelasten eller reducerer brændstofforbrug og udledning.", MS],
    ["Modul-System: indretning fastgjort i skinnerne kan let afmonteres og monteres igen; væg- og loftbeklædninger limes og er forskårne.", MS],
    ["Modul-System: dobbeltbunde bliver mere populære i de mindre erhvervskøretøjer, fordi de maksimerer udnyttelsen af lastrummet; tung last i skufferne er tilgængelig udefra, og der kan monteres reoler oven på dobbeltbunden.", MS],
    ["Modul-System: skufferne under dobbeltbunden er fastgjort med afstand imellem for at skabe deformationszoner, der forhindrer dem i at blive skubbet ind i bagvæggen ved påkørsel bagfra; som tilvalg fås en kollisionssikkerhedsvæg, der monteres tæt ved og forstærker bagvæggen og absorberer belastningen fra dobbeltbunden; dobbeltbunden er af sandwichmateriale med aluminium på top og bund, og kantstrimler i aluminium følger med.", MS]
  ]
};
