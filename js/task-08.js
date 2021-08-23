const qs = (selector) => document.querySelector(selector);

const form = qs(".login-form");
const inputEmail = qs('input[name="email"]');
const inputPass = qs('input[name="password"]');
const btn = qs("button");

form.addEventListener("submit", formValidation);

function formValidation(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie wymagane pola!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
  }
}
