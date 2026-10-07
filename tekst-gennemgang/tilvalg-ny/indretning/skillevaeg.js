// Underside /til-varebilen/indretning/skillevaeg/ (07-10-2026)
var VOSAK = `https://cdn.fstyr.dk/faerdselsstyrelsen/Media/639102143281512027/VOSAK11.pdf`;
var SV = `https://smartvan.dk/kategori/varerumsadskillelse-til-varevogn/`;
var SVCUST = `https://smartvan.dk/produkt/komfortvaeg-custom-24-transporter-25-m-rude-laage-til-lang-last/`;
var VK = `https://www.vankompagniet.dk/product-category/indvendigt/komfortvaegge-til-varevogn/`;
var BEK3 = `https://www.lovguiden.dk/loven/bekendtg%C3%B8relse-om-udf%C3%B8relse-af-syn-af-erhvervsk%C3%B8ret%C3%B8jer-ved-vejsiden/bilag-3`;
var MS = `https://www.modul-system.dk/da/content/flooring-lining-modul-system`;
var SKM = `https://info.skat.dk/data.aspx?oid=2303451`;
var AUT = `https://autoroladanmark.dk/aflevering/skadeguide/`;

module.exports = {
  id: "indretning/skillevaeg",
  side: {
    slug: "skillevaeg",
    navn: "Skillevæg",
    titel: "Skillevæg i varebil: typer, regler og pris",
    kort: `Her kan du se skillevægge mellem førerhus og varerum, fulde, med rude eller med låge til lang last, med krav, komfortvæg og priser.`,
    beskrivelse: `Skillevæg i varebil: fuld væg, med rude eller med låge til lang last. Færdselsstyrelsens krav, ISO 27956, komfortvæg og priser fra danske forhandlere.`,
    manchet: `Skillevæggen, også kaldet skot eller varerumsadskillelse, beskytter fører og passager mod last, der glider frem ved en opbremsning. Her er kravene, de typer der findes, og hvad en eftermonteret væg koster.`,
    visuel: {
      hero: "indretning",
      kort_fortalt: [
        ["Krav til nye biler", "1. juli 2025", "første registrering, lukket varebil"],
        ["Komfortvæg, SmartVan", "5.799 kr.", "uden moms"],
        ["Sædet lænes længere tilbage", "70–110 mm", "med komfortvæg, oplyser SmartVan"],
        ["Varerummets længde", "mindst 1,20 m", "fra 0 til 0,60 m over bunden"]
      ],
      toc: true,
      stribe: { ids: ["vw-caddy", "ford-transit-custom", "vw-id-buzz-cargo"], titel: "Varebiler fra pristabellen med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Kravet: adskillelse eller fastgørelse",
        tekst: [
          `Skillevæggen beskytter fører og passager, hvis lasten glider frem ved en opbremsning eller et sammenstød. Kravet står i Færdselsstyrelsens vejledning om syn af køretøjer og gælder varebiler med lukket varerum. N1 er den betegnelse, godkendelsesreglerne bruger for en varebil.`,
          `En varebil N1 med lukket varerum, der er registreret første gang 1. juli 2025 eller senere, skal have mindst én af disse tre former for beskyttelse af fører og passagerer mod, at lasten forskubber sig under kørsel:`
        ],
        punkter: [
          `<strong>Fuld adskillelse</strong> mellem førerrum og varerum, der opfylder ISO 27956:2009, pkt. 4.1 og 4.2.`,
          `<strong>Delvis adskillelse</strong>, der mindst dækker sæder og nakkestøtter i højeste position i begge sider, med højst 0,10 m op til loftbeklædningen. Den skal også opfylde ISO 27956:2009, pkt. 4.1 og 4.2.`,
          `<strong>Fastgørelsesanordninger</strong>, der opfylder ISO 27956:2009, pkt. 3 og 4.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Registreret før 1. juli 2025", "Adskillelsen skal dække førerpladsen fra gulv til loft. Den skal kunne modstå gods, der glider frem ved en opbremsning på 10 m/s², eller opfylde ISO/DIS 27956, pkt. 4.1."],
            ["Registreret 1. juli 2025 eller senere", "Bilen skal have fuld eller delvis adskillelse eller fastgørelsesanordninger, der opfylder ISO 27956:2009."]
          ],
          note: `Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026, pkt. 9.01.024</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Fuld eller delvis adskillelse",
        tekst: [
          `En fuld adskillelse lukker hele tværsnittet af bilen, fra gulv til loft og fra væg til væg. Det er den skillevæg, de fleste kender fra fabrikken.`,
          `En delvis adskillelse dækker kun sæderne og nakkestøtterne, når de står i højeste position. Afstanden op til loftbeklædningen må højst være 0,10 m, målt i sædets lodrette midterlinje. Både den fulde og den delvise adskillelse skal opfylde ISO 27956:2009, pkt. 4.1 og 4.2.`,
          `Fastgørelsesanordninger er den tredje mulighed. Her er der ingen væg, men surringspunkter og andet udstyr, der holder lasten fast og opfylder ISO 27956:2009, pkt. 3 og 4. Udstyret er beskrevet i <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Tre tværsnit af en varebil set bagfra. Fuld adskillelse lukker fra gulv til loft og væg til væg. Delvis adskillelse dækker sæder og nakkestøtter med højst 0,10 m op til loftet. Fastgørelsesanordninger holder lasten med stropper i stedet for en væg."><text class="tg-lille" x="10" y="16">SET BAGFRA, FRA VARERUMMET</text><path class="tg-rum" d="M10,190 V70 Q10,50 30,50 H110 Q130,50 130,70 V190 Z"/><path class="tg-modul" d="M15,188 V72 Q15,55 32,55 H108 Q125,55 125,72 V188 Z"/><text class="tg-modul__tekst" x="70" y="118" text-anchor="middle">VÆG TIL VÆG</text><text class="tg-modul__tekst" x="70" y="136" text-anchor="middle">GULV TIL LOFT</text><path class="tg-rum" d="M140,190 V70 Q140,50 160,50 H240 Q260,50 260,70 V190 Z"/><rect class="tg-modul" x="148" y="66" width="104" height="122"/><line class="tg-skinne-tynd" x1="200" y1="50" x2="200" y2="66"/><rect class="tg-profil" x="162" y="96" width="30" height="16"/><rect class="tg-profil" x="208" y="96" width="30" height="16"/><text class="tg-modul__tekst" x="200" y="150" text-anchor="middle">SÆDER</text><path class="tg-rum" d="M270,190 V70 Q270,50 290,50 H370 Q390,50 390,70 V190 Z"/><rect class="tg-kuffert" x="300" y="140" width="60" height="48"/><polyline class="tg-skinne" fill="none" points="286,188 300,140 360,140 374,188"/><circle class="tg-profil" cx="286" cy="188" r="4"/><circle class="tg-profil" cx="374" cy="188" r="4"/><line class="tg-gulvlinje" x1="5" y1="190" x2="395" y2="190"/><text class="tg-fremhaev" x="70" y="208" text-anchor="middle">Fuld</text><text x="70" y="222" text-anchor="middle">gulv til loft</text><text class="tg-fremhaev" x="200" y="208" text-anchor="middle">Delvis</text><text x="200" y="222" text-anchor="middle">højst 0,10 m til loft</text><text class="tg-fremhaev" x="330" y="208" text-anchor="middle">Fastgørelse</text><text x="330" y="222" text-anchor="middle">efter ISO 27956</text></svg>`,
          tekst: `Skematisk. De tre måder at opfylde kravet på for lukkede varebiler, der er registreret første gang 1. juli 2025 eller senere. Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, pkt. 9.01.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ældre biler: materialer og styrke",
        tekst: [
          `For lukkede varebiler, der er registreret første gang før 1. juli 2025, gælder den tidligere regel. Adskillelsen skal mindst dække førerpladsen og nå fra gulv til loft. Kravet regnes for opfyldt, når den dækker sædet og nakkestøtten i højeste position, med højst 0,10 m op til loftbeklædningen.`,
          `Adskillelsen og dens fastgørelse skal kunne modstå gods, der glider frem, når bilen bremser med 10 m/s², eller opfylde styrkekravet i ISO/DIS 27956, pkt. 4.1. En opbremsning på 10 m/s² svarer omtrent til, at lasten skubber fremad med hele sin egen vægt.`,
          `Vejledningen nævner også, hvad adskillelsen må være lavet af. Det kan være trådgitter, plader eller lamineret glas, og flere af materialerne skal sidde i en metalramme. Adskillelsen kan også kombinere materialerne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 480 172" role="img" aria-label="Fire felter med de materialer, en adskillelse i en ældre varebil kan bestå af: finmasket trådgitter i en metalramme, en plade af metal, træ eller kulfiber, splintsikker plast i en metalramme og lamineret glas i en metalramme."><rect class="tg-rum" x="10" y="14" width="100" height="100"/><line class="tg-skinne-tynd" x1="30" y1="18" x2="30" y2="110"/><line class="tg-skinne-tynd" x1="50" y1="18" x2="50" y2="110"/><line class="tg-skinne-tynd" x1="70" y1="18" x2="70" y2="110"/><line class="tg-skinne-tynd" x1="90" y1="18" x2="90" y2="110"/><line class="tg-skinne-tynd" x1="14" y1="34" x2="106" y2="34"/><line class="tg-skinne-tynd" x1="14" y1="54" x2="106" y2="54"/><line class="tg-skinne-tynd" x1="14" y1="74" x2="106" y2="74"/><line class="tg-skinne-tynd" x1="14" y1="94" x2="106" y2="94"/><rect class="tg-hylde" x="130" y="14" width="100" height="100"/><rect class="tg-rum" x="250" y="14" width="100" height="100"/><rect class="tg-profil" x="258" y="22" width="84" height="84"/><rect class="tg-rum" x="370" y="14" width="100" height="100"/><rect class="tg-profil" x="378" y="22" width="84" height="84"/><line class="tg-skinne-tynd" x1="390" y1="60" x2="420" y2="30"/><line class="tg-skinne-tynd" x1="400" y1="80" x2="445" y2="35"/><text x="60" y="134" text-anchor="middle">Trådgitter</text><text x="60" y="148" text-anchor="middle">i metalramme</text><text x="180" y="134" text-anchor="middle">Plade af metal,</text><text x="180" y="148" text-anchor="middle">træ eller</text><text x="180" y="162" text-anchor="middle">kulfiber</text><text x="300" y="134" text-anchor="middle">Splintsikker</text><text x="300" y="148" text-anchor="middle">plast i</text><text x="300" y="162" text-anchor="middle">metalramme</text><text x="420" y="134" text-anchor="middle">Lamineret glas</text><text x="420" y="148" text-anchor="middle">i metalramme</text></svg>`,
          tekst: `Skematisk. Materialerne gælder lukkede varebiler, der er registreret første gang før 1. juli 2025. Glasset skal være godkendt og mærket. Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, pkt. 9.01.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor væggen sidder",
        tekst: [
          `I en lukket varebil skal adskillelsen sidde umiddelbart bag førersædet. I en mandskabsvogn sidder den bag bageste sæderække, se <a href="/haandbogen/mandskabsvogn-regler/">regler for mandskabsvogn</a>.`,
          `Varerummet skal i enhver højde mellem 0 og 0,60 m over bunden være mindst 1,20 m langt. Begrænser væggen førersædets mulighed for at blive skubbet tilbage, regnes målet fra en tænkt væg, der ikke begrænser sædet.`,
          `En komfortvæg, der buer bagud, tager lidt plads fra varerummet og giver den plads til sæderne. Reoler, der er bygget til fabrikkens flade væg, skal derfor passe til den nye væg.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Varebil set fra siden med skillevæggen lige bag førersædet og varerummet, der skal være mindst 1,20 m langt fra 0 til 0,60 m over bunden."><text class="tg-lille" x="16" y="50">FØRERRUM</text><path class="tg-rum" d="M20,170 V110 L60,60 H380 V170 Z"/><rect class="tg-profil" x="70" y="130" width="40" height="10"/><rect class="tg-profil" x="106" y="88" width="10" height="52"/><rect class="tg-modul" x="122" y="62" width="6" height="108"/><text class="tg-lille" x="230" y="96">VARERUM</text><line class="tg-skinne-tynd" x1="130" y1="128" x2="378" y2="128"/><text class="tg-lille" x="300" y="122">0,60 M</text><line class="tg-pil" x1="130" y1="152" x2="378" y2="152"/><path class="tg-pil" d="M136,146 L130,152 L136,158"/><path class="tg-pil" d="M372,146 L378,152 L372,158"/><text class="tg-fremhaev" x="200" y="146">mindst 1,20 m</text><circle class="tg-profil" cx="70" cy="172" r="18"/><circle class="tg-profil" cx="330" cy="172" r="18"/><line class="tg-gulvlinje" x1="0" y1="192" x2="400" y2="192"/><g class="tg-call"><line x1="125" y1="66" x2="156" y2="30"/><circle cx="125" cy="66" r="3"/><text class="tg-call__navn" x="160" y="24">Skillevæg</text><text class="tg-call__under" x="160" y="38">lige bag førersædet</text></g></svg>`,
          tekst: `Skematisk og ikke i skala. Skillevæggen sidder lige bag førersædet, og varerummet skal være mindst 1,20 m langt i enhver højde fra 0 til 0,60 m over bunden. Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Pickup og åbent lad",
        tekst: [
          `Kravet gælder kun varebiler med lukket varerum. En varebil med åbent lad skal ikke have adskillelse eller fastgørelsesanordninger, heller ikke når ladet har en presenning eller en fast, men aftagelig overdækning som en hardtop.`,
          `Et forlænget førerhus som King Cab eller Extended Cab kræver heller ikke adskillelse, så længe der ikke er en separat dør til rummet bag forsæderne. En separat dør er en dør, der kan åbnes uafhængigt af de andre døre.`,
          `Er førerhuset så langt, at der er et egentligt varerum bag forsæderne med sin egen dør, skal bilen have adskillelse eller fastgørelsesanordninger. Forskellen på de to biltyper er beskrevet i <a href="/haandbogen/varebil-eller-pickup/">varebil eller pickup</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. En varebil med lukket varerum skal have adskillelse eller fastgørelse. En varebil med åbent lad skal kun have det, hvis rummet bag forsæderne har en separat dør. Presenning eller hardtop på ladet ændrer ikke det."><defs><marker id="pil-skillevaeg-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="8" width="250" height="44"/><text x="135" y="26" text-anchor="middle">Er det en varebil</text><text x="135" y="42" text-anchor="middle">med åbent lad?</text><line class="tg-pil" x1="260" y1="30" x2="298" y2="30" marker-end="url(#pil-skillevaeg-1)"/><text x="279" y="22" text-anchor="middle">Nej</text><rect class="tg-modul" x="302" y="8" width="94" height="44"/><text class="tg-modul__tekst" x="349" y="26" text-anchor="middle">Krav om</text><text class="tg-modul__tekst" x="349" y="42" text-anchor="middle">adskillelse</text><line class="tg-pil" x1="135" y1="52" x2="135" y2="76" marker-end="url(#pil-skillevaeg-1)"/><text x="143" y="68">Ja</text><rect class="tg-kasse" x="10" y="80" width="250" height="44"/><text x="135" y="98" text-anchor="middle">Har rummet bag forsæderne</text><text x="135" y="114" text-anchor="middle">en separat dør?</text><line class="tg-pil" x1="260" y1="102" x2="298" y2="102" marker-end="url(#pil-skillevaeg-1)"/><text x="279" y="94" text-anchor="middle">Ja</text><rect class="tg-modul" x="302" y="80" width="94" height="44"/><text class="tg-modul__tekst" x="349" y="98" text-anchor="middle">Krav om</text><text class="tg-modul__tekst" x="349" y="114" text-anchor="middle">adskillelse</text><line class="tg-pil" x1="135" y1="124" x2="135" y2="148" marker-end="url(#pil-skillevaeg-1)"/><text x="143" y="140">Nej</text><rect class="tg-kasse" x="10" y="152" width="250" height="44"/><text x="135" y="170" text-anchor="middle">Intet krav, heller ikke med</text><text x="135" y="186" text-anchor="middle">presenning eller hardtop</text><text class="tg-lille" x="10" y="222">SEPARAT DØR: ÅBNES UAFHÆNGIGT AF ANDRE DØRE</text></svg>`,
          tekst: `Skematisk. Krav om adskillelse betyder fuld eller delvis adskillelse eller fastgørelsesanordninger. Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, pkt. 9.01.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Typer af skillevæg",
        tekst: [
          `Skillevægge findes i flere udførelser. Valget afhænger af, om du vil kunne se bagud gennem varerummet, og om der skal lange emner ind gennem væggen.`,
          `En låge i væggen gør det muligt at laste emner, der er længere end selve varerummet, fordi de kan stikke ind i førerhuset. Den fulde væg uden rude lukker til gengæld bedst af mod varerummet.`
        ],
        kort: [
          ["Fuld væg uden rude", "Den er lukket fra gulv til loft og fra side til side og holder lugt, støv og fugt fra varerummet ude af kabinen."],
          ["Med rude", "Det er samme væg med et vindue, så der er udsyn bagud gennem varerummet. I SmartVans vægge er ruden af polykarbonat."],
          ["Med låge til lang last", "En låge eller åbning i væggen gør det muligt at føre lange emner som rør og profiler igennem."],
          ["Delvis adskillelse", "Den dækker sæder og nakkestøtter, men ikke hele bredden og højden."]
        ]
      },
      {
        overskrift: "Komfortvæg",
        tekst: [
          `En komfortvæg er en formstøbt skillevæg, der buer bagud bag sæderne. SmartVan oplyser, at sædet kan lænes 70–110 mm længere tilbage end med fabrikkens væg, afhængigt af modellen. Deres vægge er lavet af vakuumformet ABS-plast og beklædt med lydabsorberende tekstil på kabinesiden.`,
          `VanKompagniets komfortvægge er også i plast og fås med eller uden vindue og med luge eller klap. Produktnavnene samler flere modeller, der deler væg, fx Boxer, Jumper, Ducato og Movano. Årgang og generation skal passe.`,
          `SmartVan skriver, at komfortvæggene er crashtestet. Væggen til Transit Custom 24- og Transporter 25- med rude og låge til lang last vejer 11 kg.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Førerhuset set ovenfra med to sæder. Fabrikkens væg er flad, mens komfortvæggen buer bagud bag hvert sæde."><rect class="tg-profil" x="40" y="25" width="55" height="55"/><rect class="tg-profil" x="95" y="25" width="14" height="55"/><rect class="tg-profil" x="40" y="110" width="55" height="55"/><rect class="tg-profil" x="95" y="110" width="14" height="55"/><path class="tg-modul" d="M125,15 C165,25 165,85 125,95 C165,105 165,165 125,175 Z"/><line class="tg-skinne-tynd" x1="125" y1="10" x2="125" y2="185"/><line class="tg-pil" x1="125" y1="135" x2="154" y2="135"/><path class="tg-pil" d="M148,129 L154,135 L148,141"/><text class="tg-fremhaev" x="164" y="139">70–110 mm</text><g class="tg-call"><line x1="152" y1="55" x2="224" y2="40"/><circle cx="152" cy="55" r="3"/><text class="tg-call__navn" x="230" y="36">Komfortvæg</text><text class="tg-call__under" x="230" y="50">buer bagud bag sæderne</text></g><g class="tg-call"><line x1="125" y1="182" x2="224" y2="172"/><circle cx="125" cy="182" r="3"/><text class="tg-call__navn" x="230" y="170">Fabrikkens væg</text><text class="tg-call__under" x="230" y="184">flad</text></g><text class="tg-lille" x="0" y="196">SET OVENFRA</text></svg>`,
          tekst: `Skematisk. En komfortvæg set ovenfra. SmartVan oplyser, at sædet kan lænes 70–110 mm længere tilbage end med fabrikkens væg, afhængigt af modellen. Kilde: <a href="${SV}" rel="noopener">SmartVan: Komfortvægge</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Varme, støj og tyveri",
        tekst: [
          `En lukket væg gør mere end at holde lasten tilbage. SmartVan skriver, at kabinen er lettere at varme op og køle ned, fordi varmen eller kulden ikke også skal fylde varerummet. Lugt, støv og fugt fra varerummet bliver også ude af kabinen.`,
          `Det lydabsorberende tekstil på kabinesiden af SmartVans vægge mindsker ifølge SmartVan hjulstøj og vibrationer fra godset i varerummet. Væggen er også en ekstra barriere for en tyv, der vil fra førerhuset ind i varerummet.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Vægt", "11", "kg"],
            ["Sædet lænes længere tilbage", "70–110", "mm, afhængigt af model"],
            ["Pris", "5.799", "kr."]
          ],
          note: `SmartVans komfortvæg til Transit Custom 24- og Transporter 25- med rude og låge til lang last. Kilder: <a href="${SVCUST}" rel="noopener">SmartVan: Komfortvæg Custom 24- og Transporter 25-</a>, set den 7. oktober 2026 (vægt), og <a href="${SV}" rel="noopener">SmartVan: Komfortvægge</a>, set den 4. oktober 2026 (pris).`
        }
      },
      {
        overskrift: "Hvad koster en skillevæg",
        tekst: [
          `Priserne her er for eftermonterede komfortvægge, som forhandlerne sælger som kit til den enkelte model. Hos SmartVan koster alle komfortvæggene i tabellen 5.799 kr., mens VanKompagniets vægge koster 8.995–12.995 kr. afhængigt af model og udførelse.`,
          `Navnet på væggen samler ofte flere modeller, der er bygget på den samme bil. Årgangen skal passe, fordi en ny generation af bilen kan have et andet tværsnit.`
        ],
        tabel: {
          kolonner: ["Bil", "Udførelse", "Forhandler", "Pris"],
          raekker: [
            ["VW Caddy 21- / Ford Connect 25- L1/L2", "Komfortvæg med eller uden rude", "SmartVan", "5.799 kr."],
            ["Berlingo / Partner / Combo 19- / Proace City 20- / Doblo 23-", "Komfortvæg med rude", "SmartVan", "5.799 kr."],
            ["Transit Custom 24- / Transporter 25-", "Komfortvæg med låge til lang last, med eller uden rude", "SmartVan", "5.799 kr."],
            ["VW ID. Buzz Cargo 23-", "Komfortvæg, flere udførelser", "SmartVan", "5.799 kr."],
            ["Jumper / Ducato / Boxer 06- / Movano 22- / Proace Max 24-", "Komfortvæg med rude", "SmartVan", "5.799 kr."],
            ["Flere modeller", "Komfortvæg i plast, med eller uden vindue, luge eller klap", "VanKompagniet", "8.995–12.995 kr."]
          ],
          note: `Vejledende webshoppriser. Kilder: <a href="${SV}" rel="noopener">SmartVan: Komfortvægge</a> og <a href="${VK}" rel="noopener">VanKompagniet: Komfortvægge</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["VanKompagniet, op til", 12995, "komfortvæg i plast"],
            ["VanKompagniet, fra", 8995, "komfortvæg i plast"],
            ["SmartVan", 5799, "alle modeller i tabellen"]
          ],
          note: `Vejledende webshoppriser. Kilder: <a href="${SV}" rel="noopener">SmartVan: Komfortvægge</a> og <a href="${VK}" rel="noopener">VanKompagniet: Komfortvægge</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dokumentation ved syn",
        tekst: [
          `En eftermonteret adskillelse skal kunne dokumenteres ved syn. Dokumentationen kan være en erklæring fra bilfabrikanten, en rapport fra en prøvningsinstans eller en erklæring fra det firma, der har monteret væggen, med de prøvninger eller beregninger, den bygger på.`,
          `Erklæringen fra monteringsfirmaet skal også oplyse antal og placering af eventuelle fastgørelsesanordninger, og at det svarer til ISO-standarden. En fuld adskillelse, som bilfabrikanten har monteret, kræver ingen dokumentation, og det gør en bil, der er EU-typegodkendt som varebil N1, heller ikke.`,
          `Bygges en personbil om til varebil, kan man ifølge vejledningen ikke gå ud fra, at de originale fastgørelsesanordninger i bagagerummet er nok. Sker ombygningen af en ny bil hos importøren, og registreres bilen som varebil uden syn, har importøren ansvaret for adskillelsen.`,
          `SmartVan oplyser, at deres komfortvægge er certificeret efter SS-ISO 27956:2009. Mere om syn i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Adskillelse", "Dokumentation ved syn"],
          raekker: [
            ["Fuld adskillelse monteret af bilfabrikanten", "nej"],
            ["Bil, der er EU-typegodkendt som varebil N1", "nej"],
            ["Eftermonteret adskillelse", "ja"]
          ],
          note: `Dokumentationen kan være en erklæring fra bilfabrikanten, en rapport fra en prøvningsinstans eller en erklæring fra monteringsfirmaet. Kilde: <a href="${VOSAK}" rel="noopener">Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Skillevæggen i lastsikringen",
        tekst: [
          `Lasten kan blokeres mod væggen. Ved vejsidesyn af køretøjer over 3,5 t er det en mangel, hvis der er mere end 15 cm frem til forreste væg, og der er fare for, at lasten går igennem (<a href="${BEK3}" rel="noopener">BEK nr. 1655, bilag 3</a>). Bekendtgørelsen gælder ikke varebiler. Mere i <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>.`,
          `Blokering mod væggen virker bedst, når lasten står tæt ind til den. Modul-System sælger til sin dobbeltbund en kollisionssikkerhedsvæg, der monteres tæt ved og forstærker bagvæggen.`
        ]
      },
      {
        overskrift: "Skillevæg og specialindretning",
        tekst: [
          `Adskillelse eller fastgørelsesanordninger er et krav efter Færdselsstyrelsens regler. Om bilen er specialindrettet, afhænger af, om der er et erhvervsmæssigt behov for indretningen, og om den specialindrettede bil er nødvendig, for at brugeren kan udføre sit arbejde (<a href="${SKM}" rel="noopener">Skattestyrelsen</a>).`,
          `Reglen om specialindretning gælder vare- og lastbiler med en tilladt totalvægt på højst 4 tons. Grænsen er gennemgået i <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.`
        ]
      },
      {
        overskrift: "Tilbagelevering og tyveri",
        tekst: [
          `Autorolas skadeguide til tilbagelevering af leasingbiler regner manglende skillevægge og deformerede skillevægge som K4–K5, altså unormal slitage. Unormal slitage er skader, som leasingtageren typisk betaler for ved afleveringen.`,
          `En lukket væg er også en ekstra barriere mellem kabine og varerum ved indbrud. Se <a href="/til-varebilen/varerumssikring/">varerumssikring</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så passer væggen til bilen og kan dokumenteres ved syn.",
    spoergsmaal: [
      "Model, årgang og generation, fx Transit Custom 2024.",
      "Taghøjde, især på Crafter og TGE.",
      "Om væggen skal have rude, og om der skal være låge til lang last.",
      "Om bilen har fabrikkens væg i dag, og om reolerne er bygget til den.",
      "Om der skal bruges dokumentation til syn.",
      "Om der er dobbeltbund eller tunge skuffer bag væggen.",
      "Om bilen er registreret første gang før eller efter 1. juli 2025."
    ],
    faq: [
      ["Er skillevæg lovpligtig i en varebil?", "En lukket varebil, der er registreret første gang 1. juli 2025 eller senere, skal have fuld eller delvis adskillelse eller fastgørelsesanordninger, der opfylder ISO 27956:2009. For ældre biler gælder en tidligere regel om adskillelse bag førerpladsen (Færdselsstyrelsen, pkt. 9.01.024)."],
      ["Hvad koster en skillevæg til en varebil?", "Eftermonterede komfortvægge koster 5.799 kr. hos SmartVan og 8.995–12.995 kr. hos VanKompagniet (4. oktober 2026)."],
      ["Hvad er en komfortvæg?", "En formstøbt skillevæg, der buer bagud, så sædet kan lænes længere tilbage. SmartVan oplyser 70–110 mm afhængigt af modellen."],
      ["Kan man få en skillevæg med låge til lang last?", "Ja. Flere vægge har en låge eller åbning til lang last, fx SmartVans komfortvæg til Transit Custom 24- og Transporter 25-."],
      ["Kræver en eftermonteret skillevæg dokumentation?", "Ja, ved syn: en erklæring fra fabrikanten, en prøvningsrapport eller en erklæring fra monteringsfirmaet med prøvninger eller beregninger."],
      ["Gør en skillevæg bilen specialindrettet?", "Specialindretning kræver et erhvervsmæssigt behov for indretningen, og at bilen er nødvendig for, at brugeren kan udføre sit arbejde. Se <a href=\"/haandbogen/specialindretning-af-varebil/\">specialindretning af varebil</a>."],
      ["Skal en pickup med åbent lad have skillevæg?", "Nej, heller ikke med presenning eller hardtop. Har rummet bag forsæderne en separat dør, skal bilen dog have adskillelse eller fastgørelsesanordninger."],
      ["Hvad må en skillevæg i en ældre varebil være lavet af?", "Finmasket trådgitter i en metalramme, en plade af metal, træ eller kulfiber, splintsikker plast i en metalramme eller godkendt lamineret glas i en metalramme. Det gælder biler, der er registreret første gang før 1. juli 2025."]
    ],
    kilder: [
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, 1. april 2026, pkt. 9.01.024 og definition af varebil", url: VOSAK, dato: "2026-10-07" },
      { navn: "SmartVan: Komfortvægge", url: SV, dato: "2026-10-04" },
      { navn: "SmartVan: Komfortvæg Custom 24- / Transporter 25- med rude og låge", url: SVCUST, dato: "2026-10-07" },
      { navn: "VanKompagniet: Skillevæg til varevogn – komfortvægge", url: VK, dato: "2026-10-04" },
      { navn: "BEK nr. 1655 af 05/12/2025, bilag 3", url: BEK3, dato: "2026-10-04" },
      { navn: "Modul-System: Gulv og vægbeklædning (dobbeltbund og kollisionssikkerhedsvæg)", url: MS, dato: "2026-10-04" },
      { navn: "Skatterådet: Bindende svar SKM2021.202.SR om tilladt kørsel i varevogne og mandskabsvogne", url: SKM, dato: "2026-10-07" },
      { navn: "Autorola: Skadeguide ved aflevering", url: AUT, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Færdselsstyrelsen, pkt. 9.01.024: ved delvis adskillelse måles afstanden på højst 0,10 m til loftbeklædningen i sædets lodrette centerlinje; fuld adskillelse er fra gulv til loft og væg til væg.", VOSAK],
    ["Færdselsstyrelsen, pkt. 9.01.024, før 1. juli 2025: kravet anses for opfyldt, hvis adskillelsen mindst dækker sædet og nakkestøtten i højeste position, med højst 0,10 m til loftbeklædningen; adskillelsen kan bestå af finmasket trådgitter i en metalramme, plade af metal, træ eller kulfiber, plade af splintsikkert plast i en metalramme eller lamineret glas godkendt og mærket efter pkt. 10.03.020 (1) i en metalramme, eller en kombination.", VOSAK],
    ["Færdselsstyrelsen, pkt. 9.01.024: varebil N1 med åbent lad skal ikke have adskillelse eller fastgørelsesanordninger, heller ikke med presenning eller hardtop; King Cab og Extended Cab uden separat dør til rummet bag forsæderne heller ikke; med et egentligt varerum bag forsæderne med separat dør skal bilen have det. En separat dør åbnes uafhængigt af anden dør.", VOSAK],
    ["Færdselsstyrelsen, pkt. 9.01.024: erklæringen fra opbyggerfirmaet skal vedlægges dokumentation for afprøvninger eller beregninger inkl. antal og placering af fastgørelsesanordninger; originale fastgørelsesanordninger i en personbils bagagerum kan ikke antages at være tilstrækkelige ved ombygning til varebil; ved ombygning i importørregi uden syn har importøren ansvaret for adskillelsen.", VOSAK],
    ["SmartVan: komfortvæggene er crashtestet; komfortvæggen til Custom 24- og Transporter 25- med rude og låge til lang last vejer 11 kg.", SVCUST],
    ["SmartVan: med en komfortvæg er kabinen lettere at varme og køle, fordi varerummet ikke skal varmes eller køles; lydabsorberende tekstilfibre på kabinesiden mindsker hjulstøj og vibrationer fra gods; væggen er en ekstra barriere mod tyveri fra kabinen.", SVCUST],
    ["Skatterådet, SKM2021.202.SR: reglen om kørsel mellem hjem og arbejde i specialindrettede køretøjer gælder vare- og lastmotorkøretøjer med tilladt totalvægt på ikke over 4 ton.", SKM]
  ]
};
