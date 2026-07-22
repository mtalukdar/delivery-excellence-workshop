/* ============================================================
   Delivery Excellence Workshop — shared behavior & renderers
   ============================================================ */

(function () {
  "use strict";

  const PAGES = [
    { href: "index.html",        label: "Home" },
    { href: "agenda.html",       label: "Agenda" },
    { href: "rfp-catalog.html",  label: "RfP Catalog" },
    { href: "governance.html",   label: "Governance" },
    { href: "evaluation.html",   label: "Evaluation" },
    { href: "participants.html", label: "Participants" },
    { href: "rfp-details.html",  label: "RfP Details", soon: true },
    { href: "teams.html",        label: "Teams & RfP" }
  ];

  const current = document.body.dataset.page || "index.html";

  /* ---------------- Header ---------------- */
  function buildHeader() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="BJIT — Delivery Excellence Workshop home">
          <img src="assets/bjit-logo.svg" alt="BJIT logo">
          <span class="brand-text">
            <strong>Delivery Excellence<br>Workshop</strong>
          </span>
        </a>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Main navigation">
          ${PAGES.map(p => `
            <a href="${p.href}" class="${p.href === current ? "active" : ""}">
              ${p.label}${p.soon ? '<span class="soon-dot">SOON</span>' : ""}
            </a>`).join("")}
        </nav>
      </div>`;
    document.body.prepend(header);

    const toggle = header.querySelector(".nav-toggle");
    const nav = header.querySelector(".main-nav");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------------- Footer ---------------- */
  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="assets/bjit-logo.svg" alt="BJIT logo">
            <p>${WORKSHOP.tagline}. Converting GDM 2.0 knowledge into practiced behavior.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="agenda.html">Agenda</a></li>
              <li><a href="rfp-catalog.html">RfP Catalog</a></li>
              <li><a href="governance.html">Governance &amp; Artifacts</a></li>
              <li><a href="evaluation.html">Evaluation &amp; Rules</a></li>
            </ul>
          </div>
          <div>
            <h4>Event</h4>
            <ul>
              <li><a href="participants.html">Participants</a></li>
              <li><a href="rfp-details.html">RfP Details</a></li>
              <li><a href="teams.html">Teams &amp; RfP</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 BJIT &middot; ${WORKSHOP.title}</span>
          <span>Saturday &middot; ${WORKSHOP.date} &middot; ${WORKSHOP.venue}</span>
        </div>
      </div>`;
    document.body.append(footer);
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }

  /* ---------------- Count-up numbers ---------------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const dur = 1400;
        const t0 = performance.now();
        (function tick(now) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: 0.4 });
    els.forEach(el => io.observe(el));
  }

  /* ---------------- Countdown ---------------- */
  function initCountdown() {
    const box = document.getElementById("countdown");
    if (!box) return;
    const target = new Date(WORKSHOP.eventISO).getTime();

    function render() {
      const diff = target - Date.now();
      if (diff <= 0) {
        box.innerHTML = `<div class="countdown-live">🎉 The workshop is live — see you on the floors!</div>`;
        clearInterval(timer);
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff / 3600000) % 24;
      const m = Math.floor(diff / 60000) % 60;
      const s = Math.floor(diff / 1000) % 60;
      const cells = [[d, "Days"], [h, "Hours"], [m, "Minutes"], [s, "Seconds"]];
      box.innerHTML = cells.map(([v, l]) =>
        `<div class="count-cell"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
    }
    render();
    const timer = setInterval(render, 1000);
  }

  /* ---------------- Agenda timeline ---------------- */
  function renderAgenda() {
    const wrap = document.getElementById("timeline");
    if (!wrap) return;
    wrap.innerHTML = AGENDA.map((a, i) => `
      <div class="tl-item reveal reveal-d${(i % 3) + 1}">
        <div class="tl-card">
          <div class="tl-top">
            <span class="tl-icon">${a.icon}</span>
            <span class="tl-time tone-${a.tone}">${a.time}</span>
            <span class="tl-place">${a.place}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.detail}</p>
        </div>
      </div>`).join("");
  }

  /* ---------------- RfP catalog ---------------- */
  const CAT_TONES = {
    web: "tone-sky", mobile: "tone-mint", pc: "tone-lav", embedded: "tone-peach",
    maintenance: "tone-gold", migration: "tone-peach", qa: "tone-mint",
    mechanical: "tone-lav", cloud: "tone-sky", lowcode: "tone-gold",
    labo: "tone-peach", erp: "tone-lav", engdata: "tone-sky"
  };

  function renderRfps() {
    const grid = document.getElementById("rfp-grid");
    if (!grid) return;
    const bar = document.getElementById("filter-bar");
    const input = document.getElementById("rfp-search");
    const pill = document.getElementById("rfp-count");
    let activeFilter = "all";

    bar.innerHTML = RFP_FILTERS.map((f, i) =>
      `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${f.key}">${f.label}</button>`).join("");

    function draw() {
      const q = (input && input.value || "").trim().toLowerCase();
      const list = RFPS.filter(r =>
        (activeFilter === "all" || r.filter === activeFilter) &&
        (!q || r.customer.toLowerCase().includes(q) || r.id.toLowerCase().includes(q)));
      if (pill) pill.textContent = list.length + " RfP" + (list.length === 1 ? "" : "s");
      grid.innerHTML = list.map((r, i) => `
        <article class="rfp-card" style="animation-delay:${Math.min(i * 45, 400)}ms">
          <div class="rfp-head">
            <span class="rfp-id">${r.id}</span>
            <span class="rfp-cat ${CAT_TONES[r.filter] || "tone-lav"}">${r.category}</span>
          </div>
          <div class="rfp-stack">${r.stack}</div>
          <div class="rfp-rows">
            <div class="rfp-row"><b>Scope</b><span>${r.scope}</span></div>
            <div class="rfp-row"><b>Domain</b><span>${r.domain}</span></div>
            <div class="rfp-row"><b>Customer keeps</b><span>${r.keeps}</span></div>
            <div class="rfp-row rfp-customer"><b>Customer</b><span>👤 ${r.customer}</span></div>
          </div>
        </article>`).join("") ||
        `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No RfP matches “${input.value}”.</p>`;
    }
    draw();

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      draw();
    });
    if (input) input.addEventListener("input", draw);
  }

  /* ---------------- Teams & Groups page ---------------- */
  function renderTeams() {
    const grid = document.getElementById("team-grid");
    if (!grid) return;
    const input = document.getElementById("team-search");
    const pill = document.getElementById("team-count");

    function initials(name) {
      return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
    }
    function mark(text, q) {
      if (!q) return text;
      const i = text.toLowerCase().indexOf(q);
      if (i === -1) return text;
      return text.slice(0, i) + "<mark>" + text.slice(i, i + q.length) + "</mark>" + text.slice(i + q.length);
    }
    function draw() {
      const q = (input.value || "").trim().toLowerCase();
      const list = TEAMS.filter(t =>
        !q ||
        t.members.some(m => m.toLowerCase().includes(q)) ||
        t.name.toLowerCase().includes(q) ||
        t.customer.toLowerCase().includes(q) ||
        t.rfp.toLowerCase().includes(q));
      pill.textContent = list.length + " team" + (list.length === 1 ? "" : "s");
      grid.innerHTML = list.map((t, i) => `
        <article class="team-card" style="animation-delay:${Math.min(i * 45, 400)}ms">
          <div class="rfp-head">
            <span class="rfp-id">${t.rfp}</span>
            <span class="rfp-cat ${CAT_TONES[t.rfp && (RFPS.find(r => r.id === t.rfp) || {}).filter] || "tone-lav"}">${t.platform}</span>
          </div>
          <h3 class="team-name">${mark(t.name, q)}</h3>
          <p class="team-slogan">${t.slogan}</p>
          <div class="team-customer">👤 Customer: <b>${mark(t.customer, q)}</b></div>
          <div class="team-members">
            ${t.members.map(m => `
              <span class="member${q && m.toLowerCase().includes(q) ? " hit" : ""}">
                <span class="m-avatar" style="background:${SPEC_COLORS[t.category] || "#7472c9"}">${initials(m)}</span>${mark(m, q)}
              </span>`).join("")}
          </div>
        </article>`).join("") ||
        `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No team, DM or customer matches “${input.value}”.</p>`;
    }
    draw();
    input.addEventListener("input", draw);
  }

  /* ---------------- Governance page ---------------- */
  function renderGovernance() {
    const flow = document.getElementById("gate-flow");
    if (flow) {
      flow.innerHTML = GATES.map((g, i) => `
        <div class="gate reveal reveal-d${(i % 3) + 1}">
          <div class="gate-num">${i + 1}</div>
          <div><h3>${g.name}</h3><p>${g.hint}</p></div>
        </div>
        ${i < GATES.length - 1 ? '<div class="gate-arrow">▼</div>' : ""}`).join("");
    }
    const grid = document.getElementById("artifact-grid");
    if (grid) {
      grid.innerHTML = ARTIFACTS.map((a, i) => `
        <div class="artifact reveal reveal-d${(i % 4) + 1}">
          <div class="a-num">${a.n}</div>
          <div>
            <h4>${a.name}</h4>
            <span class="a-anchor">${a.anchor}</span>
          </div>
        </div>`).join("");
    }
    const checks = document.getElementById("proposal-checklist");
    if (checks) {
      checks.innerHTML = PROPOSAL_ITEMS.map((p, i) => `
        <div class="check-item reveal reveal-d${(i % 4) + 1}">
          <span class="tick">✓</span>${p}
        </div>`).join("");
    }
  }

  /* ---------------- Evaluation page ---------------- */
  function renderEvaluation() {
    const rules = document.getElementById("rules-grid");
    if (rules) {
      const bubbles = ["lav", "sky", "mint", "peach", "gold", "rose", "sky", "mint"];
      rules.innerHTML = RULES.map((r, i) => `
        <div class="card reveal reveal-d${(i % 4) + 1}">
          <div class="icon-bubble bubble-${bubbles[i % bubbles.length]}">${r.icon}</div>
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </div>`).join("");
    }
    const rubric = document.getElementById("rubric-list");
    if (rubric) {
      rubric.innerHTML = RUBRIC.map((r, i) => `
        <div class="rubric-item reveal reveal-d${i + 1}">
          <div class="rubric-top">
            <h3>${r.criterion}</h3>
            <span class="rubric-weight">${r.weight}<small style="font-size:.55em"> pts</small></span>
          </div>
          <p>${r.detail}</p>
          <span class="rubric-judged">Judged from: ${r.judged}</span>
          <div class="bar-track"><div class="bar-fill" data-width="${r.weight}"></div></div>
        </div>`).join("");

      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const fill = e.target.querySelector(".bar-fill");
          requestAnimationFrame(() => { fill.style.width = fill.dataset.width + "%"; });
        });
      }, { threshold: 0.35 });
      rubric.querySelectorAll(".rubric-item").forEach(el => io.observe(el));
    }
  }

  /* ---------------- Participants page ---------------- */
  const SPEC_COLORS = {
    "Web": "#7472c9", "Mobile": "#4fae8d", "SQA": "#c9a24b", "Mechanical": "#a54a68",
    "PC + Embedded": "#5b8fd4", "PC+Embed": "#5b8fd4", "ERP": "#b05f36", "SAP": "#b05f36",
    "Cloud": "#3e9db0", "Data": "#5d78ab", "Hybrid": "#8a879e", "Other": "#8a879e"
  };

  function renderParticipants() {
    const chart = document.getElementById("spec-chart");
    if (chart) {
      const max = Math.max(...DM_SUMMARY.map(s => s.count));
      chart.innerHTML = DM_SUMMARY.map(s => `
        <div class="spec-row">
          <span class="s-label">${s.speciality}</span>
          <div class="spec-track">
            <div class="spec-fill" data-width="${(s.count / max) * 100}" style="background:${SPEC_COLORS[s.speciality] || "#7472c9"}"></div>
          </div>
          <span class="s-count">${s.count}</span>
        </div>`).join("");

      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          io.disconnect();
          chart.querySelectorAll(".spec-fill").forEach((f, i) => {
            setTimeout(() => { f.style.width = f.dataset.width + "%"; }, i * 90);
          });
        });
      }, { threshold: 0.3 });
      io.observe(chart);
    }

    const dmGrid = document.getElementById("dm-grid");
    if (dmGrid) {
      const input = document.getElementById("dm-search");
      const pill = document.getElementById("dm-count");

      function initials(name) {
        return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
      }
      function draw(q) {
        const query = (q || "").trim().toLowerCase();
        const list = DMS.filter(([name, spec]) =>
          !query || name.toLowerCase().includes(query) || spec.toLowerCase().includes(query));
        pill.textContent = list.length + " DM" + (list.length === 1 ? "" : "s");
        dmGrid.innerHTML = list.map(([name, spec], i) => `
          <div class="person" style="animation-delay:${Math.min(i * 14, 350)}ms">
            <span class="avatar" style="background:${SPEC_COLORS[spec] || "#7472c9"}">${initials(name)}</span>
            <span><span class="p-name">${name}</span><br><span class="p-spec">${spec === "PC+Embed" ? "PC + Embedded" : spec}</span></span>
          </div>`).join("") ||
          `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No delivery manager matches “${q}”.</p>`;
      }
      draw("");
      input.addEventListener("input", () => draw(input.value));
    }

    const custGrid = document.getElementById("customer-grid");
    if (custGrid) {
      const palette = ["#7472c9", "#4fae8d", "#c9a24b", "#a54a68", "#5b8fd4", "#b05f36", "#3e9db0"];
      custGrid.innerHTML = CUSTOMERS.map((name, i) => {
        const tbc = name === "TBC";
        const init = tbc ? "?" : name.split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join("");
        return `
          <div class="person" style="animation-delay:${Math.min(i * 25, 350)}ms">
            <span class="avatar" style="background:${palette[i % palette.length]}">${init}</span>
            <span><span class="p-name">${tbc ? "To be confirmed" : name}</span></span>
          </div>`;
      }).join("");
    }
  }

  /* ---------------- Coming-soon typing effect ---------------- */
  function initTyping() {
    const el = document.getElementById("typing");
    if (!el) return;
    const phrases = JSON.parse(el.dataset.phrases || "[]");
    if (!phrases.length) return;
    let pi = 0, ci = 0, deleting = false;

    (function tick() {
      const phrase = phrases[pi];
      el.textContent = phrase.slice(0, ci);
      let delay = deleting ? 32 : 62;
      if (!deleting && ci === phrase.length) { delay = 1700; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }
      ci += deleting ? -1 : 1;
      setTimeout(tick, delay);
    })();
  }

  /* ---------------- Boot ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildFooter();
    renderAgenda();
    renderRfps();
    renderTeams();
    renderGovernance();
    renderEvaluation();
    renderParticipants();
    initCountdown();
    initTyping();
    initReveal();
    initCounters();
  });
})();
