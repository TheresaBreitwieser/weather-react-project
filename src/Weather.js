import React, { useState } from "react";
import axios from "axios";
import CurrentTime from "./CurrentTime";
import "./Weather.css";

export default function Weather (props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({loaded: false});

  function displayWeather(response) {
    setWeather({
      city : response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      timestamp: new Date(response.data.dt*1000),
      loaded: true
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
  if (weather.loaded) {
    return(
      <div className="Weather">
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
          <CurrentTime date={weather.timestamp}/>
          <div>{weather.description}</div>
          <div className="row">
              <div className="col-6">
                  <img src={weather.icon} alt={weather.description}/>
                  {Math.round(weather.temperature)}°C
              </div>
              <div className="col-6">
                  <div>Precipitation: {weather.humidity}%</div>
                  <div>Wind: {weather.wind}km/h</div>
              </div>
          </div>
      </div>
  );
  }
  else {
    return(
      <div className="Weather">
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
      </div>
    );
  }
}