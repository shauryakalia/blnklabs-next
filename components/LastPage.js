import Image from "next/image";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function LastPage({ data }) {
  const [_isMobile, setMobile] = useState();
  const [innerHeight, setInnerHeight] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
    setInnerHeight(window.innerHeight);
  }, [setMobile]);
  const { endText, endImage, mobileEndImage } = data;
  return (
    <div className="lastSection">
      <div className="d-flex justify-content-end textRight">
        <p
          className={`col-md-8 h5 ${
            _isMobile ? "w-100" : "w-50"
          } p-4 textDark mt-4 lightFont`}
        >
          {endText}
        </p>
      </div>

      <div className="p-0 d-flex justify-content-between align-items-start">
        <div className="col-md-12 lastImgContainer">
          <div
            className={`verticalText  text-center lightFont topLeft ${
              _isMobile ? "fs16 mobileVerticalText" : ""
            }`}
          >
            FOR MORE INFO <i className="bi bi-arrow-down"></i>
          </div>
          {_isMobile ? (
            <Image
              src={mobileEndImage}
              width={828}
              height={707}
            />
          ) : (
            <div>
              <Image
                src={endImage}
                width={1920}
                height={1080}
                layout="responsive"
              />
            </div>
          )}
        </div>
      </div>
      {_isMobile ? (
        <>
          <div
            id="contactUs"
            className="mb-5 p-3 w-100 d-flex justify-content-between align-items-center"
          >
            <span className="d-block">
              <div>info.blnklabs.com</div>
              <div>+91 8650419419</div>
              <div>+91 9164660069</div>
            </span>

            <span className="d-block">
              <div className="d-flex flex-column justify-content-end fs20 ">
                <Link href="https://www.linkedin.com/company/blnklabs/?viewAsMember=true">
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/blnk_labs/">
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                </Link>
                <Link href="https://www.behance.net/blankcreativedesigns">
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-behance"></i>
                  </a>
                </Link>
              </div>
            </span>
          </div>

          <span className="d-block text-left px-3 pb-3">
            BLNK CREATIVE DESIGN STUDIO PVT. LTD.{" "}
          </span>
        </>
      ) : (
        <div
          id="contactUs"
          className="mb-5 p-3 w-100 d-flex justify-content-between align-items-end"
        >
          <span className="d-block">
            <div>info.blnklabs.com</div>
            <div className="d-flex justify-content-start fs20 ">
              <Link href="https://www.linkedin.com/company/blnklabs/?viewAsMember=true">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/blnk_creative_design_studios/">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram mx-3"></i>
                </a>
              </Link>
              <Link href="https://www.behance.net/blankcreativedesigns">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-behance"></i>
                </a>
              </Link>
            </div>
          </span>
          <span className="d-block">
            BLNK CREATIVE DESIGN STUDIO PVT. LTD.{" "}
          </span>
          <span className="d-block">
            <div>+91 8650419419</div>
            <div>+91 9164660069</div>
          </span>
        </div>
      )}
    </div>
  );
}
