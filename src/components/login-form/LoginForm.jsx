import React from 'react'
import './login-form.css'
import { FaFacebook, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";

const LoginForm = () => {
  return (
    <div className='login-form'>
        <form>
            <h2>Մուտք գործել</h2>
            <div className='lg-inpt'>
                <IoMail className='login-icon'/>
                <input type='email' placeholder='Էլ․ հասցե' className='login-inpt'/>
            </div>
            <div className='lg-inpt'>
                <FaLock className='login-icon'/>
                <input type='password' placeholder='Գաղտնաբառ' className='login-inpt'/>
            </div>
            <button className='login-btn'>Մուտք</button>
            <span className='forgot-password'>Մոռացել եմ գաղտնաբառը</span>
            <div className='social-links'>
                <div className='social-link'>
                    <FcGoogle />
                </div>
                <div className='social-link fa'>
                    <FaFacebook />
                </div>
            </div>
            <div>
                <span style={{color: '#9E9E9EFF'}}>Դեռ չունեք օգտանուն ? <span style={{color: '#246BFDFF', cursor: 'pointer'}}>Գրանցվել</span></span>
            </div>
        </form>
    </div>
  )
}

export default LoginForm