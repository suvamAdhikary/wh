import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../headings/HeadingL2";
import CloudNativeApplicationsDevOpsAndApplicationModernization from "./CloudNativeApplicationsDevOpsAndApplicationModernization";
import HybridMultiCloudMicroservicesAndServerless from "./HybridMultiCloudMicroservicesAndServerless";

const EmergentTrendsAndPractices = ({ backToParent }: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "HybridMulti-Cloud,Microservices,andServerless"
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
      name: "Hybrid Multi-Cloud, Microservices, and Serverless",
      value: "HybridMulti-Cloud,Microservices,andServerless",
    },
    {
      name: "Cloud Native Applications, DevOps, and Application Modernization",
      value: "CloudNativeApplications,DevOps,andApplicationModernization",
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
      <HeadingL2 title="Emergent Trends and Practices" />
      {activeTab === "HybridMulti-Cloud,Microservices,andServerless" ? (
        <>
          <HybridMultiCloudMicroservicesAndServerless />
        </>
      ) : activeTab ===
        "CloudNativeApplications,DevOps,andApplicationModernization" ? (
        <>
          <CloudNativeApplicationsDevOpsAndApplicationModernization />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EmergentTrendsAndPractices;
