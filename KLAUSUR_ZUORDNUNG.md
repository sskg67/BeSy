# Klausur-Zuordnung: Welche Aufgabe gehört zu welchem Kapitel?

> **Für Claude:** Diese Datei ist die Referenz für das jeweils **letzte Modul** (Altklausurfragen)
> jeder Kapitelseite. Beim Zusammenfassen eines Kapitels **NICHT raten**, sondern hier nachsehen,
> welche echten Klausuraufgaben zum Thema passen, und diese im Altklausur-Modul verwenden.
> Basiert auf dem vollständigen Durchlesen aller 9 Dateien im Ordner `Altprüfungen/` (Stand 2026-07-05).

## Legende / Quellen-Kürzel
| Kürzel | Datei | Prof. | Bemerkung |
|--------|-------|-------|-----------|
| Ü1 | Betriebssysteme_Übungsfragen_1.pdf | (SS14) | 3 S.: Scheduling, Synchronisation |
| Ü2 | Übungsfragen Betriebssysteme_2.pdf | (SS14) | 3 S.: Speicher, Grundlagen/Cache |
| SS07 | Klausur-BS-SS-07.pdf | Mayer | älterer Stil, enthält E/A |
| SS08 | Klausur-BS-SS-08.pdf | Mayer | |
| SS09 | Klausur-BS-SS-09.pdf | Mayer | |
| SS11 | Klausur_BS_SS_2011.pdf | Orb | |
| WS1516 | prüfung_OS_WiSe201516.pdf | Lauer | aktueller Stil |
| WS1920 | prüfung_OS_WS1920.pdf | Lauer | aktueller Stil |
| SS21 | prüfung_OS_SS21_english.pdf | Lauer | **englisch** |

**Wichtig:** Der aktuelle Dozent ist **Prof. Lauer** (WS1516, WS1920, SS21). Deren Aufgabenstil ist
am relevantesten. Mayer/Orb (SS07–SS11) sind älter, aber inhaltlich sehr ähnlich (v.a. Scheduling,
Synchronisation, Deadlocks, Speicher wiederholen sich fast identisch).

---

## Häufigkeits-Überblick (wie oft kommt ein Thema als eigene Aufgabe dran?)
| Kap | Thema | Häufigkeit | Typische Punktzahl |
|-----|-------|-----------|--------------------|
| 1 | Einführung | ★ sehr selten | — |
| 2 | Grundlagen | ★ selten (nur Übungsfragen) | — |
| 3 | Prozesse | ★★ als Teilaufgabe | 2–4 P |
| 4 | Scheduling | ★★★★★ fast immer | 11–16 P |
| 5 | Threads | ★★ (v.a. SS08) | 12 P |
| 6 | Synchronisation | ★★★★★ fast immer | 8–18 P |
| 7 | Kommunikation | ★ selten (im Sync-Kontext) | — |
| 8 | Deadlocks | ★★★★ häufig (oft mit Sync) | 8–18 P |
| 9 | Speicherverwaltung | ★★★★★ fast immer (ganze Aufgabe) | 8–16 P |
| 10 | Dateisysteme | ★★★★ häufig (neuere Klausuren) | 9–15 P |
| — | E/A-Verwaltung (Kap 11, NICHT zusammengefasst) | nur SS07 | 10 P |

**Faustregel Lauer-Klausur (60 Min, ~4 Aufgaben):** 1× Synchronisation(+Deadlock), 1× Scheduling
(EDF/RMS), 1× Speicherverwaltung, 1× Dateisysteme. → Kap 4, 6, 8, 9, 10 sind die Klausur-Kernthemen.

---

## Kapitel 1 – Einführung
Kommt **fast nie** direkt dran. Einzige echte Fundstelle:
- **SS11 A1a** – „Nennen Sie drei Beispiele für die Abstraktion der Rechner-Hardware durch das BS.“
  (= Sichtweise „erweiterte Maschine“).

→ Altklausur-Modul: diese eine Frage + im Klausurstil ergänzen (Definition, Aufgabenbereiche, BS-Arten).

## Kapitel 2 – Grundlagen
Nur in den **Übungsfragen**, nicht in echten Klausuren:
- **Ü2 A2a** – flüchtiger vs. persistenter Speicher; wohin gehören die Registerspeicher?
- **Ü2 A2b** – Was ist „Sekundärspeicher“, welche zwei Rollen erfüllt er?
- **Ü2 A2c** – Welche Komponenten realisieren die Speicherverwaltung?
- **Ü2 A2d** – relative Adressierung: Vor- und Nachteil.
- **Ü2 A3** – Cache: Trefferrate, mittlere Zugriffszeit berechnen, **Lokalitätsprinzip** (2 Aspekte).

→ Gut für Modul „Speicherhierarchie“ (Cache/Zugriffszeit) und „Rechenzustand/Register“.

## Kapitel 3 – Prozesse
Meist **Teilaufgabe**, oft im Scheduling-Kontext:
- **Ü1 A1d** – 3 wesentliche Prozesszustände (beim Scheduling); wie viele Prozesse können auf
  Single-Core mit unbegrenztem Speicher in jedem Zustand sein?
