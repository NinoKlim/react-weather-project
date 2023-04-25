import React, { useState } from "react";

import axios from "axios";
import "./ForecastForWeek.css";

const ForecastForWeek = (props) => {
  const [loaded, setLoded] = useState(false);
  function showWeekForecast(response) {
    console.log(response);
    setLoded(true);
  }
  if (loaded) {
    return (
      <div className="ForecastForWeek">
        <div className="row d-flex justify-content-evenly week-weather">
          <div className="week-icon-style">Mn</div>
          <div>Mn</div>
          <div>Mn</div>
        </div>
      </div>
    );
  } else {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    const ApiKey = "017d56650cd168d68067850318775d43";
    const ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(showWeekForecast);
    return null;
  }
};

export default ForecastForWeek;
