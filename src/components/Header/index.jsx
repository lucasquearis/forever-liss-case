import React from 'react';
import logo from '../../images/forever-baby-logo.png';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="logo forever baby" />
      <Input />
      <HeaderIcons />
    </header>
  );
}

export default Header;
