import React from 'react'
import './footer.css'
import { FaPhone, FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import logo from '../../img/logo.jpg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-data'>
            <div className='footer-contact-data'>
                <div className='footer-contact'>
                    <a href='tel:+37455600096' className='footer-contact'>
                        <FaPhone className='footer-icon'/>
                        <span>+37455600096</span>
                    </a>
                </div>
                <div className='footer-contact'>
                    <a href='mailto:homely-realestate@gmail.com' className='footer-contact'>
                        <IoMail className='footer-icon'/>
                        <span>homely-realestate@gmail.com</span>
                    </a>
                </div>
                <div className='footer-contact'>
                    <FaFacebook className='footer-icon'/>
                    <FaInstagram className='footer-icon' />
                    <FaTelegram className='footer-icon' />
                </div>
            </div>
            <div className='footer-social'>
                <img src={logo} height={'110px'} style={{borderRadius: '22px'}} />
            </div>
        </div>
        <hr style={{width: '100%', backgroundColor: 'gray', border: 'none', height: '1px'}}/>
        <p className='all-rights-reserved'>© 2023 Homely. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer