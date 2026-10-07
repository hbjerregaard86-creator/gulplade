// Underside /til-varebilen/service/erstatningsbil/ (07-10-2026)
var VWGAR = `https://ww4.volkswagen.dk/media/hcdf4g1k/garanti_vwe_100042_sep26_web.pdf`;
var FORD = `https://www.ford.dk/erhverv/ford-pro-service`;
var FORDVH = `https://www.ford.dk/min-bil/vejhjaelp`;
var TOY = `https://www.toyota.dk/erhvervsbiler/professional/toyota-relax`;
var TOYVH = `https://www.toyota.dk/toyota-ejere/om-toyota-service/derfor-toyota-service/toyota-vejhjaelp`;
var VWVH = `https://www.volkswagen.dk/da/vaerksted/autoriseret-vaerksted/vejhjaelp-og-assistance-ved-ulykke.html`;
var VWPM = `https://www.volkswagen.dk/da/vaerksted/service/prismatch.html`;
var MB_MOB = `https://www.mercedes-benz.dk/vans/services/mobility-solutions.html`;
var MB_MAINT = `https://www.mercedes-benz.dk/vans/services/vehicle-maintenance.html`;
var MB_ROAD = `https://www.mercedes-benz.dk/vans/services/roadside-assistance-experts.html`;
var MB_VAN = `https://www.mercedes-benz.dk/vans/services/van-service.html`;
var AYV = `https://www.ayvens.com/da-dk/for-foerere/vejhjaelp/`;
var ARV = `https://www.arval.dk/erhvervsleasing-smv/full-service-leasing`;
var NOR = `https://www.nordania.dk/erhverv/find-hjaelp/service-skader-reparation/forhaandsgodkendelse`;
var HES = `https://www.hessel.dk/erhverv/service-vaerksted/proplus`;
var TRYG = `https://tryg.dk/dokumenter/erhverv/betingelser-varebilforsikring.pdf`;
var GJ = `https://www.gjensidige.dk/erhverv/autoforsikring`;
var FSB = `https://www.fstyr.dk/privat/koerekort/dit-foerste-koerekort/koerekort-til-bil`;
var FST = `https://www.fstyr.dk/privat/koerekort/udvidelse-af-koerekort/koerekort-til-paahaengskoeretoej-til-bil`;

