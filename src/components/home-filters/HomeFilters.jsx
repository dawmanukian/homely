import React, { useState } from "react";
import "./home-filters.css";
import { BsFillHouseAddFill, BsFillHouseFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSistrix, FaBuildingCircleCheck } from "react-icons/fa6";

const HomeFilters = () => {
  const [newBuilding, setNewBuilding] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [type, setType] = useState(0);
  const [administrativeRegion, setAdministrativeRegion] = useState('0');

  return (
    <div className="home-filters">
      <div className="filter-tabs">
        <button
          className={`type-btn ${!type ? "active" : null}`}
          onClick={() => setType(0)}
        >
          <BsFillHouseAddFill className="type-icon" />
          Վաճառք
        </button>
        <button
          className={`type-btn ${type ? "active" : null}`}
          onClick={() => setType(1)}
        >
          <BsFillHouseFill className="type-icon" />
          Վարձակալություն
        </button>
        <button
          className={`filter-new ${newBuilding ? "active" : null}`}
          onClick={() => setNewBuilding(!newBuilding)}
        >
          <FaBuildingCircleCheck
            className={`type-icon ${newBuilding ? "active" : null}`}
          />
          Նորակառույց
        </button>
        <input placeholder="Որոնել ․․․ " className="search-inpt" />
        <div className="num-inputs">
          <input
            type="number"
            className="price-inpt"
            placeholder="Գին - սկսած"
          />
          <input
            type="number"
            className="price-inpt"
            placeholder="Գին - մինչև"
          />
          <input
            type="number"
            className="price-inpt"
            placeholder="Մակերես - սկսած"
          />
          <input
            type="number"
            className="price-inpt"
            placeholder="Մակերես - մինչև"
          />
        </div>
        <div className="filter-btns">
          <button className="search-btn">
            <FaSistrix className="type-icon" />
            Որոնել
          </button>
          <button
            className={`more-btn ${showMore ? "active" : null}`}
            onClick={() => setShowMore(!showMore)}
          >
            <AiFillSetting className="type-icon" />
            Ավելին
          </button>
        </div>
        <div
          className="filter-checks"
          style={showMore ? { display: "flex" } : { display: "none" }}
        >
          <div className="filter-selects">
            <div className="select-region-panel">
              <b>Մարզ</b>
              <select
                className="select-region"
                onChange={(evn) => setAdministrativeRegion(evn.target.value)}
              >
                <option value={0}>Երևան</option>
                <option value={1}>Արագածոտն</option>
                <option value={2}>Արարատ</option>
                <option value={3}>Արմավիր</option>
                <option value={4}>Գեղարքունիք</option>
                <option value={5}>Կոտայք</option>
                <option value={6}>Լոռի</option>
                <option value={7}>Շիրակ</option>
                <option value={8}>Սյունիք</option>
                <option value={9}>Տավուշ</option>
                <option value={10}>Վայոց ձոր</option>
              </select>
            </div>
            {administrativeRegion === "0" && (
              <div className="filter-checks-panel">
                <b>Շրջան</b>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="adm-region">
                    <div>
                      <input type="checkbox" />
                      <label>Աջափնյակ</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Ավան</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Արաբկիր</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Դավթաշեն</label>
                    </div>
                  </div>
                  <div className="adm-region">
                    <div>
                      <input type="checkbox" />
                      <label>Էրեբունի</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Կենտրոն</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Մալաթիա-Սեբաստիա</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Նոր Նորք</label>
                    </div>
                  </div>
                  <div className="adm-region">
                    <div>
                      <input type="checkbox" />
                      <label>Նորք-Մարաշ</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Նուբարաշեն</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Շենգավիթ</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Քանաքեռ-Զեյթուն</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="filter-checks-panel">
            <b>Գույքի տիպը</b>
            <div>
              <input type="checkbox" />
              <label>Բնակարան</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Հողատարածք</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Կոմերցիոն</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Առանձնատուն</label>
            </div>
          </div>
          <div className="filter-checks-panel">
            <b>Սենյակներ</b>
            <div>
              <input type="checkbox" />
              <label>1</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>2</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>3</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>4+</label>
            </div>
          </div>
          <div className="filter-checks-panel">
            <b>Շենքի տիպ</b>
            <div>
              <input type="checkbox" />
              <label>Պանելային</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Քարե</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Նորակառույց</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Այլ</label>
            </div>
          </div>
          <div className="filter-checks-panel">
            <b>Կարգավիճակ</b>
            <div>
              <input type="checkbox" />
              <label>Զրոյական</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Լավ</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Վերանորոգված</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFilters;
