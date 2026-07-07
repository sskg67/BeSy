# Projekt-Kontext: Betriebssysteme Mega-Zusammenfassung

> Diese Datei ist für **Claude** als Gedächtnisstütze. Hier stehen alle Bedingungen & der Stand des Projekts, damit ich (Claude) nichts vergesse.

## Ziel
Eine ausführliche, interaktive Lern-Website ("Mega-Zusammenfassung") für das Uni-Modul **Betriebssysteme**.

## Aufbau der Website
- **Hub / Homepage** (`index.html`): Übersicht mit **10 Kapitel-Kästchen**.
  - Jedes Kästchen führt auf eine **Unterseite** (eigenes Kapitel).
  - Jedes Kästchen hat **zusätzlich einen Block/Button**, um das **Skript-PDF** anzusehen.
- **10 Unterseiten** (eine pro Thema/Kapitel).

## Aufbau einer Kapitel-Unterseite
- Kapitel besteht aus mehreren **Modulen**.
- **Pro Modul** gibt es am Ende **Fragen** (zum Selbsttesten).
- Das **letzte Modul** jedes Kapitels bezieht seine Fragen aus den **Altklausuren** (Ordner `Altprüfungen/`).
- **Ausführliche Erklärungen** in den Modulen.
- **Graphen / Skizzen / Diagramme** einbauen, damit Inhalte anschaulicher werden (SVG bevorzugt).

## Die 10 Themen (aus Ordner `Themen/`)
| Nr | Thema | PDF |
|----|-------|-----|
| 1 | Einführung | OS_1_Einfuehrung.pdf |
| 2 | Grundlagen | OS_2_Grundlagen.pdf |
| 3 | Prozesse | OS_3_Prozesse.pdf |
| 4 | Scheduling | OS_4_Scheduling.pdf |
| 5 | Threads | OS_5_Threads_deutsch.pdf |
| 6 | Synchronisation | OS_6_Synchronisation.pdf |
| 7 | Kommunikation | OS_7_Kommunikation.pdf |
| 8 | Deadlocks | OS_8_Deadlocks.pdf |
| 9 | Speicherverwaltung | OS_9_Speicherverwaltung.pdf |
| 10 | Dateisysteme | OS_10_Dateisysteme.pdf |

## ⚠️ Altklausur-Zuordnung — WICHTIG
Für das **letzte Modul** (Altklausurfragen) jedes Kapitels **NICHT raten**, sondern
`KLAUSUR_ZUORDNUNG.md` benutzen! Dort sind alle 9 Klausuren/Übungsblätter gelesen und
thematisch den 10 Kapiteln zugeordnet (welche Aufgabe = welches Kapitel).
Kernklausurthemen: Kap 4 (Scheduling), 6 (Synchronisation), 8 (Deadlocks), 9 (Speicher), 10 (Dateisysteme).
Aktueller Dozent = Prof. Lauer (WS1516, WS1920, SS21) → deren Stil bevorzugen.

## Altklausuren (Ordner `Altprüfungen/`)
- Betriebssysteme_Übungsfragen_1.pdf
- Übungsfragen Betriebssysteme_2.pdf
- Klausur-BS-SS-07.pdf, -08, -09
- Klausur_BS_SS_2011.pdf
- prüfung_OS_WiSe201516.pdf
- prüfung_OS_WS1920.pdf
- prüfung_OS_SS21_english.pdf

## Ordnerstruktur (⚠️ seit 2026-07-07 FLACH auf Root-Ebene — für GitHub Pages!)
```
BeSy/
├── PROJEKT_KONTEXT.md        <- diese Datei
├── KLAUSUR_ZUORDNUNG.md
├── index.html                <- Hub (Homepage)
├── kapitel-01.html … kapitel-10.html   <- Kapitel-Unterseiten
├── css/
│   ├── style.css              <- Hub-Styles
│   └── chapter.css             <- Kapitelseiten-Styles
├── js/
│   ├── chapters.js             <- Kapiteldaten (PDF_BASE, KLAUSUR_BASE, CHAPTERS[])
│   └── chapter.js               <- Scrollspy/Fortschrittsbalken für Kapitelseiten
├── Themen/                    <- Skript-PDFs
└── Altprüfungen/               <- Altklausuren
```
**Der alte `codebase/`-Unterordner existiert NICHT mehr** — der Nutzer wollte die Seite
auf GitHub Pages hosten, dafür müssen `index.html` & Co. im Repo-Root liegen. Alle
Dateien wurden am 2026-07-07 aus `codebase/html|css|js/` flach ins Root verschoben.

