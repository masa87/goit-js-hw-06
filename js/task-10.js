const qs = (selector) => document.querySelector(selector);

const inputValue = qs("input");
const create = qs(".create");
const destroy = qs(".destroy");
const boxes = qs("#boxes");
const divBoxes = document.querySelectorAll("#boxes div");

let boxSize = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createRandom() {
  for (let i = 0; i < inputValue.value; i++) {
    boxSize += 10;
    let newColor = getRandomHexColor();

    const newItem = document.createElement("div");
    newItem.style.width = `${boxSize}px`;
    newItem.style.height = `${boxSize}px`;
    newItem.style.margin = "3px";
    newItem.style.borderRadius = "2px";
    newItem.style.backgroundColor = `${newColor}`;
    boxes.append(newItem);
  }
}

const removeItem = () => {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
    boxSize = 20;
  }
};

create.addEventListener("click", createRandom);
destroy.addEventListener("click", removeItem);
