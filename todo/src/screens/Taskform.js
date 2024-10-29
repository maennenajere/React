import React from 'react';

export default function TaskForm({ task, setTask, addTask }) {
    return (
        <form>
            <input
                placeholder="What needs to be done?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        addTask();
                    }
                }}
            />
        </form>
    );
}