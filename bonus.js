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

function renderBonusCircuits() {
  const grid = document.getElementById("bonus-grid");
  const circuits = getFilteredCircuits();
  grid.innerHTML = "";

  if (circuits.length === 0) {
    grid.innerHTML = `<p class="bonus-empty">Aucun circuit pour ces filtres.</p>`;
    return;
  }

  circuits.forEach((c) => {
    const org = COMP_ORGS[c.org];
    const card = document.createElement("div");
    card.className = "comp-card";

    const exHtml = c.exercises
      .map((e) => `<li><span class="comp-reps">${e.reps}</span>${e.exercise}</li>`)
      .join("");

    card.innerHTML = `
      <div class="comp-card-head" style="--org-color:${org.color}; --org-text:${org.textColor}">
        <span class="comp-org-badge">${org.short}</span>
        <span class="comp-phase">${c.phase} ${c.year}</span>
        <span class="comp-division">${c.divisionLabel}</span>
      </div>
      <div class="comp-card-body">
        <p class="comp-title">${c.title}</p>
        <p class="comp-format">${c.format}</p>
        ${c.note ? `<p class="comp-note">${c.note}</p>` : ""}
        <ol class="comp-list">${exHtml}</ol>
      </div>`;

    grid.appendChild(card);
  });
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
