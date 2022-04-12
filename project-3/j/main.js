/** @format */

// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var myTimer = false;


// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "ks6ZP8EbCOo",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}


// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('playerReady');
}

function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
        console.log('starting timer');
        myTimer = setInterval(getTime, 1000, event);

    } else if (event.data !== YT.PlayerState.PLAYING) {
        if (!myTimer) {
            console.log('no timer?');
        } else {
            clearInterval(myTimer);
            console.log('stopping timer');

        }
    }
}

function getTime(event) {
    time = Math.floor(event.target.getCurrentTime());
    manageCues(time);
}

function manageCues(time) {
    console.log(time);

    if (time == 24) {
        showInfo1();
        showPopup();
        player.pauseVideo();
    }

    if (time == 29) {
        showInfo2();
        showPopup();
        player.pauseVideo();
    }

    if (time == 41) {
        showInfo3();
        showPopup();
        player.pauseVideo();
    }

    if (time == 43) {
        showInfo4();
        showPopup();
        player.pauseVideo();
    }

    if (time == 66) {
        showInfo5();
        showPopup();
        player.pauseVideo();
    }

    if (time == 75) {
        showInfo6();
        showPopup();
        player.pauseVideo();
    }

    if (time == 79) {
        showInfo7();
        showPopup();
        player.pauseVideo();
    }
}

// show  Popup
let popup = document.getElementById('resumeVideo');

function showPopup() {
    let popup = document.getElementById('resumeVideo');
    popup.classList.toggle('show_popup');
}

// button press

const resum_button = document.querySelector('.resum_button');
let info = document.getElementById('info');

resum_button.addEventListener('click', (e) => {
    info.classList.toggle('hide');
    popup.classList.toggle('show_popup');
    player.playVideo();
});

function showTemplate(locationText, className) {
    let info = document.getElementById('info');
    if (!info.classList.contains("myframe")) info.classList.add('myframe');
    info.classList.add(className);
    let location = document.getElementById('location');
    location.innerHTML = locationText;
    let head = document.getElementById('head');
    head.appendChild(location);
    head.classList.add('show');
    info.appendChild(head);
    return info;
}

function showInfo1() {
    let info = showTemplate("1. Hayden Valley", "myframe1");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo2() {
    let info = showTemplate("2. Canary Spring", "myframe2");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo3() {
    let info = showTemplate("3. Lookout Point", "myframe3");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo4() {
    let info = showTemplate("4. Grand View", "myframe4");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo5() {
    let info = showTemplate("5. Belgian Pool", "myframe5");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo6() {
    let info = showTemplate("6. Grand Prismatic Spring", "myframe6");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

function showInfo7() {
    let info = showTemplate("7. Old Faithful", "myframe7");
    if (info.classList.contains('hide')) info.classList.toggle('hide');
}

// Helper functions for controlling the video element.

function playVideo() {
    player.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

function playRate() {
    var rate = player.getPlaybackRate();
    player.setPlaybackRate(rate + 0.25);
}

function slow_motion() {
    var rate = player.getPlaybackRate();
    if (rate > 0.25) {
        player.setPlaybackRate(rate - 0.25);
    }
}

function normal() {
    player.setPlaybackRate(1);
}