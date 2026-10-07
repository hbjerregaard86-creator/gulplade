// Underside /til-varebilen/folie/folie-paa-leasingbil/ (07-10-2026)
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var AYV_SIDE = `https://www.ayvens.com/da-dk/for-foerere/aflevering-af-bil/aflevering-af-din-firmabil/`;
var NF = `https://nffleet.dk/media/hezacmn3/nf_fleet_afleveringsguide_erhvervsleasing_maj2025.pdf`;
var NORD = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-via-forhandler`;
var JYSKE = `https://jyskefinans.dk/jyske-fleet/find-svar/aflevering-af-bil/`;
var AUTO = `https://jyskefinans.dk/media/g1khqudp/skadeguide-inkl-varebiler-autorola-danmark.pdf`;
var DRIV = `https://lease.drivalia.com/dk/afleveringshandbog`;
var M3 = `https://trimwel.ie/cdn/shop/files/3M_EU_PB_2080.pdf`;
var AVERY = `https://graphics.averydennison.com/content/dam/averydennison/graphics/eu/en/Data-Sheets/Supreme-Wrap/PDS-Supreme-Wrapping-Film-EN.pdf`;
var DET = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var MONT = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;

module.exports = {
  id: "folie/folie-paa-leasingbil",
  side: {
    slug: "folie-paa-leasingbil",
    navn: "Folie på leasingbil",
    titel: "Folie på leasingbil: fjernelse og gebyrer",
    kort: `Her kan du se, hvad leasingselskaberne kræver af logo og folie ved afleveringen, hvad de tager for at fjerne den, og hvordan lakken bliver vurderet.`,
    beskrivelse: `Logo og folie på en leaset varebil skal af før aflevering. Gebyrer fra 400 til 3.500 kr. hos Ayvens og NF Fleet, skadeskalaen og grænserne for lakskader.`,
    manchet: `Leasingselskaberne kræver logo og folie fjernet, før varebilen afleveres. Gør leasingselskabet det selv, koster det hos Ayvens og NF Fleet fra 400 kr. for et CVR-nummer til 3.500 kr. for fuld dekoration. Her er vilkårene fra selskabernes egne afleveringsguides, og alle priser på siden er uden moms.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Fjernelse af CVR-nummer", "400 kr.", "hos Ayvens og NF Fleet"],
        ["Fjernelse af fuld dekoration", "3.500 kr.", "hos Ayvens og NF Fleet"],
        ["Dyb ridse, varebil", "over 25 mm", "faktureres hos Ayvens"],
        ["Bule, varebil", "over 30 mm", "faktureres, hvis den kræver lakering"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Folien skal af",
        tekst: [
          `Når leasingperioden slutter, skal bilen tilbage i den stand, leasingselskabet beskriver i sin afleveringsguide. Logo og folie hører til det, der skal være fjernet, og selskaberne skriver det på hver deres måde.`
        ],
        punkter: [
          `<strong>Nordania.</strong> »Logo og eventuel foliering skal også være fjernet« før aflevering.`,
          `<strong>Jyske Fleet.</strong> Bilen skal være ryddet, og personlige ejendele og klistermærker skal være fjernet.`,
          `<strong>Ayvens og NF Fleet.</strong> Har gebyrer for at afmontere CVR-nummer og logo, hvis det ikke er gjort.`,
          `<strong>Autorola.</strong> Skriver i sin skadeguide, at påklistret reklame og foliering kan få betydning for gensalgsværdien, og henviser til leasingselskabets egne krav.`
        ],
        efter: [
          `Ayvens skriver desuden, at skader skal være udbedret, før bilen afleveres, og at udstyr, du selv har tilføjet i leasingperioden, skal fjernes. Er det ikke afmonteret, udløser det et gebyr.`
        ]
      },
      {
        overskrift: "Gebyrer for afmontering",
        tekst: [
          `Ayvens og NF Fleet har samme gebyrliste for at afmontere folie. Et CVR-nummer koster 400 kr., og et logo koster 600, 1.200 eller 1.800 kr. efter størrelse. Fuld dekoration koster 3.500 kr.`,
          `Gebyrlisterne beskriver ikke, hvor stort et lille, mellem eller stort logo er. Timeprisen for ekstraordinære serviceydelser er 850 kr., og manglende afmontering af ekstra udstyr koster 1.500 kr.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Ayvens", "NF Fleet"],
          raekker: [
            ["Afmontering af CVR-nr.", "400 kr.", "400 kr."],
            ["Afmontering af logo, lille", "600 kr.", "600 kr."],
            ["Afmontering af logo, mellem", "1.200 kr.", "1.200 kr."],
            ["Afmontering af logo, stor", "1.800 kr.", "1.800 kr."],
            ["Afmontering af logo, fuld", "3.500 kr.", "3.500 kr."],
            ["Manglende afmontering af ekstra udstyr", "1.500 kr.", "1.500 kr."],
            ["Timepris, ekstraordinære serviceydelser", "850 kr.", "850 kr."]
          ],
          note: `Kilder: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a> (priser fra juni 2025) og <a href="${NF}" rel="noopener">NF Fleet afleveringsguide</a> (gebyrliste fra maj 2025), set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Afmontering af CVR-nr.", 400],
            ["Afmontering af logo, lille", 600],
            ["Afmontering af logo, mellem", 1200],
            ["Afmontering af logo, stor", 1800],
            ["Afmontering af logo, fuld", 3500],
            ["Ekstra udstyr, der ikke er afmonteret", 1500],
            ["Timepris, ekstraordinære serviceydelser", 850, "pr. time"]
          ],
          note: `Gebyrerne er de samme hos Ayvens og NF Fleet. Kilder: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a> (priser fra juni 2025) og <a href="${NF}" rel="noopener">NF Fleet afleveringsguide</a> (gebyrliste fra maj 2025), set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Selv eller leasingselskabet",
        tekst: [
          `Virksomheden kan få folien fjernet før afleveringen eller lade leasingselskabet gøre det mod gebyr. Fjernes folien først, falder gebyret for afmontering bort, men lakken bliver vurderet efter de samme grænser som ellers.`,
          `Montagegruppen anbefaler, at folien fjernes af professionelle, så lakken forbliver intakt. 3M skriver, at 2080-folien fjernes med varme og/eller kemikalier. Faste priser på at få et foliefirma til at fjerne folien har vi ikke fundet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Beslutningstræ. Er logo og folie fjernet før afleveringen, er der intet gebyr for afmontering. Er de ikke fjernet, fjerner leasingselskabet folien mod et gebyr på 400 til 3.500 kr. Lakken vurderes i begge tilfælde."><defs><marker id="pil-leasing-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="60" y="6" width="280" height="46"/><text x="200" y="25" text-anchor="middle">Er logo og folie fjernet</text><text class="tg-fremhaev" x="200" y="42" text-anchor="middle">før afleveringen?</text><line class="tg-pil" x1="150" y1="52" x2="98" y2="92" marker-end="url(#pil-leasing-1)"/><line class="tg-pil" x1="250" y1="52" x2="302" y2="92" marker-end="url(#pil-leasing-1)"/><text x="116" y="74" text-anchor="end">Ja</text><text x="284" y="74">Nej</text><rect class="tg-kasse" x="6" y="96" width="184" height="64"/><text x="98" y="116" text-anchor="middle">Intet gebyr for</text><text x="98" y="132" text-anchor="middle">afmontering, lakken</text><text x="98" y="148" text-anchor="middle">vurderes som ellers</text><rect class="tg-modul" x="210" y="96" width="184" height="64"/><text class="tg-modul__tekst" x="302" y="116" text-anchor="middle">Leasingselskabet</text><text class="tg-modul__tekst" x="302" y="132" text-anchor="middle">fjerner folien mod</text><text class="tg-modul__tekst" x="302" y="148" text-anchor="middle">gebyr: 400–3.500 kr.</text><text class="tg-lille" x="6" y="194">GEBYRER HOS AYVENS OG NF FLEET (2025)</text></svg>`,
          tekst: `Skematisk. Gebyrerne gælder, når leasingselskabet selv fjerner folien. Kilder: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a> og <a href="${NF}" rel="noopener">NF Fleet afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Folien og leasingperioden",
        tekst: [
          `Folien skal sidde, så længe bilen er leaset, og derefter af igen. Producenterne angiver 8 år for 3M 2080 og 10 år for farvet Supreme Wrapping Film fra Avery Dennison på lodrette flader, mens metallic og perlemor fra Avery Dennison har 5 år.`,
          `Montagegruppen skriver, at bilfolie generelt holder 3–7 år eller længere, afhængigt af kvalitet og vedligeholdelse. Kampagnefolie er beregnet til kortere tid og koster fra 195 kr. pr. m² hos Montagegruppen, mens 7-års folie med laminat koster fra 260 kr. pr. m².`,
          `Avery Dennison skriver, at limen på Supreme Wrapping Film kan fjernes igen i hele produktets levetid. Det har betydning på en leasingbil, fordi folien skal af igen, når bilen afleveres.`
        ]
      },
      {
        overskrift: "Hvem gennemgår bilen",
        tekst: [
          `Ayvens og NF Fleet lader FDM gennemgå bilen og lave en tilstandsrapport. Jyske Fleet henviser til Autorolas skadeguide. Drivalia lader en uvildig samarbejdspartner gennemgå bilen og beregner skader i FORSI, forsikringsselskabernes fælles prisliste.`,
          `Det er gennemgangen, der afgør, om mærker efter folien er almindeligt slid eller en skade, virksomheden skal betale for. Derfor er det de samme grænser, der gælder for lakken under folien som for resten af bilen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Selskab", "Hvem gennemgår bilen"],
          raekker: [
            ["Ayvens", "FDM, som laver en tilstandsrapport"],
            ["NF Fleet", "FDM, som laver en tilstandsrapport"],
            ["Jyske Fleet", "Henviser til Autorolas skadeguide"],
            ["Drivalia", "En uvildig samarbejdspartner. Skaderne beregnes i FORSI"]
          ]
        }
      },
      {
        overskrift: "Gennemgangen hos FDM",
        tekst: [
          `Hos Ayvens gennemgår FDM bilen i et testcenter på det tidspunkt, der er booket. Brugeren eller en repræsentant fra virksomheden kan være med, eller bilen kan afleveres uden fremmøde ved drop off. Anmærkningerne kvitteres online, og virksomhedens kontaktperson får en elektronisk afleveringsrapport.`,
          `Ayvens anbefaler at booke en aflevering med gennemgang, så du selv ser anmærkningerne, og en aflevering tager ca. 30 minutter. Bilen skal retur senest på kontraktens udløbsdato. Falder datoen på en weekend eller helligdag, eller er der ingen ledige tider, skal bilen afleveres tidligere, og folien skal være fjernet inden da.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Folien af", "Logo og foliering fjernes, før bilen afleveres."],
            ["Vask", "Bilen afleveres nyvasket. Ellers koster det 750 kr. hos Ayvens og NF Fleet."],
            ["Gennemgang", "FDM gennemgår bilen i et testcenter."],
            ["Rapport", "Anmærkninger kvitteres online. Rapporten sendes elektronisk."],
            ["Faktura", "Skader ud over almindeligt slid faktureres."]
          ]
        }
      },
      {
        overskrift: "Sådan vurderes lakken på en varebil",
        tekst: [
          `Ayvens’ guide har egne grænser for varebiler. Almindeligt slid accepteres. Følgende accepteres ikke og faktureres:`
        ],
        punkter: [
          `Flere buler på hver karrosseridel og buler over 30 mm, der ikke kan rettes uden lakering.`,
          `Dybe ridser over 25 mm, der ikke kan poleres væk.`,
          `Lakskader fra fugleklatter, der er trængt ind og kræver lakering.`,
          `På kofanger og frontgitter: deformationer og revner, der kræver udskiftning, og dybe ridser over 25 mm. Læssekanten er undtaget.`
        ],
        punkt_ikon: "nej"
      },
      {
        overskrift: "Varebilen har andre grænser end personbilen",
        tekst: [
          `Ayvens’ afleveringsguide har egne grænser for varebiler. På en personbil faktureres buler og dybe ridser over 10 mm. På en varebil faktureres dybe ridser over 25 mm og buler over 30 mm, der kræver lakering.`,
          `På en personbil accepterer Ayvens ridser, mindre buler og stenslag op til 10 mm. Varebilens grænser er altså to og en halv og tre gange så høje som personbilens.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="Lakflade med tre streger, der viser grænserne 10 mm, 25 mm og 30 mm for skader ved aflevering"><rect class="tg-profil" x="20" y="16" width="360" height="136"/><text x="50" y="40">10 mm · personbil: ridse eller bule</text><line class="tg-doer" x1="50" y1="50" x2="130" y2="50"/><text x="50" y="80">25 mm · varebil: dyb ridse</text><line class="tg-doer" x1="50" y1="90" x2="250" y2="90"/><text x="50" y="120">30 mm · varebil: bule</text><line class="tg-doer" x1="50" y1="130" x2="290" y2="130"/><line class="tg-gulvlinje" x1="50" y1="172" x2="290" y2="172"/><line class="tg-gulvlinje" x1="50" y1="166" x2="50" y2="172"/><line class="tg-gulvlinje" x1="90" y1="166" x2="90" y2="172"/><line class="tg-gulvlinje" x1="130" y1="166" x2="130" y2="172"/><line class="tg-gulvlinje" x1="170" y1="166" x2="170" y2="172"/><line class="tg-gulvlinje" x1="210" y1="166" x2="210" y2="172"/><line class="tg-gulvlinje" x1="250" y1="166" x2="250" y2="172"/><line class="tg-gulvlinje" x1="290" y1="166" x2="290" y2="172"/><text x="50" y="190" text-anchor="middle">0</text><text x="90" y="190" text-anchor="middle">5</text><text x="130" y="190" text-anchor="middle">10</text><text x="170" y="190" text-anchor="middle">15</text><text x="210" y="190" text-anchor="middle">20</text><text x="250" y="190" text-anchor="middle">25</text><text x="290" y="190" text-anchor="middle">30</text><text x="310" y="190">mm</text></svg>`,
          tekst: `Skematisk, mm-skala. Grænser fra Ayvens’ afleveringsguide for erhverv, person- og varebiler. Kilde: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Skadeskalaen K0–K5",
        tekst: [
          `Nordania inddeler skader i kategorier fra K0 (fejlfri) til K5 og gennemgår bilen både udvendigt og indvendigt. Nordania opkræver ikke for skader i K1–K3.`,
          `For en bil, der har haft folie, betyder skalaen, at småridser og mærker, der kan fjernes ved almindelig klargøring, ligger i K1. Dele, der skal lakeres, ligger i K4.`
        ],
        kort: [
          ["K1", "Mærker og småridser, der helt eller delvist kan udbedres ved almindelig klargøring."],
          ["K2", "Stenslag, mærker og ridser i lakken, der ikke helt kan fjernes ved almindelig klargøring."],
          ["K3", "Større stenslag, trykbuler og ridser i lakken. Smart repair kan bruges."],
          ["K4", "Dele, der skal repareres eller rettes og lakeres."],
          ["K5", "Manglende dele eller dele, der ikke kan repareres."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Skala med Nordanias skadekategorier fra K0 til K5. Nordania opkræver ikke for skader i K1 til K3. K4 og K5 er dele, der skal repareres og lakeres eller udskiftes."><line class="tg-skinne" x1="80" y1="56" x2="256" y2="56"/><text x="168" y="44" text-anchor="middle">Nordania opkræver ikke</text><rect class="tg-kasse" x="20" y="70" width="56" height="40"/><rect class="tg-modul" x="80" y="70" width="56" height="40"/><rect class="tg-modul" x="140" y="70" width="56" height="40"/><rect class="tg-modul" x="200" y="70" width="56" height="40"/><rect class="tg-kasse" x="260" y="70" width="56" height="40"/><rect class="tg-kasse" x="320" y="70" width="56" height="40"/><text class="tg-fremhaev" x="48" y="95" text-anchor="middle">K0</text><text class="tg-modul__tekst" x="108" y="95" text-anchor="middle">K1</text><text class="tg-modul__tekst" x="168" y="95" text-anchor="middle">K2</text><text class="tg-modul__tekst" x="228" y="95" text-anchor="middle">K3</text><text class="tg-fremhaev" x="288" y="95" text-anchor="middle">K4</text><text class="tg-fremhaev" x="348" y="95" text-anchor="middle">K5</text><text x="48" y="134" text-anchor="middle">Fejlfri</text><text x="168" y="134" text-anchor="middle">Mærker, ridser og stenslag</text><text x="168" y="150" text-anchor="middle">smart repair ved K3</text><text x="318" y="134" text-anchor="middle">Reparation</text><text x="318" y="150" text-anchor="middle">eller udskiftning</text><text class="tg-lille" x="20" y="180">NORDANIAS SKADEKATEGORIER</text></svg>`,
          tekst: `Skematisk. Den stiplede linje markerer de kategorier, Nordania ikke opkræver for. Kilde: <a href="${NORD}" rel="noopener">Nordania: Aflevering af leaset bil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Limrester og fjernelse",
        tekst: [
          `Afleveringsguides fra Ayvens, NF Fleet, Drivalia og Autorola nævner ikke limrester særskilt. Skader på lakken vurderes efter de samme grænser som andre lakskader.`,
          `3M skriver, at 2080-wrapfolie kan fjernes med varme og/eller kemikalier fra de fleste overflader inden for garantiperioden. Avery Dennison beskriver Supreme Wrapping Film med lang tids aftagelighed i produktets levetid.`,
          `Montagegruppen skriver, at lakken under folien normalt fremstår som ny, når folien fjernes korrekt. Holdbarheden og producenternes tal står i <a href="/til-varebilen/folie/helfoliering-af-varebil/">helfoliering af varebil</a>.`
        ]
      },
      {
        overskrift: "Huller og udskæringer",
        tekst: [
          `Jyske Fleet skriver, at eftermonteret udstyr afleveres med bilen, og at skader fra udstyret, fx en udskæring til anhængertræk, takseres som skade. Ayvens accepterer ikke synlige monteringshuller eller mærker fra eftermonteret udstyr i kabinen. I varerummet accepteres tilfredsstillende udbedrede monteringshuller fra udstyr og reoler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Varebil set fra siden med monteringshuller i kabinen og i varerummet og en udskæring til anhængertræk bagpå"><path class="tg-profil" d="M30,170 L30,126 Q32,118 50,115 L84,76 Q87,73 93,73 L340,73 Q346,73 346,79 L346,170 Z"/><path class="tg-kasse" d="M88,80 L118,80 L118,108 L60,111 Z"/><line class="tg-skinne-tynd" x1="130" y1="75" x2="130" y2="168"/><circle class="tg-kasse" cx="98" cy="135" r="2"/><circle class="tg-kasse" cx="114" cy="135" r="2"/><circle class="tg-kasse" cx="216" cy="120" r="2"/><circle class="tg-kasse" cx="236" cy="120" r="2"/><rect class="tg-hylde" x="346" y="158" width="16" height="6"/><circle class="tg-hylde" cx="366" cy="161" r="4"/><circle class="tg-hylde" cx="78" cy="172" r="14"/><circle class="tg-hylde" cx="290" cy="172" r="14"/><line class="tg-gulvlinje" x1="10" y1="186" x2="390" y2="186"/><g class="tg-call"><line x1="226" y1="120" x2="226" y2="44"/><circle cx="226" cy="120" r="3"/><text class="tg-call__navn" x="150" y="22">Varerum</text><text class="tg-call__under" x="150" y="36">udbedrede huller accepteres</text></g><g class="tg-call"><line x1="106" y1="135" x2="106" y2="196"/><circle cx="106" cy="135" r="3"/><text class="tg-call__navn" x="20" y="210">Kabine</text><text class="tg-call__under" x="20" y="224">synlige huller accepteres ikke</text></g><g class="tg-call"><line x1="366" y1="165" x2="366" y2="196"/><circle cx="366" cy="161" r="3"/><text class="tg-call__navn" x="390" y="210" text-anchor="end">Udskæring til træk</text><text class="tg-call__under" x="390" y="224" text-anchor="end">takseres som skade</text></g></svg>`,
          tekst: `Skematisk. Ayvens accepterer tilfredsstillende udbedrede monteringshuller i varerummet, men ikke synlige huller i kabinen. Jyske Fleet takserer en udskæring til anhængertræk som skade.`
        }
      },
      {
        overskrift: "Privat udstyr",
        tekst: [
          `Ayvens skriver, at privat udstyr eller tilbehør må beholdes, hvis det kan tages af uden at skade bilen. Udstyr, der ikke er afmonteret, koster 1.500 kr. efter Ayvens’ og NF Fleets gebyrlister.`,
          `Ekstraudstyr, der hører til bilen, skal derimod med tilbage. Ayvens nævner fx aftageligt træk med nøgle, tagbøjler og indretning på sin huskeliste. Mere om udgifter ud over ydelsen i <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a>.`
        ]
      },
      {
        overskrift: "Andre gebyrer ved afleveringen",
        tekst: [
          `Ud over folien har afleveringsguiderne gebyrer for rengøring og for ændringer af bilen. Ved ulovlige konstruktionsændringer kommer udgiften til at udbedre dem oveni gebyret.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Manglende vask og støvsugning", "750", "kr."],
            ["Specialrengøring af en særlig beskidt bil", "2.500", "kr."],
            ["Ulovlige konstruktionsændringer", "2.500", "kr. plus udbedring"]
          ],
          note: `Gebyrerne er ens hos Ayvens og NF Fleet. Kilder: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a> (priser fra juni 2025) og <a href="${NF}" rel="noopener">NF Fleet afleveringsguide</a> (gebyrliste fra maj 2025), set den 4. oktober 2026.`
        },
        efter: [
          `Film på forruden eller de forreste sideruder strider mod detailforskrifterne. Du kan læse reglerne i <a href="/til-varebilen/folie/solfilm-paa-ruder/">solfilm på ruder</a>.`
        ]
      },
      {
        overskrift: "Skader og kaskoforsikringen",
        tekst: [
          `Nordania beskriver to måder at håndtere skaden på. Skal bilens kaskoforsikring dække skaden, anmelder du den til forsikringsselskabet og tager skadesnummeret med til afleveringen. Forsikringsselskabet kan derefter opkræve selvrisiko.`,
          `Har aftalen en særlig tilvalgsdækning for skader ved aflevering, anmelder du først skaden efter gennemgangen og bruger tilstandsrapporten som dokumentation. Tilvalgene står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Kaskoforsikringen dækker", "Særlig tilvalgsdækning"],
          raekker: [
            ["Skaden anmeldes", "Til forsikringsselskabet", "Efter gennemgangen"],
            ["Dokumentation", "Skadesnummeret tages med til afleveringen", "Tilstandsrapporten"]
          ],
          note: `Nordania beskriver de to måder at håndtere skaden på. Kilde: <a href="${NORD}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Et eksempel med ti varebiler",
        tekst: [
          `Her er et eksempel med Ayvens’ og NF Fleets gebyrer. En virksomhed afleverer ti varebiler med et stort logo, og leasingselskabet fjerner folien. Det koster 10 × 1.800 kr. = 18.000 kr.`,
          `Afleveres tre af bilerne også uvaskede, kommer 3 × 750 kr. = 2.250 kr. oveni, i alt 20.250 kr. Med fuld dekoration på alle ti biler ville afmonteringen alene koste 10 × 3.500 kr. = 35.000 kr.`,
          `Skal NF Fleet have flere biler retur på én gang, kan tiden bestilles hos FDM på telefon 70 13 30 40.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leasingselskabet svare på",
    spoergsmaal_manchet: "Så kendes udgiften til folien, før kontrakten skrives under.",
    spoergsmaal: [
      "Om folie og logo skal fjernes før aflevering, eller om selskabet gør det mod gebyr.",
      "Gebyret for at fjerne CVR-nummer, logo og fuld dekoration.",
      "Hvad selskabet forstår ved et lille, mellem og stort logo.",
      "Hvem der gennemgår bilen, og efter hvilken skadeskala.",
      "Om helfoliering kræver selskabets godkendelse.",
      "Hvordan huller fra udstyr på karrosseriet vurderes."
    ],
    faq: [
      ["Skal folien af, før leasingbilen afleveres?", "Ja. Nordania skriver, at logo og foliering skal være fjernet. Ayvens og NF Fleet har gebyrer, hvis de selv skal fjerne det."],
      ["Hvad koster det, hvis leasingselskabet fjerner logoet?", "Hos Ayvens og NF Fleet 400 kr. for CVR-nummer, 600–1.800 kr. for logo og 3.500 kr. for fuld dekoration (gebyrlister fra maj og juni 2025)."],
      ["Hvem vurderer skaderne?", "FDM for Ayvens og NF Fleet. Jyske Fleet henviser til Autorolas skadeguide."],
      ["Accepteres ridser i lakken på en varebil?", "Ayvens accepterer almindeligt slid. Dybe ridser over 25 mm, der ikke kan poleres væk, faktureres."],
      ["Må udstyr blive siddende?", "Ayvens lader dig beholde privat udstyr, hvis det kan tages af uden at skade bilen. Jyske Fleet takserer skader fra udstyret som skade på bilen."],
      ["Hvor lange ridser accepteres på en leaset varebil?", "Hos Ayvens faktureres dybe ridser over 25 mm, der ikke kan poleres væk, og buler over 30 mm, der kræver lakering. For personbiler er grænsen 10 mm."],
      ["Hvad koster det at aflevere bilen uvasket?", "Ayvens og NF Fleet tager 750 kr., hvis bilen ikke er vasket og støvsuget."],
      ["Kan folien fjernes, før bilen afleveres?", "Ja. Så falder leasingselskabets gebyr for afmontering bort, men lakken vurderes som ellers. Montagegruppen anbefaler, at folien fjernes af professionelle."]
    ],
    kilder: [
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV, dato: "2026-10-07" },
      { navn: "Ayvens: Aflevering af din firmabil", url: AYV_SIDE, dato: "2026-10-04" },
      { navn: "NF Fleet: Afleveringsguide, leasingbiler, erhverv (maj 2025)", url: NF, dato: "2026-10-07" },
      { navn: "Nordania: Aflevering af leaset bil", url: NORD, dato: "2026-10-07" },
      { navn: "Jyske Fleet: Aflevering af bil", url: JYSKE, dato: "2026-10-04" },
      { navn: "Autorola Danmark: Skadeguide inkl. varebiler", url: AUTO, dato: "2026-10-04" },
      { navn: "Drivalia: Afleveringshåndbog", url: DRIV, dato: "2026-10-04" },
      { navn: "3M: Wrap Film Series 2080, Product Bulletin (november 2023)", url: M3, dato: "2026-10-07" },
      { navn: "Avery Dennison: Supreme Wrapping Film, Product Data Sheet", url: AVERY, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DET, dato: "2026-10-04" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MONT, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Ayvens: skader skal være udbedret og serviceeftersyn overholdt, inden bilen afleveres.", AYV],
    ["Ayvens: udstyr, du selv har tilføjet i leasingperioden, skal fjernes; er det ikke afmonteret, udløser det et gebyr (jf. gebyrlisten).", AYV],
    ["Ayvens' og NF Fleets gebyrlister angiver afmontering af logo, lille, mellem, stor og fuld uden at beskrive størrelserne.", AYV],
    ["Montagegruppen anbefaler, at folien fjernes af professionelle for at sikre, at lakken forbliver intakt, og skriver, at lakken under normalt fremstår som ny, når folien fjernes korrekt.", MONT],
    ["Ayvens (personbil): ridser op til 10 mm, mindre buler op til 10 mm og stenslag op til 10 mm accepteres.", AYV],
    ["Nordania gennemgår bilen både udvendig og indvendig.", NORD],
    ["Ayvens' huskeliste: ekstraudstyr, fx aftageligt træk inkl. nøgle, tagbøjler og indretning, skal afleveres med bilen.", AYV],
    ["Nordania: anmeldes skaden til kaskoforsikringen, kan forsikringsselskabet efterfølgende eventuelt opkræve selvrisiko.", NORD],
    ["Ayvens anbefaler at booke aflevering med gennemgang; en aflevering tager ca. 30 minutter; bilen skal retur senest på kontraktudløbsdatoen, og falder den på weekend eller helligdag eller er der ingen ledige tider, skal bilen retur tidligere.", AYV],
    ["NF Fleet: skal flere biler afleveres på én gang, kan der bestilles tid hos FDM på tlf. 70 13 30 40.", NF],
    ["3M angiver 8 år for 2080 og Avery Dennison 10 år for farver og 5 år for metallic og perlemor i Supreme Wrapping Film (lodret flade).", AVERY],
    ["Montagegruppen: bilfolie kan generelt holde 3-7 år eller længere afhængigt af kvalitet og vedligeholdelse; kampagnefolie fra 195 kr. og 7 års folie med laminat fra 260 kr. (pr. m², ekskl. moms).", MONT],
    ["Avery Dennison: Supreme Wrapping Film har lang tids aftagelighed (long term removability) i hele produktets levetid.", AVERY],
    ["Regneeksempel med Ayvens' og NF Fleets gebyrer: 10 × 1.800 kr. (logo, stor) = 18.000 kr.; 3 × 750 kr. (manglende vask og støvsugning) = 2.250 kr.; i alt 20.250 kr.; 10 × 3.500 kr. (logo, fuld) = 35.000 kr.", AYV]
  ]
};
