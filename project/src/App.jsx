// App.jsx
import React from "react";
 import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
 import Forecast from "./components/Forecast/Forecast";
import "./App.css";


function App() {
  const loading = false;
  const error = false;

  const currentWeather = {
    city: "Lagos",
    temp: 28,
    description: "Sunny",
    humidity: 60,
    wind: 10,
  };

  const forecastData = [
    { day: "Mon", min: 18, max: 24, iconCode: "01d" },
    { day: "Tue", min: 20, max: 27, iconCode: "02d" },
    { day: "Wed", min: 19, max: 25, iconCode: "03d" },
    { day: "Thu", min: 17, max: 23, iconCode: "04d" },
    { day: "Fri", min: 21, max: 28, iconCode: "09d" },
  ];

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentWeather {...currentWeather} loading={loading} error={error} />
      <Forecast forecastData={forecastData} />
    </div>
  );
}

export default App;
