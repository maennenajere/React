import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
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
	const [jokeData, setJokeData] = useState({
		setup: '',
		delivery: '',
		joke: ''
	});

	const fetchJoke = async () => {
		try {
			const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
			const data = await response.json();

			setJokeData({
				setup: data.type === 'twopart' ? data.setup : '',
				delivery: data.type === 'twopart' ? data.delivery : '',
				joke: data.type === 'single' ? data.joke : ''
			});
		} catch (error) {
			console.error('Error fetching joke:', error);
		}
	};

	// Fetch initial joke on component mount
	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className="wrapper">
					<span>&#129315;</span>
					<div className="text">
						{jokeData.setup && (
							<h1 className="text" style={{color: '#00bcd4'}}>
								{jokeData.setup}
							</h1>
						)}
						{jokeData.delivery && (
							<h1 className="text">{jokeData.delivery}</h1>
						)}
						{jokeData.joke && (
							<h1 className="text">{jokeData.joke}</h1>
						)}
					</div>
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
						onClick={fetchJoke}
					>
						Get Joke
					</button>
				</div>
			</header>

			<Analytics />
			<SpeedInsights />

			<footer className="App-footer" />
		</div>
	);
}

export default App;