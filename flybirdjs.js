let bird = document.querySelector("#bird");
let container = document.querySelector("#container");
let msg = document.querySelector("#msg");
let level1 = document.querySelector("#level1");
let level01 = document.querySelector("#level01");
let gameOver = document.querySelector("#gameOver");
let scoreValue = document.querySelector("#scoreValue");
let menuIcon = document.querySelector("#menu");
let total = document.querySelector("#total");
let score = document.querySelector("#score");
let footerLogo = document.querySelector("#footerLogo");
let reGame = document.querySelector("#reGame");
let rePlayTime = document.querySelector("#rePlayTime");
let birdNo1 = document.querySelector("#birdNo1");
let birdNo2 = document.querySelector("#birdNo2");
let birdNo3 = document.querySelector("#birdNo3");
let bird1 = document.querySelector("#bird1");
let bird2 = document.querySelector("#bird2");
let bird3 = document.querySelector("#bird3");
let birdsNo1 = document.querySelector("#birdsNo1");
let birdsNo2 = document.querySelector("#birdsNo2");
let birdsNo3 = document.querySelector("#birdsNo3");
let continueBtn = document.querySelector("#continue");
let restartBtn = document.querySelector("#rePlay");
let resumeScreen = document.querySelector("#resumeScreen");
let flySound = document.querySelector("#flySound");
let hitSound = document.querySelector("#hitSound");
let backgroundMusic = document.querySelector("#backgroundMusic");
let sound = document.querySelector("#sound");
let navBar = document.querySelector("#navBar");
let footer = document.querySelector("#footer");
let backgroundEffect = document.querySelector("#backgroundEffect");
let body = document.querySelector("body");
let levelUp = document.querySelector("#levelUp");

let topIs = "50";
bird.style.top = "50%";
bird.style.transition = "0.15s";
let isCall = true;
let birdFly;
let firstLevel = true;
let screen = window.innerHeight;
// console.log(screen);
let soundIs = localStorage.getItem("soundIs");
let musicIs = localStorage.getItem("musicIs");
let vibrateIs = localStorage.getItem("vibrateIs");
let colorIs = localStorage.getItem("color");
let scoreIs = localStorage.getItem("scoreIs");
let acradeMode = localStorage.getItem("acradeModeIs");
console.log(acradeMode);
localStorage.setItem("save","true");

scoreValue.innerText = localStorage.getItem("currentScore");
levelUp.style.transform = "scale(0.5)";
levelUp.style.opacity = "1";
levelUp.style.transition = "0s";
function levelUpMsg() {
  setTimeout(() => {
  levelUp.style.opacity = "1";
  levelUp.style.display = "block";
  setTimeout(() => {
    levelUp.style.transition = "1s";
    levelUp.style.transform = "scale(1)";
  },100);
  setTimeout(() => {
    levelUp.style.transform = "translateY(-15rem)";
    levelUp.style.opacity = "0";
  },1400);
  setTimeout(() => {
    levelUp.style.display = "none";
  },2400);
  setTimeout(() => {
    levelUp.style.opacity = "1";
    levelUp.style.transform = "scale(0.5)";
    levelUp.style.transform = "translateY(0rem)";
  },2600);
  },1000);
}
let setAgain;
let call1;
let call2;
let birdSpeed;
let birdFlying;
let animation;
let callAfter;
let speed;
let score2 = 0;
localStorage.setItem("score2",score2);
let option01;
option01 = localStorage.getItem("speed");
updateLevel();
function updateLevel() {
if(option01 === "Easy") {
  setAgain = 3000;
  call1 = 1500;
  birdSpeed = 18;
  birdFlying = 23;
  animation = "all 3s linear";
  speed = 520;
  console.log("easy run");
} else if(option01 === "Mediam") {
  setAgain = 2000;
  call1 = 1000;
  birdSpeed = 15;
  birdFlying = 27;
  animation = "all 2s linear";
  speed = 400;
} else if(option01 === "Hard") {
  setAgain = 1600;
  call1 = 800;
  birdSpeed = 12;
  birdFlying = 32;
  animation = "all 1.6s linear";
  speed = 300;
} else if(option01 === "Expert") {
  setAgain = 1400;
  call1 = 700;
  birdSpeed = 12;
  birdFlying = 32;
  animation = "all 1.3s linear";
  speed = 240;
}
}

