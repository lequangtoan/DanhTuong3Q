import "./news.scss";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import HomeSection from "../HomeSection";
import Button from "../../button/Button";

import { BgFrame2 } from "../../../assets/videos";
import { buttonxemthem, stick, test, chplay } from "../../../assets/images";

const swiperOptions = {
  modules: [EffectFade, Autoplay],
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  // effect: "fade",
  autoplay: 100,
  speed: 1000,
};

const News = (props) => {
  return (
    <HomeSection
      className={`new ${props.isActive ? "active" : ""}`}
      contentClassName="overlay news__content"
      bgImage={BgFrame2}
    >
      <div className="site__news">
        <div class="site__news__title"></div>
        <div class="site__news__center">
          <ul class="site__tabs">
            <li>
              <Button className={"button__item__active"}>Tất cả</Button>
            </li>
            <li>
              <Button className={"button__item"}>Tin tức</Button>
            </li>
            <li>
              <Button className={"button__item"}>Sự kiện</Button>
            </li>
            <li>
              <Button className={"button__item"}>Cẩm nang</Button>
            </li>
          </ul>
          <div className="site__news__content">
            <div className="site__news__swiper">
              <Swiper {...swiperOptions}>
                <SwiperSlide>
                  <img src={test} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={chplay} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={test} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="site__news__list">
              <ul className="site__news__list__content">
                <li className="site__slide__in">
                  <p>
                    <div className="site__slide__in__dot">
                      <img src={stick} alt="" />
                    </div>
                    <span className="site__slide__in__title">
                      Khai mở mái chủ mới thanh phong kiem danh tuong 3q
                    </span>
                  </p>
                  <span className="site__slide__in__time">01__01__1111</span>
                </li>
                <li className="site__slide__in">
                  <p>
                    <div className="site__slide__in__dot">
                      <img src={stick} alt="" />
                    </div>
                    <span className="site__slide__in__title">
                      Khai mở mái chủ mới
                    </span>
                  </p>
                  <span className="site__slide__in__time">01__01__1111</span>
                </li>
                <li className="site__slide__in">
                  <p>
                    <div className="site__slide__in__dot">
                      <img src={stick} alt="" />
                    </div>
                    <span className="site__slide__in__title">
                      Khai mở mái chủ mới
                    </span>
                  </p>
                  <span className="site__slide__in__time">01__01__1111</span>
                </li>
                <li className="site__slide__in">
                  <p>
                    <div className="site__slide__in__dot">
                      <img src={stick} alt="" />
                    </div>
                    <span className="site__slide__in__title">
                      Khai mở mái chủ mới
                    </span>
                  </p>
                  <span className="site__slide__in__time">01__01__1111</span>
                </li>
              </ul>
              <div className="site__news__list__more-link">
                <img src={buttonxemthem} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default News;
