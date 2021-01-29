const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// Slow down Cover Page background video playback
document.querySelector('video').defaultPlaybackRate = 2.0;
