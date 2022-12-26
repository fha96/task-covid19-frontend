import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyRecord.css";

export const MyRecords = () => {
  const [myRecords, setMyRecords] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_LOCAL_SERVER}/records/${id}`)
      .then((resolve) => {
        setMyRecords((prev) => prev.filter((record) => record.id !== id));
        alert(resolve.data);
      })
      .catch((rejected) => alert(rejected));
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${process.env.REACT_APP_LOCAL_SERVER}/records`)
        .then((resolve) => setMyRecords(resolve.data))
        .catch((rejected) => console.log("error!"));
    };
    fetchData();
    console.log(1);
  }, []);
  return (
    <div className="main-record-container">
      <h2 className="record-heading">COVID19 Statics for All Countries</h2>
      <div className="my-records-holder">
        {myRecords.length ? 
        myRecords?.map((record) => {
          return (
            <div key={record.id} className="record-card-container">
              <div className="dummy1">''</div>
              <div className="record-data-container">
                <label className="record-label">
                  Country: {record.country}
                </label>
                <label className="date-record-label">Date: {record.date}</label>
                <button
                  className="delete-records"
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        }):
        <label className="no-record">No Available Records</label>
        }
      </div>
    </div>
  );
};
