import "./navbar.scss";
import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { icongame, MenuOption } from "../../assets/images";

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
        <h2>Danh Tướng Origin</h2>
      </div>
      <div className={`navbar__menu ${open ? "menu__active" : ""}`}>
        <ul className="navbar__menu__item">
          <li>
            <a className="active" href="/">Trang chủ</a>
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
    </div>
  );
};

export default Navbar;
