---
name: cloudflare-web-analytics
description: "Cloudflare Web Analytics måler alle besøg fra 05-10-2026; EU-undtagelsen gjorde før, at danske besøg ikke blev talt; privatlivspolitikken nævner det"
metadata:
  node_type: memory
  type: project
  originSessionId: a873a52a-0524-4bbd-92b5-25520a1c7b13
  modified: 2026-10-05T13:38:25.036Z
---

Cloudflare Web Analytics (automatisk indsat script) står på "Enable" fra 05-10-2026. Før stod det på "Enable, excluding visitor data in the EU", så danske besøg ikke blev talt (1 visning mod 61 besøg).

**Why:** Trafikloggen (Analytics → Requests) tæller forespørgsler, ikke besøg. Det bedste filter er land = DK, indholdstype = html, status = 200 og brugerens to IP'er udelukket. ChatGPT-User og Googles 2001:4860:7:…-adresser er stadig med.

**How to apply:** Privatlivspolitikken (privatlivHTML i generate-pages.js, sektion #sidevisninger) siger, at alle sidevisninger tælles uden cookies, også når man siger nej. Ændres opsætningen, skal teksten følge med. Google Analytics kører stadig kun med samtykke. Se også [[cloudflare-pages-faelder]].
