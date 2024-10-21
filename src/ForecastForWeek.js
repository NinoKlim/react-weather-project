import React, { useState, useEffect } from "react";

import axios from "axios";
import "./ForecastForWeek.css";
import ForecastDay from "./ForecastDay";

const ForecastForWeek = (props) => {
  const [loaded, setLoded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  function showWeekForecast(response) {
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
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let ApiKey = `017d56650cd168d68067850318775d43`;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(showWeekForecast);
    return null;
  }
};

export default ForecastForWeek;
