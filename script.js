 
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


