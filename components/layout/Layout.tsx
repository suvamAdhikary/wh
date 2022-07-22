import Head from "next/head";
import React from "react";
import Back from "../buttons/Back";
import GoToTop from "../buttons/GoToTop";
import Footer from "./Footer";
import Header from "./Header";
import { useApp } from "../../context/AppContext";
import HamburgerBtn from "../buttons/HamburgerBtn";
import SideMenu from "./SideMenu";
import MagicBack from "../buttons/MagicBack";

export interface layoutProps {
  title: string;
  children?: any;
  accessTagsList?: {
    name: string;
    link: string;
  }[];
  handleHambergarClick?: any;
}

const Layout = ({ children, title, accessTagsList }: layoutProps) => {
  const { isShowBackBtn, isShowMagicBackBtn, isShowHanbergerBtn, isAsideOpen } =
    useApp();

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
            {isShowHanbergerBtn && <HamburgerBtn />}
            {isShowBackBtn && <Back />}
            {isShowMagicBackBtn && <MagicBack />}
            {isAsideOpen && <SideMenu />}
            {children}
          </main>
          <GoToTop />
          <Footer />
        </div>
      </>
    </>
  );
};

export default Layout;
