/* ============================================================
   GRACE GAMEROS — PORTFOLIO SCRIPT
   ============================================================ */
(function(){
  "use strict";

  /* ---------- LOADER ---------- */
  window.addEventListener("load", function(){
    var loader = document.getElementById("loader");
    setTimeout(function(){
      loader.classList.add("hide");
      document.body.style.overflow = "";
    }, 1400);
  });

  /* ---------- THEME TOGGLE ---------- */
  var themeToggle = document.getElementById("theme-toggle");
  var root = document.documentElement;
  // Theme state lives only in memory for this session and defaults to the
  // visitor's system preference — no localStorage/sessionStorage dependency,
  // so there is nothing here that can fail to load or go stale.
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) root.setAttribute("data-theme","dark");

  themeToggle.addEventListener("click", function(){
    var isDark = root.getAttribute("data-theme") === "dark";
    root.setAttribute("data-theme", isDark ? "light" : "dark");
  });

  /* ---------- SCROLL PROGRESS + NAV HIDE ---------- */
  var progress = document.getElementById("scroll-progress");
  var nav = document.getElementById("site-nav");
  var backToTop = document.getElementById("back-to-top");
  var lastY = window.scrollY;

  function onScroll(){
    var y = window.scrollY;
    var doc = document.documentElement;
    var pct = (y / (doc.scrollHeight - doc.clientHeight)) * 100;
    progress.style.width = pct + "%";

    if (y > lastY && y > 200){ nav.classList.add("nav-hidden"); }
    else { nav.classList.remove("nav-hidden"); }
    lastY = y;

    if (y > 600){ backToTop.classList.add("show"); } else { backToTop.classList.remove("show"); }
  }
  window.addEventListener("scroll", onScroll, { passive:true });

  backToTop.addEventListener("click", function(){
    window.scrollTo({ top:0, behavior:"smooth" });
  });

  /* ---------- MOBILE MENU ---------- */
  var menuBtn = document.getElementById("menu-btn");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.getElementById("drawer-backdrop");

  function closeDrawer(){
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded","false");
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
  menuBtn.addEventListener("click", function(){
    var open = drawer.classList.toggle("open");
    backdrop.classList.toggle("open", open);
    menuBtn.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true":"false");
  });
  backdrop.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", closeDrawer); });

  /* ---------- ACTIVE NAV LINK (scrollspy) ---------- */
  var navLinks = document.querySelectorAll("[data-nav]");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));

  function updateActiveNav(){
    var y = window.scrollY + 140;
    var current = null;
    sections.forEach(function(sec){
      if (y >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(function(link){
      var match = link.getAttribute("href") === "#" + current;
      link.classList.toggle("active", match);
    });
  }
  window.addEventListener("scroll", updateActiveNav, { passive:true });
  updateActiveNav();

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15, rootMargin:"0px 0px -60px 0px" });
  revealEls.forEach(function(el, i){ el.style.setProperty("--i", i % 6); io.observe(el); });

  /* ---------- PROCESS TIMELINE DOT ANIMATION ---------- */
  var steps = document.querySelectorAll(".process-step");
  var stepIo = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){ entry.target.classList.add("in"); }
    });
  }, { threshold:0.5 });
  steps.forEach(function(s){ stepIo.observe(s); });

  /* ---------- PROJECT FILTER ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var caseStudies = document.querySelectorAll(".case-study");
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      filterBtns.forEach(function(b){ b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      caseStudies.forEach(function(cs){
        var cats = (cs.getAttribute("data-cat") || "").split(" ");
        var show = f === "all" || cats.indexOf(f) !== -1;
        cs.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- LIGHTBOX ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox.querySelector("img");
  var lbClose = lightbox.querySelector(".lb-close");

  document.querySelectorAll(".g-item[data-full]").forEach(function(item){
    function openItem(){
      lightboxImg.src = item.getAttribute("data-full");
      lightboxImg.alt = item.querySelector("img") ? item.querySelector("img").alt : "";
      lightbox.classList.add("open");
    }
    item.addEventListener("click", openItem);
    item.addEventListener("keydown", function(e){
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openItem();
      }
    });
  });
  function closeLightbox(){ lightbox.classList.remove("open"); lightboxImg.src=""; }
  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function(e){ if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeLightbox(); });

  /* ---------- ANIMATED COUNTERS ---------- */
  var counters = document.querySelectorAll("[data-counter]");
  var counterIo = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.getAttribute("data-counter"), 10);
      var suffix = el.getAttribute("data-suffix") || "";
      var current = 0;
      var duration = 1200;
      var start = null;
      function step(ts){
        if (!start) start = ts;
        var progressPct = Math.min((ts - start) / duration, 1);
        current = Math.floor(progressPct * target);
        el.textContent = current + suffix;
        if (progressPct < 1) requestAnimationFrame(step);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(step);
      counterIo.unobserve(el);
    });
  }, { threshold:0.6 });
  counters.forEach(function(c){ counterIo.observe(c); });

  /* ---------- LANGUAGE BARS ---------- */
  var langFills = document.querySelectorAll(".lang-fill");
  var langIo = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.style.width = entry.target.getAttribute("data-pct") + "%";
        langIo.unobserve(entry.target);
      }
    });
  }, { threshold:0.6 });
  langFills.forEach(function(f){ langIo.observe(f); });

  /* ---------- SMOOTH ANCHOR SCROLL (offset for fixed nav) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener("click", function(e){
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top:y, behavior:"smooth" });
    });
  });

})();
