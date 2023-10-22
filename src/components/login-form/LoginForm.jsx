import React from 'react'
import './login-form.css'
import { FaFacebook, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { useForm } from 'react-hook-form';

const LoginForm = ({switchForm}) => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div className='login-form'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Մուտք գործել</h2>
            <div className='lg-inpt'>
                <IoMail className='login-icon'/>
                <input type='text' placeholder='Էլ․ հասցե' className='login-inpt'
                {...register('email', { 
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    }
                })}
                />
            </div>
            <div className='lg-inpt'>
                <FaLock className='login-icon'/>
                <input type='password' placeholder='Գաղտնաբառ' className='login-inpt'
                {...register('password', { required: true })}
                style={errors.password && {border: '1px solid #E64646FF', outline: 'none', background: '#faebeb'}}
                />
            </div>
            <button className='login-btn' type='submit'>Մուտք</button>
            <span className='forgot-password'>Մոռացել եմ գաղտնաբառը</span>
            <div className='social-links'>
                <div className='social-link'>
                    <FcGoogle />
                    <span>Gmail</span>
                </div>
                {/* <div className='social-link fa'>
                    <FaFacebook />
                </div> */}
            </div>
            <div>
                <span style={{color: '#9E9E9EFF'}}>Դեռ չունեք օգտանուն ? <span style={{color: '#246BFDFF', cursor: 'pointer'}} onClick={() => switchForm()}>Գրանցվել</span></span>
            </div>
        </form>
    </div>
  )
}

export default LoginForm