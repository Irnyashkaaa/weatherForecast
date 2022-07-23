import React from 'react'
import { InputForm } from './inputForm/inputForm'
import s from './mainBlock.module.css'
import { WeathersBlock } from './weathersBlock/weathersBlock'

export const MainBlock: React.FC = () => {
    return (
        <div className={s.mainBlock}>
            <InputForm />
            <WeathersBlock />
        </div>
    )
}