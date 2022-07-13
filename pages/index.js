import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import SecondPage from "../components/SecondPage";
import ExperimentPage from "../components/ExperimentPage";
import OurStory from "../components/OurStory";
import LastPage from "../components/LastPage";
import Parllax from "../components/Parllax";

export default function MainPage({ completeData }) {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 768) setMobile(isMobile);
  }, [setMobile]);

  const {
    home,
    secondPage,
    thirdPage,
    fourthPage,
    fifthPage,
    ourStory,
    lastPage,
  } = completeData;

  let imgsUrls = [];

  if (home.parllaxImgs) {
    imgsUrls = home.parllaxImgs.split("|");
  }

  return (
    <>
      <Parllax
        imgSrc={
          _isMobile
            ? "/assets/Lines/mobile01.png"
            : "/assets/Lines/windows01.png"
        }
        zIndex={-10}
      />
      <div>
        <Home data={home} />
        <SecondPage data={secondPage} />
        <br />
        <ExperimentPage data={thirdPage} />
        <br />
        <ExperimentPage data={fourthPage} inverse={true} />
        <br />
        <ExperimentPage data={fifthPage} />
        <br />
        <OurStory data={ourStory} />
        <LastPage data={lastPage} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("dataFiles"));
  let completeData = {};
  files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("dataFiles", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);

    completeData = {
      ...completeData,
      [filename.replace(".md", "")]: eval("({" + data + "})"),
    };
  });

  return {
    props: {
      completeData,
    },
  };
}
