// Underside /til-varebilen/ombygning/lad-og-tipper/ (07-10-2026)
var BN = `https://www.bn.dk/erhverv/nye-varebiler/ford/transit-ladvogn`;
var RENAULT = `https://www.renault.dk/biler/varevogne/master-chassis`;
var BILSTRUP = `https://bilstrup-karosseri.dk/galleri/tiplad`;
var FYNS = `https://fyns-karosseribyg.dk/tiplad/`;
var ALU = `https://fyns-karosseribyg.dk/brands/alu-team/letisolerede-kasser/`;
var B750 = `https://www.bar-cargolift.dk/lift-750kg`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var BEK428 = `https://www.retsinformation.dk/eli/lta/2022/428`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var JV = `https://info.skat.dk/data.aspx?oid=1947288`;

module.exports = {
  id: "ombygning/lad-og-tipper",
  side: {
    slug: "lad-og-tipper",
    navn: "Lad og tipper",
    titel: "Varebil med lad eller tipper: typer og nyttelast",
    kort: `Chassis med førerhus, alu-lad, bagtipper og 3-vejs tipper: typer, tipkapacitet, nyttelast, krav til ladet og godkendelse.`,
    beskrivelse: `Ladvogn og tipper på chassis med førerhus: Ford Transit Chassis fra 296.393 kr., nyttelast op til 2.755 kg, tipkapacitet, krav og registreringssyn.`,
    manchet: `En ladvogn eller tipper bygges på et chassis med førerhus, enten fra fabrikken eller hos en karrosseriopbygger. Chassiset fås med enkelt- eller dobbeltkabine, og opbygningen afgør, hvor meget nyttelast der er tilbage. Her kan du se typerne, tallene og de regler, der gælder for ladet, tipperen og synet.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Ford Transit Chassis", "fra 296.393 kr.", "uden opbygning"],
        ["Nyttelast før opbygning", "op til 2.755 kg", "Ford Transit Chassis, Trend og Trail"],
        ["Tipper med saks", "3,5 og 5,0 t", "kapacitet hos Bilstrup Karosseri"],
        ["Registreringssyn", "over 50 kg", "ændret egenvægt kræver syn"]
      ],
      toc: true,
      stribe: { ids: ["renault-master-chassis", "iveco-daily-ladbil", "renault-master-e-tech-chassis"], titel: "Ladvogne med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "Chassis med førerhus",
        tekst: [
          `Producenterne sælger de store varebiler som chassis, der skal have en opbygning bag kabinen. Forhandleren kan levere bilen færdigopbygget, eller en karrosseriopbygger kan bygge lad eller tipper på bagefter.`,
          `Ford Transit Chassis fås fra L2 til L5 i akselafstand, med enkelt- eller tvillingbaghjul og flere kabinetyper. Toyota Proace Max kommer i Danmark som kassevogn, chassis og chassis med dobbeltkabine.`,
          `BN skriver, at alle udgaver af Transit Chassis har en chassisramme, der giver et plant og stærkt fundament for opbygningen. Ford har udviklet bilen sammen med karrosseriopbyggere, så standardopbygninger kan monteres uden eller med små ændringer.`
        ],
        tabel: {
          kolonner: ["Chassis", "Fra", "Maks. nyttelast"],
          raekker: [
            ["Ford Transit Chassis, Trend", "296.393 kr.", "2.755 kg"],
            ["Ford Transit Chassis, Trail", "322.199 kr.", "2.755 kg"],
            ["Ford Transit Chassis, 5 t totalvægt", "–", "2.960 kg"]
          ],
          note: `Kilde: <a href="${BN}" rel="noopener">BN (Bjarne Nielsen)</a>, vejledende priser uden opbygning, set den 4. oktober 2026. Alle priser på siden er uden moms. Nyttelasten er før opbygning.`
        },
        efter: [
          `Nyttelasten på et chassis er før lad, tipper eller kasse. Opbygningen trækkes fra. Med 5 tons totalvægt er bilen ikke længere en varebil på 3.500 kg, se <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`
        ]
      },
      {
        overskrift: "Transit Chassis: motor og kabine",
        tekst: [
          `Transit Ladvogn har en 2,0 liters EcoBlue-dieselmotor med op til 170 hk, og den fås med manuelt gear eller automatgear. Til tunge opgaver kan man vælge en HDT-motor, som BN beskriver som lavet til trækkraft.`,
          `Kabinen har én sæderække. Med dobbeltsædet er der plads til tre personer, og i stedet kan man vælge et justerbart enkeltsæde. Trend er standardudstyret, og Trail har bl.a. et mekanisk begrænset spærredifferentiale, der giver bedre vejgreb.`,
          `Gennem Fords specialprogram SVO kan bilen få udstyr til opbygningen, fx et ekstra sikringspanel, batterirelæ og omdrejningskontrol. BN leverer bilen med lad med eller uden rig og presenning, med kasse eller med andre opbygninger.`
        ],
        efter: [
          `Kilde: <a href="${BN}" rel="noopener">BN: Ford Transit Ladvogn</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Typer af opbygning",
        tekst: [
          `Opbygningen vælges efter det, bilen skal køre med. Et fast lad passer til materialer og maskiner, der løftes eller køres op, mens en tipper læsser løse materialer af ved at vippe ladet.`
        ],
        kort: [
          ["Fast lad", "Lad med faldsider i aluminium eller stål. Til materialer, paller og maskiner, der løftes eller køres på."],
          ["Bagtipper", "Ladet tipper bagud. Til sand, grus, jord og affald."],
          ["3-vejs tipper", "Ladet tipper bagud og til begge sider. Til læsning af materialer langs en vej eller på en byggeplads."],
          ["Tipper med saks", "Tipcylinder med saksesystem giver lav byggehøjde. Bilstrup Karosseri leverer den i 3,5 og 5,0 t."],
          ["Lad med kran", "Forlænget hjælperamme forberedt til kran. Fyns Karosseribyg leverer tiplad med hjælperamme til kran, se <a href=\"/til-varebilen/ombygning/ladbil-med-kran/\">ladbil med kran</a>."],
          ["Lad med lift", "Lift bag på ladet. Bär har 750 kg-lifte til chassis fra 3,5 t, se <a href=\"/til-varebilen/ombygning/bagsmaeklift/\">bagsmæklift</a>."]
        ]
      },
      {
        overskrift: "Tipladet fra siden",
        tekst: [
          `Ladet tipper om et drejepunkt bagerst og løftes af en tipcylinder. På en 3-vejs tipper kan ladet også tippe til begge sider, så materialet kan læsses af langs en vej eller på en byggeplads.`,
          `Under ladet ligger en hjælperamme, som er monteret på bilens chassisramme. Den kan forlænges, når der også skal være en kran på bilen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="Chassis med førerhus og et lad, der tipper bagud om et drejepunkt bagerst, løftet af en tipcylinder. Lille tegning set oppefra viser de tre tipretninger på en 3-vejs tipper"><defs><marker id="pil-lad-og-tipper-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="30" y="85" width="72" height="75" rx="6" class="tg-rum"/><line x1="30" y1="160" x2="365" y2="160" class="tg-gulvlinje"/><rect x="110" y="155" width="240" height="5" class="tg-hylde"/><circle cx="70" cy="176" r="18" class="tg-kasse"/><circle cx="295" cy="176" r="18" class="tg-kasse"/><line x1="10" y1="194" x2="430" y2="194" class="tg-gulvlinje"/><rect x="110" y="130" width="240" height="25" fill="none" class="tg-skinne-tynd"/><polygon points="118,93 125,69 357,131 350,155" class="tg-modul"/><line x1="230" y1="156" x2="228" y2="124" class="tg-doer"/><circle cx="350" cy="155" r="4" class="tg-hylde"/><rect x="300" y="16" width="90" height="40" class="tg-kasse"/><g class="tg-maal"><line x1="390" y1="36" x2="420" y2="36" marker-end="url(#pil-lad-og-tipper-1)"/><line x1="345" y1="16" x2="345" y2="5" marker-end="url(#pil-lad-og-tipper-1)"/><line x1="345" y1="56" x2="345" y2="67" marker-end="url(#pil-lad-og-tipper-1)"/></g><text x="345" y="40" text-anchor="middle" class="tg-lille">3-VEJS</text><g class="tg-call"><line x1="200" y1="105" x2="180" y2="40"/><circle cx="200" cy="105" r="3"/><text x="130" y="24" class="tg-call__navn">Tippet lad</text><text x="130" y="39" class="tg-call__under">bagtip</text></g><g class="tg-call"><line x1="229" y1="140" x2="240" y2="222"/><circle cx="229" cy="140" r="3"/><text x="246" y="226" class="tg-call__navn">Tipcylinder</text></g><g class="tg-call"><line x1="150" y1="158" x2="120" y2="222"/><circle cx="150" cy="158" r="3"/><text x="20" y="226" class="tg-call__navn">Hjælperamme</text></g></svg>`,
          tekst: `Skematisk. Tegningen viser et bagtip set fra siden, hvor ladets vandrette stilling er stiplet, og de tre tipretninger set oppefra.`
        }
      },
      {
        overskrift: "Tipkapacitet",
        tekst: [
          `Tipperens kapacitet er, hvad tipmekanismen kan løfte. Den er ikke bilens nyttelast. På en 3.500 kg-bil er det nyttelasten, der sætter grænsen.`,
          `Bilstrup Karosseri bygger tippere fra 3,5 til 20 tons tipkapacitet til chassis fra 3,5 til 32 tons. De to mindste størrelser har saksesystem og dermed lav byggehøjde. Fra 5,0 tons og op bruger Bilstrup en teleskopcylinder.`
        ],
        tabel: {
          kolonner: ["Opbygger", "Tipper", "Kapacitet", "Til chassis"],
          raekker: [
            ["Bilstrup Karosseri", "Saksesystem, bagtip eller 3-vejs", "3,5 og 5,0 t", "fra 3,5 t"],
            ["Bilstrup Karosseri", "Teleskopcylinder", "5,0–15 t", "op til 32 t"],
            ["Fyns Karosseribyg", "Henschel letvægtstiplad", "2,5 t", "lastbil"],
            ["Fyns Karosseribyg", "FKB tiplad, 3-vejs", "2,5–10 t", "lastbil"]
          ],
          note: `Kilder: <a href="${BILSTRUP}" rel="noopener">Bilstrup Karosseri</a> og <a href="${FYNS}" rel="noopener">Fyns Karosseribyg</a>, set den 4. oktober 2026. Ingen af dem oplyser priser.`,
          visning: "kort"
        },
        figur: {
          type: "soejler",
          enhed: "t",
          data: [
            ["Saksesystem", 3.5, "lav byggehøjde"],
            ["Saksesystem", 5, "lav byggehøjde"],
            ["Teleskopcylinder", 5],
            ["Teleskopcylinder", 8],
            ["Teleskopcylinder", 10],
            ["Teleskopcylinder", 12],
            ["Teleskopcylinder", 15]
          ],
          note: `Tipkapaciteten på de størrelser, Bilstrup Karosseri leverer. Kilde: <a href="${BILSTRUP}" rel="noopener">Bilstrup Karosseri: Tiplad</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "El-hydraulisk eller fuld hydraulisk",
        tekst: [
          `Bilstrup Karosseri leverer de små tippere på 3,5 og 5,0 t både fuld hydraulisk og el-hydraulisk. Valget findes altså på de tippere, der har saksesystem.`,
          `Alle Bilstrups tippere kan leveres som bagtip eller 3-vejs tip, og ladet bygges efter kundens behov. Opbygningen leveres færdig, enten varmgalvaniseret eller sandblæst og lakeret.`
        ]
      },
      {
        overskrift: "Krav til ladet og tipperen",
        tekst: [
          `Detailforskrifterne for køretøjer har få, men faste krav til selve opbygningen. Ladet skal være solidt fastgjort til bilens bærende dele, og skarpe kanter og udragende dele må ikke give unødig fare for andre trafikanter. På et fast lad gælder det samme for ladbeslagene.`,
          `Et tippelad skal være sikret mod at glide fremad, når det er i transportstilling. Et trevejs tippelad skal desuden have anordninger, der holder ladet fast i transportstilling.`,
          `Ladet må ikke gøre bilen bredere end 2,55 m, som er den største tilladte bredde for et køretøj. Renaults Master Plateau er til sammenligning 210 cm bred.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="Chassis med tippelad set fra siden. Et stop foran ladet sikrer, at det ikke glider fremad, og låse holder et trevejs tippelad fast i transportstilling."><defs><marker id="pil-lad-og-tipper-2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-rum" x="20" y="74" width="72" height="70" rx="6"/><rect class="tg-hylde" x="96" y="142" width="270" height="6"/><rect class="tg-profil" x="110" y="132" width="250" height="10"/><rect class="tg-rum" x="110" y="100" width="250" height="32"/><rect class="tg-modul" x="102" y="108" width="7" height="34"/><rect class="tg-modul" x="114" y="124" width="12" height="8"/><rect class="tg-modul" x="336" y="124" width="12" height="8"/><circle class="tg-hylde" cx="356" cy="140" r="4"/><circle class="tg-kasse" cx="56" cy="160" r="16"/><circle class="tg-kasse" cx="300" cy="160" r="16"/><line class="tg-gulvlinje" x1="0" y1="176" x2="400" y2="176"/><line class="tg-skinne" x1="330" y1="62" x2="262" y2="62" marker-end="url(#pil-lad-og-tipper-2)"/><text class="tg-lille" x="296" y="54" text-anchor="middle">FREMAD</text><g class="tg-call"><line x1="105" y1="112" x2="128" y2="44"/><circle cx="105" cy="112" r="3"/><text class="tg-call__navn" x="110" y="24">Stop foran ladet</text><text class="tg-call__under" x="110" y="38">ladet glider ikke fremad</text></g><g class="tg-call"><line x1="342" y1="128" x2="330" y2="190"/><circle cx="342" cy="128" r="3"/><text class="tg-call__navn" x="224" y="202">Låse ved 3-vejs tip</text><text class="tg-call__under" x="224" y="216">holder ladet fast</text></g></svg>`,
          tekst: `Skematisk. Kravene til et tippelad i transportstilling. Kilde: <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 1, pkt. 9.02.001–9.02.003</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${DETAIL}" rel="noopener">Bekendtgørelse om detailforskrifter for køretøjer (BEK nr. 1484 af 03/12/2025), bilag 1, pkt. 3.02.001 og 9.02</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Montering efter bilfabrikantens anvisninger",
        tekst: [
          `Et tippelad skal monteres efter bilfabrikantens anvisninger, og det samme gælder en lift eller en kran. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere, at spændingerne i rammen ikke overstiger 150 newton pr. kvadratmillimeter, når tipperen bruges.`,
          `Opbyggeren monterer som regel selv. Fyns Karosseribyg skriver, at tipladet også kan leveres til montering hos en anden opbygger.`
        ],
        efter: [
          `Kilder: <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 2, pkt. 2.8.2.4</a> og <a href="${FYNS}" rel="noopener">Fyns Karosseribyg: Tiplad</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Nyttelasten efter opbygning",
        tekst: [
          `Ladet, tipperen, hjælperammen og en eventuel lift lægges til egenvægten. Ved registreringssynet registrerer synsvirksomheden ændringen i Motorregistret.`,
          `Til sammenligning vejer Bärs 750 kg-lift til chassis 160 kg. Et lad med tipper, lift og kran kan derfor tage en stor del af en 3.500 kg-bils lasteevne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Ladbil set fra siden: lad og tipper oven på en hjælperamme på chassiset og en lift bag ladet. Alle dele lægges til egenvægten."><rect class="tg-rum" x="20" y="70" width="70" height="66"/><line class="tg-gulvlinje" x1="20" y1="136" x2="340" y2="136"/><rect class="tg-hylde" x="110" y="126" width="220" height="8"/><rect class="tg-kuffert" x="110" y="96" width="220" height="30"/><rect class="tg-modul" x="334" y="96" width="6" height="40"/><circle class="tg-kasse" cx="60" cy="150" r="16"/><circle class="tg-kasse" cx="280" cy="150" r="16"/><line class="tg-gulvlinje" x1="0" y1="166" x2="400" y2="166"/><g class="tg-call"><line x1="200" y1="96" x2="190" y2="36"/><circle cx="200" cy="96" r="3"/><text class="tg-call__navn" x="150" y="30">Lad og tipper</text></g><g class="tg-call"><line x1="337" y1="100" x2="340" y2="48"/><circle cx="337" cy="100" r="3"/><text class="tg-call__navn" x="300" y="30">Lift</text><text class="tg-call__under" x="300" y="44">Bär, 160 kg</text></g><g class="tg-call"><line x1="250" y1="130" x2="236" y2="184"/><circle cx="250" cy="130" r="3"/><text class="tg-call__navn" x="200" y="196">Hjælperamme</text><text class="tg-call__under" x="200" y="210">under ladet</text></g></svg>`,
          tekst: `Skematisk. Tegningen viser de dele, der lægges til bilens egenvægt. Kun liftens vægt er oplyst her.`
        }
      },
      {
        overskrift: "Registreringssyn",
        tekst: [
          `En varebil skal godkendes ved et registreringssyn, før den tages i brug, og det samme gælder, når egenvægten ændres med mere end 50 kg. Et lad eller en tipper på et registreret chassis udløser derfor syn.`,
          `En lastbil skal desuden have en godkendelseserklæring fra Færdselsstyrelsen før registreringssynet. Se <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Opbygning", "Ladet eller tipperen monteres efter bilfabrikantens anvisninger, og egenvægten ændres med mere end 50 kg."],
            ["Registreringssyn", "Bilen godkendes ved et registreringssyn, før den tages i brug."],
            ["Motorregistret", "Synsvirksomheden registrerer ændringen i Motorregistret."],
            ["Hovedeftersyn", "Et tiplad skal have hovedeftersyn af en sagkyndig mindst hver 12. måned."]
          ]
        },
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), §§ 5, 13 og 14</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Tiplad skal have hovedeftersyn",
        tekst: [
          `Et tiplad er mekanisk drevet udstyr monteret på bilen. Efter bekendtgørelsen om anvendelse af tekniske hjælpemidler skal sådant udstyr have hovedeftersyn mindst hver 12. måned af en sagkyndig person, også når bilen selv synes, jf. § 40, stk. 3. Se <a href="/til-varebilen/ombygning/bagsmaeklift/">bagsmæklift</a>.`,
          `Oversigten samler reglerne for de opbygninger, der oftest kommer på et chassis. Et fast lad har ingen mekanik, så kravet om hovedeftersyn rammer tipperen, liften og kranen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Opbygning", "Syn ved ændret egenvægt", "Hovedeftersyn", "Krav til opbygningen"],
          raekker: [
            ["Fast lad", "over 50 kg", "ikke mekanisk drevet", "solidt fastgjort, ingen farlige kanter"],
            ["Bagtipper", "over 50 kg", "hver 12. måned", "sikret mod at glide fremad"],
            ["3-vejs tipper", "over 50 kg", "hver 12. måned", "sikret mod at glide fremad og låst i transportstilling"],
            ["Lift bag ladet", "over 50 kg", "hver 12. måned", "monteres efter bilfabrikantens anvisninger"],
            ["Kran på ladet", "over 50 kg", "hver 12. måned", "monteres efter bilfabrikantens anvisninger"]
          ],
          note: `Kilder: <a href="${SYN}" rel="noopener">BEK nr. 1685 af 16/12/2025, § 5</a>, <a href="${BEK428}" rel="noopener">BEK nr. 428 af 05/04/2022, §§ 40 og 58</a> og <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 1, pkt. 9.02, og bilag 2, pkt. 2.8.2.4</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dobbeltkabine med lad",
        tekst: [
          `Et chassis med dobbeltkabine og lad kan godkendes som mandskabsvogn, hvis ladets flademål er større end personkabinens. Ladet behøver ikke være monteret fra fabrikken, men det skal være et egentligt monteret lad. Se <a href="/til-varebilen/ombygning/mandskabsvogn-ombygning/">ombygning til mandskabsvogn</a>.`,
          `Dobbeltkabinen giver plads til et sjak, men tager længde fra ladet. Renaults Master Chassis med dobbeltkabine har plads til fire passagerer på bagsædet og en lastvægt på op til 1.173 kg, mens Chassis L3 med enkeltkabine har op til 1.621 kg.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="To ladvogne set fra siden. Den ene har enkeltkabine og et langt lad. Den anden har dobbeltkabine med to sæderækker og et kortere lad, som skal have større flademål end personkabinen, hvis bilen skal være mandskabsvogn."><text class="tg-fremhaev" x="20" y="22">Enkeltkabine</text><rect class="tg-rum" x="20" y="32" width="60" height="50" rx="5"/><rect class="tg-modul" x="86" y="52" width="250" height="30"/><text class="tg-modul__tekst" x="211" y="72" text-anchor="middle">LAD</text><circle class="tg-kasse" cx="50" cy="88" r="12"/><circle class="tg-kasse" cx="290" cy="88" r="12"/><line class="tg-gulvlinje" x1="10" y1="100" x2="390" y2="100"/><text class="tg-fremhaev" x="20" y="124">Dobbeltkabine</text><rect class="tg-rum" x="20" y="134" width="110" height="50" rx="5"/><line class="tg-skillevaeg" x1="75" y1="134" x2="75" y2="184"/><text class="tg-lille" x="75" y="164" text-anchor="middle">2 RÆKKER</text><rect class="tg-modul" x="136" y="154" width="200" height="30"/><text class="tg-modul__tekst" x="236" y="174" text-anchor="middle">LAD</text><circle class="tg-kasse" cx="50" cy="190" r="12"/><circle class="tg-kasse" cx="290" cy="190" r="12"/><line class="tg-gulvlinje" x1="10" y1="202" x2="390" y2="202"/><text class="tg-lille" x="20" y="224">MANDSKABSVOGN: LADETS FLADEMÅL STØRRE END PERSONKABINENS</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning, I.A.1.3.6 Mandskabsvogne</a>, set den 4. oktober 2026, og <a href="${RENAULT}" rel="noopener">Renault Danmark: Master Chassis</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Renault Master som chassis",
        tekst: [
          `Renault sælger Master Chassis i fire fabriksbyggede udgaver, som kan bestilles direkte hos forhandlerne. De fås med dCi 145 eller dCi 165, og flere af dem har baghjulstræk og tvillingdæk.`,
          `Lastvægten er lavere på L4 end på L3 og lavest med dobbeltkabine. Plateau-udgaven med fladt lad har den højeste lastvægt af de fire.`
        ],
        tabel: {
          kolonner: ["Udgave", "Længde", "Bredde", "Lastvægt op til"],
          raekker: [
            ["Chassis L3", "632 cm", "207 cm", "1.621 kg"],
            ["Chassis L4", "687 cm", "207 cm", "1.324 kg"],
            ["Dobbeltkabine L3", "op til 622 cm", "207 cm", "1.173 kg"],
            ["Plateau L3", "620 cm", "210 cm", "1.733 kg"]
          ],
          note: `Kilde: <a href="${RENAULT}" rel="noopener">Renault Danmark: Master Chassis</a>, set den 4. oktober 2026. Renault kalder det lastvægt. Længde og bredde gælder hele bilen.`
        },
        efter: [
          `Dobbeltkabinen har plads til fire passagerer på bagsædet.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [["Plateau L3", 1733], ["Chassis L3", 1621], ["Chassis L4", 1324], ["Dobbeltkabine L3", 1173]],
          note: `Søjlerne viser den største lastvægt, Renault oplyser for hver udgave. Kilde: <a href="${RENAULT}" rel="noopener">Renault Danmark: Master Chassis</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Nyttelast efter en lift",
        tekst: [
          `Her er et regneeksempel med producenternes tal for en Bär-lift på et Master-chassis, før lad og hjælperamme er trukket fra.`,
          `Eksemplet viser, hvorfor opbyggeren skal kende chassisets lastvægt, før ladet bygges. Hver del, der kommer på bilen, tager af det, der er tilbage til godset.`
        ],
        figur: {
          type: "noegletal",
          data: [["Master Chassis L3", "1.621", "kg"], ["Bär BC 750 S2L", "−160", "kg"], ["Tilbage før lad", "1.461", "kg"]],
          note: `Beregnet ud fra <a href="${RENAULT}" rel="noopener">Renault</a> og <a href="${B750}" rel="noopener">Bär Cargolift</a>. Lad, hjælperamme og monteringsadapter trækkes også fra.`
        }
      },
      {
        overskrift: "Kasse i stedet for lad",
        tekst: [
          `Skal godset stå tørt, bygges en kasse på chassiset. Fyns Karosseribyg leverer AluTeam-kasser til varevogne i 30 mm sandwich med PU-skum.`,
          `Kasserne er udviklet til varevogne, hvor vægten betyder meget. De er pulverlakerede og kan få surring i forskellige udførelser og LED-belysning.`
        ],
        punkter: [
          `<strong>Glasfiber.</strong> Den letteste udgave er til opbygninger, hvor hvert kilo tæller.`,
          `<strong>Ferro-Foam.</strong> Panelerne er de samme som i opbygninger til lastvogne og bruges, når styrken vejer tungest.`,
          `<strong>Udstyr.</strong> Kassen kan have topklap, dobbelte bagdøre og sidedøre, tag med lysgennemtrækning og en bund af finer eller alu-planker eller en isoleret bund.`
        ],
        efter: [
          `En isoleret kasse med køleaggregat er en kølebil, og den har sine egne regler. Se <a href="/til-varebilen/ombygning/koelebil/">kølebil</a>. Kilde: <a href="${ALU}" rel="noopener">Fyns Karosseribyg: AluTeam letisolerede kasser</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Tiplad til større biler",
        tekst: [
          `Over 3.500 kg totalvægt er bilen en lastbil, og så skifter udvalget af tiplad. Fyns Karosseribyg fører tiplad fra Henschel, Meiller og sit eget mærke FKB med en lasteevne fra 2,5 til 24 tons.`,
          `Henschels letvægtstiplad på 2,5 tons kan få stålsider, cyklistværn, forlænget hjælperamme til kran og kabinebeskyttelse. FKB's eget program går fra 2,5 til 10 tons med automatbagsmæk og 3-vejs tip, og Meiller leverer tiplad med 20 og 24 tons tipkapacitet.`
        ],
        efter: [
          `Kilde: <a href="${FYNS}" rel="noopener">Fyns Karosseribyg: Tiplad</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal karrosseriopbyggeren vide",
    spoergsmaal_manchet: "Så kan opbyggeren vælge lad, tipper og ramme, der passer til chassis og last.",
    spoergsmaal: [
      "Chassisets mærke, akselafstand, kabinetype og tilladte totalvægt.",
      "Hvad der skal køres: løse materialer, paller, maskiner eller affald.",
      "Bagtip eller 3-vejs tip, og om der skal være kran eller lift.",
      "Ladets mål og sidehøjde, og om siderne skal være i aluminium eller stål.",
      "Den nyttelast, der skal være tilbage efter opbygningen.",
      "Om opbygningen skal være varmgalvaniseret eller lakeret.",
      "Om opbyggeren står for registreringssynet."
    ],
    faq: [
      ["Hvad koster et chassis til ladvogn?", "Ford Transit Chassis koster fra 296.393 kr. uden moms hos BN uden opbygning (oktober 2026). Opbyggerne oplyser pris på lad og tipper på tilbud."],
      ["Hvad er forskellen på bagtipper og 3-vejs tipper?", "En bagtipper tipper kun bagud. En 3-vejs tipper tipper både bagud og til begge sider."],
      ["Hvor meget nyttelast har en ladvogn?", "Ford Transit Chassis har op til 2.755 kg nyttelast før opbygning, eller 2.960 kg som 5-tons udgave. Lad, tipper og lift trækkes fra."],
      ["Skal en ladvogn synes efter opbygning?", "Ja. Bilen skal godkendes ved et registreringssyn, når egenvægten ændres med mere end 50 kg, og en ny varebil skal godkendes ved registreringssyn, før den tages i brug."],
      ["Kan en dobbeltkabine med lad være mandskabsvogn?", "Ja, hvis ladets flademål er større end personkabinens, og bilen opfylder de øvrige krav til mandskabsvogne."],
      ["Hvor meget kan en Renault Master Chassis laste?", "Renault oplyser op til 1.621 kg for Chassis L3, 1.324 kg for L4 og 1.733 kg for Plateau L3, før opbygningen er trukket fra."],
      ["Hvor tykke er væggene i en let kasse til varevogn?", "AluTeams lette kasser til varevogne er i 30 mm sandwich med PU-skum, med glasfiber eller Ferro-Foam som overflade."],
      ["Skal et tippelad kunne låses?", "Et tippelad skal være sikret mod at glide fremad i transportstilling. Et trevejs tippelad skal også have anordninger, der holder ladet fast i transportstilling."],
      ["Skal en tipper på en varebil efterses?", "Ja. Tipladet er mekanisk drevet udstyr og skal have hovedeftersyn mindst hver 12. måned af en sagkyndig person, selv om bilen synes."]
    ],
    kilder: [
      { navn: "BN: Ford Transit Ladvogn (priser og nyttelast)", url: BN, dato: "2026-10-07" },
      { navn: "LandbrugsAvisen: Toyota fuldender programmet med nye varebiler (Proace Max)", url: "https://landbrugsavisen.dk/traktortech/toyota-fuldender-programmet-med-nye-vaner-223488", dato: "2026-10-04" },
      { navn: "Bilstrup Karosseri: Tiplad", url: BILSTRUP, dato: "2026-10-07" },
      { navn: "Fyns Karosseribyg: Tiplad", url: FYNS, dato: "2026-10-07" },
      { navn: "Bär Cargolift: Standard / FreeAccess 750 kg", url: B750, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer, §§ 5, 13 og 14", url: SYN, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022)", url: BEK428, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DETAIL, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: I.A.1.3.6 Mandskabsvogne", url: JV, dato: "2026-10-04" },
      { navn: "Renault Danmark: Master Chassis", url: RENAULT, dato: "2026-10-07" },
      { navn: "Fyns Karosseribyg: AluTeam letisolerede kasser", url: ALU, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["BN: alle Transit Ladvogn fra L2 til L5 har en robust chassisramme, der udgør et plant og stærkt fundament for opbygninger.", BN],
    ["BN: Transit Ladvogn har 2,0 liters EcoBlue-dieselmotor med op til 170 hk, kan fås med HDT-motor (Heavy Duty Truck) til tunge opgaver og med manuelt gear eller automatgear.", BN],
    ["BN: Transit Ladvogn har én række sæder; man kan vælge standard dobbeltsæde eller justerbart enkeltsæde, med plads til op til tre personer.", BN],
    ["BN: Trend er standardudstyret; Trail har bl.a. mLSD, et mekanisk begrænset spærredifferentiale, for bedre vejgreb.", BN],
    ["BN: gennem Fords SVO-program fås specialudstyr som ekstra sikringspanel, batterirelæ og omdrejningskontrol; BN leverer ladvogn med eller uden rig og presenning eller kasseopbygning.", BN],
    ["Bilstrup Karosseri: tippere fra 3,5 til 20 tons tipkapacitet til chassis fra 3,5 til 32 tons; størrelser 3,5 og 5,0 t med saksesystem og 5,0, 8,0, 10,0, 12 og 15 t med teleskopcylinder.", BILSTRUP],
    ["Detailforskrifterne, bilag 1, pkt. 9.02.001-9.02.003: lad skal være solidt fastgjort til køretøjets bærende dele og udformet, så skarpe kanter og udragende dele ikke medfører unødig fare for andre trafikanter; ladbeslag på fast lad må ikke medføre unødig fare; tippelad skal være sikret mod at glide fremad i transportstilling; trevejs tippelad skal have anordninger, der kan fastholde ladet i transportstilling.", DETAIL],
    ["Detailforskrifterne, bilag 1, pkt. 3.02.001 (2): et køretøj må ikke have større bredde end 2,55 m (med visse undtagelser).", DETAIL],
    ["Detailforskrifterne, bilag 2, pkt. 2.8.2.4: tippelad, læssekran og læssebagsmæk skal monteres efter køretøjsfabrikantens anvisninger; ved chassisramme af stål kan en prøvningsinstans alternativt dokumentere, at spændingerne ikke overstiger 150 N/mm2.", DETAIL],
    ["Fyns Karosseribyg: tipladet kan også leveres til montering hos en opbygger.", FYNS],
    ["Renault: Master Chassis fås i fabriksbyggede udgaver, der kan bestilles direkte hos forhandlerne, med dCi 145 eller dCi 165, flere med baghjulstræk og tvillingdæk (RWD TWIN).", RENAULT],
    ["Fyns Karosseribyg: AluTeam light-kasser er specielt udviklet til varevogne, hvor vægt er vigtig, er komplet pulverlakeret og kan få surring i forskellige udførelser og LED-belysning.", ALU],
    ["Fyns Karosseribyg fører tiplad fra Henschel, Meiller og eget mærke FKB med lasteevne fra 2,5 til 24 tons; Henschels 2,5 tons letvægtstiplad fås med stålsider, cyklistværn, forlænget hjælperamme fx til kran og kabinebeskyttelse; FKB går fra 2,5 til 10 tons med automatbagsmæk og 3-vejs tip; Meiller leverer 20 og 24 tons tipkapacitet.", FYNS]
  ]
};
