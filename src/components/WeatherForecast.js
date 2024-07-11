import React, { useState } from 'react';

const WeatherForecast = () => {
  const [destination, setDestination] = useState('');
  const [weatherForecast, setWeatherForecast] = useState({});

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const fetchWeatherForecast = () => {
    const fetchedForecast = {
      date: '2024-07-25',
      temperature: '25°C',
      condition: 'Sunny',
    };
    setWeatherForecast(fetchedForecast);
  };

  return (
    <div>
      <h2>Check Weather Forecast</h2>
      <div>
        <label>
          Destination:
          <input type="text" value={destination} onChange={handleDestinationChange} />
        </label>
        <br />
        <button onClick={fetchWeatherForecast}>Fetch Forecast</button>
      </div>
      <div>
        <h3>Weather Forecast:</h3>
        {weatherForecast.date && (
          <div>
            <p>Date: {weatherForecast.date}</p>
            <p>Temperature: {weatherForecast.temperature}</p>
            <p>Condition: {weatherForecast.condition}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
