/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import logo from '../../images/forever-baby-logo.png';
import HeaderIcons from '../HeaderIcons';
import Input from '../Input';
import './style.css';

function Header() {
  const [product, setEvent] = useInput('');
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  useEffect(() => {
    const test = /[^a-zA-Z 0-9]+/g.test(product);
    return test || product.length < 3 ? setIsInvalidInput(true) : setIsInvalidInput(false);
  }, [product, isInvalidInput]);

  return (
    <header className="header-container">
      <div className="header-box">
        <div className="logo-box">
          <a href="#">
            <img className="logo" src={logo} alt="logo forever baby" />
          </a>
        </div>
        <Input
          isValidInput={isInvalidInput}
          value={product}
          onChange={setEvent}
          placeholder="Qual o mimo de hoje para o seu anjinho?"
          nameButton="BUSCAR"
        />
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
