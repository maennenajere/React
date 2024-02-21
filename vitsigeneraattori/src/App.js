import React, { useState, useEffect } from 'react';
import './App.css';

/*
 * App component that fetches jokes from the JokeAPI and displays them.
 *
 * On mount, fetches an initial joke using getJokeFirst.
 * Renders the current joke state (setup, delivery, joke).
 * Has a button to fetch a new joke using getJoke.
 *
 * State:
 * - setup - setup text for a two part joke
 * - delivery - delivery text for a two part joke
 * - joke - text for a single part joke
 *
 * Functions:
 * - getJokeFirst - fetches initial joke on mount
 * - getJoke - fetches a new joke on button click
 */
function App() {
	const [setup, setSetup] = useState('');
	const [delivery, setDelivery] = useState('');
	const [joke, setJoke] = useState('');

	useEffect(() => {
		const getJokeFirst = async () => {
			try {
				const response = await fetch(
					'https://v2.jokeapi.dev/joke/Any?safe-mode'
				);
				const data = await response.json();
				console.log(data);
				if (data.type === 'twopart') {
					setSetup(data.setup);
					setDelivery(data.delivery);
					setJoke('');
				} else if (data.type === 'single') {
					setJoke(data.joke);
					setSetup('');
					setDelivery('');
				}
			} catch (error) {
				console.log(error);
			}
		};
		getJokeFirst();
	}, []);

	const getJoke = async () => {
		try {
			const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
			const data = await response.json();
			console.log(data);
			if (data.type === 'twopart') {
				setSetup(data.setup);
				setDelivery(data.delivery);
				setJoke('');
			} else if (data.type === 'single') {
				setJoke(data.joke);
				setSetup('');
				setDelivery('');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<div className="wrapper">
					<span>&#129315;</span>
					<p>
						<div className="text">
							<h1 className="text" style={{ color: '#00bcd4' }}>
								{setup}
							</h1>
							<h1 className="text">{delivery}</h1>
							<h1 className="text">{joke}</h1>
						</div>
					</p>
					<button
						style={{
							backgroundColor: '#fab22e',
							color: 'black',
							border: 'none',
							padding: '10px',
							borderRadius: '5px',
							fontSize: '20px',
							cursor: 'pointer',
						}}
						onClick={getJoke}>
						Get Joke
					</button>
				</div>
			</header>
		</div>
	);
}
export default App;
