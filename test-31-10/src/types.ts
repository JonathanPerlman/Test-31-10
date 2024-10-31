export interface Task {
    _id?: string;
    name: string;
    status: 'Pending' | 'In Progress' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    description: string;
  }
  