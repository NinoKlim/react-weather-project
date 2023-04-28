import React from "react";

const CurrentDate = (props) => {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.dataDate.getDay()];
  let month = props.dataDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let date = props.dataDate.getDate();
  let year = props.dataDate.getFullYear();
  return (
    <div>
      {day}, {date}.{month}.{year}
    </div>
  );
};

export default CurrentDate;
