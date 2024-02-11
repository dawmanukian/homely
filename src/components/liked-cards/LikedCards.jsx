import { React, useState } from "react";
import "./liked-cards.css";
import ElementCard from "../element-card/ElementCard";
import { RiCloseFill } from "react-icons/ri";
import { UseSelector, useSelector } from "react-redux";

const LikedCards = ({ onClose }) => {
  const [cards, setCards] = useState(
    useSelector((state) => state.allItems.items)
  );

  const liked = JSON.parse(localStorage.getItem("liked"));
  const liked_cards = cards.filter((el) => liked.includes(el.id));
  console.log(liked);

  return (
    <div className="liked-cards-section">
      <div
        style={{ width: "100%", height: "100%" }}
        onClick={() => onClose()}
      ></div>
      <div className="liked-cards-panel">
        <button className="close-btn" onClick={() => onClose()}>
          <RiCloseFill />
        </button>
        <div className="liked-cards">
          {liked.length == 0 ? (
            <p style={{ color: "gray" }}>Չկա պահպանված գույք</p>
          ) : (
            liked_cards.map((el) => {
              return (
                <div className="l-card" key={el.id}>
                  <ElementCard
                    // like={like}
                    price={el.price}
                    id={el.id}
                    img={el.img}
                    address={el.address}
                    title={el.title}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedCards;
