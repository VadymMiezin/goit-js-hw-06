const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories:`, categoriesEl.length);

const itemsEl = document.querySelector(".item");

categoriesEl.forEach((element) => {
console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.childElementCount}`)});

