import './style.css';
import { createMenu } from './components/menu.js';
import { createBackgroundEffects } from './components/backgroundEffects.js';
import { createSettingsTrigger } from './components/settingsTrigger.js';
import { createSettingsPanel } from './components/settingsPanel.js';
import { initializeColors } from './utils/colorManager.js';
import { initializeMenuAnimations, initializeHoverAnimations, initializeBackgroundAnimations } from './animations/menuAnimations.js';
import { initializeSettingsAnimations } from './animations/settingsAnimations.js';
import { initializeSettingsHandlers } from './handlers/settingsHandlers.js';

// Load GSAP from CDN
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
script.onload = initializeApp;
document.head.appendChild(script);

function initializeApp() {
  // Initialize colors
  initializeColors();
  
  // Create UI components
  document.querySelector('#app').innerHTML = `
    ${createBackgroundEffects()}
    ${createSettingsTrigger()}
    ${createMenu()}
  `;

  // Create settings panel
  createSettingsPanel();

  // Initialize all functionality
  initializeMenuAnimations();
  initializeHoverAnimations();
  initializeBackgroundAnimations();
  initializeSettingsAnimations();
  initializeSettingsHandlers();
}