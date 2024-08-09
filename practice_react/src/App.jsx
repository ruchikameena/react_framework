//rafce 

import React from 'react'
import "./component/WeatherCard.css"
import WeatherCard from './component/WeatherCard'

const App = () => {
  return (
      <>
      <WeatherCard
      location = {"china"}
      deg = {35}
      />
      <WeatherCard
      location = {"jaipur"}
      deg = {55}
      />
      </>
  )
}

export default App
