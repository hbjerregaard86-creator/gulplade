---
name: mail-dmarc
description: "kontakt@gulplade.dk modtages via Cloudflare Email Routing og sendes fra gratis Gmail \"send som\"; DKIM mangler, så pressemails viser \"via gmail.com\""
metadata:
  node_type: memory
  type: project
  originSessionId: 646c0710-d341-4791-87e8-f08c72606c35
  modified: 2026-10-04T15:42:20.804Z
---

DNS-status den 04-10-2026: Cloudflare Email Routing (MX route1-3) modtager kontakt@gulplade.dk. SPF er `include:_spf.mx.cloudflare.net include:_spf.google.com ~all`, og DMARC er `p=none` uden rua. google._domainkey har tom p= (en tilbagekaldt nøgle). Gmail "send som" fra gratis Gmail signerer med gmail.com, så DMARC-alignment fejler, og modtageren ser "via gmail.com".

LØST 04-10-2026: Brevo-kontoen "Leasio" (gratis) har gulplade.dk og leasio.dk som godkendte domæner (CNAME brevo1/brevo2._domainkey og brevo-code-TXT i Cloudflare) og afsenderne kontakt@gulplade.dk og kontakt@leasio.dk. Gmail "Send mail som" for begge sender via smtp-relay.brevo.com:587 (SMTP-nøglen "Gmail"). DMARC p=none med rua til Cloudflare DMARC Management på begge domæner (leasio.dk havde ingen DMARC før). Testmails kl. 17:40 blev leveret uden "via gmail.com". `*._domainkey` med tom p= på gulplade.dk er en bevidst spærring og skal blive stående. Næste skridt: efter et par uger med rene DMARC-rapporter strammes politikken til p=quarantine. Brevo gratis: 300 mails om dagen.

**Why:** Pressemails og mails til forhandlere sendes fra kontakt@gulplade.dk og må ikke ende i spam.
**How to apply:** Tjek DNS igen (cloudflare-dns.com/dns-query), før du siger, at mails kan sendes. Ændringer i Cloudflare og Gmail laver brugeren selv. Se [[linkedin-side]] for øvrige kanaler.
