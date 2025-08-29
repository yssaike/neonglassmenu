import { colorPresets } from '../config/colors.js';
import { getCurrentColors } from '../utils/colorManager.js';

export function createSettingsPanel() {
  const currentColors = getCurrentColors();
  
  const settingsHTML = `
    <div class="settings-panel" id="settingsPanel">
      <div>
        <div class="settings-header">
          <h3>⚙️ Customize Colors</h3>
          <button class="close-btn" onclick="closeSettings()">×</button>
        </div>
        <div class="settings-content">
          <div class="color-presets">
            <h4>Color Presets</h4>
            <div class="preset-grid">
              ${colorPresets.map((preset, index) => `
                <button class="preset-btn" onclick="applyPreset(${index})">
                  <div class="preset-preview" style="background: linear-gradient(45deg, ${preset.primary}, ${preset.secondary})"></div>
                  ${preset.name}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="custom-colors">
            <h4>Custom Colors</h4>
            <div class="color-inputs">
              <div class="color-input-group">
                <label for="primaryColor">Primary Color</label>
                <input type="color" id="primaryColor" value="${currentColors.primary}" onchange="updateCustomColors()">
              </div>
              <div class="color-input-group">
                <label for="secondaryColor">Secondary Color</label>
                <input type="color" id="secondaryColor" value="${currentColors.secondary}" onchange="updateCustomColors()">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', settingsHTML);
}