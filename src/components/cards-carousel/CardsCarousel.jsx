import React from 'react'
import './cards-carousel.css'
import ElementCard from '../element-card/ElementCard'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CardsCarousel = ({title}) => {
  return (
    <div className='cards'>
        <h2>{title}</h2>
        <div className='cards-carousel'>
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
            <ElementCard />
        </div>
    </div>
  )
}

export default CardsCarousel