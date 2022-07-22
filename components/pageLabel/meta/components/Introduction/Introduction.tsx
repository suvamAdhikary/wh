import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import HeadingL1 from "../../../../headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import UnOrderdList from "../../../../lists/UnOrderdList";
import IntroHTMLAndCSS from "./IntroHTMLAndCSS/IntroHTMLAndCSS";
import StartWithWebDev from "./StartWithWebDev/StartWithWebDev";
import UIFrameworks from "./UIFrameworks/UIFrameworks";

export interface introductionProps {
  heading: string;
}

const Introduction = ({ heading }: introductionProps) => {
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
      name: "Get Started with Web Development",
      value: "GetStartedwithWebDevelopment",
      cta: () => {},
    },
    {
      name: "Introduction to HTML and CSS",
      value: "IntroductiontoHTMLandCSS",
      cta: () => {},
    },
    {
      name: "UI Frameworks",
      value: "UIFrameworks",
      cta: () => {},
    },
  ];

  const learningObjectives = {
    title: "Learning Objectives",
    list: [
      "Describe the front-end developer role",
      "Explain the core and underlying technologies that power the internet",
      "Use HTML to create a simple webpage",
      "Use CSS to control the appearance of a simple webpage",
      "Explain what React is",
      "Describe the applications and characteristics of the most popular UI frameworks",
    ],
  };

  return (
    <>
      {activeTab === "GetStartedwithWebDevelopment" ? (
        <StartWithWebDev backToParent={hereAgain} />
      ) : activeTab === "IntroductiontoHTMLandCSS" ? (
        <>
          <IntroHTMLAndCSS backToParent={hereAgain} />
        </>
      ) : activeTab === "UIFrameworks" ? (
        <>
          <UIFrameworks backToParent={hereAgain} />
        </>
      ) : (
        <>
          <HeadingL1 title={heading} />
          <UnOrderdList
            heading={learningObjectives.title}
            listData={learningObjectives.list}
          />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default Introduction;
