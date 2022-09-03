const playerContainer = document.querySelector(".player_container"),
  videoSrc = document.querySelector("video");

// _-= (START)PLAY & PAUSE BUTTON =-_
const playPauseBtn = document.getElementById("play_pause");

playPauseBtn.addEventListener("click", function () {
  if (this.innerHTML.includes("play_arrow")) {
    playPauseBtn.classList.add("pause");
    this.innerHTML = "pause";
    if (videoSrc.paused) videoSrc.play();
  } else {
    playPauseBtn.classList.remove("pause");
    this.innerHTML = "play_arrow";
    if (!videoSrc.paused) videoSrc.pause();
  }
});

// _-= (END)PLAY & PAUSE BUTTON =-_

// _-= (START)FAST REWIND & FORWARD BUTTON =-_
const rewindBtn = document.getElementById("fast_rewind"),
  forwardBtn = document.getElementById("fast_forward");

rewindBtn.addEventListener("click", function () {
  videoSrc.currentTime -= 10;
});
forwardBtn.addEventListener("click", function () {
  videoSrc.currentTime += 10;
});

// _-= (END)FAST BACKWARD & FORWARD BUTTON =-_

// _-= (START)KEYDOWN EVENTS =-_

document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 32:
      e.preventDefault();
      videoSrc.paused ? videoSrc.play() : videoSrc.pause();
      break;
    case 37:
      e.preventDefault();
      videoSrc.currentTime -= 10;
      break;
    case 39:
      e.preventDefault();
      videoSrc.currentTime += 10;
      break;
  }
});

// _-= (END)KEYDOWN EVENTS =-_
