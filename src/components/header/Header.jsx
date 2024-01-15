import React, { useEffect, useState } from "react";
import "./header.css";
import { FaPhone, FaUser, FaHeart } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import HomeFilters from "../home-filters/HomeFilters";
import logo from "../../img/logo.jpg";
import LikedCards from "../liked-cards/LikedCards";
import { Link } from "react-router-dom";
import am_flag from "../../img/flag/AM.png";
import ru_flag from "../../img/flag/RU.png";
import us_flag from "../../img/flag/US.png";

const Header = () => {
  useEffect(() => {
    setLikedNumber(JSON.parse(localStorage.getItem("liked")).length);
  }, [localStorage.getItem("liked")]);
  const [drop, setDrop] = useState(false);
  const [likedNumber, setLikedNumber] = useState(
    JSON.parse(localStorage.getItem("liked")).length
  );
  const [showLikedCards, setShowLikedCards] = useState(false);
  const [showLangPanel, setShowLangPanel] = useState(false);
  const [flag, setFlag] = useState(am_flag)
  return (
    <div>
      {showLikedCards && (
        <div className="liked-panel">
          <LikedCards onClose={() => setShowLikedCards(false)} />
        </div>
      )}
      <header>
        <div className="header-menu">
          <img
            src={logo}
            height={"110px"}
            style={{ borderRadius: "22px" }}
            className="header-logo"
          />
          <div className="header-contact">
            <div
              className="liked-num"
              onClick={() => setShowLikedCards(!showLikedCards)}
            >
              <FaHeart className="like-icon" />
              <span>{likedNumber}</span>
            </div>
            <a className="header-phone" href="tel:+37455600096">
              <FaPhone />
              +37455600096
            </a>
            <div>
              <div
                className="lang_panel"
                onClick={() => setShowLangPanel(!showLangPanel)}
              >
                <img src={flag} width={"30px"} height={"20px"} />
              </div>
              {showLangPanel && (
                <div className="select_lang" onClick={() => setShowLangPanel(false)}>
                  <img src={am_flag} width={"30px"} height={"20px"} onClick={() => setFlag(am_flag)}/>
                  <img src={ru_flag} width={"30px"} height={"20px"} onClick={() => setFlag(ru_flag)}/>
                  <img src={us_flag} width={"30px"} height={"20px"} onClick={() => setFlag(us_flag)}/>
                </div>
              )}
            </div>
            <select className="header-select">
              <optgroup>
                <option>USD</option>
                <option>AMD</option>
                <option>EUR</option>
                <option>RUB</option>
              </optgroup>
            </select>
            <Link to={"/auth"} className="header-btn-link">
              <button className="header-btn">
                <FaUser />
                Մուտք
              </button>
            </Link>
            <button className="drop-menu" onClick={() => setDrop(!drop)}>
              <BsList />
            </button>
            <div
              className="droped-menu"
              style={drop ? { display: "block" } : { display: "none" }}
            >
              <Link to={"/auth"}>
                <button className="droped-header-btn">
                  <FaUser />
                  Մուտք
                </button>
              </Link>
              <select className="droped-header-select">
                <optgroup>
                  <option>ARM</option>
                  <option>ENG</option>
                  <option>RU</option>
                </optgroup>
              </select>
              <select className="droped-header-select btm">
                <optgroup>
                  <option>USD</option>
                  <option>AMD</option>
                  <option>EUR</option>
                  <option>RUB</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="filters-panel">
          <HomeFilters />
        </div>
      </header>
    </div>
  );
};

export default Header;
