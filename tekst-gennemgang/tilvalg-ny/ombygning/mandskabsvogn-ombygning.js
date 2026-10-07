// Underside /til-varebilen/ombygning/mandskabsvogn-ombygning/ (07-10-2026)
var JV = `https://info.skat.dk/data.aspx?oid=1947288`;
var PJ = `https://motorst.dk/media/jl3aolmk/mandskabsvogn-0924.pdf`;
var FRIT = `https://motorst.dk/erhverv/registrering-og-omregistrering/fritagelse-for-registreringsafgift`;
var OMREG = `https://motorst.dk/erhverv/registrering-og-omregistrering/omregistrering`;
var BEK = `https://www.retsinformation.dk/eli/lta/2025/1685`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf`;

module.exports = {
  id: "ombygning/mandskabsvogn-ombygning",
  side: {
    slug: "mandskabsvogn-ombygning",
    navn: "Ombygning til mandskabsvogn",
    titel: "Ombygning til mandskabsvogn og dobbeltkabine",
    kort: `Sådan skal en kassevogn eller en dobbeltkabine være bygget, før den kan synes og få klausul som mandskabsvogn.`,
    beskrivelse: `Kassevogn med personkabine eller dobbeltkabine med lad: krav til sæder, skillevæg og flademål, syn, klausul og to sager fra Landsskatteretten.`,
    manchet: `En mandskabsvogn er en varebil med bagsæde, bygget til at køre et hold og deres materiel. Den kan bygges om fra en kassevogn med en ekstra personkabine eller være en dobbeltkabine med lad. Her er kravene til selve ombygningen, og reglerne for kørslen står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn regler</a>.`,
    visuel: {
      hero: "ombygning",
      kort_fortalt: [
        ["Personer i kabinen", "mindst 4", "med mindst ét sæde bag forsæderne"],
        ["Navn eller logo", "mindst 5 cm", "høje bogstaver på bilen"],
        ["Klausul", "op til 10 hverdage", "behandlingstid hos Motorstyrelsen"],
        ["Registreringssyn", "over 50 kg", "ændret egenvægt kræver syn"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad en mandskabsvogn er",
        tekst: [
          `Registreringsafgiftsloven fritager mandskabsvogne for registreringsafgift i § 2, stk. 1, nr. 9. Den juridiske vejledning beskriver en mandskabsvogn som et motorkøretøj, der utvivlsomt er konstrueret og særligt indrettet til at køre mandskab og materiel. I praksis er det en varebil med bagsæde, typisk med dobbeltkabine.`,
          `Motorstyrelsen kalder fritagelsen en undtagelse fra hovedreglen om, at der skal betales registreringsafgift. Derfor stiller reglerne krav til både indretningen og kørslen. Denne side handler om indretningen, altså det, opbyggeren skal bygge, og det, synsvirksomheden og Motorstyrelsen skal godkende.`,
          `Ordet "utvivlsomt" betyder noget i praksis. Landsskatteretten har afvist en bil, der opfyldte målene på papiret, fordi ombygningen ikke fremstod som en naturlig del af bilen. Sagen står længere nede på siden.`
        ]
      },
      {
        overskrift: "To konstruktioner kan godkendes",
        tekst: [
          `Den juridiske vejledning nævner to bilkonstruktioner, der kan godkendes som mandskabsvogn. Bilen skal være fremstillet som kassevogn eller som bil med dobbeltkabine fra fabrikken, men personkabinen i kassevognen og ladet på dobbeltkabinen må være bygget på senere.`
        ],
        kort: [
          ["Kassevogn med personkabine", "En originalt fremstillet kassevogn med ekstra personkabine i varerummet bag forsæderne. Personkabinen behøver ikke være monteret fra fabrikken, men den skal være adskilt fra varerummet med en fast adskillelse, som synsvirksomheden godkender."],
          ["Dobbeltkabine med åbent lad", "En originalt fremstillet bil med dobbeltkabine. Ladet behøver ikke være fra fabrikken, men det skal være et egentligt monteret lad, der opfylder synsvirksomhedernes krav. Kabinen skal have sidevinduer og almindeligt sædearrangement."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 214" role="img" aria-label="To varebiler set fra siden. Til venstre en kassevogn med en ekstra personkabine bag forsæderne og en fast skillevæg til varerummet. Til højre en bil med dobbeltkabine og et monteret lad."><g transform="translate(12,150) scale(0.72)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><path class="tg-kuffert" d="M178,-18 L178,-62 L188,-62 L188,-30 L206,-30 L206,-18 Z"/><path class="tg-modul" d="M136,-18 L136,-62 L146,-62 L146,-30 L164,-30 L164,-18 Z"/><line class="tg-doer" x1="126" y1="-114" x2="126" y2="-4"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><text class="tg-lille" x="57" y="114" text-anchor="middle">VARERUM</text><g transform="translate(206,150) scale(0.72)"><rect class="tg-kasse" x="0" y="-50" width="106" height="30"/><rect class="tg-hylde" x="0" y="-20" width="114" height="6"/><path class="tg-rum" d="M112,0 L112,-104 Q112,-110 118,-110 L198,-110 L224,-76 L236,-70 Q242,-67 242,-60 L242,-6 Q242,0 236,0 Z"/><rect class="tg-modul" x="124" y="-100" width="36" height="26"/><path class="tg-profil" d="M168,-100 L194,-100 L218,-74 L168,-74 Z"/><line class="tg-skinne-tynd" x1="164" y1="-110" x2="164" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><text class="tg-lille" x="244" y="129" text-anchor="middle">LAD</text><line class="tg-gulvlinje" x1="5" y1="162" x2="395" y2="162"/><text class="tg-fremhaev" x="12" y="186">Kassevogn med personkabine</text><text x="12" y="202">fast skillevæg bag kabinen</text><text class="tg-fremhaev" x="206" y="186">Dobbeltkabine med lad</text><text x="206" y="202">ladet skal opfylde synskrav</text></svg>`,
          tekst: `Skematisk. De to bilkonstruktioner, der kan godkendes som mandskabsvogn. Den fremhævede del er den ekstra personkabine. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Biler, der ikke kan godkendes",
        tekst: [
          `Almindelige last- og varebiler uden den særlige indretning kan ikke godkendes. Det gælder også pick-ups med udvidet førerhus, selvom der er sæder bag forsæderne.`,
          `Der er også et krav til bilmærket. Godkendelsen er betinget af, at samme fabriksmærke ikke markedsfører en bil med lignende karrosseri som personbil, fx som stationcar. Motorstyrelsens pjece fra september 2024 siger det samme med andre ord, nemlig at mandskabsvognen ikke må markedsføres som en personbil.`,
          `Kravet betyder, at det ikke er nok at se på den enkelte bil. Findes der fra samme mærke en personbil med lignende karrosseri, er betingelsen ikke opfyldt, uanset hvordan kabinen er bygget.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Bil", "Kan godkendes"],
          raekker: [
            ["Kassevogn med ekstra personkabine og fast adskillelse", "ja"],
            ["Bil med dobbeltkabine og monteret lad", "ja"],
            ["Pick-up med udvidet førerhus", "nej"],
            ["Last- eller varebil uden særlig indretning", "nej"],
            ["Mærket sælger lignende karrosseri som personbil", "nej"]
          ],
          note: `Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a> og <a href="${PJ}" rel="noopener">Motorstyrelsen: Mandskabsvogne, september 2024</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Krav til indretningen",
        tekst: [
          `Den juridiske vejledning og Motorstyrelsens pjece stiller de samme krav til indretningen. Kravene gælder, uanset om kabinen sidder i bilen fra fabrikken, eller en opbygger har bygget den ind bagefter.`
        ],
        punkter: [
          `Personkabinen skal kunne tage mindst 4 personer med mindst ét sæde bag forsæderne.`,
          `Kabinen skal være adskilt fra varerummet eller ladet.`,
          `Varerummet eller ladet skal have et større flademål end personkabinen.`,
          `Alle sæder skal opfylde detailforskrifterne for køretøjer for at tælle med.`,
          `Virksomhedens navn eller logo skal stå på bilen med bogstaver på mindst 5 cm. Se <a href="/til-varebilen/folie/">bilreklame og folie</a>.`,
          `Der må være soveplads i kabinen, men ikke køkken, håndvask eller anden indretning til ophold.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Kassevogn set fra siden med forsæder, et bagsæde, en fast skillevæg foran varerummet og virksomhedens navn på siden."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><path class="tg-kuffert" d="M178,-18 L178,-64 L188,-64 L188,-30 L208,-30 L208,-18 Z"/><path class="tg-kuffert" d="M138,-18 L138,-64 L148,-64 L148,-30 L168,-30 L168,-18 Z"/><line class="tg-doer" x1="128" y1="-114" x2="128" y2="-4"/><rect class="tg-modul" x="22" y="-84" width="84" height="26"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><text class="tg-modul__tekst" x="144" y="133" text-anchor="middle">FIRMANAVN</text><text class="tg-lille" x="144" y="174" text-anchor="middle">VARERUM</text><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="106" y1="120" x2="60" y2="46"/><circle cx="106" cy="120" r="3"/><text class="tg-call__navn" x="5" y="24">Navn eller logo</text><text class="tg-call__under" x="5" y="38">bogstaver mindst 5 cm</text></g><g class="tg-call"><line x1="208" y1="110" x2="208" y2="46"/><circle cx="208" cy="110" r="3"/><text class="tg-call__navn" x="170" y="24">Fast skillevæg</text><text class="tg-call__under" x="170" y="38">godkendes ved syn</text></g><g class="tg-call"><line x1="223" y1="150" x2="330" y2="46"/><circle cx="223" cy="150" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Bagsæde</text><text class="tg-call__under" x="395" y="38" text-anchor="end">mindst ét sæde</text></g><text class="tg-lille" x="5" y="244">MINDST 4 PERSONER, ÉT SÆDE BAG FORSÆDERNE</text></svg>`,
          tekst: `Skematisk. En kassevogn med ekstra personkabine, fast skillevæg og virksomhedens navn på siden. Kilder: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a> og <a href="${PJ}" rel="noopener">Motorstyrelsen: Mandskabsvogne</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sæderne skal kunne bruges",
        tekst: [
          `Alle sæder skal opfylde kravene i detailforskrifterne for køretøjer for at tælle med i de fire pladser. Sæderne skal også kunne bruges, når bilen bliver kontrolleret, og det har Landsskatteretten taget stilling til.`,
          `I SKM2024.143.LSR var der monteret en vandret plade til materiel på det ene af bilens fire sæder. Pladen var fastgjort med en møtrik i en reol, som selskabet havde monteret fast i personkabinen. Landsskatteretten fandt, at bilen ikke var indrettet til mindst fire personer, fordi det ene sæde ikke umiddelbart kunne bruges, og stadfæstede Motorstyrelsens afgørelse om afgift.`,
          `Selskabet foreslog i stedet at betale afgift efter reglerne for varebiler. Det afviste Landsskatteretten, fordi bilen heller ikke opfyldte betingelserne for en varebil på kontroltidspunktet. Du kan læse om reoler og indretning i <a href="/til-varebilen/indretning/">indretning</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Personkabine set oppefra med fire sæder. En plade til materiel dækker det ene sæde og er fastgjort i en reol."><rect class="tg-rum" x="20" y="20" width="220" height="150"/><rect class="tg-kuffert" x="40" y="35" width="50" height="50"/><rect class="tg-kuffert" x="40" y="105" width="50" height="50"/><rect class="tg-kuffert" x="140" y="35" width="50" height="50"/><rect class="tg-kuffert" x="140" y="105" width="50" height="50"/><rect class="tg-modul" x="134" y="99" width="62" height="62"/><text class="tg-modul__tekst" x="142" y="134">PLADE</text><rect class="tg-hylde" x="205" y="30" width="25" height="130"/><g class="tg-call"><line x1="217" y1="60" x2="258" y2="46"/><circle cx="217" cy="60" r="3"/><text class="tg-call__navn" x="260" y="44">Reol</text><text class="tg-call__under" x="260" y="58">i personkabinen</text></g><g class="tg-call"><line x1="190" y1="150" x2="258" y2="126"/><circle cx="190" cy="150" r="3"/><text class="tg-call__navn" x="260" y="120">Plade til materiel</text><text class="tg-call__under" x="260" y="134">fastgjort i reolen</text></g><text class="tg-lille" x="20" y="186">SET OPPEFRA, FRONT TIL VENSTRE</text></svg>`,
          tekst: `Skematisk. En personkabine med fire sæder, hvor en plade til materiel dækker det ene sæde som i SKM2024.143.LSR. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Soveplads, men ikke køkken",
        tekst: [
          `En mandskabsvogn må have soveplads i kabinen. Bilen skal stadig bruges udelukkende erhvervsmæssigt, og der må ikke være andet udstyr eller anden indretning til ophold og beboelse, fx køkken eller håndvask.`,
          `Soveplads er mest relevant for hold, der arbejder langt hjemmefra. Mandskabsvognen må dog som udgangspunkt ikke køre til et overnatningssted, skriver Den juridiske vejledning. Undtagelserne står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn regler</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["I personkabinen", "Tilladt"],
          raekker: [
            ["Soveplads", "ja"],
            ["Køkken", "nej"],
            ["Håndvask", "nej"],
            ["Anden indretning til ophold og beboelse", "nej"],
            ["Plade over et af de fire sæder", "nej, sædet tæller ikke"]
          ],
          note: `Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6, og SKM2024.143.LSR</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan måles flademålet",
        tekst: [
          `Varerummet eller ladet skal have et større flademål end personkabinen. Der måles i højde med forrudens underkant og vandret bagud, både på langs og på tværs. Personkabinen måles fra det punkt, hvor forruden rammer instrumentbrættet, og bagud til skillevæggen, på tværs uden hensyn til armlæn.`,
          `Varerummet eller ladet måles fra personkabinen til bagklappen og på tværs fra kant til kant. Hjulkasser trækkes ikke fra. Motorstyrelsen henviser til Færdselsstyrelsens synsvejledning og Den juridiske vejledning for detaljerne.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 440 240" role="img" aria-label="Kassevogn med personkabine set oppefra. Kabinen måles fra forruden ved instrumentbrættet til den faste skillevæg, varerummet fra skillevæggen til bagdørene, og hjulkasserne trækkes ikke fra.">
