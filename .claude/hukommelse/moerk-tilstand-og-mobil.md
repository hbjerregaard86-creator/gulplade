---
name: moerk-tilstand-og-mobil
description: Mørk tilstand gav lys tekst på lys baggrund; brug altid farvevariabler, og mobilmenuen skal være den samme som på computeren
metadata:
  type: feedback
---

Den 02-10-2026 så brugeren på mobil (mørk tilstand) usynlig tekst på "Få tilbud" i toppen, søgefelter og dropdowns, den gule leadboks, lead-baren i bunden, ft-kort og "Afvis" i cookie-banneret.

Årsager:
- Komponenter tilføjet efter ca. linje 2410 i style.css brugte faste farver (#fff, #fff8e0, #e3e6ea …).
- --text-invers er lys i begge temaer, så knapper med baggrund var(--text) og tekst var(--text-invers) blev lys på lys.

**How to apply:**
- Brug altid variablerne --bg, --bg-alt, --gul-bg, --gul-streg, --border, --text, --text-soft og --text-muted, aldrig faste lyse farver.
- Knapper med baggrund var(--text) skal have tekst var(--bg) i mørk tilstand.
- Tjek nye komponenter med kontrastscriptet: browserpanel, resize_window colorScheme dark og mobile, find tekst under 3:1. Det dækkede 20 sidetyper 02-10.
- Mobilmenuen må ikke have ekstra punkter. EKSTRA i samtykke.js er tom; menuen er Leasing, Brugte, Håndbogen, Nyheder og Personbiler plus "Få tilbud".

Se også [[maalskitse-godkendelse]] og [[maalgruppe-professionelle]].
