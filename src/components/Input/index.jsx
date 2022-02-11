import React from 'react';
import { string, func, bool } from 'prop-types';
import './style.css';

function Input({
  placeholder, nameButton, value, onChange, isInvalidInput, onClick,
}) {
  return (
    <label className="input-box" htmlFor="input-bar">
      <input style={{ border: '1px solid red !important' }} value={value} onChange={onChange} id="input-bar" type="text" placeholder={placeholder} />
      <button onClick={onClick} disabled={isInvalidInput} type="button">{nameButton}</button>
    </label>
  );
}

Input.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  isInvalidInput: false,
  value: '',
};

Input.propTypes = {
  placeholder: string.isRequired,
  nameButton: string.isRequired,
  value: string,
  onChange: func,
  isInvalidInput: bool,
  onClick: func,
};

export default Input;
