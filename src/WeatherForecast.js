import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function displayForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);

    if (loaded) {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if(index < 5) {
                            return(
                              <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast}/>
                        </div>
                        );
                    }
                    else{
                        return(null);
                    }})}   
                 </div>
            </div>
        );
    }
    else {
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayForecast);

        return(
            <div>Loading...</div>
        );
    }
    
}