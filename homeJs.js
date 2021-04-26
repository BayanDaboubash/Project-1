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
const boxtime = document.querySelector("#time");
const final = document.querySelector("#final");
const yourPoint = document.querySelector("#yourPoint");
const voice = document.getElementById("myAudio");
const voiceGame = document.getElementById("myAudioGame");
const stopVoiceGame = document.getElementById("stopAudio");
const easyGame = document.querySelector(".easyGame");
const meduimGame = document.querySelector(".meduimGame");
const hardGame = document.querySelector(".hardGame");
const playAgain = document.querySelector("#playAgain");
const Finish = document.querySelector("#finish");
const flips = document.querySelectorAll('.flip');

let level;
let diff = 0;
let player = "";
let point = 0;
let time = 1;
let a= "";

playAgain.addEventListener("click", () => {
  result.style.display = "none";
  location.reload()
  // home.style.display = "block";
});

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
    level = 4;
    easyGame.style.display = "inline";
    meduimGame.style.display = "none";
    hardGame.style.display = "none";
  } else if (medium.checked) {
    level = 8;
    easyGame.style.display = "none";
    meduimGame.style.display = "inline";
    hardGame.style.display = "none";
  } else if (hard.checked) {
    level = 12;
    easyGame.style.display = "none";
    meduimGame.style.display = "none";
    hardGame.style.display = "inline";
  }
  else{
    level = 8;
    easyGame.style.display = "none";
    meduimGame.style.display = "inline";
    hardGame.style.display = "none";
  }
  boxtime.innerHTML = "Time : " + time;
  countDown(time);
  playAudioGame();
});

const countDown = (time) => {
  let timer = setInterval(() => {
    if (time == 0) {
      game.style.display = "none";
      result.style.display = "inline";
      yourPoint.innerHTML = " <p> Your time: " + point + " </p>" ;
      final.innerHTML = "<p> Thank You " + player + "</p>";
      pauseAudioGame();
      playAudio();
      clearInterval(timer);
    }
    time++;
    boxtime.innerHTML = "Time : " + time;
    point = time;

    const flips = document.querySelectorAll('.flip');

    if(flips.length === level) {

      Finish.addEventListener("click", () => {
        time = 0;
      });
    }
  }, 1000);
};

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
