import React, { useEffect, useState } from 'react'
import './header.css'
import { FaPhone, FaUser, FaHeart } from "react-icons/fa6";
import { BsList } from "react-icons/bs";
import HomeFilters from '../home-filters/HomeFilters';
import logo from '../../img/logo.jpg';
import LikedCards from '../liked-cards/LikedCards';
import { Link } from 'react-router-dom';

const Header = () => {
  
  useEffect(() => {
    setLikedNumber(JSON.parse(localStorage.getItem('liked')).length)
  }, [localStorage.getItem('liked')])
  const [drop, setDrop] = useState(false)
  const [likedNumber, setLikedNumber] = useState(JSON.parse(localStorage.getItem('liked')).length)
  const [showLikedCards, setShowLikedCards] = useState(false)

  return (
    <div>
      <header>
        <div className='header-menu'>
          <h1 className='header-logo'>Homely</h1>
          <div className='header-contact'>
            <div className='liked-num' onClick={() => setShowLikedCards(!showLikedCards)}>
              <FaHeart className='like-icon'/>
              <span>{likedNumber}</span>
            </div>
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
            <Link to={'/auth'} className='header-btn-link'>            
              <button className='header-btn'>
                <FaUser />
                Մուտք / Գրանցվել
              </button>
            </Link>
            <button className='drop-menu' onClick={() => setDrop(!drop)}>
              <BsList />
            </button>
            <div className='droped-menu' style={drop ? {display: 'block'} : {display: 'none'}}>
              <Link to={'/auth'}>              
                <button className='droped-header-btn'>
                  <FaUser />
                  Մուտք / Գրանցվել
                </button>
              </Link>
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
        </div>
        {showLikedCards && <div className='liked-panel'><LikedCards onClose={() => setShowLikedCards(false)}/></div>}
        <div className='filters-panel'>
          <HomeFilters />
        </div>
      </header>
    </div>
  )
}

export default Header