let backgroundIs = localStorage.getItem("background");
backgroundEffect.style.opacity = "0";
backgroundEffect.style.visibility = "hidden";
backgroundEffect.style.transition = "0.5s";

if(backgroundIs === "Background01.png") {
  container.style.background = "url('Background01.png')";
  score.style.color = "#FDFDFF";
  total.style.color = "aqua";
  menuIcon.style.color = "#FDFDFF";
  footerLogo.style.color = "aqua";
  sound.style.color = "#FDFDFF";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#2C3E50";
  footer.style.backgroundColor = "#2C3E50";
  level1.style.backgroundColor = "#5D4037";
  level01.style.backgroundColor = "#5D4037";
  level2.style.backgroundColor = "#5D4037";
  level02.style.backgroundColor = "#5D4037";
  level3.style.backgroundColor = "#5D4037";
  level03.style.backgroundColor = "#5D4037";
} else if(backgroundIs === "Background02.png") {
  container.style.background = "url('Background02.png')";
  container.style.backgroundSize = "cover";
  score.style.color = "#FFD3A3";
  total.style.color = "aqua";
  menuIcon.style.color = "#FFD3A3";
  footerLogo.style.color = "aqua";
  sound.style.color = "#FFD3A3";
  navBar.style.backgroundColor = "#1B1B4B";
  footer.style.backgroundColor = "#1B1B4B";
  level1.style.backgroundColor = "#3E4A89";
  level01.style.backgroundColor = "#3E4A89";
  level2.style.backgroundColor = "#3E4A89";
  level02.style.backgroundColor = "#3E4A89";
  level3.style.backgroundColor = "#3E4A89";
  level03.style.backgroundColor = "#3E4A89";
} else if(backgroundIs === "Background03.png") {
  score.style.color = "#AED6F1";
  total.style.color = "white";
  menuIcon.style.color = "#AED6F1";
  footerLogo.style.color = "white";
  sound.style.color = "#AED6F1";
  container.style.background = "url('Background03.png')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#2C3E50";
  footer.style.backgroundColor = "#2C3E50";
  level1.style.backgroundColor = "#1A2533";
  level01.style.backgroundColor = "#1A2533";
  level2.style.backgroundColor = "#1A2533";
  level02.style.backgroundColor = "#1A2533";
  level3.style.backgroundColor = "#1A2533";
  level03.style.backgroundColor = "#1A2533";
} else {
  score.style.color = "#E0FFFF";
  total.style.color = "aqua";
  menuIcon.style.color = "#E0FFFF";
  footerLogo.style.color = "aqua";
  sound.style.color = "#E0FFFF";
  container.style.background = "url('Background04.png')";
  container.style.backgroundSize = "cover";
  navBar.style.backgroundColor = "#4A5D78";
  footer.style.backgroundColor = "#4A5D78";
  level1.style.backgroundColor = "#5D54A4";
  level01.style.backgroundColor = "#5D54A4";
  level2.style.backgroundColor = "#5D54A4";
  level02.style.backgroundColor = "#5D54A4";
  level3.style.backgroundColor = "#5D54A4";
  level03.style.backgroundColor = "#5D54A4";
}
// Start

