/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import StateContext from '../../context/StateContext';
import useInput from '../../hooks/useInput';
import useWidth from '../../hooks/useWidth';
import logo from '../../images/forever-baby-logo.png';
import HamburguerMenu from '../HamburguerMenu';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header() {
  const { setIsModalVisible, setModalMessage } = useContext(StateContext);
  const [product, setEvent, setProduct] = useInput('');
  const [isMobile] = useWidth();
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [hamburguerOpen, setHamburguerOpen] = useState(false);

  useEffect(() => (product.length < 3
    ? setIsInvalidInput(true) : setIsInvalidInput(false)), [product]);

  const searchProduct = () => {
    setIsModalVisible(true);
    setModalMessage(`Você pesquisou: ${product}...`);
    setProduct('');
  };

  const conditionalRenderInput = !!(hamburguerOpen || !isMobile);

  return (
    <header className="header-container">
      <div className="header-box">
        {isMobile && <HamburguerMenu setHamburguerOpen={setHamburguerOpen} />}
        <div className="logo-box">
          <a href="#">
            <img className="logo" src={logo} alt="logo forever baby" />
          </a>
        </div>
        {conditionalRenderInput && (
        <Input
          isInvalidInput={isInvalidInput}
          value={product}
          onChange={setEvent}
          placeholder="Qual o mimo de hoje para o seu anjinho?"
          nameButton="BUSCAR"
          onClick={searchProduct}
        />
        )}
      </div>
      <HeaderIcons isMobile={isMobile} />
    </header>
  );
}

export default Header;
