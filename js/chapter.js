/* =========================================================================
   Interaktivität für die Kapitel-Unterseiten:
   - Fortschrittsbalken beim Scrollen
   - Aktives Hervorheben im Inhaltsverzeichnis (Scrollspy)
   - Sanftes Scrollen zu Modulen
   ========================================================================= */

(function () {
  "use strict";

  // ---- Fortschrittsbalken -------------------------------------------------
  const bar = document.querySelector(".progress");
  function updateProgress() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
  }

  // ---- Scrollspy ----------------------------------------------------------
  const modules = Array.from(document.querySelectorAll(".module[id]"));
  const tocLinks = new Map();
  document.querySelectorAll("nav.toc a[href^='#']").forEach((a) => {
    tocLinks.set(a.getAttribute("href").slice(1), a);
  });

  function updateSpy() {
    const offset = 120;
    let currentId = modules.length ? modules[0].id : null;
    for (const m of modules) {
      if (m.getBoundingClientRect().top - offset <= 0) {
        currentId = m.id;
      }
    }
    tocLinks.forEach((a) => a.classList.remove("active"));
    if (currentId && tocLinks.has(currentId)) {
      tocLinks.get(currentId).classList.add("active");
    }
  }

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        updateSpy();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
