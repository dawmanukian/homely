import React, { useState } from "react";
import "./element-card.css";
import { FaHeart, FaBed } from "react-icons/fa6";
import { FaShower } from "react-icons/fa";
import { TbStairsUp, TbDimensions } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import logo from "../../img/logo.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaFire } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const ElementCard = ({ el, images, onLike }) => {
  const [imagePosition, setImagePosition] = useState(0);

  const itemImages = images.map((el) => el.image);

  const { t } = useTranslation();

  const swipRight = () =>
    imagePosition !== (itemImages.length - 1) * 100 &&
    setImagePosition(imagePosition + 100);
  const swipLeft = () =>
    imagePosition !== 0 && setImagePosition(imagePosition - 100);

  return (
    <div className="el-card">
      <div className="card-head">
        <button onClick={swipLeft} className="crd_arrow">
          <FaArrowLeftLong />
        </button>
        <button onClick={swipRight} className="crd_arrow" style={{right: '0px'}}>
          <FaArrowRightLong />
        </button>
        <a href={`https://homely.am/item/${el.id}`}>
          <div
            className="head-images-swiper"
            style={{
              left: `-${imagePosition}%`,
              gridTemplateColumns: `repeat(${itemImages.length}, 100%)`,
            }}
          >
            {itemImages.map((img) => {
              return (
                <img
                  loading="lazy"
                  src={`https://service.homely.am/storage/images/${img}`}
                  className="card-img"
                  width={"100%"}
                />
              );
            })}
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
        {/* <FaHeart
          className="card-like-icon"
          style={{ color: liked.includes(el.id) ? "rgb(245, 81, 81)" : "gray" }}
          onClick={() => onLike(el.id)}
        /> */}
      </div>
    </div>
  );
};

export default ElementCard;
