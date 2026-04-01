// ── Gender SVG icons — classic ♂ / ♀ circle symbols ──────────────────
const GENDER_ICONS = {
  Men: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="9" cy="13" r="6.5" stroke="currentColor" stroke-width="2"/>
    <line x1="14" y1="8" x2="20" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <polyline points="15,2 20,2 20,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  Women: `<svg width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="6.5" stroke="currentColor" stroke-width="2"/>
    <line x1="9" y1="15" x2="9" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="5" y1="20" x2="13" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
};

// Category badge colours for Kids division
const CAT_STYLE = {
  PULL:   { bg: "#0984e3", color: "#fff" },
  PUSH:   { bg: "#e17055", color: "#fff" },
  LEGS:   { bg: "#00b894", color: "#fff" },
  CORE:   { bg: "#6c5ce7", color: "#fff" },
  CARDIO: { bg: "#fdcb6e", color: "#2d3436" },
};

// ── State ────────────────────────────────────────────────────────────
const state = {
  circuits:    [...CIRCUIT_LIBRARY],
  division:    "Premiers Pas",
  gender:      "Men",
  selectedIds: [],
  printMode:   6,          // 3 or 6 cards per A4
};

// ── DOM refs ─────────────────────────────────────────────────────────
const elements = {
  divisionSwitch: document.querySelector("#division-switch"),
  genderSwitch:   document.querySelector("#gender-switch"),
  printSheet:     document.querySelector("#print-sheet"),
  printSheet2:    document.querySelector("#print-sheet-2"),
  cardsGrid:      document.querySelector("#cards-grid"),
  printGrid:      document.querySelector("#print-grid"),
  selectionCount: document.querySelector("#selection-count"),
  selectionMax:   document.querySelector("#selection-max"),
  printModeSwitch:document.querySelector("#print-mode-switch"),
  cardTemplate:   document.querySelector("#card-template"),
};

