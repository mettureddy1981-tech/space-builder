<script>
// ============================
// 🌌 SPACE BUILDER CORE SYSTEM
// ============================

// ---------- GLOBAL DATA ----------
let username = "";
let coins = 10;
let coinPower = 1;
let currentRank = "Beginner";

let currentPage = "menuPage";

// ---------- WORLD DATA ----------
let worldSlots = JSON.parse(localStorage.getItem("worldSlots")) || {
  world1: null,
  world2: null,
  world3: null
};

let currentWorld = "world1";

// ---------- PLANET DATA ----------
let planets = ["Earth Base", "Moon Colony", "Mars City"];
let currentPlanet = 0;

let npcs = [];
let quests = [
  "Collect 50 coins",
  "Build 5 objects",
  "Spawn 3 NPCs"
];
let completedQuests = [];

// ============================
// 🧭 PAGE NAVIGATION SYSTEM
// ============================

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.style.display = "none";
  });

  let page = document.getElementById(pageId);
  if (page) page.style.display = "block";

  currentPage = pageId;
}

// ============================
// 💰 COIN SYSTEM
// ============================

function addCoins(amount) {
  coins += amount * coinPower;
  updateCoins();
}

function updateCoins() {
  let el = document.getElementById("coinValue");
  if (el) el.innerText = coins;

  updateRank();
}

// ============================
// 🏆 RANK SYSTEM
// ============================

function updateRank() {
  if (coins >= 1000) currentRank = "Galaxy Lord";
  else if (coins >= 500) currentRank = "Star King";
  else if (coins >= 200) currentRank = "Explorer";
  else currentRank = "Beginner";

  let el = document.getElementById("rankValue");
  if (el) el.innerText = currentRank;
}

// ============================
// 🌍 WORLD SAVE SYSTEM
// ============================

function saveWorld() {
  worldSlots[currentWorld] = {
    coins,
    coinPower,
    currentRank,
    planet: currentPlanet,
    npcs,
    quests,
    completedQuests,
    objects: getPlanetData()
  };

  localStorage.setItem("worldSlots", JSON.stringify(worldSlots));

  alert("🌍 World Saved: " + currentWorld);
}

function loadWorld(slot) {
  let data = worldSlots[slot];

  if (!data) {
    alert("No world found!");
    return;
  }

  currentWorld = slot;

  coins = data.coins;
  coinPower = data.coinPower;
  currentRank = data.currentRank;
  currentPlanet = data.planet || 0;
  npcs = data.npcs || [];
  quests = data.quests || [];
  completedQuests = data.completedQuests || [];

  setPlanetData(data.objects || "");

  updateCoins();

  alert("🌍 Loaded " + slot);
}

// ============================
// 🚀 PLANET SYSTEM
// ============================

function spaceTravel() {
  currentPlanet++;

  if (currentPlanet >= planets.length) {
    currentPlanet = 0;
  }

  document.getElementById("output").innerText =
    "🚀 Now on: " + planets[currentPlanet];
}

// ============================
// 👽 NPC SYSTEM
// ============================

function spawnNPC() {
  let npc = {
    name: "Alien " + Math.floor(Math.random() * 10000),
    mood: "happy"
  };

  npcs.push(npc);

  alert("👽 Spawned: " + npc.name);
}

function showNPCs() {
  let html = "<h2>👽 NPC LIST</h2>";

  npcs.forEach(n => {
    html += `${n.name} - ${n.mood}<br>`;
  });

  document.getElementById("output").innerHTML = html;
}

// ============================
// 🎯 QUEST SYSTEM
// ============================

function showQuests() {
  let html = "<h2>🎯 QUESTS</h2>";

  quests.forEach(q => {
    html += "• " + q + "<br>";
  });

  document.getElementById("output").innerHTML = html;
}

function completeQuest() {
  if (quests.length === 0) return;

  let q = quests.shift();
  completedQuests.push(q);

  addCoins(20);

  alert("🎯 Completed: " + q);
}

// ============================
// 🌍 PLANET OBJECT SYSTEM
// ============================

function getPlanetData() {
  let planet = document.getElementById("planet");
  return planet ? planet.innerHTML : "";
}

function setPlanetData(data) {
  let planet = document.getElementById("planet");
  if (planet) planet.innerHTML = data;
}

// ============================
// 🔍 ANALYZE DATA SYSTEM
// ============================

function analyzeGame() {
  let report = "===== SPACE BUILDER REPORT =====\n\n";

  // check elements
  const requiredIds = ["planet", "coinValue", "rankValue", "output"];

  requiredIds.forEach(id => {
    if (document.getElementById(id)) {
      report += "✔ " + id + " found\n";
    } else {
      report += "✖ " + id + " missing\n";
    }
  });

  // game stats
  report += "\n--- STATS ---\n";
  report += "Coins: " + coins + "\n";
  report += "Rank: " + currentRank + "\n";
  report += "Planets: " + planets[currentPlanet] + "\n";
  report += "NPCs: " + npcs.length + "\n";
  report += "World: " + currentWorld + "\n";

  alert(report);
  console.log(report);
}

// ============================
// 🔄 AUTO SAVE
// ============================

setInterval(() => {
  worldSlots[currentWorld] = {
    coins,
    coinPower,
    currentRank,
    planet: currentPlanet,
    npcs,
    quests,
    completedQuests,
    objects: getPlanetData()
  };

  localStorage.setItem("worldSlots", JSON.stringify(worldSlots));
}, 10000);

// ============================
// 🚀 INIT
// ============================

updateCoins();
showPage("menuPage");
<<script type="text/javascript" charset="utf-8">
    
