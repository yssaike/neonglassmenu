import { appState } from './state.js';
import { createModal } from '../components/Modal.js';

// Global interaction handlers
window.showNewProjectModal = function() {
  const modal = createModal({
    title: 'Create New Project',
    content: `
      <form id="new-project-form" class="modal-form">
        <div class="form-group">
          <label for="project-name">Project Name</label>
          <input type="text" id="project-name" name="name" required placeholder="Enter project name">
        </div>
        <div class="form-group">
          <label for="project-assignee">Assignee</label>
          <input type="text" id="project-assignee" name="assignee" required placeholder="Enter assignee name">
        </div>
        <div class="form-group">
          <label for="project-priority">Priority</label>
          <select id="project-priority" name="priority" required>
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div class="form-group">
          <label for="project-due">Due Date</label>
          <input type="date" id="project-due" name="dueDate" required>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="submit" class="btn-primary">Create Project</button>
        </div>
      </form>
    `,
    onSubmit: (formData) => {
      appState.addProject({
        name: formData.name,
        assignee: formData.assignee,
        priority: formData.priority,
        status: 'in-progress',
        dueDate: formData.dueDate
      });
      refreshDashboard();
    }
  });
  
  document.body.appendChild(modal);
};

window.showImportModal = function() {
  const modal = createModal({
    title: 'Import Project',
    content: `
      <div class="import-options">
        <div class="import-option" data-type="github">
          <div class="import-icon">📁</div>
          <div class="import-content">
            <h3>From GitHub</h3>
            <p>Import an existing repository</p>
          </div>
        </div>
        <div class="import-option" data-type="template">
          <div class="import-icon">📋</div>
          <div class="import-content">
            <h3>From Template</h3>
            <p>Start with a pre-built template</p>
          </div>
        </div>
        <div class="import-option" data-type="file">
          <div class="import-icon">📄</div>
          <div class="import-content">
            <h3>From File</h3>
            <p>Upload project files</p>
          </div>
        </div>
      </div>
    `
  });
  
  document.body.appendChild(modal);
};

window.showProjectDetails = function(projectId) {
  const project = appState.getState().projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = createModal({
    title: project.name,
    content: `
      <div class="project-details">
        <div class="detail-row">
          <span class="detail-label">Status:</span>
          <span class="project-status project-status--${project.status}">${project.status.replace('-', ' ')}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Priority:</span>
          <span class="project-priority project-priority--${project.priority}">${project.priority}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Assignee:</span>
          <span>${project.assignee}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Progress:</span>
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
            <span class="progress-text">${project.progress}%</span>
          </div>
        </div>
        <div class="detail-row">
          <span class="detail-label">Due Date:</span>
          <span>${new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
    `
  });
  
  document.body.appendChild(modal);
};

window.editProject = function(projectId) {
  const project = appState.getState().projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = createModal({
    title: 'Edit Project',
    content: `
      <form id="edit-project-form" class="modal-form">
        <div class="form-group">
          <label for="edit-project-name">Project Name</label>
          <input type="text" id="edit-project-name" name="name" value="${project.name}" required>
        </div>
        <div class="form-group">
          <label for="edit-project-assignee">Assignee</label>
          <input type="text" id="edit-project-assignee" name="assignee" value="${project.assignee}" required>
        </div>
        <div class="form-group">
          <label for="edit-project-priority">Priority</label>
          <select id="edit-project-priority" name="priority" required>
            <option value="low" ${project.priority === 'low' ? 'selected' : ''}>Low</option>
            <option value="medium" ${project.priority === 'medium' ? 'selected' : ''}>Medium</option>
            <option value="high" ${project.priority === 'high' ? 'selected' : ''}>High</option>
          </select>
        </div>
        <div class="form-group">
          <label for="edit-project-status">Status</label>
          <select id="edit-project-status" name="status" required>
            <option value="in-progress" ${project.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="review" ${project.status === 'review' ? 'selected' : ''}>Review</option>
            <option value="completed" ${project.status === 'completed' ? 'selected' : ''}>Completed</option>
          </select>
        </div>
        <div class="form-group">
          <label for="edit-project-progress">Progress (%)</label>
          <input type="range" id="edit-project-progress" name="progress" min="0" max="100" value="${project.progress}">
          <span class="progress-display">${project.progress}%</span>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="submit" class="btn-primary">Update Project</button>
        </div>
      </form>
    `,
    onSubmit: (formData) => {
      appState.updateProject(projectId, {
        name: formData.name,
        assignee: formData.assignee,
        priority: formData.priority,
        status: formData.status,
        progress: parseInt(formData.progress)
      });
      refreshDashboard();
    }
  });
  
  document.body.appendChild(modal);
};

window.deleteProject = function(projectId) {
  const project = appState.getState().projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = createModal({
    title: 'Delete Project',
    content: `
      <div class="delete-confirmation">
        <p>Are you sure you want to delete <strong>${project.name}</strong>?</p>
        <p class="warning-text">This action cannot be undone.</p>
        <div class="form-actions">
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="button" class="btn-danger" onclick="confirmDelete(${projectId})">Delete Project</button>
        </div>
      </div>
    `
  });
  
  document.body.appendChild(modal);
};

window.confirmDelete = function(projectId) {
  appState.deleteProject(projectId);
  refreshDashboard();
  closeModal();
};

// Quick actions
window.createIssue = function() {
  showNotification('Create Issue feature coming soon!', 'info');
};

window.deployProject = function() {
  showNotification('Deploying project...', 'success');
  setTimeout(() => {
    showNotification('Project deployed successfully!', 'success');
  }, 2000);
};

window.inviteTeam = function() {
  const modal = createModal({
    title: 'Invite Team Member',
    content: `
      <form id="invite-form" class="modal-form">
        <div class="form-group">
          <label for="invite-email">Email Address</label>
          <input type="email" id="invite-email" name="email" required placeholder="colleague@company.com">
        </div>
        <div class="form-group">
          <label for="invite-role">Role</label>
          <select id="invite-role" name="role" required>
            <option value="viewer">Viewer</option>
            <option value="editor" selected>Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="form-actions">
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="submit" class="btn-primary">Send Invitation</button>
        </div>
      </form>
    `,
    onSubmit: (formData) => {
      showNotification(`Invitation sent to ${formData.email}!`, 'success');
    }
  });
  
  document.body.appendChild(modal);
};

// Utility functions
async function refreshDashboard() {
  const dashboard = document.querySelector('.linear-dashboard');
  if (dashboard) {
    const { createDashboard } = await import('../components/Dashboard.js');
    dashboard.outerHTML = createDashboard();
  }
}

function closeModal() {
  const modal = document.querySelector('.fritaero-modal');
  if (modal) {
    modal.remove();
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fritaero-notification fritaero-notification--${type}`;
  notification.textContent = message;
  
  const style = document.createElement('style');
  style.textContent = `
    .fritaero-notification {
      position: fixed;
      top: 100px;
      right: 20px;
      padding: 16px 24px;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      animation: slideIn 0.3s ease;
    }
    
    .fritaero-notification--info { background: #3b82f6; }
    .fritaero-notification--success { background: #10b981; }
    .fritaero-notification--warning { background: #f59e0b; }
    .fritaero-notification--error { background: #ef4444; }
    
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  
  if (!document.querySelector('#notification-styles')) {
    style.id = 'notification-styles';
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}