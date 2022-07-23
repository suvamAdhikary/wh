import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import IntroReact from "./IntroReact";
import IntroUIFrameworksLibraries from "./IntroUIFrameworksLibraries";

const UIFrameworks = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "IntroUIFrameworksandLibraries"
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
