import React from 'react';
import './style.css';
import accountIcon from '../../icons/account-icon.png';
import cartIcon from '../../icons/cart-icon.png';

function HeaderIcons() {
  return (
    <div>
      <img className="icon-header" src={accountIcon} alt="icone conta" />
      <img className="icon-header" src={cartIcon} alt="icone carrinho" />
    </div>
  );
}

export default HeaderIcons;
