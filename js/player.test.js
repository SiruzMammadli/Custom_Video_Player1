const playerContainer = document.querySelector(".player_container"),
  videoSrc = document.querySelector("video");

// _-= PLAY & PAUSE BUTTON =-_
const playPauseBtn = document.getElementById("play_pause");

playPauseBtn.addEventListener("click", function () {
  if (this.innerHTML.includes("play_arrow")) {
    playPauseBtn.classList.add("pause");
    this.innerHTML = "pause";
  } else {
    playPauseBtn.classList.remove("pause");
    this.innerHTML = "play_arrow";
  }
});
