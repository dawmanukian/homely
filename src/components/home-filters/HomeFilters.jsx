import React, { useState } from 'react'
import './home-filters.css'
import { BsFillHouseAddFill, BsFillHouseFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSistrix } from "react-icons/fa6";

const HomeFilters = () => {

  const [showMore, setShowMore] = useState(false)
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
          <button className={`more-btn ${showMore ? 'active' : null}`} onClick={() => setShowMore(!showMore)}>
            <AiFillSetting className='type-icon'/>
            Ավելին
          </button>
        </div>
        <div className='filter-checks' style={showMore ? {display: 'flex'} : {display: 'none'}}>
          <div>
            <h4>Գույքի տիպը</h4>
            <div>
              <input type='checkbox'/>
              <label>Բնակարան</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Հողատարածք</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Կոմերցիոն</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Առանձնատուն</label>
            </div>
          </div>
          <div>
            <h4>Սենյակներ</h4>
            <div>
              <input type='checkbox'/>
              <label>1</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>2</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>3</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>4+</label>
            </div>
          </div>
          <div>
            <h4>Շենքի տիպ</h4>
            <div>
              <input type='checkbox'/>
              <label>Պանելային</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Քարե</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Նորակառույց</label>
            </div>
            <div>
              <input type='checkbox'/>
              <label>Այլ</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFilters