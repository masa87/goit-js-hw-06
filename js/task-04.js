const qs = (selector) => document.querySelector(selector);

const btnDecrement = qs('button[data-action="decrement"]');
const btnIncrement = qs('button[data-action="increment"]');
const counterValue = qs("#value");

let counter = 0;

const increment = () => {
  counter += 1;
  counterValue.textContent = counter;
};

const decrement = () => {
  counter -= 1;
  counterValue.textContent = counter;
};

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
