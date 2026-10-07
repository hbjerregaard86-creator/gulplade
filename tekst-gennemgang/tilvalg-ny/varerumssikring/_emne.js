// Emnesiden /til-varebilen/varerumssikring/ (07-10-2026)
var INST26 = `https://www.installator.dk/nye-tal-tyverier-fra-varebiler-falder-markant`;
var INST25 = `https://www.installator.dk/tyveri-af-vaerktoj-fra-varebiler-boomer-det-gor-maerkningen-ikke`;
var FP24 = `https://via.ritzau.dk/pressemeddelelse/13782161/voldsom-stigning-i-tyveri-fra-handvaerkerbiler-i-kobenhavnsomradet?publisherId=4901971&lang=da`;
var SG = `https://www.sikringsguiden.dk/raadgivning/raad-om-tyveri/tyveri-fra-varebiler/`;
var TDFAQ = `https://www.topdanmark.dk/faq/erhverv/er-vaerktoj-daekket-af-min-koretojsforsikring/`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;
var TDALARM = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;
var TRYGR = `https://tryg.dk/erhverv/rabatter/varebilsikring`;
var AL1 = `https://autolock.dk/tyverisikring/varebil/`;
var ALTYP = `https://autolock.dk/tyverisikring-af-varebil`;
var ALL4V = `https://autolock.dk/locks4vans-integreret-laas-varevogn/`;
var CGB = `https://www.cargosikring.dk/product-page/blackstone-varebilslaas`;
var SVUFO = `https://smartvan.dk/produkt/ufo-laas/`;
var SVPRIS = `https://smartvan.dk/tyverisikring-til-varebilen-2025/`;
var SVKAT = `https://smartvan.dk/kategori/tyverisikring-til-varevogn/`;
var SVGIT = `https://smartvan.dk/produkt/ford-transit-vinduesgitter/`;
var SVSKYD = `https://smartvan.dk/produkt/skydedoersgitter-trafic-14-vivaro-14-19-nv300-talento-16-h1/`;
var SVELLOKK = `https://smartvan.dk/produkt/el-lokk-elektrisk-laas-transit-14-e-transit-22-2-skydedoere-alarm-centrallaas-styring/`;
var HERKH = `https://herkules-sikring.dk/varevognslaas-hvorfor/`;
var HERKP = `https://herkules-sikring.dk/pris-paa-indbrudssikring/`;
var UNIS = `https://unisecure.dk/varebil-sikring`;
var DST = `https://www.statbank.dk/STRAF11`;
var GJ = `https://gjensidige.dk/filer/erhverv/storkunde-og-maegler/Sikringsoversigt-Forsikringsbetingelserne`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;

