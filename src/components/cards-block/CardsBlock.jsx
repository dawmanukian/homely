import React from "react";
import "./cards-block.css";
import ElementCard from "../element-card/ElementCard";
import { useSelector } from "react-redux";
import { useState } from "react";

const CardsBlock = () => {
  const [likedCards, setLikedCards] = useState(localStorage.getItem("liked"));

  if (likedCards === "" || likedCards == null) {
    localStorage.setItem("liked", JSON.stringify([]));
  }

  const [cards, setCards] = useState(
    useSelector((state) => state.allItems.items)
  );
  const [cardsImages, setCardsImages] = useState(
    useSelector((state) => state.allImages.images)
  );

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="block_el">
      <div className="rows-block" style={currentPage !== 1 ? {display: "none"} : null}>
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
        <ElementCard
          el={cards[0]}
          images={cardsImages.filter(
            (img) => Number(img.item_id) === cards[0].id
          )}
        />
      </div>
      <div className="btns_sel">
        
        <button style={{color: "#fff", background: "#333"}}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
};

export default CardsBlock;
