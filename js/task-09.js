function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorCode = document.querySelector(".color");
const body = document.querySelector("body");

buttonEl.addEventListener("click", onButtonClick);

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorCode.textContent = getRandomHexColor();
}
