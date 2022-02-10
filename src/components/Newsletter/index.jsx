import React from 'react';
import Input from '../Input';
import './style.css';

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="title-newsletter-container">
        <h1>NEWSLETTER FOREVER BABY</h1>
        <p>Cadastre-se agora para não perder nenhuma promoção</p>
      </div>
      <Input placeholder="Digite aqui o seu melhor e-mail" nameButton="CADASTRAR" />
    </div>
  );
}

export default Newsletter;
