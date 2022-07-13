import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import Parllax from "../components/Parllax";

export default function ourStoryDetails() {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
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
      <Parllax
        imgSrc={
          _isMobile
            ? "/assets/Lines/mobile04.png"
            : "/assets/Lines/windows04.png"
        }
        zIndex={-5}
      />
      <div className={`p-5`}>
        <div className="col-md-12 textLeft">
          <span className="themeClr d-block txtBold fs40">{lt1}</span>
          <span className="themeClr d-block  fs70 lightFont">{lt2}</span>
          <span className="themeClr d-block txtBold fs40">{lt3}</span>
        </div>
        <div className="col-md-12 text-muted textRight pl-5 d-flex justify-content-end lightFont">
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
        <div className="col-xs-12 col-md-5 textRight mr-5">
          <Image
            src={osImgUrl1}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
        <div className="col-xs-12 col-md-5 text-center">
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle">
              STABLITY
            </span>
          </div>
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
              STABLITY
            </span>
          </div>
        </div>
      </div>

      {/* STRENGTH */}
      <div
        className={`${
          _isMobile
            ? "p-3 flex-column-reverse"
            : "p-1  justify-content-around align-items-center ourStoryCard-1"
        } d-flex `}
      >
        <div
          className={`col-xs-12 col-md-5 text-center ${
            _isMobile ? "" : "mt-200"
          } `}
        >
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle">
              STRENGTH
            </span>
          </div>
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
              STRENGTH
            </span>
          </div>
        </div>

        <div className="col-xs-12 col-md-5 textLeft ml-5">
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
        }  justify-content-around align-items-center`}
      >
        <div className="col-xs-12 col-md-5 textRight mr-5">
          <Image
            src={osImgUrl3}
            width="500"
            height="500"
            alt="ourStory-1"
            className="mt-5 shadow"
            loading="lazy"
          />
        </div>
        <div className="col-xs-12 col-md-5 text-center">
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle">
              CALMNESS
            </span>
          </div>
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
              CALMNESS
            </span>
          </div>
        </div>
      </div>

      {/* POWER */}
      <div
        className={`${
          _isMobile
            ? "p-3 flex-column-reverse"
            : "p-1  justify-content-around align-items-center ourStoryCard-1"
        } d-flex `}
      >
        <div
          className={`col-xs-12 col-md-5 text-center ${
            _isMobile ? "" : "mt-200"
          }`}
        >
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle">POWER</span>
          </div>
          <div>
            <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
              POWER
            </span>
          </div>
        </div>

        <div className="col-xs-12 col-md-5 textLeft ml-5">
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
      {_isMobile ? (
        <div
          className={`${
            _isMobile
              ? "p-3 flex-column-reverse"
              : "p-1  justify-content-around align-items-center ourStoryCard-1"
          } d-flex `}
        >
          <div
            className={`col-xs-12 col-md-5 text-center ${
              _isMobile ? "" : "mt-200"
            }`}
          >
            <div>
              <span className="h1 pl-4 lastImgText lastImgTextStyle">
                THRILL
              </span>
            </div>
            <div>
              <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
                THRILL
              </span>
            </div>
          </div>

          <div className="col-xs-12 col-md-5 textLeft ml-5">
            <Image
              src={osImgUrl6}
              width="500"
              height="500"
              alt="ourStory-1"
              className="mt-5 shadow"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
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
            <div>
              <span className="h1 pl-4 lastImgText lastImgTextStyle">
                THRILL
              </span>
            </div>
            <div>
              <span className="h1 pl-4 lastImgText lastImgTextStyle-2">
                THRILL
              </span>
            </div>
          </div>
        </div>
      )}

      <Image
        src={osImgUrl7}
        width="1920"
        height="1080"
        alt="ourStory-1"
        className="mt-5 shadow"
        loading="lazy"
      />
      <p className="text-center ourStoryLastSection">{ourStoryEndText}</p>
    </>
  ) : null;
}