// ── Background texture ───────────────────────────────────────────────
function toDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildTexture(division) {
  if (division === "Elite") return buildEliteTexture();

  const palette = {
    Kids:           { top: "#00b894", mid: "#00845a", bottom: "#004d35", glow: "#fdcb6e" },
    "Premiers Pas": { top: "#204fb8", mid: "#17337f", bottom: "#0c1d45", glow: "#f3c55d" },
    Espoir:         { top: "#1247b6", mid: "#0d2d74", bottom: "#081938", glow: "#70d7ff" },
    "Semi-Pro":     { top: "#4c1d95", mid: "#3b0764", bottom: "#1e0040", glow: "#c084fc" },
  }[division];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="${palette.top}" />
          <stop offset="50%"  stop-color="${palette.mid}" />
          <stop offset="100%" stop-color="${palette.bottom}" />
        </linearGradient>
      </defs>
      <rect width="900" height="1600" fill="url(#bg)" />
      <g opacity="0.10" stroke="#fff" stroke-width="10">
        <path d="M120 40 L780 1540"/><path d="M280 0 L900 1200"/>
      </g>
      <g opacity="0.45" stroke="${palette.glow}" stroke-width="5" fill="none">
        <path d="M0 1550 C90 1510 140 1440 210 1320 C290 1180 370 1210 470 1240"/>
        <path d="M0 1590 C120 1550 180 1480 270 1360 C340 1270 430 1210 550 1235"/>
      </g>
      <circle cx="820" cy="90" r="60" fill="${palette.glow}" opacity="0.14"/>
    </svg>`;

  return toDataUri(svg);
}

function buildBossTexture() {
  const gold   = "#d4a843";
  const plat   = "#e8eaf0";
  const purple = "#c084fc";
  const cyan   = "#70d7ff";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bossbg" x1="0%" y1="0%" x2="15%" y2="100%">
          <stop offset="0%"   stop-color="#08060f"/>
          <stop offset="40%"  stop-color="#05040b"/>
          <stop offset="100%" stop-color="#030208"/>
        </linearGradient>
        <linearGradient id="holo1" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%"   stop-color="${gold}"   stop-opacity="0"/>
          <stop offset="30%"  stop-color="${gold}"   stop-opacity="0.22"/>
          <stop offset="50%"  stop-color="#ffffff"   stop-opacity="0.18"/>
          <stop offset="70%"  stop-color="${purple}" stop-opacity="0.20"/>
          <stop offset="100%" stop-color="${purple}" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="holo2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stop-color="${cyan}"   stop-opacity="0"/>
          <stop offset="40%"  stop-color="${cyan}"   stop-opacity="0.12"/>
          <stop offset="60%"  stop-color="#00b894"   stop-opacity="0.10"/>
          <stop offset="100%" stop-color="#00b894"   stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="platshimmer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="${plat}"   stop-opacity="0"/>
          <stop offset="44%"  stop-color="${plat}"   stop-opacity="0.22"/>
          <stop offset="50%"  stop-color="#ffffff"   stop-opacity="0.40"/>
          <stop offset="56%"  stop-color="${plat}"   stop-opacity="0.22"/>
          <stop offset="100%" stop-color="${plat}"   stop-opacity="0"/>
        </linearGradient>
      </defs>

      <rect width="900" height="1600" fill="url(#bossbg)"/>
      <rect width="900" height="1600" fill="url(#holo1)"      opacity="0.85"/>
      <rect width="900" height="1600" fill="url(#holo2)"      opacity="0.65"/>

      <!-- Fine grid -->
      <g opacity="0.055" stroke="${plat}" stroke-width="1" fill="none">
        <path d="M0 200 L900 200"/><path d="M0 400 L900 400"/>
        <path d="M0 600 L900 600"/><path d="M0 800 L900 800"/>
        <path d="M0 1000 L900 1000"/><path d="M0 1200 L900 1200"/>
        <path d="M0 1400 L900 1400"/>
        <path d="M100 0 L100 1600"/><path d="M200 0 L200 1600"/>
        <path d="M300 0 L300 1600"/><path d="M400 0 L400 1600"/>
        <path d="M500 0 L500 1600"/><path d="M600 0 L600 1600"/>
        <path d="M700 0 L700 1600"/><path d="M800 0 L800 1600"/>
      </g>

      <!-- Platinum diagonal slashes -->
      <g opacity="0.22" stroke="${plat}" stroke-width="14" stroke-linecap="round">
        <path d="M60 0 L540 1600"/>
        <path d="M220 0 L700 1600"/>
        <path d="M430 0 L910 1600"/>
      </g>
      <!-- Thin gold accents -->
      <g opacity="0.18" stroke="${gold}" stroke-width="2.5">
        <path d="M20 0 L500 1600"/>
        <path d="M145 0 L625 1600"/>
        <path d="M710 0 L900 560"/>
      </g>
      <!-- Purple accent -->
      <g opacity="0.14" stroke="${purple}" stroke-width="2">
        <path d="M330 0 L810 1600"/>
      </g>

      <!-- Platinum shimmer band -->
      <rect width="900" height="1600" fill="url(#platshimmer)" opacity="0.55"/>

      <!-- Bottom multi-color waves -->
      <g opacity="0.50" stroke="${gold}" stroke-width="3.5" fill="none">
        <path d="M0 1500 C100 1460 180 1390 280 1310 C380 1230 460 1270 580 1300 C680 1330 760 1280 900 1260"/>
        <path d="M0 1540 C120 1510 200 1440 300 1360 C400 1280 500 1310 620 1340 C720 1365 800 1315 900 1300"/>
        <path d="M0 1580 C80 1560 160 1520 260 1460 C360 1400 440 1420 560 1450"/>
      </g>
      <g opacity="0.28" stroke="${purple}" stroke-width="2" fill="none">
        <path d="M0 1515 C90 1485 170 1425 270 1365 C370 1305 450 1335 570 1360"/>
      </g>
      <g opacity="0.20" stroke="${cyan}" stroke-width="2" fill="none">
        <path d="M0 1560 C110 1530 200 1470 310 1410 C420 1350 500 1375 620 1400"/>
      </g>

      <!-- Sparkle stars -->
      <g fill="#ffffff">
        <polygon points="820,55 825,70 840,70 828,79 833,94 820,85 807,94 812,79 800,70 815,70" opacity="0.75"/>
        <polygon points="76,1488 79,1498 89,1498 81,1504 84,1514 76,1508 68,1514 71,1504 63,1498 73,1498"  opacity="0.60"/>
        <polygon points="460,775 462,782 469,782 463,786 465,793 460,789 455,793 457,786 451,782 458,782"  opacity="0.55"/>
      </g>
      <g fill="${gold}" opacity="0.65">
        <circle cx="200" cy="1210" r="3"/>
        <circle cx="700" cy="475"  r="2.5"/>
        <circle cx="340" cy="920"  r="2"/>
      </g>
      <g fill="${cyan}" opacity="0.50">
        <circle cx="620" cy="320" r="2"/>
        <circle cx="140" cy="640" r="1.8"/>
      </g>

      <!-- Central radiant orb -->
      <circle cx="820" cy="75" r="100" fill="${gold}"   opacity="0.09"/>
      <circle cx="820" cy="75" r="55"  fill="${plat}"   opacity="0.14"/>
      <circle cx="820" cy="75" r="25"  fill="#ffffff"   opacity="0.28"/>
      <circle cx="820" cy="75" r="8"   fill="${gold}"   opacity="0.80"/>

      <!-- Bottom accent orb -->
      <circle cx="70" cy="1530" r="35" fill="${purple}" opacity="0.12"/>

      <!-- Top border lines -->
      <line x1="0" y1="2" x2="900" y2="2" stroke="${plat}" stroke-width="3"   opacity="0.65"/>
      <line x1="0" y1="6" x2="900" y2="6" stroke="${gold}" stroke-width="1.5" opacity="0.45"/>
    </svg>`;
  return toDataUri(svg);
}

