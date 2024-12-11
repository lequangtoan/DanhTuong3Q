import "./person.scss";

import React, { useEffect, useRef, useState } from "react";

import HomeSection from "../HomeSection";

import { BgFrame3 } from "../../../assets/videos";
import { contry, homePerson } from "../../../assets/home-person";

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
  const [datacontry] = useState(contry);
  const [datahomePerson] = useState(homePerson);
  const [isContry, setIsContry] = useState("nguy");
  const [isPerson, setIsPerson] = useState("chunghoi")



  return (
    <HomeSection
      className={`person ${props.isActive ? "active" : ""}`}
      contentClassName="overlay person__content"
      bgImage={BgFrame3}
    >
      <div className="site__person">
        <div className="site__person__title"></div>
        <div className="site__person__title__bg"></div>

        <div className="site__person__battle">
          <div className="site__person__battle__tab">
            {datacontry?.map((contry, index) => (
              <div
                className="site__person__battle__tab__wrapper"
                onClick={() => setIsContry(contry?.contryname)}
              >
                <img
                  src={
                    isContry === contry?.contryname
                      ? contry?.active
                      : contry?.normal
                  }
                  alt="tab"
                  className="site__person__battle__tab__wrapper__item"
                />
                <div
                  className={`site__person__battle__tab__swiper ${
                    isContry === contry?.contryname
                      ? "site__person__active"
                      : ""
                  }`}
                >
                  <div className="site__person__battle__swiper__wrapper ">
                    <div className="site__person__battle__swiper__item">
                      {datahomePerson?.map((dataperson, index) => (
                        <div
                          className={`swiper__slide ${
                            isContry === dataperson?.contry ? "swiper__slide__show" : "swiper__slide__hidden"
                          }`}
                        >
                          <img
                            src={
                              isPerson === dataperson?.nickName
                                ? dataperson?.iconactive
                                : dataperson?.iconnormal
                            }
                            alt={`avatar-${index}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* thong tin tuong */}
        <img
          className="site__person__bg"
          src={quanvu}
          alt="avatar"
        />
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
          <div className="site__person__description__skill"></div>
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
