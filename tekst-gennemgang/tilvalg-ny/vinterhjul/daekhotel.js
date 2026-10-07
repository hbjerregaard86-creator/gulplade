// Underside /til-varebilen/vinterhjul/daekhotel/ (07-10-2026)
var HESSEL = `https://www.hessel.dk/vaerksted-service/ydelser/daek-og-hjulskifte`;
var ES = `https://esbiler.dk/daekhotel/`;
var KRAFT = `https://kraftbiler.dk/vaerksted/daekhotel/`;
var AM = `https://am.dk/ydelser/daekhotel/`;
var SYN = `https://www.fstyr.dk/publikationer/vejledning-om-syn-af-koeretoejer-gaeldende-fra-1-september-2026`;
var CONT_EFT = `https://www.continental-tires.com/dk/da/tire-knowledge/retorquing-wheels/`;
var CONT_OPB = `https://www.continental-tires.com/dk/da/tire-knowledge/storing-tires/`;
var AYVENS = `https://www.ayvens.com/da-dk/for-foerere/daek/`;
var NORDANIA = `https://www.nordania.dk/erhverv/nyheder/fleet/nye-regler-for-vinterdaek-i-danmark`;
var HES_MB = `https://www.hessel.dk/vaerksted-service/ydelser/service/mercedes-benz`;
var HES_FORD = `https://www.hessel.dk/vaerksted-service/ydelser/service/ford`;
var MB_MOB = `https://www.mercedes-benz.dk/vans/services/mobile-service.html`;
var VV = `https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/dekk-og-kjetting/vinterdekk/`;
var SDS = `https://www.superdaek.dk/`;

