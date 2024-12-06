import { scrolling } from "../../assets/images";
import { BgFrame3 } from "../../assets/videos";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination } from "swiper/modules";

import { Welcome, News, Plot, Feature } from "./../../components/home-section";

const swiperOptions = {
  modules: [EffectFade, Mousewheel, Pagination],
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 3000,
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
          <video src={BgFrame3} autoPlay muted loop />
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Plot isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Feature isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      <div className="scroll">
        <span>
          <img src={scrolling} alt="" />
        </span>
      </div>
    </>
  );
};

export default Home;
