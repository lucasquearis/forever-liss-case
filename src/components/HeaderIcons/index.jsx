/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import accountIcon from '../../icons/account-icon.png';
import cartIcon from '../../icons/cart-icon.png';

function HeaderIcons() {
  return (
    <div className="icons-container">
      <div className="icon-box">
        <a className="a-icons" href="#">
          <div className="icon-image">
            <img width="20px" src={accountIcon} alt="icone conta" />
          </div>
          <p>MINHA CONTA</p>
        </a>
      </div>
      <div className="icon-box">
        <a className="a-icons" href="#">
          <div className="icon-image">
            <img width="30px" src={cartIcon} alt="icone carrinho" />
          </div>
          <p>CARRINHO</p>
        </a>
      </div>
    </div>
  );
}

export default HeaderIcons;
