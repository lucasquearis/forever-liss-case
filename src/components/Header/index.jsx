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
          <img className="logo" src={logo} alt="logo forever baby" />
        </div>
        <Input />
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
