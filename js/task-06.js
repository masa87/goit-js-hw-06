const qs = (selector) => document.querySelector(selector);

const inputValidation = qs("#validation-input");

const checkInput = () => {
  if (inputValidation.value.length === 6) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.remove("valid");
    inputValidation.classList.add("invalid");
  }
};

inputValidation.addEventListener("change", checkInput);
