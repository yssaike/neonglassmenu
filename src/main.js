import './style.css'

// Color presets
const colorPresets = [
  { name: 'Electric Blue', primary: '#00f5ff', secondary: '#0080ff' },
  { name: 'Neon Pink', primary: '#ff0080', secondary: '#ff4da6' },
  { name: 'Cyber Purple', primary: '#8000ff', secondary: '#a64dff' },
  { name: 'Matrix Green', primary: '#00ff41', secondary: '#4dff73' },
  { name: 'Sunset Orange', primary: '#ff6600', secondary: '#ff8533' },
  { name: 'Arctic Blue', primary: '#00ffff', secondary: '#66ffff' }
];

let currentColors = colorPresets[0];

function updateColors(primary, secondary) {
  document.documentElement.style.setProperty('--neon-primary', primary);
  document.documentElement.style.setProperty('--neon-secondary', secondary);
  currentColors = { primary, secondary };
}

function createSettingsPanel() {
  return `
    <div class="settings-panel" id="settingsPanel">
      <div class="settings-header">
        <h3>Color Settings</h3>
        <button class="close-btn" id="closeSettings">×</button>
      </div>
      <div class="settings-content">
        <div class="color-presets">
          <h4>Presets</h4>
          <div class="preset-grid">
            ${colorPresets.map((preset, index) => `
              <button class="preset-btn ${index === 0 ? 'active' : ''}" 
                      data-primary="${preset.primary}" 
                      data-secondary="${preset.secondary}"
                      data-index="${index}">
                <div class="preset-preview" style="background: linear-gradient(45deg, ${preset.primary}, ${preset.secondary})"></div>
                <span>${preset.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="custom-colors">
          <h4>Custom Colors</h4>
          <div class="color-inputs">
            <div class="color-input-group">
              <label>Primary</label>
              <input type="color" id="primaryColor" value="${currentColors.primary}">
            </div>
            <div class="color-input-group">
              <label>Secondary</label>
              <input type="color" id="secondaryColor" value="${currentColors.secondary}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Color presets
const colorPresets = [
  { name: 'Electric Blue', primary: '#00f5ff', secondary: '#0080ff' },
  { name: 'Neon Pink', primary: '#ff0080', secondary: '#ff4da6' },
  { name: 'Cyber Purple', primary: '#8000ff', secondary: '#a64dff' },
  { name: 'Matrix Green', primary: '#00ff41', secondary: '#4dff73' },
  { name: 'Sunset Orange', primary: '#ff6600', secondary: '#ff8533' },
  { name: 'Arctic Blue', primary: '#00ffff', secondary: '#66ffff' }
];

let currentColors = colorPresets[0];

function updateColors(primary, secondary) {
  document.documentElement.style.setProperty('--neon-primary', primary);
  document.documentElement.style.setProperty('--neon-secondary', secondary);
  currentColors = { primary, secondary };
}

function createSettingsPanel() {
  return `
    <div class="settings-panel" id="settingsPanel">
      <div class="settings-header">
        <h3>Color Settings</h3>
        <button class="close-btn" id="closeSettings">×</button>
      </div>
      <div class="settings-content">
        <div class="color-presets">
          <h4>Presets</h4>
          <div class="preset-grid">
            ${colorPresets.map((preset, index) => `
              <button class="preset-btn ${index === 0 ? 'active' : ''}" 
                      data-primary="${preset.primary}" 
                      data-secondary="${preset.secondary}"
                      data-index="${index}">
                <div class="preset-preview" style="background: linear-gradient(45deg, ${preset.primary}, ${preset.secondary})"></div>
                <span>${preset.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="custom-colors">
          <h4>Custom Colors</h4>
          <div class="color-inputs">
            <div class="color-input-group">
              <label>Primary</label>
              <input type="color" id="primaryColor" value="${currentColors.primary}">
            </div>
            <div class="color-input-group">
              <label>Secondary</label>
              <input type="color" id="secondaryColor" value="${currentColors.secondary}">
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.querySelector('#app').innerHTML = `
  <div class="menu-container">
    <button class="settings-trigger" id="settingsBtn">
      <span class="settings-icon">⚙️</span>
    </button>
    <button class="settings-trigger" id="settingsBtn">
      <span class="settings-icon">⚙️</span>
    </button>
    <nav class="glass-menu">
      <div class="menu-header">
        <h1 class="neon-title">NEON</h1>
        <div class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul class="menu-items">
        <li class="menu-item">
          <a href="#" class="menu-link" data-text="Home">
            <span class="menu-icon">🏠</span>
            <span class="menu-text">Home</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" data-text="About">
            <span class="menu-icon">👤</span>
            <span class="menu-text">About</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" data-text="Services">
            <span class="menu-icon">⚡</span>
            <span class="menu-text">Services</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" data-text="Portfolio">
            <span class="menu-icon">💼</span>
            <span class="menu-text">Portfolio</span>
          </a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" data-text="Contact">
            <span class="menu-icon">📧</span>
            <span class="menu-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="background-effects">
      <div class="neon-circle circle-1"></div>
      <div class="neon-circle circle-2"></div>
      <div class="neon-circle circle-3"></div>
    </div>
  </div>
  ${createSettingsPanel()}
  ${createSettingsPanel()}
`

// Settings functionality
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const presetBtns = document.querySelectorAll('.preset-btn');
const primaryColorInput = document.getElementById('primaryColor');
const secondaryColorInput = document.getElementById('secondaryColor');

// Initialize with first preset
updateColors(currentColors.primary, currentColors.secondary);

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.add('active');
});

closeSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
});

