import React, { useContext, useEffect, useState } from 'react';
import Input from '../Input';
import useInputEmail from '../../hooks/useInputEmail';
import './style.css';
import StateContext from '../../context/StateContext';

function Newsletter() {
  const { setModalMessage, setIsModalVisible } = useContext(StateContext);
  const [email, setEvent] = useInputEmail('');
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const text = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    setValidEmail(text);
  }, [email]);

  const sendEmail = async () => {
    if (validEmail) {
      const response = await fetch('https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const { Mensagem } = await response.json();
      setModalMessage(Mensagem);
      return setIsModalVisible(true);
    }
    setModalMessage('Por favor, insira um email válido!');
    return setIsModalVisible(true);
  };

  return (
    <div className="newsletter-container">
      <div className="title-newsletter-container">
        <h1>NEWSLETTER FOREVER BABY</h1>
        <p>Cadastre-se agora para não perder nenhuma promoção</p>
      </div>
      <Input
        placeholder="Digite aqui o seu melhor e-mail"
        nameButton="CADASTRAR"
        value={email}
        onChange={setEvent}
        onClick={sendEmail}
        isInvalidInput={!(email.length > 3)}
        className="input-newsletter"
      />
    </div>
  );
}

export default Newsletter;
