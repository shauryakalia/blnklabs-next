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
  const [_isIpad, setIpad] = useState();
  const [_isMac, setMac] = useState();

  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
    if (window.innerWidth > 768 && window.innerWidth < 1100) setIpad(true);
    if (window.innerWidth > 1400) setMac(true);

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

      <div className={`canvas-wrapper  ${_isMobile ? "" : "d-flex"}`}>
        <Link
          href={{
            pathname: "/SecondPageDetails",
            query: {
              images: [detailTitle, imgUrl6, imgUrl4, imgUrl5],
              title: conTitle,
              subTitle: conSubTitle,
              linkText: "VISUAL EXPERIMENTATION",
              bottomLink: "SecondPageDetails",
              bottomLinkObj: JSON.stringify({
                images: [detailTitle, imgUrl8, imgUrl9],
                title: visTitle,
                subTitle: visSubTitle,
                linkText: "Experiments",
                bottomLink: "",
                bottomLinkObj: JSON.stringify({}),
              }),
            },
          }}
        >
          <a
            className={`canvas col-xs-11 col-md-3 ml-2 ${
              _isMobile ? "canvas-mobile" : ""
            } `}
            style={_isMac ? { height: "600px" } : null}
          >
            <div
              className="canvas_img-wrapper"
              style={{
                height: _isIpad ? "300px" : "100%",
                width: _isIpad ? "230px" : "100%",
                border: "1px solid black",
                margin: _isIpad ? "0 -30px" : "",
              }}
            >
              <Image
                height="130px"
                width="230px"
                className="canvas_img"
                src={imgUrl1}
                alt=""
                loading="lazy"
              />
              <div
                className={`canvas_copy ${
                  _isIpad ? "ipadCanvasCopyLeft" : ""
                } ${
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
              linkText: "Experiments",
              bottomLink: "",
              bottomLinkObj: JSON.stringify({}),
            },
          }}
        >
          <a
            className={`canvas ${
              _isMobile ? "canvas-mobile" : ""
            } col-xs-11 col-md-3 mt-5 ${_isMobile ? "ml0" : "ml40"}`}
            style={_isMac ? { height: "600px" } : null}
          >
            <div
              className="canvas_img-wrapper"
              style={{
                backgroundImage: `url(${imgUrl3})`,
                backgroundSize: "cover",
                marginTop: _isMobile ? "30%" : "0",
                height: _isIpad ? "300px" : "100%",
                width: _isIpad ? "230px" : "100%",
              }}
            >
              <div
                className={`canvas_copy ${
                  _isIpad ? "ipadCanvasCopyRight" : ""
                } ${_isMobile ? "mobile-canvas_copy--right" : ""}`}
              >
                <span className="canvas_copy_title2">VISUAL</span>
                <span className="canvas_copy_title2">EXPERIMENTATION</span>
                <span className="canvas_copy_details2 text-dark">
                  <i className="bi bi-arrow-left"></i> Know more
                </span>
              </div>
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
