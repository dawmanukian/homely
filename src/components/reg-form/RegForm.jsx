import React from 'react'
import './reg-form.css'
import { FaFacebook, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { FaUserAlt, FaPhoneAlt, FaClipboardList } from "react-icons/fa";

const RegForm = ({switchForm}) => {
  return (
    <div className='reg-form'>
      <form>
        <h2>Գրանցվել</h2>
        <div className="r-inpt">
          <FaUserAlt className='reg-icon'/>
          <input 
            placeholder='Անուն'
            className='reg-inpt'
          />
        </div>
        <div className="r-inpt">
          <FaClipboardList className='reg-icon'/>
          <input 
            placeholder='Ազգանուն'
            className='reg-inpt'
          />
        </div>
        <div className="r-inpt">
          <FaPhoneAlt className='reg-icon'/>
          <input 
            placeholder='Հեռախոսահամար'
            className='reg-inpt'
          />
        </div>
        <div className="r-inpt">
          <IoMail className='reg-icon'/>
          <input 
            placeholder='Էլ․ հասցե'
            className='reg-inpt'
          />
        </div>
        <button className='reg-btn'>Գրանցվել</button>
        <div className='social-links'>
          <div className='social-link'>
            <FcGoogle />
          </div>
          <div className='social-link fa'>
            <FaFacebook />
          </div>
        </div>
        <div>
            <span style={{color: '#9E9E9EFF'}}>Արդեն գրանցվել եք ? <span style={{color: '#246BFDFF', cursor: 'pointer'}} onClick={() => switchForm()}>Մուտք</span></span>
        </div>
      </form>
    </div>
  )
}

export default RegForm