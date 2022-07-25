import { Button, Tooltip } from 'antd'
import { Formik } from 'formik'
import React from 'react'
import s from '../mainBlock.module.css'
import { SearchOutlined } from '@ant-design/icons';

type propsType = {
    setCurrentCity: (city: string) => void
    currentCity: string
}

export const InputForm: React.FC<propsType> = ({ currentCity, setCurrentCity }) => {

    return (
        <div className={s.form}>
            <Formik
                initialValues={{ city: '' }}
                onSubmit={(values) => {
                    setCurrentCity(values.city)
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            name="city"
                            onChange={handleChange}
                            value={values.city}
                            className={s.formInput}
                        />
                        <Tooltip title="">
                            <Button className={s.formButton} icon={<SearchOutlined />} size="large" shape="circle" />
                        </Tooltip>

                    </form>
                )}
            </Formik>
        </div>
    )
}