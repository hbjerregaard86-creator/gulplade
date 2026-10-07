// Underside /til-varebilen/folie/helfoliering-af-varebil/ (07-10-2026)
var CPH = `https://cphwrap.dk/prisliste/`;
var TINT = `https://tintnwrapsolutions.dk/priser/`;
var M3 = `https://trimwel.ie/cdn/shop/files/3M_EU_PB_2080.pdf`;
var AVERY = `https://graphics.averydennison.com/content/dam/averydennison/graphics/eu/en/Data-Sheets/Supreme-Wrap/PDS-Supreme-Wrapping-Film-EN.pdf`;
var MONT = `https://montagegruppen.dk/foliering-og-wrap-af-biler-reklame-til-bil/`;
var REG = `https://www.retsinformation.dk/eli/lta/2025/663`;
var DET = `https://www.retsinformation.dk/eli/lta/2025/1484`;
var AYV = `https://www.ayvens.com/-/media/ayvens/public/dk/return-guides/ayvens_afleveringsguide_erhvervsleasing_vers2.pdf?rev=-1`;

module.exports = {
  id: "folie/helfoliering-af-varebil",
  side: {
    slug: "helfoliering-af-varebil",
    navn: "Helfoliering af varebil",
    titel: "Helfoliering af varebil: pris og holdbarhed",
    kort: `Her kan du se, hvad det koster at give varebilen ny farve eller fuldt print med folie, hvad der ikke er med i prisen, og hvor længe folien holder.`,
    beskrivelse: `Helfoliering af varebil fra 15.995 kr.: priser for fire bilstørrelser, tillæg, holdbarhed fra 3M og Avery, pleje, fjernelse og reglerne om ny farve.`,
    manchet: `En helfoliering giver varebilen ny farve eller fuldt print uden at røre lakken. Den koster fra 15.995 kr. for en lille varebil, og producenterne angiver 8–12 års holdbarhed i de fleste farver. Alle priser på siden er uden moms, undtagen hos Tint N’ Wrap Solutions, der ikke skriver, om momsen er med.`,
    visuel: {
      hero: "folie",
      kort_fortalt: [
        ["Lille varebil", "fra 15.995 kr.", "hos CPH Wrap, oktober 2026"],
        ["Holdbarhed", "8–12 år", "i de fleste farver ifølge 3M og Avery Dennison"],
        ["Fuld wrap", "1–3 dage", "for et større køretøj hos Montagegruppen"],
        ["Ny farve skal anmeldes", "Nej", "ingen regel i registreringsbekendtgørelsen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Hvad en helfoliering er",
        tekst: [
          `Bilen dækkes af støbt vinylfolie, der følger buer og fordybninger. Folien kan være ensfarvet, mat, metallic eller printet med firmaets grafik. Avery Dennisons Supreme Wrapping Film er 80 mikron tyk støbt vinyl med en lim, der kan fjernes igen efter brug.`,
          `Montagegruppen bruger ordet bilfolie om al slags folie på en bil, også logoer og mindre dekorationer. En wrap er den komplette indpakning, hvor folien dækker hele bilens overflade.`,
          `Avery Dennison anbefaler Supreme Wrapping Film til at give bilen et nyt udseende eller virksomhedens farver. Folien fås med en overflade i højglans, satin eller mat, der ligner lak.`
        ]
      },
      {
        overskrift: "Priser for varebiler",
        tekst: [
          `CPH Wrap har fire priser på helfoliering af erhvervsbiler efter bilens størrelse. En lille varevogn er fx VW Caddy, Ford Connect eller Peugeot Partner, og en mellem varevogn er fx VW Transporter, Ford Custom eller Peugeot Expert.`,
          `Stor varevogn går op til L2H2, fx VW Crafter, Ford Transit og Peugeot Boxer, og de samme modeller står også under XL-kassebil. Der er 5.000 kr. mellem den mindste og den største. Længder og højder er forklaret i <a href="/haandbogen/l1h1-l2h2-l3h2-varebil/">L1H1, L2H2 og L3H2</a>.`,
          `Tint N’ Wrap Solutions har én pris på 25.000 kr. for varebiler. Firmaet skriver, at prisen afhænger af farven, at det bruger folie fra 3M eller Avery Dennison, og at det giver mindst 3 års garanti.`
        ],
        tabel: {
          kolonner: ["Firma", "Bil", "Fra"],
          raekker: [
            ["CPH Wrap", "Lille varebil", "15.995 kr."],
            ["CPH Wrap", "Mellem varebil", "17.995 kr."],
            ["CPH Wrap", "Stor varebil", "19.995 kr."],
            ["CPH Wrap", "XL/kassebil", "20.995 kr."],
            ["Tint N’ Wrap Solutions", "Varebil", "25.000 kr."]
          ],
          note: `Kilder: <a href="${CPH}" rel="noopener">CPH Wrap</a> og <a href="${TINT}" rel="noopener">Tint N’ Wrap Solutions</a>, vejledende priser, set den 4. oktober 2026. Tint N’ Wrap oplyser, at prisen afhænger af farven, og bruger folie fra 3M eller Avery Dennison.`,
          visning: "skjul"
        },
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Lille varebil", 15995, "CPH Wrap"],
            ["Mellem varebil", 17995, "CPH Wrap"],
            ["Stor varebil", 19995, "CPH Wrap"],
            ["XL-kassebil", 20995, "CPH Wrap"],
            ["Varebil", 25000, "Tint N’ Wrap Solutions, moms ikke oplyst"]
          ],
          note: `Søjlerne viser fra-priser. Kilder: <a href="${CPH}" rel="noopener">CPH Wrap</a> og <a href="${TINT}" rel="noopener">Tint N’ Wrap Solutions</a>, vejledende priser, set den 4. oktober 2026. Tint N’ Wrap oplyser, at prisen afhænger af farven, og bruger folie fra 3M eller Avery Dennison.`
        }
      },
      {
        overskrift: "Det er ikke med i prisen",
        tekst: [
          `Fra-prisen dækker karrosseriets store flader. Kanter, kofangere og små dele kræver mere arbejde og folie, og CPH Wrap prissætter dem for sig. CPH Wrap skriver også, at priserne er vejledende og afhænger af individuelle ønsker og det endelige layout.`
        ],
        punkter: [
          `<strong>Dørfalser.</strong> CPH Wrap har dørfalserne uden for standardprisen.`,
          `<strong>Kofangere, spejle og håndtag.</strong> Erhvervspriserne er uden dem. Tillæg 1.500 kr. pr. kofanger og 750 kr. pr. sidespejl.`,
          `<strong>Logo og tekst.</strong> Lægges oven i prisen for helfolieringen.`,
          `<strong>Markant farveskift.</strong> 1.000 kr. oveni hos CPH Wrap, fx fra hvid til sort.`,
          `<strong>Design.</strong> 400 kr. pr. halve time hos CPH Wrap, medmindre andet er aftalt.`,
          `<strong>Vask.</strong> 500 kr., hvis bilen ikke afleveres nyvasket og uden voks eller coating.`
        ],
        punkt_ikon: "nej",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 260" role="img" aria-label="Folieret varebil set fra siden. Kofangere, sidespejl, dørhåndtag og en dørfals er markeret som dele, der ikke er med i standardprisen for en helfoliering."><g transform="translate(70,190)"><path class="tg-modul" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-skinne" x1="150" y1="76" x2="150" y2="188"/><rect class="tg-kuffert" x="304" y="166" width="12" height="20"/><rect class="tg-kuffert" x="62" y="166" width="10" height="20"/><rect class="tg-kuffert" x="284" y="114" width="14" height="9"/><rect class="tg-kuffert" x="246" y="132" width="14" height="5"/><line class="tg-gulvlinje" x1="5" y1="207" x2="395" y2="207"/><g class="tg-call"><line x1="150" y1="100" x2="150" y2="46"/><circle cx="150" cy="100" r="3"/><text class="tg-call__navn" x="20" y="24">Dørfalser</text><text class="tg-call__under" x="20" y="38">uden for standardprisen</text></g><g class="tg-call"><line x1="253" y1="134" x2="240" y2="46"/><circle cx="253" cy="134" r="3"/><text class="tg-call__navn" x="196" y="24">Håndtag</text><text class="tg-call__under" x="196" y="38">ikke med i prisen</text></g><g class="tg-call"><line x1="291" y1="118" x2="340" y2="62"/><circle cx="291" cy="118" r="3"/><text class="tg-call__navn" x="395" y="44" text-anchor="end">Sidespejle</text><text class="tg-call__under" x="395" y="58" text-anchor="end">750 kr. pr. spejl</text></g><g class="tg-call"><line x1="310" y1="186" x2="330" y2="224"/><circle cx="310" cy="186" r="3"/><text class="tg-call__navn" x="395" y="236" text-anchor="end">Kofangere</text><text class="tg-call__under" x="395" y="250" text-anchor="end">1.500 kr. pr. kofanger</text></g><text class="tg-lille" x="20" y="250">CPH WRAP, ERHVERVSPRISER</text></svg>`,
          tekst: `Skematisk. CPH Wraps erhvervspriser er uden kofangere, spejle, håndtag og dørfalser. Den fremhævede flade er den del, standardprisen dækker. Kilde: <a href="${CPH}" rel="noopener">CPH Wrap prisliste</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Tillæg hos CPH Wrap",
        tekst: [
          `CPH Wraps erhvervsprisliste har tillæg til helfoliering af varevogne. Med tillæggene kan prisen ende flere tusinde kroner over fra-prisen.`,
          `Et eksempel med CPH Wraps priser: En stor varevogn fra 19.995 kr. med to kofangere til 2 × 1.500 kr. og to sidespejle til 2 × 750 kr. koster fra 24.495 kr. Skal bilen skifte fra hvid til sort, kommer 1.000 kr. oveni, så prisen bliver 25.495 kr. før logo og tekst.`
        ],
        punkter: [
          `Kraftigt farveskift, fx hvid til sort: 1.000 kr.`,
          `Kofangere: 1.500 kr. pr. kofanger.`,
          `Sidespejle: 750 kr. pr. spejl.`,
          `Logoer og tekster koster ekstra.`,
          `Bilen skal leveres nyvasket og uden voks eller coating. Ellers koster det et vaskegebyr på 500 kr.`
        ],
        figur: {
          type: "soejler",
          enhed: "kr.",
          data: [
            ["Kraftigt farveskift", 1000, "fx hvid til sort"],
            ["Kofanger", 1500, "pr. kofanger"],
            ["Sidespejl", 750, "pr. spejl"],
            ["Vaskegebyr", 500, "hvis bilen ikke er nyvasket"]
          ],
          note: `Kilde: <a href="${CPH}" rel="noopener">CPH Wrap</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: <a href="${CPH}" rel="noopener">CPH Wrap prisliste</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Holdbarhed fra producenterne",
        tekst: [
          `Holdbarheden er det antal år, producenten forventer, at folien holder på en lodret flade udendørs. 3M regner med nordeuropæisk klima og en folie uden laminat, og Avery Dennison regner med mellemeuropæisk klima.`,
          `En leasingaftale på fire år ligger inden for producenternes tal for alle farver i tabellen. Metallic og perlemor fra Avery Dennison har den korteste holdbarhed med 5 år.`
        ],
        tabel: {
          kolonner: ["Folie", "Farve", "Levetid, lodret flade"],
          raekker: [
            ["3M Wrap Film 2080", "Alle farver og strukturer", "8 år"],
            ["Avery Dennison Supreme Wrapping Film", "Hvid og sort", "12 år"],
            ["Avery Dennison Supreme Wrapping Film", "Farver", "10 år"],
            ["Avery Dennison Supreme Wrapping Film", "Metallic og perlemor", "5 år"]
          ],
          note: `Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 258" role="img" aria-label="Varebil set fra siden med solen over bilen. Tag og motorhjelm er vandrette og får mere sol end de lodrette sider, som producenternes tal for holdbarhed gælder for."><defs><marker id="pil-helfol-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><circle class="tg-modul" cx="34" cy="30" r="14"/><line class="tg-pil" x1="50" y1="40" x2="110" y2="78" marker-end="url(#pil-helfol-1)"/><line class="tg-pil" x1="52" y1="32" x2="200" y2="78" marker-end="url(#pil-helfol-1)"/><line class="tg-pil" x1="40" y1="48" x2="54" y2="126" marker-end="url(#pil-helfol-1)"/><g transform="translate(60,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-skinne" x1="64" y1="84" x2="254" y2="84"/><line class="tg-skinne" x1="284" y1="122" x2="298" y2="129"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="230" y1="84" x2="270" y2="46"/><circle cx="230" cy="84" r="3"/><text class="tg-call__navn" x="395" y="22" text-anchor="end">Tag og motorhjelm</text><text class="tg-call__under" x="395" y="36" text-anchor="end">vandrette flader, mere sol</text></g><g class="tg-call"><line x1="150" y1="150" x2="150" y2="226"/><circle cx="150" cy="150" r="3"/><text class="tg-call__navn" x="158" y="236">Siderne</text><text class="tg-call__under" x="158" y="250">lodrette flader, her gælder årene</text></g></svg>`,
          tekst: `Skematisk. Producenterne angiver holdbarheden for lodrette flader, og den stiplede linje viser de vandrette flader. Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Vandrette flader som tag og motorhjelm får mere sol. Avery Dennison skriver, at holdbarheden falder ved sydvendt eksponering, langvarig varme, industriforurening og stor højde.`
        ]
      },
      {
        overskrift: "Temperatur ved montering",
        tekst: [
          `Folien skal monteres inden for producentens temperaturområde. Efter montering tåler den langt større udsving, men 3M skriver, at folien ikke skal udsættes for yderpunkterne i længere tid.`,
          `3M anbefaler 18–23 °C, fordi folien er lettest at montere i det område. 3M's folie skal monteres tørt, altså uden vand eller monteringsvæske på limsiden.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Montering, 3M 2080", "16–32", "°C"],
            ["Montering, Avery Supreme", "min. 10", "°C"],
            ["Brug, 3M 2080", "−54 til 107", "°C"],
            ["Brug, Avery Supreme", "−50 til 110", "°C"]
          ],
          note: `3M oplyser, at folien bedst monteres ved 18–23 °C. Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080</a> og <a href="${AVERY}" rel="noopener">Avery Dennison PDS</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan er folien bygget op",
        tekst: [
          `En wrapfolie består af selve filmen og et lag lim, og tykkelsen er opgivet med og uden lim. Hos Avery Dennison er det limen, der gør, at folien kan fjernes igen efter brug.`,
          `3M's blanke farver leveres med en beskyttende film på forsiden. Den kan sidde på under hele monteringen og skal tages af, før folien eftervarmes.`
        ],
        punkter: [
          `<strong>Avery Dennison Supreme Wrapping Film.</strong> Filmen er 80 µm støbt vinyl i to lag og 110 µm med lim.`,
          `<strong>3M 2080.</strong> Folien er 0,09 mm uden lim og 0,11 mm med lim. Limen har luftkanaler, der leder luften ud til kanten, og folien må kun monteres tørt.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Snit gennem en helfoliering: vinylfilm, lim, lak og plade"><defs><marker id="pil-helfol-2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="110" y="40" width="220" height="44"/><rect class="tg-hylde" x="110" y="84" width="220" height="18"/><rect class="tg-profil" x="110" y="102" width="220" height="32"/><rect class="tg-gulv" x="110" y="134" width="220" height="30"/><text class="tg-fremhaev" x="10" y="66">Vinylfilm</text><text x="10" y="97">Lim</text><text x="10" y="122">Bilens lak</text><text x="10" y="153">Plade</text><g class="tg-maal"><line x1="345" y1="40" x2="345" y2="84" marker-start="url(#pil-helfol-2)" marker-end="url(#pil-helfol-2)"/><text x="352" y="66">80 µm</text></g><g class="tg-maal"><line x1="345" y1="84" x2="345" y2="102" marker-start="url(#pil-helfol-2)" marker-end="url(#pil-helfol-2)"/><text x="352" y="97">30 µm</text></g><text class="tg-lille" x="10" y="190">AVERY SUPREME WRAPPING FILM · IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk snit. Hos Avery Dennison er limlaget forskellen mellem 80 µm film og 110 µm med lim. Ikke målfast.`
        }
      },
      {
        overskrift: "3M og Avery side om side",
        tekst: [
          `De to folier, vi har datablade fra, ligner hinanden på tykkelse, men har forskellige tal for montering, holdbarhed og lagring. Datablade gælder folien fra fabrikken, og foliefirmaet vælger den konkrete folie og farve.`,
          `Lagringstiden er den tid, folien kan ligge på rullen før brug. Den siger noget om foliefirmaets lager og ikke om, hvor længe folien holder på bilen.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Egenskab", "3M 2080", "Avery Supreme"],
          raekker: [
            ["Film uden lim", "0,09 mm", "80 µm"],
            ["Film med lim", "0,11 mm", "110 µm"],
            ["Montering", "Kun tørt, 16–32 °C", "Mindst 10 °C"],
            ["Holdbarhed, farver", "8 år", "10 år"],
            ["Overflader", "Blank, satin, mat og struktur", "Højglans, satin og mat"],
            ["Lagring før brug", "Højst 3 år fra produktion", "2 år ved 22 °C"],
            ["Fjernelse", "Med varme og/eller kemikalier", "Kan fjernes i hele levetiden"]
          ],
          note: `Kilder: <a href="${M3}" rel="noopener">3M Product Bulletin 2080, november 2023</a> og <a href="${AVERY}" rel="noopener">Avery Dennison PDS, revision 6</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Underlag og ruder",
        tekst: [
          `Folien hæfter forskelligt på forskellige overflader. 3M opgiver, hvilke underlag 2080-folien er beregnet til, og hvor folieringsfirmaet skal teste først.`
        ],
        punkter: [
          `<strong>Underlag.</strong> 3M angiver aluminium, krom, glas, ABS og lak for 2080-folien. På pulverlak og vandbaseret lak skal man kontrollere, om folien hæfter.`,
          `<strong>Glas.</strong> 3M skriver, at folie på glas kan få glasset til at revne ved ujævn opvarmning i sol, og at 3M ikke hæfter for glasbrud.`,
          `<strong>Regler for ruder.</strong> Du kan se reglerne i <a href="/til-varebilen/folie/solfilm-paa-ruder/">solfilm på ruder</a>.`
        ]
      },
      {
        overskrift: "Lakskader under folien",
        tekst: [
          `Montagegruppen oplyser, at folien ikke retter buler, men kan dække små kosmetiske fejl. Ujævnheder i lakken kan ses i resultatet. En skadet wrap kan repareres ved at udskifte de beskadigede dele af folien.`,
          `Montagegruppen anbefaler derfor, at lakskader repareres, før folien kommer på. På en leasingbil skal folien af før afleveringen, og derefter vurderes lakken efter leasingselskabets grænser for buler og ridser.`
        ]
      },
      {
        overskrift: "Sådan foregår helfolieringen",
        tekst: [
          `En helfoliering tager længere tid end en logopakke, fordi hele bilen skal dækkes. Montagegruppen oplyser, at mindre opgaver som foliering af døre tager få timer, mens en fuld wrap tager dage.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Lakken tjekkes", "Montagegruppen anbefaler at reparere lakskader, før folien kommer på."],
            ["Vask", "Bilen afleveres nyvasket og uden voks eller coating."],
            ["Montering", "3M 2080 monteres tørt ved 16–32 °C."],
            ["Arbejdstid", "En fuld wrap af et større køretøj tager 1–3 dage hos Montagegruppen."],
            ["Første vask", "Bilen kan vaskes 48 timer efter montering."]
          ]
        }
      },
      {
        overskrift: "Pleje",
        tekst: [
          `3M anbefaler et vådt, ikke-slibende rengøringsmiddel uden opløsningsmidler med en pH-værdi mellem 3 og 11. Folien må ikke skrubbes, fordi ridser kan blive synlige.`,
          `3M fraråder vaskehaller med børster, især til den højglansede udgave af 2080, og anbefaler at parkere væk fra buske og træer, der kan ridse bilen. Montagegruppen anbefaler håndvask eller en skånsom vaskehal og intet højtryk direkte mod foliens kanter.`,
          `Folien tåler en del. 3M skriver, at 2080 modstår milde baser, milde syrer, salt og lejlighedsvis spild af brændstof, og Avery Dennison oplyser, at Supreme Wrapping Film tåler olie, fedt og motorolie.`
        ]
      },
      {
        overskrift: "Fjernelse",
        tekst: [
          `3M skriver, at 2080-folien kan fjernes med varme og/eller kemikalier fra de fleste overflader inden for garantiperioden. Avery Dennison beskriver Supreme Wrapping Film med lang tids aftagelighed i hele produktets levetid.`,
          `Montagegruppen anbefaler, at folien fjernes af professionelle, så lakken forbliver intakt. Ifølge Montagegruppen fremstår lakken under folien normalt som ny, når folien fjernes korrekt.`
        ]
      },
      {
        overskrift: "Skal farveskiftet registreres",
        tekst: [
          `Bekendtgørelsen om registrering af køretøjer har ingen regel om at anmelde en ny farve. Anmeldelsespligten i § 47, stk. 3, gælder ændringer af indretning, udstyr, art, brug eller tilkobling, som skal godkendes efter bekendtgørelsen om godkendelse og syn af køretøjer.`,
          `CVR-mærkningen skal have en farve, der klart afviger fra bilens. Skifter bilen farve, skal navn og CVR stadig stå tydeligt. Får en hvid bil en mørk folie, skal en mørk CVR-tekst derfor skiftes ud.`
        ]
      },
      {
        overskrift: "Det kigger synet på",
        tekst: [
          `Folien må ikke dække ruderne foran, og reflekterende folie og reflekser har egne krav. Det er de punkter, hvor en helfoliering møder reglerne for synet.`
        ],
        punkter: [
          `<strong>Ruder.</strong> Forrude og forreste sideruder må ikke dækkes af film, bortset fra strimlen øverst på forruden.`,
          `<strong>Reflekterende folie.</strong> Reflekterende reklame på siden kræver fuld konturafmærkning og E-godkendt folie i klasse D eller E.`,
          `<strong>Refleks bagpå.</strong> De to påbudte røde reflekser bagpå skal kunne ses.`,
          `Mere om synet i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Folieret varebil set fra siden med forrude og forreste siderude uden film, reflekterende folie inden for fuld konturafmærkning og reflekser bagpå"><path class="tg-profil" d="M30,170 L30,126 Q32,118 50,115 L84,76 Q87,73 93,73 L340,73 Q346,73 346,79 L346,170 Z"/><path class="tg-modul" d="M88,80 L118,80 L118,108 L60,111 Z"/><line class="tg-doer" x1="52" y1="112" x2="84" y2="77"/><rect class="tg-doer" fill="none" x="136" y="80" width="204" height="84"/><rect class="tg-kuffert" x="170" y="100" width="110" height="40"/><rect class="tg-modul" x="340" y="138" width="6" height="14"/><circle class="tg-hylde" cx="78" cy="172" r="14"/><circle class="tg-hylde" cx="290" cy="172" r="14"/><line class="tg-gulvlinje" x1="10" y1="186" x2="390" y2="186"/><g class="tg-call"><line x1="100" y1="94" x2="100" y2="44"/><circle cx="100" cy="94" r="3"/><text class="tg-call__navn" x="20" y="22">Forrude og forreste siderude</text><text class="tg-call__under" x="20" y="36">ingen film, kun strimlen øverst</text></g><g class="tg-call"><line x1="225" y1="100" x2="280" y2="44"/><circle cx="225" cy="100" r="3"/><text class="tg-call__navn" x="250" y="22">Reflekterende folie</text><text class="tg-call__under" x="250" y="36">klasse D eller E</text></g><g class="tg-call"><line x1="343" y1="152" x2="343" y2="196"/><circle cx="343" cy="152" r="3"/><text class="tg-call__navn" x="390" y="210" text-anchor="end">Røde reflekser bagpå</text><text class="tg-call__under" x="390" y="224" text-anchor="end">skal kunne ses</text></g></svg>`,
          tekst: `Skematisk. Reflekterende folie på siden kræver fuld konturafmærkning og folie i klasse D eller E. De to påbudte reflekser bagpå skal kunne ses. Kilde: <a href="${DET}" rel="noopener">BEK nr. 1484 af 03/12/2025</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Tid og leasing",
        tekst: [
          `Montagegruppen oplyser 1–3 dage for en fuld wrap af et større køretøj. På en leasingbil skal folien af før aflevering. Ayvens og NF Fleet tager 3.500 kr. for at fjerne fuld dekoration. Se <a href="/til-varebilen/folie/folie-paa-leasingbil/">folie på leasingbil</a>.`,
          `Sammenlagt koster en helfoliering af en lille varebil hos CPH Wrap og en fjernelse hos Ayvens fra 19.495 kr. over leasingperioden, hvis leasingselskabet selv fjerner folien. Det er et eksempel uden tillæg.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Fuld wrap af et større køretøj", "1–3", "dage"],
            ["Fjernelse af fuld dekoration", "3.500", "kr."]
          ],
          note: `Montagegruppen oplyser tiden. Gebyret for at fjerne folien er fra Ayvens og NF Fleet. Kilder: <a href="${MONT}" rel="noopener">Montagegruppen</a> og <a href="${AYV}" rel="noopener">Ayvens afleveringsguide</a>, set den 7. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal wrapfirmaet vide",
    spoergsmaal_manchet: "Så kan prisen gives uden tillæg bagefter.",
    spoergsmaal: [
      "Bilens model og størrelse, fx L2H2 eller L3H2.",
      "Nuværende farve og ønsket farve eller print.",
      "Om dørfalser, kofangere, spejle og håndtag skal med.",
      "Om der skal logo og tekst oven på folien.",
      "Om bilen er leaset, og hvornår den skal afleveres.",
      "Om der er skader eller lakskader, folien skal dække."
    ],
    faq: [
      ["Hvad koster det at helfoliere en varebil?", "Fra 15.995 kr. for en lille varebil og 19.995–20.995 kr. for store varebiler og kassebiler hos CPH Wrap. Priserne er fra oktober 2026."],
      ["Hvor længe holder en helfoliering?", "3M angiver 8 år for 2080-serien. Avery Dennison angiver 10 år for farver og 12 år for hvid og sort på lodrette flader."],
      ["Skal en ny farve anmeldes til Motorstyrelsen?", "Bekendtgørelsen om registrering af køretøjer har ingen regel om at anmelde en ny farve. Anmeldelsespligten gælder ændringer, der skal godkendes efter reglerne om godkendelse og syn."],
      ["Kan folien fjernes igen?", "Ja. 3M skriver, at 2080-folien kan fjernes med varme og/eller kemikalier fra de fleste overflader inden for garantiperioden."],
      ["Hvor lang tid tager det?", "Montagegruppen oplyser 1–3 dage for en fuld wrap af et større køretøj."],
      ["Ved hvilken temperatur kan en varebil folieres?", "3M angiver 16–32 °C for 2080-folien og 18–23 °C som det mest gunstige. Avery Dennison angiver mindst 10 °C for Supreme Wrapping Film."],
      ["Kan en bil med lakskader folieres?", "Montagegruppen oplyser, at folien ikke retter buler, men kan dække små kosmetiske fejl, og at ujævnheder kan ses i resultatet. Montagegruppen anbefaler at reparere lakskader først."],
      ["Er kofangere og spejle med i prisen?", "Ikke hos CPH Wrap. Erhvervspriserne er uden kofangere, spejle, håndtag og dørfalser, og tillægget er 1.500 kr. pr. kofanger og 750 kr. pr. sidespejl."],
      ["Kan en folieret varebil køre gennem en vaskehal?", "3M fraråder vaskehaller med børster, især til højglans. Montagegruppen anbefaler håndvask eller en skånsom vaskehal uden højtryk direkte mod kanterne."]
    ],
    kilder: [
      { navn: "CPH Wrap: Prisliste", url: CPH, dato: "2026-10-07" },
      { navn: "Tint N’ Wrap Solutions: Priser", url: TINT, dato: "2026-10-07" },
      { navn: "3M: Wrap Film Series 2080, Product Bulletin (november 2023)", url: M3, dato: "2026-10-07" },
      { navn: "Avery Dennison: Supreme Wrapping Film, Product Data Sheet", url: AVERY, dato: "2026-10-07" },
      { navn: "Montagegruppen: Foliering og wrap af biler", url: MONT, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om registrering af køretøjer (BEK nr. 663 af 10/06/2025), § 47 og § 85", url: REG, dato: "2026-10-07" },
      { navn: "Retsinformation: Bekendtgørelse om detailforskrifter for køretøjers indretning, udstyr og anvendelse (BEK nr. 1484 af 03/12/2025)", url: DET, dato: "2026-10-04" },
      { navn: "Ayvens: Afleveringsguide, erhverv, person- og varebiler", url: AYV, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Montagegruppen: bilfolie er en bred betegnelse for al foliering, fx reklamer, logoer og mindre dekorationer; wrap er en komplet indpakning, der dækker hele bilens overflade.", MONT],
    ["Avery Dennison anbefaler Supreme Wrapping Film til fuld indpakning af køretøjer for at opdatere udseendet eller brande med firmafarver; finish i meget høj glans, satin eller mat, 'paint-like'.", AVERY],
    ["CPH Wrap (erhverv): lille varevogn fx VW Caddy, Ford Connect, Peugeot Partner; mellem fx VW Transporter, Ford Custom, Peugeot Expert; stor op til L2H2 fx VW Crafter, Ford Transit, Peugeot Boxer; XL/kassebil nævner samme tre modeller.", CPH],
    ["Tint N’ Wrap Solutions skriver 'Min. 3 års garanti' på prissiden; varebiler 25.000 kr.", TINT],
    ["CPH Wrap: alle priser er vejledende og afhænger af individuelle ønsker og endeligt layout.", CPH],
    ["Regneeksempel med CPH Wraps erhvervspriser: stor varevogn 19.995 + 2 × 1.500 (kofangere) + 2 × 750 (sidespejle) = 24.495 kr.; plus kraftigt farveskift 1.000 = 25.495 kr.", CPH],
    ["Regneeksempel: CPH Wrap lille varevogn 15.995 kr. + Ayvens' gebyr for afmontering af logo, fuld 3.500 kr. = 19.495 kr.", AYV],
    ["3M: temperaturområdet efter montering (−54 til +107 °C) gælder ikke i længere tid ved yderpunkterne; påføringsmetode: kun tør.", M3],
    ["3M: blanke og højglansede farvefilm har en beskyttende film, der kan sidde på under hele monteringen og skal fjernes før eftervarmning.", M3],
    ["3M 2080: liner for gloss, satin, matte og texture farvefilm; holdbarhed på lager højst 3 år fra produktionsdato. Avery Supreme: shelf life 2 år ved 22 °C og 50–55 % RH; Excellent Long Term Removability i hele produktets levetid.", AVERY],
    ["Montagegruppen anbefaler, at eventuelle lakskader repareres, inden wrap påføres.", MONT],
    ["3M fraråder automatiske vaskehaller med børster, især til 2080 high gloss, og anbefaler at undgå parkering nær buske og træer, der kan ridse.", M3],
    ["3M 2080 modstår milde baser, milde syrer og salt og lejlighedsvis spild af brændstof; Avery Supreme: ingen effekt ved udsættelse for olie, fedt, motorolie og milde syrer og baser.", AVERY],
    ["Montagegruppen anbefaler, at folien fjernes af professionelle, og skriver, at lakken under normalt fremstår som ny, når folien fjernes korrekt.", MONT]
  ]
};
