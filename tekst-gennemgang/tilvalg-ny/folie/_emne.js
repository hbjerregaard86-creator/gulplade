// Emnesiden /til-varebilen/folie/ (07-10-2026)
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var DET = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var TRYK = `https://www.trykwerk.dk/autoreklame/`;
var VANK = `https://www.vankompagniet.dk/product-category/dekorationer/bilreklame/`;
var MONT = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var CPH = `https://cphwrap.dk/prisliste/`;
var VIS = `https://viskilter.dk/bilreklame.aspx`;
var M3 = `https://trimwel.ie/cdn/shop/files/3M_EU_PB_2080.pdf`;
var AVERY = `https://graphics.averydennison.com/content/dam/averydennison/graphics/eu/en/Data-Sheets/Supreme-Wrap/PDS-Supreme-Wrapping-Film-EN.pdf`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;
var NF = `https://nffleet.dk/media/hezacmn3/nf_fleet_afleveringsguide_erhvervsleasing_maj2025.pdf`;
var NORD = `https://nordania.dk/erhverv/find-hjaelp/aflevering/leaset-bil-via-forhandler`;
var SKAT = `https://info.skat.dk/data.aspx?oid=2083500`;

module.exports = {
  id: "folie",
  side: {
    slug: "folie",
    navn: "Bilreklame og folie",
    titel: "Folie på varebil: bilreklame, wrap og priser",
    kort: `Her kan du se, hvad firmanavn, logo og helfoliering koster, hvad loven kræver af CVR-mærkningen, og hvad leasingselskaberne tager for at fjerne folien.`,
    beskrivelse: `Folie på varebil: navn og CVR fra 370 kr., logopakker, helfoliering fra 15.995 kr., regler for ruder og tagskilt og gebyrer ved aflevering af leasingbil.`,
    manchet: `En varebil, der er registreret til udelukkende erhvervsmæssig brug, skal have firmanavn og CVR-nummer på begge sider. Resten er markedsføring, og prisen går fra 370 kr. for navn og CVR til omkring 16.000–21.000 kr. for en helfoliering. Alle priser på siden er uden moms.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Navn og CVR", "mindst 3 cm", "høje tegn i begge sider af bilen"],
        ["Navn og CVR i folie", "fra 370 kr.", "hos Trykwerk, oktober 2026"],
        ["Helfoliering, lille varebil", "fra 15.995 kr.", "hos CPH Wrap, oktober 2026"],
        ["Fjernelse af fuld dekoration", "3.500 kr.", "hos Ayvens og NF Fleet ved aflevering"]
      ],
      toc: true
    },
    afsnit: [
      {
        overskrift: "Firmanavn og CVR-nummer er et krav",
        tekst: [
          `Vare- og lastbiler med en tilladt totalvægt på højst 4 t, der er registreret til udelukkende erhvervsmæssig brug, skal have CVR-nummer og firmanavn på bilen. Det står i § 85 i bekendtgørelsen om registrering af køretøjer. Er der en registreret bruger, er det brugerens navn og CVR-nummer, der skal stå.`,
          `Firmanavnet kan erstattes af firmaets logo, hvis logoet entydigt identificerer virksomheden. CVR-nummeret skal stå i begge tilfælde. Reglen gælder ikke biler til privat eller blandet privat og erhvervsmæssig brug, og forskellen på pladerne kan du læse om i <a href="/haandbogen/gule-hvide-eller-papegoejeplader/">gule, hvide eller papegøjeplader</a>.`,
          `Bekendtgørelsens § 114 fastsætter bøde for at overtræde § 85. Kravene til selve mærkningen er korte og konkrete:`
        ],
        punkter: [
          `<strong>Placering.</strong> Navn og CVR skal stå i venstre og højre side af bilen.`,
          `<strong>Højde.</strong> Bogstaver og tal skal være mindst 3 cm høje.`,
          `<strong>Format.</strong> Der skal stå »CVR« efterfulgt af de 8 cifre på samme linje eller nedenunder.`,
          `<strong>Farve.</strong> Teksten skal have en farve, der klart afviger fra bilens farve.`,
          `<strong>Materiale.</strong> Selvklæbende plastfolie er tilladt. Skilte, der kan tages af og på, er ikke.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 244" role="img" aria-label="Beslutningstræ. Er varebilen registreret til udelukkende erhvervsmæssig brug og har en tilladt totalvægt på højst 4 t, skal navn og CVR stå i begge sider med mindst 3 cm høje tegn. Ellers gælder kravet i § 85 ikke."><defs><marker id="pil-folie-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="40" y="6" width="320" height="46"/><text x="200" y="25" text-anchor="middle">Registreret til udelukkende</text><text class="tg-fremhaev" x="200" y="42" text-anchor="middle">erhvervsmæssig brug?</text><line class="tg-pil" x1="140" y1="52" x2="96" y2="92" marker-end="url(#pil-folie-1)"/><line class="tg-pil" x1="260" y1="52" x2="300" y2="92" marker-end="url(#pil-folie-1)"/><text x="110" y="76" text-anchor="end">Nej</text><text x="290" y="76">Ja</text><rect class="tg-kasse" x="6" y="96" width="172" height="46"/><text x="92" y="115" text-anchor="middle">Privat eller blandet</text><text x="92" y="132" text-anchor="middle">brug: intet krav</text><rect class="tg-kasse" x="200" y="96" width="194" height="46"/><text x="297" y="115" text-anchor="middle">Tilladt totalvægt</text><text class="tg-fremhaev" x="297" y="132" text-anchor="middle">højst 4 t?</text><line class="tg-pil" x1="270" y1="142" x2="196" y2="186" marker-end="url(#pil-folie-1)"/><line class="tg-pil" x1="330" y1="142" x2="330" y2="186" marker-end="url(#pil-folie-1)"/><text x="224" y="164" text-anchor="end">Nej</text><text x="338" y="168">Ja</text><rect class="tg-kasse" x="70" y="190" width="150" height="46"/><text x="145" y="209" text-anchor="middle">Kravet i § 85</text><text x="145" y="226" text-anchor="middle">gælder ikke</text><rect class="tg-modul" x="236" y="190" width="158" height="46"/><text class="tg-modul__tekst" x="315" y="209" text-anchor="middle">NAVN OG CVR</text><text class="tg-modul__tekst" x="315" y="226" text-anchor="middle">begge sider, 3 cm</text></svg>`,
          tekst: `Skematisk. Reglen i § 85 i bekendtgørelsen om registrering af køretøjer. Kilde: <a href="${REG}" rel="noopener">BEK nr. 663 af 10/06/2025</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Navnet på en leaset varebil",
        tekst: [
          `Ved leasing ejer leasingselskabet bilen, og din virksomhed kan være registreret som bruger. Er den det, er det din virksomheds navn og CVR-nummer, der skal stå på bilen, og ikke leasingselskabets.`,
          `Mærkningen sidder på bilen i hele leasingperioden og skal af igen, før bilen afleveres. Flere leasingselskaber tager et gebyr, hvis de selv skal fjerne folien. Gebyrerne kan du se i afsnittet om leasingbilen længere nede.`,
          `Har virksomheden flere biler, kan logo, farver og opsætning være ens på dem alle. VanKompagniet skriver, at kontaktoplysninger eller afdelingsnavne samtidig kan tilpasses den enkelte bil, hvis virksomheden er organiseret sådan.`
        ]
      },
      {
        overskrift: "Fire niveauer af bilreklame",
        tekst: [
          `Bilreklame spænder fra den lovpligtige tekst til en bil, der er pakket helt ind i printet folie. Prisen følger, hvor meget af bilen der bliver dækket, og om folien er skåret ud eller printet. Ved udskåret tekst er bogstaver og logo skåret ud af ensfarvet folie, så bilens lak ses mellem bogstaverne.`,
          `Typer, priser og placeringer står i <a href="/til-varebilen/folie/bilreklame-paa-varebil/">bilreklame på varebil</a>. Farveskift og fuld dekoration står i <a href="/til-varebilen/folie/helfoliering-af-varebil/">helfoliering af varebil</a>.`
        ],
        kort: [
          ["Navn og CVR", "Den lovpligtige mærkning i udskåret folie. Fra 370 kr."],
          ["Logo og kontaktinfo", "Udskåret tekst og logo på sider og bagdøre. Fra 1.650 kr. på en lille varebil, monteret."],
          ["Delvis dekoration", "Printet folie på dele af bilen, fx sider og bagdøre. Fra 4.995 kr. på en lille varebil, monteret."],
          ["Helfoliering", "Hele bilen i ny farve eller med print. Fra 15.995 kr. på en lille varebil."]
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil set fra siden med felt til navn og CVR på døren, delvis dekoration på siden og fuld dekor rundt om hele karrosseriet"><path class="tg-profil" d="M40,172 L40,126 Q42,116 66,112 L108,66 Q112,62 120,62 L356,62 Q364,62 364,70 L364,172 Z"/><path class="tg-kasse" d="M112,70 L146,70 L146,104 L82,108 Z"/><line class="tg-skinne-tynd" x1="150" y1="64" x2="150" y2="170"/><line class="tg-skinne-tynd" x1="240" y1="64" x2="240" y2="170"/><circle class="tg-hylde" cx="96" cy="174" r="17"/><circle class="tg-hylde" cx="306" cy="174" r="17"/><line class="tg-gulvlinje" x1="16" y1="191" x2="388" y2="191"/><path class="tg-skinne" fill="none" d="M34,178 L34,124 Q36,110 62,106 L104,58 Q108,55 116,55 L358,55 Q370,55 370,67 L370,178"/><rect class="tg-modul" x="158" y="74" width="196" height="78"/><rect class="tg-kasse" x="84" y="122" width="58" height="16"/><text x="113" y="134" text-anchor="middle">CVR</text><g class="tg-call"><line x1="113" y1="122" x2="113" y2="40"/><circle cx="113" cy="122" r="3"/><text class="tg-call__navn" x="20" y="20">Navn og CVR</text><text class="tg-call__under" x="20" y="34">Mindst 3 cm, begge sider</text></g><g class="tg-call"><line x1="257" y1="112" x2="257" y2="40"/><circle cx="257" cy="112" r="3"/><text class="tg-call__navn" x="210" y="20">Delvis dekoration</text><text class="tg-call__under" x="210" y="34">Printet folie på siderne</text></g><g class="tg-call"><line x1="34" y1="160" x2="34" y2="200"/><circle cx="34" cy="160" r="3"/><text class="tg-call__navn" x="44" y="212">Fuld dekor</text><text class="tg-call__under" x="44" y="226">Hele karrosseriet, stiplet linje</text></g></svg>`,
          tekst: `Skematisk. Navn og CVR skal stå på bilen efter § 85 i registreringsbekendtgørelsen. Delvis dekoration dækker typisk sider og bagdøre, mens fuld dekoration dækker hele karrosseriet.`
        }
      },
      {
        overskrift: "Priser på bilreklame",
        tekst: [
          `Tabellen viser vejledende fra-priser fra danske skilte- og foliefirmaer, set den 4. oktober 2026. Den endelige pris kommer først, når layoutet er på plads, fordi designet og bilens flader afgør, hvor meget folie og arbejdstid opgaven kræver.`,
          `Montering er med i Trykwerks logopakker, i VanKompagniets dekorationer og i CPH Wraps helfoliering. Viskilter lægger 1.060 kr. oveni for montering på en varevogn.`,
          `VanKompagniet skriver, at en løsning med firmanavn og CVR-nummer kræver mindre folie og et andet designarbejde end en stor dekoration. Derfor ligger de to lovpligtige linjer nederst i tabellen og helfolieringen øverst.`
        ],
        tabel: {
          kolonner: ["Opgave", "Firma", "Fra"],
          raekker: [
            ["Firmanavn og CVR", "Trykwerk", "370 kr."],
            ["Firmanavn og CVR", "VanKompagniet", "495 kr."],
            ["Logopakke, lille varebil", "Trykwerk", "1.650 kr."],
            ["Dekoration, lille kassebil", "Montagegruppen", "2.500 kr."],
            ["Logo, tlf. og web, én farve", "Viskilter", "2.460 kr."],
            ["Dekoration, lille varebil", "VanKompagniet", "4.995 kr."],
            ["Dekoration, stor varebil", "VanKompagniet", "12.995 kr."],
            ["Helfoliering, lille varebil", "CPH Wrap", "15.995 kr."]
          ],
          note: `Kilder: <a href="${TRYK}" rel="noopener">Trykwerk</a>, <a href="${VANK}" rel="noopener">VanKompagniet</a>, <a href="${MONT}" rel="noopener">Montagegruppen</a>, <a href="${VIS}" rel="noopener">Viskilter</a> og <a href="${CPH}" rel="noopener">CPH Wrap</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Det forudsætter prisen",
        tekst: [
          `Firmaerne bygger deres fra-priser på forskellige forudsætninger. Her er de vigtigste, sådan som firmaerne selv skriver dem på deres hjemmesider.`
        ],
        punkter: [
          `<strong>Trykwerk.</strong> Prisen forudsætter, at bilen er ren og renset for tidligere reklame, at logoet findes som vektorfil, og at skrifttyperne kendes. Priserne gælder udskåret tekst, og print over hele siden koster mere. Trykwerk sender et bindende tilbud, når layoutet er godkendt.`,
          `<strong>VanKompagniet.</strong> Firmaet laver et oplæg ud fra logo og biltype, som du skal godkende. Prisen er med montage på værkstedet.`,
          `<strong>CPH Wrap.</strong> Arbejdet med udkast koster 400 kr. pr. halve time, medmindre andet er aftalt.`,
          `<strong>Viskilter.</strong> Firmaet skriver på sin hjemmeside, at de viste priser ikke gælder, og at kunden får et tilbud til dagspris.`
        ],
        efter: [
          `Du kan læse om filformater, farver og beskæring i <a href="/til-varebilen/folie/bilreklame-design-og-filer/">design og trykfiler til bilreklame</a>.`
        ]
      },
      {
        overskrift: "Prisen følger bilens størrelse",
        tekst: [
          `Jo større flade, der skal dækkes, jo højere er prisen. Hos VanKompagniet er der 8.000 kr. mellem dekoration af en lille og en stor varebil. Hos CPH Wrap er der 5.000 kr. mellem helfoliering af en lille varevogn og en XL-kassebil.`,
          `CPH Wrap sorterer bilerne efter model. En lille varevogn er fx VW Caddy, Ford Connect og Peugeot Partner, og en mellem varevogn er fx VW Transporter, Ford Custom og Peugeot Expert. Stor varevogn går op til L2H2, fx VW Crafter, Ford Transit og Peugeot Boxer, og de samme tre modeller står også under XL-kassebil.`,
          `Længder og højder er forklaret i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Dekoration, lille", 4995, "VanKompagniet"],
            ["Dekoration, mellem", 8995, "VanKompagniet"],
            ["Dekoration, stor", 12995, "VanKompagniet"],
            ["Helfoliering, lille", 15995, "CPH Wrap"],
            ["Helfoliering, mellem", 17995, "CPH Wrap"],
            ["Helfoliering, stor", 19995, "CPH Wrap"],
            ["Helfoliering, XL", 20995, "CPH Wrap"]
          ],
          note: `Vejledende fra-priser. VanKompagniets priser er med oplæg og montage, mens CPH Wraps priser er uden dørfalser, kofangere, spejle og håndtag. Kilder: <a href="${VANK}" rel="noopener">VanKompagniet</a> og <a href="${CPH}" rel="noopener">CPH Wrap</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Fradrag for bilreklame",
        tekst: [
          `Efter ligningslovens § 8, stk. 1, kan en virksomhed trække udgifter til reklame fra, når de afholdes for at sælge varer og tjenesteydelser. Der er fradrag, både når salget skal komme i det år, udgiften afholdes, og når det først skal komme senere.`,
          `Skattestyrelsen skriver i Den juridiske vejledning, at reklameudgifter skal afholdes over for en ubestemt kreds af kunder eller potentielle kunder. Om der er fradrag for en udgift, afgøres ud fra en konkret vurdering af reklameværdien for virksomheden.`,
          `Om momsen på selve bilen kan du læse i <a href="/haandbogen/moms-paa-varebil/">moms på varebil</a>.`
        ],
        efter: [
          `Kilde: <a href="${SKAT}" rel="noopener">Den juridiske vejledning, afsnit C.C.2.2.2.5.3</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Folie og holdbarhed",
        tekst: [
          `Producenterne angiver holdbarheden på lodrette flader. 3M angiver 8 år for alle farver i 2080-serien til wrap i nordeuropæisk klima. Avery Dennison angiver 10 år for farver, 12 år for hvid og sort og 5 år for metallic og perlemor i Supreme Wrapping Film i mellemeuropæisk klima.`,
          `Tallene er ikke en garanti for bilen. 3M skriver, at holdbarheden blandt andet afhænger af underlaget, af solens vinkel og retning og af den måde, bilen bliver vasket på. Tag og motorhjelm ligger vandret og får derfor mere sol end siderne.`,
          `Montagegruppen sælger kampagnefolie fra 195 kr. pr. m², 7-års folie med laminat fra 260 kr. pr. m² og hulfolie fra 442 kr. pr. m². Laminatet er et ekstra lag folie oven på printet, og 3M skriver, at print på 2080-folien skal dækkes af et laminat for at beskytte printet.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["3M 2080, alle farver", "8", "år"],
            ["Avery Supreme, farver", "10", "år"],
            ["Avery Supreme, hvid og sort", "12", "år"],
            ["Avery Supreme, metallic og perlemor", "5", "år"]
          ],
          note: `Holdbarhed på en lodret flade ifølge producenterne. Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> (nordeuropæisk klima, uden laminat) og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a> (mellemeuropæisk klima), set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det siger færdselsreglerne om folie",
        tekst: [
          `Detailforskrifterne for køretøjer sætter grænser for, hvor folie og reklame må sidde. Reglerne handler især om ruder, nummerplader, refleks og skilte på taget, og de gælder både ejede og leasede biler.`
        ],
        punkter: [
          `<strong>Forrude og forreste sideruder.</strong> Må ikke have påklæbet film, bortset fra en strimmel øverst på forruden. Mere i <a href="/til-varebilen/folie/solfilm-paa-ruder/">solfilm på ruder</a>.`,
          `<strong>Reflekterende reklame.</strong> Reklame i reflekterende folie regnes som supplerende refleks og har egne krav. Mere i <a href="/til-varebilen/folie/refleks-og-konturmarkering/">refleks og konturmarkering</a>.`,
          `<strong>Nummerplader.</strong> Må ikke påføres mærkater, anden information eller udsmykning.`,
          `<strong>Tagreklameskilte.</strong> Skal være udformet og anbragt, så de ikke medfører unødig fare for andre trafikanter.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Sted på bilen", "Folie og reklame"],
          raekker: [
            ["Forrude", "Kun en strimmel øverst"],
            ["Forreste sideruder", "nej"],
            ["Ruder bag føreren", "Solfilm tilladt bag førerens synsfelt"],
            ["Nummerplader", "nej"],
            ["Reflekterende folie", "Regnes som supplerende refleks"],
            ["Tagskilt", "Tilladt med krav til placering og lys"],
            ["Navn og CVR på aftageligt skilt", "nej"]
          ],
          note: `Kilder: <a href="${DET}" rel="noopener">BEK nr. 1484 af 03/12/2025</a> (detailforskrifterne), set den 4. oktober 2026, og <a href="${REG}" rel="noopener">BEK nr. 663 af 10/06/2025, § 70 og § 85</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tagskilt med lys",
        tekst: [
          `En varebil må have et reklameskilt på taget. Detailforskrifterne stiller de samme krav til en varebil (N1) som til en personbil (M1).`,
          `Skiltet må lyse hvidt eller gult. Lyset skal være uden blink, og skiltet må ikke lyse bagud. Lysstyrken er begrænset til 60 cd.`
        ],
        punkter: [
          `<strong>Placering.</strong> Skiltet skal sidde mindst 0,40 m fra tagets forkant. Kravet gælder ikke biler med foranliggende styring og en taghøjde på mindst 1,80 m over vejbanen.`,
          `<strong>Lys.</strong> Skiltet må lyse hvidt eller gult uden blink med højst 60 cd og må ikke lyse bagud.`,
          `<strong>Udformning.</strong> Skiltet må ikke medføre unødig fare for andre trafikanter.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Varebil set fra siden med et reklameskilt på taget. Skiltet sidder mindst 0,40 m fra tagets forkant og lyser uden blink. Kravet om afstand gælder ikke biler med foranliggende styring og en taghøjde på mindst 1,80 m."><defs><marker id="pil-folie-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(60,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="120" y="62" width="96" height="22"/><text class="tg-modul__tekst" x="168" y="77" text-anchor="middle">REKLAME</text><line class="tg-skinne-tynd" x1="256" y1="48" x2="256" y2="84"/><g class="tg-maal"><line x1="216" y1="50" x2="256" y2="50" marker-start="url(#pil-folie-2)" marker-end="url(#pil-folie-2)"/><text x="236" y="42" text-anchor="middle">mindst 0,40 m</text></g><line class="tg-skinne-tynd" x1="262" y1="84" x2="338" y2="84"/><g class="tg-maal"><line x1="330" y1="86" x2="330" y2="215" marker-start="url(#pil-folie-2)" marker-end="url(#pil-folie-2)"/><text x="338" y="154">1,80 m</text></g><g class="tg-call"><line x1="140" y1="62" x2="140" y2="38"/><circle cx="140" cy="62" r="3"/><text class="tg-call__navn" x="10" y="16">Tagskilt</text><text class="tg-call__under" x="10" y="30">lys uden blink, højst 60 cd</text></g><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><text class="tg-lille" x="10" y="240">UNDTAGET: FORANLIGGENDE STYRING OG TAGHØJDE MIN. 1,80 M</text></svg>`,
          tekst: `Skematisk. Krav til reklameskilte på taget af en varebil efter detailforskrifterne. Kilde: <a href="${DET}" rel="noopener">BEK nr. 1484 af 03/12/2025</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: detailforskrifterne pkt. 6.03.009, 6.03.021, 6.03.024, 9.06.004, 9.06.021 og 9.06.024.`
        ]
      },
      {
        overskrift: "Fra tilbud til færdig bil",
        tekst: [
          `Hos VanKompagniet og Trykwerk går der et godkendt layout forud for monteringen. VanKompagniet laver et dekorationsoplæg ud fra virksomhedens logo og biltypen og sender det til godkendelse, før folien monteres. Trykwerk sender et bindende tilbud, når det endelige layout er godkendt.`,
          `Foliefirmaet skal bruge virksomhedens navn, CVR-nummer, logo og kontaktoplysninger og bilens mærke, model, årgang og størrelse. VanKompagniet beder også om at få at vide, hvilke flader der skal dekoreres, og hvor mange biler opgaven omfatter.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Oplæg", "Foliefirmaet laver et oplæg ud fra logo og biltype."],
            ["Godkendelse", "Du godkender layoutet og får et bindende tilbud."],
            ["Klargøring", "Bilen afleveres ren og uden voks eller coating."],
            ["Montering", "Folien monteres på værkstedet."],
            ["Første vask", "Bilen kan vaskes 48 timer efter montering."]
          ]
        }
      },
      {
        overskrift: "Hvor lang tid det tager",
        tekst: [
          `Montagegruppen oplyser, at mindre opgaver som foliering af døre tager få timer, mens en fuld wrap af et større køretøj tager 1–3 dage. Viskilter monterer typisk bilreklamen i løbet af et par timer, efter bilen er afleveret.`,
          `CPH Wrap tager et vaskegebyr på 500 kr. for erhvervsbiler, der ikke afleveres nyvasket og uden voks eller coating. Efter monteringen kan bilen vaskes igen 48 timer senere ifølge Montagegruppen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Mindre opgaver, fx døre", "få", "timer"],
            ["Fuld wrap, større køretøj", "1–3", "dage"],
            ["Første vask efter montering", "48", "timer"]
          ],
          note: `Kilde: <a href="${MONT}" rel="noopener">Montagegruppen</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Folie på en leasingbil",
        tekst: [
          `Leasingselskaberne kræver logo og folie fjernet før aflevering. Nordania skriver i sin vejledning, at logo og eventuel foliering skal være fjernet. Ayvens og NF Fleet opkræver fra 400 kr. for at fjerne et CVR-nummer til 3.500 kr. for at fjerne fuld dekoration, og logoer i tre størrelser koster 600, 1.200 og 1.800 kr. Gebyrlisten skelner mellem logoets størrelse og ikke mellem bilernes størrelse.`,
          `Som eksempel betaler en virksomhed med fem varebiler med et stort logo 5 × 1.800 kr. = 9.000 kr., hvis leasingselskabet skal fjerne logoerne. Vilkår, skadeskala og gennemgang står i <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["CVR-nummer", 400],
            ["Logo, lille", 600],
            ["Logo, mellem", 1200],
            ["Logo, stor", 1800],
            ["Fuld dekoration", 3500]
          ],
          note: `Gebyr for afmontering, når leasingselskabet selv fjerner folien. Gebyrerne er ens hos Ayvens (priser fra juni 2025) og NF Fleet (gebyrliste fra maj 2025). Kilder: <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a> og <a href="${NF}" rel="noopener">NF Fleet afleveringsguide</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Solfilm og refleks",
        tekst: [
          `Solfilm på bagdørene giver mindre indkig i varerummet og er tilladt bag førerens synsfelt. Forruden og de forreste sideruder må ikke have film, bortset fra strimlen øverst på forruden. Reglerne for de enkelte ruder står i <a href="/til-varebilen/folie/solfilm-paa-ruder/">solfilm på ruder</a>.`,
          `Reflekser og konturmarkering er delvis påbudt og delvis frivillige på en varebil. Reklame i reflekterende folie hører under de samme regler som anden supplerende refleks. Kravene står i <a href="/til-varebilen/folie/refleks-og-konturmarkering/">refleks og konturmarkering</a>.`
        ]
      },
      {
        overskrift: "Første vask og reparation",
        tekst: [
          `Montagegruppen oplyser, at bilen kan vaskes 48 timer efter montering. Håndvask er bedst, men en skånsom vaskehal kan også bruges, så længe højtrykket ikke rettes direkte mod foliens kanter.`,
          `3M fraråder vaskehaller med børster, især til den højglansede udgave af 2080-folien. Rengøringsmidlet skal være vådt, ikke-slibende og uden opløsningsmidler. Kravene til pH-værdien står i <a href="/til-varebilen/folie/helfoliering-af-varebil/">helfoliering af varebil</a>.`,
          `Ifølge Montagegruppen kan en beskadiget wrap repareres ved at udskifte de beskadigede dele af folien. Om folien er dækket af kaskoen ved en skade, kan du læse i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ]
      },
      {
        overskrift: "Magnetskilte og streamers",
        tekst: [
          `Navn og CVR må ikke stå på skilte, der kan tages af og på bilen, og står derfor typisk i folie. Ekstra budskaber kan stå på magnetskilte eller streamers, som kan tages af igen.`,
          `LaserTryk.dk sælger magnetfolie fra 486 kr. for ét skilt på 10 x 40 cm og CVR-klistermærker fra 295 kr. pr. stk. uden fragt og gebyrer. Du kan læse mere i <a href="/til-varebilen/folie/magnetskilte/">magnetskilte til varebil</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal foliefirmaet vide",
    spoergsmaal_manchet: "Så kan foliefirmaet give en fast pris.",
    spoergsmaal: [
      `Bilens mærke, model og størrelse, fx L2H2. Se <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`,
      "Om bilen er ejet eller leaset.",
      "Firmanavn, CVR-nummer, logo og kontaktinfo, gerne som vektorfil.",
      "Hvor meget af bilen der skal dækkes: tekst, delvis dekoration eller helfoliering.",
      "Hvilke flader der skal have tekst eller logo: sider, bagdøre, front og motorhjelm.",
      "Antal biler, hvis der er tale om en flåde.",
      "Hvor længe folien skal sidde, så folietypen passer til leasingperioden."
    ],
    faq: [
      ["Skal der stå CVR-nummer på en varebil?", "Ja, hvis bilen er registreret til udelukkende erhvervsmæssig brug og har en tilladt totalvægt på højst 4 t. Navn og CVR skal stå i begge sider med mindst 3 cm høje tegn."],
      ["Kan man få bøde for at mangle CVR-nummer på bilen?", "Ja. Bekendtgørelsen om registrering af køretøjer fastsætter bøde for at overtræde § 85, som kræver navn og CVR på varebiler til udelukkende erhvervsmæssig brug."],
      ["Hvad koster folie på en varebil?", "Fra 370 kr. for firmanavn og CVR, fra 1.650 kr. for en logopakke og fra 15.995 kr. for en helfoliering af en lille varebil. Priserne er fra oktober 2026."],
      ["Hvor længe holder folie på en bil?", "3M angiver 8 år for 2080-serien i nordeuropæisk klima, og Avery Dennison angiver 10 år for farvet Supreme Wrapping Film i mellemeuropæisk klima. Begge tal gælder lodrette flader."],
      ["Må CVR-nummeret stå på et magnetskilt?", "Nej. Oplysningerne må ikke stå på skilte eller lignende, der kan tages af og på bilen."],
      ["Skal folien af, når leasingbilen afleveres?", "Ja, hos de leasingselskaber, vi har læst vilkår fra. Ayvens og NF Fleet opkræver 400–3.500 kr., hvis de selv skal fjerne den."],
      ["Må der sidde et skilt med lys på taget af en varebil?", "Ja. Skiltet skal give hvidt eller gult lys uden blink, højst 60 cd og intet lys bagud, og det skal sidde mindst 0,40 m fra tagets forkant, medmindre bilen har foranliggende styring og en taghøjde på mindst 1,80 m."],
      ["Hvornår kan en folieret varebil vaskes?", "Montagegruppen oplyser, at den kan vaskes 48 timer efter montering, med håndvask eller i en skånsom vaskehal og uden højtryk direkte mod foliens kanter."],
      ["Kan bilreklame trækkes fra i skat?", "Ligningslovens § 8, stk. 1, giver fradrag for reklameudgifter, der afholdes for at sælge varer og tjenesteydelser. Om der er fradrag, afgøres ud fra en konkret vurdering af reklameværdien for virksomheden."]
    ],
    kilder: [
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 70, § 85 og § 114", url: REG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DET, dato: "2026-10-04" },
      { navn: "Trykwerk: Autoreklame", url: TRYK, dato: "2026-10-07" },
      { navn: "VanKompagniet: Bilreklame og foliering af varebil", url: VANK, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MONT, dato: "2026-10-07" },
      { navn: "CPH Wrap: Prisliste", url: CPH, dato: "2026-10-07" },
      { navn: "3M: Wrap Film Series 2080, Product Bulletin (november 2023)", url: M3, dato: "2026-10-07" },
      { navn: "Avery Dennison: Supreme Wrapping Film, Product Data Sheet", url: AVERY, dato: "2026-10-07" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV, dato: "2026-10-07" },
      { navn: "NF Fleet: Afleveringsguide, leasingbiler, erhverv (maj 2025)", url: NF, dato: "2026-10-07" },
      { navn: "Nordania: Aflevering af leaset bil", url: NORD, dato: "2026-10-07" },
      { navn: "Viskilter: Bilreklame", url: VIS, dato: "2026-10-07" },
      { navn: "LaserTryk.dk: Magnetfolie", url: "https://www.lasertryk.dk/klistermaerker/magnetfolie", dato: "2026-10-04" },
      { navn: "LaserTryk.dk: CVR-klistermærker til bil", url: "https://www.lasertryk.dk/klistermaerker/cvr-klistermaerker", dato: "2026-10-04" },
      { navn: "Skattestyrelsen: Den juridiske vejledning, C.C.2.2.2.5.3 Fradrag for udgifter til reklamer", url: SKAT, dato: "2026-10-07" }
    ],
    cta_saetning: "Skal bilen have firmanavn eller folie, så skriv det, så kommer det med i forespørgslen."
  },
  nye_fakta: [
    ["RETTET: Avery Dennison angiver holdbarheden for Supreme Wrapping Film i mellemeuropæisk klima (middle European exposure conditions), ikke nordeuropæisk. Den gamle emneside skrev nordeuropæisk klima om begge producenter.", AVERY],
    ["BEK 663, § 114, stk. 3: med bøde straffes den, der overtræder bl.a. § 85.", REG],
    ["BEK 663, § 85, stk. 1: kravet gælder vare- og lastbiler med tilladt totalvægt på ikke over 4 t, registreret til udelukkende erhvervsmæssig brug; logo kan erstatte virksomhedens navn, ikke CVR-nummeret.", REG],
    ["VanKompagniet: skal flere biler dekoreres, kan logo, farver og grafisk opbygning skabe en ensartet linje i flåden, og kontaktoplysninger eller afdelingsnavne kan tilpasses den enkelte bil.", VANK],
    ["CPH Wrap (erhverv): lille varevogn fx VW Caddy, Ford Connect, Peugeot Partner; mellem varevogn fx VW Transporter, Ford Custom, Peugeot Expert; stor varevogn op til L2H2 fx VW Crafter, Ford Transit, Peugeot Boxer; XL/kassebil nævner også VW Crafter, Ford Transit, Peugeot Boxer.", CPH],
    ["Den juridiske vejledning C.C.2.2.2.5.3: udgifter til reklame, der afholdes i forbindelse med erhvervet for at opnå salg af varer og tjenesteydelser i det pågældende og senere indkomstår, kan fratrækkes (LL § 8, stk. 1); der er fradrag både når salget søges i afholdelsesåret og senere; udgifterne skal afholdes over for en ubestemt kreds af kunder eller potentielle kunder; vurderingen sker ud fra en konkret vurdering af reklameværdien.", SKAT],
    ["3M: den faktiske holdbarhed påvirkes bl.a. af underlaget og dets forberedelse, af solens vinkel og retning og af rengørings- og vedligeholdelsesmetoder.", M3],
    ["3M: printet 2080-folie skal dækkes af et overlaminat for at beskytte de printede områder.", M3],
    ["Montagegruppen sælger hulfolie fra 442 kr. pr. m² (ekskl. moms).", MONT],
    ["VanKompagniet udarbejder et dekorationsoplæg ud fra logo og biltype og sender det til godkendelse, før folien monteres; kunden bør have navn, CVR-nummer, logo, kontaktoplysninger, bilens mærke, model, årgang og størrelse, de flader, der skal dekoreres, og antal biler klar.", VANK],
    ["Montagegruppen: mindre projekter som dørfoliering kan klares på få timer.", MONT],
    ["Viskilter monterer typisk bilreklamen i løbet af et par timer, efter bilen er afleveret.", VIS],
    ["Ayvens (pr. juni 2025) og NF Fleet (maj 2025): afmontering af logo, lille 600 kr., mellem 1.200 kr. og stor 1.800 kr., ekskl. moms.", AYV],
    ["VanKompagniet: en løsning med firmanavn og CVR-nummer kræver mindre folie og et andet designarbejde end en stor dekoration.", VANK],
    ["Nordania: logo og eventuel foliering skal være fjernet før aflevering.", NORD],
    ["3M fraråder automatiske vaskehaller med børster, især til 2080 high gloss.", M3]
  ]
};
