# pevo-web

Website for **PEVO Pilot** -- open source energy management.

Built with [Hugo](https://gohugo.io) and published at
https://blappm.github.io/pevo-web/ on every push to `main`
(see `.github/workflows/pages.yml`).

## Inhalte bearbeiten

Alle Texte der Startseite stehen in kleinen Dateien im Ordner
[`content/home/`](content/home/), eine Datei pro Abschnitt:

| Datei           | Abschnitt                                        |
|-----------------|--------------------------------------------------|
| `hero.md`       | Kopfbereich ganz oben, mit Dashboard-Bild        |
| `features.md`   | Die drei Feature-Karten                          |
| `hardware.md`   | Hardware-Zentrale mit Lüfter-Grafik              |
| `software.md`   | Regelwerk mit Code-Beispiel und Screenshot       |
| `tech.md`       | ZEV-Abrechnung und P(U)-Regelung                 |
| `community.md`  | Aufruf zur Community                             |

Navigation, GitHub-/Sponsor-Links und die Fusszeile stehen in
[`hugo.toml`](hugo.toml).

**So geht's direkt auf GitHub:**

1. Datei öffnen, auf das Stift-Symbol (*Edit this file*) klicken.
2. Text ändern. Oben zwischen den beiden `---` stehen die einzelnen
   Felder (`title: "..."`); unterhalb der zweiten `---` steht der
   Haupttext des Abschnitts.
3. *Commit changes* klicken. Nach etwa einer Minute ist die Änderung
   online.

**Regeln für die Felder oben:**

- Text immer in Anführungszeichen `"..."`. Kommt im Text selbst ein `"`
  vor, die ganze Zeile in einfache Anführungszeichen `'...'` setzen.
- Einrückung (Leerzeichen am Zeilenanfang) nicht verändern.
- `**fett**` und `*kursiv*` funktionieren in allen Texten.
- `weight` bestimmt die Reihenfolge der Abschnitte (kleiner = weiter oben).
- Icons: Namen von https://icons.getbootstrap.com ohne `bi-` davor.

**Neue Seite:** Datei `content/<name>.md` anlegen, z. B.
`content/impressum.md`:

```
---
title: "Impressum"
---
Hier steht der Text in **Markdown**.
```

Sie ist dann unter `https://blappm.github.io/pevo-web/impressum/` erreichbar.

**Wenn etwas schiefgeht:** Ist eine Datei fehlerhaft, bleibt die alte
Version online. Unter *Actions* erscheint der Lauf rot; die Fehlermeldung
nennt die betroffene Datei.

## Local preview

```
hugo server
```

and open http://localhost:1313/pevo-web/. Requires Hugo 0.170.0 or newer.
