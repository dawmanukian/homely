import React, { useEffect, useState } from "react";
import CardsSwiper from "../cards-swiper/CardsSwiper";
import ElementCard from "../element-card/ElementCard";
import "./search-results.css";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { UseSelector } from "react-redux";

const SearchResults = ({ filters }) => {
  const dispatch = useDispatch();
  console.log(filters)

  function filtracion(fi) {
    console.log(data)
    setViewData(
      data.filter((el) => {
        if (fi.id && Number(fi.id) !== el.id) return false;
        if (fi.address.length && !el.street.startsWith(fi.address)) return false;
        if (fi.regions.length && !fi.regions.includes(el.region)) return false;
        if (fi.rentOrSell && el.type !== fi.rentOrSell) return false;
        if (fi.roomsNumber.length && !fi.roomsNumber.includes(el.number_of_rooms)) return false;
        if ((fi.status != undefined && fi.status != []) && !fi.status.includes(el.status)) return false;
        if ((fi.building_type != undefined && fi.building_type != []) && !fi.building_type.includes(el.type_of_building)) return false;
        if (fi.floor_min &&  (Number(el.floor) < Number(fi.floor_min))) return false;
        if (fi.floor_max &&  (Number(el.floor) > Number(fi.floor_max))) return false;
        if (fi.price_from && Number(el.price) < Number(fi.price_from)) return false;
        if (fi.price_to && Number(el.price) > Number(fi.price_to)) return false;

        return true;
      })
    );
  } 
  const {t} = useTranslation();
  const [data, setData] = useState(useSelector((state) => state.allItems.items));
  const [cardsImages, setCardsImages] = useState(
    useSelector((state) => state.allImages.images)
  );
  const [viewData, setViewData] = useState([]);
  console.log(viewData)

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
                // onLike={(id) => like(id)}
                el={el}
                images={cardsImages.filter(
                  (img) => Number(img.item_id) === el.id
                )}
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
