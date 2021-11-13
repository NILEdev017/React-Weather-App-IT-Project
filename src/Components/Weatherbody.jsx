import React from "react";
import ForecastBody from "./ForecastBody";
import "../styles.css";
import cloudyImg from '../images/lucie-morel-Wk63a3_NMf0-unsplash.jpg';
import fogImg from '../images/ricardo-gomez-angel-jg4pkrwaico-unsplash.jpg';
import clearImg from '../images/ritam-baishya-ROVBDer29PQ-unsplash.jpg';
import sunnyImg from '../images/jeremy-bishop-kkvpiveljmg-unsplash.jpg';
import rainyImg from '../images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg';

export default function WeatherBody({ forecast }) {
  let place_name = forecast.weather_data.location.name;
  let country_name = forecast.weather_data.location.country;

  let current_icon = forecast.weather_data.current.condition.icon;
  let current_temp = forecast.weather_data.current.temp_c;
  let current_condition = forecast.weather_data.current.condition.text;

  const weather_background = {
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    color: "",
  };

  if (
    current_condition.toLowerCase().includes("cloudy") ||
    current_condition.toLowerCase().includes("overcast")
  ) {
    weather_background.backgroundImage = `url(${cloudyImg})`;
    weather_background.color = "white";
  } else if (
    current_condition.toLowerCase().includes("mist") ||
    current_condition.toLowerCase().includes("fog")
  ) {
    weather_background.backgroundImage = `url(${fogImg})`;
  } else if (current_condition.toLowerCase().includes("clear")) {
    weather_background.backgroundImage = `url(${clearImg})`;
  } else if (current_condition.toLowerCase().includes("sunny")) {
    weather_background.backgroundImage = `url(${sunnyImg})`;
    weather_background.color = "white";
  } else if (current_condition.toLowerCase().includes("rain")) {
    weather_background.backgroundImage = `url(${rainyImg})`;
    weather_background.color = "white";
  }

  let tomorrow_date = forecast.weather_data.forecast.forecastday[1].date;
  let tomorrow_icon =
    forecast.weather_data.forecast.forecastday[1].day.condition.icon;
  let tomorrow_temp =
    forecast.weather_data.forecast.forecastday[1].day.avgtemp_c;
  let tomorrow_temp_f =
    forecast.weather_data.forecast.forecastday[1].day.avgtemp_f;

  let overmorrow_date = forecast.weather_data.forecast.forecastday[2].date;
  let overmorrow_icon =
    forecast.weather_data.forecast.forecastday[2].day.condition.icon;
  let overmorrow_temp =
    forecast.weather_data.forecast.forecastday[2].day.avgtemp_c;
  let overmorrow_temp_f =
    forecast.weather_data.forecast.forecastday[2].day.avgtemp_f;

  let wind_speed = forecast.weather_data.current.wind_kph;
  let humidity = forecast.weather_data.current.humidity;
  let pressure = forecast.weather_data.current.pressure_mb;
  let visibility = forecast.weather_data.current.vis_km;

  return (
    <div>
      <div className="everything">
        <div className="main-body">
          <div className="top">
            <div className="current-weather">
              <div className="current-weather-main">
                <div className="weather-text">
                  <h2 id="text-weather">WEATHER</h2>
                  <h2 id="text-weather2">FORECAST</h2>
                </div>
                <div className="current-weather-inside">
                  <div>
                    <h4>CURRENT WEATHER</h4>
                    <h3>{`${place_name}, ${country_name}`}</h3>
                    <div className="current-weather-main-components">
                      <div className="current-weather-main-1">
                        <h2>{<img src={current_icon} alt="icon" />}</h2>
                        <h2>{`${current_temp}°C`}</h2>
                      </div>

                      <div className="current-weather-main-2">
                        <h4>{current_condition}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* The second error was from here. Not setting the style to weather_background */}
              <div
                style={weather_background}
                className="current-weather-secondary"
              >
                <div className="weather-tid-bits-row">
                  <div className="weather-tid-bits">
                    <h2>WIND SPEED</h2>
                    <hr />
                    <h4>{wind_speed} KM/H</h4>
                  </div>

                  <div className="weather-tid-bits">
                    <h2>HUMIDITY</h2>
                    <hr />
                    <h4>{humidity}</h4>
                  </div>
                </div>

                <div className="weather-tid-bits-row">
                  <div className="weather-tid-bits">
                    <h2>PRESSURE</h2>
                    <hr />
                    <h4>{pressure} Millibars</h4>
                  </div>

                  <div className="weather-tid-bits">
                    <h2>VISIBILITY</h2>
                    <hr />
                    <h4>{visibility} KM</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-weather">
            <div className="weather-column">
              <ForecastBody
                day={tomorrow_date}
                temp={`${tomorrow_temp}°C`}
                temp2={`${tomorrow_temp_f}°F`}
                icon={<img src={tomorrow_icon} alt="icon" />}
              />
              <ForecastBody
                day={overmorrow_date}
                temp={`${overmorrow_temp}°C`}
                temp2={`${overmorrow_temp_f}°F`}
                icon={<img src={overmorrow_icon} alt="icon" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
