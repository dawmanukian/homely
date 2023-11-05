import React from 'react'
import './account-header.css'

const AccountHeader = () => {
  return (
    <div className='account-header'>
        <div className='account-info'>
            <img
                className='account-img' 
                src='https://i.pinimg.com/originals/93/65/1d/93651dceeee949437c20171dd3f7cd0e.jpg'
            />
            <span>Davit Manukyan</span>
        </div>
    </div>
  )
}

export default AccountHeader