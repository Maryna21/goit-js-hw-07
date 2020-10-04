const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsRecipeEl = document.querySelector(`#ingredients`);
const ingredient = ingredients.map((name) => {
  const list = document.createElement("li");
  list.textContent = name;
  return list;
});
ingredientsRecipeEl.append(...ingredient);
console.log(ingredientsRecipeEl);
