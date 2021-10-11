import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    console.log(props.data);
    function maxTemp() {
        let maxTemp = Math.round(props.data.temp.max);
        return `${maxTemp}°C`;
    }

    function minTemp() {
        let minTemp = Math.round(props.data.temp.min);
        return `${minTemp}°C`;
    }

    function day() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days= ["sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

        return days[day];
    }

    return(
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{maxTemp()}°</span>
                <span className="WeatherForecast-temperature-min">{minTemp()}°</span>
            </div>
        </div>
        
    );
}