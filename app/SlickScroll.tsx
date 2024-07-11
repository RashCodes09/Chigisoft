"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaBedPulse } from "react-icons/fa6";

const Slick = () => {
  const settings = {
    dots: FaBedPulse,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

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
    <div className="slider-container overflow-hidden mx-2">
      <Slider {...settings}>
        <div className="w-[60px] h-[350px] bg-green-600 ">
          <h3>1</h3>
        </div>
        <div className="w-[60px] h-[350px] bg-red-600">
          <h3>2</h3>
        </div>
        <div className="w-[60px] h-[350px] bg-gray-600">
          <h3>3</h3>
        </div>
        <div className="w-[60px] h-[350px] bg-yellow-600">
          <h3>4</h3>
        </div>
        <div className="w-[60px] h-[350px] bg-pink-600">
          <h3>5</h3>
        </div>
        <div className="w-[60px] h-[350px] bg-purple-600">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
