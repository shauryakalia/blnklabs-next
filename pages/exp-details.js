import Image from "next/image";
import Router, { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";

export default function Home({ data }) {
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
    if (!images) Router.push("/");
  }, [setMobile]);

  const router = useRouter();
  const { images, descTitle, descSubTitle, desc } = router.query;

  return images ? (
    <>
      <div id="exp1">
        {images.map((img, idx) => (
          <div
            className="exp-details-imgs"
            key={idx}
            style={{ height: _isMobile ? "300px" : "700px" }}
          >
            <Image
              key={idx}
              layout="fill"
              src={img}
              alt={`${0}-slide`}
              key={0}
              placeholder={images[0]}
            />
          </div>
        ))}
      </div>
      <div className="p-5 text-center h5 themeClr">
        <p className="h2 txtBold">{descTitle}</p>
        <p className="h4">{descSubTitle}</p>
        <p>{desc}</p>
      </div>
    </>
  ) : null;
}
