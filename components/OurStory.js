import Link from "next/link";
import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
export default function OurStory({ data }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  const {
    title,
    rightTitle1,
    rightTitle2,
    rightTitle3,
    osImgUrl1,
    osImgUrl2,
    osImgUrl3,
    osImgUrl4,
    osImgUrl6,
    dotsImgUrl,
    osImgUrl7,
    ourStoryEndText,
    leftTitle,
  } = data;
  const [t1, t2] = title.split(" ");

  return (
    <div id="contactUs">
      <div className="d-flex justify-content-center align-items-center ourStoryBox">
        <div className="text-center">
          <div className="d-flex justify-content-center align-items-center">
            <div
              style={{
                backgroundImage: `url(${dotsImgUrl})`,
                backgroundSize: "cover",
              }}
              className="squareBox"
            ></div>
            <div className="px-2 fs30 clrgainsboro">{t1}</div>
            <div
              style={{
                backgroundImage: `url(${dotsImgUrl})`,
                backgroundSize: "cover",
              }}
              className="squareBox"
            ></div>
          </div>
          <div className="fs70 clrgainsboro">{t2}</div>
          <br />

          <div className="enterButton">
            <Link
              href={{
                pathname: "/ourStory-details",
                query: {
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
                },
              }}
            >
              ENTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
