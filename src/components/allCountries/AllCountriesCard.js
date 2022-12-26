import React from 'react'

export const AllCountriesCard = ({country, cases, date, death, recovered}) => {
  return (
    <div className='country-card-container'>
        <div className='dummy'>''</div>
        <div className='country-data-container'>
        <label className='country-label'>Country: {country}</label>
        <label >Total Confirmed cases: { cases }</label>
        <label >Total Deaths cases: {death}</label>
        <label >Total Recovered cases: {recovered}</label>
        <label className='date-label' >Date: {date}</label>
        <button className='add-records'>ADD TO MY RECORDS</button>
        </div>
    </div>
  )
}
