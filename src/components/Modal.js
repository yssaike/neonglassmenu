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
      background: rgba(163, 177, 198, 0.3);
      backdrop-filter: blur(4px);
    }

    .modal-container {
      background: linear-gradient(145deg, #f0f0f3, #e6e7eb);
      border-radius: ${borderRadius.xl};
      box-shadow: 12px 12px 24px rgba(163, 177, 198, 0.3), -12px -12px 24px rgba(255, 255, 255, 1);
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow: hidden;
      position: relative;
      z-index: 1;
      animation: modalSlideIn 0.3s ease;
      border: none;
    }

    .modal-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, ${colors.accent.coral}, ${colors.accent.sunshine}, ${colors.accent.mint});
      border-radius: ${borderRadius.xl} ${borderRadius.xl} 0 0;
    }
    .modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${spacing.xl};
      border: none;
      position: relative;
    }

    .modal-header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: ${spacing.xl};
      right: ${spacing.xl};
      height: 1px;
      background: linear-gradient(90deg, transparent, ${colors.border.light}, transparent);
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
      background: #f0f0f3;
      box-shadow: 4px 4px 8px rgba(163, 177, 198, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8);
      transition: all 0.2s ${animation.easing.spring};
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-close:hover {
      box-shadow: inset 2px 2px 4px rgba(163, 177, 198, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.8);
      color: ${colors.text.primary};
      transform: scale(1.1);
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
      border: none;
      box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8);
      border-radius: ${borderRadius.md};
      font-size: ${typography.fontSize.base};
      background: #f0f0f3;
      color: ${colors.text.primary};
      transition: all 0.2s ${animation.easing.spring};
      outline: none;
    }

    .form-group input:focus,
    .form-group select:focus {
      box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8), 0 0 0 3px rgba(14, 165, 233, 0.2);
      transform: scale(1.02);
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
      background: #f0f0f3;
      color: ${colors.text.secondary};
      border: none;
      box-shadow: 6px 6px 12px rgba(163, 177, 198, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8);
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.2s ${animation.easing.spring};
    }

    .btn-cancel:hover {
      box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.9);
      color: ${colors.text.primary};
      transform: translateY(-2px);
    }

    .btn-cancel:active {
      box-shadow: inset 3px 3px 6px rgba(163, 177, 198, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8);
      transform: translateY(1px);
    }

    .btn-primary {
      padding: ${spacing.md} ${spacing.lg};
      background: linear-gradient(145deg, ${colors.primary[500]}, ${colors.primary[600]});
      color: ${colors.text.inverse};
      border: none;
      box-shadow: 6px 6px 12px rgba(163, 177, 198, 0.2), -6px -6px 12px rgba(255, 255, 255, 0.8);
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.2s ${animation.easing.spring};
    }

    .btn-primary:hover {
      background: linear-gradient(145deg, ${colors.primary[600]}, ${colors.primary[700]});
      transform: translateY(-2px);
      box-shadow: 8px 8px 16px rgba(163, 177, 198, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.9);
    }

    .btn-primary:active {
      box-shadow: inset 3px 3px 6px rgba(163, 177, 198, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8);
      transform: translateY(1px);
    }

    .btn-danger {
      padding: ${spacing.md} ${spacing.lg};
      background: linear-gradient(145deg, ${colors.accent.coral}, #ff5252);
      color: ${colors.text.inverse};
      border: none;
      box-shadow: ${shadows.neuro.raised};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      font-weight: ${typography.fontWeight.medium};
      transition: all 0.2s ${animation.easing.spring};
    }

    .btn-danger:hover {
      background: linear-gradient(145deg, #ff5252, #ff4444);
      transform: translateY(-2px);
      box-shadow: ${shadows.neuro.floating};
    }

    .btn-danger:active {
      box-shadow: ${shadows.neuro.pressed};
      transform: translateY(1px);
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
      background: ${colors.background.primary};
      border: none;
      box-shadow: ${shadows.neuro.subtle};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      transition: all 0.2s ${animation.easing.spring};
    }

    .import-option:hover {
      box-shadow: ${shadows.neuro.raised};
      transform: translateY(-2px);
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
        
        // Validate required fields
        const requiredFields = ['name', 'assignee', 'priority', 'dueDate'];
        const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
        
        if (missingFields.length > 0) {
          showNotification('Please fill in all required fields', 'error');
          return;
        }
        
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