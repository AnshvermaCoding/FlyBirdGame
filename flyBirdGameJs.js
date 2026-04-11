let shopBlock = document.querySelector("#shopBlock");
let optionBlock = document.querySelector("#optionBlock");
let creditBlock = document.querySelector("#creditBlock");
let settingBlock = document.querySelector("#settingBlock");
let toggleBtn1 = document.querySelector("#toggleBtn1");
let toggleBtn2 = document.querySelector("#toggleBtn2");
let toggleBtn3 = document.querySelector("#toggleBtn3");
let toggleBtn4 = document.querySelector("#acradeBtn");
let toggleBtnCircle1 = document.querySelector("#toggleBtnCircle1");
let toggleBtnCircle2 = document.querySelector("#toggleBtnCircle2");
let toggleBtnCircle3 = document.querySelector("#toggleBtnCircle3");
let toggleBtnCircle4 = document.querySelector("#toggleBtnCircle4");
let option1 = document.querySelector("#option1");
let option01 = document.querySelector("#option01");
let buyBtn1 = document.querySelector("#buyBtn1");
let buyBtn2 = document.querySelector("#buyBtn2");
let buyBtn3 = document.querySelector("#buyBtn3");
let buyBtn4 = document.querySelector("#buyBtn4");
let scoreValue = document.querySelector("#scoreValue");
let message = document.querySelector("#message");
let message2 = document.querySelector("#message2");
let message3 = document.querySelector("#message3");
let profileBlock = document.querySelector("#profileBlock");
let scoreValue2 = document.querySelector("#scoreValue2");
let highScoreVal = document.querySelector("#highScoreVal");
let enterNameBox = document.querySelector("#enterNameBox");
let enterName = document.querySelector("#enterName");
let name = document.querySelector("#name");
let profilePicBlock = document.querySelector("#profilePicBlock");
let profilePic = document.querySelector("#profilePic");
let navProfile = document.querySelector("#profile");
let textAchivement = document.querySelector("#textAchivement");
let reward1 = document.querySelector("#reward1");
let reward2 = document.querySelector("#reward2");
let reward3 = document.querySelector("#reward3");
let reward4 = document.querySelector("#reward4");
let category1 = document.querySelector("#category1");
let category2 = document.querySelector("#category2");
let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item01 = document.querySelector("#item01");
let item02 = document.querySelector("#item02");
let item03 = document.querySelector("#item03");
let item04 = document.querySelector("#item04");
let buyBtn01 = document.querySelector("#buyBtn01");
let buyBtn02 = document.querySelector("#buyBtn02");
let buyBtn03 = document.querySelector("#buyBtn03");
let buyBtn04 = document.querySelector("#buyBtn04");
let background = document.querySelector("#background");
let navBar = document.querySelector("#navBar");
let footer = document.querySelector("#footer");
let backgroundEffect = document.querySelector("#backgroundEffect");
let newBlock1 = document.querySelector("#newBlockA");
let newBlock2 = document.querySelector("#newBlockB");

let sound = "true";
let music = "true";
let vibrate = "true";
let speed;
let score2;
localStorage.setItem("resume","false");
localStorage.setItem("bird1","true");
//localStorage.setItem("bird2","true");
//localStorage.setItem("bird3","true");
localStorage.setItem("mediam","true");
localStorage.setItem("hard","true");
localStorage.setItem("expert","true");
localStorage.setItem("currentScore",0);
localStorage.setItem("first","true");
localStorage.setItem("bird1","true");
localStorage.setItem("bird2","true");
localStorage.setItem("bird3","true");
//localStorage.setItem("speed",speed);
//localStorage.setItem("soundIs",sound);
//ocalStorage.setItem("musicIs",music);
// localStorage.setItem("vibrateIs","true");
// localStorage.setItem("score2",50000);
//console.log(localStorage.getItem("speed"));
speed = localStorage.getItem("speed");

