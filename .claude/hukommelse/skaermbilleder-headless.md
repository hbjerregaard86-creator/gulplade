---
name: skaermbilleder-headless
description: "Når browserpanelet er skjult eller alle 5 dev-servere er optaget, tag fuldsideskud med headless Chrome; mobil via en 375 px iframe"
metadata:
  node_type: memory
  type: reference
  originSessionId: e5a1483d-84bd-40a7-8e3a-8fbec0b3fb00
  modified: 2026-10-06T20:43:21.236Z
---

06-10-2026: Alle fem servere i .claude/launch.json var optaget af andre chats, men http://localhost:8788 kunne stadig åbnes i panelet. Panelet var skjult, så skærmbilleder blev hvide.

- Fuldsideskud: `chrome.exe --headless=new --hide-scrollbars --user-data-dir=<scratch> --window-size=1280,11000 --screenshot=<fil> <url>`, og skær billedet i bidder med PIL.
- Headless Chrome har et minimum på ca. 500 px i bredden. Mobil: læg en side med `<iframe src="..." style="width:375px">` i skitser/ og tag skud af den.
- Mørk tilstand: `--force-dark-mode`.
- Kontrastscript i panelet: indsæt først `*{transition:none!important}`, ellers giver farveovergange falske fejl, når panelet er skjult.
- Uden panel: skitser/mobil/index.html?/sti/ viser en side i 375 px, og skitser/mobil/kontrast.html?/sti/ kører kontrastscanningen. Kør den med `chrome --headless=new --dump-dom --virtual-time-budget=6000 [--force-dark-mode]`, og læs resultatet i `<pre id="ud">`. skitser/ kommer ikke i dist.

Se [[moerk-tilstand-og-mobil]].
