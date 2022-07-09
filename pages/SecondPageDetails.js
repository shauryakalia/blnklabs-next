import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

import Parllax from "../components/Parllax";

export default function SecondPageDetails() {
  const [_isMobile, setMobile] = useState();
  const [innerHeight, setInnerHeight] = useState(700);
  useEffect(() => {
    setMobile(isMobile);
    // if (!images) Router.push("/");
    setInnerHeight(window.innerHeight);
  }, [setMobile]);

  const scrollToSection = (elemId = "blnkheader") => {
    var element = document.getElementById(elemId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  const { images, title, subTitle } = router.query;

  return images ? (
    <>
      <Parllax
        imgSrc={
          _isMobile
            ? "/assets/Lines/mobile02.png"
            : "/assets/Lines/windows02.png"
        }
        zIndex={-5}
      />
      <div id="exp1" className="justify-content-center px-5 text-center">
        <Image
          height="220px"
          width="220px"
          src={images[0]}
          alt={`${0}-slide`}
          placeholder={images[0]}
          loading="lazy"
        />
        <div
          className={`text-center themeClr ${
            _isMobile ? "" : "secondPageDetailsTitleContainer"
          }`}
        >
          <div className="fs30 letterSpacing8 font-weight-bold mb-2">
            {title}
          </div>
          <div className={`fs20 ${_isMobile ? "" : "px-5"}`}>{subTitle}</div>
        </div>
        <div
          className={`exp-details-imgs col-md-12 ${_isMobile ? "pt-5" : ""}}`}
          style={{ height: _isMobile ? "600px" : `1800px` }}
        >
          <Image
            layout="fill"
            src={images[1]}
            alt={`${0}-slide`}
            placeholder={images[0]}
            loading="lazy"
          />
        </div>
        <div
          className="exp-details-imgs col-md-12"
          style={{ height: _isMobile ? "600px" : `1800px` }}
        >
          <Image
            layout="fill"
            src={images[2]}
            alt={`${0}-slide`}
            placeholder={images[0]}
            loading="lazy"
          />
        </div>
        {images[3] ? (
          <div
            className="exp-details-imgs col-md-12"
            style={{ height: _isMobile ? "600px" : `1800px` }}
          >
            <Image
              layout="fill"
              src={images[3]}
              alt={`${0}-slide`}
              placeholder={images[0]}
              loading="lazy"
            />
          </div>
        ) : null}
      </div>

      <div>
        <div className="scrollToTopBtn" onClick={() => scrollToSection()}>
          <i className="bi bi-arrow-up-square"></i>
        </div>
        {/* <div className="scrollToTopBtn" onClick={() => scrollToSection()}>
          Experiments
        </div> */}
      </div>
    </>
  ) : null;
}