let scores = 0;
let highScore;
let newGame = "true";
let newGame2 = "true";
let prevScore;
let color;
//localStorage.setItem("newGame","true");
//localStorage.setItem("newGame2","true");
if(localStorage.getItem("newGame") === "true") {
    console.log("new");
    newGame = "false";
    localStorage.setItem("newGame","false");
    localStorage.setItem("scoreIs",0);
    localStorage.setItem("scores",0);
    localStorage.setItem("currentScore",0);
    localStorage.setItem("score1",0);
    localStorage.setItem("score2",0);
    localStorage.setItem("saveScore",0);
    localStorage.setItem("save","true");
    localStorage.setItem("highScore",0);
    localStorage.setItem("profilePic","profile2.jpg");
    localStorage.setItem("background","Background01.png");
    localStorage.setItem("color","blue");
    localStorage.setItem("background2","false");
    localStorage.setItem("background3","false");
    localStorage.setItem("background4","false");
    localStorage.setItem("background02","true");
    localStorage.setItem("background03","true");
    localStorage.setItem("background04","true");
    localStorage.setItem("bird02","false");
    localStorage.setItem("bird03","false");
    localStorage.setItem("bird04","false");
    localStorage.setItem("speed","Easy");
}

navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
navProfile.style.backgroundSize = "cover";
profilePic.style.backgroundSize = "cover";
background.style.background = `url(${localStorage.getItem("background")})`;
background.style.backgroundSize = "cover";
color = localStorage.getItem("color");
//localStorage.setItem("newGame","true");
/* let updateScore = setInterval(() => {
    scores = localStorage.getItem("scores");
    if(parseInt(scores) >= 1) {
        scoreValue.innerText = parseInt(scores);
        scoreValue2.innerText = parseInt(scores);
        localStorage.setItem("scoreIs",parseInt(scores));
    }
},50);
*/
if(localStorage.getItem("save") === "true") {
    localStorage.setItem("score1",(parseInt(localStorage.getItem("score1")) + parseInt(localStorage.getItem("saveScore"))));
    scoreValue.innerText = localStorage.getItem("score1");
    scoreValue2.innerText = localStorage.getItem("score1");
    localStorage.setItem("score2",scoreValue.innerText);
    localStorage.setItem("save","false");
    console.log(localStorage.getItem("highScore"));
    console.log(localStorage.getItem("saveScore"));
    if(parseInt(localStorage.getItem("highScore")) <= parseInt(localStorage.getItem("saveScore"))) {
        highScoreVal.innerText = localStorage.getItem("saveScore");
        localStorage.setItem("highScore",localStorage.getItem("saveScore"));
    } else {
        highScoreVal.innerText = localStorage.getItem("highScore");
    }
} else {
    scoreValue.innerText = localStorage.getItem("score2");
    scoreValue2.innerText = localStorage.getItem("score2");
    highScoreVal.innerText = localStorage.getItem("highScore");
    
}




function startGame() {
    prevScore = localStorage.getItem("score2");
    window.location.href = "FlyBird.html";
}
shopBlock.style.transform = "scale(0.5)";
optionBlock.style.transform = "scale(0.5)";
creditBlock.style.transform = "scale(0.5)";
settingBlock.style.transform = "scale(0.5)";
profileBlock.style.transform = "scale(0.5)";
newBlock1.style.transform = "scale(0.5)";
newBlock2.style.transform = "scale(0.5)";
shopBlock.style.transition = "0.5s";
optionBlock.style.transition = "0.5s";
creditBlock.style.transition = "0.5s";
settingBlock.style.transition = "0.5s";
newBlock1.style.transition = "0.5s";
newBlock2.style.transition = "0.5s";
profileBlock.style.transition = "0.5s";
shopBlock.style.opacity = "0";
optionBlock.style.opacity = "0";
creditBlock.style.opacity = "0";
settingBlock.style.opacity = "0";
profileBlock.style.opacity = "0";
newBlock1.style.opacity = "0";
newBlock2.style.opacity = "0";
backgroundEffect.style.opacity = "0";
backgroundEffect.style.visibility = "hidden";
backgroundEffect.style.transition = "0.5s";

