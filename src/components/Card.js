import { colors, spacing, borderRadius, shadows } from '../config/designTokens.js';

export function createCard({ 
  title, 
  content, 
  footer = null, 
  variant = 'default',
  padding = 'md' 
}) {
  const variants = {
    default: `
      background: ${colors.background.primary};
      border: 1px solid ${colors.border.light};
    `,
    elevated: `
      background: ${colors.background.primary};
      border: 1px solid ${colors.border.light};
      box-shadow: ${shadows.lg};
    `,
    outlined: `
      background: transparent;
      border: 1px solid ${colors.border.medium};
    `
  };

  const paddings = {
    sm: spacing.lg,
    md: spacing.xl,
    lg: spacing['2xl']
  };

  const cardHTML = `
    <div class="linear-card linear-card--${variant}">
      ${title ? `
        <div class="card-header">
          <h3 class="card-title">${title}</h3>
        </div>
      ` : ''}
      <div class="card-content">
        ${content}
      </div>
      ${footer ? `
        <div class="card-footer">
          ${footer}
        </div>
      ` : ''}
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-card {
      border-radius: ${borderRadius.xl};
      overflow: hidden;
      transition: all 0.2s ease;
      ${variants[variant]}
    }

    .linear-card--default {
      ${variants.default}
    }

    .linear-card--elevated {
      ${variants.elevated}
    }

    .linear-card--outlined {
      ${variants.outlined}
    }

    .linear-card:hover {
      border-color: ${colors.border.medium};
    }

    .card-header {
      padding: ${paddings[padding]} ${paddings[padding]} 0;
      border-bottom: 1px solid ${colors.border.light};
      margin-bottom: ${spacing.lg};
    }

    .card-title {
      font-size: ${typography.fontSize.lg};
      font-weight: ${typography.fontWeight.semibold};
      color: ${colors.text.primary};
      margin: 0;
      padding-bottom: ${spacing.lg};
    }

    .card-content {
      padding: ${title ? `0 ${paddings[padding]} ${paddings[padding]}` : paddings[padding]};
      color: ${colors.text.secondary};
      line-height: ${typography.lineHeight.normal};
    }

    .card-footer {
      padding: 0 ${paddings[padding]} ${paddings[padding]};
      border-top: 1px solid ${colors.border.light};
      margin-top: ${spacing.lg};
      padding-top: ${spacing.lg};
    }
  `;
  
  if (!document.querySelector('#linear-card-styles')) {
    style.id = 'linear-card-styles';
    document.head.appendChild(style);
  }

  return cardHTML;
}