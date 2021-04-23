const playBtn = document.querySelector(".buttonPlay");
const popUp = document.getElementById("popup");
const close = document.querySelector(".close");
const name = document.querySelector("#name");
const go = document.querySelector("#go");
const easy = document.querySelector("#easy1");
const medium = document.querySelector("#medium1");
const hard = document.querySelector("#hard1");
const home = document.querySelector(".home");
let player = "";
let diff = "";

playBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

close.addEventListener("click", () => {
  popUp.style.display = "none";
});

go.addEventListener("click", () => {
  home.style.display = "none";
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
