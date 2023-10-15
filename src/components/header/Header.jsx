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
        <a className='header-phone' href='tel:+37455600096'>
          <FaPhone />
          +37455600096
        </a>
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
        <button className='header-btn'>
          <FaUser />
          Մուտք / Գրանցվել
        </button>
        <button className='drop-menu' onClick={() => setDrop(!drop)}>
          <BsList />
        </button>
        <div className='droped-menu' style={drop ? {display: 'block'} : {display: 'none'}}>
          <button className='droped-header-btn'>
            <FaUser />
            Մուտք / Գրանցվել
          </button>
          <select className='droped-header-select'>
            <optgroup>
              <option>ARM</option>
              <option>ENG</option>
              <option>RU</option>
            </optgroup>
          </select>
          <select className='droped-header-select btm'>
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