module.exports = {
  id: "varerumssikring",
  side: {
    slug: "varerumssikring",
    navn: "Varerumssikring",
    titel: "Varerumssikring til varebil",
    kort: `Ekstralåse, alarm, sporing, mærkning og sikker opbevaring: hvordan de virker, og hvad de koster.`,
    beskrivelse: `Varerumssikring til varebil: låse fra 950 kr., alarm, GPS, gitre og armerede kasser. Se priser, montering, leasingregler og forsikringens krav.`,
    manchet: `Rigspolitiet registrerede 3.618 tyverier fra varebiler i 2025, omkring ti om dagen. Det er det laveste tal siden 2021, og det er især værktøjet, der bliver stjålet. Her kan du se, hvordan tyvene kommer ind, hvilke løsninger der findes, hvad de koster, og hvad forsikringen kræver.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["Tyverier fra varebiler, 2025", "3.618", "omkring ti om dagen, ifølge Rigspolitiet"],
        ["Ekstra lås, AutoLock", "fra 950 kr.", "manuel udvendig lås uden montering"],
        ["To UFO-låse monteret", "3.793 kr.", "bagdøre og en skydedør hos SmartVan"],
        ["Alarm kræves over", "100.000 kr.", "i værdi pr. transport hos Gjensidige"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Omkring ti tyverier om dagen",
        tekst: [
          `Tyverierne fra varebiler faldt med omkring 20 procent fra 4.521 i 2024 til 3.618 i 2025, ifølge tal fra Rigspolitiet gengivet af Installatør. Faldet kom efter en periode, hvor tallet steg kraftigt. I 2023 steg tyverierne fra håndværkerbiler med 53 procent på Københavns Vestegn og 42 procent i København, oplyste Forsikring &amp; Pension.`,
          `Problemet rammer mange. Erhvervsorganisationen TEKNIQ skrev i 2026, at hver fjerde af deres medlemsvirksomheder havde haft tyveri fra varebiler inden for det seneste år. Topdanmark skriver, at tyvene ifølge F&amp;P løber med ca. 70.000 kr. pr. indbrud.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Tyverier fra varebiler, 2025", "3.618", "ifølge Rigspolitiet"],
            ["Pr. dag", "ca. 10", "tyverier"],
            ["TEKNIQ-virksomheder med tyveri", "1 ud af 4", "det seneste år"],
            ["Udbytte pr. indbrud", "ca. 70.000", "kr., ifølge F&P"]
          ],
          note: `Kilder: <a href="${INST26}" rel="noopener">Installatør med Rigspolitiets tal og TEKNIQs medlemsundersøgelse</a> og <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvordan tyvene kommer ind",
        tekst: [
          `Tyvene går ifølge F&amp;P især efter det dyre specialværktøj. AutoLock skriver, at organiserede tyvebander ser håndværkernes varebiler som et let mål, og at håndværktøjet er let at sælge videre gennem hælere.`,
          `Alle varebiler har svage punkter, skriver AutoLock, og nævner bilens software og elektronik, dørkontakten i førerkabinen, ruderne ind til varerummet og låsekassen, som tyven kan nå gennem håndtaget eller den tynde plade. Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset, hvor tyven aktiverer centrallåsen og får fri adgang til varerummet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Varebil set fra siden med fem svage punkter nummereret: ruden i førerhuset, dørkontakten i førerkabinen, håndtag og låsekasse, den tynde plade og ruderne ind til varerummet."><g transform="translate(80,170)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-kasse" x="150" y="112" width="18" height="6"/><line class="tg-gulvlinje" x1="5" y1="187" x2="395" y2="187"/><g class="tg-nr"><circle cx="276" cy="80" r="10"/><text x="276" y="84" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="262" cy="132" r="10"/><text x="262" y="136" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="159" cy="98" r="10"/><text x="159" y="102" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="205" cy="140" r="10"/><text x="205" y="144" text-anchor="middle">4</text></g><g class="tg-nr"><circle cx="94" cy="84" r="10"/><text x="94" y="88" text-anchor="middle">5</text></g><text x="10" y="208">1  ruden i førerhuset</text><text x="10" y="224">2  dørkontakten i førerkabinen</text><text x="10" y="240">3  håndtag og låsekasse</text><text x="230" y="208">4  den tynde plade</text><text x="230" y="224">5  ruder til varerummet</text></svg>`,
          tekst: `Skematisk. Placeringen varierer fra model til model. Kilder: <a href="${ALTYP}" rel="noopener">AutoLock: Tyverisikring af varebil</a> og <a href="${TRYGR}" rel="noopener">Tryg: Varevognssikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Et tyveri koster mere end værktøjet",
        tekst: [
          `Når værktøjet er væk, kan du ikke overholde aftaler med kunderne, og varebilen skal på værksted, skrev F&amp;P i 2024. Topdanmark nævner tabt arbejdsfortjeneste, værkstedsbesøg og besværet med at ændre kundeaftaler. Gjensidiges dækning ved indbrud i biler omfatter ikke umiddelbart de personaleudgifter, der følger med, fx spildtid, når medarbejderne mangler værktøj.`,
          `SmartVan beskriver forløbet efter et indbrud i fire trin, som alle tager tid fra arbejdet med kunderne.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Overblik", "Du finder ud af, hvad der er skadet på bilen, og hvad der er stjålet."],
            ["Politiet", "Tyveriet anmeldes, og politiet optager rapport."],
            ["Forsikringen", "Skaden anmeldes, og selskabet skal have et overblik."],
            ["Værksted og værktøj", "Bilen bliver repareret, og det stjålne værktøj skal købes igen."]
          ]
        },
        efter: [
          `Kilder: <a href="${FP24}" rel="noopener">F&amp;P, 13. februar 2024</a>, <a href="${TDFOREBYG}" rel="noopener">Topdanmark</a>, <a href="${GJ}" rel="noopener">Gjensidige: Sikringsoversigt</a> og <a href="${SVKAT}" rel="noopener">SmartVan: Tyverisikring til varevognen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tyverier fra bil fordelt på regioner",
        tekst: [
          `Danmarks Statistik opgør de anmeldte tyverier fra bil, båd mv. Kategorien dækker alle biler, ikke kun varebiler. I 2025 blev der anmeldt 13.168, og 51 procent af dem var i Region Hovedstaden. Hovedstadsområdet er fortsat det mest udsatte.`,
          `I første halvår 2026 lå tallet 8 procent under første halvår 2025. Faldet kom i Region Hovedstaden og Region Midtjylland, mens de tre andre regioner fik flere anmeldelser. Du kan se tallene for hver kommune, politikredsene og udviklingen siden 2019 under <a href="/til-varebilen/varerumssikring/tyveri-statistik-pr-region/">tyveri fra biler pr. region</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "anmeldelser",
          data: [
            ["Region Hovedstaden", 6733],
            ["Region Midtjylland", 2493],
            ["Region Syddanmark", 1925],
            ["Region Sjælland", 1377],
            ["Region Nordjylland", 510]
          ],
          note: `Kilde: <a href="${DST}" rel="noopener">Danmarks Statistik, STRAF11</a>, tyveri fra bil, båd mv., summen af 2025K1-K4, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sikring i lag",
        tekst: [
          `Varerumssikring består af lag, der hver løser sin del. Det første lag holder tyven ude, det andet opdager indbruddet, det tredje gør tingene svære at fjerne, og det fjerde gør dem svære at sælge bagefter. Holder et lag ikke, er der stadig et til at tage over.`,
          `Lagene står på hver sin side. Låse og forstærkninger står i <a href="/til-varebilen/varerumssikring/ekstra-laas-til-varebil/">ekstra lås til varebil</a>, alarm og sporing i <a href="/til-varebilen/varerumssikring/alarm-og-gps-tracker/">alarm og GPS-tracker</a>, kasser og skuffer i <a href="/til-varebilen/varerumssikring/sikker-opbevaring/">sikker opbevaring</a> og DNA-mærkning i <a href="/til-varebilen/varerumssikring/maerkning-af-vaerktoej/">mærkning af værktøj</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Kassevogn set oppefra med fire lag af sikring nummereret: lås og gitter på dørene, alarm med sensor i varerummet, en fastboltet kasse på gulvet og mærket værktøj i kassen."><rect class="tg-rum" x="40" y="30" width="300" height="120" rx="14"/><line class="tg-skillevaeg" x1="120" y1="30" x2="120" y2="150"/><line class="tg-doer" x1="340" y1="38" x2="340" y2="88"/><line class="tg-doer" x1="340" y1="92" x2="340" y2="142"/><line class="tg-doer" x1="170" y1="150" x2="250" y2="150"/><rect class="tg-modul" x="126" y="84" width="12" height="12"/><path class="tg-skinne-tynd" fill="none" d="M138,90 L330,44 M138,90 L330,136"/><rect class="tg-kuffert" x="270" y="44" width="56" height="34"/><circle class="tg-hylde" cx="284" cy="61" r="4"/><circle class="tg-hylde" cx="298" cy="61" r="4"/><circle class="tg-hylde" cx="312" cy="61" r="4"/><text class="tg-lille" x="80" y="94" text-anchor="middle">KABINE</text><g class="tg-nr"><circle cx="340" cy="90" r="10"/><text x="340" y="94" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="132" cy="70" r="10"/><text x="132" y="74" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="262" cy="44" r="10"/><text x="262" y="48" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="298" cy="94" r="10"/><text x="298" y="98" text-anchor="middle">4</text></g><text x="20" y="182">1  lås og gitter holder tyven ude</text><text x="20" y="200">2  alarm og tracker opdager indbruddet</text><text x="20" y="218">3  kassen holder værktøjet i bilen</text><text x="20" y="236">4  mærkningen gør det svært at sælge</text><text class="tg-lille" x="380" y="256" text-anchor="end">SKEMATISK</text></svg>`,
          tekst: `Skematisk. Tegningen viser de fire lag, som undersiderne gennemgår hver for sig.`
        }
      },
      {
        overskrift: "Seks slags sikring",
        tekst: [
          `Markedet kan deles i seks kategorier. De første tre sidder på selve bilen, mens de sidste tre handler om indholdet. Kategorierne udelukker ikke hinanden, og AutoLock og SmartVan sælger fx både låse, alarmer og gitre.`
        ],
        kort: [
          ["Udvendige ekstralåse", "En ekstra lås på bag- og sidedøre, uafhængig af bilens egen. Den findes som deadlock, der låses med nøgle, som slamlock, der låser selv, når døren smækkes, som hooklock, hvor en krog griber ind i karrosseriet, og som rund udvendig lås i hærdet stål, fx SmartVans UFO."],
          ["Indvendige elektroniske låse", "Monteres inde i varerummet og aktiveres med bilens centrallås, så der ikke er ekstra nøgler. Eksempler er HERKULES og BEAR LOCK. Unisecure beskriver BEAR LOCK som en lås, der aktiverer alle døre samtidigt, uafhængigt af centrallåsen."],
          ["Forstærkninger", "Anti-peel-beskyttelse mod at døren bukkes op, skjold over låsen og håndtaget, reparationsplader og sikringsgitre bag vinduerne i bagdørene."],
          ["Alarm og sporing", "En alarm med sensor i varerummet, GPS-tracker på bilen og på de dyreste maskiner og i den kraftige ende røgkanon eller DNA-spray, der udløses ved indbrud."],
          ["Sikker opbevaring", "Aflåste værktøjskasser og skuffer i stål, boltet fast i varerummet. Det, der ikke kan bæres ud, bliver liggende."],
          ["Mærkning", "DNA-mærkning eller synlig mærkning af værktøjet med firmanavn og en liste over serienumre. Den stopper ikke indbruddet, men gør værktøjet sværere at sælge og gør det muligt for politiet at bevise, at det er stjålet."]
        ]
      },
      {
        overskrift: "Hvad det koster",
        tekst: [
          `Alle priser på siden er uden moms. Det er sådan, SmartVan, CargoSikring og HERKULES skriver dem, og AutoLock viser begge priser.`,
          `Priserne er fra-priser for ét produkt uden montering. Hvad den samlede sikring koster, afhænger af, hvor mange døre der skal sikres, og om du vil have alarm og kasse med.`
        ],
        tabel: {
          kolonner: ["Kategori", "Hvad den gør", "Eksempel", "Fra"],
          raekker: [
            ["Manuel udvendig lås", "Ekstra lås udenpå døren, låses med nøgle", "Daken Saturn EVO", "950 kr."],
            ["Smæklås (slamlock)", "Låser automatisk, når døren lukkes", "Bawer Armo, GateLock, Blackstone", "995 kr."],
            ["Kroglås (hooklock)", "Krog griber ind i karrosseriet", "Locks4Vans integreret lås", "2.500 kr."],
            ["Certificeret udvendig lås", "Manuel lås, Sold Secure Diamond", "L4V Statement Lock T-serie", "3.495 kr."],
            ["Sikringsgitter", "Gitter bag ruderne i bagdørene", "WGuard", "1.116 kr."],
            ["Forstærkning", "Håndtagsskjold, anti-peel og plader", "L4V", "292,50 kr."],
            ["Alarm", "Sirene og sensor i varerummet", "DEFA DVS90", "2.825 kr."],
            ["GPS-tracker", "Sporing af bil eller maskine", "DEFA Finder Link", "2.395 kr."],
            ["Sikker opbevaring", "Armerede kasser og skuffer", "Armorgard OxBox", "4.086,21 kr."],
            ["Røgkanon", "Fylder varerummet med røg ved indbrud", "AutoLock", "797,50 kr."]
          ],
          note: `Kilde: <a href="${AL1}" rel="noopener">AutoLock</a>, set den 7. oktober 2026, undtagen Blackstone, som <a href="${CGB}" rel="noopener">CargoSikring</a> sælger til 2.200 kr. pr. lås. Montering kommer oveni.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Manuel udvendig lås", 950, "Daken Saturn EVO"],
            ["Smæklås", 995, "Bawer Armo"],
            ["Sikringsgitter", 1116, "WGuard"],
            ["GPS-tracker", 2395, "DEFA Finder Link"],
            ["Kroglås", 2500, "Locks4Vans integreret lås"],
            ["Alarm", 2825, "DEFA DVS90"],
            ["Certificeret udvendig lås", 3495, "L4V Statement Lock"],
            ["Sikker opbevaring", 4086.21, "Armorgard OxBox"]
          ],
          note: `Fra-priser for ét produkt uden montering. Kilde: <a href="${AL1}" rel="noopener">AutoLock: Tyverisikring til varebil</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Til sammenligning har Installatør oplyst, at DNA-mærkning og trackere til værktøj koster 7-800 kr.`
        ]
      },
      {
        overskrift: "Komplet sikring med montering",
        tekst: [
          `Prisen for at sikre bagdørene og én skydedør afhænger mest af, om låsen sidder udenpå eller indvendigt. Her er fire løsninger med montering.`,
          `Tryg viser sine egne priser til erhvervskunder hos SmartVan. En UFO uden smækfunktion til to døre koster 3.497 kr. monteret på valgfri adresse og 2.797 kr. monteret på værksted. Normalprisen er 500 kr. højere i begge tilfælde.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["UFO, 2 låse (SmartVan)", 3793],
            ["UFO3, 2 låse (SmartVan)", 4993],
            ["EL-Lokk, indvendig (SmartVan)", 12000],
            ["HERKULES, indvendig, 2 døre", 14000]
          ],
          note: `Kilder: <a href="${SVPRIS}" rel="noopener">SmartVan</a> og <a href="${HERKP}" rel="noopener">HERKULES Sikring</a>, vejledende priser inkl. montering, set den 7. oktober 2026. SmartVan: monteret på firmaadressen, uden fragt, og EL-Lokk er en fra-pris efter bilmodel. HERKULES: bagdøre og 1 sidedør, plus evt. kørsel og tillæg, hvis reoler står i vejen.`
        },
        efter: [
          `HERKULES monterer som udgangspunkt på sit værksted i Randers og efter aftale andre steder. Reoler er oftest ingen hindring for monteringen, og kablerne kan føres skjult bag beklædningen, oplyser firmaet. Kilde om Tryg: <a href="${TRYGR}" rel="noopener">Tryg: Varevognssikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Udvendig eller indvendig lås?",
        tekst: [
          `<strong>Den udvendige lås kan ses</strong> og virker afskrækkende. Den kræver en ekstra nøgle og en ekstra handling, undtagen på en slamlock, og monteres typisk gennem døren. På SmartVans UFO Standard tager du kuplen af om morgenen og sætter den på igen til fyraften.`,
          `<strong>Den indvendige lås er usynlig og automatisk.</strong> Den følger centrallåsen, så den altid er slået til. Forhandlerne sætter typisk et mærkat på døren, så den også kan ses udefra. HERKULES' låse kan kun låses op, når tændingen er slået til.`,
          `Mange kombinerer de to: en indvendig lås, der altid er slået til, og en synlig forstærkning udvendigt.`
        ],
        figur: [
          {
            type: "svg",
            svg: `<svg viewBox="0 0 440 270" role="img" aria-label="Dobbelte bagdøre på en kassevogn set bagfra med placering af vinduesgitter, udvendig ekstralås over dørenes samling og integreret lås med krogbolt i dørkanten">
<rect x="110" y="15" width="220" height="222" rx="8" class="tg-rum"/>
<rect x="122" y="28" width="97" height="200" class="tg-profil"/>
<rect x="221" y="28" width="97" height="200" class="tg-profil"/>
<rect x="134" y="42" width="73" height="62" class="tg-kasse"/>
<rect x="233" y="42" width="73" height="62" class="tg-kasse"/>
<line x1="146" y1="42" x2="146" y2="104" class="tg-skinne-tynd"/>
<line x1="158" y1="42" x2="158" y2="104" class="tg-skinne-tynd"/>
<line x1="170" y1="42" x2="170" y2="104" class="tg-skinne-tynd"/>
<line x1="182" y1="42" x2="182" y2="104" class="tg-skinne-tynd"/>
<line x1="194" y1="42" x2="194" y2="104" class="tg-skinne-tynd"/>
<line x1="245" y1="42" x2="245" y2="104" class="tg-skinne-tynd"/>
<line x1="257" y1="42" x2="257" y2="104" class="tg-skinne-tynd"/>
<line x1="269" y1="42" x2="269" y2="104" class="tg-skinne-tynd"/>
<line x1="281" y1="42" x2="281" y2="104" class="tg-skinne-tynd"/>
<line x1="293" y1="42" x2="293" y2="104" class="tg-skinne-tynd"/>
<line x1="220" y1="28" x2="220" y2="228" class="tg-gulvlinje"/>
<circle cx="220" cy="168" r="12" class="tg-kuffert"/>
<circle cx="220" cy="168" r="4" class="tg-hylde"/>
<rect x="305" y="118" width="11" height="28" class="tg-modul"/>
<path d="M316,126 L326,126 L326,138" fill="none" class="tg-gulvlinje"/>
<rect x="110" y="237" width="220" height="10" class="tg-hylde"/>
<g class="tg-call"><line x1="170" y1="74" x2="96" y2="60"/><circle cx="170" cy="74" r="3"/><text x="8" y="56" class="tg-call__navn">Gitter</text><text x="8" y="71" class="tg-call__under">bag ruderne</text></g>
<g class="tg-call"><line x1="220" y1="168" x2="110" y2="176"/><circle cx="220" cy="168" r="3"/><text x="8" y="172" class="tg-call__navn">Ekstralås</text><text x="8" y="187" class="tg-call__under">over samlingen</text></g>
<g class="tg-call"><line x1="326" y1="132" x2="346" y2="108"/><circle cx="326" cy="132" r="3"/><text x="350" y="98" class="tg-call__navn">Krogbolt</text><text x="350" y="113" class="tg-call__under">integreret lås</text></g>
<text x="220" y="263" text-anchor="middle" class="tg-lille">SET BAGFRA</text>
</svg>`,
            tekst: `Skematisk. En udvendig lås til dobbelte bagdøre låser begge døre og sidder ved samlingen. En integreret lås låser døren fast i karrosseriet med en krogbolt. Gitrene dækker ruderne. Placeringen varierer fra model til model, oplyser AutoLock.`
          }
        ],
        efter: [
          `Kilder: <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans</a>, <a href="${SVPRIS}" rel="noopener">SmartVan</a> og <a href="${HERKH}" rel="noopener">HERKULES: Varevognslås</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Gitter for ruderne",
        tekst: [
          `AutoLock skriver, at de mest ihærdige tyve går efter ruderne ind til varerummet, når låsene holder. Firmaet sælger gitre til alle vinduer i varerummet og skriver, at gitrene også forhindrer, at lasten slår vinduerne i stykker ved en hård opbremsning.`,
          `SmartVan sælger gitrene både som gitter og som heldækkende plade. Valget står mellem udsyn gennem bakspejlet og den afskrækkende virkning af en heldækkende plade, skriver SmartVan.`
        ],
        punkter: [
          `<strong>Materiale.</strong> SmartVans gitre fra Van Guard er laserskåret af 1,2 mm galvaniseret stålplade uden svejsninger og pulverlakeret. De fås også som heldækkende plade.`,
          `<strong>Pris.</strong> Gitre til bagdørenes ruder på en Ford Transit 2000-2014 med bagrudevisker koster 1.154 kr. for et par og vejer 4 kg. Skydedørsgitter til Trafic, Primastar, Vivaro, NV300 og Talento koster 2.256 kr. Begge er normalpriser i webshoppen, og i oktober 2026 sælger SmartVan dem som outlet til 439 kr. og 902,40 kr.`,
          `<strong>Montering.</strong> Det tager ca. 15-20 minutter med det medfølgende monteringskit, oplyser SmartVan.`,
          `<strong>HERKULES.</strong> Firmaet monterer tilpassede gitre sammen med låsesystemet og giver prisen i et tilbud.`
        ],
        efter: [
          `Kilder: <a href="${ALTYP}" rel="noopener">AutoLock</a>, <a href="${SVGIT}" rel="noopener">SmartVan: Vinduesgitter</a>, <a href="${SVSKYD}" rel="noopener">SmartVan: Skydedørsgitter</a> og <a href="${HERKP}" rel="noopener">HERKULES</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Leaset bil og løsninger uden boring",
        tekst: [
          `Udvendige låse monteres som regel gennem pladen. Der findes også løsninger uden boring. SmartVan sælger UFO-låse til boringsfri beslag, og AutoLock har en blokering, der sidder i anhængertrækket. Indvendige låse og sikre værktøjskasser kan ofte flyttes med til næste bil.`,
          `Hullerne betyder noget, når en leaset bil skal afleveres. Ayvens godtager monteringshuller fra eftermonteret udstyr og reoler i varerummet, når de er udbedret tilfredsstillende, men tager et gebyr på 1.500 kr., hvis udstyr, du selv har monteret, ikke er taget af. Reglerne står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Når bilen er leveret", "Låse, alarm og kasser monteres. En lås uden boring efterlader ingen huller i døren."],
            ["I leasingperioden", "Hos GF dækker kaskoen fastmonteret indretning og en eftermonteret alarm eller GPS."],
            ["Før afleveringen", "Udstyr, du selv har monteret, tages af. Ellers tager Ayvens et gebyr på 1.500 kr."],
            ["Ved afleveringen", "FDM gennemgår bilen for Ayvens. Udbedrede monteringshuller i varerummet godtages."]
          ],
          note: `Kilder: <a href="${AYV}" rel="noopener">Ayvens: Afleveringsguide</a> (gebyrliste pr. juni 2025) og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikringen dækker bilen, ikke værktøjet",
        tekst: [
          `Kaskoforsikringen dækker bilen. Værktøj i bilen dækkes af en transportforsikring som tilvalg til løsøreforsikringen, oplyser Topdanmark, og andre selskaber har tilsvarende dækninger. Policerne stiller typisk krav til aflåsning og til, om værktøjet må ligge i bilen om natten.`,
          `Sikringen selv hører til bilen. GF's kasko dækker tyverialarm, GPS-overvågning, reoler, skuffer og lignende indretning, også når udstyret er monteret efter levering. Udstyret skal være fastmonteret, så det ikke kan fjernes uden værktøj. Mere i <a href="/til-varebilen/forsikring/">forsikring af varebilen</a> og <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`
        ],
        efter: [
          `Kilder: <a href="${TDFAQ}" rel="noopener">Topdanmark: Er værktøj dækket af min køretøjsforsikring?</a> og <a href="${GF}" rel="noopener">GF, punkt 4.1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Forsikringens krav stiger med værdien",
        tekst: [
          `Gjensidige kræver aktiv alarm i kabine og varerum, når værktøj og materialer for over 100.000 kr. køres i bilen. Alarmen skal have åbningskontakter på alle døre og glasbrudsdetektorer og være koblet til bilens horn.`,
          `Over 200.000 kr. skal låsene også være dirkefri og boringssikre, og vinduer til varerummet skal have stålgitter. Gjensidige skriver desuden, at der oftest skal være synlige tegn på opbrud, før selskabet anerkender en tyveriskade. Mere i <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Trappe med to trin. Over 100.000 kr. i værdi pr. transport kræver Gjensidige alarm i kabine og varerum med kontakter, glasbrudsdetektorer og horn. Over 200.000 kr. kræver Gjensidige desuden dirkefri og boringssikre låse og stålgitter for ruderne til varerummet."><rect class="tg-kasse" x="30" y="150" width="170" height="70"/><rect class="tg-modul" x="200" y="70" width="170" height="150"/><line class="tg-gulvlinje" x1="10" y1="220" x2="390" y2="220"/><text class="tg-fremhaev" x="40" y="140">Over 100.000 kr.</text><text x="40" y="170">alarm i kabine</text><text x="40" y="184">og varerum med</text><text x="40" y="198">kontakter, glasbrud</text><text x="40" y="212">og horn</text><text class="tg-fremhaev" x="210" y="60">Over 200.000 kr.</text><text x="210" y="92">som trinnet før og</text><text x="210" y="106">dirkefri og</text><text x="210" y="120">boringssikre låse</text><text x="210" y="134">og stålgitter for</text><text x="210" y="148">ruderne til</text><text x="210" y="162">varerummet</text><text class="tg-lille" x="200" y="244" text-anchor="middle">VÆRDI AF INDHOLDET VED HVER TRANSPORT</text></svg>`,
          tekst: `Skematisk. Kravene gælder, når virksomheden har transportforsikring hos Gjensidige. Kilde: <a href="${GJ}" rel="noopener">Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forsikringsselskaberne giver rabat",
        tekst: [
          `Flere selskaber har aftaler med SmartVan. Tryg oplyser en rabat på 500 kr. på UFO-låse for erhvervskunder, og Topdanmark oplyser op til 15 procent rabat hos SmartVan for sine kunder. SmartVan skriver, at firmaet har aftaler med de største danske forsikringsselskaber.`,
          `Topdanmark, der i dag er en del af If, giver også 5.000 kr. i rabat på selvrisikoen ved indbrud, når bilen har en alarm, der lever op til kravene. Rabatten gælder ikke, hvis Topdanmark har stillet krav om alarm i vilkårene.`
        ],
        tabel: {
          kolonner: ["Selskab", "Rabat", "Hvor"],
          raekker: [
            ["Tryg", "500 kr. på monterede UFO-låse", "SmartVan"],
            ["Topdanmark", "Op til 15 % på alarm, lås mv.", "SmartVan"],
            ["Topdanmark", "20 % på et alarmkit", "Avant Denmark"],
            ["Topdanmark", "5.000 kr. i selvrisiko ved indbrud", "Med godkendt alarm"]
          ],
          note: `Kilder: <a href="${TRYGR}" rel="noopener">Tryg: Varevognssikring</a>, <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud</a>, <a href="${TDALARM}" rel="noopener">Topdanmark: Alarm i varebilen</a> og <a href="${SVPRIS}" rel="noopener">SmartVan</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Monteringstid",
        tekst: [
          `Monteringstiden afgør, hvor længe bilen står stille. SmartVan oplyser tiderne herunder, og de varierer fra bil til bil.`,
          `Bilen behøver ikke stå på et værksted. AutoLock kører ud til alle brofaste adresser, SmartVan monterer på firmaadressen eller hos et værksted, og HERKULES monterer som udgangspunkt i Randers. AutoLock giver 2 års garanti på produkter og montering, og SmartVan giver 3 års garanti på UFO-låsene.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["UFO-lås", "ca. 1", "time pr. lås"],
            ["EL-Lokk, første dør", "2½", "timer"],
            ["EL-Lokk, næste døre", "1", "time pr. dør"],
            ["Vinduesgitter", "15-20", "min."]
          ],
          note: `Kilde: SmartVan, <a href="${SVUFO}" rel="noopener">UFO-låse</a>, <a href="${SVELLOKK}" rel="noopener">EL-Lokk</a> og <a href="${SVPRIS}" rel="noopener">priser med montering</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder om montering: <a href="${ALTYP}" rel="noopener">AutoLock</a> og <a href="${HERKP}" rel="noopener">HERKULES</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Parkering og natten",
        tekst: [
          `Hvor bilen holder, påvirker også risikoen. Topdanmark foreslår at parkere et oplyst sted, op ad en husmur eller et hegn, og at bruge en garage, når det er muligt. F&amp;P råder til at undgå øde, mørke steder uden trafik og til at sørge for, at man ikke kan kigge ind i varerummet.`,
          `Om natten foreslår Topdanmark at tømme bilen for værktøj og sætte et skilt i forruden om, at der intet værktøj er i bilen. Kilder: <a href="${TDFOREBYG}" rel="noopener">Topdanmark</a> og <a href="${FP24}" rel="noopener">F&amp;P, 13. februar 2024</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så kan løsningen passe til bilen og forsikringens krav.",
    spoergsmaal: [
      "Bilens model og årgang, og hvilke døre der skal sikres.",
      "Forsikringens krav til aflåsning og alarm.",
      "Værdien af værktøj og maskiner i bilen.",
      "Om sikringen skal kunne flyttes til næste bil.",
      "Om der må bores i døren, eller om bilen er leaset og skal afleveres uden huller.",
      "Hvor bilen holder om natten."
    ],
    faq: [
      ["Er værktøj i varebilen dækket af bilforsikringen?", "Normalt ikke. Topdanmark henviser til en transportforsikring som tilvalg til løsøreforsikringen."],
      ["Hvad er forskellen på deadlock og slamlock?", "En deadlock låses med nøgle. En slamlock låser automatisk, når døren smækkes i."],
      ["Hvad koster en ekstra lås til varebilen?", "Hos AutoLock fra 950 kr. for en manuel udvendig lås og 995 kr. for en smæklås, mens kroglåse og certificerede låse koster fra 2.500 til 3.495 kr. uden montering. Priserne er uden moms (oktober 2026)."],
      ["Hvor mange tyverier sker der fra varebiler?", "3.618 i 2025 ifølge Rigspolitiet, omkring ti om dagen og det laveste siden 2021."],
      ["Hvor sker der flest tyverier fra biler?", "I Region Hovedstaden. Her blev der ifølge Danmarks Statistik anmeldt 6.733 tyverier fra bil, båd mv. i 2025. Det er 51 procent af landets 13.168. København alene stod for 3.845."],
      ["Hvad koster en indvendig lås til varebil?", "HERKULES oplyser 10.000 kr. for én dør, 14.000 kr. for bagdøre og én sidedør og 17.000 kr. for tre døre inkl. montering. SmartVans EL-Lokk koster fra 12.000 kr. med montering (oktober 2026)."],
      ["Hvor lang tid tager montering af varerumssikring?", "SmartVan oplyser ca. 1 time pr. UFO-lås, 2½ time for første dør med EL-Lokk og 1 time for hver af de næste, og 15-20 minutter for et vinduesgitter."],
      ["Kræver forsikringen alarm i varebilen?", "Gjensidige kræver alarm i kabine og varerum, når værdien pr. transport er over 100.000 kr. Topdanmark giver 5.000 kr. i rabat på selvrisikoen for en godkendt alarm."]
    ],
    kilder: [
      { navn: "Installatør: Nye tal, tyverier fra varebiler falder markant (19.02.2026, Rigspolitiets tal)", url: INST26, dato: "2026-10-07" },
      { navn: "Forsikring & Pension: Voldsom stigning i tyveri fra håndværkerbiler i københavnsområdet (13.02.2024)", url: FP24, dato: "2026-10-07" },
      { navn: "Sikringsguiden (F&P): Tyveri fra varebiler", url: SG, dato: "2026-09-27" },
      { navn: "Topdanmark: Er værktøj dækket af min køretøjsforsikring?", url: TDFAQ, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TDALARM, dato: "2026-10-07" },
      { navn: "Tryg: Varebilsikring (rabat hos SmartVan)", url: TRYGR, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring til varebil (priser)", url: AL1, dato: "2026-10-07" },
      { navn: "CargoSikring: Blackstone varebilslås", url: CGB, dato: "2026-10-07" },
      { navn: "SmartVan: UFO-låse", url: SVUFO, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varevogn (webshop)", url: SVKAT, dato: "2026-10-07" },
      { navn: "HERKULES Sikring: Varevognslås", url: HERKH, dato: "2026-10-07" },
      { navn: "Unisecure: Varevognssikring", url: UNIS, dato: "2026-09-27" },
      { navn: "Installatør: Tyveri af værktøj fra varebiler boomer, det gør mærkningen ikke (13.02.2025)", url: INST25, dato: "2026-10-07" },
      { navn: "Danmarks Statistik: STRAF11, anmeldte forbrydelser efter område og type", url: DST, dato: "2026-10-07" },
      { navn: "HERKULES Sikring: Pris på indbrudssikring (vejledende prisliste)", url: HERKP, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varebilen 2025 (priser med montering)", url: SVPRIS, dato: "2026-10-07" },
      { navn: "SmartVan: Vinduesgitter, Ford Transit 2000-2014", url: SVGIT, dato: "2026-10-07" },
      { navn: "SmartVan: Skydedørsgitter, Trafic, Primastar, Vivaro, NV300, Talento", url: SVSKYD, dato: "2026-10-07" },
      { navn: "SmartVan: EL-Lokk elektrisk lås, Transit 2014- og E-Transit 2022-", url: SVELLOKK, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring af varebil (låsetyper og gitre)", url: ALTYP, dato: "2026-10-07" },
      { navn: "AutoLock: Locks4Vans integreret lås til varevogn", url: ALL4V, dato: "2026-10-07" },
      { navn: "Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne", url: GJ, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler (gebyrliste pr. juni 2025)", url: AYV, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Pristabellen viser nu AutoLocks priser uden moms, set den 7. oktober 2026, i stedet for priser med moms fra 27. september: manuel lås 950 kr. (1.187,50 kr. med moms), sikringsgitter WGuard 1.116 kr. (1.395 kr.), forstærkning fra 292,50 kr. (365,63 kr.), DEFA DVS90 2.825 kr. (3.531,25 kr.), DEFA Finder Link 2.395 kr. (2.993,75 kr.), Armorgard OxBox 4.086,21 kr. (5.107,76 kr.), røgkanon 797,50 kr. (996,88 kr.).", AL1],
    ["RETTET: I den gamle tabel var Locks4Vans (3.125 kr.) kaldt deadlock og L4V T-serie (4.369 kr.) kaldt hooklock. AutoLock beskriver Locks4Vans' integrerede lås som en krogbolt (hooklock), fra 2.500 kr. uden moms, og L4V Statement Lock T-serie som en manuel udvendig lås med Sold Secure Diamond, fra 3.495 kr. uden moms.", ALL4V],
    ["RETTET: Smæklåse fås fra 995 kr. uden moms (Bawer Armo, 1.243,75 kr. med moms), ikke fra 2.070 kr. med moms, som den gamle tabel skrev, selvom Bawer Armo stod som eksempel.", AL1],
    ["RETTET: Den gamle FAQ skrev, at en ekstra lås koster fra omkring 1.200 kr. og 2.000-4.400 kr. med moms (september 2026). Svaret bruger nu AutoLocks priser uden moms fra 7. oktober 2026: 950 kr., 995 kr. og 2.500-3.495 kr.", AL1],
    ["AutoLock giver 2 års garanti på alle produkter og services, og SmartVan giver 3 års garanti på UFO-låsene.", SVPRIS],
    ["TEKNIQ (Installatør 2026): hver fjerde virksomhed i en medlemsundersøgelse har oplevet tyveri fra varebiler inden for det seneste år.", INST26],
    ["Topdanmark: ifølge F&P løber tyvene med ca. 70.000 kr. pr. indbrud; derudover kommer tabt arbejdsfortjeneste, værkstedsbesøg og besværet med at ændre kundeaftaler.", TDFOREBYG],
    ["AutoLock: organiserede tyvebander ser håndværkernes varebiler som et let mål, hvor håndværktøj er let at omsætte gennem hælere; alle varebiler har svage punkter, fx software og elektronik, dørkontakt i førerkabinen, ruder til varerummet og adgang til låsekassen via håndtag eller gennem bilens tynde karrosseri.", ALTYP],
    ["Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset, hvor centrallåsen aktiveres, så der bliver fri adgang til varerummet.", TRYGR],
    ["F&P 2024: når værktøjet er væk, kan man ikke overholde aftaler med kunderne, og varebilen skal til reparation.", FP24],
    ["Gjensidige: dækningen ved indbrud fra biler omfatter ikke umiddelbart personaleudgifterne, fx spildtid når medarbejdere mangler værktøj, tid til genanskaffelse og tid til opgørelse af kravet.", GJ],
    ["SmartVan beskriver forløbet efter et tyveri: overblik over skader og stjålet værktøj, politirapport, forsikringsselskabet skal have overblik, værkstedsbesøg og indkøb af nyt værktøj.", SVKAT],
    ["Danmarks Statistik: tyveri fra bil, båd mv. lå i første halvår 2026 8 % under første halvår 2025; faldet kom i Region Hovedstaden og Region Midtjylland.", DST],
    ["AutoLock sælger L4V Statement Lock T-serie fra 3.495 kr., Locks4Vans integreret lås fra 2.500 kr. og Bawer Armo smæklås til 995 kr., alle uden moms.", AL1],
    ["Tryg: SmartVan UFO uden smækfunktion til to døre koster for Trygs erhvervskunder 3.497 kr. monteret på valgfri adresse og 2.797 kr. monteret på værksted, uden moms.", TRYGR],
    ["SmartVan: på UFO Standard tager man kuplen af, når man møder, og sætter den på til fyraften.", SVPRIS],
    ["HERKULES: låsesystemet kan kun låses op med tændingen slået til.", HERKH],
    ["AutoLock: gitre for vinduerne i varerummet forhindrer også, at lasten slår vinduerne i stykker ved hård opbremsning.", ALTYP],
    ["SmartVan: gitrene fås som gitter eller heldækkende plade, og man skal veje udsyn via bakspejlet mod den afskrækkende virkning af en heldækkende plade.", SVGIT],
    ["SmartVan sælger i oktober 2026 vinduesgitteret til Ford Transit 2000-2014 som outlet til 439 kr. og skydedørsgitteret til 902,40 kr., uden moms.", SVGIT],
    ["Ayvens godtager tilfredsstillende udbedrede monteringshuller fra eftermonteret udstyr og reoler i varerummet, og manglende afmontering af ekstra udstyr koster 1.500 kr. (gebyrliste pr. juni 2025); FDM gennemgår bilen.", AYV],
    ["GF: kaskoen dækker tyverialarm og GPS-overvågning og reoler, skuffer og lignende indretning, selvom udstyret ikke er monteret af forhandleren før levering; udstyr skal være fastmonteret (punkt 4.1).", GF],
    ["Gjensidige: alarmen ved over 100.000 kr. pr. transport skal have åbningskontakter på alle døre og glasbrudsdetektorer og være koblet til hornet; der skal oftest være synligt tegn på opbrud, før en tyveriskade anerkendes.", GJ],
    ["SmartVan skriver, at firmaet har aftaler med de største danske forsikringsselskaber.", SVPRIS],
    ["Topdanmark er en del af If og giver 20 % rabat på et alarmkit hos Avant Denmark; selvrisikorabatten på 5.000 kr. gælder ikke, hvis Topdanmark har stillet krav om alarm i vilkårene.", TDALARM],
    ["AutoLock kører ud til alle brofaste steder ved montering, og SmartVan monterer på firmaadressen eller hos et værksted.", ALTYP],
    ["Topdanmark foreslår at parkere et oplyst sted, op ad en husmur eller et hegn, bruge garage, når det er muligt, og tømme bilen for værktøj om natten med et skilt i forruden om, at der intet værktøj er i bilen.", TDFOREBYG],
    ["F&P 2024 råder til at undgå øde, mørke steder uden trafik og sørge for, at man ikke kan kigge ind i varerummet udefra.", FP24]
  ]
};
