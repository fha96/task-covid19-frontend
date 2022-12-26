import React, { useEffect, useState } from "react";
import { AllCountriesCard } from "./AllCountriesCard";
import "./AllCountries.css";
import axios from "axios";

export const AllCountries = () => {
  const [summery, setSummery] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ALL_COUNTRIES)
      .then((resolve) => {
        console.log(resolve.data.Countries);
        setSummery(resolve.data.Countries);
        setErrorMsg("");
      })
      .catch((rejected) => setErrorMsg("No data!"));
  }, []);
  return (
    <div>
      <h2 className="all-heading">COVID19 Statics for All countries</h2>
      <div className="summery-holder">
        {summery.length ? (
          summery.map((item, index) => (
            <AllCountriesCard
              key={index}
              country={item.Country}
              cases={item.TotalConfirmed}
              death={item.TotalDeaths}
              recovered={item.TotalRecovered}
              date={item.Date}
            />
          ))
        ) : (
          <label className="error-message">{errorMsg}</label>
        )}
      </div>
    </div>
  );
};
