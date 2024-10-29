import React from 'react';
import Row from '../components/Row';

export default function TaskList({ tasks, deleteTask }) {
    return (
        <ul>
            {
                tasks.map(item => (
                    <Row key={item.id} item={item} deleteTask={deleteTask} />
                ))
            }
        </ul>
    );
}