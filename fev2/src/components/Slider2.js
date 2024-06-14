import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CustomCard } from "./Card"

const CustomeSlider2 = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    rows: 1,
    autoplaySpeed: 500,
    cssEase: "linear",
    centerPadding: 30,
  };
  

  return (
    <Slider {...settings}>
        {
            props.data && props.data.map(item => {
              {/* console.log('item: ',item) */}
                return <CustomCard data={item}/>
            })
        }
    </Slider>
  )
};

export default CustomeSlider2;
