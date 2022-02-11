import React from 'react';
import { string, func, bool } from 'prop-types';
import './style.css';

function Input({
  placeholder, nameButton, value, onChange, isInvalidInput, onClick, className,
}) {
  return (
    <label className={className} htmlFor="input-bar">
      <input value={value} onChange={onChange} id="input-bar" type="text" placeholder={placeholder} />
      <button onClick={onClick} disabled={isInvalidInput} type="button">{nameButton}</button>
    </label>
  );
}

Input.defaultProps = {
  isInvalidInput: false,
  className: 'input-box',
};

Input.propTypes = {
  isInvalidInput: bool,
  className: string,
  placeholder: string.isRequired,
  nameButton: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  onClick: func.isRequired,
};

export default Input;
