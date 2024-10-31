import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, error => {
        setError(error.message);
      });
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
      <div>
        <p>
          Position: <br/>
          {latitude.toFixed(3)},
          {longitude.toFixed(3)}
        </p>
        {error && <p>Error: {error}</p>}
      </div>
  );
}

export default App;