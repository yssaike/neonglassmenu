import { colors, typography, spacing, borderRadius } from '../config/designTokens.js';

export function createInput({ 
  type = 'text', 
  placeholder = '', 
  label = null, 
  value = '', 
  required = false,
  disabled = false,
  error = null,
  helper = null 
}) {
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputHTML = `
    <div class="linear-input-group">
      ${label ? `
        <label for="${inputId}" class="input-label">
          ${label}
          ${required ? '<span class="required-indicator">*</span>' : ''}
        </label>
      ` : ''}
      <input 
        type="${type}"
        id="${inputId}"
        class="linear-input ${error ? 'linear-input--error' : ''}"
        placeholder="${placeholder}"
        value="${value}"
        ${required ? 'required' : ''}
        ${disabled ? 'disabled' : ''}
      />
      ${error ? `<div class="input-error">${error}</div>` : ''}
      ${helper ? `<div class="input-helper">${helper}</div>` : ''}
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-input-group {
      display: flex;
      flex-direction: column;
      gap: ${spacing.sm};
    }

    .input-label {
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.medium};
      color: ${colors.text.primary};
      display: flex;
      align-items: center;
      gap: ${spacing.xs};
    }

    .required-indicator {
      color: ${colors.accent.red};
    }

    .linear-input {
      font-family: ${typography.fontFamily.sans.join(', ')};
      font-size: ${typography.fontSize.base};
      padding: ${spacing.md} ${spacing.lg};
      border: 1px solid ${colors.border.medium};
      border-radius: ${borderRadius.md};
      background: ${colors.background.primary};
      color: ${colors.text.primary};
      transition: all 0.15s ease;
      outline: none;
      height: 40px;
    }

    .linear-input:focus {
      border-color: ${colors.accent.blue};
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .linear-input:hover:not(:focus):not(:disabled) {
      border-color: ${colors.border.dark};
    }

    .linear-input:disabled {
      background: ${colors.background.secondary};
      color: ${colors.text.tertiary};
      cursor: not-allowed;
    }

    .linear-input--error {
      border-color: ${colors.accent.red};
    }

    .linear-input--error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .input-error {
      font-size: ${typography.fontSize.sm};
      color: ${colors.accent.red};
      font-weight: ${typography.fontWeight.medium};
    }

    .input-helper {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.tertiary};
    }
  `;
  
  if (!document.querySelector('#linear-input-styles')) {
    style.id = 'linear-input-styles';
    document.head.appendChild(style);
  }

  return inputHTML;
}