<defs><marker id="pil-mandskab-1" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs>
<rect x="40" y="60" width="350" height="120" rx="12" class="tg-rum"/>
<line x1="72" y1="66" x2="72" y2="174" class="tg-gulvlinje"/>
<rect x="88" y="72" width="30" height="36" class="tg-kasse"/>
<rect x="88" y="132" width="30" height="36" class="tg-kasse"/>
<rect x="138" y="72" width="28" height="96" class="tg-kasse"/>
<line x1="180" y1="60" x2="180" y2="180" class="tg-doer"/>
<rect x="270" y="60" width="60" height="16" class="tg-hylde"/>
<rect x="270" y="164" width="60" height="16" class="tg-hylde"/>
<g class="tg-maal"><line x1="72" y1="40" x2="180" y2="40" marker-start="url(#pil-mandskab-1)" marker-end="url(#pil-mandskab-1)"/><text x="126" y="33" text-anchor="middle">kabine</text></g>
<g class="tg-maal"><line x1="180" y1="40" x2="390" y2="40" marker-start="url(#pil-mandskab-1)" marker-end="url(#pil-mandskab-1)"/><text x="285" y="33" text-anchor="middle">varerum</text></g>
<g class="tg-maal"><line x1="410" y1="60" x2="410" y2="180" marker-start="url(#pil-mandskab-1)" marker-end="url(#pil-mandskab-1)"/><text x="416" y="124">B</text></g>
<g class="tg-call"><line x1="72" y1="170" x2="60" y2="208"/><circle cx="72" cy="170" r="3"/><text x="10" y="222" class="tg-call__navn">Forrude</text><text x="10" y="236" class="tg-call__under">ved instrumentbræt</text></g>
<g class="tg-call"><line x1="180" y1="170" x2="190" y2="208"/><circle cx="180" cy="170" r="3"/><text x="150" y="222" class="tg-call__navn">Fast skillevæg</text></g>
<g class="tg-call"><line x1="300" y1="172" x2="310" y2="208"/><circle cx="300" cy="172" r="3"/><text x="286" y="222" class="tg-call__navn">Hjulkasser</text><text x="286" y="236" class="tg-call__under">trækkes ikke fra</text></g>
</svg>`,
          tekst: `Skematisk. Begge rum måles på langs og på tværs i højde med forrudens underkant. Kabinen måles fra forruden ved instrumentbrættet til skillevæggen og varerummet fra skillevæggen til bagdørene. Hjulkasser trækkes ikke fra. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Det er placeringen af skillevæggen, der afgør begge mål. Flyttes væggen bagud for at give plads til flere sæder, vokser kabinen, og varerummet bliver mindre. Opbyggeren kan regne flademålene ud på tegningen, før væggen bliver monteret.`
        ]
      },
      {
        overskrift: "Et forlænget lad var ikke nok",
        tekst: [
          `I SKM2025.140.LSR havde en forhandler solgt en Ford Ranger Double Cab med åbent lad. Fra fabrikken var ladets flademål ikke større end personkabinens, så bilen kunne ikke markedsføres som en afgiftsfri mandskabsvogn.`,
          `Forhandleren fik derfor ladet forlænget på en karrosserifabrik. Den bageste fjæl blev taget af, og i stedet kom der en metalkant på, som gjorde ladet 8 cm længere. Kanten var cirka halvt så høj som de originale sidefjæle og havde en anden farve.`,
          `Efter forlængelsen var ladet større end kabinen. Landsskatteretten fandt alligevel, at forlængelsen ikke fremstod som en naturlig og integreret del af bilen. Retten havde heller ingen oplysninger om, hvad køberen skulle bruge bilen til, eller om forlængelsen skyldtes et behov for at køre materiel.`,
          `Bilen var derfor ikke utvivlsomt konstrueret og særligt indrettet til mandskab og materiel, og den fik ikke afgiftsfritagelse.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 222" role="img" aria-label="Pick-up med dobbeltkabine set fra siden. Bag på ladet sidder en lav metalkant, der gør ladet 8 centimeter længere end fra fabrikken."><defs><marker id="pil-mandskab-2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(96,160)"><rect class="tg-kasse" x="0" y="-52" width="108" height="32"/><rect class="tg-hylde" x="0" y="-20" width="114" height="6"/><rect class="tg-modul" x="-12" y="-36" width="12" height="16"/><path class="tg-rum" d="M112,0 L112,-104 Q112,-110 118,-110 L198,-110 L224,-76 L236,-70 Q242,-67 242,-60 L242,-6 Q242,0 236,0 Z"/><rect class="tg-profil" x="124" y="-100" width="36" height="26"/><path class="tg-profil" d="M168,-100 L194,-100 L218,-74 L168,-74 Z"/><line class="tg-skinne-tynd" x1="164" y1="-110" x2="164" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="177" x2="395" y2="177"/><g class="tg-call"><line x1="90" y1="130" x2="60" y2="62"/><circle cx="90" cy="130" r="3"/><text class="tg-call__navn" x="5" y="40">Metalkant, 8 cm</text><text class="tg-call__under" x="5" y="54">halvt så høj, anden farve</text></g><g class="tg-call"><line x1="250" y1="90" x2="300" y2="62"/><circle cx="250" cy="90" r="3"/><text class="tg-call__navn" x="395" y="40" text-anchor="end">Personkabine</text><text class="tg-call__under" x="395" y="54" text-anchor="end">større end ladet fra fabrikken</text></g><g class="tg-maal"><line x1="84" y1="196" x2="204" y2="196" marker-start="url(#pil-mandskab-2)" marker-end="url(#pil-mandskab-2)"/><text x="144" y="214" text-anchor="middle">lad</text></g><g class="tg-maal"><line x1="210" y1="196" x2="320" y2="196" marker-start="url(#pil-mandskab-2)" marker-end="url(#pil-mandskab-2)"/><text x="265" y="214" text-anchor="middle">kabine</text></g></svg>`,
          tekst: `Skematisk. Ladet i SKM2025.140.LSR efter forlængelsen. Målene er ikke tegnet målfast. Kilde: <a href="${JV}" rel="noopener">Den juridiske vejledning, afsnit I.A.1.3.6</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Syn efter ombygningen",
        tekst: [
          `Ekstra sæder og en fast skillevæg ændrer bilens indretning. Ændres egenvægten med mere end 50 kg, eller ændres andre registrerede tekniske data, fx antal siddepladser, skal bilen godkendes ved et registreringssyn, før den tages i brug.`,
          `Synsvirksomheden godkender også den faste adskillelse mellem kabinen og varerummet. På en dobbeltkabine skal ladet opfylde synsvirksomhedernes krav. Reglerne om registreringssyn står i § 5 i bekendtgørelsen om godkendelse og syn af køretøjer, og hele forløbet står i <a href="/til-varebilen/ombygning/godkendelse-af-ombygning/">godkendelse af ombygning</a>.`
        ]
      },
      {
        overskrift: "Klausul fra Motorstyrelsen",
        tekst: [
          `En mandskabsvogn er fritaget for registreringsafgift efter registreringsafgiftslovens § 2, stk. 1, nr. 9. Fritagelsen står som en klausul i Motorregistret, og den skal være på, før bilen indregistreres. Motorstyrelsen beskriver en klausul som en anmærkning i Motorregistret, der fx fritager en bil for registreringsafgift.`
        ],
        punkter: [
          `<strong>Ansøgning.</strong> Blanket 21.022 A, Søg om fritagelse eller nedsættelse af registreringsafgift.`,
          `<strong>Registreringsattest.</strong> Har bilen været registreret før, skal der en kopi af hele forsiden af den seneste registreringsattest med.`,
          `<strong>Behandlingstid.</strong> Op til 10 hverdage, skriver Motorstyrelsen. I perioder kan det tage længere tid.`,
          `<strong>Bruger og anmelder.</strong> Har de ikke samme cvr-nummer, skal begge underskrive.`,
          `<strong>Svar.</strong> Er ansøgningen sendt digitalt, kommer svaret i Digital Post.`,
          `<strong>Registrering.</strong> Bilen registreres derefter hos en nummerpladeoperatør. Køretøjer med klausul kan ikke omregistreres i Motorregistret.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ansøgning om klausul", "21.022 A", "blanket"],
            ["Behandlingstid, op til", 10, "hverdage"],
            ["Sletning af klausul", "21.101", "blanket"]
          ],
          note: `Bilen registreres hos en nummerpladeoperatør, når klausulen er på. Kilde: <a href="${FRIT}" rel="noopener">Motorstyrelsen: Fritagelse for registreringsafgift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Når anmelder og bruger er to virksomheder",
        tekst: [
          `Ansøgningen om klausul sendes af en anmelder. Er anmelderen og brugeren af bilen ikke tilknyttet samme cvr-nummer, skal begge skrive under på blanketten. Motorstyrelsen modtager først blanketten, når begge har skrevet under.`,
          `Anmelderen skriver brugerens e-mailadresse i den digitale blanket. Brugeren får en e-mail fra Virk med et link og skriver under med MitID. En medarbejder, der ikke er tegningsberettiget for virksomheden, bruger sit medarbejder-ID.`,
          `Ved de fleste biler med klausul følger klausulen brugeren, skriver Motorstyrelsen. Skifter bilen ejer hos en nummerpladeoperatør, skal der derfor ikke tilknyttes en ny klausul.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Klausulen i Motorregistret følger brugeren af bilen og ikke ejeren. Skifter bilen ejer, kommer der ikke en ny klausul. Har anmelder og bruger ikke samme cvr-nummer, skriver begge under på blanketten."><defs><marker id="pil-mandskab-3" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="110" y="6" width="180" height="46"/><text class="tg-fremhaev" x="200" y="26" text-anchor="middle">Klausul</text><text x="200" y="43" text-anchor="middle">i Motorregistret</text><rect class="tg-kasse" x="10" y="104" width="160" height="48"/><text class="tg-fremhaev" x="90" y="124" text-anchor="middle">Ejer</text><text x="90" y="141" text-anchor="middle">fx leasingselskabet</text><rect class="tg-modul" x="230" y="104" width="160" height="48"/><text class="tg-modul__tekst" x="310" y="124" text-anchor="middle">BRUGER</text><text class="tg-modul__tekst" x="310" y="141" text-anchor="middle">din virksomhed</text><line class="tg-pil" x1="250" y1="52" x2="294" y2="98" marker-end="url(#pil-mandskab-3)"/><text x="280" y="72">følger brugeren</text><line class="tg-skinne-tynd" x1="150" y1="52" x2="104" y2="104"/><text x="122" y="70" text-anchor="end">ejerskifte</text><text x="122" y="84" text-anchor="end">uden ny klausul</text><text x="200" y="180" text-anchor="middle">Har anmelder og bruger ikke samme cvr-nummer,</text><text x="200" y="196" text-anchor="middle">skriver begge under på blanket 21.022 A.</text></svg>`,
          tekst: `Skematisk. Hvem klausulen følger, og hvem der skriver under. Kilder: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a> og <a href="${FRIT}" rel="noopener">Motorstyrelsen: Fritagelse for registreringsafgift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det må bilen bruges til",
        tekst: [
          `Mandskabsvognen må kun køre materiel, værktøj og materialer til og fra virksomhedens arbejdspladser og personer, der arbejder i ejerens eller brugerens virksomhed. Privat personbefordring er ikke tilladt.`,
          `Der er ikke krav om, at mandskab og materiel køres på samme tid, så også en virksomhed uden ansatte kan have en mandskabsvogn. Bilen må ikke bruges til egentlig vognmandskørsel, og den må kun køre i den virksomheds interesse, der er registreret som ejer eller bruger.`,
          `Kørsel mellem virksomheden og en privat bopæl er som hovedregel privat kørsel. Undtagelserne, fx for vagtordninger, står i <a href="/haandbogen/mandskabsvogn-regler/">mandskabsvogn regler</a>. Skal bilen også køre privat, er papegøjeplader på en almindelig varebil en anden vej, se <a href="/haandbogen/papegoejeplader/">papegøjeplader</a>.`
        ]
      },
      {
        overskrift: "Ombygning af en leaset bil",
        tekst: [
          `På en leaset bil er det leasingselskabet, der ejer bilen, og aftalen afgør, om den må bygges om. Det gælder også, om kabinen skal tages ud igen, når bilen afleveres.`,
          `Ayvens fakturerer ulovlige konstruktionsændringer med 2.500 kr. uden moms plus udbedring. Beløbet står i Ayvens' gebyrliste fra juni 2025.`
        ]
      },
      {
        overskrift: "Hvem hæfter for afgiften",
        tekst: [
          `For afgiften hæfter den, der ejer bilen, når afgiftspligten opstår. I SKM2023.391.LSR hæftede leasingselskabet for registreringsafgiften, fordi det var registreret ejer, da bilen blev kontrolleret. Leasingaftalen regulerer kun forholdet mellem leasingselskab og bruger, fandt Landsskatteretten.`,
          `Ejeren hæfter dog ikke, hvis bilen er taget i brug på færdselslovens område, uden at ejeren vidste eller burde have vidst det. Føreren og brugeren hæfter også, når de bruger bilen på en måde, der ligger uden for reglerne.`,
          `Kører en ansat i strid med reglerne, anses ejeren for at vide det, skriver Den juridiske vejledning. Begrundelsen er, at ejeren kan give instrukser om, hvordan bilen må bruges.`
        ]
      },
      {
        overskrift: "Når betingelserne ikke længere er opfyldt",
        tekst: [
          `Opfylder bilen ikke længere betingelserne for mandskabsvogn, skal ejeren betale afgift efter reglerne for personbiler eller varebiler, alt efter hvilke betingelser bilen opfylder, skriver Den juridiske vejledning. Opfylder bilen ikke betingelserne for at blive registreret som varebil, betales afgiften efter reglerne for personbiler.`,
          `Motorstyrelsens pjece skriver, at afgiften bliver opkrævet efter reglerne for personbiler, når en kontrol viser, at reglerne for indretning og brug ikke er overholdt. Betingelserne gælder altså hele tiden og ikke kun den dag, bilen bliver godkendt.`,
          `En klausul slettes med blanket 21.101, Søg om sletning af klausul, afgiftsfritagelse mv.`
        ]
      },
      {
        overskrift: "Fra ombygning til nummerplader",
        tekst: [
          `Rækkefølgen er den samme, uanset om bilen er ny eller brugt. Klausulen skal være på, før bilen indregistreres. Skal der betales registreringsafgift, skal det ske, før bilen kan registreres.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Aftale med ejeren", "Er bilen leaset, afgør aftalen med leasingselskabet, om den må bygges om."],
            ["Ombygning", "Bilen får en personkabine med fast skillevæg og plads til mindst 4."],
            ["Registreringssyn", "Synsvirksomheden godkender adskillelsen og de ændrede data."],
            ["Klausul", "Send blanket 21.022 A til Motorstyrelsen. Det tager op til 10 hverdage."],
            ["Nummerplader", "Bilen registreres hos en nummerpladeoperatør."]
          ]
        }
      }
    ],
    spoergsmaal_titel: "Det skal opbyggeren vide",
    spoergsmaal_manchet: "Så kan opbyggeren bygge kabinen, så den kan synes og klausuleres.",
    spoergsmaal: [
      "Bilens mærke, model og længde, og om det er kassevogn eller dobbeltkabine.",
      "Hvor mange personer kabinen skal tage, og hvor mange sæder der skal sidde bag forsæderne.",
      "Mål på personkabine og varerum, så varerummet ender med det største flademål.",
      "Om kabinen skal have soveplads.",
      "Hvordan virksomhedens navn eller logo skal stå på bilen.",
      "Om opbyggeren står for registreringssynet.",
      "Om bilen er leaset, og om leasingselskabet har godkendt ombygningen."
    ],
    faq: [
      ["Kan man bygge en kassevogn om til mandskabsvogn?", "Ja. En originalt fremstillet kassevogn med ekstra personkabine i varerummet kan godkendes. Kabinen behøver ikke være fra fabrikken, men skal have en fast adskillelse til varerummet, godkendt af synsvirksomheden."],
      ["Hvor mange skal kunne sidde i en mandskabsvogn?", "Mindst 4 personer, med mindst ét sæde bag forsæderne. Alle sæder skal opfylde detailforskrifterne for at tælle med."],
      ["Kan en pick-up med udvidet førerhus være mandskabsvogn?", "Nej. Den juridiske vejledning udelukker pick-ups med udvidet førerrum."],
      ["Skal en ombygget mandskabsvogn synes?", "Ja, når egenvægten ændres med mere end 50 kg, eller registrerede data som antal siddepladser ændres. Så skal den godkendes ved et registreringssyn."],
      ["Hvordan søger man om klausul på en mandskabsvogn?", "Med Motorstyrelsens blanket 21.022 A. Behandlingstiden er op til 10 hverdage, og bilen registreres derefter hos en nummerpladeoperatør."],
      ["Må der sidde en reol i personkabinen i en mandskabsvogn?", "Den juridiske vejledning nævner SKM2024.143.LSR, hvor en plade til materiel var fastgjort over et af de fire sæder med en møtrik i en reol. Bilen blev ikke anset for indrettet til fire personer."],
      ["Må en mandskabsvogn have soveplads?", "Ja. Der må være soveplads i kabinen, men ikke køkken, håndvask eller anden indretning til ophold og beboelse."],
      ["Kan man forlænge ladet for at få en dobbeltkabine godkendt?", "Ikke nødvendigvis. I SKM2025.140.LSR blev ladet på en Ford Ranger Double Cab forlænget med 8 cm, så det blev større end kabinen. Landsskatteretten fandt, at forlængelsen ikke fremstod som en naturlig del af bilen, og bilen fik ikke afgiftsfritagelse."],
      ["Hvem hæfter for afgiften på en leaset mandskabsvogn?", "Som udgangspunkt den registrerede ejer. I SKM2023.391.LSR hæftede leasingselskabet, fordi det var registreret ejer på kontroltidspunktet."],
      ["Skal der ny klausul på, når en mandskabsvogn skifter ejer?", "Ved de fleste biler med klausul følger klausulen brugeren. Derfor skal der ikke tilknyttes en ny klausul, når bilen skifter ejer hos en nummerpladeoperatør."]
    ],
    kilder: [
      { navn: "Den juridiske vejledning: I.A.1.3.6 Mandskabsvogne", url: JV, dato: "2026-10-07" },
      { navn: "Den juridiske vejledning: I.A.1.2 Definitioner, afgiftspligt og udenlandske firmabiler", url: "https://info.skat.dk/data.aspx?oid=1947225", dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Mandskabsvogne (pjece, september 2024)", url: PJ, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Fritagelse for registreringsafgift", url: FRIT, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Omregistrering", url: OMREG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om godkendelse og syn af køretøjer, § 5", url: BEK, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Den juridiske vejledning: godkendelse som mandskabsvogn er betinget af, at køretøjer af samme fabriksmærke ikke bliver markedsført med lignende karrosseri i personvognsudførelse (stationcars og lignende).", JV],
    ["Motorstyrelsens pjece (september 2024): mandskabsvognen må ikke markedsføres som en personbil (stationcar eller lignende).", PJ],
    ["Motorstyrelsens pjece: fritagelsen for registreringsafgift for en mandskabsvogn er en undtagelse til hovedreglen om afgiftsberigtigelse; en klausul er en anmærkning i Motorregistret, der bruges til fx at fritage køretøjer for registreringsafgift.", PJ],
    ["Motorstyrelsens pjece henviser til Færdselsstyrelsens synsvejledning eller Den juridiske vejledning for, hvordan flademålet måles.", PJ],
    ["Den juridiske vejledning: mandskabsvogne kan som udgangspunkt ikke anvendes afgiftsfrit til kørsel til overnatningssteder.", JV],
    ["SKM2024.143.LSR: pladen var fastgjort med en møtrik i en reol, som selskabet havde fastmonteret i personkabinen; det ene sæde kunne umiddelbart ikke anvendes; Landsskatteretten fulgte ikke den subsidiære påstand om afgiftsberigtigelse som varebil, fordi bilen på kontroltidspunktet ikke opfyldte betingelserne herfor.", JV],
    ["SKM2025.140.LSR: fabriksmodellen af Ford Ranger Double Cab opfyldte ikke kravet om, at ladets flademål skal være større end personkabinen, og kunne som fabriksny ikke markedsføres som afgiftsfri mandskabsvogn; forhandleren fik ladet forlænget på en karrosserifabrik, hvor den bagerste fjæl blev afmonteret og erstattet af en metalkant, der forlængede ladet 8 cm, ca. halvt så høj som og i en anden farve end de originale sidefjæle.", JV],
    ["SKM2025.140.LSR: der forelå ingen oplysninger om køberens tiltænkte anvendelse af bilen eller om, hvorvidt forlængelsen var begrundet i behov for befordring af materiel; forlængelsen fremstod ikke som en naturlig og integreret del af køretøjet.", JV],
    ["Motorstyrelsen: har køretøjet tidligere været registreret, skal der vedhæftes en kopi af hele forsiden af den seneste registreringsattest; sagsbehandlingstiden er op til 10 hverdage og kan i perioder være længere; ved digital blanket svarer Motorstyrelsen i Digital Post.", FRIT],
    ["Motorstyrelsen: er anmelder og bruger ikke tilknyttet samme cvr-nummer, skal begge underskrive; anmelder oplyser brugerens e-mail i den digitale blanket, brugeren får en e-mail fra Virk og underskriver med MitID (medarbejder-ID, hvis man ikke er tegningsberettiget); Motorstyrelsen modtager først blanketten, når begge har underskrevet.", FRIT],
    ["Motorstyrelsen: skal der betales registreringsafgift af køretøjet, skal det ske, før køretøjet kan registreres.", FRIT],
    ["Motorstyrelsen: ved de fleste klausulerede køretøjer knytter klausulen sig til brugeren, så der skal ikke tilknyttes ny klausul ved ejerskifte hos en nummerpladeoperatør; køretøjer med klausul (fx mandskabsvogne) omregistreres hos en nummerpladeoperatør.", OMREG],
    ["Den juridiske vejledning: mandskabsvogne må kun bruges til transport til og fra virksomhedens arbejdspladser af materiel, værktøj og materialer og af personer, der arbejder i ejerens eller brugerens virksomhed; der er ikke krav om samtidig transport af mandskab og materiel, så virksomheder uden ansatte kan have en mandskabsvogn; den må ikke bruges til egentlig vognmandsvirksomhed og kun i den virksomheds interesse, der er registreret ejer eller bruger.", JV],
    ["Den juridiske vejledning: kørsel mellem virksomheden og den private bopæl betragtes normalt som privat personbefordring; for ansatte i en vagtordning er det tilladt at tage bilen med til privatadressen.", JV],
    ["Den juridiske vejledning: for afgiften hæfter den, der ejer køretøjet, når afgiftspligten indtræder; ejeren hæfter ikke, hvis køretøjet er taget i brug på færdselslovens område, uden at ejeren vidste eller burde have vidst det; føreren eller brugeren hæfter også ved brug uden for reglerne; når personer, der arbejder i virksomheden, bruger bilen i strid med reglerne, lægges det til grund, at ejeren er vidende herom, fordi ejeren kan fastsætte instrukser.", JV],
    ["Den juridiske vejledning: opfylder køretøjet ikke betingelserne for at blive registreret som varebil, afgiftsberigtiges det efter reglerne for personbiler. Motorstyrelsens pjece: konstateres det ved en kontrol, at betingelserne for indretning og anvendelse ikke er opfyldt, opkræves registreringsafgift efter reglerne for personbiler.", PJ]
  ]
};
