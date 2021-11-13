import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Searchpage({ submitSearch }) {
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    submitSearch(location);
    setLocation('');
    e.preventDefault();
  };

  return (
    <div className="search-page">
      <form>
        <input
          id="city_name"
          type="text"
          placeholder="Enter city name..."
          onChange={(e)=> setLocation(e.target.value)}
          value={location}
        />
        <button
          onClick={submitHandler}
          disabled={location === ""}
        >
          Search
        </button>
      </form>
    </div>
  );
}

Searchpage.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};