module.exports = {
  id: "service/erstatningsbil",
  side: {
    slug: "erstatningsbil",
    navn: "Erstatningsbil og lånebil",
    titel: "Erstatningsbil og lånebil til varebil",
    kort: `Hvornår du får en lånebil eller erstatningsbil under service, reparation og nedbrud, og hvad producenter, leasingselskaber og forsikringer lover.`,
    beskrivelse: `Erstatningsbil og lånebil til varebil: Ford, Toyota, VW og Mercedes-Benz, vejhjælpens grænser, leasingkontrakten, forsikringen og aftalen.`,
    manchet: `Garantien giver ikke i sig selv ret til en erstatningsbil. Den kommer fra værkstedets serviceløfte, producentens vejhjælp, leasingkontrakten eller forsikringen. Her kan du se, hvornår bilen kommer, hvor længe du har den, og hvad der skal stå i aftalen.`,
    visuel: {
      hero: "service",
      kort_fortalt: [
        ["Erstatningsbil gennem garantien", "Nej", "Volkswagens garanti udelukker kravet"],
        ["Ford Pro Service", "samme dag", "ellers en erstatningsbil"],
        ["Lånebil efter nedbrud, VW", "24 timer", "efter opkaldet, hvis bilen ikke er køreklar"],
        ["MobiloVan", "op til 30 år", "ved service til tiden"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Garantien dækker ikke erstatningsbil",
        tekst: [
          `Når en ny varebil går i stykker, er det nærliggende at regne med, at producenten også sørger for en bil i mellemtiden. Det gør garantien ikke. Volkswagens garantibestemmelser for erhvervsbiler giver ret til afhjælpning af fejlen, og krav om erstatning, fx at der stilles en erstatningsbil til rådighed, er ikke omfattet.`,
          `Volkswagen skriver, at det også gælder, når fejlen ikke kan afhjælpes endeligt. Til gengæld berører garantien ikke de krav, du har efter Volkswagen Vejhjælp eller en lignende vejhjælpsordning. Lånebilen kommer altså fra en anden aftale end garantien.`,
          `Producenterne bruger flere ord for det samme. Ford skriver både erstatningsbil, lånebil og lejebil, og Toyota Vejhjælp skriver udlejningsbil. Ordet betyder mindre end vilkårene, altså hvor længe du har bilen, hvor stor den er, og hvem der betaler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 230" role="img" aria-label="Erstatningsbilen i midten med pile fra de fire steder, den kan komme fra: værkstedets serviceløfte, producentens vejhjælp, leasingkontrakten og forsikringen. Garantien giver ikke ret til en."><defs><marker id="pil-erstatningsbil-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="0" y="10" width="156" height="44"/><text x="10" y="28">Værkstedets</text><text x="10" y="44">serviceløfte</text><rect class="tg-kasse" x="244" y="10" width="156" height="44"/><text x="254" y="28">Producentens</text><text x="254" y="44">vejhjælp</text><rect class="tg-profil" x="162" y="10" width="76" height="44"/><text x="200" y="29" text-anchor="middle">Garantien</text><text class="tg-lille" x="200" y="45" text-anchor="middle">GIVER IKKE</text><line class="tg-skinne-tynd" x1="200" y1="54" x2="200" y2="94"/><rect class="tg-modul" x="125" y="96" width="150" height="40"/><text class="tg-modul__tekst" x="200" y="120" text-anchor="middle">ERSTATNINGSBIL</text><rect class="tg-kasse" x="0" y="176" width="156" height="44"/><text x="10" y="194">Leasingkontrakten,</text><text x="10" y="210">hvis den står der</text><rect class="tg-kasse" x="244" y="176" width="156" height="44"/><text x="254" y="194">Forsikringen</text><text x="254" y="210">ved skade</text><line class="tg-pil" x1="90" y1="54" x2="140" y2="93" marker-end="url(#pil-erstatningsbil-1)"/><line class="tg-pil" x1="310" y1="54" x2="260" y2="93" marker-end="url(#pil-erstatningsbil-1)"/><line class="tg-pil" x1="90" y1="176" x2="140" y2="139" marker-end="url(#pil-erstatningsbil-1)"/><line class="tg-pil" x1="310" y1="176" x2="260" y2="139" marker-end="url(#pil-erstatningsbil-1)"/></svg>`,
          tekst: `Skematisk. De fire steder, en erstatningsbil kan komme fra. Garantien giver ikke i sig selv ret til en. Kilde: <a href="${VWGAR}" rel="noopener">Volkswagen, garantibestemmelser for erhvervsbiler</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lånebil, erstatningsbil og vejhjælp",
        tekst: [
          `Hvem der stiller en bil, afhænger af, hvorfor varebilen holder stille. Ved planlagt service er det værkstedet eller serviceaftalen. Ved et nedbrud på vejen er det vejhjælpen, og ved en skade efter et uheld er det forsikringen.`,
          `En varebil kan godt have flere ordninger på én gang. En leaset bil kan fx have vejhjælp fra producenten, lånebil i leasingkontrakten og lånebil gennem forsikringen. Vilkårene er forskellige, og det er ordningen bag opkaldet, der afgør, hvor længe du har bilen.`
        ],
        tabel: {
          kolonner: ["Situation", "Typisk ordning"],
          raekker: [
            ["Planlagt service", "Lånebil fra værkstedet eller kontrakten"],
            ["Reparation over flere dage", "Erstatningsbil efter kontrakt eller værkstedets løfte"],
            ["Nedbrud på vejen", "Vejhjælp fra producent eller leasingselskab, evt. med lånebil"],
            ["Skade", "Forsikringen"]
          ],
          note: `Bygget på ordningerne fra Ford, Toyota, Mercedes-Benz, Ayvens, Arval og Nordania, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Producenter og mærkeværksteder",
        tekst: [
          `Flere producenter lover en bil i mellemtiden, når varebilen er til service eller reparation på et mærkeværksted, men løfterne er formuleret forskelligt. Ford Pro Service stiller en passende erstatningsbil, hvis varebilen ikke bliver færdig samme dag. Toyota skriver, at de bestræber sig på at finde en lånebil, der matcher dit behov.`,
          `Ford lover altså en bil, mens Toyota lover at prøve. Mercedes-Benz' MobiloVan gælder i op til 30 år, når bilen serviceres til tiden hos en autoriseret partner. Ved nedbrud dækker den hjælp fra en Service24h-tekniker og udgifter til bugsering, lånebil, taxa eller hotel.`
        ],
        tabel: {
          kolonner: ["Ordning", "Hvornår", "Hvad"],
          raekker: [
            ["Ford Pro Service", "Varebilen bliver ikke færdig samme dag", "En passende erstatningsbil"],
            ["Toyota", "Bilen er til service", "Toyota bestræber sig på at finde en lånebil, der matcher behovet"],
            ["Mercedes-Benz MobiloVan", "Nedbrud, op til 30 år ved service til tiden", "Service24h-tekniker, bugsering, lånebil, taxa eller hotel"],
            ["Mercedes-Benz", "Generelt", "Hente- og bringeservice, vejhjælp og lånebiler"]
          ],
          note: `Kilder: <a href="${FORD}" rel="noopener">Ford Pro Service</a>, <a href="${TOY}" rel="noopener">Toyota</a>, <a href="${MB_MAINT}" rel="noopener">Mercedes-Benz MobiloVan</a> og <a href="${MB_MOB}" rel="noopener">Mercedes-Benz mobilitetsløsninger</a>, set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Lånebil, hente-bringe og hurtig service",
        tekst: [
          `Ved planlagt service er lånebilen kun én af løsningerne. Flere værksteder henter varebilen og bringer den tilbage, eller de laver servicen så hurtigt, at du kan vente på den.`,
          `Ford Transit Erhvervscentrene kan hente bilen før service eller reparation og aflevere den hos dig igen. Fords ekspresservice sætter flere teknikere på bilen, så du får det hele på den halve tid. Toyotas Express Service er også det fulde service på den halve tid, og til samme pris.`,
          `Volkswagen tager betaling for lånebilen og skriver, at den ikke koster alverden. Du kan kombinere den med hente-bringe-service, og Volkswagen bringer lånebilen derhen, hvor du skal bruge den. Kombinationen kan også omfatte bilvask og indvendig rengøring.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Værksted", "Lånebil", "Hente-bringe", "Hurtig service"],
          raekker: [
            ["Ford Pro Service", "Hvis ikke færdig samme dag", "ja", "Flere teknikere på bilen"],
            ["Volkswagen", "Mod betaling", "ja", "Express Service, 1,5 time uden tid"],
            ["Toyota", "Søges efter behov", "Ikke nævnt", "Express Service, halv tid"],
            ["Renault Pro+ hos Hessel", "ja", "Ikke nævnt", "Plads til service inden for 8 timer"]
          ],
          note: `Kilder: <a href="${FORD}" rel="noopener">Ford</a>, <a href="${VWPM}" rel="noopener">Volkswagen</a>, <a href="${TOY}" rel="noopener">Toyota</a> og <a href="${HES}" rel="noopener">Hessel</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Vejhjælpen følger servicen",
        tekst: [
          `Ved et nedbrud på vejen er det producentens vejhjælp, der skaffer en bil. Hos Ford, Toyota og Volkswagen hænger vejhjælpen sammen med servicen, så den fortsætter, så længe bilen bliver serviceret på et autoriseret værksted.`,
          `Ford Assistance følger med en ny Ford, der er importeret af Ford i Danmark, og gælder frem til første serviceeftersyn, dog højst 2 år. Derefter kan du købe Ford Assistance Plus, når bilen bliver serviceret på et autoriseret Ford-værksted. Den giver op til 24 måneders europæisk vejhjælp, alt efter bilens serviceinterval, og gælder Fords person- og varebiler uanset alder. Ford Assistance Plus følger ikke med Ford Økonomi Service.`,
          `Toyota giver 1 års vejhjælp i hele Europa med en ny bil, og aftalen bliver forlænget, når bilen bliver serviceret hos Toyota. Forlængelsen kræver ifølge Toyota, at du vælger et sundheds- eller sikkerhedstjek ved servicen.`,
          `Volkswagen Vejhjælp er gratis for Volkswagen-ejere og dækker frem til næste anbefalede serviceeftersyn. Er bilen købt et andet sted end hos en autoriseret dansk forhandler, skal det sidste store eftersyn være lavet hos en autoriseret Volkswagen Servicepartner i Danmark, og alle anbefalede reparationer skal være udført.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Ford Assistance, ny bil, højst", "2", "år"],
            ["Ford Assistance Plus, op til", "24", "mdr. efter hvert service"],
            ["Toyota Vejhjælp, ny bil", "1", "år"],
            ["MobiloVan, Mercedes-Benz, op til", "30", "år ved service til tiden"]
          ],
          note: `Kilder: <a href="${FORDVH}" rel="noopener">Ford: Vejhjælp</a> og <a href="${TOYVH}" rel="noopener">Toyota Vejhjælp</a>, set den 7. oktober 2026, og <a href="${MB_MAINT}" rel="noopener">Mercedes-Benz MobiloVan</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Lånebil efter et nedbrud",
        tekst: [
          `Vejhjælpens lånebil har faste grænser. Hos Volkswagen kan du bede om en gratis lånebil, når Volkswagen Vejhjælp har bugseret bilen til en Volkswagen Servicepartner, og der går mere end 24 timer fra dit opkald, til bilen er køreklar.`,
          `Ford Assistance prøver at skaffe en lejebil af samme klasse med fri kilometer og ansvarsforsikring, når bilen ikke kan repareres samme dag efter bugsering til et Ford-værksted. Lejebilen gælder højst 2 hverdage. Ved hærværk og ulykker giver Ford Assistance kun bugsering og ingen lånebil.`,
          `Toyota Vejhjælp stiller en tilsvarende udlejningsbil i højst 3 arbejdsdage, men kun når bilen er bugseret. Kan bilen ikke gøres køreklar inden for 5 arbejdsdage efter diagnosen, sørger Toyota Vejhjælp for transport af bilen til et Toyota-værksted i Danmark. Ford sender bilen hjem til din egen forhandler, hvis den bryder ned i udlandet, og reparationen tager mere end 5 hverdage.`,
          `Både Ford og Toyota kan give hotel i stedet for en bil. Toyota betaler hotel i op til 4 nætter med højst 940 kr. pr. person pr. døgn. Ford kombinerer ikke lånebil, hotel og videre rejse, og det er Ford Assistance, der vurderer, hvad du får.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Tidslinje efter et nedbrud. Efter 24 timer kan du få en gratis lånebil hos Volkswagen. Fords lejebil gælder højst 2 hverdage og Toyotas udlejningsbil højst 3 arbejdsdage. Efter 5 arbejdsdage transporterer Toyota bilen til et værksted i Danmark."><defs><marker id="pil-erstatningsbil-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><line class="tg-gulvlinje" x1="20" y1="130" x2="386" y2="130" marker-end="url(#pil-erstatningsbil-2)"/><line class="tg-skinne-tynd" x1="24" y1="104" x2="24" y2="124"/><line class="tg-skinne-tynd" x1="190" y1="104" x2="190" y2="124"/><line class="tg-skinne-tynd" x1="360" y1="104" x2="360" y2="124"/><line class="tg-skinne-tynd" x1="105" y1="136" x2="105" y2="150"/><line class="tg-skinne-tynd" x1="275" y1="136" x2="275" y2="150"/><circle class="tg-modul" cx="24" cy="130" r="5"/><circle class="tg-modul" cx="105" cy="130" r="5"/><circle class="tg-modul" cx="190" cy="130" r="5"/><circle class="tg-modul" cx="275" cy="130" r="5"/><circle class="tg-modul" cx="360" cy="130" r="5"/><text class="tg-fremhaev" x="20" y="66">Nedbrud</text><text x="20" y="82">du ringer til</text><text x="20" y="98">vejhjælpen</text><text class="tg-fremhaev" x="190" y="66" text-anchor="middle">2 hverdage</text><text x="190" y="82" text-anchor="middle">Ford: lejebil</text><text x="190" y="98" text-anchor="middle">højst så længe</text><text class="tg-fremhaev" x="396" y="66" text-anchor="end">5 arbejdsdage</text><text x="396" y="82" text-anchor="end">Toyota: transport til</text><text x="396" y="98" text-anchor="end">værksted i Danmark</text><text class="tg-fremhaev" x="105" y="166" text-anchor="middle">24 timer</text><text x="105" y="182" text-anchor="middle">VW: gratis lånebil</text><text x="105" y="198" text-anchor="middle">efter bugsering</text><text class="tg-fremhaev" x="275" y="166" text-anchor="middle">3 arbejdsdage</text><text x="275" y="182" text-anchor="middle">Toyota: udlejningsbil</text><text x="275" y="198" text-anchor="middle">højst så længe</text><text class="tg-lille" x="20" y="236">AFSTANDENE ER IKKE MÅLFASTE</text></svg>`,
          tekst: `Skematisk. Grænserne for lånebil og transport efter et nedbrud hos Volkswagen, Ford og Toyota. Kilder: <a href="${VWVH}" rel="noopener">Volkswagen Vejhjælp</a>, <a href="${FORDVH}" rel="noopener">Ford: Vejhjælp</a> og <a href="${TOYVH}" rel="noopener">Toyota Vejhjælp</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan forløber et nedbrud",
        tekst: [
          `Forløbet er næsten ens hos producenterne, men detaljerne afgør, om der kommer en lånebil. Hos Toyota og Volkswagen skal bilen være bugseret af vejhjælpen, før lånebilen kommer på tale. Ford stiller lejebilen, når reparationen ikke kan laves samme dag efter bugsering til et Ford-værksted.`,
          `Toyota Vejhjælp reparerer bilen på stedet, når det er praktisk muligt og billigere end bugsering. Ellers bliver bilen fragtet med eller uden anhænger til et autoriseret Toyota-værksted efter dit valg. Ford Assistance bugserer til det nærmeste Ford-værksted eller til et, du vælger inden for 50 km. Med Ford Assistance Plus kan transporten tage op til 3 dage, når det valgte værksted ligger mere end 50 km væk.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Ring til vejhjælpen", "Ford, Toyota og Volkswagen rykker ud døgnet rundt."],
            ["Hjælp på stedet", "Toyota Vejhjælp reparerer på stedet, når det kan lade sig gøre og er billigere end bugsering."],
            ["Bugsering", "Bilen bliver kørt til et autoriseret værksted. Ford Assistance kører til et valgfrit Ford-værksted inden for 50 km."],
            ["Lånebil eller hotel", "Kan bilen ikke repareres samme dag, får du lejebil, hotel eller hjælp til at komme videre efter ordningens regler."],
            ["Bilen er klar", "Lånebilen bliver afleveret, når din egen bil er repareret, eller når ordningens dage er brugt."]
          ]
        }
      },
      {
        overskrift: "Når reparationen trækker ud",
        tekst: [
          `Mercedes-Benz' vejhjælpseksperter følger reparationen, når bilen er bragt til et autoriseret værksted. Forventer værkstedet at bruge mere end tre arbejdsdage, går de ind i sagen med teknisk support og reservedele. Under reparationen stiller de en lånebil, der passer til virksomheden og branchen.`,
          `Ordningen er bygget til de reparationer, hvor vejhjælpens få dage ikke rækker. Hos Ford slutter lejebilen efter 2 hverdage og hos Toyota efter 3 arbejdsdage, mens Mercedes-Benz stiller en lånebil under reparationen.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Bilen er på værkstedet", "Bilen er bragt til et autoriseret værksted, og Mercedes-Benz’ vejhjælpseksperter følger reparationen."],
            ["Over tre arbejdsdage", "Forventer værkstedet at bruge mere end tre arbejdsdage, går eksperterne ind i sagen med teknisk support og reservedele."],
            ["Under reparationen", "Mercedes-Benz stiller en lånebil, der passer til virksomheden og branchen."]
          ],
          note: `Kilde: <a href="${MB_ROAD}" rel="noopener">Mercedes-Benz, Vejhjælp til varebiler</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "I leasingkontrakten",
        tekst: [
          `Leaser du varebilen, kan erstatningsbilen være en del af leasingaftalen. Det afhænger af kontrakten, og leasingselskaberne skriver det forskelligt.`,
          `Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året, og i udlandet tilkalder du hjælp via SOS Rødt Kort. Vejhjælpen bugserer bilen og bringer fører, passagerer og bagage til et sikkert sted og hjem igen. Den leverer en erstatningsbil, hvis det er med i kontrakten.`,
          `Arval skriver, at operationel leasing omfatter service, forsikring, afgifter og dæk, og at Arval stiller en lånebil, når bilen skal til reparation. Hos Nordania skal en reparation over 1.500 kr. forhåndsgodkendes, og kun autoriserede mærkeværksteder må reparere eller servicere Nordanias biler. Mere om aftalerne står i <a href="/til-varebilen/service/serviceaftale-ved-leasing/">serviceaftale ved leasing</a>.`
        ],
        kort: [
          ["Ayvens", "Vejhjælpen omfatter levering af en erstatningsbil, hvis det er inkluderet i kontrakten."],
          ["Arval", "Stiller en lånebil, hvis bilen skal til reparation."],
          ["Nordania", "Erstatningsbil er en post på værkstedsrekvisitionen, også ved skade, med selvrisikoafdækning og brændstof."]
        ],
        efter: [
          `Kilder: <a href="${AYV}" rel="noopener">Ayvens</a>, <a href="${ARV}" rel="noopener">Arval</a> og <a href="${NOR}" rel="noopener">Nordania</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Erstatningsbilen på rekvisitionen",
        tekst: [
          `Nordanias værkstedsrekvisition viser, hvad en erstatningsbil består af, når den bliver betalt som en del af en reparation. Værkstedet skriver en pris uden moms på hver post.`,
          `Erstatningsbilen står som en post i forbindelse med skade. Under den kommer forsikring af erstatningsbilen, selvrisikoafdækning, brændstof og overkørte kilometer. Prisen for en erstatningsbil er derfor mere end lejen, og det er de samme poster, du kan få med, når du selv aftaler en lånebil.`,
          `Nordania godkender kun en reparation, når brugeren har udfyldt en værkstedsrekvisition eller har booket besøget i Nordania Bil App. Godkendelsen kan ikke gives telefonisk, og en ansøgning, der er oprettet efter reparationen, bliver som hovedregel afvist.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Udsnit af en værkstedsrekvisition med fem poster for en erstatningsbil: erstatningsbil ved skade, forsikring, selvrisikoafdækning, brændstof og overkørte kilometer. Hver post har et felt til prisen, og nederst står summen."><rect class="tg-rum" x="50" y="6" width="300" height="236"/><text class="tg-fremhaev" x="70" y="32">Værkstedsrekvisition</text><text class="tg-lille" x="70" y="50">ERSTATNINGSBIL</text><line class="tg-skillevaeg" x1="70" y1="60" x2="330" y2="60"/><text x="70" y="86">Erstatningsbil ved skade</text><rect class="tg-modul" x="262" y="72" width="68" height="20"/><text class="tg-modul__tekst" x="322" y="86" text-anchor="end">kr.</text><line class="tg-skinne-tynd" x1="70" y1="98" x2="250" y2="98"/><text x="70" y="114">Forsikring af bilen</text><rect class="tg-modul" x="262" y="100" width="68" height="20"/><text class="tg-modul__tekst" x="322" y="114" text-anchor="end">kr.</text><line class="tg-skinne-tynd" x1="70" y1="126" x2="250" y2="126"/><text x="70" y="142">Selvrisikoafdækning</text><rect class="tg-modul" x="262" y="128" width="68" height="20"/><text class="tg-modul__tekst" x="322" y="142" text-anchor="end">kr.</text><line class="tg-skinne-tynd" x1="70" y1="154" x2="250" y2="154"/><text x="70" y="170">Brændstof</text><rect class="tg-modul" x="262" y="156" width="68" height="20"/><text class="tg-modul__tekst" x="322" y="170" text-anchor="end">kr.</text><line class="tg-skinne-tynd" x1="70" y1="182" x2="250" y2="182"/><text x="70" y="198">Overkørte km</text><rect class="tg-modul" x="262" y="184" width="68" height="20"/><text class="tg-modul__tekst" x="322" y="198" text-anchor="end">kr.</text><line class="tg-skillevaeg" x1="70" y1="212" x2="330" y2="212"/><text class="tg-fremhaev" x="70" y="232">I alt</text><rect class="tg-kasse" x="262" y="218" width="68" height="20"/><text x="322" y="232" text-anchor="end">kr.</text></svg>`,
          tekst: `Skematisk. Posterne for en erstatningsbil på Nordanias værkstedsrekvisition. Kilde: <a href="${NOR}" rel="noopener">Nordania: Forhåndsgodkendelse</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lånebil gennem forsikringen",
        tekst: [
          `Ved en skade efter et uheld går reparationen og lånebilen gennem forsikringen. Selskaberne knytter lånebilen til deres egne værksteder, og du får den, når bilen bliver repareret der.`,
          `Med Tryg Vejhjælp stiller værkstedet en lånebil, så længe reparationen varer, når varebilen er fragtet til et værksted tilknyttet Tryg Vejhjælp og bliver repareret der. Du laver selv aftalen med værkstedet. Lånebilen gælder til 100 km pr. døgn, kørsel derudover betaler du direkte til værkstedet, og brændstof eller strøm betaler du selv.`,
          `Tryg kan ikke garantere en lånebil som din egen, og du kan fx få en personbil i stedet for en varebil. Fravælger du bagefter reparationen på værkstedet, betaler du leje for lånebilen i den periode, du har haft den.`,
          `Gjensidige giver fri lånebil på sine samarbejdsværksteder, når bilen bliver repareret, hvis værkstedet har en ledig. Har du Trygs tilvalg Nulselvrisiko og får bilen repareret på et Tryg Reparationsværksted, betaler Tryg selvrisikoforsikringen på værkstedets lånebil. Dækningerne står i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a> og <a href="/til-varebilen/forsikring/vejhjaelp-til-varebil/">vejhjælp til varebil</a>.`
        ],
        tabel: {
          kolonner: ["Ordning", "Hvornår", "Grænse"],
          raekker: [
            ["Tryg Vejhjælp", "Reparation på et værksted tilknyttet Tryg Vejhjælp", "Så længe reparationen varer, 100 km pr. døgn"],
            ["Tryg, tilvalget Leasing", "Totalskade eller tyveri", "Højst 3.000 km i alt"],
            ["Gjensidige", "Reparation på et samarbejdsværksted", "Hvis værkstedet har en lånebil ledig"],
            ["Gjensidige, Lånebil Plus", "Når værkstedet ikke har en, også ved totalskade og tyveri", "Op til 30 dage"]
          ],
          note: `Kilder: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.3, 5.4 og 11.3</a> og <a href="${GJ}" rel="noopener">Gjensidige</a>, set den 7. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Lånebil ved totalskade og tyveri",
        tekst: [
          `Bliver varebilen totalskadet eller stjålet, er der ingen reparation at vente på. Bilen skal erstattes, og det tager tid. Trygs tilvalg Leasing giver en lånebil i den periode, og Tryg sælger tilvalget til varebiler under fire år med en leasingperiode på mellem 6 og 48 måneder.`,
          `Lånebilen er klar inden for 24 timer fra det tidspunkt, hvor Tryg har accepteret at dække skaden. Anmelder du skaden torsdag eller fredag, er den først klar efter fire dage. Den bliver udleveret et sted i Danmark efter aftale, og på øer uden fast forbindelse bliver den leveret ved det nærmeste færgeleje på fastlandet.`,
          `Du har lånebilen til højst 3.000 km i alt og skal aflevere den senest 14 dage efter, at du har fået kontanterstatningen. Tryg garanterer ikke samme størrelse, mærke, model og udstyr, og vil du have en større bil, betaler du selv merprisen. Tryg kan også betale et kontant beløb i stedet for en lånebil.`,
          `Gjensidiges Lånebil Plus dækker også totalskade og tyveri med lånebil i op til 30 dage. Hvordan erstatningen for en leaset bil bliver fordelt, står i <a href="/til-varebilen/forsikring/forsikring-af-leasingbil/">forsikring af leasingbil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Lånebil klar efter accept", "24", "timer"],
            ["Kørsel i alt, højst", "3.000", "km"],
            ["Aflevering efter kontanterstatning, senest", "14", "dage"]
          ],
          note: `Trygs tilvalg Leasing. Kilde: <a href="${TRYG}" rel="noopener">Tryg, betingelser nr. 2303, afsnit 5.3</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Lånebilens størrelse og kørekortet",
        tekst: [
          `Lånebilen skal kunne køres af den medarbejder, der skal bruge den. Med kørekort til kategori B må man køre en personbil eller varebil med en tilladt totalvægt på højst 3.500 kg. En større varebil kan ikke køres på et almindeligt B-kørekort. Totalvægten forklarer vi i <a href="/haandbogen/totalvaegt-nyttelast-og-koerekort/">totalvægt, nyttelast og kørekort</a>.`,
          `Trækker varebilen en trailer, skal lånebilen også have anhængertræk, og vogntoget skal passe til kørekortet. Med kørekort B må bilen veje højst 3.500 kg og traileren højst 750 kg, i alt 4.250 kg. Er traileren tungere end 750 kg, må bil og trailer tilsammen højst have en tilladt totalvægt på 3.500 kg.`,
          `Tungere vogntog kræver kørekort B+ eller BE. En lånebil skal altså have en totalvægt og en anhængervægt, der passer både til traileren og til førerens kørekort. Mere om træk står i <a href="/til-varebilen/traek-og-tagudstyr/anhaengertraek-til-varebil/">anhængertræk til varebil</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 252" role="img" aria-label="To vogntog med en varebil og en trailer. Øverst en trailer på højst 750 kilo bag en varebil på højst 3.500 kilo, i alt 4.250 kilo. Nederst en trailer over 750 kilo, hvor bil og trailer tilsammen højst må veje 3.500 kilo."><text class="tg-fremhaev" x="20" y="18">Lånebil med trailer på kørekort B</text><g transform="translate(236,92)"><path class="tg-rum" d="M0,0 L0,-52 Q0,-56 4,-56 L96,-56 L110,-38 L116,-35 Q120,-33 120,-29 L120,-3 Q120,0 116,0 Z"/><path class="tg-profil" d="M88,-52 L96,-52 L108,-37 L88,-37 Z"/><line class="tg-skinne-tynd" x1="84" y1="-56" x2="84" y2="0"/><circle class="tg-profil" cx="24" cy="0" r="9"/><circle class="tg-profil" cx="98" cy="0" r="9"/><text x="42" y="-24" text-anchor="middle">3.500 kg</text></g><rect class="tg-modul" x="160" y="62" width="64" height="26"/><text class="tg-modul__tekst" x="192" y="80" text-anchor="middle">750 kg</text><circle class="tg-profil" cx="192" cy="92" r="9"/><line class="tg-gulvlinje" x1="224" y1="84" x2="236" y2="84"/><line class="tg-gulvlinje" x1="20" y1="101" x2="380" y2="101"/><text x="20" y="124">Trailer højst 750 kg: højst 4.250 kg i alt</text><g transform="translate(236,190)"><path class="tg-rum" d="M0,0 L0,-52 Q0,-56 4,-56 L96,-56 L110,-38 L116,-35 Q120,-33 120,-29 L120,-3 Q120,0 116,0 Z"/><path class="tg-profil" d="M88,-52 L96,-52 L108,-37 L88,-37 Z"/><line class="tg-skinne-tynd" x1="84" y1="-56" x2="84" y2="0"/><circle class="tg-profil" cx="24" cy="0" r="9"/><circle class="tg-profil" cx="98" cy="0" r="9"/></g><rect class="tg-modul" x="110" y="150" width="114" height="36"/><text class="tg-modul__tekst" x="167" y="173" text-anchor="middle">over 750 kg</text><circle class="tg-profil" cx="150" cy="190" r="9"/><circle class="tg-profil" cx="176" cy="190" r="9"/><line class="tg-gulvlinje" x1="224" y1="182" x2="236" y2="182"/><line class="tg-gulvlinje" x1="20" y1="199" x2="380" y2="199"/><text x="20" y="222">Trailer over 750 kg: højst 3.500 kg i alt</text><text class="tg-lille" x="20" y="242">TUNGERE VOGNTOG KRÆVER B+ ELLER BE</text></svg>`,
          tekst: `Skematisk. Vægtgrænserne for vogntog på kørekort B, regnet i tilladt totalvægt. Kilder: <a href="${FSB}" rel="noopener">Færdselsstyrelsen: Kørekort til bil</a> og <a href="${FST}" rel="noopener">Færdselsstyrelsen: Kørekort til påhængskøretøj til bil</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Det skal aftales",
        tekst: [
          `En lånebil, der ikke kan det samme som varebilen, holder ikke driften i gang. Tryg skriver, at du kan få en personbil i stedet for en varebil, og Ford lover en passende erstatningsbil og en lejebil af tilsvarende klasse.`,
          `Derfor er det de konkrete krav, der skal stå i aftalen med værkstedet, leasingselskabet eller forsikringen. Punkterne herunder bygger på de vilkår, producenterne, leasingselskaberne og forsikringerne selv skriver.`
        ],
        punkter: [
          "<strong>Biltype.</strong> Varebil eller personbil, og størrelse. Tryg kan ikke garantere en varebil.",
          "<strong>Indretning.</strong> Om lånebilen skal have reoler, træk eller samme lastrum som varebilen.",
          "<strong>Kørekort.</strong> Lånebilen skal kunne køres på førerens kørekort, også med trailer.",
          "<strong>Brændstof eller strøm.</strong> Nordania har en særskilt post for brændstof til erstatningsbilen, og hos Tryg betaler du selv.",
          "<strong>Kilometer.</strong> Tryg giver 100 km pr. døgn på værkstedets lånebil, og Nordania har en post for overkørte kilometer.",
          "<strong>Selvrisiko.</strong> Nordania har en post for selvrisikoafdækning på erstatningsbilen.",
          "<strong>Varighed.</strong> Fra første dag eller først efter et antal dage, og hvor mange dage i alt.",
          "<strong>Levering.</strong> Om lånebilen bliver bragt ud, eller om den skal hentes på værkstedet."
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 250" role="img" aria-label="Lånebil set fra siden med biltype, indretning, brændstof og træk markeret."><path class="tg-rum" d="M30,170 V115 L72,75 H360 V170 Z"/><path class="tg-profil" d="M40,113 L74,83 H110 V113 Z"/><rect class="tg-hylde" x="150" y="100" width="180" height="4"/><rect class="tg-hylde" x="150" y="130" width="180" height="4"/><rect class="tg-kasse" x="335" y="113" width="10" height="10"/><line class="tg-gulvlinje" x1="360" y1="160" x2="378" y2="160"/><circle class="tg-profil" cx="382" cy="160" r="4"/><circle class="tg-profil" cx="95" cy="175" r="22"/><circle class="tg-profil" cx="295" cy="175" r="22"/><line class="tg-gulvlinje" x1="10" y1="197" x2="390" y2="197"/><g class="tg-call"><line x1="60" y1="125" x2="50" y2="44"/><circle cx="60" cy="125" r="3"/><text class="tg-call__navn" x="10" y="22">Biltype</text><text class="tg-call__under" x="10" y="36">varebil eller personbil</text></g><g class="tg-call"><line x1="240" y1="102" x2="210" y2="44"/><circle cx="240" cy="102" r="3"/><text class="tg-call__navn" x="150" y="22">Indretning</text><text class="tg-call__under" x="150" y="36">reoler, samme lastrum</text></g><g class="tg-call"><line x1="382" y1="160" x2="360" y2="44"/><circle cx="382" cy="160" r="3"/><text class="tg-call__navn" x="300" y="22">Træk</text><text class="tg-call__under" x="300" y="36">som varebilen</text></g><g class="tg-call"><line x1="340" y1="118" x2="330" y2="212"/><circle cx="340" cy="118" r="3"/><text class="tg-call__navn" x="230" y="226">Brændstof eller strøm</text><text class="tg-call__under" x="230" y="240">særskilt post hos Nordania</text></g></svg>`,
          tekst: `Skematisk. De dele af lånebilen, der skal aftales. Selvrisiko, kilometer og antal dage skal også stå i aftalen.`
        }
      },
      {
        overskrift: "Mindre tid på værkstedet",
        tekst: [
          `Mercedes-Benz Mobile Service udfører service, reparationer og softwareopdateringer på firmaets adresse eller ude hos kunden. Ford Pro Service er bygget op om at minimere værkstedstiden. Det kan gøre lånebilen overflødig ved mindre opgaver.`,
          `Hessels Renault Pro+ Erhvervscentre i Aalborg, Århus og Avedøre har altid en erstatningsbil til rådighed og tager varebiler op til 7 tons. Uden bestilt tid får du en diagnose inden for 1 time, og du kan komme til serviceeftersyn inden for 8 timer. Et tilbud på reparationen med fast pris og tid får du inden for 4 timer.`,
          `Volkswagens Express Service klarer mindre opgaver på halvanden time uden tidsbestilling, fx udstødning eller bremser. Ford Transit Erhvervscentrene har udvidede og fleksible åbningstider, og Ford skriver, at de arbejder efter dit skema.`
        ],
        figur: {
          type: "soejler",
          enhed: "timer",
          data: [
            ["Diagnose uden bestilt tid", 1],
            ["Tilbud med fast pris og tid", 4],
            ["Serviceeftersyn uden bestilt tid", 8]
          ],
          note: `Hessels løfter på Renault Pro+ Erhvervscentrene. Kilde: <a href="${HES}" rel="noopener">Hessel: Renault Pro+</a>, set den 7. oktober 2026.`
        },
        efter: [
          `Kilder: <a href="${MB_VAN}" rel="noopener">Mercedes-Benz, Varebilsservice</a>, set den 4. oktober 2026, og <a href="${FORD}" rel="noopener">Ford Pro Service</a> og <a href="${VWPM}" rel="noopener">Volkswagen</a>, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal stå i aftalen",
    spoergsmaal_manchet: "Så er der en bil, der kan bruges i driften.",
    spoergsmaal: [
      "Om der er lånebil ved service, reparation og nedbrud.",
      "Biltype og størrelse på lånebilen.",
      "Om lånebilen skal kunne trække en trailer, og hvor tung traileren er.",
      "Hvem der betaler brændstof og selvrisiko.",
      "Hvor mange kilometer der er med, og hvad ekstra kilometer koster.",
      "Om lånebilen leveres, eller skal hentes.",
      "Hvor mange dage der dækkes."
    ],
    faq: [
      ["Har jeg ret til erstatningsbil, når varebilen er på garantireparation?", "Ikke efter garantien alene. Volkswagens garantibestemmelser udelukker krav om erstatningsbil. Den kan komme fra værkstedet, leasingkontrakten, forsikringen eller producentens vejhjælp."],
      ["Er erstatningsbil med i en leasingaftale?", "Kun hvis den står i kontrakten, skriver Ayvens. Arval skriver, at de stiller en lånebil ved reparation."],
      ["Hvad dækker Mercedes-Benz MobiloVan?", "Hjælp fra en Service24h-tekniker ved nedbrud og omkostninger til bugsering, lånebil, taxa eller hotel. Den gælder i op til 30 år, når bilen serviceres til tiden hos en autoriseret partner."],
      ["Får jeg en lånebil hos Ford?", "Ford Pro Service stiller en erstatningsbil, hvis varebilen ikke bliver færdig samme dag. Efter et nedbrud giver Ford Assistance en lejebil i højst 2 hverdage, når bilen ikke kan repareres samme dag."],
      ["Hvor længe har jeg lånebilen efter et nedbrud?", "Det afhænger af ordningen. Ford Assistance giver højst 2 hverdage og Toyota Vejhjælp højst 3 arbejdsdage. Hos Volkswagen kan du bede om en gratis lånebil, når bilen er bugseret og ikke er køreklar 24 timer efter dit opkald."],
      ["Hvem dækker lånebil ved skade?", "Det går via forsikringen. Tryg og Gjensidige stiller en lånebil, når bilen bliver repareret på deres værksteder. Se <a href=\"/til-varebilen/forsikring/kaskoforsikring-varebil/\">kaskoforsikring til varebil</a>."],
      ["Hvad sker der, når varebilen står på værkstedet i flere dage?", "Hos Mercedes-Benz går vejhjælpens eksperter ind i sagen, hvis værkstedet forventer at bruge mere end tre arbejdsdage, og de stiller en lånebil under reparationen."],
      ["Er lånebilen gratis hos Volkswagen?", "Ved service koster den penge. Volkswagen skriver, at lånebilen ikke koster alverden, og du kan kombinere den med hente-bringe-service. Efter et nedbrud med bugsering er Volkswagen Vejhjælps lånebil gratis."],
      ["Kan lånebilen køres på et almindeligt kørekort?", "Med kørekort B må du køre en varebil med en tilladt totalvægt på højst 3.500 kg. Med trailer gælder særlige grænser, som Færdselsstyrelsen beskriver."]
    ],
    kilder: [
      { navn: "Volkswagen: Garantibestemmelser for erhvervsbiler fra modelår 2020 (sept. 2026)", url: VWGAR, dato: "2026-10-07" },
      { navn: "Ford: Ford Pro Service til erhvervsbiler", url: FORD, dato: "2026-10-07" },
      { navn: "Ford: Vejhjælp (Ford Assistance og Ford Assistance Plus)", url: FORDVH, dato: "2026-10-07" },
      { navn: "Toyota: Tryghed med Toyota (fabriksgaranti og Toyota Relax, erhvervsbiler)", url: TOY, dato: "2026-10-07" },
      { navn: "Toyota: Toyota Vejhjælp", url: TOYVH, dato: "2026-10-07" },
      { navn: "Volkswagen: Vejhjælp og assistance ved ulykke", url: VWVH, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Bilservice og eftersyn (MobiloVan)", url: MB_MAINT, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Service og vejhjælp (MobiloVan)", url: MB_MOB, dato: "2026-10-04" },
      { navn: "Ayvens: Vejhjælp", url: AYV, dato: "2026-10-07" },
      { navn: "Arval: Operationel leasing af firmabil", url: ARV, dato: "2026-10-07" },
      { navn: "Nordania: Forhåndsgodkendelse af service og reparation", url: NOR, dato: "2026-10-07" },
      { navn: "Mercedes-Benz Vans: Varebilsservice", url: MB_VAN, dato: "2026-10-04" },
      { navn: "Mercedes-Benz Vans: Vejhjælp til varebiler", url: MB_ROAD, dato: "2026-10-04" },
      { navn: "Volkswagen: Prismatch og servicefordele", url: VWPM, dato: "2026-10-07" },
      { navn: "Hessel: Renault Pro+ erhvervscenter", url: HES, dato: "2026-10-07" },
      { navn: "Tryg: Varebilforsikring, forsikringsbetingelser nr. 2303", url: TRYG, dato: "2026-10-07" },
      { navn: "Gjensidige: Bilforsikring til virksomhedens køretøjer", url: GJ, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Kørekort til bil", url: FSB, dato: "2026-10-07" },
      { navn: "Færdselsstyrelsen: Kørekort til påhængskøretøj til bil", url: FST, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Volkswagens garanti udelukker krav om erstatningsbil, også selvom en mangel ikke definitivt kan afhjælpes; garantitagers krav efter Volkswagen Vejhjælp eller en sammenlignelig vejhjælpsordning berøres ikke.", VWGAR],
    ["Ford Assistance følger med en ny Ford importeret af NCG Motor Company A/S – Ford i Danmark og gælder frem til første serviceeftersyn, dog maks. 2 år; Ford Assistance Plus kan tilkøbes ved service på et autoriseret Ford-værksted, giver op til 24 måneders europæisk vejhjælp afhængigt af serviceintervallet og gælder Fords person- og varebiler uanset alder; Plus er ikke inkluderet i Ford Økonomi Service.", FORDVH],
    ["Ford Assistance: kan bilen ikke repareres samme dag efter bugsering til et Ford-værksted, bestræber Assistance-centret sig på at arrangere en lejebil af tilsvarende klasse med fri kilometer og ansvarsforsikring, dog max. 2 hverdage; ved hærværk og ulykker er der ikke ret til lånebil, kun bugsering.", FORDVH],
    ["Ford Assistance: lånebil, hotelophold og videre- eller hjemrejse kan ikke kombineres og er underlagt Ford Assistances skøn; bryder bilen ned i udlandet, og reparationen tager mere end 5 hverdage, transporteres bilen til egen forhandler.", FORDVH],
    ["Ford Assistance bugserer til nærmeste Ford-værksted eller ønsket Ford-værksted inden for 50 km; med Ford Assistance Plus kan det ved afstande over 50 km tage op til 3 dage at få bilen transporteret til det valgte værksted.", FORDVH],
    ["Ford, Toyota og Volkswagen har vejhjælp døgnet rundt hele året (Ford: 24 timer i døgnet, 365 dage om året; Toyota: rykker ud døgnet rundt; Volkswagen: 365 dage om året, døgnet rundt).", FORDVH],
    ["Toyota giver 1 års vejhjælp i hele Europa med en ny bil, og den forlænges ved service hos Toyota (gælder ved valg af sundheds- eller sikkerhedstjek).", TOYVH],
    ["Toyota Vejhjælp: udlejningsbil i maks. 3 arbejdsdage og forudsætter, at bilen er bugseret; hotel i op til 4 nætter til maks. 940 kr. pr. person pr. døgn; kan bilen ikke gøres køreklar inden for 5 arbejdsdage efter diagnose, transporteres den til et Toyota-værksted i Danmark.", TOYVH],
    ["Toyota Vejhjælp reparerer på stedet, hvis det er praktisk muligt og billigere end bugsering; ellers fragtes bilen med eller uden anhænger til et autoriseret Toyota-værksted efter eget valg.", TOYVH],
    ["Volkswagen Vejhjælp: er bilen bugseret til en Volkswagen Servicepartner af Volkswagen Vejhjælp, og går der mere end 24 timer fra kontakt til bilen er køreklar, kan man bede om en gratis lånebil. Vejhjælpen er gratis og dækker frem til næste anbefalede serviceeftersyn; er bilen købt et andet sted, skal sidste store eftersyn være lavet hos en autoriseret Volkswagen Servicepartner i Danmark, og anbefalede reparationer skal være udført.", VWVH],
    ["Volkswagen: lånebil kan kombineres med hente-bringe-service, hvor lånebilen bringes derhen, hvor kunden har brug for den, og kombinationen kan inkludere bilvask og indvendig rengøring; Express Service klarer mindre opgaver på halvanden time uden tidsbestilling, fx udstødning eller bremser.", VWPM],
    ["Ford Transit Erhvervscentre kan hente bilen før service eller reparation og aflevere den igen; ekspresservice sætter flere teknikere på bilen, så det hele klares på den halve tid; erhvervscentrene har udvidede og fleksible åbningstider.", FORD],
    ["Toyotas Express Service er det fulde service på den halve tid og til samme pris.", TOY],
    ["Ayvens Assistance kan ringes op 24 timer i døgnet, 365 dage om året, og i udlandet via SOS Rødt Kort; vejhjælpen bugserer bilen, bringer fører, passagerer og bagage til et sikkert sted og hjem igen.", AYV],
    ["Arval: operationel leasing omfatter bl.a. service, forsikring, afgifter og dæk.", ARV],
    ["Nordania: reparationer over 1.500 kr. kræver forhåndsgodkendelse; kun autoriserede mærkeværksteder må reparere eller servicere Nordanias biler; godkendelse kræver værkstedsrekvisition eller booking i Nordania Bil App, kan ikke gives telefonisk, og ansøgninger oprettet efter reparationen afvises som hovedregel.", NOR],
    ["Nordanias værkstedsrekvisition har posterne erstatningsbil i forbindelse med skade, forsikring ved erstatningsbil, selvrisikoafdækning, brændstof og overkørte km, hver med pris ekskl. moms.", NOR],
    ["Tryg Vejhjælp: fragtes varebilen til et værksted tilknyttet Tryg Vejhjælp og repareres der, stiller værkstedet en lånebil så længe reparationen varer; Tryg kan ikke garantere en tilsvarende bil, fx kan det være en personbil; kunden aftaler selv lånebil med værkstedet og betaler leje, hvis reparationen fravælges bagefter (afsnit 5).", TRYG],
    ["Tryg: lånebilen stilles til rådighed ved kørsel op til 100 km pr. døgn, kørsel derudover betales til værkstedet, og brændstof eller strøm betaler kunden selv (afsnit 11.3).", TRYG],
    ["Tryg Nulselvrisiko omfatter udgiften til selvrisikoforsikring på værkstedets lånebil ved reparation på et Tryg Reparationsværksted (afsnit 5.4).", TRYG],
    ["Tryg Leasing (afsnit 5.3): kan købes til varebiler under fire år med leasingperiode på 6-48 måneder; lånebil ved totalskade og tyveri inden for 24 timer fra accept af skaden, efter fire dage ved anmeldelse torsdag eller fredag, leveres ved nærmeste færgeleje for ikke brofaste øer, afleveres senest 14 dage efter kontanterstatning, højst 3.000 km; samme størrelse, fabrikat, model og udstyr garanteres ikke, opgradering betales selv, og Tryg kan yde kontant erstatning i stedet.", TRYG],
    ["Gjensidige: fri lånebil på samarbejdsværksteder, hvis værkstedet har en ledig; Lånebil Plus giver lånebil i op til 30 dage, når man ikke kan få lånebil gennem værkstedet, også ved totalskade og tyveri.", GJ],
    ["Kørekort kategori B giver ret til at køre en personbil eller varebil på max 3.500 kg.", FSB],
    ["Kørekort B: vogntog på i alt 4.250 kg med bil på max 3.500 kg og påhængskøretøj på max 750 kg; med påhængskøretøj over 750 kg må den samlede tilladte totalvægt ikke overstige 3.500 kg; tungere kræver B+ eller BE.", FST],
    ["Hessels Renault Pro+ Erhvervscentre ligger i Aalborg, Århus og Avedøre; de har altid en erstatningsbil til rådighed og håndterer varebiler op til 7 tons; diagnose inden for 1 time uden bestilt tid, tilbud med fast pris og tid inden for 4 timer, serviceeftersyn inden for 8 timer uden bestilt tid.", HES]
  ]
};
