import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [joke, setJoke] = useState("");


  useEffect(() => {
    const haeVitsiAlussa = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
        const data = await response.json();
        console.log(data);
        if (data.type === "twopart") {
          setSetup(data.setup);
          setDelivery(data.delivery);
          setJoke('');
        } else if (data.type === "single") {
          setJoke(data.joke);
          setSetup('');
          setDelivery('');
        }
      } catch (error) {
        console.log(error);
      }
    };
    haeVitsiAlussa();
  }, []);

  const haeVitsi = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
      const data = await response.json();
      console.log(data);
      if (data.type === "twopart") {
        setSetup(data.setup);
        setDelivery(data.delivery);
        setJoke('');
      } else if (data.type === "single") {
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
        <button style={{
          backgroundColor: '#00bcd4',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '20px',
          cursor: 'pointer'
        }} onClick={haeVitsi}>Hae vitsi</button>
        <div className='teksti'>
          <h1 className='teksti' style={{ color: '#00bcd4' }}>{setup}</h1>
          <h1 className='teksti'>{delivery}</h1>
          <h1 className='teksti'>{joke}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
