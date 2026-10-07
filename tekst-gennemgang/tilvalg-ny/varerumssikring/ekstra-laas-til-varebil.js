// Underside /til-varebilen/varerumssikring/ekstra-laas-til-varebil/ (07-10-2026)
var AL1 = `https://autolock.dk/tyverisikring/varebil/`;
var AL2 = `https://autolock.dk/tyverisikring/varebil/?p=2`;
var ALTYP = `https://autolock.dk/tyverisikring-af-varebil`;
var ALL4V = `https://autolock.dk/locks4vans-integreret-laas-varevogn/`;
var ALSTAT = `https://autolock.dk/statement-lock/`;
var ALBULL = `https://autolock.dk/bulllock/`;
var SVUFO = `https://smartvan.dk/produkt/ufo-laas/`;
var SVPRIS = `https://smartvan.dk/tyverisikring-til-varebilen-2025/`;
var SVKAT = `https://smartvan.dk/kategori/tyverisikring-til-varevogn/`;
var SVKAT3 = `https://smartvan.dk/kategori/tyverisikring-til-varevogn/page/3/`;
var SVDUO = `https://smartvan.dk/produkt/ufo3-sikker-smart-duo-doerlaas/`;
var SVLUCC = `https://smartvan.dk/produkt/luccotto-laas-tyverisikring/`;
var SVELLOKK = `https://smartvan.dk/produkt/el-lokk-elektrisk-laas-transit-14-e-transit-22-2-skydedoere-alarm-centrallaas-styring/`;
var CGB = `https://www.cargosikring.dk/product-page/blackstone-varebilslaas`;
var CGC = `https://www.cargosikring.dk/product-page/blackstone-cube-1-pack-slam-rustfri-st%C3%A5l`;
var CGBORE = `https://www.cargosikring.dk/product-page/boresikring-rustfri-st%C3%A5l-blackstone-2022`;
var HERKP = `https://herkules-sikring.dk/pris-paa-indbrudssikring/`;
var HERKH = `https://herkules-sikring.dk/varevognslaas-hvorfor/`;
var HERKF = `https://herkules-sikring.dk/tyverisikring-af-varebil-spoergsmaal-og-svar/`;
var GJ = `https://gjensidige.dk/filer/erhverv/storkunde-og-maegler/Sikringsoversigt-Forsikringsbetingelserne`;
var TDALARM = `https://www.topdanmark.dk/erhverv/gode-raad/monter-en-alarm-i-din-varevogn-og-spar-5000-kr-i-selvrisiko/`;
var TDFOREBYG = `https://www.topdanmark.dk/erhverv/gode-raad/forebyg-indbrud-i-vare-vognen/`;
var TRYGR = `https://tryg.dk/erhverv/rabatter/varebilsikring`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;