container.addEventListener("click",start);
function start() {
  if(localStorage.getItem("start") != "true") {
  container.removeEventListener("click",start);
  if(musicIs === true) {
  // backgroundMusic.play();
  }
 // showIcon();
  setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  
  setTimeout(() => {
    firstLevel = false;
  },2000);
  
  birdFly = setInterval(() => {
    if(isCall === true) {
    if(topIs < "93") {
      bird.style.top = `${++topIs}%`;
      topIs = parseInt(bird.style.top);
    }
    }
  },birdSpeed);
  }
}
let btnClick = true;
function fly() {
  if(localStorage.getItem("start") != "true") {
  if(btnClick === true) {
  if(isCall === true) {
  if(topIs > "13") {
  topIs = `${topIs - birdFlying}%`;
  bird.style.top =  topIs;
    msg.style.visibility = "hidden";
  }
  }
  }
  if(vibrateIs === "true") {
  if("vibrate" in window.navigator) {
        window.navigator.vibrate(50);
      } else {
        console.log("not supported");
      }
  }
  if(soundIs === "true") {
    flySound.currentTime = 0.05;
    flySound.volume = "0.1";
    flySound.play();
  }
  if(musicIs === "true") {
    musicIs === "false";
    backgroundMusic.volume = "0.1";
    backgroundMusic.play();
  }
  }
}

// levels1
let leftIs = "100";
level1.style.left = `${leftIs}%`;
level01.style.left = `${leftIs}%`;

let call = "true";
let distance1;
let intervalOne;
let scoreAdd = "true";
let scoreAdd2 = "true";
let scoreAdd3 = "true";
let isLevel = true;
let index = 0;
let height1;
let height01;
if(screen >= 1590) {
  height1 = ["23","53","68","33","63","38","58","18","43","23"]; // +8
  height01 = ["63","33","18","53","23","48","28","68","43","63"];
  function swap1() {
  for(let i = height1.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height1[i],height1[randomNum]] = [height1[randomNum], height1[i]];
      [height01[i],height01[randomNum]] = [height01[randomNum], height01[i]];
    }
  }
  swap1();
  level1.style.height = `${height1[index]}rem`;
  level01.style.height = `${height01[index]}rem`;
  // console.log("called");
} else {
  height1 = ["15","45","60","25","55","30","50","10","35","15"]; // +5
  height01 = ["55","25","10","45","15","40","20","60","35","55"];
  function swap1() {
    for(let i = height1.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height1[i],height1[randomNum]] = [height1[randomNum], height1[i]];
      [height01[i],height01[randomNum]] = [height01[randomNum], height01[i]];
    }
  }
  swap1();
  level1.style.height = `${height1[index]}rem`;
  level01.style.height = `${height01[index]}rem`;
} 

setInterval(() => {
  //distance1 = getComputedStyle(level1).left;
  //distance2 = getComputedStyle(level2).left;
  //distance3 = getComputedStyle(level3).left;
  distance4 = getComputedStyle(bird).top;
},100); 

let isLevelThree = true;
function checkPosition() {
  let computedStyle = getComputedStyle(level1);
  let matrix = new WebKitCSSMatrix(computedStyle.transform);
  if(matrix.m41 <= -900) {
    if(scoreAdd === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd = "false";
      localStorage.setItem("currentScore",scoreValue.innerText);
    }
  }
  let computedStyle2 = getComputedStyle(level2);
  let matrix2 = new WebKitCSSMatrix(computedStyle2.transform);
  if(matrix2.m41 <= -900) {
    if(scoreAdd2 === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd2 = "false";
      localStorage.setItem("currentScore",scoreValue.innerText);
    }
  }
  let computedStyle3 = getComputedStyle(level3);
  let matrix3 = new WebKitCSSMatrix(computedStyle3.transform);
  if(matrix3.m41 <= -700) {
    if(scoreAdd3 === "true") {
      scoreValue.innerText = parseInt(scoreValue.innerText) + 1;
      localStorage.setItem("scores",parseInt(scoreValue.innerText) + parseInt(scoreIs));
      score2 = parseInt(score2) + 1;
      localStorage.setItem("score2",score2);
      scoreAdd3 = "false";
      localStorage.setItem("currentScore",scoreValue.innerText);
    }
  }
  if(matrix3.m41 <= -1000) {
    level3.style.display = "none";
    level03.style.display = "none";
    isLevelThree = false;
    localStorage.setItem("currentScore",scoreValue.innerText);
  }
}

