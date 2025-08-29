import { defaultColors } from '../config/colors.js';

let currentColors = { ...defaultColors };

export function updateColors(primary, secondary) {
  currentColors = { primary, secondary };
  document.documentElement.style.setProperty('--neon-primary', primary);
  document.documentElement.style.setProperty('--neon-secondary', secondary);
}

export function getCurrentColors() {
  return { ...currentColors };
}

export function initializeColors() {
  updateColors(defaultColors.primary, defaultColors.secondary);
}