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
let player = "";
let point = 0;
let time = 2;

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
  } else if (medium.checked) {
    time = parseInt(medium.value);
  } else if (hard.checked) {
    time = parseInt(hard.value);
  }
  boxtime.innerHTML = "Time : " + time;
  countDown(time);
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