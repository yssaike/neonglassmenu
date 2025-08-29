export function createMenu() {
  return `
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
}