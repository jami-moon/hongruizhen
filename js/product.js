const $slideNavItem = document.querySelectorAll(".product-slide__nav-item");

$slideNavItem.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    handleSlideNavClick(e, idx);
  });
});

function handleSlideNavClick(e, idx) {
  let navTarget = $slideNavItem[idx];
  // let targetSiblings = Array.from(navTarget.parentElement.children).filter(
  //   (el) => el != navTarget
  // );

  $slideNavItem.forEach((el) => {
    el.classList.remove(`is-active`);
  });

  navTarget.classList.add(`is-active`);
}
