/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { func } from 'prop-types';
import useInput from '../../hooks/useInput';
import logo from '../../images/forever-baby-logo.png';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header({ setIsModalHeaderVisible, setSearchBarHeader }) {
  const [product, setEvent, setProduct] = useInput('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  useEffect(() => {
    if (product.length < 3) {
      return setIsInvalidInput(true);
    }
    setSearchBarHeader(product);
    return setIsInvalidInput(false);
  }, [product]);

  const searchProduct = () => {
    setIsModalHeaderVisible(true);
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

Header.propTypes = {
  setIsModalHeaderVisible: func.isRequired,
  setSearchBarHeader: func.isRequired,
};

export default Header;
