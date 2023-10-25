import React, { useContext, createContext } from 'react'
import './home-page.css'
import CardsSwiper from '../../components/cards-swiper/CardsSwiper'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const HomePage = () => {

  return (
    <>
      <Header />
      <CardsSwiper />
      <Footer />
    </>
  )
}

export default HomePage