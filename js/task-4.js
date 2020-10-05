let counterValue = 0;
const allBtnEl = document.querySelectorAll("button");
const incrementBtnEl = allBtnEl[1];
const decrementBtnEl = allBtnEl[0];
const valueEl = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  return valueEl.textContent;
};
const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  return valueEl.textContent;
};
incrementBtnEl.addEventListener("click", increment);
decrementBtnEl.addEventListener("click", decrement);
