document.addEventListener('DOMContentLoaded', function() {
    const clickMeBtn = document.getElementById('clickMeBtn');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');
    const musicOverlay = document.getElementById('musicOverlay');
    const closeMusicBtn = document.getElementById('closeMusicBtn');
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    const songTitle = document.getElementById('songTitle');
    const profileBox = document.getElementById('profileBox');

    clickMeBtn.addEventListener('click', function() {
        overlay.classList.add('hidden');
        content.classList.remove('hidden');
        backgroundMusic.play();
        musicOverlay.classList.add('show');
    });

    closeMusicBtn.addEventListener('click', function() {
        musicOverlay.classList.remove('show');
        backgroundMusic.pause();
    });

    musicToggleBtn.addEventListener('click', function() {
        if (musicOverlay.classList.contains('show')) {
            musicOverlay.classList.remove('show');
        } else {
            musicOverlay.classList.add('show');
        }
    });

    playPauseBtn.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            backgroundMusic.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = volumeControl.value;
    });

    profileBox.addEventListener('mousemove', function(event) {
        const rect = profileBox.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        profileBox.style.transform = `rotateX(${-y / 30}deg) rotateY(${x / 30}deg)`;
    });

    profileBox.addEventListener('mouseleave', function() {
        profileBox.style.transform = 'rotateX(0) rotateY(0)';
    });
});