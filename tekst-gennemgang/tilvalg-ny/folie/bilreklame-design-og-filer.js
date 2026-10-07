// Underside /til-varebilen/folie/bilreklame-design-og-filer/ (07-10-2026)
var TW = `https://www.trykwerk.dk/autoreklame/`;
var VSB = `https://viskilter.dk/bilreklame.aspx`;
var VSF = `https://viskilter.dk/trykklar_fil.aspx`;
var LTF = `https://www.lasertryk.dk/trykfiler`;
var VKB = `https://www.vankompagniet.dk/product-category/dekorationer/bilreklame/`;
var VKL = `https://www.vankompagniet.dk/product/dekoration-pa-lille-varebil/`;
var VKC = `https://www.vankompagniet.dk/product/firmanavn-cvr-nummer-i-hvid-tekst/`;
var CPH = `https://cphwrap.dk/prisliste/`;
var MG = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var VP = `https://www.vistaprint.dk/skilte-plakater/magnetskilte-til-bil`;
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;

module.exports = {
  id: "folie/bilreklame-design-og-filer",
  side: {
    slug: "bilreklame-design-og-filer",
    navn: "Design og trykfiler til bilreklame",
    titel: "Bilreklame: design, logo og trykfiler",
    kort: `Se, hvad skiltefirmaerne skal have af logo, filformater, skrifttyper, farver, opløsning og beskæring til bilreklame, og hvad designarbejdet koster.`,
    beskrivelse: `Design og trykfiler til bilreklame: vektor eller billede, filformater, skrifttyper, CMYK, opløsning, beskæring og priser på design fra 400 kr.`,
    manchet: `Udskåret tekst kræver logoet som vektorfil. Print kan laves fra billeder, hvis opløsningen passer til læseafstanden. Her er skiltefirmaernes krav til filer, skrifttyper, farver og beskæring, og hvad oplæg og design koster.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Logo til udskåret folie", "Vektorfil", ".eps eller .pdf hos Viskilter"],
        ["Beskæring", "3 mm", "pr. side hos Viskilter og LaserTryk.dk"],
        ["Opløsning", "300 ppi", "udgangspunktet hos LaserTryk.dk"],
        ["Design hos CPH Wrap", "400 kr.", "uden moms pr. halve time"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Fra logo til monteret folie",
        tekst: [
          `Trykwerk, VanKompagniet og Viskilter beskriver det samme forløb. Firmaet skal kende bilen og have logoet, derefter laver det et oplæg, og først når kunden har godkendt oplægget, monteres folien.`,
          `Viskilter laver en grafisk illustration af reklamen på bilen ud fra mærke, model og årgang, logoet og en kort beskrivelse af, hvad kunden ønsker. VanKompagniet sender sit oplæg til godkendelse, så indhold og placering kan gennemgås, og fejl kan rettes, før folien monteres.`,
          `Hos Trykwerk følger et bindende tilbud, når det endelige layout er godkendt. Viskilter monterer typisk reklamen i løbet af et par timer, efter at bilen er afleveret.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bil og logo", "Mærke, model, årgang og logo sendes til skiltefirmaet."],
            ["Oplæg", "Firmaet laver layoutforslag eller mockup af bilen."],
            ["Godkendelse", "Kunden godkender oplægget. Trykwerk sender derefter et bindende tilbud."],
            ["Montering", "Tekst og logo tager få timer, og en fuld wrap af et større køretøj tager 1–3 dage."]
          ]
        },
        efter: [
          `Kilder: <a href="${TW}" rel="noopener">Trykwerk</a>, <a href="${VKB}" rel="noopener">VanKompagniet</a>, <a href="${VSB}" rel="noopener">Viskilter</a> og <a href="${MG}" rel="noopener">Montagegruppen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Navn og CVR-nummer i designet",
        tekst: [
          `Designet skal have plads til navn og CVR-nummer, hvis bilen er en vare- eller lastbil på højst 4 t, der er registreret til udelukkende erhvervsmæssig brug. Oplysningerne skal stå i både venstre og højre side, være synlige og letlæselige og have en farve, der klart afviger fra bilens.`,
          `Bogstaver og tal skal være mindst 3 cm høje, og CVR-nummeret skrives som "CVR" efterfulgt af de 8 cifre. Navnet kan erstattes af et logo, hvis logoet entydigt identificerer virksomheden.`,
          `VanKompagniet sælger firmanavn og CVR-nummer i hvid eller sort tekst som en selvstændig dekoration til 495 kr. Teksten er som standard 3 cm høj og sat med skrifttypen Calibri. Mere om reglerne i <a href="/til-varebilen/folie/magnetskilte/">magnetskilte</a> og <a href="/til-varebilen/folie/bilreklame-paa-varebil/">bilreklame på varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${REG}" rel="noopener">§ 85 i bekendtgørelsen om registrering af køretøjer</a> og <a href="${VKC}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vektor eller billede",
        tekst: [
          `Udskåret folie skæres efter linjer, og det kræver en vektorfil. Printede flader kan også laves fra et billede.`,
          `En vektorfil beskriver logoet med matematiske formler. LaserTryk.dk skriver, at vektorgrafik derfor kan skaleres til enhver størrelse uden tab af kvalitet, og firmaet fraråder tekst lavet som bitmap.`,
          `Et billede, også kaldet bitmap eller raster, består af pixels. Viskilter kan efter særlig aftale skære folie og print fra et billede, og Trykwerks priser forudsætter, at logoet findes som vektorfil.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Produktion", "Vektor", "Billede", "Billede efter aftale"],
          raekker: [
            ["Folieskæring", "ja", "nej", "ja"],
            ["Print med skæring", "ja", "nej", "ja"],
            ["Print af flader", "ja", "ja", "ja"]
          ],
          note: `Kilde: <a href="${VSF}" rel="noopener">Viskilter, trykklar fil</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Filformater",
        tekst: [
          `Skiltefirmaerne beder om forskellige formater til skæring og print. PDF går igen hos dem alle, og LaserTryk.dk skriver, at de bedste resultater kommer fra en PDF med alle skrifttyper indlejret.`,
          `Viskilter tager PDF i højst version 1.4 og EPS i højst version 2. Filer under 10 MB kan sendes med mail, mens større filer sendes via WeTransfer sammen med en særskilt ordremail.`
        ],
        punkter: [
          "<strong>Til skæring.</strong> Viskilter skal have .eps eller .pdf.",
          "<strong>Til print.</strong> Viskilter skal have .pdf eller .jpg.",
          "<strong>PDF med skrifttyper.</strong> LaserTryk.dk foretrækker PDF med alle skrifttyper indlejret.",
          "<strong>Skrifttyper.</strong> Trykwerks priser forudsætter, at logoet findes som vektorfil, og at de anvendte skrifttyper kendes."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["PDF hos Viskilter", "højst 1.4", "version"],
            ["EPS hos Viskilter", "højst 2", "version"],
            ["Fil med mail, Viskilter", "under 10", "MB"]
          ],
          note: `Kilde: <a href="${VSF}" rel="noopener">Viskilter, trykklar fil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skrifttyper",
        tekst: [
          `Tekst i en fil kan ligge som skrift eller som kurver. Ligger den som skrift, skal skiltefirmaet have den samme skrifttype for at vise teksten rigtigt. LaserTryk.dk nævner manglende skrifttyper som et af de typiske problemer i trykfiler.`,
          `Der er to måder at løse det på. LaserTryk.dk vil have en PDF med alle skrifttyper indlejret, og Viskilter tjekker, at skrifttyperne er konverteret til vektor.`,
          `Trykwerks priser forudsætter, at kunden har eller kender alle de skrifttyper, der er brugt i virksomhedens øvrige reklamer.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Samme bogstaver som skrift og som kurver. Skriften kræver, at skiltefirmaet har skrifttypen, mens kurverne er tegnet med punkter i hjørnerne og ikke kræver skrifttypen."><text class="tg-lille" x="20" y="30">SOM SKRIFT</text><text class="tg-lille" x="220" y="30">KONVERTERET TIL KURVER</text><rect class="tg-kasse" x="20" y="40" width="170" height="90"/><rect class="tg-kasse" x="220" y="40" width="160" height="90"/><path class="tg-hylde" d="M67,60 L91,60 L91,68 L77,68 L77,80 L89,80 L89,88 L77,88 L77,110 L67,110 Z"/><path class="tg-hylde" d="M99,60 L109,60 L109,110 L99,110 Z"/><path class="tg-hylde" d="M117,60 L127,60 L127,102 L143,102 L143,110 L117,110 Z"/><path class="tg-profil" d="M262,60 L286,60 L286,68 L272,68 L272,80 L284,80 L284,88 L272,88 L272,110 L262,110 Z"/><path class="tg-profil" d="M294,60 L304,60 L304,110 L294,110 Z"/><path class="tg-profil" d="M312,60 L322,60 L322,102 L338,102 L338,110 L312,110 Z"/><rect class="tg-kuffert" x="260" y="58" width="4" height="4"/><rect class="tg-kuffert" x="284" y="58" width="4" height="4"/><rect class="tg-kuffert" x="284" y="66" width="4" height="4"/><rect class="tg-kuffert" x="270" y="66" width="4" height="4"/><rect class="tg-kuffert" x="270" y="78" width="4" height="4"/><rect class="tg-kuffert" x="282" y="78" width="4" height="4"/><rect class="tg-kuffert" x="282" y="86" width="4" height="4"/><rect class="tg-kuffert" x="270" y="86" width="4" height="4"/><rect class="tg-kuffert" x="270" y="108" width="4" height="4"/><rect class="tg-kuffert" x="260" y="108" width="4" height="4"/><rect class="tg-kuffert" x="292" y="58" width="4" height="4"/><rect class="tg-kuffert" x="302" y="58" width="4" height="4"/><rect class="tg-kuffert" x="302" y="108" width="4" height="4"/><rect class="tg-kuffert" x="292" y="108" width="4" height="4"/><rect class="tg-kuffert" x="310" y="58" width="4" height="4"/><rect class="tg-kuffert" x="320" y="58" width="4" height="4"/><rect class="tg-kuffert" x="320" y="100" width="4" height="4"/><rect class="tg-kuffert" x="336" y="100" width="4" height="4"/><rect class="tg-kuffert" x="336" y="108" width="4" height="4"/><rect class="tg-kuffert" x="310" y="108" width="4" height="4"/><text x="20" y="152">Skiltefirmaet skal</text><text x="20" y="168">have skrifttypen</text><text x="220" y="152">Kræver ikke</text><text x="220" y="168">skrifttypen</text></svg>`,
          tekst: `Skematisk. Til venstre ligger teksten som skrift, til højre er den konverteret til kurver med punkter i hjørnerne. Kilder: <a href="${VSF}" rel="noopener">Viskilter</a> og <a href="${LTF}" rel="noopener">LaserTryk.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Farver: CMYK og RGB",
        tekst: [
          `LaserTryk.dk trykker med fire CMYK-farver, bortset fra enkelte tryksager med Pantone. Viskilter modtager filer i både CMYK og RGB.`,
          `RGB er skærmens farver, som blandes af rødt, grønt og blåt lys. CMYK er trykkets fire farver: cyan, magenta, gul og sort. Vistaprint forklarer, at farverne derfor ser forskellige ud på skærm og i tryk, og anbefaler at bruge CMYK i designet.`,
          `LaserTryk.dk skriver også, at forskellige trykmetoder kan bruge forskellige farveprofiler, fx CMYK og Pantone, og at det kan give små eller store forskelle i farverne. VanKompagniet beder om logoet og eventuelle retningslinjer for farver og typografi.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="En skærm, der viser farver i RGB, og en varebil, hvor reklamen er trykt i de fire CMYK-farver"><rect class="tg-profil" x="20" y="30" width="130" height="86"/><rect class="tg-hylde" x="75" y="116" width="20" height="14"/><line class="tg-gulvlinje" x1="55" y1="132" x2="115" y2="132"/><rect class="tg-kuffert" x="38" y="56" width="26" height="26"/><rect class="tg-kuffert" x="70" y="56" width="26" height="26"/><rect class="tg-kuffert" x="102" y="56" width="26" height="26"/><text x="51" y="73" text-anchor="middle">R</text><text x="83" y="73" text-anchor="middle">G</text><text x="115" y="73" text-anchor="middle">B</text><line class="tg-pil" x1="165" y1="74" x2="215" y2="74"/><path class="tg-pil" d="M207,68 L215,74 L207,80"/><path class="tg-profil" d="M230,130 L230,98 Q231,92 244,90 L266,62 Q268,60 272,60 L384,60 Q388,60 388,64 L388,130 Z"/><path class="tg-kasse" d="M268,66 L286,66 L286,86 L250,89 Z"/><rect class="tg-modul" x="290" y="84" width="20" height="20"/><rect class="tg-modul" x="314" y="84" width="20" height="20"/><rect class="tg-modul" x="338" y="84" width="20" height="20"/><rect class="tg-modul" x="362" y="84" width="20" height="20"/><text class="tg-modul__tekst" x="300" y="98" text-anchor="middle">C</text><text class="tg-modul__tekst" x="324" y="98" text-anchor="middle">M</text><text class="tg-modul__tekst" x="348" y="98" text-anchor="middle">Y</text><text class="tg-modul__tekst" x="372" y="98" text-anchor="middle">K</text><circle class="tg-hylde" cx="262" cy="132" r="10"/><circle class="tg-hylde" cx="350" cy="132" r="10"/><line class="tg-gulvlinje" x1="222" y1="142" x2="396" y2="142"/><text class="tg-fremhaev" x="85" y="162" text-anchor="middle">Skærm: RGB</text><text class="tg-fremhaev" x="309" y="162" text-anchor="middle">Tryk: CMYK</text><text class="tg-lille" x="20" y="190">FARVERNE SER FORSKELLIGE UD PÅ SKÆRM OG I TRYK</text></svg>`,
          tekst: `Skematisk. Skærmen viser farverne i RGB, mens trykket på bilen laves i CMYK. Kilder: <a href="${LTF}" rel="noopener">LaserTryk.dk</a> og <a href="${VP}" rel="noopener">Vistaprint</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Opløsning efter læseafstand",
        tekst: [
          `LaserTryk.dk bruger 300 ppi som udgangspunkt. Jo længere væk teksten læses, jo lavere opløsning kræver billedet. Ved 5 ppi er hver pixel 0,5 x 0,5 cm.`,
          `Til en folder på 10–50 cm afstand anbefaler LaserTryk.dk 150–300 ppi, til en plakat set fra mindst 50 cm 60–100 ppi og til et banner på 5–20 m afstand 5–50 ppi. Firmaet skriver, at en pixel på 0,5 x 0,5 cm ikke kan ses på 20 meters afstand.`,
          `Ppi står for pixels pr. tomme og beskriver billedet på skærmen, mens dpi står for prikker pr. tomme og beskriver blækket på tryksagen. LaserTryk.dk anbefaler vektorgrafik til logoer og andre grafiske elementer, så problemet med for lav opløsning helt undgås, og nævner unødigt høj opløsning som et andet typisk problem.`
        ],
        figur: {
          type: "soejler",
          enhed: "ppi",
          data: [
            ["Folder, 10–50 cm", 150, "til 300 ppi"],
            ["Plakat, fra 50 cm", 60, "helst 100 ppi"],
            ["Banner, 5 m", 50],
            ["Banner, 20 m", 5]
          ],
          note: `Laveste anbefalede opløsning. Udgangspunktet er 300 ppi. Kilde: <a href="${LTF}" rel="noopener">LaserTryk.dk, trykfiler</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Beskæring og tolerancer",
        tekst: [
          `Beskæring, på engelsk bleed, er et ekstra stykke tryk uden for det færdige format. Det ekstra stykke skæres væk, så motivet går helt ud til kanten.`,
          `LaserTryk.dk lægger 3 mm til på alle sider og holder tekst og grafik mindst 3 mm inden for den færdige kant. Viskilter bruger også 3 mm beskæring og skæremærker på 3 mm pr. side.`
        ],
        punkter: [
          "<strong>Beskæring.</strong> Både Viskilter og LaserTryk.dk bruger 3 mm pr. side. Viskilter bruger også skæremærker på 3 mm pr. side.",
          "<strong>Sikker zone.</strong> LaserTryk.dk holder tekst og grafik mindst 3 mm inden for den færdige kant.",
          "<strong>Tolerancer hos Viskilter.</strong> Tolerancen er ±0,5 mm pr. kantmeter for konturskæring og ±3 mm pr. side for renskæring."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 246" role="img" aria-label="Trykfil med beskæring på 3 mm uden for det færdige format og en sikker zone på 3 mm inden for kanten"><defs><marker id="pil-design-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect class="tg-skinne-tynd" fill="none" x="40" y="30" width="300" height="160"/><rect class="tg-profil" x="52" y="42" width="276" height="136"/><rect class="tg-skinne-tynd" fill="none" x="64" y="54" width="252" height="112"/>
<rect class="tg-modul" x="90" y="78" width="110" height="50"/><text class="tg-fremhaev" x="145" y="108" text-anchor="middle">Logo</text><rect class="tg-hylde" x="90" y="140" width="160" height="8"/>
<g class="tg-maal"><line x1="328" y1="100" x2="340" y2="100" marker-start="url(#pil-design-1)" marker-end="url(#pil-design-1)"/><text x="346" y="104">3 mm</text></g><g class="tg-maal"><line x1="316" y1="140" x2="328" y2="140" marker-start="url(#pil-design-1)" marker-end="url(#pil-design-1)"/><text x="346" y="144">3 mm</text></g>
<text x="20" y="208">Yderst, stiplet: beskæring (bleed)</text><text x="20" y="223">Optrukket: færdigt format</text><text x="20" y="238">Inderst, stiplet: sikker zone til tekst og logo</text></svg>`,
          tekst: `Skematisk, ikke målfast. Beskæringen er 3 mm uden for det færdige format, og den sikre zone er 3 mm inden for kanten. Kilder: <a href="${LTF}" rel="noopener">LaserTryk.dk</a> og <a href="${VSF}" rel="noopener">Viskilter</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tekst og placering",
        tekst: [
          `VanKompagniet bygger oplægget op med firmanavn og logo som de mest fremtrædende elementer og telefon, web og fagområde som supplement. Oplægget tager højde for døre, håndtag og samlinger, så et budskab ikke deles af en dørsamling.`,
          `VanKompagniet skriver, at et logo på bilen ses fra forskellige vinkler og ofte i kort tid. Logo, tekst og kontaktoplysninger skal derfor stå i et tydeligt hierarki, og for mange budskaber gør designet sværere at afkode.`,
          `Montagegruppen kan sætte en QR-kode ind i designet, så kunderne kan scanne den og finde virksomhedens hjemmeside eller kontakte virksomheden direkte.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Varebil set fra siden med firmanavn og logo som det største, telefon, web og fagområde mindre, og ingen tekst hen over dørsamlingerne"><path class="tg-profil" d="M30,170 L30,126 Q32,118 50,115 L84,76 Q87,73 93,73 L370,73 Q376,73 376,79 L376,170 Z"/><path class="tg-kasse" d="M88,80 L118,80 L118,108 L60,111 Z"/><line class="tg-skinne-tynd" x1="130" y1="75" x2="130" y2="168"/><line class="tg-skinne-tynd" x1="230" y1="75" x2="230" y2="168"/><rect class="tg-modul" x="244" y="88" width="46" height="36"/><text class="tg-modul__tekst" x="267" y="110" text-anchor="middle">LOGO</text><rect class="tg-modul" x="296" y="92" width="72" height="28"/><text class="tg-modul__tekst" x="332" y="110" text-anchor="middle">FIRMANAVN</text><text x="244" y="140">Telefon og web</text><text x="244" y="155">Fagområde</text><circle class="tg-hylde" cx="78" cy="172" r="14"/><circle class="tg-hylde" cx="320" cy="172" r="14"/><line class="tg-gulvlinje" x1="10" y1="186" x2="390" y2="186"/><g class="tg-call"><line x1="230" y1="100" x2="180" y2="44"/><circle cx="230" cy="100" r="3"/><text class="tg-call__navn" x="20" y="22">Dørsamling</text><text class="tg-call__under" x="20" y="36">ingen tekst hen over den</text></g><g class="tg-call"><line x1="300" y1="92" x2="300" y2="44"/><circle cx="300" cy="92" r="3"/><text class="tg-call__navn" x="230" y="22">Navn og logo</text><text class="tg-call__under" x="230" y="36">står størst</text></g><text class="tg-lille" x="30" y="210">SKEMATISK · FRONT TIL VENSTRE</text></svg>`,
          tekst: `Skematisk. VanKompagniets opbygning med firmanavn og logo størst og telefon, web og fagområde mindre. Ingen tekst går hen over en dørsamling. Kilde: <a href="${VKB}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor meget af bilen der dækkes",
        tekst: [
          `VanKompagniet deler bilreklame op i tre niveauer. Den mindste løsning er udskåret tekst, firmanavn eller et logo i folie. En delvis foliering dækker udvalgte områder på siderne, bagdørene eller andre flader, og en fuld foliering dækker det meste af det synlige karrosseri.`,
          `Omfanget ændrer designarbejdet og prisen. Trykwerks pakkepriser bygger på udskårne tekster, og skal hele siden pakkes ind i print, koster det mere.`,
          `CPH Wraps priser på fuldfoliering af varevogne er uden dørfalser, kofangere, spejle og håndtag, og logoer og tekster lægges oven i. Mere om fuld foliering i <a href="/til-varebilen/folie/helfoliering-af-varebil/">helfoliering af varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 292" role="img" aria-label="Tre varebiler set fra siden. Den øverste har kun tekst og logo, den midterste har folie på en del af siden, og den nederste er foliet på det meste af karrosseriet."><g transform="translate(20,80)"><path class="tg-rum" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><rect class="tg-modul" x="16" y="-46" width="64" height="12"/><rect class="tg-modul" x="90" y="-54" width="26" height="26"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/></g><g transform="translate(20,176)"><path class="tg-rum" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><rect class="tg-modul" x="2" y="-64" width="104" height="62"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/></g><g transform="translate(20,272)"><path class="tg-modul" d="M0,0 L0,-62 Q0,-66 4,-66 L150,-66 L172,-40 L184,-36 L184,0 Z"/><path class="tg-profil" d="M152,-60 L166,-60 L180,-40 L152,-40 Z"/><circle class="tg-profil" cx="34" cy="0" r="11"/><circle class="tg-profil" cx="150" cy="0" r="11"/><line class="tg-gulvlinje" x1="0" y1="11" x2="200" y2="11"/></g><text class="tg-fremhaev" x="230" y="36">Tekst og logo</text><text x="230" y="52">udskåret folie</text><text class="tg-fremhaev" x="230" y="132">Delvis foliering</text><text x="230" y="148">udvalgte flader</text><text class="tg-fremhaev" x="230" y="228">Fuld foliering</text><text x="230" y="244">det meste af</text><text x="230" y="260">karrosseriet</text></svg>`,
          tekst: `Skematisk. Den fremhævede flade er folien. Kilde: <a href="${VKB}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Designarbejdet koster",
        tekst: [
          `Alle priser på siden er uden moms og fra den 7. oktober 2026. Hos Trykwerk og VanKompagniet er oplægget med i prisen, og CPH Wrap tager 400 kr. pr. halve time for udkastarbejde, medmindre andet er aftalt.`,
          `VanKompagniets standarddekorationer koster 4.995 kr. til en lille varebil, 8.995 kr. til en mellemstor og 12.995 kr. til en stor varebil. Prisen er med oplæg og montering på firmaets værksted.`,
          `Trykwerks mindste logopakke til en varevogn som VW Caddy koster fra 1.650 kr. med layoutforslag, mockup og montering. Vistaprint tilbyder også at designe for kunden, og Viskilter skriver, at alle priser i øjeblikket er dagspriser, så man skal indhente et tilbud.`
        ],
        tabel: {
          kolonner: ["Firma", "Design og oplæg"],
          raekker: [
            ["Trykwerk", "Layoutforslag og mockup med i pakkeprisen"],
            ["VanKompagniet", "Oplæg til godkendelse med i dekorationsprisen"],
            ["Viskilter", "Grafisk illustration ud fra mærke, model, årgang og logo"],
            ["CPH Wrap", "400 kr. pr. halve time"]
          ],
          note: `Kilder: <a href="${TW}" rel="noopener">Trykwerk</a>, <a href="${VKL}" rel="noopener">VanKompagniet</a>, <a href="${VSB}" rel="noopener">Viskilter</a> og <a href="${CPH}" rel="noopener">CPH Wrap</a>, set den 7. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["VanKompagniet, navn og CVR", 495],
            ["Trykwerk, mindste logopakke, varevogn", 1650, "fra"],
            ["VanKompagniet, lille varebil", 4995],
            ["VanKompagniet, mellem varebil", 8995],
            ["VanKompagniet, stor varebil", 12995]
          ],
          note: `VanKompagniets dekorationer til varebiler og Trykwerks logopakke er med oplæg og montering. VanKompagniets side om navn og CVR nævner ikke montering. Kilder: <a href="${VKB}" rel="noopener">VanKompagniet</a> og <a href="${TW}" rel="noopener">Trykwerk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tjek af filen før produktion",
        tekst: [
          `Viskilter tjekker gerne filen før produktion uden beregning, men kunden har stadig selv ansvaret for skjulte fejl. LaserTryk.dk skriver, at over 90 % af fejlene i trykfiler opstår de samme steder.`,
          `Viskilter anbefaler, at filen navngives, så den er let at knytte til ordren, fx med firmanavn, produktionsnavn, produktionstype, størrelse og antal. LaserTryk.dk fraråder at bruge kommentarværktøjerne i Acrobat til opsætning, fordi de ikke kommer med på tryk.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Punkt på Viskilters tjekliste", "Krav"],
          raekker: [
            ["Skrifttyper", "Konverteret til vektor"],
            ["Farverum", "Kun ét farverum"],
            ["Farvedybde", "Korrekt farvedybde"],
            ["Filnavn", "Let at knytte til ordren"],
            ["Størrelse og beskæringstype", "Tjekkes"]
          ],
          note: `Kilde: <a href="${VSF}" rel="noopener">Viskilter, trykklar fil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "En flåde med flere modeller",
        tekst: [
          `VanKompagniet beskriver, at logo, farver og grafisk opbygning kan gå igen på alle biler i flåden, mens kontaktoplysninger eller afdelingsnavne tilpasses den enkelte bil. Forskellige modeller kræver tilpasning af samme design, fordi fladerne er forskellige.`,
          `VanKompagniet skriver, at der ikke findes ét design, der passer til alle varebiler, fordi bilens størrelse, karrosseriets opbygning og de flader, der er til rådighed, påvirker placeringen. Montagegruppen skriver, at firmaet folierer alt fra enkelte køretøjer til hele flåder med samme kvalitet og design på alle biler.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Del af designet", "Kan gå igen på alle biler"],
          raekker: [
            ["Logo", "ja"],
            ["Farver", "ja"],
            ["Grafisk opbygning", "ja"],
            ["Kontaktoplysninger", "Tilpasses den enkelte bil"],
            ["Afdelingsnavne", "Tilpasses den enkelte bil"]
          ],
          note: `Kilde: <a href="${VKB}" rel="noopener">VanKompagniet</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Bilen skal være klar",
        tekst: [
          `Trykwerks priser forudsætter, at bilen er ren og renset for tidligere reklame. CPH Wrap vil have bilen leveret nyvasket uden voks, coating eller lignende og tager ellers et vaskegebyr på 500 kr. for en erhvervsbil.`,
          `Viskilter monterer typisk reklamen i løbet af et par timer, efter at bilen er afleveret. Montagegruppen skriver, at mindre opgaver som dørfoliering kan klares på få timer, mens en fuld wrap på et større køretøj kan tage 1–3 dage.`,
          `Bagefter anbefaler Montagegruppen at vente 48 timer, før bilen vaskes. Håndvask er bedst, men en skånsom vaskehal kan også bruges, og Montagegruppen fraråder højtryksrens direkte mod foliens kanter.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før aflevering", "Bilen vaskes og renses for voks, coating og gammel reklame."],
            ["Samme dag", "Tekst og logo monteres på få timer."],
            ["1–3 dage", "En fuld wrap på et større køretøj."],
            ["48 timer efter", "Bilen kan vaskes."]
          ],
          note: `Kilder: <a href="${TW}" rel="noopener">Trykwerk</a>, <a href="${CPH}" rel="noopener">CPH Wrap</a>, <a href="${VSB}" rel="noopener">Viskilter</a> og <a href="${MG}" rel="noopener">Montagegruppen</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal skiltefirmaet have",
    spoergsmaal_manchet: "Så kan oplægget laves uden ekstra designtimer.",
    spoergsmaal: [
      "Logo som vektorfil, fx .eps eller .pdf.",
      "Skrifttyper eller en PDF med skrifttyperne indlejret.",
      "Firmaets farvekoder og eventuelle retningslinjer for typografi.",
      "Firmanavn, CVR-nummer, telefon og web.",
      "Bilens mærke, model, årgang og størrelse.",
      "Hvilke flader der skal dekoreres, og antal biler."
    ],
    faq: [
      ["Hvilket filformat skal logoet have til bilreklame?", "En vektorfil. Viskilter skærer folie fra .eps eller .pdf og printer fra .pdf eller .jpg."],
      ["Hvorfor ser farven anderledes ud på bilen end på skærmen?", "Skærmen viser RGB, mens trykket laves i CMYK. LaserTryk.dk trykker med fire CMYK-farver."],
      ["Hvad er beskæring?", "Beskæring er et ekstra stykke tryk uden for det færdige format. Viskilter og LaserTryk.dk bruger 3 mm pr. side."],
      ["Hvad koster design af bilreklame?", "Hos Trykwerk og VanKompagniet er oplægget med i prisen. CPH Wrap tager 400 kr. pr. halve time for udkastarbejde."],
      ["Hvor høj opløsning skal et billede have?", "LaserTryk.dk bruger 300 ppi som udgangspunkt og 60–100 ppi for tryk, der ses på mindst 50 cm afstand."],
      ["Hvad gør jeg, hvis skiltefirmaet ikke har min skrifttype?", "Send en PDF med skrifttyperne indlejret, eller konverter teksten til kurver. Viskilter tjekker, at skrifttyperne er konverteret til vektor."],
      ["Hvor store skal bogstaverne i navn og CVR-nummer være?", "Mindst 3 cm høje. VanKompagniets dekoration med firmanavn og CVR-nummer er som standard 3 cm høj."],
      ["Hvor lang tid tager det at montere bilreklame?", "Viskilter monterer typisk reklamen på et par timer. Montagegruppen skriver, at en fuld wrap på et større køretøj kan tage 1–3 dage."]
    ],
    kilder: [
      { navn: "Trykwerk: Autoreklame", url: TW, dato: "2026-10-07" },
      { navn: "Viskilter: Bilreklame", url: VSB, dato: "2026-10-07" },
      { navn: "Viskilter: Trykklar fil", url: VSF, dato: "2026-10-07" },
      { navn: "LaserTryk.dk: Trykfiler", url: LTF, dato: "2026-10-07" },
      { navn: "VanKompagniet: Bilreklame og foliering af varebil", url: VKB, dato: "2026-10-07" },
      { navn: "VanKompagniet: Dekoration – Lille varebil", url: VKL, dato: "2026-10-07" },
      { navn: "VanKompagniet: Dekoration – Firmanavn + CVR nummer", url: VKC, dato: "2026-10-07" },
      { navn: "CPH Wrap: Prisliste", url: CPH, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MG, dato: "2026-10-07" },
      { navn: "Vistaprint: Magnetskilte til bil", url: VP, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 85", url: REG, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["§ 85: navn og CVR-nummer kræves på vare- og lastbiler med tilladt totalvægt på ikke over 4 t registreret til udelukkende erhvervsmæssig brug, i begge sider, synlige og letlæselige, i en farve der klart afviger fra bilens, med mindst 3 cm høje bogstaver og tal, CVR skrevet som »CVR« efterfulgt af 8 cifre; navnet kan erstattes af et logo, der entydigt identificerer virksomheden.", REG],
    ["VanKompagniet: dekoration med firmanavn og CVR-nummer i hvid eller sort tekst koster 495 kr. ekskl. moms; teksten er som standard 3 cm høj og skrifttypen er Calibri.", VKC],
    ["VanKompagniet: standarddekoration koster 4.995 kr. (lille varebil), 8.995 kr. (mellem) og 12.995 kr. (stor) ekskl. moms; der udarbejdes et oplæg ud fra logo og biltype til godkendelse, og prisen er inkl. montage på værkstedet.", VKL],
    ["VanKompagniet: et logo på bilen ses fra forskellige vinkler og ofte i kortere tid, så logo, tekst og kontaktoplysninger skal stå i et tydeligt visuelt hierarki; for mange budskaber gør designet vanskeligere at afkode; oplægget sendes til godkendelse, så fejl kan rettes, før folien monteres.", VKB],
    ["VanKompagniet: bilreklame findes i tre niveauer: udskåret tekst, firmanavn eller logo i folie; delvis foliering af udvalgte områder på sider, bagdøre eller andre flader; fuld foliering af størstedelen af det synlige karrosseri. Der findes ikke ét design, der passer til alle varebiler.", VKB],
    ["VanKompagniet beder om virksomhedens navn og CVR-nummer, logo og eventuelle retningslinjer for farver og typografi, kontaktoplysninger, bilens mærke, model, årgang og størrelse, de flader, der skal dekoreres, og antal biler.", VKB],
    ["Viskilter laver en grafisk illustration ud fra mærke, model, årgang, logo og en kort beskrivelse og monterer typisk bilreklamen i løbet af et par timer efter, at bilen er afleveret; alt er p.t. på dagspriser, og man skal indhente tilbud.", VSB],
    ["Viskilter: PDF højst version 1.4 og EPS højst version 2; filer under 10 MB sendes pr. mail, større via WeTransfer med en separat ordremail; filnavn anbefales som firmanavn_evtproduktionsnavn_produktionstype_størrelse_antal.pdf.", VSF],
    ["Viskilter tjekker filer før produktion uden beregning (font til vektor, kun ét farverum, korrekt farvedybde, navngivning, størrelse og beskæringstype), men ansvaret for skjulte fejl ligger hos kunden.", VSF],
    ["LaserTryk.dk: over 90 % af fejlene i trykfilerne opstår de samme steder; kommentarværktøjer i Acrobat fremgår ikke på tryk; manglende fonte og unødvendig høj opløsning nævnes som problemer; forskellige farveprofiler og farverum (fx CMYK og Pantone) kan give små eller store forskelle i farvegengivelsen.", LTF],
    ["LaserTryk.dk: PPI beskriver pixels pr. tomme på en skærm, DPI fysiske blækprikker pr. tomme på en tryksag; vektorgrafik anbefales til logoer og grafiske elementer for at undgå for lav ppi; en pixel på 0,5 x 0,5 cm kan ikke ses på 20 meters afstand.", LTF],
    ["Vistaprint forklarer, at farveforskelle skyldes, at skærmen viser RGB, mens printet er CMYK, og anbefaler at bruge CMYK i designet; Vistaprint tilbyder at designe for kunden.", VP],
    ["Trykwerk: Logopakke 1 til varevogn (VW Caddy, Peugeot Partner el.lign.) fra 1.650 kr. ekskl. moms inkl. layoutforslag, mockup og montering; priserne forudsætter ren bil uden tidligere reklame, vektoriseret logo og kendte skrifttyper og bygger på udskårne tekster; print af hele siden koster mere.", TW],
    ["CPH Wrap: udkastarbejde faktureres pr. halve time til 400 kr. ekskl. moms, medmindre andet er aftalt; erhvervspriser på fuldfoliering er uden dørfalser og ekskl. kofangere, spejle og håndtag, og logoer og tekster tillægges; bilen skal leveres nyvasket uden voks eller coating for at undgå vaskegebyr på 500 kr. ekskl. moms.", CPH],
    ["Montagegruppen kan integrere QR-koder i foliedesignet; mindre opgaver som dørfoliering klares på få timer, fulde wraps på større køretøjer 1-3 dage; vent 48 timer før vask, håndvask er bedst, skånsom vaskehal kan bruges, undgå højtryksrens direkte mod foliens kanter; firmaet folierer enkelte køretøjer og hele flåder med ensartet kvalitet og design.", MG]
  ]
};
