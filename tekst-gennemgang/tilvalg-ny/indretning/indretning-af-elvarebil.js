// Underside /til-varebilen/indretning/indretning-af-elvarebil/ (07-10-2026)
var FTC = `https://katalog.ford.dk/specifikationer/transit-custom/`;
var FETC = `https://katalog.ford.dk/specifikationer/e-transit-custom/`;
var FPRIS = `https://katalog.ford.dk/prislister/varebiler/e-transit-custom-van/`;
var RM = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master.pdf`;
var RME = `https://edge.sitecorecloud.io/hedinitaban27a1-hedin8837-prod5c4b-4604/media/project/hedin/distribution-cars/transportvehiclesrenaultdksite/cardocuments/prisliste-master-e-tech-electric.pdf`;
var KIA = `https://www.kia.com/dk/pbv/el-varebil/el-varebil-raekkevidde/`;
var SVR = `https://smartvan.dk/produkt/bilindretning-med-udskaering-til-hjulkasse-jumpy-expert-proace-16-vivaro-19-scudo-22-l2/`;
var KORE = `https://koskisen.fi/en/downloads/kore-floors`;
var MSE = `https://www.modul-system.dk/da/content/electric-van-solutions`;

module.exports = {
  id: "indretning/indretning-af-elvarebil",
  side: {
    slug: "indretning-af-elvarebil",
    navn: "Indretning af elvarebil",
    titel: "Indretning af elvarebil: nyttelast og vægt",
    kort: `Elvarebilen har mindre nyttelast end dieselbilen, og her kan du se producenternes tal, batteriets vægt og hvad lette moduler vejer.`,
    beskrivelse: `Indretning af elvarebil: hvorfor nyttelasten er mindre end i dieselbilen, hvad vægt betyder for rækkevidden, og hvad reoler og gulve vejer.`,
    manchet: `Batteriet vejer, og det går fra nyttelasten. Derfor fylder indretningens vægt mere i en elvarebil end i den samme bil med diesel. Her er producenternes egne tal, og hvad lette moduler vejer.`,
    visuel: {
      hero: "indretning",
      hero_el: true,
      kort_fortalt: [
        ["Batteri, Master E-Tech 87 kWh", "520 kg", "oplyser Renault"],
        ["Mindre nyttelast, E-Transit Custom", "179 kg", "end diesel med samme totalvægt"],
        ["Mindre nyttelast, Master E-Tech", "273 kg", "end diesel-Masteren"],
        ["Reolpakke i aluminium", "43,6 kg", "begge sider, Vivaro og Proace L2"]
      ],
      toc: true,
      stribe: { ids: ["ford-e-transit-custom", "renault-master-e-tech", "toyota-proace"], titel: "Tilbud lige nu på elvarebilerne i artiklen" }
    },
    afsnit: [
      {
        overskrift: "Nyttelast: el mod diesel",
        tekst: [
          `Nyttelasten er forskellen mellem bilens tilladte totalvægt og dens køreklare vægt. Har elbilen og dieselbilen samme totalvægt, men elbilen vejer mere, er der mindre tilbage til last og indretning.`,
          `Forskellen ses tydeligt, når producenternes egne tal for den samme model sættes ved siden af hinanden. Tabellen viser Ford Transit Custom og Renault Master med diesel og med el.`
        ],
        tabel: {
          kolonner: ["Model", "Køreklar vægt", "Nyttelast", "Totalvægt"],
          raekker: [
            ["Ford Transit Custom L1, diesel, forhjulstræk", "2.009–2.100 kg", "1.125–1.216 kg", "3.225 kg"],
            ["Ford E-Transit Custom L1, 71 kWh, baghjulstræk", "2.279–2.326 kg", "946–1.024 kg", "3.225/3.350 kg"],
            ["Renault Master T35 L2H2 dCi 150, manuel", "2.208 kg", "1.292 kg", "3.500 kg"],
            ["Renault Master E-Tech L2H2 3.5T, 87 kWh", "2.481 kg", "1.019 kg", "3.500 kg"]
          ],
          note: `Producenternes tal. Kilder: <a href="${FTC}" rel="noopener">Ford: specifikationer Transit Custom</a>, <a href="${FETC}" rel="noopener">Ford: specifikationer E-Transit Custom</a> og Renaults prislister for <a href="${RM}" rel="noopener">Master</a> og <a href="${RME}" rel="noopener">Master E-Tech</a>, gældende 1. oktober–31. december 2026, set den 4. oktober 2026.`
        },
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Ford Transit Custom L1, diesel", 1125, "op til 1.216 kg"],
            ["Ford E-Transit Custom L1, el", 946, "op til 1.024 kg"],
            ["Renault Master L2H2, diesel", 1292],
            ["Renault Master E-Tech L2H2 3.5T, el", 1019]
          ],
          note: `Søjlerne viser den laveste nyttelast, producenterne oplyser. Diesel og el har samme totalvægt i hvert par. Kilder: <a href="${FTC}" rel="noopener">Ford: specifikationer Transit Custom</a>, <a href="${FETC}" rel="noopener">Ford: specifikationer E-Transit Custom</a> og Renaults prislister for <a href="${RM}" rel="noopener">Master</a> og <a href="${RME}" rel="noopener">Master E-Tech</a>, gældende 1. oktober–31. december 2026, set den 4. oktober 2026.`
        },
        efter: [
          `Med samme længde og samme totalvægt har E-Transit Custom 179 kg mindre nyttelast end diesel-Transit Custom, regnet på de laveste tal. Master E-Tech har 273 kg mindre end diesel-Masteren med samme totalvægt og lastrum.`
        ]
      },
      {
        overskrift: "Batteriet vejer",
        tekst: [
          `Renault oplyser, at batteriet på 87 kWh i Master E-Tech vejer 520 kg. Kia skriver om sine elvarebiler, at et større batteri giver længere rækkevidde, men at batteriets vægt kan påvirke bilens lasteevne. Et mindre batteri kan betyde lavere vægt og ofte lavere pris.`,
          `Batteriet er en del af den køreklare vægt, ligesom motoren og dieseltanken er det i en dieselbil. Derfor kan batteriets vægt ses i forskellen i nyttelast mellem to ellers ens biler med diesel og el.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 160" role="img" aria-label="To bjælker på 3.500 kg. Diesel-Masteren vejer 2.208 kg og har 1.292 kg nyttelast. Master E-Tech vejer 2.481 kg, heraf 520 kg batteri, og har 1.019 kg nyttelast."><text class="tg-fremhaev" x="0" y="16">Master L2H2, diesel</text><rect class="tg-kasse" x="0" y="24" width="214.5" height="28"/><text x="8" y="42">2.208 kg køreklar</text><rect class="tg-modul" x="214.5" y="24" width="125.5" height="28"/><text x="222.5" y="42">1.292 kg last</text><text class="tg-fremhaev" x="0" y="84">Master E-Tech L2H2 3.5T, el</text><rect class="tg-hylde" x="0" y="92" width="50.5" height="28"/><rect class="tg-kasse" x="50.5" y="92" width="190.5" height="28"/><text x="58.5" y="110">2.481 kg køreklar</text><rect class="tg-modul" x="241" y="92" width="99" height="28"/><text x="248" y="110">1.019 kg last</text><line class="tg-skinne-tynd" x1="340" y1="20" x2="340" y2="126"/><text class="tg-lille" x="0" y="138">HERAF BATTERI: 520 KG</text><text class="tg-lille" x="0" y="154">BEGGE HAR 3.500 KG TOTALVÆGT</text></svg>`,
          tekst: `Skematisk. Renaults egne tal for Master med diesel og med strøm. Batteriet på 87 kWh vejer 520 kg og er en del af elbilens køreklare vægt. Kilder: Renaults prislister for <a href="${RM}" rel="noopener">Master</a> og <a href="${RME}" rel="noopener">Master E-Tech</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Længere bil, mindre nyttelast",
        tekst: [
          `Også længden betyder noget for nyttelasten, fordi en længere bil vejer mere. Master E-Tech L3H2 3.5T har 938 kg nyttelast mod 1.019 kg i L2H2, selvom begge har samme batteri og samme totalvægt.`,
          `Til gengæld er lastrummet større. Renault oplyser 10,8 m³ i L2H2 og 13 m³ i L3H2. Den lange bil har altså 2,2 m³ mere plads, men 81 kg mindre nyttelast.`
        ],
        figur: {
          type: "soejler",
          enhed: "kg",
          data: [
            ["Master E-Tech L2H2 3.5T", 1019, "10,8 m³"],
            ["Master E-Tech L3H2 3.5T", 938, "13 m³"],
            ["Master E-Tech L2H2 4.0T", 1517, "10,8 m³"],
            ["Master E-Tech L3H2 4.0T", 1437, "13 m³"]
          ],
          note: `Nyttelast og lastvolumen med batteriet på 87 kWh. Kilde: <a href="${RME}" rel="noopener">Renault: prisliste Master E-Tech, 1. oktober–31. december 2026</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Udgaver med højere totalvægt",
        tekst: [
          `Nogle elvarebiler fås med en totalvægt over 3,5 t. Renault Master E-Tech L2H2 findes som 4.0T med 1.517 kg nyttelast mod 1.019 kg i 3.5T-udgaven. Prislisten angiver ingen anhængervægt for 4.0T. Hvad totalvægten betyder for kørekortet, står i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `Udgaverne adskiller sig også på andre punkter. Ifølge Renaults prisliste kører 3.5T-udgaven højst 120 km/t og 4.0T-udgaven højst 90 km/t. 3.5T-udgaven må trække 2.500 kg, og for 4.0T gælder der andre regler.`,
          `Den køreklare vægt er næsten den samme i de to udgaver, 2.481 og 2.483 kg. Forskellen i nyttelast kommer altså fra den højere totalvægt og ikke fra en lettere bil.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Master E-Tech L2H2 3.5T", 1019, "kg nyttelast"],
            ["Master E-Tech L2H2 4.0T", 1517, "kg nyttelast"]
          ],
          note: `Prislisten angiver ingen anhængervægt for 4.0T. Kilde: <a href="${RME}" rel="noopener">Renault: prisliste Master E-Tech, 1. oktober–31. december 2026</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Vægt og rækkevidde",
        tekst: [
          `Kia skriver, at jo tungere bilen er læsset, desto højere er strømforbruget. Fuldt læs, hyppige stop og accelerationer påvirker rækkevidden, og kulde reducerer den, fordi opvarmning af kabine og batteri bruger strøm. Meget varmt vejr kan også påvirke effektiviteten.`,
          `WLTP-rækkevidden bruges til at sammenligne biler og er ikke en garanti for rækkevidden i drift. Kia skriver, at mange elvarebiler i dag har en rækkevidde på op til omkring 400 km efter WLTP. Ford opgiver 365–370 km for E-Transit Custom med 136 hk.`,
          `Jævn kørsel giver ifølge Kia en mere stabil rækkevidde. Mere om rækkevidde i praksis i <a href="/haandbogen/elvarebil-i-praksis/">elvarebil i praksis</a> og på <a href="/elvarebiler/">elvarebiler</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="Fire forhold, der påvirker rækkevidden: tung last giver højere strømforbrug, kulde kræver opvarmning af kabine og batteri, mange stop og accelerationer trækker ned, og jævn kørsel giver en mere stabil rækkevidde."><rect class="tg-modul" x="140" y="90" width="120" height="40"/><text class="tg-modul__tekst" x="200" y="115" text-anchor="middle">RÆKKEVIDDE</text><rect class="tg-kasse" x="5" y="10" width="160" height="50"/><text class="tg-fremhaev" x="85" y="30" text-anchor="middle">Tung last</text><text x="85" y="48" text-anchor="middle">højere strømforbrug</text><rect class="tg-kasse" x="235" y="10" width="160" height="50"/><text class="tg-fremhaev" x="315" y="30" text-anchor="middle">Kulde</text><text x="315" y="48" text-anchor="middle">opvarmning bruger strøm</text><rect class="tg-kasse" x="5" y="160" width="160" height="50"/><text class="tg-fremhaev" x="85" y="180" text-anchor="middle">Mange stop</text><text x="85" y="198" text-anchor="middle">og accelerationer</text><rect class="tg-kasse" x="235" y="160" width="160" height="50"/><text class="tg-fremhaev" x="315" y="180" text-anchor="middle">Jævn kørsel</text><text x="315" y="198" text-anchor="middle">mere stabil rækkevidde</text><line class="tg-skinne-tynd" x1="120" y1="60" x2="160" y2="90"/><line class="tg-skinne-tynd" x1="280" y1="60" x2="240" y2="90"/><line class="tg-skinne-tynd" x1="120" y1="160" x2="160" y2="130"/><line class="tg-skinne-tynd" x1="280" y1="160" x2="240" y2="130"/></svg>`,
          tekst: `Skematisk. Kilde: <a href="${KIA}" rel="noopener">Kia: El varebil rækkevidde</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Batteri og opladning i Master E-Tech",
        tekst: [
          `Renaults prisliste for Master E-Tech viser, hvad batteriet består af. Det er et lithium-ion-batteri på 87 kWh, som vejer 520 kg og har en garanti på 8 år eller 160.000 km.`,
          `Bilen kan lade med 11 kW fra en almindelig ladestander og med op til 130 kW på en lynlader. Lynladningen er nyttig, hvis bilen skal lade mellem to opgaver, men den ændrer ikke på batteriets vægt.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Batterikapacitet", "87", "kWh"],
            ["Batteriets vægt", "520", "kg"],
            ["Batterigaranti", "8", "år eller 160.000 km"],
            ["Lynladning, op til", "130", "kW"]
          ],
          note: `Kilde: <a href="${RME}" rel="noopener">Renault: prisliste Master E-Tech, 1. oktober–31. december 2026, tekniske specifikationer</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Opladning og arbejdsdagen",
        tekst: [
          `Kia skriver, at de fleste virksomheder lader bilerne om natten, så de starter dagen med fuldt batteri. Ved behov kan bilen lynlade i løbet af dagen, fx hvis kørslen varierer, eller hvis bilen kører flere skift.`,
          `Udstyret i varerummet kan følge med. Modul-System skriver, at en DC-DC-lader kan lade hjælpebatteriet til udstyret, mens bilens egne batterier lader via ladekablet, så dagen også starter med et fuldt hjælpebatteri. Mere om opladning i <a href="/til-varebilen/el-abonnement/">opladning og ladestander</a>.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Om natten", "Bilen lader på depotet eller hjemme og starter dagen med fuldt batteri."],
            ["Samtidig", "En DC-DC-lader lader hjælpebatteriet til lys og udstyr i varerummet."],
            ["I løbet af dagen", "Ved behov lynlader bilen mellem opgaverne, fx hvis kørslen varierer."]
          ],
          note: `Kilder: <a href="${KIA}" rel="noopener">Kia: El varebil rækkevidde</a> og <a href="${MSE}" rel="noopener">Modul-System: Løsninger til elektriske varevogne</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvad indretningen vejer",
        tekst: [
          `SmartVans reolpakke i aluminium til Vivaro 19- og Proace 16- L2 vejer 27,4 kg i førersiden og 16,2 kg i passagersiden.`,
          `Gulvet kommer oveni og vejer mest i de lange biler, fordi vægten opgives pr. m².`,
          `Eksempel: Et krydsfinergulv på 9–12 mm vejer 6,1–8,2 kg pr. m², og et plastgulv på 10 mm vejer 4,4 kg pr. m². På et gulv på 10 m² er forskellen altså 17–38 kg.`
        ],
        tabel: {
          kolonner: ["Del", "Vægt", "Kilde"],
          raekker: [
            ["Aluminiumsreol, førerside, Vivaro 19- / Proace 16- L2", "27,4 kg", "SmartVan"],
            ["Aluminiumsreol, passagerside, samme bil", "16,2 kg", "SmartVan"],
            ["Gulv i krydsfiner, 9–12 mm", "6,1–8,2 kg pr. m²", "Koskisen"],
            ["Gulv i polypropylen, 10 mm", "4,4 kg pr. m²", "Koskisen"]
          ],
          note: `Kilder: <a href="${SVR}" rel="noopener">SmartVan: reolpakke til Jumpy, Expert, Proace, Vivaro og Scudo L2</a> og <a href="${KORE}" rel="noopener">Koskisen: Kore van plywood floors</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Reolpakke i aluminium, begge sider", 43.6, "kg"],
            ["Nyttelast, E-Transit Custom L1", 946, "kg"],
            ["Reolpakkens andel", "ca. 4,6", "% af nyttelasten"]
          ],
          note: `Reolpakken er SmartVans til Vivaro 19- og Proace 16- L2. Gulv, beklædning og det, reolerne skal bære, kommer oveni. Kilder: <a href="${SVR}" rel="noopener">SmartVan</a> og <a href="${FETC}" rel="noopener">Ford</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Reolpakken vejer 43,6 kg for begge sider. På en E-Transit Custom L1 med 946 kg nyttelast er det ca. 4,6 % af nyttelasten. Hertil kommer gulv, beklædning og det, reolerne skal bære.`
        ]
      },
      {
        overskrift: "Lette materialer",
        tekst: [
          `I en elvarebil giver hvert sparet kilo plads til mere last. Derfor vælger mange de letteste materialer til reoler, gulv og paneler.`,
          `Valget mellem hylder og skuffer betyder også noget. Skuffer kører på skinner og vejer mere pr. meter end hylder med kasser.`,
          `Modul-System skriver, at deres livscyklusanalyse viser, at det letteste materiale er det, der begrænser indretningens påvirkning af miljøet mest gennem bilens levetid.`
        ],
        kort: [
          ["Reoler i aluminium", "SmartVans reolpakker er lavet af 1,5 mm aluminium med stålbeslag i samlingerne. SmartVan oplyser, at de er crashtestet efter ECE reg. 17."],
          ["Gulv i plast", `Et 10 mm gulv i polypropylen vejer 4,4 kg pr. m² mod 6,1–8,2 kg for krydsfiner. Se <a href="/til-varebilen/indretning/gulv-og-vaegbeklaedning/">gulv og vægbeklædning</a>.`],
          ["Paneler i plast", "Panelerne er 4 mm polypropylen med honeycomb-struktur i stedet for finer på siderne."],
          ["Kasser frem for skuffer", `Hylder og kasser vejer mindre pr. meter end skuffer. Se <a href="/til-varebilen/indretning/skuffer/">skuffer til varebil</a>.`]
        ]
      },
      {
        overskrift: "Montering uden at bore",
        tekst: [
          `Modul-System har siden 2017 limet fastgørelsespunkterne til reolerne direkte på karrosseriet i stedet for at bore, og sælger sæt specielt til elvarebiler. Ifølge Modul-System er limen den samme højstyrkeformel, som bruges i luftfartsindustrien. SmartVans plastgulve monteres i bilens eksisterende surringsringe.`,
          `Ifølge Modul-System er teknikken installeret i biler over hele verden og testet grundigt. Firmaet sælger reoler, hylder og sæt med bund og beklædning, der er udviklet til elvarebiler.`,
          `Producentens opbygningsvejledning angiver, hvor der må monteres udstyr på bilen. Et limet beslag efterlader ingen huller i karrosseriet, når indretningen tages ud igen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="To snit af et fastgørelsespunkt til en reol. Til venstre er beslaget boltet gennem et hul i karrosseriet. Til højre er det limet på pladen uden hul."><text class="tg-lille" x="10" y="20">FASTGØRELSESPUNKT TIL REOLEN, SNIT</text><path class="tg-profil" d="M60,110 V70 H70 V100 H140 V110 Z"/><rect class="tg-hylde" x="20" y="110" width="160" height="8"/><rect class="tg-kuffert" x="96" y="94" width="8" height="34"/><rect class="tg-kasse" x="88" y="126" width="24" height="8"/><path class="tg-profil" d="M260,104 V64 H270 V94 H340 V104 Z"/><rect class="tg-modul" x="258" y="104" width="84" height="6"/><rect class="tg-hylde" x="220" y="110" width="160" height="8"/><text class="tg-fremhaev" x="100" y="160" text-anchor="middle">Boret</text><text x="100" y="176" text-anchor="middle">bolt gennem pladen</text><text class="tg-fremhaev" x="300" y="160" text-anchor="middle">Limet</text><text x="300" y="176" text-anchor="middle">intet hul i karrosseriet</text></svg>`,
          tekst: `Skematisk. Det fremhævede lag til højre er limen. Kilde: <a href="${MSE}" rel="noopener">Modul-System: Løsninger til elektriske varevogne</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Strøm til udstyret",
        tekst: [
          `Modul-System anbefaler, at lys, invertere og andet ekstraudstyr kobles til et hjælpebatteri og ikke til bilens 12V-batteri, så det ikke påvirker bilens funktion eller rækkevidde. Hjælpebatteriet lades fra bilen med en DC-DC-lader.`,
          `Modul-System sælger DC-DC-ladere på 30 og 60 ampere til lithium-, blysyre- og AGM-batterier. En inverter laver strøm til 230V-værktøj ud af hjælpebatteriets strøm.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 150" role="img" aria-label="Bilen lader et hjælpebatteri gennem en DC-DC-lader, og hjælpebatteriet forsyner lys og andet udstyr."><text class="tg-lille" x="0" y="20">MODUL-SYSTEMS ANBEFALING</text><rect class="tg-kasse" x="0" y="40" width="90" height="44"/><text x="8" y="58">Bilen</text><line class="tg-pil" x1="92" y1="62" x2="108" y2="62"/><path class="tg-pil" d="M102,56 L108,62 L102,68"/><rect class="tg-kasse" x="110" y="40" width="90" height="44"/><text x="118" y="58">DC-DC-</text><text x="118" y="74">lader</text><line class="tg-pil" x1="202" y1="62" x2="218" y2="62"/><path class="tg-pil" d="M212,56 L218,62 L212,68"/><rect class="tg-modul" x="220" y="40" width="90" height="44"/><text class="tg-modul__tekst" x="228" y="58">HJÆLPE-</text><text class="tg-modul__tekst" x="228" y="74">BATTERI</text><line class="tg-pil" x1="312" y1="62" x2="328" y2="62"/><path class="tg-pil" d="M322,56 L328,62 L322,68"/><rect class="tg-kasse" x="330" y="40" width="70" height="44"/><text x="338" y="58">Lys og</text><text x="338" y="74">udstyr</text><text class="tg-lille" x="0" y="118">UDSTYRET KOBLES IKKE PÅ BILENS 12V</text></svg>`,
          tekst: `Skematisk. Modul-Systems anbefaling, hvor lys, invertere og andet ekstraudstyr kobles til et hjælpebatteri, som lades fra bilen med en DC-DC-lader. Kilde: <a href="${MSE}" rel="noopener">Modul-System: Løsninger til elektriske varevogne</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "230V fra fabrikken",
        tekst: [
          `Nogle elvarebiler har 230V fra fabrikken. Ford sælger ProPower Onboard til E-Transit Custom med to 230V-udtag i varerummet og ét ved førersædet, samlet 2.300 W, for 8.420 kr. ekskl. moms (vejledende prisliste 07-07-2026).`,
          `Udstyret bestilles sammen med bilen og står i Fords prisliste som tilvalg. Skal der bruges mere strøm, end udtagene giver, kan et hjælpebatteri med inverter supplere, som beskrevet ovenfor.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="Varebil set ovenfra med to 230V-udtag i varerummet og ét ved førersædet, samlet 2.300 W."><path class="tg-rum" d="M20,50 H300 Q360,50 370,80 V130 Q360,160 300,160 H20 Z"/><line class="tg-skinne-tynd" x1="250" y1="50" x2="250" y2="160"/><rect class="tg-profil" x="262" y="62" width="36" height="34"/><rect class="tg-profil" x="262" y="114" width="36" height="34"/><circle class="tg-modul" cx="110" cy="58" r="6"/><circle class="tg-modul" cx="110" cy="152" r="6"/><circle class="tg-modul" cx="304" cy="79" r="6"/><g class="tg-call"><line x1="110" y1="52" x2="110" y2="40"/><circle cx="110" cy="58" r="3"/><text class="tg-call__navn" x="20" y="22">230V i varerummet</text><text class="tg-call__under" x="20" y="36">to udtag</text></g><g class="tg-call"><line x1="304" y1="73" x2="340" y2="40"/><circle cx="304" cy="79" r="3"/><text class="tg-call__navn" x="395" y="22" text-anchor="end">Ved førersædet</text><text class="tg-call__under" x="395" y="36" text-anchor="end">ét udtag</text></g><text class="tg-lille" x="20" y="186">SET OVENFRA, FRONTEN TIL HØJRE. SAMLET 2.300 W</text></svg>`,
          tekst: `Skematisk. Fords ProPower Onboard til E-Transit Custom. Kilde: <a href="${FPRIS}" rel="noopener">Ford: vejledende prisliste E-Transit Custom van, 07-07-2026</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Varme og overblik i varerummet",
        tekst: [
          `I en elvarebil koster varme strøm fra batteriet. Modul-System sælger varmeapparater på 600 W til varerummet, som om sommeren kan bruges som ventilator med frisk luft.`,
          `Modul-Systems styresystem Modul-Connect kan tænde og slukke arbejdslyset, planlægge varmen og holde øje med bilens vægt. Ifølge Modul-System kan det også vise bilens ruter, batteri og placering, så flådeansvarlige kan planlægge kørslen.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan indretningen holdes inden for nyttelasten.",
    spoergsmaal: [
      "Model, batteristørrelse og totalvægt, fx E-Transit Custom L1, 71 kWh, 3.225 kg.",
      "Bilens nyttelast, som den står i prislisten eller registreringsattesten.",
      "Hvad der skal med på en almindelig dag, og hvad det vejer.",
      "Om indretningen skal monteres uden boring.",
      "Om der skal 230V, lys eller varme i varerummet, og om bilen har 230V fra fabrikken.",
      "Om indretningen skal kunne flyttes til en ny bil."
    ],
    faq: [
      ["Hvorfor har en elvarebil mindre nyttelast?", "Batteriet vejer. Med samme totalvægt har Ford E-Transit Custom L1 946–1.024 kg nyttelast mod 1.125–1.216 kg for diesel-Transit Custom L1."],
      ["Hvor meget vejer batteriet i en elvarebil?", "Det afhænger af modellen. Renault oplyser 520 kg for batteriet på 87 kWh i Master E-Tech."],
      ["Påvirker lasten rækkevidden?", "Ja. Jo tungere bilen er læsset, desto højere er strømforbruget, skriver Kia. Hyppige stop og kulde trækker også ned."],
      ["Hvad vejer en indretning i aluminium?", "SmartVans reolpakke til Vivaro og Proace L2 vejer 27,4 kg i førersiden og 16,2 kg i passagersiden, i alt 43,6 kg."],
      ["Må man bore i en elvarebil?", "Producentens opbygningsvejledning angiver, hvor der må monteres. Flere leverandører limer fastgørelsespunkterne på i stedet for at bore."],
      ["Kan udstyret køre på bilens batteri?", "Modul-System anbefaler et hjælpebatteri til ekstraudstyr. Nogle modeller har 230V-udtag fra fabrikken, fx Fords ProPower Onboard på 2.300 W."],
      ["Har en lang elvarebil mindre nyttelast end en kort?", "Ofte, fordi den lange bil vejer mere. Renault Master E-Tech 3.5T har 938 kg nyttelast i L3H2 mod 1.019 kg i L2H2."],
      ["Hvor hurtigt kører Master E-Tech 4.0T?", "Ifølge Renaults prisliste højst 90 km/t mod 120 km/t for 3.5T-udgaven."]
    ],
    kilder: [
      { navn: "Ford: specifikationer Transit Custom", url: FTC, dato: "2026-10-04" },
      { navn: "Ford: specifikationer E-Transit Custom", url: FETC, dato: "2026-10-04" },
      { navn: "Ford: vejledende prisliste E-Transit Custom van, 07-07-2026", url: FPRIS, dato: "2026-10-04" },
      { navn: "Renault: prisliste Master, 1. oktober–31. december 2026", url: RM, dato: "2026-10-04" },
      { navn: "Renault: prisliste Master E-Tech, 1. oktober–31. december 2026", url: RME, dato: "2026-10-07" },
      { navn: "Kia: El varebil rækkevidde", url: KIA, dato: "2026-10-07" },
      { navn: "SmartVan: reolpakke til Jumpy, Expert, Proace, Vivaro og Scudo L2", url: SVR, dato: "2026-10-04" },
      { navn: "Koskisen: Kore van plywood floors (produktark)", url: KORE, dato: "2026-10-04" },
      { navn: "Modul-System: Løsninger til elektriske varevogne", url: MSE, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Renault Master E-Tech L3H2 3.5T 87 kWh: køreklar vægt 2.562 kg, nyttelast 938 kg, lastvolumen 13 m³; L3H2 4.0T: nyttelast 1.437 kg; L2H2: lastvolumen 10,8 m³ (versionstabellen).", RME],
    ["Renault Master E-Tech: maks. hastighed 120 km/t (3.5T) og 90 km/t (4.0T); anhængervægt 2.500 kg (3.5T), andre regler for 4.0T.", RME],
    ["Renault Master E-Tech: batteriet er Li-ion på 87 kWh, vejer 520 kg, har batterigaranti 8 år / 160.000 km; opladere 11 kW AC og 130 kW DC.", RME],
    ["Kia: mange elvarebiler har i dag en rækkevidde på op til omkring 400 km (WLTP); meget varme forhold kan påvirke effektiviteten; jævn kørsel giver mere stabil rækkevidde.", KIA],
    ["Kia: de fleste virksomheder arbejder med natopladning, så bilen starter dagen med fuldt batteri; ved behov kan der lades i løbet af dagen, fx ved hurtigladning mellem opgaver, hvis kørselsbehovet varierer eller bilen kører flere skift.", KIA],
    ["Modul-System: limen til fastgørelsespunkterne er den samme højstyrkeformel, som bruges i luftfartsindustrien.", MSE],
    ["Modul-System: en DC-DC-lader oplader hjælpebatteriet, mens bilens batterier oplades via ladekablet; Modul-System tilbyder DC-DC-ladere på 30 og 60 ampere til lithium-, blysyre- og AGM-batterier.", MSE],
    ["Modul-System: egne varmeapparater på 600 W, der om sommeren fungerer som ventilator; Modul-Connect kan tænde og slukke arbejdslys, planlægge varmen, holde styr på bilens vægt og vise ruter, batteri og position.", MSE],
    ["Modul-System: teknikken med limede fastgørelsespunkter er installeret i biler over hele verden og har gennemgået mange test; Modul-System tilbyder reoler, hylder, bund- og beklædningssæt designet til elektriske varevogne.", MSE],
    ["Modul-System: ifølge deres livscyklusanalyse er det største bidrag til miljøet, at de arbejder med det letteste tilgængelige materiale.", MSE]
  ]
};
