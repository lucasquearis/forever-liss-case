import React from 'react';
import './style.css';
import hamburguerIcon from '../../icons/hamburguer-menu.png';

function HamburguerMenu() {
  return (
    <button className="button-menu" type="button">
      <img src={hamburguerIcon} alt="menu" />
    </button>
  );
}

export default HamburguerMenu;
