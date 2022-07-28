import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import AdvancedJavaScript from "./AdvancedJavaScript";
import FunctionalProgramming from "./FunctionalProgramming";
import JavaScriptInBrowser from "./JavaScriptInBrowser";
import ObjectOrientedProgramming from "./ObjectOrientedProgramming";

const ProgrammingParadigms = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "IntroductiontoFunctionalProgramming"
  );

  const {
    showMagicBackBtn,
    hideMagicBackBtn,
    handleMagicBackCta,
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
      name: "Introduction to Functional Programming",
      value: "IntroductiontoFunctionalProgramming",
    },
    {
      name: "Introduction to Object-Oriented Programming",
      value: "IntroductiontoObject-OrientedProgramming",
    },
    {
      name: "Advanced JavaScript Features",
      value: "AdvancedJavaScriptFeatures",
    },
    {
      name: "JavaScript in the Browser",
      value: "JavaScriptintheBrowser",
    },
  ];

  useEffect(() => {
    showHambergerBtn();
    showMagicBackBtn();
    handleMagicBackCta(backToParent);
    handleAsineMenuCta(handleTabSelection);
    handleAsideMenuItems(topics);

    return () => {
      hideMagicBackBtn();
      handleMagicBackCta(() => {});
      hideHambergerBtn();
      handleAsineMenuCta(() => {});
      handleAsideMenuItems([]);
    };
  }, []);

  return (
    <>
      <HeadingL2 title="Programming Paradigms" />
      {activeTab === "IntroductiontoFunctionalProgramming" ? (
        <>
          <FunctionalProgramming />
        </>
      ) : activeTab === "IntroductiontoObject-OrientedProgramming" ? (
        <>
          <ObjectOrientedProgramming />
        </>
      ) : activeTab === "AdvancedJavaScriptFeatures" ? (
        <>
          <AdvancedJavaScript />
        </>
      ) : activeTab === "JavaScriptintheBrowser" ? (
        <>
          <JavaScriptInBrowser />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProgrammingParadigms;
