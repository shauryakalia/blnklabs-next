import Image from "next/image";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
export default function OurStory({ data }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  const {
    title,
    leftTitle,
    rightTitle1,
    rightTitle2,
    rightTitle3,
    osImgUrl1,
    osImgUrl2,
    osImgUrl3,
    osImgUrl4,
    osImgUrl6,
  } = data;
  const [t1, t2] = title.split(" ");
  const [lt1, lt2, lt3] = leftTitle.split(" ");

  return (
    <div id="contactUs">
      <div className="d-flex justify-content-center align-items-center h1 ourStoryBox">
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            {/* <div className="squareBox"></div> */}
            <div className="px-2 h3 txtBold">{t1}</div>
            {/* <div className="squareBox"></div> */}
          </div>
          <div className="txtBold">{t2}</div>
          <br />
          <div className="enterButton">ENTER</div>
        </div>
      </div>
      <div className={`p-5`}>
        <div className="col-md-12 textLeft">
          <p className="h2 themeClr txtBold">{lt1}</p>
          <p className="h2 themeClr txtBold fontWeightNormal">{lt2}</p>
          <p className="h2 themeClr txtBold">{lt3}</p>
        </div>
        <div className="col-md-12 h6 txtBold text-muted textRight pl-5 d-flex justify-content-end">
          <div className="col-md-9">
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
          />
        </div>
        <div className="col-xs-12 col-md-12 text-center mt-3">
          <span className="h1 pl-4 lastImgText lastImgTextStyle">THRILL</span>
        </div>
      </div>
    </div>
  );
}
