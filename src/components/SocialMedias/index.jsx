/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import listNavigation from '../../constants/listNavigation';
import listSocialMedias from '../../constants/listSocialMedias';
import listCardsCredit from '../../constants/listCardsCredit';
import './style.css';

function SocialMedias() {
  return (
    <div className="social-containers">
      <h1 className="title-social">VISITE NOSSAS REDES SOCIAIS</h1>
      <div className="social-medias">
        {listSocialMedias.map((item) => <a key={item.name} target="_blank" href={item.url} rel="noreferrer"><img width="55px" src={item.image} alt={item.name} /></a>)}
      </div>
      <div className="social-nav">
        {listNavigation.map((item) => <a href="#" key={item}><p>{item}</p></a>)}
      </div>
      <h1 className="title-social">FORMAS DE PAGAMENTO</h1>
      <div className="cards-social">
        {listCardsCredit.map((item) => <img key={item.name} width="45px" src={item.image} alt={item.name} />)}
      </div>
    </div>
  );
}

export default SocialMedias;
