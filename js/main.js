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
    { href: "participants.html", label: "Participants" },
    { href: "rfp-details.html",  label: "RfP Details" },
    { href: "teams.html",        label: "Teams & RfP" },
    { href: "upload-artifacts.html", label: "Upload Artifacts" },
    { href: "evaluation.html",   label: "Team Evaluation" },
    { href: "customer-evaluation.html", label: "Customer Evaluation" },
    { href: "workshop-evaluation.html", label: "Workshop Evaluation" }
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
              <li><a href="evaluation.html">Team Evaluation &amp; Rules</a></li>
              <li><a href="customer-evaluation.html">Customer Evaluation</a></li>
            </ul>
          </div>
          <div>
            <h4>Event</h4>
            <ul>
              <li><a href="participants.html">Participants</a></li>
              <li><a href="rfp-details.html">RfP Details</a></li>
              <li><a href="teams.html">Teams &amp; RfP</a></li>
              <li><a href="upload-artifacts.html">Upload Artifacts</a></li>
              <li><a href="workshop-evaluation.html">Workshop Evaluation</a></li>
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
    /* Two thresholds: elements taller than half the viewport can never reach
       a 12% intersection ratio, so for those any intersection reveals them. */
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const tall = e.boundingClientRect.height > window.innerHeight * 0.5;
        if (tall || e.intersectionRatio >= 0.12) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: [0, 0.12] });
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
            <span class="rfp-icon ${CAT_TONES[r.filter] || "tone-lav"}">${r.icon}</span>
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
          <div class="team-id">
            <span class="team-logo grad-${(RFPS.find(r => r.id === t.rfp) || {}).filter || "web"}">${t.logo}</span>
            <div>
              <h3 class="team-name">${mark(t.name, q)}</h3>
              <p class="team-slogan">${t.slogan}</p>
            </div>
          </div>
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

  /* ---------------- Upload Artifacts page ---------------- */
  function renderUploadArtifacts() {
    const cta = document.getElementById("upload-cta");
    if (!cta) return;

    const deadline = new Date(UPLOAD.deadlineISO).getTime();
    const box = document.getElementById("upload-countdown");

    function drawCta(open) {
      if (!open) {
        cta.innerHTML = `<span class="eval-btn-soon upload-closed">🔒 Uploads closed at 4:30 PM — the pack you submitted is the pack that gets judged.</span>`;
        return;
      }
      cta.innerHTML = UPLOAD.url
        ? `<a class="btn btn-primary" id="upload-btn" href="${UPLOAD.url}" target="_blank" rel="noopener">📤 Open the Upload Folder ↗</a>`
        : `<span class="eval-btn-soon">📤 The upload folder link will be activated here shortly</span>`;
    }

    function tick() {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        box.innerHTML = `<div class="countdown-live" style="background:var(--rose);color:var(--rose-ink)">⛔ The submission window is closed</div>`;
        drawCta(false);
        clearInterval(timer);
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor(diff / 60000) % 60;
      const s = Math.floor(diff / 1000) % 60;
      box.innerHTML = [[h, "Hours"], [m, "Minutes"], [s, "Seconds"]].map(([v, l]) =>
        `<div class="count-cell"><b>${String(v).padStart(2, "0")}</b><span>${l}</span></div>`).join("");
    }
    drawCta(Date.now() < deadline);
    tick();
    const timer = setInterval(tick, 1000);

    /* ---- Submission index (one row per artifact, team spans its rows) ---- */
    const table = document.getElementById("upload-matrix");
    if (table) {
      function drawMatrix(indexArr, builtStamp) {
        const byRfp = {};
        (indexArr || []).forEach(e => { byRfp[e.rfp] = e.artifacts || {}; });

        const head = `<thead><tr>
          <th class="um-team">RfP · Customer · Team</th>
          <th>Artifact</th>
          <th>File</th>
          <th>Uploaded</th>
        </tr></thead>`;

        const ROWS = [{ n: 0, label: "The RfP (as issued)" }]
          .concat(ARTIFACT_COLUMNS.map((c, i) => ({ n: i + 1, label: c })));

        const rows = TEAMS.map(t => {
          const arts = byRfp[t.rfp] || {};
          return ROWS.map((r, i) => {
            const a = arts[String(r.n)];
            const teamCell = i === 0
              ? `<td class="um-team" rowspan="${ROWS.length}"><b>${t.rfp}</b><span>${t.customer}</span><span>${t.name}</span></td>`
              : "";
            return `<tr class="${i === 0 ? "um-first" : ""}${r.n === 0 ? " um-rfp" : ""}${a ? "" : " um-missing"}">
              ${teamCell}
              <td class="um-art"><span class="um-n">${r.n}.</span> ${r.label}</td>
              ${a
                ? `<td class="um-hit"><a href="${a.url}" download title="${a.name.replace(/"/g, "&quot;")}">📄 ${a.name}</a></td><td class="um-time-cell">${a.time}</td>`
                : `<td class="um-empty">—</td><td class="um-empty">—</td>`}
            </tr>`;
          }).join("");
        }).join("");

        table.innerHTML = head + `<tbody>${rows}</tbody>`;

        const built = document.getElementById("index-built");
        if (built && builtStamp) {
          built.querySelector("b").textContent = builtStamp + " (BST)";
          built.hidden = false;
        }
      }

      drawMatrix(typeof UPLOAD_INDEX !== "undefined" ? UPLOAD_INDEX : [],
                 typeof UPLOAD_INDEX_BUILT !== "undefined" ? UPLOAD_INDEX_BUILT : null);

      /* Re-fetch the index past every cache so each reload shows the newest build */
      fetch("js/uploads-index.js?fresh=" + Date.now(), { cache: "no-store" })
        .then(r => r.ok ? r.text() : Promise.reject())
        .then(src => {
          const idx = src.match(/const UPLOAD_INDEX = (\[[\s\S]*?\]);/);
          const stamp = src.match(/const UPLOAD_INDEX_BUILT = "([^"]*)";/);
          if (idx) drawMatrix(JSON.parse(idx[1]), stamp ? stamp[1] : null);
        })
        .catch(() => {});
    }
  }

  /* ---------------- RfP Details page ---------------- */
  function renderRfpDetails() {
    const grid = document.getElementById("rfp-file-grid");
    if (!grid) return;
    const input = document.getElementById("rfp-file-search");
    const pill = document.getElementById("rfp-file-count");

    function draw() {
      const q = (input && input.value || "").trim().toLowerCase();
      const list = RFP_FILES.filter(f => {
        const team = TEAMS.find(t => t.rfp === f.id) || {};
        return !q ||
          f.id.toLowerCase().includes(q) ||
          f.project.toLowerCase().includes(q) ||
          (team.name || "").toLowerCase().includes(q) ||
          (team.customer || "").toLowerCase().includes(q) ||
          (team.members || []).some(m => m.toLowerCase().includes(q));
      });
      if (pill) pill.textContent = list.length + " RfP" + (list.length === 1 ? "" : "s");
      grid.innerHTML = list.map((f, i) => {
        const team = TEAMS.find(t => t.rfp === f.id) || {};
        const rfp = RFPS.find(r => r.id === f.id) || {};
        return `
        <article class="eval-team" style="animation-delay:${Math.min(i * 40, 400)}ms">
          <div class="eval-team-top">
            <span class="team-logo grad-${rfp.filter || "web"}">${team.logo || "📦"}</span>
            <div>
              <h3 class="team-name">${f.id} · ${f.project}</h3>
              <div class="eval-team-meta">Team: <b>${team.name || "—"}</b> · Customer: <b>${team.customer || "—"}</b></div>
            </div>
          </div>
          <a class="btn btn-primary eval-btn" href="${f.file}" download="${f.download.replace(/"/g, "&quot;")}">⬇ Download RfP <span class="sample-size">${f.format} · ${f.size}</span></a>
        </article>`;
      }).join("") ||
        `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No RfP matches “${input.value}”.</p>`;
    }
    draw();
    if (input) input.addEventListener("input", draw);
  }

  /* ---------------- Customer Evaluation page ---------------- */
  function renderCustomerEval() {
    const critWrap = document.getElementById("cust-eval-criteria");
    if (critWrap) {
      const bubbles = ["lav", "sky", "mint", "peach", "gold"];
      critWrap.innerHTML = CUSTOMER_EVAL_CRITERIA.map((c, i) => `
        <div class="card reveal reveal-d${(i % 4) + 1}">
          <div class="icon-bubble bubble-${bubbles[i % bubbles.length]}">${c.icon}</div>
          <h3>${c.n}. ${c.title} <span class="crit-marks">5 marks</span></h3>
          <p>${c.detail}</p>
        </div>`).join("");
    }

    const formGrid = document.getElementById("eval-form-grid");
    if (formGrid) {
      const input = document.getElementById("eval-search");
      const pill = document.getElementById("eval-count");

      function draw() {
        const q = (input && input.value || "").trim().toLowerCase();
        const list = TEAMS.filter(t =>
          !q ||
          t.name.toLowerCase().includes(q) ||
          t.customer.toLowerCase().includes(q) ||
          t.rfp.toLowerCase().includes(q) ||
          t.members.some(m => m.toLowerCase().includes(q)));
        if (pill) pill.textContent = list.length + " team" + (list.length === 1 ? "" : "s");
        formGrid.innerHTML = list.map((t, i) => {
          const url = CUSTOMER_EVAL_FORMS[t.name];
          return `
          <article class="eval-team" style="animation-delay:${Math.min(i * 40, 400)}ms">
            <div class="eval-team-top">
              <span class="team-logo grad-${(RFPS.find(r => r.id === t.rfp) || {}).filter || "web"}">${t.logo}</span>
              <div>
                <h3 class="team-name">${t.name}</h3>
                <div class="eval-team-meta">${t.rfp} · Customer: <b>${t.customer}</b></div>
              </div>
            </div>
            ${url
              ? `<a class="btn btn-primary eval-btn" href="${url}" target="_blank" rel="noopener">Evaluate your customer ↗</a>`
              : `<span class="eval-btn eval-btn-soon">Form link coming soon</span>`}
          </article>`;
        }).join("") ||
          `<p style="grid-column:1/-1;text-align:center;color:var(--muted)">No team matches “${input.value}”.</p>`;
      }
      draw();
      if (input) input.addEventListener("input", draw);
    }
  }

  /* ---------------- Participants page ---------------- */
  /* Fun avatars pre-generated with DiceBear (big-smile for DMs, croodles for customers) */
  function funAvatar(prefix, name) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return "assets/avatars/" + prefix + "-" + slug + ".svg";
  }

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

      function draw(q) {
        const query = (q || "").trim().toLowerCase();
        const list = DMS.filter(([name, spec]) =>
          !query || name.toLowerCase().includes(query) || spec.toLowerCase().includes(query));
        pill.textContent = list.length + " DM" + (list.length === 1 ? "" : "s");
        dmGrid.innerHTML = list.map(([name, spec], i) => `
          <div class="person" style="animation-delay:${Math.min(i * 14, 350)}ms">
            <img class="avatar avatar-img" loading="lazy" alt="${name}"
                 src="${funAvatar("dm", name)}"
                 style="background:${SPEC_COLORS[spec] || "#7472c9"}">
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
      custGrid.innerHTML = CUSTOMERS.map((name, i) => `
          <div class="person" style="animation-delay:${Math.min(i * 25, 350)}ms">
            <img class="avatar avatar-img" loading="lazy" alt="${name}"
                 src="${funAvatar("cust", name)}"
                 style="background:${palette[i % palette.length]}">
            <span><span class="p-name">${name}</span></span>
          </div>`).join("");
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
    renderRfpDetails();
    renderUploadArtifacts();
    renderCustomerEval();
    renderParticipants();
    initCountdown();
    initTyping();
    initReveal();
    initCounters();
  });
})();
