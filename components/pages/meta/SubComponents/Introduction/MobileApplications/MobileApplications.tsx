import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import HowTheWebWorks from "../StartWithWebDev/HowTheWebWorks";
import Introduction from "./Introduction";
import IntroToMobileDev from "./IntroToMobileDev";

const MobileApplications = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("Introduction");

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
      name: "Introduction",
      value: "Introduction",
    },
    {
      name: "How The Web Works",
      value: "HowTheWebWorks",
    },
    {
      name: "Introduction to Mobile Development",
      value: "IntroductiontoMobileDevelopment",
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
      <HeadingL2 title="Mobile Applications" />
      {activeTab === "Introduction" ? (
        <>
          <Introduction />
        </>
      ) : activeTab === "HowTheWebWorks" ? (
        <>
          <HowTheWebWorks />
        </>
      ) : activeTab === "IntroductiontoMobileDevelopment" ? (
        <>
          <IntroToMobileDev />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default MobileApplications;