setInterval(() => {
  checkPosition();
},100);


let a;
function levelOne() {
  level1.style.transition = animation;
  level01.style.transition = animation;
  level1.style.transform = "translateX(-1120px)";
  level01.style.transform = "translateX(-1120px)";
        
  a = setTimeout(() => {
    if(isCall === true) {
    level1.style.transition = "all 0s linear";
    level01.style.transition = "all 0s linear";
    level1.style.transform = "translateX(0px)";
    level01.style.transform = "translateX(0px)";
      ++index;
       if(index === 9) {
         index = 0;
         swap1();
       }
      level1.style.height = `${height1[index]}rem`;
      level01.style.height = `${height01[index]}rem`;
      setTimeout(() => {
        scoreAdd = "true";
        levelOne();
      },20);
    }
  },setAgain);
}


// level2
let leftIs2 = "100";
level2.style.left = `${leftIs2}%`;
level02.style.left = `${leftIs2}%`;
let distance2;
let intervalTwo;
let isLevel2 = true;
let index2 = 0;
let height2;
let height02;

if(screen >= 1590) {
  height2 = ["68","38","23","63","33","53","23","43","18","58"]; // + 8
  height02 = ["18","48","63","23","53","33","63","43","68","28"]; 
  function swap2() {
  for(let i = height2.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height2[i],height2[randomNum]] = [height2[randomNum], height2[i]];
      [height02[i],height02[randomNum]] = [height02[randomNum], height02[i]];
    }
  }
  swap2();
  level2.style.height = `${height2[index2]}rem`;
  level02.style.height = `${height02[index2]}rem`;
  // console.log("called");
} else {
  height2 = ["60","30","15","55","25","45","15","35","10","50"]; // + 5
  height02 = ["10","40","55","15","45","25","55","35","60","20"]; 
  function swap2() {
  for(let i = height2.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height2[i],height2[randomNum]] = [height2[randomNum], height2[i]];
      [height02[i],height02[randomNum]] = [height02[randomNum], height02[i]];
    }
  }
  swap2();
  level2.style.height = `${height2[index2]}rem`;
  level02.style.height = `${height02[index2]}rem`;
} 

let b;
function levelTwo() {
  level2.style.transition = animation;
  level02.style.transition = animation;
  level2.style.transform = "translateX(-1120px)";
  level02.style.transform = "translateX(-1120px)";
  b = setTimeout(() => {
    if(isCall === true) {
    level2.style.transition = "0s";
    level02.style.transition = "0s";
    level2.style.transform = "translateX(0px)";
    level02.style.transform = "translateX(0px)";
      ++index2;
      if(index2 === 9) {
        index2 = 0;
        swap2();
      }
      level2.style.height = `${height2[index2]}rem`;
      level02.style.height = `${height02[index2]}rem`;
      setTimeout(() => {
        scoreAdd2 = "true";
        levelTwo();
      },20);
    }
  },setAgain);
}



// level 3
let leftIs3 = "80";
level3.style.left = `${leftIs3}%`;
level03.style.left = `${leftIs3}%`;
let distance3;
let intervalThree;
let isLevel3 = true;
let index3 = 0;
let height3;
let height03;

