import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const StaticsCountry = () => {
    const {handleSearch} = useContext(SearchContext);
    return (
    <div className="mid-home-container">
      <h3 className="country-heading">Get Statics for a specific country</h3>
      <div className="from-container">
        <form className="country-form" onSubmit={handleSearch}>
          <input required className="text-input" id='country' type="text" placeholder="Country" />
          <input required className="text-input" id="fromDate" type="date" />
          <input required className="text-input" id='toDate' type="date" />
          <button className="search-country">Search</button>
        </form>
      </div>
    </div>
  );
};
