import React, { useEffect, useState } from 'react';
import './form.css'
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {

    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type="text" 
                placeholder='Страна'
                value={country}
                onChange={onChangeCountry}
            />

            <input 
                className={'input'} 
                type="text" 
                placeholder='Улица'
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физическое лицо</option>
                <option value={'legal'}>Юридическое лицо</option>
            </select>
        </div>
    )
}

export default Form