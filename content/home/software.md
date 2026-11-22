---
# Regelwerk-Abschnitt mit Code-Beispiel und Screenshot.
layout: software
weight: 40

eyebrow: "// AUTOMATION MIT LOGIK"
title: "21 Bedingungen. 13 Aktoren."
# Text unter dem Code-Beispiel. **fett** wird fett dargestellt.
note: 'Dank des **"The winner takes it all"-Prinzips** greift immer genau die erste Regel, deren Bedingungen zu 100% erfüllt sind. Per Drag & Drop lässt sich die Priorität im UI sekundenschnell verschieben.'
image: "img/regelsteuerwerk-ui.png"
image_alt: "PEVO Pilot Regelsteuerwerk Benutzeroberfläche"

# Code-Beispiel als HTML (farbige Hervorhebung). Nur bei Bedarf ändern.
code_html: |
  <span class="text-info">if</span> (wetterprognose_heute == "sonnig" <span class="text-info">and</span> batterie_soc &lt; 30) {<br>
  &nbsp;&nbsp;&nbsp;&nbsp;priorisiere_ladung = "batterie"; <span class="text-success">// Regelt automatisch ein</span><br>
  }
---
Statische Laderegeln greifen bei wechselhaftem Wetter oft zu kurz. PEVO Pilot nutzt ein dynamisches Regelsteuerwerk, das komplexe logische Verknüpfungen spielend einfach macht.
