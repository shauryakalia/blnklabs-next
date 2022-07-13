import Image from "next/image";
import NavLogo from "../public/assets/blnklogo.png";
import { isMobile } from "react-device-detect";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header(props) {
  const scrollToSection = (elemId) => {
    var element = document.getElementById(elemId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const [expandNav, setExpandNav] = useState(false);
  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
  }, [setMobile]);

  return (
    <nav
      id="blnkheader"
      className={`zIndex10 navbar navbar-expand-lg navbar-light d-flex justify-content-between rounded ${
        _isMobile ? "px-3" : "px-5"
      }`}
    >
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a className="navbar-brand" href="#">
          <Image src={NavLogo} width="125" height="70" alt="" loading="lazy" />
        </a>
      </Link>

      {_isMobile ? (
        <div className="d-flex flex-column align-items-end">
          <span className="themeClr d-block">A Cre-Tech Company</span>
          <span
            className="themeClr fs30"
            onClick={() => setExpandNav(!expandNav)}
          >
            <i className="bi bi-list"></i>
          </span>
        </div>
      ) : null}

      {_isMobile ? (
        <div
          className={`collapse navbar-collapse text-center ${
            expandNav ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("contactUs")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <ul className={`navbar-nav mr-auto headerMenu`}>
            <li className="nav-item">
              <Link
                href={{
                  pathname: "/",
                }}
              >
                <a
                  className="nav-link hover-underline"
                  // onClick={() => scrollToSection("home")}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline mx-4"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline"
                onClick={() => scrollToSection("contactUs")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <ul className={`navbar-nav mr-auto`}>
            <li className="nav-item navbar-company-text">
              <a className="nav-link" href="#">
                A Cre-Tech Company
              </a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
