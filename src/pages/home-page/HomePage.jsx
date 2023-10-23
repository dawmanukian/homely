import React, { useContext, createContext } from 'react'
import './home-page.css'
import CardsSwiper from '../../components/cards-swiper/CardsSwiper'
import Header from '../../components/header/Header'

const HomePage = () => {

  const MyContext = React.createContext('')

  return (
    <>
      <Header />
      <MyContext.Provider value={'mher'}>
        <CardsSwiper />
      </MyContext.Provider>
    </>
  )
}

export default HomePage