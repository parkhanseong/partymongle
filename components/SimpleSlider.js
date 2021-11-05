import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderStyles from '../styles/Slider.module.css'

export default class SimpleSlider extends Component {
  render() {
   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={sliderStyles.imgWrapper}>
                <Image
                    src="/image/gallery/table_setting.jpg"
                    alt="main logo"
                    width="800"
                    height="800"
                    className={sliderStyles.sliderImg}
                />
            </div>
          </div>
          <div>
            <div className={sliderStyles.imgWrapper}>
                <Image
                        src="/image/camping_tent.JPG"
                        alt="main logo"
                        width="800"
                        height="800"
                        className={sliderStyles.sliderImg}
                />
            </div>
          </div>
          <div>
            <div className={sliderStyles.imgWrapper}>
                <Image
                        src="/image/camping_chair.JPG"
                        alt="main logo"
                        width="800"
                        height="800"
                        className={sliderStyles.sliderImg}
                />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}