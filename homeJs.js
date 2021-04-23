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
const boxPoint = document.querySelector("#point");
const boxtime = document.querySelector("#time");
let player = "";
let diff = "";
let point = 0;
let time = 0;

playBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

close.addEventListener("click", () => {
  popUp.style.display = "none";
});

go.addEventListener("click", () => {
  home.style.display = "none";
  game.style.display = "flex";
});

go.addEventListener("click", () => {
  player = name.value;
  if (easy.checked) {
    diff = easy.value;
  } else if (medium.checked) {
    diff = medium.value;
  } else if (hard.checked) {
    diff = hard.value;
  }
});

boxPoint.innerHTML = "Point : " + point;
boxtime.innerHTML = "Time : " + time;
