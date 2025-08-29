@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

:root {
  --neon-primary: #00f5ff;
  --neon-secondary: #0080ff;
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Orbitron', monospace;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 10;
}

.settings-trigger {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.settings-trigger:hover {
  transform: scale(1.1) rotate(90deg);
  box-shadow: 
    0 0 20px rgba(var(--neon-primary), 0.5),
    0 4px 20px rgba(0, 0, 0, 0.3);
}

.settings-icon {
  font-size: 1.5rem;
  filter: drop-shadow(0 0 10px var(--neon-primary));
}

.settings-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.settings-panel.active {
  opacity: 1;
  visibility: visible;
}

.settings-panel > div {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.settings-panel.active > div {
  transform: scale(1);
}

.settings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.settings-header h3 {
  color: var(--neon-primary);
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 10px var(--neon-primary);
}

.close-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.close-btn:hover {
  color: var(--neon-primary);
  background: rgba(255, 255, 255, 0.1);
  text-shadow: 0 0 10px var(--neon-primary);
}

.settings-content h4 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.color-presets {
  margin-bottom: 2rem;
}

.preset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.preset-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  font-weight: 500;
}

.preset-btn:hover {
  border-color: var(--neon-primary);
  box-shadow: 0 0 15px rgba(var(--neon-primary), 0.3);
  transform: translateY(-2px);
}

.preset-btn.active {
  border-color: var(--neon-primary);
  box-shadow: 0 0 20px rgba(var(--neon-primary), 0.4);
  background: rgba(var(--neon-primary), 0.1);
}

.preset-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.custom-colors {
  margin-top: 2rem;
}

.color-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.color-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.color-input-group label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
}

.color-input-group input[type="color"] {
  width: 100%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.color-input-group input[type="color"]:hover {
  border-color: var(--neon-primary);
  box-shadow: 0 0 15px rgba(var(--neon-primary), 0.3);
}

.glass-menu {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  min-width: 300px;
}

.glass-menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, 
    rgba(0, 245, 255, 0.1) 0%,
    rgba(0, 128, 255, 0.1) 100%);
  z-index: -1;
}

.menu-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.neon-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--neon-primary);
  text-shadow: 
    0 0 5px var(--neon-primary),
    0 0 10px var(--neon-primary),
    0 0 20px var(--neon-primary);
    0 0 40px var(--neon-primary);
  animation: neonPulse 2s ease-in-out infinite alternate;
  letter-spacing: 0.2em;
}

@keyframes neonPulse {
  from {
    text-shadow: 
      0 0 5px var(--neon-primary),
      0 0 10px var(--neon-primary),
      0 0 20px var(--neon-primary),
      0 0 40px var(--neon-primary);
  }
  to {
    text-shadow: 
      0 0 2px var(--neon-primary),
      0 0 5px var(--neon-primary),
      0 0 10px var(--neon-primary),
      0 0 20px var(--neon-primary),
      0 0 40px var(--neon-primary);
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--neon-secondary);
  margin: 3px 0;
  transition: 0.3s;
  box-shadow: 0 0 10px var(--neon-secondary);
}

.menu-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu-item {
  position: relative;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}

.menu-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent);
  transition: left 0.5s;
}

.menu-link:hover::before {
  left: 100%;
}

.menu-link:hover {
  color: white;
  border-color: var(--neon-primary);
  box-shadow: 
    0 0 20px var(--neon-primary);
  transform: translateY(-2px);
  background: rgba(0, 245, 255, 0.1);
}

.settings-panel {
  position: fixed;
  top: 0;
  left: 0;
.menu-icon {
  font-size: 1.2rem;
  filter: drop-shadow(0 0 5px currentColor);
}

.menu-text {
  font-weight: 600;
  letter-spacing: 0.05em;
  position: relative;
}

.menu-link:hover .menu-text {
  text-shadow: 0 0 10px var(--neon-blue);
}

.background-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.neon-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, var(--neon-blue) 0%, transparent 70%);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, var(--neon-pink) 0%, transparent 70%);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, var(--neon-purple) 0%, transparent 70%);
  bottom: 20%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) scale(1.1);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .glass-menu {
    margin: 1rem;
    padding: 1.5rem;
    min-width: unset;
    width: calc(100% - 2rem);
  }
  
  .neon-title {
    font-size: 2rem;
  }
  
  .menu-link {
    padding: 0.8rem 1rem;
    gap: 0.8rem;
  }
  
  .menu-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .glass-menu {
    padding: 1rem;
  }
  
  .neon-title {
    font-size: 1.8rem;
  }
  
  .menu-items {
    gap: 0.8rem;
  }
}