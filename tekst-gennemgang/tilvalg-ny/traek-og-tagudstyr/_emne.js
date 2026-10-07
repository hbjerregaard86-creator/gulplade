// Emnesiden /til-varebilen/traek-og-tagudstyr/ (07-10-2026)
var MST_PDF = `https://motorst.dk/media/1snjopss/21053_ns.pdf`;
var MST = `https://motorst.dk/blanketter/erklaering-om-montering-af-tilkoblingsanordning`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var DIM = `https://www.retsinformation.dk/eli/lta/2025/1447`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var KK = `https://www.retsinformation.dk/eli/lta/2026/550`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var B157 = `https://www.retsinformation.dk/eli/lta/1977/157`;
var VK = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/`;
var VK_TAG = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/tagboejler-til-varevogn/`;
var RAM = `https://www.rameder.dk/anhaengertraek/`;
var VW_CADDY = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/Caddy_Cargo.pdf`;
var VW_BUZZ = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var AYVENS = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var JYSKE = `https://jyskefinans.dk/jyske-fleet/find-svar/aflevering-af-bil/`;

module.exports = {
  id: "traek-og-tagudstyr",
  side: {
    slug: "traek-og-tagudstyr",
    navn: "Træk og tagudstyr",
    titel: "Træk og tagudstyr til varebil: pris og regler",
    kort: `Anhængertræk, tagbøjler, stigeholdere, gult blink og trinbræt med priser fra forhandlere og reglerne for træk, blink og udstyr på taget.`,
    beskrivelse: `Anhængertræk fra 10.995 kr., tagbøjler fra 1.895 kr., stigeholder, gult blink og bagtrin til varebilen. Priser og reglerne fra myndighederne.`,
    manchet: `Anhængertræk, tagbøjler og stigeholder er ofte det første udstyr på en ny varebil. Et monteret træk koster fra 10.995 kr. og tagbøjler fra 1.895 kr., ekskl. moms. Her er typerne, priserne og reglerne for træk, gult blink og udstyr på taget.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Monteret anhængertræk", "fra 10.995 kr.", "med 13-polet elsæt"],
        ["Træk uden syn", "højst 8 år", "efter første registrering"],
        ["Tagbøjler", "fra 1.895 kr.", "for to bøjler"],
        ["Højde med last", "højst 4,00 m", "målt fra vejen"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Udstyret i overblik",
        tekst: [
          `Udstyret uden på varebilen handler om tre ting. Bilen skal kunne trække en anhænger, have plads til lange ting på taget og være synlig, når den holder i vejen. Hertil kommer trin, der gør det lettere at nå varerummet og taget.`,
          `Anhængertræk kan bestilles med bilen fra fabrikken eller monteres bagefter. Tagbøjler, stigeholdere, blink og trin sælges af forhandlere af udstyr som VanKompagniet og Rameder. Anhængertrækket skal registreres, og udstyret på taget og lygterne skal overholde detailforskrifterne for køretøjer. Hver type udstyr har sin egen side.`
        ],
        kort: [
          ["Anhængertræk", "Fast, aftageligt eller svingbart, med 7- eller 13-polet elsæt. Se <a href=\"/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/\">anhængertræk til varebil</a>."],
          ["Tagbøjler og tagreling", "Bøjler til last på taget, rørholdere og lastestop. Se <a href=\"/til-varebilen/traek-og-tagudstyr/tagboejler-og-tagreling/\">tagbøjler og tagreling</a>."],
          ["Stigeholder", "Fra klemmer på tagbøjlerne til nedfældelige holdere. Se <a href=\"/til-varebilen/traek-og-tagudstyr/stigeholder/\">stigeholder</a>."],
          ["Arbejdslys og advarselslys", "Gult blink, arbejdslygter og LED-bar. Se <a href=\"/til-varebilen/traek-og-tagudstyr/arbejdslys-og-advarselslys/\">arbejdslys og advarselslys</a>."],
          ["Trinbræt og bagtrin", "Trin i trækket, bag på biler uden træk eller på siden. Se <a href=\"/til-varebilen/traek-og-tagudstyr/trinbraet-og-bagtrin/\">trinbræt og bagtrin</a>."]
        ],
        figur: [
          {
            type: "svg",
            svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden med tagbøjler, stige på taget, blink, anhængertræk med bagtrin og trinbræt under sidedøren"><path class="tg-profil" d="M40,172 L40,126 Q42,116 66,112 L108,66 Q112,62 120,62 L356,62 Q364,62 364,70 L364,172 Z"/><path class="tg-kasse" d="M112,70 L146,70 L146,104 L82,108 Z"/><line class="tg-skinne-tynd" x1="150" y1="64" x2="150" y2="170"/><line class="tg-skinne-tynd" x1="240" y1="64" x2="240" y2="170"/><circle class="tg-hylde" cx="96" cy="174" r="17"/><circle class="tg-hylde" cx="306" cy="174" r="17"/><line class="tg-gulvlinje" x1="16" y1="191" x2="388" y2="191"/>
<rect class="tg-kasse" x="168" y="54" width="8" height="8"/><rect class="tg-kasse" x="318" y="54" width="8" height="8"/>
<rect class="tg-modul" x="156" y="46" width="182" height="8"/>
<rect class="tg-kuffert" x="122" y="52" width="16" height="10"/>
<path class="tg-gulvlinje" fill="none" d="M364,160 L378,160 Q384,160 384,152"/><circle class="tg-kasse" cx="384" cy="147" r="5"/><rect class="tg-modul" x="364" y="164" width="22" height="5"/>
<rect class="tg-modul" x="152" y="178" width="84" height="5"/>
<g class="tg-nr"><circle cx="172" cy="30" r="9"/><text x="172" y="34" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="250" cy="30" r="9"/><text x="250" y="34" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="130" cy="30" r="9"/><text x="130" y="34" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="384" cy="124" r="9"/><text x="384" y="128" text-anchor="middle">4</text></g><g class="tg-nr"><circle cx="194" cy="206" r="9"/><text x="194" y="210" text-anchor="middle">5</text></g>
<line class="tg-skinne-tynd" x1="172" y1="39" x2="172" y2="54"/><line class="tg-skinne-tynd" x1="250" y1="39" x2="250" y2="46"/><line class="tg-skinne-tynd" x1="130" y1="39" x2="130" y2="52"/><line class="tg-skinne-tynd" x1="194" y1="183" x2="194" y2="197"/>
<text x="16" y="230">1 Tagbøjler · 2 Stige i holder · 3 Blink</text><text x="16" y="246">4 Træk og bagtrin · 5 Trinbræt</text></svg>`,
            tekst: "Skematisk. Typisk placering af udstyret på en varebil set fra siden."
          }
        ]
      },
      {
        overskrift: "Priser i overblik",
        tekst: [
          `Tabellen viser fra-priser på det mest almindelige udstyr hos to forhandlere. Prisen på et anhængertræk hos VanKompagniet er med montering, mens det meste andet er uden. Rameder er en tysk webshop med en dansk side, og dens priser er med moms.`,
          `Forskellen er størst på stigeholderne. To klemmer til tagbøjlerne koster under 1.000 kr., mens en holder, der fælder stigen ned langs bilen, koster over 30.000 kr.`
        ],
        tabel: {
          kolonner: ["Udstyr", "Eksempel", "Montering", "Fra"],
          raekker: [
            ["Anhængertræk, fast kugle, 13-polet", "VanKompagniet, fx Expert, Vivaro, ProAce", "Med", "10.995 kr."],
            ["Anhængertræk, aftageligt, 13-polet", "Rameder, Brink til VW T6", "Uden", "5.058,98 kr."],
            ["Tagbøjler, 2 stk.", "VanKompagniet VK Basic", "Uden", "1.895 kr."],
            ["Stigeklemmer til tagbøjler, 2 stk.", "VanKompagniet, Cruz", "Uden", "995 kr."],
            ["Nedfældelig stigeholder", "VanKompagniet, Rhino SafeStow3", "Uden", "32.995 kr."],
            ["Tagblink, gult glas", "VanKompagniet", "Uden", "795 kr."],
            ["Blinkpakke, 4 blink", "VanKompagniet", "Med", "9.995 kr."],
            ["Bagtrin til trækket", "Rameder, universaltrin", "Uden", "503,99 kr."]
          ],
          note: `Rameders priser er med moms. Kilder: <a href="${VK}" rel="noopener">VanKompagniet</a> og <a href="${RAM}" rel="noopener">Rameder</a> (tysk webshop med dansk side), vejledende priser set den 4. oktober 2026 og den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fra fabrikken eller eftermonteret",
        tekst: [
          `Et anhængertræk kan bestilles med bilen. I Volkswagens prislister koster et fast træk på Caddy Cargo 7.361 kr., og et træk med svingbar krog og el-frigørelse på ID. Buzz Cargo koster 6.100 kr. Det er vejledende priser, og forhandleren fastsætter selv sin pris.`,
          `VanKompagniet monterer et fast træk bagefter fra 10.995 kr. til andre modeller. Volkswagen skriver i prislisten, at fabriksmonteret ekstraudstyr kan påvirke bilens vægt og forbrug og dermed prisen og ejerafgiften. Satserne står hos <a href="https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter" rel="noopener">Motorstyrelsen</a>.`
        ],
        punkter: [
          "<strong>Fabriksmonteret.</strong> Hos Volkswagen kan du vælge fast anhængertræk fra fabrikken på Caddy Cargo og træk med svingbar krog og el-frigørelse på ID. Buzz Cargo.",
          "<strong>Eftermonteret.</strong> VanKompagniet monterer fast træk med 13-polet elsæt fra 10.995 kr. til fx Partner, Expert, Vito og Citan.",
          "<strong>Nyere Vito.</strong> Til Vito 2024 uden fabriksmonteret træk sælger VanKompagniet trækket med OEM-styreboks til 14.995 kr. med montering.",
          "<strong>Registrering.</strong> Eftermonteret træk skal registreres. Du kan læse mere i <a href=\"/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/\">anhængertræk til varebil</a>."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fast træk fra fabrikken, Caddy Cargo", "7.361", "kr."],
            ["Svingbart træk fra fabrikken, ID. Buzz Cargo", "6.100", "kr."],
            ["Eftermonteret fast træk, fx Partner og Vito", "10.995", "kr."]
          ],
          note: `Kilder: <a href="${VW_CADDY}" rel="noopener">Volkswagen, Caddy Cargo, priser pr. 22-10-2025</a>, <a href="${VW_BUZZ}" rel="noopener">Volkswagen, ID. Buzz Cargo, priser pr. 15-01-2026</a> og <a href="https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/3-4-anhaengertraek/" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Træk uden syn de første 8 år",
        tekst: [
          "Et anhængertræk kan registreres til synsfri sammenkobling uden syn, hvis bilen højst må veje 3.500 kg, og anmeldelsen sker højst 8 år efter bilens første registrering. Værksteder med tilslutningsaftale til Motorregistret registrerer selv trækket. Andre værksteder udfylder Motorstyrelsens blanket 21.053. Bilen skal anmeldes, før den bruges med trækket. Detaljerne står i <a href=\"/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/\">anhængertræk til varebil</a>.",
          `Er bilen ældre, eller vejer den mere, skal trækket godkendes ved et registreringssyn, før bilen tages i brug med det. Værkstedet registrerer også, hvor tung en anhænger bilen må trække med og uden bremser, og den vægt afhænger både af bilen, trækket og loven.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Montering", "Trækket monteres efter bilfabrikantens anvisning. Bilen må højst have en tilladt totalvægt på 3.500 kg, hvis den skal registreres uden syn."],
            ["Op til 8 år efter første registrering", "Værkstedet registrerer trækket i Motorregistret eller udfylder blanket 21.053. Bilen skal ikke synes."],
            ["Mere end 8 år efter", "Trækket skal godkendes ved et registreringssyn."],
            ["Før brug", "Ændringen skal være anmeldt til registrering, før bilen kører med trækket."]
          ],
          note: `Kilder: <a href="${MST}" rel="noopener">Motorstyrelsen: blanket 21.053</a>, <a href="${SYN}" rel="noopener">bekendtgørelse om godkendelse og syn af køretøjer, § 5</a> og <a href="${REG}" rel="noopener">registreringsbekendtgørelsen, § 47</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Anhænger og kørekort",
        tekst: [
          `Registreringen siger, hvad bilen må trække, men kørekortet sætter sin egen grænse. Med kørekort til kategori B må føreren trække en anhænger med en tilladt totalvægt på højst 750 kg, eller en tungere, hvis bil og anhænger tilsammen højst har en tilladt totalvægt på 3.500 kg.`,
          `Med kode 96 på kørekortet må bil og anhænger tilsammen veje op til 4.250 kg, og med kategori BE må anhængeren veje op til 3.500 kg. En bil på højst 3.500 kg må højst køre 80 km/t med anhænger, eller 100 km/t på motorvej, hvis vogntoget opfylder betingelserne for Tempo 100. Mere i <a href="/haandbogen/anhaenger-bag-varebilen/">anhænger bag varebilen</a>.`
        ]
      },
      {
        overskrift: "Gult blink er til arbejde på vej",
        tekst: [
          "En bil må have gule afmærkningslygter. De må bruges, når bilen under arbejde på vej holder stille ved arbejdsstedet, og advarslen er nødvendig. Anden brug er forbudt, medmindre politiet giver tilladelse. Se <a href=\"/til-varebilen/traek-og-tagudstyr/arbejdslys-og-advarselslys/\">arbejdslys og advarselslys</a>.",
          `Lygten skal give gult lys, blinke 60–240 gange i minuttet og være godkendt og mærket efter FN-regulativ 65. Dækker åbne bagdøre mere end halvdelen af en påbudt baglygte set lige bagfra, skal bilen have en afmærkningslygte og et skilt i førerhuset.`
        ]
      },
      {
        overskrift: "Arbejdslys og ekstra lygter",
        tekst: [
          `En arbejdslygte skal oplyse arbejdsområdet tæt på bilen og være rettet nedad, så den ikke blænder. På biler, der er registreret første gang fra den 1. juli 2025, må den kun kunne tændes, når bilens markeringslys er tændt.`,
          `For ekstra fjernlys, fx en LED-bar, gælder, at bilen højst må have seks fjernlyslygter, at højst fire må kunne tændes samtidig, og at den samlede lysstyrke højst må være 430.000 cd. Detailforskrifterne kræver en sikring i kredsløbet, når der monteres elektrisk ekstraudstyr.`
        ]
      },
      {
        overskrift: "Udstyr på taget og på siden",
        tekst: [
          `Detailforskrifterne har regler for alt, der sidder uden på bilen. Udstyret skal sidde fast, må ikke være til unødig fare for andre trafikanter og må ikke gøre bilen bredere eller længere end tilladt. Færdselsloven kræver desuden, at last på taget er anbragt, så den ikke kan falde af.`
        ],
        punkter: [
          "<strong>Bagagebærer og lignende.</strong> Skal være forsvarligt fastgjort, må ikke medføre unødig fare og må ikke påvirke køreegenskaberne uheldigt.",
          "<strong>Stativer til stiger på siden.</strong> Skal have afrundede kanter med mindst 5 mm radius og må ikke gøre bilen længere eller bredere end tilladt for køretøjstypen.",
          "<strong>Trinbræt på siden.</strong> Regnes ikke for unødig fare, hvis det højst rager 0,10 m ud fra karrosseriet."
        ]
      },
      {
        overskrift: "Højde og bredde med udstyr",
        tekst: [
          `Højden måles til den del, der rager højest op, også når det er lasten på taget, men antenner tæller ikke med. Bredden måles over de dele, der rager længst ud, men spejle, lygter og trin, der kan foldes ind, tæller ikke med. Et fast trinbræt og et stativ på siden tæller med.`
        ],
        punkter: [
          "<strong>Højde.</strong> Bilen må højst være 4,00 m høj, målt lodret fra vejbanen til den del, der rager højest op. Grænsen gælder også, når bilen er lastet, fx med udstyr og last på taget (§§ 1 og 13).",
          "<strong>Bredde.</strong> Bilen må højst være 2,55 m bred, målt over de dele af bilen eller læsset, der rager længst ud (§§ 3 og 6).",
          "<strong>Anhænger.</strong> Den må højst være 0,35 m bredere end bilen i hver side (§ 3, stk. 4).",
          "<strong>Viadukter.</strong> Uanset højden skal føreren sikre sig, at bilen kan passere under viadukter og ledninger uden fare (færdselslovens § 84, stk. 2)."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set forfra med last på tagbøjlerne og et trinbræt i siden. Højden med last må højst være 4,00 meter, og bredden må højst være 2,55 meter målt uden spejle. Trinbrættet regnes ikke for unødig fare, hvis det højst rager 0,10 meter ud."><defs><marker id="pil-emne-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-rum" x="110" y="70" width="150" height="120" rx="8"/><rect class="tg-profil" x="122" y="82" width="126" height="46" rx="4"/><rect class="tg-profil" x="96" y="98" width="14" height="14"/><rect class="tg-profil" x="260" y="98" width="14" height="14"/><rect class="tg-hylde" x="118" y="190" width="24" height="16"/><rect class="tg-hylde" x="228" y="190" width="24" height="16"/><rect class="tg-hylde" x="104" y="62" width="162" height="6"/><rect class="tg-modul" x="130" y="48" width="110" height="14"/><text class="tg-modul__tekst" x="185" y="59" text-anchor="middle">LAST</text><rect class="tg-modul" x="260" y="178" width="10" height="6"/><line class="tg-gulvlinje" x1="4" y1="206" x2="396" y2="206"/><line class="tg-skinne-tynd" x1="240" y1="48" x2="304" y2="48"/><g class="tg-maal"><line x1="300" y1="206" x2="300" y2="48" marker-start="url(#pil-emne-1)" marker-end="url(#pil-emne-1)"/></g><text x="306" y="128">højst 4,00 m</text><text x="306" y="142">med last</text><line class="tg-skinne-tynd" x1="110" y1="190" x2="110" y2="232"/><line class="tg-skinne-tynd" x1="270" y1="184" x2="270" y2="232"/><g class="tg-maal"><line x1="110" y1="228" x2="270" y2="228" marker-start="url(#pil-emne-1)" marker-end="url(#pil-emne-1)"/><text x="190" y="244" text-anchor="middle">højst 2,55 m uden spejle</text></g><g class="tg-call"><line x1="98" y1="104" x2="50" y2="88"/><circle cx="98" cy="104" r="3"/><text class="tg-call__navn" x="4" y="70">Spejle</text><text class="tg-call__under" x="4" y="84">tæller ikke med</text></g><g class="tg-call"><line x1="268" y1="181" x2="304" y2="176"/><circle cx="268" cy="181" r="3"/><text class="tg-call__navn" x="306" y="176">Trinbræt</text><text class="tg-call__under" x="306" y="190">højst 0,10 m ud</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${DIM}" rel="noopener">BEK nr. 1447 af 27/11/2025, §§ 3, 6 og 13</a> og <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 3.02.001 og 9.06.003</a>, set den 7. oktober 2026.`
        },
        efter: [
          "Kilde: <a href=\"https://www.retsinformation.dk/eli/lta/2025/1447\" rel=\"noopener\">BEK nr. 1447 af 27/11/2025 om køretøjers største bredde, længde, højde, vægt og akseltryk</a>."
        ]
      },
      {
        overskrift: "Det tæller med i længden",
        tekst: [
          `Længden måles over de dele, der rager længst frem og tilbage, men anhængertræk, trinbræt og lygter tæller ikke med. Et bagtrin i trækket gør altså ikke bilen længere i reglernes forstand.`,
          `Det gør en stige, der rager ud over bagenden, fordi den er last. En motordrevet bil må højst være 12,00 m lang, og et vogntog med bil og anhænger højst 18,75 m. Lasten må heller ikke skjule lygter eller nummerplade.`
        ],
        efter: [
          `Kilder: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 3.02.001, stk. 7</a>, <a href="${DIM}" rel="noopener">BEK nr. 1447, §§ 8, 11 og 12</a> og <a href="${FL}" rel="noopener">færdselsloven, § 82</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Taglast og anhængervægt står i bilens data",
        tekst: [
          "Bilfabrikanten angiver, hvor meget taget og trækket må belastes. Tallene varierer fra model til model og fra motor til motor. Her er to eksempler fra Volkswagens danske prislister.",
          `ID. Buzz Cargo har to tal for taget. Det statiske gælder, når bilen holder stille, og det dynamiske under kørsel. Tagbøjlerne har deres egen grænse, og VK Basic-bøjlerne må fx bære 50 kg pr. bøjle.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Tagbelastning, Caddy Cargo", "100", "kg"],
            ["Tagbelastning, ID. Buzz Cargo", "250 / 75", "kg"],
            ["Anhængervægt m. bremser, Caddy Cargo", "1.400–1.500", "kg"],
            ["Anhængervægt m. bremser, ID. Buzz Cargo", "1.000–1.800", "kg"]
          ],
          note: `ID. Buzz Cargo må have 250 kg på taget, når bilen holder stille, og 75 kg under kørsel. Uden bremser må anhængeren veje 710–750 kg bag Caddy Cargo og 750 kg bag ID. Buzz Cargo. Kilder: <a href="${VW_CADDY}" rel="noopener">Caddy Cargo, modelår 2026</a> og <a href="${VW_BUZZ}" rel="noopener">ID. Buzz Cargo</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Udstyret vejer",
        tekst: [
          "VanKompagniet angiver vægten til 10 kg for et sæt VK Basic-tagbøjler og 40 kg for Rhino SafeStow3. Vægten trækkes fra bilens nyttelast. Mere i <a href=\"/haandbogen/totalvaegt-nyttelast-og-koerekort/\">totalvægt, nyttelast og kørekort</a>.",
          `Vægten af hvert stykke udstyr står på forhandlerens produktside. Den samlede vægt af udstyret går fra det, bilen må laste, og et monteret anhængertræk vejer alene 22,5–26 kg.`
        ],
        figur: [
          {
            type: "soejler",
            enhed: "kg",
            data: [
              ["Lastestop, 2 stk.", 2],
              ["Holder til blink", 3],
              ["VK Basic tagbøjler, 2 stk.", 10],
              ["Pipetube, 2 m", 10],
              ["Pipetube, 4 m", 14],
              ["Rhino ImpactStep", 14.1],
              ["Anhængertræk, Vito", 22.5],
              ["Anhængertræk, Expert og ProAce", 26],
              ["Rhino SafeStow3", 40]
            ],
            note: `Vægten er oplyst på produktsiderne hos <a href="https://www.vankompagniet.dk/product/vk-standard-premium-lastestop-2-pak/" rel="noopener">VanKompagniet</a>, set den 4. oktober 2026 og den 7. oktober 2026. Vægten trækkes fra nyttelasten.`
          }
        ]
      },
      {
        overskrift: "Rør, stiger og blink på samme bøjler",
        tekst: [
          "Det meste andet udstyr på taget sidder på tagbøjlerne. Hos Rhino passer KammBar Pro og KammBar Fleet til PorteTube Pro, SafeStow4, LadderStow og SafeClamp. VanKompagniet sælger en holder til blink på tagbøjlerne til 895 kr.",
          `VanKompagniet anbefaler at se bøjlerne som et samlet system, hvor bøjler, fastgørelse og tilbehør skal passe sammen. Rhinos rørholder PorteTube Pro passer fx på bøjleprofiler op til 60 x 45 mm.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Varebilens tag set ovenfra med tre tagbøjler. På bøjlerne sidder en rørholder, en stige i klemmer og en plade med et blink."><rect class="tg-rum" x="40" y="60" width="320" height="100" rx="10"/><line class="tg-skillevaeg" x1="320" y1="60" x2="320" y2="160"/><rect class="tg-hylde" x="90" y="54" width="6" height="112"/><rect class="tg-hylde" x="180" y="54" width="6" height="112"/><rect class="tg-hylde" x="270" y="54" width="6" height="112"/><rect class="tg-modul" x="76" y="70" width="214" height="14" rx="7"/><line class="tg-gulvlinje" x1="60" y1="104" x2="250" y2="104"/><line class="tg-gulvlinje" x1="60" y1="122" x2="250" y2="122"/><line class="tg-skillevaeg" x1="72" y1="104" x2="72" y2="122"/><line class="tg-skillevaeg" x1="108" y1="104" x2="108" y2="122"/><line class="tg-skillevaeg" x1="144" y1="104" x2="144" y2="122"/><line class="tg-skillevaeg" x1="200" y1="104" x2="200" y2="122"/><line class="tg-skillevaeg" x1="236" y1="104" x2="236" y2="122"/><rect class="tg-kuffert" x="87" y="100" width="12" height="26"/><rect class="tg-kuffert" x="177" y="100" width="12" height="26"/><rect class="tg-kasse" x="262" y="132" width="22" height="20"/><circle class="tg-modul" cx="273" cy="142" r="5"/><g class="tg-call"><line x1="120" y1="77" x2="60" y2="34"/><circle cx="120" cy="77" r="3"/><text class="tg-call__navn" x="4" y="16">Rørholder</text><text class="tg-call__under" x="4" y="30">2, 3 eller 4 m</text></g><g class="tg-call"><line x1="273" y1="56" x2="330" y2="34"/><circle cx="273" cy="56" r="3"/><text class="tg-call__navn" x="395" y="16" text-anchor="end">Tagbøjler</text><text class="tg-call__under" x="395" y="30" text-anchor="end">her tre bøjler</text></g><g class="tg-call"><line x1="93" y1="126" x2="60" y2="174"/><circle cx="93" cy="126" r="3"/><text class="tg-call__navn" x="4" y="186">Stige i klemmer</text><text class="tg-call__under" x="4" y="200">klemmerne sidder på bøjlerne</text></g><g class="tg-call"><line x1="273" y1="152" x2="320" y2="174"/><circle cx="273" cy="152" r="3"/><text class="tg-call__navn" x="395" y="186" text-anchor="end">Blink på plade</text><text class="tg-call__under" x="395" y="200" text-anchor="end">pladen sidder på bøjlerne</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${VK_TAG}" rel="noopener">VanKompagniet: Tagbøjler til varevogn</a> med Cruz Pipetube, Cruz Ladder Clamp og Rhino holder til blink, set den 7. oktober 2026.`
        },
        efter: [
          "Du kan læse mere i <a href=\"/til-varebilen/traek-og-tagudstyr/tagboejler-og-tagreling/\">tagbøjler og tagreling</a> og <a href=\"/til-varebilen/traek-og-tagudstyr/stigeholder/\">stigeholder</a>."
        ]
      },
      {
        overskrift: "Forsikring af udstyret",
        tekst: [
          `Hos GF Forsikring dækker kaskoen bilen og det udstyr, der sidder fast på den. GF kalder udstyr fastmonteret, når det ikke kan fjernes uden værktøj, og når det kun er lavet til brug i bilen. Kun fastmonteret udstyr er dækket, bortset fra bilens originale tilbehør som reservehjul og donkraft.`,
          `Hos GF er et anhængertræk dækket, også når det er monteret efter levering. Ekstralygter, dekorationer og folie hører til det udstyr, der ikke er fabriksmonteret, og det er dækket med op til 18.948 kr. med montering og moms (basisår 2023). Andre selskaber har andre grænser, og det står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Udstyr", "GF erhvervsbilforsikring, kasko"],
          raekker: [
            ["Anhængertræk, også eftermonteret", "ja"],
            ["Reoler, skuffer og anden indretning", "ja"],
            ["Tyverialarm og GPS-overvågning", "ja"],
            ["Ekstralygter, dekorationer og folie", "Op til 18.948 kr. (basisår 2023)"],
            ["Udstyr, der kan tages af uden værktøj", "Kun bilens originale tilbehør"]
          ],
          note: `Kilde: <a href="${GF}" rel="noopener">GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, punkt 4.1</a>, set den 7. oktober 2026. Beløbet indeksreguleres hvert år.`
        }
      },
      {
        overskrift: "Ved aflevering af leasingbilen",
        tekst: [
          `Leasingselskabet ejer bilen og har regler for udstyr, der er sat på i aftaleperioden. Reglerne er forskellige. Ayvens vil have udstyr, virksomheden selv har sat på, fjernet, mens Jyske Fleet vil have eftermonteret udstyr afleveret med bilen. Afleveringen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        punkter: [
          "<strong>Ayvens.</strong> Aftageligt træk med nøgle, tagbøjler og indretning skal afleveres med bilen. Manglende aftageligt træk, nøgle eller fastrustet træk koster 2.750 kr., og manglende afmontering af ekstra udstyr 1.500 kr.",
          "<strong>Ayvens.</strong> Udstyr, du selv har sat på i leasingperioden, skal fjernes før afleveringen, ellers koster det gebyret for manglende afmontering.",
          "<strong>Jyske Fleet.</strong> Eftermonteret udstyr afleveres med bilen. En udskæring til anhængertræk takseres som skade."
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Manglende afmontering af ekstra udstyr", 1500],
            ["Ulovlige konstruktionsændringer", 2500, "plus den faktiske udbedring"],
            ["Manglende aftageligt træk, nøgle eller fastrustet træk", 2750]
          ],
          note: `Ayvens' gebyrer pr. juni 2025, uden moms. Kilde: <a href="${AYVENS}" rel="noopener">Ayvens: Afleveringsguide, erhverv, person- og varebiler</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer udstyret til bilen og brugen.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og dato for første registrering.",
      "Tagtype: normalt tag, fastgørelsespunkter eller tagreling.",
      "Ønsket anhængervægt og om elsættet skal være 7- eller 13-polet.",
      "Hvilket kørekort førerne har.",
      "Om bilen har parkeringssensorer bagpå.",
      "Hvad der skal på taget: stiger, rør eller plader, og hvor tungt det er.",
      "Om bilen er leaset."
    ],
    faq: [
      ["Hvad koster anhængertræk til en varebil?", "Fra 10.995 kr. med fast kugle, 13-polet elsæt og montering hos VanKompagniet. Et aftageligt Brink-træk til VW T6 koster 5.058,98 kr. med moms uden montering hos Rameder (oktober 2026)."],
      ["Skal varebilen synes, når der kommer træk på?", "Nej, ikke hvis bilen højst må veje 3.500 kg, og trækket anmeldes højst 8 år efter første registrering med værkstedets erklæring. Ellers skal ændringen godkendes ved syn."],
      ["Må håndværkere køre med gult blink?", "Kun når bilen under arbejde på vej holder stille ved arbejdsstedet, og advarslen er nødvendig. Biler, der er særligt indrettet til vejarbejde, må også bruge det under kørsel. Anden brug kræver politiets tilladelse."],
      ["Hvad koster tagbøjler til en varebil?", "Fra 1.895 kr. for to VK Basic-bøjler hos VanKompagniet (oktober 2026)."],
      ["Skal tagbøjler og træk med, når leasingbilen afleveres?", "Ja, hos Ayvens. Manglende aftageligt træk eller nøgle koster 2.750 kr."],
      ["Hvor meget må man have på taget af en varebil?", "Det afhænger af bilen. Volkswagen angiver 100 kg tilladt tagbelastning for Caddy Cargo og 250 kg statisk og 75 kg dynamisk for ID. Buzz Cargo. Bilen med last og udstyr på taget må højst være 4,00 m høj."],
      ["Hvor høj må en varebil med last på taget være?", "Den må højst være 4,00 m, målt fra vejen til den del, der rager højest op. Det står i bekendtgørelsen om køretøjers største bredde, længde, højde, vægt og akseltryk."],
      ["Gør et anhængertræk bilen længere?", "Ikke i reglernes forstand. Anhængertræk og trinbræt tæller ikke med, når bilens længde måles. En stige, der rager ud over bagenden, tæller derimod med."],
      ["Er anhængertrækket dækket af kaskoen?", "Hos GF Forsikring er et anhængertræk dækket, også når det er monteret efter levering. Vilkårene står i selskabets betingelser, og andre selskaber kan have andre regler."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Erklæring om montering af tilkoblingsanordning (blanket 21.053)", url: MST_PDF, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Erklæring om montering af tilkoblingsanordning, blanket 21.053", url: MST, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DETAIL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af afmærkningslygte (gult blinklys) (BEK nr. 157 af 22/04/1977, som ændret)", url: B157, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), § 5", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 47", url: REG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om kørekort (BEK nr. 550 af 19/06/2026), §§ 14 og 15", url: KK, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven (LBK nr. 118 af 12/01/2026)", url: FL, dato: "2026-10-07" },
      { navn: "VanKompagniet: Udvendigt på varebilen", url: VK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Tagbøjler til varevogn", url: VK_TAG, dato: "2026-10-07" },
      { navn: "Rameder: Anhængertræk", url: RAM, dato: "2026-10-04" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYVENS, dato: "2026-10-07" },
      { navn: "Jyske Fleet: Aflevering af bil", url: JYSKE, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om køretøjers største bredde, længde, højde, vægt og akseltryk (BEK nr. 1447 af 27/11/2025)", url: DIM, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: Caddy Cargo, priser og tekniske specifikationer, modelår 2026", url: VW_CADDY, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: ID. Buzz Cargo, priser og tekniske specifikationer", url: VW_BUZZ, dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle og OEM-styreboks, Mercedes Vito 2024", url: "https://www.vankompagniet.dk/product/anhaengertraek-med-svanehals-og-13-polet-el-saet-monteret-passer-til-vito-2/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk", url: "https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/3-4-anhaengertraek/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Lastestop, VK Standard, sæt med 2", url: "https://www.vankompagniet.dk/product/vk-standard-premium-lastestop-2-pak/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Rhino holder til blink på tagbøjler", url: "https://www.vankompagniet.dk/product/holder-til-blitz-blink-pa-vk-tagbojler/", dato: "2026-10-07" },
      { navn: "Rhino Products: KammBar Pro", url: "https://www.rhinoproducts.eu/product/kammbar-pro/", dato: "2026-10-04" },
      { navn: "Rhino Products: PorteTube Pro", url: "https://www.rhinoproducts.eu/product/portetube-pro/", dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Periodiske afgifter", url: "https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter", dato: "2026-10-07" }
    ],
    cta_saetning: "Skal bilen have træk, tagbøjler eller stigeholder, så skriv det, så kommer det med i forespørgslen."
  },
  nye_fakta: [
    ["RETTET: Ayvens' afleveringsguide (gebyrliste pr. juni 2025) skriver nu, at udstyr, man selv har tilføjet i leasingperioden, skal fjernes, ellers udløser det et gebyr; den gamle side skrev, at privat udstyr må beholdes, hvis det kan tages af uden at skade bilen.", AYVENS],
    ["Ayvens: ulovlige konstruktionsændringer koster 2.500 kr. plus faktisk udbedringsomkostning (gebyrliste pr. juni 2025, ekskl. moms).", AYVENS],
    ["Volkswagen: fast anhængertræk på Caddy Cargo 7.361 kr. ekskl. moms (priser pr. 22-10-2025); anhængertræk med svingbar krog og el-frigørelse på ID. Buzz Cargo 6.100 kr. ekskl. moms (priser pr. 15-01-2026); priserne er vejledende priser til forhandlerne, og forhandleren fastsætter selv sin pris.", VW_CADDY],
    ["Volkswagen: tilvalg af fabriksmonteret ekstraudstyr kan påvirke bilens forbrug og vægt, og en ændring af forbruget kan have indflydelse på bilens pris og CO2-ejerafgiften.", VW_CADDY],
    ["Montering af tilkoblingsanordning kræver registreringssyn før brug, medmindre bilen er omfattet af reglerne om synsfri sammenkobling for biler op til 3.500 kg (BEK 1685/2025, § 5).", SYN],
    ["En ændring af tilkobling, der skal godkendes, skal anmeldes til registrering, før køretøjet tages i brug med ændringen (BEK 663/2025, § 47, stk. 3).", REG],
    ["Kørekort kategori B: anhænger højst 750 kg tilladt totalvægt, eller tungere, hvis vogntogets samlede tilladte totalvægt højst er 3.500 kg; kode 96: højst 4.250 kg; B/E: påhængskøretøj højst 3.500 kg (BEK 550/2026, §§ 14-15).", KK],
    ["Biler med tilladt totalvægt højst 3.500 kg med påhængsvogn eller registreringspligtigt påhængsredskab: højst 80 km/t, med Tempo 100 højst 100 km/t på motorvej (færdselsloven § 43, stk. 3-4).", FL],
    ["Påbudt baglygte må ikke kunne dækkes af bagdøre, bagsmæk eller lignende med mere end 50 % set lige bagfra; ellers kræves afmærkningslygte og skilt i førerhuset (pkt. 6.03.003, stk. 3); afmærkningslygten skal være godkendt og mærket efter FN-regulativ 65 og blinke 60-240 gange pr. minut (pkt. 6.04.005).", DETAIL],
    ["Arbejdslygte skal oplyse et arbejdsområde tæt på køretøjet og være rettet nedad; for køretøjer registreret fra 01.07.25 må arbejdslygter kun kunne tændes med markeringslys; bil kan have fire eller seks fjernlyslygter, højst fire tændt samtidig, samlet højst 430.000 cd; sikring i kredsløbet ved elektrisk ekstraudstyr (pkt. 6.01.001, 6.02.001, 6.02.002, 6.02.007, 6.02.020).", DETAIL],
    ["Færdselsloven § 82, stk. 1 og 3: gods må ikke skjule lygter eller nummerplade og skal være anbragt, så det ikke kan falde af på vejbanen.", FL],
    ["Ved måling af højden ses bort fra antenner; ved måling af bredden ses bort fra bl.a. lygter, spejle og trin, der kan foldes ind; ved måling af længden ses bort fra bl.a. lygter, trinbræt og håndgreb og tilkoblingsanordninger (pkt. 3.02.001, stk. 1, 2 og 7).", DETAIL],
    ["Et motordrevet køretøj må højst være 12,00 m langt, andre vogntog end lastbil med sættevogn højst 18,75 m, og længden måles over de dele, der rager længst fremefter og bagud (BEK 1447, §§ 8, 11 og 12).", DIM],
    ["VanKompagniet: bøjlerne skal ses som et samlet system, hvor lastholdere, fastgørelse og tilbehør skal passe sammen; Rhino ImpactStep vejer 14,1 kg.", VK_TAG],
    ["GF: kasko dækker fabriksmonteret udstyr og bl.a. anhængertræk, reoler, skuffer og tyverialarm/GPS-overvågning, selvom de ikke er monteret ved levering; ikke fabriksmonteret udstyr som ekstralygter, dekorationer og folie er dækket med indtil 18.948 kr. (basisår 2023) inkl. montering, arbejdsløn og moms; udstyr er kun dækket, hvis det er fastmonteret (kan ikke fjernes uden værktøj og er udelukkende konstrueret til brug i bilen), bortset fra bilens originale tilbehør som reservehjul og donkraft (punkt 4.1).", GF]
  ]
};
