const $navItem = document.querySelectorAll(".nav__item");
const $lnbBox = document.querySelector(".lnb");
const $lnbItem = document.querySelectorAll(".lnb__wrapper");

$navItem.forEach(function (el, idx) {
  el.addEventListener("mouseenter", (e) => {
    handleMouseEnter(e, idx);
  });
});

$lnbItem.forEach(function (el, idx) {
  el.addEventListener("mouseleave", (e) => {
    handleMouseLeave(e, idx);
  });
});

function handleMouseEnter(e, idx) {
  let lnbTarget = $lnbItem[idx];

  if (idx !== 1 && idx != 5) {
    $lnbItem.forEach((el) => el.classList.remove(`is-open`));
    lnbTarget.classList.add(`is-open`);
    slideDown($lnbBox);
  } else {
    slideUp($lnbBox);
    setTimeout(() => {
      $lnbItem.forEach((el) => el.classList.remove(`is-open`));
    }, 500);
  }
}

function handleMouseLeave(e, idx) {
  let lnbTarget = $lnbItem[idx];
  slideUp($lnbBox);
  window.setTimeout(() => {
    lnbTarget.classList.remove(`is-open`);
  }, 500);
}

function slideDown(target, duration = 500) {
  target.style.removeProperty("display");
  let display = window.getComputedStyle(target).display;
  if (display === "none") display = "block";
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.height = height + "px";
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
}

function slideUp(target, duration = 500) {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + "ms";
  target.style.boxSizing = "border-box";
  target.style.height = target.offsetHeight + "px";
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
    //alert("!");
  }, duration);
}
