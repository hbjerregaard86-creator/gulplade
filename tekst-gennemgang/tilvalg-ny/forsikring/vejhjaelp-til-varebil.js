// Underside /til-varebilen/forsikring/vejhjaelp-til-varebil/ (07-10-2026)
var FALCK = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-firmabil/`;
var FALCKEL = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-elbil/`;
var FALCKPH = `https://www.falck.dk/erhverv/assistance-paa-farten/vejhjalp/vejhjalp-til-pahang/`;
var SOSB = `https://www.dah.dk/erhverv/vejhjaelp/erhvervsbiler/erhverv-basis/`;
var SOSP = `https://www.dah.dk/erhverv/vejhjaelp/erhvervsbiler/erhverv-plus/`;
var SOSV = `https://www.dah.dk/erhverv/vejhjaelp/varevogn/`;
var TRYGV = `https://tryg.dk/erhverv/tryg-vejhjaelp`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var IFV = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/vejhjalp-til-erhverv`;
var CODANV = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/vejhjaelp/`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var ABV = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/vejhjaelp/`;
var AB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var GFS = `https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;

module.exports = {
  id: "forsikring/vejhjaelp-til-varebil",
  side: {
    slug: "vejhjaelp-til-varebil",
    navn: "Vejhjælp til varebil",
    titel: "Vejhjælp til varebil: priser og dækning",
    kort: `Køb vejhjælp som abonnement hos Falck og SOS Dansk Autohjælp eller som tilvalg til bilforsikringen. Se priser, binding, vægtgrænser, gods, trailer, udlandet og undtagelser.`,
    beskrivelse: `Vejhjælp til varebil: priser hos Falck og SOS Dansk Autohjælp fra 1.080 kr. om året, vejhjælp hos Tryg, If, Codan og Alm. Brand, vægtgrænser og gods.`,
    manchet: `Vejhjælp til varebilen købes enten som abonnement direkte hos et redningskorps eller som tilvalg til bilforsikringen. Her kan du se priserne, bindingen og vægtgrænserne, og hvad der sker med føreren, godset og traileren, når bilen går i stå.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["SOS Erhverv Basis", "1.080 kr.", "pr. bil om året"],
        ["Vægtgrænse, SOS og Tryg", "op til 3.500 kg", "inklusive bagage hos SOS"],
        ["Falck Pro Elbil", "op til 4.250 kg", "vægtgrænse for elbiler"],
        ["Europa hos Falck", "123 kr.", "om året som tilvalg"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "To måder at købe vejhjælp",
        tekst: [
          `Vejhjælp betyder, at nogen kommer ud og hjælper, når bilen ikke kan starte eller køre videre. Kan bilen ikke klares på stedet, bliver den kørt til et værksted, og føreren kommer videre.`,
          `Du kan købe vejhjælpen direkte hos et redningskorps som Falck eller SOS Dansk Autohjælp. Du kan også købe den som tilvalg til bilforsikringen, og så er det ofte en samarbejdspartner, der kører ud. If bruger fx Viking Assistance, og Alm. Brand og Codan bruger SOS Dansk Autohjælp.`
        ],
        kort: [
          ["Abonnement", "Du køber direkte hos Falck eller SOS Dansk Autohjælp og betaler pr. bil."],
          ["Tilvalg til forsikringen", "Tryg, If, Codan, Alm. Brand og Gjensidige sælger vejhjælp som tilvalg. Ofte er det en partner, der leverer hjælpen."],
          ["I kaskoen", "GF har vejhjælp i Danmark som en del af kaskoen."]
        ],
        efter: [
          `Kilder: <a href="${FALCK}" rel="noopener">Falck</a>, <a href="${SOSV}" rel="noopener">SOS Dansk Autohjælp</a>, <a href="${TRYGV}" rel="noopener">Tryg</a>, <a href="${IFV}" rel="noopener">If</a>, <a href="${CODANV}" rel="noopener">Codan</a>, <a href="${ABV}" rel="noopener">Alm. Brand</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${GFS}" rel="noopener">GF</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Priser på abonnement",
        tekst: [
          `Et abonnement hos Falck eller SOS Dansk Autohjælp koster mellem 1.080 og 1.285 kr. om året pr. bil. Begge binder dig i 12 måneder. SOS viser også prisen pr. måned ved årlig betaling, nemlig 90 kr. for Erhverv Basis og 107 kr. for Erhverv Plus.`,
          `Forskellen på de to SOS-abonnementer er Europa. Erhverv Plus dækker også i Europa, mens Erhverv Basis kun dækker i Danmark. Falck sælger Europa som et tilvalg til begge sine abonnementer. Abonnementet hos Falck kan betales halvårligt eller årligt.`
        ],
        tabel: {
          kolonner: ["Abonnement", "Pris pr. år", "Til", "Europa"],
          raekker: [
            ["SOS Dansk Autohjælp Erhverv Basis", "1.080 kr.", "Gulpladebiler op til 3.500 kg", "Nej"],
            ["Falck Vejhjælp Pro", "1.175 kr.", "Firmabiler", "Tilvalg, 123 kr."],
            ["SOS Dansk Autohjælp Erhverv Plus", "1.284 kr.", "Gulpladebiler op til 3.500 kg", "Ja"],
            ["Falck Vejhjælp Pro Elbil", "1.285 kr.", "Elbiler op til 4.250 kg", "Tilvalg, 123 kr."]
          ],
          note: `Priserne er vejledende listepriser pr. bil med 12 måneders binding. SOS-prisen gælder pr. bil ved op til 3 biler. Siderne oplyser ikke, om hovedprisen er inkl. moms. Kilder: <a href="${SOSB}" rel="noopener">SOS Erhverv Basis</a>, <a href="${SOSP}" rel="noopener">SOS Erhverv Plus</a>, <a href="${FALCK}" rel="noopener">Falck Vejhjælp Pro</a> og <a href="${FALCKEL}" rel="noopener">Falck Vejhjælp Pro Elbil</a>, set den 4. oktober 2026 og igen den 7. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr. pr. år",
          data: [
            ["SOS Erhverv Basis", 1080],
            ["Falck Vejhjælp Pro", 1175],
            ["SOS Erhverv Plus", 1284],
            ["Falck Pro Elbil", 1285]
          ],
          note: `Samme kilder og forbehold som tabellen, set den 4. oktober 2026 og igen den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det er med i abonnementet",
        tekst: [
          `Alle fire abonnementer giver hjælp på stedet og bugsering til et værksted, du selv vælger. SOS nævner starthjælp, hjulskifte, døroplukning, reparation af udstødning, punktering og fritrækning, hvis bilen er kørt fast i sne, mudder eller en grøft.`,
          `Forskellen ligger i, hvad der sker med føreren. Hos SOS bliver føreren og op til to passagerer kørt til et fælles bestemmelsessted i Danmark, og SOS vælger, om det sker med redderen, bus, tog, taxa eller færge. Falck kører føreren og passagererne til et valgfrit bestemmelsessted i Danmark, når bilen ikke kan repareres på stedet.`,
          `Hos SOS bliver bilen ved en mistet nøgle bugseret til det nærmeste værksted eller det nærmeste autoriserede værksted. Falck Vejhjælp Pro Elbil har en garanti for at være fremme inden for 45 minutter i Danmark.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ydelse", "Falck Pro", "Falck Pro Elbil", "SOS Basis", "SOS Plus"],
          raekker: [
            ["Hjælp på stedet", "ja", "ja", "ja", "ja"],
            ["Bugsering til valgfrit værksted", "ja", "ja", "ja", "ja"],
            ["Videre transport af fører", "ja", "Til off. transport", "Op til 2 passagerer", "Op til 2 passagerer"],
            ["Hjælp i Europa", "tilvalg", "tilvalg", "nej", "ja"],
            ["Fremmetidsgaranti", "Tilvalg, 123 kr.", "45 min", "–", "–"],
            ["Lejebil", "AVIS via bonuspartner", "–", "Fra 500 kr. pr. døgn", "Fra 500 kr. pr. døgn"]
          ],
          note: `SOS oplyser en gennemsnitlig fremmetid på 41 minutter. Kilder: <a href="${FALCK}" rel="noopener">Falck Vejhjælp Pro</a>, <a href="${FALCKEL}" rel="noopener">Falck Vejhjælp Pro Elbil</a>, <a href="${SOSB}" rel="noopener">SOS Erhverv Basis</a> og <a href="${SOSP}" rel="noopener">SOS Erhverv Plus</a>, set den 4. oktober 2026. Prisen på Falcks fremmetidsgaranti, kaldet Minutgaranti, er set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tilvalg hos Falck",
        tekst: [
          `Falck lægger flere ydelser uden for grundabonnementet. Til Vejhjælp Pro kan du købe Minutgaranti, Vejhjælp i Europa og Omlæsning af gods for 123 kr. om året pr. stk. Bilen over 6 meter er også et tilvalg, og det samme er en førstehjælpskasse.`,
          `Med et Vejhjælp Pro-abonnement får du rabat hos Falcks bonuspartnere, som er værksteder over hele landet. Falck nævner 10 % rabat på værkstedsregningen og en gratis lånebil ved reparationer på over 4 timer.`,
          `Du kan også få hjælp fra Falck uden et abonnement. Så betaler virksomheden for hjælpen fra gang til gang.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Minutgaranti", "123", "kr. om året"],
            ["Vejhjælp i Europa", "123", "kr. om året"],
            ["Omlæsning af gods", "123", "kr. om året"]
          ],
          note: `Tilvalg til Falck Vejhjælp Pro. Kilde: <a href="${FALCK}" rel="noopener">Falck: Vejhjælp til firmabil, Detaljer og vilkår</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vejhjælp gennem forsikringen",
        tekst: [
          `Køber du vejhjælpen gennem bilforsikringen, betaler du for den sammen med forsikringen. Hos If kræver vejhjælpen, at bilen har Kasko eller Super, og hos Tryg er Tryg Vejhjælp et tilvalg til varebilforsikringen.`,
          `Ifs vejhjælp dækker også bugsering til et valgfrit værksted eller hjem, når skaden ikke er dækket af kaskoen. Kan transporten ikke arrangeres, og kan bilen ikke repareres samme dag, tilbyder If føreren og passagererne en hotelovernatning med morgenmad.`
        ],
        tabel: {
          kolonner: ["Selskab", "Leveres af", "Område og vilkår"],
          raekker: [
            ["Alm. Brand Vejhjælp", "SOS Dansk Autohjælp", "Europa, typisk inden 1 time. Påhængsvogne i Danmark. Med i Superkasko"],
            ["Codan Vejhjælp", "SOS Dansk Autohjælp", "Inden 1 time ni ud af ti gange. Tilvalg"],
            ["Gjensidige Vejhjælp", "Gjensidige", "Europa, i gennemsnit 45 min. Tilvalg til ansvar og kasko"],
            ["If Vejhjælp", "Viking Assistance", "Danmark og 42 lande i Europa. Kræver Kasko eller Super"],
            ["Tryg Vejhjælp", "Tryg", "Danmark og 25 km ind i Sverige og Tyskland. Under 3.500 kg, ikke godstransport"]
          ],
          note: `Kilder: <a href="${ABV}" rel="noopener">Alm. Brand</a>, <a href="${AB}" rel="noopener">Alm. Brand: pakker</a>, <a href="${CODANV}" rel="noopener">Codan</a>, <a href="${CODAN}" rel="noopener">Codan: Firmabilforsikring</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${IFV}" rel="noopener">If</a>, <a href="${TRYGV}" rel="noopener">Tryg</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.1</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Alm. Brand, typisk inden", 1, "time"],
            ["Codan, ni ud af ti gange inden", 1, "time"],
            ["Gjensidige, i gennemsnit", 45, "min."]
          ],
          note: `Alm. Brand og Codan bruger SOS Dansk Autohjælp. Kilder: <a href="${ABV}" rel="noopener">Alm. Brand</a>, <a href="${CODANV}" rel="noopener">Codan</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Alm. Brand og Codan sender en sms med et link, så vejhjælpsbilen kan følges på et kort. Ifs vilkår om bugsering og hotel er set den 7. oktober 2026 på <a href="${IFV}" rel="noopener">If: Vejhjælp til erhverv</a>.`
        ]
      },
      {
        overskrift: "Tryg Vejhjælp i detaljer",
        tekst: [
          `Tryg Vejhjælp til varebiler dækker i hele Danmark, på rute E65 til Ystad og indtil 25 km ind i Sverige og Tyskland. Den dækker ikke på Færøerne og Grønland. Du ringer til Tryg Vejhjælp på 70 11 20 00.`,
          `På stedet hjælper Tryg fx med starthjælp, reparationer, hjulskift, fritrækning, oplukning af en bildør og brændstof. Tryg hjælper også, hvis en elvarebil løber tør for strøm. Reservedele, brændstof og strøm, som Tryg kommer med, betaler du for ved levering.`,
          `Tryg dækker én transport af bilen ved hvert stop, til det sted i Danmark, du vælger. Kræver turen en bro eller en færge, fx over Storebælt, betaler du den almindelige pris uden rabatter, før transporten begynder.`,
          `Kan føreren og passagererne ikke komme videre, tilbyder Tryg én overnatning på et standardhotel med morgenmad. Du får en lånebil, så længe varebilen er på værksted.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Skematisk kort over Tryg Vejhjælps område. Hele Danmark er dækket, og det samme er et bælte på 25 km ind i Sverige og Tyskland og rute E65 til Ystad."><rect class="tg-modul" x="120" y="30" width="166" height="130"/><text class="tg-modul__tekst" x="203" y="100" text-anchor="middle">DANMARK</text><rect class="tg-kasse" x="300" y="30" width="95" height="130"/><rect class="tg-modul" x="300" y="30" width="16" height="130"/><text x="360" y="60" text-anchor="middle">Sverige</text><line class="tg-skinne" x1="316" y1="128" x2="372" y2="128"/><circle class="tg-kuffert" cx="374" cy="128" r="4"/><text x="352" y="146" text-anchor="middle">E65 Ystad</text><rect class="tg-kasse" x="120" y="176" width="166" height="48"/><rect class="tg-modul" x="120" y="176" width="166" height="14"/><text x="203" y="214" text-anchor="middle">Tyskland</text><text class="tg-lille" x="292" y="188">25 KM</text><text class="tg-lille" x="304" y="22">25 KM</text><text class="tg-fremhaev" x="5" y="46">Dækket</text><text x="5" y="64">Danmark</text><text x="5" y="80">25 km ind i</text><text x="5" y="96">Sverige og</text><text x="5" y="112">Tyskland</text><text x="5" y="128">E65 til Ystad</text><text class="tg-fremhaev" x="5" y="164">Ikke dækket</text><text x="5" y="182">Færøerne og</text><text x="5" y="198">Grønland</text></svg>`,
          tekst: `Skematisk, ikke målfast. Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.1</a> og <a href="${TRYGV}" rel="noopener">Tryg: Tryg Vejhjælp</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vægt og længde",
        tekst: [
          `Grænserne følger bilens vægt. SOS bugserer køretøjer op til 3.500 kg inklusive bagage. Falck har et eget produkt til køretøjer over 3,5 ton og et tilvalg til biler over 6 meter.`,
          `En fuldt lastet varebil kan nå tæt på grænsen. SOS skriver, at bilen højst må veje 3.500 kg med bagage, når den skal bugseres, så det er den samlede vægt med last, der tæller. Tryg Vejhjælp gælder varebiler, der vejer under 3.500 kg.`,
          `Falck Vejhjælp Pro Elbil dækker køretøjer op til 4.250 kg i Danmark. Falck skriver, at det dækker både almindelige personbiler, mindre varebiler og minibusser. Mere om vægtgrænser og kørekort står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 235" role="img" aria-label="Varebil set fra siden med vægtgrænser for vejhjælp og en mållinje for længden."><defs><marker id="pil-forsikring-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(80,170)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="187" x2="395" y2="187"/><g class="tg-maal"><line x1="80" y1="205" x2="322" y2="205" marker-start="url(#pil-forsikring-3)" marker-end="url(#pil-forsikring-3)"/><text x="201" y="224" text-anchor="middle">længde over 6 m: tilvalg hos Falck</text></g><g class="tg-call"><line x1="140" y1="90" x2="90" y2="46"/><circle cx="140" cy="90" r="3"/><text class="tg-call__navn" x="5" y="24">Op til 3.500 kg</text><text class="tg-call__under" x="5" y="38">SOS Erhverv, Tryg Vejhjælp</text></g><g class="tg-call"><line x1="300" y1="110" x2="340" y2="46"/><circle cx="300" cy="110" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Op til 4.250 kg</text><text class="tg-call__under" x="395" y="38" text-anchor="end">Falck Vejhjælp Pro Elbil</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${SOSB}" rel="noopener">SOS Erhverv Basis</a>, <a href="${TRYGV}" rel="noopener">Tryg Vejhjælp</a> og <a href="${FALCKEL}" rel="noopener">Falck Vejhjælp Pro Elbil</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder for vægt med bagage og Falcks beskrivelse af elbilabonnementet: <a href="${SOSB}" rel="noopener">SOS Erhverv Basis</a> og <a href="${FALCKEL}" rel="noopener">Falck Vejhjælp Pro Elbil</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Gods og trailer",
        tekst: [
          `For en håndværker er værktøjet og materialerne i bilen ofte lige så vigtige som bilen. Tryg Vejhjælp kører gods som varer, værktøj og byggematerialer videre til godsets bestemmelsessted i Danmark. Har godset flere bestemmelsessteder, dækker Tryg kun transport til ét af dem.`,
          `Af- og pålæsning skal du selv klare eller betale for. Kræver godset et særligt certifikat, eller er der tale om dyr, aftaler Tryg transporten med dig, og de udgifter, I aftaler, er dækket.`,
          `Tryg hjælper også én lovligt efterspændt enhed, fx en trailer, uanset om du ejer, lejer eller har lånt den. If dækker en efterspændt trailer ved nedbrud, uanset om den er din egen.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Tryg Vejhjælp kører gods i varebilen og på traileren videre til én adresse i Danmark. Af- og pålæsning er ikke med.`,
          `<strong>Falck.</strong> Omlæsning af gods er et tilvalg.`,
          `<strong>If.</strong> En efterspændt trailer er dækket ved nedbrud, også når den ikke er virksomhedens egen.`,
          `<strong>Falck påhæng.</strong> Falck sælger et fast årligt abonnement pr. køretøj eller en forbrugsaftale med en fast landsdækkende timepris.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Varebil med gods i varerummet og en trailer med gods bagved. Markeret: gods køres videre, efterspændt trailer og omlæsning af gods."><g transform="translate(150,170)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kuffert" x="170" y="125" width="44" height="35"/><rect class="tg-kasse" x="20" y="110" width="100" height="50"/><rect class="tg-kuffert" x="35" y="90" width="50" height="20"/><circle class="tg-profil" cx="70" cy="173" r="14"/><line class="tg-pil" x1="120" y1="150" x2="150" y2="150"/><line class="tg-gulvlinje" x1="5" y1="187" x2="395" y2="187"/><g class="tg-call"><line x1="192" y1="140" x2="250" y2="46"/><circle cx="192" cy="140" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Gods til én adresse</text><text class="tg-call__under" x="395" y="38" text-anchor="end">Tryg Vejhjælp, i Danmark</text></g><g class="tg-call"><line x1="104" y1="135" x2="104" y2="46"/><circle cx="104" cy="135" r="3"/><text class="tg-call__navn" x="5" y="24">Efterspændt trailer</text><text class="tg-call__under" x="5" y="38">If: dækket ved nedbrud</text></g><g class="tg-call"><line x1="42" y1="100" x2="30" y2="198"/><circle cx="42" cy="100" r="3"/><text class="tg-call__navn" x="5" y="212">Omlæsning af gods</text><text class="tg-call__under" x="5" y="226">tilvalg hos Falck</text></g></svg>`,
          tekst: `Skematisk. Hvad vejhjælpen gør med gods og trailer hos Tryg, If og Falck.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.1</a>, <a href="${FALCK}" rel="noopener">Falck Vejhjælp Pro</a>, <a href="${IFV}" rel="noopener">If</a> og <a href="${FALCKPH}" rel="noopener">Falck: Påhængsvogn og trailer</a>, set den 4. oktober 2026. Trygs regler om certifikat, dyr og lånte trailere er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Binding og abonnementstyper",
        tekst: [
          `Et abonnement hos Falck træder i kraft 3 dage efter bestillingen, medmindre I aftaler en anden dato. Du har 14 dages fortrydelsesret, og de første 12 måneder er abonnementet bindende.`,
          `Efter 11 måneder kan du opsige abonnementet hos Falck med en måneds varsel til udgangen af en måned. SOS Dansk Autohjælp oplyser også prisen for en bindingsperiode på 12 måneder.`,
          `SOS sælger to typer abonnement til varevogne. Med det faste betaler du et beløb pr. bil og ingen ekstra pr. assistance. Med det fleksible betaler du et lavt gebyr og en fast pris, hver gang I får hjælp.`
        ],
        kort: [
          ["Fast", "Du betaler et fast beløb om måneden pr. køretøj, og assistancerne koster ikke ekstra."],
          ["Fleksibelt", "Du betaler et lavt abonnementsgebyr og en fast aftalt pris pr. assistance. Ændringer i vognparken skal ikke meldes."]
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Bestilling", "Du bestiller abonnementet hos Falck."],
            ["3 dage efter", "Abonnementet træder i kraft, medmindre I har aftalt en anden dato."],
            ["De første 14 dage", "Du kan fortryde købet."],
            ["Efter 11 måneder", "Du kan opsige med en måneds varsel til udgangen af en måned, så abonnementet slutter efter de 12 bindende måneder."]
          ],
          note: `Tidslinjen viser vilkårene for Falck Vejhjælp Pro. Kilde: <a href="${FALCK}" rel="noopener">Falck: Vejhjælp til firmabil, spørgsmål og svar</a>, set den 7. oktober 2026.`
        },
        efter: [
          `SOS Dansk Autohjælp har begge typer og laver særskilte tilbud ved mere end 3 varevogne. Kilde: <a href="${SOSV}" rel="noopener">SOS Dansk Autohjælp: Vejhjælp til varevogne</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Det dækker Tryg Vejhjælp ikke",
        tekst: [
          `Vejhjælpen er til uventede stop. Derfor er kørsel, man kan planlægge, ikke med, fx til syn eller mellem to værksteder. Undtagelserne står i Trygs betingelser og ligner dem, andre selskaber har.`,
          `Har Tryg lavet en nødreparation, fx tætnet et punkteret dæk, skal anvisningerne fra Tryg Vejhjælp følges bagefter. Kommer bilen til at stå igen inden for 72 timer, fordi anvisningen ikke er fulgt, dækker Tryg ikke den nye assistance.`
        ],
        punkter: [
          `Behov, der var kendt, da forsikringen blev købt.`,
          `Ny assistance inden for 72 timer, når anvisningen fra sidste gang ikke er fulgt.`,
          `Ekstreme vejr- og vejforhold og områder, hvor redningsbilen ikke kan komme frem.`,
          `Ulovlige biler, fx med for lidt mønster på dækkene.`,
          `Kørsel til syn, til skrot og mellem værksteder.`,
          `Mere end én assistance pr. begivenhed.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.1</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Vejhjælp og kaskoens transport",
        tekst: [
          `Kaskoen betaler transport til værksted efter en dækket skade. GF betaler kun, når der ikke er et abonnement hos et redningskorps. Tryg betaler ikke transport, som er dækket af et abonnement eller en anden forsikring.`,
          `GF betaler den nødvendige transport til det nærmeste autoriserede værksted, når skaden er dækket og kræver transport. Er bilen stjålet og fundet igen, betaler GF transporten til et autoriseret værksted i nærheden af forsikringstagerens folkeregisteradresse.`,
          `Kaskoen betaler kun, når der er en skade, den dækker. Et nedbrud, en tom tank eller et fladt batteri er ikke en kaskoskade, og her er det vejhjælpen, der betaler. Hos Tryg dækker kaskoens transport heller ikke aflæsning af gods og værktøj.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. Skyldes stoppet en skade, kaskoen dækker, betaler kaskoen transport til nærmeste værksted, men kun hvis intet abonnement dækker. Er det et nedbrud eller en tom tank, betaler kun vejhjælpen."><defs><marker id="pil-vejhjaelp-til-varebil-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="40" y="6" width="320" height="46"/><text x="200" y="25" text-anchor="middle">Bilen kan ikke køre videre.</text><text class="tg-fremhaev" x="200" y="43" text-anchor="middle">Skyldes det en skade, kaskoen dækker?</text><line class="tg-pil" x1="140" y1="52" x2="100" y2="86" marker-end="url(#pil-vejhjaelp-til-varebil-1)"/><line class="tg-pil" x1="260" y1="52" x2="300" y2="86" marker-end="url(#pil-vejhjaelp-til-varebil-1)"/><text x="108" y="72" text-anchor="end">Ja</text><text x="292" y="72">Nej</text><rect class="tg-modul" x="5" y="90" width="180" height="62"/><text class="tg-modul__tekst" x="95" y="110" text-anchor="middle">KASKOEN BETALER</text><text class="tg-modul__tekst" x="95" y="126" text-anchor="middle">TRANSPORT TIL</text><text class="tg-modul__tekst" x="95" y="142" text-anchor="middle">NÆRMESTE VÆRKSTED</text><text x="95" y="174" text-anchor="middle">GF og Tryg: kun hvis</text><text x="95" y="190" text-anchor="middle">intet abonnement</text><text x="95" y="206" text-anchor="middle">dækker</text><rect class="tg-kasse" x="215" y="90" width="180" height="62"/><text x="305" y="110" text-anchor="middle">Fx nedbrud, tom</text><text x="305" y="126" text-anchor="middle">tank eller batteri</text><text class="tg-fremhaev" x="305" y="142" text-anchor="middle">Vejhjælpen betaler</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.3.4</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.5 og 5.1</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.3</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5 og 12</a>, set den 4. oktober 2026. Mere om kaskoens undtagelser står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ]
      },
      {
        overskrift: "Når bilen går i stå",
        tekst: [
          `Hjælpen kommer hurtigere, når redningskorpset ved, hvor bilen står, og hvad der er galt. Falck beder dig have registreringsnummeret eller kundenummeret klar, finde vejnavn og placering, fx med en kortapp, og forklare, hvad problemet er.`,
          `Bilen skal så vidt muligt stå uden for kørebanen og være afmærket med havariblink og advarselstrekant, mens føreren venter. Det står i Trygs betingelser, og reglerne for uheld står i <a href="/til-varebilen/forsikring/skadeanmeldelse/">skadeanmeldelse</a>.`,
          `Falcks vagtcentral har telefon 70 10 20 30, og Tryg Vejhjælp har 70 11 20 00. If og SOS Dansk Autohjælp har deres egne numre i abonnementet eller policen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Sæt bilen af vejen", "Bilen holdes ind, hvis det er muligt, og afmærkes med havariblink og advarselstrekant."],
            ["Ring til vejhjælpen", "Hav registreringsnummer eller kundenummer, stedet og fejlen klar."],
            ["Hjælp på stedet", "Redderen prøver at få bilen i gang, fx med starthjælp, hjulskift eller fritrækning."],
            ["Bugsering og videre rejse", "Kan bilen ikke repareres på stedet, bliver den kørt til et værksted, og føreren kommer videre."]
          ]
        },
        efter: [
          `Kilder: <a href="${FALCK}" rel="noopener">Falck: Vejhjælp til firmabil</a>, <a href="${TRYGV}" rel="noopener">Tryg: Tryg Vejhjælp</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 1 og 5.1</a> og <a href="${SOSB}" rel="noopener">SOS Erhverv Basis</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sygdom, nøgler og elbiler",
        tekst: [
          `Vejhjælpen hjælper også, når det er føreren og ikke bilen, der svigter. Bliver føreren akut syg, så han ikke kan køre forsvarligt, kører Viking Assistance for If bilen hjem og føreren og passagererne hjem eller på skadestuen. Hos Tryg kommer føreren og passagererne til den nærmeste læge, og bilen køres hjem eller til behandlingsstedet.`,
          `Er nøglen låst inde eller forsvundet, hjælper If og Tryg med at åbne bilen. Tryg betaler en låsesmed, hvis Tryg vurderer, at det er nødvendigt.`,
          `En elvarebil, der løber tør for strøm, får hjælp hos Tryg Vejhjælp, og Tryg kører den til en ladestander, hvis den skal transporteres. Falck har et særligt abonnement til elbiler med en garanti for at være fremme inden for 45 minutter. Mere om opladning står i <a href="/til-varebilen/el-abonnement/opladning-af-elvarebil-i-praksis/">opladning af elvarebil i praksis</a>.`
        ],
        efter: [
          `Kilder: <a href="${IFV}" rel="noopener">If: Vejhjælp til erhverv</a>, <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.1</a> og <a href="${FALCKEL}" rel="noopener">Falck Vejhjælp Pro Elbil</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "I udlandet",
        tekst: [
          `Kaskoen hos GF og Gjensidige har redningsforsikring i udlandet for biler op til 3,5 ton. Gjensidige undtager rejser med erhvervsmæssig godstransport. Hos Tryg hedder dækningen Tryg Vejhjælp Europa og kræver delkasko eller kasko. Grønt kort og uheld i udlandet står i <a href="/til-varebilen/forsikring/forsikring-i-udlandet/">forsikring i udlandet</a>.`,
          `GF's redningsforsikring dækker fx vejhjælp på skadestedet, bugsering, hjemtransport af bilen og en udlejningsbil. De fulde vilkår står i Det Røde Kort fra SOS International. Tryg skriver, at redningsforsikringen i udlandet kun gælder varebiler på højst 3.500 kg, og ikke når rejsen er godstransport.`,
          `Køber du vejhjælp som abonnement, er Europa med i SOS Erhverv Plus og et tilvalg til 123 kr. om året hos Falck. Ifs vejhjælp dækker i Danmark og 42 andre europæiske lande.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Selskab", "Redning i udlandet", "Vilkår"],
          raekker: [
            ["GF", "ja", "Med i kaskoen, biler op til 3,5 ton"],
            ["Gjensidige", "ja", "Med i kaskoen, biler op til 3,5 ton, ikke erhvervsmæssig godstransport"],
            ["Tryg", "Tryg Vejhjælp Europa", "Kræver delkasko eller kasko, højst 3.500 kg, ikke godstransport"],
            ["If Vejhjælp", "ja", "42 lande i Europa ud over Danmark"],
            ["SOS Erhverv Plus", "ja", "Med i abonnementet"],
            ["Falck Vejhjælp Pro", "tilvalg", "123 kr. om året"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.4</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026, og <a href="${IFV}" rel="noopener">If</a>, <a href="${SOSP}" rel="noopener">SOS Erhverv Plus</a> og <a href="${FALCK}" rel="noopener">Falck</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.4</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.5</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet eller redningskorpset vide",
    spoergsmaal_manchet: "Så passer abonnementet til bilerne.",
    spoergsmaal: [
      "Antal biler, totalvægt og længde.",
      "Om bilerne er el, diesel eller benzin.",
      "Om der køres i udlandet.",
      "Om der køres med trailer, og om den er virksomhedens egen.",
      "Om gods skal køres videre ved nedbrud.",
      "Om bilforsikringen allerede har vejhjælp.",
      "Om virksomheden vil betale fast pr. bil eller pr. assistance."
    ],
    faq: [
      ["Hvad koster vejhjælp til en varebil?", "SOS Dansk Autohjælp Erhverv Basis koster 1.080 kr. og Falck Vejhjælp Pro 1.175 kr. om året pr. bil med 12 måneders binding. Siderne oplyser ikke moms ved hovedprisen."],
      ["Er vejhjælp med i bilforsikringen?", "Hos GF er vejhjælp i Danmark en del af kaskoen. Hos Tryg er Tryg Vejhjælp med fra pakken Udvidet. Hos Alm. Brand følger den med Superkasko. Hos Codan, If og Gjensidige er den et tilvalg."],
      ["Dækker vejhjælp varebiler over 3.500 kg?", "SOS Erhverv og Tryg Vejhjælp går op til 3.500 kg. Falck Vejhjælp Pro Elbil går op til 4.250 kg, og Falck har et eget produkt til køretøjer over 3,5 ton."],
      ["Kan vejhjælpen køre værktøjet videre?", "Tryg Vejhjælp kører gods videre til én adresse i Danmark. Falck har omlæsning af gods som tilvalg til 123 kr. om året."],
      ["Dækker vejhjælpen i udlandet?", "SOS Erhverv Plus, Alm. Brand, Gjensidige og If dækker i Europa. Hos Falck er Europa et tilvalg til 123 kr. om året. Tryg Vejhjælp dækker kun Danmark og 25 km over grænsen."],
      ["Hvor længe er man bundet af et abonnement?", "Hos Falck er de første 12 måneder bindende, og efter 11 måneder kan du opsige med en måneds varsel til udgangen af en måned. SOS oplyser prisen for en bindingsperiode på 12 måneder."],
      ["Betaler kaskoen for bugsering?", "Kaskoen betaler transport til værksted efter en skade, den dækker. GF betaler kun, når der ikke er et abonnement hos et redningskorps, og Tryg betaler ikke transport, som et abonnement dækker."],
      ["Kan man få vejhjælp uden abonnement?", "Ja. Falck hjælper også virksomheder uden abonnement, og så betaler virksomheden for hjælpen fra gang til gang."]
    ],
    kilder: [
      { navn: "Falck: Vejhjælp til firmabil (Vejhjælp Pro)", url: FALCK, dato: "2026-10-07" },
      { navn: "Falck: Vejhjælp Pro Elbil", url: FALCKEL, dato: "2026-10-07" },
      { navn: "Falck: Vejhjælp til påhængsvogn og trailer", url: FALCKPH, dato: "2026-10-04" },
      { navn: "SOS Dansk Autohjælp: Erhverv Basis", url: SOSB, dato: "2026-10-07" },
      { navn: "SOS Dansk Autohjælp: Erhverv Plus", url: SOSP, dato: "2026-10-07" },
      { navn: "SOS Dansk Autohjælp: Vejhjælp til varevogne", url: SOSV, dato: "2026-10-07" },
      { navn: "Tryg: Tryg Vejhjælp til erhverv", url: TRYGV, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "If: Vejhjælp til firmabil, varebil og taxa", url: IFV, dato: "2026-10-07" },
      { navn: "Codan: Vejhjælp Erhverv til firmabilforsikring", url: CODANV, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Alm. Brand: Vejhjælp Erhverv", url: ABV, dato: "2026-10-04" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: AB, dato: "2026-10-04" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring til firmabiler", url: GFS, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["SOS Dansk Autohjælp: Erhverv Basis koster 90 kr. pr. måned ved årlig betaling (1.080 kr. første år) og Erhverv Plus 107 kr. pr. måned ved årlig betaling (1.284 kr.), pr. bil ved op til 3 biler, med 12 måneders bindingsperiode; Plus dækker også Europa.", SOSP],
    ["SOS Dansk Autohjælp (Erhverv Basis og Plus): vejhjælp på stedet omfatter bl.a. starthjælp, hjulskifte, døroplukning, reparation af udstødning, udskiftning af reservedele, punktering og fritrækning; ved fri vidererejse transporteres føreren og op til to passagerer til et fælles bestemmelsessted i Danmark med en transportform, SOS vælger; ved mistet nøgle bugseres bilen til nærmeste værksted eller nærmeste autoriserede værksted; køretøjet må højst veje 3.500 kg inkl. bagage.", SOSB],
    ["Falck: Vejhjælp Pro kan betales halv- eller helårligt; abonnementet træder i kraft 3 dage efter bestillingen, medmindre andet er aftalt; 14 dages fortrydelsesret; de første 12 måneder er bindende; efter 11 måneder kan det opsiges med én måneds varsel til udgangen af en måned; vejhjælp uden abonnement betales fra gang til gang.", FALCK],
    ["Falck Vejhjælp Pro: tilvalgene Minutgaranti, Vejhjælp i Europa og Omlæsning af gods koster hver 123 kr./år; Bil over 6 meter og førstehjælpskasse er også tilvalg.", FALCK],
    ["Falck Vejhjælp Pro: Falcks bonuspartnere giver 10 % rabat på værkstedsregningen og gratis lånebil ved reparationer over 4 timer; Falck kører fører og passagerer til et valgfrit bestemmelsessted i Danmark, hvis bilen ikke kan repareres på stedet; vagtcentralen har telefon 70 10 20 30, og man skal have registrerings- eller kundenummer, placering og problemet klar.", FALCK],
    ["Falck Vejhjælp Pro Elbil: Minutgaranti er inkluderet med garanti for at være fremme inden for 45 minutter i Danmark; dækker køretøjer op til 4250 kg og dermed personbiler, mindre varebiler og minibusser.", FALCKEL],
    ["If Vejhjælp: dækker bugsering til valgfrit værksted eller hjem, hvis skaden ikke dækkes af kaskoforsikringen; kan transport ikke arrangeres, og kan bilen ikke repareres samme dag, tilbydes fører og passagerer hotelovernatning inkl. morgenmad; ved akut sygdom transporterer Viking Assistance bilen hjem og fører og passagerer hjem eller på skadestuen; hjælp ved indelåst eller forsvundet nøgle; bjærgning og fritrækning i Danmark og 42 andre europæiske lande.", IFV],
    ["Tryg: Tryg Vejhjælp har telefon 70 11 20 00; vejhjælp til varebil gives, hvis varebilen vejer under 3.500 kg og ikke bruges til godstransport; man får lånebil, så længe varebilen er på værksted.", TRYGV],
    ["Tryg (afsnit 5.1): Tryg Vejhjælp dækker i Danmark, på rute E65 til Ystad og indtil 25 km ind i Sverige og Tyskland, ikke på Færøerne og Grønland; assistance omfatter fx starthjælp, reparationer, hjulskift, fritrækning, oplukning af bildør, udbringning af brændstof og hjælp til elvarebil uden strøm; udleverede reservedele, brændstof og strøm betales ved levering; låsesmed dækkes efter Trygs skøn; ved punktering uden reservehjul kan Tryg nødreparere, og anvisningerne skal følges.", TRYG],
    ["Tryg (afsnit 5.1): én transport pr. driftstop til et sted i Danmark efter eget valg, fx adresse, værksted eller ladestation; gods transporteres til ét bestemmelsessted i Danmark; af- og pålæsning betales selv; gods med certifikatkrav eller dyr aftales særskilt, og aftalte udgifter dækkes; bro og færge, fx Storebælt, betales til normalpris uden rabatter før transporten; er persontransport ikke mulig, tilbydes én overnatning på standardhotel med morgenmad; ved sygdom bringes fører og passagerer til nærmeste læge; én lovligt efterspændt enhed dækkes, uanset om den ejes, lejes eller er lånt.", TRYG],
    ["Tryg (afsnit 4.5): kaskoens transportdækning omfatter ikke aflæsning af gods, varer og værktøj; Tryg Vejhjælp Europa kræver delkasko eller kasko, gælder kun varebiler på højst 3.500 kg og ikke, når rejsens formål er godstransport.", TRYG],
    ["GF (punkt 4.3.4): GF betaler nødvendig transport til nærmeste autoriserede værksted ved erstatningsberettiget skade, når der ikke er abonnement hos redningskorps; efter tyveri eller røveri betales transport til autoriseret værksted nær forsikringstagers folkeregisteradresse.", GF],
    ["GF (punkt 4.4): redningsforsikringen i udlandet omfatter fx vejhjælp på skadestedet, bugsering, hjemtransport af køretøj og udlejningsbil; de fulde vilkår står i Det Røde Kort fra SOS.", GF]
  ]
};
