const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputChange = (value) => {
  if (value.lenght !== 0) {
    outputEl.textContent = value.currentTarget.value;
  } else {
    outputEl.textContent = "незнайомець";
  }
};
inputEl.addEventListener("input", onInputChange);
