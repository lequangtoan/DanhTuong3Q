import "./feature.scss";

import React from "react";

import HomeSection from "../HomeSection";

import { BgFrame5 } from "../../../assets/videos";
import { storekitnormal, test } from "../../../assets/images";

const Feature = (props) => {
  return (
    <HomeSection
      className={`feature ${props.isActive ? "active" : ""}`}
      contentClassName="overlay feature__content"
      bgImage={BgFrame5}
    >
      <div className="site__feature">
        <div className="site__feature__title"></div>
        <div className="accordion__wrapper">
          <ul className="accordion__content">
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              <img
                src={test}
                alt="feature"
                className="accordion__content__expansion accordion-content__expansion-active"
              />
            </li>
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              {/* <img
                src={test}
                alt="feature"
                className="accordion__content__expansion"
              /> */}
            </li>
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              {/* <img
                src={test}
                alt="feature"
                className="accordion__content__expansion"
              /> */}
            </li>
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              {/* <img
                src={test}
                alt="feature"
                className="accordion__content__expansion"
              /> */}
            </li>
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              {/* <img
                src={test}
                alt="feature"
                className="accordion__content__expansion"
              /> */}
            </li>
            <li className="slide__in">
              <img
                src={storekitnormal}
                alt="tag"
                className="accordion__content__tag"
              />
              {/* <img
                src={test}
                alt="feature"
                className="accordion__content__expansion"
              /> */}
            </li>
          </ul>
        </div>
      </div>
    </HomeSection>
  );
};

export default Feature;
