import { colors, typography, spacing, borderRadius, shadows } from '../config/designTokens.js';
import { appState } from '../utils/state.js';

export function createNavigation() {
  const navItems = [
    { icon: '🏠', label: 'Dashboard', view: 'dashboard' },
    { icon: '📋', label: 'Projects', view: 'projects' },
    { icon: '👥', label: 'Team', view: 'team' },
    { icon: '📊', label: 'Analytics', view: 'analytics' },
    { icon: '⚙️', label: 'Settings', view: 'settings' }
  ];

  const currentView = appState.getState().currentView;

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
              <a href="#" class="nav-link ${currentView === item.view ? 'nav-link--active' : ''}" data-view="${item.view}">
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
      border: none;
      box-shadow: 8px 0 16px rgba(163, 177, 198, 0.15);
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
    }

    .nav-header {
      padding: ${spacing.xl};
      border: none;
      position: relative;
    }

    .nav-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: ${spacing.lg};
      right: ${spacing.lg};
      height: 1px;
      background: linear-gradient(90deg, transparent, ${colors.border.light}, transparent);
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(145deg, ${colors.accent.ocean}, ${colors.primary[500]});
      color: ${colors.text.inverse};
      border-radius: ${borderRadius.md};
      box-shadow: ${shadows.neuro.subtle};
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
      transition: all 0.2s ${animation.easing.spring};
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.medium};
      position: relative;
      margin: 0 ${spacing.sm};
    }

    .nav-link:hover {
      background: ${colors.background.primary};
      box-shadow: ${shadows.neuro.subtle};
      color: ${colors.text.primary};
      transform: translateX(4px);
    }

    .nav-link--active {
      background: ${colors.background.primary};
      box-shadow: ${shadows.neuro.pressed};
      color: ${colors.text.primary};
      font-weight: ${typography.fontWeight.semibold};
    }

    .nav-link--active::before {
      content: '';
      position: absolute;
      left: -${spacing.sm};
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 20px;
      background: linear-gradient(180deg, ${colors.accent.coral}, ${colors.accent.sunshine});
      border-radius: ${borderRadius.sm};
      box-shadow: 2px 0 4px rgba(255, 107, 107, 0.3);
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
      border: none;
      position: relative;
    }

    .nav-footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: ${spacing.lg};
      right: ${spacing.lg};
      height: 1px;
      background: linear-gradient(90deg, transparent, ${colors.border.light}, transparent);
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
      padding: ${spacing.md};
      border-radius: ${borderRadius.md};
      transition: all 0.2s ${animation.easing.spring};
      cursor: pointer;
      box-shadow: ${shadows.neuro.subtle};
    }

    .user-profile:hover {
      background: ${colors.background.primary};
      box-shadow: ${shadows.neuro.raised};
      transform: scale(1.02);
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      background: linear-gradient(145deg, ${colors.accent.lavender}, ${colors.accent.peach});
      color: ${colors.text.inverse};
      border-radius: ${borderRadius.lg};
      box-shadow: ${shadows.neuro.raised};
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

  // Add navigation functionality
  setTimeout(() => {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = e.currentTarget.dataset.view;
        appState.setCurrentView(view);
        
        // Update active states
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('nav-link--active'));
        e.currentTarget.classList.add('nav-link--active');
        
        // Update page title
        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
          pageTitle.textContent = view.charAt(0).toUpperCase() + view.slice(1);
        }
        
        // Update breadcrumb
        const breadcrumbCurrent = document.querySelector('.breadcrumb-item--current');
        if (breadcrumbCurrent) {
          breadcrumbCurrent.textContent = view.charAt(0).toUpperCase() + view.slice(1);
        }
      });
    });
  }, 0);
  return navigationHTML;
}