import React from 'react'
import ElementCard from '../element-card/ElementCard'
import './cards-panel.css'
import { useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const CardsPanel = () => {

  const [slideLeft, setSlideLeft] = useState(0)

  if(slideLeft === 100 || slideLeft === -500){
    setSlideLeft(0)
  }

  return (
    <div className='cards'>
      <button onClick={() => setSlideLeft(slideLeft + 100)} className='arrow-btn'>
        <FaAngleLeft />
      </button>
      <div className='slide-panel'>
        <div className='slide' style={{left: `${slideLeft}%`}}>
          <div className='lot-cards'>
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
          </div>
          <div className='lot-cards'>
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
          </div>
        </div>
      </div>
      <button onClick={() => setSlideLeft(slideLeft - 100)} className='arrow-btn'>
        <FaAngleRight />
      </button>
    </div>
  )
}

export default CardsPanel