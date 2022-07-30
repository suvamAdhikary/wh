import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../../context/AppContext";
import { aFunctionWithAStringArg } from "../../../../../../interfaces/functionType";
import { magicBackProps } from "../../../../../../interfaces/layout";
import HeadingL2 from "../../../../../text/headings/HeadingL2";
import CaseStudiesandJobs from "./CaseStudiesandJobs";
import CloudSecurityandMonitoring from "./CloudSecurityandMonitoring";

const CloudSecurityMonitoringCaseStudiesJobs = ({
  backToParent,
}: magicBackProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    "CloudSecurityandMonitoring"
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
      name: "Cloud Security and Monitoring",
      value: "CloudSecurityandMonitoring",
    },
    {
      name: "Case Studies and Jobs",
      value: "CaseStudiesandJobs",
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
      <HeadingL2 title="Cloud Security, Monitoring, Case Studies and Jobs" />
      {activeTab === "CloudSecurityandMonitoring" ? (
        <>
          <CloudSecurityandMonitoring />
        </>
      ) : activeTab === "CaseStudiesandJobs" ? (
        <>
          <CaseStudiesandJobs />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CloudSecurityMonitoringCaseStudiesJobs;
