import React, { useEffect } from "react";
import { useApp } from "../../../../../context/AppContext";
import { magicBackProps } from "../../../../../interfaces/layout";

const CloudSecurityMonitoringCaseStudiesJobs = ({
  backToParent,
}: magicBackProps) => {
  const { showMagicBackBtn, hideMagicBackBtn, handleMagicBackCta } = useApp();

  useEffect(() => {
    showMagicBackBtn();
    handleMagicBackCta(backToParent);

    return () => {
      hideMagicBackBtn();
      handleMagicBackCta(() => {});
    };
  }, []);
  return <div>CloudSecurityMonitoringCaseStudiesJobs</div>;
};

export default CloudSecurityMonitoringCaseStudiesJobs;
