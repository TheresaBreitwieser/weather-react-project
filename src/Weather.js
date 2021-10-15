import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather (props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({loaded: false});

  function displayWeather(response) {
    setWeather({
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      timestamp: new Date(response.data.dt*1000),
      loaded: true
    });
  }

  function search() {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
                  </div>
             </div>
           </form>
           <WeatherInfo data={weather}/>
           <WeatherForecast coordinates={weather.coordinates}/>
      </div>
  );
  }
  else {
    search();
    return(
      <div>Loading</div>
    );
  }
}

