import React from "react";
import WeatherBody from "./Weatherbody";
import Searchpage from "./Searchpage";
import Loader from "./LoaderComponent/Loader";
import useForecast from "../Hooks/useForecast";
import SearchBar from "./Searchbar";

export default function Page() {
  const [isLoading, forecast, submitRequest] = useForecast();

  const onSubmit = (value) => {
    submitRequest({ value });
  };

  return (
    <div className="page">
      {forecast ? 
        <div>
          <SearchBar submitSearch={onSubmit}/>
          <WeatherBody forecast={forecast}/>
        </div>
        :
        <div>
          {isLoading ? <Loader /> : <Searchpage submitSearch={onSubmit} />}
        </div>
      }
    </div>
  );
}
