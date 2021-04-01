import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
    //new AutoPlay()
    ]
});

const playPause = document.querySelector('#playButton');
playPause.onclick = () => player.togglePlay();
const muteUnmute = document.querySelector('#muteButton');
muteUnmute.onclick = () => player.toggleMute();