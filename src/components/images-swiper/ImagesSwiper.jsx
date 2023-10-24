import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './images-swiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImagesSwiper = ({images}) => {
  return (
    <div>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        >
            {
                images.map(el => {
                    return (
                        <SwiperSlide key={Math.random()}>
                            <img src={el} className='card-swiper-img'/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default ImagesSwiper