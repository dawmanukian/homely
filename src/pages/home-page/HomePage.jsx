import "./home-page.css";
import React from "react";
import CardsSwiper from "../../components/cards-swiper/CardsSwiper";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CardsBlock from "../../components/cards-block/CardsBlock";
import { useState } from "react";
import ElementCard from "../../components/element-card/ElementCard";
import ViewBlock from "../../components/view-block/ViewBlock";
import LoadingCard from "../../components/loading-card/LoadingCard";

const HomePage = () => {
  const filters = useSelector(function (state) {
    return state.currentFilters.data;
  });

  return (
    <>
      <Header />
      {filters ? (
        <SearchResults filters={filters}/>
      ) : (
        <>
          <h2 className="home-header">Վաճառքի բնակարաններ</h2>
          <ViewBlock tp={"sell"} itm={"Բնակարան"}/>
          <h2 className="home-header">Վաճառքի առանձնատներ</h2>
          <ViewBlock tp={"sell"} itm={"Առանձնատուն"}/>
          <h2 className="home-header">Վարձով բնակարաններ</h2>
          <ViewBlock tp={"rent"} itm={"Բնակարան"}/>
          <h2 className="home-header">Վարձով առանձնատներ</h2>
          <ViewBlock tp={"rent"} itm={"Առանձնատուն"}/>
        </>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
