import "./navbar.scss";
import React, { useState } from "react";
import { icongame, MenuOption } from "../../assets/images";
import {
  btnnapthe,
  btntaigame,
  discord,
  fanpage,
  group,
} from "../../assets/images/Button/navbar/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <div className="navbar">
      <img className="navbar__logo" src={icongame} alt="Logo-img" />
      <div className="navbar__title">
        <a href="##" className="slide-btn">
          <img src={btnnapthe} alt="napthe" />
        </a>
        <a href="##" className="slide-btn">
          <img src={btntaigame} alt="taigame" />
        </a>
      </div>
      <div className={`navbar__menu ${open ? "menu__active" : ""}`}>
        <ul className="navbar__menu__item">
          <li>
            <a className="active" href="/">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="/news">Tin tức</a>
          </li>
          <li>
            <a href="/cardcap">Nạp thẻ</a>
          </li>
          <li>
            <a href="/manual">Cẩm nang</a>
          </li>
          <li>
            <a href="/community">Cộng đồng</a>
          </li>
          <li>
            <a href="/library">Thư viện</a>
          </li>
        </ul>
      </div>
      <div className="cross__icons" onClick={handleClick}>
        <img src={MenuOption} alt="Menu-Option" />
      </div>
      <div className="navbar__ground">
        <a href="##" className="slide-btn__ground">
          <img src={fanpage} alt="napthe" />
        </a>
        <a href="##" className="slide-btn__ground">
          <img src={group} alt="napthe" />
        </a>
        <a href="##" className="slide-btn__ground">
          <img src={discord} alt="napthe" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
