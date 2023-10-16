import React from 'react'
import './element-card.css'
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ElementCard = ({img, title, address, price}) => {
  return (
    <div className='el-card'>
        <div className='card-head'>
          <img src={'https://d28pk2nlhhgcne.cloudfront.net/assets/app/uploads/sites/3/2021/08/homebyme-homepage-gallery-6.jpg'} width={'100%'} className='card-img'/>
        </div>
        <div className='card-data'>
          <b className='card-title'>Երևան Անտառային փող․123/3</b>
          <p className='card-address'>Անտառային փող, Կենտրոն, Երևան</p>
          <b className='card-price'>$ 201,000</b>
          <div className='card-footer'>
            <div className='card-id'>ID 4556</div>
            <FaHeart className='card-like-icon'/>
          </div>
          {/* <FaThumbsUp className='card-like-icon'/> */}
        </div>
    </div>
  )
}

export default ElementCard