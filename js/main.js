"use strict";

const $menuBtn = document.querySelector(".gnb__menu-btn");
const $asideMenu = document.querySelector(".aside-menu");
const $asideMenuClose = document.querySelector(".aside-menu__close");
const $asideMenuContent = document.querySelectorAll(".aside-menu__content");

const IS_OPEN = `is-open`;

$menuBtn.addEventListener("click", () => {
  $asideMenu.classList.add(IS_OPEN);
});

$asideMenuClose.addEventListener("click", () => {
  $asideMenu.classList.remove(IS_OPEN);

  // 사이드메뉴가 없어질 때 깔끔함을 위해 display:none 적용
  for (let i = 0; i < $asideMenuContent.length; i++) {
    $asideMenuContent[i].style.display = "none";
  }
});

// 한번에 없애기 위해 적용시킨 dispay:none을 트랜지션이 끝나면 다시 원상태로 변경
$asideMenu.addEventListener("transitionend", changeOriginDisplayValue);

function changeOriginDisplayValue() {
  for (let i = 0; i < $asideMenuContent.length; i++) {
    $asideMenuContent[i].style.display = "block";
  }
}
