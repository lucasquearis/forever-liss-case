/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import products from '../../mocks/products';
// import Card from '../Card';
import './style.css';

function Highlights() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="highlights-container">
      <div className="title-container">
        <p>FOREVER BABY</p>
        <span>DESTAQUES</span>
        <hr />
      </div>
      <Slider {...settings}>
        <div className="display-card-one">
          {products.map((item, index) => {
            if (index < 4) {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  rating={item.rating}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="display-card-two">
          {products.map((item, index) => {
            if (index > 4 && index < 9) {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  rating={item.rating}
                />
              );
            }
            return null;
          })}
        </div>
      </Slider>
    </div>
  );
}

export default Highlights;
