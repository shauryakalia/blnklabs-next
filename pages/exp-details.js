import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function ExpDetails() {
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
      <div id="exp1">
        {images.map((img, idx) => (
          <>
            <div
              className="exp-details-imgs mb-1"
              key={idx}
              style={{ height: _isMobile ? "250px" : `${innerHeight}px` }}
            >
              <Image
                key={idx}
                layout="fill"
                src={img}
                alt={`${0}-slide`}
                key={0}
                placeholder={images[0]}
                loading="lazy"
              />
            </div>
            <div className={idx === 0 && descTitle !== "" ? "" : "d-none"}>
              <div className="p-5 text-center h5 themeClr">
                <p className="fs40 letterSpacing8">{descTitle}</p>
                <p className="h5">{descSubTitle}</p>
                <p className="fs16">{desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div>
        <div className="scrollToTopBtn" onClick={() => scrollToSection()}>
          <i className="bi bi-arrow-up-square"></i>
        </div>
      </div>
    </>
  ) : null;
}
