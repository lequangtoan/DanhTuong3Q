import "./person.scss";

import React, { useEffect, useRef, useState } from "react";

import HomeSection from "../HomeSection";

import { BgFrame3 } from "../../../assets/videos";
import { contry, homePerson } from "../../../assets/home-person";

const Person = (props) => {
  const [datacontry] = useState(contry);
  const [datahomePerson] = useState(homePerson);

  const [isContry, setIsContry] = useState("nguy");
  const [isPerson, setIsPerson] = useState("chunghoi");

  return (
    <HomeSection
      className={`person ${props.isActive ? "active" : ""}`}
      contentClassName="overlay person__content"
      bgImage={BgFrame3}
    >
      <div className="site__person">
        <div className="site__person__title"></div>

        {/* thong tin tuong */}
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
                            isContry === dataperson?.contry
                              ? "swiper__slide__show"
                              : "swiper__slide__hidden"
                          } ${
                            isPerson === dataperson?.nickName ? "active" : ""
                          }`}
                          onClick={() => setIsPerson(dataperson?.nickName)}
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
        <div className="site__person__item">
          {datahomePerson?.map((cvperson, id) => (
            <div
              className={`${
                isPerson === cvperson?.nickName
                  ? "site__person__item__CV"
                  : "site__person__item__CV__hidden"
              }`}
            >
              <div className="site__person__item__CV__bg">
                <img
                  className="site__person__item__CV__bg__img"
                  src={cvperson?.bgLarge}
                  alt={`avatar-${id}`}
                />
              </div>

              <div className="site__person__item__CV__description">
                <div className="site__person__item__CV__description__cv">
                  <img
                    className="site__person__item__CV__description__cv__name"
                    src={cvperson?.name}
                    alt={`name-${id}`}
                  />
                </div>
                <div className="site__person__item__CV__description__introduction">
                  <p>{cvperson?.description}</p>
                </div>
                <div className="site__person__item__CV__description__skill">
                  <img
                    src={cvperson?.skill.skill1}
                    alt={`skill-${cvperson?.skill.skill1}`}
                  />
                  <img
                    src={cvperson?.skill.skill2}
                    alt={`skill-${cvperson?.skill.skill2}`}
                  />
                  <img
                    src={cvperson?.skill.skill3}
                    alt={`skill-${cvperson?.skill.skill3}`}
                  />
                  <img
                    src={cvperson?.skill.skill4}
                    alt={`skill-${cvperson?.skill.skill4}`}
                  />
                </div>
                <div className="site__person__item__CV__description__video"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HomeSection>
  );
};

export default Person;