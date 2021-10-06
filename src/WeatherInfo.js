import React from "react";
import CurrentTime from "./CurrentTime";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <CurrentTime date={props.data.timestamp}/>
          <div>{props.data.description}</div>
          <div className="row">
              <div className="col-6">
                  <img src={props.data.icon} alt={props.data.description}/>
                  {Math.round(props.data.temperature)}°C
              </div>
              <div className="col-6">
                  <div>Precipitation: {props.data.humidity}%</div>
                  <div>Wind: {props.data.wind}km/h</div>
              </div>
          </div>
        </div>
    );
}