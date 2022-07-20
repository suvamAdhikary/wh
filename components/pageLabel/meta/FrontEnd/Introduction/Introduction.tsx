import React, { useState } from "react";
import HeadingL1 from "../../../../headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import UnOrderdList from "../../../../lists/UnOrderdList";
import StartWithWebDev from "./StartWithWebDev/StartWithWebDev";

const Introduction = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

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
        <StartWithWebDev />
      ) : activeTab === "IntroductiontoHTMLandCSS" ? (
        <></>
      ) : activeTab === "UIFrameworks" ? (
        <></>
      ) : (
        <>
          <HeadingL1 title="Introduction to Front-End Development" />
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
