import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
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

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter City..." onChange={updateCity} class="form-input"></input>
          <button type="submit" class="btn btn-success">Search</button>
          <button type="submit" class="btn btn-primary">Current</button>
        </form>
        <h1>{weather.city}</h1>
        <div>Monday, 17:02</div>
        <div>{weather.description}</div>
        <div class="row currentWeather">
          <div class="col">
            <div>{Math.round(weather.temperature)}°C</div>
            <img src={weather.icon} alt={weather.description}/>
          </div>
          <div class="col">
            <div>Precipitation: {weather.humidity}%</div>
            <div>Wind: {weather.wind}km/h</div>
          </div>
        <div class="row forecast">
          <div class="col">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="col">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="col">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
