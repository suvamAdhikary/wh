import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import DeploymentModels from "./DeploymentModels";
import ServiceModels from "./ServiceModels";

const CloudComputingModels = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>("ServiceModels");

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
      name: "Service Models",
      value: "ServiceModels",
    },
    {
      name: "Deployment Models",
      value: "DeploymentModels",
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
      <HeadingL2 title="Cloud Computing Models" />
      {activeTab === "ServiceModels" ? (
        <>
          <ServiceModels />
        </>
      ) : activeTab === "DeploymentModels" ? (
        <>
          <DeploymentModels />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CloudComputingModels;