function shop() {
    shopBlock.style.transform = "scale(1)";
    shopBlock.style.opacity = "1";
    shopBlock.style.visibility = "visible";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
}
function option() {
    optionBlock.style.transform = "scale(1)";
    optionBlock.style.opacity = "1";
    optionBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    if(localStorage.getItem("speed2") != "null") {
    option01.value = localStorage.getItem("speed2");
    } 
    if(localStorage.getItem("speed2") == "null"){
        option01.value = "Easy";
    }
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
}
let mode4 = false;
if(localStorage.getItem("acradeModeIs") === "false") {
        mode4 = false;
        toggleBtnCircle4.style.transform = "translateX(0px)";
        toggleBtn4.style.backgroundColor = "aliceblue";
        toggleBtnCircle4.style.backgroundColor = "red";
        toggleBtnCircle4.style.borderColor = "white";
        acradeModeIs = "false";
        option1.style.opacity = "1";
        option01.style.opacity = "1";
        option01.removeAttribute("disabled");
        localStorage.setItem("acradeModeIs",acradeModeIs);
} else {
        mode4 = true;
        toggleBtnCircle4.style.transform = "translateX(83px)";
        toggleBtn4.style.backgroundColor = "magenta";
        toggleBtnCircle4.style.backgroundColor = "aliceblue";
        toggleBtnCircle4.style.borderColor = "black";
        acradeModeIs = "true";
        option01.value = "Easy";
        option1.style.opacity = "0.5";
        option01.style.opacity = "0.8";
        option01.setAttribute("disabled",true);
        localStorage.setItem("acradeModeIs",acradeModeIs);
        localStorage.setItem("speed2","null");
}
function acradeMode() {
    toggleBtnCircle4.style.transition = "0.8s";
    toggleBtn4.style.transition = "0.8s";
    if(mode4 === false) {
        toggleBtnCircle4.style.transform = "translateX(0px)";
        toggleBtn4.style.backgroundColor = "aliceblue";
        toggleBtnCircle4.style.backgroundColor = "red";
        toggleBtnCircle4.style.borderColor = "white";
        mode4 = true;
        acradeModeIs = "false";
        option1.style.opacity = "1";
        option01.style.opacity = "1";
        option01.removeAttribute("disabled");
        localStorage.setItem("acradeModeIs",acradeModeIs);
    } else {
        toggleBtnCircle4.style.transform = "translateX(83px)";
        toggleBtn4.style.backgroundColor = "magenta";
        toggleBtnCircle4.style.backgroundColor = "aliceblue";
        toggleBtnCircle4.style.borderColor = "black";
        localStorage.setItem("speed","Easy");
        mode4 = false;
        acradeModeIs = "true";
        option1.style.opacity = "0.5";
        option01.style.opacity = "0.8";
        option01.setAttribute("disabled",true);
        option01.value = "Easy";
        localStorage.setItem("acradeModeIs",acradeModeIs);
        localStorage.setItem("speed2","null");
    }
    setTimeout(() => {
        toggleBtnCircle4.style.transition = "0s";
        toggleBtn4.style.transition = "0s";
    },800);
}
function credit() {
    creditBlock.style.transform = "scale(1)";
    creditBlock.style.opacity = "1";
    creditBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
}
function setting() {
    settingBlock.style.transform = "scale(1)";
    settingBlock.style.opacity = "1";
    settingBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
}
function terms() {
    settingBlock.style.transform = "scale(0.5)";
    settingBlock.style.opacity = "0";
    settingBlock.style.visibility = "hidden";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
    newBlock1.style.transform = "scale(1)";
    newBlock1.style.visibility = "visible";
    newBlock1.style.opacity = "1";
}
function privacy() {
    settingBlock.style.transform = "scale(0.5)";
    settingBlock.style.opacity = "0";
    settingBlock.style.visibility = "hidden";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
    newBlock2.style.opacity = "1";
    newBlock2.style.transform = "scale(1)";
    newBlock2.style.visibility = "visible";
}

