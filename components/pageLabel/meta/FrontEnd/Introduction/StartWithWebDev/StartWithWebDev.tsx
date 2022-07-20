import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import HeadingL2 from "../../../../../headings/HeadingL2";
import CoreInternetTech from "./CoreInternetTech";
import HowTheWebWorks from "./HowTheWebWorks";

const StartWithWebDev = () => {
  const [activeTab, setActiveTab] = useState<string>("HowTheWebWorks");

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
