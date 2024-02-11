import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ElementCard from "../element-card/ElementCard";
import "./cards-swiper.css";
import { useState } from "react";
import { UseSelector, useSelector } from "react-redux";

const CardsSwiper = ({ status, data }) => {
  const [likedCards, setLikedCards] = useState(localStorage.getItem("liked"));

  if (likedCards === "" || likedCards == null) {
    localStorage.setItem("liked", JSON.stringify([]));
  }

  const [cards, setCards] = useState(useSelector(state => state.allItems.items));

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

  return (
    <div className="cards-swiper-panel">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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
          return (
            <SwiperSlide key={el.id}>
              <ElementCard
                like={like}
                price={el.price}
                id={el.id}
                img={el.img}
                address={el.address}
                title={el.title}
                status={status}
                rooms={el.rooms}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardsSwiper;
