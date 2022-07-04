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

  const [_isMobile, setMobile] = useState();
  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 d-flex justify-content-between rounded">
      <Link
        href={{
          pathname: "/",
        }}
      >
        <a className="navbar-brand" href="#">
          <Image src={NavLogo} width="125" height="70" alt="" />
        </a>
      </Link>

      <ul
        className={`navbar-nav mr-auto ${_isMobile ? "d-none" : "headerMenu"}`}
      >
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
      <ul className={`navbar-nav mr-auto ${_isMobile ? "d-none" : ""}`}>
        <li className="nav-item navbar-company-text">
          <a className="nav-link" href="#">
            A Cre-Tech Company
          </a>
        </li>
      </ul>
    </nav>
  );
}
