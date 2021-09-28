import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather () {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      city : response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  
  function updateCity(event) {
    setCity(event.target.value);
  }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <input type="text" placeholder="Enter City..." onChange={updateCity} className="form-control" />
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-success col-3">Search</button>
                        <button type="submit" className="btn btn-primary col-3">Current</button>
                    </div>
               </div>
             </form>
            <h1>{weather.city}</h1>
            <div>Monday, 17:02</div>
            <div>{weather.description}</div>
            <div className="row">
                <div className="col-6">
                    <div>{Math.round(weather.temperature)}°C</div>
                    <img src={weather.icon} alt={weather.description}/>
                </div>
                <div class="col-6">
                    <div>Precipitation: {weather.humidity}%</div>
                    <div>Wind: {weather.wind}km/h</div>
                </div>
            </div>
        </div>
    );
}