if(screen >= 1590) {
   height3 = ["38","68","43","23","53","33","63","23","58","18"]; // + 8
   height03 = ["48","18","43","63","33","53","23","63","28","68"];
   function swap3() {
     for(let i = height3.length - 1;i>=0;i--) {
       let randomNum = Math.floor(Math.random() * i + 1);
       [height3[i],height3[randomNum]] = [height3[randomNum], height3[i]];
       [height03[i],height03[randomNum]] = [height03[randomNum], height03[i]];
     }
   }
  swap3();
  level3.style.height = `${height3[index3]}rem`;
  level03.style.height = `${height03[index3]}rem`;
  // console.log("called");
} else {
  height3 = ["30","60","35","15","45","25","55","15","50","10"]; // + 5
  height03 = ["40","10","35","55","25","45","15","55","20","60"];
  function swap3() {
    for(let i = height3.length - 1;i>=0;i--) {
      let randomNum = Math.floor(Math.random() * i + 1);
      [height3[i],height3[randomNum]] = [height3[randomNum], height3[i]];
      [height03[i],height03[randomNum]] = [height03[randomNum], height03[i]];
    }
  }
  swap3();
  level3.style.height = `${height3[index3]}rem`;
  level03.style.height = `${height03[index3]}rem`;
} 
let c;
function levelThree() {
  level3.style.transition = animation;
  level03.style.transition = animation;
  level3.style.transform = "translateX(-1120px)";
  level03.style.transform = "translateX(-1120px)";
  c = setTimeout(() => {
    if(isCall === true) {
    level3.style.display = "none";
    level03.style.display = "none";
    }
  },setAgain);
}


//collision detection
let collisionCheck = true;
function collisionDetection() {
  let rect1 = bird.getBoundingClientRect();
  let rect2 = level1.getBoundingClientRect();
  let rect3 = level01.getBoundingClientRect();
  let rect4 = level2.getBoundingClientRect();
  let rect5 = level02.getBoundingClientRect();
  let rect6 = level3.getBoundingClientRect();
  let rect7 = level03.getBoundingClientRect();
if(collisionCheck === true) {
 if(rect2.right > 0 && rect2.left < window.innerWidth) {
  if(rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
   gameOverFunc();
  }
   if(rect1.left < rect3.right && rect1.right > rect3.left && rect1.top < rect3.bottom && rect1.bottom > rect3.top) {
   gameOverFunc();
  }
 }
  if(rect4.right > 0 && rect4.left < window.innerWidth) {
   if(rect1.left < rect4.right && rect1.right > rect4.left && rect1.top < rect4.bottom && rect1.bottom > rect4.top) {
     gameOverFunc();
   }
   if(rect1.left < rect5.right && rect1.right > rect5.left && rect1.top < rect5.bottom && rect1.bottom > rect5.top) {
     gameOverFunc();
  }
 }
  if(rect6.right > 0 && rect6.left < window.innerWidth) {
   if(rect1.left < rect6.right && rect1.right > rect6.left && rect1.top < rect6.bottom && rect1.bottom > rect6.top) {
     gameOverFunc();
   }
   if(rect1.left < rect7.right && rect1.right > rect7.left && rect1.top < rect7.bottom && rect1.bottom > rect7.top) {
     gameOverFunc();
   }
  } 
}
}


setInterval(() => {
  if(isCall === true) {
    collisionDetection();
  }
  if(acradeMode == "true") {
  if(parseInt(scoreValue.innerText) === 10 && localStorage.getItem("mediam") === "true") {
    levelUpMsg();
    option01 = "Mediam";
    localStorage.setItem("speed","Mediam");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
    console.log("Mediam");
    localStorage.setItem("mediam","false");
  }
  
  if(parseInt(scoreValue.innerText) === 40 && localStorage.getItem("hard") === "true") {
    levelUpMsg();
    option01 = "Hard";
    localStorage.setItem("speed","Hard");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
    setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
    },1000);
    console.log("Hard");
    localStorage.setItem("hard","false");
    //console.log(localStorage.getItem("hard"));
  }
  
  if(parseInt(scoreValue.innerText) === 80 && localStorage.getItem("expert") === "true") {
    levelUpMsg();
    option01 = "Expert";
    localStorage.setItem("speed","Expert");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
    setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
    },1000);
    localStorage.setItem("expert","false");
    console.log("Expert");
    //console.log(localStorage.getItem("expert"));
  }
  }
},100);