let color2 = true;
let color3 = true;
let color4 = true;
localStorage.setItem("color",color);
buyBtn1.style.color = "darkblue";
function buyColor1() {
    color = "blue";
    localStorage.setItem("bird01","true");
    localStorage.setItem("color",color);
    buyBtn1.style.color = "darkblue";
    buyBtn2.style.color = "red";
    buyBtn3.style.color = "red";
    buyBtn4.style.color = "red";
    buyBtn1.innerText = "USE";
    message.style.visibility = "visible";
    setTimeout(() => { 
        message.style.visibility = "hidden"; 
    },1000);
}
function buyColor2() {
    if(localStorage.getItem("bird02") != "true") {
    if(parseInt(scoreValue.innerText) >= 400) {
        color = "red";
        localStorage.setItem("bird02","true");
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "darkblue";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "red";
        buyBtn2.innerText = "USE";
        localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 400));
        localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 400));
        scoreValue.innerText = localStorage.getItem("score2");
        scoreValue2.innerText = localStorage.getItem("score2");
        //scoreValue.innerText = parseInt(scoreValue.innerText) - 400;
        //localStorage.setItem("scoreIs",parseInt(scores) - 400);
        color2 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "red";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "darkblue";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "red";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyColor3() {
    if(localStorage.getItem("bird03") != "true") {
    if(parseInt(scoreValue.innerText) >= 800) {
        color = "darkgreen";
        localStorage.setItem("color",color);
        localStorage.setItem("bird03","true");
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "darkblue";
        buyBtn4.style.color = "red";
        buyBtn3.innerText = "USE";
        localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 800));
        localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 800));
        scoreValue.innerText = localStorage.getItem("score2");
        scoreValue2.innerText = localStorage.getItem("score2");
        //scoreValue.innerText = parseInt(scoreValue.innerText) - 800;
        //localStorage.setItem("scoreIs",parseInt(scores) - 800);
        color3 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "darkgreen";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "darkblue";
        buyBtn4.style.color = "red";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyColor4() {
    if(localStorage.getItem("bird04") != "true") {
    if(parseInt(scoreValue.innerText) >= 1200) {
        color = "midnightblue";
        localStorage.setItem("bird04","true");
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "darkblue";
        buyBtn4.innerText = "USE";
        localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 1200));
        localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 1200));
        scoreValue.innerText = localStorage.getItem("score2");
        scoreValue2.innerText = localStorage.getItem("score2");
        //scoreValue.innerText = parseInt(scoreValue.innerText) - 1200;
        //localStorage.setItem("scoreIs",parseInt(scores) - 1200);
        color4 = false;
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    } else {
        message2.style.visibility = "visible";
        setTimeout(() => { 
            message2.style.visibility = "hidden"; 
        },1000);
    }
    } else {
        color = "midnightblue";
        localStorage.setItem("color",color);
        buyBtn1.style.color = "red";
        buyBtn2.style.color = "red";
        buyBtn3.style.color = "red";
        buyBtn4.style.color = "darkblue";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}

if(localStorage.getItem("bird02") === "true") {
    buyBtn2.innerText = "USE";
}
if(localStorage.getItem("bird03") === "true") {
    buyBtn3.innerText = "USE";
}
if(localStorage.getItem("bird04") === "true") {
    buyBtn4.innerText = "USE";
}

