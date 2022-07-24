import React from 'react'
import { currentWeatherType } from '../../App'
import { InputForm } from './inputForm/inputForm'
import s from './mainBlock.module.css'
import { WeatherBlock } from './weathersBlock/weatherBlock/weatherBlock'

type mainBlockType = {
    currentWeather: currentWeatherType
}

export const MainBlock: React.FC<mainBlockType> = ({currentWeather}) => {
    return (
        <div className={s.mainBlock}>
            <InputForm />
            <div className={s.weathersBlock}>
                <WeatherBlock title='Now' thisBlockWeather={currentWeather}/>
                <WeatherBlock title='today' />
                <WeatherBlock title='Tomorrow'/>
                <WeatherBlock title='This week'/>
            </div>
        </div>
    )
}