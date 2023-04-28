import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

const ForecastDay = (props) => {
  function dayTemp() {
    let dayTemperature = Math.round(props.dayData.temp.day);
    return `${dayTemperature}°`;
  }
  function nightTemp() {
    let nightTemperature = Math.round(props.dayData.temp.night);
    return `${nightTemperature}°`;
  }

  function forecastDate() {
    let dailyDate = new Date(props.dayData.dt * 1000);
    let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    let day = days[dailyDate.getDay()];
    // if (day <= 7) {
    //   day = days[dailyDate.getDay() + 1];
    // }
    return day;
  }

  return (
    <div className="ForecastDay">
      <div className="row justify-content-center pb-2">
        <div className="week-icon-style">{forecastDate()}</div>
      </div>
      <div>
        <WeatherIcon code={props.dayData.weather[0].icon} size={36} />
      </div>
      <div className="daily-temp-night">
        <span className="day-temp">{dayTemp()} </span> |{" "}
        <span className="night-temp">{nightTemp()}</span>
      </div>
    </div>
  );
};
export default ForecastDay;
