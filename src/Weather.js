import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherData from "./WeatherData";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({ success: false });
  const [city, setCity] = useState();

  function currentCity() {
    const apiToken = "cd734928f9329a";
    const apiTokenUrl = `https://ipinfo.io/json?token=${apiToken}`;
    axios.get(apiTokenUrl).then(getWeather);
  }

  function getWeather(cityValue) {
    searchCity(cityValue.data.city);
  }

  function searchCity(city) {
    const ApiKey = "017d56650cd168d68067850318775d43";
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponse);
  }

  function handleResponse(response) {
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
  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }
  function handleCity(cityValue) {
    setCity(cityValue.target.value);
  }
  if (weatherData.success) {
    return (
      <div>
        <WeatherData data={weatherData} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control cityInput"
                  placeholder="Type a city"
                  aria-describedby="button-addon1"
                  autoFocus="on"
                  onChange={handleCity}
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
        </form>
        {/* 
        <div className="row d-flex justify-content-evenly week-weather">
          <div className="col-1 week-icon-style">Mn</div>
          <div className="col-1 week-icon-style">Tu</div>
          <div className="col-1 week-icon-style">Wd</div>
          <div className="col-1 week-icon-style">Th</div>
          <div className="col-1 week-icon-style">Fra</div>
          <div className="col-1 week-icon-style">Sa</div>
          <div className="col-1 week-icon-style">Sn</div>
        </div> */}
      </div>
    );
  } else {
    currentCity();
    return "Loaded..";
  }
};
export default Weather;
