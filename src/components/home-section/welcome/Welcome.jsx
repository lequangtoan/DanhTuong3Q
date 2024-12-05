import "./welcome.scss";

import HomeSection from "../HomeSection";

import {
  logo,
  icongame,
  appstore,
  chplay,
  gialappc,
  napthe,
} from "../../../assets/images";

import { BgFrame1 } from "../../../assets/videos";

const Welcome = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content"
      bgImage={BgFrame1}
    >
      <div className="welcome__logo">
        <img src={logo} alt="" />
      </div>
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="info__app">
            <a className="info__app__icon" href="##">
              <img src={icongame} alt="" />
            </a>

            <div className="info__app__mobile">
              <a className="appstore" href="http://">
                <img src={appstore} alt="" />
              </a>
              <a className="appstore" href="http://">
                <img src={chplay} alt="" />
              </a>
            </div>
            <div className="info__app__pc">
              <a className="gialappc" href="http://">
                <img src={gialappc} alt="" />
              </a>
            </div>
            <div className="info__app__pay">
              <a className="napthe" href="http://">
                <img src={napthe} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
