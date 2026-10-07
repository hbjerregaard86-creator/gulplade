// Underside /til-varebilen/traek-og-tagudstyr/tagboejler-og-tagreling/ (07-10-2026)
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var DIM = `https://www.retsinformation.dk/eli/lta/2025/1447`;
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var VK = `https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/tagboejler-til-varevogn/`;
var VK_BASIC = `https://www.vankompagniet.dk/product/tagbojler_vk-basic_vi_2-bojler/`;
var VK_STD = `https://www.vankompagniet.dk/product/tagboejler-vk-standard-2-stk-aluminium-mb-citan-2022-townstar-22-kangoo-2021/`;
var VK_PREM = `https://www.vankompagniet.dk/product/vk-premium-foldbare-tagboejler-til-jumpy-expert-proace-vivaro-scudo-l2-og-l3-2-boejler/`;
var VK_STOP = `https://www.vankompagniet.dk/product/vk-basic-tagboejler-foldbare-lastestop-saet-med-2-stk-18-cm-hoeje/`;
var VK_STOP_STD = `https://www.vankompagniet.dk/product/vk-standard-premium-lastestop-2-pak/`;
var VK_RULLE = `https://www.vankompagniet.dk/product/vk-basic-stigerulle-til-berlingo-partner-proace-city-combo-doblo-l2/`;
var RAM = `https://www.rameder.dk/lastholdere-skiholdere/lastholdere/`;
var RAM_FAG = `https://www.rameder.dk/anhaengertraek/fagbegreber.html`;
var THULE = `https://www.thule.com/da-dk/roof-rack`;
var AYVENS = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var VW_CADDY = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/Caddy_Cargo.pdf`;
var VW_BUZZ = `https://ngw6.volkswagen.dk/globalassets/PDF/Erhvervsbiler/ID.Buzz_Cargo.pdf`;

