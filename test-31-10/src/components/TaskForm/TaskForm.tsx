import React, { useState } from 'react';
import { Task } from '../../types';

interface TaskFormProps {
    AddTask: (task: Task) => void;
}

function TaskForm({ AddTask }: TaskFormProps) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        AddTask({
            name,
            status: status as 'Pending' | 'In Progress' | 'Completed',
            priority: priority as 'Low' | 'Medium' | 'High',
            description
        });
        setName('');
        setStatus('Pending');
        setPriority('Low');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Mission</button>
        </form>

    );
}

export default TaskForm;
