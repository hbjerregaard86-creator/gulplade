// Emnesiden /til-varebilen/indretning/ (07-10-2026)
var SORT = `https://www.mysortimo.dk/da/Bilindretning/Mest-g%C3%A6ngse-indretninger-%7C-Xpress/c/111520`;
var FORD = `https://katalog.ford.dk/specifikationer/transit-custom/`;
var BEK = `https://www.lovguiden.dk/loven/bekendtgørelse-om-udførelse-af-syn-af-erhvervskøretøjer-ved-vejsiden/bilag-3`;
var MS = `https://www.modul-system.dk/da/content/flooring-lining-modul-system`;
var SKM = `https://info.skat.dk/data.aspx?oid=2303451`;

module.exports = {
  id: "indretning",
  side: {
    slug: "indretning",
    navn: "Indretning",
    titel: "Indretning af varebil: mål, vægt, pris og regler",
    kort: `Her finder du reoler, skuffer og kasser med mål, vægt og pris, lastrumsmål på de mest solgte varebiler og indretning til otte fag.`,
    beskrivelse: `Indretning af varebil: hvad reoler og skuffer koster og vejer, lastrumsmål på de mest solgte modeller, indretning til otte fag og reglerne.`,
    manchet: `En god bilindretning gør varebilen til et værksted på hjul. Værktøjet har en fast plads, materialerne står sikkert, og der går mindre tid med at lede. Her kan du se, hvad en indretning består af, hvad den vejer og koster, og hvad de forskellige fag typisk vælger.`,
    visuel: {
      hero: "indretning",
      kort_fortalt: [
        ["Færdigt modul", "{{ind_modul_pris}} kr.", "pr. modul til en mellemstor varebil"],
        ["Et modul i hver side", "{{ind_op_vaegt}} kg", "{{ind_op_pct}} % af nyttelasten på en Transit Custom L1"],
        ["Fri gang", "{{ind_gang}} mm", "mellem to moduler i en Transit Custom L1"],
        ["Lastsikring fremad", "0,8 × vægten", "efter standarden EN 12195-1"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Det består en varebilindretning af",
        grafik: "anatomi",
        tekst: [
          `En indretning er bygget op af standardmoduler på to eller flere sideprofiler. Profilerne bærer vægten og bliver monteret i bilens gulv og sider. Resten klikkes på: hylder, kasser, kufferter, skuffer og bakker. Derfor kan en opstilling bygges om, når behovet ændrer sig, og flyttes til en ny bil med samme lastrumsmål.`,
          `Et modul er en færdig sektion af reolen med en bestemt længde, dybde og højde. Producenterne sælger modulerne i faste længder, der passer til de almindelige varebiler, og du kan sætte flere moduler efter hinanden langs den samme væg.`,
          `Hullerne i sideprofilerne bestemmer, hvor hylderne sidder. Skal der plads til en højere kasse eller en ekstra skuffe, flytter du hylden et par huller op eller ned i stedet for at skifte hele modulet.`
        ]
      },
      {
        overskrift: "Fra gulv til tag",
        tekst: [
          `En komplet indretning består af flere dele, der monteres i en bestemt rækkefølge. Først kommer gulvet og beklædningen på siderne, fordi mange reolsystemer monteres oven på gulvet. Derefter kommer reoler og skuffer og til sidst udstyret til lastsikring.`,
          `Sortimo skriver, at Xpress-reolerne skal monteres på en Sortimo-vognbund, og at vognbunden ikke følger med reolerne. Gulvet er altså en selvstændig del af prisen. Materialer, vægt og priser på gulve står i <a href="/til-varebilen/indretning/gulv-og-vaegbeklaedning/">gulv og vægbeklædning</a>.`,
          `Skillevæggen adskiller varerummet fra førerhuset og er beskrevet i <a href="/til-varebilen/indretning/skillevaeg/">skillevæg</a>. Stropper, net og skinner til lasten står i <a href="/til-varebilen/indretning/lastsikring-i-varebil/">lastsikring i varebil</a>, og stiger og rør på taget hører under <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 272" role="img" aria-label="Varebil set fra siden med seks nummererede dele: gulv, vægbeklædning, reol, lastsikring, skillevæg og tagbøjler."><g transform="translate(70,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-hylde" x="86" y="70" width="140" height="5"/><rect class="tg-hylde" x="100" y="75" width="4" height="9"/><rect class="tg-hylde" x="208" y="75" width="4" height="9"/><rect class="tg-hylde" x="236" y="88" width="5" height="95"/><rect class="tg-gulv" x="73" y="176" width="162" height="7"/><rect class="tg-profil" x="73" y="90" width="5" height="86"/><rect class="tg-kasse" x="158" y="100" width="74" height="76"/><line class="tg-skinne-tynd" x1="158" y1="125" x2="232" y2="125"/><line class="tg-skinne-tynd" x1="158" y1="150" x2="232" y2="150"/><rect class="tg-kuffert" x="92" y="146" width="46" height="30"/><polyline class="tg-skinne" fill="none" points="86,176 90,142 140,142 144,176"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-nr"><circle cx="148" cy="180" r="9"/><text x="148" y="184" text-anchor="middle">1</text></g><g class="tg-nr"><circle cx="84" cy="112" r="9"/><text x="84" y="116" text-anchor="middle">2</text></g><g class="tg-nr"><circle cx="195" cy="113" r="9"/><text x="195" y="117" text-anchor="middle">3</text></g><g class="tg-nr"><circle cx="115" cy="142" r="9"/><text x="115" y="146" text-anchor="middle">4</text></g><g class="tg-nr"><circle cx="238" cy="140" r="9"/><text x="238" y="144" text-anchor="middle">5</text></g><g class="tg-nr"><circle cx="156" cy="72" r="9"/><text x="156" y="76" text-anchor="middle">6</text></g><g class="tg-nr"><circle cx="20" cy="232" r="9"/><text x="20" y="236" text-anchor="middle">1</text></g><text x="34" y="236">Gulv</text><g class="tg-nr"><circle cx="148" cy="232" r="9"/><text x="148" y="236" text-anchor="middle">2</text></g><text x="162" y="236">Vægbeklædning</text><g class="tg-nr"><circle cx="276" cy="232" r="9"/><text x="276" y="236" text-anchor="middle">3</text></g><text x="290" y="236">Reol og skuffer</text><g class="tg-nr"><circle cx="20" cy="256" r="9"/><text x="20" y="260" text-anchor="middle">4</text></g><text x="34" y="260">Lastsikring</text><g class="tg-nr"><circle cx="148" cy="256" r="9"/><text x="148" y="260" text-anchor="middle">5</text></g><text x="162" y="260">Skillevæg</text><g class="tg-nr"><circle cx="276" cy="256" r="9"/><text x="276" y="260" text-anchor="middle">6</text></g><text x="290" y="260">Tagbøjler</text></svg>`,
          tekst: `Skematisk. Delene i en varebilindretning fra gulvet og op. Gulv, skillevæg og lastsikring har hver sin side under indretning.`
        }
      },
      {
        overskrift: "Sådan sidder indretningen i bilen",
        grafik: "plan",
        tekst: [
          `Det lange modul sidder i venstre side, hvor der ikke er skydedør. Et kortere modul sidder i højre side bag skydedøren, så der stadig er adgang fra siden. Hjulkasserne stikker ind i varerummet, og modulerne er bygget hen over dem.`,
          `Tegningen viser Danmarks mest solgte varebil, Ford Transit Custom L1, med to moduler på {{ind_dybde}} mm i dybden. Der er {{ind_gang}} mm fri gang i midten og {{ind_over}} mm over modulerne til lange emner.`,
          `Den frie gang er pladsen mellem modulerne, hvor du går ind i varerummet og stiller ting på gulvet. Den afhænger af bilens bredde og af modulernes dybde. Et dybere modul giver mere plads på hylderne og mindre plads i midten.`
        ]
      },
      {
        overskrift: "Lastrumsmål",
        grafik: "maaltabel",
        tekst: [
          `Længde, bredde mellem hjulkasserne og højde er de tre mål, en indretning planlægges efter.`,
          `Længden bestemmer, hvor mange moduler der er plads til efter hinanden. Bredden mellem hjulkasserne er det smalleste sted i varerummet, og den afgør, om en plade kan ligge fladt på gulvet mellem modulerne. Højden bestemmer, hvor høje modulerne kan være, og hvor meget plads der er tilbage over dem.`,
          `Tabellen viser de indvendige mål på de mest solgte kassevogne. Klikker du på en model, kan du se den frie gang og nyttelasten efter indretning. Betegnelser som L1H1 og L2H2 er forklaret i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`
        ]
      },
      {
        overskrift: "Hylder eller skuffer",
        tekst: [
          `Det, modulerne indeholder, betyder mere for vægten og prisen end deres længde. Hylder og kasser vejer {{ind_kgm_hylder}} kg pr. meter reol, mens moduler med tre skuffer vejer {{ind_kgm_skuffer}} kg pr. meter. Prisen pr. meter følger samme mønster.`,
          `Skufferne vejer mere, fordi de kører på skinner og kan trækkes helt ud. Til gengæld kan du nå tungt værktøj i bunden af skuffen uden at løfte det ud af en kasse. Hylder med kasser og kufferter er lettere, og kufferterne kan tages med ind hos kunden.`,
          `Mange opstillinger blander de to, med skuffer forneden til det tunge og hylder ovenover til forbrugsvarer. Vægt og pris på skuffer og hylder er sammenlignet i <a href="/til-varebilen/indretning/skuffer/">skuffer til varebil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Hylder og kasser", "{{ind_kgm_hylder}}", "kg pr. meter reol"],
            ["Moduler med tre skuffer", "{{ind_kgm_skuffer}}", "kg pr. meter reol"],
            ["Hylder og kasser", "{{ind_krm_hylder}}", "kr. pr. meter reol"],
            ["Moduler med tre skuffer", "{{ind_krm_skuffer}}", "kr. pr. meter reol"]
          ],
          note: `Færdige moduler til mellemstore varebiler. Kilde: <a href="${SORT}" rel="noopener">Sortimo: Xpress-moduler</a>, set den 2. oktober 2026.`
        }
      },
      {
        overskrift: "Indretning efter fag",
        tekst: [
          `Opstillingen følger det, der skal med på en almindelig dag. En tømrer har brug for andre moduler end en elektriker, selvom de kører i den samme bil.`,
          `Det tunge og det, der bruges oftest, får de pladser, der er lettest at nå fra døren. Ting, der kun er med en gang imellem, kan stå længere inde eller øverst. Hvert fag har sin egen side med forslag til moduler og en liste over de varebiler, der passer.`
        ],
        kort: [
          ["Tømrer og snedker", `Tømreren har brug for plads til maskinkufferter, åbne bakker til beslag og skruer og en fri midtergang til plader og lange emner. Stiger og lægter ligger i et tagsystem. <a href="/til-varebilen/indretning/toemrer/">Indretning til tømrer →</a>`],
          ["Elektriker", `Elektrikeren har mange smådelskasser til materiel, skuffer til håndværktøj og plads til kabeltromler forneden. <a href="/til-varebilen/indretning/elektriker/">Indretning til elektriker →</a>`],
          ["VVS og blik", `Her er der tunge skuffer til fittings og værktøj, en rørholder på taget og plads til pressemaskinen. <a href="/til-varebilen/indretning/vvs/">Indretning til vvs →</a>`],
          ["Service og montage", `Montøren har kufferter, der kan tages med ind hos kunden, og reservedele sorteret i kasser efter opgave. <a href="/til-varebilen/indretning/service/">Indretning til service →</a>`],
          ["Maler", `Maleren har brug for fri gulvplads til spande og dunke, åbne hylder med kant til ruller og pensler og et tagsystem til stiger. <a href="/til-varebilen/indretning/maler/">Indretning til maler →</a>`],
          ["Anlægsgartner", `Gartneren har brug for et gulv, der kan gøres rent, faste pladser til maskinerne og holdere til værktøj med lange skafter. <a href="/til-varebilen/indretning/anlaegsgartner/">Indretning til anlægsgartner →</a>`],
          ["Kloakmester", `Kloakmesteren skal have plads til lange rør, kasser med inddelinger til fittings og en polstret plads til inspektionskameraet. <a href="/til-varebilen/indretning/kloakmester/">Indretning til kloakmester →</a>`],
          ["Låsesmed", `Låsesmeden har mange smådelskasser til cylindre og beslag, en fast plads til nøglemaskinen og skuffer, der kan låses. <a href="/til-varebilen/indretning/laasesmed/">Indretning til låsesmed →</a>`]
        ]
      },
      {
        overskrift: "Vægt og nyttelast",
        grafik: "nyttelast",
        tekst: [
          `Nyttelasten er forskellen mellem bilens tilladte totalvægt og dens egen vægt. Alt, der monteres i varerummet, går fra nyttelasten, også gulv, beklædning og reoler. Hvad totalvægten betyder for kørekortet, står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `Vægten afhænger mere af indholdet end af længden. Hylder og kasser vejer {{ind_kgm_hylder}} kg pr. meter reol, moduler med tre skuffer {{ind_kgm_skuffer}} kg pr. meter. En opstilling med et modul i hver side vejer {{ind_op_vaegt}} kg. På en Transit Custom L1 med {{ind_nyttelast}} kg nyttelast er det {{ind_op_pct}} %.`,
          `Tallene gælder de tomme moduler. Værktøj, maskiner og materialer i reolerne kommer oveni, og det samme gør et gulv. Skuffernes vægt og pris er sammenlignet med hylder i <a href="/til-varebilen/indretning/skuffer/">skuffer til varebil</a>.`
        ]
      },
      {
        overskrift: "Hvad koster indretning af en varebil",
        grafik: "pris",
        tekst: [
          `Alle priser er uden moms. Færdige moduler til en mellemstor varebil koster {{ind_modul_pris}} kr. pr. modul, og en opstilling med et modul i hver side koster {{ind_op_pris}} kr. Prisen følger indholdet ligesom vægten. Hylder og kasser koster {{ind_krm_hylder}} kr. pr. meter, og moduler med tre skuffer koster {{ind_krm_skuffer}} kr. pr. meter.`,
          `Hertil kommer gulv og montering. En opstilling, der konfigureres modul for modul til en bestemt branche, koster mere end de færdige moduler. Indretningen kan ofte lægges ind i leasingaftalen sammen med bilen, så den bliver en del af månedsydelsen.`,
          `Hos Sortimo kontakter en salgsrådgiver køberen efter købet for at aftale monteringen. Monteringen aftales altså for sig og står ikke i prisen på modulerne.`
        ]
      },
      {
        overskrift: "Aluminium, stål eller træ",
        tekst: [
          `Materialet afgør, hvad indretningen vejer, hvad den tåler, og om den kan flyttes til næste bil. De fleste færdige modulsystemer blander materialerne, så de lette dele er i aluminium og de bærende dele i stål.`,
          `Modul-System skriver, at deres gulve og beklædninger limes fast med en stærkt klæbende lim, så der ikke bores i karrosseriet. Ifølge Modul-System fjerner det risikoen for rust ved borehullerne og beskytter bilens restværdi. Restværdien er det, bilen er værd, når aftalen udløber.`
        ],
        kort: [
          ["Aluminium", "Aluminium er let og ruster ikke. De fleste moderne modulsystemer har sideprofiler i aluminium, ofte med bærende dele i stål."],
          ["Stål", "Stål er stærkt og billigt, men tungere. Det bruges især til tunge skuffer og værkstedsløsninger."],
          ["Træ og krydsfiner", "Træ kan tilpasses på stedet og bruges til selvbyggede indretninger, gulv og vægbeklædning. Det er ikke modulært og kan sjældent flyttes til næste bil."]
        ]
      },
      {
        overskrift: "Regler for indretning af varebil",
        tekst: [
          `To regelsæt er relevante for en indretning. Det ene handler om sikkerhed under kørslen, og det andet om skat og moms, når bilen køres hjem. Begge er gennemgået i <a href="/til-varebilen/indretning/regler/">regler for indretning af varebil</a>.`,
          `Lastsikringen gælder både indretningen og det, der står i den. Det gælder også de ting, der står løst på gulvet mellem reolerne.`
        ],
        kort: [
          ["Lastsikring", `Lasten skal være anbragt, så den ikke er til fare og ikke kan falde af (<a href="https://www.lovguiden.dk/loven/f%C3%A6rdselsloven/82" rel="noopener">færdselslovens § 82, stk. 3</a>). Sikringen dimensioneres efter kræfter på 0,8 gange lastens vægt fremad og 0,5 gange til siderne og bagud (standarden EN 12195-1). En indretning har derfor surringsskinner i reol og gulv, og kasser, kufferter og skuffer låses fast i modulerne under kørslen.`],
          ["Specialindretning", `Er indretningen nødvendig for arbejdet, og er der et erhvervsmæssigt behov for den, regnes kørsel mellem hjem og arbejde i virksomhedens interesse. Et skillerum alene er ikke nok. Se <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.`]
        ]
      },
      {
        overskrift: "Specialindretning og kørsel hjem",
        tekst: [
          `Skatterådet har i et bindende svar fra 2021 gengivet Skattestyrelsens to betingelser for specialindrettede biler. Der skal være et erhvervsmæssigt behov for, at bilen er indrettet på den særlige måde. Den specialindrettede bil skal også være nødvendig, for at brugeren kan udføre sit arbejde.`,
          `Er begge betingelser opfyldt, regnes kørsel mellem hjem og arbejde for at ske i virksomhedens interesse. Reglen gælder vare- og lastbiler med en tilladt totalvægt på højst 4 tons, og virksomheden har momsfradrag for leasing og drift af bilen.`,
          `Sagen handlede om en virksomhed med byggeopgaver, hvis ansatte kørte mellem bopæl, overnatningssted og byggeplads. Hvad der tæller som specialindretning, står i <a href="/haandbogen/specialindretning-af-varebil/">specialindretning af varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Beslutningstræ. Er der et erhvervsmæssigt behov for indretningen, og er bilen nødvendig for arbejdet, regnes kørsel mellem hjem og arbejde for at ske i virksomhedens interesse. Er svaret nej, gælder reglen ikke."><defs><marker id="pil-indretning-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="8" width="250" height="44"/><text x="135" y="26" text-anchor="middle">Er der et erhvervsmæssigt behov</text><text x="135" y="42" text-anchor="middle">for den særlige indretning?</text><line class="tg-pil" x1="260" y1="30" x2="298" y2="30" marker-end="url(#pil-indretning-2)"/><text x="279" y="22" text-anchor="middle">Nej</text><rect class="tg-kasse" x="302" y="8" width="94" height="44"/><text x="349" y="26" text-anchor="middle">Reglen</text><text x="349" y="42" text-anchor="middle">gælder ikke</text><line class="tg-pil" x1="135" y1="52" x2="135" y2="76" marker-end="url(#pil-indretning-2)"/><text x="143" y="68">Ja</text><rect class="tg-kasse" x="10" y="80" width="250" height="44"/><text x="135" y="98" text-anchor="middle">Er bilen nødvendig, for at</text><text x="135" y="114" text-anchor="middle">brugeren kan udføre sit arbejde?</text><line class="tg-pil" x1="260" y1="102" x2="298" y2="102" marker-end="url(#pil-indretning-2)"/><text x="279" y="94" text-anchor="middle">Nej</text><rect class="tg-kasse" x="302" y="80" width="94" height="44"/><text x="349" y="98" text-anchor="middle">Reglen</text><text x="349" y="114" text-anchor="middle">gælder ikke</text><line class="tg-pil" x1="135" y1="124" x2="135" y2="148" marker-end="url(#pil-indretning-2)"/><text x="143" y="140">Ja</text><rect class="tg-modul" x="10" y="152" width="250" height="44"/><text class="tg-modul__tekst" x="135" y="170" text-anchor="middle">Kørsel mellem hjem og arbejde</text><text class="tg-modul__tekst" x="135" y="186" text-anchor="middle">sker i virksomhedens interesse</text><text class="tg-lille" x="10" y="222">HØJST 4 TONS TILLADT TOTALVÆGT</text></svg>`,
          tekst: `Skematisk. Skattestyrelsens to betingelser for specialindrettede vare- og lastbiler. Kilde: <a href="${SKM}" rel="noopener">Skatterådet, bindende svar SKM2021.202.SR</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Indretning af elvarebil",
        tekst: [
          `En elvarebil indrettes efter de samme mål som en dieselbil, men batteriet tæller med i bilens egen vægt. Hvor meget nyttelast der er tilbage til indretningen, varierer fra model til model.`,
          `De færdige moduler findes også til elbiler. Sortimo sælger fx Xpress-moduler til E-Transit Custom, eCitan og e-Vito. Vægt, nyttelast og strøm i varerummet står i <a href="/til-varebilen/indretning/indretning-af-elvarebil/">indretning af elvarebil</a>.`
        ]
      },
      {
        overskrift: "Selv bygge eller købe færdigt",
        tekst: [
          `Nogle virksomheder bygger selv indretningen i træ og krydsfiner. Det kan tilpasses præcis til bilen og opgaverne, men det er ikke modulært og kan sjældent flyttes til næste bil.`,
          `På en leaset bil betyder det noget, hvordan indretningen er monteret. Huller i varerummets gulv og sider har betydning, når bilen afleveres, og derfor monteres nogle gulve og beklædninger med lim eller med bilens egne surringsøjer. Materialer, montering og aflevering står i <a href="/til-varebilen/indretning/selvbygget-indretning/">selvbygget indretning</a>.`
        ]
      },
      {
        overskrift: "Brugt indretning",
        tekst: [
          `Modulsystemer sælges også brugt, og et modul kan flyttes mellem biler med samme lastrumsmål. Se, hvad der skal passe, i <a href="/til-varebilen/indretning/brugt/">brugt indretning til varebil</a>, eller find en <a href="/brugte-varebiler/brugt-varebil-med-indretning/">brugt varebil med indretning</a>.`,
          `Når leasingaftalen udløber, og virksomheden får en ny bil, kan modulerne ofte flyttes med. Længden, bredden mellem hjulkasserne og højden skal passe, og leverandøren kan oplyse, hvilke modeller modulerne passer til.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 186" role="img" aria-label="To varerum set oppefra med de samme moduler. En pil viser, at modulerne flyttes fra den nuværende bil til den næste, når lastrumsmålene er de samme."><defs><marker id="pil-indretning-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="20" y="22">NUVÆRENDE BIL</text><text class="tg-lille" x="230" y="22">NÆSTE BIL</text><rect class="tg-rum" x="20" y="32" width="150" height="96"/><rect class="tg-hylde" x="78" y="32" width="34" height="8"/><rect class="tg-hylde" x="78" y="120" width="34" height="8"/><rect class="tg-modul" x="26" y="38" width="138" height="20"/><rect class="tg-modul" x="26" y="102" width="86" height="20"/><line class="tg-doer" x1="122" y1="128" x2="164" y2="128"/><rect class="tg-rum" x="230" y="32" width="150" height="96"/><rect class="tg-hylde" x="288" y="32" width="34" height="8"/><rect class="tg-hylde" x="288" y="120" width="34" height="8"/><rect class="tg-modul" x="236" y="38" width="138" height="20"/><rect class="tg-modul" x="236" y="102" width="86" height="20"/><line class="tg-doer" x1="332" y1="128" x2="374" y2="128"/><line class="tg-pil" x1="176" y1="80" x2="222" y2="80" marker-end="url(#pil-indretning-1)"/><text x="200" y="154" text-anchor="middle">Samme længde, bredde mellem hjulkasser og højde</text><text class="tg-fremhaev" x="200" y="174" text-anchor="middle">Så kan modulerne flyttes med til næste bil</text></svg>`,
          tekst: `Skematisk. Modulerne er bygget hen over hjulkasserne, og skydedøren sidder i højre side. Leverandøren kan oplyse, hvilke modeller modulerne passer til.`
        }
      },
      {
        overskrift: "Fra behov til færdig bil",
        grafik: "proces",
        tekst: [
          `Planlægningen begynder med det, der skal med på en almindelig dag: værktøj, maskiner, reservedele og materialer. Ud fra listen vælger du færdige moduler til modellen eller sætter en opstilling sammen i producentens konfigurator.`,
          `Tilbuddet skal vise pris, vægt og leveringstid på den konkrete opstilling, så du kan se, hvor meget nyttelast der er tilbage. Bestilles indretningen samtidig med bilen, kan den monteres, før bilen bliver leveret, og så er bilen klar til brug fra første dag.`,
          `Leverandøren skal kende bilens model, længde og årgang og vide, om bilen har skydedør i én eller begge sider. Punkterne står i listen herunder.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan du få en pris på den rigtige opstilling første gang.",
    spoergsmaal: [
      "Bilens model, længde og årgang, fx Transit Custom L1 fra 2024.",
      "Din branche, og hvad der skal med på en almindelig dag.",
      "Om bilen har skydedør i én eller begge sider.",
      "Om der skal være plads til lange emner som rør og profiler.",
      "Om der skal gulv og vægbeklædning med i tilbuddet.",
      "Om bilen er en elbil, og hvor meget nyttelast den har.",
      "Om indretningen skal kunne flyttes til næste bil.",
      "Hvornår bilen bliver leveret, så monteringen kan planlægges."
    ],
    faq: [
      ["Hvad koster indretning af en varebil?", "Færdige moduler til en mellemstor varebil koster {{ind_modul_pris}} kr. ekskl. moms pr. modul. En opstilling med et modul i hver side koster {{ind_op_pris}} kr. plus gulv og montering (Sortimos vejledende priser)."],
      ["Hvad vejer en varebilindretning?", "Hylder og kasser vejer {{ind_kgm_hylder}} kg pr. meter reol, moduler med tre skuffer {{ind_kgm_skuffer}} kg pr. meter. En opstilling med et modul i hver side vejer {{ind_op_vaegt}} kg."],
      ["Hvilken indretning passer til en tømrer?", "Typisk plads til maskinkufferter, åbne bakker til beslag og skruer, en fri midtergang til plader og et tagsystem til stiger og lægter."],
      ["Hvor bred er gangen mellem reolerne?", "I en Ford Transit Custom L1 med et modul på {{ind_dybde}} mm i hver side er der {{ind_gang}} mm fri gang."],
      ["Kan indretningen flyttes til en ny bil?", "Modulsystemer kan ofte flyttes, når den nye bil har samme lastrumsmål. Leverandøren kan oplyse, hvilke modeller modulerne passer til."],
      ["Kan indretningen lægges ind i leasingaftalen?", "Ofte ja. Så bliver den en del af månedsydelsen i stedet for en kontant udgift."],
      ["Følger gulvet med reolerne?", "Ikke hos Sortimo. Xpress-reolerne skal monteres på en Sortimo-vognbund, som købes for sig."],
      ["Må en specialindrettet varebil køre hjem?", "Ja, når der er et erhvervsmæssigt behov for indretningen, og bilen er nødvendig for arbejdet. Så regnes kørslen mellem hjem og arbejde for at ske i virksomhedens interesse. Reglen gælder biler på højst 4 tons tilladt totalvægt."]
    ],
    kilder: [
      { navn: "Sortimo: Xpress-moduler (priser, vægte og mål)", url: SORT, dato: "2026-10-02" },
      { navn: "Ford: specifikationer for Transit Custom", url: FORD, dato: "2026-09-23" },
      { navn: "BEK nr. 1655 af 05/12/2025, bilag 3 (kræfterne; bekendtgørelsen gælder vejsidesyn af køretøjer over 3,5 t)", url: BEK, dato: "2026-10-03" },
      { navn: "Modul-System: Gulv og vægbeklædning", url: MS, dato: "2026-10-07" },
      { navn: "Skatterådet: Bindende svar SKM2021.202.SR om kørsel i varevogne og mandskabsvogne", url: SKM, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Sortimo: Xpress-reolerne kræver en Sortimo-vognbund til montering, og vognbunden følger ikke med reolerne; efter købet kontakter en salgsrådgiver køberen for at drøfte monteringen.", SORT],
    ["Sortimo sælger Xpress-moduler til bl.a. E-Transit Custom (2023-), eCitan (2022-) og e-Vito (2019-) (bilmodelfiltret på siden).", SORT],
    ["Modul-System: gulve og beklædninger monteres med en stærkt klæbende lim, så der ikke bores i karrosseriet; det fjerner risikoen for korrosion og beskytter køretøjets restværdi.", MS],
    ["Skatterådet, SKM2021.202.SR (bindende svar, 2021), gengiver Skattestyrelsens opfattelse: kørsel mellem hjem og arbejde i specialindrettede vare- og lastmotorkøretøjer med tilladt totalvægt på ikke over 4 ton anses for foretaget i virksomhedens interesse, på betingelse af at der er et erhvervsmæssigt behov for den specielle indretning, og at bilen er nødvendig for, at brugeren kan udføre sit arbejde. Der er momsfradrag for leasing og drift.", SKM],
    ["SKM2021.202.SR: spørger leverer byggeydelser, og de ansatte kører mellem bopæl, overnatningssted nær byggepladsen og arbejdsstedet.", SKM]
  ]
};
