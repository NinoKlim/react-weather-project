import React, { useState, useEffect } from "react";

import axios from "axios";
import "./ForecastForWeek.css";
import ForecastDay from "./ForecastDay";

const ForecastForWeek = (props) => {
  const [loaded, setLoded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  function showWeekForecast(response) {
    console.log(response);
    setLoded(true);
    setDailyForecast(response.data.daily);
  }

  useEffect(() => {
    setLoded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="ForecastForWeek">
        <div className="row  week-weather">
          {dailyForecast.map(function (forecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm-2" key={index}>
                  <ForecastDay dayData={forecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    const ApiKey = "001bc651977f4b024af4d84282b0f02a";
    const ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(showWeekForecast);
    return null;
  }
};

export default ForecastForWeek;
