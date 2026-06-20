// Tiny animation bootstrap to enrich user experience
document.addEventListener('DOMContentLoaded', () => {
  // Simple parallax tilt for hero card on mouse move (subtle)
  const hero = document.getElementById('home-hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      hero.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
      hero.style.transformStyle = 'preserve-3d';
    });
    hero.addEventListener('mouseleave', () => {
      hero.style.transform = 'none';
    });
  }
});
