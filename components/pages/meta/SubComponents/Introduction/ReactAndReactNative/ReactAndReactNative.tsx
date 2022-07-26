import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";

const ReactAndReactNative = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("GettingStartedwithHTML");

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
      {activeTab === "GettingStartedwithHTML" ? (
        <></>
      ) : activeTab === "CSSBasics" ? (
        <></>
      ) : (
        <></>
      )}
    </>
  );
};

export default ReactAndReactNative;
