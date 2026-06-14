// =============================================
// AYESHA NOOR BALOCH — HR Analytics Portfolio
// =============================================

document.addEventListener("DOMContentLoaded", () => {

  // =============================================
  // CUSTOM CURSOR
  // =============================================
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursorFollower");

  if (cursor && follower && !window.matchMedia("(pointer: coarse)").matches) {
    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    document.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();
  }

  // =============================================
  // SCROLL PROGRESS BAR
  // =============================================
  const scrollBar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollBar) scrollBar.style.width = (scrolled / total * 100) + "%";
  }, { passive: true });

  // =============================================
  // NAVBAR SCROLL EFFECT
  // =============================================
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  }, { passive: true });

  // =============================================
  // HAMBURGER / MOBILE MENU
  // =============================================
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // =============================================
  // TYPING EFFECT
  // =============================================
  const typingEl = document.getElementById("typing-text");
  if (typingEl) {
    const roles = [
      "Strategic Insights",
      "Retention Intelligence",
      "Workforce Clarity",
      "Recruitment Analytics",
      "People-Centered Decisions"
    ];
    let ri = 0, ci = 0, del = false;

    function type() {
      const role = roles[ri];
      typingEl.textContent = role.substring(0, del ? ci - 1 : ci + 1);
      del ? ci-- : ci++;

      if (!del && ci === role.length) {
        del = true;
        setTimeout(type, 2200);
        return;
      }
      if (del && ci === 0) {
        del = false;
        ri = (ri + 1) % roles.length;
      }
      setTimeout(type, del ? 40 : 90);
    }
    type();
  }

  // =============================================
  // ACTIVE NAV LINK
  // =============================================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // =============================================
  // SCROLL REVEAL
  // =============================================
  const revealEls = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  // =============================================
  // COUNTER ANIMATION
  // =============================================
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      let current = 0;
      const step = target / 80;

      const tick = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString();
        if (current >= target) clearInterval(tick);
      }, 20);

      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  // =============================================
  // SKILL BARS
  // =============================================
  const skillFills = document.querySelectorAll(".skill-fill");
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + "%";
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  skillFills.forEach(f => skillObserver.observe(f));

  // =============================================
  // SMOOTH SCROLL (anchor links)
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 20 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // =============================================
  // BACK TO TOP
  // =============================================
  const topBtn = document.getElementById("backToTop");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("visible", window.scrollY > 500);
    }, { passive: true });
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // =============================================
  // FOOTER YEAR
  // =============================================
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // =============================================
  // CHART.JS
  // =============================================
  if (typeof Chart !== "undefined") {
    Chart.defaults.color = "#64748b";
    Chart.defaults.font.family = "'Inter', sans-serif";

    const tooltipDefaults = {
      backgroundColor: "rgba(6,13,24,0.92)",
      borderColor: "rgba(59,130,246,0.3)",
      borderWidth: 1,
      titleColor: "#f1f5f9",
      bodyColor: "#94a3b8",
      padding: 12,
      cornerRadius: 10
    };

    // ATTRITION — Doughnut
    const attrCanvas = document.getElementById("attritionChart");
    if (attrCanvas) {
      new Chart(attrCanvas, {
        type: "doughnut",
        data: {
          labels: ["Retained (84%)", "Attrition (16%)"],
          datasets: [{
            data: [84, 16],
            backgroundColor: ["#3b82f6", "#06b6d4"],
            borderWidth: 0,
            hoverOffset: 8
          }]
        },
        options: {
          responsive: true,
          cutout: "72%",
          plugins: {
            legend: { position: "bottom", labels: { padding: 20, usePointStyle: true, pointStyle: "circle" } },
            tooltip: { callbacks: { label: ctx => ` ${ctx.label}` }, ...tooltipDefaults }
          }
        }
      });
    }

    // RECRUITMENT — Horizontal Bar
    const recCanvas = document.getElementById("recruitmentChart");
    if (recCanvas) {
      new Chart(recCanvas, {
        type: "bar",
        data: {
          labels: ["Applications", "Screened", "Interviews", "Offers", "Hires"],
          datasets: [{
            label: "Candidates",
            data: [1200, 450, 180, 75, 32],
            backgroundColor: [
              "rgba(59,130,246,0.85)",
              "rgba(59,130,246,0.70)",
              "rgba(59,130,246,0.55)",
              "rgba(6,182,212,0.7)",
              "rgba(6,182,212,0.9)"
            ],
            borderRadius: 8,
            borderSkipped: false
          }]
        },
        options: {
          indexAxis: "y",
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: tooltipDefaults
          },
          scales: {
            x: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.04)" }, border: { color: "transparent" } },
            y: { grid: { display: false }, border: { color: "transparent" } }
          }
        }
      });
    }

    // DEPT HEADCOUNT — Bar
    const deptCanvas = document.getElementById("deptChart");
    if (deptCanvas) {
      new Chart(deptCanvas, {
        type: "bar",
        data: {
          labels: ["Sales", "R&D", "HR", "Finance", "IT", "Ops"],
          datasets: [{
            label: "Headcount",
            data: [446, 391, 63, 87, 196, 287],
            backgroundColor: "rgba(129,140,248,0.75)",
            borderRadius: 8,
            borderSkipped: false,
            hoverBackgroundColor: "rgba(6,182,212,0.85)"
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            tooltip: tooltipDefaults
          },
          scales: {
            y: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.04)" }, border: { color: "transparent" } },
            x: { grid: { display: false }, border: { color: "transparent" } }
          }
        }
      });
    }
  }

  console.log("%cAyesha Noor Baloch | HR Analytics Portfolio", "color:#06b6d4;font-weight:800;font-size:1rem;");
});
