import { scrolling } from "../../assets/images";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination } from "swiper/modules";

import {
  Welcome,
  News,
  Plot,
  Feature,
  Person,
} from "./../../components/home-section";
import Drawer from "../../components/drawer/Drawer";

const swiperOptions = {
  modules: [EffectFade, Mousewheel, Pagination],
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  // speed: 5000,
};

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeElement = document.querySelector(".welcome");
      const welcomeHeight = welcomeElement.offsetHeight;
      setIsScrolled(window.scrollY > welcomeHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          {({ isActive }) => <Plot isActive={isActive} />}
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
      <Drawer isScrolled={isScrolled} />
    </>
  );
};

export default Home;
