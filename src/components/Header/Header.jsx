import React from 'react'
import { Link } from 'react-router-dom';

import CartBlock from '../CartBlock/CartBlock'

import './Header.scss'

const Header = ({ openCart }) => {
  return (
    <div className='header'>
      <div className="header__container">
        <Link to='/'>
          <div className="header__logo">
            <img src="img/logo.png" alt="logo" className="header__logo-img" />
            <div className="header__logo-right">
              <div className="header__logo-title">
                React Sneakers
              </div>
              <div className="header__logo-subtitle">
                Магазин лучших кроссовок
              </div>
            </div>
          </div>
        </Link>
        <div className="header__right">
          <CartBlock openCart={openCart} />
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link to='/favorites'>
                <img src="img/favorite-icon.svg" alt="" className="header__menu-icon" />
              </Link>
             </li>          
            <li className="header__menu-item">
              <img src="img/profile.svg" alt="" className="header__menu-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header