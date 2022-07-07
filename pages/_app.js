import Head from "next/head";
import "../styles/globals.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "../components/Header";
import Parllax from "../components/Parllax";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);

  return (
    <>
      <Head>
        <title>BLNKLABS | A CRE-TECH COMPANY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A cre-tech company" />
        <link rel="icon" href="/assets/blnklogo.ico" />
      </Head>
      <Header />
      <Parllax imgSrc="/assets/parllax1.jpeg" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
