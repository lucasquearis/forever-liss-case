import React, { useContext } from 'react';
import './style.css';
import StateContext from '../../context/StateContext';

function Modal() {
  const { setIsModalVisible, modalMessage } = useContext(StateContext);
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-content">
          <h1>{modalMessage}</h1>
        </div>
        <button className="add-cart-button" onClick={() => setIsModalVisible(false)} type="button">Fechar</button>
      </div>
    </div>
  );
}

export default Modal;
