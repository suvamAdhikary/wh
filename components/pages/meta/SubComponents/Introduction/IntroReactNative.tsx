import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import HeadingL1 from "../../../../text/headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import IntroHTMLAndCSS from "./IntroHTMLAndCSS/IntroHTMLAndCSS";
import MobileApplications from "./MobileApplications/MobileApplications";
import ReactAndReactNative from "./ReactAndReactNative/ReactAndReactNative";

const IntroReactNative = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const { showBackBtn, hideBackBtn } = useApp();

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const hereAgain = () => {
    setActiveTab("");
  };

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn();
    };
  }, []);

  const topics = [
    {
      name: "Mobile Applications",
      value: "MobileApplications",
      cta: () => {},
    },
    {
      name: "Introduction to HTML and CSS",
      value: "IntroductiontoHTMLandCSS",
      cta: () => {},
    },
    {
      name: "React and React Native",
      value: "ReactandReactNative",
      cta: () => {},
    },
  ];

  return (
    <>
      {activeTab === "MobileApplications" ? (
        <>
          <MobileApplications backToParent={hereAgain} />
        </>
      ) : activeTab === "IntroductiontoHTMLandCSS" ? (
        <>
          <IntroHTMLAndCSS backToParent={hereAgain} />
        </>
      ) : activeTab === "ReactandReactNative" ? (
        <>
          <ReactAndReactNative backToParent={hereAgain} />
        </>
      ) : (
        <>
          <HeadingL1 title="Introduction to Mobile Development" />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default IntroReactNative;
