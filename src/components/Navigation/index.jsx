/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import listNavigation from '../../constants/listNavigation';
import StateContext from '../../context/StateContext';
import useWidth from '../../hooks/useWidth';
import './style.css';

function Navigation() {
  const { hamburguerOpen } = useContext(StateContext);
  const [isMobile] = useWidth();
  const condition = !isMobile || hamburguerOpen;

  return condition ? (
    <nav className="nav-container">
      <ul>
        {listNavigation.map((item) => <li key={uuidv4()}><a href="#">{item}</a></li>)}
      </ul>
    </nav>

  ) : null;
}

export default Navigation;
