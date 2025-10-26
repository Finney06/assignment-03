import React from 'react';
import cartIcon from '../assets/icons/shopping-cart.png';
import './Header.css';

function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">BEJAMAS_</div>
        <div className="cart-icon" onClick={onCartClick}>
          <img src={cartIcon} alt="Shopping Cart" />
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
