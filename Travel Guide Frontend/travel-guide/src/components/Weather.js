import React, { useState } from "react";

function Weather({ setLocation }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const API_KEY = "9f62ada4458337c8090427bcadd88a95";

  const fetchWeather = async () => {
    if (!city) return; 
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();
      setWeatherData(data);

      if (data.coord) {
        setLocation({ lat: data.coord.lat, lng: data.coord.lon });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetchWeather(); 
  };

  const handleCityChange = (e) => {
    setCity(e.target.value); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="controls">
        <div className="align">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter City"
            required
          />
          <button type="submit">Get Weather</button>
        </div>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {weatherData && (
        <div>
          <h1>Weather in {weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
