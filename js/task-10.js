function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", onCreateBtn);
destroyBtn.addEventListener("click", destroyBoxes);

function onCreateBtn() {
  let boxesToAdd = createBoxes(input.value);
  boxes.append(...boxesToAdd);
}
