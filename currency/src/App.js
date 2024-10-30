import { useState } from 'react';
import './App.css';

function App() {
    const [eur, setEur] = useState('');
    const [gbp, setGbp] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const conversion = eur * 0.9;
        setGbp(conversion);
    }

  return (
    <div id={"container"}>
      <h3> Currency Calculator </h3>
        <form onSubmit={handleSubmit}>
        <div className={'field'}>
            <label>EUR</label>
          <input type='number' value={eur} onChange={e => setEur(e.target.value)} />
        </div>
        <div className={'field'}>
            <label>GBP</label>
          <output>{gbp.toFixed(2)}</output>
        </div>
            <div className={'field'}>
                <button>Calculate</button>
            </div>
      </form>
    </div>
  );
}

export default App;
