import React from "react";

export default function ForecastBody({day, date, temp, temp2, icon}) {
  return (
    <div className="forecast-body">
      <h5>
        {day} {date}
      </h5>
      <div className="forecast-weather-condition">
        <h5>{icon}</h5>
        <div className="forecast-weather-condition-temps">
          <h6>{temp}</h6>
          <h6>{temp2}</h6>
        </div>
      </div>
    </div>
  );
}
