const allItemsEl = document.querySelector(`ul#categories`);
console.log(`У списку ${allItemsEl.children.length} категорії.`);
const itemList = document.querySelectorAll(`li.item`);
itemList.forEach((element) => {
  console.log(`Категорія: ${element.firstElementChild.textContent}
Кількість елементів: ${element.lastElementChild.children.length}`);
});
