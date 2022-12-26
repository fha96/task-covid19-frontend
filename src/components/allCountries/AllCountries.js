import React, { useEffect, useState } from "react";
import { AllCountriesCard } from "./AllCountriesCard";
import "./AllCountries.css";
import axios from "axios";

export const AllCountries = () => {
  const [summery, setSummery] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      await axios
        .get(process.env.REACT_APP_ALL_COUNTRIES)
        .then((resolve) => {
          if(resolve.data.Countries){
            setSummery(resolve.data.Countries);
            setErrorMsg({});
          }else {
            setErrorMsg(resolve.data.Message);
          }
        })
        .catch((rejected) => console.log('no data'));
    }
    fetchData();
  }, []);
  return (
    <div className="allcountries-main-container">
      <h2 className="all-heading">COVID19 Statics for All countries</h2>
      <div className="summery-holder">
        {summery?.length ? (
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
          <label className="error-message-countries">{errorMsg}!</label>
        )}
      </div>
    </div>
  );
};
