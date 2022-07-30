import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import HeadingL1 from "../../../../text/headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import BuildingBlocksProgram from "./BuildingBlocksProgram/BuildingBlocksProgram";
import IntroJS from "./IntroJS/IntroJS";
import ProgrammingParadigms from "./ProgrammingParadigms/ProgrammingParadigms";
import Testing from "./Testing/Testing";

const ProgrammingWithJS = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const { showBackBtn, hideBackBtn } = useApp();

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const hereAgain = () => {
    setActiveTab("");
  };

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn();
    };
  }, []);

  const topics = [
    {
      name: "Introduction to Javascript",
      value: "IntroductiontoJavascript",
      cta: () => {},
    },
    {
      name: "The Building Blocks of a Program",
      value: "TheBuildingBlocksofaProgram",
      cta: () => {},
    },
    {
      name: "Programming Paradigms",
      value: "ProgrammingParadigms",
      cta: () => {},
    },
    {
      name: "Testing",
      value: "Testing",
      cta: () => {},
    },
  ];

  return (
    <>
      {activeTab === "IntroductiontoJavascript" ? (
        <>
          <IntroJS backToParent={hereAgain} />
        </>
      ) : activeTab === "TheBuildingBlocksofaProgram" ? (
        <>
          <BuildingBlocksProgram backToParent={hereAgain} />
        </>
      ) : activeTab === "ProgrammingParadigms" ? (
        <>
          <ProgrammingParadigms backToParent={hereAgain} />
        </>
      ) : activeTab === "Testing" ? (
        <>
          <Testing backToParent={hereAgain} />
        </>
      ) : (
        <>
          <HeadingL1 title="Programming with JavaScript" />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default ProgrammingWithJS;
