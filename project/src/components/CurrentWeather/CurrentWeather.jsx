// src/components/CurrentWeather/CurrentWeather.jsx
import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ city, temp, description, humidity, wind, loading, error }) => {
  if (loading) return <p>Loading current weather...</p>;
  if (error) return <p>Could not load current weather.</p>;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <h3>{temp}°C ☀️</h3>
      <p>{description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind} km/h</p>
    </div>
  );
};

export default CurrentWeather;  