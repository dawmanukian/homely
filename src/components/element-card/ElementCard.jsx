import React from 'react'
import './element-card.css'

const ElementCard = ({img, title, address, price}) => {
  return (
    <div className='el-card'>
        <img src={img} width={'100%'} className='card-img'/>
        <div>
            <b>{title}</b>
            <p>{address}</p>
            <b>{price}</b>
        </div>
    </div>
  )
}

export default ElementCard