function closeBlocks() {
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    profileBlock.style.transform = "scale(0.5)";
    newBlock1.style.transform = "scale(0.5)";
    newBlock2.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    profileBlock.style.opacity = "0";
    newBlock1.style.opacity = "0";
    newBlock2.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    profileBlock.style.visibility = "hidden";
    newBlock1.style.visibility = "hidden";
    newBlock2.style.visibility = "hidden";
    backgroundEffect.style.opacity = "0";
    backgroundEffect.style.visibility = "hidden";
    // console.log(option01.value);
    
    
    if(localStorage.getItem("acradeModeIs") === "true") {
        localStorage.setItem("speed","Easy");
    } else {
        speed = option01.value;
        localStorage.setItem("speed",speed);
        localStorage.setItem("speed2",option01.value);
    }
}

// settings buttons
let mode1 = true;
let mode2 = true;
let mode3 = true;
toggleBtnCircle1.style.transform = "translateX(83px)";
toggleBtnCircle2.style.transform = "translateX(83px)";
toggleBtnCircle3.style.transform = "translateX(83px)";
toggleBtn1.style.backgroundColor = "blue";
toggleBtn2.style.backgroundColor = "aqua";
toggleBtn3.style.backgroundColor = "aqua";

if(localStorage.getItem("soundIs") === "false") {
    mode1 = false;
    toggleBtnCircle1.style.transform = "translateX(0px)";
        toggleBtn1.style.backgroundColor = "aliceblue";
    toggleBtnCircle1.style.backgroundColor = "red";
        toggleBtnCircle1.style.borderColor = "white";
} else {
    mode1 = true;
    toggleBtnCircle1.style.transform = "translateX(83px)";
        toggleBtn1.style.backgroundColor = "magenta";
    toggleBtnCircle1.style.backgroundColor = "aliceblue";
        toggleBtnCircle1.style.borderColor = "black";
}
function toggleBtn01() {
    toggleBtnCircle1.style.transition = "0.8s";
    toggleBtn1.style.transition = "0.8s";
    if(mode1 === true) {
        toggleBtnCircle1.style.transform = "translateX(0px)";
        toggleBtn1.style.backgroundColor = "aliceblue";
        toggleBtnCircle1.style.backgroundColor = "red";
        toggleBtnCircle1.style.borderColor = "white";
        mode1 = false;
        sound = "false";
        localStorage.setItem("soundIs",sound);
    } else {
        toggleBtnCircle1.style.transform = "translateX(83px)";
        toggleBtn1.style.backgroundColor = "magenta";
        toggleBtnCircle1.style.backgroundColor = "aliceblue";
        toggleBtnCircle1.style.borderColor = "black";
        mode1 = true;
        sound = "true";
        localStorage.setItem("soundIs",sound);
    }
    setTimeout(() => {
        toggleBtnCircle1.style.transition = "0s";
        toggleBtn1.style.transition = "0s";
    },800);
}

if(localStorage.getItem("musicIs") === "false") {
    mode2 = false;
    toggleBtnCircle2.style.transform = "translateX(0px)";
        toggleBtn2.style.backgroundColor = "aliceblue";
    toggleBtnCircle2.style.backgroundColor = "red";
        toggleBtnCircle2.style.borderColor = "white";
} else {
    mode2 = true;
    toggleBtnCircle2.style.transform = "translateX(83px)";
        toggleBtn2.style.backgroundColor = "magenta";
    toggleBtnCircle2.style.backgroundColor = "aliceblue";
        toggleBtnCircle2.style.borderColor = "black";
}
function toggleBtn02() {
    toggleBtnCircle2.style.transition = "0.8s";
    toggleBtn2.style.transition = "0.8s";
    if(mode2 === true) {
        toggleBtnCircle2.style.transform = "translateX(0px)";
        toggleBtn2.style.backgroundColor = "aliceblue";
        toggleBtnCircle2.style.backgroundColor = "red";
        toggleBtnCircle2.style.borderColor = "white";
        mode2 = false;
        music = "false";
        localStorage.setItem("musicIs",music);
    } else {
        toggleBtnCircle2.style.transform = "translateX(83px)";
        toggleBtn2.style.backgroundColor = "magenta";
        toggleBtnCircle2.style.backgroundColor = "aliceblue";
        toggleBtnCircle2.style.borderColor = "black";
        mode2 = true;
        music = "true";
        localStorage.setItem("musicIs",music);
    }
    setTimeout(() => {
        toggleBtnCircle2.style.transition = "0s";
        toggleBtn2.style.transition = "0s";
    },800);
}