- **SS11 A2a** – Wie viele Prozesse gleichzeitig „aktiv“ pro CPU? Wie viele blockiert (unbegr. Speicher)?
- **SS08 A1d** – **Prozesswechsel** P1→P2: Schritte ab Aufruf des Dispatchers bis Ausführung von P2
  (= Kontextwechsel, PCB, Register sichern/laden). ← Kern-Klausuraufgabe für Prozesse!

→ Prozesszustände (bereit/aktiv/blockiert) + Kontextwechsel/Dispatcher sind die Klausur-Punkte.

## Kapitel 4 – Scheduling  ★ KERNTHEMA
Kommt in **JEDER** Klausur vor. Zwei feste Aufgabentypen:
**(A) Konzeptfragen:**
- **Ü1 A1a–h / SS09 A1 / WS1516 A1** – Ziele eines Schedulers (**6 nennen**), Beispiel für **Zielkonflikt**,
  Begriff **Verdrängung** + 3 Ereignisse, 3 Klassifikationskriterien, Vorteil einfacher Verfahren,
  **präemptives Scheduling**, **Prioritätsinvertierung** (+ Beispiel, + Lösung → WS1920 A2d/e).
- **SS09 A1e** – 4 Scheduling-Verfahren benennen und je in 1–2 Sätzen beschreiben.
**(B) Rechenaufgabe Echtzeit (Zeitdiagramm zeichnen):**
- **SS07 A2 / SS08 A2 / SS11 A2 / WS1516 A2 / WS1920 A2 / SS21 Q2** – periodische/aperiodische Tasks;
  **EDF** (Earliest Deadline First) und/oder **RMS** (Rate Monotonic Scheduling) Zeitdiagramm,
  Verdrängung mit „V“, Deadline-Verletzung mit „X“ markieren.
- **RMS rechnerisch:** notwendige Bedingung (Σ Cᵢ/Pᵢ ≤ 1) und hinreichende Bedingung
  (Σ Cᵢ/Pᵢ ≤ n·(2^(1/n) − 1)) prüfen → SS08 A2e, SS11 A2g, WS1516 A2c, WS1920 A2a/c, **SS21 Q2a/b**.
- **Ü1 A2** – SJF mit Verdrängung + EDF zeichnen; **SS07 A2a** – „Woher hat RMS seinen Namen?“.

→ Reichhaltigstes Altklausur-Modul: EDF- und RMS-Rechenbeispiel + Konzeptfragen.

## Kapitel 5 – Threads
Hauptquelle **SS08 A1**:
- **SS08 A1a** – Vor-/Nachteile Threads vs. Prozesse für nebenläufige Aufgaben.
- **SS08 A1b** – Vor-/Nachteile **Benutzerthreads vs. Kernelthreads**.
- **SS08 A1c** – Wozu dient das **„Jacketing“**-Verfahren und wie funktioniert es?
- **SS08 A1e** – Voraussetzung, damit eine Anwendung Hyperthreading/Multi-Core **effizient** nutzt.

→ Diese vier Fragen decken Kap 5 fast komplett ab.

## Kapitel 6 – Synchronisation  ★ KERNTHEMA
Kommt in **fast jeder** Klausur vor. Wiederkehrende Bausteine:
- **Race Condition / min-max-Wert:** zwei unsynchronisierte Threads auf Variable → mögliche Endwerte +
  Schrittfolge angeben. → **SS08 A3a/b**, **Ü1 A3c**.
- **Semaphore-Semantik:** „Was passiert genau bei wait()/signal()? Auswirkung auf Semaphorvariable +
  Prozesszustände, Fallunterscheidungen?“ → **SS07 A3c**, **WS1516 A5b**, **SS21 Q1f**.
- **Softwarelösung scheitert (busy-wait/lock-Variable):** warum schützt sie den kritischen Abschnitt
  nicht wirksam bzw. ist ineffizient? → **SS09 A2e**, **WS1920 A1a/b**, **SS21 Q1d/e**.
- **Methoden zur Sicherung kritischer Abschnitte** (mind. 3–4 nennen) → **Ü1 A3b**, **SS08 A3c**, **SS09 A2f**, **WS1920 A1c**.
- **Barriere / Rendezvous** mit Semaphoren (+ Hilfsvariable) für n Threads/Prozesse implementieren →
  **WS1920 A1f** (n=5), **SS21 Q1g** (Rendezvous, wahlweise Semaphore ODER Message Passing).
- **Semaphor-Code P1/P2/P3** analysieren (siehe auch Deadlocks) → SS07 A3, SS09 A2, WS1516 A5.

## Kapitel 7 – Kommunikation
Selten eigenständig; taucht im Synchronisations-/Barriere-Kontext auf:
- **SS21 Q1g** – Barriere/Rendezvous **wahlweise mit Message Exchange (IPC)** statt Semaphoren →
  Message Passing, Puffer-Initialisierung.

