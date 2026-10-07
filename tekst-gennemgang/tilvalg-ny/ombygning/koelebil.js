// Underside /til-varebilen/ombygning/koelebil/ (07-10-2026)
var ATP = `https://www.retsinformation.dk/eli/lta/2025/1330`;
var BET = `https://www.retsinformation.dk/eli/lta/2023/515`;
var FV30 = `https://foedevarestyrelsen.dk/lovstof/vejledninger/hygiejnevejledningen/30-transport-af-foedevarer`;
var FV32 = `https://foedevarestyrelsen.dk/lovstof/vejledninger/hygiejnevejledningen/32-atp-international-transport-af-letfordaervelige-foedevarer`;
var FVT = `https://foedevarestyrelsen.dk/kost-og-foedevarer/start-og-drift-af-foedevarevirksomhed/virksomhedstyper-hygiejneregler/transportoer-af-foedevarer`;
var BN = `https://www.bn.dk/erhverv/nye-varebiler/ford/transit-ladvogn`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var FF = `https://fyns-karosseribyg.dk/brands/alu-team/ferro-foam-kasser/`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;

module.exports = {
  id: "ombygning/koelebil",
  side: {
    slug: "koelebil",
    navn: "Kølebil",
    titel: "Kølebil: isolering, aggregat og ATP-regler",
    kort: `Isoleret varerum, køleaggregat, ATP-klasser, mærkning og Fødevarestyrelsens krav til transport af kølevarer.`,
    beskrivelse: `Kølebil og frysebil: isoleringsklasser, aggregat, ATP-godkendelse i 6 år, mærkning, temperaturkrav og ATP-certifikat fra 3.663 kr. i gebyr.`,
    manchet: `En kølebil er et isoleret varerum med et køleaggregat. Kører den letfordærvelige fødevarer til eller fra et andet ATP-land, skal den være ATP-godkendt. I Danmark gælder Fødevarestyrelsens hygiejneregler, og transportøren skal være registreret. Her kan du se klasserne, kravene til kassen og hvad godkendelsen koster.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["ATP-certifikat, nyt materiel", "6 år", "når materiellet er typegodkendt"],
        ["Brugt materiel", "3 år", "gælder godkendelsen efter syn"],
        ["Udstedelse af certifikat", "3.663 kr.", "i gebyr til ATP-materielkontrollen"],
        ["Kraftigt isoleret", "højst 0,4", "K-koefficient i W/m²·°C"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Isoleret, kølet og maskinkølet",
        tekst: [
          `En kølebil er en varebil med et isoleret varerum og et køleaggregat, der holder temperaturen. Den bygges som regel på en kassevogn eller på et chassis med en kølekasse.`,
          `ATP-reglerne deler transportmateriellet op efter, hvordan det holder temperaturen. Isoleringen måles som K-koefficient, varmegennemgangen i W/m²·°C. Jo lavere tal, jo bedre isolering.`
        ],
        punkter: [
          `<strong>Normalt isoleret (IN).</strong> K-koefficient højst 0,7.`,
          `<strong>Kraftigt isoleret (IR).</strong> K-koefficient højst 0,4.`,
          `<strong>Kølet materiel.</strong> Isoleret varerum med en kuldegiver som eutektiske plader, tøris eller is, uden aggregat.`,
          `<strong>Maskinkølet materiel.</strong> Isoleret varerum med eget køleaggregat. Det er den almindelige kølebil.`,
          `<strong>Maskinkølet og opvarmet.</strong> Aggregat, der både køler og varmer, så varerne heller ikke fryser.`
        ],
        figur: {
          type: "noegletal",
          data: [["Normalt isoleret (IN), højst", "0,7", "W/m²·°C"], ["Kraftigt isoleret (IR), højst", "0,4", "W/m²·°C"]],
          note: `Tallene er K-koefficienten, og jo lavere tal, jo bedre isolerer kassen. Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025)</a>, bilag 1, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Væggen i snit",
        tekst: [
          `En kølekasse er bygget som en sandwich: yderbeklædning, isolering af PU-skum og inderbeklædning. AluTeams køle- og frostkasser leveres med Ferro-Form-paneler fra 30 mm og med ATP-godkendelse, oplyser Fyns Karosseribyg.`,
          `Panelerne fås op til 85 mm, og jo kraftigere isolering, jo tykkere væg. Bunden skal kunne klare store belastninger, og den kan få en overflade af riskorn, aluplade, støjsvag alu eller skridsikker glasfiber. Kassen kan også få forstærkninger til køleanlægget og et fast eller flytbart skillerum.`,
          `K-koefficienten er den varmeeffekt, der skal til for at holde temperaturforskellen mellem ude og inde, delt med kassens gennemsnitlige overfladeareal og temperaturforskellen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="Snit gennem væg og bund i en isoleret kølekasse: yderbeklædning, isolering af PU-skum og inderbeklædning, med varmestrømmen fra +30 grader udenfor ind mod varerummet"><defs><marker id="pil-koelebil-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="150" y="40" width="8" height="150" class="tg-hylde"/><rect x="158" y="40" width="70" height="150" class="tg-modul"/><rect x="228" y="40" width="8" height="150" class="tg-hylde"/><rect x="150" y="190" width="260" height="8" class="tg-hylde"/><rect x="236" y="160" width="174" height="30" class="tg-modul"/><line x1="236" y1="160" x2="410" y2="160" class="tg-gulvlinje"/><text x="75" y="70" text-anchor="middle" class="tg-fremhaev">UDE</text><text x="75" y="86" text-anchor="middle">+30 °C ved test</text><text x="330" y="70" text-anchor="middle" class="tg-fremhaev">VARERUM</text><text x="330" y="86" text-anchor="middle">klassetemperatur</text><g class="tg-maal"><line x1="40" y1="120" x2="300" y2="120" marker-end="url(#pil-koelebil-1)"/><text x="330" y="124" text-anchor="middle">varme</text></g><g class="tg-maal"><line x1="158" y1="28" x2="228" y2="28" marker-start="url(#pil-koelebil-1)" marker-end="url(#pil-koelebil-1)"/><text x="193" y="20" text-anchor="middle">isolering</text></g><g class="tg-call"><line x1="154" y1="170" x2="124" y2="206"/><circle cx="154" cy="170" r="3"/><text x="10" y="222" class="tg-call__navn">Yderbeklædning</text><text x="10" y="237" class="tg-call__under">glasfiber eller ferro</text></g><g class="tg-call"><line x1="320" y1="160" x2="320" y2="214"/><circle cx="320" cy="160" r="3"/><text x="250" y="226" class="tg-call__navn">Bund</text><text x="250" y="241" class="tg-call__under">riskorn, alu eller glasfiber</text></g></svg>`,
          tekst: `Skematisk snit gennem væg og bund. ATP-klasserne er fastsat ved en udvendig gennemsnitstemperatur på +30 °C. Kilde: <a href="${FF}" rel="noopener">Fyns Karosseribyg: AluTeam Ferro-Form køle- og frostkasser</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "ATP-klasser for maskinkølede biler",
        tekst: [
          `Klassen viser, hvilken temperatur kassen og aggregatet kan holde, når det er +30 °C udenfor. Første bogstav F står for maskinkølet materiel, det andet for normal eller kraftig isolering, og det tredje for temperaturen.`
        ],
        tabel: {
          kolonner: ["Mærke", "Isolering", "Temperatur i varerummet"],
          raekker: [
            ["FNA / FRA", "Normal / kraftig", "valgfri mellem +12 °C og 0 °C"],
            ["FRB", "Kraftig", "valgfri mellem +12 °C og −10 °C"],
            ["FRC", "Kraftig", "valgfri mellem +12 °C og −20 °C"],
            ["FND / FRD", "Normal / kraftig", "højst 0 °C"],
            ["FRE", "Kraftig", "højst −10 °C"],
            ["FRF", "Kraftig", "højst −20 °C"]
          ],
          note: `Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025)</a>, bilag 1 og 5, set den 4. oktober 2026. Temperaturen skal kunne holdes ved +30 °C udenfor.`
        },
        efter: [
          `Klasserne B, C, E og F kræver kraftig isolering. Køler aggregatet til to temperaturer i hver sit rum, får bilen begge mærker, fx FRC-FRA. Andet materiel med flere temperaturer mærkes med den højeste klasse og et M, fx FRC-M.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Temperaturskala fra +12 til −20 grader for de seks ATP-klasser for maskinkølede biler. A, B og C har en valgfri temperatur fra +12 grader ned til 0, −10 og −20 grader. D, E og F skal holde højst 0, −10 og −20 grader."><text class="tg-fremhaev" x="0" y="32">FNA / FRA</text><rect class="tg-modul" x="120" y="20" width="96" height="16"/><text class="tg-fremhaev" x="0" y="56">FRB</text><rect class="tg-modul" x="120" y="44" width="176" height="16"/><text class="tg-fremhaev" x="0" y="80">FRC</text><rect class="tg-modul" x="120" y="68" width="256" height="16"/><text class="tg-fremhaev" x="0" y="104">FND / FRD</text><rect class="tg-hylde" x="216" y="92" width="176" height="16"/><text class="tg-fremhaev" x="0" y="128">FRE</text><rect class="tg-hylde" x="296" y="116" width="96" height="16"/><text class="tg-fremhaev" x="0" y="152">FRF</text><rect class="tg-hylde" x="376" y="140" width="16" height="16"/><line class="tg-pil" x1="120" y1="166" x2="392" y2="166"/><line class="tg-pil" x1="120" y1="162" x2="120" y2="170"/><text x="120" y="184" text-anchor="start">+12 °C</text><line class="tg-pil" x1="216" y1="162" x2="216" y2="170"/><text x="216" y="184" text-anchor="middle">0 °C</text><line class="tg-pil" x1="296" y1="162" x2="296" y2="170"/><text x="296" y="184" text-anchor="middle">−10 °C</text><line class="tg-pil" x1="376" y1="162" x2="376" y2="170"/><text x="376" y="184" text-anchor="middle">−20 °C</text><rect class="tg-modul" x="120" y="202" width="12" height="10"/><text x="138" y="211">valgfri</text><rect class="tg-hylde" x="230" y="202" width="12" height="10"/><text x="248" y="211">højst</text></svg>`,
          tekst: `Skematisk. Tegningen viser temperaturerne fra tabellen. I FNA, FRA, FRB og FRC kan temperaturen vælges i intervallet, og i FND, FRD, FRE og FRF må varerummet højst have den temperatur.`
        }
      },
      {
        overskrift: "Aggregat drevet af motoren",
        tekst: [
          `Mange varebilsaggregater trækkes af bilens motor. Når bilens motor driver kompressoren, skal klassifikationsmærket have et X. Det samme gælder et aggregat, der kan tages af, så enheden ikke virker.`,
          `Kulde- og varmeanlægget skal også godkendes ud fra oplysninger om konstruktion og ydelse og en praktisk afprøvning. Godkendelsen af anlægget gælder højst 6 år. Ændres anlæggets kapacitet, eller skiftes det til et nyt anlæg med et andet serienummer, bortfalder godkendelsen af bilen.`
        ],
        figur: {
          type: "noegletal",
          data: [["Bogstaver, mindst", 100, "mm"], ["Udløbsdato, mindst", 50, "mm"], ["Bogstaver på bil op til 3,5 t", 50, "mm"], ["Udløbsdato på bil op til 3,5 t", 25, "mm"]],
          note: `Mærket sidder udvendigt på begge sider i det forreste øverste hjørne. Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, bilag 5</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025), §§ 9 og 12 og bilag 1</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mærke og certifikatplade",
        tekst: [
          `Ved godkendelsen får bilen en bogstavkombination til klassifikationsmærket, som viser klassen og den måned og det år, godkendelsen udløber. Mærket sidder udvendigt på begge sider i det forreste øverste hjørne. Normalt skal bogstaverne være mindst 100 mm høje og udløbsdatoen mindst 50 mm. På en bil op til 3,5 t kan de være 50 mm og 25 mm.`,
          `Bilen får også en certifikatplade af holdbart materiale med kassens fabrikat, type, serienummer og fremstillingsår. Pladen har samme værdi som selve certifikatet. Mærke og plade må kun bruges på det materiel, de er udleveret til, og de skal fjernes, når godkendelsen er udløbet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 238" role="img" aria-label="Kølevarebil set fra siden med ATP-mærket i det forreste øverste hjørne af varerummet. Mærket viser klassen og udløbsdatoen og sidder på begge sider af bilen."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="196" y="92" width="48" height="22"/><text class="tg-modul__tekst" x="220" y="108" text-anchor="middle">FRC</text><text x="220" y="130" text-anchor="middle">06-2032</text><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="244" y1="100" x2="300" y2="50"/><circle cx="244" cy="100" r="3"/><text class="tg-call__navn" x="395" y="30" text-anchor="end">Klasse, fx FRC</text><text class="tg-call__under" x="395" y="44" text-anchor="end">bogstaver mindst 50 mm</text></g><g class="tg-call"><line x1="198" y1="126" x2="150" y2="50"/><circle cx="198" cy="126" r="3"/><text class="tg-call__navn" x="10" y="30">Udløbsdato</text><text class="tg-call__under" x="10" y="44">mindst 25 mm</text></g><text class="tg-lille" x="200" y="234" text-anchor="middle">MÆRKET SIDDER PÅ BEGGE SIDER</text></svg>`,
          tekst: `Skematisk. Mærkets placering og bogstavhøjden på en bil op til 3,5 t. Datoen er et eksempel. Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025), § 11 og bilag 5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "ATP gælder over grænsen",
        tekst: [
          `ATP-bekendtgørelsen gælder erhvervsmæssig transport af letfordærvelige fødevarer, der føres ind i Danmark eller ud til et land, der har tiltrådt ATP. Fødevarestyrelsen lister 51 ATP-lande, Danmark medregnet, bl.a. Sverige, Norge, Tyskland, Polen og UK.`,
          `Kravet gælder ikke, hvis de temperaturer, der kan forventes under hele transporten, gør isoleret materiel klart unødvendigt. En søtransport er kun omfattet, når den er under 150 km og hænger sammen med en transport på land.`,
          `Ved transport inden for Danmark gælder hygiejnereglerne: køretøjet skal kunne holde varerne ved den rette temperatur, temperaturen skal kunne overvåges, og varerummet skal kunne rengøres. Fødevarestyrelsen nævner kølebil og frysebil som muligheder ved siden af køletasker og termokasser.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. Kører bilen letfordærvelige fødevarer til eller fra et andet ATP-land, skal materiellet være ATP-godkendt og have certifikat. Ellers er der ikke krav om ATP-godkendelse. I begge tilfælde gælder hygiejnereglerne og registrering som transportør."><defs><marker id="pil-koelebil-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="20" y="6" width="360" height="56"/><text x="200" y="28" text-anchor="middle">Kører bilen letfordærvelige fødevarer</text><text class="tg-fremhaev" x="200" y="48" text-anchor="middle">til eller fra et andet ATP-land?</text><line class="tg-pil" x1="130" y1="62" x2="104" y2="100" marker-end="url(#pil-koelebil-2)"/><line class="tg-pil" x1="270" y1="62" x2="296" y2="100" marker-end="url(#pil-koelebil-2)"/><text x="108" y="84" text-anchor="end">Ja</text><text x="292" y="84">Nej</text><rect class="tg-modul" x="14" y="104" width="180" height="56"/><text class="tg-modul__tekst" x="104" y="126" text-anchor="middle">ATP-GODKENDT</text><text class="tg-modul__tekst" x="104" y="146" text-anchor="middle">materiel og certifikat</text><rect class="tg-kasse" x="206" y="104" width="180" height="56"/><text class="tg-fremhaev" x="296" y="126" text-anchor="middle">Ingen krav om</text><text x="296" y="146" text-anchor="middle">ATP-godkendelse</text><line class="tg-skinne-tynd" x1="104" y1="160" x2="104" y2="180"/><line class="tg-skinne-tynd" x1="296" y1="160" x2="296" y2="180"/><rect class="tg-kasse" x="14" y="180" width="372" height="48"/><text x="200" y="200" text-anchor="middle">I begge tilfælde gælder hygiejnereglerne</text><text x="200" y="218" text-anchor="middle">og registrering som transportør</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, § 1</a>, <a href="${FV30}" rel="noopener">Fødevarestyrelsen: Transport af fødevarer</a> og <a href="${FVT}" rel="noopener">Fødevarestyrelsen: Transportør af fødevarer</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fødevarer omfattet af ATP",
        tekst: [
          `ATP-kravet gælder kun bestemte fødevarer. Det er de varer, der skal holdes frosne eller kølede, for at de ikke bliver fordærvet undervejs.`
        ],
        punkter: [
          `Alle frosne og dybfrosne fødevarer.`,
          `Mælk, yoghurt, smør, fløde, kefir og friske oste.`,
          `Fisk, krebs- og bløddyr, undtagen røgede, saltede, tørrede eller levende.`,
          `Kød, kødprodukter, fjerkræ, kaniner og vildt, undtagen fuldt konserverede produkter.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Det er virksomhedens ansvar, at materiellet er ATP-godkendt, også når den bruger en speditør eller en ekstern transportør. Virksomheden kan bede om at se ATP-certifikatet og tjekke materiellets mærke. Kilde: <a href="${FV32}" rel="noopener">Fødevarestyrelsen: Hygiejnevejledningen, afsnit 32</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Temperaturkrav under transport",
        tekst: [
          `Temperaturen må ikke være højere end grænsen noget sted i lasten, hverken ved pålæsning, under transporten eller ved aflæsning. Når aggregatets fordamper afrimes, må temperaturen i en del af lasten stige kortvarigt med højst 3 °C.`,
          `Kølede varer må heller ikke fryse noget sted i lasten. En bil, der kører dybfrost, skal have et måleinstrument, der overvåger lufttemperaturen med hyppige og regelmæssige mellemrum. Instrumentet skal opfylde standarden EN 12830, og temperaturerne skal dateres og gemmes i mindst et år.`
        ],
        tabel: {
          kolonner: ["Varer", "Højeste temperatur", "Regel"],
          raekker: [
            ["Dybfrost", "−18 °C, kortvarigt +3 °C ved lokal distribution", "Hygiejnevejledningen, afsnit 30"],
            ["Iscreme", "−20 °C", "ATP-bekendtgørelsen § 17"],
            ["Smør (frosset)", "−10 °C", "ATP-bekendtgørelsen § 17"],
            ["Kødprodukter, friske mejeriprodukter, færdigretter, fiskeprodukter", "+6 °C eller temperaturen på emballagen", "ATP-bekendtgørelsen § 18"]
          ],
          note: `Kilder: <a href="${FV30}" rel="noopener">Fødevarestyrelsen</a> og <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen</a>, set den 4. oktober 2026.`,
          visning: "kort"
        },
        efter: [
          `Det er transportøren, der har ansvaret for temperaturen under transporten, skriver Fødevarestyrelsen. Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, §§ 17 og 18 og bilag 6</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hvem har ansvaret",
        tekst: [
          `Kører virksomheden selv varerne ud i egne biler med egne chauffører, har den selv ansvaret for transporten. Bruger den en ekstern transportør, ligger ansvaret hos transportøren, og det gælder, indtil varerne er afleveret til kunden.`,
          `Hvilke temperaturkrav der gælder, afhænger af, hvem der sender og modtager varerne, og hvem der kører. Fødevarer må kun køre sammen med andre varer, hvis der ikke er risiko for, at de bliver forurenet. Uindpakkede fødevarer skal ofte holdes adskilt, mens indpakkede sjældent skal, og bilen skal som hovedregel gøres grundigt rent mellem to transporter.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Transport", "Temperaturkrav"],
          raekker: [
            ["Mellem to engrosvirksomheder", "engrosvirksomhedens"],
            ["Engros til detail, kørt af engrosvirksomheden eller en ekstern transportør", "engrosvirksomhedens"],
            ["Engros til detail, kørt af detailvirksomheden selv", "detailvirksomhedens"],
            ["Mellem to detailvirksomheder, også med selvstændig transportør", "detailvirksomhedens"],
            ["Til institutioner, fx børnehaver", "reglerne, mærkningen eller handelspapirerne"]
          ],
          note: `Kilde: <a href="${FV30}" rel="noopener">Fødevarestyrelsen: Hygiejnevejledningen, afsnit 30</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Registrering hos Fødevarestyrelsen",
        tekst: [
          `En virksomhed, der transporterer fødevarer til andre fødevarevirksomheder eller til forbrugere, skal være registreret som transportør hos Fødevarestyrelsen og have et egenkontrolprogram. Egenkontrollen skal bl.a. sikre rengøring og overholdelse af temperaturkravene. Registreringen sker på Fødevarestyrelsens registreringsblanket for fødevarevirksomheder.`,
          `Egenkontrollen behøver ikke altid at være skriftlig. Er risikoen lav, kan det være nok med gode arbejdsgange, som transportøren kan forklare, når fødevarekontrollen kommer.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Registrér virksomheden", "Brug blanketten Opstart af fødevarevirksomhed, før kørslen begynder."],
            ["Kontrolinformation", "Fødevarestyrelsen sender en kontrolinformationsblanket, som kunderne skal kunne se."],
            ["Egenkontrol", "Programmet beskriver risici og styrer bl.a. rengøring og temperatur."],
            ["Kontrol", "Fødevarekontrollen kan komme på besøg og se, hvordan reglerne overholdes."]
          ]
        },
        efter: [
          `Kilde: <a href="${FVT}" rel="noopener">Fødevarestyrelsen: Transportør af fødevarer</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hygiejnisk indretning af kassen",
        tekst: [
          `ATP-godkendelsen kræver også, at kassen er hygiejnisk bygget. Indersiden og alt, der kan røre fødevarerne, skal være af korrosionsfaste materialer, der ikke suger væske og ikke påvirker varernes lugt, smag, farve eller konsistens. Overfladerne skal være glatte, uden porer og lette at rengøre og desinficere.`
        ],
        punkter: [
          `<strong>Tæt konstruktion.</strong> Isoleringen må ikke tage skade ved vask med trykvasker eller almindelige rengøringsmidler, og vand og damp må ikke trænge ind i den.`,
          `<strong>Ingen lommer.</strong> Der må ikke være fordybninger, der er svære at gøre rene, og vaskevand skal have frit afløb, også fra dørkarmene.`,
          `<strong>Døre.</strong> Dørene til varerummet skal have tætsluttende dobbeltpakning, og de skal kunne plomberes.`,
          `<strong>Insekter og støv.</strong> Kassen skal beskytte varerne mod insekter og støv, og væskedræn skal være sikret mod, at luft trænger ind.`,
          `<strong>Kødophæng og hylder.</strong> De skal være korrosionsfaste, så hængende og uindpakkede varer ikke rører gulvet.`
        ],
        efter: [
          `Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025), §§ 3 og 14–16</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "ATP-godkendelse og certifikat",
        tekst: [
          `I Danmark godkender DMRI, ATP-materielkontrollen i Taastrup, materiellet og udsteder certifikat og certifikatplade. Ansøgninger og dokumenter kan sendes elektronisk via virk.dk.`,
          `Godkendelsen af nyt materiel gælder som udgangspunkt i seks år regnet fra udstedelsesmåneden, og fornyede godkendelser gælder tre år ad gangen. Materielkontrollen kan indkalde materiellet til syn før tid og forkorte perioden, hvis kassen er slidt. Materiel, der er godkendt i et andet ATP-land, ligestilles med dansk godkendt materiel, når det har klassifikationsmærket.`
        ],
        punkter: [
          `<strong>Nyt materiel</strong> fremstillet efter en godkendt type får et certifikat for 6 år.`,
          `<strong>Brugt materiel</strong> og materiel, der ikke er typegodkendt, skal synes. Godkendelsen gælder 3 år.`,
          `<strong>Godkendelsen bortfalder</strong> ved ejerskifte, ved ændring eller omfattende reparation af isoleringen og ved udskiftning af aggregatet til et nyt serienummer eller en ny type. Den bortfalder også, hvis certifikatpladen bliver væk eller beskadiget.`,
          `<strong>Mærke og plade</strong> skal fjernes, når godkendelsen er udløbet.`
        ],
        efter: [
          `Bortfaldet ved ejerskifte betyder, at en brugt kølebil skal have certifikatet ændret, før den bruges til ATP-transport.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Nyt materiel", "Materiel efter en godkendt type får et certifikat for 6 år."],
            ["Brugt materiel", "Materiellet skal synes, og godkendelsen gælder 3 år."],
            ["Ejerskifte", "Godkendelsen bortfalder, og certifikatet skal ændres, før bilen bruges til ATP-transport."],
            ["Udløbet godkendelse", "Mærke og plade skal fjernes."]
          ],
          note: `Godkendelsen bortfalder også, når isoleringen ændres eller repareres meget, og når aggregatet skiftes til et nyt serienummer eller en ny type. Kilder: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, §§ 2–13</a> og <a href="${FV32}" rel="noopener">Fødevarestyrelsen: Hygiejnevejledningen, afsnit 32</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad det koster",
        tekst: [
          `Prisen på isolering og aggregat afhænger af bil, varerum og temperaturklasse, og opbyggerne oplyser den på tilbud. Ford-forhandleren BN nævner kølebil som en af opbygningerne på Transit-chassiset, der koster fra 296.393 kr. ekskl. moms uden opbygning.`,
          `Gebyrerne for ATP-godkendelsen står i en betalingsbekendtgørelse. ATP-materielkontrollen opkræver dem på Fødevarestyrelsens vegne, og rejseudgifter kommer oveni.`
        ],
        tabel: {
          kolonner: ["Ydelse hos ATP-materielkontrollen", "Gebyr"],
          raekker: [
            ["Udstedelse af certifikat", "3.663 kr."],
            ["Ændring af certifikat, fx ved ejerskifte", "997 kr."],
            ["Syn af materiel og udstedelse af certifikat", "4.027 kr."]
          ],
          note: `Kilde: <a href="${BET}" rel="noopener">Bekendtgørelse om betaling for godkendelse og syn m.m. af transportmateriel til letfordærvelige fødevarer (BEK nr. 515 af 16/05/2023)</a>, set den 4. oktober 2026. Bekendtgørelsen var fortsat gældende på retsinformation.dk den 4. oktober 2026, og Fødevarestyrelsens hygiejnevejledning henviser til den. Rejseudgifter kommer oveni. Bekendtgørelsen angiver ikke moms.`,
          visning: "skjul"
        },
        figur: [
          {
            type: "noegletal",
            data: [["Certifikat", "3.663", "kr."], ["Ændring", "997", "kr."], ["Syn og certifikat", "4.027", "kr."], ["Ved afslag", "831", "kr. pr. time"]],
            note: `Kilde: <a href="${BET}" rel="noopener">BEK nr. 515 af 16/05/2023</a>, set den 4. oktober 2026. Bliver kassen ikke godkendt, betaler man 831 kr. pr. påbegyndt arbejdstime plus rejseudgifter. Bekendtgørelsen angiver ikke moms.`
          }
        ]
      },
      {
        overskrift: "Registreringssyn efter opbygning",
        tekst: [
          `Isolering og aggregat ændrer bilens egenvægt med mere end 50 kg, og så skal bilen godkendes ved et registreringssyn, før den tages i brug. Det er et andet syn end ATP-synet. Se <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`,
          `Registreringssynet godkender bilen som køretøj, mens ATP-synet godkender kassen og aggregatet til fødevarer. De to godkendelser følger hver sine regler og frister.`
        ]
      },
      {
        overskrift: "Bredde og vægtykkelse",
        tekst: [
          `Et køretøj må normalt højst være 2,55 m bredt. Detailforskrifterne giver en undtagelse for en temperaturkontrolleret opbygning, som må være op til 2,60 m bred, når sidevæggene inklusive isolering er mindst 45 mm tykke.`,
          `I ATP-reglerne gælder kravet om sidevægge på mindst 45 mm for kraftigt isoleret materiel kun materiel, der er bredere end 2,50 m.`
        ],
        efter: [
          `Kilde: <a href="${DETAIL}" rel="noopener">Bekendtgørelse om detailforskrifter for køretøjer (BEK nr. 1484 af 03/12/2025), bilag 1, pkt. 3.02.001</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kølet materiel uden aggregat",
        tekst: [
          `Kølet materiel bruger is, eutektiske plader, tøris eller flydende gas som kuldegiver i stedet for et aggregat. Klasse B og C kræver en K-koefficient på højst 0,4.`,
          `Klassen angiver den højeste temperatur, det tomme varerum må have, når kuldegiveren er i brug, og det er +30 °C udenfor.`
        ],
        tabel: {
          kolonner: ["Klasse", "Højeste temperatur i det tomme varerum"],
          raekker: [["A", "+7 °C"], ["B", "−10 °C"], ["C", "−20 °C"], ["D", "0 °C"]],
          note: `Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen (BEK nr. 1330 af 20/11/2025)</a>, bilag 1, set den 4. oktober 2026. Ved en udvendig gennemsnitstemperatur på +30 °C.`
        }
      },
      {
        overskrift: "Aggregatets kapacitet",
        tekst: [
          `Aggregatet skal kunne køle mere, end varmetabet gennem væggene kræver. ATP-reglerne regner med en faktor på 1,75.`
        ],
        punkter: [
          `<strong>Faktor 1,75.</strong> Er aggregatet testet for sig, kan bilen godkendes uden effektivitetsprøve, når aggregatets kuldeydelse er større end varmetabet gennem væggene gange 1,75.`,
          `<strong>Flere rum.</strong> Med flere temperaturzoner skal den effektive kølekapacitet i hvert rum mindst svare til rummets kølebehov gange 1,75. Kølebehovet regnes af varmetabet gennem ydervægge og skillevægge.`,
          `<strong>Drevet af motoren.</strong> Materiel, der er fremstillet efter 5. januar 2018, skal ved kontrol kunne holde klassetemperaturen ved mindst 15 °C udenfor med motoren i tomgang i mindst halvanden time.`
        ],
        figur: {
          type: "noegletal",
          data: [["Kuldeydelse mod varmetab", "1,75", "gange"], ["Udetemperatur ved kontrol, mindst", 15, "°C"], ["Motoren i tomgang, mindst", "1½", "time"]],
          note: `Kravet om tomgang gælder materiel, der er fremstillet efter 5. januar 2018. Kilde: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, bilag 1</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Kontrol af kassen i brug",
        tekst: [
          `Når en godkendelse skal fornyes, ser ATP-materielkontrollens eksperter på kassen. Resultatet afgør, hvor længe den må bruges i sin klasse.`,
          `Politiet kontrollerer på vejen, at en bil med ATP-varer mellem Danmark og et andet EU-land har gyldigt certifikat eller certifikatplade og de rigtige klassifikationsmærker. Mangler de, kan bilen nægtes passage. Fødevarestyrelsen tager også stikprøver på vejen sammen med politiet og SKAT og kan forbyde transporten, hvis fx kølemaskinen er defekt.`
        ],
        punkter: [
          `<strong>Gunstigt eftersyn.</strong> Er karrosseriets tilstand god, kan materiellet bruges i sin klasse i op til 3 år.`,
          `<strong>Ugunstigt eftersyn.</strong> Så skal K-koefficienten måles igen på en prøvestation, hvis materiellet skal bruges videre, og derefter kan det bruges i op til 6 år.`,
          `<strong>Nedklassificering.</strong> En kraftigt isoleret kasse, der ikke længere lever op til klassen, kan køre som normalt isoleret i op til 3 år med ændrede kendemærker.`
        ],
        efter: [
          `Eksperterne ser bl.a. på væggenes tilstand og tykkelse og det isolerede rum, og de kan afmontere dele af kassen. Kilder: <a href="${ATP}" rel="noopener">ATP-bekendtgørelsen, §§ 30 og 32 og bilag 1</a> og <a href="${FV32}" rel="noopener">Fødevarestyrelsen: Hygiejnevejledningen, afsnit 32</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal køleopbyggeren vide",
    spoergsmaal_manchet: "Så kan opbyggeren vælge isolering og aggregat, der holder den rigtige temperatur.",
    spoergsmaal: [
      "Hvilke varer der skal køres, og ved hvilken temperatur: køl, frost eller begge.",
      "Om varerne skal til eller fra et andet ATP-land, så bilen skal ATP-godkendes.",
      "Antal stop og døråbninger pr. dag.",
      "Om aggregatet skal kunne køre på strøm, når bilen holder stille.",
      "Om varerummet skal deles i to temperaturzoner.",
      "Om bilen kører dybfrost og derfor skal have et godkendt måleinstrument.",
      "Bilens nyttelast i dag, og hvor meget der skal være tilbage."
    ],
    faq: [
      ["Skal en kølebil være ATP-godkendt?", "Ja, når den kører letfordærvelige fødevarer til eller fra et andet ATP-land. Ved transport inden for Danmark gælder Fødevarestyrelsens hygiejneregler i stedet."],
      ["Hvor længe gælder et ATP-certifikat?", "6 år for nyt, typegodkendt materiel. Brugt materiel og materiel uden typegodkendelse skal synes, og godkendelsen gælder 3 år."],
      ["Hvad betyder FRC på en kølebil?", "Maskinkølet materiel med kraftig isolering, der kan holde en valgfri temperatur mellem +12 °C og −20 °C."],
      ["Hvad koster et ATP-certifikat?", "3.663 kr. for udstedelse og 4.027 kr. for syn og certifikat ifølge betalingsbekendtgørelsen fra 2023. Ændring ved ejerskifte koster 997 kr."],
      ["Følger ATP-godkendelsen med, når kølebilen sælges?", "Nej. Godkendelsen bortfalder ved ejerskifte, så certifikatet skal ændres."],
      ["Skal man være registreret for at køre med fødevarer?", "Ja. Virksomheder, der transporterer fødevarer, skal være registreret som transportør hos Fødevarestyrelsen og have et egenkontrolprogram."],
      ["Hvor tyk er isoleringen i en kølebil?", "AluTeams køle- og frostkasser leveres med paneler fra 30 til 85 mm, oplyser Fyns Karosseribyg. ATP-reglerne stiller krav til K-koefficienten. Kravet om mindst 45 mm sidevægge for kraftigt isoleret materiel gælder kun materiel, der er bredere end 2,50 m."],
      ["Kan køleaggregatet køre på bilens motor?", "Ja. Så skal klassemærket have et X, og ved kontrol skal materiel fra 2018 og frem kunne holde klassetemperaturen med motoren i tomgang i mindst halvanden time ved 15 °C udenfor."],
      ["Skal en frysebil registrere temperaturen?", "Ja. Materiel til dybfrost skal have et måleinstrument, der overvåger lufttemperaturen og opfylder EN 12830. De registrerede temperaturer skal dateres og gemmes i mindst et år."],
      ["Hvor sidder ATP-mærket på bilen?", "Udvendigt på begge sider i det forreste øverste hjørne. På en bil op til 3,5 t skal bogstaverne være mindst 50 mm og udløbsdatoen mindst 25 mm høje."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om international transport af letfordærvelige fødevarer (BEK nr. 1330 af 20/11/2025)", url: ATP, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om betaling for godkendelse og syn m.m. af transportmateriel til letfordærvelige fødevarer (BEK nr. 515 af 16/05/2023)", url: BET, dato: "2026-10-04" },
      { navn: "Fødevarestyrelsen: Hygiejnevejledningen, 30. Transport af fødevarer", url: FV30, dato: "2026-10-07" },
      { navn: "Fødevarestyrelsen: Hygiejnevejledningen, 32. ATP - international transport af letfordærvelige fødevarer", url: FV32, dato: "2026-10-07" },
      { navn: "Fødevarestyrelsen: Transportør af fødevarer", url: FVT, dato: "2026-10-07" },
      { navn: "BN: Ford Transit Ladvogn", url: BN, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer, § 5", url: SYN, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DETAIL, dato: "2026-10-07" },
      { navn: "Fyns Karosseribyg: AluTeam Ferro-Form køle- og frostkasser", url: FF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Fyns Karosseribyg: AluTeam Ferro-Form køle- og frostkasser leveres med paneltykkelser fra 30 til 85 mm og har de nødvendige ATP-godkendelser; bunden skal kunne klare store belastninger og fås med overflade af riskorn, aluplade, low noise alu eller skridsikker anti-slip glasfiber; der fås forstærkninger for køleanlæg og fast eller flytbart skillerum.", FF],
    ["ATP-bekendtgørelsen § 9: kulde- og varmeanlæg godkendes på grundlag af oplysninger om konstruktion og ydelse samt en praktisk afprøvning; godkendelsen gælder højst 6 år. § 12: godkendelsen bortfalder bl.a. ved ændring af anlæggets kapacitet og udstyr eller udskiftning til nyt anlæg af nyt serienummer eller type, og ved bortkomst eller beskadigelse af certifikatpladen.", ATP],
    ["ATP-bekendtgørelsen § 11 og bilag 5: klassifikationsmærket angiver klassen og udløbsdato (måned og år) og sidder som minimum udvendigt på begge sider i det forreste øverste hjørne; certifikatpladen angiver fabrikat, type, serienummer og fremstillingsår og har samme dokumentationsværdi som certifikatet; mærke og plade må kun bruges på det materiel, de er udleveret til, og skal fjernes, når godkendelsen er udløbet eller bortfaldet.", ATP],
    ["ATP-bekendtgørelsen § 1, stk. 3 og 4: kravene gælder ikke, hvor de forventede temperaturer under hele transporten gør isoleret materiel klart unødvendigt; søtransport er omfattet, når den er på mindre end 150 km og går forud for, følger efter eller ligger mellem landtransporter uden omladning.", ATP],
    ["Fødevarestyrelsen (afsnit 32): det er virksomhedens ansvar, at materiellet til international transport er ATP-godkendt, også når den bruger speditør eller ekstern transportør; virksomheden kan bede om at se ATP-certifikatet og kontrollere materiellets ATP-identifikationsmærke.", FV32],
    ["ATP-bekendtgørelsen § 17, stk. 2 og 5, § 18, stk. 3, og bilag 6: ved afrimning af fordamperen tolereres en kortvarig stigning på højst 3 °C i en del af lasten; kølede varer må ikke fryses noget sted i lasten; materiel til dybfrost skal have et måleinstrument til overvågning af lufttemperaturen med hyppige og regelmæssige intervaller, der lever op til EN 12830:2018 (verificeret efter EN 13486:2002), og temperaturerne skal dateres og opbevares i mindst et år.", ATP],
    ["Fødevarestyrelsen (afsnit 30): bruger virksomheden egne vogne og chauffører, har den selv ansvaret for transporten; ved ekstern transportør har transportøren ansvaret, frem til fødevarerne er afleveret til kunden.", FV30],
    ["Fødevarestyrelsen (afsnit 30): temperaturkravene ved transport mellem virksomheder afhænger af situationen (engros til engros: engroskrav; engros til detail kørt af engros eller ekstern transportør: engroskrav; kørt af detailvirksomheden selv: detailkrav; detail til detail: detailkrav, også med selvstændig transportør); til institutioner gælder temperaturen i reglerne, mærkningen eller handelspapirerne.", FV30],
    ["Fødevarestyrelsen (afsnit 30): fødevarer må kun transporteres sammen med andre varer, hvis der ikke er risiko for kontaminering; uindpakkede fødevarer kræver oftere adskillelse; køretøjet skal som hovedregel gøres grundigt rent mellem transporter af fødevarer.", FV30],
    ["Fødevarestyrelsen: registrering som transportør sker med blanketten Opstart af fødevarevirksomhed; efter registreringen sendes en kontrolinformationsblanket, som kunderne skal kunne se; egenkontrol behøver ikke altid være løbende skriftlig, hvis aktiviteterne er lavrisiko, men transportøren skal kunne redegøre for gode arbejdsgange.", FVT],
    ["ATP-bekendtgørelsen §§ 3, 14-16: det er en forudsætning for godkendelse, at materiellet opfylder kravene til hygiejnisk konstruktion: korrosionsfaste, ikke-sugende materialer, glatte overflader uden porer, tæt konstruktion, der tåler trykvask, ingen svært rengørlige lommer, frit afløb inkl. fra dørkarme, beskyttelse mod insekter og støv, væskedræn sikret mod luftindtrængning, døre med tætsluttende dobbeltpakning, der kan plomberes, og korrosionsfaste kødophæng og hylder.", ATP],
    ["ATP-bekendtgørelsen § 3, stk. 3 og § 13: ansøgninger kan sendes elektronisk til ATP-materielkontrollen via virk.dk; materiel godkendt i et andet land, der har tiltrådt ATP, ligestilles med dansk godkendt materiel, når det har klassifikationsmærke.", ATP],
    ["Fødevarestyrelsen (afsnit 32): ATP-godkendelsen for nyt materiel gælder som udgangspunkt i seks år regnet fra udstedelsesmåneden, fornyede godkendelser i tre år ad gangen; materiellet kan indkaldes til syn før udløb, og perioden kan forkortes.", FV32],
    ["ATP-mærkerne for maskinkølet materiel: F står for maskinkølet, N eller R for normal eller kraftig isolering og A-F for temperaturklassen (afledt af klasselisten i bilag 1 og 5).", ATP],
    ["ATP-bekendtgørelsen § 25: ATP-materielkontrollen opkræver betaling for godkendelse og syn på Fødevarestyrelsens vegne.", ATP],
    ["Detailforskrifterne, bilag 1, pkt. 3.02.001 (2) og (3): et køretøj må normalt højst være 2,55 m bredt; et køretøj med temperaturkontrolleret opbygning må være op til 2,60 m bredt, når sidevæggenes tykkelse inkl. isolering er mindst 45 mm.", DETAIL],
    ["ATP-bekendtgørelsen §§ 30 og 32: politiet kontrollerer, at materiel til landevejstransport mellem et EU-land og Danmark har gyldigt ATP-certifikat eller certifikatplade og klassifikationsmærker; mangler det, kan passage nægtes. Fødevarestyrelsen (afsnit 32) kan udføre stikprøvekontrol af landevejstransporter med politiet og SKAT og kan fx ved defekt kølemaskine forbyde transporten.", FV32]
  ]
};
