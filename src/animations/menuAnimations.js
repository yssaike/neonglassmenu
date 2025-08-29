export function initializeMenuAnimations() {
  // Initial states
  gsap.set('.glass-menu', { scale: 0, opacity: 0 });
  gsap.set('.neon-title', { y: -50, opacity: 0 });
  gsap.set('.menu-item', { x: -100, opacity: 0 });
  gsap.set('.settings-trigger', { scale: 0, opacity: 0 });
  gsap.set('.neon-circle', { scale: 0, opacity: 0 });

  // Entrance animations
  const tl = gsap.timeline();
  
  tl.to('.glass-menu', { 
    scale: 1, 
    opacity: 1, 
    duration: 0.8, 
    ease: "back.out(1.7)" 
  })
  .to('.neon-title', { 
    y: 0, 
    opacity: 1, 
    duration: 0.6, 
    ease: "elastic.out(1, 0.3)" 
  }, "-=0.4")
  .to('.menu-item', { 
    x: 0, 
    opacity: 1, 
    duration: 0.5, 
    stagger: 0.1, 
    ease: "power2.out" 
  }, "-=0.3")
  .to('.settings-trigger', { 
    scale: 1, 
    opacity: 1, 
    duration: 0.4, 
    ease: "back.out(1.7)" 
  }, "-=0.2")
  .to('.neon-circle', { 
    scale: 1, 
    opacity: 0.7, 
    duration: 0.8, 
    stagger: 0.2, 
    ease: "power2.out" 
  }, "-=0.5");
}

export function initializeHoverAnimations() {
  // Hover animations for menu items
  document.querySelectorAll('.menu-link').forEach(link => {
    const icon = link.querySelector('.menu-icon');
    const text = link.querySelector('.menu-text');
    
    link.addEventListener('mouseenter', () => {
      gsap.to(icon, { rotation: 360, scale: 1.2, duration: 0.5, ease: "power2.out" });
      gsap.to(text, { x: 10, duration: 0.3, ease: "power2.out" });
    });
    
    link.addEventListener('mouseleave', () => {
      gsap.to(icon, { rotation: 0, scale: 1, duration: 0.5, ease: "power2.out" });
      gsap.to(text, { x: 0, duration: 0.3, ease: "power2.out" });
    });
  });
}

export function initializeBackgroundAnimations() {
  // Floating animation for background circles
  gsap.to('.circle-1', { 
    y: -30, 
    x: 20, 
    duration: 4, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
  });
  
  gsap.to('.circle-2', { 
    y: 25, 
    x: -15, 
    duration: 5, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
  });
  
  gsap.to('.circle-3', { 
    y: -20, 
    x: 30, 
    duration: 6, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut" 
  });
}