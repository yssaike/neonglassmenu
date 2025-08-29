import { colorPresets } from '../config/colors.js';
import { updateColors } from '../utils/colorManager.js';

export function initializeSettingsHandlers() {
  window.applyPreset = function(index) {
    const preset = colorPresets[index];
    updateColors(preset.primary, preset.secondary);
    
    // Update color inputs
    document.getElementById('primaryColor').value = preset.primary;
    document.getElementById('secondaryColor').value = preset.secondary;
    
    // Update active state
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.preset-btn')[index].classList.add('active');
  };

  window.updateCustomColors = function() {
    const primary = document.getElementById('primaryColor').value;
    const secondary = document.getElementById('secondaryColor').value;
    updateColors(primary, secondary);
    
    // Remove active state from presets
    document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  };
}