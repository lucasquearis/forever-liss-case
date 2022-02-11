import React from 'react';
import { string, func, bool } from 'prop-types';
import './style.css';

function Input({
  placeholder, nameButton, value, onChange, isInvalidInput, onClick,
}) {
  return (
    <label className="input-box" htmlFor="input-bar">
      <input value={value} onChange={onChange} id="input-bar" type="text" placeholder={placeholder} />
      <button onClick={onClick} disabled={isInvalidInput} type="button">{nameButton}</button>
    </label>
  );
}

Input.defaultProps = {
  isInvalidInput: false,
};

Input.propTypes = {
  placeholder: string.isRequired,
  nameButton: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  isInvalidInput: bool,
  onClick: func.isRequired,
};

export default Input;
