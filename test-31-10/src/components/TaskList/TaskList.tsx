import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  Reload: () => void;
}

function TaskList({ tasks, Reload }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} Reload={Reload} />
      ))}
    </div>
  );
}

export default TaskList;
