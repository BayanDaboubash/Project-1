const playBtn = document.querySelector(".buttonPlay");
const popUp = document.getElementById("popup");
const close = document.querySelector(".close");
const name = document.getElementById("#name");

playBtn.addEventListener("click", () => {
  popUp.style.display = "block";
});

close.addEventListener("click", () => {
  popUp.style.display = "none";
});
