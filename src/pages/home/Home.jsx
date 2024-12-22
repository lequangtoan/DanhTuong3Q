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
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sectionswelcome = document.querySelectorAll(".welcome");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sliderwelcome = document.getElementById("slide");
          if (entry.isIntersecting) {
            sliderwelcome?.classList?.remove("show");
          } else {
            sliderwelcome?.classList?.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionswelcome.forEach((section) => observer.observe(section));
    return () => {
      sectionswelcome.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const sectionsfeature = document.querySelectorAll(".feature");
    console.log("11", sectionsfeature)
    const scrolled = new IntersectionObserver(
      (entries) => {
        // entries.forEach((entry) => {
          const scrolled = document.getElementById("scroll");
          console.log("111", scrolled)
          entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrolled?.classList?.remove("hidden");
          } else {
            scrolled?.classList?.add("hidden");
          }
        });
      },
      { threshold: 0.5 }
    );
    sectionsfeature.forEach((section) => scrolled.observe(section));
    return () => {
      sectionsfeature.forEach((section) => scrolled.unobserve(section));
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
          {({ isActive }) => <Comic isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Feature isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      <div className="scrolled" id="scroll">
        <span>
          <img src={scrolling} alt="" />
        </span>
      </div>
    </>
  );
};

export default Home;
