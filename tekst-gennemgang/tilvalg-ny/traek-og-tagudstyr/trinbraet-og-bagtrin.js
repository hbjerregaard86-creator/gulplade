// Underside /til-varebilen/traek-og-tagudstyr/trinbraet-og-bagtrin/ (07-10-2026)
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var RAM = `https://www.rameder.dk/anhaengertraek/tilbehor-til-anhaengertraek/trin/`;
var VK = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/trinbraet-side-og-bagtrin/`;
var VK_IMPACT = `https://www.vankompagniet.dk/product/bagtrinbraet-rhino-impactstep-til-biler-uden-p-sensor/`;
var VK_ACCESS = `https://www.vankompagniet.dk/product/bagtrinbraetrhino-accessstep-til-biler-uden-p-sensor/`;
var VK_BASIC = `https://www.vankompagniet.dk/product/bagtrinbraet-basic-60-cm-krom-flange-montage-2-x-90-mm-eller-4-x-83-mm/`;
var AYVENS = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var JYSKE = `https://jyskefinans.dk/jyske-fleet/find-svar/aflevering-af-bil/`;
var RH_TOW = `https://www.rhinoproducts.eu/product/towstep/`;
var RH_IMP = `https://www.rhinoproducts.eu/product/impactstep/`;
var RH_ACC = `https://www.rhinoproducts.eu/product/accessstep/`;

