import { useState } from "react";
import axios from "axios";

const apiKey = "1eda729bb7c44997a3a01100213110";

const useForecast = () => {
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async (location) => {
    try {
      const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location.value}&days=3&aqi=no&alerts=no
      `;
      const { data } = await axios(API_URL);
      const weather_data = data;
      setLoading(true);

      setForecast({ weather_data });
      setLoading(false);

    } catch (error) {
      alert(error + ", there is no such location, please try again!");
      setLoading(false);
    }
  };

  return [isLoading, forecast, submitRequest];
};

export default useForecast;
