// Underside /til-varebilen/forsikring/flaadeforsikring/ (07-10-2026)
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGF = `https://tryg.dk/erhverv/fladeforsikring`;
var TRYGFB = `https://tryg.dk/dokumenter/erhverv/betingelser-autoforsikring.pdf`;
var TRYGFP = `https://tryg.dk/dokumenter/erhverv/autoforsikring-faellespolice.pdf`;
var TRYGV = `https://tryg.dk/erhverv/varebilforsikring`;
var TRYGG = `https://tryg.dk/dokumenter/erhverv/fakta-om-tryghedsgaranti.pdf`;
var AY360 = `https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/360-graders-daekning/`;
var AY = `https://www.ayvens.com/da-dk/leasing-med-ayvens/flaade-administration/loesninger/forsikring-hos-ayvens/`;
var GJP = `https://www.gjensidige.dk/erhverv/pris-forsikring`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var IFG = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/alt-du-skal-vide-om-bilforsikring`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var ALMB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var BEK = `https://www.retsinformation.dk/eli/lta/2023/1627`;
var TOPA = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;

module.exports = {
  id: "forsikring/flaadeforsikring",
  side: {
    slug: "flaadeforsikring",
    navn: "Flådeforsikring",
    titel: "Flådeforsikring til varebiler og firmabiler",
    kort: `Flere biler på én aftale: hvad selskaberne og leasingselskaberne tilbyder, hvordan prisgrupper og pristrin virker, og hvad skaderne betyder for prisen.`,
    beskrivelse: `Flådeforsikring: hele vognparken på én aftale. Prisgrupper, pristrin efter skader, kørsel ud over det aftalte, GAP-dækning og tilbagekøb af skader.`,
    manchet: `En flådeforsikring samler virksomhedens biler på én aftale. Bilerne deles i grupper med hver sin pris og selvrisiko, og selskaberne prissætter aftalen individuelt. Her er det, Tryg, GF, Gjensidige, If og Ayvens selv skriver om dækning, pris og skadehistorik.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Fælles forsikring, Tryg", "20 varebiler", "eller flere i de fleste tilfælde"],
        ["Forsikringens andel, Ayvens", "10-15 %", "af de samlede flådeomkostninger"],
        ["Øverste pristrin, GF", "Trin 9", "Superelite"],
        ["Kørsel ud over aftalen, GF", "højst 42.363 kr.", "mindre i erstatning pr. skade (basisår 2023)"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad en flådeforsikring er",
        tekst: [
          `Tryg beskriver flådeforsikringen som en løsning, hvor hele virksomhedens vognpark forsikres på én og samme forsikring. Den omfatter bl.a. firmapersonbiler, varebiler, lastbiler og anhængere.`,
          `Bilerne kan deles i grupper for overblikkets skyld, og forsikringen kan betales månedligt. Tryg oplyser ikke et minimumsantal biler. På varebilsiden skriver Tryg, at virksomheder med 20 varebiler eller flere i de fleste tilfælde kan få én fælles forsikring til alle varebilerne.`,
          `Tryg sælger flådeforsikringen under navnet Autoforsikring, Fællespolice. Den kan betales 1, 2, 4 eller 12 gange om året, og den træder i kraft senest, når bilen er registreret som forsikret hos Tryg i Motorregistret.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Én forsikring dækker hele vognparken: personbiler, varebiler, lastbiler og anhængere, som kan deles i grupper."><text class="tg-lille" x="2" y="14">ÉN FORSIKRING FOR HELE VOGNPARKEN</text><rect class="tg-rum" x="2" y="24" width="396" height="120"/><rect class="tg-kasse" x="12" y="46" width="88" height="60"/><text x="56" y="80" text-anchor="middle">Personbiler</text><rect class="tg-modul" x="108" y="46" width="88" height="60"/><text class="tg-modul__tekst" x="152" y="80" text-anchor="middle">VAREBILER</text><rect class="tg-kasse" x="204" y="46" width="88" height="60"/><text x="248" y="80" text-anchor="middle">Lastbiler</text><rect class="tg-kasse" x="300" y="46" width="88" height="60"/><text x="344" y="80" text-anchor="middle">Anhængere</text><text class="tg-lille" x="12" y="130">BILERNE KAN DELES I GRUPPER</text></svg>`,
          tekst: `Skematisk. Sådan beskriver Tryg flådeforsikringen. Kilde: <a href="${TRYGF}" rel="noopener">Tryg: Flådeforsikring</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a> og <a href="${TRYGFP}" rel="noopener">Tryg: Autoforsikring, Fællespolice, produktark</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Prisgrupper og køretøjsliste",
        tekst: [
          `I Trygs fællespolice er bilerne delt i prisgrupper. En prisgruppe er en kategori af køretøjer, der ud fra art, anvendelse, højeste vægt og nyværdi udgør samme risiko. Bilerne i gruppen har samme pris, samme dækning og samme selvrisiko.`,
          `Hvilke biler der er med, står på køretøjslisten, som er et bilag til policen. Via listen og policen kan du se dækningen og selvrisikoen for hver enkelt bil. Også det geografiske område, forsikringen gælder i, står for hver prisgruppe i policen.`,
          `For en flåde med både servicevogne og personbiler betyder det, at varebilerne kan have en anden selvrisiko end personbilerne. Køber eller sælger virksomheden en bil, skal Tryg have besked med det samme, så listen passer.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="En fællespolice er delt i tre prisgrupper, varebiler, personbiler og anhængere, hver med sin egen pris og selvrisiko. Under hver gruppe står bilerne på køretøjslisten."><rect class="tg-rum" x="100" y="6" width="200" height="36"/><text class="tg-fremhaev" x="200" y="29" text-anchor="middle">Fællespolice</text><line class="tg-skillevaeg" x1="150" y1="42" x2="65" y2="70"/><line class="tg-skillevaeg" x1="200" y1="42" x2="200" y2="70"/><line class="tg-skillevaeg" x1="250" y1="42" x2="335" y2="70"/><rect class="tg-kasse" x="5" y="70" width="120" height="66"/><text x="65" y="92" text-anchor="middle">Personbiler</text><text x="65" y="110" text-anchor="middle">egen pris</text><text x="65" y="126" text-anchor="middle">og selvrisiko</text><rect class="tg-modul" x="140" y="70" width="120" height="66"/><text class="tg-modul__tekst" x="200" y="92" text-anchor="middle">VAREBILER</text><text x="200" y="110" text-anchor="middle">egen pris</text><text x="200" y="126" text-anchor="middle">og selvrisiko</text><rect class="tg-kasse" x="275" y="70" width="120" height="66"/><text x="335" y="92" text-anchor="middle">Anhængere</text><text x="335" y="110" text-anchor="middle">egen pris</text><text x="335" y="126" text-anchor="middle">og selvrisiko</text><rect class="tg-profil" x="15" y="150" width="100" height="10"/><rect class="tg-profil" x="15" y="166" width="100" height="10"/><rect class="tg-profil" x="15" y="182" width="100" height="10"/><rect class="tg-profil" x="150" y="150" width="100" height="10"/><rect class="tg-profil" x="150" y="166" width="100" height="10"/><rect class="tg-profil" x="150" y="182" width="100" height="10"/><rect class="tg-profil" x="285" y="150" width="100" height="10"/><rect class="tg-profil" x="285" y="166" width="100" height="10"/><text class="tg-lille" x="5" y="216">KØRETØJSLISTEN VISER DÆKNING OG SELVRISIKO PR. BIL</text></svg>`,
          tekst: `Skematisk. Gruppernes navne er eksempler. Kilde: <a href="${TRYGFB}" rel="noopener">Tryg: Betingelser for Autoforsikring, ERH 072-1, afsnit 1 og ordforklaringen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dækningerne",
        tekst: [
          `Grundlaget er det samme som på en enkelt bil, nemlig ansvar og kasko. Det særlige ved flåden er, at tilvalgene kan vælges for hver gruppe af køretøjer.`,
          `Tryg nævner bortkomst, vejhjælp, redning i udlandet, ulykke, chaufførforsikring og driftstab som tilvalg. Driftstab dækker fx tiden til taksering og reparation efter en dækket kaskoskade, når køretøjet skal undværes i mere end 2 dage. Bortkomst dækker, når køretøjet forsvinder uden tyveri.`
        ],
        punkter: [
          `<strong>Ansvar og kasko.</strong> De er grundlaget i Trygs flådeforsikring.`,
          `<strong>Tilvalg hos Tryg.</strong> Bortkomst, vejhjælp, redning i udlandet, ulykke, chaufførforsikring og driftstab kan vælges til.`,
          `<strong>Ayvens.</strong> Førerulykke er med i ansvarsforsikringen og GAP-dækning i kaskoen. Glasskade og vejhjælp findes også.`,
          `<strong>If.</strong> Bilforsikringen kan tilpasses både små og store bilparker.`
        ],
        punkt_ikon: "ja",
        figur: {
          type: "daekning",
          kolonner: ["Dækning", "Tryg flådeforsikring", "Ayvens"],
          raekker: [
            ["Ansvar", "ja", "ja"],
            ["Kasko", "ja", "Inkl. brand"],
            ["Førerulykke", "Ulykke som tilvalg", "Med i ansvaret"],
            ["GAP-dækning", "ikke nævnt", "Med i kaskoen"],
            ["Vejhjælp", "tilvalg", "Tilbydes"],
            ["Driftstab", "tilvalg", "ikke nævnt"],
            ["Bortkomst", "tilvalg", "ikke nævnt"]
          ],
          note: `Ikke nævnt betyder, at selskabets side ikke nævner dækningen. Kilder: <a href="${TRYGF}" rel="noopener">Tryg: Flådeforsikring</a> og <a href="${AY}" rel="noopener">Ayvens: Forsikring hos Ayvens</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde til If: <a href="${IFG}" rel="noopener">If: Hvad er bilforsikring til erhverv?</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Forsikring gennem leasingselskabet",
        tekst: [
          `Ayvens tilbyder en 360 graders forsikring i tre dele: dækning tilpasset virksomhedens risikovillighed, skadeforebyggelse og samlet skadebehandling med ét kontaktpunkt. Ayvens behandler selv alle skader uanset selvrisiko.`,
          `Ifølge Ayvens udgør forsikring typisk 10-15 procent af de samlede flådeomkostninger. Kaskoen på biler ejet af Ayvens indeholder GAP-dækning.`,
          `Ayvens skriver også, at selskabet ikke opkræver præmien a conto og ikke har en kilometerbegrænsning i prisen. Skader anmeldes og reparationer godkendes i en app eller på telefon, så flådeansvarlige ikke skal skrive med både leasingselskabet og forsikringsselskabet.`
        ],
        efter: [
          `Kilder: <a href="${AY360}" rel="noopener">Ayvens: 360 graders forsikring</a> og <a href="${AY}" rel="noopener">Ayvens: Forsikring hos Ayvens</a>, set den 7. oktober 2026. Mere i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`
        ]
      },
      {
        overskrift: "GAP-dækning",
        tekst: [
          `Bliver en leaset bil totalskadet, kan restgælden i leasingaftalen være højere end det, kaskoen udbetaler. Ayvens' GAP-dækning sikrer, at erstatningen ved totalskade mindst svarer til restgælden i leasingaftalen.`,
          `Ayvens skriver, at GAP-dækningen typisk skal købes som tillæg hos andre forsikringsselskaber, mens den hos Ayvens er med i kaskoen på selskabets egne biler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="To bjælker. Restgælden i leasingaftalen er længere end erstatningen efter kaskoen. GAP-dækningen udfylder forskellen, så erstatningen mindst svarer til restgælden."><text class="tg-fremhaev" x="0" y="16">Restgæld i leasingaftalen</text><rect class="tg-kasse" x="0" y="24" width="320" height="26"/><text class="tg-fremhaev" x="0" y="82">Erstatning efter kaskoen</text><rect class="tg-kasse" x="0" y="90" width="230" height="26"/><rect class="tg-modul" x="230" y="90" width="90" height="26"/><text class="tg-modul__tekst" x="275" y="108" text-anchor="middle">GAP-DÆKNING</text><line class="tg-skinne-tynd" x1="320" y1="20" x2="320" y2="124"/><text class="tg-lille" x="0" y="148">AYVENS: ERSTATNINGEN SVARER MINDST TIL RESTGÆLDEN</text></svg>`,
          tekst: `Skematisk. Bjælkerne viser ingen beløb. Kilde: <a href="${AY}" rel="noopener">Ayvens: Forsikring hos Ayvens</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det afgør prisen",
        tekst: [
          `Selskaberne prissætter flåden individuelt, men de nævner de samme faktorer. Gjensidige skriver, at selskabet skal kende bilmodel og årgang for at kunne regne ud, hvad det koster at erstatte bilen. Antal kilometer om året og den valgte selvrisiko påvirker også prisen.`,
          `Adressen tæller, fordi skadestatistikken for trafikuheld, indbrud, tyveri og brand er forskellig rundt i landet. Gjensidige skriver også, at antallet af år uden skader kan give en lavere pris. Tryg spørger desuden, om bilen er ombygget, fx til foodtruck eller kølebil, og om skadehistorikken. Gjensidige og If nævner bl.a. disse faktorer:`
        ],
        punkter: [
          `<strong>Bilmodel, årgang og værdi.</strong> Det koster mere at erstatte en dyr bil.`,
          `<strong>Kilometer om året</strong> og bilernes brug indgår i prisen.`,
          `<strong>Selvrisiko.</strong> Højere selvrisiko giver lavere pris.`,
          `<strong>Adresse.</strong> Gjensidige bruger skadestatistikken for trafikuheld i området.`,
          `<strong>Skadehistorik.</strong> Gjensidige nævner en historik med få skader som en måde at påvirke prisen på.`
        ],
        efter: [
          `Kilder: <a href="${GJP}" rel="noopener">Gjensidige: Billigere forsikringer til virksomheden</a>, <a href="${IFG}" rel="noopener">If: Hvad er bilforsikring til erhverv?</a> og <a href="${TRYGV}" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kørsel ud over det aftalte",
        tekst: [
          `Prisen bygger på den kørsel, virksomheden har oplyst. GF aflæser kilometertælleren ved køb og ved skade og regner det gennemsnitlige årlige kørselsforbrug ud. Er det højere end aftalt, erstatter GF skaden forholdsmæssigt, dvs. i forholdet mellem den betalte pris og den pris, der skulle have været betalt.`,
          `Tryg regner gennemsnittet ud fra perioden siden sidste aflæsning. I Trygs eget eksempel er der kørt 17.500 km på 488 dage, hvilket giver 36 km om dagen og 13.140 km om året. Er kørelængden overskredet, betaler Tryg kun delvis erstatning eller kræver erstatningen betalt tilbage.`,
          `Tryg har også en TryghedsGaranti, der dækker op til 5 mio. kr., hvis virksomheden har glemt at oplyse om flere kilometer siden sidste forsikringstjek. Det er en betingelse, at forsikringerne er gennemgået sammen med Tryg senest 15 måneder før skaden.`
        ],
        tabel: {
          kolonner: ["Selskab", "Kilometer i prisen", "Ved overskridelse"],
          raekker: [
            ["Alm. Brand", "Fri kilometer", "Prisen stiger ikke med kørslen"],
            ["GF", "Aftalt årligt kørselsforbrug i policen", "Skaden erstattes forholdsmæssigt, højst 42.363 kr. mindre pr. skade (basisår 2023)"],
            ["Tryg", "Årlig kørelængde i policen", "Regres for ansvars- og kaskoskader"],
            ["Ayvens", "Ingen kilometerbegrænsning i prisen", "Ingen"]
          ],
          note: `Kilder: <a href="${ALMB}" rel="noopener">Alm. Brand</a>, <a href="${GF}" rel="noopener">GF, punkt 13.2</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.8 og 12</a>, set den 4. oktober 2026, og <a href="${AY}" rel="noopener">Ayvens</a>, set den 7. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "noegletal",
          data: [
            ["Største nedsættelse pr. skade, GF", "42.363", "kr. (basisår 2023)"],
            ["Ingen nedsættelse hos GF de første", "12", "måneder efter aflæsningen"],
            ["TryghedsGaranti, højst", "5 mio.", "kr. pr. kalenderår"]
          ],
          note: `GF's beløb har basisår 2023 og indeksreguleres hvert år den 1. januar. Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.2.1</a> og <a href="${TRYGG}" rel="noopener">Tryg: Vilkår for TryghedsGaranti</a>, set den 7. oktober 2026.`
        },
        efter: [
          `GF nedsætter ikke erstatningen i de første 12 måneder efter aflæsningsdatoen, medmindre bilen faktisk har kørt mere, og heller ikke ved rene glasskader. Hos Tryg kan kørelængden rettes på Min Virksomhed.`
        ]
      },
      {
        overskrift: "Pristrin efter skader",
        tekst: [
          `På enkeltbiler flytter præmien efter skadeforløbet. Hos GF rykker forsikringen ét trin frem til et billigere pristrin for hvert år uden skader på samme trin, indtil trin 9, Superelite, er nået.`,
          `GF skriver, at prisen ikke stiger, selvom virksomheden selv er skyld i skaden. Efter en belastende skade bliver forsikringen i stedet stående ét år ekstra på det pristrin, der gjaldt, da skaden skete. Ved to eller flere skader i samme forsikringsår bliver den stående, indtil der har været et helt forsikringsår uden skader.`,
          `En skade er belastende, når forsikringen er brugt, fordi føreren helt eller delvist var skyld, eller fordi bilen er skadet af en ukendt skadevolder. Skader på ladekabler belaster ikke, og med Friskade og Udvidet glas gælder det samme for de skader, de dækker. Et eksempel fra GF:`
        ],
        tabel: {
          kolonner: ["Selskab", "Skadefrit år", "Efter skade"],
          raekker: [
            ["GF", "1 trin frem op til trin 9 (Superelite)", "Bliver stående ét år ekstra på samme trin"]
          ],
          note: `Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Trappe over seks år. Hvert år uden skade giver et trin op til et billigere pristrin. Efter en skade i år 2 bliver forsikringen stående på samme trin i år 3, før den rykker videre op mod trin 9."><text class="tg-lille" x="10" y="16">HØJERE TRIN GIVER LAVERE PRIS</text><text x="390" y="40" text-anchor="end">op til trin 9, Superelite</text><rect class="tg-kasse" x="10" y="150" width="60" height="30"/><rect class="tg-kasse" x="70" y="130" width="60" height="50"/><rect class="tg-modul" x="130" y="130" width="60" height="50"/><rect class="tg-kasse" x="190" y="110" width="60" height="70"/><rect class="tg-kasse" x="250" y="90" width="60" height="90"/><rect class="tg-kasse" x="310" y="70" width="80" height="110"/><line class="tg-gulvlinje" x1="5" y1="180" x2="395" y2="180"/><text x="40" y="198" text-anchor="middle">år 1</text><text x="100" y="198" text-anchor="middle">år 2</text><text x="160" y="198" text-anchor="middle">år 3</text><text x="220" y="198" text-anchor="middle">år 4</text><text x="280" y="198" text-anchor="middle">år 5</text><text x="350" y="198" text-anchor="middle">år 6</text><g class="tg-call"><line x1="160" y1="140" x2="160" y2="96"/><circle cx="160" cy="140" r="3"/><text class="tg-call__navn" x="60" y="72">Skade i år 2</text><text class="tg-call__under" x="60" y="86">år 3 på samme trin</text></g></svg>`,
          tekst: `Skematisk. Trinene er ikke i skala. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, dækningsoversigten, punkt 13.5 og ordforklaringen</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Hos GF kan forsikringstager betale skadeudgiften tilbage senest en måned efter skadeopgørelsen og undgå at blive flyttet. Skader på ladekabler og, med Friskade, visse kaskoskader belaster ikke.`
        ]
      },
      {
        overskrift: "Tilbagekøb af en skade",
        tekst: [
          `Virksomheden kan betale selskabets udgift tilbage og undgå, at skaden påvirker prisen. Hos GF skal det ske senest en måned efter, at forsikringstageren har fået besked om skadens endelige omfang og økonomiske konsekvenser.`,
          `Hos Tryg skal beløbet være betalt tilbage inden et år, fra virksomheden har fået oplyst skadens konsekvens. Tryg skriver også, at kun skader, der har givet udgifter, eller som Tryg skønner vil give udgifter, kan få betydning for den fremtidige forsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Tidslinje over forsikringsåret hos GF med opsigelse senest 1. december og fristerne for tilbagekøb efter en skade hos GF og Tryg."><defs><marker id="pil-forsikring-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="20" y="24">Forsikringsåret hos GF</text><text class="tg-lille" x="20" y="44">HOVEDFORFALD</text><text class="tg-lille" x="345" y="44" text-anchor="end">SKRIFTLIG OPSIGELSE SENEST</text><line class="tg-gulvlinje" x1="20" y1="60" x2="380" y2="60"/><line class="tg-gulvlinje" x1="20" y1="52" x2="20" y2="68"/><line class="tg-gulvlinje" x1="350" y1="52" x2="350" y2="68"/><line class="tg-gulvlinje" x1="380" y1="52" x2="380" y2="68"/><text x="20" y="84">1. jan</text><text x="350" y="84" text-anchor="middle">1. dec</text><text x="380" y="98" text-anchor="end">1. jan</text><text class="tg-fremhaev" x="20" y="126">Efter en skade</text><text class="tg-lille" x="20" y="146">GF: FRA SKADENS AFSLUTNING</text><line class="tg-gulvlinje" x1="20" y1="152" x2="20" y2="168"/><g class="tg-maal"><line x1="20" y1="160" x2="50" y2="160" marker-end="url(#pil-forsikring-1)"/><text x="58" y="164">1 md: tilbagekøb og opsigelse</text></g><text class="tg-lille" x="20" y="190">TRYG: FRA OPLYST KONSEKVENS</text><line class="tg-gulvlinje" x1="20" y1="196" x2="20" y2="212"/><g class="tg-maal"><line x1="20" y1="204" x2="350" y2="204" marker-end="url(#pil-forsikring-1)"/><text x="356" y="208">1 år</text></g></svg>`,
          tekst: `Skematisk. Hos GF skal skaden betales tilbage senest en måned efter, at du har fået besked om skadens endelige omfang, og forsikringen kan opsiges med 14 dages varsel indtil en måned efter skadens afslutning. Hos Tryg skal skaden betales tilbage inden et år, fra du har fået oplyst konsekvensen. Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.5 og 13.15</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 8</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Skærpede vilkår efter mange skader",
        tekst: [
          `Efter en skade gennemgår Tryg hele kundeforholdet og vurderer alle virksomhedens forsikringer hos Tryg samlet. I stedet for at opsige forsikringen kan Tryg indføre skærpede vilkår, fx tvungen selvrisiko, en højere selvrisiko, en højere pris eller en begrænset dækning.`,
          `GF kan efter enhver anmeldt skade og indtil en måned efter skadens afslutning opsige kaskoen eller kræve skærpede betingelser med 14 dages varsel. Begge selskaber skriver, at skærpede vilkår eller en opsigelse på grund af forsikringens forløb kan blive registreret i Fællesregisteret hos DFIM som en særlig risiko.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Skaden anmeldes", "Tryg gennemgår kundeforholdet og vurderer alle virksomhedens forsikringer samlet."],
            ["Besked om ændringer", "Du hører om ændringer i aftalen senest 14 dage efter, at skaden er afsluttet."],
            ["Varsel", "Skærpede vilkår, fx tvungen selvrisiko eller højere pris, varsles skriftligt med 14 dages varsel."],
            ["Dit valg", "Vil du ikke have forsikringen med de skærpede vilkår, kan du opsige den, før de træder i kraft."]
          ]
        },
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 8, 12 og 13</a> og <a href="${GF}" rel="noopener">GF, punkt 13.15</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Skadeforebyggelse",
        tekst: [
          `Ayvens skriver, at forebyggelse reducerer skader, præmier, brændstofforbrug og CO2-udledning. Gjensidige nævner tyverisikring som et tiltag, der kan påvirke prisen, og Topdanmark giver selvrisikorabat for alarm i varebilen. Se <a href="/til-varebilen/varerumssikring/">varerumssikring</a>.`,
          `Ayvens kalder forebyggelse af ulykker den bedste måde at sænke de samlede forsikringsomkostninger på.`
        ],
        efter: [
          `Kilder: <a href="${AY360}" rel="noopener">Ayvens: 360 graders forsikring</a>, <a href="${GJP}" rel="noopener">Gjensidige: Pris</a> og <a href="${TOPA}" rel="noopener">Topdanmark</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Samme selskab, én selvrisiko",
        tekst: [
          `Gjensidige peger på, at virksomheden kan samle forsikringerne i ét selskab for at undgå dobbelt selvrisiko, når en skade er dækket af flere forsikringer på én gang. GF beregner kun én selvrisiko, når samme begivenhed giver både ansvars- og kaskoskade.`,
          `Er den samme skade forsikret i to selskaber, er der tale om dobbeltforsikring. GF skriver, at skaden så skal anmeldes til begge selskaber, som betaler erstatningen i fællesskab. Tryg betaler ikke for skader, som virksomheden får fuld dækning for i et andet selskab.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Én begivenhed giver både en ansvarsskade og en kaskoskade, og GF beregner kun én selvrisiko."><rect class="tg-kasse" x="0" y="60" width="110" height="44"/><text x="55" y="86" text-anchor="middle">Én begivenhed</text><line class="tg-pil" x1="110" y1="82" x2="150" y2="40"/><line class="tg-pil" x1="110" y1="82" x2="150" y2="124"/><rect class="tg-profil" x="150" y="20" width="120" height="40"/><text x="210" y="44" text-anchor="middle">Ansvarsskade</text><rect class="tg-profil" x="150" y="104" width="120" height="40"/><text x="210" y="128" text-anchor="middle">Kaskoskade</text><line class="tg-pil" x1="270" y1="40" x2="300" y2="82"/><line class="tg-pil" x1="270" y1="124" x2="300" y2="82"/><rect class="tg-modul" x="300" y="60" width="100" height="44"/><text class="tg-modul__tekst" x="350" y="86" text-anchor="middle">1 SELVRISIKO</text><text class="tg-lille" x="0" y="168">GF BEREGNER KUN ÉN SELVRISIKO</text></svg>`,
          tekst: `Skematisk. GF's regel, når samme begivenhed giver både en ansvars- og en kaskoskade. Kilde: <a href="${GF}" rel="noopener">GF, punkt 13.7 og 13.10</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GJP}" rel="noopener">Gjensidige: Pris</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 12</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ændringer, selskabet skal have",
        tekst: [
          `I en flåde sker der løbende ændringer, og selskabet skal have besked om dem. I Trygs fællespolice gælder det, når en bil købes eller sælges, får ny ejer eller skifter anvendelse, og når hele eller dele af virksomheden flytter, eller virksomhedens art ændres.`,
          `Trygs TryghedsGaranti dækker, hvis virksomheden ved en forglemmelse ikke har fortalt om nyanskaffelser eller udvidelser siden sidste forsikringstjek. Den gælder højst 5 mio. kr. pr. kalenderår for samme CVR-nummer, og den bortfalder, hvis virksomheden ikke deltager i det årlige tjek.`
        ],
        punkter: [
          `<strong>Bilen.</strong> Ombygning, specialopbygning, ændret vægt, indretning eller motoreffekt skal meldes.`,
          `<strong>Brugen.</strong> Udlejning, godstransport mod betaling eller en ny fast bruger skal meldes.`,
          `<strong>Virksomheden.</strong> Flytning, nyt CVR-nummer eller ny ejer skal meldes.`,
          `<strong>Værdien.</strong> Hos GF skal en forøget værdi af bil og udstyr meldes.`
        ],
        efter: [
          `Får selskabet ikke besked, kan erstatningen blive nedsat eller bortfalde. Kilder: <a href="${TRYG}" rel="noopener">Tryg, afsnit 12</a> og <a href="${GF}" rel="noopener">GF, punkt 13.2</a>, set den 4. oktober 2026, og <a href="${TRYGFB}" rel="noopener">Tryg: Betingelser for Autoforsikring, afsnit 1.3</a> og <a href="${TRYGG}" rel="noopener">Tryg: Vilkår for TryghedsGaranti</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Biler, der står stille",
        tekst: [
          `Gjensidige har en stilstandsdækning, der giver samme dækning som kaskoen, mens bilen er opmagasineret i mindst en måned. If tilbyder stilstandsforsikring til biler uden nummerplader.`,
          `Hos GF dækker stilstandsforsikringen som kaskoen uden kørselsskader, og perioden skal være mindst en måned. Der optjenes ikke anciennitet i stilstandsperioden. Hos Tryg skal bilen være forsvarligt opbevaret uden for færdselslovens område.`
        ],
        efter: [
          `Kilder: <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${IF}" rel="noopener">If: Varebilforsikring</a>, set den 4. oktober 2026, og <a href="${GF}" rel="noopener">GF, punkt 13.3</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 6</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvem må køre bilerne",
        tekst: [
          `I en flåde skifter førerne, og betingelserne afgør, hvem der er dækket. Trygs fællespolice dækker enhver, der lovligt benytter et forsikret køretøj, lader det benytte eller er fører af det.`
        ],
        punkter: [
          `<strong>Codan.</strong> Alle medarbejdere må køre uden ekstra pris, og privat kørsel i bilerne er dækket.`,
          `<strong>GF.</strong> GF opkræver en ekstra selvrisiko på 6.587 kr. (basisår 2023), når bilen lånes ud til førere under 26 år. Ansatte under 26 år er undtaget, når de kører i arbejdstiden.`,
          `<strong>Tryg.</strong> Et værksted, der har bilen til reparation eller service, er omfattet. Skader under kørsel er kun dækket, når kørslen sker i forsikringstagerens interesse.`
        ],
        efter: [
          `Kilder: <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GF}" rel="noopener">GF, punkt 13.7</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 2</a>, set den 4. oktober 2026, og <a href="${TRYGFB}" rel="noopener">Tryg: Betingelser for Autoforsikring, afsnit 1.1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kørsel i udlandet",
        tekst: [
          `GF's kasko indeholder redningsforsikring i udlandet med vejhjælp, bugsering, hjemtransport og udlejningsbil, når bilen vejer højst 3,5 t. Gjensidige har redningsforsikring for køretøjer under 3.500 kg, men ikke ved erhvervsmæssig godstransport.`,
          `Tryg skriver, at flådeforsikringens ansvar og kasko også dækker i udlandet, og at en kaskoforsikret flåde har vejhjælp i udlandet gennem Tryg Vejhjælp Europa. GF dækker kun kørsel i udlandet efter aftale, når bilens totalvægt er over 3,5 ton.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Redning i udlandet, GF", "højst 3,5", "t"],
            ["Redning i udlandet, Gjensidige", "under 3.500", "kg"]
          ],
          note: `Tallene viser vægtgrænsen for redningsforsikringen i udlandet hos de to selskaber. Gjensidiges redningsforsikring gælder ikke ved erhvervsmæssig godstransport. Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.4</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TRYGF}" rel="noopener">Tryg: Flådeforsikring</a> og <a href="${GF}" rel="noopener">GF, punkt 2.3</a>, set den 7. oktober 2026. Mere i <a href="/til-varebilen/forsikring/forsikring-i-udlandet/">forsikring i udlandet</a>.`
        ]
      },
      {
        overskrift: "Opsigelse og skift af selskab",
        tekst: [
          `GF-forsikringen følger kalenderåret og kan opsiges skriftligt inden den 1. december. Trygs fællespolice gælder et år ad gangen og kan opsiges skriftligt med mindst én måneds varsel til udløbet. Efter en skade kan begge parter opsige med 14 dages varsel indtil en måned efter skadens afslutning.`,
          `Skifter flåden selskab, skal hver bil have et nyt forsikringsbevis hos Køretøjsregisteret senest den dag, den gamle forsikring udløber.`
        ],
        punkter: [
          `<strong>Årligt.</strong> GF-forsikringen kan opsiges skriftligt inden den 1. december, så den ophører den 1. januar.`,
          `<strong>Efter skade.</strong> Forsikringstageren kan opsige med 14 dages varsel indtil en måned efter skadens afslutning. GF kan i samme periode opsige kaskoen eller skærpe vilkårene.`,
          `<strong>Anciennitet.</strong> Skadefri kørsel i GF kan overføres til en ny bilforsikring i GF inden for fem år.`,
          `<strong>Nyt selskab.</strong> Det nye forsikringsbevis skal være hos Køretøjsregisteret senest den dag, den gamle forsikring udløber.`
        ],
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.4 og 13.15</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, § 5, stk. 3</a>, set den 4. oktober 2026, og <a href="${TRYGFB}" rel="noopener">Tryg: Betingelser for Autoforsikring, afsnit 8.3</a>, set den 7. oktober 2026.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Inden den 1. december", "Du opsiger GF-forsikringen skriftligt."],
            ["Den 1. januar", "Forsikringen ophører."],
            ["Senest den dag, den gamle forsikring udløber", "Køretøjsregisteret skal have det nye forsikringsbevis."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.15</a> og <a href="${BEK}" rel="noopener">BEK nr. 1627, § 5, stk. 3</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Flådestyring",
        tekst: [
          `Kørselsdata, skadeoverblik og placering af bilerne ligger i flådestyringen. Se <a href="/til-varebilen/flaadestyring/">flådestyring og kørebog</a>.`,
          `De samme data kan bruges, når kørelængden i policen skal passe, og når selskabet beder om skadeforløbet for de seneste år.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet vide",
    spoergsmaal_manchet: "Så kan en flådeaftale prissættes på et sammenligneligt grundlag.",
    spoergsmaal: [
      "Liste over biler med registreringsnummer, model, årgang og værdi.",
      "Skadeforløbet de seneste år, gerne fra det nuværende selskab.",
      "Kilometer pr. bil og brug: håndværk, kurer, vognmand.",
      "Hvordan bilerne kan deles i grupper, fx varebiler, personbiler og anhængere.",
      "Ønsket selvrisiko pr. skade for hver gruppe.",
      "Hvilke biler der er leaset, og fra hvilke leasingselskaber.",
      "Ombygninger og specialopbygninger, fx kølebil eller kran.",
      "Kørsel i udlandet og godstransport.",
      "Sikring: alarm, låse og GPS."
    ],
    faq: [
      ["Hvad er en flådeforsikring?", "Det er en forsikring, der dækker hele virksomhedens vognpark på én aftale, fx personbiler, varebiler, lastbiler og anhængere."],
      ["Hvor mange biler skal man have for at få en flådeforsikring?", "Tryg oplyser ikke et minimumsantal for flådeforsikringen. På varebilsiden skriver Tryg, at 20 varebiler eller flere i de fleste tilfælde kan samles på én forsikring."],
      ["Hvad koster en flådeforsikring?", "Selskaberne prissætter den individuelt. Ayvens oplyser, at forsikring typisk udgør 10-15 procent af de samlede flådeomkostninger."],
      ["Stiger prisen efter en skade?", "Hos GF stiger prisen ikke, men forsikringen bliver stående ét år ekstra på samme pristrin. Efter mange skader kan selskaberne indføre skærpede vilkår, fx en højere selvrisiko."],
      ["Hvad er en prisgruppe?", "Hos Tryg er det en gruppe af køretøjer med samme risiko ud fra art, anvendelse, højeste vægt og nyværdi. Bilerne i gruppen har samme pris, dækning og selvrisiko."],
      ["Kan leasingselskabet stå for forsikringen?", "Ja, fx Ayvens, der tilbyder ansvar, kasko med GAP-dækning og samlet skadebehandling."],
      ["Hvad er GAP-dækning?", "Hos Ayvens sikrer GAP-dækningen, at erstatningen ved totalskade mindst svarer til restgælden i leasingaftalen. Den er med i kaskoen på biler ejet af Ayvens."],
      ["Hvad sker der, hvis bilerne kører mere end aftalt?", "Hos GF erstattes skaden forholdsmæssigt, dog højst 42.363 kr. mindre pr. skade (basisår 2023). Hos Alm. Brand er der fri kilometer."],
      ["Kan man købe en skade tilbage?", "Ja. Hos GF skal det ske senest en måned efter, at du har fået besked om skadens endelige omfang. Hos Tryg skal det ske inden et år, fra du har fået oplyst konsekvensen."]
    ],
    kilder: [
      { navn: "Tryg: Flådeforsikring", url: TRYGF, dato: "2026-10-07" },
      { navn: "Tryg: Betingelser for Autoforsikring (fællespolice), ERH 072-1", url: TRYGFB, dato: "2026-10-07" },
      { navn: "Tryg: Autoforsikring, Fællespolice, produktark", url: TRYGFP, dato: "2026-10-07" },
      { navn: "Tryg: Vilkår for TryghedsGaranti", url: TRYGG, dato: "2026-10-07" },
      { navn: "Ayvens: 360 graders forsikring", url: AY360, dato: "2026-10-07" },
      { navn: "Ayvens: Forsikring hos Ayvens", url: AY, dato: "2026-10-07" },
      { navn: "Gjensidige: Billigere forsikringer til virksomheden", url: GJP, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "If: Hvad er bilforsikring til erhverv?", url: IFG, dato: "2026-10-07" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYGV, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: ALMB, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TOPA, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: BEK, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Tryg: Autoforsikring, Fællespolice kan betales 1, 2, 4 eller 12 gange årligt og træder i kraft den aftalte dag, dog senest når bilen er tilmeldt DMR som forsikret hos Tryg.", TRYGFP],
    ["Tryg: en prisgruppe omfatter en kategori af køretøjer, der ud fra art, anvendelse, højeste vægt og nyværdi udgør en risiko, der er prisfastsat ens, med samme dækning og selvrisici; køretøjslisten er et bilag, der viser de forsikrede køretøjer i hver prisgruppe, og via listen og policen kan man se dækning og selvrisici for det enkelte køretøj.", TRYGFB],
    ["Tryg fællespolice: forsikringen dækker i det geografiske område, der for hver prisgruppe står i policen, og de aftalte selvrisici for hver prisgruppe står i policen (afsnit 1.2 og 2.1).", TRYGFB],
    ["Tryg fællespolice: Tryg skal straks have besked, hvis et køretøj ændres, så det afviger fra køretøjslisten, købes eller sælges, får ny ejer eller skifter anvendelse, hvis virksomheden flytter, eller virksomhedens art ændres (afsnit 1.3.1).", TRYGFB],
    ["Tryg flådeforsikring: tilvalget Driftstab dækker fx taksering og reparationstid efter en dækket kaskoskade, hvis køretøjet skal undværes i mere end 2 dage; Bortkomst dækker, hvis køretøjet er forsvundet uden tyveri.", TRYGF],
    ["Ayvens: kaskoforsikringen er inkl. brand, og GAP-dækningen sikrer, at erstatningen ved totalskade som minimum svarer til restgælden i leasingaftalen; hos andre selskaber skal dækningen ifølge Ayvens typisk købes som tillæg.", AY],
    ["Ayvens: ingen aconto-opkrævning af præmie og ingen kilometerbegrænsning i forbindelse med præmien; anmeldelser og godkendelse af reparationer sker i app eller på telefon, og flådeadministratoren skal ikke korrespondere med både leasingfirma og forsikringsselskab.", AY360],
    ["Gjensidige: prisen på erhvervsbilforsikring afhænger bl.a. af bilmodel og årgang, antal kilometer om året, den valgte selvrisiko og adressen, fordi skadestatistikken for trafikulykker, indbrud, tyveri og brande er forskellig; antallet af år uden skader kan give en lavere pris.", GJP],
    ["Tryg spørger ved prisberegning bl.a. til årgang, mærke og model, kørselsbehov og anvendelse, om varebilen er ombygget (fx til foodtruck eller kølebil), dækningspakke og selvrisiko samt skadehistorik.", TRYGV],
    ["GF: kilometerstanden aflæses ved køb og ved skade, og overstiger det gennemsnitlige årlige kørselsforbrug det aftalte, erstattes skaden forholdsmæssigt, så erstatningen svarer til forholdet mellem den betalte pris og den pris, der skulle have været betalt (punkt 13.2.1).", GF],
    ["Tryg: den gennemsnitlige årlige kørelængde beregnes fra seneste registrerede aflæsningsdato; i Trygs eksempel er der kørt 17.500 km på 488 dage, hvilket giver 36 km dagligt og 13.140 km årlig kørsel; ved overskridelse udbetales kun delvis erstatning, eller erstatningen kræves tilbagebetalt (afsnit 12).", TRYG],
    ["Tryg TryghedsGaranti: dækning på op til 5 mio. kr., hvis man har glemt at oplyse om overskridelse af det aftalte antal kilometer siden sidste forsikringstjek.", TRYGV],
    ["Tryg TryghedsGaranti: gælder, hvis virksomheden ved en forglemmelse ikke har oplyst nyanskaffelser, udvidelser eller lignende siden sidste forsikringstjek; højst 5.000.000 kr. pr. kalenderår for samme CVR-nummer; forudsætter, at forsikringerne er gennemgået senest 15 måneder før skaden, og bortfalder, hvis virksomheden ikke gennemfører forsikringstjekket.", TRYGG],
    ["GF: prisen på forsikringen stiger ikke, selvom man selv er skyld i skaden, eller der ikke er en ansvarlig modpart (dækningsoversigten); ved belastende skade bliver forsikringen stående ét år ekstra på det pristrin, der gjaldt på skadetidspunktet, og ved to eller flere skader i samme forsikringsår, indtil der er opnået ét års skadefrihed (punkt 13.5.2).", GF],
    ["GF: en skade er belastende, når forsikringen er brugt, fordi man har været helt eller delvist ansvarlig, eller fordi bilen er skadet af en ukendt skadevolder eller en skadevolder, der ikke er idømt erstatningspligt; med Udvidet glas er glasskader ikke belastende (ordforklaringen og punkt 13.5.2).", GF],
    ["Tryg: det er alene skader, der har medført eller skønnes at medføre udgifter for Tryg, der kan få konsekvens for den fremtidige forsikring; efter en skade vurderer Tryg alle kundens forsikringer samlet, og ved ændringer hører kunden nærmere senest 14 dage fra skadens afslutning (afsnit 8).", TRYG],
    ["Tryg: i stedet for at opsige kan Tryg tilføje skærpede vilkår, fx tvungen selvrisiko, ændret selvrisiko, højere pris eller begrænset dækning, varslet skriftligt med 14 dages varsel (afsnit 13).", TRYG],
    ["GF og Tryg: stiller selskabet skærpede betingelser eller opsiger forsikringen på grund af forsikringens forløb, kan det registreres i den del af Fællesregisteret (DFIM), der vedrører forsikringstagere med særlig risiko (GF punkt 13.15, Tryg afsnit 12).", GF],
    ["GF: ved dobbeltforsikring skal skaden anmeldes til begge selskaber, som betaler erstatningen i fællesskab (punkt 13.10); Tryg betaler ikke erstatning for skader, som man får fuld dækning for i et andet selskab (afsnit 12).", GF],
    ["Gjensidige: samles forsikringerne i ét selskab, kan man slippe for at betale dobbelt selvrisiko, hvis en skade er dækket af flere forsikringer på én gang.", GJP],
    ["Ayvens: forebyggelse af ulykker er den bedste måde at sænke de samlede forsikringsomkostninger.", AY360],
    ["GF stilstandsforsikring dækker som kasko (punkt 4.1-4.2) med undtagelse af kørselsskader (punkt 13.3).", GF],
    ["Tryg fællespolice: forsikringen dækker forsikringstageren, medforsikrede selskaber og enhver, der lovligt benytter et forsikret køretøj, lader det benytte eller er fører af det (afsnit 1.1).", TRYGFB],
    ["Tryg: med flådeforsikringens ansvars- og kaskoforsikring er man sikret ved kørsel i udlandet, og en kaskoforsikret flåde har vejhjælp i udlandet gennem Tryg Vejhjælp Europa.", TRYGF],
    ["GF: for biler med en totalvægt over 3,5 ton dækkes kørsel i udlandet kun efter aftale med GF (punkt 2.3).", GF],
    ["Tryg fællespolice: forsikringen gælder ét år ad gangen og kan opsiges skriftligt med mindst én måneds varsel til en forsikringsperiodes udløb; begge parter kan opsige med 14 dages varsel fra anmeldelse af en skade og indtil 1 måned efter skadens afslutning (afsnit 8.3).", TRYGFB]
  ]
};
