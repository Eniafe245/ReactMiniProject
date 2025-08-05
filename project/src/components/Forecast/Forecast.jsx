import React from "react";
import "./Forecast.css";

const iconMap = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "☔️",
};

const Forecast = ({ forecastData }) => {
  return (
    <div className="forecast-container">
      {forecastData.map((day, index) => (
        <div key={index} className="forecast-card">
          <h4>{day.day}</h4>
          <p>{day.min}°C–{day.max}°C</p>
          <span className="icon">{iconMap[day.iconCode]}</span>
        </div>
      ))}
    </div>
  );
};

export default Forecast;