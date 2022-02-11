import React, { useContext } from 'react';
import './style.css';
import hamburguerIcon from '../../icons/hamburguer-menu.png';
import StateContext from '../../context/StateContext';

function HamburguerMenu() {
  const { setHamburguerOpen } = useContext(StateContext);
  return (
    <button onClick={() => setHamburguerOpen(true)} className="button-menu" type="button">
      <img src={hamburguerIcon} alt="menu" />
    </button>
  );
}

export default HamburguerMenu;
