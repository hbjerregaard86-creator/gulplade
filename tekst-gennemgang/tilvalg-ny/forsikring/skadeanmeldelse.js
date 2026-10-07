// Underside /til-varebilen/forsikring/skadeanmeldelse/ (07-10-2026)
var FL = `https://www.retsinformation.dk/eli/lta/2026/118`;
var FAL = `https://www.retsinformation.dk/eli/lta/2015/1237`;
var FORL = `https://www.retsinformation.dk/eli/lta/2015/1238`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var IFF = `https://www.if.dk/globalassets/dk/skadesflyer.pdf`;
var FP = `https://www.forsikringogpension.dk/media/rt2lagsz/retningslinjer-for-forsikringsselskaber-og-autovaerksteder-ved-forsikringsskader-paa-biler-2025.pdf`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var AB = `https://www.almbrand.dk/erhverv/kundeservice/hjaelp/anmeld-skade/anmeld-skade_koretoj/`;
var ANKE = `https://www.ankeforsikring.dk/om-ankeforsikring/Sider/Om-at-klage.aspx`;

module.exports = {
  id: "forsikring/skadeanmeldelse",
  side: {
    slug: "skadeanmeldelse",
    navn: "Skadeanmeldelse",
    titel: "Skadeanmeldelse på varebil: frister og bilag",
    kort: `Fra uheldsstedet til udbetaling: oplysninger, frister, politianmeldelse, taksator, moms og klage. Og hvordan de store selskaber modtager skader.`,
    beskrivelse: `Skadeanmeldelse på varebil: pligter på uheldsstedet, frister, bilag, taksator, moms, opsigelse efter skade og klage. Med Tryg, If, GF, Codan og Alm. Brand.`,
    manchet: `En skade på varebilen skal anmeldes til forsikringsselskabet uden ophold. Her kan du se, hvad føreren skal gøre på uheldsstedet, hvilke oplysninger og bilag selskaberne beder om, og hvad loven siger om frister. Siden følger skaden videre gennem taksering, reparation, moms og udbetaling.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Anmeld skaden", "Uden ophold", "efter forsikringsaftalelovens § 21"],
        ["Udbetaling", "14 dage", "efter selskabet har oplysningerne"],
        ["Forældelse", "3 år", "fra kravet kunne gøres gældende"],
        ["Afvist skade", "mindst 1 år", "fra afvisningen, før kravet forældes"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "På uheldsstedet",
        tekst: [
          `Færdselslovens § 9 gælder alle, der bliver indblandet i et færdselsuheld, med eller uden egen skyld. Pligterne gælder den, der sidder bag rattet, også når bilen er virksomhedens.`,
          `Er nogen kommet til skade, skriver If i sin folder om trafikuheld, at du straks skal ringe 112. Derefter handler det om at begrænse skaden og få hjælp til de tilskadekomne.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Standse", "Straks, også uden egen skyld."],
            ["Hjælpe", "Yde hjælp til tilskadekomne og sikre færdslen."],
            ["Opgive navn og bopæl", "Til andre indblandede og til ejeren af skadet ejendom, hvis de beder om det."],
            ["Underrette politiet", "Hvis du har forvoldt ikke ubetydelig personskade. Er der tingskade, og er ingen til stede, underrettes skadelidte eller politiet."],
            ["Lade sporene ligge", "Ved dødsfald eller alvorlig personskade. Køretøjer, der er til fare, skal dog flyttes."]
          ]
        },
        efter: [
          `Kilder: <a href="${FL}" rel="noopener">Færdselsloven, LBK nr. 118 af 12/01/2026, § 9</a>, set den 4. oktober 2026, og <a href="${IFF}" rel="noopener">If: Trafikuheld, det skal du gøre</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sikr stedet og advar andre",
        tekst: [
          `Tryg skriver i sine betingelser, at en varebil, der må efterlades efter et uheld eller et nedbrud, så vidt muligt skal stå uden for kørebanen. Den må ikke holde til fare eller gene for den øvrige trafik.`,
          `Bilen skal afmærkes efter reglerne, fx med positionslys, havariblink og advarselstrekant. Holder den uheldigt på en motorvej, skal politiet eller vejmyndigheden have besked, og bilen skal fjernes hurtigst muligt.`,
          `If skriver, at advarselstrekanten sættes op 50 meter fra bilen på almindelige veje og 100 meter bag bilen på motorveje. If beder også føreren fjerne eventuelle vragdele fra vejen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Varebil holdt ind til siden med havariblink. En advarselstrekant står bag bilen, 50 meter væk på almindelig vej og 100 meter væk på motorvej."><defs><marker id="pil-skadeanmeldelse-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(240,128) scale(0.6)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="236" y="96" width="6" height="12"/><line class="tg-gulvlinje" x1="0" y1="138" x2="400" y2="138"/><path class="tg-modul" d="M40,136 L55,110 L70,136 Z"/><g class="tg-maal"><line x1="55" y1="154" x2="238" y2="154" marker-start="url(#pil-skadeanmeldelse-1)" marker-end="url(#pil-skadeanmeldelse-1)"/><text x="148" y="170" text-anchor="middle">50 m på almindelig vej, 100 m på motorvej</text></g><g class="tg-call"><line x1="55" y1="110" x2="55" y2="46"/><circle cx="55" cy="110" r="3"/><text class="tg-call__navn" x="5" y="24">Advarselstrekant</text><text class="tg-call__under" x="5" y="38">bag bilen</text></g><g class="tg-call"><line x1="239" y1="100" x2="300" y2="46"/><circle cx="239" cy="100" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Havariblink og lys</text><text class="tg-call__under" x="395" y="38" text-anchor="end">uden for kørebanen, hvis muligt</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${IFF}" rel="noopener">If: Trafikuheld, det skal du gøre</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 1</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Oplysninger fra modparten",
        tekst: [
          `Selskabet skal kunne finde modparten og vidnerne bagefter. Tryg beder om bilernes nummerplader, de involveredes navne og adresser og vidnernes navne og telefonnumre eller mail.`,
          `If anbefaler at dokumentere skaden, helst før bilerne bliver flyttet. Billeder af begge biler, omgivelserne og sigtbarheden viser senere, hvordan uheldet skete, og en skitse viser, hvor bilerne og de involverede stod.`
        ],
        punkter: [
          `<strong>Tid og sted.</strong> Dato, klokkeslæt og adresse.`,
          `<strong>Modparten.</strong> Navn, adresse, registreringsnummer, forsikringsselskab og policenummer.`,
          `<strong>Vidner.</strong> Navn og telefonnummer eller e-mail.`,
          `<strong>Fotos.</strong> Skaderne på begge biler, omgivelser, vejskilte, bremsespor og sigtbarhed.`,
          `<strong>Skitse.</strong> Bilernes og de involveredes placering.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Vejkryds set ovenfra med en varebil og en personbil efter et sammenstød. Fire steder er markeret til foto og noter."><line class="tg-gulvlinje" x1="0" y1="95" x2="170" y2="95"/><line class="tg-gulvlinje" x1="250" y1="95" x2="400" y2="95"/><line class="tg-gulvlinje" x1="0" y1="165" x2="170" y2="165"/><line class="tg-gulvlinje" x1="250" y1="165" x2="400" y2="165"/><line class="tg-gulvlinje" x1="170" y1="0" x2="170" y2="95"/><line class="tg-gulvlinje" x1="250" y1="0" x2="250" y2="95"/><line class="tg-gulvlinje" x1="170" y1="165" x2="170" y2="260"/><line class="tg-gulvlinje" x1="250" y1="165" x2="250" y2="260"/><line class="tg-skinne-tynd" x1="0" y1="130" x2="400" y2="130"/><line class="tg-skinne-tynd" x1="210" y1="0" x2="210" y2="260"/><rect class="tg-rum" x="70" y="135" width="95" height="24"/><rect class="tg-profil" x="172" y="104" width="24" height="44"/><line class="tg-skinne" x1="20" y1="140" x2="68" y2="140"/><line class="tg-skinne" x1="20" y1="154" x2="68" y2="154"/><line class="tg-gulvlinje" x1="262" y1="80" x2="262" y2="94"/><circle class="tg-kasse" cx="262" cy="72" r="8"/><g class="tg-call"><line x1="150" y1="140" x2="120" y2="52"/><circle cx="150" cy="140" r="3"/><text class="tg-call__navn" x="5" y="30">Foto af begge biler</text><text class="tg-call__under" x="5" y="44">før de flyttes</text></g><g class="tg-call"><line x1="262" y1="64" x2="280" y2="46"/><circle cx="262" cy="64" r="3"/><text class="tg-call__navn" x="270" y="24">Vejskilte</text><text class="tg-call__under" x="270" y="38">og sigtbarhed</text></g><g class="tg-call"><line x1="40" y1="147" x2="40" y2="206"/><circle cx="40" cy="147" r="3"/><text class="tg-call__navn" x="5" y="222">Bremsespor</text><text class="tg-call__under" x="5" y="236">og vragdele</text></g><g class="tg-call"><line x1="184" y1="150" x2="270" y2="206"/><circle cx="184" cy="150" r="3"/><text class="tg-call__navn" x="262" y="222">Modpartens reg.nr.</text><text class="tg-call__under" x="262" y="236">navn, selskab, vidner</text></g></svg>`,
          tekst: `Skematisk. Kilder: <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 1</a> og <a href="${IFF}" rel="noopener">If: Skadesflyer</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Ingen aftaler om skyld på stedet",
        tekst: [
          `Det er forsikringsselskabet, der tager stilling til ansvar og erstatning. Tryg skriver, at du ikke må indgå aftale om ansvar eller erstatning, før Tryg har godkendt det. GF skriver, at aftaler om reparation eller erstatningskrav ikke må træffes uden GF's samtykke.`,
          `Tryg skriver også, at du ikke må udbedre skaden eller fjerne beskadigede ting, før selskabet har godkendt det. Undtagelsen er en mindre reparation, der skal til, fordi bilen ellers er ulovlig at køre videre i.`,
          `Ved et uheld i udlandet udfylder parterne den internationale skadeanmeldelse på stedet, med en kopi til hver. Tryg skriver, at man aldrig skal skrive under på noget, man ikke forstår. Er man i tvivl, skriver man på blanketten, at man ikke forstår hele teksten. Mere om uheld uden for Danmark står i <a href="/til-varebilen/forsikring/forsikring-i-udlandet/">forsikring i udlandet</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Uden selskabets accept", "GF", "Tryg"],
          raekker: [
            ["Indgå aftale om ansvar eller erstatning", "nej", "nej"],
            ["Begynde en reparation", "nej", "nej"],
            ["Mindre reparation, når bilen ellers er ulovlig at køre i", "ikke nævnt", "ja"],
            ["Udbedre skaden eller fjerne beskadigede ting", "ikke nævnt", "nej"]
          ],
          note: `"Nej" betyder, at betingelserne kræver selskabets accept først. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 4.3 og 13.6</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, forsiden og afsnit 1, 11.1 og 11.3</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår politiet skal ind",
        tekst: [
          `Politiet skal ind i to slags sager. Færdselsloven kræver det ved personskade, og selskabernes betingelser kræver det ved tyveri, røveri og hærværk.`,
          `Tryg skriver, at tyveri og hærværk anmeldes til politiet i det land, hvor skaden skete. Har føreren været i kontakt med det lokale politi, beder Tryg føreren notere navnet på politistationen og et eventuelt journalnummer.`,
          `If beder dig kontakte politiet i flere situationer, hvor ingen er kommet alvorligt til skade. Det gælder en materiel skade over 50.000 kr., en udenlandsk modpart, en flugtbilist og skade på ejendom, hvor du ikke kender ejeren.`
        ],
        punkter: [
          `<strong>Personskade.</strong> Politiet underrettes ved ikke ubetydelig skade på en anden person, jf. færdselslovens § 9.`,
          `<strong>Tyveri, røveri og hærværk.</strong> GF, Tryg og Codan kræver, at det også anmeldes til politiet.`,
          `<strong>Tyveri i udlandet.</strong> Codan kræver anmeldelse til politiet i udlandet og i Danmark og en kvittering fra det udenlandske politi.`,
          `<strong>Ifs skadesflyer.</strong> If nævner også materiel skade over 50.000 kr., udenlandsk modpart og flugtbilist.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Situation", "Politiet skal ind", "Krav fra"],
          raekker: [
            ["Ikke ubetydelig skade på en anden person", "ja", "Færdselsloven, § 9"],
            ["Tyveri, røveri og hærværk", "ja", "GF, Tryg og Codan"],
            ["Tyveri i udlandet", "I udlandet og i Danmark", "Codan"],
            ["Materiel skade over 50.000 kr.", "Nævnt", "Ifs skadesflyer"],
            ["Udenlandsk modpart eller flugtbilist", "Nævnt", "Ifs skadesflyer"],
            ["Skade på ejendom, hvor ejeren ikke kendes", "Nævnt", "Ifs skadesflyer"]
          ],
          note: `Kilder: <a href="${FL}" rel="noopener">Færdselsloven, § 9</a>, <a href="${GF}" rel="noopener">GF, punkt 13.6</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.1</a>, <a href="${CODAN}" rel="noopener">Codan</a> og <a href="${IFF}" rel="noopener">If: Skadesflyer</a>, set den 4. oktober 2026. Rækken om ejendom er set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FL}" rel="noopener">Færdselsloven, § 9</a>, <a href="${GF}" rel="noopener">GF, punkt 13.6</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.1</a>, <a href="${CODAN}" rel="noopener">Codan</a> og <a href="${IFF}" rel="noopener">If: Skadesflyer</a>, set den 4. oktober 2026. Trygs krav om politistation og journalnummer står i afsnit 1, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Fristen for at anmelde",
        tekst: [
          `Efter forsikringsaftalelovens § 21 skal en forsikringsbegivenhed meddeles selskabet uden ophold. Sker det ikke, hæfter selskabet kun i det omfang, det ville have gjort med rettidig anmeldelse.`,
          `For tyveriforsikring og skadesforsikring af motorkøretøjer kan selskabet aftale strengere følger. GF og Tryg skriver straks i deres betingelser. Efter § 22 skal den sikrede give alle tilgængelige oplysninger om skaden.`,
          `Tryg skriver, at skaden skal anmeldes, også selvom den ser ud til at være af beskedent omfang. Er tyveri, røveri eller hærværk ikke anmeldt, kan retten til erstatning blive nedsat eller falde bort.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Når skaden er sket", "Du meddeler selskabet skaden uden ophold. GF og Tryg skriver \"straks\" i deres betingelser."],
            ["Ved anmeldelsen", "Du giver selskabet alle tilgængelige oplysninger om skaden."],
            ["For sen anmeldelse", "Selskabet hæfter kun for det, det ville have hæftet for, hvis skaden var anmeldt til tiden."],
            ["Når selskabet har oplysningerne", "Efter 14 dage kan du kræve erstatningen. Derefter løber der renter på beløbet."]
          ],
          note: `Kilder: <a href="${FAL}" rel="noopener">Forsikringsaftaleloven, §§ 21, 22 og 24</a>, <a href="${GF}" rel="noopener">GF, punkt 13.6</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.1</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${FAL}" rel="noopener">Forsikringsaftaleloven, §§ 21-22</a>, <a href="${GF}" rel="noopener">GF, punkt 13.6</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.1</a>, set den 4. oktober 2026. Trygs krav om at anmelde små skader står på forsiden af betingelserne, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dokumentation og bilag",
        tekst: [
          `Den, der kræver erstatning, skal kunne vise, at kravet er rigtigt. Tryg skriver, at du skal sandsynliggøre og dokumentere kravet og give alle oplysninger, der kan have betydning for bedømmelsen af skaden.`,
          `Selskabet kan forlange papirer, der viser, hvad bilen og udstyret er værd. Tryg nævner den originale købekontrakt, købsnotaen, finansierings- eller leasingaftalen og regninger. Kan kravet ikke dokumenteres, kan Tryg afvise det eller fastsætte erstatningen efter et skøn.`,
          `En faktura viser, hvad en eftermonteret reol, et skuffesystem eller andet ekstraudstyr kostede, og hvornår det blev købt. Reglerne for indretning i kaskoen står i <a href="/til-varebilen/forsikring/forsikring-af-indretning-og-udstyr/">forsikring af indretning og udstyr</a>.`,
          `Har virksomheden forsikret den samme skade i to selskaber, skal skaden anmeldes til begge. GF kalder det dobbeltforsikring, og selskaberne betaler så erstatningen i fællesskab.`
        ],
        kort: [
          ["Bilen", "Registreringsnummer, kilometerstand og eventuel leasingaftale."],
          ["Udstyret", "Købsnota eller faktura på indretning og ekstraudstyr."],
          ["Skaden", "Fotos, skitse, vidner og politiets journalnummer."]
        ],
        efter: [
          `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 11.1 og 11.2</a> og <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.10</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Sådan modtager selskaberne skader",
        tekst: [
          `Alle de store selskaber tager imod skadeanmeldelser online, og flere har en telefon til akutte skader. Ved anmeldelsen beder Tryg om registreringsnummeret og oplysninger om modpart og vidner.`,
          `Skal GF's redningsforsikring bruges i udlandet, går henvendelsen direkte til SOS International på telefon +45 70 10 50 52. Vejhjælp i Danmark og i udlandet står i <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ],
        tabel: {
          kolonner: ["Selskab", "Anmeldelse", "Bemærkning"],
          raekker: [
            ["Alm. Brand", "Online med MitID, ca. 5 minutter", "Akut skade: 35 47 35 00 døgnet rundt"],
            ["Codan", "Online døgnet rundt", "Sagen følges på Mit Codan"],
            ["GF", "Online eller 72 24 42 50", "Telefon hverdage 8.30-16.00"],
            ["Gjensidige", "Online", "Vejhjælp: 70 22 00 91"],
            ["If", "Online eller 70 12 12 22", "Svar som regel inden for 2-4 hverdage"],
            ["LB Erhverv", "Bilskader via AXA Forsikring", "33 12 66 00"],
            ["Tryg", "Online eller 70 11 20 20", "Reg.nr. og oplysninger om modpart og vidner"]
          ],
          note: `Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="https://www.gfforsikring.dk/erhverv/anmeld-skade/erhvervsbil/" rel="noopener">GF</a>, <a href="https://www.gjensidige.dk/erhverv/anmeld-skade" rel="noopener">Gjensidige</a>, <a href="https://www.if.dk/erhverv/anmeld-skade" rel="noopener">If</a>, <a href="https://www.lb.dk/anmeld-skade/erhverv" rel="noopener">LB</a> og <a href="https://tryg.dk/erhverv/anmeld-skade/tyveri-skade-ansvar-bil-og-varebil" rel="noopener">Tryg</a>, set den 4. oktober 2026. Ifs telefonnummer er fra <a href="${IFF}" rel="noopener">If: Skadesflyer</a>, set den 7. oktober 2026.`
        },
        efter: [
          `If opfordrer til at anmelde skaden, hvis du er i tvivl, og skriver, at en skade uden dækning ikke påvirker kundeforholdet. Kilde for SOS International: <a href="${GF}" rel="noopener">GF, punkt 13.6</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Reparation efter aftale",
        tekst: [
          `Tryg skal have besked, før bilen kommer på værksted, medmindre den straks skal bugseres eller nødrepareres. Både GF og Tryg kan selv anvise det værksted, der skal reparere bilen.`,
          `Tryg kan erstatte skaden på tre måder, nemlig ved reparation, ved genlevering eller med kontant erstatning. Vælger Tryg en reparation, bliver bilen sat i samme stand som før skaden.`
        ],
        punkter: [
          `<strong>Aftale først.</strong> Hos GF og Tryg må reparationen ikke begynde uden aftale med selskabet eller taksator.`,
          `<strong>Nødreparation.</strong> Tryg tillader mindre reparationer, hvis bilen ellers er ulovlig at køre videre i.`,
          `<strong>Værkstedsvalg.</strong> GF lader forsikringstageren vælge værksted, men kan anvise et. Tryg kan anvise et Tryg Reparationsværksted.`,
          `<strong>Små skader.</strong> Alm. Brand sender biler op til 3.500 kg til Smart Repair, hvor reparationen oftest tager 2-6 timer.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Anmeld skaden", "Du melder skaden til selskabet uden ophold."],
            ["Aftal reparationen", "Hos GF og Tryg må reparationen ikke begynde uden aftale med selskabet eller taksator."],
            ["Vælg værksted", "GF lader dig vælge værksted, men kan anvise et. Tryg kan anvise et Tryg Reparationsværksted."],
            ["Reparationen", "Alm. Brand sender små skader på biler op til 3.500 kg til Smart Repair, hvor reparationen oftest tager 2-6 timer."]
          ]
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 4.3</a>, <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.3</a>, <a href="${AB}" rel="noopener">Alm. Brand</a> og <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, september 2025</a>, set den 4. oktober 2026. Trygs krav om besked før værkstedet og de tre måder at erstatte på står på forsiden og i afsnit 11.2-11.3, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Taksator og Autotaks",
        tekst: [
          `Selskaberne takserer bilskader i Autotaks, som F&amp;P ejer. Systemet indeholder bilfabrikkernes data, og værkstederne bruger det også, når de giver tilbud. Hvert selskab bruger en taksatororganisation.`,
          `Når forsikringen betaler skaden, er det forsikringsselskabet, der er værkstedets kunde. Det står i de fælles retningslinjer fra F&amp;P og autobranchen, fordi selskabet bestiller og betaler reparationen. En klage over kvaliteten af arbejdet går til værkstedet, og andre klager går til forsikringsselskabet.`,
          `Værkstedet skriver en forventet færdigdato i Autotaks, når det sender reparationstilbuddet til taksator. Datoen er den dag, bilen forventes at være klar til udlevering.`
        ],
        tabel: {
          kolonner: ["Selskab", "Taksatororganisation"],
          raekker: [
            ["Alm. Brand", "Codan"],
            ["Codan", "Codan"],
            ["GF", "Taksatorringen"],
            ["Gjensidige", "Gjensidige"],
            ["If", "If"],
            ["Købstædernes Forsikring", "Taksatorringen"],
            ["Lærerstandens Brandforsikring", "Taksatorringen"],
            ["Topdanmark", "Topdanmark"],
            ["Tryg", "Tryg"]
          ],
          note: `Kilder: <a href="https://www.forsikringogpension.dk/brancheloesninger/autotaks/selskaber-og-taksatororganisationer/" rel="noopener">F&amp;P: Autotaks, selskaber og taksatororganisationer, opdateret 30. juni 2026</a> og <a href="https://www.forsikringogpension.dk/brancheloesninger/autotaks/" rel="noopener">F&amp;P: Autotaks</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Tre kasser med virksomheden, forsikringsselskabet og værkstedet. Selskabet bestiller og betaler reparationen. Virksomheden anmelder skaden og klager til selskabet, men klager over kvaliteten af arbejdet til værkstedet."><defs><marker id="pil-skadeanmeldelse-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="110" y="10" width="180" height="40"/><text class="tg-modul__tekst" x="200" y="35" text-anchor="middle">FORSIKRINGSSELSKABET</text><rect class="tg-kasse" x="5" y="170" width="140" height="40"/><text x="75" y="195" text-anchor="middle">Virksomheden</text><rect class="tg-kasse" x="255" y="170" width="140" height="40"/><text x="325" y="195" text-anchor="middle">Værkstedet</text><line class="tg-pil" x1="100" y1="168" x2="158" y2="54" marker-end="url(#pil-skadeanmeldelse-2)"/><line class="tg-pil" x1="242" y1="52" x2="300" y2="166" marker-end="url(#pil-skadeanmeldelse-2)"/><line class="tg-pil" x1="147" y1="190" x2="251" y2="190" marker-end="url(#pil-skadeanmeldelse-2)"/><text x="5" y="96">anmelder</text><text x="5" y="110">skaden og</text><text x="5" y="124">klager</text><text x="298" y="96">bestiller og</text><text x="298" y="110">betaler</text><text x="298" y="124">reparationen</text><text x="200" y="228" text-anchor="middle">klage over kvaliteten af arbejdet</text></svg>`,
          tekst: `Skematisk. Hvem der er værkstedets kunde, når forsikringen betaler skaden. Kilde: <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, september 2025, emne 6</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Ejeren kan bede om en kopi af den godkendte taksatorrapport. Kilde: <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, emne 6 og 8</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Forbehold fra selskabet",
        tekst: [
          `Et forbehold betyder, at selskabet vil undersøge, om skaden er dækket, før det betaler for reparationen. Ifølge retningslinjerne tager selskaberne forbehold fx ved mistanke om spirituskørsel eller ved ubetalt præmie.`,
          `Tager selskabet forbeholdet, før arbejdet er begyndt, og vil ejeren alligevel have bilen repareret, skal værkstedet lave en skriftlig aftale om, at ejeren selv betaler, hvis selskabet afviser skaden. Ellers skal ejeren få bilen fjernet inden en kort frist.`,
          `Kommer forbeholdet, efter at arbejdet er begyndt, standser værkstedet arbejdet. Selskabet betaler de udgifter, værkstedet havde, indtil det fik besked om forbeholdet.`,
          `Mens et forbehold bliver afklaret, kan værkstedet afvise at låne en bil ud og henvise ejeren til forsikringsselskabet.`
        ],
        efter: [
          `Kilde: <a href="${FP}" rel="noopener">F&amp;P m.fl.: Retningslinjer, september 2025, emne 1 og 7</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Glasskader",
        tekst: [
          `Tryg skriver i betingelserne, at Tryg kan kræve en rude repareret i stedet for udskiftet, når den lovligt kan repareres. GF og Tryg betaler i det tilfælde kun reparationsprisen.`,
          `Hos Tryg bestiller du selv tid hos Carglass, og værkstedet får regningen godkendt af Trygs taksator. Selvrisikoen ved glasskader står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ],
        punkter: [
          `<strong>Tryg.</strong> Du bestiller tid direkte hos Carglass. Værkstedet får regningen godkendt af Trygs taksator.`,
          `<strong>Alm. Brand.</strong> Carglass og Dansk Bilglas.`,
          `<strong>Reparation frem for udskiftning.</strong> Kan ruden lovligt repareres, betaler GF og Tryg kun reparationsprisen.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 196" role="img" aria-label="To forruder. Til venstre et stenslag, der kan repareres. Til højre en revne, så ruden skal skiftes."><path class="tg-profil" d="M40,30 L160,30 L180,112 L20,112 Z"/><circle class="tg-modul" cx="88" cy="66" r="5"/><path class="tg-profil" d="M240,30 L360,30 L380,112 L220,112 Z"/><path class="tg-pil" d="M262,50 L288,70 L278,84 L316,100"/><circle class="tg-modul" cx="262" cy="50" r="5"/><text class="tg-fremhaev" x="20" y="142">Kan repareres</text><text x="20" y="160">GF og Tryg betaler</text><text x="20" y="176">reparationsprisen</text><text class="tg-fremhaev" x="220" y="142">Skal skiftes</text><text x="220" y="160">Tryg: bestil tid</text><text x="220" y="176">direkte hos Carglass</text></svg>`,
          tekst: `Skematisk. Forskellen på en rude, der kan repareres, og en rude, der skal skiftes.`
        },
        efter: [
          `Kilder: <a href="https://tryg.dk/erhverv/anmeld-skade/glasskade-erhverv" rel="noopener">Tryg: Glasskade</a>, <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${GF}" rel="noopener">GF, punkt 4.3</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.3</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Moms på skaden",
        tekst: [
          `For en momsregistreret virksomhed betaler forsikringen ikke den moms af en kaskoskade, som virksomheden selv kan trække fra. GF opgør kaskoskaden uden moms, og virksomheden betaler selv momsen til værkstedet i den procent, den har fradrag for.`,
          `Tryg erstatter skaden med moms, men virksomheden skal betale momsen tilbage i det omfang, den kan trækkes fra i momsregnskabet. Tryg lægger momsen ud over for værkstedet og sender en opgørelse til virksomheden. Betales momsen ikke senest 14 dage efter påkrav, kan Tryg opsige kaskoen med 14 dages varsel.`,
          `Er bilen leaset, kan leasingselskabet trække momsen fra, og Tryg betaler leasingselskabets rimelige omkostninger til at håndtere den. Ved kontant erstatning trækker både GF og Tryg momsen fra beløbet. Reglerne for fradrag står i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 182" role="img" aria-label="En reparationsregning delt i to. Selskabet betaler reparationen. Virksomheden betaler momsen i den procent, den har fradrag for. Ved kontant erstatning trækkes momsen fra."><text class="tg-fremhaev" x="0" y="16">Kaskoskade, momsregistreret virksomhed</text><rect class="tg-profil" x="0" y="26" width="300" height="30"/><text x="10" y="46">reparation</text><rect class="tg-modul" x="300" y="26" width="76" height="30"/><text class="tg-modul__tekst" x="338" y="46" text-anchor="middle">MOMS</text><line class="tg-skinne-tynd" x1="300" y1="20" x2="300" y2="64"/><text class="tg-fremhaev" x="0" y="84">Selskabet betaler</text><text x="0" y="100">reparationen</text><text class="tg-fremhaev" x="400" y="84" text-anchor="end">Virksomheden betaler</text><text x="400" y="100" text-anchor="end">momsen i den procent,</text><text x="400" y="116" text-anchor="end">den har fradrag for</text><text class="tg-lille" x="0" y="152">KONTANT ERSTATNING: MOMSEN TRÆKKES FRA</text><text class="tg-lille" x="0" y="172">TRYG LÆGGER MOMSEN UD, GF GØR IKKE</text></svg>`,
          tekst: `Skematisk. GF opgør kaskoskaden uden momsen, mens Tryg lægger den ud og sender en opgørelse. Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.9</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 11.7</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Udbetaling og forældelse",
        tekst: [
          `Forsikringsaftaleloven giver ret til erstatningen 14 dage efter, at selskabet har kunnet skaffe de oplysninger, der skal til for at bedømme skaden og beløbet. Står det klart, at selskabet skal betale en del af beløbet, kan den del kræves udbetalt efter samme regel.`,
          `Beløbet forrentes fra det tidspunkt, hvor det kan kræves betalt, med renten efter rentelovens § 5. Anerkender selskabet, at skaden er dækket, men beder om flere oplysninger for at opgøre beløbet, forældes kravet 3 år efter selskabets besked.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Udbetaling kan kræves efter", "14", "dage"],
            ["Almindelig forældelse", "3", "år"],
            ["Efter afvisning af anmeldt skade", "1", "år, mindst"]
          ],
          note: `Kilder: <a href="${FAL}" rel="noopener">Forsikringsaftaleloven, §§ 24 og 29</a> og <a href="${FORL}" rel="noopener">Forældelsesloven, § 3</a>, set den 4. oktober 2026.`
        },
        punkter: [
          `<strong>14 dage.</strong> Fristen regnes fra det tidspunkt, hvor selskabet har de oplysninger, der skal til. Derefter løber der renter på beløbet.`,
          `<strong>3 år.</strong> Fristen løber fra det tidspunkt, hvor kravet kunne gøres gældende, eller hvor virksomheden fik eller burde have fået kendskab til det.`,
          `<strong>Afvist skade.</strong> Er skaden anmeldt inden fristen, forældes kravet tidligst 1 år efter selskabets afvisning.`
        ],
        efter: [
          `Kilde: <a href="${FAL}" rel="noopener">Forsikringsaftaleloven, § 24, stk. 1-2, og § 29, stk. 5</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pris og opsigelse efter en skade",
        tekst: [
          `En anmeldt skade kan påvirke prisen. Hos GF bliver virksomheden efter en belastende skade stående et år ekstra på det pristrin, den havde, da skaden skete. Ved to eller flere skader i samme forsikringsår bliver den stående, til der er gået et helt forsikringsår uden skader.`,
          `GF lader virksomheden betale skadeudgiften tilbage, når skaden er afsluttet, så skaden ikke påvirker pristrinnet. Pengene skal være betalt senest en måned efter, at virksomheden har fået besked om skadens endelige omfang og beløb.`,
          `Både Tryg og GF kan opsige forsikringen med 14 dages varsel efter en anmeldt skade. I stedet for at opsige kan selskabet skærpe vilkårene, fx med en højere selvrisiko eller en højere pris. GF skriver, at skærpede betingelser efter gentagne skader kan blive registreret i et fælles register hos DFIM.`,
          `Hvordan skader påvirker prisen på mange biler, står i <a href="/til-varebilen/forsikring/flaadeforsikring/">flådeforsikring</a>.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Når skaden er anmeldt", "Tryg og GF kan opsige forsikringen eller skærpe vilkårene med 14 dages varsel."],
            ["En måned efter beskeden om det endelige beløb", "Hos GF er det sidste frist for at betale skadeudgiften tilbage og undgå, at skaden påvirker pristrinnet."],
            ["En måned efter skadens afslutning", "Hos GF udløber både virksomhedens og selskabets særlige ret til at opsige på grund af skaden. Hos Tryg regnes måneden fra betalingen eller afvisningen."],
            ["Næste hovedforfald", "Hos GF bliver virksomheden stående et år ekstra på det pristrin, den havde, da skaden skete."]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.5 og 13.15</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 13</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Uenighed med selskabet",
        tekst: [
          `Er du uenig med selskabet, går du først til sagsbehandleren og derefter til selskabets klageansvarlige. Hos GF er det kvalitetsafdelingen, der revurderer sagen. Læs mere på <a href="/til-varebilen/forsikring/">forsikring</a>.`,
          `Ankenævnet for Forsikring skriver, at klager over erhvervslivets forsikringer falder uden for nævnets område. GF skriver i sine betingelser, at nævnet kun behandler en erhvervssag, hvis den ikke adskiller sig væsentligt fra en privat forsikringssag.`,
          `Nævnet kræver, at du først har klaget til selskabet, og at selskabet har fastholdt afgørelsen eller ikke har svaret. Klagegebyret er 300 kr., og du får det tilbage, hvis du får medhold. Nævnet oplyste den 7. oktober 2026 en typisk sagsbehandlingstid på 6-8 måneder.`,
          `Er I uenige om bilens værdi efter en totalskade, kan værdien afgøres ved syn og skøn. Reglerne hos GF og Tryg står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Sagsbehandleren", "Du går først til den sagsbehandler eller afdeling, der har behandlet sagen."],
            ["Den klageansvarlige", "Hos GF revurderer kvalitetsafdelingen sagen efter en ny skriftlig henvendelse."],
            ["Ankenævnet for Forsikring", "Nævnet behandler som udgangspunkt kun private forsikringer. Klagegebyret er 300 kr."]
          ]
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.16</a> og <a href="${ANKE}" rel="noopener">Ankenævnet for Forsikring</a>, set den 4. oktober 2026. Klagegebyr, kriterier og sagsbehandlingstid er set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal forsikringsselskabet have",
    spoergsmaal_manchet: "Så kan skaden behandles uden opfølgende spørgsmål.",
    spoergsmaal: [
      "Bilens registreringsnummer og kilometerstand.",
      "Tid, sted og forløb, gerne med skitse.",
      "Modpartens navn, adresse, reg.nr., forsikringsselskab og policenummer.",
      "Vidner med kontaktoplysninger.",
      "Fotos af skaderne og omgivelserne.",
      "Politiets journalnummer ved tyveri, hærværk eller personskade.",
      "Om virksomheden er momsregistreret.",
      "Købsnota eller faktura på indretning og ekstraudstyr, der er skadet.",
      "Om den samme skade er forsikret i et andet selskab."
    ],
    faq: [
      ["Hvor hurtigt skal en skade på varebilen anmeldes?", "Skaden skal anmeldes uden ophold efter forsikringsaftalelovens § 21. GF og Tryg skriver straks i deres betingelser."],
      ["Skal en skade anmeldes, selvom den måske ikke er dækket?", "If opfordrer til at anmelde ved tvivl og skriver, at en skade uden dækning ikke påvirker kundeforholdet. Tryg skriver, at skaden skal anmeldes, også selvom den ser ud til at være lille."],
      ["Hvornår skal politiet kontaktes?", "Politiet skal kontaktes ved ikke ubetydelig personskade efter færdselslovens § 9. Efter selskabernes betingelser skal tyveri, røveri og hærværk også anmeldes til politiet."],
      ["Må føreren erkende skylden på uheldsstedet?", "Tryg skriver, at du ikke må indgå aftale om ansvar eller erstatning, før Tryg har godkendt det. GF kræver også selskabets samtykke til aftaler om erstatningskrav."],
      ["Hvornår udbetaler forsikringsselskabet?", "Erstatningen kan kræves 14 dage efter, at selskabet har de nødvendige oplysninger. Det følger af forsikringsaftalelovens § 24."],
      ["Må værkstedet gå i gang med reparationen med det samme?", "Nej. Hos GF og Tryg kræver reparationen aftale med selskabet eller taksator. Tryg tillader mindre reparationer, hvis bilen ellers er ulovlig at køre i."],
      ["Hvem betaler momsen af reparationen?", "En momsregistreret virksomhed betaler den moms, den kan trække fra. GF opgør kaskoskaden uden momsen, og Tryg lægger den ud og sender en opgørelse."],
      ["Kan selskabet opsige forsikringen efter en skade?", "Ja. Tryg og GF kan opsige med 14 dages varsel efter en anmeldt skade eller i stedet skærpe vilkårene, fx med en højere selvrisiko."],
      ["Hvor længe kan man rejse krav?", "Som udgangspunkt i 3 år efter forældelsesloven. Er en anmeldt skade afvist, forældes kravet tidligst 1 år efter afvisningen."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse af færdselsloven, LBK nr. 118 af 12/01/2026", url: FL, dato: "2026-10-04" },
      { navn: "Retsinformation: Forsikringsaftaleloven, LBK nr. 1237 af 09/11/2015", url: FAL, dato: "2026-10-07" },
      { navn: "Retsinformation: Forældelsesloven, LBK nr. 1238 af 09/11/2015", url: FORL, dato: "2026-10-04" },
      { navn: "F&P m.fl.: Retningslinjer for forsikringsselskaber og autoværksteder ved forsikringsskader på biler, september 2025", url: FP, dato: "2026-10-07" },
      { navn: "F&P: Autotaks, selskaber og taksatororganisationer", url: "https://www.forsikringogpension.dk/brancheloesninger/autotaks/selskaber-og-taksatororganisationer/", dato: "2026-10-04" },
      { navn: "F&P: Autotaks", url: "https://www.forsikringogpension.dk/brancheloesninger/autotaks/", dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "GF Forsikring: Anmeld skade på din erhvervsbilforsikring", url: "https://www.gfforsikring.dk/erhverv/anmeld-skade/erhvervsbil/", dato: "2026-10-04" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Anmeld tyveri, skader og ansvar på bil og varebil", url: "https://tryg.dk/erhverv/anmeld-skade/tyveri-skade-ansvar-bil-og-varebil", dato: "2026-10-04" },
      { navn: "Tryg: Glasskade på biler og køretøjer, erhverv", url: "https://tryg.dk/erhverv/anmeld-skade/glasskade-erhverv", dato: "2026-10-04" },
      { navn: "If: Anmeld erhvervsskade", url: "https://www.if.dk/erhverv/anmeld-skade", dato: "2026-10-04" },
      { navn: "If: Trafikuheld, det skal du gøre (skadesflyer)", url: IFF, dato: "2026-10-07" },
      { navn: "Alm. Brand: Anmeld skade på erhvervskøretøj", url: AB, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Gjensidige: Anmeld skade for virksomhed", url: "https://www.gjensidige.dk/erhverv/anmeld-skade", dato: "2026-10-04" },
      { navn: "Lærerstandens Brandforsikring: Anmeld skade, erhverv", url: "https://www.lb.dk/anmeld-skade/erhverv", dato: "2026-10-04" },
      { navn: "Ankenævnet for Forsikring: Om at klage", url: ANKE, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["If (skadesflyer): er der personskade, skal man straks ringe 112, begrænse skadens omfang og få hurtig hjælp til tilskadekomne.", IFF],
    ["If (skadesflyer): advarselstrekanten opsættes 50 meter fra bilen på almindelige veje eller 100 meter bag bilen på motorveje; eventuelle vragdele fjernes fra vejen.", IFF],
    ["If (skadesflyer): kontakt politiet, hvis der er forvoldt skade på ejendom, som man ikke kender ejeren af (ud over alvorlig personskade, materiel skade over 50.000 kr., udenlandsk modpart og flugtbilist).", IFF],
    ["If (skadesflyer): If Skadeforsikring har telefon 70 12 12 22.", IFF],
    ["If (skadesflyer): tag billeder af egne og modpartens skader, omgivelser, vejskilte, bremsespor og sigtbarhed, helst inden køretøjerne fjernes, og tegn gerne en skitse.", IFF],
    ["Tryg (afsnit 1): efterlades varebilen ved uheld eller nedbrud, skal den så vidt muligt placeres uden for kørebanen og ikke til fare eller gene; afmærkning som positionslys, havariblink og advarselstrekant skal overholdes; holder den uhensigtsmæssigt, skal den fjernes hurtigst muligt, herunder med besked til politi eller vejmyndighed på motorvej.", TRYG],
    ["Tryg (afsnit 1): Tryg skal bruge bilernes nummerplader, navne og adresser og vidners navne og telefonnumre eller mail.", TRYG],
    ["Tryg (afsnit 1): den internationale skadeanmeldelse er på to sider, udfyldes og underskrives på stedet med en kopi til hver part; skriv aldrig under på noget, brugeren ikke forstår, og ved tvivl skrives det, at brugeren ikke forstår den fulde ordlyd; ved kontakt med lokalt politi noteres stationens navn og eventuelt journalnummer.", TRYG],
    ["Tryg (afsnit 11.1): du må ikke indgå aftale om ansvar og/eller erstatning, før Tryg har godkendt det; du skal sandsynliggøre og dokumentere kravet og give alle oplysninger af betydning for bedømmelsen.", TRYG],
    ["GF (punkt 13.6): aftaler om reparation eller erstatningskrav må ikke træffes uden GF's samtykke; skal redningsforsikringen bruges i udlandet, henvender man sig direkte til SOS International, telefon +45 70 10 50 52.", GF],
    ["Tryg (forsiden): skaden skal anmeldes, også selvom den ser ud til at være af beskedent omfang; tyveri eller hærværk anmeldes til politiet i det land, hvor skaden er sket; Tryg skal kontaktes, inden varebilen kommer på værksted, medmindre øjeblikkelig bugsering eller nødreparation er nødvendig; skaden må ikke udbedres og beskadigede ting ikke fjernes, før Tryg har godkendt det.", TRYG],
    ["Tryg (afsnit 11.1): er tyveri, røveri eller hærværk ikke anmeldt, kan retten til erstatning nedsættes eller bortfalde.", TRYG],
    ["Forsikringsaftaleloven § 21, stk. 3 (sidste del): strengere følger af manglende anmeldelse kan aftales for tyveri- og skadesforsikring af motorkøretøjer.", FAL],
    ["Tryg (afsnit 11.2): Tryg kan forlange dokumentation, fx original købekontrakt, købsnota, finansierings- eller leasingaftale eller regning; kan kravet ikke dokumenteres, risikerer man afvisning eller skønsmæssig erstatning; Tryg erstatter ved reparation, genlevering eller kontanterstatning.", TRYG],
    ["GF (punkt 13.10): er samme skade forsikret i et andet selskab (dobbeltforsikring), skal skaden anmeldes til begge selskaber, som betaler erstatningen i fællesskab.", GF],
    ["F&P's retningslinjer (emne 6): ved en forsikringsbetalt skade er forsikringsselskabet værkstedets kunde, fordi det bestiller og betaler; reklamation over kvaliteten tager værkstedet sig af, andre klager går til forsikringsselskabet.", FP],
    ["F&P's retningslinjer (emne 8): værkstedet indsætter den forventede færdiggørelsesdag i Autotaks, når reparationstilbuddet sendes til taksator; datoen svarer til den dag, bilen forventes klar til udlevering.", FP],
    ["F&P's retningslinjer (emne 1): forbehold tages fx ved mistanke om spirituskørsel eller præmierestance; tages det, før arbejdet er begyndt, og kræver ejeren reparation, må værkstedet lave en skriftlig aftale om, at ejeren betaler, ellers må ejeren fjerne bilen inden en kort frist; tages det efter, standser værkstedet arbejdet, og selskabet betaler udgifterne indtil beskeden.", FP],
    ["F&P's retningslinjer (emne 7): ved forbehold eller afvisning kan værkstedet afvise at stille lånebil til rådighed og henvise ejeren til forsikringsselskabet.", FP],
    ["Tryg (afsnit 11.3): hvis en skade på ruder lovligt kan repareres, kan Tryg kræve ruden repareret frem for udskiftet.", TRYG],
    ["GF (punkt 13.9): for momsregistrerede ejere opgøres kaskoskader eksklusiv moms, og ejeren betaler selv moms til reparatøren efter sin fradragsprocent; ved kontanterstatning trækkes moms fra.", GF],
    ["Tryg (afsnit 11.7): Tryg erstatter inkl. moms, men en registreret virksomhed skal betale momsen, i det omfang den kan fradrages; Tryg lægger momsen ud og sender opgørelsen; betales den ikke senest 14 dage efter påkrav, kan Tryg opsige kaskoen med 14 dages varsel; ved leasing kan leasingejer fradrage momsen, og Tryg betaler rimelige administrationsomkostninger; ved kontanterstatning fratrækkes momsen.", TRYG],
    ["Forsikringsaftaleloven § 24, stk. 1-2: står det fast, at selskabet skal betale en del, kan den del kræves efter 14-dagesreglen; beløbet forrentes med renten efter rentelovens § 5.", FAL],
    ["Forsikringsaftaleloven § 29, stk. 5: anerkender selskabet dækning, men beder om yderligere oplysninger til opgørelsen, indtræder forældelse 3 år efter selskabets meddelelse.", FAL],
    ["GF (punkt 13.5.2): ved belastende skade står man fra næste hovedforfald ét år ekstra på pristrinnet fra skadetidspunktet; ved to eller flere skader i samme forsikringsår, indtil der er ét års skadefrihed; skadeudgiften kan tilbagebetales senest én måned efter meddelelse om skadens endelige omfang og økonomiske konsekvenser, så skaden ikke belaster trinnet.", GF],
    ["GF (punkt 13.15): efter anmeldt skade kan forsikringstageren opsige med 14 dages varsel indtil en måned efter skadens afslutning, og GF kan opsige eller kræve skærpede betingelser med 14 dages varsel i samme periode; skærpede betingelser eller opsigelse efter gentagne skader kan registreres i fællesregistret hos DFIM.", GF],
    ["Tryg (afsnit 13): Tryg kan med 14 dages varsel opsige efter enhver anmeldt skade indtil 1 måned efter erstatningens betaling eller afvisning; i stedet kan Tryg tilføje skærpede vilkår, fx tvungen eller ændret selvrisiko, højere pris eller begrænset dækning.", TRYG],
    ["GF (punkt 13.16): ved uenighed henvender man sig først til sagsbehandleren, derefter til kvalitetsafdelingen som klageansvarlig; Ankenævnet behandler kun erhvervssager, hvis de ikke adskiller sig væsentligt fra private forsikringsforhold.", GF],
    ["Ankenævnet for Forsikring: klager vedrørende erhvervslivets forsikringsforhold falder uden for nævnets område; man skal først have klaget til selskabet; klagegebyret er 300 kr. og tilbagebetales ved medhold; typisk sagsbehandlingstid er 6-8 måneder (set 7. oktober 2026).", ANKE]
  ]
};
