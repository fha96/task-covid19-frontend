import React,{useContext} from 'react'
import { StaticsCards } from './StaticsCards'
import './Home.css'
import { StaticsCountry } from './StaticsCountry'
import {CountryCard} from './CountryCard'
import {SearchContext} from '../context/SearchContext'
export const Home = () => {
  const {records} = useContext(SearchContext)
  return (
    <div>
        <StaticsCards />
        <StaticsCountry />
        {
          records &&
          <CountryCard  />  
        }
    </div>
  )
}
