const qs = (selector) => document.querySelector(selector);

const inputRange = qs("#font-size-control");
const text = qs("#text");

inputRange.addEventListener("input", (event) => {
  text.style.fontSize = `${inputRange.value}px`;
});
