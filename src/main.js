import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="menu-container">
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
`