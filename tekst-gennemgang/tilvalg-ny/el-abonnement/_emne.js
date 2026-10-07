// Emnesiden /til-varebilen/el-abonnement/ (07-10-2026)
var CA = `https://clever.dk/hjaelp/faq/om-clevers-hjemmeladeboks/kom-i-gang/hvad-er-forskellen-paa-ac-og-dc-opladning/`;
var CE = `https://clever.dk/erhverv/ladeloesninger/ladeudstyr-til-virksomheden/`;
var CK = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-key/`;
var CV = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-one-business-van/`;
var CT = `https://clever.dk/erhverv/viden/forstaa-clevers-tilbagebetaling/`;
var OKP = `https://www.ok.dk/erhverv/produkter/ladestandere/ladestationspriser`;
var OKE = `https://www.ok.dk/erhverv/produkter/ladestandere`;
var EWII = `https://www.ewii.dk/erhverv/opladning/`;
var NF = `https://norlys.dk/erhverv/opladning/firmabil/`;
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var JV = `https://info.skat.dk/data.aspx?oid=2062223`;
var JV9 = `https://info.skat.dk/data.aspx?oid=1947971`;
var NED = `https://skat.dk/erhverv/afgifter-paa-varer-og-ydelser-punktafgifter/nyhedsbrev-afgifter/midlertidig-nedsaettelse-af-elafgiften-i-2026-og-2027`;
var KIA = `https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf`;
var VW = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;
var FORD = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/GetPDF.ashx`;
var RENAULT = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master-e-tech-electric.pdf`;

