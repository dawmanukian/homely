import React from 'react'
import './login-reg.css'
import LoginForm from '../../components/login-form/LoginForm'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginRegPage = () => {
  return (
    <div className='login-reg-page'>
        <Link to={'/'}>
            <button className='back-btn'>
                <FaArrowLeftLong />
            </button>
        </Link>
        <div className='page-img'>
        </div>
        <LoginForm />
    </div>
  )
}

export default LoginRegPage