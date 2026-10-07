// Underside /til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/ (07-10-2026)
var MST_PDF = `https://motorst.dk/media/1snjopss/21053_ns.pdf`;
var MST = `https://motorst.dk/blanketter/erklaering-om-montering-af-tilkoblingsanordning`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var SYNSFRI = `https://www.retsinformation.dk/eli/lta/2008/1006`;
var KK = `https://www.retsinformation.dk/eli/lta/2026/550`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var T100 = `https://www.retsinformation.dk/eli/lta/2016/458`;
var RAM_FAG = `https://www.rameder.dk/anhaengertraek/fagbegreber.html`;
var RAM_BRINK = `https://www.rameder.dk/brink-anhaengertraek-aftageligt-inkl-trail-tec-elsaet-13polet-specifik-198385-14351-3.html`;
var VK = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/3-4-anhaengertraek/`;
var VW_CADDY = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/Caddy_Cargo.pdf`;
var VW_BUZZ = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;
var AYVENS = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var JYSKE = `https://jyskefinans.dk/jyske-fleet/find-svar/aflevering-af-bil/`;

module.exports = {
  id: "traek-og-tagudstyr/anhaengertraek-til-varebil",
  side: {
    slug: "anhaengertraek-til-varebil",
    navn: "Anhængertræk til varebil",
    titel: "Anhængertræk til varebil: pris og regler",
    kort: `Fast, aftageligt eller svingbart træk, 7- eller 13-polet elsæt, priser med montering, registrering uden syn og kørekortets grænser for anhængeren.`,
    beskrivelse: `Anhængertræk til varebil fra 10.995 kr. med montering: typer, 7- eller 13-polet elsæt, registrering uden syn, D-værdi og kørekortets grænser.`,
    manchet: `Et monteret anhængertræk med 13-polet elsæt koster fra 10.995 kr. til de mest solgte varebiler. Er bilen under 8 år og højst 3.500 kg, kan trækket registreres uden syn med værkstedets erklæring. Her er typerne, priserne, Motorstyrelsens krav og de grænser, kørekortet sætter for anhængeren.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Monteret træk", "fra 10.995 kr.", "med 13-polet elsæt"],
        ["Uden syn", "højst 8 år", "efter første registrering, bil på højst 3.500 kg"],
        ["Kuglens højde", "385 ± 35 mm", "over vejen ved tilladt totalvægt"],
        ["Med anhænger", "80 km/t", "eller 100 km/t på motorvej med Tempo 100"]
      ],
      toc: true,
      stribe: {
        ids: ["peugeot-expert", "mercedes-vito", "fiat-ducato"],
        titel: "Tilbud lige nu på varebilerne i pristabellen"
      }
    },
    afsnit: [
      {
        overskrift: "Tre typer træk",
        tekst: [
          `Et anhængertræk består af en tværdrager, der er fastgjort til bilens bærende dele, og en kuglestang med et kuglehoved på 50 mm yderst. Ved siden af kuglen sidder stikdåsen til anhængerens lys og et beslag til anhængerens sprængwire.`,
          `Forskellen på de tre typer er, hvad der sker med kuglen, når bilen ikke trækker. På et fast træk sidder kuglen altid fremme. På et aftageligt træk tager du kuglestangen af, og på et svingbart træk drejer du kuglen ind under bilen med et håndhjul.`
        ],
        kort: [
          ["Fast", "Kuglen er boltet eller svejst fast til tværbjælken og altid synlig."],
          ["Aftageligt", "Kuglehalsen tages af, når den ikke bruges. Sat i bagfra er holderen synlig bagefter. Sat i nedefra forsvinder holderen under bilen."],
          ["Svingbart", "Kuglen sidder fast, men svinges ned og op med et håndhjul."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Bagenden af en varebil set fra siden med et anhængertræk. Tværdrageren sidder under kofangeren, kuglestangen ender i et kuglehoved på 50 mm, og stikdåsen og beslaget til sprængwiren sidder ved siden af kuglen."><path class="tg-rum" d="M0,30 L170,30 Q176,30 176,36 L176,150 L0,150 Z"/><line class="tg-skinne-tynd" x1="150" y1="30" x2="150" y2="150"/><rect class="tg-profil" x="156" y="136" width="26" height="16"/><circle class="tg-profil" cx="70" cy="160" r="22"/><circle class="tg-profil" cx="70" cy="160" r="8"/><line class="tg-gulvlinje" x1="0" y1="182" x2="400" y2="182"/><rect class="tg-hylde" x="118" y="153" width="62" height="8"/><path class="tg-gulvlinje" d="M180,157 L204,157 Q218,157 220,143 L222,133"/><circle class="tg-modul" cx="223" cy="125" r="8"/><rect class="tg-kasse" x="196" y="161" width="14" height="12"/><rect class="tg-kuffert" x="183" y="161" width="6" height="9"/><g class="tg-call"><line x1="226" y1="118" x2="258" y2="60"/><circle cx="226" cy="118" r="3"/><text class="tg-call__navn" x="250" y="40">Kuglehoved 50 mm</text><text class="tg-call__under" x="250" y="54">til anhængerens kobling</text></g><g class="tg-call"><line x1="210" y1="168" x2="266" y2="156"/><circle cx="210" cy="168" r="3"/><text class="tg-call__navn" x="270" y="146">Stikdåse</text><text class="tg-call__under" x="270" y="160">7- eller 13-polet</text></g><g class="tg-call"><line x1="186" y1="170" x2="234" y2="198"/><circle cx="186" cy="170" r="3"/><text class="tg-call__navn" x="236" y="208">Beslag til sprængwire</text><text class="tg-call__under" x="236" y="222">ikke på en aftagelig del</text></g><g class="tg-call"><line x1="138" y1="157" x2="96" y2="196"/><circle cx="138" cy="157" r="3"/><text class="tg-call__navn" x="10" y="208">Tværdrager</text><text class="tg-call__under" x="10" y="222">boltet til bærende dele</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${RAM_FAG}" rel="noopener">Rameder: Fagbegreber om anhængertræk</a>, <a href="${MST_PDF}" rel="noopener">Motorstyrelsen, blanket 21.053</a> og <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 9.05.001</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Svanehals, flange eller aftageligt",
        tekst: [
          `Faste træk findes med svanehals, hvor kuglen sidder på en bøjet hals, og med flange, hvor kuglen er boltet på en plade. VanKompagniet sælger begge udgaver til Expert, Jumpy, ProAce, Vivaro og Scudo til samme pris, 10.995 kr. med 13-polet elsæt og montering. Alle priser på siden er uden moms, undtagen Rameders.`,
          `Rameder kalder et træk, hvor kuglen er boltet på som en flangekugle, for en anhængerbuk. Flangekuglen kan skiftes til en i en anden højde, og Rameder anbefaler netop den form til varebiler af den grund.`
        ],
        punkter: [
          `<strong>Flange.</strong> Flangetrækket giver plads til et bagtrin mellem træk og kugle. Du kan læse mere i <a href="/til-varebilen/traek-og-tagudstyr/trinbraet-og-bagtrin/">trinbræt og bagtrin</a>.`,
          `<strong>Store varebiler.</strong> Til Boxer, Jumper, Ducato, Movano og ProAce Maxi L2 og L3 sælger VanKompagniet et flangetræk med 2 huller til 3.000 kg for 12.995 kr.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 246" role="img" aria-label="Tre typer anhængertræk set fra siden: fast med svanehals, fast med flange og aftageligt. Koblingskuglens midte sidder 385 plus minus 35 mm over vejen"><defs><marker id="pil-traek-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect class="tg-profil" x="10" y="90" width="40" height="80"/><rect class="tg-profil" x="140" y="90" width="40" height="80"/><rect class="tg-profil" x="262" y="90" width="40" height="80"/>
<path class="tg-gulvlinje" fill="none" d="M50,164 L72,164 Q92,164 96,142 L98,131"/><circle class="tg-kasse" cx="99" cy="123" r="7"/>
<rect class="tg-hylde" x="180" y="146" width="6" height="26"/><circle class="tg-kasse" cx="183" cy="153" r="2"/><circle class="tg-kasse" cx="183" cy="165" r="2"/>
<path class="tg-gulvlinje" fill="none" d="M186,159 L210,159 Q220,159 221,148 L221,131"/><circle class="tg-kasse" cx="221" cy="123" r="7"/>
<rect class="tg-kasse" x="292" y="160" width="26" height="12"/><circle class="tg-kuffert" cx="305" cy="166" r="3"/>
<path class="tg-gulvlinje" fill="none" d="M318,166 L330,166 Q342,166 343,146 L343,131"/><circle class="tg-kasse" cx="343" cy="123" r="7"/>
<line class="tg-skinne-tynd" x1="99" y1="123" x2="392" y2="123"/>
<line class="tg-gulvlinje" x1="4" y1="200" x2="396" y2="200"/>
<g class="tg-maal"><line x1="380" y1="200" x2="380" y2="123" marker-start="url(#pil-traek-1)" marker-end="url(#pil-traek-1)"/><text x="376" y="105" text-anchor="end">385 ± 35 mm</text></g>
<text class="tg-fremhaev" x="70" y="220" text-anchor="middle">Svanehals</text><text class="tg-fremhaev" x="200" y="220" text-anchor="middle">Flange</text><text class="tg-fremhaev" x="320" y="220" text-anchor="middle">Aftageligt</text>
<text class="tg-lille" x="10" y="240">SET FRA SIDEN · BILEN TIL VENSTRE · 50 MM KUGLE</text></svg>`,
          tekst: `Skematisk. Koblingskuglens midte skal ved tilladt totalvægt sidde 385 ± 35 mm over vejen (detailforskrifterne pkt. 9.05.310).`
        }
      },
      {
        overskrift: "Aftageligt træk sat i bagfra eller nedefra",
        tekst: [
          `Rameder skelner mellem to systemer til at låse en aftagelig kuglestang. Det ene har et håndtag, og det andet er fuldautomatisk, hvor kuglestangen går i indgreb, når du trykker den ind i holderen, og låser sig selv. Ifølge Rameder kan det fuldautomatiske system aflåses og bruges til alle slags anhængere.`,
          `Holderen kan også sidde forskelligt. Sættes kuglestangen i bagfra, kan holderen ses, når kuglen er taget af. Sættes den i nedefra, forsvinder holderen helt under bilen. På mange biler skal der skæres et hul i kofangeren, og Rameder sælger til nogle biler en afdækning, der skjuler hullet.`,
          `Brink-trækket til VW T6 kassevogn er et eksempel. Det sættes i skråt nedefra, kuglehovedet kan aflåses, og kofangeren skal bearbejdes med en skjult udskæring. Udskæringen betyder noget, når en leaset bil skal afleveres, og det står længere nede på siden.`
        ]
      },
      {
        overskrift: "Elsæt: 7- eller 13-polet",
        tekst: [
          `Elsættet forbinder anhængerens lygter med bilens. Ifølge Rameder kan baklygten på anhængeren ikke tilsluttes et 7-polet sæt, mens et 13-polet sæt giver alle muligheder. Med et udvidelsessæt kan det også give konstant strøm, fx til lys i en hestetrailer eller et køleskab i en campingvogn.`,
          `Har bilen et 13-polet stik og anhængeren et 7-polet, bruger du en adapter. Rameder skriver, at en adapter den anden vej kun tilpasser stikket og ikke funktionen, så fx anhængerens baklygte ikke virker.`
        ],
        punkter: [
          `<strong>7-polet.</strong> Til mindre anhængere ifølge Rameder.`,
          `<strong>13-polet.</strong> Til nyere anhængere med flere lygter og til fx campingvogne og hestetrailere med strøm til udstyr.`,
          `<strong>Modelspecifikt elsæt.</strong> Kobles til bilens forberedte stik.`,
          `<strong>Universelt elsæt.</strong> Kobles manuelt til baglygterne og passer til de fleste ældre biler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="To stikdåser til anhængertræk. Den 7-polede er til små trailere uden baklygte. Den 13-polede har også baklygte og kan give strøm til udstyr. En adapter forbinder en bil med 13-polet stik og en anhænger med 7-polet stik."><text class="tg-fremhaev" x="100" y="18" text-anchor="middle">7-polet</text><text class="tg-fremhaev" x="300" y="18" text-anchor="middle">13-polet</text><circle class="tg-profil" cx="100" cy="80" r="46"/><circle class="tg-hylde" cx="100" cy="80" r="5"/><circle class="tg-hylde" cx="126" cy="80" r="5"/><circle class="tg-hylde" cx="113" cy="102.5" r="5"/><circle class="tg-hylde" cx="87" cy="102.5" r="5"/><circle class="tg-hylde" cx="74" cy="80" r="5"/><circle class="tg-hylde" cx="87" cy="57.5" r="5"/><circle class="tg-hylde" cx="113" cy="57.5" r="5"/><circle class="tg-modul" cx="300" cy="80" r="46"/><circle class="tg-hylde" cx="300" cy="80" r="4"/><circle class="tg-hylde" cx="330" cy="80" r="4"/><circle class="tg-hylde" cx="321.2" cy="101.2" r="4"/><circle class="tg-hylde" cx="300" cy="110" r="4"/><circle class="tg-hylde" cx="278.8" cy="101.2" r="4"/><circle class="tg-hylde" cx="270" cy="80" r="4"/><circle class="tg-hylde" cx="278.8" cy="58.8" r="4"/><circle class="tg-hylde" cx="300" cy="50" r="4"/><circle class="tg-hylde" cx="321.2" cy="58.8" r="4"/><circle class="tg-hylde" cx="309.9" cy="89.9" r="4"/><circle class="tg-hylde" cx="290.1" cy="89.9" r="4"/><circle class="tg-hylde" cx="290.1" cy="70.1" r="4"/><circle class="tg-hylde" cx="309.9" cy="70.1" r="4"/><text x="100" y="146" text-anchor="middle">Små trailere</text><text x="100" y="160" text-anchor="middle">uden baklygte</text><text x="300" y="146" text-anchor="middle">Med baklygte og</text><text x="300" y="160" text-anchor="middle">strøm til udstyr</text><line class="tg-skillevaeg" x1="20" y1="174" x2="380" y2="174"/><text class="tg-lille" x="200" y="192" text-anchor="middle">13-POLET BIL, 7-POLET ANHÆNGER: ADAPTER</text><text class="tg-lille" x="200" y="208" text-anchor="middle">7-POLET BIL, 13-POLET ANHÆNGER: KUN PASFORM</text></svg>`,
          tekst: `Skematisk. Stikbenenes placering er ikke tegnet efter standarden. Kilde: <a href="${RAM_FAG}" rel="noopener">Rameder: Fagbegreber om anhængertræk</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Motorstyrelsen kræver, at 7- eller 13-polet stik forbindes efter detailforskrifterne for køretøjer.`
        ]
      },
      {
        overskrift: "Kodning og elektronik",
        tekst: [
          `På nyere biler skal elsættet ofte kodes, før alle funktioner virker. Rameder kalder det bekræftelse og skriver, at det som regel kan gøres med en diagnosetester på ethvert værksted. Funktioner som at slå tågebaglygten eller parkeringssensorerne fra, når anhængeren er koblet til, virker først efter kodningen.`,
          `Et databus-elsæt kobles direkte til bilens elektronik. Så viser bilen selv en fejl på anhængerens lys, og bilens anhængerstabilisering kan tage sig af en anhænger, der slingrer. Med et elsæt uden databus følger der i stedet en kontrollampe for anhængerens blinklys, som skal sidde, hvor føreren kan se den.`,
          `Brink-elsættet til VW T6 viser, hvad det betyder for et konkret træk. Det skal frikobles, og det slår både parkeringssensorer og tågebaglygte fra. Det har konstant strøm på stikben 9 og kan udvides med en ladeledning på stikben 10.`
        ]
      },
      {
        overskrift: "Priser",
        tekst: [
          `Et træk kan bestilles med bilen fra fabrikken eller monteres bagefter. I Volkswagens prislister koster et fast træk på Caddy Cargo 7.361 kr. og et træk med svingbar krog og el-frigørelse på ID. Buzz Cargo 6.100 kr. Det er vejledende priser, og forhandleren fastsætter selv sin pris.`,
          `VanKompagniet monterer et fast træk med 13-polet elsæt fra 10.995 kr. til de små og mellemstore varebiler. Til de store varebiler og til en Vito 2024, der ikke er bestilt med træk fra fabrikken, er prisen højere. Hos Rameder kan du købe trækket uden montering, og så skal værkstedets timer lægges oveni.`
        ],
        tabel: {
          kolonner: ["Træk", "Til", "Montering", "Pris"],
          raekker: [
            ["Fast kugle, svanehals", "Partner, Berlingo, ProAce City, Combo, Doblo", "Med", "10.995 kr."],
            ["Fast kugle, svanehals", "Citan, Kangoo, Townstar", "Med", "10.995 kr."],
            ["Fast kugle, 13-polet", "Expert, Jumpy, ProAce, Vivaro, Scudo", "Med", "10.995 kr."],
            ["Fast kugle, 13-polet", "Mercedes Vito", "Med", "10.995 kr."],
            ["Fast kugle, flange, 3.000 kg", "Boxer, Jumper, Ducato, Movano, ProAce Maxi", "Med", "12.995 kr."],
            ["Fast kugle med OEM-styreboks", "Mercedes Vito 2024", "Med", "14.995 kr."],
            ["Brink aftageligt, 13-polet", "VW T6 kassevogn 10/2019–07/2023", "Uden", "5.058,98 kr."],
            ["Fast træk fra fabrikken", "VW Caddy Cargo, modelår 2026", "Fra fabrikken", "7.361 kr."]
          ],
          note: `Rameders pris på Brink-trækket er med moms. Til Brink-trækket kommer et kofangerbeslag til 873,99 kr. Rameder anslår monteringen til 4,5 timer. Kilder: <a href="${VK}" rel="noopener">VanKompagniet</a> og <a href="${RAM_BRINK}" rel="noopener">Rameder</a> (tysk webshop med dansk side), vejledende priser set den 4. oktober 2026, og <a href="${VW_CADDY}" rel="noopener">Volkswagen, Caddy Cargo, priser pr. 22-10-2025</a>, set den 7. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Svingbart træk fra fabrikken, ID. Buzz Cargo", 6100, "Volkswagen"],
            ["Fast træk fra fabrikken, Caddy Cargo", 7361, "Volkswagen"],
            ["Fast træk med montering, fx Expert og Vito", 10995, "VanKompagniet"],
            ["Flangetræk til 3.000 kg, fx Boxer og Ducato", 12995, "VanKompagniet"],
            ["Fast træk med OEM-styreboks, Vito 2024", 14995, "VanKompagniet"]
          ],
          note: `Priserne er uden moms. Kilder: <a href="${VW_BUZZ}" rel="noopener">Volkswagen, ID. Buzz Cargo, priser pr. 15-01-2026</a>, <a href="${VW_CADDY}" rel="noopener">Volkswagen, Caddy Cargo, priser pr. 22-10-2025</a> og <a href="${VK}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Volkswagen skriver i prislisten, at fabriksmonteret ekstraudstyr kan påvirke bilens vægt og forbrug, og at et ændret forbrug kan påvirke prisen og ejerafgiften. Satserne står hos <a href="https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter" rel="noopener">Motorstyrelsen</a>.`
        ]
      },
      {
        overskrift: "Data på et træk",
        tekst: [
          `Brink-trækket til VW T6 har en D-værdi på 14,00 kN, en største trækvægt på 2.800 kg og et største kugletryk på 120 kg. D-værdien er grundlaget for, hvor tung en anhænger trækket er godkendt til.`,
          `Kugletrykket er den vægt, anhængerens trækstang må trykke ned på kuglen med. Rameder kalder det også støttelasten og nævner, at 120 kg er nok til en cykelholder på trækket. Selve trækket vejer 17,30 kg.`,
          `Rameder skriver også, at den største anhængervægt afhænger af bilens samlede vægt og kan være lavere end trækkets 2.800 kg. Det er derfor, værkstedet regner D-værdien om for den konkrete bil.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["D-værdi", "14,00", "kN"],
            ["Største trækvægt", "2.800", "kg"],
            ["Største kugletryk", 120, "kg"],
            ["Trækkets egen vægt", "17,30", "kg"]
          ],
          note: `Tallene gælder Brink-trækket til VW T6. Kilde: <a href="${RAM_BRINK}" rel="noopener">Rameder</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan regnes D-værdien om",
        tekst: [
          `Står der kun en D-værdi på trækkets mærkeplade, regner værkstedet den om til en vægt med Motorstyrelsens formel T × D / ((0,00981 × T) − D). T er bilens tilladte totalvægt i kg, og D er D-værdien i kN. Vægten afrundes til nærmeste hele kilo.`,
          `Et eksempel: En bil med en tilladt totalvægt på 3.000 kg får et træk med en D-værdi på 14,00 kN. Formlen giver 42.000 delt med 15,43, altså 2.722 kg. Jo tungere bilen er, jo lavere bliver vægten for samme D-værdi, og for en bil på 3.200 kg giver formlen 2.576 kg.`,
          `Resultatet er kun trækkets grænse. Bilfabrikantens grænse og lovens loft skal også overholdes, så den vægt, der bliver registreret, kan være lavere.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Gang T med D", "3.000 kg × 14,00 kN giver 42.000."],
            ["Træk D fra 0,00981 × T", "0,00981 × 3.000 er 29,43, og minus 14,00 giver 15,43."],
            ["Divider", "42.000 delt med 15,43 giver 2.722 kg, afrundet til hele kilo."]
          ]
        },
        efter: [
          `Kilde: <a href="${MST_PDF}" rel="noopener">Motorstyrelsen, blanket 21.053</a>, set den 7. oktober 2026. Bilen og trækket i eksemplet er tænkte.`
        ]
      },
      {
        overskrift: "Synsfri registrering",
        tekst: [
          `Synsfri betyder, at bil og anhænger kan kobles sammen uden et forudgående syn af vogntoget. Biler med en tilladt totalvægt på højst 3.500 kg kan registreres til synsfri sammenkobling uden syn. Værkstedet registrerer trækket direkte i Motorregistret eller udfylder Motorstyrelsens »Erklæring om montering af tilkoblingsanordning«. Disse krav skal være opfyldt:`
        ],
        punkter: [
          "Anmeldelsen sker højst 8 år efter bilens første registrering.",
          "Trækket har 50 mm koblingskugle og mærkeplade med fabrikat, type og største anhængervægt eller D-værdi efter direktiv 94/20/EF.",
          "Trækket er monteret efter bilfabrikantens anvisning.",
          "Der er beslag til anhængerens sprængwire ved trækket. Beslaget må ikke sidde på en aftagelig del.",
          "El-forbindelsen med 7- eller 13-polet stik er forbundet efter detailforskrifterne."
        ],
        punkt_ikon: "ja",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 284" role="img" aria-label="Beslutningstræ for registrering af et nyt anhængertræk. Er bilen over 3.500 kg, eller er der gået mere end 8 år siden første registrering, skal den til registreringssyn. Ellers registrerer værkstedet trækket selv eller bruger blanket 21.053, og bilen anmeldes, før den bruges med trækket."><defs><marker id="pil-traek-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="8" y="8" width="236" height="32"/><text x="126" y="28" text-anchor="middle">Højst 3.500 kg tilladt totalvægt?</text><rect class="tg-kasse" x="8" y="64" width="236" height="32"/><text x="126" y="84" text-anchor="middle">Højst 8 år efter 1. registrering?</text><rect class="tg-kasse" x="284" y="8" width="111" height="88"/><text x="339" y="48" text-anchor="middle">Registrerings-</text><text x="339" y="64" text-anchor="middle">syn</text><rect class="tg-kasse" x="8" y="120" width="236" height="44"/><text x="126" y="138" text-anchor="middle">Har værkstedet tilslutningsaftale</text><text x="126" y="154" text-anchor="middle">til Motorregistret?</text><rect class="tg-modul" x="284" y="120" width="111" height="44"/><text class="tg-modul__tekst" x="339" y="138" text-anchor="middle">VÆRKSTEDET</text><text class="tg-modul__tekst" x="339" y="154" text-anchor="middle">REGISTRERER</text><rect class="tg-kasse" x="8" y="188" width="236" height="32"/><text x="126" y="208" text-anchor="middle">Blanket 21.053 via virk.dk</text><rect class="tg-modul" x="8" y="244" width="387" height="32"/><text class="tg-modul__tekst" x="201" y="264" text-anchor="middle">ANMELDES, FØR BILEN BRUGES MED TRÆKKET</text><g class="tg-maal"><line x1="244" y1="24" x2="282" y2="24" marker-end="url(#pil-traek-2)"/><line x1="244" y1="80" x2="282" y2="80" marker-end="url(#pil-traek-2)"/><line x1="244" y1="142" x2="282" y2="142" marker-end="url(#pil-traek-2)"/><line x1="126" y1="40" x2="126" y2="62" marker-end="url(#pil-traek-2)"/><line x1="126" y1="96" x2="126" y2="118" marker-end="url(#pil-traek-2)"/><line x1="126" y1="164" x2="126" y2="186" marker-end="url(#pil-traek-2)"/><line x1="126" y1="220" x2="126" y2="242" marker-end="url(#pil-traek-2)"/><line x1="339" y1="164" x2="339" y2="242" marker-end="url(#pil-traek-2)"/></g><text class="tg-lille" x="263" y="18" text-anchor="middle">NEJ</text><text class="tg-lille" x="263" y="74" text-anchor="middle">NEJ</text><text class="tg-lille" x="263" y="136" text-anchor="middle">JA</text><text class="tg-lille" x="134" y="55">JA</text><text class="tg-lille" x="134" y="111">JA</text><text class="tg-lille" x="134" y="179">NEJ</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${MST}" rel="noopener">Motorstyrelsen: Erklæring om montering af tilkoblingsanordning</a> og <a href="${SYN}" rel="noopener">bekendtgørelse om godkendelse og syn af køretøjer, § 5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Efter 8 år kræver det syn",
        tekst: [
          `Uden syn kan trækket kun anmeldes, hvis det sker højst 8 år efter bilens første registrering. Ellers skal ændringen godkendes. Registreringsbekendtgørelsen kræver, at en ændring af tilkoblingen, der skal godkendes, anmeldes til registrering, før bilen bruges med ændringen. Mere i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`,
          `Kravet om syn står i bekendtgørelsen om godkendelse og syn af køretøjer. Når en tilkoblingsanordning monteres eller ændres, skal bilen godkendes ved et registreringssyn, før den tages i brug, medmindre den kan registreres synsfrit.`,
          `Vil virksomheden senere sætte den registrerede vægt af en anhænger med bremser ned, kræver det ikke syn, når bilen højst vejer 3.500 kg. Det kan være relevant, hvis førerne kun har kørekort til kategori B.`
        ]
      },
      {
        overskrift: "Hvem registrerer trækket",
        tekst: [
          "Værksteder med tilslutningsaftale til Motorregistret som reparatør angiver selv i registret, at trækket er monteret, og bruger ikke blanketten.",
          "Andre værksteder udfylder blanket 21.053 digitalt via virk.dk. Erklæringen afgives under strafansvar af den virksomhed, der monterer trækket, og virksomheden skal være momsregistreret som autoreparationsværksted eller til detailhandel med biler eller campingvogne. Bilen skal anmeldes, før den tages i brug med trækket.",
          `På sin side om blanketten nævner Motorstyrelsen også dækcentre og andre virksomheder på bilområdet, der godkender træk. Virksomheden skal have et aktivt CVR-nummer og logge på med MitID Erhverv.`,
          `Værkstedet skal bruge bilens stelnummer og registreringsnummer og de to største anhængervægte, med og uden bremser. Dem finder værkstedet ud fra reglerne i næste afsnit.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Montering", "Trækket monteres efter bilfabrikantens anvisning."],
            ["Registrering", "Et værksted med tilslutningsaftale angiver trækket i Motorregistret. Andre værksteder udfylder blanket 21.053 via virk.dk."],
            ["Før brug", "Bilen skal anmeldes, før den tages i brug med trækket."]
          ]
        }
      },
      {
        overskrift: "Anhængervægten på registreringen",
        tekst: [
          "Værkstedet angiver den største anhængervægt med og uden bremser. Der bruges den mindste af disse værdier:",
          `Motorstyrelsen definerer tjenestevægten som den køreklare vægt med fuld tank og fører. Et eksempel med Volkswagens tal for Caddy Cargo med 2.0 TDI på 102 hk og manuelt gear viser, hvordan grænserne spiller sammen.`,
          `Bilen må veje 2.220 kg, og Volkswagen tillader 1.500 kg med bremser og 740 kg uden. Med bremser er Volkswagens 1.500 kg den laveste grænse, fordi loven tillader op til bilens totalvægt. Uden bremser giver halvdelen af den køreklare vægt med fører på 1.535 kg 767,5 kg, men loven stopper ved 750 kg, og Volkswagens 740 kg er lavest.`
        ],
        punkter: [
          "Bilfabrikantens største teknisk tilladte anhængervægt.",
          "Trækfabrikantens største tilladte vægt efter mærkepladen eller D-værdien.",
          "Med bremser: højst bilens tilladte totalvægt (1,5 gange for terrængående biler) og højst 3.500 kg.",
          "Uden bremser: højst 50 % af bilens tjenestevægt og højst 750 kg."
        ],
        efter: [
          "Der kan registreres en lavere vægt. Kørekort og anhængervægt står i <a href=\"/haandbogen/anhaenger-bag-varebilen/\">anhænger bag varebilen</a> og <a href=\"/haandbogen/totalvaegt-nyttelast-og-koerekort/\">totalvægt, nyttelast og kørekort</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Tre bjælker for bilfabrikantens grænse, trækkets grænse og lovens grænse. Den korteste bjælke er den anhængervægt, der registreres"><text class="tg-fremhaev" x="0" y="16">Bilfabrikantens grænse</text><rect class="tg-profil" x="0" y="24" width="320" height="24"/><text class="tg-fremhaev" x="0" y="70">Trækket: mærkeplade eller D-værdi</text><rect class="tg-modul" x="0" y="78" width="240" height="24"/><text class="tg-modul__tekst" x="10" y="94">MINDST</text><text class="tg-fremhaev" x="0" y="124">Loven: med eller uden bremser</text><rect class="tg-profil" x="0" y="132" width="290" height="24"/><line class="tg-skinne-tynd" x1="240" y1="74" x2="240" y2="164"/><text class="tg-lille" x="0" y="182">DEN MINDSTE VÆRDI BRUGES</text></svg>`,
          tekst: "Tegningen er skematisk og viser, at værkstedet registrerer den mindste af grænserne. Hvilken grænse der er mindst, afhænger af bil og træk."
        }
      },
      {
        overskrift: "Kørekortet sætter sin egen grænse",
        tekst: [
          `Registreringen siger, hvad bilen må trække. Kørekortet siger, hvad føreren må køre med. Med kørekort til kategori B må du trække en anhænger med en tilladt totalvægt på højst 750 kg. En tungere anhænger må du kun trække, hvis bil og anhænger tilsammen har en tilladt totalvægt på højst 3.500 kg.`,
          `Kode 96 på kørekortet hæver grænsen for bil og anhænger tilsammen til 4.250 kg. Den kræver en særlig køreuddannelse og en praktisk prøve. Med kørekort til kategori BE må anhængeren have en tilladt totalvægt på op til 3.500 kg.`,
          `Et eksempel med ID. Buzz Cargo 340 hk 4Motion: Bilen må veje 3.150 kg og trække 1.800 kg med bremser. Med kategori B kan føreren kun koble en anhænger med en tilladt totalvægt på højst 750 kg til, fordi bil og anhænger ellers kommer over 3.500 kg. Med kode 96 må anhængeren have en tilladt totalvægt på op til 1.100 kg, og først med BE kan bilens 1.800 kg bruges fuldt ud.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Kategori B", 750, "anhængerens tilladte totalvægt"],
            ["Kategori B med kode 96", 1100, "bil og anhænger højst 4.250 kg"],
            ["Kategori BE", 1800, "her er bilens egen grænse lavest"]
          ],
          note: `Eksempel med ID. Buzz Cargo 340 hk 4Motion, der må veje 3.150 kg og trække 1.800 kg med bremser. Kilder: <a href="${VW_BUZZ}" rel="noopener">Volkswagen, ID. Buzz Cargo</a> og <a href="${KK}" rel="noopener">bekendtgørelse om kørekort, §§ 14 og 15 (BEK nr. 550 af 19/06/2026)</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Montering og kuglens højde",
        tekst: [
          "Skal bilen kunne kobles synsfrit til påhængskøretøjer op til 3.500 kg, skal koblingskuglens midte sidde 385 ± 35 mm over vejbanen, altså 350–420 mm. Højden gælder, når bilen er lastet til sin tilladte totalvægt (pkt. 9.05.310).",
          `Anhængeren har sit eget krav. En anhænger op til 3.500 kg skal have en kuglekobling til en 50 mm kugle, og koblingen skal opfylde højdekravet i FN-regulativ 55-01.`,
          "Trækket og beslagene skal opfylde FN-regulativ 55-01 og monteres efter bilfabrikantens anvisninger i den højde, regulativet kræver. Er fabrikantens anvisninger ikke fulgt, må den største anhængervægt med bremser højst være 90 % af bilens køreklare vægt. Beslaget til sprængwiren skal sidde højst 0,25 m fra midten.",
          `Kravet om FN-regulativ 55-01 gælder biler, der er registreret første gang fra den 1. juli 2025. Beslaget til sprængwiren skal sidde på alle biler, der kobles til en anhænger på højst 3.500 kg. For biler, der er registreret første gang før den dato, gælder kravet kun, hvis bilen skal kobles synsfrit.`,
          `Detailforskrifterne kræver også, at der sidder en sikring i kredsløbet, når der monteres elektrisk ekstraudstyr, og at ledningerne er fastgjort, så de ikke kan kortslutte eller knække.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Anhængervægt med bremser, hvis anvisningerne ikke er fulgt", "højst 90", "% af køreklar vægt"],
            ["Beslag til sprængwiren", "højst 0,25", "m fra midten"]
          ],
          note: `Kilde: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 9.05.003, 9.05.020 og 6.01.001</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til trækkets stand",
        tekst: [
          `Færdselsloven lægger ansvaret to steder. Ejeren eller den faste bruger skal sørge for, at bilen er i lovlig stand. Føreren skal hver gang sikre sig, at tilkoblingen til anhængeren er forsvarlig.`,
          `Kuglen bliver slidt med tiden. Rameder skriver, at kuglehovedet skal skiftes, hvis diameteren er kommet under 49 mm.`
        ],
        punkter: [
          "Trækket skal være solidt fastgjort til bilens bærende dele, og bolteforbindelserne skal være sikret mod adskillelse.",
          "En mekanisk sikring skal hindre, at koblingen udløses utilsigtet.",
          "Sikringen og indikatoren, der viser, om en aftagelig kugle er korrekt låst, skal være ubeskadigede.",
          "Der må ikke være væsentligt slør mellem koblingsdelene eller mere slid, end fabrikanten tillader."
        ],
        efter: [
          "Kilde: detailforskrifterne pkt. 9.05.001."
        ]
      },
      {
        overskrift: "Krav, når der køres med anhænger",
        tekst: [
          `Detailforskrifternes § 13 opstiller betingelserne for at koble en person- eller varebil til en anhænger uden bremser eller med påløbsbremser. Til en bil må der kun kobles én anhænger ad gangen.`,
          `Står anhængeren frakoblet på vejen i lygtetændingstiden, skal den have to tændte røde lygter bagud og to hvide fremad. Det gælder ikke, hvis vejen er godt oplyst, eller anhængeren står på en parkeringsplads.`
        ],
        punkter: [
          "Bilen er registreret med tilkoblingsanordning.",
          "Koblingerne passer sammen, og sikringen er i indgreb.",
          "Anhængerens elanlæg er tilsluttet, så lygterne virker.",
          "Sprængwiren er fastgjort til beslaget ved trækket.",
          "Akseltrykket overstiger ikke den registrerede vægt for anhænger og vogntog.",
          "Spejle eller kamera giver fornødent udsyn bagud."
        ]
      },
      {
        overskrift: "Hastighed med anhænger",
        tekst: [
          `En bil på højst 3.500 kg må højst køre 80 km/t, når der er koblet en påhængsvogn eller en registreringspligtig campingvogn til. På motorvej må vogntoget køre 100 km/t, hvis det opfylder betingelserne for Tempo 100.`,
          `Bilen skal have ABS-bremser og en registreret tilladt totalvægt på højst 3.500 kg. Anhængeren skal være registreret til Tempo 100 og have et Tempo 100-mærke bagpå, og dens godkendelsesattest skal være med. Er betingelserne ikke opfyldt, gælder 80 km/t. Mere i <a href="/haandbogen/hastighedsgraenser-for-varebiler/">hastighedsgrænser for varebiler</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bil med anhænger", 80, "km/t"],
            ["Tempo 100 på motorvej", 100, "km/t"],
            ["Bilens tilladte totalvægt ved Tempo 100", "højst 3.500", "kg"]
          ],
          note: `Kilder: <a href="${FL}" rel="noopener">færdselsloven, § 43, stk. 3 og 4</a> og <a href="${T100}" rel="noopener">bekendtgørelse om Tempo 100-kørsel, §§ 2-5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Trækket vejer",
        tekst: [
          "Trækkets vægt går fra bilens nyttelast. VanKompagniet oplyser vægten på hvert monteret træk.",
          `Bilen bærer vægten hele tiden, også når der ikke er nogen anhænger på. Brink-trækket til VW T6 vejer 17,30 kg ifølge Rameder.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Brink aftageligt, VW T6", 17.3],
            ["Vito, fast kugle", 22.5],
            ["Vito 2024, OEM-styreboks", 22.5],
            ["Partner og Berlingo L1, svanehals", 26],
            ["Expert og ProAce, flange", 26],
            ["Boxer og Ducato, flange 3.000 kg", 26]
          ],
          note: `Kilder: produktsider hos <a href="https://www.vankompagniet.dk/product/anhaengertraek-med-svanehals-og-13-polet-el-saet-monteret-passer-til-vito/" rel="noopener">VanKompagniet</a>, set den 4. oktober 2026, og <a href="${RAM_BRINK}" rel="noopener">Rameder</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Anhængervægt på to VW-modeller",
        tekst: [
          `Volkswagen oplyser anhængervægten for hver motor i prislisterne. Tabellen viser, hvor meget grænserne skifter mellem motorerne på samme model.`
        ],
        tabel: {
          kolonner: ["Model", "Med bremser", "Uden bremser", "Vogntogsvægt"],
          raekker: [
            ["Caddy Cargo, kort", "1.400–1.500 kg", "710–750 kg", "3.550–3.900 kg"],
            ["Caddy Cargo Maxi", "1.400–1.500 kg", "740–750 kg", "3.650–3.900 kg"],
            ["ID. Buzz Cargo 170 hk", "1.000 kg", "750 kg", "4.000 kg"],
            ["ID. Buzz Cargo 286 hk", "1.200 kg", "750 kg", "4.350 kg"],
            ["ID. Buzz Cargo 340 hk 4Motion", "1.800 kg", "750 kg", "4.950 kg"]
          ],
          note: `For Caddy Cargo dækker intervallerne de forskellige motorer. Kilder: <a href="${VW_CADDY}" rel="noopener">Volkswagen, Caddy Cargo modelår 2026</a> og <a href="${VW_BUZZ}" rel="noopener">Volkswagen, ID. Buzz Cargo</a>, set den 4. oktober 2026.`
        },
        efter: [
          "Registreringen kan sætte en lavere grænse end bilens data. Det kan du læse om i afsnittet om anhængervægten på registreringen ovenfor."
        ]
      },
      {
        overskrift: "Træk på en leasingbil",
        tekst: [
          `Ayvens opkræver 2.750 kr. for manglende aftageligt træk, manglende nøgle eller fastrustet træk ved aflevering. Jyske Fleet takserer en udskæring i kofangeren til trækket som skade.`,
          `Ayvens' huskeliste nævner aftageligt træk med nøgle blandt det ekstraudstyr, der skal med, når bilen afleveres. Gebyrlisten er fra juni 2025. Jyske Fleet skriver, at eftermonteret udstyr skal afleveres sammen med bilen. Afleveringen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan træk og registrering ordnes i samme besøg.",
    spoergsmaal: [
      "Registreringsnummer og dato for første registrering.",
      "Fast, aftageligt eller svingbart træk.",
      "7- eller 13-polet elsæt, og hvad der skal trækkes.",
      "Ønsket anhængervægt med og uden bremser.",
      "Hvilket kørekort førerne har.",
      "Om bilen har parkeringssensorer eller anden elektronik bagpå.",
      "Om bilen er leaset, og om leasingselskabet skal godkende trækket."
    ],
    faq: [
      ["Hvad koster et anhængertræk til en varebil med montering?", "Fra 10.995 kr. med fast kugle og montering hos VanKompagniet til fx Expert, Vivaro, ProAce og Vito. Til store varebiler som Boxer og Ducato koster det 12.995 kr. (oktober 2026)."],
      ["Skal en varebil synes med nyt træk?", "Nej, hvis bilen højst må veje 3.500 kg, og trækket anmeldes højst 8 år efter første registrering med værkstedets erklæring. Ældre biler skal have ændringen godkendt ved et registreringssyn."],
      ["Hvad er forskellen på 7- og 13-polet?", "7-polet passer til mindre anhængere, og anhængerens baklygte kan ikke tilsluttes. 13-polet bruges til nyere anhængere med flere lygtefunktioner og til fx campingvogne med strøm til udstyr."],
      ["Hvem må montere trækket?", "Værksteder med tilslutningsaftale til Motorregistret registrerer selv trækket. Ellers afgives erklæringen af den virksomhed, der monterer trækket, og den skal være momsregistreret som autoreparationsværksted eller til detailhandel med biler eller campingvogne."],
      ["Hvor tung en anhænger må varebilen trække?", "Den mindste af bilens, trækkets og lovens grænser. Med bremser højst bilens tilladte totalvægt og højst 3.500 kg. Uden bremser højst 50 % af tjenestevægten og højst 750 kg."],
      ["Hvor tung en anhænger må jeg trække med B-kørekort?", "En anhænger med en tilladt totalvægt på højst 750 kg. En tungere anhænger må du kun trække, hvis bil og anhænger tilsammen højst vejer 3.500 kg. Med kode 96 er grænsen 4.250 kg for bil og anhænger tilsammen."],
      ["Hvad er D-værdien?", "Den værdi, trækkets godkendelse bygger på. Motorstyrelsen bruger den til at beregne den største anhængervægt: T x D / ((0,00981 x T) – D), hvor T er bilens totalvægt i kg og D er i kN."],
      ["Hvor højt skal anhængertrækket sidde?", "Skal bilen kunne kobles synsfrit til et påhængskøretøj op til 3.500 kg, skal kuglens midte sidde 385 ± 35 mm over vejen, når bilen er lastet til sin tilladte totalvægt."],
      ["Hvad vejer et anhængertræk til en varebil?", "VanKompagniet oplyser 22,5 kg for træk til Vito og 26 kg for træk til fx Expert, ProAce, Partner og Boxer."],
      ["Er der forskel på svanehals og flangetræk?", "Begge er faste træk. Ved flangetræk er kuglen boltet på en plade, og der kan sidde et bagtrin mellem træk og kugle."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Erklæring om montering af tilkoblingsanordning (blanket 21.053)", url: MST_PDF, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Erklæring om montering af tilkoblingsanordning, blanket 21.053", url: MST, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 47", url: REG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), § 13 og pkt. 9.05", url: DETAIL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), § 5", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om synsfri sammenkobling af lastbil og påhængskøretøj med en tilladt totalvægt på over 3.500 kg (BEK nr. 1006 af 09/10/2008), § 1", url: SYNSFRI, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om kørekort (BEK nr. 550 af 19/06/2026), §§ 14 og 15", url: KK, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven (LBK nr. 118 af 12/01/2026)", url: FL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om betingelser for Tempo 100-kørsel (BEK nr. 458 af 12/05/2016)", url: T100, dato: "2026-10-07" },
      { navn: "Rameder: Fagbegreber om anhængertræk", url: RAM_FAG, dato: "2026-10-07" },
      { navn: "Rameder: Brink anhængertræk aftageligt inkl. 13-polet elsæt, VW Transporter T6", url: RAM_BRINK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk", url: VK, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYVENS, dato: "2026-10-07" },
      { navn: "Jyske Fleet: Aflevering af bil", url: JYSKE, dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle (flange), Expert, Jumpy, ProAce, Vivaro og Scudo", url: "https://www.vankompagniet.dk/product/anhaengertraek-med-flangetraek-og-13-polet-el-saet-monteret-passer-til-jumpy-expert-proace-vivaro-scudo/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle (svanehals), Expert, Jumpy, ProAce, Vivaro og Scudo", url: "https://www.vankompagniet.dk/product/anhaengertraek-med-svanehals-og-13-polet-el-saet-monteret-passer-til-jumpy-expert-proace-vivaro-scudo/", dato: "2026-10-04" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle, Mercedes Vito", url: "https://www.vankompagniet.dk/product/anhaengertraek-med-svanehals-og-13-polet-el-saet-monteret-passer-til-vito/", dato: "2026-10-04" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle og OEM-styreboks, Mercedes Vito 2024", url: "https://www.vankompagniet.dk/product/anhaengertraek-med-svanehals-og-13-polet-el-saet-monteret-passer-til-vito-2/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle (svanehals), Partner, Berlingo, ProAce City og Combo L1", url: "https://www.vankompagniet.dk/product/anhaengertraek-til-berlingo-partner-proace-city-combo-laengde-1-med-svanehals-inkl-montage/", dato: "2026-10-04" },
      { navn: "VanKompagniet: Anhængertræk med fast kugle (flange, 2 huller, 3.000 kg), Boxer, Jumper, Ducato og Movano", url: "https://www.vankompagniet.dk/product/anhaengertraek-til-jumper-boxer-ducato-movano-laengde-2-med-flangetraek-inkl-montage/", dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Periodiske afgifter", url: "https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter", dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: Caddy Cargo, priser og tekniske specifikationer, modelår 2026", url: VW_CADDY, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: ID. Buzz Cargo, priser og tekniske specifikationer", url: VW_BUZZ, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Et anhængertræk har en tværdrager, som kuglehovedet er fast forbundet med (boltet eller svejst) på et fast træk; stikdåsen monteres som regel lige ved siden af kuglehovedholderen; kuglehovedets normale mål er 50 mm.", RAM_FAG],
    ["På et svingbart træk aktiveres et håndhjul, så kuglehovedet vipper ned; et aftageligt træk kan tages af (Rameder, fagbegreber).", RAM_FAG],
    ["Rameder: kuglehovedet skal udskiftes, hvis diameteren er under 49 mm.", RAM_FAG],
    ["Rameder: til transportere (varebiler) anbefales anhængerbukke, fordi man med forskellige flangekugler kan indstille højden; en anhængerbuk har en flangekugle i stedet for et kuglehoved.", RAM_FAG],
    ["Rameder skelner mellem to aftagelige systemer: håndtagssystemet og det fuldautomatiske system; det fuldautomatiske går i indgreb, når kuglestangen trykkes ind i holderen, kan aflåses og er egnet til alle former for anhængere.", RAM_FAG],
    ["Rameder: sættes kuglestangen i bagfra, er holderen på mange biler synlig, når kuglehovedet er taget af; sættes den i nedefra, forsvinder holderen helt under bilen; på mange aftagelige træk skal der laves en udsparing i kofangeren, og til nogle biler findes en kofangerafdækning.", RAM_FAG],
    ["Brink-trækket til VW T6 kassevogn (10.19–07.23): kugleforbindelse skråt nedefra, aflåseligt kuglehoved, bearbejdning af kofanger nødvendig med skjult udskæring, vægt 17,30 kg, monteringstid 4,5 h, frikobling nødvendig, parktronic- og tågebaglygte-frakobling, konstant strøm på stikben 9, kan udvides med ladeledning på stikben 10.", RAM_BRINK],
    ["Rameder: den maksimale anhængerlast afhænger af køretøjets samlede vægt og kan derfor være lavere end trækkets angivne 2.800 kg; de 120 kg støttelast gør sættet egnet til cykelholder.", RAM_BRINK],
    ["Rameder: på et 7-polet kabelsæt kan baklygten ikke tilsluttes; 13-polet giver alle muligheder og kan med udvidelsessæt til konstantstrøm bruges til fx indvendig belysning i en hestetrailer eller køleskab i campingvognen; med 13-polet bil og 7-polet anhænger bruges en adapter; en adapter fra 7-polet til 13-polet tilpasser kun pasformen, ikke funktionen (fx baklygte).", RAM_FAG],
    ["Rameder: bekræftelse (kodning) af kabelsættet sker som regel med en diagnosetester på ethvert værksted, og funktioner som tågebaglygte- eller PDC-frakobling virker først efter bekræftelse; databus-kabelsæt viser defekter på anhængeren i bilens eget system og muliggør fx parkeringshjælp-frakobling og slingrestabilisering; ældre kabelsæt har en kontrollampe for anhængerblinket inden for førerens synsvidde.", RAM_FAG],
    ["Volkswagen: fast anhængertræk (1D1) på Caddy Cargo koster 7.361 kr. ekskl. moms (8.494 kr. inkl. moms), priser pr. 22-10-2025, modelår 2026.", VW_CADDY],
    ["Volkswagen: anhængertræk med svingbar krog og el-frigørelse (1M6) på ID. Buzz Cargo koster 6.100 kr. ekskl. moms (7.625 kr. inkl. moms), priser pr. 15-01-2026.", VW_BUZZ],
    ["Volkswagens priser angivet som vejledende priser er Skandinavisk Motor Co.s vejledende priser til forhandlerne, og hver forhandler fastsætter selv egne priser og rabatter.", VW_CADDY],
    ["Volkswagen skriver i prislisten, at tilvalg af fabriksmonteret ekstraudstyr kan påvirke bilens forbrug og vægt, og at en ændring af forbruget kan have indflydelse på bilens pris og CO2-ejerafgiften.", VW_CADDY],
    ["Motorstyrelsens formel: største tilladte vægt af påhængskøretøj = T x D / ((0,00981 x T) - D), T i kg og D i kN; vægtene afrundes til nærmeste hele tal. Eksempel (tænkt bil): T = 3.000 kg og D = 14,00 kN giver 2.722 kg; T = 3.200 kg giver 2.576 kg.", MST_PDF],
    ["Motorstyrelsen definerer tjenestevægt som køreklar vægt med fuld tank samt fører (blanket 21.053).", MST_PDF],
    ["Ved synsfri sammenkobling forstås sammenkobling af bil og påhængskøretøj uden forudgående syn og godkendelse ved en synsvirksomhed af vogntoget (definitionen i BEK nr. 1006/2008, § 1).", SYNSFRI],
    ["Montering eller ændring af tilkoblingsanordning kræver registreringssyn, inden køretøjet tages i brug, medmindre bilen er omfattet af reglerne om synsfri sammenkobling for biler op til 3.500 kg (BEK 1685/2025, § 5, stk. 1, nr. 2, og stk. 2).", SYN],
    ["Nedsættelse af tilladt vægt af påhængskøretøj med bremser for bil op til 3.500 kg kræver ikke registreringssyn (BEK 1685/2025, § 5, stk. 3).", SYN],
    ["Motorstyrelsens side om blanket 21.053: virksomheden skal være momsregistreret med aktivt cvr-nummer og registreret som autoreparationsværksted, detailhandel med biler eller campingvogne, dækcenter eller anden virksomhed inden for bilområdet, der har brug for at godkende træk; ansøgningen kræver MitID Erhverv, stelnummer, registreringsnummer og påhængskøretøjets største totalvægt med og uden bremser.", MST],
    ["Eksempel med Volkswagens tal: Caddy Cargo 2.0 TDI 102 hk Man-6 har totalvægt 2.220 kg, køreklar vægt inkl. fører 1.535 kg, anhængervægt 1.500 kg med bremser og 740 kg uden bremser; halvdelen af 1.535 kg er 767,5 kg.", VW_CADDY],
    ["Kørekort kategori B: anhænger med tilladt totalvægt højst 750 kg, eller over 750 kg, hvis vogntogets samlede tilladte totalvægt højst er 3.500 kg; med særlig køreuddannelse og praktisk prøve (kode 96) højst 4.250 kg samlet; kategori B/E: påhængskøretøjets tilladte totalvægt højst 3.500 kg (BEK 550/2026, §§ 14-15).", KK],
    ["Eksempel: ID. Buzz Cargo 340 hk 4Motion har totalvægt 3.150 kg og anhængervægt 1.800 kg med bremser; med kategori B kan den kun trække en anhænger på højst 750 kg, med kode 96 op til 1.100 kg (4.250 - 3.150), med B/E bilens egen grænse på 1.800 kg.", VW_BUZZ],
    ["Påhængskøretøj med tilladt totalvægt højst 3.500 kg skal have 50 mm kuglekobling, og kuglekoblingen skal opfylde kravene til højde i FN-regulativ 55-01 (pkt. 9.05.100 og 9.05.310).", DETAIL],
    ["Kravet om, at tilkoblingsanordning og monteringsbeslag opfylder FN-regulativ 55-01, gælder ikke biler registreret første gang før 01.07.25 (pkt. 9.05.020 og overgangsreglen i pkt. 1.01.006); beslaget til sprængwire gælder bil til sammenkobling med påhængskøretøj op til 3.500 kg, og for biler registreret før 01.07.25 kun bil til synsfri sammenkobling (pkt. 9.05.003).", DETAIL],
    ["Ved montering af elektrisk ekstraudstyr skal der være indskudt sikring i kredsløbet, og ledninger skal være velisolerede og fastgjort, så der ikke er risiko for kortslutning eller brud (pkt. 6.01.001).", DETAIL],
    ["Færdselsloven § 67, stk. 2-3: ejeren eller brugeren er ansvarlig for, at køretøjet er i lovlig stand, og føreren skal være opmærksom på, at tilkoblingen til et eventuelt påhængskøretøj er forsvarlig.", FL],
    ["Færdselsloven § 70: til bil, bortset fra ledbus, må kobles ét påhængskøretøj.", FL],
    ["Frakoblet påhængskøretøj, der i lygtetændingstiden er standset eller parkeret på vej, skal være afmærket med mindst to bagudrettede røde og to fremadrettede hvide tændte lygter, medmindre vejen er godt oplyst, eller det står på en parkeringsplads (BEK 1484, § 17).", DETAIL],
    ["For biler med tilladt totalvægt højst 3.500 kg med påhængsvogn eller registreringspligtigt påhængsredskab, herunder campingvogn, er hastigheden højst 80 km/t; med Tempo 100 højst 100 km/t på motorvej (færdselsloven § 43, stk. 3-4).", FL],
    ["Tempo 100: bilen skal have registreret tilladt totalvægt højst 3.500 kg og ABS; påhængskøretøjet skal være registreret til Tempo 100 og have Tempo 100-mærke bagpå; godkendelsesattesten skal medbringes; er betingelserne ikke opfyldt, anses kørslen som almindelig kørsel med påhængskøretøj (80 km/t) (BEK 458/2016, §§ 2-5).", T100],
    ["Ayvens' huskeliste ved aflevering nævner ekstraudstyr, fx aftageligt træk inkl. nøgle; gebyrlisten er pr. juni 2025 og ekskl. moms.", AYVENS],
    ["Jyske Fleet: eftermonteret udstyr skal afleveres sammen med leasingbilen.", JYSKE]
  ]
};
