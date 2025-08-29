import { designTokens } from '../config/designTokens.js';

export function createCard({ title, value, change, changeType = 'positive', icon = '' }) {
  // Inject card-specific styles
  const styleId = 'card-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .linear-card {
        background: ${designTokens.colors.surface};
        border: 1px solid ${designTokens.colors.border};
        border-radius: ${designTokens.borderRadius.lg};
        padding: ${designTokens.spacing.lg};
        transition: all ${designTokens.animation.duration.normal} ${designTokens.animation.easing.smooth};
        box-shadow: ${designTokens.shadows.sm};
      }

      .linear-card:hover {
        border-color: ${designTokens.colors.borderHover};
        box-shadow: ${designTokens.shadows.md};
        transform: translateY(-1px);
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: ${designTokens.spacing.sm};
        margin-bottom: ${designTokens.spacing.md};
      }

      .card-icon {
        font-size: 1.25rem;
        color: ${designTokens.colors.textSecondary};
      }

      .card-title {
        font-size: ${designTokens.typography.fontSize.sm};
        font-weight: ${designTokens.typography.fontWeight.medium};
        color: ${designTokens.colors.textSecondary};
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .card-value {
        font-size: ${designTokens.typography.fontSize.xl2};
        font-weight: ${designTokens.typography.fontWeight.semibold};
        color: ${designTokens.colors.textPrimary};
        margin-bottom: ${designTokens.spacing.xs};
      }

      .card-change {
        font-size: ${designTokens.typography.fontSize.sm};
        font-weight: ${designTokens.typography.fontWeight.medium};
        display: flex;
        align-items: center;
        gap: ${designTokens.spacing.xs};
      }

      .card-change.positive {
        color: ${designTokens.colors.success};
      }

      .card-change.negative {
        color: ${designTokens.colors.error};
      }

      .card-change.neutral {
        color: ${designTokens.colors.textSecondary};
      }
    `;
    document.head.appendChild(style);
  }

  const card = document.createElement('div');
  card.className = 'linear-card';
  
  const changeIcon = changeType === 'positive' ? '↗' : changeType === 'negative' ? '↘' : '→';
  
  card.innerHTML = `
    <div class="card-header">
      ${icon ? `<span class="card-icon">${icon}</span>` : ''}
      <span class="card-title">${title}</span>
    </div>
    <div class="card-value">${value}</div>
    ${change ? `
      <div class="card-change ${changeType}">
        <span>${changeIcon}</span>
        <span>${change}</span>
      </div>
    ` : ''}
  `;

  return card;
}