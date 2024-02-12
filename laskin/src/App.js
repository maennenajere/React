import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [tulos, setTulos] = useState();
  const minus = () => {
    setTulos(numero1 - numero2);
  }
  const plus = () => {
    const parsedNumero1 = parseInt(numero1);
    const parsedNumero2 = parseInt(numero2);
    setTulos(parsedNumero1 + parsedNumero2);
  }
  return (
    <div>
      <h1>Laskin</h1>
      <form>
        <label>
          Numero 1:
          <input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </label>
      </form>
      <form>
        <label>
          Numero 2:
          <input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </label>
      </form>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <p>Tulos: {tulos}</p>
    </div>
  );
}
export default App;
