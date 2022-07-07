import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import Rellax from "rellax";

export default function Home({ data }) {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
    setNewParllaxEle("homePlayBtn", -3.50);
  }, [setMobile]);

  const setNewParllaxEle = (className, speed) => {
    return new Rellax(`.${className}`, {
      speed: speed,
      wrapper: null,
      vertical: true,
      horizontal: false,
    });
  };

  const { videoUrl, content1, content2, highlightText } = data;
  const [text1, text2] = highlightText.split("h3 ");

  return (
    <>
      <div id="home" className={` pt-1 ${_isMobile ? "" : "d-flex"}`}>
        <div
          className={`col-md-2 d-flex justify-content-end ${
            _isMobile ? "d-none" : ""
          }`}
        >
          <i className="bi bi-play-circle homePlayBtn"></i>
        </div>
        <div
          id="homeVideo"
          className={`carousel slide carousel-fade ${
            _isMobile ? "col-md-12" : "col-md-10"
          }`}
          data-mdb-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <video className="img-fluid" height="100%" autoPlay muted loop>
                <source src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className={`col-md-12 text-center ${_isMobile ? "" : "d-none"}`}>
          <i className="bi bi-play-circle mobileHomePlayBtn"></i>
        </div>
      </div>
      <div className={` h5 text-muted ${_isMobile ? "px-5 pb-5" : "p-5"}`}>
        <p>
          <span>{text1}</span>
          <span className="h4 text-dark">{text2}</span>
          {content1}
        </p>
        <p>{content2}</p>
      </div>
    </>
  );
}
