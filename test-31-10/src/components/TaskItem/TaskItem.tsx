import React from 'react';
import { Task } from '../../types';
import { updateTaskStatus, deleteTask } from '../../api';

interface TaskItemProps {
  task: Task;
  Reload: () => void;
}

function TaskItem({ task, Reload }: TaskItemProps) {
  const handleStatusChange = async () => {
    await updateTaskStatus(task._id!);
    Reload();
  };

  const handleDelete = async () => {
    await deleteTask(task._id!);
    Reload();
  };

  return (
    <div className={`task-item ${task.status.toLowerCase()}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleStatusChange} disabled={task.status === 'Completed'}>
        Progress
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
