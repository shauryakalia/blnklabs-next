import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function SecondPageDetails() {
  const [_isMobile, setMobile] = useState();
  const [innerHeight, setInnerHeight] = useState(700);
  useEffect(() => {
    setMobile(isMobile);
    if (!images) Router.push("/");
    setInnerHeight(window.innerHeight);
  }, [setMobile]);

  const scrollToSection = (elemId = "blnkheader") => {
    var element = document.getElementById(elemId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  const { images, descTitle = "", descSubTitle = "", desc = "" } = router.query;

  return images ? (
    <>
      <div id="exp1" className="d-flex justify-content-center p-5">
        <div
          className="exp-details-imgs w-50"
          style={{ height: _isMobile ? "250px" : `${innerHeight}px` }}
        >
          <Image
            layout="fill"
            src={images[0]}
            alt={`${0}-slide`}
            placeholder={images[0]}
            loading="lazy"
          />
        </div>
        <div
          className="exp-details-imgs w-50"
          style={{ height: _isMobile ? "250px" : `${innerHeight}px` }}
        >
          <Image
            layout="fill"
            src={images[1]}
            alt={`${0}-slide`}
            placeholder={images[0]}
            loading="lazy"
          />
        </div>
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
