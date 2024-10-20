'use client'
import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner women.jpg",
      title: "Summer Sale",
      mainTitle: "Women's Latest Fashion Sale.",
      price: "$50",
    },
    {
      id: 1,
      img: "/2.jpg",
      title: "Cosmetics Sale",
      mainTitle: "Women's Latest Cosmetics Sale.",
      price: "$20",
    },
    {
      id: 2,
      img: "/1.jpg",
      title: "Cosmetics Sale",
      mainTitle: "Women's Latest Cosmetics Sale.",
      price: "$20",
    },
  ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide 
              key={item.id}
              img={item.img} 
              title={item.title} 
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
