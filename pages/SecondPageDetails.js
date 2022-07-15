import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Parllax from "../components/Parllax";

export default function SecondPageDetails() {
  const [_isMobile, setMobile] = useState();
  const [innerHeight, setInnerHeight] = useState(700);
  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
    // if (!images) Router.push("/");
    setInnerHeight(window.innerHeight);
  }, [setMobile]);

  const scrollToSection = (elemId = "blnkheader") => {
    var element = document.getElementById(elemId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  const {
    images,
    title,
    subTitle,
    linkText,
    bottomLink,
    bottomLinkObj,
  } = router.query;

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
      <div
        id="exp1"
        className={`justify-content-center text-center ${
          _isMobile ? "px-2" : "px-5"
        }`}
      >
        <Image
          height="220px"
          width="220px"
          src={images[0]}
          alt={`${0}-slide`}
          placeholder={images[0]}
          loading="lazy"
        />
        <div
          className={`text-center px-2 themeClr ${
            _isMobile ? "" : "secondPageDetailsTitleContainer"
          }`}
        >
          <div className="fs30 letterSpacing8 font-weight-bold mb-2">
            {title}
          </div>
          <div className={`fs20 ${_isMobile ? "" : "px-5"}`}>{subTitle}</div>
        </div>
        <br />

        <Image
          width={3840}
          height={6137}
          layout="responsive"
          src={images[1]}
          alt={`${0}-slide`}
          placeholder={images[0]}
          loading="lazy"
        />

        <Image
          width={3840}
          height={6137}
          layout="responsive"
          src={images[2]}
          alt={`${0}-slide`}
          placeholder={images[0]}
          loading="lazy"
        />

        {images[3] ? (
          <Image
            width={3840}
            height={6137}
            layout="responsive"
            src={images[3]}
            alt={`${0}-slide`}
            placeholder={images[0]}
            loading="lazy"
          />
        ) : null}
      </div>

      <div>
        <div
          className="shadow-lg text-center p-5 fs20"
          onClick={() => {
            console.log(bottomLinkObj);
            router.push({
              pathname: `/${bottomLink}`,
              query: { ...JSON.parse(bottomLinkObj) },
            });
            if (bottomLink === "") {
              setTimeout(() => scrollToSection("projects"), 1000);
            }
          }}
        >
          <div>
            <i className="bi bi-play-circle secondPagePlayButton"></i>
          </div>
          <div>{linkText}</div>
        </div>
      </div>
    </>
  ) : null;
}
