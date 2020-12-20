// VARIABLE DECLAIRATION

// Song Details
let songName = document.getElementById("songName");
let songAuthor = document.getElementById("songAuthor");
let songImg = document.getElementById("img");

// Media Controls
let nextBtn = document.getElementById("next-btn");
let backBtn = document.getElementById("prev-btn");
let playBtn = document.getElementById("play-btn");

// Volume Control
let volDown = document.getElementById("volDown");
let volUp = document.getElementById("volUp");

// Volume Counter
let volumeCounter = document.getElementById("volumeCounter");
currentVolume = 10;

let playlist = [
    {
        // Index #0
        src: 'audio/Song-01.mp3', 
        name: 'Bury the Light', 
        author: "DMC5", 
        img: './images/Bury_the_Light_cover.jpg'
    },
    {
        // Index #1
        src: 'audio/Song-02.mp3',
        name: 'Faded',
        author: 'Lowly, Bafu',
        img: './images/wp1979862.jpg'
    },
    {
        // Index #2
        src: 'audio/Song-03.mp3', 
        name: 'Same (Magic Free Release)', 
        author: "TOMLINE & itsdelr", 
        img: './images/Song-03.jpg'
    }
]

// Song Index / Tracker
let songIndex = 0;
let songPlaying = false;
let audio = true;

// Load Song track
let loadTrack = function(songFind) {
    let song = playlist[songFind];

    if (audio) {
        audio.src = song.src;
        if (songPlaying) { 
            audio.play();
        }
        else {
            audio = new Audio(song.src);
        }

        // Song Details
        songName.innerHTML = playlist[songIndex].name;
        songAuthor.innerHTML = playlist[songIndex].author;
        songImg.style.backgroundImage = 'url(' + playlist[songIndex].img + ')';
    }
}

// Play / Pause Button
let playPause = function() {
    if (songPlaying) {
        audio.pause();
        songPlaying = false;
        playBtn.classList.add("fa-play");
        playBtn.classList.remove("fa-pause");
    }
    else {
        audio.play();
        songPlaying = true;
        playBtn.classList.add("fa-pause");
        playBtn.classList.remove("fa-play");
    }
}
playBtn.addEventListener("click", playPause);

// Next Song
let nextSong = function() {
    songIndex += 1;
    loadTrack(songIndex);
}
nextBtn.addEventListener("click", nextSong);

// Previous Song
let prevSong = function() {
    songIndex -= 1;
    loadTrack(songIndex);
}
backBtn.addEventListener("click", prevSong);

// Volume Up 
let songVolumeUp = function() {
    audioVol = audio.volume += 0.1;
    
    if (audioVol >= .9) {
        alert("Volume is at 100%");
    }
     
}
volUp.addEventListener('click', songVolumeUp);

// VolumeDown
let songVolumeDown = function() {
    audioVol = audio.volume -= 0.1;
        
    if (audioVol <= .1) {
        alert("Volume is at 0%");
    }
     
}
volDown.addEventListener('click', songVolumeDown);

// Load Song
loadTrack(0);
