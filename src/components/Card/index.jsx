/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { string, number } from 'prop-types';
import { Rating } from 'react-simple-star-rating';
import cartIcon from '../../icons/cart-icon.png';
import './style.css';

function Card({
  image, name, price, rating,
}) {
  return (
    <ul className="cards-container">
      <li className="card-container">
        <a href="#">
          <img className="image-item" src={image} alt="produto" />
          <p>{name}</p>
        </a>
        <p className="price">{price}</p>
        <Rating ratingValue={rating} readonly size={20} />
        <button className="add-cart-button" type="button">
          <img
            height="22,94px"
            width="24px"
            src={cartIcon}
            alt="add cart"
          />
          ADICIONAR AO CARRINHO
        </button>
      </li>
    </ul>
  );
}

Card.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  price: string.isRequired,
  rating: number.isRequired,
};

export default Card;