module.exports = {
  id: "el-abonnement",
  side: {
    slug: "el-abonnement",
    navn: "El-abonnement og opladning",
    titel: "El-abonnement og opladning af elvarebil",
    kort: `Opladning på firmaets adresse, hos chaufføren og på lynladere. Gælder {{el_modeller}} af {{modeller}} modeller.`,
    beskrivelse: `Opladning af elvarebil på firmaets adresse, hos medarbejderen og på offentlige ladere. Priser pr. kWh, ladebokse, abonnementer og refusion af elafgift.`,
    manchet: `En elvarebil lader tre steder: på virksomhedens adresse, hos chaufføren derhjemme og på offentlige ladere ude på ruten. Prisen pr. kWh er forskellig de tre steder, og fordelingen mellem dem afgør driftsprisen. Det gælder {{el_modeller}} af de {{modeller}} modeller og {{el_tilbud}} af de {{tilbud}} tilbud på siden.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["Elvarebiler på siden", "{{el_modeller}} af {{modeller}}", "modeller kører på strøm"],
        ["Strøm pr. 100 km", "67–88 kr.", "på OK's normalladere den 4. oktober 2026"],
        ["AC-lader i en typisk elbil", "op til 11 kW", "oplyser Clever"],
        ["Elafgift tilbage", "til og med 2030", "for den, der driver ladestanderen"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Tre steder at lade",
        tekst: [
          `En elvarebil kan lade tre steder i løbet af en arbejdsuge. Hvor bilen lader mest, afgør både prisen pr. kWh og hvor meget udstyr virksomheden skal købe.`,
          `De timer, bilen holder stille om natten eller mellem opgaver, kan bruges til opladning på en almindelig AC-lader. Lynladere ude på ruten bruges, når dagens kørsel er længere, end batteriet rækker.`,
          `Strømmen på firmaets adresse og hjemme hos medarbejderen følger virksomhedens eller husstandens elaftale. De offentlige ladere har deres egne priser pr. kWh, som står længere nede på siden.`
        ],
        punkter: [
          `<strong>På virksomhedens adresse.</strong> Egen lader på parkeringspladsen. Bilen lader om natten eller mellem opgaver. Se <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">ladestander på firmaadressen</a>.`,
          `<strong>Hos chaufføren.</strong> Bilen kører med hjem og lader på en lader, der måler og afregner strømmen særskilt mellem virksomheden og den ansatte. Se <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>.`,
          `<strong>På offentlige ladere.</strong> Lynladere ude på ruten, når bilen skal længere end en dags kørsel. Se <a href="/til-varebilen/el-abonnement/ladekort-og-offentlig-ladning/">ladekort og offentlig ladning</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Tre steder at lade en elvarebil: på firmaets adresse med egen ladestander, på en offentlig lader ude på ruten og hjemme hos medarbejderen."><defs><marker id="pil-el-abonnement-5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="0" y="20">TRE STEDER AT LADE</text><rect class="tg-rum" x="10" y="60" width="80" height="70"/><rect class="tg-kasse" x="24" y="76" width="20" height="16"/><rect class="tg-kasse" x="56" y="76" width="20" height="16"/><rect class="tg-modul" x="94" y="96" width="12" height="34"/><rect class="tg-kuffert" x="192" y="86" width="18" height="44"/><rect class="tg-kasse" x="195" y="92" width="12" height="10"/><polygon class="tg-profil" points="300,80 345,50 390,80"/><rect class="tg-rum" x="306" y="80" width="78" height="50"/><rect class="tg-kasse" x="336" y="104" width="18" height="26"/><rect class="tg-modul" x="288" y="100" width="10" height="20"/><line class="tg-gulvlinje" x1="0" y1="130" x2="400" y2="130"/><g class="tg-maal"><line x1="112" y1="112" x2="186" y2="112" marker-end="url(#pil-el-abonnement-5)"/><line x1="216" y1="112" x2="282" y2="112" marker-end="url(#pil-el-abonnement-5)"/></g><text x="56" y="152" text-anchor="middle">Firmaets adresse</text><text x="56" y="168" text-anchor="middle">egen ladestander</text><text x="201" y="152" text-anchor="middle">Offentlig lader</text><text x="201" y="168" text-anchor="middle">på ruten</text><text x="345" y="152" text-anchor="middle">Hjemme hos</text><text x="345" y="168" text-anchor="middle">medarbejderen</text></svg>`,
          tekst: `Skematisk. Pilene viser bilens vej fra firmaets adresse ud på ruten og hjem til medarbejderen.`
        }
      },
      {
        overskrift: "Hvor strømmen omformes",
        tekst: [
          `Elnettet leverer vekselstrøm (AC), men batteriet lades med jævnstrøm (DC). Ved AC-ladning omformer bilen selv strømmen, og bilens omformer sætter grænsen, typisk 11 kW. Ved DC-ladning sker omformningen i standeren, og strømmen går direkte i batteriet.`,
          `Forskellen betyder noget, når virksomheden vælger ladestander. En 22 kW-boks på væggen lader ikke hurtigere, end bilens egen omformer tillader. AC-ladning sker med Type 2-stik og DC-ladning med CCS, skriver Ford i prislisten for E-Transit Custom.`
        ],
        punkter: [
          `<strong>Lynladere.</strong> Clevers lynladere leverer op til 300 kW. De fleste nyere elbiler kan tage omkring 100–150 kW, skriver Clever.`,
          `<strong>Effektbehov.</strong> Én lynladestander bruger lige så meget strøm som 50 parcelhuse, skriver Clever.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="AC-ladning omformes i bilen, DC-ladning i ladestanderen"><defs><marker id="pil-el-abonnement-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text x="10" y="22" class="tg-fremhaev">AC</text><rect x="10" y="40" width="60" height="36" class="tg-kasse"/><text x="40" y="62" text-anchor="middle">Elnet</text><rect x="105" y="40" width="75" height="36" class="tg-kasse"/><text x="142" y="62" text-anchor="middle">Ladeboks</text><rect x="215" y="30" width="175" height="56" rx="8" class="tg-rum"/><rect x="225" y="40" width="70" height="36" class="tg-kasse"/><text x="260" y="62" text-anchor="middle">Omformer</text><rect x="310" y="40" width="70" height="36" class="tg-modul"/><text x="345" y="62" text-anchor="middle">Batteri</text><g class="tg-maal"><line x1="70" y1="58" x2="103" y2="58" marker-end="url(#pil-el-abonnement-1)"/><line x1="180" y1="58" x2="223" y2="58" marker-end="url(#pil-el-abonnement-1)"/><line x1="295" y1="58" x2="308" y2="58" marker-end="url(#pil-el-abonnement-1)"/></g><text x="201" y="100" text-anchor="middle" class="tg-lille">Type 2</text><text x="390" y="118" text-anchor="end" class="tg-lille">Bilens omformer: typisk op til 11 kW</text><text x="10" y="142" class="tg-fremhaev">DC</text><rect x="10" y="160" width="60" height="36" class="tg-kasse"/><text x="40" y="182" text-anchor="middle">Elnet</text><rect x="105" y="160" width="75" height="36" class="tg-kuffert"/><text x="142" y="182" text-anchor="middle">Lynlader</text><rect x="215" y="150" width="175" height="56" rx="8" class="tg-rum"/><rect x="310" y="160" width="70" height="36" class="tg-modul"/><text x="345" y="182" text-anchor="middle">Batteri</text><g class="tg-maal"><line x1="70" y1="178" x2="103" y2="178" marker-end="url(#pil-el-abonnement-1)"/><line x1="180" y1="178" x2="308" y2="178" marker-end="url(#pil-el-abonnement-1)"/></g><text x="250" y="172" text-anchor="middle" class="tg-lille">CCS</text><text x="390" y="228" text-anchor="end" class="tg-lille">Omformer i standeren: op til 300 kW</text></svg>`,
          tekst: `Skematisk. AC- og DC-ladning: hvor strømmen omformes. Kilde: <a href="${CA}" rel="noopener">Clever</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Effekt og ladetid",
        tekst: [
          `Effekt måles i kilowatt (kW) og siger, hvor hurtigt strømmen løber ind i batteriet. Batteriets størrelse måles i kilowatttimer (kWh). Ladetiden afhænger af begge dele og af, hvor meget strøm der er tilbage i batteriet.`,
          `Clever skriver, at DC-ladning med 100–150 kW giver cirka 10–15 gange større effekt end AC-ladning. DC-ladning er også dyrere, fordi ladestanderen er mere kompleks og skal have store mængder strøm.`,
          `Hvordan ladningen passer ind i arbejdsdagen, står i <a href="/til-varebilen/el-abonnement/opladning-af-elvarebil-i-praksis/">opladning af elvarebil i praksis</a>. På <a href="/groen-omstilling/ladetid/">ladetid med elvarebil</a> kan du regne på, hvor meget tid medarbejderen bruger på opladning.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Typisk elbil på AC, op til", "11", "kW"],
            ["De fleste nyere elbiler på DC", "100–150", "kW"],
            ["Clevers lynladere, op til", "300", "kW"]
          ],
          note: `Kilde: <a href="${CA}" rel="noopener">Clever: Hvad er forskellen på AC- og DC-opladning</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Pris pr. kWh på offentlige ladere",
        tekst: [
          `På offentlige ladere betaler virksomheden pr. kWh, og prisen stiger med effekten. OK's vejledende priser den 7. oktober 2026 er 3,49 kr. pr. kWh på en normallader, 3,69 kr. på en hurtiglader og 3,89 kr. på en lynlader.`,
          `OK's priser og beregningerne ud fra dem er med moms, mens Clevers og EWII's priser længere nede er uden moms.`,
          `Ved OK's ladestationer er der intet abonnement, og betalingen sker i OK Erhverv-appen eller med betalingskort. Priserne kan afvige på enkelte steder.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr. pr. kWh",
          data: [
            ["Normallader, 3,7–22 kW", 3.49],
            ["Hurtiglader, 23–99 kW", 3.69],
            ["Lynlader, 100+ kW", 3.89]
          ],
          note: `OK's vejledende priser den 7. oktober 2026. Kilde: <a href="${OKP}" rel="noopener">OK: Priser på opladning til erhverv</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Strømmen pr. 100 km",
        tekst: [
          `Vi har regnet med producenternes WLTP-forbrug og OK's vejledende priser den 4. oktober 2026, som er 3,49 kr. pr. kWh på en normallader og 3,89 kr. på en lynlader.`,
          `WLTP-forbruget er det forbrug, producenterne oplyser i prislisterne. Jo højere forbruget er, jo mere betyder prisen pr. kWh for driftsprisen.`
        ],
        tabel: {
          kolonner: ["Model", "WLTP-forbrug", "Normallader", "Lynlader"],
          raekker: [
            ["Kia PV5 Cargo 71,2 kWh", "19,1 kWh/100 km", "67 kr.", "74 kr."],
            ["VW ID. Buzz Cargo 59 kWh", "20,5 kWh/100 km", "72 kr.", "80 kr."],
            ["Ford E-Transit Custom 320 L1", "21,8 kWh/100 km", "76 kr.", "85 kr."],
            ["Renault Master E-Tech 3,5 t L2H2", "25,1 kWh/100 km", "88 kr.", "98 kr."]
          ],
          note: `Kilder: prislister fra <a href="${KIA}" rel="noopener">Kia</a>, <a href="${VW}" rel="noopener">Volkswagen</a>, <a href="${FORD}" rel="noopener">Ford</a> og <a href="${RENAULT}" rel="noopener">Renault</a> samt <a href="${OKP}" rel="noopener">OK: Priser på opladning til erhverv</a>, set den 4. oktober 2026. Priserne er i kr. pr. 100 km og afrundet.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Kia PV5 Cargo", 67],
            ["VW ID. Buzz Cargo", 72],
            ["Ford E-Transit Custom", 76],
            ["Renault Master E-Tech", 88]
          ],
          note: `Søjlerne viser, hvad strømmen koster pr. 100 km på OK's normalladere til 3,49 kr. pr. kWh. Vi har regnet med WLTP-forbruget i prislisterne, set den 4. oktober 2026.`
        },
        efter: [
          `Hjemme og på firmaets adresse afhænger prisen af virksomhedens egen elaftale.`
        ]
      },
      {
        overskrift: "Abonnement eller betaling pr. opladning",
        tekst: [
          `Ladeselskaberne sælger typisk et fast månedligt abonnement med lavere kWh-pris eller betaling pr. opladning uden binding. Abonnementet betaler sig ved et stort forbrug, og det årlige kilometertal fra leasingaftalen viser, hvor grænsen går. Rabatten gælder som regel kun i selskabets eget netværk.`,
          `Der findes også mellemformer. Clever Key er forbrugsafregnet, men giver en nedsat kWh-pris i Clevers netværk. Norlys lader virksomheden vælge mellem betaling efter forbrug og en fast månedspris med et antal kWh.`,
          `Clever One Business Van er et eksempel på et fast abonnement. Det koster 999 kr. om måneden for en firmabil på gule plader eller papegøjeplader og giver fri opladning i Clevers netværk, også på lynladere.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Løsning", "Sådan betaler virksomheden"],
          raekker: [
            ["Clever Key", "Pr. kWh for den strøm, bilerne lader"],
            ["Clever One Business Van", "Fast pris pr. måned med fri opladning"],
            ["OK's ladestationer", "Pr. kWh uden abonnement"],
            ["Norlys", "Efter forbrug eller fast pris med et antal kWh"]
          ],
          note: `Kilder: <a href="${CK}" rel="noopener">Clever Key</a>, <a href="${CV}" rel="noopener">Clever One Business Van</a>, <a href="${OKP}" rel="noopener">OK</a> og <a href="${NF}" rel="noopener">Norlys</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladestander på firmaets adresse",
        tekst: [
          `En egen ladestander på adressen giver bilerne et fast sted at lade om natten og mellem opgaver. Strømmen kommer over virksomhedens egen elaftale, eller den kan afregnes uden om bygningens eltavle med en særskilt måler.`,
          `Clever sælger erhvervsladebokse fra 6.999 kr. og udlejer dem for 99 kr. om måneden, og installationen kommer oveni. Clevers ladepunkter bruger mellem 8 og 32 ampere, og 22 kW kræver 32 ampere pr. udtag. Installationen tager typisk 4–7 uger fra accept og længere tid, hvis forsyningsselskabet skal sætte en måler op eller levere flere ampere.`,
          `Valget mellem 11 og 22 kW, kravene til installationen og leveringstiderne står i <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">ladestander på firmaadressen</a>.`
        ]
      },
      {
        overskrift: "Ladeboks hjemme hos medarbejderen",
        tekst: [
          `Når varebilen må køre hjem, kan den lade i medarbejderens indkørsel. Ladeboksen sidder på medarbejderens eltavle, og en måler i boksen skiller bilens strøm fra husstandens. Hos Clever betaler ladeoperatøren strømmen tilbage hver måned efter de målte kWh.`,
          `Skattereglerne afhænger af, om bilen beskattes som fri bil. En ladestander til en fri elbil eller plug-in hybridbil har været skattefri siden den 1. juli 2021. Skatterådet har godkendt skattefri refusion af strømmen i sager, hvor strømmen til bilen blev målt for sig.`,
          `Hvornår varebilen må køre hjem, står i <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>. Afregning og skat står i <a href="/til-varebilen/el-abonnement/ladestander-hjemme-hos-medarbejderen/">ladestander hjemme hos medarbejderen</a>.`
        ]
      },
      {
        overskrift: "Elafgift tilbage",
        tekst: [
          `Den virksomhed, der driver en ladestander for egen regning og risiko, kan få elafgiften på strømmen til registrerede elbiler tilbage. Ordningen står i elafgiftslovens § 11 g og gælder til og med den 31. december 2030.`,
          `Pengene går til den, der driver ladestanderen, og ikke til den, der ejer bilen. Det kræver en måler i ladestanderen, og beløbet indberettes i momsangivelsen.`,
          `Elafgiften er sat midlertidigt ned i 2026 og 2027, så der er mindre at få tilbage i de to år. Skatteministeriet har satserne på <a href="https://skm.dk/elafgiftsloven" rel="noopener">skm.dk</a>. Betingelserne står i <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Hvem der får elafgiften tilbage. Står ladestanderen på firmaets adresse, er det virksomheden selv. Står den hjemme hos en medarbejder, er det operatøren af boksen. Ved en offentlig lader er det operatøren af laderen. Alle steder kræver det en måler i ladestanderen."><defs><marker id="pil-el-abonnement-6" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="0" y="16">Ladestanderen står</text><text class="tg-fremhaev" x="220" y="16">Får elafgiften tilbage</text><rect class="tg-kasse" x="0" y="30" width="170" height="36"/><text x="10" y="52">Firmaets adresse</text><rect class="tg-kasse" x="0" y="80" width="170" height="36"/><text x="10" y="102">Hjemme hos medarbejder</text><rect class="tg-kasse" x="0" y="130" width="170" height="36"/><text x="10" y="152">Offentlig lader</text><g class="tg-maal"><line x1="170" y1="48" x2="218" y2="48" marker-end="url(#pil-el-abonnement-6)"/><line x1="170" y1="98" x2="218" y2="98" marker-end="url(#pil-el-abonnement-6)"/><line x1="170" y1="148" x2="218" y2="148" marker-end="url(#pil-el-abonnement-6)"/></g><rect class="tg-modul" x="220" y="30" width="180" height="36"/><text class="tg-modul__tekst" x="230" y="52">VIRKSOMHEDEN SELV</text><rect class="tg-kasse" x="220" y="80" width="180" height="36"/><text x="230" y="102">Operatøren af boksen</text><rect class="tg-kasse" x="220" y="130" width="180" height="36"/><text x="230" y="152">Operatøren af laderen</text><text class="tg-lille" x="0" y="184">KRÆVER MÅLER I LADESTANDEREN</text></svg>`,
          tekst: `Skematisk. Godtgørelsen går til den virksomhed, der driver ladestanderen for egen regning og risiko. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning E.A.4.6.3.2</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladekort og offentlig ladning",
        tekst: [
          `Ude på ruten lader bilen på offentlige ladere, og her afgør ladekortet eller appen, hvad virksomheden betaler. Med Clever Key følger en ladebrik bilen, og opladningerne bliver afregnet med virksomheden efter forbrug.`,
          `Fordi brikken følger bilen, kan flere chauffører bruge den samme. Hos OK betales der i appen eller med betalingskort uden abonnement.`,
          `Netværk, kort og priser ude på ruten står i <a href="/til-varebilen/el-abonnement/ladekort-og-offentlig-ladning/">ladekort og offentlig ladning</a>. Kort til både diesel og strøm står i <a href="/til-varebilen/flaadestyring/braendstofkort-og-ladekort/">brændstofkort og ladekort</a>.`
        ]
      },
      {
        overskrift: "Flere biler på samme tavle",
        tekst: [
          `Uden belastningsstyring dimensioneres installationen efter standarden DS/HD 60364-7-722, som om alle ladestandere kører fuld effekt samtidig, skriver Sikkerhedsstyrelsen. Se <a href="/til-varebilen/el-abonnement/lastbalancering/">lastbalancering</a>.`,
          `Med lastbalancering fordeler ladestanderne strømmen mellem sig, så installationen ikke bliver overbelastet. EWII's ladeboks kan lastbalancere, og OK tilbyder lastbalancering til erhverv.`
        ]
      },
      {
        overskrift: "Ladeløsninger fra danske selskaber",
        tekst: [
          `Fire danske energiselskaber sælger ladeløsninger til virksomheder med installation og service. De sælger både ladebokse, installation og afregning af strømmen, men på forskellige vilkår.`
        ],
        kort: [
          ["Clever", `Clever sælger erhvervsladebokse fra 6.999 kr. og udlejer dem for 99 kr. om måneden. <a href="/til-varebilen/el-abonnement/ladestander-paa-firmaadressen/">Priser og leveringstid</a>.`],
          ["EWII", `EWII leverer en komplet løsning med installation, gravearbejde og opsætning. Ladeboksen er Zaptec Pro på 22 kW, og serviceaftalen koster 69 kr. om måneden pr. boks.`],
          ["OK", `OK leverer ladeløsninger med drift og service. Selskabet står for installation og teknisk support og tilbyder lastbalancering.`],
          ["Norlys", `Norlys sørger for opladning af firmabiler hjemme, på arbejdet og på farten. Virksomheden betaler efter forbrug eller en fast månedspris med et antal kWh inkluderet.`]
        ],
        efter: [
          `Kilder: <a href="${CE}" rel="noopener">Clever</a>, <a href="${EWII}" rel="noopener">EWII</a>, <a href="${OKE}" rel="noopener">OK</a> og <a href="${NF}" rel="noopener">Norlys</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Diesel mod el",
        tekst: [
          `Strømmen er kun én del af regnestykket. På <a href="/groen-omstilling/">grøn omstilling</a> kan diesel og el regnes op mod hinanden med jeres egen kørsel og strømpris.`,
          `Ejerafgiften på varebiler afhænger af drivmidlet, og reglerne står i <a href="/haandbogen/groen-ejerafgift-paa-varebil/">grøn ejerafgift på varebil</a>.`
        ]
      },
      {
        overskrift: "Elvarebilerne på siden",
        tekst: [
          `{{el_modeller}} af de {{modeller}} modeller og {{el_tilbud}} af de {{tilbud}} tilbud på siden er elvarebiler. På <a href="/elvarebiler/">elvarebiler</a> kan du se dem samlet med ladetider.`,
          `Forsikring, dæk og service på en elvarebil har deres egne sider. Se <a href="/til-varebilen/forsikring/forsikring-af-elvarebil/">forsikring af elvarebil</a>, <a href="/til-varebilen/vinterhjul/daek-til-elvarebil/">dæk til elvarebil</a> og <a href="/til-varebilen/service/service-paa-elvarebil/">service på elvarebil</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal ladeudbyderen vide",
    spoergsmaal_manchet: "Så kan abonnement og lader passe til kørslen.",
    spoergsmaal: [
      "Antal biler og årligt kilometertal pr. bil.",
      "Hvor bilerne holder om natten: på firmaets adresse eller hos chaufførerne.",
      "De ruter, bilerne kører, og hvor de har brug for at lade undervejs.",
      "Om strømmen hos chaufførerne skal afregnes særskilt.",
      "Om medarbejdere og gæster også skal kunne lade på firmaets adresse.",
      "Leasingaftalens løbetid, så abonnementet kan følge den."
    ],
    faq: [
      ["Hvor mange af bilerne her er elektriske?", "{{el_modeller}} af de {{modeller}} modeller og {{el_tilbud}} af de {{tilbud}} tilbud."],
      ["Kan virksomheden få elafgiften tilbage?", "Ja, hvis den driver ladestanderen for egen regning og risiko, og strømmen måles i standeren. Ordningen står i elafgiftslovens § 11 g og gælder til og med 2030. Satserne står på skm.dk."],
      ["Hvad koster strømmen pr. 100 km i en elvarebil?", "Det koster 67–88 kr. på OK's normalladere for Kia PV5 Cargo, VW ID. Buzz Cargo, Ford E-Transit Custom og Renault Master E-Tech. Vi har regnet med WLTP-forbruget og OK's priser den 4. oktober 2026. På OK's lynladere koster det 74–98 kr."],
      ["Hvorfor lader bilen kun med 11 kW på en 22 kW-lader?", "Ved AC-ladning omformer bilen selv strømmen, og bilens omformer sætter grænsen. Den typiske elbil kan tage op til 11 kW, skriver Clever."],
      ["Hvad koster det at lade på en offentlig lader?", "Hos OK koster det 3,49 kr. pr. kWh på en normallader, 3,69 kr. på en hurtiglader og 3,89 kr. på en lynlader. Det er vejledende priser den 7. oktober 2026."],
      ["Hvem får elafgiften tilbage, når bilen lader hjemme hos medarbejderen?", "Den virksomhed, der driver ladeboksen. Det er typisk en ladeoperatør, som måler strømmen i boksen og dokumenterer, at husstanden har betalt fuld elafgift."],
      ["Er en ladestander hjemme skattefri for medarbejderen?", "Ja, hvis den stilles til rådighed sammen med en fri elbil eller plug-in hybridbil. Det har gældt siden den 1. juli 2021 og omfatter også installationen."],
      ["Hvad koster en ladestander på firmaets adresse?", "Clever sælger erhvervsladebokse fra 6.999 kr. pr. boks og udlejer dem for 99 kr. om måneden. Installationen kommer oveni."]
    ],
    kilder: [
      { navn: "Clever: Hvad er forskellen på AC- og DC-opladning", url: CA, dato: "2026-10-07" },
      { navn: "OK: Priser på elbil-opladning til erhverv", url: OKP, dato: "2026-10-07" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-04" },
      { navn: "Volkswagen: Prisliste ID. Buzz Cargo", url: VW, dato: "2026-10-04" },
      { navn: "Ford: Prisliste E-Transit Custom (07-07-2026)", url: FORD, dato: "2026-10-04" },
      { navn: "Renault: Prisliste Master E-Tech electric (1.10.–31.12.2026)", url: RENAULT, dato: "2026-10-04" },
      { navn: "Clever: Ladeudstyr til virksomheden", url: CE, dato: "2026-10-07" },
      { navn: "Clever: Clever Key", url: CK, dato: "2026-10-07" },
      { navn: "Clever: Clever One Business Van", url: CV, dato: "2026-10-07" },
      { navn: "Clever: Forstå Clevers tilbagebetaling", url: CT, dato: "2026-10-07" },
      { navn: "EWII: Ladestander til virksomhed", url: EWII, dato: "2026-10-07" },
      { navn: "OK: Ladestander til erhverv", url: OKE, dato: "2026-10-07" },
      { navn: "Norlys: Ladeboks til firmabiler", url: NF, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: E.A.4.6.3.2 Godtgørelse af afgift af elektricitet", url: JV, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: C.A.5.14.1.9 Udgifter i forbindelse med firmabil", url: JV9, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Midlertidig nedsættelse af elafgiften i 2026 og 2027", url: NED, dato: "2026-10-07" },
      { navn: "Skatteministeriet: Elafgiftsloven, satser", url: "https://skm.dk/elafgiftsloven", dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Clever skriver, at DC-opladning med 100-150 kW svarer til cirka 10-15 gange større effekt end AC-opladning, og at DC er dyrere, fordi ladestanderen er mere kompleks, og der skal tilføres store mængder strøm.", CA],
    ["OK's vejledende priser den 7. oktober 2026: normallader (3,7-22 kW) 3,49 kr./kWh, hurtiglader (23-99 kW) 3,69 kr./kWh, lynlader (100+ kW) 3,89 kr./kWh, inkl. moms; priserne kan afvige på enkelte lokationer.", OKP],
    ["Ved OK's ladestationer er der intet abonnement; betaling sker med OK Erhverv-appen eller betalingskort.", OKP],
    ["Clever Key er forbrugsafregnet opladning med nedsat kWh-pris, også på Clevers offentlige netværk; ladebrikken skal følge bilen, så flere kan lade med samme brik.", CK],
    ["Clever One Business Van giver fri opladning til én samlet pris om måneden.", CV],
    ["Clever kan installere en særskilt måler uden om bygningens eltavle og afregne opladningsstrømmen direkte.", CE],
    ["Installationen hos Clever tager typisk 4-7 uger fra accept; længere, hvis forsyningsselskabet skal installere en måler eller levere flere ampere.", CE],
    ["Hos Clever tilbagebetales forbruget på ladeboksen hjemme hver måned efter de målte kWh.", CT],
    ["Arbejdsgiverbetalt ladestander ved bopælen til fri elbil eller pluginhybridbil er skattefri fra 1. juli 2021; Skatterådet har godkendt skattefri refusion af strøm, når forbruget kunne individualiseres via måler (SKM2015.376.SR og SKM2021.283.SR).", JV9],
    ["Godtgørelsen efter elafgiftslovens § 11 g går til den virksomhed, der driver ladestanderen for egen regning og risiko, kræver måler i ladestanderen og gælder til og med 31. december 2030; det ejendomsretlige ejerforhold er ikke afgørende.", JV],
    ["Elafgiften er midlertidigt nedsat i 2026 og 2027, og godtgørelsesbeløbet bliver betydeligt lavere; beløbet indberettes i momsangivelsen.", NED],
    ["EWII's ladeboks (Zaptec Pro) kan lastbalancere, så strømmen fordeles mellem flere ladebokse og overbelastning undgås; OK tilbyder lastbalancering.", EWII]
  ]
};
