import "./card-page.css";
import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImagesSwiper from "../../components/images-swiper/ImagesSwiper";
import { FaArrowLeftLong, FaHeart, FaLocationDot } from "react-icons/fa6";
import Footer from "../../components/footer/Footer";
import { PiShareNetworkBold } from "react-icons/pi";
import { ImBubble } from "react-icons/im";
import SendRequest from "../../components/send-request/SendRequest";
import { AiOutlineClose } from "react-icons/ai";
import { TbStairsUp } from "react-icons/tb";
import { TbDimensions } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import CopyToClipboard from "react-copy-to-clipboard";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaCircleCheck } from "react-icons/fa6";
import axios from "axios"
import {FaArrowRightLong } from "react-icons/fa6";

const CardPage = () => {

  const [itemData, setItemData] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const get_item_data = async () => {
      try {
        const { data } = await axios.get(
          "https://service.homely.am/api/item/get",
          {
            params: itemId,
          }
        );
        setItemData(() => data.data);
        setShowLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_item_data();
  }, []);

  console.log(images)

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: "Գույքի հղումը պատճենված է",
      icon: "success",
    });
  };
  const [imagePosition, setImagePosition] = useState(0);

  const itemImages = images;

  const swipRight = () =>
    imagePosition !== (itemImages.length - 1) * 100 &&
    setImagePosition(imagePosition + 100);
  const swipLeft = () =>
    imagePosition !== 0 && setImagePosition(imagePosition - 100);

  const itemId = useParams();
  const [showLoading, setShowLoading] = useState(true) 
  const [showSwiper, setShowSwiper] = useState(false);
  const [showReqPanel, setShowReqPanel] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      {
        showLoading ? <div className="pg_h">Գույքը բեռնվում է ․․․</div> : (
          <>
      {showSwiper && (
        <div className="img-swiper-panel">
          <div className="btn-div">
            <button
              className="close-swiper-btn"
              onClick={() => setShowSwiper(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div style={{ zIndex: "10", width: "100%", height: "100%", display: 'flex'}}>
            <ImagesSwiper images={JSON.parse(itemData[0].all_images)} />
          </div>
        </div>
      )}
      <div className="card-page">
        {showReqPanel && <SendRequest onClose={() => setShowReqPanel(false)} />}
        <div className="container">
          <Link to={"/"}>
            <button class="button-2" role="button">
              <FaArrowLeftLong />
            </button>
          </Link>
          {itemData.map((el) => {
            return (
              <>
                <div className="card-page-data" key={el.id}>
                <div className="card-head">
          <div
            className="head-images-swiper-pg"
            onClick={() => setShowSwiper(true)}
          >
            {JSON.parse(el.all_images).slice(0, 4).map((img) => {
              return (
                <picture>
                  <source srcSet={`https://service.homely.am/storage/images/${img}`} type=""/>
                  <img
                    loading="lazy"
                    src={`https://service.homely.am/storage/images/${img}`}
                    className="card-img-pg"
                    width={"100%"}
                  />
                </picture>
              );
            })}
          </div>
      </div>
                  <span className="card-add-date">
                  </span>
                  <div className="item_information">
                    <div
                      style={{ display: "grid", gap: "15px", width: "100%" }}
                    >
                      <div className="card-title-panel">
                        <div className="card-header">
                          <p className="card-title-pg">{el.title}</p>
                        </div>
                      </div>
                      <div className="card__page_header">
                        <b className="page_card-price">$ {el.price}</b>
                        <div className={el.proposal}>{el.proposal !== 'null' && t(el.proposal)}</div>
                        <div
                          className="card-type"
                          style={{ background: "green" }}
                        >
                          {t(el.type)}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          flexWrap: "wrap",
                        }}
                      >
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
                        <div className="icon-div">
                          <p>ID {el.id}</p>
                        </div>
                      </div>
                      <span className="card_page_street">
                        <FaLocationDot /> {el.street}
                      </span>
                      <h2>Նկարագրություն</h2>
                      <div className="card-description">
                        <p>{el.description}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: '35px'
                        }}
                      >
                        <div style={{ display: "flex", gap: "25px" }}>
                          <div className="des_about">
                            <div className="des_block">
                              <span>Շրջան</span>
                              <b>{t(el.region)}</b>
                            </div>
                            <div className="des_block">
                              <span>Շենքի տիպը</span>
                              <b>{t(el.type_of_building)}</b>
                            </div>
                            <div className="des_block">
                              <span>Կարգավիճակ</span>
                              <b>{t(el.status)}</b>
                            </div>
                            <div className="des_block">
                              <span>Պատշգամբ</span>
                              <b>{t(el.balcony)}</b>
                            </div>
                            <div className="des_block">
                              <span>Կահույք</span>
                              <b>{t(el.furniture)}</b>
                            </div>
                          </div>
                        </div>
                        <div>
                          {el.conveniences.map((e) => {
                            return (
                              <div style={{ marginBottom: "5px" }}>
                                <b>
                                  <FaCircleCheck style={{ color: "green" }} />{" "}
                                  {e}
                                </b>
                              </div>
                            );
                          })}
                          <br />
                          {el.facilities_in_the_building.map((e) => {
                            return (
                              <div style={{ marginBottom: "5px" }}>
                                <b>
                                  <FaCircleCheck style={{ color: "green" }} />{" "}
                                  {e}
                                </b>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="send-req">
                        <CopyToClipboard text={`https://homely.am/item/${itemId.itemId}`}>
                          <button className="share-link-btn" onClick={showSwal}>
                            <PiShareNetworkBold style={{ fontSize: "20px" }} />
                            <b>{t("share-link")}</b>
                          </button>
                        </CopyToClipboard>
                        <button className="send-req-btn">
                          <span>{t("send-request")}</span>
                          <ImBubble className="send-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {el.video_url && (
                  <iframe 
                    className="youtube_video"
                    width="600"
                    height="315"
                    src={el.video_url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )} */}
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
        )
      }
    </>

  );
};

export default CardPage;
