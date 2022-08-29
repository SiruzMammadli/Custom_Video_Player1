const video = document.querySelector("#video");
const playerWrapper = document.querySelector(".player_wrapper");

// -=-=- PLAY PAUSE BUTTON -=-=-
const playPauseBtn = document.querySelector(".play_Pause");

playPauseBtn.addEventListener("click", togglePlay);

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  !playerWrapper.classList.contains("paused")
    ? playerWrapper.classList.add("paused")
    : playerWrapper.classList.remove("paused");
});
video.addEventListener("pause", () => {
  playerWrapper.classList.contains("paused")
    ? playerWrapper.classList.remove("paused")
    : playerWrapper.classList.add("paused");
});

// -=-=- (END)PLAY PAUSE BUTTON -=-=-

// -=-=- FULLSCREEN BUTTON -=-=-
const fullScreenBtn = document.querySelector('.fullscreenBtn');

fullScreenBtn.addEventListener('click', toggleFullScreenMode);



// (END)-=-=- FULLSCREEN BUTTON -=-=-