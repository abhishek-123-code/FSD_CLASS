import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
            className="header-logo"
          />
        </Link>
      </div>
      <div className="header-search">
        <input type="text" className="header-searchInput" placeholder="Search for products..." />
        <button className="header-searchButton">
          🔍
        </button>
      </div>
      <div className="header-nav">
        <Link to="/" className="header-option">
          <span>Home</span>
        </Link>
        <Link to="/about" className="header-option">
          <span>About</span>
        </Link>
        <Link to="/products" className="header-option">
          <span>Products</span>
        </Link>
        <Link to="/cart" className="header-option">
          <span className="header-cart">
            🛒 Cart
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header
