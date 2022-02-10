/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import './style.css';
import bannerOne from '../../images/banner-1.jpg';
import bannerTwo from '../../images/banner-2.png';
import bannerThree from '../../images/banner-3.jpg';
import bannerFour from '../../images/banner-4.jpg';

function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="image-container">
        <img className="banner-image" src={bannerOne} alt="banner enxoval" />
      </div>
      <div className="image-container">
        <img className="banner-image" src={bannerTwo} alt="banner enxoval" />
      </div>
      <div className="image-container">
        <img className="banner-image" src={bannerThree} alt="banner enxoval" />
      </div>
      <div className="image-container">
        <img className="banner-image" src={bannerFour} alt="banner enxoval" />
      </div>
    </Slider>
  );
}

export default Carrousel;
