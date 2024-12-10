import "./person.scss";

import React, { useEffect, useState } from "react";

import HomeSection from "../HomeSection";

import { BgFrame1, BgFrame2 } from "../../../assets/videos";
import {
  iconcamninhactive,
  namecamninh,
  quanvu,
} from "../../../assets/img-video-person";
import {
  ngonormal,
  nguynormal,
  quannormal,
  thucnormal,
} from "../../../assets/images";

const Person = (props) => {
  return (
    <HomeSection
      className={`person ${props.isActive ? "active" : ""}`}
      contentClassName="overlay person__content"
      bgImage={BgFrame2}
    >
      <div className="site__person">
        <div className="site__person__title"></div>
        <div className="site__person__title__bg"></div>

        {/* thong tin tuong */}

        <div className="site__person__battle">
          <div className="site__person__battle__tab">
            <div className="site__person__battle__tab__wrapper">
              <img
                src={nguynormal}
                alt="tab"
                className="site__person__battle__tab__wrapper__item wrapper__item__hover"
              />
              <div className="site__person__battle__swiper__wrapper">
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
              </div>
            </div>
            <div className="site__person__battle__tab__wrapper">
              <img
                src={thucnormal}
                alt="tab"
                className="site__person__battle__tab__wrapper__item"
              />
              <div className="site__person__battle__swiper__wrapper">
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
              </div>
            </div>
            <div className="site__person__battle__tab__wrapper">
              <img
                src={ngonormal}
                alt="tab"
                className="site__person__battle__tab__wrapper__item"
              />
              <div className="site__person__battle__swiper__wrapper">
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
              </div>
            </div>
            <div className="site__person__battle__tab__wrapper">
              <img
                src={quannormal}
                alt="tab"
                className="site__person__battle__tab__wrapper__item"
              />{" "}
              <div className="site__person__battle__swiper__wrapper">
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
                <div className="swiper__slide">
                  <img src={iconcamninhactive} alt="avater" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img className="site__person__bg" src={quanvu} alt="avatar" />
        <div className="site__person__description">
          <div className="site__person__description__cv">
            <img
              className="site__person__description__cv__name"
              src={namecamninh}
              alt="name"
            />
          </div>

          <div className="site__person__description__introduction">
            <p>
              Đại Kiều là vợ của Tôn Sách, một trong những mỹ nhân thời kỳ Tam
              Quốc. Cùng em gái Tiểu Kiều được thiên hạ ca tụng là Giang Đông
              Nhị Kiều.
            </p>
          </div>
          <div className="site__person__description__video">
            {/* <video autoplay>
              <source src={BgFrame1} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Person;
