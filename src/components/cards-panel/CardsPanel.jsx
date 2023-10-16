import React from 'react'
import ElementCard from '../element-card/ElementCard'
import './cards-panel.css'

const CardsPanel = () => {
  return (
    <div className='cards-panel'>
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
        <ElementCard />
    </div>
  )
}

export default CardsPanel