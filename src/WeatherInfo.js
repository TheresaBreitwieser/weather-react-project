import React from "react";
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <CurrentTime date={props.data.timestamp}/>
          <div>{props.data.description}</div>
          <div className="row">
              <div className="col-6">
                  <WeatherIcon code={props.data.icon}/>
                  <WeatherTemperature celsius={Math.round(props.data.temperature)}/>
              </div>
              <div className="col-6">
                  <div>Precipitation: {props.data.humidity}%</div>
                  <div>Wind: {props.data.wind}km/h</div>
              </div>
          </div>
        </div>
    );
}