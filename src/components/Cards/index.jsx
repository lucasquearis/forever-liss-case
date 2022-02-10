/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import products from '../../mocks/products';
import './style.css';

function Cards() {
  return (
    <ul className="cards-container">
      {products.map((item) => (
        <li key={item.id}>
          <a href="#">
            <img src={item.image} alt="produto" />
            <p>{item.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
