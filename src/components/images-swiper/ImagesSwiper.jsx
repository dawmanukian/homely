import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./images-swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";

const ImagesSwiper = ({ images }) => {
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

  return (
    <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex", position: 'absolute', justifyContent: 'space-between', width: '100%', padding: '15px', zIndex: '99' }}>
        <button className="custom-prev-button" onClick={goPrev}>
          <FaArrowLeftLong />
        </button>
        <button className="custom-next-button" onClick={goNext}>
          <FaArrowRightLong />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
        slidesPerView={1}
      >
        {images.map((el) => {
          return (
            <SwiperSlide key={Math.random()}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`https://service.homely.am/storage/images/${el}`}
                  className="card-swiper-img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
