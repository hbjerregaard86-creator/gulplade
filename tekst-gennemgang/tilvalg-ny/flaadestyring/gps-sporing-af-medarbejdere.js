// Underside /til-varebilen/flaadestyring/gps-sporing-af-medarbejdere/ (07-10-2026)
var DT = `https://cdn.datatilsynet.dk/datatilsynet/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf`;
var DTA = `https://cdn.datatilsynet.dk/datatilsynet/Media/0/8/Vejledning%20om%20databeskyttelse%20i%20forbindelse%20med%20ans%C3%A6ttelsesforhold.pdf`;
var DTW = `https://www.datatilsynet.dk/regler-og-vejledning/databeskyttelse-i-forbindelse-med-ansaettelsesforhold`;
var DTB = `https://www.datatilsynet.dk/regler-og-vejledning/forbundne-biler-og-datasikkerhed`;
var DTF = `https://www.datatilsynet.dk/afgoerelser/generelt-om-tilsyn/saerlige-fokusomraader-for-datatilsynets-tilsynsaktiviteter-i-2026`;
var DALO = `https://www.3f.dk/-/media/files/artikler/dit-arbejdsliv/aftaleomkontrolforanstaltninger.pdf`;
var GPST = `https://gps-tracker.dk/priser/`;
var GSM = `https://gsmteknik.dk/shop/98-gps-flaadestyring-koerebog/1635-elektronisk-korebog/`;
var MST = `https://motorst.dk/borger/gule-plader-og-papegoejeplader/regler-for-gule-plader`;

function a(url, navn) { return `<a href="` + url + `" rel="noopener">` + navn + `</a>`; }

