// Simple state management for the Fritaero app
class AppState {
  constructor() {
    this.state = {
      projects: [
        { 
          id: 1, 
          name: 'Mobile App Redesign', 
          status: 'in-progress', 
          priority: 'high', 
          assignee: 'Sarah Chen',
          progress: 65,
          dueDate: '2025-02-15'
        },
        { 
          id: 2, 
          name: 'API Documentation', 
          status: 'review', 
          priority: 'medium', 
          assignee: 'Mike Johnson',
          progress: 90,
          dueDate: '2025-01-30'
        },
        { 
          id: 3, 
          name: 'User Research', 
          status: 'completed', 
          priority: 'low', 
          assignee: 'Emma Wilson',
          progress: 100,
          dueDate: '2025-01-20'
        }
      ],
      stats: {
        totalProjects: 24,
        activeIssues: 156,
        teamMembers: 12,
        completionRate: 89
      },
      currentView: 'dashboard',
      user: {
        name: 'John Doe',
        email: 'john@company.com',
        avatar: 'JD'
      }
    };
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // Project actions
  addProject(project) {
    const newProject = {
      id: Date.now(),
      ...project,
      progress: 0,
      createdAt: new Date().toISOString()
    };
    this.setState({
      projects: [...this.state.projects, newProject],
      stats: {
        ...this.state.stats,
        totalProjects: this.state.stats.totalProjects + 1
      }
    });
  }

  updateProject(id, updates) {
    this.setState({
      projects: this.state.projects.map(p => 
        p.id === id ? { ...p, ...updates } : p
      )
    });
  }

  deleteProject(id) {
    this.setState({
      projects: this.state.projects.filter(p => p.id !== id)
    });
  }

  // Navigation
  setCurrentView(view) {
    this.setState({ currentView: view });
  }
}

export const appState = new AppState();