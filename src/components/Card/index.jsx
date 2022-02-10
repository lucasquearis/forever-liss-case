/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import './style.css';

function Card({
  id, image, name, price,
}) {
  return (
    <ul className="cards-container">
      <li className="card-container" key={id}>
        <a href="#">
          <img src={image} alt="produto" />
          <p>{name}</p>
        </a>
        <p>{price}</p>
        <Rating ratingValue={100} readonly size={20} />
        <button type="button">ADICIONAR AO CARRINHO</button>
      </li>
    </ul>
  );
}

export default Card;
