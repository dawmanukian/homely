import React, { useState } from "react";
import CardsSwiper from "../cards-swiper/CardsSwiper";
import ElementCard from "../element-card/ElementCard";
import "./search-results.css";

const SearchResults = (cards) => {
  const [data, setData] = useState(cards);

  return (
    <>
      <h2 className="search-res-header">Որոնման արդյունքներ `</h2>
      <div className="search-results">
        {data.map((el) => {
          return (
            <ElementCard
              like={false}
              price={el.price}
              id={el.id}
              img={el.img}
              address={el.address}
              title={el.title}
              status={0}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
