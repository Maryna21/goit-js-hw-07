const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputChange = (value) => {
  if (inputEl.value.length > 0) {
    outputEl.textContent = value.currentTarget.value;
  } else {
    outputEl.textContent = "незнайомець";
  }
};
inputEl.addEventListener("input", onInputChange);
