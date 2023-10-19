import React from 'react'
import ElementCard from '../../components/element-card/ElementCard'
import './home-page.css'
import CardsPanel from '../../components/cards-panel/CardsPanel'
import TestSwiper from '../../components/test-swiper/TestSwiper'

const HomePage = () => {

  const images = [
    'https://via.placeholder.com/600x300',
    'https://via.placeholder.com/600x301',
    'https://via.placeholder.com/600x302',
  ];

  return (
    <div style={{marginTop: '50px'}}>
      <TestSwiper images={images} />
      <TestSwiper images={images} />
    </div>
  )
}

export default HomePage