import { colors, typography, spacing, borderRadius, shadows } from '../config/designTokens.js';

export function createNavigation() {
  const navItems = [
    { icon: '🏠', label: 'Dashboard', active: true },
    { icon: '📋', label: 'Projects', active: false },
    { icon: '👥', label: 'Team', active: false },
    { icon: '📊', label: 'Analytics', active: false },
    { icon: '⚙️', label: 'Settings', active: false }
  ];

  const navigationHTML = `
    <nav class="linear-navigation">
      <div class="nav-header">
        <div class="nav-logo">
          <div class="logo-icon">◆</div>
          <span class="logo-text">Linear</span>
        </div>
      </div>
      
      <div class="nav-content">
        <ul class="nav-items">
          ${navItems.map(item => `
            <li class="nav-item">
              <a href="#" class="nav-link ${item.active ? 'nav-link--active' : ''}">
                <span class="nav-icon">${item.icon}</span>
                <span class="nav-label">${item.label}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="nav-footer">
        <div class="user-profile">
          <div class="user-avatar">JD</div>
          <div class="user-info">
            <div class="user-name">John Doe</div>
            <div class="user-email">john@company.com</div>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-navigation {
      width: 280px;
      height: 100vh;
      background: ${colors.background.primary};
      border-right: 1px solid ${colors.border.light};
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
    }

    .nav-header {
      padding: ${spacing.xl};
      border-bottom: 1px solid ${colors.border.light};
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      background: ${colors.accent.blue};
      color: ${colors.text.inverse};
      border-radius: ${borderRadius.md};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${typography.fontWeight.bold};
      font-size: ${typography.fontSize.lg};
    }

    .logo-text {
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.bold};
      color: ${colors.text.primary};
    }

    .nav-content {
      flex: 1;
      padding: ${spacing.lg} 0;
      overflow-y: auto;
    }

    .nav-items {
      list-style: none;
      padding: 0 ${spacing.lg};
    }

    .nav-item {
      margin-bottom: ${spacing.xs};
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
      padding: ${spacing.md} ${spacing.lg};
      text-decoration: none;
      color: ${colors.text.secondary};
      border-radius: ${borderRadius.md};
      transition: all 0.15s ease;
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.medium};
      position: relative;
    }

    .nav-link:hover {
      background: ${colors.background.secondary};
      color: ${colors.text.primary};
    }

    .nav-link--active {
      background: ${colors.background.secondary};
      color: ${colors.text.primary};
      font-weight: ${typography.fontWeight.semibold};
    }

    .nav-link--active::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background: ${colors.accent.blue};
      border-radius: 0 2px 2px 0;
    }

    .nav-icon {
      font-size: ${typography.fontSize.lg};
      opacity: 0.8;
    }

    .nav-label {
      flex: 1;
    }

    .nav-footer {
      padding: ${spacing.lg};
      border-top: 1px solid ${colors.border.light};
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
      padding: ${spacing.md};
      border-radius: ${borderRadius.md};
      transition: all 0.15s ease;
      cursor: pointer;
    }

    .user-profile:hover {
      background: ${colors.background.secondary};
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      background: ${colors.accent.purple};
      color: ${colors.text.inverse};
      border-radius: ${borderRadius.lg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${typography.fontWeight.semibold};
      font-size: ${typography.fontSize.sm};
    }

    .user-info {
      flex: 1;
    }

    .user-name {
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.medium};
      color: ${colors.text.primary};
      line-height: ${typography.lineHeight.tight};
    }

    .user-email {
      font-size: ${typography.fontSize.xs};
      color: ${colors.text.tertiary};
      line-height: ${typography.lineHeight.tight};
    }
  `;
  
  if (!document.querySelector('#linear-navigation-styles')) {
    style.id = 'linear-navigation-styles';
    document.head.appendChild(style);
  }

  return navigationHTML;
}