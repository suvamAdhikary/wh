import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import HeadingL2 from "../../../../../headings/HeadingL2";
import IntroReact from "./IntroReact";
import IntroUIFrameworksLibraries from "./IntroUIFrameworksLibraries";

const UIFrameworks = () => {
  const [activeTab, setActiveTab] = useState<string>(
    "IntroUIFrameworksandLibraries"
  );

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
      name: "Intro UI Frameworks and Libraries",
      value: "IntroUIFrameworksandLibraries",
    },
    {
      name: "Introduction to React",
      value: "IntroductiontoReact",
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
      <HeadingL2 title="UI Frameworks" />
      {activeTab === "IntroUIFrameworksandLibraries" ? (
        <IntroUIFrameworksLibraries />
      ) : activeTab === "IntroductiontoReact" ? (
        <IntroReact />
      ) : (
        <></>
      )}
    </>
  );
};

export default UIFrameworks;
