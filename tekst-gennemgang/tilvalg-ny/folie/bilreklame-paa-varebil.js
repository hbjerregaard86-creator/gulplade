// Underside /til-varebilen/folie/bilreklame-paa-varebil/ (07-10-2026)
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var DET = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var TRYK = `https://www.trykwerk.dk/autoreklame/`;
var VIS = `https://viskilter.dk/bilreklame.aspx`;
var MONT = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var VANK = `https://www.vankompagniet.dk/product-category/dekorationer/bilreklame/`;
var M3 = `https://trimwel.ie/cdn/shop/files/3M_EU_PB_2080.pdf`;
var AVERY = `https://graphics.averydennison.com/content/dam/averydennison/graphics/eu/en/Data-Sheets/Supreme-Wrap/PDS-Supreme-Wrapping-Film-EN.pdf`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var VK_L = `https://www.vankompagniet.dk/product/dekoration-pa-lille-varebil/`;
var VK_S = `https://www.vankompagniet.dk/product/dekoration-pa-stor-varebil/`;
var SKAT = `https://info.skat.dk/data.aspx?oid=2083500`;

module.exports = {
  id: "folie/bilreklame-paa-varebil",
  side: {
    slug: "bilreklame-paa-varebil",
    navn: "Bilreklame på varebil",
    titel: "Bilreklame på varebil: priser og regler",
    kort: `Her kan du se, hvad firmanavn, logo og kontaktinfo på varebilen koster, hvilke folier skiltefirmaerne bruger, og hvad loven kræver af CVR-mærkningen.`,
    beskrivelse: `Bilreklame på varebil: navn og CVR fra 370 kr., logopakker fra 1.650 kr., priser fra fire skiltefirmaer, folietyper og reglerne for CVR på gule plader.`,
    manchet: `Bilreklame på en varebil spænder fra den lovpligtige tekst med navn og CVR-nummer til fuld dekor med print. Her kan du se reglerne for mærkningen, typerne og priserne fra danske skiltefirmaer. Alle priser på siden er uden moms.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Navn og CVR-nummer", "mindst 3 cm", "høje, i begge sider af bilen"],
        ["Logopakke, lille varebil", "fra 1.650 kr.", "hos Trykwerk, inkl. montering"],
        ["Wrapfolie, lodret flade", "8–12 år", "holdbarhed i de fleste farver ifølge producenterne"],
        ["Fjernelse af CVR-nummer", "400 kr.", "hos Ayvens og NF Fleet"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "CVR-mærkning efter registreringsbekendtgørelsen",
        tekst: [
          `§ 85 i bekendtgørelsen om registrering af køretøjer kræver firmanavn og CVR-nummer på vare- og lastbiler op til 4 t, der er registreret til udelukkende erhvervsmæssig brug. Logoet kan erstatte navnet, hvis det entydigt identificerer virksomheden. CVR-nummeret skal stå i begge tilfælde.`,
          `Kravet gælder ikke en varebil, der er registreret til privat eller blandet privat og erhvervsmæssig brug. Bekendtgørelsens § 114 fastsætter bøde for at overtræde § 85. Forskellen på pladerne står i <a href="/haandbogen/gule-plader/">gule plader</a>.`
        ],
        punkter: [
          `Synligt og letlæseligt i begge sider af bilen.`,
          `Mindst 3 cm høje bogstaver og tal, skrevet som »CVR« og 8 cifre.`,
          `I en farve, der klart afviger fra bilens farve.`,
          `Ikke på skilte eller lignende, der kan tages af og på.`,
          `Selvklæbende plastfolie er tilladt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Siden af en varebil med firmanavn og et CVR-nummer, hvor bogstaver og tal er mindst 3 cm høje"><rect class="tg-profil" x="20" y="16" width="360" height="110"/><text class="tg-fremhaev" x="40" y="52">Firmanavn eller logo</text><rect class="tg-modul" x="40" y="70" width="180" height="30"/><text class="tg-modul__tekst" x="52" y="90">CVR 00000000</text><line class="tg-pil" x1="240" y1="70" x2="240" y2="100"/><line class="tg-pil" x1="234" y1="70" x2="246" y2="70"/><line class="tg-pil" x1="234" y1="100" x2="246" y2="100"/><text x="254" y="89">mindst 3 cm</text><text x="20" y="150">I begge sider og i en farve, der afviger fra bilens</text><text x="20" y="168">Fast folie, ikke et skilt, der kan tages af</text></svg>`,
          tekst: `Skematisk. Kravene til navn og CVR-nummer på siden af bilen efter § 85. Bogstaver og tal skal være mindst 3 cm høje. Kilde: <a href="${REG}" rel="noopener">BEK nr. 663 af 10/06/2025</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Er der en registreret bruger af bilen, fx ved leasing, er det brugerens navn og CVR-nummer, der skal stå.`
        ]
      },
      {
        overskrift: "Udskåret tekst, delvis dekoration og fuld dekor",
        tekst: [
          `Bilreklame laves på tre måder, og de kan kombineres på samme bil. Forskellen er, om folien er skåret ud i bogstaver eller printet over en større flade. Trykwerks priser gælder udskåret tekst, og Trykwerk skriver, at print over hele siden koster mere.`
        ],
        kort: [
          ["Udskåret tekst", "Bogstaver og logo skåret ud af ensfarvet folie. Bilens lak ses mellem bogstaverne."],
          ["Delvis dekoration", "Printet folie på dele af bilen, typisk sider og bagdøre, kombineret med udskåret tekst."],
          ["Fuld dekor", "Printet folie over hele bilen eller store dele af den. Se <a href=\"/til-varebilen/folie/helfoliering-af-varebil/\">helfoliering af varebil</a>."]
        ]
      },
      {
        overskrift: "Priser efter bilens størrelse",
        tekst: [
          `Trykwerks logopakker inkluderer layoutforslag, mockup og montering. Pakke 1 er logo og telefonnummer på siden plus et mindre logo bagpå. Pakke 3 har logo og tekst bagpå, tekst på sidedørene og logo på kølerhjelmen. CVR-nummeret er med i alle pakker, og Trykwerk tager ikke ekstra for det.`,
          `Trykwerk deler bilerne i fire prisgrupper. En lille varebil er fx VW Caddy eller Peugeot Partner, og en kassevogn er fx Ford Transit eller Opel Vivaro. En stor kassevogn er fx Mercedes Sprinter, Ford Transit Cargo eller VW Crafter.`,
          `Har du kun brug for firmanavn og CVR-nummer, sætter Trykwerk det på for 370 kr. Forskellen mellem pakke 1 og pakke 3 er 600 kr. på en personbil og 3.850 kr. på en stor kassevogn.`
        ],
        tabel: {
          kolonner: ["Bil", "Logopakke 1", "Logopakke 2", "Logopakke 3"],
          raekker: [
            ["Personbil/hatchback", "1.550 kr.", "1.950 kr.", "2.150 kr."],
            ["Lille varebil", "1.650 kr.", "2.250 kr.", "2.600 kr."],
            ["Kassevogn", "1.750 kr.", "2.650 kr.", "3.200 kr."],
            ["Stor kassevogn", "1.950 kr.", "4.800 kr.", "5.800 kr."]
          ],
          note: `Kilde: <a href="${TRYK}" rel="noopener">Trykwerk</a>, vejledende priser inkl. montering, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det dækker logopakkerne",
        tekst: [
          `Trykwerks tre logopakker dækker forskellige flader. Prisen for hver bilstørrelse kan du se i tabellen ovenfor. Alle tre pakker har layoutforslag, mockup, CVR-nummer og montering med.`,
          `Pakke 2 er den eneste med tekst foran på bilen, mens pakke 3 har logo på kølerhjelmen. Telefonnummeret på siden er kun nævnt i pakke 1.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Flade", "Pakke 1", "Pakke 2", "Pakke 3"],
          raekker: [
            ["Logo på siderne", "ja", "ja", "ja"],
            ["Telefonnummer på siden", "ja", "nej", "nej"],
            ["Bagpå", "Mindre logo", "Logo", "Logo og tekst"],
            ["Tekst på sidedøre", "nej", "ja", "ja"],
            ["Tekst foran", "nej", "ja", "nej"],
            ["Logo på kølerhjelm", "nej", "nej", "ja"],
            ["CVR-nummer", "ja", "ja", "ja"],
            ["Montering", "ja", "ja", "ja"]
          ],
          note: `Nej betyder, at fladen ikke er nævnt i pakken. Kilde: <a href="${TRYK}" rel="noopener">Trykwerk</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Placering på bilen",
        tekst: [
          `Navn og CVR skal stå i begge sider. VanKompagniet tilpasser oplægget til den konkrete bil, så tekst og logo ikke deles af døre, håndtag og samlinger.`,
          `VanKompagniet skriver, at firmanavn og logo normalt skal være det mest fremtrædende, mens telefonnummer, webadresse og fagområde står som supplement. Designet bliver set fra forskellige vinkler og ofte kun kort tid ad gangen, når bilen kører forbi.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Placeringer af logo og tekst på en varebil set fra siden og bagfra"><path class="tg-profil" d="M20,160 L20,120 Q22,112 40,109 L72,72 Q75,69 81,69 L240,69 Q246,69 246,75 L246,160 Z"/><path class="tg-kasse" d="M76,76 L104,76 L104,102 L50,105 Z"/><line class="tg-skinne-tynd" x1="108" y1="71" x2="108" y2="158"/><circle class="tg-hylde" cx="66" cy="162" r="13"/><circle class="tg-hylde" cx="206" cy="162" r="13"/><rect class="tg-profil" x="290" y="69" width="90" height="91"/><line class="tg-skinne-tynd" x1="335" y1="71" x2="335" y2="158"/><rect class="tg-kasse" x="296" y="76" width="34" height="26"/><rect class="tg-kasse" x="340" y="76" width="34" height="26"/><rect class="tg-hylde" x="294" y="158" width="14" height="16"/><rect class="tg-hylde" x="362" y="158" width="14" height="16"/><line class="tg-gulvlinje" x1="10" y1="176" x2="390" y2="176"/><circle class="tg-kasse" cx="176" cy="112" r="10"/><text class="tg-fremhaev" x="176" y="116" text-anchor="middle">A</text><circle class="tg-kasse" cx="88" cy="128" r="10"/><text class="tg-fremhaev" x="88" y="132" text-anchor="middle">B</text><circle class="tg-kasse" cx="30" cy="132" r="10"/><text class="tg-fremhaev" x="30" y="136" text-anchor="middle">C</text><circle class="tg-kasse" cx="335" cy="130" r="10"/><text class="tg-fremhaev" x="335" y="134" text-anchor="middle">D</text><text x="20" y="200">A  Logo og telefon på siden</text><text x="210" y="200">B  Tekst på sidedøre</text><text x="20" y="220">C  Front og kølerhjelm</text><text x="210" y="220">D  Logo og tekst bagpå</text><text class="tg-lille" x="20" y="40">SET FRA SIDEN</text><text class="tg-lille" x="290" y="40">SET BAGFRA</text></svg>`,
          tekst: `Skematisk. Figuren viser fladerne i Trykwerks logopakker. Pakke 2 har tekst foran, og pakke 3 har logo på kølerhjelmen.`
        }
      },
      {
        overskrift: "Flere forhandlere",
        tekst: [
          `Viskilter, Montagegruppen og VanKompagniet bruger hver deres størrelsesgrupper, så priserne kan ikke sammenlignes række for række. VanKompagniets priser er med oplæg og montage, og Viskilter lægger 1.060 kr. oveni for montering på en varevogn.`,
          `VanKompagniet anbefaler at undersøge, om designoplæg og montering er med, når priser sammenlignes. Hos Viskilter er type 1 en reklame i én farve, type 2 en reklame i to farver og type 3 en reklame med print.`
        ],
        tabel: {
          kolonner: ["Firma", "Opgave", "Fra"],
          raekker: [
            ["Viskilter", "Varevogn, én farve", "2.460 kr."],
            ["Viskilter", "Varevogn, to farver", "2.860 kr."],
            ["Viskilter", "Varevogn, print", "3.250 kr."],
            ["Montagegruppen", "Lille kassebil", "2.500 kr."],
            ["Montagegruppen", "Mellem kassebil", "3.500 kr."],
            ["Montagegruppen", "Stor kassebil", "5.500 kr."],
            ["VanKompagniet", "Lille varebil, med oplæg", "4.995 kr."],
            ["VanKompagniet", "Mellem varebil, med oplæg", "8.995 kr."],
            ["VanKompagniet", "Stor varebil, med oplæg", "12.995 kr."]
          ],
          note: `Kilder: <a href="${VIS}" rel="noopener">Viskilter</a>, <a href="${MONT}" rel="noopener">Montagegruppen</a> og <a href="${VANK}" rel="noopener">VanKompagniet</a>. Vejledende priser, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Fra logo til færdig bil",
        tekst: [
          `Trykwerk, Viskilter og VanKompagniet laver alle et udkast, der viser reklamen på din bilmodel, før den bliver produceret. Trykwerk kalder det layoutforslag og mockup, Viskilter en grafisk illustration og VanKompagniet et dekorationsoplæg.`,
          `Viskilter skal bruge bilens mærke, model og årgang, logoet og en kort beskrivelse af, hvad du ønsker. Trykwerks priser forudsætter, at logoet findes som vektorfil, og at bilen er ren og renset for tidligere reklame. Filformater og farver står i <a href="/til-varebilen/folie/bilreklame-design-og-filer/">design og trykfiler til bilreklame</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Logo og bil", "Du sender logoet som vektorfil og oplyser bilens mærke, model og årgang."],
            ["Udkast", "Skiltefirmaet viser reklamen på en tegning af din bilmodel."],
            ["Godkendelse", "Du godkender layoutet, og Trykwerk sender et bindende tilbud."],
            ["Montering", "Viskilter monterer typisk på et par timer."],
            ["Første vask", "Montagegruppen anbefaler at vente 48 timer."]
          ]
        }
      },
      {
        overskrift: "Folietyper",
        tekst: [
          `Skiltefirmaerne bruger forskellige folier til forskellige opgaver. Kampagnefolie er billigst og beregnet til kortere tid, mens langtidsfolie har et laminat oven på printet. 3M skriver, at print på 2080-folien skal dækkes af et laminat for at beskytte printet.`,
          `Wrapfolie er lavet til at følge buede flader. Avery Dennison skriver, at Supreme Wrapping Film ikke anbefales til udskårne bogstaver og grafik, og anbefaler 900 Super Cast til det. 3M nævner grafik til erhvervsbiler og flåder, emblemer og striber blandt anvendelserne for 2080-folien.`
        ],
        punkter: [
          `<strong>Kampagnefolie.</strong> Til kortere tid. Fra 195 kr. pr. m² hos Montagegruppen.`,
          `<strong>Langtidsfolie med laminat.</strong> Montagegruppen sælger 7-års folie med laminat fra 260 kr. pr. m².`,
          `<strong>Polymeriske vinyler.</strong> Viskilter bruger blandt andet MPI 2004, P80, Supreme, MPI 1900 og 700-serien og oplyser, at de tåler bilvask, sol og opløsningsmidler.`,
          `<strong>Støbt wrapfolie.</strong> Til buede flader og helfoliering. Avery Dennisons Supreme Wrapping Film er støbt vinyl på 80 mikron.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="To snit side om side. Til venstre er bogstaverne skåret ud af folie, så lakken ses mellem dem. Til højre dækker printet folie hele fladen med et laminat ovenpå."><text class="tg-lille" x="20" y="96">UDSKÅRET TEKST</text><text class="tg-lille" x="220" y="96">PRINTET FOLIE</text><rect class="tg-gulv" x="20" y="150" width="160" height="20"/><rect class="tg-profil" x="20" y="136" width="160" height="14"/><rect class="tg-modul" x="32" y="124" width="28" height="12"/><rect class="tg-modul" x="74" y="124" width="28" height="12"/><rect class="tg-modul" x="116" y="124" width="48" height="12"/><rect class="tg-gulv" x="220" y="150" width="160" height="20"/><rect class="tg-profil" x="220" y="136" width="160" height="14"/><rect class="tg-modul" x="220" y="124" width="160" height="12"/><rect class="tg-kasse" x="220" y="116" width="160" height="8"/><g class="tg-call"><line x1="46" y1="124" x2="46" y2="44"/><circle cx="46" cy="124" r="3"/><text class="tg-call__navn" x="20" y="22">Bogstaver i folie</text><text class="tg-call__under" x="20" y="36">lakken ses imellem</text></g><g class="tg-call"><line x1="320" y1="116" x2="320" y2="44"/><circle cx="320" cy="116" r="3"/><text class="tg-call__navn" x="220" y="22">Print og laminat</text><text class="tg-call__under" x="220" y="36">laminatet beskytter printet</text></g><text x="100" y="192" text-anchor="middle">fx navn, CVR og logo</text><text x="300" y="192" text-anchor="middle">fx delvis dekoration</text><text class="tg-lille" x="20" y="218">NEDERST LAK OG PLADE · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk og ikke målfast. 3M skriver, at print på 2080-folien skal dækkes af et laminat. Kilde: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Levetid",
        tekst: [
          `Producenterne angiver, hvor mange år folien holder på en lodret flade udendørs. 3M regner med nordeuropæisk klima og Avery Dennison med mellemeuropæisk klima. Avery Dennison skriver, at holdbarheden falder, når fladen vender mod syd, ved lang tids varme og i områder med industriforurening.`
        ],
        tabel: {
          kolonner: ["Folie", "Farve", "Levetid, lodret flade"],
          raekker: [
            ["3M Wrap Film 2080", "Alle farver og strukturer", "8 år"],
            ["Avery Dennison Supreme Wrapping Film", "Hvid og sort", "12 år"],
            ["Avery Dennison Supreme Wrapping Film", "Farver", "10 år"],
            ["Avery Dennison Supreme Wrapping Film", "Metallic og perlemor", "5 år"]
          ],
          note: `Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> (nordeuropæisk klima, uden laminat) og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a> (mellemeuropæisk klima), set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "år",
          data: [
            ["3M Wrap Film 2080", 8, "alle farver og strukturer"],
            ["Avery Dennison Supreme Wrapping Film", 12, "hvid og sort"],
            ["Avery Dennison Supreme Wrapping Film", 10, "farver"],
            ["Avery Dennison Supreme Wrapping Film", 5, "metallic og perlemor"]
          ],
          note: `Søjlerne viser, hvor mange år folien holder på en lodret flade ifølge producenterne. Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> (nordeuropæisk klima, uden laminat) og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a> (mellemeuropæisk klima), set den 4. oktober 2026.`
        },
        efter: [
          `Montagegruppen oplyser, at bilfolie typisk holder 3–7 år eller længere, afhængigt af kvalitet og vedligeholdelse.`
        ]
      },
      {
        overskrift: "Hulfolie og QR-kode",
        tekst: [
          `Montagegruppen sælger folien efter kvadratmeter, og hulfolie er den dyreste af de tre typer. Prisen for en hel reklame afhænger af, hvor mange kvadratmeter der går til, og af arbejdet med at montere den.`
        ],
        punkter: [
          `<strong>Hulfolie.</strong> Montagegruppen sælger hulfolie fra 442 kr. pr. m². Kampagnefolie koster 195 kr. og 7-års folie med laminat 260 kr.`,
          `<strong>QR-kode.</strong> Montagegruppen kan integrere QR-koder i foliedesignet.`,
          `<strong>Ruder.</strong> I <a href="/til-varebilen/folie/solfilm-paa-ruder/">solfilm på ruder</a> kan du se, hvilke ruder der må have film.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr. pr. m²",
          data: [
            ["Kampagnefolie", 195],
            ["7-års folie med laminat", 260],
            ["Hulfolie", 442]
          ],
          note: `Søjlerne viser Montagegruppens fra-priser. Kilde: <a href="${MONT}" rel="noopener">Montagegruppen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Reflekterende reklame",
        tekst: [
          `Reklameskilte med reflekterende materiale regnes som supplerende refleksanordninger. En bil med fuld konturafmærkning på siden kan have reflekterende reklamer og logoer inden for konturafmærkningen.`,
          `De skal være lavt reflekterende, E-godkendt efter FN-regulativ 104 i klasse D eller E og sidde på siden. Mere i <a href="/til-varebilen/folie/refleks-og-konturmarkering/">refleks og konturmarkering</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil set fra siden med fuld konturafmærkning som en stiplet linje langs kanterne og et reflekterende logo inden for markeringen."><g transform="translate(60,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><path class="tg-skinne" fill="none" d="M66,160 L66,70 L224,70"/><line class="tg-skinne" x1="66" y1="160" x2="290" y2="160"/><rect class="tg-kuffert" x="96" y="94" width="110" height="40"/><text class="tg-fremhaev" x="151" y="119" text-anchor="middle">LOGO</text><g class="tg-call"><line x1="200" y1="70" x2="240" y2="42"/><circle cx="200" cy="70" r="3"/><text class="tg-call__navn" x="390" y="20" text-anchor="end">Fuld konturafmærkning</text><text class="tg-call__under" x="390" y="34" text-anchor="end">stiplet linje langs kanterne</text></g><g class="tg-call"><line x1="150" y1="134" x2="150" y2="206"/><circle cx="150" cy="134" r="3"/><text class="tg-call__navn" x="158" y="214">Reflekterende logo</text><text class="tg-call__under" x="158" y="228">lavt reflekterende, klasse D eller E</text></g><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/></svg>`,
          tekst: `Skematisk. Reflekterende reklame på siden skal være lavt reflekterende, E-godkendt efter FN-regulativ 104 i klasse D eller E og sidde inden for fuld konturafmærkning. Kilde: <a href="${DET}" rel="noopener">BEK nr. 1484 af 03/12/2025</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Ruder og nummerplader",
        tekst: [
          `Reklame på ruderne har egne regler, og detailforskrifterne behandler personbiler og varebiler forskelligt. Nummerpladen må ikke have reklame.`
        ],
        punkter: [
          `<strong>Forrude og forreste sideruder.</strong> Ingen påklæbet film, bortset fra en strimmel øverst ved bakspejlet.`,
          `<strong>Bagudsyn.</strong> Detailforskrifternes forbud mod reklamer og uigennemsigtig film i bagudsynet står under personbil M1. En varebil N1 skal have et udvendigt førerspejl i hver side.`,
          `<strong>Nummerplader.</strong> Må ikke påføres mærkater, anden information eller udsmykning.`
        ]
      },
      {
        overskrift: "Reklamen i regnskabet",
        tekst: [
          `Efter ligningslovens § 8, stk. 1, kan en virksomhed trække udgifter til reklame fra, når de afholdes for at sælge varer og tjenesteydelser i samme eller senere indkomstår. Reklameudgifter skal ifølge Skattestyrelsen afholdes over for en ubestemt kreds af kunder eller potentielle kunder.`,
          `Om der er fradrag for en konkret udgift, afgøres ud fra en vurdering af reklameværdien for virksomheden. Momsen på selve bilen er beskrevet i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${SKAT}" rel="noopener">Den juridiske vejledning, afsnit C.C.2.2.2.5.3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Når bilen skal retur",
        tekst: [
          `På en leasingbil skal reklamen fjernes før aflevering. Ayvens og NF Fleet tager 400 kr. for at fjerne et CVR-nummer og 600–3.500 kr. for logo og dekoration. Se <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`,
          `Det samme gælder, når en brugt bil skal have ny reklame. Trykwerks priser forudsætter, at bilen er renset for tidligere reklame, før den nye kommer på.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fjernelse af CVR-nummer", 400, "kr."],
            ["Fjernelse af logo og dekoration", "600–3.500", "kr."]
          ],
          note: `Gebyrerne er fra Ayvens (priser fra juni 2025) og NF Fleet (gebyrliste fra maj 2025). Kilde: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Eksempler fra VanKompagniet",
        tekst: [
          `VanKompagniet viser konkrete kundeopgaver med pris i webshoppen. Dekorationerne koster 5.500–8.995 kr., altså mellem standardprisen for en lille og en stor varebil. Navn og CVR og stickers kan også købes enkeltvis.`
        ],
        tabel: {
          kolonner: ["Opgave", "Pris"],
          raekker: [
            ["Stickers i forskellige mål og design", "195 kr."],
            ["Navn og CVR i hvid eller sort tekst", "495 kr."],
            ["Dekoration til tømrer- og snedkerfirma", "5.500 kr."],
            ["Dekoration til varebil i H3L3", "7.500 kr."],
            ["Dekoration til en anden kunde (EPTA)", "8.995 kr."]
          ],
          note: `Kilder: <a href="${VK_L}" rel="noopener">VanKompagniet, Dekoration – Lille varebil</a> og <a href="${VK_S}" rel="noopener">Dekoration – Stor varebil</a> (under relaterede varer), set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Viskilters priser er dagspriser",
        tekst: [
          `Viskilter skriver øverst på bilreklamesiden, at priserne på hjemmesiden ikke gælder, og at kunden får et tilbud til dagspris. Viskilter monterer typisk bilreklamen i løbet af et par timer, efter bilen er afleveret, og laver en grafisk illustration ud fra mærke, model, årgang og logo.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal skiltefirmaet vide",
    spoergsmaal_manchet: "Så passer layout og pris til bilen.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og størrelse.",
      "Firmanavn eller logo, CVR-nummer, telefon og web.",
      "Logo som vektorfil og firmaets farvekoder.",
      "Hvor teksten skal stå: sider, bagdøre, front og motorhjelm.",
      "Om designoplæg og montering skal være med i prisen.",
      "Antal biler, og om kontaktoplysningerne skal være forskellige fra bil til bil.",
      "Om bilen er leaset, og hvor længe den skal køre med reklamen."
    ],
    faq: [
      ["Hvad koster bilreklame på en varebil?", "Fra 370 kr. for navn og CVR og 1.650–5.800 kr. for logopakker hos Trykwerk afhængigt af bilens størrelse. Priserne er inkl. montering og fra oktober 2026."],
      ["Hvor store skal CVR-tallene være?", "Mindst 3 cm høje. Det samme gælder firmanavnet."],
      ["Må logoet stå i stedet for firmanavnet?", "Ja, hvis logoet entydigt identificerer virksomheden. CVR-nummeret skal stadig stå."],
      ["Må der være reklame på bagdørenes ruder?", "Detailforskrifternes forbud mod reklame og uigennemsigtig film i bagudsynet gælder personbil M1. En varebil N1 skal have et udvendigt førerspejl i hver side."],
      ["Hvor længe holder bilreklame?", "Producenterne angiver 8–12 år for wrapfolie på lodrette flader. Montagegruppen angiver 3–7 år eller længere for bilfolie."],
      ["Hvad er med i en logopakke?", "Hos Trykwerk er layoutforslag, mockup, CVR-nummer og montering med i alle tre pakker. Pakkerne adskiller sig på, hvor mange flader der får logo og tekst."],
      ["Kan der stå en QR-kode på bilreklamen?", "Ja. Montagegruppen kan integrere QR-koder i foliedesignet."],
      ["Kan bilreklame trækkes fra i skat?", "Ligningslovens § 8, stk. 1, giver fradrag for reklameudgifter, der afholdes for at sælge varer og tjenesteydelser. Om der er fradrag, afgøres ud fra en konkret vurdering af reklameværdien."],
      ["Bruges wrapfolie også til udskårne bogstaver?", "Avery Dennison anbefaler ikke Supreme Wrapping Film til udskårne bogstaver og grafik og henviser til 900 Super Cast i stedet."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 70, § 85 og § 114", url: REG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 6.05, 6.13 og 10.03", url: DET, dato: "2026-10-04" },
      { navn: "Trykwerk: Autoreklame", url: TRYK, dato: "2026-10-07" },
      { navn: "Viskilter: Bilreklame", url: VIS, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MONT, dato: "2026-10-07" },
      { navn: "VanKompagniet: Bilreklame og foliering af varebil", url: VANK, dato: "2026-10-07" },
      { navn: "3M: Wrap Film Series 2080, Product Bulletin (november 2023)", url: M3, dato: "2026-10-07" },
      { navn: "Avery Dennison: Supreme Wrapping Film, Product Data Sheet", url: AVERY, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV, dato: "2026-10-07" },
      { navn: "VanKompagniet: Dekoration – Lille varebil", url: VK_L, dato: "2026-10-04" },
      { navn: "VanKompagniet: Dekoration – Stor varebil", url: VK_S, dato: "2026-10-04" },
      { navn: "Skattestyrelsen: Den juridiske vejledning, C.C.2.2.2.5.3 Fradrag for udgifter til reklamer", url: SKAT, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Trykwerks logopakke 3 har logo på siderne, logo og tekst bag på bilen, logo på kølerhjelm og tekster på sidedørene. Den gamle side skrev, at pakke 3 havde tekst på døre, front og motorhjelm; tekst foran er kun nævnt i pakke 2.", TRYK],
    ["BEK 663, § 114, stk. 3: med bøde straffes den, der overtræder bl.a. § 85.", REG],
    ["Trykwerk: CVR-nummer er altid inkluderet ved autoreklame, uden ekstra betaling.", TRYK],
    ["Trykwerk prisgrupper: varevogn fx VW Caddy, Peugeot Partner; kassevogn fx Ford Transit, Opel Vivaro; stor kassevogn fx Mercedes Sprinter, Ford Transit Cargo, VW Crafter.", TRYK],
    ["VanKompagniet: firmanavn og logo skal normalt være de mest fremtrædende elementer, mens telefonnummer, webadresse og fagområde placeres som supplement; designet ses fra forskellige vinkler og ofte i kortere tid.", VANK],
    ["VanKompagniet: ved sammenligning af priser bør man undersøge, om designoplæg og montering er inkluderet.", VANK],
    ["Viskilters pristabel har type 1 og 2 (én og to farver) og type 3 (print) samt en kolonne for montage.", VIS],
    ["Viskilter laver en grafisk illustration ud fra bilens mærke, model og årgang, logoet og en kort beskrivelse af ønsket.", VIS],
    ["Avery Dennison: Supreme Wrapping Film er udviklet til wrapping; udskæring af bogstaver og grafik anbefales ikke, og Avery Dennison 900 Super Cast anbefales i stedet.", AVERY],
    ["3M: anbefalede anvendelser for 2080 omfatter grafik på erhvervskøretøjer og flåder, emblemer og striber; printet 2080-folie skal dækkes af et overlaminat.", M3],
    ["Avery Dennison: holdbarheden udendørs nedsættes fx ved sydvendte flader, lang tids høj temperatur og industriforurenede områder.", AVERY],
    ["Den juridiske vejledning C.C.2.2.2.5.3: reklameudgifter afholdt for at opnå salg i det pågældende og senere indkomstår kan fratrækkes (LL § 8, stk. 1); de skal afholdes over for en ubestemt kreds af kunder eller potentielle kunder; vurderingen sker ud fra en konkret vurdering af reklameværdien.", SKAT]
  ]
};
