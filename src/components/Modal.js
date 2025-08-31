import { colors, typography, spacing, borderRadius, shadows } from '../config/designTokens.js';

export function createModal({ title, content, onSubmit = null }) {
  const modalId = `modal-${Date.now()}`;
  
  const modalHTML = `
    <div class="fritaero-modal" id="${modalId}">
      <div class="modal-backdrop"></div>
      <div class="modal-container">
        <div class="modal-header">
          <h2 class="modal-title">${title}</h2>
          <button class="modal-close" onclick="closeModal()">×</button>
        </div>
        <div class="modal-content">
          ${content}
        </div>
      </div>
    </div>
  `;

  // Add modal styles
  const style = document.createElement('style');
  style.textContent = `
    .fritaero-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: modalFadeIn 0.2s ease;
    }

    .modal-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
    }

    .modal-container {
      background: ${colors.background.primary};
      border-radius: ${borderRadius.xl};
      box-shadow: ${shadows.xl};
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow: hidden;
      position: relative;
      z-index: 1;
      animation: modalSlideIn 0.3s ease;
    }

    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${spacing.xl};
      border-bottom: 1px solid ${colors.border.light};
    }

    .modal-title {
      font-size: ${typography.fontSize.xl};
      font-weight: ${typography.fontWeight.semibold};
      color: ${colors.text.primary};
      margin: 0;
    }

    .modal-close {
      background: none;
      border: none;
      font-size: ${typography.fontSize['2xl']};
      color: ${colors.text.tertiary};
      cursor: pointer;
      padding: ${spacing.sm};
      border-radius: ${borderRadius.sm};
      transition: all 0.15s ease;
    }

    .modal-close:hover {
      background: ${colors.background.secondary};
      color: ${colors.text.primary};
    }

    .modal-content {
      padding: ${spacing.xl};
      overflow-y: auto;
      max-height: calc(80vh - 120px);
    }

    .modal-form {
      display: flex;
      flex-direction: column;
      gap: ${spacing.lg};
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: ${spacing.sm};
    }

    .form-group label {
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.medium};
      color: ${colors.text.primary};
    }

    .form-group input,
    .form-group select {
      padding: ${spacing.md} ${spacing.lg};
      border: 1px solid ${colors.border.medium};
      border-radius: ${borderRadius.md};
      font-size: ${typography.fontSize.base};
      background: ${colors.background.primary};
      color: ${colors.text.primary};
      transition: all 0.15s ease;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      border-color: ${colors.primary[500]};
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-group input[type="range"] {
      padding: 0;
      height: 6px;
      background: ${colors.background.secondary};
      border-radius: ${borderRadius.sm};
      appearance: none;
    }

    .form-group input[type="range"]::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      background: ${colors.primary[500]};
      border-radius: 50%;
      cursor: pointer;
    }

    .progress-display {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.secondary};
      font-weight: ${typography.fontWeight.medium};
    }

    .form-actions {
      display: flex;
      gap: ${spacing.md};
      justify-content: flex-end;
      margin-top: ${spacing.lg};
    }

    .btn-cancel {
      padding: ${spacing.md} ${spacing.lg};
      background: ${colors.background.secondary};
      color: ${colors.text.secondary};
      border: 1px solid ${colors.border.medium};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.15s ease;
    }

    .btn-cancel:hover {
      background: ${colors.background.tertiary};
      color: ${colors.text.primary};
    }

    .btn-primary {
      padding: ${spacing.md} ${spacing.lg};
      background: ${colors.primary[500]};
      color: ${colors.text.inverse};
      border: 1px solid ${colors.primary[500]};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.15s ease;
    }

    .btn-primary:hover {
      background: ${colors.primary[600]};
      transform: translateY(-1px);
      box-shadow: ${shadows.md};
    }

    .btn-danger {
      padding: ${spacing.md} ${spacing.lg};
      background: ${colors.accent.coral};
      color: ${colors.text.inverse};
      border: 1px solid ${colors.accent.coral};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.15s ease;
    }

    .btn-danger:hover {
      background: #ff5252;
      transform: translateY(-1px);
      box-shadow: ${shadows.md};
    }

    .import-options {
      display: grid;
      gap: ${spacing.lg};
    }

    .import-option {
      display: flex;
      align-items: center;
      gap: ${spacing.lg};
      padding: ${spacing.lg};
      border: 1px solid ${colors.border.light};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .import-option:hover {
      border-color: ${colors.border.accent};
      background: ${colors.background.tertiary};
    }

    .import-icon {
      font-size: ${typography.fontSize['2xl']};
    }

    .import-content h3 {
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.semibold};
      color: ${colors.text.primary};
      margin: 0 0 ${spacing.xs} 0;
    }

    .import-content p {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.secondary};
      margin: 0;
    }

    .project-details {
      display: flex;
      flex-direction: column;
      gap: ${spacing.lg};
    }

    .detail-row {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
    }

    .detail-label {
      font-weight: ${typography.fontWeight.medium};
      color: ${colors.text.secondary};
      min-width: 80px;
    }

    .progress-container {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
      flex: 1;
    }

    .delete-confirmation {
      text-align: center;
    }

    .delete-confirmation p {
      margin-bottom: ${spacing.lg};
      color: ${colors.text.primary};
    }

    .warning-text {
      color: ${colors.accent.coral};
      font-size: ${typography.fontSize.sm};
    }

    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes modalSlideIn {
      from { transform: translateY(-20px) scale(0.95); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
  `;
  
  if (!document.querySelector('#fritaero-modal-styles')) {
    style.id = 'fritaero-modal-styles';
    document.head.appendChild(style);
  }

  // Create modal element
  const modalElement = document.createElement('div');
  modalElement.innerHTML = modalHTML;
  const modal = modalElement.firstElementChild;

  // Add event listeners
  setTimeout(() => {
    // Close modal on backdrop click
    modal.querySelector('.modal-backdrop').addEventListener('click', () => {
      modal.remove();
    });

    // Close modal on close button
    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.remove();
    });

    // Cancel button
    const cancelBtn = modal.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        modal.remove();
      });
    }

    // Form submission
    const form = modal.querySelector('form');
    if (form && onSubmit) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
        modal.remove();
      });
    }

    // Progress slider update
    const progressSlider = modal.querySelector('input[type="range"]');
    const progressDisplay = modal.querySelector('.progress-display');
    if (progressSlider && progressDisplay) {
      progressSlider.addEventListener('input', (e) => {
        progressDisplay.textContent = `${e.target.value}%`;
      });
    }

    // Import option clicks
    modal.querySelectorAll('.import-option').forEach(option => {
      option.addEventListener('click', () => {
        const type = option.dataset.type;
        showNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} import coming soon!`, 'info');
        modal.remove();
      });
    });
  }, 0);

  return modal;
}

// Global close modal function
window.closeModal = function() {
  const modal = document.querySelector('.fritaero-modal');
  if (modal) {
    modal.remove();
  }
};