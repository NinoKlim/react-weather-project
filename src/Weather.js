import React from "react";
import "./Weather.css";

const Weather = () => {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6 pb-3 header-small">Tuesday, 11.04.2023</div>
        <div className="col-6 pb-3 header-small">
          <img
            src="data:image/png;base64,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"
            alt="weather"
            className="weather-icon"
          ></img>
          12 <span>°С</span>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-6 pb-3 header-uppercase">
          {" "}
          SEVASTOPOL, <span className="header-uppercase-second">UKRAINE</span>
        </div>
        <div className="col-6 pb-3 header-small">Tuesday, 11.04.2023 </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control cityInput"
              placeholder="Type a city"
              aria-describedby="button-addon1"
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
        <div className="col-6">Wind: 6km/h</div>
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
