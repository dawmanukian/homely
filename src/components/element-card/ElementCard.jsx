import React from 'react'
import './element-card.css'
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ElementCard = ({img, title, address, price, id, isLiked, like}) => {
  return (
    <div className='el-card'>
        <div className='card-head'>
          <img src={img} width={'100%'} className='card-img'/>
        </div>
        <div className='card-data'>
          <b className='card-title'>{title}</b>
          <p className='card-address'>{address}</p>
          <b className='card-price'>$ {price}</b>
          <div className='card-footer'>
            <div className='card-id'>ID {id}</div>
            <FaHeart className='card-like-icon' style={{color: isLiked ? 'rgb(245, 81, 81)' : 'gray'}} onClick={() => like(id)}/>
          </div>
        </div>
    </div>
  )
}

export default ElementCard