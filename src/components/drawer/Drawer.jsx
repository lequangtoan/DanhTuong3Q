import React from "react";

import "./drawer.scss";
import {
  appstore,
  chplay,
  congdong,
  facebook,
  gialappccolum,
  icongame,
  ButtonNapThe,
} from "../../assets/images";

const Drawer = () => {
  return (
    <div className="slide" id="slide">
      {/* <img className="slide-btn" src="" alt="close" /> */}
      <div className="slide-content">
        <a href="##" className="slide-content-btn">
          <img src={icongame} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={appstore} alt="ios" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={chplay} alt="google" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={gialappccolum} alt="voucherCenter" />
        </a>
        <a href="##" className="slide-content-btn">
          <img src={ButtonNapThe} alt="voucherCenter" />
        </a>
        <div className="slide-content-ground">
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={congdong} alt="voucherCenter" />
          </a>
          <a href="##" className="slide-content-ground-btn" target="_blank">
            <img src={facebook} alt="voucherCenter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
