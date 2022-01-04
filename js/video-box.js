"use strict";

// 유튜브 API 사용

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "560",
    width: "315",
    videoId: "QyQEY9zDQbI",
    /*
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
		  */
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

// 비디오 제어
const videoBtn = document.querySelector(".video-box__play-btn");
const navBtn = document.querySelectorAll(".video-box__nav-btn");
const videoCover = document.querySelector(".video-box__cover");
const videoPlayer = document.getElementById("player");

videoPlayer.style.display = "none";
videoBtn.addEventListener("click", handleVideoPlay);

function handleVideoPlay() {
  const videoPlayer = document.getElementById("player");

  videoCover.style.display = "none";
  videoPlayer.style.display = "block"; // 정상작동
  player.playVideo();
}

// 비디오 네비게이션 제어
navBtn[0].classList.add("is-active");

navBtn.forEach((el, idx) => {
  let navTarget = navBtn[idx];
  let navTargetImage = document.querySelectorAll(".video-box__nav-btn");
  let navTargetSrc = navTargetImage[idx].querySelector("img").src;
  let navTargetId = navTarget.getAttribute("id");

  el.addEventListener("click", (e) => {
    document.querySelector(".video-box__cover-img").src = `${navTargetSrc}`;

    player.stopVideo();
    player.cueVideoById(navTargetId);
    videoCover.style.display = "block";
    // videoPlayer.style.display = "none";

    navBtn.forEach((el) => {
      el.classList.remove("is-active");
    });
    navTarget.classList.add("is-active");
  });
});
