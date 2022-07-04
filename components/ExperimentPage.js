import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Link from "next/link";

export default function ExperimentPage({ data, inverse = false }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
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
        className={`m-sm-0 m-md-2 px-sm-0 ${_isMobile ? "mt-5" : ""}`}
        id="projects"
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
                <div>
                  <span className="text-center themeClr mb-3 leftTitle">
                    <span className="d-block fs40">{lt1}</span>
                    <span className="fs50 d-block">
                      <span>{lt2}</span>
                      &nbsp;
                      <span>{lt3}</span>
                    </span>
                    <span className="d-block fs50">{lt4}</span>
                  </span>
                  <div className={leftTitle ? "mt-5" : ""}>
                    <Link
                      href={{
                        pathname: "/exp-details",
                        query: {
                          images,
                          descTitle,
                          descSubTitle,
                          desc,
                        },
                      }}
                    >
                      <a>
                        <i className="bi bi-play-circle block fs50"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="block">FULL PROJECT</div>
                </div>
              </div>
              <div className={`col-xs-12 col-md-9 p-sm-0 p-md-5 `}>
                <span
                  className={`textRight d-block fs50  ${inverse ? "pr20" : ""}`}
                >
                  {rightTitle}
                </span>
                <div className={`emptyBox ${inverse ? "left45" : ""}`}></div>
                <div
                  className={`line emptyBox ${
                    inverse ? "left0 lineborderLeft" : "lineborderRight"
                  }`}
                >
                  <span className={`exp-indicator ${inverse ? "left0" : ""}`}>
                    {rightTitle.split(".")[1]}
                  </span>
                </div>
                <video
                  // ref="video"
                  className="img-fluid p20"
                  muted
                  loop
                  // autoPlay
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <div className={`filledBox ${inverse ? "right270" : ""}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
