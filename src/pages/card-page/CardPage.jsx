import { React, useState } from "react";
import "./card-page.css";
import { Link, useParams } from "react-router-dom";
import ImagesSwiper from "../../components/images-swiper/ImagesSwiper";
import { FaArrowLeftLong, FaHeart, FaLocationDot } from "react-icons/fa6";
import Footer from "../../components/footer/Footer";
import { FaCalendarAlt } from "react-icons/fa";
import CardsSwiper from "../../components/cards-swiper/CardsSwiper";
import { PiFireBold, PiShareNetworkBold } from "react-icons/pi";
import { ImBubble, ImCheckmark } from "react-icons/im";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaTelegram, FaSquareXTwitter } from "react-icons/fa6";
import SendRequest from "../../components/send-request/SendRequest";
import BrokerInfo from "../../components/broker-info/BrokerInfo";
import { FaImage } from "react-icons/fa6";
// import { YMaps } from "react-yandex-maps";
import { AiOutlineClose } from "react-icons/ai";
import YaMap from "../../components/ya-map/YaMap";

const CardPage = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  const [showReqPanel, setShowReqPanel] = useState(false);
  const [showShareLink, setShowShareLink] = useState(false);
  const liked = localStorage.getItem("liked");
  const [data, setData] = useState([
    {
      id: 1,
      img: [
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg",
      ],
      title: "Քանաքեռ-Զեյթուն, Կ. Ուլնեցու փող.",
      address: "Կ. Ուլնեցու փող., Քանաքեռ-Զեյթուն, Երևան",
      price: "195,000",
    },
    {
      id: 2,
      img: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      title: "Կենտրոն, Զավարյան փող",
      address: "Զավարյան փող, Կենտրոն, Երևան",
      price: "89,000",
    },
    {
      id: 3,
      img: [
        "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      title: "Նոր Նորք, Գյուրջյան փող",
      address: "Գյուրջյան փող, Նոր Նորք, Երևան",
      price: "130,000",
    },
    {
      id: 4,
      img: [
        "https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg",
      ],
      title: 'Բնակարան "Նկարիչների շենքում"',
      address: "Հր.Քոչար փող, Արաբկիր, Երևան",
      price: "180,000",
    },
  ]);

  const { itemId } = useParams();

  const cardData = data.filter((el) => el.id === Number(itemId));

  return (
    <>
      {showSwiper && (
        <div className="img-swiper-panel">
          <button
            className="close-swiper-btn"
            onClick={() => setShowSwiper(false)}
          >
            <AiOutlineClose />
          </button>
          <div style={{ zIndex: "10", width: "100%" }}>
            <ImagesSwiper
              images={[
                "https://img.staticmb.com/mbcontent/images/uploads/2023/2/home-interior-colour-combination.jpg",
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]}
            />
          </div>
        </div>
      )}
      <div className="card-page">
        {showReqPanel && <SendRequest onClose={() => setShowReqPanel(false)} />}
        <div className="container">
          <Link to={"/"}>
            <button className="back-btn" style={{ zIndex: "2" }}>
              <FaArrowLeftLong />
            </button>
          </Link>
          {cardData.map((el) => {
            return (
              <div className="card-page-data" key={el.id}>
                {/* <ImagesSwiper images={el.img} /> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "13px",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/5/0/Julie-Dodson_Dephino_Living-Room_Beauty.jpg.rend.hgtvcom.616.462.suffix/1420492278316.jpeg"
                    height={"413px"}
                    width={"60%"}
                    className="itm-img"
                  />
                  <div className="an-images">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhpq-Wp0JhwFHrDxsYCBZP0D_rO8wwe5KEOZSYwICmnRGrs5_rR9s-qz5EP1BGXe9Tec&usqp=CAU"
                      height={"200px"}
                      width={"100%"}
                      className="itm-img"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height={"200px"}
                      width={"100%"}
                      className="itm-img"
                    />
                  </div>
                  <button
                    className="view-all-images"
                    onClick={() => setShowSwiper(true)}
                  >
                    <b>Բոլոր նկարները</b> <FaImage className="img-icon" />
                  </button>
                </div>
                <span className="card-add-date">
                  Ավելացվել է 27․01․2023 <FaCalendarAlt />
                </span>
                <div className="item_information">
                  <div style={{ display: "grid", gap: "20px" }}>
                    <div className="card-title-panel">
                      <div className="card-header">
                        <p className="card-title-pg">{el.title}</p>
                        <p className="card-address">
                          <FaLocationDot /> {el.address}
                        </p>
                      </div>
                      <div className="card-like">
                        <FaHeart
                          className="card-like-icon"
                          style={{
                            color: liked.includes(el.id)
                              ? "rgb(245, 81, 81)"
                              : "gray",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "17px",
                      }}
                    >
                      <b className="card-price">$ {el.price}</b>
                      <div className="card-type dis">
                        <PiFireBold /> Իջեցված գին
                      </div>
                    </div>
                    <div className="card-id">
                      <p>ID {el.id}</p>
                    </div>
                    <h2>Նկարագրություն</h2>
                    <div className="card-description">
                      <p>
                        Վաճառվում է 3 սենյականոց ինքնատիպ ոճով վերանորոգված և
                        կահավորված բնակարան նորակառույց շենքում: Մուտքի դուռը
                        երկաթյա է, պատուհանները եվրոպական արտադրության են,
                        հատակը ծածկված է լամինատով: Սանհանգույցները երեսպատված է
                        բարձրորակ սալիկներով և հագեցած է անհրաժեշտ
                        սանտեխնիկայով: Տեղադրված են անհատական ջեռուցման և
                        օդափոխության համակարգեր:
                      </p>
                    </div>
                    <div className="card-description">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          flexWrap: "wrap",
                          gap: "7px",
                        }}
                      >
                        <div className="card-check">
                          <b>Գազ</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Տաք ջուր</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Կայանատեղի</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Գազ</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Տաք ջուր</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Կայանատեղի</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Գազ</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Տաք ջուր</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                        <div className="card-check">
                          <b>Կայանատեղի</b>
                          <ImCheckmark className="check-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="card-description">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          flexWrap: "wrap",
                          gap: "7px",
                        }}
                      >
                        <div className="card-check">
                          <b>#Գազ</b>
                        </div>
                        <div className="card-check">
                          <b>#Տաք ջուր</b>
                        </div>
                        <div className="card-check">
                          <b>#Կայանատեղի</b>
                        </div>
                        <div className="card-check">
                          <b>#Գազ</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <BrokerInfo />
                    <div className="send-req">
                      <button
                        className="share-link-btn"
                        onClick={() => setShowShareLink(!showShareLink)}
                      >
                        <PiShareNetworkBold style={{ fontSize: "20px" }} />
                        <b>Կիսվել հղումով</b>
                      </button>
                      <button
                        className="send-req-btn"
                        onClick={() => setShowReqPanel(true)}
                      >
                        <span>Ուղարկել հայտ</span>
                        <ImBubble className="send-icon" />
                      </button>
                      {showShareLink && (
                        <div className="share-link-panel">
                          <FacebookShareButton
                            url={`https://homely-sigma.vercel.app/item/${itemId}`}
                          >
                            <FaFacebook
                              className="share-link-icon"
                              style={{ color: "#0866FFFF" }}
                            />
                          </FacebookShareButton>
                          <TelegramShareButton
                            url={`https://homely-sigma.vercel.app/item/${itemId}`}
                          >
                            <FaTelegram
                              className="share-link-icon"
                              style={{ color: "#259CD8FF" }}
                            />
                          </TelegramShareButton>
                          <TwitterShareButton
                            url={`https://homely-sigma.vercel.app/item/${itemId}`}
                          >
                            <FaSquareXTwitter className="share-link-icon" />
                          </TwitterShareButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="maps">
            <YaMap />
          </div>
        </div>
        {/* <div style={{ width: "100%" }}>
        <h2 className="card-page-title">Նման հայտարարություններ</h2>
        <CardsSwiper />
      </div> */}
        <Footer />
      </div>
    </>
  );
};

export default CardPage;
