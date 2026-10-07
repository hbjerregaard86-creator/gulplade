// Underside /til-varebilen/salg-af-varebil/eksport-af-varebil/ (07-10-2026)
var EKSPORT = `https://motorst.dk/erhverv/eksport-af-bil-eller-mc`;
var GEBYR = `https://motorst.dk/nyheder/presse-og-nyheder/nu-nedsaetter-motorstyrelsen-gebyr-paa-eksportomraadet`;
var BINDENDE = `https://motorst.dk/bindende-svar`;
var AFMELD = `https://motorst.dk/erhverv/nummerplader/afmeld-koeretoej-og-aflever-nummerplader`;
var BORGER = `https://motorst.dk/borger/min-foerste-bil/afmelding-salg-eller-eksport`;
var PROEVE = `https://motorst.dk/erhverv/nummerplader/proevemaerker-og-faste-proeveskilte`;
var BLANKET = `https://motorst.dk/blanketter/udfoersel-og-kvittering-for-modtagelse-af-motorkoeretoej`;
var APPLUS = `https://applusbilsyn.dk/bilsyn/bilsynspriser/`;
var SKAT_EU = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-i-eu/moms-ved-salg-af-varer-og-ydelser-i-eu`;
var SKAT_DOK = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-i-eu/dokumentationskrav-ved-handel-med-lande-i-eu`;
var SKAT_UD = `https://skat.dk/erhverv/moms/moms-ved-handel-med-udlandet/moms-ved-handel-med-virksomheder/moms-ved-handel-med-lande-uden-for-eu/moms-ved-salg-af-varer-og-ydelser-i-lande-uden-for-eu`;

