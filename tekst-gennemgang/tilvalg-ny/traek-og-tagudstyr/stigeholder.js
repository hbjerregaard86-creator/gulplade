// Underside /til-varebilen/traek-og-tagudstyr/stigeholder/ (07-10-2026)
var AT = `https://www.retsinformation.dk/eli/retsinfo/2026/10133`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var DIM = `https://www.retsinformation.dk/eli/lta/2025/1447`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var VK = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/tagboejler-til-varevogn/`;
var VK_SAFE = `https://www.vankompagniet.dk/product/safestow4-31-m-1-stige/`;
var VK_CLAMP = `https://www.vankompagniet.dk/product/safeclamp-sigeholder/`;
var VK_RULLE = `https://www.vankompagniet.dk/product/vk-basic-stigerulle-til-berlingo-partner-proace-city-combo-doblo-l2/`;
var RH_SS4 = `https://www.rhinoproducts.eu/product/safestow4/`;
var RH_CLAMP = `https://www.rhinoproducts.eu/product/safeclamp/`;
var RH_LS = `https://www.rhinoproducts.eu/product/ladderstow/`;
var RH_VL = `https://www.rhinoproducts.eu/product/vanladder/`;

module.exports = {
  id: "traek-og-tagudstyr/stigeholder",
  side: {
    slug: "stigeholder",
    navn: "Stigeholder",
    titel: "Stigeholder til varebil: typer og priser",
    kort: `Stigeklemmer, stigeruller og nedfældelige stigeholdere til varebilen, priser, og hvad Arbejdstilsynet lægger vægt på, når stigen løftes op og ned fra taget.`,
    beskrivelse: `Stigeholder til varebil: klemmer fra 995 kr., stigerulle og nedfældelige holdere. Priser, vægt og Arbejdstilsynets praksis for løft over skulderhøjde.`,
    manchet: `En stige på taget kan sidde i to klemmer på tagbøjlerne eller i en holder, der fælder stigen ned langs bilens side. Klemmerne koster fra 995 kr. og en nedfældelig holder fra 32.995 kr. Her er typerne, priserne og Arbejdstilsynets praksis for løft over skulderhøjde.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Stigeklemmer, 2 stk.", "fra 995 kr.", "Cruz til tagbøjler"],
        ["Nedfældelig holder", "fra 32.995 kr.", "Rhino SafeStow3"],
        ["Største last, SafeStow4", "60 kg", "oplyser Rhino"],
        ["Topersoners løft", "højst ca. 70 %", "af det, den enkelte kunne løfte"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Tre typer",
        tekst: [
          `En stige kan ligge på taget i klemmer på tagbøjlerne, i en holder, der fælder den ned langs bilen, eller i et stativ på siden. Valget afhænger af, hvor ofte stigen skal af og på, hvor tung den er, og hvor høj bilen er.`,
          `Klemmerne er billigst og vejer næsten ingenting, men stigen skal løftes op og ned fra taget. En nedfældelig holder koster langt mere og vejer mere, til gengæld kan stigen tages af i lavere højde.`
        ],
        kort: [
          ["Stigeklemmer", "To klemmer, der låser stigen fast på tagbøjlerne. Stigen løftes op og ned fra taget."],
          ["Nedfældelig stigeholder", "Holderen fælder stigen ned langs bilens side eller bagende, så den kan tages af i lavere højde. Kaldes også drop-down."],
          ["Stativ på siden", "Et fast stativ på bilens side. Detailforskrifterne har egne krav til kanter og mål."]
        ]
      },
      {
        overskrift: "Priser",
        tekst: [
          `Prisforskellen mellem typerne er stor. Klemmerne kræver, at bilen har tagbøjler i forvejen, så de skal regnes sammen med bøjlerne. En nedfældelig holder leveres med sine egne tværbøjler. VanKompagniets priser er uden moms.`
        ],
        tabel: {
          kolonner: ["Produkt", "Type", "Fra"],
          raekker: [
            ["Cruz Ladder Clamp, 2 stk.", "Klemmer til tagbøjler", "995 kr."],
            ["VK Basic tagbøjler, 2 stk.", "Bøjler, som klemmerne monteres på", "1.895 kr."],
            ["VK Basic stigerulle", "Rulle bag på den bageste bøjle", "1.795 kr."],
            ["Rhino SafeStow3, 3,1 m, 1 stige", "Nedfældelig stigeholder", "32.995 kr."]
          ],
          note: `Kilde: <a href="${VK}" rel="noopener">VanKompagniet</a>, vejledende priser, set den 4. oktober 2026 og den 7. oktober 2026. Montering er ikke angivet.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Klemmer og stigerulle",
        tekst: [
          `Cruz Ladder Clamp er to klemmer, der fastgør stigen på tagbøjlerne. VanKompagniet sælger dem i sæt med to, og et par vejer 1 kg. Rhinos tilsvarende klemme, SafeClamp, kan ifølge Rhino monteres på 2 minutter.`,
          `Med klemmer skal stigen op på taget med håndkraft. En stigerulle bag på den bageste bøjle gør det lettere, fordi stigen kan lægges an mod rullen og skubbes op. VanKompagniet skriver, at rullen gør det nemmere at få lange emner og stiger op på taget uden tunge løft.`,
          `Rullen til Berlingo, Partner, ProAce City, Combo og Doblo i længde 2 koster 1.795 kr. og vejer 2,5 kg.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Varebil set fra siden med en stige, der skubbes op over en rulle på den bageste tagbøjle og lægges på taget, hvor stigeklemmer låser den fast."><defs><marker id="pil-stige-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(130,180)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><rect class="tg-kasse" x="142" y="56" width="8" height="8"/><rect class="tg-kasse" x="296" y="56" width="8" height="8"/><rect class="tg-skinne-tynd" fill="none" x="146" y="44" width="170" height="8"/><line class="tg-gulvlinje" x1="34" y1="197" x2="140" y2="50"/><line class="tg-gulvlinje" x1="44" y1="197" x2="150" y2="50"/><line class="tg-skillevaeg" x1="46.7" y1="179.4" x2="56.7" y2="179.4"/><line class="tg-skillevaeg" x1="61.6" y1="158.8" x2="71.6" y2="158.8"/><line class="tg-skillevaeg" x1="76.4" y1="138.2" x2="86.4" y2="138.2"/><line class="tg-skillevaeg" x1="91.2" y1="117.6" x2="101.2" y2="117.6"/><line class="tg-skillevaeg" x1="106.1" y1="97" x2="116.1" y2="97"/><line class="tg-skillevaeg" x1="120.9" y1="76.5" x2="130.9" y2="76.5"/><circle class="tg-modul" cx="140" cy="56" r="6"/><line class="tg-skinne" x1="16" y1="140" x2="56" y2="85" marker-end="url(#pil-stige-2)"/><line class="tg-gulvlinje" x1="4" y1="197" x2="396" y2="197"/><text class="tg-lille" x="231" y="38" text-anchor="middle">STIGEN PÅ TAGET</text><g class="tg-call"><line x1="137" y1="53" x2="96" y2="34"/><circle cx="137" cy="53" r="3"/><text class="tg-call__navn" x="8" y="16">Stigerulle</text><text class="tg-call__under" x="8" y="30">bag på den bageste bøjle</text></g><g class="tg-call"><line x1="300" y1="52" x2="332" y2="34"/><circle cx="300" cy="52" r="3"/><text class="tg-call__navn" x="395" y="16" text-anchor="end">Stigeklemmer</text><text class="tg-call__under" x="395" y="30" text-anchor="end">låser stigen på bøjlerne</text></g><text class="tg-lille" x="4" y="216">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${VK_RULLE}" rel="noopener">VanKompagniet: VK Basic stigerulle</a> og <a href="${VK_CLAMP}" rel="noopener">Cruz Ladder Clamp</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Nedfældelig stigeholder",
        tekst: [
          "VanKompagniet beskriver Rhino SafeStow3 som et ergonomisk stigebeslag til taget, der gør af- og pålæsning af tunge stiger nem. Holderen er til én stige og 3,1 m lang. Vægten er angivet til 40 kg.",
          `En nedfældelig holder er det dyreste udstyr på taget i denne artikel. Til gengæld skal stigen ikke løftes ned fra taghøjde, og det er netop løft med armene i eller over skulderhøjde, Arbejdstilsynet ser på.`
        ]
      },
      {
        overskrift: "Sådan virker en nedfældelig holder",
        tekst: [
          "Rhino SafeStow4 vipper stigen ned fra taget ved hjælp af gasdæmpere, så den kan tages af og sættes på fra jorden. Dæmperne kan stilles i fem positioner efter stigens vægt. To stropper holder stigen fast under kørsel.",
          `Holderen er hængslet ved tagkanten. Når stigen er låst op, fører holderen den ned langs bilens side, og gasdæmperne tager en del af vægten undervejs.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 262" role="img" aria-label="Varebil set bagfra med en nedfældelig stigeholder. Holderen vipper stigen fra taget ned langs bilens side, så den kan tages af fra jorden"><defs><marker id="pil-stige-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect class="tg-profil" x="110" y="70" width="160" height="130"/><line class="tg-skinne-tynd" x1="190" y1="72" x2="190" y2="198"/><rect class="tg-kasse" x="118" y="80" width="64" height="44"/><rect class="tg-kasse" x="198" y="80" width="64" height="44"/>
<rect class="tg-hylde" x="116" y="198" width="22" height="16"/><rect class="tg-hylde" x="242" y="198" width="22" height="16"/><line class="tg-gulvlinje" x1="16" y1="214" x2="388" y2="214"/>
<rect class="tg-skinne-tynd" fill="none" x="140" y="54" width="128" height="12"/><circle class="tg-kasse" cx="268" cy="66" r="4"/>
<polygon class="tg-modul" points="274,70 286,70 300,190 288,190"/>
<path class="tg-skinne-tynd" fill="none" marker-end="url(#pil-stige-1)" d="M210,48 Q300,30 312,120"/>
<g class="tg-call"><line x1="204" y1="60" x2="150" y2="36"/><circle cx="204" cy="60" r="3"/><text class="tg-call__navn" x="16" y="22">Transport</text><text class="tg-call__under" x="16" y="36">Stigen ligger på taget</text></g><g class="tg-call"><line x1="294" y1="170" x2="330" y2="226"/><circle cx="294" cy="170" r="3"/><text class="tg-call__navn" x="236" y="238">Af- og pålæsning</text><text class="tg-call__under" x="236" y="252">Stigen tages af fra jorden</text></g>
<text class="tg-lille" x="16" y="244">SET BAGFRA · SKEMATISK</text></svg>`,
          tekst: "Skematisk, set bagfra. Holderen er hængslet ved tagkanten og fører stigen ned langs bilens side."
        }
      },
      {
        overskrift: "Data for SafeStow4",
        tekst: [
          `Rhino oplyser 60 kg som største last for SafeStow4. Holderen vejer selv 51,56–66,57 kg alt efter udgave, og monteringen tager 90 minutter for to personer. Holderen og stigen vejer altså tilsammen mere end stigen alene, og begge dele går fra bilens nyttelast.`,
          `To tværbøjler med gummiindlæg og en SafeClamp følger med, så bilen behøver ikke tagbøjler i forvejen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Største last", "60", "kg"],
            ["Vægt", "51,56–66,57", "kg"],
            ["Montering", "90", "min."],
            ["Gasdæmper-positioner", "5", ""]
          ],
          note: `Montering kræver to personer. To tværbøjler med gummiindlæg og en SafeClamp følger med. VanKompagniet angiver 40 kg for sin udgave til én stige på 3,1 m, der på produktsiden kaldes både SafeStow3 og SafeStow4. Kilde: <a href="${RH_SS4}" rel="noopener">Rhino SafeStow4</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Arbejdstilsynets praksis ved løft",
        tekst: [
          "Arbejdstilsynets vejledning om ergonomisk arbejdsmiljø vurderer løft ud fra byrdens vægt og rækkeafstanden, altså afstanden fra lænden til byrden. Løft længere ude end 3/4 armlængde er ikke omfattet af skemaet og vil normalt indebære risiko for sundhedsskader.",
          `Rækkeafstanden måles vandret fra lænderyggen til den lodrette linje gennem byrdens tyngdepunkt. Det er den største rækkeafstand under løftet, der tæller, og den ses ofte i starten eller slutningen af løftet. Når en stige trækkes ned fra taget, er armene længst ude i begyndelsen.`,
          "Ved løft i løftemodellens gule område ser Arbejdstilsynet på tre faktorer:"
        ],
        punkter: [
          "Foroverbøjning af ryggen.",
          "Vrid eller asymmetrisk løft.",
          "Løftede arme i eller over skulderhøjde."
        ],
        efter: [
          "Er mindst én af faktorerne til stede, indgår løftefrekvens og varighed også i vurderingen."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 224" role="img" aria-label="En person løfter en byrde med armene over skulderhøjde. Rækkeafstanden er den vandrette afstand fra lænderyggen til byrdens tyngdelinje. Til højre står, at løftet vurderes ud fra byrdens vægt og rækkeafstanden, og at foroverbøjet ryg, vrid og arme i eller over skulderhøjde forværrer det."><defs><marker id="pil-stige-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><line class="tg-skinne-tynd" x1="40" y1="62" x2="226" y2="62"/><text class="tg-lille" x="226" y="78" text-anchor="end">SKULDERHØJDE</text><circle class="tg-profil" cx="90" cy="38" r="12"/><line class="tg-gulvlinje" x1="90" y1="50" x2="96" y2="126"/><line class="tg-gulvlinje" x1="96" y1="126" x2="80" y2="206"/><line class="tg-gulvlinje" x1="96" y1="126" x2="110" y2="206"/><line class="tg-gulvlinje" x1="91" y1="62" x2="150" y2="40"/><rect class="tg-modul" x="140" y="26" width="76" height="12"/><line class="tg-skinne-tynd" x1="178" y1="38" x2="178" y2="196"/><line class="tg-skinne-tynd" x1="95" y1="118" x2="95" y2="196"/><circle class="tg-kuffert" cx="95" cy="118" r="4"/><line class="tg-skillevaeg" x1="62" y1="119" x2="90" y2="118"/><text class="tg-lille" x="8" y="122">LÆNDE</text><g class="tg-maal"><line x1="95" y1="184" x2="178" y2="184" marker-start="url(#pil-stige-3)" marker-end="url(#pil-stige-3)"/><text x="136" y="176" text-anchor="middle">rækkeafstand</text></g><line class="tg-gulvlinje" x1="10" y1="206" x2="214" y2="206"/><text class="tg-fremhaev" x="240" y="96">Vurderes ud fra</text><text x="240" y="112">byrdens vægt</text><text x="240" y="126">rækkeafstanden</text><text class="tg-fremhaev" x="240" y="152">Forværrer løftet</text><text x="240" y="168">foroverbøjet ryg</text><text x="240" y="182">vrid</text><text x="240" y="196">armene i eller over</text><text x="240" y="210">skulderhøjde</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${AT}" rel="noopener">AT-vejledning om ergonomisk arbejdsmiljø, afsnit 1.2.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Løftefrekvens og varighed",
        tekst: [
          `Arbejdstilsynet deler løftefrekvensen i tre trin efter antal løft pr. time pr. medarbejder. Varigheden er den tid, en medarbejder arbejder med opgaver, der indeholder løft.`,
          `Kombinationen afgør vurderingen. Lav løftefrekvens og kort varighed vurderes normalt ikke at være sundhedsskadelig i det gule område. Moderat frekvens og kort varighed vurderes normalt at være sundhedsskadelig i den øverste tredjedel af det gule område. En håndværker, der tager stigen af og på nogle få gange om dagen, ligger i den lave frekvens.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Lav løftefrekvens", "over 1–12", "løft pr. time"],
            ["Moderat løftefrekvens", "over 12–120", "løft pr. time"],
            ["Høj løftefrekvens", "over 120", "løft pr. time"]
          ],
          note: `Kilde: <a href="${AT}" rel="noopener">AT-vejledning om ergonomisk arbejdsmiljø, afsnit 1.2.1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Samlet løftemængde pr. dag",
        tekst: [
          `Arbejdstilsynet ser også på den samlede vægt, en medarbejder løfter på en dag. Der skal gøres noget, når den samlede vægt pr. ansat pr. dag overstiger de grænser, figuren viser. Løftes den samme byrde flere gange, tæller den med hver gang.`,
          `Løft i løftemodellens grønne område tæller ikke med. Grænsen er lavest, når byrden holdes langt fra kroppen, og det er den situation, man typisk står i, når en stige løftes ned fra et tag.`
        ],
        figur: {
          type: "soejler",
          enhed: "ton",
          data: [
            ["Løft tæt ved kroppen", 10, "ca."],
            ["Løft i underarmsafstand", 6, "ca."],
            ["Løft i 3/4 armlængde", 3, "ca."]
          ],
          note: `Samlet vægt pr. ansat pr. dag, hvor der efter Arbejdstilsynets praksis skal træffes foranstaltninger. Byrder løftes sjældent tæt ved kroppen, medmindre der bruges bæresele eller andre hjælpemidler. Kilde: <a href="${AT}" rel="noopener">AT-vejledning om ergonomisk arbejdsmiljø</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "To personer om løftet",
        tekst: [
          "Ved topersoners løft må byrden efter Arbejdstilsynets praksis højst være ca. 70 % af det, den enkelte ellers kunne løfte. To personer må derfor højst løfte 42 kg i underarmsafstand under optimale forhold. To- eller flerpersoners løft kan ikke erstatte egnede tekniske hjælpemidler.",
          `Når to personer løfter, måles rækkeafstanden fra løfterens lænderyg til linjen gennem det sted, hvor løfteren holder fast i byrden.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Byrden ved topersoners løft", "højst ca. 70", "% af den enkeltes"],
            ["To personer i underarmsafstand", "højst 42", "kg"]
          ],
          note: `Tallene bygger på Arbejdstilsynets praksis og gælder under optimale forhold. Kilde: <a href="${AT}" rel="noopener">AT-vejledning om ergonomisk arbejdsmiljø</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bæring",
        tekst: [
          "Arbejdstilsynets praksis er, at der skal træffes foranstaltninger ved bæring over ca. 20 kg tæt ved kroppen, ca. 12 kg i underarmsafstand og ca. 6 kg i 3/4 armlængde. Grænserne forudsætter, at andre faktorer ikke forværrer belastningen.",
          `Bæring er, når byrden holdes i længere tid og eventuelt bæres et stykke. Bæres den mere end ca. 2 m, kan løftemodellen ikke bruges direkte, og den største vægt skal sættes væsentligt ned.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Tæt ved kroppen", 20, "ca."],
            ["Underarmsafstand", 12, "ca."],
            ["3/4 armlængde", 6, "ca."]
          ],
          note: "Efter Arbejdstilsynets praksis skal der gøres noget for at mindske belastningen, når man bærer mere end disse vægte. Grænserne gælder kun, hvis intet andet ved arbejdet gør belastningen større."
        }
      },
      {
        overskrift: "Klemmer og holdere fra Rhino",
        tekst: [
          `Rhino sælger to slags holdere til stiger, der ligger på taget. SafeClamp er en klemme på bøjlen, og LadderStow er skinner på taget til biler med lavt tag. Begge tager op til tre stigesektioner, der ligger inden i hinanden.`,
          `Alle tre af Rhinos løsninger her er uafhængigt crashtestet ved 20g. SafeClamp og SafeStow4 er desuden TÜV-godkendt.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "SafeClamp", "LadderStow", "SafeStow4"],
          raekker: [
            ["Type", "Klemme på bøjlen", "Skinner på taget", "Nedfældelig"],
            ["Uafhængig 20g-crashtest", "ja", "ja", "ja"]
          ],
          note: `SafeClamp og LadderStow tager op til 3 stigesektioner. LadderStow er beregnet til biler med lavt tag. SafeClamp og SafeStow4 er desuden TÜV-godkendt. Kilder: <a href="${RH_CLAMP}" rel="noopener">SafeClamp</a>, <a href="${RH_LS}" rel="noopener">LadderStow</a> og <a href="${RH_SS4}" rel="noopener">SafeStow4</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Stativ på siden af bilen",
        tekst: [
          "Fastmonterede stativer til stiger eller materialer på siden af vare- og lastbiler skal have afrundede kanter med mindst 5 mm rundingsradius. De må ikke frembyde fare for andre trafikanter og må ikke gøre bilen længere eller bredere end tilladt for køretøjstypen.",
          `En varebil må højst være 2,55 m bred, og bredden måles over de dele, der rager længst ud. Spejle, lygter og trin, der kan foldes ind, tæller ikke med, men det gør et fast stativ på siden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil set bagfra med et stativ til stiger på siden. Bredden måles over stativet og må højst være 2,55 meter, og stativets kanter skal være afrundede med en radius på mindst 5 mm."><defs><marker id="pil-stige-4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-rum" x="70" y="56" width="180" height="134" rx="6"/><line class="tg-skinne-tynd" x1="160" y1="58" x2="160" y2="188"/><rect class="tg-profil" x="80" y="68" width="70" height="44"/><rect class="tg-profil" x="170" y="68" width="70" height="44"/><rect class="tg-hylde" x="76" y="190" width="24" height="16"/><rect class="tg-hylde" x="220" y="190" width="24" height="16"/><line class="tg-gulvlinje" x1="10" y1="206" x2="390" y2="206"/><rect class="tg-modul" x="250" y="74" width="12" height="96" rx="4"/><rect class="tg-kasse" x="256" y="90" width="12" height="6" rx="2"/><rect class="tg-kasse" x="256" y="146" width="12" height="6" rx="2"/><line class="tg-skinne-tynd" x1="70" y1="56" x2="70" y2="24"/><line class="tg-skinne-tynd" x1="268" y1="90" x2="268" y2="24"/><g class="tg-maal"><line x1="70" y1="30" x2="268" y2="30" marker-start="url(#pil-stige-4)" marker-end="url(#pil-stige-4)"/><text x="169" y="22" text-anchor="middle">højst 2,55 m</text></g><text class="tg-lille" x="169" y="48" text-anchor="middle">MÅLT OVER STATIVET</text><g class="tg-call"><line x1="262" y1="122" x2="284" y2="122"/><circle cx="262" cy="122" r="3"/><text class="tg-call__navn" x="286" y="118">Stativ på siden</text><text class="tg-call__under" x="286" y="132">radius mindst 5 mm</text></g><text class="tg-lille" x="10" y="228">SET BAGFRA · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilder: <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 3.02.001 og 9.06.002</a> og <a href="${DIM}" rel="noopener">BEK nr. 1447 af 27/11/2025, §§ 3 og 6</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Stige på bagdøren",
        tekst: [
          "En fast stige på bagdøren giver adgang til taget uden at klatre på dæk eller kofanger. Rhino VanLadder har sidevanger i aluminium og trin i glasfyldt nylon, er testet til en sikker arbejdsbelastning på 120 kg og monteres på 30–45 minutter.",
          `Detailforskrifterne kræver, at en bagagestige sidder på køretøjets bagside. En stige på bagdøren følger bagdøren, når den åbnes.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Sikker arbejdsbelastning", 120, "kg"],
            ["Montering", "30–45", "min."]
          ],
          note: `Rhino oplyser tallene for VanLadder. Kilde: <a href="${RH_VL}" rel="noopener">Rhino VanLadder</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Stigen og bilens længde",
        tekst: [
          `En stige, der er længere end taget, gør bilen længere. Længden måles over de dele, der rager længst frem og tilbage, og en varebil må højst være 12,00 m lang. Med anhænger må vogntoget højst være 18,75 m.`,
          `Færdselsloven kræver, at gods sidder, så det ikke kan falde af eller være til fare. Det må heller ikke skjule lygter eller nummerplade, og det gælder også en stige, der rager bagud over bagenden.`
        ],
        efter: [
          `Kilder: <a href="${DIM}" rel="noopener">BEK nr. 1447 af 27/11/2025, §§ 8, 11 og 12</a> og <a href="${FL}" rel="noopener">færdselsloven, § 82, stk. 1 og 3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vægt på taget",
        tekst: [
          "Stigeholder og bøjler trækkes fra bilens nyttelast. VanKompagniet angiver vægten til 40 kg for Rhino SafeStow3, 1 kg for et par Cruz-klemmer og 10 kg for et sæt VK Basic-bøjler. Se <a href=\"/til-varebilen/traek-og-tagudstyr/tagboejler-og-tagreling/\">tagbøjler og tagreling</a>.",
          `Bilens tilladte tagbelastning står i bilens data. Holderens egen vægt og stigens vægt skal derfor holdes op mod det tal, bilproducenten oplyser.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Rhino SafeStow3", 40],
            ["VK Basic tagbøjler, sæt", 10],
            ["VK Basic stigerulle", 2.5],
            ["Cruz-klemmer, par", 1]
          ],
          note: `VanKompagniet oplyser vægtene. Vægten trækkes fra bilens nyttelast. Kilde: <a href="${VK}" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer holderen til stigerne og bilen.",
    spoergsmaal: [
      "Bilens model, højde og længde.",
      "Antal stiger, deres længde og vægt.",
      "Hvor ofte stigen tages af og på i løbet af en dag.",
      "Om der allerede er tagbøjler på bilen.",
      "Om der skal være en rulle bag på taget.",
      "Om bilen er leaset."
    ],
    faq: [
      ["Hvad koster en stigeholder til en varebil?", "Fra 995 kr. for to Cruz-klemmer til tagbøjler og 32.995 kr. for en nedfældelig Rhino SafeStow3 hos VanKompagniet (oktober 2026)."],
      ["Hvad er en drop-down-stigeholder?", "En holder, der fælder stigen ned langs bilen, så den kan tages af og på i lavere højde."],
      ["Hvad siger Arbejdstilsynet om løft fra taget?", "Arbejdstilsynet ser blandt andet på, om løftet sker med armene i eller over skulderhøjde, med vrid eller med foroverbøjet ryg, og på løftefrekvens og varighed."],
      ["Må to personer løfte stigen sammen?", "Ja, men byrden må efter Arbejdstilsynets praksis højst være ca. 70 % af det, den enkelte kunne løfte, og topersoners løft kan ikke erstatte tekniske hjælpemidler."],
      ["Hvor meget kan en nedfældelig stigeholder bære?", "Rhino oplyser 60 kg som største last for SafeStow4. Holderen vejer selv 51,56–66,57 kg."],
      ["Hvor mange stiger kan en stigeklemme holde?", "Rhino SafeClamp og LadderStow tager op til tre stigesektioner, der ligger inden i hinanden."],
      ["Hvad er en stigerulle?", "En rulle bag på den bageste tagbøjle, som stigen kan lægges an mod og skubbes op over. VanKompagniets VK Basic stigerulle koster 1.795 kr. og vejer 2,5 kg (oktober 2026)."],
      ["Må et stigestativ på siden gøre bilen bredere?", "Bilen må højst være 2,55 m bred målt over de dele, der rager længst ud, også stativet. Stativet skal have afrundede kanter med en radius på mindst 5 mm."]
    ],
    kilder: [
      { navn: "Retsinformation: AT-vejledning om ergonomisk arbejdsmiljø (VEJ nr. 10133 af 01/10/2026)", url: AT, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 9.06.002", url: DETAIL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om køretøjers største bredde, længde, højde, vægt og akseltryk (BEK nr. 1447 af 27/11/2025)", url: DIM, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven (LBK nr. 118 af 12/01/2026), § 82", url: FL, dato: "2026-10-07" },
      { navn: "VanKompagniet: Rhino SafeStow3", url: VK_SAFE, dato: "2026-10-07" },
      { navn: "VanKompagniet: Cruz Ladder Clamp", url: VK_CLAMP, dato: "2026-10-07" },
      { navn: "VanKompagniet: VK Basic stigerulle", url: VK_RULLE, dato: "2026-10-07" },
      { navn: "VanKompagniet: Tagbøjler til varevogn", url: VK, dato: "2026-10-07" },
      { navn: "Rhino Products: SafeStow4", url: RH_SS4, dato: "2026-10-04" },
      { navn: "Rhino Products: SafeClamp", url: RH_CLAMP, dato: "2026-10-04" },
      { navn: "Rhino Products: LadderStow", url: RH_LS, dato: "2026-10-04" },
      { navn: "Rhino Products: VanLadder", url: RH_VL, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Cruz Ladder Clamp fikserer en stige fast på tagbøjlerne, leveres i sæt af 2 stk., vejer 1 kg og koster 995 kr. ekskl. moms.", VK_CLAMP],
    ["VK Basic stigerulle monteres bagpå den bagerste tagbøjle og gør det nemmere at få lange emner og stiger op på taget uden tunge løft; til Berlingo, Partner, ProAce City, Combo, Doblo L2 koster den 1.795 kr. ekskl. moms og vejer 2,5 kg.", VK_RULLE],
    ["Arbejdstilsynet: rækkeafstanden er den vandrette afstand mellem byrdens tyngdelinje og løfterens lænderyg; den største rækkeafstand under løftet bruges, og den ses ofte i starten eller ved afslutningen af løftet; ved løft af to personer er rækkeafstanden afstanden fra lænderyggen til linjen gennem gribepunktet (afsnit 1.2.1).", AT],
    ["Arbejdstilsynet: lav løftefrekvens er mere end 1 til og med 12 løft pr. time, moderat mere end 12 til og med 120, høj mere end 120 løft pr. time pr. medarbejder; varighed er den tid, en ansat er beskæftiget med arbejdsfunktioner, der indeholder løft.", AT],
    ["Arbejdstilsynet: lav løftefrekvens og kort varighed vurderes normalt ikke at være sundhedsskadelig i løftemodellens gule område; moderat løftefrekvens og kort varighed vurderes normalt sundhedsskadelig i den øverste 1/3 af det gule område.", AT],
    ["Arbejdstilsynet: der skal træffes foranstaltninger, hvis den samlede vægt pr. ansat pr. dag overstiger ca. 10 ton ved løft tæt ved kroppen, ca. 6 ton i underarmsafstand og ca. 3 ton i 3/4-armsafstand; løft i løftemodellens grønne område medregnes ikke; byrder løftes sjældent tæt på kroppen, medmindre der bruges bæreseler eller andre hjælpemidler; byrder, der løftes flere gange, tæller med hver gang.", AT],
    ["Arbejdstilsynet: bæring er, at man manuelt holder en løftet byrde i længere tid og eventuelt fører den med sig; ved bæring over mere end ca. 2 m kan løftemodellen ikke bruges direkte, og den maksimale vægt skal nedsættes væsentligt.", AT],
    ["Bredden af et køretøj må højst være 2,55 m og måles over de længst udragende dele; der ses bl.a. bort fra lygter og reflekser, spejle og trin, der kan foldes (trækkes) ind (pkt. 3.02.001, stk. 2; BEK 1447, §§ 3 og 6).", DETAIL],
    ["Bagagestige skal være anbragt på køretøjets bagside (pkt. 9.06.001, stk. 2).", DETAIL],
    ["Længden af et køretøj måles over de dele, der rager længst fremefter og bagud; et motordrevet køretøj må højst være 12,00 m langt, og andre vogntog end lastbil med sættevogn højst 18,75 m (BEK 1447, §§ 8, 11 og 12).", DIM],
    ["Færdselsloven § 82, stk. 1 og 3: gods må ikke skjule påbudt lygte eller nummerplade og skal være anbragt, så det ikke kan frembyde fare eller falde af på vejbanen.", FL]
  ]
};
