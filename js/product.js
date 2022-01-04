"use strict";

const $slideNavItem = document.querySelectorAll(".product-slide__nav-item");

$slideNavItem.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    handleSlideNavClick(e, idx);
  });
});

function handleSlideNavClick(e, idx) {
  let navTarget = $slideNavItem[idx];

  $slideNavItem.forEach((el) => {
    el.classList.remove(`is-active`);
  });

  navTarget.classList.add(`is-active`);
}

const $productImage = document.querySelectorAll(".product-card__image img");

$productImage.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    let targetSrcWithoutExtenstion = e.target.src.replace(
      /(.png|.jpg|.jpeg|.gif)$/,
      ""
    );
    e.target.src = `${targetSrcWithoutExtenstion}2.png`;
  });

  el.addEventListener("mouseleave", (e) => {
    let targetSrcWithoutExtenstion = e.target.src.replace(
      /(.png|.jpg|.jpeg|.gif)$/,
      ""
    );
    e.target.src = `${targetSrcWithoutExtenstion.slice(0, -1)}.png`;
  });
});
