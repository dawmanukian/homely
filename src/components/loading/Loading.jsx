import React from 'react'
import './loading.css'
import logo from '../../img/logo.jpg'

const Loading = () => {
  return (
    <div className="loader_page">
        <img src={logo} className='logo'/>
        <div class="loader"></div>
    </div>
  )
}

export default Loading