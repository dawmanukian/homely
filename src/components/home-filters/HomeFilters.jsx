import React, { useState } from "react";
import "./home-filters.css";
import { useForm } from "react-hook-form";
import {
  FaLocationDot,
  FaBuilding,
  FaBed,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import StreetsFilters from "../streets-filters/StreetsFilters";
import { AiOutlineClose } from "react-icons/ai";

const HomeFilters = () => {
  const dispatch = useDispatch();
  const regions = [
    "Աբովյան",
    "Աղվերան",
    "Ակունք",
    "Ալափարս",
    "Արագյուղ",
    "Արամուս",
    "Արգել",
    "Առինջ",
    "Արզական",
    "Արզնի",
    "Բալահովիտ",
    "Բջնի",
    "Բյուրեղավան",
    "Չարենցավան",
    "Ձորաղբյուր",
    "Գառնի",
    "Հրազդան",
    "Պտղնի",
    "Սոլակ",
    "Ծաղկաձոր",
    "Վերին Պտղնի",
    "Եղվարդ",
    "Զորավան",
    "Զովք",
    "Զովունի",
    "Ֆանտան",
    "Զովաշեն",
  ];

  const { register, handleSubmit } = useForm();

  const { t } = useTranslation();

  const [openPanelNum, setOpenPanelNum] = useState(null);
  const [showMorePanel, setShowMorePanel] = useState(false);

  const [streetName, setStreetName] = useState("");
  const [regionName, setRegionName] = useState([]);
  const [selectedStreet, setSelectedStreet] = useState("");

  const onSubmit = (data) => {
    console.log(streetName)
    data = { ...data, regions: regionName, address: streetName };
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
                  <input
                    type="checkbox"
                    id="flat"
                    value={"Բնակարան"}
                    {...register("itemType")}
                  />
                  <label className="filter-check" htmlFor="flat">
                    <span>{t("flat")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="hause"
                    value={"Առանձնատուն"}
                    {...register("itemType")}
                  />
                  <label className="filter-check" htmlFor="hause">
                    <span>{t("mansion")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="commercion"
                    value={"Կոմերցիոն"}
                    {...register("itemType")}
                  />
                  <label className="filter-check" htmlFor="commercion">
                    <span>{t("commercial")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="land_plot"
                    value={"Հողատարածք"}
                    {...register("itemType")}
                  />
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
                  <p style={{ marginBottom: "15px" }}>Երևան</p>
                  <input
                    type="checkbox"
                    id="arabkir"
                    value={"Արաբկիր"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="arabkir">
                    <span>{t("arabkir")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="avan"
                    value={"Ավան"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="avan">
                    <span>{t("avan")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="davtashen"
                    value={"Դավթաշեն"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="davtashen">
                    <span>{t("davtashen")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="zeytun"
                    value={"Զեյթուն"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="zeytun">
                    <span>{t("kanaker-zeytun")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="kentron"
                    value={"Կենտրոն"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="kentron">
                    <span>{t("kentron")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="poqr-kentron"
                    value={"Փոքր կենտրոն"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="poqr-kentron">
                    <span>Փոքր Կենտրոն</span>
                  </label>
                  <input
                    type="checkbox"
                    id="shengavit"
                    value={"Շենգավիթ"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="shengavit">
                    <span>{t("shengavit")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nork-marash"
                    value={"Նորք-Մարաշ"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="nork-marash">
                    <span>{t("nork-marash")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nor-nork"
                    value={"Նոր Նորք"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="nor-nork">
                    <span>{t("nor nork")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="nubarashen"
                    value={"Նուբարաշեն"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="nubarashen">
                    <span>{t("nubarashen")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="erebuni"
                    value={"Էրեբունի"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="erebuni">
                    <span>{t("erebuni")}</span>
                  </label>
                  <input
                    type="checkbox"
                    id="malatia-sebastia"
                    value={"Մալաթիա-Սեբաստիա"}
                    onChange={(evn) => {
                      return regionName.includes(evn.target.value)
                        ? setRegionName(
                            regionName.filter((x) => x !== evn.target.value)
                          )
                        : setRegionName([...regionName, evn.target.value]);
                    }}
                  />
                  <label className="filter-check" htmlFor="malatia-sebastia">
                    <span>{t("malatia-sebastia")}</span>
                  </label>
                  <p style={{ marginBottom: "15px", marginTop: "15px" }}>
                    Կոտայք
                  </p>
                  {regions.map((region) => (
                    <>
                      <input
                        key={region}
                        type="checkbox"
                        id={region}
                        value={region}
                        onChange={(evn) => {
                          return regionName.includes(evn.target.value)
                            ? setRegionName(
                                regionName.filter((x) => x !== evn.target.value)
                              )
                            : setRegionName([...regionName, evn.target.value]);
                        }}
                      />
                      <label className="filter-check" htmlFor={region}>
                        <span>{region}</span>
                      </label>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="fill-div rm" onClick={() => setOpenPanelNum(2)}>
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
              <div className="close_btn_menu" style={{gap:"10px"}}>
                <button style={{width: "200px", background: "green"}} >
                  Որոնել
                </button>
                <button onClick={(evn) => {
                  evn.preventDefault();
                  setShowMorePanel(false);
                }}>
                  <AiOutlineClose />
                </button>
              </div>
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
                  <div>
                  <div className="checks-div">
                    <b id="mob_rooms_n">{t("rooms")}</b>
                    <div className="checks-div-panel" id="mob_rooms">
                      <input
                        type="checkbox"
                        id="panel1"
                        value={"1"}
                        {...register("roomsNumber")}
                      />
                      <label className="custom-check" htmlFor="panel1">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>1</span>
                      </label>
                      <input
                        type="checkbox"
                        id="stone1"
                        value={"2"}
                        {...register("roomsNumber")}
                      />
                      <label className="custom-check" htmlFor="stone1">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>2</span>
                      </label>
                      <input
                        type="checkbox"
                        id="monolith1"
                        value={"3"}
                        {...register("roomsNumber")}
                      />
                      <label className="custom-check" htmlFor="monolith1">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>3</span>
                      </label>
                      <input
                        type="checkbox"
                        id="other1"
                        value={"4"}
                        {...register("roomsNumber")}
                      />
                      <label className="custom-check" htmlFor="other1">
                        <div>
                          <FaCheck className="check-icons" />
                        </div>
                        <span>4+</span>
                      </label>
                    </div>
                  </div>
                  </div>
                  <input
                    type="text"
                    placeholder={t("address")}
                    className="search-id"
                    value={streetName}
                    onChange={(evn) => {
                      setStreetName(evn.target.value);
                      selectedStreet && setSelectedStreet(null);
                    }}
                  />
                  {streetName && !selectedStreet && (
                    <StreetsFilters
                      streetName={streetName}
                      region={regionName}
                      onSelect={(street) => {
                        setStreetName(street);
                        setSelectedStreet(street);
                      }}
                    />
                  )}
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
                <div style={{ width: "100%", display: "flex", gap: "15px" }}>
                  <div className="floor-data prc" style={{ display: "flex" }}>
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
                  <div className="floor-data prc" style={{ display: "flex" }}>
                    <input
                      type="number"
                      placeholder={t("area_from")}
                      className="search-floor"
                      min={0}
                      {...register("area_from")}
                    />
                    <input
                      type="number"
                      placeholder={t("area_to")}
                      className="search-floor"
                      min={0}
                      {...register("area_to")}
                    />
                  </div>
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
