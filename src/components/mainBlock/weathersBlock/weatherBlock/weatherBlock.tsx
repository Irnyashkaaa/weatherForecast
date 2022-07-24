import React from 'react'
import { currentWeatherType } from '../../../../App'
import s from './weatherBlock.module.css'

type weatherBlockType = {
    title: string
    thisBlockWeather?: currentWeatherType
}

export const WeatherBlock: React.FC<weatherBlockType> = ({ title, thisBlockWeather }) => {
    return (
        <div className={s.weatherBlock}>
            <div className={s.title}>
                {title}
                <div className={s.mainWeather}>
                    {thisBlockWeather?.weather[0].main}
                </div>
            </div>

            <div className={s.weatherBlockInfo}>
                <div className={s.currentTemperature}>
                    Temperature {thisBlockWeather?.main.temp}
                    <div className={s.feels_like}>
                        feels like: {thisBlockWeather?.main.feels_like}
                    </div>
                </div>

                <div className={s.weatherDescription}>
                    {thisBlockWeather?.weather[0].description}
                </div>
                <div className={s.temperature}>
                    <div className={s.temperatureItem}>(min) {thisBlockWeather?.main.temp_min}</div>
                    <div className={s.temperatureItem}>(max) {thisBlockWeather?.main.temp_max}</div>
                </div>
                <div className={s.wind}>
                    Wind speed: {thisBlockWeather?.wind.speed}
                </div>
            </div>
        </div>
    )
}