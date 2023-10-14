import React, { useState } from 'react'
import './header.css'
import { FaPhone, FaUser } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import HomeFilters from '../home-filters/HomeFilters';

const Header = () => {

  const [drop, setDrop] = useState(false)

  return (
    <header>
      <div className='header-contact'>
        <select className='header-select'>
          <optgroup>
            <option>ARM</option>
            <option>ENG</option>
            <option>RU</option>
          </optgroup>
        </select>
        <select className='header-select'>
          <optgroup>
            <option>USD</option>
            <option>AMD</option>
            <option>EUR</option>
            <option>RUB</option>
          </optgroup>
        </select>
        <a className='header-phone' href='tel:+37499122120'>
          <FaPhone />
          +37499122120
        </a>
        <button className='header-btn'>
          <FaUser />
          Մուտք / Գրանցվել
        </button>
        <button className='drop-menu' onClick={() => setDrop(!drop)}>
          <BsList />
        </button>
        <div className='droped-menu' style={drop ? {display: 'block'} : {display: 'none'}}>
          <button>
            <FaUser />
            Մուտք / Գրանցվել
          </button>
          <select>
          <optgroup>
            <option>ARM</option>
            <option>ENG</option>
            <option>RU</option>
          </optgroup>
        </select>
        <select>
          <optgroup>
            <option>USD</option>
            <option>AMD</option>
            <option>EUR</option>
            <option>RUB</option>
          </optgroup>
        </select>
        </div>
      </div>
      <div className='filters-panel'>
        <HomeFilters />
      </div>
    </header>
  )
}

export default Header