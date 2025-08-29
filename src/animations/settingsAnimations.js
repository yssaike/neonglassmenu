export function initializeSettingsAnimations() {
  window.openSettings = function() {
    const panel = document.getElementById('settingsPanel');
    panel.style.display = 'flex';
    gsap.to(panel, { opacity: 1, duration: 0.3 });
    gsap.fromTo(panel.querySelector('div'), 
      { scale: 0.8 }, 
      { scale: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
  };

  window.closeSettings = function() {
    const panel = document.getElementById('settingsPanel');
    gsap.to(panel, { 
      opacity: 0, 
      duration: 0.3, 
      onComplete: () => panel.style.display = 'none' 
    });
  };
}