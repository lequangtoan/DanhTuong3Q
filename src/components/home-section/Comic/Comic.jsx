import "./comic.scss";

import React, { useState } from "react";

import { btnComic } from "../../../assets/images/Button/home_comic/home-comic";

import HomeSection from "../HomeSection";

import { BgFrame3 } from "../../../assets/videos";
import { cottruyen, test1, test2 } from "../../../assets/images";

const Comic = (props) => {
  const [isTabs, setIsTabs] = useState("tonghop");
  const [isBtnHover, setIsBtnHover] = useState(null);

  return (
    <HomeSection
      className={`comic ${props.isActive ? "active" : ""}`}
      contentClassName="overlay comic__content"
      bgImage={BgFrame3}
    >
      <div className="planning">
        <div className="planning__title"></div>
        <div className="planning__content">
          <ul className="planning__content__tabs">
            {btnComic?.map((btn, id) => (
              <li
                className={`planning__content__tabs__item ${
                  isTabs === btn?.namebtn
                    ? "lanning__content__tabs__item__active"
                    : ""
                }`}
                key={id}
                onClick={() => setIsTabs(btn?.namebtn)}
              >
                <img
                  src={
                    isTabs === btn?.namebtn
                      ? btn?.active
                      : isBtnHover === btn?.active
                      ? isBtnHover
                      : btn?.normal
                  }
                  alt={`btn-${btn?.namebtn}`}
                  onMouseEnter={() => setIsBtnHover(btn?.active)}
                  onMouseLeave={() => setIsBtnHover(null)}
                />
              </li>
            ))}
          </ul>
          <a
            className="planning__content__kv"
            href="##"
          >
            <img
              className="planning__content__kv__bg"
              src={test1}
              alt="planning__content__kv__bg"
            />
          </a>

          <img
            className="planning__content__title"
            src={cottruyen}
            alt="planning__content__title"
          />

          <ul className="planning__content__list">
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                001 tieu de
              </p>
            </li>
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                002 tieu de
              </p>
            </li>
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                003 tieu de
              </p>
            </li>
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                004 tieu de
              </p>
            </li>
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                005 tieu de
              </p>
            </li>
            <li className="planning__content__list__chapter">
              <img
                className="planning__content__list__chapter__bg"
                src={test2}
                alt="introImg"
              />
              <p className="planning__content__list__chapter__title">
                006 tieu de
              </p>
            </li>
          </ul>
        </div>
      </div>
    </HomeSection>
  );
};

export default Comic;
