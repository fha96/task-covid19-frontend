import React,{useContext} from 'react'
import { StaticsCards } from './StaticsCards'
import './Home.css'
import { StaticsCountry } from './StaticsCountry'
import {CountryCard} from './CountryCard'
import {SearchContext} from '../context/SearchContext'
export const Home = () => {
  const {records, errMsg} = useContext(SearchContext)
  return (
    <div className='main-home-container'>
        <StaticsCards />
        <StaticsCountry />
        <div className='card-holder'>
        {
          records.length ? 
          records.map((item, index)=>
             <CountryCard key={index} date={item.Date} cases={item.Cases} />
             )
             
             : 
             <div className='error-container'>
             <label className='error-message'>{errMsg}</label>
            </div>
        }
        </div>
    </div>
  )
}
