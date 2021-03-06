import React, { useMemo, useState } from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';
import StateContext from './StateContext';

function StateProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [hamburguerOpen, setHamburguerOpen] = useState(false);

  const context = useMemo(() => ({
    isModalVisible,
    setIsModalVisible,
    modalMessage,
    setModalMessage,
    hamburguerOpen,
    setHamburguerOpen,
  }), [isModalVisible, modalMessage, hamburguerOpen]);

  return (
    <StateContext.Provider value={context}>
      {children}
    </StateContext.Provider>
  );
}

StateProvider.propTypes = {
  children: oneOfType([
    arrayOf(node),
    node,
  ]).isRequired,
};

export default StateProvider;
