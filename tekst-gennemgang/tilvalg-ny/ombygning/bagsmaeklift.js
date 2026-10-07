// Underside /til-varebilen/ombygning/bagsmaeklift/ (07-10-2026)
var BEK428 = `https://www.retsinformation.dk/eli/lta/2022/428`;
var SYN = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var DETAIL = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var VAN = `https://www.bar-cargolift.dk/vanlift`;
var B750 = `https://www.bar-cargolift.dk/lift-750kg`;
var FALT = `https://www.bar-cargolift.dk/falt`;
var ZEPRO = `https://www.hiab.com/uk/product-finder/tail-lifts/zepro/zepro-zhz-500`;
var DHOL = `https://www.dhollandia.com/dk/da`;
var BFA = `https://bfaportalen.dk/sider/transport/tekniske-hjaelpemidler/lift-til-varevogn`;
var FYNSV = `https://fyns-varebilsudlejning.dk/varebil-med-lift/`;
var FYNSK = `https://fyns-karosseribyg.dk/tiplad/`;

module.exports = {
  id: "ombygning/bagsmaeklift",
  side: {
    slug: "bagsmaeklift",
    navn: "Bagsmæklift",
    titel: "Bagsmæklift på varebil: typer, vægt og eftersyn",
    kort: `Lift på kassevogn og ladbil: typer, løfteevne, egenvægt, lygter, syn og Arbejdstilsynets krav til hovedeftersyn.`,
    beskrivelse: `Bagsmæklift til kassevogn og ladbil: løfteevne fra 500 til 2.000 kg, egenvægt, montering, syn, lygter og hovedeftersyn hver 12. måned.`,
    manchet: `En bagsmæklift, også kaldet læssebagsmæk, tager paller, rullebure og tunge emner fra jorden op i varerummet. Liften findes til kassevogne med op til 600 kg løfteevne og til chassis med 750 kg og derover. Her kan du se typerne, hvad liften koster i nyttelast, og hvilke regler der gælder for syn, lygter og eftersyn.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Lift til kassevogn", "op til 600 kg", "løfteevne hos Bär VanLift og Zepro ZHZ 500"],
        ["Lift til chassis", "750 kg", "løfteevne på Bär BC 750 S2L"],
        ["Egenvægt", "160 kg", "Bär BC 750 S2L, går fra nyttelasten"],
        ["Hovedeftersyn", "mindst hver 12. måned", "af en sagkyndig person"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Det gør liften",
        tekst: [
          `En bagsmæklift løfter gods fra jorden op i højde med varerummets gulv. Paller, rullebure, tønder og tunge maskiner kan køres ind på pladen i stedet for at blive løftet med hænderne.`,
          `BFA-portalen, som Branchefællesskabet for Arbejdsmiljø for transport og service står bag, beskriver liften som et hjælpemiddel mod belastende løft, træk og skub. Den kan forebygge problemer i ryggen og overbelastning af skuldre, arme og ben. Fordi liften sidder fast på bilen, er den der altid, når den skal bruges.`,
          `Liften kan monteres på en kassevogn, en ladvogn eller en trailer. Ifølge BFA-portalen findes der også lifte til sidedøren eller siden af bilen, og pladen kan være af stål eller aluminium.`,
          `I køreposition står liftpladen lodret bag bilen. Ved læsning sænkes den til jorden, godset køres ind på pladen, og liften løfter det op i gulvhøjde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="Bagenden af en kassevogn med bagsmæklift set fra siden: liftpladen i køreposition, i gulvhøjde og nede ved jorden med et rullebur"><path d="M20,40 L270,40 L270,170 L20,170" fill="none" class="tg-profil"/><line x1="20" y1="150" x2="270" y2="150" class="tg-gulvlinje"/><circle cx="190" cy="195" r="20" class="tg-kasse"/><line x1="10" y1="215" x2="430" y2="215" class="tg-gulvlinje"/><rect x="258" y="150" width="20" height="28" class="tg-hylde"/><line x1="284" y1="60" x2="284" y2="168" class="tg-skinne-tynd"/><line x1="278" y1="150" x2="390" y2="150" class="tg-skinne-tynd"/><rect x="278" y="207" width="112" height="8" class="tg-modul"/><line x1="280" y1="178" x2="290" y2="207" class="tg-gulvlinje"/><rect x="306" y="160" width="50" height="47" class="tg-kasse"/><text x="331" y="188" text-anchor="middle">bur</text><text x="145" y="100" text-anchor="middle" class="tg-lille">VARERUM</text><g class="tg-call"><line x1="284" y1="80" x2="320" y2="40"/><circle cx="284" cy="80" r="3"/><text x="318" y="28" class="tg-call__navn">Køreposition</text><text x="318" y="43" class="tg-call__under">pladen lodret</text></g><g class="tg-call"><line x1="380" y1="150" x2="398" y2="110"/><circle cx="380" cy="150" r="3"/><text x="340" y="86" class="tg-call__navn">Gulvhøjde</text><text x="340" y="101" class="tg-call__under">lastes ind</text></g><g class="tg-call"><line x1="376" y1="211" x2="376" y2="231"/><circle cx="376" cy="211" r="3"/><text x="288" y="245" class="tg-call__navn">Liftplade ved jorden</text></g></svg>`,
          tekst: `Skematisk. Tegningen viser pladen i køreposition, i gulvhøjde og ved jorden. På VanLift FreeAccess er pladen foldet i køreposition, så højre bagdør kan åbnes uden at folde liften ud.`
        },
        efter: [
          `Kilde: <a href="${BFA}" rel="noopener">BFA-portalen: Lift til varevogn</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Typer af bagsmæklift",
        tekst: [
          `Typerne adskiller sig ved, hvor pladen er, når bilen kører, og hvor meget de kan løfte. Det afgør, om bagdørene kan bruges uden at folde liften ud, og om bilen kan læsse ved en rampe.`
        ],
        punkter: [
          `<strong>Kassevognslift.</strong> Den er bygget til de store kassevogne. Bär VanLift og Zepro ZHZ 500 løfter op til 600 kg.`,
          `<strong>Foldbar plade (FreeAccess).</strong> Pladen står lodret foldet bag bilen, så højre bagdør kan bruges uden at folde liften ud. Bär sælger den til kassevogne og chassis.`,
          `<strong>Standardlift.</strong> Liftpladen står bag vognen i køreposition. Den findes til både kassevogn og chassis.`,
          `<strong>Underkøringslift.</strong> Liften forsvinder ind under bilen i køreposition, så der kan læsses ved rampe. Bärs Falt-serie findes fra BC 1000 til BC 2000.`,
          `<strong>Søjlelift.</strong> Dhollandia fremstiller søjlelifte med op til 6 m løftehøjde.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Tre varebiler set fra siden med liftpladen i køreposition: standardlift med pladen lodret bag bilen, foldbar plade foldet sammen lavt bag bilen og underkøringslift med pladen under bilen."><path class="tg-rum" d="M5,40 L95,40 L95,130 L5,130"/><line class="tg-gulvlinje" x1="5" y1="115" x2="95" y2="115"/><circle class="tg-kasse" cx="50" cy="140" r="14"/><text class="tg-fremhaev" x="5" y="176">Standardlift</text><text x="5" y="192">pladen bag bilen</text><path class="tg-rum" d="M140,40 L230,40 L230,130 L140,130"/><line class="tg-gulvlinje" x1="140" y1="115" x2="230" y2="115"/><circle class="tg-kasse" cx="185" cy="140" r="14"/><text class="tg-fremhaev" x="140" y="176">Foldbar plade</text><text x="140" y="192">højre bagdør fri</text><path class="tg-rum" d="M275,40 L365,40 L365,130 L275,130"/><line class="tg-gulvlinje" x1="275" y1="115" x2="365" y2="115"/><circle class="tg-kasse" cx="320" cy="140" r="14"/><text class="tg-fremhaev" x="275" y="176">Underkøringslift</text><text x="275" y="192">under bilen</text><line class="tg-gulvlinje" x1="0" y1="154" x2="400" y2="154"/><rect class="tg-modul" x="98" y="60" width="6" height="70"/><rect class="tg-modul" x="233" y="95" width="6" height="35"/><rect class="tg-modul" x="239" y="95" width="6" height="35"/><rect class="tg-modul" x="340" y="132" width="26" height="6"/></svg>`,
          tekst: `Skematisk. Tegningen viser, hvor liftpladen sidder i køreposition på tre af typerne.`
        }
      },
      {
        overskrift: "Underkøringslift og hældning",
        tekst: [
          `En underkøringslift passer til biler, der ofte læsser ved en rampe. I køreposition ligger den foldet sammen under bilen, så bagdørene kan åbnes helt. Når liften skal bruges, trykker man på knappen for at sænke den og folder pladen ud med håndkraft. En fjeder gør foldningen lettere, skriver Bär.`,
          `Bär sælger Falt i to udgaver. F2 har to løftecylindre. F4 har desuden to tiltcylindre, der kan udligne hældningen i alle højder, og Bär anbefaler den til biler, der ofte læsser og losser på skrånende underlag.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="To underkøringslifte set fra siden. F2 har to løftecylindre. F4 har desuden to tiltcylindre, så pladens hældning kan udlignes i alle højder."><path class="tg-rum" d="M10,40 L84,40 L84,150 L10,150"/><line class="tg-gulvlinje" x1="10" y1="132" x2="84" y2="132"/><circle class="tg-kasse" cx="44" cy="166" r="16"/><rect class="tg-hylde" x="76" y="150" width="14" height="10"/><line class="tg-skillevaeg" x1="90" y1="154" x2="112" y2="177"/><line class="tg-doer" x1="78" y1="160" x2="102" y2="178"/><rect class="tg-modul" x="102" y="176" width="80" height="6"/><g class="tg-call"><line x1="90" y1="169" x2="118" y2="96"/><circle cx="90" cy="169" r="3"/><text class="tg-call__navn" x="98" y="74">Løftecylindre</text><text class="tg-call__under" x="98" y="88">løfter pladen</text></g><text class="tg-fremhaev" x="10" y="208">F2</text><text x="10" y="224">to løftecylindre</text><path class="tg-rum" d="M210,40 L284,40 L284,150 L210,150"/><line class="tg-gulvlinje" x1="210" y1="132" x2="284" y2="132"/><circle class="tg-kasse" cx="244" cy="166" r="16"/><rect class="tg-hylde" x="276" y="150" width="14" height="10"/><line class="tg-skillevaeg" x1="290" y1="156" x2="304" y2="153"/><line class="tg-doer" x1="280" y1="160" x2="303" y2="156"/><line class="tg-doer" x1="292" y1="146" x2="312" y2="151"/><polygon class="tg-modul" points="304,150 382,160 381,166 303,156"/><line class="tg-skinne-tynd" x1="304" y1="150" x2="390" y2="150"/><g class="tg-call"><line x1="306" y1="149" x2="340" y2="96"/><circle cx="306" cy="149" r="3"/><text class="tg-call__navn" x="395" y="74" text-anchor="end">Tiltcylindre</text><text class="tg-call__under" x="395" y="88" text-anchor="end">udligner hældningen</text></g><text class="tg-fremhaev" x="210" y="208">F4</text><text x="210" y="224">løfte- og tiltcylindre</text><line class="tg-gulvlinje" x1="0" y1="182" x2="400" y2="182"/></svg>`,
          tekst: `Skematisk. Underkøringslifte i Bärs Falt-serie med og uden tiltcylindre. Den stiplede linje viser vandret. Kilde: <a href="${FALT}" rel="noopener">Bär Cargolift: Falt</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Løfteevne og egenvægt",
        tekst: [
          `Løfteevnen er den største vægt, liften må løfte ad gangen. Bilens nyttelast er en anden grænse, og den gælder alt det gods, der er i bilen.`,
          `Producenterne oplyser sjældent egenvægten på lifte til kassevogne. Bär skriver, at VanLift har en lav egenvægt, men oplyser ikke tallet på siden. Til chassis oplyser Bär 160 kg for BC 750 S2L, og Dhollandia skriver, at en standardlift med 1.450 mm plade vejer lidt over 160 kg.`,
          `Zepro ZHZ 500-85 løfter 500 kg og har en liftplade af aluminium og en løftehøjde på 850 mm, ifølge Hiab, der sælger Zepro-liftene.`
        ],
        tabel: {
          kolonner: ["Model", "Til", "Løfteevne"],
          raekker: [
            ["Bär VanLift BC 600 S2V og A2V", "Kassevogn", "600 kg (500 kg på nogle mærker)"],
            ["Zepro ZHZ 500", "Kassevogn", "op til 600 kg"],
            ["Bär BC 750 S2L", "Chassis 3,5–7,5 t", "750 kg"],
            ["Bär Falt BC 1000–2000", "Underkøringslift", "1.000–2.000 kg"]
          ],
          note: `Kilder: <a href="${VAN}" rel="noopener">Bär VanLift</a>, <a href="${B750}" rel="noopener">Bär 750 kg</a>, <a href="${FALT}" rel="noopener">Bär Falt</a> og <a href="${ZEPRO}" rel="noopener">Hiab/Zepro</a>, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Zepro ZHZ 500-85", 500, "kassevogn"],
            ["Bär VanLift", 600, "kassevogn"],
            ["Bär BC 750 S2L", 750, "chassis"],
            ["Bär Falt BC 1000", 1000, "underkøringslift"],
            ["Bär Falt BC 2000", 2000, "underkøringslift"]
          ],
          note: `Største løfteevne ifølge producenterne. VanLift løfter 500 kg på nogle bilmærker, og Zepro ZHZ 500 findes med op til 600 kg. Kilder: <a href="${VAN}" rel="noopener">Bär VanLift</a>, <a href="${B750}" rel="noopener">Bär 750 kg</a> og <a href="${FALT}" rel="noopener">Bär Falt</a>, set den 4. oktober 2026, og <a href="${ZEPRO}" rel="noopener">Hiab: Zepro ZHZ 500</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Zepro ZHZ 500 har en liftplade på op til 1.700 × 1.400 mm og fås i tre rammebredder, så den passer til de store kassevogne. Bär oplyser, at løfteevnen på VanLift afhænger af bilfabrikantens monteringsvejledning.`
        ]
      },
      {
        overskrift: "Til hvilke varebiler",
        tekst: [
          `Bär oplyser, at VanLift kan monteres uden chassistilpasning og uden begrænsninger for kørsel med trailer. Liften har et slankt grundmodul, som tilpasses den enkelte bil med en monteringsadapter. Valget af bilmærke kan ændre de tekniske muligheder, fx løfteevnen. VanLift findes til disse biler:`
        ],
        punkter: [
          `Mercedes-Benz Sprinter og eSprinter, Volkswagen Crafter og MAN TGE.`,
          `Iveco Daily og eDaily, Ford Transit og eTransit.`,
          `Renault Master, Opel Movano og Nissan Interstar, også i elversioner.`,
          `Fiat Ducato, Citroën Jumper og Peugeot Boxer, også i elversioner.`,
          `Maxus eDeliver 9 og Toyota Proace Max.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Lifte til chassis passer til flere biler, fordi chassiset har en ramme, liften kan bygges på. Bär skriver, at varebiler op til 7,5 tons totalvægt har mange forskellige chassis, og at de normalt har lifte med en lasteevne på 750 kg.`
        ]
      },
      {
        overskrift: "Liften tager af nyttelasten",
        tekst: [
          `Liftens vægt lægges til bilens egenvægt, og totalvægten er uændret. En lift på 160 kg på en bil med 1.000 kg i lasteevne efterlader 840 kg. Regnestykket for en 3.500 kg-bil står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `De 160 kg er liften selv. De fleste opbygninger kræver en monteringsadapter, og Bär skriver, at den er af letvægtsaluminium, men øger liftens vægt. En kobling til anhængertræk på liften vejer mellem 14 og 45 kg mere.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="To bjælker: uden lift er der 1.000 kg lasteevne. Med en lift på 160 kg er der 840 kg tilbage, og totalvægten er den samme."><text class="tg-fremhaev" x="0" y="16">Uden lift</text><rect class="tg-profil" x="0" y="24" width="380" height="28"/><text x="10" y="42">1.000 kg lasteevne</text><text class="tg-fremhaev" x="0" y="84">Med lift</text><rect class="tg-modul" x="0" y="92" width="61" height="28"/><text class="tg-modul__tekst" x="8" y="110">LIFT</text><rect class="tg-kasse" x="61" y="92" width="319" height="28"/><text x="71" y="110">840 kg tilbage</text><text x="0" y="138">160 kg</text><line class="tg-skinne-tynd" x1="380" y1="16" x2="380" y2="128"/><text class="tg-lille" x="0" y="168">TOTALVÆGTEN ER UÆNDRET</text></svg>`,
          tekst: `Skematisk. Regneeksemplet fra teksten, hvor en lift på 160 kg tager af en lasteevne på 1.000 kg.`
        },
        efter: [
          `Kilde: <a href="${B750}" rel="noopener">Bär Cargolift: Standard og FreeAccess 750 kg</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Montering efter bilfabrikantens anvisninger",
        tekst: [
          `Detailforskrifterne for køretøjer kræver, at en læssebagsmæk monteres efter bilfabrikantens anvisninger. Har bilen en chassisramme af stål, kan en prøvningsinstans i stedet dokumentere, at spændingerne i rammen ikke overstiger 150 newton pr. kvadratmillimeter, når liften bruges.`,
          `Derfor har liftproducenterne papirer til hver bil. Bär har et målark med de mål, der skal bruges for at tjekke, om liften kan monteres, og desuden monteringsmanualer og certifikater for underkøringsbeskyttelse, anhængertræk og lastsikring. Produktfinderen MyCargolift foreslår en lift ud fra fem oplysninger om bilen og opgaven.`,
          `Lifte sælges og monteres af liftforhandlere og karrosseriopbyggere, fx Fyns Karosseribyg, der fører Bär Cargolift og Zepro.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Mål bilen", "Målarket viser de mål på bilen, der afgør, om liften kan monteres."],
            ["Vælg liften", "Løfteevne, plade og betjening vælges efter godset og bilen."],
            ["Montering", "Liften monteres efter bilfabrikantens anvisninger, ofte med en adapter."],
            ["Registreringssyn", "Ændres egenvægten med mere end 50 kg, skal bilen synes, før den bruges."],
            ["Hovedeftersyn", "En sagkyndig efterser liften mindst hver 12. måned."]
          ]
        },
        efter: [
          `Kilder: <a href="${DETAIL}" rel="noopener">Bekendtgørelse om detailforskrifter for køretøjer (BEK nr. 1484 af 03/12/2025), bilag 2, pkt. 2.8.2.4</a>, <a href="${VAN}" rel="noopener">Bär VanLift</a> og <a href="${B750}" rel="noopener">Bär 750 kg</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Registreringssyn efter montering",
        tekst: [
          `Ændres egenvægten med mere end 50 kg, skal bilen godkendes ved et registreringssyn, før den tages i brug igen. Det gælder næsten alle lifte. Forløbet står i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`,
          `En ændring på 50 kg eller derunder kræver kun syn, hvis du vil have den nye vægt registreret i Køretøjsregisteret. Ændrer ombygningen bilens tilladte vægte eller andre registrerede tekniske data, skal bilen også synes.`,
          `Synet godkender bilen med liften monteret. Selve liften er omfattet af Arbejdstilsynets regler og skal have sit eget eftersyn, uanset at bilen synes.`
        ],
        efter: [
          `Kilde: <a href="${SYN}" rel="noopener">Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), § 5</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Lygter, bredde og længde",
        tekst: [
          `En læssebagsmæk må have to særlige afmærkningslygter, der blinker, når pladen står i arbejdsstilling. Detailforskrifterne kræver gult lys med 100–240 blink pr. minut, og lygterne skal sidde højst 0,40 m fra mækkens yderste hjørner. De skal pege bagud i arbejdsstilling og må ikke kunne tændes, når mækken er klappet op.`,
          `Bär kalder sit blinklys CargoFlash. Det er standard på VanLift, hvor det sidder forsænket i pladen.`,
          `Liften tæller ikke med i bilens bredde, når den er klappet sammen og højst rager 10 mm ud fra siderne. I længden ser man bort fra en læssebagsmæk i køreklar stand, når den højst rager 0,30 m ud og ikke giver bilen mere plads til last.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 250" role="img" aria-label="Varebil set ovenfra med liftpladen i arbejdsstilling bag bilen. Ved pladens to yderste hjørner sidder en afmærkningslygte højst 0,40 m fra hjørnet."><defs><marker id="pil-bagsmaeklift-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-hylde" x="70" y="32" width="30" height="8"/><rect class="tg-hylde" x="170" y="32" width="30" height="8"/><rect class="tg-hylde" x="70" y="190" width="30" height="8"/><rect class="tg-hylde" x="170" y="190" width="30" height="8"/><rect class="tg-rum" x="20" y="40" width="200" height="150"/><line class="tg-skillevaeg" x1="62" y1="40" x2="62" y2="190"/><text class="tg-lille" x="140" y="119" text-anchor="middle">VARERUM</text><rect class="tg-modul" x="222" y="52" width="110" height="126"/><text class="tg-modul__tekst" x="277" y="119" text-anchor="middle">LIFTPLADE</text><rect class="tg-kuffert" x="318" y="56" width="10" height="16"/><rect class="tg-kuffert" x="318" y="158" width="10" height="16"/><line class="tg-skinne-tynd" x1="332" y1="52" x2="352" y2="52"/><g class="tg-maal"><line x1="346" y1="52" x2="346" y2="72" marker-start="url(#pil-bagsmaeklift-1)" marker-end="url(#pil-bagsmaeklift-1)"/><text x="354" y="66">højst 0,40 m</text></g><g class="tg-call"><line x1="323" y1="166" x2="300" y2="212"/><circle cx="323" cy="166" r="3"/><text class="tg-call__navn" x="190" y="226">Afmærkningslygte</text><text class="tg-call__under" x="190" y="240">100–240 blink pr. minut</text></g></svg>`,
          tekst: `Skematisk. Placeringen af de særlige afmærkningslygter på en læssebagsmæk. Kilde: <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 1, pkt. 6.09.002</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 1, pkt. 3.02.001 og 6.09.002</a> og <a href="${VAN}" rel="noopener">Bär VanLift</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Afskærmning mod underkøring",
        tekst: [
          `En varebil skal have en afskærmning bagtil mod underkøring, medmindre frihøjden under bagenden højst er 0,55 m. Afskærmningen skal sidde højst 0,40 m fra bilens bageste punkt og være mindst 0,10 m høj.`,
          `På en bil med læssebagsmæk må afskærmningen bestå af flere sektioner. Afstanden mellem afskærmningen og liftens dele må højst være 2,5 cm, og hver sektion skal have et virksomt areal på mindst 350 cm². Bär lægger certifikater for underkøringsbeskyttelse ud til sine lifte.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Frihøjde uden afskærmning, højst", "0,55", "m"],
            ["Fra bilens bageste punkt, højst", "0,40", "m"],
            ["Afstand til liftens dele, højst", "2,5", "cm"],
            ["Hver sektions areal, mindst", "350", "cm²"]
          ],
          note: `Kilde: <a href="${DETAIL}" rel="noopener">BEK nr. 1484 af 03/12/2025, bilag 1, pkt. 9.08.001 og 9.08.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Arbejdstilsynets regler",
        tekst: [
          `Kravene står i Arbejdstilsynets bekendtgørelse om anvendelse af tekniske hjælpemidler. Selve den indregistrerede bil er undtaget fra hovedeftersynet, fordi den synes, men mekanisk drevet udstyr, der er monteret på bilen, er omfattet, jf. § 40, stk. 3.`,
          `Reglerne gælder også for arbejde, der ikke udføres for en arbejdsgiver, bortset fra enkelte paragraffer (§ 3, stk. 2). Pligterne ligger efter § 2 hos arbejdsgivere, arbejdsledere, ansatte og brugere, men også hos fabrikanter, leverandører, reparatører og udlejere.`
        ],
        punkter: [
          `<strong>Hovedeftersyn.</strong> Det skal laves mindst hver 12. måned af en sagkyndig person (§§ 40 og 58).`,
          `<strong>Efter oplægning.</strong> Har liften været lagt op, skal den have hovedeftersyn, før den bruges igen (§ 40, stk. 2).`,
          `<strong>Særligt eftersyn.</strong> Efter ændringer, uheld eller længere tids stilstand skal en sagkyndig efterse liften, før den bruges igen (§ 26).`,
          `<strong>Dokumentation.</strong> Resultaterne af eftersyn registreres og opbevares. Bruges liften på skiftende arbejdssteder, skal dokumentation for det seneste eftersyn være let tilgængelig (§ 27).`,
          `<strong>Vedligeholdelse.</strong> Vedligeholdelse og reparation udføres af en sagkyndig person (§ 28).`,
          `<strong>Skilte.</strong> Skilte og mærkning med data, betjening og risici holdes synlige og tydelige (§ 28, stk. 2).`
        ],
        efter: [
          `Journalkravet i § 72 gælder mekanisk drevne hjælpemidler til løft af frithængende byrder, fx når de bruges på skiftende opstillingssteder.`
        ]
      },
      {
        overskrift: "Hvad hovedeftersynet omfatter",
        tekst: [
          `Et hovedeftersyn er et eftersyn, hvor liften også afprøves og om nødvendigt skilles ad. Det laves efter fabrikantens anvisninger, men skal efter § 58 altid omfatte mekaniske dele, herunder sliddele og bærende dele, og sikkerhedsudstyret med overlast- og stabilitetssikringen.`,
          `Hertil kommer betjeningsanordninger, energitilførsel og de hydrauliske, pneumatiske og elektriske komponenter. Resultatet skal registreres, så det kan vises frem for Arbejdstilsynet.`
        ],
        tabel: {
          kolonner: ["Kontrol", "Hvem", "Hvornår"],
          raekker: [
            ["Hovedeftersyn", "Sagkyndig person", "Mindst hver 12. måned"],
            ["Hovedeftersyn efter oplægning", "Sagkyndig person", "Før liften bruges igen"],
            ["Særligt eftersyn", "Sagkyndig person", "Efter ændringer, uheld eller længere stilstand"],
            ["Vedligeholdelse og reparation", "Sagkyndig person", "Løbende"]
          ],
          note: `Kilde: <a href="${BEK428}" rel="noopener">Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022)</a>, §§ 26, 28, 40 og 58, set den 4. oktober 2026.`,
          visning: "skjul"
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["Før liften tages i brug", "Bilen godkendes ved et registreringssyn, når egenvægten ændres med mere end 50 kg."],
            ["Mindst hver 12. måned", "En sagkyndig person laver hovedeftersyn af liften."],
            ["Efter ændring, uheld eller lang stilstand", "Liften skal have et særligt eftersyn, før den bruges igen."],
            ["Efter oplægning", "Liften skal have hovedeftersyn, før den tages i brug igen."],
            ["Løbende", "En sagkyndig person står for vedligeholdelse og reparation."]
          ],
          note: `Kilder: <a href="${BEK428}" rel="noopener">BEK nr. 428 af 05/04/2022, §§ 26, 28, 40 og 58</a> og <a href="${SYN}" rel="noopener">BEK nr. 1685 af 16/12/2025, § 5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Den sagkyndige person",
        tekst: [
          `En sagkyndig person er efter bekendtgørelsen en person med det faglige kendskab og eventuelle uddannelse, der skal til for at udføre eftersynet. Til hovedeftersyn af udstyr, der løfter byrder, nævner § 58 seks ting, personen især skal have.`
        ],
        punkter: [
          `Kendskab til liftens tekniske opbygning og funktion.`,
          `Den nødvendige oplæring i eftersyn, service og vedligeholdelse af liften.`,
          `Kendskab til liftens brugsanvisning.`,
          `Kendskab til Arbejdstilsynets sikkerhedskrav, især om eftersyn, prøvebelastning og journal.`,
          `Kendskab til andre myndigheders eventuelle krav til liften.`,
          `Kendskab til eventuelle krav om autorisation eller certificering til særlige opgaver.`
        ],
        punkt_ikon: "ja",
        efter: [
          `Bär har en søgning efter servicepartnere og en kontrakt om garanti, vedligeholdelse og reparation, som hedder CargoRate. Kilde: <a href="${BEK428}" rel="noopener">BEK nr. 428 af 05/04/2022, §§ 4 og 58</a> og <a href="${VAN}" rel="noopener">Bär VanLift</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ved køb af lift",
        tekst: [
          `BFA-portalen nævner som forudsætninger for en lift til varevogn, at kørepladen har skridsikker overflade, og at brugerne er over 18 år. Portalen har også en liste med spørgsmål, virksomheden kan stille, før den køber.`,
          `Bär har et online beregningsprogram og en online brugervejledning, der slås op med liftens serienummer.`
        ],
        punkter: [
          `Hvilken vægt og løftehøjde liften skal klare.`,
          `Om pladen skal være af stål eller aluminium.`,
          `Hvordan klemning, nedstyrtning og fald fra pladen undgås.`,
          `Om liften er CE-mærket, og om der følger overensstemmelseserklæring og dansk brugsanvisning med.`,
          `Om arbejdet skal tilrettelægges på en ny måde, og hvem der skal have instruktion og oplæring.`
        ],
        efter: [
          `Kilde: <a href="${BFA}" rel="noopener">BFA-portalen: Lift til varevogn</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Udstyr og betjening hos Bär",
        tekst: [
          `Bärs tre serier betjenes forskelligt. VanLift har som standard radiofjernbetjeningen SmartControl Basic, så der ikke skal monteres kontakter i karrosseriet. BC 750 har en betjeningsboks som standard, og Falt har betjeningsenheden Control EVO med joysticks, der kan bruges med handsker.`,
          `SmartControl Basic har tre knapper og nærdistancedetektion. På BC 750 har den også funktionen AutoStop45°, når pladen lukkes.`,
          `Alle Bär-lifte har datainterfacet CargoConnect. Når softwaren er slået til, og styringen er koblet til bilens telematik, kan virksomheden bruge data fra liften.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Udstyr", "VanLift", "BC 750", "Falt"],
          raekker: [
            ["Radiofjernbetjening SmartControl Basic", "standard", "tilbydes", "tilbydes"],
            ["Skridsikker plade med TracGrip", "ja", "ja", "ja"],
            ["Støjdæmpende belægning SilentGrip", "ikke nævnt", "tilvalg", "tilvalg"],
            ["Containerstop til to rullebure", "2ad, standard", "2ad, standard på A2L", "2rd eller 2ad"],
            ["Datainterface CargoConnect", "ja", "ja", "ja"],
            ["Kobling til anhængertræk", "tilvalg, ca. 24 kg", "tilvalg, ca. 14–45 kg", "ikke nævnt"]
          ],
          note: `Containerstop 2ad tager hjul med en diameter på op til 200 mm og 2rd op til 110 mm. Kilder: <a href="${VAN}" rel="noopener">Bär VanLift</a>, <a href="${B750}" rel="noopener">Bär 750 kg</a> og <a href="${FALT}" rel="noopener">Bär Falt</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "VanLift: plade og udstyr",
        tekst: [
          `VanLift findes med den foldbare FreeAccess-plade og med en standardplade i fuld bredde. Motorenheden sidder beskyttet inde i liften og kan foldes ned, når den skal serviceres.`,
          `Til biler med isoleret gulv fås VanBridge som ekstraudstyr, der kan bygges ind i gulvet. Bär nævner køleopbygninger som eksempel, og dem kan du læse om i <a href="/til-varebilen/ombygning/koelebil/">kølebil</a>.`
        ],
        punkter: [
          `<strong>Kapacitet.</strong> VanLift FreeAccess tager mindst én palle med palleløfter eller fire rullebure, oplyser Bär.`,
          `<strong>Liftplade.</strong> Pladen er af aluminium med TracGrip-skridsikring og har en formonteret nummerpladeholder med lys.`,
          `<strong>Containerstop.</strong> Todelt afrulningssikring til to rullecontainere og CargoFlash-blinklys er standard.`,
          `<strong>Betjening.</strong> Radiofjernbetjeningen SmartControl Basic er standard. En kabelfjernbetjening til nødbetjening fås som ekstraudstyr.`,
          `<strong>Overgang.</strong> VanBridge i to dele lukker spalten mellem liftplade og gulv og kan låses lodret i lastrummet under kørsel.`,
          `<strong>Vejledning.</strong> HowToCargoLift viser betjeningsvejledningen for den enkelte lift ud fra serienummeret, på 11 sprog.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Bagenden af en kassevogn set fra siden med VanLift-pladen i gulvhøjde: VanBridge over spalten ved gulvet, containerstop for enden af pladen og nummerpladeholder under pladen."><path class="tg-rum" d="M10,30 L150,30 L150,150 L10,150"/><line class="tg-gulvlinje" x1="10" y1="130" x2="150" y2="130"/><circle class="tg-kasse" cx="90" cy="160" r="16"/><line class="tg-gulvlinje" x1="0" y1="176" x2="400" y2="176"/><text class="tg-lille" x="50" y="90">VARERUM</text><line class="tg-gulvlinje" x1="150" y1="150" x2="166" y2="134"/><rect class="tg-modul" x="156" y="128" width="120" height="6"/><rect class="tg-kuffert" x="146" y="125" width="14" height="5"/><rect class="tg-hylde" x="268" y="116" width="6" height="12"/><rect class="tg-profil" x="196" y="136" width="30" height="10"/><g class="tg-call"><line x1="153" y1="125" x2="170" y2="58"/><circle cx="153" cy="125" r="3"/><text class="tg-call__navn" x="160" y="40">VanBridge</text><text class="tg-call__under" x="160" y="54">lukker spalten</text></g><g class="tg-call"><line x1="271" y1="118" x2="300" y2="98"/><circle cx="271" cy="118" r="3"/><text class="tg-call__navn" x="290" y="80">Containerstop</text><text class="tg-call__under" x="290" y="94">todelt</text></g><g class="tg-call"><line x1="250" y1="131" x2="288" y2="146"/><circle cx="250" cy="131" r="3"/><text class="tg-call__navn" x="290" y="150">Liftplade</text><text class="tg-call__under" x="290" y="164">alu med TracGrip</text></g><g class="tg-call"><line x1="211" y1="146" x2="230" y2="184"/><circle cx="211" cy="146" r="3"/><text class="tg-call__navn" x="200" y="196">Nummerpladeholder</text><text class="tg-call__under" x="200" y="210">med lys</text></g></svg>`,
          tekst: `Skematisk. VanLift FreeAccess i gulvhøjde med noget af det udstyr, Bär beskriver. Kilde: <a href="${VAN}" rel="noopener">Bär VanLift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lift og anhængertræk",
        tekst: [
          `Når VanLift er monteret, kan bilens egen kobling ikke bruges. Bär sælger koblinger, der sidder på liften, og bilen skal have elektrisk formontering til anhængeren. Du kan læse mere om træk i <a href="/til-varebilen/traek-og-tagudstyr/">træk og tagudstyr</a>.`,
          `D-værdien er et mål for den kraft, koblingen er godkendt til mellem bil og anhænger. Koblingerne til BC 750 har europæisk delgodkendelse (Teile-ABE). BC 750 S4 har en fast underkøringskofanger og fire cylindre, og Bär nævner den som en fordel, når kuglehovedkoblingen bruges ofte.`
        ],
        tabel: {
          kolonner: ["Lift", "Kobling (ekstraudstyr)", "D-værdi", "Vægt"],
          raekker: [
            ["Bär VanLift", "Aftagelig kuglehovedkobling", "21 kN", "ca. 24 kg"],
            ["Bär BC 750 S2L, S2S og A2L", "Beslag til kuglehovedkobling, maks. 200 kg trækbelastning", "19,9 kN", "ca. 45 kg"],
            ["Bär BC 750 S4", "Højdejusterbar kuglehovedkobling, maks. 185 kg trækbelastning", "23,5 kN", "ca. 14 kg"]
          ],
          note: `Kilder: <a href="${VAN}" rel="noopener">Bär VanLift</a> og <a href="${B750}" rel="noopener">Bär Standard og FreeAccess 750 kg</a>, set den 4. oktober 2026. Bilen skal have elektrisk formontering. Koblingskuglen til BC 750 fås som ekstraudstyr.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Lift på en leaset varebil",
        tekst: [
          `Leasingaftalen afgør, om der må monteres lift, og om liften følger bilen ved aflevering. Ayvens fakturerer 1.500 kr. for manglende afmontering af ekstra udstyr og 2.500 kr. plus udbedring for ulovlige konstruktionsændringer, ifølge gebyrlisten fra juni 2025.`,
          `Skal liften blive siddende, når bilen afleveres, er det derfor en aftale med leasingselskabet. Tilbageleveringen står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ekstra udstyr, der ikke er afmonteret", "1.500", "kr."],
            ["Ulovlige konstruktionsændringer", "2.500", "kr. plus udbedring"]
          ],
          note: `Ayvens' gebyrer ifølge gebyrlisten fra juni 2025. Beløbene er uden moms.`
        }
      },
      {
        overskrift: "Pris og leje",
        tekst: [
          `Bär, Zepro og Dhollandia oplyser ikke priser på deres sider, og liften prissættes efter bil, plade og udstyr. Prisen afhænger derfor af de valg, der står i afsnittene ovenfor.`,
          `Skal der kun bruges lift en gang imellem, kan en varebil med lift lejes. Fyns Varebilsudlejning i Odense udlejer kassevogne med lift fra 750 kr. pr. dag inkl. forsikring og også for en uge eller en måned. Udlejeren oplyser ikke, om prisen er med moms.`
        ],
        efter: [
          `Kilder: <a href="${FYNSV}" rel="noopener">Fyns Varebilsudlejning</a>, udlejerens fra-pris, set den 4. oktober 2026, og <a href="${FYNSK}" rel="noopener">Fyns Karosseribyg</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal liftleverandøren vide",
    spoergsmaal_manchet: "Så kan leverandøren vælge lift og plade, der passer til bil og gods.",
    spoergsmaal: [
      "Bilens mærke, model, årgang og om det er kassevogn eller chassis.",
      "Hvad der skal løftes: paller med palleløfter, rullebure eller enkelte emner, og den tungeste last.",
      "Om bagdørene skal kunne bruges uden at folde liften ud.",
      "Om bilen kører med trailer, læsser ved rampe eller ofte læsser på skrånende underlag.",
      "Bilens nyttelast i dag, og hvor meget der skal være tilbage.",
      "Om pladen skal have blinkende afmærkningslygter og radiofjernbetjening.",
      "Hvem der står for registreringssynet og det årlige hovedeftersyn."
    ],
    faq: [
      ["Hvor meget vejer en bagsmæklift?", "Bär oplyser 160 kg for sin 750 kg-lift til chassis, og Dhollandia lidt over 160 kg for en standardlift med 1.450 mm plade. Monteringsadapteren kommer oveni, og vægten går fra nyttelasten."],
      ["Hvor meget kan en lift på en kassevogn løfte?", "Bär VanLift løfter 600 kg, på nogle mærker 500 kg. Zepro ZHZ 500 løfter op til 600 kg."],
      ["Skal en bagsmæklift synes?", "Ja, hvis den ændrer bilens egenvægt med mere end 50 kg. Så skal bilen godkendes ved et registreringssyn, før den tages i brug igen."],
      ["Hvor ofte skal en bagsmæklift efterses?", "Hovedeftersyn skal laves mindst hver 12. måned af en sagkyndig person. Efter ændringer, uheld eller længere stilstand skal liften have et særligt eftersyn. Det står i bekendtgørelsen om anvendelse af tekniske hjælpemidler."],
      ["Skal der føres journal over en bagsmæklift?", "Journalkravet gælder mekanisk drevne hjælpemidler til løft af frithængende byrder. Resultaterne af eftersyn skal dog registreres og opbevares, og på skiftende arbejdssteder være let tilgængelige."],
      ["Må en bagsmæklift have blinklys?", "Ja. Den må have to særlige afmærkningslygter med gult lys og 100–240 blink pr. minut. De skal sidde højst 0,40 m fra mækkens yderste hjørner og må ikke kunne tændes, når mækken er klappet op."],
      ["Hvad koster det at leje en varebil med lift?", "Fyns Varebilsudlejning oplyser fra 750 kr. pr. dag inkl. forsikring (oktober 2026). Momsen er ikke angivet."],
      ["Kan en varebil med lift have anhængertræk?", "Ja, med en kobling på liften. Bär VanLift fås med aftagelig kuglehovedkobling, D-værdi 21 kN og ca. 24 kg. Bilens egen kobling kan ikke bruges."],
      ["Hvor mange rullebure kan en VanLift tage?", "Bär oplyser, at VanLift FreeAccess kan tage mindst én palle med palleløfter eller fire rullebure."],
      ["Tæller liften med i bilens længde?", "Ikke når den er i køreklar stand, højst rager 0,30 m ud og ikke giver bilen mere plads til last. Det står i detailforskrifterne for køretøjer."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om anvendelse af tekniske hjælpemidler (BEK nr. 428 af 05/04/2022)", url: BEK428, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer (BEK nr. 1685 af 16/12/2025), § 5", url: SYN, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DETAIL, dato: "2026-10-07" },
      { navn: "BFA-portalen: Lift til varevogn", url: BFA, dato: "2026-10-07" },
      { navn: "Bär Cargolift: VanLift", url: VAN, dato: "2026-10-07" },
      { navn: "Bär Cargolift: Standard / FreeAccess 750 kg", url: B750, dato: "2026-10-07" },
      { navn: "Bär Cargolift: Falt", url: FALT, dato: "2026-10-07" },
      { navn: "Hiab: ZEPRO ZHZ 500", url: ZEPRO, dato: "2026-10-07" },
      { navn: "Dhollandia: forside (DH-LMA.08.03, søjlelifte)", url: DHOL, dato: "2026-10-04" },
      { navn: "Fyns Varebilsudlejning: Varebil med lift", url: FYNSV, dato: "2026-10-05" },
      { navn: "Fyns Karosseribyg: Tiplad (mærker: Bär Cargolift, Zepro)", url: FYNSK, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["BFA-portalen: liften kan afhjælpe belastende løft, træk og skub og forebygge fx problemer i ryggen og overbelastning af skuldre, arme og ben; den monteres på varevogn, lad eller trailer, så den altid er der; den kan placeres i sidedør eller på siden af varevognen; materialet kan være stål eller aluminium.", BFA],
    ["BFA-portalen nævner som spørgsmål før køb bl.a. materiale (stål eller aluminium), vægtbelastning, løftehøjde, klemningsfare, nedstyrtning og fald, CE-mærkning, overensstemmelseserklæring og dansk brugsanvisning samt behov for at tilrettelægge arbejdet på en ny måde og for instruktion og oplæring.", BFA],
    ["Bär Falt: i køreposition forsvinder underkøringsliften under køretøjet; ved brug betjenes knappen 'sænke', hvorefter liften foldes manuelt ud, hjulpet af affjedringen (fjeder).", FALT],
    ["Bär Falt F2 har to løftecylindre; F4 har yderligere to tiltcylindre, der giver hældningsudligning i alle højder, og Bär anbefaler F4 ved hyppig af- og pålæsning på skråninger.", FALT],
    ["Zepro ZHZ 500-85: løfteevne 500 kg, liftplade af aluminium, platform op til 1.700 × 1.400 mm og løftehøjde 850 mm (Hiab's produktside).", ZEPRO],
    ["Bär: VanLift har et slankt design og tilpasses den enkelte varevogn med adaptere; valg af varevognsfabrikat kan påvirke de tekniske muligheder, bl.a. løfteevnen.", VAN],
    ["Bär: varebiler op til 7,5 t totalvægt har mange forskellige chassis og er normalt udstyret med læssebagsmække med en lasteevne på 750 kg.", B750],
    ["Bär: der kræves en monteringsadapter til de fleste påbygninger af BC 750 S2L/S2S/A2L; den er af letvægtsaluminium, men øger liftens vægt.", B750],
    ["Detailforskrifterne, bilag 2, pkt. 2.8.2.4: læssekran, læssebagsmæk, tippelad og lignende skal monteres efter køretøjsfabrikantens anvisninger; har bilen chassisramme af stål, kan en prøvningsinstans alternativt dokumentere, at spændingerne i chassisrammen ikke overstiger 150 N/mm2.", DETAIL],
    ["Bär har målark, monteringsmanualer og certifikater for underkøringsbeskyttelse, anhængertræk og lastsikring; produktfinderen MyCargolift bestemmer en passende lift ud fra fem oplysninger.", VAN],
    ["BEK 1685/2025 § 5, stk. 1, nr. 4-6: registreringssyn også ved ændring af egenvægt på 50 kg eller derunder, hvis ændringen ønskes registreret i Køretøjsregisteret, ved ændring af tilladte vægte og ved øvrige ændringer af registrerede tekniske data.", SYN],
    ["Detailforskrifterne, bilag 1, pkt. 6.09.002 og 6.09.020 (5): en læssebagsmæk kan have to særlige afmærkningslygter, der skal afgive gult lys, sidde højst 0,40 m fra læssebagsmækkens yderste hjørner, være rettet bagud i arbejdsstilling, ikke kunne tændes, når mækken er klappet op, og afgive 100-240 blink pr. minut.", DETAIL],
    ["Bär: CargoFlash-blinklyset med LED er forsænket og standard på VanLift.", VAN],
    ["Detailforskrifterne, bilag 1, pkt. 3.02.001: ved bredden ses bort fra læssebagsmæk, der ikke er udfoldet og højst rager 10 mm ud fra bilens sider (med afrundede hjørner og kanter); ved længden ses bort fra læssebagsmæk i køreklar stand, når udragningen ikke overstiger 0,30 m, og lastemuligheden ikke forøges.", DETAIL],
    ["Detailforskrifterne, bilag 1, pkt. 9.08.024 og 9.08.001: varebil N1 skal have afskærmning bagtil mod underkøring, medmindre frihøjden under bagenden ikke overstiger 0,55 m; afskærmningen må højst sidde 0,40 m fra bageste punkt og skal være mindst 0,10 m høj på varebil N1; på køretøj med læssebagsmæk kan den bestå af sektioner, hvis afstanden til læssebagsmækkens dele højst er 2,5 cm, og hver sektion har et virksomt areal på mindst 350 cm2.", DETAIL],
    ["BEK 428/2022 § 3, stk. 2: bortset fra §§ 20-21 og 95-96 gælder bekendtgørelsen også arbejde, der ikke udføres for en arbejdsgiver; § 2: forpligtelserne påhviler arbejdsgivere, virksomhedsledere, arbejdsledere, ansatte, brugere, fabrikanter, leverandører, opstillere, projekterende, reparatører, udlejere m.fl.", BEK428],
    ["BEK 428/2022 § 4, stk. 9: hovedeftersyn er et eftersyn, der også indbefatter afprøvning og evt. adskillelse i nødvendigt omfang; § 58, stk. 3: hovedeftersynet af tekniske hjælpemidler til løft af byrder skal altid omfatte mekaniske dele inkl. sliddele og bærende dele, sikkerhedsudstyr inkl. overlast- og stabilitetssikring, betjeningsanordninger, energitilførsel og hydrauliske, pneumatiske og elektriske komponenter; § 27: resultaterne skal være tilgængelige for Arbejdstilsynet.", BEK428],
    ["BEK 428/2022 § 58, stk. 2: den sagkyndige skal særlig have kendskab til hjælpemidlets opbygning og funktion, nødvendig oplæring i eftersyn, service og vedligeholdelse, kendskab til brugsanvisningen, til Arbejdstilsynets sikkerhedskrav (eftersyn, prøvebelastning og journal), til andre myndigheders krav og til eventuelle krav om autorisation/certificering.", BEK428],
    ["Bär har søgning efter servicepartnere og en garanti-, vedligeholdelses- og reparationskontrakt kaldet Bär CargoRate.", VAN],
    ["Bär: VanLift har radiofjernbetjeningen SmartControl Basic som standard i stedet for kontakter i karrosseriet; BC 750 har en standard betjeningsboks; Falt har betjeningsenheden Control EVO med joysticks, der kan betjenes med handsker; SmartControl Basic har tre knapper og nærdistancedetektion, på BC 750 også AutoStop45° ved lukning.", B750],
    ["Bär: alle Bär Cargolifts har datainterfacet CargoConnect; med aktiv softwareoption og eBC Controller tilsluttet telematik kan dataene bruges.", FALT],
    ["Bär: SilentGrip-belægning fås som alternativ på BC 750 og Falt; containerstop 2ad tager rullediametre op til 200 mm og 2rd op til 110 mm; BC 750 A2L har 2ad som standard.", FALT],
    ["Bär: VanLifts motorenhed sidder beskyttet i liften og kan foldes ned til service; VanBridge kan fås som ekstraudstyr til integration i isoleret gulv til køleopbygninger; liften findes med foldbar FreeAccess-plade og bred standardplade.", VAN],
    ["Bär: koblingerne til BC 750 har europæisk delgodkendelse (Teile-ABE); BC 750 S4 har fast underkøringskofanger og fire cylindre og er en fordel, når kuglehovedkobling ofte bruges.", B750]
  ]
};