if(acradeMode == "true") {
if(parseInt(scoreValue.innerText) >= 0 && parseInt(scoreValue.innerText) < 10 && localStorage.getItem("first") === "falss") {
  option01 = "Easy";
    localStorage.setItem("speed","Mediam");
    localStorage.setItem("start","false");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
 /* if(localStorage.getItem("start") != "true") {
  setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  },3000);
  } */
    console.log("Score b/w 0 & 10, Easy");
}

if(parseInt(scoreValue.innerText) >= 10 && parseInt(scoreValue.innerText) < 40 && localStorage.getItem("resume") != "true") {
  option01 = "Mediam";
    localStorage.setItem("speed","Mediam");
 // localStorage.setItem("start","false");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
 /*
  if(localStorage.getItem("start") != "true") {
  
  setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  },3000);
    }
  */
    console.log("Mediam 2");
}
if(parseInt(scoreValue.innerText) >= 40 && parseInt(scoreValue.innerText) < 80 && localStorage.getItem("resume") != "true") {
  option01 = "Hard";
    localStorage.setItem("speed","Hard");
    //localStorage.setItem("start","false");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
    updateLevel();
 /* if(localStorage.getItem("start") != "true") {
  setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  },3000);
} */
    console.log("Hard 2");
}

if(parseInt(scoreValue.innerText)  >= 80 && localStorage.getItem("resume") != "true") {
 option01 = "Expert";
    localStorage.setItem("speed","Expert");
    clearTimeout(a);
    clearTimeout(b);
    clearTimeout(c);
   updateLevel();
 /* if(localStorage.getItem("start") != "true") {
  setTimeout(() => {
    setTimeout(() => {
    levelOne();
    setTimeout(() => {
      if(isCall === true) {
        levelTwo();
      }
    },call1);
  },parseInt(call1) - speed);
  levelThree();
  },3000);
} */
    console.log("Expert 2");
}
}
// gameover
let birdNo = 0;
let resumeIs = true;
function gameOverFunc() {
  
  firstLevel = false;
  isCall = false;
  resumeIs = false;
  backgroundEffect.style.opacity = "1";
  backgroundEffect.style.visibility = "visible";
  localStorage.setItem("currentScore",scoreValue.innerText);
  
  let computedStyle = getComputedStyle(level1);
  let matrix = new WebKitCSSMatrix(computedStyle.transform);
  level1.style.transform = `translateX(${matrix.m41}px)`;
  let computedStyle01 = getComputedStyle(level1);
  let matrix01 = new WebKitCSSMatrix(computedStyle01.transform);
  level01.style.transform = `translateX(${matrix01.m41}px)`;
  
  let computedStyle2 = getComputedStyle(level2);
  let matrix2 = new WebKitCSSMatrix(computedStyle2.transform);
  level2.style.transform = `translateX(${matrix2.m41}px)`;
  let computedStyle02 = getComputedStyle(level02);
  let matrix02 = new WebKitCSSMatrix(computedStyle02.transform);
  level02.style.transform = `translateX(${matrix02.m41}px)`;
  
  let computedStyle3 = getComputedStyle(level3);
  let matrix3 = new WebKitCSSMatrix(computedStyle3.transform);
  level3.style.transform = `translateX(${matrix3.m41}px)`;
  let computedStyle03 = getComputedStyle(level03);
  let matrix03 = new WebKitCSSMatrix(computedStyle03.transform);
  level03.style.transform = `translateX(${matrix03.m41}px)`;
  
  clearInterval(birdFly);
  bird.style.top = distance4;
  birdNo++;
  
  if(localStorage.getItem("bird1") != "false") {
    localStorage.setItem("bird1","false");
    reGame.style.visibility = "visible";
    birdNo1.style.opacity = "0.2";
    bird1.style.opacity = "0.2";
    birdsNo1.style.opacity = "0.2";
  } else {
  if(localStorage.getItem("bird2") != "false") {
    localStorage.setItem("bird1","false");
    localStorage.setItem("bird2","false");
    reGame.style.visibility = "visible";
    birdNo2.style.opacity = "0.2";
    bird2.style.opacity = "0.2";
    birdsNo2.style.opacity = "0.2";
  } else {
  if(localStorage.getItem("bird3") != "false") {
    localStorage.setItem("bird1","false");
    localStorage.setItem("bird2","false");
    localStorage.setItem("bird3","false");
    gameOver.style.visibility = "visible";
    birdNo3.style.opacity = "0.2";
    bird3.style.opacity = "0.2";
    birdsNo3.style.opacity = "0.2";
  }
  }
  }
  if(vibrateIs === "true") {
    if("vibrate" in window.navigator) {
        window.navigator.vibrate(200);
      } else {
        console.log("not supported");
      }
  }
  backgroundMusic.pause();
  if(soundIs === "true") {
    hitSound.volume = "0.1";
    hitSound.play();
  }
}

