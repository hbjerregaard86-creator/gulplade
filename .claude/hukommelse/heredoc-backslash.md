---
name: heredoc-backslash
description: Backslash-sekvenser overlever ikke bash-heredocs i dette miljø — skriv scripts med Write-værktøjet i stedet
metadata:
  node_type: memory
  type: feedback
  originSessionId: 5f94f33c-65e3-4668-96fb-ba8dd1d36194
  modified: 2026-09-23T09:59:53.873Z
---

I dette miljø bliver `\n` og `\\n` inde i en bash-heredoc (`cat > fil <<'EOF'`)
omsat til rigtige linjeskift, selv om afgrænseren er i anførselstegn. Det ødelægger
JavaScript- og Python-strenge, der indeholder escape-sekvenser, og fejlen viser sig
først som en syntaksfejl langt fra årsagen.

**Why:** Det er sket mindst tre gange i gulplade-projektet — i `genererRobots()`, i
forsidens `.join("\n")` og i guide-definitionerne. Hver gang kostede det en
fejlsøgningsrunde, fordi symptomet (`Invalid or unexpected token`) ikke peger på
heredoc'en.

**How to apply:** Skal en fil indeholde escape-sekvenser, Danish tegn eller nestede
anførselstegn, så skriv den med **Write**-værktøjet i stedet for en heredoc. Til små
ændringer i eksisterende filer: brug et Python-script, der læser og skriver med
`io.open(..., encoding="utf-8", newline="")`, og undgå escapes i selve
erstatningsteksten — brug fx `.join("")` frem for `.join("\n")`, eller byg
linjeskiftet med en variabel.

Se også [[gulplade-datakilder]].
