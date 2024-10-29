import { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import TaskForm from './Taskform';
import TaskList from './TaskList';
import { useUser } from "../context/useUser";

const url = 'http://localhost:3001';

// Home component
function Home() {
	const { user, logOut } = useUser();
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get(url)
			.then(response => {
				setTasks(response.data);
			}).catch(error => {
			alert(error.response.data.error ? error.response.data.error : error);
		});
	}, []);

	// add task to the list
	const addTask = () => {
		const headers = { headers: { Authorization: user.token } };

		axios.post(url + '/create', {
			description: task
		}, headers)
			.then(response => {
				setTasks([...tasks, { id: response.data.id, description: task }]);
				setTask('');
			}).catch(error => {
			alert(error.response.data.error ? error.response.data.error : error);
		});
	};

	// delete task from the list
	const deleteTask = (id) => {
		const headers = { headers: { Authorization: user.token } };

		axios.delete(url + '/delete/' + id, headers)
			.then(response => {
				const withoutRemoved = tasks.filter((item) => item.id !== id);
				setTasks(withoutRemoved);
			}).catch(error => {
			alert(error.response.data.error ? error.response.data.error : error);
		});
	};

	return (
		<div id="container">
			<button className="logout-button" onClick={logOut}>Log Out</button>
			<h3>Todos 📝</h3>
			<TaskForm task={task} setTask={setTask} addTask={addTask}/>
			<TaskList tasks={tasks} deleteTask={deleteTask}/>
		</div>
	);
}

export default Home;