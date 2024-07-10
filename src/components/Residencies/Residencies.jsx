import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

export default function Residencies() {
  return (
    <section className="r-wrapper" id="residencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="property" />
                <span className="secondaryText r-price">
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
}

function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flexCenter">
      <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
      <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
    </div>
  );
}
