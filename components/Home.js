import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function Home({ data }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  const { videoUrl, content1, content2, highlightText } = data;
  const [text1, text2] = highlightText.split("h3 ");
  return (
    <>
      <div id="home" className="d-flex pt-1">
        <div className="col-md-2 d-flex justify-content-end">
          <i className="bi bi-play-circle homePlayBtn"></i>
        </div>
        <div
          id="homeVideo"
          className="carousel slide carousel-fade col-md-10"
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
      </div>
      <div className="p-5 h5 text-muted">
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
