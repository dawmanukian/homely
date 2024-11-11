import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";
import "./images-swiper.css"; // Optional: Add any custom CSS here

const ImagesSwiper = ({ images }) => {
  const swiperRef = useRef(null);

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
    <div style={{ maxWidth: "85%", margin: "auto", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", maxWidth: "100%", height: "100%"}}>
        <button className="custom-prev-button" onClick={goPrev}>
          <FaArrowLeftLong />
        </button>
        <button className="custom-next-button" onClick={goNext}>
          <FaArrowRightLong />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1} // Shows only 1 slide at a time
        pagination={{ clickable: true }}
        style={{ maxWidth: "95%" }} // Restricts Swiper container width
      >
        {images.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://service.homely.am/storage/images/${el}`}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", maxWidth: "1100px",height: "auto", objectFit: "cover"}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesSwiper;
