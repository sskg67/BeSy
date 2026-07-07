/* =========================================================================
   Zentrale Kapiteldaten für die Betriebssysteme-Zusammenfassung.
   Wird vom Hub (index.html) und später von den Kapitel-Unterseiten genutzt.
   ========================================================================= */

const PDF_BASE = "Themen/";
const KLAUSUR_BASE = "Altprüfungen/";

const CHAPTERS = [
  {
    nr: 1,
    slug: "kapitel-01",
    title: "Einführung",
    subtitle: "Was ist ein Betriebssystem? Aufgaben, Ziele & Geschichte.",
    icon: "🚀",
    accent: "#5b8cff",
    pdf: "OS_1_Einfuehrung.pdf",
    topics: ["Aufgaben eines BS", "Schichtenmodell", "Historie", "Kernel-Arten"],
  },
  {
    nr: 2,
    slug: "kapitel-02",
    title: "Grundlagen",
    subtitle: "Rechnerarchitektur, Betriebsarten & Systemaufrufe.",
    icon: "🧱",
    accent: "#22c1a4",
    pdf: "OS_2_Grundlagen.pdf",
    topics: ["Von-Neumann", "Interrupts", "User-/Kernel-Mode", "System Calls"],
  },
  {
    nr: 3,
    slug: "kapitel-03",
    title: "Prozesse",
    subtitle: "Prozessmodell, Zustände, PCB & Kontextwechsel.",
    icon: "⚙️",
    accent: "#f2994a",
    pdf: "OS_3_Prozesse.pdf",
    topics: ["Prozesszustände", "PCB", "Kontextwechsel", "fork/exec"],
  },
  {
    nr: 4,
    slug: "kapitel-04",
    title: "Scheduling",
    subtitle: "Strategien: FCFS, SJF, Round Robin, Prioritäten.",
    icon: "📊",
    accent: "#eb5757",
    pdf: "OS_4_Scheduling.pdf",
    topics: ["FCFS / SJF", "Round Robin", "Prioritäten", "Kennzahlen"],
  },
  {
    nr: 5,
    slug: "kapitel-05",
    title: "Threads",
    subtitle: "Leichtgewichtige Prozesse, User- vs. Kernel-Threads.",
    icon: "🧵",
    accent: "#bb6bd9",
    pdf: "OS_5_Threads_deutsch.pdf",
    topics: ["Thread-Modelle", "User/Kernel", "Vor-/Nachteile", "Mapping"],
  },
  {
    nr: 6,
    slug: "kapitel-06",
    title: "Synchronisation",
    subtitle: "Race Conditions, kritische Abschnitte, Semaphore & Monitore.",
    icon: "🔒",
    accent: "#2f80ed",
    pdf: "OS_6_Synchronisation.pdf",
    topics: ["Race Condition", "Mutex/Semaphor", "Monitor", "Erzeuger/Verbraucher"],
  },
  {
    nr: 7,
    slug: "kapitel-07",
    title: "Kommunikation",
    subtitle: "Interprozesskommunikation: Pipes, Message Passing, Shared Memory.",
    icon: "📡",
    accent: "#27ae60",
    pdf: "OS_7_Kommunikation.pdf",
    topics: ["Shared Memory", "Message Passing", "Pipes", "Sockets"],
  },
  {
    nr: 8,
    slug: "kapitel-08",
    title: "Deadlocks",
    subtitle: "Verklemmungen erkennen, vermeiden, verhindern & auflösen.",
    icon: "🔗",
    accent: "#e2b93b",
    pdf: "OS_8_Deadlocks.pdf",
    topics: ["4 Bedingungen", "Betriebsmittelgraph", "Bankier-Algorithmus", "Recovery"],
  },
  {
    nr: 9,
    slug: "kapitel-09",
    title: "Speicherverwaltung",
    subtitle: "Paging, Segmentierung, virtueller Speicher & Seitenersetzung.",
    icon: "🧠",
    accent: "#56ccf2",
    pdf: "OS_9_Speicherverwaltung.pdf",
    topics: ["Paging", "Virtueller Speicher", "TLB", "Ersetzungsstrategien"],
  },
  {
    nr: 10,
    slug: "kapitel-10",
    title: "Dateisysteme",
    subtitle: "Dateien, Verzeichnisse, Zuordnung & Plattenverwaltung.",
    icon: "🗂️",
    accent: "#f2c94c",
    pdf: "OS_10_Dateisysteme.pdf",
    topics: ["Datei-Attribute", "Verzeichnisse", "Blockzuordnung", "i-Nodes"],
  },
];

/* Altklausuren – Quelle für das jeweils letzte Modul jedes Kapitels */
const KLAUSUREN = [
  { file: "Betriebssysteme_Übungsfragen_1.pdf", label: "Übungsfragen 1" },
  { file: "Übungsfragen Betriebssysteme_2.pdf", label: "Übungsfragen 2" },
  { file: "Klausur-BS-SS-07.pdf", label: "Klausur SS 07" },
  { file: "Klausur-BS-SS-08.pdf", label: "Klausur SS 08" },
  { file: "Klausur-BS-SS-09.pdf", label: "Klausur SS 09" },
  { file: "Klausur_BS_SS_2011.pdf", label: "Klausur SS 2011" },
  { file: "prüfung_OS_WiSe201516.pdf", label: "Klausur WiSe 2015/16" },
  { file: "prüfung_OS_WS1920.pdf", label: "Klausur WS 2019/20" },
  { file: "prüfung_OS_SS21_english.pdf", label: "Exam SS 21 (EN)" },
];

/* Für Nutzung mit <script> ohne Module: global verfügbar machen */
if (typeof window !== "undefined") {
  window.CHAPTERS = CHAPTERS;
  window.KLAUSUREN = KLAUSUREN;
  window.PDF_BASE = PDF_BASE;
  window.KLAUSUR_BASE = KLAUSUR_BASE;
}
