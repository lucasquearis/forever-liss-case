import React from 'react';
import './style.css';

function Input() {
  return (
    <label className="input-box" htmlFor="search-bar">
      <input id="search-bar" type="text" placeholder="Qual o mimo de hoje para o seu anjinho?" />
      <button type="button">BUSCAR</button>
    </label>
  );
}

export default Input;