module.exports = {
  id: "salg-af-varebil/eksport-af-varebil",
  side: {
    slug: "eksport-af-varebil",
    navn: "Eksport af varebil",
    titel: "Eksport af varebil: eksportgodtgørelse og moms",
    kort: `Sådan får du eksportgodtgørelse af registreringsafgiften, når varebilen sælges til udlandet, og hvad der gælder for syn, gebyr, dokumentation og moms.`,
    beskrivelse: `Sælger du varebilen til udlandet, kan du få eksportgodtgørelse fra Motorstyrelsen. Se de fem trin, toldsyn, gebyret på 2.250 kr., frister og moms.`,
    manchet: `Når en varebil føres ud af Danmark og afmeldes, kan en del af registreringsafgiften betales tilbage som eksportgodtgørelse. Motorstyrelsen værdifastsætter bilen efter et udvidet registreringssyn. Salget til en virksomhed i udlandet er normalt uden dansk moms.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Gebyr", "2.250 kr.", "for Motorstyrelsens sagsbehandling"],
        ["Toldsyn", "Højst 4 uger", "gammelt ved anmodningen"],
        ["Udførsel dokumenteret", "Senest 3 måneder", "efter anmodningen"],
        ["Udbetaling", "Ca. 9 uger", "efter fyldestgørende dokumentation"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Registreringsafgiften kan komme tilbage",
        tekst: [
          `Registreringsafgiften betales for at bruge bilen på de danske veje i hele bilens levetid. Sælges bilen til en udenlandsk køber, kan en del af afgiften betales tilbage, når bilen har forladt Danmark. Det kaldes eksportgodtgørelse.`,
          `Der er to betingelser. Bilen skal være ført ud af Danmark, og den skal være afmeldt i Motorregistret. Motorstyrelsen oplyser først beløbet, når bilen eksporteres, og godtgørelsen kan ikke blive større end den registreringsafgift, der oprindelig blev betalt for bilen.`,
          `Står den, der søger om godtgørelsen, ikke som ejer i Motorregistret, skal ejerskabet dokumenteres, fx med en slutseddel eller en købsfaktura.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil, der krydser grænsen. Når bilen er afmeldt i Motorregistret og ført ud af Danmark, kan en del af registreringsafgiften udbetales til NemKonto."><defs><marker id="pil-eksport-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g transform="translate(30,170)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><line class="tg-gulvlinje" x1="5" y1="187" x2="395" y2="187"/><line class="tg-skinne" x1="320" y1="22" x2="320" y2="198"/><text class="tg-lille" x="314" y="16" text-anchor="end">DANMARK</text><text class="tg-lille" x="326" y="16">UDLANDET</text><line class="tg-pil" x1="284" y1="130" x2="390" y2="130" marker-end="url(#pil-eksport-1)"/><g class="tg-call"><line x1="120" y1="100" x2="120" y2="42"/><circle cx="120" cy="100" r="3"/><text class="tg-call__navn" x="10" y="20">Del af registreringsafgiften</text><text class="tg-call__under" x="10" y="34">udbetales til NemKonto</text></g><g class="tg-call"><line x1="360" y1="130" x2="360" y2="82"/><circle cx="360" cy="130" r="3"/><text class="tg-call__navn" x="395" y="60" text-anchor="end">Ført ud af Danmark</text><text class="tg-call__under" x="395" y="74" text-anchor="end">inden 3 måneder</text></g><g class="tg-call"><line x1="150" y1="140" x2="150" y2="198"/><circle cx="150" cy="140" r="3"/><text class="tg-call__navn" x="156" y="214">Afmeldt i Motorregistret</text><text class="tg-call__under" x="156" y="228">pladerne er afleveret</text></g></svg>`,
          tekst: `Skematisk. De to betingelser for eksportgodtgørelse. Kilder: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen: Om eksport og registreringsafgift</a> og <a href="${BORGER}" rel="noopener">Afmelding, salg eller eksport</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fem trin",
        tekst: [
          `Motorstyrelsen deler forløbet op i fem trin. Rækkefølgen betyder noget, fordi synet højst må være 4 uger gammelt, når virksomheden beder om værdifastsættelsen. Bilen skal derfor synes kort før anmodningen.`,
          `Gebyret på 2.250 kr. betales med kort, når anmodningen sendes. Pladerne afleveres hos en nummerpladeoperatør, og dokumentationen for salget og udførslen sendes til Motorstyrelsen på mail.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Udvidet registreringssyn", "Bilen får registreringssyn og toldsyn i en synshal."],
            ["Anmod om værdifastsættelse", "Du anmoder i Motorregistret med MitID og betaler gebyret med kort."],
            ["Aflever pladerne", "Pladerne afleveres hos en nummerpladeoperatør."],
            ["Send dokumentation", "Dokumentationen sendes til motorekspedition@motorst.dk mærket \"Eksport\" og journalnummeret."],
            ["Udbetaling", "Motorstyrelsen udbetaler til NemKonto."]
          ]
        },
        efter: [
          `Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen: eksport af bil</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Udvidet registreringssyn",
        tekst: [
          `Det udvidede registreringssyn består af et registreringssyn og et toldsyn i en synshal. Ved import skal synet bekræfte, at bilen er i registreringsklar stand og kan godkendes ved syn, og at bilens vedligeholdelsesstand er angivet rigtigt hos Motorstyrelsen. Ved eksport er det det samme udvidede syn, bilen skal have.`,
          `Synshallen registrerer samtidig bilen i Motorregistret med de rigtige oplysninger. Det er med til at sikre, at afgiften bliver beregnet på et rigtigt grundlag.`,
          `Applus+ Bilsyn tager 500–740 kr. for et registreringssyn, og prisen varierer fra synshal til synshal. Applus+ oplyser ikke prisen for toldsynet. Synet må højst være 4 uger gammelt, når virksomheden beder om værdifastsættelse.`
        ],
        efter: [
          `Kilder: <a href="${BORGER}" rel="noopener">Motorstyrelsen: Afmelding, salg eller eksport</a> og <a href="${APPLUS}" rel="noopener">Applus+ Bilsyn: Bilsynspriser</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Anmodningen i Motorregistret",
        tekst: [
          `Anmodningen om værdifastsættelse sendes i Motorregistret med MitID. Virksomheden vælger Motor, Motorregistret, Registreringsafgift og Anmod om værdifastsættelse og taster bilens RAK-koder eller kontroltal fra registreringsattesten.`,
          `Når skærmbillederne er udfyldt og godkendt, betales gebyret med kort. Derefter kommer en kvittering med et journalnummer, som skal stå på dokumentationen senere.`,
          `Uden MitID sendes et brev med en kopi af registreringsattesten og dokumentation for ejerskabet til Motorstyrelsen i Sakskøbing. Melder Motorregistret, at der allerede er en aktiv anmeldelse under behandling, kan den tidligere ansøgning annulleres med en blanket.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 200" role="img" aria-label="Vejen i Motorregistret: Motor, Motorregistret, Registreringsafgift og Anmod om værdifastsættelse med RAK-koder eller kontroltal. Derefter betales gebyret på 2.250 kr. med kort, og der kommer en kvittering med journalnummer."><defs><marker id="pil-eksport-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="10" y="14" width="80" height="34"/><text x="50" y="35" text-anchor="middle">Motor</text><line class="tg-pil" x1="92" y1="31" x2="106" y2="31" marker-end="url(#pil-eksport-2)"/><rect class="tg-kasse" x="110" y="14" width="110" height="34"/><text x="165" y="35" text-anchor="middle">Motorregistret</text><line class="tg-pil" x1="222" y1="31" x2="246" y2="31" marker-end="url(#pil-eksport-2)"/><rect class="tg-kasse" x="250" y="14" width="140" height="34"/><text x="320" y="35" text-anchor="middle">Registreringsafgift</text><line class="tg-pil" x1="320" y1="48" x2="272" y2="84" marker-end="url(#pil-eksport-2)"/><rect class="tg-modul" x="90" y="86" width="220" height="44"/><text class="tg-modul__tekst" x="200" y="104" text-anchor="middle">ANMOD OM VÆRDIFASTSÆTTELSE</text><text x="200" y="122" text-anchor="middle">RAK-koder eller kontroltal</text><line class="tg-pil" x1="150" y1="130" x2="110" y2="152" marker-end="url(#pil-eksport-2)"/><rect class="tg-kasse" x="10" y="154" width="180" height="40"/><text x="100" y="170" text-anchor="middle">Betal gebyret</text><text x="100" y="186" text-anchor="middle">på 2.250 kr. med kort</text><line class="tg-pil" x1="192" y1="174" x2="206" y2="174" marker-end="url(#pil-eksport-2)"/><rect class="tg-kasse" x="210" y="154" width="180" height="40"/><text x="300" y="170" text-anchor="middle">Kvittering med</text><text x="300" y="186" text-anchor="middle">journalnummer</text></svg>`,
          tekst: `Skematisk. Anmodningen om værdifastsættelse i Motorregistret. Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen: Om eksport og registreringsafgift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Frister",
        tekst: [
          `Tre frister styrer forløbet. Toldsynet er kun gyldigt i 4 uger, og bilen skal være dokumenteret udført senest 3 måneder efter anmodningen. Udbetalingen sker ca. 9 uger efter, at Motorstyrelsen har fået fyldestgørende dokumentation.`,
          `Motorstyrelsen kan indkalde bilen til besigtigelse. Som udgangspunkt kommer en indkaldelse inden for 14 dage efter anmodningen, men Motorstyrelsen kan altid indkalde en bil.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 180" role="img" aria-label="Frister ved eksport: toldsyn højst 4 uger gammelt, udførsel senest 3 måneder efter anmodning, udbetaling ca. 9 uger efter dokumentation."><defs><marker id="pil-eksport-3" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><g class="tg-maal"><line x1="32" y1="36" x2="108" y2="36" marker-start="url(#pil-eksport-3)" marker-end="url(#pil-eksport-3)"/><text x="70" y="28" text-anchor="middle">≤ 4 uger</text></g><g class="tg-maal"><line x1="112" y1="36" x2="268" y2="36" marker-start="url(#pil-eksport-3)" marker-end="url(#pil-eksport-3)"/><text x="190" y="28" text-anchor="middle">≤ 3 måneder</text></g><g class="tg-maal"><line x1="272" y1="36" x2="388" y2="36" marker-start="url(#pil-eksport-3)" marker-end="url(#pil-eksport-3)"/><text x="330" y="28" text-anchor="middle">ca. 9 uger</text></g><line class="tg-gulvlinje" x1="20" y1="110" x2="400" y2="110"/><rect class="tg-modul" x="24" y="104" width="12" height="12" rx="2"/><rect class="tg-modul" x="104" y="104" width="12" height="12" rx="2"/><rect class="tg-modul" x="264" y="104" width="12" height="12" rx="2"/><rect class="tg-modul" x="384" y="104" width="12" height="12" rx="2"/><text x="20" y="78" class="tg-fremhaev">Udvidet syn</text><text x="20" y="92">registrering + told</text><text x="110" y="136" class="tg-fremhaev" text-anchor="middle">Anmodning</text><text x="110" y="150" text-anchor="middle">gebyr 2.250 kr.</text><text x="270" y="78" class="tg-fremhaev" text-anchor="middle">Udført</text><text x="270" y="92" text-anchor="middle">dokumentation</text><text x="400" y="136" class="tg-fremhaev" text-anchor="end">Udbetaling</text><text x="400" y="150" text-anchor="end">til NemKonto</text><text x="20" y="174" class="tg-lille">SKEMATISK, IKKE MÅLFAST</text></svg>`,
          tekst: `Skematisk. Fristerne ved eksportgodtgørelse. Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Priser",
        tekst: [
          `Motorstyrelsens gebyr for sagsbehandlingen er 2.250 kr. En værdifastsættelse i Motorregistret er ellers gratis, men gebyret skal betales, når virksomheden søger om eksportgodtgørelse.`,
          `Gebyret blev indført i 2019 og lå på 2.350 kr. fra juli 2020. Den 1. juli 2024 blev det sat ned til 2.250 kr., fordi Motorstyrelsen behandler sagerne hurtigere, og gebyret skal dække omkostningerne ved at behandle dem.`,
          `Oveni kommer synet i synshallen og nummerpladeoperatørens gebyr for at afmelde bilen.`
        ],
        tabel: {
          kolonner: ["Ydelse", "Pris"],
          raekker: [
            ["Motorstyrelsens sagsbehandling, eksportgodtgørelse", "2.250 kr."],
            ["Bindende svar om registreringsafgift", "500 kr."],
            ["Registreringssyn hos Applus+ Bilsyn", "500–740 kr."],
            ["Afmelding hos nummerpladeoperatør", "operatørens eget gebyr"]
          ],
          note: `Kilder: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, <a href="${BINDENDE}" rel="noopener">Motorstyrelsen: bindende svar</a>, <a href="${APPLUS}" rel="noopener">Applus+ Bilsyn</a> (pris varierer pr. synshal; Applus+ oplyser ikke moms eller pris for toldsyn) og <a href="${AFMELD}" rel="noopener">Motorstyrelsen: afmeld</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "tidslinje",
          punkter: [
            ["2019", "Gebyret for eksportgodtgørelse bliver indført."],
            ["Juli 2020", "Gebyret er 2.350 kr."],
            ["1. juli 2024", "Gebyret bliver sat ned til 2.250 kr."]
          ],
          note: `Kilde: <a href="${GEBYR}" rel="noopener">Motorstyrelsen: Nu nedsætter Motorstyrelsen gebyr på eksportområdet</a> (nyhed fra 28. juni 2024), set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan beregnes godtgørelsen",
        tekst: [
          `Godtgørelsen tager udgangspunkt i den registreringsafgift, der skulle betales, hvis samme bil blev indført fra udlandet, med et fradrag. Den kan ikke blive større end den afgift, der oprindelig blev betalt.`,
          `Motorregistret har en beregner til registreringsafgiften, men Motorstyrelsen skriver, at beregneren ikke tager højde for loftet ved den oprindelige afgift. Beløbet fra beregneren kan derfor være højere end den godtgørelse, virksomheden får.`,
          `Fradraget og satserne står hos <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 178" role="img" aria-label="Eksportgodtgørelsen er afgiften ved indførsel af samme bil minus et fradrag og kan ikke blive større end den afgift, der oprindelig blev betalt."><text class="tg-fremhaev" x="0" y="18">Afgift ved indførsel af samme bil</text><rect class="tg-modul" x="0" y="26" width="240" height="26"/><text class="tg-modul__tekst" x="10" y="43">GODTGØRELSE</text><rect class="tg-kasse" x="240" y="26" width="80" height="26"/><text x="250" y="43">fradrag</text><text class="tg-fremhaev" x="0" y="84">Afgift, der oprindelig blev betalt</text><rect class="tg-profil" x="0" y="92" width="290" height="26"/><line class="tg-skinne-tynd" x1="240" y1="20" x2="240" y2="126"/><text class="tg-lille" x="0" y="152">GODTGØRELSEN KAN IKKE BLIVE STØRRE</text><text class="tg-lille" x="0" y="168">END DEN OPRINDELIGE AFGIFT</text></svg>`,
          tekst: `Skematisk. Tegningen viser uden satser, hvordan Motorstyrelsen beregner eksportgodtgørelsen. Satserne står hos <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Hvornår der ikke er godtgørelse",
        tekst: [
          `Nogle biler giver ingen godtgørelse. Det gælder biler, der efter en ombygning har mistet deres afgiftsmæssige identitet, så der skal betales afgift igen, hvis de skal bruges i Danmark. Motorstyrelsen kalder det ID-tab.`,
          `En færdselsskadet bil, der ikke kan genopbygges inden for reglerne om afgiftsfri genopbygning, giver heller ingen godtgørelse. Det samme gælder en bil, der ikke er i registreringsklar stand og derfor ikke kan synes og godkendes.`,
          `Reglen om udstyr rammer biler med indretning. Reoler, skuffer og andet udstyr, der er monteret efter, at registreringsafgiften blev betalt, giver ingen godtgørelse, fordi der ikke er betalt registreringsafgift af udstyret.`
        ],
        punkter: [
          `Bilen har mistet sin afgiftsmæssige identitet efter en ombygning.`,
          `Bilen er færdselsskadet og kan ikke genopbygges afgiftsfrit.`,
          `Bilen er over 35 år fra første registrering.`,
          `Bilen er ikke i registreringsklar stand.`,
          `Der er ingen godtgørelse for udstyr, der er monteret efter, at afgiften blev betalt, fx eftermonteret indretning.`
        ],
        punkt_ikon: "nej",
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Varebil med en reol, der er monteret, efter registreringsafgiften blev betalt. Der er ingen eksportgodtgørelse for reolen, kun for det, der er betalt afgift af."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="150" y="114" width="60" height="86"/><line class="tg-skinne-tynd" x1="150" y1="143" x2="210" y2="143"/><line class="tg-skinne-tynd" x1="150" y1="172" x2="210" y2="172"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="180" y1="128" x2="180" y2="44"/><circle cx="180" cy="128" r="3"/><text class="tg-call__navn" x="10" y="24">Indretning monteret senere</text><text class="tg-call__under" x="10" y="38">ingen godtgørelse for den</text></g><g class="tg-call"><line x1="296" y1="150" x2="300" y2="58"/><circle cx="296" cy="150" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Bilen</text><text class="tg-call__under" x="395" y="38" text-anchor="end">godtgørelsen gælder det,</text><text class="tg-call__under" x="395" y="52" text-anchor="end">der er betalt afgift af</text></g></svg>`,
          tekst: `Skematisk. Udstyr, der er monteret efter, at afgiften blev betalt, giver ingen godtgørelse. Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen: Om eksport og registreringsafgift</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Pant i bilen",
        tekst: [
          `Er der tinglyst pant i bilen i Bilbogen, når virksomheden beder om eksportgodtgørelse, afviser Motorstyrelsen anmodningen. Gebyret betales tilbage, når afvisningen skyldes pant i Bilbogen.`,
          `Pantet skal altså være væk fra Bilbogen, før anmodningen sendes. Er bilen leaset eller finansieret, står reglerne for at indfri aftalen i <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>.`
        ]
      },
      {
        overskrift: "Besigtigelse og modregning",
        tekst: [
          `Motorstyrelsen kan indkalde bilen til besigtigelse, som udgangspunkt inden 14 dage efter anmodningen.`,
          `Før pengene bliver udbetalt, kan Skatteforvaltningen modregne gæld til det offentlige. Er der behov for at undersøge, om virksomheden har gæld til det offentlige, kan Skatteforvaltningen suspendere fristen for udbetaling i op til 6 måneder fra anmodningen.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Besigtigelse, som udgangspunkt inden", 14, "dage efter anmodningen"],
            ["Udbetalingen kan holdes tilbage i op til", 6, "måneder"]
          ],
          note: `Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Dokumentation",
        tekst: [
          `Når bilen er ude af landet, sender virksomheden dokumentationen til Motorstyrelsen. Den skal vise tre ting, og bilen skal være dokumenteret udført senest 3 måneder efter anmodningen.`
        ],
        punkter: [
          `<strong>Ejerskab,</strong> hvis sælger ikke står som ejer i Motorregistret, fx slutseddel eller købsfaktura.`,
          `<strong>Salg,</strong> fx købsaftale, slutseddel eller faktura.`,
          `<strong>Udførsel,</strong> fx indregistrering i udlandet, CMR-fragtbrev eller eksportangivelse.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Skitse af Motorstyrelsens blanket 21.086 med dato for udførsel, stelnummer, mærke og model, bestemmelsesland og udførselssted, hvordan bilen er udført, om der er købt prøvemærker, og felter til transportør, køber og sælger."><rect class="tg-profil" x="10" y="8" width="270" height="234" rx="4"/><text class="tg-fremhaev" x="22" y="30">Blanket 21.086</text><text class="tg-lille" x="22" y="44">UDFØRSEL OG KVITTERING</text><text x="22" y="66">Dato for udførsel</text><line class="tg-skinne-tynd" x1="22" y1="72" x2="268" y2="72"/><text x="22" y="92">Stelnummer, mærke og model</text><line class="tg-skinne-tynd" x1="22" y1="98" x2="268" y2="98"/><text x="22" y="118">Bestemmelsesland og udførselssted</text><line class="tg-skinne-tynd" x1="22" y1="124" x2="268" y2="124"/><rect class="tg-modul" x="20" y="130" width="250" height="22"/><text x="26" y="145">Hvordan bilen er udført</text><text x="22" y="174">Købt prøvemærker, ja eller nej</text><line class="tg-skinne-tynd" x1="22" y1="180" x2="268" y2="180"/><line class="tg-gulvlinje" x1="22" y1="212" x2="96" y2="212"/><line class="tg-gulvlinje" x1="106" y1="212" x2="180" y2="212"/><line class="tg-gulvlinje" x1="190" y1="212" x2="266" y2="212"/><text class="tg-lille" x="22" y="228">TRANSPORTØR</text><text class="tg-lille" x="106" y="228">KØBER</text><text class="tg-lille" x="190" y="228">SÆLGER</text><g class="tg-call"><line x1="270" y1="141" x2="286" y2="141"/><circle cx="270" cy="141" r="3"/><text class="tg-call__navn" x="290" y="132">Vedlæg</text><text class="tg-call__under" x="290" y="146">dokumentation</text><text class="tg-call__under" x="290" y="160">for transporten</text></g><g class="tg-call"><line x1="266" y1="212" x2="286" y2="212"/><circle cx="266" cy="212" r="3"/><text class="tg-call__navn" x="290" y="206">Underskrifter</text><text class="tg-call__under" x="290" y="220">transportør, køber</text><text class="tg-call__under" x="290" y="234">og sælger</text></g></svg>`,
          tekst: `Skematisk. Felterne på blanket 21.086, som kan bruges som supplement til dokumentationen. Kilde: <a href="${BLANKET}" rel="noopener">Motorstyrelsen: Udførsel og kvittering for modtagelse af motorkøretøj</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Dokumentationen sendes til motorekspedition@motorst.dk. Både på dokumentationen og i mailens emnefelt skal der stå Eksport og journalnummeret fra kvitteringen. Afgørelsen kommer i Meddelelsesarkivet i TastSelv Erhverv.`,
          `Motorstyrelsens erklæring "Udførsel og kvittering for modtagelse af motorkøretøj" kan bruges som supplement, men den er ikke nok alene. Virksomheden kan også lave sin egen erklæring, hvis den har de samme oplysninger som Motorstyrelsens. Kilde: <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Bilen kører selv ud af landet",
        tekst: [
          `Når pladerne er afleveret, har bilen ingen nummerplader. Skal den køre ud af landet for egen kraft, kan den få prøvemærker. De må bruges, når et køretøj eksporteres fra eksportørens adresse.`,
          `Et prøvemærke koster 100 kr. pr. døgn med ansvarsforsikring. Den, der bruger prøvemærket, skal selv undersøge, om det må bruges til at køre ind i eller ud af de lande, bilen skal igennem. Danske prøvemærker er godkendt til at køre en bil fra Danmark til eller gennem Tyskland.`,
          `Prøvemærker kan sendes med posten inden for 3–4 hverdage, men ikke til udlandet. Blanket 21.086 spørger, om der er købt prøvemærker, og i så fald skal en kopi af tilladelsen vedlægges.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Prøvemærke", 100, "kr. pr. døgn"],
            ["Levering med posten", "3–4", "hverdage, ikke til udlandet"]
          ],
          note: `Prisen gælder i oktober 2026. Kilder: <a href="${PROEVE}" rel="noopener">Motorstyrelsen: Prøvemærker og faste prøveskilte</a> og <a href="${BLANKET}" rel="noopener">blanket 21.086</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Bindende svar på forhånd",
        tekst: [
          `Motorstyrelsen oplyser først godtgørelsens størrelse ved eksporten. Du kan kende den på forhånd med et bindende svar til 500 kr., men sagsbehandlingen tager op til 3 måneder, så toldsynet udløber formentlig, før svaret kommer. Et bindende svar med værdifastsættelse gælder i 3 måneder.`,
          `Er bilen allerede toldsynet i en dansk synshal, skal virksomheden søge om værdifastsættelse i stedet for et bindende svar. Udløber toldsynet, før det bindende svar kommer, skal bilen have et nyt.`,
          `Motorstyrelsens tommelfingerregel er, at man søger et bindende svar, når man er i tvivl, og en værdifastsættelse, når man har besluttet sig. Afviser Motorstyrelsen at svare, fordi spørgsmålet ikke kan besvares med sikkerhed, eller fordi der mangler oplysninger, kommer gebyret retur.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Bindende svar", 500, "kr."],
            ["Sagsbehandling, op til", 3, "måneder"],
            ["Toldsynet gælder", 4, "uger"],
            ["Svaret gælder", 3, "måneder"]
          ],
          note: `Toldsynet udløber formentlig, før det bindende svar kommer. Kilder: <a href="${BINDENDE}" rel="noopener">Motorstyrelsen: bindende svar</a> og <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Moms ved salget",
        tekst: [
          `Eksportgodtgørelsen handler om registreringsafgiften. Momsen er en anden sag og afhænger af, hvem køberen er, og om salget er momspligtigt.`,
          `Til en virksomhed i et andet EU-land skal der normalt ikke opkræves dansk moms. Sælger skaffer og tjekker købers momsnummer, udsteder en fuld faktura med nummeret og indberetter salget som EU-salg uden moms senest den 25. hver måned. Står køberen for transporten, skal køberens skriftlige erklæring også have bilens registreringsnummer.`,
          `Ved salg uden for EU er der ingen dansk moms, uanset om køberen er en virksomhed eller en privatperson. Virksomheden registreres som eksportør og får et EORI-nummer, og udførslen dokumenteres fx med en udførselsangivelse med udpassage-attest.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Køber", "Dansk moms", "Sælger skal have"],
          raekker: [
            ["Virksomhed i et andet EU-land", "Normalt nej", "Købers tjekkede momsnummer og bevis for transporten"],
            ["Køber uden for EU", "nej", "EORI-nummer og udførselsangivelse med udpassage-attest"]
          ],
          note: `Salget til en virksomhed i EU indberettes senest den 25. hver måned. Kilder: <a href="${SKAT_EU}" rel="noopener">Skattestyrelsen: salg i EU</a>, <a href="${SKAT_DOK}" rel="noopener">dokumentationskrav i EU</a> og <a href="${SKAT_UD}" rel="noopener">salg uden for EU</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Du kan læse detaljerne under <a href="/til-varebilen/salg-af-varebil/saelg-firmabil-moms/">moms ved salg af varebil</a>.`
        ]
      },
      {
        overskrift: "Leaset bil",
        tekst: [
          `En leaset bil ejes af leasingselskabet. Står anmoderen ikke som ejer i Motorregistret, kræver Motorstyrelsen dokumentation for ejerskab.`,
          `På finansiel leasing indfrier leasingtager restværdien, fx ved at anvise en udenlandsk køber. Se <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>. Hvordan pladerne afleveres, og hvad der sker med den periodiske afgift, står i <a href="/til-varebilen/salg-af-varebil/afmelding-og-nummerplader/">afmelding og nummerplader</a>.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal Motorstyrelsen have",
    spoergsmaal_manchet: "Så kan godtgørelsen behandles uden rykkere.",
    spoergsmaal: [
      "RAK-koder eller kontroltal fra registreringsattesten.",
      "Gyldigt udvidet registreringssyn, højst 4 uger gammelt.",
      "Dokumentation for ejerskab og salg.",
      "Dokumentation for udførslen, fx CMR-fragtbrev eller udenlandsk registrering.",
      "Journalnummeret fra kvitteringen.",
      "En kopi af tilladelsen til prøvemærker, hvis bilen er kørt ud på prøvemærker."
    ],
    faq: [
      ["Hvad koster det at søge eksportgodtgørelse?", "Gebyret til Motorstyrelsen er 2.250 kr., og hertil kommer det udvidede registreringssyn i synshallen."],
      ["Hvor lang tid tager eksportgodtgørelse?", "Udbetalingen sker ca. 9 uger efter, at Motorstyrelsen har fået fyldestgørende dokumentation."],
      ["Hvor gammelt må toldsynet være?", "Det må højst være 4 uger gammelt, når du anmoder om værdifastsættelse."],
      ["Får man godtgørelse for eftermonteret indretning?", "Nej. Udstyr, der er monteret efter, at registreringsafgiften blev betalt, giver ikke godtgørelse."],
      ["Skal der moms på, når varebilen sælges til udlandet?", "Normalt ikke ved salg til en momsregistreret virksomhed i et andet EU-land eller ved eksport ud af EU, når salget er dokumenteret."],
      ["Hvad hvis der er pant i bilen?", "Så afviser Motorstyrelsen anmodningen, og gebyret betales tilbage."],
      ["Kan bilen køre selv ud af Danmark efter afmeldingen?", "Ja, den kan køre på prøvemærker, der koster 100 kr. pr. døgn med ansvarsforsikring. Den, der kører, skal selv undersøge, om prøvemærket må bruges i de lande, bilen skal igennem."],
      ["Kan jeg kende godtgørelsen, før jeg sælger bilen?", "Ja, med et bindende svar til 500 kr. Sagsbehandlingen tager op til 3 måneder, og svaret gælder i 3 måneder."],
      ["Kan godtgørelsen blive større end den afgift, der blev betalt?", "Nej. Eksportgodtgørelsen kan ikke overstige den registreringsafgift, der oprindelig blev betalt for bilen."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Om eksport og registreringsafgift for bil, motorcykel og autocamper", url: EKSPORT, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Nu nedsætter Motorstyrelsen gebyr på eksportområdet", url: GEBYR, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Bindende svar om registreringsafgift", url: BINDENDE, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Afmeld køretøj og aflever nummerplader", url: AFMELD, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Afmelding, salg eller eksport", url: BORGER, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Prøvemærker og faste prøveskilte", url: PROEVE, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Udførsel og kvittering for modtagelse af motorkøretøj (blanket 21.086)", url: BLANKET, dato: "2026-10-07" },
      { navn: "Applus+ Bilsyn: Bilsynspriser", url: APPLUS, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Moms ved salg af varer og ydelser i EU", url: SKAT_EU, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Dokumentationskrav ved handel med lande i EU", url: SKAT_DOK, dato: "2026-10-07" },
      { navn: "Skattestyrelsen: Moms ved salg af varer og ydelser i lande uden for EU", url: SKAT_UD, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Motorstyrelsen: registreringsafgiften er det, man betaler for at bruge bilen på de danske veje i hele bilens levetid; sælges bilen til en udenlandsk køber, kan man få noget af afgiften tilbage, når bilen har forladt Danmark.", BORGER],
    ["Motorstyrelsen: står man ikke som ejer i Motorregistret, skal ejerskab dokumenteres, fx med slutseddel eller købsfaktura.", EKSPORT],
    ["Motorstyrelsen: det udvidede registreringssyn skal bekræfte, at importerede biler er i registreringsklar stand, og at vedligeholdelsesstanden er angivet korrekt; synshallen registrerer bilen i Motorregistret med de korrekte oplysninger, så afgiften beregnes på et korrekt grundlag.", BORGER],
    ["Applus+ Bilsyn: priserne varierer fra synshal til synshal.", APPLUS],
    ["Motorstyrelsen: anmodningen sker i Motorregistret under Motor, Motorregistret, Registreringsafgift, Anmod om værdifastsættelse med RAK-koder eller kontroltal; efter godkendelse og kortbetaling kommer en kvittering med journalnummer.", EKSPORT],
    ["Motorstyrelsen: uden MitID, eller hvis man er fritaget for Digital Post, sendes et brev med kopi af registreringsattest og dokumentation for ejerskab til Motorstyrelsen i Sakskøbing.", EKSPORT],
    ["Motorstyrelsen: er der allerede en aktiv anmeldelse under behandling, kan man søge om annullering af den tidligere ansøgning om værdifastsættelse via en blanket.", EKSPORT],
    ["Motorstyrelsen kan altid indkalde et køretøj til besigtigelse, som udgangspunkt inden for 14 dage fra anmodningen.", EKSPORT],
    ["Motorstyrelsen: værdifastsættelse i Motorregistret er gratis, men ved eksportgodtgørelse betales et gebyr på 2.250 kr. for sagsbehandlingen.", BINDENDE],
    ["Motorstyrelsen: gebyret for eksportgodtgørelse blev indført i 2019, har ligget på 2.350 kr. siden juli 2020 og blev sat ned til 2.250 kr. den 1. juli 2024, fordi sagsbehandlingen er blevet hurtigere og gebyret skal dække omkostningerne.", GEBYR],
    ["Motorstyrelsen: beregneren i Motorregistret tager ikke højde for, at eksportgodtgørelsen ikke kan overstige den oprindeligt betalte registreringsafgift.", EKSPORT],
    ["Motorstyrelsen: ingen godtgørelse for køretøjer med ID-tab efter ombygning, færdselsskadede køretøjer, der ikke kan genopbygges afgiftsfrit, køretøjer over 35 år og køretøjer, der ikke er i registreringsklar stand og ikke kan synes og godkendes; udstyr monteret efter afgiftsbetaling giver ingen godtgørelse, fordi der ikke er betalt afgift af det.", EKSPORT],
    ["Motorstyrelsen: afgørelsen kommer i TastSelv Borger under Meddelelser fra Motorregistret eller i Meddelelsesarkivet i TastSelv Erhverv.", EKSPORT],
    ["Motorstyrelsen: erklæringen 'Udførsel og kvittering for modtagelse af motorkøretøj' er kun et supplement; man kan selv udarbejde en erklæring med de samme oplysninger.", EKSPORT],
    ["Blanket 21.086 indeholder dato for udførsel, stelnummer, mærke, model, bestemmelsesland, udførselssted, hvordan køretøjet er udført (med dokumentation for transport), om der er købt prøvemærker (med kopi af tilladelsen) samt ID, navn, adresse, dato og underskrift for transportør, køber og sælger.", "https://motorst.dk/media/brobyjlj/21086_da.pdf"],
    ["Motorstyrelsen: prøvemærker kan bruges ved eksport af et køretøj til eller fra eksportørens adresse; man skal selv undersøge, om de må bruges i de lande, man kører i.", PROEVE],
    ["Motorstyrelsen: prøvemærker koster 100 kr. pr. døgn inkl. ansvarsforsikring; de kan sendes med posten med 3–4 hverdages levering, men ikke til udlandet.", PROEVE],
    ["Motorstyrelsen: danske prøvemærker og prøveskilte er godkendt til transport af et køretøj fra Danmark til eller igennem Tyskland.", PROEVE],
    ["Motorstyrelsen: er køretøjet allerede toldsynet i en dansk synshal, skal man søge om værdifastsættelse i stedet for bindende svar; udløber toldsynet, før det bindende svar kommer, skal man have et nyt.", BINDENDE],
    ["Motorstyrelsen: som udgangspunkt søger man bindende svar, hvis man er i tvivl, og værdifastsættelse, hvis man har besluttet sig; afviser Motorstyrelsen at svare, får man gebyret tilbage.", BINDENDE],
    ["Skattestyrelsen: sælger skal skaffe og verificere købers momsnummer og udstede en fuld faktura med købers momsregistreringsnummer.", SKAT_EU],
    ["Skattestyrelsen: ved levering af transportmidler skal købers erklæring indeholde registreringsnummeret på transportmidlet.", SKAT_DOK],
    ["Skattestyrelsen: ved eksport ud af EU gælder de samme regler ved salg til private og virksomheder; virksomheden registreres som eksportør og får et EORI-nummer.", SKAT_UD]
  ]
};
