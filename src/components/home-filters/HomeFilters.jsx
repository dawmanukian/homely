import React, { useEffect, useState } from "react";
import "./home-filters.css";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
const HomeFilters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [rentOrSell, setRentOrSell] = useState("rent");
  const [openPanelNum, setOpenPanelNum] = useState(null);
  const [showMorePanel, setShowMorePanel] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="home-filters">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="rent-or-sell-panel">
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
          </div>
          <div className="all-filters">
            {openPanelNum && (
              <div
                onClick={() => setOpenPanelNum(null)}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "fixed",
                  zIndex: "6",
                }}
              ></div>
            )}
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
                  <input
                    type="checkbox"
                    id="arabkir"
                    value={"arabkir"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="arabkir">
                    <span>Արաբկիր</span>
                  </label>
                  <input
                    type="checkbox"
                    id="avan"
                    value={"avan"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="avan">
                    <span>Ավան</span>
                  </label>
                  <input
                    type="checkbox"
                    id="davtashen"
                    value={"davtashen"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="davtashen">
                    <span>Դավթաշեն</span>
                  </label>
                  <input
                    type="checkbox"
                    id="zeytun"
                    value={"zeytun"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="zeytun">
                    <span>Քանաքեռ-Զեյթուն</span>
                  </label>
                  <input
                    type="checkbox"
                    id="kentron"
                    value={"kentron"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="kentron">
                    <span>Կենտրոն</span>
                  </label>
                  <input
                    type="checkbox"
                    id="shengavit"
                    value={"shengavit"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="shengavit">
                    <span>Շենգավիթ</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nork-marash"
                    value={"nork-marash"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nork-marash">
                    <span>Նորք-Մարաշ</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nor-nork"
                    value={"nor-nork"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nor-nork">
                    <span>Նոր-Նորք</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nubarashen"
                    value={"nubarashen"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nubarashen">
                    <span>Նուբարաշեն</span>
                  </label>
                  <input
                    type="checkbox"
                    id="erebuni"
                    value={"erebuni"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="erebuni">
                    <span>Էրեբունի</span>
                  </label>
                  <input
                    type="checkbox"
                    id="malatia-sebastia"
                    value={"malatia-sebastia"}
                    {...register("regions")}
                  />
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
                  <input
                    type="checkbox"
                    id="rooms_1"
                    value={"1"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_1">
                    <span>1</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_2"
                    value={"2"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_2">
                    <span>2</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_3"
                    value={"3"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_3">
                    <span>3</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_4"
                    value={"4"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_4">
                    <span>4</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_5"
                    value={"5"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_5">
                    <span>5</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_6"
                    value={"6"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_6">
                    <span>6</span>
                  </label>
                  <input
                    type="checkbox"
                    id="rooms_7"
                    value={"7"}
                    {...register("roomsNumber")}
                  />
                  <label className="filter-check" htmlFor="rooms_7">
                    <span>7+</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fill-div" onClick={() => setOpenPanelNum(3)}>
              <div className="fill-name">
                <FaBuilding className="fill-icon" />
                Գույքի տիպը
              </div>
              <div className={`filter-panel ${openPanelNum === 3 && "active"}`}>
                <div>
                  <input type="checkbox" id="flat" value={"flat"} />
                  <label className="filter-check" htmlFor="flat">
                    <span>Բնակարան</span>
                  </label>
                  <input type="checkbox" id="hause" value={"hause"} />
                  <label className="filter-check" htmlFor="hause">
                    <span>Առանձնատուն</span>
                  </label>
                  <input type="checkbox" id="commercion" value={"commercion"} />
                  <label className="filter-check" htmlFor="commercion">
                    <span>Կոմերցիոն</span>
                  </label>
                  <input type="checkbox" id="land_plot" value={"landPlot"} />
                  <label className="filter-check" htmlFor="land_plot">
                    <span>Հողատարածք</span>
                  </label>
                </div>
              </div>
            </div>
            <div
              className={`fill-div ${showMorePanel && 'opened'}`}
              onClick={() => setShowMorePanel(!showMorePanel)}
            >
              Տեսնել ավելին{" "}
              {showMorePanel ? (
                <FaChevronUp style={{ marginLeft: "10px" }} />
              ) : (
                <FaChevronDown style={{ marginLeft: "10px" }} />
              )}
            </div>
            <button className="search-btn" type="submit">
              Որոնել
            </button>
          </div>
          {showMorePanel && <div className="more-panel"></div>}
        </form>
      </div>
    </>
  );
};

export default HomeFilters;
