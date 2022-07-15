import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Link from "next/link";

export default function ExperimentPage({ data, inverse = false }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
  }, [setMobile]);

  const {
    leftTitle,
    rightTitle,
    videoUrl,
    imgUrls,
    descTitle,
    descSubTitle,
    desc,
  } = data;

  let lt1 = "";
  let lt2 = "";
  let lt3 = "";
  let lt4 = "";

  if (leftTitle) {
    const [olt1, olt2, olt3, olt4] = leftTitle.split(" ");
    lt1 = olt1;
    lt2 = olt2;
    lt3 = olt3;
    lt4 = olt4;
  }

  let images = [];
  if (imgUrls) images = imgUrls.split("|");

  return (
    <>
      <div
        className={`m-sm-0 m-md-2 px-sm-0 ${_isMobile ? "" : ""}`}
        id={leftTitle ? "projects" : ""}
      >
        <div
          id="exp1Video"
          className="carousel slide carousel-fade mb-5 p-sm-0 p-md-3"
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className={`carousel-item active ${
                _isMobile ? "px-2" : "d-flex"
              } justify-content-between ${inverse ? "row-reverse" : ""}`}
            >
              <div
                className={`col-xs-12 col-md-2 text-center d-flex justify-content-center ${
                  leftTitle ? "" : "align-items-center"
                }`}
              >
                <div
                  style={{
                    marginLeft: _isMobile ? "" : !inverse ? "100px" : "",
                  }}
                >
                  <div
                    className={`text-center themeClr mb-3 leftTitle lightFont ${
                      leftTitle ? "" : "d-none"
                    }`}
                  >
                    {leftTitle && _isMobile ? (
                      <>
                        <div className="mt-50"></div>
                      </>
                    ) : (
                      ""
                    )}
                    <span className="d-block fs40">{lt1}</span>
                    <span className="fs50 d-block">
                      <span>{lt2}</span>
                      &nbsp;
                      <span>{lt3}</span>
                    </span>
                    <span className="d-block fs50">{lt4}</span>
                  </div>
                  <div
                    className={leftTitle ? (_isMobile ? "mt-50" : "mt-50p") : ""}
                  >
                    <Link
                      href={{
                        pathname: "/ExpDetails",
                        query: {
                          images,
                          descTitle,
                          descSubTitle,
                          desc,
                        },
                      }}
                    >
                      <a>
                        <i className="bi bi-play-circle block fs50 textDark"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="block">FULL PROJECT</div>
                </div>
              </div>
              <div className={`col-xs-12 col-md-9 p-sm-0 p-md-5 `}>
                <span
                  className={`${
                    _isMobile ? "textCenter noPadding" : "textRight"
                  } d-block fs50 lightFont ${
                    inverse || _isMobile ? "pr20" : ""
                  }`}
                >
                  {rightTitle}
                </span>
                <div
                  className={`emptyBox ${_isMobile ? "d-none" : ""} ${
                    inverse ? "left45" : ""
                  }`}
                ></div>
                <div
                  className={`line emptyBox ${
                    inverse ? "left0 lineborderLeft" : "lineborderRight"
                  }`}
                >
                  <span className={`exp-indicator ${inverse ? "left0" : ""}`}>
                    {rightTitle.split(".")[1]}
                  </span>
                </div>
                <video className="img-fluid p20" muted loop autoPlay>
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <div
                  className={`filledBox ${_isMobile ? "d-none" : ""} ${
                    inverse ? "right270" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
