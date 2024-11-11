import React from "react";
import "./view-block.css";
import { useState } from "react";
import ElementCard from "../../components/element-card/ElementCard";
import { useEffect } from "react";
import axios from "axios";
import LoadingCard from "../loading-card/LoadingCard";
import { useMemo } from "react";

const ViewBlock = ({ tp, itm }) => {
  const [cards, setCards] = useState([]);
  const [ld, setLd] = useState(true);
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)

  useEffect(() => {
      const get_items = async () => {
        try {
          const res = await axios.get(
            `https://service.homely.am/api/items/modern/${itm}/${tp}/${page}/${12}`
          );
          if (res.data.all_items) {
            setCards(res.data.all_items);
            setTotalPages(res.data.total_pages)
            setLd(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      get_items();
  }, [page]);

  const paginationButtons = useMemo(() => {
    const new_arr = [];
    for (let i = 1; i <= totalPages; i++) {
      new_arr.push(
        <button
          key={i}
          className={`num_btn ${i === page && "active"}`}
          onClick={() => {
            setPage(i);
            setLd(true);
          }}
        >
          {i}
        </button>
      );
    }
    return new_arr;
  }, [totalPages, page]);
  

  return (
    <>
      <div className="search-results">
        {
          <>
            {ld ? (
              Array.from({ length: 12 }, (_, index) => <LoadingCard key={index} />)
            ) : (
              cards.map((el, index) => (
                <ElementCard key={el.id} el={el} images={JSON.parse(el.all_images)} />
              ))
            )}
          </>
        }
      </div>
      <div className="num_btns">{paginationButtons}</div>
    </>
  );
};

export default ViewBlock;
