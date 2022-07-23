import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import CoreInternetTech from "./CoreInternetTech";
import HowTheWebWorks from "./HowTheWebWorks";

const StartWithWebDev = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("HowTheWebWorks");

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
      name: "How The Web Works",
      value: "HowTheWebWorks",
    },
    {
      name: "Core Internet Technologies",
      value: "CoreInternetTechnologies",
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
      <HeadingL2 title="Get started with web development" />
      {activeTab === "HowTheWebWorks" ? (
        <HowTheWebWorks />
      ) : activeTab === "CoreInternetTechnologies" ? (
        <CoreInternetTech />
      ) : (
        <></>
      )}
    </>
  );
};

export default StartWithWebDev;
