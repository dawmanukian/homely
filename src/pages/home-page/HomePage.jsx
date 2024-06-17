import "./home-page.css";
import React from "react";
import CardsSwiper from "../../components/cards-swiper/CardsSwiper";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CardsBlock from "../../components/cards-block/CardsBlock";

const HomePage = () => {
  const filters = useSelector(function (state) {
    return state.currentFilters.data;
  });

  return (
    <>
      <Header />
      {filters ? (
        <SearchResults filters={filters} />
      ) : (
        <Routes>
          <Route
            path={"/*"}
            element={
              <>
                <CardsSwiper status={'special'}/>
                <CardsSwiper status={'exclusive'}/>
                <CardsSwiper status={'null'}/>
                {/* <h2>Վաճառքի գույք</h2>
                <CardsBlock />
                <h2>Վարձակալության գույք</h2>
                <CardsBlock />
                <h2>Վաճառքի գույք</h2>
                <CardsBlock /> */}
              </>
            }
          />
        </Routes>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
