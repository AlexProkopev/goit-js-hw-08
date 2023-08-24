
import Vimeo from '@vimeo/player';
let throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');

const vimeoPlayer = new Vimeo("vimeo-player", {
        id: iframe.id
    })

// let pauseTime = Number(localStorage.getItem("pause time"))

const onPlay = function(data) {
    // data is an object containing properties specific to that event
    let pauseTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(pauseTime))
};

vimeoPlayer.on('timeupdate', throttle(onPlay, 1000));

const startPlayer = JSON.parse(localStorage.getItem("videoplayer-current-time"))

vimeoPlayer.setCurrentTime(startPlayer).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

// const plysStart = Number(localStorage.getItem("pause time"))
// console.log(plysStart);







