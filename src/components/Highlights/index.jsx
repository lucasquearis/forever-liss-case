/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from '../Card';
import products from '../../mocks/products';
import './style.css';

function Highlights() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidth]);

  const fourCardsFirstList = width < 1140 ? 3 : 4;
  const fourCardsSecondList = width < 1140 ? 5 : 4;

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
            if (index < fourCardsFirstList) {
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
            if (index > fourCardsSecondList) {
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
