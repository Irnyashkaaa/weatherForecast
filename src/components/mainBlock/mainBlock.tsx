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
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.48246544447!2d23.942195833904684!3d49.8327786773887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1658833836412!5m2!1suk!2sua"
            width="600" height="450"></iframe>
        </div>
    )
}