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
  let day = days[props.date.getDay()];
  let month = props.date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let date = props.date.getDate();
  let year = props.date.getFullYear();
  return (
    <div>
      {day}, {date}.{month}.{year}
    </div>
  );
};

export default CurrentDate;
