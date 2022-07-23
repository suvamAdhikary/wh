import React, { useState } from "react";
import HeadingL1 from "../../../../headings/HeadingL1";
import NavInMain from "../../../../layout/NavInMain";
import CloudComputingModels from "./CloudComputingModels/CloudComputingModels";
import CloudSecurityMonitoringCaseStudiesJobs from "./CloudSecurityMonitoringCaseStudiesJobs/CloudSecurityMonitoringCaseStudiesJobs";
import ComponentsOfCloudComputing from "./ComponentsOfCloudComputing/ComponentsOfCloudComputing";
import EmergentTrendsAndPractices from "./EmergentTrendsAndPractices/EmergentTrendsAndPractices";
import OverviewofCloudComputing from "./OverviewofCloudComputing/OverviewofCloudComputing";

const IntroductionCloud = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const hereAgain = () => {
    setActiveTab("");
  };

  const topics = [
    {
      name: "Overview of Cloud Computing",
      value: "OverviewofCloudComputing",
      cta: () => {},
    },
    {
      name: "Cloud Computing Models",
      value: "CloudComputingModels",
      cta: () => {},
    },
    {
      name: "Components of Cloud Computing",
      value: "ComponentsofCloudComputing",
      cta: () => {},
    },
    {
      name: "Emergent Trends and Practices",
      value: "EmergentTrendsandPractices",
      cta: () => {},
    },
    {
      name: "Cloud Security, Monitoring, Case Studies, Jobs",
      value: "CloudSecurity,Monitoring,CaseStudies,Jobs",
      cta: () => {},
    },
  ];

  return (
    <>
      {activeTab === "OverviewofCloudComputing" ? (
        <>
          <OverviewofCloudComputing backToParent={hereAgain} />
        </>
      ) : activeTab === "CloudComputingModels" ? (
        <>
          <CloudComputingModels backToParent={hereAgain} />
        </>
      ) : activeTab === "ComponentsofCloudComputing" ? (
        <>
          <ComponentsOfCloudComputing backToParent={hereAgain} />
        </>
      ) : activeTab === "EmergentTrendsandPractices" ? (
        <>
          <EmergentTrendsAndPractices backToParent={hereAgain} />
        </>
      ) : activeTab === "CloudSecurity,Monitoring,CaseStudies,Jobs" ? (
        <>
          <CloudSecurityMonitoringCaseStudiesJobs backToParent={hereAgain} />
        </>
      ) : (
        <>
          <HeadingL1 title="Introduction to Cloud Computing By IBM Skills Network" />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default IntroductionCloud;