module.exports = {
  id: "traek-og-tagudstyr/trinbraet-og-bagtrin",
  side: {
    slug: "trinbraet-og-bagtrin",
    navn: "Trinbræt og bagtrin",
    titel: "Trinbræt og bagtrin til varebil",
    kort: `Bagtrin i anhængertrækket eller til biler uden træk, bagtrapper og sidetrin. Priser, vægt, og hvad detailforskrifterne siger om trinbræt og bilens mål.`,
    beskrivelse: `Bagtrin og trinbræt til varebil fra 503,99 kr.: trin i trækkets flange, trin til biler uden træk, priser, vægt og reglen om 0,10 m for trinbræt.`,
    manchet: `Et bagtrin gør det lettere at nå varerummet og taget. Det enkleste sidder i anhængertrækkets flange og koster fra 503,99 kr. med moms. Rhinos bagtrin til biler uden træk koster fra 6.995 kr. Her er typerne, priserne og reglerne for trinbræt.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Trin til trækket", "fra 503,99 kr.", "med moms hos Rameder"],
        ["Bagtrin uden træk", "fra 6.995 kr.", "Rhino AccessStep"],
        ["Trinbræt på siden", "højst 0,10 m", "ud fra karrosseriet"],
        ["Bagtrappe, Rhino", "136 kg", "største belastning ifølge Rameder"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Fire typer",
        tekst: [
          `Et bagtrin gør det lettere at nå varerummet bagfra og taget, og et trinbræt på siden gør det lettere at komme ind ved førerdøren eller skydedøren. Hvilket bagtrin der passer, afhænger først og fremmest af, om bilen har et anhængertræk, og om trækket har en flange.`,
          `Har bilen et træk med flange, kan trinnet sidde i trækket. Har bilen ikke træk, findes der bagtrin, der monteres direkte på bilen, men de kan ikke kombineres med et træk.`
        ],
        kort: [
          ["Trin i trækket", "Spændes fast i anhængertrækkets flange mellem kuglen og trækket."],
          ["Bagtrappe", "Et trin med flere trappetrin, der også monteres i trækkets flange."],
          ["Bagtrin uden træk", "Sidder bag på biler uden anhængertræk, fx Rhino AccessStep og ImpactStep."],
          ["Trinbræt på siden", "Et trin langs bilens side ved førerdør eller skydedør."]
        ]
      },
      {
        overskrift: "Priser",
        tekst: [
          `Prisen spænder fra et simpelt universaltrin til trækket til et stødabsorberende bagtrin med plads til parkeringssensorer. VanKompagniets priser er uden moms, og Rameders er med moms. Ingen af priserne omfatter montering.`,
          `Rameders universaltrin fås til venstre eller højre side af trækket, og dobbelttrinnene kommer fra flere producenter, bl.a. AUTO-HAK, GDW og Westfalia. VanKompagniets VK Basic-bagtrin er 60 cm bredt og forkromet.`
        ],
        tabel: {
          kolonner: ["Produkt", "Forhandler", "Moms", "Fra"],
          raekker: [
            ["Universaltrin til højre eller venstre", "Rameder", "Inkl.", "503,99 kr."],
            ["Dobbelttrin, AUTO-HAK", "Rameder", "Inkl.", "881,99 kr."],
            ["Dobbelttrin, GDW", "Rameder", "Inkl.", "1.440,99 kr."],
            ["Dobbelttrin, Westfalia", "Rameder", "Inkl.", "1.456,99 kr."],
            ["VK Basic bagtrin, 60 cm, krom", "VanKompagniet", "Ekskl.", "1.596 kr."],
            ["Universal bagtrappe, 3-delt, Rhino", "Rameder", "Inkl.", "3.339,99 kr."],
            ["Rhino AccessStep, uden P-sensor", "VanKompagniet", "Ekskl.", "6.995 kr."],
            ["Rhino ImpactStep, uden P-sensor", "VanKompagniet", "Ekskl.", "11.995 kr."],
            ["Rhino ImpactStep, med P-sensor", "VanKompagniet", "Ekskl.", "14.995 kr."]
          ],
          note: `Kilder: <a href="${RAM}" rel="noopener">Rameder</a> og <a href="${VK}" rel="noopener">VanKompagniet</a>, vejledende priser uden montering, set den 4. oktober 2026 og den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Montering i trækkets flange",
        tekst: [
          "Trinene til trækket passer til flanger med 2 huller med 90 mm afstand eller 4 huller med 83 x 56 mm. Det gælder både Rameders universaltrin og dobbelttrin og VanKompagniets VK Basic-bagtrin. Bilen skal have et træk med flange. Se <a href=\"/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/\">anhængertræk til varebil</a>.",
          `Et svanehalstræk har ingen flange, så her passer et trin til trækket ikke. VanKompagniet sælger fx det faste træk til Expert, Jumpy, ProAce, Vivaro og Scudo både med svanehals og med flange til samme pris, og det er flangeudgaven, der giver plads til et bagtrin.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 184" role="img" aria-label="To hulmønstre i anhængertrækkets flange: 2 huller med 90 mm afstand og 4 huller med 83 x 56 mm afstand"><defs><marker id="pil-flange-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-fremhaev" x="100" y="24" text-anchor="middle">2 huller</text><text class="tg-fremhaev" x="289" y="24" text-anchor="middle">4 huller</text><rect class="tg-profil" x="36" y="40" width="128" height="80"/><circle class="tg-kasse" cx="55" cy="80" r="7"/><circle class="tg-kasse" cx="145" cy="80" r="7"/><line class="tg-pil" x1="55" y1="136" x2="145" y2="136" marker-start="url(#pil-flange-1)" marker-end="url(#pil-flange-1)"/><text x="100" y="154" text-anchor="middle">90 mm</text><rect class="tg-profil" x="230" y="40" width="118" height="92"/><circle class="tg-kasse" cx="248" cy="58" r="6"/><circle class="tg-kasse" cx="331" cy="58" r="6"/><circle class="tg-kasse" cx="248" cy="114" r="6"/><circle class="tg-kasse" cx="331" cy="114" r="6"/><line class="tg-pil" x1="248" y1="148" x2="331" y2="148" marker-start="url(#pil-flange-1)" marker-end="url(#pil-flange-1)"/><text x="289.5" y="166" text-anchor="middle">83 mm</text><line class="tg-pil" x1="358" y1="58" x2="358" y2="114" marker-start="url(#pil-flange-1)" marker-end="url(#pil-flange-1)"/><text x="364" y="90">56 mm</text><text class="tg-lille" x="0" y="180">SKEMATISK · HULAFSTAND I MM</text></svg>`,
          tekst: "Tegningen er skematisk og viser de to hulmønstre i trækkets flange, som trinene til trækket passer til."
        }
      },
      {
        overskrift: "Trin og anhænger på samme træk",
        tekst: [
          "Rhino TowStep monteres på trækkets flange og har en aftagelig midtersektion, så en anhænger kan kobles til uden at tage trinnet af. Rhino oplyser, at anhængeren kan dreje 110°.",
          `Rameders 3-delte universale bagtrappe giver også plads til en anhænger med en mulig drejevinkel på 110°. Den har et skridsikkert trinbræt og passer til begge hulmønstre.`
        ],
        punkter: [
          "Trinnet passer til træk med flange.",
          "Det findes med og uden baksensorer, og til udvalgte biler kan det kobles til bilens egne sensorer med Connect+.",
          "Trædefladen er skridsikker og fås i sort eller gul.",
          "Ifølge Rhino tager monteringen 20 minutter."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Til venstre trinbræt set ovenfra, der højst rager 0,10 meter ud fra karrosseriet. Til højre bagtrin spændt fast i anhængertrækkets flange mellem trækket og kuglen"><defs><marker id="pil-trin-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect class="tg-profil" x="20" y="40" width="120" height="120"/><rect class="tg-modul" x="140" y="70" width="14" height="60"/><text x="80" y="104" text-anchor="middle">Karrosseri</text>
<g class="tg-maal"><line x1="140" y1="172" x2="154" y2="172" marker-start="url(#pil-trin-1)" marker-end="url(#pil-trin-1)"/><text x="147" y="190" text-anchor="middle">højst 0,10 m</text></g>
<rect class="tg-profil" x="210" y="74" width="96" height="96"/><circle class="tg-hylde" cx="246" cy="174" r="16"/><line class="tg-gulvlinje" x1="200" y1="190" x2="396" y2="190"/>
<rect class="tg-hylde" x="306" y="140" width="6" height="30"/><circle class="tg-kasse" cx="309" cy="148" r="2"/><circle class="tg-kasse" cx="309" cy="162" r="2"/>
<rect class="tg-modul" x="312" y="160" width="62" height="7"/>
<path class="tg-gulvlinje" fill="none" d="M312,150 L336,150 Q346,150 346,140 L346,132"/><circle class="tg-kasse" cx="346" cy="125" r="6"/>
<g class="tg-call"><line x1="309" y1="155" x2="330" y2="66"/><circle cx="309" cy="155" r="3"/><text class="tg-call__navn" x="222" y="46">Flange</text><text class="tg-call__under" x="222" y="60">Trin mellem træk og kugle</text></g>
<text class="tg-lille" x="20" y="28">SET OVENFRA</text><text class="tg-lille" x="210" y="28">SET FRA SIDEN</text>
<text x="20" y="216">Trinbræt på siden: ikke unødig fare ved højst 0,10 m</text><text x="20" y="232">Bagtrin: hulafstand 2 x 90 mm eller 4 x 83 x 56 mm</text></svg>`,
          tekst: "Skematisk. Til venstre ses reglen for trinbræt på siden efter detailforskrifterne og til højre et bagtrin i trækkets flange."
        }
      },
      {
        overskrift: "Bæreevne",
        tekst: [
          "Rameder oplyser 136 kg som største belastning for Rhinos 3-delte bagtrappe. For de øvrige trin er bæreevnen ikke oplyst på forhandlernes sider.",
          `Rameder oplyser både bæreevne og drejevinkel for bagtrappen i sin produktliste, og bagtrappen er tredelt med et skridsikkert trinbræt. VanKompagniet angiver vægten på sine bagtrin, men ikke bæreevnen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bæreevne, 3-delt bagtrappe", 136, "kg"],
            ["Drejevinkel for anhænger, bagtrappe", "110", "°"],
            ["Drejevinkel for anhænger, Rhino TowStep", "110", "°"]
          ],
          note: `Kilder: <a href="${RAM}" rel="noopener">Rameder: Trin til anhængertræk</a>, set den 7. oktober 2026, og <a href="${RH_TOW}" rel="noopener">Rhino TowStep</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Trin til biler uden træk",
        tekst: [
          "Rhino AccessStep og ImpactStep kan kun monteres på biler uden anhængertræk. VanKompagniet beskriver en indbygget fjeder i ImpactStep, der tager imod et let stød uden skade på bil eller trin, og angiver vægten til 14,1 kg.",
          `AccessStep vejer 13,9 kg ifølge VanKompagniet. Da trinnene kun kan monteres på biler uden træk, kan de ikke sidde på bilen samtidig med et træk.`,
          `AccessStep fås med to eller tre trin i copolymer, mens ImpactStep har en skridsikker trædeflade i fuld bredde ifølge Rhino. Hos VanKompagniet koster AccessStep 6.995 kr. og ImpactStep 11.995 kr. uden P-sensor.`
        ]
      },
      {
        overskrift: "Bagtrin, der tager stød",
        tekst: [
          "Rhino ImpactStep er bygget til at tage mindre stød ved parkering og læsning. To gummibuffere giver op til 60 mm sammentrykning, og et drejeligt beslag tager stød på hjørnet. Trinnet er i aluminium 6063 T6 og er TÜV- og KBA-godkendt ifølge Rhino."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Sammentrykning i gummibufferne", "op til 60", "mm"],
            ["Vægt", "14,1", "kg"]
          ],
          note: `Rhino oplyser sammentrykningen, og VanKompagniet oplyser vægten på ImpactStep. Kilder: <a href="${RH_IMP}" rel="noopener">Rhino ImpactStep</a>, set den 4. oktober 2026, og <a href="${VK_IMPACT}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Parkeringssensorer",
        tekst: [
          "Rhinos bagtrin findes i udgaver med og uden plads til parkeringssensorer. Hos VanKompagniet koster ImpactStep 11.995 kr. uden og 14.995 kr. med P-sensor.",
          `Udgaverne med P-sensor har plads til parkeringssensorer, og TowStep kan til udvalgte biler kobles til bilens egne sensorer med Connect+.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["AccessStep uden P-sensor", 6995],
            ["ImpactStep uden P-sensor", 11995],
            ["ImpactStep med P-sensor", 14995]
          ],
          note: `Søjlerne viser vejledende priser uden montering hos <a href="${VK}" rel="noopener">VanKompagniet</a>, set den 4. oktober 2026 og den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Rhinos tre bagtrin",
        tekst: [
          `Rhino har tre bagtrin til varebiler. TowStep sidder i trækket, mens AccessStep og ImpactStep er til biler uden træk. Alle tre kan fås med plads til parkeringssensorer og monteres på 20 minutter ifølge Rhino.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "TowStep", "AccessStep", "ImpactStep"],
          raekker: [
            ["Kræver træk med flange", "ja", "nej", "nej"],
            ["Til biler uden træk", "nej", "ja", "ja"],
            ["Stødabsorbering", "nej", "nej", "Op til 60 mm"],
            ["Trædeflade", "Skridsikker", "Copolymer, 2 eller 3 trin", "Skridsikker, fuld bredde"],
            ["Med P-sensorer", "tilvalg", "tilvalg", "tilvalg"],
            ["Monteringstid", "20 min.", "20 min.", "20 min."]
          ],
          note: `Kilder: <a href="${RH_TOW}" rel="noopener">TowStep</a>, <a href="${RH_ACC}" rel="noopener">AccessStep</a> og <a href="${RH_IMP}" rel="noopener">ImpactStep</a> hos Rhino Products, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Reglen for trinbræt",
        tekst: [
          "Trinbræt skal være udformet og anbragt, så det ikke medfører unødig fare for andre trafikanter. Fremspringende eller udragende trinbræt skal have afskærmning eller afrundede hjørner. Et trinbræt på siden regnes ikke for unødig fare, hvis det højst rager 0,10 m ud fra karrosseriet.",
          `Rager trinbrættet mere end 0,10 m ud, gælder den generelle regel om, at det ikke må være til unødig fare, og særligt udragende trin skal være afskærmet eller have afrundede hjørner. Reglen står blandt detailforskrifternes almene regler og gælder derfor alle køretøjer, ikke kun varebiler.`
        ]
      },
      {
        overskrift: "Sidebars langs siden",
        tekst: [
          `VanKompagniet sælger 46 forskellige sidebars til varebiler. Ifølge VanKompagniet skal de beskytte siderne på en lang varebil, når der drejes om hjørner, og de kan skiftes, hvis de bliver beskadiget. Priserne går fra 5.995 kr. til Partner, Berlingo, ProAce City, Combo og Doblo i længde 2 til 10.995 kr. til de største modeller.`,
          `Sidebars fås i blank krom, sortlakeret og børstet stål, og en udgave til Sprinter har indbygget LED-sidemarkeringslys til 9.995 kr. De vejer 12–17 kg ifølge produktsiderne. Sidebars er faste dele på siden af bilen, så de tæller med, når bilens bredde måles.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Partner og Berlingo L2, Basic", "5.995", "kr."],
            ["Expert og Vivaro L2 og L3, Basic", "6.995", "kr."],
            ["Boxer og Ducato L2, Premium", "10.995", "kr."]
          ],
          note: `Vejledende priser uden montering. Kilde: <a href="https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/sidebars-til-varevogn/" rel="noopener">VanKompagniet: Sidebars til varevogn</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Trin og bilens mål",
        tekst: [
          `Trinbræt og håndgreb tæller ikke med, når bilens længde måles, og det gør anhængertræk heller ikke, uanset om de er faste eller kan foldes ind. Et bagtrin i trækket gør derfor ikke bilen længere i reglernes forstand. Til sammenligning tæller læssebagsmæk og læsseramper kun ikke med, hvis de højst rager 0,30 m ud og ikke øger bilens lasteevne.`,
          `Bredden er anderledes. Bilen må højst være 2,55 m bred målt over de dele, der rager længst ud. Trin, der kan foldes ind, tæller ikke med, men et fast trinbræt på siden gør.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Varebil set ovenfra med anhængertræk, bagtrin og et trinbræt på siden. Længden måles uden træk og trinbræt, mens et fast trinbræt tæller med i bredden. Et trinbræt, der højst rager 0,10 meter ud, regnes ikke for unødig fare."><defs><marker id="pil-trin-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-rum" x="80" y="70" width="220" height="90" rx="10"/><line class="tg-skillevaeg" x1="262" y1="70" x2="262" y2="160"/><line class="tg-gulvlinje" x1="80" y1="115" x2="54" y2="115"/><circle class="tg-kasse" cx="50" cy="115" r="5"/><rect class="tg-modul" x="56" y="95" width="10" height="40"/><rect class="tg-modul" x="130" y="160" width="100" height="8"/><line class="tg-skinne-tynd" x1="80" y1="46" x2="80" y2="70"/><line class="tg-skinne-tynd" x1="300" y1="46" x2="300" y2="70"/><g class="tg-maal"><line x1="80" y1="50" x2="300" y2="50" marker-start="url(#pil-trin-2)" marker-end="url(#pil-trin-2)"/><text x="190" y="42" text-anchor="middle">længde uden træk og trin</text></g><line class="tg-skinne-tynd" x1="300" y1="70" x2="322" y2="70"/><line class="tg-skinne-tynd" x1="230" y1="168" x2="322" y2="168"/><g class="tg-maal"><line x1="318" y1="70" x2="318" y2="168" marker-start="url(#pil-trin-2)" marker-end="url(#pil-trin-2)"/><text x="326" y="114">bredde med</text><text x="326" y="128">fast trin</text></g><g class="tg-call"><line x1="58" y1="97" x2="40" y2="36"/><circle cx="58" cy="97" r="3"/><text class="tg-call__navn" x="4" y="16">Træk og bagtrin</text><text class="tg-call__under" x="4" y="30">tæller ikke i længden</text></g><g class="tg-call"><line x1="180" y1="168" x2="180" y2="186"/><circle cx="180" cy="168" r="3"/><text class="tg-call__navn" x="110" y="200">Trinbræt</text><text class="tg-call__under" x="110" y="214">højst 0,10 m ud fra karrosseriet</text></g></svg>`,
          tekst: `Skematisk. Trin, der kan foldes ind, tæller ikke med i bredden. Kilde: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 3.02.001 og 9.06.003</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Trin til taget",
        tekst: [
          "Rhino beskriver AccessStep som en stabil platform til at nå taget, så føreren ikke skal stå på et dæk, når tagudstyr læsses af og på. Rammen er svejset i stål S275, og trinnet har refleksmærke. Det findes i rød og sort.",
          `En anden måde at nå taget på er en fast stige på bagdøren. Rhinos VanLadder er testet til en sikker arbejdsbelastning på 120 kg og monteres på 30–45 minutter.`
        ],
        efter: [
          "Du kan læse om stiger og holdere til taget i <a href=\"/til-varebilen/traek-og-tagudstyr/stigeholder/\">stigeholder</a>."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Varebil set fra siden med et bagtrin med to trin bag på bilen. Trinnet bruges som platform til at nå taget i stedet for at stå på dækket."><defs><marker id="pil-trin-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(150,196)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><rect class="tg-kasse" x="164" y="72" width="8" height="8"/><rect class="tg-kasse" x="300" y="72" width="8" height="8"/><rect class="tg-profil" x="138" y="176" width="14" height="10"/><rect class="tg-modul" x="118" y="168" width="34" height="6"/><rect class="tg-modul" x="108" y="186" width="44" height="6"/><line class="tg-skinne" x1="124" y1="160" x2="148" y2="92" marker-end="url(#pil-trin-3)"/><line class="tg-gulvlinje" x1="4" y1="213" x2="396" y2="213"/><g class="tg-call"><line x1="118" y1="171" x2="70" y2="140"/><circle cx="118" cy="171" r="3"/><text class="tg-call__navn" x="4" y="116">Bagtrin</text><text class="tg-call__under" x="4" y="130">platform til taget</text></g><g class="tg-call"><line x1="204" y1="188" x2="330" y2="46"/><circle cx="204" cy="188" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Dækket</text><text class="tg-call__under" x="395" y="38" text-anchor="end">trinnet bruges i stedet</text></g><text class="tg-lille" x="4" y="228">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${RH_ACC}" rel="noopener">Rhino Products: AccessStep</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Trinnet vejer",
        tekst: [
          `Trinnet går fra bilens nyttelast ligesom andet udstyr. VK Basic-trinnet til trækket vejer 4 kg, mens Rhinos to bagtrin til biler uden træk vejer omkring 14 kg hver.`,
          `Sidder trinnet i et træk, kommer trækkets egen vægt oveni. Den står i <a href="/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/">anhængertræk til varebil</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["VK Basic bagtrin, 60 cm", 4],
            ["Rhino AccessStep", 13.9],
            ["Rhino ImpactStep", 14.1]
          ],
          note: `Vægten er oplyst på produktsiderne hos <a href="${VK}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Ved aflevering af leasingbilen",
        tekst: [
          "Ayvens tager 1.500 kr. for manglende afmontering af ekstra udstyr. Jyske Fleet takserer skader fra eftermonteret udstyr som skade på bilen og skriver, at eftermonteret udstyr skal afleveres sammen med bilen.",
          `Ayvens skriver også, hvad selskabet accepterer som almindelig slitage. I varerummet er en tilfredsstillende udbedring af monteringshuller fra eftermonteret udstyr og reoler i orden, mens synlige monteringshuller eller mærker i kabinen ikke accepteres. Ulovlige konstruktionsændringer koster 2.500 kr. plus den faktiske udbedring. Ayvens' gebyrer er fra juni 2025 og uden moms.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer trinnet til bilen.",
    spoergsmaal: [
      "Bilens model og årgang.",
      "Om bilen har anhængertræk, og hvilken flange det har.",
      "Om bilen har parkeringssensorer bagpå.",
      "Om trinnet skal bruges til varerummet, taget eller begge.",
      "Om der skal trækkes en anhænger, mens trinnet sidder på.",
      "Om bilen er leaset."
    ],
    faq: [
      ["Hvad koster et bagtrin til en varebil?", "Fra 503,99 kr. med moms for et universaltrin til trækket hos Rameder og 1.596 kr. for VK Basic-bagtrinnet hos VanKompagniet (oktober 2026)."],
      ["Kan bagtrinnet sidde i anhængertrækket?", "Ja. De fleste trin spændes fast i trækkets flange med 2 x 90 mm eller 4 x 83 x 56 mm hulafstand."],
      ["Hvor langt må et trinbræt rage ud?", "Et trinbræt på siden regnes ikke for unødig fare, hvis det højst rager 0,10 m ud fra karrosseriet."],
      ["Findes der bagtrin til biler uden træk?", "Ja. Rhino AccessStep og ImpactStep kan kun monteres på biler uden anhængertræk."],
      ["Kan man køre med anhænger, når bagtrinnet sidder i trækket?", "Rhino TowStep har en aftagelig midtersektion, så anhængeren kan kobles til med trinnet monteret. Rhino oplyser, at drejevinklen er 110°."],
      ["Hvad er et ImpactStep?", "Det er et bagtrin fra Rhino til biler uden træk. Det har gummibuffere med op til 60 mm sammentrykning, der tager mindre stød ved parkering."],
      ["Gør et bagtrin bilen længere?", "Ikke i reglernes forstand. Trinbræt og anhængertræk tæller ikke med, når bilens længde måles efter detailforskrifterne."],
      ["Hvad vejer et bagtrin?", "VanKompagniet oplyser 4 kg for VK Basic-bagtrinnet til trækket, 13,9 kg for Rhino AccessStep og 14,1 kg for Rhino ImpactStep."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 9.06.003", url: DETAIL, dato: "2026-10-07" },
      { navn: "Rameder: Trin til anhængertræk", url: RAM, dato: "2026-10-07" },
      { navn: "VanKompagniet: Trinbræt, side- og bagtrin", url: VK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Rhino ImpactStep uden P-sensor", url: VK_IMPACT, dato: "2026-10-07" },
      { navn: "VanKompagniet: Rhino AccessStep uden P-sensor", url: VK_ACCESS, dato: "2026-10-07" },
      { navn: "VanKompagniet: VK Basic bagtrin 60 cm", url: VK_BASIC, dato: "2026-10-07" },
      { navn: "VanKompagniet: Sidebars til varevogn", url: "https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/sidebars-til-varevogn/", dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYVENS, dato: "2026-10-07" },
      { navn: "Jyske Fleet: Aflevering af bil", url: JYSKE, dato: "2026-10-07" },
      { navn: "Rhino Products: TowStep", url: RH_TOW, dato: "2026-10-04" },
      { navn: "Rhino Products: ImpactStep", url: RH_IMP, dato: "2026-10-04" },
      { navn: "Rhino Products: AccessStep", url: RH_ACC, dato: "2026-10-04" },
      { navn: "Rhino Products: VanLadder", url: "https://www.rhinoproducts.eu/product/vanladder/", dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["VanKompagniets kategori Sidebars til varevogn viser 46 resultater; sidebars beskytter vangerne på den lange varevogn, når der drejes om hjørner, og kan nemt udskiftes ved skader; priser ekskl. moms fra 5.995 kr. (Basic Polished Krom, Partner/Berlingo/ProaceCity/Combo/Doblo L2) over 6.995 kr. (Basic, Expert/Jumpy/Proace/Vivaro/Scudo L2/L3) til 10.995 kr. (fx Premium, Boxer/Jumper/Ducato/Movano/Proace Max L2); udgave med indbygget LED sidemarkeringslys til Sprinter L2 9.995 kr.; vægt 12–17 kg; fås i blank krom, sortlakeret og børstet stål.", "https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/sidebars-til-varevogn/"],
    ["Rameders universaltrin fås til venstre eller højre for anhængerbukke; dobbelttrin fra bl.a. AUTO-HAK, GDW og Westfalia; VanKompagniets VK Basic bagtrin er 60 cm og forkromet.", RAM],
    ["Rameder: universal bagtrappe 3-delt til trækbeslag passer til 4 hulmønster 83 x 56 mm og 2 hulmønster 90 mm, har skridsikkert trinbræt, bæreevne 136 kg og mulig drejevinkel for anhænger 110°; 3.339,99 kr. inkl. moms.", RAM],
    ["VanKompagniet sælger det faste anhængertræk til Expert/Jumpy/ProAce/Vivaro/Scudo både med svanehals og med flange til samme pris (10.995 kr. ekskl. moms).", "https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/3-4-anhaengertraek/"],
    ["VanKompagniet: Rhino AccessStep uden P-sensor vejer 13,9 kg og kan kun monteres på biler uden anhængertræk; Rhino ImpactStep vejer 14,1 kg; VK Basic bagtrin 60 cm krom (flangemontage 2 x 90 mm eller 4 x 83 mm) vejer 4 kg.", VK_ACCESS],
    ["Ved måling af længden ses bort fra bl.a. trinbræt og håndgreb samt tilkoblingsanordninger på motorkøretøjer (faste og indfoldelige) (pkt. 3.02.001, stk. 7, litra j og m); læssebagsmæk, læsseramper og lignende udstyr i køreklar stand ses der kun bort fra, hvis udragningen ikke overstiger 0,30 m, og lastemuligheden ikke forøges (litra l).", DETAIL],
    ["Detailforskrifter med nummer 001-009 er almene forskrifter for komponenterne i underafsnittet; 010 og opefter er særlige forskrifter for bestemte køretøjsarter (pkt. 1.01.004); trinbræt står i pkt. 9.06.003.", DETAIL],
    ["Jyske Fleet: eftermonteret udstyr skal afleveres sammen med leasingbilen.", JYSKE],
    ["Bredden må højst være 2,55 m og måles over de længst udragende dele; der ses bort fra trin, der kan foldes (trækkes) ind (pkt. 3.02.001, stk. 2, litra i).", DETAIL],
    ["Ayvens accepterer som almindelig slitage i varerum/lad 'tilfredsstillende udbedring af monteringshuller forårsaget af eftermonteret udstyr og reoler', men ikke 'synlige monteringshuller eller mærker forårsaget af eftermonteret udstyr' i interiør/kabine; ulovlige konstruktionsændringer koster 2.500 kr. plus faktisk udbedringsomkostning; gebyrer ekskl. moms pr. juni 2025.", AYVENS]
  ]
};
