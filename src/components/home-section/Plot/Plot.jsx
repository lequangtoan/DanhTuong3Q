import "./plot.scss";

import React from "react";

import HomeSection from "../HomeSection";

import { BgFrame3 } from "../../../assets/videos";
import { cottruyen, test1, test2 } from "../../../assets/images";

const Plot = (props) => {
  return (
    <HomeSection
      className={`plot ${props.isActive ? "active" : ""}`}
      contentClassName="overlay plot__content"
      bgImage={BgFrame3}
    >
      <div className="planning">
        <div class="planning__title"></div>
        <div class="planning__content">
          <ul class="tabs">
            <li class="tabs__item">
              <div className={"tabs__item__button button__item__active"}>
                <span>Tổng hợp</span>
              </div>
            </li>
            <li class="tabs__item">
              <div className={"tabs__item__button"}>
                <span>Hình nền</span>
              </div>
            </li>
            <li class="tabs__item">
              <div className={"tabs__item__button"}>
                <span>Chibi</span>
              </div>
            </li>
            <li class="tabs__item">
              <div className={"tabs__item__button"}>
                <span>Video</span>
              </div>
            </li>
          </ul>
          <a class="planning__content__kv" href="https://">
            <img alt="kv" src={test1} />
          </a>
          <img src={cottruyen} alt="" class="planning__content__title" />
          <ul class="planning__list">
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>001 tieu de</p>
            </li>
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>002 tieu de</p>
            </li>
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>003 tieu de</p>
            </li>
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>004 tieu de</p>
            </li>
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>005 tieu de</p>
            </li>
            <li class="slide__in">
              <img src={test2} alt="introImg" />
              <p>006 tieu de</p>
            </li>
          </ul>
        </div>
      </div>
    </HomeSection>
  );
};

export default Plot;
