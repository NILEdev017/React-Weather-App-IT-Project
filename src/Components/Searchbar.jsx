import React, { useState } from "react";

export default function SearchBar({ submitSearch }) {
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    submitSearch(location);
    setLocation("");
  };

  return (
    <header className="searchbar">
      <div>
        <input
          type="text"
          placeholder="Enter city name..."
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
        
        <button 
          onClick={submitHandler}
          disabled={location === ""}
        >
          Search
        </button>
      </div>
    </header>
  );
}
