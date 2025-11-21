// Função que carrega partículas com base no tema atual
function loadParticles(darkMode) {
  const color = darkMode ? "#a0aec0" : "#ffffff";
  const opacityBase = darkMode ? 0.35 : 0.5;
  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 110,
        density: { enable: true, value_area: 800 }
      },
      color: { value: color },
      shape: { type: "circle" },
      opacity: {
        value: opacityBase,
        random: true,
        anim: { enable: true, speed: 0.4, opacity_min: 0.08, sync: false }
      },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: darkMode ? 0.25 : 0.3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    detectRetina: true
  });
}

// Carrega inicialmente considerando estado salvo
document.addEventListener('DOMContentLoaded', () => {
  loadParticles(document.body.classList.contains('dark-mode'));
});

// Expor função global para reinicialização após toggle
window.reinitParticles = () => {
  loadParticles(document.body.classList.contains('dark-mode'));
};
