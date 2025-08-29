import './style.css';

// Load GSAP from CDN
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
script.onload = initializeApp;
document.head.appendChild(script);

function initializeApp() {
  // Color presets
  const colorPresets = [
    { name: 'Electric Blue', primary: '#00f5ff', secondary: '#0080ff' },
    { name: 'Neon Pink', primary: '#ff0080', secondary: '#ff4da6' },
    { name: 'Cyber Purple', primary: '#8000ff', secondary: '#a64dff' },
    { name: 'Matrix Green', primary: '#00ff41', secondary: '#4dff70' },
    { name: 'Sunset Orange', primary: '#ff8000', secondary: '#ffb366' },
    { name: 'Arctic Blue', primary: '#00d4ff', secondary: '#66e0ff' }
  ];

  let currentColors = { primary: '#00f5ff', secondary: '#0080ff' };

  function updateColors(primary, secondary) {
    currentColors = { primary, secondary };
    document.documentElement.style.setProperty('--neon-primary', primary);
    document.documentElement.style.setProperty('--neon-secondary', secondary);
  }

  function createSettingsPanel() {
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

  // Global functions for settings
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

  // Create the main menu
  document.querySelector('#app').innerHTML = `
    <div class="background-effects">
      <div class="neon-circle circle-1"></div>
      <div class="neon-circle circle-2"></div>
      <div class="neon-circle circle-3"></div>
    </div>
    
    <div class="settings-trigger" onclick="openSettings()">
      <div class="settings-icon">⚙️</div>
    </div>
    
    <div class="menu-container">
      <div class="glass-menu">
        <div class="menu-header">
          <h1 class="neon-title">NEON MENU</h1>
        </div>
        <nav>
          <ul class="menu-items">
            <li class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-icon">🏠</span>
                <span class="menu-text">Home</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-icon">👤</span>
                <span class="menu-text">Profile</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-icon">📊</span>
                <span class="menu-text">Analytics</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-icon">💬</span>
                <span class="menu-text">Messages</span>
              </a>
            </li>
            <li class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-icon">⚙️</span>
                <span class="menu-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  `;

  // Create settings panel
  createSettingsPanel();

  // GSAP Animations
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