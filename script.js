
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function openSong(card) {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h4").innerText;
    const artist = card.querySelector("p").innerText;

    document.getElementById("barImg").src = img;
    document.getElementById("barTitle").innerText = title;
    document.getElementById("barArtist").innerText = artist;

    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    audio.play();
    playBtn.innerText = "⏸";
}

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





function openModal(card) {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h4, p")?.innerText || "Preview";

    document.getElementById("previewModal").style.display = "flex";
    document.getElementById("modalImg").src = img;
    document.getElementById("modalTitle").innerText = title;
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
}








function playOnly(e) {
    e.stopPropagation();   // ❌ stop modal opening
    alert("▶ Play song");
}

function openModal(card) {
    const img = card.querySelector("img").src;
    const title = card.querySelector("h4")?.innerText || "Preview";

    document.getElementById("previewModal").style.display = "flex";
    document.getElementById("modalImg").src = img;
    document.getElementById("modalTitle").innerText = title;
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
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

const playmusic = (track) => {
    // let audio = new Audio("/songs/" + track);
    currentsong.src = "/songs/" + track
    currentsong.play();
     playBtn.src = "pause.svg";
}
async function main() {



    //get the list of all he songs
   let songs = [
  "songs/Don Omar - Danza Kuduro.mp3",
  "songs/A Aa 2 Bgm.mp3",
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
            playmusic(e.getElementsByTagName("div")[0].firstElementChild.innerHTML);

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
  });

});






}


main();
