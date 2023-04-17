import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <div className="row pb-3">
        <div className="col-4 ">
          <div className="pb-3 header-small">Tuesday, 11.04.2023</div>
          <div className="pb-3 header-uppercase">
            {" "}
            SEVASTOPOL, <span className="header-uppercase-second">UKRAINE</span>
          </div>
        </div>
        <div className="col-3 header-small d-flex align-items-center justify-content-evenly ">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather"
            className="weather-icon"
          ></img>
          <div>
            <span className="temperature">12</span>
            <span className="unit">°С</span>{" "}
          </div>
        </div>
        <div className="col-4 align-self-center">
          <div className="row header-small">
            <div className="col-3">Humidity:</div>
            <div className="col-9 humidity">30%</div>
            <div className="col-3">Wind:</div>
            <div className="col-9 wind">6km/h</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
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
};
export default Weather;
