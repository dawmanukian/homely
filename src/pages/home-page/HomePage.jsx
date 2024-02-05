import React, { useContext, createContext } from "react";
import "./home-page.css";
import CardsSwiper from "../../components/cards-swiper/CardsSwiper";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={"/*"}
          element={
            <>
              <CardsSwiper status={1} />
              <CardsSwiper status={0} />
              <CardsSwiper status={null} />
            </>
          }
        />
        <Route path={"/search"} element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  );
};

export default HomePage;