module.exports = {
  id: "flaadestyring/gps-sporing-af-medarbejdere",
  side: {
    slug: "gps-sporing-af-medarbejdere",
    navn: "GPS-sporing af medarbejdere",
    titel: "GPS-sporing af medarbejdere: Datatilsynets regler",
    kort: `Datatilsynets regler for GPS i firmabiler: formål, hjemmel, oplysningspligt, privat kørsel, varsel efter DA og LO's aftale og sletning af data.`,
    beskrivelse: `GPS i firmabil og varebil: Datatilsynets krav til formål, hjemmel og information, 6 ugers varsel efter DA og LO's aftale, privat kørsel og sletning.`,
    manchet: `GPS i firmabilen er en kontrolforanstaltning, og Datatilsynet har skrevet, hvad der gælder. Her kan du se kravene til formål, hjemmel og information, varslet i DA og LO's aftale om kontrolforanstaltninger og reglerne for privat kørsel, indsigt og sletning. Siden gengiver det, Datatilsynet og aftaleparterne selv skriver.`,
    visuel: {
      hero: "flaadestyring",
      kort_fortalt: [
        ["Formål", "Sagligt", "fx ruteplanlægning eller transport af varer"],
        ["Information", "Senest ved start", "om formål, omfang og brug af data"],
        ["Privat kørsel", "GPS kan slukkes", "af den ansatte ved privat kørsel"],
        ["Varsel efter DA og LO", "6 uger", "før en ny kontrolforanstaltning"]
      ],
      toc: true,
      stribe: { pr_stoerrelse: true }
    },
    afsnit: [
      {
        overskrift: "Fire krav fra Datatilsynet",
        tekst: [
          `Når en arbejdsgiver sætter GPS i firmabilerne, behandler virksomheden oplysninger om de ansatte, der kører bilerne. Positionen viser ikke kun, hvor bilen er, men også hvor medarbejderen er. Derfor gælder databeskyttelsesreglerne.`,
          `Datatilsynet har et afsnit om GPS-overvågning af køretøjer i vejledningen om kontrol af medarbejdere. Afsnittet er kort, og kravene kan samles i fire punkter.`
        ],
        punkter: [
          `<strong>Sagligt formål.</strong> Arbejdsgiveren kan have en berettiget interesse i at lokalisere bilerne i arbejdstiden.`,
          `<strong>Ingen nye formål.</strong> Data må ikke viderebehandles på en måde, der er uforenelig med det oprindelige formål, fx ved at overvåge chaufførens adfærd eller opholdssted.`,
          `<strong>Slukning ved privat brug.</strong> Må bilen bruges privat, skal den ansatte kunne slukke GPS-overvågningen, når bilen bruges i privat øjemed.`,
          `<strong>Information på forhånd.</strong> De ansatte skal senest ved etableringen have information om formålet, omfanget og brugen af oplysningerne, jf. artikel 13 i databeskyttelsesforordningen.`
        ],
        punkt_ikon: "trin"
      },
      {
        overskrift: "Formål, Datatilsynet nævner",
        tekst: [
          `Formålet er det, hele vurderingen hænger på. Datatilsynet nævner planlægning og optimering af ruter, overvågning af transport af personer eller varer og hensynet til de ansattes sikkerhed. En tømrervirksomhed, der vil sende den nærmeste bil til en akut opgave, har et formål af den slags.`,
          `Formålet sætter også grænsen for, hvad data senere må bruges til. Er GPS'en sat op til ruteplanlægning, må positionerne ikke bagefter bruges til at følge chaufførens adfærd eller opholdssted.`
        ],
        tabel: {
          kolonner: ["Brug af GPS-data", "Datatilsynet"],
          raekker: [
            ["Planlægge og optimere ruter", "Nævnt som berettiget interesse"],
            ["Overvåge transport af personer eller varer", "Nævnt som berettiget interesse"],
            ["De ansattes sikkerhed", "Kan efter omstændighederne begrunde overvågning"],
            ["Overvåge chaufførens adfærd eller opholdssted", "Uforenelig viderebehandling, når data er indsamlet til andet formål"],
            ["Bil, der må bruges privat", "Den ansatte skal kunne slukke GPS'en"]
          ],
          note: `Kilde: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")} (november 2023), afsnittet om GPS-overvågning af køretøjer, set den 4. oktober 2026.`,
          visning: "kort"
        }
      },
      {
        overskrift: "Kontakten til privat kørsel",
        tekst: [
          `Må bilen bruges privat, skal medarbejderen kunne slukke GPS-overvågningen, når bilen bruges i privat øjemed, skriver Datatilsynet. I mange GPS-kørebøger sidder kontakten som en knap på instrumentbrættet.`,
          `Hos GSM Teknik sættes knappen fast med dobbeltklæbende tape. Hos GPS-Tracker.dk kræver knappen udstyret LogPRO Switch og montering, som købes ekstra til abonnementet.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 220" role="img" aria-label="GPS-tracker med kontakt: i erhverv sendes positionen, i privat er GPS-overvågningen slukket"><defs><marker id="pil-gps-1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><line x1="200" y1="10" x2="200" y2="210" class="tg-skinne-tynd"/><rect x="30" y="20" width="80" height="28" class="tg-kasse"/><text x="70" y="38" text-anchor="middle">Platform</text><rect x="30" y="80" width="80" height="50" class="tg-kasse"/><text x="70" y="109" text-anchor="middle">Tracker</text><g class="tg-maal"><line x1="70" y1="80" x2="70" y2="50" marker-end="url(#pil-gps-1)"/></g><rect x="50" y="150" width="40" height="18" rx="9" class="tg-profil"/><circle cx="81" cy="159" r="7" class="tg-modul"/><text x="70" y="188" text-anchor="middle" class="tg-fremhaev">Erhverv</text><text x="70" y="203" text-anchor="middle">position sendes</text><rect x="250" y="20" width="80" height="28" class="tg-kasse"/><text x="290" y="38" text-anchor="middle">Platform</text><rect x="250" y="80" width="80" height="50" class="tg-kasse"/><text x="290" y="109" text-anchor="middle">Tracker</text><line x1="290" y1="80" x2="290" y2="50" class="tg-skinne-tynd"/><rect x="270" y="150" width="40" height="18" rx="9" class="tg-profil"/><circle cx="279" cy="159" r="7" class="tg-modul"/><text x="290" y="188" text-anchor="middle" class="tg-fremhaev">Privat</text><text x="290" y="203" text-anchor="middle">GPS slukket</text></svg>`,
          tekst: `Skematisk. GPS-tracker med kontakt til erhverv og privat. Kilder: ${a(DT, "Datatilsynet")} og ${a(GSM, "GSM Teknik")}, set den 4. oktober 2026, og ${a(GPST, "GPS-Tracker.dk")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Privat kørsel og gule plader",
        tekst: [
          `Datatilsynets krav om slukning gælder, når privat brug er tilladt. En varebil på gule plader må kun køre privat med <a href="/haandbogen/dagsbevis-varebil/">dagsbevis</a> eller som <a href="/haandbogen/papegoejeplader/">papegøjeplade-bil</a>. Hvornår bilen må køre hjem, står i <a href="/haandbogen/tage-varebilen-med-hjem/">tage varebilen med hjem</a>.`,
          `For mandskabsvogne kan GPS-data også være virksomhedens egen dokumentation. Motorstyrelsen skriver, at GPS-oplysninger om den kørte rute kan dokumentere, at kørslen ligger inden for reglerne, hvis en mandskabsvogn ser ud til at blive brugt forkert.`
        ],
        efter: [
          `Kilde: ${a(MST, "Motorstyrelsen: Regler for gule plader")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Hjemmel: aftale eller interesseafvejning",
        tekst: [
          `Sker overvågningen som led i en kollektiv aftale om kontrolforanstaltninger, fx DA og LO's aftale, er hjemlen databeskyttelseslovens § 12, stk. 1. Er behandlingen i overensstemmelse med en sådan aftale, anser Datatilsynet den også for at opfylde forordningens artikel 5, stk. 1, litra a–c.`,
          `Uden en aftale er hjemlen artikel 6, stk. 1, litra f for private arbejdsgivere og litra e for offentlige. Behandlingen skal opfylde kravene i artikel 5 om saglighed og nødvendighed.`,
          `Datatilsynet skriver generelt, at kontrol af medarbejdere kun kan ske, hvis der er et gyldigt behandlingsgrundlag, og betingelserne om saglighed og proportionalitet er opfyldt. DA og LO's aftale siger det sådan, at der skal være et rimeligt forhold mellem formål og midler.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 190" role="img" aria-label="Beslutningstræ: med en kollektiv aftale er hjemlen databeskyttelseslovens paragraf 12, uden aftale artikel 6 i forordningen."><rect class="tg-kasse" x="90" y="8" width="220" height="30"/><text x="200" y="28" text-anchor="middle">Kollektiv aftale om kontrol?</text><path class="tg-pil" d="M170,38 L95,78"/><path class="tg-pil" d="M230,38 L305,78"/><text class="tg-fremhaev" x="118" y="60" text-anchor="end">Ja</text><text class="tg-fremhaev" x="280" y="60">Nej</text><rect class="tg-modul" x="10" y="78" width="170" height="48"/><text class="tg-modul__tekst" x="20" y="98">DATABESKYTTELSESLOVEN</text><text class="tg-modul__tekst" x="20" y="116">§ 12, STK. 1</text><rect class="tg-kasse" x="205" y="78" width="190" height="48"/><text x="213" y="98">Forordningen art. 6,</text><text x="213" y="116">stk. 1, litra f eller e</text><text x="10" y="146">fx DA og LO's aftale</text><text x="220" y="146">f: private arbejdsgivere</text><text x="220" y="162">e: offentlige</text><text class="tg-lille" x="220" y="182">SKAL OPFYLDE ARTIKEL 5</text></svg>`,
          tekst: `Skematisk. Den hjemmel, Datatilsynet peger på med og uden en kollektiv aftale om kontrolforanstaltninger. Kilde: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "DA og LO's aftale om kontrolforanstaltninger",
        tekst: [
          `Aftalen er fra 27. oktober 2006 og gælder fra 1. januar 2007. Den slår fast, at arbejdsgiveren kan indføre kontrol i kraft af ledelsesretten. Kontrollen skal være sagligt begrundet i driften og have et fornuftigt formål. Den må ikke være krænkende og må ikke give lønmodtagerne tab eller nævneværdige ulemper.`,
          `Arbejdsgiveren skal underrette lønmodtagerne om nye kontrolforanstaltninger senest 6 uger, før de sættes i gang. Fristen gælder ikke, hvis formålet ellers går tabt, eller tvingende driftsmæssige grunde forhindrer det. Så skal medarbejderne have besked snarest muligt med en forklaring på, hvorfor fristen ikke kunne holdes.`,
          `Aftalen gælder ikke, hvis parterne i en overenskomst har lavet egne regler om kontrol. Hovedorganisationerne anbefaler særlige aftaler tilpasset arbejdet og nævner selv GPS som eksempel. Uenighed om en kontrolforanstaltning behandles fagretligt.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Varsel før start", "6", "uger"],
            ["Samtykke fra den enkelte", "Kan ikke gives", "efter aftalens punkt 3"],
            ["Aftalen gælder fra", "1. januar", "2007"]
          ],
          note: `Kilde: ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger af 27. oktober 2006")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Samtykke",
        tekst: [
          `Datatilsynet nævner ikke samtykke i afsnittet om GPS-overvågning. Hjemlen er en kollektiv aftale om kontrolforanstaltninger eller arbejdsgiverens berettigede interesse.`,
          `DA og LO's aftale går længere. Efter punkt 3 kan den enkelte lønmodtager ikke give samtykke til en kontrolforanstaltning, hverken ved ansættelsen eller senere. En underskrift på en GPS-politik er derfor information, ikke et samtykke.`
        ],
        efter: [
          `Kilder: ${a(DT, "Datatilsynet: Kontrol af medarbejdere")} og ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Varsel og information i rækkefølge",
        tekst: [
          `Gælder DA og LO's aftale, kommer varslet før informationen efter databeskyttelsesreglerne. De to krav kan opfyldes med samme meddelelse, hvis den kommer tidligt nok og indeholder det, artikel 13 kræver.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["Senest 6 uger før", "Medarbejderne underrettes om den nye kontrol efter DA og LO's aftale, hvis den gælder."],
            ["Senest ved start", "De ansatte får information om formålet, omfanget og brugen af oplysningerne efter artikel 13."],
            ["Mens GPS'en kører", "Data bruges kun til det oprindelige formål, og privat kørsel kan slås fra, hvis den er tilladt."],
            ["Før et nyt formål", "Medarbejderen får information om det nye formål, før data bruges til det."]
          ],
          note: `Kilder: ${a(DALO, "DA og LO: Aftale om kontrolforanstaltninger")} og ${a(DT, "Datatilsynet: Kontrol af medarbejdere")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Oplysningspligten",
        tekst: [
          `Informationen skal gives senest, når kontrollen sættes i gang, efter artikel 13 eller 14. Arbejdsgiveren skal som dataansvarlig kunne dokumentere, at medarbejderen har fået den, og Datatilsynet skriver, at det kan være en god idé at give den skriftligt.`,
          `Datatilsynet foreslår hovedpunkter og et link til uddybende oplysninger, fx i personalehåndbogen. Det er ikke nok at lægge oplysningerne på et intranet, som den ansatte selv skal finde. Oplysningerne skal som udgangspunkt kun gives én gang, også når GPS'en indsamler data løbende.`
        ],
        punkter: [
          `Den skal være lettilgængelig og i et klart og enkelt sprog, så den ansatte forstår kontrollen og især kontrolformålet.`,
          `DA og LO's aftale og lignende aftaler har særlige regler for underretning af medarbejderne.`,
          `Arbejdsgiveren kan efter omstændighederne undlade at underrette om en konkret kontrol, hvis underretningen sandsynligvis ville gøre formålet med kontrollen umuligt eller i alvorlig grad hindre det.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 236" role="img" aria-label="Et ark med de hovedpunkter, informationen om GPS skal have: hvem der er dataansvarlig, formål og retsgrundlag, hvem der får data, hvor længe data gemmes, og medarbejderens rettigheder."><rect class="tg-kasse" x="110" y="10" width="180" height="196"/><text class="tg-fremhaev" x="200" y="36" text-anchor="middle">Information om GPS</text><line class="tg-skillevaeg" x1="122" y1="46" x2="278" y2="46"/><rect class="tg-modul" x="122" y="62" width="10" height="10"/><text x="140" y="71">dataansvarlig</text><rect class="tg-modul" x="122" y="90" width="10" height="10"/><text x="140" y="99">formål, hjemmel</text><rect class="tg-modul" x="122" y="118" width="10" height="10"/><text x="140" y="127">hvem får data</text><rect class="tg-modul" x="122" y="146" width="10" height="10"/><text x="140" y="155">hvor længe</text><rect class="tg-modul" x="122" y="174" width="10" height="10"/><text x="140" y="183">dine rettigheder</text><text x="0" y="66">Skriftligt</text><text x="0" y="82">er en god idé</text><text x="300" y="150">Ikke kun</text><text x="300" y="166">på intranet</text><text class="tg-lille" x="200" y="228" text-anchor="middle">GIVES SENEST, NÅR GPS'EN TAGES I BRUG</text></svg>`,
          tekst: `Skematisk. De hovedpunkter, Datatilsynet nævner, når arbejdsgiveren skal give oplysningerne. Kilde: ${a(DTA, "Datatilsynet: Vejledning om databeskyttelse i ansættelsesforhold")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Nyt formål kræver ny information",
        tekst: [
          `Vil arbejdsgiveren bruge allerede indsamlede GPS-data til et andet formål, skal medarbejderen have information om det nye formål, før behandlingen sker. Datatilsynet skriver, at formålet er, at behandlingen ikke må komme bag på medarbejderen.`,
          `Datatilsynet viser reglen med et eksempel om et alarmsystem, der er sat op for at forebygge indbrud. Arbejdsgiveren får mistanke om, at en ansat ikke overholder sin arbejdstid, og vil bruge alarmloggen til at kontrollere det. Det er et nyt formål, og den ansatte skal informeres først. Viderebehandlingen skal desuden være forenelig med det oprindelige formål efter artikel 5 og 6.`
        ],
        figur: {
          type: "trin",
          trin: [
            ["Data indsamles", "Systemet sættes op til ét formål, og de ansatte får besked om det."],
            ["Et nyt behov opstår", "Arbejdsgiveren vil bruge de samme data til noget andet, fx en konkret kontrol."],
            ["Information først", "Medarbejderen får oplysninger om det nye formål, før data bruges til det."],
            ["Forenelig brug", "Den nye brug skal være forenelig med det oprindelige formål."]
          ]
        },
        efter: [
          `Kilde: ${a(DT, "Datatilsynet: Kontrol af medarbejdere, eksempel 2")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Dataansvarlig og databehandler",
        tekst: [
          `Datatilsynet skelner mellem den dataansvarlige og databehandleren. Den dataansvarlige har det overordnede ansvar og bestemmer, hvorfor og hvordan oplysningerne behandles. En databehandler behandler oplysningerne på vegne af og efter instruks fra den dataansvarlige.`,
          `Arbejdsgiveren er dataansvarlig for de oplysninger, der registreres om de ansatte. Det gælder også positioner fra virksomhedens biler. Datatilsynet har en særlig vejledning om dataansvarlige og databehandlere.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 170" role="img" aria-label="To kasser. Virksomheden er dataansvarlig og giver instruks til en databehandler, der behandler data på virksomhedens vegne."><defs><marker id="pil-gps-2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto-start-reverse"><path d="M0,1 L7,4 L0,7" class="tg-pil"/></marker></defs><rect class="tg-modul" x="10" y="40" width="160" height="70"/><text class="tg-fremhaev" x="90" y="68" text-anchor="middle">Virksomheden</text><text x="90" y="88" text-anchor="middle">dataansvarlig</text><rect class="tg-kasse" x="230" y="40" width="160" height="70"/><text class="tg-fremhaev" x="310" y="68" text-anchor="middle">Databehandler</text><text x="310" y="88" text-anchor="middle">behandler data</text><line class="tg-gulvlinje" x1="172" y1="75" x2="226" y2="75" marker-end="url(#pil-gps-2)"/><text x="199" y="62" text-anchor="middle">instruks</text><text class="tg-lille" x="0" y="140">DEN DATAANSVARLIGE BESTEMMER FORMÅL OG MIDLER</text><text class="tg-lille" x="0" y="160">DATABEHANDLEREN HANDLER PÅ DENS VEGNE</text></svg>`,
          tekst: `Skematisk. Datatilsynets skel mellem dataansvarlig og databehandler. Kilde: ${a(DTA, "Datatilsynet: Vejledning om databeskyttelse i ansættelsesforhold")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvor længe data må gemmes",
        tekst: [
          `Arbejdsgiveren må kun opbevare personoplysninger, så længe de er nødvendige for formålet. Derefter skal de slettes eller anonymiseres. Datatilsynet kalder det opbevaringsbegrænsning.`,
          `Virksomheden skal have procedurer for sletning, fx at oplysningerne slettes efter en fast periode. Generelle slettefrister for bestemte sagstyper er i orden, når de er sagligt begrundet. Har GPS-data også betydning for løn eller skat, kan anden lovgivning kræve, at de gemmes længere.`,
          `GPS-systemerne har selv en grænse for historikken. GPS-Tracker.dk gemmer 12 måneders historik i alle fire pakker. Står virksomhedens slettefrist kortere, skal den slette data selv eller sætte systemet op til det.`
        ],
        efter: [
          `Kilder: ${a(DTA, "Datatilsynet: Vejledning om databeskyttelse i ansættelsesforhold")} og ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Indsigt og sletning",
        tekst: [
          `Medarbejderen kan bede om at se de GPS-data, arbejdsgiveren har om vedkommende. Arbejdsgiveren kan give en kopi på flere måder, fx med Digital Post eller med fjernadgang til et sikkert system, hvor medarbejderen selv kan se oplysningerne.`
        ],
        punkter: [
          `<strong>Indsigt.</strong> Medarbejderen har ret til at se de personoplysninger, arbejdsgiveren behandler, og til at få oplyst formål, kategorier og modtagere (artikel 15).`,
          `<strong>Sletning.</strong> Medarbejderen har, med visse undtagelser, ret til at få slettet oplysninger om sig selv (artikel 17).`,
          `<strong>Slettefrister.</strong> Datatilsynet skriver, at generelle slettefrister for bestemte sagstyper er i orden, når de er sagligt begrundet, og der er procedurer for sletningen.`
        ],
        efter: [
          `Kilde: ${a(DTA, "Datatilsynet: Vejledning om databeskyttelse i ansættelsesforhold")}, set den 4. og 7. oktober 2026.`
        ]
      },
      {
        overskrift: "I praksis i systemet",
        tekst: [
          `Reglerne bliver til indstillinger i GPS-systemet. Det er her, virksomheden bestemmer, hvem der ser hvad, og hvor længe data ligger.`
        ],
        punkter: [
          `<strong>Privat-knap.</strong> Mange GPS-kørebøger har en knap i bilen, der skifter mellem privat og erhverv. Se <a href="/til-varebilen/flaadestyring/elektronisk-koerebog/">elektronisk kørebog</a>.`,
          `<strong>Rettigheder.</strong> Adgangen til data kan begrænses pr. bruger. GPS-Tracker.dk har brugere og rettigheder i Standard-abonnementet.`,
          `<strong>Historik.</strong> Abonnementerne gemmer data i en fast periode, fx 12 måneder i GPS-Tracker.dk's Economic-pakke.`,
          `<strong>Fører-id.</strong> Deler flere medarbejdere en bil, kan fører-id knytte turene til den rigtige person. Hos GPS-Tracker.dk sker det med en personlig DriverTag, som købes ekstra.`
        ],
        efter: [
          `Kilde: ${a(GPST, "GPS-Tracker.dk: Priser")}, set den 4. og 7. oktober 2026.`
        ]
      },
      {
        overskrift: "Bilens egne systemer",
        tekst: [
          `Moderne biler indsamler selv data. Datatilsynet skriver i sin vejledning om forbundne biler, at arbejdsgiveren i visse situationer kan bruge bilens systemer til at overvåge kørslen, og at overvågningen skal overholde reglerne for databeskyttelse i ansættelsesforhold. Bilens GPS kan ifølge Datatilsynet registrere hjemadresse og arbejdsrutiner.`,
          `Datatilsynet skriver også, at producenterne skal udvikle biler, der indsamler så få data som muligt, og oplyse brugerne om, hvilke data der indsamles. Brugeren kan kræve sine data slettet, særligt når bilen sælges videre.`
        ],
        figur: {
          type: "svg",
          svg: `<svg viewBox="0 0 400 256" role="img" aria-label="Varebil set fra siden med bilens egne systemer: navigationen registrerer adresser og rutiner, modemet sender data til producenten, eCall sender kun positionen ved en ulykke, og data om motor og dæktryk er ikke persondata."><g transform="translate(80,200)"><path class="tg-rum" d="M0,0 L0,-110 Q0,-116 6,-116 L196,-116 L224,-78 L236,-72 Q242,-69 242,-62 L242,-6 Q242,0 236,0 Z"/><path class="tg-profil" d="M176,-108 L194,-108 L218,-76 L176,-76 Z"/><line class="tg-skinne-tynd" x1="170" y1="-116" x2="170" y2="0"/><circle class="tg-profil" cx="48" cy="0" r="17"/><circle class="tg-profil" cx="48" cy="0" r="6"/><circle class="tg-profil" cx="200" cy="0" r="17"/><circle class="tg-profil" cx="200" cy="0" r="6"/></g><rect class="tg-modul" x="240" y="78" width="20" height="6"/><line class="tg-gulvlinje" x1="5" y1="217" x2="395" y2="217"/><g class="tg-call"><line x1="268" y1="112" x2="90" y2="46"/><circle cx="268" cy="112" r="3"/><text class="tg-call__navn" x="5" y="24">Navigation og GPS</text><text class="tg-call__under" x="5" y="38">registrerer adresser og rutiner</text></g><g class="tg-call"><line x1="250" y1="81" x2="330" y2="46"/><circle cx="250" cy="81" r="3"/><text class="tg-call__navn" x="395" y="24" text-anchor="end">Bilens modem</text><text class="tg-call__under" x="395" y="38" text-anchor="end">sender data til producenten</text></g><g class="tg-call"><line x1="300" y1="150" x2="345" y2="222"/><circle cx="300" cy="150" r="3"/><text class="tg-call__navn" x="395" y="236" text-anchor="end">eCall</text><text class="tg-call__under" x="395" y="250" text-anchor="end">sender kun position ved ulykke</text></g><g class="tg-call"><line x1="128" y1="200" x2="80" y2="224"/><circle cx="128" cy="200" r="3"/><text class="tg-call__navn" x="5" y="236">Motor og dæktryk</text><text class="tg-call__under" x="5" y="250">ikke persondata</text></g></svg>`,
          tekst: `Skematisk. Kilde: ${a(DTB, "Datatilsynet: Forbundne biler og datasikkerhed")}, set den 7. oktober 2026.`
        }
      },
      {
        overskrift: "Hvilke bildata er persondata",
        tekst: [
          `Datatilsynets side om forbundne biler henviser til Det Europæiske Databeskyttelsesråds retningslinjer 01/2020. Siden deler bilens data i det, der er persondata, og det, der ikke er.`,
          `Placering og ruter kan afsløre, hvor føreren bor, og hvilke steder føreren ofte besøger. Data om køreadfærd omfatter hastighed, acceleration, opbremsning og sving. Data om motor og drift kan ikke direkte knyttes til en bestemt person.`
        ],
        figur: {
          type: "daekning",
          kolonner: ["Data fra bilen", "Persondata ifølge Datatilsynet"],
          raekker: [
            ["Lokation og ruter", "ja"],
            ["Hastighed, acceleration og opbremsning", "ja"],
            ["Opkald, beskeder og apps", "ja"],
            ["Motorydelse, brændstofforbrug og dæktryk", "nej"],
            ["Behov for vedligeholdelse", "nej"]
          ],
          note: `Kilde: ${a(DTB, "Datatilsynet: Forbundne biler og datasikkerhed")}, set den 4. oktober 2026. Data om ydelse og drift er ikke persondata, fordi de ikke direkte kan henføres til en bestemt person.`
        }
      },
      {
        overskrift: "eCall",
        tekst: [
          `eCall er det 112-baserede system, der automatisk kontakter alarmcentralen ved en ulykke. Det kan ikke slås fra, og det sender kun bilens position til myndighederne, når det aktiveres, skriver Datatilsynet.`,
          `eCall er Datatilsynets eksempel på en behandling, der er nødvendig, fordi loven kræver den. Ifølge Det Europæiske Databeskyttelsesråd skal bilens grundlæggende funktioner ellers virke uden samtykke.`
        ],
        figur: {
          type: "noegletal",
          data: [
            ["Alarmnummer", "112", ""],
            ["Kan slås fra", "Nej", ""],
            ["Sender position", "Kun", "når eCall aktiveres"]
          ],
          note: `eCall sender kun bilens position til myndighederne, når det aktiveres, skriver ${a(DTB, "Datatilsynet")}, set den 4. oktober 2026.`
        }
      },
      {
        overskrift: "Datatilsynets tilsyn i 2026",
        tekst: [
          `Overvågning af ansatte er et af Datatilsynets fokusområder i 2026. Tilsynet kortlagde området i 2024 og gennemfører i 2026 målrettede tilsyn med arbejdsgiveres behandling af oplysninger ved kontrol af ansatte.`,
          `Datatilsynet begrunder fokus med, at overvågning ofte omfatter mange oplysninger, og at en ansat kan stå svagt, når det gælder om at sige fra eller klage over sin arbejdsgiver.`
        ],
        figur: {
          type: "tidslinje",
          punkter: [
            ["2024", "Datatilsynet kortlægger overvågning af ansatte."],
            ["2026", "Overvågning af ansatte er et fokusområde, og Datatilsynet gennemfører målrettede tilsyn med arbejdsgiveres kontrol af ansatte."]
          ],
          note: `Kilde: ${a(DTF, "Datatilsynet: Særlige fokusområder for tilsynsaktiviteter i 2026")}, set den 4. oktober 2026.`
        },
        efter: [
          `Kilde: ${a(DTF, "Datatilsynet: Særlige fokusområder for tilsynsaktiviteter i 2026")}, set den 7. oktober 2026.`
        ]
      }
    ],
    spoergsmaal_titel: "Det skal leverandøren vide",
    spoergsmaal_manchet: "Så kan systemet sættes op efter Datatilsynets krav.",
    spoergsmaal: [
      "Formålet med GPS-data, fx ruteplanlægning, kørebog eller tyverisikring.",
      "Om bilerne må bruges privat, så GPS'en skal kunne slukkes.",
      "Hvem i virksomheden der skal have adgang til hvilke data.",
      "Hvor længe data skal gemmes, og hvordan de slettes.",
      "Om der er en kollektiv aftale om kontrolforanstaltninger.",
      "Om flere medarbejdere deler bilerne, så turene skal knyttes til den rigtige fører.",
      "Hvordan medarbejderne kan få en kopi af deres egne data."
    ],
    faq: [
      ["Må arbejdsgiveren GPS-spore firmabilen?", "Ja, med et sagligt formål. Datatilsynet nævner ruteplanlægning, overvågning af transport og de ansattes sikkerhed."],
      ["Skal medarbejderne informeres om GPS?", "Ja. Senest når overvågningen begynder, skal de have information om formålet, omfanget og brugen af oplysningerne, jf. artikel 13. Gælder DA og LO's aftale om kontrolforanstaltninger, skal de underrettes senest 6 uger før."],
      ["Skal GPS'en kunne slukkes?", "Ja, hvis bilen må bruges privat. Datatilsynet skriver, at den ansatte skal kunne slukke GPS-overvågningen, når bilen bruges i privat øjemed."],
      ["Må GPS-data bruges til at kontrollere medarbejderen?", "Ikke hvis data er indsamlet til et andet formål. Datatilsynet nævner overvågning af chaufførens adfærd eller opholdssted som uforenelig viderebehandling. Et nyt formål kræver, at medarbejderen får information først."],
      ["Kræver GPS-overvågning samtykke?", "Datatilsynet nævner ikke samtykke i afsnittet om GPS-overvågning. Hjemlen er en kollektiv aftale om kontrolforanstaltninger eller arbejdsgiverens berettigede interesse. Efter DA og LO's aftale kan den enkelte lønmodtager ikke give samtykke til kontrol."],
      ["Har medarbejderen ret til at se sine GPS-data?", "Ja. Retten til indsigt efter artikel 15 gælder de personoplysninger, arbejdsgiveren behandler, og omfatter også formål, kategorier og modtagere."],
      ["Kan eCall slås fra?", "Nej. Datatilsynet skriver, at eCall ikke kan deaktiveres, og at det kun sender bilens position til myndighederne, når det aktiveres."],
      ["Hvor længe må GPS-data gemmes?", "Så længe de er nødvendige for formålet. Derefter skal de slettes eller anonymiseres, og virksomheden skal have procedurer for sletningen."],
      ["Er det nok at lægge GPS-politikken på intranettet?", "Nej. Datatilsynet skriver, at det ikke er tilstrækkeligt at have oplysningerne liggende på et intranet, som den ansatte selv skal finde."]
    ],
    kilder: [
      { navn: "Datatilsynet: Kontrol af medarbejdere (november 2023)", url: DT, dato: "2026-10-07" },
      { navn: "Datatilsynet: Vejledning om databeskyttelse i forbindelse med ansættelsesforhold (marts 2023), afsnit 5.3", url: DTA, dato: "2026-10-07" },
      { navn: "Datatilsynet: Databeskyttelse i forbindelse med ansættelsesforhold", url: DTW, dato: "2026-10-04" },
      { navn: "Datatilsynet: Forbundne biler og datasikkerhed", url: DTB, dato: "2026-10-07" },
      { navn: "Datatilsynet: Særlige fokusområder for tilsynsaktiviteter i 2026", url: DTF, dato: "2026-10-07" },
      { navn: "DA og LO: Aftale om kontrolforanstaltninger af 27. oktober 2006 (pdf hos 3F)", url: DALO, dato: "2026-10-07" },
      { navn: "Motorstyrelsen: Regler for gule plader", url: MST, dato: "2026-10-07" },
      { navn: "GPS-Tracker.dk: Priser på abonnementer", url: GPST, dato: "2026-10-07" },
      { navn: "GSM Teknik: Kørebog med knap, Teltonika FMC130", url: GSM, dato: "2026-10-04" }
    ]
  },
  nye_fakta: [
    ["GSM Teknik: knappen til privat og erhverv monteres på instrumentbrættet med dobbeltklæbende tape.", GSM],
    ["GPS-Tracker.dk: privat-/erhvervsknap kræver LogPRO Switch med knap og montering, som tilkøbes.", GPST],
    ["Motorstyrelsen: konstateres det, at en mandskabsvogn umiddelbart bruges i strid med reglerne, skal virksomheden dokumentere, at kørslen ligger inden for rammerne; dokumentation kan fx være GPS-oplysninger om den kørte rute.", MST],
    ["Datatilsynet: kontrol af medarbejdere kan kun ske, hvis der er et gyldigt behandlingsgrundlag, og hvis de overordnede betingelser om saglighed og proportionalitet er opfyldt (intro). DA/LO-aftalen punkt 1: der skal være et rimeligt forhold mellem formål og midler.", DT],
    ["DA/LO-aftalen om kontrolforanstaltninger er dateret 27. oktober 2006 og trådte i kraft 1. januar 2007; kontrolforanstaltninger skal være sagligt begrundede i driftsmæssige årsager og have et fornuftigt formål, må ikke være krænkende og må ikke forvolde lønmodtagerne tab eller nævneværdige ulemper (punkt 1 og 10).", DALO],
    ["DA/LO-aftalen punkt 2: underretning senest 6 uger før iværksættelse; gælder ikke, hvis formålet forspildes, eller tvingende driftsmæssige grunde er til hinder; så underrettes snarest muligt med redegørelse for årsagen.", DALO],
    ["DA/LO-aftalen punkt 3: den enkelte lønmodtager kan ikke meddele samtykke til iværksættelse af kontrolforanstaltninger, hverken ved ansættelsen eller senere.", DALO],
    ["DA/LO-aftalen punkt 5, 6, 8 og 9: uoverensstemmelser behandles fagretligt; aftalen gælder ikke, hvis parterne i en kollektiv overenskomst har egne regler; hovedorganisationerne anbefaler særlige aftaler og nævner logning i relation til bl.a. GPS.", DALO],
    ["Datatilsynet: arbejdsgiveren skal som dataansvarlig kunne dokumentere, at medarbejderen har fået informationen; det kan være en god idé at give den skriftligt; arbejdsgiveren kan angive hovedpunkter (dataansvarlig, kontaktoplysninger til databeskyttelsesrådgiver, formål og retsgrundlag, modtagere, opbevaring og rettigheder) med link til uddybende oplysninger, fx i personalehåndbogen.", DTA],
    ["Datatilsynet: det er ikke tilstrækkeligt at have oplysningerne liggende på en hjemmeside, intranet eller lignende, som den ansatte selv skal finde; oplysningerne skal som udgangspunkt kun gives én gang, også ved løbende indsamlinger.", DTA],
    ["Datatilsynets eksempel 2: data fra et alarmsystem, der er etableret for at forebygge indbrud, vil arbejdsgiveren bruge til at kontrollere en ansats arbejdstid; det er et andet formål, og arbejdsgiveren skal forinden iagttage oplysningspligten (artikel 13, stk. 3); viderebehandling skal være i overensstemmelse med artikel 5, stk. 1, litra b, jf. artikel 6, stk. 4.", DT],
    ["Datatilsynet: den dataansvarlige har det overordnede ansvar og bestemmer formål og hjælpemidler; en databehandler behandler oplysninger på vegne af og efter instruks fra den dataansvarlige; arbejdsgiveren er dataansvarlig for oplysninger om de ansatte.", DTA],
    ["Datatilsynet: personoplysninger må kun opbevares, så længe det er nødvendigt for formålet, og skal derefter slettes eller anonymiseres; der skal være procedurer for sletning; det kan følge af lovgivning (fx skatteretlige regler om lønoplysninger), at oplysninger skal opbevares i et vist tidsrum.", DTA],
    ["GPS-Tracker.dk: alle fire pakker har 12 måneders GPS-historik.", GPST],
    ["Datatilsynet: arbejdsgiveren kan give en kopi af personoplysningerne fx via Digital Post eller fjernadgang til et sikkert system.", DTA],
    ["GPS-Tracker.dk: LogPRO DriverID genkender chaufføren via en personlig DriverTag, der tilkøbes.", GPST],
    ["Datatilsynet: producenterne skal udvikle køretøjer, der indsamler så få data som muligt, og oplyse brugerne om, hvilke data der indsamles; brugere kan kræve data slettet, særligt ved videresalg af bilen.", DTB],
    ["Datatilsynet: placeringsdata kan afsløre, hvor føreren bor, og hvilke steder føreren ofte besøger; data om køreadfærd omfatter hastighed, acceleration, opbremsninger og sving.", DTB],
    ["Datatilsynet/EDPB: behandling af personoplysninger er generelt ikke nødvendig for bilens basale drift, medmindre der er en lovbestemt forpligtelse, fx eCall; bilens grundlæggende funktioner skal fungere uden samtykke.", DTB],
    ["Datatilsynet begrunder fokus på overvågning af ansatte med, at overvågning ofte indebærer behandling af en større mængde oplysninger, og at en ansat kan være i en sårbar situation med at sige fra eller klage over sin arbejdsgiver.", DTF]
  ]
};
