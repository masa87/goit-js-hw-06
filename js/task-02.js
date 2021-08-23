const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const qs = (selector) => document.querySelector(selector);

const ulIngredients = qs("#ingredients");

for (let item of ingredients) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = item;
  newIngredient.classList.add("item");
  ulIngredients.append(newIngredient);
}
