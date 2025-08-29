export function initializeLinearAnimations() {
  // Smooth entrance animations
  gsap.set('.linear-navigation', { x: -280, opacity: 0 });
  gsap.set('.linear-header', { y: -80, opacity: 0 });
  gsap.set('.linear-dashboard', { y: 20, opacity: 0 });
  gsap.set('.linear-card', { y: 20, opacity: 0 });

  const tl = gsap.timeline();
  
  tl.to('.linear-navigation', { 
    x: 0, 
    opacity: 1, 
    duration: 0.6, 
    ease: "power2.out" 
  })
  .to('.linear-header', { 
    y: 0, 
    opacity: 1, 
    duration: 0.5, 
    ease: "power2.out" 
  }, "-=0.3")
  .to('.linear-dashboard', { 
    y: 0, 
    opacity: 1, 
    duration: 0.5, 
    ease: "power2.out" 
  }, "-=0.2")
  .to('.linear-card', { 
    y: 0, 
    opacity: 1, 
    duration: 0.4, 
    stagger: 0.1, 
    ease: "power2.out" 
  }, "-=0.3");
}

export function initializeLinearInteractions() {
  // Smooth hover animations for navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (!link.classList.contains('nav-link--active')) {
        gsap.to(link, { x: 4, duration: 0.2, ease: "power2.out" });
      }
    });
    
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('nav-link--active')) {
        gsap.to(link, { x: 0, duration: 0.2, ease: "power2.out" });
      }
    });
  });

  // Card hover animations
  document.querySelectorAll('.linear-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -2, duration: 0.2, ease: "power2.out" });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.2, ease: "power2.out" });
    });
  });

  // Button press animations
  document.querySelectorAll('.linear-button').forEach(button => {
    button.addEventListener('mousedown', () => {
      gsap.to(button, { scale: 0.98, duration: 0.1, ease: "power2.out" });
    });
    
    button.addEventListener('mouseup', () => {
      gsap.to(button, { scale: 1, duration: 0.1, ease: "power2.out" });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, { scale: 1, duration: 0.1, ease: "power2.out" });
    });
  });

  // Project item interactions
  document.querySelectorAll('.project-item, .action-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { x: 4, duration: 0.2, ease: "power2.out" });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { x: 0, duration: 0.2, ease: "power2.out" });
    });
  });
}