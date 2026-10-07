// Underside /til-varebilen/forsikring/forsikring-i-udlandet/ (07-10-2026)
var BEK = `https://www.retsinformation.dk/eli/lta/2023/1627`;
var GK = `https://dfim.dk/det-gronne-kort/`;
var UH = `https://dfim.dk/skade/uheld-i-udlandet/`;
var GR = `https://dfim.dk/graenseforsikring/`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGV = `https://tryg.dk/erhverv/tryg-vejhjaelp`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;

module.exports = {
  id: "forsikring/forsikring-i-udlandet",
  side: {
    slug: "forsikring-i-udlandet",
    navn: "Forsikring i udlandet",
    titel: "Varebil i udlandet: grønt kort og forsikring",
    kort: `Ansvarsforsikringen i EU og EØS, lande med krav om grønt kort, kasko og redning i udlandet, papirerne i bilen, grænseforsikring og dokumentation ved uheld. Reglerne kommer fra DFIM og bekendtgørelsen.`,
    beskrivelse: `Varebil i udlandet: ansvar i EU og EØS, de 8 lande, der kræver grønt kort, papirer i bilen, uheld, grænseforsikring og frister. Fra DFIM.`,
    manchet: `Den danske ansvarsforsikring dækker i hele EU og EØS. Uden for området kræver nogle lande stadig det grønne kort, og enkelte lande er helt ude af ordningen. Her er reglerne fra DFIM og bekendtgørelsen om ansvarsforsikring, og hvad selskabernes betingelser siger om kasko, redning og papirerne i bilen.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Grønt kort i EU og EØS", "Nej", "ansvaret dækker med én præmie"],
        ["Grønt kort som PDF", "Fra 1. januar 2025", "gyldigt på telefon eller tablet"],
        ["Svar fra modpartens selskab", "3 måneder", "begrundet tilbud eller svar"],
        ["Oplysninger om modparten", "7 år", "kan kræves fra informationskontoret"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Én præmie, hele EU og EØS",
        tekst: [
          `Med én præmie dækker ansvarsforsikringen i hele EU og EØS. Den giver den dækning, som landets lovgivning kræver, eller den danske, hvis den er større. Den dækker også, mens bilen opholder sig i et andet medlemsland.`,
          `For en elektriker, der kører på opgave i Hamborg eller Malmø, betyder det, at bilen er ansvarsforsikret uden et grønt kort og uden en ekstra præmie.`,
          `Selskaberne går længere end EU og EØS. Tryg skriver, at varebilforsikringen gælder i Europa og i de lande uden for Europa, der er med i ordningen for det grønne kort.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 224" role="img" aria-label="Tre områder. EU og EØS, hvor den danske ansvarsforsikring dækker med én præmie. Andre lande i den internationale ordning for forsikringskort. Kosovo, Rusland, Belarus og Iran, hvor du køber en grænseforsikring."><rect class="tg-profil" x="4" y="4" width="392" height="168"/><text class="tg-lille" x="14" y="24">GRØNT KORT-ORDNINGEN</text><rect class="tg-modul" x="14" y="40" width="180" height="120"/><text class="tg-modul__tekst" x="24" y="66">EU OG EØS</text><text class="tg-modul__tekst" x="24" y="88">ÉN PRÆMIE</text><text class="tg-modul__tekst" x="24" y="110">INTET GRØNT KORT</text><rect class="tg-kasse" x="206" y="40" width="180" height="120"/><text class="tg-fremhaev" x="216" y="66">Andre lande</text><text x="216" y="88">Dansk ansvar gælder</text><text x="216" y="110">nogle kræver grønt</text><text x="216" y="130">kort, fx Tyrkiet</text><rect class="tg-rum" x="4" y="184" width="392" height="34"/><text class="tg-fremhaev" x="14" y="206">Kosovo, Rusland, Belarus, Iran</text><text x="386" y="206" text-anchor="end">grænseforsikring</text></svg>`,
          tekst: `Skematisk. Hvor den danske ansvarsforsikring gælder, og hvor du skal købe en grænseforsikring. Kilder: <a href="${BEK}" rel="noopener">BEK nr. 1627, § 2, stk. 2</a> og <a href="${GK}" rel="noopener">DFIM</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1627 af 12/12/2023, § 2, stk. 2</a>, set den 4. oktober 2026, og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 3</a>, set den 7. oktober 2026. De danske summer for 2026 står i <a href="/til-varebilen/forsikring/ansvarsforsikring-varebil/">ansvarsforsikring til varebil</a>.`
        ]
      },
      {
        overskrift: "Grønt kort land for land",
        tekst: [
          `Det grønne kort er et internationalt bevis for, at bilen har en lovpligtig ansvarsforsikring. I EU og EØS skal det ikke med, og det skal heller ikke i Andorra, Bosnien-Hercegovina, Montenegro, Serbien og Storbritannien, skriver DFIM.`,
          `Otte lande uden for EU og EØS kræver det stadig. Det er Albanien, Aserbajdsjan, Marokko, Moldova, Nordmakedonien, Tunesien, Tyrkiet og Ukraine. Kommer du ud for et uheld med en bil fra et af de lande, beder DFIM dig sikre en kopi af modpartens grønne kort, fx et foto.`,
          `Tryg skriver på sin side om vejhjælp, at du skal have det grønne kort med til Storbritannien. DFIM's liste siger det modsatte, så det kan være en fordel at spørge selskabet, inden bilen kører derover.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Område", "Grønt kort med", "Dansk ansvar gælder"],
          raekker: [
            ["EU og EØS", "nej", "ja"],
            ["Andorra, Bosnien-Hercegovina, Montenegro, Serbien, Storbritannien", "nej", "ja"],
            ["Albanien, Aserbajdsjan, Marokko, Moldova", "ja", "ja"],
            ["Nordmakedonien, Tunesien, Tyrkiet, Ukraine", "ja", "ja"],
            ["Kosovo", "Accepteres ikke", "Grænseforsikring"],
            ["Rusland, Belarus og Iran", "Suspenderet", "Grænseforsikring"]
          ],
          note: `Kilde: <a href="${GK}" rel="noopener">DFIM: Det grønne kort</a>, set den 4. oktober 2026 og igen den 7. oktober 2026. Rusland og Belarus er suspenderet fra 1. juni 2023, Iran fra 1. januar 2024.`
        },
        efter: [
          `Kilder: <a href="${GK}" rel="noopener">DFIM: Det grønne kort</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 3</a> og <a href="${TRYGV}" rel="noopener">Tryg: Tryg Vejhjælp</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Papir eller PDF",
        tekst: [
          `Fra 1. januar 2025 kan forsikringsselskaberne udstede det grønne kort som PDF. Det er fuldt gyldigt og kan vises til myndighederne på en telefon eller tablet. Selskaberne kan også fortsat printe kortet.`,
          `Selskabet bestemmer selv, om det printer kortet til kunden eller sender en fil, som kunden kan printe. Tryg skriver, at de fleste lande nu accepterer et grønt kort printet hjemmefra på hvidt papir, men at nogle lande stadig kun godtager den oprindelige udgave.`
        ],
        efter: [
          `Kilder: <a href="${GK}" rel="noopener">DFIM: Det grønne kort</a>, set den 4. oktober 2026, og <a href="${TRYGV}" rel="noopener">Tryg: Tryg Vejhjælp</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Uden for ordningen",
        tekst: [
          `I Kosovo accepteres det grønne kort ikke. I Rusland, Belarus og Iran gælder det ikke. Her skal du købe en grænseforsikring ved grænsen.`,
          `Rusland og Belarus blev suspenderet fra ordningen den 1. juni 2023 og Iran den 1. januar 2024. Et dansk grønt kort gælder derfor ikke længere i de tre lande.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. juni 2023", "Rusland og Belarus bliver suspenderet fra ordningen."],
            ["1. januar 2024", "Iran bliver suspenderet fra ordningen."],
            ["1. januar 2025", "Selskaberne kan udstede det grønne kort som PDF."]
          ],
          note: `Tidslinjen viser ændringerne i ordningen for det grønne kort. Kilde: <a href="${GK}" rel="noopener">DFIM</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${GK}" rel="noopener">DFIM: Det grønne kort</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Kasko og redning i udlandet",
        tekst: [
          `Kaskoen følger ikke altid samme grænser som ansvaret. GF's kasko dækker i Danmark og i de lande, hvor SOS-redningsforsikringen og Det Røde Kort gælder. For biler med en totalvægt over 3,5 ton dækker GF kun kørsel i udlandet efter aftale, og GF kan ændre dækningen i udlandet med 14 dages varsel.`,
          `Redningsforsikringen i kaskoen hos GF og Tryg dækker kun varebiler på højst 3.500 kg. Tryg dækker ikke, hvis rejsens formål er godstransport. Har virksomheden købt andre forsikringer til kørsel i udlandet, dækker Tryg kun det, de andre ikke betaler.`,
          `Hvad redningsforsikringen og vejhjælpen gør, når bilen går i stå uden for Danmark, står i <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 2.3 og 4.4</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.5 og 12</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Papirerne i bilen",
        tekst: [
          `GF og Tryg anbefaler at have den internationale skadeanmeldelse i bilen, når den kører i udlandet. GF nævner også registreringsattesten og Det Røde Kort, hvis bilen er kaskoforsikret. Det Røde Kort kan hentes som app eller printes fra SOS International.`,
          `Tryg skriver, at det er nok at have del I af registreringsattesten med. Ligger både del I og del II i bilen, kan de bruges til at omregistrere den, så del II bør blive hjemme.`,
          `Tryg nævner desuden telefonnummeret til Tryg Vejhjælp Europa. Skal bilen til et land på DFIM's liste, skal det grønne kort med, på papir eller som PDF.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 212" role="img" aria-label="Papirerne til en tur i udlandet. I bilen ligger registreringsattestens del I, det internationale forsikringskort på papir eller som PDF, den internationale skadeanmeldelse og redningskortet fra SOS. Registreringsattestens del II bliver hjemme."><text class="tg-fremhaev" x="5" y="16">I bilen</text><text class="tg-fremhaev" x="270" y="16">Hjemme</text><rect class="tg-rum" x="5" y="24" width="250" height="182"/><rect class="tg-kasse" x="20" y="38" width="220" height="32"/><text x="30" y="59">Registreringsattest del I</text><rect class="tg-modul" x="20" y="80" width="220" height="32"/><text class="tg-modul__tekst" x="30" y="101">GRØNT KORT, PAPIR ELLER PDF</text><rect class="tg-kasse" x="20" y="122" width="220" height="32"/><text x="30" y="143">International skadeanmeldelse</text><rect class="tg-kasse" x="20" y="164" width="220" height="32"/><text x="30" y="185">Det Røde Kort fra SOS</text><rect class="tg-kasse" x="270" y="24" width="125" height="182"/><text x="332" y="96" text-anchor="middle">Registrerings-</text><text x="332" y="112" text-anchor="middle">attest del II</text><text class="tg-lille" x="332" y="150" text-anchor="middle">KAN BRUGES TIL</text><text class="tg-lille" x="332" y="166" text-anchor="middle">OMREGISTRERING</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, Gode råd ved kørsel i udlandet</a>, <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 1 og 4.5</a> og <a href="${GK}" rel="noopener">DFIM</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dokumentation ved uheld",
        tekst: [
          `Ved et uheld i udlandet gælder det andet lands regler, og DFIM skriver, at manglende dokumentation kan gøre det sværere at få erstatning. DFIM beder dig notere modpartens navn, forsikringsselskab, registreringsnummer, bilens nationalitet, mærke og model. Dato, sted og land for uheldet og navn og adresse på vidner skal også med.`,
          `DFIM peger på mindst én af disse former for dokumentation af modparten:`
        ],
        punkter: [
          `<strong>International skadeanmeldelse.</strong> Udfyldt og underskrevet af begge parter.`,
          `<strong>Politirapport.</strong> Det kan også være en politikvittering med journalnummer.`,
          `<strong>Vidne.</strong> Der skal være fulde kontaktoplysninger og et foto af vidnets ID. Vidnet skal kunne oplyse begge bilers registreringsnumre.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Varebil og lastbil med trailer efter et uheld. Markeret: foto af begge køretøjer, registreringsnumre på trækker og trailer og den internationale skadeanmeldelse."><g transform="translate(10,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-profil" x="300" y="70" width="100" height="120"/><path class="tg-profil" d="M300,190 L300,84 L274,84 L262,122 L262,190 Z"/><circle class="tg-profil" cx="284" cy="193" r="14"/><circle class="tg-profil" cx="340" cy="193" r="14"/><circle class="tg-profil" cx="378" cy="193" r="14"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="200" y1="100" x2="140" y2="48"/><circle cx="200" cy="100" r="3"/><text class="tg-call__navn" x="5" y="24">Foto af begge</text><text class="tg-call__under" x="5" y="38">køretøjer før de flyttes</text></g><g class="tg-call"><line x1="350" y1="120" x2="350" y2="48"/><circle cx="350" cy="120" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Trækker og trailer</text><text class="tg-call__under" x="395" y="38" text-anchor="end">begge reg.nr. noteres</text></g><g class="tg-call"><line x1="196" y1="96" x2="160" y2="214"/><circle cx="196" cy="96" r="3"/><text class="tg-call__navn" x="5" y="230">International skadeanmeldelse</text><text class="tg-call__under" x="5" y="244">underskrevet af begge parter</text></g></svg>`,
          tekst: `Skematisk. Kilde: <a href="${UH}" rel="noopener">DFIM: Færdselsuheld i udlandet</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Fotos af modpartens bil alene, et visitkort fra politiet eller kun et navn på et vidne er ikke nok. Kører modparten lastbil med trailer, noteres registreringsnummeret på både trailer og trækker. Listen over oplysninger fra modparten er set den 7. oktober 2026 hos <a href="${UH}" rel="noopener">DFIM</a>.`
        ]
      },
      {
        overskrift: "Fotos på stedet",
        tekst: [
          `Fotos viser bagefter, hvor bilerne holdt, og hvordan skaderne så ud. DFIM beder dig fotografere begge køretøjer, før de flyttes, og skadernes omfang. Gælder det grønne kort i landet, skal modpartens kort også fotograferes.`
        ],
        punkter: [
          `Begge køretøjer, før de flyttes.`,
          `Modpartens registreringsnummer.`,
          `Modpartens grønne kort, hvis landet bruger det.`
        ],
        efter: [
          `I nogle lande, fx Frankrig, lægger DFIM vægt på dokumentation for, at bilen faktisk var til stede. Kilde: <a href="${UH}" rel="noopener">DFIM: Færdselsuheld i udlandet</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Når du selv er skyld i uheldet",
        tekst: [
          `Er føreren selv skyld i uheldet, skal føreren oplyse modparten om virksomhedens forsikringsselskab og udfylde den internationale skadeanmeldelse sammen med modparten. Begge parter skal skrive under, og hver part får en kopi.`,
          `Tryg skriver, at man aldrig skal skrive under på noget, man ikke forstår, fordi det kan være juridisk bindende i en retssag. Er man i tvivl, skriver man på blanketten, at man ikke forstår hele teksten. Har føreren talt med det lokale politi, noteres politistationens navn og et eventuelt journalnummer.`,
          `Skaden anmeldes derefter til virksomhedens eget selskab som en almindelig ansvarsskade. Fremgangsmåden står i <a href="/til-varebilen/forsikring/skadeanmeldelse/">skadeanmeldelse</a>.`
        ],
        efter: [
          `Kilder: <a href="${UH}" rel="noopener">DFIM: Færdselsuheld i udlandet</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Skadelandets regler",
        tekst: [
          `Erstatningen fastsættes efter reglerne i det land, hvor uheldet skete. Kravene til beviser for modpartens ansvar kan være anderledes end i Danmark. Du anmelder skaden til dit eget forsikringsselskab med de oplysninger, du har samlet.`,
          `Har en udenlandsk bil skadet din varebil, går kravet mod modpartens selskab. De fleste forsikringsselskaber i EU og EØS har en dansk skaderepræsentant, som sender dit krav videre til det udenlandske selskab. Kommer der ikke svar, kan DFIM træde til som erstatningsorgan.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Skadens vej efter et uheld med en udenlandsk bil. Du anmelder skaden til dit eget selskab og retter kravet mod modparten gennem selskabets danske skaderepræsentant. Kommer der ikke svar inden 3 måneder, kan kravet sendes til DFIM."><defs><marker id="pil-forsikring-i-udlandet-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kuffert" x="5" y="86" width="70" height="40"/><text x="40" y="111" text-anchor="middle">Dig</text><rect class="tg-kasse" x="110" y="18" width="170" height="36"/><text x="195" y="41" text-anchor="middle">Dit eget selskab</text><rect class="tg-kasse" x="110" y="88" width="170" height="36"/><text x="195" y="111" text-anchor="middle">Dansk skaderepræsentant</text><rect class="tg-kasse" x="300" y="84" width="95" height="44"/><text x="347" y="103" text-anchor="middle">Modpartens</text><text x="347" y="119" text-anchor="middle">selskab</text><rect class="tg-modul" x="110" y="168" width="170" height="36"/><text class="tg-modul__tekst" x="195" y="191" text-anchor="middle">DFIM</text><line class="tg-pil" x1="75" y1="96" x2="106" y2="48" marker-end="url(#pil-forsikring-i-udlandet-1)"/><line class="tg-pil" x1="75" y1="106" x2="106" y2="106" marker-end="url(#pil-forsikring-i-udlandet-1)"/><line class="tg-pil" x1="280" y1="106" x2="296" y2="106" marker-end="url(#pil-forsikring-i-udlandet-1)"/><line class="tg-skinne-tynd" x1="195" y1="124" x2="195" y2="166" marker-end="url(#pil-forsikring-i-udlandet-1)"/><text x="288" y="182">uden svar inden</text><text x="288" y="198">3 måneder</text><text class="tg-lille" x="5" y="160">ANMELD OG</text><text class="tg-lille" x="5" y="176">KRÆV ERSTATNING</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${UH}" rel="noopener">DFIM: Færdselsuheld i udlandet</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, §§ 16 og 20</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${UH}" rel="noopener">DFIM: Færdselsuheld i udlandet</a>, set den 4. oktober 2026. Skaderepræsentanterne er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Frister for svar",
        tekst: [
          `Bekendtgørelsen om ansvarsforsikring giver dig frister, som modpartens selskab skal overholde. Det gælder også, når selskabet sidder i et andet EU-land.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Begrundet tilbud eller svar", "3", "måneder"],
            ["DFIM starter behandlingen", "2", "måneder"],
            ["Ret til oplysninger om modpart", "7", "år"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1627 af 12/12/2023, §§ 16, 20 og 27</a>, set den 4. oktober 2026.`
        },
        punkter: [
          `<strong>3 måneder.</strong> Modpartens selskab eller dets skadebehandlingsrepræsentant skal give et begrundet tilbud eller svar.`,
          `<strong>DFIM som erstatningsorgan.</strong> Kommer der ikke svar, eller er der ingen repræsentant i Danmark, kan kravet sendes til DFIM, som går i gang senest 2 måneder efter.`,
          `<strong>7 år.</strong> I 7 år kan du kræve oplysninger om modpartens selskab og police fra informationskontoret.`
        ]
      },
      {
        overskrift: "Ukendt modpart i udlandet",
        tekst: [
          `Er skadevolderen ukendt, eller kan dens forsikringsselskab ikke findes inden for to måneder efter uheldet, erstatter DFIM skaden direkte over for skadelidte, der bor i Danmark. Det gælder uheld i et andet EU- eller EØS-land, også når modpartens køretøj kommer fra et land uden for EU og EØS, der er med i grønt kort-ordningen.`,
          `Mangler du blot oplysninger om modpartens forsikring, kan DFIM hente dem. Du skal som minimum kende registreringsnummeret, bilens nationalitet, skadedatoen og bilens kategori, fx personbil, lastbil eller motorcykel. Derefter sender du en forsikringsforespørgsel til DFIM.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Uheld i EU og EØS", "Uheldet sker i et andet EU- eller EØS-land."],
            ["Ukendt modpart", "Skadevolderen er ukendt, eller forsikringsselskabet kan ikke findes inden for to måneder efter uheldet."],
            ["DFIM erstatter", "DFIM betaler erstatningen direkte til skadelidte, der bor i Danmark."]
          ]
        },
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1627, § 21, stk. 1</a>, set den 4. oktober 2026. Mangler du oplysninger om modparten, kan DFIM finde dem ud fra registreringsnummer, nationalitet, skadedato og køretøjskategori.`
        ]
      },
      {
        overskrift: "Udenlandsk varebil i Danmark",
        tekst: [
          `Kører et køretøj fra et land uden for EU og EØS og aftalen om antaget forsikring ind i Danmark som det første land uden en forsikring, der gælder her, bruges der en grænseforsikring fra DFIM. Grænseforsikringen er en lovpligtig ansvarsforsikring for EU, EØS og Schweiz. Den tegnes for hele måneder og omfatter ikke kasko. Køretøjer med en egenvægt op til 3.500 kg får samme pris som en personbil.`,
          `Grænseforsikringen kan ikke købes til en bil, der er registreret i et af de 30 EU- og EØS-lande eller i Andorra, Bosnien-Hercegovina, Montenegro, Serbien, Schweiz eller Storbritannien. Er et andet af de 36 lande det første land, bilen kører ind i, skal grænseforsikringen købes der.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Pris som personbil, egenvægt op til", "3.500", "kg"],
            ["Grænseforsikringen tegnes for", "hele", "måneder"],
            ["Kasko", "Nej", "ikke omfattet"]
          ],
          note: `Grænseforsikringen er en lovpligtig ansvarsforsikring for EU, EØS og Schweiz. Kilde: <a href="${GR}" rel="noopener">DFIM: Grænseforsikring</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${GR}" rel="noopener">DFIM: Grænseforsikring</a>, set den 4. oktober 2026, og listen over lande set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pris på grænseforsikring",
        tekst: [
          `DFIM regner prisen ud fra køretøjets type og antallet af måneder. En varebil med en egenvægt på højst 3.500 kg koster det samme som en personbil. Den første måned er dyrest, og et helt år koster 5.500 kr.`,
          `Forsikringen tegnes for mindst én måned ad gangen og skal fornyes, før den udløber. Betalingen sker ved bankoverførsel, og når DFIM har fået pengene, kommer policen med e-mail eller til en dansk adresse.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Første måned", 800],
            ["Hver følgende måned", 500],
            ["Et år", 5500]
          ],
          note: `Kategori A, personbil, som også gælder køretøjer med en egenvægt på højst 3.500 kg. Priserne står også i euro på DFIM's side. Kilde: <a href="${GR}" rel="noopener">DFIM: Grænseforsikring, prisliste</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så er bilen klar til turen.",
    spoergsmaal: [
      "Hvilke lande bilen skal køre i.",
      "Om der skal bruges grønt kort på papir eller PDF.",
      "Bilens totalvægt og om turen er godstransport.",
      "Om kaskoen har redning i udlandet.",
      "Om bilen skal køre i Kosovo, hvor grænseforsikring købes ved grænsen.",
      "Om virksomheden har andre forsikringer til kørsel i udlandet."
    ],
    faq: [
      ["Skal varebilen have grønt kort med til Tyskland eller Sverige?", "Nej. Inden for EU og EØS er det ikke nødvendigt, og ansvarsforsikringen dækker med én præmie."],
      ["Hvilke lande kræver grønt kort?", "Ifølge DFIM kræver Albanien, Aserbajdsjan, Marokko, Moldova, Nordmakedonien, Tunesien, Tyrkiet og Ukraine grønt kort."],
      ["Gælder det grønne kort som PDF?", "Ja. Fra 1. januar 2025 kan selskaberne udstede det som PDF, og det kan vises på en telefon."],
      ["Hvad gør man ved et uheld i udlandet?", "Udfyld den internationale skadeanmeldelse sammen med modparten, tag fotos af begge køretøjer, før de flyttes, og anmeld skaden til dit eget selskab."],
      ["Kan en dansk varebil køre i Kosovo på det grønne kort?", "Nej. Kosovo accepterer ikke det grønne kort. Du skal købe en grænseforsikring ved grænsen."],
      ["Hvilke papirer skal med i bilen?", "GF og Tryg nævner den internationale skadeanmeldelse og registreringsattesten. Tryg skriver, at del I er nok, og at del II bør blive hjemme. I de lande, der kræver det, skal det grønne kort også med."],
      ["Dækker kaskoen i udlandet?", "Hos GF dækker kaskoen i de lande, hvor Det Røde Kort fra SOS gælder. Redningsforsikringen hos GF og Tryg gælder varebiler på højst 3.500 kg, og Tryg dækker ikke ved godstransport."],
      ["Hvad koster en grænseforsikring til en udenlandsk varebil?", "Hos DFIM koster en varebil med en egenvægt på højst 3.500 kg det samme som en personbil, 800 kr. den første måned og 5.500 kr. for et år."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: BEK, dato: "2026-10-04" },
      { navn: "DFIM: Det grønne kort", url: GK, dato: "2026-10-07" },
      { navn: "DFIM: Færdselsuheld i udlandet", url: UH, dato: "2026-10-07" },
      { navn: "DFIM: Grænseforsikring", url: GR, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Tryg Vejhjælp til erhverv", url: TRYGV, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Tryg (afsnit 3): varebilforsikringen gælder i Europa og i de lande uden for Europa, der er tilsluttet grønt kort-ordningen; grønt kort er dokumentation for lovpligtig ansvarsforsikring under kørsel i udlandet.", TRYG],
    ["DFIM: grønt kort skal ikke medbringes i EU og EØS og i Andorra, Bosnien-Hercegovina, Montenegro, Serbien og Storbritannien; ved uheld med et køretøj fra et land, der kræver grønt kort, skal man sikre en kopi af modpartens grønne kort, fx ved at tage et billede; selskaberne vælger selv, om de printer kortet eller sender en fil.", GK],
    ["Tryg (side om vejhjælp): grønt kort skal medbringes ved kørsel til Storbritannien; de fleste lande accepterer et grønt kort printet hjemmefra på hvidt papir, men nogle lande godtager kun den oprindelige udgave.", TRYGV],
    ["GF (punkt 2.3): kaskoforsikringen dækker i Danmark og i de lande, hvor SOS-redningsforsikringen dækker (Det Røde Kort); for biler med totalvægt over 3,5 ton dækkes kørsel i udlandet kun efter aftale; GF kan med 14 dages varsel ændre dækningen i udlandet.", GF],
    ["Tryg (afsnit 4.5 og 12): redningsforsikringen i udlandet gælder kun varebiler med tilladt totalvægt på maksimalt 3.500 kg og ikke, hvis rejsens formål er godstransport; er der købt andre forsikringer for kørsel i udlandet, dækker Tryg subsidiært.", TRYG],
    ["GF (Gode råd ved kørsel i udlandet): det er en god idé at have en international skadeanmeldelse, Det Røde Kort (som app eller print fra sos.eu eller mitgf.dk) ved kaskoforsikring og registreringsattesten med i udlandet.", GF],
    ["Tryg (afsnit 1 og 4.5): i udlandet er det en god idé at medbringe registreringsattestens del I, telefonnummer til Europa Vejhjælp og den internationale skadeanmeldelse; del I er nok, og ligger både del I og II i varebilen, kan de bruges til omregistrering, så kun del I bør ligge i bilen.", TRYG],
    ["DFIM: fra modparten noteres navn, forsikringsselskab, registreringsnummer, bilens nationalitet, mærke og model, dato, sted og land for uheldet samt navn og adresse på vidner; fotos af skadernes omfang.", UH],
    ["DFIM: er du selv ansvarlig, skal du oplyse modparten om dit forsikringsselskab og udfylde den internationale skadeanmeldelse, som begge parter skal underskrive.", UH],
    ["Tryg (afsnit 1): skriv aldrig under på noget, man ikke forstår, da det kan være juridisk bindende i en retssag; ved tvivl skrives, at man ikke forstår den fulde ordlyd; ved kontakt med lokalt politi noteres stationens navn og eventuelt journalnummer; blanketten udfyldes med en kopi til hver part.", TRYG],
    ["DFIM: de fleste forsikringsselskaber i EU og EØS har en dansk skaderepræsentant, som videreformidler kravet til det udenlandske selskab.", UH],
    ["DFIM: for at indhente oplysninger om modpartens forsikring skal man som minimum oplyse registreringsnummer, bilens nationalitet, skadedato og bilens kategori og sende en forsikringsforespørgsel.", UH],
    ["DFIM: grænseforsikring kan ikke tegnes for køretøjer registreret i de 30 EU- og EØS-lande eller i Andorra, Bosnien-Hercegovina, Montenegro, Serbien, Schweiz eller Storbritannien; er et andet af de 36 lande første indrejseland, tegnes den dér.", GR],
    ["DFIM: grænseforsikringens pris beregnes ud fra køretøjstype og antal hele måneder; kategori A personbil koster 800 kr. første måned, 500 kr. efterfølgende måneder og 5.500 kr. for 1 år; køretøjer med egenvægt på maks. 3.500 kg prisfastsættes som personbil; betaling ved bankoverførsel; policen sendes pr. e-mail eller til dansk adresse; mindst én måned ad gangen og fornyes inden udløb.", GR]
  ]
};
