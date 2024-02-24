// SliderCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../style/SliderCarousel.css';
import heroImage1 from '../../img/farming-hero.jpg'
import heroImage2 from '../../img/grow-business.jpg'
import heroImage3 from '../../img/job.jpg'
import heroImage4 from '../../img/donation.jpg'

const SliderCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      <div className="slide">
        <img src={heroImage1} alt="Image_1" />
        <div className="slide-content">
          <p className='hero-text1'>Sustainability in Agriculture: The Future of Farming</p>
        </div>
      </div>
      <div className="slide">
        <img src={heroImage2} alt="Image_2" />
        <div className="slide-content">
          <p className='hero-text2'>Strategies for Sustainable Business Growth</p>
        </div>
      </div>
      <div className="slide">
        <img src={heroImage3} alt="Image_3" />
        <div className="slide-content">
          {/* <p className='hero-text3'>Career Opportunities Await</p> */}
        </div>
      </div>
      <div className="slide">
        <img src={heroImage4} alt="Image_4" />
        <div className="slide-content">
          <p className='hero-text4'>Make a Difference with Every Donation</p>
        </div>
      </div>
    </Slider>
  );
};

export default SliderCarousel;
