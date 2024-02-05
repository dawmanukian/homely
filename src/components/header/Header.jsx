import React, { useEffect, useState } from "react";
import "./header.css";
import { FaPhone, FaUser, FaHeart } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import HomeFilters from "../home-filters/HomeFilters";
import logo from "../../img/logo.jpg";
import LikedCards from "../liked-cards/LikedCards";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import Selects from "../selects/Selects";

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
  const [openSelectPanel, setOpenSelectPanel] = useState(null);
  return (
    <div>
      {openSelectPanel != null && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            zIndex: "10",
          }}
          onClick={() => setOpenSelectPanel(null)}
        ></div>
      )}
      {showLikedCards && (
        <div className="liked-panel">
          <LikedCards onClose={() => setShowLikedCards(false)} />
        </div>
      )}
      <header>
        <div className="header-menu">
          <Link to={"/"}>
            <img src={logo} height={"80px"} className="header-logo" />
          </Link>
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
                className="header-select"
                onClick={() => setOpenSelectPanel(1)}
              >
                <b>ARM</b>
                <FaChevronDown />
              </div>
              {openSelectPanel === 1 && (
                <div className="selects">
                  <div className="select-p">
                    <b>ARM</b>
                  </div>
                  <div className="select-p">
                    <b>ENG</b>
                  </div>
                  <div className="select-p">
                    <b>RUS</b>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div
                className="header-select"
                onClick={() => setOpenSelectPanel(2)}
              >
                <b>USD</b>
                <FaChevronDown />
              </div>
              {openSelectPanel === 2 && (
                <>
                  <div className="selects">
                    <div className="select-p">
                      <b>USD</b>
                    </div>
                    <div className="select-p">
                      <b>AMD</b>
                    </div>
                  </div>
                </>
              )}
            </div>
            <Link to={"/auth"} className="header-btn-link">
              <button className="header-btn">
                <FaUser />
                Մուտք
              </button>
            </Link>
            <button className="drop-menu" onClick={() => setDrop(!drop)}>
              <BsList />
            </button>
            {drop && (
              <div className="droped-menu">
                <Link to={"/auth"} className="header-btn-link">
                  <button className="droped-header-btn">
                    <FaUser />
                    Մուտք
                  </button>
                </Link>
                <div
                  className="liked-num"
                  onClick={() => setShowLikedCards(!showLikedCards)}
                >
                  <FaHeart className="like-icon" />
                  <span>{likedNumber}</span>
                </div>
                <div
                  className="droped-header-select"
                  onClick={() => setOpenSelectPanel(3)}
                >
                  <b>ARM</b>
                  <FaChevronDown />
                  {openSelectPanel === 3 && (
                    <div className="selects">
                      <div className="select-p">
                        <b>ARM</b>
                      </div>
                      <div className="select-p">
                        <b>ENG</b>
                      </div>
                      <div className="select-p">
                        <b>RUS</b>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="droped-header-select"
                  onClick={() => setOpenSelectPanel(4)}
                >
                  <b>USD</b>
                  <FaChevronDown />
                  {openSelectPanel === 4 && (
                    <>
                      <div className="selects">
                        <div className="select-p">
                          <b>USD</b>
                        </div>
                        <div className="select-p">
                          <b>AMD</b>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
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
