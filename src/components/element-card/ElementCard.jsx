import React, { useEffect, useState } from "react";
import "./element-card.css";
import { FaBed } from "react-icons/fa6";
import { FaShower } from "react-icons/fa";
import { TbStairsUp, TbDimensions } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ElementCard = ({ el, images, onLike }) => {
  const [imagePosition, setImagePosition] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(100)

  const itemImages = images

  const { t } = useTranslation();


  const swipRight = () => {
    imagePosition !== (itemImages.length - 1) && setImagePosition(imagePosition + 1);
    setImageOpacity(0)
    setTimeout(() => setImageOpacity(100), 300)
  }

  const swipLeft = () => {
    imagePosition !== 0 && setImagePosition(imagePosition - 1);
    setImageOpacity(0)
    setTimeout(() => setImageOpacity(100), 300)
  }

  return (
    <div className="el-card">
      <div className="card-head">
        <button onClick={swipLeft} className="crd_arrow">
          <FaArrowLeftLong />
        </button>
        <button onClick={swipRight} className="crd_arrow" style={{right: '0px'}}>
          <FaArrowRightLong />
        </button>
        <a href={`https://homely.am/item/${el.id}`} style={{width: "100%"}}>
          <div
            className="head-images-swiper"
          >
              <picture >
                <source srcSet={`https://service.homely.am/storage/images/${images[imagePosition]}`} type="image/webp" />
                <img
                  style={{transition: 'all ease .5s', opacity: imageOpacity}}
                  loading="lazy"
                  src={`https://service.homely.am/storage/images/${images[imagePosition]}`}
                  className="card-img"
                  width={"100%"}
                />
              </picture>

          </div>
        </a>
      </div>
      <a
        href={`https://homely.am/item/${el.id}`}
        className="el-card-link"
        target="_blank"
      >
        <div className="card-data">
          <b className="card-title">
            {el.region}, {el.street}
          </b>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <div className="icon-div">
              <TbStairsUp />
              <span>
                {el.floor} / {el.number_of_floors}
              </span>
            </div>
            <div className="icon-div">
              <FaBed />
              <span>{el.number_of_rooms}</span>
            </div>
            <div className="icon-div">
              <TbDimensions />
              <span>
                {el.area} {t("sqm")}
              </span>
            </div>
            <div className="icon-div">
              <FaShower />
              <span>{el.number_of_bathrooms}</span>
            </div>
          </div>
          <span className="card-price">$ {el.price}</span>
        </div>
      </a>
      <div className="card-footer">
        <div style={{ display: "flex", gap: "15px" }}>
          <div className="card-id">ID {el.id}</div>
          <div className={el.proposal}>
            {el.proposal === "exclusive" && (
              <FaStar style={{ fontSize: "17px" }} />
            )}
            {el.proposal === "special" && (
              <FaFire style={{ fontSize: "17px" }} />
            )}
            {el.proposal !== "null" && t(el.proposal)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementCard;