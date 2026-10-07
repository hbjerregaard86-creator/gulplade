// Underside /til-varebilen/salg-af-varebil/afmelding-og-nummerplader/ (07-10-2026)
var OMREG = `https://motorst.dk/erhverv/registrering-og-omregistrering/omregistrering`;
var AFMELD = `https://motorst.dk/erhverv/nummerplader/afmeld-koeretoej-og-aflever-nummerplader`;
var BORGER = `https://motorst.dk/borger/min-foerste-bil/afmelding-salg-eller-eksport`;
var EKSPORT = `https://motorst.dk/erhverv/eksport-af-bil-eller-mc`;
var FORHOLD = `https://motorst.dk/erhverv/leasing/hvad-er-forholdsmaessig-afgift`;
var PERIODE = `https://motorst.dk/erhverv/motorafgifter/periodiske-afgifter`;
var MISTET = `https://motorst.dk/erhverv/nummerplader/mistede-stjaalne-og-beskadigede-nummerplader`;
var PLADER = `https://motorst.dk/erhverv/nummerplader/bestilling-af-nummerplader`;

module.exports = {
  id: "salg-af-varebil/afmelding-og-nummerplader",
  side: {
    slug: "afmelding-og-nummerplader",
    navn: "Afmelding og nummerplader",
    titel: "Afmelding af varebil, plader og ejerskifte",
    kort: `Sådan skriver køberen varebilen om inden 4 hverdage, og sådan afmelder du bilen, afleverer pladerne og får afgiften reguleret.`,
    beskrivelse: `Ejerskifte for 340 kr. inden 4 hverdage, afmelding, plader og afgift tilbage. Se slutsedlen, fristerne og hvad sælger gør, hvis køberen ikke skriver om.`,
    manchet: `Når varebilen sælges, skal køberen omregistrere den inden 4 hverdage. Skal den ikke køre mere, afmeldes den, og pladerne afleveres hos en nummerpladeoperatør. Indtil da betaler sælger afgifter og ansvarsforsikring.`,
    visuel: {
      hero: "salg-af-varebil",
      kort_fortalt: [
        ["Ejerskifte", "4 hverdage", "har køberen til at omregistrere"],
        ["Omregistrering", "340 kr.", "i Motorregistret"],
        ["Ny registreringsattest", "Inden for 10 hverdage", "kommer den med posten"],
        ["Fuldmagt i Motorregistret", "14 dage", "gælder kun én bil"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Ejerskifte eller afmelding",
        tekst: [
          `Når varebilen forlader virksomheden, ender den på en af to måder i Motorregistret. Skal den køre videre på danske plader, skriver køberen den om til sig selv. Det kaldes et ejerskifte eller en omregistrering. Skal den ikke køre mere i Danmark, afmeldes den, og nummerpladerne afleveres.`,
          `Indtil en af delene er sket, står bilen stadig i virksomhedens navn. Sælger betaler derfor afgifter og ansvarsforsikring, også efter at køberen har fået nøglerne. Køberen har 4 hverdage fra købet til at omregistrere eller afmelde bilen.`,
          `Afmelding bruges, når bilen ikke længere skal bruges, når den kun skal bruges i en del af året, og når den sælges til udlandet. Ved eksport skal bilen være afmeldt, før en del af registreringsafgiften kan betales tilbage.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 232" role="img" aria-label="Beslutningstræ. Skal varebilen køre videre på danske nummerplader, skriver køberen den om inden 4 hverdage, og indtil da betaler sælger. Ellers afmeldes bilen, og pladerne afleveres, fx fordi den eksporteres eller skal stå stille."><defs><marker id="pil-afmelding-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-kasse" x="70" y="6" width="260" height="48"/><text x="200" y="26" text-anchor="middle">Skal bilen køre videre</text><text class="tg-fremhaev" x="200" y="44" text-anchor="middle">på danske nummerplader?</text><line class="tg-pil" x1="140" y1="54" x2="104" y2="88" marker-end="url(#pil-afmelding-1)"/><line class="tg-pil" x1="260" y1="54" x2="296" y2="88" marker-end="url(#pil-afmelding-1)"/><text x="110" y="74" text-anchor="end">Ja</text><text x="290" y="74">Nej</text><rect class="tg-modul" x="10" y="92" width="180" height="62"/><text class="tg-modul__tekst" x="100" y="112" text-anchor="middle">EJERSKIFTE</text><text x="100" y="130" text-anchor="middle">køberen skriver bilen</text><text x="100" y="146" text-anchor="middle">om inden 4 hverdage</text><rect class="tg-kasse" x="210" y="92" width="180" height="62"/><text class="tg-fremhaev" x="300" y="112" text-anchor="middle">Afmelding</text><text x="300" y="130" text-anchor="middle">pladerne afleveres hos</text><text x="300" y="146" text-anchor="middle">en nummerpladeoperatør</text><line class="tg-skinne-tynd" x1="100" y1="154" x2="100" y2="180"/><rect class="tg-kasse" x="10" y="180" width="180" height="44"/><text x="100" y="198" text-anchor="middle">Indtil da betaler sælger</text><text x="100" y="214" text-anchor="middle">afgift og forsikring</text><line class="tg-skinne-tynd" x1="254" y1="154" x2="254" y2="180"/><line class="tg-skinne-tynd" x1="346" y1="154" x2="346" y2="180"/><rect class="tg-kasse" x="210" y="180" width="88" height="44"/><text class="tg-fremhaev" x="254" y="198" text-anchor="middle">Eksport</text><text x="254" y="214" text-anchor="middle">godtgørelse</text><rect class="tg-kasse" x="302" y="180" width="88" height="44"/><text class="tg-fremhaev" x="346" y="198" text-anchor="middle">Står stille</text><text x="346" y="214" text-anchor="middle">ingen afgift</text></svg>`,
          tekst: `Skematisk. De to veje ud af Motorregistret. Kilder: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a> og <a href="${BORGER}" rel="noopener">Afmelding, salg eller eksport</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Omregistrering ved ejerskifte",
        tekst: [
          `Køberen kan omregistrere varebilen på tre måder. I Motorregistret koster det 340 kr., og køberen logger på med MitID. Hos en nummerpladeoperatør koster det 380 kr. plus operatørens eget gebyr, som operatørerne selv fastsætter. Appen Ejerskifte koster også 340 kr., men den kan kun bruges ved privat ejerskifte.`,
          `Køberen skal bruge registreringsattesten. Med kontroltallet eller kodedel 1 og 2 fra attesten låser køberen bilen op i Motorregistret, så det kun er den, der har attesten, der kan skrive bilen om. Derfor skal køberen have registreringsattesten med fra sælger.`,
          `En ny registreringsattest kommer med posten inden for 10 hverdage. Opkrævningen af de periodiske afgifter går til den primære bruger med Digital Post kort efter omregistreringen.`
        ],
        tabel: {
          kolonner: ["Hvor", "Pris"],
          raekker: [
            ["Motorregistret (TastSelv med MitID)", "340 kr."],
            ["Appen Ejerskifte, kun privat ejerskifte", "340 kr."],
            ["Nummerpladeoperatør", "380 kr. plus operatørens gebyr"]
          ],
          note: `Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 4. oktober 2026.`
        },
        figur: {
          type: "noegletal",
          data: [
            ["Motorregistret", "340", "kr."],
            ["Nummerpladeoperatør", "380", "kr. + gebyr"],
            ["Ny registreringsattest", "10", "hverdage"],
            ["Fuldmagt gyldig", "14", "dage"]
          ],
          note: `Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Sådan skriver køberen bilen om",
        tekst: [
          `I Motorregistret klarer køberen hele ejerskiftet selv, når registreringsattesten og MitID er klar. Undervejs vælger køberen forsikringsselskab og beder om forsikringen direkte i Motorregistret. Kun i sjældne tilfælde skal køberen taste et forsikringsbevisnummer.`,
          `Skal der også stå andre ejere eller brugere på bilen, fx en medejer, skal de først have givet fuldmagt i Motorregistret. Når registreringen er godkendt, kan den ikke fortrydes eller ændres. En tastefejl betyder, at køberen skal betale for et nyt ejerskifte.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Log på", "Køberen logger på TastSelv med MitID og vælger Motor og Motorregistret."],
            ["Start ejerskiftet", "Under Registrering starter køberen ejerskiftet og skriver registrerings- eller stelnummeret."],
            ["Lås bilen op", "Kontroltallet eller kodedel 1 og 2 fra registreringsattesten låser bilen op."],
            ["Forsikring", "Køberen vælger forsikringsselskab og trykker Anmod om forsikring."],
            ["Godkend og betal", "Køberen godkender og betaler registreringen og printer kvitteringen."]
          ]
        },
        efter: [
          `Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Køretøjer, der skal omregistreres hos en operatør",
        tekst: [
          `Nogle køretøjer kan ikke omregistreres i Motorregistret. De skal omregistreres hos en nummerpladeoperatør, og det koster 380 kr. plus operatørens gebyr. For en virksomhed er det især mandskabsvogne og andre biler med en klausul, der hører til her.`,
          `Hos operatøren skal køberen have registreringsattesten med og vise billedlegitimation. Køberen skal også oplyse et forsikringsselskab, der er online, eller have et forsikringsbevis med. Møder en medarbejder op på virksomhedens vegne, skal medarbejderen have en fuldmagt med.`
        ],
        punkter: [
          `Lastbiler, traktorer, motorredskaber, sættevogne, traktorpåhængsvogne og påhængsredskaber.`,
          `Køretøjer med ønskenummerplader.`,
          `Køretøjer uden nummerplade.`,
          `Køretøjer med klausul, fx mandskabsvogne og taxier. Se <a href="/til-varebilen/ombygning/mandskabsvogn-ombygning/">ombygning til mandskabsvogn</a>.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Køretøj", "Motorregistret", "Nummerpladeoperatør"],
          raekker: [
            ["Almindelig varebil", "ja", "ja"],
            ["Mandskabsvogn med klausul", "nej", "ja"],
            ["Lastbil", "nej", "ja"],
            ["Køretøj med ønskeplader", "nej", "ja"],
            ["Køretøj uden nummerplade", "nej", "ja"]
          ],
          note: `Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Slutsedlen",
        tekst: [
          `På slutsedlen skriver sælger og køber under på handlen med en dato. Den viser, hvornår bilen blev solgt, og hvem der købte den. Motorstyrelsen bruger den, hvis sælger senere skal have bilen afmeldt, fordi køberen ikke har omregistreret den.`,
          `Køberens fødselsdato og kørekortnummer er valgfrie. De andre felter skal stå på slutsedlen, også stelnummeret og mærket eller registreringsnummeret, så det er tydeligt, hvilken bil handlen gælder.`
        ],
        punkter: [
          `Salgsdato.`,
          `Sælgers navn.`,
          `Købers navn og adresse.`,
          `Køretøjets stelnummer og mærke eller registreringsnummer.`,
          `Sælgers og købers underskrifter.`,
          `Købers fødselsdato og kørekortnummer er valgfrie.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Skitse af en slutseddel med salgsdato, sælgers navn, købers navn og adresse, stelnummer eller registreringsnummer og begges underskrifter."><rect class="tg-profil" x="20" y="8" width="250" height="220" rx="4"/><text class="tg-fremhaev" x="34" y="32">Slutseddel</text><text x="34" y="58">Salgsdato</text><line class="tg-skinne-tynd" x1="34" y1="64" x2="256" y2="64"/><text x="34" y="84">Sælgers navn</text><line class="tg-skinne-tynd" x1="34" y1="90" x2="256" y2="90"/><text x="34" y="110">Købers navn og adresse</text><line class="tg-skinne-tynd" x1="34" y1="116" x2="256" y2="116"/><text x="34" y="136">Stelnummer eller reg.nr.</text><line class="tg-skinne-tynd" x1="34" y1="142" x2="256" y2="142"/><line class="tg-gulvlinje" x1="34" y1="196" x2="140" y2="196"/><line class="tg-gulvlinje" x1="156" y1="196" x2="256" y2="196"/><text class="tg-lille" x="34" y="212">SÆLGER</text><text class="tg-lille" x="156" y="212">KØBER</text><g class="tg-call"><line x1="270" y1="40" x2="278" y2="40"/><circle cx="270" cy="40" r="3"/><text class="tg-call__navn" x="282" y="36">Valgfrit</text><text class="tg-call__under" x="282" y="50">fødselsdato og</text><text class="tg-call__under" x="282" y="64">kørekortnummer</text></g><g class="tg-call"><line x1="256" y1="116" x2="278" y2="116"/><circle cx="256" cy="116" r="3"/><text class="tg-call__navn" x="282" y="112">Køber</text><text class="tg-call__under" x="282" y="126">navn og adresse</text></g><g class="tg-call"><line x1="256" y1="196" x2="278" y2="196"/><circle cx="256" cy="196" r="3"/><text class="tg-call__navn" x="282" y="192">Underskrifter</text><text class="tg-call__under" x="282" y="206">sælger og køber</text></g></svg>`,
          tekst: `Skematisk. Det skal stå på slutsedlen. Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Hvis køberen ikke omregistrerer",
        tekst: [
          `Har køberen ikke omregistreret eller afmeldt bilen inden 4 hverdage, kan sælger bede Motorstyrelsen afmelde den. Det sker i TastSelv under Kontakt og Skriv til os. Her vælger sælger Bil og motor, derefter Ejerskifte, nummerplader og registreringsattester og til sidst Manglende ejerskifte (afmelding). Slutsedlen vedhæftes.`,
          `Motorstyrelsen afmelder bilen den dag, henvendelsen modtages, dog tidligst 4 hverdage efter salgsdatoen. Uden slutseddel regnes fristen på 4 hverdage fra den dag, Motorstyrelsen modtager anmodningen. Afmeldingen kommer derfor senere, hvis sælger ikke har en slutseddel at vedhæfte.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 420 200" role="img" aria-label="Tidslinje: køber har 4 hverdage til at omregistrere, derefter kan sælger bede Motorstyrelsen afmelde bilen."><defs><marker id="pil-afmelding-2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="40" y="94" width="240" height="12" rx="2"/><g class="tg-maal"><line x1="20" y1="100" x2="408" y2="100" marker-end="url(#pil-afmelding-2)"/></g><line class="tg-gulvlinje" x1="40" y1="90" x2="40" y2="110"/><text x="40" y="126" text-anchor="middle">0</text><line class="tg-gulvlinje" x1="100" y1="90" x2="100" y2="110"/><text x="100" y="126" text-anchor="middle">1</text><line class="tg-gulvlinje" x1="160" y1="90" x2="160" y2="110"/><text x="160" y="126" text-anchor="middle">2</text><line class="tg-gulvlinje" x1="220" y1="90" x2="220" y2="110"/><text x="220" y="126" text-anchor="middle">3</text><line class="tg-gulvlinje" x1="280" y1="90" x2="280" y2="110"/><text x="280" y="126" text-anchor="middle">4</text><text x="40" y="142" class="tg-lille">HVERDAGE EFTER SALGSDATOEN</text><g class="tg-call"><line x1="40" y1="88" x2="40" y2="58"/><circle cx="40" cy="88" r="3"/><text x="34" y="34" class="tg-call__navn">Salg og slutseddel</text><text x="34" y="48" class="tg-call__under">sælger betaler afgift</text></g><g class="tg-call"><line x1="280" y1="88" x2="280" y2="58"/><circle cx="280" cy="88" r="3"/><text x="410" y="34" class="tg-call__navn" text-anchor="end">Frist for køber</text><text x="410" y="48" class="tg-call__under" text-anchor="end">omregistrer eller afmeld</text></g><g class="tg-call"><line x1="330" y1="106" x2="350" y2="158"/><circle cx="330" cy="106" r="3"/><text x="410" y="170" class="tg-call__navn" text-anchor="end">Sælger kan få bilen afmeldt</text><text x="410" y="184" class="tg-call__under" text-anchor="end">via Motorstyrelsen</text></g></svg>`,
          tekst: `Skematisk. De 4 hverdage efter salgsdatoen. Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Tjek, at bilen er skrevet om",
        tekst: [
          `Sælger kan selv se, om ejerskiftet er sket. I TastSelv vælger sælger Motor og Motorregistret og derefter Administration. Her står virksomhedens køretøjer delt op i Aktuelle og Historiske køretøjer.`,
          `Når bilen er afmeldt, eller virksomheden ikke længere står som ejer, flytter bilen til Historiske. Står den stadig under Aktuelle, når de 4 hverdage er gået, kan sælger bede Motorstyrelsen afmelde den.`,
          `Sælger en flådeansvarlig flere biler på én gang, viser listen, hvilke biler der stadig står i virksomhedens navn og dermed stadig koster afgift og ansvarsforsikring.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 206" role="img" aria-label="To lister i Motorregistret. Den solgte varebil flytter fra listen over aktuelle køretøjer til listen over historiske køretøjer, når den er omregistreret eller afmeldt."><defs><marker id="pil-afmelding-3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><text class="tg-lille" x="10" y="14">MOTORREGISTRET, ADMINISTRATION</text><rect class="tg-profil" x="10" y="26" width="160" height="150" rx="4"/><text class="tg-fremhaev" x="22" y="48">Aktuelle</text><rect class="tg-kasse" x="22" y="60" width="136" height="24"/><text x="32" y="76">Varebil 1</text><rect class="tg-kasse" x="22" y="92" width="136" height="24"/><text x="32" y="108">Varebil 2</text><rect class="tg-skinne-tynd" fill="none" x="22" y="124" width="136" height="24"/><text class="tg-lille" x="32" y="140">SOLGT</text><rect class="tg-profil" x="230" y="26" width="160" height="150" rx="4"/><text class="tg-fremhaev" x="242" y="48">Historiske</text><rect class="tg-modul" x="242" y="60" width="136" height="24"/><text class="tg-modul__tekst" x="252" y="76">VAREBIL 3</text><path class="tg-pil" d="M160,136 C200,136 200,72 238,72" marker-end="url(#pil-afmelding-3)"/><text x="200" y="196" text-anchor="middle">efter omregistrering eller afmelding</text></svg>`,
          tekst: `Skematisk. Den solgte bil flytter fra Aktuelle til Historiske køretøjer. Kilde: <a href="${OMREG}" rel="noopener">Motorstyrelsen: Omregistrering</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afmelding og plader",
        tekst: [
          `Når bilen ikke skal køre mere på danske plader, afmeldes den hos en nummerpladeoperatør. Det er typisk en synshal eller en bilforhandler, der har lov til at udlevere nummerplader på vegne af Motorstyrelsen. Synshallerne har alle typer nummerplader, mens forhandlerne kun har plader til de køretøjer, de selv sælger.`,
          `Operatørerne fastsætter selv gebyret for at afmelde en bil, og det varierer fra operatør til operatør. Forsikringsselskabet får automatisk besked om afmeldingen.`,
          `Samtidig stopper opkrævningen af de løbende afgifter. Har virksomheden betalt afgift for en længere periode, får den penge tilbage.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Aflever pladerne", "Pladerne afleveres hos en nummerpladeoperatør, typisk en synshal eller en forhandler."],
            ["Forsikringen", "Forsikringsselskabet får automatisk besked."],
            ["Afgiften", "Opkrævningen stopper, og den periodiske afgift reguleres til den periode, sælger har været ejer."]
          ]
        },
        efter: [
          `Kilder: <a href="${AFMELD}" rel="noopener">Motorstyrelsen: Afmeld køretøj og aflever nummerplader</a> og <a href="${BORGER}" rel="noopener">Afmelding, salg eller eksport</a>, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Mistede eller stjålne plader",
        tekst: [
          `Er begge plader stjålet, tabt eller inddraget af politiet, afmelder ejeren dem ved at erklære dem bortkomne i Motorregistret under Plader. Er pladerne stjålet, skal tyveriet først meldes til politiet. Kun bilens primære ejer kan erklære pladerne bortkomne.`,
          `Uden adgang til Motorregistret kan ejeren sende blanket 21.064 til Motorstyrelsen, som afmelder pladerne inden for 5 dage. Mangler kun den ene plade, kan bilen afmeldes ved at aflevere blanketten og den plade, der er tilbage, hos en nummerpladeoperatør.`,
          `Skal bilen køre videre, kan ejeren i stedet bestille en erstatningsplade med samme registreringsnummer. Den koster 590 kr., og leveringstiden er ca. 4 uger. Mister ejeren en plade for anden gang inden for 2 år, skal pladerne afmeldes, og bilen skal have et nyt sæt til 1.180 kr. plus operatørens gebyr.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Erstatningsplade", "590", "kr."],
            ["Levering af erstatningsplade", "ca. 4", "uger"],
            ["Afmelding med blanket 21.064", "inden for 5", "dage"],
            ["Nyt sæt nummerplader", "1.180", "kr. + gebyr"]
          ],
          note: `Priserne gælder i oktober 2026. Kilder: <a href="${MISTET}" rel="noopener">Motorstyrelsen: Mistede, stjålne og beskadigede nummerplader</a> og <a href="${PLADER}" rel="noopener">Bestilling af nummerplader</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Afgiften efter salget",
        tekst: [
          `Den periodiske afgift er fx ejerafgift eller vægtafgift. Den opkræves forud for 3, 6 eller 12 måneder ad gangen, afhængigt af køretøjet. Sælges bilen midt i en periode, har sælger derfor betalt for måneder, hvor bilen tilhører køberen.`,
          `Ved omregistrering eller afmelding reguleres afgiften, så den svarer til den periode, virksomheden har været registreret som ejer. Det gælder også, når en ejer eller bruger slettes fra bilen. Et eksempel: Har virksomheden betalt for et halvt år og sælger bilen efter 2 måneder, får den afgiften for de sidste 4 måneder tilbage.`,
          `Når bilen afmeldes, opgør Motorstyrelsen saldoen ud fra de opkrævninger, der er sendt, også dem, der ikke er betalt endnu. Virksomheden kan derfor både få et reguleringsbeløb udbetalt og skulle betale den oprindelige opkrævning.`
        ],
        punkter: [
          `Er afgiften betalt, udbetales det overskydende automatisk til NemKonto, hvis der ikke er gæld til det offentlige.`,
          `Er den ikke betalt, nedsættes det skyldige beløb til ejerperioden.`,
          `Er afgiften opkrævet hos brugeren, går reguleringen til brugeren.`,
          `Alle ejere og brugere hæfter for afgiften. Betaler den primære bruger ikke, opkræves den hos ejeren og eventuelle sekundære ejere og brugere.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 188" role="img" aria-label="Eksempel på en afgift, der er betalt forud for 6 måneder. Bilen sælges efter 2 måneder, og afgiften for de 4 måneder efter salget udbetales til NemKonto, hvis der ikke er gæld til det offentlige."><text class="tg-lille" x="20" y="16">EKSEMPEL: AFGIFT BETALT FORUD FOR 6 MÅNEDER</text><rect class="tg-modul" x="20" y="30" width="120" height="34"/><text class="tg-modul__tekst" x="80" y="51" text-anchor="middle">SÆLGER</text><rect class="tg-kasse" x="140" y="30" width="240" height="34"/><text x="260" y="51" text-anchor="middle">køberen ejer bilen</text><line class="tg-skillevaeg" x1="80" y1="64" x2="80" y2="70"/><line class="tg-skillevaeg" x1="200" y1="64" x2="200" y2="70"/><line class="tg-skillevaeg" x1="260" y1="64" x2="260" y2="70"/><line class="tg-skillevaeg" x1="320" y1="64" x2="320" y2="70"/><text x="50" y="82" text-anchor="middle">1. md.</text><text x="110" y="82" text-anchor="middle">2. md.</text><text x="170" y="82" text-anchor="middle">3. md.</text><text x="230" y="82" text-anchor="middle">4. md.</text><text x="290" y="82" text-anchor="middle">5. md.</text><text x="350" y="82" text-anchor="middle">6. md.</text><line class="tg-skinne" x1="140" y1="24" x2="140" y2="88"/><text x="140" y="102" text-anchor="middle">salgsdato</text><g class="tg-call"><line x1="80" y1="66" x2="80" y2="124"/><circle cx="80" cy="66" r="3"/><text class="tg-call__navn" x="10" y="138">Sælger betaler</text><text class="tg-call__under" x="10" y="152">for 2 måneder</text></g><g class="tg-call"><line x1="260" y1="66" x2="260" y2="124"/><circle cx="260" cy="66" r="3"/><text class="tg-call__navn" x="390" y="138" text-anchor="end">4 måneder tilbage</text><text class="tg-call__under" x="390" y="152" text-anchor="end">til NemKonto</text></g><text x="390" y="180" text-anchor="end">hvis der ikke er gæld til det offentlige</text></svg>`,
          tekst: `Skematisk. Eksemplet viser uden beløb, hvordan den periodiske afgift reguleres, når bilen skifter ejer. Kilder: Motorstyrelsen om <a href="${OMREG}" rel="noopener">omregistrering</a> og <a href="${AFMELD}" rel="noopener">afmelding</a>, set den 4. oktober 2026, og om <a href="${PERIODE}" rel="noopener">periodiske afgifter</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fuldmagt og flere ejere",
        tekst: [
          `En varebil står ofte i virksomhedens navn, mens det er en medarbejder, der kører den til synshallen. Er den, der møder op hos nummerpladeoperatøren, ikke ejer, skal personen have en fuldmagt fra ejeren og vise legitimation. Skal en anden registreres som bruger, kræver det også en fuldmagt fra den nye bruger.`,
          `En fuldmagt bør have navn og cpr-nummer på den, der møder op, og på den, der giver fuldmagten. Den skal også sige, hvad fuldmagten gælder, og have dato og underskrift.`,
          `I Motorregistret giver den nye bruger eller sekundære ejer selv fuldmagt under Registrering og Mine fuldmagter. Fuldmagten gælder kun den ene bil og er gyldig i 14 dage. Den primære ejer kan selv tilføje, rette og slette ejere og brugere, men det regnes som en omregistrering, der skal betales.`
        ]
      },
      {
        overskrift: "Syn ved ejerskifte",
        tekst: [
          `Motorstyrelsen nævner fire situationer, hvor bilen skal synes ved et ejerskifte eller en ny registrering. Den første handler om bilens synshistorik. Er bilen ikke løbende godkendt ved det periodiske syn, skal den synes, når den skifter ejer.`
        ],
        punkter: [
          `Når bilen ikke løbende er godkendt ved periodisk syn.`,
          `Når den har været afmeldt i mere end et år.`,
          `Når den er registreret i udlandet.`,
          `Når fristen for periodisk syn ikke er overholdt.`
        ],
        efter: [
          `Varebiler skal til periodisk syn med faste mellemrum, og hvornår står i <a href="/haandbogen/syn-af-varebil/">syn af varebil</a>. En bil, der har stået afmeldt i mere end et år, skal synes, før den kommer ud at køre igen.`
        ]
      },
      {
        overskrift: "Afmeldt for en periode",
        tekst: [
          `En bil kan også afmeldes, fordi den kun skal bruges i en del af året. Motorstyrelsen nævner sommermånederne som eksempel. For en virksomhed kan det være en ekstra varebil, der kun kører i højsæsonen.`,
          `Mens bilen er afmeldt, opkræves der ikke løbende afgifter. Når den skal bruges igen, skal den have nummerplader fra en nummerpladeoperatør. Et sæt koster 1.180 kr. plus operatørens gebyr, og har bilen været afmeldt i mere end et år, skal den synes først.`,
          `Forsikringen af en bil, der står stille, er beskrevet i <a href="/til-varebilen/forsikring/kaskoforsikring-varebil/">kaskoforsikring til varebil</a> under stilstandsforsikring.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Afmeldingen", "Pladerne afleveres hos en nummerpladeoperatør, og opkrævningen af afgift stopper."],
            ["Mere end et år", "Har bilen været afmeldt i mere end et år, skal den synes, før den registreres igen."],
            ["Ny registrering", "Bilen får nummerplader hos en nummerpladeoperatør for 1.180 kr. pr. sæt plus gebyr."]
          ],
          note: `Kilder: Motorstyrelsen: <a href="${BORGER}" rel="noopener">Afmelding, salg eller eksport</a>, <a href="${OMREG}" rel="noopener">Omregistrering</a> og <a href="${PLADER}" rel="noopener">Bestilling af nummerplader</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Fejl og klausuler",
        tekst: [
          `Et ejerskifte i Motorregistret kan ikke fortrydes efter godkendelse. En fejl kræver et nyt ejerskifte, som skal betales igen. Det gælder også en tastefejl i registreringsnummeret.`,
          `Ved de fleste køretøjer med klausul knytter klausulen sig til brugeren. Derfor skal der ikke tilknyttes en ny klausul, når ejeren skifter hos en nummerpladeoperatør. Motorstyrelsen har særlige regler for hver type klausul, og mandskabsvognen er beskrevet i <a href="/til-varebilen/ombygning/mandskabsvogn-ombygning/">ombygning til mandskabsvogn</a>.`
        ]
      },
      {
        overskrift: "Leaset bil",
        tekst: [
          `En leaset varebil ejes af leasingselskabet. Er bilen indregistreret med forholdsmæssig registreringsafgift, skal den afmeldes, når leasingperioden udløber, skriver Motorstyrelsen.`,
          `Med forholdsmæssig afgift betaler leasingselskabet kun registreringsafgift for den periode, bilen leases ud. Hele beløbet for perioden betales på én gang, før bilen bliver indregistreret. Afgiften er en procentdel af den fulde registreringsafgift plus rente af resten, og procentdelen afhænger af bilens alder.`,
          `Satserne står hos <a href="${FORHOLD}" rel="noopener">Motorstyrelsen</a>. Hvad leasingtageren selv skal gøre, når aftalen slutter, står i <a href="/til-varebilen/salg-af-varebil/aflevering-af-leasingbil/">aflevering af leasingbil</a> og <a href="/til-varebilen/salg-af-varebil/indfri-leasingaftale/">indfri leasingaftale</a>.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 176" role="img" aria-label="Tidslinje for en leasingbil med forholdsmæssig registreringsafgift. Leasingselskabet betaler afgiften for hele perioden på én gang ved indregistreringen, og når perioden udløber, skal bilen afmeldes."><line class="tg-gulvlinje" x1="20" y1="100" x2="380" y2="100"/><rect class="tg-modul" x="60" y="86" width="260" height="28"/><text class="tg-modul__tekst" x="190" y="104" text-anchor="middle">LEASINGPERIODEN</text><g class="tg-call"><line x1="60" y1="86" x2="60" y2="56"/><circle cx="60" cy="86" r="3"/><text class="tg-call__navn" x="10" y="20">Indregistrering</text><text class="tg-call__under" x="10" y="34">afgiften for perioden</text><text class="tg-call__under" x="10" y="48">betales på én gang</text></g><g class="tg-call"><line x1="320" y1="86" x2="320" y2="56"/><circle cx="320" cy="86" r="3"/><text class="tg-call__navn" x="390" y="34" text-anchor="end">Udløb</text><text class="tg-call__under" x="390" y="48" text-anchor="end">bilen skal afmeldes</text></g><text class="tg-lille" x="190" y="140" text-anchor="middle">FORHOLDSMÆSSIG REGISTRERINGSAFGIFT</text><text x="190" y="160" text-anchor="middle">leasingselskabet betaler for perioden</text></svg>`,
          tekst: `Skematisk. Forholdsmæssig registreringsafgift på en leasingbil. Kilde: <a href="${FORHOLD}" rel="noopener">Motorstyrelsen: Hvad er forholdsmæssig afgift?</a>, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Salg til udlandet",
        tekst: [
          `Sælges bilen til en udenlandsk køber, kan en del af registreringsafgiften betales tilbage som eksportgodtgørelse, når bilen har forladt Danmark og er afmeldt. Bilen skal først til udvidet registreringssyn, som er et registreringssyn og et toldsyn.`,
          `Motorstyrelsen tager et gebyr på 2.250 kr. for værdifastsættelsen. Udførslen skal dokumenteres senest 3 måneder efter anmodningen, og udbetalingen sker ca. 9 uger efter, at Motorstyrelsen har modtaget fyldestgørende dokumentation.`,
          `Beregningen står hos Motorstyrelsen, og hele forløbet er beskrevet i <a href="/til-varebilen/salg-af-varebil/eksport-af-varebil/">eksport af varebil</a>.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Gebyr for værdifastsættelse", "2.250", "kr."],
            ["Udførslen dokumenteret senest", 3, "måneder efter anmodningen"],
            ["Udbetaling", "ca. 9", "uger efter fyldestgørende dokumentation"]
          ],
          note: `Bilen skal til udvidet registreringssyn. Beregningen af eksportgodtgørelsen står hos <a href="${EKSPORT}" rel="noopener">Motorstyrelsen</a>, set den 4. oktober 2026.`
        }
      }
    ],
    spoergsmaal_titel: "Det skal køber og sælger aftale",
    spoergsmaal_manchet: "Så sker ejerskiftet til tiden.",
    spoergsmaal: [
      "Salgsdato og en underskrevet slutseddel.",
      "Hvem der omregistrerer, og om det sker i Motorregistret eller hos en nummerpladeoperatør.",
      "Om bilen skal afmeldes og pladerne afleveres, før den overdrages.",
      "Om bilen skal synes før ejerskiftet.",
      "Om der er klausul på bilen, fx som mandskabsvogn.",
      "Hvem der møder op hos nummerpladeoperatøren, og om personen skal have en fuldmagt med.",
      "Om begge nummerplader er der, eller om en plade skal meldes bortkommet."
    ],
    faq: [
      ["Hvor lang tid har køberen til at omregistrere en varebil?", "4 hverdage fra købet. Sker det ikke, kan sælger bede Motorstyrelsen afmelde bilen."],
      ["Hvad koster ejerskifte?", "340 kr. i Motorregistret og 380 kr. plus gebyr hos en nummerpladeoperatør (oktober 2026)."],
      ["Hvor afleverer man nummerplader?", "Hos en nummerpladeoperatør, typisk en synshal eller en forhandler. Operatøren fastsætter selv gebyret for afmelding."],
      ["Får man afgift tilbage, når bilen afmeldes?", "Ja. Den periodiske afgift reguleres til ejerperioden, og et overskydende beløb udbetales til NemKonto, hvis der ikke er gæld til det offentlige."],
      ["Kan en mandskabsvogn omregistreres i Motorregistret?", "Nej. Køretøjer med klausul skal omregistreres hos en nummerpladeoperatør."],
      ["Skal varebilen synes ved ejerskifte?", "Kun hvis den ikke løbende er godkendt ved periodisk syn, har været afmeldt i over et år, er registreret i udlandet eller ikke har overholdt fristen for periodisk syn."],
      ["Kan man fortryde et ejerskifte i Motorregistret?", "Nej. Når registreringen er godkendt, kan den ikke ændres. En fejl kræver et nyt ejerskifte, der skal betales igen."],
      ["Hvordan ser sælger, at bilen er omregistreret?", "Sælger kan se det i Motorregistret under Administration. Bilen flytter fra Aktuelle til Historiske køretøjer."],
      ["Hvad gør man, hvis nummerpladerne er stjålet?", "Tyveriet meldes til politiet, og derefter erklærer bilens primære ejer pladerne bortkomne i Motorregistret. Så bliver pladerne afmeldt."],
      ["Hvad koster en ny nummerplade, hvis den ene er væk?", "En erstatningsplade med samme registreringsnummer koster 590 kr., og leveringstiden er ca. 4 uger (oktober 2026)."]
    ],
    kilder: [
      { navn: "Motorstyrelsen: Omregistrering", url: OMREG, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Afmeld køretøj og aflever nummerplader", url: AFMELD, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Afmelding, salg eller eksport", url: BORGER, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Eksport af bil eller MC", url: EKSPORT, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Hvad er forholdsmæssig afgift?", url: FORHOLD, dato: "2026-10-04" },
      { navn: "Motorstyrelsen: Periodiske afgifter", url: PERIODE, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Mistede, stjålne og beskadigede nummerplader", url: MISTET, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Bestilling af nummerplader", url: PLADER, dato: "2026-10-07" }
    ]
  },
  nye_fakta: [
    ["Motorstyrelsen: i Motorregistret vælger køberen forsikringsselskab og trykker Anmod om forsikring; i sjældne tilfælde skal der indtastes et forsikringsbevisnummer.", OMREG],
    ["Motorstyrelsen: opkrævningen af periodiske afgifter sendes til den primære bruger med Digital Post kort efter omregistreringen.", OMREG],
    ["Motorstyrelsen: andre brugere eller ejere, der skal tilknyttes ved omregistreringen, skal have givet fuldmagt; en ny primær bruger eller sekundær ejer eller bruger giver fuldmagt i Motorregistret under Registrering og Mine fuldmagter.", OMREG],
    ["Motorstyrelsen: trinene i Motorregistret er at logge på TastSelv med MitID, vælge Motor og Motorregistret, starte ejer- og brugerskiftet under Registrering, skrive registrerings- eller stelnummer, låse op med kontroltal eller kodedel 1 og 2, vælge forsikringsselskab, godkende, betale og printe kvitteringen.", OMREG],
    ["Motorstyrelsen: køretøjer med klausul, der skal omregistreres hos en nummerpladeoperatør, er fx mandskabsvogne og taxier.", OMREG],
    ["Motorstyrelsen: hos en nummerpladeoperatør skal køberen medbringe registreringsattest, oplysning om et forsikringsselskab, der er online, eller et forsikringsbevis, billedlegitimation og fuldmagt, hvis man kommer på vegne af en anden.", OMREG],
    ["Motorstyrelsen: skal en anden person registreres som bruger, skal man også have en fuldmagt med fra den nye bruger; en fuldmagt bør indeholde navn og cpr-nummer på den, der møder op, og på den, der giver fuldmagten, hvad der gives fuldmagt til, samt dato og underskrift.", OMREG],
    ["Motorstyrelsen: i Motorregistret under Administration kan man se sine Aktuelle og Historiske køretøjer; når et køretøj er afmeldt, eller man ikke længere står som ejer, står det under Historiske.", OMREG],
    ["Motorstyrelsen: en nummerpladeoperatør er typisk en synshal eller forhandler, som har lov til at udlevere nummerplader på vegne af Motorstyrelsen; synshaller har alle typer nummerplader på lager, bilforhandlere kun til de typer køretøjer, de sælger.", BORGER],
    ["Motorstyrelsen: man kan fx afmelde bilen, hvis man kun bruger den i en begrænset periode, fx i sommermånederne.", BORGER],
    ["Motorstyrelsen: når køretøjet afmeldes, stopper opkrævningen af de løbende afgifter, og man får penge tilbage, hvis man har betalt afgift for en længere periode.", AFMELD],
    ["Motorstyrelsen: den periodiske afgift opkræves forud, og perioden er 3, 6 eller 12 måneder afhængigt af køretøjet.", PERIODE],
    ["Motorstyrelsen: reguleringen af den periodiske afgift ved omregistrering eller afmelding gælder også, når en ejer eller bruger slettes.", PERIODE],
    ["Motorstyrelsen: ved afmelding opgøres saldoen på baggrund af de opkrævninger, der er sendt ud, også selvom de ikke er betalt, så man kan både få reguleringsbeløbet udbetalt og skulle betale den oprindelige opkrævning.", PERIODE],
    ["Motorstyrelsen: samtlige ejere og brugere hæfter for den periodiske afgift; betaler den primære bruger ikke, opkræves afgiften hos ejeren og eventuelle sekundære ejere og brugere.", PERIODE],
    ["Motorstyrelsen: er begge nummerplader tabt, inddraget af politiet eller stjålet, afmeldes de ved at erklære dem bortkomne i Motorregistret under Plader; stjålne plader meldes først til politiet; kun køretøjets primære ejer kan erklære pladerne bortkomne.", MISTET],
    ["Motorstyrelsen: uden adgang til Motorregistret kan man sende blanket 21.064, og Motorstyrelsen afmelder pladerne inden for 5 dage.", MISTET],
    ["Motorstyrelsen: mangler én nummerplade, kan man bestille en erstatningsplade med samme registreringsnummer eller afmelde køretøjet ved at aflevere blanket 21.064 sammen med nummerpladen hos en nummerpladeoperatør.", MISTET],
    ["Motorstyrelsen: en erstatningsplade koster 590 kr., og leveringstiden er ca. 4 uger; mister man en nummerplade for 2. gang inden for 2 år, skal pladerne afmeldes, og der skal købes et nyt sæt.", MISTET],
    ["Motorstyrelsen: et sæt nummerplader koster 1.180 kr. plus gebyr hos nummerpladeoperatøren.", PLADER],
    ["Motorstyrelsen: forholdsmæssig registreringsafgift betales for den periode, køretøjet leases ud; det samlede beløb betales på én gang af leasingselskabet før indregistreringen; afgiften er en procentdel af den fulde registreringsafgift plus rente af restafgiften, og procentdelen afhænger af køretøjets alder.", FORHOLD],
    ["Motorstyrelsen: det udvidede registreringssyn består af registreringssyn og toldsyn.", BORGER]
  ]
};
