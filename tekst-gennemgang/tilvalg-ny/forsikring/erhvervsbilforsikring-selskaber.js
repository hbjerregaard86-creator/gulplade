// Underside /til-varebilen/forsikring/erhvervsbilforsikring-selskaber/ (07-10-2026)
var AB = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/`;
var ABV = `https://www.almbrand.dk/erhverv/forsikringer/koretoj-og-udstyr/varevogne-og-personbiler/vejhjaelp/`;
var CODAN = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/`;
var CODANV = `https://www.codan.dk/erhverv/forsikringer/firmabilforsikring/vejhjaelp/`;
var GFS = `https://www.gfforsikring.dk/erhverv/forsikringer/erhvervsbilforsikring/`;
var GF = `https://cdn.gfforsikring.dk/gfforsikring/image/upload/cms/media/dhmcevpw/130-1-erhvervsbilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var IF = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/varebilforsikring`;
var IFV = `https://www.if.dk/erhverv/erhvervsforsikring/koretojsforsikring/bilforsikring/vejhjalp-til-erhverv`;
var KF = `https://www.kfforsikring.dk/erhverv/forsikringer/bil-og-transport/motorforsikring/`;
var TRYGS = `https://tryg.dk/erhverv/varebilforsikring`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var TRYGV = `https://tryg.dk/erhverv/tryg-vejhjaelp`;
var LB = `https://www.lb.dk/anmeld-skade/erhverv`;
var FPA = `https://www.forsikringogpension.dk/brancheloesninger/autotaks/selskaber-og-taksatororganisationer/`;
var BEK = `https://www.retsinformation.dk/eli/lta/2023/1627`;