if(localStorage.getItem("vibrateIs") === "false") {
    mode3 = "true";
    toggleBtnCircle3.style.transform = "translateX(0px)";
        toggleBtn3.style.backgroundColor = "aliceblue";
    toggleBtnCircle3.style.backgroundColor = "red";
        toggleBtnCircle3.style.borderColor = "white";
} else {
    mode3 = "false";
    toggleBtnCircle3.style.transform = "translateX(83px)";
        toggleBtn3.style.backgroundColor = "magenta";
    toggleBtnCircle3.style.backgroundColor = "aliceblue";
        toggleBtnCircle3.style.borderColor = "black";
}

function toggleBtn03() {
    toggleBtnCircle3.style.transition = "0.8s";
    toggleBtn3.style.transition = "0.8s";
    if(mode3 === "false") {
        toggleBtnCircle3.style.transform = "translateX(0px)";
        toggleBtn3.style.backgroundColor = "aliceblue";
        toggleBtnCircle3.style.backgroundColor = "red";
        toggleBtnCircle3.style.borderColor = "white";
        mode3 = "true";
        vibrate = "false";
        localStorage.setItem("vibrateIs",vibrate);
    } else {
        toggleBtnCircle3.style.transform = "translateX(83px)";
        toggleBtn3.style.backgroundColor = "magenta";
        toggleBtnCircle3.style.backgroundColor = "aliceblue";
        toggleBtnCircle3.style.borderColor = "black";
        
        mode3 = "false";
        vibrate = "true";
        localStorage.setItem("vibrateIs",vibrate);
    }
    setTimeout(() => {
        toggleBtnCircle3.style.transition = "0s";
        toggleBtn3.style.transition = "0s";
    },800);
}

// reset game

