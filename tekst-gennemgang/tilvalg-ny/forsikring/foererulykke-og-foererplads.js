// Underside /til-varebilen/forsikring/foererulykke-og-foererplads/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GFS = `https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGS = `https://tryg.dk/erhverv/varebilforsikring`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var AB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var KF = `https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/`;
var EAL = `https://www.retsinformation.dk/eli/lta/2025/1080`;
var ASL = `https://www.retsinformation.dk/eli/lta/2025/1279`;

module.exports = {
  id: "forsikring/foererulykke-og-foererplads",
  side: {
    slug: "foererulykke-og-foererplads",
    navn: "Førerplads og førerulykke",
    titel: "Førerpladsdækning og førerulykke på varebil",
    kort: `Ansvarsforsikringen dækker ikke føreren. Sådan virker førerplads, førerdækning og autoulykke, hvem der er dækket, og hvad arbejdsskadeforsikringen betyder for erstatningen.`,
    beskrivelse: `Førerpladsdækning på varebil: hvornår føreren er dækket, erstatningsposter, autoulykke, arbejdsskade og krisehjælp hos GF, Tryg, Gjensidige, If og Codan.`,
    manchet: `Ansvarsforsikringen dækker skader på andre, ikke på den, der kører. Ved en eneulykke står føreren uden erstatning fra bilforsikringen, medmindre der er en førerdækning. Her er, hvad dækningerne betaler, hvem de gælder for, og hvordan de spiller sammen med arbejdsskadeforsikringen.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Passagerer i Autoulykke", "op til 8", "plus føreren hos GF"],
        ["Mén i Autoulykke", "mindst 5 %", "før GF udbetaler erstatning for mén"],
        ["Dobbelterstatning", "fra 30 %", "méngrad hos GF Autoulykke"],
        ["Krisehjælp hos Tryg", "senest 3 uger", "efter hændelsen begynder behandlingen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hullet i bilforsikringen",
        tekst: [
          `Ansvarsforsikringen dækker de skader, bilen gør på andre mennesker og deres ting. Den dækker ikke den, der kører. Købstædernes Forsikring skriver, at ansvaret aldrig dækker skade på bilens fører.`,
          `Kaskoen dækker selve bilen. Kører føreren ind i et træ, betaler kaskoen for varebilen, og ansvaret betaler for træet, hvis det tilhører en anden. Føreren får ingen erstatning fra bilforsikringen, medmindre virksomheden har købt en førerdækning.`,
          `Gjensidige skriver det direkte på sin side om erhvervsbiler. Føreren er først forsikret ved skader, hvis virksomheden køber førerpladsdækning.`
        ],
        punkter: [
          `<strong>Ansvar.</strong> Ansvaret dækker ikke føreren og førerens ting. KF skriver, at ansvaret aldrig dækker skade på bilens fører.`,
          `<strong>Kasko.</strong> Kaskoen dækker bilen. Codan skriver, at kaskoen ikke dækker føreren ved et solouheld.`,
          `<strong>Passagerer.</strong> Passagererne er dækket af ansvarsforsikringen hos fx Codan, Gjensidige og KF.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 255" role="img" aria-label="Varebil, der er kørt ind i et træ. Føreren, træet og varebilen er markeret med den forsikring, der dækker."><rect class="tg-hylde" x="330" y="90" width="16" height="127"/><circle class="tg-profil" cx="338" cy="72" r="44"/><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><circle class="tg-kuffert" cx="270" cy="104" r="7"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="270" y1="104" x2="195" y2="42"/><circle cx="270" cy="104" r="3"/><text class="tg-call__navn" x="5" y="24">Føreren</text><text class="tg-call__under" x="5" y="38">førerplads eller førerdækning</text></g><g class="tg-call"><line x1="338" y1="190" x2="338" y2="222"/><circle cx="338" cy="190" r="3"/><text class="tg-call__navn" x="395" y="236" text-anchor="end">Andres ting</text><text class="tg-call__under" x="395" y="250" text-anchor="end">ansvarsforsikring</text></g><g class="tg-call"><line x1="150" y1="130" x2="150" y2="222"/><circle cx="150" cy="130" r="3"/><text class="tg-call__navn" x="5" y="236">Varebilen</text><text class="tg-call__under" x="5" y="250">kasko</text></g></svg>`,
          tekst: `Skematisk eneulykke. Kilder: <a href="${GF}" rel="noopener">GF, punkt 3 og 7</a> og <a href="${CODAN}" rel="noopener">Codan</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 3.2</a>, <a href="${KF}" rel="noopener">KF</a>, <a href="${CODAN}" rel="noopener">Codan</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 4. oktober 2026. Gjensidiges formulering om førerpladsdækning er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Føreren og passagererne",
        tekst: [
          `Passagererne står bedre end føreren. Kommer en kollega på passagersædet til skade, dækker bilens egen ansvarsforsikring hos fx Codan, Gjensidige og Købstædernes Forsikring. Gjensidige skriver, at ansvaret dækker skader, bilen forårsager på passagerer og på mennesker uden for bilen, fx cyklister og fodgængere.`,
          `GF sælger desuden tilvalget Autoulykke, som dækker både føreren og op til 8 passagerer, når skaden skyldes et kørselsuheld med den forsikrede bil. Det kan være relevant i en mandskabsvogn, hvor flere kører med ud til pladsen. Reglerne for mandskabsvogne står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Varebil set ovenfra med tre forsæder. Førersædet er fremhævet og dækkes af førerplads eller førerdækning. De to passagersæder dækkes af ansvarsforsikringen og hos GF også af Autoulykke."><rect class="tg-rum" x="30" y="50" width="300" height="120"/><path class="tg-rum" d="M330,58 L362,70 L362,150 L330,162 Z"/><line class="tg-skillevaeg" x1="250" y1="50" x2="250" y2="170"/><rect class="tg-profil" x="60" y="44" width="40" height="8"/><rect class="tg-profil" x="60" y="168" width="40" height="8"/><rect class="tg-profil" x="282" y="44" width="40" height="8"/><rect class="tg-profil" x="282" y="168" width="40" height="8"/><text class="tg-lille" x="140" y="114" text-anchor="middle">LASTRUM</text><rect class="tg-kuffert" x="262" y="60" width="32" height="28"/><circle class="tg-profil" cx="310" cy="74" r="9"/><rect class="tg-kasse" x="262" y="96" width="32" height="28"/><rect class="tg-kasse" x="262" y="132" width="32" height="28"/><g class="tg-call"><line x1="278" y1="74" x2="330" y2="34"/><circle cx="278" cy="74" r="3"/><text class="tg-call__navn" x="395" y="16" text-anchor="end">Føreren</text><text class="tg-call__under" x="395" y="30" text-anchor="end">førerplads eller førerdækning</text></g><g class="tg-call"><line x1="278" y1="146" x2="330" y2="186"/><circle cx="278" cy="146" r="3"/><text class="tg-call__navn" x="395" y="198" text-anchor="end">Passagererne</text><text class="tg-call__under" x="395" y="212" text-anchor="end">ansvarsforsikring, GF Autoulykke</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${KF}" rel="noopener">Købstædernes Forsikring</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 7.1 og 8.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår førerdækningen betaler",
        tekst: [
          `Førerdækningen er lavet til de ulykker, hvor ingen andre kan gøres ansvarlige. If beskriver det som en eneulykke, altså en skade, hvor der ikke er en ansvarlig modpart. Købstædernes Forsikring skriver kørselsuheld uden modpart.`,
          `Hos GF skal den forsikrede bil være det eneste motordrevne køretøj i uheldet. Gjensidige nævner soloulykker og skader under ind- og udstigning som de to situationer, dækningen er til.`
        ],
        punkter: [
          `<strong>Eneulykke.</strong> GF dækker, når den forsikrede bil er det eneste motordrevne køretøj i uheldet.`,
          `<strong>Ind- og udstigning.</strong> GF og Gjensidige regner et uheld ved ind- og udstigning som et kørselsuheld.`,
          `<strong>Ingen ansvarlig modpart.</strong> Er der en ansvarlig skadevolder, betaler skadevolderens ansvarsforsikring.`,
          `<strong>Difference.</strong> Tryg betaler forskellen, når arbejdsskadeerstatning, udenlandske regler eller skyldfordeling giver mindre.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 7.1-7.2</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 4. oktober 2026, og <a href="${IF}" rel="noopener">If</a> og <a href="${KF}" rel="noopener">KF</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvem betaler, når føreren kommer til skade",
        tekst: [
          `Svaret afhænger af to spørgsmål. Er der en modpart, der er ansvarlig for uheldet, og skete uheldet, mens føreren var på arbejde?`,
          `Er en anden ansvarlig, betaler modpartens ansvarsforsikring. Tryg betaler forskellen, hvis erstatningen fra modparten bliver nedsat, fordi skylden er delt. Det samme gælder, når uheldet sker i et land, hvor erstatningen bliver lavere end efter Trygs førerdækning.`,
          `Er der ingen ansvarlig modpart, betaler førerdækningen, hvis virksomheden har købt den. Er skaden også en arbejdsskade, betaler arbejdsskadeforsikringen sin del, og førerdækningen hos GF og Tryg betaler resten.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Beslutningstræ. Er der en ansvarlig modpart, betaler modpartens ansvarsforsikring, og Tryg betaler forskellen ved delt skyld. Er der ingen ansvarlig modpart, betaler førerdækningen, hvis den er købt, og en arbejdsskadeerstatning trækkes fra."><defs><marker id="pil-foererulykke-og-foererplads-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="60" y="6" width="280" height="46"/><text x="200" y="25" text-anchor="middle">Føreren er kommet til skade.</text><text class="tg-fremhaev" x="200" y="43" text-anchor="middle">Er der en ansvarlig modpart?</text><line class="tg-pil" x1="140" y1="52" x2="100" y2="86" marker-end="url(#pil-foererulykke-og-foererplads-1)"/><line class="tg-pil" x1="260" y1="52" x2="300" y2="86" marker-end="url(#pil-foererulykke-og-foererplads-1)"/><text x="108" y="72" text-anchor="end">Ja</text><text x="292" y="72">Nej</text><rect class="tg-kasse" x="5" y="90" width="180" height="62"/><text x="95" y="110" text-anchor="middle">Modpartens</text><text x="95" y="126" text-anchor="middle">ansvarsforsikring</text><text x="95" y="142" text-anchor="middle">betaler</text><text x="95" y="174" text-anchor="middle">Tryg: forskellen ved</text><text x="95" y="190" text-anchor="middle">delt skyld</text><rect class="tg-modul" x="215" y="90" width="180" height="62"/><text class="tg-modul__tekst" x="305" y="110" text-anchor="middle">FØRERDÆKNINGEN</text><text class="tg-modul__tekst" x="305" y="126" text-anchor="middle">BETALER, HVIS</text><text class="tg-modul__tekst" x="305" y="142" text-anchor="middle">DEN ER KØBT</text><line class="tg-skinne-tynd" x1="305" y1="152" x2="305" y2="178"/><rect class="tg-kasse" x="215" y="178" width="180" height="62"/><text x="305" y="198" text-anchor="middle">Arbejdsskade?</text><text x="305" y="214" text-anchor="middle">Erstatningen derfra</text><text x="305" y="230" text-anchor="middle">trækkes fra</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 4.2</a> og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 7.2 og 7.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Erstatningsposterne",
        tekst: [
          `Førerplads og førerdækning beregnes efter erstatningsansvarsloven, som ved en ansvarsskade. Autoulykke betaler en procent af en fast sum.`,
          `Erstatningsansvarsloven deler erstatningen op i poster. Tabt arbejdsfortjeneste betales, indtil den tilskadekomne kan begynde at arbejde igen. Svie og smerte er en godtgørelse for hver dag, den tilskadekomne er syg.`,
          `Har skaden varige følger, kommer to poster til. Godtgørelse for varigt mén beregnes ud fra skadens medicinske art og omfang og de ulemper, den giver i hverdagen. Erstatning for tab af erhvervsevne dækker en varig nedsættelse af evnen til at tjene penge ved arbejde.`,
          `Tryg nævner også begravelseshjælp og rimelige advokatomkostninger i førerdækningen. Hos GF går erstatningen for tab af forsørger til ægtefælle eller samlever og til børn, og den omfatter begravelsesudgifter.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Post", "GF Førerplads", "Tryg Førerdækning", "GF Autoulykke"],
          raekker: [
            ["Tabt arbejdsfortjeneste", "ja", "ja", "nej"],
            ["Svie og smerte", "ja", "ja", "nej"],
            ["Varigt mén", "ja", "ja", "Fra 5 %"],
            ["Tab af erhvervsevne", "ja", "ja", "nej"],
            ["Behandling og medicin", "ja", "ja", "nej"],
            ["Tandskade", "ja", "ja", "nej"],
            ["Død", "Forsørgertab", "Forsørgertab", "Dødsfaldssum"],
            ["Rimelige advokatomkostninger", "ikke nævnt", "ja", "ikke nævnt"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 7 og 8</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 4. oktober 2026. Rækken om advokatomkostninger er set den 7. oktober 2026.`
        },
        efter: [
          `Kilde til posterne: <a href="${EAL}" rel="noopener">Erstatningsansvarsloven, LBK nr. 1080 af 30/08/2025, §§ 1-5</a>, set den 7. oktober 2026. Beløbene i loven reguleres hvert år.`
        ]
      },
      {
        overskrift: "Autoulykke hos GF",
        tekst: [
          `Autoulykke virker som en ulykkesforsikring for dem, der sidder i bilen. GF definerer et ulykkestilfælde som en pludselig, udefra kommende påvirkning af kroppen, som giver en skade, der kan påvises.`,
          `Erstatningen for mén er så mange procent af forsikringssummen, som méngraden udgør. Dør den tilskadekomne af ulykken inden for et år, udbetales dødsfaldssummen til ægtefælle, registreret partner eller samlever eller til umyndige børn. Summen bliver sat ned med en eventuel ménerstatning for samme ulykke.`,
          `Autoulykke betaler ikke for ting som briller, og heller ikke for medicin, behandling, transport og tandskader. Sygdom, slid og ildebefindende er også undtaget.`
        ],
        punkter: [
          `<strong>Hvem.</strong> Autoulykke dækker føreren og op til 8 passagerer.`,
          `<strong>Sum.</strong> Erstatningen beregnes af forsikringssummen i policen.`,
          `<strong>Mén.</strong> Erstatning for mén udbetales ved en méngrad på mindst 5 %. Ved 30 % eller mere udbetales dobbelterstatning.`,
          `<strong>Alder.</strong> Fra 75 år beregnes erstatning af 50 % af summen ved død og mén.`,
          `<strong>Undtaget.</strong> Kørsel med gods mod betaling og erhvervsmæssig personbefordring er ikke dækket.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="Skala for méngrad fra 0 til 100 procent. Fra 5 procent udbetaler GF erstatning for mén, og fra 30 procent udbetales dobbelterstatning."><text class="tg-fremhaev" x="0" y="16">Méngrad hos GF Autoulykke</text><text x="38" y="52" text-anchor="middle">5 %</text><text x="128" y="52" text-anchor="middle">30 %</text><rect class="tg-profil" x="20" y="60" width="360" height="24"/><rect class="tg-kasse" x="38" y="60" width="90" height="24"/><text x="46" y="76">erstatning</text><rect class="tg-modul" x="128" y="60" width="252" height="24"/><text class="tg-modul__tekst" x="138" y="76">DOBBELTERSTATNING</text><text x="20" y="102">0 %</text><text x="380" y="102" text-anchor="end">100 %</text><text x="0" y="132">Under 5 %: ingen erstatning for mén</text><text x="0" y="150">Fra 75 år: 50 % af summen ved død og mén</text></svg>`,
          tekst: `Skematisk. Hvornår GF's Autoulykke udbetaler erstatning for mén.`
        },
        efter: [
          `Kilde: <a href="${GF}" rel="noopener">GF, punkt 8</a>, set den 4. oktober 2026. Definitionen, dødsfaldssummen og undtagelserne står i punkt 8.2-8.4, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Førerplads eller autoulykke",
        tekst: [
          `De to dækninger regner erstatningen ud på hver sin måde. Førerplads erstatter det tab, føreren faktisk har, efter erstatningsansvarsloven. Autoulykke betaler en procentdel af en fast sum, uanset om føreren har mistet indtægt.`,
          `Bliver føreren sygemeldt i en periode uden varige følger, betaler førerpladsen tabt arbejdsfortjeneste og svie og smerte. Autoulykke betaler ikke noget i den situation, fordi den kun dækker mén på mindst 5 % og død.`
        ],
        kort: [
          ["Førerplads", "Dækker kun føreren og regner erstatningen ud efter erstatningsansvarsloven. Arbejdsskadeerstatning trækkes fra."],
          ["Autoulykke", "Dækker føreren og op til 8 passagerer og betaler en procent af summen i policen ved mén og død."]
        ],
        efter: [
          `Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 7 og 8</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Arbejdsskade og ulykkesforsikring",
        tekst: [
          `Kører føreren i arbejdstiden, kan skaden også være en arbejdsskade. Selskaberne trækker den erstatning fra.`,
          `Efter arbejdsskadesikringsloven har enhver arbejdsgiver pligt til at sikre sine ansatte. Kommer en ansat til skade under kørsel i arbejdet, kan arbejdsskadeforsikringen derfor betale en del af erstatningen, og førerdækningen betaler resten. GF og Tryg trækker også erstatning efter loven om erstatning til skadelidte værnepligtige fra.`,
          `En ulykkesforsikring behandles forskelligt. Hos GF bliver der ikke trukket noget, så begge erstatninger udbetales fuldt ud. Tryg modregner udbetalinger fra en ulykkesforsikring til behandling, medicin og transport til behandling, men ikke andre udbetalinger.`
        ],
        tabel: {
          kolonner: ["Anden erstatning", "GF Førerplads", "Tryg Førerdækning"],
          raekker: [
            ["Arbejdsskadeforsikring", "Trækkes fra", "Trækkes fra"],
            ["Ulykkesforsikring, behandlingsudgifter", "Trækkes ikke fra", "Modregnes"],
            ["Ulykkesforsikring, øvrige udbetalinger", "Trækkes ikke fra", "Modregnes ikke"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 7.5</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 156" role="img" aria-label="To bjælker. Den øverste er hele erstatningen efter erstatningsansvarsloven. Den nederste viser, at arbejdsskadeforsikringen betaler en del, og førerdækningen betaler resten."><text class="tg-fremhaev" x="0" y="16">Erstatning efter erstatningsansvarsloven</text><rect class="tg-profil" x="0" y="24" width="380" height="28"/><text class="tg-fremhaev" x="0" y="84">Sådan betales den</text><rect class="tg-kasse" x="0" y="92" width="200" height="28"/><text x="10" y="110">arbejdsskadeforsikring</text><rect class="tg-modul" x="200" y="92" width="180" height="28"/><text class="tg-modul__tekst" x="210" y="110">FØRERDÆKNING</text><line class="tg-skinne-tynd" x1="380" y1="16" x2="380" y2="128"/><text class="tg-lille" x="0" y="148">ARBEJDSSKADEN TRÆKKES FRA HOS GF OG TRYG</text></svg>`,
          tekst: `Skematisk. Førerdækningen hos GF og Tryg betaler kun den del, som arbejdsskadeforsikringen ikke dækker.`
        },
        efter: [
          `Kilder: <a href="${ASL}" rel="noopener">Arbejdsskadesikringsloven, LBK nr. 1279 af 04/11/2025, § 48</a>, <a href="${GF}" rel="noopener">GF, punkt 7.5</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvem er dækket",
        tekst: [
          `Tryg skriver, at førerdækningen alene omfatter forsikringstageren og de ansatte, når føreren er i lovlig besiddelse af varebilen. Låner virksomheden bilen ud til en, der ikke er ansat, er føreren ikke dækket hos Tryg.`,
          `GF dækker den, der kører med forsikringstagerens accept. Dækningen gælder ikke en fører, der bruger bilen uden lov, og heller ikke folk fra et værksted, der har bilen til reparation, service, salg eller opbevaring.`,
          `Arbejdsskadesikringsloven giver kun arbejdsgiveren pligt til at sikre de ansatte, mens selvstændige selv kan vælge at sikre sig efter loven. Ejeren af en enkeltmandsvirksomhed har altså kun en arbejdsskadeforsikring, hvis ejeren selv har tegnet den.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Dækningen gælder forsikringstageren og de ansatte, når føreren er i lovlig besiddelse af varebilen.`,
          `<strong>GF.</strong> Dækningen gælder ikke en fører, der bruger bilen uden forsikringstagerens accept, og heller ikke værksteder, der har bilen til reparation, salg eller opbevaring.`,
          `<strong>Alm. Brand.</strong> Førerulykke dækker også i en lånt bil.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Fører", "Arbejdsskadeforsikring", "Tryg Førerdækning", "GF Førerplads"],
          raekker: [
            ["Ansat, der kører i arbejdet", "ja", "ja", "ja"],
            ["Ejeren af en enkeltmandsvirksomhed", "Kun hvis ejeren selv sikrer sig", "ja", "ja"],
            ["Anden fører, der må låne bilen", "–", "nej", "ja"],
            ["Fører uden lov til at bruge bilen", "–", "nej", "nej"],
            ["Mekaniker på værkstedet", "–", "nej", "nej"]
          ],
          note: `Arbejdsskadeforsikringen dækker ulykker i arbejdet, ikke selve bilen. Kilder: <a href="${ASL}" rel="noopener">Arbejdsskadesikringsloven, § 48, stk. 1-2</a>, <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 2 og 4.2</a> og <a href="${GF}" rel="noopener">GF, punkt 7.1</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 2</a>, <a href="${GF}" rel="noopener">GF, punkt 7.1</a> og <a href="${AB}" rel="noopener">Alm. Brand</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Undtagelser",
        tekst: [
          `Undtagelserne ligner dem i kaskoen. Føreren skal være ædru, have kørekort og køre bilen lovligt, og skaden må ikke skyldes forsæt eller grov uagtsomhed.`,
          `Tryg dækker ikke en skade ved privat brug af varebilen, når forsikringstageren er en virksomhed. Hvornår en varebil på gule plader må bruges privat, står i <a href="/haandbogen/hvad-maa-du-koere-i-en-varebil-paa-gule-plader/">hvad du må køre i en varebil på gule plader</a>.`
        ],
        punkter: [
          `Føreren er påvirket af alkohol, medicin eller euforiserende stoffer.`,
          `Forsæt eller grov uagtsomhed.`,
          `Kørsel uden lovbefalet kørekort, medmindre manglende kørefærdighed ikke er årsagen.`,
          `Udlejning og motorløb.`,
          `Hos GF også skader fra eksisterende sygdom eller lægelige indgreb.`,
          `Hos Tryg også privat brug af varebilen, når forsikringstageren er en virksomhed.`
        ],
        punkt_ikon: "nej",
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 7.3</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Navne og pakker",
        tekst: [
          `Dækningen hedder noget forskelligt hos hvert selskab, men den gør det samme. Hos nogle følger den med i pakken, og hos andre skal den købes til.`,
          `Hos Tryg er førerdækning og krisehjælp med i alle tre varebilspakker. If sælger førerpladsdækning som tilvalg til alle tre niveauer, også til den rene ansvarsforsikring. Hos Gjensidige er førerpladsdækningen et tilvalg til både ansvar og kasko.`
        ],
        tabel: {
          kolonner: ["Selskab", "Navn", "Med i"],
          raekker: [
            ["Alm. Brand", "Førerulykke", "Ansvar, Kasko og Superkasko"],
            ["Codan", "Førerplads", "Tilvalg"],
            ["GF", "Førerplads og Autoulykke", "Tilvalg"],
            ["Gjensidige", "Førerpladsdækning", "Tilvalg til ansvar og kasko"],
            ["If", "Førerpladsdækning", "Tilvalg til Ansvar, Kasko og Super"],
            ["Tryg", "Førerdækning og krisehjælp", "Basis, Udvidet og Super"]
          ],
          note: `Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${TRYGS}" rel="noopener">Tryg</a>, set den 4. oktober 2026, og <a href="${IF}" rel="noopener">If</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krisehjælp",
        tekst: [
          `Et alvorligt uheld, et røveri eller trusler under kørslen kan give en psykisk krise, også når føreren slipper uden fysiske skader. Tryg og If har krisehjælp med i varebilforsikringen.`,
          `Hos Tryg skal du eller føreren kontakte Tryg, før behandlingen begynder. Tryg finder en psykolog i sit eget netværk i Danmark, og behandlingen foregår over telefonen, hvis føreren er i udlandet.`,
          `Tryg dækker ikke krisehjælp, som føreren kan få fra en anden forsikring for samme hændelse. Transport til psykologen er heller ikke dækket, medmindre føreren af fysiske eller psykiske grunde ikke kan komme frem selv.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Dækningen giver psykologisk krisehjælp efter en alvorlig ulykke, røveri, overfald eller trusler under kørsel. Behandlingen begynder senest 3 uger efter og afsluttes inden 6 måneder.`,
          `<strong>If.</strong> Kortvarig psykologterapi efter trafikulykke, røveri eller overfald er med i varebilforsikringen.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Hændelsen", "Føreren kommer ud for en alvorlig ulykke, et røveri, et overfald eller trusler under kørsel."],
            ["Før behandlingen", "Du eller føreren kontakter Tryg, som finder en psykolog."],
            ["Senest 3 uger efter", "Behandlingen hos Tryg begynder."],
            ["Inden 6 måneder", "Behandlingen er afsluttet."]
          ],
          note: `Tidslinjen viser Trygs krisehjælp. Kilde: <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a>, set den 4. oktober 2026. Punktet om kontakt før behandlingen er set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 4.2</a> og <a href="${IF}" rel="noopener">If</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Når føreren er kommet til skade",
        tekst: [
          `En personskade på føreren anmeldes til bilforsikringen som andre skader, uden ophold. Er skaden sket i arbejdet, er den også en sag for arbejdsskadeforsikringen, og erstatningen derfra trækkes fra i førerdækningen. Fremgangsmåden står i <a href="/til-varebilen/forsikring/skadeanmeldelse/">skadeanmeldelse</a>.`,
          `GF skriver i betingelserne til Autoulykke, at den tilskadekomne skal være under nødvendig behandling hos en læge og følge lægens anvisninger. GF må hente oplysninger hos dem, der har behandlet den tilskadekomne, og kan bede en læge om at undersøge personen. GF betaler de attester og undersøgelser, selskabet selv forlanger, men ikke transporten.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Anmeld skaden", "Du anmelder personskaden til bilforsikringen. Skete skaden i arbejdet, er den også en sag for arbejdsskadeforsikringen."],
            ["Lægebehandling", "Hos GF Autoulykke skal den tilskadekomne være under nødvendig behandling og følge lægens anvisninger."],
            ["Oplysninger", "Selskabet henter oplysninger hos lægerne og betaler de attester, det selv forlanger."],
            ["Méngraden", "Selskabet fastsætter méngraden. Er du uenig, kan sagen forelægges Arbejdsmarkedets Erhvervssikring."]
          ]
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 7.5, 8.5 og 8.7</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 13</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Genoptagelse og mén",
        tekst: [
          `Hos GF kan en afsluttet sag genoptages, hvis forholdene har ændret sig væsentligt. Uenighed om méngraden på autoulykke kan indbringes for Arbejdsmarkedets Erhvervssikring. Den, der ønsker sagen forelagt, betaler, men GF betaler, hvis afgørelsen ændres til fordel for den sikrede.`,
          `Ved Autoulykke kan méngraden kun sættes op, hvis helbredet er blevet medicinsk dårligere. En ny udgave af Arbejdsmarkedets Erhvervssikrings méntabel er ikke nok i sig selv.`,
          `Tryg har samme ordning for førerdækningen, og her gælder den både méngraden og vurderingen af erhvervsevnetabet. Den, der vil have sagen forelagt, betaler også udgifter til nye lægeerklæringer, men Tryg betaler altid, hvis afgørelsen bliver ændret til din fordel. Trygs summer følger reguleringen af erstatningsansvarslovens beløb.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 7.6 og 8.7</a>, set den 4. oktober 2026, og <a href="${GF}" rel="noopener">GF, punkt 8.6</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 13</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så passer førerdækningen til dem, der kører.",
    spoergsmaal: [
      "Hvem der kører bilerne, og om de er ansatte.",
      "Om ejeren selv kører, og om ejeren har en frivillig arbejdsskadeforsikring.",
      "Om bilerne bruges privat.",
      "Om der køres med passagerer, og hvor mange.",
      "Hvilken arbejdsskade- og ulykkesforsikring virksomheden har.",
      "Om bilerne kører gods mod betaling.",
      "Om bilerne lånes ud til andre end de ansatte."
    ],
    faq: [
      ["Er føreren dækket af bilforsikringen?", "Ikke af ansvar og kasko. Føreren dækkes af en førerplads- eller førerdækning, når der ikke er en ansvarlig modpart."],
      ["Hvad er forskellen på førerplads og autoulykke?", "Førerplads betaler erstatning efter erstatningsansvarsloven. Autoulykke hos GF betaler en procent af en fast sum og dækker også op til 8 passagerer."],
      ["Betaler førerpladsdækningen, hvis skaden også er en arbejdsskade?", "Ja, men erstatningen fra arbejdsskadeforsikringen trækkes fra hos både GF og Tryg."],
      ["Er passagererne dækket?", "Ja, af ansvarsforsikringen hos fx Codan, Gjensidige og KF."],
      ["Hvilke pakker har førerdækning med?", "Det har Trygs tre varebilspakker og Alm. Brands Ansvar, Kasko og Superkasko. Hos Codan, GF, Gjensidige og If er det et tilvalg."],
      ["Er ejeren af en enkeltmandsvirksomhed dækket af en arbejdsskadeforsikring?", "Kun hvis ejeren selv har sikret sig. Arbejdsskadesikringsloven giver arbejdsgiveren pligt til at sikre de ansatte, mens selvstændige kan vælge at sikre sig selv. Hos Tryg er forsikringstageren omfattet af førerdækningen."],
      ["Er en kollega, der låner bilen, dækket af førerdækningen?", "Hos Tryg gælder førerdækningen kun forsikringstageren og de ansatte. Hos GF er den, der kører med forsikringstagerens accept, dækket af Førerplads."],
      ["Dækker Autoulykke briller og tandskader?", "Nej. GF's Autoulykke dækker ikke ting som briller, og heller ikke medicin, behandling og tandskader."]
    ],
    kilder: [
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring til firmabiler", url: GFS, dato: "2026-10-04" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYGS, dato: "2026-10-04" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: AB, dato: "2026-10-04" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "Købstædernes Forsikring: Motorforsikring (erhverv)", url: KF, dato: "2026-10-07" },
      { navn: "Retsinformation: Erstatningsansvarsloven, LBK nr. 1080 af 30/08/2025", url: EAL, dato: "2026-10-07" },
      { navn: "Retsinformation: Arbejdsskadesikringsloven, LBK nr. 1279 af 04/11/2025", url: ASL, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Gjensidige: føreren af bilen er først forsikret ved skader, hvis virksomheden tilkøber førerpladsdækning; ansvaret dækker skader, bilen forårsager på passagerer og andre mennesker uden for bilen, fx cyklister eller fodgængere; førerpladsdækningen dækker soloulykker og ind- og udstigning.", GJ],
    ["Købstædernes Forsikring: ansvarsforsikringen dækker også personskader på passagerer i bilen, men aldrig skade på bilens fører; førerpladsdækning sikrer føreren erstatning for personskade ved kørselsuheld uden modpart.", KF],
    ["If: førerpladsdækningen dækker føreren ved en eneulykke, dvs. skader, hvor der ikke er en ansvarlig modpart, og kan vælges som tilvalg til Ansvar, Kasko og Super.", IF],
    ["GF Autoulykke (punkt 8.1-8.3): dækker personskade på føreren og op til 8 passagerer ved kørselsuheld med den forsikrede bil; ulykkestilfælde er en tilfældig, pludselig, udefra kommende indvirkning på legemet med påviselig beskadigelse; ikke dækket er bl.a. skade på ting som briller, medicin, hjælpemidler, behandling og befordring, tandskader, sygdom, slid og ildebefindende.", GF],
    ["GF Autoulykke (punkt 8.4): menerstatning er så mange procent af forsikringssummen, som mengraden udgør; dør sikrede som direkte følge inden for et år, udbetales dødsfaldssummen til ægtefælle, registreret partner eller samlever eller umyndige børn, reduceret med tidligere menerstatning for samme ulykke.", GF],
    ["GF Førerplads (punkt 7.4-7.5): tab af forsørger omfatter begravelsesudgifter og udbetales til ægtefælle eller samlever og børn; erstatning fra arbejdsskadeforsikring eller efter lov om erstatning til skadelidte værnepligtige trækkes fra; erstatning fra ulykkesforsikring trækkes ikke fra.", GF],
    ["Tryg Førerdækning (afsnit 4.2): dækker også begravelseshjælp og rimelige advokatomkostninger; ved skade i udlandet med lavere erstatning efter landets regler og ved nedsat erstatning på grund af skyldfordeling betales differencen; erstatning efter lov om erstatning til skadelidte værnepligtige trækkes fra.", TRYG],
    ["Tryg (afsnit 2): førerdækningen omfatter alene forsikringstageren og de ansatte som fører, når føreren er i lovlig besiddelse af varebilen.", TRYG],
    ["Erstatningsansvarsloven §§ 1-5: erstatning for tabt arbejdsfortjeneste, helbredelsesudgifter og andet tab samt godtgørelse for svie og smerte; ved varige følger godtgørelse for varigt mén og erstatning for tab af erhvervsevne; tabt arbejdsfortjeneste ydes, indtil skadelidte kan begynde at arbejde igen; svie og smerte ydes for hver dag, skadelidte er syg; mén beregnes ud fra skadens medicinske art og omfang og ulemper i den personlige livsførelse; erhvervsevnetab er varig nedsættelse af evnen til at skaffe sig indtægt ved arbejde.", EAL],
    ["Arbejdsskadesikringsloven § 48, stk. 1-2: enhver arbejdsgiver har sikringspligt for sine ansatte; selvstændige erhvervsdrivende og medarbejdende ægtefæller kan sikre egen person efter loven.", ASL],
    ["Tryg Krisehjælp (afsnit 4.2): du eller føreren skal kontakte Tryg, før behandlingen startes; Tryg finder en psykolog i sit netværk; ved behov i udlandet foregår behandlingen pr. telefon; ikke dækket, hvis der er mulighed for krisehjælp fra anden forsikring, og transport dækkes kun, hvis føreren af fysiske eller psykiske årsager ikke selv kan komme frem.", TRYG],
    ["GF Autoulykke (punkt 8.5): forsikrede skal være under nødvendig lægebehandling og følge lægens forskrifter; GF kan indhente oplysninger hos behandlere og lade en læge undersøge forsikrede; GF betaler attester og undersøgelser, GF forlanger, men ikke transport.", GF],
    ["GF Autoulykke (punkt 8.6): ved genoptagelse kan mengraden ikke ændres alene på grund af en ændring i Arbejdsmarkedets Erhvervssikrings mentabel, kun ved medicinsk forværring.", GF],
    ["Tryg (afsnit 13): uenighed om méngrad og erhvervsevnetab kan forelægges Arbejdsmarkedets Erhvervssikring; den part, der ønsker det, betaler, herunder yderligere lægeerklæringer, men Tryg betaler altid, hvis afgørelsen ændres til forsikredes fordel; erstatningssummer på Førerdækning og krisehjælp reguleres som erstatningsansvarslovens summer.", TRYG]
  ]
};
