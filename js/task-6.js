const validationInputEl = document.querySelector("#validation-input");
const onValidInput = () => {
  if (
    validationInputEl.value.length === Number(validationInputEl.dataset.length)
  ) {
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.add("invalid");
    validationInputEl.classList.remove("valid");
  }
};
validationInputEl.addEventListener("blur", onValidInput);
