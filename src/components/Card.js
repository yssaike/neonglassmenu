import { colors, typography, spacing, borderRadius, shadows, animation } from '../config/designTokens.js';

export function createCard({ 
  title = null, 
  content = '', 
  variant = 'default',
  hover = true,
  className = ''
}) {
  // Inject card-specific styles
  const styleId = 'fritaero-card-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .fritaero-card {
        background: ${colors.background.primary};
        border: 1px solid ${colors.border.light};
        border-radius: ${borderRadius.xl};
        padding: ${spacing.xl};
        transition: all ${animation.duration.normal} ${animation.easing.smooth};
        box-shadow: ${shadows.sm};
        position: relative;
        overflow: hidden;
      }

      .fritaero-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, ${colors.accent.coral}, ${colors.accent.sunshine}, ${colors.accent.mint});
        opacity: 0;
        transition: opacity ${animation.duration.normal} ease;
      }

      .fritaero-card--hover:hover {
        border-color: ${colors.border.accent};
        box-shadow: ${shadows.lg};
        transform: translateY(-2px);
      }

      .fritaero-card--hover:hover::before {
        opacity: 1;
      }

      .fritaero-card--accent {
        background: linear-gradient(135deg, ${colors.background.secondary}, ${colors.background.tertiary});
        border-color: ${colors.border.accent};
      }

      .fritaero-card--minimal {
        border: none;
        box-shadow: none;
        background: transparent;
      }

      .card-title {
        font-size: ${typography.fontSize.lg};
        font-weight: ${typography.fontWeight.semibold};
        color: ${colors.text.primary};
        margin-bottom: ${spacing.lg};
        display: flex;
        align-items: center;
        gap: ${spacing.md};
      }

      .card-content {
        color: ${colors.text.secondary};
        line-height: ${typography.lineHeight.relaxed};
      }
    `;
    document.head.appendChild(style);
  }

  const cardClasses = [
    'fritaero-card',
    hover ? 'fritaero-card--hover' : '',
    variant !== 'default' ? `fritaero-card--${variant}` : '',
    className
  ].filter(Boolean).join(' ');

  return `
    <div class="${cardClasses}">
      ${title ? `<div class="card-title">${title}</div>` : ''}
      <div class="card-content">${content}</div>
    </div>
  `;
}