// "vision__vid_container"
// "vid_controls_container"
// "timerline_container"
// "controls"
// "play-icon"
// "pause-icon"

const playBtn = document.querySelector('.play-pause_btn');
const vid = document.querySelector('.vision-vid');

playBtn.addEventListener('click', toggleVid)

function toggleVid () {
    vid.paused ? vid.play() : vid.pause()
}

