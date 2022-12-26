import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AllCountries } from '../allCountries/AllCountries'
import { Home } from '../home/Home'
import { MyRecords } from '../myRecords/MyRecords'

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allcountries' element={<AllCountries />} />
        <Route path='/myrecords' element={<MyRecords />} />
      </Routes>
    </div>
  )
}
