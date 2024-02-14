import React, { useState, useEffect } from 'react';
import './App.css';

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
            <div className="teksti">
              <h1 className="teksti" style={{ color: '#00bcd4' }}>
                {setup}
              </h1>
              <h1 className="teksti">{delivery}</h1>
              <h1 className="teksti">{joke}</h1>
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