if(localStorage.getItem("bird1") === "false") {
    birdNo1.style.opacity = "0.2";
    bird1.style.opacity = "0.2";
    birdsNo1.style.opacity = "0.2";
  } 
if(localStorage.getItem("bird2") === "false") {
    birdNo2.style.opacity = "0.2";
    bird2.style.opacity = "0.2";
    birdsNo2.style.opacity = "0.2";
  }
if(localStorage.getItem("bird3") === "false") {
    birdNo3.style.opacity = "0.2";
    bird3.style.opacity = "0.2";
    birdsNo3.style.opacity = "0.2";
}


if(localStorage.getItem("bird1") === "true") {
    birdNo1.style.opacity = "1";
    bird1.style.opacity = "1";
    birdsNo1.style.opacity = "1";
  }
if(localStorage.getItem("bird2") === "true") {
    birdNo2.style.opacity = "1";
    bird2.style.opacity = "1";
    birdsNo2.style.opacity = "1";
  } 
if(localStorage.getItem("bird3") === "true") {
    birdNo3.style.opacity = "1";
    bird3.style.opacity = "1";
    birdsNo3.style.opacity = "1";
  }

let pause = true;
function continueGame() {
  reGame.style.visibility = "hidden";
  collisionCheck = false;
  btnClick = false;
  resumeIs = true;
  level1.style.transition = "all 3s linear";
  level01.style.transition = "all 3s linear";
  level2.style.transition = "all 3s linear";
  level02.style.transition = "all 3s linear";
  level3.style.transition = "all 3s linear";
  level03.style.transition = "all 3s linear";
  
  level1.style.transform = "translateX(0px)";
  level01.style.transform =  "translateX(0px)";
  level2.style.transform =  "translateX(0px)";
  level02.style.transform =  "translateX(0px)";
  level3.style.transform =  "translateX(0px)";
  level03.style.transform =  "translateX(0px)";
  
  rePlayTime.style.visibility = "visible";
  rePlayTime.innerText = "3";
  setTimeout(() => {
    rePlayTime.innerText = "2";
  },1000);
  setTimeout(() => {
    rePlayTime.innerText = "1";
  },2000);
  setTimeout(() => {
    isCall = true;
    collisionCheck = true;
    btnClick = true;
    rePlayTime.style.visibility = "hidden";
    if(isLevelThree === true) {
       if(pause === true) {
         setTimeout(() => {
           levelOne();
             setTimeout(() => {
               if(pause === true || isCall === true) {
                 levelTwo();
               }
             },call1);
         },parseInt(call1) - speed);
         levelThree();
       }
    }
    if(isLevelThree === false) {
     if(pause === true) {
      levelOne();
        setTimeout(() => {
          if(pause === true || isCall === true) {
            levelTwo();
          }
        },call1);
    }
    }
    birdFly = setInterval(() => {
      if(isCall === true) {
        if(topIs < "93") {
          bird.style.top = `${++topIs}%`;
          topIs = parseInt(bird.style.top);
        }
      }
    },birdSpeed);
    
  },3000);
}


