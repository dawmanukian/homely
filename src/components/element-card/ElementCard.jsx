import React from "react";
import "./element-card.css";
import { FaThumbsUp, FaStar } from "react-icons/fa";
import { FaHeart, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { PiFireBold } from "react-icons/pi";
import { TbStairsUp } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";

const ElementCard = ({ img, title, address, price, id, like, status }) => {
  const liked = localStorage.getItem("liked");

  return (
    <div className="el-card">
      <Link to={`/item/${id}`} div className="el-card-link">
        <div className="card-head">
          <img src={img} width={"100%"} className="card-img" />
        </div>
        <div className="card-data">
          <b className="card-title">{title}</b>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <div className="icon-div">
              <TbStairsUp />
              <span>3</span>
            </div>
            <div className="icon-div">
              <TbDimensions />
              <span>70 ք․մ</span>
            </div>
            <div className="icon-div">
              <FaShower />
              <span>2</span>
            </div>
            <div className="icon-div">
              <FaBed />

              <span>2</span>
            </div>
          </div>
          <b className="card-price">$ {price}</b>
        </div>
      </Link>
      <div className="card-footer">
        {status !== null ? (
          status ? (
            <div className="card-type ex">
              <FaStar />
              Էքսկլյուզիվ
            </div>
          ) : (
            <div className="card-type dis">
              <PiFireBold style={{ color: "#fff", fontSize: "18px" }} />
              Իջեցված գին
            </div>
          )
        ) : null}
        <div className="card-id">ID {id}</div>
        <FaHeart
          className="card-like-icon"
          style={{ color: liked.includes(id) ? "rgb(245, 81, 81)" : "gray" }}
          onClick={() => like(id)}
        />
      </div>
    </div>
  );
};

export default ElementCard;