function resetGame() {
    scores = 0;
    scoreValue.innerText = 0;
    scoreValue2.innerText = 0;
    highScoreVal.innerText = 0;
    localStorage.setItem("scores",0);
    localStorage.setItem("scoreIs",0);
    localStorage.setItem("speed2","null")
    /* clearInterval(updateScore);
    setTimeout(() => {
        setInterval(updateScore,50);
    },50)
    */
    localStorage.setItem("currentScore",0);
    localStorage.setItem("score1",0);
    localStorage.setItem("saveScore",0);
    localStorage.setItem("highScore",0);
    localStorage.setItem("score2",0);
    message3.style.visibility = "visible";
    localStorage.setItem("profilePic","profile2.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
    localStorage.setItem("background","Background01.png");
    background.style.background = `url(${localStorage.getItem("background")})`;
    background.style.backgroundSize = "cover";
    localStorage.setItem("background2","false");
    localStorage.setItem("background3","false");
    localStorage.setItem("background4","false");
    localStorage.setItem("background02","true");
    localStorage.setItem("background03","true");
    localStorage.setItem("background04","true");
    buyBtn02.innerText = "BUY";
    buyBtn03.innerText = "BUY";
    buyBtn04.innerText = "BUY";
    localStorage.setItem("color","blue");
    color = localStorage.getItem("color");
    localStorage.setItem("bird02","false");
    localStorage.setItem("bird03","false");
    localStorage.setItem("bird04","false");
    buyBtn2.innerText = "BUY";
    buyBtn3.innerText = "BUY";
    buyBtn4.innerText = "BUY";
    setTimeout(() => { 
        message3.style.visibility = "hidden"; 
    },1000);
}

let firstGame = true;

function profile() {
    profileBlock.style.transform = "scale(1)";
    profileBlock.style.opacity = "1";
    profileBlock.style.visibility = "visible";
    shopBlock.style.transform = "scale(0.5)";
    optionBlock.style.transform = "scale(0.5)";
    creditBlock.style.transform = "scale(0.5)";
    settingBlock.style.transform = "scale(0.5)";
    shopBlock.style.opacity = "0";
    optionBlock.style.opacity = "0";
    creditBlock.style.opacity = "0";
    settingBlock.style.opacity = "0";
    shopBlock.style.visibility = "hidden";
    optionBlock.style.visibility = "hidden";
    creditBlock.style.visibility = "hidden";
    settingBlock.style.visibility = "hidden";
    backgroundEffect.style.opacity = "1";
    backgroundEffect.style.visibility = "visible";
    
       // scoreValue2.innerText = localStorage.getItem("score1");
       // highScoreVal.innerText = localStorage.getItem("scores");
       // highScoreVal.innerText = localStorage.getItem("score2");
    
}
function enterNameBlock() {
    enterNameBox.style.visibility = "visible";
}
function saveName() {
    if(enterName.value === "") {
        name.innerText = "Player";
    } else {
        name.innerText = enterName.value;
        localStorage.setItem("name",name.innerText);
    }
    enterNameBox.style.visibility = "hidden";
}
if(localStorage.getItem("name") === "") {
    name.innerText = "Player";
} else {
    name.innerText = localStorage.getItem("name");
}
function profilePicsBlock() {
    profilePicBlock.style.visibility = "visible";
}
function closeProfilePics() {
    profilePicBlock.style.visibility = "hidden";
}
function selectProfilePic1() {
    localStorage.setItem("profilePic","profile2.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic2() {
    localStorage.setItem("profilePic","profile1.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic3() {
    localStorage.setItem("profilePic","profile3.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic4() {
    localStorage.setItem("profilePic","profile4.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic5() {
    localStorage.setItem("profilePic","profile5.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic6() {
    localStorage.setItem("profilePic","profile6.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic7() {
    localStorage.setItem("profilePic","profile7.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}
function selectProfilePic8() {
    localStorage.setItem("profilePic","profile8.jpg");
    navProfile.style.background = `url(${localStorage.getItem('profilePic')})`;
    profilePic.style.background = `url(${localStorage.getItem('profilePic')})`;
    navProfile.style.backgroundSize = "cover";
    profilePic.style.backgroundSize = "cover";
}

    if(parseInt(scores) >= 200) {
        textAchivement.style.visibility = "hidden";
        reward1.style.opacity = "1";
    }
    if(parseInt(scores) >= 400) {
        reward2.style.opacity = "1";
    }
    if(parseInt(scores) >= 800) {
        reward2.style.opacity = "1";
    }
    if(parseInt(scores) >= 1200) {
        reward2.style.opacity = "1";
    }

// shop Category
function birdColorBlock() {
    category1.style.borderColor = "darkblue";
    category2.style.borderColor = "transparent";
    item1.style.visibility = "visible";
    item2.style.visibility = "visible";
    item3.style.visibility = "visible";
    item4.style.visibility = "visible";
    item01.style.visibility = "hidden";
    item02.style.visibility = "hidden";
    item03.style.visibility = "hidden";
    item04.style.visibility = "hidden";
}
function backgroundBlock() {
    category1.style.borderColor = "transparent";
    category2.style.borderColor = "darkblue";
    item1.style.visibility = "hidden";
    item2.style.visibility = "hidden";
    item3.style.visibility = "hidden";
    item4.style.visibility = "hidden";
    item01.style.visibility = "visible";
    item02.style.visibility = "visible";
    item03.style.visibility = "visible";
    item04.style.visibility = "visible";
}

let background1 = true;
let background2 = true;
let background3 = true;
let background4 = true;

function buyBackground1() {
    localStorage.setItem("background","Background01.png");
    localStorage.setItem("background1","true");
    background.style.background = `url(${localStorage.getItem("background")})`;
    background.style.backgroundSize = "cover";
    message.style.visibility = "visible";
    setTimeout(() => { 
        message.style.visibility = "hidden"; 
    },1000);
}
function buyBackground2() {
    if(localStorage.getItem("background02") === "true") {
        if(parseInt(scoreValue.innerText) >= 800) {
            buyBtn02.innerText = "USE";
            localStorage.setItem("background02","false");
            localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 800));
            localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 800));
            scoreValue.innerText = localStorage.getItem("score2");
            scoreValue2.innerText = localStorage.getItem("score2");
            localStorage.setItem("background","Background02.png");
            localStorage.setItem("background2","true");
            background.style.background = `url(${localStorage.getItem("background")})`;
            background.style.backgroundSize = "cover";
            //scoreValue.innerText = parseInt(scoreValue.innerText) - 800;
            //localStorage.setItem("scoreIs",parseInt(scores) - 800);
           // localStorage.setItem("background",2);
            background2 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        localStorage.setItem("background","Background02.png");
        background.style.background = `url(${localStorage.getItem("background")})`;
        background.style.backgroundSize = "cover";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
function buyBackground3() {
    if(localStorage.getItem("background03") === "true") {
        if(parseInt(scoreValue.innerText) >= 1400) {
            buyBtn03.innerText = "USE";
            localStorage.setItem("background03","false");
            localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 1400));
            localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 1400));
            scoreValue.innerText = localStorage.getItem("score2");
            scoreValue2.innerText = localStorage.getItem("score2");
            localStorage.setItem("background","Background03.png");
            localStorage.setItem("background3","true");
            background.style.background = `url(${localStorage.getItem("background")})`;
            background.style.backgroundSize = "cover";
            // scoreValue.innerText = parseInt(scoreValue.innerText) - 1400;
            // localStorage.setItem("scoreIs",parseInt(scores) - 1400);
            background3 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        localStorage.setItem("background","Background03.png");
        background.style.background = `url(${localStorage.getItem("background")})`;
        background.style.backgroundSize = "cover";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}

scoreValue.innerText = localStorage.getItem("score2");
scoreValue2.innerText = localStorage.getItem("score2");
function buyBackground4() {
    if(localStorage.getItem("background04") === "true") {
        if(parseInt(scoreValue.innerText) >= 2000) {
            localStorage.setItem("background04","false");
            localStorage.setItem("background4","true");
            localStorage.setItem("score1",parseInt(localStorage.getItem("score1") - 2000));
            localStorage.setItem("score2",parseInt(localStorage.getItem("score2") - 2000));
            scoreValue.innerText = localStorage.getItem("score2");
            scoreValue2.innerText = localStorage.getItem("score2");
            localStorage.setItem("background","Background04.png");
            background.style.background = `url(${localStorage.getItem("background")})`;
            background.style.backgroundSize = "cover";
            buyBtn04.innerText = "USE";
           // scoreValue.innerText = parseInt(scoreValue.innerText) - 2000;
           // localStorage.setItem("scoreIs",parseInt(scores) - 2000);
            background4 = false;
            message.style.visibility = "visible";
            setTimeout(() => { 
                message.style.visibility = "hidden"; 
            },1000);
        } else {
            message2.style.visibility = "visible";
            setTimeout(() => { 
                message2.style.visibility = "hidden"; 
            },1000);
        }
    } else {
        localStorage.setItem("background","Background04.png");
        background.style.background = `url(${localStorage.getItem("background")})`;
        background.style.backgroundSize = "cover";
        message.style.visibility = "visible";
        setTimeout(() => { 
            message.style.visibility = "hidden"; 
        },1000);
    }
}
if(localStorage.getItem("background2") === "true") {
    buyBtn02.innerText = "USE";
}
if(localStorage.getItem("background3") === "true") {
    buyBtn03.innerText = "USE";
} 
if(localStorage.getItem("background4") === "true") {
    buyBtn04.innerText = "USE";
}