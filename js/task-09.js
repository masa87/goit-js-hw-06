const qs = (selector) => document.querySelector(selector);

const body = qs("body");
const spanColor = qs(".color");
const changeColor = qs(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeFunction() {
  let newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  body.style.backgroundColor = newColor;
}

changeColor.addEventListener("click", changeFunction);
