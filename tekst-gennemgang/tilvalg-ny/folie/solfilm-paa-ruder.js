// Underside /til-varebilen/folie/solfilm-paa-ruder/ (07-10-2026)
var BEK = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var VK = `https://www.vankompagniet.dk/product-category/dekorationer/solfilm/`;
var VK2 = `https://www.vankompagniet.dk/product/solfilm-pa-2-bagdore/`;
var VKVAN = `https://www.vankompagniet.dk/product/solfilm-i-bagruderne-pa-ombygget-van/`;
var VKKLAP = `https://www.vankompagniet.dk/product/solfilm-pa-bagklap/`;
var SF = `https://solfilm.dk/solfilm-til-biler/`;
var KBH = `https://www.kbh-solfilm.dk/biler/`;
var TNW = `https://tintnwrapsolutions.dk/priser/`;
var CPH = `https://cphwrap.dk/prisliste/`;
var MG = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var CV = `https://colourgraphics.com/product/contravision-perforated-window-film-external`;

module.exports = {
  id: "folie/solfilm-paa-ruder",
  side: {
    slug: "solfilm-paa-ruder",
    navn: "Solfilm på ruder",
    titel: "Solfilm på varebil: regler og priser",
    kort: `Hvilke ruder på en varebil der må have solfilm, hvilke film der findes, og hvad montering koster hos fem firmaer.`,
    beskrivelse: `Solfilm på varebil: hvilke ruder der må have film, strimlen på forruden, filmtyper, mørkhed, hulfolie og priser hos fem firmaer i oktober 2026.`,
    manchet: `Forruden og de forreste sideruder må ikke have påklæbet solfilm, bortset fra en strimmel øverst ved spejlet. Ruderne bag føreren har intet krav til lysgennemgang i detailforskrifterne, og en varebil skal i forvejen have spejle i begge sider. Solfilm på to bagdøre koster fra 2.295 kr. uden moms med montering hos VanKompagniet.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Forrude og forreste sideruder", "mindst 70 %", "lysgennemgang og ingen påklæbet film"],
        ["Strimmel på forruden", "højst 0,10 m", "ned fra rudens øverste kant"],
        ["Ruder bag føreren", "Intet krav", "til lysgennemgang"],
        ["Solfilm på 2 bagdøre", "fra 2.295 kr.", "med montering hos VanKompagniet"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Reglerne kort",
        tekst: [
          `Reglerne for bilens ruder står i Færdselsstyrelsens detailforskrifter for køretøjer. De deler ruderne i to grupper. Forruden og de forreste sideruder sidder i førerens synsfelt på 180° og har skrappe krav, mens ruderne bag føreren ikke har noget krav til lysgennemgang.`,
          `Lysgennemgang er den del af lyset, der kommer igennem ruden, målt i procent. Jo lavere tallet er, jo mørkere er ruden.`,
          `Reglerne gælder bilen efter dens art. En varebil på gule plader følger derfor de samme regler for ruderne som en varebil på hvide plader.`
        ],
        tabel: {
          kolonner: ["Rude", "Regel", "Detailforskrifterne"],
          raekker: [
            ["Forrude", "Ingen uoriginal påklæbet film. Mindst 70 % lysgennemgang", "Pkt. 10.03.003 og 10.03.004"],
            ["Strimmel øverst på forruden", "Tilladt: højst 0,10 m ned og højst 20 mm bredere end bakspejlet i hver side", "Pkt. 10.03.004"],
            ["Forreste sideruder", "Ingen uoriginal påklæbet film. Mindst 70 % lysgennemgang", "Pkt. 10.03.003 og 10.03.004"],
            ["Ruder bag førerens 180° synsfelt", "Intet krav til lysgennemgang", "Pkt. 10.03.003"],
            ["Spejle på varebil N1", "Udvendigt førerspejl i hver side", "Pkt. 10.03.024"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">BEK nr. 1484 af 03/12/2025 om detailforskrifter for køretøjers indretning, udstyr og anvendelse</a>, bilag 1, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Varebil set ovenfra med 180 graders synsfelt fra førerpladsen, forrude og forreste sideruder fremhævet og ruderne bagved uden krav">
<rect class="tg-profil" x="80" y="60" width="280" height="120"/><line class="tg-skinne-tynd" x1="150" y1="62" x2="150" y2="178"/>
<line class="tg-doer" x1="80" y1="70" x2="80" y2="170"/><line class="tg-doer" x1="95" y1="60" x2="140" y2="60"/><line class="tg-doer" x1="95" y1="180" x2="140" y2="180"/>
<line class="tg-skinne" x1="360" y1="72" x2="360" y2="112"/><line class="tg-skinne" x1="360" y1="128" x2="360" y2="168"/>
<circle class="tg-kasse" cx="118" cy="155" r="7"/><text x="130" y="159">Fører</text>
<path class="tg-skinne-tynd" fill="none" d="M118,85 A70,70 0 0 0 118,225"/><text x="12" y="159">180°</text>
<g class="tg-call"><line x1="110" y1="60" x2="110" y2="42"/><circle cx="110" cy="60" r="3"/><text class="tg-call__navn" x="20" y="20">Forrude og forreste sideruder</text><text class="tg-call__under" x="20" y="34">Mindst 70 % lys og ingen film</text></g>
<g class="tg-call"><line x1="360" y1="92" x2="360" y2="42"/><circle cx="360" cy="92" r="3"/><text class="tg-call__navn" x="395" y="20" text-anchor="end">Ruder bag føreren</text><text class="tg-call__under" x="395" y="34" text-anchor="end">Intet krav til lys</text></g>
<text class="tg-lille" x="150" y="214">FRONT TIL VENSTRE · SET OVENFRA</text><text x="20" y="240">Strimmel øverst på forruden: højst 0,10 m ned</text></svg>`,
          tekst: `Skematisk. Bilen set ovenfra med fronten til venstre. Forruden og de forreste sideruder skal have mindst 70 % lysgennemgang inden for det normale synsfelt og må ikke have påklæbet film, bortset fra strimlen ved bakspejlet. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003 og 10.03.004</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Toning fra fabrikken eller påklæbet film",
        tekst: [
          `Forruden og de forreste sideruder i et motordrevet køretøj må ikke have uoriginalt solfilter i form af påsprøjtet eller påklæbet film, der helt eller delvist dækker ruden. Forbuddet afhænger ikke af, hvor mørk filmen er.`,
          `Ruderne skal desuden have mindst 70 % lysgennemgang inden for det normale synsfelt. Det krav gælder alle forruder og forreste sideruder, også ruder, der er tonet fra fabrikken.`,
          `Toning fra fabrikken er derfor lovlig, når glasset har mindst 70 % lysgennemgang. KBH Solfilm beskriver det som indfarvning fra fabrikkens side og skriver, at firmaet ikke toner fordøre.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Snit gennem to ruder. Til venstre er toningen en del af glasset fra fabrikken, og til højre er en film klæbet på indersiden af glasset."><text class="tg-lille" x="20" y="18">SNIT GENNEM RUDEN · UDE TIL VENSTRE</text><rect class="tg-profil" x="80" y="40" width="10" height="130"/><rect class="tg-hylde" x="90" y="40" width="5" height="130"/><rect class="tg-profil" x="95" y="40" width="10" height="130"/><rect class="tg-profil" x="262" y="40" width="22" height="130"/><rect class="tg-modul" x="284" y="40" width="6" height="130"/><g class="tg-call"><line x1="92" y1="70" x2="130" y2="58"/><circle cx="92" cy="70" r="3"/><text class="tg-call__navn" x="134" y="52">Toning i glasset</text><text class="tg-call__under" x="134" y="66">indfarvet fra fabrikken</text></g><g class="tg-call"><line x1="287" y1="100" x2="300" y2="116"/><circle cx="287" cy="100" r="3"/><text class="tg-call__navn" x="300" y="130">Påklæbet film</text><text class="tg-call__under" x="300" y="144">på indersiden</text></g><text class="tg-fremhaev" x="92" y="196" text-anchor="middle">Tilladt</text><text x="92" y="212" text-anchor="middle">med mindst 70 % lys</text><text class="tg-fremhaev" x="276" y="196" text-anchor="middle">Ikke tilladt</text><text x="276" y="212" text-anchor="middle">på forrude og forreste</text><text x="276" y="228" text-anchor="middle">sideruder</text></svg>`,
          tekst: `Skematisk. Toning i selve glasset er lovlig med mindst 70 % lysgennemgang, mens påklæbet film ikke er tilladt på forruden og de forreste sideruder. Kilder: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003 og 10.03.004</a> og <a href="${KBH}" rel="noopener">KBH Solfilm</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Strimlen øverst på forruden",
        tekst: [
          `En solstrimmel øverst på forruden er den eneste film, reglerne tillader på forruden. Den skal sidde ved det indvendige førerspejl og må højst gå 0,10 m ned fra rudeåbningens øverste kant.`,
          `Strimlen må højst være 20 mm bredere end det indvendige førerspejl i hver side. Er spejlet fx 25 cm bredt, må strimlen altså højst være 29 cm bred.`,
          `Reglen beskriver et felt omkring spejlet og ikke en stribe hen over hele ruden. En strimmel, der går fra side til side, er derfor bredere, end reglen tillader.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Forruden set indefra med bakspejlet og solstrimlen øverst, der højst går 0,10 m ned og højst er 20 mm bredere end spejlet i hver side"><path class="tg-profil" d="M40,40 L360,40 L390,170 L10,170 Z"/><rect class="tg-modul" x="158" y="40" width="84" height="34"/><rect class="tg-kasse" x="170" y="50" width="60" height="18"/><text x="200" y="63" text-anchor="middle">Spejl</text><line class="tg-pil" x1="256" y1="40" x2="256" y2="74"/><line class="tg-pil" x1="250" y1="40" x2="262" y2="40"/><line class="tg-pil" x1="250" y1="74" x2="262" y2="74"/><text x="266" y="61">højst 0,10 m</text><g class="tg-call"><line x1="164" y1="57" x2="120" y2="112"/><circle cx="164" cy="57" r="3"/><text class="tg-call__navn" x="40" y="126">Højst 20 mm bredere</text><text class="tg-call__under" x="40" y="140">end spejlet i hver side</text></g><text class="tg-lille" x="40" y="192">FORRUDEN SET INDEFRA · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk. Solstrimlen må højst gå 0,10 m ned og højst være 20 mm bredere end spejlet i hver side. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.004</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Andre ting på forruden",
        tekst: [
          `Detailforskrifterne har også en regel om genstande i førerens direkte synsfelt fremad og til siderne. Der må ikke sidde noget, der reducerer udsynet unødigt, og reglen siger, hvor de almindelige ting skal sidde.`,
          `En GPS reducerer ikke udsynet unødigt, når den sidder nederst i midten eller i nederste venstre hjørne af forruden, så langt nede mod instrumentbrættet som muligt. En fastmonteret P-skive skal sidde nederst til højre, og en boks til automatisk betaling skal sidde nederst i midten.`,
          `Reglen gælder alle genstande i synsfeltet, så den omfatter også fx en holder til telefonen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 240" role="img" aria-label="Forruden set indefra. Solstrimlen sidder øverst ved spejlet, en GPS nederst i midten eller nederst til venstre, en boks til automatisk betaling nederst i midten og en P-skive nederst til højre."><path class="tg-profil" d="M50,50 L350,50 L385,180 L15,180 Z"/><rect class="tg-modul" x="160" y="50" width="80" height="26"/><rect class="tg-kasse" x="174" y="57" width="52" height="13"/><text x="200" y="67" text-anchor="middle">Spejl</text><rect class="tg-kasse" x="40" y="146" width="60" height="26"/><text x="70" y="163" text-anchor="middle">GPS</text><rect class="tg-kasse" x="150" y="146" width="100" height="26"/><text x="200" y="163" text-anchor="middle">Betalingsboks</text><rect class="tg-kasse" x="300" y="146" width="64" height="26"/><text x="332" y="163" text-anchor="middle">P-skive</text><g class="tg-call"><line x1="240" y1="62" x2="284" y2="44"/><circle cx="240" cy="62" r="3"/><text class="tg-call__navn" x="280" y="22">Solstrimmel</text><text class="tg-call__under" x="280" y="36">højst 0,10 m ned</text></g><text x="20" y="204">GPS: nederst i midten eller til venstre</text><text x="20" y="220">P-skive nederst til højre</text><text class="tg-lille" x="20" y="236">SET INDEFRA FRA FØRERPLADSEN · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk. Forruden set indefra fra førerpladsen. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.002 og 10.03.004</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Solskærm over forruden",
        tekst: [
          `Detailforskrifterne har regler for både den udvendige solskærm over forruden og den indvendige solskærm, som føreren klapper ned. Reglerne står i samme punkt som forbuddet mod film på de forreste ruder.`
        ],
        punkter: [
          `<strong>Udvendig, farvet solskærm.</strong> Den skal sidde over forruden, være solidt fastgjort, ikke genere førerens udsyn og ikke have skarpe kanter, der er til unødig fare.`,
          `<strong>Indvendig solskærm.</strong> Den skal sidde over forruden og kunne indstilles uden værktøj og klappes væk. Den må ikke kunne dække det påbudte indvendige førerspejl.`
        ],
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.004</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Ruderne bag føreren",
        tekst: [
          `Ruderne bag førerens synsfelt på 180° har ikke noget krav til lysgennemgang i detailforskrifterne. Det gælder ruderne i bagdørene, i bagklappen og i skydedøren og sideruderne længere tilbage.`,
          `En varebil skal i forvejen have et udvendigt førerspejl i hver side. Kravet gælder alle varebiler, uanset om de har ruder i bagdørene eller ej.`,
          `Solfilm.dk skriver, at der ikke er nogen grænse for, hvor mørke bagsideruderne og bagruden må være, så længe bilen har fungerende sidespejle i begge sider. Firmaet skriver også, at meget mørk film, fx 5 %, giver mindre orienteringsudsyn, især når det er mørkt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="Varebil set bagfra med solfilm på ruderne i bagdørene og et udvendigt spejl i hver side."><path class="tg-rum" d="M110,212 L110,62 Q110,46 126,46 L274,46 Q290,46 290,62 L290,212 Z"/><line class="tg-skillevaeg" x1="200" y1="48" x2="200" y2="210"/><rect class="tg-hylde" x="124" y="64" width="64" height="56"/><rect class="tg-hylde" x="212" y="64" width="64" height="56"/><rect class="tg-kasse" x="114" y="140" width="10" height="34"/><rect class="tg-kasse" x="276" y="140" width="10" height="34"/><rect class="tg-profil" x="76" y="80" width="24" height="34"/><line class="tg-skillevaeg" x1="100" y1="96" x2="110" y2="96"/><rect class="tg-profil" x="300" y="80" width="24" height="34"/><line class="tg-skillevaeg" x1="290" y1="96" x2="300" y2="96"/><rect class="tg-hylde" x="104" y="204" width="192" height="12"/><rect class="tg-hylde" x="122" y="216" width="30" height="16"/><rect class="tg-hylde" x="248" y="216" width="30" height="16"/><line class="tg-gulvlinje" x1="20" y1="232" x2="380" y2="232"/><g class="tg-call"><line x1="244" y1="92" x2="300" y2="44"/><circle cx="244" cy="92" r="3"/><text class="tg-call__navn" x="390" y="20" text-anchor="end">Film på ruderne</text><text class="tg-call__under" x="390" y="34" text-anchor="end">intet krav til lys</text></g><g class="tg-call"><line x1="88" y1="80" x2="60" y2="44"/><circle cx="88" cy="80" r="3"/><text class="tg-call__navn" x="10" y="20">Spejl i hver side</text><text class="tg-call__under" x="10" y="34">påbudt på varebil N1</text></g><text class="tg-lille" x="20" y="248">SET BAGFRA · SKEMATISK</text></svg>`,
          tekst: `Skematisk. Ruderne bag føreren har intet krav til lysgennemgang, og varebilen skal have et udvendigt spejl i hver side. Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003 og 10.03.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Varebil og personbil har forskellige regler",
        tekst: [
          `Personbiler har en regel, som varebiler ikke har. I en personbil M1 må der ikke sidde genstande i førerens synsfelt bagud og skråt bagud, som reducerer udsynet unødigt.`,
          `Reklamer og uigennemsigtig film i det synsfelt reducerer udsynet unødigt. Solfilm, solgardin, nakkestøtte og spoiler gør ikke.`,
          `For en varebil N1 nævner detailforskrifterne kun spejlene, og bilen skal have et udvendigt førerspejl i hver side. En personbil skal have et udvendigt spejl i hver side og et indvendigt spejl, medmindre det indvendige spejl ikke giver noget udsyn bagud på grund af bilens opbygning.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Regel", "Varebil N1", "Personbil M1"],
          raekker: [
            ["Solfilm på ruderne bag føreren", "Intet krav til lysgennemgang", "Reducerer ikke udsynet unødigt"],
            ["Reklame og uigennemsigtig film i synsfeltet bagud", "Ikke nævnt i pkt. 10.03.024", "Reducerer udsynet unødigt"],
            ["Udvendigt førerspejl", "I hver side", "I hver side"],
            ["Indvendigt førerspejl", "Ikke nævnt i pkt. 10.03.024", "Påbudt, medmindre det ikke giver udsyn bagud"]
          ],
          note: `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003, 10.03.021 og 10.03.024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til selve ruden",
        tekst: [
          `Filmen sidder på en rude, der selv skal opfylde krav. Ruder og vindskærme skal være af klart sikkerhedsglas, og genstande set gennem forruden må ikke fremstå forvrængede eller utydelige.`,
          `I en bil skal forruden være af lamineret glas, der er godkendt efter FN-regulativ 43 eller lavet efter den amerikanske standard FMVSS 205. De andre ruder skal være af sikkerhedsglas, og en bil med forrude skal have afrimning og afdugning.`
        ],
        kort: [
          ["Lamineret glas", "Glas i lag med en mellemfolie. Forruden i en bil skal være af lamineret glas."],
          ["Hærdet glas", "Sikkerhedsglas, som detailforskrifterne godkender til ruder og vindskærme."],
          ["Splintsikkert plast", "Det tredje materiale, reglerne regner som sikkerhedsglas."]
        ],
        efter: [
          `Kilde: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003 og 10.03.020</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mørkhed og lysgennemgang",
        tekst: [
          `Solfilm sælges efter, hvor meget lys den slipper igennem. Tint N’ Wrap Solutions laver film med 50 %, 35 %, 20 % og 5 % lysgennemgang, og Solfilm.dk tilbyder typisk 5 %, 20 % og 30 %. KBH Solfilm deler filmen op i mørk, mellem og lys.`,
          `Solfilm.dk beskriver 5 % som næsten limousinesort. Med 20 % kan man på afstand se omridset af personer i bilen, men ikke hvem det er. Firmaet skriver, at mange bilfabrikanter lægger en toning i glasset, der svarer til 20 %.`,
          `Alle filmene ligger under de 70 %, som forruden og de forreste sideruder skal have. En film med mere end 70 % må alligevel ikke sidde der, for påklæbet film er forbudt på de ruder uanset lysgennemgangen.`
        ],
        figur: {
          type: "soejler",
          enhed: "%",
          max: 100,
          data: [
            ["Krav til forrude og forreste sideruder", 70, "mindst"],
            ["Film med 50 %", 50, "Tint N’ Wrap"],
            ["Film med 35 %", 35, "Tint N’ Wrap"],
            ["Film med 20 %", 20, "Tint N’ Wrap og Solfilm.dk"],
            ["Film med 5 %", 5, "Tint N’ Wrap og Solfilm.dk"]
          ],
          note: `Påklæbet film er ikke tilladt på forruden og de forreste sideruder, uanset lysgennemgangen. Kilder: <a href="${BEK}" rel="noopener">detailforskrifterne pkt. 10.03.003 og 10.03.004</a>, <a href="${TNW}" rel="noopener">Tint N’ Wrap Solutions</a> og <a href="${SF}" rel="noopener">Solfilm.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Filmtyper",
        tekst: [
          `Solfilm til biler findes i flere typer, og forskellen ligger i, hvad filmen er lavet af. Solfilm.dk bruger som standard en farvet film uden metal, som firmaet kalder Premium Dyed. Firmaet begrunder valget med, at film med metal kan forstyrre signaler fra mobiltelefoner og andet elektronisk udstyr.`,
          `Solfilm.dk kalder nanokeramisk film sin topmodel. Firmaet skriver, at den har op til 50 % bedre varmeafvisning og UV-beskyttelse end en standardfilm og heller ikke indeholder metal.`,
          `Solfilm.dk nævner også andre typer. Metalliseret film afviser varmen effektivt, men kan give spejlinger og forstyrre signaler. Statisk film klæber uden lim og er en midlertidig løsning, der er nem at sætte på og tage af.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Filmtype", "Materiale", "Kendetegn"],
          raekker: [
            ["Farvet film (Premium Dyed)", "Uden metal", "Standard hos Solfilm.dk"],
            ["Nanokeramisk film", "Uden metal", "Op til 50 % bedre varmeafvisning og UV-beskyttelse end standardfilm"],
            ["Keramisk film", "Uden metal", "Stærk beskyttelse mod varme og UV"],
            ["Metalliseret film", "Med metal", "Kan give spejlinger og forstyrre signaler"],
            ["Kulstoffilm", "Kulstof uden metallisk skær", "God UV-beskyttelse"],
            ["Statisk film", "Klæber uden lim", "Midlertidig og nem at fjerne"]
          ],
          note: `Kilde: <a href="${SF}" rel="noopener">Solfilm.dk: Solfilm til biler</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Varme, UV og indkig",
        tekst: [
          `Firmaerne sælger solfilm på tre ting, nemlig mindre varme, mindre UV-stråling og mindre indkig. Solfilm.dk skriver, at tonede ruder reducerer varmen i bilen med op til 80 %, at filmen blokerer 99 % af UV-strålerne, og at den fjerner 90 % af det direkte sollys.`,
          `Tallene er firmaets egne, og de varierer med filmtypen. Solfilm.dk skriver fx, at den nanokeramiske film afviser mere varme end standardfilmen.`,
          `VanKompagniet beskriver solfilm på bagdørene som en måde at få mindre sol ind og forhindre, at andre kan kigge ind i varerummet. Solfilm.dk skriver, at mindre indkig mindsker risikoen for indbrud. Mere om at sikre varerummet i <a href="/til-varebilen/varerumssikring/">varerumssikring</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Mindre varme i bilen", "op til 80", "%"],
            ["UV-stråling blokeret", "99", "%"],
            ["Direkte sollys fjernet", "90", "%"]
          ],
          note: `Solfilm.dk's egne tal for firmaets film. Kilde: <a href="${SF}" rel="noopener">Solfilm.dk</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Garanti og holdbarhed",
        tekst: [
          `Garantien på solfilm har to dele. Producenten giver garanti på selve filmen, og firmaet, der monterer den, giver garanti på arbejdet.`,
          `Solfilm.dk skriver, at der er 10 års producentgaranti på de fleste indvendige solfilm, også på firmaets farvede film, og at firmaet giver 2 års garanti på monteringen. Nogle keramiske film har livstidsgaranti. Tint N’ Wrap Solutions giver mindst 3 års garanti.`,
          `Solfilm.dk skriver også, at det er vigtigt at følge vaskeanvisningerne, især lige efter monteringen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Producentgaranti, farvet film, Solfilm.dk", 10, "år"],
            ["Garanti på monteringen, Solfilm.dk", 2, "år"],
            ["Garanti, Tint N’ Wrap Solutions", "mindst 3", "år"]
          ],
          note: `Kilder: <a href="${SF}" rel="noopener">Solfilm.dk</a> og <a href="${TNW}" rel="noopener">Tint N’ Wrap Solutions</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan foregår monteringen",
        tekst: [
          `Solfilm.dk monterer alle bagruder i ét stykke, så der ikke er synlige samlinger i udsynet. Firmaet har montagehaller i Århus og Silkeborg, og de 3M-certificerede montører kører rundt i hele landet.`,
          `Bilen afleveres om morgenen og kan typisk hentes senere samme dag. Den skal være nyvasket og ren indvendigt, så der er mindst muligt støv i og omkring bilen.`,
          `Private kunder kommer til KBH Solfilms monteringscenter i Ballerup, hvor firmaet ofte kan tilbyde en drive in-løsning. Bilforhandlere får besøg af firmaets montører.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Kontakt", "Firmaet skal kende bilens model og årgang."],
            ["Tilbud", "Firmaet gennemgår opgaven og aftaler en tid."],
            ["Accept", "Når tilbuddet er accepteret, aftales tid og sted for monteringen."],
            ["Værkstedet", "Bilen afleveres nyvasket om morgenen og kan typisk hentes samme dag."],
            ["Afhentning", "Firmaet og kunden gennemgår arbejdet sammen, og bilen betales."]
          ]
        },
        efter: [
          `Kilde: <a href="${SF}" rel="noopener">Solfilm.dk</a> og <a href="${KBH}" rel="noopener">KBH Solfilm</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Priser hos VanKompagniet og KBH Solfilm",
        tekst: [
          `Alle priser på siden er uden moms, bortset fra CPH Wraps og Solfilm.dk's i næste afsnit. Priserne er fra den 7. oktober 2026.`,
          `VanKompagniet sælger solfilm til varebiler i tre faste pakker, og alle tre priser er med montering. Film på en bagklap koster 2.195 kr., to bagdøre koster 2.295 kr., og en ombygget van koster 3.295 kr. Pakken til den ombyggede van dækker de bageste ruder fra B-stolpen og bagud.`,
          `KBH Solfilm har faste priser på High Performance-film. En bagrude koster 800 kr., tre ruder med bagrude og to sideruder koster 1.600 kr., og fem ruder med bagrude, to sideruder og to bagdøre koster 1.800 kr.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["VanKompagniet, 1 bagklap", 2195, "med montering"],
            ["VanKompagniet, 2 bagdøre", 2295, "med montering"],
            ["VanKompagniet, ombygget van", 3295, "med montering"],
            ["KBH Solfilm, bagrude", 800],
            ["KBH Solfilm, 3 ruder", 1600],
            ["KBH Solfilm, 5 ruder", 1800]
          ],
          note: `Kilder: <a href="${VK}" rel="noopener">VanKompagniet</a> og <a href="${KBH}" rel="noopener">KBH Solfilm</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Priser hos CPH Wrap og Solfilm.dk",
        tekst: [
          `CPH Wrap og Solfilm.dk skriver deres priser med moms. På CPH Wraps prisliste afhænger prisen af, hvor mange ruder der skal have film, og den starter ved 1.300 kr. for én bagrude. Prislisten oplyser ikke, om montering er med.`,
          `Solfilm.dk tager fra 2.250 kr. for en SUV eller stationcar og fra 2.500 kr. for en sedan. Firmaet skriver, at en normal montering på begge bagsideruder og bagruden koster 2.250 kr.`,
          `Solfilm.dk's priser gælder personbiler. Firmaet skriver, at det også leverer solfilm til varevogne, og at kunden skal oplyse bilens model og årgang for at få et tilbud.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["1 bagrude", 1300],
            ["3 ruder", 2000],
            ["5 ruder", 2500],
            ["7 ruder", 3000]
          ],
          note: `Fra-priser med moms. Kilde: <a href="${CPH}" rel="noopener">CPH Wrap prisliste</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hulfolie på bagruderne",
        tekst: [
          `Hulfolie er en folie med tryk, der er fuld af små huller. Udefra ser man trykket, og indefra kan man se ud gennem hullerne, fordi bagsiden bag hvert trykt felt er mørk.`,
          `Forhandleren Colourgraphics beskriver film, hvor 60 eller 70 % er folie og resten huller. Effekten virker, når det er lysere udenfor end indenfor. Når det er mørkt udenfor, og der er tændt lys indenfor, kan man se ind.`,
          `Der er ikke krav til lysgennemgang på ruderne bag førerens synsfelt på 180°, så detailforskrifterne har ikke en grænse for, hvor tæt folien må være. Montagegruppen sælger hulfolie fra 442 kr. pr. m².`,
          `Til sammenligning koster Montagegruppens kampagnefolie fra 195 kr. pr. m², og folie med laminat og 7 års holdbarhed koster fra 260 kr. pr. m². Reglerne for navn og CVR-nummer på bilen står i <a href="/til-varebilen/folie/bilreklame-paa-varebil/">bilreklame på varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="Snit gennem en rude med hulfolie på ydersiden. Udefra ser man trykket, og indefra ser man ud gennem de små huller, fordi bagsiden af folien er mørk."><text class="tg-fremhaev" x="20" y="22">Ude</text><text x="20" y="38">trykket ses</text><text class="tg-fremhaev" x="380" y="22" text-anchor="end">Inde</text><text x="380" y="38" text-anchor="end">udsyn gennem hullerne</text><rect class="tg-profil" x="200" y="50" width="12" height="128"/><rect class="tg-modul" x="186" y="50" width="8" height="10"/><rect class="tg-hylde" x="194" y="50" width="6" height="10"/><rect class="tg-modul" x="186" y="66" width="8" height="10"/><rect class="tg-hylde" x="194" y="66" width="6" height="10"/><rect class="tg-modul" x="186" y="82" width="8" height="10"/><rect class="tg-hylde" x="194" y="82" width="6" height="10"/><rect class="tg-modul" x="186" y="98" width="8" height="10"/><rect class="tg-hylde" x="194" y="98" width="6" height="10"/><rect class="tg-modul" x="186" y="114" width="8" height="10"/><rect class="tg-hylde" x="194" y="114" width="6" height="10"/><rect class="tg-modul" x="186" y="130" width="8" height="10"/><rect class="tg-hylde" x="194" y="130" width="6" height="10"/><rect class="tg-modul" x="186" y="146" width="8" height="10"/><rect class="tg-hylde" x="194" y="146" width="6" height="10"/><rect class="tg-modul" x="186" y="162" width="8" height="10"/><rect class="tg-hylde" x="194" y="162" width="6" height="10"/><circle class="tg-kasse" cx="350" cy="111" r="7"/><line class="tg-skinne-tynd" x1="343" y1="111" x2="120" y2="111"/><circle class="tg-kasse" cx="60" cy="135" r="7"/><line class="tg-skinne-tynd" x1="67" y1="135" x2="186" y2="135"/><g class="tg-call"><line x1="190" y1="151" x2="140" y2="190"/><circle cx="190" cy="151" r="3"/><text class="tg-call__navn" x="20" y="200">Trykt side udad</text><text class="tg-call__under" x="20" y="214">logo eller billede</text></g><g class="tg-call"><line x1="197" y1="167" x2="250" y2="190"/><circle cx="197" cy="167" r="3"/><text class="tg-call__navn" x="380" y="200" text-anchor="end">Mørk bagside indad</text><text class="tg-call__under" x="380" y="214" text-anchor="end">bag hvert trykt felt</text></g></svg>`,
          tekst: `Skematisk. Snit gennem en rude med hulfolie. Den stiplede linje fra højre går gennem et hul, og den fra venstre rammer trykket. Kilde: <a href="${CV}" rel="noopener">Colourgraphics om Contra Vision-film</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Solfilm og forsikringen",
        tekst: [
          `Kaskoforsikringen dækker bilen og fastmonteret udstyr, men eftermonteret udstyr kan have sin egen grænse. Hos GF Forsikring hører dekorationer, folie, speciallakering og solvisir til det udstyr, der ikke er fabriksmonteret.`,
          `GF dækker den slags udstyr med op til 18.948 kr. (basisår 2023) inklusive montering, arbejdsløn og moms. Summen kan forhøjes med tilvalget Ekstra udstyr. Mere om kaskoen i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`,
          `Hvad der gælder for folie og film på en leaset bil, kan du læse i <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`
        ],
        efter: [
          `Kilde: <a href="${GF}" rel="noopener">GF Forsikring, erhvervsbilforsikring, betingelser nr. 130-1, punkt 4.1.3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ved syn",
        tekst: [
          `Film på forruden eller de forreste sideruder er i strid med detailforskrifterne, bortset fra solstrimlen ved spejlet. Ruderne bag føreren har ingen krav til lysgennemgang, så film på dem er ikke i strid med reglerne for ruder.`,
          `Mere om synet i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal solfilmfirmaet vide",
    spoergsmaal_manchet: "Så passer prisen til bilens ruder.",
    spoergsmaal: [
      "Bilens model og årgang.",
      "Antal ruder bag føreren: bagdøre, bagklap, skydedør og sideruder.",
      "Om bilen har varmetråde i bagruderne.",
      "Ønsket mørkhed i procent og filmtype, fx film uden metal.",
      "Om der skal hulfolie med tryk på nogle af ruderne.",
      "Om bilen er leaset."
    ],
    faq: [
      ["Må man have tonede ruder foran på en varebil?", "Ikke med påklæbet film. Forruden og de forreste sideruder må ikke have uoriginalt solfilter, og de skal have mindst 70 % lysgennemgang. Toning i glasset fra fabrikken er lovlig, når kravet er opfyldt, og en strimmel øverst ved bakspejlet er tilladt."],
      ["Hvor mørke må bagruderne være på en varebil?", "Detailforskrifterne har ikke et krav til lysgennemgang for ruder bag førerens 180° synsfelt. En varebil skal have udvendigt spejl i begge sider."],
      ["Hvad koster solfilm på bagdørene?", "Fra 2.295 kr. med montering for to bagdøre hos VanKompagniet (oktober 2026)."],
      ["Hvor bred må solstrimlen på forruden være?", "Højst 0,10 m ned fra rudens øverste kant og højst 20 mm bredere end bakspejlet i hver side."],
      ["Gælder reglerne også for gule plader?", "Ja. Detailforskrifterne gælder bilen efter dens art, uanset om pladerne er hvide eller gule."],
      ["Må der sidde en solskærm uden på forruden?", "Ja, hvis den sidder over forruden, er solidt fastgjort, ikke generer førerens udsyn og ikke har skarpe kanter, der er til unødig fare."],
      ["Hvad koster solfilm på én bagrude?", "Den koster fra 1.300 kr. med moms på CPH Wraps privatprisliste (oktober 2026). KBH Solfilm tager 800 kr. for en bagrude."],
      ["Kan solfilm forstyrre telefonen?", "Solfilm.dk skriver, at film med metal kan forstyrre signaler fra mobiltelefoner og andet elektronisk udstyr. Firmaet bruger derfor som standard film uden metal, og den nanokeramiske film er også uden metal."],
      ["Hvor lang tid tager det at montere solfilm?", "Hos Solfilm.dk afleveres bilen om morgenen og kan typisk hentes senere samme dag. Bilen skal være nyvasket og ren indvendigt."],
      ["Hvor skal P-skiven sidde på forruden?", "En fastmonteret P-skive skal sidde nederst til højre på forruden. En GPS må sidde nederst i midten eller nederst til venstre."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025), pkt. 10.03", url: BEK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Solfilm", url: VK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Solfilm på 2 bagdøre", url: VK2, dato: "2026-10-07" },
      { navn: "VanKompagniet: Solfilm VAN", url: VKVAN, dato: "2026-10-07" },
      { navn: "VanKompagniet: Solfilm 1 bagklap", url: VKKLAP, dato: "2026-10-07" },
      { navn: "KBH Solfilm: Rudetoning og solfilm til biler", url: KBH, dato: "2026-10-07" },
      { navn: "Solfilm.dk: Solfilm til biler", url: SF, dato: "2026-10-07" },
      { navn: "Tint N’ Wrap Solutions: Priser", url: TNW, dato: "2026-10-07" },
      { navn: "CPH Wrap: Prisliste", url: CPH, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MG, dato: "2026-10-07" },
      { navn: "Colourgraphics: Contra Vision Perforated Window Film", url: CV, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Detailforskrifterne (BEK nr. 1484 af 03/12/2025) er udstedt af Færdselsstyrelsen den 3. december 2025.", BEK],
    ["Detailforskrifterne pkt. 10.03.002: der må ikke i førerens direkte synsfelt fremad og til siderne være genstande, der reducerer udsynet unødigt; en GPS gør det ikke, hvis den sidder nederst i midten eller i nederste venstre hjørne af forruden så langt nede mod instrumentbrættet som muligt; fastmonteret P-skive skal sidde nederst til højre og anordning til automatisk betaling nederst i midten af forruden.", BEK],
    ["Detailforskrifterne pkt. 10.03.020: forrude i bil skal være af lamineret glas godkendt efter FN-regulativ 43 (klasse II, III eller IV) eller udført efter FMVSS 205; andre ruder skal være af sikkerhedsglas; bil med forrude skal have afrimnings- og afdugningsanordning.", BEK],
    ["Detailforskrifterne pkt. 10.03.021: personbil M1 skal have et indvendigt førerspejl, medmindre det på grund af bilens opbygning ikke giver udsyn bagud, og et udvendigt førerspejl i hver side; montering af nakkestøtte, solgardin, solfilm eller spoiler anses ikke for at reducere udsynet bagud unødigt.", BEK],
    ["VanKompagniet: alle tre solfilmpakker (1 bagklap 2.195 kr., 2 bagdøre 2.295 kr., Solfilm VAN 3.295 kr., ekskl. moms) er inkl. montage; Solfilm VAN dækker de bagerste ruder i en ombygget van fra B-stolpen og bagud.", VKVAN],
    ["KBH Solfilm: High Performance solfilm koster 800 kr. for bagrude, 1.600 kr. for 3 ruder (bagrude og 2 sideruder) og 1.800 kr. for 5 ruder (bagrude, 2 sideruder og 2 bagdøre), eksl. moms; firmaet toner ikke fordøre; toning af de forreste ruder er kun lovlig som indfarvning fra fabrikken; filmen fås i mørk, mellem og lys.", KBH],
    ["KBH Solfilm: private kommer til monteringscentret i Ballerup, hvor firmaet oftest kan tilbyde en drive in-løsning; bilforhandlere får besøg af montørerne.", KBH],
    ["Solfilm.dk tilbyder typisk 5 %, 20 % og 30 % lysgennemgang; 5 % er næsten limo-sort; ved 20 % kan man på afstand se omridset af personer, men ikke hvem det er; mange bilfabrikanter lægger en toning i glasset, der svarer til 20 %.", SF],
    ["Solfilm.dk: der er ingen grænse for, hvor meget bagsideruderne og bagruden må tones, så længe bilen har fungerende sidespejle i begge sider; toner man langt ned, fx 5 %, mister man noget af orienteringsudsynet, især når det er mørkt.", SF],
    ["Solfilm.dk bruger som standard Premium Dyed film uden metal, fordi film med metal kan forstyrre signaler fra mobiltelefoner og andet elektrisk udstyr; nanokeramisk film er topmodellen med op til 50 % bedre varmeafvisning og UV-beskyttelse end standardfilm og er metalfri.", SF],
    ["Solfilm.dk: keramisk film er metalfri med stærk varme- og UV-beskyttelse; metalliseret film har effektiv varmeafvisning, men kan give spejlinger og signalforstyrrelse; kulstoffilm har god UV-beskyttelse og intet metallisk skær; statisk klæbende film er et midlertidigt alternativ uden lim, der er nemt at montere og fjerne.", SF],
    ["Solfilm.dk: tonede ruder reducerer bilens indvendige varme med op til 80 %, filmen blokerer 99 % af UV-strålerne og eliminerer 90 % af direkte sollys; mindre indkig mindsker risikoen for indbrud.", SF],
    ["Solfilm.dk: 10 års producentgaranti på de fleste indvendige solfilm og på Premium Dyed, 2 års garanti på montagen; nogle high-end typer, fx visse keramiske, har livstidsgaranti; det er vigtigt at følge vaskeanvisningerne, især umiddelbart efter montagen.", SF],
    ["Solfilm.dk monterer alle bagruder i ét stykke for at undgå synlige samlinger, har montagehaller i Århus og Silkeborg, og de 3M-certificerede montører kører i hele landet; bilen afleveres om morgenen, kan typisk hentes senere på dagen og skal være nyvasket og ren indvendigt.", SF],
    ["Solfilm.dk: SUV og stationcar fra 2.250 kr., sedan fra 2.500 kr.; en normal montage på begge bagsideruder og bagruden koster 2.250 kr. inkl. moms; firmaet leverer solfilm til busser, varevogne og personbiler, og kunden oplyser bilens årgang og model for at få et tilbud.", SF],
    ["Tint N’ Wrap Solutions laver solfilm med 50 %, 35 %, 20 % og 5 % lysgennemgang.", TNW],
    ["Montagegruppen: kampagnefolie fra 195 kr. pr. m², 7 års folie med laminat fra 260 kr. pr. m² og hulfolie fra 442 kr. pr. m², alle ekskl. moms.", MG],
    ["Colourgraphics (Contra Vision): perforeret film har trykte felter og gennemsigtige huller, typisk 60/40 eller 70/30 mellem folie og huller, med sort bagside bag de trykte felter; effekten virker, når det er lysere udenfor end indenfor, og vender om, når der er lys indenfor og mørkt udenfor.", CV],
    ["GF Forsikring punkt 4.1.3: ikke fabriksmonteret udstyr, herunder solvisir og dekorationer, folie og speciallakering, er dækket med indtil 18.948 kr. (basisår 2023) inkl. montering, arbejdsløn og moms; summen kan forhøjes med Ekstra udstyr.", GF]
  ]
};
