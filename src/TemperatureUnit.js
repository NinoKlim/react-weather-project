import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("metric");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div>
        <span className="temperature"> {Math.round(props.metric)} </span>
        <span className="unit">
          °С |{" "}
          <a href="/" onClick={showImperial}>
            °F
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    let imperial = (props.metric * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature"> {Math.round(imperial)} </span>
        <span className="unit">
          <a href="/" onClick={showMetric}>
            °С
          </a>
          | °F{" "}
        </span>
      </div>
    );
  }
}
