const screenshots = [
  {
    file: "img/screenshot-1.png",
    tag: "ECHTZEIT-MONITORING",
    title: "Dashboard und Schaltfläche",
    visible: "Animierter Energiefluss zwischen PV-Strings, Batterie, Hausverbrauch und Netz. Anzeige und Schaltfläche der Regelgruppen/Features.",
    action: "Überwacht alle Leistungsflüsse alle 2-3 Sekunden und stellt die wichtigsten Kennzahlen dar. Regelgruppen lassen sich auf dem unteren Teil des Dashboards ganz simpel ein- und ausschalten."
  },
  {
    file: "img/screenshot-8.png",
    tag: "48H-AUTOPILOT (Berechnung)",
    title: "Lineare Optimierung für die optimale Batterienutzung",
    visible: "Rohdaten für die Steuerung: Optimierte 48h-Lade-/Entladepläne für eine bestmögliche Batterienutzung mit PV-Ertragsprognose, Hausverbrauch, EPEX-Stundenpreisen.",
    action: "Berechnet alle fünf Minuten neu, wann Solarstrom gespeichert, direkt verbraucht oder zu Spitzenpreisen aus der Batterie eingespeist wird."
  },
  {
    file: "img/screenshot-2.png",
    tag: "48H-AUTOPILOT (Visualisierung)",
    title: "Darstellung eines oder mehrerer 48h-Lade-/Entladepläne",
    visible: "Visualisierung: Optimierte 48h-Lade-/Entladepläne für eine bestmögliche Batterienutzung mit PV-Ertragsprognose, Hausverbrauch, EPEX-Stundenpreisen.",
    action: "Stellt einen oder mehrere Lade-/Entladepläne für die nächsten 48 Stunden grafisch dar, ideal auch für Simulationen zwischen verschiedenen Batterie-Grössen oder Vergleiche zwischen den Ladeplänen mit anderen minimalen Rest-SOCs."
  },
  {
    file: "img/screenshot-3.png",
    tag: "REGELWERK",
    title: "Priorisierte EMS-Steuerung",
    visible: "Priorisierte Regelverwaltung mit 20 Bedingungen und 13 Aktionen.",
    action: "Wertet Regeln der Reihenfolge nach aus bis eine passt – per Drag-and-Drop sortierbar und als Gruppen schaltbar."
  },
  {
    file: "img/screenshot-4.png",
    tag: "NETZANALYSE",
    title: "Netz-Monitoring On-Grid & Off-Grid",
    visible: "Spannungsverlauf L1–L3 in Volt sowie Tabelle mit aktuellen, maximalen und minimalen Werten für Strom und Frequenz.",
    action: "Zeigt Netzschwankungen im Netz- und Ersatzstrombetrieb, ideal bei der Fehlersuche nach Abschaltungen."
  },
  {
    file: "img/screenshot-5.png",
    tag: "TARIFE",
    title: "Tarif-Engine",
    visible: "Zeitfenster für die jeweiligen Tarife, Feiertagsregeln, Marktprämien",
    action: "Tarifverwaltung für manuelle oder dynamische Tarife bei Strom-Import, Export und Netz. Es können Tarife und Tarifzeiten mutiert oder neu erfasst werden."
  },
  {
    file: "img/screenshot-6.png",
    tag: "ZEV",
    title: "ZEV-Abrechnung",
    visible: "Abrechnungstool für ZEV-Teilnehmer.",
    action: "Erstellt ZEV-Abrechnungen auf Basis von erfassten MID-Zählerdaten."
  },
  {
    file: "img/screenshot-9.png",
    tag: "KONFIGURATION",
    title: "Elegante Geräte-Auswahl",
    visible: "Verfügbare Geräte im lokalen Ethernet. Die rot markierten Einträge sind vom Modbus-RTU Proxy, es sind also zwei RS485 Sticks in diesem PEVO-Setup eingesteckt",
    action: "Scannt das lokale Netz und stellt die gefundene Geräte sichtbar dar."
  },
  {
    file: "img/screenshot-7.png",
    tag: "MONITORING",
    title: "Externer Energie-Monitor",
    visible: "Externer Full-Screen Energie-Monitor",
    action: "Zeigt das Echtzeit-Dashboard mit Ertrags- und Bezugsprognose und effektivem Ertrag/Bezug auf einen zusätzlichen HTTP-Port für den Kiosk-Modus auf Präsentation-Displays"
  }
];