module.exports = {
  id: "varerumssikring/ekstra-laas-til-varebil",
  side: {
    slug: "ekstra-laas-til-varebil",
    navn: "Ekstra lås til varebil",
    titel: "Ekstra lås til varebil: typer, priser og montering",
    kort: `Deadlock, slamlock, hooklock og UFO-lås: hvordan de virker, hvad de koster hos AutoLock, SmartVan og CargoSikring, og hvad montering koster.`,
    beskrivelse: `Ekstra lås til varebil: deadlock, slamlock, hooklock og UFO-lås. Priser fra 950 kr., montering, låse uden boring og regler for leasingbiler.`,
    manchet: `En ekstra lås sidder uafhængigt af bilens egen lås og gør det sværere at bukke eller dirke døren op. Her kan du se, hvordan de fire typer virker i hverdagen, hvad låsene koster hos fem danske forhandlere, og hvad montering og en leaset bil betyder for valget.`,
    visuel: {
      hero: "varerumssikring",
      kort_fortalt: [
        ["To UFO-låse, SmartVan", "1.795 kr.", "til bagdørene og en skydedør"],
        ["Montering", "ca. 1 time", "pr. UFO-lås, oplyser SmartVan"],
        ["To UFO-låse monteret", "3.793 kr.", "på firmaadressen hos SmartVan"],
        ["Indvendig elektrisk lås", "fra 12.000 kr.", "SmartVans EL-Lokk monteret"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvorfor bilens egen lås ikke er nok",
        tekst: [
          `En varebil har svage punkter, som tyvene kender. AutoLock nævner bilens software og elektronik, dørkontakten i førerkabinen, ruderne ind til varerummet og låsekassen, som tyven kan nå gennem håndtaget eller den tynde plade. HERKULES skriver, at en tyv hurtigt kan banke et lille hul i sidedøren og få adgang til låsen den vej.`,
          `En ekstra lås sidder uafhængigt af bilens egen lås. Den holder døren lukket, selvom tyven får centrallåsen til at åbne, og den gør det sværere at bukke eller dirke døren op. AutoLock skriver, at låsene gør et indbrud sværere, mere støjende og mere tidskrævende.`,
          `Kilder: <a href="${ALTYP}" rel="noopener">AutoLock: Tyverisikring af varebil</a> og <a href="${HERKF}" rel="noopener">HERKULES: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fire typer",
        tekst: [
          `Forskellen ligger i, hvordan låsen bliver låst. En deadlock låser du med nøglen, en slamlock låser selv, når døren smækkes, og en hooklock holder døren fast i karrosseriet med en krog. UFO-låsen fra SmartVan er en rund udvendig lås, og UFO3 kan også bruges som smæklås.`
        ],
        kort: [
          ["Deadlock", "Manuel, mekanisk lås, der virker uafhængigt af bilens låsesystem. Den kan sidde integreret i døren eller synligt udvendigt."],
          ["Slamlock", "Smæklås. Den låser, så snart døren smækkes, og passer til mange stop om dagen."],
          ["Hooklock", "Krogbolt, der låser døren fast i karrosseriet. Den betjenes med en separat nøgle."],
          ["UFO-lås", "Rund udvendig lås i hærdet stål med en boresikker og dirkefri cylinder."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 228" role="img" aria-label="To låse side om side. Til venstre en deadlock, hvor rigelen først går ud i modstykket, når nøglen drejes. Til højre en slamlock, hvor en fjeder skyder den skrå rigel ud, så døren låser, når den smækkes i."><defs><marker id="pil-ekstra-laas-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="20" y="20">Deadlock</text><text class="tg-fremhaev" x="220" y="20">Slamlock</text><rect class="tg-rum" x="20" y="52" width="80" height="110"/><rect class="tg-rum" x="104" y="52" width="76" height="110"/><rect class="tg-kasse" x="106" y="92" width="22" height="30"/><rect class="tg-kuffert" x="62" y="86" width="34" height="42"/><rect class="tg-modul" x="96" y="100" width="26" height="14"/><circle class="tg-hylde" cx="79" cy="107" r="5"/><text x="100" y="186" text-anchor="middle">Rigelen går ud,</text><text x="100" y="201" text-anchor="middle">når nøglen drejes</text><rect class="tg-rum" x="220" y="52" width="80" height="110"/><rect class="tg-rum" x="304" y="52" width="76" height="110"/><rect class="tg-kasse" x="306" y="92" width="22" height="30"/><rect class="tg-kuffert" x="262" y="86" width="34" height="42"/><path class="tg-modul" d="M296,100 L316,100 L324,114 L296,114 Z"/><path class="tg-skinne-tynd" fill="none" d="M266,107 L270,101 L274,113 L278,101 L282,113 L286,101 L290,107"/><line class="tg-pil" x1="236" y1="44" x2="286" y2="44" marker-end="url(#pil-ekstra-laas-1)"/><text class="tg-lille" x="236" y="34">DØREN SMÆKKES</text><text x="300" y="186" text-anchor="middle">Fjederen skyder</text><text x="300" y="201" text-anchor="middle">rigelen ud</text><text class="tg-lille" x="200" y="222" text-anchor="middle">SKEMATISK</text></svg>`,
          tekst: `Skematisk. En deadlock låser først, når du drejer nøglen. En slamlock har en skrå rigel med en fjeder, så døren låser af sig selv, når den smækkes i.`
        }
      },
      {
        overskrift: "Låsen i hverdagen",
        tekst: [
          `AutoLock beskriver deadlocken som en lås til de længere ophold. Du kører på centrallåsen i løbet af dagen og låser varerummet med den ekstra lås, når du går ind til en kunde eller har fri. L4V Statement Lock låses op ved arbejdsdagens start og låses igen ved fyraften, skriver AutoLock.`,
          `Har du mange stop om dagen, fx med pakker, anbefaler AutoLock en dirkesikret smæklås på dørene til varerummet. Så er der låst, hver gang døren smækkes, og du skal kun bruge nøglen, når du skal ind i varerummet igen.`,
          `SmartVans UFO-låse findes i tre udgaver til forskellige arbejdsdage. På UFO Standard tager du kuplen af, når du møder, og sætter den på igen til fyraften. På UFO2 bliver kuplen siddende, og du låser efter behov. UFO3 Smart Duo har en smækfunktion, som du selv kan slå til og fra.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Morgen", "Du låser den ekstra lås op og kører på bilens centrallås."],
            ["Hos kunden", "Med en slamlock låser døren sig selv, hver gang den smækkes."],
            ["Længere ophold", "Med en deadlock låser du varerummet, når du forlader bilen i længere tid."],
            ["Fyraften", "Den manuelle lås låses igen, og på UFO Standard sætter du kuplen på."]
          ],
          note: `Kilder: <a href="${ALTYP}" rel="noopener">AutoLock: Tyverisikring af varebil</a>, <a href="${ALSTAT}" rel="noopener">AutoLock: Statement Lock</a> og <a href="${SVPRIS}" rel="noopener">SmartVan: Tyverisikring til varebilen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Låsen i snit",
        tekst: [
          `En udvendig ekstralås består af et låsehus udenpå døren, en cylinder og en rigel, der går i et modstykke. Huset fastgøres gennem pladen med bolte, og på nogle låse sidder der forstærkede bagplader på indersiden.`,
          `CargoSikring skriver, at Blackstone er forankret direkte i døren og er lavet af rustfrit stål AISI 316.`
        ],
        punkter: [
          `<strong>Bolte og bagplader.</strong> L4V Statement Lock monteres skjult med forstærkede bagplader. CargoSikring fastgør Blackstone Cube med gennemgående bolte.`,
          `<strong>Cylinder.</strong> Blackstone har en anti-bore-afskærmning i hærdet stål foran cylinderen, og cylinderen er certificeret efter EN 1303:2015 i klasse 6.`,
          `<strong>Integreret lås.</strong> Locks4Vans' integrerede lås har en krogbolt, der låser døren fast i karrosseriet. AutoLock oplyser, at den ikke kan manipuleres indefra.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 250" role="img" aria-label="Skematisk snit set oppefra gennem en udvendig ekstralås på dobbelte bagdøre: låsehus udenpå, cylinder, bolte gennem pladen til bagplader og en rigel, der går i et modstykke på den anden dør">
<text x="410" y="40" text-anchor="end" class="tg-lille">UDVENDIGT</text>
<text x="410" y="196" text-anchor="end" class="tg-lille">INDVENDIGT</text>
<line x1="20" y1="130" x2="207" y2="130" class="tg-gulvlinje"/>
<line x1="20" y1="160" x2="207" y2="160" class="tg-gulvlinje"/>
<line x1="207" y1="130" x2="207" y2="160" class="tg-gulvlinje"/>
<line x1="213" y1="130" x2="400" y2="130" class="tg-gulvlinje"/>
<line x1="213" y1="160" x2="400" y2="160" class="tg-gulvlinje"/>
<line x1="213" y1="130" x2="213" y2="160" class="tg-gulvlinje"/>
<rect x="140" y="86" width="140" height="42" rx="6" class="tg-kuffert"/>
<rect x="160" y="66" width="30" height="20" class="tg-modul"/>
<line x1="160" y1="108" x2="246" y2="108" class="tg-doer"/>
<rect x="240" y="96" width="22" height="26" class="tg-kasse"/>
<line x1="152" y1="128" x2="152" y2="140" class="tg-gulvlinje"/>
<line x1="268" y1="128" x2="268" y2="140" class="tg-gulvlinje"/>
<rect x="140" y="132" width="26" height="7" class="tg-hylde"/>
<rect x="255" y="132" width="26" height="7" class="tg-hylde"/>
<text x="70" y="178" text-anchor="middle">venstre dør</text>
<text x="310" y="178" text-anchor="middle">højre dør</text>
<g class="tg-call"><line x1="175" y1="68" x2="134" y2="40"/><circle cx="175" cy="68" r="3"/><text x="10" y="30" class="tg-call__navn">Cylinder</text><text x="10" y="45" class="tg-call__under">bore- og dirkesikret</text></g>
<g class="tg-call"><line x1="146" y1="96" x2="90" y2="96"/><circle cx="146" cy="96" r="3"/><text x="10" y="92" class="tg-call__navn">Låsehus</text><text x="10" y="107" class="tg-call__under">udenpå døren</text></g>
<g class="tg-call"><line x1="152" y1="136" x2="110" y2="214"/><circle cx="152" cy="136" r="3"/><text x="10" y="218" class="tg-call__navn">Bolt og bagplade</text><text x="10" y="233" class="tg-call__under">gennem pladen</text></g>
<g class="tg-call"><line x1="230" y1="108" x2="300" y2="70"/><circle cx="230" cy="108" r="3"/><text x="306" y="60" class="tg-call__navn">Rigel</text><text x="306" y="75" class="tg-call__under">i modstykke</text></g>
</svg>`,
          tekst: `Skematisk snit set oppefra gennem en udvendig lås på dobbelte bagdøre. Delenes form og placering varierer fra lås til lås og fra model til model.`
        },
        efter: [
          `Kilder: <a href="${CGB}" rel="noopener">CargoSikring: Blackstone</a>, <a href="${CGC}" rel="noopener">CargoSikring: Blackstone Cube</a>, <a href="${ALSTAT}" rel="noopener">AutoLock: Statement Lock</a> og <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hooklock med krogbolt",
        tekst: [
          `En hooklock er en krogbolt, der låser døren fast i karrosseriet. AutoLock skriver om Locks4Vans' integrerede lås, at den gør det sværere for tyve at forcere døren, og at den ikke kan manipuleres indefra. Låsen betjenes med en separat nøgle.`,
          `AutoLock anbefaler at montere låsen på både side- og bagdøre, og den kan også sidde i en tophængt bagklap. Hver lås er tilpasset bilmodellen og døropsætningen, og placeringen varierer fra model til model. Har varerummet eller dørene ruder, beder AutoLock dig kontakte firmaet før bestillingen.`,
          `Mod forsøg på at bukke døren op sælger AutoLock også L4V Anti-Peel fra 1.095 kr. AutoLock beskriver den som en sikring mod nedbukning af døren.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Snit set oppefra gennem en dørkant. Tyven prøver at bukke døren udad, men en krogbolt fra låsen på dørens inderside griber fat i karrosseriet og holder døren inde."><defs><marker id="pil-ekstra-laas-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="20" y="24">UDVENDIGT</text><text class="tg-lille" x="20" y="200">INDVENDIGT</text><rect class="tg-hylde" x="250" y="40" width="40" height="130"/><rect class="tg-rum" x="40" y="90" width="208" height="22"/><rect class="tg-kuffert" x="200" y="112" width="36" height="26"/><rect class="tg-kasse" x="262" y="100" width="16" height="30"/><path class="tg-doer" fill="none" d="M236,125 L262,125 Q272,125 272,115 L272,104"/><line class="tg-pil" x1="120" y1="86" x2="120" y2="46" marker-end="url(#pil-ekstra-laas-2)"/><text x="130" y="58">tyven bukker</text><text x="130" y="72">døren udad</text><text x="144" y="104" text-anchor="middle">DØR</text><g class="tg-call"><line x1="272" y1="108" x2="318" y2="66"/><circle cx="272" cy="108" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Krogbolt</text><text class="tg-call__under" x="395" y="54" text-anchor="end">griber i karrosseriet</text></g><g class="tg-call"><line x1="290" y1="160" x2="318" y2="178"/><circle cx="290" cy="160" r="3"/><text class="tg-call__navn" x="395" y="190" text-anchor="end">Karrosseri</text><text class="tg-call__under" x="395" y="204" text-anchor="end">dørstolpen</text></g><g class="tg-call"><line x1="218" y1="138" x2="180" y2="170"/><circle cx="218" cy="138" r="3"/><text class="tg-call__navn" x="110" y="182">Låsen</text><text class="tg-call__under" x="110" y="196">på dørens inderside</text></g></svg>`,
          tekst: `Skematisk. En hooklock låser døren fast i karrosseriet med en krogbolt. Kilde: <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans integreret lås</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvilke døre skal have lås",
        tekst: [
          `En kassevogn har typisk to bagdøre og en eller to skydedøre. Én udvendig lås kan sidde over samlingen og låse begge bagdøre, og hver skydedør skal have sin egen lås. Derfor sælger SmartVan UFO-låsene i pakker med to låse til bagdørene og én skydedør og med tre låse, når bilen har to skydedøre.`,
          `Førerdøren er en sag for sig. Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset, hvor tyven aktiverer centrallåsen og får fri adgang til varerummet. Topdanmark foreslår at få en mekaniker til at deaktivere centrallåsen, så varerummet ikke låses op, når du åbner fordøren.`,
          `AutoLock sælger en forstærket lås til førerdøren på Ford-modeller, L4V Replock T-serie, til 1.195 kr.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Kassevogn set oppefra med kabinen til venstre. Lås nummer 1 sidder over samlingen mellem de to bagdøre, lås nummer 2 på den ene skydedør og lås nummer 3 på skydedøren i den anden side."><rect class="tg-rum" x="40" y="40" width="300" height="120" rx="14"/><line class="tg-skillevaeg" x1="120" y1="40" x2="120" y2="160"/><line class="tg-doer" x1="340" y1="48" x2="340" y2="98"/><line class="tg-doer" x1="340" y1="102" x2="340" y2="152"/><line class="tg-doer" x1="170" y1="40" x2="250" y2="40"/><line class="tg-doer" x1="170" y1="160" x2="250" y2="160"/><text class="tg-lille" x="80" y="104" text-anchor="middle">KABINE</text><text class="tg-lille" x="250" y="104" text-anchor="middle">VARERUM</text><g class="tg-nr"><circle cx="340" cy="100" r="10"/><text x="340" y="104" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="210" cy="160" r="10"/><text x="210" y="164" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="210" cy="40" r="10"/><text x="210" y="44" text-anchor="middle">3</text></g><text x="20" y="192">1  én lås over samlingen af bagdørene</text><text x="20" y="210">2  skydedøren</text><text x="20" y="228">3  den anden skydedør, hvis bilen har to</text><text class="tg-lille" x="380" y="104" text-anchor="end">BAG</text></svg>`,
          tekst: `Skematisk. To låse dækker bagdørene og én skydedør, og en tredje lås dækker skydedøren i den anden side. Kilder: <a href="${SVKAT3}" rel="noopener">SmartVan: Tyverisikring til varevogn</a> og <a href="${TRYGR}" rel="noopener">Tryg: Varevognssikring</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a> og <a href="${AL1}" rel="noopener">AutoLock: Tyverisikring til varebil</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Priser hos AutoLock",
        tekst: [
          `Alle priser på siden er uden moms. Det er sådan, SmartVan, CargoSikring og HERKULES skriver dem, og AutoLock viser både prisen med og uden moms. Montering kommer oveni, medmindre andet står.`,
          `Priserne går fra 950 kr. for Dakens manuelle udvendige lås til 3.495 kr. for L4V Statement Lock. GateLock GVS-P er nedsat til 997,50 kr. fra 1.995 kr. i oktober 2026.`
        ],
        tabel: {
          kolonner: ["Produkt", "Type", "Pris"],
          raekker: [
            ["Daken Saturn EVO", "Manuel udvendig lås", "fra 950 kr."],
            ["Bawer Armo", "Smæklås", "995 kr."],
            ["GateLock GVS-P", "Manuel lås uden boring", "997,50 kr. (normalt 1.995 kr.)"],
            ["Bull-Lock 2.0", "Blokering i anhængertrækket", "1.595 kr."],
            ["GateLock GVM-L", "Smæk- eller kombilås", "fra 1.656 kr."],
            ["Daken Blackstone Cube", "Smæk- eller kombilås", "fra 2.499 kr."],
            ["Locks4Vans integreret lås", "Hooklock", "fra 2.500 kr."],
            ["GateLock GVL", "Smæklås", "fra 2.852 kr."],
            ["GateLock og XVan XPVan", "Manuel lås og smæklås", "fra 2.895 kr."],
            ["L4V Statement Lock T-serie", "Manuel udvendig lås", "fra 3.495 kr."]
          ],
          note: `Kilde: <a href="${AL1}" rel="noopener">AutoLock: Tyverisikring til varebil</a> (side 1 og 2), AutoLocks webshoppriser pr. lås uden montering, set den 7. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Daken Saturn EVO", 950, "manuel udvendig lås, fra"],
            ["Bawer Armo", 995, "smæklås"],
            ["GateLock GVS-P", 997.5, "manuel lås uden boring, nedsat"],
            ["Bull-Lock 2.0", 1595, "blokering i anhængertrækket"],
            ["GateLock GVM-L", 1656, "smæk- eller kombilås, fra"],
            ["Daken Blackstone Cube", 2499, "smæk- eller kombilås, fra"],
            ["Locks4Vans integreret lås", 2500, "hooklock, fra"],
            ["GateLock GVL", 2852, "smæklås, fra"],
            ["GateLock og XVan XPVan", 2895, "manuel lås og smæklås, fra"],
            ["L4V Statement Lock T-serie", 3495, "manuel udvendig lås, fra"]
          ],
          note: `Søjlerne viser prisen for én lås uden montering. Kilde: <a href="${AL1}" rel="noopener">AutoLock: Tyverisikring til varebil</a> og <a href="${AL2}" rel="noopener">side 2</a>, AutoLocks webshoppriser, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "UFO-låse hos SmartVan",
        tekst: [
          `UFO-låsen er rund og lavet af vejrbestandigt, hærdet stål. Cylinderen er dirkefri og boringssikker og sidder beskyttet bag den runde skal. Låsen kan sidde på både bagdøre og skydedøre, og SmartVan giver 3 års garanti.`,
          `SmartVan sælger kun til erhverv. UFO3 Smart Duo koster 1.495 kr. for én lås, 2.995 kr. for to og 4.495 kr. for tre.`
        ],
        tabel: {
          kolonner: ["Produkt", "Til", "Pris"],
          raekker: [
            ["UFO dørlås, 1 stk.", "1 skydedør eller dobbelte bagdøre", "895 kr."],
            ["UFO lås, 2-pak", "2 bagdøre og 1 skydedør", "1.795 kr."],
            ["UFO varevognslås, 3-pak", "2 bagdøre og 2 skydedøre", "2.685 kr."],
            ["UFO3 Smart Duo, 2-pak", "2 bagdøre og 1 skydedør", "2.995 kr."],
            ["UFO+ lås, 2-pak", "2 bagdøre og 1 skydedør", "3.359 kr."],
            ["UFO 3-pak låse uden beslag", "Til boringsfri beslag", "2.235 kr."],
            ["UFO boringsfri beslag med 2 låse", "2 bagdøre og højre skydedør, udvalgte modeller", "3.359 kr."]
          ],
          note: `Kilde: <a href="${SVUFO}" rel="noopener">SmartVan: UFO-låse</a>, <a href="${SVKAT}" rel="noopener">SmartVan: Tyverisikring til varevogn</a> og <a href="${SVKAT3}" rel="noopener">side 3</a>, webshoppriser uden montering, set den 7. oktober 2026. Prisen på én UFO-lås og på UFO+ er set den 4. oktober 2026.`
        },
        efter: [
          `Låsene i en pakke har samme nøgle. SmartVan oplyser mål på 89 x 89 x 54,5 mm og en vægt på 860 g pr. lås i rustfrit stål AISI 630.`
        ]
      },
      {
        overskrift: "Pris med og uden montering",
        tekst: [
          `SmartVan monterer låsene på firmaadressen eller hos et værksted. Prisforskellen svarer til omkring 1.000 kr. pr. monteret UFO-lås. Et eksempel: To UFO-låse koster 1.795 kr. uden montering og 3.793 kr. monteret, så monteringen af de to låse koster 1.998 kr.`,
          `Tryg viser sine egne priser til erhvervskunder. En UFO uden smækfunktion til to døre koster 3.497 kr. monteret på valgfri adresse og 2.797 kr. monteret på værksted, og normalprisen er 500 kr. højere i begge tilfælde. Topdanmark, der i dag er en del af If, giver sine kunder op til 15 procent rabat på alarm og lås hos SmartVan.`
        ],
        tabel: {
          kolonner: ["Løsning", "Monteret på firmaadressen", "Uden montering"],
          raekker: [
            ["UFO, 2 låse", "3.793 kr.", "1.795 kr."],
            ["UFO2, 2 låse", "3.993 kr.", "1.995 kr."],
            ["UFO3, 2 låse", "4.993 kr.", "2.995 kr."],
            ["EL-Lokk, 2 låse", "fra 12.000 kr.", "Kræver montør"]
          ],
          note: `Kilde: <a href="${SVPRIS}" rel="noopener">SmartVan: Tyverisikring til varebilen</a>, set den 7. oktober 2026. Uden fragt og uden eventuel forsikringsrabat. 2 låse dækker bagdøre og 1 skydedør.`
        },
        efter: [
          `SmartVan giver monteringsrabat til kunder hos udvalgte forsikringsselskaber. Kilder: <a href="${TRYGR}" rel="noopener">Tryg: Varevognssikring</a> og <a href="${TDFOREBYG}" rel="noopener">Topdanmark: Forebyg indbrud i varebilen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Montering trin for trin",
        tekst: [
          `Hos AutoLock vælger du døre, angiver gerne nummerpladen, så firmaet kan finde den rigtige model, og vælger, om låsen skal monteres. Vælger du montering, kører AutoLock ud til alle brofaste adresser, og transporten er med i monteringsprisen. Du kan fx få låsen monteret på en opgave, mens du selv arbejder videre.`,
          `En udvendig lås bores som regel gennem pladen. Hos SmartVan følger der en skabelon med, som viser, hvor hullerne skal sidde.`
        ],
        punkter: [
          `<strong>Tid.</strong> SmartVan oplyser omkring en time pr. UFO-lås.`,
          `<strong>Boring.</strong> UFO-låsen bores gennem pladen. Skabelon og dansk vejledning følger med, og borehullerne efterlakeres.`,
          `<strong>Hos kunden.</strong> AutoLock monterer på alle brofaste adresser med transport inkluderet i monteringsprisen.`,
          `<strong>Efterbehandling.</strong> AutoLocks monteringspakke på Locks4Vans omfatter grunder og silikonefuge mod rust, låseolie og mærkater.`,
          `<strong>Garanti.</strong> AutoLock giver 2 års garanti på produkt og montering.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Bil og døre", "Du oplyser mærke, model, årgang og de døre, der skal sikres."],
            ["Sted", "Låsen monteres på firmaadressen, på et værksted eller der, hvor du arbejder."],
            ["Boring", "Skabelonen viser, hvor hullerne skal sidde, og hullerne efterlakeres."],
            ["Efterbehandling", "Grunder og silikonefuge mod rust og olie til låsen."],
            ["Nøgler", "Du får nøglerne og på nogle låse et nøglekort med en kode til nye nøgler."]
          ]
        },
        efter: [
          `Kilder: <a href="${ALTYP}" rel="noopener">AutoLock: Tyverisikring af varebil</a>, <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans</a>, <a href="${ALSTAT}" rel="noopener">AutoLock: Statement Lock</a> og <a href="${SVUFO}" rel="noopener">SmartVan: UFO-låse</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Låse uden boring",
        tekst: [
          `En lås uden boring efterlader ingen huller i døren, når den tages af igen. Bull-Lock sidder på anhængertrækket, og SmartVans boringsfri beslag er lavet til bestemte modeller.`
        ],
        punkter: [
          `<strong>Bull-Lock 2.0.</strong> Den sættes på anhængertrækket og blokerer bagdørene eller bagklappen. Den kræver mindst 70 mm fra krogtoppen til bagdøren, vejer 4,5 kg og leveres med 2 nøgler. AutoLock tager 1.595 kr.`,
          `<strong>GateLock GVS-P.</strong> Manuel lås uden boring, også som 2-pak til Boxer, Ducato og Jumper fra 2006 og Movano fra 2022. AutoLock sælger den til 997,50 kr. i oktober 2026.`,
          `<strong>GateLock og XVan XSVAN.</strong> AutoLock sælger den som en manuel 2-pak, der ikke kræver montage, til 3.195 kr.`,
          `<strong>UFO boringsfri beslag.</strong> SmartVan har beslag til bl.a. Ducato, Jumper og Boxer fra 2006, Movano fra 2022, ProAce Max fra 2024, Master, Movano og NV400 fra 2024, Trafic fra 2014, Doblo og Combo og Fiorino, Nemo og Bipper. Beslag og 2 låse koster 3.359 kr.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Bagenden af en varebil set fra siden med en Bull-Lock på anhængertrækkets kugle, der spærrer bagdørene. Der skal være mindst 70 mm fra krogtoppen til bagdøren"><defs><marker id="pil-bulllock-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-profil" x="20" y="70" width="242" height="90"/><line class="tg-doer" x1="262" y1="74" x2="262" y2="156"/><rect class="tg-kasse" x="242" y="152" width="22" height="12"/><circle class="tg-hylde" cx="180" cy="172" r="18"/><line class="tg-gulvlinje" x1="10" y1="190" x2="390" y2="190"/><path class="tg-gulvlinje" fill="none" d="M250,170 L286,170 Q296,170 297,160 L298,153"/><circle class="tg-kasse" cx="298" cy="146" r="7"/><rect class="tg-modul" x="266" y="96" width="40" height="43"/><line class="tg-pil" x1="262" y1="84" x2="298" y2="84" marker-start="url(#pil-bulllock-1)" marker-end="url(#pil-bulllock-1)"/><text x="306" y="88">mindst 70 mm</text><text class="tg-lille" x="256" y="146" text-anchor="end">BAGDØR</text><g class="tg-call"><line x1="286" y1="110" x2="210" y2="44"/><circle cx="286" cy="110" r="3"/><text class="tg-call__navn" x="20" y="24">Bull-Lock 2.0</text><text class="tg-call__under" x="20" y="38">sidder på kuglen og spærrer bagdørene</text></g><text class="tg-lille" x="20" y="212">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Tegningen er skematisk og viser Bull-Lock 2.0 på anhængertrækket. Låsen kræver mindst 70 mm fra krogtoppen til bagdøren og vejer 4,5 kg. Kilde: <a href="${ALBULL}" rel="noopener">AutoLock: Bull-Lock 2.0</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${AL1}" rel="noopener">AutoLock</a>, <a href="${AL2}" rel="noopener">AutoLock side 2</a> og <a href="${SVKAT3}" rel="noopener">SmartVan: Tyverisikring til varevogn, side 3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Huller i en leaset bil",
        tekst: [
          `En leaset bil bliver gennemgået for skader, når den afleveres. Hos Ayvens er det FDM, der gennemgår bilen. Ayvens godtager monteringshuller fra eftermonteret udstyr og reoler i varerummet, når de er udbedret tilfredsstillende. Synlige monteringshuller i kabinen regner Ayvens derimod som skader.`,
          `Udstyr, du selv har monteret, skal være taget af før afleveringen. Ellers tager Ayvens et gebyr på 1.500 kr. efter gebyrlisten fra juni 2025. HERKULES skriver, at firmaet monterer med så få huller som muligt og gerne bruger de huller, der allerede er i bilen. Reglerne for afleveringen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Ved aflevering hos Ayvens", "Godtaget"],
          raekker: [
            ["Udbedrede monteringshuller i varerummet", "ja"],
            ["Synlige monteringshuller i kabinen", "nej"],
            ["Eget udstyr, der ikke er taget af", "Gebyr på 1.500 kr."]
          ],
          note: `Kilder: <a href="${AYV}" rel="noopener">Ayvens: Afleveringsguide, erhverv, person- og varebiler</a> (gebyrliste pr. juni 2025) og <a href="${HERKF}" rel="noopener">HERKULES: Spørgsmål og svar</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indvendig elektronisk lås",
        tekst: [
          `En indvendig lås følger bilens centrallås, så du ikke har en ekstra nøgle. HERKULES' låse er af Hardox-stål og låser sammen med centrallåsen. For at låse dem op igen skal tændingen være slået til, så signalet fra nøglen ikke kan misbruges, skriver HERKULES.`,
          `Skal du ind i varerummet flere gange på samme adresse, kan du slå en pausefunktion til. Den falder automatisk ud, når du starter bilen igen. En diode i førerkabinen viser, at systemet er slået til, og mærkater på dørene fortæller, at bilen er sikret. HERKULES giver 12 måneders garanti på fabrikationsfejl.`,
          `SmartVans EL-Lokk styres også med centrallåsen og kan åbnes med bilens originale nøgle. Den kan kobles til en alarm og til GPS-overvågning, og indgrebet i karrosseriet sker kun indvendigt. Første dør tager 2½ time at montere, og de næste tager 1 time hver.`
        ],
        tabel: {
          kolonner: ["Løsning", "Døre", "Pris"],
          raekker: [
            ["HERKULES låsesystem", "1 dør", "10.000 kr."],
            ["HERKULES låsesystem", "Bagdøre og 1 sidedør", "14.000 kr."],
            ["HERKULES låsesystem", "Bagdøre og 2 sidedøre", "17.000 kr."],
            ["HERKULES timerfunktion", "Tilvalg", "1.000 kr."],
            ["SmartVan EL-Lokk, Transit 2014- og E-Transit 2022-", "Bagdøre og 2 skydedøre", "10.663 kr. uden montering"]
          ],
          note: `Kilder: <a href="${HERKP}" rel="noopener">HERKULES Sikring</a> (vejledende, inkl. montering med skjulte kabler, plus evt. kørsel) og <a href="${SVELLOKK}" rel="noopener">SmartVan: EL-Lokk</a> (webshoppris), set den 7. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["1 dør", 10000, "HERKULES"],
            ["Bagdøre og 1 sidedør", 14000, "HERKULES"],
            ["Bagdøre og 2 sidedøre", 17000, "HERKULES"]
          ],
          note: `Søjlerne viser HERKULES' vejledende priser. Priserne omfatter montering med skjulte kabler, og kørsel kan komme oveni. Kilde: <a href="${HERKP}" rel="noopener">HERKULES Sikring</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${HERKH}" rel="noopener">HERKULES: Varevognslås</a>, <a href="${HERKF}" rel="noopener">HERKULES: Spørgsmål og svar</a> og <a href="${SVELLOKK}" rel="noopener">SmartVan: EL-Lokk</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Certificeringer",
        tekst: [
          `Sold Secure og EN 1303 er to måder at dokumentere en låses styrke på. Sold Secure er en certificering i niveauer, og AutoLock beskriver Diamond som den højeste godkendelse for mekaniske låse. EN 1303 er standarden for låsecylindre, og CargoSikring angiver klasse 6 som den højeste.`,
          `Gjensidige kræver dirkefri og boringssikre låse, når værdien af indholdet ved hver transport er over 200.000 kr. Er der vinduer til varerummet, skal de også have stålgitter. Forsikringens øvrige krav står i <a href="/til-varebilen/forsikring/vaerktoejsforsikring/">værktøjsforsikring</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Lås", "Sold Secure", "EN 1303-cylinder", "TÜV Nord"],
          raekker: [
            ["Locks4Vans integreret lås", "Gold", "ikke nævnt", "ja"],
            ["L4V Statement Lock T-serie", "Diamond", "ja", "ja"],
            ["Blackstone", "Gold", "Klasse 6", "ikke nævnt"],
            ["Blackstone Cube", "Diamond", "Klasse 6", "ikke nævnt"]
          ],
          note: `AutoLock skriver desuden, at Statement Lock er testet og certificeret af Tecnalia. Kilder: <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans</a>, <a href="${ALSTAT}" rel="noopener">AutoLock: Statement Lock</a>, <a href="${CGB}" rel="noopener">CargoSikring: Blackstone</a> og <a href="${CGC}" rel="noopener">CargoSikring: Blackstone Cube</a>, set den 7. oktober 2026, og <a href="${GJ}" rel="noopener">Gjensidige: Sikringsoversigt</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Forstærkninger til låsen",
        tekst: [
          `Tyvene går også efter håndtaget og låsekassen. AutoLock sælger skjolde og plader, der dækker de svage steder. Håndtagsskjoldet dækker håndtaget udvendigt, og det indvendige skjold dækker låsemekanismen, ledningsnettet eller håndtaget inde i døren.`,
          `Anti-Spike er et skjold til den indvendige lås og oplåsningsknappen. AutoLock sælger også en universel udvendig beskyttelses- og reparationsplade.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Shear bolt til bagdør", 180, "Sprinter fra 2018"],
            ["Håndtagsskjold og beskyttelsesplade", 292.5, "fra"],
            ["Forstærkningsplader til skjolde, 2 stk.", 300],
            ["Indvendigt skjold", 450, "til låsemekanisme, ledninger eller håndtag"],
            ["Udvendig reparationsplade", 500, "universel, fra"],
            ["Udvendig beskyttelse af lastedør", 597.5, "stål"],
            ["Anti-Spike", 600, "skjold til indvendig lås"],
            ["Anti-Peel", 1095, "mod nedbukning af døren, fra"]
          ],
          note: `Priser uden montering. Kilde: <a href="${AL1}" rel="noopener">AutoLock</a> og <a href="${AL2}" rel="noopener">AutoLock side 2</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Den udvendige beskyttelse af lastedøren passer til Talento, NV300, Vivaro 2014-19, Trafic fra 2015 og Primastar fra 2022. Shear bolt passer til bagdøren på Sprinter fra 2018.`
        ]
      },
      {
        overskrift: "Smæklås, der kan slås fra",
        tekst: [
          `En slamlock låser, hver gang døren smækkes. På Blackstone i Combo-udgaven kan du slå den automatiske låsning midlertidigt fra, mens du læsser af og på. Udefra ser låsen stadig låst ud.`,
          `UFO3 Smart Duo har en justerbar smækfunktion, så låsen kan stå åben eller låst efter behov. Den kan åbnes indefra, hvis døren smækker i, mens nogen er i varerummet. Blackstone har et nødåbningskabel med en PUSH-funktion.`,
          `Kilder: <a href="${CGB}" rel="noopener">CargoSikring: Blackstone</a> og <a href="${SVDUO}" rel="noopener">SmartVan: UFO3 Smart Duo</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Flere låse og priser",
        tekst: [
          `CargoSikring sælger Blackstone-låsene i 1-, 2- og 3-pak og med eller uden montering. Blackstone Cube er lavet til lastbiler og containere og vejer 4,5 kg.`
        ],
        tabel: {
          kolonner: ["Produkt", "Forhandler", "Type", "Pris"],
          raekker: [
            ["Luccotto dørlås, 1 stk.", "SmartVan", "Udvendig lås", "499 kr."],
            ["UFO3 Smart Duo, 1 stk.", "SmartVan", "Udvendig lås, justerbar smæk", "1.495 kr."],
            ["Blackstone varebilslås", "CargoSikring", "Slamlock, rustfrit stål", "2.200 kr."],
            ["Blackstone Cube 1-pak Slam", "CargoSikring", "Slamlock til lastbil og container", "3.500 kr."],
            ["Boresikring til Blackstone fra 2022", "CargoSikring", "Reservedel", "50 kr."]
          ],
          note: `Kilder: <a href="${SVLUCC}" rel="noopener">SmartVan: Luccotto</a>, <a href="${SVDUO}" rel="noopener">SmartVan: UFO3 Smart Duo</a>, <a href="${CGB}" rel="noopener">CargoSikring: Blackstone</a> og <a href="${CGC}" rel="noopener">Blackstone Cube</a>, set den 7. oktober 2026, og <a href="${CGBORE}" rel="noopener">boresikring</a>, set den 4. oktober 2026. Webshoppriser uden montering. Prisen på Luccotto er normalpris, men SmartVan sælger den fra restlager til 199 kr.`
        },
        efter: [
          `CargoSikring oplyser, at Blackstone er Sold Secure Gold og Blackstone Cube Sold Secure Diamond. UFO3 Smart Duo måler 95 × 95 × 50 mm og leveres med 2 nøgler.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Luccotto", 499],
            ["UFO3 Smart Duo", 1495],
            ["Blackstone", 2200],
            ["Blackstone Cube", 3500]
          ],
          note: `Pris for én lås uden montering hos SmartVan og CargoSikring, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Nøgler og cylindre",
        tekst: [
          `Har virksomheden flere biler, kan det være praktisk, at flere låse har samme nøgle. Både Blackstone og L4V kan leveres sådan, og L4V-cylinderen kan også indrettes til en hovednøgle.`
        ],
        punkter: [
          `<strong>Samme nøgle.</strong> Blackstone fås som keyed alike, så flere låse kan åbnes med samme nøgle. L4V-cylindre kan tilpasses, så flere låse i serien har samme nøgle.`,
          `<strong>Nøglekort.</strong> Locks4Vans' integrerede lås leveres med et nøglekort med en unik kode til bestilling af ekstra nøgler. Statement Lock leveres med 3 nøgler.`,
          `<strong>Slid.</strong> CargoSikring oplyser, at Blackstone-nøglen er testet til at åbne og lukke låsen 100.000 gange.`,
          `<strong>Klasse.</strong> EN 1303 er standarden for låsecylindre. Blackstone-cylinderen er i klasse 6, som CargoSikring angiver som den højeste.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Blackstone-nøglen er testet til", "100.000", "gange"],
            ["Nøgler med Statement Lock", 3, "stk."],
            ["Cylinderklasse, Blackstone", 6, "efter EN 1303"]
          ],
          note: `CargoSikring oplyser tallene for Blackstone, og AutoLock oplyser antallet af nøgler til Statement Lock. Kilder: <a href="${CGB}" rel="noopener">CargoSikring</a>, <a href="${ALSTAT}" rel="noopener">AutoLock: Statement Lock</a> og <a href="${ALL4V}" rel="noopener">AutoLock: Locks4Vans</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer låsen til bilen, og montering kan planlægges.",
    spoergsmaal: [
      "Bilens mærke, model og årgang.",
      "Antal døre: bagdøre, en eller to skydedøre.",
      "Om der må bores, eller bilen er leaset og skal afleveres uden huller.",
      "Om bilen har anhængertræk.",
      "Om låsene skal have samme nøgle på tværs af flere biler.",
      "Om varerummet eller dørene har ruder.",
      "Forsikringsselskab, hvis der er rabat på lås eller montering.",
      "Adresse og tidspunkt for montering."
    ],
    faq: [
      ["Hvad er forskellen på deadlock, slamlock og hooklock?", "En deadlock er en manuel, mekanisk ekstralås, som du låser med nøglen. En slamlock låser selv, når døren smækkes. En hooklock har en krogbolt, der låser døren fast i karrosseriet, så den er svær at bukke op."],
      ["Hvad koster en UFO-lås til varebil?", "Hos SmartVan koster to låse til bagdørene og en skydedør 1.795 kr., og tre låse koster 2.685 kr. Priserne er uden moms og uden montering (oktober 2026)."],
      ["Hvad koster montering af en ekstra lås?", "SmartVan tager 3.793 kr. for to UFO-låse monteret på firmaadressen mod 1.795 kr. uden montering. Forskellen svarer til omkring 1.000 kr. pr. lås."],
      ["Hvor lang tid tager montering af en UFO-lås?", "SmartVan oplyser omkring en time pr. lås."],
      ["Findes der varebilslåse uden boring?", "Ja, fx Bull-Lock 2.0 på anhængertrækket, GateLock GVS-P og SmartVans boringsfri UFO-beslag til udvalgte modeller."],
      ["Må jeg sætte en ekstra lås i en leaset varebil?", "Det afhænger af leasingselskabet. Ayvens godtager udbedrede monteringshuller i varerummet, men regner synlige monteringshuller i kabinen som skader og tager 1.500 kr., hvis eget udstyr ikke er taget af ved afleveringen."],
      ["Hvad betyder Sold Secure?", "En certificering af låse i niveauer som Gold og Diamond, hvor AutoLock beskriver Diamond som det højeste. Locks4Vans' integrerede lås er Sold Secure Gold."],
      ["Kan en slamlock slås fra under af- og pålæsning?", "På Blackstone i Combo-udgaven kan den automatiske låsning slås midlertidigt fra, oplyser CargoSikring. UFO3 Smart Duo har en justerbar smækfunktion."],
      ["Hvad koster en indvendig elektrisk lås til varebil?", "HERKULES tager 14.000 kr. for bagdøre og én sidedør inkl. montering. SmartVans EL-Lokk til Transit med to skydedøre koster 10.663 kr. uden montering (oktober 2026)."]
    ],
    kilder: [
      { navn: "AutoLock: Tyverisikring til varebil (priser, side 1)", url: AL1, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring til varebil (priser, side 2)", url: AL2, dato: "2026-10-07" },
      { navn: "AutoLock: Tyverisikring af varebil (låsetyper og montering)", url: ALTYP, dato: "2026-10-07" },
      { navn: "AutoLock: Locks4Vans integreret lås til varevogn", url: ALL4V, dato: "2026-10-07" },
      { navn: "AutoLock: L4V Statement Lock T-serie", url: ALSTAT, dato: "2026-10-07" },
      { navn: "AutoLock: Bull-Lock 2.0", url: ALBULL, dato: "2026-10-07" },
      { navn: "SmartVan: UFO-låse", url: SVUFO, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varebilen 2025 (priser med montering)", url: SVPRIS, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varevogn (webshop)", url: SVKAT, dato: "2026-10-07" },
      { navn: "SmartVan: Tyverisikring til varevogn (webshop, side 3)", url: SVKAT3, dato: "2026-10-07" },
      { navn: "SmartVan: UFO3 Smart Duo dørlås", url: SVDUO, dato: "2026-10-07" },
      { navn: "SmartVan: Luccotto dørlås", url: SVLUCC, dato: "2026-10-07" },
      { navn: "SmartVan: EL-Lokk elektrisk lås, Transit 2014- og E-Transit 2022-", url: SVELLOKK, dato: "2026-10-07" },
      { navn: "CargoSikring: Blackstone varebilslås", url: CGB, dato: "2026-10-07" },
      { navn: "CargoSikring: Blackstone Cube 1-pak Slam, rustfrit stål", url: CGC, dato: "2026-10-07" },
      { navn: "CargoSikring: Boresikring rustfrit stål, Blackstone 2022-", url: CGBORE, dato: "2026-10-04" },
      { navn: "HERKULES Sikring: Pris på indbrudssikring", url: HERKP, dato: "2026-10-07" },
      { navn: "HERKULES Sikring: Varevognslås", url: HERKH, dato: "2026-10-07" },
      { navn: "HERKULES Sikring: Tyverisikring af varebil, spørgsmål og svar", url: HERKF, dato: "2026-10-07" },
      { navn: "Gjensidige: Sikringsoversigt jf. forsikringsbetingelserne", url: GJ, dato: "2026-10-07" },
      { navn: "Topdanmark: Montér en alarm i din varebil og spar 5.000 kr. i selvrisiko", url: TDALARM, dato: "2026-10-07" },
      { navn: "Topdanmark: Forebyg indbrud i varebilen", url: TDFOREBYG, dato: "2026-10-07" },
      { navn: "Tryg: Varevognssikring (rabat hos SmartVan)", url: TRYGR, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler (gebyrliste pr. juni 2025)", url: AYV, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: AutoLock-priserne står nu uden moms, som AutoLock selv viser dem ved siden af prisen med moms, fx Daken Saturn EVO fra 950 kr. uden moms (1.187,50 kr. med moms), Bawer Armo 995 kr., GateLock GVM-L fra 1.656 kr., Blackstone Cube fra 2.499 kr., Locks4Vans fra 2.500 kr., GateLock GVL fra 2.852 kr., XPVan fra 2.895 kr. og Statement Lock fra 3.495 kr. Siden nævner moms én gang.", AL1],
    ["RETTET: AutoLocks forstærkninger står også uden moms: forstærkningsplader 300 kr. (375 kr. med moms), udvendig beskyttelse af lastedør 597,50 kr. (746,88 kr.) og shear bolt 180 kr. (225 kr.).", AL2],
    ["RETTET: GateLock GVS-P koster 997,50 kr. uden moms (1.246,88 kr. med moms) på tilbud, normalt 1.995 kr. uden moms. Den gamle side skrev fra 1.496,25 kr. med moms.", AL1],
    ["AutoLock nævner som svage punkter på varebiler bilens software og elektronik, dørkontakten i førerkabinen, ruder til varerummet og nem adgang til låsekassen via håndtaget eller gennem bilens tynde karrosseri.", ALTYP],
    ["AutoLock skriver, at låse og varerumssikring gør det sværere, mere støjende og mere tidskrævende at bryde låsene op.", ALTYP],
    ["HERKULES skriver, at en tyv hurtigt og præcist kan banke et lille hul i sidedøren og derved få adgang til låsen.", HERKF],
    ["AutoLock: med en dødlås bruger du bilens centrallås, mens du kører rundt, og låser varerummet med dødlåsen, når du forlader bilen i længere tid, fx hos en kunde eller efter arbejdstid.", ALTYP],
    ["AutoLock anbefaler en dirkesikret smæklås på dørene til varerummet ved mange stop om dagen, fx multidrop og kurertjeneste.", ALTYP],
    ["AutoLock: L4V Statement Lock er en robust manuel lås, der låses op ved arbejdsdagens start og låses igen ved fyraften, og den monteres skjult med forstærkede bagplader.", ALSTAT],
    ["SmartVan: på UFO Standard tager du kuplen af, når du møder, og sætter den på til fyraften; på UFO2 bliver kuplen siddende, og du låser efter behov; UFO3 Smart Duo har justerbar smækfunktion.", SVPRIS],
    ["CargoSikring: Blackstone er lavet af rustfrit stål AISI 316, forankret direkte i døren og har et nødåbningskabel med PUSH-funktion.", CGB],
    ["AutoLock: Locks4Vans' integrerede lås betjenes med en separat højsikkerhedsnøgle, anbefales monteret på både side- og bagdøre, kan monteres i tophængt bagklap, er tilpasset bilmodel og døropsætning, og har varerummet eller dørene ruder, skal man kontakte AutoLock.", ALL4V],
    ["AutoLock sælger L4V Anti-Peel, sikring mod nedbukning af dør, fra 1.095 kr. uden moms.", AL1],
    ["SmartVan sælger UFO-låse i 2-pak til 2 bagdøre og 1 skydedør og i 3-pak til 2 bagdøre og 2 skydedøre.", SVKAT3],
    ["Tryg skriver, at de fleste indbrud i varebiler sker gennem vinduet i førerhuset, hvor centrallåsen aktiveres, så der bliver fri adgang til varerummet.", TRYGR],
    ["Topdanmark foreslår at få en mekaniker til at deaktivere centrallåsen, så varerummet ikke automatisk låses op, når man åbner fordøren.", TDFOREBYG],
    ["AutoLock sælger L4V Replock T-serie, forstærket lås til Ford førerdør, til 1.195 kr. uden moms.", AL1],
    ["SmartVan: UFO-låsen er produceret i vejrbestandigt, hærdet stål, cylinderen er dirkefri og boringssikker og sidder beskyttet bag den runde skal, og SmartVan giver 3 års garanti.", SVPRIS],
    ["SmartVan sælger UFO3 Smart Duo til 1.495 kr. for 1 lås, 2.995 kr. for 2 og 4.495 kr. for 3, uden moms.", SVKAT],
    ["SmartVan skriver, at webshoppens priser er uden moms, og at der ikke sælges til private.", SVKAT],
    ["Tryg: for Trygs erhvervskunder koster SmartVan UFO uden smækfunktion til to døre 3.497 kr. monteret på valgfri adresse (normalpris 3.997 kr.) og 2.797 kr. monteret på værksted (normalpris 3.297 kr.), uden moms.", TRYGR],
    ["Topdanmark er en del af If og giver op til 15 % rabat på alarm, lås mv. hos SmartVan.", TDFOREBYG],
    ["AutoLock: ved montering kører AutoLock til alle brofaste steder, transporten er med i monteringsprisen, og låsen kan fx monteres på en opgave, så kunden kan arbejde videre.", ALTYP],
    ["Bull-Lock 2.0 blokerer bagdøre eller bagklap og leveres med 2 nøgler; AutoLock tager 1.595 kr. uden moms.", ALBULL],
    ["AutoLock sælger GateLock og XVan XSVAN, en manuel 2-pak lås, der ikke kræver montage, til 3.195 kr. uden moms.", AL2],
    ["SmartVans boringsfri UFO-beslag findes bl.a. til Doblo 10-22 og Combo 12-18, Fiorino, Nemo og Bipper, Master, Movano og NV400 fra 2024 og Trafic fra 2014, Talento 16-21 og Vivaro 14-19, og beslag med 2 låse koster 3.359 kr.", SVKAT3],
    ["Ayvens: FDM gennemgår bilen ved aflevering; tilfredsstillende udbedring af monteringshuller fra eftermonteret udstyr og reoler i varerummet godtages; synlige monteringshuller fra eftermonteret udstyr i kabinen godtages ikke; manglende afmontering af ekstra udstyr koster 1.500 kr. (gebyrliste pr. juni 2025).", AYV],
    ["HERKULES monterer med mindst mulige huller og bruger gerne de eksisterende huller i bilen.", HERKF],
    ["HERKULES: låsesystemet er udformet i Hardox-stål, låser sammen med centrallåsen og kan kun låses op med tændingen slået til, så låsesignalet fra nøglen ikke misbruges; en pausefunktion falder automatisk ud, når bilen startes; en diode i førerkabinen viser, at systemet er aktiveret.", HERKH],
    ["HERKULES giver 12 måneders garanti på fabrikationsfejl.", HERKP],
    ["SmartVan EL-Lokk kan kobles til GPS-overvågning som tilkøb, og indgrebet i karrosseriet sker kun indvendigt.", SVELLOKK],
    ["AutoLock: Locks4Vans' integrerede lås og L4V Statement Lock er TÜV Nord-certificeret.", ALL4V],
    ["AutoLock sælger håndtagsskjold fra 292,50 kr., forstærkningsplader 300 kr., indvendigt skjold 450 kr., universel reparationsplade fra 500 kr., udvendig beskyttelse af lastedør 597,50 kr., Anti-Spike 600 kr. og shear bolt til Sprinter 180 kr., alle uden moms.", AL1],
    ["CargoSikring: Blackstone Cube vejer 4.500 g.", CGC],
    ["CargoSikring sælger Blackstone i 1-, 2- og 3-pak og med eller uden montering.", CGB],
    ["AutoLock: L4V-cylinderen kan leveres med samme nøgle til flere biler eller indrettes til en hovednøgle.", ALL4V]
  ]
};