**Pfad-Konvention (root-relativ, alles im selben Verzeichnis):**
- CSS/JS aus HTML: `css/style.css`, `css/chapter.css`, `js/chapters.js`, `js/chapter.js`
- PDFs aus HTML/JS: `Themen/OS_X.pdf`, `Altprüfungen/...` (in `chapters.js`:
  `PDF_BASE = "Themen/"`, `KLAUSUR_BASE = "Altprüfungen/"`)
- Kapitel↔Kapitel und Kapitel↔Hub: einfach `kapitel-0N.html` / `index.html` (kein `../` nötig,
  alle HTML-Dateien liegen im selben Verzeichnis).
- **Neue Kapitelseiten (04–10) IMMER direkt im Projekt-Root anlegen**, z. B.
  `/Users/soleymansakha/Downloads/BeSy/kapitel-04.html` — NICHT mehr unter `codebase/html/`!

## Fortschritt / Status
- [x] Kontext-Datei angelegt
- [x] **Homepage / Hub** (ohne Inhalt/Zusammenfassung) — Kapitel-Kästchen + Skript-PDF-Block
- [x] Wiederverwendbares Kapitel-Layout: `css/chapter.css` + `js/chapter.js`
- [x] **Kapitel 1 (Einführung)** fertig — `kapitel-01.html` (5 Module)
- [x] **Kapitel 2 (Grundlagen)** fertig — `kapitel-02.html` (6 Module; Modul 6 = echte Übungsfragen SS14)
- [x] **Kapitel 3 (Prozesse)** fertig — `kapitel-03.html` (6 Module; Modul 6 = echte Klausuren SS08 A1d, SS11 A2a, Ü1 1d/1e)
- [x] **Kapitel 4 (Scheduling)** fertig — `kapitel-04.html` (6 Module; SVGs: Ziele-Hub, RR-Zeitdiagramm, EDF-Gantt, RMS-Gantt; Modul 6 = SS09 A1, SS08, SS21 Q2 RMS-Rechnung, WS1920 Prioritätsinvertierung)
- [x] **Kapitel 5 (Threads)** fertig — `kapitel-05.html` (5 Module; SVGs: Thread-Speichermodell, Benutzer-/Kernel-Thread-Modelle; Modul 5 = SS08 A1a/b/c/d/e)
- [ ] Kapitel 6–10
- [x] Altklausuren-Modul-Muster etabliert (jeweils letztes Modul)

## Vorlage einer Kapitelseite (an kapitel-01.html orientieren!)
- `<body class="chapter" style="--chapter-accent:#FARBE;">` (Farbe aus chapters.js)
- Aufbau: `.progress` → `.topbar` (Hub-Link, Breadcrumb, Skript-PDF-Button) →
  `.chapter-layout` (`nav.toc` + `main.content`).
- `main.content`: `.chapter-hero` (Kicker, H1, Intro, `.goals`-Box mit Lernzielen)
  danach mehrere `<section class="module" id="modul-N">`.
- Jedes Modul: `.module__head` (Nummer + H2) → Erklärtext → SVG-Skizze(n)
  (`figure.sketch` mit `.sk-*` Klassen) / Tabellen (`table.cmp`) / Callouts
  (`.callout--note|merke|exam`) → Fragenblock (`.questions` mit `<details class="q">`).
- **Letztes Modul = Altklausur-/Prüfungsfragen** (`.callout--exam` + `.questions`),
  Quellenangabe via `<span class="q-src">`.
- Abschluss: `nav.chapter-nav` (prev/next). Skript `js/chapter.js` einbinden.
- SVG-Skizzen nutzen die CSS-Klassen `.sk-box/.sk-accent/.sk-label/.sk-sub/.sk-faint/.sk-line/.sk-arrow`.

### Modul-Gliederung Kapitel 1 (Referenz)
1. Was ist ein BS? (DIN 44300, Schichtenmodell, Betriebsmittel)
2. Aufgaben & Aufgabenbereiche (2 Sichtweisen, 8 Bereiche)
3. Arten von BS (Batch, Time-Sharing, Echtzeit, Mobil, Verteilt)
4. Historische Entwicklung (Zeitstrahl, Multiprogramming, Moore)
5. Prüfungs-/Altklausurfragen

## Design-Notizen
- Dunkles, modernes Theme; Karten-Grid; pro Kapitel eigene Akzentfarbe + Icon.
- Kapiteldaten zentral in `js/chapters.js` (wird auch von Unterseiten wiederverwendet).
- Sprache der Oberfläche: **Deutsch**.
