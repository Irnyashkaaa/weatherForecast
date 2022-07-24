import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { MainBlock } from './components/mainBlock/mainBlock';

export type currentWeatherType = {
  coord?:{
     lon: number,
     lat: number
  },
  weather:[
     {
        id?: number,
        main: string,
        description: string,
        icon?: string
     }
  ],
  base?: string,
  main: {
     temp: number,
     feels_like: number,
     temp_min: number,
     temp_max: number,
     pressure?: number,
     humidity?: number,
     sea_level?: number,
     grnd_level?: number
  },
  visibility?: number,
  wind:{
     speed: number,
     deg?: number,
     gust?: number
  },
  clouds?:{
     all: number
  },
  dt?: number,
  sys:{
     country: string,
     sunrise: number,
     sunset: number
  },
  timezone?: number,
  id?: number,
  name: string,
  cod?: number
}


const App: React.FC = () => {

  const initWeather: currentWeatherType = {
    weather: [
      {
        main: 'none',
        description: 'none'
      }
    ],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0
    },
    wind: {
      speed: 0
    },
    sys: {
      country: 'Loading...',
      sunrise: 0,
      sunset: 0
    },
    name: 'Loading...'
  }

  const [currentWeather, setCurrentWeather] = useState<currentWeatherType>(initWeather)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=0b2f7cf9f1b1ce9cf33928cfb6802061&units=metric`)
    .then (response => {
      setCurrentWeather(response.data)
    })
  }, [])

  return (
    <div className="App">
      <Header initWeather={currentWeather}/>
      <MainBlock currentWeather={currentWeather}/>
    </div>
  );
}

export default App;
