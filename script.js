// ============================
// 🌌 SPACE BUILDER
// MESSAGE 1
// ============================

let username = "";

let coins = 10;

let currentRank = "Beginner";

let profileImage = "";

let savedWorlds = [];

let selectedPlanet = null;

// ============================
// STAR BACKGROUND
// ============================

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=
(Math.random()*3+2)+"s";

document
.getElementById("stars")
.appendChild(star);

}

// ============================
// LOGIN
// ============================

function login(){

username=
document
.getElementById("username")
.value.trim();

if(username===""){

alert("Enter username");

return;

}

document
.getElementById("loginPage")
.classList
.remove("active");

document
.getElementById("menuPage")
.classList
.add("active");

document
.getElementById("welcome")
.innerHTML=

"Welcome Commander <b>"+username+"</b>";

let file=

document
.getElementById("profilePicture")
.files[0];

if(file){

let reader=new FileReader();

reader.onload=function(){

profileImage=reader.result;

};

reader.readAsDataURL(file);

}

}

// ============================
// MENU PLACEHOLDERS
// ============================

function createMenu(){

// Planet Builder arrives in Message 2

}

function profileMenu(){

// Continues in Message 2

}

function rankMenu(){

// Continues in Message 2

}

function tutorialMenu(){

// Continues in Message 2

}

function savedMenu(){

// Continues in Message 2

}

function multiplayerMenu(){

// Continues in Message 2

}

function saveGame(){

// Continues in Message 2

}
// ============================
// 🌌 SPACE BUILDER
// MESSAGE 2
// PAGE NAVIGATION
// ============================

function hidePages(){

const pages=document.querySelectorAll(".page");

pages.forEach(page=>{

page.classList.remove("active");

});

}

// ============================
// MAIN MENU
// ============================

function backMenu(){

hidePages();

document
.getElementById("menuPage")
.classList
.add("active");

}

// ============================
// CREATE MENU
// ============================

function createMenu(){

hidePages();

document
.getElementById("createPage")
.classList
.add("active");

}

// ============================
// BACK TO CREATE
// ============================

function backCreate(){

hidePages();

document
.getElementById("createPage")
.classList
.add("active");

}

// ============================
// PROFILE
// ============================

function profileMenu(){

hidePages();

document
.getElementById("profilePage")
.classList
.add("active");

let html="";

html+="<h2>Commander</h2><br>";

html+="Username: <b>"+username+"</b><br><br>";

html+="Coins: "+coins+"<br><br>";

html+="Rank: "+currentRank+"<br><br>";

if(profileImage!=""){

html+="<img src='"+profileImage+"' width='150' style='border-radius:50%;border:3px solid cyan;'>";

}else{

html+="No Profile Picture";

}

document
.getElementById("profileInfo")
.innerHTML=html;

}

// ============================
// SPACE RANK
// ============================

function rankMenu(){

hidePages();

document
.getElementById("rankPage")
.classList
.add("active");

document
.getElementById("rankInfo")
.innerHTML=

`

🌱 Beginner<br><br>

🛰 Orbital<br><br>

🌍 Universal<br><br>

🌌 Multiversal<br><br>

🚀 Space Explorer<br><br>

🌟 Galaxy Creator<br><br>

🌠 Universe Master<br><br>

🪐 Multiverse Architect<br><br>

✨ Cosmic God<br><br>

♾ Infinite Creator

`;

}

// ============================
// TUTORIAL
// ============================

function tutorialMenu(){

hidePages();

document
.getElementById("tutorialPage")
.classList
.add("active");

document
.getElementById("tutorialInfo")
.innerHTML=

`

1. Login.<br><br>

2. Click Create.<br><br>

3. Build your Planet.<br><br>

4. Collect Space Coins.<br><br>

5. Complete Quests.<br><br>

6. Unlock Universe Builder.<br><br>

7. Unlock Multiverse Builder.<br><br>

8. Become Infinite Creator.

`;

}

// ============================
// SAVED WORLDS
// ============================

