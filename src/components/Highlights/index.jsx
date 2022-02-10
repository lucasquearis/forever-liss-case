import React from 'react';
import Cards from '../Cards';
import './style.css';

function Highlights() {
  return (
    <div className="highlights-container">
      <div className="title-container">
        <p>FOREVER BABY</p>
        <span>DESTAQUES</span>
      </div>
      <Cards />
    </div>
  );
}

export default Highlights;
