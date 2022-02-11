/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { bool } from 'prop-types';
import './style.css';
import accountIcon from '../../icons/account-icon.png';
import cartIcon from '../../icons/cart-icon.png';

function HeaderIcons({ isMobile }) {
  return (
    <div className="icons-container">
      <div className="icon-box">
        <a className="a-icons" href="#">
          <div className="icon-image">
            <img width={isMobile ? '15px' : '20px'} src={accountIcon} alt="icone conta" />
          </div>
          { !isMobile && <p>MINHA CONTA</p>}
        </a>
      </div>
      <div className="icon-box">
        <a className="a-icons" href="#">
          <div className="icon-image">
            <img width={isMobile ? '27px' : '30px'} src={cartIcon} alt="icone carrinho" />
          </div>
          { !isMobile && <p>CARRINHO</p>}
        </a>
      </div>
    </div>
  );
}

HeaderIcons.propTypes = {
  isMobile: bool.isRequired,
};

export default HeaderIcons;
