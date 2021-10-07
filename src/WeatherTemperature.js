import React, { useState} from "react";

export default function WeatherTemperature(props) {
    const[unit, setUnit] = useState("celsius");

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (unit === "celsius") {
        return(
        <span className="WeatherTemperature">
            {props.celsius}°C<a href="/" onClick={showFahrenheit}>| F</a>
        </span>
    );
    }
    else {
        return(
                <span className="WeatherTemperature">
                    {(props.celsius*9/5)+32}<a href="/" onClick={showCelsius}>°C</a>|F
                </span>
        );
    }
    
}