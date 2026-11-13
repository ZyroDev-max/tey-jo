"use strict";

const WORD_COUNT = 100;
const MESSAGE = "I Love Rath🩷";

/** Create one animated word; `--index` drives its animation delay. */
function createItem(index) {
  const item = document.createElement("div");
  item.className = "heart__item";
  item.style.animationDelay = `${-index * 300}ms`;

  const word = document.createElement("span");
  word.className = "heart__word";
  word.textContent = MESSAGE;

  item.append(word);
  return item;
}

function renderHeart(container, count = WORD_COUNT) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= count; i++) {
    fragment.append(createItem(i));
  }
  container.append(fragment); // single DOM write
}

const heart = document.getElementById("heart");
if (heart) renderHeart(heart);