module.exports = {
  id: "traek-og-tagudstyr/tagboejler-og-tagreling",
  side: {
    slug: "tagboejler-og-tagreling",
    navn: "Tagbøjler og tagreling",
    titel: "Tagbøjler og tagreling til varebil",
    kort: `Tagbøjler, rørholdere og lastestop til varebilen: hvordan de fastgøres, hvor mange bøjler bilen skal have, hvad de bærer og koster, og reglerne for last på taget.`,
    beskrivelse: `Tagbøjler til varebil fra 1.895 kr.: fastgørelse, tre serier, antal bøjler, belastning, rørholdere, Thules priser og reglerne for last på taget.`,
    manchet: `Tagbøjler til en varebil koster fra 1.895 kr. for to bøjler. Hvordan de fastgøres, afhænger af taget: normalt tag, fastgørelsespunkter, tagreling eller T-sporprofil. Her er typerne, belastningen, priserne og reglerne for udstyr på taget.`,
    visuel: {
      hero: "traek-og-tagudstyr",
      kort_fortalt: [
        ["Tagbøjler, VanKompagniet", "fra 1.895 kr.", "for to VK Basic-bøjler"],
        ["Bæreevne, VK Basic", "50 kg", "pr. bøjle"],
        ["Tagbelastning, Caddy Cargo", "100 kg", "tilladt ifølge Volkswagen"],
        ["Højde med last", "højst 4,00 m", "målt fra vejen"]
      ],
      toc: true,
      stribe: {
        ids: ["vw-caddy", "vw-id-buzz-cargo", "mercedes-sprinter"],
        titel: "Tilbud lige nu på varebilerne i artiklen"
      }
    },
    afsnit: [
      {
        overskrift: "Tagbøjler, tagreling og tagplatform",
        tekst: [
          `Tagbøjler giver plads til stiger, rør og lange materialer på taget, så varerummet kan bruges til værktøj og andet udstyr. VanKompagniet har over 100 produkter i sin kategori med tagbøjler og tilbehør, fra de enkleste bøjler til stigeholdere, rørholdere og lastestop.`,
          `Tagbøjlerne er grundlaget for næsten alt andet udstyr på taget. En stigeholder, en rørholder eller en holder til et blink sidder på bøjlerne, så valget af bøjler afgør, hvad der senere kan monteres.`
        ],
        kort: [
          ["Tagbøjler", "Tværgående bøjler, som lasten spændes fast til."],
          ["Tagreling", "Langsgående skinner på taget. Bøjlerne spændes fast på relingen."],
          ["Tagplatform", "En flad ramme over hele eller dele af taget. Thule sælger fx Caprock som tagplatform."]
        ]
      },
      {
        overskrift: "Fastgørelse afhænger af taget",
        tekst: [
          "Rameder viser lastholdere efter bilmodel til biler med normalt tag, tagrende, fastgørelsespunkter, tagreling eller T-sporprofil. Bøjlerne til varebiler er typisk modelspecifikke. VanKompagniets VK Basic-bøjler findes fx til Citan, Kangoo og Townstar, Custom og VW T7, Expert, Jumpy, ProAce, Vivaro og Scudo, Caddy, Connect, Sprinter, Transit H2 og ID. Buzz.",
          `Rameder kalder T-sporprofilen for en T-not-profil. Hos Rameder kan du søge på bilens nummerplade eller model, og så vises kun de lastholdere, der passer til bilens tag.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Fire måder at fastgøre tagbøjler på en varebil set forfra: på et normalt tag, i fastgørelsespunkter, på en tagreling og i en T-sporprofil. Den fremhævede del er fastgørelsen."><rect class="tg-hylde" x="4" y="46" width="92" height="6"/><path class="tg-rum" d="M10,130 L10,78 Q50,62 90,78 L90,130 Z"/><rect class="tg-kasse" x="10" y="52" width="10" height="24"/><rect class="tg-kasse" x="80" y="52" width="10" height="24"/><path class="tg-doer" d="M10,62 L6,86 L12,92"/><path class="tg-doer" d="M90,62 L94,86 L88,92"/><rect class="tg-hylde" x="104" y="46" width="92" height="6"/><path class="tg-rum" d="M110,130 L110,78 Q150,62 190,78 L190,130 Z"/><rect class="tg-kasse" x="116" y="52" width="12" height="22"/><rect class="tg-kasse" x="172" y="52" width="12" height="22"/><circle class="tg-modul" cx="122" cy="74" r="4"/><circle class="tg-modul" cx="178" cy="74" r="4"/><rect class="tg-hylde" x="204" y="46" width="92" height="6"/><path class="tg-rum" d="M210,130 L210,78 Q250,62 290,78 L290,130 Z"/><rect class="tg-profil" x="214" y="66" width="12" height="8"/><rect class="tg-profil" x="274" y="66" width="12" height="8"/><rect class="tg-kasse" x="216" y="52" width="8" height="10"/><rect class="tg-kasse" x="276" y="52" width="8" height="10"/><rect class="tg-modul" x="212" y="61" width="16" height="6"/><rect class="tg-modul" x="272" y="61" width="16" height="6"/><rect class="tg-hylde" x="304" y="46" width="92" height="6"/><path class="tg-rum" d="M310,130 L310,78 Q350,62 390,78 L390,130 Z"/><rect class="tg-kasse" x="318" y="52" width="8" height="24"/><rect class="tg-kasse" x="374" y="52" width="8" height="24"/><rect class="tg-modul" x="316" y="72" width="12" height="7"/><rect class="tg-modul" x="372" y="72" width="12" height="7"/><text class="tg-fremhaev" x="50" y="152" text-anchor="middle">Normalt tag</text><text class="tg-fremhaev" x="150" y="152" text-anchor="middle">Fastgørelses-</text><text class="tg-fremhaev" x="150" y="166" text-anchor="middle">punkter</text><text class="tg-fremhaev" x="250" y="152" text-anchor="middle">Tagreling</text><text class="tg-fremhaev" x="350" y="152" text-anchor="middle">T-spor</text><text class="tg-lille" x="4" y="190">SET FORFRA · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Fødderne er tegnet forenklet, og den rigtige fod afhænger af bilmodellen. Kilde: <a href="${RAM}" rel="noopener">Rameder: Lastholdere</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Samme model, forskellige bøjler",
        tekst: [
          `VanKompagniet skriver, at det ikke er nok at kende bilmærket. Model, årgang, længde og taghøjde kan også afgøre, hvilket sæt der passer, og to varebiler med samme modelnavn kan kræve forskellige bøjler, hvis karrosseriet eller generationen ikke er den samme.`,
          `Det kan ses i sortimentet. Der er ét sæt til Caddy fra 2020 i længde 1 og et andet til Caddy fra 2022 i længde 2, og bøjlerne til Transit er til taghøjde H2. Længde og taghøjde står i bilens papirer som fx L2H2, og betegnelserne er forklaret i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`
        ]
      },
      {
        overskrift: "Tre serier hos VanKompagniet",
        tekst: [
          `VanKompagniet sælger tre serier af tagbøjler under navnet VK. VK Basic er den enkleste, VK Standard har en lastebar i aluminium og leveres med fire lastestop, og VK Premium kan foldes. VK Standard findes både i aluminium og som Black Edition. VanKompagniets priser er uden moms.`,
          `Til Expert, Jumpy, ProAce, Vivaro og Scudo i længde 2 og 3 fås alle tre serier. To bøjler koster fra 1.895 kr. i VK Basic til 7.995 kr. i VK Premium. Med tre bøjler koster VK Basic 2.895 kr. og VK Premium 9.995 kr.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["VK Basic, 2 bøjler", 1895],
            ["VK Basic, 3 bøjler", 2895],
            ["VK Standard aluminium, 2 bøjler", 3895],
            ["VK Standard aluminium, 3 bøjler", 4895],
            ["VK Premium foldbar, 2 bøjler", 7995],
            ["VK Premium foldbar, 3 bøjler", 9995]
          ],
          note: `Priser til Expert, Jumpy, ProAce, Vivaro og Scudo i længde 2 og 3. Kilde: <a href="${VK}" rel="noopener">VanKompagniet: Tagbøjler til varevogn</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor mange bøjler",
        tekst: [
          `VanKompagniet sælger sæt med to, tre, fire og fem bøjler. Ifølge VanKompagniet skal antallet vælges ud fra bilen, den samlede tagløsning og det, der skal transporteres.`,
          `De små varebiler har typisk sæt med to eller tre bøjler, mens Transit i længde 3 og 4 fås med fire VK Basic-bøjler for 3.895 kr. Det største sæt er fem VK Standard-bøjler i Black Edition til Master og Interstar 2024 i L2H2 for 7.895 kr.`,
          `VanKompagniet anbefaler at se bøjlerne som et samlet system, hvor bøjler, fastgørelse og tilbehør skal passe sammen. Det betyder, at en rørholder eller en stigeholder skal passe til den serie, bilen har.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="To varebiler set fra siden. En lille varebil har to tagbøjler, og en lang og høj varebil har fire tagbøjler."><g transform="translate(20,140) scale(0.6)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><rect class="tg-modul" x="44" y="62" width="6" height="8"/><rect class="tg-modul" x="112" y="62" width="6" height="8"/><g transform="translate(200,140) scale(0.78)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="17"/></g><rect class="tg-modul" x="212" y="41" width="6" height="8"/><rect class="tg-modul" x="252" y="41" width="6" height="8"/><rect class="tg-modul" x="292" y="41" width="6" height="8"/><rect class="tg-modul" x="332" y="41" width="6" height="8"/><line class="tg-gulvlinje" x1="4" y1="154" x2="396" y2="154"/><text class="tg-fremhaev" x="95" y="176" text-anchor="middle">2 bøjler</text><text x="95" y="192" text-anchor="middle">fx Partner og Berlingo</text><text class="tg-fremhaev" x="294" y="176" text-anchor="middle">4 bøjler</text><text x="294" y="192" text-anchor="middle">fx Transit L3 og L4</text></svg>`,
          tekst: `Skematisk. Antallet af bøjler følger VanKompagniets sæt til de to biltyper. Kilde: <a href="${VK}" rel="noopener">VanKompagniet: Tagbøjler til varevogn</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Aluminium eller stål",
        tekst: [
          `Thule sælger aluminiumsbøjler som WingBar Evo og ProBar Evo, og VK Basic er også i aluminium med aerodynamisk profil. Rhino har begge materialer, med KammBar Pro i anodiseret aluminium og KammBar Fleet i højstyrkestål.`,
          `Rameder skelner mellem to profiler. En aluskinneprofil har et ovalt tværsnit, og en firkantprofil er firkantet og overtrukket med et lag sort plast. Ifølge Rameder passer T-not-adaptere kun til aluskinneprofiler.`,
          `Rhino oplyser, at KammBar Pro kan monteres på 15 minutter og KammBar Fleet på 15–30 minutter.`
        ],
        punkter: [
          "<strong>Aluminium.</strong> Thule sælger aluminiumsbøjler som WingBar Evo og ProBar Evo. VK Basic er i aluminium med aerodynamisk profil."
        ],
        figur: {
          type: "daekning",
          kolonner: ["", "Rhino KammBar Pro", "Rhino KammBar Fleet", "VK Basic"],
          raekker: [
            ["Materiale", "Anodiseret aluminium", "Højstyrkestål, zinkforseglet", "Aluminium"],
            ["Antal bøjler", "2, 3 eller 4", "2, 3 eller 4", "2, 3 eller 4"],
            ["Bredder", "1.240–1.700 mm", "1.240–1.840 mm", "Modelspecifik"],
            ["Lastestop med", "2 par", "2 par", "4 stk. på flere modeller"]
          ],
          note: `Kilder: <a href="https://www.rhinoproducts.eu/product/kammbar-pro/" rel="noopener">Rhino KammBar Pro</a>, <a href="https://www.rhinoproducts.eu/product/kammbar-fleet/" rel="noopener">Rhino KammBar Fleet</a> og <a href="${VK_BASIC}" rel="noopener">VanKompagniet VK Basic</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Belastning pr. bøjle",
        tekst: [
          "VanKompagniet oplyser, at VK Basic-bøjlerne må belastes med 50 kg pr. bøjle, og at de er crashtestede. Vægten for et sæt med to bøjler er angivet til 10 kg.",
          `Bøjlerne vejer forskelligt i de tre serier. Et sæt med to VK Standard-bøjler vejer også 10 kg, mens to foldbare VK Premium-bøjler vejer 8 kg. Vægten går fra bilens nyttelast.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Belastning pr. bøjle, VK Basic", 50, "kg"],
            ["Vægt for et sæt med to bøjler", 10, "kg"],
            ["To foldbare VK Premium-bøjler", 8, "kg"]
          ],
          note: `VanKompagniet oplyser tallene og skriver, at VK Basic-bøjlerne er crashtestede. Kilder: <a href="${VK_BASIC}" rel="noopener">VK Basic</a> og <a href="${VK_PREM}" rel="noopener">VK Premium</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tilladt tagbelastning",
        tekst: [
          "Bøjlernes bæreevne og bilens tilladte tagbelastning er to forskellige tal. VK Basic-bøjlerne må belastes med 50 kg pr. bøjle. Volkswagen angiver 100 kg tilladt tagbelastning for Caddy Cargo og 250 kg statisk og 75 kg dynamisk for ID. Buzz Cargo.",
          `VanKompagniet skriver, at du skal kontrollere både bøjlernes oplysninger og bilproducentens anvisninger om montering og belastning, og at lasten skal fastgøres forsvarligt og inden for de angivne grænser.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden med to tagbøjler og last på taget. Højden inklusive last må højst være 4,00 meter"><defs><marker id="pil-tag-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<path class="tg-profil" d="M40,202 L40,156 Q42,146 66,142 L108,96 Q112,92 120,92 L336,92 Q344,92 344,100 L344,202 Z"/><path class="tg-kasse" d="M112,100 L146,100 L146,134 L82,138 Z"/><circle class="tg-hylde" cx="96" cy="204" r="17"/><circle class="tg-hylde" cx="290" cy="204" r="17"/>
<rect class="tg-kasse" x="160" y="84" width="10" height="8"/><rect class="tg-kasse" x="300" y="84" width="10" height="8"/>
<rect class="tg-modul" x="150" y="62" width="170" height="22"/><text class="tg-fremhaev" x="235" y="78" text-anchor="middle">Last</text>
<line class="tg-gulvlinje" x1="16" y1="221" x2="388" y2="221"/><line class="tg-skinne-tynd" x1="320" y1="62" x2="388" y2="62"/>
<g class="tg-maal"><line x1="380" y1="221" x2="380" y2="62" marker-start="url(#pil-tag-1)" marker-end="url(#pil-tag-1)"/><text x="396" y="54" text-anchor="end">højst 4,00 m</text></g>
<g class="tg-call"><line x1="165" y1="88" x2="120" y2="40"/><circle cx="165" cy="88" r="3"/><text class="tg-call__navn" x="16" y="22">Tagbøjle</text><text class="tg-call__under" x="16" y="36">VK Basic: 50 kg pr. bøjle</text></g><g class="tg-call"><line x1="305" y1="88" x2="250" y2="40"/><circle cx="305" cy="88" r="3"/><text class="tg-call__navn" x="200" y="22">Tilladt tagbelastning</text><text class="tg-call__under" x="200" y="36">Caddy Cargo: 100 kg</text></g>
<text class="tg-lille" x="16" y="244">SKEMATISK · IKKE MÅLFAST</text></svg>`,
          tekst: "Skematisk. Højden måles fra vejen til den del, der rager højest op, og må højst være 4,00 m (§ 13 i BEK nr. 1447 af 27/11/2025)."
        }
      },
      {
        overskrift: "Statisk og dynamisk tagbelastning",
        tekst: [
          `Volkswagen angiver to tal for ID. Buzz Cargo. Den statiske tagbelastning gælder, når bilen holder stille, og den dynamiske gælder under kørsel. Under kørsel må taget kun bære 75 kg, altså under en tredjedel af de 250 kg, det må bære, når bilen holder stille.`,
          `For Caddy Cargo oplyser Volkswagen ét tal, 100 kg, for alle motorer i både kort og lang udgave. Tallene står i prislisternes tabel over vægte sammen med anhængervægten.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["ID. Buzz Cargo under kørsel", 75, "dynamisk"],
            ["Caddy Cargo", 100, "alle motorer"],
            ["ID. Buzz Cargo, holder stille", 250, "statisk"]
          ],
          note: `Kilder: <a href="${VW_CADDY}" rel="noopener">Volkswagen, Caddy Cargo modelår 2026</a> og <a href="${VW_BUZZ}" rel="noopener">Volkswagen, ID. Buzz Cargo</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lastestop og stigerulle",
        tekst: [
          `Lastestop er korte stolper på bøjlerne, der holder lasten på plads til siden. VanKompagniet sælger foldbare lastestop til VK Basic i sæt med to for 495 kr. og med fire for 895 kr. De er 18 cm høje, og et sæt med to vejer 2 kg. Til VK Standard koster to lastestop 695 kr.`,
          `En stigerulle monteres bag på den bageste bøjle. VanKompagniet skriver, at den gør det lettere at få lange emner og stiger op på taget uden tunge løft. Rullen til Berlingo, Partner, ProAce City, Combo og Doblo i længde 2 koster 1.795 kr. og vejer 2,5 kg. Mere om stiger i <a href="/til-varebilen/traek-og-tagudstyr/stigeholder/">stigeholder</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 180" role="img" aria-label="Tagbøjle set forfra med et lastestop i hver ende, der holder en bunke rør på plads. Lastestoppene er 18 cm høje og kan foldes ned."><path class="tg-rum" d="M60,160 L60,118 Q200,96 340,118 L340,160 Z"/><rect class="tg-kasse" x="78" y="88" width="12" height="27"/><rect class="tg-kasse" x="310" y="88" width="12" height="27"/><rect class="tg-hylde" x="50" y="80" width="300" height="8"/><rect class="tg-modul" x="70" y="44" width="8" height="36"/><rect class="tg-modul" x="322" y="44" width="8" height="36"/><circle class="tg-profil" cx="94" cy="72" r="8"/><circle class="tg-profil" cx="110" cy="72" r="8"/><circle class="tg-profil" cx="126" cy="72" r="8"/><circle class="tg-profil" cx="142" cy="72" r="8"/><circle class="tg-profil" cx="158" cy="72" r="8"/><circle class="tg-profil" cx="102" cy="58" r="8"/><circle class="tg-profil" cx="118" cy="58" r="8"/><circle class="tg-profil" cx="134" cy="58" r="8"/><circle class="tg-profil" cx="150" cy="58" r="8"/><path class="tg-skinne-tynd" fill="none" d="M326,44 Q352,48 362,78"/><line class="tg-skinne-tynd" x1="330" y1="80" x2="366" y2="80"/><g class="tg-call"><line x1="74" y1="48" x2="40" y2="34"/><circle cx="74" cy="48" r="3"/><text class="tg-call__navn" x="8" y="16">Lastestop</text><text class="tg-call__under" x="8" y="30">18 cm højt</text></g><g class="tg-call"><line x1="356" y1="62" x2="372" y2="36"/><circle cx="356" cy="62" r="3"/><text class="tg-call__navn" x="395" y="16" text-anchor="end">Kan foldes ned</text><text class="tg-call__under" x="395" y="30" text-anchor="end">den stiplede linje</text></g><text class="tg-lille" x="4" y="176">SET FORFRA · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Kilde: <a href="${VK_STOP}" rel="noopener">VanKompagniet: VK Basic foldbare lastestop</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser",
        tekst: [
          `Tabellen viser fra-priser på bøjler og tilbehør hos to forhandlere, alle uden montering. Rameder er en tysk webshop med en dansk side og sælger lastholdere til personbiler og universelle modeller.`
        ],
        tabel: {
          kolonner: ["Produkt", "Forhandler", "Fra"],
          raekker: [
            ["Lastholdere, personbil og universal", "Rameder", "550,99 kr."],
            ["VK Basic tagbøjler, 2 stk.", "VanKompagniet", "1.895 kr."],
            ["VK Standard tagbøjler i aluminium, 2 stk.", "VanKompagniet", "3.895 kr."],
            ["VK Premium tagbøjler, foldbare, 2 stk.", "VanKompagniet", "7.995 kr."],
            ["Lastestop, sæt med 2", "VanKompagniet", "695 kr."],
            ["Holder til blink på tagbøjler", "VanKompagniet", "895 kr."],
            ["VK Basic stigerulle", "VanKompagniet", "1.795 kr."],
            ["Cruz Pipetube, 2 m", "VanKompagniet", "3.995 kr."]
          ],
          note: `Rameders pris er med moms. Kilder: <a href="${RAM}" rel="noopener">Rameder</a> og <a href="https://www.vankompagniet.dk/product-category/udvendigt-paa-varebilen/tagboejler-til-varevogn/" rel="noopener">VanKompagniet</a>, vejledende priser uden montering, set den 4. oktober 2026 og den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Rør til lange emner",
        tekst: [
          "VanKompagniet sælger Cruz Pipetube, et rør til montering på VK-tagbøjlerne, i 2, 3 og 4 meter. Prisen er fra 3.995 kr.",
          `VanKompagniet skriver, at en pipetube er relevant, når rør eller lignende lange emner skal transporteres samlet på taget. Røret monteres på en VK-tagbøjle og kan rumme emner på op til sin egen længde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="Varebil set fra siden med et rør til lange emner monteret på to tagbøjler. Røret fås i 2, 3 eller 4 meter"><defs><marker id="pil-roer-1" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><line class="tg-pil" x1="130" y1="24" x2="350" y2="24" marker-start="url(#pil-roer-1)" marker-end="url(#pil-roer-1)"/><text x="240" y="16" text-anchor="middle">2, 3 eller 4 m</text><rect class="tg-modul" x="130" y="34" width="220" height="16" rx="8"/><text class="tg-modul__tekst" x="240" y="46" text-anchor="middle">PIPETUBE</text><rect class="tg-kasse" x="160" y="50" width="10" height="16"/><rect class="tg-kasse" x="300" y="50" width="10" height="16"/><path class="tg-profil" d="M40,176 L40,130 Q42,120 66,116 L108,70 Q112,66 120,66 L336,66 Q344,66 344,74 L344,176 Z"/><path class="tg-kasse" d="M112,74 L146,74 L146,108 L82,112 Z"/><circle class="tg-hylde" cx="96" cy="178" r="17"/><circle class="tg-hylde" cx="290" cy="178" r="17"/><line class="tg-gulvlinje" x1="16" y1="195" x2="388" y2="195"/><g class="tg-call"><line x1="165" y1="58" x2="74" y2="44"/><circle cx="165" cy="58" r="3"/><text class="tg-call__navn" x="16" y="40">Tagbøjle</text><text class="tg-call__under" x="16" y="54">VK Basic</text></g><text class="tg-lille" x="16" y="210">SET FRA SIDEN · SKEMATISK</text></svg>`,
          tekst: "Tegningen er skematisk og viser et Cruz Pipetube-rør på VK-tagbøjlerne. VanKompagniet sælger røret i 2, 3 og 4 meter."
        }
      },
      {
        overskrift: "Rørholdere i 2–5 meter",
        tekst: [
          `Jo længere røret er, jo mere vejer det. Hos VanKompagniet vejer det korteste rør 10 kg og det længste 14 kg, før der er noget i det.`
        ],
        tabel: {
          kolonner: ["Rør", "Længde", "Vægt", "Pris"],
          raekker: [
            ["CRUZ Pipetube", "2 m", "10 kg", "3.995 kr."],
            ["CRUZ Pipetube", "3 m", "12 kg", "4.995 kr."],
            ["CRUZ Pipetube", "4 m", "14 kg", "5.995 kr."]
          ],
          note: `Produktsiderne nævner ikke montering. Kilde: <a href="https://www.vankompagniet.dk/product/3-m-pipetube-til-vk-tagbojler/" rel="noopener">VanKompagniet</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Rhino sælger også en rørholder, PorteTube Pro, i 3, 4 og 5 m. Den kan låses med nøgle, har åbning i begge ender og rummer 66 rør på 15 mm uden foring eller 59 med foring. Den passer på bøjleprofiler op til 60 x 45 mm. Kilde: <a href="https://www.rhinoproducts.eu/product/portetube-pro/" rel="noopener">Rhino PorteTube Pro</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Tagstativ med rulle",
        tekst: [
          "Rhino KammRack er et tagstativ med samme bøjleprofil som KammBar og en rulle i anodiseret aluminium i fuld bredde bagtil. Ifølge Rhino tager monteringen 25 minutter for én person og 14 minutter for to.",
          `KammRack leveres med rullen som en del af stativet, mens VanKompagniet sælger stigerullen som tilbehør til den bageste VK Basic-bøjle.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Montering, én person", 25, "min."],
            ["Montering, to personer", 14, "min."]
          ],
          note: `Rhino oplyser monteringstiden for KammRack. Kilde: <a href="https://www.rhinoproducts.eu/product/kammrack/" rel="noopener">Rhino KammRack</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Priser hos Thule",
        tekst: [
          "Thules danske webshop viser fra-priser på tagbøjlesystemer med bøjler, fødder og pasformsæt. Det afhænger af bilen, hvilket fodsæt der passer.",
          `Thules priser er med moms, ifølge Thules salgsvilkår. Fra-priserne går fra 1.729 kr. for SmartRack XT med firkantede bøjler til 3.498 kr. for SlideBar Evo. Thule oplyser ikke, om montering er med.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["SmartRack XT SquareBar, komplet", 1729],
            ["SmartRack XT AluminiumBar, komplet", 1969],
            ["SquareBar Evo, sort", 2068],
            ["WingBar Evo, aluminium", 2588],
            ["ProBar Evo, aluminium", 3018],
            ["WingBar Edge, sort", 3448],
            ["SlideBar Evo, aluminium", 3498]
          ],
          note: `Fra-priser med moms i <a href="${THULE}" rel="noopener">Thules danske webshop</a>, set den 7. oktober 2026. Alle priser er med moms ifølge <a href="https://www.thule.com/da-dk/help-center/terms-of-sale" rel="noopener">Thules salgsvilkår</a>, pkt. 5.1, set den 5. oktober 2026. Thule oplyser ikke, om montering er med.`
        }
      },
      {
        overskrift: "Regler for udstyr på taget",
        tekst: [
          `Færdselsloven kræver, at gods er anbragt, så det ikke kan være til fare for personer eller skade ejendom, og så det ikke kan slæbe eller falde af på vejen. Det gælder også rør og stiger på taget.`,
          `Detailforskrifterne har desuden regler for selve udstyret. Et tagreklameskilt på en varebil skal sidde mindst 0,40 m fra tagets forkant. Reglen gælder ikke for en bil med foranliggende styring og en taghøjde på mindst 1,80 m over vejen.`,
          `Højden på højst 4,00 m måles til den del, der rager højest op, også når det er lasten. Antenner tæller ikke med.`
        ],
        punkter: [
          "<strong>Fastgørelse.</strong> Bagagebærere og lignende skal være forsvarligt fastgjort.",
          "<strong>Andre trafikanter.</strong> De må ikke medføre unødig fare.",
          "<strong>Køreegenskaber.</strong> De må ikke ved den tilsigtede brug påvirke bilens køreegenskaber uheldigt.",
          "<strong>Lygtebøjle.</strong> Skal sidde mindst 2,00 m over vejen, og ingen del må være lavere.",
          "<strong>Tagreklameskilte.</strong> Må ikke medføre unødig fare for andre trafikanter."
        ],
        efter: [
          `Kilder: <a href="${FL}" rel="noopener">færdselsloven, § 82, stk. 3</a>, <a href="${DETAIL}" rel="noopener">detailforskrifterne pkt. 3.02.001, 9.06.001, 9.06.004, 9.06.005, 9.06.021 og 9.06.024</a> og <a href="${DIM}" rel="noopener">BEK nr. 1447 af 27/11/2025, § 13</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ved aflevering af leasingbilen",
        tekst: [
          "Ayvens’ huskeliste nævner tagbøjler blandt det ekstraudstyr, der skal afleveres med bilen. Manglende afmontering af ekstra udstyr koster 1.500 kr.",
          `Huskelisten handler om udstyr, der hører til bilen. Ayvens skriver også, at udstyr, du selv har sat på i leasingperioden, skal fjernes før afleveringen, og at det ellers udløser gebyret. Gebyrlisten er fra juni 2025.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forhandleren vide",
    spoergsmaal_manchet: "Så passer bøjlerne til taget og lasten.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og højde, fx H1 eller H2.",
      "Bilens længde, fx L1 eller L2.",
      "Tagtype: normalt tag, fastgørelsespunkter eller tagreling.",
      "Hvad der skal på taget, og hvor tungt det er.",
      "Om der skal stigeholder, rørholder, lastestop eller blink på bøjlerne.",
      "Om bilen er leaset."
    ],
    faq: [
      ["Hvad koster tagbøjler til en varebil?", "Fra 1.895 kr. for to VK Basic-bøjler hos VanKompagniet. To VK Standard-bøjler i aluminium koster 3.895 kr., og to foldbare VK Premium-bøjler fra 7.995 kr. (oktober 2026)."],
      ["Hvor meget kan tagbøjlerne bære?", "VK Basic-bøjlerne må belastes med 50 kg pr. bøjle ifølge VanKompagniet, der angiver vægten til 10 kg for et sæt med to bøjler."],
      ["Hvor mange tagbøjler skal varebilen have?", "VanKompagniet sælger sæt med to til fem bøjler og skriver, at antallet skal vælges ud fra bilen, tagløsningen og det, der skal transporteres. Små varebiler har typisk to eller tre bøjler."],
      ["Hvilke tagbøjler findes i aluminium?", "Thule sælger WingBar Evo og ProBar Evo i aluminium. VanKompagniets VK Basic og VK Standard findes også i aluminium."],
      ["Kan man transportere rør på taget?", "Ja, fx i en pipetube på tagbøjlerne. VanKompagniet sælger Cruz Pipetube i 2–4 meter fra 3.995 kr."],
      ["Skal tagbøjlerne afleveres med leasingbilen?", "Hos Ayvens står tagbøjler på huskelisten over ekstraudstyr, der afleveres med bilen. Udstyr, virksomheden selv har sat på, skal fjernes, ellers koster det et gebyr på 1.500 kr."],
      ["Hvor meget må der være på taget af en VW Caddy Cargo?", "Volkswagen angiver 100 kg tilladt tagbelastning for Caddy Cargo i prislisten for modelår 2026."],
      ["Hvad er forskellen på statisk og dynamisk tagbelastning?", "Den statiske gælder, når bilen holder stille, og den dynamiske under kørsel. Volkswagen angiver 250 kg statisk og 75 kg dynamisk for ID. Buzz Cargo."],
      ["Hvad er forskellen på KammBar Pro og KammBar Fleet?", "KammBar Pro er i anodiseret aluminium og fås i fire bredder op til 1.700 mm. KammBar Fleet er i højstyrkestål med zinkforsegling og fås i fem bredder op til 1.840 mm."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 9.06", url: DETAIL, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven (LBK nr. 118 af 12/01/2026), § 82", url: FL, dato: "2026-10-07" },
      { navn: "VanKompagniet: Tagbøjler til varevogn", url: VK, dato: "2026-10-07" },
      { navn: "VanKompagniet: VK Basic tagbøjler, Transit H2", url: "https://www.vankompagniet.dk/product/vk-basic-tagbojler-med-2-bojler-og-4-stop-passer-til-transit-i-hojde-2/", dato: "2026-10-04" },
      { navn: "VanKompagniet: Tagbøjler VK Standard 2 stk. aluminium, Citan, Townstar og Kangoo", url: VK_STD, dato: "2026-10-07" },
      { navn: "VanKompagniet: Tagbøjler VK Premium, 2 stk. foldbare", url: VK_PREM, dato: "2026-10-07" },
      { navn: "VanKompagniet: VK Basic foldbare lastestop, sæt med 2", url: VK_STOP, dato: "2026-10-07" },
      { navn: "VanKompagniet: Lastestop VK Standard, sæt med 2", url: VK_STOP_STD, dato: "2026-10-07" },
      { navn: "VanKompagniet: VK Basic stigerulle", url: VK_RULLE, dato: "2026-10-07" },
      { navn: "Rameder: Lastholdere", url: RAM, dato: "2026-10-07" },
      { navn: "Rameder: Fagbegreber", url: RAM_FAG, dato: "2026-10-07" },
      { navn: "Thule: Tagbøjler", url: THULE, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYVENS, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om køretøjers største bredde, længde, højde, vægt og akseltryk (BEK nr. 1447 af 27/11/2025)", url: DIM, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: Caddy Cargo, priser og tekniske specifikationer, modelår 2026", url: VW_CADDY, dato: "2026-10-07" },
      { navn: "Volkswagen Erhvervsbiler: ID. Buzz Cargo, priser og tekniske specifikationer", url: VW_BUZZ, dato: "2026-10-07" },
      { navn: "Rhino Products: KammBar Pro", url: "https://www.rhinoproducts.eu/product/kammbar-pro/", dato: "2026-10-04" },
      { navn: "Rhino Products: KammBar Fleet", url: "https://www.rhinoproducts.eu/product/kammbar-fleet/", dato: "2026-10-04" },
      { navn: "Rhino Products: KammRack", url: "https://www.rhinoproducts.eu/product/kammrack/", dato: "2026-10-04" },
      { navn: "Rhino Products: PorteTube Pro", url: "https://www.rhinoproducts.eu/product/portetube-pro/", dato: "2026-10-04" },
      { navn: "VanKompagniet: CRUZ Pipetube, 2 meter", url: "https://www.vankompagniet.dk/product/3-m-pipetube-til-vk-tagbojler/", dato: "2026-10-07" },
      { navn: "VanKompagniet: CRUZ Pipetube, 3 meter", url: "https://www.vankompagniet.dk/product/4-m-pipetube-til-vk-tagbojler-2/", dato: "2026-10-07" },
      { navn: "VanKompagniet: CRUZ Pipetube, 4 meter", url: "https://www.vankompagniet.dk/product/4-m-pipetube-til-vk-tagbojler/", dato: "2026-10-07" },
      { navn: "VanKompagniet: Tagbøjler VK Basic, Mercedes Vito", url: VK_BASIC, dato: "2026-10-07" },
      { navn: "Thule Danmark: Tagbøjler og -platforme", url: "https://www.thule.com/da-dk/roof-rack", dato: "2026-10-07" },
      { navn: "Thule Danmark: Vilkår for salg", url: "https://www.thule.com/da-dk/help-center/terms-of-sale", dato: "2026-10-05" }
    ]
  },
  nye_fakta: [
    ["VanKompagniets kategori Tagbøjler til varevogn viser 103 resultater (tagbøjler, stigeholdere, Pipetube, lastestop, stigeruller m.m.); tagbøjler giver plads til stiger, rør og lange materialer, så varerummet kan bruges til værktøj og udstyr.", VK],
    ["Rameder viser lastholdere til biler med normalt tag, tagrende, fastgørelsespunkter, tagræling eller T-not-profil; man kan vælge lastholdere via nummerplade eller komfort-søgning.", RAM],
    ["VanKompagniet: model, årgang, længde og taghøjde kan have betydning for, hvilket sæt der passer, og to varebiler med samme modelnavn kan kræve forskellige løsninger, hvis karrosseri eller generation ikke er den samme; der findes sæt til VW Caddy 2020 L1 og til Caddy 2022 L2 og til Ford Transit H2.", VK],
    ["VanKompagniet sælger VK Basic, VK Standard og foldbare VK Premium-tagbøjler, i sæt med to, tre, fire og fem bøjler og i aluminium og Black Edition.", VK],
    ["VK Standard 2 stk. aluminium har lastebar i aluminium og leveres med 4 lastestop; et sæt vejer 10 kg og koster 3.895 kr. ekskl. moms.", VK_STD],
    ["Priser ekskl. moms til Expert/Jumpy/ProAce/Vivaro/Scudo L2/L3: VK Basic 2 stk. 1.895 kr., 3 stk. 2.895 kr.; VK Standard aluminium 2 stk. 3.895 kr., 3 stk. 4.895 kr.; VK Premium foldbar 2 stk. 7.995 kr., 3 stk. 9.995 kr.", VK],
    ["VK Basic 4 stk. til Ford Transit L3/L4 H2/H3 koster 3.895 kr. ekskl. moms; VK Standard 5 stk. Black Edition til Master/Interstar 2024 L2H2 koster 7.895 kr. ekskl. moms.", VK],
    ["VanKompagniet: antallet af tagbøjler skal vælges ud fra bilen, tagløsningen og det, der skal transporteres; bøjlerne skal ses som et samlet system, hvor lastholdere, fastgørelse og tilbehør skal passe sammen.", VK],
    ["Rameder: en aluskinneprofil har ovalt tværsnit (i sølv), en firkant-lastholderprofil har firkantet tværsnit og er overtrukket med et lag sort plast, og T-not-adaptere er kun egnede til aluskinneprofiler.", RAM_FAG],
    ["VK Premium 2 stk. foldbare tagbøjler til Expert/Jumpy/ProAce/Vivaro/Scudo L2/L3 vejer 8 kg og koster 7.995 kr. ekskl. moms.", VK_PREM],
    ["VanKompagniet: kontrollér både tagbøjlernes oplysninger og bilproducentens anvisninger om montering og belastning; lasten skal fastgøres forsvarligt og inden for de angivne grænser.", VK],
    ["Volkswagen angiver tilladt tagbelastning 100 kg for alle motorer på Caddy Cargo kort og Maxi og 250 kg statisk og 75 kg dynamisk for ID. Buzz Cargo.", VW_BUZZ],
    ["VK Basic foldbare lastestop, 18 cm høje: sæt med 2 stk. 495 kr. (vægt 2 kg) og sæt med 4 stk. 895 kr., ekskl. moms; lastestop til VK Standard, sæt med 2, 695 kr. (2 kg).", VK_STOP],
    ["VK Basic stigerulle monteres bagpå den bagerste tagbøjle og gør det nemmere at få lange emner og stiger op på taget uden tunge løft; til Berlingo, Partner, ProAce City, Combo, Doblo L2 koster den 1.795 kr. ekskl. moms og vejer 2,5 kg.", VK_RULLE],
    ["CRUZ Pipetube kan indeholde emner på op til 2, 3 eller 4 meter og monteres på en VK-tagbøjle; vægt 10, 12 og 14 kg; VanKompagniet: Pipetube er relevant, når rør eller lignende lange emner skal transporteres samlet på taget.", "https://www.vankompagniet.dk/product/3-m-pipetube-til-vk-tagbojler/"],
    ["Thule fra-priser (inkl. moms): SmartRack XT SquareBar komplet 1.729 kr., SmartRack XT AluminiumBar komplet 1.969 kr., SquareBar Evo 2.068 kr., WingBar Evo 2.588 kr., ProBar Evo 3.018 kr., WingBar Edge 3.448 kr., SlideBar Evo 3.498 kr.", THULE],
    ["Færdselsloven § 82, stk. 3: gods skal være anbragt, så det ikke kan frembyde fare for personer eller medføre skade på ejendom og ikke kan slæbe eller falde af på vejbanen.", FL],
    ["Tagreklameskilt på varebil N1 skal være anbragt mindst 0,40 m fra tagets forkant; gælder ikke bil med foranliggende styring og taghøjde på mindst 1,80 m over vejbanen (pkt. 9.06.021 og 9.06.024).", DETAIL],
    ["Ved måling af højden ses bort fra antenner (pkt. 3.02.001, stk. 1).", DETAIL],
    ["Ayvens: udstyr, som du selv har tilføjet i leasingperioden, skal fjernes inden aflevering, ellers udløser det et gebyr (manglende afmontering af ekstra udstyr 1.500 kr. ekskl. moms, pr. juni 2025).", AYVENS]
  ]
};
