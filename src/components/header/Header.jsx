import React,{useEffect, useState} from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="overlay">
      <div className="header">
        <div className="header__inner container">
          <ul className="header__nav ">
            <li>
              <a className="active" href="##">trang chủ</a>
            </li>
            <li>
              <a className="" href="##">tin tức</a>
            </li>
            <li>
              <a className="" href="##">nạp thẻ</a>
            </li>
            <li>
              <a className="" href="##">Cẩm nang</a>
            </li>
            <li>
              <a className="" href="##">cộng đồng</a>
            </li>
            <li>
              <a className="" href="##">thư viện</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
