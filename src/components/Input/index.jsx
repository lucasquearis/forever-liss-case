import React from 'react';
import { string } from 'prop-types';
import './style.css';

function Input({ placeholder, nameButton }) {
  return (
    <label className="input-box" htmlFor="input-bar">
      <input id="input-bar" type="text" placeholder={placeholder} />
      <button type="button">{nameButton}</button>
    </label>
  );
}

Input.propTypes = {
  placeholder: string.isRequired,
  nameButton: string.isRequired,
};

export default Input;
