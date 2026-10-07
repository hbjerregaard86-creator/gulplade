// Underside /til-varebilen/vinterhjul/vinterdaek-i-udlandet/ (07-10-2026)
var STVO = `https://www.gesetze-im-internet.de/stvo_2013/__2.html`;
var STVZO = `https://www.gesetze-im-internet.de/stvzo_2012/__36.html`;
var TSV = `https://www.transportstyrelsen.se/sv/vagtrafik/fordon/fordonsregler/dack/vinterdack/`;
var SVV = `https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/`;
var FSMIS = `https://www.fstyr.dk/nyheder/2025/okt/misforstaaelser-om-vinterdaek-det-siger-reglerne`;
var FSDAEK = `https://www.fstyr.dk/privat/krav-til-koeretoejer/vejledning-om-daek`;
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var HES = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;

module.exports = {
  id: "vinterhjul/vinterdaek-i-udlandet",
  side: {
    slug: "vinterdaek-i-udlandet",
    navn: "Vinterdæk i udlandet",
    titel: "Vinterdæk i Tyskland, Sverige og Norge",
    kort: `Vi sammenligner reglerne for vinterdæk, mønsterdybde, pigdæk og anhængere i Tyskland, Sverige og Norge med Danmarks.`,
    beskrivelse: `Se kravene til vinterdæk i udlandet: alpesymbol i Tyskland, 3 mm mønster i Sverige og Norge, perioder for pigdæk og regler for anhængeren.`,
    manchet: `Danmark har ingen vinterdækpligt, men nabolandene har. Tyskland kræver alpesymbolet ved glat føre, og Sverige og Norge kræver 3 mm mønster om vinteren. Her finder du reglerne fra de tre landes myndigheder for en varebil op til 3.500 kg, sammenlignet med de danske.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Tyskland", "Alpesymbol", "på alle hjul ved glat føre"],
        ["Sverige og Norge", "mindst 3 mm", "mønster om vinteren"],
        ["Vinterdæk i Sverige", "1. dec.–31. mar.", "når der er vinterføre"],
        ["Pigdæk i Danmark", "1. nov.–15. apr.", "på alle hjul"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Danmark som udgangspunkt",
        tekst: [
          `I Danmark er der ikke krav om vinterdæk. Dæk må ikke være åbenbart uegnede til føret, og M+S-dæk er godkendte vinterdæk. Pigdæk er tilladt fra 1. november til 15. april, hvis de sidder på alle hjul.`,
          `Færdselsloven blev præciseret den 1. juli 2025. Føreren har ansvaret for, at dækkene passer til det føre, der er, og det føre, der kan ventes under turen, og skal vurdere det, før bilen kører. Færdselsstyrelsen skriver, at der ikke er tale om nye regler, men om en tydeliggørelse.`,
          `Pigdækkene skal sidde på alle hjul på bilen og på en eventuel anhænger, og antallet af pigge skal være omtrent det samme på alle hjul.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Krav om vinterdæk", "Nej", ""],
            ["Pigdæk tilladt", "1. nov.–15. apr.", "på alle hjul"]
          ],
          note: `M+S-dæk er godkendte vinterdæk i Danmark. Kilder: <a href="${FSMIS}" rel="noopener">Færdselsstyrelsen</a> og <a href="${SYN}" rel="noopener">detailforskrifterne, § 18</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FSMIS}" rel="noopener">Færdselsstyrelsen</a> og <a href="${SYN}" rel="noopener">detailforskrifterne, § 18</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Åbenbart uegnede dæk",
        tekst: [
          `Bliver du under kørslen fanget i vejr, som dækkene ikke er egnede til, må du ifølge færdselsloven ikke køre videre. Kører du videre på åbenbart uegnede dæk, kan politiet give en bøde, skriver Færdselsstyrelsen.`,
          `Færdselsstyrelsen anbefaler vinterdæk med 3PMSF-mærket, hvis du venter at køre i hårdt vinterføre. Fraråder politiet al udkørsel i ekstremt vintervejr, og er du alligevel nødt til at køre, anbefaler Færdselsstyrelsen kun at køre med 3PMSF-dæk og vinterberedskab.`,
          `Danmark har de færreste krav af de fire lande på siden. Nabolandene har faste krav til mærkning og mønster.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 254" role="img" aria-label="Beslutningstræ for den danske regel. Er der sne, is eller sjap, eller kan det komme under turen, og har bilen ikke M+S- eller 3PMSF-dæk, kan dækkene være åbenbart uegnede, og føreren må ikke køre videre."><defs><marker id="pil-udland-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="44"/><text class="tg-fremhaev" x="200" y="33" text-anchor="middle">Sne, is eller sjap nu eller under turen?</text><line class="tg-pil" x1="120" y1="50" x2="104" y2="76" marker-end="url(#pil-udland-1)"/><text x="104" y="66" text-anchor="end">Ja</text><line class="tg-pil" x1="280" y1="50" x2="296" y2="76" marker-end="url(#pil-udland-1)"/><text x="296" y="66">Nej</text><rect class="tg-kasse" x="10" y="80" width="200" height="50"/><text x="110" y="100" text-anchor="middle">Har bilen M+S- eller</text><text class="tg-fremhaev" x="110" y="118" text-anchor="middle">3PMSF-dæk?</text><rect class="tg-kasse" x="220" y="80" width="170" height="50"/><text x="305" y="100" text-anchor="middle">Almindelige krav</text><text x="305" y="118" text-anchor="middle">1,6 mm, rette tryk</text><line class="tg-pil" x1="60" y1="130" x2="60" y2="164" marker-end="url(#pil-udland-1)"/><text x="52" y="152" text-anchor="end">Ja</text><line class="tg-pil" x1="160" y1="130" x2="210" y2="164" marker-end="url(#pil-udland-1)"/><text x="196" y="146">Nej</text><rect class="tg-modul" x="10" y="168" width="150" height="58"/><text class="tg-modul__tekst" x="85" y="190" text-anchor="middle">Godkendt vinterdæk</text><text class="tg-modul__tekst" x="85" y="208" text-anchor="middle">3PMSF ved hårdt føre</text><rect class="tg-kuffert" x="170" y="168" width="220" height="58"/><text x="280" y="190" text-anchor="middle">Kan være åbenbart uegnede</text><text x="280" y="208" text-anchor="middle">må ikke køre videre</text><text class="tg-lille" x="200" y="246" text-anchor="middle">FÆRDSELSLOVEN, PRÆCISERET 1. JULI 2025</text></svg>`,
          tekst: `Skematisk. Den danske regel om åbenbart uegnede dæk. Kilder: <a href="${FSMIS}" rel="noopener">Færdselsstyrelsen: Misforståelser om vinterdæk</a> og <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tyskland",
        tekst: [
          `Tyskland har ingen fast vinterdækperiode. Kravet følger føret og står i færdselsreglerne, StVO § 2, stk. 3a, mens kravet om alpesymbolet står i reglerne for køretøjer, StVZO § 36.`
        ],
        punkter: [
          `<strong>Hvornår.</strong> Kravet gælder ved glatis, sneglat føre, snesjap, isglat eller rimglat føre. Der er ingen fast periode.`,
          `<strong>Hvilke hjul.</strong> Kravet gælder alle hjul. Lastbiler og busser (N2, N3, M2 og M3) kan nøjes med drivakslerne og den forreste styreaksel, men en varebil er N1.`,
          `<strong>Hvilke dæk.</strong> Dækkene skal have alpesymbolet (et bjerg med et snefnug) efter FN-regulativ 117.`,
          `<strong>Mønster.</strong> Hovedmønsteret skal være mindst 1,6 mm.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Varebil set ovenfra med dæk med alpesymbolet på alle fire hjul"><text class="tg-lille" x="20" y="104">FRONT</text><rect class="tg-rum" x="70" y="50" width="260" height="100" rx="12"/><rect class="tg-modul" x="100" y="38" width="44" height="14"/><rect class="tg-modul" x="100" y="148" width="44" height="14"/><rect class="tg-modul" x="256" y="38" width="44" height="14"/><rect class="tg-modul" x="256" y="148" width="44" height="14"/><path class="tg-modul" d="M184,80 L194,62 L200,72 L206,60 L216,80 Z"/><text class="tg-fremhaev" x="200" y="100" text-anchor="middle">Alpesymbol på alle hjul</text><text class="tg-lille" x="200" y="118" text-anchor="middle">VED GLAT FØRE</text><text class="tg-lille" x="0" y="190">VAREBIL (N1) SET OVENFRA</text></svg>`,
          tekst: `Skematisk. En varebil i Tyskland skal have dæk med alpesymbolet på alle fire hjul ved glat føre. Kilde: <a href="${STVO}" rel="noopener">StVO § 2, stk. 3a</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${STVO}" rel="noopener">StVO § 2, stk. 3a</a> og <a href="${STVZO}" rel="noopener">StVZO § 36</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Alpesymbolet i Tyskland",
        tekst: [
          `StVZO § 36, stk. 4 beskriver et vinterdæk som et dæk, hvor mønster, gummiblanding eller opbygning gør det bedre i sne, når bilen sætter i gang, holder retningen og bremser. Dækket skal også have alpesymbolet efter FN-regulativ 117.`,
          `Et dæk, der kun er mærket M+S, opfylder derfor ikke det tyske krav. Det er godkendt som vinterdæk i Danmark, så en varebil på rene M+S-dæk kan være lovlig hjemme og ulovlig på glat føre syd for grænsen.`,
          `Mønsterkravet i Tyskland er det samme som i Danmark. Hovedmønsteret skal have mindst 1,6 mm hele vejen rundt, og det måles i den midterste del, der dækker cirka tre fjerdedele af slidbanen.`
        ],
        efter: [
          `Kilde: <a href="${STVZO}" rel="noopener">StVZO § 36, stk. 3 og 4</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vinterdæk med lavere hastighedsindeks i Tyskland",
        tekst: [
          `Har vinterdækket en lavere tilladt hastighed end bilens tophastighed, skal dækkets hastighed stå i førerens synsfelt på et skilt eller en mærkat, eller vises i bilen. Føreren må ikke køre hurtigere end dækkets tilladte hastighed. Kilde: <a href="${STVZO}" rel="noopener">StVZO § 36, stk. 5</a>, set den 4. oktober 2026.`,
          `Reglen gælder også terrændæk til erhverv med mærket POR. Visningen i bilen skal komme senest, før bilen når dækkets tilladte hastighed.`,
          `I Danmark må en bil køre på vinterdæk, der er beregnet til mindst 160 km/t, svarende til hastighedsmærket Q, selvom bilen kan køre hurtigere. Det står i Færdselsstyrelsens synsvejledning, afsnit 8.02.020.`
        ]
      },
      {
        overskrift: "Sverige",
        tekst: [
          `Sverige har en fast periode, men kravet gælder kun, når der er vinterføre. Reglerne står i Transportstyrelsens forskrifter TSFS 2009:19, og varebiler op til 3.500 kg hører til de lette lastbiler.`
        ],
        punkter: [
          `<strong>Periode.</strong> Fra 1. december til 31. marts skal personbiler og lette lastbiler have vinterdæk, når der er vinterføre.`,
          `<strong>Vinterføre.</strong> Der er vinterføre, når der er sne, is, snesjap eller rim på en del af vejen. Politiet afgør det på stedet.`,
          `<strong>Mønster.</strong> Mønsteret skal være mindst 3 mm, når kravet om vinterdæk gælder.`,
          `<strong>Uden pigge.</strong> Et dæk uden pigge skal have alpesymbolet. Isgrebsmærkningen er frivillig.`,
          `<strong>Pigdæk.</strong> Pigdæk er tilladt fra 1. oktober til 15. april og ved vinterføre uden for perioden. Lette lastbiler må ikke blande dæk med og uden pigge.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. oktober", "Pigdæk er tilladt fra denne dato, og tidligere, hvis der er eller ventes vinterføre."],
            ["1. december", "Ved vinterføre skal varebiler op til 3.500 kg have vinterdæk med mindst 3 mm mønster."],
            ["31. marts", "Sidste dag med krav om vinterdæk ved vinterføre."],
            ["15. april", "Sidste dag for pigdæk, medmindre der er eller ventes vinterføre."]
          ],
          note: `Kilde: <a href="${TSV}" rel="noopener">Transportstyrelsen, Vinterdäck</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${TSV}" rel="noopener">Transportstyrelsen, Vinterdäck</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Vinterføre og undtagelser i Sverige",
        tekst: [
          `Transportstyrelsen skriver, at bilen skal have vinterdæk eller tilsvarende udstyr, når der er vinterføre. Det er politiet, der vurderer føret på det sted, hvor bilen kører.`,
          `Kravet har få undtagelser, og de gælder kun, når bilen kan køre uden fare for trafiksikkerheden. Bilen må prøvekøres eller bugseres i forbindelse med en reparation og køre ad korteste vej til og fra syn. Det gælder også biler med fælge på højst 10 tommer og biler, der er 30 år eller ældre.`,
          `Isgrebsmærket viser, at dækket er testet og har klaret bestemte grænser for greb på is. Det er ikke et krav i Sverige.`
        ],
        efter: [
          `Kilde: <a href="${TSV}" rel="noopener">Transportstyrelsen, Vinterdäck</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Norge",
        tekst: [
          `I Norge er kravene knyttet til mønsterdybde og vejgreb. Statens vegvesen skriver, at føreren har ansvaret for, at bilen har tilstrækkeligt vejgreb hele året, og at sommerdæk ikke kan bruges på vinterføre.`,
          `Er det nødvendigt for vejgrebet, skal bilen have vinterdæk med eller uden pigge, kæder eller lignende, også uden for perioderne.`
        ],
        punkter: [
          `<strong>Vintertid.</strong> Fra 1. november til og med første søndag efter 2. påskedag skal mønsteret være mindst 3 mm. I Nordland, Troms og Finnmark gælder det fra 16. oktober til 30. april.`,
          `<strong>Sommertid.</strong> I sommertiden skal mønsteret være mindst 1,6 mm.`,
          `<strong>Pigdæk.</strong> Pigdæk må bruges i de samme perioder og skal sidde på alle hjul. Ved behov må de også bruges uden for perioderne.`,
          `<strong>Uden pigge.</strong> Vinterdæk uden pigge må bruges hele året.`,
          `<strong>Over 3.500 kg.</strong> Biler over 3.500 kg har egne krav til mønster og vinterdæk.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["1. november", "Vintertiden begynder, og mønsteret skal være mindst 3 mm."],
            ["Første søndag efter 2. påskedag", "Vintertiden slutter, og kravet er igen 1,6 mm."],
            ["Nordland, Troms og Finnmark", "Her gælder vintertiden fra 16. oktober til 30. april."]
          ],
          note: `Pigdæk må bruges i de samme perioder. Kilde: <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${SVV}" rel="noopener">Statens vegvesen, Krav til dekk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Påsken flytter den norske frist",
        tekst: [
          `Vintertiden slutter den første søndag efter 2. påskedag. Hvor længe kravet om 3 mm gælder, varierer derfor fra år til år, alt efter hvornår påsken falder, skriver Statens vegvesen.`,
          `I Nordland, Troms og Finnmark følger perioden faste datoer fra 16. oktober til 30. april. En varebil, der kører i Nordnorge i oktober, skal altså have 3 mm mønster godt to uger før resten af landet.`,
          `Statens vegvesen skriver også, at hjulboltene skal efterspændes efter ca. 40 km efter hvert hjulskift, og at rigtig mærkning og mønsterdybde ikke er en garanti for godt nok vejgreb.`
        ]
      },
      {
        overskrift: "Perioderne side om side",
        tekst: [
          `Tegningen viser perioderne fra oktober til april i Danmark, Sverige og Norge. Tyskland er ikke med, fordi det tyske krav følger føret og ikke kalenderen.`,
          `Den svenske periode for pigdæk begynder en måned før den danske. Den norske vintertid slutter på en dato, der afhænger af påsken.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Perioder for vinterregler i Danmark, Sverige og Norge fra oktober til april"><text x="126" y="28">okt</text><line x1="120" y1="36" x2="120" y2="170" class="tg-skinne-tynd"/><text x="164" y="28">nov</text><line x1="158" y1="36" x2="158" y2="170" class="tg-skinne-tynd"/><text x="202" y="28">dec</text><line x1="196" y1="36" x2="196" y2="170" class="tg-skinne-tynd"/><text x="240" y="28">jan</text><line x1="234" y1="36" x2="234" y2="170" class="tg-skinne-tynd"/><text x="278" y="28">feb</text><line x1="272" y1="36" x2="272" y2="170" class="tg-skinne-tynd"/><text x="316" y="28">mar</text><line x1="310" y1="36" x2="310" y2="170" class="tg-skinne-tynd"/><text x="354" y="28">apr</text><line x1="348" y1="36" x2="348" y2="170" class="tg-skinne-tynd"/><line x1="386" y1="36" x2="386" y2="170" class="tg-skinne-tynd"/><text x="4" y="62">DK pigdæk</text><rect x="158" y="50" width="209" height="16" class="tg-modul"/><text x="4" y="92">SE vinterdæk*</text><rect x="196" y="80" width="152" height="16" class="tg-modul"/><text x="4" y="122">SE pigdæk</text><rect x="120" y="110" width="247" height="16" class="tg-modul"/><text x="4" y="152">NO 3 mm og pig</text><rect x="158" y="140" width="190" height="16" class="tg-modul"/><line x1="348" y1="148" x2="386" y2="148" class="tg-skinne"/><text x="4" y="192" class="tg-lille">* VED VINTERFØRE. NO: TIL EFTER PÅSKE</text></svg>`,
          tekst: `Skematisk. Perioder fra oktober til april. Den stiplede del viser, at den norske vintertid slutter efter påske. Kilder: <a href="${SYN}" rel="noopener">Færdselsstyrelsen</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Godkendt som vinterdæk",
        tekst: [
          `Mærkningen afgør, om et dæk uden pigge tæller som vinterdæk. M+S står for mud and snow, og 3PMSF er alpesymbolet med tre bjergtinder og et snefnug.`,
          `I Sverige må dæk med kun M+S bruges på andre aksler end driv- og foraksler på biler over 3.500 kg og på anhængere over 3.500 kg. På anhængere op til 3.500 kg er M+S-dæk, der er lavet til vinterkørsel, tilladt til og med den 30. november 2028.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Mærkning", "Danmark", "Tyskland", "Sverige"],
          raekker: [
            ["Kun M+S", "ja", "nej", "nej"],
            ["M+S og 3PMSF", "ja", "ja", "ja"]
          ],
          note: `Varebil op til 3.500 kg, dæk uden pigge. Kilder: <a href="${FSMIS}" rel="noopener">Færdselsstyrelsen</a>, <a href="${STVZO}" rel="noopener">StVZO § 36, stk. 4</a> og <a href="${TSV}" rel="noopener">Transportstyrelsen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde om de svenske overgangsregler: <a href="${TSV}" rel="noopener">Transportstyrelsen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mønsterdybden om vinteren",
        tekst: [
          `Danmark og Tyskland kræver 1,6 mm hele året. Sverige og Norge kræver 3 mm i vinterperioden, og i Sverige gælder kravet, når der er vinterføre fra 1. december til 31. marts.`,
          `Hessel anbefaler at skifte vinterdæk ved 4 mm. Sådan måler du mønsteret, står i <a href="/til-varebilen/vinterhjul/daektryk-og-moensterdybde/">dæktryk og mønsterdybde</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Danmark", "1,6", "mm"],
            ["Tyskland", "1,6", "mm"],
            ["Sverige", "3", "mm"],
            ["Norge", "3", "mm"]
          ],
          note: `Vinterperioden for varebiler op til 3.500 kg. Kilder: <a href="${SYN}" rel="noopener">Færdselsstyrelsen</a>, <a href="${STVZO}" rel="noopener">StVZO § 36</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Et dæk med 2 mm mønster er lovligt i Danmark og Tyskland, men ikke på vinterføre i den svenske vinterperiode og ikke i den norske vintertid. Kilde om Hessel: <a href="${HES}" rel="noopener">Hessel</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pigdæk i tre lande",
        tekst: [
          `Pigdæk er tilladt i Danmark, Sverige og Norge, men perioderne og kravene til hjulene er forskellige. Danmark har ingen undtagelse for vinterføre uden for perioden.`,
          `En varebil, der har fået pigdæk på i Sverige i oktober, må derfor først køre med dem i Danmark fra den 1. november.`,
          `I Sverige må en let lastbil ikke blande dæk med og uden pigge. En bil uden pigdæk må godt trække en anhænger med pigdæk, men har bilen pigdæk, skal anhængeren også have det.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Pigdæk", "Danmark", "Sverige", "Norge"],
          raekker: [
            ["Periode", "1. nov.–15. apr.", "1. okt.–15. apr.", "1. nov. til første søndag efter 2. påskedag"],
            ["Uden for perioden, når føret kræver det", "nej", "ja", "ja"],
            ["Krav til hjulene", "Alle hjul på bil og anhænger", "Ingen blanding af dæk med og uden pigge", "Alle hjul"],
            ["Anhængeren skal have pigdæk, når bilen har det", "ja", "ja", "ikke nævnt"]
          ],
          note: `I Nordland, Troms og Finnmark gælder den norske periode fra 16. oktober til 30. april. Kilder: <a href="${SYN}" rel="noopener">detailforskrifterne, § 18</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Anhængeren",
        tekst: [
          `Reglerne for anhængeren følger ikke altid bilens, og de er forskellige fra land til land. Det betyder noget for håndværkere, der kører med trailer om vinteren.`
        ],
        punkter: [
          `<strong>Danmark.</strong> Færdselsstyrelsen vurderer, at dæktypen på en anhænger som udgangspunkt ikke er afgørende for vejgrebet i vinterføre. Pigdæk skal sidde på hele vogntoget.`,
          `<strong>Sverige.</strong> Anhængeren skal have vinterdæk fra 1. december til 31. marts ved vinterføre, når trækkøretøjet vejer højst 3.500 kg. Har bilen pigdæk, skal anhængeren også have det.`,
          `<strong>Norge.</strong> Anhængeren har samme krav til mønsterdybde som bilen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 228" role="img" aria-label="Varebil med anhænger set fra siden. Alle hjul på vogntoget er fremhævet, og under tegningen står reglerne for anhængeren i Danmark, Sverige og Norge."><text class="tg-lille" x="10" y="20">VAREBIL MED ANHÆNGER</text><rect class="tg-rum" x="30" y="90" width="120" height="46"/><line class="tg-gulvlinje" x1="150" y1="126" x2="170" y2="126"/><circle class="tg-modul" cx="90" cy="140" r="14"/><circle class="tg-profil" cx="90" cy="140" r="5"/><path class="tg-rum" d="M170,140 L170,60 Q170,56 174,56 L330,56 L352,86 L374,92 Q380,94 380,100 L380,136 Q380,140 376,140 Z"/><path class="tg-profil" d="M318,62 L330,62 L348,88 L318,88 Z"/><circle class="tg-modul" cx="205" cy="140" r="14"/><circle class="tg-profil" cx="205" cy="140" r="5"/><circle class="tg-modul" cx="340" cy="140" r="14"/><circle class="tg-profil" cx="340" cy="140" r="5"/><line class="tg-gulvlinje" x1="10" y1="154" x2="390" y2="154"/><text class="tg-fremhaev" x="10" y="180">DK</text><text x="40" y="180">Pigdæk skal sidde på hele vogntoget.</text><text class="tg-fremhaev" x="10" y="200">SE</text><text x="40" y="200">Har bilen pigdæk, skal anhængeren også.</text><text class="tg-fremhaev" x="10" y="220">NO</text><text x="40" y="220">Anhængeren har samme mønsterkrav.</text></svg>`,
          tekst: `Skematisk. Reglerne for anhængerens dæk i de tre nordiske lande. Kilder: <a href="${SYN}" rel="noopener">detailforskrifterne, § 18</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen</a>, <a href="${SYN}" rel="noopener">detailforskrifterne, § 18</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026. Du kan læse mere om anhængere i Håndbogen under <a href="/haandbogen/anhaenger-bag-varebilen/">anhænger bag varebilen</a>.`
        ]
      },
      {
        overskrift: "Ruten trin for trin",
        tekst: [
          `Et eksempel viser, hvordan reglerne spiller sammen. En varebil kører i januar fra Danmark gennem Sverige til Norge og har M+S-dæk uden alpesymbol med 2 mm mønster.`,
          `Dækkene er lovlige i Danmark, så længe de ikke er åbenbart uegnede til føret. I Sverige opfylder de ikke kravet ved vinterføre, fordi de mangler alpesymbolet og har under 3 mm. I Norge er 2 mm for lidt i vintertiden.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Danmark", "M+S-dæk er godkendte vinterdæk, og 1,6 mm mønster er nok, hvis dækkene passer til føret."],
            ["Sverige", "Ved vinterføre fra 1. december til 31. marts kræves alpesymbolet og mindst 3 mm."],
            ["Norge", "I vintertiden kræves mindst 3 mm, uanset om der er sne på vejen."],
            ["Hjem igen", "Pigdæk må kun bruges i Danmark fra 1. november til 15. april og på alle hjul."]
          ]
        },
        efter: [
          `Kilder: <a href="${FSMIS}" rel="noopener">Færdselsstyrelsen</a>, <a href="${TSV}" rel="noopener">Transportstyrelsen</a> og <a href="${SVV}" rel="noopener">Statens vegvesen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hårdt vintervejr og helårsdæk",
        tekst: [
          `Færdselsstyrelsen anbefaler at have supplerende vinterberedskab med, når du kører i hårdt vinterføre. Statens vegvesen nævner kæder ved siden af vinterdæk som en måde at sikre vejgrebet, og i Norge må pigdæk og kæder bruges uden for perioderne, når føret kræver det.`,
          `Et helårsdæk med alpesymbolet opfylder mærkningskravet i Tyskland og Sverige, mens et helårsdæk uden symbolet ikke gør. Færdselsstyrelsen skriver, at helårsdæk er en markedsføringsbetegnelse, så det er mærkningen på dækket, der tæller. Mere i <a href="/til-varebilen/vinterhjul/helaarsdaek-til-varebil/">helårsdæk til varebil</a>.`
        ],
        efter: [
          `Kilder: <a href="${FSDAEK}" rel="noopener">Færdselsstyrelsen: Vejledning om dæk</a>, <a href="${SVV}" rel="noopener">Statens vegvesen</a>, <a href="${STVZO}" rel="noopener">StVZO § 36</a> og <a href="${TSV}" rel="noopener">Transportstyrelsen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Her står reglerne",
        tekst: [
          `Reglerne kan ændre sig fra sæson til sæson, så det er myndighedernes egne sider, der gælder. Transportstyrelsens side om vinterdæk var senest opdateret den 27. maj 2026, da vi så den den 7. oktober 2026.`
        ],
        kort: [
          ["Danmark", "Færdselsloven og detailforskrifternes § 18 om pigdæk. Færdselsstyrelsen beskriver reglerne."],
          ["Tyskland", "StVO § 2, stk. 3a om dæk ved glat føre og StVZO § 36 om dæk og alpesymbol."],
          ["Sverige", "Transportstyrelsens forskrifter TSFS 2009:19 om brug af dæk."],
          ["Norge", "Forskrift om bruk av kjøretøy § 1-4, som Statens vegvesen henviser til."]
        ]
      }
    ],
    spoergsmaal_titel: "Det skal dækleverandøren vide",
    spoergsmaal_manchet: "Så kan de finde dæk, der passer til ruten.",
    spoergsmaal: [
      "Hvilke lande bilen kører i, og i hvilke måneder.",
      "Om dækkene har alpesymbol (3PMSF) eller kun M+S.",
      "Mønsterdybden på de nuværende dæk.",
      "Om der skal pigdæk på, også på anhængeren.",
      "Bilens tophastighed og dækkenes hastighedsindeks.",
      "Om bilen trækker anhænger, og hvilke dæk anhængeren har."
    ],
    faq: [
      ["Er der vinterdækpligt i Tyskland?", "Der er ingen fast periode. Ved glat føre skal alle hjul have dæk med alpesymbolet (3PMSF). Kun M+S er ikke nok."],
      ["Hvornår skal man have vinterdæk i Sverige?", "Fra 1. december til 31. marts, når der er vinterføre. Vinterdækkene skal da have mindst 3 mm mønster."],
      ["Hvor dybt skal mønstret være i Norge om vinteren?", "Mønsteret skal være mindst 3 mm fra 1. november til første søndag efter 2. påskedag. I Nordland, Troms og Finnmark gælder det fra 16. oktober til 30. april."],
      ["Må man køre med pigdæk i Sverige?", "Ja, fra 1. oktober til 15. april og ved vinterføre uden for perioden. En let lastbil må ikke blande dæk med og uden pigge."],
      ["Gælder M+S som vinterdæk i Sverige?", "Ikke på en varebil op til 3.500 kg. Dæk uden pigge skal have alpesymbolet."],
      ["Hvornår må man køre med pigdæk i Danmark?", "Fra 1. november til 15. april, og pigdækkene skal sidde på alle hjul."],
      ["Hvad sker der, hvis jeg kører på uegnede dæk i Danmark?", "Bliver du fanget i vejr, som dækkene ikke er egnede til, må du ifølge færdselsloven ikke køre videre. Kører du videre på åbenbart uegnede dæk, kan politiet give en bøde."],
      ["Gælder de norske krav også anhængeren?", "Ja. Anhængeren har samme krav til mønsterdybde som bilen, så den skal også have 3 mm i vintertiden."]
    ],
    kilder: [
      { navn: "Tyskland, StVO § 2, stk. 3a (dæk ved glat føre)", url: STVO, dato: "2026-10-07" },
      { navn: "Tyskland, StVZO § 36 (dæk, alpesymbol og mønsterdybde)", url: STVZO, dato: "2026-10-07" },
      { navn: "Transportstyrelsen (Sverige): Vinterdäck", url: TSV, dato: "2026-10-07" },
      { navn: "Statens vegvesen (Norge): Krav til dekk", url: SVV, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Misforståelser om vinterdæk — det siger reglerne", url: FSMIS, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om dæk", url: FSDAEK, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, detailforskrifter § 18 (pigdæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HES, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Færdselsstyrelsen: færdselsloven blev præciseret 1. juli 2025, så bilisten er ansvarlig for dæk, der egner sig til det aktuelle og forventede føre under kørslen, og skal vurdere det inden kørslen; fanget i vejr, dækkene ikke er egnet til, må man ikke køre videre; kører man videre på åbenbart uegnede dæk, risikerer man bøde; der er tale om en tydeliggørelse, ikke nye regler.", FSMIS],
    ["Færdselsstyrelsen anbefaler 3PMSF-dæk ved forventet hårdt vinterføre; fraråder politiet al udkørsel, bør kørsel kun ske med 3PMSF-dæk og vinterberedskab, hvis man alligevel er nødt til at køre; supplerende vinterberedskab anbefales i hårdt vinterføre.", FSDAEK],
    ["Detailforskrifterne § 18: pigdæk på bil og registreringspligtigt påhængskøretøj kun fra 1. november til 15. april og kun hvis alle køretøjets eller vogntogets hjul har pigdæk; antallet af pigge skal tilnærmelsesvis være det samme på alle hjul.", SYN],
    ["StVZO § 36, stk. 4: vinterdæk er dæk, hvis mønster, gummiblanding eller opbygning forbedrer egenskaberne i sne ved igangsætning, stabilisering af kørslen og bremsning, og som er mærket med alpesymbolet efter UNECE-regulativ 117.", STVZO],
    ["StVZO § 36, stk. 3: hovedmønsteret skal have mindst 1,6 mm på hele omkredsen og er de brede riller i den midterste del, ca. 3/4 af slidbanens bredde.", STVZO],
    ["StVZO § 36, stk. 5: reglen om skilt eller visning af dækkets tilladte hastighed gælder også erhvervsterrændæk mærket POR; visningen i bilen skal ske senest rettidigt, før dækkets tilladte hastighed nås.", STVZO],
    ["Synsvejledningen 8.02.020: bil kan have vinterdæk beregnet til mindst 160 km/t (mindst Q), uanset at tophastigheden er højere.", SYN],
    ["Transportstyrelsen: reglerne står i TSFS 2009:19; vinterdæk eller likvärdig utrustning ved vinterväglag 1. december–31. marts for personbiler, lätta lastbilar m.fl.; vinterväglag er snö, is, snömodd eller frost på någon del av vägen, og politiet afgør det.", TSV],
    ["Transportstyrelsen: undtagelser fra vinterdækkravet, hvis det kan ske uden fare: prøvekørsel eller bugsering ved reparation, korteste vej til og fra besiktning, fælgdiameter højst 10 tommer og årsmodel 30 år eller ældre.", TSV],
    ["Transportstyrelsen: isgreppsmärkning betyder, at dækket er testet og har klaret grænseværdier for greb på is; den er ikke obligatorisk.", TSV],
    ["Transportstyrelsen: M+S-dæk må bruges på andre aksler end driv- og foraksler på biler over 3.500 kg og på anhængere over 3.500 kg; til og med 30. november 2028 er M+S-dæk, der er særligt fremstillet til vinterkørsel, tilladt på anhængere op til 3.500 kg.", TSV],
    ["Transportstyrelsen: pigdæk må bruges før 1. oktober og efter 15. april, hvis der er eller befaras vinterväglag; en bil uden pigdæk må trække en anhænger med pigdæk.", TSV],
    ["Transportstyrelsens side om vinterdæk var senest opdateret 27. maj 2026.", TSV],
    ["Statens vegvesen: føreren er ansvarlig for tilstrækkeligt vejgreb hele året; sommerdæk kan ikke bruges på vinterføre; er det nødvendigt for vejgrebet, skal bilen have vinterdæk med eller uden pigge, kæder eller lignende, også uden for perioderne; hvor længe 3 mm-kravet gælder, varierer med påsken.", SVV],
    ["Statens vegvesen: hjulboltene skal efterspændes efter ca. 40 km efter hjulskift; rigtig mærkning og mønsterdybde er ikke en garanti for godt nok vejgreb; reglerne står i forskrift om bruk av kjøretøy § 1-4.", SVV],
    ["Færdselsstyrelsen: helårsdæk er en markedsføringsbetegnelse, og mærkningen varierer mellem fabrikater.", FSDAEK],
    ["Hessel anbefaler at skifte vinterdæk ved 4 mm.", HES]
  ]
};
