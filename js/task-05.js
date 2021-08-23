const qs = (selector) => document.querySelector(selector);

const inputName = qs("#name-input");
const outputName = qs("#name-output");

const inputText = () => {
  outputName.innerText = inputName.value;
};

inputName.addEventListener("input", inputText);
