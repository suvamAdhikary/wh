import Head from "next/head";
import React from "react";
import GoToTop from "../buttons/GoToTop";
import Footer from "./Footer";
import Header from "./Header";

export interface layoutProps {
  title: string;
  children?: any;
  accessTagsList?: {
    name: string;
    link: string;
  }[];
}

const Layout = ({ children, title, accessTagsList }: layoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <div className="wrapper">
          <Header accessTagsList={accessTagsList} />
          <div id="top"></div>
          {/* <div className="my-0 mx-auto pb-16 w-screen h-fit overflow-y-scroll absolute top-16"> */}
          {/* <aside></aside> */}
          <main>{children}</main>
          <GoToTop />
          <Footer />
          {/* </div> */}
        </div>
      </>
    </>
  );
};

export default Layout;
