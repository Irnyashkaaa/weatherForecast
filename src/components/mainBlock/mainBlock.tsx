import React from 'react'
import { currentWeatherType } from '../../App'
import { InputForm } from './inputForm/inputForm'
import s from './mainBlock.module.css'
import { WeatherBlock } from './weathersBlock/weatherBlock/weatherBlock'

type mainBlockType = {
    currentWeather: currentWeatherType
    todayWeather: currentWeatherType
    tomorrowWeather: currentWeatherType
    weekWeather: currentWeatherType
    currentCity: string
    setCurrentCity: (city: string) => void
}

export const MainBlock: React.FC<mainBlockType> = ({currentWeather, todayWeather, tomorrowWeather, weekWeather, currentCity, setCurrentCity}) => {
    debugger
    return (
        <div className={s.mainBlock}>
            <InputForm currentCity={currentCity} setCurrentCity={setCurrentCity}/>
            <div className={s.weathersBlock}>
                <WeatherBlock title='Now ' thisBlockWeather={currentWeather}/>
                <WeatherBlock title='today ' thisBlockWeather={todayWeather}/>
                <WeatherBlock title='Tomorrow ' thisBlockWeather={tomorrowWeather}/>
                <WeatherBlock title='This week ' thisBlockWeather={weekWeather}/>
            </div>
        </div>
    )
}