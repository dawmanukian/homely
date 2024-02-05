import React, { useContext, createContext } from "react";
import "./home-page.css";
import CardsSwiper from "../../components/cards-swiper/CardsSwiper";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <CardsSwiper status={1} />
      <CardsSwiper status={0} />
      <CardsSwiper status={null} /> */}
      <SearchResults />
      <Footer />
    </>
  );
};

export default HomePage;
