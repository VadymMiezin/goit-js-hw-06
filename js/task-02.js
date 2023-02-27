const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;

  return ingredientEl
})

console.log(elements)

const ingredientsEl = document.querySelector("#ingredients");

ingredientsEl.append(...elements);