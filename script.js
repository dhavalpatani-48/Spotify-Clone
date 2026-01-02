
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");



function togglePlay() {
    if (!audio.src) return;

    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸";
    } else {
        audio.pause();
        playBtn.innerText = "▶";
    }
}

audio.ontimeupdate = () => {
    if (!audio.duration) return;

    seekBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationEl.innerText = formatTime(audio.duration);
};

seekBar.oninput = () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
};

function setVolume(v) {
    audio.volume = v;
}

function mute() {
    audio.muted = !audio.muted;
}

function formatTime(time) {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
}




function goHome() {
    alert("Home clicked");
}

function goPremium() {
    alert("Premium clicked");
}

function goSupport() {
    alert("Support clicked");
}

function goDownload() {
    alert("Download clicked");
}

function installApp() {
    alert("Install App clicked");
}

function signUp() {
    alert("Sign Up clicked");
}

function login() {
    alert("Login clicked");
}






async function getsongs() {
    // fetch the songs from the server     
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();

    let div = document.createElement('div');
    div.innerHTML = response;

    let as = div.getElementsByTagName("a")
    let songs = [];

    for (let i = 0; i < as.length; i++) {
        if (as[i].href.endsWith(".mp3")) {
            songs.push(as[i].href);
        }
    }
    return songs;
}


const playMusic = (track) => {
   
    currentsong.src = "/songs/" + track
    currentsong.play()
    playBtn.src = "pause.svg"
    
    
   document.getElementById("barTitle").innerHTML = track
   

}

async function main() {



    //get the list of all he songs
    let songs = [
        "songs/Lutt Le Gaya Dhurandhar.mp3",
        "songs/Title Track Dhurandhar.mp3",
        "songs/Ishq Jalakar Dhurandhar.mp3",
        "songs/Don Omar - Danza Kuduro.mp3",
        "songs/A Aa 2 Bgm.mp3",
        "songs/Desabafo.mp3",
        "songs/Hips don't lie.mp3",
        "songs/Ho Jaane Do Aar Paar.mp3",
        "songs/Kangana Tera Ni.mp3",
        "songs/Let Me Love You.mp3",
        "songs/Love Dose.mp3",
        "songs/Telepathia.mp3",
        "songs/Tokyo Drift.mp3",
        "songs/Tokyo Drift.mp3",
        "songs/See You Again.mp3"
    ];
    //show all the song in the playlist
    let songUL = document
        .querySelector(".songlist ul");

    for (const song of songs) {

        // decode link
        let decoded = decodeURI(song);

        // get only the filename (works for / and \ )
        let filename = decoded.split(/[\\/]/).pop();

        // add li
        songUL.innerHTML += `<li><img class="musiclogo" src="music.svg" alt="">
                             <div class="musiclogo">
                              <div class="wi">${filename}</div>
                              <div class="wi">dhaval</div>
                            </div>
                            <img class="playlogo" src="play.svg" alt="">
                        </li>`;

    }


    // add event listener to each li
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", Element => {
            console.log(e.getElementsByTagName("div")[0].firstElementChild.innerHTML)
           
        })



    })

    // add event listener to play and pause button
    const audio = document.getElementById("audioPlayer");
    const playBtn = document.querySelector(".play");


    // PLAY / PAUSE BUTTON
    playBtn.addEventListener("click", () => {

        if (!audio.src) return;   // no song loaded yet

        if (audio.paused) {
            audio.play();
            playBtn.src = "pause.svg";
        } else {
            audio.pause();
            playBtn.src = "play.svg";
        }
    });


    // CLICK SONG TO LOAD + PLAY
 Array.from(document.querySelectorAll(".songlist li")).forEach(li => {

    li.addEventListener("click", () => {

        let filename =
            li.getElementsByTagName("div")[0]
              .firstElementChild.innerHTML.trim();

        audio.src = "/songs/" + filename;
        audio.play();
        playBtn.src = "pause.svg";

        document.getElementById("barTitle").textContent =
            filename.replace(".mp3","");
    });

});

     





}


main();
