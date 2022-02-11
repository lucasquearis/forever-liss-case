/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import products from '../../mocks/products';
import './style.css';
import useWidth from '../../hooks/useWidth';

function Highlights() {
  const [isMobile, width] = useWidth();

  let firstCarrousel = 0;
  let secondCarrousel = 0;

  switch (true) {
    case width > 1130:
      firstCarrousel = 4;
      secondCarrousel = 4;
      break;
    case width < 1130 && width > 870:
      firstCarrousel = 3;
      secondCarrousel = 5;
      break;
    case isMobile:
      firstCarrousel = 2;
      secondCarrousel = 6;
      break;
    default:
      firstCarrousel = 2;
      secondCarrousel = 6;
      break;
  }

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
            if (index < firstCarrousel) {
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
            if (index > secondCarrousel) {
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
