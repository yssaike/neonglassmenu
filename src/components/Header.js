import { colors, typography, spacing, borderRadius } from '../config/designTokens.js';
import { createButton } from './Button.js';
import { appState } from '../utils/state.js';

export function createHeader() {
  const state = appState.getState();
  
  const headerHTML = `
    <header class="linear-header">
      <div class="header-content">
        <div class="header-left">
          <h1 class="page-title">${state.currentView.charAt(0).toUpperCase() + state.currentView.slice(1)}</h1>
          <div class="breadcrumb">
            <span class="breadcrumb-item">Home</span>
            <span class="breadcrumb-separator">›</span>
            <span class="breadcrumb-item breadcrumb-item--current">${state.currentView.charAt(0).toUpperCase() + state.currentView.slice(1)}</span>
          </div>
        </div>
        
        <div class="header-right">
          <div class="header-actions">
            ${createButton({ 
              text: 'New Project', 
              variant: 'primary', 
              icon: '+',
              size: 'sm',
              onClick: () => showNewProjectModal()
            })}
            ${createButton({ 
              text: 'Import', 
              variant: 'secondary', 
              size: 'sm',
              onClick: () => showImportModal()
            })}
          </div>
          
          <div class="header-profile">
            <div class="profile-avatar">${state.user.avatar}</div>
          </div>
        </div>
      </div>
    </header>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-header {
      height: 80px;
      background: ${colors.background.primary};
      border-bottom: 1px solid ${colors.border.light};
      position: fixed;
      top: 0;
      left: 280px;
      right: 0;
      z-index: 50;
      backdrop-filter: blur(8px);
    }

    .header-content {
      height: 100%;
      padding: 0 ${spacing['2xl']};
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-left {
      display: flex;
      flex-direction: column;
      gap: ${spacing.xs};
    }

    .page-title {
      font-size: ${typography.fontSize['2xl']};
      font-weight: ${typography.fontWeight.bold};
      color: ${colors.text.primary};
      margin: 0;
      line-height: ${typography.lineHeight.tight};
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: ${spacing.sm};
      font-size: ${typography.fontSize.sm};
    }

    .breadcrumb-item {
      color: ${colors.text.tertiary};
      transition: color 0.15s ease;
    }

    .breadcrumb-item:not(.breadcrumb-item--current):hover {
      color: ${colors.text.secondary};
      cursor: pointer;
    }

    .breadcrumb-item--current {
      color: ${colors.text.secondary};
      font-weight: ${typography.fontWeight.medium};
    }

    .breadcrumb-separator {
      color: ${colors.text.tertiary};
      font-size: ${typography.fontSize.xs};
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: ${spacing.xl};
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
    }

    .header-profile {
      display: flex;
      align-items: center;
    }

    .profile-avatar {
      width: 36px;
      height: 36px;
      background: ${colors.accent.purple};
      color: ${colors.text.inverse};
      border-radius: ${borderRadius.lg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${typography.fontWeight.semibold};
      font-size: ${typography.fontSize.sm};
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .profile-avatar:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .linear-header {
        left: 0;
        padding: 0 ${spacing.lg};
      }
      
      .header-content {
        padding: 0 ${spacing.lg};
      }
      
      .page-title {
        font-size: ${typography.fontSize.xl};
      }
      
      .header-actions {
        gap: ${spacing.sm};
      }
    }
  `;
  
  if (!document.querySelector('#linear-header-styles')) {
    style.id = 'linear-header-styles';
    document.head.appendChild(style);
  }

  return headerHTML;
}