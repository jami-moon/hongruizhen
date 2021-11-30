"use strict";

const $eventSlideItem = document.querySelectorAll(".event-slide__item");
const $eventDesc = document.querySelectorAll(".event-slide__desc");

$eventSlideItem.forEach((el, idx) => {
  let targetDesc = $eventDesc[idx];

  el.addEventListener("mouseover", () => {
    targetDesc.classList.add(`is-open`);
  });

  el.addEventListener("mouseout", () => {
    targetDesc.classList.remove(`is-open`);
  });
});
