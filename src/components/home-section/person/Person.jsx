import "./person.scss";

import React from "react";

import HomeSection from "../HomeSection";

import { BgFrame2 } from "../../../assets/videos";
import { quanvu } from "../../../assets/img-video-person";

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
        <img className="site__person__bg" src={quanvu} alt="" />

        <div className="site__person__battle">
          

          
        </div>
      </div>
    </HomeSection>
  );
};

export default Person;
