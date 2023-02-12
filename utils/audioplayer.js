class audioPlayer {
    constructor (audio, platBtn, dowloadBtn, mutedBtn, currentTimeInput, volumeRangeInput, timeView) {
        this.audio = audio;
        this.platBtn = platBtn;
        this.mutedBtn = mutedBtn;
        this.dowloadBtn = dowloadBtn;
        this.currentTimeInput = currentTimeInput;
        this.volumeRangeInput = volumeRangeInput;
        this.timeView = timeView;
    }

    play() {
        this.audio.play()
    }

    pause() {
        this.audio.pause()
    }

    volumeDown() {
        this.audio.volume = this.audio.volume - 0.4;
    }

    volumeUp() {
        this.audio.volume = this.audio.volume + 0.4;
    }

    mute() {
        this.audio.muted = true;
    }

    unMute() {
        this.audio.muted = false;
    }

    renderTime () {
        this.timeView.innerText = this.audio.currentTime;
    }
}

const platBtn = document.getElementById('play-btn')
const dowloadBtn = document.getElementById('dowload-son')
const mutedBtn = document.getElementById('muteBtn')
const currentTimeInput = document.getElementById('current-time')
const volumeRangeInput = document.getElementById('volumeInput')
const timeView = document.getElementById('timeView')

const audioControls = new audioPlayer (platBtn, dowloadBtn, mutedBtn, currentTimeInput, volumeRangeInput,timeView)

module.exports(audioControls);