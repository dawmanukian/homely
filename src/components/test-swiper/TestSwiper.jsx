// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ElementCard from '../element-card/ElementCard';

const TestSwiper = ({images}) => {

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        500: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1120: {
          slidesPerView: 4
        },
      }}
    >
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
      <SwiperSlide><ElementCard /></SwiperSlide>
    </Swiper>
  )
}

export default TestSwiper