// Teksterne til guidernes nye udseende med "Vores valg" (07-10-2026).
// byg-bedste-valg.js fletter dem med valgene i bedste-valg-kladde.js og skriver
// bedste-valg.json i roden. Pladsholdere: %aar%, %n% (antal tilbud), %fra% (laveste ydelse).
//
// Felter: h1, title, desc, intro, valg_overskrift, vaegt (hvad vi har lagt vægt på),
// faq_bedste (første spørgsmål, svaret bygges af valgene), kort (teksten på hubbens kort),
// faq_ret: { indeks: [spørgsmål, svar] | null } retter eller sletter de gamle spørgsmål.

module.exports = {
  "billigste-varebil": {
    h1: "Billig gulpladebil: de bedste billige varevogne",
    title: "Billig varebil leasing %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste billige varebiler ud fra anmeldelser og mål. Se også alle %n% tilbud sorteret efter pris, fra %fra% kr./md. uden moms.",
    intro: "En billig varebil skal også kunne klare arbejdet. Vi har valgt de bedste blandt de billigste tilbud ud fra anmeldelser, tests og mål. Under dem står alle %n% tilbud sorteret efter pris, og vi har fordelt udbetalingen over løbetiden, så du kan se, hvad bilen reelt koster om måneden.",
    valg_overskrift: "De bedste billige varebiler",
    vaegt: "Her har vi kun valgt mellem de billigste tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvad er den bedste billige varebil i %aar%?",
    faq_ret: {
      0: ["Hvad er den billigste gulpladebil at lease?",
          "Den billigste står øverst i tabellen med alle tilbud længere nede på siden. Vi sorterer efter månedsydelsen plus udbetalingen fordelt over løbetiden, fordi den annoncerede ydelse alene ikke siger, hvad bilen koster. Datoen står ved hvert tilbud."],
      3: ["Er priserne med eller uden moms?",
          "Alle priser på siden er uden moms, fordi en varebil på gule plader købes af en virksomhed, der løfter momsen."]
    }
  },
  "el-varebil": {
    h1: "Bedste elvarebil %aar%",
    title: "Elvarebil leasing %aar%: de bedste og %n% tilbud",
    desc: "Vi har valgt de bedste elvarebiler ud fra tests af rækkevidde, ladning og lastrum. Sammenlign %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Rækkevidden, ladningen og lastrummet afgør, om en elvarebil passer til arbejdet. Vi har læst tests og anmeldelser og valgt de elvarebiler, vi synes er bedst lige nu. Under dem kan du sammenligne alle %n% tilbud på pris og rækkevidde.",
    valg_overskrift: "De bedste elvarebiler",
    vaegt: "Vi har lagt mest vægt på rækkevidden i testene, ladningen og lastrummet, og derefter på prisen.",
    faq_bedste: "Hvad er den bedste elvarebil i %aar%?",
    faq_ret: {
      0: ["Hvad koster den grønne ejerafgift på en elvarebil?",
          "Den er meget lavere end på en dieselvarebil, fordi afgiften følger bilens CO₂-udledning. Motorstyrelsen oplyser satserne, og på hver modelside kan du se den afgift, producenten oplyser for bilen."]
    }
  },
  "ladbil": {
    h1: "Bedste ladbil til leasing",
    title: "Ladbil leasing %aar%: de bedste ladvogne fra %fra% kr./md.",
    desc: "Vi har valgt de bedste ladbiler og chassis med lad ud fra anmeldelser, nyttelast og træk. Se %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "En ladbil er et chassis, hvor en opbygger har sat et lad eller en kasse på, og derfor afhænger nyttelasten af opbygningen. Vi har valgt de bedste ud fra anmeldelser af bilerne, nyttelasten og trækket. Under dem står alle tilbud med producentens tal for netop den opbygning.",
    valg_overskrift: "De bedste ladbiler",
    vaegt: "Vi har lagt mest vægt på nyttelasten, trækket og anmeldelserne af bilen bag opbygningen.",
    faq_bedste: "Hvad er den bedste ladbil at lease i %aar%?"
  },
  "stor-varebil": {
    h1: "Bedste store varebil %aar%",
    title: "Stor varebil leasing %aar%: de bedste og %n% tilbud",
    desc: "Vi har læst anmeldelser af Sprinter, Crafter, Transit, Master og Ducato og valgt de bedste store varebiler. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Når der skal meget med, er det de store kassevogne over 5,4 m, der kan klare det. Vi har læst anmeldelser og tests af Sprinter, Crafter, Transit, Master, Ducato og de andre og valgt de bedste. Under dem kan du sammenligne alle %n% tilbud på lastrum, nyttelast og pris.",
    valg_overskrift: "De bedste store varebiler",
    vaegt: "Vi har lagt mest vægt på anmeldelserne, nyttelasten og lastrummet og på, hvordan bilerne kører med læs.",
    faq_bedste: "Hvad er den bedste store varebil i %aar%?"
  },
  "lille-varebil": {
    h1: "Bedste lille varebil %aar%",
    title: "Bedste lille varebil %aar%: vores valg fra %fra% kr./md.",
    desc: "Vi har læst anmeldelser af Caddy, Berlingo, Kangoo, Transit Courier og PV5 og valgt de bedste små varebiler. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "En lille varebil er let at parkere, billigere i afgift og bruger mindre brændstof. Vi har læst anmeldelser og tests af de små varebiler under 4,75 m og valgt de bedste. Under dem kan du sammenligne alle %n% tilbud, også på elbilerne.",
    valg_overskrift: "De bedste små varebiler",
    vaegt: "Vi har lagt mest vægt på anmeldelserne, lastrummet og nyttelasten, og derefter på prisen.",
    faq_bedste: "Hvad er den bedste lille varebil i %aar%?",
    faq_ret: {
      1: ["Er en lille varebil billigere i grøn ejerafgift?",
          "Som regel ja, fordi afgiften følger bilens CO₂-udledning, og en lille bil udleder mindre. Motorstyrelsen oplyser satserne, og afgiften for hver bil står på modelsiden."]
    }
  },
  "varebil-til-parkeringskaelder": {
    h1: "Bedste varebil til parkeringskælder",
    title: "Varebil til parkeringskælder: de bedste under 2,10 m",
    desc: "Vi har valgt de bedste varebiler under 2,10 m i højden ud fra mål og anmeldelser. Se %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Danske parkeringskældre har typisk 1,90 til 2,10 m frihøjde. Vi har valgt de bedste varebiler, der kommer ind, ud fra højden, lastrummet og anmeldelserne. Under dem står alle %n% tilbud sorteret efter højden fra vejen til taget, med den laveste øverst.",
    valg_overskrift: "De bedste varebiler under 2,10 m",
    vaegt: "Vi har lagt mest vægt på, at bilen er en rigtig varebil med plads til værktøj og materialer, og at der er luft op til 2,10 m.",
    faq_bedste: "Hvilken varebil er bedst til en parkeringskælder?"
  },
  "varebil-med-traek": {
    h1: "Bedste varebil med træk",
    title: "Varebil med træk %aar%: de bedste til 2.000 kg og mere",
    desc: "Vi har valgt de bedste varebiler til at trække tungt ud fra anmeldelser, trækvægt og nyttelast. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Skal der en trailer, en maskine eller en båd bagpå, er trækvægten det første tal, du skal se på. Vi har valgt de bedste blandt bilerne, der må trække mindst 2.000 kg med bremset anhænger, ud fra trækvægten og anmeldelserne. Under dem står alle %n% tilbud med den største trækvægt øverst.",
    valg_overskrift: "De bedste varebiler med træk",
    vaegt: "Vi har lagt mest vægt på trækvægten, nyttelasten og det, testerne skriver om bilen med anhænger.",
    faq_bedste: "Hvilken varebil er bedst til at trække?"
  },
  "varebil-med-hoej-nyttelast": {
    h1: "Bedste varebil med høj nyttelast",
    title: "Varebil med høj nyttelast: de bedste over 1.000 kg",
    desc: "Vi har valgt de bedste varebiler, der må laste mindst 1.000 kg, ud fra anmeldelser og mål. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Nyttelasten er det, du må lægge i bilen, når fører, passagerer, værktøj og last er talt med. Vi har valgt de bedste blandt bilerne, der må laste mindst 1.000 kg, ud fra anmeldelser, mål og pris. Under dem står alle %n% tilbud med den største nyttelast øverst.",
    valg_overskrift: "De bedste varebiler med høj nyttelast",
    vaegt: "Vi har lagt mest vægt på nyttelasten, lastrummet og det, testerne skriver om bilen med fuld last.",
    faq_bedste: "Hvilken varebil er bedst til tunge læs?"
  },
  "varebil-med-lav-udbetaling": {
    title: "Varebil uden udbetaling? %n% tilbud og vores valg",
    desc: "Tilbud på varebiler uden udbetaling eller med højst 40.000 kr. i udbetaling. Vi har valgt de bedste biler blandt dem. Fra %fra% kr./md. uden moms.",
    intro: "Her er %n% tilbud på varebiler uden udbetaling eller med en udbetaling på højst 40.000 kr. Vi har valgt de bedste biler blandt dem ud fra anmeldelser og mål. En lav udbetaling gør månedsydelsen højere, og derfor viser tabellen, hvad hvert tilbud reelt koster om måneden.",
    valg_overskrift: "De bedste biler med lav udbetaling",
    vaegt: "Vi har kun valgt mellem tilbuddene med lav udbetaling, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease uden stor udbetaling?"
  },
  "finansiel-eller-operationel-leasing": {
    title: "Finansiel eller operationel leasing? %n% tilbud",
    desc: "Se forskellen på finansiel og operationel leasing af varebil, regnet på %n% tilbud fra %fra% kr./md. uden moms. Med vores valg af bil til hver type.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber. Ved operationel leasing afleverer du bilen, og leasingselskabet bærer risikoen for, hvad den er værd. Her kan du se begge typer side om side og vores valg af bil til hver af dem.",
    valg_overskrift: "Vores valg til hver type",
    vaegt: "Vi har valgt den bil, vi synes er bedst blandt tilbuddene af hver type, ud fra anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease operationelt eller finansielt?"
  },
  "varebil-med-service-inkluderet": {
    h1: "Bedste varebil med service inkluderet",
    title: "Varebil med service inkluderet: %n% tilbud og vores valg",
    desc: "%n% leasingtilbud på varebiler, hvor service og reparation er med i ydelsen. Vi har valgt de bedste biler blandt dem. Fra %fra% kr./md. uden moms.",
    intro: "Her er %n% tilbud, hvor forhandleren eller leasingselskabet skriver, at service og reparation er med i månedsydelsen. Så kender du udgiften til værkstedet på forhånd. Vi har valgt de bedste biler blandt dem ud fra anmeldelser og mål.",
    valg_overskrift: "De bedste biler med service inkluderet",
    vaegt: "Vi har kun valgt mellem tilbuddene med service og reparation i ydelsen, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease med service inkluderet?"
  },
  "varebil-med-kort-loebetid": {
    h1: "Bedste varebil på kort leasing",
    title: "Varebil på kort leasing: de bedste på 36 og 48 mdr.",
    desc: "%n% leasingtilbud på varebiler med 36 eller 48 måneders løbetid. Vi har valgt de bedste biler blandt dem. Fra %fra% kr./md. uden moms.",
    intro: "De fleste leasingaftaler på varebiler løber i 60 måneder. Her er %n% tilbud på 36 eller 48 måneder, så du kan skifte bil tidligere, hvis virksomheden vokser eller opgaverne ændrer sig. Vi har valgt de bedste biler blandt dem ud fra anmeldelser og mål.",
    valg_overskrift: "De bedste biler på kort løbetid",
    vaegt: "Vi har kun valgt mellem tilbuddene på 36 og 48 måneder, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease på en kort aftale?"
  },
  "varebil-under-3500-kr": {
    h1: "Bedste varebil til under 3.500 kr. om måneden",
    title: "Varebil under 3.500 kr./md.: de bedste og %n% tilbud",
    desc: "Vi har valgt de bedste varebiler, der koster under 3.500 kr. om måneden med udbetalingen regnet med. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Har du et loft over, hvad bilen må koste om måneden, er det den samlede ydelse, der tæller. Her er tilbuddene, der holder sig under 3.500 kr., når udbetalingen er fordelt over løbetiden. Vi har valgt de bedste biler blandt dem ud fra anmeldelser, tests og mål.",
    valg_overskrift: "De bedste varebiler under 3.500 kr.",
    vaegt: "Vi har kun valgt mellem tilbuddene under 3.500 kr. om måneden, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvad er den bedste varebil til under 3.500 kr. om måneden?"
  },
  "elvarebil-med-traek": {
    h1: "Bedste elvarebil med træk",
    title: "Elvarebil med træk %aar%: de bedste til trailer",
    desc: "Vi har valgt de bedste elvarebiler til at trække ud fra trækvægt, rækkevidde og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Elvarebilerne må trække fra 750 kg til 2.500 kg, så forskellen er stor. Vi har valgt de bedste til at trække ud fra trækvægten, rækkevidden og det, testerne skriver. Under dem står alle modellerne efter trækvægt, med den tungeste øverst.",
    valg_overskrift: "De bedste elvarebiler med træk",
    vaegt: "Vi har lagt mest vægt på trækvægten og rækkevidden, fordi rækkevidden falder, når der hænger en trailer bagpå.",
    faq_bedste: "Hvilken elvarebil er bedst til at trække?"
  },
  "varebil-til-elektriker": {
    h1: "Bedste varebil til elektriker",
    title: "Varebil til elektriker %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste mellemstore kassevogne til elektrikere ud fra anmeldelser, lastrum og plads til reoler. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Kabler, materialer og værktøj skal stå på reoler, og bilen skal kunne parkeres hos kunder i byen. Vi har valgt de bedste mellemstore kassevogne til arbejdet ud fra anmeldelser, lastrum og pris. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste varebiler til elektrikere",
    vaegt: "Vi har lagt mest vægt på lastrummet, pladsen til reoler, kørslen i byen og anmeldelserne.",
    faq_bedste: "Hvilken varebil skal en elektriker vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-vvs": {
    h1: "Bedste varebil til VVS",
    title: "Varebil til VVS %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste kassevogne til VVS ud fra anmeldelser og lastrum på mindst 2,5 m til rør. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Rør, fittings og værktøj fylder i længden. Vi har valgt de bedste kassevogne med mindst 2,5 m lastrum ud fra anmeldelser, mål og pris. Under dem står alle modellerne med lastrummets længde og det billigste tilbud på hver.",
    valg_overskrift: "De bedste varebiler til VVS",
    vaegt: "Vi har lagt mest vægt på lastrummets længde, nyttelasten og anmeldelserne.",
    faq_bedste: "Hvilken varebil skal en VVS-installatør vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-toemrer": {
    h1: "Bedste varebil til tømrer",
    title: "Varebil til tømrer %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste lange kassevogne og ladvogne til tømrere ud fra anmeldelser, lastrum og træk. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Plader og lægter kræver længde, og ofte skal der også en trailer med. Vi har valgt de bedste kassevogne med mindst 3 m lastrum og ladvogne ud fra anmeldelser, mål og pris. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste varebiler til tømrere",
    vaegt: "Vi har lagt mest vægt på lastrummets længde, nyttelasten, trækket og anmeldelserne.",
    faq_bedste: "Hvilken varebil skal en tømrer vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-maler": {
    h1: "Bedste varebil til maler",
    title: "Varebil til maler %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste kassevogne til malere ud fra anmeldelser og lastrum til stiger og spande. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Stiger, spande og afdækning skal med, men sjældent de helt tunge læs. Vi har valgt de bedste små og mellemstore kassevogne med mindst 3,5 m³ lastrum ud fra anmeldelser, mål og pris. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste varebiler til malere",
    vaegt: "Vi har lagt mest vægt på lastrummet, plads til stiger, kørslen i byen og anmeldelserne.",
    faq_bedste: "Hvilken varebil skal en maler vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-murer": {
    h1: "Bedste varebil til murer",
    title: "Varebil til murer %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste varebiler til murere ud fra nyttelast, træk og anmeldelser. %n% modeller med mindst 1.100 kg nyttelast fra %fra% kr./md. uden moms.",
    intro: "Mursten, mørtel og stillads vejer. Vi har valgt de bedste blandt varebilerne med mindst 1.100 kg nyttelast og 2.500 kg trækvægt ud fra anmeldelser, mål og pris. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste varebiler til murere",
    vaegt: "Vi har lagt mest vægt på nyttelasten, trækket og det, testerne skriver om bilen med tung last.",
    faq_bedste: "Hvilken varebil skal en murer vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-anlaegsgartner": {
    h1: "Bedste varebil til anlægsgartner",
    title: "Varebil til anlægsgartner %aar%: de bedste til træk",
    desc: "Vi har valgt de bedste ladvogne, pickupper og varebiler til anlægsgartnere ud fra træk og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Jord, sten, planter og en trailer med maskiner kræver en bil, der kan trække. Vi har valgt de bedste blandt ladvognene, pickupperne og varebilerne, der må trække mindst 3.000 kg, ud fra anmeldelser og mål. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste biler til anlægsgartnere",
    vaegt: "Vi har lagt mest vægt på trækket, ladet eller lastrummet og det, testerne skriver om bilen med trailer.",
    faq_bedste: "Hvilken bil skal en anlægsgartner vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-budkoersel": {
    h1: "Bedste varebil til budkørsel",
    title: "Varebil til budkørsel: de bedste og mest m³ for pengene",
    desc: "Vi har valgt de bedste store kassevogne til budkørsel ud fra lastrum, pris pr. m³ og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Til pakker og gods er det rumfanget, der tjener pengene, men bilen skal også være god at køre i hele dagen. Vi har valgt de bedste blandt kassevognene med mindst 9 m³ lastrum ud fra anmeldelser, mål og pris. Under dem står alle modellerne sorteret efter, hvad hver kubikmeter koster om måneden.",
    valg_overskrift: "De bedste varebiler til budkørsel",
    vaegt: "Vi har lagt mest vægt på prisen pr. m³, læssehøjden og det, testerne skriver om bilen i bykørsel.",
    faq_bedste: "Hvilken varebil skal en budvirksomhed vælge?",
    faq_ret: { 0: null }
  },
  "varebil-til-servicetekniker": {
    h1: "Bedste varebil til servicetekniker",
    title: "Varebil til servicetekniker %aar%: de bedste små",
    desc: "Vi har valgt de bedste små kassevogne til serviceteknikere ud fra anmeldelser, lastrum og drift. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "En servicetekniker kører mange korte ture i byen med værktøj og reservedele. Vi har valgt de bedste små kassevogne til arbejdet ud fra anmeldelser, lastrum og pris. Under dem står alle modellerne med det billigste tilbud på hver, også elbilerne.",
    valg_overskrift: "De bedste varebiler til serviceteknikere",
    vaegt: "Vi har lagt mest vægt på kørslen i byen, lastrummet og anmeldelserne.",
    faq_bedste: "Hvilken varebil skal en servicetekniker vælge?",
    faq_ret: { 0: null }
  },
  "operationel-leasing-elvarebil": {
    h1: "Bedste elvarebil på operationel leasing",
    title: "Operationel leasing af elvarebil: vores valg og %n% tilbud",
    desc: "Lease en elvarebil, og aflever den efter løbetiden uden at hæfte for restværdien. Vi har valgt de bedste. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Ved operationel leasing afleverer du elvarebilen, når aftalen udløber, og leasingselskabet bærer risikoen for, hvad den er værd. Vi har valgt de bedste elvarebiler blandt tilbuddene ud fra tests og anmeldelser. Under dem står alle %n% tilbud med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "De bedste elvarebiler på operationel leasing",
    vaegt: "Vi har kun valgt mellem de operationelle tilbud, og blandt dem har vi lagt mest vægt på rækkevidden i testene, lastrummet og anmeldelserne.",
    faq_bedste: "Hvilken elvarebil er bedst at lease operationelt?"
  },
  "finansiel-leasing-elvarebil": {
    h1: "Bedste elvarebil på finansiel leasing",
    title: "Finansiel leasing af elvarebil: vores valg fra %fra% kr.",
    desc: "Vi har valgt de bedste elvarebiler blandt %n% finansielle leasingtilbud ud fra tests og anmeldelser. Fra %fra% kr./md. uden moms.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber, og du eller en køber, du anviser, overtager bilen til det beløb. Vi har valgt de bedste elvarebiler blandt tilbuddene ud fra tests og anmeldelser. Under dem står alle %n% tilbud med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "De bedste elvarebiler på finansiel leasing",
    vaegt: "Vi har kun valgt mellem de finansielle tilbud, og blandt dem har vi lagt mest vægt på rækkevidden i testene, lastrummet og anmeldelserne.",
    faq_bedste: "Hvilken elvarebil er bedst at lease finansielt?"
  },
  "operationel-leasing-lille-varebil": {
    h1: "Bedste lille varebil på operationel leasing",
    title: "Operationel leasing af lille varebil: vores valg %aar%",
    desc: "Små varebiler på operationel leasing, hvor du afleverer bilen efter løbetiden. Vi har valgt de bedste. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Her er %n% tilbud på små varebiler, hvor du afleverer bilen, når aftalen udløber, og leasingselskabet bærer risikoen for, hvad den er værd. Vi har valgt de bedste biler blandt dem ud fra anmeldelser og mål. Under dem står alle tilbuddene med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "De bedste små varebiler på operationel leasing",
    vaegt: "Vi har kun valgt mellem de operationelle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvilken lille varebil er bedst at lease operationelt?"
  },
  "finansiel-leasing-lille-varebil": {
    h1: "Bedste lille varebil på finansiel leasing",
    title: "Finansiel leasing af lille varebil: vores valg og %n% tilbud",
    desc: "Vi har valgt de bedste små varebiler blandt %n% finansielle leasingtilbud. Ydelse, udbetaling og restværdi side om side, fra %fra% kr./md. uden moms.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber, og du eller en køber, du anviser, overtager bilen. Vi har valgt de bedste små varebiler blandt tilbuddene ud fra anmeldelser og mål. Under dem kan du se ydelse, udbetaling og restværdi for alle %n% tilbud.",
    valg_overskrift: "De bedste små varebiler på finansiel leasing",
    vaegt: "Vi har kun valgt mellem de finansielle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvilken lille varebil er bedst at lease finansielt?"
  },
  "operationel-leasing-mellemstor-varebil": {
    h1: "Bedste mellemstore varebil på operationel leasing",
    title: "Mellemstor varebil på operationel leasing: vores valg %aar%",
    desc: "Mellemstore varebiler på operationel leasing, hvor du afleverer bilen efter løbetiden. Vi har valgt de bedste. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Ved operationel leasing afleverer du den mellemstore varebil, når aftalen udløber, og du hæfter ikke for restværdien. Vi har valgt de bedste biler blandt tilbuddene ud fra anmeldelser og mål. Under dem står alle %n% tilbud med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "De bedste mellemstore varebiler på operationel leasing",
    vaegt: "Vi har kun valgt mellem de operationelle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvilken mellemstor varebil er bedst at lease operationelt?"
  },
  "finansiel-leasing-mellemstor-varebil": {
    h1: "Bedste mellemstore varebil på finansiel leasing",
    title: "Finansiel leasing af mellemstor varebil: vores valg %aar%",
    desc: "Vi har valgt de bedste mellemstore varebiler blandt %n% finansielle leasingtilbud. Ydelse, udbetaling og restværdi fra %fra% kr./md. uden moms.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber. Vi har valgt de bedste mellemstore varebiler blandt tilbuddene ud fra anmeldelser og mål. Under dem står alle %n% tilbud med ydelse, udbetaling og restværdi side om side.",
    valg_overskrift: "De bedste mellemstore varebiler på finansiel leasing",
    vaegt: "Vi har kun valgt mellem de finansielle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvilken mellemstor varebil er bedst at lease finansielt?"
  },
  "operationel-leasing-stor-varebil": {
    h1: "Bedste store varebil på operationel leasing",
    title: "Operationel leasing af stor varebil: vores valg og %n% tilbud",
    desc: "Store varebiler på operationel leasing, hvor du afleverer bilen, når aftalen udløber. Vi har valgt de bedste. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Ved operationel leasing afleverer du den store varebil, når aftalen udløber, og leasingselskabet bærer risikoen for, hvad den er værd. Vi har valgt de bedste biler blandt tilbuddene ud fra anmeldelser og mål. Under dem står alle %n% tilbud med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "De bedste store varebiler på operationel leasing",
    vaegt: "Vi har kun valgt mellem de operationelle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, nyttelasten og lastrummet.",
    faq_bedste: "Hvilken stor varebil er bedst at lease operationelt?"
  },
  "finansiel-leasing-stor-varebil": {
    h1: "Bedste store varebil på finansiel leasing",
    title: "Finansiel leasing af stor varebil: vores valg fra %fra% kr.",
    desc: "Vi har valgt de bedste store varebiler blandt %n% finansielle leasingtilbud. Ydelse, udbetaling og restværdi fra %fra% kr./md. uden moms.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber, og du eller en køber, du anviser, overtager bilen til det beløb. Vi har valgt de bedste store varebiler blandt tilbuddene ud fra anmeldelser og mål. Under dem kan du sammenligne restværdien lige så let som ydelsen.",
    valg_overskrift: "De bedste store varebiler på finansiel leasing",
    vaegt: "Vi har kun valgt mellem de finansielle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne, nyttelasten og lastrummet.",
    faq_bedste: "Hvilken stor varebil er bedst at lease finansielt?"
  },
  "kassevogn-l2h2": {
    h1: "Bedste kassevogn i L2H2",
    title: "Kassevogn L2H2 leasing: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste kassevogne i L2H2 ud fra anmeldelser og lastrum. Sammenlign %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "L2H2 betyder mellemlang med højt tag, typisk med 1,8 til 1,9 m lastrumshøjde. L2 er ikke en fælles standard, så lastrummets længde svinger med over en meter fra mærke til mærke. Vi har valgt de bedste ud fra anmeldelser og mål, og under dem står alle tilbud, hvor forhandleren eller leasingselskabet selv skriver L2H2.",
    valg_overskrift: "De bedste kassevogne i L2H2",
    vaegt: "Vi har lagt mest vægt på lastrummet, nyttelasten og anmeldelserne.",
    faq_bedste: "Hvad er den bedste kassevogn i L2H2?"
  },
  "varebil-l3h2": {
    h1: "Bedste varebil i L3H2",
    title: "Varebil L3H2 leasing: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste lange kassevogne med højt tag ud fra anmeldelser og lastrum. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "L3H2 er den lange kassevogn med højt tag, typisk med omkring 13 m³ lastrum. Den passer til flytning, distribution og håndværkere med meget materiel. Vi har valgt de bedste ud fra anmeldelser og mål, og under dem står alle tilbud, hvor forhandleren eller leasingselskabet selv skriver L3H2.",
    valg_overskrift: "De bedste varebiler i L3H2",
    vaegt: "Vi har lagt mest vægt på lastrummet, nyttelasten og det, testerne skriver om bilen med læs.",
    faq_bedste: "Hvad er den bedste varebil i L3H2?"
  },
  "varebil-4x4": {
    h1: "Bedste varebil med 4x4",
    title: "Varebil 4x4 leasing %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste kassevogne og pickupper med firehjulstræk ud fra anmeldelser og træk. Se tilbud fra %fra% kr./md. uden moms.",
    intro: "Firehjulstræk hedder noget forskelligt fra mærke til mærke: 4x4, 4WD, AWD, 4MOTION eller 4MATIC. Vi har valgt de bedste blandt bilerne, hvor forhandleren eller leasingselskabet selv skriver, at bilen har firehjulstræk, ud fra anmeldelser og mål. Under dem står alle tilbuddene.",
    valg_overskrift: "De bedste varebiler med 4x4",
    vaegt: "Vi har lagt mest vægt på trækket, lastrummet og det, testerne skriver om bilen uden for asfalten.",
    faq_bedste: "Hvad er den bedste varebil med 4x4?"
  },
  "lang-varebil": {
    h1: "Bedste lange varebil",
    title: "Lang varebil: de bedste med det længste lastrum",
    desc: "Vi har valgt de bedste varebiler med langt lastrum ud fra anmeldelser og mål. %n% modeller efter lastrumslængde, fra %fra% kr./md. uden moms.",
    intro: "Skal der rør, profiler, lister eller stiger med, er det lastrummets længde på gulvet, der tæller. Vi har valgt de bedste lange varebiler ud fra længden, anmeldelserne og prisen. Under dem står alle modellerne sorteret efter producentens mål, med den længste øverst.",
    valg_overskrift: "De bedste lange varebiler",
    vaegt: "Vi har lagt mest vægt på lastrummets længde, nyttelasten og anmeldelserne.",
    faq_bedste: "Hvilken lang varebil er bedst?"
  },
  "pickup-leasing": {
    h1: "Bedste pickup til erhverv",
    title: "Pickup leasing til erhverv %aar%: vores valg fra %fra% kr./md.",
    desc: "Vi har sammenlignet pickupperne på gule plader ud fra anmeldelser, træk og pris. Se vores valg og tilbud fra %fra% kr./md. uden moms.",
    intro: "En pickup kan køre på gule plader som en varebil, hvis den er indrettet til godstransport. Den vælges typisk for trækket og firehjulstrækket frem for lastrummet. Vi har sammenlignet de pickupper, vi har tilbud på, ud fra anmeldelser, træk og pris.",
    valg_overskrift: "Vores valg af pickup",
    vaegt: "Vi har lagt mest vægt på trækket, anmeldelserne og prisen.",
    faq_bedste: "Hvad er den bedste pickup til erhverv i %aar%?"
  },
  "bedste-varevogn-til-prisen": {
    title: "Bedste varevogn til prisen %aar%: vores valg og pris pr. m³",
    desc: "Vi har valgt de varevogne, der giver mest for pengene, ud fra pris pr. m³ og anmeldelser. %n% modeller med udbetalingen regnet med, uden moms.",
    intro: "Den billigste varevogn er sjældent den, der giver mest for pengene. Vi har delt den samlede månedspris med lastrummet i m³ og læst, hvad anmelderne skriver om bilerne. Ud fra det har vi valgt de varevogne, der giver mest for pengene, og under dem står alle modellerne sorteret efter pris pr. m³.",
    valg_overskrift: "Mest varevogn for pengene",
    vaegt: "Vi har lagt mest vægt på prisen pr. m³ og på anmeldelserne, så bilen også er god at køre i og leve med.",
    faq_bedste: "Hvilken varevogn giver mest for pengene?"
  },
  "varebil-til-europaller": {
    h1: "Bedste varebil til europaller",
    title: "Varebil til europaller: de bedste og antal paller pr. model",
    desc: "Vi har valgt de bedste varebiler til europaller ud fra antal paller, nyttelast og anmeldelser. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "En europalle måler 1.200 × 800 mm, og det er bredden mellem hjulkasserne, der afgør, om den kan stå på tværs. Vi har valgt de bedste biler til paller ud fra producentens pallettal, nyttelasten og anmeldelserne. Under dem står alle modellerne, hvor producenten oplyser antallet af paller.",
    valg_overskrift: "De bedste varebiler til europaller",
    vaegt: "Vi har lagt mest vægt på antallet af paller, nyttelasten og det, testerne skriver om læsning og lastrum.",
    faq_bedste: "Hvilken varebil er bedst til europaller?"
  },
  "mellemstor-varebil": {
    h1: "Bedste mellemstore varebil %aar%",
    title: "Mellemstor varebil leasing %aar%: de bedste og %n% tilbud",
    desc: "Vi har læst anmeldelser af Transit Custom, Transporter, Vito, Trafic og Expert og valgt de bedste mellemstore varebiler. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Den mellemstore varebil har plads til reoler og tre europaller og kan stadig parkeres i en almindelig gade. Vi har læst anmeldelser og tests af kassevognene på 4,75 til 5,4 m og valgt de bedste. Under dem kan du sammenligne alle %n% tilbud, også på elbilerne.",
    valg_overskrift: "De bedste mellemstore varebiler",
    vaegt: "Vi har lagt mest vægt på anmeldelserne, kørslen, nyttelasten og lastrummet, og derefter på prisen.",
    faq_bedste: "Hvad er den bedste mellemstore varebil i %aar%?"
  },
  "operationel-leasing-varebil": {
    h1: "Bedste varebil på operationel leasing",
    title: "Operationel leasing af varebil: vores valg og %n% tilbud",
    desc: "Operationel leasing af varebil uden restværdi. Vi har valgt de bedste biler blandt %n% tilbud fra %fra% kr./md. uden moms. Få tilbud gratis.",
    intro: "Ved operationel leasing afleverer du bilen, når aftalen udløber, og der er ingen restværdi at hæfte for. Vi har valgt de bedste varebiler blandt tilbuddene ud fra anmeldelser og mål. Under dem står alle %n% tilbud i alle størrelser.",
    valg_overskrift: "De bedste varebiler på operationel leasing",
    vaegt: "Vi har kun valgt mellem de operationelle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease operationelt?"
  },
  "finansiel-leasing-varebil": {
    h1: "Bedste varebil på finansiel leasing",
    title: "Finansiel leasing af varebil: vores valg fra %fra% kr./md.",
    desc: "Vi har valgt de bedste varebiler blandt %n% finansielle leasingtilbud. Ydelse, udbetaling, restværdi og løbetid side om side, uden moms.",
    intro: "Ved finansiel leasing hæfter du for en restværdi, når aftalen udløber. Du eller en køber, du anviser, overtager bilen til det beløb, og er den mindre værd, betaler du forskellen. Vi har valgt de bedste biler blandt de %n% tilbud ud fra anmeldelser og mål.",
    valg_overskrift: "De bedste varebiler på finansiel leasing",
    vaegt: "Vi har kun valgt mellem de finansielle tilbud, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst at lease finansielt?"
  },
  "kassevogn-leasing": {
    h1: "Kassevogn leasing: de bedste kassevogne til erhverv",
    title: "Kassevogn leasing %aar%: de bedste og %n% tilbud",
    desc: "Vi har valgt de bedste kassevogne i hver størrelse ud fra anmeldelser og tests. Sammenlign %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Kassevognen er den mest leasede erhvervsbil, og den fås fra små bybiler som Caddy og Berlingo til store 3,5-tons biler som Sprinter og Crafter. Vi har valgt den bedste kassevogn i hver størrelse ud fra anmeldelser og tests. Under dem står alle tilbuddene med udbetalingen fordelt over løbetiden.",
    valg_overskrift: "Den bedste kassevogn i hver størrelse",
    vaegt: "Vi har valgt den bedste i hver størrelse og lagt mest vægt på anmeldelserne, lastrummet og nyttelasten.",
    faq_bedste: "Hvad er den bedste kassevogn i %aar%?"
  },
  "erhvervsbil-leasing": {
    h1: "Erhvervsbil leasing: de bedste varebiler, kassevogne og pickupper",
    title: "Erhvervsbil leasing %aar%: de bedste og %n% modeller",
    desc: "Vi har valgt de bedste erhvervsbiler på gule plader ud fra anmeldelser og tests. %n% varebiler, ladbiler og pickupper fra %fra% kr./md. uden moms.",
    intro: "Her står hver erhvervsbil på gule plader én gang med det billigste tilbud, vi har på den. Det gælder varebiler, kassevogne, ladbiler og pickupper. Øverst har vi valgt de bedste ud fra anmeldelser og tests, så du har et sted at begynde.",
    valg_overskrift: "De bedste erhvervsbiler",
    vaegt: "Vi har valgt bredt mellem størrelserne og lagt mest vægt på anmeldelserne, kåringerne og bilens mål.",
    faq_bedste: "Hvad er den bedste erhvervsbil at lease i %aar%?"
  },
  "varebil-med-automatgear": {
    h1: "Bedste varebil med automatgear",
    title: "Varebil med automatgear %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste varebiler med automatgear, både diesel og el, ud fra anmeldelser. %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Automatgear gør byen og de mange stop lettere, og alle elvarebiler er automatiske. Vi har valgt de bedste blandt elvarebilerne og de dieseltilbud, hvor forhandleren eller leasingselskabet selv skriver automatgear. Under dem står alle %n% tilbud.",
    valg_overskrift: "De bedste varebiler med automatgear",
    vaegt: "Vi har lagt mest vægt på det, testerne skriver om gearkassen og kørslen, og derefter på lastrummet og prisen.",
    faq_bedste: "Hvad er den bedste varebil med automatgear?"
  },
  "varebil-med-lav-ejerafgift": {
    h1: "Bedste varebil med lav grøn ejerafgift",
    title: "Varebil med lav grøn ejerafgift: de bedste %aar%",
    desc: "Vi har valgt de bedste varebiler med lav grøn ejerafgift ud fra anmeldelser og mål. %n% modeller med leasingpris fra %fra% kr./md. uden moms.",
    intro: "Den grønne ejerafgift betales hvert halve år, så længe bilen er indregistreret, og den står sjældent i leasingtilbuddet. Afgiften følger bilens CO₂-udledning, så elbilerne har den laveste. Vi har valgt de bedste biler med lav afgift ud fra anmeldelser og mål, og under dem står alle modellerne med den laveste afgift øverst.",
    valg_overskrift: "De bedste varebiler med lav ejerafgift",
    vaegt: "Vi har kun valgt mellem bilerne med den laveste afgift, og blandt dem har vi lagt mest vægt på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst, hvis afgiften skal være lav?"
  },
  "varebil-med-lavt-braendstofforbrug": {
    h1: "Bedste varebil med lavt brændstofforbrug",
    title: "Varebil med lavt brændstofforbrug: de bedste %aar%",
    desc: "Vi har valgt de bedste diesel- og benzinvarebiler med lavt forbrug ud fra WLTP og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Brændstoffet er en af de største udgifter på en varebil, og det står aldrig i leasingtilbuddet. Vi har valgt de bedste varebiler med lavt forbrug ud fra producentens tal og det, testerne har målt. Under dem står alle diesel- og benzinmodellerne efter forbruget efter WLTP.",
    valg_overskrift: "De bedste varebiler med lavt forbrug",
    vaegt: "Vi har lagt mest vægt på forbruget efter WLTP og i testene, og derefter på anmeldelserne og bilens mål.",
    faq_bedste: "Hvilken varebil er bedst, hvis forbruget skal være lavt?"
  },
  "elvarebil-med-lang-raekkevidde": {
    h1: "Bedste elvarebil med lang rækkevidde",
    title: "Elvarebil med lang rækkevidde %aar%: de bedste",
    desc: "Vi har valgt de bedste elvarebiler med lang rækkevidde ud fra WLTP og rækkevidden i tests. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Rækkevidden afgør, om en elvarebil passer til din kørsel. Vi har valgt de bedste ud fra producentens rækkevidde efter WLTP og den rækkevidde, testerne har målt om vinteren og på motorvej. Under dem står alle elvarebilerne efter WLTP, med den længste øverst.",
    valg_overskrift: "De bedste elvarebiler med lang rækkevidde",
    vaegt: "Vi har lagt mest vægt på rækkevidden i testene og efter WLTP, og derefter på lastrummet og ladningen.",
    faq_bedste: "Hvilken elvarebil er bedst til lange ture?"
  },
  "elvarebil-med-stort-lastrum": {
    h1: "Bedste elvarebil med stort lastrum",
    title: "Elvarebil med stort lastrum %aar%: de bedste",
    desc: "Vi har valgt de bedste elvarebiler med stort lastrum ud fra m³, nyttelast og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "I de fleste elvarebiler tager batteriet ikke plads fra varerummet, men det tager af nyttelasten. Vi har valgt de bedste elvarebiler med stort lastrum ud fra rumfanget, nyttelasten og anmeldelserne. Under dem står alle modellerne efter lastrummets rumfang, med det største øverst.",
    valg_overskrift: "De bedste elvarebiler med stort lastrum",
    vaegt: "Vi har lagt mest vægt på lastrummet og nyttelasten, og derefter på rækkevidden i testene.",
    faq_bedste: "Hvilken elvarebil er bedst, når der skal meget med?"
  },
  "stoerste-varebil-paa-almindeligt-koerekort": {
    h1: "Største varebil på almindeligt kørekort",
    title: "Største varebil på almindeligt kørekort %aar%: vores valg",
    desc: "Vi har valgt de bedste store varebiler, du må køre på B-kørekort, ud fra lastrum, nyttelast og anmeldelser. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Med kørekort til kategori B må du køre biler med en tilladt totalvægt på højst 3.500 kg. Vi har valgt de bedste store varebiler inden for grænsen ud fra lastrummet, nyttelasten og anmeldelserne. Under dem står alle modellerne sorteret efter lastrum.",
    valg_overskrift: "De bedste store varebiler på B-kørekort",
    vaegt: "Vi har lagt mest vægt på lastrummet og nyttelasten, fordi de største biler har mindst at give af inden for 3.500 kg.",
    faq_bedste: "Hvad er den største varebil, man må køre på almindeligt kørekort?"
  },
  "elvarebil-med-hurtig-opladning": {
    h1: "Bedste elvarebil med hurtig opladning",
    title: "Elvarebil med hurtig opladning %aar%: de bedste",
    desc: "Vi har valgt de elvarebiler, der lader hurtigst, ud fra producentens tal og ladetiden i tests. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "På en lynlader afgør bilens maksimale ladeeffekt, hvor hurtigt batteriet bliver fyldt, men det er den gennemsnitlige effekt, der tæller i praksis. Vi har valgt de bedste ud fra producentens tal og den ladetid, testerne har målt. Under dem står alle elvarebilerne efter ladeeffekt.",
    valg_overskrift: "De bedste elvarebiler til hurtig opladning",
    vaegt: "Vi har lagt mest vægt på ladetiden i testene og på, hvor mange kilometer bilen kører på en opladning.",
    faq_bedste: "Hvilken elvarebil lader hurtigst?"
  },
  "elvarebil-med-v2l": {
    h1: "Bedste elvarebil med strøm til værktøj (V2L)",
    title: "Elvarebil med V2L til værktøj: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste elvarebiler, hvor batteriet kan give strøm til værktøj, ud fra anmeldelser og mål. %n% modeller fra %fra% kr./md. uden moms.",
    intro: "Med V2L giver bilens batteri strøm til værktøj, kompressor eller lys, hvor der ikke er en stikkontakt. Vi har valgt de bedste blandt elvarebilerne, hvor producenten oplyser V2L, ud fra anmeldelser og mål. Under dem står alle modellerne med det billigste tilbud på hver.",
    valg_overskrift: "De bedste elvarebiler med V2L",
    vaegt: "Vi har lagt mest vægt på stikkene og effekten, rækkevidden og anmeldelserne.",
    faq_bedste: "Hvilken elvarebil er bedst til at give strøm til værktøj?"
  },
  "varebil-til-haandvaerker": {
    title: "Varevogn til håndværker %aar%: de bedste fra %fra% kr./md.",
    desc: "Vi har valgt de bedste kassevogne til håndværkere ud fra anmeldelser, nyttelast og træk. %n% tilbud med mindst 1.000 kg nyttelast fra %fra% kr./md. uden moms.",
    intro: "Værktøj og materialer skal med, og ofte også en trailer. Vi har valgt de bedste blandt kassevognene med mindst 1.000 kg nyttelast og 2.000 kg trækvægt ud fra anmeldelser, mål og pris. Under dem står alle %n% tilbud.",
    valg_overskrift: "De bedste varevogne til håndværkere",
    vaegt: "Vi har lagt mest vægt på anmeldelserne, nyttelasten, trækket og lastrummet.",
    faq_bedste: "Hvad er den bedste varevogn til en håndværker?",
    faq_ret: { 0: null }
  },
  "diesel-varebil": {
    h1: "Bedste dieselvarebil %aar%",
    title: "Dieselvarebil leasing %aar%: de bedste og %n% tilbud",
    desc: "Vi har valgt de bedste dieselvarebiler i hver størrelse ud fra anmeldelser og forbrug. Sammenlign %n% tilbud fra %fra% kr./md. uden moms.",
    intro: "Halvdelen af de nye varebiler er elektriske, men de fleste tilbud på siden er stadig diesel. Vi har valgt de bedste dieselvarebiler ud fra anmeldelser, forbrug og mål. Under dem står alle %n% tilbud med forbrug og nyttelast ved hver bil.",
    valg_overskrift: "De bedste dieselvarebiler",
    vaegt: "Vi har valgt den bedste i hver størrelse og lagt mest vægt på anmeldelserne, forbruget og nyttelasten.",
    faq_bedste: "Hvad er den bedste dieselvarebil i %aar%?"
  }
};
