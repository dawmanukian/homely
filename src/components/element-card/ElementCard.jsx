import React from 'react'
import './element-card.css'
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart, FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ElementCard = ({img, title, address, price, id, like}) => { 
  
  const liked = localStorage.getItem('liked')

  return (    
      <div className='el-card'>
        <Link to={`/item/${id}`} div className='el-card-link'>
          <div className='card-head'>
            <img src={img} width={'100%'} className='card-img'/>
          </div>
          <div className='card-data'>
            <b className='card-title'>{title}</b>
            <p className='card-address'><FaLocationDot /> {address}</p>
            <b className='card-price'>$ {price}</b>
          </div>
        </Link>
          <div className='card-footer'>
            <div className='card-id'>ID {id}</div>
            <FaHeart className='card-like-icon' style={{color: liked.includes(id) ? 'rgb(245, 81, 81)' : 'gray'}} onClick={() => like(id)}/>
          </div>
      </div>
  )
}

export default ElementCard