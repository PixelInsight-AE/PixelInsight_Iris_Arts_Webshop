import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
      <div>
        <img src="http://placekitten.com/300/200" alt="kitten" />
      </div>
    </Slider>
  );
};

export default Carousel;
