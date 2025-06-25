ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});


ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});

function startDownload() {
  const btn = document.querySelector(".btn.outline");
  btn.innerHTML = "Downloading...";
  btn.style.background = "#000";
  btn.style.color = "#fff";

  setTimeout(() => {
    btn.innerHTML = "Downloaded!";
    btn.style.background = "#28a745";
  }, 2000);

  setTimeout(() => {
    btn.innerHTML = "Download CV";
    btn.style.background = "rgba(255,255,255,0.1)";
    btn.style.color = "#fff";
  }, 4000);
}