module.exports = {
  id: "forsikring/erhvervsbilforsikring-selskaber",
  side: {
    slug: "erhvervsbilforsikring-selskaber",
    navn: "Selskaber med erhvervsbilforsikring",
    titel: "Erhvervsbilforsikring til varebil: selskaberne",
    kort: `Neutral oversigt over danske selskaber, der forsikrer varebiler til erhverv: produktnavne, pakker, tilvalg, pristrin, kørsel, vilkår, vejhjælpspartnere og taksering.`,
    beskrivelse: `Erhvervsbilforsikring til varebil hos 7 selskaber: pakker, tilvalg, pristrin, kørsel og vilkår hos Alm. Brand, Codan, GF, Gjensidige, If, KF og Tryg.`,
    manchet: `De danske selskaber kalder deres erhvervsbilforsikring noget forskelligt og pakker dækningerne forskelligt. Vi har sat selskaberne i alfabetisk rækkefølge ud fra deres egne sider og betingelser, og vi rangerer dem ikke. Siden viser, hvordan pakkerne er bygget op, og hvor vilkårene er forskellige.`,
    visuel: {
      hero: "forsikring",
      kort_fortalt: [
        ["Rangering", "Ingen", "selskaberne står i alfabetisk rækkefølge"],
        ["Pristrin hos GF", "op til trin 9", "Superelite"],
        ["Elitebilist hos KF", "efter 5 år", "uden skader"],
        ["Kilometer hos Alm. Brand", "Fri", "kilometer i forsikringen"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Produkterne",
        tekst: [
          `Alle selskaberne bygger erhvervsbilforsikringen op på samme måde. Ansvarsforsikringen er lovpligtig og dækker skader, bilen gør på andre. Kaskoen dækker skader på bilen selv, og oveni kommer tilvalg som førerdækning, glas og vejhjælp.`,
          `Forskellen ligger i navnene, i hvad der følger med kaskoen, og i hvilke biler forsikringen er lavet til. Trygs varebilforsikring er fx til varebiler, varevogne og kassebiler med en totalvægt på op til 3.500 kg. Tabellen viser produktnavnene og niveauerne, som selskaberne selv kalder dem.`
        ],
        tabel: {
          kolonner: ["Selskab", "Produkt", "Opbygning"],
          raekker: [
            ["Alm. Brand", "Forsikring af varevogne og personbiler", "Ansvar, Kasko, Superkasko"],
            ["Codan", "Firmabilforsikring", "Ansvar og tilvalg"],
            ["GF Forsikring", "Erhvervsbilforsikring", "Ansvar, kasko og tilvalg"],
            ["Gjensidige", "Bilforsikring til virksomhedens biler", "Ansvar, Kasko og tilvalg"],
            ["If", "Varebilforsikring", "Ansvar, Kasko, Super"],
            ["Købstædernes Forsikring", "Motorforsikring", "Ansvar, kasko og tilvalg"],
            ["Tryg", "Varebilforsikring", "Basis, Udvidet, Super"]
          ],
          note: `Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${IF}" rel="noopener">If</a>, <a href="${KF}" rel="noopener">KF</a> og <a href="${TRYGS}" rel="noopener">Tryg</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde for Trygs vægtgrænse: <a href="${TRYGS}" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Ejerskab og samarbejder",
        tekst: [
          `Flere af navnene hører sammen. Codan er en del af Alm. Brand Forsikring A/S, og Topdanmark er en del af If Skadeforsikring. Alm. Brand og Codan sælger stadig hver deres produkt, men bruger de samme taksatorer og den samme vejhjælpspartner.`,
          `GF Forsikring er ejet af medlemmerne og deler overskuddet med dem. Det sker som en rabat, der bliver trukket fra prisen, hver gang forsikringerne betales. GF skriver, at overskudsdelingen er solidarisk, så et medlem også får del i overskuddet efter en skade i årets løb.`
        ],
        punkter: [
          `<strong>Codan.</strong> Selskabet er en del af Alm. Brand Forsikring A/S.`,
          `<strong>Topdanmark.</strong> Selskabet er en del af If Skadeforsikring.`,
          `<strong>GF Forsikring.</strong> Selskabet er ejet af medlemmerne. Bilforsikring kræver medlemskab af en forsikringsklub, og overskuddet deles som rabat.`,
          `<strong>LB Erhverv.</strong> Bilskader anmeldes til samarbejdspartneren AXA Forsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Alm. Brand og Codan hører til Alm. Brand Forsikring A/S. If og Topdanmark hører til If Skadeforsikring. GF er ejet af medlemmerne. LB Erhverv sender bilskader til AXA Forsikring."><rect class="tg-profil" x="0" y="4" width="190" height="84"/><text class="tg-lille" x="10" y="24">ALM. BRAND FORSIKRING A/S</text><rect class="tg-modul" x="10" y="38" width="84" height="38"/><text class="tg-modul__tekst" x="16" y="61">ALM. BRAND</text><rect class="tg-modul" x="100" y="38" width="80" height="38"/><text class="tg-modul__tekst" x="108" y="61">CODAN</text><rect class="tg-profil" x="210" y="4" width="190" height="84"/><text class="tg-lille" x="220" y="24">IF SKADEFORSIKRING</text><rect class="tg-modul" x="220" y="38" width="80" height="38"/><text class="tg-modul__tekst" x="228" y="61">IF</text><rect class="tg-modul" x="306" y="38" width="86" height="38"/><text class="tg-modul__tekst" x="312" y="61">TOPDANMARK</text><rect class="tg-kasse" x="0" y="106" width="190" height="62"/><text class="tg-fremhaev" x="10" y="130">GF Forsikring</text><text x="10" y="152">ejet af medlemmerne</text><rect class="tg-kasse" x="210" y="106" width="80" height="62"/><text class="tg-fremhaev" x="220" y="130">LB</text><text x="220" y="152">Erhverv</text><line class="tg-pil" x1="290" y1="137" x2="318" y2="137"/><path class="tg-pil" d="M312,132 L318,137 L312,142"/><rect class="tg-kasse" x="320" y="106" width="80" height="62"/><text class="tg-fremhaev" x="330" y="130">AXA</text><text x="330" y="152">bilskader</text></svg>`,
          tekst: `Skematisk. Hvilke selskaber der hører sammen, og hvem der behandler bilskader for LB Erhverv.`
        },
        efter: [
          `Kilder: <a href="${CODANV}" rel="noopener">Codan</a>, <a href="${FPA}" rel="noopener">F&amp;P: Autotaks</a>, <a href="${GF}" rel="noopener">GF, punkt 13.1</a>, <a href="${GFS}" rel="noopener">GF</a> og <a href="${LB}" rel="noopener">LB</a>, set den 4. oktober 2026. GF's beskrivelse af overskudsdelingen er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Faste pakker eller grunddækning med tilvalg",
        tekst: [
          `Selskaberne sælger på to måder. Tryg, If og Alm. Brand har faste niveauer, hvor hvert trin op giver flere dækninger. Codan, GF, Gjensidige og Købstædernes Forsikring har en grunddækning med ansvar og kasko, som virksomheden selv bygger videre på med tilvalg.`,
          `Faste pakker gør det let at se, hvad der er med. Med tilvalg betaler virksomheden kun for det, den vælger, men så skal den selv sørge for at få fx fører, glas og vejhjælp med. Når to tilbud skal sammenlignes, er det derfor indholdet og ikke pakkens navn, der skal holdes op mod hinanden.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 226" role="img" aria-label="To måder at sælge bilforsikring på. Til venstre faste pakker i tre niveauer, Basis, Udvidet og Super. Til højre en grunddækning med ansvar og kasko, hvor tilvalg som fører, glas og leasing lægges ovenpå."><text class="tg-fremhaev" x="5" y="16">Faste pakker</text><rect class="tg-kasse" x="5" y="150" width="180" height="40"/><text x="95" y="175" text-anchor="middle">Basis</text><rect class="tg-kasse" x="5" y="104" width="180" height="40"/><text x="95" y="129" text-anchor="middle">Udvidet</text><rect class="tg-modul" x="5" y="58" width="180" height="40"/><text class="tg-modul__tekst" x="95" y="83" text-anchor="middle">SUPER</text><text class="tg-fremhaev" x="215" y="16">Grunddækning og tilvalg</text><rect class="tg-kasse" x="215" y="150" width="180" height="40"/><text x="305" y="175" text-anchor="middle">Ansvar</text><rect class="tg-kasse" x="215" y="104" width="180" height="40"/><text x="305" y="129" text-anchor="middle">Kasko</text><rect class="tg-modul" x="215" y="58" width="56" height="40"/><text class="tg-modul__tekst" x="243" y="83" text-anchor="middle">FØRER</text><rect class="tg-modul" x="277" y="58" width="56" height="40"/><text class="tg-modul__tekst" x="305" y="83" text-anchor="middle">GLAS</text><rect class="tg-modul" x="339" y="58" width="56" height="40"/><text class="tg-modul__tekst" x="367" y="83" text-anchor="middle">LEASING</text><text x="5" y="214">Tryg, If, Alm. Brand</text><text x="215" y="214">Codan, GF, Gjensidige, KF</text></svg>`,
          tekst: `Skematisk. Pakkenavnene til venstre er Trygs, mens If og Alm. Brand kalder niveauerne Ansvar, Kasko og Super eller Superkasko. Kilder: <a href="${TRYGS}" rel="noopener">Tryg</a>, <a href="${IF}" rel="noopener">If</a>, <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${KF}" rel="noopener">KF</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Trygs tre pakker",
        tekst: [
          `Trygs pakker er et eksempel på faste niveauer. Alle tre har ansvar, kasko, førerdækning og krisehjælp, el- og hybriddækning og adgang til lånebil.`,
          `Udvidet lægger Tryg Vejhjælp i Danmark og dækningen Leasing oveni. Super har desuden fejltankningsforsikring, nulselvrisiko og glas og en nøgleforsikring. Tryg skriver, at Super også har et dna-kit med.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Dækning", "Basis", "Udvidet", "Super"],
          raekker: [
            ["Ansvar og kasko", "ja", "ja", "ja"],
            ["Førerdækning og krisehjælp", "ja", "ja", "ja"],
            ["El- og hybriddækning", "ja", "ja", "ja"],
            ["Adgang til lånebil", "ja", "ja", "ja"],
            ["Tryg Vejhjælp i Danmark", "–", "ja", "ja"],
            ["Leasing", "–", "ja", "ja"],
            ["Fejltankning, nøgle, nulselvrisiko og glas", "–", "–", "ja"]
          ],
          note: `En streg betyder, at dækningen ikke står i pakken på Trygs side. Kilde: <a href="${TRYGS}" rel="noopener">Tryg: Varebilforsikring</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det følger med kaskoen",
        tekst: [
          `Når selskaberne bygger på en grunddækning, er det kaskoen, der bestemmer, hvad der følger med uden tillæg. GF lægger fx vejhjælp i Danmark døgnet rundt, vejhjælp i udlandet og retshjælp ind i kaskoen. Købstædernes Forsikring giver 0 kr. i selvrisiko på stenslag, når kaskoen er valgt.`,
          `Listen er det, selskaberne selv fremhæver. Den er ikke udtømmende, og de fulde vilkår står i betingelserne.`
        ],
        tabel: {
          kolonner: ["Selskab", "Med i kaskoen"],
          raekker: [
            ["Alm. Brand", "Førerulykke, udstyr og tilbehør, lånebil og retshjælp"],
            ["Codan", "Fordelsværksteder og lånebil på udvalgte værksteder"],
            ["GF", "Vejhjælp i Danmark, redning i udlandet og retshjælp"],
            ["Gjensidige", "Stenslag repareret gratis, lånebil på samarbejdsværksteder og redningsforsikring"],
            ["If", "Retshjælp og krisehjælp til chaufføren"],
            ["Købstædernes Forsikring", "Rødt SOS-kort, retshjælp i private tvister og 0 kr. selvrisiko på stenslag"],
            ["Tryg", "Førerdækning, krisehjælp, el- og hybriddækning og lånebil i alle tre pakker"]
          ],
          note: `Kilder: de samme som i tabellen over produkterne, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder for GF's vejhjælp døgnet rundt og KF's stenslag: <a href="${GFS}" rel="noopener">GF</a> og <a href="${KF}" rel="noopener">KF</a>, set den 7. oktober 2026. Hvad kaskoen dækker og ikke dækker, står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a>.`
        ]
      },
      {
        overskrift: "Fem selskaber side om side",
        tekst: [
          `Fire dækninger viser, hvor forskelligt selskaberne pakker. Ansvaret er med overalt, fordi det er lovpligtigt. Førerdækningen følger med hos Alm. Brand og Tryg, men er et tilvalg hos Codan, GF og Gjensidige.`,
          `I de to nederste rækker har næsten hvert selskab sin egen løsning. Hos GF følger vejhjælpen med kaskoen, mens den hos Tryg kommer med fra pakken Udvidet.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Dækning", "Alm. Brand", "Codan", "GF", "Gjensidige", "Tryg"],
          raekker: [
            ["Lovpligtigt ansvar", "ja", "ja", "ja", "ja", "ja"],
            ["Førerdækning", "ja", "tilvalg", "tilvalg", "tilvalg", "ja"],
            ["Vejhjælp i Danmark", "Superkasko", "tilvalg", "Med kasko", "tilvalg", "Fra Udvidet"],
            ["Afsavn eller lånebil ved tyveri", "–", "–", "Bilafsavn", "Lånebil Plus", "Leasingtilvalg"]
          ],
          note: `Codans lånebil gælder ikke ved totalskade og tyveri. Trygs lånebil ved totalskade og tyveri hører til leasingdækningen. Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GF}" rel="noopener">GF, punkt 11</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${TRYGS}" rel="noopener">Tryg</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.3</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Samme dækning, forskellige navne",
        tekst: [
          `Det, der hedder Friskade hos ét selskab, hedder Nulselvrisiko hos et andet. Tabellen samler navnene, så tilbud fra flere selskaber kan læses side om side.`,
          `Navnene dækker ikke altid præcis det samme. Friskade hos GF dækker fx tyveri af en aflåst bil, mens Trygs Nulselvrisiko dækker tyveri, når skadevolderen er ukendt. Detaljerne står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a> og <a href="/til-varebilen/forsikring/foererulykke-og-foererplads/">førerplads og førerulykke</a>.`
        ],
        tabel: {
          kolonner: ["Dækning", "Navne hos selskaberne"],
          raekker: [
            ["Ingen selvrisiko ved brand og tyveri", "Friskade (Codan, GF, Gjensidige), Nulselvrisiko (Tryg), med i Kasko (Alm. Brand)"],
            ["Glas", "Glasdækning og Frontrude (Codan), Udvidet glas (GF, Alm. Brand), Glasskade (Gjensidige), Glas (Tryg)"],
            ["Fører", "Førerplads (Codan, GF), Førerpladsdækning (Gjensidige, If), Førerdækning (Tryg), Førerulykke (Alm. Brand)"],
            ["Leasing", "Afleveringsforsikring (GF, Alm. Brand), Leasing Basis (Gjensidige), Leasing (Tryg), Leasingaftalens førstegangsydelse (If)"],
            ["Gods for andre", "Fragtføreransvar (Codan, Gjensidige)"]
          ],
          note: `Kilder: selskabernes produktsider, set den 4. oktober 2026.`,
          visning: "kort"
        },
        efter: [
          `Kilder for forskellen på Friskade og Nulselvrisiko: <a href="${GF}" rel="noopener">GF, punkt 5</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 5.4</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Kilometer og pristrin",
        tekst: [
          `Prisen afhænger af, hvor meget bilen kører, og hvor mange skader virksomheden har haft. Selskaberne regner det ud på forskellige måder, og nogle har fri kilometer, mens andre skriver kørslen ind i policen.`,
          `Hos Købstædernes Forsikring falder prisen efter hvert skadefrit år, og efter 5 skadefri år bliver man elitebilist med lavere pris og selvrisiko. Hos Tryg kan virksomheden selv rette den årlige kørelængde på Min Virksomhed og se den nye pris.`
        ],
        punkter: [
          `<strong>Alm. Brand.</strong> Forsikringen har fri kilometer.`,
          `<strong>GF.</strong> Policen har et aftalt årligt kørselsforbrug, og pristrinnene går op til trin 9, Superelite.`,
          `<strong>Købstædernes Forsikring.</strong> Prisen falder efter hvert skadefrit år, og efter 5 skadefri år bliver man elitebilist.`,
          `<strong>Tryg.</strong> Den årlige kørelængde står i policen. Efter en skade vurderer Tryg hele kundeforholdet.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Pristrin hos GF, op til trin", 9, "Superelite"],
            ["Elitebilist hos KF efter", 5, "skadefri år"],
            ["Kilometer hos Alm. Brand", "Fri", "kilometer"]
          ],
          note: `Hos KF falder prisen efter hvert skadefrit år. Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${GF}" rel="noopener">GF, punkt 13.2 og 13.5</a> og <a href="${KF}" rel="noopener">KF</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${GF}" rel="noopener">GF, punkt 13.2 og 13.5</a>, <a href="${KF}" rel="noopener">KF</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 8 og 12</a>, set den 4. oktober 2026. KF's elitebilist og Trygs Min Virksomhed er set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Pristrinnene hos GF",
        tekst: [
          `GF beregner startpristrinnet ud fra, hvor mange år virksomheden har haft bil med forsikring i eget navn, og hvilke belastende skader den har haft. Kører virksomheden et år uden skader på samme trin, rykker den ét trin frem til en lavere pris ved næste hovedforfald, indtil trin 9, Superelite, er nået.`,
          `Efter en belastende skade bliver virksomheden stående et år ekstra på det trin, den havde, da skaden skete. Ved to eller flere skader i samme forsikringsår står den stille, til der er gået et helt forsikringsår uden skader.`,
          `Ikke alle skader belaster. Skader på ladekablet gør det ikke, når der er købt kasko eller delkasko, og det samme gælder skader, der er dækket af Friskade og Udvidet glas. Virksomheden kan også betale skadeudgiften tilbage senest en måned efter den endelige opgørelse og så undgå, at skaden påvirker trinnet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="Ni søjler, der bliver lavere fra trin 1 til trin 9, som hedder Superelite. Et skadefrit år flytter forsikringen et trin frem. En belastende skade holder den på samme trin et år ekstra."><text x="400" y="16" text-anchor="end">Skadefrit år: et trin frem</text><text x="400" y="32" text-anchor="end">Belastende skade: et år ekstra</text><rect class="tg-kasse" x="20" y="50" width="32" height="120"/><rect class="tg-kasse" x="60" y="60" width="32" height="110"/><rect class="tg-kasse" x="100" y="70" width="32" height="100"/><rect class="tg-kasse" x="140" y="80" width="32" height="90"/><rect class="tg-kasse" x="180" y="90" width="32" height="80"/><rect class="tg-kasse" x="220" y="100" width="32" height="70"/><rect class="tg-kasse" x="260" y="110" width="32" height="60"/><rect class="tg-kasse" x="300" y="120" width="32" height="50"/><rect class="tg-modul" x="340" y="130" width="32" height="40"/><line class="tg-gulvlinje" x1="10" y1="170" x2="390" y2="170"/><text x="36" y="186" text-anchor="middle">1</text><text x="76" y="186" text-anchor="middle">2</text><text x="116" y="186" text-anchor="middle">3</text><text x="156" y="186" text-anchor="middle">4</text><text x="196" y="186" text-anchor="middle">5</text><text x="236" y="186" text-anchor="middle">6</text><text x="276" y="186" text-anchor="middle">7</text><text x="316" y="186" text-anchor="middle">8</text><text x="356" y="186" text-anchor="middle">9</text><text x="356" y="202" text-anchor="middle">Superelite</text><text class="tg-lille" x="10" y="202">PRISTRIN</text></svg>`,
          tekst: `Skematisk, ikke målfast. Søjlerne viser retningen, ikke GF's priser. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.5</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Kørsel ud over det aftalte",
        tekst: [
          `Hos GF står bilens kilometerstand og det aftalte årlige kørselsforbrug i policen, og kilometerstanden aflæses, når der sker en skade. Kører bilen mere end aftalt, bliver skaden erstattet forholdsmæssigt. Erstatningen svarer så til forholdet mellem den pris, der blev betalt, og den pris, der skulle have været betalt.`,
          `Nedsættelsen er højst 42.363 kr. pr. skade (basisår 2023). GF nedsætter ikke erstatningen ved skader i de første 12 måneder efter aflæsningen, medmindre bilen faktisk har kørt mere end aftalt, og heller ikke ved rene glasskader.`,
          `Ændrer kørslen sig, skal GF straks have besked med den nye kilometerstand, og prisen kan så stige eller falde. Tryg skriver også den årlige kørelængde ind i policen, og en overskredet kørelængde kan give Tryg ret til at kræve en erstatning betalt tilbage.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 172" role="img" aria-label="To bjælker. Den øverste er den aftalte kørsel i policen. Den nederste er den faktiske kørsel, som er længere. Så bliver erstatningen nedsat forholdsmæssigt, højst 42.363 kroner pr. skade."><text class="tg-fremhaev" x="0" y="16">Aftalt kørsel i policen</text><rect class="tg-profil" x="0" y="24" width="240" height="26"/><text class="tg-fremhaev" x="0" y="74">Faktisk kørsel</text><rect class="tg-profil" x="0" y="82" width="240" height="26"/><rect class="tg-modul" x="240" y="82" width="100" height="26"/><text class="tg-modul__tekst" x="290" y="100" text-anchor="middle">OVER</text><line class="tg-skinne-tynd" x1="240" y1="18" x2="240" y2="116"/><text x="0" y="140">Erstatningen nedsættes forholdsmæssigt,</text><text x="0" y="158">højst 42.363 kr. pr. skade (basisår 2023)</text></svg>`,
          tekst: `Skematisk. GF's regel for kørsel ud over det aftalte. Kilde: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.2.1</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${GF}" rel="noopener">GF, punkt 13.2.1</a> og <a href="${TRYG}" rel="noopener">Tryg, afsnit 11.8</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Vilkår, der er forskellige",
        tekst: [
          `Betingelserne gemmer forskelle, som ikke står på produktsiderne. GF og Tryg regulerer begge prisen efter lønindekset for den private sektor fra Danmarks Statistik, men på forskellige tidspunkter.`,
          `Hos GF bliver beløb i betingelser og police også reguleret, når der står et basisår ved dem. Tryg skriver, at summerne i forsikringsaftalen ikke bliver reguleret, men at summerne i førerdækning og krisehjælp følger erstatningsansvarslovens beløb.`,
          `Opsigelsen følger også forskellige regler. GF's forsikringer løber kalenderåret og skal opsiges skriftligt inden den 1. december. Hos Tryg kan både virksomheden og selskabet opsige skriftligt senest en måned, før forsikringsperioden udløber.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Vilkår", "GF", "Tryg"],
          raekker: [
            ["Indeks", "Lønindeks for den private sektor", "Lønindeks for den private sektor"],
            ["Prisen reguleres", "Hvert år den 1. januar", "På første betalingsdag i kalenderåret"],
            ["Beløb i police og betingelser", "Reguleres, når der står et basisår", "Summer i aftalen reguleres ikke"],
            ["Væsentlige ændringer varsles", "En måned før hovedforfald", "Senest 30 dage før periodens udløb"],
            ["Opsigelse", "Skriftligt inden 1. december til 1. januar", "Skriftligt senest en måned før periodens udløb"],
            ["Opsigelse efter skade", "14 dages varsel indtil en måned efter skadens afslutning", "14 dages varsel indtil en måned efter betaling eller afvisning"]
          ],
          note: `Kilder: <a href="${GF}" rel="noopener">GF, betingelser nr. 130-1, punkt 13.13-13.15</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 13</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Vejhjælpspartnere",
        tekst: [
          `Selskaberne kører ikke selv ud til en bil, der er gået i stå. Vejhjælpen kommer fra en partner, og nogle selskaber deler partner. GF's kasko har vejhjælp i Danmark som en del af forsikringen.`
        ],
        tabel: {
          kolonner: ["Selskab", "Vejhjælp leveres af"],
          raekker: [
            ["Alm. Brand", "SOS Dansk Autohjælp"],
            ["Codan", "SOS Dansk Autohjælp"],
            ["Gjensidige", "Gjensidige Vejhjælp"],
            ["If", "Viking Assistance"],
            ["Tryg", "Tryg Vejhjælp"]
          ],
          note: `Kilder: <a href="${ABV}" rel="noopener">Alm. Brand</a>, <a href="${CODANV}" rel="noopener">Codan</a>, <a href="${GJ}" rel="noopener">Gjensidige</a>, <a href="${IFV}" rel="noopener">If</a> og <a href="${TRYGV}" rel="noopener">Tryg</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Priser og indhold står i <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ]
      },
      {
        overskrift: "Pris online eller via rådgiver",
        tekst: [
          `If viser prisen på varebilforsikring online og sælger den direkte. Til flere køretøjer skal du have et tilbud. Tryg har en prisberegner på varebilsiden. Alm. Brand, Codan, GF, Gjensidige og KF har en formular til tilbud eller opkald på erhvervssiderne.`,
          `If sælger online til én bil og laver et tilbud, når virksomheden vil forsikre flere køretøjer. Listen nederst på siden viser de oplysninger, selskaberne skal bruge til et tilbud. Forsikring af mange biler står i <a href="/til-varebilen/forsikring/flaadeforsikring/">flådeforsikring</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Selskab", "Pris online", "Formular til tilbud eller opkald"],
          raekker: [
            ["Alm. Brand", "–", "ja"],
            ["Codan", "–", "ja"],
            ["GF", "–", "ja"],
            ["Gjensidige", "–", "ja"],
            ["If", "ja", "Tilbud ved flere køretøjer"],
            ["KF", "–", "ja"],
            ["Tryg", "Prisberegner", "–"]
          ],
          note: `Kilder: <a href="${IF}" rel="noopener">If</a>, <a href="${TRYGS}" rel="noopener">Tryg</a>, <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${KF}" rel="noopener">KF</a>, set den 4. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${IF}" rel="noopener">If</a>, <a href="${TRYGS}" rel="noopener">Tryg</a>, <a href="${AB}" rel="noopener">Alm. Brand</a>, <a href="${CODAN}" rel="noopener">Codan</a>, <a href="${GFS}" rel="noopener">GF</a>, <a href="${GJ}" rel="noopener">Gjensidige</a> og <a href="${KF}" rel="noopener">KF</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Fra tilbud til police",
        tekst: [
          `Før en varebil kan blive registreret, skal der være tegnet en ansvarsforsikring, og selskabet melder forsikringen, så bilen kan få nummerplader. Ansvaret gælder fra det tidspunkt, selskabet modtager anmodningen, eller fra en senere dato, I aftaler.`,
          `Policen er aftalen. Den viser dækninger, summer, selvrisiko og kørelængde, og det er den, der gælder ved en skade. Er oplysningerne i policen ikke længere rigtige, skal selskabet have besked.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Oplysninger", "Bil, kilometer, førere, udstyr og ønsket selvrisiko."],
            ["Tilbud", "Online eller fra en rådgiver."],
            ["Ikrafttræden", "Ansvaret gælder fra det tidspunkt, selskabet modtager anmodningen, eller fra en senere aftalt dato."],
            ["Forsikringsbevis", "Selskabet melder forsikringen, så bilen kan registreres."],
            ["Policen", "Viser dækninger, summer, selvrisiko og kørelængde."]
          ]
        },
        efter: [
          `Kilder: <a href="${BEK}" rel="noopener">BEK nr. 1627, §§ 2 og 5</a> og <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303</a>, set den 4. oktober 2026.`
        ]
      },
      {
        overskrift: "Taksering og klage",
        tekst: [
          `Alm. Brand og Codan bruger Codans taksatorer. GF og KF bruger Taksatorringen. Tryg, If, Topdanmark og Gjensidige har deres egne. Klager går først til selskabets klageansvarlige. Læs mere i <a href="/til-varebilen/forsikring/skadeanmeldelse/">skadeanmeldelse</a>.`,
          `Taksatoren er den, der vurderer skaden og godkender reparationen, og alle selskaberne takserer i det samme system, Autotaks. Hos GF er det kvalitetsafdelingen, der er klageansvarlig og revurderer en sag, når kunden ikke er tilfreds med svaret fra sagsbehandleren.`
        ],
        efter: [
          `Kilder: <a href="${FPA}" rel="noopener">F&amp;P: Autotaks, selskaber og taksatororganisationer</a> og <a href="${GF}" rel="noopener">GF, punkt 13.16</a>, set den 4. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal selskaberne have",
    spoergsmaal_manchet: "Så kan tilbuddene sammenlignes på samme grundlag.",
    spoergsmaal: [
      "Bilernes reg.nr., model, årgang og værdi inkl. indretning.",
      "Kilometer pr. år pr. bil.",
      "Hvem der kører, og om der er førere under 26 år.",
      "Skadeforløbet de seneste år.",
      "Ønsket selvrisiko og tilvalg: fører, glas, vejhjælp, friskade og leasing.",
      "Leasingselskab og deklaration.",
      "Om bilerne er specialopbygget eller har eftermonteret udstyr."
    ],
    faq: [
      ["Hvilke selskaber forsikrer varebiler til erhverv?", "Blandt andre Alm. Brand, Codan, GF Forsikring, Gjensidige, If, Købstædernes Forsikring og Tryg. Topdanmark er en del af If."],
      ["Er Codan og Alm. Brand samme selskab?", "Codan er en del af Alm. Brand Forsikring A/S. De sælger hver sit produkt, men bruger samme taksatororganisation og samme vejhjælpspartner."],
      ["Kan et selskab afvise at forsikre en varebil?", "Selskaber, der sælger motoransvar, skal som udgangspunkt tegne ansvarsforsikringen for enhver forsikringspligtig. Der er undtagelser ved skyldig præmie og dagsgebyr. Pligten gælder kun ansvarsforsikringen."],
      ["Kan man købe erhvervsbilforsikring online?", "If sælger varebilforsikring online og viser prisen med det samme. Tryg har en prisberegner. De øvrige selskaber har en formular til tilbud eller opkald."],
      ["Hvad hedder førerdækningen hos de forskellige selskaber?", "Førerplads hos Codan og GF, Førerpladsdækning hos Gjensidige og If, Førerdækning hos Tryg og Førerulykke hos Alm. Brand."],
      ["Hvad sker der, hvis bilen kører mere end aftalt?", "Hos GF bliver skaden erstattet forholdsmæssigt, men nedsættelsen er højst 42.363 kr. pr. skade (basisår 2023). Tryg kan kræve en erstatning betalt tilbage, hvis kørelængden er overskredet."],
      ["Hvornår kan forsikringen opsiges?", "Hos GF skriftligt inden den 1. december til ophør den 1. januar. Hos Tryg skriftligt senest en måned før forsikringsperioden udløber. Begge selskaber har særlige regler efter en skade."],
      ["Hvordan virker GF's overskudsdeling?", "GF er medlemsejet og deler overskuddet som en rabat, der trækkes fra prisen, hver gang forsikringerne betales. Medlemmer får også del i overskuddet efter en skade."]
    ],
    kilder: [
      { navn: "Alm. Brand: Forsikring af varevogne og personbiler (erhverv)", url: AB, dato: "2026-10-04" },
      { navn: "Alm. Brand: Vejhjælp Erhverv", url: ABV, dato: "2026-10-04" },
      { navn: "Codan: Firmabilforsikring", url: CODAN, dato: "2026-10-04" },
      { navn: "Codan: Vejhjælp Erhverv til firmabilforsikring", url: CODANV, dato: "2026-10-04" },
      { navn: "GF Forsikring: Erhvervsbilforsikring til firmabiler", url: GFS, dato: "2026-10-07" },
      { navn: "GF Forsikring: Erhvervsbilforsikring, betingelser nr. 130-1, januar 2023", url: GF, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-04" },
      { navn: "If: Varebilforsikring", url: IF, dato: "2026-10-07" },
      { navn: "If: Vejhjælp til firmabil, varebil og taxa", url: IFV, dato: "2026-10-04" },
      { navn: "Købstædernes Forsikring: Motorforsikring (erhverv)", url: KF, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring", url: TRYGS, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Tryg: Tryg Vejhjælp til erhverv", url: TRYGV, dato: "2026-10-04" },
      { navn: "Lærerstandens Brandforsikring: Anmeld skade, erhverv", url: LB, dato: "2026-10-04" },
      { navn: "F&P: Autotaks, selskaber og taksatororganisationer", url: FPA, dato: "2026-10-04" },
      { navn: "Retsinformation: Bekendtgørelse om ansvarsforsikring for motordrevne køretøjer mv., BEK nr. 1627 af 12/12/2023", url: BEK, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["Tryg: varebilforsikringen er til varebiler, varevogne og kassebiler med en totalvægt på op til 3.500 kg.", TRYGS],
    ["Tryg: alle tre pakker (Basis, Udvidet, Super) har lovpligtig ansvarsforsikring og kasko, førerdækning og krisehjælp, el- og hybriddækning og adgang til lånebil; Udvidet har desuden Tryg Vejhjælp i Danmark og Leasing; Super har desuden fejltankningsforsikring, nulselvrisiko og glas, nøgleforsikring og et dna-kit.", TRYGS],
    ["GF: GF er medlemsejet og deler overskuddet med medlemmerne som en rabat, der trækkes fra prisen hver gang forsikringerne betales; overskudsdelingen er solidarisk, så man også får del efter en skade i årets løb; vejhjælp i Danmark 24 timer i døgnet er en del af kaskoforsikringen; kaskoforsikringen giver også vejhjælp i udlandet og retshjælp.", GFS],
    ["Købstædernes Forsikring: 0 kr. i selvrisiko på stenslag gælder ved tilvalg af kaskoforsikring; efter 5 skadefri år bliver man elitebilist med lavere pris og selvrisiko.", KF],
    ["Tryg (afsnit 1): den årlige kørelængde kan rettes på Min Virksomhed, hvor den nye pris kan ses.", TRYG],
    ["GF Friskade (punkt 5) dækker tyveri af aflåst bil; Tryg Nulselvrisiko (afsnit 5.4) dækker tyveri og røveri med ukendt skadevolder.", GF],
    ["GF (punkt 13.5): startpristrinnet beregnes ud fra antal år med bil forsikret i eget navn og tidligere belastende skader; et skadefrit år på samme trin giver et nyt og billigere trin ved næste hovedforfald, indtil trin 9 (Superelite); ved belastende skade stående ét år ekstra; ved to eller flere skader i samme forsikringsår stående til ét års skadefrihed; skader på ladekabler (ved Kasko eller Delkasko), Friskade-skader og Udvidet glas-skader er ikke belastende; skadeudgiften kan tilbagebetales senest én måned efter meddelelse om skadens endelige omfang.", GF],
    ["GF (punkt 13.2.1): kilometerstand og aftalt årligt kørselsforbrug står i policen; ved skade aflæses kilometerstanden, og overstiger kørslen det aftalte, erstattes skaden forholdsmæssigt efter forholdet mellem betalt og korrekt pris, højst nedsat med 42.363 kr. (basisår 2023) pr. skade; ikke ved skader inden for de første 12 måneder efter aflæsningen (medmindre der faktisk er kørt mere), ikke ved rene glasskader; ændringer i kørslen skal straks meldes med ny kilometerstand.", GF],
    ["Tryg (afsnit 11.8): Tryg kan kræve udbetalt erstatning tilbage, hvis den årlige kørelængde er overskredet.", TRYG],
    ["GF (punkt 13.13-13.15): prisen indeksreguleres hvert år 1. januar efter lønindeks for den private sektor; beløb med basisår reguleres samtidig; væsentlige ændringer varsles med én måneds varsel til hovedforfald; forsikringen opsiges skriftligt inden 1. december til ophør 1. januar; efter skade kan forsikringstager opsige med 14 dages varsel indtil en måned efter skadens afslutning.", GF],
    ["Tryg (afsnit 13): prisen indeksreguleres på første betalingsdag i kalenderåret efter lønindeks for den private sektor; summer i forsikringsaftalen indeksreguleres ikke, men summer på førerdækning og krisehjælp følger erstatningsansvarslovens summer; væsentlige ændringer varsles senest 30 dage før forsikringsperioden udløber; begge parter kan opsige skriftligt senest 1 måned før periodens udløb; Tryg kan opsige med 14 dages varsel efter skade indtil 1 måned efter betaling eller afvisning.", TRYG],
    ["GF (punkt 13.16): kvalitetsafdelingen er klageansvarlig og revurderer sagen.", GF]
  ]
};
