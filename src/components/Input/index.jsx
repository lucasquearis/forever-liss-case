import React from 'react';
import { string, func, bool } from 'prop-types';
import './style.css';

function Input({
  placeholder, nameButton, value, onChange, isValidInput,
}) {
  return (
    <label className="input-box" htmlFor="input-bar">
      <input style={{ border: '1px solid red !important' }} value={value} onChange={onChange} id="input-bar" type="text" placeholder={placeholder} />
      <button disabled={isValidInput} type="button">{nameButton}</button>
    </label>
  );
}

Input.propTypes = {
  placeholder: string.isRequired,
  nameButton: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  isValidInput: bool.isRequired,
};

export default Input;
