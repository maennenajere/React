import { useState } from 'react';
import './App.css';

// App component
function App() {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	// add task to the list
	const addTask = () => {
		setTasks([...tasks, task]);
		setTask('');
	};

	// delete task from the list
	const deleteTask = (deleted) => {
		const withoutRemoved = tasks.filter((item) => item !== deleted);
		setTasks(withoutRemoved);
	};

	return (
		<div id="container">
			<h3>Todos 📝</h3>
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
			<ul>
				{tasks.map((item) => (
					<li>
						{item}
						<button className="deleteButton" onClick={() => deleteTask(item)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
