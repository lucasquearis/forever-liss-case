import React from 'react';
import {
  oneOfType, node, arrayOf, func,
} from 'prop-types';
import './style.css';

function Modal({ children, onClick }) {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-content">{children}</div>
        <button className="add-cart-button" onClick={onClick} type="button">Fechar</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
  onClick: func.isRequired,
};

export default Modal;
