// Underside /til-varebilen/folie/magnetskilte/ (07-10-2026)
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var LT = `https://www.lasertryk.dk/klistermaerker/magnetfolie`;
var LTS = `https://www.lasertryk.dk/klistermaerker/bilstreamers`;
var LTC = `https://www.lasertryk.dk/klistermaerker/cvr-klistermaerker`;
var VP = `https://www.vistaprint.dk/skilte-plakater/magnetskilte-til-bil`;
var TW = `https://www.trykwerk.dk/autoreklame/`;
var MG = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var M3 = `https://trimwel.ie/cdn/shop/files/3M_EU_PB_2080.pdf`;
var AV = `https://graphics.averydennison.com/content/dam/averydennison/graphics/eu/en/Data-Sheets/Supreme-Wrap/PDS-Supreme-Wrapping-Film-EN.pdf`;

module.exports = {
  id: "folie/magnetskilte",
  side: {
    slug: "magnetskilte",
    navn: "Magnetskilte til varebil",
    titel: "Magnetskilte til varebil: priser og regler",
    kort: `Se priser, størrelser, underlag og pleje for magnetskilte og streamers til varebilen, og hvorfor CVR-nummeret ikke må stå på magnetskiltet.`,
    beskrivelse: `Magnetskilte til varebilen: priser fra 486 kr., størrelser, underlag, pleje og holdbarhed, og hvorfor navn og CVR ikke må stå på et magnetskilt.`,
    manchet: `Et magnetskilt kan flyttes mellem biler og tages af efter kampagnen. Navn og CVR-nummer må til gengæld ikke stå på det, for reglerne forbyder dem på skilte, der kan tages af. Et magnetskilt på 10 x 40 cm koster fra 486 kr. uden moms hos LaserTryk.dk.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Navn og CVR", "Ikke tilladt", "på et skilt, der kan tages af"],
        ["Skilt på 10 x 40 cm", "fra 486 kr.", "hos LaserTryk.dk, oktober 2026"],
        ["Holdbarhed", "ca. 2–3 år", "ifølge Vistaprint og LaserTryk.dk"],
        ["Magnetfolie", "0,85 mm", "tyk hos LaserTryk.dk og Vistaprint"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Magnetskilt eller folie",
        tekst: [
          `Et magnetskilt er en tynd plade af magnetisk folie med tryk, som holder på bilens stålplader af sig selv. Det kan tages af om aftenen, flyttes til en anden bil eller bruges i en kort kampagne.`,
          `Folie sidder fast på bilen i flere år, og Montagegruppen anbefaler, at en fagmand fjerner den. Folie er den løsning, reglerne tillader til navn og CVR-nummer, og den kan sidde på flere slags flader end en magnet.`
        ],
        tabel: {
          kolonner: ["", "Magnetskilt", "Folie"],
          raekker: [
            ["Navn og CVR-nummer", "Ikke tilladt", "Tilladt"],
            ["Holdbarhed", "Ca. 2–3 år", "5–12 år på lodrette flader"],
            ["Pleje", "Tages af dagligt til ugentligt", "Kan vaskes 48 timer efter montering"],
            ["Underlag", "Flad, jernholdig plade", "Lak, glas, aluminium, krom og ABS"],
            ["Pris", "Fra 486 kr. for 10 x 40 cm", "Fra 370 kr. for navn og CVR"]
          ],
          note: `Kilder: <a href="${REG}" rel="noopener">§ 85 i registreringsbekendtgørelsen</a>, <a href="${VP}" rel="noopener">Vistaprint</a>, <a href="${LT}" rel="noopener">LaserTryk.dk</a>, <a href="${M3}" rel="noopener">3M</a>, <a href="${AV}" rel="noopener">Avery Dennison</a>, <a href="${MG}" rel="noopener">Montagegruppen</a> og <a href="${TW}" rel="noopener">Trykwerk</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Alle priser på siden er uden moms og fra den 7. oktober 2026. Folieprisen er med montering. Holdbarheden for folie afhænger af produkt og farve: 8 år for 3M 2080 og 5–12 år for Avery Dennison Supreme.`
        ]
      },
      {
        overskrift: "CVR-nummeret må ikke stå på et magnetskilt",
        tekst: [
          `Bekendtgørelsen om registrering af køretøjer kræver navn og CVR-nummer på varebiler og lastbiler med en tilladt totalvægt på højst 4 t, når de er registreret til udelukkende erhvervsmæssig brug. Mere om registreringen i <a href="/haandbogen/gule-plader/">gule plader</a>.`,
          `Oplysningerne skal være synlige og letlæselige og stå i både venstre og højre side af bilen. De må ikke stå på skilte eller lignende, der kan tages af og på bilen, men de må gerne sidde i selvklæbende plastfolie.`,
          `Et magnetskilt kan derfor bære reklame, telefonnummer og logo, mens navn og CVR-nummer står fast i folie ved siden af.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil set fra siden med magnetskilt på en flad sideflade og navn og CVR i folie på døren"><path class="tg-profil" d="M40,172 L40,126 Q42,116 66,112 L108,66 Q112,62 120,62 L356,62 Q364,62 364,70 L364,172 Z"/><path class="tg-kasse" d="M112,70 L146,70 L146,104 L82,108 Z"/><line class="tg-skinne-tynd" x1="150" y1="64" x2="150" y2="170"/><line class="tg-skinne-tynd" x1="240" y1="64" x2="240" y2="170"/><circle class="tg-hylde" cx="96" cy="174" r="17"/><circle class="tg-hylde" cx="306" cy="174" r="17"/><line class="tg-gulvlinje" x1="16" y1="191" x2="388" y2="191"/><rect class="tg-modul" x="172" y="86" width="120" height="58"/><text class="tg-fremhaev" x="232" y="120" text-anchor="middle">Magnetskilt</text><rect class="tg-kasse" x="84" y="122" width="58" height="16"/><text x="113" y="134" text-anchor="middle">CVR</text><g class="tg-call"><line x1="113" y1="122" x2="113" y2="40"/><circle cx="113" cy="122" r="3"/><text class="tg-call__navn" x="20" y="20">Navn og CVR i folie</text><text class="tg-call__under" x="20" y="34">Må ikke kunne tages af</text></g><g class="tg-call"><line x1="232" y1="86" x2="232" y2="40"/><circle cx="232" cy="86" r="3"/><text class="tg-call__navn" x="390" y="20" text-anchor="end">Magnet: flad jernplade</text><text class="tg-call__under" x="390" y="34" text-anchor="end">Ikke på aluminium eller kulfiber</text></g><text x="20" y="214">Tages af: dagligt (LaserTryk), ugentligt (Vistaprint)</text></svg>`,
          tekst: `Skematisk. Magnetskiltet sidder på en flad stålflade. Navn og CVR står fast i folie på døren. Kilder: <a href="${REG}" rel="noopener">§ 85 i registreringsbekendtgørelsen</a>, <a href="${LT}" rel="noopener">LaserTryk.dk</a> og <a href="${VP}" rel="noopener">Vistaprint</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Du kan læse reglerne for størrelse og farve i <a href="/til-varebilen/folie/bilreklame-paa-varebil/">bilreklame på varebil</a>.`
        ]
      },
      {
        overskrift: "Sådan skal navn og CVR stå",
        tekst: [
          `CVR-nummeret skal stå med bogstaver og tal, der er mindst 3 cm høje. Først står "CVR", og derefter følger nummerets 8 cifre på samme linje eller nedenunder.`,
          `Virksomhedens navn skal også stå med mindst 3 cm høje bogstaver og tal. Navnet kan erstattes af virksomhedens logo, hvis logoet entydigt identificerer virksomheden.`,
          `Farven skal klart afvige fra bilens farve. Hvid tekst på en hvid varebil opfylder derfor ikke kravet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To måder at skrive CVR-nummeret på bilen. Ordet CVR kan stå på samme linje som de 8 cifre eller over dem, og bogstaver og tal skal være mindst 3 cm høje."><text class="tg-lille" x="20" y="18">SKEMATISK · IKKE MÅLFAST</text><text class="tg-lille" x="20" y="48">PÅ SAMME LINJE</text><rect class="tg-kasse" x="20" y="60" width="170" height="50"/><text class="tg-fremhaev" x="105" y="90" text-anchor="middle">CVR 12345678</text><text class="tg-lille" x="220" y="48">NEDENUNDER</text><rect class="tg-kasse" x="220" y="60" width="160" height="70"/><text class="tg-fremhaev" x="300" y="88" text-anchor="middle">CVR</text><text class="tg-fremhaev" x="300" y="110" text-anchor="middle">12345678</text><text x="20" y="156">Bogstaver og tal: mindst 3 cm høje</text><text x="20" y="172">Firmanavnet: også mindst 3 cm højt</text><text x="20" y="188">I begge sider af bilen, ikke på et skilt</text></svg>`,
          tekst: `Skematisk. Nummeret i tegningen er et eksempel. Kilde: <a href="${REG}" rel="noopener">§ 85, stk. 3, i bekendtgørelsen om registrering af køretøjer</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvilken virksomhed der skal stå på bilen",
        tekst: [
          `Udgangspunktet er navnet og CVR-nummeret på den registrerede ejer af bilen. Er der en registreret bruger af bilen, skal brugerens navn og CVR-nummer stå i stedet.`,
          `Reglen gælder kun biler med en tilladt totalvægt på højst 4 t. Hvad der ellers gælder for folie på en leaset bil, kan du læse i <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Spørgsmål", "Svar efter § 85"],
          raekker: [
            ["Hvis navn, når bilen kun har en registreret ejer?", "Ejerens navn og CVR-nummer"],
            ["Hvis navn, når der er en registreret bruger?", "Brugerens navn og CVR-nummer"],
            ["Kan et logo erstatte navnet?", "Ja, hvis det entydigt identificerer virksomheden"],
            ["Må oplysningerne stå på et magnetskilt?", "nej"],
            ["Må de sidde i selvklæbende plastfolie?", "ja"]
          ],
          note: `Kilde: <a href="${REG}" rel="noopener">BEK nr. 663 af 10/06/2025 om registrering af køretøjer, § 85</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Størrelser",
        tekst: [
          `Magnetskilte fås i faste størrelser og i mål efter ønske. Vistaprint har syv standardstørrelser, og den største er 90 x 60 cm. LaserTryk.dk skærer skiltene til efter de mål, du angiver.`
        ],
        punkter: [
          "<strong>Vistaprint.</strong> Skiltene fås i syv standardstørrelser: 22 x 29, 25 x 50, 29 x 44, 30 x 60, 30 x 70, 40 x 60 og 60 x 90 cm. Du kan også vælge egne mål og skærelinjer.",
          "<strong>LaserTryk.dk.</strong> Skiltene fås fra 50 x 50 mm, firkantede eller figurskårne og med eller uden runde hjørner."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Vistaprints syv standardstørrelser til magnetskilte tegnet i samme målestok, fra 22 x 29 cm til 60 x 90 cm"><text class="tg-lille" x="20" y="18">STANDARDSTØRRELSER I CM, SAMME MÅLESTOK</text><rect class="tg-kuffert" x="20" y="45" width="46" height="35"/><rect class="tg-kuffert" x="76" y="40" width="80" height="40"/><rect class="tg-kuffert" x="166" y="34" width="70" height="46"/><rect class="tg-kuffert" x="246" y="32" width="96" height="48"/><rect class="tg-kuffert" x="20" y="162" width="112" height="48"/><rect class="tg-kuffert" x="142" y="146" width="96" height="64"/><rect class="tg-kuffert" x="248" y="114" width="144" height="96"/><text x="43" y="96" text-anchor="middle">22 x 29</text><text x="116" y="96" text-anchor="middle">25 x 50</text><text x="201" y="96" text-anchor="middle">29 x 44</text><text x="294" y="96" text-anchor="middle">30 x 60</text><text x="76" y="226" text-anchor="middle">30 x 70</text><text x="190" y="226" text-anchor="middle">40 x 60</text><text x="320" y="226" text-anchor="middle">60 x 90</text></svg>`,
          tekst: `Skematisk. Vistaprints syv standardstørrelser i samme målestok. Du kan også vælge egne mål. Kilde: <a href="${VP}" rel="noopener">Vistaprint</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor skiltet kan sidde",
        tekst: [
          `Magneten skal have en flad stålflade at sidde på. Vistaprint skriver, at skiltet kan sidde på sidedøren, på sidepanelerne eller på bagdørene af en varebil, og at døre og paneler godt må være en anelse buede.`,
          `Skiltet skal ligge helt fladt, også i hjørnerne, uden luftbobler mellem magneten og bilen. Vistaprint fraråder magneter på flader med buler eller indhug, og magneten skal sidde på en flade uden ujævnheder eller rust.`
        ],
        punkter: [
          "<strong>Jern.</strong> LaserTryk.dk skriver, at overfladen skal være jernholdig.",
          "<strong>Ikke aluminium og kulfiber.</strong> Vistaprints magnetskilte kan ikke sidde på aluminium eller kulfiber.",
          "<strong>Flad flade.</strong> Vistaprint skriver, at skiltet skal ligge fladt uden luftbobler og ikke på buler, indhug eller rust. Let buede døre er i orden."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Varebil set fra siden med et magnetskilt på en flad sideflade. En bule i pladen er markeret som et sted, hvor skiltet ikke ligger fladt."><g transform="translate(80,190)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="104" y="104" width="84" height="44"/><text class="tg-modul__tekst" x="146" y="130" text-anchor="middle">MAGNET</text><path class="tg-skinne" fill="none" d="M214,158 Q226,148 238,158"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="146" y1="104" x2="110" y2="46"/><circle cx="146" cy="104" r="3"/><text class="tg-call__navn" x="10" y="24">Flad stålflade</text><text class="tg-call__under" x="10" y="38">sidedør, sidepanel eller bagdør</text></g><g class="tg-call"><line x1="226" y1="152" x2="330" y2="46"/><circle cx="226" cy="152" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Buler, indhug og rust</text><text class="tg-call__under" x="395" y="38" text-anchor="end">skiltet ligger ikke fladt</text></g><text x="10" y="228">Holder ikke på aluminium eller kulfiber</text><text class="tg-lille" x="10" y="246">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Den stiplede bue markerer en bule. Kilder: <a href="${VP}" rel="noopener">Vistaprint</a> og <a href="${LT}" rel="noopener">LaserTryk.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser",
        tekst: [
          `LaserTryk.dk beregner prisen ud fra antal og mål. Opstart, efterbehandling, beskæring og farvetryk er med. Prisen pr. skilt falder fra 486 kr. ved ét skilt til 64,20 kr. ved ti.`,
          `Produktionstiden er 5 hverdage, og LaserTryk.dk kan også levere på 48 timer. Fragt, administrationsgebyr, miljøtillæg og emballageafgift kommer oven i prisen.`,
          `Til sammenligning sætter Trykwerk firmanavn og CVR-nummer på bilen i folie for 370 kr., når du kommer forbi værkstedet. Trykwerks mindste logopakke til en varevogn som VW Caddy eller Peugeot Partner koster fra 1.650 kr. med logo og telefonnummer på siden, et mindre logo bagpå, CVR-nummer og montering.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["1 stk.", 486],
            ["2 stk.", 503],
            ["5 stk.", 555],
            ["10 stk.", 642]
          ],
          note: `Samlet pris for magnetfolie på 0,85 mm i 10 x 40 cm, uden fragt, administrationsgebyr, miljøtillæg og emballageafgift. Kilde: <a href="${LT}" rel="noopener">LaserTryk.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Materiale",
        tekst: [
          `Magnetfolien er lige tyk hos de to trykkerier, men de beskriver materialet forskelligt. LaserTryk.dk oplyser magnetens trækkraft, mens Vistaprint oplyser, at materialet er uden PVC, og at skiltet er testet i vindtunnel.`,
          `Vistaprint trykker med UV-blæk, som firmaet skriver ikke falmer. LaserTryk.dk lægger et mat laminat over trykket til beskyttelse mod solen.`
        ],
        punkter: [
          "<strong>Tykkelse.</strong> Magnetfolien er 0,85 mm tyk hos både LaserTryk.dk og Vistaprint.",
          "<strong>LaserTryk.dk.</strong> Magneten har en trækkraft på 40 g/cm², og et mat laminat beskytter mod sollys.",
          "<strong>Vistaprint.</strong> Materialet er PVC-frit, og der trykkes med UV-blæk. Skilte på 40 x 60 cm er testet i vindtunnel."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Tykkelse", "0,85", "mm"],
            ["Trækkraft, LaserTryk.dk", 40, "g/cm²"],
            ["Testet i vindtunnel, Vistaprint", "40 x 60", "cm"]
          ],
          note: `Magnetfolien er lige tyk hos LaserTryk.dk og Vistaprint. Kilder: <a href="${LT}" rel="noopener">LaserTryk.dk</a> og <a href="${VP}" rel="noopener">Vistaprint</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan sættes skiltet på",
        tekst: [
          `Et magnetskilt kræver ikke værktøj. Vistaprint beskriver tre trin og skriver, at magneten kan holde i op til to år, når vejledningen følges.`,
          `Både bilens flade og magnetens bagside skal være rene og helt tørre, før skiltet sættes på. Skiltet sidder rigtigt, når der ikke er luftbobler, og når hele skiltet inklusive hjørnerne ligger fladt mod bilen.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Rengør", "Bilens flade og magnetens bagside rengøres med en fugtig klud og et rengøringsmiddel."],
            ["Tør", "Begge dele lufttørrer helt."],
            ["Påfør", "Skiltet sættes på en flad flade uden ujævnheder eller rust."],
            ["Tjek", "Der er ingen luftbobler, og hjørnerne ligger fladt mod bilen."],
            ["Tag af igen", "Skiltet tages af mindst én gang om ugen, og fladen vaskes og tørres."]
          ]
        },
        efter: [
          `Kilde: <a href="${VP}" rel="noopener">Vistaprint</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pleje og lak",
        tekst: [
          `Vistaprint anbefaler kun magnetskilte til kortvarig brug, især kortvarig brug, der gentages. Bor du et sted med ofte ekstremt vejr, anbefaler Vistaprint at tage skiltet af endnu oftere, helst hver dag.`,
          `Nylakerede flader skal have tid til at hærde, før skiltet sættes på. Det gælder også klarlak og voks.`
        ],
        punkter: [
          "<strong>LaserTryk.dk.</strong> Skiltet skal tages af hver dag, og magnetsiden tørres af med en tør klud. Skiltet rulles af fra en kant og må ikke bruges over 40 °C.",
          "<strong>Vistaprint.</strong> Skiltet tages af mindst én gang om ugen, og fladen vaskes og tørres. Vistaprint skriver, at langvarig brug uden pleje kan skade lakken.",
          "<strong>Ny lak.</strong> Vistaprint skriver, at der skal gå 90 dage efter ny lakering, 60 dage efter klarlak og 2 dage efter voks, før skiltet sættes på."
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["2 dage efter voks", "Skiltet kan sættes på en vokset flade."],
            ["60 dage efter klarlak", "Skiltet kan sættes på en flade med ny klarlak."],
            ["90 dage efter ny lakering", "Skiltet kan sættes på en nylakeret flade."]
          ],
          note: `Kilde: <a href="${VP}" rel="noopener">Vistaprint</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan tages skiltet af",
        tekst: [
          `LaserTryk.dk skriver, at skiltet skal rulles af. Du tager fat i en kant og bøjer skiltet i en bue, så resten løsner sig.`,
          `Trækker man lige ud i skiltet, kan det ifølge LaserTryk.dk skade magnetens styrke. Når skiltet er taget af, tørres magnetsiden af med en tør klud.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Snit gennem et magnetskilt, der rulles af bilen fra den ene kant i en bue i stedet for at blive trukket lige ud."><defs><marker id="pil-magnet-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-hylde" x="20" y="124" width="360" height="16"/><line class="tg-doer" x1="170" y1="118" x2="350" y2="118"/><path class="tg-doer" fill="none" d="M170,118 Q118,118 104,56"/><path class="tg-pil" d="M186,102 Q146,100 130,62" marker-end="url(#pil-magnet-1)"/><text class="tg-lille" x="20" y="158">BILENS PLADE I SNIT</text><g class="tg-call"><line x1="106" y1="62" x2="60" y2="44"/><circle cx="106" cy="62" r="3"/><text class="tg-call__navn" x="10" y="20">Tag fat i en kant</text><text class="tg-call__under" x="10" y="34">og rul skiltet af i en bue</text></g><g class="tg-call"><line x1="300" y1="118" x2="320" y2="60"/><circle cx="300" cy="118" r="3"/><text class="tg-call__navn" x="390" y="36" text-anchor="end">Magnetsiden</text><text class="tg-call__under" x="390" y="50" text-anchor="end">tørres af med en tør klud</text></g><text x="20" y="182">Skiltet rulles af og trækkes ikke lige ud.</text><text x="20" y="198">Højst 40 °C ifølge LaserTryk.dk.</text></svg>`,
          tekst: `Skematisk. Den fremhævede streg er magnetskiltet. Kilde: <a href="${LT}" rel="noopener">LaserTryk.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Holdbarhed",
        tekst: [
          `Vistaprint angiver cirka to år ved korrekt pleje og skriver, at magneten derefter udskiftes, så den ikke falder af under kørsel. LaserTryk.dk angiver tre år.`,
          `Folie holder længere. 3M angiver 8 år for 2080-folien på en lodret flade, og Avery Dennison angiver 5–12 år for Supreme-folien afhængigt af farven. Tallene gælder lodrette flader i nord- og mellemeuropæisk klima.`
        ],
        figur: {
          type: "soejler",
          enhed: "år",
          data: [
            ["Magnetskilt, Vistaprint", 2, "cirka"],
            ["Magnetskilt, LaserTryk.dk", 3, "mindst"],
            ["Folie, 3M 2080", 8, "lodret flade"],
            ["Folie, Avery Dennison Supreme", 12, "højst, 5–12 år efter farve"]
          ],
          note: `Kilder: <a href="${VP}" rel="noopener">Vistaprint</a>, <a href="${LT}" rel="noopener">LaserTryk.dk</a>, <a href="${M3}" rel="noopener">3M, Product Bulletin 2080</a> og <a href="${AV}" rel="noopener">Avery Dennison, Supreme Wrapping Film</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Streamers og CVR-klistermærker",
        tekst: [
          `Skal teksten sidde fast, men kunne fjernes igen, er en bilstreamer et alternativ til magneten. LaserTryk.dk skriver, at streamerne har en blank overflade, der passer til de fleste bilers lak, og at de kan fjernes nemt, hvis de er bestilt med aftagelig klæb.`,
          `CVR-klistermærker fås hos LaserTryk.dk i hvid eller transparent folie med farvetryk og i sort eller hvid folie uden tryk. Uden tryk koster ét mærke 314 kr. og ti mærker 592 kr.`
        ],
        punkter: [
          "<strong>Bilstreamers.</strong> LaserTryk.dk laver dem fra 4 x 4 cm til 130 x 300 cm i ét stykke, i hvid eller gennemsigtig plast og kan levere dem med aftagelig klæb.",
          "<strong>CVR-klistermærker.</strong> Hvide eller transparente mærker med farvetryk koster fra 295 kr. for ét og 407 kr. for ti, uden fragt. Du skal bruge ét i hver side."
        ],
        figur: {
          type: "noegletal",
          data: [
            ["CVR-klistermærke, 1 stk.", 295, "kr."],
            ["CVR-klistermærker, 10 stk.", 407, "kr."],
            ["Største streamer i ét stykke", "130 x 300", "cm"]
          ],
          note: `Priserne er uden fragt. Kilder: LaserTryk.dk om <a href="${LTC}" rel="noopener">CVR-klistermærker</a> og <a href="${LTS}" rel="noopener">bilstreamers</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår et magnetskilt passer",
        tekst: [
          `Et magnetskilt passer til et budskab, der skal kunne flyttes, fjernes eller sættes på efter behov. Det kan fx være en kampagne i en kort periode eller et skilt, der skal flyttes mellem flere biler.`,
          `LaserTryk.dk foreslår bilstreamers eller figurskåret folie, hvis løsningen skal være mere permanent. Den figurskårne folie kan have komplekse former og være op til tre meter, og den tåler bilvask. Montagegruppens kampagnefolie koster fra 195 kr. pr. m².`,
          `Trykfilen til et magnetskilt laves på samme måde som til folie. Se <a href="/til-varebilen/folie/bilreklame-design-og-filer/">design og trykfiler</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal trykkeriet vide",
    spoergsmaal_manchet: "Så passer skiltet til fladen på bilen.",
    spoergsmaal: [
      "Målene på den flade, skiltet skal sidde på.",
      "Om fladen er stål, aluminium eller kunststof.",
      "Antal skilte og om de skal være firkantede eller figurskårne.",
      "Trykfil eller logo som vektorfil. Se <a href=\"/til-varebilen/folie/bilreklame-design-og-filer/\">design og trykfiler</a>.",
      "Hvornår skiltene skal bruges, så produktionstiden passer.",
      "Om navn og CVR-nummer allerede står i folie på bilen."
    ],
    faq: [
      ["Kan et magnetskilt erstatte CVR-mærkningen?", "Nej. Navn og CVR-nummer må ikke stå på skilte, der kan tages af og på bilen. De må sidde i selvklæbende folie."],
      ["Hvad koster et magnetskilt til bilen?", "Hos LaserTryk.dk koster ét skilt på 10 x 40 cm fra 486 kr. og ti skilte 642 kr., uden fragt (oktober 2026)."],
      ["Hvor længe holder et magnetskilt?", "Vistaprint angiver cirka to år ved korrekt pleje. LaserTryk.dk angiver tre år."],
      ["Kan magnetskilte sidde på aluminium?", "Nej. Vistaprint skriver, at deres magnetskilte ikke kan sidde på aluminium eller kulfiber, og LaserTryk.dk kræver en jernholdig overflade."],
      ["Hvor ofte skal magnetskiltet tages af?", "LaserTryk.dk skriver hver dag, og Vistaprint skriver mindst én gang om ugen, så fladen under kan vaskes og tørres."],
      ["Hvor høje skal bogstaverne i CVR-nummeret være?", "Mindst 3 cm. Der skal stå CVR efterfulgt af nummerets 8 cifre på samme linje eller nedenunder, og firmanavnet skal også være mindst 3 cm højt."],
      ["Må logoet stå i stedet for firmanavnet?", "Ja, hvis logoet entydigt identificerer virksomheden. Det skal stå i begge sider og må heller ikke sidde på et skilt, der kan tages af."],
      ["Hvordan tager man et magnetskilt af?", "LaserTryk.dk skriver, at man tager fat i en kant og ruller skiltet af i en bue. Trækker man lige ud, kan det skade magnetens styrke."],
      ["Kan magnetskiltet sidde på en nylakeret bil?", "Vistaprint skriver, at der skal gå 90 dage efter ny lakering, 60 dage efter klarlak og 2 dage efter voks."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 85", url: REG, dato: "2026-10-07" },
      { navn: "LaserTryk.dk: Magnetfolie", url: LT, dato: "2026-10-07" },
      { navn: "LaserTryk.dk: Bilstreamers", url: LTS, dato: "2026-10-07" },
      { navn: "LaserTryk.dk: CVR-klistermærker til bil", url: LTC, dato: "2026-10-07" },
      { navn: "Vistaprint: Magnetskilte til bil", url: VP, dato: "2026-10-07" },
      { navn: "Trykwerk: Autoreklame", url: TW, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MG, dato: "2026-10-07" },
      { navn: "3M: Wrap Film Series 2080, Product Bulletin (november 2023)", url: M3, dato: "2026-10-07" },
      { navn: "Avery Dennison: Supreme Wrapping Film, Product Data Sheet", url: AV, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["§ 85, stk. 1: kravet om CVR-nummer og navn gælder vare- og lastbiler med en tilladt totalvægt på ikke over 4 t, der er registreret til udelukkende erhvervsmæssig brug; er der en registreret bruger, oplyses brugerens CVR-nummer og navn; navnet kan erstattes af virksomhedens logo, hvis logoet entydigt identificerer virksomheden.", REG],
    ["§ 85, stk. 2: oplysningerne skal være synlige og letlæselige, i en farve, der klart afviger fra bilens farve, og stå på venstre og højre side af bilen.", REG],
    ["§ 85, stk. 3: CVR-nummer skal anføres med mindst 3 cm høje bogstaver og tal som »CVR« efterfulgt på linje eller nedenunder af nummerets 8 cifre; virksomhedsnavnet skal anføres med mindst 3 cm høje bogstaver og tal.", REG],
    ["LaserTryk.dk: produktionstiden er 5 hverdage eller 48 timer; prisen er ekskl. fragt, administrationsgebyr, miljøtillæg og emballageafgift.", LT],
    ["LaserTryk.dk: magnetfolien skal rulles af ved at tage fat i en kant og bue den; man må aldrig bare trække i folien, da det kan skade magnetismens styrke.", LT],
    ["LaserTryk.dk: til en mere permanent løsning foreslås bilstreamers eller figurskåret folie med komplekse former og størrelser op til tre meter, som tåler bilvask.", LT],
    ["LaserTryk.dk: CVR-klistermærker fås i hvid eller transparent folie med farvetryk og i sort eller hvid folie uden tryk; uden tryk koster 1 stk. 314 kr. og 10 stk. 592 kr. ekskl. moms.", LTC],
    ["LaserTryk.dk: bilstreamers har altid blank overflade, der passer til de fleste bilers lak, og kan nemt fjernes, hvis de bestilles med aftagelig klæb.", LTS],
    ["Vistaprint: tre trin ved påsætning (rengør bilens flade og magnetens bagside med fugtig klud og rengøringsmiddel, lad begge lufttørre, sæt magneten på en flad overflade uden ujævnheder eller rust uden luftbobler og med hjørnerne fladt); magneten kan da holde i op til to år.", VP],
    ["Vistaprint: magnetskilte kan sidde på sidedøren, sidepaneler eller bagdøre på varebiler; døre og paneler må være en anelse buede; magneter anbefales ikke på flader med indhug eller buler; største størrelse er 90 x 60 cm.", VP],
    ["Vistaprint anbefaler kun magnetskiltene til korttidsbrug, særligt gentagen korttidsbrug, og ved ofte ekstreme vejrforhold at fjerne dem endnu oftere, helst dagligt; trykket sker med UV-blæk, der ikke falmer.", VP],
    ["Trykwerk: Logopakke 1 til varevogn (fx VW Caddy, Peugeot Partner) koster fra 1.650 kr. ekskl. moms inkl. layoutforslag, mockup og montering og omfatter logo og telefonnummer på siden, et mindre logo bag på bilen og CVR-nummer.", TW],
    ["Montagegruppen anbefaler, at bilfolie fjernes af professionelle; kampagnefolie koster fra 195 kr. pr. m² ekskl. moms.", MG]
  ]
};
