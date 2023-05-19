import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Partnerslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <>
      <Slider {...settings} className="pslide">
        <div className="ml-[78px] md:ml-[0px]">
          <img src="/../assets/u1.png" />
        </div>
        <div className="ml-[78px] md:ml-[0px]">
          <img src="/../assets/u2.png" />
        </div>
        <div className="">
          <img src="/../assets/u3.png" />
        </div>
        <div className="ml-[78px] md:ml-[0px]">
          <img src="/../assets/u4.png" />
        </div>
        <div className="ml-[78px] md:ml-[0px]">
          <img src="/../assets/u5.png" />
        </div>
        <div className="ml-[78px] md:ml-[0px]">
          <img src="/../assets/u6.png" />
        </div>
      </Slider>
    </>
  );
};

export default Partnerslide;
