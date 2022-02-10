/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../images/forever-baby-logo.png';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-box">
        <div className="logo-box">
          <a href="#">
            <img className="logo" src={logo} alt="logo forever baby" />
          </a>
        </div>
        <Input placeholder="Qual o mimo de hoje para o seu anjinho?" nameButton="BUSCAR" />
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
