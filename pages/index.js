import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState, useEffect } from "react";
import Home from "../components/Home";
import SecondPage from "../components/SecondPage";
import ExperimentPage from "../components/ExperimentPage";
import OurStory from "../components/OurStory";
import LastPage from "../components/LastPage";

export default function MainPage({ completeData }) {
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

  const [activeBgImgIdx, setActiveBgImgIdx] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);

  const setActiveBgImgIdxFn = () => {
    // if (window.pageYOffset > scrollPos * 50) {
    //   setScrollPos(scrollPos * 10);
    //   setActiveBgImgIdx(Math.floor(Math.random() * 3) + 1);
    // }
  };

  useEffect(() => {
    const onScroll = () => setActiveBgImgIdxFn();
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="slowImgSrchEffect"
      // style={{ backgroundImage: `url(${imgsUrls[activeBgImgIdx]})` }}
    >
      <Home data={home} />
      <SecondPage data={secondPage} />
      <br />
      <br />
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
