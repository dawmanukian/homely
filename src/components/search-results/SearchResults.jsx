import React, { useEffect, useState } from "react";
import CardsSwiper from "../cards-swiper/CardsSwiper";
import ElementCard from "../element-card/ElementCard";
import "./search-results.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { UseSelector } from "react-redux";

const SearchResults = ({ filters }) => {
  const dispatch = useDispatch();

  function filtracion(fi) {
    setViewData(
      data.filter((el) => {
        if (fi.id && fi.id !== el.id) return false;
        if (fi.address && !el.address.startsWith(fi.address)) return false;
        if (fi.regions && !fi.regions.includes(el.region)) return false;
        if (fi.rentOrSell && el.type !== fi.rentOrSell) return false;
        if (fi.roomsNumber && !fi.roomsNumber.includes(el.rooms)) return false;
        if (fi.status && !fi.status.includes(el.status)) return false;
        if (fi.building_type && !fi.building_type.includes(el.building_type))
          return false;
        if (
          fi.floor_min &&
          fi.floor_max &&
          (Number(el.floor) < Number(fi.floor_min) ||
            Number(el.floor) > Number(fi.floor_max))
        )
          return false;
        if (fi.price_from && Number(el.price) < Number(fi.price_from))
          return false;
        if (fi.price_to && Number(el.price) > Number(fi.price_to)) return false;

        return true;
      })
    );
  }
  const {t, i18n} = useTranslation();
  const [data, setData] = useState(useSelector((state) => state.allItems.items));
  const [viewData, setViewData] = useState([]);

  useEffect(() => filtracion(filters), [filters]);

  return (
    <>
      <div
        className="header-search-results"
      >
        <h2 className="search-res-header">{t("search-results")}</h2>
        <button
          className="clear-filters-btn"
          onClick={() => {
            dispatch({
              type: "add-filters",
              payload: { data: null },
            });
          }}
        >
          {t("view-all")}
        </button>
      </div>
      {viewData.length ? (
        <div className="search-results">
          {viewData.map((el) => {
            return (
              <ElementCard
                key={el.id}
                like={false}
                price={el.price}
                id={el.id}
                img={el.img}
                address={el.address}
                title={el.title}
                status={0}
                rooms={el.rooms}
              />
            );
          })}
        </div>
      ) : (
        <p className="nothing_text">Ոչինչ չի գտնվել</p>
      )}
    </>
  );
};

export default SearchResults;