// Close settings when clicking outside
settingsPanel.addEventListener('click', (e) => {
  if (e.target === settingsPanel) {
    settingsPanel.classList.remove('active');
  }
});

// Preset color selection
presetBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const primary = btn.dataset.primary;
    const secondary = btn.dataset.secondary;
    updateColors(primary, secondary);
    
    // Update active state
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update color inputs
    primaryColorInput.value = primary;
    secondaryColorInput.value = secondary;
  });
});

// Custom color inputs
primaryColorInput.addEventListener('input', (e) => {
  updateColors(e.target.value, secondaryColorInput.value);
  presetBtns.forEach(b => b.classList.remove('active'));
});

secondaryColorInput.addEventListener('input', (e) => {
  updateColors(primaryColorInput.value, e.target.value);
  presetBtns.forEach(b => b.classList.remove('active'));
});

// Settings functionality
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const presetBtns = document.querySelectorAll('.preset-btn');
const primaryColorInput = document.getElementById('primaryColor');
const secondaryColorInput = document.getElementById('secondaryColor');

// Initialize with first preset
updateColors(currentColors.primary, currentColors.secondary);

settingsBtn.addEventListener('click', () => {
  settingsPanel.classList.add('active');
});

closeSettings.addEventListener('click', () => {
  settingsPanel.classList.remove('active');
});

// Close settings when clicking outside
settingsPanel.addEventListener('click', (e) => {
  if (e.target === settingsPanel) {
    settingsPanel.classList.remove('active');
  }
});

// Preset color selection
presetBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const primary = btn.dataset.primary;
    const secondary = btn.dataset.secondary;
    updateColors(primary, secondary);
    
    // Update active state
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update color inputs
    primaryColorInput.value = primary;
    secondaryColorInput.value = secondary;
  });
});

// Custom color inputs
primaryColorInput.addEventListener('input', (e) => {
  updateColors(e.target.value, secondaryColorInput.value);
  presetBtns.forEach(b => b.classList.remove('active'));
});

secondaryColorInput.addEventListener('input', (e) => {
  updateColors(primaryColorInput.value, e.target.value);
  presetBtns.forEach(b => b.classList.remove('active'));
});