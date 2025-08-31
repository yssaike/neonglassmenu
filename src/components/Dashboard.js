import { createCard } from './Card.js';
import { createButton } from './Button.js';
import { colors, spacing, typography, borderRadius, shadows } from '../config/designTokens.js';
import { appState } from '../utils/state.js';

export function createDashboard() {
  const state = appState.getState();
  
  const stats = [
    { label: 'Total Projects', value: state.stats.totalProjects.toString(), change: '+12%', trend: 'up' },
    { label: 'Active Issues', value: state.stats.activeIssues.toString(), change: '-8%', trend: 'down' },
    { label: 'Team Members', value: state.stats.teamMembers.toString(), change: '+2', trend: 'up' },
    { label: 'Completed', value: `${state.stats.completionRate}%`, change: '+5%', trend: 'up' }
  ];

  const dashboardHTML = `
    <div class="linear-dashboard">
      <div class="dashboard-grid">
        <!-- Stats Cards -->
        <div class="stats-section">
          <div class="stats-grid">
            ${stats.map(stat => `
              <div class="fritaero-card fritaero-card--hover">
                <div class="stat-card">
                  <div class="stat-value">${stat.value}</div>
                  <div class="stat-label">${stat.label}</div>
                  <div class="stat-change stat-change--${stat.trend}">
                    <span class="change-icon">${stat.trend === 'up' ? '↗' : '↘'}</span>
                    ${stat.change}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Recent Projects -->
        <div class="projects-section">
          <div class="fritaero-card fritaero-card--hover">
            <div class="card-title">Recent Projects</div>
            <div class="card-content">
              <div class="projects-list">
                ${state.projects.slice(0, 3).map(project => `
                  <div class="project-item" data-project-id="${project.id}">
                    <div class="project-info">
                      <div class="project-name">${project.name}</div>
                      <div class="project-assignee">Assigned to ${project.assignee}</div>
                      <div class="project-progress">
                        <div class="progress-bar">
                          <div class="progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                        <span class="progress-text">${project.progress}%</span>
                      </div>
                    </div>
                    <div class="project-meta">
                      <span class="project-status project-status--${project.status}">${project.status.replace('-', ' ')}</span>
                      <span class="project-priority project-priority--${project.priority}">${project.priority}</span>
                      <button class="project-action" data-action="edit" data-project-id="${project.id}">✏️</button>
                      <button class="project-action" data-action="delete" data-project-id="${project.id}">🗑️</button>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="card-actions">
                ${createButton({ text: 'View All Projects', variant: 'ghost', size: 'sm' })}
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="actions-section">
          <div class="fritaero-card fritaero-card--hover">
            <div class="card-title">Quick Actions</div>
            <div class="card-content">
              <div class="quick-actions">
                <div class="action-item">
                  <div class="action-icon">📝</div>
                  <div class="action-content">
                    <div class="action-title">Create Issue</div>
                    <div class="action-description">Report a bug or request a feature</div>
                  </div>
                </div>
                <div class="action-item">
                  <div class="action-icon">🚀</div>
                  <div class="action-content">
                    <div class="action-title">Deploy Project</div>
                    <div class="action-description">Push your latest changes live</div>
                  </div>
                </div>
                <div class="action-item">
                  <div class="action-icon">👥</div>
                  <div class="action-content">
                    <div class="action-title">Invite Team</div>
                    <div class="action-description">Add new members to your workspace</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .linear-dashboard {
      margin-left: 280px;
      margin-top: 80px;
      padding: ${spacing['2xl']};
      min-height: calc(100vh - 80px);
      background: ${colors.background.secondary};
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: ${spacing['2xl']};
      max-width: 1200px;
    }

    .stats-section {
      grid-column: 1;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: ${spacing.lg};
    }

    .stat-card {
      text-align: center;
      padding: ${spacing.lg} 0;
    }

    .stat-value {
      font-size: ${typography.fontSize['3xl']};
      font-weight: ${typography.fontWeight.bold};
      color: ${colors.text.primary};
      line-height: ${typography.lineHeight.tight};
      margin-bottom: ${spacing.sm};
    }

    .stat-label {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.secondary};
      font-weight: ${typography.fontWeight.medium};
      margin-bottom: ${spacing.md};
    }

    .stat-change {
      display: inline-flex;
      align-items: center;
      gap: ${spacing.xs};
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.medium};
      padding: ${spacing.xs} ${spacing.sm};
      border-radius: ${borderRadius.sm};
    }

    .stat-change--up {
      color: ${colors.accent.green};
      background: rgba(16, 185, 129, 0.1);
    }

    .stat-change--down {
      color: ${colors.accent.red};
      background: rgba(239, 68, 68, 0.1);
    }

    .change-icon {
      font-size: ${typography.fontSize.xs};
    }

    .projects-section {
      grid-column: 1;
    }

    .projects-list {
      display: flex;
      flex-direction: column;
      gap: ${spacing.lg};
      margin-bottom: ${spacing.xl};
    }

    .project-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${spacing.lg};
      border: 1px solid ${colors.border.light};
      border-radius: ${borderRadius.md};
      transition: all 0.15s ease;
    }

    .project-item:hover {
      border-color: ${colors.border.medium};
      background: ${colors.background.secondary};
    }

    .project-info {
      flex: 1;
    }

    .project-name {
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.semibold};
      color: ${colors.text.primary};
      margin-bottom: ${spacing.xs};
    }

    .project-assignee {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.tertiary};
    }

    .project-meta {
      display: flex;
      align-items: center;
      gap: ${spacing.md};
    }

    .project-status {
      padding: ${spacing.xs} ${spacing.md};
      border-radius: ${borderRadius.sm};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.medium};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-status--in-progress {
      background: rgba(59, 130, 246, 0.1);
      color: ${colors.accent.blue};
    }

    .project-status--review {
      background: rgba(245, 158, 11, 0.1);
      color: ${colors.accent.orange};
    }

    .project-status--completed {
      background: rgba(16, 185, 129, 0.1);
      color: ${colors.accent.green};
    }

    .project-priority {
      padding: ${spacing.xs} ${spacing.md};
      border-radius: ${borderRadius.sm};
      font-size: ${typography.fontSize.xs};
      font-weight: ${typography.fontWeight.medium};
      border: 1px solid;
    }

    .project-priority--high {
      color: ${colors.accent.red};
      border-color: ${colors.accent.red};
      background: rgba(239, 68, 68, 0.05);
    }

    .project-priority--medium {
      color: ${colors.accent.orange};
      border-color: ${colors.accent.orange};
      background: rgba(245, 158, 11, 0.05);
    }

    .project-priority--low {
      color: ${colors.text.tertiary};
      border-color: ${colors.border.medium};
      background: ${colors.background.secondary};
    }

    .card-actions {
      margin-top: ${spacing.lg};
      padding-top: ${spacing.lg};
      border-top: 1px solid ${colors.border.light};
    }

    .actions-section {
      grid-column: 1;
    }

    .quick-actions {
      display: flex;
      flex-direction: column;
      gap: ${spacing.lg};
    }

    .action-item {
      display: flex;
      align-items: center;
      gap: ${spacing.lg};
      padding: ${spacing.lg};
      border: 1px solid ${colors.border.light};
      border-radius: ${borderRadius.md};
      cursor: pointer;
      transition: all 0.15s ease;
    }

    .action-item:hover {
      border-color: ${colors.border.medium};
      background: ${colors.background.secondary};
    }

    .action-icon {
      width: 48px;
      height: 48px;
      background: ${colors.background.secondary};
      border-radius: ${borderRadius.lg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${typography.fontSize.xl};
    }

    .action-content {
      flex: 1;
    }

    .action-title {
      font-size: ${typography.fontSize.base};
      font-weight: ${typography.fontWeight.semibold};
      color: ${colors.text.primary};
      margin-bottom: ${spacing.xs};
    }

    .action-description {
      font-size: ${typography.fontSize.sm};
      color: ${colors.text.secondary};
    }

    @media (max-width: 1024px) {
      .linear-dashboard {
        margin-left: 0;
        padding: ${spacing.lg};
      }
      
      .linear-header {
        left: 0;
      }
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0 ${spacing.lg};
        flex-direction: column;
        gap: ${spacing.lg};
        align-items: flex-start;
      }
      
      .header-right {
        width: 100%;
        justify-content: space-between;
      }
      
      .dashboard-grid {
        gap: ${spacing.lg};
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
  
  if (!document.querySelector('#linear-header-styles')) {
    style.id = 'linear-header-styles';
    document.head.appendChild(style);
  }

  // Add dashboard functionality
  setTimeout(() => {
    // Project item interactions
    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', (e) => {
        if (!e.target.classList.contains('project-action')) {
          const projectId = parseInt(item.dataset.projectId);
          showProjectDetails(projectId);
        }
      });
    });

    // Project action buttons
    document.querySelectorAll('.project-action').forEach(button => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = button.dataset.action;
        const projectId = parseInt(button.dataset.projectId);
        
        if (action === 'edit') {
          editProject(projectId);
        } else if (action === 'delete') {
          deleteProject(projectId);
        }
      });
    });

    // Quick action items
    document.querySelectorAll('.action-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        const actions = ['createIssue', 'deployProject', 'inviteTeam'];
        const actionFunction = actions[index];
        if (window[actionFunction]) {
          window[actionFunction]();
        }
      });
    });
  }, 0);
  return dashboardHTML;
}