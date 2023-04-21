import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import CurrentDate from "./CurrentDate";

const Weather = () => {
  // const [city, setCity] = useState({});

  // const apiToken = "cd734928f9329a";
  // const apiTokenUrl = `https://ipinfo.io/json?token=${apiToken}`;
  // axios.get(apiTokenUrl).then(getWeather);

  // function getWeather(cityValue) {
  //   setCity({ city: cityValue.data.city });
  // }

  const [weatherData, setWeatherData] = useState({ success: false });

  function handleSubmit(response) {
    console.log(response);
    setWeatherData({
      success: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.success) {
    return (
      <div className="Weather">
        <div className="row pb-3">
          <div className="col-sm-3 ">
            <div className="pb-2 header-small date-style">
              <CurrentDate date={weatherData.date} />
            </div>
            <div className="pb-3 header-uppercase">
              {" "}
              {weatherData.city},{" "}
              <span className="header-uppercase-second">
                {weatherData.country}
              </span>
            </div>
          </div>
          <div className="col-sm-3 header-small d-flex align-items-center justify-content-evenly ">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="weather"
              className="weather-icon"
            ></img>
            <div>
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </span>
              <span className="unit">°С</span>{" "}
            </div>
          </div>
          <div className="col-sm-4 ps-4 align-self-center">
            <div className="col-sm header-small weatherDescrip">
              {weatherData.description}
            </div>
            <div className="row header-small">
              <div className="col-sm-5">Humidity:</div>
              <div className="col-sm-6 humidity">{weatherData.humidity} %</div>
              <div className="w-100"></div>
              <div className="col-sm-5">Wind:</div>
              <div className="col-sm-6 wind">
                {Math.round(weatherData.wind)} km/h
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control cityInput"
                placeholder="Type a city"
                aria-describedby="button-addon1"
                autoFocus="on"
              ></input>
              <button
                type="submit"
                id="button-addon1"
                className="btn btn-outline-secondary cityButton "
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-evenly week-weather">
          <div className="col-1 week-icon-style">Mn</div>
          <div className="col-1 week-icon-style">Tu</div>
          <div className="col-1 week-icon-style">Wd</div>
          <div className="col-1 week-icon-style">Th</div>
          <div className="col-1 week-icon-style">Fra</div>
          <div className="col-1 week-icon-style">Sa</div>
          <div className="col-1 week-icon-style">Sn</div>
        </div>
      </div>
    );
  } else {
    const apiToken = "cd734928f9329a";
    const apiTokenUrl = `https://ipinfo.io/json?token=${apiToken}`;
    axios.get(apiTokenUrl).then(getWeather);

    function getWeather(cityValue) {
      defaultCity(cityValue.data.city);
    }
    function defaultCity(cityValue) {
      const ApiKey = "017d56650cd168d68067850318775d43";
      const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${ApiKey}&units=metric`;
      axios.get(ApiUrl).then(handleSubmit);
    }
    return "Loaded..";
  }
};
export default Weather;
