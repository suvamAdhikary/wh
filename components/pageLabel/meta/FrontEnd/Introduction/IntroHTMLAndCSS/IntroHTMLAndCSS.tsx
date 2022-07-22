import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import HeadingL2 from "../../../../../headings/HeadingL2";
import CSS from "./CSS";
import HTML from "./HTML";

const IntroHTMLAndCSS = () => {
  const [activeTab, setActiveTab] = useState<string>("GettingStartedwithHTML");

  const {
    showHambergerBtn,
    hideHambergerBtn,
    handleAsineMenuCta,
    handleAsideMenuItems,
  } = useApp();

  const handleTabSelection: aFunctionWithAStringArg = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const topics = [
    {
      name: "Introduction",
      value: "Introduction",
    },
    {
      name: "Getting Started with HTML",
      value: "GettingStartedwithHTML",
    },
    {
      name: "CSS Basics",
      value: "CSSBasics",
    },
  ];

  useEffect(() => {
    showHambergerBtn();
    handleAsineMenuCta(handleTabSelection);
    handleAsideMenuItems(topics);

    return () => {
      hideHambergerBtn();
      handleAsineMenuCta(() => {});
      handleAsideMenuItems([]);
    };
  }, []);

  return (
    <>
      <HeadingL2 title="Introduction to HTML and CSS" />
      {activeTab === "GettingStartedwithHTML" ? (
        <HTML />
      ) : activeTab === "CSSBasics" ? (
        <CSS />
      ) : (
        <></>
      )}
    </>
  );
};

export default IntroHTMLAndCSS;
