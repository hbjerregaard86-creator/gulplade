// Underside /til-varebilen/forsikring/ansvarsforsikring-varebil/ (07-10-2026)
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var BEK = `https://www.retsinformation.dk/eli/lta/2023/1627`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGV = `https://tryg.dk/erhverv/varebilforsikring`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var IFG = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/alt-du-skal-vide-om-bilforsikring`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var DFIMG = `https://www.dfim.dk/dagsgebyr/om-dagsgebyr/`;
var DFIMS = `https://dfim.dk/om-dfim/statistik/`;
var DFIMU = `https://dfim.dk/skade/uheld-i-danmark/`;
var DFIMK = `https://dfim.dk/det-gronne-kort`;

module.exports = {
  id: "forsikring/ansvarsforsikring-varebil",
  side: {
    slug: "ansvarsforsikring-varebil",
    navn: "Ansvarsforsikring til varebil",
    titel: "Ansvarsforsikring til varebil efter færdselsloven",
    kort: `Den lovpligtige forsikring efter færdselsloven: hvad den dækker, hvem der skal tegne den, summerne for 2026, og hvad der sker uden.`,
    beskrivelse: `Ansvarsforsikring til varebil: færdselslovens krav, summerne for 2026, hvad den ikke dækker, og dagsgebyret på 250 kr. pr. døgn uden forsikring.`,
    manchet: `Alle indregistrerede varebiler skal have en ansvarsforsikring. Den dækker de skader, bilen gør på andre mennesker og deres ting, men ikke skader på bilen selv, føreren eller godset. Reglerne står i færdselslovens kapitel om erstatning og forsikring og i bekendtgørelsen om ansvarsforsikring.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Lovpligtig", "Ja", "efter færdselslovens § 105"],
        ["Personskade, 2026", "152 mio. kr.", "pr. begivenhed"],
        ["Tingskade, 2026", "30 mio. kr.", "pr. begivenhed"],
        ["Dagsgebyr uden forsikring", "250 kr.", "pr. døgn, højst 60.000 kr. pr. sag"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Lovkravet",
        tekst: [
          `Krav om erstatning for skader forvoldt af motordrevne køretøjer skal være dækket af en forsikring i et selskab med Finanstilsynets tilladelse, jf. færdselslovens § 105, stk. 1. Et selskab med tilladelse i et andet EU-land kan også tegne forsikringen, når det er anmeldt i Danmark.`,
          `Alle selskaber, der tegner ansvarsforsikring på køretøjer i Danmark, skal være medlem af Dansk Forening for International Motorkøretøjsforsikring (DFIM). Foreningen opkræver gebyret for uforsikrede biler og betaler skadelidte, når skadevolderen er ukendt eller uforsikret.`,
          `Kravet gælder, når bilen bruges som transportmiddel, også hvis skaden sker uden for de områder, færdselsloven ellers gælder for. Køretøjer, der tilhører staten eller en kommune, er undtaget efter § 109. Er sådan et køretøj ikke forsikret, hæfter staten eller kommunen selv på samme måde som et forsikringsselskab.`,
          `For virksomheden betyder kravet, at varebilen ikke kan registreres uden forsikringen. Ved registreringen skal forsikringen dokumenteres med et forsikringsbevis fra selskabet, jf. § 5 i bekendtgørelse nr. 1627.`
        ]
      },
      {
        overskrift: "Hvem har pligten",
        tekst: [
          `For køretøjer, der skal registreres, påhviler forsikringspligten ejeren eller den bruger, der har varig rådighed over køretøjet, jf. § 106, stk. 1. På en leaset varebil er leasingtageren typisk registreret som bruger.`,
          `Pligten følger altså den, der har bilen i hverdagen, og ikke nødvendigvis den, der ejer den. DFIM skriver, at et dagsgebyr følger den person eller virksomhed, der er registreret som primær bruger, og ikke selve køretøjet.`,
          `Erstatningsansvaret ligger efter § 104 hos den ejer eller bruger, der benytter køretøjet eller lader det benytte. Føreren er desuden erstatningsansvarlig efter lovgivningens almindelige regler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 216" role="img" aria-label="Leasingselskabet ejer bilen, og leasingtageren er registreret bruger med forsikringspligten. På en leaset bil er det typisk leasingtageren."><rect class="tg-kasse" x="0" y="20" width="170" height="56"/><text class="tg-fremhaev" x="12" y="44">Leasingselskab</text><text x="12" y="62">ejer bilen</text><rect class="tg-modul" x="230" y="20" width="170" height="56"/><text class="tg-modul__tekst" x="242" y="44">LEASINGTAGER</text><text x="242" y="62">registreret bruger</text><line class="tg-pil" x1="170" y1="48" x2="230" y2="48"/><text x="200" y="40" text-anchor="middle">leaser</text><line class="tg-pil" x1="315" y1="76" x2="315" y2="110"/><rect class="tg-profil" x="230" y="110" width="170" height="60"/><text class="tg-fremhaev" x="242" y="136">Forsikringspligt</text><text x="242" y="156">§ 106, stk. 1</text><text class="tg-lille" x="0" y="204">PÅ EN LEASET BIL TYPISK LEASINGTAGER</text></svg>`,
          tekst: `Skematisk. Forsikringspligten ligger hos ejeren eller den bruger, der har varig rådighed over bilen. Kilde: <a href="${FL}" rel="noopener">Færdselsloven, § 106, stk. 1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det dækker ansvaret",
        tekst: [
          `Den ansvarlige for et motordrevet køretøj skal erstatte skader, som køretøjet volder ved færdselsuheld, eller ved eksplosion eller brand fra brændstofanlægget, jf. § 101. Volder bilen skade på en anden måde, gælder lovgivningens almindelige regler, jf. § 102.`,
          `Erstatningen for personskade kan nedsættes eller bortfalde, hvis skadelidte selv har medvirket forsætligt eller groft uagtsomt. Ved tingskade er det nok, at skadelidte har medvirket uagtsomt, jf. § 101, stk. 2 og 3.`,
          `Sammenstød mellem to motorkøretøjer har sine egne regler i § 103. Personskade erstattes efter § 101, mens det ved tingskade afgøres efter omstændighederne, om og med hvor stort et beløb der skal betales erstatning.`,
          `Forsikringsselskabet hæfter direkte over for den skadelidte, jf. § 108. Gjensidige nævner passagerer, cyklister og fodgængere som eksempler på personer, ansvaret dækker. If giver et eksempel med en påkørt cyklist, hvor forsikringen erstatter både cyklen og tøjet. GF's ansvarsforsikring dækker også brug af en registreret trækkrog.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil, der har kørt ind i en personbil. Ansvaret dækker skaden på personbilen, varebilen selv hører under kaskoen, og føreren er kun dækket med en førerdækning."><g transform="translate(20,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><path class="tg-modul" d="M288,203 L288,178 L304,176 L318,158 L362,158 L378,176 L392,180 L392,203 Z"/><circle class="tg-profil" cx="310" cy="206" r="11"/><circle class="tg-profil" cx="370" cy="206" r="11"/><line class="tg-skinne-tynd" x1="268" y1="170" x2="282" y2="164"/><line class="tg-skinne-tynd" x1="268" y1="182" x2="284" y2="182"/><line class="tg-skinne-tynd" x1="268" y1="194" x2="282" y2="200"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="340" y1="168" x2="340" y2="62"/><circle cx="340" cy="168" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Modpartens bil</text><text class="tg-call__under" x="395" y="54" text-anchor="end">dækket af ansvaret</text></g><g class="tg-call"><line x1="70" y1="120" x2="70" y2="62"/><circle cx="70" cy="120" r="3"/><text class="tg-call__navn" x="10" y="40">Varebilen selv</text><text class="tg-call__under" x="10" y="54">kasko, ikke ansvaret</text></g><g class="tg-call"><line x1="214" y1="108" x2="190" y2="62"/><circle cx="214" cy="108" r="3"/><text class="tg-call__navn" x="148" y="40">Føreren</text><text class="tg-call__under" x="148" y="54">kun med førerdækning</text></g><text class="tg-lille" x="10" y="242">ANSVARET DÆKKER SKADER PÅ ANDRE</text></svg>`,
          tekst: `Skematisk. Ansvaret dækker skader på andre mennesker og deres ting. Kilder: <a href="${FL}" rel="noopener">Færdselsloven, §§ 101-104</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${GF}" rel="noopener">GF, punkt 3.1-3.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Summerne i loven",
        tekst: [
          `Loven fastsætter, hvor meget forsikringen mindst skal dække ved én begivenhed. Grundbeløbene er 50 mio. kr. for personskade og tab af forsørger og 10 mio. kr. for tingskade, jf. § 105, stk. 3. Loftet gælder den samlede skade ved én begivenhed, også når flere personer kommer til skade.`,
          `Beløbene reguleres hvert år den 1. januar og afrundes til nærmeste hele million. Transportministeren bekendtgør hvert år de summer, der gælder for skader i det kommende år.`,
          `Tryg skriver i sine betingelser, at selskabet betaler de omkostninger, du med Trygs accept får ved at afgøre et erstatningsspørgsmål, også når dækningssummerne bliver overskredet. Tryg betaler også renter af idømte erstatninger, der hører under forsikringen.`
        ],
        tabel: {
          kolonner: ["Skade", "Lovens grundbeløb pr. begivenhed", "Regulering"],
          raekker: [
            ["Personskade og tab af forsørger", "50 mio. kr.", "Hvert år den 1. januar"],
            ["Tingskade", "10 mio. kr.", "Hvert år den 1. januar"]
          ],
          note: `Kilde: <a href="${FL}" rel="noopener">Færdselsloven, LBK nr. 118 af 12. januar 2026, § 105, stk. 3-4</a>, set den 4. oktober 2026. Beløbene reguleres hvert år, og transportministeren bekendtgør de gældende summer.`
        },
        efter: [
          `Kilde til Trygs regel: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dækningssummerne år for år",
        tekst: [
          `Med reguleringen er summen for personskade vokset fra 136 mio. kr. i 2023 til 152 mio. kr. i 2026. For tingskade er den steget fra 27 til 30 mio. kr. i samme periode.`,
          `Beløbet gælder for skader, der sker i det pågældende år. Et uheld i december 2025 hører altså under summerne for 2025, selvom sagen først bliver afgjort året efter.`
        ],
        figur: {
          type: "soejler",
          enhed: "mio. kr.",
          data: [
            ["2023", 136],
            ["2024", 141],
            ["2025", 146],
            ["2026", 152]
          ],
          note: `Personskade og tab af forsørger pr. begivenhed. Kilder: Færdselsstyrelsens bekendtgørelser <a href="https://www.retsinformation.dk/eli/lta/2022/1456" rel="noopener">nr. 1456/2022</a>, <a href="https://www.retsinformation.dk/eli/lta/2023/1328" rel="noopener">nr. 1328/2023</a>, <a href="https://www.retsinformation.dk/eli/lta/2024/1350" rel="noopener">nr. 1350/2024</a> og <a href="https://www.retsinformation.dk/eli/lta/2025/1287" rel="noopener">nr. 1287/2025</a>, set den 4. oktober 2026.`
        },
        tabel: {
          kolonner: ["År", "Personskade", "Tingskade"],
          raekker: [
            ["2023", "136 mio. kr.", "27 mio. kr."],
            ["2024", "141 mio. kr.", "28 mio. kr."],
            ["2025", "146 mio. kr.", "29 mio. kr."],
            ["2026", "152 mio. kr.", "30 mio. kr."]
          ],
          note: "Samme kilder som figuren."
        }
      },
      {
        overskrift: "Det dækker ansvaret ikke",
        tekst: [
          `Ansvaret dækker skader på andre. Det, der tilhører virksomheden selv, ligger uden for, og det samme gælder føreren og godset i bilen. GF og Tryg bruger næsten de samme undtagelser.`,
          `Tryg undtager også ting, der tilhører personer, som helt eller delvist ejer eller deltager i virksomheden, og ting, der tilhører deres ægtefælle eller samlever. Hos Tryg gælder undtagelsen også ting, som virksomheden leaser.`,
          `Skader, mens bilen er udlejet, er undtaget hos GF. Hos Tryg gælder undtagelsen, medmindre det godtgøres, at skaden ikke skyldes, at bilen var udlejet i strid med Færdselsstyrelsens regler. Undtagelserne i GF's erhvervsbilbetingelser:`
        ],
        punkter: [
          `<strong>Føreren og førerens ting.</strong> Føreren er kun dækket med en førerpladsdækning.`,
          `<strong>Egne ting.</strong> Ting, der tilhører den faste bruger, forsikringstageren eller virksomheder, de ejer helt eller delvist.`,
          `<strong>Anhængeren.</strong> Skader på tilkoblet køretøj og påhængsvogn er ikke dækket.`,
          `<strong>Godset.</strong> Transporteret gods og varer er ikke dækket, bortset fra personlig rejsebagage.`,
          `<strong>Udlejning, forsæt og grov hensynsløs kørsel.</strong> Skader i disse situationer er undtaget.`
        ],
        punkt_ikon: "nej",
        figur: {
          type: "daekning",
          kolonner: ["Skade", "GF", "Tryg"],
          raekker: [
            ["Føreren selv", "nej", "nej"],
            ["Ting, der tilhører forsikringstageren eller den faste bruger", "nej", "nej"],
            ["Tilkoblet trailer eller påhængsvogn", "nej", "nej"],
            ["Gods og varer i bilen", "Kun personlig rejsebagage", "Kun ansvar efter færdselsloven"],
            ["Skader, mens bilen er udlejet", "nej", "Undtaget ved udlejning i strid med reglerne"],
            ["Løft med påmonteret kran", "ikke nævnt", "nej"]
          ],
          note: `Nej betyder, at betingelserne undtager skaden. Ikke nævnt betyder, at GF's betingelser ikke nævner situationen. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 3.2</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ansvar alene eller med kasko",
        tekst: [
          `Ansvaret er det mindste, en indregistreret varebil kan forsikres med. If sælger varebilforsikringen i tre niveauer, Ansvar, Kasko og Super. Hos If er krisehjælp til føreren med allerede i Ansvar.`,
          `Hos Tryg har alle tre pakker, Basis, Udvidet og Super, både ansvar og kasko. Med ansvar alene står virksomheden selv med skaderne på sin egen bil, også ved brand, tyveri og hærværk.`
        ],
        tabel: {
          kolonner: ["Skade", "Kun ansvar", "Ansvar og kasko"],
          raekker: [
            ["Skade på andres bil, person og ting", "Ja", "Ja"],
            ["Skade på egen bil ved uheld", "Nej", "Ja"],
            ["Brand, indbrud og tyveri", "Nej", "Ja"],
            ["Glasskade og hærværk", "Nej", "Ja"]
          ],
          note: `Kilde: <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "daekning",
          kolonner: ["Skade", "Kun ansvar", "Ansvar og kasko"],
          raekker: [
            ["Skade på andres bil, person og ting", "ja", "ja"],
            ["Skade på egen bil ved uheld", "nej", "ja"],
            ["Brand, indbrud og tyveri", "nej", "ja"],
            ["Glasskade og hærværk", "nej", "ja"]
          ],
          note: `Kilde: <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, set den 4. oktober 2026.`
        },
        efter: [
          `En leaset varebil skal også have kasko. Se <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a> og <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Trækkrog og trailer",
        tekst: [
          `Har bilen en tilkoblingsanordning, skal forsikringen også dække kørsel med det tilkoblede køretøj, jf. § 5, stk. 2, i bekendtgørelse nr. 1627. Tryg skriver, at ansvaret dækker, når et påhængskøretøj er spændt efter, hvis varebilen er indregistreret med tilkobling.`,
          `Ansvaret dækker de skader, vogntoget gør på andre. Selve traileren og godset på den er ikke dækket, hverken hos GF eller Tryg. Tryg sælger en særskilt hængerforsikring med både ansvar og kasko og skriver, at den også dækker i udlandet, hvor anhængeren ikke er omfattet af forvognens ansvarsforsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Varebil med trailer. Ansvar dækker kørsel med trailer på registreret krog, men ikke skader på traileren eller godset."><g transform="translate(150,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-profil" x="20" y="110" width="100" height="60"/><line class="tg-gulvlinje" x1="120" y1="160" x2="150" y2="166"/><circle class="tg-profil" cx="70" cy="183" r="14"/><rect class="tg-kuffert" x="220" y="150" width="40" height="28"/><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><g class="tg-call"><line x1="148" y1="165" x2="165" y2="60"/><circle cx="148" cy="165" r="3"/><text class="tg-call__navn" x="165" y="40">Kørsel med trailer</text><text class="tg-call__under" x="165" y="54">ansvar dækker, krog registreret</text></g><g class="tg-call"><line x1="70" y1="110" x2="70" y2="62"/><circle cx="70" cy="110" r="3"/><text class="tg-call__navn" x="5" y="40">Selve traileren</text><text class="tg-call__under" x="5" y="54">ikke ansvar, egen kasko</text></g><g class="tg-call"><line x1="240" y1="150" x2="240" y2="206"/><circle cx="240" cy="150" r="3"/><text class="tg-call__navn" x="246" y="220">Godset i bilen</text><text class="tg-call__under" x="246" y="234">ikke ansvar</text></g></svg>`,
          tekst: `Skematisk. Ansvaret dækker kørsel med tilkoblet trailer, ikke skader på traileren eller godset. Kilder: <a href="${GF}" rel="noopener">GF, punkt 3.1-3.2</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.1</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, § 5, stk. 2</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde til hængerforsikringen: <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026. Mere om kørsel med trailer i <a href="/haandbogen/anhaenger-bag-varebilen/">anhænger bag varebilen</a>.`
        ]
      },
      {
        overskrift: "Kran og arbejdsredskab",
        tekst: [
          `Loven kræver forsikring for de skader, bilen volder, når den bruges i overensstemmelse med sin funktion som transportmiddel. En varebil med kran eller graveudstyr bliver også brugt som maskine.`,
          `Tryg undtager skader, der skyldes, at varebilen har været brugt som arbejdsredskab, fx til løft med en påmonteret kran eller gravearbejde med et påmonteret graveredskab. Skader fra selve løftet hører derfor ikke under bilens ansvarsforsikring hos Tryg.`,
          `Tryg undtager også skader, der er omfattet af lov om fragtaftaler ved international vejtransport. Færdselslovens erstatningsregler gælder heller ikke for en fragtførers ansvar efter den lov, jf. § 116.`,
          `Gods, der køres for andre mod betaling, kræver en særskilt dækning. Gjensidige skriver, at bilen skal have tilvalget fragtføreransvar, hvis den bruges til fragtopgaver.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Varebil med en kran monteret bag førerhuset. Løft med kranen er undtaget fra Trygs ansvarsforsikring, mens kørsel med bilen er dækket."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="88" y="56" width="14" height="28"/><path class="tg-modul" d="M92,58 L214,30 L217,38 L98,68 Z"/><line class="tg-gulvlinje" x1="212" y1="36" x2="212" y2="62"/><rect class="tg-kuffert" x="204" y="62" width="16" height="10"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="160" y1="44" x2="215" y2="44"/><circle cx="160" cy="44" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Løft med kranen</text><text class="tg-call__under" x="395" y="54" text-anchor="end">Tryg: ikke dækket af ansvaret</text></g><g class="tg-call"><line x1="200" y1="140" x2="200" y2="228"/><circle cx="200" cy="140" r="3"/><text class="tg-call__navn" x="206" y="240">Kørsel med bilen</text><text class="tg-call__under" x="206" y="254">dækket af ansvaret</text></g></svg>`,
          tekst: `Skematisk. Trygs undtagelse for varebiler, der bruges som arbejdsredskab. Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.1</a> og <a href="${FL}" rel="noopener">færdselslovens § 105, stk. 1</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${FL}" rel="noopener">færdselslovens § 116</a>, set den 7. oktober 2026. Læs mere i <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`
        ]
      },
      {
        overskrift: "Føreren",
        tekst: [
          `Ansvarsforsikringen dækker ikke føreren selv. Gjensidige skriver, at føreren først er forsikret ved tilkøb af førerpladsdækning. Dækningen giver erstatning ved soloulykker og under ind- og udstigning, og den kan vælges til både ansvar og kasko.`,
          `If sælger førerpladsdækning som tilvalg til alle tre niveauer, også til Ansvar. Hos Tryg er førerdækning med i alle tre varebilspakker, og den dækker dig og dine ansatte som fører.`,
          `GF's førerplads dækker personskade på føreren ved kørselsuheld, når skaden ikke skyldes en ansvarlig skadevolder, og ved ind- og udstigning. Erstatningen følger erstatningsansvarsloven, og ydelser fra en arbejdsskadeforsikring trækkes fra.`,
          `Tryg trækker også ydelser fra en arbejdsskadeforsikring fra. Giver førerdækningen mere end arbejdsskadeforsikringen, betaler Tryg forskellen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Dækning", "Føreren dækket"],
          raekker: [
            ["Ansvarsforsikringen alene", "nej"],
            ["Gjensidige, førerpladsdækning", "tilvalg"],
            ["GF, førerplads", "tilvalg"],
            ["If, førerpladsdækning", "tilvalg"],
            ["Tryg, alle tre varebilspakker", "ja"]
          ],
          note: `Kilder: <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a> og <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a>, set den 4. oktober 2026, og <a href="${IF}" rel="noopener">If: Varebilforsikring</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Mere om dækningen i <a href="/til-varebilen/forsikring/foererulykke-og-foererplads/">førerulykke og førerplads</a>.`
        ]
      },
      {
        overskrift: "Selskabet betaler skadelidte direkte",
        tekst: [
          `Forsikringsselskabet hæfter umiddelbart over for den skadelidte, jf. § 108, stk. 1. Modparten retter sit krav mod selskabet og skal ikke vente på, at virksomheden betaler.`,
          `Selskabet kan ikke nægte at betale skadelidte med den begrundelse, at forsikringstageren har brudt sine pligter over for selskabet. Det står i § 3, stk. 2, i bekendtgørelse nr. 1627.`,
          `Selskabet og forsikringstageren kan aftale, at forsikringstageren selv bærer en del af skaderne, fx som selvrisiko. De kan ikke aftale, at skadelidte skal bære noget af risikoen, jf. § 3, stk. 3.`,
          `Når skadelidte har fremsat sit krav, skal selskabet inden tre måneder enten give et begrundet erstatningstilbud eller et begrundet svar, jf. § 16 i bekendtgørelsen. Svaret skal være skriftligt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Virksomheden betaler præmie til forsikringsselskabet. Skadelidte sender sit krav til selskabet, som betaler erstatningen direkte og opkræver selvrisikoen hos virksomheden."><defs><marker id="pil-ansvar-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="50" width="100" height="60"/><text x="50" y="84" text-anchor="middle">Virksomheden</text><rect class="tg-modul" x="150" y="50" width="100" height="60"/><text class="tg-modul__tekst" x="200" y="76" text-anchor="middle">SELSKABET</text><text x="200" y="94" text-anchor="middle">hæfter</text><rect class="tg-kasse" x="300" y="50" width="100" height="60"/><text x="350" y="76" text-anchor="middle">Skadelidte</text><text x="350" y="94" text-anchor="middle">fx modparten</text><line class="tg-pil" x1="102" y1="66" x2="146" y2="66" marker-end="url(#pil-ansvar-1)"/><text x="125" y="44" text-anchor="middle">præmie</text><line class="tg-pil" x1="298" y1="66" x2="254" y2="66" marker-end="url(#pil-ansvar-1)"/><text x="275" y="44" text-anchor="middle">krav</text><line class="tg-pil" x1="252" y1="96" x2="296" y2="96" marker-end="url(#pil-ansvar-1)"/><text x="275" y="128" text-anchor="middle">erstatning</text><line class="tg-skinne-tynd" x1="148" y1="96" x2="104" y2="96" marker-end="url(#pil-ansvar-1)"/><text x="125" y="128" text-anchor="middle">selvrisiko</text><text class="tg-lille" x="0" y="164">SELSKABET HÆFTER DIREKTE, § 108, STK. 1</text><text class="tg-lille" x="0" y="184">REGRES KUN VED GROV HENSYNSLØSHED</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${FL}" rel="noopener">Færdselsloven, § 108</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, §§ 3 og 16</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Regres og spiritus",
        tekst: [
          `Regres betyder, at selskabet kræver en udbetalt erstatning betalt tilbage. En aftale om, at selskabet kan kræve pengene tilbage fra den ansvarlige, har kun virkning ved grov hensynsløshed, jf. § 108, stk. 2. Tryg skriver, at selskabet også kan kræve pengene tilbage, når skaden er forvoldt med forsæt.`,
          `Ud over lovens regres har selskaberne regres efter aftalen. Tryg nævner fx en overskredet årlig kørelængde, urigtige oplysninger, udlejning, kørsel med gods mod betaling og et GPS-krav, der ikke er overholdt.`,
          `Selskaberne bruger også ekstra selvrisiko. GF opkræver 19.762 kr. ekstra (basisår 2023), når føreren havde en promille over 0,50, havde indtaget euforiserende stoffer eller kørte uden gyldigt kørekort.`,
          `Det er en betingelse, at føreren kan pålægges et ansvar. GF opkræver ikke den ekstra selvrisiko, hvis forsikringstageren, de ansatte og husstanden ikke var fører af bilen og ikke vidste noget, og uvidenheden ikke skyldes grov uagtsomhed.`
        ],
        efter: [
          `Kilder: <a href="${FL}" rel="noopener">Færdselsloven, § 108, stk. 2</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.8</a> og <a href="${GF}" rel="noopener">GF, punkt 13.7.2</a>, set den 7. oktober 2026. Beløbene står i <a href="/til-varebilen/forsikring/selvrisiko/">selvrisiko</a>.`
        ]
      },
      {
        overskrift: "Selskaberne skal tegne ansvaret",
        tekst: [
          `Et selskab, der sælger ansvarsforsikring til motorkøretøjer, skal forsikre enhver forsikringspligtig, der vil acceptere selskabets betingelser. Gensidige selskaber har kun pligten inden for den kreds, de er bestemt til at virke i.`,
          `Selskabet kan sige nej, hvis forsikringstageren skylder forfalden præmie for en motorforsikring inden for de sidste to år. Skylder forsikringstageren dagsgebyr til DFIM, må forsikringen ikke tegnes. En forsikring, der alligevel bliver tegnet, ophører uden videre.`,
          `Forsikringen gælder fra det tidspunkt, selskabet modtager anmodningen, medmindre du ønsker en senere dato. Den skal for én præmie dække hele EU og EØS.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Anmodningen", "Du beder selskabet om en ansvarsforsikring og accepterer betingelserne."],
            ["Ikrafttræden", "Forsikringen gælder fra det øjeblik, selskabet modtager anmodningen, eller fra en senere dato, du har bedt om."],
            ["Forsikringsbeviset", "Selskabet udsteder et forsikringsbevis, som dokumenterer forsikringen."],
            ["Registreringen", "Bilen kan registreres, når forsikringen er dokumenteret."]
          ]
        },
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1627 af 12/12/2023, §§ 1, 2 og 7</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Forsikringsbevis, selskabsskift og salg",
        tekst: [
          `Skifter virksomheden selskab, skal det nye forsikringsbevis være modtaget af Køretøjsregisteret senest den dag, den gamle forsikring udløber, jf. § 5, stk. 3.`,
          `Når bilen sælges, dækker den hidtidige forsikring den nye ejer eller bruger i tre uger, medmindre bilen forinden er afmeldt, eller der er tegnet ny forsikring. Hos GF og Tryg hæfter den nye ejer for selvrisikoen ved en skade i den periode.`,
          `Ophører forsikringen, fordi præmien ikke er betalt, må selskabet tidligst give besked, så Køretøjsregisteret modtager den 5 uger efter præmiens forfald. Ved andre ophør må beskeden tidligst være modtaget 14 dage før ophøret. Bliver bilen ikke afmeldt eller forsikret igen, inddrages nummerpladerne.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Præmien forfalder", "Forsikringen bliver ikke betalt til tiden."],
            ["Tidligst 5 uger efter forfald", "Køretøjsregisteret modtager selskabets besked om, at forsikringen ophører."],
            ["Bilen bliver ikke forsikret igen", "Nummerpladerne bliver inddraget."]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1627 af 12/12/2023, §§ 5, 6, 8 og 9</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${BEK}" rel="noopener">BEK nr. 1627 af 12/12/2023, §§ 5, 6, 8 og 9</a>, set den 4. oktober 2026, og <a href="${GF}" rel="noopener">GF, punkt 2.1</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Uden ansvarsforsikring",
        tekst: [
          `Overtrædelse af § 105 straffes med bøde, jf. § 118. Derudover opkræver DFIM et gebyr for hvert påbegyndt døgn, et registreret køretøj er uden ansvarsforsikring, jf. § 106, stk. 4.`,
          `Gebyret er 250 kr. pr. døgn efter § 13 i bekendtgørelse nr. 1627, og DFIM oplyste det samme beløb i oktober 2026. Transportministeren fastsætter størrelsen, jf. § 106, stk. 7. DFIM skal sende en skriftlig meddelelse senest 14 dage, før gebyret pålægges.`,
          `Gebyret stopper, når bilen bliver forsikret, eller når nummerpladerne afleveres til Motorstyrelsen. DFIM oplyste i oktober 2026 et gebyrloft på 60.000 kr. pr. sag for både private og erhvervsdrivende i sager, der er startet efter den 1. januar 2023.`,
          `Skyldige gebyrer skal være betalt, før der kan tegnes ansvarsforsikring, jf. § 106, stk. 6. Præmier og gebyrer er tillagt udpantningsret, jf. § 107, stk. 3. DFIM kan eftergive gebyret for dagene mellem betalingen og tegningen af forsikringen, hvis forsikringen tegnes senest fem arbejdsdage efter betalingen.`,
          `DFIM betaler de skadelidte ved skader fra uforsikrede køretøjer og oplyser udgifter på over 70 mio. kr. om året. Den uforsikrede ender selv med regningen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Dagsgebyr fra DFIM", 250, "kr. pr. døgn"],
            ["Gebyrloft", "60.000", "kr. pr. sag"],
            ["DFIM's udgifter til skaderne", "over 70", "mio. kr. om året"]
          ],
          note: `DFIM oplyste tallene i oktober 2026. Gebyrloftet gælder både private og erhvervsdrivende. Kilder: <a href="${DFIMG}" rel="noopener">DFIM: Om dagsgebyr</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, § 13</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Uforsikrede køretøjer i Danmark",
        tekst: [
          `Den 1. juni 2026 var der 10.354 motorkøretøjer i Danmark uden lovpligtig ansvarsforsikring, og 894 af dem var varebiler. DFIM bruger tal fra Motorstyrelsen.`,
          `Dagsgebyret blev indført den 1. januar 2019. DFIM skriver, at der var omkring 50.000 køretøjer uden ansvarsforsikring i januar 2019, og at antallet siden er faldet markant.`
        ],
        figur: {
          type: "soejler",
          enhed: "køretøjer",
          data: [
            ["Personbil", 4090],
            ["Lille knallert", 3181],
            ["Stor knallert", 1043],
            ["Varebil", 894],
            ["Traktor", 555],
            ["Motorcykel", 523],
            ["Lastbil", 53]
          ],
          note: `Uforsikrede motorkøretøjer den 1. juni 2026. Desuden 6 store personbiler og 9 motorredskaber, i alt 10.354. Kilde: <a href="${DFIMS}" rel="noopener">DFIM: Statistik</a> med tal fra Motorstyrelsen, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ukendt eller uforsikret modpart",
        tekst: [
          `DFIM behandler skader fra ukendte, uforsikrede og udenlandske køretøjer i Danmark. Det sker som garantifond efter § 21 i bekendtgørelse nr. 1627.`,
          `For varebilen betyder reglerne, at virksomhedens egen kasko ofte er første sted at anmelde skaden. DFIM dækker kun den del, som ingen anden forsikring dækker.`
        ],
        punkter: [
          `<strong>Flugtbilist.</strong> DFIM betaler kun for tingskade, hvis der samtidig betales erstatning for personskade.`,
          `<strong>Uforsikret køretøj.</strong> DFIM dækker kun krav, som ikke er dækket af en anden forsikring, fx kasko.`,
          `<strong>Udenlandsk køretøj.</strong> DFIM finder det udenlandske selskab og det danske selskab, der behandler sagen. Svar fra udlandet kan tage op til seks uger.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Uforsikrede køretøjer, 1. juni 2026", "10.354", "stk."],
            ["Skader fra ukendte og uforsikrede", "ca. 400", "om året"]
          ],
          note: `Kilder: <a href="${DFIMS}" rel="noopener">DFIM: Statistik</a> og <a href="${DFIMU}" rel="noopener">DFIM: Færdselsuheld i Danmark</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kørsel i udlandet",
        tekst: [
          `Ansvarsforsikringen gælder i hele EU og EØS for én præmie. Den giver den dækning, landets lov kræver, eller den danske dækning, hvis den er større, jf. § 2, stk. 2, i bekendtgørelse nr. 1627.`,
          `GF's ansvarsforsikring dækker i udlandet efter det pågældende lands regler og summer, dog mindst med de danske summer. If henviser til det grønne kort som dokumentation for forsikringen i Europa. GF dækker kun kørsel i udlandet efter aftale, når bilens totalvægt er over 3,5 ton.`,
          `Det grønne kort er et bevis for, at bilen har ansvarsforsikring. DFIM skriver, at selskaberne fra den 1. januar 2025 kan udstede kortet som en PDF-fil, som kan vises på en telefon.`
        ],
        kort: [
          ["Uden grønt kort", "EU- og EØS-landene samt Andorra, Bosnien-Hercegovina, Montenegro, Serbien og Storbritannien."],
          ["Med grønt kort", "Albanien, Aserbajdsjan, Marokko, Moldova, Nordmakedonien, Tunesien, Tyrkiet og Ukraine."],
          ["Grænseforsikring ved grænsen", "Kosovo accepterer ikke kortet, og Rusland, Belarus og Iran er suspenderet fra ordningen."]
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 2.3 og 3.1</a>, <a href="${IFG}" rel="noopener">If: Hvad er bilforsikring til erhverv?</a>, <a href="${BEK}" rel="noopener">BEK nr. 1627, § 2</a> og <a href="${DFIMK}" rel="noopener">DFIM: Det grønne kort</a>, set den 7. oktober 2026. Mere i <a href="/til-varebilen/forsikring/forsikring-i-udlandet/">forsikring i udlandet</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan prisen på ansvar beregnes.",
    spoergsmaal: [
      "Registreringsnummer, og hvem der er ejer og registreret bruger.",
      "Hvem der kører bilen, og om der er førere under 26 år.",
      "Om bilen trækker trailer.",
      "Om bilen har kran eller andet udstyr, der bruges som arbejdsredskab.",
      "Om bilen kører gods for andre mod betaling.",
      "Om bilen kører i udlandet, og i hvilke lande.",
      "Om føreren skal dækkes med en førerpladsdækning."
    ],
    faq: [
      ["Er ansvarsforsikring lovpligtig på en varebil?", "Ja. Færdselslovens § 105 kræver, at erstatningskrav for skader forvoldt af motordrevne køretøjer er dækket af en ansvarsforsikring."],
      ["Hvad dækker ansvarsforsikringen?", "Den dækker skader, bilen gør på andre mennesker og deres ting. Den dækker ikke skader på bilen selv, føreren eller det gods, bilen transporterer."],
      ["Hvem skal tegne ansvarsforsikringen på en leaset varebil?", "Forsikringspligten ligger hos ejeren eller den bruger, der har varig rådighed over bilen, jf. § 106. På en leaset bil er det typisk leasingtageren som registreret bruger."],
      ["Hvad koster det at køre uden ansvarsforsikring?", "Det giver bøde efter færdselsloven og et dagsgebyr fra DFIM for hvert påbegyndt døgn. Gebyret er 250 kr. og højst 60.000 kr. pr. sag ifølge DFIM i oktober 2026. DFIM betaler de skadelidte, og den uforsikrede ender selv med regningen."],
      ["Er føreren dækket af ansvarsforsikringen?", "Nej. Føreren dækkes af en førerpladsdækning, der er et tilvalg hos bl.a. Gjensidige, GF og If og med i Trygs varebilspakker."],
      ["Hvad er dækningssummen på ansvarsforsikringen i 2026?", "Summen er 152 mio. kr. for personskade og tab af forsørger og 30 mio. kr. for tingskade pr. begivenhed."],
      ["Hvad sker der med ansvarsforsikringen, når varebilen sælges?", "Den dækker den nye ejer eller bruger i tre uger, medmindre bilen afmeldes eller forsikres på ny. Det står i § 6 i bekendtgørelse nr. 1627."],
      ["Kan et selskab afvise at tegne ansvarsforsikring?", "Kun i særlige tilfælde, fx hvis forsikringstageren skylder forfalden præmie på en motorforsikring fra de sidste to år. Skylder forsikringstageren dagsgebyr til DFIM, må forsikringen ikke tegnes."],
      ["Dækker ansvaret skader fra en kran på varebilen?", "Ikke hos Tryg, når skaden skyldes, at bilen bruges som arbejdsredskab, fx til løft med en påmonteret kran. Kørsel med bilen er dækket som normalt."],
      ["Skal jeg have grønt kort med i udlandet?", "Ikke i EU og EØS og heller ikke i Andorra, Bosnien-Hercegovina, Montenegro, Serbien og Storbritannien. DFIM skriver, at kortet stadig kræves i fx Tyrkiet, Marokko, Albanien og Ukraine."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: FL, dato: "2026-10-07" },
      { navn: "DFIM: Om dagsgebyr", url: DFIMG, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "If: Hvad er bilforsikring til erhverv?", url: IFG, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYGV, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om regulering af forsikringsdækningsbeløb, BEK nr. 1456 af 28/11/2022", url: "https://www.retsinformation.dk/eli/lta/2022/1456", dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om regulering af forsikringsdækningsbeløb, BEK nr. 1328 af 23/11/2023", url: "https://www.retsinformation.dk/eli/lta/2023/1328", dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om regulering af forsikringsdækningsbeløb, BEK nr. 1350 af 02/12/2024", url: "https://www.retsinformation.dk/eli/lta/2024/1350", dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om regulering af forsikringsdækningsbeløb, BEK nr. 1287 af 11/11/2025", url: "https://www.retsinformation.dk/eli/lta/2025/1287", dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: BEK, dato: "2026-10-07" },
      { navn: "DFIM: Motorkøretøjer i Danmark uden lovpligtig ansvarsforsikring", url: DFIMS, dato: "2026-10-07" },
      { navn: "DFIM: Færdselsuheld i Danmark", url: DFIMU, dato: "2026-10-07" },
      { navn: "DFIM: Det grønne kort", url: DFIMK, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Færdselslovens § 105, stk. 1: et udenlandsk forsikringsselskab med koncession i et andet EU-land, der i Danmark er anmeldt til at tegne ansvarsforsikring for motordrevne køretøjer, kan også tegne forsikringen i Danmark.", FL],
    ["Færdselslovens § 105, stk. 1: forsikringskravet gælder for køretøjer, der anvendes i overensstemmelse med køretøjets funktion som transportmiddel, uanset om skaden forvoldes inden for lovens anvendelsesområde efter § 1.", FL],
    ["Færdselslovens § 109, stk. 3: er et køretøj, der tilhører staten eller en kommune, ikke forsikret, hæfter staten eller kommunen for erstatning i samme omfang som et forsikringsselskab.", FL],
    ["BEK nr. 1627, § 5, stk. 1: ved registrering skal det godtgøres med et forsikringsbevis fra forsikringsselskabet, at der er en forsikring i kraft.", BEK],
    ["Færdselslovens § 104, stk. 2: føreren er erstatningsansvarlig efter lovgivningens almindelige regler.", FL],
    ["Færdselslovens § 102: volder et motordrevet køretøj skade på anden måde end i § 101, stk. 1, betales erstatning efter lovgivningens almindelige regler.", FL],
    ["Færdselslovens § 101, stk. 2-3: erstatning for personskade kan nedsættes eller bortfalde ved skadelidtes forsætlige medvirken og nedsættes, i særlige tilfælde bortfalde, ved grov uagtsomhed; erstatning for tingskade kan nedsættes eller bortfalde, hvis skadelidte forsætligt eller uagtsomt har medvirket.", FL],
    ["Færdselslovens § 103: personskade ved sammenstød mellem motordrevne køretøjer erstattes efter § 101, stk. 1 og 2; ved tingskade afgøres det under hensyn til omstændighederne, om og med hvor stort et beløb erstatning bør ydes.", FL],
    ["Gjensidige: ansvaret dækker erstatningsansvar for skader på passagerer og andre mennesker uden for bilen, fx cyklister og fodgængere.", GJ],
    ["If: påkører man en cyklist, og der sker skade på cyklen og tøjet, dækker ansvarsforsikringen erstatning til cyklisten.", IF],
    ["Færdselslovens § 105, stk. 3: summerne gælder for den ved en enkelt begivenhed forårsagede skade; stk. 4: beløbene reguleres hvert år den 1. januar og afrundes til nærmeste med 1 million delelige kronebeløb, og transportministeren bekendtgør hvert år reguleringerne.", FL],
    ["Tryg: omkostninger, forsikringstageren med Trygs accept pådrager sig ved afgørelsen af et erstatningsspørgsmål, betales af Tryg, selv om dækningssummerne overskrides; Tryg betaler også renter af idømte erstatningsbeløb under forsikringen (afsnit 4.1).", TRYG],
    ["Dækningssummerne gælder for skader, der indtræder i det pågældende kalenderår (fx BEK nr. 1287/2025: skader fra 1. januar 2026 til 31. december 2026).", "https://www.retsinformation.dk/eli/lta/2025/1287"],
    ["Tryg undtager fra ansvarsdækningen skade på ting, som leases af eller tilhører føreren, forsikringstageren eller den faste bruger m.fl., og skade på ting, der tilhører personer, som helt eller delvist ejer eller deltager i virksomheden, og deres ægtefælle eller samlever (afsnit 4.1 a-b).", TRYG],
    ["Tryg undtager skade på transporteret gods, hvis ansvaret ikke er omfattet af færdselslovens regler, og skader under udlejning, medmindre det godtgøres, at skaden ikke skyldes udlejning i strid med Færdselsstyrelsens bestemmelser (afsnit 4.1 f og h).", TRYG],
    ["If sælger varebilforsikring i niveauerne Ansvar, Kasko og Super, og krisehjælp (kortvarig psykologterapi) er inkluderet allerede i Ansvar.", IF],
    ["Tryg: alle tre pakker (Basis, Udvidet og Super) indeholder lovpligtig ansvarsforsikring og kasko.", TRYGV],
    ["Tryg: er varebilen indregistreret med tilkobling, dækker ansvarsforsikringen, når et påhængskøretøj er efterspændt (afsnit 4.1).", TRYG],
    ["Tryg: hængerforsikringen omfatter ansvars- og kaskoforsikring, og man er sikret ved kørsel i udlandet, hvor anhængeren ikke er omfattet af forvognens ansvarsforsikring.", TRYGV],
    ["Tryg undtager skade, der skyldes, at varebilen har været anvendt som arbejdsredskab, fx løftearbejde med påmonteret kran eller gravearbejde med påmonteret graveredskab, og skade omfattet af lov om fragtaftaler ved international vejtransport (afsnit 4.1 e og g).", TRYG],
    ["Færdselslovens § 116: kapitlets regler gælder ikke for en fragtførers ansvar, hvis det er omfattet af lov om fragtaftaler ved international vejtransport.", FL],
    ["Gjensidige: skal bilen bruges til fragtopgaver, skal man tilkøbe dækningen fragtføreransvar.", GJ],
    ["Gjensidige: førerpladsdækningen dækker føreren ved soloulykker og under ind- og udstigning og kan vælges til både ansvar og kasko.", GJ],
    ["If sælger førerpladsdækning som tilvalg til Super, Kasko og Ansvar.", IF],
    ["Tryg: førerdækningen omfatter forsikringstageren og de ansatte som fører; skader omfattet af en arbejdsskadeforsikring dækkes med differencebeløbet, og erstatning fra arbejdsskadeforsikring fratrækkes (afsnit 2 og 4.2).", TRYG],
    ["BEK nr. 1627, § 3, stk. 2: at forsikringstageren handler imod eller ikke efterkommer sine forpligtelser over for selskabet, berettiger ikke selskabet til at nægte en erstatningsberettiget skadelidt betaling; stk. 3: det kan aftales, at forsikringstageren bærer risikoen helt eller delvist, men ikke at skadelidte gør det.", BEK],
    ["BEK nr. 1627, § 16: senest tre måneder efter, at skadelidte har fremsat sit erstatningskrav, skal selskabet fremsætte et begrundet erstatningstilbud eller give et begrundet svar, skriftligt eller på andet læsbart medie.", BEK],
    ["Tryg kan kræve erstatning tilbagebetalt af den ansvarlige efter færdselslovens § 104, der har forvoldt skaden med forsæt; ved uagtsomhed kun ved grov hensynsløshed. Tryg har desuden regres ved bl.a. overskredet kørelængde, urigtige oplysninger, udlejning, gods mod betaling og overtrådt GPS-krav (afsnit 11.8 og 12).", TRYG],
    ["GF: det er en forudsætning for den ekstra selvrisiko ved spiritus mv., at føreren kan pålægges et ansvar, og den opkræves ikke, hvis forsikringstager, ansatte, husstand eller ægtefælle ikke var fører og ikke vidste det, og uvidenheden ikke skyldes grov uagtsomhed (punkt 13.7.2).", GF],
    ["BEK nr. 1627, § 7, stk. 2: en forsikring, der tegnes, mens forsikringstageren skylder dagsgebyr til DFIM, ophører uden videre.", BEK],
    ["BEK nr. 1627, § 2, stk. 2: forsikringen skal på grundlag af én præmie dække hele EU og EØS med den dækning, medlemsstatens lov foreskriver, eller den danske, når den er større.", BEK],
    ["GF og Tryg: ved salg hæfter den nye ejer for en eventuel selvrisiko på forsikringen (GF punkt 2.1, Tryg afsnit 2 og 9).", GF],
    ["BEK nr. 1627, § 8, stk. 3: ophører en forsikring af andre grunde end præmierestance, må meddelelsen tidligst være modtaget af Køretøjsregisteret 14 dage før forsikringens ophør.", BEK],
    ["BEK nr. 1627, § 13: dagsgebyret udgør 250 kr. for hver påbegyndt dag; senest 14 dage forud skal der være sendt skriftlig meddelelse; DFIM kan eftergive gebyr for tiden mellem indbetaling og tegning, hvis forsikringen tegnes senest fem arbejdsdage efter indbetalingen.", BEK],
    ["DFIM: dagsgebyrerne pålægges, indtil der er købt ansvarsforsikring, eller nummerpladerne er afleveret til Motorstyrelsen; loftet på 60.000 kr. for både private og erhvervsdrivende gælder sager med opstart efter 1. januar 2023.", DFIMG],
    ["DFIM: 10.354 uforsikrede motorkøretøjer pr. 1. juni 2026, heraf 4.090 personbiler, 6 store personbiler, 894 varebiler, 53 lastbiler, 523 motorcykler, 555 traktorer, 9 motorredskaber, 1.043 store knallerter og 3.181 små knallerter (kilde: Motorstyrelsen).", DFIMS],
    ["DFIM: dagsgebyrordningen trådte i kraft 1. januar 2019, og der var omkring 50.000 uforsikrede køretøjer i Danmark i januar 2019; antallet er siden faldet markant.", DFIMG],
    ["BEK nr. 1627, § 21: DFIM erstatter som garantifond skader ved uheld i Danmark forvoldt af ukendte eller uforsikrede motordrevne køretøjer.", BEK],
    ["GF: for biler med en totalvægt over 3,5 ton dækkes kørsel i udlandet kun efter aftale med GF (punkt 2.3).", GF],
    ["DFIM: det grønne kort skal ikke medbringes i EU/EØS samt Andorra, Bosnien-Hercegovina, Montenegro, Serbien og Storbritannien; det kræves i Albanien, Moldova, Aserbajdsjan, Tunesien, Nordmakedonien, Tyrkiet, Marokko og Ukraine; Kosovo accepterer det ikke, Rusland og Belarus er suspenderet fra 1. juni 2023 og Iran fra 1. januar 2024 (grænseforsikring ved grænsen); fra 1. januar 2025 kan kortet udstedes som PDF, der kan vises på en mobiltelefon.", DFIMK]
  ]
};
