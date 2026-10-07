// Underside /til-varebilen/service/undervognsbehandling/ (07-10-2026)
// dinitrol.dk var spærret i dag (bot-tjek). Dinitrols tal er fra den 4. oktober 2026.
var FORD_G = `https://www.ford.dk/min-bil/garanti/varebiler`;
var VW_G = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var VW_GAR = `https://www.volkswagen.dk/da/vaerksted/nyttig-viden/garanti.html`;
var VW_EL = `https://www.volkswagen.dk/da/vaerksted/service/elbil-service.html`;
var VW_5 = `https://www.volkswagen.dk/da/vaerksted/service/vw-service5plus.html`;
var DIN = `https://dinitrol.dk/undervognsbehandling-pris/`;
var DIN_EL = `https://dinitrol.dk/rustbeskyttelse-pris/`;
var DIN_I = `https://dinitrol-ishoej.dk/biler-under-1-aar/`;
var DIN_I_GAR = `https://dinitrol-ishoej.dk/garanti-bestemmelser/`;
var DIN_I_OVER = `https://dinitrol-ishoej.dk/biler-over-1-aar/`;
var DIN_I_FOTO = `https://dinitrol-ishoej.dk/fotodokumentation/`;
var DIN_I_KONTROL = `https://dinitrol-ishoej.dk/kontrolordning/`;
var TEC_PRIS = `https://tectyldanmark.dk/om-rustbeskyttelse/pris-pa-rustbeskyttelse/`;
var TEC = `https://tectyldanmark.dk/`;
var TEC_KOMPLET = `https://tectyldanmark.dk/undervognsbehandling/komplet-rustbeskyttelse/`;
var TEC_MILJO = `https://tectyldanmark.dk/undervognsbehandling/miljo-rustbeskyttelse/`;
var TEC_EL = `https://tectyldanmark.dk/undervognsbehandling/undervognsbehandling-elbil/`;
var NORD = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var KFST = `https://www.kfst.dk/media/14402/indskaerpelse-til-brancheorganisationer-for-motorkoeretoejer.pdf`;
var H_REN = `https://www.hessel.dk/vaerksted-service/ydelser/service/renault`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "service/undervognsbehandling",
  side: {
    slug: "undervognsbehandling",
    navn: "Undervognsbehandling og rustbeskyttelse",
    titel: "Undervognsbehandling af varebil: pris",
    kort: `Producenternes rustgarantier, undervogn mod hulrum, priser og intervaller hos Dinitrol og Tectyl, og hvad der gælder for elvarebiler.`,
    beskrivelse: `Undervognsbehandling af varebil: typisk 4.000–5.500 kr. hos Dinitrol, rustgarantier på 12 år, kædernes garantier og reglerne for elvarebiler.`,
    manchet: `Ford og Volkswagen giver 12 års garanti mod gennemtæring indefra på nye varebiler. Garantien dækker karrosseriets pladedele. Undervognsbehandling er et tilvalg fra rustbeskyttelseskæderne, og hos Dinitrol koster en komplet behandling typisk 4.000–5.500 kr. Her kan du se, hvad garantierne kræver, hvordan behandlingen foregår, og hvad den koster.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["Rustgaranti, Ford og VW", "12 år", "mod gennemtæring indefra"],
        ["Komplet behandling, Dinitrol", "4.000–5.500 kr.", "typisk pris"],
        ["Tectyl-garanti på varevogne", "højst 12 år", "op til 99 år på andre biler"],
        ["Behandlingstid", "omkring 2 dage", "skriver Dinitrol"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Garanti og ekstra behandling",
        tekst: [
          `En ny varebil har to slags beskyttelse mod rust. Den ene er fabrikkens egen beskyttelse, som producenten giver garanti på. Den anden er en ekstra behandling, som virksomheden kan købe hos en rustbeskyttelseskæde som Dinitrol eller Tectyl.`,
          `Producenternes garanti kræver ikke en ekstra behandling. Dinitrol anbefaler alligevel behandling fra ny, fordi fabriksbeskyttelsen efter kædens vurdering ikke er lavet til det danske klima. Lægges der en ekstra behandling på, skal produktet ifølge Dansk Værksteds Kontrols minimumskrav være testet uvildigt og passe sammen med fabrikkens beskyttelse.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Skematisk snit gennem en pladedel med lak på ydersiden og fabrikkens beskyttelse og den ekstra rustbeskyttelse på indersiden mod hulrummet. Den ekstra behandling skal være forenelig med fabrikkens beskyttelse."><text class="tg-fremhaev" x="20" y="18">Snit gennem en pladedel</text><rect class="tg-profil" x="20" y="40" width="220" height="10"/><rect class="tg-hylde" x="20" y="50" width="220" height="18"/><rect class="tg-kasse" x="20" y="68" width="220" height="10"/><rect class="tg-modul" x="20" y="78" width="220" height="16"/><text class="tg-lille" x="130" y="128" text-anchor="middle">HULRUM</text><text class="tg-lille" x="130" y="34" text-anchor="middle">YDERSIDEN</text><g class="tg-call"><line x1="240" y1="45" x2="252" y2="24"/><circle cx="240" cy="45" r="3"/><text class="tg-call__navn" x="256" y="22">Lak</text><text class="tg-call__under" x="256" y="36">ydersiden</text></g><g class="tg-call"><line x1="240" y1="59" x2="252" y2="64"/><circle cx="240" cy="59" r="3"/><text class="tg-call__navn" x="256" y="62">Pladedel</text><text class="tg-call__under" x="256" y="76">karrosseriet</text></g><g class="tg-call"><line x1="240" y1="73" x2="252" y2="104"/><circle cx="240" cy="73" r="3"/><text class="tg-call__navn" x="256" y="102">Fabrikkens lag</text><text class="tg-call__under" x="256" y="116">fra producenten</text></g><g class="tg-call"><line x1="240" y1="86" x2="252" y2="144"/><circle cx="240" cy="86" r="3"/><text class="tg-call__navn" x="256" y="142">Ekstra behandling</text><text class="tg-call__under" x="256" y="156">forenelig med fabrikkens</text></g><text class="tg-lille" x="20" y="190">PRODUKTET SKAL VÆRE TESTET UVILDIGT</text></svg>`,
          tekst: `Skematisk. Lagene er ikke målfaste. Kilde: ${a(DIN, "Dinitrol, Undervognsbehandling pris")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Producenternes garanti mod gennemtæring",
        tekst: [
          `Ford og Volkswagen Erhvervsbiler giver 12 års garanti mod gennemtæring indefra. Hos Ford er Bronco og Transit City begrænset til 10 år, og garantien forudsætter, at betingelserne for karrosseriinspektioner og vedligeholdelse er overholdt. Inspektionerne udføres uden beregning.`,
          `Lakken har en kortere garanti. Ford giver 2 års garanti mod fejl i den originale lak, og Volkswagen giver 3 års lakgaranti. Hos begge producenter følger garantien bilen, hvis den bliver solgt, før garantien udløber.`
        ],
        tabel: {
          kolonner: ["Producent", "Varighed", "Betingelse"],
          raekker: [
            ["Ford", "12 år. Bronco og Transit City 10 år", "Karrosseriinspektioner og vedligeholdelse efter betingelserne. Inspektionerne er uden beregning"],
            ["Volkswagen Erhvervsbiler", "12 år", "Nybilsgarantiens bestemmelser gælder tilsvarende"]
          ],
          note: `Kilder: ${a(FORD_G, "Ford")} og ${a(VW_G, "Volkswagens garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026. Intervallet for karrosseriinspektioner står i Fords garanti- og servicehæfte.`,
          visning: "kort"
        },
        figur: {
          type: "soejler",
          enhed: "år",
          data: [
            ["Ford, gennemtæring", 12, "de fleste varebiler"],
            ["Volkswagen, gennemtæring", 12],
            ["Ford Transit City, gennemtæring", 10],
            ["Volkswagen, lak", 3],
            ["Ford, lak", 2]
          ],
          note: `Garantierne regnes fra garantistarten, som typisk er bilens første indregistrering. Kilder: ${a(FORD_G, "Ford: Garanti på varebiler")} og ${a(VW_G, "Volkswagen: Garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad garantien dækker",
        tekst: [
          `Volkswagen definerer gennemtæring som et indefra kommende hul (hulrum) i karrosseriets pladedele, der har arbejdet sig frem til ydersiden. Ford dækker gennemtæring indefra i bilens originale karrosseripladedele.`,
          `Dinitrol påpeger, at garantien ikke omfatter mekaniske dele og bremserør. Ford skriver desuden, at garantien ikke dækker stenslag, ridser, buler og lignende brugsskader, og hos Volkswagen er skader udefra som hagl og ulykker undtaget.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Snit gennem et hulrum i karrosseriet. Rusten starter indefra og arbejder sig ud gennem pladedelen til ydersiden."><rect class="tg-rum" x="40" y="40" width="140" height="110"/><text class="tg-lille" x="66" y="104">HULRUM</text><line class="tg-pil" x1="100" y1="75" x2="170" y2="75"/><path class="tg-pil" d="M164,69 L170,75 L164,81"/><rect class="tg-modul" x="175" y="65" width="10" height="20"/><line class="tg-skinne" x1="40" y1="172" x2="180" y2="172"/><g class="tg-call"><line x1="120" y1="40" x2="214" y2="32"/><circle cx="120" cy="40" r="3"/><text class="tg-call__navn" x="220" y="36">Pladedel</text><text class="tg-call__under" x="220" y="50">her gælder garantien</text></g><g class="tg-call"><line x1="180" y1="75" x2="214" y2="90"/><circle cx="180" cy="75" r="3"/><text class="tg-call__navn" x="220" y="96">Gennemtæring</text><text class="tg-call__under" x="220" y="110">hul indefra og ud</text></g><g class="tg-call"><line x1="110" y1="172" x2="214" y2="160"/><circle cx="110" cy="172" r="3"/><text class="tg-call__navn" x="220" y="156">Ikke dækket</text><text class="tg-call__under" x="220" y="170">mekaniske dele, bremserør</text></g></svg>`,
          tekst: `Skematisk. Volkswagens definition af gennemtæring, hvor et hul kommer indefra i et hulrum og arbejder sig ud til ydersiden af pladedelen. Kilder: ${a(VW_G, "Volkswagens garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026, og ${a(DIN, "Dinitrol")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kontroleftersyn og rusttjek",
        tekst: [
          `Konkurrence- og Forbrugerstyrelsen skrev i 2013, at importørernes rustgarantier ofte varer 10–12 år, og at bilen normalt skal til kontroleftersyn hos et autoriseret mærkeværksted på bestemte tidspunkter for at bevare garantien. Styrelsen indskærpede, at et krav om, at ejeren selv møder op, efter dens vurdering strider mod konkurrenceloven, hvis det bygger på en aftale eller samordnet praksis.`,
          `Rusten bliver også tjekket ved almindelig service. Nordanias værkstedsrekvisition har poster for opretholdelse af rustgaranti og karosseriinspektion, og flere mærkeværksteder har rusttjek med i eftersynet. Reglerne om værkstedsvalg står i <a href="/til-varebilen/service/frit-vaerkstedsvalg/">frit værkstedsvalg</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Hvor", "Hvad der bliver tjekket"],
          raekker: [
            ["Ford, karrosseriinspektion", "Karrosseriet efter garantibetingelserne, uden beregning"],
            ["Nordanias rekvisition", "Poster for opretholdelse af rustgaranti og karosseriinspektion"],
            ["Volkswagen Service 5+", "Rust og korrosion på karrosseriet og skader på undervognsbeskyttelsen"],
            ["Hessel +4 service", "Rusteftersyn på en Renault på fire år eller mere"],
            ["Tectyl", "Gratis kontrol af bilens rusttilstand"]
          ],
          note: `Kilder: ${a(FORD_G, "Ford")}, ${a(NORD, "Nordania")}, ${a(VW_5, "Volkswagen Service 5+")}, ${a(H_REN, "Hessel, Renault")}, ${a(TEC_KOMPLET, "Tectyl")} og ${a(KFST, "Konkurrence- og Forbrugerstyrelsen, 24. september 2013")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Undervogn og hulrum",
        tekst: [
          `En undervognsbehandling omfatter de bærende dele og bundstrukturen. En komplet rustbeskyttelse går videre og omfatter også hulrum, døre og motorrum efter et sprøjteskema for den enkelte model.`,
          `Tectyl beskriver, at produktet trænger ind i skjulte hulrum, vanger, døre, paneler og klapper, og at rustbeskyttelsen derefter påføres hele undervognen, ophænget og vangerne. En vange er en af de bærende bjælker i bunden af bilen.`
        ],
        tabel: {
          kolonner: ["Behandling", "Omfatter"],
          raekker: [
            ["Undervognsbehandling", "De bærende dele og bundstrukturen"],
            ["Komplet rustbeskyttelse", "Også hulrum, døre og motorrum efter sprøjteskema"],
            ["Elbilsbehandling", "Karrosseri, hulrum og undervogn omkring batteriet. Batteripakken behandles ikke"]
          ],
          note: `Kilder: ${a(DIN, "Dinitrol")} og ${a(DIN_EL, "Dinitrol, elbil")}, set den 4. oktober 2026.`,
          visning: "kort"
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden. En undervognsbehandling omfatter bund og vanger, mens en komplet rustbeskyttelse også omfatter hulrum, døre og motorrum. Hjul og inderskærme tages af, så hjulkasserne kan behandles."><g transform="translate(80,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-skinne" x1="84" y1="186" x2="318" y2="186"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="200" y1="130" x2="60" y2="46"/><circle cx="200" cy="130" r="3"/><text class="tg-call__navn" x="5" y="24">Hulrum og døre</text><text class="tg-call__under" x="5" y="38">komplet behandling</text></g><g class="tg-call"><line x1="300" y1="130" x2="330" y2="46"/><circle cx="300" cy="130" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Motorrum</text><text class="tg-call__under" x="395" y="38" text-anchor="end">komplet behandling</text></g><g class="tg-call"><line x1="220" y1="186" x2="220" y2="214"/><circle cx="220" cy="186" r="3"/><text class="tg-call__navn" x="226" y="228">Vanger og bund</text><text class="tg-call__under" x="226" y="242">undervognsbehandling</text></g><g class="tg-call"><line x1="128" y1="174" x2="60" y2="214"/><circle cx="128" cy="174" r="3"/><text class="tg-call__navn" x="5" y="228">Hjulkasser</text><text class="tg-call__under" x="5" y="242">inderskærme tages af</text></g></svg>`,
          tekst: `Skematisk. Den stiplede linje viser bunden og vangerne. Kilder: ${a(DIN, "Dinitrol")}, set den 4. oktober 2026, og ${a(TEC_KOMPLET, "Tectyl, Kompletbehandling")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor rusten sidder",
        tekst: [
          `Ifølge Dinitrol ruster dørrammer og hjulkasser ikke nævneværdigt sammenlignet med bunden. Biler fra 2010 og frem har langt flere plastplader under bunden, og de skal af, før bunden kan undersøges og behandles. Bremserør og elbilers højspændingsledninger skal også have undervognsbehandling. På el- og hybridbiler holder plastafdækningen af batteriet mere på fugten.`,
          `Tectyl skriver, at el- og hybridbiler også har karrosseri, bremserør og hjulførende dele, der kan ruste. Volkswagen skriver, at bremserne på en elbil bliver brugt så lidt, at de kan ruste, før de bliver slidt, fordi bilen bremser ved at lade strøm tilbage til batteriet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebilens undervogn set nedefra med bundplader, vanger, hjulkasser og bremserør"><rect x="40" y="55" width="320" height="140" rx="14" class="tg-rum"/><rect x="75" y="45" width="40" height="16" class="tg-kasse"/><rect x="75" y="189" width="40" height="16" class="tg-kasse"/><rect x="275" y="45" width="40" height="16" class="tg-kasse"/><rect x="275" y="189" width="40" height="16" class="tg-kasse"/><rect x="60" y="82" width="290" height="7" class="tg-hylde"/><rect x="60" y="161" width="290" height="7" class="tg-hylde"/><rect x="140" y="98" width="110" height="54" class="tg-modul"/><line x1="95" y1="176" x2="295" y2="176" class="tg-skinne"/><text x="44" y="128" class="tg-lille">FRONT</text><g class="tg-call"><line x1="195" y1="98" x2="195" y2="30"/><circle cx="195" cy="98" r="3"/><text x="130" y="22" class="tg-call__navn">Bundplader af plast</text></g><g class="tg-call"><line x1="330" y1="85" x2="330" y2="30"/><circle cx="330" cy="85" r="3"/><text x="272" y="22" class="tg-call__navn">Vanger og hulrum</text></g><g class="tg-call"><line x1="95" y1="61" x2="60" y2="30"/><circle cx="95" cy="61" r="3"/><text x="10" y="22" class="tg-call__navn">Hjulkasser</text></g><g class="tg-call"><line x1="200" y1="176" x2="200" y2="222"/><circle cx="200" cy="176" r="3"/><text x="170" y="228" class="tg-call__navn">Bremserør</text></g><g class="tg-call"><line x1="295" y1="197" x2="320" y2="222"/><circle cx="295" cy="197" r="3"/><text x="300" y="228" class="tg-call__navn">Inderskærme</text></g></svg>`,
          tekst: `Skematisk. Undervognen set nedefra. Kilde: ${a(DIN, "Dinitrol, Undervognsbehandling pris")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(TEC_EL, "Tectyl, Undervognsbehandling til el- og hybridbiler")} og ${a(VW_EL, "Volkswagen, Service på elbil")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sådan foregår det",
        tekst: [
          `Behandlingen begynder med, at bilen bliver skilt ad. Hjul, inderskærme og bundplader tages af, så hele bunden kan renses og tørres. Først derefter sprøjtes produktet på efter et skema for den enkelte bilmodel. Dinitrol skriver, at en typisk undervognsbehandling tager omkring to dage.`,
          `Tectyl beskriver forløbet i seks trin. Tectyl skriver også, at centrene tager hensyn til elektriske dele som selestrammere og airbagsensorer og til plastkapper og skjolde ved døre, bund og skærme.`
        ],
        punkter: [
          "<strong>Adskillelse.</strong> Hjul, inderskærme og bundplader afmonteres.",
          "<strong>Rengøring.</strong> Undervognen renses, ofte med højtryk, og tørres.",
          "<strong>Sprøjteskema.</strong> Behandlingen følger et bilspecifikt skema.",
          "<strong>Dokumentation.</strong> Dinitrol fotodokumenterer, at pladerne har været afmonteret.",
          "<strong>Tid.</strong> En typisk undervognsbehandling tager omkring to dage, skriver Dinitrol."
        ],
        punkt_ikon: "trin",
        figur: {
          type: "trin",
          trin: [
            ["Afmontering", "Skjolde, bundplader, hjul og inderskærme i hjulkasserne tages af."],
            ["Afrensning", "Alle salt- og skidtrester renses af."],
            ["Hulrum", "Produktet trænger ind i skjulte hulrum, vanger, døre, paneler og klapper."],
            ["Undervogn", "Rustbeskyttelsen påføres hele undervognen, ophænget og vangerne."],
            ["Slidlag", "Til sidst får hele undervognen et stærkt slidlag."],
            ["Vask og hærdning", "Bilen vaskes, aftørres og hærder, før den bliver hentet."]
          ]
        },
        efter: [
          `Kilder: ${a(DIN, "Dinitrol")}, set den 4. oktober 2026, og ${a(TEC_KOMPLET, "Tectyl, Kompletbehandling")} og ${a(TEC, "Tectyl")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sprøjteskemaet",
        tekst: [
          `Sprøjteskemaet er en vejledning for den enkelte bilmodel. Dinitrol udvikler selv skemaerne, og Tectyl har specialudarbejdede skemaer til hver bilmodel, også til el- og hybridbiler.`,
          `Ifølge Dinitrol Center Ishøj viser skemaet bl.a., hvad der skal skilles ad, og hvor de lyddæmpende svampe sidder. Svampene suger vand og holder på fugten, så de skal ud, før der rustbeskyttes bagved. Skemaets vigtigste opgave er at vise adgangen til de skjulte hulrum, hvor elektroniske dele som airbagsensorer sidder, så de ikke bliver ramt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Skematisk snit gennem et hulrum i en dør. Sprøjteskemaet viser adgangen til hulrummet, at den lyddæmpende svamp skal ud, så der kan rustbeskyttes bagved, og hvor airbagsensoren sidder, så den ikke bliver ramt."><rect class="tg-rum" x="10" y="24" width="200" height="170"/><text class="tg-lille" x="10" y="16">HULRUM I EN DØR</text><rect class="tg-kuffert" x="80" y="50" width="40" height="100"/><rect class="tg-kasse" x="28" y="152" width="32" height="20"/><rect class="tg-profil" x="160" y="190" width="30" height="8"/><line class="tg-gulvlinje" x1="175" y1="230" x2="175" y2="200"/><line class="tg-skinne-tynd" x1="175" y1="190" x2="140" y2="110"/><line class="tg-skinne-tynd" x1="175" y1="190" x2="170" y2="100"/><line class="tg-skinne-tynd" x1="175" y1="190" x2="200" y2="110"/><g class="tg-nr"><circle cx="100" cy="100" r="9"/><text x="100" y="104" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="44" cy="140" r="9"/><text x="44" y="144" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="146" cy="194" r="9"/><text x="146" y="198" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="242" cy="40" r="9"/><text x="242" y="44" text-anchor="middle">1</text></g><text class="tg-fremhaev" x="258" y="44">Lyddæmpende svamp</text><text x="258" y="62">tages ud, så der kan</text><text x="258" y="78">sprøjtes bagved</text><g class="tg-nr"><circle cx="242" cy="110" r="9"/><text x="242" y="114" text-anchor="middle">2</text></g><text class="tg-fremhaev" x="258" y="114">Airbagsensor</text><text x="258" y="132">må ikke rammes</text><g class="tg-nr"><circle cx="242" cy="170" r="9"/><text x="242" y="174" text-anchor="middle">3</text></g><text class="tg-fremhaev" x="258" y="174">Adgangshul</text><text x="258" y="192">skemaet viser vejen</text><text x="258" y="208">ind i hulrummet</text></svg>`,
          tekst: `Skematisk. Svampens og sensorens placering varierer fra model til model. Kilde: ${a(DIN_I_FOTO, "Dinitrol Center Ishøj, Fotodokumentation")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dansk Værksteds Kontrols minimumskrav",
        tekst: [
          `Dansk Værksteds Kontrol har minimumskrav til, hvordan en undervognsbehandling skal udføres og dokumenteres. Dinitrol gengiver kravene, og de handler om fotos, afrensning, sprøjteskema, produkt og uvildig kontrol.`,
          `Teknologisk Institut laver uanmeldte stikprøvekontroller på alle Dinitrol-centre i landet og kontrollerer bilens hulrum og vanger. En bil, der er behandlet hos Dinitrol, kan tilmeldes kontrollen på Teknologisk Instituts hjemmeside. Alle Tectyl-centre er tilknyttet en uvildig kontrolordning hos enten Teknologisk Institut eller FDM.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Fotodokumentation", "Værkstedet fotograferer nummerplade eller stelnummer og tager 3–5 fotos af de afmonterede dele. Forarbejdet tager 1–3 timer."],
            ["Afrensning", "Bunden spules med varmt vand under højtryk og tørres. Dinitrol bruger 50 grader."],
            ["Sprøjteskema og produkt", "Værkstedet bruger et sprøjteskema til bilmodellen og et produkt, som en uvildig test har vist er foreneligt med bilens fabriksbeskyttelse."],
            ["Uvildig kontrol", "Centrene får uanmeldt kontrol af hulrum og vanger."]
          ]
        },
        efter: [
          `Kilder: ${a(DIN, "Dinitrol, Undervognsbehandling pris")}, set den 4. oktober 2026, og ${a(DIN_I_KONTROL, "Dinitrol Center Ishøj, Kontrolordning")} og ${a(TEC, "Tectyl")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pris og interval",
        tekst: [
          `Hos Dinitrol koster en komplet behandling typisk 4.000–5.500 kr., og prisen omfatter et dokumenteret sprøjteskema og efterkontrol. En behandling af en elbil koster fra ca. 5.000 kr. Dinitrol anbefaler at genbehandle bilen hvert 2.–3. år. Priserne er fra oktober 2026.`,
          `Tectyl oplyser prisen, før bilen bliver booket. Prisen afhænger af centret i Jylland, på Fyn eller på Sjælland og af bilens alder, stand, model og type. Ingen af kæderne opslår separate priser for varebiler.`,
          `Tectyl har to behandlinger. Kompletbehandlingen er voksbaseret, passer til alle biler og kan lægges oven på en ældre rustbeskyttelse af et andet mærke. Miljøbehandlingen er vandbaseret og egner sig bedst til nye og nyere biler og elbiler uden rust.`
        ],
        tabel: {
          kolonner: ["Rustbeskytter", "Behandling", "Pris", "Genbehandling"],
          raekker: [
            ["Dinitrol", "Komplet behandling", "Typisk 4.000–5.500 kr.", "Hvert 2.–3. år"],
            ["Dinitrol", "Elbilsbehandling", "Fra ca. 5.000 kr. inkl. moms", "Hvert 2.–3. år"],
            ["Tectyl", "Kompletbehandling", "Oplyses før booking", "3 år, gratis kvalitetskontrol hvert 2. år"],
            ["Tectyl", "Miljøbehandling", "Oplyses før booking", "Op til 4 år, gratis kvalitetskontrol hvert 2. år"]
          ],
          note: `Kilder: ${a(DIN, "Dinitrol")} og ${a(DIN_EL, "Dinitrol, elbil")}, set den 4. oktober 2026, og ${a(TEC_PRIS, "Tectyl")}, set den 7. oktober 2026. Dinitrols pris for komplet behandling er angivet uden oplysning om moms. Prisen afhænger af biltype.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Komplet behandling, Dinitrol", "4.000–5.500", "kr."],
            ["Elbil, Dinitrol, fra ca.", 5000, "kr."],
            ["Genbehandling, Dinitrol", "hvert 2.–3.", "år"],
            ["Miljøbehandling, Tectyl, op til", 4, "år"]
          ],
          note: `Dinitrols pris for komplet behandling er angivet uden oplysning om moms, og elbilsprisen er med moms. Tectyl oplyser prisen før booking. Kilder: ${a(DIN, "Dinitrol")} og ${a(DIN_EL, "Dinitrol, elbil")}, set den 4. oktober 2026, og ${a(TEC_PRIS, "Tectyl")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kædernes egne garantier",
        tekst: [
          `Kæderne giver deres egen garanti mod gennemtæring, når bilen bliver genbehandlet til tiden. Siden den 1. marts 2016 har Dinitrol Forhandlerforening givet 30 års garanti på biler, der er under 12 måneder gamle, når de bliver behandlet første gang. Bilen skal derefter genbehandles hvert tredje år. Er bilen ældre end et år, kan der vælges en garanti på op til 20 år med efterbehandling hvert andet år.`,
          `Tectyl giver op til 99 års garanti regnet fra bilens første registreringsdato, hvis bilen er under 4 år gammel ved første behandling. For varevogne og gulpladebiler er garantien dog højst 12 år. Tectyl kontrollerer bilens rusttilstand gratis, før centret vurderer, om der kan tegnes garanti, og hvor lang den bliver.`
        ],
        punkter: [
          "<strong>Dinitrol.</strong> Kæden giver op til 30 års garanti mod gennemtæring. Hos Dinitrol Center Ishøj kræver det, at bilen behandles inden for de første 12 måneder og genbehandles hvert tredje år.",
          "<strong>Tectyl.</strong> Garantien er på op til 99 år fra bilens første registreringsdato, når bilen behandles efter Tectyls regler. Varevogne og gulpladebiler får højst 12 år."
        ],
        figur: {
          type: "soejler",
          enhed: "år",
          data: [
            ["Dinitrol, bil under 12 mdr.", 30, "op til, genbehandling hvert 3. år"],
            ["Dinitrol, bil over 1 år", 20, "op til, efterbehandling hvert 2. år"],
            ["Tectyl, varevogne og gulpladebiler", 12, "højst"],
            ["Ford", 12, "producentens garanti"],
            ["Volkswagen Erhvervsbiler", 12, "producentens garanti"]
          ],
          note: `Søjlerne viser garanti mod gennemtæring. Tectyl giver op til 99 år på andre biler, der er under 4 år ved første behandling. Ford giver 10 år på Bronco og Transit City. Kilder: ${a(DIN_I, "Dinitrol Center Ishøj")}, ${a(DIN_I_GAR, "Dinitrol Center Ishøj, Garantibestemmelser")}, ${a(DIN_I_OVER, "Dinitrol Center Ishøj, Biler over 1 år")}, ${a(TEC_KOMPLET, "Tectyl, Kompletbehandling")}, ${a(TEC_MILJO, "Tectyl, Miljøbehandling")}, ${a(FORD_G, "Ford")} og ${a(VW_G, "Volkswagens garantibestemmelser for erhvervsbiler")}, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(DIN_I, "Dinitrol Center Ishøj")} og ${a(TEC, "Tectyl")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "På en ny varebil",
        tekst: [
          `Producenterne giver 12 års garanti på karrosseriet uden ekstra behandling, men med inspektioner hos Ford. Dinitrol anbefaler behandling fra ny, fordi fabriksbeskyttelsen efter kædens vurdering ikke er lavet til det danske klima.`,
          `Dinitrol skriver, at en professionelt udført behandling som udgangspunkt ikke påvirker fabriksgarantien. Dinitrol Center Ishøj anbefaler at kontrollere rustbeskyttelsen efter et års tid, fordi sliddet afhænger af, hvordan bilen bliver kørt.`
        ],
        efter: [
          `Kilder: ${a(DIN, "Dinitrol")}, set den 4. oktober 2026, og ${a(DIN_I, "Dinitrol Center Ishøj")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Rustbeskyttelse på en leaset varebil",
        tekst: [
          `Nordanias værkstedsrekvisition har poster for opretholdelse af rustgaranti og karosseriinspektion. Om en ekstra undervognsbehandling betales af leasingselskabet, står i aftalen. Reglerne for syn står i Håndbogen: <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`,
          `Hvordan bilen bliver gennemgået, når den afleveres efter endt leasing, står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ]
      },
      {
        overskrift: "Elvarebilen",
        tekst: [
          `Volkswagen skriver, at der ikke må komme undervognsbeskyttelse på batteripakke, højvoltskabler, udluftningsventil og advarselsskilte. Volkswagen har set flere eksempler på elbiler på liften, hvor rustbeskyttelsen dækker advarselsskiltene, og det kan ifølge Volkswagen være farligt. Dinitrol skriver, at batteriet ikke fyldes, men behandles med et tyndt, gennemsigtigt specialprodukt.`,
          `Afrensningen kræver også omtanke. Volkswagens batterigaranti gælder ikke, hvis højvoltsbatteriet er rengjort med højtryksspuler eller damprenser, eller hvis der er kommet vand eller aggressive væsker direkte på det. Tectyl skriver, at alle centrene er uddannet i at håndtere el- og hybridbiler. Læs mere i <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Elvarebil set fra siden med batteripakken under gulvet mellem hjulene og højvoltskabler bagved."><path class="tg-rum" d="M30,140 V95 L65,60 H370 V140 Z"/><path class="tg-profil" d="M40,93 L67,68 H100 V93 Z"/><circle class="tg-profil" cx="95" cy="145" r="20"/><circle class="tg-profil" cx="305" cy="145" r="20"/><rect class="tg-modul" x="125" y="140" width="150" height="14"/><line class="tg-doer" x1="276" y1="147" x2="292" y2="132"/><line class="tg-gulvlinje" x1="10" y1="166" x2="390" y2="166"/><g class="tg-call"><line x1="150" y1="100" x2="60" y2="42"/><circle cx="150" cy="100" r="3"/><text class="tg-call__navn" x="10" y="22">Karrosseri, hulrum</text><text class="tg-call__under" x="10" y="36">og undervogn behandles</text></g><g class="tg-call"><line x1="165" y1="154" x2="90" y2="184"/><circle cx="165" cy="154" r="3"/><text class="tg-call__navn" x="10" y="190">Batteripakke</text><text class="tg-call__under" x="10" y="204">ingen undervognsbeskyttelse</text></g><g class="tg-call"><line x1="284" y1="140" x2="250" y2="184"/><circle cx="284" cy="140" r="3"/><text class="tg-call__navn" x="230" y="190">Højvoltskabler</text><text class="tg-call__under" x="230" y="204">heller ikke</text></g></svg>`,
          tekst: `Skematisk. Volkswagen skriver, at der ikke må komme undervognsbeskyttelse på batteripakke, højvoltskabler, udluftningsventil og advarselsskilte. Kilder: ${a(VW_EL, "Volkswagen")}, set den 7. oktober 2026, og ${a(DIN_EL, "Dinitrol")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(VW_EL, "Volkswagen, Service på elbil")}, ${a(VW_G, "Volkswagens garantibestemmelser, afsnit C.3")} og ${a(TEC_EL, "Tectyl, elbil")}, set den 7. oktober 2026, og ${a(DIN_EL, "Dinitrol")}, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Sæson og produkt",
        tekst: [
          `Rustbeskyttelse er et tilbagevendende arbejde, og kæderne anbefaler faste intervaller for kontrol og genbehandling. Hos Dinitrol er efteråret højsæson, før vejene bliver saltet.`
        ],
        punkter: [
          "<strong>Efteråret.</strong> Dinitrol har travlest i efterårsmånederne, før vejene saltes. Med tørrefaciliteter kan bilen behandles hele året.",
          "<strong>Rusttjek.</strong> Dinitrol anbefaler at kontrollere bilen hvert andet år, før den behandles igen.",
          "<strong>Miljøbehandling.</strong> Tectyls behandling er uden opløsningsmidler og bruger op til 30 % mindre produkt."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Efter et år", "Dinitrol Center Ishøj anbefaler at kontrollere rustbeskyttelsen."],
            ["Hvert andet år", "Dinitrol anbefaler et rusttjek, før bilen behandles igen, og Tectyl giver gratis kvalitetskontrol."],
            ["Hvert 2.–4. år", "Bilen genbehandles, hos Dinitrol hvert 2.–3. år og hos Tectyl efter 3 år eller op til 4 år."],
            ["Efteråret", "Dinitrol har travlest, før vejene saltes."]
          ],
          note: `Kilder: ${a(DIN, "Dinitrol")}, set den 4. oktober 2026, og ${a(DIN_I, "Dinitrol Center Ishøj")} og ${a(TEC_PRIS, "Tectyl")}, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: ${a(DIN, "Dinitrol")}, set den 4. oktober 2026, og ${a(TEC_PRIS, "Tectyl")}, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal rustbeskyttelsescentret vide",
    spoergsmaal_manchet: "Så kan prisen gives for den rigtige bil.",
    spoergsmaal: [
      "Model, årgang og registreringsnummer.",
      "Om bilen er el, diesel eller hybrid.",
      "Om der er indretning, gulv eller beklædning, der skal tages ud.",
      "Om bilen er leaset, og hvem der betaler.",
      "Om behandlingen skal opretholde en garanti.",
      "Om bilen har været behandlet før, og med hvilket produkt.",
      "Hvor gammel bilen er, fordi det afgør garantiens længde."
    ],
    faq: [
      ["Er undervognsbehandling nødvendig på en ny varebil?", "Ford og Volkswagen giver 12 års garanti mod gennemtæring indefra uden ekstra behandling. Dinitrol anbefaler behandling fra ny. Garantien dækker karrosseriets pladedele, ikke mekaniske dele."],
      ["Hvad koster undervognsbehandling?", "Dinitrol oplyser typisk 4.000–5.500 kr. for en komplet behandling og fra ca. 5.000 kr. med moms for en elbil (oktober 2026). Tectyl oplyser prisen før booking."],
      ["Hvor ofte skal bilen undervognsbehandles?", "Dinitrol anbefaler hvert 2.–3. år. Tectyl angiver 3 år for kompletbehandling og op til 4 år for miljøbehandling."],
      ["Hvad er forskellen på undervognsbehandling og hulrumsbehandling?", "Undervognsbehandling dækker bærende dele og bundstruktur. En komplet rustbeskyttelse omfatter også hulrum, døre og motorrum."],
      ["Påvirker undervognsbehandling fabriksgarantien?", "Dinitrol skriver, at en professionelt udført behandling som udgangspunkt ikke gør. Fords rustgaranti forudsætter karrosseriinspektioner efter Fords betingelser."],
      ["Hvad skal en undervognsbehandling dokumentere?", "Dansk Værksteds Kontrol kræver fotos af nummerplade eller stelnummer og 3–5 fotos af de afmonterede plader og inderskærme."],
      ["Hvorfor skal plastpladerne af ved undervognsbehandling?", "Bunden ruster mere end dørrammer og hjulkasser, og man får først det fulde overblik, når pladerne er afmonteret, skriver Dinitrol. Bunden renses og tørres, før den behandles."],
      ["Gælder Tectyls garanti på 99 år også varebiler?", "Nej. Tectyl skriver, at varevogne og gulpladebiler højst får 12 års garanti. De 99 år gælder andre biler, der er under 4 år gamle ved første behandling."],
      ["Må batteriet på en elvarebil få undervognsbeskyttelse?", "Nej, ifølge Volkswagen må der ikke komme undervognsbeskyttelse på batteripakke, højvoltskabler, udluftningsventil og advarselsskilte. Volkswagens batterigaranti gælder heller ikke, hvis batteriet er rengjort med højtryksspuler eller damprenser."]
    ],
    kilder: [
      { navn: "Ford: Garanti på nye Ford varebiler (Ford Protect og fabriksgaranti)", url: FORD_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VW_G, dato: "2026-10-07" },
      { navn: "Volkswagen: Garanti på din nye Volkswagen", url: VW_GAR, dato: "2026-10-04" },
      { navn: "Dinitrol: Undervognsbehandling, pris og behandling", url: DIN, dato: "2026-10-04" },
      { navn: "Dinitrol: Undervognsbehandling til elbil", url: DIN_EL, dato: "2026-10-04" },
      { navn: "Dinitrol Center Ishøj: Biler under 1 år (garantiordning)", url: DIN_I, dato: "2026-10-07" },
      { navn: "Dinitrol Center Ishøj: Garantibestemmelser", url: DIN_I_GAR, dato: "2026-10-07" },
      { navn: "Dinitrol Center Ishøj: Biler over 1 år", url: DIN_I_OVER, dato: "2026-10-07" },
      { navn: "Dinitrol Center Ishøj: Fotodokumentation og sprøjteskemaer", url: DIN_I_FOTO, dato: "2026-10-07" },
      { navn: "Dinitrol Center Ishøj: Kontrolordning", url: DIN_I_KONTROL, dato: "2026-10-07" },
      { navn: "Tectyl Danmark: Pris på rustbeskyttelse", url: TEC_PRIS, dato: "2026-10-07" },
      { navn: "Tectyl Danmark: Forside (garanti)", url: TEC, dato: "2026-10-07" },
      { navn: "Tectyl Danmark: Kompletbehandling", url: TEC_KOMPLET, dato: "2026-10-07" },
      { navn: "Tectyl Danmark: Miljøbehandling", url: TEC_MILJO, dato: "2026-10-07" },
      { navn: "Tectyl Danmark: Undervognsbehandling til el- og hybridbiler", url: TEC_EL, dato: "2026-10-07" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NORD, dato: "2026-10-07" },
      { navn: "Volkswagen: Service på elbil", url: VW_EL, dato: "2026-10-07" },
      { navn: "Volkswagen: Service 5+", url: VW_5, dato: "2026-10-07" },
      { navn: "Konkurrence- og Forbrugerstyrelsen: Indskærpelse om garantier og årlige kontroleftersyn, 24. september 2013", url: KFST, dato: "2026-10-07" },
      { navn: "Hessel: Renault +4 service og serviceaftale", url: H_REN, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["RETTET: Tectyls garanti på op til 99 år gælder kun, hvis bilen er under 4 år gammel ved første behandling, og for varevogne og gulpladebiler er rustgarantien højst 12 år. Den gamle side viste 99 år uden forbehold i en søjlefigur sammen med varebilernes garantier.", TEC_KOMPLET],
    ["Tectyl Miljøbehandling: samme forbehold, garanti i op til 99 år, hvis bilen er under 4 år inden første behandling, varevogne og gulpladebiler dog maks. 12 års garanti; Tectyl gennemfører en gratis kontrol af bilens rusttilstand, før rustgarantiens længde vurderes.", TEC_MILJO],
    ["Ford giver 2 års garanti mod lakfejl i den originale lakopbygning; garantien følger bilen ved ejerskifte; garantien omfatter ikke stenslag, ridser, buler eller lignende brugsskader.", FORD_G],
    ["Volkswagen giver 3 års lakgaranti på nye erhvervsbiler (afsnit B); garantien overtages af ny køber ved salg (A.8); skader udefra som ulykke, hagl eller oversvømmelse er udelukket (A.5.1).", VW_G],
    ["Volkswagens batterigaranti er udelukket, hvis højvoltsbatteriet er rengjort med højtryksspuler eller damprenser, eller der er påført vand eller aggressive væsker direkte på batteriet (afsnit C.3).", VW_G],
    ["Volkswagen: der er flere eksempler på ID.-modeller på lift, hvor rustbeskyttelsen dækker højvoltadvarselsskiltene, hvilket potentielt kan være farligt.", VW_EL],
    ["Volkswagen: bremserne på en elbil risikerer at blive brugt så lidt, at de ruster, før de bliver slidt, fordi den første del af pedalvandringen aktiverer regenerering.", VW_EL],
    ["Volkswagen Service 5+ kontrollerer karrosseriet for tegn på rust og korrosion og gennemgår undervognsbeskyttelse, beklædninger, ledninger, rør og slanger for skader.", VW_5],
    ["Hessel +4 service til Renault på fire år eller mere inkluderer rusteftersyn.", H_REN],
    ["Nordanias værkstedsrekvisition har poster for opretholdelse af rustgaranti og karosseriinspektion.", NORD],
    ["KFST (2013): importørernes rustgennemtæringsgarantier har ofte en varighed på 10-12 år og kræver normalt kontroleftersyn hos et autoriseret mærkeværksted på bestemte tidspunkter; krav om ejerens personlige fremmøde vil efter styrelsens vurdering være en overtrædelse af konkurrenceloven, hvis der foreligger en aftale eller samordnet praksis.", KFST],
    ["Dinitrol Forhandlerforening indførte den 1. marts 2016 automatisk 30 års garanti på biler under 12 måneder på behandlingstidspunktet med behandling hvert 3. år; biler med 20 og 15 års garanti genbehandles hvert 2. år.", DIN_I_GAR],
    ["Dinitrol Center Ishøj: biler over 1 år kan få garanti på op til 20 år med efterbehandling hvert andet år.", DIN_I_OVER],
    ["Dinitrol Center Ishøj anbefaler, at rustbeskyttelsen kontrolleres efter et års tid, da slid afhænger af kørselsmønsteret.", DIN_I],
    ["Dinitrol Center Ishøj: Dinitrol udvikler selv sprøjteskemaer til alle bilmodeller; skemaet viser, hvad der skal adskilles, og hvor lyddæmpende svampe er placeret; svampene suger vand og holder på fugten og skal ud, så der kan rustbeskyttes bagved; skemaets vigtigste funktion er at påvise adgange til skjulte hulrum, hvor elektroniske dele som airbagsensorer sidder.", DIN_I_FOTO],
    ["Teknologisk Institut udfører uanmeldte stikprøvekontroller på alle Dinitrol-centre og kontrollerer bilens hulrum og vanger; en behandlet bil kan tilmeldes kontrollen på Teknologisk Instituts hjemmeside.", DIN_I_KONTROL],
    ["Alle Tectyl-centre er tilknyttet en uvildig kontrolordning for rustbeskyttelse hos enten Teknologisk Institut eller FDM; Tectyl tager hensyn til elektriske dele som selestrammere og airbagsensorer samt plastkapper og skjolde ved døre, bund og skærme.", TEC],
    ["Tectyls behandling: afmontering af skjolde/bundplader, hjul og inderskærme, afrensning af salt- og skidtrester, indtrængning i hulrum, vanger, døre, paneler og klapper, rustbeskyttelse på undervogn, ophæng og vanger, et afsluttende slidlag og vask, aftørring og hærdning.", TEC_KOMPLET],
    ["Tectyl: prisen afhænger af centret (Jylland, Fyn eller Sjælland) og af bilens alder, stand, model og type; kompletbehandlingen er voksbaseret, egnet til alle biler og til biler behandlet med en anden rustbeskyttelse; miljøbehandlingen er bedst egnet til nye og nyere biler.", TEC_PRIS],
    ["Tectyl Miljøbehandling udføres med vandbaserede produkter og er bedst til nye og nyere biler og elbiler uden rust.", TEC_MILJO],
    ["Tectyl: el- og hybridbiler har karosseri, bremserør og hjulførende dele, der er udsat for rust; alle Tectyl-centre er uddannede i håndtering af el- og hybridbiler og har specialudarbejdede sprøjteskemaer til hver bilmodel.", TEC_EL]
  ]
};
