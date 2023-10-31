import React from 'react'
import './success-notification.css'

const SuccessNotification = ({message}) => {
  return (
    <div className='success-notification'>
        <b>{message}</b>
    </div>
  )
}

export default SuccessNotification