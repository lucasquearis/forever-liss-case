/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../../context/StateContext';
import useInput from '../../hooks/useInput';
import logo from '../../images/forever-baby-logo.png';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header() {
  const { setIsModalVisible, setModalMessage } = useContext(StateContext);
  const [product, setEvent, setProduct] = useInput('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  useEffect(() => (product.length < 3
    ? setIsInvalidInput(true) : setIsInvalidInput(false)), [product]);

  const searchProduct = () => {
    setIsModalVisible(true);
    setModalMessage(`Você pesquisou: ${product}...`);
    setProduct('');
  };

  return (
    <header className="header-container">
      <div className="header-box">
        <div className="logo-box">
          <a href="#">
            <img className="logo" src={logo} alt="logo forever baby" />
          </a>
        </div>
        <Input
          isInvalidInput={isInvalidInput}
          value={product}
          onChange={setEvent}
          placeholder="Qual o mimo de hoje para o seu anjinho?"
          nameButton="BUSCAR"
          onClick={searchProduct}
        />
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