// restart
function restart() {
  reGame.style.visibility = "hidden";
  resumeScreen.style.visibility = "hidden";
  localStorage.setItem("resume","false");
  localStorage.setItem("currentScore",parseInt(scoreValue.innerText));
  localStorage.setItem("scores",parseInt(scoreValue.innerText));
  window.location.href = "FlyBird.html";
  
}
function restart2() {
  localStorage.setItem("resume","false");
  localStorage.setItem("start","false");
  localStorage.setItem("scores",0);
  localStorage.setItem("bird1","true");
  localStorage.setItem("bird2","true");
  localStorage.setItem("bird3","true");
  localStorage.setItem("mediam","true");
localStorage.setItem("hard","true");
localStorage.setItem("expert","true");
localStorage.setItem("currentScore",0);
  if(acradeMode == "true") { 
  localStorage.setItem("speed","Easy");
  }
  window.location.href = "FlyBird.html";
}

// quit Game
function back() {
  localStorage.setItem("saveScore",localStorage.getItem("currentScore"));
  //localStorage.setItem("saveScore",10000);
  window.location.href = "index.html";
  location.reload();
}
// resume 

function resumeGame() {
  if(localStorage.getItem("bird1") === "false" && localStorage.getItem("bird2") === "false" && localStorage.getItem("bird3") === "false") {
    resumeScreen.style.visibility = "hidden";
    backgroundEffect.style.opacity = "0";
    backgroundEffect.style.visibility = "hidden";
    gameOver.style.visibility = "visible";
    localStorage.setItem("start","fal");
  } else {
      localStorage.setItem("resume","false");
      localStorage.setItem("start","true");
      localStorage.setItem("first","false");
      restart();
  }
}
if(localStorage.getItem("resume") === "true") {
  resumeScreen.style.visibility = "visible";
  backgroundEffect.style.opacity = "1";
  backgroundEffect.style.visibility = "visible";
  level3.style.display = "none";
  level03.style.display = "none";
  msg.style.visibility = "hidden";
  bird.style.visibility = "hidden";
  scoreValue.innerText = localStorage.getItem("currentScore");
} else {
  scoreValue.innerText = localStorage.getItem("currentScore");
}

if(localStorage.getItem("start") === "true") {
    msg.style.visibility = "hidden";
    scoreValue.innerText = localStorage.getItem("currentScore");
    rePlayTime.style.visibility = "visible";
    rePlayTime.innerText = "3";
    setTimeout(() => {
      rePlayTime.innerText = "2";
    },1000);
    setTimeout(() => {
      rePlayTime.innerText = "1";
    },2000);
    setTimeout(() => {
      rePlayTime.style.visibility = "hidden";
      localStorage.setItem("start","false");
       start();
    },3000);
  } 
total.style.visibility = "visible";
total.style.opacity = "1";
total.style.transition = "1s";

let paused = false;
function menu() {
      localStorage.setItem("resume","true");
      localStorage.setItem("start","false");
      window.location.href = "FlyBird.html";
}

// sound Button
if(soundIs === "true") {
  sound.removeAttribute("class");
  sound.setAttribute("class","fa-solid fa-volume-high");
} else {
  sound.removeAttribute("class");
  sound.setAttribute("class","fa-solid fa-volume-xmark");
}
function soundFunction() {
  if(soundIs === "true") {
    sound.removeAttribute("class");
    sound.setAttribute("class","fa-solid fa-volume-xmark");
    flySound.pause();
    soundIs = "false";
  } else {
    sound.removeAttribute("class");
    sound.setAttribute("class","fa-solid fa-volume-high");
    flySound.play();
    soundIs = "true";
  }
}

// bird color 
if(colorIs === "blue") {
  bird.style.color = "blue";
} else if(colorIs === "red") {
  bird.style.color = "red";
} else if(colorIs === "darkgreen") {
  bird.style.color = "darkgreen";
} else {
  bird.style.color = "midnightblue";
}
