import React from 'react'
import {useForm} from 'react-hook-form'
import { IoMail } from "react-icons/io5";
import './recover-form.css'
import { Link } from 'react-router-dom'

const RecoverForm = () => {

    const {handleSubmit, register, formState: {errors}} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

  return (
    <div className='recover-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Վերականգնել օգտանունը</h2>
            <div className="rec-inpt">
                <IoMail className="email-icon" />
                <input placeholder='Էլ․ հասցե' {...register('recover-email', {required: true})} className='recover-inpt'/>
            </div>
            <button className='recover-btn'>Ուղարկել</button>
            <Link to={'/auth'}>Մուտք գործել</Link>
        </form>
    </div>
  )
}

export default RecoverForm