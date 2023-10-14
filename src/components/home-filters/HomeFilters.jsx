import React, { useState } from 'react'
import './home-filters.css'
import { BsFillHouseAddFill, BsFillHouseFill } from "react-icons/bs";

const HomeFilters = () => {

  const [type, setType] = useState(0);

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
      </div>
    </div>
  )
}

export default HomeFilters