import React from "react";
import "./view-block.css";
import { useState } from "react";
import ElementCard from "../../components/element-card/ElementCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import LoadingCard from "../loading-card/LoadingCard";

const ViewBlock = ({ tp, itm }) => {
  const [cards, setCards] = useState([]);
  const [ld, setLd] = useState(true);
  const [cardsImages, setCardsImages] = useState([]);

  useEffect(() => {
    try {
      const get_items = async () => {
        try {
          const res = await axios.get(
            "https://service.homely.am/api/items/modern"
          );
          if (res.data.all_items) {
            setCards(res.data.all_items.reverse());
            setCardsImages(res.data.all_images);
            setLd(false);
          }
        } catch (error) {
          console.log(error);
          alert(false);
        }
      };
      get_items();
    } catch (error) {
      console.log(error);
      // setShowLoading(false);
    }
  }, []);

  const [maxIndex, setMaxIndex] = useState(1);

  function name(params) {
    const new_arr = [];
    let n = Math.ceil(cards.filter((e) => e.type === tp && e.item_type === itm).length / 12);
    for (let i = 1; i <= n; i++) {
      new_arr.push(
        <button
          className={`num_btn ${i === maxIndex && "active"}`}
          onClick={() => setMaxIndex(i)}
        >
          {i}
        </button>
      );
      console.log(i, itm)
    }
    return new_arr;
  }

  return (
    <>
      <div className="search-results">
        {
          <>
            {ld ? (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            ) : (
              <>
                {cards
                  .filter((e) => e.type === tp && (e.item_type === itm || e.item_type == null))
                  .map((el, index) => {
                    if (index >= maxIndex * 11 - 11 && index <= maxIndex * 11) {
                      return (
                        <ElementCard
                          el={el}
                          images={cardsImages.filter(
                            (img) => Number(img.item_id) === el.id
                          )}
                        />
                      );
                    }
                  })}
              </>
            )}
          </>
        }
      </div>
      <div className="num_btns">{name()}</div>
    </>
  );
};

export default ViewBlock;
