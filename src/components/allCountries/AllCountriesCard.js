import axios from "axios";
import React from "react";

export const AllCountriesCard = ({
  country,
  cases,
  date,
  death,
  recovered,
}) => {
  const handleAdd = async (country, date) => {
    console.log(country,date);
    const record = {
      country: country,
      date: date,
    };

    await axios
      .post(`${process.env.REACT_APP_LOCAL_SERVER}/records`,record)
      .then((resolve) => alert(resolve.data))
      .catch((rejected) => alert(rejected));
  };
  return (
    <div className="country-card-container">
      <div className="dummy">''</div>
      <div className="country-data-container">
        <label className="country-label">Country: {country}</label>
        <label>Total Confirmed cases: {cases}</label>
        <label>Total Deaths cases: {death}</label>
        <label>Total Recovered cases: {recovered}</label>
        <label className="date-label">Date: {date}</label>
        <button
          className="add-records"
          onClick={() => handleAdd(country, date)}
        >
          ADD TO MY RECORDS
        </button>
      </div>
    </div>
  );
};
