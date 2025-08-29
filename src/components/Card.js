import { colors, typography, spacing, borderRadius, shadows, animation } from '../config/designTokens.js';

export function createCard({ title, value, change, changeType = 'positive', icon = '' }) {
  // Inject card-specific styles
  const styleId = 'card-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .linear-card {
        background: ${colors.background.primary};
        border: 1px solid ${colors.border.light};
        border-radius: ${borderRadius.lg};
        padding: ${spacing.lg};
        transition: all ${animation.duration.normal} ${animation.easing.smooth};
        box-shadow: ${shadows.sm};
      }

      .linear-card:hover {
        border-color: ${colors.border.medium};
        box-shadow: ${shadows.md};
        transform: translateY(-1px);
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: ${spacing.sm};
        margin-bottom: ${spacing.md};
      }

      .card-icon {
        font-size: 1.25rem;
        color: ${colors.text.secondary};
      }

      .card-title {
        font-size: ${typography.fontSize.sm};
        font-weight: ${typography.fontWeight.medium};
        color: ${colors.text.secondary};
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .card-value {
        font-size: ${typography.fontSize['2xl']};
        font-weight: ${typography.fontWeight.semibold};
        color: ${colors.text.primary};
        margin-bottom: ${spacing.xs};
      }

      .card-change {
        font-size: ${typography.fontSize.sm};
        font-weight: ${typography.fontWeight.medium};
        display: flex;
        align-items: center;
        gap: ${spacing.xs};
      }

      .card-change.positive {
        color: ${colors.accent.green};
      }

      .card-change.negative {
        color: ${colors.accent.red};
      }

      .card-change.neutral {
        color: ${colors.text.secondary};
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