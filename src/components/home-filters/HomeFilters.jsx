import React, { useEffect, useState } from "react";
import "./home-filters.css";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa6";

const HomeFilters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [rentOrSell, setRentOrSell] = useState("rent");
  const [openPanelNum, setOpenPanelNum] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {openPanelNum && (
        <div
          onClick={() => setOpenPanelNum(null)}
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            zIndex: "2",
          }}
        ></div>
      )}
      <div className="home-filters">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rent-or-sell">
            <input
              type="radio"
              value="sell"
              id="radio-sell"
              {...register("rentOrSell")}
            />
            <label htmlFor="radio-sell">Վաճառք</label>
            <input
              type="radio"
              value="rent"
              id="radio-rent"
              {...register("rentOrSell")}
            />
            <label htmlFor="radio-rent">Վարձակալություն</label>
          </div>
          <div className="all-filters">
            <div className="fill-div" onClick={() => setOpenPanelNum(1)}>
              <div className="fill-name">
                <FaLocationDot className="fill-icon" />
                Համայնք
              </div>
              <div
                className={`filter-panel regions ${
                  openPanelNum === 1 && "active"
                }`}
              >
                <div>
                  <input type="checkbox" id="arabkir" />
                  <label className="filter-check" htmlFor="arabkir">
                    <span>Արաբկիր</span>
                  </label>
                  <input type="checkbox" id="avan" />
                  <label className="filter-check" htmlFor="avan">
                    <span>Ավան</span>
                  </label>
                  <input type="checkbox" id="davtashen" />
                  <label className="filter-check" htmlFor="davtashen">
                    <span>Դավթաշեն</span>
                  </label>
                  <input type="checkbox" id="zeytun" />
                  <label className="filter-check" htmlFor="zeytun">
                    <span>Քանաքեռ-Զեյթուն</span>
                  </label>
                  <input type="checkbox" id="kentron" />
                  <label className="filter-check" htmlFor="kentron">
                    <span>Կենտրոն</span>
                  </label>
                  <input type="checkbox" id="shengavit" />
                  <label className="filter-check" htmlFor="shengavit">
                    <span>Շենգավիթ</span>
                  </label>
                  <input type="checkbox" id="nork-marash" />
                  <label className="filter-check" htmlFor="nork-marash">
                    <span>Նորք-Մարաշ</span>
                  </label>
                  <input type="checkbox" id="nor-nork" />
                  <label className="filter-check" htmlFor="nor-nork">
                    <span>Նոր-Նորք</span>
                  </label>
                  <input type="checkbox" id="nubarashen" />
                  <label className="filter-check" htmlFor="nubarashen">
                    <span>Նուբարաշեն</span>
                  </label>
                  <input type="checkbox" id="erebuni" />
                  <label className="filter-check" htmlFor="erebuni">
                    <span>Էրեբունի</span>
                  </label>
                  <input type="checkbox" id="malatia-sebastia" />
                  <label className="filter-check" htmlFor="malatia-sebastia">
                    <span>Մալաթիա-Սեբաստիա</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fill-div" onClick={() => setOpenPanelNum(2)}>
              <div className="fill-name">
                <FaBed className="fill-icon" />
                Սենյակներ
              </div>
              <div
                className={`filter-panel regions ${
                  openPanelNum === 2 && "active"
                }`}
              >
                <div>
                  <input type="checkbox" id="flat" />
                  <label className="filter-check" htmlFor="flat">
                    <span>1</span>
                  </label>
                  <input type="checkbox" id="hause" />
                  <label className="filter-check" htmlFor="hause">
                    <span>2</span>
                  </label>
                  <input type="checkbox" id="commercion" />
                  <label className="filter-check" htmlFor="commercion">
                    <span>3</span>
                  </label>
                  <input type="checkbox" id="flat" />
                  <label className="filter-check" htmlFor="flat">
                    <span>4</span>
                  </label>
                  <input type="checkbox" id="hause" />
                  <label className="filter-check" htmlFor="hause">
                    <span>5</span>
                  </label>
                  <input type="checkbox" id="commercion" />
                  <label className="filter-check" htmlFor="commercion">
                    <span>6</span>
                  </label>
                  <input type="checkbox" id="commercion" />
                  <label className="filter-check" htmlFor="commercion">
                    <span>7+</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fill-div">
              <div className="fill-name">
                <FaBuilding className="fill-icon" />
                Գույքի տիպը
              </div>
              {/* {openPanelNum === 0 && (
              <div className="filter-panel">
                <div>
                  <input type="checkbox" id="flat" />
                  <label className="filter-check" htmlFor="flat">
                    <span>Բնակարան</span>
                  </label>
                  <input type="checkbox" id="hause" />
                  <label className="filter-check" htmlFor="hause">
                    <span>Առանձնատուն</span>
                  </label>
                  <input type="checkbox" id="commercion" />
                  <label className="filter-check" htmlFor="commercion">
                    <span>Կոմերցիոն</span>
                  </label>
                </div>
              </div>
            )} */}
            </div>
            <input
              className="fill-div"
              onClick={() => setOpenPanelNum(0)}
              type="number"
              placeholder={`Արժեքը մաքս․ - $`}
            />
            {/* {openPanelNum === 0 && (
              <div className="filter-panel">
                <div>
                  <input type="checkbox" id="flat" />
                  <label className="filter-check" htmlFor="flat">
                    <span>Բնակարան</span>
                  </label>
                  <input type="checkbox" id="hause" />
                  <label className="filter-check" htmlFor="hause">
                    <span>Առանձնատուն</span>
                  </label>
                  <input type="checkbox" id="commercion" />
                  <label className="filter-check" htmlFor="commercion">
                    <span>Կոմերցիոն</span>
                  </label>
                </div>
              </div>
            )} */}

            <button className="search-btn" type="submit">
              Որոնել
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeFilters;
