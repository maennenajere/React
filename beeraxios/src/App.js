import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const URL = 'https://random-data-api.com/api/v2/beers';

function App() {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');

    useEffect(() => {
        axios.get(URL)
            .then((res) => {
                console.log(res.data);
                setBrand(res.data.brand);
                setName(res.data.name);
                setStyle(res.data.style);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    return (
        <div style={{ margin: "50px" }}>
            <h1>Randomly selected beer</h1>
            <p><b>Brand:</b> {brand}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Style:</b> {style}</p>
        </div>
    );
}

export default App;