import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import Rellax from "rellax";

export default function SecondPage({ data }) {
  const {
    title,
    imgUrl1,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl8,
    imgUrl9,
    conTitle,
    conSubTitle,
    visTitle,
    visSubTitle,
    detailTitle,
  } = data;
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
    // setNewParllaxEle("secondPageContainer", 0);
  }, [setMobile]);

  const setNewParllaxEle = (className, speed) => {
    return new Rellax(`.${className}`, {
      speed: speed,
      wrapper: null,
      vertical: true,
      horizontal: false,
    });
  };

  return (
    <div className="m-sm-0 m-md-5 secondPageContainer">
      <h2 className="text-center mb-5">{title}</h2>

      <div className={`canvas-wrapper ${_isMobile ? "" : "d-flex"}`}>
        <Link
          href={{
            pathname: "/SecondPageDetails",
            query: {
              images: [detailTitle, imgUrl6, imgUrl4, imgUrl5],
              title: conTitle,
              subTitle: conSubTitle,
            },
          }}
        >
          <a
            className={`canvas col-xs-11 col-md-3 ml-2 ${
              _isMobile ? "canvas-mobile" : ""
            }`}
          >
            <div className="canvas_img-wrapper">
              <Image
                height="130px"
                width="230px"
                className="canvas_img"
                src={imgUrl1}
                alt=""
                loading="lazy"
              />
            </div>
            <div
              className={`canvas_copy ${
                _isMobile ? "mobile-canvas_copy--left" : "canvas_copy--left"
              }`}
            >
              <span
                className={`canvas_copy_title ${
                  _isMobile ? "text_canvas_copy_title" : ""
                }`}
              >
                CONCEPT
              </span>
              <span className="canvas_copy_title">EXPERIMENTATION</span>
              <span
                className={`canvas_copy_details text-dark ${
                  _isMobile ? "text_canvas_copy_details" : ""
                }`}
              >
                Know more <i className="bi bi-arrow-right"></i>
              </span>
            </div>
          </a>
        </Link>
        <Link
          href={{
            pathname: "/SecondPageDetails",
            query: {
              images: [detailTitle, imgUrl8, imgUrl9],
              title: visTitle,
              subTitle: visSubTitle,
            },
          }}
        >
          <a
            className={`canvas ${
              _isMobile ? "canvas-mobile" : ""
            } col-xs-11 col-md-3 mt-5 ${_isMobile ? "ml0" : "ml40"}`}
          >
            <div
              className="canvas_img-wrapper"
              style={{
                backgroundImage: `url(${imgUrl3})`,
                backgroundSize: "cover",
                marginTop: _isMobile ? "30%" : "0",
              }}
            >
              {/* <div className="img-border">
                <Image
                  height="200px"
                  width="350px"
                  className="canvas_img"
                  src={imgUrl2}
                  alt=""
                  loading="lazy"
                />
              </div> */}
            </div>
            <div
              className={`canvas_copy ${
                _isMobile ? "mobile-canvas_copy--right" : ""
              }`}
            >
              <span className="canvas_copy_title2">VISUAL</span>
              <span className="canvas_copy_title2">EXPERIMENTATION</span>
              <span className="canvas_copy_details2 text-dark">
                <i className="bi bi-arrow-left"></i> Know more
              </span>
            </div>
          </a>
        </Link>
      </div>
      {_isMobile ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : null}
    </div>
  );
}
