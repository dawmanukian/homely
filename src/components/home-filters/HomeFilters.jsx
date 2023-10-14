import React, { useState } from 'react'
import './home-filters.css'
import { BsFillHouseAddFill, BsFillHouseFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSistrix } from "react-icons/fa6";

const HomeFilters = () => {

  const [type, setType] = useState(0);
  const [price, setPrice] = useState(0);
  console.log(price)

  return (
    <div className='home-filters'>
      <div className='filter-tabs'>
        <button className={`type-btn ${!type ? 'active' : null}`} onClick={() => setType(0)}>
          <BsFillHouseAddFill className='type-icon'/>
          Վաճառք
        </button>
        <button className={`type-btn ${type ? 'active' : null}`} onClick={() => setType(1)}>
          <BsFillHouseFill className='type-icon'/>
          Վարձակալություն
        </button>
        <input placeholder='Որոնել ․․․ ' className='search-inpt'/>
        <div className='num-inputs'>
          <input type='number' className='price-inpt' placeholder='Գին - սկսած'/>
          <input type='number' className='price-inpt' placeholder='Գին - մինչև'/>
          <input type='number' className='price-inpt' placeholder='Մակերես - սկսած'/>
          <input type='number' className='price-inpt' placeholder='Մակերես - մինչև'/>
        </div>
        <div className='filter-btns'>
          <button className='search-btn'>
            <FaSistrix className='type-icon'/>
            Որոնել
          </button>
          <button className='more-btn'>
            <AiFillSetting className='type-icon'/>
            Ավելին
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeFilters