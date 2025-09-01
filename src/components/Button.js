import { colors, typography, spacing, borderRadius, shadows } from '../config/designTokens.js';

export function createButton({ 
  text, 
  variant = 'primary', 
  size = 'md', 
  icon = null, 
  onClick = null,
  disabled = false 
}) {
  const variants = {
    primary: `
      background: linear-gradient(145deg, ${colors.primary[500]}, ${colors.primary[600]});
      color: ${colors.text.inverse};
      border: none;
      box-shadow: ${shadows.neuro.raised};
    `,
    secondary: `
      background: ${colors.background.primary};
      color: ${colors.text.primary};
      border: none;
      box-shadow: ${shadows.neuro.raised};
    `,
    ghost: `
      background: transparent;
      color: ${colors.text.secondary};
      border: none;
      box-shadow: ${shadows.neuro.subtle};
    `
  };

  const sizes = {
    sm: `
      padding: ${spacing.sm} ${spacing.md};
      font-size: ${typography.fontSize.sm};
      height: 32px;
    `,
    md: `
      padding: ${spacing.md} ${spacing.lg};
      font-size: ${typography.fontSize.base};
      height: 40px;
    `,
    lg: `
      padding: ${spacing.lg} ${spacing.xl};
      font-size: ${typography.fontSize.lg};
      height: 48px;
    `
  };

  const buttonId = `btn-${Math.random().toString(36).substr(2, 9)}`;

  const buttonHTML = `
    <button 
      class="linear-button linear-button--${variant} linear-button--${size}" 
      id="${buttonId}"
      ${disabled ? 'disabled' : ''}
    >
      ${icon ? `<span class="button-icon">${icon}</span>` : ''}
      <span class="button-text">${text}</span>
    </button>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: ${spacing.sm};
      font-family: ${typography.fontFamily.sans.join(', ')};
      font-weight: ${typography.fontWeight.medium};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      transition: all 0.15s ease;
      text-decoration: none;
      outline: none;
      position: relative;
      overflow: hidden;
    }

    .linear-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .linear-button--primary {
      ${variants.primary}
      box-shadow: ${shadows.sm};
    }

    .linear-button--primary:hover:not(:disabled) {
      background: linear-gradient(145deg, ${colors.primary[600]}, ${colors.primary[700]});
      box-shadow: ${shadows.neuro.floating};
      transform: translateY(-2px);
    }

    .linear-button--secondary {
      ${variants.secondary}
      box-shadow: ${shadows.sm};
    }

    .linear-button--secondary:hover:not(:disabled) {
      background: ${colors.background.secondary};
      box-shadow: ${shadows.neuro.floating};
      transform: translateY(-2px);
    }

    .linear-button--ghost {
      ${variants.ghost}
    }

    .linear-button--ghost:hover:not(:disabled) {
      background: ${colors.background.secondary};
      color: ${colors.text.primary};
      box-shadow: ${shadows.neuro.raised};
    }

    .linear-button:active:not(:disabled) {
      box-shadow: ${shadows.neuro.pressed};
      transform: translateY(1px);
    }

    .linear-button--sm { ${sizes.sm} }
    .linear-button--md { ${sizes.md} }
    .linear-button--lg { ${sizes.lg} }

    .button-icon {
      display: flex;
      align-items: center;
      font-size: 1em;
    }

    .button-text {
      white-space: nowrap;
    }
  `;
  
  if (!document.querySelector('#linear-button-styles')) {
    style.id = 'linear-button-styles';
    document.head.appendChild(style);
  }

  // Add click handler if provided
  setTimeout(() => {
    if (onClick) {
      document.getElementById(buttonId)?.addEventListener('click', onClick);
    }
  }, 0);

  return buttonHTML;
}