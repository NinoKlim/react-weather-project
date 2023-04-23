import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";

const WeatherData = (props) => {
  return (
    <div className="WeatherData">
      <div className="Weather">
        <div className="row pb-3">
          <div className="col-sm-3 ">
            <div className="pb-2 header-small date-style">
              <CurrentDate date={props.data.date} />
            </div>
            <div className="pb-3 header-uppercase">
              {" "}
              {props.data.city},{" "}
              <span className="header-uppercase-second">
                {props.data.country}
              </span>
            </div>
          </div>
          <div className="col-sm-3  d-flex align-items-center justify-content-evenly ">
            <div className="weather-icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="header-small">
              <TemperatureUnit metric={props.data.temperature} />
            </div>
          </div>
          <div className="col-sm-4 ps-4 align-self-center">
            <div className="col-sm header-small weatherDescrip">
              {props.data.description}
            </div>
            <div className="row header-small">
              <div className="col-sm-5">Humidity:</div>
              <div className="col-sm-6 humidity">{props.data.humidity} %</div>
              <div className="w-100"></div>
              <div className="col-sm-5">Wind:</div>
              <div className="col-sm-6 wind">
                {Math.round(props.data.wind)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherData;
