// Underside /til-varebilen/el-abonnement/ladestander-paa-firmaadressen/ (07-10-2026)
var CE = `https://clever.dk/erhverv/ladeloesninger/ladeudstyr-til-virksomheden/`;
var CA = `https://clever.dk/hjaelp/faq/om-clevers-hjemmeladeboks/kom-i-gang/hvad-er-forskellen-paa-ac-og-dc-opladning/`;
var CK = `https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-key/`;
var SIK = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/opladning-el-biler`;
var SIK2 = `https://www.sik.dk/erhverv/elinstallationer-og-elanlaeg/vejledninger/elinstallationer/elbiler/oplad-din-el-bil-sikkert`;
var EWII = `https://www.ewii.dk/erhverv/opladning/`;
var ZAP = `https://www.zaptec.com/da/ladeloesninger/professionel-opladning/zaptec-pro`;
var JV = `https://info.skat.dk/data.aspx?oid=2062223`;
var JVM = `https://info.skat.dk/data.aspx?oid=2062289`;
var RENAULT = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master-e-tech-electric.pdf`;
var VW = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;
var KIA = `https://api.kiaonline.dk/dokumenter/pv5-cargo-l2h1-priser.pdf`;
var FORD = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/GetPDF.ashx`;

module.exports = {
  id: "el-abonnement/ladestander-paa-firmaadressen",
  side: {
    slug: "ladestander-paa-firmaadressen",
    navn: "Ladestander på firmaadressen",
    titel: "Ladestander til firma: typer og priser",
    kort: `AC eller DC, effekt, installation, leveringstid og priser fra danske leverandører.`,
    beskrivelse: `Ladestander på firmaets adresse: AC eller DC, 11 eller 22 kW, krav til installationen, leveringstid og priser fra danske leverandører.`,
    manchet: `En ladestander på firmaets adresse lader varebilerne om natten eller mellem opgaverne. Effekten afgør ladetiden, men bilens egen lader sætter grænsen. Installationen skal laves af en autoriseret elinstallatør.`,
    visuel: {
      hero: "el-abonnement",
      hero_el: true,
      kort_fortalt: [
        ["AC-lader i en typisk elbil", "op til 11 kW", "oplyser Clever"],
        ["Ladeboks, Clever Connect", "fra 6.999 kr.", "pr. boks uden moms"],
        ["22 kW-udtag", "32 A", "pr. udtag, skriver Clever"],
        ["Leveringstid", "4–7 uger", "fra godkendelse til færdig installation"]
      ],
      toc: true,
      stribe: { ids: ["kia-pv5-cargo", "vw-id-buzz-cargo", "renault-master-e-tech"], titel: "Elvarebiler fra ladetabellerne med tilbud lige nu" }
    },
    afsnit: [
      {
        overskrift: "AC eller DC",
        tekst: [
          `Elnettet leverer vekselstrøm (AC), men batteriet lades med jævnstrøm (DC). Ved AC-ladning omformer bilen selv strømmen, og bilens indbyggede lader sætter grænsen for effekten. Ved DC-ladning sker omformningen i standeren, og strømmen går direkte i batteriet.`,
          `Erhvervsboksene fra Clever og EWII er AC-bokse på op til 22 kW. Zaptec, der laver EWII's ladeboks, skriver, at 22 kW er den højeste effekt, man kan opnå med AC-ladning.`
        ],
        punkter: [
          `<strong>AC (vekselstrøm).</strong> Bilen omformer selv strømmen. Den typiske elbil kan tage op til 11 kW, oplyser Clever.`,
          `<strong>DC (jævnstrøm).</strong> Strømmen omformes i ladestanderen, og effekten kan være langt højere. Clevers lynladere leverer op til 300 kW.`,
          `<strong>Stik.</strong> AC-ladning sker med Type 2-stik og DC-ladning med CCS, skriver Ford i prislisten for E-Transit Custom.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 212" role="img" aria-label="AC-ladning: strømmen omformes i bilen. DC-ladning: strømmen omformes i ladestanderen."><text class="tg-fremhaev" x="0" y="16">AC: bilen omformer strømmen</text><rect class="tg-kasse" x="0" y="28" width="30" height="50"/><line class="tg-doer" x1="30" y1="53" x2="120" y2="53"/><text x="44" y="46">Type 2</text><rect class="tg-rum" x="120" y="28" width="180" height="50" rx="8"/><rect class="tg-modul" x="132" y="38" width="92" height="30"/><text class="tg-modul__tekst" x="140" y="57">OMFORMER</text><rect class="tg-kuffert" x="234" y="38" width="56" height="30"/><text x="238" y="57">batteri</text><circle class="tg-kasse" cx="150" cy="80" r="8"/><circle class="tg-kasse" cx="270" cy="80" r="8"/><text x="312" y="48">op til</text><text class="tg-fremhaev" x="312" y="64">11 kW</text><text class="tg-fremhaev" x="0" y="116">DC: standeren omformer strømmen</text><rect class="tg-kasse" x="0" y="128" width="80" height="50"/><rect class="tg-modul" x="6" y="138" width="68" height="30"/><text class="tg-modul__tekst" x="10" y="157">OMFORMER</text><line class="tg-doer" x1="80" y1="153" x2="120" y2="153"/><text x="88" y="146">CCS</text><rect class="tg-rum" x="120" y="128" width="180" height="50" rx="8"/><rect class="tg-kuffert" x="234" y="138" width="56" height="30"/><text x="238" y="157">batteri</text><circle class="tg-kasse" cx="150" cy="180" r="8"/><circle class="tg-kasse" cx="270" cy="180" r="8"/><text x="312" y="148">op til</text><text class="tg-fremhaev" x="312" y="164">300 kW</text><text class="tg-lille" x="0" y="206">TYPISK ELBIL OG CLEVERS LYNLADERE</text></svg>`,
          tekst: `Tegningen er skematisk og viser, hvor strømmen omformes ved AC- og DC-ladning. Kilder: <a href="${CA}" rel="noopener">Clever</a> og <a href="${FORD}" rel="noopener">Fords prisliste for E-Transit Custom</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Bilens lader sætter grænsen",
        tekst: [
          `En 22 kW-lader på væggen hjælper kun, hvis bilen kan tage 22 kW. Tabellen viser ladetider på AC fra producenternes prislister.`,
          `Producenterne opgiver ladetiden for forskellige intervaller, fx fra 10 til 100 % eller fra 0 til 100 %. Tiderne kan derfor ikke sammenlignes direkte. Renault oplyser begge tider for Master E-Tech med 87 kWh batteri, og 22 kW-laderen findes i 4,0 t-versionen.`
        ],
        tabel: {
          kolonner: ["Model", "Batteri", "11 kW", "22 kW", "Interval"],
          raekker: [
            ["Renault Master E-Tech", "87 kWh", "7,8 t", "3,8 t (4,0 t-versionen)", "10–100 %"],
            ["VW ID. Buzz Cargo", "59 kWh netto", "6 t 30 min", "–", "0–100 %"],
            ["Kia PV5 Cargo", "71,2 kWh", "6 t 40 min", "Tilvalg", "0–100 %"],
            ["Ford E-Transit Custom", "71 kWh", "Ca. 7 t", "–", "10–100 %"]
          ],
          note: `Kilder: producenternes danske prislister for <a href="${RENAULT}" rel="noopener">Renault Master E-Tech</a>, <a href="${VW}" rel="noopener">VW ID. Buzz Cargo</a>, <a href="${KIA}" rel="noopener">Kia PV5 Cargo</a> og <a href="${FORD}" rel="noopener">Ford E-Transit Custom</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "timer",
          data: [
            ["Master E-Tech, 11 kW", 7.8, "10–100 %"],
            ["Master E-Tech 4,0 t, 22 kW", 3.8, "10–100 %"]
          ],
          note: `Ladetid for Renault Master E-Tech med 87 kWh batteri. Kilde: <a href="${RENAULT}" rel="noopener">Renaults prisliste for Master E-Tech electric</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Renault Master E-Tech har 22 kW-lader i 4,0 t-versionen. Kia PV5 Cargo kan få 22 kW-lader som tilvalg for 12.500 kr. Flere ladetider står på <a href="/elvarebiler/">elvarebiler</a>.`
        ]
      },
      {
        overskrift: "Ampere og effekt",
        tekst: [
          `Ladeboksens effekt afhænger af, hvor mange ampere den kan trække fra installationen. Clevers ladepunkter bruger mellem 8 og 32 ampere, og 22 kW kræver 32 ampere pr. udtag.`,
          `Har virksomheden ikke ampere nok til rådighed, skal den købe ekstra hos forsyningsselskabet. Det kan kræve en udbygning af elinstallationen, og så bliver leveringstiden længere.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Clevers erhvervsbokse, op til", 22, "kW"],
            ["Ladepunkterne bruger", "8–32", "A"],
            ["22 kW kræver pr. udtag", 32, "A"]
          ],
          note: `Kilde: <a href="${CE}" rel="noopener">Clever: Ladeudstyr til virksomheden</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser fra danske leverandører",
        tekst: [
          `Alle priser på siden er uden moms. Clever sælger og udlejer erhvervsladebokse, og priserne er vejledende og fra den 7. oktober 2026.`,
          `Installationen kommer oven i prisen i begge modeller. Clever sender et uforpligtende tilbud efter en besigtigelse af adressen, og løsningen afhænger af ladebehovet, installationsmulighederne og budgettet.`
        ],
        tabel: {
          kolonner: ["Løsning", "Model", "Engangspris", "Pr. md."],
          raekker: [
            ["Clever Connect", "Køb, op til 22 kW", "Fra 6.999 kr. pr. ladeboks", "29 kr. (serviceaftale)"],
            ["Clever Total", "Leje med fuld service", "Installation", "99 kr."]
          ],
          note: `Kilde: <a href="${CE}" rel="noopener">Clever: Ladeudstyr til virksomheden</a>, set den 7. oktober 2026. Installation og eventuel ny måler eller netkapacitet kommer oveni.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Eje eller leje",
        tekst: [
          `Clever sælger ladebokse til virksomheder på to måder: køb med en serviceaftale eller leje med fuld service og vedligehold.`,
          `Ved køb betaler virksomheden for ladeboksen og installationen og derefter en fast ydelse for serviceaftalen. Ved leje betaler den kun for installationen og derefter en fast ydelse for leje og fuld service. Clever oplyser en oppetid på over 99 % for ladeboksene.`,
          `EWII sælger en samlet pakke, hvor EWII står for indkøb, installation, gravearbejde og tilslutning. Ladeboksen er en Zaptec Pro på 22 kW med ét Type 2-udtag, og den kan monteres på væg eller stander.`
        ]
      },
      {
        overskrift: "Service pr. ladeboks",
        tekst: [
          `Søjlerne viser den månedlige pris pr. ladeboks. Clever Total er leje med fuld service og vedligehold, mens de to andre er serviceaftaler, som kommer oven i købet af boksen. EWII's aftale dækker garanti, softwareopdatering, forbrugsdata i realtid og kundesupport.`,
          `EWII's garanti dækker ikke skader, der skyldes brugerfejl eller udefrakommende forhold. Har virksomheden flere ladebokse, skal der købes en serviceaftale til hver. Zaptec giver selv 5 års garanti på Zaptec Pro.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr./md.",
          data: [
            ["Clever Connect, service", 29],
            ["EWII, serviceaftale", 69],
            ["Clever Total, leje", 99]
          ],
          note: `Kilder: <a href="${CE}" rel="noopener">Clever</a> og <a href="${EWII}" rel="noopener">EWII</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ladestanderne på adressen",
        tekst: [
          `Ladestanderne får strøm fra bygningens eltavle gennem en kabelvej til parkeringspladserne. EWII's erhvervspakke omfatter installation, gravearbejde og opsætning af ladestanderne.`,
          `Afstanden fra eltavlen til parkeringspladserne afgør, hvor meget kabel og gravearbejde der skal til. Hos Clever graver installationspartneren, lægger kabler og installerer ladeudstyret, når tilbuddet er godkendt og tidsplanen lagt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Ladestandere på firmaets parkeringsplads forsynet fra eltavlen, med måler i hver stander"><defs><marker id="pil-el-abonnement-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect x="10" y="60" width="120" height="140" class="tg-rum"/><text x="20" y="80" class="tg-fremhaev">Bygning</text><rect x="40" y="100" width="50" height="60" class="tg-kasse"/><rect x="48" y="112" width="34" height="14" class="tg-modul"/><text x="65" y="178" text-anchor="middle">Eltavle</text><line x1="0" y1="200" x2="400" y2="200" class="tg-gulvlinje"/><line x1="90" y1="140" x2="130" y2="140" class="tg-skinne"/><line x1="130" y1="140" x2="130" y2="215" class="tg-skinne"/><line x1="130" y1="215" x2="332" y2="215" class="tg-skinne"/><line x1="182" y1="215" x2="182" y2="200" class="tg-skinne"/><line x1="257" y1="215" x2="257" y2="200" class="tg-skinne"/><line x1="332" y1="215" x2="332" y2="200" class="tg-skinne"/><rect x="170" y="140" width="24" height="60" class="tg-kasse"/><rect x="174" y="150" width="16" height="12" class="tg-modul"/><rect x="245" y="140" width="24" height="60" class="tg-kasse"/><rect x="249" y="150" width="16" height="12" class="tg-modul"/><rect x="320" y="140" width="24" height="60" class="tg-kasse"/><rect x="324" y="150" width="16" height="12" class="tg-modul"/><text x="257" y="128" text-anchor="middle" class="tg-lille">P-pladser</text><g class="tg-maal"><line x1="90" y1="234" x2="182" y2="234" marker-start="url(#pil-el-abonnement-2)" marker-end="url(#pil-el-abonnement-2)"/><text x="136" y="248" text-anchor="middle">Kabelvej</text></g><g class="tg-call"><line x1="65" y1="119" x2="65" y2="42"/><circle cx="65" cy="119" r="3"/><text x="14" y="22" class="tg-call__navn">Lastbalancering</text><text x="14" y="36" class="tg-call__under">aflæser forbruget</text></g><g class="tg-call"><line x1="182" y1="156" x2="200" y2="42"/><circle cx="182" cy="156" r="3"/><text x="170" y="22" class="tg-call__navn">Måler i standeren</text><text x="170" y="36" class="tg-call__under">kWh pr. ladepunkt</text></g></svg>`,
          tekst: `Skematisk. Ladestandere på firmaets adresse med måler i hver stander og lastbalancering i eltavlen. Kilder: <a href="${EWII}" rel="noopener">EWII</a>, <a href="${ZAP}" rel="noopener">Zaptec</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Afregning af strømmen",
        tekst: [
          `Strømmen til ladeboksene kan gå gennem bygningens eltavle eller uden om den. Clever tilbyder begge dele.`,
          `Med en særskilt måler uden om eltavlen bliver måleren tilmeldt Clevers elselskab, Clever Power, og Clever afregner strømmen til opladning direkte. Så er strømmen til bilerne holdt adskilt fra virksomhedens øvrige forbrug.`,
          `Går strømmen gennem eltavlen, betaler virksomheden først hele forbruget til sit elselskab. Bagefter bliver den strøm, der er brugt til opladning, afregnet med Clever til den gældende afregningssats. Clever har ingen tilbagebetaling til virksomheder.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="To måder at afregne strømmen til ladeboksene. Øverst en særskilt måler uden om bygningens eltavle, hvor Clever afregner strømmen direkte via Clever Power. Nederst går strømmen gennem bygningens eltavle, virksomheden betaler den, og opladningen afregnes med Clever bagefter."><text class="tg-fremhaev" x="0" y="16">Særskilt måler uden om eltavlen</text><text x="0" y="60">Net</text><rect class="tg-modul" x="30" y="40" width="56" height="30"/><text class="tg-modul__tekst" x="58" y="59" text-anchor="middle">MÅLER</text><line class="tg-skinne" x1="86" y1="55" x2="150" y2="55"/><rect class="tg-kasse" x="150" y="32" width="20" height="44"/><rect class="tg-kasse" x="184" y="32" width="20" height="44"/><line class="tg-skinne" x1="170" y1="55" x2="184" y2="55"/><text x="232" y="50">afregnes direkte</text><text x="232" y="66">via Clever Power</text><text class="tg-fremhaev" x="0" y="116">Gennem bygningens eltavle</text><text x="0" y="160">Net</text><rect class="tg-kasse" x="30" y="140" width="56" height="30"/><text x="58" y="159" text-anchor="middle">Måler</text><line class="tg-skillevaeg" x1="86" y1="155" x2="100" y2="155"/><rect class="tg-rum" x="100" y="140" width="50" height="30"/><text x="125" y="159" text-anchor="middle">Tavle</text><line class="tg-skinne" x1="150" y1="155" x2="170" y2="155"/><rect class="tg-kasse" x="170" y="132" width="20" height="44"/><rect class="tg-kasse" x="204" y="132" width="20" height="44"/><line class="tg-skinne" x1="190" y1="155" x2="204" y2="155"/><text x="240" y="146">virksomheden betaler</text><text x="240" y="162">opladningen afregnes</text><text x="240" y="178">med Clever bagefter</text><text class="tg-lille" x="0" y="206">TO MÅDER HOS CLEVER</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${CE}" rel="noopener">Clever: Ladeudstyr til virksomheden</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Opladning af flådebiler med ladebrik",
        tekst: [
          `Med Clever Key lader firmaets biler med en ladebrik, der følger bilen. Prisen på virksomhedens egne Clever-ladebokse er 1,41 kr. pr. kWh ved normal- og hurtigopladning op til 99 kW (set den 7. oktober 2026).`,
          `Clever Key er forbrugsafregnet, så virksomheden kun betaler for den strøm, bilerne lader. Brikken giver også en nedsat kWh-pris på Clevers offentlige ladenetværk, hvor prisen kan variere over døgnet og fra sted til sted. Fordi brikken følger bilen, kan flere chauffører lade med den samme.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Clevers pris på virksomhedens egne ladebokse", "1,41", "kr. pr. kWh"],
            ["Prisen gælder op til", 99, "kW"]
          ],
          note: `Prisen gælder ved normal- og hurtigopladning. Kilde: <a href="${CK}" rel="noopener">Clever: Clever Key</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Medarbejdere og gæster",
        tekst: [
          `Ladeboksene på adressen kan også bruges af medarbejdernes egne elbiler og af gæster. Hos Clever er boksene åbne for alle, men hver opladning startes med en brik eller i appen, og brugeren ser prisen, før opladningen starter.`,
          `I EWII's platform kan virksomheden sætte forskellige priser for medarbejdere, gæster og offentligheden. Den kan også gøre ladestanderne tilgængelige på bestemte tidspunkter og følge forbrug og indtjening i realtid.`,
          `Lader virksomheden medarbejdernes private elbiler gratis, kan elafgiften stadig godtgøres efter særordningen (SKM2022.432.SR). Svaret handler også om moms og skat af den gratis opladning. Se <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`
        ]
      },
      {
        overskrift: "Fra tilbud til færdig ladestander",
        tekst: [
          `Forløbet ligner hinanden hos leverandørerne. EWII begynder med et introduktionsmøde, hvorefter en elektriker gennemgår de praktiske forhold og sender en projektering og en pris. Når tilbuddet er godkendt, står EWII for indkøb, installation, gravearbejde og tilslutning.`,
          `Clever skriver, at det typisk tager 3–6 uger fra første spadestik, til bilerne kan lade. Clever tester installationen, før installatøren forlader adressen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Møde og behov", "Leverandøren gennemgår ladebehov, installationsmuligheder og budget."],
            ["Besigtigelse", "En elektriker ser på de praktiske forhold på adressen."],
            ["Tilbud og plan", "Virksomheden får en pris, godkender tilbuddet, og der lægges en tidsplan."],
            ["Installation", "Installatøren graver, lægger kabler og monterer ladeboksene."],
            ["Test og opstart", "Ladeboksene testes, og ladestander og software kobles sammen."]
          ]
        },
        efter: [
          `Kilder: <a href="${EWII}" rel="noopener">EWII</a> og <a href="${CE}" rel="noopener">Clever</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Leveringstid",
        tekst: [
          `Clever regner med 4–7 uger fra accept til færdig installation. Skal forsyningsselskabet sætte en måler op, kan det tage 8–12 uger.`,
          `Skal der tilføres flere ampere, er Clever afhængig af forsyningsselskaberne, som ofte har en leveringstid på 8–12 uger. Så er det typiske skøn 16–20 uger i alt.`
        ],
        tabel: {
          kolonner: ["Situation", "Typisk tid"],
          raekker: [
            ["Fra godkendelse til færdig installation", "4–7 uger"],
            ["Hvis der skal sættes en måler op", "8–12 uger"],
            ["Hvis netkapaciteten skal øges", "16–20 uger"]
          ],
          note: `Kilde: <a href="${CE}" rel="noopener">Clever: Ladeudstyr til virksomheden</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["4–7 uger", "Så lang tid tager det typisk fra godkendelse til færdig installation."],
            ["8–12 uger", "Så lang tid tager det, hvis der skal sættes en måler op."],
            ["16–20 uger", "Så lang tid tager det, hvis netkapaciteten skal øges."]
          ],
          note: `Kilde: <a href="${CE}" rel="noopener">Clever: Ladeudstyr til virksomheden</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Hvem må installere",
        tekst: [
          `Ændringer i elinstallationen, fx en særlig ladestikkontakt eller en ekstra sikringsgruppe i eltavlen, skal laves af en autoriseret elinstallatørvirksomhed, skriver Sikkerhedsstyrelsen. Sikkerhedsstyrelsen har en funktion til at tjekke håndværkerens autorisation. Sikkerhedsstyrelsen er fra januar 2026 en del af Erhvervsstyrelsen.`,
          `Hos Clever udfører en autoriseret installationspartner arbejdet.`
        ]
      },
      {
        overskrift: "Krav til installationen",
        tekst: [
          `Sikkerhedsstyrelsen beskriver kravene til stikkontakter og ladestandere, der bruges til opladning. De vigtigste står herunder.`
        ],
        punkter: [
          `<strong>Egen RCD.</strong> En dedikeret ladestikkontakt skal have sin egen fejlstrømsafbryder, mindst type A og højst 30 mA.`,
          `<strong>Egen gruppe.</strong> Belastes stikkontakten med over 6 A i mere end 2 timer, skal den være beregnet til længerevarende høj belastning, og Sikkerhedsstyrelsen anbefaler en separat gruppe.`,
          `<strong>Ingen forlængerledning.</strong> Forlængerledninger mellem bil og stikkontakt er ikke tilladt.`,
          `<strong>Parkeringskælder.</strong> I en offentlig parkeringskælder kan ladestandere installeres med kanalskinner.`
        ]
      },
      {
        overskrift: "Fejlstrømsafbryder (RCD)",
        tekst: [
          `En RCD er en fejlstrømsafbryder. Alle AC-tilslutningspunkter og stikkontakter i installationen skal fejlbeskyttes, også ladestanderens AC-stik. Type A var tidligere kendt som HPFI-afbryder.`
        ],
        punkter: [
          `<strong>Type B.</strong> Kapitel 722 tager udgangspunkt i type B, fordi den kan håndtere rene DC-reststrømme.`,
          `<strong>Type A eller F.</strong> De kan bruges, hvis ladestanderen har indbygget blokering, der begrænser DC-reststrømme til 6 mA, og fabrikanten foreskriver det.`,
          `<strong>Test.</strong> Installationen verificeres, når en ladeboks sættes op.`
        ],
        efter: [
          `Kilde: <a href="${SIK}" rel="noopener">Sikkerhedsstyrelsen: Opladning af el-biler</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Samtidig ladning",
        tekst: [
          `Uden belastningsstyring regner man efter DS/HD 60364-7-722 med samtidighedsfaktor 1, altså at alle ladestandere kan køre fuld effekt samtidig. Sikkerhedsstyrelsen nævner belastningsstyring som nødvendig, hvis forsyningsselskabet ikke kan levere effekten, eller af økonomiske grunde. Se <a href="/til-varebilen/el-abonnement/lastbalancering/">lastbalancering</a>.`,
          `De fleste bygninger har tre faser, men mange elbiler lader kun på én fase. Lader mange biler på samme fase, kan ladehastigheden falde meget, skriver Zaptec. Zaptec Pro fordeler bilerne på de tre faser og kan skifte mellem en- og trefaset ladning afhængigt af bilen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 210" role="img" aria-label="To tegninger af fire ladestandere. Uden belastningsstyring er installationen dimensioneret, så alle standere kan køre med fuld effekt samtidig. Med belastningsstyring fordeles den effekt, der er til rådighed, mellem standerne."><text class="tg-fremhaev" x="0" y="16">Uden styring</text><text class="tg-fremhaev" x="210" y="16">Med styring</text><line class="tg-skillevaeg" x1="200" y1="26" x2="200" y2="190"/><text x="0" y="44">alle på fuld effekt</text><rect class="tg-modul" x="20" y="70" width="24" height="80"/><rect class="tg-modul" x="62" y="70" width="24" height="80"/><rect class="tg-modul" x="104" y="70" width="24" height="80"/><rect class="tg-modul" x="146" y="70" width="24" height="80"/><line class="tg-skinne-tynd" x1="10" y1="70" x2="180" y2="70"/><line class="tg-gulvlinje" x1="10" y1="150" x2="180" y2="150"/><text x="0" y="170">dimensioneret til alle</text><text x="0" y="186">på samme tid</text><text x="210" y="44">effekten fordeles</text><rect class="tg-modul" x="226" y="110" width="24" height="40"/><rect class="tg-modul" x="268" y="126" width="24" height="24"/><rect class="tg-modul" x="310" y="94" width="24" height="56"/><rect class="tg-kasse" x="352" y="140" width="24" height="10"/><line class="tg-gulvlinje" x1="216" y1="150" x2="390" y2="150"/><text x="210" y="170">efter den effekt,</text><text x="210" y="186">der er til rådighed</text><text class="tg-lille" x="0" y="206">SAMTIDIGHEDSFAKTOR 1 UDEN STYRING</text></svg>`,
          tekst: `Skematisk. Søjlerne viser ikke bestemte tal. Kilder: <a href="${SIK}" rel="noopener">Sikkerhedsstyrelsen: Opladning af el-biler</a> og <a href="${ZAP}" rel="noopener">Zaptec: Zaptec Pro</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Måler og elafgift",
        tekst: [
          `Driver virksomheden ladestanderen for egen regning og risiko, kan elafgiften på strømmen til registrerede elbiler godtgøres. Det kræver en måler i ladestanderen. Se <a href="/til-varebilen/el-abonnement/refusion-af-elafgift/">refusion af elafgift</a>.`,
          `Zaptec Pro fås med en indbygget måler, der overholder EU's måleinstrumentdirektiv (MID). Skattestyrelsen kræver ikke MID-godkendelse, men målingerne skal kunne dokumentere, hvor meget afgiftspligtig strøm der er brugt.`
        ]
      },
      {
        overskrift: "Normal- og højeffektladestander",
        tekst: [
          `Reglerne skelner mellem normale ladestandere på højst 22 kW og højeffektladestandere over 22 kW. Tabellen viser, hvilket stik hver type mindst skal have.`
        ],
        tabel: {
          kolonner: ["Type", "Effekt", "Stik mindst"],
          raekker: [
            ["Normal ladestander", "Højst 22 kW", "Type 2 (EN 62196-2)"],
            ["Højeffekt, AC", "Over 22 kW", "Type 2 (EN 62196-2)"],
            ["Højeffekt, DC", "Over 22 kW", "Combo 2 (EN 62196-3)"]
          ],
          note: `Kilde: <a href="${SIK}" rel="noopener">Sikkerhedsstyrelsen</a> om bekendtgørelse nr. 57 af 25. januar 2018, set den 4. oktober 2026. Ladestandere på højst 3,7 kW i private hjem er ikke omfattet af definitionen.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal elinstallatøren vide",
    spoergsmaal_manchet: "Så kan installationen dimensioneres til bilerne.",
    spoergsmaal: [
      "Antal biler og hvor mange der skal lade på samme tid.",
      "Bilernes AC-lader: 11 eller 22 kW.",
      "Hvor bilerne holder, og afstanden til eltavlen.",
      "Om virksomheden ejer eller lejer bygningen.",
      "Om ladestanderen skal være offentlig, for medarbejdere og gæster eller kun for egne biler.",
      "Om strømmen skal måles særskilt til refusion af elafgift eller afregnes uden om eltavlen."
    ],
    faq: [
      ["Hvad koster en ladestander til firmaet?", "Clever sælger erhvervsladebokse fra 6.999 kr. pr. boks plus 29 kr. om måneden for service, eller udlejer dem for 99 kr. om måneden plus installation (set den 7. oktober 2026)."],
      ["Skal en ladestander installeres af en elinstallatør?", "Ja. Sikkerhedsstyrelsen skriver, at en særlig ladestikkontakt eller ekstra sikringsgruppe skal laves af en autoriseret elinstallatørvirksomhed."],
      ["Er 22 kW bedre end 11 kW?", "Kun hvis bilen kan lade med 22 kW på AC. Mange elvarebiler har en 11 kW-lader. Renault Master E-Tech lader fra 10 til 100 % på 3,8 timer ved 22 kW (4,0 t-versionen) og 7,8 timer ved 11 kW."],
      ["Hvor lang tid tager det at få en ladestander?", "4–7 uger fra godkendelse hos Clever, 8–12 uger hvis der skal en måler op, og 16–20 uger hvis netkapaciteten skal øges."],
      ["Hvad er forskellen på AC og DC?", "Ved AC omformer bilen selv strømmen, typisk med op til 11 kW. Ved DC sker omformningen i standeren, og effekten kan være langt højere."],
      ["Hvilken fejlstrømsafbryder skal en ladestander have?", "Som udgangspunkt en RCD type B. Har ladestanderen indbygget blokering, der begrænser DC-reststrømme til 6 mA, kan den type, fabrikanten foreskriver, bruges, typisk type A eller F, skriver Sikkerhedsstyrelsen."],
      ["Hvad koster en serviceaftale på en ladestander?", "Clever tager 29 kr. om måneden for service på en købt Clever Connect-boks, og EWII 69 kr. om måneden pr. ladeboks. Leje med fuld service hos Clever koster 99 kr. om måneden. Priserne er fra den 7. oktober 2026."],
      ["Kan medarbejdere og gæster lade på firmaets ladestander?", "Ja. Hos Clever er boksene åbne for alle, og hver opladning startes med brik eller app. I EWII's platform kan virksomheden sætte forskellige priser for medarbejdere, gæster og offentligheden."],
      ["Kan strømmen til ladestanderne afregnes uden om virksomhedens elregning?", "Ja. Clever kan sætte en særskilt måler op uden om bygningens eltavle og afregne strømmen til opladning direkte via Clever Power."]
    ],
    kilder: [
      { navn: "Clever: Ladeudstyr til virksomheden", url: CE, dato: "2026-10-07" },
      { navn: "Clever: Hvad er forskellen på AC- og DC-opladning", url: CA, dato: "2026-10-04" },
      { navn: "Clever: Clever Key", url: CK, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Opladning af el-biler", url: SIK, dato: "2026-10-07" },
      { navn: "Sikkerhedsstyrelsen: Oplad din el-bil sikkert", url: SIK2, dato: "2026-10-04" },
      { navn: "Renault: Prisliste Master E-Tech electric (1.10.–31.12.2026)", url: RENAULT, dato: "2026-10-04" },
      { navn: "Volkswagen: Prisliste ID. Buzz Cargo", url: VW, dato: "2026-10-04" },
      { navn: "Kia: Priser PV5 Cargo L2H1", url: KIA, dato: "2026-10-04" },
      { navn: "Ford: Prisliste E-Transit Custom", url: FORD, dato: "2026-10-04" },
      { navn: "EWII: Ladestander til virksomhed", url: EWII, dato: "2026-10-07" },
      { navn: "Zaptec: Zaptec Pro", url: ZAP, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning 2026-2: E.A.4.6.3.2 Godtgørelse af afgift af elektricitet", url: JV, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: E.A.4.6.14.5 Elforbrugsmålere", url: JVM, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Clevers erhvervsladebokse kan levere op til 22 kW; EWII's ladeboks er Zaptec Pro, en 22 kW AC-lader med ét Type 2-udtag, der kan monteres på væg og stander.", EWII],
    ["Zaptec skriver, at 22 kW er den højeste effekt, man kan opnå med AC-opladning.", ZAP],
    ["Har virksomheden ikke nok ampere til rådighed, skal den tilkøbe ekstra ampere hos forsyningsselskabet, og det vil muligvis kræve en udbygning af elinstallationen.", CE],
    ["Clever sender et uforpligtende tilbud efter en besigtigelse af virksomhedens adresse; løsningen findes ud fra ladebehov, installationsmuligheder og budget.", CE],
    ["Ved køb betaler virksomheden for ladeboksen, installationen og en fast ydelse for serviceaftale; ved leje kun installationen og en fast ydelse for leje og fuld service; Clever oplyser en oppetid på over 99 %.", CE],
    ["EWII står for indkøb, installation, gravearbejde og tilslutning; garantien dækker ikke skader, der skyldes brugerfejl eller udefrakommende forhold; har virksomheden flere ladebokse, skal der tilkøbes en serviceaftale til hver.", EWII],
    ["Zaptec giver 5 års garanti på Zaptec Pro.", ZAP],
    ["Clevers autoriserede installationspartner graver, lægger kabler og installerer ladeudstyret, når tilbuddet er godkendt og tidsplanen lagt; det tager typisk 3-6 uger fra første spadestik, til bilerne kan lade, og Clever tester, at alt virker.", CE],
    ["Clever kan installere en særskilt måler uden om bygningens eltavle, tilmeldt Clever Power, og afregne strømmen til opladning direkte; alternativt går strømmen gennem eltavlen, virksomheden betaler, og opladningsstrømmen afregnes med Clever til den gældende afregningssats; der er ikke tilbagebetaling for virksomheder.", CE],
    ["Clever Key er forbrugsafregnet; brikken giver nedsat kWh-pris også på Clevers offentlige netværk, hvor prisen kan variere over døgnet og mellem lokationer; ladebrikken skal følge bilen, så flere brugere kan lade med samme brik.", CK],
    ["Clevers ladebokse er åbne for alle, men hver opladning startes med brik eller app; brugeren ser prisen, før opladningen startes.", CE],
    ["I EWII's platform kan virksomheden sætte forskellige priser for medarbejdere, gæster og offentligheden, gøre ladestandere tilgængelige på bestemte tidspunkter og følge forbrug og indtjening i realtid.", EWII],
    ["SKM2022.432.SR: godtgørelse efter særordningen for strøm til gratis opladning af medarbejdernes private elbiler på virksomhedens adresse; svaret omhandler også moms og skat.", JV],
    ["EWII's forløb: introduktionsmøde, besigtigelse med projektering og pris, tilbud og opstart, levering, montering, installation og tilslutning, hvor ladestander og software kobles sammen.", EWII],
    ["Ved tilførsel af flere ampere er Clever afhængig af forsyningsselskaberne, der ofte har en leveringstid på 8-12 uger, hvilket giver et typisk estimat på 16-20 uger.", CE],
    ["Alle AC-tilslutningspunkter og stikkontakter i installationen skal fejlbeskyttes, også ladestanderens AC-stik; RCD type A var tidligere kendt som HPFI-afbryder.", SIK],
    ["De fleste bygninger har tre faser; mange elbiler lader kun på én fase, og ladehastigheden kan falde drastisk, når mange lader på samme fase; Zaptec Pro har dynamisk fasebalancering og kan skifte mellem en- og trefaset opladning afhængigt af bilen.", ZAP],
    ["Zaptec Pro (MID) har et indbygget måleinstrument, der overholder EU's Measuring Instruments Directive.", ZAP],
    ["Efter SKM2024.555.SKTST er MID-godkendelse ikke en betingelse; målingerne skal kunne dokumentere mængden af forbrugt afgiftspligtig elektricitet.", JVM]
  ]
};
