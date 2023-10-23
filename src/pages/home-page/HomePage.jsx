import React, { useContext, createContext } from 'react'
import './home-page.css'
import CardsSwiper from '../../components/cards-swiper/CardsSwiper'
import Header from '../../components/header/Header'

const HomePage = () => {

  return (
    <>
      <Header />
      <CardsSwiper />
    </>
  )
}

export default HomePage