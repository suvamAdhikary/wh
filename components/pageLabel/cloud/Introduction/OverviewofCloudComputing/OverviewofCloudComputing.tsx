import React, { useEffect } from "react";
import { useApp } from "../../../../../context/AppContext";
import { magicBackProps } from "../../../../../interfaces/layout";
import BusinessCaseForCloudComputing from "./BusinessCaseForCloudComputing";
import EmergingTechnologiesAcceleratedByCloud from "./EmergingTechnologiesAcceleratedByCloud";
import IntroductionToCloudComputing from "./IntroductionToCloudComputing";

const OverviewofCloudComputing = ({ backToParent }: magicBackProps) => {
  const { showMagicBackBtn, hideMagicBackBtn, handleMagicBackCta } = useApp();

  useEffect(() => {
    showMagicBackBtn();
    handleMagicBackCta(backToParent);

    return () => {
      hideMagicBackBtn();
      handleMagicBackCta(() => {});
    };
  }, []);

  return (
    <>
      <IntroductionToCloudComputing />
      <BusinessCaseForCloudComputing />
      <EmergingTechnologiesAcceleratedByCloud />
    </>
  );
};

export default OverviewofCloudComputing;
