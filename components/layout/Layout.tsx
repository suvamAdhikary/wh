import Head from "next/head";
import React from "react";
import Back from "../buttons/Back";
import GoToTop from "../buttons/GoToTop";
import Footer from "./Footer";
import Header from "./Header";
import { useApp } from "../../context/AppContext";
import HamburgerBtn from "../buttons/HamburgerBtn";
import SideMenu from "./SideMenu";

export interface layoutProps {
  title: string;
  children?: any;
  accessTagsList?: {
    name: string;
    link: string;
  }[];
  handleHambergarClick?: any;
}

const Layout = ({
  children,
  title,
  accessTagsList,
  handleHambergarClick,
}: layoutProps) => {
  const { isShowBackBtn, isShowHanbergerBtn, isAsideOpen } = useApp();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <div className="wrapper">
          <Header accessTagsList={accessTagsList} />
          <div id="top"></div>
          <main>
            {isShowHanbergerBtn && (
              // <button onClick={handleHambergarClick}></button>
              <HamburgerBtn />
            )}
            {isShowBackBtn && <Back />}
            {isAsideOpen && <SideMenu />}
            {children}
          </main>
          <GoToTop />
          <Footer />
          {/* </div> */}
        </div>
      </>
    </>
  );
};

export default Layout;
