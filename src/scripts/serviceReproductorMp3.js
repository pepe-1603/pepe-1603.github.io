var songs = ["../../assets/audios/audio (11).mp3", "ruta_a_tu_cancion2.mp3", "ruta_a_tu_cancion3.mp3", "ruta_a_tu_cancion4.mp3", "ruta_a_tu_cancion5.mp3"];
var songIndex = 0;
var audio = document.getElementById('audio');
var btnPausa = document.getElementById('btnPausa');

document.getElementById('btnAnterior').addEventListener('click', function() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    playSong();
});

document.getElementById('btnSiguiente').addEventListener('click', function() {
    songIndex++;
    if (songIndex >= songs.length) songIndex = 0;
    playSong();
});

btnPausa.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        btnPausa.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        btnPausa.innerHTML = '<i class="fas fa-play"></i>';
    }
});

document.getElementById('volumeSlider').addEventListener('change', function() {
    audio.volume = this.value / 10;
});

function playSong() {
    audio.src = songs[songIndex];
    audio.play();
    btnPausa.innerHTML = '<i class="fas fa-pause"></i>';
}

playSong();