function buildEliteTexture() {
  const gold   = "#d4a843";
  const gold2  = "#f5d97a";
  const silver = "#c8cfd8";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ebg" x1="0%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%"   stop-color="#0c0e14"/>
          <stop offset="40%"  stop-color="#080b12"/>
          <stop offset="100%" stop-color="#030508"/>
        </linearGradient>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="${gold2}" stop-opacity="0"/>
          <stop offset="48%"  stop-color="${gold2}" stop-opacity="0.18"/>
          <stop offset="52%"  stop-color="#ffffff"  stop-opacity="0.28"/>
          <stop offset="100%" stop-color="${gold2}" stop-opacity="0"/>
        </linearGradient>
      </defs>

      <!-- Base near-black -->
      <rect width="900" height="1600" fill="url(#ebg)"/>

      <!-- Subtle carbon/grid pattern -->
      <g opacity="0.07" stroke="${silver}" stroke-width="1.5" fill="none">
        <path d="M0 200 L900 200"/><path d="M0 400 L900 400"/>
        <path d="M0 600 L900 600"/><path d="M0 800 L900 800"/>
        <path d="M0 1000 L900 1000"/><path d="M0 1200 L900 1200"/>
        <path d="M0 1400 L900 1400"/>
        <path d="M150 0 L150 1600"/><path d="M300 0 L300 1600"/>
        <path d="M450 0 L450 1600"/><path d="M600 0 L600 1600"/>
        <path d="M750 0 L750 1600"/>
      </g>

      <!-- Gold diagonal slashes (main) -->
      <g opacity="0.28" stroke="${gold}" stroke-width="12" stroke-linecap="round">
        <path d="M80 0 L560 1600"/>
        <path d="M240 0 L720 1600"/>
      </g>
      <!-- Thin gold accent lines -->
      <g opacity="0.18" stroke="${gold2}" stroke-width="3">
        <path d="M40 0 L520 1600"/>
        <path d="M600 0 L900 820"/>
      </g>

      <!-- Gold shimmer band -->
      <rect width="900" height="1600" fill="url(#shimmer)" opacity="0.6"/>

      <!-- Bottom gold waves -->
      <g opacity="0.55" stroke="${gold}" stroke-width="4" fill="none">
        <path d="M0 1500 C100 1460 180 1390 280 1310 C380 1230 460 1270 580 1300 C680 1330 760 1280 900 1260"/>
        <path d="M0 1540 C120 1510 200 1440 300 1360 C400 1280 500 1310 620 1340 C720 1365 800 1315 900 1300"/>
        <path d="M0 1580 C80 1560 160 1520 260 1460 C360 1400 440 1420 560 1450"/>
      </g>

      <!-- Large gold orb top right -->
      <circle cx="820" cy="80" r="80" fill="${gold}" opacity="0.12"/>
      <circle cx="820" cy="80" r="40" fill="${gold2}" opacity="0.22"/>
      <!-- Small accent orbs -->
      <circle cx="60"  cy="1520" r="30" fill="${gold}" opacity="0.14"/>
      <circle cx="460" cy="780"  r="12" fill="${gold2}" opacity="0.20"/>
      <circle cx="700" cy="480"  r="8"  fill="${silver}" opacity="0.18"/>

      <!-- Top thin gold border line -->
      <line x1="0" y1="2" x2="900" y2="2" stroke="${gold}" stroke-width="3" opacity="0.5"/>
    </svg>`;
  return toDataUri(svg);
}

// ── Build division buttons ────────────────────────────────────────────
function createDivisionButtons() {
  elements.divisionSwitch.innerHTML = "";
  DIVISIONS.forEach((division) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = division === state.division ? "chip active" : "chip";
    btn.innerHTML = `
      <span class="chip-label">${division}</span>
      <span class="chip-desc">${DIVISION_META[division].desc}</span>`;
    btn.addEventListener("click", () => {
      state.division = division;
      render();
    });
    elements.divisionSwitch.appendChild(btn);
  });
}

// ── Build gender toggle buttons ───────────────────────────────────────
function createGenderButtons() {
  elements.genderSwitch.innerHTML = "";
  GENDERS.forEach((gender) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = gender === state.gender ? "gender-btn active" : "gender-btn";
    btn.innerHTML = `${GENDER_ICONS[gender]}<span>${gender}</span>`;
    btn.addEventListener("click", () => {
      state.gender = gender;
      render();
    });
    elements.genderSwitch.appendChild(btn);
  });
}

// ── Build print-mode toggle ───────────────────────────────────────────
function createPrintModeButtons() {
  elements.printModeSwitch.innerHTML = "";
  [3, 6].forEach((n) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = n === state.printMode ? "chip active" : "chip";
    btn.textContent = `${n} / page`;
    btn.addEventListener("click", () => {
      state.printMode = n;
      state.selectedIds = state.selectedIds.slice(0, n);
      renderPrintGrid();
      createPrintModeButtons();
      updateSelectionInfo();
    });
    elements.printModeSwitch.appendChild(btn);
  });
}

// ── Helpers ───────────────────────────────────────────────────────────
function getVisibleCircuits() {
  const all     = state.circuits.filter(
    (c) => c.division === state.division && c.gender === state.gender
  );
  const boss    = all.filter((c) =>  c.isBoss);
  const regular = all.filter((c) => !c.isBoss);
  return [...boss, ...regular];   // boss card first — immediately visible
}

function updateSelectionInfo() {
  elements.selectionCount.textContent = String(state.selectedIds.length);
  elements.selectionMax.textContent   = String(state.printMode);
}

// ── Build one card ────────────────────────────────────────────────────
function buildCard(circuit, isPrint = false) {
  const theme    = DIVISION_THEME[circuit.division];
  const isKids   = circuit.division === "Kids";
  const fragment = elements.cardTemplate.content.cloneNode(true);
  const root     = fragment.querySelector(".circuit-card");
  const toggle   = fragment.querySelector(".card-toggle");
  const shell    = fragment.querySelector(".card-shell");
  const bg       = fragment.querySelector(".card-bg");
  const title    = fragment.querySelector(".card-title");
  const subtitle = fragment.querySelector(".card-subtitle");
  const gender   = fragment.querySelector(".card-gender");
  const round    = fragment.querySelector(".card-round");
  const list     = fragment.querySelector(".exercise-list");
  const timeCap  = fragment.querySelector(".time-cap");
  const tag      = fragment.querySelector(".card-tag");

  shell.style.setProperty("--accent", theme.accent);
  bg.src = buildTexture(circuit.division);

  title.textContent    = circuit.title;
  subtitle.textContent = circuit.subtitle;
  gender.textContent   = circuit.gender;
  round.textContent    = circuit.round;
  timeCap.textContent  = `Time cap : ${circuit.timeCap}`;
  tag.textContent      = `${theme.tag} · ${circuit.division}`;

  // Boss card overrides
  if (circuit.isBoss) {
    root.classList.add("card-boss");
    bg.src = buildBossTexture();
    shell.style.setProperty("--accent", "#d4a843");
    timeCap.style.color = "#d4a843";
    tag.textContent = `⚡ BOSS · ${circuit.division}`;
    // BOSS badge
    const bossBadge = document.createElement("div");
    bossBadge.className = "boss-badge";
    bossBadge.innerHTML = `<span>⚡ BOSS</span><span class="boss-next">Niveau suivant →</span>`;
    shell.insertBefore(bossBadge, shell.querySelector(".card-frame"));
  }

  // Elite premium overrides
  if (circuit.division === "Elite") {
    root.classList.add("card-elite");
    timeCap.style.color = "#d4a843";
    shell.style.setProperty("--frame-border", "rgba(212,168,67,0.35)");
  }

  if (isKids) root.classList.add("card-kids");

  circuit.exercises.forEach((exercise) => {
    const item = document.createElement("li");

    if (isKids && typeof exercise === "object") {
      const style = CAT_STYLE[exercise.cat] || CAT_STYLE.CARDIO;
      const badge = document.createElement("span");
      badge.className = "ex-badge";
      badge.textContent = exercise.cat;
      badge.style.background = style.bg;
      badge.style.color = style.color;
      const text = document.createElement("span");
      text.textContent = exercise.text;
      item.appendChild(badge);
      item.appendChild(text);
      if (exercise.unbroken) {
        const ub = document.createElement("span");
        ub.className = "badge-unbroken";
        ub.textContent = "UNBROKEN";
        item.appendChild(ub);
      }
    } else {
      const str = typeof exercise === "string" ? exercise : exercise.text;
      item.innerHTML = str.replace(
        /(@\d+\s*kg)/gi,
        '<span class="kg-load">$1</span>'
      );
      if (typeof exercise === "object" && exercise.unbroken) {
        const ub = document.createElement("span");
        ub.className = "badge-unbroken";
        ub.textContent = "UNBROKEN";
        item.appendChild(ub);
      }
    }

    list.appendChild(item);
  });

  if (isPrint) {
    root.classList.add("print-card");
    toggle.remove();
  } else {
    const active = state.selectedIds.includes(circuit.id);
    root.classList.toggle("selected", active);
    toggle.textContent = active ? "✓ Sélectionné" : "+ Ajouter";
    toggle.addEventListener("click", () => toggleSelection(circuit.id));
  }

  return fragment;
}

// ── Render carousel ───────────────────────────────────────────────────
function renderCards() {
  const visible = getVisibleCircuits();
  elements.cardsGrid.innerHTML = "";
  visible.forEach((circuit) => {
    elements.cardsGrid.appendChild(buildCard(circuit));
  });
}

// ── Render print tray ─────────────────────────────────────────────────
function renderPrintGrid() {
  const max    = state.printMode;
  const chosen = state.selectedIds
    .map((id) => state.circuits.find((c) => c.id === id))
    .filter(Boolean)
    .slice(0, max);

  elements.printGrid.innerHTML = "";
  elements.printGrid.className = `print-grid mode-${max}`;

  chosen.forEach((circuit) => {
    elements.printGrid.appendChild(buildCard(circuit, true));
  });

  for (let i = chosen.length; i < max; i++) {
    const slot = document.createElement("div");
    slot.className = "print-slot";
    slot.innerHTML = `<div class="print-slot-inner"><span>Carte ${i + 1}</span></div>`;
    elements.printGrid.appendChild(slot);
  }

  updateSelectionInfo();
}

// ── Toggle card selection ─────────────────────────────────────────────
function toggleSelection(id) {
  const max = state.printMode;
  if (state.selectedIds.includes(id)) {
    state.selectedIds = state.selectedIds.filter((x) => x !== id);
  } else if (state.selectedIds.length < max) {
    state.selectedIds = [...state.selectedIds, id];
  } else {
    state.selectedIds = [...state.selectedIds.slice(1), id];
  }
  renderCards();
  renderPrintGrid();
}

// ── Full render ───────────────────────────────────────────────────────
function render() {
  createDivisionButtons();
  createGenderButtons();
  renderCards();
  renderPrintGrid();
}

// ── Events ────────────────────────────────────────────────────────────
function bindEvents() {
  const printHandler = () => { renderPrintGrid(); window.print(); };
  elements.printSheet.addEventListener("click", printHandler);
  if (elements.printSheet2) elements.printSheet2.addEventListener("click", printHandler);
}

// ── Init ──────────────────────────────────────────────────────────────
function initialize() {
  createPrintModeButtons();
  bindEvents();
  render();
}

initialize();
