import './styles/linear.css';
import { createNavigation } from './components/Navigation.js';
import { createHeader } from './components/Header.js';
import { createDashboard } from './components/Dashboard.js';
import { initializeLinearAnimations, initializeLinearInteractions } from './animations/linearAnimations.js';
import './utils/interactions.js';

// Load GSAP from CDN
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
script.onload = initializeApp;
document.head.appendChild(script);

function initializeApp() {
  // Create the Linear-inspired interface
  document.querySelector('#app').innerHTML = `
    ${createNavigation()}
    ${createHeader()}
    ${createDashboard()}
  `;

  // Initialize animations and interactions
  initializeLinearAnimations();
  initializeLinearInteractions();
  
  // Add responsive navigation toggle for mobile
  addMobileNavigation();
}

function addMobileNavigation() {
  // Add mobile menu toggle functionality
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 1024px) {
      .linear-navigation {
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .linear-navigation.nav-open {
        transform: translateX(0);
      }
      
      .nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .nav-overlay.active {
        opacity: 1;
        visibility: visible;
      }
    }
  `;
  document.head.appendChild(style);
}