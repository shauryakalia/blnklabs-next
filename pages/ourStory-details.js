import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function ourStoryDetails() {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
    if (!leftTitle) Router.push("/");
  }, [setMobile]);

  const router = useRouter();
  const {
    rightTitle1,
    rightTitle2,
    rightTitle3,
    osImgUrl1,
    osImgUrl2,
    osImgUrl3,
    osImgUrl4,
    osImgUrl6,
    osImgUrl7,
    ourStoryEndText,
    leftTitle,
  } = router.query;

  let lt1 = "";
  let lt2 = "";
  let lt3 = "";

  if (leftTitle) {
    const [olt1, olt2, olt3] = leftTitle.split(" ");
    lt1 = olt1;
    lt2 = olt2;
    lt3 = olt3;
  }

  return leftTitle ? (
    <>
      <div className={`p-5`}>
        <div className="col-md-12 textLeft">
          <p className="h2 themeClr txtBold">{lt1}</p>
          <p className="h2 themeClr txtBold fontWeightNormal">{lt2}</p>
          <p className="h2 themeClr txtBold">{lt3}</p>
        </div>
        <div className="col-md-12 text-muted textRight pl-5 d-flex justify-content-end">
          <div className="col-md-7">
            <p>{rightTitle1}</p>
            <p>{rightTitle2}</p>
            <p>{rightTitle3}</p>
          </div>
        </div>
      </div>

      {/* STABLITY */}
      <div
        className={`${
          _isMobile ? "p-3" : "p-1 d-flex"
        }  justify-content-around align-items-center`}
      >
        <div className="col-xs-12 col-md-6 textRight">
          <Image
            src={osImgUrl1}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
        <div className="col-xs-12 col-md-6 text-center">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">STABLITY</span>
        </div>
      </div>

      {/* STRENGTH */}
      <div
        className={`${
          _isMobile
            ? "p-3 flex-column-reverse"
            : "p-1  justify-content-around align-items-center"
        } d-flex `}
      >
        <div className="col-xs-12 col-md-6 text-center">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">STRENGTH</span>
        </div>

        <div className="col-xs-12 col-md-6 textLeft">
          <Image
            src={osImgUrl2}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
      </div>

      {/* CALMNESS */}
      <div
        className={`${
          _isMobile ? "p-3" : "p-1 d-flex"
        } justify-content-around align-items-center`}
      >
        <div className="col-xs-12 col-md-6 textRight">
          <Image
            src={osImgUrl3}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
        <div className="col-xs-12 col-md-6 text-center">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">CALMNESS</span>
        </div>
      </div>

      {/* POWER */}
      <div
        className={`${
          _isMobile
            ? "p-3 flex-column-reverse"
            : "p-1  justify-content-around align-items-center"
        } d-flex `}
      >
        <div className="col-xs-12 col-md-6 text-center">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">POWER</span>
        </div>

        <div className="col-xs-12 col-md-6 textLeft">
          <Image
            src={osImgUrl4}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
      </div>

      {/* THRILL */}
      <div className="p-sm-1 p-md-5">
        <div className="col-xs-12 col-md-12 text-center">
          <Image
            src={osImgUrl6}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
        <div className="col-xs-12 col-md-12 text-center mt-3">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">THRILL</span>
        </div>
      </div>
      <div>
        <Image
          src={osImgUrl7}
          width="1400"
          height="700"
          alt="ourStory-1"
          className="mt-5 shadow"
          loading="lazy"
        />
        <p className="text-center ourStoryLastSection">{ourStoryEndText}</p>
      </div>
    </>
  ) : null;
}
