import React from 'react'

export const CountryCard = ({ date, cases}) => {
  return (
    <div className='card-container'>
        <div className='dummy-div'>s</div>
        <div className='data-container'>
        <label className='data-country'>Date: {date}</label>
        <label>Number of Confirmed cases: {cases}</label>
        </div>
    </div>
  )
}
