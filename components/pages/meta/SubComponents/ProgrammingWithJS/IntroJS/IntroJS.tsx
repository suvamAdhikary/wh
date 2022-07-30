import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import ConditionalAndLoops from "./ConditionalAndLoops";
import SettingUp from "./SettingUp";
import WelcomeToProgramming from "./WelcomeToProgramming";

const IntroJS = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("SettingUp");

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
      name: "Setting Up",
      value: "SettingUp",
    },
    {
      name: "Welcome to Programming",
      value: "WelcometoProgramming",
    },
    {
      name: "Conditional and Loops",
      value: "ConditionalandLoops",
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
      <HeadingL2 title="Introduction to Javascript" />
      {activeTab === "SettingUp" ? (
        <>
          <SettingUp />
        </>
      ) : activeTab === "WelcometoProgramming" ? (
        <>
          <WelcomeToProgramming />
        </>
      ) : activeTab === "ConditionalandLoops" ? (
        <>
          <ConditionalAndLoops />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default IntroJS;
