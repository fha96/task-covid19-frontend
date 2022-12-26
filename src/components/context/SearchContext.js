import axios from "axios";
import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    let data = {
      country: e.target.country.value,
      fromDate: e.target.fromDate.value,
      toDate: e.target.toDate.value,
    };

    axios
      .get(
        `https://api.covid19api.com/country/${data.country}/status/confirmed?from=${data.fromDate}&to=${data.toDate}`
      )
      .then((resolve) => setRecords(resolve.data))
      .catch((rejected) => setRecords(rejected));
  };

  const value = {
    records,
    setRecords,
    handleSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
