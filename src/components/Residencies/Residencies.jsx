import React from "react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
export const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart">
                <img src={card.image} alt="home" />
                <span className="secondaryTest r_price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
