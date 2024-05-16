import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ElementCard from "../element-card/ElementCard";
import "./cards-swiper.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SwiperCore from "swiper/core";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// Install Swiper modules
SwiperCore.use([Navigation]);

const CardsSwiper = ({ status }) => {
  const [likedCards, setLikedCards] = useState(localStorage.getItem("liked"));

  if (likedCards === "" || likedCards == null) {
    localStorage.setItem("liked", JSON.stringify([]));
  }

  const [cards, setCards] = useState(
    useSelector((state) => state.allItems.items)
  );
  const [cardsImages, setCardsImages] = useState(
    useSelector((state) => state.allImages.images)
  );
  const swiperRef = useRef(null);

  // Event handlers for navigation
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const like = (id) => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    cards.forEach((el) => {
      if (el.id === id) {
        if (liked.includes(id)) {
          const filtered_liked = liked.filter((el) => el !== id);
          localStorage.setItem("liked", JSON.stringify(filtered_liked));
        } else {
          localStorage.setItem("liked", JSON.stringify([...liked, id]));
        }
      }
    });
    setLikedCards(() => localStorage.getItem("liked"));
  };

  if (cards.filter((e) => e.proposal === status).length === 0) {
    return null;
  }

  return (
    <div
      className={"cards-swiper-panel"}
    >
      <div style={{ display: "flex" }}>
        <button className="custom-prev-button" onClick={goPrev}>
          <FaArrowLeftLong />
        </button>
        <button className="custom-next-button" onClick={goNext}>
          <FaArrowRightLong />
        </button>
      </div>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        onSwiper={(swiper) => (window.swiper = swiper)}
        breakpoints={{
          650: {
            slidesPerView: 2,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1625: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((el) => {
          if (el.proposal === status) {
            return (
              <SwiperSlide key={el.id}>
                {console.log("mher")}
                <ElementCard
                  onLike={(id) => like(id)}
                  el={el}
                  images={cardsImages.filter(
                    (img) => Number(img.item_id) === el.id
                  )}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default CardsSwiper;
