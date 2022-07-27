import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import IntroReact from "../UIFrameworks/IntroReact";
import IntroCrossPlatformDev from "./IntroCrossPlatformDev";
import IntroReactNative from "./IntroReactNative";

const ReactAndReactNative = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "IntroductiontoCross-platformDevelopment"
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
      name: "Introduction to Cross-platform Development",
      value: "IntroductiontoCross-platformDevelopment",
    },
    {
      name: "Introduction to React",
      value: "IntroductiontoReact",
    },
    {
      name: "Introduction to React Native",
      value: "IntroductiontoReactNative",
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
      <HeadingL2 title="React and React Native" />
      {activeTab === "IntroductiontoCross-platformDevelopment" ? (
        <>
          <IntroCrossPlatformDev />
        </>
      ) : activeTab === "IntroductiontoReact" ? (
        <>
          <IntroReact />
        </>
      ) : activeTab === "IntroductiontoReactNative" ? (
        <>
          <IntroReactNative />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReactAndReactNative;
