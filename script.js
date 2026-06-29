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
