import React from 'react'
import './card-page.css'
import { Link, useParams } from 'react-router-dom'
import ImagesSwiper from '../../components/images-swiper/ImagesSwiper'
import { FaArrowLeftLong } from "react-icons/fa6";

const CardPage = () => {

    const {itemId} = useParams()

  return (
    <div className='card-page'>
      <Link to={'/'}>
        <button className='back-btn'><FaArrowLeftLong /></button>
      </Link>
      <div className='container'>
        <ImagesSwiper images={['https://img.freepik.com/free-photo/old-white-house-garden_1150-12900.jpg?w=1380&t=st=1698086976~exp=1698087576~hmac=07fdbf402bb9c3e700804ff80c261f53ded82f85b4872641c12be875dbdb12b9','https://image.cnbcfm.com/api/v1/image/106758801-1603459526384-picture-perfect-beautiful-house-on-the-island-of-coronado-in-sunny-california-beautifully-landscaped_t20_6lJOrv.jpg?v=1603459593&w=1600&h=900']}/>
      </div>
    </div>
  )
}

export default CardPage