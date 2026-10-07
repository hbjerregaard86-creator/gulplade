// Underside /til-varebilen/ombygning/godkendelse-af-ombygning/ (07-10-2026)
var BEK = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var DF = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var MST = `https://motorst.dk/erhverv/registrering-og-omregistrering/aendring-af-koeretoejets-udstyr-eller-anvendelse`;
var OMREG = `https://motorst.dk/erhverv/registrering-og-omregistrering/omregistrering`;
var FS = `https://www.fstyr.dk/privat/syn/registreringssyn`;

module.exports = {
  id: "ombygning/godkendelse-af-ombygning",
  side: {
    slug: "godkendelse-af-ombygning",
    navn: "Godkendelse af ombygning",
    titel: "Godkendelse af ombygning: registreringssyn",
    kort: `Hvornår en ombygget varebil skal til registreringssyn, hvornår Færdselsstyrelsen skal godkende først, og hvad synet kan ende med.`,
    beskrivelse: `Hvornår en ombygget varebil skal til registreringssyn: konstruktive ændringer, 50 kg-grænsen, trækkrog, kran, hjul, omsyn og typegodkendelse i flere trin.`,
    manchet: `Efter en ombygning hedder synet registreringssyn. Det står i bekendtgørelsen om godkendelse og syn af køretøjer fra december 2025, som ikke bruger ordet ændringssyn. Omsyn er noget andet, nemlig kontrollen af, at fejl fra et tidligere syn er rettet.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Ændret egenvægt", "over 50 kg", "kræver registreringssyn"],
        ["Trækkrog uden syn", "under 8 år", "og højst 3.500 kg i totalvægt"],
        ["Omsynsfrist", "60 kalenderdage", "når bilen kan godkendes efter omsyn"],
        ["Ændringssyn", "Findes ikke", "synet hedder registreringssyn"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det korte svar",
        tekst: [
          `De fleste ombygninger af en varebil skal godkendes ved et registreringssyn hos en synsvirksomhed, før bilen må køre igen. Nogle få ændringer, fx en trækkrog på en nyere bil, kan godkendes hos en nummerpladeoperatør. Andre kræver, at Færdselsstyrelsen godkender bilen, før den kommer til syn.`
        ],
        punkter: [
          `<strong>Registreringssyn</strong> efter konstruktive ændringer, vægtændringer over 50 kg, nye tilladte vægte og ændrede registrerede data.`,
          `<strong>Nummerpladeoperatør uden syn</strong> ved trækkrog på en bil under 8 år med totalvægt højst 3.500 kg.`,
          `<strong>Godkendelseserklæring fra Færdselsstyrelsen</strong> før syn for lastbiler og ved konstruktive ændringer af typegodkendelsespligtige biler.`,
          `<strong>Synsvirksomheden</strong> registrerer ændringen i Motorregistret.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 266" role="img" aria-label="Beslutningstræ. Ændringer af styretøj, bremser, motor eller bærende dele og ændringer af egenvægten på mere end 50 kg kræver registreringssyn. En trækkrog på en bil under 8 år og højst 3.500 kg kan godkendes uden syn med blanket 21.053."><defs><marker id="pil-godk-2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="100" y="6" width="200" height="36"/><text class="tg-fremhaev" x="200" y="29" text-anchor="middle">Hvad er ændret?</text><line class="tg-pil" x1="170" y1="42" x2="76" y2="78" marker-end="url(#pil-godk-2)"/><line class="tg-pil" x1="200" y1="42" x2="200" y2="78" marker-end="url(#pil-godk-2)"/><line class="tg-pil" x1="230" y1="42" x2="324" y2="78" marker-end="url(#pil-godk-2)"/><rect class="tg-kasse" x="6" y="80" width="124" height="56"/><text x="68" y="99" text-anchor="middle">Styretøj, bremser,</text><text x="68" y="114" text-anchor="middle">motor eller</text><text x="68" y="129" text-anchor="middle">bærende dele</text><rect class="tg-kasse" x="138" y="80" width="124" height="56"/><text x="200" y="104" text-anchor="middle">Egenvægt ændret</text><text x="200" y="119" text-anchor="middle">mere end 50 kg</text><rect class="tg-kasse" x="270" y="80" width="124" height="56"/><text x="332" y="99" text-anchor="middle">Trækkrog på bil</text><text x="332" y="114" text-anchor="middle">under 8 år og</text><text x="332" y="129" text-anchor="middle">højst 3.500 kg</text><line class="tg-pil" x1="68" y1="136" x2="68" y2="166" marker-end="url(#pil-godk-2)"/><line class="tg-pil" x1="200" y1="136" x2="200" y2="166" marker-end="url(#pil-godk-2)"/><line class="tg-pil" x1="332" y1="136" x2="332" y2="166" marker-end="url(#pil-godk-2)"/><rect class="tg-modul" x="6" y="168" width="124" height="40"/><text class="tg-modul__tekst" x="68" y="192" text-anchor="middle">REGISTRERINGSSYN</text><rect class="tg-modul" x="138" y="168" width="124" height="40"/><text class="tg-modul__tekst" x="200" y="192" text-anchor="middle">REGISTRERINGSSYN</text><rect class="tg-kasse" x="270" y="168" width="124" height="40"/><text class="tg-fremhaev" x="332" y="185" text-anchor="middle">Uden syn</text><text x="332" y="201" text-anchor="middle">blanket 21.053</text><text class="tg-lille" x="200" y="240" text-anchor="middle">LASTBIL ELLER TYPEGODKENDELSESPLIGTIG BIL</text><text class="tg-lille" x="200" y="256" text-anchor="middle">KAN KRÆVE GODKENDELSESERKLÆRING FØR SYN</text></svg>`,
          tekst: `Skematisk. De tre mest almindelige veje til godkendelse af en ombygning. Trækkrogen godkendes hos en nummerpladeoperatør. Kilder: <a href="${BEK}" rel="noopener">BEK nr. 1685 af 16/12/2025, §§ 5 og 14</a> og <a href="${MST}" rel="noopener">Motorstyrelsen: Ændring af køretøjets udstyr eller anvendelse</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ordene i bekendtgørelsen",
        tekst: [
          `Bekendtgørelsen om godkendelse og syn af køretøjer bruger faste ord for de forskellige kontroller og dokumenter. Ændringssyn er ikke et af dem, så det er registreringssyn, du skal bestille efter en ombygning.`
        ],
        tabel: {
          kolonner: ["Ord", "Hvad det er"],
          raekker: [
            ["Registreringssyn", "Kontrol af et køretøj, der ikke er registreret, eller hvor der er lavet registreringspligtige ændringer"],
            ["Periodisk syn", "Det faste syn med bestemte mellemrum"],
            ["Omsyn", "Kontrol af, at fejl fundet ved et tidligere syn er udbedret"],
            ["Øvrige kontroller", "Andre tekniske kontroller"],
            ["Godkendelseserklæring", "Færdselsstyrelsens godkendelse af et chassis' opbygning"],
            ["Rapport", "Det dokument, synsvirksomheden udsteder efter et registreringssyn"],
            ["CoC", "Fabrikantens dokument om, at bilen svarer til den godkendte type"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025)</a>, § 3, set den 7. oktober 2026.`,
          visning: "kort"
        },
        efter: [
          `Det periodiske syn af varebiler står i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`
        ]
      },
      {
        overskrift: "Ændringer, der kræver registreringssyn",
        tekst: [
          `Efter § 5 skal en registreret bil godkendes ved et registreringssyn, før den tages i brug igen, ved disse ændringer:`
        ],
        punkter: [
          `Konstruktive ændringer efter bilag 2 i detailforskrifterne.`,
          `Montering eller ændring af tilkoblingsanordning, med undtagelse for synsfri sammenkobling.`,
          `Ændring af køreklar vægt eller egenvægt med mere end 50 kg.`,
          `Ændring på 50 kg eller derunder, hvis den skal registreres.`,
          `Ændring af tilladte vægte.`,
          `Øvrige ændringer af bilens registrerede tekniske data.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Skala for ændret egenvægt: op til 50 kg kræver syn, hvis ændringen skal registreres. Over 50 kg kræver altid registreringssyn."><text class="tg-fremhaev" x="20" y="36">Op til 50 kg</text><text class="tg-fremhaev" x="170" y="36">Over 50 kg</text><rect class="tg-profil" x="20" y="46" width="140" height="22"/><rect class="tg-modul" x="160" y="46" width="220" height="22"/><text class="tg-modul__tekst" x="170" y="61">REGISTRERINGSSYN</text><line class="tg-skinne-tynd" x1="160" y1="40" x2="160" y2="80"/><text x="160" y="94" text-anchor="middle">50 kg</text><text x="20" y="112">syn, hvis ændringen</text><text x="20" y="126">skal registreres</text><text x="190" y="112">før bilen bruges igen</text><text class="tg-lille" x="20" y="146">ÆNDRET EGENVÆGT ELLER KØREKLAR VÆGT</text></svg>`,
          tekst: `Skematisk. Grænsen på 50 kg for ændringer af bilens egenvægt eller køreklare vægt. Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1685 af 16/12/2025, § 5</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Grænsen gælder den samlede ændring af egenvægten. En ændring på 50 kg eller derunder kræver kun syn, hvis du vil have den nye vægt registreret. Motorstyrelsen nævner også skift af drivkraft fra benzin til diesel.`,
          `Nedsætter du den tilladte vægt af en påhængsvogn med bremser, som en bil på op til 3.500 kg må trække, kræver det ikke syn.`
        ]
      },
      {
        overskrift: "Ændret art eller anvendelse",
        tekst: [
          `Skifter bilen art, skal den godkendes ved registreringssyn. Færdselsstyrelsen nævner som eksempel en personbil til privat kørsel, der er bygget om til en varebil til godstransport.`,
          `Det samme gælder, når anvendelsen ændres til fx taxikørsel, ambulancekørsel, buskørsel, udlejning uden fører, øvelseskørsel, slæbning eller udrykning. Synsvirksomheden registrerer den nye anvendelse i Motorregistret.`
        ]
      },
      {
        overskrift: "Trækkrog uden syn",
        tekst: [
          `Monteres en trækkrog på en bil, der er registreret for mindre end 8 år siden og har en totalvægt på højst 3.500 kg, godkendes ændringen hos en nummerpladeoperatør med blanket 21.053, Erklæring om montering af tilkoblingsanordning. Er bilen ældre, skal den til syn. Mere i <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`,
          `Til nummerpladeoperatøren medbringer du bilens seneste registreringsattest og blanketten. Et værksted, der er momsregistreret som autoreparationsværksted eller detailhandel med biler, kan søge adgang til selv at erklære synsfri sammenkobling i Motorregistret. Bagefter skal den registrerede ejer bestille en ny registreringsattest.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Trækkrog på", "Nummerpladeoperatør", "Registreringssyn"],
          raekker: [
            ["Bil registreret for under 8 år siden, højst 3.500 kg", "ja", "nej"],
            ["Ældre bil", "nej", "ja"]
          ],
          note: `Hos nummerpladeoperatøren bruger man blanket 21.053, Erklæring om montering af tilkoblingsanordning. Kilde: <a href="${MST}" rel="noopener">Motorstyrelsen: Ændring af køretøjets udstyr eller anvendelse</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Konstruktive ændringer",
        tekst: [
          `Bilag 2 i detailforskrifterne regner enhver ændring af styreapparat, bremser, motor og bærende elementer som konstruktiv, medmindre bilaget undtager den. Det gælder også ændrede indstillingsværdier uden for fabrikantens tolerancer. Færdselsstyrelsen nævner styretøj, bremser, motor, hjul, fjedre og karrosseri som eksempler.`,
          `En ændring af karrosseri eller chassisramme kan dokumenteres på fire måder. Det kan være dokumentation fra bilfabrikanten, en godkendelse fra en teknisk tjeneste eller en rapport fra en prøvningsinstans. Ved en ny chassisramme kan det også være dokumentation for, at rammen er lavet af en komponentfabrikant, der har lavet mindst 200 rammer.`,
          `En prøvningsinstans er en godkendt prøvningsinstans eller en udpeget teknisk tjeneste, der må afprøve og dokumentere ændringer på køretøjer.`
        ],
        punkter: [
          `<strong>Dokumentation.</strong> Ændringen godkendes ved syn på grundlag af dokumentation fra bilfabrikanten eller fra en godkendt prøvningsinstans eller teknisk tjeneste.`,
          `<strong>Karrosseri og chassisramme.</strong> Ændringer er som udgangspunkt konstruktive. Undtaget er bl.a. en ventilationsklap eller et soltag på højst 1,00 × 0,50 m med ramme, symmetrisk placeret, mindst 0,15 m fra tagkanten og uden indgreb i afstivende profiler.`,
          `<strong>Softwareopdatering.</strong> En typegodkendt opdatering fra fabrikanten uden fysiske ændringer er ikke konstruktiv, hvis den ikke øger effekt, topfart eller forbrug.`,
          `<strong>Gearkasse.</strong> At skifte eller ændre gearkasse eller differentiale regnes ikke som en konstruktiv ændring af motoren.`,
          `<strong>Afprøvede biler.</strong> Er køreegenskaberne afprøvet ved godkendelsen, kræver nye konstruktive ændringer en ny rapport.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="Taget på en varebil set oppefra med en udskæring på højst 1,00 meter på tværs og 0,50 meter på langs med ramme, placeret symmetrisk om bilens længdeakse, mindst 0,15 meter fra tagkanten og uden indgreb i de afstivende profiler">
<defs><marker id="pil-godk-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<text x="40" y="22" class="tg-lille">FORAN</text>
<text x="400" y="22" text-anchor="end" class="tg-lille">BAG</text>
<rect x="40" y="30" width="360" height="160" rx="6" class="tg-rum"/>
<rect x="95" y="30" width="5" height="160" class="tg-hylde"/>
<rect x="340" y="30" width="5" height="160" class="tg-hylde"/>
<line x1="40" y1="110" x2="400" y2="110" class="tg-skinne-tynd"/>
<rect x="197" y="65" width="45" height="90" class="tg-modul"/>
<rect x="202" y="70" width="35" height="80" fill="none" class="tg-profil"/>
<g class="tg-maal"><line x1="258" y1="65" x2="258" y2="155" marker-start="url(#pil-godk-1)" marker-end="url(#pil-godk-1)"/><text x="264" y="88">maks.</text><text x="264" y="101">1,00 m</text></g>
<g class="tg-maal"><line x1="197" y1="170" x2="242" y2="170" marker-start="url(#pil-godk-1)" marker-end="url(#pil-godk-1)"/><text x="219" y="185" text-anchor="middle">maks. 0,50 m</text></g>
<g class="tg-maal"><line x1="150" y1="30" x2="150" y2="65" marker-start="url(#pil-godk-1)" marker-end="url(#pil-godk-1)"/><text x="144" y="46" text-anchor="end">min.</text><text x="144" y="60" text-anchor="end">0,15 m</text></g>
<g class="tg-call"><line x1="342" y1="180" x2="350" y2="212"/><circle cx="342" cy="180" r="3"/><text x="290" y="226" class="tg-call__navn">Afstivende profil</text></g>
<g class="tg-call"><line x1="202" y1="140" x2="120" y2="212"/><circle cx="202" cy="140" r="3"/><text x="40" y="226" class="tg-call__navn">Ramme om kanten</text></g>
</svg>`,
          tekst: `Skematisk. Taget set oppefra. En udskæring til soltag eller ventilationsklap er ikke en konstruktiv ændring, når den har en ramme, ligger symmetrisk om bilens længdeakse (den stiplede linje), højst måler 1,00 m på tværs og 0,50 m på langs, ligger mindst 0,15 m fra tagets kanter og ikke skærer i afstivende profiler. Kilde: <a href="${DF}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hjul og dæk",
        tekst: [
          `Nye hjul og dæk er som udgangspunkt en ændring af de bærende elementer. Bilag 2 undtager dog et hjulskift, der holder sig inden for en række grænser. Så kræver skiftet hverken syn, godkendelse eller registrering.`,
          `Hjulene skal opfylde reglerne om belastning, hastighedskode og afskærmning, og dækket skal passe på fælgen. Dækomkredsen må højst afvige 5 procent fra den nominelle værdi, og sporvidden må højst blive 20 mm bredere. Dæk på samme aksel skal have samme størrelse og type.`,
          `Dækbredden må ikke være mindre end den smalleste, bilen leveres med fra fabrikken med samme motor. Bliver dækkene bredere, må dækkene bag højst vokse 20 mm mere i bredden end dækkene for. Er en af grænserne overskredet, er ændringen konstruktiv og skal godkendes ved syn på grundlag af dokumentation.`,
          `På en bil, hvor køreegenskaberne er afprøvet ved godkendelsen, er grænserne snævrere. Her må dækbredden fx højst ændres 20 mm og fælgdiameteren højst en tomme, med samme ændring for og bag.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Dækomkreds, højst", "±5", "% fra den nominelle værdi"],
            ["Sporvidde, højst", "+20", "mm"],
            ["Bredere dæk bag end for, højst", "20", "mm"]
          ],
          note: `Grænserne gælder, når et hjulskift ikke regnes som en konstruktiv ændring. Kilde: <a href="${DF}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 1.5 og 2.4.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kran, lift og tippelad på rammen",
        tekst: [
          `En læssekran, en læssebagsmæk, et tippelad og lignende skal monteres efter bilfabrikantens anvisninger, står der i bilag 2. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere, at spændingerne i rammen ikke overstiger 150 newton pr. kvadratmillimeter, når udstyret bruges.`,
          `Forlænges eller forkortes chassisrammen, så akselafstand eller overhæng ændres, er det en konstruktiv ændring af de bærende elementer. Den skal godkendes ved syn på grundlag af dokumentation fra bilfabrikanten, en godkendelse eller, for biler over 3.500 kg, en prøvningsinstans. Ved en forkortelse skal det også dokumenteres, at kravene til bremsekraftens fordeling er opfyldt.`,
          `Udstyret ændrer også bilens egenvægt, og er ændringen over 50 kg, skal bilen til registreringssyn alene af den grund. Du kan læse om de enkelte opbygninger i <a href="/til-varebilen/ombygning/ladbil-med-kran/">ladbil med kran</a>, <a href="/til-varebilen/ombygning/bagsmaeklift/">bagsmæklift</a> og <a href="/til-varebilen/ombygning/lad-og-tipper/">lad og tipper</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Ladbil set fra siden med en læssekran bag førerhuset, en bagsmæklift bagpå og chassisrammen fremhævet. Kran og lift monteres efter bilfabrikantens anvisninger."><g transform="translate(24,180)"><rect class="tg-kasse" x="0" y="-64" width="230" height="30"/><rect class="tg-modul" x="0" y="-34" width="300" height="10"/><rect class="tg-kuffert" x="-12" y="-64" width="8" height="58"/><rect class="tg-kuffert" x="236" y="-112" width="14" height="78"/><line class="tg-doer" x1="243" y1="-106" x2="140" y2="-124"/><line class="tg-doer" x1="140" y1="-124" x2="196" y2="-90"/><path class="tg-rum" d="M256,0 L256,-110 Q256,-116 262,-116 L320,-116 L346,-80 L356,-74 Q360,-71 360,-64 L360,-6 Q360,0 354,0 Z"/><path class="tg-profil" d="M300,-106 L318,-106 L340,-80 L300,-80 Z"/><circle class="tg-profil" cx="60" cy="0" r="17"/><circle class="tg-profil" cx="60" cy="0" r="6"/><circle class="tg-profil" cx="300" cy="0" r="17"/><circle class="tg-profil" cx="300" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><g class="tg-call"><line x1="16" y1="130" x2="40" y2="44"/><circle cx="16" cy="130" r="3"/><text class="tg-call__navn" x="5" y="24">Bagsmæklift</text><text class="tg-call__under" x="5" y="38">efter bilfabrikantens anvisning</text></g><g class="tg-call"><line x1="267" y1="96" x2="330" y2="44"/><circle cx="267" cy="96" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Læssekran</text><text class="tg-call__under" x="395" y="38" text-anchor="end">bag førerhuset</text></g><g class="tg-call"><line x1="160" y1="151" x2="150" y2="204"/><circle cx="160" cy="151" r="3"/><text class="tg-call__navn" x="110" y="216">Chassisramme af stål</text><text class="tg-call__under" x="110" y="230">eller spænding højst 150 N pr. mm²</text></g></svg>`,
          tekst: `Skematisk. Læssekran og bagsmæklift monteres efter bilfabrikantens anvisninger. På en chassisramme af stål kan en prøvningsinstans i stedet dokumentere spændingerne i rammen. Kilde: <a href="${DF}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.2.3 og 2.8.2.4</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Højere totalvægt",
        tekst: [
          `Findes en model i flere udgaver, må den tilladte totalvægt og akseltrykket hæves til det, der gælder for en anden udgave af samme model. Det kræver, at bremser og bærende dele, fx hjul, fjedre, bærearme og broer, svarer til den tungere udgave, eventuelt efter udskiftning.`,
          `En prøvningsinstans skal kontrollere, at bilen svarer til den tungere udgave på bremser og bærende dele. Skal totalvægten højere op end det, kræver det, at bilfabrikanten tillader det. En ny tilladt vægt skal altid godkendes ved registreringssyn. Hvad totalvægten betyder for nyttelast og kørekort, står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ]
      },
      {
        overskrift: "Når Færdselsstyrelsen skal godkende",
        tekst: [
          `Lastbiler, sættevogne og personbiler med mere end 8 siddepladser ud over føreren skal have en godkendelseserklæring fra Færdselsstyrelsen og derefter et registreringssyn. Ændres sådan en bil, så den ikke længere svarer til erklæringen, skal den godkendes på ny.`,
          `For typegodkendelsespligtige biler skal Færdselsstyrelsen udstede en godkendelseserklæring for den ombyggede bil, før en konstruktiv ændring af styreapparat, bremser, motor eller bærende elementer kan godkendes ved syn. Styrelsen kan kræve bilen undersøgt hos en synsvirksomhed eller en prøvningsinstans først.`,
          `Udgiften til den forudgående undersøgelse betaler ansøgeren. Færdselsstyrelsen offentliggør de godkendelseserklæringer, styrelsen har udstedt, på sin hjemmeside.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Godkendelseserklæring", "Færdselsstyrelsen kan kræve, at bilen først bliver undersøgt hos en synsvirksomhed eller en prøvningsinstans. Derefter godkender styrelsen den ombyggede bil."],
            ["Registreringssyn", "Bilen godkendes ved et registreringssyn."],
            ["Motorregistret", "Synsvirksomheden registrerer ændringen."]
          ]
        }
      },
      {
        overskrift: "Typegodkendelse i flere trin",
        tekst: [
          `Mange varebiler med lad, kasse eller køl bygges i flere trin. Fabrikanten leverer et basiskøretøj, typisk et chassis, og en opbygger færdiggør det. EU-reglerne står i forordning 2018/858.`,
          `Fabrikanten udsteder et CoC-dokument, der attesterer, at bilen svarer til den godkendte type. Et uændret køretøj med EU-typegodkendelse som ukomplet godkendes ved registreringssyn. Detailforskrifterne har særlige regler for biler til særlig anvendelse, der er opbygget i flere trin.`,
          `Godkender synet en bil i flere udførelser, udsteder synsvirksomheden en supplerende attest. Attesten eller en kopi af den skal være med under kørslen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 170" role="img" aria-label="To chassis med førerhus. Til venstre leverer fabrikanten chassiset. Til højre har opbyggeren bygget en opbygning på."><text class="tg-lille" x="10" y="24">TRIN 1</text><text class="tg-lille" x="225" y="24">TRIN 2</text><rect class="tg-rum" x="10" y="50" width="50" height="50"/><line class="tg-gulvlinje" x1="10" y1="100" x2="170" y2="100"/><circle class="tg-kasse" cx="35" cy="112" r="12"/><circle class="tg-kasse" cx="145" cy="112" r="12"/><line class="tg-pil" x1="180" y1="75" x2="212" y2="75"/><path class="tg-pil" d="M205,69 L212,75 L205,81"/><rect class="tg-rum" x="225" y="50" width="50" height="50"/><rect class="tg-modul" x="280" y="40" width="105" height="58"/><text class="tg-modul__tekst" x="292" y="74">OPBYGNING</text><line class="tg-gulvlinje" x1="225" y1="100" x2="385" y2="100"/><circle class="tg-kasse" cx="250" cy="112" r="12"/><circle class="tg-kasse" cx="360" cy="112" r="12"/><text class="tg-fremhaev" x="10" y="146">Fabrikanten</text><text x="10" y="162">chassis og CoC</text><text class="tg-fremhaev" x="225" y="146">Opbyggeren</text><text x="225" y="162">lad, kasse eller køl</text></svg>`,
          tekst: `Skematisk. Fabrikanten leverer et chassis med CoC, og en opbygger færdiggør bilen med lad, kasse eller køl. Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1685 af 16/12/2025, §§ 3 og 13</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bestilling og kvittering",
        tekst: [
          `Registreringssynet bestilles hos en synshal. Kvitteringen fra synet viser, hvad synet har godkendt, og Færdselsstyrelsen anbefaler at tjekke den, når du får den. Er der fejl på registreringsattesten, skal du kontakte motorekspeditionen, så fejlen kan blive rettet.`
        ],
        punkter: [
          `<strong>Ved bestilling.</strong> Synshallen skal vide, at det er et registreringssyn, og hvorfor, så den kan oplyse om særlige forhold.`,
          `<strong>Medbring.</strong> Tag bilens registreringsattest med.`,
          `<strong>På kvitteringen.</strong> Kvitteringen viser ejer og bruger, stelnummer og registreringsnummer, anvendelse og godkendelsesdato. En trækkrog står oftest som »synsfri sammenkobling«.`
        ],
        punkt_ikon: "trin"
      },
      {
        overskrift: "Det kontrolleres",
        tekst: [
          `Ved registreringssynet kontrollerer synshallen bilens sikkerhed og miljøforhold. En godkendelse betyder ikke nødvendigvis, at bilen er fejlfri eller i god stand økonomisk set, men at den er lovlig at bruge, skriver Færdselsstyrelsen. Synshallen kontrollerer bl.a. disse dele:`
        ],
        punkter: [
          `Styretøj og bremser.`,
          `Lygter og reflekser.`,
          `Bærende dele som hjulophæng, støddæmpere og dæk.`,
          `Udledning af røg og kulilte og generel støj.`
        ]
      },
      {
        overskrift: "Fire mulige resultater",
        tekst: [
          `Registreringssynet ender med en synsrapport med et af fire resultater, skriver Færdselsstyrelsen. Resultatet afgør, om bilen må køre med det samme, og om den skal synes igen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Resultat", "Bilen må køre", "Omsyn"],
          raekker: [
            ["Godkendt", "ja", "nej"],
            ["Betinget godkendt", "efter udbedring", "nej"],
            ["Kan godkendes efter omsyn", "kun til reparation", "ja, inden 60 dage"],
            ["Ikke godkendt", "nej", "nej"]
          ],
          note: `Kilde: <a href="${FS}" rel="noopener">Færdselsstyrelsen: Registreringssyn</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Ved betinget godkendt kan fejlene udbedres uden ny kontrol, og bilen er lovlig, når de er rettet. Ved ikke godkendt sender Køretøjsregistret besked til politiet, som inddrager nummerpladerne.`,
          `Finder synshallen farlige fejl, kan den sætte yderligere begrænsninger på brugen af bilen eller forbyde kørsel helt.`
        ]
      },
      {
        overskrift: "Omsynsfristen",
        tekst: [
          `Kan bilen godkendes efter omsyn, er fristen 60 kalenderdage regnet fra og med synsdatoen. Fristen udskyder ikke et påbud fra Færdselsstyrelsen, og indtil fejlene er rettet, må bilen kun køre den kørsel, der er nødvendig for reparationen.`,
          `Synsvirksomheden kan ikke forlænge fristen. Til omsynet afleverer du rapporten fra det seneste syn og den dokumentation, rapporten kræver. Bilen bliver godkendt, når alle fejl fra sidste kontrol er rettet, og der ikke er nye fejl.`,
          `Mangler der kun dokumentation, som ikke kræver, at bilens indretning og udstyr bliver kontrolleret, kan synsvirksomheden tillade et omsyn uden bilen.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Synsdagen", "Bilen kan godkendes efter omsyn. Fristen regnes fra og med synsdatoen."],
            ["Indtil fejlene er rettet", "Bilen må kun køre den kørsel, der er nødvendig for reparationen."],
            ["Ved omsynet", "Rapporten fra synet og den dokumentation, rapporten kræver, skal med."],
            ["Senest 60 kalenderdage efter", "Fristen kan ikke forlænges og udskyder ikke et påbud fra Færdselsstyrelsen."]
          ],
          note: `Kilder: <a href="${BEK}" rel="noopener">BEK nr. 1685 af 16/12/2025, §§ 78–82</a> og <a href="${FS}" rel="noopener">Færdselsstyrelsen: Registreringssyn</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Efter synet",
        tekst: [
          `Synsvirksomheden registrerer ændringen i Motorregistret og skal indberette resultatet til Motorstyrelsen straks efter registreringssynet. Den registrerede ejer bestiller en ny registreringsattest, hvis den skal bruges, skriver Motorstyrelsen.`,
          `Er bilen ikke registreret endnu, afleverer du dokumenterne fra registreringssynet til en nummerpladeoperatør eller et af Motorstyrelsens motorcentre, når bilen skal indregistreres.`,
          `Ombygger I en leaset bil, er det leasingselskabet, der er ejer. Leasingaftalen afgør, om bilen må bygges om, og det er leasingselskabet som registreret ejer, der bestiller en ny registreringsattest.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal synsvirksomheden vide",
    spoergsmaal_manchet: "Så kan synet godkende ombygningen første gang.",
    spoergsmaal: [
      "Registreringsattesten og bilens nuværende data.",
      "Hvad der er ændret, med dokumentation fra opbygger, bilfabrikant eller prøvningsinstans.",
      "Den nye egenvægt efter ombygningen.",
      "Eventuel godkendelseserklæring fra Færdselsstyrelsen.",
      "Om bilens anvendelse eller tilladte vægte skal ændres.",
      "Om der er skiftet hjul eller dæk, og hvilke dimensioner de nye har."
    ],
    faq: [
      ["Hvad hedder synet efter en ombygning?", "Registreringssyn. Bekendtgørelsen om godkendelse og syn af køretøjer bruger ikke ordet ændringssyn."],
      ["Hvad er et omsyn?", "En kontrol af, at fejl fundet ved et tidligere syn er udbedret."],
      ["Skal man til syn efter montering af trækkrog?", "Ikke hvis bilen er registreret for mindre end 8 år siden og har en totalvægt på højst 3.500 kg. Så godkendes trækket hos en nummerpladeoperatør med blanket 21.053."],
      ["Hvornår skal en ombygning synes?", "Ved konstruktive ændringer, når egenvægten ændres med mere end 50 kg, ved nye tilladte vægte og ved andre ændringer af de registrerede tekniske data."],
      ["Hvad er en konstruktiv ændring?", "Enhver ændring af styreapparat, bremser, motor og bærende elementer, medmindre bilag 2 i detailforskrifterne undtager den."],
      ["Hvad er typegodkendelse i flere trin?", "Fabrikanten leverer et basiskøretøj, og en opbygger færdiggør bilen. Reglerne står i EU-forordning 2018/858."],
      ["Hvad betyder betinget godkendt ved syn?", "At der er fundet mindre fejl, som skal repareres. De kan udbedres uden ny kontrol, men bilen er først lovlig, når de er rettet."],
      ["Hvor lang tid har man til omsyn?", "60 kalenderdage regnet fra og med synsdatoen. Fristen kan ikke forlænges, og den udskyder ikke et påbud."],
      ["Kræver nye fælge og dæk syn?", "Ikke hvis hjulskiftet holder sig inden for grænserne i bilag 2, fx højst 5 procent ændring af dækomkredsen og højst 20 mm bredere sporvidde. Ellers er det en konstruktiv ændring, der skal godkendes ved syn."],
      ["Hvordan skal en kran på ladbilen godkendes?", "Kranen skal monteres efter bilfabrikantens anvisninger. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere spændingerne i rammen. Kranen ændrer også egenvægten, så bilen skal til registreringssyn."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025)", url: BEK, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), bilag 2", url: DF, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Ændring af køretøjets udstyr eller anvendelse", url: MST, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Omregistrering (syn ved ejerskifte)", url: OMREG, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Registreringssyn", url: FS, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["BEK 1685/2025 § 3, nr. 11: rapport er det dokument, en synsvirksomhed udsteder efter registreringssyn og øvrige kontroller; nr. 12: CoC er fabrikantens dokument, der attesterer, at køretøjet er i overensstemmelse med den godkendte køretøjstype.", BEK],
    ["BEK 1685/2025 § 5, stk. 3: kravet om registreringssyn ved ændring af tilladte vægte gælder ikke ved nedsættelse af tilladt vægt af påhængskøretøj med bremser for bil op til 3.500 kg.", BEK],
    ["Færdselsstyrelsen nævner som eksempel på ændret art og anvendelse en personbil til privat personkørsel, der er ombygget til en varebil til godstransport, og nævner styretøj, bremser, motor, hjul, fjedre og karrosseri som konstruktive ændringer.", FS],
    ["Motorstyrelsen: ved trækkrog hos nummerpladeoperatør medbringes seneste registreringsattest og blanketten; virksomheder momsregistreret som autoreparationsværksted eller detailhandel med biler eller campingvogne kan søge adgang til at erklære synsfri sammenkobling i Motorregistret; registreret ejer skal bestille ny registreringsattest.", MST],
    ["Motorstyrelsen: synsvirksomheden registrerer ændringen i Motorregistret, også ved ændret anvendelse.", MST],
    ["BEK 1484/2025 bilag 2, pkt. 2.8.2 (1): konstruktive ændringer af karrosseri eller chassisramme godkendes ved syn på grundlag af dokumentation fra bilfabrikanten, en godkendelse, dokumentation fra en prøvningsinstans eller dokumentation for en erstatningschassisramme fra en komponentfabrikant, der har fremstillet mindst 200 chassisrammer.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 1.2 og 1.3: en godkendelse er udfærdiget af en teknisk tjeneste med bemyndigelse; en prøvningsinstans er en godkendt prøvningsinstans eller en udpeget teknisk tjeneste.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 1.1 (5): udskiftning eller ændring af gearkasse eller differentiale anses ikke som en konstruktiv ændring af motoren.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 2.4.1: ændring af hjul er ikke en konstruktiv ændring, hvis bl.a. hjulene opfylder krav om belastning, hastighedskode og afskærmning, dækomkredsen afviger højst ±5 % i nominel værdi, dækket passer på fælgen, dækbreddeforøgelsen bag højst overstiger forhjulenes med 20 mm, dækbredden ikke er mindre end den mindste, motorudgaven leveres med, sporvidden ikke er forøget med mere end 20 mm, og dæk på samme aksel er af samme størrelse og type; ellers er ændringen konstruktiv (pkt. 2.4.2).", DF],
    ["BEK 1484/2025 bilag 2, pkt. 1.5: på afprøvede køretøjer anses bl.a. ændring af dækbredde på maks. 20 mm og fælgdiameter på maks. en tomme, med samme ændring for og bag, ikke som konstruktiv ændring.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 2.8.2.4: læssekran, læssebagsmæk, tippelad eller lignende skal monteres efter køretøjsfabrikantens anvisninger; har bilen chassisramme af stål, kan en prøvningsinstans alternativt dokumentere, at spændingerne i chassisrammen ikke overstiger 150 N/mm2.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 2.8.2.3: ændring af akselafstand og overhæng er en konstruktiv ændring af de bærende elementer, der godkendes på grundlag af dokumentation fra bilfabrikanten, en godkendelse eller (for stålramme på bil over 3.500 kg) en prøvningsinstans; ved forkortelser skal kravene om bremsekraftfordeling også dokumenteres.", DF],
    ["BEK 1484/2025 bilag 2, pkt. 2.7.2: findes en bilmodel i flere varianter, må tilladt totalvægt og akseltryk forøges til en anden varians værdier, hvis bremser og bærende elementer svarer til varianten med den større vægt; en prøvningsinstans skal kontrollere det; større forøgelser kræver, at bilfabrikanten tillader det.", DF],
    ["BEK 1685/2025 §§ 18 og 19: udgifter til Færdselsstyrelsens forudgående undersøgelse betales af ansøgeren; Færdselsstyrelsen offentliggør udstedte godkendelseserklæringer på sin hjemmeside.", BEK],
    ["BEK 1685/2025 § 10, stk. 1, nr. 4, og stk. 4: ved godkendelse af et køretøj i flere udførelser udsteder synsvirksomheden en supplerende attest, som eller en kopi af den skal medbringes under kørsel.", BEK],
    ["Færdselsstyrelsen: ved fejl på registreringsattesten skal man straks kontakte motorekspeditionen; en godkendelse betyder ikke nødvendigvis, at køretøjet er fejlfrit eller i god stand økonomisk set, men at det er lovligt at anvende; ved farlige fejl kan synshallen fastsætte yderligere restriktioner eller forbyde kørsel.", FS],
    ["BEK 1685/2025 §§ 78-82: omsynsfristen på 60 kalenderdage regnes fra og med synsdatoen og kan ikke forlænges; ved omsyn afleveres seneste rapport og påkrævet dokumentation; køretøjet godkendes, når alle fejl er udbedret og der ikke er nye fejl; mangler alene dokumentation, der ikke kræver kontrol af indretning og udstyr, kan omsyn tillades uden køretøjet.", BEK],
    ["BEK 1685/2025 § 75, stk. 2: synsvirksomheden skal indberette resultatet til Motorstyrelsen straks efter et registreringssyn.", BEK],
    ["Færdselsstyrelsen: efter registreringssynet afleveres dokumenterne til en nummerpladeoperatør eller et af Motorstyrelsens motorcentre, når køretøjet skal indregistreres.", FS]
  ]
};
