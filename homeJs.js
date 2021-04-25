const playBtn = document.querySelector(".buttonPlay");
const popUp = document.getElementById("popup");
const close = document.querySelector(".close");
const name = document.querySelector("#name");
const go = document.querySelector("#go");
const easy = document.querySelector("#easy1");
const medium = document.querySelector("#medium1");
const hard = document.querySelector("#hard1");
const home = document.querySelector(".home");
const game = document.querySelector(".game");
const result = document.querySelector(".result");
const boxPoint = document.querySelector("#point");
const boxtime = document.querySelector("#time");
const final = document.querySelector("#final");
const yourPoint = document.querySelector("#yourPoint");
const voice = document.getElementById("myAudio");
const voiceGame = document.getElementById("myAudioGame");
const stopVoiceGame = document.getElementById("stopAudio");
const games = document.querySelector("#games");
let player = "";
let diff =0;
let point = 0;
let time = 2;
let a= "";
let pic =0;

playBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

close.addEventListener("click", () => {
  popUp.style.display = "none";
});

go.addEventListener("click", () => {
  home.style.display = "none";
  game.style.display = "inline";
  player = name.value;
  if (easy.checked) {
    time = parseInt(easy.value);
    diff = 4;
  } else if (medium.checked) {
    time = parseInt(medium.value);
    diff = 6;
  } else if (hard.checked) {
    time = parseInt(hard.value);
    diff = 12;
  }
  boxtime.innerHTML = "Time : " + time;
  countDown(time);
  templeteGame(diff);
  playAudioGame();
});

const countDown = (time) => {
  let timer = setInterval(() => {
    time--;
    boxtime.innerHTML = "Time : " + time;
    if (time === 0) {
      game.style.display = "none";
      result.style.display = "inline";
      yourPoint.innerHTML = " <p> Your point:" + point + " </p>" ;
      final.innerHTML = "<p> Thank You " + player + "</p>";
      pauseAudioGame();
      playAudio();
      clearInterval(timer);
    }
  }, 1000);
};

boxPoint.innerHTML = "Point : " + point;

function playAudio() {
  voice.play();
}

function playAudioGame() {
  voiceGame.play();
}

function pauseAudioGame() {
  voiceGame.pause();
}

stopVoiceGame.addEventListener("click", () => {
  pauseAudioGame();
});

const templeteGame = (diff) =>{
  if(diff === 4){
    games.classList.add("perantGame" , "gridTemClumnEasy");  
  }
  if(diff === 6){
    games.classList.add("perantGame" , "gridTemClumnMeduim");  
  }
  if(diff === 12){
    games.classList.add("perantGame" , "gridTemClumnHard");  
  }
  for(let i=0; i< diff; i++){
    a = "n"+i
    games.innerHTML += "<div id="+a+"> </div>"
  }
  for(let i=0; i< diff; i++){
    a = "n"+i;
    document.querySelector("#"+a).classList.add("divStyle");
    document.querySelector("#"+a).innerHTML ="<button id= "+a+"> <img src='./p1.png' height='100%' width='100%' style='cursor: pointer'> </button> "
  }
}

/*const pic =(diff) =>{
  pic = Math.round(Math.random()*(diff/2));
}

for(let i=0; i< diff; i++){
  a = "n"+i;
  document.querySelector("#"+a).addEventListener("click", () => {
    document.querySelector("#"+a).src += pic;
  });
}*/