const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
const onChangeRange = (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};
rangeEl.addEventListener("input", onChangeRange);
