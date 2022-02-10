/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import listNavigation from '../../constants/listNavigation';
import './style.css';

function Navigation() {
  return (
    <nav className="nav-container">
      <ul>
        {listNavigation.map((item) => <li key={uuidv4()}><a href="#">{item}</a></li>)}
      </ul>
    </nav>
  );
}

export default Navigation;