module.exports = {
  id: "vinterhjul/daekhotel",
  side: {
    slug: "daekhotel",
    navn: "Dækhotel til varebil",
    titel: "Dækhotel til varebil: pris og indhold",
    kort: `Hvad dækhotel er, priser pr. sæson hos danske værksteder, hvordan dæk skal opbevares, og hvordan dæk og opbevaring fungerer i en leasingaftale.`,
    beskrivelse: `Dækhotel til varebil: priser fra 499 kr. pr. sæson med hjulskift, hvad værkstedet kontrollerer, TPMS, opbevaring i firmaet og dækhotel ved leasing.`,
    manchet: `På et dækhotel opbevarer værkstedet de hjul, der ikke sidder på bilen, og skifter dem to gange om året. Hos de værksteder, vi har set på, koster det 499–1.195 kr. pr. sæson med hjulskift (oktober 2026). Her kan du se priserne, hvad der indgår, hvordan dæk skal opbevares, og hvordan det fungerer, når bilen er leaset.`,
    visuel: {
      hero: "vinterhjul",
      kort_fortalt: [
        ["Dækhotel med hjulskift", "499–1.195 kr.", "pr. sæson hos de værksteder, vi har set på"],
        ["Kun opbevaring, Hessel", "495 kr.", "pr. sæson"],
        ["Hjulskift uden dækhotel, Hessel", "800 kr.", "eller 500 kr. med hjulene på dækhotellet"],
        ["Efterspænding", "50 km", "efter skiftet, ifølge Continental"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad et dækhotel gør",
        tekst: [
          `Et dækhotel er værkstedets lager til de hjul, bilen ikke kører på. Om foråret kommer vinterhjulene ind på hylden, og om efteråret bytter de plads med sommerhjulene. Virksomheden slipper for at have fire ekstra hjul pr. bil liggende på lageret og for at køre dem frem og tilbage.`,
          `Indholdet varierer fra værksted til værksted, men de fleste dækhoteller har de samme fire dele.`
        ],
        punkter: [
          `<strong>Opbevaring.</strong> Dæk har bedst af at stå mørkt, køligt og tørt, skriver Hessel. Elkjær & Sørensen mærker sættene, så de kommer på den rigtige bil.`,
          `<strong>Hjulskift.</strong> To gange om året, forår og efterår.`,
          `<strong>Kontrol.</strong> Mønstermåling, eftersyn for alder og revner og vask, afhængigt af værkstedet.`,
          `<strong>TPMS.</strong> Nulstilling eller kodning af dæktryksensorer efter skiftet.`
        ],
        punkt_ikon: "ja",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Reol på dækhotellet med to sæt hjul, mærket til den rigtige bil"><rect class="tg-hylde" x="20" y="20" width="6" height="156"/><rect class="tg-hylde" x="214" y="20" width="6" height="156"/><rect class="tg-hylde" x="20" y="90" width="200" height="6"/><rect class="tg-hylde" x="20" y="170" width="200" height="6"/><rect class="tg-profil" x="34" y="30" width="36" height="60" rx="8"/><rect class="tg-profil" x="80" y="30" width="36" height="60" rx="8"/><rect class="tg-profil" x="126" y="30" width="36" height="60" rx="8"/><rect class="tg-profil" x="172" y="30" width="36" height="60" rx="8"/><rect class="tg-profil" x="34" y="110" width="36" height="60" rx="8"/><rect class="tg-profil" x="80" y="110" width="36" height="60" rx="8"/><rect class="tg-profil" x="126" y="110" width="36" height="60" rx="8"/><rect class="tg-profil" x="172" y="110" width="36" height="60" rx="8"/><rect class="tg-modul" x="40" y="52" width="24" height="14"/><g class="tg-call"><line x1="64" y1="59" x2="236" y2="44"/><circle cx="64" cy="59" r="3"/><text class="tg-call__navn" x="244" y="40">Mærket sæt</text><text class="tg-call__under" x="244" y="54">til den rigtige bil</text></g><g class="tg-call"><line x1="217" y1="93" x2="236" y2="104"/><circle cx="217" cy="93" r="3"/><text class="tg-call__navn" x="244" y="100">Opbevaring</text><text class="tg-call__under" x="244" y="114">mørkt, køligt, tørt</text></g><g class="tg-call"><line x1="190" y1="140" x2="236" y2="160"/><circle cx="190" cy="140" r="3"/><text class="tg-call__navn" x="244" y="160">To skift om året</text><text class="tg-call__under" x="244" y="174">forår og efterår</text></g></svg>`,
          tekst: `Tegningen er skematisk og viser hjulene på værkstedets reol mellem de to skift om året.`
        }
      },
      {
        overskrift: "Hjulskift eller dækskift",
        tekst: [
          `Værkstederne skelner mellem to ydelser. Hessel kalder det et hjulskift, når hele hjulet med fælg og dæk tages af bilen, som ved skiftet mellem sommer og vinter. Et dækskift er, når nye dæk monteres på bilens fælge, fx fordi de gamle er slidte eller punkterede.`,
          `Forskellen betyder noget for prisen. Hos Hessel koster et hjulskift 500 kr., når hjulene står på dækhotellet, mens et dækskift koster 1.000 kr. Hessels dækhotelpris gælder kun komplette hjul på fælge, og løse dæk er ikke med.`,
          `Hos Elkjær & Sørensen koster opbevaringen det samme, uanset om det er hjul på fælge eller løse dæk. Løse dæk skal dog monteres på fælgen og afbalanceres ved hvert sæsonskift, og det kommer oven i prisen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Hjul set forfra. Ved et hjulskift tages hele hjulet med fælg og dæk af bilen. Ved et dækskift tages dækket af fælgen, som er fremhævet."><defs><marker id="pil-daekhotel-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="10" y="20">Hjulskift</text><text class="tg-lille" x="10" y="34">FÆLG OG DÆK SAMMEN</text><rect class="tg-hylde" x="14" y="96" width="30" height="28"/><rect class="tg-profil" x="80" y="44" width="44" height="132" rx="14"/><rect class="tg-kasse" x="86" y="78" width="32" height="64"/><line class="tg-pil" x1="50" y1="110" x2="74" y2="110" marker-end="url(#pil-daekhotel-1)"/><text x="10" y="198">hele hjulet af bilen</text><text class="tg-lille" x="10" y="214">HESSEL 500 ELLER 800 KR.</text><text class="tg-fremhaev" x="210" y="20">Dækskift</text><text class="tg-lille" x="210" y="34">DÆK AF FÆLGEN</text><rect class="tg-modul" x="226" y="78" width="32" height="64"/><rect class="tg-profil" x="306" y="44" width="44" height="132" rx="14"/><line class="tg-pil" x1="264" y1="110" x2="298" y2="110" marker-end="url(#pil-daekhotel-1)"/><text x="210" y="198">dækket af fælgen</text><text class="tg-lille" x="210" y="214">HESSEL 1.000 KR.</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${HESSEL}" rel="noopener">Hessel: Dækskifte, hjulskifte og dækhotel</a> og <a href="${ES}" rel="noopener">Elkjær & Sørensen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser pr. sæson",
        tekst: [
          `Priserne er opslåede priser for bilejere og ikke særskilt for varebiler. Ingen af siderne oplyser, om priserne er med eller uden moms. Elkjær & Sørensen prissætter efter fælgstørrelse.`,
          `En sæson er forår eller efterår, så prisen betales typisk to gange om året, skriver Elkjær & Sørensen. A&M sælger i stedet et abonnement med en fast pris om måneden.`
        ],
        tabel: {
          kolonner: ["Værksted", "Opbevaring", "Opbevaring og hjulskift"],
          raekker: [
            ["Hessel", "495 kr.", "995 kr."],
            ["Elkjær & Sørensen, 13–17\" fælge", "500 kr.", "995 kr."],
            ["Elkjær & Sørensen, 18–22\" fælge", "600 kr.", "1.195 kr."],
            ["Kraft Biler", "—", "499 kr."],
            ["A&M Dækhotel Plus", "—", "179 kr./md. + 6 kr. gebyr"]
          ],
          note: `Kilder: <a href="${HESSEL}" rel="noopener">Hessel</a>, <a href="${ES}" rel="noopener">Elkjær & Sørensen</a>, <a href="${KRAFT}" rel="noopener">Kraft Biler</a> og <a href="${AM}" rel="noopener">A&M</a>, set den 4. oktober 2026. A&M's abonnement dækker opbevaring og to hjulskift om året.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Kraft Biler", 499],
            ["Hessel", 995],
            ["Elkjær & Sørensen", 995, "13–17\" fælge"],
            ["Elkjær & Sørensen", 1195, "18–22\" fælge"]
          ],
          note: `Søjlerne viser prisen pr. sæson for opbevaring og hjulskift. A&M's abonnement koster 179 kr. om måneden og står kun i tabellen. Kilder: <a href="${HESSEL}" rel="noopener">Hessel</a>, <a href="${ES}" rel="noopener">Elkjær & Sørensen</a> og <a href="${KRAFT}" rel="noopener">Kraft Biler</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kraft Biler skriver, at de 499 kr. dækker både opbevaring og to dækskift om året, og sender automatisk en påmindelse, når det er tid til at skifte.`
        ]
      },
      {
        overskrift: "Prisen om året",
        tekst: [
          `Hos Elkjær & Sørensen betales prisen pr. sæson, altså typisk to gange om året. Dækhotel med hjulskift koster derfor 2 × 995 kr. = 1.990 kr. om året på 13–17" fælge og 2 × 1.195 kr. = 2.390 kr. på 18–22" fælge.`,
          `A&M's abonnement koster 12 × 179 kr. = 2.148 kr. om året før administrationsgebyret. Du kan bruge den afdeling, du vil, men transport af hjulene mellem afdelingerne koster 250 kr.`,
          `Eksempel: en virksomhed med fem biler på 16" fælge betaler 5 × 1.990 kr. = 9.950 kr. om året hos Elkjær & Sørensen. Tallene er regnet på værkstedernes opslåede priser og er ikke et tilbud.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr. om året",
          data: [
            ["Elkjær & Sørensen, 13–17\"", 1990, "2 × 995 kr."],
            ["A&M Dækhotel Plus", 2148, "12 × 179 kr., før gebyr"],
            ["Elkjær & Sørensen, 18–22\"", 2390, "2 × 1.195 kr."]
          ],
          note: `Eksempel regnet på opslåede priser. Kilder: <a href="${ES}" rel="noopener">Elkjær & Sørensen</a> og <a href="${AM}" rel="noopener">A&M</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hjulskift og tillæg",
        tekst: [
          `Ud over selve dækhotellet kan der komme tillæg for skift, afbalancering og dæktryksensorer. Ved afbalancering bliver vægten fordelt ligeligt rundt om hjulet, skriver Continental. Hessel skriver, at hjul uden afbalancering giver rystelser og slider på ophæng, styretøj og dæk.`,
          `Hessel afbalancerer gratis, når du køber komplette hjul hos dem. Medlemmer af Hessels fordelsklubber betaler 625 kr. for et dækskift.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Værksted", "Pris"],
          raekker: [
            ["Hjulskift, hjul på dækhotellet", "Hessel", "500 kr."],
            ["Hjulskift uden dækhotel", "Hessel", "800 kr."],
            ["Dækskifte (dæk af og på fælg)", "Hessel", "1.000 kr."],
            ["Dækskifte, medlem af fordelsklub", "Hessel", "625 kr."],
            ["TPMS-kodning af ventiler", "A&M", "400 kr."],
            ["Afbalancering, 4 hjul", "A&M", "296 kr."],
            ["Transport mellem afdelinger", "A&M", "250 kr."]
          ],
          note: `Kilder: <a href="${HESSEL}" rel="noopener">Hessel</a> og <a href="${AM}" rel="noopener">A&M</a>, set den 4. oktober 2026. Dækskifte for medlemmer er set den 7. oktober 2026. A&M koder TPMS uden beregning ved deres egne hjulskift.`
        }
      },
      {
        overskrift: "Det kontrollerer værkstederne",
        tekst: [
          `Elkjær & Sørensen måler mønsteret med en laserscanner, som bilen kører hen over, og tjekker bagefter dækkenes alder og revner med hånden. Ved indleveringen giver de besked, hvis noget bør skiftes. Hessel vasker og kontrollerer hjulene, før de går på hylden.`,
          `Indholdet varierer, og kortene viser to eksempler.`
        ],
        kort: [
          ["Elkjær & Sørensen", "Mønstermåling ved indlevering, laserscanning af mønsterdybden, kontrol for alder og revner og TPMS-reset ved hvert skift."],
          ["Kraft Biler", "Eftersyn af dæk og fælge før opbevaring, dæktryk, kodning af dæktryksensorer, mønsterdybde og påmindelse, når det er tid til skift."]
        ],
        figur: {
          type: "trin",
          trin: [
            ["Indlevering", "Sættet bliver registreret, mønsteret målt og dækkene tjekket for alder og revner."],
            ["Opbevaring", "Hjulene står mærket, så sættet kommer på den rigtige bil."],
            ["Sæsonskift", "Du booker en tid, og værkstedet monterer hjulene og nulstiller TPMS."],
            ["Status", "Du får besked om mønster, alder og tilstand, før bilen kører."]
          ]
        },
        efter: [
          `Forløbet hos Elkjær & Sørensen. Kilde: <a href="${ES}" rel="noopener">Elkjær & Sørensen: Dækhotel</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sådan skal dæk opbevares",
        tekst: [
          `Continental skriver, at dæk kan ændre egenskaber og få kortere levetid, hvis de opbevares forkert. Dækkene skal være rene og tørre, før de kommer på lager, og de skal ikke have glans- eller plejemidler på.`,
          `Hvordan dækkene skal stå, afhænger af, om de sidder på fælge. Løse dæk har det bedst stående, fordi det belaster dem mindst. Hjul på fælge har det bedst stablet eller hængende på krog eller reol. Løse dæk må aldrig hænges op, fordi de kan miste formen.`,
          `Continental anbefaler at få dækkene tjekket af en fagmand, før de kommer på bilen igen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tre måder at opbevare dæk på: stående, som er bedst for løse dæk, stablet, som er bedst for hjul på fælge, og hængende, som passer til hjul på fælge, men aldrig til løse dæk."><rect class="tg-profil" x="28" y="40" width="26" height="90" rx="10"/><rect class="tg-profil" x="58" y="40" width="26" height="90" rx="10"/><rect class="tg-profil" x="88" y="40" width="26" height="90" rx="10"/><line class="tg-gulvlinje" x1="18" y1="130" x2="124" y2="130"/><rect class="tg-profil" x="155" y="110" width="90" height="20" rx="8"/><rect class="tg-profil" x="155" y="88" width="90" height="20" rx="8"/><rect class="tg-profil" x="155" y="66" width="90" height="20" rx="8"/><rect class="tg-profil" x="155" y="44" width="90" height="20" rx="8"/><rect class="tg-modul" x="180" y="114" width="40" height="12"/><rect class="tg-modul" x="180" y="92" width="40" height="12"/><rect class="tg-modul" x="180" y="70" width="40" height="12"/><rect class="tg-modul" x="180" y="48" width="40" height="12"/><line class="tg-gulvlinje" x1="148" y1="130" x2="252" y2="130"/><rect class="tg-hylde" x="280" y="34" width="100" height="6"/><line class="tg-skillevaeg" x1="302" y1="40" x2="302" y2="60"/><line class="tg-skillevaeg" x1="358" y1="40" x2="358" y2="60"/><circle class="tg-profil" cx="302" cy="86" r="26"/><circle class="tg-modul" cx="302" cy="86" r="14"/><circle class="tg-profil" cx="358" cy="86" r="26"/><circle class="tg-modul" cx="358" cy="86" r="14"/><line class="tg-gulvlinje" x1="276" y1="130" x2="384" y2="130"/><text class="tg-fremhaev" x="70" y="152" text-anchor="middle">Stående</text><text x="70" y="170" text-anchor="middle">løse dæk: bedst</text><text class="tg-fremhaev" x="200" y="152" text-anchor="middle">Stablet</text><text x="200" y="170" text-anchor="middle">på fælg: bedst</text><text x="200" y="186" text-anchor="middle">løse dæk: lavt</text><text class="tg-fremhaev" x="330" y="152" text-anchor="middle">Hængende</text><text x="330" y="170" text-anchor="middle">på fælg: godt</text><text x="330" y="186" text-anchor="middle">løse dæk: aldrig</text></svg>`,
          tekst: `Skematisk. Fælgene er fremhævet. Kilde: <a href="${CONT_OPB}" rel="noopener">Continental: Opbevaring af dæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Dækhotel eller opbevaring i firmaet",
        tekst: [
          `Har virksomheden selv plads, kan hjulene stå på lageret. Continental anbefaler et køligt, tørt og nogenlunde ventileret sted i skygge, helst med jævn temperatur som i en kælder. Dæk må aldrig stå udendørs, heller ikke under en presenning.`,
          `På et værksted eller et lager med maskiner er ozon det største problem. Continental skriver, at elmotorer med relæer laver ozon, fx i kompressorer, generatorer, fyr og elpaneler. Dækkene skal heller ikke stå ved brændstof, smøremidler eller opløsningsmidler.`,
          `Kraft Biler skriver, at forkert opbevaring kan give ujævnt slid, revner i gummiet og fugtskader. Med egen opbevaring skal hvert skift bookes og betales for sig.`
        ],
        tabel: {
          kolonner: ["", "Dækhotel", "Egen opbevaring"],
          raekker: [
            ["Plads", "Hos værkstedet", "I firmaets lager eller garage"],
            ["Skift", "Indgår typisk", "Bookes og betales for sig"],
            ["Kontrol af dækkene", "Ved indlevering", "Ved skiftet"],
            ["Pris pr. sæson", "Ca. 500–1.200 kr. med skift", "Hjulskift fra 500–800 kr."]
          ],
          note: `Priser fra tabellerne ovenfor, set den 4. oktober 2026.`
        },
        figur: {
          type: "daekning",
          kolonner: ["Opbevaringssted", "Egnet"],
          raekker: [
            ["Køligt, tørt og mørkt rum med jævn temperatur", "ja"],
            ["Garage, skur eller loft", "Helst ikke"],
            ["Udendørs, også under overdækning", "nej"],
            ["Rum med kompressor, generator eller elpanel", "nej"],
            ["Ved brændstof, smøremidler og opløsningsmidler", "nej"],
            ["I direkte sollys", "nej"]
          ],
          note: `Garager, skure og lofter har ofte skiftende temperatur, regn og fugt, skriver Continental. Kilde: <a href="${CONT_OPB}" rel="noopener">Continental: Opbevaring af dæk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "TPMS ved hjulskift",
        tekst: [
          `Med indirekte TPMS pumpes dækkene til korrekt tryk, og systemet nulstilles med en knap eller i menuen. Med direkte TPMS skal alle hjul have sensorer. Nogle systemer kalibrerer sig selv efter kort tids kørsel, andre skal på værksted, oplyser Færdselsstyrelsen. Varebiler registreret første gang fra 1. januar 2026 skal have TPMS.`,
          `TPMS står for dæktrykovervågning. Systemet tænder en kontrollampe, når trykket i et eller flere dæk er faldet 20 % eller mere. Kravet gælder ikke varebiler, der er fremstillet i lille serie.`,
          `Hos Elkjær & Sørensen er nulstilling af TPMS altid med i prisen for hjulskift. A&M koder ventilerne gratis ved deres egne hjulskift og tager 400 kr. ellers. Kraft Biler koder sensorerne som en del af dækhotellet.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["TPMS-kodning, A&M", "400", "kr."],
            ["Ved hjulskift hos A&M", "0", "kr."],
            ["Lampen tænder ved trykfald på", "20", "%"]
          ],
          note: `Kilder: <a href="${AM}" rel="noopener">A&M</a> og <a href="${SYN}" rel="noopener">Færdselsstyrelsen, synsvejledningen, afsnit 8.02.004 og 8.02.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Efterspænding efter 50 km",
        tekst: [
          `Continental skriver, at møtrikkerne efterspændes efter de første 50 km på nye eller skiftede hjul, og at værkstedet eller dækforhandleren tjekker det uden beregning.`,
          `Grunden er, at møtrikkerne kan flytte sig lidt. Bilens vægt, hjulenes drejning, varme og kulde og stød fra vejen kan få dem til at løsne sig eller blive for stramme. Snavs, sand, rust eller grus i gevindet kan også give en forkert måling, selv om nøglen var indstillet rigtigt.`,
          `Continental skriver, at mange værksteder tilbyder, at bilen kommer tilbage dagen efter, så hver møtrik kan tjekkes.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Efterspænding, Continental", 50, "km"],
            ["Efterspænding, Statens vegvesen", "ca. 40", "km"]
          ],
          note: `Statens vegvesen i Norge skriver, at hjulboltene skal efterspændes efter omkring 40 km ved hvert sæsonskift. Continental skriver, at værkstedet eller dækforhandleren tjekker det uden beregning.`
        }
      },
      {
        overskrift: "Sådan spændes møtrikkerne",
        tekst: [
          `Montøren spænder møtrikkerne med en momentnøgle til det moment, bilproducenten har fastsat. Momentet står i bilens instruktionsbog, og det er ikke det samme på alle biler.`,
          `Continental beskriver, at montøren først stiller nøglen på det halve moment og spænder alle møtrikker, og derefter spænder dem til den rigtige værdi. Rækkefølgen er fast. Fem eller ti møtrikker spændes i et stjernemønster, og fire møtrikker spændes to og to over for hinanden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="To fælge set fra siden. Fem møtrikker spændes i et stjernemønster, og fire møtrikker spændes to og to over for hinanden. Rækkefølgen er vist med den stiplede linje."><circle class="tg-profil" cx="100" cy="92" r="72"/><circle class="tg-kasse" cx="100" cy="92" r="44"/><path class="tg-skinne" fill="none" d="M100,64 L116.5,114.7 L73.4,83.3 L126.6,83.3 L83.5,114.7 Z"/><circle class="tg-kasse" cx="100" cy="64" r="6"/><circle class="tg-kasse" cx="126.6" cy="83.3" r="6"/><circle class="tg-kasse" cx="116.5" cy="114.7" r="6"/><circle class="tg-kasse" cx="83.5" cy="114.7" r="6"/><circle class="tg-kasse" cx="73.4" cy="83.3" r="6"/><circle class="tg-profil" cx="300" cy="92" r="72"/><circle class="tg-kasse" cx="300" cy="92" r="44"/><line class="tg-skinne" x1="280.2" y1="72.2" x2="319.8" y2="111.8"/><line class="tg-skinne" x1="319.8" y1="72.2" x2="280.2" y2="111.8"/><circle class="tg-kasse" cx="280.2" cy="72.2" r="6"/><circle class="tg-kasse" cx="319.8" cy="72.2" r="6"/><circle class="tg-kasse" cx="319.8" cy="111.8" r="6"/><circle class="tg-kasse" cx="280.2" cy="111.8" r="6"/><text class="tg-fremhaev" x="100" y="186" text-anchor="middle">Fem møtrikker</text><text class="tg-lille" x="100" y="200" text-anchor="middle">STJERNEMØNSTER</text><text class="tg-fremhaev" x="300" y="186" text-anchor="middle">Fire møtrikker</text><text class="tg-lille" x="300" y="200" text-anchor="middle">OVER FOR HINANDEN</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${CONT_EFT}" rel="noopener">Continental: Stramning af møtrikker på hjul</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hætter på hjulmøtrikkerne",
        tekst: [
          `Hjulmøtrikker skal ligge inden for dækkets yderside eller være afskærmet. Plasthætter, der viser, om en møtrik har løsnet sig, må rage op til 20 mm ud.`,
          `Statens vegvesen i Norge skriver, at hjulboltene skal efterspændes efter omkring 40 km ved hvert sæsonskift.`,
          `Hætten viser, om møtrikken har løsnet sig, så føreren kan se det uden værktøj i dagene efter skiftet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Snit gennem hjulet: hjulmøtrik inden for dækkets yderside og indikatorhætte, der højst må rage 20 mm ud"><defs><marker id="pil-vinterhjul-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="150" y="30" width="120" height="180" rx="22" class="tg-profil"/><rect x="190" y="96" width="70" height="44" class="tg-hylde"/><rect x="256" y="108" width="14" height="20" class="tg-kasse"/><rect x="270" y="110" width="17" height="16" rx="3" class="tg-kuffert"/><line x1="270" y1="20" x2="270" y2="220" class="tg-skinne-tynd"/><g class="tg-maal"><line x1="270" y1="88" x2="290" y2="88" marker-start="url(#pil-vinterhjul-2)" marker-end="url(#pil-vinterhjul-2)"/><text x="300" y="84" text-anchor="start">højst 20 mm</text></g><line x1="60" y1="118" x2="190" y2="118" class="tg-gulvlinje"/><text x="60" y="110" class="tg-lille">AKSEL</text><text x="276" y="212" class="tg-lille">DÆKKETS YDERSIDE</text><g class="tg-call"><line x1="287" y1="120" x2="300" y2="150"/><circle cx="287" cy="120" r="3"/><text x="272" y="162" class="tg-call__navn">Indikatorhætte</text><text x="272" y="176" class="tg-call__under">viser løs møtrik</text></g><g class="tg-call"><line x1="262" y1="130" x2="240" y2="176"/><circle cx="262" cy="130" r="3"/><text x="160" y="190" class="tg-call__navn">Møtrik</text><text x="160" y="204" class="tg-call__under">inden for ydersiden</text></g></svg>`,
          tekst: `Hjulmøtrik og indikatorhætte. Skematisk. Kilder: <a href="${SYN}" rel="noopener">synsvejledningen, afsnit 8.02.003</a> og <a href="${VV}" rel="noopener">Statens vegvesen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dækhotel i leasingaftalen",
        tekst: [
          `Ved operationel leasing kan dæk og skift ligge i aftalen. Ayvens skriver, at sæsondæk kan være en del af aftalen, og at skiftet sker hos Dækpartner eller Superdæk. Nordania har dækaftaler med booking af dækskift i appen.`,
          `Er sæsondæk med i en aftale hos Ayvens, og leveres bilen mellem 15. oktober og 31. marts, kommer den med vinterdæk på stålfælge uden hjulkapsler. Ayvens skriver også, at der kan være lang ventetid hos værkstederne i højsæsonen. Nordania monterer vinterdæk med 3PMSF på biler med dækaftale.`,
          `Kravet til mønsterdybde ved tilbagelevering står i leasingaftalen. Se også <a href="/haandbogen/det-staar-ikke-i-leasingtilbuddet/">det står ikke i leasingtilbuddet</a> og <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        efter: [
          `Kilder: <a href="${AYVENS}" rel="noopener">Ayvens: Dæk til din leasingbil</a> og <a href="${NORDANIA}" rel="noopener">Nordania: Nye regler for vinterdæk</a>, set den 7. oktober 2026. Forskellen på leasingformerne står i <a href="/haandbogen/finansiel-og-operationel-leasing/">finansiel og operationel leasing</a>.`
        ]
      },
      {
        overskrift: "Flere priser fra mærkeværksteder",
        tekst: [
          `Mærkeværkstederne har deres egne priser og fordelsaftaler. Hos Hessel får ejere af Mercedes, Renault, Ford og Dacia to gratis hjulskift om året i fordelsklubben.`,
          `FordPlus koster 649 kr. om året og giver ud over de to hjulskift 15 % rabat på værkstedet, 12 bilvaske om året og 18 øre i rabat pr. liter brændstof. To hjulskift uden aftale koster 1.000 kr. hos Hessel, når hjulene står på dækhotellet.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Værksted", "Pris"],
          raekker: [
            ["Hjulskifte, Mercedes-Benz", "Hessel", "400 kr."],
            ["Hjulopbevaring, Mercedes-Benz", "Hessel", "495 kr. pr. sæson"],
            ["FordPlus fordelsaftale med 2 hjulskift", "Hessel", "649 kr. pr. år"]
          ],
          note: `Kilder: <a href="${HES_MB}" rel="noopener">Hessel, Mercedes-Benz-service</a> og <a href="${HES_FORD}" rel="noopener">Hessel, Ford</a>, set den 4. oktober 2026. FordPlus giver også 15 % rabat på værkstedet.`
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Hessel, Mercedes-Benz", 400],
            ["Hessel, hjul på dækhotel", 500],
            ["Hessel, uden dækhotel", 800]
          ],
          note: `Pris pr. hjulskift. Kilder: <a href="${HES_MB}" rel="noopener">Hessel, Mercedes-Benz</a> og <a href="${HESSEL}" rel="noopener">Hessel, dæk og hjulskifte</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Fordelsklubberne og FordPlus: <a href="${HESSEL}" rel="noopener">Hessel</a> og <a href="${HES_FORD}" rel="noopener">Hessel, Ford</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hjulskift på firmaets adresse",
        tekst: [
          `Mercedes-Benz Mobile Service kan komme ud på firmaets adresse, montere nye hjul og opbevare dem. Samtidig laver de et sæsontjek, og de kan klare flere biler ved samme besøg. Hessel tilbyder Mobile Service i områderne omkring Roskilde og Kastrup.`,
          `For en flåde betyder det, at bilerne ikke skal køres til værkstedet en ad gangen. Hessel skriver, at teknikerne også laver serviceeftersyn, mindre reparationer og softwareopdateringer på adressen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Besøg", "Mercedes-Benz Mobile Service kommer ud på firmaets adresse."],
            ["Hjulskift og sæsontjek", "De monterer hjulene, laver et sæsontjek og kan klare flere biler ved samme besøg."],
            ["Opbevaring", "De kan også opbevare hjulene."]
          ]
        },
        efter: [
          `Kilder: <a href="${MB_MOB}" rel="noopener">Mercedes-Benz, Mobile Service</a> og <a href="${HES_MB}" rel="noopener">Hessel</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Varebiler prissættes for sig",
        tekst: [
          `Super Dæk Service har egne ydelser til varebiler: sæsonskift pr. hjul, lapning af varebildæk og nulstilling af TPMS. Du får prisen, når du beder om et tilbud.`,
          `Med en pris pr. hjul kan en flåde regne prisen ud for hver bil. Elkjær & Sørensen tager mere for store fælge, så en varebil på 18" fælge koster mere end en på 16".`
        ],
        efter: [
          `Kilde: <a href="${SDS}" rel="noopener">Super Dæk Service</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Vilkår i et abonnement",
        tekst: [
          `Et dækhotel på abonnement har binding og opsigelsesvarsel. Hos A&M koster Dækhotel Plus 179 kr. om måneden plus et administrationsgebyr på 6 kr. Betaler du med Betalingsservice, kommer der 14 kr. om måneden oveni, mens betalingskort er gratis.`,
          `Skiftes hjulene inden for de første 3 måneder af aftalen, kan der være en egenbetaling for det første skift. Uden for bindingsperioden kan aftalen opsiges med løbende måned plus 1 måneds varsel, og dækkene udleveres med få dages varsel.`,
          `A&M har afdelinger i Glostrup, Søborg, Taastrup og Greve. Mere om aftaler med værkstedet i <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a>.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Ved start", "179 kr. om måneden plus 6 kr. i administrationsgebyr for opbevaring og to hjulskift om året."],
            ["De første 3 måneder", "Et hjulskift i perioden kan koste en egenbetaling."],
            ["Ved opsigelse", "Løbende måned plus 1 måneds varsel, når bindingsperioden er slut."],
            ["Udlevering", "Dækkene udleveres med få dages varsel."]
          ],
          note: `Vilkårene for A&M Dækhotel Plus. Kilde: <a href="${AM}" rel="noopener">A&M: Dækhotel</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Booking og ventetid",
        tekst: [
          `Hessel skriver, at værkstederne får travlt, når den første sne eller nattefrost kommer, og at det så bliver sværere at få en tid. Hessel beder om, at du booker mindst en uge i forvejen, når hjulene står på dækhotellet. Elkjær & Sørensen skriver, at der typisk er en ledig tid cirka en uge efter bookingen, og at de åbner aftener og lørdage i de travle perioder.`,
          `Med flere biler kan skiftene spredes over nogle uger, så ikke alle biler står på værkstedet på samme dag. Kraft Biler og Elkjær & Sørensen sender påmindelser eller har online booking, så skiftet kan planlægges.`
        ],
        efter: [
          `Kilder: <a href="${HESSEL}" rel="noopener">Hessel</a>, <a href="${ES}" rel="noopener">Elkjær & Sørensen</a> og <a href="${KRAFT}" rel="noopener">Kraft Biler</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal værkstedet vide",
    spoergsmaal_manchet: "Så kan prisen gives for det rigtige antal biler og hjul.",
    spoergsmaal: [
      "Antal biler og fælgstørrelse.",
      "Om hjulene står på fælge, eller om dækkene skal lægges om.",
      "Om bilerne har direkte TPMS.",
      "Om skiftet skal ske på firmaets adresse.",
      "Om skiftene skal spredes over flere uger.",
      "Om dækkene er en del af en leasingaftale."
    ],
    faq: [
      ["Hvad koster dækhotel til en varebil?", "Hos de værksteder, vi har set på, fra 495 kr. pr. sæson for opbevaring og 499–1.195 kr. pr. sæson med hjulskift (oktober 2026). A&M har et abonnement til 179 kr. om måneden med to skift om året."],
      ["Hvad indgår i et dækhotel?", "Opbevaring og som regel hjulskift. Mange værksteder måler mønsterdybden og kontrollerer dækkene ved indlevering og nulstiller TPMS."],
      ["Hvad koster et hjulskift uden dækhotel?", "Hos Hessel 800 kr. og 500 kr., hvis hjulene står på deres dækhotel."],
      ["Hvad er forskellen på hjulskift og dækskift?", "Ved et hjulskift tages hele hjulet med fælg og dæk af bilen. Ved et dækskift monteres dæk på fælgen. Hos Hessel koster et dækskift 1.000 kr."],
      ["Er dækhotel med i leasingaftalen?", "Det afhænger af aftalen. Ayvens og Nordania har dækaftaler, hvor skiftet sker hos deres samarbejdspartnere."],
      ["Skal hjulene efterspændes?", "Continental skriver, at møtrikkerne efterspændes efter de første 50 km."],
      ["Hvordan skal dæk opbevares i firmaet?", "Køligt, tørt og mørkt og ikke udendørs. Continental skriver, at løse dæk har det bedst stående, og hjul på fælge stablet eller hængende. Dæk skal holdes væk fra kompressorer, generatorer, brændstof og opløsningsmidler."],
      ["Hvor langt må indikatorhætter på hjulmøtrikkerne stikke ud?", "Ifølge Færdselsstyrelsens synsvejledning må de stikke op til 20 mm uden for dækkets yderside."],
      ["Kan hjulskiftet ske på firmaets adresse?", "Ja, fx med Mercedes-Benz Mobile Service, der også kan opbevare hjulene. Hessel kører Mobile Service omkring Roskilde og Kastrup."]
    ],
    kilder: [
      { navn: "Hessel: Dækskifte, hjulskifte og dækhotel", url: HESSEL, dato: "2026-10-07" },
      { navn: "Elkjær & Sørensen: Hjulskift og dækhotel", url: ES, dato: "2026-10-07" },
      { navn: "Kraft Biler: Dækhotel", url: KRAFT, dato: "2026-10-07" },
      { navn: "A&M: Dækhotel Plus-abonnement", url: AM, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Vejledning om syn af køretøjer, gældende fra 1. september 2026 (afsnit 8.02 Hjul og dæk)", url: SYN, dato: "2026-10-07" },
      { navn: "Continental: Efterspænding af hjul", url: CONT_EFT, dato: "2026-10-07" },
      { navn: "Continental: Opbevaring af dæk", url: CONT_OPB, dato: "2026-10-07" },
      { navn: "Ayvens: Dæk til din leasingbil", url: AYVENS, dato: "2026-10-07" },
      { navn: "Nordania: Nye regler for vinterdæk i Danmark (dækaftale og booking)", url: NORDANIA, dato: "2026-10-07" },
      { navn: "Hessel: Service på Mercedes-Benz (hjulskifte, opbevaring, Mobile Service)", url: HES_MB, dato: "2026-10-07" },
      { navn: "Hessel: Ford +4 serviceeftersyn og FordPlus", url: HES_FORD, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Mobile Service", url: MB_MOB, dato: "2026-10-04" },
      { navn: "Statens vegvesen (Norge): Krav til dekk", url: VV, dato: "2026-10-04" },
      { navn: "Super Dæk Service: Ydelser og tilbud", url: SDS, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Hessel: et dækskifte er, når nye dæk monteres på bilens eksisterende fælge (fx ved punkterede eller slidte dæk); et hjulskifte er, når hele hjulet med dæk og fælg afmonteres, oftest ved skift mellem sommer- og vinterdæk.", HESSEL],
    ["Hessel: dækhotelprisen (495 og 995 kr. pr. sæson) gælder komplette hjul (fælge med dæk); løse dæk (montering på fælge) er ikke inkluderet; dækhotellet omfatter vask og kontrol.", HESSEL],
    ["Elkjær & Sørensen: opbevaringsprisen er den samme for hjul på fælge og løse dæk; løse dæk kræver montering og afbalancering ved sæsonskift; priserne er pr. sæson (forår/efterår), typisk 2 gange årligt.", ES],
    ["Regneeksempel på Elkjær & Sørensens priser: 2 × 995 kr. = 1.990 kr. om året (13–17\") og 2 × 1.195 kr. = 2.390 kr. om året (18–22\"); fem biler: 5 × 1.990 kr. = 9.950 kr.", ES],
    ["A&M: Dækhotel Plus koster 179 kr./md. (+ 6 kr. administrationsgebyr), Betalingsservice koster yderligere 14 kr./md., betalingskort er gratis; der kan være egenbetaling for første hjulskift inden for 3 mdr. fra aftalens start; uden for bindingsperioden kan aftalen opsiges med løbende måned + 1 måneds varsel; dækkene udleveres med få dages varsel; man kan bruge den afdeling, man ønsker (transport 250 kr.); afdelinger i Glostrup, Søborg, Taastrup og Greve. Regneeksempel: 12 × 179 kr. = 2.148 kr. om året før gebyr.", AM],
    ["Kraft Biler: 499 kr. dækker opbevaring og to dækskift om året; Kraft sender automatisk påmindelse om dækskift; forkert opbevaring kan give ujævn slitage, revner i gummiet og fugt- og skimmelskader.", KRAFT],
    ["Hessel: afbalancering er gratis ved køb af komplette sommer- eller vinterhjul; ikke-afbalancerede hjul giver rystelser og slid på ophæng, styretøj, dæk og roterende dele; dækskifte for medlemmer af fordelsklubberne koster 625 kr.", HESSEL],
    ["Hessel: fordelsklubberne for Mercedes-, Renault-, Ford- og Dacia-ejere giver 2 årlige gratis hjulskift.", HESSEL],
    ["Hessel FordPlus koster 649 kr./år og giver 15 % rabat på værkstedet, 12 gratis bilvaske pr. år, 2 gratis hjulskift pr. år og 18 øre rabat pr. liter brændstof.", HES_FORD],
    ["Elkjær & Sørensen måler mønster med en drive-over laserscanner og tjekker manuelt alder og revner; forløbet er indlevering (registrering, mønstermåling, tilstand), opbevaring med mærkning, sæsonskift med TPMS-reset og status på mønster, alder og tilstand; TPMS-reset er altid inkluderet ved hjulskift.", ES],
    ["Continental: forkert opbevaring kan ændre dækkenes egenskaber og forkorte levetiden; dæk skal rengøres og være tørre, ikke have smøre- eller glansprodukter; løse dæk opbevares bedst stående; hjul på fælge opbevares bedst stablet eller hængende på racks eller kroge; umonterede dæk må aldrig hænges op; dækkene bør tjekkes af en professionel før montering.", CONT_OPB],
    ["Continental: dæk bør opbevares køligt, tørt, nogenlunde ventileret og i skygge, bedst med konstant temperatur som i en kælder, aldrig i fri luft heller ikke under et beskyttende dække, ikke i direkte sollys; de fleste garager, skure og lofter er udsat for temperaturskift, regn og fugt; ozon fra elmotorer med relæer (generatorer, kompressorer, fyringsanlæg, elpaneler m.fl.) skal undgås, og det samme gælder opløsningsmidler, brændstof og smøremidler.", CONT_OPB],
    ["Synsvejledningen 8.02.004 og 8.02.024: original TPMS tænder en kontrollampe, når trykket i et eller flere dæk er faldet 20 % eller mere; kravet om TPMS gælder ikke varebil N1 fremstillet i lille serie.", SYN],
    ["Continental: belastninger fra bilens vægt, hjulenes drejning, opvarmning og nedkøling og stød fra vejen kan løsne eller stramme møtrikkerne; snavs, sand, rust eller grus i gevindet kan give falsk aflæsning af momentet; mange værksteder tilbyder at tjekke hjulene dagen efter.", CONT_EFT],
    ["Continental: møtrikker spændes med momentnøgle efter bilproducentens moment (står i brugermanualen); montøren spænder først til det halve moment og derefter til den korrekte værdi; fem eller ti møtrikker spændes i stjernemønster, fire møtrikker to og to over for hinanden.", CONT_EFT],
    ["Continental: korrekt dækbalance fordeler vægten ligeligt rundt om hele dækkets omkreds (teaser om afbalancering).", CONT_OPB],
    ["Hessel: hvert år får værkstederne travlt, når den første sne falder eller den første melding om nattefrost kommer, og det bliver vanskeligere at få en tid.", HESSEL],
    ["Ayvens: der kan forekomme lang ventetid hos værkstederne i højsæsonen.", AYVENS],
    ["Nordania monterer vinterdæk med 3PMSF på firmabiler med dækaftale.", NORDANIA],
    ["Hessel Mobile Service i områderne omkring Roskilde og Kastrup udfører serviceeftersyn, mindre reparationer og softwareopdateringer på kundens adresse.", HES_MB],
    ["Elkjær & Sørensen: typisk tid ca. 1 uge efter booking; i spidsbelastning åbner de lørdage og flere aftentider.", ES]
  ]
};
