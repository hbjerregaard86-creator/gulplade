// Tekster og kilder til /groen-omstilling/. Gennemgået hos myndighederne
// 02-10-2026. Afgiftssatser skrives ikke ind (de reguleres) - kun mekanismen
// og datoerne. Bøder er de beløb, myndighederne selv oplyser.
module.exports = {
  dato: "2. oktober 2026",
  manchet: "Fem byer har miljøzoner for diesel, kommunerne må nu oprette nulemissionszoner, og EU strammer kravene til nye varebiler. Her er reglerne, som myndighederne beskriver dem — og en beregner, der viser, hvad skiftet fra diesel til el koster ved jeres kørsel.",
  priser: {
    // EU-Kommissionens Weekly Oil Bulletin, priser med afgifter, Danmark 28-09-2026:
    // diesel 2.541,74 EUR pr. 1.000 l inkl. afgifter og moms. Omregnet med
    // Nationalbankens centralkurs 7,46038 og ekskl. 25 % moms = 15,17 kr./l.
    diesel: { v: 15.17, hj: 'Gennemsnit 28.09.2026' },
    // Danmarks Statistik ENERGI2, erhverv under 20 MWh, pris inkl. faktiske
    // afgifter (niveau 2, ekskl. moms), 1. halvår 2026: 1,3345 kr./kWh (2. halvår 2025: 1,4245).
    el: { v: 1.33, hj: 'Erhverv, 1. halvår 2026' },
    // Leasingselskabernes erfaring (oplyst af brugeren 02-10-2026): ca. 30 % udeladning til ca. 3 kr./kWh.
    ude: { v: 30, hj: 'Leasingselskabernes erfaring', pris: 3, prisHj: 'Typisk pris på offentlige ladere' },
    // clever.dk/erhverv/.../clever-one-business-van/, hentet 02-10-2026: 999 kr./md. + evt. energitillæg (Premium 1.099).
    clever: { v: 999, hj: 'Standard, ekskl. moms. Premium: 1.099 kr.' },
    note: 'Dieselpris: EU-Kommissionens <a href="https://energy.ec.europa.eu/data-and-analysis/weekly-oil-bulletin_en" rel="noopener" target="_blank">Weekly Oil Bulletin</a>, dansk gennemsnit 28.09.2026, omregnet til kr. ekskl. moms. Elpris: Danmarks Statistik, <a href="https://www.statistikbanken.dk/ENERGI2" rel="noopener" target="_blank">ENERGI2</a> — erhverv under 20 MWh, inkl. faktiske afgifter, ekskl. moms; offentlig lynladning koster typisk mere. Tillægget til WLTP-forbruget er vores antagelse og lægges på begge biler. Udeladning: leasingselskaberne oplyser, at varebilerne lader ude omkring 30 % af tiden til ca. 3 kr./kWh. Clever One Business Van koster ifølge <a href="https://clever.dk/erhverv/ladeloesninger/opladning-til-medarbejdere/clever-one-business-van/" rel="noopener" target="_blank">Clever</a> 999 kr./md. ekskl. moms plus et eventuelt energitillæg (Premium 1.099 kr.) og dækker opladning hjemme og på Clevers netværk; priser hentet 2. oktober 2026. Ladeboksen er et engangsbeløb — sæt 0, hvis I allerede har en. Ret alle tal til jeres egne.'
  },
  regler: [
    {
      status: "Gælder nu",
      h: "Miljøzoner: krav til dieselvarebiler",
      p: [
        "København, Frederiksberg, Aarhus, Odense og Aalborg har miljøzoner. En dieselvarebil op til 3,5 tons skal være mindst Euronorm 5 eller have et partikelfilter, der er registreret i Motorregistret. Varebiler, der er indregistreret første gang 1. september 2016 eller senere, opfylder kravet. Benzin- og elvarebiler er ikke omfattet.",
        "Zonerne kontrolleres med kameraer, der læser nummerpladen. Bøden er <strong>1.500 kr.</strong> for en varebil. Siden 1. januar 2025 tæller flere overtrædelser med samme bil i samme zone inden for 7 dage som én."
      ],
      link: ["Miljøzoner og varebiler", "/haandbogen/miljoezoner-og-varebiler/"],
      kilder: [["Miljøzoner.dk: regler for varebiler", "https://www.miljoezoner.dk/regler-og-koretojer/regler-for-varebiler/"], ["Lov nr. 1468 af 10.12.2024", "https://www.retsinformation.dk/eli/lta/2024/1468"]]
    },
    {
      status: "Loven gælder · ingen zoner endnu",
      h: "Nulemissionszoner: kun el og brint",
      p: [
        "Siden 1. januar 2025 har det været lov, at kommunerne <em>må</em> oprette en nulemissionszone — højst én hver. Ingen kommune har endnu en zone, der gælder. Loven giver muligheden; zonerne kommer først, når en kommune vedtager en.",
        "Er zonen for <em>al trafik</em>, må kun varebiler på ren el eller brint køre ind. Er den kun for persontrafik, rammer den ikke varebiler i erhverv.",
        "Kommunen skal offentliggøre zonen mindst 12 måneder, før den gælder for erhvervskøretøjer — så der er mindst et år til at skifte bil. Kommunen kan give tidsbegrænset dispensation, hvis en opgave ikke kan løses med en elbil.",
        "Politiet kontrollerer zonerne, ikke kameraer. Bødens størrelse står ikke i selve loven; i lovforslaget skriver ministeriet, at den forventes at blive <strong>2.500 kr.</strong> for en varebil."
      ],
      link: ["Nulemissionszoner for varebiler", "/haandbogen/nulemissionszoner/"],
      kilder: [["Lov nr. 1468 af 10.12.2024", "https://www.retsinformation.dk/eli/lta/2024/1468"], ["Bekendtgørelse nr. 493 af 15.05.2025", "https://www.retsinformation.dk/eli/lta/2025/493"], ["L 37 som fremsat (bødeniveau)", "https://folketingstidende.dk/samling/20241/lovforslag/L37/20241_L37_som_fremsat.pdf"]]
    },
    {
      status: "Under behandling",
      h: "Den første zone: Indre Vesterbro",
      p: [
        "Københavns Kommune arbejder på en nulemissionszone for al trafik på Indre Vesterbro. Kommunens plan fra januar 2026 var, at zonen skulle gælde private biler fra begyndelsen af 2028 og erhvervskøretøjer fra midten af 2029.",
        "I september 2026 vedtog kommunens udvalg en mindre zone end foreslået. Den skal stadig godkendes af Miljøstyrelsen og Borgerrepræsentationen, før den er endelig."
      ],
      kilder: [["Københavns Kommune, svar af 28.01.2026", "https://www.kk.dk/sites/default/files/2026-01/28.01.26%20-%20svar%20til%20Signe%20B%C3%B8gevald%20Nielsen%20%28I%29%20om%20Nulemissionszone%20p%C3%A5%20Vesterbro.pdf"], ["TV 2 Kosmopol", "https://www.tv2kosmopol.dk/koebenhavn/skrumpet-benzinfri-bydel-vedtaget-i-kobenhavn-f9449"]]
    },
    {
      status: "Vedtaget i EU",
      h: "Nye varebiler: −50 % CO₂ i 2030, 0 fra 2035",
      p: [
        "EU's CO₂-krav til producenterne betyder, at nye varebiler i gennemsnit skal udlede 50 % mindre i 2030 og intet fra 2035. Kravet rammer producenternes salg, ikke de biler, der allerede kører.",
        "Kommissionen foreslog i december 2025 at lempe målene til −40 % og −90 %. Det er et forslag, ikke vedtaget."
      ],
      kilder: [["Europa-Kommissionen: CO₂-krav til biler og varebiler", "https://climate.ec.europa.eu/areas-action/transport-decarbonisation/road-transport/cars-and-vans_en"]]
    },
    {
      status: "Indfases",
      h: "Registrerings- og ejerafgift på elvarebiler",
      p: [
        "Elvarebiler betaler en stigende andel af den fulde registreringsafgift, år for år, med et fradrag, der falder. Med en lov fra december 2025 blev hele indfasningen skubbet et år, så den nu slutter i 2036.",
        "Den grønne ejerafgift følger CO₂-udledningen, og elvarebilerne ligger i bunden. Beløbet pr. model står på modelsiderne og i beregneren herunder."
      ],
      link: ["Grøn ejerafgift på varebil", "/haandbogen/groen-ejerafgift-paa-varebil/"],
      kilder: [["L 79 (2025-26), vedtaget 16.12.2025", "https://www.retsinformation.dk/eli/ft/202513LA0079/dan/pdf"]]
    },
    {
      status: "Gælder ikke varebiler",
      h: "Kilometerafgift og tilskud",
      p: [
        "Den kilometerbaserede vejafgift gælder lastbiler — ikke varebiler op til 3,5 tons.",
        "Vejdirektoratets pulje til grøn omstilling i 2026 støttede kun nulemissionslastbiler og lukkede 30. september 2026. Vi har ikke fundet en statslig pulje til elvarebiler eller ladestandere til virksomheder i 2026."
      ],
      kilder: [["Skatteministeriet: aftale om kilometerbaseret vejafgift", "https://skm.dk/media/qgsjpbhi/aftaletekst-om-kilometerbaseret-vejafgift.pdf"], ["Virk.dk: pulje til grøn omstilling af tung vejtransport", "https://www.virk.dk/myndigheder/stat/VD/selvbetjening/pulje-til-gron-omstilling-af-tung-vejtransport/"]]
    }
  ],
  links: [
    ["Ladetidsberegneren", "/groen-omstilling/ladetid/", "hvad elvarebilen koster medarbejderen i tid"],
    ["Elvarebiler til erhvervsleasing", "/bedste-tilbud/el-varebil/", "alle elvarebiler sorteret efter pris"],
    ["Elvarebil med længst rækkevidde", "/bedste-tilbud/elvarebil-med-lang-raekkevidde/", null],
    ["Elvarebil med træk", "/bedste-tilbud/elvarebil-med-traek/", null],
    ["Elvarebil i praksis", "/haandbogen/elvarebil-i-praksis/", "afgiften, rækkevidden og lasten"],
    ["Få medarbejderne til at skifte til elvarebil", "/haandbogen/faa-medarbejdere-til-at-skifte-til-elvarebil/", "ladeboks, strøm, arbejdsmiljø og løntillæg"],
    ["Nulemissionszoner for varebiler", "/haandbogen/nulemissionszoner/", "loven, zonerne og bøden"],
    ["Miljøzoner og varebiler", "/haandbogen/miljoezoner-og-varebiler/", "kravene til diesel"],
    ["Sammenlign alle elvarebiler", "/elvarebiler/", "batteri, rækkevidde og opladning"]
  ],
  faq: [
    ["Må min dieselvarebil køre i miljøzonen?",
     "Ja, hvis den er indregistreret første gang 1. september 2016 eller senere, eller hvis den er mindst Euronorm 5 eller har et partikelfilter registreret i Motorregistret. Ellers er bøden 1.500 kr."],
    ["Hvad er en nulemissionszone?",
     "Et område i en by, hvor kun el- og brintbiler må køre. Kommunerne har haft lov til at oprette dem siden 1. januar 2025, men ingen zone gælder endnu. En zone for al trafik omfatter også varebiler, og den skal være offentliggjort mindst 12 måneder, før den gælder for erhvervskøretøjer."],
    ["Hvornår kommer den første nulemissionszone?",
     "Københavns Kommune arbejder på en zone på Indre Vesterbro. Planen fra januar 2026 var erhvervskøretøjer fra midten af 2029. Zonen skal stadig godkendes af Miljøstyrelsen og Borgerrepræsentationen."],
    ["Hvad er bøden for at køre i en nulemissionszone?",
     "Bøden står ikke i selve loven. I lovforslaget skriver ministeriet, at den forventes at blive 2.500 kr. for en varebil. Domstolene kan fastsætte en anden bøde."],
    ["Er det billigere at lease en elvarebil end en diesel?",
     "Det afhænger af modellen og jeres kørsel. Leasingydelsen er ofte lidt højere på el, mens strøm og grøn ejerafgift er lavere. Beregneren på siden regner det ud med de aktuelle tilbud og jeres egne tal."],
    ["Er der tilskud til elvarebiler?",
     "Vi har ikke fundet en statslig pulje til elvarebiler eller ladestandere til virksomheder i 2026. Vejdirektoratets pulje gjaldt kun lastbiler og lukkede 30. september 2026."]
  ]
};
