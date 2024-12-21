import { scrolling } from "../../assets/images";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, EffectFade } from "swiper/modules";

import {
  Welcome,
  News,
  Comic,
  Feature,
  Person,
} from "./../../components/home-section";

const swiperOptions = {
  modules: [Pagination, Mousewheel, EffectFade],
  mousewheel: true,
  pagination: true,
  paginationClickable: true,
  parallax: true,
  speed: 600,
  direction: "vertical",
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <News isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Person isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Comic isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Feature isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      <div className="scrolled">
        <span>
          <img src={scrolling} alt="" />
        </span>
      </div>
    </>
  );
};

export default Home;
