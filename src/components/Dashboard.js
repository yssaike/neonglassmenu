import { createCard } from './Card.js';
import { createButton } from './Button.js';
import { colors, spacing, typography } from '../config/designTokens.js';

export function createDashboard() {
  const stats = [
    { label: 'Total Projects', value: '24', change: '+12%', trend: 'up' },
    { label: 'Active Issues', value: '156', change: '-8%', trend: 'down' },
    { label: 'Team Members', value: '12', change: '+2', trend: 'up' },
    { label: 'Completed', value: '89%', change: '+5%', trend: 'up' }
  ];

  const recentProjects = [
    { name: 'Mobile App Redesign', status: 'In Progress', priority: 'High', assignee: 'Sarah Chen' },
    { name: 'API Documentation', status: 'Review', priority: 'Medium', assignee: 'Mike Johnson' },
    { name: 'User Research', status: 'Completed', priority: 'Low', assignee: 'Emma Wilson' }
  ];

  const dashboardHTML = `
    <div class="linear-dashboard">
      <div class="dashboard-grid">
        <!-- Stats Cards -->
        <div class="stats-section">
          <div class="stats-grid">
            ${stats.map(stat => createCard({
              content: `
                <div class="stat-card">
                  <div class="stat-value">${stat.value}</div>
                  <div class="stat-label">${stat.label}</div>
                  <div class="stat-change stat-change--${stat.trend}">
                    <span class="change-icon">${stat.trend === 'up' ? '↗' : '↘'}</span>
                    ${stat.change}
                  </div>
                </div>
              `,
              variant: 'default'
            })).join('')}
          </div>
        </div>

        <!-- Recent Projects -->
        <div class="projects-section">
          ${createCard({
            title: 'Recent Projects',
            content: `
              <div class="projects-list">
                ${recentProjects.map(project => `
                  <div class="project-item">
                    <div class="project-info">
                      <div class="project-name">${project.name}</div>
                      <div class="project-assignee">Assigned to ${project.assignee}</div>
                    </div>
                    <div class="project-meta">
                      <span class="project-status project-status--${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
                      <span class="project-priority project-priority--${project.priority.toLowerCase()}">${project.priority}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="card-actions">
                ${createButton({ text: 'View All Projects', variant: 'ghost', size: 'sm' })}
              </div>
            `,
            variant: 'default'
          })}
        </div>

        <!-- Quick Actions -->
        <div class="actions-section">
          ${createCard({
            title: 'Quick Actions',
            content: `
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
            `,
            variant: 'default'
          })}
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

  return headerHTML;
}