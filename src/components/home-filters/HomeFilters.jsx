import React, { useEffect, useState } from "react";
import "./home-filters.css";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const HomeFilters = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { t, i18n } = useTranslation();

  const [rentOrSell, setRentOrSell] = useState("rent");
  const [openPanelNum, setOpenPanelNum] = useState(null);
  const [showMorePanel, setShowMorePanel] = useState(false);
  const [selectAddress, setSelectAddress] = useState("");
  const onSubmit = (data) => {
    dispatch({
      type: "add-filters",
      payload: { data },
    });
    setShowMorePanel(false);
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
              <label htmlFor="radio-sell">{t("sell")}</label>
              <input
                type="radio"
                value="rent"
                id="radio-rent"
                {...register("rentOrSell")}
              />
              <label htmlFor="radio-rent">{t("rent")}</label>
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
            <div className="fill-div" onClick={() => setOpenPanelNum(3)}>
              <div className="fill-name">
                <FaBuilding className="fill-icon" />
                {t("item_type")}
              </div>
              <div className={`filter-panel ${openPanelNum === 3 && "active"}`}>
                <div>
                  <input type="checkbox" id="flat" value={"flat"} />
                  <label className="filter-check" htmlFor="flat">
                    <span>{t("flat")}</span>
                  </label>
                  <input type="checkbox" id="hause" value={"hause"} />
                  <label className="filter-check" htmlFor="hause">
                    <span>{t("mansion")}</span>
                  </label>
                  <input type="checkbox" id="commercion" value={"commercion"} />
                  <label className="filter-check" htmlFor="commercion">
                    <span>{t("commercial")}</span>
                  </label>
                  <input type="checkbox" id="land_plot" value={"landPlot"} />
                  <label className="filter-check" htmlFor="land_plot">
                    <span>{t("land_plot")}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fill-div" onClick={() => setOpenPanelNum(1)}>
              <div className="fill-name">
                <FaLocationDot className="fill-icon" />
                {t("region")}
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
                    <span>{t("arabkir")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="avan"
                    value={"avan"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="avan">
                    <span>{t("avan")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="davtashen"
                    value={"davtashen"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="davtashen">
                    <span>{t("davtashen")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="zeytun"
                    value={"zeytun"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="zeytun">
                    <span>{t("kanaker-zeytun")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="kentron"
                    value={"kentron"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="kentron">
                    <span>{t("kentron")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="shengavit"
                    value={"shengavit"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="shengavit">
                    <span>{t("shengavit")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nork-marash"
                    value={"nork-marash"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nork-marash">
                    <span>{t("nork-marash")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nor-nork"
                    value={"nor-nork"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nor-nork">
                    <span>{t("nor-nork")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nubarashen"
                    value={"nubarashen"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="nubarashen">
                    <span>{t("nubarashen")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="erebuni"
                    value={"erebuni"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="erebuni">
                    <span>{t("erebuni")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="malatia-sebastia"
                    value={"malatia-sebastia"}
                    {...register("regions")}
                  />
                  <label className="filter-check" htmlFor="malatia-sebastia">
                    <span>{t("malatia-sebastia")}</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="fill-div" onClick={() => setOpenPanelNum(2)}>
              <div className="fill-name">
                <FaBed className="fill-icon" />
                {t("rooms")}
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
            <div
              className={`fill-div ${showMorePanel && "opened"}`}
              onClick={() => setShowMorePanel(!showMorePanel)}
            >
              {t("more")}{" "}
              {showMorePanel ? (
                <FaChevronUp style={{ marginLeft: "10px" }} />
              ) : (
                <FaChevronDown style={{ marginLeft: "10px" }} />
              )}
            </div>
            <button className="search-btn" type="submit">
              {t("search")}
            </button>
          </div>
          {showMorePanel && (
            <div className="more-panel">
              <div className="first-panel">
                <div className="panel-box">
                  <div className="id-panel">
                    <b>ID</b>
                  </div>
                  <input
                    type="number"
                    placeholder={t("search")}
                    className="search-id"
                    {...register("id")}
                  />
                </div>
                <div className="address-panel-div">
                  <input
                    type="text"
                    placeholder={t("address")}
                    className="search-id"
                    {...register("address")}
                  />
                </div>
                <div className="floor-data">
                  <input
                    type="number"
                    placeholder={t("floor_min")}
                    className="search-floor"
                    min={1}
                    {...register("floor_min")}
                  />
                  <input
                    type="number"
                    placeholder={t("floor_max")}
                    className="search-floor"
                    min={1}
                    {...register("floor_max")}
                  />
                </div>
              </div>
              <div className="first-panel two">
                <div className="floor-data prc">
                  <input
                    type="number"
                    placeholder={t("price_from")}
                    className="search-floor"
                    min={0}
                    {...register("price_from")}
                  />
                  <input
                    type="number"
                    placeholder={t("price_to")}
                    className="search-floor"
                    min={0}
                    {...register("price_to")}
                  />
                </div>
                <div className="checks-panels">
                  <div className="checks-div">
                    <b>{t("building_type")}</b>
                    <div className="checks-div-panel">
                      <input
                        type="checkbox"
                        id="panel"
                        value={"panel"}
                        {...register("building_type")}
                      />
                      <label className="custom-check" htmlFor="panel">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("panel")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="stone"
                        value={"stone"}
                        {...register("building_type")}
                      />
                      <label className="custom-check" htmlFor="stone">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("stone")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="monolith"
                        value={"monolith"}
                        {...register("building_type")}
                      />
                      <label className="custom-check" htmlFor="monolith">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("monolith")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="other"
                        value={"other"}
                        {...register("building_type")}
                      />
                      <label className="custom-check" htmlFor="other">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("new")}</span>
                      </label>
                    </div>
                  </div>
                  <div className="checks-div">
                    <b>{t("status")}</b>
                    <div className="checks-div-panel">
                      <input
                        type="checkbox"
                        id="renovated"
                        value={"renovated"}
                        {...register("status")}
                      />
                      <label className="custom-check" htmlFor="renovated">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("renovated")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="good"
                        value={"good"}
                        {...register("status")}
                      />
                      <label className="custom-check" htmlFor="good">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("good")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="null"
                        value={"null"}
                        {...register("status")}
                      />
                      <label className="custom-check" htmlFor="null">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("null")}</span>
                      </label>
                      <input
                        type="checkbox"
                        id="new"
                        value={"new"}
                        {...register("status")}
                      />
                      <label className="custom-check" htmlFor="new">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>{t("designer_style")}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default HomeFilters;
