// Underside /til-varebilen/salg-af-varebil/aflevering-af-leasingbil/ (07-10-2026)
var AYV_PDF = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;
var AYV = `https://www.ayvens.com/da-dk/for-foerere/aflevering-af-bil/aflevering-af-din-firmabil/`;
var NORD = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-hos-nordania`;
var FDM = `https://fdm.dk/leasing/returtjek-foer-aflevering`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;

module.exports = {
  id: "salg-af-varebil/aflevering-af-leasingbil",
  side: {
    slug: "aflevering-af-leasingbil",
    navn: "Aflevering af leasingbil",
    titel: "Aflevering af leasingbil: slitage, skader og gebyr",
    kort: `Slitage mod skade, gebyrer, kilometer og fjernelse af indretning og folie, når leasingvarebilen afleveres.`,
    beskrivelse: `Aflevering af leaset varebil: grænserne for slitage i mm, Ayvens' og Nordanias gebyrer, logo, indretning, dæk, data og frister. Med FDM's tal fra 2026.`,
    manchet: `Når en operationelt leaset varebil afleveres, bliver den gennemgået, og skader ud over almindelig slitage faktureres. Hvert leasingselskab har sin egen afleveringsguide. Her er reglerne og gebyrerne fra Ayvens og Nordania som eksempler.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Bule på varebil, Ayvens", "Over 30 mm", "faktureres ved aflevering"],
        ["For sen aflevering, Ayvens", "2.000 kr.", "pr. måned oveni leasingomkostningerne"],
        ["Brændstof eller strøm, Ayvens", "Mindst 150 km", "skal bilen have ved aflevering"],
        ["Gennemsnitlig regning, FDM", "10.122 kr.", "pr. bil ved aflevering i 2026"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det korte svar",
        tekst: [
          `Ved afleveringen sammenligner leasingselskabet bilens stand med sin egen afleveringsguide. Det, der er slidt af almindelig brug, betaler I ikke for. Skader, manglende dele og udstyr, der ikke er fjernet, kommer på en regning bagefter.`,
          `Regningen kan blive mindre, hvis I gennemgår bilen et par måneder før. Så er der tid til at reparere, anmelde skader til forsikringen og finde de dele, der skal med tilbage. Ayvens' og Nordanias beløb på siden er uden moms.`
        ],
        punkter: [
          `<strong>Almindelig slitage</strong> betaler I ikke for. Skader ud over den faktureres.`,
          `<strong>Gennemgangen</strong> laves hos Ayvens af FDM som uafhængig tredjepart, og der udfærdiges en tilstandsrapport.`,
          `<strong>Logo og folie</strong> skal fjernes hos Nordania. Ayvens tager gebyr for at gøre det.`,
          `<strong>Eftermonteret udstyr</strong> skal afmonteres, og monteringshuller udbedres.`,
          `<strong>Kilometer</strong> ud over aftalen afregnes efter aftalens pris.`
        ]
      },
      {
        overskrift: "Ingen fælles standard",
        tekst: [
          `Vi har ikke fundet en offentlig, fælles branchestandard for tilbagelevering af leasingbiler i Danmark. Leasingselskaberne har hver deres guide, og den står i eller henvises til i leasingaftalen. Ayvens' guide gælder både person- og varebiler og har særlige grænser for varebiler.`,
          `FDM, der gennemgår bilerne for Ayvens, skriver det samme. Hvert leasingselskab har sine egne retningslinjer for, hvilke skader og tegn på slitage der accepteres, og den endelige vurdering sker efter det selskabs regler. Derfor er det jeres eget selskabs guide, der gælder, og ikke tallene fra et andet selskab.`
        ],
        efter: [
          `Kilde: <a href="${FDM}" rel="noopener">FDM: Returtjek før aflevering af leasingbil</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Slitage eller skade",
        tekst: [
          `Ayvens deler bilen op i zoner og har en grænse i millimeter for de fleste skader. For lak gælder det fx, at ridser og buler op til 10 mm accepteres, når de kan poleres eller rettes uden lakering. På varebiler er grænserne højere. Her faktureres buler over 30 mm og dybe ridser over 25 mm.`,
          `I varerummet accepterer Ayvens almindelig slitage og monteringshuller, der er udbedret tilfredsstillende. En deformeret hjulkasse eller ødelagt beklædning faktureres. Ayvens fakturerer også lakskader fra fugleklatter, hvor lakken er ætset, så den skal lakeres om.`
        ],
        tabel: {
          kolonner: ["Område", "Accepteres", "Faktureres"],
          raekker: [
            ["Lak på varebil", "Ridser og buler op til 10 mm, der kan poleres eller rettes uden lakering", "Flere buler pr. del, buler over 30 mm og dybe ridser over 25 mm"],
            ["Kofanger på varebil", "Overfladeridser, der kan poleres væk", "Deformation og revner, der kræver udskiftning, ridser over 25 mm (ikke læssekanten)"],
            ["Varerum og lad", "Almindelig slitage og udbedrede monteringshuller", "Deformeret eller ødelagt beklædning og deformerede hjulkasser"],
            ["Hjul", "Ridser op til 50 mm på fælge, dæk med mindst 1,6 mm mønster", "Skader over 50 mm, over 100 mm i alt pr. hjul, skader på dæksiden"],
            ["Ruder", "Små stenslag uden revne uden for synsfeltet", "Revner og stenslag i synsfeltet eller 5 cm fra kanten"],
            ["Kabine", "Let slid fra normal brug", "Røglugt, brændemærker, synlige monteringshuller"]
          ],
          note: `Kilde: <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide, erhverv, person- og varebiler</a>, set den 4. oktober 2026. Listen er ikke udtømmende.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 234" role="img" aria-label="Målestok i millimeter med Ayvens' grænser. Ridser og buler op til 10 mm accepteres. På varebiler faktureres buler over 30 mm og dybe ridser over 25 mm. Skader på fælge op til 50 mm accepteres, og samlede skader over 100 mm pr. hjul faktureres."><text class="tg-lille" x="0" y="14">AYVENS, GRÆNSER I MM</text><text class="tg-fremhaev" x="0" y="49">Ridser og buler</text><rect class="tg-kasse" x="120" y="34" width="26" height="22"/><text x="152" y="49">op til 10 mm accepteres</text><text class="tg-fremhaev" x="0" y="91">Bule, varebil</text><line class="tg-skinne-tynd" x1="120" y1="87" x2="380" y2="87"/><rect class="tg-modul" x="198" y="76" width="182" height="22"/><text class="tg-modul__tekst" x="206" y="91">OVER 30 MM FAKTURERES</text><text class="tg-fremhaev" x="0" y="133">Ridse, varebil</text><line class="tg-skinne-tynd" x1="120" y1="129" x2="380" y2="129"/><rect class="tg-modul" x="185" y="118" width="195" height="22"/><text class="tg-modul__tekst" x="193" y="133">OVER 25 MM FAKTURERES</text><text class="tg-fremhaev" x="0" y="175">Fælg</text><line class="tg-skinne-tynd" x1="120" y1="171" x2="380" y2="171"/><rect class="tg-kasse" x="120" y="160" width="130" height="22"/><text x="128" y="175">op til 50 mm</text><text x="120" y="198">samlet over 100 mm pr. hjul faktureres</text><line class="tg-gulvlinje" x1="120" y1="208" x2="380" y2="208"/><text class="tg-lille" x="120" y="224" text-anchor="middle">0</text><text class="tg-lille" x="185" y="224" text-anchor="middle">25</text><text class="tg-lille" x="250" y="224" text-anchor="middle">50</text><text class="tg-lille" x="380" y="224" text-anchor="end">100 MM</text></svg>`,
          tekst: `Skematisk. Grænserne for lak, buler, ridser og fælge i Ayvens' afleveringsguide. Kilde: <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skadeskategorier K0–K5",
        tekst: [
          `Nordania gennemgår bilen udvendigt og indvendigt og placerer hver skade i en kategori. Skader i K1–K3 takseres ikke.`,
          `Det betyder i praksis, at mærker, småridser og stenslag, der kan klares ved klargøring eller smart reparation, ikke kommer på regningen. En del, der skal lakeres, rettes eller skiftes, gør. Smart reparation er en mindre reparation af en lille skade uden at lakere hele delen.`
        ],
        tabel: {
          kolonner: ["Kategori", "Betydning"],
          raekker: [
            ["K0", "Delen er fejlfri"],
            ["K1", "Mærker og småridser, der helt eller delvist forsvinder ved almindelig klargøring"],
            ["K2", "Stenslag, mærker og ridser, der ikke kan fjernes helt ved klargøring"],
            ["K3", "Større stenslag, trykbuler og ridser. Smart reparation kan bruges"],
            ["K4", "Skal repareres eller rettes og lakeres"],
            ["K5", "Mangler eller skal udskiftes"]
          ],
          note: `Kilde: <a href="${NORD}" rel="noopener">Nordania: Aflevering af firmabil</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 310" role="img" aria-label="Varebil med typiske skader ved aflevering og Nordanias skadeskategorier K0 til K5"><path class="tg-rum" d="M40,170 L40,136 Q42,118 60,112 L95,100 L120,62 Q124,56 132,56 L370,56 Q378,56 378,64 L378,170 Z"/><path class="tg-kasse" d="M124,68 L166,68 L166,100 L104,100 Z"/><line class="tg-skinne-tynd" x1="170" y1="60" x2="170" y2="166"/><line class="tg-skinne-tynd" x1="250" y1="60" x2="250" y2="166"/><rect class="tg-kasse" x="34" y="150" width="16" height="20" rx="2"/><rect class="tg-kasse" x="372" y="150" width="10" height="20" rx="2"/><line class="tg-gulvlinje" x1="16" y1="192" x2="404" y2="192"/><circle class="tg-profil" cx="95" cy="172" r="20"/><circle class="tg-kasse" cx="95" cy="172" r="8"/><circle class="tg-profil" cx="320" cy="172" r="20"/><circle class="tg-kasse" cx="320" cy="172" r="8"/><g class="tg-call"><line x1="112" y1="82" x2="112" y2="36"/><circle cx="112" cy="82" r="3"/><text x="60" y="18" class="tg-call__navn">Forrude</text><text x="60" y="32" class="tg-call__under">stenslag i synsfeltet</text></g><g class="tg-call"><line x1="270" y1="100" x2="270" y2="36"/><circle cx="270" cy="100" r="3"/><text x="230" y="18" class="tg-call__navn">Lak og karrosseri</text><text x="230" y="32" class="tg-call__under">bule over 30 mm</text></g><g class="tg-call"><line x1="44" y1="160" x2="44" y2="208"/><circle cx="44" cy="160" r="3"/><text x="20" y="222" class="tg-call__navn">Kofanger</text><text x="20" y="236" class="tg-call__under">revne, skal udskiftes</text></g><g class="tg-call"><line x1="104" y1="186" x2="168" y2="210"/><circle cx="104" cy="186" r="3"/><text x="166" y="222" class="tg-call__navn">Fælg og dæk</text><text x="166" y="236" class="tg-call__under">skade over 50 mm</text></g><g class="tg-call"><line x1="320" y1="150" x2="404" y2="208"/><circle cx="320" cy="150" r="3"/><text x="410" y="222" class="tg-call__navn" text-anchor="end">Varerum</text><text x="410" y="236" class="tg-call__under" text-anchor="end">deformeret hjulkasse</text></g><text x="20" y="258" class="tg-lille">NORDANIA, SKADESKATEGORI</text><rect class="tg-kasse" x="20" y="264" width="58" height="22" rx="2"/><text x="49" y="279" text-anchor="middle" class="tg-fremhaev">K0</text><rect class="tg-kasse" x="84" y="264" width="58" height="22" rx="2"/><text x="113" y="279" text-anchor="middle" class="tg-fremhaev">K1</text><rect class="tg-kasse" x="148" y="264" width="58" height="22" rx="2"/><text x="177" y="279" text-anchor="middle" class="tg-fremhaev">K2</text><rect class="tg-kasse" x="212" y="264" width="58" height="22" rx="2"/><text x="241" y="279" text-anchor="middle" class="tg-fremhaev">K3</text><rect class="tg-modul" x="276" y="264" width="58" height="22" rx="2"/><text x="305" y="279" text-anchor="middle" class="tg-fremhaev">K4</text><rect class="tg-modul" x="340" y="264" width="58" height="22" rx="2"/><text x="369" y="279" text-anchor="middle" class="tg-fremhaev">K5</text><text x="180" y="302" text-anchor="middle">K1–K3 takseres ikke</text><text x="340" y="302" text-anchor="middle">K4–K5 takseres</text></svg>`,
          tekst: `Øverst ses skader, som Ayvens fakturerer på varebiler, med grænserne i mm fra Ayvens' afleveringsguide. Nederst ses Nordanias skala K0–K5. Selskaberne bruger hver sin metode. Skematisk. Kilder: <a href="${AYV_PDF}" rel="noopener">Ayvens</a> og <a href="${NORD}" rel="noopener">Nordania</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Gebyrer ved aflevering",
        tekst: [
          `Ud over skaderne har Ayvens faste gebyrer for det, der mangler eller ikke er gjort. Det største gebyr er for et serviceeftersyn, der ikke er udført efter fabrikkens forskrifter. Mangler der en del, lægger Ayvens et administrationsgebyr på 1.000 kr. oveni prisen for selve delen.`,
          `Gebyrerne for at fjerne logo afhænger af størrelsen, fra et cvr-nummer til en fuld foliering. Har firmaet en afhentningsaftale, koster en forgæves afhentning 1.500 kr., og en afhentning på fejeblad koster 2.500 kr. Glemte private ting sender Ayvens tilbage for 650 kr.`
        ],
        tabel: {
          kolonner: ["Ydelse eller mangel", "Gebyr"],
          raekker: [
            ["Afmontering af cvr-nummer", "400 kr."],
            ["Afmontering af logo, lille, mellem eller stor", "600, 1.200 eller 1.800 kr."],
            ["Afmontering af logo, fuld", "3.500 kr."],
            ["Manglende afmontering af ekstra udstyr", "1.500 kr."],
            ["Ulovlige konstruktionsændringer, plus udbedring", "2.500 kr."],
            ["Serviceeftersyn ikke udført", "5.000 kr."],
            ["Serviceintervaller ikke overholdt", "2.500 kr."],
            ["Manglende aftageligt træk eller nøgle", "2.750 kr."],
            ["Manglende vask og støvsugning", "750 kr."],
            ["Kontrol af sletning af persondata", "250 kr."]
          ],
          note: `Kilde: <a href="${AYV_PDF}" rel="noopener">Ayvens gebyrliste</a>, juni 2025, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Serviceeftersyn ikke udført", 5000],
            ["Afmontering af logo, fuld", 3500],
            ["Manglende aftageligt træk eller nøgle", 2750],
            ["Ulovlige konstruktionsændringer", 2500, "plus udbedring"],
            ["Serviceintervaller ikke overholdt", 2500],
            ["Afmontering af logo, stor", 1800],
            ["Manglende afmontering af ekstra udstyr", 1500],
            ["Afmontering af logo, mellem", 1200],
            ["Manglende vask og støvsugning", 750],
            ["Afmontering af logo, lille", 600],
            ["Afmontering af cvr-nummer", 400],
            ["Kontrol af sletning af persondata", 250]
          ],
          note: `Gebyrerne er fra Ayvens' gebyrliste fra juni 2025. Kilde: <a href="${AYV_PDF}" rel="noopener">Ayvens' gebyrliste</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dæk, ladekabel og rengøring",
        tekst: [
          `Den anden halvdel af gebyrlisten handler om dele, der skal med tilbage, og om rengøring. Et ekstra sæt dæk, der ikke kommer med, koster mest. Ayvens tager 8.100 kr. for et sæt på alufælge og 4.100 kr. for et sæt på stålfælge, uanset om det er sommer- eller vinterdæk.`,
          `En elvarebil skal afleveres med mindst 30 procent strøm eller strøm til 150 km, og en dieselbil med mindst 15 liter eller brændstof til 150 km. Ellers koster det 350 kr. En bil, der lugter af røg, koster 5.000 kr. plus eventuelt skadet beklædning.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Ekstra sæt dæk på alufælge", 8100, "sommer eller vinter"],
            ["Rygerbil", 5000, "plus evt. skadet beklædning"],
            ["Ekstra sæt dæk på stålfælge", 4100, "sommer eller vinter"],
            ["Manglende ladekabel", 3250],
            ["Husdyrhår", 2500, "plus evt. skadet beklædning"],
            ["Specialrengøring, særlig beskidt", 2500],
            ["Rensning af sæder, store pletter", 1200],
            ["Ekstrahjul mangler", 1000],
            ["For lidt strøm eller brændstof", 350]
          ],
          note: `Gebyrerne er fra Ayvens' gebyrliste fra juni 2025. Kilde: <a href="${AYV_PDF}" rel="noopener">Ayvens' afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indretning, logo og folie",
        tekst: [
          `Nordania kræver logo og eventuel foliering fjernet før aflevering. Ayvens fjerner logo mod gebyr og tager 1.500 kr. for udstyr, der ikke er afmonteret. Privat udstyr må beholdes hos Ayvens, hvis det kan tages af uden skade på bilen.`,
          `Monteringshuller fra reoler og eftermonteret udstyr accepteres i varerummet hos Ayvens, når de er udbedret tilfredsstillende. Se <a href="/til-varebilen/indretning/">indretning</a> og <a href="/til-varebilen/folie/">bilreklame og folie</a>.`,
          `Det udstyr, der fulgte med bilen, skal derimod med tilbage. Ayvens nævner aftageligt træk med nøgle, tagbøjler, indretning og fjernbetjening til motorvarmer. Hvordan folien fjernes uden at skade lakken, står i <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Varebil set fra siden. Logo og folie på siden skal fjernes eller betales. Reoler og skuffer i varerummet afmonteres, og hullerne udbedres. Tagbøjler og aftageligt træk, der fulgte med bilen, skal med tilbage."><g transform="translate(80,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-profil" x="96" y="56" width="140" height="4"/><rect class="tg-profil" x="110" y="60" width="4" height="4"/><rect class="tg-profil" x="218" y="60" width="4" height="4"/><rect class="tg-skinne-tynd" fill="none" x="186" y="76" width="52" height="100"/><line class="tg-skinne-tynd" x1="186" y1="110" x2="238" y2="110"/><line class="tg-skinne-tynd" x1="186" y1="143" x2="238" y2="143"/><rect class="tg-modul" x="98" y="112" width="74" height="26"/><text class="tg-modul__tekst" x="135" y="129" text-anchor="middle">LOGO</text><rect class="tg-profil" x="66" y="168" width="14" height="5"/><circle class="tg-profil" cx="63" cy="167" r="4"/><line class="tg-gulvlinje" x1="5" y1="197" x2="395" y2="197"/><g class="tg-call"><line x1="120" y1="56" x2="70" y2="38"/><circle cx="120" cy="56" r="3"/><text class="tg-call__navn" x="5" y="18">Tagbøjler</text><text class="tg-call__under" x="5" y="32">afleveres med bilen</text></g><g class="tg-call"><line x1="212" y1="76" x2="300" y2="40"/><circle cx="212" cy="76" r="3"/><text class="tg-call__navn" x="395" y="18" text-anchor="end">Reoler og skuffer</text><text class="tg-call__under" x="395" y="32" text-anchor="end">afmonteres, huller udbedres</text></g><g class="tg-call"><line x1="63" y1="171" x2="40" y2="208"/><circle cx="63" cy="171" r="3"/><text class="tg-call__navn" x="5" y="222">Aftageligt træk</text><text class="tg-call__under" x="5" y="236">skal med, ellers gebyr</text></g><g class="tg-call"><line x1="150" y1="138" x2="210" y2="208"/><circle cx="150" cy="138" r="3"/><text class="tg-call__navn" x="206" y="222">Logo og folie</text><text class="tg-call__under" x="206" y="236">fjernes eller betales</text></g></svg>`,
          tekst: `Skematisk. Reolerne afmonteres, når virksomheden selv har sat dem i, mens udstyr, der fulgte med bilen, skal med tilbage. Kilder: <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide</a> og <a href="${NORD}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kilometer",
        tekst: [
          `Kilometer ud over aftalen afregnes efter prisen i leasingaftalen. Hvad grænsen typisk er, og hvad der skal stå i aftalen, står i <a href="/haandbogen/kilometergraensen-paa-leasingaftalen/">kilometergrænsen på leasingaftalen</a>. Nordania tilbyder ændring af kilometer undervejs i aftalen.`,
          `For biler, der er leaset ud med forholdsmæssig registreringsafgift, skal bilen ikke afmeldes, fordi det samlede antal kilometer i aftalen ændres, skriver Motorstyrelsen. Kilde: <a href="https://motorst.dk/erhverv/leasing/krav-til-leasingaftalen" rel="noopener">Motorstyrelsen: Krav til leasingaftalen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Service og skader",
        tekst: [
          `Hos Ayvens skal skader være anmeldt til forsikringen og udbedret før aflevering, og service skal være udført inden for intervallerne på et værksted, Ayvens anviser. Udbedrede forsikringsskader oplyses ved aflevering. Hos Nordania lægges skadesanmeldelser for uudbedrede skader i bilen.`,
          `Ayvens beder om en kvittering, der viser, hvilket værksted der har repareret en forsikringsskade. Nordania skriver, at skader, der ikke er udbedret, og som I vil have dækket af kaskoen, skal anmeldes, og at skadesanmeldelsen eller skadesnummeret skal ligge i bilen.`,
          `FDM skriver, at man som udgangspunkt ikke længere kan anmelde nye skader til forsikringen, når bilen først er afleveret. Hvad kaskoen dækker, står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>, og serviceaftalen i <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a>.`
        ],
        efter: [
          `Kilder: <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide</a>, <a href="${NORD}" rel="noopener">Nordania</a> og <a href="${FDM}" rel="noopener">FDM</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Returtjek før afleveringen",
        tekst: [
          `FDM tilbyder et returtjek, hvor en bilsagkyndig gennemgår bilen sammen med jer i op til 60 minutter. Bagefter får I en rapport med billeder af skaderne og råd om, hvad der bør gøres før afleveringen. FDM anbefaler at booke tjekket cirka 2 måneder før, og bilen skal være nyvasket.`,
          `FDM oplyser, at den gennemsnitlige regning ved aflevering er 10.122 kr. pr. bil. Tallet bygger på mere end 1.500 afleveringer, som FDM Test og Bilsyn har lavet i 2026, og det gælder alle slags leasingbiler, ikke kun varebiler.`,
          `Returtjekket er frivilligt, og det ændrer ikke på, at leasingselskabets egen guide afgør regningen. En flåde kan også selv gennemgå bilerne med leasingselskabets guide.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Gennemsnitlig regning pr. bil ved aflevering", "10.122", "kr."],
            ["Returtjek, pris for ikke-medlemmer", "1.395", "kr."],
            ["Anbefalet tidspunkt for returtjek", "ca. 2", "måneder før"]
          ],
          note: `Regningen er FDM's gennemsnit for mere end 1.500 leasingafleveringer hos FDM Test og Bilsyn i 2026. Prisen på returtjekket er fra den 7. oktober 2026, og medlemmer får rabat. Kilde: <a href="${FDM}" rel="noopener">FDM: Returtjek før aflevering af leasingbil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afleveringsforsikring",
        tekst: [
          `Nogle forsikringsselskaber sælger et tilvalg til kaskoen, der dækker skader, som først bliver opdaget ved afleveringen. Ayvens nævner selv, at virksomheden kan have valgt en afleveringsforsikring.`,
          `Hos GF kræver tilvalget, at bilen højst er fire år gammel og har kørt højst 120.000 km, og at leasingselskabet er medlem af Finans og Leasing. Det kan købes indtil en måned efter, at leasingaftalen er trådt i kraft, og selvrisikoen er 6.587 kr. (basisår 2023). Forsikringen dækker ikke almindeligt slid, rengøring eller ting, der er blevet væk, som fx et reservehjul.`,
          `GF skriver også, at virksomheden ikke selv bør anerkende leasingselskabets krav, før GF's taksator har set bilen. Anerkender virksomheden kravet, kan den miste dækningen for det beløb.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "GF Afleveringsforsikring", "Gjensidige Leasing Basis"],
          raekker: [
            ["Kan vælges til", "Kasko med Friskade", "Kasko"],
            ["Dækker", "Pludselige skader, der først konstateres ved afleveringen", "Op til 5 skader, der konstateres ved afleveringen"],
            ["Beløbsgrænse", "Højst 32.942 kr. med moms (basisår 2023)", "Hver reparation højst 5.000 kr."],
            ["Også med", "Mekaniske skader, der er pludselige og uforudsete", "Førstegangsydelsen ved totalskade eller tyveri"]
          ],
          note: `GF's beløb indeksreguleres fra basisåret 2023. Kilder: <a href="${GF}" rel="noopener">GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, punkt 12</a> og <a href="${GJ}" rel="noopener">Gjensidige: Bilforsikring til virksomhedens køretøjer</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Flere tilvalg ved leasing står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`
        ]
      },
      {
        overskrift: "Det skal med bilen tilbage",
        tekst: [
          `Ayvens skriver, at glemte dele som ekstrahjul, hattehylde og låsetoppe ikke kan eftersendes. De bliver faktureret. Ayvens vil have alle nøgler samlet i et bundt og det aftagelige træk på gulvet ved passagersædet.`,
          `Står de ekstra hjul på et dækhotel, gælder der forskellige regler. Har I en hjulopbevaringsaftale gennem Ayvens hos Superdæk eller Dækpartner, henter Ayvens selv hjulene. Står de andre steder, skal I hente dem og aflevere dem med bilen. Nordania vil have hjulene lagt i bagagerummet og beder jer bestille hjul fra et fjernlager i god tid.`
        ],
        punkter: [
          `Alle nøgler og nøglekort.`,
          `Registreringsattestens del 1, hvis den er udleveret.`,
          `Instruktionsbog og servicehæfte, hvis de ikke er elektroniske.`,
          `Aftageligt træk med nøgle, tagbøjler, indretning og andet ekstraudstyr, der fulgte med bilen.`,
          `Ekstra hjulsæt, låsetoppe til hjulboltene og ladekabel.`,
          `Strøm eller brændstof til mindst 150 km hos Ayvens.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Glemte dele kan ikke eftersendes hos Ayvens og faktureres.`
        ]
      },
      {
        overskrift: "Ayvens og Nordania side om side",
        tekst: [
          `De to selskaber kræver mange af de samme ting, men på forskellig måde. Tabellen viser, hvordan hvert selskab håndterer de samme punkter.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Ayvens", "Nordania"],
          raekker: [
            ["Logo og folie", "Fjernes mod gebyr", "Skal være fjernet"],
            ["Ekstra hjulsæt", "Ayvens henter fra Superdæk og Dækpartner", "I bagagerummet, bestil fra fjernlager i god tid"],
            ["Brændstofkort", "Spærres automatisk, smid dem ud", "Klippes over"],
            ["Data i bilen", "Slettes, kontrol koster 250 kr.", "Skal slettes"],
            ["Rygning", "Rygerbil koster 5.000 kr.", "Faktureres som unormal slitage"],
            ["Gennemgang", "Hos FDM, ca. 30 minutter", "Hos Nordania, ca. 40 minutter"]
          ],
          note: `Kilder: <a href="${AYV}" rel="noopener">Ayvens: Aflevering af din erhvervsleasingbil</a>, <a href="${AYV_PDF}" rel="noopener">Ayvens afleveringsguide</a> og <a href="${NORD}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Data, kort og abonnementer",
        tekst: [
          `Forbundne telefoner, adresser i navigationen og brugerprofiler i apps følger bilen, til de slettes. Ayvens kræver dem slettet før aflevering og tager 250 kr. for at kontrollere sletningen. Nordania kræver også data i bilens computersystem slettet, fx GPS og telefonbog.`,
          `Ayvens nævner også papirer med personfølsomme oplysninger og profiler i apps, der kan give adgang til bilen. Har bilen et ladeabonnement hos fx Clever, E.ON eller Spirii, skal det opsiges, og Ayvens vil have besked via kundeservice.`
        ],
        punkter: [
          `Slet forbundne telefoner og telefonnumre.`,
          `Slet hjemmeadressen og andre adresser i navigationen.`,
          `Slet brugerprofiler i apps, der giver adgang til bilen.`,
          `Fjern papirer med personfølsomme oplysninger og kort bag solskærmen.`,
          `Opsig ladeabonnementer, og smid eller klip brændstofkortene.`
        ],
        punkt_ikon: "trin"
      },
      {
        overskrift: "Frist og forsinkelse",
        tekst: [
          `Ayvens skal have bilen senest på kontraktens udløbsdato. Efter ordinært udløb opkræves de faktiske leasingomkostninger plus 2.000 kr. pr. måned. Nordania skal have bilen senest 1. bankdag efter udløb og sender et brev omkring 45 dage før.`,
          `Gennemgangen tager omkring 30 minutter hos Ayvens og 40 minutter hos Nordania. Begge tilbyder drop-off uden deltagelse.`,
          `Bilen må ikke bruges til almindelig kørsel efter udløbsdatoen, skriver Nordania. Falder fristen efter en weekend eller helligdag, må den kun køre direkte til afleveringsstedet. Hos Ayvens skal bilen afleveres tidligere, hvis udløbsdatoen falder i en weekend eller på en helligdag.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["For sen aflevering, Ayvens", "2.000", "kr. pr. måned"],
            ["Brev fra Nordania før udløb", "ca. 45", "dage"],
            ["Gennemgang, Ayvens", "ca. 30", "min."],
            ["Gennemgang, Nordania", "ca. 40", "min."]
          ],
          note: `Ayvens skal have bilen senest på udløbsdatoen. Nordania skal have den senest første bankdag efter udløb. Ud over gebyret opkræver Ayvens de faktiske leasingomkostninger for tiden efter udløb. Kilder: <a href="${AYV_PDF}" rel="noopener">Ayvens</a> og <a href="${NORD}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Har bilen forholdsmæssig registreringsafgift, kan en for sen aflevering i værste fald udløse krav om fuld registreringsafgift, skriver Nordania. Mere i <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>.`
        ]
      },
      {
        overskrift: "Tre måder at aflevere hos Nordania",
        tekst: [
          `Nordania har afleveringssteder i hele landet, og den seneste afleveringsdato kan ses i Nordanias Bil App. Afleveringen kan ske på tre måder, og de to sidste koster et transportgebyr.`
        ],
        kort: [
          ["Med tidsbestilling", "Du kan vælge inspektion med gennemgang af rapporten, som tager ca. 40 min., eller drop-off til senere inspektion, som tager ca. 5 min. Begge dele er gratis."],
          ["Hos forhandleren", "Den gamle bil afleveres, når den nye leveres hos en af Nordanias primære forhandlere. Det gælder ikke Tesla. Transporten koster 858 kr."],
          ["Afhentning på firmaadressen", "Axess Logistics henter bilen og kører den til nærmeste opsamlingssted. Det koster 858 kr."]
        ],
        efter: [
          `Nordania anbefaler at booke tid mindst en måned før. Bilen regnes først som afleveret, når den står på opsamlingsstedet. Ved aflevering hos forhandleren bestiller I selv transporten senest dagen før.`
        ]
      },
      {
        overskrift: "Afhentning: regn baglæns fra udløb",
        tekst: [
          `Transporten skal bookes senest tre dage før første mulige afhentningsdato, og Axess har tre dage fra den dato til at hente bilen. Nøglen skal være tilgængelig på adressen i åbningstiden.`,
          `Axess garanterer levering på opsamlingsstedet inden for tre hverdage efter første mulige afhentningsdato. Derfor skal der være luft nok til, at bilen når frem før fristen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["26. juli", "Transporten skal senest bookes"],
            ["29. juli", "Første mulige afhentningsdato"],
            ["Inden for 3 hverdage", "Axess henter bilen og leverer den på opsamlingsstedet"],
            ["1. august", "Aftalen udløber, og bilen er afleveret"]
          ]
        },
        efter: [
          `Eksemplet er Nordanias eget for en aftale, der udløber 1. august. Kilde: <a href="${NORD}" rel="noopener">Nordania</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Puljeordning",
        tekst: [
          `Har firmaet en puljeordning hos Nordania, skal bilerne være afleveret senest den 20. december for at indgå i årets puljeopgørelse.`,
          `For en flåde kan det betyde, at biler med udløb sidst i december skal afleveres før den 20., hvis de skal med i årets opgørelse.`
        ]
      },
      {
        overskrift: "Hos Ayvens: FDM-testcenter",
        tekst: [
          `Har virksomheden ikke en afhentningsaftale med klargøring, afleveres bilen hos et FDM-testcenter. Tiden bookes online med bilens registreringsnummer, testcenter, dato og kontaktoplysninger, og bekræftelsen på mail skal med ved afleveringen.`,
          `Ayvens anbefaler aflevering med gennemgang, fordi I så ser afleveringsrapporten med det samme og kan se anmærkningerne selv.`
        ],
        punkter: [
          `Bilen afleveres hos et FDM-testcenter med tid bestilt online, også ved drop-off.`,
          `Falder udløbsdatoen på en weekend eller helligdag, eller er der ingen ledige tider, afleveres bilen tidligere.`,
          `Anmærkninger kvitteres online, og virksomhedens kontaktperson får en elektronisk afleveringsrapport.`,
          `Har virksomheden en afhentningsaftale med klargøring, springes testcentret over.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bestil tid", "Du bestiller tid online og afleverer bilen hos et FDM-testcenter. Det gælder også ved drop-off."],
            ["Gennemgang", "FDM gennemgår bilen som uafhængig tredjepart og laver en tilstandsrapport."],
            ["Kvittering", "Du kvitterer for anmærkningerne online."],
            ["Rapport", "Virksomhedens kontaktperson får en elektronisk afleveringsrapport."]
          ]
        }
      }
    ],
    spoergsmaal_titel: "Det skal leasingselskabet vide",
    spoergsmaal_manchet: "Så kan afleveringen planlægges, og regningen ikke komme bag på jer.",
    spoergsmaal: [
      "Afleveringsdato og sted, eller om bilen skal hentes.",
      "Kilometerstand og eventuelle uudbedrede skader med skadesnummer.",
      "Hvad der er monteret af indretning, lift, træk og folie, og om det fjernes før aflevering.",
      "Om ekstra hjul står på et dækhotel, der skal hentes fra.",
      "Hvem fra virksomheden der deltager i gennemgangen.",
      "Om der er ladeabonnementer eller brændstofkort, der skal opsiges."
    ],
    faq: [
      ["Hvad er almindelig slitage på en leaset varebil?", "Hos Ayvens fx ridser og buler op til 10 mm, der kan rettes uden lakering, ridser op til 50 mm på fælge og almindeligt slid i varerummet. Buler over 30 mm og dybe ridser over 25 mm faktureres på varebiler."],
      ["Skal folien fjernes, før leasingbilen afleveres?", "Hos Nordania skal logo og folie være fjernet. Ayvens fjerner logo mod et gebyr fra 600 kr. til 3.500 kr."],
      ["Skal indretningen fjernes ved aflevering?", "Eftermonteret udstyr skal afmonteres. Ayvens tager 1.500 kr., hvis det ikke er gjort, og accepterer udbedrede monteringshuller i varerummet."],
      ["Hvem vurderer bilen ved aflevering?", "Hos Ayvens FDM som uafhængig tredjepart, der laver en tilstandsrapport. Nordania har egne afleveringssteder."],
      ["Hvad sker der, hvis leasingbilen afleveres for sent?", "Ayvens opkræver leasingomkostningerne plus 2.000 kr. pr. måned. Nordania skriver, at for sen aflevering i værste fald kan udløse krav om fuld registreringsafgift."],
      ["Hvad betyder K1–K5 ved aflevering af leasingbil?", "Det er Nordanias skadeskategorier. K0 betyder fejlfri, og K5 betyder, at delen mangler eller skal udskiftes. Nordania takserer ikke skader i K1–K3."],
      ["Kan leasingbilen afleveres hos forhandleren?", "Ja, hos Nordania, når den nye bil leveres hos en af de primære forhandlere, men ikke hos Tesla. Transporten koster 858 kr."],
      ["Hvad koster en aflevering typisk?", "FDM oplyser, at den gennemsnitlige regning er 10.122 kr. pr. bil. Tallet bygger på mere end 1.500 leasingafleveringer hos FDM Test og Bilsyn i 2026."],
      ["Findes der en forsikring mod afleveringsskader?", "Ja, fx GF's Afleveringsforsikring og Gjensidiges Leasing Basis som tilvalg til kaskoen. GF dækker højst 32.942 kr. med moms (basisår 2023), og Gjensidige dækker op til 5 skader, der hver højst koster 5.000 kr. at reparere."]
    ],
    kilder: [
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler (gebyrliste juni 2025)", url: AYV_PDF, dato: "2026-10-07" },
      { navn: "Ayvens: Aflevering af din erhvervsleasingbil", url: AYV, dato: "2026-10-07" },
      { navn: "Nordania: Aflevering af firmabil leaset direkte hos Nordania", url: NORD, dato: "2026-10-07" },
      { navn: "FDM: Returtjek før aflevering af leasingbil", url: FDM, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Krav til leasingaftalen", url: "https://motorst.dk/erhverv/leasing/krav-til-leasingaftalen", dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["FDM: hvert leasingselskab har sine egne retningslinjer for, hvilke skader og tegn på slitage der accepteres; den endelige vurdering sker altid efter de retningslinjer, der gælder for leasingselskabet.", FDM],
    ["FDM: den gennemsnitlige regning pr. bil ved aflevering er 10.122 kr., baseret på tal fra mere end 1.500 leasingafleveringer foretaget af FDM Test og Bilsyn i 2026.", FDM],
    ["FDM: returtjek med op til 60 minutters gennemgang med en bilsagkyndig, rapport med billeder og anbefalinger; pris for ikke-medlemmer 1.395 kr.; FDM anbefaler at booke cirka 2 måneder før aflevering; bilen skal være nyvasket; returtjekket er frivilligt; medlemmer får rabat.", FDM],
    ["FDM: når bilen først er afleveret, har man som udgangspunkt ikke længere mulighed for at anmelde nye skader til forsikringen.", FDM],
    ["Ayvens gebyrliste (juni 2025): forgæves afhentning 1.500 kr., afhentning på fejeblad 2.500 kr., forsendelse af glemte effekter til kunden 650 kr., administrationsgebyr ved manglende effekter 1.000 kr. plus omkostningerne til effekterne, timepris ved ekstraordinære serviceydelser 850 kr.", AYV_PDF],
    ["Ayvens gebyrliste (juni 2025): ekstra sæt sommer- eller vinterdæk på stålfælge 4.100 kr., på alufælge 8.100 kr.; ekstrahjul mangler 1.000 kr.; manglende ladekabel 3.250 kr.; rygerbiler 5.000 kr. plus evt. skadede beklædninger; husdyrhår 2.500 kr. plus evt. skadede beklædninger; manglende rensning af sæder (store pletter) 1.200 kr.; specialrengøring 2.500 kr.", AYV_PDF],
    ["Ayvens gebyrliste (juni 2025): manglende strøm på elbiler (minimum 30 % eller 150 km ved aflevering) 350 kr.; manglende brændstof på benzin- og dieselbiler (minimum 15 liter eller 150 km) 350 kr.", AYV_PDF],
    ["Ayvens afleveringsguide: lakskader fra fugleklatter, hvor lakken er ætset og kræver omlakering, accepteres ikke; glemte dele som ekstrahjul, hattehylde og låsetoppe kan ikke efterleveres; ekstraudstyr omfatter fx aftageligt træk inkl. nøgle, tagbøjler, indretning og fjernbetjening til motorkabinevarmer.", AYV_PDF],
    ["Ayvens afleveringsguide: ved online booking angives registreringsnummer, FDM-testcenter, dato og tidspunkt og kontaktoplysninger; bekræftelsen på e-mail medbringes; Ayvens anbefaler aflevering med gennemgang; forsikringsskader oplyses ved aflevering, gerne med kvittering, der viser værkstedet.", AYV_PDF],
    ["Ayvens afleveringsguide: af hensyn til GDPR skal papirer med personfølsomme oplysninger fjernes, forbundne telefoner og numre slettes, hjemmeadresse og andre adresser i navigationen slettes og brugerprofiler i apps, der kan give adgang til bilen, slettes.", AYV_PDF],
    ["Ayvens: alle nøgler samles i et bundt; aftageligt træk inkl. nøgle placeres på gulvet ved passagersædet; låsetoppe til hjulbolte afleveres; alle brændstofkort spærres automatisk af Ayvens og kan smides ud; abonnementer hos Clever, E.ON, Spirii m.fl. skal meldes til kundeservice; virksomheden kan have tilvalgt en afleveringsforsikring.", AYV],
    ["Ayvens: har man en hjulopbevaringsaftale gennem Ayvens, og hjulene står hos Superdæk eller Dækpartner, rekvirerer Ayvens hjulene; står de andre steder, skal man selv hente dem og returnere dem med bilen.", AYV],
    ["Nordania: bilen må ikke bruges til almindelig kørsel efter udløbsdatoen; falder fristen efter en weekend eller helligdag, må bilen kun bruges til kørsel direkte til afleveringsstedet.", NORD],
    ["Nordania: vinter- og sommerdæk lægges i bagagerummet; hjul på fjernlager skal bestilles hentet i god tid; benzinkort destrueres eller klippes over; rygning accepteres ikke og belastes med omkostninger for unormal slitage; data i bilens computersystem (GPS, telefonbog) skal slettes; kort bag solskærmen fjernes.", NORD],
    ["Nordania: har afleveringssteder i hele landet; seneste afleveringsdato kan ses i Nordanias Bil App; ved aflevering hos forhandler bestiller kunden selv transporten senest dagen inden; Axess Logistics garanterer levering inden for tre hverdage efter første mulige afhentningsdato; uudbedrede skader, der ønskes dækket af kaskoen, anmeldes, og skadesanmeldelse eller skadesnummer lægges i bilen.", NORD],
    ["GF Afleveringsforsikring ved leasing: kan kun vælges sammen med Kasko og Friskade; bilen må højst være fire år og have kørt højst 120.000 km; leasingselskabet skal være medlem af Finans og Leasing; kan købes indtil 1 måned efter leasingaftalens ikrafttræden; dækker pludselige skader, der først konstateres ved afleveringen, og pludselige mekaniske skader; erstatning højst 32.942 kr. inkl. moms (basisår 2023); selvrisiko 6.587 kr. (basisår 2023); dækker ikke almindeligt slid og ælde, rengøring og klargøring eller bortkomne genstande som reservehjul (punkt 12).", GF],
    ["GF punkt 12.4: GF skal straks have besked, hvis leasingselskabet rejser krav ved afleveringen; anerkender forsikringstager kravet uden GF's accept, risikerer forsikringstager at være helt eller delvist uden dækning, og forsikringstager bør ikke tage stilling til kravet, før taksator har besigtiget bilen.", GF],
    ["Motorstyrelsen: ændring af det samlede antal kilometer i leasingaftalen medfører ikke krav om afmelding af et køretøj på forholdsmæssig afgift.", "https://motorst.dk/erhverv/leasing/krav-til-leasingaftalen"],
    ["Gjensidige Leasing Basis: dækker op til 5 skader konstateret ved aflevering, når hver skades reparation ikke overstiger 5.000 kr., og sikrer, at førstegangsydelsen ikke mistes ved totalskade eller tyveri; kan vælges til kaskoforsikringen.", GJ]
  ]
};
