import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../style/Carousel.module.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={style.carouselContainer}>
      <Slider {...settings}>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/41ka6Bsj+XL._SY445_SX342_.jpg"
            alt="carousel image 1"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/91dCmktk8ZL._SY425_.jpg"
            alt="carousel image 2"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/91g3keqeedL._SY425_.jpg"
            alt="carousel image 3"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61U6XAvZnAL._SY425_.jpg"
            alt="carousel image 4"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/51PPNGv6t2L._SY425_.jpg"
            alt="carousel image 5"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61xEFjmHlrL._SY425_.jpg"
            alt="carousel image 6"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/81qiBQl89PL._SY425_.jpg"
            alt="carousel image 7"
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61eNzzq3bOL._SY425_.jpg"
            alt="carousel image 8"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
