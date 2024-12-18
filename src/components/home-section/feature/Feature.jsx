import "./feature.scss";

import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";

import HomeSection from "../HomeSection";

import { BgFrame5 } from "../../../assets/videos";
import { homeFeature } from "./../../../assets/home-feature";

const Feature = (props) => {
  const [data] = useState(homeFeature);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [activeKey, setActiveKey] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [hoverKey, setHoverKey] = useState(null);

  const startNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveKey((prevKey) => Math.floor((prevKey + 1) % data.length));
    }, 3000);
  };

  const handleNext = (index) => {
    setActiveKey(index);
    startNext();
  };

  useEffect(() => {
    startNext();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data.length]);

  useEffect(() => {
    const resizeHandler = debounce(() => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setSize({ width: clientWidth, height: clientHeight });
      }
    }, 2000);

    const runResizeHandler = () => {
      requestAnimationFrame(resizeHandler);
    };

    runResizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <HomeSection
      className={`feature ${props.isActive ? "active" : ""}`}
      contentClassName="overlay feature__content"
      bgImage={BgFrame5}
    >
      <div className="site__feature">
        <div className="site__feature__title"></div>
      </div>

      <div
        className="accordion__wrapper"
        ref={containerRef}
      >
        <ul className="accordion__content">
          {data?.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNext(index)}
            >
              <img
                src={
                  activeKey === index
                    ? item?.tagActive
                    : hoverKey === item?.tagActive
                    ? hoverKey
                    : item?.tag
                }
                className="accordion__content__tag"
                alt={`tag-${index}`}
                onMouseEnter={() => setHoverKey(item?.tagActive)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <img
                src={item?.feature}
                className={`${
                  activeKey === index
                    ? "accordion__content__expansion-active"
                    : "accordion__content__expansion"
                }`}
                alt={`feature-${index}`}
              />
            </li>
          ))}
        </ul>
        <ul className="accordion__content__mobile">
          {data?.map((item, index) => (
            <li
              key={index}
              onClick={() => handleNext(index)}
            >
              <img
                src={
                  activeKey === index
                    ? item?.tagMobileActive
                    : hoverKey === item?.tagMobileActive
                    ? hoverKey
                    : item?.tagMobile
                  // item?.tagMobile
                }
                className="accordion__content__tag"
                alt={`tag-${index}`}
                onMouseEnter={() => setHoverKey(item?.tagMobileActive)}
                onMouseLeave={() => setHoverKey(null)}
              />
              <img
                src={item?.feature}
                className={`${
                  activeKey === index
                    ? "accordion__content__expansion-active"
                    : "accordion__content__expansion"
                }`}
                alt={`feature-${index}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </HomeSection>
  );
};

export default Feature;