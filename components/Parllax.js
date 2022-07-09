import Image from "next/image";
import Rellax from "rellax";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function Parllax({ imgSrc, zIndex }) {
  const [_isMobile, setMobile] = useState();
  const [wh, setWh] = useState(800);

  useEffect(() => {
    setMobile(isMobile);
    // setNewParllaxEle("homeParllax", -10);
    setWh(window.innerHeight);
  }, [setMobile]);

  const setNewParllaxEle = (className, speed) => {
    return new Rellax(`.${className}`, {
      speed: speed,
      wrapper: null,
      vertical: true,
      horizontal: false,
    });
  };

  return (
    <>
      <div
        className="exp-details-imgs homeParllax col-md-12"
        style={{
          height: _isMobile ? "-webkit-fill-available" : `${wh + 50}px`,
          width: "100%",
          zIndex,
        }}
      >
        <Image
          layout="fill"
          src={imgSrc}
          alt={`${0}-slide`}
          placeholder={imgSrc}
          loading="lazy"
        />
      </div>
    </>
  );
}
