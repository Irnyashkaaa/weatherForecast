import React from "react";
import { WeatherBlock } from "./weatherBlock/weatherBlock";
import s from '../mainBlock.module.css'
export const WeathersBlock: React.FC = () => {
    return (
        <div className={s.weathersBlock}>
            <WeatherBlock />
            <WeatherBlock />
            <WeatherBlock />
            <WeatherBlock />
        </div>
    )
}