import React, { useState, useContext, useRef } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/icon-dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>Shopper</p>
        </div>
        <img
          className={'nav-dropdown'}
          onClick={dropdown_toggle}
          src={nav_dropdown}
          alt="Dropdown"
        />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu('shop')
          }}
        >
          <Link to="/">Shop</Link> {menu === 'shop' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('men')
          }}
        >
          <Link to="/men">Men</Link> {menu === 'men' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('women')
          }}
        >
          <Link to="/women">Women</Link> {menu === 'women' ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <Link to="/kids">Kids</Link> {menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          {' '}
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {' '}
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
