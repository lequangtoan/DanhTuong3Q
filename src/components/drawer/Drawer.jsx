import React from "react";

import "./drawer.scss";
import {
  appstore,
  chplay,
  congdong,
  facebook,
  gialappccolum,
  icongame,
  napthe,
} from "../../assets/images";

const Drawer = () => {

  return (
    <div className="drawer">
      <div className="drawer__info__app">
        <a className="drawer__icongame" href="##">
          <img src={icongame} alt="" />
        </a>

        <a className="drawer__appstore" href="http://">
          <img src={appstore} alt="" />
        </a>
        <a className="drawer__appstore" href="http://">
          <img src={chplay} alt="" />
        </a>

        <a className="drawer__gialappc" href="http://">
          <img src={gialappccolum} alt="" />
        </a>
        <div className="drawer__info__app__pay">
          <a className="drawer__napthe" href="http://">
            <img src={napthe} alt="" />
          </a>
        </div>

        <div className="drawer__info__Group">
          <a className="drawer__congdong" href="http://">
            <img src={congdong} alt="" />
          </a>
          <a className="drawer__facebook" href="http://">
            <img src={facebook} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
