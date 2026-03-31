// ── Competition Circuits — Bonus Modal ────────────────────────────────
// Inspirés des formats officiels publiés par CBL & Atlas Corporation
// Organisation : par organisme → phase → division → genre

const COMP_ORGS = {
  CBL:   { name: "Calisthenics Battle League", short: "CBL",   color: "#e53e3e", textColor: "#fff" },
  Atlas: { name: "Atlas Corporation",          short: "Atlas", color: "#d4a843", textColor: "#000" },
};

const COMPETITION_CIRCUITS = [

  // ════════════════════════════════════════════════════════════════════
  //  CBL — Qualifications 2024
  // ════════════════════════════════════════════════════════════════════

  {
    id: "cbl-2024-q-rookie-m",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Rookie", divisionLabel: "Rookie (≈ Premiers Pas)",
    gender: "Men",
    title: "WOD Qualif · Rookie Men",
    format: "AMRAP 8 min",
    note: "Score = total de reps au buzzer",
    exercises: [
      { reps: "10", exercise: "Tractions australiennes" },
      { reps: "15", exercise: "Push-up" },
      { reps: "20", exercise: "Air squat" },
      { reps: "10", exercise: "Dips sur parallèles" },
    ],
  },
  {
    id: "cbl-2024-q-rookie-w",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Rookie", divisionLabel: "Rookie (≈ Premiers Pas)",
    gender: "Women",
    title: "WOD Qualif · Rookie Women",
    format: "AMRAP 8 min",
    note: "Score = total de reps au buzzer",
    exercises: [
      { reps: "10", exercise: "Tractions australiennes" },
      { reps: "12", exercise: "Push-up sur genoux" },
      { reps: "20", exercise: "Air squat" },
      { reps: "8",  exercise: "Dips sur banc" },
    ],
  },
  {
    id: "cbl-2024-q-amateur-m",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Amateur", divisionLabel: "Amateur (≈ Espoir)",
    gender: "Men",
    title: "WOD Qualif · Amateur Men",
    format: "3 rounds · For Time",
    exercises: [
      { reps: "8",  exercise: "Tractions" },
      { reps: "15", exercise: "Push-up" },
      { reps: "10", exercise: "Dips parallèles" },
      { reps: "12", exercise: "Squat sauté" },
    ],
  },
  {
    id: "cbl-2024-q-amateur-w",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Amateur", divisionLabel: "Amateur (≈ Espoir)",
    gender: "Women",
    title: "WOD Qualif · Amateur Women",
    format: "3 rounds · For Time",
    exercises: [
      { reps: "6",  exercise: "Tractions (bande élastique OK)" },
      { reps: "12", exercise: "Push-up" },
      { reps: "8",  exercise: "Dips assistés" },
      { reps: "15", exercise: "Squat sauté" },
    ],
  },
  {
    id: "cbl-2024-q-pro-m",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Pro", divisionLabel: "Pro (≈ Semi-Pro)",
    gender: "Men",
    title: "WOD Qualif · Pro Men",
    format: "4 rounds · For Time",
    exercises: [
      { reps: "5",  exercise: "Muscle-up" },
      { reps: "10", exercise: "Tractions lestées @10 kg" },
      { reps: "12", exercise: "Dips lestés @10 kg" },
      { reps: "15", exercise: "Squat bulgare total (chaque jambe)" },
    ],
  },
  {
    id: "cbl-2024-q-pro-w",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Pro", divisionLabel: "Pro (≈ Semi-Pro)",
    gender: "Women",
    title: "WOD Qualif · Pro Women",
    format: "4 rounds · For Time",
    exercises: [
      { reps: "3",  exercise: "Muscle-up (ou 8 chin-up lestées @5 kg)" },
      { reps: "8",  exercise: "Tractions lestées @5 kg" },
      { reps: "10", exercise: "Dips lestés @5 kg" },
      { reps: "12", exercise: "Squat bulgare total" },
    ],
  },
  {
    id: "cbl-2024-q-elite-m",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Men",
    title: "WOD Qualif · Elite Men",
    format: "5 rounds · For Time",
    exercises: [
      { reps: "8",   exercise: "Muscle-up" },
      { reps: "15",  exercise: "Dips lestés @20 kg" },
      { reps: "12",  exercise: "Tractions lestées @20 kg" },
      { reps: "20",  exercise: "Pistol squat total" },
      { reps: "30s", exercise: "L-sit barres parallèles" },
    ],
  },
  {
    id: "cbl-2024-q-elite-w",
    org: "CBL", phase: "Qualifications", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Women",
    title: "WOD Qualif · Elite Women",
    format: "5 rounds · For Time",
    exercises: [
      { reps: "5",   exercise: "Muscle-up (ou 10 tractions lestées @10 kg)" },
      { reps: "12",  exercise: "Dips lestés @10 kg" },
      { reps: "10",  exercise: "Tractions lestées @10 kg" },
      { reps: "15",  exercise: "Pistol squat total" },
      { reps: "20s", exercise: "L-sit barres parallèles" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  //  CBL — Régionales 2024
  // ════════════════════════════════════════════════════════════════════

  {
    id: "cbl-2024-r-amateur-m",
    org: "CBL", phase: "Régionales", year: 2024,
    division: "Amateur", divisionLabel: "Amateur (≈ Espoir)",
    gender: "Men",
    title: "WOD Régional · Amateur Men",
    format: "For Time · 3 rounds",
    exercises: [
      { reps: "10", exercise: "Tractions" },
      { reps: "15", exercise: "Push-up archer" },
      { reps: "20", exercise: "Squat sauté" },
      { reps: "10", exercise: "Dips parallèles" },
      { reps: "8",  exercise: "Burpee pull-up" },
    ],
  },
  {
    id: "cbl-2024-r-pro-m",
    org: "CBL", phase: "Régionales", year: 2024,
    division: "Pro", divisionLabel: "Pro (≈ Semi-Pro)",
    gender: "Men",
    title: "WOD Régional · Pro Men",
    format: "For Time · 4 rounds",
    exercises: [
      { reps: "6",  exercise: "Muscle-up" },
      { reps: "12", exercise: "Tractions lestées @15 kg" },
      { reps: "15", exercise: "Dips lestés @15 kg" },
      { reps: "20", exercise: "Squat bulgare total" },
      { reps: "8",  exercise: "Handstand push-up" },
    ],
  },
  {
    id: "cbl-2024-r-elite-m",
    org: "CBL", phase: "Régionales", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Men",
    title: "WOD Régional · Elite Men",
    format: "For Time · 5 rounds",
    exercises: [
      { reps: "10",  exercise: "Muscle-up" },
      { reps: "20",  exercise: "Tractions lestées @25 kg" },
      { reps: "20",  exercise: "Dips lestés @25 kg" },
      { reps: "15",  exercise: "Pistol squat total" },
      { reps: "10",  exercise: "Handstand push-up strict" },
      { reps: "30s", exercise: "Front lever hold" },
    ],
  },
  {
    id: "cbl-2024-r-elite-w",
    org: "CBL", phase: "Régionales", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Women",
    title: "WOD Régional · Elite Women",
    format: "For Time · 4 rounds",
    exercises: [
      { reps: "6",   exercise: "Muscle-up" },
      { reps: "15",  exercise: "Tractions lestées @15 kg" },
      { reps: "15",  exercise: "Dips lestés @12 kg" },
      { reps: "12",  exercise: "Pistol squat total" },
      { reps: "8",   exercise: "Handstand push-up" },
      { reps: "20s", exercise: "Front lever hold" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  //  CBL — Nationales 2024
  // ════════════════════════════════════════════════════════════════════

  {
    id: "cbl-2024-n-elite-m",
    org: "CBL", phase: "Nationales", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Men",
    title: "WOD Nationale · Elite Men",
    format: "For Time · 6 rounds · Time cap 30 min",
    note: "Circuit utilisé en finale nationale — qualité exigée par les juges",
    exercises: [
      { reps: "12",  exercise: "Muscle-up" },
      { reps: "20",  exercise: "Tractions lestées @30 kg" },
      { reps: "25",  exercise: "Dips lestés @30 kg" },
      { reps: "20",  exercise: "Pistol squat total" },
      { reps: "10",  exercise: "Handstand push-up strict" },
      { reps: "30s", exercise: "Front lever hold" },
      { reps: "20s", exercise: "Back lever hold" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  //  Atlas Corporation — Qualifications 2024
  // ════════════════════════════════════════════════════════════════════

  {
    id: "atlas-2024-q-rookie-m",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Rookie", divisionLabel: "Rookie (≈ Premiers Pas)",
    gender: "Men",
    title: "Calisthenia Qualif · Rookie Men",
    format: "Max Reps · 10 min total",
    note: "Les reps de chaque exercice s'additionnent pour le score total",
    exercises: [
      { reps: "MAX", exercise: "Pull-up (prise pronation)" },
      { reps: "MAX", exercise: "Dips parallèles" },
      { reps: "MAX", exercise: "Push-up" },
      { reps: "MAX", exercise: "Air squat" },
    ],
  },
  {
    id: "atlas-2024-q-rookie-w",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Rookie", divisionLabel: "Rookie (≈ Premiers Pas)",
    gender: "Women",
    title: "Calisthenia Qualif · Rookie Women",
    format: "Max Reps · 10 min total",
    note: "Les reps de chaque exercice s'additionnent pour le score total",
    exercises: [
      { reps: "MAX", exercise: "Tractions australiennes" },
      { reps: "MAX", exercise: "Dips sur banc" },
      { reps: "MAX", exercise: "Push-up" },
      { reps: "MAX", exercise: "Air squat" },
    ],
  },
  {
    id: "atlas-2024-q-amateur-m",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Amateur", divisionLabel: "Amateur (≈ Espoir)",
    gender: "Men",
    title: "Calisthenia Qualif · Amateur Men",
    format: "AMRAP 12 min",
    exercises: [
      { reps: "10", exercise: "Tractions" },
      { reps: "15", exercise: "Dips" },
      { reps: "20", exercise: "Push-up" },
      { reps: "15", exercise: "Squat sauté" },
      { reps: "8",  exercise: "Burpee pull-up" },
    ],
  },
  {
    id: "atlas-2024-q-pro-m",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Pro", divisionLabel: "Pro (≈ Semi-Pro)",
    gender: "Men",
    title: "Calisthenia Qualif · Pro Men",
    format: "5 rounds · For Time",
    exercises: [
      { reps: "8",  exercise: "Tractions lestées @10 kg" },
      { reps: "10", exercise: "Dips lestés @10 kg" },
      { reps: "6",  exercise: "Muscle-up" },
      { reps: "20", exercise: "Squat bulgare total" },
      { reps: "8",  exercise: "Pike push-up strict" },
    ],
  },
  {
    id: "atlas-2024-q-pro-w",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Pro", divisionLabel: "Pro (≈ Semi-Pro)",
    gender: "Women",
    title: "Calisthenia Qualif · Pro Women",
    format: "5 rounds · For Time",
    exercises: [
      { reps: "6",  exercise: "Tractions lestées @5 kg" },
      { reps: "8",  exercise: "Dips lestés @5 kg" },
      { reps: "3",  exercise: "Muscle-up (ou 6 chin-up lestées @8 kg)" },
      { reps: "15", exercise: "Squat bulgare total" },
      { reps: "8",  exercise: "Pike push-up strict" },
    ],
  },
  {
    id: "atlas-2024-q-elite-m",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Men",
    title: "Calisthenia Qualif · Elite Men",
    format: "For Time · 5 rounds · Time cap 25 min",
    exercises: [
      { reps: "10",  exercise: "Muscle-up" },
      { reps: "20",  exercise: "Tractions lestées @20 kg" },
      { reps: "20",  exercise: "Dips lestés @20 kg" },
      { reps: "12",  exercise: "Pistol squat total" },
      { reps: "8",   exercise: "Handstand push-up" },
      { reps: "20s", exercise: "Front lever hold" },
    ],
  },
  {
    id: "atlas-2024-q-elite-w",
    org: "Atlas", phase: "Qualifications", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Women",
    title: "Calisthenia Qualif · Elite Women",
    format: "For Time · 5 rounds · Time cap 25 min",
    exercises: [
      { reps: "6",   exercise: "Muscle-up (ou 12 tractions lestées @10 kg)" },
      { reps: "15",  exercise: "Dips lestés @10 kg" },
      { reps: "12",  exercise: "Tractions lestées @10 kg" },
      { reps: "10",  exercise: "Pistol squat total" },
      { reps: "6",   exercise: "Handstand push-up" },
      { reps: "15s", exercise: "Front lever hold" },
    ],
  },

  // ════════════════════════════════════════════════════════════════════
  //  Atlas Corporation — Nationales 2024
  // ════════════════════════════════════════════════════════════════════

  {
    id: "atlas-2024-n-elite-m",
    org: "Atlas", phase: "Nationales", year: 2024,
    division: "Elite", divisionLabel: "Elite",
    gender: "Men",
    title: "Calisthenia Finale · Elite Men",
    format: "For Time · 6 rounds · Time cap 30 min",
    note: "Finale nationale — circuit validé par les juges officiels",
    exercises: [
      { reps: "12",  exercise: "Muscle-up" },
      { reps: "20",  exercise: "Tractions lestées @25 kg" },
      { reps: "25",  exercise: "Dips lestés @25 kg" },
      { reps: "20",  exercise: "Pistol squat total" },
      { reps: "10",  exercise: "Handstand push-up strict" },
      { reps: "30s", exercise: "Front lever hold" },
      { reps: "20s", exercise: "Back lever hold" },
    ],
  },
];

// ── Modal Logic ────────────────────────────────────────────────────────
const bonusState = {
  org:      "all",
  phase:    "all",
  division: "all",
  gender:   "all",
};

function openBonusModal() {
  document.getElementById("bonus-modal").classList.add("open");
  document.body.classList.add("modal-open");
  renderBonusCircuits();
}

function closeBonusModal() {
  document.getElementById("bonus-modal").classList.remove("open");
  document.body.classList.remove("modal-open");
}

function getFilteredCircuits() {
  return COMPETITION_CIRCUITS.filter((c) => {
    if (bonusState.org      !== "all" && c.org      !== bonusState.org)      return false;
    if (bonusState.phase    !== "all" && c.phase    !== bonusState.phase)    return false;
    if (bonusState.division !== "all" && c.division !== bonusState.division) return false;
    if (bonusState.gender   !== "all" && c.gender   !== bonusState.gender)   return false;
    return true;
  });
}

// ── Competition card texture ───────────────────────────────────────────
function buildCompTexture(org) {
  if (org === "Atlas") return buildEliteTexture();

  // CBL — near-black with red diagonal slashes (mirrors buildEliteTexture)
  const red  = "#e53e3e";
  const red2 = "#ff6b6b";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1600" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cblbg" x1="0%" y1="0%" x2="10%" y2="100%">
          <stop offset="0%"   stop-color="#0e0305"/>
          <stop offset="40%"  stop-color="#090203"/>
          <stop offset="100%" stop-color="#050102"/>
        </linearGradient>
        <linearGradient id="cblshimmer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="${red2}" stop-opacity="0"/>
          <stop offset="48%"  stop-color="${red2}" stop-opacity="0.14"/>
          <stop offset="52%"  stop-color="#ffffff"  stop-opacity="0.20"/>
          <stop offset="100%" stop-color="${red2}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="900" height="1600" fill="url(#cblbg)"/>
      <g opacity="0.07" stroke="#c8cfd8" stroke-width="1.5" fill="none">
        <path d="M0 200 L900 200"/><path d="M0 400 L900 400"/>
        <path d="M0 600 L900 600"/><path d="M0 800 L900 800"/>
        <path d="M0 1000 L900 1000"/><path d="M0 1200 L900 1200"/>
        <path d="M0 1400 L900 1400"/>
        <path d="M150 0 L150 1600"/><path d="M300 0 L300 1600"/>
        <path d="M450 0 L450 1600"/><path d="M600 0 L600 1600"/>
        <path d="M750 0 L750 1600"/>
      </g>
      <g opacity="0.28" stroke="${red}" stroke-width="12" stroke-linecap="round">
        <path d="M80 0 L560 1600"/>
        <path d="M240 0 L720 1600"/>
      </g>
      <g opacity="0.18" stroke="${red2}" stroke-width="3">
        <path d="M40 0 L520 1600"/>
        <path d="M600 0 L900 820"/>
      </g>
      <rect width="900" height="1600" fill="url(#cblshimmer)" opacity="0.6"/>
      <g opacity="0.55" stroke="${red}" stroke-width="4" fill="none">
        <path d="M0 1500 C100 1460 180 1390 280 1310 C380 1230 460 1270 580 1300 C680 1330 760 1280 900 1260"/>
        <path d="M0 1540 C120 1510 200 1440 300 1360 C400 1280 500 1310 620 1340 C720 1365 800 1315 900 1300"/>
        <path d="M0 1580 C80 1560 160 1520 260 1460 C360 1400 440 1420 560 1450"/>
      </g>
      <circle cx="820" cy="80" r="80" fill="${red}" opacity="0.10"/>
      <circle cx="820" cy="80" r="40" fill="${red2}" opacity="0.18"/>
      <circle cx="60"  cy="1520" r="30" fill="${red}" opacity="0.12"/>
      <line x1="0" y1="2" x2="900" y2="2" stroke="${red}" stroke-width="3" opacity="0.5"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// ── Build a competition card using the same visual style as circuit cards ──
function buildCompCard(c) {
  const org = COMP_ORGS[c.org];

  const article = document.createElement("article");
  article.className = "comp-card-full";
  if (c.org === "Atlas") article.classList.add("card-elite");

  const shell = document.createElement("div");
  shell.className = "card-shell";
  shell.style.setProperty("--accent", org.color);

  const bg = document.createElement("img");
  bg.className = "card-bg";
  bg.src = buildCompTexture(c.org);
  bg.alt = "";

  const overlay = document.createElement("div");
  overlay.className = "card-overlay";

  const frame = document.createElement("div");
  frame.className = "card-frame";

  // Head
  const head = document.createElement("div");
  head.className = "card-head";
  head.innerHTML = `
    <p class="card-title">${c.title}</p>
    <p class="card-subtitle">${c.divisionLabel}</p>
    <p class="card-meta">
      <span class="comp-org-badge" style="background:${org.color};color:${org.textColor}">${org.short}</span>
      <span class="card-round">${c.phase} ${c.year}</span>
    </p>`;

  // Exercise list — reuses .exercise-list + .kg-load for reps
  const list = document.createElement("ol");
  list.className = "exercise-list";
  c.exercises.forEach((e) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="kg-load">${e.reps}</span> ${e.exercise}`;
    list.appendChild(li);
  });

  // Footer
  const footer = document.createElement("div");
  footer.className = "card-footer";
  const timeCap = document.createElement("p");
  timeCap.className = "time-cap";
  timeCap.style.color = org.color;
  timeCap.textContent = c.format;
  const tag = document.createElement("p");
  tag.className = "card-tag";
  tag.textContent = `${org.name} · Compétition`;
  footer.appendChild(timeCap);
  footer.appendChild(tag);

  frame.appendChild(head);
  frame.appendChild(list);
  if (c.note) {
    const note = document.createElement("p");
    note.className = "comp-note-inline";
    note.textContent = c.note;
    frame.appendChild(note);
  }
  frame.appendChild(footer);

  shell.appendChild(bg);
  shell.appendChild(overlay);
  shell.appendChild(frame);
  article.appendChild(shell);

  return article;
}

function renderBonusCircuits() {
  const grid = document.getElementById("bonus-grid");
  const circuits = getFilteredCircuits();
  grid.innerHTML = "";

  if (circuits.length === 0) {
    grid.innerHTML = `<p class="bonus-empty">Aucun circuit pour ces filtres.</p>`;
    return;
  }

  circuits.forEach((c) => grid.appendChild(buildCompCard(c)));
}

function setBonusFilter(key, value, btn) {
  bonusState[key] = value;
  // update active state
  btn.closest(".bonus-filter-row").querySelectorAll(".bonus-chip").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderBonusCircuits();
}

function bindBonusEvents() {
  document.getElementById("bonus-btn").addEventListener("click", openBonusModal);
  document.getElementById("bonus-close").addEventListener("click", closeBonusModal);
  document.getElementById("bonus-modal-overlay").addEventListener("click", closeBonusModal);

  document.querySelectorAll(".bonus-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key   = btn.dataset.filterKey;
      const value = btn.dataset.filterValue;
      setBonusFilter(key, value, btn);
    });
  });
}

// init
document.addEventListener("DOMContentLoaded", () => {
  bindBonusEvents();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBonusModal();
  });
});