→ Altklausur-Modul: SS21 Q1g (IPC-Variante) + Klausurstil (Shared Memory vs. Message Passing, Pipes).

## Kapitel 8 – Deadlocks  ★ häufig (oft mit Synchronisation kombiniert)
- **Ressourcen-/Zyklengraph zeichnen** (Kreise = Prozesse, Quadrate/Rechtecke = Betriebsmittel) und
  auf Zyklus/Deadlock prüfen → **SS09 A2b/c**, **SS11 A5a/b**, **WS1920 A1d**, **SS21 Q1a**.
- **Semaphor-Code auf Deadlock prüfen** (für alle Fälle A/B bzw. beliebigen Ablauf) →
  **SS07 A3a**, **SS09 A2d**, **WS1516 A5a**, **WS1920 A1e**.
- **Deadlock-Auflösung:** welche Prozesse terminieren, damit kein Deadlock mehr → **SS11 A5c**.
- **Deadlock-Vermeidung/-Verhinderung:** 2 Methoden nennen; warum Zyklenanalyse in der Praxis nicht
  praktikabel → **SS11 A5d/e**. **Vermeidung per Ressourcengraph** (welche Ressource NICHT anfordern) → **SS21 Q1b/c**.

## Kapitel 9 – Speicherverwaltung  ★ KERNTHEMA
Kommt **fast immer als ganze Aufgabe** vor. Zwei feste Aufgabentypen:
**(A) Paging-/Adressrechnung:**
- Gegeben: 32-Bit-Adressierung, physischer RAM (MB/GB), Rahmen-/Kachelgröße (KB).
- **Anzahl Rahmen** im RAM; **Anzahl Einträge Seitentabelle**; Adresse in **Seitennummer + Offset**
  aufteilen; **kleinste/größte virtuelle Adresse derselben Kachel**; **Anzahl Rahmen für ein Array**
  (min/max je nach Ausrichtung). → **SS07 A4**, **SS08 A4**, **SS09 A3**, **SS11 A3**, **WS1516 A3**,
  **WS1920 A3**, **SS21 Q3a–c**, **Ü2 A1**.
- **Mehrstufiges Paging** (warum, zweistufig) → SS07 A4b, SS08 A4e, Ü2 A1e.
- **Seitentabellen-Bits** (P-Bit/Present, R/M) → SS07 A4d, SS09 A3d. virtuelle→physikalische Adresse
  aus Tabellenauszug berechnen → SS09 A3d/e.
**(B) Seitenersetzungs-Strategien (Tabelle ausfüllen):**
- **Optimal, FIFO, LRU, LFU, Second-Chance/Clock** durchspielen, Seitenfehler „F“ markieren →
  **SS07 A5** (Opt/LRU/2nd-Chance), **SS09 A4** (Opt/Clock), **SS11 A4** (Opt/Clock),
  **WS1516 A3d/e** (Opt/LRU), **WS1920 A3e/f** (FIFO/Opt), **SS21 Q3d/e** (LRU/LFU), **Ü2 A4** (LRU/Opt).
- **Thrashing** + **Lokalitätsprinzip** (räumlich/zeitlich) → SS09 A4a/b, **SS21 Q3f/g** (auch: was nutzt
  Lokalität – Caching/Spooling), Ü2 A3c. **Seitenfehler-Ablauf** (Schritte) → Ü2 A4b, SS09 A3f.

## Kapitel 10 – Dateisysteme  ★ häufig (neuere Lauer-Klausuren)
- **Belegungsarten vergleichen:** zusammenhängend (contiguous), verkettete Liste (mit/ohne FAT-Tabelle),
  I-Nodes → Vor-/Nachteile, Speicherplatz für Datei berechnen → **SS11 A1c**, **WS1516 A4a–e**,
  **WS1920 A4a–e**, **SS21 Q4a/b**.
- **I-Node maximale Dateigröße berechnen** (n direkte + einfach/doppelt/dreifach indirekte
  Blockadressen) → **SS11 A1d**, **WS1516 A4d**, **WS1920 A4f**, **SS21 Q4c**.
- **Random Access (wahlfreier Zugriff):** welches Dateisystem eignet sich, Dateisysteme sortieren →
  **WS1920 A4b**, **SS21 Q4d**.
- **Dateizugriffsmethoden** (sequentiell/direkt) → **SS11 A1b**. Eignung für **Auslagerungsdatei**
  (virtueller Speicher) → **SS11 A1c**, **WS1920 A4c**. Partition-Obergrenze bei FAT (16-Bit) → WS1516 A4a, WS1920 A4d.

## (Zusatz) E/A-Verwaltung – NICHT unter den 10 Kapiteln
Nur **SS07 A1** (Prof. Mayer): 3 Formen der E/A-Organisation, **memory-mapped vs. port-mapped I/O**,
**DMA** (Prinzip + Parameter), **Cycle Stealing**. In den Lauer-Klausuren nicht vorhanden → für die
10-Kapitel-Zusammenfassung irrelevant, hier nur der Vollständigkeit halber notiert.