function savedMenu(){

hidePages();

document
.getElementById("savedPage")
.classList
.add("active");

document
.getElementById("savedWorldsList")
.innerHTML=

"No saved worlds yet.";

}

// ============================
// MULTIPLAYER
// ============================

function multiplayerMenu(){

hidePages();

document
.getElementById("multiplayerPage")
.classList
.add("active");

}

// ============================
// SAVE GAME
// ============================

function saveGame(){

alert("💾 Save System arrives in JavaScript Message 4.");

}

// ============================
// PLANET BUILDER
// ============================

function planetBuilder(){

hidePages();

document
.getElementById("planetView")
.classList
.add("active");

document
.getElementById("planetCoins")
.innerHTML=coins;

document
.getElementById("planetRank")
.innerHTML=currentRank;

}
// ============================
// 🌍 PLANET BUILDER
// MESSAGE 3
// ============================

let selectedItem=null;

let deleteModeEnabled=false;

let buildCosts={

tree:2,

water:3,

mountain:4,

fire:2,

house:6,

grass:1,

fish:5

};

let buildStats={

tree:0,

water:0,

mountain:0,

fire:0,

house:0,

grass:0,

fish:0

};

// ============================
// SELECT ITEM
// ============================

function selectItem(item){

deleteModeEnabled=false;

selectedItem=item;

document
.getElementById("selectedItem")
.innerHTML=

"Selected: <b>"+item+"</b>";

}

// ============================
// DELETE MODE
// ============================

function deleteMode(){

selectedItem=null;

deleteModeEnabled=true;

document
.getElementById("selectedItem")
.innerHTML=

"🗑 Delete Mode Enabled";

}

// ============================
// PLANET CLICK
// ============================

document
.addEventListener("click",function(e){

let planet=

document
.getElementById("planet");

if(!planet) return;

if(!planet.contains(e.target)) return;

let rect=

planet.getBoundingClientRect();

let x=e.clientX-rect.left;

let y=e.clientY-rect.top;

// DELETE

if(deleteModeEnabled){

if(

e.target.classList.contains("planetObject")

){

e.target.remove();

}

return;

}

// NOTHING SELECTED

if(selectedItem==null){

return;

}

// CHECK COINS

let cost=

buildCosts[selectedItem];

if(coins<cost){

alert("Not enough Space Coins!");

return;

}

// SPEND COINS

coins-=cost;

document
.getElementById("coinValue")
.innerHTML=coins;

document
.getElementById("planetCoins")
.innerHTML=coins;

// CREATE OBJECT

let object=

document
.createElement("div");

object.className="planetObject";

object.style.left=x+"px";

object.style.top=y+"px";

let emoji="";

switch(selectedItem){

case"tree":

emoji="🌳";

buildStats.tree++;

break;

case"water":

emoji="💧";

buildStats.water++;

break;

case"mountain":

emoji="⛰";

buildStats.mountain++;

break;

case"fire":

emoji="🔥";

buildStats.fire++;

break;

case"house":

emoji="🏠";

buildStats.house++;

break;

case"grass":

emoji="🌾";

buildStats.grass++;

break;

case"fish":

emoji="🐟";

buildStats.fish++;

break;

}

object.innerHTML=emoji;

planet.appendChild(object);

updateQuest();

});

// ============================
// QUEST
// ============================

let currentQuest={

item:"tree",

goal:10,

reward:25

};

function updateQuest(){

let progress=

buildStats[currentQuest.item];

document
.getElementById("questProgress")
.innerHTML=

progress+" / "+currentQuest.goal;

if(progress>=currentQuest.goal){

coins+=currentQuest.reward;

document
.getElementById("coinValue")
.innerHTML=coins;

document
.getElementById("planetCoins")
.innerHTML=coins;

alert(

"Quest Complete!\n+"+

currentQuest.reward+

" Coins"

);

currentQuest.goal+=5;

document
.getElementById("questText")
.innerHTML=

"Build "+

currentQuest.goal+

" Trees";

}

}
