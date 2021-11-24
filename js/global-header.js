const $globalHeader = document.querySelector(".global-header");
const $navItem = document.querySelectorAll(".nav__item");
const $lnbBox = document.querySelector(".lnb");
const $lnbItem = document.querySelectorAll(".lnb__wrapper");

// 네비게이션 리스트에 마우스 오버 이벤트 추가
$navItem.forEach(function (el, idx) {
  el.addEventListener("mouseenter", (e) => {
    handleMouseEnter(e, idx);
  });
});

// GNB 네비게이션 마우스 오버 이벤트핸들러
function handleMouseEnter(e, idx) {
  let lnbTarget = $lnbItem[idx];
  let isSiblingsOpen = Array.from(lnbTarget.parentElement.children)
    .filter((el) => el != lnbTarget)
    .some((el) => el.classList.contains(`is-open`));

  // 타겟을 제외한 다른 lnb가 open되어 있는 경우
  if (isSiblingsOpen) {
    if (idx !== 1 && idx !== 5) {
      $lnbItem.forEach((el) => {
        el.classList.remove(`is-open`);
        setTimeout(() => {
          lnbTarget.classList.add(`is-open`);
        }, 500);
      });
    } else {
      $lnbItem.forEach((el) => el.classList.remove(`is-open`));
    }
  } else {
    // 모든 lnb가 닫혀있는 경우
    if (idx !== 1 && idx != 5) {
      $lnbItem.forEach(() => {
        lnbTarget.classList.add(`is-open`);
      });
    } else {
      $lnbItem.forEach((el) => el.classList.remove(`is-open`));
    }
  }
}

// 마우스가 글로벌 헤더 영역을 벗어나면 열린 lnb 닫기
$globalHeader.addEventListener("mouseleave", () => {
  $lnbItem.forEach((el) => el.classList.remove(`is-open`));
});

// 슬라이드 업 & 다운 - 바닐라 자바스크립트

// function slideDown(target, duration = 500) {
//   target.style.removeProperty("display");
//   let display = window.getComputedStyle(target).display;
//   if (display === "none") {
//     display = "block";
//   }
//   target.style.display = display;
//   let height = target.offsetHeight;
//   target.style.overflow = "hidden";
//   target.style.height = 0;
//   target.style.paddingTop = 0;
//   target.style.paddingBottom = 0;
//   target.style.marginTop = 0;
//   target.style.marginBottom = 0;
//   target.offsetHeight;
//   target.style.boxSizing = "border-box";
//   target.style.transitionProperty = "height, margin, padding";
//   target.style.transitionDuration = duration + "ms";
//   target.style.height = height + "px";
//   target.style.removeProperty("padding-top");
//   target.style.removeProperty("padding-bottom");
//   target.style.removeProperty("margin-top");
//   target.style.removeProperty("margin-bottom");
//   window.setTimeout(() => {
//     target.style.removeProperty("height");
//     target.style.removeProperty("overflow");
//     target.style.removeProperty("transition-duration");
//     target.style.removeProperty("transition-property");
//   }, duration);
// }

// function slideUp(target, duration = 500) {
//   target.style.transitionProperty = "height, margin, padding";
//   target.style.transitionDuration = duration + "ms";
//   target.style.boxSizing = "border-box";
//   target.style.height = target.offsetHeight + "px";
//   target.offsetHeight;
//   target.style.overflow = "hidden";
//   target.style.height = 0;
//   target.style.paddingTop = 0;
//   target.style.paddingBottom = 0;
//   target.style.marginTop = 0;
//   target.style.marginBottom = 0;
//   window.setTimeout(() => {
//     target.style.display = "none";
//     target.style.removeProperty("height");
//     target.style.removeProperty("padding-top");
//     target.style.removeProperty("padding-bottom");
//     target.style.removeProperty("margin-top");
//     target.style.removeProperty("margin-bottom");
//     target.style.removeProperty("overflow");
//     target.style.removeProperty("transition-duration");
//     target.style.removeProperty("transition-property");
//     //alert("!");
//   }, duration);
// }
