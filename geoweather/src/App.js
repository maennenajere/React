import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'YOUR_API_KEY';

function Weather({ latitude, longitude }) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const address = `${API_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

        console.log(address);

        axios.get(address)
            .then((response) => {
                console.log(response.data);
                setTemp(response.data.main.temp);
                setSpeed(response.data.wind.speed);
                setDirection(response.data.wind.deg);
                setDescription(response.data.weather[0].description);
                setIcon(`${ICON_URL}${response.data.weather[0].icon}@2x.png`);
                console.log(`${ICON_URL}${response.data.weather[0].icon}@2x.png`);
                setIsLoading(false);
            }).catch(error => {
            alert(error);
            setIsLoading(false);
        });
    }, [latitude, longitude]);

    if (isLoading) {
        return <p>Loading...</p>;
    } else {
        return (
            <>
                <h3>Weather on your location</h3>
                <p>{temp} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{description}</p>
                <img src={icon} alt='' />
            </>
        );
    }
}

function App() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setIsLoading(false);
            }, error => {
                setError(error.message);
                setIsLoading(false);
            });
        } else {
            setError("Geolocation is not supported by this browser.");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="content">
            <h3>Your position</h3>
            <p>
                {latitude.toFixed(3)},
                {longitude.toFixed(3)}
            </p>
            {error && <p>Error: {error}</p>}
            <Weather latitude={latitude} longitude={longitude} />
        </div>
    );
}

export default App;