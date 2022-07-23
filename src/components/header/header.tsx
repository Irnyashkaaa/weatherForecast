import React from 'react'
import { currentWeatherType } from '../../App'
import s from './header.module.css'

type propsType = {
    initWeather: currentWeatherType
}
export const Header: React.FC<propsType> = ({ initWeather }) => {
    return (
        <div className={s.header}>
            <div>
                {initWeather.name}
            </div>
            <div>
                {initWeather.sys.country}
            </div>
        </div>
    )
}