const newsItems = [
  {
    date: "September 2026",
    category: "Autopilot",
    title: "Automatische Steuerung (Autopilot) bereit für die dynamischen EPEX-Tarife",
    text: "Nach einer intensiven Testphase mit Tests von diversen Edge-Cases ist die vollautomatische Batteriesteuerung nun einsatzbereit. Ein Laden der Batterie mit Netzstrom ist nicht vorgesehen, Entladen von Batteriestrom ins Netz ist möglich."
  },
  {
    date: "Oktober 2026",
    category: "Integration",
    title: "ZEV-Abrechnung",
    text: "Lastgangdaten von MID-Zählern werden direkt verarbeitet – inklusive PDF-Rechnungserstellung per Klick. PV-Strom und Strom aus der Batterie können unterschiedlich bepreist werden.<br><br> Beispiel für eine generierte <a href='pdf/ZEV_Rechnung_Einlegerwohnung_0bb432f8-7fe9-11f0-905d-8bbc69c02d0d_Q4_2026_prov.pdf'>ZEV-Rechnung</a>"
  },
  {
    date: "28.11.2026",
    category: "Selbstbauertagung",
    title: "PEVO wird an der Selbstbauertagung in Olten offiziell vorgestellt.",
    text: "<a href='https://www.vese.ch/pv-praxis-tagung-2026/'>Link zur Tagung</a>"
  }
];

let currentIdx = 0;

function initPage() {
  const container = document.getElementById("showcaseContainer") || document.getElementById("galleryGrid");
  if (container) {
    container.innerHTML = screenshots.map((s, idx) => {
      const reverseClass = idx % 2 === 1 ? "flex-lg-row-reverse" : "";
      return `
        <div class="row align-items-center g-4 g-lg-5 ${reverseClass}">
          <div class="col-lg-7">
            <div class="card card-pevo shadow-sm overflow-hidden shot-card" onclick="openLightbox(${idx})">
              <div class="shot-img-wrap">
                <img src="${s.file}" alt="${s.title}" loading="lazy">
                <span class="badge bg-dark bg-opacity-75 text-white position-absolute bottom-0 end-0 m-3">⛶ Vollbild</span>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <span class="text-primary fw-bold small">${s.tag}</span>
            <h3 class="h3 fw-bold mt-1 mb-3">${s.title}</h3>
            <p class="mb-2"><strong class="text-primary">Sichtbar:</strong> ${s.visible}</p>
            <p class="text-muted-pevo mb-4"><strong>Funktion:</strong> ${s.action}</p>
            <button class="btn btn-outline-primary btn-sm" onclick="openLightbox(${idx})">Screenshot im Vollbild öffnen</button>
          </div>
        </div>
      `;
    }).join("");
  }

  const newsGrid = document.getElementById("newsGrid");
  if (newsGrid) {
    newsGrid.innerHTML = newsItems.map(n => `
      <div class="col-md-4">
        <article class="card card-pevo shadow-sm h-100 p-4">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-primary-subtle text-primary border border-primary-subtle">${n.category}</span>
            <span class="text-muted-pevo small">${n.date}</span>
          </div>
          <h3 class="h5 fw-bold mb-2">${n.title}</h3>
          <p class="text-muted-pevo small mb-0">${n.text}</p>
        </article>
      </div>
    `).join("");
  }
}

function renderSlide() {
  const s = screenshots[currentIdx];
  document.getElementById("lbImg").src = s.file;
  document.getElementById("lbImg").alt = s.title;
  document.getElementById("lbCounter").textContent = `${currentIdx + 1} / ${screenshots.length}`;
  document.getElementById("lbTitle").textContent = s.title;
  document.getElementById("lbVisible").innerHTML = `<strong class="text-info">Sichtbar:</strong> ${s.visible}`;
  document.getElementById("lbAction").innerHTML = `<strong class="text-warning">Funktion:</strong> ${s.action}`;
}

function openLightbox(idx) {
  currentIdx = idx;
  renderSlide();
  const lb = document.getElementById("lightbox");
  lb.classList.add("active");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("active");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function changeSlide(step) {
  currentIdx = (currentIdx + step + screenshots.length) % screenshots.length;
  renderSlide();
}

document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "ArrowLeft") changeSlide(-1);
});

document.addEventListener("DOMContentLoaded", initPage);
