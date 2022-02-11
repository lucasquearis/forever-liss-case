/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import listNavigation from '../../constants/listNavigation';
import StateContext from '../../context/StateContext';
import closeIcon from '../../icons/close.png';
import './style.css';

function NavigationHamburguer() {
  const { setHamburguerOpen } = useContext(StateContext);
  return (
    <div className="menu-container">
      <div className="menu-box">
        <button onClick={() => setHamburguerOpen(false)} type="button">
          <img src={closeIcon} alt="close" />
        </button>
        <ul className="products-container">
          {listNavigation.map((item) => <a href="#" key={uuidv4()}><li>{item}</li></a>)}
        </ul>
      </div>
    </div>
  );
}

export default NavigationHamburguer;
