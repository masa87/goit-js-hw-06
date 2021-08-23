"use strict";

const qs = (selector) => document.querySelector(selector);
const qsall = (selector) => document.querySelectorAll(selector);

const categories = qsall("li.item");

console.log(`Number of categories: ${categories.length}`);

const itemsChildren = [...categories].forEach((item) => {
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
});
